// Atualiza a lista de <script> das fichas no index.html a partir das pastas em fichas/.
// Uso: node ferramentas/gerar-indice.js   (rode sempre que criar, mover ou apagar uma ficha)
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = { FICHAS: [] };
const { ESPECIALIDADES } = require(path.join(raiz, "js/registro.js"));

const pastas = fs.readdirSync(path.join(raiz, "fichas"), { withFileTypes: true })
  .filter(d => d.isDirectory()).map(d => d.name);
const desconhecidas = pastas.filter(p => !ESPECIALIDADES[p]);
if (desconhecidas.length) {
  console.error(`Pasta(s) sem especialidade em js/registro.js: ${desconhecidas.join(", ")}`);
  process.exit(1);
}

const ordem = Object.keys(ESPECIALIDADES).filter(k => pastas.includes(k));
const linhas = [];
for (const esp of ordem) {
  const arquivos = fs.readdirSync(path.join(raiz, "fichas", esp)).filter(a => a.endsWith(".js")).sort();
  if (!arquivos.length) continue;
  linhas.push(`  <!-- ${ESPECIALIDADES[esp]} -->`);
  for (const a of arquivos) linhas.push(`  <script src="fichas/${esp}/${a}"></script>`);
}

const arqIndex = path.join(raiz, "index.html");
const html = fs.readFileSync(arqIndex, "utf8");
const novo = html.replace(/(<!-- FICHAS:INICIO -->)[\s\S]*?(\s*<!-- FICHAS:FIM -->)/, `$1\n${linhas.join("\n")}$2`);
fs.writeFileSync(arqIndex, novo);
console.log(`index.html atualizado: ${linhas.filter(l => l.includes("<script")).length} fichas em ${ordem.length} especialidades.`);
