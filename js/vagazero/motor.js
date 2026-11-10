/* Vaga Zero — motor de regras (sem tela).
   Lê o caso, calcula gatilhos, avaliação ABCDE, risco, dados ausentes e inconsistências, escolhe as
   complicações ligadas ao caso, monta a contingência "se acontecer X, faça Y", o checklist e o SBAR.
   Regras transparentes: cada conclusão traz a justificativa. Nada aqui autoriza transporte. */

const vzN = v => { if (v === "" || v === null || v === undefined) return null; const n = Number(String(v).replace(",", ".")); return isFinite(n) ? n : null; };
const vzTxt = v => String(v ?? "").trim();
const vzNorm = s => " " + String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9+%/.,-]+/g, " ") + " ";

function vzCasoVazio() {
  const agora = new Date().toISOString();
  return {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), criadoEm: agora, atualizadoEm: agora,
    pac: { nome: "", idade: "", idadeUnidade: "anos", sexo: "", peso: "", altura: "", gestante: "", ig: "", comorbidades: "", alergias: "", medicacoes: "", nascimento: "", nomeMae: "" },
    rn: { apgar: "", pesoNascimento: "", pc: "" },
    transf: { resumo: "", destaques: "", motivo: "", dxPrincipal: "", dxSecundarios: "", origem: "", destino: "", distanciaKm: "", tempoMin: "", ambulancia: "", equipe: "", regulacao: "", solicitante: "", pendencias: "" },
    sv: { hora: "", pas: "", pad: "", fc: "", fr: "", spo2: "", temp: "", glicemia: "", glasgow: "", neuro: "", perfusao: "", diurese: "", dor: "", estadoGeral: "",
      o2: "", o2fluxo: "", fio2: "", vent: "", acessosQtd: "", acessosTipo: "", infusoes: "", dispositivos: "", exameFisico: "", outros: "" },
    abcde: {}, checklist: {}, checkFarm: {}, monit: [], eventos: [],
    o2calc: { capacidadeL: "", pressao: "", unidadePressao: "bar", pressaoResidual: "", fluxo: "", consumoAdicional: "", fator: "2" },
    anexos: [], extracao: null, origem: {}, log: []
  };
}

/* ---------- ABCDE: perguntas estruturadas ---------- */
const VZ_ABCDE = {
  A: { titulo: "A — Via aérea", itens: [
    ["permeabilidade", "Permeabilidade", ["pérvia", "pérvia com risco", "obstrução parcial", "obstrução total", "via aérea avançada (IOT/TQT)"]],
    ["secrecoes", "Secreções", ["ausentes", "presentes, controladas com aspiração", "abundantes"]],
    ["reflexos", "Reflexos protetores (tosse/deglutição)", ["presentes", "diminuídos", "ausentes"]],
    ["aspiracao", "Risco de broncoaspiração", ["baixo", "moderado (vômitos, estômago cheio)", "alto (rebaixamento + vômitos)"]],
    ["avancada", "Necessidade de via aérea avançada", ["não", "avaliar (decisão médica)", "sim — indicada"]]] },
  B: { titulo: "B — Respiração", itens: [
    ["trabalho", "Trabalho respiratório", ["normal", "aumentado (tiragem, batimento de asa)", "exaustão / respiração paradoxal", "apneia"]],
    ["ausculta", "Ausculta pulmonar", ["normal", "estertores", "sibilos", "murmúrio diminuído / assimetria", "não avaliada"]],
    ["expansao", "Expansibilidade", ["simétrica", "assimétrica", "não avaliada"]]] },
  C: { titulo: "C — Circulação", itens: [
    ["pulsos", "Pulsos", ["cheios", "finos", "ausentes periféricos"]],
    ["sangramento", "Sangramento", ["ausente", "controlado", "ativo"]],
    ["pele", "Pele", ["corada e quente", "pálida", "fria e pegajosa / mosqueada", "cianose central"]],
    ["volume", "Reposição volêmica", ["não necessária", "em curso", "necessária (não iniciada)"]]] },
  D: { titulo: "D — Neurológico", itens: [
    ["pupilas", "Pupilas", ["isocóricas e fotorreagentes", "anisocoria", "midríase bilateral", "miose", "não avaliadas"]],
    ["deficit", "Déficit focal", ["ausente", "presente"]],
    ["convulsao", "Convulsões", ["ausentes", "nas últimas 24 h, controladas", "em curso / repetidas"]],
    ["consciencia", "Nível de consciência", ["alerta", "responde à voz", "responde à dor", "não responde"]]] },
  E: { titulo: "E — Exposição", itens: [
    ["lesoes", "Lesões / feridas", ["ausentes", "presentes, tratadas", "presentes, não tratadas"]],
    ["fraturas", "Fraturas", ["ausentes", "imobilizadas", "não imobilizadas"]],
    ["infeccao", "Sinais de infecção", ["ausentes", "presentes"]],
    ["termico", "Proteção térmica", ["adequada", "hipotermia em correção", "não providenciada"]]] }
};
const vzResp = (caso, letra, chave) => (caso.abcde[letra] || {})[chave] || "";

