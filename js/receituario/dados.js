/* Receituário — regras e leitura de prescrições (sem tela, testável no Node).
   Tipos de receituário conforme Portaria SVS/MS 344/1998, RDC 471/2021 (antimicrobianos) e
   Lei 14.063/2020 + Resolução CFM 2.299/2021 (prescrição eletrônica). Conferir sempre a norma vigente. */

const RX_TIPOS = {
  simples: {
    nome: "Receita branca simples", curto: "Simples", vias: 1,
    uso: "MIPs, fitoterápicos e tarja vermelha comum (venda sob prescrição, sem retenção).",
    regra: "Via única."
  },
  especial: {
    nome: "Receita de controle especial (2 vias)", curto: "Controle especial", vias: 2,
    uso: "Antimicrobianos, retinoides, imunossupressores, antirretrovirais e psicotrópicos/antidepressivos/anticonvulsivantes das listas C1, C2 e C4.",
    regra: "Duas vias: a 1ª fica retida na farmácia e a 2ª com o paciente. Validade de 30 dias (lista C1); antimicrobianos: 10 dias (RDC 471/2021)."
  },
  azul: {
    nome: "Receita azul — Notificação B (B1/B2)", curto: "Azul (B)", vias: 2,
    uso: "Psicotrópicos (ansiolíticos/hipnóticos, B1) e anorexígenos (B2).",
    regra: "Notificação em talonário azul numerado pela Vigilância Sanitária. Validade de 30 dias; B1 até 60 dias de tratamento, B2 até 30 dias."
  },
  amarela: {
    nome: "Receita amarela — Notificação A (A1, A2, A3)", curto: "Amarela (A)", vias: 1,
    uso: "Entorpecentes e psicotrópicos de controle mais rigoroso (ex.: morfina, metilfenidato).",
    regra: "Talonário amarelo oficial fornecido pela Vigilância Sanitária. Um medicamento por notificação, validade de 30 dias e no máximo 30 dias de tratamento."
  },
  digital: {
    nome: "Prescrição eletrônica / digital", curto: "Digital", vias: 1,
    uso: "Receita simples, antimicrobianos e controle especial (C1) assinados com certificado digital ICP-Brasil.",
    regra: "Precisa de assinatura eletrônica qualificada (ICP-Brasil). Notificações A e B continuam em papel."
  },
  exames: {
    nome: "Solicitação de exames", curto: "Exames", vias: 1,
    uso: "Pedido de exames laboratoriais e de imagem no timbrado.",
    regra: "Informe hipótese diagnóstica, CID e justificativa quando exigidos pela guia."
  }
};
const RX_ORDEM_TIPOS = ["simples", "especial", "azul", "amarela"];

const RX_VIAS = ["USO ORAL", "USO SUBLINGUAL", "USO TÓPICO", "USO OFTÁLMICO", "USO OTOLÓGICO", "USO NASAL", "USO INALATÓRIO",
  "USO RETAL", "USO VAGINAL", "USO INTRAMUSCULAR", "USO SUBCUTÂNEO", "USO ENDOVENOSO", "USO TRANSDÉRMICO", "USO EXTERNO"];
const RX_UNIDADES = ["comprimidos", "cápsulas", "drágeas", "sachês", "envelopes", "frascos", "frascos-ampola", "ampolas", "bisnagas", "tubos",
  "caixas", "flaconetes", "adesivos", "canetas", "refis", "unidades", "mL", "g"];
/* Gênero gramatical da unidade (para o número por extenso). */
const RX_FEMININO = /^(capsula|drageas?|ampola|bisnaga|caixa|unidade|caneta|seringa|gota|pastilha)/;

const rxNorm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* Tipo de receituário exigido por um medicamento da base (campo receita). */
function rxTipoDoMedicamento(m) {
  if (!m || !m.receita) return { tipo: "simples" };
  if (m.receita === "antimicrobiano") return { tipo: "especial", antimicrobiano: true };
  if (m.receita === "C1") return { tipo: "especial" };
  if (m.receita === "B1") return { tipo: "azul" };
  if (m.receita === "A") return { tipo: "amarela" };
  return { tipo: "simples" };
}

/* Reconhece um medicamento da base pelo nome escrito no item. */
function rxReconhecerMed(nome) {
  if (typeof MEDICAMENTOS === "undefined") return null;
  const t = rxNorm(nome);
  let melhor = null, tam = 0;
  for (const m of MEDICAMENTOS) for (const n of m.nomes || []) {
    const k = rxNorm(n);
    if (k.length > tam && new RegExp(`(^|[^a-z0-9])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z0-9])`).test(t)) { melhor = m; tam = k.length; }
  }
  return melhor;
}

