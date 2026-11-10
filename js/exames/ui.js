/* Exames — tela (rota #exames).
   Abas: Interpretar (foto/PDF/texto/digitação → valores, referência, alterações, hipóteses; laudos de imagem → achados e HD),
   Laboratoriais (catálogo), Imagem e gráficos (indicação, quando não pedir, como solicitar), Solicitação (monta o pedido).
   Leitura de arquivos neste aparelho (pdf.js/OCR do módulo Vaga Zero); nada é enviado a servidor. */

const EX_ABAS = [["interpretar", "Interpretar resultados"], ["lab", "Laboratoriais"], ["imagem", "Imagem e gráficos"], ["solicitar", "Solicitação"]];
const EX_ST = {
  "critico-baixo": ["vz-critico", "↓↓ crítico"], "critico-alto": ["vz-critico", "↑↑ crítico"], baixo: ["vz-atencao", "↓ baixo"], alto: ["vz-alto", "↑ alto"],
  normal: ["vz-ok", "normal"], "sem-ref": ["vz-info", "sem referência"], indefinido: ["vz-info", "—"]
};
const EX_PACOTES = [
  ["Check-up adulto (UBS)", ["hemoglobina", "glicemia-jejum", "hba1c", "colesterol-total", "ldl", "hdl", "triglicerides", "creatinina", "tsh", "leucocitos-urina", "nitrito"]],
  ["Pré-natal 1º trimestre", ["hemoglobina", "glicemia-jejum", "vdrl", "hiv", "hbsag", "anti-hcv", "toxoplasmose-igg-igm", "rubeola-igm", "tsh", "urocultura", "usg-obstetrica"]],
  ["Sepse / infecção grave", ["hemoglobina", "leucocitos", "plaquetas", "pcr", "lactato", "creatinina", "ureia", "bilirrubina-total", "tp-inr", "ph", "bicarbonato", "leucocitos-urina", "urocultura", "rx-torax"]],
  ["Dor torácica (PS)", ["ecg", "troponina", "hemoglobina", "creatinina", "potassio", "d-dimero", "rx-torax"]],
  ["Dor abdominal (PS)", ["hemoglobina", "leucocitos", "pcr", "lipase", "tgo", "tgp", "bilirrubina-total", "fosfatase-alcalina", "creatinina", "leucocitos-urina", "beta-hcg-qualitativo", "usg-abdome-total"]],
  ["Dengue (grupos B/C)", ["hemoglobina", "hematocrito", "plaquetas", "leucocitos", "albumina", "tgo", "tgp", "dengue-ns1", "dengue-igm"]]
];

let EX_ESTADO = (() => {
  const base = { aba: "interpretar", idade: "", idadeUnidade: "anos", sexo: "", gestante: "", texto: "", manual: {}, busca: "", cat: "", buscaImg: "", catImg: "", sel: [], hd: "", cid: "", clinica: "", status: "" };
  try { return { ...base, ...JSON.parse(sessionStorage.getItem("ex-estado") || "{}"), status: "" }; } catch (e) { return base; }
})();
const exSalvar = () => { try { sessionStorage.setItem("ex-estado", JSON.stringify(EX_ESTADO)); } catch (e) {} };