/* ---------- perfil e gatilhos ---------- */
function vzGatilhos(caso) {
  const p = caso.pac, sv = caso.sv;
  const idadeAnos = vzIdadeAnos(p.idade, p.idadeUnidade);
  const perfil = vzPerfil(idadeAnos);
  const ref = vzReferenciaSV(idadeAnos);
  const g = new Map(); // gatilho → motivo legível
  const set = (k, motivo) => { if (!g.has(k)) g.set(k, motivo); };
  const peso = vzN(p.peso), alt = vzN(p.altura), ig = vzN(p.ig);
  const pas = vzN(sv.pas), pad = vzN(sv.pad), fc = vzN(sv.fc), fr = vzN(sv.fr), spo2 = vzN(sv.spo2), temp = vzN(sv.temp),
    gli = vzN(sv.glicemia), gcs = vzN(sv.glasgow), dor = vzN(sv.dor);
  const gest = p.gestante === "sim", puerp = p.gestante === "puerpera";

  if (perfil) set(perfil, perfil === "neonato" ? "Recém-nascido" : perfil === "pediatrico" ? "Paciente pediátrico" : "Adulto");
  if (idadeAnos !== null && idadeAnos >= 65) set("idoso", `Idade ${VZ_FMT(idadeAnos, 0)} anos`);
  if (gest) set("gestante", `Gestante${ig ? ` (${VZ_FMT(ig, 1)} semanas)` : ""}`);
  if (puerp) set("puerpera", "Puérpera");
  if (perfil === "neonato" && ig && ig < 37) set("prematuro", `Prematuro (IG ${VZ_FMT(ig, 1)} semanas)`);
  if (perfil === "adulto" && peso && alt && peso / (alt / 100) ** 2 >= 35) set("obeso", `IMC ${VZ_FMT(peso / (alt / 100) ** 2, 1)}`);

  if (spo2 !== null) {
    const lim = perfil === "neonato" ? 90 : 92;
    if (spo2 < 85) set("spo2-critica", `SpO₂ ${spo2}%`);
    if (spo2 < lim) set("spo2-baixa", `SpO₂ ${spo2}%${sv.o2 && sv.o2 !== "ar" ? " em uso de O₂" : ""}`);
  }
  if (fr !== null && ref) {
    const [mn, mx] = perfil === "adulto" ? [10, 24] : ref.fr;
    if (fr > mx) set("fr-alta", `FR ${fr} irpm (referência ${ref.fr.join("–")})`);
    if (fr < mn) set("fr-baixa", `FR ${fr} irpm (referência ${ref.fr.join("–")})`);
  }
  if (fc !== null && ref) {
    const [mn, mx] = ref.fc;
    if (fc > mx) set("fc-alta", `FC ${fc} bpm (referência ${mn}–${mx})`);
    if ((perfil === "adulto" && fc > 150) || (perfil === "pediatrico" && fc > 180) || (perfil === "neonato" && fc > 220)) set("fc-muito-alta", `FC ${fc} bpm`);
    if (fc < mn || (perfil !== "adulto" && fc < 60)) set("fc-baixa", `FC ${fc} bpm (referência ${mn}–${mx})`);
  }
  if (pas !== null && ref) {
    const pam = pad !== null ? (pas + 2 * pad) / 3 : null;
    if (pas < ref.pasMin || (perfil === "adulto" && pam !== null && pam < 65)) set("hipotensao", `PA ${pas}${pad !== null ? "×" + pad : ""} mmHg${pam ? ` (PAM ${VZ_FMT(pam, 0)})` : ""}`);
    if ((perfil === "adulto" && (pas >= 180 || (pad !== null && pad >= 120))) || ((gest || puerp) && (pas >= 160 || (pad !== null && pad >= 110))))
      set("pa-muito-alta", `PA ${pas}${pad !== null ? "×" + pad : ""} mmHg`);
  }
  const perf = vzNorm(sv.perfusao) + vzNorm(vzResp(caso, "C", "pele"));
  if (/lentific| > ?[3-9] ?s|>3s|livedo|mosquead|fria|pegajos|filiform|ruim|prejudicad/.test(perf) || vzResp(caso, "C", "pulsos").startsWith("finos") || vzResp(caso, "C", "pulsos").startsWith("ausentes"))
    set("perfusao-ruim", `Perfusão: ${[sv.perfusao, vzResp(caso, "C", "pele"), vzResp(caso, "C", "pulsos")].filter(Boolean).join(", ")}`);
  if (gcs !== null && perfil !== "neonato") {
    if (gcs <= 13) set("glasgow-baixo", `Glasgow ${gcs}`);
    if (gcs <= 8) set("glasgow-critico", `Glasgow ${gcs}`);
  }
  if (gli !== null) {
    if (gli < (perfil === "neonato" ? 47 : 70)) set("glicemia-baixa", `Glicemia ${gli} mg/dL`);
    if (gli > 250) set("glicemia-alta", `Glicemia ${gli} mg/dL`);
  }
  if (temp !== null) {
    if (temp < (perfil === "neonato" ? 36.5 : 35)) set("hipotermia", `Temperatura ${VZ_FMT(temp, 1)} °C`);
    if (temp >= (perfil === "neonato" ? 37.6 : 38)) set("febre", `Temperatura ${VZ_FMT(temp, 1)} °C`);
    if (temp >= 40) set("hiperpirexia", `Temperatura ${VZ_FMT(temp, 1)} °C`);
  }
  if (dor !== null && dor >= 7) set("dor-intensa", `Dor ${dor}/10`);
  const textoClin = vzNorm([sv.outros, sv.neuro, sv.exameFisico, caso.transf.resumo, caso.transf.motivo, caso.transf.dxPrincipal, caso.transf.dxSecundarios].join(" "));
  if (/vomit|emese|hematemese/.test(textoClin) || vzResp(caso, "A", "aspiracao").startsWith("alto") || vzResp(caso, "A", "aspiracao").startsWith("moderado")) set("vomitos", "Vômitos / risco de aspiração");

  /* suporte em uso */
  if (sv.o2 && sv.o2 !== "ar") set("o2", `Oxigênio: ${VZ_O2_NOMES[sv.o2] || sv.o2}${sv.o2fluxo ? ` ${sv.o2fluxo} L/min` : ""}${sv.fio2 ? ` FiO₂ ${sv.fio2}%` : ""}`);
  if (sv.o2 === "vni") set("vni", "Em ventilação não invasiva");
  const disp = vzNorm(sv.dispositivos + " " + sv.vent);
  if (sv.o2 === "vm" || / iot | tot | intubad|traqueost| tqt /.test(disp) || vzResp(caso, "A", "permeabilidade").startsWith("via aérea avançada")) {
    set("via-aerea-avancada", "Via aérea avançada (IOT/TQT)");
    if (sv.o2 === "vm" || /ventila|iot|tot|intubad/.test(disp)) set("vm", "Em ventilação mecânica");
  }
  const inf = vzNorm(sv.infusoes);
  if (/noradrenalina|adrenalina|dopamina|dobutamina|vasopressina|milrinona|nitroprussiato/.test(inf)) set("dva", `Droga vasoativa: ${sv.infusoes}`);
  if (/midazolam|fentanil|propofol|cetamina|dexmedetomidina/.test(inf)) set("sedacao-continua", "Sedação/analgesia contínua");
  if (/insulina/.test(inf)) set("insulina-iv", "Insulina IV contínua");
  if (sv.acessosQtd === "0") set("sem-acesso", "Sem acesso venoso");
  if (sv.acessosQtd === "1") set("acesso-unico", "Apenas um acesso venoso");
  if (/svd|sonda vesical|foley/.test(disp)) set("sonda-vesical", "Sonda vesical");

  /* comorbidades e medicações */
  const com = vzNorm(p.comorbidades), med = vzNorm(p.medicacoes);
  const C = [["comorb:dpoc", /dpoc|enfisema|bronquite cronica/], ["comorb:asma", /asma/], ["comorb:ic", /insuficiencia cardiaca|icc| ic /],
    ["comorb:dac", /coronari|iam previo|infarto|angina|stent|revasculariz/], ["comorb:dm", /diabet| dm | dm2| dm1/], ["comorb:drc", /renal cronic| drc |dialis|hemodialis/],
    ["comorb:epilepsia", /epileps|convuls/], ["comorb:hepatopatia", /cirrose|hepatopat/], ["comorb:has", /hipertens| has /], ["comorb:fa", /fibrilacao atrial| fa |flutter/], ["comorb:avc", /avc|ave /]];
  for (const [k, re] of C) if (re.test(com)) set(k, `Comorbidade: ${p.comorbidades}`);
  const U = [["uso:anticoagulante", /varfarina|marevan|rivaroxabana|xarelto|apixabana|eliquis|dabigatrana|pradaxa|enoxaparina|clexane|heparina|edoxabana/], ["uso:insulina", /insulina/],
    ["uso:betabloqueador", /propranolol|atenolol|metoprolol|carvedilol|bisoprolol|nebivolol/], ["uso:opioide", /morfina|metadona|oxicodona|tramadol|codeina|fentanil/], ["uso:antiagregante", /aas|clopidogrel|ticagrelor|prasugrel|acido acetilsalicilico/]];
  for (const [k, re] of U) if (re.test(med)) set(k, `Em uso: ${p.medicacoes}`);
  if (g.has("uso:insulina") && !g.has("comorb:dm")) set("comorb:dm", "Uso de insulina");

  /* diagnóstico */
  const dx = vzNorm([caso.transf.dxPrincipal, caso.transf.dxSecundarios, caso.transf.motivo].join(" "));
  for (const [k, termos] of Object.entries(VZ_DX_TERMOS))
    if (termos.some(t => dx.includes(vzNorm(t)))) set("dx:" + k, `Diagnóstico/motivo: ${caso.transf.dxPrincipal || caso.transf.motivo}`);
  if (g.has("prematuro")) set("dx:prematuro", "Prematuridade");
  if (perfil === "neonato") set("dx:neonatal-grave", "Recém-nascido em transferência");
  return { idadeAnos, perfil, ref, gatilhos: g };
}
const VZ_O2_NOMES = { ar: "ar ambiente", cateter: "cateter nasal", mascara: "máscara simples", venturi: "máscara de Venturi", reservatorio: "máscara com reservatório",
  oxitenda: "oxitenda/capacete", cpap: "CPAP", vni: "VNI", vm: "ventilação mecânica" };

