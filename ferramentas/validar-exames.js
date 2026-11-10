// Valida o catálogo de exames e roda os testes do motor.
// Uso: node ferramentas/validar-exames.js [--conteudo]
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = {};
const base = require(path.join(raiz, "js/exames/base.js"));
Object.assign(global, base);
let erros = 0;
const erro = t => { console.log("✗ " + t); erros++; };
for (const a of ["lab-hemato.js", "lab-bioquimica.js", "imagem.js"]) {
  try { require(path.join(raiz, "js/exames", a)); } catch (e) { erro(`js/exames/${a}: ${e.message}`); }
}
const ids = new Set(fs.readdirSync(path.join(raiz, "fichas"), { withFileTypes: true }).filter(d => d.isDirectory())
  .flatMap(d => fs.readdirSync(path.join(raiz, "fichas", d.name)).filter(a => a.endsWith(".js")).map(a => a.slice(0, -3))));
const index = fs.readFileSync(path.join(raiz, "index.html"), "utf8");
for (const a of fs.readdirSync(path.join(raiz, "js/exames")).filter(a => a.endsWith(".js")))
  if (!index.includes(`src="js/exames/${a}`)) erro(`js/exames/${a} não está no index.html`);

const lista = v => Array.isArray(v) && v.every(x => typeof x === "string");
const fichasOk = (arr, onde) => (arr || []).forEach(f => { if (!ids.has(f)) erro(`${onde}: ficha "${f}" não existe`); });
const vistos = new Set();
const sinonimos = new Map();
for (const e of EXAMES_LAB) {
  const p = [];
  if (!/^[a-z0-9-]+$/.test(e.id || "") || vistos.has(e.id)) p.push("id inválido ou repetido"); vistos.add(e.id);
  if (!e.nome) p.push("falta nome");
  if (!EX_CATEGORIAS_LAB[e.categoria]) p.push(`categoria "${e.categoria}" inválida`);
  if (!["quantitativo", "qualitativo"].includes(e.tipo)) p.push("tipo inválido");
  if (!lista(e.sinonimos) || !e.sinonimos.length) p.push("falta sinonimos");
  (e.sinonimos || []).forEach(s => {
    if (s !== s.toLowerCase() || /[̀-ͯáéíóúâêôãõç]/.test(s.normalize("NFD"))) p.push(`sinônimo com maiúscula/acento: ${s}`);
    if (sinonimos.has(s) && sinonimos.get(s) !== e.id) p.push(`sinônimo "${s}" repetido em ${sinonimos.get(s)}`);
    sinonimos.set(s, e.id);
  });
  if (e.tipo === "quantitativo") {
    if (!e.unidade && e.unidade !== "") p.push("falta unidade");
    if (!Array.isArray(e.ref) || !e.ref.length) p.push("falta ref");
    (e.ref || []).forEach((r, i) => {
      if (!["adulto", "crianca", "rn", "todas"].includes(r.faixa)) p.push(`ref[${i}].faixa inválida`);
      if (r.min === undefined && r.max === undefined && !r.texto) p.push(`ref[${i}] sem min/max/texto`);
      if (r.min !== undefined && r.max !== undefined && r.min > r.max) p.push(`ref[${i}] min > max`);
    });
    (e.conversoes || []).forEach((c, i) => { if (!c.unidade || !(c.fator > 0)) p.push(`conversoes[${i}] inválida`); });
  } else if (!e.positivo) p.push("qualitativo precisa de positivo");
  if (!lista(e.indicacoes)) p.push("indicacoes deve ser lista");
  if (!e.pedido) p.push("falta pedido");
  for (const k of ["alto", "baixo", "positivo"]) if (e[k]) { if (!lista(e[k].causas || [])) p.push(`${k}.causas deve ser lista`); fichasOk(e[k].fichas, `${e.id}.${k}`); }
  if (!lista(e.fontes) || !e.fontes.length) p.push("falta fontes");
  if (p.length) erro(`exame ${e.id}: ${p.join("; ")}`);
}
for (const e of EXAMES_IMAGEM) {
  const p = [];
  if (!/^[a-z0-9-]+$/.test(e.id || "") || vistos.has(e.id)) p.push("id inválido ou repetido"); vistos.add(e.id);
  if (!e.nome) p.push("falta nome");
  if (!EX_CATEGORIAS_IMAGEM[e.categoria]) p.push(`categoria "${e.categoria}" inválida`);
  for (const k of ["indicacoes", "naoIndicado", "cuidados", "exemplos"]) if (e[k] !== undefined && !lista(e[k])) p.push(`${k} deve ser lista`);
  if (!lista(e.indicacoes) || !e.indicacoes.length) p.push("falta indicacoes");
  if (!e.pedido) p.push("falta pedido");
  (e.achados || []).forEach((a, i) => {
    if (!lista(a.termos) || !a.termos.length || !a.significado) p.push(`achados[${i}] precisa de termos e significado`);
    (a.termos || []).forEach(t => { if (t !== t.toLowerCase() || /[áéíóúâêôãõç]/.test(t)) p.push(`termo com maiúscula/acento: ${t}`); });
    fichasOk(a.fichas, `${e.id}.achados[${i}]`);
  });
  if (!lista(e.fontes) || !e.fontes.length) p.push("falta fontes");
  if (p.length) erro(`imagem ${e.id}: ${p.join("; ")}`);
}
console.log(`Catálogo: ${EXAMES_LAB.length} laboratoriais, ${EXAMES_IMAGEM.length} de imagem/gráficos`);
if (!process.argv.includes("--conteudo") && fs.existsSync(path.join(__dirname, "testes-exames.js"))) erros += require("./testes-exames.js")(ids);
console.log(`${erros} erro(s)`);
process.exit(erros ? 1 : 0);