/* ---------- números por extenso (quantidade em controlados) ---------- */
function rxExtenso(n, feminino = false) {
  n = Math.round(Number(n));
  if (!isFinite(n) || n < 0) return "";
  if (n === 0) return "zero";
  const u = ["", feminino ? "uma" : "um", feminino ? "duas" : "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze",
    "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
  const d = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  const c = ["", "cento", feminino ? "duzentas" : "duzentos", feminino ? "trezentas" : "trezentos", feminino ? "quatrocentas" : "quatrocentos", feminino ? "quinhentas" : "quinhentos",
    feminino ? "seiscentas" : "seiscentos", feminino ? "setecentas" : "setecentos", feminino ? "oitocentas" : "oitocentos", feminino ? "novecentas" : "novecentos"];
  const ate999 = x => {
    if (x === 100) return "cem";
    const p = [];
    if (x >= 100) p.push(c[Math.floor(x / 100)]);
    const r = x % 100;
    if (r >= 20) { p.push(d[Math.floor(r / 10)]); if (r % 10) p.push(u[r % 10]); }
    else if (r) p.push(u[r]);
    return p.join(" e ");
  };
  if (n < 1000) return ate999(n);
  const mil = Math.floor(n / 1000), resto = n % 1000;
  const m = mil === 1 ? "mil" : `${rxExtenso(mil, false)} mil`;
  if (!resto) return m;
  return `${m}${resto < 100 || resto % 100 === 0 ? " e " : " "}${ate999(resto)}`;
}
const rxFeminino = unidade => RX_FEMININO.test(rxNorm(unidade));
/* "21 cápsulas" → "21 (vinte e uma) cápsulas" */
function rxQuantidadeTexto(item, extenso) {
  const q = item.qtd === "" || item.qtd === null || item.qtd === undefined ? "" : String(item.qtd).trim();
  if (!q) return "";
  const n = Number(q.replace(",", "."));
  const un = item.unidade || "";
  const unid = n === 1 ? rxSingular(un) : un;
  return extenso && isFinite(n) && Number.isInteger(n) ? `${q} (${rxExtenso(n, rxFeminino(un))}) ${unid}`.trim() : `${q} ${unid}`.trim();
}
function rxSingular(un) {
  const s = String(un || "");
  if (/^(mL|g)$/.test(s)) return s;
  if (/frascos-ampola$/.test(s)) return "frasco-ampola";
  return s.replace(/ões$/, "ão").replace(/ês$/, "ê").replace(/s$/, "");
}

/* ---------- quantidade a partir da posologia ---------- */
const RX_RE_FORMA = "(comprimidos?|capsulas?|drageas?|saches?|envelopes?|ampolas?|frascos?-ampolas?|adesivos?|pastilhas?|flaconetes?)";
function rxDiasDaPosologia(pos) {
  const t = rxNorm(pos);
  let m = t.match(/por (\d+(?:[.,]\d+)?) ?dias?/);
  if (m) return Number(m[1].replace(",", "."));
  m = t.match(/por (\d+) ?semanas?/); if (m) return Number(m[1]) * 7;
  m = t.match(/por (\d+) ?mes(es)?/); if (m) return Number(m[1]) * 30;
  if (/por (um|1) mes\b/.test(t)) return 30;
  if (/dose unica/.test(t)) return 1;
  return null;
}
/* Quantas unidades (comprimidos/cápsulas...) por dia, e por dose. */
function rxPorDia(pos) {
  const t = rxNorm(pos).replace(/\([^)]*\)/g, " ");
  const mDose = t.match(new RegExp(`(\\d+(?:[.,]\\d+)?|meio|meia|um|uma|dois|duas|tres) ?${RX_RE_FORMA}`));
  const palavras = { meio: 0.5, meia: 0.5, um: 1, uma: 1, dois: 2, duas: 2, tres: 3 };
  const porDose = mDose ? (palavras[mDose[1]] ?? Number(mDose[1].replace(",", "."))) : null;
  if (porDose === null) return null;
  if (/dose unica/.test(t)) return { porDose, porDia: porDose, unica: true };
  let vezes = null, m;
  if ((m = t.match(/de (\d+) ?(?:em|\/) ?\1 ?(?:horas|h)\b/)) || (m = t.match(/(\d+) ?\/ ?\1 ?h/)) || (m = t.match(/a cada (\d+) ?(?:horas|h)\b/))) vezes = 24 / Number(m[1]);
  else if ((m = t.match(/(\d+) ?vezes (?:ao|por) dia/))) vezes = Number(m[1]);
  else if (/(uma|1) vez (?:ao|por) dia|1 ?x ?(?:ao )?dia|a noite|ao deitar|pela manha|em jejum|1 vez por dia/.test(t)) vezes = 1;
  else if (/(duas|2) vezes/.test(t)) vezes = 2;
  else if (/(tres|3) vezes/.test(t)) vezes = 3;
  if (vezes === null) return null;
  return { porDose, porDia: porDose * vezes };
}
/* Quantidade total sugerida (só para formas contáveis). */
function rxCalcularQuantidade(item) {
  if (!/comprimido|capsula|dragea|sache|envelope|ampola|adesivo|pastilha|flaconete/.test(rxNorm(item.unidade))) return null;
  const p = rxPorDia(item.posologia);
  if (!p) return null;
  if (p.unica) return Math.ceil(p.porDose);
  const dias = Number(item.dias) || rxDiasDaPosologia(item.posologia);
  if (!dias) return null;
  return Math.ceil(p.porDia * dias);
}