/* ---------- dados ausentes e inconsistências ---------- */
function vzFaltando(caso, perfil, g) {
  const f = [], p = caso.pac, sv = caso.sv, t = caso.transf;
  const falta = (cond, campo, rotulo, nivel = "essencial") => { if (cond) f.push({ campo, rotulo, nivel }); };
  const vazio = v => vzTxt(v) === "";
  falta(vazio(p.idade), "pac.idade", "Idade");
  falta(vazio(p.peso), "pac.peso", "Peso atualizado", perfil && perfil !== "adulto" ? "essencial" : "importante");
  falta(vazio(p.sexo), "pac.sexo", "Sexo", "importante");
  falta(vazio(t.dxPrincipal), "transf.dxPrincipal", "Diagnóstico principal ou hipótese");
  falta(vazio(t.motivo), "transf.motivo", "Motivo da transferência", "importante");
  falta(vazio(t.destino), "transf.destino", "Hospital de destino");
  falta(vazio(t.tempoMin), "transf.tempoMin", "Tempo estimado de transporte");
  falta(vazio(t.ambulancia), "transf.ambulancia", "Tipo de ambulância");
  falta(vazio(t.equipe), "transf.equipe", "Profissionais que acompanharão", "importante");
  falta(vazio(sv.pas), "sv.pas", "Pressão arterial", perfil === "neonato" ? "importante" : "essencial");
  falta(vazio(sv.fc), "sv.fc", "Frequência cardíaca");
  falta(vazio(sv.fr), "sv.fr", "Frequência respiratória");
  falta(vazio(sv.spo2), "sv.spo2", "Saturação de O₂");
  falta(vazio(sv.temp), "sv.temp", "Temperatura", perfil === "neonato" ? "essencial" : "importante");
  falta(vazio(sv.glicemia), "sv.glicemia", "Glicemia capilar", perfil === "neonato" || g.has("glasgow-baixo") || g.has("comorb:dm") || g.has("dx:convulsao") ? "essencial" : "importante");
  falta(vazio(sv.glasgow) && perfil !== "neonato", "sv.glasgow", "Escala de Glasgow");
  falta(vazio(sv.acessosQtd), "sv.acessosQtd", "Acessos venosos");
  falta(vazio(sv.o2), "sv.o2", "Oxigênio / suporte ventilatório (inclusive 'ar ambiente')", "importante");
  falta(vazio(p.alergias), "pac.alergias", "Alergias (escreva 'nega' se não houver)", "importante");
  falta((perfil === "neonato" || p.gestante === "sim") && vazio(p.ig), "pac.ig", perfil === "neonato" ? "Idade gestacional ao nascer" : "Idade gestacional");
  falta(perfil === "adulto" && g.has("vm") && vazio(p.altura), "pac.altura", "Altura (peso predito para o ventilador)");
  return f;
}

function vzInconsistencias(caso, perfil) {
  const i = [], p = caso.pac, sv = caso.sv;
  const pas = vzN(sv.pas), pad = vzN(sv.pad), spo2 = vzN(sv.spo2), fc = vzN(sv.fc), fr = vzN(sv.fr), t = vzN(sv.temp), gcs = vzN(sv.glasgow),
    gli = vzN(sv.glicemia), peso = vzN(p.peso), ig = vzN(p.ig), idade = vzIdadeAnos(p.idade, p.idadeUnidade);
  if (pas !== null && pad !== null && pas <= pad) i.push("PA sistólica menor ou igual à diastólica: confira a ordem dos valores.");
  if (pas !== null && pad === null) i.push("PA sistólica sem diastólica informada.");
  if (spo2 !== null && (spo2 > 100 || spo2 < 30)) i.push(`SpO₂ ${spo2}% fora do possível/plausível.`);
  if (fc !== null && (fc < 20 || fc > 300)) i.push(`FC ${fc} bpm implausível.`);
  if (fr !== null && fr > 120) i.push(`FR ${fr} irpm implausível.`);
  if (t !== null && (t < 25 || t > 44)) i.push(`Temperatura ${t} °C implausível (unidade?).`);
  if (gcs !== null && (gcs < 3 || gcs > 15)) i.push("Glasgow deve estar entre 3 e 15.");
  if (gli !== null && gli < 15) i.push(`Glicemia ${gli}: valor muito baixo — confirme se não está em mmol/L (1 mmol/L ≈ 18 mg/dL).`);
  if (peso !== null) {
    if (perfil === "adulto" && (peso < 25 || peso > 350)) i.push(`Peso ${peso} kg implausível para adulto.`);
    if (perfil === "neonato" && (peso < 0.3 || peso > 6.5)) i.push(`Peso ${peso} kg implausível para recém-nascido (está em gramas?).`);
    if (perfil === "pediatrico" && idade !== null && idade < 1 && peso > 15) i.push(`Peso ${peso} kg alto para lactente — confira.`);
  }
  if (p.gestante === "sim" && p.sexo === "M") i.push("Gestante com sexo masculino informado.");
  if (p.gestante === "sim" && ig !== null && (ig < 4 || ig > 43)) i.push(`IG ${ig} semanas implausível na gestação.`);
  if (perfil === "neonato" && ig !== null && (ig < 22 || ig > 44)) i.push(`IG ao nascer ${ig} semanas implausível.`);
  if (perfil === "neonato" && caso.sv.o2 === "venturi") i.push("Máscara de Venturi em recém-nascido: confira o dispositivo e a FiO₂ ofertada (RN costuma usar cateter, capacete/oxitenda, CPAP ou blender).");
  if (caso.sv.o2 === "ar" && spo2 !== null && spo2 < 90) i.push("Em ar ambiente com SpO₂ < 90%: confira o registro do suporte de O₂.");
  if (vzResp(caso, "A", "permeabilidade").startsWith("via aérea avançada") && caso.sv.o2 && !["vm", "ar"].includes(caso.sv.o2)) i.push("Via aérea avançada marcada no ABCDE, mas o suporte informado não é ventilação mecânica.");
  /* Conflitos da leitura de documentos ainda não resolvidos. */
  for (const c of (caso.extracao && caso.extracao.candidatos) || [])
    if (c.conflito && !c.resolvido) i.push(`Documento: valores diferentes para ${VZ_ROTULO_CAMPO[c.campo] || c.campo} (${c.texto || c.valor}). Escolha o atual.`);
  return [...new Set(i)];
}
const VZ_ROTULO_CAMPO = { "pac.peso": "peso", "pac.ig": "idade gestacional", "sv.spo2": "SpO₂", "sv.fc": "FC", "sv.fr": "FR", "sv.pas": "PA sistólica",
  "sv.pad": "PA diastólica", "sv.temp": "temperatura", "sv.glicemia": "glicemia", "sv.glasgow": "Glasgow", "pac.idade": "idade", "pac.sexo": "sexo",
  "transf.destino": "destino", "transf.dxPrincipal": "diagnóstico", "transf.motivo": "motivo", "sv.o2": "suporte de O₂", "sv.o2fluxo": "fluxo de O₂",
  "pac.altura": "altura/estatura", "pac.alergias": "alergias", "transf.origem": "origem", "transf.regulacao": "regulação", "pac.nome": "nome",
  "pac.nascimento": "nascimento", "pac.nomeMae": "nome da mãe", "transf.solicitante": "solicitante", "sv.perfusao": "perfusão", "sv.estadoGeral": "estado geral",
  "rn.apgar": "Apgar", "rn.pesoNascimento": "peso ao nascer", "rn.pc": "perímetro cefálico", "sv.infusoes": "infusões",
  "sv.exameFisico": "exame físico", "transf.resumo": "resumo clínico", "transf.destaques": "pontos importantes", "sv.dor": "dor", "sv.diurese": "diurese",
  "sv.fio2": "FiO₂", "sv.acessosTipo": "acessos", "sv.acessosQtd": "nº de acessos", "sv.dispositivos": "dispositivos", "pac.comorbidades": "comorbidades",
  "pac.medicacoes": "medicações em uso", "pac.gestante": "gestação" };

