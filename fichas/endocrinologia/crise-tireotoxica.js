// Crise tireotóxica (tempestade tireoidiana)
registrarFicha({
  id: "crise-tireotoxica",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Crise tireotóxica (tempestade tireoidiana)",
  resumo: "Tireotoxicose com descompensação de órgãos: febre, taquicardia ou FA rápida, insuficiência cardíaca, agitação, delirium ou coma, vômitos, diarreia ou icterícia. Diagnóstico clínico (escore de Burch-Wartofsky). Mortalidade alta: tratar sem esperar exames.",
  palavrasChave: "crise tireotoxica tempestade tireoidiana thyroid storm tireotoxicose graves burch wartofsky propranolol propiltiouracil ptu metimazol tiamazol lugol iodo hidrocortisona febre taquicardia fibrilacao atrial",
  critico: {
    tempo: "Tionamida 1 h antes do iodo",
    texto: "Betabloqueador + PTU (ou metimazol) + corticoide + medidas de suporte imediatamente. O iodo só depois de pelo menos 1 hora da tionamida. Não esperar TSH/T4 para tratar."
  },
  alarmes: [
    "Escore de Burch-Wartofsky ≥ 45",
    "Rebaixamento, delirium, convulsão ou coma",
    "Insuficiência cardíaca, choque, FA com resposta muito alta",
    "Temperatura ≥ 40 °C",
    "Icterícia (pior prognóstico)"
  ],
  condutaInicial: [
    "Monitor, oxigênio se SpO₂ < 94%, 2 acessos, ECG; leito de UTI",
    "Coletar TSH, T4 livre, T3, hemograma, eletrólitos, glicemia, função hepática e renal, cálcio, culturas se febre — e tratar sem esperar",
    "Propranolol VO/SNG (bloqueia sintomas e conversão de T4 em T3)",
    "PTU (preferido na crise) ou metimazol em dose alta",
    "Hidrocortisona IV",
    "Após ≥ 1 h da tionamida: iodo inorgânico (SSKI ou Lugol)",
    "Resfriamento, paracetamol (não usar AAS), hidratação, tratar o desencadeante"
  ],
  fataisExcluir: [
    "Sepse (febre e taquicardia; colher culturas)",
    "Insuficiência adrenal associada",
    "Síndrome coronariana aguda, IC descompensada",
    "Intoxicação por simpaticomiméticos (cocaína, anfetamina), síndrome serotoninérgica ou neuroléptica maligna, hipertermia por calor"
  ],
  proximaDecisao: "Melhora clínica em 24–72 h → reduzir PTU (ou trocar por metimazol), suspender iodo em 1–2 semanas, reduzir corticoide até suspender. Sem melhora em 24–48 h ou contraindicação a tionamida (agranulocitose, hepatotoxicidade) → plasmaférese ou tireoidectomia de urgência (centro de referência).",
  clinica: {
    anamnese: [
      "Hipertireoidismo conhecido? Graves, bócio nodular, uso e adesão ao metimazol/PTU",
      "Gatilho: infecção, cirurgia, trauma, parto, suspensão da tionamida, contraste iodado, amiodarona, iodo radioativo recente, CAD",
      "Perda de peso, palpitação, tremor, intolerância ao calor, diarreia",
      "Uso de drogas (cocaína, anfetaminas), medicamentos serotoninérgicos e neurolépticos"
    ],
    exameFisico: [
      "Temperatura, FC, ritmo (FA), PA, sinais de IC",
      "Nível de consciência, agitação, tremor",
      "Bócio, oftalmopatia (sugere Graves)",
      "Icterícia, hepatomegalia, desidratação"
    ],
    diferenciais: [
      { dx: "Sepse", pista: "Foco infeccioso, lactato, sem bócio; podem coexistir" },
      { dx: "Intoxicação simpaticomimética", pista: "Midríase, uso de cocaína/anfetamina, TSH normal" },
      { dx: "Síndrome neuroléptica maligna / serotoninérgica", pista: "Rigidez, clônus, CK alta, medicação recente" },
      { dx: "Tireotoxicose descompensada sem crise", pista: "Burch-Wartofsky < 25, sem disfunção de órgão" }
    ],
    gravidade: [
      "Burch-Wartofsky ≥ 45: crise muito provável · 25–44: crise iminente (tratar como crise se houver disfunção de órgão) · < 25: improvável",
      "Critérios japoneses (JTA) são alternativa ao escore",
      "Disfunção do SNC e insuficiência cardíaca são os principais preditores de morte"
    ]
  },
  exames: [
    {
      nome: "Função tireoidiana",
      pedido: "TSH, T4 livre e T3 total ou livre. TRAb se causa indefinida (não atrasar tratamento).",
      porQue: "Confirmar tireotoxicose.",
      esperar: "TSH suprimido, T4L e/ou T3 elevados.",
      interpretacao: "Os níveis hormonais não separam crise de tireotoxicose simples: o diagnóstico é clínico.",
      limitacoes: "Resultado demora; não esperar para tratar."
    },
    {
      nome: "Laboratório geral e do gatilho",
      pedido: "Hemograma, glicemia, sódio, potássio, cálcio, magnésio, ureia, creatinina, TGO, TGP, bilirrubinas, TP/INR, gasometria venosa com lactato, PCR, troponina, urina tipo 1, hemoculturas e urocultura se febre, beta-hCG em mulher em idade fértil, cortisol sérico (antes da hidrocortisona).",
      porQue: "Disfunção de órgão, gatilho e base para vigiar toxicidade das drogas.",
      esperar: "Hiperglicemia, hipercalcemia leve, transaminases e bilirrubina elevadas.",
      interpretacao: "Neutrófilos < 1.000/mm³ antes do início: evitar tionamida (discutir com endocrinologia).",
      limitacoes: "—"
    },
    {
      nome: "ECG, RX de tórax e ecocardiograma",
      pedido: "ECG de 12 derivações. RX de tórax. Ecocardiograma se IC ou choque.",
      porQue: "FA, isquemia, congestão, função ventricular antes de doses altas de betabloqueador.",
      esperar: "Taquicardia sinusal ou FA.",
      interpretacao: "FE reduzida ou choque: betabloqueador com cautela (preferir esmolol titulável).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Propranolol",
      linha: "l1",
      dose: "60–80 mg",
      via: "VO ou SNG",
      intervalo: "4/4 h",
      duracao: "Até controle; depois reduzir",
      monitorizacao: "FC alvo < 100–110 bpm, PA, sinais de IC, broncoespasmo",
      contraindicacoes: "Asma grave, choque, BAV avançado; IC com baixo débito (usar droga titulável)",
      ajustes: "Alternativas IV: metoprolol 5 mg IV lento a cada 5 min (até 15 mg) ou esmolol em bomba (UTI). Asma: diltiazem"
    },
    {
      droga: "Propiltiouracil (PTU)",
      linha: "l1",
      dose: "Ataque 500–1.000 mg, depois 250 mg",
      via: "VO ou SNG (ou via retal, manipulado)",
      intervalo: "4/4 h",
      duracao: "Até melhora; depois reduzir ou trocar por metimazol",
      monitorizacao: "Hemograma, transaminases",
      contraindicacoes: "Agranulocitose ou hepatite prévia por tionamida",
      ajustes: "Preferido na crise (também reduz conversão de T4 em T3) e no 1º trimestre de gestação. Hepatotoxicidade grave possível"
    },
    {
      droga: "Metimazol (tiamazol)",
      linha: "alt",
      dose: "60–80 mg/dia (ex.: 20 mg 6/6 h ou 4/4 h)",
      via: "VO ou SNG",
      intervalo: "Dividido",
      duracao: "Até melhora, depois dose de manutenção",
      monitorizacao: "Hemograma, transaminases",
      contraindicacoes: "Agranulocitose prévia",
      ajustes: "Usar se PTU indisponível. Comprimidos de 5 e 10 mg (RENAME)"
    },
    {
      droga: "Hidrocortisona",
      linha: "l1",
      dose: "Ataque 300 mg IV, depois 100 mg",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Reduzir conforme melhora",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Alternativa: dexametasona 2 mg IV 6/6 h. Reduz conversão periférica de T4 e trata insuficiência adrenal relativa"
    },
    {
      droga: "Iodo inorgânico (SSKI — solução saturada de iodeto de potássio, ou solução de Lugol)",
      linha: "l1",
      dose: "SSKI: 5 gotas (≈ 250 mg); Lugol: dose equivalente conforme a concentração da farmácia",
      via: "VO ou SNG",
      intervalo: "6/6 h",
      duracao: "Em geral até 1–2 semanas",
      monitorizacao: "—",
      contraindicacoes: "Antes da tionamida (dar só ≥ 1 h depois), alergia a iodo",
      ajustes: "Bloqueia a liberação de hormônio. Atrasa o uso de iodo radioativo por semanas"
    },
    {
      droga: "Paracetamol",
      linha: "adj",
      dose: "500–1.000 mg (máx. 3–4 g/dia)",
      via: "VO ou IV",
      intervalo: "6/6 h",
      duracao: "Se febre",
      monitorizacao: "Função hepática",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Associar resfriamento físico. Não usar AAS (desloca T4 da proteína ligadora)"
    },
    {
      droga: "Colestiramina",
      linha: "adj",
      dose: "4 g",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "Fase aguda",
      monitorizacao: "—",
      contraindicacoes: "Íleo",
      ajustes: "Reduz recirculação êntero-hepática do hormônio; separar de outras drogas orais"
    },
    {
      droga: "Ácido acetilsalicílico como antitérmico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Aumenta T4 e T3 livres",
      ajustes: "Usar paracetamol"
    }
  ],
  destino: {
    agora: ["UTI ou sala de emergência com monitor", "Iniciar as 4 frentes: betabloqueador, tionamida, corticoide, iodo (após 1 h)"],
    reavaliar: ["FC, temperatura e consciência de 1/1 h a 2/2 h", "T4L e T3 a cada 2–3 dias", "Hemograma e transaminases"],
    alta: ["Após resolução, em metimazol, com plano de tratamento definitivo (iodo radioativo ou cirurgia) pela endocrinologia"],
    observacao: ["—"],
    internacao: ["Todos: UTI para Burch-Wartofsky ≥ 45 ou disfunção de órgão"],
    transferencia: ["Sem UTI, sem PTU/metimazol ou sem resposta (plasmaférese, tireoidectomia) → regulação"]
  },
  prescricao: {
    hospitalar: "CRISE TIREOTÓXICA — ADULTO\n1. Dieta conforme consciência; jejum se rebaixado (medicações por SNG).\n2. Monitor, oximetria, O₂ para SpO₂ ≥ 94%, cabeceira 30°.\n3. SF 0,9% 500–1.000 mL IV em 1 h (avaliar congestão antes); depois SG 5% + SF 0,9% conforme volemia (alta perda insensível).\n4. Propranolol 40 mg: 2 comprimidos (80 mg) VO/SNG de 4/4 h. Alvo FC < 100–110. (IC com baixo débito ou asma: discutir esmolol/diltiazem.)\n5. Propiltiouracil 100 mg: 5 a 10 comprimidos (500–1.000 mg) VO/SNG agora; depois 250 mg (2½ comprimidos) de 4/4 h.\n   (Sem PTU: metimazol 10 mg — 2 comprimidos de 6/6 h.)\n6. Hidrocortisona 300 mg IV agora; depois 100 mg IV de 8/8 h (diluir em 100 mL de SF 0,9%, correr em 30 min).\n7. Iodeto de potássio solução saturada (SSKI): 5 gotas VO/SNG de 6/6 h, iniciar pelo menos 1 hora DEPOIS da 1ª dose de PTU (ou Lugol em dose equivalente conforme farmácia).\n8. Paracetamol 750 mg VO de 6/6 h se T ≥ 37,8 °C + resfriamento físico (compressas, ambiente frio). Não usar AAS.\n9. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV; anticoagulação plena se FA conforme CHA₂DS₂-VA e risco).\n10. Tratar o gatilho (ex.: antibiótico se infecção).\n11. Controles: sinais vitais e temperatura de 1/1 h, glicemia de 6/6 h, diurese, balanço hídrico, ECG contínuo."
  },
  orientacoesRetorno: [
    "Nunca parar o metimazol ou o PTU por conta própria",
    "Febre, dor de garganta ou feridas na boca durante o uso de metimazol/PTU: suspender o remédio e fazer hemograma no mesmo dia",
    "Pele ou olhos amarelos, urina escura: procurar atendimento (toxicidade no fígado)",
    "Voltar imediatamente se palpitação forte, falta de ar, febre alta, confusão",
    "Consulta com endocrinologia em até 1–2 semanas após a alta para tratamento definitivo"
  ],
  tabelas: [
    {
      titulo: "Escore de Burch-Wartofsky",
      colunas: ["Item", "Achado", "Pontos"],
      linhas: [
        ["Temperatura (°C)", "37,2–37,7 / 37,8–38,2 / 38,3–38,8 / 38,9–39,3 / 39,4–39,9 / ≥ 40", "5 / 10 / 15 / 20 / 25 / 30"],
        ["SNC", "Ausente / leve (agitação) / moderado (delirium, psicose, letargia extrema) / grave (convulsão, coma)", "0 / 10 / 20 / 30"],
        ["Gastrointestinal-hepático", "Ausente / moderado (diarreia, náusea, vômito, dor abdominal) / grave (icterícia sem outra causa)", "0 / 10 / 20"],
        ["Frequência cardíaca (bpm)", "90–109 / 110–119 / 120–129 / 130–139 / ≥ 140", "5 / 10 / 15 / 20 / 25"],
        ["Insuficiência cardíaca", "Ausente / leve (edema de MMII) / moderada (estertores em bases) / grave (edema agudo de pulmão)", "0 / 5 / 10 / 15"],
        ["Fibrilação atrial", "Ausente / presente", "0 / 10"],
        ["Evento precipitante", "Ausente / presente", "0 / 10"]
      ],
      nota: "≥ 45: crise muito provável · 25–44: iminente · < 25: improvável. Burch & Wartofsky, 1993."
    }
  ],
  fontes: [
    "American Thyroid Association — Guidelines for the Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis (Thyroid, 2016)",
    "Japan Thyroid Association / Japan Endocrine Society — Guidelines for the management of thyroid storm (Endocrine Journal, 2016)",
    "SBEM — Consenso brasileiro para o diagnóstico e tratamento do hipertireoidismo (Arq Bras Endocrinol Metab, 2013)",
    "Burch HB, Wartofsky L — Life-threatening thyrotoxicosis: thyroid storm (Endocrinol Metab Clin North Am, 1993)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
