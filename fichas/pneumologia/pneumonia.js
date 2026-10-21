// Pneumonia adquirida na comunidade
registrarFicha({
  id: "pneumonia",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Pneumonia adquirida na comunidade",
  resumo: "Tosse, febre, dispneia ou dor pleurítica com achado focal ao exame ou infiltrado novo na radiografia, em paciente não hospitalizado recentemente.",
  palavrasChave: "pneumonia pac curb-65 crb-65 amoxicilina azitromicina ceftriaxona levofloxacino infiltrado tosse febre",
  critico: {
    tempo: "CURB-65 define o destino",
    texto: "0–1: ambulatorial. 2: considerar internação. ≥ 3: internar; 4–5 ou critérios de gravidade: avaliar UTI. Antibiótico precoce se sepse."
  },
  alarmes: [
    "Confusão mental nova",
    "FR ≥ 30, SpO₂ < 92% em ar ambiente",
    "PAS < 90 ou PAD ≤ 60",
    "Necessidade de vasopressor ou ventilação",
    "Infiltrado multilobar, derrame pleural volumoso"
  ],
  condutaInicial: [
    "Sinais vitais, SpO₂, avaliar sepse",
    "RX de tórax PA e perfil",
    "Calcular CURB-65 (na UBS: CRB-65)",
    "Antibiótico conforme local de tratamento e comorbidades",
    "O₂ para SpO₂ ≥ 92% (88–92% em DPOC retentor)"
  ],
  fataisExcluir: [
    "Sepse / choque séptico",
    "Empiema",
    "TEP",
    "Tuberculose pulmonar (isolar se suspeita)",
    "IC descompensada"
  ],
  proximaDecisao: "Ambulatorial → reavaliar em 48–72 h. Sem melhora em 72 h → revisar diagnóstico, complicações (derrame, empiema) e cobertura antibiótica.",
  clinica: {
    anamnese: [
      "Tempo de sintomas, febre, expectoração, dor pleurítica, dispneia",
      "Comorbidades: DPOC, IC, DM, DRC, hepatopatia, etilismo, neoplasia, imunossupressão",
      "Antibiótico ou internação nos últimos 90 dias",
      "Tosse > 2–3 semanas, sudorese noturna, perda de peso (tuberculose)",
      "Aspiração (disfagia, rebaixamento, etilismo)"
    ],
    exameFisico: [
      "FR, SpO₂, PA, FC, temperatura, estado mental",
      "Crepitações, sopro tubário, macicez, frêmito aumentado",
      "Sinais de derrame pleural",
      "Hidratação"
    ],
    diferenciais: [
      { dx: "Bronquite aguda / IVAS", pista: "Sem achado focal, sinais vitais normais" },
      { dx: "IC descompensada", pista: "Crepitações bilaterais, BNP alto" },
      { dx: "TEP", pista: "Dispneia súbita, fatores de risco" },
      { dx: "Tuberculose", pista: "Tosse prolongada, infiltrado apical/cavitação" },
      { dx: "Neoplasia", pista: "Tabagista, pneumonia recorrente no mesmo lobo" }
    ],
    gravidade: [
      "CURB-65: Confusão, Ureia > 50 mg/dL, FR ≥ 30, PAS < 90 ou PAD ≤ 60, idade ≥ 65 — 1 ponto cada",
      "Critérios maiores de PAC grave (ATS/IDSA): choque com vasopressor ou ventilação mecânica",
      "≥ 3 critérios menores (FR ≥ 30, PaO₂/FiO₂ ≤ 250, multilobar, confusão, ureia ≥ 40, leucócitos < 4 mil, plaquetas < 100 mil, hipotermia, hipotensão com volume) → UTI"
    ]
  },
  exames: [
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA e perfil.",
      porQue: "Confirmar diagnóstico, extensão e complicações.",
      esperar: "Consolidação, infiltrado intersticial, derrame.",
      interpretacao: "Derrame significativo → toracocentese (pH, glicose, LDH, Gram, cultura).",
      limitacoes: "Pode ser normal no início, na desidratação e na neutropenia. USG pulmonar é alternativa sensível."
    },
    {
      nome: "Laboratório (internados)",
      pedido: "Hemograma, ureia, creatinina, eletrólitos, glicemia, PCR; gasometria arterial se SpO₂ < 92%; lactato se sepse.",
      porQue: "Gravidade e escores.",
      esperar: "—",
      interpretacao: "Ureia > 50 pontua no CURB-65.",
      limitacoes: "Ambulatorial de baixo risco não precisa de exames laboratoriais."
    },
    {
      nome: "Microbiologia (internados / graves)",
      pedido: "Hemoculturas (2 amostras) e escarro (Gram e cultura) antes do antibiótico em casos graves; antígeno urinário para pneumococo e Legionella na PAC grave; pesquisa de influenza/SARS-CoV-2 na sazonalidade; baciloscopia/TRM-TB se suspeita de tuberculose.",
      porQue: "Direcionar e descalonar.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não atrasar antibiótico."
    }
  ],
  tratamento: [
    {
      droga: "Amoxicilina (ambulatorial sem comorbidades)",
      linha: "l1",
      dose: "1 g",
      via: "VO",
      intervalo: "8/8h",
      duracao: "5 dias (se afebril há 48 h e estável)",
      monitorizacao: "Reavaliação em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Alternativas: azitromicina 500 mg/dia por 3 dias ou doxiciclina 100 mg 12/12h por 5 dias"
    },
    {
      droga: "Amoxicilina-clavulanato + azitromicina (ambulatorial com comorbidades)",
      linha: "l1",
      dose: "Amoxicilina-clavulanato 875/125 mg 12/12h + azitromicina 500 mg 1×/dia",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "5–7 dias (azitromicina 3–5 dias)",
      monitorizacao: "Reavaliação em 48–72 h",
      contraindicacoes: "Alergia",
      ajustes: "Alternativa: levofloxacino 750 mg 1×/dia por 5 dias (reservar; descartar tuberculose)"
    },
    {
      droga: "Ceftriaxona + azitromicina (internado)",
      linha: "l1",
      dose: "Ceftriaxona 1–2 g 1×/dia + azitromicina 500 mg 1×/dia",
      via: "IV (azitromicina VO ou IV)",
      intervalo: "24/24h",
      duracao: "5–7 dias; transição para VO quando estável",
      monitorizacao: "Febre, SpO₂, PCR",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "PAC grave/UTI: ceftriaxona 2 g + azitromicina (ou levofloxacino). Risco de Pseudomonas/MRSA: ampliar conforme CCIH"
    },
    {
      droga: "Levofloxacino",
      linha: "alt",
      dose: "750 mg",
      via: "VO ou IV",
      intervalo: "1×/dia",
      duracao: "5 dias",
      monitorizacao: "QT, tendinopatia, disglicemia",
      contraindicacoes: "Gestação, QT longo, miastenia",
      ajustes: "Para alérgicos a betalactâmicos. ClCr < 50: 750 mg a cada 48 h"
    }
  ],
  destino: {
    agora: [
      "Definir local de tratamento por CURB-65 e julgamento clínico",
      "Antibiótico na primeira hora se sepse"
    ],
    reavaliar: [
      "Ambulatorial: 48–72 h (presencial ou telefone)",
      "Internado: diário; transição oral quando afebril, estável e comendo"
    ],
    alta: [
      "CURB-65 0–1, SpO₂ ≥ 92%, tolera VO, suporte social",
      "Orientação de sinais de piora",
      "RX de controle em 6–8 semanas apenas se > 50 anos tabagista ou sintomas persistentes"
    ],
    observacao: [
      "CURB-65 2 com boa evolução nas primeiras horas: considerar curta observação"
    ],
    internacao: [
      "CURB-65 ≥ 2 (individualizar 2), hipoxemia, incapacidade de VO, descompensação de comorbidade",
      "UTI: critério maior ou ≥ 3 menores"
    ],
    transferencia: [
      "UBS: CRB-65 ≥ 1 com fatores de risco, SpO₂ < 92% ou sinais de sepse → PS"
    ]
  },
  fontes: [
    "SBPT — Recomendações para o manejo da pneumonia adquirida na comunidade (2018)",
    "ATS/IDSA — Diagnosis and Treatment of Adults with Community-acquired Pneumonia (2019)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