/* ---------- ABCDE automático + risco ---------- */
function vzAvaliarABCDE(caso, g, perfil) {
  const r = { A: [], B: [], C: [], D: [], E: [] }; // { n: "critico"|"alto"|"moderado"|"ok", t }
  const add = (l, n, t) => r[l].push({ n, t });
  const A = k => vzResp(caso, "A", k), B = k => vzResp(caso, "B", k), Cc = k => vzResp(caso, "C", k), D = k => vzResp(caso, "D", k), E = k => vzResp(caso, "E", k);
  const avancada = g.has("via-aerea-avancada");
  if (A("permeabilidade").startsWith("obstrução total")) add("A", "critico", "Obstrução total de via aérea");
  else if (A("permeabilidade").startsWith("obstrução parcial")) add("A", "alto", "Obstrução parcial de via aérea");
  else if (A("permeabilidade").startsWith("pérvia com risco")) add("A", "moderado", "Via aérea pérvia com risco de obstrução");
  if (A("secrecoes") === "abundantes") add("A", "alto", "Secreções abundantes");
  if (A("reflexos") === "ausentes" && !avancada) add("A", "critico", "Reflexos protetores ausentes sem via aérea definitiva");
  else if (A("reflexos") === "diminuídos" && !avancada) add("A", "alto", "Reflexos protetores diminuídos");
  if (g.has("glasgow-critico") && !avancada) add("A", "critico", `${g.get("glasgow-critico")} sem via aérea definitiva`);
  if (A("aspiracao").startsWith("alto")) add("A", "alto", "Alto risco de broncoaspiração");
  if (A("avancada").startsWith("sim") && !avancada) add("A", "critico", "Via aérea avançada indicada e ainda não realizada");
  if (avancada) add("A", "alto", "Via aérea avançada: risco de deslocamento/obstrução no trajeto");

  if (g.has("spo2-critica")) add("B", "critico", g.get("spo2-critica"));
  else if (g.has("spo2-baixa")) add("B", "alto", g.get("spo2-baixa"));
  if (g.has("fr-baixa")) add("B", (vzN(caso.sv.fr) ?? 99) < (perfil === "adulto" ? 8 : 10) ? "critico" : "alto", g.get("fr-baixa"));
  if (g.has("fr-alta")) add("B", "moderado", g.get("fr-alta"));
  if (B("trabalho").startsWith("exaustão") || B("trabalho") === "apneia") add("B", "critico", `Trabalho respiratório: ${B("trabalho")}`);
  else if (B("trabalho").startsWith("aumentado")) add("B", "alto", "Trabalho respiratório aumentado");
  if (B("expansao") === "assimétrica" || B("ausculta").startsWith("murmúrio diminuído")) add("B", "alto", "Assimetria respiratória (pensar em pneumotórax/atelectasia/derrame)");
  if (g.has("vm")) add("B", "alto", "Ventilação mecânica");
  else if (g.has("vni")) add("B", "alto", "Ventilação não invasiva");
  else if (g.has("o2")) add("B", "moderado", g.get("o2"));

  if (g.has("hipotensao")) add("C", g.has("dva") || g.has("perfusao-ruim") || (perfil === "adulto" && (vzN(caso.sv.pas) ?? 999) < 70) ? "critico" : "alto", g.get("hipotensao"));
  if (g.has("dva")) add("C", "alto", g.get("dva"));
  if (g.has("perfusao-ruim")) add("C", "alto", g.get("perfusao-ruim"));
  if (Cc("pulsos").startsWith("ausentes")) add("C", "critico", "Pulsos periféricos ausentes");
  if (Cc("sangramento") === "ativo") add("C", "critico", "Sangramento ativo");
  if (Cc("pele").startsWith("cianose")) add("C", "critico", "Cianose central");
  if (Cc("volume").startsWith("necessária")) add("C", "alto", "Reposição volêmica necessária e não iniciada");
  const fc = vzN(caso.sv.fc);
  if (fc !== null && ((perfil === "adulto" && (fc < 40 || fc > 180)) || (perfil !== "adulto" && perfil && fc < 60))) add("C", "critico", `FC ${fc} bpm`);
  else if (g.has("fc-muito-alta")) add("C", "alto", g.get("fc-muito-alta"));
  else if (g.has("fc-baixa")) add("C", "alto", g.get("fc-baixa"));
  else if (g.has("fc-alta")) add("C", "moderado", g.get("fc-alta"));
  if (g.has("pa-muito-alta")) add("C", "alto", g.get("pa-muito-alta"));
  if (g.has("sem-acesso")) add("C", "critico", "Sem acesso venoso");
  else if (g.has("acesso-unico")) add("C", "moderado", "Apenas um acesso venoso");

  if (g.has("glasgow-critico")) add("D", "critico", g.get("glasgow-critico"));
  else if (g.has("glasgow-baixo")) add("D", "alto", g.get("glasgow-baixo"));
  if (D("pupilas") === "anisocoria" || D("pupilas") === "midríase bilateral") add("D", "critico", `Pupilas: ${D("pupilas")}`);
  if (D("convulsao").startsWith("em curso")) add("D", "critico", "Convulsão em curso ou repetida");
  else if (D("convulsao").startsWith("nas últimas")) add("D", "moderado", "Convulsão recente");
  if (D("deficit") === "presente") add("D", "alto", "Déficit neurológico focal");
  const gli = vzN(caso.sv.glicemia);
  if (g.has("glicemia-baixa")) add("D", gli !== null && gli < (perfil === "neonato" ? 30 : 54) ? "critico" : "alto", g.get("glicemia-baixa"));
  if (g.has("glicemia-alta")) add("D", "moderado", g.get("glicemia-alta"));

  const t = vzN(caso.sv.temp);
  if (g.has("hipotermia")) add("E", t !== null && t < (perfil === "neonato" ? 35 : 32) ? "critico" : "alto", g.get("hipotermia"));
  if (g.has("hiperpirexia")) add("E", "alto", g.get("hiperpirexia")); else if (g.has("febre")) add("E", "moderado", g.get("febre"));
  if (E("fraturas") === "não imobilizadas") add("E", "alto", "Fraturas não imobilizadas");
  if (E("lesoes").startsWith("presentes, não")) add("E", "moderado", "Lesões não tratadas");
  if (E("infeccao") === "presentes") add("E", "moderado", "Sinais de infecção");
  if (E("termico") === "não providenciada" && perfil === "neonato") add("E", "critico", "Recém-nascido sem proteção térmica");
  if (g.has("dor-intensa")) add("E", "moderado", g.get("dor-intensa"));
  return r;
}

