/* Receituário — PDF no timbrado da médica (jsPDF, no próprio aparelho) e pré-visualização (pdf.js).
   O fundo da página é o próprio modelo enviado pela médica (img/timbrado/*.png: receituário simples e
   controle especial), sem alterar estrutura, dados ou escrita; o sistema só escreve nos campos:
   Paciente, Data, via (USO ORAL, USO TÓPICO...), título do documento, itens e identificação do comprador.
   Fonte dos campos: EB Garamond (equivalente livre do Garamond do modelo) e Helvetica (métrica do Arial). */

const RXP_COR = { campo: "#4F5B55", texto: "#000000", cinza: "#6B7570" };
/* Medidas em mm, tiradas do modelo (A4). */
const RXM = {
  simples: { img: "img/timbrado/receita.png", pacY: 60.05, viaY: 72.9, limite: 236, assY: 245.7 },
  especial: { img: "img/timbrado/controle-especial.png", pacY: 68.05, viaY: 81.3, limite: 186, assY: 195.6 },
  pacX: 38.5, pacMax: 104, dataX: 157.0, viaX: 30.0, tamCampo: 12, tamVia: 10.7
};
const RX_URL = p => new URL(p, document.baseURI).href;
const RX_FONTES = [
  ["EBGaramond_400Regular.ttf", "Garamond", "normal"], ["EBGaramond_400Regular_Italic.ttf", "Garamond", "italic"], ["EBGaramond_600SemiBold.ttf", "Garamond", "bold"]
];
let rxJsPdf = null, rxFontesB64 = null, rxFundos = {};

function rxCarregarScript(src) {
  return new Promise((ok, falha) => {
    if (document.querySelector(`script[data-rx="${src}"]`)) return ok();
    const s = document.createElement("script"); s.src = RX_URL(src); s.dataset.rx = src; s.onload = ok; s.onerror = () => falha(new Error("Não foi possível carregar " + src)); document.head.appendChild(s);
  });
}
const rxB64 = buf => { let bin = ""; for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000)); return btoa(bin); };
async function rxCarregar() {
  if (!rxJsPdf) { await rxCarregarScript("vendor/jspdf/jspdf.umd.min.js"); rxJsPdf = window.jspdf.jsPDF; }
  if (!rxFontesB64) rxFontesB64 = await Promise.all(RX_FONTES.map(async ([arq]) => rxB64(new Uint8Array(await (await fetch(RX_URL("vendor/fontes/" + arq))).arrayBuffer()))));
  for (const k of ["simples", "especial"]) if (!rxFundos[k]) rxFundos[k] = "data:image/png;base64," + rxB64(new Uint8Array(await (await fetch(RX_URL(RXM[k].img))).arrayBuffer()));
  return rxJsPdf;
}

const RX_TROCAS = { "≥": ">=", "≤": "<=", "→": "->", "←": "<-", "↑": "(elevado)", "↓": "(reduzido)", "β": "beta", "Δ": "delta", "≈": "~", "≠": "diferente de", "∞": "infinito", "✓": "OK", "μ": "µ",
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "™": "", "\u00a0": " " };
const rxSanear = t => String(t).replace(/[≥≤→←↑↓βΔ≈≠∞✓μ₀₁₂₃₄™\u00a0]/g, c => RX_TROCAS[c]);
const rxDataBR = iso => iso ? iso.split("-").reverse().join("/") : "";

