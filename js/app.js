/* Licia Minatti · Prontuário de Bolso — interface.
   Estrutura: menu lateral (seções e especialidades) + barra superior (busca, UBS/PS, paciente)
   + conteúdo (#app). A navegação usa o hash da URL: #fichas, #favoritos, #calculadoras, #sca...
   Documentos: js/documentos.js · calculadoras e segurança: js/calculadoras.js. */

const VERSAO = "3.1";
const $app = document.getElementById("app");
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
  ["calculos", "Calculadoras e segurança"], ["destino", "Conduta e retorno"], ["fontes", "Fontes"]
];

/* ---------- ícones (traço, 24×24) ---------- */
const ICONES = {
  inicio: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  estrela: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pilula: '<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="m8.5 8.5 7 7"/>',
  calculadora: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h4"/>',
  documento: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  config: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  busca: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  estetoscopio: '<path d="M6 3v6a5 5 0 0 0 10 0V3"/><path d="M11 14v2a5 5 0 0 0 10 0v-2"/><circle cx="21" cy="12" r="2"/>',
  casa: '<path d="M3 11.5 12 4l9 7.5V20H3z"/><path d="M10 20v-5h4v5"/>',
  ambulancia: '<path d="M3 16V8h11v8M14 11h4l3 3v2h-7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M8.5 10v4M6.5 12h4"/>',
  coracao: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
  pulmao: '<path d="M12 4v9M12 9c-1 2-3 2-3 2M12 9c1 2 3 2 3 2"/><path d="M8.5 8C5 8 3 13 3 17c0 2 1 3 3 3 2.5 0 3-2 3-4V9"/><path d="M15.5 8C19 8 21 13 21 17c0 2-1 3-3 3-2.5 0-3-2-3-4V9"/>',
  cerebro: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
  virus: '<circle cx="12" cy="12" r="5"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  gota: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  feminino: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',
  bebe: '<circle cx="12" cy="8" r="4"/><path d="M6 21a6 6 0 0 1 12 0"/><path d="M10.5 8h.01M13.5 8h.01"/>',
  estomago: '<path d="M9 3v4a4 4 0 0 1-4 4v2a8 8 0 0 0 8 8h1a6 6 0 0 0 6-6 4 4 0 0 0-4-4h-2a3 3 0 0 1-3-3V3"/>',
  rim: '<path d="M10 5c-4 0-6 3-6 7s2 7 6 7c2 0 3-1 3-3 0-1.5-1-2-1-4s1-2.5 1-4c0-2-1-3-3-3z"/><path d="M13 12h3a2 2 0 0 1 2 2v6"/>',
  pele: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 10h.01M12 13h.01M16 9h.01M9 15h.01"/>',
  olho: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  osso: '<path d="M17 3a3 3 0 0 0-3 4l-7 7a3 3 0 1 0 3 3l7-7a3 3 0 1 0 0-7z"/>',
  mente: '<circle cx="12" cy="10" r="6"/><path d="M9 21h6M10 16v5M14 16v5M10 10a2 2 0 1 1 4 0c0 1.5-2 1.5-2 3"/>',
  alerta: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
  escudo: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  trauma: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><circle cx="12" cy="12" r="3"/>',
  seta: '<path d="m9 6 6 6-6 6"/>',
  lampada: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
  bisturi: '<path d="M3 21 14 10l3 3L8 21z"/><path d="m14 10 5.5-5.5a2.1 2.1 0 0 1 3 3L17 13"/>',
  usuario: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
};
const ICONE_ESP = {
  emergencia: "ambulancia", cardiologia: "coracao", pneumologia: "pulmao", neurologia: "cerebro", infectologia: "virus",
  endocrinologia: "gota", "ginecologia-obstetricia": "feminino", pediatria: "bebe", gastroenterologia: "estomago",
  hematologia: "gota", urologia: "rim", nefrologia: "rim", dermatologia: "pele", "oftalmo-otorrino": "olho", musculoesqueletico: "osso",
  "saude-mental": "mente", toxicologia: "alerta", trauma: "trauma", alergia: "escudo", prevencao: "escudo", referencia: "pilula",
  cirurgia: "bisturi", procedimentos: "bisturi"
};
const ic = (nome, cls = "ic") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONES[nome] || ""}</svg>`;

/* ---------- utilidades ---------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const normalizar = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const lista = arr => (arr || []).map(x => `<li>${esc(x)}</li>`).join("");
const dataBR = iso => { const [a, m, d] = String(iso).split("-"); return d ? `${d}/${m}/${a}` : iso; };
const fichaPorId = id => FICHAS.find(f => f.id === id);
let contadorCopia = 0;

function salvar(chave, valor) { try { localStorage.setItem(chave, valor); } catch (e) {} }

function quando(t) {
  const d = new Date(t), hoje = new Date();
  const hora = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const dias = Math.floor((new Date(hoje.toDateString()) - new Date(d.toDateString())) / 864e5);
  if (dias === 0) return `Hoje · ${hora}`;
  if (dias === 1) return `Ontem · ${hora}`;
  return `${d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })} · ${hora}`;
}

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

/* ---------- menu lateral ---------- */
function desenharMenu() {
  const usadas = Object.keys(ESPECIALIDADES).filter(k => k !== "procedimentos" && FICHAS.some(f => f.especialidade === k));
  const item = (rota, icone, rotulo, extra = "") => `<a class="nav-item" href="#${rota}" data-rota="${rota}" ${extra}>${ic(icone)}<span>${rotulo}</span></a>`;
  document.getElementById("menu").innerHTML = `
    <nav aria-label="Principal">
      ${item("", "inicio", "Início")}
      ${item("pacientes", "usuario", "Pacientes")}
      ${item("favoritos", "estrela", "Favoritos")}
      ${item("historico", "relogio", "Histórico")}
      ${item("medicamentos", "pilula", "Medicamentos")}
      ${item("calculadoras", "calculadora", "Calculadoras")}
      ${item("documentos", "documento", "Documentos")}
      <a class="nav-item" href="#fichas" data-esp="procedimentos">${ic("bisturi")}<span>Procedimentos</span></a>
    </nav>
    <p class="nav-titulo">Especialidades</p>
    <nav aria-label="Especialidades" class="nav-esp">
      ${usadas.map(k => `<a class="nav-item" href="#fichas" data-esp="${k}">${ic(ICONE_ESP[k] || "estetoscopio")}<span>${ESPECIALIDADES[k]}</span></a>`).join("")}
    </nav>
    <p class="nav-titulo">Fichas rápidas</p>
    <nav aria-label="Fichas rápidas">
      <a class="nav-item" href="#fichas" data-cenario="ubs">${ic("casa")}<span>Atenção Primária (UBS)</span></a>
      <a class="nav-item" href="#fichas" data-cenario="ps">${ic("ambulancia")}<span>Pronto-Socorro (PS)</span></a>
    </nav>
    <nav aria-label="Configurações" class="nav-fim">${item("configuracoes", "config", "Configurações")}</nav>`;
  document.getElementById("menu").addEventListener("click", e => {
    const a = e.target.closest("a"); if (!a) return;
    if (a.dataset.esp) { e.preventDefault(); estado.especialidade = a.dataset.esp; salvar("pb-especialidade", a.dataset.esp); ir("fichas"); }
    else if (a.dataset.cenario) { e.preventDefault(); definirCaminho(a.dataset.cenario); estado.especialidade = "todas"; salvar("pb-especialidade", "todas"); ir("fichas"); }
    fecharMenu();
  });
}
function marcarMenu(h) {
  document.querySelectorAll("#menu .nav-item").forEach(a => {
    let ativo = false;
    if (a.dataset.rota !== undefined) ativo = a.dataset.rota === h || (a.dataset.rota === "documentos" && h.startsWith("doc-")) || (a.dataset.rota === "pacientes" && h.startsWith("pac-"));
    if (a.dataset.esp) ativo = h === "fichas" && estado.especialidade === a.dataset.esp;
    a.classList.toggle("ativo", ativo);
    if (ativo) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
}
const abrirMenu = () => document.body.classList.add("menu-aberto");
const fecharMenu = () => document.body.classList.remove("menu-aberto");

/* ---------- barra superior ---------- */
function definirCaminho(c) {
  estado.caminho = c;
  salvar("pb-caminho", c);
  document.querySelectorAll("#cenario button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.c === c)));
}
function avatar() {
  const p = Perfil.ler();
  const ini = (p.nome || "").split(" ").filter(Boolean).map(x => x[0]).slice(0, 2).join("").toUpperCase() || "?";
  const el = document.getElementById("btn-perfil");
  el.textContent = ini;
  el.title = `${Perfil.nomeCompleto()} · ${p.crm}`;
  document.getElementById("rodape-medico").textContent = `${Perfil.nomeCompleto()}  |  ${p.crm}`;
}

/* ---------- filtros e lista ---------- */
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
      <span class="sep"></span>
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

function itemFicha(f) {
  return `<button class="item" data-p="${f.caminho}" data-id="${f.id}" id="it-${f.id}">
    <i class="esp-label">${ESPECIALIDADES[f.especialidade]}${f.publico !== "adulto" ? ` · ${NOME_PUBLICO[f.publico]}` : ""}${Favoritos.tem(f.id) ? ` <span class="fav-dot" title="Favorito">★</span>` : ""}</i>
    <b>${esc(f.titulo)}</b><span>${esc(f.resumo)}</span>
    ${f.critico ? `<em class="crit">${esc(f.critico.tempo)}</em>` : ""}
  </button>`;
}

function telaLista() {
  const q = normalizar(estado.busca.trim());
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
      <div class="group-h"><h2>${NOME_CAMINHO[c]}</h2><p>${DESC_CAMINHO[c]} · ${itens.length} ficha${itens.length > 1 ? "s" : ""}</p></div>
      <div class="list">${itens.map(itemFicha).join("")}</div></section>`;
  }).join("");
  const titulo = estado.especialidade !== "todas" ? ESPECIALIDADES[estado.especialidade] : "Fichas clínicas";
  $app.innerHTML = `<div class="view">
    <div class="f-head"><h2>${titulo}</h2>${estado.busca ? `<p>Resultados para “${esc(estado.busca)}”</p>` : ""}</div>
    ${filtrosHTML()}
    ${grupos || `<p class="empty">Nenhuma ficha encontrada${estado.busca ? ` para “${esc(estado.busca)}”` : " com esses filtros"}.</p>`}
  </div>`;
  $app.querySelectorAll(".seg").forEach(b => b.onclick = () => {
    if (b.dataset.g === "caminho") definirCaminho(b.dataset.v);
    else { estado.publico = b.dataset.v; salvar("pb-publico", b.dataset.v); }
    telaLista();
  });
  $app.querySelectorAll(".esp-chip").forEach(b => b.onclick = () => {
    estado.especialidade = b.dataset.e; salvar("pb-especialidade", b.dataset.e); telaLista(); marcarMenu("fichas");
  });
  $app.querySelectorAll(".item").forEach(b => b.onclick = () => ir(b.dataset.id));
}

