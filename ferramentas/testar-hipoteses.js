// Testa o motor de hipóteses diagnósticas com casos clínicos típicos.
// Uso: node ferramentas/testar-hipoteses.js [-v]
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = {};
global.FICHAS = [];
const reg = require(path.join(raiz, "js/registro.js"));
global.ESPECIALIDADES = reg.ESPECIALIDADES;
global.registrarFicha = f => { f.formato = f.formato || "completo"; FICHAS.push(f); };
for (const p of fs.readdirSync(path.join(raiz, "fichas"), { withFileTypes: true }).filter(d => d.isDirectory()))
  for (const a of fs.readdirSync(path.join(raiz, "fichas", p.name)).filter(a => a.endsWith(".js"))) require(path.join(raiz, "fichas", p.name, a));
Object.assign(global, require(path.join(raiz, "js/vagazero/calc.js")));
const { hpAnalisar } = require(path.join(raiz, "js/hipoteses.js"));
const verboso = process.argv.includes("-v");

/* [descrição, entrada, ids que devem estar entre as 5 primeiras OU nos "não deixe passar", ids proibidos no top 5] */
const CASOS = [
  ["SCA", { texto: "Homem 58 anos, dor no peito em aperto há 2 horas irradiando para braço esquerdo, sudorese, náuseas. Hipertenso e diabético." }, { top: ["sca"], verm: ["sca", "sindrome-aortica-aguda"] }, ["gravidez-ectopica"]],
  ["Ectópica", { texto: "Mulher 26 anos, dor abdominal em baixo ventre há 6 h, atraso menstrual de 7 semanas, sangramento vaginal discreto. Nega febre." }, { top: ["gravidez-ectopica"], verm: ["gravidez-ectopica"] }, ["prostatite"]],
  ["Pneumonia criança", { texto: "Criança 4 anos, febre há 3 dias, tosse, falta de ar, tiragem subcostal. Nega vômitos.", sv: { fr: "48", spo2: "90", temp: "39" } }, { top: ["pneumonia-crianca"] }, ["dpoc"]],
  ["ITU idoso / sepse", { texto: "Idoso 79 anos, confuso desde ontem, febre, ardência ao urinar. Nega dor torácica.", sv: { fc: "118", pas: "92", pad: "58", temp: "38.6" } }, { verm: ["sepse"], top: ["pielonefrite", "cistite", "delirium", "sepse"] }, []],
  ["Meningite", { texto: "Paciente 19 anos, febre alta, dor de cabeça intensa, vômitos e rigidez de nuca, manchas vermelhas no corpo." }, { verm: ["meningite"], top: ["meningite"] }, []],
  ["AVC", { texto: "Mulher 70 anos, boca torta e fraqueza de um lado do corpo há 1 hora, fala enrolada." }, { verm: ["avc"], top: ["avc"] }, []],
  ["HSA", { texto: "Homem 45 anos, pior dor de cabeça da vida, súbita, com vômitos." }, { verm: ["hemorragia-subaracnoidea"] }, []],
  ["Asma", { texto: "Asmática, 22 anos, falta de ar e chiado no peito desde a noite, tosse seca.", sv: { spo2: "91", fr: "28" } }, { top: ["asma-ps", "asma-ubs", "asma-manutencao"] }, []],
  ["Dengue", { texto: "Febre há 3 dias, dor atrás dos olhos, dor no corpo, manchas vermelhas na pele, adulto 30 anos." }, { verm: ["dengue"], top: ["dengue", "chikungunya-zika"] }, []],
  ["CAD", { texto: "Jovem 17 anos, diabético tipo 1, vômitos, dor abdominal e respiração rápida.", sv: { glicemia: "480", fr: "30" } }, { verm: ["cetoacidose", "cad-pediatrica"] }, []],
  ["Apendicite", { texto: "Homem 22 anos, dor periumbilical que migrou para fossa ilíaca direita, febre baixa, vômitos, Blumberg positivo." }, { top: ["apendicite"] }, ["gravidez-ectopica", "torcao-anexial"]],
  ["Negação", { texto: "Adulto 40 anos, tosse há 5 dias com coriza; nega febre, nega falta de ar." }, { top: ["sindrome-gripal", "ivas-sinusite", "tosse-persistente"] }, []],
  ["HDA", { texto: "Cirrótico 60 anos, vômito com sangue e fezes pretas.", sv: { pas: "88", fc: "120" } }, { verm: ["hemorragia-digestiva-alta"], top: ["hemorragia-digestiva-alta"] }, []],
  ["Anafilaxia", { texto: "Após comer camarão, placas vermelhas que coçam, inchaço nos lábios e falta de ar, chiado.", sv: { pas: "85" } }, { verm: ["anafilaxia"], top: ["anafilaxia"] }, []],
  ["Pré-eclâmpsia", { texto: "Gestante 34 semanas, dor de cabeça e visão turva.", sexo: "F", gestante: "sim", sv: { pas: "168", pad: "112" } }, { verm: ["hipertensao-gestacao"], top: ["hipertensao-gestacao"] }, []],
  ["Lactente febril", { texto: "Lactente 6 semanas, febre e irritabilidade, mamando pouco.", idade: "", idadeUnidade: "anos" }, { verm: ["febre-lactente"] }, []],
  ["Torção testicular", { texto: "Adolescente 14 anos, dor testicular súbita com vômitos." }, { verm: ["escroto-agudo"], top: ["escroto-agudo"] }, ["torcao-anexial"]],
  ["TVP", { texto: "Mulher 55 anos, perna inchada há 3 dias, dor na panturrilha, após cirurgia." }, { top: ["tvp"] }, []]
];

let falhas = 0;
for (const [nome, e, esp, proibidos] of CASOS) {
  const r = hpAnalisar({ idade: "", idadeUnidade: "anos", sexo: "", gestante: "", sv: {}, ...e, texto: e.texto });
  // Completa idade/sexo pelo texto (como a tela faz)
  const top = r.hipoteses.slice(0, 5).map(h => h.f.id);
  const verm = r.vermelhas.flatMap(v => v.fichas.map(f => f.id));
  const okTop = !esp.top || esp.top.some(id => top.includes(id));
  const okVerm = !esp.verm || esp.verm.some(id => verm.includes(id));
  const okProib = !proibidos.some(id => top.includes(id));
  const ok = okTop && okVerm && okProib;
  if (!ok) falhas++;
  console.log(`${ok ? "✓" : "✗"} ${nome}${ok && !verboso ? "" : `\n   top5: ${top.join(", ")}\n   não deixe passar: ${verm.join(", ") || "—"}\n   achados: ${r.achados.join(", ")} | negados: ${r.negados.join(", ")}`}`);
}
console.log(`\n${CASOS.length - falhas}/${CASOS.length} casos`);
process.exit(falhas ? 1 : 0);