async function rxGerarPdf(est, tim) {
  const JsPDF = await rxCarregar();
  const pdf = new JsPDF({ unit: "mm", format: "a4", compress: true });
  RX_FONTES.forEach(([arq, fam, est2], i) => { pdf.addFileToVFS(arq, rxFontesB64[i]); pdf.addFont(arq, fam, est2); });
  /* Símbolos que as fontes não têm viram texto equivalente (senão somem no PDF). */
  const _text = pdf.text.bind(pdf), _split = pdf.splitTextToSize.bind(pdf), _w = pdf.getTextWidth.bind(pdf);
  const san = t => typeof t === "string" ? rxSanear(t) : Array.isArray(t) ? t.map(rxSanear) : t;
  pdf.text = (t, ...r) => _text(san(t), ...r);
  pdf.splitTextToSize = (t, ...r) => _split(san(t), ...r);
  pdf.getTextWidth = t => _w(san(t));
  pdf.setProperties({ title: est.documentoLivre ? (est.documentoLivre.titulo || "Documento") : est.tipo === "exames" ? "Solicitação de exames" : "Receita", creator: "Licia Minatti · Prontuário de Bolso" });
  const W = 210, ctx = { primeira: true };
  const fonte = (fam, estilo, tam, cor) => { pdf.setFont(fam, estilo); pdf.setFontSize(tam); pdf.setTextColor(cor || RXP_COR.texto); };
  const centro = (txt, y) => pdf.text(txt, W / 2 - pdf.getTextWidth(txt) / 2, y);
  /* Escreve num campo do modelo, reduzindo a letra se não couber. */
  const campo = (txt, x, y, larg, fam = "Garamond", tam = RXM.tamCampo) => {
    if (!txt) return; let t = tam; fonte(fam, "normal", t, RXP_COR.campo);
    while (pdf.getTextWidth(txt) > larg && t > 6.5) { t -= 0.5; pdf.setFontSize(t); }
    pdf.text(txt, x, y);
  };

  /* Página no modelo: fundo + Paciente + Data (+ rótulo no topo, quando houver). */
  function pagina(modelo, rotulo, opc = {}) {
    if (ctx.primeira) ctx.primeira = false; else pdf.addPage();
    const M = RXM[modelo];
    pdf.addImage(rxFundos[modelo], "PNG", 0, 0, 210, 297, "fundo-" + modelo, "FAST");
    if (opc.segundaVia) {
      pdf.setFillColor(255, 255, 255); pdf.rect(30, 7.6, 150, 9.2, "F");
      fonte("helvetica", "normal", RXM.tamVia, RXP_COR.campo);
      centro("RECEITUARIO DE CONTROLE ESPECIAL 2 VIA- ORIENTACAO AO", 11.4); centro("PACIENTE", 15.5);
    } else if (rotulo) {
      fonte("helvetica", "normal", 7.5, RXP_COR.cinza);
      pdf.splitTextToSize(rotulo, 180).slice(0, 2).forEach((l, i) => centro(l, 5 + i * 3.4));
    }
    let pac = est.paciente || "";
    if (opc.idadeSexo && (est.idade || est.sexo)) pac += `${pac ? ", " : ""}${est.idade ? est.idade + " anos" : ""}${est.idade && est.sexo ? ", " : ""}${est.sexo === "F" ? "feminino" : est.sexo === "M" ? "masculino" : ""}`;
    campo(pac, RXM.pacX, M.pacY, RXM.pacMax);
    campo(rxDataBR(est.data), RXM.dataX, M.pacY, 30);
    if (opc.digital) { fonte("helvetica", "normal", 6.5, RXP_COR.cinza); const t = "Assinado digitalmente (ICP-Brasil)"; pdf.text(t, 160 - pdf.getTextWidth(t) / 2, M.assY - 1.5); }
    return M;
  }
  /* Rótulo no lugar de "USO ORAL:" do modelo (mesma letra); títulos centralizados. */
  const rotuloVia = (txt, y, centralizado) => { fonte("helvetica", "normal", RXM.tamVia, RXP_COR.campo); const t = centralizado ? txt : `${txt}:`; if (centralizado) centro(t, y); else pdf.text(t, RXM.viaX, y); };

  /* Blocos do corpo da receita: medem e desenham, com quebra de página. */
  function blocos(d, extenso) {
    const B = [];
    if (d.tipo === "exames") {
      d.itens.forEach((i, k) => B.push({ t: "item", n: k + 1, nome: i.nome, qtd: "", pos: "" }));
      if (est.hd || est.cid) B.push({ t: "par", tit: "Hipótese diagnóstica", txt: `${est.hd || ""}${est.cid ? `${est.hd ? " — " : ""}CID-10 ${est.cid}` : ""}` });
      if (est.justificativa) B.push({ t: "par", tit: "Justificativa / dados clínicos", txt: est.justificativa });
    } else {
      let via = null;
      d.itens.forEach((i, k) => {
        if (i.via !== via) { B.push({ t: "via", txt: i.via, primeira: via === null }); via = i.via; }
        B.push({ t: "item", n: k + 1, nome: i.nome, qtd: rxQuantidadeTexto(i, extenso), pos: i.posologia });
      });
    }
    if (est.orientacoes) B.push({ t: "par", tit: "Orientações", txt: est.orientacoes });
    return B;
  }
  function medir(b) {
    if (b.t === "via") return b.primeira ? 0 : 9;
    if (b.t === "par") { fonte("Garamond", "normal", 12); return 6 + pdf.splitTextToSize(b.txt, 148).length * 5.2 + 3; }
    fonte("Garamond", "normal", 12); const wq = b.qtd ? pdf.getTextWidth(b.qtd) + 8 : 0;
    b._nome = pdf.splitTextToSize(b.nome, 140 - wq);
    b._pos = b.pos ? pdf.splitTextToSize(b.pos, 136) : [];
    return b._nome.length * 5.5 + b._pos.length * 5.2 + 4;
  }
  function desenhar(b, y) {
    if (b.t === "via") { if (b.primeira) return y; rotuloVia(b.txt, y + 2); return y + 9; }
    if (b.t === "par") {
      fonte("helvetica", "normal", 9, RXP_COR.campo); pdf.text(`${b.tit}:`, RXM.viaX, y); y += 5.5;
      fonte("Garamond", "normal", 12, RXP_COR.texto); pdf.splitTextToSize(b.txt, 148).forEach(l => { pdf.text(l, RXM.viaX, y); y += 5.2; });
      return y + 3;
    }
    fonte("Garamond", "normal", 12, RXP_COR.texto);
    pdf.text(`${b.n}.`, 34, y);
    b._nome.forEach((l, i) => pdf.text(l, 40, y + i * 5.5));
    if (b.qtd) {
      const wq = pdf.getTextWidth(b.qtd), yq = y + (b._nome.length - 1) * 5.5;
      const fimNome = 40 + pdf.getTextWidth(b._nome[b._nome.length - 1]) + 2;
      pdf.text(b.qtd, 180 - wq, yq);
      pdf.setDrawColor(RXP_COR.cinza); pdf.setLineWidth(0.2); pdf.setLineDashPattern([0.4, 1.2], 0);
      if (180 - wq - 2 > fimNome) pdf.line(fimNome, yq, 180 - wq - 2, yq);
      pdf.setLineDashPattern([], 0);
    }
    y += b._nome.length * 5.5;
    b._pos.forEach(l => { pdf.text(l, 40, y); y += 5.2; });
    return y + 4;
  }

  function documento(d, modelo, rotulo, opc = {}) {
    let M = pagina(modelo, rotulo, opc);
    const B = blocos(d, opc.extenso);
    const titulo = d.tipo === "exames" ? "SOLICITAÇÃO DE EXAMES" : null;
    if (titulo) rotuloVia(titulo, M.viaY, true);
    else rotuloVia((B.find(b => b.t === "via") || { txt: "USO ORAL" }).txt, M.viaY);
    let y = M.viaY + (titulo ? 10 : 8.5);
    for (const b of B) {
      const h = medir(b);
      if (y + h > M.limite) { M = pagina(modelo, rotulo, opc); y = M.viaY + 2; }
      y = desenhar(b, y);
    }
    if (modelo === "especial" && est.compradorPaciente !== false) comprador();
  }
  /* Quadro "Identificação do comprador" do modelo, com os dados do paciente. */
  function comprador() {
    const f = (t, x, y, l) => campo(t, x, y, l, "helvetica", 10);
    f(est.paciente, 45, 225.2, 133);
    f(est.documento, 51.5, 231.0, 44); f(est.orgao, 124, 231.0, 54);
    f(est.endereco, 41.5, 236.8, 51); f(est.telefone, 111, 236.8, 67);
    f(est.cidade, 46, 242.5, 49); f(est.uf, 106, 242.5, 20);
  }
  function roteiro(d, nomeNotif) {
    pdf.addPage();
    let y = 20;
    fonte("helvetica", "bold", 12, RXP_COR.campo); pdf.text(`Roteiro de preenchimento — ${nomeNotif}`, 18, y); y += 7;
    fonte("helvetica", "normal", 8.5, RXP_COR.cinza);
    pdf.splitTextToSize("Uso do(a) prescritor(a). Este roteiro NÃO é receita e não substitui a notificação: transcreva os dados à mão no talonário oficial numerado (Portaria SVS/MS 344/1998). Guarde ou descarte com segurança.", 174).forEach(l => { pdf.text(l, 18, y); y += 4.2; });
    y += 4;
    const campos = [["Paciente", est.paciente], ["Endereço", est.endereco], ["Data", rxDataBR(est.data)]];
    d.itens.forEach((i, k) => {
      const n = d.itens.length > 1 ? ` ${k + 1}` : "";
      campos.push([`Medicamento${n} (DCB, concentração e forma)`, i.nome], [`Quantidade${n} (algarismos e extenso)`, rxQuantidadeTexto(i, true)], [`Posologia${n}`, i.posologia], [`Tempo de tratamento${n}`, i.dias ? `${i.dias} dias` : ""]);
    });
    campos.push(["Prescritor", `${tim.nomeCompleto || ""} — ${tim.crm || ""}`]);
    for (const [r, v] of campos) {
      fonte("helvetica", "bold", 8, RXP_COR.campo); pdf.text(r.toUpperCase(), 18, y); y += 4.5;
      fonte("Garamond", "normal", 12, RXP_COR.texto); pdf.splitTextToSize(v || "—", 174).forEach(l => { pdf.text(l, 18, y); y += 5.2; });
      pdf.setDrawColor(220); pdf.setLineWidth(0.15); pdf.line(18, y - 2.5, 192, y - 2.5); y += 2.5;
      if (y > 275) { pdf.addPage(); y = 20; }
    }
  }

  /* Documento de texto (atestado, declaração, encaminhamento...): título centralizado no lugar de "USO ORAL:". */
  if (est.documentoLivre) {
    const { titulo, corpo } = est.documentoLivre;
    let M = pagina("simples", "");
    if (titulo) rotuloVia(titulo, M.viaY, true);
    let y = M.viaY + (titulo ? 12 : 2);
    const quebra = () => { if (y > M.limite) { M = pagina("simples", ""); y = M.viaY; } };
    let vazio = false;
    for (const bruta of String(corpo || "").replace(/\n{3,}/g, "\n\n").trim().split("\n")) {
      if (!bruta.trim()) { if (!vazio) y += 5.5; vazio = true; continue; }
      vazio = false;
      const titLinha = bruta === bruta.toUpperCase() && /[A-ZÁÉÍÓÚÇ]{3}/.test(bruta) && bruta.length < 70;
      fonte("Garamond", titLinha ? "bold" : "normal", 12, RXP_COR.texto);
      const recuo = (bruta.match(/^\s*/)[0].length ? 5 : 0);
      for (const l of pdf.splitTextToSize(bruta.trim(), 150 - recuo)) { quebra(); pdf.text(l, RXM.viaX + recuo, y); y += 5.5; }
      y += 1.7;
    }
    return pdf;
  }
  const docs = rxDocumentos(est.itens, est.tipo);
  const algumAtm = docs.some(x => x.antimicrobiano) || est.itens.some(i => rxTipoItem(i).antimicrobiano);
  for (const d of docs) {
    if (d.tipo === "simples" || d.tipo === "exames") documento(d, "simples", "", {});
    else if (d.tipo === "digital") documento(d, "simples", "PRESCRIÇÃO ELETRÔNICA — válida com assinatura digital qualificada (ICP-Brasil). Verificação: validar.iti.gov.br", { digital: true, idadeSexo: algumAtm, extenso: true });
    else if (d.tipo === "especial") {
      documento(d, "especial", "", { idadeSexo: d.antimicrobiano, extenso: true });
      documento(d, "especial", "", { idadeSexo: d.antimicrobiano, extenso: true, segundaVia: true });
    } else if (d.tipo === "azul" || d.tipo === "amarela") {
      const nome = d.tipo === "azul" ? "Notificação de Receita B (azul)" : "Notificação de Receita A (amarela)";
      documento(d, "simples", `VIA DE ORIENTAÇÃO AO PACIENTE — acompanha a ${nome} nº __________. Não é válida sozinha para dispensação.`, { extenso: true });
      roteiro(d, nome);
    }
  }
  if (!docs.length) pagina(est.tipo === "especial" ? "especial" : "simples", "");
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
