/* Exames — motor (sem tela).
   1) Lê o texto de laudos laboratoriais (foto/PDF já convertidos em texto, ou texto colado) e reconhece
      exame, valor, unidade e o intervalo de referência impresso no laudo.
   2) Classifica (baixo / normal / alto / crítico) — vale a referência do laudo; sem ela, a do catálogo.
   3) Cruza os resultados em padrões clínicos (anemia por VCM, LRA, distúrbios ácido-base com ânion gap,
      lesão hepatocelular × colestase, CAD, microangiopatia...) e aponta as fichas.
   4) Lê laudos de imagem/ECG/endoscopia e encontra os achados (respeitando negações: "sem derrame").
   Apoio à interpretação: conferir sempre com o laudo original e o quadro clínico. */

const exNorm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const exEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const exFmt = (n, c = 2) => n === null || n === undefined || !isFinite(n) ? "—" : Number(n).toLocaleString("pt-BR", { maximumFractionDigits: c });

/* "12.500" → 12500 · "4,5" → 4.5 · "1.234,5" → 1234.5 · "0.9" → 0.9 */
function exNumero(s) {
  s = String(s).trim();
  if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) return Number(s.replace(/\./g, "").replace(",", "."));
  return Number(s.replace(",", "."));
}
const exUnidadeNorm = u => exNorm(u).replace(/\s+/g, "").replace(/µ|μ/g, "u").replace(/³/g, "3").replace(/\^/g, "").replace("ml", "ml");

function exFaixa(ctx) {
  const a = ctx && ctx.idadeAnos;
  if (a === null || a === undefined || a === "") return "adulto";
  return a < 28 / 365.25 ? "rn" : a < 18 ? "crianca" : "adulto";
}
/* Intervalo do catálogo mais específico para o paciente. */
function exRefCatalogo(e, ctx) {
  if (!e.ref) return null;
  const faixa = exFaixa(ctx);
  let melhor = null, pts = -1;
  for (const r of e.ref) {
    if (r.faixa !== faixa && r.faixa !== "todas" && !(faixa === "rn" && r.faixa === "crianca" && !e.ref.some(x => x.faixa === "rn"))) continue;
    if (r.sexo && ctx && ctx.sexo && r.sexo !== ctx.sexo) continue;
    if (r.sexo && !(ctx && ctx.sexo)) continue;
    if (r.gestante && !(ctx && ctx.gestante)) continue;
    const p = (r.faixa === faixa ? 2 : 0) + (r.sexo ? 1 : 0) + (r.gestante ? 2 : 0);
    if (p > pts) { pts = p; melhor = r; }
  }
  return melhor;
}
const exRefTexto = r => !r ? "—" : r.texto ? r.texto : r.min !== undefined && r.max !== undefined ? `${exFmt(r.min, 3)} a ${exFmt(r.max, 3)}` : r.max !== undefined ? `até ${exFmt(r.max, 3)}` : `≥ ${exFmt(r.min, 3)}`;

function exClassificar(e, valor, ref, ctx) {
  if (valor === null || !isFinite(valor)) return "indefinido";
  const adulto = exFaixa(ctx) === "adulto";
  if (adulto && e.critico) {
    if (e.critico.min !== undefined && valor < e.critico.min) return "critico-baixo";
    if (e.critico.max !== undefined && valor > e.critico.max) return "critico-alto";
  }
  if (!ref) return "sem-ref";
  if (ref.min !== undefined && valor < ref.min) return "baixo";
  if (ref.max !== undefined && valor > ref.max) return "alto";
  return "normal";
}

/* Índice de sinônimos (o mais longo vence quando um contém o outro). */
let EX_SINONIMOS = null;
function exIndiceSinonimos() {
  if (EX_SINONIMOS) return EX_SINONIMOS;
  EX_SINONIMOS = [];
  for (const e of EXAMES_LAB) for (const s of e.sinonimos) EX_SINONIMOS.push({ e, s, re: new RegExp(`(^|[^a-z0-9])${exEsc(s)}(?=$|[^a-z0-9])`, "g") });
  EX_SINONIMOS.sort((a, b) => b.s.length - a.s.length);
  return EX_SINONIMOS;
}

const EX_RE_UNIDADE = /^\s*(mg\/dl|g\/dl|g\/l|mg\/l|mmol\/l|meq\/l|[uµμ]mol\/l|u\/l|ui\/l|mui\/ml|ui\/ml|ng\/ml|ng\/dl|pg\/ml|[uµμ]ui\/ml|mu\/l|%|\/mm3|\/mm³|\/[uµμ]l|mil\/mm3|mil\/mm³|x ?10\^?3\/[uµμ]l|x ?10³\/[uµμ]l|10\^?3\/[uµμ]l|10³\/[uµμ]l|x ?10\^?9\/l|10\^?9\/l|fl|pg|mmhg|segundos|seg|s\b|mm\/h|mm\/1a ?h|mg\/24 ?h|mg\/g|cel\/mm3|celulas\/mm3|mil)/;

