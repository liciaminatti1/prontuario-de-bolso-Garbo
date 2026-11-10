/* Vaga Zero — leitura de documentos NO PRÓPRIO APARELHO.
   PDF com texto: pdf.js · PDF escaneado e foto: OCR Tesseract (português) · bibliotecas em vendor/.
   Nada é enviado a servidor. O reconhecimento só SUGERE valores: o médico confirma cada um.
   Pensado para fichas de regulação (ex.: SES-MS/CORE), em que o rótulo vem numa linha e o valor na
   linha de baixo, às vezes com vários rótulos lado a lado ("PA FC FR Peso Atual" / "x mmHg 136 58 1180 g"). */

const vzSemAcento = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
const vzNum = s => Number(String(s).replace(/\./g, "").replace(",", "."));
const vzNumDec = s => Number(String(s).replace(",", "."));

/* Rótulos de ficha → campo + padrão do valor (aplicado ao texto SEM acento, minúsculo). */
const VZ_ROTULOS = [
  { rot: /\bpa\b|pressao arterial/, campo: "pa", re: /(\d{2,3})\s*[x\/]\s*(\d{2,3})\s*(?:mm\s*hg)?|(?:^|\s)(x)\s*mm\s*hg/ },
  { rot: /\bfc\b|frequencia cardiaca/, campo: "sv.fc", re: /\b(\d{2,3})\b(?!\s*(?:g|kg|cm|%|mm|°|º))/ },
  { rot: /\bfr\b|frequencia respiratoria/, campo: "sv.fr", re: /\b(\d{1,3})\b(?!\s*(?:g|kg|cm|%|mm|°|º))/ },
  { rot: /peso atual/, campo: "peso", re: /(\d+(?:[.,]\d+)?)\s*(kg|g)\b/ },
  { rot: /peso de nascimento|peso ao nascer/, campo: "rn.pesoNascimento", re: /(\d+(?:[.,]\d+)?)\s*(kg|g)\b/ },
  { rot: /^peso\b|\bpeso\b(?! de| atual| ao)/, campo: "peso", re: /(\d+(?:[.,]\d+)?)\s*(kg|g)\b/ },
  { rot: /temperatura|\btax\b|\btemp\b/, campo: "sv.temp", re: /(\d{2}[.,]\d)\s*°?\s*c?/ },
  { rot: /saturacao|\bsat\b|spo2|sato2/, campo: "sv.spo2", re: /(\d{2,3})\s*%/ },
  { rot: /estatura|comprimento|altura/, campo: "altura", re: /(\d+(?:[.,]\d+)?)\s*(cm|m)\b/ },
  { rot: /\bpc\b|perimetro cefalico/, campo: "rn.pc", re: /(\d+(?:[.,]\d+)?)\s*cm\b/ },
  { rot: /\big\b|idade gestacional|capurro/, campo: "pac.ig", re: /(\d{2})\s*sem(?:anas?)?(?:\s*(?:e\s*)?(\d)\s*dias?)?/ },
  { rot: /apgar/, campo: "apgar", re: /1["'”]?\s*:?\s*(10|\d)(?!\d)\s*5["'”]?\s*:?\s*(10|\d)(?!\d)/ },
  { rot: /^sexo\b|\bsexo\b/, campo: "pac.sexo", re: /\b(masculino|feminino|indeterminado)\b/ },
  { rot: /\bidade\b(?! gestacional)/, campo: "idade", re: /\b(\d+)\s*(dias?|mes(?:es)?|anos?)\b/ },
  { rot: /data de nascimento|\bdn\b|nascido em/, campo: "pac.nascimento", re: /(\d{2}\/\d{2}\/\d{4})/ },
  { rot: /glasgow|\bgcs\b/, campo: "sv.glasgow", re: /\b(1[0-5]|[3-9])\b/ },
  { rot: /perfusao periferica|perfusao/, campo: "sv.perfusao", re: /([+]{1,4}|lentificad[ao]|preservad[ao]|normal|ruim|> ?\d ?s|< ?\d ?s)/ },
  { rot: /estado geral/, campo: "sv.estadoGeral", re: /\b(beg|reg|meg|bom|regular|grave|gravissimo)\b/ }
];

/* Rótulos cujo valor é texto livre na linha seguinte. */
const VZ_ROTULOS_TEXTO = [
  [/^nome do paciente\b/, "pac.nome"], [/^nome da mae\b/, "pac.nomeMae"],
  [/^unidade solicitante\b/, "transf.origem"], [/^profissional solicitante\b/, "transf.solicitante"],
  [/^hipotese diagnostica|^diagnostico|^hd\b/, "transf.dxPrincipal"], [/^motivo/, "transf.motivo"],
  [/^alergias?\b/, "pac.alergias"], [/^comorbidades|^antecedentes/, "pac.comorbidades"],
  [/^medicamentos? em uso|^medicacoes em uso|^uso continuo/, "pac.medicacoes"], [/^ficha n/, "transf.regulacao"]
];

/* Divide uma linha de rótulos lado a lado na ordem em que aparecem. */
function vzRotulosNaLinha(linhaNorm) {
  const achados = [];
  for (const r of VZ_ROTULOS) {
    const m = linhaNorm.match(r.rot);
    if (m) achados.push({ pos: m.index, def: r, len: m[0].length });
  }
  achados.sort((a, b) => a.pos - b.pos);
  // remove sobreposições (ex.: "peso atual" e "peso")
  return achados.filter((a, i) => !achados.some((b, j) => j !== i && b.pos <= a.pos && b.pos + b.len >= a.pos + a.len && b.len > a.len));
}

/* Converte o casamento do padrão em candidatos {campo, valor}. */
function vzInterpretar(campo, m) {
  const out = [];
  if (campo === "pa") {
    if (m[3] === "x") out.push({ campo: "sv.pas", valor: "", vazio: true }, { campo: "sv.pad", valor: "", vazio: true });
    else out.push({ campo: "sv.pas", valor: vzNum(m[1]) }, { campo: "sv.pad", valor: vzNum(m[2]) });
  } else if (campo === "peso" || campo === "rn.pesoNascimento") {
    const v = vzNumDec(m[1]); const kg = m[2] === "g" ? v / 1000 : v;
    out.push({ campo: campo === "peso" ? "pac.peso" : campo, valor: Math.round(kg * 1000) / 1000 });
  } else if (campo === "altura") {
    const v = vzNumDec(m[1]); out.push({ campo: "pac.altura", valor: m[2] === "m" ? Math.round(v * 100) : v });
  } else if (campo === "pac.ig") out.push({ campo, valor: Number(m[1]) + (m[2] ? Number(m[2]) / 7 : 0), texto: `${m[1]} sem${m[2] ? ` e ${m[2]} d` : ""}` });
  else if (campo === "apgar") out.push({ campo: "rn.apgar", valor: `${m[1]}/${m[2]}` });
  else if (campo === "pac.sexo") out.push({ campo, valor: m[1] === "masculino" ? "M" : m[1] === "feminino" ? "F" : "" });
  else if (campo === "idade") {
    const u = m[2].startsWith("dia") ? "dias" : m[2].startsWith("mes") ? "meses" : "anos";
    out.push({ campo: "pac.idade", valor: Number(m[1]), unidade: u });
  } else if (campo === "sv.temp") out.push({ campo, valor: vzNumDec(m[1]) });
  else if (campo === "rn.pc") out.push({ campo, valor: vzNumDec(m[1]) });
  else if (campo === "pac.nascimento") out.push({ campo, valor: m[1] });
  else if (["sv.perfusao", "sv.estadoGeral"].includes(campo)) out.push({ campo, valor: m[1].toUpperCase(), interpretar: true });
  else out.push({ campo, valor: vzNum(m[1]) });
  return out;
}

/* Títulos de blocos de texto livre. */
const VZ_BLOCO_EXAME = /^(exame fisico|ef\b|e\.f\.|ao exame|exame fisico geral|exame clinico)\s*:?/;
const VZ_BLOCO_RESUMO = /^(outras informacoes|resumo clinico|resumo|hda|historia(?: da doenca atual| clinica)?|anamnese|quadro clinico|evolucao(?: medica| clinica| de enfermagem)?(?: [-–] [\d\/: ]+)?|dados adicionais|conduta|condutas|plano|observacoes|relato)\b\s*:?/;
const VZ_FIM_BLOCO = /^(identificacao|dados clinicos|arquivos|exames|exames complementares|laboratorio|prescricao|diagnostico|hipotese|hd\b|sinais vitais|ficha|assinatura|medico|profissional)/;
function vzBlocos(linhas, norm) {
  const out = { exame: [], resumo: [] };
  let atual = null, n = 0;
  for (let i = 0; i < linhas.length; i++) {
    const l = norm[i];
    const ex = l.match(VZ_BLOCO_EXAME), re = l.match(VZ_BLOCO_RESUMO);
    if (ex || re) {
      atual = ex ? "exame" : "resumo"; n = 0;
      const resto = linhas[i].slice((ex || re)[0].length).replace(/^[\s:–-]+/, "").trim();
      if (resto.length > 3) out[atual].push(resto);
      continue;
    }
    if (VZ_FIM_BLOCO.test(l) || (vzRotulosNaLinha(l).length >= 2 && l.split(" ").length < 8)) { atual = null; continue; }
    if (atual && n < 25) { out[atual].push(linhas[i]); n++; }
  }
  const junta = arr => arr.join(" ").replace(/\s+/g, " ").trim().slice(0, 1500);
  return { exame: junta(out.exame), resumo: junta(out.resumo) };
}
/* Frases com achados que mudam o transporte (para "pontos importantes"). */
const VZ_RISCO_FRASE = /(intubad|\biot\b|ventilacao mecanica|convuls|apneia|parada|\bpcr\b|reanimad|hipotens|choque|sangra|hemorrag|dessatur|cianose|vomit|noradrenalina|dobutamina|droga vasoativa|sedad|rebaix|glasgow|prematur|hipoglic|hgt|alergi|anticoag|gestante|venturi|cateter nasal|cpap|vni|\buti\b|dreno|fratura|queimad|dor toracica|supra|deficit|anisocor|agitad|febre|sepse)/;
function vzDestaques(linhas, norm) {
  const frases = [];
  const texto = linhas.join(" "), t = norm.join(" ");
  const partes = t.split(/(?<=[.;])\s+|\s+(?=\[\d{2}\/\d{2})/);
  let cursor = 0;
  for (const p of partes) {
    const ini = t.indexOf(p, cursor); cursor = ini + p.length;
    if (p.length < 12 || p.length > 260 || !VZ_RISCO_FRASE.test(p) || vzRotulosNaLinha(p).length >= 3) continue;
    const orig = texto.substr(ini, p.length).replace(/^\[[^\]]*\]\s*/, "").trim();
    const letras = orig.replace(/[^A-Za-zÀ-ú]/g, ""), maiusc = orig.replace(/[^A-ZÀ-Ý]/g, "").length / Math.max(1, letras.length);
    const fmt = maiusc > 0.6 ? orig.charAt(0).toUpperCase() + orig.slice(1).toLowerCase() : orig;
    if (orig && !frases.some(f => f.toLowerCase() === orig.toLowerCase())) frases.push(fmt);
    if (frases.length >= 8) break;
  }
  return frases;
}

/* Reconhece campos no texto. Retorna candidatos (com o trecho de origem), exames e conflitos. */
function vzExtrairCampos(texto) {
  const linhas = String(texto || "").split(/\r?\n/).map(l => l.replace(/\s+/g, " ").trim()).filter(Boolean);
  const norm = linhas.map(l => vzSemAcento(l).toLowerCase());
  const cand = [];
  let posAtual = 0;
  const add = (c, trecho, pos) => cand.push({ ...c, trecho: trecho.slice(0, 160), pos: pos ?? posAtual });

  for (let i = 0; i < linhas.length; i++) {
    posAtual = i;
    const n = norm[i];
    const rots = vzRotulosNaLinha(n);
    // 1) "Rótulo: valor" na mesma linha
    for (const r of rots) {
      const resto = n.slice(r.pos + r.len);
      const m = resto.match(r.def.re);
      if (m && m.index < 25) vzInterpretar(r.def.campo, m).forEach(c => add(c, linhas[i]));
    }
    // 2) linha de rótulos seguida de linha de valores (lado a lado, na mesma ordem)
    if (rots.length && i + 1 < linhas.length) {
      const prox = norm[i + 1];
      const restoMesma = rots.every(r => !n.slice(r.pos + r.len).match(r.def.re) || n.slice(r.pos + r.len).match(r.def.re).index >= 25);
      if (restoMesma && !vzRotulosNaLinha(prox).length) {
        let cursor = 0;
        for (const r of rots) {
          const m = prox.slice(cursor).match(r.def.re);
          if (!m) continue;
          vzInterpretar(r.def.campo, m).forEach(c => add(c, `${linhas[i]} → ${linhas[i + 1]}`));
          cursor += m.index + m[0].length;
        }
      }
    }
    // 3) rótulo de texto sozinho na linha → valor na linha seguinte
    for (const [re, campo] of VZ_ROTULOS_TEXTO) {
      if (!re.test(n)) continue;
      const mesma = linhas[i].replace(/^[^:]*:\s*/, "");
      const valor = linhas[i].includes(":") && mesma && mesma !== linhas[i] ? mesma : (linhas[i + 1] && !VZ_ROTULOS_TEXTO.some(([r]) => r.test(norm[i + 1])) ? linhas[i + 1] : "");
      const outros = VZ_ROTULOS_TEXTO.filter(([r]) => r !== re && new RegExp(r.source.replace("^", "\\b")).test(n)).length || /nome social|\bcns\b|\bcrm\b/.test(n);
      if (valor) add({ campo, valor, interpretar: !!outros }, `${linhas[i]} → ${valor}`);
    }
  }

  /* Texto livre (evolução, "outras informações"). */
  const tudo = linhas.join("\n"), t = norm.join("\n");
  const busca = (re, fn) => { let m; const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"); while ((m = g.exec(t))) { posAtual = t.slice(0, m.index).split("\n").length - 1; fn(m, tudo.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\n/g, " ")); } };
  const original = (m, grupo) => { const i = m.index + m[0].indexOf(m[grupo]); return tudo.substr(i, m[grupo].length).trim().replace(/[\s.;,:]+$/, ""); };
  busca(/\b(?:hgt|glicemia(?: capilar)?|dextro|glicose capilar)\s*:?\s*(\d{2,3})\s*(?:mg\/?dl)?/, (m, tr) => add({ campo: "sv.glicemia", valor: Number(m[1]) }, tr));
  busca(/\bsat(?:uracao)?(?: de o2| o2)?\s*:?\s*(\d{2,3})\s*%/, (m, tr) => add({ campo: "sv.spo2", valor: Number(m[1]) }, tr));
  busca(/\b(\d{2,3})\s*[x\/]\s*(\d{2,3})\s*mm\s*hg/, (m, tr) => { add({ campo: "sv.pas", valor: +m[1] }, tr); add({ campo: "sv.pad", valor: +m[2] }, tr); });
  busca(/\bfc\s*:?\s*(\d{2,3})\s*(?:bpm)?\b/, (m, tr) => add({ campo: "sv.fc", valor: +m[1] }, tr));
  busca(/\bfr\s*:?\s*(\d{1,3})\s*(?:irpm|ipm)\b/, (m, tr) => add({ campo: "sv.fr", valor: +m[1] }, tr));
  busca(/\big\s*:?\s*(\d{2})\s*sem(?:anas?)?(?:\s*(?:e\s*)?(\d)\s*dias?)?/, (m, tr) => add({ campo: "pac.ig", valor: +m[1] + (m[2] ? +m[2] / 7 : 0), texto: `${m[1]} sem${m[2] ? ` e ${m[2]} d` : ""}` }, tr));
  busca(/\bglasgow\s*:?\s*(\d{1,2})\b/, (m, tr) => { if (+m[1] >= 3 && +m[1] <= 15) add({ campo: "sv.glasgow", valor: +m[1] }, tr); });
  busca(/(mascara de venturi|venturi|mascara (?:com|nao) reinalante|mascara com reservatorio|cateter nasal|cateter de o2|oxitenda|cpap|vni|ventilacao nao invasiva)[^\n\d]{0,25}(\d{1,2}(?:[.,]\d)?)\s*(?:l\s*[\/\\|il1]?\s*min\w*|lpm|litros?|l)\b/, (m, tr) => {
    const disp = /venturi/.test(m[1]) ? "venturi" : /reservatorio|nao reinalante/.test(m[1]) ? "reservatorio" : /cateter/.test(m[1]) ? "cateter" : /cpap|vni|nao invasiva/.test(m[1]) ? "vni" : /oxitenda/.test(m[1]) ? "oxitenda" : "mascara";
    add({ campo: "sv.o2", valor: disp }, tr); add({ campo: "sv.o2fluxo", valor: vzNumDec(m[2]) }, tr);
  });
  busca(/\b(intubad[oa]|em iot|em vm|ventilacao mecanica|\btot\b|traqueostomi[az]ad[oa])/, (m, tr) => add({ campo: "sv.o2", valor: "vm" }, tr));
  busca(/\b(noradrenalina|adrenalina|dobutamina|dopamina|vasopressina|nitroprussiato|midazolam|fentanil|propofol|cetamina|insulina regular)\b[^\n]{0,40}?(\d+(?:[.,]\d+)?)\s*(ml\/h|mcg\/kg\/min)/, (m, tr) => add({ campo: "sv.infusoes", valor: `${m[1]} ${m[2]} ${m[3]}` }, tr));
  busca(/autorizad[oa] para (?:a |o )?([^,.\n]{4,80})(?:,\s*([^,.\n]{3,40}))?/, (m, tr) => add({ campo: "transf.destino", valor: tudo.substr(m.index + m[0].indexOf(m[1]), m[1].length + (m[2] ? m[2].length + 2 : 0)).trim() }, tr));
  busca(/\bsenha\s*:?\s*(\d{4,})/, (m, tr) => add({ campo: "transf.regulacao", valor: `Senha ${m[1]}` }, tr));
  busca(/\b(prematuridade extrema|prematuridade|parto prematuro|prematuro extremo)\b/, (m, tr) => add({ campo: "transf.dxPrincipal", valor: tudo.substr(m.index, m[0].length), sugestao: true }, tr));
  busca(/\b(uti neonatal|utin|uti pediatrica|uti adulto|uti|hemodinamica|neurocirurgia|centro de trauma)\b/, (m, tr) => add({ campo: "transf.motivo", valor: `Necessidade de ${tudo.substr(m.index, m[0].length)}`, sugestao: true }, tr));
  busca(/\balergi(?:a|as|co)\s*(?:a|:)\s*([^\n.;]{3,60})/, (m, tr) => add({ campo: "pac.alergias", valor: tudo.substr(m.index + m[0].indexOf(m[1]), m[1].length).trim() }, tr));
  busca(/\bnega alergias?\b/, (m, tr) => add({ campo: "pac.alergias", valor: "Nega alergias" }, tr));

  /* Texto corrido de evolução: "Paciente do sexo masculino, 54 anos, PA: 90x60, FC 112, SatO2 89% em AA..." */
  busca(/(?:idade|paciente|pcte|pac\.|masculino|feminino|sexo [mf]\b|rn|lactente|crianca)[^\n]{0,30}?\b(\d{1,3})\s*(anos?|a\b|mes(?:es)?|m\b|dias?|d\b)(?: de idade| de vida)?/, (m, tr) => {
    const u = /^d/.test(m[2]) ? "dias" : /^m/.test(m[2]) ? "meses" : "anos";
    if (+m[1] <= 120) add({ campo: "pac.idade", valor: +m[1], unidade: u }, tr);
  });
  busca(/\b(?:sexo\s*:?\s*|do sexo\s+|paciente\s+)(masculino|feminino|masc\.?|fem\.?|m|f)\b/, (m, tr) => add({ campo: "pac.sexo", valor: /^m/.test(m[1]) ? "M" : "F" }, tr));
  busca(/\bpeso\s*(?:atual|aferido)?\s*:?\s*(?:de\s*)?(\d+(?:[.,]\d+)?)\s*(kg|g)\b/, (m, tr) => { const v = vzNumDec(m[1]); add({ campo: "pac.peso", valor: Math.round((m[2] === "g" ? v / 1000 : v) * 1000) / 1000 }, tr); });
  busca(/\b(?:altura|estatura)\s*:?\s*(\d(?:[.,]\d{1,2})|\d{2,3})\s*(m|cm)\b/, (m, tr) => { const v = vzNumDec(m[1]); add({ campo: "pac.altura", valor: m[2] === "m" ? Math.round(v * 100) : v }, tr); });
  busca(/\b(?:pa|pressao arterial)\s*:?\s*(\d{2,3})\s*[x\/]\s*(\d{2,3})\b/, (m, tr) => { add({ campo: "sv.pas", valor: +m[1] }, tr); add({ campo: "sv.pad", valor: +m[2] }, tr); });
  busca(/\bfr\s*:?\s*(\d{1,3})(?:\s*(?:irpm|ipm|rpm|mrm))?\b/, (m, tr) => { if (+m[1] >= 4 && +m[1] <= 120) add({ campo: "sv.fr", valor: +m[1] }, tr); });
  busca(/\b(?:spo2|sato2|sat o2|so2)\s*:?\s*(\d{2,3})\s*%?/, (m, tr) => { if (+m[1] <= 100) add({ campo: "sv.spo2", valor: +m[1] }, tr); });
  busca(/\b(?:tax|temp(?:eratura)?(?: axilar)?|t ax|tº)\s*:?\s*(3\d|4[0-3])(?:[.,](\d))?\s*(?:°|º)?\s*c?\b/, (m, tr) => add({ campo: "sv.temp", valor: vzNumDec(`${m[1]}.${m[2] || 0}`) }, tr));
  busca(/\bgcs\s*:?\s*(\d{1,2})\b/, (m, tr) => { if (+m[1] >= 3 && +m[1] <= 15) add({ campo: "sv.glasgow", valor: +m[1] }, tr); });
  busca(/\bdor\s*:?\s*(\d{1,2})\s*\/\s*10\b|\beva\s*:?\s*(\d{1,2})\b/, (m, tr) => { const v = +(m[1] || m[2]); if (v <= 10) add({ campo: "sv.dor", valor: v }, tr); });
  busca(/\bdiurese\s*:?\s*([^\n.;]{2,50})/, (m, tr) => add({ campo: "sv.diurese", valor: original(m, 1) }, tr));
  busca(/\b(?:em\s+)?(?:ar ambiente|\baa\b)/, (m, tr) => add({ campo: "sv.o2", valor: "ar" }, tr));
  busca(/\b(cateter nasal|cateter de o2|mascara de venturi|venturi|mascara com reservatorio|mascara nao reinalante|cpap|vni|oxitenda|hood)\b(?![^\n]{0,25}\d)/, (m, tr) => {
    const d = /venturi/.test(m[1]) ? "venturi" : /reservatorio|nao reinalante/.test(m[1]) ? "reservatorio" : /cateter/.test(m[1]) ? "cateter" : /cpap|vni/.test(m[1]) ? "vni" : "oxitenda";
    add({ campo: "sv.o2", valor: d }, tr);
  });
  busca(/\b(?:cateter nasal|cn|o2)\s*(?:a|em|de)?\s*(\d{1,2}(?:[.,]\d)?)\s*(?:l\s*[\/\\|il1]?\s*min\w*|lpm|litros?(?: por min\w*)?)/, (m, tr) => { if (!/venturi|reservatorio|mascara/.test(m[0])) { add({ campo: "sv.o2", valor: "cateter" }, tr); add({ campo: "sv.o2fluxo", valor: vzNumDec(m[1]) }, tr); } });
  busca(/\bfio2\s*:?\s*(\d{2,3})\s*%/, (m, tr) => add({ campo: "sv.fio2", valor: +m[1] }, tr));
  busca(/\b(avp|acesso venoso periferico|acesso venoso central|cvc|picc|cateter umbilical|intraosse[oa]|jelco)\b[^\n.;]{0,40}/, (m, tr) => add({ campo: "sv.acessosTipo", valor: original(m, 0) }, tr));
  busca(/\bsem acesso venoso\b/, (m, tr) => add({ campo: "sv.acessosQtd", valor: "0" }, tr));
  busca(/\b(sng|sne|svd|sonda vesical|sonda nasogastrica|dreno de torax|dreno|traqueostomia)\b/, (m, tr) => add({ campo: "sv.dispositivos", valor: original(m, 0).toUpperCase() }, tr));
  busca(/\b(?:comorbidades|antecedentes(?: pessoais)?|hpp|app|hmp)\s*:\s*([^\n]{3,140})/, (m, tr) => add({ campo: "pac.comorbidades", valor: original(m, 1) }, tr));
  busca(/\b(?:medicacoes em uso|medicamentos em uso|medicacao de uso continuo|uso continuo|em uso de|muc)\s*:?\s*([^\n]{3,140})/, (m, tr) => add({ campo: "pac.medicacoes", valor: original(m, 1) }, tr));
  busca(/\b(?:hd|hipotese diagnostica|hipoteses diagnosticas|diagnostico|dx)\s*:\s*([^\n]{3,140})/, (m, tr) => add({ campo: "transf.dxPrincipal", valor: original(m, 1) }, tr));
  busca(/\bmotivo(?: da transferencia| do encaminhamento| da solicitacao)?\s*:\s*([^\n]{3,140})/, (m, tr) => add({ campo: "transf.motivo", valor: original(m, 1) }, tr));
  busca(/\b(?:hospital de destino|unidade de destino|destino)\s*:\s*([^\n]{3,90})/, (m, tr) => add({ campo: "transf.destino", valor: original(m, 1) }, tr));
  busca(/\b(?:hospital de origem|unidade de origem|origem)\s*:\s*([^\n]{3,90})/, (m, tr) => add({ campo: "transf.origem", valor: original(m, 1) }, tr));
  busca(/\b(gestante|gravida|gestacao)\b[^\n]{0,20}?(\d{1,2})\s*sem/, (m, tr) => { add({ campo: "pac.gestante", valor: "sim" }, tr); add({ campo: "pac.ig", valor: +m[2], texto: `${m[2]} sem` }, tr); });
  busca(/\b(puerpera|pos[- ]parto|puerperio)\b/, (m, tr) => add({ campo: "pac.gestante", valor: "puerpera", sugestao: true }, tr));

  /* Blocos de texto: exame físico, resumo/evolução e pontos importantes. */
  const blocos = vzBlocos(linhas, norm);
  if (blocos.exame) add({ campo: "sv.exameFisico", valor: blocos.exame, texto: blocos.exame.slice(0, 80) + (blocos.exame.length > 80 ? "…" : "") }, "Bloco de exame físico", 0);
  if (blocos.resumo) add({ campo: "transf.resumo", valor: blocos.resumo, texto: blocos.resumo.slice(0, 80) + "…" }, "Resumo, história e evolução", 0);
  const destaques = vzDestaques(linhas, norm);
  if (destaques.length) add({ campo: "transf.destaques", valor: destaques.map(d => "• " + d).join("\n"), texto: `${destaques.length} pontos importantes` }, "Frases com achados de risco", 0);

  /* Exames laboratoriais no texto. */
  const exames = [];
  const EX = [["Hemoglobina", /\b(?:hb|hemoglobina)\s*:?\s*(\d{1,2}(?:[.,]\d)?)/, "g/dL"], ["Leucócitos", /\bleuco(?:citos)?\s*:?\s*(\d{3,6}(?:[.,]\d+)?)/, "/mm³"],
    ["Plaquetas", /\bplaquetas?\s*:?\s*(\d{2,7}(?:[.,]\d+)?)/, "/mm³"], ["Potássio", /\b(?:k|potassio)\s*:?\s*(\d(?:[.,]\d)?)\b/, "mEq/L"],
    ["Sódio", /\b(?:na|sodio)\s*:?\s*(1\d{2})\b/, "mEq/L"], ["Creatinina", /\bcreatinina\s*:?\s*(\d{1,2}(?:[.,]\d{1,2})?)/, "mg/dL"],
    ["Ureia", /\bureia\s*:?\s*(\d{1,3})/, "mg/dL"], ["Lactato", /\blactato\s*:?\s*(\d{1,2}(?:[.,]\d)?)/, "mmol/L"],
    ["pH", /\bph\s*:?\s*(7[.,]\d{1,2}|6[.,]\d{1,2})/, ""], ["pCO₂", /\bpco2\s*:?\s*(\d{2,3})/, "mmHg"], ["HCO₃", /\bhco3\s*:?\s*(\d{1,2}(?:[.,]\d)?)/, "mEq/L"],
    ["Troponina", /\btroponina\s*:?\s*(\d+(?:[.,]\d+)?)/, ""], ["INR", /\binr\s*:?\s*(\d(?:[.,]\d{1,2})?)/, ""], ["PCR", /\bpcr\s*:?\s*(\d+(?:[.,]\d+)?)\s*mg/, "mg/L"]];
  for (const [nome, re, un] of EX) busca(re, (m, tr) => exames.push({ nome, valor: m[1], unidade: un, trecho: tr }));

  /* Agrupa por campo e marca conflitos (valores diferentes para o mesmo campo). */
  const porCampo = {};
  for (const c of cand) (porCampo[c.campo] ||= []).push(c);
  /* Campos que somam informações (não são conflito): juntar os valores distintos. */
  for (const campo of ["transf.regulacao", "sv.dispositivos", "sv.acessosTipo", "sv.infusoes"]) {
    const l = porCampo[campo]; if (!l || l.length < 2) continue;
    const vals = [...new Set(l.map(c => String(c.valor)))];
    porCampo[campo] = [{ ...l[0], valor: vals.join(" · "), texto: undefined, trecho: l.map(c => c.trecho).join(" | ") }];
  }
  const resultado = [];
  for (const [campo, lista] of Object.entries(porCampo)) {
    const unicos = [];
    for (const c of lista) {
      if (typeof c.valor === "string") c.valor = c.valor.trim().replace(/[\s.;,:]+$/, "");
      const chave = c.vazio ? "∅" : typeof c.valor === "number" ? c.valor.toFixed(3) : vzSemAcento(String(c.valor)).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      const ja = unicos.find(u => u.chave === chave);
      if (ja) { ja.trechos.push(c.trecho); ja.posMin = Math.min(ja.posMin, c.pos); ja.posMax = Math.max(ja.posMax, c.pos); if (!c.sugestao) ja.sugestao = false; }
      else unicos.push({ ...c, chave, trechos: [c.trecho], posMin: c.pos, posMax: c.pos });
    }
    const reais = unicos.filter(u => !u.vazio);
    const firmes = reais.filter(u => !u.sugestao);
    const conflito = firmes.length > 1;
    const base = firmes.length ? firmes : reais;
    const recente = /^sv\./.test(campo) && !["sv.estadoGeral", "sv.perfusao", "sv.dispositivos", "sv.acessosTipo"].includes(campo);
    const pref = base.length ? base.reduce((a, b) => recente ? (b.posMax > a.posMax ? b : a) : (b.posMin < a.posMin ? b : a)) : null;
    for (const u of unicos) resultado.push({ campo, valor: u.valor, unidade: u.unidade, texto: u.texto, vazio: !!u.vazio, interpretar: !!u.interpretar,
      sugestao: !!u.sugestao, conflito, preferido: u === pref, trechos: u.trechos });
  }
  return { candidatos: resultado, exames, linhas: linhas.length };
}

/* ---------- leitura de arquivos (navegador) ---------- */
const VZ_URL = p => new URL(p, document.baseURI).href;
let vzPdfjs = null, vzOcrWorker = null;

async function vzCarregarPdfjs() {
  if (vzPdfjs) return vzPdfjs;
  vzPdfjs = await import(VZ_URL("vendor/pdfjs/pdf.min.mjs"));
  vzPdfjs.GlobalWorkerOptions.workerSrc = VZ_URL("vendor/pdfjs/pdf.worker.min.mjs");
  return vzPdfjs;
}
function vzCarregarScript(src) {
  return new Promise((ok, falha) => {
    if (document.querySelector(`script[data-vz="${src}"]`)) return ok();
    const s = document.createElement("script"); s.src = VZ_URL(src); s.dataset.vz = src; s.onload = ok; s.onerror = () => falha(new Error("Não foi possível carregar " + src));
    document.head.appendChild(s);
  });
}
async function vzOcr(imagem, progresso) {
  await vzCarregarScript("vendor/tesseract/tesseract.min.js");
  if (!vzOcrWorker) {
    vzOcrWorker = await Tesseract.createWorker("por", 1, {
      workerPath: VZ_URL("vendor/tesseract/worker.min.js"), corePath: VZ_URL("vendor/tesseract/core"),
      langPath: VZ_URL("vendor/tesseract/lang"), gzip: true,
      logger: m => { if (progresso && m.status === "recognizing text") progresso(`Lendo texto… ${Math.round(m.progress * 100)}%`); }
    });
    await vzOcrWorker.setParameters({ preserve_interword_spaces: "1" });
  }
  const { data } = await vzOcrWorker.recognize(imagem);
  return data.text;
}

/* Prepara a foto para OCR: escala ~2000 px de largura, tons de cinza e contraste. */
async function vzPrepararImagem(arquivo) {
  const bmp = await createImageBitmap(arquivo);
  const escala = Math.min(2.5, Math.max(1, 2000 / bmp.width));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * escala); c.height = Math.round(bmp.height * escala);
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(bmp, 0, 0, c.width, c.height);
  const img = ctx.getImageData(0, 0, c.width, c.height), d = img.data;
  let min = 255, max = 0;
  for (let i = 0; i < d.length; i += 4) { const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]; d[i] = g; if (g < min) min = g; if (g > max) max = g; }
  const k = 255 / Math.max(1, max - min);
  for (let i = 0; i < d.length; i += 4) { const g = (d[i] - min) * k; d[i] = d[i + 1] = d[i + 2] = g; }
  ctx.putImageData(img, 0, 0);
  return c;
}

/* Texto de um PDF: usa a camada de texto; página sem texto (escaneada) vai para OCR. */
async function vzLerPdf(arquivo, progresso) {
  const pdfjs = await vzCarregarPdfjs();
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await arquivo.arrayBuffer()) }).promise;
  const paginas = [];
  for (let p = 1; p <= doc.numPages; p++) {
    progresso && progresso(`Lendo página ${p} de ${doc.numPages}…`);
    const pag = await doc.getPage(p);
    const tc = await pag.getTextContent();
    const linhas = {};
    for (const it of tc.items) { const y = Math.round(it.transform[5] / 3) * 3; (linhas[y] ||= []).push({ x: it.transform[4], s: it.str }); }
    let texto = Object.keys(linhas).map(Number).sort((a, b) => b - a)
      .map(y => linhas[y].sort((a, b) => a.x - b.x).map(i => i.s).join(" ").replace(/\s+/g, " ").trim()).filter(Boolean).join("\n");
    if (texto.replace(/\s/g, "").length < 30) {
      const vp = pag.getViewport({ scale: 2 });
      const c = document.createElement("canvas"); c.width = vp.width; c.height = vp.height;
      await pag.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      texto = await vzOcr(c, progresso);
    }
    paginas.push(texto);
  }
  return paginas.join("\n");
}

/* Ponto de entrada: arquivo (PDF ou imagem) → texto. */
async function vzLerArquivo(arquivo, progresso) {
  if (arquivo.type === "application/pdf" || /\.pdf$/i.test(arquivo.name)) return vzLerPdf(arquivo, progresso);
  if (/^image\//.test(arquivo.type)) { progresso && progresso("Preparando a imagem…"); return vzOcr(await vzPrepararImagem(arquivo), progresso); }
  if (/^text\//.test(arquivo.type)) return arquivo.text();
  throw new Error("Formato não suportado: envie foto (JPG/PNG) ou PDF.");
}

if (typeof module !== "undefined") module.exports = { vzExtrairCampos, vzSemAcento };
