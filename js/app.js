/* Prontuário de Bolso — interface.
   Lista de fichas (com filtros) → ficha (vista rápida + completa, ou formato curto).
   Documentos (atestado, receituário...) ficam em js/documentos.js.
   A navegação usa o hash da URL (#sca, #dengue, #documentos...), então cada tela tem link próprio. */

const $app = document.getElementById("app");     // ficha, documentos ou tela inicial
const $lista = document.getElementById("lista"); // filtros + lista de fichas
const telaLarga = window.matchMedia("(min-width: 1024px)");
const $busca = document.getElementById("q");
const estado = { caminho: "todos", publico: "todos", especialidade: "todas", busca: "" };
try {
  estado.caminho = localStorage.getItem("pb-caminho") || "todos";
  estado.publico = localStorage.getItem("pb-publico") || "todos";
  estado.especialidade = localStorage.getItem("pb-especialidade") || "todas";
} catch (e) {}

const NOME_CAMINHO = { ubs: "UBS / APS", ps: "PS / Emergência" };
const NOME_PUBLICO = { adulto: "Adulto", pediatrico: "Criança", ambos: "Adulto e criança" };
const DESC_CAMINHO = {
  ps: "Estabilizar, decidir em minutos, definir destino.",
  ubs: "Reconhecer, tratar o que se resolve na unidade, encaminhar o que não se resolve."
};
const NOME_LINHA = { l1: "1ª escolha", alt: "Alternativa", adj: "Adjuvante", ci: "Não usar" };
const ABAS = [
  ["clinica", "Clínica"], ["exames", "Exames"], ["tratamento", "Tratamento"], ["prescricao", "Prescrição"],
  ["destino", "Conduta e retorno"], ["fontes", "Fontes"]
];

/* ---------- utilidades ---------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const normalizar = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const lista = arr => (arr || []).map(x => `<li>${esc(x)}</li>`).join("");
const dataBR = iso => { const [a, m, d] = String(iso).split("-"); return d ? `${d}/${m}/${a}` : iso; };
let contadorCopia = 0;

function salvar(chave, valor) { try { localStorage.setItem(chave, valor); } catch (e) {} }

function blocoCopiavel(texto, titulo) {
  const id = `copia-${++contadorCopia}`;
  return `<div class="card">
    ${titulo ? `<div class="card-h"><b>${esc(titulo)}</b><button class="copy" data-target="${id}">Copiar</button></div>` : ""}
    <pre class="rx" id="${id}">${esc(texto)}</pre>
    ${titulo ? "" : `<button class="copy" data-target="${id}">Copiar</button>`}
  </div>`;
}

function tabelasHTML(tabelas) {
  return (tabelas || []).map(t => `<div class="sec"><h3>${esc(t.titulo)}</h3>
    <div class="table-wrap"><table><thead><tr>${t.colunas.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${t.linhas.map(l => `<tr>${l.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    ${t.nota ? `<p class="note">${esc(t.nota)}</p>` : ""}</div>`).join("");
}

function ligarCopias(raiz = $app) { raiz.querySelectorAll(".copy").forEach(b => b.onclick = () => copiar(b)); }

function copiar(btn) {
  const el = document.getElementById(btn.dataset.target);
  const texto = el.value !== undefined && el.tagName !== "PRE" && el.tagName !== "CODE" ? el.value : el.textContent;
  const ok = () => { btn.textContent = "Copiado"; setTimeout(() => btn.textContent = "Copiar", 1500); };
  const selecionar = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(texto).then(ok).catch(selecionar); } catch (e) { selecionar(); }
}

/* ---------- filtros ---------- */
const casaPublico = f => estado.publico === "todos" || f.publico === "ambos" || f.publico === estado.publico;
const casaCaminho = f => estado.caminho === "todos" || f.caminho === estado.caminho;

