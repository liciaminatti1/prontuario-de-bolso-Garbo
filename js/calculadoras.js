/* Calculadoras: painel do paciente, função renal, dose por peso, segurança de
   medicamentos (gestação, rim, alergia, interações), escores e cálculos rápidos.
   Usa PACIENTE/Renal (perfil.js), MEDICAMENTOS (medicamentos.js) e SCORES (scores.js). */

const fmt = (n, casas = 1) => n === null || n === undefined || !isFinite(n) ? "—"
  : Number(n).toLocaleString("pt-BR", { maximumFractionDigits: casas, minimumFractionDigits: 0 });
const NIVEL_GESTACAO = {
  compativel: ["ok", "Compatível na gestação"], cautela: ["warn", "Gestação: cautela"],
  evitar: ["alarm", "Gestação: evitar"], contraindicado: ["alarm", "Gestação: contraindicado"]
};

/* Funções chamadas quando os dados do paciente mudam (a tela atual registra as suas). */
let atualizadoresPaciente = [];
function aoMudarPaciente(fn) { atualizadoresPaciente.push(fn); }
function zerarAtualizadores() { atualizadoresPaciente = []; }
ouvintesPaciente.add(() => { atualizadoresPaciente.forEach(fn => fn()); atualizarChipPaciente(); });

/* ---------- resumo do paciente (chip no topo) ---------- */
function resumoPaciente() {
  const p = PACIENTE, partes = [];
  if (p.vinculo) partes.push(p.vinculo.split(" ")[0]);
  if (num(p.peso)) partes.push(`${fmt(num(p.peso))} kg`);
  const ia = idadeEmAnos(p);
  if (ia !== null) partes.push(p.idadeUnidade === "meses" ? `${fmt(num(p.idade), 0)} meses` : `${fmt(ia, 0)} anos`);
  const r = Renal.doPaciente();
  if (r) partes.push(`ClCr ${fmt(r.valor, 0)}`);
  if (p.gestante) partes.push("gestante");
  if (p.alergias.length) partes.push(`${p.alergias.length} alergia${p.alergias.length > 1 ? "s" : ""}`);
  if (p.medicacoes.length) partes.push(`${p.medicacoes.length} em uso`);
  return partes.join(" · ");
}
function atualizarChipPaciente() {
  const el = document.getElementById("chip-paciente");
  if (!el) return;
  const r = resumoPaciente();
  el.textContent = r || "Paciente";
  el.classList.toggle("ativo", !!r);
  el.title = r ? `Paciente em atendimento: ${r}` : "Informar dados do paciente";
}

/* ---------- painel do paciente ---------- */
function painelPacienteHTML(sufixo) {
  const p = PACIENTE, id = c => `pac-${c}-${sufixo}`;
  const emUso = p.medicacoes.map(mid => MED_POR_ID[mid]).filter(Boolean);
  return `<div class="pac" data-pac="${sufixo}">
    <div class="pac-h"><h3>Paciente em atendimento</h3><button class="link-btn" data-pac-limpar type="button">Limpar</button></div>
    <p class="note">Usado para doses, função renal e alertas. Não fica salvo: some ao recarregar a página.</p>
    <div class="pac-grid">
      <label class="campo" for="${id("peso")}"><span>Peso (kg)</span><input id="${id("peso")}" data-c="peso" inputmode="decimal" value="${esc(p.peso)}"></label>
      <label class="campo" for="${id("idade")}"><span>Idade</span>
        <div class="campo-duplo"><input id="${id("idade")}" data-c="idade" inputmode="decimal" value="${esc(p.idade)}">
        <select data-c="idadeUnidade" aria-label="Unidade da idade"><option ${p.idadeUnidade === "anos" ? "selected" : ""} value="anos">anos</option><option ${p.idadeUnidade === "meses" ? "selected" : ""} value="meses">meses</option></select></div></label>
      <label class="campo" for="${id("sexo")}"><span>Sexo</span><select id="${id("sexo")}" data-c="sexo">
        <option value="">—</option><option value="F" ${p.sexo === "F" ? "selected" : ""}>Feminino</option><option value="M" ${p.sexo === "M" ? "selected" : ""}>Masculino</option></select></label>
      <label class="campo" for="${id("altura")}"><span>Altura (cm)</span><input id="${id("altura")}" data-c="altura" inputmode="decimal" value="${esc(p.altura)}"></label>
      <label class="campo" for="${id("creatinina")}"><span>Creatinina (mg/dL)</span><input id="${id("creatinina")}" data-c="creatinina" inputmode="decimal" value="${esc(p.creatinina)}"></label>
      <label class="chk pac-gest" for="${id("gestante")}"><input type="checkbox" id="${id("gestante")}" data-c="gestante" ${p.gestante ? "checked" : ""}> Gestante</label>
    </div>
    <fieldset class="pac-alergias"><legend>Alergias</legend>
      ${ALERGIAS.map(([k, n]) => `<label class="tog"><input type="checkbox" data-alergia="${k}" ${p.alergias.includes(k) ? "checked" : ""}><span>${n}</span></label>`).join("")}
    </fieldset>
    <div class="pac-uso"><span class="campo-rot">Medicações em uso</span>
      <div class="pac-uso-linha">
        <select id="${id("addmed")}" aria-label="Adicionar medicação em uso"><option value="">Adicionar…</option>
          ${[...MEDICAMENTOS].sort((a, b) => a.nomes[0].localeCompare(b.nomes[0], "pt-BR")).map(m => `<option value="${m.id}">${esc(m.nomes.slice(0, 3).join(" / "))}</option>`).join("")}
        </select>
      </div>
      <div class="pac-chips">${emUso.map(m => `<button type="button" class="pchip" data-rm="${m.id}" title="Remover">${esc(m.nomes[0])} ×</button>`).join("") || `<span class="note">Nenhuma informada</span>`}</div>
    </div>
    <div class="pac-renal" data-renal></div>
  </div>`;
}