/* ---------- início (dashboard) ---------- */
const DICAS = [
  "Pressione Ctrl + K (ou /) para buscar de qualquer tela.",
  "Preencha o paciente (peso, creatinina, gestação, alergias e medicações) e cada ficha mostra doses e alertas personalizados.",
  "Na aba Prescrição, “Abrir no receituário” leva a prescrição pronta para o documento.",
  "Marque com a estrela as fichas que você mais usa: elas aparecem em Favoritos.",
  "Use a busca por voz (microfone na barra de busca) quando estiver com as mãos ocupadas."
];
const DESTAQUES = [["sca", "coracao", "ps"], ["sepse", "virus", "ps"], ["has-ubs", "coracao", "ubs"], ["diabetes-tipo-2", "gota", "ubs"]];
const CENARIOS = {
  ubs: [["puericultura", "Puericultura"], ["prenatal-baixo-risco", "Gestação"], ["has-ubs", "Hipertensão"], ["diabetes-tipo-2", "Diabetes"], ["depressao-ansiedade", "Saúde mental"]],
  ps: [["sca", "Dor torácica"], ["avc", "AVC"], ["tce-moderado-grave", "Trauma"], ["sepse", "Sepse"], ["pcr-adulto", "PCR"]]
};

function saudacao() {
  const h = new Date().getHours();
  return h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
}

