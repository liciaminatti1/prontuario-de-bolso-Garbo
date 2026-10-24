/* Pacientes: prontuário de acompanhamento longitudinal.
   - Dados guardados SÓ neste navegador, criptografados (AES-GCM 256, chave derivada
     da senha por PBKDF2-SHA256). Sem a senha, não há como recuperar.
   - Bloqueio automático após 15 min sem uso. Backup criptografado em arquivo.
   - Indicações: cruza patologias, medicações, alergias, exames e consultas com a base
     de medicamentos e regras de seguimento para sugerir condutas e alertas. */

const CHAVE_DB = "pb-pacientes-cripto";
const MINUTOS_BLOQUEIO = 15;
let DB = null;            // dados abertos (só na memória enquanto desbloqueado)
let CHAVE = null;         // CryptoKey derivada da senha
let SAL = null;
let ultimaAtividade = Date.now();

/* ---------- criptografia ---------- */
const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
const deB64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function derivarChave(senha, sal) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(senha), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt: sal, iterations: 250000, hash: "SHA-256" }, base,
    { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}
async function cifrar(obj) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, CHAVE, new TextEncoder().encode(JSON.stringify(obj)));
  return { v: 1, sal: b64(SAL), iv: b64(iv), ct: b64(ct) };
}
async function decifrar(pacote, senha) {
  const sal = deB64(pacote.sal);
  const chave = await derivarChave(senha, sal);
  const txt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(pacote.iv) }, chave, deB64(pacote.ct));
  return { dados: JSON.parse(new TextDecoder().decode(txt)), chave, sal };
}
const pacoteSalvo = () => { try { return JSON.parse(localStorage.getItem(CHAVE_DB)); } catch (e) { return null; } };
async function salvarDB() {
  if (!DB || !CHAVE) return;
  try { localStorage.setItem(CHAVE_DB, JSON.stringify(await cifrar(DB))); }
  catch (e) { alertaPac("Não foi possível salvar neste navegador (armazenamento cheio ou bloqueado)."); }
}
function bloquear() { DB = null; CHAVE = null; SAL = null; if (location.hash.startsWith("#pac")) rota(); }
const desbloqueado = () => !!DB;

/* Bloqueio por inatividade */
["click", "keydown", "input", "touchstart"].forEach(ev => document.addEventListener(ev, () => { ultimaAtividade = Date.now(); }, { passive: true }));
setInterval(() => { if (DB && Date.now() - ultimaAtividade > MINUTOS_BLOQUEIO * 60000) bloquear(); }, 30000);

/* ---------- modelo ---------- */
const novoId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const hojeIso = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
function novoPaciente(nome) {
  return { id: novoId(), criado: Date.now(), atualizado: Date.now(),
    dados: { nome, nascimento: "", sexo: "", altura: "", documento: "", telefone: "", gestante: false, dum: "", obs: "" },
    patologias: [], medicacoes: [], alergias: { classes: [], outras: "" }, exames: [], consultas: [] };
}
const pacPorId = id => DB && DB.pacientes.find(p => p.id === id);
function idadePac(p) {
  if (!p.dados.nascimento) return null;
  const n = new Date(p.dados.nascimento + "T12:00:00"), h = new Date();
  let a = h.getFullYear() - n.getFullYear();
  if (h.getMonth() < n.getMonth() || (h.getMonth() === n.getMonth() && h.getDate() < n.getDate())) a--;
  return a;
}
function idadeTexto(p) {
  if (!p.dados.nascimento) return "";
  const a = idadePac(p);
  if (a >= 2) return `${a} anos`;
  const meses = Math.floor((Date.now() - new Date(p.dados.nascimento + "T12:00:00")) / (30.44 * 864e5));
  return `${meses} meses`;
}
const diasDesde = iso => iso ? Math.floor((Date.now() - new Date(iso + "T12:00:00")) / 864e5) : Infinity;
const ordData = (a, b) => (b.data || "").localeCompare(a.data || "");

