// Hipercalcemia (inclui hipercalcemia da malignidade)
registrarFicha({
  id: "hipercalcemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hipercalcemia (inclui hipercalcemia da malignidade)",
  resumo: "Cálcio total corrigido > 10,5 mg/dL (ou cálcio iônico elevado). Leve < 12, moderada 12–14, grave > 14 mg/dL. Causas principais: hiperparatireoidismo primário (ambulatorial) e câncer (agudo, grave). Tratamento agudo: hidratação, bisfosfonato IV ou denosumabe, calcitonina.",
  palavrasChave: "hipercalcemia calcio alto hiperparatireoidismo pth pthrp cancer malignidade mieloma metastase ossea acido zoledronico pamidronato calcitonina denosumabe vitamina d sarcoidose",
  critico: {
    tempo: "Volume + bisfosfonato no 1º dia",
    texto: "Cálcio > 14 mg/dL ou sintomático: SF 0,9% para diurese de 100–150 mL/h, ácido zoledrônico (ou pamidronato) e calcitonina nas primeiras horas. Furosemida só depois de repor volume, se houver congestão."
  },
  alarmes: [
    "Cálcio corrigido > 14 mg/dL",
    "Rebaixamento, confusão, coma",
    "Arritmia, QT curto, bradicardia",
    "Lesão renal aguda, desidratação grave",
    "Câncer conhecido com novo quadro de confusão, vômitos ou poliúria"
  ],
  condutaInicial: [
    "Confirmar: cálcio corrigido pela albumina (ou cálcio iônico)",
    "ECG; suspender tiazídico, lítio, suplementos de cálcio e vitamina D, antiácidos com cálcio",
    "SF 0,9% IV (ataque 1–2 L se desidratado, depois 200–300 mL/h), alvo de diurese 100–150 mL/h",
    "Ca ≥ 12 sintomático ou ≥ 14: ácido zoledrônico 4 mg IV (ou pamidronato 60–90 mg)",
    "Ca ≥ 14 ou sintomas graves: calcitonina 4 UI/kg SC/IM de 12/12 h por 48 h (efeito em horas)",
    "Colher PTH (antes de qualquer outra investigação) para separar causa PTH-dependente de independente"
  ],
  fataisExcluir: [
    "Neoplasia (PTHrP, metástases ósseas, mieloma, linfoma)",
    "Crise hipercalcêmica com LRA",
    "Intoxicação por vitamina D",
    "Insuficiência adrenal, tireotoxicose"
  ],
  proximaDecisao: "Ca caindo em 24–72 h (efeito máximo do bisfosfonato em 2–4 dias) → manter hidratação e tratar a causa. Refratário, DRC grave ou contraindicação a bisfosfonato → denosumabe. Ca > 18 mg/dL com sintomas neurológicos, ou LRA/oligúria que impede hidratação → hemodiálise com banho pobre em cálcio.",
  clinica: {
    anamnese: [
      "Câncer conhecido (mama, pulmão, rim, mieloma, linfoma), perda de peso, dor óssea",
      "Medicamentos: tiazídico, lítio, cálcio, vitamina D (doses altas, manipulada), vitamina A, teriparatida",
      "Litíase renal, fraturas, úlcera péptica, pancreatite (hiperparatireoidismo)",
      "Sintomas: poliúria, polidipsia, constipação, náusea, dor abdominal, fraqueza, confusão",
      "Imobilização prolongada, sarcoidose, tuberculose"
    ],
    exameFisico: [
      "Desidratação, nível de consciência",
      "Linfonodos, mamas, massa abdominal, dor óssea à palpação",
      "Sinais de doença granulomatosa"
    ],
    diferenciais: [
      { dx: "Hiperparatireoidismo primário", pista: "PTH alto ou inapropriadamente normal; Ca em geral < 12; assintomático, crônico" },
      { dx: "Hipercalcemia da malignidade (PTHrP)", pista: "PTH suprimido, PTHrP alto; tumores sólidos (escamoso, mama, rim)" },
      { dx: "Metástases osteolíticas / mieloma", pista: "Dor óssea, anemia, LRA, proteína monoclonal" },
      { dx: "Mediada por vitamina D (linfoma, granulomatoses, intoxicação)", pista: "PTH suprimido, 1,25(OH)₂D ou 25(OH)D elevados" },
      { dx: "Hipercalcemia hipocalciúrica familiar", pista: "Ca urinário baixo, história familiar; não operar" },
      { dx: "Pseudo-hipercalcemia", pista: "Albumina alta (desidratação) ou paraproteína; cálcio iônico normal" }
    ],
    gravidade: [
      "Leve: Ca corrigido 10,5–11,9 mg/dL (em geral assintomático)",
      "Moderada: 12–13,9 mg/dL",
      "Grave: ≥ 14 mg/dL — tratar mesmo assintomático",
      "Elevação rápida dá mais sintomas que níveis altos crônicos"
    ]
  },
  exames: [
    {
      nome: "Cálcio, albumina e cálcio iônico",
      pedido: "Cálcio total, albumina, cálcio iônico (se disponível), fósforo, magnésio.",
      porQue: "Confirmar e graduar.",
      esperar: "Ca corrigido > 10,5 mg/dL.",
      interpretacao: "Ca corrigido = Ca medido + 0,8 × (4 − albumina). Fósforo baixo sugere PTH ou PTHrP.",
      limitacoes: "A correção pela albumina é imprecisa em doentes graves; preferir cálcio iônico."
    },
    {
      nome: "PTH intacto",
      pedido: "PTH intacto (colher antes de outros testes).",
      porQue: "Exame que direciona toda a investigação.",
      esperar: "Alto/normal-alto (PTH-dependente) ou suprimido (PTH-independente).",
      interpretacao: "PTH suprimido → pedir PTHrP, 25(OH)D, 1,25(OH)₂D, eletroforese de proteínas, cadeias leves livres, TSH, rastrear neoplasia.",
      limitacoes: "PTH normal na presença de hipercalcemia é inapropriado (sugere hiperparatireoidismo)."
    },
    {
      nome: "Função renal, ECG e investigação dirigida",
      pedido: "Ureia, creatinina, sódio, potássio, ECG. Se PTH suprimido: PTHrP, 25-OH vitamina D, eletroforese de proteínas séricas com imunofixação, cadeias leves livres, RX de tórax, TC conforme suspeita.",
      porQue: "LRA, arritmia e causa.",
      esperar: "LRA pré-renal comum; QT curto.",
      interpretacao: "Paraproteína + LRA + anemia → mieloma (hematologia).",
      limitacoes: "PTHrP e 1,25(OH)₂D demoram; não atrasar tratamento."
    },
    {
      nome: "Cálcio urinário (ambulatorial)",
      pedido: "Cálcio e creatinina em urina de 24 h (fora da crise, com vitamina D normal).",
      porQue: "Diferenciar hiperparatireoidismo de hipercalcemia hipocalciúrica familiar.",
      esperar: "—",
      interpretacao: "Relação de depuração Ca/Cr < 0,01 sugere HHF.",
      limitacoes: "Tiazídico e deficiência de vitamina D reduzem o Ca urinário."
    }
  ],
  tratamento: [
    {
      droga: "Soro fisiológico 0,9%",
      linha: "l1",
      dose: "1–2 L em bolus se desidratado; depois 200–300 mL/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até euvolemia e queda do cálcio",
      monitorizacao: "Diurese alvo 100–150 mL/h, congestão, Na, K, Mg",
      contraindicacoes: "IC grave ou DRC dialítica (cuidado; considerar diálise)",
      ajustes: "Em cardiopatas, alíquotas menores com reavaliação frequente"
    },
    {
      droga: "Ácido zoledrônico",
      linha: "l1",
      dose: "4 mg",
      via: "IV em ≥ 15 min (diluído em 100 mL de SF 0,9% ou SG 5%)",
      intervalo: "Dose única; repetir só após ≥ 7 dias se necessário",
      duracao: "—",
      monitorizacao: "Creatinina, Ca, P, Mg em 2–4 dias; hipocalcemia",
      contraindicacoes: "Hipocalcemia, gestação; cautela em DRC grave",
      ajustes: "Na hipercalcemia da malignidade, a bula não exige ajuste se creatinina < 4,5 mg/dL; acima disso, preferir denosumabe ou diálise. Risco tardio: osteonecrose de mandíbula"
    },
    {
      droga: "Pamidronato dissódico",
      linha: "alt",
      dose: "60–90 mg (90 mg se Ca > 13,5 mg/dL)",
      via: "IV em 2–4 h (diluído em 250–500 mL de SF 0,9%)",
      intervalo: "Dose única; repetir após ≥ 7 dias se necessário",
      duracao: "—",
      monitorizacao: "Creatinina, Ca, Mg",
      contraindicacoes: "Hipocalcemia",
      ajustes: "DRC: infusão mais lenta (até 90 mg em ≥ 4 h)"
    },
    {
      droga: "Calcitonina de salmão",
      linha: "adj",
      dose: "4 UI/kg (pode subir para 8 UI/kg)",
      via: "SC ou IM",
      intervalo: "12/12 h (até 6/6 h)",
      duracao: "Máximo 48 h (taquifilaxia)",
      monitorizacao: "Ca de 12/12 h",
      contraindicacoes: "Alergia",
      ajustes: "Efeito em 4–6 h, ponte até o bisfosfonato agir. Spray nasal não serve para hipercalcemia"
    },
    {
      droga: "Denosumabe",
      linha: "alt",
      dose: "120 mg (hipercalcemia da malignidade)",
      via: "SC",
      intervalo: "Conforme oncologia (esquemas com doses semanais iniciais)",
      duracao: "—",
      monitorizacao: "Risco de hipocalcemia grave, sobretudo em DRC: dosar Ca e repor vitamina D",
      contraindicacoes: "Hipocalcemia",
      ajustes: "Endocrine Society 2023: opção na hipercalcemia da malignidade e quando bisfosfonato é contraindicado (DRC) ou falha. Não é eliminado pelo rim"
    },
    {
      droga: "Prednisona",
      linha: "adj",
      dose: "40–60 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até controle (dias a semanas)",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Só nas causas mediadas por vitamina D (linfoma, sarcoidose, granulomatoses, intoxicação por vitamina D) e mieloma"
    },
    {
      droga: "Furosemida",
      linha: "adj",
      dose: "20–40 mg",
      via: "IV",
      intervalo: "Conforme volemia",
      duracao: "—",
      monitorizacao: "K, Mg, volemia",
      contraindicacoes: "Hipovolemia (piora a hipercalcemia)",
      ajustes: "Só para congestão depois de reidratar; não é mais usada rotineiramente para baixar cálcio"
    },
    {
      droga: "Hemodiálise",
      linha: "adj",
      dose: "Banho com cálcio baixo ou zero",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Ca, K, P",
      contraindicacoes: "—",
      ajustes: "Ca > 18 mg/dL com sintomas neurológicos, LRA oligúrica ou IC que impede a hidratação"
    }
  ],
  destino: {
    agora: ["Hidratação e bisfosfonato no 1º dia se Ca ≥ 12 sintomático ou ≥ 14", "Suspender drogas que elevam o cálcio"],
    reavaliar: ["Ca, creatinina e eletrólitos a cada 12–24 h", "Diurese e congestão de 4/4 h a 6/6 h"],
    alta: ["Ca < 12, assintomático, função renal estável e plano para a causa", "Hiperparatireoidismo leve: seguimento ambulatorial com endocrinologia"],
    observacao: ["Ca 12–14 com poucos sintomas e causa provável conhecida"],
    internacao: ["Ca ≥ 14, sintomáticos, LRA, neoplasia nova"],
    transferencia: ["Sem bisfosfonato, sem diálise ou sem oncologia quando necessários → regulação"]
  },
  prescricao: {
    hospitalar: "HIPERCALCEMIA GRAVE (Ca corrigido ≥ 14 ou sintomática) — ADULTO (peso: ___ kg)\n1. Dieta livre (sem suplementos de cálcio); estimular ingestão de água se consciente.\n2. Suspender: hidroclorotiazida, clortalidona, lítio, carbonato de cálcio, vitamina D e vitamina A.\n3. SF 0,9% 1.000 mL IV em 1 h (avaliar congestão); depois SF 0,9% 250 mL/h. Alvo de diurese 100–150 mL/h.\n4. Ácido zoledrônico 4 mg + SF 0,9% 100 mL IV em 15–30 min, dose única (após iniciar a hidratação).\n   (Alternativa: pamidronato 90 mg + SF 0,9% 500 mL IV em 4 h.)\n5. Calcitonina de salmão ___ UI (4 UI/kg) SC ou IM de 12/12 h por até 48 h.\n6. Se congestão após reidratação: furosemida 20–40 mg IV.\n7. Se causa mediada por vitamina D (linfoma, sarcoidose): prednisona 40–60 mg VO 1×/dia.\n8. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV), se sem contraindicação.\n9. Controles: Ca, albumina, creatinina, Na, K, Mg de 12/12 h; P em 48 h; diurese horária; balanço hídrico; ECG se Ca > 14.\n10. Colher PTH (antes de tudo), PTHrP, 25-OH vitamina D, eletroforese de proteínas."
  },
  orientacoesRetorno: [
    "Beber bastante água (2–3 litros por dia), salvo orientação diferente por coração ou rim",
    "Não usar suplementos de cálcio, vitamina D ou diurético 'de pressão' (hidroclorotiazida) até liberação médica",
    "Voltar se sede intensa, urinar demais, vômitos, prisão de ventre forte, sonolência ou confusão",
    "Fazer os exames de controle e a consulta com especialista no prazo combinado"
  ],
  fontes: [
    "Endocrine Society — Treatment of Hypercalcemia of Malignancy in Adults: Clinical Practice Guideline (JCEM, 2023)",
    "Fifth International Workshop on Primary Hyperparathyroidism — Evaluation and Management of Primary Hyperparathyroidism (JBMR, 2022)",
    "Bulas de ácido zoledrônico 4 mg/5 mL e pamidronato dissódico (Anvisa)",
    "Minisola S et al. — The diagnosis and management of hypercalcaemia (BMJ, 2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
