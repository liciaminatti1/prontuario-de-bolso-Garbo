/* Vaga Zero — cálculos puros (sem tela): dose, diluição e mL/h; autonomia de O₂;
   cânula traqueal; peso predito; faixas de sinais vitais por idade.
   Nada aqui presume dado ausente: sem a informação essencial, o cálculo é bloqueado. */

const vzMm = n => Number(n).toFixed(1).replace(".", ",");
const VZ_FMT = (n, casas = 2) => n === null || n === undefined || !isFinite(n) ? "—"
  : Number(n).toLocaleString("pt-BR", { maximumFractionDigits: casas, minimumFractionDigits: 0 });

/* ---------- unidades ---------- */
const VZ_FATOR_MASSA = { g: 1e6, mg: 1e3, mcg: 1 }; // em mcg
/* "mcg/kg/min" → { base: "mcg", kg: true, tempo: "min" } */
function vzUnidade(u) {
  const partes = String(u || "").split("/");
  const base = partes[0];
  return { base, kg: partes.includes("kg"), tempo: partes.includes("min") ? "min" : partes.includes("h") ? "h" : null, texto: u };
}
const vzDimensao = base => base in VZ_FATOR_MASSA ? "massa" : base; // massa | UI | mEq | mL
/* Converte valor de uma unidade-base para outra da mesma dimensão (mg → mcg etc.). */
function vzConverter(valor, de, para) {
  if (de === para) return valor;
  if (vzDimensao(de) === "massa" && vzDimensao(para) === "massa") return valor * VZ_FATOR_MASSA[de] / VZ_FATOR_MASSA[para];
  return null;
}

/* ---------- faixa etária ---------- */
/* idade em anos (aceita meses/dias). */
function vzIdadeAnos(idade, unidade) {
  const n = Number(String(idade ?? "").replace(",", "."));
  if (!isFinite(n) || idade === "" || idade === null || idade === undefined) return null;
  return unidade === "dias" ? n / 365.25 : unidade === "meses" ? n / 12 : n;
}
function vzPerfil(idadeAnos) {
  if (idadeAnos === null) return null;
  if (idadeAnos < 28 / 365.25) return "neonato";
  if (idadeAnos < 18) return "pediatrico";
  return "adulto";
}

/* Referência de sinais vitais (PALS/AHA 2020). pasMin: limite de hipotensão. */
function vzReferenciaSV(idadeAnos) {
  if (idadeAnos === null) return null;
  if (idadeAnos < 28 / 365.25) return { faixa: "Recém-nascido", fc: [100, 205], fr: [30, 60], pasMin: 60 };
  if (idadeAnos < 1) return { faixa: "Lactente", fc: [100, 180], fr: [30, 53], pasMin: 70 };
  if (idadeAnos < 3) return { faixa: "1 a 2 anos", fc: [98, 140], fr: [22, 37], pasMin: 70 + 2 * Math.floor(idadeAnos) };
  if (idadeAnos < 6) return { faixa: "3 a 5 anos", fc: [80, 120], fr: [20, 28], pasMin: 70 + 2 * Math.floor(idadeAnos) };
  if (idadeAnos < 12) return { faixa: "6 a 11 anos", fc: [75, 118], fr: [18, 25], pasMin: idadeAnos <= 10 ? 70 + 2 * Math.floor(idadeAnos) : 90 };
  if (idadeAnos < 18) return { faixa: "12 a 17 anos", fc: [60, 100], fr: [12, 20], pasMin: 90 };
  return { faixa: "Adulto", fc: [50, 100], fr: [12, 20], pasMin: 90 };
}

/* ---------- calculadora de dose ---------- */
/* entrada: { farmaco?, indicacao?, peso, idadeAnos, conc: {valor, unidade}, concConfirmada,
             dose: {valor, unidade}, bolusVolumeFinal?, infusao?: { quantidade, unidade, volumeFinal } } */
