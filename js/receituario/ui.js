/* Receituário e pedidos de exame no timbrado (rota #receituario).
   - Tipos: simples, controle especial (2 vias), azul (B), amarela (A), digital e solicitação de exames.
   - Itens editáveis; preenchimento automático a partir de prescrição copiada/colada, de modelos dos
     medicamentos e das fichas; quantidade calculada pela posologia.
   - PDF gerado no aparelho. Dados do paciente só na memória desta aba; dados do timbrado só neste navegador. */

const RX_TIMBRADO_CHAVE = "pb-timbrado";
function rxTimbrado() {
  const p = typeof Perfil !== "undefined" ? Perfil.ler() : {};
  const salvo = (() => { try { return JSON.parse(localStorage.getItem(RX_TIMBRADO_CHAVE)) || {}; } catch (e) { return {}; } })();
  const nome = salvo.nomeTimbrado || p.nome || "";
  const iniciais = nome.split(/\s+/).filter(w => w.length > 2 || /^[A-ZÁÉÍÓÚ]/.test(w)).map(w => w[0]).filter(Boolean);
  return {
    nomeTimbrado: nome, nomeCompleto: salvo.nomeCompleto || nome,
    monograma: salvo.monograma ?? (iniciais.length > 1 ? iniciais[0] + iniciais[iniciais.length - 1] : iniciais.join("")).toUpperCase(),
    profissao: salvo.profissao || (/^dra/i.test(p.tratamento || "") ? "Médica" : p.tratamento ? "Médico" : "Médica"),
    crm: salvo.crm || p.crm || "", rqe: salvo.rqe ?? p.rqe ?? "",
    telefone: salvo.telefone || "", email: salvo.email || "", cidade: salvo.cidade || p.cidade || "", endereco: salvo.endereco || "",
    configurado: !!salvo.salvoEm
  };
}
const RX_CAMPOS_TIMBRADO = [["nomeTimbrado", "Nome no timbrado", "Ex.: Licia Minatti"], ["nomeCompleto", "Nome completo (assinatura)", ""], ["monograma", "Logo (iniciais)", "Ex.: LM"],
  ["profissao", "Profissão", "Médica"], ["crm", "CRM / UF", "Ex.: CRM-MS 00.000"], ["rqe", "RQE / especialidade (opcional)", ""], ["telefone", "Telefone", "(00) 00000-0000"],
  ["email", "E-mail", ""], ["cidade", "Cidade – UF", ""], ["endereco", "Endereço do consultório (exigido no controle especial)", ""]];

let RX_ESTADO = rxEstadoVazio();
function rxEstadoVazio() {
  return { tipo: "auto", paciente: "", documento: "", endereco: "", idade: "", sexo: "", data: typeof hojeISO === "function" ? hojeISO() : new Date().toISOString().slice(0, 10),
    itens: [], orientacoes: "", hd: "", cid: "", justificativa: "", aviso: "", desfazer: null };
}

/* Guarda a última prescrição copiada no app (botões Copiar ou seleção) para preencher a receita. */
const rxPareceReceita = t => /(^|\n)\s*(uso (oral|t[oó]pico|externo|interno|sublingual|nasal|oft|inalat|retal|vaginal|intramuscular|subcut)|\d{1,2}\.\s+\S.*(-{3,}|comprimid|c[aá]psul|frasco|mg|mL))/i.test(t || "");
function rxGuardarCopia(texto, origem) {
  if (!rxPareceReceita(texto)) return;
  try { sessionStorage.setItem("rx-copia", JSON.stringify({ texto: String(texto).slice(0, 6000), em: Date.now(), origem: origem || "" })); } catch (e) {}
}
if (typeof document !== "undefined") {
  document.addEventListener("copy", () => { const s = String(getSelection() || ""); if (s.length > 15) rxGuardarCopia(s, document.title); });
  document.addEventListener("click", ev => {
    const b = ev.target.closest && ev.target.closest(".copy[data-target]"); if (!b) return;
    const el = document.getElementById(b.dataset.target); if (!el) return;
    const card = b.closest(".card"); const tit = card && card.querySelector(".card-h b");
    rxGuardarCopia(el.value !== undefined && el.tagName !== "PRE" ? el.value : el.textContent, tit ? tit.textContent : "");
  }, true);
}
function rxCopiaRecente() {
  try { const c = JSON.parse(sessionStorage.getItem("rx-copia")); if (c && Date.now() - c.em < 2 * 3600e3) return c; } catch (e) {}
  return null;
}