function filtrosHTML() {
  const base = FICHAS.filter(f => casaCaminho(f) && casaPublico(f));
  const usadas = Object.keys(ESPECIALIDADES).filter(k => base.some(f => f.especialidade === k));
  if (estado.especialidade !== "todas" && !usadas.includes(estado.especialidade)) estado.especialidade = "todas";
  const botao = (grupo, valor, rotulo, ativo, extra = "") =>
    `<button class="seg" data-g="${grupo}" data-v="${valor}" id="f-${grupo}-${valor}" aria-pressed="${ativo}">${extra}${rotulo}</button>`;
  const chip = (k, nome, n) => `<button class="esp-chip" data-e="${k}" id="e-${k}" aria-pressed="${estado.especialidade === k}">${nome} <small>${n}</small></button>`;
  return `<div class="filtros">
    <div class="seg-row" role="group" aria-label="Caminho de atendimento">
      ${botao("caminho", "todos", "Todos", estado.caminho === "todos")}
      ${botao("caminho", "ubs", "UBS / APS", estado.caminho === "ubs", '<i class="dot ubs"></i>')}
      ${botao("caminho", "ps", "PS / Emergência", estado.caminho === "ps", '<i class="dot ps"></i>')}
    </div>
    <div class="seg-row" role="group" aria-label="Idade">
      ${botao("publico", "todos", "Todas as idades", estado.publico === "todos")}
      ${botao("publico", "adulto", "Adulto", estado.publico === "adulto")}
      ${botao("publico", "pediatrico", "Criança", estado.publico === "pediatrico")}
    </div>
    <div class="esp" role="group" aria-label="Especialidade">
      ${chip("todas", "Todas", base.length)}
      ${usadas.map(k => chip(k, ESPECIALIDADES[k], base.filter(f => f.especialidade === k).length)).join("")}
    </div>
  </div>`;
}

function ligarFiltros() {
  $lista.querySelectorAll(".seg").forEach(b => b.onclick = () => {
    estado[b.dataset.g] = b.dataset.v;
    salvar(`pb-${b.dataset.g}`, b.dataset.v);
    telaLista();
  });
  $lista.querySelectorAll(".esp-chip").forEach(b => b.onclick = () => {
    estado.especialidade = b.dataset.e;
    salvar("pb-especialidade", b.dataset.e);
    telaLista();
  });
  const ativo = $lista.querySelector('.esp-chip[aria-pressed="true"]');
  if (ativo && ativo.dataset.e !== "todas") ativo.scrollIntoView({ block: "nearest", inline: "center" });
}

/* ---------- lista de fichas ---------- */
function telaLista() {
  const q = normalizar(estado.busca.trim());
  const filtrosTela = filtrosHTML();
  const combina = f => casaCaminho(f) && casaPublico(f) &&
    (estado.especialidade === "todas" || f.especialidade === estado.especialidade) &&
    (!q || normalizar([f.titulo, f.resumo, f.palavrasChave, ESPECIALIDADES[f.especialidade],
      ...(f.tratamento || []).map(t => t.droga)].join(" ")).includes(q));
  const ordem = Object.keys(ESPECIALIDADES);
  const ordenar = (a, b) => ordem.indexOf(a.especialidade) - ordem.indexOf(b.especialidade) || a.titulo.localeCompare(b.titulo, "pt-BR");

  const grupos = ["ps", "ubs"].map(c => {
    const itens = FICHAS.filter(f => f.caminho === c && combina(f)).sort(ordenar);
    if (!itens.length) return "";
    return `<section class="group">
      <div class="group-h"><h2>${NOME_CAMINHO[c]}</h2><p>${DESC_CAMINHO[c]}</p></div>
      <div class="list">${itens.map(f => `
        <button class="item" data-p="${f.caminho}" data-id="${f.id}" id="it-${f.id}" ${f.id === location.hash.slice(1) ? 'aria-current="true"' : ""}>
          <i class="esp-label">${ESPECIALIDADES[f.especialidade]}${f.publico !== "adulto" ? ` · ${NOME_PUBLICO[f.publico]}` : ""}</i>
          <b>${esc(f.titulo)}</b><span>${esc(f.resumo)}</span>
          ${f.critico ? `<em class="crit">${esc(f.critico.tempo)}</em>` : ""}
        </button>`).join("")}
      </div></section>`;
  }).join("");

  $lista.innerHTML = `<div class="view">
    ${filtrosTela}
    ${grupos || `<p class="empty">Nenhuma ficha encontrada${estado.busca ? ` para “${esc(estado.busca)}”` : " com esses filtros"}.</p>`}
    <p class="disclaimer">Material de apoio à decisão clínica para profissionais de saúde. Não substitui o julgamento clínico nem os protocolos da sua instituição. Confira doses, diluições e contraindicações antes de prescrever.</p>
  </div>`;
  ligarFiltros();
  marcarSelecionada(location.hash.slice(1));
  $lista.querySelectorAll(".item").forEach(b => b.onclick = () => ir(b.dataset.id));
}