/* ---------- leitura de uma prescrição em texto ---------- */
const RX_RE_VIA = /^\s*(?:uso\s+)?(oral|sublingual|t[oó]pico|oft[aá]lmico|otol[oó]gico|nasal|inalat[oó]rio|retal|vaginal|intramuscular|subcut[aâ]neo|endovenoso|intravenoso|transd[eé]rmico|externo|interno)\s*(?:\/.*)?:?\s*$/i;
const RX_VIA_CANON = { oral: "USO ORAL", interno: "USO ORAL", sublingual: "USO SUBLINGUAL", topico: "USO TÓPICO", oftalmico: "USO OFTÁLMICO", otologico: "USO OTOLÓGICO", nasal: "USO NASAL",
  inalatorio: "USO INALATÓRIO", retal: "USO RETAL", vaginal: "USO VAGINAL", intramuscular: "USO INTRAMUSCULAR", subcutaneo: "USO SUBCUTÂNEO", endovenoso: "USO ENDOVENOSO",
  intravenoso: "USO ENDOVENOSO", transdermico: "USO TRANSDÉRMICO", externo: "USO EXTERNO" };
function rxUnidadeCanon(u) {
  const t = rxNorm(u);
  const mapa = [[/^comp/, "comprimidos"], [/^caps/, "cápsulas"], [/^drag/, "drágeas"], [/^sach/, "sachês"], [/^envel/, "envelopes"], [/^frascos?-ampolas?/, "frascos-ampola"], [/^fr/, "frascos"],
    [/^amp/, "ampolas"], [/^bisn/, "bisnagas"], [/^tubo/, "tubos"], [/^caixa|^cx/, "caixas"], [/^flacon/, "flaconetes"], [/^adesiv/, "adesivos"], [/^canet/, "canetas"], [/^refi/, "refis"],
    [/^unid|^un\b/, "unidades"], [/^ml$/, "mL"], [/^g$/, "g"]];
  for (const [re, v] of mapa) if (re.test(t)) return v;
  return u.trim();
}
function rxNovoItem(campos = {}) {
  return { nome: "", via: "USO ORAL", qtd: "", unidade: "comprimidos", posologia: "", dias: "", nota: "", qtdAuto: true, ...campos };
}
function rxLerPrescricao(texto) {
  const linhas = String(texto || "").replace(/\r/g, "").split("\n");
  const itens = [];
  let via = "USO ORAL", atual = null;
  for (const bruta of linhas) {
    const l = bruta.trim();
    if (!l) continue;
    const mv = l.match(RX_RE_VIA);
    if (mv) { via = RX_VIA_CANON[rxNorm(mv[1])] || via; atual = null; continue; }
    /* Títulos de seção ("ALTA — ANGIOEDEMA", "PRESCRIÇÃO:") não são itens. */
    if (!/^\d/.test(l) && l.length < 90 && (l === l.toUpperCase() && /[A-ZÁÉÍÓÚÇ]{3}/.test(l) || /:$/.test(l))) { atual = null; continue; }
    const mi = l.match(/^(\d{1,2})\s*[.)-]\s*(.+)$/);
    if (mi) {
      let nome = mi[2], qtd = "", unidade = "";
      const partes = nome.split(/\s*[-–—_.]{3,}\s*/);
      if (partes.length >= 2) { nome = partes[0]; const q = partes.slice(1).join(" ").trim(); const mq = q.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/); if (mq) { qtd = mq[1]; unidade = rxUnidadeCanon(mq[2] || ""); } else unidade = q; }
      else {
        const mq = nome.match(/^(.*?)\s+[-–—]\s*(\d+(?:[.,]\d+)?)\s+([a-zA-Zçãéêíóú-]+)\s*$/);
        if (mq) { nome = mq[1]; qtd = mq[2]; unidade = rxUnidadeCanon(mq[3]); }
      }
      atual = rxNovoItem({ nome: nome.trim(), via, qtd, unidade: unidade || "", qtdAuto: !qtd });
      itens.push(atual);
      continue;
    }
    if (atual) {
      if (/^\(.*\)$/.test(l)) atual.nota = (atual.nota ? atual.nota + " " : "") + l.slice(1, -1);
      else atual.posologia = (atual.posologia ? atual.posologia + " " : "") + l;
    } else if (!/^(receitu|prescri|paciente|data)/i.test(l)) {
      atual = rxNovoItem({ nome: l, via, unidade: "" });
      itens.push(atual);
    }
  }
  for (const it of itens) {
    const d = rxDiasDaPosologia(it.posologia);
    if (d && !it.dias) it.dias = String(d);
    if (!it.unidade) { const m = rxNorm(it.posologia).match(new RegExp(RX_RE_FORMA)); if (m) it.unidade = rxUnidadeCanon(m[1]); else it.unidade = "unidades"; }
    const med = rxReconhecerMed(it.nome);
    if (med) it.medId = med.id;
    if (!it.qtd) { const q = rxCalcularQuantidade(it); if (q) it.qtd = String(q); }
  }
  return itens;
}