function rxPreencher(texto, origem, substituir) {
  const novos = rxLerPrescricao(texto);
  if (!novos.length) return 0;
  RX_ESTADO.desfazer = JSON.stringify(RX_ESTADO.itens);
  RX_ESTADO.itens = substituir ? novos : [...RX_ESTADO.itens.filter(i => i.nome.trim()), ...novos];
  if (RX_ESTADO.tipo === "exames") RX_ESTADO.tipo = "auto";
  RX_ESTADO.aviso = `${novos.length} ${novos.length === 1 ? "item preenchido" : "itens preenchidos"}${origem ? ` a partir de: ${origem}` : ""}. Confira dose, quantidade e posologia.`;
  return novos.length;
}

function telaReceituario(contexto = {}) {
  const e = RX_ESTADO;
  if (contexto.tipo === "exames") { e.tipo = "exames"; rxImportarExames(true); }
  else if (contexto.texto) rxPreencher(contexto.texto, contexto.origem || "modelo escolhido", !e.itens.some(i => i.nome.trim()));
  else if (contexto.ficha && typeof FICHAS !== "undefined") {
    const f = FICHAS.find(x => x.id === contexto.ficha);
    if (f && f.prescricao && f.prescricao.ambulatorial) rxPreencher(f.prescricao.ambulatorial, f.titulo, !e.itens.some(i => i.nome.trim()));
  } else if (!e.itens.length && e.tipo !== "exames") {
    const c = rxCopiaRecente();
    if (c && c.em !== e.copiaUsada) { e.copiaUsada = c.em; rxPreencher(c.texto, `prescrição copiada${c.origem ? ` (${c.origem})` : ""}`, true); }
  }
  rxDesenhar();
}

