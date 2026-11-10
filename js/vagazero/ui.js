/* Vaga Zero — interface (rota #vagazero).
   Rascunho: sessionStorage (só nesta aba do navegador; some ao fechá-la).
   Histórico: dentro do prontuário criptografado de Pacientes, apenas com ele desbloqueado.
   Documentos: lidos no aparelho; guardamos só o texto reconhecido, nunca a imagem/PDF. */

const VZ_CHAVE_RASCUNHO = "vz-rascunho";
let VZ_CASO = null;
let VZ_ABA = "painel";
let VZ_ANALISE = null;

const VZ_ABAS = [["painel", "Painel"], ["dados", "1 · Dados do paciente"], ["abcde", "2 · Avaliação ABCDE"], ["saida", "3 · Preparação da saída"],
  ["riscos", "4 · Riscos e complicações"], ["farmacos", "5 · Medicamentos e doses"], ["via", "6 · Via aérea e ventilação"],
  ["monit", "7 · Monitorização"], ["conting", "8 · Contingência"], ["relatorio", "9 · Relatório"]];

/* ---------- estado ---------- */
function vzCarregar() {
  if (VZ_CASO) return VZ_CASO;
  try { const s = sessionStorage.getItem(VZ_CHAVE_RASCUNHO); if (s) VZ_CASO = Object.assign(vzCasoVazio(), JSON.parse(s)); } catch (e) {}
  if (!VZ_CASO) VZ_CASO = vzCasoVazio();
  return VZ_CASO;
}
let vzTimerSalvar = null;
function vzSalvarRascunho() {
  VZ_CASO.atualizadoEm = new Date().toISOString();
  clearTimeout(vzTimerSalvar);
  vzTimerSalvar = setTimeout(() => { try { sessionStorage.setItem(VZ_CHAVE_RASCUNHO, JSON.stringify(VZ_CASO)); } catch (e) {} }, 250);
}
const vzGet = (obj, caminho) => caminho.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
function vzSet(caminho, valor, origem = "informado") {
  const partes = caminho.split("."), ultimo = partes.pop();
  const alvo = partes.reduce((o, k) => (o[k] ||= {}), VZ_CASO);
  const antes = alvo[ultimo];
  if (String(antes ?? "") === String(valor ?? "")) return;
  alvo[ultimo] = valor;
  VZ_CASO.origem[caminho] = origem;
  VZ_CASO.log.push({ t: new Date().toISOString(), campo: caminho, de: antes ?? "", para: valor, origem, por: typeof Perfil !== "undefined" ? Perfil.nomeCompleto() : "" });
  vzSalvarRascunho();
}
function vzReanalisar() { VZ_ANALISE = vzAnalisar(VZ_CASO); return VZ_ANALISE; }
const vzAgoraHora = () => new Date().toTimeString().slice(0, 5);