function vzCalcularDose(e) {
  const bloqueios = [], alertas = [], formulas = [];
  const r = {};
  const dose = e.dose || {};
  const du = vzUnidade(dose.unidade);
  const ind = e.indicacao || null;
  const modo = du.tempo ? "infusao" : "bolus";
  const perfil = vzPerfil(e.idadeAnos ?? null);
  const peso = Number(e.peso) > 0 ? Number(e.peso) : null;

  if (!(Number(dose.valor) > 0) || !dose.unidade) bloqueios.push("Informe a dose desejada e a unidade.");
  if (du.kg && !peso) bloqueios.push("Dose por kg: informe o peso atualizado do paciente (não estimar).");
  if (perfil === null) bloqueios.push("Informe a idade para conferir a faixa etária da dose.");
  if (perfil && perfil !== "adulto" && !peso) bloqueios.push("Criança e recém-nascido: o peso é obrigatório.");
  if (ind && perfil) {
    const ok = ind.faixa === "todas" || ind.faixa === perfil || (ind.faixa === "neonatal" && perfil === "neonato");
    if (!ok) bloqueios.push(`Esta indicação é para ${ind.faixa === "adulto" ? "adultos" : ind.faixa === "pediatrico" ? "crianças" : "recém-nascidos"}; o paciente é ${perfil === "adulto" ? "adulto" : perfil === "pediatrico" ? "criança" : "recém-nascido"}. Escolha a indicação da faixa correta.`);
  }
  if (perfil && perfil !== "adulto" && !du.kg && du.base !== "mL") alertas.push({ g: "grave", t: "Dose pediátrica/neonatal sem referência por kg: confira — não use dose de adulto em criança." });
  if (ind && ind.modo && ind.modo !== modo) alertas.push({ g: "atencao", t: `A indicação escolhida é de ${ind.modo === "bolus" ? "bolus" : "infusão contínua"}, mas a unidade informada é de ${modo === "bolus" ? "bolus" : "infusão"}.` });

  const precisaConc = du.base !== "mL";
  const conc = e.conc || {};
  const cu = String(conc.unidade || "").split("/")[0];
  if (precisaConc) {
    if (!(Number(conc.valor) > 0) || !conc.unidade) bloqueios.push("Informe a concentração da apresentação disponível (ex.: 1 mg/mL).");
    else if (!e.concConfirmada) bloqueios.push("Confirme a concentração no rótulo da ampola disponível antes de calcular volumes.");
    if (conc.unidade && du.base && vzDimensao(cu) !== vzDimensao(du.base)) bloqueios.push(`Unidades incompatíveis: dose em ${du.base} e concentração em ${conc.unidade}. Confira se não houve troca de unidade (mg, mcg, g, UI, mEq).`);
  }
  if (bloqueios.length) return { ok: false, bloqueios, alertas, formulas, resultado: null, modo };

  const valor = Number(dose.valor);
  const total = du.kg ? valor * peso : valor;            // na unidade-base da dose (por dose ou por tempo)
  r.dosePorKg = du.kg ? valor : (peso ? valor / peso : null);
  if (du.kg) formulas.push(`Dose = ${VZ_FMT(valor, 4)} ${dose.unidade} × ${VZ_FMT(peso, 2)} kg = ${VZ_FMT(total, 4)} ${du.base}${du.tempo ? "/" + du.tempo : ""}`);

  /* Faixa e máximo da indicação (comparados na mesma unidade). */
  if (ind && ind.dose) {
    const iu = vzUnidade(ind.dose.unidade);
    const porKgPac = du.kg ? valor : (peso ? valor / peso : null);
    let comparavel = null, min = ind.dose.min, max = ind.dose.max;
    if (iu.kg === du.kg && iu.tempo === du.tempo) comparavel = vzConverter(valor, du.base, iu.base);
    else if (iu.kg && !du.kg && peso && iu.tempo === du.tempo) comparavel = vzConverter(porKgPac, du.base, iu.base);
    else if (!iu.kg && du.kg && iu.tempo === du.tempo) comparavel = vzConverter(total, du.base, iu.base);
    if (comparavel !== null && iu.tempo !== du.tempo) comparavel = null;
    if (comparavel !== null) {
      if (comparavel > max * 1.0001 || comparavel < min * 0.9999) {
        const fator = comparavel > max ? comparavel / max : min / comparavel;
        alertas.push({ g: fator >= 100 ? "grave" : "atencao",
          t: fator >= 100 ? `Dose ${VZ_FMT(fator, 0)}× ${comparavel > max ? "acima" : "abaixo"} da faixa da indicação (${min}–${max} ${ind.dose.unidade}): provável erro de unidade (mg × mcg).`
            : `Dose fora da faixa da indicação (${min}–${max} ${ind.dose.unidade}). Confira a indicação e a unidade.` });
      }
    } else if (iu.tempo !== du.tempo) alertas.push({ g: "atencao", t: `Unidade de tempo diferente da indicação (${ind.dose.unidade}). Confira.` });
  }
  if (ind && ind.doseMax) {
    const mu = vzUnidade(ind.doseMax.unidade);
    let atual = null;
    if (mu.tempo === du.tempo) {
      if (mu.kg) atual = r.dosePorKg !== null ? vzConverter(r.dosePorKg, du.base, mu.base) : null;
      else atual = vzConverter(total, du.base, mu.base);
    }
    r.doseMax = `${VZ_FMT(ind.doseMax.valor, 4)} ${ind.doseMax.unidade}`;
    if (atual !== null && atual > ind.doseMax.valor * 1.0001)
      alertas.push({ g: "grave", t: `ACIMA DA DOSE MÁXIMA (${r.doseMax}). Não administre sem revisar a prescrição.` });
  }

  /* Concentração diferente da apresentação padrão. */
  if (precisaConc && e.farmaco && Array.isArray(e.farmaco.apresentacoes)) {
    const igual = e.farmaco.apresentacoes.some(a => {
      const au = a.unidade.split("/")[0];
      const v = vzConverter(a.conc, au, cu);
      return a.unidade.split("/")[1] === conc.unidade.split("/")[1] && v !== null ? Math.abs(v - conc.valor) < 1e-9 * Math.max(1, v) : (a.unidade === conc.unidade && a.conc === Number(conc.valor));
    });
    if (!igual) alertas.push({ g: "atencao", t: `Concentração ${VZ_FMT(conc.valor, 4)} ${conc.unidade} diferente das apresentações padrão cadastradas (${e.farmaco.apresentacoes.map(a => a.rotulo).join("; ")}). Confira o rótulo.` });
  }

  if (modo === "bolus") {
    r.doseTotal = `${VZ_FMT(total, 4)} ${du.base}`;
    if (du.base === "mL") {
      r.volumeAspirar = total;
      formulas.push(`Volume = ${VZ_FMT(total, 2)} mL (dose já em volume)`);
    } else {
      const totalConc = vzConverter(total, du.base, cu) ?? total;
      const vol = totalConc / Number(conc.valor);
      r.volumeAspirar = vol;
      formulas.push(`Volume a aspirar = dose ÷ concentração = ${VZ_FMT(totalConc, 4)} ${cu} ÷ ${VZ_FMT(conc.valor, 4)} ${conc.unidade} = ${VZ_FMT(vol, 3)} mL`);
      if (Number(e.bolusVolumeFinal) > 0) {
        const vf = Number(e.bolusVolumeFinal);
        if (vf < vol) bloqueios.push(`Volume final (${VZ_FMT(vf)} mL) menor que o volume do medicamento (${VZ_FMT(vol, 3)} mL).`);
        else {
          r.volumeDiluente = vf - vol; r.volumeFinal = vf;
          r.concFinal = `${VZ_FMT(totalConc / vf, 4)} ${cu}/mL`;
          formulas.push(`Diluente = ${VZ_FMT(vf)} mL − ${VZ_FMT(vol, 3)} mL = ${VZ_FMT(vf - vol, 3)} mL · Concentração final = ${VZ_FMT(totalConc, 4)} ${cu} ÷ ${VZ_FMT(vf)} mL = ${r.concFinal}`);
        }
      }
      if (vol < 0.1) alertas.push({ g: "atencao", t: "Volume menor que 0,1 mL: difícil de medir com precisão; considere diluir e recalcular." });
    }
  } else {
    /* Infusão: taxa por hora na unidade-base. */
    const porHora = du.tempo === "min" ? total * 60 : total;
    formulas.push(du.tempo === "min" ? `Taxa por hora = ${VZ_FMT(total, 4)} ${du.base}/min × 60 = ${VZ_FMT(porHora, 4)} ${du.base}/h` : `Taxa = ${VZ_FMT(porHora, 4)} ${du.base}/h`);
    r.doseTotal = `${VZ_FMT(porHora, 4)} ${du.base}/h`;
    if (du.base === "mL") { r.mlh = porHora; formulas.push(`Bomba = ${VZ_FMT(porHora, 2)} mL/h`); }
    else {
      const inf = e.infusao || {};
      let concFinal;
      if (Number(inf.quantidade) > 0 && Number(inf.volumeFinal) > 0) {
        const qu = inf.unidade || cu;
        const qConc = vzConverter(Number(inf.quantidade), qu, cu);
        if (qConc === null) { bloqueios.push(`Quantidade em ${qu} incompatível com a concentração em ${conc.unidade}.`); return { ok: false, bloqueios, alertas, formulas, resultado: null, modo }; }
        const volMed = qConc / Number(conc.valor);
        const vf = Number(inf.volumeFinal);
        if (volMed > vf) { bloqueios.push(`O volume do medicamento (${VZ_FMT(volMed, 2)} mL) é maior que o volume final (${VZ_FMT(vf)} mL).`); return { ok: false, bloqueios, alertas, formulas, resultado: null, modo }; }
        concFinal = qConc / vf;
        r.volumeAspirar = volMed; r.volumeDiluente = vf - volMed; r.volumeFinal = vf;
        formulas.push(`Solução: ${VZ_FMT(inf.quantidade, 4)} ${qu} = ${VZ_FMT(volMed, 3)} mL do medicamento + ${VZ_FMT(vf - volMed, 3)} mL de diluente = ${VZ_FMT(vf)} mL`);
        formulas.push(`Concentração final = ${VZ_FMT(qConc, 4)} ${cu} ÷ ${VZ_FMT(vf)} mL = ${VZ_FMT(concFinal, 4)} ${cu}/mL`);
      } else {
        concFinal = Number(conc.valor);
        alertas.push({ g: "atencao", t: "Sem diluição informada: cálculo com o medicamento puro. Confirme se a infusão sem diluir é a prática do serviço." });
      }
      const porHoraConc = vzConverter(porHora, du.base, cu) ?? porHora;
      r.mlh = porHoraConc / concFinal;
      r.concFinal = `${VZ_FMT(concFinal, 4)} ${cu}/mL`;
      formulas.push(`Bomba (mL/h) = ${VZ_FMT(porHoraConc, 4)} ${cu}/h ÷ ${VZ_FMT(concFinal, 4)} ${cu}/mL = ${VZ_FMT(r.mlh, 2)} mL/h`);
      if (r.mlh < 0.5) alertas.push({ g: "atencao", t: "Vazão abaixo de 0,5 mL/h: imprecisa em muitas bombas; considere solução mais diluída." });
      if (r.mlh > 500) alertas.push({ g: "grave", t: "Vazão acima de 500 mL/h: confira dose, unidade e concentração." });
    }
  }
  if (e.farmaco && e.farmaco.altoRisco) alertas.push({ g: "grave", t: "Medicamento de alto risco: conferência independente por outro profissional antes de administrar." });
  return { ok: !bloqueios.length, bloqueios, alertas, formulas, resultado: bloqueios.length ? null : r, modo, altoRisco: !!(e.farmaco && e.farmaco.altoRisco) };
}