const EX_RE_SECAO_URINA = /\b(eas|urina tipo|urina rotina|urina i\b|sumario de urina|urinalise|exame de urina|parcial de urina|elementos anormais|sedimentoscopia|sedimento urinario)\b/;
const EX_RE_SECAO_SANGUE = /\b(hemograma|eritrograma|leucograma|plaquetograma|bioquimica|gasometria|sorologia|soro\b|sangue|plasma)\b/;
/* Lê um laudo laboratorial em texto. ctx: { idadeAnos, sexo, gestante } */
function exLerLaudo(texto, ctx = {}) {
  const linhas = String(texto || "").split(/\r?\n/).map(l => l.replace(/\s+/g, " ").trim()).filter(Boolean);
  const idx = exIndiceSinonimos();
  const res = [];
  let secaoUrina = false;
  for (let i = 0; i < linhas.length; i++) {
    let n = exNorm(linhas[i]).replace(/\.{2,}/g, " ").replace(/_+/g, " ");
    /* Seção de urina (EAS): "Leucócitos 25.000/mL" é leucocitúria, não leucócitos do sangue. */
    if (EX_RE_SECAO_URINA.test(n)) secaoUrina = true;
    else if (EX_RE_SECAO_SANGUE.test(n)) secaoUrina = false;
    if (secaoUrina || /\d\s*\/\s*ml\b|por campo|p\/ ?campo/.test(n)) n = n.replace(/\b(leucocitos|hemacias|eritrocitos|proteinas|glicose|ph|hemoglobina)\b(?! ?(?:urina|na urina|\(urina\)|urinari[oa]))/g, "$1 urina");
    /* Encontra os exames citados na linha, sem sobreposição. */
    const ocupado = new Array(n.length).fill(false);
    const achados = [];
    for (const s of idx) {
      s.re.lastIndex = 0; let m;
      while ((m = s.re.exec(n))) {
        const ini = m.index + m[1].length, fim = ini + s.s.length;
        if (ocupado.slice(ini, fim).some(Boolean)) continue;
        for (let k = ini; k < fim; k++) ocupado[k] = true;
        achados.push({ e: s.e, ini, fim });
      }
    }
    achados.sort((a, b) => a.ini - b.ini);
    for (let j = 0; j < achados.length; j++) {
      const { e, fim } = achados[j];
      let seg = n.slice(fim, j + 1 < achados.length ? achados[j + 1].ini : n.length);
      /* Valor na linha seguinte (laudos em tabela). */
      if (!/\d/.test(seg) && e.tipo === "quantitativo" && i + 1 < linhas.length && /^[<>]?\s*\d/.test(exNorm(linhas[i + 1]))) seg = " " + exNorm(linhas[i + 1]);
      if (e.tipo === "qualitativo") {
        const qual = /\b(nao reagente|nao reativo|negativ[oa]s?|nao detectad[oa]|nao detectavel|ausentes?|indetectavel|nao contem)\b/.test(seg) ? "negativo"
          : /\b(reagente|reativo|positiv[oa]s?|detectad[oa]|detectavel|presentes?|tracos)\b/.test(seg) || /(^|[\s:])\+{1,4}(?=\s|$)/.test(seg) ? "positivo"
          : /\b(indeterminado|inconclusivo)\b/.test(seg) ? "indeterminado" : null;
        const tit = seg.match(/1\s*:\s*(\d{1,4})/);
        if (qual) res.push({ e, qualitativo: qual, titulo: tit ? `1:${tit[1]}` : "", status: qual === "positivo" ? "alto" : qual === "negativo" ? "normal" : "sem-ref", trecho: linhas[i] });
        continue;
      }
      /* Números com unidade logo depois. */
      const nums = [...seg.matchAll(/([<>≤≥]?)\s*(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:[.,]\d+)?)(\s*(?:mil\b)?)/g)];
      if (!nums.length) continue;
      let escolhido = null;
      for (const m of nums) {
        const depois = seg.slice(m.index + m[0].length);
        const um = depois.match(EX_RE_UNIDADE);
        const unidade = um ? um[1] : (m[3].trim() === "mil" ? "mil" : "");
        if (unidade === "%" && exUnidadeNorm(e.unidade) !== "%") continue;
        escolhido = { m, unidade, depois }; break;
      }
      if (!escolhido) continue;
      let valor = exNumero(escolhido.m[2]);
      let unidade = escolhido.unidade;
      if (/mil/.test(escolhido.m[3]) || unidade === "mil") { valor *= 1000; unidade = e.unidade; }
      /* Conversão de unidade. */
      let fator = 1;
      if (unidade && exUnidadeNorm(unidade) !== exUnidadeNorm(e.unidade)) {
        const c = (e.conversoes || []).find(c => exUnidadeNorm(c.unidade) === exUnidadeNorm(unidade));
        if (c) fator = c.fator;
      }
      valor = valor * fator;
      /* Contagens em milhares sem unidade (ex.: "Plaquetas: 250"). */
      const refCat = exRefCatalogo(e, ctx);
      /* "1.025" (densidade) não é milhar quando a referência é pequena. */
      if (refCat && refCat.max !== undefined && refCat.max < 100 && /^\d{1,3}\.\d{3}$/.test(escolhido.m[2]) && valor / fator > refCat.max * 50) valor = Number(escolhido.m[2]) * fator;
      if (/mm3|mm³|ul/.test(exUnidadeNorm(e.unidade)) && refCat && refCat.min > 1000 && valor < 1000 && !unidade) valor *= 1000;
      /* Referência impressa no laudo (depois do valor). */
      let refLaudo = null;
      const resto = escolhido.depois.replace(EX_RE_UNIDADE, "");
      const r1 = resto.match(/(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:[.,]\d+)?)\s*(?:a|-|–|ate)\s*(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:[.,]\d+)?)/);
      const r2 = resto.match(/(?:inferior a|menor que|ate|<|≤)\s*(\d+(?:[.,]\d+)?)/);
      const r3 = resto.match(/(?:superior a|maior que|acima de|>|≥)\s*(\d+(?:[.,]\d+)?)/);
      if (r1) refLaudo = { min: exNumero(r1[1]) * fator, max: exNumero(r1[2]) * fator };
      else if (r2) refLaudo = { max: exNumero(r2[1]) * fator };
      else if (r3) refLaudo = { min: exNumero(r3[1]) * fator };
      if (refLaudo && refCat && refCat.min > 1000 && (refLaudo.max ?? refLaudo.min) < 1000) { if (refLaudo.min !== undefined) refLaudo.min *= 1000; if (refLaudo.max !== undefined) refLaudo.max *= 1000; }
      if (refLaudo && refLaudo.min !== undefined && refLaudo.max !== undefined && refLaudo.min > refLaudo.max) refLaudo = null;
      const ref = refLaudo || refCat;
      res.push({ e, valor, unidade: e.unidade, ref, refFonte: refLaudo ? "laudo" : refCat ? "catálogo" : "", status: exClassificar(e, valor, ref, ctx), trecho: linhas[i] });
    }
  }
  /* Mantém o primeiro valor de cada exame e guarda repetições. */
  const porId = new Map();
  for (const r of res) {
    if (!porId.has(r.e.id)) porId.set(r.e.id, { ...r, outros: [] });
    else porId.get(r.e.id).outros.push(r);
  }
  return [...porId.values()];
}

