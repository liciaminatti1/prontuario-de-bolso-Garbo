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
      duracao: "3–5 dias: ATS 2025 sugere < 5 dias (mínimo 3) se estabilidade clínica (sinais vitais normais, comendo, mental normal)",
      monitorizacao: "Reavaliação em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Alternativas: doxiciclina 100 mg 12/12h por 5 dias ou azitromicina 500 mg no 1º dia + 250 mg/dia por 4 dias (ou 500 mg/dia por 3 dias) — macrolídeo isolado só onde resistência pneumocócica < 25%"
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
      duracao: "Não grave: ≥ 3 dias até estabilidade clínica (ATS 2025); grave: ≥ 5 dias. Transição para VO quando estável",
      monitorizacao: "Febre, SpO₂, PCR",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Ceftriaxona em 100 mL SF em 30 min; azitromicina 500 mg em 250 mL SF em ≥ 1 h. PAC grave/UTI: ceftriaxona 2 g + azitromicina (ou levofloxacino). Risco de Pseudomonas/MRSA: ampliar conforme CCIH. Aspiração: não cobrir anaeróbios de rotina (só se abscesso ou empiema)"
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
      ajustes: "Para alérgicos a betalactâmicos. ClCr < 50: 750 mg a cada 48 h. Descartar tuberculose antes (mascara o diagnóstico)"
    },
    {
      droga: "Hidrocortisona (PAC grave internada)",
      linha: "adj",
      dose: "200 mg/dia (infusão contínua ou 50 mg 6/6h)",
      via: "IV",
      intervalo: "Contínuo ou 6/6h",
      duracao: "4–7 dias, depois redução (esquema CAPE COD: 8–14 dias no total)",
      monitorizacao: "Glicemia, infecção secundária",
      contraindicacoes: "PAC não grave (ATS 2025 recomenda não usar), pneumonia por influenza, aspergilose, uso recente de corticoide",
      ajustes: "ATS 2025: sugerido em PAC grave em internados (ex.: UTI, critérios de gravidade). Iniciar em até 24 h da gravidade"
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
  prescricao: {
    ambulatorial: "SEM COMORBIDADES (USO ORAL)\n1. Amoxicilina 500 mg ------------------------------- 30 cápsulas\n   Tomar 2 cápsulas (1 g) de 8 em 8 horas por 5 dias.\n   Alérgico: doxiciclina 100 mg, 1 comprimido de 12 em 12 horas por 5 dias.\n\nCOM COMORBIDADES (DPOC, DM, IC, DRC, hepatopatia, etilismo)\n1. Amoxicilina + clavulanato 875/125 mg ------------ 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 5 a 7 dias.\n2. Azitromicina 500 mg ------------------------------ 3 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 3 dias.\n\nSINTOMÁTICOS\n3. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor.",
    hospitalar: "PRESCRIÇÃO — INTERNAÇÃO (PAC NÃO GRAVE / ENFERMARIA)\n1. Dieta livre conforme aceitação (branda se dispneia).\n2. SF 0,9% 500 mL IV em 30 min se desidratado; depois manutenção conforme aceitação.\n3. Ceftriaxona 1 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia (grave: 2 g).\n4. Azitromicina 500 mg + SF 0,9% 250 mL IV em 1 h (ou VO), 1 vez ao dia por 3 a 5 dias.\n5. Dipirona 1 g IV lento de 6 em 6 horas se febre ou dor.\n6. Ondansetrona 4 mg IV lento de 8 em 8 horas se náusea.\n7. Enoxaparina 40 mg SC 1 vez ao dia (profilaxia de TEV; ClCr < 30: 20 mg).\n8. O₂ por cateter nasal se SpO₂ < 92% (alvo 92–96%; DPOC retentor 88–92%).\n9. PAC grave (UTI): ceftriaxona 2 g IV 1 vez ao dia + azitromicina 500 mg IV; hidrocortisona 50 mg IV de 6 em 6 horas (200 mg/dia) se sem influenza.\n10. Cuidados: sinais vitais e SpO₂ de 4 em 4 horas, cabeceira 30°, glicemia capilar se diabético, fisioterapia respiratória se secreção.\n11. Coletar antes do antibiótico (internados graves): 2 hemoculturas, escarro, antígenos urinários; teste para influenza/SARS-CoV-2.\n12. Transição para VO (amoxicilina-clavulanato 875/125 mg 12/12h) quando afebril 48 h, estável e aceitando dieta."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico nos horários certos até o fim",
    "Beber bastante líquido e repousar; a tosse e o cansaço podem durar semanas",
    "Febre deve melhorar em 48 a 72 horas",
    "Voltar imediatamente se falta de ar, lábios roxos, confusão, febre que não cede após 72 horas, dor no peito forte, vômitos que impedem tomar o remédio ou tontura ao levantar",
    "Reavaliação na UBS em 48–72 horas (presencial ou por telefone)",
    "Vacinas: gripe anual, pneumocócica e covid-19 conforme o calendário; parar de fumar"
  ],
  fontes: [
    "ATS — Clinical Practice Guideline Update: Diagnosis and Management of Community-acquired Pneumonia (Am J Respir Crit Care Med, 2025)",
    "ATS/IDSA — Diagnosis and Treatment of Adults with Community-acquired Pneumonia (2019)",
    "SBPT — Recomendações para o manejo da pneumonia adquirida na comunidade (J Bras Pneumol, 2018)",
    "Dequin PF et al. CAPE COD — hidrocortisona na PAC grave (N Engl J Med, 2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