function renalResumoHTML() {
  const p = PACIENTE, ia = idadeEmAnos(p), cr = num(p.creatinina), peso = num(p.peso), alt = num(p.altura);
  if (!cr) return `<p class="note">Informe creatinina (e idade, peso, sexo; altura na criança) para calcular a função renal.</p>`;
  const linhas = [];
  if (ia !== null && ia < 18) {
    const s = Renal.schwartz(alt, cr);
    linhas.push(["Schwartz (criança)", s !== null ? `${fmt(s, 0)} mL/min/1,73 m²` : "informe a altura"]);
  } else {
    const cg = Renal.cockcroft(ia, peso, cr, p.sexo), ck = Renal.ckdEpi2021(ia, cr, p.sexo);
    linhas.push(["Cockcroft-Gault (ajuste de dose)", cg !== null ? `${fmt(cg, 0)} mL/min` : "informe idade, peso e sexo"]);
    linhas.push(["CKD-EPI 2021 (estadiamento)", ck !== null ? `${fmt(ck, 0)} mL/min/1,73 m² · ${Renal.estagio(ck)}` : "informe idade e sexo"]);
  }
  return `<dl class="kv renal-kv">${linhas.map(([a, b]) => `<dt>${a}</dt><dd><b>${b}</b></dd>`).join("")}</dl>`;
}