/* Catálogo de exames (normaliza nomes para as regras e gráficos). */
const EXAMES_CAT = [
  ["hba1c", "HbA1c", "%", ["hba1c", "hemoglobina glicada", "glicada"]],
  ["glicemia", "Glicemia de jejum", "mg/dL", ["glicemia"]],
  ["creatinina", "Creatinina", "mg/dL", ["creatinina"]],
  ["potassio", "Potássio", "mEq/L", ["potassio", "potássio"]],
  ["sodio", "Sódio", "mEq/L", ["sodio"]],
  ["ldl", "LDL-c", "mg/dL", ["ldl"]],
  ["hdl", "HDL-c", "mg/dL", ["hdl"]],
  ["tg", "Triglicerídeos", "mg/dL", ["triglicer"]],
  ["ct", "Colesterol total", "mg/dL", ["colesterol total"]],
  ["tsh", "TSH", "mUI/L", ["tsh"]],
  ["t4l", "T4 livre", "ng/dL", ["t4"]],
  ["hb", "Hemoglobina", "g/dL", ["hemoglobina", "hb "]],
  ["ferritina", "Ferritina", "ng/mL", ["ferritina"]],
  ["rac", "Relação albumina/creatinina (urina)", "mg/g", ["albumina/creatinina", "rac", "albuminuria", "microalbumin"]],
  ["tgp", "TGP (ALT)", "U/L", ["tgp", "alt"]],
  ["tgo", "TGO (AST)", "U/L", ["tgo", "ast"]],
  ["acido-urico", "Ácido úrico", "mg/dL", ["acido urico", "ácido úrico"]],
  ["inr", "INR", "", ["inr"]],
  ["b12", "Vitamina B12", "pg/mL", ["b12"]],
  ["psa", "PSA", "ng/mL", ["psa"]],
  ["retina", "Retinografia / fundo de olho", "", ["retino", "fundo de olho", "fundoscopia"]],
  ["ecg", "ECG", "", ["ecg", "eletrocardiograma"]],
  ["mamografia", "Mamografia", "", ["mamografia"]],
  ["colo", "Rastreio de colo (DNA-HPV / citopatológico)", "", ["hpv", "citopatolog", "papanicolau", "preventivo"]],
  ["colorretal", "Rastreio colorretal (sangue oculto / colonoscopia)", "", ["sangue oculto", "colonoscopia", "fit"]],
  ["espirometria", "Espirometria", "", ["espirometria"]]
];
function exameKey(nome) {
  const n = " " + normTxt(nome) + " ";
  const e = EXAMES_CAT.find(([, , , al]) => al.some(a => n.includes(normTxt(a))));
  return e ? e[0] : null;
}
const exameNome = k => (EXAMES_CAT.find(e => e[0] === k) || [k, k])[1];
function examesPorChave(p, k) { return p.exames.filter(e => exameKey(e.nome) === k).sort(ordData); }
function ultimoExame(p, k) { return examesPorChave(p, k)[0] || null; }
const valorNum = e => e ? num(e.valor) : null;
function ultimaConsulta(p, campo) { return [...p.consultas].sort(ordData).find(c => c[campo]) || null; }
function medsAtivas(p) { return p.medicacoes.filter(m => m.ativo !== false); }
function medsDaBase(p) { return medsAtivas(p).map(m => MED_POR_ID[m.medId]).filter(Boolean); }
function temPatologia(p, fichaIds, termos) {
  return p.patologias.some(x => fichaIds.includes(x.fichaId) || termos.some(t => normTxt(x.nome).includes(t)));
}
function medIdPorNome(nome) {
  const n = normTxt(nome);
  const m = MEDICAMENTOS.find(md => md.nomes.some(x => normTxt(x) === n || n.startsWith(normTxt(x) + " ")));
  return m ? m.id : "";
}
function fichaIdPorNome(nome) {
  const n = normTxt(nome);
  const f = FICHAS.find(x => normTxt(x.titulo) === n);
  return f ? f.id : "";
}
function funcaoRenalPac(p) {
  const cr = valorNum(ultimoExame(p, "creatinina"));
  const idade = idadePac(p), sexo = p.dados.sexo, peso = num((ultimaConsulta(p, "peso") || {}).peso), alt = num(p.dados.altura);
  if (!cr) return null;
  if (idade !== null && idade < 18) { const s = Renal.schwartz(alt, cr); return s ? { clcr: s, tfg: s, metodo: "Schwartz" } : null; }
  return { clcr: Renal.cockcroft(idade, peso, cr, sexo), tfg: Renal.ckdEpi2021(idade, cr, sexo), metodo: "Cockcroft-Gault / CKD-EPI 2021" };
}

