/* Prontuário de Bolso — interface.
   Lista de fichas → vista rápida → ficha completa em abas.
   A navegação usa o hash da URL (#sca, #dengue...), então cada ficha tem link próprio. */

const $app = document.getElementById("app");
const $busca = document.getElementById("q");
const $esp = document.getElementById("esp");
const estado = { caminho: "todos", especialidade: "todas", busca: "" };
try {
  estado.caminho = localStorage.getItem("pb-caminho") || "todos";
  estado.especialidade = localStorage.getItem("pb-especialidade") || "todas";
} catch (e) {}

const NOME_CAMINHO = { ubs: "UBS / APS", ps: "PS / Emergência" };
const DESC_CAMINHO = {
  ps: "Estabilizar, decidir em minutos, definir destino.",
  ubs: "Reconhecer, tratar o que se resolve na unidade, encaminhar o que não se resolve."
};
const NOME_LINHA = { l1: "1ª escolha", alt: "Alternativa", adj: "Adjuvante", ci: "Não usar" };
const ABAS = [
  ["clinica", "Clínica"], ["exames", "Exames"], ["tratamento", "Tratamento"],
  ["destino", "Conduta e destino"], ["fontes", "Fontes"]
];

/* ---------- utilidades ---------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const normalizar = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const lista = arr => (arr || []).map(x => `<li>${esc(x)}</li>`).join("");
const dataBR = iso => { const [a, m, d] = String(iso).split("-"); return d ? `${d}/${m}/${a}` : iso; };

function definirCaminho(c) {
  estado.caminho = c;
  try { localStorage.setItem("pb-caminho", c); } catch (e) {}
  document.querySelectorAll(".path").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.p === c)));
  desenharEspecialidades();
}

function definirEspecialidade(e) {
  estado.especialidade = e;
  try { localStorage.setItem("pb-especialidade", e); } catch (err) {}
  desenharEspecialidades();
}

/* Filtros de especialidade: só aparecem as que têm fichas no caminho escolhido. */
function desenharEspecialidades() {
  const noCaminho = FICHAS.filter(f => estado.caminho === "todos" || f.caminho === estado.caminho);
  const usadas = Object.keys(ESPECIALIDADES).filter(k => noCaminho.some(f => f.especialidade === k));
  if (estado.especialidade !== "todas" && !usadas.includes(estado.especialidade)) estado.especialidade = "todas";
  const chip = (k, nome, n) => `<button class="esp-chip" data-e="${k}" id="e-${k}" aria-pressed="${estado.especialidade === k}">${nome} <small>${n}</small></button>`;
  $esp.innerHTML = chip("todas", "Todas", noCaminho.length) +
    usadas.map(k => chip(k, ESPECIALIDADES[k], noCaminho.filter(f => f.especialidade === k).length)).join("");
  $esp.querySelectorAll(".esp-chip").forEach(b => b.onclick = () => { definirEspecialidade(b.dataset.e); ir(""); });
}

/* ---------- lista de fichas ---------- */
function telaLista() {
  const q = normalizar(estado.busca.trim());
  const combina = f => (estado.especialidade === "todas" || f.especialidade === estado.especialidade) &&
    (!q || normalizar([f.titulo, f.resumo, f.palavrasChave, ESPECIALIDADES[f.especialidade], ...f.tratamento.map(t => t.droga)].join(" ")).includes(q));
  const ordem = Object.keys(ESPECIALIDADES);
  const ordenar = (a, b) => ordem.indexOf(a.especialidade) - ordem.indexOf(b.especialidade) || a.titulo.localeCompare(b.titulo, "pt-BR");
  const caminhos = estado.caminho === "todos" ? ["ps", "ubs"] : [estado.caminho];

  const grupos = caminhos.map(c => {
    const itens = FICHAS.filter(f => f.caminho === c && combina(f)).sort(ordenar);
    if (!itens.length) return "";
    return `<section class="group">
      <div class="group-h"><h2>${NOME_CAMINHO[c]}</h2><p>${DESC_CAMINHO[c]}</p></div>
      <div class="list">${itens.map(f => `
        <button class="item" data-p="${f.caminho}" data-id="${f.id}" id="it-${f.id}">
          <i class="esp-label">${ESPECIALIDADES[f.especialidade]}</i><b>${esc(f.titulo)}</b><span>${esc(f.resumo)}</span><em class="crit">${esc(f.critico.tempo)}</em>
        </button>`).join("")}
      </div></section>`;
  }).join("");

  $app.innerHTML = `<div class="view">
    ${grupos || `<p class="empty">Nenhuma ficha encontrada para “${esc(estado.busca)}”.</p>`}
    <p class="disclaimer">Material de apoio à decisão clínica para profissionais de saúde. Não substitui o julgamento clínico nem os protocolos da sua instituição. Confira doses, diluições e contraindicações antes de prescrever.</p>
  </div>`;
  $app.querySelectorAll(".item").forEach(b => b.onclick = () => ir(b.dataset.id));
}