const exCtx = () => {
  const e = EX_ESTADO, n = parseFloat(String(e.idade).replace(",", "."));
  const idadeAnos = isFinite(n) ? (e.idadeUnidade === "meses" ? n / 12 : e.idadeUnidade === "dias" ? n / 365.25 : n) : undefined;
  return { idadeAnos, sexo: e.sexo || undefined, gestante: e.gestante === "sim" };
};
const exAcharLab = id => EXAMES_LAB.find(e => e.id === id);
const exAcharImg = id => EXAMES_IMAGEM.find(e => e.id === id);
const exFicha = id => (typeof FICHAS !== "undefined" ? FICHAS.find(f => f.id === id) : null);
const exChipsFichas = (ids, cls = "") => {
  const fs = [...new Set(ids || [])].map(exFicha).filter(Boolean);
  return fs.length ? `<div class="hp-chips">${fs.map(f => `<a class="cchip ${cls}" href="#${f.id}">${esc(f.titulo)}</a>`).join("")}</div>` : "";
};
const exLista = (arr, cls = "") => (arr || []).length ? `<ul class="${cls}">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
const exValorTxt = r => r.qualitativo ? (r.qualitativo === "positivo" ? "Reagente/positivo" : r.qualitativo === "negativo" ? "Não reagente/negativo" : "Indeterminado") + (r.titulo ? ` (${r.titulo})` : "")
  : `${exFmt(r.valor, 2)}${r.unidade ? " " + r.unidade : ""}`;

function telaExames(aba) {
  if (aba) EX_ESTADO.aba = aba;
  const k = EX_ABAS.some(a => a[0] === EX_ESTADO.aba) ? EX_ESTADO.aba : "interpretar";
  const nSel = EX_ESTADO.sel.length;
  $app.innerHTML = `<div class="view ex">
    <div class="f-head"><h2>Exames</h2><p>${EXAMES_LAB.length} laboratoriais e ${EXAMES_IMAGEM.length} de imagem, ECG e endoscopia: valores de referência, interpretação de resultados e laudos, indicações e como escrever a solicitação.</p></div>
    <nav class="tabs ex-tabs" role="tablist">${EX_ABAS.map(([c, n]) => `<button role="tab" data-extab="${c}" aria-selected="${c === k}">${n}${c === "solicitar" && nSel ? ` <span class="badge">${nSel}</span>` : ""}</button>`).join("")}</nav>
    <div id="ex-conteudo">${({ interpretar: exAbaInterpretar, lab: exAbaLab, imagem: exAbaImagem, solicitar: exAbaSolicitar })[k]()}</div>
  </div>`;
  $app.querySelectorAll("[data-extab]").forEach(b => b.onclick = () => { EX_ESTADO.aba = b.dataset.extab; exSalvar(); telaExames(); window.scrollTo(0, 0); });
  ({ interpretar: exLigarInterpretar, lab: exLigarLab, imagem: exLigarImagem, solicitar: exLigarSolicitar })[k]();
  exLigarSelecao();
  ligarCopias();
}

/* ---------- botão "adicionar à solicitação" (todas as abas) ---------- */
const exBotaoSel = id => {
  const tem = EX_ESTADO.sel.includes(id);
  return `<button class="seg ex-sel ${tem ? "on" : ""}" type="button" data-exsel="${esc(id)}" aria-pressed="${tem}">${tem ? "✓ Na solicitação" : "+ Solicitação"}</button>`;
};
function exLigarSelecao() {
  $app.querySelectorAll("[data-exsel]").forEach(b => b.onclick = ev => {
    ev.preventDefault(); ev.stopPropagation();
    const id = b.dataset.exsel, i = EX_ESTADO.sel.indexOf(id);
    if (i >= 0) EX_ESTADO.sel.splice(i, 1); else EX_ESTADO.sel.push(id);
    exSalvar();
    const tem = i < 0;
    b.classList.toggle("on", tem); b.setAttribute("aria-pressed", tem); b.textContent = tem ? "✓ Na solicitação" : "+ Solicitação";
    const t = $app.querySelector('[data-extab="solicitar"]');
    if (t) t.innerHTML = `Solicitação${EX_ESTADO.sel.length ? ` <span class="badge">${EX_ESTADO.sel.length}</span>` : ""}`;
  });
}

/* ---------- Interpretar ---------- */
const EX_EXEMPLO_LAB = `HEMOGRAMA COMPLETO
Hemoglobina: 9,1 g/dL   (12,0 a 15,5)
Hematócrito: 28,4 %   (36,0 a 46,0)
VCM: 71 fL   (80 a 100)
Leucócitos: 13.800 /mm³   (4.000 a 11.000)
Plaquetas: 412.000 /mm³   (150.000 a 450.000)
Ferritina: 6 ng/mL   (15 a 150)
Creatinina: 1,9 mg/dL   (0,6 a 1,1)
Ureia: 96 mg/dL
Potássio: 5,9 mEq/L   (3,5 a 5,0)
Sódio: 132 mEq/L   (135 a 145)
PCR: 48 mg/L   (até 5)`;
const EX_EXEMPLO_IMG = `TOMOGRAFIA COMPUTADORIZADA DE CRÂNIO SEM CONTRASTE
Técnica: aquisição helicoidal sem contraste.
Achados: Coleção hiperdensa extra-axial em crescente na convexidade frontoparietal esquerda, compatível com hematoma subdural agudo, com espessura de 12 mm.
Desvio da linha média de 6 mm para a direita. Não há sinais de fratura. Sem hemorragia subaracnoidea.
Impressão diagnóstica: hematoma subdural agudo à esquerda com efeito de massa.`;

function exAbaInterpretar() {
  const e = EX_ESTADO;
  const opts = EXAMES_LAB.map(x => `<option value="${esc(x.nome)}">`).join("");
  const manual = Object.entries(e.manual).map(([id, v]) => { const x = exAcharLab(id); return x ? `<span class="hp-chip">${esc(x.nome)}: ${esc(v)} <button type="button" class="ex-x" data-exrm="${esc(id)}" aria-label="Remover ${esc(x.nome)}">×</button></span>` : ""; }).join("");
  return `
    <div class="vz-aviso" role="note">${ic("alerta")}<span><b>Apoio à interpretação.</b> Vale o intervalo de referência impresso no laudo do laboratório (o sistema usa o do laudo quando consegue ler; senão, o do catálogo). Resultados devem ser interpretados com o quadro clínico. Imagens radiológicas não são analisadas pixel a pixel: o sistema lê o <b>texto do laudo</b>.</span></div>
    <section class="vz-card">
      <h3>Paciente</h3>
      <div class="form-doc hp-perfil">
        <label class="campo"><span>Idade</span><span class="vz-dupla"><input id="ex-idade" inputmode="decimal" value="${esc(e.idade)}"><select id="ex-idade-u">${["anos", "meses", "dias"].map(u => `<option ${e.idadeUnidade === u ? "selected" : ""}>${u}</option>`).join("")}</select></span></label>
        <label class="campo"><span>Sexo</span><select id="ex-sexo">${[["", "—"], ["F", "Feminino"], ["M", "Masculino"]].map(([v, t]) => `<option value="${v}" ${e.sexo === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
        <label class="campo"><span>Gestação</span><select id="ex-gest">${[["", "—"], ["nao", "Não"], ["sim", "Gestante"]].map(([v, t]) => `<option value="${v}" ${e.gestante === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
      </div>
      <p class="note">Idade, sexo e gestação mudam o intervalo de referência (ex.: hemoglobina, creatinina, fosfatase alcalina na criança).</p>
    </section>
    <section class="vz-card">
      <h3>Anexar exame</h3>
      <p class="note">Foto ou PDF de resultado laboratorial ou de laudo (TC, RX, USG, RM, ECG, endoscopia). A leitura acontece <b>neste aparelho</b> (texto do PDF ou OCR em português); nenhum arquivo é enviado a servidor nem guardado. Confira o texto reconhecido abaixo antes de analisar.</p>
      <div class="vz-upload">
        <label class="vz-btn-grande" for="ex-arquivo">${ic("documento")} Foto ou PDF<input type="file" id="ex-arquivo" accept="image/*,application/pdf" multiple hidden></label>
        <label class="vz-btn-grande" for="ex-camera">${ic("olho")} Fotografar exame<input type="file" id="ex-camera" accept="image/*" capture="environment" hidden></label>
      </div>
      <p id="ex-status" class="vz-status" aria-live="polite">${esc(e.status)}</p>
      <label class="campo largo" for="ex-texto"><span>Texto do resultado ou laudo (pode colar ou digitar)</span>
        <textarea id="ex-texto" rows="7" placeholder="Ex.: Hemoglobina 10,2 g/dL · Creatinina 1,8 mg/dL · Potássio 5,8 · TGO 120 TGP 210 ... ou o texto do laudo da tomografia.">${esc(e.texto)}</textarea></label>
      <div class="hp-ex"><button class="cchip" type="button" data-exexemplo="lab">Exemplo: laboratoriais</button><button class="cchip" type="button" data-exexemplo="img">Exemplo: laudo de TC</button></div>
      <details class="vz-sec" ${manual ? "open" : ""}><summary>Digitar valores um a um</summary>
        <div class="ex-manual"><label class="campo"><span>Exame</span><input id="ex-m-nome" list="ex-lista-lab" placeholder="Ex.: Potássio"><datalist id="ex-lista-lab">${opts}</datalist></label>
          <label class="campo"><span>Resultado</span><input id="ex-m-valor" placeholder="número ou positivo/negativo"></label>
          <button class="seg" id="ex-m-add" type="button">Adicionar</button></div>
        <div class="hp-chips" id="ex-manual-lista">${manual}</div></details>
      <div class="vz-acoes-linha"><button class="vz-btn-grande" id="ex-analisar" type="button">${ic("busca")} Analisar</button><button class="seg" id="ex-limpar" type="button">Limpar</button></div>
    </section>
    <div id="ex-res"></div>`;
}

function exLerContexto() {
  const e = EX_ESTADO, g = id => document.getElementById(id);
  e.idade = g("ex-idade").value.trim(); e.idadeUnidade = g("ex-idade-u").value; e.sexo = g("ex-sexo").value; e.gestante = g("ex-gest").value;
  e.texto = g("ex-texto").value;
  exSalvar();
}

function exLigarInterpretar() {
  const $t = document.getElementById("ex-texto");
  ["ex-idade", "ex-idade-u", "ex-sexo", "ex-gest"].forEach(id => document.getElementById(id).addEventListener("change", () => { exLerContexto(); if (document.getElementById("ex-res").innerHTML) exAnalisar(); }));
  $t.addEventListener("input", () => { EX_ESTADO.texto = $t.value; exSalvar(); });
  $t.addEventListener("keydown", ev => { if (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey)) exAnalisar(); });
  document.getElementById("ex-analisar").onclick = () => { exAnalisar(); document.getElementById("ex-res").scrollIntoView({ behavior: "smooth", block: "start" }); };
  document.getElementById("ex-limpar").onclick = () => { Object.assign(EX_ESTADO, { texto: "", manual: {}, status: "" }); exSalvar(); telaExames(); };
  $app.querySelectorAll("[data-exexemplo]").forEach(b => b.onclick = () => { $t.value = b.dataset.exexemplo === "lab" ? EX_EXEMPLO_LAB : EX_EXEMPLO_IMG; EX_ESTADO.manual = {}; exAnalisar(); });
  const proc = async ev => {
    const arqs = [...ev.target.files]; if (!arqs.length) return;
    const st = document.getElementById("ex-status"), msg = t => { st.textContent = t; };
    if (typeof vzLerArquivo !== "function") { msg("Leitura de arquivos indisponível neste navegador."); return; }
    let texto = $t.value.trim();
    for (const f of arqs) {
      msg(`Lendo ${f.name}…`);
      try { const t = await vzLerArquivo(f, msg); texto += (texto ? "\n\n" : "") + t; }
      catch (err) { msg(`Não foi possível ler ${f.name}: ${err.message}`); return; }
    }
    $t.value = texto;
    EX_ESTADO.status = `${arqs.length} arquivo(s) lido(s). Confira o texto reconhecido — OCR pode trocar vírgulas e dígitos.`;
    msg(EX_ESTADO.status);
    exAnalisar();
    ev.target.value = "";
  };
  document.getElementById("ex-arquivo").onchange = proc;
  document.getElementById("ex-camera").onchange = proc;
  const add = () => {
    const nome = document.getElementById("ex-m-nome").value.trim(), val = document.getElementById("ex-m-valor").value.trim();
    if (!nome || !val) return;
    const n = exNorm(nome);
    const x = EXAMES_LAB.find(e => exNorm(e.nome) === n) || EXAMES_LAB.find(e => e.sinonimos.includes(n)) || EXAMES_LAB.find(e => exNorm(e.nome).startsWith(n));
    if (!x) { document.getElementById("ex-status").textContent = `Exame "${nome}" não encontrado no catálogo.`; return; }
    const q = exNorm(val);
    EX_ESTADO.manual[x.id] = x.tipo === "qualitativo" ? (/nao|neg|ausente/.test(q) ? "negativo" : /pos|reag|reat|detect|presente/.test(q) ? "positivo" : val) : val;
    exLerContexto();
    telaExames(); exAnalisar();
  };
  document.getElementById("ex-m-add").onclick = add;
  document.getElementById("ex-m-valor").addEventListener("keydown", ev => { if (ev.key === "Enter") { ev.preventDefault(); add(); } });
  $app.querySelectorAll("[data-exrm]").forEach(b => b.onclick = () => { delete EX_ESTADO.manual[b.dataset.exrm]; exSalvar(); telaExames(); exAnalisar(); });
  if (EX_ESTADO.texto.trim() || Object.keys(EX_ESTADO.manual).length) exAnalisar();
}

function exAnalisar() {
  exLerContexto();
  const ctx = exCtx(), texto = EX_ESTADO.texto;
  const $r = document.getElementById("ex-res");
  const lidos = texto.trim() ? exLerLaudo(texto, ctx) : [];
  const digitados = exDeValores(EX_ESTADO.manual, ctx);
  const res = [...digitados, ...lidos.filter(r => !digitados.some(d => d.e.id === r.e.id))];
  const img = texto.trim() ? exAchadosImagem(texto) : { achados: [] };
  const ehImagem = texto.trim() && (exPareceImagem(texto) || img.achados.some(a => !a.negado)) && res.length < 3;
  if (!res.length && !img.achados.length) {
    $r.innerHTML = `<section class="vz-card"><p class="empty">${texto.trim() || Object.keys(EX_ESTADO.manual).length ? "Nenhum exame reconhecido. Confira o texto (nome do exame seguido do valor) ou digite os valores um a um." : "Anexe, cole ou digite um resultado para analisar."}</p></section>`;
    return;
  }
  const partes = [];
  if (ehImagem || (img.achados.length && !res.length)) partes.push(exHtmlImagem(img));
  if (res.length) partes.push(exHtmlLab(res, ctx));
  if (!ehImagem && img.achados.some(a => !a.negado) && res.length) partes.push(exHtmlImagem(img));
  partes.push(exHtmlEvolucao(res, img));
  $r.innerHTML = partes.join("");
  ligarCopias($r);
  $r.querySelectorAll("[data-exsel]").length && exLigarSelecao();
}

function exHtmlLab(res, ctx) {
  const alterados = res.filter(r => !["normal", "sem-ref", "indefinido"].includes(r.status));
  const pad = exPadroes(res, ctx);
  const cor = { critico: "vz-critico", alto: "vz-alto", moderado: "vz-atencao" };
  const linha = r => {
    const [cls, rot] = EX_ST[r.status] || EX_ST.indefinido;
    return `<tr class="${/critico/.test(r.status) ? "ex-l-critico" : ""}"><td><b>${esc(r.e.nome)}</b>${r.trecho === "digitado" ? ` <small class="note">digitado</small>` : ""}</td><td>${esc(exValorTxt(r))}${r.outros && r.outros.length ? `<br><small class="note">outros valores no texto: ${r.outros.map(o => esc(exValorTxt(o))).join(", ")}</small>` : ""}</td>
      <td>${r.qualitativo ? "—" : esc(exRefTexto(r.ref))}${r.refFonte ? `<br><small class="note">${r.refFonte === "laudo" ? "do laudo" : "catálogo"}</small>` : ""}</td><td><span class="vz-cont ${cls}">${rot}</span></td></tr>`;
  };
  const ordem = s => /critico/.test(s) ? 0 : /alto|baixo/.test(s) ? 1 : 2;
  const causas = alterados.map(r => {
    const lado = r.qualitativo === "positivo" ? r.e.positivo : /alto/.test(r.status) ? r.e.alto : r.e.baixo;
    if (!lado) return "";
    return `<details class="hp-hip"><summary><b>${esc(r.e.nome)} ${r.qualitativo ? "positivo" : /alto/.test(r.status) ? "alto" : "baixo"}</b><small>${esc(exValorTxt(r))}</small></summary>
      ${exLista(lado.causas)}${lado.conduta ? `<p><b>Conduta:</b> ${esc(lado.conduta)}</p>` : ""}${r.e.notas ? `<p class="note">${esc(r.e.notas)}</p>` : ""}${exChipsFichas(lado.fichas)}</details>`;
  }).join("");
  return `<section class="vz-card"><h3>Resultados reconhecidos (${res.length})</h3>
      <div class="table-wrap"><table class="ex-tab"><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th>Situação</th></tr></thead>
      <tbody>${[...res].sort((a, b) => ordem(a.status) - ordem(b.status)).map(linha).join("")}</tbody></table></div>
      <p class="note">Confira cada valor com o laudo original. Valores críticos usam limites de pânico de adultos.</p></section>
    ${pad.length ? `<section class="vz-card vz-c-alto"><h3>Alterações e hipóteses</h3>${pad.map(p => `<div class="ex-padrao"><p class="${cor[p.nivel]} ex-pad-t"><b>${esc(p.titulo)}</b></p><p>${esc(p.texto)}</p>${exChipsFichas(p.fichas)}</div>`).join("")}</section>`
      : alterados.length ? "" : `<section class="vz-card"><p class="empty">Nenhuma alteração em relação às referências.</p></section>`}
    ${causas ? `<section class="vz-card"><h3>Causas de cada alteração</h3>${causas}</section>` : ""}`;
}

function exHtmlImagem(img) {
  const pos = img.achados.filter(a => !a.negado), neg = img.achados.filter(a => a.negado);
  const ex = img.exameDoLaudo;
  const hd = [...new Set(pos.flatMap(a => a.achado.fichas || []))];
  return `<section class="vz-card ${pos.some(a => a.achado.urgente) ? "vz-c-critico" : ""}"><h3>Laudo de ${ex ? esc(ex.nome) : "imagem/exame gráfico"}</h3>
    ${pos.length ? `<ul class="vz-acoes-lista">${pos.map(a => `<li class="${a.achado.urgente ? "vz-critico" : "vz-atencao"}"><b>${esc(a.termo)}</b>${a.achado.urgente ? ` <span class="tag ci">urgente</span>` : ""} — ${esc(a.achado.significado)}${exChipsFichas(a.achado.fichas)}<small class="note ex-trecho">“${esc(a.trecho)}”</small></li>`).join("")}</ul>`
      : `<p class="empty">Nenhum achado do catálogo descrito como presente.</p>`}
    ${neg.length ? `<p class="note"><b>Descritos como ausentes:</b> ${neg.map(a => esc(a.termo)).join(", ")}.</p>` : ""}
    ${hd.length ? `<h4>Hipóteses diagnósticas (HD) pelos achados</h4>${exChipsFichas(hd, "hp-link-grave")}` : ""}
    ${pos.some(a => a.achado.urgente) ? `<p class="hp-abc"><b>Achado potencialmente urgente:</b> correlacionar com a clínica agora e discutir com o radiologista/especialista.</p>` : ""}
    ${ex ? `<details class="vz-sec"><summary>Indicações de ${esc(ex.nome)}</summary>${exLista(ex.indicacoes)}${ex.naoIndicado && ex.naoIndicado.length ? `<p><b>Quando não pedir:</b></p>${exLista(ex.naoIndicado)}` : ""}</details>` : ""}
    <p class="note">A interpretação parte do texto do laudo emitido pelo radiologista; o sistema não lê a imagem em si.</p></section>`;
}

function exHtmlEvolucao(res, img) {
  const lab = res.map(r => {
    const s = r.status;
    const seta = /critico-alto/.test(s) ? " ↑↑" : /critico-baixo/.test(s) ? " ↓↓" : s === "alto" ? " ↑" : s === "baixo" ? " ↓" : "";
    return `${r.e.nome} ${exValorTxt(r)}${seta}`;
  }).join(" · ");
  const pos = img.achados.filter(a => !a.negado);
  const im = img.exameDoLaudo || pos.length ? `${img.exameDoLaudo ? img.exameDoLaudo.nome : "Imagem"}: ${pos.length ? pos.map(a => a.termo).join("; ") : "sem achados relevantes no catálogo"}.` : "";
  const txt = [`Exames (${new Date().toLocaleDateString("pt-BR")}):`, lab, im].filter(Boolean).join("\n");
  return `<section class="vz-card"><h3>Para a evolução</h3>${blocoCopiavel(txt, "Resumo dos exames")}</section>`;
}

/* ---------- Catálogo laboratorial ---------- */
function exAbaLab() {
  const e = EX_ESTADO;
  const cats = Object.entries(EX_CATEGORIAS_LAB).filter(([k]) => EXAMES_LAB.some(x => x.categoria === k));
  return `<section class="vz-card ex-filtros">
      <label class="campo largo"><span>Buscar exame</span><input id="ex-busca" type="search" value="${esc(e.busca)}" placeholder="Nome, sigla (TGO, PCR, TSH) ou alteração"></label>
      <div class="hp-chips">${[["", "Todos"], ...cats].map(([k, n]) => `<button class="cchip ${e.cat === k ? "on" : ""}" type="button" data-excat="${k}">${esc(n)}</button>`).join("")}</div>
    </section>
    <div id="ex-lista"></div>`;
}
function exRefTabela(x) {
  const fx = { adulto: "Adulto", crianca: "Criança", rn: "Recém-nascido", todas: "Todas as idades" };
  return `<div class="table-wrap"><table class="ex-tab"><thead><tr><th>Faixa</th><th>Referência${x.unidade ? ` (${esc(x.unidade)})` : ""}</th></tr></thead><tbody>
    ${(x.ref || []).map(r => `<tr><td>${fx[r.faixa] || r.faixa}${r.sexo ? ` · ${r.sexo === "F" ? "mulher" : "homem"}` : ""}${r.gestante ? " · gestante" : ""}</td><td>${esc(exRefTexto(r))}${r.texto && (r.min !== undefined || r.max !== undefined) ? "" : ""}</td></tr>`).join("")}
    ${x.critico ? `<tr class="ex-l-critico"><td>Valor crítico (adulto)</td><td>${x.critico.min !== undefined ? `< ${exFmt(x.critico.min, 3)}` : ""}${x.critico.min !== undefined && x.critico.max !== undefined ? " ou " : ""}${x.critico.max !== undefined ? `> ${exFmt(x.critico.max, 3)}` : ""}</td></tr>` : ""}
  </tbody></table></div>${(x.conversoes || []).length ? `<p class="note">Conversão: ${x.conversoes.map(c => `1 ${esc(c.unidade)} = ${exFmt(c.fator, 4)} ${esc(x.unidade)}`).join(" · ")}</p>` : ""}`;
}
function exItemLab(x) {
  const lado = (t, o) => o ? `<div class="ex-lado"><h4>${t}</h4>${exLista(o.causas)}${o.conduta ? `<p><b>Conduta:</b> ${esc(o.conduta)}</p>` : ""}${exChipsFichas(o.fichas)}</div>` : "";
  return `<details class="hp-hip ex-item" data-exid="${esc(x.id)}"><summary><b>${esc(x.nome)}</b><small>${esc(EX_CATEGORIAS_LAB[x.categoria] || "")}${x.tipo === "quantitativo" && x.unidade ? ` · ${esc(x.unidade)}` : ""}</small></summary>
    <div class="ex-corpo">
      <div class="ex-acoes">${exBotaoSel(x.id)}</div>
      ${x.tipo === "quantitativo" ? exRefTabela(x) : `<p><b>Resultado:</b> qualitativo (reagente / não reagente).</p>${x.negativo && x.negativo.texto ? `<p class="note"><b>Negativo:</b> ${esc(x.negativo.texto)}</p>` : ""}`}
      <p class="note">Vale o intervalo de referência do laboratório que emitiu o laudo.</p>
      ${(x.indicacoes || []).length ? `<h4>Quando pedir</h4>${exLista(x.indicacoes)}` : ""}
      ${x.preparo ? `<p><b>Preparo:</b> ${esc(x.preparo)}</p>` : ""}
      ${blocoCopiavel(x.pedido, "Como escrever na solicitação")}
      <div class="ex-lados">${lado("Aumentado — causas", x.alto)}${lado("Diminuído — causas", x.baixo)}${lado("Positivo/reagente", x.positivo)}</div>
      ${x.notas ? `<p class="note">${esc(x.notas)}</p>` : ""}
      ${(x.fontes || []).length ? `<p class="note ex-fontes"><b>Fontes:</b> ${esc(x.fontes.join("; "))}</p>` : ""}
    </div></details>`;
}
function exFiltrar(lista, busca, cat, campos) {
  const q = exNorm(busca).trim();
  return lista.filter(x => (!cat || x.categoria === cat) && (!q || q.split(/\s+/).every(p => exNorm(campos(x)).includes(p))));
}
function exLigarLab() {
  const desenhar = () => {
    const e = EX_ESTADO;
    const l = exFiltrar(EXAMES_LAB, e.busca, e.cat, x => [x.nome, ...(x.sinonimos || []), ...((x.alto || {}).causas || []), ...((x.baixo || {}).causas || []), ...(x.indicacoes || [])].join(" "));
    document.getElementById("ex-lista").innerHTML = l.length ? l.map(exItemLab).join("") : `<p class="empty">Nenhum exame encontrado.</p>`;
    ligarCopias(document.getElementById("ex-lista")); exLigarSelecao();
  };
  const b = document.getElementById("ex-busca");
  b.addEventListener("input", () => { EX_ESTADO.busca = b.value; exSalvar(); desenhar(); });
  $app.querySelectorAll("[data-excat]").forEach(c => c.onclick = () => { EX_ESTADO.cat = c.dataset.excat; exSalvar(); $app.querySelectorAll("[data-excat]").forEach(o => o.classList.toggle("on", o === c)); desenhar(); });
  desenhar();
}

/* ---------- Imagem e gráficos ---------- */
function exAbaImagem() {
  const e = EX_ESTADO;
  const cats = Object.entries(EX_CATEGORIAS_IMAGEM).filter(([k]) => EXAMES_IMAGEM.some(x => x.categoria === k));
  return `<section class="vz-card ex-filtros">
      <label class="campo largo"><span>Buscar exame ou indicação</span><input id="ex-busca-img" type="search" value="${esc(e.buscaImg)}" placeholder="Ex.: TC de crânio, cefaleia, USG obstétrica, cólica renal"></label>
      <div class="hp-chips">${[["", "Todos"], ...cats].map(([k, n]) => `<button class="cchip ${e.catImg === k ? "on" : ""}" type="button" data-excatimg="${k}">${esc(n)}</button>`).join("")}</div>
    </section>
    <div id="ex-lista-img"></div>`;
}
function exItemImagem(x) {
  return `<details class="hp-hip ex-item" data-exid="${esc(x.id)}"><summary><b>${esc(x.nome)}</b><small>${esc(EX_CATEGORIAS_IMAGEM[x.categoria] || "")}${(x.variantes || []).length ? ` · ${esc(x.variantes.join(" / "))}` : ""}</small></summary>
    <div class="ex-corpo">
      <div class="ex-acoes">${exBotaoSel(x.id)}</div>
      <h4>Quando pedir</h4>${exLista(x.indicacoes)}
      ${(x.naoIndicado || []).length ? `<h4>Quando não pedir</h4>${exLista(x.naoIndicado, "ex-nao")}` : ""}
      ${(x.cuidados || []).length ? `<h4>Cuidados</h4>${exLista(x.cuidados)}` : ""}
      ${x.preparo ? `<p><b>Preparo:</b> ${esc(x.preparo)}</p>` : ""}
      ${blocoCopiavel(x.pedido, "Como escrever na solicitação")}
      ${(x.exemplos || []).length ? `<h4>Exemplos de pedido</h4>${x.exemplos.map(t => blocoCopiavel(t)).join("")}` : ""}
      ${(x.achados || []).length ? `<h4>Achados de laudo e o que significam</h4><ul class="ex-achados">${x.achados.map(a => `<li><b>${esc(a.termos[0])}</b>${a.urgente ? ` <span class="tag ci">urgente</span>` : ""} — ${esc(a.significado)}${exChipsFichas(a.fichas)}</li>`).join("")}</ul>` : ""}
      ${(x.fontes || []).length ? `<p class="note ex-fontes"><b>Fontes:</b> ${esc(x.fontes.join("; "))}</p>` : ""}
    </div></details>`;
}
function exLigarImagem() {
  const desenhar = () => {
    const e = EX_ESTADO;
    const l = exFiltrar(EXAMES_IMAGEM, e.buscaImg, e.catImg, x => [x.nome, ...(x.variantes || []), ...(x.indicacoes || []), ...(x.achados || []).flatMap(a => a.termos)].join(" "));
    document.getElementById("ex-lista-img").innerHTML = l.length ? l.map(exItemImagem).join("") : `<p class="empty">Nenhum exame encontrado.</p>`;
    ligarCopias(document.getElementById("ex-lista-img")); exLigarSelecao();
  };
  const b = document.getElementById("ex-busca-img");
  b.addEventListener("input", () => { EX_ESTADO.buscaImg = b.value; exSalvar(); desenhar(); });
  $app.querySelectorAll("[data-excatimg]").forEach(c => c.onclick = () => { EX_ESTADO.catImg = c.dataset.excatimg; exSalvar(); $app.querySelectorAll("[data-excatimg]").forEach(o => o.classList.toggle("on", o === c)); desenhar(); });
  desenhar();
}

/* ---------- Solicitação ---------- */
const exSemLacunas = s => String(s || "").replace(/\s*(HD|Hipótese diagnóstica|Justificativa|Dados clínicos|CID)\s*:\s*_+\.?/gi, "").replace(/\s*_{2,}\.?/g, "").trim();
function exTextoSolicitacao() {
  const e = EX_ESTADO;
  const lab = e.sel.map(exAcharLab).filter(Boolean), img = e.sel.map(exAcharImg).filter(Boolean);
  /* Pedidos repetidos ou contidos em outro (ex.: "EAS" dentro de "EAS e urocultura") saem uma vez só. */
  const unicos = arr => { const p = [...new Set(arr.map(x => exSemLacunas(x.pedido)))]; return p.filter(t => !p.some(o => o !== t && o.toLowerCase().includes(t.toLowerCase()))); };
  const pl = unicos(lab), pi = unicos(img);
  const l = ["SOLICITAÇÃO DE EXAMES", ""];
  if (pl.length) { l.push("Exames laboratoriais:"); pl.forEach((t, i) => l.push(`${i + 1}. ${t}`)); l.push(""); }
  if (pi.length) { l.push(pl.length ? "Exames de imagem / gráficos:" : "Exames:"); pi.forEach((t, i) => l.push(`${i + 1}. ${t}`)); l.push(""); }
  if (e.hd) l.push(`Hipótese diagnóstica: ${e.hd}${e.cid ? ` (CID-10 ${e.cid})` : ""}`);
  else if (e.cid) l.push(`CID-10: ${e.cid}`);
  if (e.clinica) l.push(`Dados clínicos / justificativa: ${e.clinica}`);
  const vistosPrep = new Set();
  const prep = [...lab, ...img].filter(x => x.preparo && !/^(sem preparo|sem jejum|jejum não obrigatório|não requer)/i.test(x.preparo) && !vistosPrep.has(x.preparo) && vistosPrep.add(x.preparo)).map(x => `${x.nome}: ${x.preparo}`);
  if (prep.length) { l.push("", "Orientações de preparo:"); prep.forEach(p => l.push(`• ${p}`)); }
  return l.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
function exAbaSolicitar() {
  const e = EX_ESTADO;
  const item = id => { const x = exAcharLab(id) || exAcharImg(id); return x ? `<li><span>${esc(x.nome)}</span><button type="button" class="ex-x" data-exsel-rm="${esc(id)}" aria-label="Remover ${esc(x.nome)}">×</button></li>` : ""; };
  const pac = EX_PACOTES.map(([n, ids], i) => [n, ids.filter(id => exAcharLab(id) || exAcharImg(id)), i]).filter(p => p[1].length);
  const opts = [...EXAMES_LAB, ...EXAMES_IMAGEM].map(x => `<option value="${esc(x.nome)}">`).join("");
  return `<section class="vz-card"><h3>Exames selecionados</h3>
      ${e.sel.length ? `<ol class="ex-sel-lista">${e.sel.map(item).join("")}</ol>` : `<p class="empty">Nenhum exame selecionado. Use “+ Solicitação” nas abas Laboratoriais e Imagem, adicione abaixo ou escolha um pacote.</p>`}
      <div class="ex-manual"><label class="campo"><span>Adicionar exame</span><input id="ex-s-nome" list="ex-lista-todos" placeholder="Ex.: Hemograma, TC de crânio"><datalist id="ex-lista-todos">${opts}</datalist></label><button class="seg" id="ex-s-add" type="button">Adicionar</button>${e.sel.length ? `<button class="seg" id="ex-s-limpar" type="button">Limpar lista</button>` : ""}</div>
      ${pac.length ? `<p class="note">Pacotes (revise e retire o que não se aplica):</p><div class="hp-chips">${pac.map(([n, ids, i]) => `<button class="cchip" type="button" data-expac="${i}">${esc(n)} (${ids.length})</button>`).join("")}</div>` : ""}
    </section>
    <section class="vz-card"><h3>Dados do pedido</h3>
      <div class="form-doc">
        <label class="campo largo"><span>Hipótese diagnóstica (HD)</span><input id="ex-s-hd" value="${esc(e.hd)}" placeholder="Ex.: Pielonefrite aguda"></label>
        <label class="campo"><span>CID-10</span><input id="ex-s-cid" value="${esc(e.cid)}" placeholder="Ex.: N10"></label>
        <label class="campo largo"><span>Dados clínicos / justificativa</span><textarea id="ex-s-clin" rows="3" placeholder="Ex.: febre há 3 dias, disúria e dor lombar direita; Giordano positivo.">${esc(e.clinica)}</textarea></label>
      </div>
      <p class="note">Guias SUS e de convênio costumam exigir HD ou CID e justificativa clínica, principalmente para TC, RM e exames de alto custo. Não inclua dados do paciente que não sejam necessários.</p>
    </section>
    <section class="vz-card"><h3>Texto da solicitação</h3><div id="ex-s-texto">${blocoCopiavel(exTextoSolicitacao(), "Solicitação")}</div>
      <div class="vz-acoes-linha"><button class="seg" id="ex-s-imprimir" type="button">Imprimir</button></div></section>`;
}
function exLigarSolicitar() {
  const atualizar = () => { const d = document.getElementById("ex-s-texto"); d.innerHTML = blocoCopiavel(exTextoSolicitacao(), "Solicitação"); ligarCopias(d); };
  [["ex-s-hd", "hd"], ["ex-s-cid", "cid"], ["ex-s-clin", "clinica"]].forEach(([id, k]) => document.getElementById(id).addEventListener("input", ev => { EX_ESTADO[k] = ev.target.value; exSalvar(); atualizar(); }));
  $app.querySelectorAll("[data-exsel-rm]").forEach(b => b.onclick = () => { EX_ESTADO.sel = EX_ESTADO.sel.filter(i => i !== b.dataset.exselRm); exSalvar(); telaExames(); });
  $app.querySelectorAll("[data-expac]").forEach(b => b.onclick = () => { EX_PACOTES[+b.dataset.expac][1].forEach(id => { if ((exAcharLab(id) || exAcharImg(id)) && !EX_ESTADO.sel.includes(id)) EX_ESTADO.sel.push(id); }); exSalvar(); telaExames(); });
  const add = () => {
    const n = exNorm(document.getElementById("ex-s-nome").value.trim()); if (!n) return;
    const todos = [...EXAMES_LAB, ...EXAMES_IMAGEM];
    const x = todos.find(e => exNorm(e.nome) === n) || EXAMES_LAB.find(e => e.sinonimos.includes(n)) || todos.find(e => exNorm(e.nome).includes(n));
    if (x && !EX_ESTADO.sel.includes(x.id)) EX_ESTADO.sel.push(x.id);
    exSalvar(); telaExames();
  };
  document.getElementById("ex-s-add").onclick = add;
  document.getElementById("ex-s-nome").addEventListener("keydown", ev => { if (ev.key === "Enter") { ev.preventDefault(); add(); } });
  const lim = document.getElementById("ex-s-limpar"); if (lim) lim.onclick = () => { EX_ESTADO.sel = []; exSalvar(); telaExames(); };
  document.getElementById("ex-s-imprimir").onclick = () => {
    const html = `<h1>Solicitação de exames</h1><p>Paciente: ______________________________________ &nbsp; Data: ${new Date().toLocaleDateString("pt-BR")}</p><pre class="ex-print">${esc(exTextoSolicitacao().replace(/^SOLICITAÇÃO DE EXAMES\n+/, ""))}</pre><p style="margin-top:48px">_______________________________<br>Assinatura e carimbo (CRM)</p>`;
    if (typeof vzImprimir === "function") vzImprimir(html, "Solicitação de exames", ""); else window.print();
  };
}

if (typeof module !== "undefined") module.exports = { exTextoSolicitacao, exSemLacunas };
