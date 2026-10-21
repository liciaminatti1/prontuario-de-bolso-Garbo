// Fibrilação atrial aguda
registrarFicha({
  id: "fibrilacao-atrial",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Fibrilação atrial no PS",
  resumo: "Ritmo irregularmente irregular sem onda P, com ou sem resposta ventricular rápida. Decidir entre cardioversão, controle de frequência e anticoagulação.",
  palavrasChave: "fa fibrilacao atrial flutter arritmia palpitacao cardioversao amiodarona metoprolol diltiazem anticoagulacao cha2ds2 apixabana",
  critico: {
    tempo: "Instável = cardioversão elétrica",
    texto: "Hipotensão, choque, EAP, isquemia ou rebaixamento atribuíveis à FA: cardioversão elétrica sincronizada imediata."
  },
  alarmes: [
    "Instabilidade: PAS < 90, EAP, dor isquêmica, rebaixamento",
    "FC > 150 bpm persistente",
    "QRS largo e muito rápido (> 250) → pré-excitação (WPW): não usar bloqueadores do nó AV",
    "Sinais de AVC/embolia periférica",
    "Gatilho grave: sepse, TEP, tireotoxicose, SCA"
  ],
  condutaInicial: [
    "ECG de 12 derivações, monitor, acesso",
    "Instável: sedação + cardioversão sincronizada 120–200 J bifásico",
    "Estável: tratar a causa e controlar frequência (alvo inicial < 110 bpm)",
    "Definir tempo de início (≤ 24 h, 24–48 h, > 48 h ou desconhecido)",
    "Calcular CHA₂DS₂-VA e risco de sangramento; iniciar anticoagulação quando indicada"
  ],
  fataisExcluir: [
    "FA com pré-excitação (WPW)",
    "SCA",
    "TEP",
    "Sepse",
    "Tireotoxicose",
    "AVC cardioembólico"
  ],
  proximaDecisao: "Estável: preferir controle de frequência e aguardar reversão espontânea (\"esperar e ver\"). Cardioversão precoce só se início claramente recente (ESC 2024: ≤ 24 h) e anticoagulação iniciada. Duração maior ou desconhecida → 3 semanas de anticoagulação antes (ou ETE sem trombo) e 4 semanas depois.",
  clinica: {
    anamnese: [
      "Início dos sintomas (define estratégia), episódios prévios",
      "Palpitação, dispneia, dor torácica, síncope, déficit neurológico",
      "Gatilhos: álcool, infecção, cirurgia, hipertireoidismo, apneia do sono, estimulantes",
      "Anticoagulante em uso e adesão",
      "Cardiopatia estrutural, IC, valvopatia (estenose mitral, prótese mecânica)"
    ],
    exameFisico: [
      "PA, FC (no ECG; o pulso subestima), SpO₂",
      "Congestão, sopros",
      "Sinais de tireotoxicose",
      "Exame neurológico sumário"
    ],
    diferenciais: [
      { dx: "Flutter atrial", pista: "Ondas F em dente de serra, FC ~150" },
      { dx: "Taquicardia atrial multifocal", pista: "≥ 3 morfologias de P; DPOC" },
      { dx: "Extrassístoles frequentes", pista: "Ritmo de base sinusal" },
      { dx: "FA pré-excitada", pista: "QRS largo, variável, muito rápido" }
    ],
    gravidade: [
      "Instável: cardioversão imediata",
      "IC com FE reduzida: evitar diltiazem/verapamil",
      "Pré-excitação: procainamida ou cardioversão elétrica"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações.",
      porQue: "Confirmar FA, isquemia, pré-excitação.",
      esperar: "RR irregular, ausência de P, linha de base fibrilatória.",
      interpretacao: "QRS largo irregular muito rápido → pensar WPW.",
      limitacoes: "—"
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, creatinina, sódio, potássio, magnésio, TSH e T4 livre, glicemia; troponina se dor ou suspeita de SCA; INR se em varfarina.",
      porQue: "Gatilhos e dose de anticoagulante.",
      esperar: "—",
      interpretacao: "Corrigir K e Mg antes de antiarrítmicos.",
      limitacoes: "Troponina discretamente elevada é comum com FC alta."
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico (ETE se cardioversão sem 3 semanas de anticoagulação).",
      porQue: "FE, valvopatia, átrio esquerdo; trombo no ETE.",
      esperar: "—",
      interpretacao: "FE reduzida muda escolha de drogas.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cardioversão elétrica sincronizada",
      linha: "l1",
      dose: "120–200 J bifásico (aumentar se falhar)",
      via: "Pás anterolateral ou anteroposterior",
      intervalo: "Até 3 tentativas",
      duracao: "—",
      monitorizacao: "Ritmo, via aérea durante sedação",
      contraindicacoes: "Intoxicação digitálica",
      ajustes: "Sedação: ex. etomidato 0,15–0,3 mg/kg ou propofol. Anticoagular antes ou logo após"
    },
    {
      droga: "Metoprolol",
      linha: "l1",
      dose: "2,5–5 mg IV em 2 min; repetir a cada 5 min (máx 15 mg). Oral: 25–100 mg 12/12h",
      via: "IV / VO",
      intervalo: "Conforme FC",
      duracao: "—",
      monitorizacao: "FC, PA",
      contraindicacoes: "IC aguda descompensada, broncoespasmo grave, hipotensão, pré-excitação",
      ajustes: "Primeira escolha para controle de frequência na maioria"
    },
    {
      droga: "Diltiazem",
      linha: "alt",
      dose: "0,25 mg/kg IV em 2 min (≈ 20 mg); repetir 0,35 mg/kg após 15 min",
      via: "IV",
      intervalo: "Manutenção 5–15 mg/h ou VO 60 mg 6–8/8h",
      duracao: "—",
      monitorizacao: "PA, FC",
      contraindicacoes: "FE ≤ 40%, hipotensão, pré-excitação",
      ajustes: "—"
    },
    {
      droga: "Amiodarona",
      linha: "alt",
      dose: "150–300 mg (5 mg/kg) IV em 30–60 min, depois 900–1.200 mg em 24 h",
      via: "IV (diluir em SG 5%)",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "PA, FC, QT, flebite",
      contraindicacoes: "Bradicardia, BAV avançado",
      ajustes: "Útil na IC com FE reduzida e na hipotensão; pode reverter o ritmo (atenção à anticoagulação)"
    },
    {
      droga: "Deslanosídeo / digoxina",
      linha: "adj",
      dose: "Deslanosídeo 0,4 mg IV (até 0,8 mg) · digoxina 0,125–0,25 mg/dia VO",
      via: "IV / VO",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "FC, função renal, K",
      contraindicacoes: "Pré-excitação, hipocalemia",
      ajustes: "Associar na IC; início de ação lento"
    },
    {
      droga: "Anticoagulação (apixabana)",
      linha: "l1",
      dose: "5 mg 12/12h (2,5 mg 12/12h se ≥ 2 de: idade ≥ 80, peso ≤ 60 kg, creatinina ≥ 1,5)",
      via: "VO",
      intervalo: "12/12h",
      duracao: "Contínua se CHA₂DS₂-VA ≥ 2; ≥ 4 semanas após qualquer cardioversão",
      monitorizacao: "Sangramento, função renal",
      contraindicacoes: "Prótese mecânica, estenose mitral moderada/grave (usar varfarina), sangramento ativo",
      ajustes: "Rivaroxabana 20 mg/dia (15 mg se ClCr 15–49) ou varfarina (INR 2–3) são alternativas. Sem acesso a DOAC: enoxaparina → varfarina"
    }
  ],
  destino: {
    agora: [
      "Instável: cardioversão elétrica",
      "Estável: controle de frequência, buscar gatilho, decidir anticoagulação"
    ],
    reavaliar: [
      "FC e PA após cada dose",
      "ECG após cardioversão"
    ],
    alta: [
      "Estável, FC < 110 em repouso, sintomas controlados, sem gatilho grave",
      "Anticoagulante e controle de FC prescritos",
      "Seguimento com cardiologia ou UBS em 1–2 semanas"
    ],
    observacao: [
      "FA paroxística com reversão espontânea ou após cardioversão: algumas horas de monitorização"
    ],
    internacao: [
      "Instabilidade, IC descompensada, SCA, FC refratária, gatilho grave"
    ],
    transferencia: [
      "FA pré-excitada ou necessidade de ETE/ablação sem estrutura local"
    ]
  },
  prescricao: {
    hospitalar: "FA ESTÁVEL COM RESPOSTA VENTRICULAR RÁPIDA (peso: ___ kg)\n1. Dieta livre (jejum se cardioversão programada). Monitor cardíaco contínuo, PA e FC de 15/15 min na 1ª hora.\n2. Metoprolol (tartarato) 1 mg/mL — 5 mg (5 mL) IV lento em 2 min; repetir a cada 5 min se FC > 110 e PAS > 100, até 15 mg. Não usar se IC descompensada, broncoespasmo, hipotensão ou pré-excitação.\n   OU, se FE reduzida/hipotensão limítrofe:\n3. Amiodarona 50 mg/mL — 300 mg (6 mL) + SG 5% 250 mL IV em 1 h (bomba de infusão). Manutenção: 900 mg (18 mL) + SG 5% 500 mL IV em 24 h (≈ 21 mL/h). Usar SG 5% e, se possível, acesso calibroso (flebite).\n4. Deslanosídeo 0,2 mg/mL — 0,4 mg (2 mL) IV lento, pode repetir 0,2–0,4 mg (máx 0,8 mg/24 h) — associar na IC com FE reduzida.\n5. Anticoagulação (se CHA₂DS₂-VA ≥ 2, ou antes/depois de cardioversão): enoxaparina 1 mg/kg SC de 12/12 h (ClCr 15–30: 1 mg/kg 1×/dia) até iniciar anticoagulante oral.\n6. Corrigir potássio (alvo ≥ 4,0) e magnésio antes de antiarrítmicos.\n7. Tratar o gatilho (infecção, tireotoxicose, TEP, álcool, hipoxemia).\n\nFA INSTÁVEL — CARDIOVERSÃO ELÉTRICA SINCRONIZADA\n1. O₂, acesso, material de via aérea e aspirador à mão.\n2. Sedação: etomidato 2 mg/mL — 0,15–0,3 mg/kg IV (70 kg: 10–20 mg = 5–10 mL) ou propofol 10 mg/mL — 0,5–1 mg/kg IV lento.\n3. Choque sincronizado 120–200 J bifásico; aumentar a energia se falhar (até 3 tentativas).\n4. Enoxaparina 1 mg/kg SC (ou heparina IV) antes ou logo após, se não anticoagulado.",
    ambulatorial: "ALTA — CONTROLE DE FREQUÊNCIA E ANTICOAGULAÇÃO\nUSO ORAL\n1. Succinato de metoprolol 50 mg ----------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo. (Alternativa SUS: atenolol 25–50 mg 1 vez ao dia.)\n\nANTICOAGULANTE (escolher um)\n2. Varfarina 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sempre no mesmo horário. Fazer INR em 3–5 dias (alvo 2,0–3,0). Manter enoxaparina até INR ≥ 2 em 2 dosagens se cardioversão programada/alto risco.\n   OU\n2. Apixabana 5 mg ------------------------------ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo. (2,5 mg de 12/12 h se ≥ 2 de: idade ≥ 80 anos, peso ≤ 60 kg, creatinina ≥ 1,5 mg/dL.) Não disponível no Componente Básico do SUS.\n   OU\n2. Rivaroxabana 20 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o jantar (15 mg se ClCr 15–49).\n\nNão usar anticoagulante direto em prótese valvar mecânica ou estenose mitral moderada/grave (usar varfarina)."
  },
  orientacoesRetorno: [
    "Tomar o anticoagulante todos os dias, no horário certo; não suspender por conta própria, nem antes de dentista ou cirurgia sem orientação",
    "Varfarina: fazer o INR nas datas marcadas; evitar mudanças bruscas na alimentação (folhas verdes) e não usar anti-inflamatório ou chás sem orientação",
    "Voltar imediatamente se: fraqueza ou dormência de um lado do corpo, boca torta, fala enrolada, desmaio, falta de ar, dor no peito ou palpitação que não passa",
    "Voltar se sangramento: fezes pretas, urina com sangue, vômito com sangue, sangramento de gengiva ou nariz que não para",
    "Reduzir álcool; tratar apneia do sono, pressão alta e excesso de peso",
    "Consulta na UBS ou cardiologia em 1–2 semanas (INR em 3–5 dias se varfarina)"
  ],
  tabelas: [
    {
      titulo: "CHA₂DS₂-VA (ESC 2024 / SBC-SOBRAC 2025)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["C — Insuficiência cardíaca ou disfunção de VE", "1"],
        ["H — Hipertensão", "1"],
        ["A₂ — Idade ≥ 75 anos", "2"],
        ["D — Diabetes", "1"],
        ["S₂ — AVC, AIT ou embolia prévia", "2"],
        ["V — Doença vascular (IAM, DAOP, placa aórtica)", "1"],
        ["A — Idade 65–74 anos", "1"]
      ],
      nota: "Sexo feminino não pontua. ≥ 2: anticoagulação recomendada; 1: considerar. Prótese mecânica e estenose mitral moderada/grave: anticoagular sempre (varfarina). Reavaliar pelo menos 1 vez ao ano."
    }
  ],
  fontes: [
    "SOBRAC/SBC — Diretriz Brasileira de Fibrilação Atrial (Arq Bras Cardiol, 2025)",
    "ESC/EACTS 2024 Guidelines for the management of atrial fibrillation (CHA₂DS₂-VA; cardioversão > 24 h só após 3 semanas de anticoagulação ou ETE)",
    "ACC/AHA/ACCP/HRS 2023 Guideline for the Diagnosis and Management of Atrial Fibrillation"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