/* ---------- ficha ---------- */
function telaFicha(f, modo = "rapida", aba = "clinica") {
  $app.innerHTML = `<div class="view">
    <button class="back" id="voltar">← Todas as fichas</button>
    <div class="f-head">
      <div class="chips"><span class="chip ${f.caminho}">${NOME_CAMINHO[f.caminho]}</span><span class="chip">${ESPECIALIDADES[f.especialidade]}</span><span class="chip">v${esc(f.versao)} · ${dataBR(f.revisao)}</span></div>
      <h2>${esc(f.titulo)}</h2><p>${esc(f.resumo)}</p>
    </div>
    <div class="switch" role="tablist" aria-label="Modo de visualização">
      <button role="tab" id="m-rapida" aria-selected="${modo === "rapida"}">Vista rápida</button>
      <button role="tab" id="m-completa" aria-selected="${modo === "completa"}">Ficha completa</button>
    </div>
    ${modo === "rapida" ? vistaRapida(f) : vistaCompleta(f, aba)}
  </div>`;

  document.getElementById("voltar").onclick = () => ir("");
  document.getElementById("m-rapida").onclick = () => telaFicha(f, "rapida");
  document.getElementById("m-completa").onclick = () => telaFicha(f, "completa", aba);
  const abrir = document.getElementById("open-full");
  if (abrir) abrir.onclick = () => { telaFicha(f, "completa", "clinica"); window.scrollTo(0, 0); };
  $app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => telaFicha(f, "completa", b.dataset.tab));
  $app.querySelectorAll(".copy").forEach(b => b.onclick = () => copiar(b));
  const abaAtiva = $app.querySelector('.tabs [aria-selected="true"]');
  if (abaAtiva) abaAtiva.scrollIntoView({ block: "nearest", inline: "center" });
}

function vistaRapida(f) {
  const primeiraLinha = f.tratamento.filter(t => t.linha === "l1").slice(0, 4);
  return `
  <div class="crit-band"><span class="t">${esc(f.critico.tempo)}</span><span class="d">${esc(f.critico.texto)}</span></div>
  <div class="quick">
    <div class="q alarm"><h3>Sinais de alarme</h3><ul>${lista(f.alarmes)}</ul></div>
    <div class="q act"><h3>Primeira conduta</h3><ol>${lista(f.condutaInicial)}</ol></div>
    <div class="q fatal"><h3>Diagnósticos fatais a excluir</h3><ul>${lista(f.fataisExcluir)}</ul></div>
    <div class="q"><h3>Doses de 1ª linha</h3><ul>${primeiraLinha.map(t =>
      `<li><b>${esc(t.droga)}</b><br><span class="mono">${esc(t.dose)}</span> · ${esc(t.via)}</li>`).join("")}</ul></div>
    <div class="q next"><h3>Próxima decisão</h3><p>${esc(f.proximaDecisao)}</p></div>
  </div>
  <button class="open-full" id="open-full">Abrir ficha completa →</button>`;
}

function vistaCompleta(f, aba) {
  const nav = `<nav class="tabs" role="tablist">${ABAS.map(([k, n]) =>
    `<button role="tab" data-tab="${k}" id="t-${k}" aria-selected="${k === aba}">${n}</button>`).join("")}</nav>`;
  const conteudo = { clinica: abaClinica, exames: abaExames, tratamento: abaTratamento, destino: abaDestino, fontes: abaFontes }[aba](f);
  return nav + conteudo;
}

function abaClinica(f) {
  const c = f.clinica;
  return `
  <div class="sec"><h3>Anamnese dirigida</h3><ul>${lista(c.anamnese)}</ul></div>
  <div class="sec"><h3>Exame físico dirigido</h3><ul>${lista(c.exameFisico)}</ul></div>
  <div class="sec"><h3>Diagnósticos diferenciais</h3>
    <div class="table-wrap"><table><thead><tr><th>Diagnóstico</th><th>O que sugere</th></tr></thead>
    <tbody>${c.diferenciais.map(d => `<tr><td>${esc(d.dx)}</td><td>${esc(d.pista)}</td></tr>`).join("")}</tbody></table></div></div>
  <div class="sec"><h3>Critérios de gravidade</h3><ul>${lista(c.gravidade)}</ul></div>`;
}