/* Marca na lista lateral a ficha aberta (computador). */
function marcarSelecionada(id) {
  $lista.querySelectorAll(".item").forEach(b => {
    if (b.dataset.id === id) { b.setAttribute("aria-current", "true"); if (telaLarga.matches) b.scrollIntoView({ block: "nearest" }); }
    else b.removeAttribute("aria-current");
  });
}

/* Tela inicial do painel direito no computador (no celular a lista ocupa a tela). */
function telaInicio() {
  const n = c => FICHAS.filter(f => f.caminho === c).length;
  $app.innerHTML = `<div class="view inicio">
    <div class="f-head"><h2>Escolha uma ficha</h2>
      <p>Use a lista ao lado ou a busca. Os filtros de caminho, idade e especialidade se combinam.</p></div>
    <div class="inicio-grid">
      <div class="q"><h3>Fichas</h3><p class="num">${FICHAS.length}</p><p>${n("ps")} de PS / Emergência · ${n("ubs")} de UBS / APS</p></div>
      <button class="q atalho" id="ini-docs"><h3>Documentos</h3><p>Atestado, receituário, prescrição hospitalar, admissão, evolução e passagem de caso</p></button>
      <div class="q"><h3>Atalhos de teclado</h3><ul>
        <li><kbd>/</kbd> buscar</li>
        <li><kbd>Esc</kbd> limpar a busca ou voltar</li>
        <li><kbd>Alt</kbd> + <kbd>←</kbd> ficha anterior</li></ul></div>
    </div>
    <p class="disclaimer">Material de apoio à decisão clínica para profissionais de saúde. Não substitui o julgamento clínico nem os protocolos da sua instituição.</p>
  </div>`;
  document.getElementById("ini-docs").onclick = () => ir("documentos");
}

/* ---------- ficha ---------- */
function cabecalhoFicha(f) {
  return `<button class="back para-lista" id="voltar">← Todas as fichas</button>
    <div class="f-head">
      <div class="chips">
        <span class="chip ${f.caminho}">${NOME_CAMINHO[f.caminho]}</span>
        <span class="chip">${ESPECIALIDADES[f.especialidade]}</span>
        <span class="chip">${NOME_PUBLICO[f.publico]}</span>
        <span class="chip">v${esc(f.versao)} · ${dataBR(f.revisao)}</span>
      </div>
      <h2>${esc(f.titulo)}</h2><p>${esc(f.resumo)}</p>
    </div>`;
}

function faixaCritica(f) {
  return f.critico ? `<div class="crit-band"><span class="t">${esc(f.critico.tempo)}</span><span class="d">${esc(f.critico.texto)}</span></div>` : "";
}