/* ---------- indicações e alertas ---------- */
function indicacoes(p) {
  const out = [];
  const add = (g, titulo, texto, fichaId) => out.push({ g, titulo, texto, fichaId });
  const meds = medsDaBase(p);
  const idade = idadePac(p);
  const rf = funcaoRenalPac(p);
  /* Nome como foi cadastrado (ex.: "Losartana", não o grupo "IECA/BRA" da base). */
  const nomeDe = m => (medsAtivas(p).find(x => x.medId === m.id) || {}).nome || m.nomes[0];

  /* Segurança dos medicamentos em uso */
  if (rf && rf.tfg && rf.tfg < 60) add("moderada", `Função renal reduzida: ${Renal.estagio(rf.tfg)}`, `TFG ${fmt(rf.tfg, 0)} mL/min/1,73 m²${rf.clcr ? ` · ClCr ${fmt(rf.clcr, 0)} mL/min` : ""}. Revisar doses e evitar nefrotóxicos.`);
  meds.forEach(m => {
    const fr = rf && rf.clcr ? faixaRenal(m, rf.clcr) : null;
    if (fr) add("moderada", `${nomeDe(m)}: ajuste renal`, fr.texto);
    alertasAlergia(m, p.alergias.classes).forEach(a => add(a.g, `${nomeDe(m)}: alergia`, a.t));
    if (p.dados.gestante && m.gestacao && ["evitar", "contraindicado"].includes(m.gestacao.nivel)) add("grave", `${nomeDe(m)} na gestação`, m.gestacao.texto);
  });
  const vistos = new Set();
  meds.forEach(m => interacoesCom(m, meds).forEach(i => {
    const k = [m.id, i.com.id].sort().join("|") + i.t;
    if (vistos.has(k)) return; vistos.add(k);
    add(i.g, `Interação: ${nomeDe(m)} + ${nomeDe(i.com)}`, i.t);
  }));
  const naoReconhecidas = medsAtivas(p).filter(m => !m.medId);
  if (naoReconhecidas.length) add("info", "Medicações fora da base de segurança", `${naoReconhecidas.map(m => m.nome).join(", ")}: interações e ajustes não verificados automaticamente.`);

  /* Exames com valores críticos */
  const k = valorNum(ultimoExame(p, "potassio"));
  if (k !== null && k >= 5.5) add("grave", `Potássio ${fmt(k)} mEq/L`, "Hipercalemia: rever IECA/BRA, espironolactona, AINE, SMX-TMP; ECG se ≥ 6,0.", "hipercalemia");
  else if (k !== null && k < 3.5) add("moderada", `Potássio ${fmt(k)} mEq/L`, "Hipocalemia: rever diuréticos e repor.");

  /* Seguimento por condição */
  const usa = tag => meds.some(m => m.id === tag || (m.tags || []).includes(tag));
  if (temPatologia(p, ["diabetes-tipo-2"], ["diabet", "dm2", "dm tipo 2"])) {
    const a1c = ultimoExame(p, "hba1c");
    if (!a1c || diasDesde(a1c.data) > 183) add("moderada", "Diabetes: HbA1c", a1c ? `Última em ${dataBR(a1c.data)} (há mais de 6 meses). Solicitar.` : "Sem HbA1c registrada. Solicitar.", "diabetes-tipo-2");
    else if (valorNum(a1c) > 7) add("moderada", `Diabetes: HbA1c ${fmt(valorNum(a1c))}%`, "Acima da meta habitual (< 7%, individualizar). Revisar adesão e intensificar tratamento.", "diabetes-tipo-2");
    else add("ok", `Diabetes: HbA1c ${fmt(valorNum(a1c))}%`, `Na meta habitual (${dataBR(a1c.data)}).`, "diabetes-tipo-2");
    const rac = ultimoExame(p, "rac");
    if (!rac || diasDesde(rac.data) > 365) add("moderada", "Diabetes: albuminúria", "Relação albumina/creatinina anual não registrada nos últimos 12 meses.", "diabetes-tipo-2");
    const ret = ultimoExame(p, "retina");
    if (!ret || diasDesde(ret.data) > 365) add("info", "Diabetes: fundo de olho", "Retinografia/fundoscopia anual não registrada nos últimos 12 meses.", "diabetes-tipo-2");
    if (!usa("metformina") && (!rf || !rf.tfg || rf.tfg >= 30)) add("info", "Diabetes: metformina", "Metformina é a 1ª linha habitual se não houver contraindicação ou intolerância.", "diabetes-tipo-2");
    if (rf && rf.tfg && rf.tfg < 60 && !usa("iecabra")) add("info", "Diabetes com TFG < 60", "Considerar IECA/BRA e iSGLT2 para proteção renal (conferir PCDT).", "diabetes-tipo-2");
    add("info", "Diabetes: pé", "Exame dos pés (monofilamento, pulsos) ao menos anual.", "pe-diabetico");
  }
  if (temPatologia(p, ["has-ubs", "has-descompensada"], ["hipertens", "has"])) {
    const c = ultimaConsulta(p, "pa");
    const m = c && String(c.pa).match(/(\d{2,3})\s*[x\/]\s*(\d{2,3})/i);
    if (!m) add("info", "Hipertensão: PA", "Registre a PA nas consultas para acompanhar a meta.", "has-ubs");
    else if (+m[1] >= 130 || +m[2] >= 80) add("moderada", `Hipertensão: PA ${m[1]}×${m[2]} mmHg`, `Acima da meta (< 130/80 mmHg na maioria, SBC 2025) em ${dataBR(c.data)}. Revisar adesão, técnica e esquema.`, "has-ubs");
    else add("ok", `Hipertensão: PA ${m[1]}×${m[2]} mmHg`, `Na meta em ${dataBR(c.data)}.`, "has-ubs");
  }
  if (usa("iecabra") || usa("poupador-k") || usa("diuretico")) {
    const cr = ultimoExame(p, "creatinina"), kk = ultimoExame(p, "potassio");
    if (!cr || !kk || Math.max(diasDesde(cr.data), diasDesde(kk.data)) > 365)
      add("moderada", "Monitorização de IECA/BRA/diurético", "Creatinina e potássio não registrados nos últimos 12 meses. Solicitar.");
  }
  if (temPatologia(p, ["dislipidemia"], ["dislipid", "colesterol"]) || usa("estatina")) {
    const ldl = ultimoExame(p, "ldl");
    if (!ldl || diasDesde(ldl.data) > 365) add("info", "Dislipidemia: LDL-c", "Perfil lipídico não registrado nos últimos 12 meses.", "dislipidemia");
    else add("info", `LDL-c ${fmt(valorNum(ldl), 0)} mg/dL (${dataBR(ldl.data)})`, "Comparar com a meta pelo risco cardiovascular (ficha Dislipidemia).", "dislipidemia");
  }
  if (temPatologia(p, ["hipotireoidismo"], ["hipotireo"]) || usa("levotiroxina")) {
    const t = ultimoExame(p, "tsh");
    if (!t || diasDesde(t.data) > 365) add("info", "Hipotireoidismo: TSH", "TSH não registrado nos últimos 12 meses.", "hipotireoidismo");
    else if (valorNum(t) > 4.5 || valorNum(t) < 0.4) add("moderada", `TSH ${fmt(valorNum(t), 2)} mUI/L`, "Fora da faixa de referência habitual: ajustar levotiroxina e repetir em 6–8 semanas.", "hipotireoidismo");
  }
  if (usa("varfarina")) {
    const inr = ultimoExame(p, "inr");
    if (!inr || diasDesde(inr.data) > 30) add("moderada", "Varfarina: INR", "INR não registrado nos últimos 30 dias.");
    else if (valorNum(inr) > 3.5) add("grave", `INR ${fmt(valorNum(inr))}`, "Acima do alvo: risco de sangramento; ajustar dose.");
  }
  if (usa("metformina")) {
    const b = ultimoExame(p, "b12");
    if (!b || diasDesde(b.data) > 730) add("info", "Metformina: vitamina B12", "Uso prolongado: dosar B12 periodicamente (sobretudo se neuropatia ou anemia).");
  }
  if (temPatologia(p, ["doenca-renal-cronica"], ["renal cronica", "drc"]) || (rf && rf.tfg && rf.tfg < 60)) {
    const rac = ultimoExame(p, "rac");
    if (!rac || diasDesde(rac.data) > 365) add("moderada", "DRC: albuminúria", "Relação albumina/creatinina não registrada nos últimos 12 meses (estadiamento A1–A3).", "doenca-renal-cronica");
    else if (valorNum(rac) >= 30 && !usa("iecabra")) add("moderada", `DRC com albuminúria ${fmt(valorNum(rac), 0)} mg/g`, "Considerar IECA ou BRA (e iSGLT2 conforme PCDT).", "doenca-renal-cronica");
    if (rf && rf.tfg && rf.tfg < 30) add("moderada", "DRC G4–G5", "TFG < 30: encaminhar à nefrologia.", "doenca-renal-cronica");
    if (usa("aine")) add("grave", "DRC em uso de AINE", "Suspender anti-inflamatório (piora a função renal e o potássio).", "doenca-renal-cronica");
  }
  if (temPatologia(p, ["ic-cronica", "ic-descompensada"], ["insuficiencia cardiaca", "icc"])) {
    if (!usa("iecabra")) add("info", "IC: IECA/BRA/sacubitril-valsartana", "Pilar da IC com FE reduzida não registrado nas medicações.", "ic-cronica");
    const kAtual = valorNum(ultimoExame(p, "potassio"));
    if (!usa("poupador-k") && (!rf || !rf.tfg || rf.tfg >= 30) && (kAtual === null || kAtual < 5))
      add("info", "IC: espironolactona", "Pilar da IC com FE reduzida não registrado (indicada se K < 5 e TFG ≥ 30).", "ic-cronica");
    if (usa("aine")) add("grave", "IC em uso de AINE", "AINE descompensa a IC: suspender.", "ic-cronica");
  }
  if (temPatologia(p, ["dac-cronica", "sca", "avc-prevencao-secundaria"], ["coronari", "infarto", "iam", "angina", "avc", "derrame"])) {
    if (!usa("antiagregante") && !usa("anticoagulante")) add("moderada", "Prevenção secundária: antitrombótico", "Doença aterosclerótica sem antiagregante ou anticoagulante registrado.", temPatologia(p, ["avc-prevencao-secundaria"], ["avc", "derrame"]) ? "avc-prevencao-secundaria" : "dac-cronica");
    if (!usa("estatina")) add("moderada", "Prevenção secundária: estatina", "Doença aterosclerótica sem estatina registrada (alta intensidade).", "dac-cronica");
  }
  if (temPatologia(p, ["tabagismo"], ["tabag", "fumante"])) add("info", "Tabagismo", "Abordar cessação em toda consulta; oferecer adesivo/bupropiona.", "tabagismo");
  if (temPatologia(p, ["anticoagulacao-oral", "fibrilacao-atrial", "tep"], ["fibrilacao", "anticoag"]) && !usa("anticoagulante")) add("info", "Anticoagulação", "Condição que costuma exigir anticoagulação sem anticoagulante registrado: conferir CHA₂DS₂-VA/indicação.", "anticoagulacao-oral");
  const pesoAtual = num((ultimaConsulta(p, "peso") || {}).peso), altura = num(p.dados.altura);
  if (pesoAtual && altura && idade !== null && idade >= 18) {
    const imc = pesoAtual / Math.pow(altura / 100, 2);
    if (imc >= 30) add("info", `IMC ${fmt(imc, 1)} kg/m²`, "Obesidade: plano de perda de 5–10% do peso; avaliar farmacoterapia.", "obesidade");
  }
  if (p.dados.gestante) {
    let ig = "";
    if (p.dados.dum) { const d = diasDesde(p.dados.dum); ig = ` IG estimada ${Math.floor(d / 7)} sem ${d % 7} d.`; }
    add("info", "Gestante", `Seguir o pré-natal e revisar medicações e vacinas.${ig}`, "prenatal-baixo-risco");
  }

  /* Rastreios por idade e sexo (conferir faixas na ficha) */
  if (idade !== null) {
    const sem = (kx, dias) => { const e = ultimoExame(p, kx); return !e || diasDesde(e.data) > dias; };
    if (p.dados.sexo === "F" && idade >= 25 && idade <= 64 && sem("colo", 3 * 365)) add("info", "Rastreio do câncer de colo", "Sem registro recente de DNA-HPV/citopatológico.", "rastreio-cancer");
    if (p.dados.sexo === "F" && idade >= 50 && idade <= 74 && sem("mamografia", 2 * 365)) add("info", "Rastreio do câncer de mama", "Sem mamografia nos últimos 2 anos.", "rastreio-cancer");
    if (idade >= 50 && idade <= 75 && sem("colorretal", 365)) add("info", "Rastreio colorretal", "Sem registro de sangue oculto (anual) ou colonoscopia.", "rastreio-cancer");
  }
  const ordem = { grave: 0, moderada: 1, info: 2, ok: 3 };
  return out.sort((a, b) => ordem[a.g] - ordem[b.g]);
}

