// Confere todas as fichas antes de publicar.  Uso:  node ferramentas/validar.js
// Verifica: campos obrigatórios, ids repetidos, pasta × especialidade, ficha fora do
// index.html, e avisa quando a revisão tem mais de 12 meses.
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = { FICHAS: [] };
const { validarFicha, ESPECIALIDADES } = require(path.join(raiz, "js/registro.js"));

const pastas = fs.readdirSync(path.join(raiz, "fichas"), { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
const arquivos = pastas.flatMap(p =>
  fs.readdirSync(path.join(raiz, "fichas", p)).filter(a => a.endsWith(".js")).map(a => `fichas/${p}/${a}`));
const index = fs.readFileSync(path.join(raiz, "index.html"), "utf8");

let erros = 0, avisos = 0;
for (const p of pastas) if (!ESPECIALIDADES[p]) { console.log(`✗ fichas/${p}/: pasta sem especialidade em js/registro.js`); erros++; }

for (const arq of arquivos) {
  let ficha;
  global.registrarFicha = f => { ficha = f; };
  try { require(path.join(raiz, arq)); }
  catch (e) { console.log(`✗ ${arq}: erro de sintaxe — ${e.message}`); erros++; continue; }
  if (!ficha) { console.log(`✗ ${arq}: não chama registrarFicha()`); erros++; continue; }
  const problemas = validarFicha(ficha);
  if (!index.includes(`src="${arq}"`)) problemas.push("não está no index.html (rode node ferramentas/gerar-indice.js)");
  if (ficha.especialidade && !arq.startsWith(`fichas/${ficha.especialidade}/`)) problemas.push(`especialidade "${ficha.especialidade}" não bate com a pasta`);
  if (ficha.id && path.basename(arq, ".js") !== ficha.id) problemas.push(`nome do arquivo deveria ser ${ficha.id}.js`);
  if (problemas.length) { console.log(`✗ ${arq}\n  - ${problemas.join("\n  - ")}`); erros++; continue; }
  const meses = (Date.now() - new Date(ficha.revisao)) / 2.63e9;
  if (meses > 12) { console.log(`! ${arq}: revisão de ${ficha.revisao} (mais de 12 meses)`); avisos++; }
  else console.log(`✓ ${arq}`);
  window.FICHAS.push(ficha);
}

const resumo = {};
for (const f of window.FICHAS) resumo[f.especialidade] = (resumo[f.especialidade] || { ps: 0, ubs: 0 }), resumo[f.especialidade][f.caminho]++;
console.log("\nPor especialidade (PS / UBS):");
for (const [k, v] of Object.entries(resumo)) console.log(`  ${ESPECIALIDADES[k].padEnd(24)} ${v.ps} / ${v.ubs}`);
console.log(`\n${window.FICHAS.length} fichas válidas · ${erros} com erro · ${avisos} avisos`);
process.exit(erros ? 1 : 0);