function telaFicha(f, modo = "rapida", aba = "clinica") {
  contadorCopia = 0;
  if (f.formato === "curto") {
    $app.innerHTML = `<div class="view">${cabecalhoFicha(f)}${fichaCurta(f)}</div>`;
  } else {
    $app.innerHTML = `<div class="view">${cabecalhoFicha(f)}
      <div class="switch" role="tablist" aria-label="Modo de visualização">
        <button role="tab" id="m-rapida" aria-selected="${modo === "rapida"}">Vista rápida</button>
        <button role="tab" id="m-completa" aria-selected="${modo === "completa"}">Ficha completa</button>
      </div>
      ${modo === "rapida" ? vistaRapida(f) : vistaCompleta(f, aba)}
    </div>`;
    document.getElementById("m-rapida").onclick = () => telaFicha(f, "rapida");
    document.getElementById("m-completa").onclick = () => telaFicha(f, "completa", aba);
    const abrir = document.getElementById("open-full");
    if (abrir) abrir.onclick = () => { telaFicha(f, "completa", "clinica"); window.scrollTo(0, 0); };
    $app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => telaFicha(f, "completa", b.dataset.tab));
    const abaAtiva = $app.querySelector('.tabs [aria-selected="true"]');
    if (abaAtiva) abaAtiva.scrollIntoView({ block: "nearest", inline: "center" });
  }
  document.getElementById("voltar").onclick = () => ir("");
  $app.querySelectorAll("[data-rx]").forEach(b => b.onclick = () => ir(`doc-${b.dataset.rx}`, { ficha: f.id }));
  ligarCopias();
}

