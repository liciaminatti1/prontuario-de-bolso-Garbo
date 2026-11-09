// Confere o conteúdo do módulo Vaga Zero e roda os testes dos cálculos e do motor.
// Uso: node ferramentas/validar-vagazero.js            (conteúdo + testes)
//      node ferramentas/validar-vagazero.js --conteudo (só o conteúdo)
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
const pasta = path.join(raiz, "js/vagazero");
global.window = {};
const base = require(path.join(pasta, "base.js"));
for (const k of ["VZ_COMPLICACOES", "VZ_FARMACOS", "VZ_GRUPOS", "VZ_GATILHOS", "VZ_DX_TERMOS", "VZ_FARMACO_IDS",
  "VZ_CATEGORIAS", "VZ_UNIDADES_BOLUS", "VZ_UNIDADES_INFUSAO", "VZ_UNIDADES_CONC"]) global[k] = base[k];
global.VZ_GUIAS = {};

let erros = 0;
const erro = t => { console.log("✗ " + t); erros++; };
const index = fs.readFileSync(path.join(raiz, "index.html"), "utf8");
const conteudo = fs.readdirSync(pasta).filter(a => /^conteudo-.*\.js$/.test(a)).sort();
for (const a of conteudo) {
  try { require(path.join(pasta, a)); } catch (e) { erro(`js/vagazero/${a}: ${e.message}`); }
}
for (const a of fs.readdirSync(pasta).filter(a => a.endsWith(".js")))
  if (!index.includes(`src="js/vagazero/${a}`)) erro(`js/vagazero/${a} não está no index.html`);

const lista = v => Array.isArray(v) && v.every(x => typeof x === "string");
const naoVazia = v => lista(v) && v.length > 0;
const unidadesDose = [...VZ_UNIDADES_BOLUS, ...VZ_UNIDADES_INFUSAO];
const PUBLICOS = ["adulto", "pediatrico", "neonato"];

/* ---------- fármacos ---------- */
const idsF = new Set();
for (const f of VZ_FARMACOS) {
  const p = [];
  if (idsF.has(f.id)) p.push("id repetido"); idsF.add(f.id);
  if (!VZ_FARMACO_IDS.includes(f.id)) p.push("id fora da lista VZ_FARMACO_IDS");
  if (!f.nome) p.push("falta nome");
  if (!naoVazia(f.categorias) || f.categorias.some(c => !VZ_CATEGORIAS[c])) p.push("categorias inválidas");
  if (typeof f.altoRisco !== "boolean") p.push("altoRisco deve ser true/false");
  if (!Array.isArray(f.apresentacoes) || !f.apresentacoes.length) p.push("falta apresentacoes");
  (f.apresentacoes || []).forEach((a, i) => {
    if (!a.rotulo || !(a.conc > 0) || !VZ_UNIDADES_CONC.includes(a.unidade)) p.push(`apresentacoes[${i}] precisa de rotulo, conc > 0 e unidade válida`);
  });
  if (!Array.isArray(f.indicacoes) || !f.indicacoes.length) p.push("falta indicacoes");
  const idsI = new Set();
  (f.indicacoes || []).forEach((ind, i) => {
    const q = `indicacoes[${i}]`;
    if (!ind.id || idsI.has(ind.id)) p.push(`${q}: id ausente ou repetido`); idsI.add(ind.id);
    if (!ind.rotulo) p.push(`${q}: falta rotulo`);
    if (!["adulto", "pediatrico", "neonatal", "todas"].includes(ind.faixa)) p.push(`${q}: faixa inválida`);
    if (!["bolus", "infusao"].includes(ind.modo)) p.push(`${q}: modo inválido`);
    const d = ind.dose || {};
    if (!(d.min >= 0) || !(d.max >= d.min) || !unidadesDose.includes(d.unidade)) p.push(`${q}: dose { min, max, unidade } inválida`);
    if (ind.modo === "bolus" && d.unidade && !VZ_UNIDADES_BOLUS.includes(d.unidade)) p.push(`${q}: unidade de bolus inválida (${d.unidade})`);
    if (ind.modo === "infusao" && d.unidade && !VZ_UNIDADES_INFUSAO.includes(d.unidade)) p.push(`${q}: unidade de infusão inválida (${d.unidade})`);
    if (ind.faixa !== "adulto" && d.unidade && /^(mg|mcg|g|UI|mEq|mL)$/.test(d.unidade) && ind.faixa !== "todas") p.push(`${q}: dose pediátrica/neonatal deve ser por kg`);
    if (ind.doseMax && !(ind.doseMax.valor > 0 && unidadesDose.includes(ind.doseMax.unidade))) p.push(`${q}: doseMax inválida`);
    if (ind.diluicaoPadrao && !(ind.diluicaoPadrao.quantidade > 0 && ind.diluicaoPadrao.volumeFinal > 0 && ind.diluicaoPadrao.unidade)) p.push(`${q}: diluicaoPadrao inválida`);
    for (const c of ["via", "velocidade", "repeticao"]) if (!ind[c]) p.push(`${q}: falta ${c}`);
  });
  for (const c of ["contraindicacoes", "cuidados", "adversos", "monitorizacao"]) if (!lista(f[c])) p.push(`${c} deve ser lista`);
  if (!naoVazia(f.fontes)) p.push("falta fontes");
  if (p.length) erro(`fármaco ${f.id}: ${p.join("; ")}`);
}

