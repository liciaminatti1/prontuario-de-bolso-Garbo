// ITU na gestação
registrarFicha({
  id: "itu-gestante",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Infecção urinária na gestação: bacteriúria assintomática, cistite e pielonefrite",
  resumo: "Toda bacteriúria na gestante é tratada, com ou sem sintomas, e controlada com urocultura. Pielonefrite na gestação é tratada com internação e antibiótico EV.",
  palavrasChave: "itu infeccao urinaria gestante gravidez bacteriuria assintomatica cistite pielonefrite urocultura cefalexina nitrofurantoina fosfomicina amoxicilina ceftriaxona cefazolina profilaxia disuria",
  critico: {
    tempo: "Pielonefrite: internar e ATB EV",
    texto: "Gestante com febre, dor lombar ou Giordano positivo: hemograma, creatinina, urocultura (e hemocultura se grave) e ceftriaxona EV sem demora. Pielonefrite causa sepse, SDRA e trabalho de parto prematuro."
  },
  alarmes: [
    "Febre ≥ 38 °C, calafrios, dor lombar, Giordano positivo",
    "Sinais de sepse: PAS < 90, FC > 100–110, FR ≥ 22, confusão, SpO₂ baixa",
    "Vômitos que impedem VO",
    "Contrações uterinas, perda de líquido, sangramento",
    "Dispneia (SDRA na pielonefrite)",
    "Febre persistente após 48–72 h de antibiótico (abscesso, obstrução)"
  ],
  condutaInicial: [
    "Urocultura com antibiograma no 1º e no 3º trimestre em toda gestante (rastreio)",
    "Bacteriúria assintomática (≥ 100.000 UFC/mL de um germe): tratar guiado pelo antibiograma",
    "Cistite: colher urina tipo 1 e urocultura ANTES do antibiótico e tratar empiricamente",
    "Pielonefrite: internar, colher exames, ceftriaxona 1 g EV 24/24 h, hidratação e antitérmico",
    "Urocultura de controle 1–2 semanas após o fim do tratamento",
    "Recorrência ou pielonefrite: profilaxia antibiótica até o parto"
  ],
  fataisExcluir: [
    "Sepse de foco urinário / choque séptico",
    "Pielonefrite obstrutiva ou abscesso renal (sem melhora em 48–72 h)",
    "Trabalho de parto prematuro desencadeado pela infecção",
    "Corioamnionite (febre, útero doloroso, taquicardia fetal) e descolamento de placenta como diferenciais da dor"
  ],
  proximaDecisao: "Pielonefrite: afebril há 24–48 h e tolerando VO → trocar para antibiótico oral guiado pelo antibiograma e completar 10–14 dias; alta com profilaxia e urocultura de controle. Sem melhora em 48–72 h → USG de rins e vias urinárias e rever antibiótico.",
  clinica: {
    anamnese: [
      "Disúria, polaciúria, urgência, dor suprapúbica, hematúria (sintomas urinários leves são comuns na gestação — confirmar com exame)",
      "Febre, calafrios, dor lombar, náuseas e vômitos (pielonefrite)",
      "IG; contrações, perda de líquido, sangramento",
      "ITU prévia na gestação, uroculturas e antibiogramas anteriores",
      "Alergias (penicilina, cefalosporina), deficiência de G6PD, DM, anemia falciforme, litíase",
      "Corrimento e prurido vaginal (vulvovaginite pode causar disúria)"
    ],
    exameFisico: [
      "Temperatura, PA, FC, FR, SpO₂ (sinais de sepse)",
      "Giordano, dor à palpação de flancos e hipogástrio",
      "Tônus uterino, dinâmica uterina, BCF",
      "Hidratação"
    ],
    diferenciais: [
      { dx: "Vulvovaginite", pista: "Disúria externa, corrimento, prurido; urina normal" },
      { dx: "Trabalho de parto prematuro", pista: "Contrações regulares, dor lombar em cólica, modificação do colo" },
      { dx: "Corioamnionite", pista: "Febre, útero doloroso, líquido fétido, taquicardia materna e fetal" },
      { dx: "Apendicite, colecistite", pista: "Dor localizada, sinais peritoneais (apêndice deslocado para cima no 3º trimestre)" },
      { dx: "Litíase renal", pista: "Cólica intensa, hematúria, sem febre inicial; USG" },
      { dx: "Descolamento prematuro de placenta", pista: "Dor abdominal com útero hipertônico, sangramento, sofrimento fetal" }
    ],
    gravidade: [
      "Bacteriúria assintomática: urocultura ≥ 100.000 UFC/mL de um único germe, sem sintomas",
      "Cistite: sintomas urinários baixos, sem febre nem dor lombar",
      "Pielonefrite: febre e/ou dor lombar/Giordano positivo, com ou sem sintomas baixos",
      "Pielonefrite grave: sepse, insuficiência respiratória, IRA, vômitos incoercíveis"
    ]
  },
  exames: [
    {
      nome: "Urocultura com antibiograma",
      pedido: "Urocultura com antibiograma (jato médio, após higiene).",
      porQue: "Diagnóstico de bacteriúria e escolha do antibiótico; controle de cura.",
      esperar: "≥ 100.000 UFC/mL de um germe (E. coli é o mais comum).",
      interpretacao: "Crescimento misto ou de vários germes = contaminação: repetir coleta. Estreptococo do grupo B na urina em qualquer contagem: tratar e registrar para profilaxia intraparto.",
      limitacoes: "Resultado em 48–72 h; na cistite e pielonefrite não esperar para tratar."
    },
    {
      nome: "Urina tipo 1 (EAS)",
      pedido: "Urina tipo 1 (EAS).",
      porQue: "Apoio ao diagnóstico de cistite.",
      esperar: "Leucocitúria, nitrito positivo, hematúria.",
      interpretacao: "Nitrito positivo é bem específico; EAS normal não exclui bacteriúria (o rastreio é pela urocultura).",
      limitacoes: "Não substitui a urocultura."
    },
    {
      nome: "Exames na pielonefrite",
      pedido: "Hemograma completo. PCR. Ureia, creatinina, sódio, potássio. Lactato e hemoculturas (2 amostras) se sinais de sepse. Gasometria se dispneia.",
      porQue: "Gravidade, disfunção orgânica e sepse.",
      esperar: "Leucocitose; creatinina pode subir (na gestação, creatinina > 0,8 mg/dL já é alterada).",
      interpretacao: "Lactato ≥ 2 mmol/L ou hipotensão → protocolo de sepse.",
      limitacoes: "—"
    },
    {
      nome: "Ultrassonografia de rins e vias urinárias",
      pedido: "Ultrassonografia de rins e vias urinárias.",
      porQue: "Obstrução, litíase, abscesso se sem melhora em 48–72 h ou pielonefrite recorrente.",
      esperar: "Hidronefrose leve à direita é fisiológica na gestação.",
      interpretacao: "Hidronefrose importante com febre persistente → urologia (cateter duplo J ou nefrostomia).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cefalexina",
      linha: "l1",
      dose: "500 mg",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "7 dias (bacteriúria e cistite)",
      monitorizacao: "Urocultura de controle 1–2 semanas após",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Segura em toda a gestação. ClCr < 30: ajustar intervalo"
    },
    {
      droga: "Fosfomicina trometamol",
      linha: "l1",
      dose: "3 g (1 envelope)",
      via: "VO, diluída em água, à noite com bexiga vazia",
      intervalo: "Dose única",
      duracao: "1 dia",
      monitorizacao: "Urocultura de controle",
      contraindicacoes: "ClCr < 10 mL/min",
      ajustes: "Útil quando há dúvida de adesão"
    },
    {
      droga: "Nitrofurantoína",
      linha: "l1",
      dose: "100 mg",
      via: "VO, com alimento",
      intervalo: "6/6 h",
      duracao: "5–7 dias",
      monitorizacao: "Náusea",
      contraindicacoes: "Após 36 semanas e no trabalho de parto (hemólise neonatal); deficiência de G6PD; ClCr < 30–45",
      ajustes: "Não serve para pielonefrite (não atinge nível no rim)"
    },
    {
      droga: "Amoxicilina (ou amoxicilina + clavulanato 500/125 mg)",
      linha: "alt",
      dose: "500 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "7 dias",
      monitorizacao: "Urocultura de controle",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Só se sensível no antibiograma (resistência de E. coli à amoxicilina é alta)"
    },
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "1 g (2 g se grave ou peso elevado)",
      via: "IV ou IM",
      intervalo: "24/24 h",
      duracao: "Até 24–48 h afebril; completar 10–14 dias com VO",
      monitorizacao: "Curva térmica, diurese, creatinina, dinâmica uterina",
      contraindicacoes: "Alergia grave a cefalosporina",
      ajustes: "IV: diluir 1 g em 10 mL de água para injeção (bolus em 2–4 min) ou em 50–100 mL de SF 0,9% em 30 min. Não precisa de ajuste renal"
    },
    {
      droga: "Cefazolina",
      linha: "alt",
      dose: "1–2 g",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Até afebril; completar 10–14 dias com VO",
      monitorizacao: "—",
      contraindicacoes: "Alergia a cefalosporina",
      ajustes: "Diluir em 100 mL de SF 0,9% e infundir em 30 min. Sepse grave ou germe resistente: piperacilina-tazobactam ou carbapenêmico conforme CCIH"
    },
    {
      droga: "Profilaxia: nitrofurantoína 100 mg ou cefalexina 250–500 mg",
      linha: "adj",
      dose: "1 comprimido/cápsula",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Até o parto (nitrofurantoína até 36 semanas, depois trocar por cefalexina); alguns protocolos mantêm até 4–6 semanas pós-parto",
      monitorizacao: "Urocultura mensal",
      contraindicacoes: "As de cada droga",
      ajustes: "Indicada após pielonefrite ou ≥ 2 episódios de ITU/bacteriúria na gestação"
    },
    {
      droga: "Fluoroquinolonas (ciprofloxacino, levofloxacino); sulfametoxazol-trimetoprima no 1º trimestre e perto do termo",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Quinolonas: evitar na gestação. SMX-TMP: antagonista de folato (1º trimestre) e risco de kernicterus (3º trimestre)",
      ajustes: "Usar só se resistência a todas as opções seguras e com especialista"
    }
  ],
  destino: {
    agora: [
      "Bacteriúria/cistite: tratar na UBS",
      "Pielonefrite: colher exames, 1ª dose de ceftriaxona e encaminhar à maternidade/hospital"
    ],
    reavaliar: [
      "Cistite: melhora dos sintomas em 48–72 h",
      "Pielonefrite: temperatura, sinais vitais, diurese e dinâmica uterina a cada 4–6 h"
    ],
    alta: [
      "Pielonefrite: afebril há 24–48 h, tolerando VO, sem dinâmica uterina",
      "Antibiótico VO para completar 10–14 dias + profilaxia + urocultura de controle"
    ],
    observacao: ["—"],
    internacao: [
      "Toda pielonefrite na gestação",
      "Cistite com vômitos que impedem VO"
    ],
    transferencia: [
      "Sepse/choque: UTI de hospital com maternidade",
      "Obstrução ou abscesso: serviço com urologia"
    ]
  },
  prescricao: {
    ambulatorial: "BACTERIÚRIA ASSINTOMÁTICA OU CISTITE NA GESTAÇÃO (ajustar ao antibiograma)\nUSO ORAL\n1. Cefalexina 500 mg ------------------------------ 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n   OU Fosfomicina trometamol 3 g ------------------- 1 envelope\n   Dissolver em meio copo de água e tomar à noite, após urinar, dose única.\n   OU Nitrofurantoína 100 mg (só até 36 semanas) --- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas, com alimento, por 7 dias.\n2. Paracetamol 500 mg ----------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n\nEXAME DE CONTROLE\nUrocultura 1 a 2 semanas após terminar o antibiótico.\n\nPROFILAXIA (após pielonefrite ou ITU recorrente)\n3. Nitrofurantoína 100 mg (até 36 semanas) ------- 30 cápsulas\n   Tomar 1 cápsula à noite, todos os dias.\n   OU Cefalexina 500 mg --------------------------- 30 cápsulas\n   Tomar 1 cápsula à noite, todos os dias, até o parto.",
    hospitalar: "PIELONEFRITE NA GESTAÇÃO (peso: ___ kg; IG: ___ semanas)\n1. Dieta geral conforme aceitação (zero se vômitos).\n2. Repouso relativo; cabeceira livre.\n3. SF 0,9% 1.000 mL IV em 1 h se desidratada ou hipotensa; depois 1.000 mL de 8/8 h. (Sepse: 30 mL/kg em 3 h com reavaliação; cautela com SDRA.)\n4. Ceftriaxona 1 g + SF 0,9% 100 mL IV em 30 min de 24/24 h (2 g se grave). Alternativa: cefazolina 2 g + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n5. Dipirona 1 g + água destilada 8 mL IV lento de 6/6 h se febre ou dor (ou paracetamol 750 mg VO de 6/6 h).\n6. Ondansetrona 4–8 mg + SF 0,9% 50 mL IV de 8/8 h se náusea ou vômito.\n7. Controles: sinais vitais e temperatura de 4/4 h; diurese; BCF de 6/6 h e dinâmica uterina; SpO₂ (risco de SDRA).\n8. Exames: hemograma, PCR, creatinina, eletrólitos, urina tipo 1, urocultura (antes do ATB), hemoculturas se sepse; repetir creatinina e hemograma em 48 h.\n9. Afebril há 24–48 h: trocar para cefalexina 500 mg VO de 6/6 h (ou conforme antibiograma) até completar 10–14 dias; iniciar profilaxia após o término."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico até o fim, mesmo se melhorar antes",
    "Beber bastante água; não segurar a urina",
    "Fazer a urocultura de controle 1–2 semanas depois do tratamento",
    "Voltar imediatamente se: febre, calafrios, dor nas costas, vômitos, contrações, perda de líquido ou sangramento",
    "Se tiver ITU de novo na gestação, avisar a equipe: pode precisar de antibiótico de prevenção até o parto"
  ],
  tabelas: [
    {
      titulo: "Resumo do tratamento",
      colunas: ["Quadro", "Onde", "Antibiótico", "Duração", "Depois"],
      linhas: [
        ["Bacteriúria assintomática", "UBS", "Guiado pelo antibiograma (cefalexina, fosfomicina, nitrofurantoína, amoxicilina)", "7 dias (fosfomicina: dose única)", "Urocultura de controle"],
        ["Cistite", "UBS", "Cefalexina, fosfomicina ou nitrofurantoína (empírico)", "5–7 dias", "Urocultura de controle"],
        ["Pielonefrite", "Hospital", "Ceftriaxona EV → VO pelo antibiograma", "10–14 dias", "Profilaxia até o parto + urocultura mensal"]
      ]
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Cistite sem melhora em 48–72 h", "Urocultura com antibiograma; trocar conforme resultado entre opções seguras (cefalexina, fosfomicina, nitrofurantoína, amoxicilina-clavulanato)", "Pensar em pielonefrite"],
        ["Pielonefrite com febre após 48–72 h de ceftriaxona", "USG de rins e vias urinárias (obstrução, abscesso); hemoculturas; ampliar para piperacilina-tazobactam ou carbapenêmico conforme cultura/CCIH", "Obstrução: urologia (duplo J ou nefrostomia)"],
        ["E. coli ESBL", "Cistite: fosfomicina ou nitrofurantoína se sensíveis (nitrofurantoína evitar perto do termo); pielonefrite: carbapenêmico IV", "Discutir com infectologia"],
        ["Alergia grave a betalactâmico", "Cistite: fosfomicina ou nitrofurantoína; pielonefrite: aztreonam ou aminoglicosídeo com obstetra/infectologia", "Aminoglicosídeo: risco de ototoxicidade fetal, usar só se necessário"],
        ["Recorrência ou bacteriúria persistente após 2 tratamentos", "Tratar pelo antibiograma e iniciar profilaxia até o parto", "Urocultura mensal; USG de vias urinárias"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco (2012)",
    "FEBRASGO — Infecção do trato urinário na gestação (Protocolo FEBRASGO de Obstetrícia)",
    "TelessaúdeRS-UFRGS — Tratamento de bacteriúria assintomática e cistite na gestação",
    "IDSA — Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria (2019)",
    "ACOG — Clinical Consensus: Urinary tract infections in pregnant individuals (2023)"
  ],
  revisao: "2026-10-25",
  versao: "1.1"
});