function telaInicio() {
  const hist = Historico.lista().filter(x => fichaPorId(x.id)).slice(0, 5);
  const favs = Favoritos.lista().filter(fichaPorId);
  const dica = DICAS[new Date().getDate() % DICAS.length];
  const card = (rota, icone, titulo, texto, cor) => `<a class="mod-card ${cor}" href="#${rota}"><span class="mod-ic">${ic(icone)}</span><b>${titulo}</b><span>${texto}</span></a>`;
  const cenario = (c, icone, titulo, sub) => `<div class="cenario ${c}">
      <button class="cen-h" data-cen="${c}">${ic(icone, "ic cen-ic")}<span><b>${titulo}</b><small>${sub}</small></span>${ic("seta")}</button>
      <div class="cen-chips">${CENARIOS[c].filter(([id]) => fichaPorId(id)).map(([id, n]) => `<a class="cchip" href="#${id}">${n}</a>`).join("")}</div>
    </div>`;
  $app.innerHTML = `<div class="view inicio">
    <div class="ini-principal">
      <section class="hero">
        <div><h2>${saudacao()}, ${esc(Perfil.primeiroNome())}!</h2><p>Seu apoio rápido e seguro na prática clínica.</p></div>
        <p class="hero-frase">“Conhecimento no momento certo faz toda a diferença.”</p>
      </section>
      <div class="mod-grid">
        ${card("fichas", "estetoscopio", "Busca clínica", "Sintomas, diagnósticos e diferenciais", "c1")}
        ${card("medicamentos", "pilula", "Medicamentos", "Doses, ajuste renal, gestação e interações", "c2")}
        ${card("calculadoras", "calculadora", "Calculadoras", "Função renal, peso, hidratação e escores", "c3")}
        ${card("documentos", "documento", "Documentos", "Atestado, receita, admissão e evolução", "c4")}
        ${card("pacientes", "usuario", "Pacientes", "Prontuário de acompanhamento com exames, medicações e alertas", "c5")}
        <a class="mod-card c6" href="#fichas" data-esp-card="procedimentos"><span class="mod-ic">${ic("bisturi")}</span><b>Procedimentos</b><span>Passo a passo, materiais e checagens</span></a>
      </div>
      <section class="painel">
        <h3>Acesso rápido por cenário</h3>
        <div class="cen-grid">${cenario("ubs", "casa", "UBS", "Atenção Primária")}${cenario("ps", "ambulancia", "Pronto-Socorro", "Urgência e Emergência")}</div>
      </section>
      <section class="painel">
        <div class="painel-h"><h3>Últimos acessados</h3>${hist.length ? `<a href="#historico" class="link-btn">Ver todos →</a>` : ""}</div>
        ${hist.length ? `<div class="recentes">${hist.map(x => { const f = fichaPorId(x.id); return `
          <a class="recente" href="#${f.id}"><span class="rec-ic ${f.caminho}">${ic(ICONE_ESP[f.especialidade] || "estetoscopio")}</span>
            <span class="rec-t"><b>${esc(f.titulo)}</b><small>${ESPECIALIDADES[f.especialidade]}</small></span>
            <span class="tag-cam ${f.caminho}">${f.caminho === "ps" ? "PS" : "UBS"}</span>
            <span class="rec-q">${quando(x.t)}</span>${ic("seta")}</a>`; }).join("")}</div>`
          : `<p class="empty">As fichas que você abrir aparecem aqui.</p>`}
      </section>
    </div>
    <aside class="ini-lateral">
      <section class="atencao">${ic("alerta", "ic at-ic")}<div><b>Atenção</b><p>Reavalie sempre sinais de gravidade e siga os protocolos institucionais. Confira doses antes de prescrever.</p></div></section>
      <section class="painel">
        <h3>Indicadores</h3>
        <div class="ind-grid">
          <a class="ind" href="#fichas">${ic("documento")}<b>${FICHAS.length}</b><span>Fichas</span></a>
          <a class="ind" href="#documentos">${ic("documento")}<b>${DOCUMENTOS.length}</b><span>Documentos</span></a>
          <a class="ind" href="#favoritos">${ic("estrela")}<b>${favs.length}</b><span>Favoritos</span></a>
          <a class="ind" href="#historico">${ic("relogio")}<b>${Historico.lista().length}</b><span>Histórico</span></a>
        </div>
      </section>
      <section class="painel">
        <h3>Módulos em destaque</h3>
        <div class="destaques">${DESTAQUES.filter(([id]) => fichaPorId(id)).map(([id, icone]) => { const f = fichaPorId(id); return `
          <a class="destaque" href="#${id}"><span class="rec-ic ${f.caminho}">${ic(icone)}</span><span><b>${esc(f.titulo)}</b><small>${esc(f.resumo).slice(0, 70)}${f.resumo.length > 70 ? "…" : ""}</small></span></a>`; }).join("")}</div>
        <a href="#fichas" class="link-btn">Ver todas as fichas →</a>
      </section>
      <section class="dica">${ic("lampada", "ic dica-ic")}<div><b>Dica do dia</b><p>${dica}</p></div></section>
    </aside>
  </div>`;
  $app.querySelectorAll("[data-esp-card]").forEach(a => a.onclick = e => {
    e.preventDefault(); estado.especialidade = a.dataset.espCard; salvar("pb-especialidade", a.dataset.espCard); ir("fichas");
  });
  $app.querySelectorAll("[data-cen]").forEach(b => b.onclick = () => {
    definirCaminho(b.dataset.cen); estado.especialidade = "todas"; salvar("pb-especialidade", "todas"); ir("fichas");
  });
}

