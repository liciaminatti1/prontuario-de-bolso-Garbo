/* Documentos médicos: formulários que geram texto pronto para copiar.
   Nada do paciente é salvo no aparelho. Só os dados do médico (nome, CRM, local)
   ficam guardados neste navegador, para não precisar redigitar.
   Para criar um documento novo, acrescente um item em DOCUMENTOS. */

const hojeISO = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
const horaAgora = () => new Date().toTimeString().slice(0, 5);
const br = iso => { const [a, m, d] = String(iso || "").split("-"); return d ? `${d}/${m}/${a}` : ""; };

const EXTENSO = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze",
  "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"];
const porExtenso = n => {
  n = Number(n);
  if (n >= 0 && n <= 20) return EXTENSO[n];
  if (n === 30) return "trinta";
  if (n > 20 && n < 30) return `vinte e ${EXTENSO[n - 20]}`;
  return String(n);
};

/* Campos do médico: compartilhados por todos os documentos e lembrados neste navegador. */
const CAMPOS_MEDICO = [
  { id: "medico", rotulo: "Nome do(a) médico(a)", medico: true },
  { id: "crm", rotulo: "CRM / UF", medico: true, dica: "Ex.: CRM-SP 123456" },
  { id: "rqe", rotulo: "RQE (se especialista)", medico: true },
  { id: "servico", rotulo: "Serviço / unidade", medico: true, dica: "Ex.: UBS Vila Nova" },
  { id: "cidade", rotulo: "Cidade / UF", medico: true }
];

const assinatura = v => [
  `${v.cidade ? v.cidade + ", " : ""}${br(v.data) || br(hojeISO())}.`,
  "",
  "______________________________",
  v.medico || "Nome do(a) médico(a)",
  [v.crm, v.rqe ? `RQE ${v.rqe}` : ""].filter(Boolean).join(" · ") || "CRM / UF",
  v.servico || ""
].join("\n").trim();

const linhas = (titulo, texto) => texto && texto.trim() ? `${titulo}\n${texto.trim()}\n` : "";