const VZ_NIVEIS = ["ok", "moderado", "alto", "critico"];
const VZ_NIVEL_NOME = { baixo: "Risco baixo", moderado: "Risco moderado", alto: "Risco alto", critico: "Risco crítico", indeterminado: "Risco indeterminado" };

function vzRisco(abcde, g, perfil, faltando) {
  const achados = Object.values(abcde).flat();
  const just = [];
  let nivel = 0;
  for (const a of achados) { nivel = Math.max(nivel, VZ_NIVEIS.indexOf(a.n)); }
  /* Diagnósticos de alto risco no transporte, mesmo com sinais vitais estáveis. */
  const dxAlto = ["dx:sca", "dx:avc-hemorragico", "dx:hsa", "dx:dissecao-aorta", "dx:eclampsia", "dx:hemorragia-obstetrica", "dx:pos-pcr",
    "dx:choque", "dx:hic", "dx:trabalho-parto", "dx:tep", "dx:cardiopatia-congenita", "dx:hellp", "dx:anafilaxia", "dx:cad", "dx:trauma-torax"];
  const dxHit = dxAlto.filter(d => g.has(d));
  if (dxHit.length) { nivel = Math.max(nivel, 2); just.push(`Diagnóstico de alto risco no transporte: ${dxHit.map(d => d.slice(3)).join(", ")}`); }
  if (g.has("prematuro")) {
    const igTxt = g.get("prematuro");
    nivel = Math.max(nivel, 2); just.push(`${igTxt}: risco de hipotermia, hipoglicemia, apneia e instabilidade respiratória`);
  } else if (perfil === "neonato") { nivel = Math.max(nivel, 1); just.push("Recém-nascido: termorregulação e glicemia exigem vigilância contínua"); }
  if (g.has("gestante") && Object.keys(Object.fromEntries(g)).some(k => /dx:(pre-eclampsia|tpp|rpm|sofrimento-fetal)/.test(k))) { nivel = Math.max(nivel, 2); just.push("Intercorrência obstétrica em gestante"); }
  const nAltos = achados.filter(a => a.n === "alto").length;
  if (nAltos >= 3 && nivel < 3) { nivel = 3; just.push(`${nAltos} achados de alto risco somados`); }
  for (const a of achados.filter(a => a.n !== "ok").sort((x, y) => VZ_NIVEIS.indexOf(y.n) - VZ_NIVEIS.indexOf(x.n))) just.push(`${a.n === "critico" ? "Crítico" : a.n === "alto" ? "Alto" : "Moderado"}: ${a.t}`);
  const essenciais = faltando.filter(f => f.nivel === "essencial");
  let rotulo = ["baixo", "moderado", "alto", "critico"][nivel];
  if (nivel === 0 && essenciais.length) rotulo = "indeterminado";
  if (essenciais.length) just.push(`Dados essenciais ausentes (${essenciais.map(f => f.rotulo).join(", ")}): a classificação pode estar subestimada.`);
  if (!just.length) just.push("Nenhum achado de risco nos dados informados.");
  return { nivel: rotulo, justificativas: just };
}

/* ---------- o que resolver antes da saída ---------- */
function vzAntesDaSaida(caso, g, perfil, risco, faltando, o2) {
  const l = []; // { g: "critico"|"atencao", t, decisao }
  const add = (gr, t, decisao = false) => l.push({ g: gr, t, decisao });
  const amb = caso.transf.ambulancia;
  if (g.has("glasgow-critico") && !g.has("via-aerea-avancada")) add("critico", "Glasgow ≤ 8 sem via aérea definitiva: decidir sobre via aérea avançada ANTES da saída (indicação, recursos e competência da equipe).", true);
  if (vzResp(caso, "A", "avancada").startsWith("sim") && !g.has("via-aerea-avancada")) add("critico", "Via aérea avançada indicada: realizar e confirmar (capnografia) antes de sair, em ambiente controlado.", true);
  if (g.has("spo2-critica") || g.has("spo2-baixa")) add("critico", `Oxigenação inadequada (${g.get("spo2-baixa") || g.get("spo2-critica")}): otimizar O₂/ventilação e investigar causa reversível antes da saída.`);
  if (g.has("hipotensao")) add("critico", `Hipotensão (${g.get("hipotensao")}): ressuscitação volêmica e/ou vasoativo iniciados e resposta avaliada antes de sair.`, true);
  if (g.has("glicemia-baixa")) add("critico", `${g.get("glicemia-baixa")}: corrigir e reconferir antes da saída.`);
  if (vzResp(caso, "D", "convulsao").startsWith("em curso")) add("critico", "Convulsão em curso: controlar a crise antes do transporte.");
  if (vzResp(caso, "C", "sangramento") === "ativo") add("critico", "Sangramento ativo: controle (compressão, torniquete, ácido tranexâmico se indicado) antes da saída.");
  if (g.has("sem-acesso")) add("critico", "Sem acesso venoso: obter acesso (intraósseo se falhar) antes da saída.");
  if (g.has("acesso-unico") && ["alto", "critico"].includes(risco.nivel)) add("atencao", "Risco alto com um único acesso: obter segundo acesso.");
  if (g.has("hipotermia")) add(perfil === "neonato" ? "critico" : "atencao", `${g.get("hipotermia")}: aquecer antes e durante (RN: incubadora de transporte pré-aquecida).`);
  if (g.has("dor-intensa")) add("atencao", `${g.get("dor-intensa")}: analgesia antes da saída.`);
  if (g.has("vomitos") && (g.has("glasgow-baixo") || vzResp(caso, "A", "reflexos") !== "presentes")) add("atencao", "Vômitos com proteção de via aérea comprometida: antiemético, decúbito lateral/cabeceira e decisão sobre sonda gástrica.", true);
  if (vzResp(caso, "E", "fraturas") === "não imobilizadas") add("atencao", "Imobilizar fraturas antes da saída.");
  if (perfil === "neonato") add("atencao", "Recém-nascido: incubadora de transporte pré-aquecida, glicemia e temperatura antes de sair; equipe e ambulância de transporte neonatal.");
  if (g.has("gestante") && vzN(caso.pac.ig) >= 20) add("atencao", "Gestante ≥ 20 semanas: transportar em decúbito lateral esquerdo (ou deslocamento uterino manual).");
  if (g.has("dx:trabalho-parto")) add("critico", "Trabalho de parto: avaliar se o parto é iminente — parto iminente contraindica sair (assistir no local).", true);
  if (g.has("dva") || g.has("sedacao-continua") || g.has("insulina-iv")) add("atencao", "Infusões contínuas: bombas carregadas, soluções suficientes para o trajeto com margem e linhas identificadas.");
  if (amb === "basica" && (["alto", "critico"].includes(risco.nivel) || g.has("vm") || g.has("vni") || g.has("dva")))
    add("critico", "Ambulância básica incompatível com a gravidade/suporte: solicitar suporte avançado (USA) com médico.", true);
  if (perfil === "neonato" && amb && amb !== "neonatal") add("critico", "Recém-nascido: solicitar transporte neonatal (incubadora e equipe treinada).", true);
  if (o2 && o2.ok && !o2.suficiente) add("critico", `Autonomia de O₂ insuficiente (${VZ_FMT(o2.autonomia, 0)} min): trocar/levar cilindro reserva.`);
  for (const f of faltando.filter(f => f.nivel === "essencial")) add("atencao", `Completar: ${f.rotulo}.`);
  return l;
}

