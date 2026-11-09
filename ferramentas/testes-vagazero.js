// Testes dos cálculos e do motor do Vaga Zero (chamado por validar-vagazero.js).
// A amostra de ficha é SINTÉTICA (dados inventados): nunca usar dados de pacientes reais aqui.
const path = require("path");
module.exports = function testes() {
  const pasta = path.join(__dirname, "../js/vagazero");
  Object.assign(global, require(path.join(pasta, "calc.js")));
  Object.assign(global, require(path.join(pasta, "motor.js")));
  const { vzExtrairCampos } = require(path.join(pasta, "extracao.js"));
  let falhas = 0, total = 0;
  const ok = (cond, nome) => { total++; if (!cond) { falhas++; console.log("✗ teste: " + nome); } };
  const perto = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
  const F = id => VZ_FARMACOS.find(f => f.id === id);

  /* ---- calculadora de dose ---- */
  let r = vzCalcularDose({ dose: { valor: 0.01, unidade: "mg/kg" }, peso: 20, idadeAnos: 5, conc: { valor: 1, unidade: "mg/mL" }, concConfirmada: true, bolusVolumeFinal: 10 });
  ok(r.ok && perto(r.resultado.volumeAspirar, 0.2) && perto(r.resultado.volumeDiluente, 9.8), "bolus 0,01 mg/kg × 20 kg a 1 mg/mL = 0,2 mL; diluir em 10 mL");
  r = vzCalcularDose({ dose: { valor: 0.1, unidade: "mcg/kg/min" }, peso: 70, idadeAnos: 50, conc: { valor: 1, unidade: "mg/mL" }, concConfirmada: true, infusao: { quantidade: 4, unidade: "mg", volumeFinal: 250 } });
  ok(r.ok && perto(r.resultado.mlh, 26.25), "infusão 0,1 mcg/kg/min × 70 kg, 4 mg/250 mL = 26,25 mL/h");
  ok(r.ok && perto(r.resultado.volumeAspirar, 4) && perto(r.resultado.volumeDiluente, 246), "solução 4 mg = 4 mL + 246 mL");
  r = vzCalcularDose({ dose: { valor: 0.1, unidade: "mg/kg" }, idadeAnos: 3, conc: { valor: 5, unidade: "mg/mL" }, concConfirmada: true });
  ok(!r.ok && r.bloqueios.some(b => /peso/i.test(b)), "bloqueia dose por kg sem peso");
  r = vzCalcularDose({ dose: { valor: 1, unidade: "mg" }, peso: 70, idadeAnos: 40, conc: { valor: 1, unidade: "mg/mL" }, concConfirmada: false });
  ok(!r.ok && r.bloqueios.some(b => /rótulo/i.test(b)), "bloqueia sem confirmar concentração");
  r = vzCalcularDose({ dose: { valor: 1, unidade: "mg" }, peso: 70, idadeAnos: 40, conc: { valor: 10, unidade: "UI/mL" }, concConfirmada: true });
  ok(!r.ok && r.bloqueios.some(b => /incompatíveis/i.test(b)), "bloqueia mg × UI");
  const adr = F("adrenalina");
  const indPed = adr && adr.indicacoes.find(i => i.faixa === "pediatrico" && i.modo === "bolus");
  if (indPed) {
    r = vzCalcularDose({ farmaco: adr, indicacao: indPed, dose: { valor: 10, unidade: "mg/kg" }, peso: 10, idadeAnos: 2, conc: { valor: 1, unidade: "mg/mL" }, concConfirmada: true });
    ok(r.alertas.some(a => a.g === "grave" && /(erro de unidade|DOSE MÁXIMA)/.test(a.t)), "alerta dose absurda (unidade / acima do máximo)");
  }
  const indAd = adr && adr.indicacoes.find(i => i.faixa === "adulto");
  if (indAd) {
    r = vzCalcularDose({ farmaco: adr, indicacao: indAd, dose: { valor: 1, unidade: "mg" }, peso: 10, idadeAnos: 2, conc: { valor: 1, unidade: "mg/mL" }, concConfirmada: true });
    ok(!r.ok && r.bloqueios.some(b => /faixa correta/.test(b)), "bloqueia indicação de adulto em criança");
  }
  r = vzCalcularDose({ farmaco: adr, dose: { valor: 0.01, unidade: "mg/kg" }, peso: 10, idadeAnos: 2, conc: { valor: 0.37, unidade: "mg/mL" }, concConfirmada: true });
  ok(r.alertas.some(a => /diferente das apresentações/.test(a.t)), "alerta concentração fora do padrão");
  ok(r.alertas.some(a => /alto risco/.test(a.t)) === !!(adr && adr.altoRisco), "alerta de alto risco");

  /* ---- O₂ ---- */
  const o = vzCalcularO2({ capacidadeL: 7, pressao: 150, unidadePressao: "bar", fluxo: 10, tempoMin: 60, fator: 2 });
  ok(o.ok && perto(o.litros, 1050) && perto(o.autonomia, 105) && o.suficiente === false, "O₂: 7 L × 150 bar = 1.050 L; 105 min; insuficiente para 60 min × 2");
  ok(vzCalcularO2({ capacidadeL: 7, pressao: 2175, unidadePressao: "psi", fluxo: 5, tempoMin: 60 }).ok, "O₂ em psi");
  ok(!vzCalcularO2({ capacidadeL: 7, pressao: 150, unidadePressao: "bar", fluxo: 5 }).ok, "O₂ bloqueia sem tempo");

  /* ---- via aérea e ventilação ---- */
  ok(/7,0 mm/.test(vzCanula({ idadeAnos: 14 }).tubo), "cânula 14 anos = 7,0 mm com balonete");
  ok(/2,5/.test(vzCanula({ idadeAnos: 0, pesoKg: 0.8, igSemanas: 26 }).tubo), "RN 800 g → 2,5 mm");
  const rn = vzCanula({ idadeAnos: 0, pesoKg: 1.4, igSemanas: 31 });
  ok(/3,0/.test(rn.tubo) && /7,0/.test(rn.profundidade), "RN 1,4 kg / 31 sem → 3,0 mm a 7,0 cm");
  ok(perto(vzPesoPredito("M", 175), 70.566, 1e-3), "peso predito homem 175 cm");
  ok(!vzVentilacaoInicial({ idadeAnos: 40, sexo: "M" }).ok, "ventilação adulta exige altura");

  /* ---- extração: ficha sintética de regulação ---- */
  const txt = require("fs").readFileSync(path.join(__dirname, "amostras/ficha-rn-sintetica.txt"), "utf8");
  const ex = vzExtrairCampos(txt);
  const val = c => (ex.candidatos.find(x => x.campo === c && !x.vazio) || {}).valor;
  ok(val("pac.peso") === 1.4 && val("sv.fc") === 148 && val("sv.fr") === 64 && val("sv.temp") === 36.2 && val("sv.glicemia") === 41, "extração: peso, FC, FR, T, HGT");
  ok(ex.candidatos.some(c => c.campo === "sv.pas" && c.vazio), "extração: PA 'x mmHg' = não informada");
  ok(ex.candidatos.filter(c => c.campo === "pac.ig").length === 2 && ex.candidatos.filter(c => c.campo === "pac.ig").every(c => c.conflito), "extração: conflito de IG (Capurro × USG)");
  ok(ex.candidatos.filter(c => c.campo === "sv.spo2").every(c => c.conflito), "extração: conflito de SpO₂ em horários diferentes");
  ok(val("pac.idade") === 1 && ex.candidatos.find(c => c.campo === "pac.idade").unidade === "dias", "extração: idade 1 dia");
  ok(val("sv.o2") === "cateter" && val("sv.o2fluxo") === 1, "extração: cateter nasal 1 L");
  ok(/hospital de teste B/i.test(val("transf.destino") || ""), "extração: destino autorizado");

  /* ---- motor: RN prematuro ---- */
  const caso = vzCasoVazio();
  Object.assign(caso.pac, { idade: 1, idadeUnidade: "dias", sexo: "M", peso: 1.4, ig: 31 });
  Object.assign(caso.sv, { fc: 148, fr: 64, temp: 36.2, spo2: 91, glicemia: 41, o2: "venturi", o2fluxo: 1, perfusao: "lentificada" });
  Object.assign(caso.transf, { dxPrincipal: "Prematuridade (31 semanas)", motivo: "Necessidade de UTI neonatal", ambulancia: "avancada" });
  let a = vzAnalisar(caso);
  ok(a.perfil === "neonato" && a.g.has("prematuro"), "motor: RN prematuro");
  ok(["alto", "critico"].includes(a.risco.nivel), "motor: prematuro hipoglicêmico e hipotérmico = risco alto/crítico");
  ok(a.antes.some(x => /transporte neonatal/.test(x.t)), "motor: exige transporte neonatal");
  ok(a.antes.some(x => /Glicemia 41/.test(x.t)), "motor: corrigir glicemia antes da saída");
  ok(a.faltando.some(f => f.campo === "sv.pas") && a.faltando.some(f => f.campo === "transf.destino"), "motor: aponta PA e destino ausentes");
  ok(a.inconsistencias.some(i => /Venturi/.test(i)), "motor: aponta Venturi em RN");
  const ids = a.complicacoes.map(x => x.c.id);
  ok(ids.includes("hipotermia-neonatal") && ids.includes("hipoglicemia-neonatal") && ids.includes("apneia-bradicardia-neonatal"), "motor: hipotermia, hipoglicemia e apneia neonatais");
  ok(!ids.some(i => ["sindrome-coronariana-aguda", "eclampsia", "hemorragia-obstetrica", "crise-hipertensiva"].includes(i)), "motor: não mostra complicações sem relação");
  ok(a.checklist.flatMap(g => g.itens).some(i => i.id === "est-incubadora"), "checklist: incubadora para RN");

  /* ---- motor: adulto com TCE grave sem IOT ---- */
  const c2 = vzCasoVazio();
  Object.assign(c2.pac, { idade: 34, sexo: "M", peso: 80, altura: 178, alergias: "nega" });
  Object.assign(c2.sv, { pas: 170, pad: 95, fc: 58, fr: 10, spo2: 93, temp: 36, glicemia: 110, glasgow: 7, o2: "mascara", o2fluxo: 10, acessosQtd: "1" });
  Object.assign(c2.transf, { dxPrincipal: "TCE grave, hematoma extradural", motivo: "Neurocirurgia", destino: "Hospital X", tempoMin: 90, ambulancia: "basica" });
  c2.abcde = { D: { pupilas: "anisocoria" } };
  a = vzAnalisar(c2);
  ok(a.risco.nivel === "critico", "TCE: risco crítico");
  ok(a.antes.some(x => /Glasgow ≤ 8/.test(x.t) && x.decisao), "TCE: decisão sobre via aérea antes da saída");
  ok(a.antes.some(x => /básica incompatível/.test(x.t)), "TCE: ambulância básica incompatível");
  ok(a.complicacoes.some(x => x.c.id === "hipertensao-intracraniana"), "TCE: HIC entre as complicações");
  ok(a.complicacoes.some(x => x.c.id === "pcr"), "TCE: PCR por risco crítico");
  ok(!a.complicacoes.some(x => x.c.grupo === "obstetrica" || x.c.grupo === "neonatal"), "TCE: sem complicações obstétricas/neonatais");
  const sb = vzSBAR(c2, a);
  ok(/S — SITUAÇÃO/.test(sb) && /R — RECOMENDAÇÃO/.test(sb) && /não autoriza/.test(sb), "SBAR gerado com aviso");

  /* ---- gestante com eclâmpsia ---- */
  const c4 = vzCasoVazio();
  Object.assign(c4.pac, { idade: 24, sexo: "F", peso: 70, gestante: "sim", ig: 34 });
  Object.assign(c4.sv, { pas: 172, pad: 112, fc: 104, fr: 20, spo2: 96, glasgow: 13 });
  Object.assign(c4.transf, { dxPrincipal: "Eclâmpsia" });
  a = vzAnalisar(c4);
  ok(a.complicacoes.some(x => x.c.id === "eclampsia") && a.complicacoes.some(x => x.c.id === "toxicidade-magnesio"), "gestante: eclâmpsia e toxicidade do magnésio");
  ok(a.antes.some(x => /decúbito lateral/.test(x.t)), "gestante: decúbito lateral esquerdo");

  /* ---- dados ausentes → indeterminado, nunca 'baixo' ---- */
  const c3 = vzCasoVazio(); Object.assign(c3.pac, { idade: 40 });
  ok(vzAnalisar(c3).risco.nivel === "indeterminado", "sem sinais vitais: risco indeterminado");

  console.log(`Testes: ${total - falhas}/${total} passaram`);
  return falhas;
};