const DOCUMENTOS = [
  {
    id: "atestado",
    titulo: "Atestado médico",
    desc: "Afastamento de atividades. O CID só entra com autorização expressa do paciente.",
    campos: [
      { id: "paciente", rotulo: "Paciente" },
      { id: "documento", rotulo: "Documento (opcional)", dica: "RG ou CPF" },
      { id: "data", rotulo: "Data do atendimento", tipo: "date", padrao: hojeISO },
      { id: "hora", rotulo: "Horário do atendimento", tipo: "time", padrao: horaAgora },
      { id: "dias", rotulo: "Dias de afastamento", tipo: "number", padrao: () => "1" },
      { id: "inicio", rotulo: "A partir de", tipo: "date", padrao: hojeISO },
      { id: "cid", rotulo: "CID-10 (opcional)" },
      { id: "autorizaCid", rotulo: "Paciente autorizou expressamente a inclusão do CID", tipo: "checkbox" },
      ...CAMPOS_MEDICO
    ],
    gerar: v => {
      const n = Number(v.dias) || 0;
      const cid = v.cid && v.autorizaCid ? `\nCID-10: ${v.cid.toUpperCase()} (incluído com autorização expressa do(a) paciente).` : "";
      return `ATESTADO MÉDICO

Atesto, para os devidos fins, que ${v.paciente || "__________"}${v.documento ? `, ${v.documento}` : ""}, foi atendido(a) por mim em ${br(v.data)}${v.hora ? `, às ${v.hora}` : ""}, necessitando de afastamento de suas atividades por ${n} (${porExtenso(n)}) dia${n === 1 ? "" : "s"}, a partir de ${br(v.inicio)}.${cid}

${assinatura(v)}`;
    },
    aviso: v => v.cid && !v.autorizaCid ? "O CID foi omitido do texto porque a autorização do paciente não foi marcada." : ""
  },
  {
    id: "comparecimento",
    titulo: "Declaração de comparecimento",
    desc: "Comprova presença no serviço (não é atestado e não justifica afastamento).",
    campos: [
      { id: "paciente", rotulo: "Nome de quem compareceu" },
      { id: "documento", rotulo: "Documento (opcional)" },
      { id: "data", rotulo: "Data", tipo: "date", padrao: hojeISO },
      { id: "entrada", rotulo: "Horário de chegada", tipo: "time" },
      { id: "saida", rotulo: "Horário de saída", tipo: "time", padrao: horaAgora },
      { id: "motivo", rotulo: "Motivo", tipo: "select", opcoes: ["consulta médica", "realização de exames", "procedimento", "acompanhamento de paciente"] },
      { id: "acompanhado", rotulo: "Nome do paciente acompanhado (se acompanhante)" },
      ...CAMPOS_MEDICO
    ],
    gerar: v => `DECLARAÇÃO DE COMPARECIMENTO

Declaro, para os devidos fins, que ${v.paciente || "__________"}${v.documento ? `, ${v.documento}` : ""}, esteve presente neste serviço em ${br(v.data)}, ${v.entrada ? `das ${v.entrada} ` : ""}${v.saida ? `às ${v.saida}` : ""}, para ${v.motivo === "acompanhamento de paciente" && v.acompanhado ? `acompanhar o(a) paciente ${v.acompanhado}` : v.motivo}.

${assinatura(v)}`
  },
  {
    id: "receita",
    titulo: "Receituário ambulatorial",
    desc: "Monte a receita ou importe a prescrição pronta de uma ficha.",
    importar: "ambulatorial",
    campos: [
      { id: "paciente", rotulo: "Paciente" },
      { id: "endereco", rotulo: "Endereço (obrigatório para controlados)" },
      { id: "data", rotulo: "Data", tipo: "date", padrao: hojeISO },
      { id: "usoInterno", rotulo: "Uso oral / interno", tipo: "textarea", linhas: 8, dica: "1. Medicamento — dose — quantidade\n   Tomar ... de ... em ... horas por ... dias" },
      { id: "usoExterno", rotulo: "Uso tópico / externo", tipo: "textarea", linhas: 3 },
      { id: "orientacoes", rotulo: "Orientações e retorno", tipo: "textarea", linhas: 4 },
      ...CAMPOS_MEDICO
    ],
    gerar: v => `RECEITUÁRIO

Paciente: ${v.paciente || "__________"}${v.endereco ? `\nEndereço: ${v.endereco}` : ""}

${linhas("USO ORAL / INTERNO", v.usoInterno)}${v.usoExterno ? "\n" + linhas("USO EXTERNO", v.usoExterno) : ""}${v.orientacoes ? "\n" + linhas("ORIENTAÇÕES", v.orientacoes) : ""}
${assinatura(v)}`,
    aviso: () => "Psicotrópicos, entorpecentes, retinoides e antimicrobianos seguem regras próprias de receituário (Portaria SVS/MS 344/1998 e RDC 471/2021)."
  },
  {
    id: "prescricao-hospitalar",
    titulo: "Prescrição hospitalar",
    desc: "Prescrição de internação ou sala de emergência, item por item.",
    importar: "hospitalar",
    campos: [
      { id: "paciente", rotulo: "Paciente" },
      { id: "leito", rotulo: "Leito / setor" },
      { id: "peso", rotulo: "Peso (kg)", tipo: "number" },
      { id: "alergias", rotulo: "Alergias", padrao: () => "Nega" },
      { id: "data", rotulo: "Data", tipo: "date", padrao: hojeISO },
      { id: "dieta", rotulo: "Dieta", tipo: "select", opcoes: ["Dieta livre", "Dieta branda", "Dieta pastosa", "Dieta para diabético", "Dieta hipossódica", "Dieta zero (jejum)", "Dieta enteral por SNE", "Aleitamento materno / dieta para idade"] },
      { id: "hidratacao", rotulo: "Hidratação venosa", tipo: "textarea", linhas: 2, dica: "Ex.: SF 0,9% 1.000 mL IV em 8 h" },
      { id: "medicacoes", rotulo: "Medicações", tipo: "textarea", linhas: 7, dica: "Uma por linha: droga, dose, via, intervalo, diluição" },
      { id: "sintomaticos", rotulo: "Sintomáticos se necessário (SN)", tipo: "textarea", linhas: 3,
        padrao: () => "Dipirona 1 g IV diluída em 10 mL de AD, até 6/6h, se dor ou febre ≥ 37,8 °C\nOndansetrona 4 mg IV, até 8/8h, se náusea ou vômitos" },
      { id: "profilaxias", rotulo: "Profilaxias", tipo: "textarea", linhas: 2, dica: "Ex.: enoxaparina 40 mg SC 1×/dia (avaliar risco de TEV e sangramento)" },
      { id: "cuidados", rotulo: "Cuidados e controles", tipo: "textarea", linhas: 5,
        padrao: () => "Sinais vitais e dor de 6/6h\nCabeceira elevada a 30°\nGlicemia capilar conforme protocolo\nBalanço hídrico e diurese\nComunicar se PAS < 90 mmHg, SpO₂ < 92%, FC > 120 bpm, rebaixamento ou febre" },
      ...CAMPOS_MEDICO
    ],
    gerar: v => {
      let n = 0;
      const item = t => `${++n}. ${t}`;
      const bloco = t => (t || "").split("\n").map(s => s.trim()).filter(Boolean).map(item).join("\n");
      return `PRESCRIÇÃO MÉDICA — ${br(v.data)}
Paciente: ${v.paciente || "__________"}${v.leito ? ` · Leito: ${v.leito}` : ""}${v.peso ? ` · Peso: ${v.peso} kg` : ""}
Alergias: ${v.alergias || "__________"}

${[item(v.dieta), bloco(v.hidratacao), bloco(v.medicacoes), bloco(v.sintomaticos), bloco(v.profilaxias), bloco(v.cuidados)].filter(Boolean).join("\n")}

${assinatura(v)}`;
    }
  },
  {
    id: "admissao",
    titulo: "Admissão médica hospitalar",
    desc: "Nota de admissão estruturada.",
    campos: [
      { id: "paciente", rotulo: "Paciente, idade e sexo" },
      { id: "data", rotulo: "Data", tipo: "date", padrao: hojeISO },
      { id: "hora", rotulo: "Hora", tipo: "time", padrao: horaAgora },
      { id: "procedencia", rotulo: "Procedência", dica: "Ex.: PS, transferência da UPA X" },
      { id: "qp", rotulo: "Queixa principal" },
      { id: "hda", rotulo: "História da doença atual", tipo: "textarea", linhas: 5 },
      { id: "antecedentes", rotulo: "Antecedentes pessoais e cirúrgicos", tipo: "textarea", linhas: 3 },
      { id: "medicacoes", rotulo: "Medicações em uso", tipo: "textarea", linhas: 3 },
      { id: "alergias", rotulo: "Alergias", padrao: () => "Nega" },
      { id: "habitos", rotulo: "Hábitos (tabagismo, álcool, drogas)" },
      { id: "sv", rotulo: "Sinais vitais", dica: "PA, FC, FR, Tax, SpO₂, glicemia, dor" },
      { id: "exame", rotulo: "Exame físico", tipo: "textarea", linhas: 6,
        padrao: () => "Geral: \nCardiovascular: \nRespiratório: \nAbdome: \nNeurológico: \nExtremidades: " },
      { id: "exames", rotulo: "Exames complementares", tipo: "textarea", linhas: 3 },
      { id: "hd", rotulo: "Hipóteses diagnósticas", tipo: "textarea", linhas: 3 },
      { id: "plano", rotulo: "Conduta e plano", tipo: "textarea", linhas: 4 },
      ...CAMPOS_MEDICO
    ],
    gerar: v => `ADMISSÃO MÉDICA — ${br(v.data)} ${v.hora || ""}
Paciente: ${v.paciente || "__________"}${v.procedencia ? `\nProcedência: ${v.procedencia}` : ""}

QP: ${v.qp || ""}

${linhas("HDA:", v.hda)}
${linhas("ANTECEDENTES:", v.antecedentes)}${linhas("MEDICAÇÕES EM USO:", v.medicacoes)}ALERGIAS: ${v.alergias || ""}
${v.habitos ? `HÁBITOS: ${v.habitos}\n` : ""}
EXAME FÍSICO
${v.sv ? `Sinais vitais: ${v.sv}\n` : ""}${v.exame || ""}

${linhas("EXAMES COMPLEMENTARES:", v.exames)}
${linhas("HIPÓTESES DIAGNÓSTICAS:", v.hd)}
${linhas("CONDUTA / PLANO:", v.plano)}
${assinatura(v)}`
  },
  {
    id: "evolucao",
    titulo: "Evolução médica (SOAP)",
    desc: "Evolução diária de internação ou observação.",
    campos: [
      { id: "paciente", rotulo: "Paciente / leito" },
      { id: "data", rotulo: "Data", tipo: "date", padrao: hojeISO },
      { id: "hora", rotulo: "Hora", tipo: "time", padrao: horaAgora },
      { id: "dih", rotulo: "Dia de internação (DIH)", tipo: "number" },
      { id: "diagnosticos", rotulo: "Diagnósticos / problemas ativos", tipo: "textarea", linhas: 3 },
      { id: "atb", rotulo: "Antibióticos (droga e dia)", dica: "Ex.: Ceftriaxona D3" },
      { id: "dispositivos", rotulo: "Dispositivos", dica: "Ex.: AVP, SVD, SNE, CVC (data)" },
      { id: "s", rotulo: "S — Subjetivo", tipo: "textarea", linhas: 3 },
      { id: "sv", rotulo: "Sinais vitais / balanço", dica: "PA, FC, FR, Tax, SpO₂, diurese, BH, glicemias" },
      { id: "o", rotulo: "O — Exame físico e exames", tipo: "textarea", linhas: 5 },
      { id: "a", rotulo: "A — Avaliação", tipo: "textarea", linhas: 3 },
      { id: "p", rotulo: "P — Plano", tipo: "textarea", linhas: 4 },
      ...CAMPOS_MEDICO
    ],
    gerar: v => `EVOLUÇÃO MÉDICA — ${br(v.data)} ${v.hora || ""}${v.dih ? ` · DIH ${v.dih}` : ""}
Paciente: ${v.paciente || "__________"}
${linhas("Diagnósticos / problemas:", v.diagnosticos)}${v.atb ? `ATB: ${v.atb}\n` : ""}${v.dispositivos ? `Dispositivos: ${v.dispositivos}\n` : ""}
S: ${v.s || ""}

O: ${v.sv ? `${v.sv}\n` : ""}${v.o || ""}

A: ${v.a || ""}

P: ${v.p || ""}

${assinatura(v)}`
  },
  {
    id: "passagem",
    titulo: "Passagem de caso no PS",
    desc: "Formato I-PASS / SBAR para troca de plantão ou transferência.",
    campos: [
      { id: "paciente", rotulo: "Paciente, idade, leito" },
      { id: "gravidade", rotulo: "Gravidade", tipo: "select", opcoes: ["ESTÁVEL", "EM OBSERVAÇÃO — atenção", "INSTÁVEL — prioridade"] },
      { id: "situacao", rotulo: "S — Situação (o que está acontecendo agora)", tipo: "textarea", linhas: 3 },
      { id: "historia", rotulo: "B — Breve história e antecedentes relevantes", tipo: "textarea", linhas: 3 },
      { id: "avaliacao", rotulo: "A — Avaliação (sinais vitais, exame, exames, hipóteses)", tipo: "textarea", linhas: 4 },
      { id: "feito", rotulo: "Já feito (medicações, procedimentos, horários)", tipo: "textarea", linhas: 3 },
      { id: "pendencias", rotulo: "R — Pendências e recomendações", tipo: "textarea", linhas: 4, dica: "Exames a checar, reavaliações com horário, vaga/regulação" },
      { id: "contingencia", rotulo: "Plano de contingência (se piorar...)", tipo: "textarea", linhas: 2 },
      { id: "data", rotulo: "Data", tipo: "date", padrao: hojeISO },
      { id: "hora", rotulo: "Hora", tipo: "time", padrao: horaAgora },
      ...CAMPOS_MEDICO
    ],
    gerar: v => `PASSAGEM DE CASO — ${br(v.data)} ${v.hora || ""}
Paciente: ${v.paciente || "__________"}
Gravidade: ${v.gravidade}

${linhas("S — Situação:", v.situacao)}
${linhas("B — História:", v.historia)}
${linhas("A — Avaliação:", v.avaliacao)}
${linhas("Já realizado:", v.feito)}
${linhas("R — Pendências / recomendações:", v.pendencias)}
${linhas("Se piorar:", v.contingencia)}
Passado por: ${v.medico || "__________"}${v.crm ? ` (${v.crm})` : ""}
Recebido por: __________ — confirmar síntese em voz alta.`
  }
];

