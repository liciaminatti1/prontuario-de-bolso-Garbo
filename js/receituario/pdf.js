/* Receituário — geração do PDF no timbrado (jsPDF, no próprio aparelho) e pré-visualização (pdf.js).
   Fontes: Libre Baskerville, EB Garamond e Montserrat (SIL Open Font License), em vendor/fontes. */

/* Cores e medidas (mm) copiadas do modelo de timbrado da médica (A4). */
const RXP_COR = { marrom: "#5B392D", marrom2: "#5C3D30", rose: "#BC917F", linha: "#B88A78", rodape: "#5C3D30", assinatura: "#AD8F85", texto: "#000000", cinza: "#7A6A64" };
const RXP = {
  lm: { y: 37.9, tam: 37.3 }, nome: { y: 51.3, tam: 16.35 }, prof: { y: 58.35, tam: 10, sub: 58.7 }, crm: { y: 63.25, tam: 9.73 },
  pac: { y: 72.45, x: 17.2, xd: 184.1, tam: 12 }, regua: { y: 74.3, x1: 9.7, x2: 200.1 },
  titulo: { y: 85.45 }, corpo: { y: 99.95, x: 30, larg: 150, passo: 5.5, paragrafo: 1.7, tam: 12 },
  ass: { y: 240.9, x1: 121.8, x2: 181.2, cx: 151.5 }, rod: { linhaY: 278.2, x1: 56, x2: 154, y: 283.05, tam: 8 }
};
const RX_URL = p => new URL(p, document.baseURI).href;
const RX_FONTES = [
  ["EBGaramond_400Regular.ttf", "Garamond", "normal"], ["EBGaramond_400Regular_Italic.ttf", "Garamond", "italic"], ["EBGaramond_600SemiBold.ttf", "Garamond", "bold"],
  ["LibreBaskerville_400Regular.ttf", "Baskerville", "normal"], ["Montserrat_400Regular.ttf", "Montserrat", "normal"],
  ["Montserrat_400Regular_Italic.ttf", "Montserrat", "italic"], ["Montserrat_500Medium.ttf", "Montserrat", "medium"], ["Montserrat_600SemiBold.ttf", "Montserrat", "bold"]
];
let rxJsPdf = null, rxFontesB64 = null;

function rxCarregarScript(src) {
  return new Promise((ok, falha) => {
    if (document.querySelector(`script[data-rx="${src}"]`)) return ok();
    const s = document.createElement("script"); s.src = RX_URL(src); s.dataset.rx = src; s.onload = ok; s.onerror = () => falha(new Error("Não foi possível carregar " + src)); document.head.appendChild(s);
  });
}
async function rxCarregar() {
  if (!rxJsPdf) { await rxCarregarScript("vendor/jspdf/jspdf.umd.min.js"); rxJsPdf = window.jspdf.jsPDF; }
  if (!rxFontesB64) {
    rxFontesB64 = await Promise.all(RX_FONTES.map(async ([arq]) => {
      const buf = new Uint8Array(await (await fetch(RX_URL("vendor/fontes/" + arq))).arrayBuffer());
      let bin = ""; for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000));
      return btoa(bin);
    }));
  }
  return rxJsPdf;
}

const rxEspacar = s => String(s || "").trim().toUpperCase().split(/\s+/).map(w => w.split("").join(" ")).join("   ");
const RX_TROCAS = { "≥": ">=", "≤": "<=", "→": "->", "←": "<-", "↑": "(elevado)", "↓": "(reduzido)", "β": "beta", "Δ": "delta", "≈": "~", "≠": "diferente de", "∞": "infinito", "✓": "OK", "μ": "µ",
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "™": "", "\u00a0": " " };
const rxSanear = t => String(t).replace(/[≥≤→←↑↓βΔ≈≠∞✓μ₀₁₂₃₄™\u00a0]/g, c => RX_TROCAS[c]);
const rxDataBR = iso => iso ? iso.split("-").reverse().join("/") : "";

