// Confere todas as fichas antes de publicar.  Uso:  node ferramentas/validar.js
// Verifica: campos obrigatórios, ids repetidos, ficha sem <script> no index.html,
// e avisa quando a revisão tem mais de 12 meses.
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = { FICHAS: [] };
const { validarFicha } = require(path.join(raiz, "js/registro.js"));

const arquivos = ["ps", "ubs"].flatMap(c =>
  fs.readdirSync(path.join(raiz, "fichas", c)).filter(a => a.endsWith(".js")).map(a => `fichas/${c}/${a}`));
const index = fs.readFileSync(path.join(raiz, "index.html"), "utf8");

let erros = 0, avisos = 0;
for (const arq of arquivos) {
  let ficha;
  global.registrarFicha = f => { ficha = f; };
  try { require(path.join(raiz, arq)); }
  catch (e) { console.log(`✗ ${arq}: erro de sintaxe — ${e.message}`); erros++; continue; }
  const problemas = validarFicha(ficha);
  if (!index.includes(`src="${arq}"`)) problemas.push("não está no index.html");
  if (ficha.caminho && !arq.startsWith(`fichas/${ficha.caminho}/`)) problemas.push(`caminho "${ficha.caminho}" não bate com a pasta`);
  if (problemas.length) { console.log(`✗ ${arq}\n  - ${problemas.join("\n  - ")}`); erros++; }
  else {
    const meses = (Date.now() - new Date(ficha.revisao)) / 2.63e9;
    if (meses > 12) { console.log(`! ${arq}: revisão de ${ficha.revisao} (mais de 12 meses)`); avisos++; }
    else console.log(`✓ ${arq}`);
    window.FICHAS.push(ficha);
  }
}
console.log(`\n${window.FICHAS.length} fichas válidas · ${erros} com erro · ${avisos} avisos`);
process.exit(erros ? 1 : 0);