/* ---------- complicações prováveis ---------- */
/* Complicações que só existem com o suporte correspondente (ex.: extubação exige tubo). */
const VZ_REQUISITOS = {
  "extubacao-acidental": ["via-aerea-avancada", "vm"],
  "falha-ventilacao-mecanica": ["vm", "vni", "via-aerea-avancada"],
  "obstrucao-deslocamento-tubo-neonatal-pediatrico": ["via-aerea-avancada", "vm"]
};
function vzComplicacoes(g, perfil, risco) {
  if (!perfil) return [];
  const lista = [];
  for (const c of VZ_COMPLICACOES) {
    if (!c.publico.includes(perfil)) continue;
    const req = c.requer || VZ_REQUISITOS[c.id];
    if (req && !req.some(r => g.has(r))) continue;
    let score = 0; const motivos = [];
    for (const [k, w] of Object.entries(c.gatilhos)) if (g.has(k)) { score += w; motivos.push(g.get(k)); }
    if (c.id === "pcr" && ["alto", "critico"].includes(risco.nivel)) { score = Math.max(score, 2); motivos.push(`${VZ_NIVEL_NOME[risco.nivel]} na avaliação`); }
    if (score >= 2) lista.push({ c, score, motivos: [...new Set(motivos)] });
  }
  return lista.sort((a, b) => b.score - a.score || a.c.titulo.localeCompare(b.c.titulo, "pt-BR"));
}

/* ---------- doses resumidas (sem volume: volume só na calculadora, com concentração confirmada) ---------- */
function vzFaixaInd(perfil) { return perfil === "neonato" ? ["neonatal", "todas"] : perfil === "pediatrico" ? ["pediatrico", "todas"] : ["adulto", "todas"]; }
function vzDosesPara(farmacoId, perfil, peso) {
  const f = VZ_FARMACOS.find(x => x.id === farmacoId);
  if (!f || !perfil) return [];
  return f.indicacoes.filter(i => vzFaixaInd(perfil).includes(i.faixa)).map(i => {
    const u = vzUnidade(i.dose.unidade);
    const faixaTxt = i.dose.min === i.dose.max ? VZ_FMT(i.dose.min, 4) : `${VZ_FMT(i.dose.min, 4)}–${VZ_FMT(i.dose.max, 4)}`;
    let calc = "";
    if (u.kg) {
      if (!(peso > 0)) calc = " · informe o peso para calcular";
      else {
        let a = i.dose.min * peso, b = i.dose.max * peso, cap = false;
        if (i.doseMax && !vzUnidade(i.doseMax.unidade).kg && vzUnidade(i.doseMax.unidade).tempo === u.tempo) {
          const mx = vzConverter(i.doseMax.valor, vzUnidade(i.doseMax.unidade).base, u.base);
          if (mx !== null) { if (a > mx) { a = mx; cap = true; } if (b > mx) { b = mx; cap = true; } }
        }
        const unid = u.base + (u.tempo ? "/" + u.tempo : "");
        calc = ` = ${a === b ? VZ_FMT(a, 4) : `${VZ_FMT(a, 4)}–${VZ_FMT(b, 4)}`} ${unid} para ${VZ_FMT(peso, 3)} kg${cap ? " (limitado à dose máxima)" : ""}`;
      }
    }
    return { farmaco: f, ind: i, texto: `${f.nome} — ${i.rotulo}: ${faixaTxt} ${i.dose.unidade}${calc}${i.doseMax ? ` · máx ${VZ_FMT(i.doseMax.valor, 4)} ${i.doseMax.unidade}` : ""} · ${i.via}${i.repeticao ? ` · ${i.repeticao}` : ""}` };
  });
}

/* ---------- contingência ---------- */
function vzContingencia(compl, perfil, peso) {
  const itens = [];
  const usados = new Set();
  for (const { c } of compl.slice(0, 8)) {
    if (!c.contingencia) continue;
    const doses = [];
    for (const m of c.medicamentos || []) {
      if (m.farmaco && !usados.has(c.id + m.farmaco)) {
        usados.add(c.id + m.farmaco);
        const ds = vzDosesPara(m.farmaco, perfil, peso);
        if (ds.length) doses.push(...ds.slice(0, 2).map(d => d.texto));
        else doses.push(`${m.nome}: ${perfil === "adulto" ? m.adulto : perfil === "pediatrico" ? m.pediatrico : (m.neonatal || "sem dose neonatal validada nesta biblioteca")}`);
      } else if (!m.farmaco) doses.push(`${m.nome}: ${perfil === "adulto" ? m.adulto : perfil === "pediatrico" ? m.pediatrico : (m.neonatal || "sem dose neonatal validada nesta biblioteca")}`);
    }
    itens.push({ id: c.id, se: c.contingencia.se, faca: c.contingencia.faca, doses: doses.filter(Boolean), parar: c.parar, origem: c.titulo });
  }
  for (const u of (VZ_GUIAS.contingenciaUniversal || [])) {
    if (itens.some(i => i.id === u.id)) continue;
    const doses = (u.farmacos || []).flatMap(f => vzDosesPara(f, perfil, peso).slice(0, 2).map(d => d.texto));
    itens.push({ id: u.id, se: u.se, faca: u.faca, doses, parar: [], origem: "Contingência universal" });
  }
  return itens;
}