/* ---------- favoritos e histórico ---------- */
function telaColecao(tipo) {
  const ids = tipo === "favoritos" ? Favoritos.lista() : Historico.lista().map(x => x.id);
  const itens = ids.map(fichaPorId).filter(Boolean);
  const hist = Historico.lista();
  $app.innerHTML = `<div class="view">
    <div class="f-head"><h2>${tipo === "favoritos" ? "Favoritos" : "Histórico"}</h2>
      <p>${tipo === "favoritos" ? "Fichas marcadas com a estrela. Ficam salvas neste navegador." : "Fichas abertas recentemente neste navegador."}</p></div>
    ${itens.length ? (tipo === "historico"
      ? `<div class="recentes">${hist.filter(x => fichaPorId(x.id)).map(x => { const f = fichaPorId(x.id); return `
          <a class="recente" href="#${f.id}"><span class="rec-ic ${f.caminho}">${ic(ICONE_ESP[f.especialidade] || "estetoscopio")}</span>
          <span class="rec-t"><b>${esc(f.titulo)}</b><small>${ESPECIALIDADES[f.especialidade]}</small></span>
          <span class="tag-cam ${f.caminho}">${f.caminho === "ps" ? "PS" : "UBS"}</span><span class="rec-q">${quando(x.t)}</span>${ic("seta")}</a>`; }).join("")}</div>
          <button class="link-btn gap-top" id="limpar-hist">Limpar histórico</button>`
      : `<div class="list">${itens.map(itemFicha).join("")}</div>`)
      : `<p class="empty">${tipo === "favoritos" ? "Nenhum favorito ainda. Abra uma ficha e toque na estrela." : "Nenhuma ficha aberta ainda."}</p>`}
  </div>`;
  $app.querySelectorAll(".item").forEach(b => b.onclick = () => ir(b.dataset.id));
  const lh = document.getElementById("limpar-hist");
  if (lh) lh.onclick = () => { Historico.limpar(); telaColecao("historico"); };
}

