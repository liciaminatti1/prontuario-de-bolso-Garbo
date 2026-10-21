// Pé diabético
registrarFicha({
  id: "pe-diabetico",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Pé diabético: rastreamento, risco, úlcera e infecção (IWGDF)",
  resumo: "Rastreamento anual dos pés de todo diabético, classificação de risco IWGDF 0–3 com frequência de seguimento, manejo inicial da úlcera (descarga, curativo, avaliação vascular) e classificação e tratamento da infecção (IWGDF/IDSA).",
  palavrasChave: "pe diabetico ulcera diabetica mal perfurante plantar infeccao osteomielite charcot iwgdf idsa monofilamento itb indice tornozelo braquial amputacao cefalexina amoxicilina clavulanato clindamicina sulfametoxazol curativo descarga calcado",
  critico: {
    tempo: "Infecção grave ou isquemia: hoje",
    texto: "Pé com infecção e sinais sistêmicos, abscesso, gangrena, crepitação ou isquemia crítica (dor em repouso, necrose, pulsos ausentes) → encaminhar ao PS/cirurgia vascular no mesmo dia."
  },
  alarmes: [
    "Febre, taquicardia, hipotensão, confusão ou hiperglicemia descontrolada com ferida no pé (infecção grave)",
    "Celulite > 2 cm ao redor da úlcera, linfangite, abscesso, crepitação, necrose ou gangrena",
    "Dor em repouso, pé frio e pálido, pulsos ausentes, necrose seca (isquemia crítica)",
    "Osso visível ou palpável com estilete (probe-to-bone) (osteomielite)",
    "Pé quente, vermelho e inchado sem ferida, com neuropatia (Charcot agudo: imobilizar e encaminhar)",
    "Úlcera que não reduz em 4 semanas apesar de tratamento adequado"
  ],
  condutaInicial: [
    "Examinar os pés de todo diabético pelo menos 1 vez ao ano: pele, unhas, deformidades, calçado, monofilamento de 10 g, diapasão de 128 Hz e pulsos",
    "Classificar o risco IWGDF (0–3) e definir a frequência de reavaliação",
    "Se úlcera: medir, descrever (profundidade, local, tecido), testar osso com estilete, avaliar perfusão e sinais de infecção",
    "Pulsos ausentes ou duvidosos: índice tornozelo-braquial (ITB) com doppler; ITB < 0,9 ou > 1,3 sugere doença arterial",
    "Descarga da pressão (retirar apoio da área ulcerada), desbridamento de calo e tecido desvitalizado, curativo que mantenha umidade adequada",
    "Infecção: classificar (leve, moderada, grave), colher cultura de tecido profundo após limpeza (não swab superficial) e iniciar antibiótico",
    "Controle glicêmico, cessação do tabagismo, estatina e antiagregante se doença arterial"
  ],
  fataisExcluir: [
    "Infecção grave com sepse (fasciite, abscesso profundo, gangrena gasosa)",
    "Isquemia crítica do membro",
    "Osteomielite",
    "Neuroartropatia de Charcot aguda (confundida com celulite ou gota)",
    "Cetoacidose ou estado hiperosmolar desencadeados pela infecção"
  ],
  proximaDecisao: "Úlcera sem infecção e com perfusão adequada → descarga, curativo e reavaliação semanal na UBS. Infecção leve → antibiótico oral 1–2 semanas. Infecção moderada com isquemia ou extensa, ou grave → internação. Úlcera sem melhora (redução de área < 50%) em 4 semanas → reavaliar perfusão, infecção, osteomielite e adesão à descarga; encaminhar.",
  clinica: {
    anamnese: [
      "Tempo de DM, controle (HbA1c), tabagismo, doença renal (diálise aumenta o risco)",
      "Úlcera ou amputação prévias",
      "Formigamento, queimação, dormência (neuropatia); claudicação ou dor em repouso (isquemia)",
      "Tempo e causa da ferida (calçado, trauma, queimadura, corte de unha)",
      "Calçado usado, hábito de andar descalço, capacidade de ver e cuidar dos pés",
      "Febre, secreção, odor, dor nova em pé antes indolor (sugere infecção)"
    ],
    exameFisico: [
      "Inspeção: pele seca, fissuras, calos, bolhas, micose interdigital, unhas, deformidades (dedos em garra, hálux valgo, pé de Charcot)",
      "Monofilamento de 10 g em pontos plantares e diapasão de 128 Hz no hálux",
      "Pulsos pediosos e tibiais posteriores; temperatura; enchimento capilar",
      "Úlcera: tamanho, profundidade, tecido do leito, exposição de tendão ou osso, teste probe-to-bone",
      "Sinais de infecção: eritema, calor, edema, dor, secreção purulenta; medir extensão do eritema a partir da borda",
      "Sinais sistêmicos: temperatura, FC, FR, PA"
    ],
    diferenciais: [
      { dx: "Úlcera neuropática", pista: "Plantar, em área de pressão, com calo ao redor, indolor, pé quente com pulsos" },
      { dx: "Úlcera isquêmica", pista: "Bordas, dedos, calcanhar; dolorosa; pé frio, pulsos ausentes" },
      { dx: "Úlcera neuroisquêmica", pista: "Mistura dos dois; frequente; pior prognóstico" },
      { dx: "Charcot agudo", pista: "Pé quente, edemaciado, eritematoso, sem porta de entrada; diferença de temperatura entre os pés" },
      { dx: "Gota", pista: "Dor intensa articular, hiperuricemia, sem ferida" },
      { dx: "Úlcera venosa", pista: "Perimaleolar medial, dermatite ocre, varizes" }
    ],
    gravidade: [
      "Infecção IWGDF/IDSA 1 (sem infecção): sem sinais locais ou sistêmicos",
      "Grau 2 (leve): ≥ 2 sinais locais (edema/endurecimento, eritema, calor, dor, secreção purulenta), eritema ≤ 2 cm da borda, só pele e subcutâneo, sem sinais sistêmicos",
      "Grau 3 (moderada): eritema > 2 cm ou acometimento mais profundo (abscesso, osteomielite, artrite séptica, fasciite), sem sinais sistêmicos",
      "Grau 4 (grave): infecção com ≥ 2 critérios de SIRS (T > 38 ou < 36 °C, FC > 90, FR > 20 ou PaCO₂ < 32, leucócitos > 12.000 ou < 4.000 ou > 10% bastões)",
      "Acrescentar (O) se osteomielite (ex.: 3(O))"
    ]
  },
  exames: [
    {
      nome: "Índice tornozelo-braquial (ITB)",
      pedido: "Índice tornozelo-braquial com doppler bilateral. HD: diabetes com úlcera / pulsos diminuídos.",
      porQue: "Detectar doença arterial periférica em todo pé com úlcera ou pulsos alterados.",
      esperar: "Normal 0,9–1,3.",
      interpretacao: "< 0,9: doença arterial. > 1,3: artérias incompressíveis (calcificação), resultado não confiável → pressão no hálux ou TcPO₂. Pressão no hálux < 30 mmHg ou TcPO₂ < 25 mmHg: avaliação vascular urgente para revascularização.",
      limitacoes: "Normal não exclui doença arterial em diabético (calcificação); usar pulsos + doppler + pressão no hálux quando disponível."
    },
    {
      nome: "Radiografia do pé",
      pedido: "Radiografia do pé ___ (direito/esquerdo) em AP, oblíqua e perfil. HD: úlcera diabética / suspeita de osteomielite.",
      porQue: "Osteomielite, gás, corpo estranho, deformidade de Charcot.",
      esperar: "Pode ser normal nas primeiras 2 semanas de osteomielite.",
      interpretacao: "Erosão cortical, reação periosteal, destruição óssea → osteomielite. Se dúvida: repetir em 2–3 semanas ou ressonância.",
      limitacoes: "Baixa sensibilidade inicial. Ressonância é o melhor exame de imagem se disponível."
    },
    {
      nome: "Exames laboratoriais",
      pedido: "Hemograma, PCR, VHS, glicemia, HbA1c, creatinina, potássio.",
      porQue: "Infecção, osteomielite, controle glicêmico e ajuste de antibiótico.",
      esperar: "VHS elevada sugere osteomielite.",
      interpretacao: "VHS > 70 mm/h aumenta a probabilidade de osteomielite.",
      limitacoes: "Leucograma pode ser normal mesmo com infecção profunda."
    },
    {
      nome: "Cultura",
      pedido: "Cultura de fragmento de tecido profundo (curetagem ou biópsia da base da úlcera após limpeza e desbridamento), com antibiograma.",
      porQue: "Guiar antibiótico na infecção moderada ou grave, falha terapêutica ou uso recente de antibiótico.",
      esperar: "Leve: cocos gram-positivos (S. aureus, estreptococos).",
      interpretacao: "Crônica, prévia de antibiótico ou grave: polimicrobiana (gram-negativos, anaeróbios).",
      limitacoes: "Não colher swab superficial nem cultivar úlcera não infectada."
    }
  ],
  tratamento: [
    {
      droga: "Cefalexina (infecção leve)",
      linha: "l1",
      dose: "500 mg",
      via: "VO",
      intervalo: "De 6 em 6 horas",
      duracao: "1–2 semanas",
      monitorizacao: "Reavaliar em 48–72 h; medir eritema",
      contraindicacoes: "Alergia grave a betalactâmicos",
      ajustes: "ClCr < 30: 500 mg de 8/8–12/12 h. RENAME"
    },
    {
      droga: "Amoxicilina + clavulanato (leve com uso recente de antibiótico ou moderada sem internação)",
      linha: "l1",
      dose: "875/125 mg",
      via: "VO",
      intervalo: "De 12 em 12 horas",
      duracao: "1–2 semanas (pele e partes moles); prolongar até 3–4 semanas se resolução lenta",
      monitorizacao: "Diarreia, função hepática",
      contraindicacoes: "Alergia a penicilina, icterícia prévia com amoxicilina-clavulanato",
      ajustes: "ClCr < 30: 500/125 mg 12/12 h. RENAME"
    },
    {
      droga: "Clindamicina (alérgico a penicilina)",
      linha: "alt",
      dose: "300–450 mg",
      via: "VO",
      intervalo: "De 6 em 6 ou 8 em 8 horas",
      duracao: "1–2 semanas",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "Colite prévia por C. difficile",
      ajustes: "Cobre estafilococo e estreptococo, não gram-negativos. RENAME"
    },
    {
      droga: "Sulfametoxazol + trimetoprima (suspeita de MRSA)",
      linha: "adj",
      dose: "800/160 mg 1 a 2 comprimidos",
      via: "VO",
      intervalo: "De 12 em 12 horas",
      duracao: "1–2 semanas",
      monitorizacao: "Potássio e creatinina, hemograma",
      contraindicacoes: "Gestação no 1º trimestre e termo, deficiência de G6PD, uso de varfarina (interação)",
      ajustes: "Não cobre bem estreptococo: associar a cefalexina se usar. ClCr 15–30: metade da dose"
    },
    {
      droga: "Infecção grave ou moderada internada — esquema IV empírico",
      linha: "l1",
      dose: "Amoxicilina-clavulanato 1 g/200 mg IV 8/8 h OU ceftriaxona 2 g IV 1×/dia + clindamicina 600 mg IV 8/8 h (ou metronidazol 500 mg IV 8/8 h); com risco de Pseudomonas ou grave: piperacilina-tazobactam 4,5 g IV 6/6 a 8/8 h",
      via: "IV",
      intervalo: "Conforme droga",
      duracao: "Partes moles 2–3 semanas no total (IV → VO com melhora); osteomielite 6 semanas, ou cerca de 3 semanas após ressecção do osso infectado",
      monitorizacao: "Curva térmica, PCR, função renal, cultura",
      contraindicacoes: "Alergias",
      ajustes: "Piperacilina-tazobactam: diluir em 100 mL SF 0,9% e infundir em 30 min (ou infusão estendida em 4 h). Ceftriaxona 2 g em 100 mL SF 0,9% em 30 min. Clindamicina 600 mg em 100 mL SF 0,9% em 20–30 min. Suspeita de MRSA: vancomicina. Ajustar pelo antibiograma e função renal"
    },
    {
      droga: "Descarga (offloading)",
      linha: "l1",
      dose: "Úlcera plantar: dispositivo até o joelho não removível (gesso de contato total ou bota imobilizadora travada); alternativa: bota removível ou sandália/calçado de descarga",
      via: "—",
      intervalo: "Contínuo",
      duracao: "Até a cicatrização; depois calçado terapêutico",
      monitorizacao: "Pele sob o dispositivo a cada troca",
      contraindicacoes: "Gesso de contato total: infecção moderada/grave ou isquemia importante não tratadas",
      ajustes: "Sem descarga a úlcera plantar não cicatriza; é o principal tratamento da úlcera neuropática"
    },
    {
      droga: "Curativo",
      linha: "l1",
      dose: "Limpeza com SF 0,9%; desbridamento cortante de calo e tecido desvitalizado; cobertura que absorva exsudato e mantenha umidade (gaze com AGE, hidrogel, alginato, espuma conforme disponível)",
      via: "Tópica",
      intervalo: "Troca diária ou conforme exsudato e cobertura",
      duracao: "Até cicatrização",
      monitorizacao: "Medida da área semanal (foto e régua)",
      contraindicacoes: "Desbridamento cortante agressivo em pé isquêmico sem avaliação vascular; necrose seca em pé isquêmico deve ser mantida seca",
      ajustes: "Não usar antisséptico citotóxico de rotina nem antibiótico tópico para tratar infecção"
    }
  ],
  destino: {
    agora: [
      "Risco 0–3: educação, calçado e agendamento conforme categoria",
      "Úlcera: descarga, curativo, avaliação vascular, antibiótico se infecção"
    ],
    reavaliar: [
      "Infecção leve: em 48–72 h",
      "Úlcera: semanal (curativo na UBS em dias alternados ou conforme cobertura)",
      "Risco 0: anual · 1: a cada 6–12 meses · 2: a cada 3–6 meses · 3: a cada 1–3 meses"
    ],
    alta: [
      "Úlcera cicatrizada: risco 3 para sempre; calçado terapêutico e seguimento a cada 1–3 meses"
    ],
    observacao: ["—"],
    internacao: [
      "Infecção grave (grau 4)",
      "Infecção moderada com isquemia, abscesso, necessidade de cirurgia, falha do tratamento oral ou impossibilidade de cuidado domiciliar",
      "Descompensação metabólica"
    ],
    transferencia: [
      "Cirurgia vascular (urgente): isquemia crítica, pressão no hálux < 30 mmHg, gangrena",
      "Cirurgia vascular/ortopedia/ambulatório de pé diabético: úlcera sem melhora em 4 semanas, osteomielite, Charcot",
      "Podologia/órtese: deformidades, necessidade de calçado especial"
    ]
  },
  prescricao: {
    ambulatorial: "PÉ DIABÉTICO — INFECÇÃO LEVE (IWGDF/IDSA 2)\nUSO ORAL\n1. Cefalexina 500 mg ----------------------------- 40 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 10 dias.\n   (Se uso de antibiótico nos últimos 3 meses ou infecção moderada tratada em casa: Amoxicilina + clavulanato 875/125 mg — 1 comprimido de 12 em 12 horas por 10 a 14 dias.)\n   (Alergia a penicilina: Clindamicina 300 mg — 1 cápsula de 6 em 6 horas por 10 dias.)\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n\nCURATIVO (UBS / domicílio)\n3. Soro fisiológico 0,9% para limpeza; cobertura conforme protocolo de feridas da UBS; trocar 1 vez ao dia ou quando molhar.\n\nDESCARGA\n4. Não apoiar o pé ferido: usar muletas ou andador; sandália/bota de descarga conforme disponibilidade; não andar descalço.\n\nPEDIDO DE EXAMES\nHemograma, PCR, VHS, glicemia, HbA1c, creatinina. Radiografia do pé ___ em AP, oblíqua e perfil. Índice tornozelo-braquial com doppler se pulsos diminuídos.\n\nPREVENÇÃO (todo diabético)\n- Hidratante nos pés (não entre os dedos) 1 vez ao dia; secar bem entre os dedos; cortar unhas retas; calçado fechado, macio e sem costura interna.",
    hospitalar: "PÉ DIABÉTICO — INFECÇÃO GRAVE OU MODERADA INTERNADA (peso: ___ kg)\n1. Dieta para diabético. Repouso com o membro elevado; sem apoio no pé afetado.\n2. Hidratação: SF 0,9% conforme volemia (sepse: 30 mL/kg nas primeiras 3 h se hipotensão ou lactato ≥ 4).\n3. Colher hemoculturas e cultura de tecido profundo antes do antibiótico (sem atrasar o antibiótico se sepse).\n4. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia.\n5. Clindamicina 600 mg + SF 0,9% 100 mL IV em 30 min, de 8/8 h.\n   OU (grave, uso prévio de antibiótico, risco de Pseudomonas): Piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h (ajustar pela função renal).\n   Suspeita de MRSA: acrescentar vancomicina 15–20 mg/kg IV de 12/12 h (diluir em 250 mL SF 0,9%, infundir em ≥ 1–2 h; ajustar por nível sérico e função renal).\n6. Insulina: esquema basal-bolus ou insulina regular IV se glicemia persistentemente > 180 mg/dL; glicemia capilar antes das refeições e às 22 h.\n7. Dipirona 1 g IV de 6/6 h se dor ou febre.\n8. Enoxaparina 40 mg SC 1 vez ao dia (ClCr < 30: 20 mg).\n9. Avaliação da cirurgia geral/vascular/ortopedia no mesmo dia para drenagem e desbridamento; avaliar perfusão (ITB, doppler).\n10. Curativo diário com SF 0,9%; registrar extensão do eritema e da necrose.\n11. Controles: sinais vitais de 4/4 h, glicemia capilar, hemograma, PCR e creatinina a cada 48–72 h."
  },
  orientacoesRetorno: [
    "Olhe os pés todos os dias, inclusive a sola e entre os dedos (use espelho ou peça ajuda)",
    "Não ande descalço, nem dentro de casa; use calçado fechado, confortável, e confira se não há pedras dentro",
    "Lave os pés com água morna (teste com o cotovelo), seque bem entre os dedos e use hidratante fora dos espaços entre os dedos",
    "Corte as unhas retas; não corte calos nem use calicida; procure a UBS para isso",
    "Se tiver ferida: não pise com o pé ferido, faça o curativo como orientado e tome o antibiótico até o fim",
    "Volte imediatamente se: febre, vermelhidão que aumenta, pus, mau cheiro, pé frio ou roxo, dor forte nova, pé quente e inchado, glicemia muito alta",
    "Retorno em 48–72 h se infecção; semanal se ferida; e conforme seu risco (anual a cada 1–3 meses) mesmo sem ferida"
  ],
  tabelas: [
    {
      titulo: "Classificação de risco IWGDF 2023 e frequência de exame dos pés",
      colunas: ["Categoria", "Critério", "Reavaliação"],
      linhas: [
        ["0 — muito baixo", "Sem perda da sensibilidade protetora (PSP) e sem doença arterial periférica (DAP)", "1 vez ao ano"],
        ["1 — baixo", "PSP ou DAP", "A cada 6–12 meses"],
        ["2 — moderado", "PSP + DAP, ou PSP ou DAP + deformidade", "A cada 3–6 meses"],
        ["3 — alto", "PSP ou DAP + 1 ou mais: úlcera prévia, amputação, doença renal em estágio final", "A cada 1–3 meses"]
      ],
      nota: "Risco 2–3: calçado terapêutico adequado à forma do pé; risco 3 com úlcera plantar prévia: calçado com efeito de descarga demonstrado."
    }
  ],
  fontes: [
    "IWGDF — Practical Guidelines on the prevention and management of diabetes-related foot disease (IWGDF 2023 update)",
    "IWGDF/IDSA — Guidelines on the diagnosis and treatment of diabetes-related foot infections (2023)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Prevenção, diagnóstico e tratamento do pé diabético (2024)",
    "Ministério da Saúde — Manual do pé diabético: estratégias para o cuidado da pessoa com doença crônica (2016)",
    "ADA — Standards of Care in Diabetes (2026): Retinopathy, Neuropathy, and Foot Care"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