/* ---------- checklist ---------- */
const VZ_CHECKLIST = [
  { grupo: "Estabilização", itens: [
    ["est-va", "Via aérea avaliada", a => true], ["est-resp", "Respiração avaliada", a => true], ["est-circ", "Circulação avaliada", a => true],
    ["est-acesso", "Acesso venoso pérvio (testado)", a => true], ["est-hemorragia", "Controle de hemorragias", a => a.g.has("dx:sangramento") || a.g.has("dx:trauma") || a.g.has("dx:hemorragia-obstetrica") || a.g.has("dx:hemorragia-digestiva")],
    ["est-glicemia", "Glicemia verificada", a => a.perfil !== "adulto" || a.g.has("glasgow-baixo") || a.g.has("comorb:dm")],
    ["est-analgesia", "Analgesia adequada", a => a.g.has("dor-intensa") || a.g.has("dx:trauma")], ["est-antiemetico", "Antiemético quando indicado", a => a.g.has("vomitos")],
    ["est-imobilizacao", "Imobilização quando necessária", a => a.g.has("dx:trauma")], ["est-temperatura", "Temperatura controlada", a => a.perfil === "neonato" || a.g.has("hipotermia")],
    ["est-convulsoes", "Convulsões controladas", a => a.g.has("dx:convulsao") || a.g.has("dx:eclampsia")],
    ["est-meds", "Medicamentos e infusões conferidos (dupla checagem)", a => a.g.has("dva") || a.g.has("sedacao-continua") || a.g.has("insulina-iv")],
    ["est-sonda", "Sonda gástrica avaliada (IOT, vômitos, distensão)", a => a.g.has("vm") || a.g.has("vomitos")],
    ["est-dle", "Gestante em decúbito lateral esquerdo / deslocamento uterino", a => a.g.has("gestante"), x => x.g.has("gestante")],
    ["est-incubadora", "Incubadora de transporte pré-aquecida e testada", a => a.perfil === "neonato", x => x.perfil === "neonato"]] },
  { grupo: "Equipamentos", itens: [
    ["eq-monitor", "Monitor cardíaco", a => true], ["eq-oximetro", "Oxímetro", a => true], ["eq-pa", "Esfigmomanômetro / PNI (manguito do tamanho certo)", a => true],
    ["eq-desfibrilador", "Desfibrilador (pás/eletrodos do tamanho certo)", a => ["alto", "critico"].includes(a.risco.nivel) || a.g.has("dx:sca") || a.g.has("dx:arritmia") || a.g.has("dx:pos-pcr")],
    ["eq-aspirador", "Aspirador testado (sondas do tamanho certo)", a => a.g.has("vm") || a.g.has("vomitos") || a.perfil === "neonato" || a.g.has("glasgow-baixo")],
    ["eq-bvm", "Bolsa-válvula-máscara (tamanho do paciente)", a => true], ["eq-o2", "Fonte de oxigênio com autonomia calculada", a => a.g.has("o2")],
    ["eq-o2-reserva", "Cilindro reserva", a => a.g.has("o2") || a.g.has("vm")],
    ["eq-iot", "Material de intubação (tubos, laringoscópio, guia, capnógrafo)", a => a.g.has("vm") || a.g.has("glasgow-baixo") || a.g.has("spo2-baixa") || vzResp(a.caso, "A", "avancada") !== "" && !vzResp(a.caso, "A", "avancada").startsWith("não")],
    ["eq-av", "Material de acesso venoso", a => true], ["eq-io", "Material de acesso intraósseo", a => a.perfil !== "adulto" || ["alto", "critico"].includes(a.risco.nivel)],
    ["eq-bombas", "Bombas de infusão com bateria", a => a.g.has("dva") || a.g.has("sedacao-continua") || a.g.has("insulina-iv")],
    ["eq-ventilador", "Ventilador de transporte testado (alarmes, circuito, filtro)", a => a.g.has("vm") || a.g.has("vni"), x => x.g.has("vm") || x.g.has("vni")],
    ["eq-capnografo", "Capnografia", a => a.g.has("vm"), x => x.g.has("vm") || x.g.has("glasgow-baixo")],
    ["eq-glicosimetro", "Glicosímetro", a => a.perfil !== "adulto" || a.g.has("comorb:dm"), x => true],
    ["eq-parto", "Kit de parto e material de reanimação neonatal", a => a.g.has("gestante") && (a.g.has("dx:tpp") || a.g.has("dx:trabalho-parto") || a.g.has("dx:rpm")), x => x.g.has("gestante")]] },
  { grupo: "Documentação", itens: [
    ["doc-ficha", "Ficha de atendimento", a => true], ["doc-relatorio", "Relatório médico de transferência", a => true], ["doc-exames", "Exames disponíveis (cópias/imagens)", a => false],
    ["doc-prescricoes", "Prescrições", a => false], ["doc-destino", "Identificação do hospital de destino e contato (aceite/senha)", a => true],
    ["doc-sv", "Sinais vitais antes da saída registrados", a => true], ["doc-meds", "Medicações administradas registradas (dose e horário)", a => false],
    ["doc-consentimento", "Paciente/família informados", a => false]] }
];
/* Itens com 3º elemento só aparecem quando a condição vale (ex.: incubadora só para RN). */
function vzChecklist(caso, analise) {
  const ctx = { ...analise, caso };
  return VZ_CHECKLIST.map(gr => ({ grupo: gr.grupo, itens: gr.itens.filter(i => !i[3] || i[3](ctx)).map(([id, texto, critico]) => {
    const st = caso.checklist[id] || "";
    const c = !!critico(ctx);
    return { id, texto, critico: c, status: st, alerta: c && (st === "" || st === "pendente" || st === "indisponivel") };
  }) }));
}

/* ---------- análise completa ---------- */
function vzAnalisar(caso) {
  const { idadeAnos, perfil, ref, gatilhos: g } = vzGatilhos(caso);
  const faltando = vzFaltando(caso, perfil, g);
  const inconsistencias = vzInconsistencias(caso, perfil);
  const abcde = vzAvaliarABCDE(caso, g, perfil);
  const risco = vzRisco(abcde, g, perfil, faltando);
  const peso = vzN(caso.pac.peso);
  const o = caso.o2calc || {};
  const o2 = o.capacidadeL || o.pressao ? vzCalcularO2({ ...o, fluxo: o.fluxo || caso.sv.o2fluxo, tempoMin: caso.transf.tempoMin }) : null;
  const antes = vzAntesDaSaida(caso, g, perfil, risco, faltando, o2);
  const complicacoes = vzComplicacoes(g, perfil, risco);
  const contingencia = vzContingencia(complicacoes, perfil, peso);
  const analise = { idadeAnos, perfil, ref, g, faltando, inconsistencias, abcde, risco, antes, complicacoes, contingencia, o2, peso };
  analise.checklist = vzChecklist(caso, analise);
  analise.pendCriticos = analise.checklist.flatMap(x => x.itens).filter(i => i.alerta);
  return analise;
}