/* ---------- oxigênio ---------- */
/* { capacidadeL, pressao, unidadePressao: bar|psi|kgf, pressaoResidual, fluxo, consumoAdicional, tempoMin, fator } */
function vzCalcularO2(e) {
  const bloqueios = [], formulas = [], alertas = [];
  const conv = { bar: 1, psi: 1 / 14.5038, kgf: 0.980665 };
  const cap = Number(e.capacidadeL), p = Number(e.pressao), fluxo = Number(e.fluxo) || 0, adic = Number(e.consumoAdicional) || 0;
  const tempo = Number(e.tempoMin), fator = Number(e.fator) || 2, res = Number(e.pressaoResidual) || 0;
  if (!(cap > 0)) bloqueios.push("Informe a capacidade hidráulica do cilindro (litros de água, ex.: 3,5 L, 7 L, 10 L).");
  if (!(p > 0)) bloqueios.push("Informe a pressão atual do manômetro.");
  if (!conv[e.unidadePressao]) bloqueios.push("Informe a unidade da pressão (bar, psi ou kgf/cm²).");
  if (!(fluxo + adic > 0)) bloqueios.push("Informe o fluxo de O₂ (L/min) e, se em ventilador, o consumo do equipamento.");
  if (!(tempo > 0)) bloqueios.push("Informe o tempo estimado de transporte (min).");
  if (bloqueios.length) return { ok: false, bloqueios, alertas, formulas };
  const pBar = (p - res) * conv[e.unidadePressao];
  if (pBar <= 0) return { ok: false, bloqueios: ["Pressão atual igual ou abaixo da pressão residual: cilindro sem reserva utilizável."], alertas, formulas };
  const litros = cap * pBar;
  const consumo = fluxo + adic;
  const autonomia = litros / consumo;
  const necessario = consumo * tempo * fator;
  formulas.push(`Pressão utilizável = (${VZ_FMT(p)} − ${VZ_FMT(res)}) ${e.unidadePressao === "kgf" ? "kgf/cm²" : e.unidadePressao}${e.unidadePressao !== "bar" ? ` × ${VZ_FMT(conv[e.unidadePressao], 4)}` : ""} = ${VZ_FMT(pBar, 1)} bar`);
  formulas.push(`O₂ disponível = ${VZ_FMT(cap)} L × ${VZ_FMT(pBar, 1)} bar = ${VZ_FMT(litros, 0)} L`);
  formulas.push(`Consumo = ${VZ_FMT(fluxo)}${adic ? ` + ${VZ_FMT(adic)}` : ""} L/min = ${VZ_FMT(consumo)} L/min → autonomia = ${VZ_FMT(litros, 0)} ÷ ${VZ_FMT(consumo)} = ${VZ_FMT(autonomia, 0)} min`);
  formulas.push(`Necessário com margem = ${VZ_FMT(consumo)} L/min × ${VZ_FMT(tempo)} min × ${VZ_FMT(fator, 1)} = ${VZ_FMT(necessario, 0)} L`);
  const suficiente = litros >= necessario;
  if (!suficiente) alertas.push({ g: "grave", t: `Autonomia insuficiente: ${VZ_FMT(autonomia, 0)} min para ${VZ_FMT(tempo)} min de trajeto com margem ×${VZ_FMT(fator, 1)}. Levar cilindro reserva ou maior.` });
  else if (autonomia < tempo + 30) alertas.push({ g: "atencao", t: "Margem pequena (menos de 30 min além do trajeto). Considere cilindro reserva." });
  return { ok: true, bloqueios, alertas, formulas, litros, autonomia, necessario, suficiente };
}