async function rxGerarPdf(est, tim) {
  const JsPDF = await rxCarregar();
  const pdf = new JsPDF({ unit: "mm", format: "a4", compress: true });
  RX_FONTES.forEach(([arq, fam, est2], i) => { pdf.addFileToVFS(arq, rxFontesB64[i]); pdf.addFont(arq, fam, est2); });
  /* Símbolos que as fontes do timbrado não têm viram texto equivalente (senão somem no PDF). */
  const _text = pdf.text.bind(pdf), _split = pdf.splitTextToSize.bind(pdf), _w = pdf.getTextWidth.bind(pdf);
  const san = t => typeof t === "string" ? rxSanear(t) : Array.isArray(t) ? t.map(rxSanear) : t;
  pdf.text = (t, ...r) => _text(san(t), ...r);
  pdf.splitTextToSize = (t, ...r) => _split(san(t), ...r);
  pdf.getTextWidth = t => _w(san(t));
  pdf.setProperties({ title: est.documentoLivre ? (est.documentoLivre.titulo || "Documento") : est.tipo === "exames" ? "Solicitação de exames" : "Receita", creator: "Licia Minatti · Prontuário de Bolso" });
  const W = 210, ctx = { pdf, est, tim, primeira: true };
  const fonte = (fam, estilo, tam, cor) => { pdf.setFont(fam, estilo); pdf.setFontSize(tam); pdf.setTextColor(cor || RXP_COR.marrom); };
  const centro = (txt, y) => pdf.text(txt, W / 2 - pdf.getTextWidth(txt) / 2, y);
  const linha = (x1, y, x2, cor, esp = 0.3) => { pdf.setDrawColor(cor); pdf.setLineWidth(esp); pdf.line(x1, y, x2, y); };

  function novaPagina() { if (ctx.primeira) ctx.primeira = false; else pdf.addPage(); }
  function cabecalho(rotulo, extraPaciente) {
    let y = 12;
    if (rotulo) { fonte("Garamond", "normal", 9.5, RXP_COR.marrom); pdf.splitTextToSize(rotulo, 180).forEach(l => { pdf.text(l, 15, y); y += 4; }); }
    fonte("Baskerville", "normal", RXP.lm.tam, RXP_COR.rose); centro(tim.monograma || "", RXP.lm.y);
    fonte("Baskerville", "normal", RXP.nome.tam, RXP_COR.marrom); centro(rxEspacar(tim.nomeTimbrado), RXP.nome.y);
    fonte("Montserrat", "normal", RXP.prof.tam, "#000000"); const prof = rxEspacar(tim.profissao); centro(prof, RXP.prof.y);
    const wp = pdf.getTextWidth(prof); linha(W / 2 - wp / 2, RXP.prof.sub, W / 2 + wp / 2, "#000000", 0.18);
    fonte("Montserrat", "normal", RXP.crm.tam, RXP_COR.marrom2); centro(rxEspacar([tim.crm, tim.rqe ? `RQE ${tim.rqe}` : ""].filter(Boolean).join("  ·  ")), RXP.crm.y);
    /* Linha do paciente e data */
    fonte("Garamond", "normal", RXP.pac.tam, RXP_COR.marrom2);
    pdf.text(`Paciente: ${est.paciente || ""}`, RXP.pac.x, RXP.pac.y, { maxWidth: 125 });
    const dt = `Data: ${rxDataBR(est.data) || "____/____/______"}`;
    pdf.text(dt, RXP.pac.xd - pdf.getTextWidth(dt), RXP.pac.y);
    linha(RXP.regua.x1, RXP.regua.y, RXP.regua.x2, RXP_COR.linha, 0.25);
    let yb = RXP.regua.y;
    if (extraPaciente && extraPaciente.length) {
      fonte("Garamond", "normal", 11, RXP_COR.marrom2);
      for (const l of extraPaciente) { yb += 5.5; pdf.text(l, RXP.pac.x, yb, { maxWidth: 180 }); }
      yb += 2; linha(RXP.regua.x1, yb, RXP.regua.x2, RXP_COR.linha, 0.15);
    }
    return yb + 9;
  }
  function rodape() {
    const partes = [tim.telefone, tim.email, tim.cidade].filter(Boolean);
    if (!partes.length && !tim.endereco) return;
    linha(RXP.rod.x1, RXP.rod.linhaY, RXP.rod.x2, RXP_COR.linha, 0.25);
    fonte("Montserrat", "normal", RXP.rod.tam, RXP_COR.rodape);
    if (partes.length) centro(partes.join("     |     "), RXP.rod.y);
    if (tim.endereco) centro(tim.endereco, RXP.rod.y + (partes.length ? 4 : 0));
  }
  function assinatura(y, digital) {
    const cx = RXP.ass.cx, c = t => pdf.text(t, cx - pdf.getTextWidth(t) / 2, pdf.__y);
    linha(RXP.ass.x1, y, RXP.ass.x2, RXP_COR.assinatura, 0.17);
    if (digital) { fonte("Montserrat", "normal", 6.5, RXP_COR.cinza); pdf.__y = y - 1.5; c("Assinado digitalmente (ICP-Brasil)"); }
    fonte("Garamond", "italic", 13, RXP_COR.marrom2); pdf.__y = y + 8.6; c(tim.nomeCompleto || tim.nomeTimbrado || "");
    fonte("Garamond", "normal", 9.5, RXP_COR.marrom2); pdf.__y = y + 13.75; c(tim.profissao || "");
    fonte("Garamond", "normal", 9, RXP_COR.marrom2); pdf.__y = y + 18; c([tim.crm, tim.rqe ? `RQE ${tim.rqe}` : ""].filter(Boolean).join(" · "));
  }

  /* Blocos do corpo: medem e desenham, com quebra de página. */
  function blocos(d, extenso) {
    const B = [];
    if (d.tipo === "exames") {
      B.push({ t: "via", txt: "SOLICITAÇÃO DE EXAMES" });
      d.itens.forEach((i, k) => B.push({ t: "item", n: k + 1, nome: i.nome, qtd: "", pos: "" }));
      if (est.hd || est.cid) B.push({ t: "par", tit: "Hipótese diagnóstica", txt: `${est.hd || ""}${est.cid ? `${est.hd ? " — " : ""}CID-10 ${est.cid}` : ""}` });
      if (est.justificativa) B.push({ t: "par", tit: "Justificativa / dados clínicos", txt: est.justificativa });
    } else {
      let via = null;
      d.itens.forEach((i, k) => {
        if (i.via !== via) { via = i.via; B.push({ t: "via", txt: via }); }
        B.push({ t: "item", n: k + 1, nome: i.nome, qtd: rxQuantidadeTexto(i, extenso), pos: i.posologia });
      });
    }
    if (est.orientacoes) B.push({ t: "par", tit: "Orientações", txt: est.orientacoes });
    return B;
  }
  function medir(b) {
    if (b.t === "via") return 8;
    if (b.t === "par") { fonte("Garamond", "normal", 11.5); return 6 + pdf.splitTextToSize(b.txt, 145).length * 5 + 3; }
    fonte("Garamond", "normal", 12); const wq = b.qtd ? pdf.getTextWidth(b.qtd) + 8 : 0;
    b._nome = pdf.splitTextToSize(b.nome, 140 - wq);
    fonte("Garamond", "normal", 11.5); b._pos = b.pos ? pdf.splitTextToSize(b.pos, 136) : [];
    return b._nome.length * 5.5 + b._pos.length * 5 + 4;
  }
  function desenhar(b, y) {
    if (b.t === "via") { fonte("Garamond", "bold", 12, RXP_COR.marrom2); pdf.text(b.txt, 30, y); return y + 8; }
    if (b.t === "par") {
      fonte("Montserrat", "bold", 8.5, RXP_COR.marrom); pdf.text(b.tit.toUpperCase(), 30, y); y += 5.5;
      fonte("Garamond", "normal", 11.5, RXP_COR.texto); pdf.splitTextToSize(b.txt, 145).forEach(l => { pdf.text(l, 30, y); y += 5; });
      return y + 3;
    }
    fonte("Garamond", "normal", 12, RXP_COR.texto);
    pdf.text(`${b.n}.`, 34, y);
    b._nome.forEach((l, i) => pdf.text(l, 40, y + i * 5.5));
    if (b.qtd) {
      const wq = pdf.getTextWidth(b.qtd), yq = y + (b._nome.length - 1) * 5.5;
      const fimNome = 40 + pdf.getTextWidth(b._nome[b._nome.length - 1]) + 2;
      pdf.text(b.qtd, 180 - wq, yq);
      pdf.setDrawColor(RXP_COR.linha); pdf.setLineWidth(0.25); pdf.setLineDashPattern([0.4, 1.2], 0);
      if (180 - wq - 2 > fimNome) pdf.line(fimNome, yq, 180 - wq - 2, yq);
      pdf.setLineDashPattern([], 0);
    }
    y += b._nome.length * 5.5;
    fonte("Garamond", "normal", 11.5, RXP_COR.texto);
    b._pos.forEach(l => { pdf.text(l, 40, y); y += 5; });
    return y + 4;
  }

  function documento(d, rotulo, opc = {}) {
    const extra = [];
    if (opc.endereco) extra.push(`Endereço: ${est.endereco || "_______________________________________________"}`);
    if (opc.idadeSexo) extra.push(`Idade: ${est.idade || "_____"}     Sexo: ${est.sexo === "F" ? "feminino" : est.sexo === "M" ? "masculino" : "_____"}${est.documento ? `     Documento: ${est.documento}` : ""}`);
    else if (opc.documento && est.documento) extra.push(`Documento: ${est.documento}`);
    const limite = opc.caixas ? 168 : 228;
    novaPagina(); let y = cabecalho(rotulo, extra);
    for (const b of blocos(d, opc.extenso)) {
      const h = medir(b);
      if (y + h > limite) { rodape(); novaPagina(); y = cabecalho(rotulo ? rotulo + " (continuação)" : "(continuação)", extra); }
      y = desenhar(b, y);
    }
    const yFixo = opc.caixas ? 158 : RXP.ass.y;
    let ys = Math.max(y + 12, yFixo);
    if (ys > yFixo + 0.1) { rodape(); novaPagina(); cabecalho(rotulo ? rotulo + " (continuação)" : "", extra); ys = yFixo; }
    assinatura(ys, opc.digital);
    if (opc.validade) { fonte("Montserrat", "normal", 7.5, RXP_COR.cinza); pdf.text(opc.validade, 30, ys + 22); }
    if (opc.caixas) caixas();
    rodape();
  }
  function caixas() {
    /* Identificação do comprador e do fornecedor (Portaria 344/1998). */
    const x = 18, w = 174; let y = 186;
    pdf.setDrawColor(RXP_COR.marrom); pdf.setLineWidth(0.3); pdf.rect(x, y, w, 46);
    fonte("Garamond", "bold", 9.5, RXP_COR.marrom); centro("IDENTIFICAÇÃO DO COMPRADOR", y + 5);
    linha(x, y + 7, x + w, RXP_COR.marrom, 0.2);
    fonte("Garamond", "normal", 9.5, RXP_COR.marrom);
    const lin = [["Nome:"], ["Identidade:", "Órgão emissor:"], ["Endereço:", "Telefone:"], ["Cidade:", "UF:"]];
    lin.forEach((l, i) => { const yy = y + 13 + i * 9; pdf.text(l[0], x + 2, yy); if (l[1]) pdf.text(l[1], x + 105, yy); if (i < 3) linha(x, yy + 3.5, x + w, RXP_COR.linha, 0.15); });
    y = 240;
    fonte("Garamond", "bold", 9.5, RXP_COR.marrom); pdf.text("IDENTIFICAÇÃO DO FORNECEDOR", x, y);
    linha(x, y + 17, x + 70, RXP_COR.assinatura, 0.3); fonte("Garamond", "normal", 9.5, RXP_COR.marrom); pdf.text("Assinatura do farmacêutico", x + 12, y + 21.5);
    pdf.text("Data de fornecimento: ____/____/______", x + 100, y + 17);
  }
  function roteiro(d, nomeNotif) {
    novaPagina();
    let y = 20;
    fonte("Montserrat", "bold", 12, RXP_COR.marrom); pdf.text(`Roteiro de preenchimento — ${nomeNotif}`, 18, y); y += 7;
    fonte("Montserrat", "normal", 8.5, RXP_COR.cinza);
    pdf.splitTextToSize("Uso do(a) prescritor(a). Este roteiro NÃO é receita e não substitui a notificação: transcreva os dados à mão no talonário oficial numerado (Portaria SVS/MS 344/1998). Guarde ou descarte com segurança.", 174).forEach(l => { pdf.text(l, 18, y); y += 4.2; });
    y += 4;
    const campos = [["Paciente", est.paciente], ["Endereço", est.endereco], ["Data", rxDataBR(est.data)]];
    d.itens.forEach((i, k) => {
      const n = d.itens.length > 1 ? ` ${k + 1}` : "";
      campos.push([`Medicamento${n} (DCB, concentração e forma)`, i.nome], [`Quantidade${n} (algarismos e extenso)`, rxQuantidadeTexto(i, true)], [`Posologia${n}`, i.posologia], [`Tempo de tratamento${n}`, i.dias ? `${i.dias} dias` : ""]);
    });
    campos.push(["Prescritor", `${tim.nomeCompleto || ""} — ${tim.crm || ""}`], ["Endereço do prescritor", tim.endereco || tim.cidade || ""]);
    for (const [r, v] of campos) {
      fonte("Montserrat", "bold", 8, RXP_COR.marrom); pdf.text(r.toUpperCase(), 18, y); y += 4.5;
      fonte("Garamond", "normal", 11.5, RXP_COR.texto); const ls = pdf.splitTextToSize(v || "—", 174); ls.forEach(l => { pdf.text(l, 18, y); y += 5; });
      linha(18, y - 2.5, 192, RXP_COR.assinatura, 0.15); y += 2.5;
      if (y > 275) { novaPagina(); y = 20; }
    }
  }

  /* Documento de texto livre (atestado, declaração, encaminhamento...) no timbrado. */
  if (est.documentoLivre) {
    const { titulo, corpo } = est.documentoLivre;
    const C = RXP.corpo;
    novaPagina(); cabecalho("", []);
    if (titulo) { fonte("Garamond", "normal", 12, RXP_COR.marrom2); centro(titulo, RXP.titulo.y); }
    let y = titulo ? C.y : RXP.titulo.y;
    const quebra = () => { if (y > 266) { rodape(); novaPagina(); cabecalho("(continuação)", []); y = RXP.titulo.y; } };
    let vazio = false;
    for (const bruta of String(corpo || "").replace(/\n{3,}/g, "\n\n").trim().split("\n")) {
      /* Como no Word: cada linha é um parágrafo com espaço depois; linha em branco = parágrafo vazio. */
      if (!bruta.trim()) { if (!vazio) y += C.passo; vazio = true; continue; }
      vazio = false;
      const titLinha = bruta === bruta.toUpperCase() && /[A-ZÁÉÍÓÚÇ]{3}/.test(bruta) && bruta.length < 70;
      fonte("Garamond", titLinha ? "bold" : "normal", C.tam, titLinha ? RXP_COR.marrom2 : RXP_COR.texto);
      const recuo = (bruta.match(/^\s*/)[0].length ? 5 : 0);
      for (const l of pdf.splitTextToSize(bruta.trim(), C.larg - recuo)) { quebra(); pdf.text(l, C.x + recuo, y); y += C.passo; }
      y += C.paragrafo;
    }
    /* Assinatura sempre no mesmo lugar do modelo; se o texto passar, vai para a página seguinte. */
    if (y > RXP.ass.y - 12) { rodape(); novaPagina(); cabecalho("(continuação)", []); }
    assinatura(RXP.ass.y);
    rodape();
    return pdf;
  }
  const docs = rxDocumentos(est.itens, est.tipo);
  for (const d of docs) {
    if (d.tipo === "simples") documento(d, "", {});
    else if (d.tipo === "exames") documento(d, "", { documento: true });
    else if (d.tipo === "digital") documento(d, "PRESCRIÇÃO ELETRÔNICA — válida com assinatura digital qualificada (ICP-Brasil). Verificação da assinatura: validar.iti.gov.br", { digital: true, documento: true, endereco: !!est.endereco, idadeSexo: d.antimicrobiano || docs.some(x => x.antimicrobiano) || est.itens.some(i => rxTipoItem(i).antimicrobiano), extenso: true });
    else if (d.tipo === "especial") {
      const val = d.antimicrobiano ? "Validade: 10 dias a partir da data de emissão (antimicrobiano — RDC 471/2021)." : "Validade: 30 dias a partir da data de emissão.";
      ["1ª VIA — RETENÇÃO DA FARMÁCIA OU DROGARIA", "2ª VIA — ORIENTAÇÃO AO PACIENTE"].forEach(v =>
        documento(d, `RECEITUÁRIO DE CONTROLE ESPECIAL · ${v}`, { endereco: true, idadeSexo: d.antimicrobiano, extenso: true, caixas: true, validade: val }));
    } else if (d.tipo === "azul" || d.tipo === "amarela") {
      const nome = d.tipo === "azul" ? "Notificação de Receita B (azul)" : "Notificação de Receita A (amarela)";
      documento(d, `VIA DE ORIENTAÇÃO AO PACIENTE — acompanha a ${nome} nº __________. Não é válida sozinha para dispensação.`, { endereco: true, extenso: true });
      roteiro(d, nome);
    }
  }
  if (!docs.length) { novaPagina(); cabecalho("", []); rodape(); }
  return pdf;
}

async function rxPreVisualizar(pdf, $alvo) {
  const pdfjs = await vzCarregarPdfjs();
  const dados = pdf.output("arraybuffer");
  const doc = await pdfjs.getDocument({ data: new Uint8Array(dados) }).promise;
  const largura = Math.min($alvo.clientWidth || 600, 820), dpr = Math.min(window.devicePixelRatio || 1, 2);
  const frag = document.createDocumentFragment();
  for (let p = 1; p <= doc.numPages; p++) {
    const pg = await doc.getPage(p);
    const v0 = pg.getViewport({ scale: 1 }), esc2 = largura / v0.width, v = pg.getViewport({ scale: esc2 * dpr });
    const c = document.createElement("canvas"); c.width = v.width; c.height = v.height; c.style.width = "100%"; c.className = "rx-pagina";
    c.setAttribute("aria-label", `Página ${p} de ${doc.numPages}`); c.setAttribute("role", "img");
    await pg.render({ canvasContext: c.getContext("2d"), viewport: v }).promise;
    frag.appendChild(c);
  }
  $alvo.replaceChildren(frag);
  return doc.numPages;
}
