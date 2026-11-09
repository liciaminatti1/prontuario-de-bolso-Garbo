// Confere a base de medicamentos (js/medicamentos.js + js/medicamentos/*.js).
// Uso: node ferramentas/validar-medicamentos.js
// Verifica: ids únicos, classe e receituário válidos, modelo de prescrição, gestação,
// classes de alergia, função renal em ordem e arquivos citados no index.html.
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = {};
const base = require(path.join(raiz, "js/medicamentos.js"));
Object.assign(global, base);

const pasta = path.join(raiz, "js/medicamentos");
const extras = fs.existsSync(pasta) ? fs.readdirSync(pasta).filter(a => a.endsWith(".js")).sort() : [];
const index = fs.readFileSync(path.join(raiz, "index.html"), "utf8");
let erros = 0;
const erro = t => { console.log("✗ " + t); erros++; };

const repetidos = [];
const origAdd = base.adicionarMedicamentos;
global.adicionarMedicamentos = lista => {
  for (const m of lista) if (base.MED_POR_ID[m.id]) repetidos.push(m.id);
  origAdd(lista);
};
global.complementarMedicamentos = mapa => {
  for (const id of Object.keys(mapa)) if (!base.MED_POR_ID[id]) erro(`complementarMedicamentos: "${id}" não existe`);
  base.complementarMedicamentos(mapa);
};
for (const a of extras) {
  const rel = `js/medicamentos/${a}`;
  try { require(path.join(pasta, a)); } catch (e) { erro(`${rel}: ${e.message}`); }
  if (!index.includes(`src="${rel}`)) erro(`${rel} não está no index.html`);
}
repetidos.forEach(id => erro(`id repetido: ${id}`));

const classes = new Set(base.CLASSES_MED.map(c => c[0]));
const alergias = new Set(base.ALERGIAS.map(a => a[0]));
const niveis = ["compativel", "cautela", "evitar", "contraindicado"];
for (const m of base.MEDICAMENTOS) {
  const p = [];
  if (!/^[a-z0-9-]+$/.test(m.id || "")) p.push("id inválido");
  if (!Array.isArray(m.nomes) || !m.nomes.length) p.push("falta nomes");
  if (!classes.has(m.classe)) p.push(`classe "${m.classe}" inválida`);
  if (!base.RECEITAS[m.receita]) p.push(`receita "${m.receita}" inválida`);
  if (!Array.isArray(m.prescrever) || !m.prescrever.length || m.prescrever.some(x => !x.contexto || !x.texto)) p.push("prescrever deve ser [{ contexto, texto }]");
  if (!m.adulto && !m.ped) p.push("falta adulto (ou ped)");
  if (!m.gestacao || !niveis.includes(m.gestacao.nivel) || !m.gestacao.texto) p.push("gestacao inválida");
  (m.alergia || []).forEach(a => { if (!alergias.has(a)) p.push(`alergia "${a}" não existe em ALERGIAS`); });
  if (m.renal && m.renal.some((r, i, a) => typeof r.abaixo !== "number" || (i && r.abaixo < a[i - 1].abaixo))) p.push("renal: abaixo numérico em ordem crescente");
  if (!Array.isArray(m.tags)) p.push("tags deve ser lista");
  if (p.length) erro(`${m.id}: ${p.join("; ")}`);
}
const porClasse = {};
base.MEDICAMENTOS.forEach(m => porClasse[m.classe] = (porClasse[m.classe] || 0) + 1);
console.log("\nPor classe:");
for (const [k, n] of base.CLASSES_MED) console.log(`  ${n.padEnd(52)} ${porClasse[k] || 0}`);
console.log(`\n${base.MEDICAMENTOS.length} medicamentos · ${erros} erro(s)`);
process.exit(erros ? 1 : 0);