/* Resultado digitado manualmente: { id: valor } */
function exDeValores(valores, ctx = {}) {
  const out = [];
  for (const [id, v] of Object.entries(valores)) {
    const e = EXAMES_LAB.find(x => x.id === id); if (!e || v === "" || v === null || v === undefined) continue;
    if (e.tipo === "qualitativo") { out.push({ e, qualitativo: v, status: v === "positivo" ? "alto" : "normal", trecho: "digitado", outros: [] }); continue; }
    const valor = exNumero(v); if (!isFinite(valor)) continue;
    const ref = exRefCatalogo(e, ctx);
    out.push({ e, valor, unidade: e.unidade, ref, refFonte: ref ? "catálogo" : "", status: exClassificar(e, valor, ref, ctx), trecho: "digitado", outros: [] });
  }
  return out;
}

/* ---------- padrões entre exames ---------- */
function exPadroes(resultados, ctx = {}) {
  const R = Object.fromEntries(resultados.map(r => [r.e.id, r]));
  const v = id => R[id] && isFinite(R[id].valor) ? R[id].valor : null;
  const st = id => R[id] ? R[id].status : null;
  const alto = id => /alto/.test(st(id) || ""), baixo = id => /baixo/.test(st(id) || "");
  const lsn = id => R[id] && R[id].ref && R[id].ref.max !== undefined ? R[id].ref.max : null;
  const xLsn = id => v(id) !== null && lsn(id) ? v(id) / lsn(id) : null;
  const pos = id => R[id] && R[id].qualitativo === "positivo";
  const P = [];
  const add = (nivel, titulo, texto, fichas) => P.push({ nivel, titulo, texto, fichas: fichas.filter(id => typeof FICHAS === "undefined" || FICHAS.some(f => f.id === id)) });

  /* Anemia e VCM */
  if (baixo("hemoglobina")) {
    const vcm = v("vcm");
    const tipo = vcm === null ? "" : vcm < 80 ? "microcítica" : vcm > 100 ? "macrocítica" : "normocítica";
    let txt = `Hemoglobina ${exFmt(v("hemoglobina"), 1)} g/dL${tipo ? `, ${tipo} (VCM ${exFmt(vcm, 0)} fL)` : ""}.`;
    const f = ["anemia-investigacao"];
    if (tipo === "microcítica") {
      if (v("ferritina") !== null && baixo("ferritina")) { txt += " Ferritina baixa: deficiência de ferro — investigar perda (sangramento digestivo/ginecológico)."; f.push("anemia-ferropriva"); }
      else if (v("ferritina") !== null) { txt += " Ferritina normal/alta: anemia de doença crônica ou talassemia (eletroforese de hemoglobina)."; f.push("talassemias"); }
      else { txt += " Pedir ferritina, ferro e saturação de transferrina."; f.push("anemia-ferropriva"); }
    } else if (tipo === "macrocítica") {
      if (baixo("vitamina-b12") || baixo("acido-folico")) { txt += " B12/folato baixos: anemia megaloblástica."; f.push("anemia-megaloblastica"); }
      else txt += " Investigar B12, folato, TSH, álcool, hepatopatia, medicamentos e mielodisplasia.";
      f.push("anemia-megaloblastica");
    } else if (tipo === "normocítica") {
      if (alto("reticulocitos")) { txt += " Reticulócitos altos: hemólise ou sangramento agudo."; f.push("anemias-hemoliticas"); }
      if (alto("creatinina")) { txt += " Com creatinina elevada: considerar anemia da DRC."; f.push("doenca-renal-cronica"); }
    }
    if (ctx.gestante) f.push("anemia-gestacao");
    add(v("hemoglobina") < 7 ? "critico" : "alto", "Anemia", txt, f);
  }
  /* Leucócitos */
  if (alto("leucocitos") || alto("neutrofilos") || alto("bastoes")) {
    const inf = alto("pcr") || alto("procalcitonina");
    add(v("leucocitos") > 30000 ? "alto" : "moderado", "Leucocitose/neutrofilia", `Leucócitos ${exFmt(v("leucocitos"), 0)}/mm³${alto("bastoes") ? " com desvio à esquerda" : ""}${inf ? " e marcador inflamatório elevado" : ""}: infecção bacteriana é a principal hipótese; também estresse, corticoide, necrose tecidual. Leucocitose muito alta: considerar leucemia.`, ["sepse", "pneumonia", "pielonefrite", "leucemias"]);
  }
  const neut = v("neutrofilos");
  if (neut !== null && neut < 1500) add(neut < 500 ? "critico" : "alto", "Neutropenia", `Neutrófilos ${exFmt(neut, 0)}/mm³${neut < 500 ? " (grave)" : ""}. Com febre: neutropenia febril — antibiótico em até 1 hora.`, ["neutropenia-febril", "leucemias"]);
  /* Pancitopenia */
  if (baixo("hemoglobina") && baixo("leucocitos") && baixo("plaquetas")) add("alto", "Pancitopenia", "Queda das três séries: deficiência de B12/folato, infiltração medular (leucemia, linfoma, mieloma), aplasia, hiperesplenismo (cirrose), infecções virais e fármacos.", ["leucemias", "anemia-megaloblastica", "cirrose-descompensada"]);
  /* Plaquetas e microangiopatia */
  const plq = v("plaquetas");
  if (plq !== null && baixo("plaquetas")) {
    const hemolise = alto("ldh") && (alto("bilirrubina-indireta") || alto("bilirrubina-total")) && baixo("hemoglobina");
    if (hemolise) add("critico", "Microangiopatia trombótica (suspeita)", `Plaquetopenia + anemia + LDH e bilirrubina indireta altos: pensar em PTT/SHU${ctx.gestante ? " e HELLP" : ""} — esfregaço (esquizócitos), função renal, urgência hematológica.`, ["trombocitopenia", "sindrome-hemolitico-uremica", ...(ctx.gestante ? ["hipertensao-gestacao"] : [])]);
    else add(plq < 20000 ? "critico" : plq < 50000 ? "alto" : "moderado", "Plaquetopenia", `Plaquetas ${exFmt(plq, 0)}/mm³: confirmar no esfregaço (pseudoplaquetopenia por EDTA), investigar dengue, sepse/CIVD, PTI, hepatopatia, fármacos.`, ["trombocitopenia", "dengue", "coagulopatias-urgencia"]);
  }
  /* Hemólise isolada */
  if (alto("ldh") && alto("bilirrubina-indireta") && !baixo("plaquetas")) add("moderado", "Padrão de hemólise", "LDH e bilirrubina indireta altos: hemólise (Coombs direto, reticulócitos, esfregaço) ou síndrome de Gilbert se isolada.", ["anemias-hemoliticas"]);
  /* Renal */
  if (alto("creatinina")) {
    const ur = v("ureia"), cr = v("creatinina");
    const rel = ur !== null && cr ? ur / cr : null;
    add(cr >= 3 ? "alto" : "moderado", "Função renal alterada", `Creatinina ${exFmt(cr, 2)} mg/dL${rel ? ` · ureia/creatinina ${exFmt(rel, 0)}${rel > 40 ? " (sugere causa pré-renal)" : ""}` : ""}. Comparar com valor prévio: aumento ≥ 0,3 mg/dL em 48 h ou ≥ 1,5× em 7 dias = LRA (KDIGO); estável > 3 meses = DRC.`, ["lesao-renal-aguda", "doenca-renal-cronica", "dialise-urgencia"]);
  }
  /* Eletrólitos */
  const k = v("potassio");
  if (k !== null && k > 5.0) add(k >= 6.5 ? "critico" : k >= 6 ? "alto" : "moderado", "Hipercalemia", `Potássio ${exFmt(k, 1)} mEq/L: ECG agora; afastar hemólise da amostra; ${k >= 6.5 ? "tratamento imediato (gluconato de cálcio, insulina + glicose)." : "corrigir causa (IECA/BRA, espironolactona, LRA)."}`, ["hipercalemia", "lesao-renal-aguda"]);
  if (k !== null && k < 3.5) add(k < 2.5 ? "critico" : "moderado", "Hipocalemia", `Potássio ${exFmt(k, 1)} mEq/L: ECG, magnésio, repor potássio; causas: diuréticos, vômitos, diarreia, insulina.`, ["hipocalemia", "disturbios-magnesio"]);
  const na = v("sodio");
  if (na !== null && na < 135) add(na < 120 ? "critico" : na < 130 ? "alto" : "moderado", "Hiponatremia", `Sódio ${exFmt(na, 0)} mEq/L: avaliar sintomas neurológicos, volemia, osmolalidade; correção máxima 8–10 mEq/L em 24 h.`, ["hiponatremia"]);
  if (na !== null && na > 145) add(na > 160 ? "critico" : "moderado", "Hipernatremia", `Sódio ${exFmt(na, 0)} mEq/L: déficit de água livre; corrigir devagar.`, ["hipernatremia"]);
  if (alto("calcio-total") || alto("calcio-ionico")) add("alto", "Hipercalcemia", "Cálcio elevado: PTH (hiperparatireoidismo) × malignidade (PTH suprimido); hidratação se sintomática.", ["hipercalcemia"]);
  if (baixo("calcio-ionico") || (baixo("calcio-total") && !baixo("albumina"))) add("moderado", "Hipocalcemia", "Cálcio baixo (corrigir pela albumina se cálcio total): magnésio, PTH, vitamina D, função renal.", ["hipocalcemia", "disturbios-magnesio"]);
  if (baixo("magnesio") || alto("magnesio")) add("moderado", "Distúrbio do magnésio", "Magnésio alterado: corrigir junto com potássio e cálcio.", ["disturbios-magnesio"]);
  /* Ácido-base */
  const ph = v("ph"), hco3 = v("bicarbonato"), pco2 = v("pco2"), lac = v("lactato");
  if (ph !== null) {
    const ag = v("sodio") !== null && v("cloro") !== null && hco3 !== null ? v("sodio") - (v("cloro") + hco3) : null;
    if (ph < 7.35 && hco3 !== null && hco3 < 22) {
      const esperado = 1.5 * hco3 + 8;
      let txt = `Acidose metabólica (pH ${exFmt(ph, 2)}, HCO₃ ${exFmt(hco3, 1)})`;
      if (ag !== null) txt += ` · ânion gap ${exFmt(ag, 0)} (${ag > 12 ? "AUMENTADO: cetoacidose, lactato, LRA, intoxicações (metanol, etilenoglicol, salicilato)" : "normal/hiperclorêmica: diarreia, acidose tubular, SF em excesso"})`;
      if (pco2 !== null) txt += ` · pCO₂ esperada (Winter) ${exFmt(esperado - 2, 0)}–${exFmt(esperado + 2, 0)}: ${pco2 > esperado + 2 ? "acidose respiratória associada" : pco2 < esperado - 2 ? "alcalose respiratória associada" : "compensação adequada"}`;
      add(ph < 7.2 ? "critico" : "alto", "Acidose metabólica", txt + ".", ["gasometria-acido-base", ...(ag > 12 ? ["cetoacidose", "sepse", "lesao-renal-aguda", "intoxicacoes-exogenas"] : ["diarreia-adulto"])]);
    } else if (ph < 7.35 && pco2 !== null && pco2 > 45) add(ph < 7.25 ? "critico" : "alto", "Acidose respiratória", `pH ${exFmt(ph, 2)} com pCO₂ ${exFmt(pco2, 0)}: hipoventilação (DPOC, sedação, fadiga, neuromuscular) — avaliar VNI/IOT.`, ["gasometria-acido-base", "insuficiencia-respiratoria-aguda", "dpoc-exacerbacao", "vni"]);
    else if (ph > 7.45 && hco3 !== null && hco3 > 26) add("moderado", "Alcalose metabólica", "Vômitos, diuréticos, hipocalemia, contração de volume.", ["gasometria-acido-base", "hipocalemia"]);
    else if (ph > 7.45 && pco2 !== null && pco2 < 35) add("moderado", "Alcalose respiratória", "Hiperventilação: dor, ansiedade, hipoxemia, sepse inicial, TEP, gestação.", ["gasometria-acido-base", "tep"]);
  }
  if (lac !== null && lac >= 2) add(lac >= 4 ? "critico" : "alto", "Hiperlactatemia", `Lactato ${exFmt(lac, 1)} mmol/L: hipoperfusão (sepse, choque), isquemia mesentérica, metformina, convulsão. ${lac >= 4 ? "≥ 4 = choque séptico se infecção." : ""}`, ["sepse", "choque", "isquemia-mesenterica"]);
  /* Glicose / CAD */
  const gli = v("glicemia-jejum") ?? v("glicemia-capilar");
  if (gli !== null && gli >= 250 && ((ph !== null && ph < 7.3) || (hco3 !== null && hco3 < 18)) && (pos("cetonas-urina") || alto("cetonas-urina") || ph !== null)) add("critico", "Cetoacidose diabética (critérios)", `Glicemia ${exFmt(gli, 0)} com acidose${pos("cetonas-urina") ? " e cetonúria" : ""}: CAD — hidratação, potássio, insulina IV.`, ["cetoacidose", "cad-pediatrica"]);
  else if (gli !== null && gli > 600) add("critico", "Hiperglicemia grave", `Glicemia ${exFmt(gli, 0)}: estado hiperglicêmico hiperosmolar — calcular osmolalidade.`, ["hiperglicemia"]);
  if (gli !== null && gli < 70) add(gli < 54 ? "critico" : "alto", "Hipoglicemia", `Glicemia ${exFmt(gli, 0)} mg/dL: tratar agora.`, ["hipoglicemia"]);
  const a1c = v("hba1c"), gj = v("glicemia-jejum");
  if ((a1c !== null && a1c >= 6.5) || (gj !== null && gj >= 126 && gj < 250)) add("moderado", "Critério de diabetes", `${a1c !== null ? `HbA1c ${exFmt(a1c, 1)}%` : ""}${a1c !== null && gj !== null ? " · " : ""}${gj !== null ? `glicemia de jejum ${exFmt(gj, 0)}` : ""}: diabetes se confirmado em 2ª amostra (ou com sintomas).`, ["diabetes-tipo-2", "diabetes-tipo-1"]);
  else if ((a1c !== null && a1c >= 5.7) || (gj !== null && gj >= 100 && gj < 126)) add("moderado", "Pré-diabetes", "HbA1c 5,7–6,4% ou glicemia de jejum 100–125 mg/dL.", ["pre-diabetes"]);
  /* Fígado */
  const xAlt = Math.max(xLsn("tgp") || 0, xLsn("tgo") || 0), xFa = Math.max(xLsn("fosfatase-alcalina") || 0, xLsn("ggt") ? xLsn("ggt") / 2 : 0);
  if (xAlt > 1 || xFa > 1 || alto("bilirrubina-direta")) {
    const R = xLsn("tgp") && xLsn("fosfatase-alcalina") ? xLsn("tgp") / xLsn("fosfatase-alcalina") : null;
    const padrao = R !== null ? (R >= 5 ? "hepatocelular" : R <= 2 ? "colestático" : "misto") : xAlt >= 3 && xAlt > xFa ? "hepatocelular" : xFa > xAlt ? "colestático" : "";
    let txt = `Transaminases ${exFmt(xAlt, 1)}× LSN; FA/GGT ${exFmt(xFa, 1)}× LSN${R !== null ? ` · fator R ${exFmt(R, 1)}` : ""}${padrao ? ` → padrão ${padrao}` : ""}.`;
    if (v("tgo") && v("tgp") && v("tgo") / v("tgp") >= 2) txt += " TGO/TGP ≥ 2: sugere álcool.";
    if (xAlt >= 10) txt += " Elevação > 10× LSN: hepatite viral aguda, isquêmica, medicamentosa (paracetamol).";
    const f = padrao === "colestático" ? ["ictericia", "colecistite-colangite", "doencas-vias-biliares"] : ["hepatite-aguda-insuficiencia-hepatica", "hepatites-virais", "masld"];
    if (v("tgo") && v("tgp") && v("tgo") / v("tgp") >= 2) f.push("uso-alcool");
    add(xAlt >= 10 || (v("tp-inr") !== null && v("tp-inr") >= 1.5 && xAlt >= 3) ? "alto" : "moderado", "Alteração hepática", txt, f);
  }
  if (alto("bilirrubina-indireta") && !alto("bilirrubina-direta") && !alto("ldh")) add("moderado", "Hiperbilirrubinemia indireta", "Isolada: Gilbert (benigno) ou hemólise (LDH, reticulócitos).", ["ictericia", "anemias-hemoliticas"]);
  if (baixo("albumina") && v("tp-inr") !== null && v("tp-inr") >= 1.5) add("alto", "Disfunção de síntese hepática", "Albumina baixa + INR alto sem anticoagulante: insuficiência hepática/cirrose descompensada.", ["cirrose-descompensada", "hepatite-aguda-insuficiencia-hepatica"]);
  if (xLsn("lipase") >= 3 || xLsn("amilase") >= 3) add("alto", "Pancreatite (critério enzimático)", "Lipase/amilase ≥ 3× LSN + dor típica = pancreatite aguda (2 de 3 critérios de Atlanta).", ["pancreatite-aguda"]);
  /* Músculo e coração */
  if (xLsn("ck") >= 5) add(v("ck") > 15000 ? "critico" : "alto", "Rabdomiólise", `CK ${exFmt(v("ck"), 0)} U/L (${exFmt(xLsn("ck"), 0)}× LSN): hidratação vigorosa, potássio, função renal.`, ["rabdomiolise", "lesao-renal-aguda"]);
  if (alto("troponina")) add("alto", "Lesão miocárdica", "Troponina acima do percentil 99 do kit: repetir (delta) — SCA, miocardite, TEP, IC, sepse, LRA. Interpretar com ECG e clínica.", ["sca", "miocardite", "tep", "ic-descompensada"]);
  if (alto("bnp") || alto("nt-probnp")) add("moderado", "Peptídeo natriurético elevado", "Sugere IC (descompensada se quadro agudo); também LRA, FA, TEP, idade avançada.", ["ic-descompensada", "ic-cronica"]);
  if (alto("d-dimero")) add("moderado", "D-dímero elevado", "Só tem valor com probabilidade pré-teste (Wells/PERC): alto não confirma TEV — exige imagem; normal em baixa probabilidade exclui.", ["tep", "tvp"]);
  /* Inflamação */
  if ((alto("pcr") || alto("procalcitonina") || alto("vhs")) && !P.some(p => p.titulo.startsWith("Leucocitose"))) add("moderado", "Marcador inflamatório elevado", `${alto("procalcitonina") ? "Procalcitonina elevada favorece infecção bacteriana. " : ""}PCR/VHS inespecíficos: infecção, inflamação, neoplasia, autoimune.`, ["sepse", "pneumonia", "poliartralgia-febril"]);
  /* Coagulação */
  const inr = v("tp-inr");
  if (inr !== null && inr > 1.3) add(inr >= 5 ? "alto" : "moderado", "INR alargado", `INR ${exFmt(inr, 1)}: varfarina, hepatopatia, deficiência de vitamina K, CIVD.${inr >= 5 ? " Avaliar reversão se sangramento." : ""}`, ["anticoagulacao-oral", "coagulopatias-urgencia", "cirrose-descompensada"]);
  if (alto("ttpa")) add("moderado", "TTPa alargado", "Heparina, hemofilia/deficiência de fator, anticoagulante lúpico, CIVD — teste de mistura.", ["hemofilias", "coagulopatias-urgencia"]);
  if (baixo("fibrinogenio") && baixo("plaquetas")) add("alto", "Consumo (CIVD?)", "Fibrinogênio baixo + plaquetopenia ± INR/D-dímero altos: coagulação intravascular disseminada.", ["coagulopatias-urgencia", "sepse"]);
  /* Tireoide */
  if (alto("tsh") && baixo("t4-livre")) add("moderado", "Hipotireoidismo primário", "TSH alto com T4 livre baixo.", ["hipotireoidismo", ...(ctx.gestante ? ["tireoide-gestacao"] : [])]);
  else if (alto("tsh")) add("moderado", "TSH elevado", "Com T4L normal: hipotireoidismo subclínico (repetir em 6–12 semanas).", ["hipotireoidismo", ...(ctx.gestante ? ["tireoide-gestacao"] : [])]);
  if (baixo("tsh") && alto("t4-livre")) add("alto", "Hipertireoidismo", "TSH suprimido com T4L alto.", ["hipertireoidismo", ...(ctx.gestante ? ["tireoide-gestacao"] : [])]);
  else if (baixo("tsh")) add("moderado", "TSH baixo", "Com T4L normal: hipertireoidismo subclínico ou uso de levotiroxina em excesso.", ["hipertireoidismo"]);
  /* Lípides */
  if (v("ldl") !== null && v("ldl") >= 190) add("moderado", "LDL ≥ 190 mg/dL", "Alto risco por si só; pensar em hipercolesterolemia familiar.", ["dislipidemia"]);
  else if (alto("ldl") || alto("colesterol-total") || baixo("hdl")) add("moderado", "Dislipidemia", "Definir meta de LDL pelo risco cardiovascular (SBC 2025).", ["dislipidemia"]);
  if (v("triglicerides") !== null && v("triglicerides") >= 500) add("alto", "Hipertrigliceridemia grave", "TG ≥ 500 mg/dL: risco de pancreatite — tratar prioritariamente.", ["dislipidemia", "pancreatite-aguda"]);
  /* Urina */
  const nitrito = pos("nitrito") || (R["nitrito"] && R["nitrito"].qualitativo === "positivo");
  if (nitrito || alto("leucocitos-urina") || pos("urocultura")) add(pos("urocultura") ? "alto" : "moderado", "Infecção urinária possível", `${nitrito ? "Nitrito positivo. " : ""}${alto("leucocitos-urina") ? "Leucocitúria. " : ""}${pos("urocultura") ? "Urocultura positiva. " : ""}Correlacionar com sintomas (bacteriúria assintomática só se trata na gestação e antes de procedimento urológico).`, ctx.gestante ? ["itu-gestante"] : (ctx.idadeAnos !== undefined && ctx.idadeAnos < 18 ? ["itu-infancia"] : ["cistite", "pielonefrite"]));
  if (alto("hemacias-urina")) add("moderado", "Hematúria", "Confirmar em 2 amostras; investigar litíase, ITU, glomerulopatia, neoplasia (idade/tabagismo).", ["hematuria", "colica-renal", "sindromes-glomerulares"]);
  if (alto("proteinas-urina") || alto("albuminuria")) add("moderado", "Proteinúria/albuminúria", `${baixo("albumina") ? "Com albumina sérica baixa: síndrome nefrótica. " : ""}Quantificar (RAC/RPC); DRC, diabetes, glomerulopatias.`, ["sindromes-glomerulares", "doenca-renal-cronica"]);
  /* Ferro / vitaminas */
  if (baixo("ferritina") && !baixo("hemoglobina")) add("moderado", "Ferropenia sem anemia", "Ferritina baixa: estoques depletados — investigar perda e repor.", ["anemia-ferropriva"]);
  if (baixo("vitamina-b12") && !baixo("hemoglobina")) add("moderado", "Vitamina B12 baixa", "Pode causar neuropatia mesmo sem anemia.", ["anemia-megaloblastica"]);
  if (baixo("vitamina-d")) add("moderado", "Vitamina D baixa", "Repor conforme nível e risco (osteoporose, quedas).", ["osteoporose"]);
  /* Líquor */
  if (alto("celulas-liquor")) add("critico", "Pleocitose no líquor", `${baixo("glicose-liquor") ? "Glicose baixa + " : ""}${alto("proteina-liquor") ? "proteína alta: " : ""}padrão bacteriano se neutrófilos predominam, glicose baixa e proteína alta; viral se linfócitos e glicose normal.`, ["meningite"]);
  /* β-hCG */
  if (pos("beta-hcg-qualitativo") || pos("beta-hcg") || alto("beta-hcg")) add("moderado", "β-hCG positivo", "Gestação: datar e localizar (USG); dor ou sangramento → excluir ectópica.", ["diagnostico-gestacao", "gravidez-ectopica", "abortamento"]);
  /* PSA */
  if (alto("psa")) add("moderado", "PSA elevado", "Repetir (prostatite, manipulação e HPB elevam); decisão compartilhada sobre biópsia/RM.", ["tumores-urologicos", "hpb", "prostatite"]);
  /* Sorologias positivas: as fichas do próprio exame. */
  for (const r of resultados) if (r.qualitativo === "positivo" && r.e.positivo) add("moderado", `${r.e.nome}: positivo${r.titulo ? ` (${r.titulo})` : ""}`, (r.e.positivo.causas || []).slice(0, 2).join(" ") + (r.e.positivo.conduta ? " " + r.e.positivo.conduta : ""), r.e.positivo.fichas || []);
  const ordem = { critico: 0, alto: 1, moderado: 2 };
  return P.sort((a, b) => ordem[a.nivel] - ordem[b.nivel]);
}

