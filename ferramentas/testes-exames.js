// Testes do motor da aba Exames com laudos SINTÉTICOS (nenhum dado real de paciente).
// Chamado por validar-exames.js; devolve o número de falhas.
const path = require("path");
module.exports = function testes(ids) {
  const m = require(path.join(__dirname, "..", "js/exames/motor.js"));
  let falhas = 0, total = 0;
  const ok = (cond, nome, extra = "") => { total++; if (!cond) { falhas++; console.log(`✗ teste: ${nome}${extra ? " — " + extra : ""}`); } };
  const ler = (t, ctx) => Object.fromEntries(m.exLerLaudo(t, ctx).map(r => [r.e.id, r]));

  /* 1. Hemograma em tabela com referência impressa */
  const h = ler(`HEMOGRAMA
Hemoglobina ........ 9,1 g/dL       12,0 a 15,5
Hematócrito ........ 28,4 %         36,0 a 46,0
VCM ................ 71 fL          80 a 100
Leucócitos ......... 13.800 /mm³    4.000 a 11.000
Bastões ............ 8 %
Segmentados ........ 82 %   11.316 /mm³
Plaquetas .......... 412 mil/mm³    150 a 450 mil
Ferritina: 6 ng/mL (15 a 150)`, { idadeAnos: 34, sexo: "F" });
  ok(h.hemoglobina && Math.abs(h.hemoglobina.valor - 9.1) < 1e-9 && h.hemoglobina.status === "baixo", "Hb 9,1 baixa", JSON.stringify(h.hemoglobina && [h.hemoglobina.valor, h.hemoglobina.status]));
  ok(h.hemoglobina && h.hemoglobina.refFonte === "laudo", "referência lida do laudo");
  ok(h.vcm && h.vcm.valor === 71 && h.vcm.status === "baixo", "VCM 71 baixo");
  ok(h.leucocitos && h.leucocitos.valor === 13800 && h.leucocitos.status === "alto", "leucócitos 13.800", JSON.stringify(h.leucocitos && h.leucocitos.valor));
  ok(h.plaquetas && h.plaquetas.valor === 412000 && h.plaquetas.status === "normal", "plaquetas 412 mil", JSON.stringify(h.plaquetas && [h.plaquetas.valor, h.plaquetas.status]));
  ok(h.ferritina && h.ferritina.status === "baixo", "ferritina baixa");
  const ph = m.exPadroes(Object.values(h), { idadeAnos: 34, sexo: "F" }).map(p => p.titulo);
  ok(ph.includes("Anemia"), "padrão anemia", ph.join(" | "));
  ok(ph.some(t => /Leucocitose/.test(t)), "padrão leucocitose");

  /* 2. Bioquímica em linha, sem referência (usa catálogo), unidades convertidas */
  const b = ler(`Creatinina: 2,4 mg/dL  Ureia: 130 mg/dL  Potássio: 6,8 mEq/L  Sódio 128 mEq/L
TGO 420 U/L  TGP 610 U/L  Fosfatase alcalina 110 U/L
Glicemia de jejum: 7,8 mmol/L`, { idadeAnos: 60, sexo: "M" });
  ok(b.creatinina && b.creatinina.valor === 2.4 && b.creatinina.status === "alto" && b.creatinina.refFonte === "catálogo", "creatinina 2,4 alta (catálogo)");
  ok(b.potassio && /critico-alto/.test(b.potassio.status), "K 6,8 crítico", b.potassio && b.potassio.status);
  ok(b.sodio && b.sodio.status === "baixo", "Na 128 baixo");
  ok(b["glicemia-jejum"] && Math.round(b["glicemia-jejum"].valor) === 141, "glicemia mmol/L → mg/dL", b["glicemia-jejum"] && String(b["glicemia-jejum"].valor));
  const pb = m.exPadroes(Object.values(b), { idadeAnos: 60 });
  ok(pb.some(p => p.titulo === "Hipercalemia" && p.nivel === "critico"), "hipercalemia crítica");
  ok(pb.some(p => p.titulo === "Função renal alterada" && /pré-renal/.test(p.texto)), "relação ureia/creatinina > 40");
  ok(pb.some(p => p.titulo === "Alteração hepática" && /hepatocelular/.test(p.texto)), "padrão hepatocelular (fator R)", pb.map(p => p.titulo).join(" | "));

  /* 3. Gasometria com ânion gap */
  const g = ler(`pH 7,12  pCO2 22 mmHg  HCO3 7 mEq/L  Lactato 1,4 mmol/L
Na 136  Cl 100  Glicemia capilar 486 mg/dL`, {});
  const pg = m.exPadroes(Object.values(g), {});
  ok(g.ph && g.ph.valor === 7.12, "pH 7,12 lido", JSON.stringify(g.ph && g.ph.valor));
  ok(pg.some(p => p.titulo === "Acidose metabólica" && /AUMENTADO/.test(p.texto)), "acidose com AG aumentado", pg.map(p => p.titulo + ": " + p.texto).join(" | "));
  ok(pg.some(p => /Cetoacidose/.test(p.titulo)), "critério de CAD");

  /* 4. Sorologias qualitativas */
  const s = ler(`VDRL: REAGENTE 1:16
HIV 1/2 (teste rápido): NÃO REAGENTE
HBsAg: não reagente`, {});
  ok(s.vdrl && s.vdrl.qualitativo === "positivo" && s.vdrl.titulo === "1:16", "VDRL reagente 1:16", JSON.stringify(s.vdrl && [s.vdrl.qualitativo, s.vdrl.titulo]));
  ok(s.hiv && s.hiv.qualitativo === "negativo", "HIV não reagente");
  ok(s.hbsag && s.hbsag.qualitativo === "negativo", "HBsAg não reagente");

  /* 5. Referência pediátrica */
  const c = ler(`Hemoglobina 11,0 g/dL`, { idadeAnos: 6 });
  const a = ler(`Hemoglobina 11,0 g/dL`, { idadeAnos: 40, sexo: "M" });
  ok(c.hemoglobina && a.hemoglobina && c.hemoglobina.status !== a.hemoglobina.status || (c.hemoglobina && c.hemoglobina.ref !== a.hemoglobina.ref), "faixa da criança difere da do adulto");

  /* 6. Digitação manual */
  const d = m.exDeValores({ potassio: "2,9", tsh: "12" }, {});
  ok(d.length === 2 && d.find(r => r.e.id === "potassio").status === "baixo", "valores digitados");

  /* 7. Laudos de imagem (se o catálogo de imagem existir) */
  if (EXAMES_IMAGEM.length) {
    const r = m.exAchadosImagem(`TOMOGRAFIA COMPUTADORIZADA DE CRÂNIO SEM CONTRASTE. Achados: hematoma subdural agudo frontoparietal esquerdo. Desvio da linha média de 6 mm. Não há sinais de fratura. Sem hemorragia subaracnoidea.`);
    ok(r.exameDoLaudo && r.exameDoLaudo.id === "tc-cranio", "laudo identificado como TC de crânio", r.exameDoLaudo && r.exameDoLaudo.id);
    ok(r.achados.some(x => !x.negado && /subdural/.test(x.termo) && x.achado.urgente), "hematoma subdural urgente", r.achados.map(x => x.termo + (x.negado ? "(neg)" : "")).join(", "));
    ok(!r.achados.some(x => !x.negado && /subaracn/.test(x.termo)), "HSA negada não aparece como achado");
    const t = m.exAchadosImagem(`RADIOGRAFIA DE TÓRAX PA E PERFIL. Consolidação no lobo inferior direito com broncograma aéreo. Seios costofrênicos livres. Sem derrame pleural.`);
    ok(t.achados.some(x => !x.negado && (x.achado.fichas || []).some(f => /pneumonia/.test(f))), "RX: consolidação → pneumonia", t.achados.map(x => x.termo + (x.negado ? "(neg)" : "")).join(", "));
    ok(!t.achados.some(x => !x.negado && /derrame pleural/.test(x.termo)), "RX: derrame negado");
    ok(m.exPareceImagem("Impressão diagnóstica: colelitíase"), "reconhece laudo de imagem");
    const u = m.exAchadosImagem(`ULTRASSONOGRAFIA DE ABDOME TOTAL. Vesícula biliar com paredes espessadas (5 mm), cálculos e sinal de Murphy ultrassonográfico positivo. Vias biliares não dilatadas.`);
    ok(u.achados.some(x => !x.negado && (x.achado.fichas || []).includes("colecistite-colangite")), "USG: colecistite", u.achados.map(x => x.termo).join(", "));
    const v = m.exAchadosImagem(`ULTRASSONOGRAFIA DE ABDOME TOTAL. Vesícula biliar com múltiplos cálculos, paredes finas. Sem dilatação de vias biliares.`);
    ok(v.exameDoLaudo && v.exameDoLaudo.id === "usg-abdome-total" && v.achados.some(x => !x.negado && /calculo/.test(x.achado.significado.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))), "USG: colelitíase", v.achados.map(x => x.termo).join(", "));
    const n = m.exAchadosImagem(`TC DE TÓRAX: nódulo sólido de 7 mm no lobo superior direito.`);
    ok(n.exameDoLaudo && n.exameDoLaudo.id === "tc-torax" && n.achados.filter(x => !x.negado).length === 1, "TC tórax: um achado, sem duplicar 'nódulo'", n.achados.map(x => x.termo + "[" + x.exame.id + "]").join(", "));
    /* fichas citadas existem */
    for (const e of EXAMES_IMAGEM) for (const ac of e.achados || []) for (const f of ac.fichas || []) if (!ids.has(f)) ok(false, `ficha ${f} em ${e.id}`);
  }
  console.log(`Testes do motor: ${total - falhas}/${total}`);
  return falhas;
};