/* ---------- via aérea ---------- */
const VZ_PROF_NEONATAL_IG = [[24, 5.5], [26, 6.0], [29, 6.5], [32, 7.0], [34, 7.5], [37, 8.0], [40, 8.5], [43, 9.0]];
function vzCanula({ idadeAnos, pesoKg, igSemanas, sexo }) {
  const fontes = [];
  if (idadeAnos === null || idadeAnos === undefined) return { ok: false, bloqueio: "Informe a idade." };
  const perfil = vzPerfil(idadeAnos);
  const meio = x => Math.round(x * 2) / 2;
  if (perfil === "neonato") {
    if (!(pesoKg > 0) && !(igSemanas > 0)) return { ok: false, bloqueio: "Recém-nascido: informe o peso e/ou a idade gestacional." };
    let tubo;
    if (pesoKg > 0) tubo = pesoKg < 1 ? 2.5 : pesoKg <= 2 ? 3.0 : 3.5;
    else tubo = igSemanas < 28 ? 2.5 : igSemanas <= 34 ? 3.0 : 3.5;
    const prof = igSemanas > 0 ? (VZ_PROF_NEONATAL_IG.find(([ig]) => igSemanas <= ig) || [0, 9.0])[1] : null;
    const lamina = igSemanas > 0 && igSemanas < 28 ? "Reta nº 00" : igSemanas > 0 && igSemanas < 37 ? "Reta nº 0" : "Reta nº 0 (pré-termo) ou 1 (termo)";
    return { ok: true, perfil, tubo: `${vzMm(tubo)} mm (sem balonete)`, profundidade: prof ? `${vzMm(prof)} cm no lábio (pela IG)` : "Informe a IG para a profundidade (tabela por IG)", lamina,
      notas: ["Ter também 0,5 mm acima e abaixo.", "Confirmar com capnografia/detector de CO₂ e ausculta; ajustar pela radiografia."],
      fontes: ["SBP — Reanimação do recém-nascido ≥ 34 e < 34 semanas (Programa de Reanimação Neonatal, 2022)", "AAP/AHA — Neonatal Resuscitation Program, 8ª ed. (2021)"] };
  }
  if (perfil === "pediatrico") {
    let comBalonete, semBalonete;
    if (idadeAnos < 1) { comBalonete = 3.0; semBalonete = 3.5; }
    else if (idadeAnos < 2) { comBalonete = 3.5; semBalonete = 4.0; }
    else { comBalonete = meio(idadeAnos / 4 + 3.5); semBalonete = meio(idadeAnos / 4 + 4); }
    const lamina = idadeAnos < 1 ? "Reta nº 1" : idadeAnos < 2 ? "Reta nº 1 ou curva nº 1" : idadeAnos < 8 ? "Nº 2 (reta ou curva)" : "Curva nº 2–3";
    return { ok: true, perfil, tubo: `${vzMm(comBalonete)} mm com balonete (ou ${vzMm(semBalonete)} mm sem balonete)`,
      profundidade: `${vzMm(comBalonete * 3)} cm no lábio (3 × diâmetro interno)`, lamina,
      notas: ["Separar também 0,5 mm acima e abaixo.", "Balonete: pressão ≤ 20–25 cmH₂O.", "Fórmulas por idade são estimativas: preferir fita de reanimação por comprimento quando disponível."],
      fontes: ["AHA — PALS Provider Manual (2020)"] };
  }
  const f = sexo === "F";
  return { ok: true, perfil, tubo: f ? "7,0–7,5 mm" : sexo === "M" ? "7,5–8,0 mm" : "7,0–8,0 mm (informe o sexo)",
    profundidade: f ? "≈ 21 cm na rima labial" : sexo === "M" ? "≈ 23 cm na rima labial" : "21 (F) a 23 (M) cm na rima labial",
    lamina: "Curva (Macintosh) nº 3–4 ou videolaringoscópio", notas: ["Ter tubo 0,5–1 mm menor disponível.", "Confirmar com capnografia em curva."],
    fontes: ["ATLS 10ª ed. (2018)", "AHA ACLS (2020)"] };
}