/* ---------- configurações ---------- */
function telaConfiguracoes() {
  const p = Perfil.ler();
  const campo = (k, rot, dica = "") => `<label class="campo" for="cfg-${k}"><span>${rot}</span><input id="cfg-${k}" data-k="${k}" value="${esc(p[k])}" placeholder="${esc(dica)}"></label>`;
  $app.innerHTML = `<div class="view">
    <div class="f-head"><h2>Configurações</h2><p>Seus dados aparecem na saudação, no rodapé e nos documentos. Ficam salvos só neste navegador.</p></div>
    <form class="form-doc cfg" id="cfg-form">
      <label class="campo" for="cfg-tratamento"><span>Tratamento</span><select id="cfg-tratamento" data-k="tratamento">
        ${["Dra.", "Dr.", ""].map(t => `<option value="${t}" ${p.tratamento === t ? "selected" : ""}>${t || "(nenhum)"}</option>`).join("")}</select></label>
      ${campo("nome", "Nome")}
      ${campo("crm", "CRM / UF", "Ex.: CRM-MS 16.871")}
      ${campo("rqe", "RQE (se especialista)")}
      ${campo("servico", "Serviço / unidade", "Ex.: UBS Vila Nova")}
      ${campo("cidade", "Cidade / UF", "Ex.: Campo Grande / MS")}
    </form>
    <p class="aviso" id="cfg-ok" hidden>Salvo.</p>
    <div class="sec gap-top"><h3>Tema</h3>
      <div class="seg-row">${[["", "Automático"], ["light", "Claro"], ["dark", "Escuro"]].map(([v, n]) => `<button class="seg" data-tema="${v}" aria-pressed="${(document.documentElement.dataset.theme || "") === v}">${n}</button>`).join("")}</div>
    </div>
    <div class="sec gap-top"><h3>Dados deste navegador</h3>
      <div class="seg-row"><button class="seg" id="cfg-limpar-fav">Limpar favoritos</button><button class="seg" id="cfg-limpar-hist">Limpar histórico</button></div>
    </div>
    <p class="disclaimer">Licia Minatti v${VERSAO} · ${FICHAS.length} fichas · suporte à decisão clínica, não substitui o julgamento médico.</p>
  </div>`;
  const form = document.getElementById("cfg-form");
  const salvarCfg = () => {
    const novo = { ...Perfil.ler() };
    form.querySelectorAll("[data-k]").forEach(i => novo[i.dataset.k] = i.value.trim());
    Perfil.salvar(novo); avatar();
    const ok = document.getElementById("cfg-ok"); ok.hidden = false; clearTimeout(ok._t); ok._t = setTimeout(() => ok.hidden = true, 1200);
  };
  form.addEventListener("input", salvarCfg); form.addEventListener("change", salvarCfg); form.addEventListener("submit", e => e.preventDefault());
  $app.querySelectorAll("[data-tema]").forEach(b => b.onclick = () => {
    if (b.dataset.tema) document.documentElement.dataset.theme = b.dataset.tema; else delete document.documentElement.dataset.theme;
    salvar("pb-tema", b.dataset.tema); telaConfiguracoes();
  });
  document.getElementById("cfg-limpar-fav").onclick = () => { try { localStorage.removeItem("pb-favoritos"); } catch (e) {} telaConfiguracoes(); };
  document.getElementById("cfg-limpar-hist").onclick = () => { Historico.limpar(); telaConfiguracoes(); };
}

