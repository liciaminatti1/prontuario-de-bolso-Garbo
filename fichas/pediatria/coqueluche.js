// Coqueluche
registrarFicha({
  id: "coqueluche",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Coqueluche",
  resumo: "Infecção respiratória pela Bordetella pertussis com tosse paroxística prolongada, guincho inspiratório e vômitos pós-tosse; no lactente pequeno pode se apresentar como apneia e cianose. Grave em < 6 meses. Notificação compulsória, tratamento com macrolídeo e quimioprofilaxia de contatos.",
  palavrasChave: "coqueluche pertussis bordetella tosse comprida tosse paroxistica guincho apneia azitromicina claritromicina quimioprofilaxia contatos dtpa gestante notificacao",
  critico: {
    tempo: "Azitromicina + notificar no 1º atendimento",
    texto: "Caso suspeito: colher swab de nasofaringe, iniciar azitromicina sem esperar resultado, notificar e fazer quimioprofilaxia dos contatos indicados. Lactente < 6 meses: avaliar internação."
  },
  alarmes: [
    "Lactente < 3–6 meses (risco de apneia, pneumonia, hipertensão pulmonar e morte)",
    "Apneia, cianose ou bradicardia durante as crises",
    "Dificuldade para mamar, perda de peso, desidratação, vômitos após todas as mamadas",
    "Taquipneia ou dispneia entre as crises, SpO₂ < 95% (pneumonia)",
    "Leucocitose muito acentuada (marcador de gravidade e de hipertensão pulmonar no lactente)",
    "Convulsão ou rebaixamento de consciência"
  ],
  condutaInicial: [
    "Aplicar a definição de caso suspeito (tabela) e perguntar por contato com tosse prolongada",
    "Colher swab de nasofaringe para PCR em tempo real e cultura (de preferência antes ou até 3 dias do antibiótico)",
    "Iniciar azitromicina imediatamente (tratamento e quimioprofilaxia usam o mesmo esquema)",
    "Notificar à vigilância epidemiológica (ficha SINAN) já na suspeita",
    "Listar contatos domiciliares e próximos; indicar quimioprofilaxia e atualizar vacinação (penta/DTP, dTpa)"
  ],
  fataisExcluir: [
    "Apneia e morte súbita no lactente pequeno",
    "Pneumonia (por B. pertussis ou bacteriana secundária)",
    "Hipertensão pulmonar com hiperleucocitose",
    "Encefalopatia/convulsões"
  ],
  proximaDecisao: "Lactente < 3 meses (ou < 6 meses com apneia, cianose, dificuldade para mamar ou pneumonia) → internação. Demais casos sem gravidade → tratamento domiciliar com retorno em 48 h e ao longo da fase paroxística.",
  clinica: {
    anamnese: [
      "Duração da tosse e evolução: fase catarral (1–2 semanas, como resfriado), paroxística (2–6 semanas) e convalescença",
      "Paroxismos de tosse seguidos de guincho inspiratório, vômitos pós-tosse, cianose, apneia, engasgo",
      "Febre geralmente ausente ou baixa (febre alta sugere outra causa ou complicação)",
      "Vacinação da criança (penta/DTP) e dTpa da mãe na gestação",
      "Contato com adolescente ou adulto com tosse prolongada"
    ],
    exameFisico: [
      "Entre as crises a criança pode parecer bem",
      "FR, SpO₂, ausculta (normal fora de complicação)",
      "Hemorragia subconjuntival, petéquias em face (esforço da tosse)",
      "Peso e hidratação no lactente",
      "Observar uma crise, se possível"
    ],
    diferenciais: [
      { dx: "Bronquiolite / infecções virais (VSR, adenovírus)", pista: "Sibilos, febre, tosse não paroxística" },
      { dx: "Infecção por Chlamydia trachomatis no lactente", pista: "1–3 meses, tosse em staccato, conjuntivite prévia, eosinofilia" },
      { dx: "Mycoplasma pneumoniae", pista: "Escolar/adolescente, febre, infiltrado" },
      { dx: "Corpo estranho", pista: "Engasgo súbito, tosse localizada" },
      { dx: "Asma, refluxo, tosse pós-viral", pista: "Ausência de paroxismos típicos e de contato" }
    ],
    gravidade: [
      "Caso suspeito < 6 meses: tosse de qualquer tipo há ≥ 10 dias + ≥ 1 de: tosse paroxística, guincho inspiratório, vômitos pós-tosse, cianose, apneia, engasgo",
      "Caso suspeito ≥ 6 meses: tosse de qualquer tipo há ≥ 14 dias + ≥ 1 de: tosse paroxística, guincho inspiratório, vômitos pós-tosse",
      "Também é suspeito quem tem tosse (qualquer duração) e contato com caso confirmado",
      "Maior gravidade: < 6 meses, não vacinados, prematuros, cardiopatas e pneumopatas"
    ]
  },
  exames: [
    {
      nome: "PCR em tempo real e cultura para B. pertussis",
      pedido: "Swab de nasofaringe (haste ultrafina flexível, não usar algodão comum) para PCR em tempo real e cultura para Bordetella pertussis (meio de transporte Regan-Lowe) — enviar ao LACEN conforme fluxo da vigilância.",
      porQue: "Confirmar o caso e orientar a vigilância.",
      esperar: "PCR mais sensível nas primeiras 3–4 semanas de tosse.",
      interpretacao: "Positivo confirma. Negativo não exclui (coleta tardia ou após antibiótico); manter tratamento se clínica compatível.",
      limitacoes: "Sensibilidade cai após 3 semanas de tosse e após 3 dias de antibiótico."
    },
    {
      nome: "Hemograma",
      pedido: "Hemograma completo com contagem diferencial.",
      porQue: "Apoio diagnóstico e marcador de gravidade.",
      esperar: "Leucocitose com linfocitose absoluta na fase catarral/paroxística.",
      interpretacao: "Leucocitose muito alta em lactente pequeno → risco de hipertensão pulmonar; internar.",
      limitacoes: "Pode ser normal em adolescentes, adultos e vacinados."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA (e perfil) se taquipneia, febre, SpO₂ baixa ou ausculta alterada.",
      porQue: "Pesquisar pneumonia.",
      esperar: "Pode haver infiltrado peri-hilar (coração 'felpudo').",
      interpretacao: "Consolidação focal → associar tratamento para pneumonia bacteriana.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Azitromicina",
      linha: "l1",
      dose: "< 6 meses: 10 mg/kg/dia · ≥ 6 meses: 10 mg/kg no 1º dia (máx 500 mg) e 5 mg/kg do 2º ao 5º dia (máx 250 mg) · Adulto: 500 mg no 1º dia e 250 mg do 2º ao 5º dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "5 dias",
      monitorizacao: "Lactente < 1 mês: risco de estenose hipertrófica de piloro (vômitos em jato) — orientar e acompanhar",
      contraindicacoes: "Alergia a macrolídeo; QT longo",
      ajustes: "Preferida em < 1 mês. Mesmo esquema para quimioprofilaxia. Gestante: pode usar. Suspensão 200 mg/5 mL (40 mg/mL)"
    },
    {
      droga: "Claritromicina",
      linha: "alt",
      dose: "≥ 1 mês: 7,5 mg/kg/dose (máx 500 mg/dose) · Adulto: 500 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7 dias",
      monitorizacao: "Interações (CYP3A4)",
      contraindicacoes: "< 1 mês; gestação (evitar); uso de estatinas, colchicina e outras interações",
      ajustes: "Suspensão 125 mg/5 mL ou 250 mg/5 mL"
    },
    {
      droga: "Sulfametoxazol + trimetoprima (alergia/intolerância a macrolídeo)",
      linha: "alt",
      dose: "≥ 2 meses: 40 mg/kg/dia de SMX + 8 mg/kg/dia de TMP · Adulto: 800/160 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7 dias (tabela do MS reproduzida pela SBP/SBIm 2025; o CDC usa 14 dias)",
      monitorizacao: "Exantema, citopenias",
      contraindicacoes: "< 2 meses; gestante no 3º trimestre e lactante de RN (kernicterus); deficiência de G6PD",
      ajustes: "Suspensão 200/40 mg por 5 mL"
    }
  ],
  destino: {
    agora: [
      "Swab, azitromicina, notificação e lista de contatos no mesmo atendimento",
      "Lactente < 3 meses → internação"
    ],
    reavaliar: [
      "Retorno em 48 h e semanal durante a fase paroxística (peso, alimentação, crises com cianose)",
      "Contatos sintomáticos → tratar como casos"
    ],
    alta: [
      "Tratamento domiciliar se > 6 meses (ou 3–6 meses sem apneia/cianose), alimentando-se, com cuidador capaz de reconhecer apneia",
      "Afastamento de escola/creche/trabalho até completar 5 dias de azitromicina"
    ],
    observacao: [
      "Lactente 3–6 meses: observar algumas crises na unidade (cor, SpO₂, recuperação) antes de decidir"
    ],
    internacao: [
      "< 3 meses",
      "Apneia, cianose ou bradicardia nas crises, SpO₂ < 95%, pneumonia, convulsão",
      "Incapacidade de alimentar-se ou desidratação",
      "UTI: apneias repetidas, insuficiência respiratória, hiperleucocitose acentuada, hipertensão pulmonar"
    ],
    transferencia: [
      "UBS → hospital com pediatria via regulação/SAMU, em isolamento respiratório (gotículas)"
    ]
  },
  prescricao: {
    ambulatorial: "COQUELUCHE — CRIANÇA ≥ 6 MESES (exemplo 10 kg)\nUSO ORAL\n1. Azitromicina 200 mg/5 mL suspensão ------------ 1 frasco\n   1º dia: dar 2,5 mL (100 mg = 10 mg/kg).\n   2º ao 5º dia: dar 1,25 mL (50 mg = 5 mg/kg) 1 vez ao dia.\n\nLACTENTE < 6 MESES (exemplo 5 kg)\n1. Azitromicina 200 mg/5 mL suspensão ------------ 1 frasco\n   Dar 1,25 mL (50 mg = 10 mg/kg) 1 vez ao dia por 5 dias.\n\nADULTO / ADOLESCENTE (tratamento ou quimioprofilaxia)\n1. Azitromicina 500 mg ---------------------------- 3 comprimidos (ou 500 mg + 4 × 250 mg)\n   Tomar 500 mg no 1º dia e 250 mg (meio comprimido de 500 mg) 1 vez ao dia do 2º ao 5º dia.\n\nALTERNATIVA (macrolídeo contraindicado, ≥ 2 meses)\n1. Sulfametoxazol + trimetoprima 200/40 mg por 5 mL — 0,5 mL/kg/dose (20 mg/kg de SMX) de 12 em 12 horas por 7 dias.\n   Adulto: 800/160 mg 1 comprimido de 12 em 12 horas por 7 dias.\n\nQUIMIOPROFILAXIA DE CONTATOS: mesmas doses e duração do tratamento.",
    hospitalar: "COQUELUCHE — LACTENTE INTERNADO (peso: ___ kg)\n1. Isolamento para gotículas até completar 5 dias de antibiótico.\n2. Dieta: leite materno/fórmula em volumes menores e mais frequentes; sonda nasogástrica se não consegue mamar; hidratação venosa de manutenção se necessário.\n3. Monitor cardíaco e oximetria contínua (alarmes para apneia e bradicardia).\n4. O₂ por cateter nasal se SpO₂ < 92% ou cianose nas crises; aspiração suave de secreções de vias aéreas superiores durante as crises.\n5. Azitromicina 10 mg/kg VO (ou por sonda) 1 vez ao dia por 5 dias (< 6 meses); ≥ 6 meses: 10 mg/kg no D1 e 5 mg/kg D2–D5. Se via oral impossível: azitromicina IV na mesma dose, diluída em SF 0,9% a 2 mg/mL (infundir em 1 h) ou a 1 mg/mL (infundir em 3 h).\n6. Se pneumonia associada: acrescentar antibiótico conforme ficha pneumonia-crianca.\n7. Evitar estímulos que desencadeiam crises (manipulação excessiva).\n8. Controles: SpO₂ e FC contínuas; registrar número de crises, cianose e apneias; peso diário; hemograma a cada 24–48 h se leucocitose acentuada.\n9. Notificar e acionar a vigilância para os contatos."
  },
  orientacoesRetorno: [
    "A tosse pode durar semanas a meses mesmo com antibiótico; o remédio serve para parar a transmissão e reduzir complicações",
    "Ficar afastado de escola, creche e trabalho até completar 5 dias de azitromicina",
    "Todos da casa indicados pelo médico devem tomar o antibiótico preventivo e atualizar a vacina",
    "Voltar imediatamente se o bebê: parar de respirar, ficar roxo ou mole nas crises, não conseguir mamar, vomitar tudo, respirar rápido entre as crises ou tiver febre alta",
    "Gestantes: tomar a dTpa a partir de 20 semanas em toda gestação (protege o bebê nos primeiros meses)",
    "Retorno em 48 h e depois semanal até a melhora das crises"
  ],
  tabelas: [
    {
      titulo: "Quimioprofilaxia de contatos (Guia de Vigilância MS)",
      colunas: ["Contato", "Indicação"],
      linhas: [
        ["< 1 ano", "Sempre, independentemente da vacinação"],
        ["1 a < 7 anos", "Não vacinados, vacinação desconhecida ou < 4 doses de DTP/penta"],
        ["≥ 7 anos (contato íntimo e prolongado)", "Se convive com < 1 ano, gestante ou imunodeprimido; ou trabalha em serviço de saúde ou com crianças"],
        ["Gestantes e imunodeprimidos", "Sempre que contato próximo"],
        ["Profissional de saúde exposto sem máscara", "Sim"]
      ],
      nota: "Mesmo esquema do tratamento; indicado até 21 dias após a exposição. Atualizar vacinação dos contatos."
    }
  ],
  fontes: [
    "Ministério da Saúde — Nota Técnica Conjunta nº 165/2025-DPNI/SVSA/MS: tratamento, quimioprofilaxia e medidas de controle da coqueluche (2025)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed.: Coqueluche (2023–2024)",
    "Ministério da Saúde — Nota Técnica nº 65/2025-CGLAB/SVSA (coleta e transporte de amostras para coqueluche, 2025) e notas técnicas sobre coqueluche (2024–2025)",
    "Sociedade Brasileira de Pediatria / SBIm — Nota Técnica: Coqueluche, atualização (2025)",
    "CDC — Pertussis: Clinical Overview and Treatment/Postexposure Prophylaxis (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