function abaExames(f) {
  return `<div class="sec">${f.exames.map((e, i) => `
    <div class="card">
      <div class="card-h"><b>${esc(e.nome)}</b></div>
      <div class="order"><code id="ped-${f.id}-${i}">${esc(e.pedido)}</code><button class="copy" data-target="ped-${f.id}-${i}">Copiar</button></div>
      <dl class="kv">
        <dt>Por que pedir</dt><dd>${esc(e.porQue)}</dd>
        <dt>O que esperar</dt><dd>${esc(e.esperar)}</dd>
        <dt>Interpretação e conduta</dt><dd>${esc(e.interpretacao)}</dd>
        <dt>Limitações</dt><dd>${esc(e.limitacoes)}</dd>
      </dl>
    </div>`).join("")}</div>`;
}

function abaTratamento(f) {
  return `<div class="sec">${f.tratamento.map(t => `
    <div class="card">
      <div class="card-h"><b>${esc(t.droga)}</b><span class="tag ${t.linha}">${NOME_LINHA[t.linha]}</span></div>
      <div class="dose">${esc(t.dose)}</div>
      <dl class="kv">
        <dt>Via</dt><dd>${esc(t.via)}</dd>
        <dt>Intervalo</dt><dd>${esc(t.intervalo)}</dd>
        <dt>Duração</dt><dd>${esc(t.duracao)}</dd>
        <dt>Monitorização</dt><dd>${esc(t.monitorizacao)}</dd>
        <dt>Contraindicações</dt><dd>${esc(t.contraindicacoes)}</dd>
        <dt>Diluição, ajustes e notas</dt><dd>${esc(t.ajustes)}</dd>
      </dl>
    </div>`).join("")}
    <p class="note">Confira a apresentação disponível no seu serviço antes de calcular volumes. Ajuste por função renal, hepática, idade e gestação conforme bula e protocolo local.</p></div>`;
}

function abaDestino(f) {
  const d = f.destino;
  const caixa = (cls, titulo, arr) => `<div class="card ${cls}"><h4>${titulo}</h4><ul>${lista(arr)}</ul></div>`;
  return `<div class="dest">
    ${caixa("now", "O que fazer agora", d.agora)}
    ${caixa("re", "Quando reavaliar", d.reavaliar)}
    ${caixa("al", "Critérios de alta", d.alta)}
    ${caixa("ob", "Observação", d.observacao)}
    ${caixa("in", "Internação", d.internacao)}
    ${caixa("tx", "Encaminhamento e transferência", d.transferencia)}
  </div>`;
}

function abaFontes(f) {
  return `
  <div class="sec"><h3>Fontes</h3><ul>${lista(f.fontes)}</ul></div>
  <div class="meta">
    <div><span>Revisão</span><b>${dataBR(f.revisao)}</b></div>
    <div><span>Versão</span><b>${esc(f.versao)}</b></div>
    <div><span>Caminho</span><b>${NOME_CAMINHO[f.caminho]}</b></div>
    <div><span>Especialidade</span><b>${ESPECIALIDADES[f.especialidade]}</b></div>
  </div>
  <p class="note">Conteúdo de apoio. Valide com o protocolo da sua instituição e com a versão mais recente de cada diretriz.</p>`;
}

function copiar(btn) {
  const el = document.getElementById(btn.dataset.target);
  const ok = () => { btn.textContent = "Copiado"; setTimeout(() => btn.textContent = "Copiar", 1500); };
  const selecionar = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(el.textContent).then(ok).catch(selecionar); } catch (e) { selecionar(); }
}

/* ---------- navegação ---------- */
function ir(id) {
  if (id) location.hash = id;
  else history.pushState(null, "", location.pathname + location.search);
  rota();
  window.scrollTo(0, 0);
}
function rota() {
  const f = FICHAS.find(x => x.id === location.hash.slice(1));
  f ? telaFicha(f) : telaLista();
}

document.querySelectorAll(".path").forEach(b => b.onclick = () => { definirCaminho(b.dataset.p); ir(""); });
$busca.addEventListener("input", () => { estado.busca = $busca.value; if (location.hash) ir(""); else telaLista(); });
window.addEventListener("hashchange", rota);
window.addEventListener("popstate", rota);
definirCaminho(estado.caminho);
rota();

/* ---------- uso offline (PWA) ---------- */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(err => console.warn("Service worker não registrado:", err));
}