/* ---------- ficha ---------- */
function cabecalhoFicha(f) {
  const fav = Favoritos.tem(f.id);
  return `<button class="back" id="voltar">← Voltar</button>
    <div class="f-head">
      <div class="chips">
        <span class="chip ${f.caminho}">${NOME_CAMINHO[f.caminho]}</span>
        <span class="chip">${ESPECIALIDADES[f.especialidade]}</span>
        <span class="chip">${NOME_PUBLICO[f.publico]}</span>
        <span class="chip">v${esc(f.versao)} · ${dataBR(f.revisao)}</span>
      </div>
      <div class="f-titulo"><h2>${esc(f.titulo)}</h2>
        <button class="fav-btn" id="fav" aria-pressed="${fav}" title="${fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}">${ic("estrela")}<span>${fav ? "Favorito" : "Favoritar"}</span></button></div>
      <p>${esc(f.resumo)}</p>
    </div>`;
}

function faixaCritica(f) {
  return f.critico ? `<div class="crit-band"><span class="t">${esc(f.critico.tempo)}</span><span class="d">${esc(f.critico.texto)}</span></div>` : "";
}

function telaFicha(f, modo = "rapida", aba = "clinica") {
  contadorCopia = 0;
  zerarAtualizadores();
  const alertas = contarAlertasFicha(f);
  if (f.formato === "curto" || f.formato === "procedimento") {
    $app.innerHTML = `<div class="view">${cabecalhoFicha(f)}${f.formato === "curto" ? fichaCurta(f) : fichaProcedimento(f)}</div>`;
    ligarSecaoFicha($app);
  } else {
    $app.innerHTML = `<div class="view">${cabecalhoFicha(f)}
      <div class="switch" role="tablist" aria-label="Modo de visualização">
        <button role="tab" id="m-rapida" aria-selected="${modo === "rapida"}">Vista rápida</button>
        <button role="tab" id="m-completa" aria-selected="${modo === "completa"}">Ficha completa</button>
      </div>
      ${modo === "rapida" ? vistaRapida(f, alertas) : vistaCompleta(f, aba, alertas)}
    </div>`;
    document.getElementById("m-rapida").onclick = () => telaFicha(f, "rapida");
    document.getElementById("m-completa").onclick = () => telaFicha(f, "completa", aba);
    const abrir = document.getElementById("open-full");
    if (abrir) abrir.onclick = () => { telaFicha(f, "completa", "clinica"); window.scrollTo(0, 0); };
    const calcAtalho = document.getElementById("ir-calculos");
    if (calcAtalho) calcAtalho.onclick = () => telaFicha(f, "completa", "calculos");
    $app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => telaFicha(f, "completa", b.dataset.tab));
    const abaAtiva = $app.querySelector('.tabs [aria-selected="true"]');
    if (abaAtiva) abaAtiva.scrollIntoView({ block: "nearest", inline: "center" });
    if (aba === "calculos" && modo === "completa") ligarSecaoFicha($app);
  }
  document.getElementById("voltar").onclick = () => history.length > 1 ? history.back() : ir("fichas");
  document.getElementById("fav").onclick = () => { Favoritos.alternar(f.id); telaFicha(f, modo, aba); };
  $app.querySelectorAll("[data-rx]").forEach(b => b.onclick = () => ir(`doc-${b.dataset.rx}`, { ficha: f.id }));
  ligarCopias();
}

function vistaRapida(f, alertas) {
  const primeiraLinha = f.tratamento.filter(t => t.linha === "l1").slice(0, 4);
  const nScores = scoresDaFicha(f.id).length;
  return `${faixaCritica(f)}
  ${alertas ? `<button class="alerta-pac" id="ir-calculos">${ic("alerta")}<span><b>${alertas} alerta${alertas > 1 ? "s" : ""} para o paciente informado</b> (gestação, rim, alergia ou interação). Ver em Calculadoras e segurança →</span></button>` : ""}
  <div class="quick">
    <div class="q alarm"><h3>Sinais de alarme</h3><ul>${lista(f.alarmes)}</ul></div>
    <div class="q act"><h3>Primeira conduta</h3><ol>${lista(f.condutaInicial)}</ol></div>
    <div class="q fatal"><h3>Diagnósticos fatais a excluir</h3><ul>${lista(f.fataisExcluir)}</ul></div>
    <div class="q"><h3>Doses de 1ª linha</h3><ul>${primeiraLinha.map(t =>
      `<li><b>${esc(t.droga)}</b><br><span class="mono">${esc(t.dose)}</span> · ${esc(t.via)}</li>`).join("")}</ul></div>
    <div class="q next"><h3>Próxima decisão</h3><p>${esc(f.proximaDecisao)}</p></div>
  </div>
  <div class="acoes-ficha">
    <button class="open-full" id="open-full">Abrir ficha completa →</button>
    ${!alertas ? `<button class="open-full sec-btn" id="ir-calculos">${ic("calculadora")} Doses${nScores ? ", escores" : ""} e segurança</button>` : ""}
  </div>`;
}