/* ---------- laudos de imagem ---------- */
const EX_NEGACAO = /\b(sem|nao ha|nao se (?:observa|observam|identifica|identificam|evidencia|evidenciam|caracteriza|caracterizam)|ausencia de|ausentes?|nao (?:evidenciad[oa]s?|identificad[oa]s?|caracterizad[oa]s?|visualizad[oa]s?)|afastad[oa]|negativo para|livre de|sem sinais de|sem evidencia de)\b/;
/* Nomes pelos quais o exame aparece no cabeçalho do laudo ("TC de tórax", "US de abdome", "RX tórax"). */
const EX_ABREV = [[/^angiotomografia\b/, ["angiotomografia", "angio-tc", "angio tc", "angiotc"]], [/^tomografia\b/, ["tomografia computadorizada", "tomografia", "tc"]],
  [/^ultrassonografia\b/, ["ultrassonografia", "ultrassom", "ultra-som", "ultrassonografia", "usg", "us", "ecografia"]], [/^radiografia\b/, ["radiografia", "rx", "raio-x", "raio x", "raios x"]],
  [/^ressonancia magnetica\b/, ["ressonancia magnetica", "ressonancia", "rm"]]];
function exNomesLaudo(e) {
  const nome = exNorm(e.nome).replace(/\(.*?\)/g, "").replace(/\s+/g, " ").trim();
  const out = new Set([nome]);
  for (const [re, alts] of EX_ABREV) if (re.test(nome)) { const resto = nome.replace(re, "").trim(); for (const a of alts) { out.add(`${a} ${resto}`); out.add(`${a} ${resto.replace(/^(de|do|da|dos|das) /, "")}`); } }
  if (e.id === "ecg") out.add("ecg");
  if (e.id === "endoscopia-digestiva-alta") { out.add("eda"); out.add("esofagogastroduodenoscopia"); }
  if (e.id === "efast-pocus") { out.add("efast"); out.add("pocus"); out.add("fast"); }
  if (e.id === "densitometria") out.add("densitometria");
  return [...out].filter(x => x.length >= 3);
}
function exAchadosImagem(texto) {
  const t = exNorm(texto).replace(/\s+/g, " ");
  const frases = t.split(/(?<=[.;:\n])\s+|\n/);
  /* Mesmas frases com acentos e maiúsculas, para mostrar o trecho como está no laudo. */
  const orig = String(texto || "").normalize("NFC").replace(/\s+/g, " ");
  const frasesOrig = orig.length === t.length ? orig.split(/(?<=[.;:\n])\s+|\n/) : frases;
  /* Que exame é o laudo: o nome mais longo encontrado (angio-TC de tórax vence TC de tórax), preferindo o início do texto. */
  let exameDoLaudo = null, melhor = -1;
  for (const e of EXAMES_IMAGEM) for (const n of exNomesLaudo(e)) {
    const m = t.match(new RegExp(`(^|[^a-z0-9])${exEsc(n)}(?=$|[^a-z0-9])`));
    if (!m) continue;
    const pts = n.length * 2 - Math.min(m.index, 400) / 20;
    if (pts > melhor) { melhor = pts; exameDoLaudo = e; }
  }
  /* Achados: os do próprio exame; de outros exames, só os urgentes (ou todos se o exame não foi identificado). */
  const fontes = exameDoLaudo ? [[exameDoLaudo, false], ...EXAMES_IMAGEM.filter(e => e !== exameDoLaudo).map(e => [e, true])] : EXAMES_IMAGEM.map(e => [e, false]);
  const achados = [], termosVistos = new Set(), significados = new Set(), spans = [];
  for (const [e, soUrgente] of fontes) for (const a of e.achados || []) {
    if (soUrgente && !a.urgente) continue;
    for (const termo of [...a.termos].sort((x, y) => y.length - x.length)) {
      if (termosVistos.has(termo)) continue;
      const re = new RegExp(`(^|[^a-z0-9])${exEsc(termo)}(?=$|[^a-z0-9])`);
      let feito = false;
      for (let fi = 0; fi < frases.length && !feito; fi++) {
        const f = frases[fi], m = f.match(re); if (!m) continue;
        const ini = m.index + m[1].length, fim = ini + termo.length;
        if (spans.some(s => s.fi === fi && ini >= s.ini && fim <= s.fim)) continue;   /* "nodulo" dentro de "nodulo solido" */
        const negado = EX_NEGACAO.test(f.slice(0, ini).slice(-60));
        if (significados.has(a.significado + negado)) { feito = true; break; }
        spans.push({ fi, ini, fim }); termosVistos.add(termo); significados.add(a.significado + negado);
        achados.push({ exame: e, achado: a, termo, negado, trecho: (frasesOrig[fi] || f).trim().slice(0, 220), doExame: e === exameDoLaudo });
        feito = true;
      }
      if (feito) break;
    }
  }
  return { exameDoLaudo, achados: achados.sort((x, y) => (x.negado - y.negado) || ((y.achado.urgente ? 1 : 0) - (x.achado.urgente ? 1 : 0)) || ((y.doExame ? 1 : 0) - (x.doExame ? 1 : 0))) };
}

/* Distingue laudo de imagem de laudo laboratorial (palavras típicas). */
function exPareceImagem(texto) {
  const t = exNorm(texto);
  return /(tomografia|radiografia|ultrassonografia|ultrassom|ecografia|ressonancia|ecocardiograma|eletrocardiograma|endoscopia|colonoscopia|impressao diagnostica|conclusao:|tecnica:|achados:|laudo radiologico|mamografia|densitometria)/.test(t);
}

if (typeof module !== "undefined") module.exports = { exLerLaudo, exDeValores, exPadroes, exAchadosImagem, exPareceImagem, exRefCatalogo, exClassificar, exNumero, exRefTexto };