function vistaRapida(f) {
  const primeiraLinha = f.tratamento.filter(t => t.linha === "l1").slice(0, 4);
  return `${faixaCritica(f)}
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
  const conteudo = { clinica: abaClinica, exames: abaExames, tratamento: abaTratamento, prescricao: abaPrescricao, destino: abaDestino, fontes: abaFontes }[aba](f);
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
  <div class="sec"><h3>Critérios de gravidade</h3><ul>${lista(c.gravidade)}</ul></div>
  ${tabelasHTML(f.tabelas)}`;
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

function cartoesTratamento(trat) {
  return (trat || []).map(t => `
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
    </div>`).join("");
}

function abaTratamento(f) {
  return `<div class="sec">${cartoesTratamento(f.tratamento)}
    <p class="note">Confira a apresentação disponível no seu serviço antes de calcular volumes. Ajuste por função renal, hepática, idade e gestação conforme bula e protocolo local.</p></div>`;
}

function blocosPrescricao(f) {
  const p = f.prescricao || {};
  const partes = [];
  if (p.ambulatorial) partes.push(blocoCopiavel(p.ambulatorial, "Prescrição ambulatorial") +
    `<button class="link-btn" data-rx="receita">Abrir no receituário →</button>`);
  if (p.hospitalar) partes.push(blocoCopiavel(p.hospitalar, "Prescrição hospitalar / sala de emergência") +
    `<button class="link-btn" data-rx="prescricao-hospitalar">Abrir na prescrição hospitalar →</button>`);
  return partes.join("");
}

function abaPrescricao(f) {
  return `<div class="sec">${blocosPrescricao(f) || `<p class="empty">Esta ficha ainda não tem prescrição pronta.</p>`}
    <p class="note">Modelo para adaptar a cada paciente: confira peso, alergias, função renal, gestação e interações. Medicamentos controlados exigem receituário próprio (Portaria SVS/MS 344/1998).</p></div>`;
}

function caixas(itens) {
  return itens.filter(([, , arr]) => arr && arr.length)
    .map(([cls, titulo, arr]) => `<div class="card ${cls}"><h4>${titulo}</h4><ul>${lista(arr)}</ul></div>`).join("");
}

function abaDestino(f) {
  const d = f.destino;
  return `<div class="dest">${caixas([
    ["now", "O que fazer agora", d.agora],
    ["re", "Quando reavaliar", d.reavaliar],
    ["al", "Critérios de alta", d.alta],
    ["ob", "Observação", d.observacao],
    ["in", "Internação", d.internacao],
    ["tx", "Encaminhamento e transferência", d.transferencia],
    ["ret", "Orientações ao paciente e retorno", f.orientacoesRetorno]
  ])}</div>`;
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

/* Formato curto: tudo em uma página, sem abas. */
function fichaCurta(f) {
  const q = (cls, titulo, arr, tag = "ul") => arr && arr.length ? `<div class="q ${cls}"><h3>${titulo}</h3><${tag}>${lista(arr)}</${tag}></div>` : "";
  return `${faixaCritica(f)}
  <div class="quick">
    ${q("alarm", "Sinais de alarme", f.alarmes)}
    ${q("act", "Conduta", f.conduta, "ol")}
    ${q("", "Exames", f.exames)}
    ${q("fatal", "Diferenciais", f.diferenciais)}
  </div>
  ${f.tratamento && f.tratamento.length ? `<div class="sec gap-top"><h3>Tratamento</h3>${cartoesTratamento(f.tratamento)}</div>` : ""}
  <div class="sec gap-top"><h3>Prescrição</h3>${blocosPrescricao(f)}</div>
  <div class="dest">${caixas([
    ["ret", "Orientações ao paciente e retorno", f.orientacoesRetorno],
    ["tx", "Quando encaminhar", f.encaminhar]
  ])}</div>
  ${tabelasHTML(f.tabelas)}
  ${abaFontes(f)}`;
}

/* ---------- navegação ---------- */
let contextoDocumento = {};
function ir(id, contexto = {}) {
  contextoDocumento = { ...contexto, alvo: id };
  if (!telaLarga.matches || id === "") window.scrollTo(0, 0);
  else document.getElementById("app").scrollIntoView({ block: "start" });
  // Mudar o hash dispara "hashchange", que já chama rota(); evita desenhar a tela duas vezes.
  if (id && location.hash.slice(1) !== id) { location.hash = id; return; }
  if (!id && location.hash) history.pushState(null, "", location.pathname + location.search);
  rota();
}
let listaDesenhada = false;
function rota() {
  const h = location.hash.slice(1);
  if (!listaDesenhada) { telaLista(); listaDesenhada = true; }
  document.body.dataset.rota = h ? "detalhe" : "lista";
  marcarSelecionada(h);
  if (h === "documentos" || h.startsWith("doc-")) {
    // O contexto (ex.: ficha a importar) vale só para o documento para o qual foi criado.
    telaDocumentos(h === "documentos" ? null : h.slice(4), contextoDocumento.alvo === h ? contextoDocumento : {});
    return;
  }
  contextoDocumento = {};
  const f = FICHAS.find(x => x.id === h);
  if (f) telaFicha(f);
  else { document.body.dataset.rota = "lista"; telaInicio(); }
}

document.getElementById("btn-documentos").onclick = () => ir("documentos");
document.getElementById("btn-inicio").onclick = () => ir("");
$busca.addEventListener("input", () => {
  estado.busca = $busca.value;
  telaLista();
  // No celular a busca mostra a lista; no computador a ficha aberta continua à direita.
  if (!telaLarga.matches && location.hash) ir("");
});

/* Atalhos: "/" busca, Esc limpa a busca ou volta para a lista. */
document.addEventListener("keydown", e => {
  const digitando = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key === "/" && !digitando) { e.preventDefault(); $busca.focus(); $busca.select(); }
  else if (e.key === "Escape") {
    if (document.activeElement === $busca && $busca.value) { $busca.value = ""; estado.busca = ""; telaLista(); }
    else if (!digitando && location.hash) ir("");
    else if (digitando) document.activeElement.blur();
  }
});

/* Altura do cabeçalho fixo, usada para posicionar a coluna lateral. */
const $topo = document.querySelector(".top");
const medirTopo = () => document.documentElement.style.setProperty("--top-h", $topo.offsetHeight + "px");
new ResizeObserver(medirTopo).observe($topo);
medirTopo();
window.addEventListener("hashchange", rota);
window.addEventListener("popstate", rota);
rota();

/* ---------- uso offline (PWA) ---------- */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(err => console.warn("Service worker não registrado:", err));
}
