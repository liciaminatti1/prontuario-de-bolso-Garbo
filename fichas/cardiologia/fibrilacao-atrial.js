// Fibrilação atrial aguda
registrarFicha({
  id: "fibrilacao-atrial",
  especialidade: "cardiologia",
  caminho: "ps",
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
    "Definir tempo de início (< 48 h ou > 48 h/desconhecido)",
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
  proximaDecisao: "Estável, < 48 h e anticoagulação adequada → considerar cardioversão (química ou elétrica). > 48 h ou desconhecido → controle de frequência e anticoagular por 3 semanas antes (ou ETE).",
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
  fontes: [
    "ESC 2024 Guidelines for the management of atrial fibrillation (CHA₂DS₂-VA)",
    "SBC — II Diretrizes Brasileiras de Fibrilação Atrial (2016) e atualização",
    "AHA/ACC/ACCP/HRS 2023 Guideline for Atrial Fibrillation"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