/* ---------- regras ---------- */
function rxTipoItem(it) {
  const m = it.medId && typeof MED_POR_ID !== "undefined" ? MED_POR_ID[it.medId] : rxReconhecerMed(it.nome);
  return rxTipoDoMedicamento(m);
}
/* Separa os itens em documentos: "auto" agrupa pelo tipo exigido; Notificação A tem 1 medicamento por documento. */
function rxDocumentos(itens, tipoEscolhido) {
  const validos = itens.filter(i => String(i.nome || "").trim());
  if (tipoEscolhido === "exames") return [{ tipo: "exames", itens: validos }];
  if (tipoEscolhido !== "auto") {
    if (tipoEscolhido === "amarela") return validos.map(i => ({ tipo: "amarela", itens: [i] }));
    return [{ tipo: tipoEscolhido, itens: validos, antimicrobiano: validos.some(i => rxTipoItem(i).antimicrobiano) }];
  }
  const grupos = {};
  for (const i of validos) { const t = rxTipoItem(i).tipo; (grupos[t] = grupos[t] || []).push(i); }
  const docs = [];
  for (const t of RX_ORDEM_TIPOS) if (grupos[t]) {
    if (t === "amarela") grupos[t].forEach(i => docs.push({ tipo: t, itens: [i] }));
    else docs.push({ tipo: t, itens: grupos[t], antimicrobiano: t === "especial" && grupos[t].some(i => rxTipoItem(i).antimicrobiano) });
  }
  return docs;
}
function rxAvisos(est) {
  const av = [];
  const itens = est.itens.filter(i => String(i.nome || "").trim());
  const docs = rxDocumentos(est.itens, est.tipo);
  if (est.tipo === "exames") {
    if (!itens.length) av.push({ g: "info", t: "Inclua ao menos um exame." });
    if (!est.hd && !est.cid) av.push({ g: "info", t: "Guias SUS e de convênio costumam exigir HD ou CID." });
    itens.filter(i => /_{2,}/.test(i.nome)).forEach(i => av.push({ g: "atencao", t: `Complete o "___" em: ${i.nome}` }));
    return av;
  }
  if (!itens.length) return [{ g: "info", t: "Inclua ao menos um medicamento." }];
  if (!String(est.paciente || "").trim()) av.push({ g: "alto", t: "Falta o nome completo do paciente." });
  const exigidos = new Set(itens.map(i => rxTipoItem(i).tipo));
  const nivel = { simples: 0, digital: 0, especial: 1, azul: 2, amarela: 3 };
  if (est.tipo !== "auto") {
    for (const t of exigidos) {
      if (est.tipo === "digital" && (t === "azul" || t === "amarela")) av.push({ g: "critico", t: `Há medicamento que exige ${RX_TIPOS[t].nome}: notificações A e B não são válidas como prescrição digital comum.` });
      else if (est.tipo !== "digital" && nivel[t] > nivel[est.tipo]) av.push({ g: "critico", t: `Há medicamento que exige ${RX_TIPOS[t].nome}. Use o tipo "Automático" para separar.` });
    }
  }
  const temControle = docs.some(d => d.tipo !== "simples" && d.tipo !== "digital") || (est.tipo === "digital" && itens.some(i => rxTipoItem(i).tipo === "especial"));
  if (temControle && !String(est.endereco || "").trim()) av.push({ g: "alto", t: "Receita de controle especial e notificações exigem o endereço completo do paciente." });
  if (docs.some(d => d.antimicrobiano) || (est.tipo === "digital" && itens.some(i => rxTipoItem(i).antimicrobiano))) {
    if (!est.idade || !est.sexo) av.push({ g: "alto", t: "Antimicrobiano: a receita deve trazer idade e sexo do paciente (RDC 471/2021)." });
    av.push({ g: "info", t: "Antimicrobiano: validade de 10 dias a partir da emissão; 2 vias (uma retida)." });
  }
  if (est.tipo === "amarela" && itens.length > 1) av.push({ g: "info", t: "Notificação A: um medicamento por notificação — serão gerados documentos separados." });
  for (const d of docs) for (const i of d.itens) {
    const dias = Number(i.dias) || rxDiasDaPosologia(i.posologia);
    if (d.tipo === "amarela" && dias > 30) av.push({ g: "alto", t: `${i.nome}: Notificação A permite no máximo 30 dias de tratamento.` });
    if (d.tipo === "azul" && dias > 60) av.push({ g: "alto", t: `${i.nome}: Notificação B1 permite no máximo 60 dias de tratamento (B2: 30 dias).` });
    if (d.tipo !== "simples" && !String(i.qtd || "").trim()) av.push({ g: "alto", t: `${i.nome}: informe a quantidade (sai também por extenso nos controlados).` });
    if (!String(i.posologia || "").trim()) av.push({ g: "atencao", t: `${i.nome}: falta a posologia (como tomar).` });
    if (/_{2,}/.test(i.posologia)) av.push({ g: "atencao", t: `${i.nome}: complete a dose no lugar de "___".` });
  }
  if (docs.some(d => d.tipo === "azul" || d.tipo === "amarela")) av.push({ g: "info", t: "Notificações A e B só valem no talonário oficial numerado. O sistema gera a via de orientação ao paciente e um roteiro com os dados para transcrever na notificação." });
  if (docs.length > 1) av.push({ g: "info", t: `Os itens exigem receituários diferentes: serão gerados ${docs.length} documentos no mesmo PDF.` });
  return av;
}

