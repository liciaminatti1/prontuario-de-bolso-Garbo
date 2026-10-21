// Doença do refluxo gastroesofágico
registrarFicha({
  id: "drge",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Doença do refluxo gastroesofágico (DRGE)",
  resumo: "Pirose (queimação retroesternal) e regurgitação incômodas, ≥ 2 vezes por semana, ou complicações (esofagite, estenose, Barrett). Sem alarme: prova terapêutica com IBP por 8 semanas e medidas comportamentais. Lactente: ver ficha refluxo-lactente.",
  palavrasChave: "drge refluxo gastroesofagico azia pirose regurgitacao esofagite barrett hernia de hiato omeprazol pantoprazol ibp tosse rouquidao globus",
  critico: {
    tempo: "Disfagia ou perda de peso → EDA",
    texto: "Pirose com disfagia, odinofagia, perda de peso, anemia, sangramento ou vômitos persistentes exige endoscopia antes do tratamento empírico. Dor torácica: excluir causa cardíaca primeiro."
  },
  alarmes: [
    "Disfagia (sobretudo progressiva) ou odinofagia",
    "Perda de peso não intencional",
    "Hematêmese, melena ou anemia ferropriva",
    "Vômitos persistentes",
    "Massa ou linfonodo palpável",
    "Dor torácica não esclarecida (avaliar coração antes)",
    "Sintomas de longa data (≥ 5 anos) em homem > 50 anos, branco, obeso, tabagista ou com história familiar de Barrett/adenocarcinoma (rastrear Barrett)"
  ],
  condutaInicial: [
    "Diagnóstico clínico: pirose e regurgitação típicas sem alarme",
    "Medidas: perda de peso se sobrepeso, elevar a cabeceira (10–20 cm) se sintomas noturnos, não deitar 2–3 h após jantar, parar de fumar, reduzir álcool e alimentos que desencadeiam",
    "IBP 1 vez ao dia, 30–60 min antes do café, por 8 semanas",
    "Sem resposta: conferir adesão e horário; passar para 2 vezes ao dia ou trocar de IBP",
    "Resposta: tentar suspender ou reduzir para a menor dose eficaz / sob demanda",
    "Sem resposta ao IBP otimizado, recidiva ao suspender ou alarme: EDA"
  ],
  fataisExcluir: [
    "Síndrome coronariana aguda (dor torácica)",
    "Adenocarcinoma de esôfago ou câncer gástrico",
    "Esofagite eosinofílica (disfagia, impactação alimentar, atopia)",
    "Esofagite infecciosa (imunossuprimido, odinofagia)",
    "Esofagite por comprimido (doxiciclina, AINE, bisfosfonato, potássio)"
  ],
  proximaDecisao: "Boa resposta em 8 semanas → desmame ou dose sob demanda. Recidiva ao suspender ou necessidade contínua de IBP → EDA para confirmar DRGE (após 2–4 semanas sem IBP) e guiar manutenção. Esofagite grave (LA C/D) ou Barrett → IBP contínuo e seguimento. Refratária com EDA normal → pHmetria/impedanciometria com gastroenterologista.",
  clinica: {
    anamnese: [
      "Pirose e regurgitação: frequência, horário, relação com refeições e decúbito",
      "Sintomas extraesofágicos: tosse crônica, rouquidão, pigarro, asma de difícil controle, erosão dentária",
      "Sinais de alarme (disfagia, odinofagia, perda de peso, sangramento, vômitos)",
      "Fatores: obesidade, gestação, tabagismo, álcool, refeições volumosas e tardias",
      "Medicamentos que pioram: nitratos, bloqueadores de canal de cálcio, anticolinérgicos, benzodiazepínicos, teofilina; que lesam: AINE, bisfosfonato, doxiciclina, KCl, ferro",
      "Resposta prévia a IBP e uso atual (dose, horário)"
    ],
    exameFisico: [
      "IMC e circunferência abdominal",
      "Orofaringe e dentes (erosão)",
      "Palidez, linfonodos, massa abdominal (alarme)",
      "Exame geralmente normal"
    ],
    diferenciais: [
      { dx: "Doença coronariana", pista: "Dor relacionada a esforço, fatores de risco" },
      { dx: "Dispepsia funcional / úlcera", pista: "Dor epigástrica predominante, plenitude" },
      { dx: "Pirose funcional / hipersensibilidade ao refluxo", pista: "Sintomas típicos com EDA e pHmetria normais" },
      { dx: "Esofagite eosinofílica", pista: "Adulto jovem, disfagia a sólidos, impactação, atopia" },
      { dx: "Acalasia", pista: "Disfagia para sólidos e líquidos, regurgitação de alimento não digerido, perda de peso" },
      { dx: "Gastroparesia", pista: "Diabético, vômitos tardios, plenitude" },
      { dx: "Síndrome de ruminação", pista: "Regurgitação sem esforço logo após comer, sem náusea" }
    ],
    gravidade: [
      "Esofagite (Los Angeles): A e B leves a moderadas; C e D graves",
      "Lyon 2.0 (2023): DRGE confirmada com esofagite LA B, C ou D, Barrett longo, estenose péptica, ou tempo de exposição ácida > 6% na pHmetria; < 4% é normal",
      "DRGE refratária: sintomas persistentes apesar de IBP 2 vezes ao dia por 8 semanas com adesão e horário corretos",
      "Complicações: estenose, sangramento, Barrett, adenocarcinoma"
    ]
  },
  exames: [
    {
      nome: "Endoscopia digestiva alta",
      pedido: "Endoscopia digestiva alta com biópsias se necessário. Indicação: DRGE com sinal de alarme / refratária ao IBP / recidiva após suspensão / rastreio de Barrett. Suspender IBP 2–4 semanas antes se objetivo for confirmar DRGE (salvo alarme).",
      porQue: "Avalia esofagite, Barrett, estenose, neoplasia, hérnia de hiato.",
      esperar: "Normal em grande parte dos pacientes (DRGE não erosiva).",
      interpretacao: "LA B/C/D ou Barrett confirmam DRGE. LA A é inconclusiva. Barrett → seguimento conforme displasia.",
      limitacoes: "EDA normal não exclui DRGE; uso de IBP pode cicatrizar esofagite e mascarar o diagnóstico."
    },
    {
      nome: "pHmetria / impedanciopHmetria de 24 h",
      pedido: "pHmetria esofágica de 24 h (ou impedanciopHmetria) sem IBP por 7 dias. Indicação: DRGE refratária com EDA normal / sintomas atípicos / avaliação pré-cirúrgica.",
      porQue: "Confirma ou exclui refluxo patológico e correlaciona sintomas.",
      esperar: "—",
      interpretacao: "Tempo de exposição ácida > 6% = DRGE; < 4% = normal; 4–6% = inconclusivo (Lyon 2.0).",
      limitacoes: "Acesso restrito; via gastroenterologia. Manometria antes de cirurgia antirrefluxo."
    },
    {
      nome: "Eletrocardiograma",
      pedido: "Eletrocardiograma de 12 derivações. Indicação: dor torácica atípica.",
      porQue: "Excluir causa cardíaca antes de atribuir dor torácica à DRGE.",
      esperar: "Normal.",
      interpretacao: "Alterado ou fatores de risco → investigação cardiológica.",
      limitacoes: "ECG normal não exclui DAC."
    }
  ],
  tratamento: [
    {
      droga: "Omeprazol",
      linha: "l1",
      dose: "20 mg (até 40 mg)",
      via: "Oral, 30–60 min antes do café",
      intervalo: "1 vez ao dia; se resposta parcial, 2 vezes ao dia (antes do café e do jantar)",
      duracao: "8 semanas; depois menor dose eficaz, sob demanda ou suspender",
      monitorizacao: "Sintomas; em uso prolongado, B12 e magnésio se sintomas",
      contraindicacoes: "Uso com rilpivirina, nelfinavir",
      ajustes: "Alternativas: pantoprazol 40 mg (preferir com clopidogrel), esomeprazol 20–40 mg, lansoprazol 30 mg. Esofagite LA C/D e Barrett: manutenção contínua. Gestação: omeprazol pode ser usado se medidas e antiácidos falharem"
    },
    {
      droga: "Antiácido (hidróxido de alumínio + magnésio) ou alginato",
      linha: "adj",
      dose: "10–20 mL",
      via: "Oral",
      intervalo: "Após refeições e ao deitar, se sintomas",
      duracao: "Sob demanda",
      monitorizacao: "—",
      contraindicacoes: "DRC avançada",
      ajustes: "Alívio rápido de sintoma esporádico; 1ª opção na gestação junto com medidas comportamentais. Separar 2 h de outros remédios"
    },
    {
      droga: "Famotidina",
      linha: "alt",
      dose: "20 mg",
      via: "Oral",
      intervalo: "12/12 h ou à noite",
      duracao: "Sob demanda ou adjuvante noturno",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Menos eficaz que IBP. Ajuste renal (ClCr < 50: metade da dose). Ranitidina saiu do mercado (nitrosaminas)"
    },
    {
      droga: "Metoclopramida / domperidona",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar procinético isolado ou de rotina na DRGE",
      ajustes: "Sem benefício consistente; risco de discinesia tardia (metoclopramida) e QT (domperidona)"
    },
    {
      droga: "Cirurgia antirrefluxo (fundoplicatura)",
      linha: "alt",
      dose: "—",
      via: "Laparoscópica",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "DRGE não confirmada objetivamente",
      ajustes: "Considerar em regurgitação volumosa refratária, hérnia de hiato grande ou paciente que não quer IBP contínuo, sempre com DRGE comprovada (EDA/pHmetria) e manometria"
    }
  ],
  destino: {
    agora: [
      "Sem alarme: medidas + IBP 8 semanas",
      "Com alarme: EDA (prioridade se disfagia, perda de peso ou sangramento)"
    ],
    reavaliar: [
      "8 semanas após iniciar IBP",
      "Tentar desmame após controle; reavaliar se recidiva"
    ],
    alta: [
      "Controle com medidas e IBP sob demanda: seguimento na UBS",
      "Esofagite grave ou Barrett: IBP contínuo e EDA de controle conforme especialista"
    ],
    observacao: ["—"],
    internacao: [
      "Impactação alimentar (não consegue engolir saliva), sangramento ativo"
    ],
    transferencia: [
      "PS: impactação alimentar, hematêmese/melena, dor torácica suspeita",
      "Gastroenterologia: refratária ao IBP 2×/dia, Barrett, estenose, disfagia, candidato a cirurgia"
    ]
  },
  prescricao: {
    ambulatorial: "DRGE TÍPICA SEM ALARME\nUSO ORAL\n1. Omeprazol 20 mg ------------------------------------------- 56 cápsulas\n   Tomar 1 cápsula em jejum, 30 a 60 minutos antes do café da manhã, por 8 semanas.\n   (Se melhora parcial após 4 semanas: 1 cápsula antes do café e 1 antes do jantar; nesse caso, nova receita de 56 cápsulas para completar as 8 semanas.)\n2. Hidróxido de alumínio + hidróxido de magnésio (suspensão) --- 1 frasco\n   Tomar 10 a 20 mL após as refeições e ao deitar se azia. Não tomar junto com outros remédios.\n\nAPÓS CONTROLE (DESMAME)\n- Omeprazol 20 mg 1 cápsula apenas nos dias com sintomas (sob demanda) ou suspender; reavaliar se os sintomas voltarem.\n\nORIENTAÇÕES\n- Elevar a cabeceira da cama 15 a 20 cm (calços sob os pés da cama).\n- Jantar pelo menos 3 horas antes de deitar."
  },
  orientacoesRetorno: [
    "Emagrecer, mesmo pouco, melhora muito o refluxo",
    "Se os sintomas forem à noite, eleve a cabeceira da cama com calços (travesseiros não resolvem) e não deite logo após comer",
    "Evite refeições grandes, gordura, álcool, cigarro e alimentos que você percebeu que pioram; não é preciso cortar tudo",
    "Tome o omeprazol em jejum, 30 a 60 minutos antes do café, todos os dias durante o tratamento",
    "Procure atendimento imediato se sentir dor no peito com falta de ar ou suor frio, vomitar sangue, tiver fezes pretas ou se a comida entalar e você não conseguir engolir nem saliva",
    "Volte antes se tiver dificuldade para engolir, perda de peso ou anemia",
    "Retorno em 8 semanas para avaliar a resposta e planejar a retirada do remédio"
  ],
  fontes: [
    "ACG — Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease (Am J Gastroenterol, 2022)",
    "AGA — Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD (Clin Gastroenterol Hepatol, 2022)",
    "Consenso de Lyon 2.0 — Updates to the modern diagnosis of GERD (Gut, 2023)",
    "Moraes-Filho J et al. — Brazilian consensus on gastroesophageal reflux disease (Am J Gastroenterol, 2002) — referência nacional, anterior às diretrizes acima",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