/* ---------- integração com o atendimento ---------- */
function usarNoAtendimento(p) {
  const idade = idadePac(p);
  const meses = p.dados.nascimento ? Math.floor((Date.now() - new Date(p.dados.nascimento + "T12:00:00")) / (30.44 * 864e5)) : null;
  atualizarPaciente({
    peso: (ultimaConsulta(p, "peso") || {}).peso || "",
    idade: idade === null ? "" : String(idade < 2 ? meses : idade),
    idadeUnidade: idade !== null && idade < 2 ? "meses" : "anos",
    sexo: p.dados.sexo || "", altura: p.dados.altura || "",
    creatinina: (ultimoExame(p, "creatinina") || {}).valor || "",
    gestante: !!p.dados.gestante, alergias: [...p.alergias.classes],
    medicacoes: medsAtivas(p).map(m => m.medId).filter(Boolean),
    vinculo: p.dados.nome
  });
}

function resumoTexto(p) {
  const l = [];
  l.push(`PACIENTE: ${p.dados.nome}${idadeTexto(p) ? `, ${idadeTexto(p)}` : ""}${p.dados.sexo ? `, ${p.dados.sexo === "F" ? "feminino" : "masculino"}` : ""}${p.dados.gestante ? ", gestante" : ""}`);
  if (p.patologias.length) l.push(`Problemas/patologias: ${p.patologias.map(x => x.nome + (x.desde ? ` (desde ${x.desde})` : "")).join("; ")}`);
  const al = [...p.alergias.classes.map(nomeAlergia), p.alergias.outras].filter(Boolean);
  l.push(`Alergias: ${al.length ? al.join(", ") : "nega"}`);
  if (medsAtivas(p).length) l.push(`Medicações em uso: ${medsAtivas(p).map(m => m.nome + (m.posologia ? ` ${m.posologia}` : "")).join("; ")}`);
  const chaves = [...new Set(p.exames.map(e => exameKey(e.nome) || e.nome))];
  if (chaves.length) l.push(`Últimos exames: ${chaves.map(kx => { const e = EXAMES_CAT.some(c => c[0] === kx) ? ultimoExame(p, kx) : p.exames.filter(x => x.nome === kx).sort(ordData)[0]; return `${e.nome} ${e.valor || ""}${e.unidade ? " " + e.unidade : ""} (${dataBR(e.data)})`; }).join("; ")}`);
  const c = [...p.consultas].sort(ordData)[0];
  if (c) l.push(`Última consulta (${dataBR(c.data)}): ${[c.pa && `PA ${c.pa}`, c.peso && `peso ${c.peso} kg`, c.fc && `FC ${c.fc}`].filter(Boolean).join(", ")}${c.texto ? ` — ${c.texto}` : ""}`);
  const ind = indicacoes(p).filter(x => x.g !== "ok");
  if (ind.length) l.push(`Pendências/alertas: ${ind.map(x => x.titulo).join("; ")}`);
  return l.join("\n");
}

