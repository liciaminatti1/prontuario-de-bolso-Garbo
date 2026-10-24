// Gestante na urgência: avaliação inicial
registrarFicha({
  id: "gestante-na-urgencia",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Gestante e puérpera na urgência: avaliação inicial e classificação de risco",
  resumo: "Roteiro para a gestante ou puérpera (até 42 dias) que chega ao PS/UPA: sinais vitais com olhar obstétrico (MEOWS), classificação de risco do MS, queixas comuns (sangramento, perda de líquido, diminuição de movimentos, dor, febre, cefaleia) e destino.",
  palavrasChave: "gestante urgencia emergencia obstetrica pronto socorro upa acolhimento classificacao de risco obstetricia meows sinais vitais obstetricos puerpera perda de liquido sangramento dor abdominal febre movimentos fetais cefaleia triagem gravida",
  critico: {
    tempo: "PA, BCF e sangramento na chegada",
    texto: "Toda gestante ≥ 20 semanas: PA, FC, FR, SpO₂, temperatura, BCF e pergunta sobre sangramento, perda de líquido, movimentos e cefaleia. Um parâmetro vermelho do MEOWS ou dois amarelos: avaliação médica imediata."
  },
  alarmes: [
    "PA ≥ 160/110, ou ≥ 140/90 com cefaleia, alteração visual ou epigastralgia",
    "Convulsão ou rebaixamento de consciência",
    "Sangramento vaginal ativo após 20 semanas ou com instabilidade em qualquer IG",
    "FR ≥ 25, PAS ≤ 90, FC > 120, SpO₂ < 95%, T ≥ 38 °C ou < 35 °C",
    "BCF ausente, < 110 ou > 160 bpm persistente",
    "Cordão visível ou palpável, período expulsivo, apresentação na vulva",
    "Dor abdominal intensa com útero endurecido",
    "Dor torácica, dispneia súbita, edema unilateral de perna"
  ],
  condutaInicial: [
    "Acolher e classificar risco (protocolo MS de obstetrícia): cor define o tempo de atendimento",
    "Sinais vitais completos e MEOWS; lembrar a fisiologia (tabela) — a gestante compensa e descompensa tarde",
    "IG pela DUM/USG precoce; cartão da gestante (tipagem, sorologias, exames, intercorrências)",
    "≥ 20 semanas: BCF (sonar) e altura uterina; nunca deitar em decúbito dorsal (lateral esquerdo)",
    "Pesquisar 4 perguntas: sangramento? perda de líquido? movimentos fetais? contrações/dor?",
    "Pesquisar sintomas de pré-eclâmpsia em toda gestante ≥ 20 semanas e puérpera com cefaleia",
    "Especular antes do toque se sangramento (placenta prévia) ou perda de líquido (evitar toque na RPM)",
    "Medicamentos e exames de imagem necessários não devem ser negados por estar grávida; escolher opções seguras",
    "Gestante Rh negativo com sangramento ou trauma: anti-D"
  ],
  fataisExcluir: [
    "Pré-eclâmpsia grave / eclâmpsia / HELLP (ver hipertensao-gestacao)",
    "Hemorragia: DPP, placenta prévia, rotura uterina, ectópica rota (1º trimestre)",
    "Sepse materna",
    "TEP / TVP",
    "Cardiomiopatia periparto, dissecção de aorta, IAM",
    "Trombose venosa cerebral (puerpério)",
    "Abdome agudo cirúrgico (apendicite é a causa não obstétrica mais comum)"
  ],
  proximaDecisao: "Queixa obstétrica ≥ 20–22 semanas: avaliação pelo obstetra/maternidade de referência (vaga sempre garantida — 'vaga sempre'). Instável: estabilizar no próprio PS e transferir com médico. Queixa clínica não obstétrica e feto bem: tratar no PS com medicação segura e encaminhar ao pré-natal.",
  clinica: {
    anamnese: [
      "IG, número de gestações, partos (via), abortos; risco do pré-natal",
      "Queixa principal e início; sangramento, líquido, movimentos, contrações",
      "Cefaleia, visão, epigastralgia, edema súbito, dispneia",
      "Febre, disúria, corrimento, tosse",
      "Doenças prévias, medicações, alergias, tipagem Rh, resultado do GBS",
      "Violência doméstica (perguntar em privado)"
    ],
    exameFisico: [
      "PA (sentada, manguito adequado), FC, FR, SpO₂, T, consciência",
      "Altura uterina, tônus, dinâmica uterina (10 min), apresentação (Leopold)",
      "BCF por 1 min (após contração)",
      "Edema, reflexos, ausculta cardiopulmonar, membros inferiores",
      "Especular/toque conforme queixa"
    ],
    diferenciais: [
      { dx: "Perda de líquido", pista: "RPM vs urina vs corrimento — especular (ver rotura-membranas)" },
      { dx: "Diminuição de movimentos fetais", pista: "BCF + CTG + USG (ver vitalidade-fetal)" },
      { dx: "Dor/contrações", pista: "Trabalho de parto (prematuro?), DPP, ITU, apendicite, colecistite, torção anexial" },
      { dx: "Sangramento < 20 semanas", pista: "Abortamento, ectópica, mola (fichas abortamento, gravidez-ectopica, doenca-trofoblastica)" },
      { dx: "Sangramento ≥ 20 semanas", pista: "Prévia, DPP, vasa prévia, rotura (ver sangramento-segunda-metade)" },
      { dx: "Febre", pista: "ITU/pielonefrite, corioamnionite, síndrome gripal, dengue, endometrite e mastite no puerpério" },
      { dx: "Cefaleia", pista: "Pré-eclâmpsia, enxaqueca, cefaleia pós-raqui, trombose venosa cerebral" }
    ],
    gravidade: [
      "MEOWS: 1 parâmetro vermelho ou 2 amarelos = acionar médico imediatamente (tabela)",
      "Classificação de risco MS: vermelho atendimento imediato; laranja até 15 min; amarelo até 30 min; verde até 120 min; azul não urgente (atendimento por ordem de chegada ou encaminhamento à UBS)",
      "Índice de choque (FC/PAS) ≥ 0,9 = perda sanguínea significativa"
    ]
  },
  exames: [
    {
      nome: "Exames iniciais conforme queixa",
      pedido: "Hemograma. Tipagem ABO/Rh se desconhecida. Urina tipo 1 e urocultura (dor, febre, contrações). Teste rápido de sífilis e HIV se não feitos no 3º trimestre. Glicemia capilar.",
      porQue: "Rastreio rápido das causas mais comuns.",
      esperar: "Hb ≥ 11 g/dL; leucócitos até ~15.000 podem ser normais.",
      interpretacao: "Bacteriúria com ou sem sintomas: tratar (ver itu-gestante).",
      limitacoes: "—"
    },
    {
      nome: "Laboratório de pré-eclâmpsia",
      pedido: "Hemograma com plaquetas, creatinina, AST, ALT, LDH, bilirrubinas, relação proteína/creatinina urinária.",
      porQue: "PA ≥ 140/90 após 20 semanas ou cefaleia/epigastralgia.",
      esperar: "Normais.",
      interpretacao: "Ver hipertensao-gestacao.",
      limitacoes: "—"
    },
    {
      nome: "Vitalidade fetal",
      pedido: "Cardiotocografia (≥ 26–28 semanas). USG obstétrica conforme queixa.",
      porQue: "Diminuição de movimentos, dor, sangramento, trauma, hipertensão.",
      esperar: "Categoria I / reativa.",
      interpretacao: "Ver vitalidade-fetal.",
      limitacoes: "Antes de 26 semanas: só BCF."
    },
    {
      nome: "Imagem na gestação",
      pedido: "USG é a 1ª escolha. RX, TC e cintilografia quando indicados, com proteção abdominal se fora da área. RM sem gadolínio.",
      porQue: "Não atrasar diagnóstico materno.",
      esperar: "—",
      interpretacao: "Exames diagnósticos usuais têm dose fetal muito abaixo de 50 mGy (sem risco de malformação). Contraste iodado pode ser usado se necessário.",
      limitacoes: "Evitar gadolínio."
    }
  ],
  tratamento: [
    {
      droga: "Paracetamol (dor/febre)",
      linha: "l1",
      dose: "500–1.000 mg",
      via: "VO ou IV",
      intervalo: "6/6 h",
      duracao: "Enquanto necessário",
      monitorizacao: "—",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Máximo 4 g/dia. Analgésico de escolha na gestação"
    },
    {
      droga: "Dipirona",
      linha: "alt",
      dose: "1 g",
      via: "IV ou VO",
      intervalo: "6/6 h",
      duracao: "Curta",
      monitorizacao: "—",
      contraindicacoes: "Bula: evitar no 1º e 3º trimestres; alergia",
      ajustes: "Uso pontual no 2º trimestre se paracetamol insuficiente"
    },
    {
      droga: "Metoclopramida (náusea/vômito)",
      linha: "l1",
      dose: "10 mg",
      via: "IV lento ou VO",
      intervalo: "8/8 h",
      duracao: "Curta",
      monitorizacao: "Sintomas extrapiramidais",
      contraindicacoes: "—",
      ajustes: "Alternativas: dimenidrinato; ondansetrona após 1º trimestre (ver nauseas-vomitos-gestacao)"
    },
    {
      droga: "Escopolamina (butilbrometo) — cólica",
      linha: "alt",
      dose: "20 mg",
      via: "IV lento ou VO",
      intervalo: "8/8 h",
      duracao: "Curta",
      monitorizacao: "Taquicardia",
      contraindicacoes: "Não mascarar trabalho de parto ou abdome agudo",
      ajustes: "Reavaliar se dor persiste"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "l1",
      dose: "300 mcg (1.500 UI)",
      via: "IM",
      intervalo: "Dose única em até 72 h",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Rh positivo; já sensibilizada",
      ajustes: "Rh negativo com sangramento, trauma abdominal, procedimento invasivo, abortamento ou ectópica"
    },
    {
      droga: "AINE (ibuprofeno, diclofenaco, cetoprofeno), iECA/BRA, varfarina, misoprostol fora de indicação obstétrica, fluoroquinolonas, tetraciclinas",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "AINE: evitar a partir de 20 semanas (oligoâmnio, fechamento do ducto arterioso). iECA/BRA: fetotoxicidade. Varfarina: teratogênica",
      ajustes: "No puerpério/amamentação, AINE é permitido"
    }
  ],
  destino: {
    agora: [
      "Vermelho/laranja: sala de emergência; acionar obstetra; estabilizar e transferir para maternidade se o serviço não tiver obstetrícia",
      "Queixa obstétrica ≥ 20–22 semanas em UPA sem obstetra: contato com maternidade de referência e transporte adequado"
    ],
    reavaliar: [
      "Sinais vitais/MEOWS conforme gravidade (de 15/15 min a 4/4 h)",
      "BCF e sintomas após analgesia ou hidratação"
    ],
    alta: [
      "Sinais vitais normais, PA < 140/90, sem sangramento, líquido ou contrações, feto bem (BCF/CTG), queixa resolvida",
      "Orientar sinais de alerta, registrar atendimento no cartão da gestante e retorno ao pré-natal em até 7 dias"
    ],
    observacao: [
      "Contrações sem modificação cervical, hiperêmese leve, PA limítrofe sem sintomas: observação de algumas horas com reavaliação"
    ],
    internacao: [
      "Pré-eclâmpsia, trabalho de parto, RPM, sangramento ≥ 20 semanas, pielonefrite, hiperêmese com desidratação, sepse"
    ],
    transferencia: [
      "Gestante instável: estabilizar antes, com acesso venoso, medicações em curso (MgSO₄, anti-hipertensivo, uterotônico) e médico acompanhando",
      "Prematuro < 34 semanas: maternidade com UTI neonatal"
    ]
  },
  prescricao: {
    hospitalar: "GESTANTE NO PS — SINTOMÁTICOS (IG: ___ semanas)\n1. Decúbito lateral esquerdo se ≥ 20 semanas.\n2. Paracetamol 750 mg VO (ou 1 g IV) de 6/6 h se dor ou febre.\n3. Metoclopramida 10 mg IV lento (diluída em 10 mL de SF 0,9%) de 8/8 h se náusea ou vômito.\n4. Escopolamina (butilbrometo) 20 mg IV lento de 8/8 h se cólica (reavaliar causa).\n5. Ringer lactato 500–1.000 mL IV se desidratação (cautela na pré-eclâmpsia).\n6. Se Rh negativo e sangramento/trauma: imunoglobulina anti-D 300 mcg IM, dose única.\n7. Controles: PA, FC, FR, SpO₂, T (MEOWS) de 1/1 h a 4/4 h; BCF de 1/1 h; dinâmica uterina; sangramento ou perda de líquido.",
    ambulatorial: "USO ORAL\n1. Paracetamol 500 mg -------------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre (máximo 8 comprimidos por dia).\n2. Metoclopramida 10 mg ----------------------------- 10 comprimidos\n   Tomar 1 comprimido 30 minutos antes das refeições, até 3 vezes ao dia, se enjoo."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se: sangramento pela vagina, perda de líquido, bebê mexendo menos, dor forte ou barriga dura, contrações regulares antes de 37 semanas",
    "Voltar imediatamente se: dor de cabeça forte, visão embaçada, dor no estômago, falta de ar, inchaço súbito, febre, convulsão",
    "Não tomar remédio por conta própria; anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida) não devem ser usados na gravidez",
    "Levar o cartão da gestante em todo atendimento e mostrar este atendimento no pré-natal",
    "Após o parto, os mesmos sinais valem por 6 semanas (pressão alta pode aparecer no puerpério)"
  ],
  tabelas: [
    {
      titulo: "MEOWS — gatilhos (CEMACH 2007 / Singh 2012)",
      colunas: ["Parâmetro", "Amarelo", "Vermelho"],
      linhas: [
        ["Temperatura (°C)", "35–36", "< 35 ou ≥ 38"],
        ["PAS (mmHg)", "150–160 ou 90–100", "> 160 ou < 90"],
        ["PAD (mmHg)", "90–100", "> 100"],
        ["FC (bpm)", "100–120 ou 40–50", "> 120 ou < 40"],
        ["FR (irpm)", "21–30", "< 10 ou > 30"],
        ["SpO₂ (%)", "—", "< 95"],
        ["Consciência", "Responde à voz", "Responde só à dor ou não responde"]
      ],
      nota: "Acionar avaliação médica imediata com 1 vermelho ou 2 amarelos simultâneos. Os pontos de corte variam entre versões e serviços: conferir o protocolo local."
    },
    {
      titulo: "Fisiologia da gestação que muda a interpretação",
      colunas: ["Parâmetro", "Na gestação"],
      linhas: [
        ["FC", "Aumenta 10–20 bpm"],
        ["PA", "Cai no 2º trimestre e volta ao basal no termo; ≥ 140/90 nunca é normal"],
        ["Volemia", "Aumenta até ~50%: sinais de choque aparecem tarde"],
        ["PaCO₂ / HCO₃", "PaCO₂ ~30 mmHg; HCO₃ ~18–22 (alcalose respiratória compensada)"],
        ["Hb", "Queda dilucional; anemia se < 11 g/dL (< 10,5 no 2º trimestre)"],
        ["Leucócitos", "Até ~15.000 (maior no trabalho de parto)"],
        ["Creatinina", "Menor que fora da gestação; valor 'normal' de não gestante pode indicar lesão renal"],
        ["Fibrinogênio, D-dímero", "Aumentados (D-dímero perde valor diagnóstico)"],
        ["Esvaziamento gástrico", "Lento: risco de aspiração na intubação"]
      ]
    },
    {
      titulo: "Classificação de risco em obstetrícia (MS)",
      colunas: ["Cor", "Tempo", "Exemplos"],
      linhas: [
        ["Vermelho", "Imediato", "Convulsão, choque, PA ≥ 160/110 com sintomas, sangramento intenso, prolapso de cordão, expulsivo, PCR"],
        ["Laranja", "Até 15 min", "PA ≥ 160/110 sem sintomas ou ≥ 140/90 com sintomas, sangramento moderado, dor intensa, febre com sinais de sepse, BCF alterado, ausência de movimentos fetais"],
        ["Amarelo", "Até 30 min", "PA ≥ 140/90 sem sintomas, perda de líquido, diminuição de movimentos, contrações, febre, dor moderada, vômitos persistentes"],
        ["Verde", "Até 120 min", "Queixas leves, sangramento discreto no 1º trimestre estável, queixas urinárias leves"],
        ["Azul", "Não urgente", "Queixas crônicas, consultas de rotina: encaminhar à UBS"]
      ],
      nota: "Resumo. Usar os fluxogramas do Manual de Acolhimento e Classificação de Risco em Obstetrícia do MS para cada queixa."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Acolhimento e Classificação de Risco em Obstetrícia (2017)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "CEMACH — Saving Mothers' Lives (2007) e Singh S et al. — A validation study of the CEMACH recommended modified early obstetric warning system (MEOWS), Anaesthesia (2012)",
    "OPAS/OMS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018) — índice de choque",
    "ACOG — Committee Opinion nº 723: Guidelines for diagnostic imaging during pregnancy and lactation (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