function ligarPainelPaciente(raiz) {
  raiz.querySelectorAll(".pac").forEach(pac => {
    const renal = pac.querySelector("[data-renal]");
    const pintarRenal = () => { renal.innerHTML = renalResumoHTML(); };
    pintarRenal();
    pac.addEventListener("input", e => {
      const c = e.target.dataset.c;
      if (c) atualizarPaciente({ [c]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
    });
    pac.addEventListener("change", e => {
      const c = e.target.dataset.c, al = e.target.dataset.alergia;
      if (c && e.target.tagName === "SELECT") atualizarPaciente({ [c]: e.target.value });
      if (al) atualizarPaciente({ alergias: e.target.checked ? [...new Set([...PACIENTE.alergias, al])] : PACIENTE.alergias.filter(x => x !== al) });
      if (e.target.id && e.target.id.startsWith("pac-addmed") && e.target.value) {
        atualizarPaciente({ medicacoes: [...new Set([...PACIENTE.medicacoes, e.target.value])] });
        redesenharPaineis();
      }
    });
    pac.addEventListener("click", e => {
      const rm = e.target.closest("[data-rm]");
      if (rm) { atualizarPaciente({ medicacoes: PACIENTE.medicacoes.filter(x => x !== rm.dataset.rm) }); redesenharPaineis(); }
      if (e.target.closest("[data-pac-limpar]")) { limparPaciente(); redesenharPaineis(); }
    });
    aoMudarPaciente(pintarRenal);
  });
}
/* Redesenha todos os painéis de paciente visíveis (após adicionar/remover itens). */
function redesenharPaineis() {
  document.querySelectorAll(".pac").forEach(pac => {
    const suf = pac.dataset.pac;
    const novo = document.createElement("div");
    novo.innerHTML = painelPacienteHTML(suf);
    pac.replaceWith(novo.firstElementChild);
  });
  document.querySelectorAll(".pac").forEach(pac => ligarPainelPaciente(pac.parentElement));
}

/* ---------- dose por peso ---------- */
function doseHTML(m, uid) {
  const peso = num(PACIENTE.peso), ia = idadeEmAnos();
  const linhas = [];
  if (m.ped) {
    const doseKgEl = document.getElementById(`dk-${uid}`);
    const doseKg = doseKgEl ? num(doseKgEl.value) : null;
    const r = calcularDose(m, peso, doseKg ?? undefined);
    const un = m.ped.unidade || "mg";
    if (!peso) linhas.push(`<p class="note">Informe o peso do paciente para calcular.</p>`);
    else if (r) {
      linhas.push(`<p class="dose-res"><b>${fmt(r.porDose, 2)} ${un}</b> por dose · ${esc(m.ped.intervalo)}${r.porDia ? ` <span class="note">(${fmt(r.porDia, 0)} ${un}/dia)</span>` : ""}</p>`);
      if (r.limitado) linhas.push(`<p class="aviso">Limitado pela dose máxima (${fmt(m.ped.maxDose || 0, 2)} ${un} por dose${m.ped.maxDia ? `; ${fmt(m.ped.maxDia, 0)} ${un}/dia` : ""}).</p>`);
      (m.apres || []).forEach(a => {
        const partes = [];
        if (a.mgPorMl) partes.push(`${fmt(r.porDose / a.mgPorMl, 2)} mL`);
        if (a.mgPorGota) partes.push(`${fmt(r.porDose / a.mgPorGota, 0)} gotas`);
        if (a.mgPorComp) partes.push(`${fmt(r.porDose / a.mgPorComp, 2)} comprimido(s)/frasco(s)`);
        linhas.push(`<p class="apres"><span>${esc(a.rotulo)}</span><b>${partes.join(" · ")}</b></p>`);
      });
    }
    return `<div class="dose-calc">
      <label class="campo dose-kg" for="dk-${uid}"><span>Dose (${m.ped.porDia ? (un === "mg" ? "mg/kg/dia" : un + "/kg/dia") : (un === "mg" ? "mg/kg/dose" : un + "/kg/dose")}) · faixa: ${esc(m.ped.faixa)}</span>
        <input id="dk-${uid}" data-dk="${uid}" inputmode="decimal" value="${esc(doseKgEl ? doseKgEl.value : String(m.ped.dose).replace(".", ","))}"></label>
      <div class="dose-out" data-out="${uid}">${linhas.join("")}</div>
      ${m.ped.idadeMin ? `<p class="note">Idade/peso mínimo: ${esc(m.ped.idadeMin)}</p>` : ""}
    </div>`;
  }
  const fx = faixaFixa(m, peso, ia);
  if (m.porPeso || m.porIdade) return `<div class="dose-calc"><p class="dose-res">${fx ? `<b>${esc(fx)}</b>` : `<span class="note">Informe ${m.porPeso ? "o peso" : "a idade"} para ver a dose.</span>`}</p></div>`;
  return "";
}

/* ---------- segurança ---------- */
function alertasDoMedicamento(m) {
  const p = PACIENTE, out = [];
  const r = Renal.doPaciente();
  if (p.gestante && m.gestacao && ["evitar", "contraindicado", "cautela"].includes(m.gestacao.nivel))
    out.push({ g: m.gestacao.nivel === "cautela" ? "moderada" : "grave", t: `Gestante — ${m.gestacao.texto}` });
  const fr = r ? faixaRenal(m, r.valor) : null;
  if (fr) out.push({ g: "moderada", t: `Função renal ${fmt(r.valor, 0)}: ${fr.texto}` });
  alertasAlergia(m, p.alergias).forEach(a => out.push(a));
  interacoesCom(m, p.medicacoes.map(id => MED_POR_ID[id]).filter(Boolean)).forEach(i => out.push({ g: i.g, t: `Interação com ${i.com.nomes[0]}: ${i.t}` }));
  return out;
}

function cartaoSegurancaHTML(m, uid, comDose = true) {
  const alertas = alertasDoMedicamento(m);
  const r = Renal.doPaciente();
  const g = m.gestacao ? NIVEL_GESTACAO[m.gestacao.nivel] : null;
  const regras = INTERACOES.filter(x => casaRegra(m, x.a) || casaRegra(m, x.b));
  return `<div class="card med ${alertas.some(a => a.g === "grave") ? "med-grave" : alertas.length ? "med-mod" : ""}" data-med="${m.id}" data-uid="${uid}">
    <div class="card-h"><b>${esc(m.nomes[0])}</b>
      <span class="badges">${g ? `<span class="tag ${g[0] === "ok" ? "l1" : g[0] === "warn" ? "adj" : "ci"}">${g[1]}</span>` : ""}
      ${alertas.length ? `<span class="tag ci">${alertas.length} alerta${alertas.length > 1 ? "s" : ""}</span>` : ""}</span></div>
    ${alertas.length ? `<ul class="alertas">${alertas.map(a => `<li class="${a.g}">${esc(a.t)}</li>`).join("")}</ul>` : ""}
    ${comDose ? `<div data-dose="${uid}">${doseHTML(m, uid)}</div>` : ""}
    <dl class="kv">
      ${m.adulto ? `<dt>Adulto</dt><dd>${esc(m.adulto)}</dd>` : ""}
      ${m.gestacao ? `<dt>Gestação</dt><dd>${esc(m.gestacao.texto)}</dd>` : ""}
      <dt>Função renal</dt><dd>${m.renal && m.renal.length ? m.renal.map(x => `ClCr &lt; ${x.abaixo}: ${esc(x.texto)}`).join("<br>") : "Sem ajuste habitual."}${r ? `<br><span class="note">Paciente: ${fmt(r.valor, 0)} (${esc(r.metodo)})</span>` : ""}</dd>
      ${m.contra && m.contra.length ? `<dt>Contraindicações e cuidados</dt><dd>${m.contra.map(esc).join(" · ")}</dd>` : ""}
      ${m.alergia && m.alergia.length ? `<dt>Alergia</dt><dd>Contraindicado se alergia a ${m.alergia.map(nomeAlergia).join(", ")}</dd>` : ""}
      ${regras.length ? `<dt>Interações principais</dt><dd>${regras.map(x => esc(x.t)).filter((v, i, a) => a.indexOf(v) === i).slice(0, 5).join("<br>")}</dd>` : ""}
    </dl>
  </div>`;
}

function ligarCartoes(raiz) {
  raiz.addEventListener("input", e => {
    const uid = e.target.dataset.dk;
    if (!uid) return;
    const cartao = e.target.closest("[data-med]");
    const m = MED_POR_ID[cartao.dataset.med];
    const out = raiz.querySelector(`[data-out="${uid}"]`);
    const tmp = document.createElement("div");
    tmp.innerHTML = doseHTML(m, uid);
    out.innerHTML = tmp.querySelector(".dose-out").innerHTML;
  });
  aoMudarPaciente(() => {
    raiz.querySelectorAll("[data-med]").forEach(c => {
      const m = MED_POR_ID[c.dataset.med];
      const ativo = document.activeElement && c.contains(document.activeElement);
      if (ativo) return;
      const tmp = document.createElement("div");
      tmp.innerHTML = cartaoSegurancaHTML(m, c.dataset.uid, !!c.querySelector("[data-dose]"));
      c.replaceWith(tmp.firstElementChild);
    });
  });
}

/* ---------- escores ---------- */
function scoreHTML(s, aberto = false) {
  return `<details class="score" data-score="${s.id}" ${aberto ? "open" : ""}>
    <summary><span>${esc(s.nome)}</span><b class="score-total" data-total></b></summary>
    <div class="score-corpo">
      ${s.itens.map((it, i) => it.opcoes
        ? `<label class="campo score-sel"><span>${esc(it.t)}</span><select data-i="${i}"><option value="">—</option>${it.opcoes.map((o, j) => `<option value="${j}">${esc(o[0])} (${o[1] > 0 ? "+" : ""}${fmt(o[1])})</option>`).join("")}</select></label>`
        : `<label class="tog score-item"><input type="checkbox" data-i="${i}"><span>${esc(it.t)}${s.tipo === "regra" ? "" : ` <em>+${fmt(it.p)}</em>`}</span></label>`).join("")}
      <div class="score-res" data-res></div>
      ${s.nota ? `<p class="note">${esc(s.nota)}</p>` : ""}
      <p class="note">Fonte: ${esc(s.fonte)}</p>
    </div>
  </details>`;
}
function ligarScores(raiz) {
  raiz.querySelectorAll("[data-score]").forEach(el => {
    const s = SCORE_POR_ID[el.dataset.score];
    const calc = () => {
      const valores = [];
      el.querySelectorAll("[data-i]").forEach(inp => {
        valores[+inp.dataset.i] = inp.type === "checkbox" ? inp.checked : (inp.value === "" ? null : +inp.value);
      });
      const { total, marcados } = totalScore(s, valores);
      const faltam = s.itens.some((it, i) => it.opcoes && (valores[i] === null || valores[i] === undefined));
      const r = s.interpretar(total, marcados, valores.map((v, i) => s.itens[i].opcoes && v !== null ? s.itens[i].opcoes[v][1] : v));
      el.querySelector("[data-total]").textContent = s.tipo === "regra" ? (marcados ? "positivo" : "negativo") : fmt(total);
      el.querySelector("[data-res]").innerHTML = faltam && s.itens.every(it => it.opcoes) && marcados < s.itens.length
        ? `<p class="note">Responda todos os itens.</p>`
        : `<p class="res ${r.nivel}">${esc(r.texto)}</p>${faltam ? `<p class="note">Há itens sem resposta (contados como 0).</p>` : ""}`;
    };
    el.addEventListener("input", calc); el.addEventListener("change", calc);
    calc();
  });
}

/* ---------- seção dentro da ficha ---------- */
function secaoCalculadorasFicha(f) {
  const meds = medicamentosDaFicha(f);
  const scores = scoresDaFicha(f.id);
  return `<div class="calc-ficha dois-col">
    <div>${painelPacienteHTML("ficha")}</div>
    <div>
    ${scores.length ? `<div class="sec"><h3>Escores desta condição</h3>${scores.map((s, i) => scoreHTML(s, i === 0)).join("")}</div>` : ""}
    <div class="sec"><h3>Medicamentos desta ficha: dose e segurança</h3>
      ${meds.length ? `<p class="note">Doses calculadas pelo peso informado. Alertas consideram gestação, função renal, alergias e medicações em uso.</p>
      <div class="med-grid">${meds.map((m, i) => cartaoSegurancaHTML(m, `f${i}`)).join("")}</div>`
        : `<p class="empty">Nenhum medicamento desta ficha está na base de segurança. Use a página Medicamentos para consultar.</p>`}
    </div>
    </div>
  </div>`;
}
function ligarSecaoFicha(raiz) { ligarScores(raiz); ligarPainelPaciente(raiz); ligarCartoes(raiz); }

/* Quantidade de alertas do paciente para os remédios de uma ficha (para destacar a aba). */
function contarAlertasFicha(f) {
  return medicamentosDaFicha(f).reduce((n, m) => n + alertasDoMedicamento(m).length, 0);
}

/* ---------- página Medicamentos ---------- */
function telaMedicamentos() {
  const grupos = [...MEDICAMENTOS].sort((a, b) => a.nomes[0].localeCompare(b.nomes[0], "pt-BR"));
  $app.innerHTML = `<div class="view">
    <div class="f-head"><h2>Medicamentos</h2><p>Dose por peso, ajuste renal, gestação, alergias e interações. Escolha um medicamento ou filtre pelo nome.</p></div>
    <div class="dois-col">
      <div>${painelPacienteHTML("med")}</div>
      <div>
        <label class="campo" for="filtro-med"><span>Buscar medicamento</span><input id="filtro-med" type="search" placeholder="Ex.: amoxicilina, enoxaparina, AINE"></label>
        <div class="med-lista" id="med-lista">${grupos.map(m => `<button class="mchip" data-abrir="${m.id}">${esc(m.nomes[0])}</button>`).join("")}</div>
        <div id="med-detalhe" class="gap-top"><p class="empty">Selecione um medicamento.</p></div>
      </div>
    </div>
    <p class="disclaimer">Base de referência resumida. Confira sempre a bula e o protocolo da instituição.</p>
  </div>`;
  ligarPainelPaciente($app);
  const detalhe = document.getElementById("med-detalhe");
  const abrir = id => {
    detalhe.innerHTML = cartaoSegurancaHTML(MED_POR_ID[id], "m0");
    $app.querySelectorAll("[data-abrir]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.abrir === id)));
  };
  ligarCartoes(detalhe);
  $app.querySelectorAll("[data-abrir]").forEach(b => b.onclick = () => abrir(b.dataset.abrir));
  document.getElementById("filtro-med").addEventListener("input", e => {
    const q = normTxt(e.target.value);
    $app.querySelectorAll("[data-abrir]").forEach(b => {
      const m = MED_POR_ID[b.dataset.abrir];
      b.hidden = q && !normTxt([...m.nomes, ...(m.tags || [])].join(" ")).includes(q);
    });
  });
}

/* ---------- página Calculadoras ---------- */
const CALCULOS = [
  { id: "imc", nome: "IMC e superfície corporal", campos: [["peso", "Peso (kg)", "peso"], ["altura", "Altura (cm)", "altura"]],
    calc: v => { const p = num(v.peso), a = num(v.altura); if (!p || !a) return null;
      const imc = p / Math.pow(a / 100, 2), sc = Math.sqrt(p * a / 3600);
      const cl = imc < 18.5 ? "baixo peso" : imc < 25 ? "eutrofia" : imc < 30 ? "sobrepeso" : imc < 35 ? "obesidade grau I" : imc < 40 ? "obesidade grau II" : "obesidade grau III";
      return `IMC <b>${fmt(imc)} kg/m²</b> (${cl}, adulto) · SC (Mosteller) <b>${fmt(sc, 2)} m²</b>`; } },
  { id: "peso-crianca", nome: "Peso estimado da criança (APLS)", campos: [["idade", "Idade (anos; < 1 ano use fração, ex.: 0,5)", "idade"]],
    calc: v => { const i = num(v.idade); if (i === null) return null;
      const m = i * 12;
      const p = i < 1 ? 0.5 * m + 4 : i <= 5 ? 2 * i + 8 : i <= 12 ? 3 * i + 7 : null;
      return p === null ? "Fórmula válida até 12 anos: pesar a criança." : `Peso estimado <b>${fmt(p)} kg</b> (usar o peso real sempre que possível)`; } },
  { id: "holliday", nome: "Hidratação de manutenção (Holliday-Segar)", campos: [["peso", "Peso (kg)", "peso"]],
    calc: v => { const p = num(v.peso); if (!p) return null;
      const dia = p <= 10 ? 100 * p : p <= 20 ? 1000 + 50 * (p - 10) : 1500 + 20 * (p - 20);
      const h = p <= 10 ? 4 * p : p <= 20 ? 40 + 2 * (p - 10) : 60 + (p - 20);
      return `<b>${fmt(dia, 0)} mL/dia</b> · <b>${fmt(h, 0)} mL/h</b> (regra 4-2-1). Preferir solução isotônica com glicose; adulto costuma limitar a 2–2,5 L/dia.`; } },
  { id: "parkland", nome: "Reposição em queimaduras (ATLS)", campos: [["peso", "Peso (kg)", "peso"], ["scq", "Superfície queimada (% 2º e 3º grau)"], ["fator", "mL/kg/% (adulto 2 · criança 3 · elétrica 4)"]],
    padrao: { fator: "2" },
    calc: v => { const p = num(v.peso), s = num(v.scq), f = num(v.fator) || 2; if (!p || !s) return null;
      const t = f * p * s;
      return `<b>${fmt(t, 0)} mL</b> de Ringer lactato em 24 h · metade (<b>${fmt(t / 2, 0)} mL</b>) nas primeiras 8 h após a queimadura = <b>${fmt(t / 16, 0)} mL/h</b>. Titular por diurese (adulto 0,5 mL/kg/h; criança 1 mL/kg/h).`; } },
  { id: "gotejamento", nome: "Gotejamento", campos: [["volume", "Volume (mL)"], ["horas", "Tempo (horas)"]],
    calc: v => { const vol = num(v.volume), h = num(v.horas); if (!vol || !h) return null;
      const mlh = vol / h;
      return `<b>${fmt(mlh, 1)} mL/h</b> (bomba) · macrogotas <b>${fmt(mlh / 3, 0)} gotas/min</b> · microgotas <b>${fmt(mlh, 0)} microgotas/min</b>`; } },
  { id: "eletrolitos", nome: "Ânion gap, sódio corrigido e osmolalidade", campos: [["na", "Sódio (mEq/L)"], ["cl", "Cloro (mEq/L)"], ["hco3", "Bicarbonato (mEq/L)"], ["glic", "Glicemia (mg/dL)"], ["ureia", "Ureia (mg/dL)"], ["alb", "Albumina (g/dL, opcional)"]],
    calc: v => { const na = num(v.na), cl = num(v.cl), hco3 = num(v.hco3), g = num(v.glic), u = num(v.ureia), alb = num(v.alb);
      const out = [];
      if (na && cl && hco3) { const ag = na - (cl + hco3); out.push(`Ânion gap <b>${fmt(ag)}</b>${alb ? ` · corrigido pela albumina <b>${fmt(ag + 2.5 * (4 - alb))}</b>` : ""} (normal ~8–12)`); }
      if (na && g) out.push(`Sódio corrigido (Katz) <b>${fmt(na + 1.6 * (g - 100) / 100)}</b> mEq/L`);
      if (na && g) out.push(`Osmolalidade calculada <b>${fmt(2 * na + g / 18 + (u ? u / 6 : 0), 0)}</b> mOsm/kg${u ? "" : " (sem ureia)"}`);
      return out.length ? out.join("<br>") : null; } },
  { id: "gestacao", nome: "Idade gestacional e DPP pela DUM", campos: [["dum", "Data da última menstruação", null, "date"]],
    calc: v => { if (!v.dum) return null;
      const dum = new Date(v.dum + "T12:00:00"), hoje = new Date(); hoje.setHours(12, 0, 0, 0);
      const dias = Math.round((hoje - dum) / 864e5); if (dias < 0) return "Data no futuro.";
      const dpp = new Date(dum.getTime() + 280 * 864e5);
      return `IG <b>${Math.floor(dias / 7)} semanas e ${dias % 7} dia(s)</b> · DPP <b>${dpp.toLocaleDateString("pt-BR")}</b> (Naegele; confirmar com USG do 1º trimestre)`; } }
];

function telaCalculadoras() {
  $app.innerHTML = `<div class="view">
    <div class="f-head"><h2>Calculadoras</h2><p>Função renal, cálculos rápidos e escores. Os campos de peso, idade e altura usam o paciente em atendimento quando preenchidos.</p></div>
    <div class="dois-col">
      <div>${painelPacienteHTML("calc")}</div>
      <div class="sec">
        <h3>Cálculos rápidos</h3>
        ${CALCULOS.map(c => `<details class="score calc" data-calc="${c.id}"><summary><span>${esc(c.nome)}</span></summary>
          <div class="score-corpo"><div class="form-doc">${c.campos.map(([k, rot, , tipo]) => `<label class="campo"><span>${esc(rot)}</span><input data-k="${k}" ${tipo === "date" ? 'type="date"' : 'inputmode="decimal"'} value="${esc((c.padrao || {})[k] || "")}"></label>`).join("")}</div>
          <p class="res info" data-res><span class="note">Preencha os campos.</span></p></div></details>`).join("")}
      </div>
    </div>
    <div class="sec gap-top"><h3>Escores</h3>
      <div class="scores-grid">${SCORES.map(s => scoreHTML(s)).join("")}</div>
    </div>
  </div>`;
  ligarPainelPaciente($app);
  ligarScores($app);
  $app.querySelectorAll("[data-calc]").forEach(el => {
    const c = CALCULOS.find(x => x.id === el.dataset.calc);
    const preencher = () => c.campos.forEach(([k, , doPaciente]) => {
      const inp = el.querySelector(`[data-k="${k}"]`);
      if (doPaciente && PACIENTE[doPaciente] && !inp.dataset.editado) inp.value = doPaciente === "idade" ? fmt(idadeEmAnos(), 2) : PACIENTE[doPaciente];
    });
    const calc = () => {
      const v = {}; el.querySelectorAll("[data-k]").forEach(i => v[i.dataset.k] = i.value);
      const r = c.calc(v);
      el.querySelector("[data-res]").innerHTML = r || `<span class="note">Preencha os campos.</span>`;
    };
    el.addEventListener("input", e => { if (e.target.dataset.k) e.target.dataset.editado = "1"; calc(); });
    preencher(); calc();
    aoMudarPaciente(() => { preencher(); calc(); });
  });
}