/* ---------- telas ---------- */
function alertaPac(msg) {
  const el = document.getElementById("pac-msg");
  if (el) { el.textContent = msg; el.hidden = false; clearTimeout(el._t); el._t = setTimeout(() => el.hidden = true, 4000); }
}

function telaBloqueio() {
  const existe = !!pacoteSalvo();
  $app.innerHTML = `<div class="view">
    <div class="f-head"><h2>Pacientes</h2><p>Prontuário de acompanhamento longitudinal, guardado só neste aparelho e criptografado com a sua senha.</p></div>
    <form class="painel cofre" id="cofre" autocomplete="off">
      ${ic("escudo", "ic cofre-ic")}
      <h3>${existe ? "Desbloquear pacientes" : "Criar senha dos pacientes"}</h3>
      ${existe ? "" : `<p class="note">A senha protege os dados neste navegador. <b>Se esquecê-la, os dados não podem ser recuperados</b> (guarde backups). Use pelo menos 8 caracteres.</p>`}
      <label class="campo" for="cofre-senha"><span>Senha</span><input id="cofre-senha" type="password" autocomplete="${existe ? "current-password" : "new-password"}" required minlength="${existe ? 1 : 8}"></label>
      ${existe ? "" : `<label class="campo" for="cofre-senha2"><span>Repita a senha</span><input id="cofre-senha2" type="password" autocomplete="new-password" required></label>`}
      <p class="aviso" id="pac-msg" hidden></p>
      <button class="open-full" type="submit">${existe ? "Desbloquear" : "Criar e abrir"}</button>
      <div class="cofre-acoes">
        <label class="link-btn importar-btn">Importar backup<input type="file" id="importar-arq" accept=".json,application/json" hidden></label>
        ${existe ? `<button type="button" class="link-btn perigo" id="apagar-tudo">Esqueci a senha (apagar dados)</button>` : ""}
      </div>
    </form>
  </div>`;
  document.getElementById("cofre-senha").focus();
  document.getElementById("cofre").onsubmit = async e => {
    e.preventDefault();
    const s = document.getElementById("cofre-senha").value;
    try {
      if (existe) {
        const r = await decifrar(pacoteSalvo(), s);
        DB = r.dados; CHAVE = r.chave; SAL = r.sal;
      } else {
        if (s.length < 8) return alertaPac("Use pelo menos 8 caracteres.");
        if (s !== document.getElementById("cofre-senha2").value) return alertaPac("As senhas não conferem.");
        SAL = crypto.getRandomValues(new Uint8Array(16));
        CHAVE = await derivarChave(s, SAL);
        DB = { v: 1, pacientes: [] };
        await salvarDB();
      }
      ultimaAtividade = Date.now();
      rota();
    } catch (err) { alertaPac(existe ? "Senha incorreta." : "Não foi possível criar o cofre neste navegador."); }
  };
  document.getElementById("importar-arq").onchange = e => importarBackup(e.target.files[0]);
  const ap = document.getElementById("apagar-tudo");
  if (ap) ap.onclick = () => {
    if (ap.dataset.confirma) { localStorage.removeItem(CHAVE_DB); telaBloqueio(); return; }
    ap.dataset.confirma = "1"; ap.textContent = "Toque de novo para APAGAR todos os pacientes deste aparelho";
  };
}

async function importarBackup(arquivo) {
  if (!arquivo) return;
  try {
    const pacote = JSON.parse(await arquivo.text());
    if (!pacote.ct || !pacote.sal) throw new Error("formato");
    $app.querySelector("#cofre h3").textContent = "Senha do backup";
    const form = document.getElementById("cofre");
    const campo2 = document.getElementById("cofre-senha2"); if (campo2) campo2.closest("label").remove();
    alertaPac("Digite a senha usada quando o backup foi criado. Ele substituirá os pacientes deste aparelho.");
    form.onsubmit = async e => {
      e.preventDefault();
      try {
        const r = await decifrar(pacote, document.getElementById("cofre-senha").value);
        DB = r.dados; CHAVE = r.chave; SAL = r.sal;
        await salvarDB(); rota();
      } catch (err) { alertaPac("Senha incorreta para este backup."); }
    };
  } catch (e) { alertaPac("Arquivo de backup inválido."); }
}