/* Peso predito (ARDSNet) e volume corrente. */
function vzPesoPredito(sexo, alturaCm) {
  const h = Number(alturaCm);
  if (!(h > 100) || !["M", "F"].includes(sexo)) return null;
  return (sexo === "M" ? 50 : 45.5) + 0.91 * (h - 152.4);
}
function vzVentilacaoInicial({ idadeAnos, sexo, alturaCm, pesoKg }) {
  const perfil = vzPerfil(idadeAnos ?? null);
  if (!perfil) return { ok: false, bloqueio: "Informe a idade." };
  if (perfil === "adulto") {
    const pp = vzPesoPredito(sexo, alturaCm);
    if (!pp) return { ok: false, bloqueio: "Adulto: informe sexo e altura para calcular o peso predito (não usar o peso real)." };
    return { ok: true, perfil, pesoPredito: pp, vt: [6 * pp, 8 * pp], texto: [`Peso predito: ${VZ_FMT(pp, 1)} kg`, `VT 6–8 mL/kg = ${VZ_FMT(6 * pp, 0)}–${VZ_FMT(8 * pp, 0)} mL (SDRA: 6 mL/kg = ${VZ_FMT(6 * pp, 0)} mL)`, "FR inicial 14–18 irpm (ajustar por EtCO₂/gasometria)", "PEEP 5 cmH₂O inicial", "FiO₂ 100% e reduzir para SpO₂ 92–96% (DPOC: 88–92%)", "Pressão de platô < 30 cmH₂O"],
      fontes: ["ARDS Network (NEJM 2000) — fórmula do peso predito", "AMIB/SBPT — Diretrizes Brasileiras de Ventilação Mecânica (2013)"] };
  }
  if (!(pesoKg > 0)) return { ok: false, bloqueio: "Criança/RN: informe o peso atualizado." };
  if (perfil === "neonato") return { ok: true, perfil, texto: ["VT alvo 4–6 mL/kg = " + `${VZ_FMT(4 * pesoKg, 1)}–${VZ_FMT(6 * pesoKg, 1)} mL`, "PEEP 5 cmH₂O inicial", "FiO₂ titulada pela SpO₂ alvo por minuto de vida (pré-ductal)", "Parâmetros finos conforme protocolo neonatal e ventilador de transporte"],
    fontes: ["SBP — Programa de Reanimação Neonatal (2022)"] };
  return { ok: true, perfil, texto: [`VT 5–8 mL/kg = ${VZ_FMT(5 * pesoKg, 0)}–${VZ_FMT(8 * pesoKg, 0)} mL (peso ideal)`, `FR conforme idade: ${(vzReferenciaSV(idadeAnos) || {}).fr ? vzReferenciaSV(idadeAnos).fr.join("–") + " irpm (referência fisiológica)" : "—"}`, "PEEP 5 cmH₂O inicial", "FiO₂ para SpO₂ 92–97%"],
    fontes: ["PALICC-2 — Pediatric Acute Lung Injury Consensus Conference (2023)", "AHA — PALS (2020)"] };
}

if (typeof module !== "undefined") module.exports = { VZ_FMT, vzUnidade, vzConverter, vzIdadeAnos, vzPerfil, vzReferenciaSV, vzCalcularDose, vzCalcularO2, vzCanula, vzPesoPredito, vzVentilacaoInicial };
