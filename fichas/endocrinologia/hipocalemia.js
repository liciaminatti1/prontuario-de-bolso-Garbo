// Hipocalemia
registrarFicha({
  id: "hipocalemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hipocalemia",
  resumo: "Potássio sérico < 3,5 mEq/L. Grave < 2,5 ou com sintomas (fraqueza, paralisia, íleo, arritmia). Causas comuns: diuréticos, vômitos, diarreia, insulina, beta-agonista. Repor por via oral sempre que possível; IV com limites de velocidade e concentração.",
  palavrasChave: "hipocalemia hipopotassemia potassio baixo kcl cloreto de potassio xarope diuretico vomitos diarreia fraqueza paralisia arritmia magnesio onda u",
  critico: {
    tempo: "KCl IV ≤ 10 mEq/h em periférica",
    texto: "K < 2,5, sintomas ou alteração no ECG: KCl IV com monitor. Periférica: até 10 mEq/h; central com monitor: até 20 mEq/h. Corrigir magnésio junto. Nunca KCl em bolus."
  },
  alarmes: [
    "K < 2,5 mEq/L",
    "Fraqueza muscular, paralisia, insuficiência respiratória",
    "Arritmia, QT/QU longo, onda U, uso de digoxina",
    "Paralisia periódica (risco de hipercalemia de rebote)",
    "Cetoacidose em tratamento (não iniciar insulina com K < 3,5)"
  ],
  condutaInicial: [
    "Confirmar o valor (leucocitose extrema com amostra parada pode dar pseudo-hipocalemia)",
    "ECG; monitor se K < 2,5, sintomas, cardiopatia ou digoxina",
    "Dosar magnésio e repor se baixo",
    "K 3,0–3,4 sem sintomas: KCl VO",
    "K < 3,0 ou sintomas: KCl IV (± VO se tolera)",
    "Tratar a causa: suspender/ajustar diurético, tratar vômitos e diarreia"
  ],
  fataisExcluir: [
    "Arritmia ventricular (torsades, FV)",
    "Paralisia com insuficiência respiratória",
    "Cetoacidose (déficit corporal de K oculto)",
    "Tireotoxicose (paralisia periódica tireotóxica)"
  ],
  proximaDecisao: "K ≥ 3,0 sem sintomas → passar para VO. Sem causa clara ou recorrente → K urinário (relação K/creatinina) e gasometria: perda renal (diurético, hiperaldosteronismo, Bartter/Gitelman) × extrarrenal; hipertensão + hipocalemia → rastrear hiperaldosteronismo primário.",
  clinica: {
    anamnese: [
      "Diuréticos (tiazídico, furosemida), laxativos, vômitos, diarreia, SNG aberta",
      "Insulina, salbutamol, teofilina, cafeína em excesso, anfotericina, corticoide",
      "Hipertensão (hiperaldosteronismo), alcoolismo, desnutrição (realimentação)",
      "Fraqueza, câimbras, constipação, palpitações"
    ],
    exameFisico: [
      "PA (hipertensão sugere excesso mineralocorticoide)",
      "Força muscular, reflexos, distensão abdominal (íleo)",
      "Volemia"
    ],
    diferenciais: [
      { dx: "Translocação para dentro da célula", pista: "Insulina, beta-agonista, alcalose, paralisia periódica (K corporal normal)" },
      { dx: "Perda gastrointestinal", pista: "K urinário baixo (relação K/Cr < 13 mEq/g)" },
      { dx: "Perda renal", pista: "K urinário alto; diurético, hipomagnesemia, hiperaldosteronismo" },
      { dx: "Pseudo-hipocalemia", pista: "Leucocitose muito alta com amostra parada" }
    ],
    gravidade: [
      "Leve 3,0–3,4 · moderada 2,5–2,9 · grave < 2,5 mEq/L",
      "ECG: onda T achatada, onda U, infra de ST, QT(U) longo, arritmias",
      "Aproximação: cada 0,3 mEq/L abaixo de 3,5 ≈ déficit de 100 mEq em adulto (varia muito)"
    ]
  },
  exames: [
    {
      nome: "Eletrólitos e ECG",
      pedido: "Potássio, magnésio, sódio, cloro, glicemia, creatinina, gasometria venosa. ECG de 12 derivações.",
      porQue: "Gravidade e fatores que impedem correção.",
      esperar: "—",
      interpretacao: "Mg baixo → hipocalemia refratária até corrigir o Mg. Alcalose metabólica: vômitos, diurético, mineralocorticoide.",
      limitacoes: "—"
    },
    {
      nome: "Potássio urinário",
      pedido: "Potássio e creatinina em amostra isolada de urina (antes da reposição).",
      porQue: "Separar perda renal de extrarrenal.",
      esperar: "—",
      interpretacao: "K/Cr urinário > 13 mEq/g sugere perda renal.",
      limitacoes: "Diurético recente invalida."
    },
    {
      nome: "Investigação de hipertensão + hipocalemia",
      pedido: "Aldosterona e atividade de renina plasmática (ambulatorial).",
      porQue: "Rastrear hiperaldosteronismo primário.",
      esperar: "—",
      interpretacao: "Relação aldosterona/renina elevada → endocrinologia.",
      limitacoes: "Corrigir K antes; vários anti-hipertensivos interferem."
    }
  ],
  tratamento: [
    {
      droga: "Cloreto de potássio xarope 6% (60 mg/mL ≈ 0,8 mEq/mL)",
      linha: "l1",
      dose: "15 mL (≈ 12 mEq); total 40–80 mEq/dia conforme déficit",
      via: "VO, diluído em água ou suco, após refeição",
      intervalo: "3 a 4×/dia",
      duracao: "Até K normal e causa controlada",
      monitorizacao: "K em 2–3 dias (ambulatório) ou 6–24 h (internado)",
      contraindicacoes: "DRC avançada, uso de IECA/BRA/espironolactona (cautela, doses menores)",
      ajustes: "Alternativa: KCl 600 mg comprimido de liberação prolongada (8 mEq). Dose VO até 40 mEq por tomada. RENAME (xarope)"
    },
    {
      droga: "Cloreto de potássio 19,1% IV (2,5 mEq/mL)",
      linha: "l1",
      dose: "Periférica: até 10 mEq/h, concentração até 40 mEq/L (ex.: 20 mEq em 500 mL de SF 0,9% a 250 mL/h) · Central com monitor: até 20 mEq/h",
      via: "IV em bomba de infusão",
      intervalo: "Repetir conforme K",
      duracao: "Até K ≥ 3,0 e paciente aceitar VO",
      monitorizacao: "K a cada 2–4 h (grave) ou após cada 40–60 mEq; ECG contínuo se > 10 mEq/h",
      contraindicacoes: "Nunca em bolus ou IV direto; anúria (cautela)",
      ajustes: "Diluir em SF 0,9% (soro glicosado estimula insulina e piora o K). Arritmia grave: até 40 mEq/h só em acesso central, UTI"
    },
    {
      droga: "Sulfato de magnésio",
      linha: "adj",
      dose: "2 g IV em 1 h (se Mg baixo)",
      via: "IV",
      intervalo: "Conforme Mg",
      duracao: "Até Mg normal",
      monitorizacao: "Mg, reflexos",
      contraindicacoes: "Insuficiência renal grave (reduzir)",
      ajustes: "Ver ficha disturbios-magnesio"
    },
    {
      droga: "Espironolactona",
      linha: "adj",
      dose: "25–50 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "K, creatinina",
      contraindicacoes: "DRC avançada, hipercalemia",
      ajustes: "Hipocalemia crônica por diurético de alça/tiazídico, hiperaldosteronismo, IC"
    }
  ],
  destino: {
    agora: ["K < 2,5 ou sintomas: KCl IV com monitor + Mg"],
    reavaliar: ["K de 2/2 h a 4/4 h na reposição IV", "ECG"],
    alta: ["K ≥ 3,0 sem sintomas, tolerando VO, causa abordada, K de controle em 2–3 dias"],
    observacao: ["K 2,5–2,9 sem sintomas, reposição IV + VO por algumas horas"],
    internacao: ["K < 2,5, paralisia, arritmia, incapaz de tomar VO, perdas contínuas"],
    transferencia: ["—"]
  },
  prescricao: {
    hospitalar: "HIPOCALEMIA (K < 3,0 ou sintomática) — ADULTO\n1. Dieta livre rica em potássio (banana, laranja, feijão), se tolerar.\n2. Monitor cardíaco se K < 2,5, sintomas, cardiopatia ou digoxina.\n3. SF 0,9% 500 mL + KCl 19,1% 8 mL (20 mEq) IV em bomba a 250 mL/h (10 mEq/h) em veia periférica. Repetir conforme K.\n   (Acesso central + monitor: SF 0,9% 100 mL + KCl 19,1% 8 mL (20 mEq) IV em 1 h.)\n4. Associar KCl xarope 6% 15 mL VO de 6/6 h se tolerar.\n5. Sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL IV em 1 h se Mg < 1,8 mg/dL.\n6. Ondansetrona 4 mg IV 8/8 h SN se vômitos.\n7. Controles: K a cada 2–4 h até K ≥ 3,0; depois 12/12 h; Mg diário; ECG.",
    ambulatorial: "HIPOCALEMIA LEVE (K 3,0–3,4)\nUSO ORAL\n1. Cloreto de potássio xarope 6% (60 mg/mL) ------ 1 frasco\n   Tomar 15 mL diluídos em meio copo de água ou suco, após o café, almoço e jantar, por 7 dias.\n   (ou Cloreto de potássio 600 mg liberação prolongada: 2 comprimidos 2 vezes ao dia.)\n\nExame de potássio em 3–7 dias."
  },
  orientacoesRetorno: [
    "Tomar o xarope diluído e depois das refeições (irrita o estômago)",
    "Comer alimentos ricos em potássio: banana, laranja, feijão, tomate, batata",
    "Voltar se fraqueza nas pernas, câimbras fortes, palpitação ou desmaio",
    "Fazer o exame de controle em poucos dias; não tomar potássio por mais tempo que o combinado"
  ],
  fontes: [
    "Kardalas E et al. — Hypokalemia: a clinical update (Endocrine Connections, 2018)",
    "KDIGO — Controversies Conference: Potassium Homeostasis and Management of Dyskalemia (Kidney Int, 2020)",
    "Ministério da Saúde — RENAME 2024 (cloreto de potássio xarope 60 mg/mL e solução injetável 19,1%)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
