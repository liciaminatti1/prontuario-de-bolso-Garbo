// Hipercalemia
registrarFicha({
  id: "hipercalemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hipercalemia",
  resumo: "Potássio sérico ≥ 5,5 mEq/L. Risco de arritmia fatal, sobretudo com K ≥ 6,5 ou alterações no ECG.",
  palavrasChave: "hipercalemia potassio alto gluconato de calcio insulina glicose salbutamol dialise drc ieca espironolactona",
  critico: {
    tempo: "ECG imediato",
    texto: "Alteração no ECG ou K ≥ 6,5: cálcio IV agora para estabilizar a membrana, depois insulina + glicose."
  },
  alarmes: [
    "K ≥ 6,5 mEq/L",
    "ECG: onda T apiculada, QRS alargado, perda de onda P, bradicardia, padrão sinusoidal",
    "Fraqueza muscular, paralisia ascendente",
    "Lesão renal aguda oligúrica",
    "Rabdomiólise, lise tumoral, hemólise"
  ],
  condutaInicial: [
    "Monitor cardíaco contínuo e ECG de 12 derivações",
    "Repetir K se suspeita de pseudo-hipercalemia (hemólise) — sem atrasar tratamento se ECG alterado",
    "Gluconato de cálcio 10% 30 mL IV em 5–10 min se alteração no ECG",
    "Insulina regular 10 U + glicose 25 g IV",
    "Suspender fontes de K e drogas que retêm K (IECA, BRA, espironolactona, AINE, trimetoprima)"
  ],
  fataisExcluir: [
    "Arritmia ventricular / assistolia",
    "Lesão renal aguda grave",
    "Rabdomiólise",
    "Insuficiência adrenal (Addison)",
    "Síndrome de lise tumoral"
  ],
  proximaDecisao: "Após estabilizar e redistribuir: remover potássio do corpo (diurético, quelante, diálise). Oligúria, K refratário ou acidose grave → diálise.",
  clinica: {
    anamnese: [
      "DRC, diálise (sessão perdida?), diabetes",
      "Medicações: IECA, BRA, espironolactona, AINE, trimetoprima, heparina, digoxina, betabloqueador, suplemento de K",
      "Trauma, convulsão, exercício extremo (rabdomiólise)",
      "Quimioterapia recente (lise tumoral)",
      "Sintomas: fraqueza, palpitação, parestesias"
    ],
    exameFisico: [
      "FC, ritmo, PA",
      "Força muscular e reflexos",
      "Volemia e diurese",
      "Sinais de insuficiência adrenal"
    ],
    diferenciais: [
      { dx: "Pseudo-hipercalemia", pista: "Hemólise na coleta, garrote prolongado, leucocitose/trombocitose extremas; ECG normal" },
      { dx: "Redistribuição", pista: "Acidose, deficiência de insulina (CAD), betabloqueador, digoxina" },
      { dx: "Excreção reduzida", pista: "LRA, DRC, hipoaldosteronismo, drogas" },
      { dx: "Liberação celular", pista: "Rabdomiólise, lise tumoral, hemólise" }
    ],
    gravidade: [
      "Leve: 5,5–5,9",
      "Moderada: 6,0–6,4",
      "Grave: ≥ 6,5 ou qualquer valor com alteração no ECG"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações — URGENTE (hipercalemia).",
      porQue: "Define urgência do cálcio.",
      esperar: "T apiculada → PR longo e P achatada → QRS largo → sinusoidal.",
      interpretacao: "Qualquer alteração → gluconato de cálcio.",
      limitacoes: "ECG normal não exclui risco; correlação imperfeita com o nível sérico."
    },
    {
      nome: "Potássio e função renal",
      pedido: "Potássio (repetir, sem garrote prolongado), sódio, ureia, creatinina, glicemia, magnésio, cálcio. Gasometria venosa.",
      porQue: "Confirmar e buscar causa.",
      esperar: "—",
      interpretacao: "Acidose metabólica → bicarbonato pode ajudar. Na baixo + K alto → pensar insuficiência adrenal.",
      limitacoes: "Potássio da gasometria é útil para decisão rápida."
    },
    {
      nome: "CK, ácido úrico, fósforo, LDH",
      pedido: "CPK, ácido úrico, fósforo, LDH — se suspeita de rabdomiólise ou lise tumoral.",
      porQue: "Identificar liberação celular.",
      esperar: "—",
      interpretacao: "CK > 5x o normal → rabdomiólise.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Gluconato de cálcio 10%",
      linha: "l1",
      dose: "30 mL (3 g)",
      via: "IV em 5–10 min",
      intervalo: "Repetir em 5–10 min se ECG não melhorar",
      duracao: "Efeito dura 30–60 min (não reduz o K)",
      monitorizacao: "ECG contínuo",
      contraindicacoes: "Cautela em uso de digoxina (infundir em 20–30 min)",
      ajustes: "Cloreto de cálcio 10% 10 mL é alternativa, preferir acesso central (necrose se extravasar)"
    },
    {
      droga: "Insulina regular + glicose",
      linha: "l1",
      dose: "Insulina regular 10 U + glicose 25 g (50 mL de glicose 50%)",
      via: "IV em 15 min",
      intervalo: "Pode repetir após 2–4 h",
      duracao: "Reduz K 0,6–1,0 mEq/L em 30–60 min; efeito de 4–6 h",
      monitorizacao: "Glicemia capilar a cada 1 h por 6 h (risco de hipoglicemia, sobretudo na DRC)",
      contraindicacoes: "—",
      ajustes: "Glicemia ≥ 250 mg/dL: insulina sem glicose. DRC/dialítico: considerar 5 U ou manter SG 10% 50 mL/h"
    },
    {
      droga: "Salbutamol nebulizado",
      linha: "adj",
      dose: "10–20 mg (2–4 mL da solução 5 mg/mL)",
      via: "Nebulização em 10 min",
      intervalo: "Dose única, pode repetir",
      duracao: "Efeito em 30 min, dura 2 h",
      monitorizacao: "FC, arritmia",
      contraindicacoes: "Taquiarritmia, cardiopatia isquêmica instável",
      ajustes: "Somar à insulina, não substituir"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "50–100 mEq",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Volemia, sódio",
      contraindicacoes: "Hipervolemia",
      ajustes: "Só se acidose metabólica associada (pH < 7,2)"
    },
    {
      droga: "Furosemida",
      linha: "l1",
      dose: "40–80 mg",
      via: "IV",
      intervalo: "Conforme diurese",
      duracao: "—",
      monitorizacao: "Diurese, volemia",
      contraindicacoes: "Hipovolemia, anúria",
      ajustes: "Se hipovolêmico: hidratar com SF antes"
    },
    {
      droga: "Quelantes intestinais",
      linha: "alt",
      dose: "Ciclossilicato de zircônio 10 g 8/8h por até 48 h · ou poliestirenossulfonato de cálcio 15–30 g",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "—",
      monitorizacao: "K a cada 2–4 h",
      contraindicacoes: "Íleo, obstrução intestinal; poliestirenossulfonato: risco de necrose intestinal",
      ajustes: "Início lento (1–6 h). Usar o disponível no serviço"
    },
    {
      droga: "Hemodiálise",
      linha: "l1",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Indicações: K refratário, LRA oligúrica, DRC dialítica, rabdomiólise ou lise tumoral grave"
    }
  ],
  destino: {
    agora: [
      "Cálcio se ECG alterado → insulina + glicose → remover K",
      "Acionar nefrologia se diálise provável"
    ],
    reavaliar: [
      "K em 1–2 h após insulina, depois a cada 2–4 h",
      "Glicemia horária por 6 h",
      "ECG seriado"
    ],
    alta: [
      "K leve (< 6,0), ECG normal, causa identificada e corrigida (ex.: suspensão de droga)",
      "Repetir K em 24–72 h na UBS"
    ],
    observacao: [
      "K 6,0–6,4 sem alteração de ECG com resposta ao tratamento"
    ],
    internacao: [
      "K ≥ 6,5, ECG alterado, LRA, rabdomiólise, lise tumoral"
    ],
    transferencia: [
      "Necessidade de diálise sem nefrologia local"
    ]
  },
  prescricao: {
    hospitalar: "HIPERCALEMIA GRAVE (K ≥ 6,5 ou ECG alterado) — ADULTO\n1. Monitor cardíaco contínuo; ECG de 12 derivações; acesso venoso calibroso.\n2. Gluconato de cálcio 10% — 30 mL (3 ampolas de 10 mL) + SF 0,9% 100 mL IV em 10 min. Repetir em 5–10 min se o ECG não melhorar (até 3 vezes). Em uso de digoxina: infundir em 20–30 min.\n3. Insulina regular 10 UI + glicose 50% 50 mL (25 g) IV em 15 min (ou insulina regular 10 UI em bolus + SG 10% 250 mL em 15 min).\n   - Glicemia pré-tratamento ≥ 250 mg/dL: insulina sem glicose.\n   - Glicemia pré-tratamento < 126 mg/dL: após o bolus, SG 10% 50 mL/h por 5 h.\n4. Salbutamol solução 5 mg/mL — 2 mL (10 mg) em nebulização (sem diluir ou com SF até 4 mL), em 10 min; pode chegar a 20 mg. Evitar se taquiarritmia ou coronariopatia instável.\n5. Se acidose metabólica (pH < 7,2) sem hipervolemia: bicarbonato de sódio 8,4% 50–100 mL (50–100 mEq) IV em 15–30 min, em acesso separado do cálcio.\n6. Se diurese preservada e sem hipovolemia: furosemida 10 mg/mL — 40–80 mg (4–8 mL) IV em bolus.\n7. Quelante intestinal disponível: ciclossilicato de zircônio sódico 10 g (2 sachês de 5 g em cerca de 45 mL de água) VO de 8/8 h (até 48 h) OU poliestirenossulfonato de cálcio 30 g VO em 100 mL de água, até de 8/8 h.\n8. Suspender KCl, IECA, BRA, espironolactona, AINE, trimetoprima, heparina e suplementos de potássio.\n9. Controles: glicemia capilar 0, 15, 30, 60 min e depois de 1/1 h por 6 h; K em 1 h, 2 h, 4 h e 6 h; ECG seriado; diurese.\n10. Hemodiálise de urgência se K refratário, LRA oligúrica, DRC dialítica ou lise celular grave — acionar nefrologia.",
    ambulatorial: "ALTA (K < 6,0, ECG normal, causa corrigida)\nORIENTAÇÕES / AJUSTES\n1. Suspender ou reduzir o medicamento causador (ex.: espironolactona, IECA/BRA, AINE, suplemento de potássio) até reavaliação.\n2. Se hipervolemia/IC e TFG baixa (USO ORAL): furosemida 40 mg — 1 comprimido pela manhã, conforme orientação médica.\n3. Dieta com menos potássio por enquanto (evitar excesso de banana, laranja, feijão, tomate, frutas secas, sal light/substitutos de sal com potássio).\n\nPEDIDO DE EXAMES (em 24–72 h na UBS)\nPotássio, sódio, ureia, creatinina, glicemia."
  },
  orientacoesRetorno: [
    "Não usar substitutos de sal (\"sal light\") nem suplementos de potássio",
    "Não usar anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida) sem orientação",
    "Voltar imediatamente se fraqueza nas pernas, formigamento, palpitação, desmaio ou se urinar muito pouco",
    "Paciente em diálise: não faltar às sessões",
    "Repetir o exame de potássio em 24–72 h na UBS e levar a lista de remédios"
  ],
  fontes: [
    "UK Kidney Association — Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults (2023)",
    "KDIGO — Controversies Conference on potassium homeostasis (2020)",
    "European Resuscitation Council — Cardiac arrest in special circumstances: hiperpotassemia (2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