function vistaCompleta(f, aba, alertas) {
  const nav = `<nav class="tabs" role="tablist">${ABAS.map(([k, n]) =>
    `<button role="tab" data-tab="${k}" id="t-${k}" aria-selected="${k === aba}">${n}${k === "calculos" && alertas ? ` <span class="badge">${alertas}</span>` : ""}</button>`).join("")}</nav>`;
  const conteudo = { clinica: abaClinica, exames: abaExames, tratamento: abaTratamento, prescricao: abaPrescricao, calculos: secaoCalculadorasFicha, destino: abaDestino, fontes: abaFontes }[aba](f);
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
    <p class="note">Confira a apresentação disponível no seu serviço antes de calcular volumes. Use a aba Calculadoras e segurança para dose por peso, ajuste renal e alertas.</p></div>`;
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
    ["now", "O que fazer agora", d.agora], ["re", "Quando reavaliar", d.reavaliar], ["al", "Critérios de alta", d.alta],
    ["ob", "Observação", d.observacao], ["in", "Internação", d.internacao], ["tx", "Encaminhamento e transferência", d.transferencia],
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
  <div class="dest">${caixas([["ret", "Orientações ao paciente e retorno", f.orientacoesRetorno], ["tx", "Quando encaminhar", f.encaminhar]])}</div>
  ${tabelasHTML(f.tabelas)}
  <details class="bloco-calc gap-top" ${contarAlertasFicha(f) ? "open" : ""}><summary>${ic("calculadora")} Calculadoras e segurança${contarAlertasFicha(f) ? ` <span class="badge">${contarAlertasFicha(f)}</span>` : ""}</summary>${secaoCalculadorasFicha(f)}</details>
  ${abaFontes(f)}`;
}

/* Procedimento: listas de checagem marcáveis (não são salvas; servem para conferir na hora). */
function checklist(arr, prefixo) {
  return `<ul class="checklist">${(arr || []).map((x, i) =>
    `<li><label><input type="checkbox" id="${prefixo}-${i}"><span>${esc(x)}</span></label></li>`).join("")}</ul>`;
}

function fichaProcedimento(f) {
  const q = (cls, titulo, arr) => arr && arr.length ? `<div class="q ${cls}"><h3>${titulo}</h3><ul>${lista(arr)}</ul></div>` : "";
  const relacionadas = (f.relacionadas || []).map(fichaPorId).filter(Boolean);
  const nAlertas = contarAlertasFicha(f);
  let n = 0;
  return `${faixaCritica(f)}
  <div class="quick">
    ${q("act", "Indicações", f.indicacoes)}
    ${q("fatal", "Contraindicações", f.contraindicacoes)}
    ${q("alarm", "Interromper / chamar ajuda se", f.alarmes)}
  </div>
  <div class="proc-grid gap-top">
    <div class="sec card proc-mat"><h3>Materiais</h3>${checklist(f.materiais, `${f.id}-mat`)}</div>
    <div class="sec card proc-chk"><h3>Conferir antes de começar</h3>${checklist(f.checagemAntes, `${f.id}-antes`)}</div>
  </div>
  <div class="sec gap-top"><h3>Passo a passo</h3>
    ${f.passos.map(p => `<div class="card passo"><div class="card-h"><b>${esc(p.etapa)}</b></div>
      <ol class="passos" start="${n + 1}">${p.itens.map(x => { n++; return `<li>${esc(x)}</li>`; }).join("")}</ol></div>`).join("")}
  </div>
  <div class="proc-grid gap-top">
    <div class="sec card proc-chk"><h3>Conferir depois</h3>${checklist(f.conferirDepois, `${f.id}-depois`)}</div>
    <div class="sec card proc-comp"><h3>Complicações e como agir</h3><ul>${lista(f.complicacoes)}</ul></div>
  </div>
  ${tabelasHTML(f.tabelas)}
  <div class="sec gap-top"><h3>Registro no prontuário</h3>${blocoCopiavel(f.documentacao, "Descrição do procedimento")}</div>
  ${f.prescricao ? `<div class="sec gap-top"><h3>Prescrição</h3>${blocosPrescricao(f)}</div>` : ""}
  <div class="dest">${caixas([["ret", "Orientações ao paciente e retorno", f.orientacoesRetorno]])}</div>
  ${relacionadas.length ? `<div class="sec gap-top"><h3>Fichas relacionadas</h3><div class="cen-chips">${relacionadas.map(r => `<a class="cchip" href="#${r.id}">${esc(r.titulo)}</a>`).join("")}</div></div>` : ""}
  ${nAlertas || medicamentosDaFicha(f).length ? `<details class="bloco-calc gap-top" ${nAlertas ? "open" : ""}><summary>${ic("calculadora")} Calculadoras e segurança${nAlertas ? ` <span class="badge">${nAlertas}</span>` : ""}</summary>${secaoCalculadorasFicha(f)}</details>` : ""}
  ${abaFontes(f)}`;
}