/* Texto simples (para copiar ao prontuário eletrônico). */
function rxTexto(est, tim) {
  const docs = rxDocumentos(est.itens, est.tipo);
  const data = est.data ? est.data.split("-").reverse().join("/") : "";
  const out = [];
  for (const d of docs) {
    const l = [RX_TIPOS[d.tipo].nome.toUpperCase(), `Paciente: ${est.paciente || "__________"}${data ? `    Data: ${data}` : ""}`];
    if (d.tipo === "exames") {
      l.push("", "Solicito:");
      d.itens.forEach((i, k) => l.push(`${k + 1}. ${i.nome}`));
      if (est.hd || est.cid) l.push("", `Hipótese diagnóstica: ${est.hd || ""}${est.cid ? ` (CID-10 ${est.cid})` : ""}`.trim());
      if (est.justificativa) l.push(`Justificativa: ${est.justificativa}`);
    } else {
      if (est.endereco && d.tipo !== "simples") l.push(`Endereço: ${est.endereco}`);
      let via = null;
      d.itens.forEach((i, k) => {
        if (i.via !== via) { via = i.via; l.push("", via); }
        l.push(`${k + 1}. ${i.nome}${i.qtd ? ` ---- ${rxQuantidadeTexto(i, d.tipo !== "simples" && d.tipo !== "digital")}` : ""}`);
        if (i.posologia) l.push(`   ${i.posologia}`);
      });
    }
    if (est.orientacoes) l.push("", est.orientacoes);
    l.push("", `${tim && tim.nomeCompleto ? tim.nomeCompleto : ""}${tim && tim.crm ? ` — ${tim.crm}` : ""}`);
    out.push(l.join("\n"));
  }
  return out.join("\n\n────────────\n\n");
}

if (typeof module !== "undefined") module.exports = { RX_TIPOS, rxExtenso, rxQuantidadeTexto, rxDiasDaPosologia, rxPorDia, rxCalcularQuantidade, rxLerPrescricao, rxDocumentos, rxAvisos, rxTexto, rxTipoDoMedicamento, rxNovoItem, rxSingular };