/* ---------- complicações ---------- */
const idsC = new Set();
for (const c of VZ_COMPLICACOES) {
  const p = [];
  if (!/^[a-z0-9-]+$/.test(c.id || "") || idsC.has(c.id)) p.push("id inválido ou repetido"); idsC.add(c.id);
  if (!c.titulo) p.push("falta titulo");
  if (!VZ_GRUPOS[c.grupo]) p.push("grupo inválido");
  if (!naoVazia(c.publico) || c.publico.some(x => !PUBLICOS.includes(x))) p.push("publico deve ser lista de adulto/pediatrico/neonato");
  if (!c.gatilhos || !Object.keys(c.gatilhos).length) p.push("falta gatilhos");
  for (const [g, w] of Object.entries(c.gatilhos || {})) {
    if (!VZ_GATILHOS.includes(g)) p.push(`gatilho desconhecido: ${g}`);
    if (![1, 2, 3].includes(w)) p.push(`peso do gatilho ${g} deve ser 1, 2 ou 3`);
  }
  if (!c.porQue) p.push("falta porQue");
  for (const k of ["sinaisAlerta", "monitorar", "reconhecer", "conduta", "parar", "fontes"]) if (!naoVazia(c[k])) p.push(`falta ${k}`);
  for (const k of ["alternativas", "procedimentos"]) if (!lista(c[k])) p.push(`${k} deve ser lista`);
  if (!Array.isArray(c.medicamentos)) p.push("medicamentos deve ser lista");
  (c.medicamentos || []).forEach((m, i) => {
    if (m.farmaco && !VZ_FARMACO_IDS.includes(m.farmaco)) p.push(`medicamentos[${i}].farmaco "${m.farmaco}" fora da lista`);
    for (const k of ["nome", "indicacao", "via"]) if (!m[k]) p.push(`medicamentos[${i}] falta ${k}`);
    for (const k of ["adulto", "pediatrico", "diluicao", "velocidade", "repeticao"]) if (typeof m[k] !== "string") p.push(`medicamentos[${i}].${k} deve ser texto`);
  });
  if (!c.contingencia || !c.contingencia.se || !naoVazia(c.contingencia.faca)) p.push("contingencia { se, faca: [] } inválida");
  if (p.length) erro(`complicação ${c.id}: ${p.join("; ")}`);
}

/* ---------- guias ---------- */
const secoes = (v, nome) => {
  if (!Array.isArray(v)) { erro(`VZ_GUIAS.${nome} deve ser lista de seções`); return; }
  v.forEach((s, i) => {
    if (!s.titulo || (!lista(s.itens || []) ) || (!s.itens && !s.tabela)) erro(`VZ_GUIAS.${nome}[${i}]: precisa de titulo e itens ou tabela`);
    if (s.tabela && (!Array.isArray(s.tabela.colunas) || !Array.isArray(s.tabela.linhas) || s.tabela.linhas.some(l => l.length !== s.tabela.colunas.length)))
      erro(`VZ_GUIAS.${nome}[${i}].tabela: cada linha deve ter ${s.tabela.colunas && s.tabela.colunas.length} colunas`);
  });
};
const G = global.VZ_GUIAS || {};
if (Object.keys(G).length) {
  for (const k of ["adulto", "pediatrico", "neonatal"]) secoes((G.viaAerea || {})[k], `viaAerea.${k}`);
  for (const k of ["oxigenio", "ventilacao", "pediatrico", "neonatal", "gestante"]) secoes(G[k], k);
  (G.contingenciaUniversal || []).forEach((c, i) => {
    if (!c.id || !c.se || !naoVazia(c.faca)) erro(`contingenciaUniversal[${i}] precisa de id, se e faca`);
    (c.farmacos || []).forEach(f => { if (!VZ_FARMACO_IDS.includes(f)) erro(`contingenciaUniversal[${i}]: fármaco ${f} fora da lista`); });
  });
}

console.log(`Conteúdo: ${VZ_FARMACOS.length} fármacos (${VZ_FARMACO_IDS.filter(i => !idsF.has(i)).length} ids ainda sem item), ${VZ_COMPLICACOES.length} complicações, guias: ${Object.keys(G).join(", ") || "—"}`);
const faltam = VZ_FARMACO_IDS.filter(i => !idsF.has(i));
if (faltam.length) console.log(`  Fármacos sem item: ${faltam.join(", ")}`);
const refs = new Set(VZ_COMPLICACOES.flatMap(c => (c.medicamentos || []).map(m => m.farmaco).filter(Boolean)));
const semItem = [...refs].filter(r => !idsF.has(r));
if (VZ_FARMACOS.length && semItem.length) console.log(`  ! Complicações citam fármacos ainda sem item: ${semItem.join(", ")}`);

if (!process.argv.includes("--conteudo")) {
  const testes = path.join(__dirname, "testes-vagazero.js");
  if (fs.existsSync(testes)) erros += require(testes)();
}
console.log(`\n${erros} erro(s)`);
process.exit(erros ? 1 : 0);