/* ---------- relatório SBAR ---------- */
function vzSBAR(caso, a) {
  const p = caso.pac, t = caso.transf, sv = caso.sv;
  const ni = v => vzTxt(v) || "não informado";
  const idade = p.idade !== "" ? `${p.idade} ${vzN(p.idade) === 1 ? p.idadeUnidade.replace(/s$/, "").replace("ese", "ês") : p.idadeUnidade}` : "idade não informada";
  const svTxt = s => [`PA ${s.pas || "—"}${s.pad ? "×" + s.pad : ""} mmHg`, `FC ${s.fc || "—"}`, `FR ${s.fr || "—"}`, `SpO₂ ${s.spo2 || "—"}%`, `T ${s.temp || "—"} °C`,
    `Glicemia ${s.glicemia || "—"}`, a.perfil !== "neonato" ? `Glasgow ${s.glasgow || "—"}` : ""].filter(Boolean).join(" · ");
  const ordenados = [...caso.monit].sort((x, y) => (x.hora || "").localeCompare(y.hora || ""));
  const saida = ordenados.filter(m => m.fase === "saida").pop(), chegada = ordenados.filter(m => m.fase === "chegada").pop();
  const ev = tipo => caso.eventos.filter(e => e.tipo === tipo).sort((x, y) => (x.hora || "").localeCompare(y.hora || ""));
  const lst = arr => arr.length ? arr.map(e => `  ${e.hora || "--:--"} ${e.texto}`).join("\n") : "  Nenhum registrado";
  const abc = Object.entries(a.abcde).map(([l, achados]) => `  ${l}: ${achados.length ? achados.map(x => x.t).join("; ") : "sem alteração registrada"}`).join("\n");
  const respostas = Object.entries(VZ_ABCDE).map(([l, def]) => def.itens.map(([k, rot]) => (caso.abcde[l] || {})[k] ? `${rot}: ${(caso.abcde[l] || {})[k]}` : "").filter(Boolean).join("; ")).filter(Boolean).join(" | ");
  return `RELATÓRIO DE TRANSFERÊNCIA — SBAR
Data: ${new Date().toLocaleDateString("pt-BR")} · Origem: ${ni(t.origem)} → Destino: ${ni(t.destino)}${t.regulacao ? ` · Regulação: ${t.regulacao}` : ""}
Paciente: ${p.nome || "não identificado"} · ${idade} · ${p.sexo === "M" ? "masculino" : p.sexo === "F" ? "feminino" : "sexo não informado"} · Peso ${vzN(p.peso) ? VZ_FMT(vzN(p.peso), 3) + " kg" : "não informado"}${p.gestante === "sim" ? ` · Gestante ${p.ig || "?"} semanas` : ""}${a.perfil === "neonato" && p.ig ? ` · IG ao nascer ${p.ig} semanas` : ""}

S — SITUAÇÃO
Motivo da transferência: ${ni(t.motivo)}
Diagnóstico principal: ${ni(t.dxPrincipal)}${t.dxSecundarios ? `\nHipóteses secundárias: ${t.dxSecundarios}` : ""}
${t.destaques ? `Pontos importantes:\n${t.destaques}\n` : ""}Estado atual: ${VZ_NIVEL_NOME[a.risco.nivel]} (apoio à decisão; não autoriza transporte). ${chegada ? "Sinais vitais na chegada: " + svTxt(chegada) : "Sinais vitais atuais: " + svTxt(sv)}

B — HISTÓRIA (BACKGROUND)
${t.resumo ? `Resumo clínico: ${t.resumo}\n` : ""}Comorbidades: ${ni(p.comorbidades)}
Alergias: ${ni(p.alergias)}
Medicamentos de uso habitual: ${ni(p.medicacoes)}${a.perfil === "neonato" && (caso.rn.apgar || caso.rn.pesoNascimento) ? `\nRN: Apgar ${caso.rn.apgar || "—"} · peso ao nascer ${vzN(caso.rn.pesoNascimento) ? VZ_FMT(vzN(caso.rn.pesoNascimento), 3) + " kg" : "—"} · PC ${caso.rn.pc || "—"} cm` : ""}

A — AVALIAÇÃO
Sinais vitais iniciais: ${svTxt(sv)}${saida ? `\nNa saída (${saida.hora}): ${svTxt(saida)}` : ""}
${sv.exameFisico ? `Exame físico: ${sv.exameFisico}\n` : ""}Neurológico: ${ni(sv.neuro)} · Perfusão: ${ni(sv.perfusao)} · Dor: ${sv.dor !== "" ? sv.dor + "/10" : "não informada"} · Diurese: ${ni(sv.diurese)}
Suporte: ${sv.o2 ? (VZ_O2_NOMES[sv.o2] || sv.o2) : "não informado"}${sv.o2fluxo ? ` ${sv.o2fluxo} L/min` : ""}${sv.fio2 ? ` FiO₂ ${sv.fio2}%` : ""}${sv.vent ? ` · Ventilador: ${sv.vent}` : ""}
Acessos: ${sv.acessosQtd !== "" ? sv.acessosQtd + (sv.acessosQtd === "2" ? "+" : "") : "não informado"} ${sv.acessosTipo}${sv.dispositivos ? ` · Dispositivos: ${sv.dispositivos}` : ""}
Infusões em andamento: ${ni(sv.infusoes)}
ABCDE:
${abc}${respostas ? `\nRegistro do exame: ${respostas}` : ""}
Exames: ${caso.extracao && caso.extracao.exames && caso.extracao.exames.length ? caso.extracao.exames.map(e => `${e.nome} ${e.valor} ${e.unidade}`).join("; ") : "ver documentos anexos"}

R — RECOMENDAÇÃO
${a.antes.length ? a.antes.map(x => "- " + x.t).join("\n") : "- Sem pendências registradas pelo sistema."}
Pendências e exames pendentes: ${ni(t.pendencias)}
Necessidade de suporte especializado: ${ni(t.motivo)}

TRANSPORTE
Ambulância: ${{ basica: "básica (USB)", avancada: "avançada (USA)", neonatal: "neonatal", aeromedico: "aeromédico" }[t.ambulancia] || "não informada"} · Equipe: ${ni(t.equipe)} · Tempo estimado: ${t.tempoMin ? t.tempoMin + " min" : "não informado"}${t.distanciaKm ? ` (${t.distanciaKm} km)` : ""}
Medicamentos administrados (dose e horário):
${lst(ev("medicamento"))}
Procedimentos realizados:
${lst(ev("procedimento"))}
Intercorrências durante o transporte:
${lst(ev("intercorrencia"))}
Monitorização registrada:
${ordenados.length ? ordenados.map(m => `  ${m.hora || "--:--"} [${{ inicial: "inicial", saida: "saída", percurso: "percurso", chegada: "chegada" }[m.fase] || m.fase}] ${svTxt(m)}${m.nota ? " · " + m.nota : ""}`).join("\n") : "  Nenhum registro"}

Responsável pelo transporte: ______________________ CRM ________
Recebido por: ______________________ Horário: ______`;
}

if (typeof module !== "undefined") module.exports = { vzCasoVazio, vzAnalisar, vzGatilhos, vzSBAR, vzDosesPara, VZ_ABCDE, VZ_CHECKLIST, VZ_NIVEL_NOME, VZ_ROTULO_CAMPO, VZ_O2_NOMES };