/* ---------- tela ---------- */
/* Dados do médico: vêm do perfil (Configurações); o que for editado aqui atualiza o perfil. */
function lerMedico() {
  const p = Perfil.ler();
  return { medico: Perfil.nomeCompleto(), crm: p.crm, rqe: p.rqe, servico: p.servico, cidade: p.cidade };
}
function salvarMedico(v) {
  const p = Perfil.ler();
  const nome = (v.medico || "").replace(/^(Dra?\.)\s*/i, "");
  const trat = (v.medico || "").match(/^(Dra?\.)/i);
  Perfil.salvar({ ...p, tratamento: trat ? trat[1] : (nome ? "" : p.tratamento), nome: nome || p.nome, crm: v.crm || p.crm, rqe: v.rqe || "", servico: v.servico || "", cidade: v.cidade || "" });
}

function campoHTML(doc, c, valor) {
  const id = `d-${doc.id}-${c.id}`;
  const tipo = c.tipo || "text";
  if (tipo === "checkbox")
    return `<label class="chk" for="${id}"><input type="checkbox" id="${id}" data-c="${c.id}" ${valor ? "checked" : ""}> ${esc(c.rotulo)}</label>`;
  let input;
  if (tipo === "textarea") input = `<textarea id="${id}" data-c="${c.id}" rows="${c.linhas || 3}" placeholder="${esc(c.dica || "")}">${esc(valor)}</textarea>`;
  else if (tipo === "select") input = `<select id="${id}" data-c="${c.id}">${c.opcoes.map(o => `<option ${o === valor ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
  else input = `<input id="${id}" data-c="${c.id}" type="${tipo}" value="${esc(valor)}" placeholder="${esc(c.dica || "")}" ${tipo === "number" ? 'inputmode="decimal" min="0"' : ""}>`;
  return `<label class="campo ${tipo === "textarea" ? "largo" : ""}" for="${id}"><span>${esc(c.rotulo)}</span>${input}</label>`;
}

function telaDocumentos(docId, contexto = {}) {
  const doc = DOCUMENTOS.find(d => d.id === docId);
  if (!doc) {
    $app.innerHTML = `<div class="view">
      <button class="back" id="voltar">← Início</button>
      <div class="f-head"><h2>Documentos</h2><p>Preencha e copie para o prontuário eletrônico ou para impressão. Os dados do paciente não ficam salvos no aparelho.</p></div>
      <div class="list">${DOCUMENTOS.map(d => `<button class="item doc" data-doc="${d.id}" id="doc-${d.id}"><b>${esc(d.titulo)}</b><span>${esc(d.desc)}</span></button>`).join("")}</div>
    </div>`;
    document.getElementById("voltar").onclick = () => ir("");
    $app.querySelectorAll("[data-doc]").forEach(b => b.onclick = () => ir(`doc-${b.dataset.doc}`));
    return;
  }

  const medico = lerMedico();
  const valores = {};
  doc.campos.forEach(c => valores[c.id] = c.medico ? (medico[c.id] || "") : (c.padrao ? c.padrao() : (c.tipo === "select" ? c.opcoes[0] : "")));

  const comPrescricao = doc.importar ? FICHAS.filter(f => f.prescricao && f.prescricao[doc.importar]).sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR")) : [];
  const destinoImportacao = doc.importar === "ambulatorial" ? "usoInterno" : "medicacoes";
  const fichaInicial = contexto.ficha && comPrescricao.find(f => f.id === contexto.ficha);
  if (fichaInicial) valores[destinoImportacao] = fichaInicial.prescricao[doc.importar];

  const pacienteCampos = doc.campos.filter(c => !c.medico);
  $app.innerHTML = `<div class="view">
    <button class="back" id="voltar">← Documentos</button>
    <div class="f-head"><h2>${esc(doc.titulo)}</h2><p>${esc(doc.desc)}</p></div>
    ${comPrescricao.length ? `<label class="campo largo importar" for="d-importar"><span>Importar prescrição de uma ficha</span>
      <select id="d-importar"><option value="">Escolha uma ficha…</option>${comPrescricao.map(f => `<option value="${f.id}" ${fichaInicial && fichaInicial.id === f.id ? "selected" : ""}>${esc(f.titulo)}</option>`).join("")}</select></label>` : ""}
    <div class="doc-layout">
    <form class="form-doc" id="form-doc" autocomplete="off">
      ${pacienteCampos.map(c => campoHTML(doc, c, valores[c.id])).join("")}
      <details class="medico-box" ${CAMPOS_MEDICO.every(c => medico[c.id]) ? "" : "open"}>
        <summary>Dados do(a) médico(a) <small>lembrados neste aparelho</small></summary>
        <div class="form-doc">${CAMPOS_MEDICO.map(c => campoHTML(doc, c, valores[c.id])).join("")}</div>
      </details>
    </form>
    <div class="sec gap-top doc-saida">
      <div class="card-h"><h3>Texto gerado</h3><button class="copy" data-target="saida-doc">Copiar</button></div>
      <p class="aviso" id="aviso-doc" hidden></p>
      <pre class="rx saida" id="saida-doc"></pre>
      <button class="link-btn" id="limpar-doc" type="button">Limpar dados do paciente</button>
    </div>
    </div>
  </div>`;

  const form = document.getElementById("form-doc");
  const atualizar = () => {
    form.querySelectorAll("[data-c]").forEach(el => valores[el.dataset.c] = el.type === "checkbox" ? el.checked : el.value);
    document.getElementById("saida-doc").textContent = doc.gerar(valores).replace(/\n{3,}/g, "\n\n");
    const aviso = doc.aviso ? doc.aviso(valores) : "";
    const $aviso = document.getElementById("aviso-doc");
    $aviso.textContent = aviso; $aviso.hidden = !aviso;
    salvarMedico(valores);
  };
  form.addEventListener("input", atualizar);
  form.addEventListener("change", atualizar);
  form.addEventListener("submit", e => e.preventDefault());
  const imp = document.getElementById("d-importar");
  if (imp) imp.onchange = () => {
    const f = comPrescricao.find(x => x.id === imp.value);
    if (!f) return;
    const alvo = document.getElementById(`d-${doc.id}-${destinoImportacao}`);
    alvo.value = (alvo.value.trim() ? alvo.value.trim() + "\n" : "") + f.prescricao[doc.importar];
    atualizar();
  };
  document.getElementById("limpar-doc").onclick = () => telaDocumentos(doc.id);
  document.getElementById("voltar").onclick = () => ir("documentos");
  ligarCopias();
  atualizar();
}