async function exportarBackup() {
  const pacote = await cifrar(DB);
  const blob = new Blob([JSON.stringify(pacote)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `pacientes-backup-${hojeIso()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function telaPacientes() {
  if (!desbloqueado()) return telaBloqueio();
  const ordenados = [...DB.pacientes].sort((a, b) => b.atualizado - a.atualizado);
  $app.innerHTML = `<div class="view">
    <div class="f-head f-titulo"><div><h2>Pacientes</h2><p>${DB.pacientes.length} paciente${DB.pacientes.length === 1 ? "" : "s"} em acompanhamento · criptografado neste aparelho</p></div>
      <div class="acoes-topo"><button class="seg" id="exportar">Exportar backup</button><button class="seg" id="bloquear">${ic("escudo")} Bloquear</button></div></div>
    <form class="novo-pac" id="novo-pac" autocomplete="off">
      <label class="campo" for="novo-nome"><span>Novo paciente</span><input id="novo-nome" placeholder="Nome completo" required></label>
      <button class="open-full" type="submit">Adicionar</button>
    </form>
    <label class="campo gap-top" for="filtro-pac"><span>Buscar</span><input id="filtro-pac" type="search" placeholder="Nome, patologia ou medicação"></label>
    <div class="list gap-top" id="lista-pac">${ordenados.map(p => {
      const ind = indicacoes(p), graves = ind.filter(x => x.g === "grave").length, mods = ind.filter(x => x.g === "moderada").length;
      return `<a class="item pac-item" href="#pac-${p.id}" data-busca="${esc(normTxt([p.dados.nome, ...p.patologias.map(x => x.nome), ...p.medicacoes.map(x => x.nome)].join(" ")))}">
        <i class="esp-label">${[idadeTexto(p), p.dados.sexo === "F" ? "Feminino" : p.dados.sexo === "M" ? "Masculino" : "", p.dados.gestante ? "Gestante" : ""].filter(Boolean).join(" · ") || "Dados incompletos"}</i>
        <b>${esc(p.dados.nome)}</b>
        <span>${esc(p.patologias.map(x => x.nome).join(" · ") || "Sem patologias registradas")}</span>
        <span class="pac-badges">${graves ? `<em class="crit">${graves} alerta${graves > 1 ? "s" : ""} grave${graves > 1 ? "s" : ""}</em>` : ""}${mods ? `<em class="pend">${mods} pendência${mods > 1 ? "s" : ""}</em>` : ""}<small>Atualizado ${quando(p.atualizado)}</small></span>
      </a>`; }).join("") || `<p class="empty">Nenhum paciente ainda. Adicione o primeiro acima.</p>`}</div>
    <p class="aviso" id="pac-msg" hidden></p>
    <p class="disclaimer">Os dados ficam apenas neste navegador, criptografados. Para usar em outro aparelho ou guardar cópia, exporte o backup (arquivo criptografado com a mesma senha). Trate os dados conforme a LGPD e o sigilo médico.</p>
  </div>`;
  document.getElementById("novo-pac").onsubmit = async e => {
    e.preventDefault();
    const p = novoPaciente(document.getElementById("novo-nome").value.trim());
    DB.pacientes.push(p); await salvarDB(); ir(`pac-${p.id}`);
  };
  document.getElementById("filtro-pac").oninput = e => {
    const q = normTxt(e.target.value);
    $app.querySelectorAll(".pac-item").forEach(a => a.hidden = q && !a.dataset.busca.includes(q));
  };
  document.getElementById("exportar").onclick = exportarBackup;
  document.getElementById("bloquear").onclick = bloquear;
}

/* Gráfico simples (sparkline) para exames numéricos. */
function sparkline(pontos) {
  if (pontos.length < 2) return "";
  const vs = pontos.map(x => x.v), min = Math.min(...vs), max = Math.max(...vs), W = 140, H = 36, pad = 4;
  const xy = pontos.map((x, i) => [pad + i * (W - 2 * pad) / (pontos.length - 1), H - pad - (max === min ? (H - 2 * pad) / 2 : (x.v - min) / (max - min) * (H - 2 * pad))]);
  return `<svg class="spark" viewBox="0 0 ${W} ${H}" role="img" aria-label="Tendência"><polyline points="${xy.map(p => p.join(",")).join(" ")}" fill="none" stroke="currentColor" stroke-width="2"/>${xy.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${i === xy.length - 1 ? 3.5 : 2}" fill="currentColor"/>`).join("")}</svg>`;
}

const NIVEL_IND = { grave: "alto", moderada: "medio", info: "info", ok: "baixo" };

function telaPaciente(id) {
  if (!desbloqueado()) return telaBloqueio();
  const p = pacPorId(id);
  if (!p) { ir("pacientes"); return; }
  const d = p.dados, ind = indicacoes(p);
  const rf = funcaoRenalPac(p);
  const fichasRel = [...new Set(p.patologias.map(x => x.fichaId).filter(Boolean))].map(fichaPorId).filter(Boolean);
  const chavesNum = [...new Set(p.exames.map(e => exameKey(e.nome)).filter(Boolean))];
  const tendencias = chavesNum.map(k => ({ k, pts: examesPorChave(p, k).filter(e => num(e.valor) !== null).reverse().map(e => ({ v: num(e.valor), d: e.data })) })).filter(t => t.pts.length);
  const listaMeds = [...MEDICAMENTOS.flatMap(m => m.nomes.slice(0, 3))].sort((a, b) => a.localeCompare(b, "pt-BR"));

  $app.innerHTML = `<div class="view prontuario">
    <button class="back" id="voltar">← Pacientes</button>
    <div class="f-head">
      <div class="chips">${[idadeTexto(p), d.sexo === "F" ? "Feminino" : d.sexo === "M" ? "Masculino" : "", d.gestante ? "Gestante" : "", rf && rf.tfg ? `TFG ${fmt(rf.tfg, 0)}` : ""].filter(Boolean).map(x => `<span class="chip">${esc(x)}</span>`).join("")}</div>
      <div class="f-titulo"><h2>${esc(d.nome)}</h2>
        <div class="acoes-topo">
          <button class="seg ativo-btn" id="usar">${ic("calculadora")} Usar no atendimento</button>
          <button class="seg" id="copiar-resumo">Copiar resumo</button>
        </div></div>
      <p class="aviso" id="pac-msg" hidden></p>
    </div>

    <div class="pront-grid">
      <div class="pront-col">
        <section class="painel">
          <h3>Indicações e alertas</h3>
          ${ind.length ? `<ul class="ind-lista">${ind.map(x => `<li class="res ${NIVEL_IND[x.g]}"><b>${esc(x.titulo)}</b><span>${esc(x.texto)}</span>${x.fichaId && fichaPorId(x.fichaId) ? `<a href="#${x.fichaId}">Abrir ficha →</a>` : ""}</li>`).join("")}</ul>`
            : `<p class="note">Registre patologias, medicações, exames e consultas para gerar indicações.</p>`}
          <p class="note">Sugestões automáticas a partir dos dados registrados e das fichas. Não substituem o julgamento clínico.</p>
        </section>

        <section class="painel">
          <h3>Patologias e problemas</h3>
          <ul class="reg">${p.patologias.map(x => `<li><span><b>${esc(x.nome)}</b>${x.desde ? ` <small>desde ${esc(x.desde)}</small>` : ""}${x.obs ? `<small>${esc(x.obs)}</small>` : ""}</span>
            ${x.fichaId && fichaPorId(x.fichaId) ? `<a class="link-btn" href="#${x.fichaId}">Ficha</a>` : ""}<button class="rm" data-rm="patologias:${x.id}" aria-label="Remover">×</button></li>`).join("") || `<li class="note">Nenhuma registrada.</li>`}</ul>
          <form class="add-form" data-add="patologias" autocomplete="off">
            <input name="nome" list="lista-fichas" placeholder="Patologia (escolha uma ficha ou digite)" required>
            <input name="desde" placeholder="Desde (ano)" inputmode="numeric">
            <input name="obs" placeholder="Observação">
            <button class="seg" type="submit">Adicionar</button>
          </form>
        </section>

        <section class="painel">
          <h3>Medicações em uso</h3>
          <ul class="reg">${p.medicacoes.map(x => `<li class="${x.ativo === false ? "suspensa" : ""}"><span><b>${esc(x.nome)}</b> ${x.posologia ? `<small>${esc(x.posologia)}</small>` : ""}${x.inicio ? `<small>início ${dataBR(x.inicio)}</small>` : ""}${!x.medId ? `<small class="fora">fora da base de segurança</small>` : ""}</span>
            <button class="link-btn" data-toggle="${x.id}">${x.ativo === false ? "Reativar" : "Suspender"}</button><button class="rm" data-rm="medicacoes:${x.id}" aria-label="Remover">×</button></li>`).join("") || `<li class="note">Nenhuma registrada.</li>`}</ul>
          <form class="add-form" data-add="medicacoes" autocomplete="off">
            <input name="nome" list="lista-meds" placeholder="Medicamento" required>
            <input name="posologia" placeholder="Dose e posologia (ex.: 50 mg 1×/dia)">
            <input name="inicio" type="date" aria-label="Início">
            <button class="seg" type="submit">Adicionar</button>
          </form>
        </section>

        <section class="painel">
          <h3>Alergias</h3>
          <div class="pac-alergias">${ALERGIAS.map(([k, n]) => `<label class="tog"><input type="checkbox" data-alergia-pac="${k}" ${p.alergias.classes.includes(k) ? "checked" : ""}><span>${n}</span></label>`).join("")}</div>
          <label class="campo"><span>Outras alergias / reações</span><input id="alergias-outras" value="${esc(p.alergias.outras)}" placeholder="Ex.: látex, contraste iodado"></label>
        </section>
      </div>

      <div class="pront-col">
        <section class="painel">
          <h3>Dados do paciente</h3>
          <form class="form-doc" id="dados-pac" autocomplete="off">
            <label class="campo largo"><span>Nome</span><input data-d="nome" value="${esc(d.nome)}"></label>
            <label class="campo"><span>Nascimento</span><input type="date" data-d="nascimento" value="${esc(d.nascimento)}"></label>
            <label class="campo"><span>Sexo</span><select data-d="sexo"><option value="">—</option><option value="F" ${d.sexo === "F" ? "selected" : ""}>Feminino</option><option value="M" ${d.sexo === "M" ? "selected" : ""}>Masculino</option></select></label>
            <label class="campo"><span>Altura (cm)</span><input data-d="altura" inputmode="decimal" value="${esc(d.altura)}"></label>
            <label class="campo"><span>CNS / CPF (opcional)</span><input data-d="documento" value="${esc(d.documento)}"></label>
            <label class="campo"><span>Telefone (opcional)</span><input data-d="telefone" value="${esc(d.telefone)}"></label>
            <label class="chk"><input type="checkbox" data-d="gestante" ${d.gestante ? "checked" : ""}> Gestante</label>
            ${d.gestante ? `<label class="campo"><span>DUM</span><input type="date" data-d="dum" value="${esc(d.dum)}"></label>` : ""}
            <label class="campo largo"><span>Observações</span><textarea data-d="obs" rows="2">${esc(d.obs)}</textarea></label>
          </form>
        </section>

        <section class="painel">
          <h3>Consultas e evolução</h3>
          <form class="add-form consulta-form" data-add="consultas" autocomplete="off">
            <input name="data" type="date" value="${hojeIso()}" aria-label="Data" required>
            <input name="pa" placeholder="PA (ex.: 128x82)">
            <input name="peso" placeholder="Peso (kg)" inputmode="decimal">
            <input name="fc" placeholder="FC" inputmode="numeric">
            <textarea name="texto" rows="2" placeholder="Evolução / conduta"></textarea>
            <button class="seg" type="submit">Registrar consulta</button>
          </form>
          <ul class="reg consultas">${[...p.consultas].sort(ordData).map(c => `<li><span><b>${dataBR(c.data)}</b> <small>${[c.pa && `PA ${esc(c.pa)}`, c.peso && `${esc(c.peso)} kg`, c.fc && `FC ${esc(c.fc)}`].filter(Boolean).join(" · ")}</small>${c.texto ? `<small class="evo">${esc(c.texto)}</small>` : ""}</span><button class="rm" data-rm="consultas:${c.id}" aria-label="Remover">×</button></li>`).join("") || `<li class="note">Nenhuma consulta registrada.</li>`}</ul>
        </section>

        <section class="painel">
          <h3>Exames</h3>
          ${tendencias.length ? `<div class="tendencias">${tendencias.map(t => { const u = t.pts[t.pts.length - 1]; return `<div class="tend"><span>${esc(exameNome(t.k))}</span><b>${fmt(u.v, 2)}</b><small>${dataBR(u.d)}</small>${sparkline(t.pts)}</div>`; }).join("")}</div>` : ""}
          <form class="add-form" data-add="exames" autocomplete="off">
            <input name="data" type="date" value="${hojeIso()}" aria-label="Data" required>
            <input name="nome" list="lista-exames" placeholder="Exame" required>
            <input name="valor" placeholder="Resultado">
            <input name="unidade" placeholder="Unidade">
            <button class="seg" type="submit">Adicionar</button>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Data</th><th>Exame</th><th>Resultado</th><th></th></tr></thead><tbody>
            ${[...p.exames].sort(ordData).map(e => `<tr><td>${dataBR(e.data)}</td><td>${esc(e.nome)}</td><td>${esc(e.valor)} ${esc(e.unidade || "")}</td><td><button class="rm" data-rm="exames:${e.id}" aria-label="Remover">×</button></td></tr>`).join("") || `<tr><td colspan="4" class="note">Nenhum exame registrado.</td></tr>`}
          </tbody></table></div>
        </section>

        ${fichasRel.length ? `<section class="painel"><h3>Fichas relacionadas</h3><div class="cen-chips">${fichasRel.map(f => `<a class="cchip" href="#${f.id}">${esc(f.titulo)}</a>`).join("")}</div></section>` : ""}
        <button class="link-btn perigo" id="excluir-pac">Excluir paciente</button>
      </div>
    </div>
    <datalist id="lista-fichas">${FICHAS.map(f => `<option value="${esc(f.titulo)}">`).join("")}</datalist>
    <datalist id="lista-meds">${listaMeds.map(n => `<option value="${esc(n)}">`).join("")}</datalist>
    <datalist id="lista-exames">${EXAMES_CAT.map(e => `<option value="${esc(e[1])}">`).join("")}</datalist>
  </div>`;

  const tocar = async (redesenhar = true) => { p.atualizado = Date.now(); await salvarDB(); if (redesenhar) { const y = scrollY; telaPaciente(id); scrollTo(0, y); } };
  document.getElementById("voltar").onclick = () => ir("pacientes");
  document.getElementById("usar").onclick = () => { usarNoAtendimento(p); alertaPac(`${d.nome} está no atendimento: doses, função renal e alertas das fichas agora usam estes dados.`); };
  document.getElementById("copiar-resumo").onclick = e => {
    const t = resumoTexto(p);
    navigator.clipboard.writeText(t).then(() => { e.target.textContent = "Copiado"; setTimeout(() => e.target.textContent = "Copiar resumo", 1500); }).catch(() => alertaPac("Não foi possível copiar."));
  };
  /* dados: salvam ao digitar; redesenha ao sair do campo para atualizar indicações */
  const form = document.getElementById("dados-pac");
  form.addEventListener("input", e => {
    const k = e.target.dataset.d; if (!k) return;
    d[k] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    tocar(false);
  });
  form.addEventListener("change", e => { if (["nascimento", "sexo", "gestante", "altura", "dum"].includes(e.target.dataset.d)) tocar(true); });
  $app.querySelectorAll("[data-alergia-pac]").forEach(cb => cb.onchange = () => {
    const k = cb.dataset.alergiaPac;
    p.alergias.classes = cb.checked ? [...new Set([...p.alergias.classes, k])] : p.alergias.classes.filter(x => x !== k);
    tocar(true);
  });
  document.getElementById("alergias-outras").onchange = e => { p.alergias.outras = e.target.value; tocar(false); };
  $app.querySelectorAll("[data-add]").forEach(f => f.onsubmit = e => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(f).entries());
    const lista = f.dataset.add;
    const item = { id: novoId(), ...v };
    if (lista === "patologias") item.fichaId = fichaIdPorNome(v.nome);
    if (lista === "medicacoes") { item.medId = medIdPorNome(v.nome); item.ativo = true; }
    if (lista === "exames" && !v.unidade) { const k = exameKey(v.nome); const c = EXAMES_CAT.find(x => x[0] === k); if (c) item.unidade = c[2]; }
    p[lista].push(item);
    tocar(true);
  });
  $app.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => {
    const [lista, iid] = b.dataset.rm.split(":");
    p[lista] = p[lista].filter(x => x.id !== iid);
    tocar(true);
  });
  $app.querySelectorAll("[data-toggle]").forEach(b => b.onclick = () => {
    const m = p.medicacoes.find(x => x.id === b.dataset.toggle);
    m.ativo = m.ativo === false; tocar(true);
  });
  const ex = document.getElementById("excluir-pac");
  ex.onclick = async () => {
    if (!ex.dataset.confirma) { ex.dataset.confirma = "1"; ex.textContent = `Toque de novo para excluir ${d.nome} definitivamente`; return; }
    DB.pacientes = DB.pacientes.filter(x => x.id !== id); await salvarDB(); ir("pacientes");
  };
}