/* ---------- navegação ---------- */
let contextoDocumento = {};
function ir(id, contexto = {}) {
  contextoDocumento = { ...contexto, alvo: id };
  window.scrollTo(0, 0);
  if (location.hash.slice(1) !== id) { if (id) location.hash = id; else { history.pushState(null, "", location.pathname + location.search); rota(); } return; }
  rota();
}
function rota() {
  const h = location.hash.slice(1);
  zerarAtualizadores();
  marcarMenu(h);
  fecharMenu();
  document.body.dataset.tela = h ? (fichaPorId(h) ? "ficha" : h.split("-")[0]) : "inicio";
  if (h === "documentos" || h.startsWith("doc-")) {
    telaDocumentos(h === "documentos" ? null : h.slice(4), contextoDocumento.alvo === h ? contextoDocumento : {});
    return;
  }
  contextoDocumento = {};
  if (h === "pacientes") { telaPacientes(); return; }
  if (h.startsWith("pac-")) { telaPaciente(h.slice(4)); return; }
  const f = fichaPorId(h);
  if (f) { Historico.registrar(f.id); telaFicha(f); return; }
  ({ fichas: telaLista, favoritos: () => telaColecao("favoritos"), historico: () => telaColecao("historico"),
     medicamentos: telaMedicamentos, calculadoras: telaCalculadoras, configuracoes: telaConfiguracoes }[h] || telaInicio)();
}

/* ---------- busca (texto e voz) e atalhos ---------- */
$busca.addEventListener("input", () => {
  estado.busca = $busca.value;
  if (location.hash.slice(1) !== "fichas") {
    estado.especialidade = "todas";
    location.hash = "fichas";
  } else telaLista();
});
document.addEventListener("keydown", e => {
  const digitando = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !digitando)) { e.preventDefault(); $busca.focus(); $busca.select(); }
  else if (e.key === "Escape") {
    if (document.body.classList.contains("menu-aberto")) fecharMenu();
    else if (document.activeElement === $busca && $busca.value) { $busca.value = ""; estado.busca = ""; if (location.hash === "#fichas") telaLista(); }
    else if (digitando) document.activeElement.blur();
  }
});
const Reconhecimento = window.SpeechRecognition || window.webkitSpeechRecognition;
const $mic = document.getElementById("btn-voz");
if (Reconhecimento) {
  $mic.hidden = false;
  $mic.onclick = () => {
    const r = new Reconhecimento();
    r.lang = "pt-BR"; r.interimResults = false;
    $mic.classList.add("ouvindo");
    r.onresult = ev => { $busca.value = ev.results[0][0].transcript; $busca.dispatchEvent(new Event("input")); };
    r.onend = () => $mic.classList.remove("ouvindo");
    r.onerror = () => $mic.classList.remove("ouvindo");
    try { r.start(); } catch (err) { $mic.classList.remove("ouvindo"); }
  };
}

/* ---------- inicialização ---------- */
try { const t = localStorage.getItem("pb-tema"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
document.getElementById("btn-menu").onclick = abrirMenu;
document.getElementById("fundo-menu").onclick = fecharMenu;
document.getElementById("btn-perfil").onclick = () => ir("configuracoes");
document.getElementById("chip-paciente").onclick = () => ir("calculadoras");
document.querySelectorAll("#cenario button").forEach(b => b.onclick = () => {
  // Tocar de novo no cenário ativo volta para "Todos" (no celular o botão Todos fica oculto).
  definirCaminho(b.dataset.c !== "todos" && estado.caminho === b.dataset.c ? "todos" : b.dataset.c);
  if (location.hash === "#fichas") telaLista(); else if (!location.hash) telaInicio();
});
document.getElementById("rodape-versao").textContent = `v${VERSAO}`;
desenharMenu();
definirCaminho(estado.caminho);
avatar();
atualizarChipPaciente();
window.addEventListener("hashchange", rota);
window.addEventListener("popstate", rota);
rota();

/* ---------- uso offline (PWA) ---------- */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(err => console.warn("Service worker não registrado:", err));
}
