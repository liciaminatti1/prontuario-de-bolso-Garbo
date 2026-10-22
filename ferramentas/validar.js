// Confere as fichas antes de publicar.
// Uso:  node ferramentas/validar.js                     (todas as fichas)
//       node ferramentas/validar.js fichas/pediatria    (só uma pasta ou arquivos citados)
//       node ferramentas/validar.js --sem-indice ...     (não exige que a ficha já esteja no index.html)
// Verifica: campos obrigatórios por formato, ids repetidos, pasta × especialidade,
// nome do arquivo × id, presença no index.html e revisões com mais de 12 meses.
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
global.window = { FICHAS: [] };
const { validarFicha, ESPECIALIDADES } = require(path.join(raiz, "js/registro.js"));

const argumentos = process.argv.slice(2);
const semIndice = argumentos.includes("--sem-indice");
const filtros = argumentos.filter(a => !a.startsWith("--")).map(a => path.relative(raiz, path.resolve(a)));

const pastas = fs.readdirSync(path.join(raiz, "fichas"), { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
const todos = pastas.flatMap(p =>
  fs.readdirSync(path.join(raiz, "fichas", p)).filter(a => a.endsWith(".js")).map(a => `fichas/${p}/${a}`));
const index = fs.readFileSync(path.join(raiz, "index.html"), "utf8");

// Carrega todas (para detectar ids repetidos), mas só relata as filtradas.
const relatar = arq => !filtros.length || filtros.some(f => arq === f || arq.startsWith(f.replace(/\/?$/, "/")));
let erros = 0, avisos = 0, relatadas = 0;
for (const p of pastas) if (!ESPECIALIDADES[p]) { console.log(`✗ fichas/${p}/: pasta sem especialidade em js/registro.js`); erros++; }

const vistas = [];
for (const arq of todos) {
  let ficha;
  global.registrarFicha = f => { ficha = f; };
  const mostrar = relatar(arq);
  try { delete require.cache[path.join(raiz, arq)]; require(path.join(raiz, arq)); }
  catch (e) { if (mostrar) { console.log(`✗ ${arq}: erro de sintaxe — ${e.message}`); erros++; } continue; }
  if (!ficha) { if (mostrar) { console.log(`✗ ${arq}: não chama registrarFicha()`); erros++; } continue; }
  const problemas = validarFicha(ficha, vistas);
  vistas.push(ficha);
  if (!mostrar) continue;
  relatadas++;
  if (!semIndice && !(index.includes(`src="${arq}"`) || index.includes(`src="${arq}?v=`))) problemas.push("não está no index.html (rode node ferramentas/gerar-indice.js)");
  if (ficha.especialidade && !arq.startsWith(`fichas/${ficha.especialidade}/`)) problemas.push(`especialidade "${ficha.especialidade}" não bate com a pasta`);
  if (ficha.id && path.basename(arq, ".js") !== ficha.id) problemas.push(`nome do arquivo deveria ser ${ficha.id}.js`);
  if (problemas.length) { console.log(`✗ ${arq}\n  - ${problemas.join("\n  - ")}`); erros++; continue; }
  const meses = (Date.now() - new Date(ficha.revisao)) / 2.63e9;
  if (meses > 12) { console.log(`! ${arq}: revisão de ${ficha.revisao} (mais de 12 meses)`); avisos++; }
  else console.log(`✓ ${arq}`);
}

if (!filtros.length) {
  const resumo = {};
  for (const f of vistas) (resumo[f.especialidade] ||= { ps: 0, ubs: 0 })[f.caminho]++;
  console.log("\nPor especialidade (PS / UBS):");
  for (const k of Object.keys(ESPECIALIDADES)) if (resumo[k]) console.log(`  ${ESPECIALIDADES[k].padEnd(32)} ${resumo[k].ps} / ${resumo[k].ubs}`);
}
console.log(`\n${relatadas - erros} fichas válidas de ${relatadas} · ${erros} com erro · ${avisos} avisos`);
process.exit(erros ? 1 : 0);