/* ---------- componentes ---------- */
const VZ_COR_NIVEL = { baixo: "vz-ok", moderado: "vz-atencao", alto: "vz-alto", critico: "vz-critico", indeterminado: "vz-info" };
const vzSelo = nivel => `<span class="vz-selo ${VZ_COR_NIVEL[nivel]}">${esc(VZ_NIVEL_NOME[nivel])}</span>`;
const vzLista = (arr, cls = "") => arr && arr.length ? `<ul class="${cls}">${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
const vzCard = (titulo, corpo, cls = "") => `<section class="vz-card ${cls}">${titulo ? `<h3>${titulo}</h3>` : ""}${corpo}</section>`;
function vzSecoesHTML(secoes) {
  return (secoes || []).map(s => `<details class="vz-sec"><summary>${esc(s.titulo)}</summary>
    ${vzLista(s.itens)}
    ${s.tabela ? `<div class="table-wrap"><table><thead><tr>${s.tabela.colunas.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${s.tabela.linhas.map(l => `<tr>${l.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : ""}
    ${s.nota ? `<p class="note">${esc(s.nota)}</p>` : ""}</details>`).join("");
}
function vzOrigemTag(caminho) {
  const o = VZ_CASO.origem[caminho];
  const auto = VZ_CASO.extracao && VZ_CASO.extracao.auto && VZ_CASO.extracao.auto[caminho];
  if (o !== "documento") return auto && auto.naoAferido && vzTxt(vzGet(VZ_CASO, caminho)) === "" ? `<span class="vz-tag-origem falta">não aferido no documento</span>` : "";
  if (auto && auto.conflito) return `<span class="vz-tag-origem conflito" title="O documento traz valores diferentes">conferir: valores diferentes no documento</span>`;
  if (auto && auto.conferir) return `<span class="vz-tag-origem conferir">do documento · conferir</span>`;
  return `<span class="vz-tag-origem doc" title="Preenchido automaticamente a partir do documento">do documento</span>`;
}
/* Alternativas encontradas no documento para um campo em conflito. */
function vzAlternativas(caminho) {
  const auto = VZ_CASO.extracao && VZ_CASO.extracao.auto && VZ_CASO.extracao.auto[caminho];
  if (!auto || !auto.conflito || VZ_CASO.origem[caminho] !== "documento") return "";
  const atual = String(vzGet(VZ_CASO, caminho) ?? "");
  return `<span class="vz-alts">${auto.alternativas.map((x, i) => `<button type="button" class="vz-alt" data-alt="${caminho}|${i}" aria-pressed="${String(x.valor) === atual}">${esc(x.texto)}</button>`).join("")}</span>`;
}
/* Campo de formulário ligado ao caso. tipo: text | number | select | textarea */
function vzCampo(caminho, rotulo, tipo = "text", opcoes = null, extra = {}) {
  const v = vzGet(VZ_CASO, caminho) ?? "";
  const id = "vz-" + caminho.replace(/\./g, "-");
  const att = `id="${id}" data-vz="${caminho}"${extra.placeholder ? ` placeholder="${esc(extra.placeholder)}"` : ""}${extra.step ? ` step="${extra.step}"` : ""}${tipo === "number" ? ' inputmode="decimal"' : ""}`;
  let ctrl;
  if (tipo === "select") ctrl = `<select ${att}>${opcoes.map(([val, txt]) => `<option value="${esc(val)}" ${String(v) === String(val) ? "selected" : ""}>${esc(txt)}</option>`).join("")}</select>`;
  else if (tipo === "textarea") ctrl = `<textarea ${att} rows="${extra.linhas || 2}">${esc(v)}</textarea>`;
  else ctrl = `<input ${att} type="${tipo === "number" ? "text" : tipo}" value="${esc(v)}">`;
  const faltando = VZ_ANALISE && VZ_ANALISE.faltando.find(f => f.campo === caminho);
  const doc = VZ_CASO.origem[caminho] === "documento";
  const tag = vzOrigemTag(caminho);
  return `<label class="campo vz-campo ${extra.largo ? "largo" : ""} ${faltando ? "vz-falta-" + faltando.nivel : ""} ${doc ? "vz-do-doc" : ""}" for="${id}"><span>${esc(rotulo)} ${tag}${faltando && !tag.includes("não aferido") ? `<em class="vz-nao-inf">não informado</em>` : ""}</span>${ctrl}${vzAlternativas(caminho)}</label>`;
}

/* ---------- tela ---------- */
function telaVagaZero(aba) {
  vzCarregar();
  if (aba) VZ_ABA = aba;
  vzReanalisar();
  const a = VZ_ANALISE;
  $app.innerHTML = `<div class="view vz">
    <div class="f-head vz-head">
      <div><h2>Vaga Zero</h2><p>Preparação e segurança no transporte inter-hospitalar</p></div>
      <div class="vz-acoes">
        <button class="seg" id="vz-novo">Novo caso</button>
        <button class="seg" id="vz-salvar" title="Salvar no prontuário criptografado">Salvar com segurança</button>
        <button class="seg" id="vz-historico">Transferências anteriores</button>
      </div>
    </div>
    <div class="vz-aviso" role="note">${ic("alerta")}<span><b>Apoio à decisão.</b> Nenhuma classificação deste módulo autoriza o transporte: a decisão é do médico responsável, junto à regulação. Confira doses, concentrações e protocolos institucionais.</span></div>
    <div class="vz-resumo" id="vz-resumo">${vzResumoHTML(a)}</div>
    <nav class="tabs vz-tabs" role="tablist">${VZ_ABAS.map(([k, n]) => `<button role="tab" data-vztab="${k}" aria-selected="${k === VZ_ABA}">${n}${vzBadgeAba(k, a)}</button>`).join("")}</nav>
    <div id="vz-conteudo">${vzConteudoAba(VZ_ABA, a)}</div>
  </div>`;
  vzLigarComuns();
  vzLigarAba(VZ_ABA);
  const ativo = $app.querySelector('.vz-tabs [aria-selected="true"]');
  if (ativo) ativo.scrollIntoView({ block: "nearest", inline: "center" });
}
function vzBadgeAba(k, a) {
  const n = k === "saida" ? a.pendCriticos.length + a.antes.filter(x => x.g === "critico").length : k === "dados" ? a.faltando.filter(f => f.nivel === "essencial").length + a.inconsistencias.length : k === "riscos" ? a.complicacoes.length : 0;
  return n ? ` <span class="badge">${n}</span>` : "";
}
function vzResumoHTML(a) {
  const p = VZ_CASO.pac, t = VZ_CASO.transf;
  const perfilTxt = { neonato: "Recém-nascido", pediatrico: "Pediátrico", adulto: "Adulto" }[a.perfil] || "Perfil indefinido (informe a idade)";
  return `<div class="vz-resumo-l">${vzSelo(a.risco.nivel)}
      <span class="vz-perfil">${perfilTxt}${p.peso ? ` · ${esc(p.peso)} kg` : " · peso não informado"}${p.gestante === "sim" ? " · gestante" : ""}</span>
      <span class="vz-dx">${esc(t.dxPrincipal || "Diagnóstico não informado")}${t.destino ? ` → ${esc(t.destino)}` : ""}</span></div>
    <div class="vz-resumo-r">
      <span class="vz-cont ${a.antes.some(x => x.g === "critico") ? "vz-critico" : ""}">${a.antes.length} a resolver antes da saída</span>
      <span class="vz-cont ${a.pendCriticos.length ? "vz-alto" : ""}">${a.pendCriticos.length} itens críticos do checklist pendentes</span>
      <span class="vz-cont ${a.inconsistencias.length ? "vz-atencao" : ""}">${a.inconsistencias.length} inconsistências</span>
    </div>`;
}
function vzAtualizarResumo() {
  vzReanalisar();
  const r = document.getElementById("vz-resumo");
  if (r) r.innerHTML = vzResumoHTML(VZ_ANALISE);
  $app.querySelectorAll("[data-vztab]").forEach(b => { const n = VZ_ABAS.find(x => x[0] === b.dataset.vztab)[1]; b.innerHTML = n + vzBadgeAba(b.dataset.vztab, VZ_ANALISE); });
}
function vzConteudoAba(k, a) {
  return ({ painel: vzAbaPainel, dados: vzAbaDados, abcde: vzAbaABCDE, saida: vzAbaSaida, riscos: vzAbaRiscos, farmacos: vzAbaFarmacos,
    via: vzAbaVia, monit: vzAbaMonit, conting: vzAbaConting, relatorio: vzAbaRelatorio }[k] || vzAbaPainel)(a);
}
function vzIrAba(k) { VZ_ABA = k; telaVagaZero(); window.scrollTo(0, 0); }

/* ---------- PAINEL ---------- */
function vzAbaPainel(a) {
  const top = a.complicacoes.slice(0, 6);
  const decisoes = a.antes.filter(x => x.decisao);
  const guiaPerfil = a.perfil === "neonato" ? VZ_GUIAS.neonatal : a.perfil === "pediatrico" ? VZ_GUIAS.pediatrico : VZ_CASO.pac.gestante === "sim" ? VZ_GUIAS.gestante : null;
  return `<div class="vz-grid2">
    ${vzCard("1. Qual é o estado clínico atual?", `<p>${vzSelo(a.risco.nivel)}</p>${vzLista(a.risco.justificativas.slice(0, 8), "vz-just")}
      <p class="note">Classificação por regras explícitas (ABCDE, sinais vitais por idade, diagnóstico). Não é autorização para transporte.</p>`, "vz-c-" + a.risco.nivel)}
    ${vzCard("3. O que conferir antes de sair", a.antes.length ? `<ul class="vz-acoes-lista">${a.antes.map(x => `<li class="${x.g === "critico" ? "vz-critico" : "vz-atencao"}">${esc(x.t)}${x.decisao ? ` <b class="vz-decisao">decisão médica</b>` : ""}</li>`).join("")}</ul>` : `<p class="vz-ok-txt">Nenhuma pendência identificada nos dados informados.</p>`)}
  </div>
  ${decisoes.length ? vzCard("Exigem decisão do médico responsável", vzLista(decisoes.map(d => d.t)), "vz-c-decisao") : ""}
  ${a.inconsistencias.length || a.faltando.length ? `<div class="vz-grid2">
    ${a.faltando.length ? vzCard("Dados não informados", `<ul>${a.faltando.map(f => `<li class="${f.nivel === "essencial" ? "vz-critico" : ""}">${esc(f.rotulo)} <small>(${f.nivel})</small></li>`).join("")}</ul><button class="link-btn" data-irpara="dados">Preencher em Dados do paciente →</button>`) : ""}
    ${a.inconsistencias.length ? vzCard("Inconsistências a conferir", vzLista(a.inconsistencias), "vz-c-atencao") : ""}
  </div>` : ""}
  ${vzCard("2. Maiores riscos durante o trajeto", top.length ? `<div class="vz-riscos-mini">${top.map(({ c, motivos }) => `<button class="vz-mini ${c.grupo}" data-irpara="riscos" data-foco="${c.id}"><b>${esc(c.titulo)}</b><small>${esc(motivos.slice(0, 2).join(" · "))}</small></button>`).join("")}</div>`
    : `<p class="empty">Preencha diagnóstico e sinais vitais para priorizar as complicações.</p>`)}
  <div class="vz-grid2">
    ${vzCard("4–7. Materiais, medicamentos, doses e procedimentos", `<ul>
      <li>${a.pendCriticos.length} itens críticos de checklist pendentes — <button class="link-btn" data-irpara="saida">abrir checklist</button></li>
      <li>Medicamentos citados nas complicações prováveis: ${esc([...new Set(top.flatMap(x => (x.c.medicamentos || []).map(m => m.nome)))].slice(0, 10).join(", ") || "—")} — <button class="link-btn" data-irpara="farmacos">calcular doses</button></li>
      <li>Procedimentos possíveis: ${esc([...new Set(top.flatMap(x => x.c.procedimentos || []))].slice(0, 6).join("; ") || "—")}</li>
      <li>Via aérea e O₂: <button class="link-btn" data-irpara="via">cânula, ventilação e autonomia do cilindro</button></li></ul>`)}
    ${vzCard("8–10. Como agir, o que monitorar, o que comunicar", `<ul>
      <li><button class="link-btn" data-irpara="conting">Plano "Se acontecer X, faça Y"</button> (${a.contingencia.length} cenários)</li>
      <li>Monitorar: ${esc([...new Set(top.flatMap(x => x.c.monitorar || []))].slice(0, 6).join("; ") || "PA, FC, FR, SpO₂, temperatura, glicemia, nível de consciência")}</li>
      <li><button class="link-btn" data-irpara="monit">Registrar sinais vitais por horário</button> · <button class="link-btn" data-irpara="relatorio">Relatório SBAR para o destino</button></li></ul>`)}
  </div>
  ${guiaPerfil ? vzCard(a.perfil === "neonato" ? "Fluxo neonatal" : a.perfil === "pediatrico" ? "Fluxo pediátrico" : "Gestante", vzSecoesHTML(guiaPerfil)) : ""}`;
}

/* ---------- DADOS ---------- */
const VZ_OPC_SEXO = [["", "—"], ["F", "Feminino"], ["M", "Masculino"]];
const VZ_OPC_O2 = [["", "— não informado —"], ["ar", "Ar ambiente"], ["cateter", "Cateter nasal"], ["mascara", "Máscara simples"], ["venturi", "Máscara de Venturi"],
  ["reservatorio", "Máscara com reservatório"], ["oxitenda", "Oxitenda / capacete"], ["cpap", "CPAP"], ["vni", "VNI"], ["vm", "Ventilação mecânica (IOT/TQT)"]];
function vzAbaDados(a) {
  const ex = VZ_CASO.extracao;
  const neo = a.perfil === "neonato", ped = a.perfil === "pediatrico";
  return `${vzCard("Enviar ficha, prontuário ou exames", `
    <p class="note">A leitura acontece <b>neste aparelho</b> (PDF por pdf.js; foto e PDF escaneado por OCR em português). Nenhum arquivo é enviado a servidor e a imagem não é guardada — só o texto reconhecido. Os campos são <b>preenchidos automaticamente</b> com o que for reconhecido; confira os marcados em amarelo. O que você já digitou não é sobrescrito.</p>
    <div class="vz-upload">
      <label class="vz-btn-grande" for="vz-arquivo">${ic("documento")} Foto ou PDF<input type="file" id="vz-arquivo" accept="image/*,application/pdf" multiple hidden></label>
      <label class="vz-btn-grande" for="vz-camera">${ic("olho")} Fotografar ficha<input type="file" id="vz-camera" accept="image/*" capture="environment" hidden></label>
    </div>
    <p id="vz-status" class="vz-status" aria-live="polite"></p>
    ${VZ_CASO.anexos.length ? `<p class="note">Lidos: ${VZ_CASO.anexos.map(x => esc(x.nome)).join(", ")}</p>` : ""}
    ${ex ? vzResumoAutoHTML(ex, a) : ""}
    ${ex ? `<details class="vz-sec"><summary>Tudo o que foi reconhecido no documento (${ex.candidatos.length})</summary>${vzCandidatosHTML(ex)}</details>` : ""}`)}
  ${neo || ped ? vzCard(neo ? "Fluxo neonatal — obrigatórios" : "Fluxo pediátrico — obrigatórios", `<p class="note">${neo ? "Peso atualizado e idade gestacional são obrigatórios. Doses de adulto nunca se aplicam ao recém-nascido." : "Peso medido é obrigatório (não estimar). Doses sempre por kg, com dose máxima."}</p>
    <div class="form-doc">${vzCampo("pac.peso", "Peso atual (kg)", "number", null, { placeholder: neo ? "ex.: 1,4" : "" })}${neo ? vzCampo("pac.ig", "IG ao nascer (semanas)", "number") + vzCampo("rn.pesoNascimento", "Peso ao nascer (kg)", "number") + vzCampo("rn.apgar", "Apgar (1º/5º)") + vzCampo("rn.pc", "Perímetro cefálico (cm)", "number") : ""}</div>`, "vz-c-info") : ""}
  ${vzCard("Identificação clínica", `<div class="form-doc">
    ${vzCampo("pac.nome", "Nome / identificação (opcional)")}
    ${vzCampo("pac.idade", "Idade", "number")}
    ${vzCampo("pac.idadeUnidade", "Unidade da idade", "select", [["anos", "anos"], ["meses", "meses"], ["dias", "dias"]])}
    ${vzCampo("pac.sexo", "Sexo", "select", VZ_OPC_SEXO)}
    ${neo || ped ? "" : vzCampo("pac.peso", "Peso (kg)", "number")}
    ${vzCampo("pac.altura", "Altura (cm)", "number", null, { placeholder: "para peso predito" })}
    ${!neo && !ped && VZ_CASO.pac.sexo !== "M" ? vzCampo("pac.gestante", "Gestação", "select", [["", "—"], ["nao", "Não gestante"], ["sim", "Gestante"], ["puerpera", "Puérpera"]]) : ""}
    ${VZ_CASO.pac.gestante === "sim" ? vzCampo("pac.ig", "Idade gestacional (semanas)", "number") : ""}
    ${vzCampo("pac.comorbidades", "Comorbidades", "textarea", null, { largo: true })}
    ${vzCampo("pac.alergias", "Alergias (escreva 'nega' se não houver)", "text", null, { largo: true })}
    ${vzCampo("pac.medicacoes", "Medicamentos de uso habitual", "textarea", null, { largo: true })}</div>`)}
  ${vzCard("Dados da transferência", `<div class="form-doc">
    ${vzCampo("transf.motivo", "Motivo da transferência", "text", null, { largo: true })}
    ${vzCampo("transf.dxPrincipal", "Diagnóstico principal / hipótese", "text", null, { largo: true })}
    ${vzCampo("transf.dxSecundarios", "Hipóteses secundárias", "text", null, { largo: true })}
    ${vzCampo("transf.origem", "Hospital de origem")}${vzCampo("transf.destino", "Hospital de destino")}
    ${vzCampo("transf.regulacao", "Regulação / senha / ficha")}
    ${vzCampo("transf.distanciaKm", "Distância (km)", "number")}${vzCampo("transf.tempoMin", "Tempo estimado (min)", "number")}
    ${vzCampo("transf.ambulancia", "Tipo de ambulância", "select", [["", "—"], ["basica", "Básica (USB)"], ["avancada", "Avançada (USA)"], ["neonatal", "Neonatal"], ["aeromedico", "Aeromédico"]])}
    ${vzCampo("transf.equipe", "Profissionais que acompanharão", "text", null, { largo: true })}
    ${vzCampo("transf.pendencias", "Exames e pendências", "textarea", null, { largo: true })}
    ${vzCampo("transf.destaques", "Pontos importantes", "textarea", null, { largo: true, linhas: 3 })}
    ${vzCampo("transf.resumo", "Resumo clínico / história / evolução", "textarea", null, { largo: true, linhas: 4 })}</div>`)}
  ${vzCard("Estado clínico atual", `<div class="form-doc vz-sv">
    ${vzCampo("sv.hora", "Horário da aferição", "time")}
    ${vzCampo("sv.pas", "PA sistólica (mmHg)", "number")}${vzCampo("sv.pad", "PA diastólica (mmHg)", "number")}
    ${vzCampo("sv.fc", "FC (bpm)", "number")}${vzCampo("sv.fr", "FR (irpm)", "number")}${vzCampo("sv.spo2", "SpO₂ (%)", "number")}
    ${vzCampo("sv.temp", "Temperatura (°C)", "number")}${vzCampo("sv.glicemia", "Glicemia capilar (mg/dL)", "number")}
    ${neo ? "" : vzCampo("sv.glasgow", "Glasgow (3–15)", "number")}
    ${vzCampo("sv.dor", "Dor (0–10)", "number")}${vzCampo("sv.diurese", "Diurese")}
    ${vzCampo("sv.perfusao", "Perfusão periférica", "text", null, { placeholder: "ex.: TEC 2 s / lentificada" })}
    ${vzCampo("sv.exameFisico", "Exame físico", "textarea", null, { largo: true, linhas: 3 })}
    ${vzCampo("sv.estadoGeral", "Estado geral")}
    ${vzCampo("sv.neuro", "Estado neurológico", "text", null, { largo: true })}
    ${vzCampo("sv.o2", "Oxigênio / suporte", "select", VZ_OPC_O2)}${vzCampo("sv.o2fluxo", "Fluxo de O₂ (L/min)", "number")}${vzCampo("sv.fio2", "FiO₂ (%)", "number")}
    ${vzCampo("sv.vent", "Parâmetros do ventilador", "text", null, { largo: true, placeholder: "modo, VT, FR, PEEP, FiO₂" })}
    ${vzCampo("sv.acessosQtd", "Acessos venosos", "select", [["", "—"], ["0", "Nenhum"], ["1", "1 acesso"], ["2", "2 ou mais"]])}
    ${vzCampo("sv.acessosTipo", "Tipo / local / calibre dos acessos", "text", null, { largo: true })}
    ${vzCampo("sv.infusoes", "Drogas em infusão contínua (droga, concentração, mL/h)", "textarea", null, { largo: true })}
    ${vzCampo("sv.dispositivos", "Dispositivos (IOT, SNG, SVD, drenos)", "text", null, { largo: true })}
    ${vzCampo("sv.outros", "Outros achados", "textarea", null, { largo: true })}</div>`)}
  ${ex && ex.exames && ex.exames.length ? vzCard("Exames reconhecidos nos documentos", `<div class="table-wrap"><table><thead><tr><th>Exame</th><th>Valor</th><th>Trecho</th></tr></thead><tbody>${ex.exames.map(e => `<tr><td>${esc(e.nome)}</td><td>${esc(e.valor)} ${esc(e.unidade)}</td><td><small>${esc(e.trecho)}</small></td></tr>`).join("")}</tbody></table></div>`) : ""}
  ${ex && ex.texto ? `<details class="vz-sec"><summary>Texto reconhecido nos documentos</summary><pre class="rx">${esc(ex.texto)}</pre></details>` : ""}`;
}
function vzCandidatosHTML(ex) {
  const pend = ex.candidatos.filter(c => !c.aceito && !c.ignorado);
  if (!ex.candidatos.length) return `<p class="empty">Nenhum campo reconhecido. Confira a qualidade da imagem ou digite os dados.</p>`;
  const fmt = c => c.vazio ? "não aferido no documento" : c.texto || (typeof c.valor === "number" ? VZ_FMT(c.valor, 3) : c.valor) + (c.unidade ? " " + c.unidade : "");
  return `<div class="vz-cand">
    <p class="note">★ = valor usado no preenchimento. Para trocar, use "Usar este" ou edite o campo.</p>
    <div class="table-wrap"><table><thead><tr><th>Campo</th><th>Valor reconhecido</th><th>Origem no documento</th><th></th></tr></thead><tbody>
    ${ex.candidatos.map((c, i) => `<tr class="${String(vzGet(VZ_CASO, c.campo) ?? "") === String(vzValorCampo(c)) ? "vz-aceito" : c.conflito ? "vz-conflito" : ""}">
      <td>${esc(VZ_ROTULO_CAMPO[c.campo] || c.campo)}${c.conflito ? ` <span class="tag ci">conflito</span>` : ""}${c.interpretar ? ` <span class="tag adj">conferir</span>` : ""}${c.sugestao ? ` <span class="tag">sugestão</span>` : ""}</td>
      <td>${c.preferido ? "★ " : ""}<b>${esc(fmt(c))}</b></td><td><small>${esc((c.trechos || []).join(" | "))}</small></td>
      <td class="vz-cand-acoes">${c.vazio ? "—" : String(vzGet(VZ_CASO, c.campo) ?? "") === String(vzValorCampo(c)) ? "✓ no campo" : `<button class="seg" data-aceitar="${i}">Usar este</button>`}</td></tr>`).join("")}
    </tbody></table></div></div>`;
}
function vzAceitarCandidato(i) {
  const ex = VZ_CASO.extracao, c = ex.candidatos[i];
  if (!c || c.vazio) return;
  const valor = vzValorCampo(c);
  if (c.campo === "pac.idade") vzSet("pac.idadeUnidade", c.unidade || "anos", "documento");
  if (c.campo.startsWith("rn.") || c.campo.startsWith("pac.") || c.campo.startsWith("sv.") || c.campo.startsWith("transf.")) vzSet(c.campo, valor, "documento");
  c.aceito = true;
  ex.candidatos.forEach(o => { if (o.campo === c.campo) { o.resolvido = true; if (o !== c && !o.aceito) o.ignorado = true; } });
  vzSalvarRascunho();
}
async function vzProcessarArquivos(arquivos) {
  const st = document.getElementById("vz-status");
  const msg = t => { if (st) st.textContent = t; };
  let texto = (VZ_CASO.extracao && VZ_CASO.extracao.texto) || "";
  for (const f of arquivos) {
    msg(`Lendo ${f.name}…`);
    try {
      const t = await vzLerArquivo(f, msg);
      texto += `\n\n=== ${f.name} ===\n${t}`;
      VZ_CASO.anexos.push({ nome: f.name, tipo: f.type, lidoEm: new Date().toISOString(), caracteres: t.length });
    } catch (e) { msg(`Não foi possível ler ${f.name}: ${e.message}`); return; }
  }
  const r = vzExtrairCampos(texto);
  const antigos = (VZ_CASO.extracao && VZ_CASO.extracao.candidatos) || [];
  r.candidatos.forEach(c => { const v = antigos.find(o => o.campo === c.campo && String(o.valor) === String(c.valor)); if (v) { c.aceito = v.aceito; c.ignorado = v.ignorado; c.resolvido = v.resolvido; } });
  VZ_CASO.extracao = { texto, candidatos: r.candidatos, exames: r.exames };
  vzAutoPreencher(VZ_CASO.extracao);
  vzSalvarRascunho();
  telaVagaZero("dados");
  window.scrollTo(0, 0);
}

/* Valor do candidato no formato do campo do formulário. */
function vzValorCampo(c) {
  if (c.campo === "pac.ig") return Math.round(c.valor * 10) / 10;
  return c.valor;
}
/* Preenche os campos com o valor preferido de cada um (sinais vitais: o mais recente do documento).
   Não sobrescreve o que o médico digitou. Guarda alternativas para conflitos. */
function vzAutoPreencher(ex) {
  const auto = {}; let preenchidos = 0;
  const campos = [...new Set(ex.candidatos.map(c => c.campo))];
  const mantidos = [];
  const fmt = c => c.texto || (typeof c.valor === "number" ? VZ_FMT(c.valor, 3) : String(c.valor)) + (c.unidade ? " " + c.unidade : "");
  for (const campo of campos) {
    const cs = ex.candidatos.filter(c => c.campo === campo);
    const pref = cs.find(c => c.preferido);
    if (!pref) { if (cs.some(c => c.vazio)) auto[campo] = { naoAferido: true }; continue; }
    const atual = vzGet(VZ_CASO, campo);
    if (vzTxt(atual) !== "" && VZ_CASO.origem[campo] !== "documento") { mantidos.push(campo); continue; }
    auto[campo] = { conflito: pref.conflito, conferir: pref.interpretar || pref.sugestao,
      alternativas: cs.filter(c => !c.vazio && (!c.sugestao || c === pref)).map(c => ({ valor: vzValorCampo(c), texto: fmt(c), unidade: c.unidade })) };
    if (campo === "pac.idade") vzSet("pac.idadeUnidade", pref.unidade || "anos", "documento");
    vzSet(campo, vzValorCampo(pref), "documento");
    pref.aceito = true; preenchidos++;
  }
  /* Exame físico mínimo a partir do que a ficha traz em campos separados. */
  if (vzTxt(VZ_CASO.sv.exameFisico) === "" && (VZ_CASO.sv.estadoGeral || VZ_CASO.sv.perfusao)) {
    vzSet("sv.exameFisico", [VZ_CASO.sv.estadoGeral && `Estado geral: ${VZ_CASO.sv.estadoGeral}`, VZ_CASO.sv.perfusao && `Perfusão periférica: ${VZ_CASO.sv.perfusao}`].filter(Boolean).join(". ") + ".", "documento");
    auto["sv.exameFisico"] = { conferir: true, alternativas: [] };
  }
  ex.auto = auto;
  ex.resumoAuto = { preenchidos, conflitos: Object.values(auto).filter(x => x.conflito).length, mantidos };
}
function vzResumoAutoHTML(ex, a) {
  const R = ex.resumoAuto; if (!R) return "";
  const conflitos = Object.entries(ex.auto || {}).filter(([, x]) => x.conflito);
  const naoAf = Object.entries(ex.auto || {}).filter(([k, x]) => x.naoAferido && vzTxt(vzGet(VZ_CASO, k)) === "");
  return `<div class="vz-auto-res">
    <p class="vz-auto-ok">✓ ${R.preenchidos} campos preenchidos automaticamente a partir do documento.</p>
    ${conflitos.length ? `<div class="vz-auto-conf"><b>${conflitos.length} com valores diferentes no documento.</b> Em destaque, o valor usado (nos sinais vitais, o registro mais recente); toque no outro para trocar:<ul>${conflitos.map(([k, x]) => `<li>${esc(VZ_ROTULO_CAMPO[k] || k)}: ${x.alternativas.map((alt, i) => `<button type="button" class="vz-alt" data-alt="${k}|${i}" aria-pressed="${String(alt.valor) === String(vzGet(VZ_CASO, k) ?? "")}">${esc(alt.texto)}</button>`).join(" ")}</li>`).join("")}</ul></div>` : ""}
    ${naoAf.length ? `<p class="vz-atencao vz-alerta-linha">Não aferido no documento: ${naoAf.map(([k]) => esc(VZ_ROTULO_CAMPO[k] || k)).join(", ")}.</p>` : ""}
    ${a.faltando.length ? `<p class="note"><b>Não encontrado no documento (completar):</b> ${a.faltando.map(f => esc(f.rotulo)).join(", ")}.</p>` : ""}
    ${R.mantidos.length ? `<p class="note">Mantidos os valores que você já tinha digitado: ${R.mantidos.map(k => esc(VZ_ROTULO_CAMPO[k] || k)).join(", ")}.</p>` : ""}
    <button class="seg" data-irpara="painel">Ver o painel do caso →</button></div>`;
}

/* ---------- ABCDE ---------- */
function vzAbaABCDE(a) {
  const nivelCls = { critico: "vz-critico", alto: "vz-alto", moderado: "vz-atencao" };
  return Object.entries(VZ_ABCDE).map(([l, def]) => {
    const achados = a.abcde[l];
    const pior = achados.reduce((m, x) => Math.max(m, ["ok", "moderado", "alto", "critico"].indexOf(x.n)), 0);
    return vzCard(`${esc(def.titulo)} ${pior ? `<span class="vz-selo ${nivelCls[["ok", "moderado", "alto", "critico"][pior]]}">${["", "atenção", "alto", "crítico"][pior]}</span>` : ""}`,
      `${achados.length ? `<ul class="vz-acoes-lista">${achados.map(x => `<li class="${nivelCls[x.n] || ""}">${esc(x.t)}</li>`).join("")}</ul>` : `<p class="note">Sem alteração detectada nos dados informados.</p>`}
      ${l === "B" ? `<p class="note">FR ${esc(VZ_CASO.sv.fr || "—")} · SpO₂ ${esc(VZ_CASO.sv.spo2 || "—")}% · ${esc(VZ_O2_NOMES[VZ_CASO.sv.o2] || "suporte não informado")}${a.ref ? ` · referência para a idade: FR ${a.ref.fr.join("–")}` : ""}</p>` : ""}
      ${l === "C" ? `<p class="note">PA ${esc(VZ_CASO.sv.pas || "—")}×${esc(VZ_CASO.sv.pad || "—")} · FC ${esc(VZ_CASO.sv.fc || "—")}${a.ref ? ` · FC de referência ${a.ref.fc.join("–")} · hipotensão se PAS < ${a.ref.pasMin}` : ""}</p>` : ""}
      ${l === "D" ? `<p class="note">${a.perfil === "neonato" ? "" : `Glasgow ${esc(VZ_CASO.sv.glasgow || "—")} · `}Glicemia ${esc(VZ_CASO.sv.glicemia || "—")} mg/dL</p>` : ""}
      ${l === "E" ? `<p class="note">Temperatura ${esc(VZ_CASO.sv.temp || "—")} °C</p>` : ""}
      <div class="form-doc">${def.itens.map(([k, rot, ops]) => vzCampo(`abcde.${l}.${k}`, rot, "select", [["", "— não avaliado —"], ...ops.map(o => [o, o])])).join("")}</div>`,
      pior >= 3 ? "vz-c-critico" : pior === 2 ? "vz-c-alto" : "");
  }).join("");
}

/* ---------- PREPARAÇÃO DA SAÍDA ---------- */
const VZ_ST = [["feito", "Feito"], ["pendente", "Pendente"], ["na", "N/A"], ["indisponivel", "Indisponível"]];
function vzAbaSaida(a) {
  return `${a.pendCriticos.length ? `<div class="vz-alerta-critico">${ic("alerta")}<div><b>${a.pendCriticos.length} itens críticos pendentes ou indisponíveis</b><br>${a.pendCriticos.map(i => esc(i.texto)).join(" · ")}</div></div>` : `<div class="vz-alerta-ok">Nenhum item crítico pendente.</div>`}
    ${a.antes.length ? vzCard("Resolver antes da saída", `<ul class="vz-acoes-lista">${a.antes.map(x => `<li class="${x.g === "critico" ? "vz-critico" : "vz-atencao"}">${esc(x.t)}${x.decisao ? ` <b class="vz-decisao">decisão médica</b>` : ""}</li>`).join("")}</ul>`) : ""}
    <div class="vz-acoes-linha"><button class="seg" id="vz-imprimir-check">Imprimir checklist</button><button class="seg" id="vz-marcar-na">Marcar não críticos sem resposta como N/A</button></div>
    ${a.checklist.map(g => vzCard(g.grupo, `<div class="vz-check">${g.itens.map(i => `<div class="vz-check-item ${i.alerta ? "vz-check-alerta" : ""} st-${i.status || "vazio"}">
        <span class="vz-check-t">${i.critico ? `<b class="vz-crit-tag">crítico</b> ` : ""}${esc(i.texto)}</span>
        <span class="vz-seg4" role="group" aria-label="${esc(i.texto)}">${VZ_ST.map(([v, n]) => `<button class="vz-st" data-check="${i.id}" data-st="${v}" aria-pressed="${i.status === v}">${n}</button>`).join("")}</span></div>`).join("")}</div>`)).join("")}
    ${vzCard("Oxigênio para o trajeto", a.o2 ? vzO2ResultadoHTML(a.o2) + `<button class="link-btn" data-irpara="via">Ajustar cálculo →</button>` : `<p class="note">Calcule a autonomia do cilindro na aba Via aérea e ventilação.</p><button class="link-btn" data-irpara="via">Calcular autonomia →</button>`)}`;
}
function vzO2ResultadoHTML(o) {
  if (!o.ok) return `<ul class="vz-acoes-lista">${o.bloqueios.map(b => `<li class="vz-atencao">${esc(b)}</li>`).join("")}</ul>`;
  return `<div class="vz-num-grid"><div><span>O₂ disponível</span><b>${VZ_FMT(o.litros, 0)} L</b></div><div><span>Autonomia</span><b>${VZ_FMT(o.autonomia, 0)} min</b></div><div><span>Necessário com margem</span><b>${VZ_FMT(o.necessario, 0)} L</b></div>
    <div class="${o.suficiente ? "vz-ok" : "vz-critico"}"><span>Situação</span><b>${o.suficiente ? "Suficiente" : "INSUFICIENTE"}</b></div></div>
    ${o.alertas.map(x => `<p class="${x.g === "grave" ? "vz-critico" : "vz-atencao"} vz-alerta-linha">${esc(x.t)}</p>`).join("")}
    <details class="vz-sec"><summary>Fórmula</summary>${vzLista(o.formulas)}</details>`;
}

/* ---------- RISCOS ---------- */
function vzMedsTabela(meds, perfil) {
  if (!meds || !meds.length) return "";
  const col = perfil === "neonato" ? "neonatal" : perfil === "pediatrico" ? "pediatrico" : "adulto";
  return `<div class="table-wrap"><table><thead><tr><th>Medicamento</th><th>Dose (${col === "adulto" ? "adulto" : col === "pediatrico" ? "criança, por kg" : "recém-nascido"})</th><th>Diluição · via · velocidade · repetição</th></tr></thead><tbody>
    ${meds.map(m => {
      const dose = m[col] || (col === "neonatal" ? "Sem dose neonatal validada nesta biblioteca" : "—");
      const calc = m.farmaco ? vzDosesPara(m.farmaco, perfil, vzN(VZ_CASO.pac.peso)).filter(d => vzNorm(d.ind.rotulo).includes(vzNorm(m.indicacao).trim().split(" ")[0]) || true).slice(0, 1).map(d => d.texto)[0] : "";
      return `<tr><td><b>${esc(m.nome)}</b><br><small>${esc(m.indicacao)}</small></td><td>${esc(dose)}${calc && vzN(VZ_CASO.pac.peso) ? `<br><small class="vz-calc-sug">${esc(calc)}</small>` : ""}</td>
      <td>${esc([m.diluicao, m.via, m.velocidade, m.repeticao].filter(Boolean).join(" · "))}${m.farmaco ? `<br><button class="link-btn" data-calc="${m.farmaco}">Calcular volume →</button>` : ""}</td></tr>`;
    }).join("")}</tbody></table></div>`;
}
function vzComplicacaoHTML(c, motivos, perfil, aberto) {
  return `<details class="vz-compl ${c.grupo}" id="vz-c-${c.id}" ${aberto ? "open" : ""}><summary><b>${esc(c.titulo)}</b><small>${esc(VZ_GRUPOS[c.grupo])}</small></summary>
    ${motivos ? `<div class="vz-porque"><b>Por que este paciente tem risco:</b> ${esc(motivos.join(" · "))}. ${esc(c.porQue)}</div>` : `<p>${esc(c.porQue)}</p>`}
    <div class="vz-grid2">
      <div><h4>Sinais de alerta</h4>${vzLista(c.sinaisAlerta)}<h4>Monitorar</h4>${vzLista(c.monitorar)}<h4>Reconhecer precocemente</h4>${vzLista(c.reconhecer)}</div>
      <div><h4>Conduta imediata</h4><ol>${c.conduta.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
        ${c.procedimentos.length ? `<h4>Procedimentos</h4>${vzLista(c.procedimentos)}` : ""}
        ${c.alternativas.length ? `<h4>Alternativas</h4>${vzLista(c.alternativas)}` : ""}</div>
    </div>
    <h4>Medicamentos</h4>${vzMedsTabela(c.medicamentos, perfil) || `<p class="note">Sem medicamento específico.</p>`}
    <div class="vz-parar"><b>Parar o transporte / parada segura / pedir apoio:</b>${vzLista(c.parar)}</div>
    <p class="vz-fontes"><b>Fontes:</b> ${esc(c.fontes.join("; "))}</p></details>`;
}
function vzAbaRiscos(a) {
  const prior = a.complicacoes;
  const resto = VZ_COMPLICACOES.filter(c => !prior.some(x => x.c.id === c.id) && (!a.perfil || c.publico.includes(a.perfil)));
  return `${prior.length ? `<p class="note">${prior.length} complicações priorizadas pela relação com o caso (diagnóstico, sinais vitais, suporte, comorbidades). A ordem segue a força da relação.</p>
      ${prior.map((x, i) => vzComplicacaoHTML(x.c, x.motivos, a.perfil, i === 0)).join("")}`
    : `<div class="vz-alerta-ok">Nenhuma complicação priorizada ainda: informe idade, diagnóstico e sinais vitais.</div>`}
    <details class="vz-sec gap-top"><summary>Biblioteca completa de intercorrências (${resto.length} não priorizadas para este caso)</summary>
      ${resto.map(c => vzComplicacaoHTML(c, null, a.perfil || "adulto", false)).join("")}</details>`;
}

/* ---------- MEDICAMENTOS E DOSES ---------- */
let VZ_CALC = { farmaco: "", indicacao: "", apres: "", concValor: "", concUnidade: "mg/mL", concOk: false, doseValor: "", doseUnidade: "", volFinal: "", infQtd: "", infUnid: "mg", infVol: "", conferido: false, conferidoPor: "" };
function vzAbaFarmacos(a) {
  const peso = vzN(VZ_CASO.pac.peso);
  const cats = Object.keys(VZ_CATEGORIAS).filter(c => VZ_FARMACOS.some(f => f.categorias.includes(c)));
  return `${vzCard("Calculadora de dose, diluição e vazão", vzCalcHTML(a), "vz-calc")}
    ${vzCard("Biblioteca de medicamentos de transporte", `<label class="campo"><span>Filtrar</span><input id="vz-filtro-farm" type="search" placeholder="Nome ou situação (ex.: convulsão, choque)"></label>
      <p class="note">Doses mostradas para o perfil atual (${esc({ neonato: "recém-nascido", pediatrico: "criança", adulto: "adulto" }[a.perfil] || "informe a idade")})${peso ? ` e peso ${VZ_FMT(peso, 3)} kg` : ", sem peso informado"}. Volumes só na calculadora, com a concentração confirmada.</p>
      ${cats.map(cat => `<h3 class="vz-grupo-h" data-cat="${cat}">${esc(VZ_CATEGORIAS[cat])}</h3>${VZ_FARMACOS.filter(f => f.categorias[0] === cat || (f.categorias.includes(cat) && !cats.includes(f.categorias[0]))).map(f => vzFarmacoHTML(f, a)).join("")}`).join("")}`)}`;
}
function vzFarmacoHTML(f, a) {
  const doses = vzDosesPara(f.id, a.perfil, vzN(VZ_CASO.pac.peso));
  return `<details class="vz-farm" data-busca="${esc(vzNorm(f.nome + " " + f.categorias.map(c => VZ_CATEGORIAS[c]).join(" ") + " " + f.indicacoes.map(i => i.rotulo).join(" ")))}">
    <summary><b>${esc(f.nome)}</b>${f.altoRisco ? ` <span class="tag ci">alto risco</span>` : ""}<small>${esc(f.categorias.map(c => VZ_CATEGORIAS[c]).join(", "))}</small></summary>
    <p><b>Apresentações:</b> ${esc(f.apresentacoes.map(x => x.rotulo).join(" · "))}</p>
    ${doses.length ? `<h4>Para este paciente</h4>${vzLista(doses.map(d => d.texto))}` : `<p class="vz-atencao vz-alerta-linha">Sem indicação cadastrada para ${esc({ neonato: "recém-nascido", pediatrico: "criança", adulto: "adulto" }[a.perfil] || "este perfil")} nesta biblioteca. Não usar dose de outra faixa.</p>`}
    <details class="vz-sec"><summary>Todas as indicações (${f.indicacoes.length})</summary>${f.indicacoes.map(i => `<div class="vz-ind"><b>${esc(i.rotulo)}</b> <span class="tag">${esc(i.faixa)}</span> <span class="tag">${i.modo === "bolus" ? "bolus" : "infusão"}</span>
      <p>Dose: ${VZ_FMT(i.dose.min, 4)}${i.dose.max !== i.dose.min ? "–" + VZ_FMT(i.dose.max, 4) : ""} ${esc(i.dose.unidade)}${i.doseMax ? ` · máx ${VZ_FMT(i.doseMax.valor, 4)} ${esc(i.doseMax.unidade)}` : ""}</p>
      <p>Diluição: ${esc(i.diluicao || "—")} · Via: ${esc(i.via)} · Velocidade: ${esc(i.velocidade)} · Repetição: ${esc(i.repeticao)}</p>${i.observacoes ? `<p class="note">${esc(i.observacoes)}</p>` : ""}
      <button class="link-btn" data-calc="${f.id}" data-calc-ind="${i.id}">Usar na calculadora →</button></div>`).join("")}</details>
    <div class="vz-grid2"><div><h4>Contraindicações</h4>${vzLista(f.contraindicacoes) || "<p>—</p>"}<h4>Cuidados</h4>${vzLista(f.cuidados) || "<p>—</p>"}</div>
      <div><h4>Efeitos adversos</h4>${vzLista(f.adversos) || "<p>—</p>"}<h4>Monitorização</h4>${vzLista(f.monitorizacao) || "<p>—</p>"}</div></div>
    <p class="vz-fontes"><b>Fontes:</b> ${esc(f.fontes.join("; "))}</p></details>`;
}
function vzCalcHTML(a) {
  const C = VZ_CALC;
  const f = VZ_FARMACOS.find(x => x.id === C.farmaco);
  const inds = f ? f.indicacoes : [];
  const ind = inds.find(i => i.id === C.indicacao);
  const unidades = ind ? (ind.modo === "infusao" ? VZ_UNIDADES_INFUSAO : VZ_UNIDADES_BOLUS) : [...VZ_UNIDADES_BOLUS, ...VZ_UNIDADES_INFUSAO];
  const modoInf = vzUnidade(C.doseUnidade).tempo;
  const res = f && C.doseValor !== "" ? vzCalcularDose({ farmaco: f, indicacao: ind, peso: vzN(VZ_CASO.pac.peso), idadeAnos: a.idadeAnos,
    conc: { valor: vzN(C.concValor), unidade: C.concUnidade }, concConfirmada: C.concOk, dose: { valor: vzN(C.doseValor), unidade: C.doseUnidade },
    bolusVolumeFinal: vzN(C.volFinal), infusao: modoInf ? { quantidade: vzN(C.infQtd), unidade: C.infUnid, volumeFinal: vzN(C.infVol) } : null }) : null;
  const opt = (v, t, sel) => `<option value="${esc(v)}" ${String(v) === String(sel) ? "selected" : ""}>${esc(t)}</option>`;
  return `<p class="note">O cálculo só acontece com peso (quando a dose é por kg), idade compatível com a indicação e concentração conferida no rótulo. Mostra a fórmula com todas as unidades.</p>
  <div class="form-doc vz-calc-form">
    <label class="campo"><span>Medicamento</span><select data-c="farmaco">${opt("", "— escolha —", C.farmaco)}${[...VZ_FARMACOS].sort((x, y) => x.nome.localeCompare(y.nome, "pt-BR")).map(x => opt(x.id, x.nome + (x.altoRisco ? " ⚠" : ""), C.farmaco)).join("")}</select></label>
    <label class="campo"><span>Indicação</span><select data-c="indicacao" ${f ? "" : "disabled"}>${opt("", "— escolha —", C.indicacao)}${inds.map(i => opt(i.id, `${i.rotulo} (${i.faixa})`, C.indicacao)).join("")}</select></label>
    <label class="campo"><span>Peso (kg) ${vzN(VZ_CASO.pac.peso) ? "" : "<em class='vz-nao-inf'>não informado</em>"}</span><input data-vz="pac.peso" inputmode="decimal" value="${esc(VZ_CASO.pac.peso)}"></label>
    <label class="campo"><span>Idade</span><input value="${esc(VZ_CASO.pac.idade !== "" ? VZ_CASO.pac.idade + " " + VZ_CASO.pac.idadeUnidade : "não informada (aba Dados)")}" disabled></label>
    <label class="campo"><span>Apresentação disponível</span><select data-c="apres" ${f ? "" : "disabled"}>${opt("", "— escolha ou digite abaixo —", C.apres)}${f ? f.apresentacoes.map((p, i) => opt(String(i), p.rotulo, C.apres)).join("") : ""}</select></label>
    <label class="campo"><span>Concentração</span><span class="vz-dupla"><input data-c="concValor" inputmode="decimal" value="${esc(C.concValor)}"><select data-c="concUnidade">${VZ_UNIDADES_CONC.map(u => opt(u, u, C.concUnidade)).join("")}</select></span></label>
    <label class="campo largo vz-check-conf"><input type="checkbox" data-c="concOk" ${C.concOk ? "checked" : ""}><span>Conferi a concentração no rótulo da ampola/frasco disponível</span></label>
    <label class="campo"><span>Dose desejada${ind ? ` (faixa ${VZ_FMT(ind.dose.min, 4)}–${VZ_FMT(ind.dose.max, 4)} ${esc(ind.dose.unidade)})` : ""}</span><span class="vz-dupla"><input data-c="doseValor" inputmode="decimal" value="${esc(C.doseValor)}"><select data-c="doseUnidade">${opt("", "unidade", C.doseUnidade)}${unidades.map(u => opt(u, u, C.doseUnidade)).join("")}</select></span></label>
    ${modoInf ? `<label class="campo"><span>Solução: quantidade do medicamento</span><span class="vz-dupla"><input data-c="infQtd" inputmode="decimal" value="${esc(C.infQtd)}"><select data-c="infUnid">${["mg", "mcg", "g", "UI", "mEq"].map(u => opt(u, u, C.infUnid)).join("")}</select></span></label>
      <label class="campo"><span>Volume final da solução (mL)</span><input data-c="infVol" inputmode="decimal" value="${esc(C.infVol)}"></label>`
    : `<label class="campo"><span>Diluir para volume final (mL, opcional)</span><input data-c="volFinal" inputmode="decimal" value="${esc(C.volFinal)}"></label>`}
  </div>
  ${ind ? `<p class="note"><b>Indicação:</b> ${esc(ind.diluicao || "")} · ${esc(ind.via)} · ${esc(ind.velocidade)} · ${esc(ind.repeticao)}</p>` : ""}
  ${res ? vzCalcResultadoHTML(res, f) : `<p class="empty">Escolha o medicamento, a indicação, a concentração e a dose.</p>`}`;
}
function vzCalcResultadoHTML(r, f) {
  const R = r.resultado || {};
  return `<div class="vz-calc-res">
    ${r.bloqueios.length ? `<div class="vz-alerta-critico">${ic("alerta")}<div><b>Cálculo bloqueado</b>${vzLista(r.bloqueios)}</div></div>` : ""}
    ${r.alertas.map(x => `<p class="${x.g === "grave" ? "vz-critico" : "vz-atencao"} vz-alerta-linha">${esc(x.t)}</p>`).join("")}
    ${r.ok ? `<div class="vz-num-grid">
      <div><span>Dose total</span><b>${esc(R.doseTotal)}</b></div>
      ${R.dosePorKg !== null && R.dosePorKg !== undefined ? `<div><span>Dose por kg</span><b>${VZ_FMT(R.dosePorKg, 4)}</b></div>` : ""}
      ${R.volumeAspirar !== undefined ? `<div><span>Aspirar do medicamento</span><b>${VZ_FMT(R.volumeAspirar, 3)} mL</b></div>` : ""}
      ${R.volumeDiluente !== undefined ? `<div><span>Diluente</span><b>${VZ_FMT(R.volumeDiluente, 2)} mL</b></div>` : ""}
      ${R.concFinal ? `<div><span>Concentração final</span><b>${esc(R.concFinal)}</b></div>` : ""}
      ${R.mlh !== undefined ? `<div class="vz-destaque"><span>Bomba de infusão</span><b>${VZ_FMT(R.mlh, 2)} mL/h</b></div>` : ""}
      ${R.doseMax ? `<div><span>Dose máxima</span><b>${esc(R.doseMax)}</b></div>` : ""}</div>
      <details class="vz-sec" open><summary>Fórmula utilizada</summary>${vzLista(r.formulas)}</details>
      ${r.altoRisco ? `<div class="vz-dupla-check"><label><input type="checkbox" data-c="conferido" ${VZ_CALC.conferido ? "checked" : ""}> Conferência independente realizada</label>
        <input data-c="conferidoPor" placeholder="Conferido por (nome)" value="${esc(VZ_CALC.conferidoPor)}"></div>` : ""}
      <button class="seg" id="vz-registrar-adm" ${r.altoRisco && !(VZ_CALC.conferido && VZ_CALC.conferidoPor) ? "disabled title='Exige conferência independente'" : ""}>Registrar administração na linha do tempo</button>` : ""}
  </div>`;
}

/* ---------- VIA AÉREA E VENTILAÇÃO ---------- */
function vzAbaVia(a) {
  const p = VZ_CASO.pac;
  const can = vzCanula({ idadeAnos: a.idadeAnos, pesoKg: vzN(p.peso), igSemanas: vzN(p.ig), sexo: p.sexo });
  const vent = vzVentilacaoInicial({ idadeAnos: a.idadeAnos, sexo: p.sexo, alturaCm: vzN(p.altura), pesoKg: vzN(p.peso) });
  const guia = a.perfil === "neonato" ? "neonatal" : a.perfil === "pediatrico" ? "pediatrico" : "adulto";
  const sri = ["etomidato", "cetamina", "propofol", "midazolam", "fentanil", "rocuronio", "succinilcolina"].flatMap(id => vzDosesPara(id, a.perfil, vzN(p.peso)).filter(d => /sri|intuba|indu|sequ|bloqueio|paralis/i.test(d.ind.rotulo + d.ind.id)).slice(0, 1));
  const O = VZ_CASO.o2calc;
  const campoO = (k, rot, extra = "") => `<label class="campo"><span>${rot}</span><input data-o2="${k}" inputmode="decimal" value="${esc(O[k] ?? "")}" ${extra}></label>`;
  return `<div class="vz-aviso vz-aviso-va">${ic("alerta")}<span>Não há intubação profilática automática. A decisão considera a indicação clínica, os recursos, a competência da equipe e o risco de intubar fora do hospital — idealmente antes da saída, em ambiente controlado.</span></div>
  <div class="vz-grid2">
    ${vzCard(`Dispositivo para ${esc({ neonatal: "recém-nascido", pediatrico: "criança", adulto: "adulto" }[guia])}`, can.ok ? `<div class="vz-num-grid"><div><span>Cânula</span><b>${esc(can.tubo)}</b></div><div><span>Profundidade</span><b>${esc(can.profundidade)}</b></div><div><span>Lâmina</span><b>${esc(can.lamina)}</b></div></div>${vzLista(can.notas)}<p class="vz-fontes">${esc(can.fontes.join("; "))}</p>` : `<p class="vz-atencao vz-alerta-linha">${esc(can.bloqueio)}</p>`)}
    ${vzCard("Ventilação inicial", vent.ok ? `${vzLista(vent.texto)}<p class="vz-fontes">${esc(vent.fontes.join("; "))}</p>` : `<p class="vz-atencao vz-alerta-linha">${esc(vent.bloqueio)}</p>`)}
  </div>
  ${vzCard("Drogas de intubação para este paciente (doses, sem volume)", sri.length ? vzLista(sri.map(d => d.texto)) + `<p class="note">Volumes: use a calculadora com a concentração conferida. Em instabilidade hemodinâmica, preferir cetamina/etomidato em dose reduzida (ver guia).</p>` : `<p class="note">${a.perfil ? "Informe o peso para calcular." : "Informe idade e peso."}</p>`)}
  ${vzCard("Guia de via aérea", vzSecoesHTML(VZ_GUIAS.viaAerea[guia]))}
  ${vzCard("Autonomia do cilindro de oxigênio", `<div class="form-doc">
    ${campoO("capacidadeL", "Capacidade hidráulica (L)", 'placeholder="ex.: 3,5 · 7 · 10"')}
    ${campoO("pressao", "Pressão no manômetro")}
    <label class="campo"><span>Unidade</span><select data-o2="unidadePressao">${[["bar", "bar"], ["kgf", "kgf/cm²"], ["psi", "psi"]].map(([v, t]) => `<option value="${v}" ${O.unidadePressao === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
    ${campoO("pressaoResidual", "Pressão residual a manter (mesma unidade)", 'placeholder="0 se não houver regra do serviço"')}
    ${campoO("fluxo", "Fluxo de O₂ (L/min)", `placeholder="${esc(VZ_CASO.sv.o2fluxo || "")}"`)}
    ${campoO("consumoAdicional", "Consumo do ventilador (L/min)", 'placeholder="manual do equipamento"')}
    <label class="campo"><span>Margem de segurança</span><select data-o2="fator">${[["1.5", "×1,5 o tempo"], ["2", "×2 o tempo (dobro)"], ["3", "×3 o tempo"]].map(([v, t]) => `<option value="${v}" ${String(O.fator) === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
    <label class="campo"><span>Tempo de transporte (min)</span><input data-vz="transf.tempoMin" inputmode="decimal" value="${esc(VZ_CASO.transf.tempoMin)}"></label></div>
    <div id="vz-o2-res">${a.o2 ? vzO2ResultadoHTML(a.o2) : `<p class="empty">Preencha capacidade, pressão, fluxo e tempo.</p>`}</div>`)}
  ${vzCard("Oxigenoterapia", vzSecoesHTML(VZ_GUIAS.oxigenio))}
  ${vzCard("Ventilação mecânica e não invasiva", vzSecoesHTML(VZ_GUIAS.ventilacao))}
  ${VZ_CASO.pac.gestante === "sim" ? vzCard("Gestante", vzSecoesHTML(VZ_GUIAS.gestante)) : ""}`;
}

/* ---------- MONITORIZAÇÃO ---------- */
const VZ_FASES = [["inicial", "Inicial"], ["saida", "Saída"], ["percurso", "Percurso"], ["chegada", "Chegada"]];
function vzAbaMonit(a) {
  const ord = [...VZ_CASO.monit].map((m, i) => ({ ...m, i })).sort((x, y) => (x.hora || "").localeCompare(y.hora || ""));
  const ev = [...VZ_CASO.eventos].map((e, i) => ({ ...e, i })).sort((x, y) => (x.hora || "").localeCompare(y.hora || ""));
  const linha = [...ord.map(m => ({ hora: m.hora, tipo: "sv", m })), ...ev.map(e => ({ hora: e.hora, tipo: e.tipo, e }))].sort((x, y) => (x.hora || "").localeCompare(y.hora || ""));
  const inp = (k, rot, w = "") => `<label class="campo ${w}"><span>${rot}</span><input data-m="${k}" inputmode="decimal"></label>`;
  return `${vzCard("Registrar sinais vitais", `<div class="form-doc vz-monit-form">
      <label class="campo"><span>Horário</span><input data-m="hora" type="time" value="${vzAgoraHora()}"></label>
      <label class="campo"><span>Fase</span><select data-m="fase">${VZ_FASES.map(([v, t]) => `<option value="${v}" ${v === (ord.length ? "percurso" : "inicial") ? "selected" : ""}>${t}</option>`).join("")}</select></label>
      ${inp("pas", "PAS")}${inp("pad", "PAD")}${inp("fc", "FC")}${inp("fr", "FR")}${inp("spo2", "SpO₂")}${inp("temp", "T °C")}${a.perfil === "neonato" ? "" : inp("glasgow", "Glasgow")}${inp("glicemia", "Glicemia")}${inp("diurese", "Diurese")}${inp("o2", "Fluxo O₂ / FiO₂")}
      <label class="campo largo"><span>Ventilador / infusões / observação</span><input data-m="nota"></label></div>
      <button class="seg" id="vz-add-monit">Adicionar registro</button>`)}
    ${vzCard("Registrar evento", `<div class="form-doc"><label class="campo"><span>Horário</span><input data-ev="hora" type="time" value="${vzAgoraHora()}"></label>
      <label class="campo"><span>Tipo</span><select data-ev="tipo"><option value="intercorrencia">Intercorrência</option><option value="medicamento">Medicamento administrado</option><option value="procedimento">Procedimento</option><option value="nota">Observação</option></select></label>
      <label class="campo largo"><span>Descrição (dose, via, resposta)</span><input data-ev="texto"></label></div><button class="seg" id="vz-add-ev">Adicionar evento</button>`)}
    ${vzCard("Painel de parâmetros", ord.length ? `<div class="table-wrap"><table class="vz-tab-monit"><thead><tr><th>Hora</th><th>Fase</th><th>PA</th><th>FC</th><th>FR</th><th>SpO₂</th><th>T</th>${a.perfil === "neonato" ? "" : "<th>GCS</th>"}<th>Glic.</th><th>Diurese</th><th>O₂</th><th>Obs.</th><th></th></tr></thead><tbody>
      ${ord.map(m => `<tr><td>${esc(m.hora)}</td><td>${esc((VZ_FASES.find(f => f[0] === m.fase) || [, m.fase])[1])}</td><td>${esc(m.pas || "—")}×${esc(m.pad || "—")}</td><td>${vzCelula(m.fc, "fc", a)}</td><td>${vzCelula(m.fr, "fr", a)}</td><td>${vzCelula(m.spo2, "spo2", a)}</td><td>${esc(m.temp || "—")}</td>${a.perfil === "neonato" ? "" : `<td>${esc(m.glasgow || "—")}</td>`}<td>${esc(m.glicemia || "—")}</td><td>${esc(m.diurese || "—")}</td><td>${esc(m.o2 || "—")}</td><td>${esc(m.nota || "")}</td><td><button class="link-btn" data-del-monit="${m.i}">remover</button></td></tr>`).join("")}</tbody></table></div>`
      : `<p class="empty">Nenhum registro. Registre os sinais vitais iniciais, na saída, durante o percurso e na chegada.</p>`)}
    ${vzCard("Linha do tempo", linha.length ? `<ol class="vz-linha">${linha.map(x => x.tipo === "sv" ? `<li class="sv"><b>${esc(x.hora || "--:--")}</b> Sinais vitais (${esc((VZ_FASES.find(f => f[0] === x.m.fase) || [, ""])[1])}): PA ${esc(x.m.pas || "—")}×${esc(x.m.pad || "—")} · FC ${esc(x.m.fc || "—")} · SpO₂ ${esc(x.m.spo2 || "—")}%</li>`
      : `<li class="${x.tipo}"><b>${esc(x.hora || "--:--")}</b> ${esc({ intercorrencia: "Intercorrência", medicamento: "Medicamento", procedimento: "Procedimento", nota: "Observação" }[x.tipo])}: ${esc(x.e.texto)} <button class="link-btn" data-del-ev="${x.e.i}">remover</button></li>`).join("")}</ol>` : `<p class="empty">Sem eventos.</p>`)}`;
}
function vzCelula(v, k, a) {
  const n = vzN(v);
  if (n === null) return "—";
  const r = a.ref; let alerta = false;
  if (k === "spo2") alerta = n < (a.perfil === "neonato" ? 90 : 92);
  if (r && k === "fc") alerta = n < r.fc[0] || n > r.fc[1];
  if (r && k === "fr") alerta = n < (a.perfil === "adulto" ? 10 : r.fr[0]) || n > (a.perfil === "adulto" ? 24 : r.fr[1]);
  return alerta ? `<b class="vz-critico-txt">${esc(v)}</b>` : esc(v);
}

/* ---------- CONTINGÊNCIA ---------- */
function vzAbaConting(a) {
  return `<p class="note">Resumo prático para o trajeto, individualizado pelo perfil (${esc({ neonato: "recém-nascido", pediatrico: "criança", adulto: "adulto" }[a.perfil] || "informe a idade")}${vzN(VZ_CASO.pac.peso) ? `, ${VZ_FMT(vzN(VZ_CASO.pac.peso), 3)} kg` : ", sem peso"}). Doses em mg/mcg; o volume depende da apresentação disponível — confira na calculadora.</p>
    <div class="vz-acoes-linha"><button class="seg" id="vz-imprimir-cont">Imprimir plano de contingência</button></div>
    <div class="vz-cont-grid">${a.contingencia.map(c => `<section class="vz-se">
      <h3>SE ${esc(c.se.replace(/^se\s+/i, "").toUpperCase())}</h3>
      <p class="vz-origem-cont">${esc(c.origem)}</p>
      <h4>FAÇA</h4><ol>${c.faca.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
      ${c.doses.length ? `<h4>Medicamentos</h4>${vzLista(c.doses)}` : ""}
      ${c.parar && c.parar.length ? `<h4>Parar / pedir apoio</h4>${vzLista(c.parar.slice(0, 3))}` : ""}</section>`).join("")}</div>`;
}

/* ---------- RELATÓRIO ---------- */
function vzAbaRelatorio(a) {
  return `${vzCard("Relatório de transferência (SBAR)", `<p class="note">Gerado a partir dos dados, da avaliação e da linha do tempo. Pode ser editado antes de copiar ou exportar.</p>
    <textarea id="vz-sbar" class="vz-sbar" rows="28">${esc(vzSBAR(VZ_CASO, a))}</textarea>
    <div class="vz-acoes-linha"><button class="seg" id="vz-copiar-sbar">Copiar</button><button class="seg" id="vz-pdf">Exportar PDF / imprimir</button><button class="seg" id="vz-regerar">Gerar novamente</button></div>
    <p class="note">Para PDF, escolha “Salvar como PDF” na janela de impressão.</p>`)}
    ${vzCard("Registro de alterações", VZ_CASO.log.length ? `<details class="vz-sec"><summary>${VZ_CASO.log.length} alterações neste caso</summary><div class="table-wrap"><table><thead><tr><th>Quando</th><th>Campo</th><th>De</th><th>Para</th><th>Origem</th><th>Por</th></tr></thead><tbody>${VZ_CASO.log.slice(-200).reverse().map(l => `<tr><td>${esc(new Date(l.t).toLocaleString("pt-BR"))}</td><td>${esc(l.campo)}</td><td>${esc(l.de)}</td><td>${esc(l.para)}</td><td>${esc(l.origem)}</td><td>${esc(l.por)}</td></tr>`).join("")}</tbody></table></div></details>` : `<p class="empty">Sem alterações.</p>`)}`;
}

/* ---------- impressão ---------- */
function vzImprimir(html, titulo = "Vaga Zero", rodape = "Apoio à decisão clínica. Não autoriza transporte; conferir doses e protocolos institucionais.") {
  let el = document.getElementById("vz-print");
  if (!el) { el = document.createElement("div"); el.id = "vz-print"; document.body.appendChild(el); }
  const medico = typeof Perfil !== "undefined" ? `${Perfil.nomeCompleto()} · ${Perfil.ler().crm}` : "";
  el.innerHTML = `<header class="vz-print-h"><b>Licia Minatti · Prontuário de Bolso — ${esc(titulo)}</b><span>${new Date().toLocaleString("pt-BR")} · ${esc(medico)}</span></header>${html}
    ${rodape ? `<footer class="vz-print-f">${esc(rodape)}</footer>` : ""}`;
  document.body.classList.add("vz-imprimindo");
  const fim = () => { document.body.classList.remove("vz-imprimindo"); window.removeEventListener("afterprint", fim); };
  window.addEventListener("afterprint", fim);
  window.print();
  setTimeout(fim, 1500);
}
function vzChecklistImpressao(a) {
  const nome = { feito: "☑ feito", pendente: "☐ pendente", na: "— N/A", indisponivel: "✗ indisponível", "": "☐" };
  return `<h1>Checklist de saída — ${esc(VZ_CASO.transf.dxPrincipal || "transferência")}</h1>
    <p>${esc(VZ_NIVEL_NOME[a.risco.nivel])} · Destino: ${esc(VZ_CASO.transf.destino || "não informado")}</p>
    ${a.antes.length ? `<h2>Resolver antes da saída</h2><ul>${a.antes.map(x => `<li>${esc(x.t)}</li>`).join("")}</ul>` : ""}
    ${a.checklist.map(g => `<h2>${esc(g.grupo)}</h2><table><tbody>${g.itens.map(i => `<tr><td>${esc(nome[i.status || ""])}</td><td>${i.critico ? "<b>[crítico]</b> " : ""}${esc(i.texto)}</td></tr>`).join("")}</tbody></table>`).join("")}`;
}

/* ---------- armazenamento seguro ---------- */
const vzSeguroDisponivel = () => typeof desbloqueado === "function" && desbloqueado();
async function vzSalvarSeguro() {
  if (!vzSeguroDisponivel()) {
    alert("Para salvar com segurança, desbloqueie o prontuário criptografado em Pacientes (senha). O rascunho continua nesta aba do navegador até ela ser fechada.");
    ir("pacientes"); return;
  }
  DB.transferencias ||= [];
  const copia = JSON.parse(JSON.stringify(VZ_CASO));
  const i = DB.transferencias.findIndex(x => x.id === copia.id);
  if (i >= 0) DB.transferencias[i] = copia; else DB.transferencias.push(copia);
  await salvarDB();
  const b = document.getElementById("vz-salvar"); if (b) { b.textContent = "Salvo ✓"; setTimeout(() => b.textContent = "Salvar com segurança", 1500); }
}
function vzHistorico() {
  if (!vzSeguroDisponivel()) {
    $app.querySelector("#vz-conteudo").innerHTML = vzCard("Transferências anteriores", `<p>O histórico fica no prontuário criptografado (Pacientes) e só pode ser consultado com ele desbloqueado.</p><button class="seg" id="vz-ir-pac">Desbloquear em Pacientes</button>`);
    document.getElementById("vz-ir-pac").onclick = () => ir("pacientes"); return;
  }
  const lista = [...(DB.transferencias || [])].sort((x, y) => (y.atualizadoEm || "").localeCompare(x.atualizadoEm || ""));
  $app.querySelector("#vz-conteudo").innerHTML = vzCard("Transferências anteriores (prontuário criptografado)", lista.length ? `<div class="list">${lista.map(t => `<div class="item vz-hist"><b>${esc(t.transf.dxPrincipal || "Sem diagnóstico")}</b><span>${esc(t.pac.nome || "")} · ${esc(t.transf.origem || "?")} → ${esc(t.transf.destino || "?")} · ${esc(new Date(t.atualizadoEm).toLocaleString("pt-BR"))}</span>
    <span class="vz-acoes-linha"><button class="seg" data-abrir-t="${t.id}">Abrir</button><button class="link-btn" data-apagar-t="${t.id}">Excluir</button></span></div>`).join("")}</div>` : `<p class="empty">Nenhuma transferência salva.</p>`);
  $app.querySelectorAll("[data-abrir-t]").forEach(b => b.onclick = () => { VZ_CASO = Object.assign(vzCasoVazio(), JSON.parse(JSON.stringify(DB.transferencias.find(x => x.id === b.dataset.abrirT)))); vzSalvarRascunho(); vzIrAba("painel"); });
  $app.querySelectorAll("[data-apagar-t]").forEach(b => b.onclick = async () => { if (!confirm("Excluir esta transferência do prontuário?")) return; DB.transferencias = DB.transferencias.filter(x => x.id !== b.dataset.apagarT); await salvarDB(); vzHistorico(); });
}

/* ---------- eventos ---------- */
function vzLigarComuns() {
  $app.querySelectorAll("[data-vztab]").forEach(b => b.onclick = () => vzIrAba(b.dataset.vztab));
  document.getElementById("vz-novo").onclick = () => {
    if (!confirm("Iniciar um novo caso? O rascunho atual será descartado (salve antes, se quiser guardar).")) return;
    VZ_CASO = vzCasoVazio(); VZ_CALC = { ...VZ_CALC, farmaco: "", indicacao: "", doseValor: "", concOk: false, conferido: false, conferidoPor: "" };
    try { sessionStorage.removeItem(VZ_CHAVE_RASCUNHO); } catch (e) {}
    vzIrAba("dados");
  };
  document.getElementById("vz-salvar").onclick = vzSalvarSeguro;
  document.getElementById("vz-historico").onclick = vzHistorico;
}
function vzLigarAba(k) {
  const raiz = document.getElementById("vz-conteudo");
  /* campos do caso */
  raiz.addEventListener("input", e => {
    const el = e.target;
    if (el.dataset.vz) { vzSet(el.dataset.vz, el.value); vzAtualizarResumo(); if (el.dataset.vz === "transf.tempoMin" && k === "via") vzAtualizarO2(); }
    if (el.dataset.o2 !== undefined) { VZ_CASO.o2calc[el.dataset.o2] = el.value; vzSalvarRascunho(); vzAtualizarO2(); vzAtualizarResumo(); }
  });
  raiz.addEventListener("change", e => {
    const el = e.target;
    if (el.tagName === "SELECT" && el.dataset.vz) {
      vzSet(el.dataset.vz, el.value);
      const y = window.scrollY; telaVagaZero(); window.scrollTo(0, y); // selects mudam o formulário (ex.: gestante, perfil)
    }
  });
  raiz.addEventListener("click", e => {
    const t = e.target.closest("button, [data-irpara]"); if (!t) return;
    if (t.dataset.irpara) { VZ_ABA = t.dataset.irpara; telaVagaZero(); const foco = t.dataset.foco && document.getElementById("vz-c-" + t.dataset.foco); if (foco) { foco.open = true; foco.scrollIntoView(); } else window.scrollTo(0, 0); return; }
    if (t.dataset.check) { VZ_CASO.checklist[t.dataset.check] = VZ_CASO.checklist[t.dataset.check] === t.dataset.st ? "" : t.dataset.st; vzSalvarRascunho(); const y = window.scrollY; telaVagaZero(); window.scrollTo(0, y); return; }
    if (t.dataset.alt) {
      const [campo, i] = t.dataset.alt.split("|"); const alt = VZ_CASO.extracao.auto[campo].alternativas[+i];
      vzSet(campo, alt.valor, "documento"); if (campo === "pac.idade" && alt.unidade) vzSet("pac.idadeUnidade", alt.unidade, "documento");
      const y = window.scrollY; telaVagaZero(); window.scrollTo(0, y); return;
    }
    if (t.dataset.aceitar !== undefined) { vzAceitarCandidato(+t.dataset.aceitar); const y = window.scrollY; telaVagaZero(); window.scrollTo(0, y); return; }
    if (t.dataset.ignorar !== undefined) { const c = VZ_CASO.extracao.candidatos[+t.dataset.ignorar]; c.ignorado = true; vzSalvarRascunho(); const y = window.scrollY; telaVagaZero(); window.scrollTo(0, y); return; }
    if (t.dataset.calc) { VZ_CALC.farmaco = t.dataset.calc; VZ_CALC.indicacao = t.dataset.calcInd || ""; vzPreencherCalc(); VZ_ABA = "farmacos"; telaVagaZero(); document.querySelector(".vz-calc").scrollIntoView(); return; }
    if (t.dataset.delMonit !== undefined) { VZ_CASO.monit.splice(+t.dataset.delMonit, 1); vzSalvarRascunho(); telaVagaZero(); return; }
    if (t.dataset.delEv !== undefined) { VZ_CASO.eventos.splice(+t.dataset.delEv, 1); vzSalvarRascunho(); telaVagaZero(); return; }
    const acoes = {
      "vz-aceitar-todos": () => { VZ_CASO.extracao.candidatos.forEach((c, i) => { if (!c.aceito && !c.ignorado && !c.conflito && !c.vazio && !c.interpretar && !c.sugestao) vzAceitarCandidato(i); }); telaVagaZero(); },
      "vz-imprimir-check": () => vzImprimir(vzChecklistImpressao(VZ_ANALISE)),
      "vz-marcar-na": () => { VZ_ANALISE.checklist.flatMap(g => g.itens).forEach(i => { if (!i.critico && !i.status) VZ_CASO.checklist[i.id] = "na"; }); vzSalvarRascunho(); telaVagaZero(); },
      "vz-imprimir-cont": () => vzImprimir(`<h1>Plano de contingência — ${esc(VZ_CASO.transf.dxPrincipal || "")}</h1>${document.querySelector(".vz-cont-grid").outerHTML}`),
      "vz-copiar-sbar": () => { const ta = document.getElementById("vz-sbar"); ta.select(); try { navigator.clipboard.writeText(ta.value); } catch (er) { document.execCommand("copy"); } t.textContent = "Copiado"; setTimeout(() => t.textContent = "Copiar", 1500); },
      "vz-pdf": () => vzImprimir(`<pre class="vz-print-sbar">${esc(document.getElementById("vz-sbar").value)}</pre>`),
      "vz-regerar": () => { document.getElementById("vz-sbar").value = vzSBAR(VZ_CASO, vzReanalisar()); },
      "vz-add-monit": () => {
        const m = {}; raiz.querySelectorAll("[data-m]").forEach(i => m[i.dataset.m] = i.value.trim());
        if (!Object.entries(m).some(([kk, v]) => !["hora", "fase"].includes(kk) && v)) { alert("Informe ao menos um parâmetro."); return; }
        VZ_CASO.monit.push(m); vzSalvarRascunho(); telaVagaZero();
      },
      "vz-add-ev": () => { const ev = {}; raiz.querySelectorAll("[data-ev]").forEach(i => ev[i.dataset.ev] = i.value.trim()); if (!ev.texto) { alert("Descreva o evento."); return; } VZ_CASO.eventos.push(ev); vzSalvarRascunho(); telaVagaZero(); },
      "vz-registrar-adm": () => {
        const f = VZ_FARMACOS.find(x => x.id === VZ_CALC.farmaco), ind = f && f.indicacoes.find(i => i.id === VZ_CALC.indicacao);
        const r = vzUltimoCalculo;
        VZ_CASO.eventos.push({ hora: vzAgoraHora(), tipo: "medicamento", texto: `${f.nome}${ind ? ` (${ind.rotulo})` : ""}: ${VZ_CALC.doseValor} ${VZ_CALC.doseUnidade}${r && r.resultado ? ` = ${r.resultado.doseTotal}${r.resultado.volumeAspirar !== undefined ? `, ${VZ_FMT(r.resultado.volumeAspirar, 3)} mL` : ""}${r.resultado.mlh !== undefined ? `, ${VZ_FMT(r.resultado.mlh, 2)} mL/h` : ""}` : ""}${VZ_CALC.conferidoPor ? ` · conferido por ${VZ_CALC.conferidoPor}` : ""}` });
        vzSalvarRascunho(); t.textContent = "Registrado ✓";
      }
    };
    if (acoes[t.id]) acoes[t.id]();
  });
  /* upload */
  for (const id of ["vz-arquivo", "vz-camera"]) { const el = document.getElementById(id); if (el) el.onchange = () => el.files.length && vzProcessarArquivos([...el.files]); }
  /* calculadora */
  if (k === "farmacos") {
    vzLigarResultado(raiz.querySelector(".vz-calc"));
    raiz.querySelectorAll(".vz-calc-form [data-c]").forEach(el => {
      const ev = el.type === "checkbox" || el.tagName === "SELECT" ? "change" : "input";
      el.addEventListener(ev, () => {
        const campo = el.dataset.c;
        VZ_CALC[campo] = el.type === "checkbox" ? el.checked : el.value;
        if (campo === "farmaco") { VZ_CALC.indicacao = ""; VZ_CALC.apres = ""; VZ_CALC.concOk = false; VZ_CALC.conferido = false; }
        if (campo === "farmaco" || campo === "indicacao") vzPreencherCalc();
        if (campo === "apres") { const f = VZ_FARMACOS.find(x => x.id === VZ_CALC.farmaco); const p = f && f.apresentacoes[+el.value]; if (p) { VZ_CALC.concValor = String(p.conc); VZ_CALC.concUnidade = p.unidade; VZ_CALC.concOk = false; } }
        if (["concValor", "concUnidade", "apres"].includes(campo) && campo !== "apres") VZ_CALC.concOk = false;
        vzRedesenharCalc(ev === "change" || campo === "farmaco");
      });
    });
    const filtro = document.getElementById("vz-filtro-farm");
    if (filtro) filtro.oninput = () => { const q = vzNorm(filtro.value).trim(); raiz.querySelectorAll(".vz-farm").forEach(d => d.hidden = q && !d.dataset.busca.includes(q)); };
  }
}
let vzUltimoCalculo = null;
function vzPreencherCalc() {
  const f = VZ_FARMACOS.find(x => x.id === VZ_CALC.farmaco); if (!f) return;
  const a = VZ_ANALISE || vzReanalisar();
  if (!VZ_CALC.indicacao) { const ind = f.indicacoes.find(i => vzFaixaInd(a.perfil).includes(i.faixa)); if (ind) VZ_CALC.indicacao = ind.id; }
  const ind = f.indicacoes.find(i => i.id === VZ_CALC.indicacao);
  if (f.apresentacoes.length === 1) { VZ_CALC.apres = "0"; VZ_CALC.concValor = String(f.apresentacoes[0].conc); VZ_CALC.concUnidade = f.apresentacoes[0].unidade; }
  if (ind) {
    VZ_CALC.doseUnidade = ind.dose.unidade; VZ_CALC.doseValor = String(ind.dose.min);
    if (ind.diluicaoPadrao) { VZ_CALC.infQtd = String(ind.diluicaoPadrao.quantidade); VZ_CALC.infUnid = ind.diluicaoPadrao.unidade; VZ_CALC.infVol = String(ind.diluicaoPadrao.volumeFinal); }
    else { VZ_CALC.infQtd = ""; VZ_CALC.infVol = ""; }
  }
  VZ_CALC.concOk = false; VZ_CALC.conferido = false;
}
function vzRedesenharCalc(completo) {
  const box = document.querySelector(".vz-calc");
  if (!box) return;
  if (completo) { const y = window.scrollY; telaVagaZero(); window.scrollTo(0, y); return; }
  // atualiza só o resultado para não perder o foco do campo digitado
  const tmp = document.createElement("div"); tmp.innerHTML = vzCalcHTML(VZ_ANALISE);
  const novo = tmp.querySelector(".vz-calc-res") || tmp.querySelector(".empty");
  const atual = box.querySelector(".vz-calc-res") || box.querySelector(":scope > .empty");
  if (atual && novo) { atual.replaceWith(novo); vzLigarResultado(box); }
}
function vzLigarResultado(box) {
  box.querySelectorAll(".vz-calc-res [data-c]").forEach(el => {
    el.addEventListener(el.type === "checkbox" ? "change" : "input", () => { VZ_CALC[el.dataset.c] = el.type === "checkbox" ? el.checked : el.value; const b = document.getElementById("vz-registrar-adm"); if (b) b.disabled = !(VZ_CALC.conferido && VZ_CALC.conferidoPor); });
  });
}
function vzAtualizarO2() {
  vzReanalisar();
  const r = document.getElementById("vz-o2-res");
  if (r) r.innerHTML = VZ_ANALISE.o2 ? vzO2ResultadoHTML(VZ_ANALISE.o2) : `<p class="empty">Preencha capacidade, pressão, fluxo e tempo.</p>`;
}
/* Guarda o último cálculo (para registrar a administração). */
const vzCalcularDoseOriginal = vzCalcularDose;
vzCalcularDose = function (e) { const r = vzCalcularDoseOriginal(e); vzUltimoCalculo = r; return r; };