function rxDesenhar() {
  const e = RX_ESTADO, tim = rxTimbrado();
  const exames = e.tipo === "exames";
  const tipos = [["auto", "Automático", "Separa os itens no receituário exigido por cada medicamento."], ...Object.entries(RX_TIPOS).map(([k, t]) => [k, t.nome, t.uso])];
  const campo = (k, rot, attrs = "") => `<label class="campo"><span>${rot}</span><input data-rx="${k}" value="${esc(e[k])}" ${attrs}></label>`;
  $app.innerHTML = `<div class="view receituario">
    <div class="f-head"><h2>Receituário e pedidos</h2><p>Receita e solicitação de exames no seu timbrado, com PDF para baixar ou imprimir. Ao copiar uma prescrição no app (fichas, medicamentos), ela é preenchida aqui automaticamente.</p></div>
    ${!tim.configurado ? `<div class="vz-aviso" role="note">${ic("alerta")}<span><b>Configure o timbrado uma vez neste aparelho</b> (telefone, e-mail, cidade, endereço). Esses dados não ficam no site público: ficam só neste navegador. <button class="link-btn" id="rx-ir-timbrado" type="button">Configurar agora</button></span></div>` : ""}
    <section class="vz-card"><h3>Tipo de documento</h3>
      <div class="rx-tipos" role="radiogroup">${tipos.map(([k, n, u]) => `<button type="button" role="radio" aria-checked="${e.tipo === k}" class="rx-tipo ${e.tipo === k ? "on" : ""}" data-rxtipo="${k}"><b>${esc(n)}</b><small>${esc(u)}</small></button>`).join("")}</div>
      ${RX_TIPOS[e.tipo] ? `<p class="note rx-regra">${esc(RX_TIPOS[e.tipo].regra)}</p>` : ""}
    </section>
    <section class="vz-card"><h3>Paciente</h3>
      <div class="form-doc">
        <label class="campo largo"><span>Nome completo</span><input data-rx="paciente" value="${esc(e.paciente)}" autocomplete="off"></label>
        ${campo("data", "Data", 'type="date"')}
        ${campo("idade", "Idade", 'inputmode="numeric" placeholder="anos"')}
        <label class="campo"><span>Sexo</span><select data-rx="sexo">${[["", "—"], ["F", "Feminino"], ["M", "Masculino"]].map(([v, t]) => `<option value="${v}" ${e.sexo === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
        ${campo("documento", "CPF / CNS (opcional)", 'inputmode="numeric"')}
        <label class="campo largo"><span>Endereço completo ${exames ? "(opcional)" : "(obrigatório no controle especial e notificações)"}</span><input data-rx="endereco" value="${esc(e.endereco)}" autocomplete="off"></label>
      </div>
      <p class="note">Os dados do paciente ficam só nesta aba e não são guardados no aparelho.</p>
    </section>
    ${exames ? rxSecaoExames() : rxSecaoItens()}
    <section class="vz-card"><label class="campo largo"><span>${exames ? "Observações" : "Orientações ao paciente (opcional)"}</span><textarea data-rx="orientacoes" rows="3" placeholder="${exames ? "Ex.: trazer exames anteriores." : "Ex.: retorno em 7 dias; procurar o pronto-socorro se falta de ar."}">${esc(e.orientacoes)}</textarea></label></section>
    <section class="vz-card"><h3>Conferência</h3><ul class="vz-acoes-lista" id="rx-avisos"></ul>
      <div class="vz-acoes-linha rx-acoes"><button class="vz-btn-grande" id="rx-baixar" type="button">${ic("documento")} Baixar PDF</button><button class="seg" id="rx-imprimir" type="button">Abrir / imprimir</button><button class="seg" id="rx-copiar" type="button">Copiar texto</button><button class="seg" id="rx-novo" type="button">Nova receita</button></div>
      <p id="rx-status" class="vz-status" aria-live="polite"></p>
    </section>
    <section class="vz-card"><h3>Pré-visualização</h3><div id="rx-previa" class="rx-previa"><p class="note">Gerando…</p></div></section>
    <details class="vz-card rx-timbrado" id="rx-timbrado" ${tim.configurado ? "" : ""}><summary><b>Dados do timbrado</b> <small>guardados só neste navegador</small></summary>
      <div class="form-doc">${RX_CAMPOS_TIMBRADO.map(([k, r, ph]) => `<label class="campo ${k === "endereco" ? "largo" : ""}"><span>${r}</span><input data-rxtim="${k}" value="${esc(tim[k])}" placeholder="${esc(ph)}"></label>`).join("")}</div>
      <div class="vz-acoes-linha"><button class="seg" id="rx-salvar-tim" type="button">Salvar timbrado</button></div>
      <p class="note">O modelo segue o seu receituário: monograma em Baskerville, nome espaçado, profissão e CRM, linha do paciente e rodapé com contato.</p>
    </details>
  </div>`;
  rxLigar();
  rxAtualizar();
}

function rxSecaoItens() {
  const e = RX_ESTADO;
  const meds = typeof MEDICAMENTOS !== "undefined" ? MEDICAMENTOS : [];
  const c = rxCopiaRecente();
  const tipoBadge = it => { const t = rxTipoItem(it); return t.tipo === "simples" ? "" : `<span class="tag ${t.tipo === "amarela" || t.tipo === "azul" ? "ci" : "adj"}">${esc(RX_TIPOS[t.tipo].curto)}${t.antimicrobiano ? " · antimicrobiano" : ""}</span>`; };
  return `<section class="vz-card"><h3>Medicamentos</h3>
    ${e.aviso ? `<p class="rx-aviso-fill">${esc(e.aviso)}${e.desfazer !== null ? ` <button class="link-btn" id="rx-desfazer" type="button">Desfazer</button>` : ""}</p>` : ""}
    <div class="ex-manual"><label class="campo"><span>Buscar na base de medicamentos</span><input id="rx-med" list="rx-lista-med" placeholder="Ex.: amoxicilina" autocomplete="off"><datalist id="rx-lista-med">${meds.map(m => `<option value="${esc(m.nomes[0])}">`).join("")}</datalist></label>
      <button class="seg" id="rx-add-branco" type="button">+ Item em branco</button></div>
    <div id="rx-modelos"></div>
    <details class="vz-sec" ${e.itens.length ? "" : "open"}><summary>Colar prescrição pronta</summary>
      <textarea id="rx-colar" rows="5" class="rx-colar" placeholder="USO ORAL&#10;1. Amoxicilina 500 mg ------ 21 cápsulas&#10;   Tomar 1 cápsula de 8 em 8 horas por 7 dias."></textarea>
      <div class="vz-acoes-linha"><button class="seg" id="rx-preencher" type="button">Preencher</button>${navigator.clipboard && navigator.clipboard.readText ? `<button class="seg" id="rx-colar-clip" type="button">Colar o que copiei</button>` : ""}${c ? `<button class="seg" id="rx-usar-copia" type="button">Usar a última prescrição copiada no app</button>` : ""}</div>
    </details>
    <div id="rx-itens">${e.itens.map((it, i) => rxItemHTML(it, i, tipoBadge(it))).join("") || `<p class="empty">Nenhum medicamento. Busque na base, cole uma prescrição ou copie um modelo de uma ficha.</p>`}</div>
  </section>`;
}
function rxItemHTML(it, i, badge) {
  const opt = (lista, v) => lista.map(o => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("") + (v && !lista.includes(v) ? `<option selected>${esc(v)}</option>` : "");
  return `<div class="rx-item" data-i="${i}">
    <div class="rx-item-h"><b>${i + 1}.</b> ${badge}<span class="rx-item-bts"><button type="button" class="ex-x" data-rxmov="${i}:-1" aria-label="Subir">↑</button><button type="button" class="ex-x" data-rxmov="${i}:1" aria-label="Descer">↓</button><button type="button" class="ex-x" data-rxdel="${i}" aria-label="Remover item ${i + 1}">×</button></span></div>
    <div class="form-doc rx-item-campos">
      <label class="campo largo"><span>Medicamento, concentração e forma</span><input data-it="nome" value="${esc(it.nome)}" placeholder="Ex.: Amoxicilina 500 mg cápsula"></label>
      <label class="campo"><span>Via</span><select data-it="via">${opt(RX_VIAS, it.via)}</select></label>
      <label class="campo"><span>Quantidade</span><span class="vz-dupla"><input data-it="qtd" value="${esc(it.qtd)}" inputmode="decimal"><select data-it="unidade">${opt(RX_UNIDADES, it.unidade)}</select></span></label>
      <label class="campo"><span>Dias</span><input data-it="dias" value="${esc(it.dias)}" inputmode="numeric" placeholder="ex.: 7"></label>
      <label class="campo largo"><span>Como tomar (posologia)</span><textarea data-it="posologia" rows="2">${esc(it.posologia)}</textarea></label>
    </div>
    ${it.nota ? `<p class="note rx-nota">Nota do modelo (não sai na receita): ${esc(it.nota)}</p>` : ""}
    <p class="note rx-calc" data-calc="${i}"></p>
  </div>`;
}
function rxSecaoExames() {
  const e = RX_ESTADO;
  const cat = typeof EXAMES_LAB !== "undefined" ? [...EXAMES_LAB, ...EXAMES_IMAGEM] : [];
  const temSel = typeof EX_ESTADO !== "undefined" && EX_ESTADO.sel.length;
  return `<section class="vz-card"><h3>Exames solicitados</h3>
    ${e.aviso ? `<p class="rx-aviso-fill">${esc(e.aviso)}</p>` : ""}
    <div class="ex-manual"><label class="campo"><span>Adicionar exame</span><input id="rx-exame" list="rx-lista-ex" placeholder="Ex.: Hemograma completo" autocomplete="off"><datalist id="rx-lista-ex">${cat.map(x => `<option value="${esc(x.nome)}">`).join("")}</datalist></label>
      <button class="seg" id="rx-add-exame" type="button">Adicionar</button>${temSel ? `<button class="seg" id="rx-importar-ex" type="button">Trazer da aba Exames (${EX_ESTADO.sel.length})</button>` : ""}</div>
    <ol class="ex-sel-lista" id="rx-itens">${e.itens.map((it, i) => `<li class="rx-ex-li"><input class="rx-ex-input" data-exi="${i}" value="${esc(it.nome)}" aria-label="Exame ${i + 1}"><button type="button" class="ex-x" data-rxdel="${i}" aria-label="Remover">×</button></li>`).join("")}</ol>
    ${e.itens.length ? "" : `<p class="empty">Nenhum exame. Adicione acima ou monte na aba Exames → Solicitação.</p>`}
    <div class="form-doc">
      <label class="campo largo"><span>Hipótese diagnóstica (HD)</span><input data-rx="hd" value="${esc(e.hd)}"></label>
      <label class="campo"><span>CID-10</span><input data-rx="cid" value="${esc(e.cid)}"></label>
      <label class="campo largo"><span>Justificativa / dados clínicos</span><textarea data-rx="justificativa" rows="2">${esc(e.justificativa)}</textarea></label>
    </div></section>`;
}
/* Traz a seleção da aba Exames (pedido já no formato da guia). */
function rxImportarExames(substituir) {
  if (typeof EX_ESTADO === "undefined") return;
  const pedidos = [];
  for (const id of EX_ESTADO.sel) {
    const x = (typeof EXAMES_LAB !== "undefined" && EXAMES_LAB.find(e => e.id === id)) || (typeof EXAMES_IMAGEM !== "undefined" && EXAMES_IMAGEM.find(e => e.id === id));
    if (x) pedidos.push(typeof exSemLacunas === "function" ? exSemLacunas(x.pedido) : x.pedido);
  }
  const unicos = [...new Set(pedidos)].filter((t, _, a) => !a.some(o => o !== t && o.toLowerCase().includes(t.toLowerCase())));
  const e = RX_ESTADO;
  const itens = unicos.map(n => rxNovoItem({ nome: n }));
  e.itens = substituir || e.tipo !== "exames" ? itens : [...e.itens, ...itens];
  if (EX_ESTADO.hd) e.hd = EX_ESTADO.hd; if (EX_ESTADO.cid) e.cid = EX_ESTADO.cid; if (EX_ESTADO.clinica) e.justificativa = EX_ESTADO.clinica;
  e.aviso = itens.length ? `${itens.length} exame(s) trazidos da aba Exames.` : "";
}

function rxLigar() {
  const e = RX_ESTADO;
  $app.querySelectorAll("[data-rxtipo]").forEach(b => b.onclick = () => {
    const novo = b.dataset.rxtipo, eraEx = e.tipo === "exames";
    if ((novo === "exames") !== eraEx) { e.itens = []; e.aviso = ""; e.desfazer = null; if (novo === "exames") rxImportarExames(true); }
    e.tipo = novo; rxDesenhar();
  });
  $app.querySelectorAll("[data-rx]").forEach(el => el.addEventListener("input", () => { e[el.dataset.rx] = el.value; rxAtualizar(); }));
  $app.querySelectorAll("[data-rx]").forEach(el => el.addEventListener("change", () => { e[el.dataset.rx] = el.value; rxAtualizar(); }));
  /* Itens */
  $app.querySelectorAll(".rx-item").forEach(card => {
    const i = +card.dataset.i, it = e.itens[i];
    card.querySelectorAll("[data-it]").forEach(el => {
      const ev = () => {
        const k = el.dataset.it; it[k] = el.value;
        if (k === "qtd") it.qtdAuto = !el.value.trim();
        if (k === "posologia" && !it.diasManual) { const d = rxDiasDaPosologia(it.posologia); if (d) { it.dias = String(d); card.querySelector('[data-it="dias"]').value = it.dias; } }
        if (k === "dias") it.diasManual = true;
        if (k === "nome") { const m = rxReconhecerMed(it.nome); it.medId = m ? m.id : undefined; }
        rxRecalcular(card, it);
        rxAtualizar();
      };
      el.addEventListener("input", ev); el.addEventListener("change", ev);
    });
    rxRecalcular(card, it, true);
  });
  $app.querySelectorAll("[data-rxdel]").forEach(b => b.onclick = () => { e.itens.splice(+b.dataset.rxdel, 1); e.aviso = ""; rxDesenhar(); });
  $app.querySelectorAll("[data-rxmov]").forEach(b => b.onclick = () => {
    const [i, d] = b.dataset.rxmov.split(":").map(Number), j = i + d;
    if (j < 0 || j >= e.itens.length) return; [e.itens[i], e.itens[j]] = [e.itens[j], e.itens[i]]; rxDesenhar();
  });
  $app.querySelectorAll("[data-exi]").forEach(el => el.addEventListener("input", () => { e.itens[+el.dataset.exi].nome = el.value; rxAtualizar(); }));
  const on = (id, f) => { const el = document.getElementById(id); if (el) el.onclick = f; };
  on("rx-add-branco", () => { e.itens.push(rxNovoItem()); rxDesenhar(); const ult = $app.querySelector(".rx-item:last-of-type [data-it=nome]"); if (ult) ult.focus(); });
  on("rx-preencher", () => { const t = document.getElementById("rx-colar").value; if (!rxPreencher(t, "texto colado", false)) { rxStatus("Não reconheci itens no texto. Use o formato “1. Medicamento ---- quantidade” e a posologia na linha de baixo."); return; } rxDesenhar(); });
  on("rx-colar-clip", async () => {
    try { const t = await navigator.clipboard.readText(); document.getElementById("rx-colar").value = t; if (rxPreencher(t, "área de transferência", false)) rxDesenhar(); else rxStatus("O texto copiado não parece uma prescrição."); }
    catch (err) { rxStatus("O navegador não liberou a leitura da área de transferência: cole no campo acima (toque longo → Colar)."); }
  });
  on("rx-usar-copia", () => { const c = rxCopiaRecente(); if (c && rxPreencher(c.texto, `prescrição copiada${c.origem ? ` (${c.origem})` : ""}`, false)) rxDesenhar(); });
  on("rx-desfazer", () => { try { e.itens = JSON.parse(e.desfazer); } catch (err) {} e.desfazer = null; e.aviso = ""; rxDesenhar(); });
  on("rx-add-exame", () => { const el = document.getElementById("rx-exame"); const v = el.value.trim(); if (!v) return; const x = typeof EXAMES_LAB !== "undefined" && [...EXAMES_LAB, ...EXAMES_IMAGEM].find(z => z.nome === v); e.itens.push(rxNovoItem({ nome: x ? (typeof exSemLacunas === "function" ? exSemLacunas(x.pedido) : x.pedido) : v })); rxDesenhar(); });
  const ie = document.getElementById("rx-exame"); if (ie) ie.addEventListener("keydown", ev => { if (ev.key === "Enter") { ev.preventDefault(); document.getElementById("rx-add-exame").click(); } });
  on("rx-importar-ex", () => { rxImportarExames(false); rxDesenhar(); });
  /* Busca de medicamento → modelos */
  const im = document.getElementById("rx-med");
  if (im) {
    const mostrar = () => {
      const m = typeof MEDICAMENTOS !== "undefined" && MEDICAMENTOS.find(x => x.nomes.some(n => rxNorm(n) === rxNorm(im.value.trim())));
      const $m = document.getElementById("rx-modelos");
      if (!m) { $m.innerHTML = ""; $m.dataset.med = ""; return; }
      if ($m.dataset.med === m.id) return;   /* evita redesenhar (e perder o toque) quando o campo perde o foco */
      $m.dataset.med = m.id;
      const mods = (m.prescrever || []).map((p, k) => [p, k]).filter(([p]) => /USO\s|^\s*\d+\./m.test(p.texto));
      $m.innerHTML = `<p class="note">Modelos de <b>${esc(m.nomes[0])}</b>${m.receita ? ` · ${esc((typeof RECEITAS !== "undefined" && RECEITAS[m.receita] || [m.receita])[0])}` : ""}:</p>
        <div class="rx-modelos">${mods.map(([p, k]) => `<button type="button" class="cchip" data-rxmod="${k}">${esc(p.contexto)}</button>`).join("")}<button type="button" class="cchip" data-rxmod="-1">Item em branco com ${esc(m.nomes[0])}</button></div>`;
      $m.querySelectorAll("[data-rxmod]").forEach(b => b.onclick = () => {
        const k = +b.dataset.rxmod;
        if (k < 0) { e.itens.push(rxNovoItem({ nome: m.nomes[0], medId: m.id })); e.aviso = ""; }
        else rxPreencher(m.prescrever[k].texto, `${m.nomes[0]} — ${m.prescrever[k].contexto}`, false);
        rxDesenhar();
      });
    };
    im.addEventListener("input", mostrar); im.addEventListener("change", mostrar);
  }
  /* Ações */
  on("rx-baixar", () => rxExportar("baixar"));
  on("rx-imprimir", () => rxExportar("abrir"));
  on("rx-copiar", () => { const t = rxTexto(e, rxTimbrado()); try { navigator.clipboard.writeText(t).then(() => rxStatus("Texto copiado.")); } catch (err) { rxStatus("Não foi possível copiar."); } });
  on("rx-novo", () => { const tipo = e.tipo === "exames" ? "exames" : "auto"; RX_ESTADO = rxEstadoVazio(); RX_ESTADO.tipo = tipo; RX_ESTADO.copiaUsada = e.copiaUsada; rxDesenhar(); window.scrollTo(0, 0); });
  on("rx-ir-timbrado", () => { const d = document.getElementById("rx-timbrado"); d.open = true; d.scrollIntoView({ behavior: "smooth" }); });
  on("rx-salvar-tim", () => {
    const v = { salvoEm: new Date().toISOString() };
    $app.querySelectorAll("[data-rxtim]").forEach(el => v[el.dataset.rxtim] = el.value.trim());
    try { localStorage.setItem(RX_TIMBRADO_CHAVE, JSON.stringify(v)); } catch (err) {}
    rxDesenhar(); rxStatus("Timbrado salvo neste navegador.");
  });
  $app.querySelectorAll("[data-rxtim]").forEach(el => el.addEventListener("input", () => rxAtualizar(true)));
}
function rxRecalcular(card, it, inicial) {
  const q = rxCalcularQuantidade(it);
  const $c = card.querySelector("[data-calc]");
  if (q && it.qtdAuto && String(q) !== String(it.qtd)) { it.qtd = String(q); card.querySelector('[data-it="qtd"]').value = it.qtd; }
  if ($c) $c.textContent = q ? (String(q) === String(it.qtd) ? `Quantidade calculada pela posologia: ${q} ${it.unidade}.` : `Pela posologia seriam ${q} ${it.unidade}.`) : "";
  if (!inicial && $c && q && String(q) !== String(it.qtd)) {
    $c.innerHTML = `${esc($c.textContent)} <button type="button" class="link-btn">Usar ${q}</button>`;
    $c.querySelector("button").onclick = () => { it.qtd = String(q); it.qtdAuto = true; card.querySelector('[data-it="qtd"]').value = it.qtd; rxRecalcular(card, it); rxAtualizar(); };
  }
}
function rxStatus(t) { const s = document.getElementById("rx-status"); if (s) s.textContent = t; }

/* Timbrado em edição (antes de salvar) também aparece na prévia. */
function rxTimbradoAtual() {
  const t = rxTimbrado();
  $app.querySelectorAll("[data-rxtim]").forEach(el => t[el.dataset.rxtim] = el.value.trim());
  return t;
}
let rxTimer = null, rxSeq = 0;
function rxAtualizar() {
  const av = rxAvisos(RX_ESTADO);
  const $a = document.getElementById("rx-avisos");
  const cor = { critico: "vz-critico", alto: "vz-alto", atencao: "vz-atencao", info: "vz-info" };
  if ($a) $a.innerHTML = av.length ? av.map(a => `<li class="${cor[a.g]}">${esc(a.t)}</li>`).join("") : `<li class="vz-ok">Pronto para gerar.</li>`;
  clearTimeout(rxTimer);
  rxTimer = setTimeout(async () => {
    const $p = document.getElementById("rx-previa"); if (!$p) return;
    const seq = ++rxSeq;
    try {
      const pdf = await rxGerarPdf(RX_ESTADO, rxTimbradoAtual());
      if (seq !== rxSeq) return;
      await rxPreVisualizar(pdf, $p);
    } catch (err) { if ($p) $p.innerHTML = `<p class="note">Pré-visualização indisponível: ${esc(err.message)}. O botão “Baixar PDF” continua funcionando se o navegador permitir.</p>`; }
  }, 450);
}
async function rxExportar(modo) {
  const e = RX_ESTADO;
  const janela = modo === "abrir" ? window.open("", "_blank") : null;
  try {
    rxStatus("Gerando PDF…");
    const pdf = await rxGerarPdf(e, rxTimbradoAtual());
    const nome = `${e.tipo === "exames" ? "pedido-exames" : "receita"}-${(e.paciente || "paciente").toLowerCase().normalize("NFD").replace(/[^\w\s-]/g, "").trim().split(/\s+/).slice(0, 2).join("-") || "paciente"}-${e.data || ""}.pdf`;
    if (modo === "abrir") {
      const url = pdf.output("bloburl");
      if (janela) janela.location.href = url; else window.open(url, "_blank");
      rxStatus("PDF aberto em nova aba: use Imprimir ou Compartilhar.");
    } else { pdf.save(nome); rxStatus(`PDF salvo: ${nome}`); }
  } catch (err) { if (janela) janela.close(); rxStatus("Não foi possível gerar o PDF: " + err.message); }
}
