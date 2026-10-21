// Doença falciforme — complicações agudas no PS
registrarFicha({
  id: "crise-falciforme",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Doença falciforme no PS: crise álgica (vaso-oclusiva) e complicações agudas",
  resumo: "Paciente com doença falciforme (HbSS, HbSC, HbSβ) com dor, febre, dispneia, palidez, aumento do baço, sinal neurológico ou priapismo. Analgesia rápida e escalonada, febre tratada como sepse, e reconhecimento precoce de síndrome torácica aguda, sequestro esplênico, AVC e crise aplásica.",
  palavrasChave: "anemia falciforme doenca falciforme crise algica vaso-oclusiva dor sindrome toracica aguda sta sequestro esplenico avc crise aplastica parvovirus priapismo hbss hbsc morfina transfusao exsanguineotransfusao febre",
  critico: {
    tempo: "Analgesia em até 60 min da chegada",
    texto: "Dor: analgésico (opioide IV/SC se dor intensa) em até 1 h, reavaliar a cada 15–30 min. Febre ≥ 38,5 °C: hemocultura e ceftriaxona IV em até 1 h. Sinal neurológico focal: transfusão e hematologista imediatamente."
  },
  alarmes: [
    "Febre ≥ 38,5 °C (risco de sepse por pneumococo — asplenia funcional)",
    "Dor torácica, tosse, taquipneia, SpO₂ < 95% ou queda em relação ao basal (síndrome torácica aguda)",
    "Palidez súbita, prostração, baço aumentado em relação ao basal, taquicardia, hipotensão (sequestro esplênico)",
    "Hemiparesia, afasia, convulsão, cefaleia intensa, rebaixamento (AVC isquêmico ou hemorrágico)",
    "Palidez com reticulócitos baixos (crise aplásica — parvovírus B19)",
    "Ereção dolorosa > 2–4 h (priapismo)",
    "Hb ≥ 2 g/dL abaixo do basal, dor abdominal intensa, icterícia com colúria e dor em hipocôndrio direito",
    "Dor que não responde a opioide ou diferente da habitual"
  ],
  condutaInicial: [
    "Triagem prioritária: sinais vitais, SpO₂, dor (escala numérica ou de faces), temperatura, tamanho do baço (comparar com o registro)",
    "Analgesia em até 60 min: dor moderada/intensa → morfina IV ou SC + dipirona; reavaliar a cada 15–30 min",
    "Acesso venoso; hemograma com reticulócitos, tipagem e prova cruzada; bioquímica",
    "Febre ≥ 38,5 °C: hemocultura e ceftriaxona IV sem esperar exames",
    "Hidratação de manutenção (oral ou IV); não fazer hiper-hidratação (risco de STA e congestão)",
    "O₂ só se SpO₂ < 95% ou abaixo do basal; espirometria de incentivo (10 inspirações a cada 2 h acordado) para todos com dor torácica ou abdominal",
    "Buscar ativamente complicações a cada reavaliação: tórax, baço, neurológico"
  ],
  fataisExcluir: [
    "Sepse/meningite pneumocócica",
    "Síndrome torácica aguda",
    "Sequestro esplênico agudo (choque hipovolêmico)",
    "AVC isquêmico ou hemorrágico",
    "Crise aplásica (anemia grave)",
    "Hemólise por reação transfusional tardia (hiper-hemólise)",
    "Colecistite/coledocolitíase, abdome agudo, osteomielite"
  ],
  proximaDecisao: "Dor controlada com analgésico oral após 4–6 h de observação, sem febre e sem complicação → alta com analgésico e retorno ao hemocentro. Precisou de ≥ 2–3 doses de opioide IV, febre em menor de 5 anos ou com sinais de gravidade, STA, sequestro, AVC ou Hb muito abaixo do basal → internar (UTI se hipoxemia progressiva, choque ou AVC).",
  clinica: {
    anamnese: [
      "Genótipo (SS, SC, Sβ⁰, Sβ⁺), Hb basal, tamanho basal do baço, transfusões e aloanticorpos (cartão do hemocentro)",
      "Localização e intensidade da dor; é igual às crises habituais? analgésicos já usados em casa",
      "Febre, tosse, dor torácica, dispneia",
      "Uso de hidroxiureia, penicilina profilática, vacinas em dia",
      "Cefaleia, fraqueza, alteração da fala, convulsão",
      "Gatilhos: frio, desidratação, infecção, esforço, estresse, gestação"
    ],
    exameFisico: [
      "FR, SpO₂, ausculta pulmonar (estertores, sopro tubário)",
      "Palidez, icterícia, perfusão, PA, FC",
      "Baço e fígado (medir em cm abaixo do rebordo e comparar)",
      "Exame neurológico sumário (força, fala, face, marcha)",
      "Articulações e ossos (dactilite em lactente; edema, calor: osteomielite)",
      "Pênis (priapismo), abdome (Murphy, defesa)"
    ],
    diferenciais: [
      { dx: "Síndrome torácica aguda", pista: "Infiltrado novo na radiografia + febre, dor torácica, tosse, taquipneia ou hipoxemia; costuma surgir 24–72 h após a crise álgica" },
      { dx: "Sequestro esplênico", pista: "Criança pequena (SS) ou maior (SC), baço crescendo, Hb ≥ 2 g/dL abaixo do basal, reticulócitos altos, choque" },
      { dx: "Crise aplásica", pista: "Palidez, cansaço, reticulócitos muito baixos, baço sem aumento; parvovírus B19" },
      { dx: "Osteomielite / artrite séptica", pista: "Dor localizada persistente, febre, edema; Salmonella e S. aureus" },
      { dx: "Colecistite, pancreatite, abdome agudo", pista: "Dor em hipocôndrio direito, Murphy, colúria; lipase" },
      { dx: "Reação transfusional hemolítica tardia", pista: "Transfusão nas últimas 2–3 semanas, dor, Hb abaixo do pré-transfusional, colúria" }
    ],
    gravidade: [
      "Crise álgica não complicada: dor sem febre, sem hipoxemia, Hb próxima do basal",
      "Grave: febre em < 5 anos ou com toxemia, STA, sequestro, AVC, Hb < basal − 2 g/dL, SpO₂ < 92%",
      "UTI: hipoxemia progressiva apesar de O₂, choque, AVC, rebaixamento, falência de múltiplos órgãos"
    ]
  },
  exames: [
    {
      nome: "Hemograma com reticulócitos",
      pedido: "Hemograma completo com contagem de reticulócitos. Tipagem ABO/Rh, pesquisa de anticorpos irregulares e prova cruzada (reserva de concentrado de hemácias fenotipado e leucorreduzido).",
      porQue: "Comparar Hb com a basal; diferenciar sequestro (reticulócitos altos) de crise aplásica (reticulócitos baixos).",
      esperar: "HbSS: Hb basal em geral 6–9 g/dL; leucocitose basal é comum.",
      interpretacao: "Queda ≥ 2 g/dL do basal = complicação. Reticulócitos muito baixos = aplasia.",
      limitacoes: "Leucocitose não diferencia infecção de crise."
    },
    {
      nome: "Bioquímica e hemólise",
      pedido: "Ureia, creatinina, sódio, potássio, bilirrubinas, DHL, TGO, TGP; lipase se dor abdominal.",
      porQue: "Função renal (AINE, contraste), hemólise, colestase.",
      esperar: "DHL e bilirrubina indireta elevadas cronicamente.",
      interpretacao: "Aumento acima do basal sugere hemólise aguda.",
      limitacoes: "—"
    },
    {
      nome: "Hemocultura e foco infeccioso",
      pedido: "Hemocultura (1 amostra pediátrica; 2 em adulto), urina tipo 1 e urocultura; líquor se sinais meníngeos ou criança toxemiada.",
      porQue: "Asplenia funcional: risco de sepse por germes encapsulados.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não atrasar antibiótico."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax PA e perfil (ou AP no leito).",
      porQue: "Diagnóstico de síndrome torácica aguda.",
      esperar: "Infiltrado novo (segmento ou mais).",
      interpretacao: "Infiltrado novo + sintoma respiratório ou febre = STA.",
      limitacoes: "Pode ser normal no início; repetir se piora. Fazer em todo paciente com febre ou sintoma respiratório."
    },
    {
      nome: "Neuroimagem (sinal neurológico)",
      pedido: "Tomografia de crânio sem contraste de urgência (excluir hemorragia); ressonância com difusão quando disponível.",
      porQue: "AVC isquêmico ou hemorrágico.",
      esperar: "—",
      interpretacao: "Não atrasar a transfusão para fazer RM.",
      limitacoes: "TC pode ser normal nas primeiras horas do AVC isquêmico."
    }
  ],
  tratamento: [
    {
      droga: "Morfina",
      linha: "l1",
      dose: "Criança: 0,1 mg/kg/dose (máx. 10 mg/dose) · Adulto: 0,1 mg/kg (em geral 5–10 mg); considerar a dose que funcionou em crises anteriores",
      via: "IV lento ou SC",
      intervalo: "Reavaliar a cada 15–30 min; repetir 25–50% da dose inicial se dor persistir; depois de 2/2 a 4/4 h fixa ou PCA",
      duracao: "Até controle; transição para oral",
      monitorizacao: "FR, sedação, SpO₂ (contínua se infusão), constipação, prurido",
      contraindicacoes: "Depressão respiratória",
      ajustes: "Diluir 10 mg em 9 mL de SF 0,9% (1 mg/mL). Prescrever laxativo junto. Naloxona disponível. Evitar meperidina"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "Criança: 15–25 mg/kg/dose (máx. 1 g) · Adulto: 1 g",
      via: "IV ou oral",
      intervalo: "6/6 h fixa",
      duracao: "Durante a crise",
      monitorizacao: "PA (hipotensão com infusão rápida)",
      contraindicacoes: "< 3 meses ou < 5 kg; alergia; agranulocitose prévia",
      ajustes: "Associar ao opioide (efeito poupador)"
    },
    {
      droga: "Cetorolaco ou ibuprofeno (AINE)",
      linha: "adj",
      dose: "Cetorolaco: criança 0,5 mg/kg (máx. 30 mg); adulto 30 mg IV (15 mg se ≥ 65 anos/< 50 kg) · Ibuprofeno oral 10 mg/kg (máx. 600 mg)",
      via: "IV / oral",
      intervalo: "6/6 h (cetorolaco) · 8/8 h (ibuprofeno)",
      duracao: "Cetorolaco: máx. 5 dias",
      monitorizacao: "Creatinina, sangramento",
      contraindicacoes: "Lesão renal, desidratação, gestação, sangramento, úlcera",
      ajustes: "Muitos pacientes falciformes têm nefropatia; conferir creatinina"
    },
    {
      droga: "Ceftriaxona (febre)",
      linha: "l1",
      dose: "Criança: 50–75 mg/kg (máx. 2 g); 100 mg/kg (máx. 4 g/dia) se suspeita de meningite · Adulto: 2 g",
      via: "IV",
      intervalo: "24/24 h (meningite: 12/12 h)",
      duracao: "Até culturas negativas por 48 h e afebril, ou conforme o foco",
      monitorizacao: "Culturas",
      contraindicacoes: "Alergia grave a cefalosporina (usar levofloxacino ou clindamicina conforme o caso)",
      ajustes: "Dar em até 1 h da chegada. Diluir em SF 0,9% e infundir em 30 min. Toxemiado/choque: acrescentar vancomicina"
    },
    {
      droga: "Azitromicina (síndrome torácica aguda, junto da ceftriaxona)",
      linha: "l1",
      dose: "Criança: 10 mg/kg no 1º dia (máx. 500 mg), depois 5 mg/kg (máx. 250 mg) · Adulto: 500 mg no 1º dia, depois 250 mg",
      via: "Oral (ou IV)",
      intervalo: "24/24 h",
      duracao: "5 dias",
      monitorizacao: "QT se outros fármacos que prolongam",
      contraindicacoes: "—",
      ajustes: "Cobre atípicos (Mycoplasma, Chlamydia)"
    },
    {
      droga: "Concentrado de hemácias (fenotipado, leucorreduzido)",
      linha: "l1",
      dose: "Transfusão simples 10 mL/kg (STA com Hb > 1 g/dL abaixo do basal, crise aplásica, sequestro)",
      via: "IV",
      intervalo: "Em 2–4 h (sequestro com choque: mais rápido, em alíquotas pequenas)",
      duracao: "Dose única ou repetir conforme Hb",
      monitorizacao: "Hb pós-transfusional, sinais de sobrecarga",
      contraindicacoes: "—",
      ajustes: "Não ultrapassar Hb 10 g/dL (hiperviscosidade). Sequestro: o baço devolve sangue ao melhorar — transfundir volumes pequenos. AVC e STA grave (SpO₂ < 90% com O₂, piora rápida): exsanguineotransfusão (alvo HbS < 30%) com hematologista; transfusão simples enquanto aguarda"
    },
    {
      droga: "Meperidina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Metabólito normeperidina causa convulsão",
      ajustes: "Usar morfina"
    }
  ],
  destino: {
    agora: [
      "Analgesia em até 1 h; febre: hemocultura + ceftriaxona em até 1 h",
      "Sinal neurológico: TC, transfusão, hematologista e UTI"
    ],
    reavaliar: [
      "Dor a cada 15–30 min até controle, depois a cada 2–4 h",
      "SpO₂, FR, ausculta e baço a cada turno; radiografia se febre ou sintoma respiratório novo"
    ],
    alta: [
      "Dor controlada com analgésico oral, afebril (ou febre em criança > 5 anos, bom estado, culturas colhidas, ceftriaxona feita e retorno garantido em 24 h — conforme protocolo do hemocentro), Hb estável, sem STA",
      "Retorno ao hemocentro/hematologista em poucos dias"
    ],
    observacao: [
      "Crise álgica que melhora com 1–2 doses de opioide: observar 4–6 h"
    ],
    internacao: [
      "Dor não controlada, STA, sequestro, crise aplásica, febre com toxemia ou em < 5 anos (conforme protocolo local), priapismo refratário",
      "UTI: hipoxemia progressiva, choque, AVC"
    ],
    transferencia: [
      "Serviço sem banco de sangue, hematologia ou UTI: transferir após analgesia, antibiótico e O₂, com cartão do hemocentro"
    ]
  },
  prescricao: {
    hospitalar: "CRISE ÁLGICA NA DOENÇA FALCIFORME — CRIANÇA (peso: ___ kg)\n1. Dieta livre conforme aceitação; estimular líquidos orais.\n2. Soro de manutenção (Holliday-Segar): SG 5% + NaCl (solução isotônica) ___ mL/h; NÃO hiper-hidratar. Bolus só se desidratada.\n3. Morfina 0,1 mg/kg/dose = ___ mg (máx. 10 mg) IV lento (diluir 10 mg em 9 mL SF 0,9% = 1 mg/mL). Reavaliar dor em 15–30 min; se dor persistente, repetir 25–50% da dose. Depois: ___ mg IV de 4/4 h fixa.\n4. Dipirona 25 mg/kg/dose = ___ mg (máx. 1 g) IV de 6/6 h fixa.\n5. Lactulose 667 mg/mL 0,5–1 mL/kg/dia (máx. 30 mL) VO 1 vez ao dia enquanto em uso de opioide.\n6. Naloxona 0,1 mg/kg (máx. 2 mg) IV se depressão respiratória — deixar prescrito.\n7. Espirometria de incentivo: 10 inspirações profundas a cada 2 h acordado.\n8. O₂ se SpO₂ < 95% ou abaixo do basal.\n9. SE FEBRE ≥ 38,5 °C: colher hemocultura e fazer Ceftriaxona 75 mg/kg = ___ mg (máx. 2 g) IV em 30 min, diluída em SF 0,9% 50 mL, 1 vez ao dia (100 mg/kg/dia, máx. 4 g/dia, de 12/12 h se meningite).\n10. SE STA: Ceftriaxona como acima + Azitromicina 10 mg/kg no D1 (máx. 500 mg) e 5 mg/kg (máx. 250 mg) D2–D5 VO; concentrado de hemácias fenotipado 10 mL/kg em 2–4 h se Hb > 1 g/dL abaixo do basal; avisar hematologista.\n11. Controles: sinais vitais e SpO₂ de 4/4 h (contínua se opioide em infusão), escala de dor de 2/2 h, baço 1 vez por turno, diurese, Hb e reticulócitos diários.\n\nADULTO: Morfina 0,1 mg/kg (em geral 5–10 mg) IV/SC, repetir conforme acima; Dipirona 1 g IV de 6/6 h; Cetorolaco 30 mg IV de 6/6 h por até 5 dias se creatinina normal; Ceftriaxona 2 g IV 1 vez ao dia se febre; Azitromicina 500 mg D1 e 250 mg D2–D5 na STA; Enoxaparina 40 mg SC 1 vez ao dia (profilaxia de TEV) se internado e sem contraindicação.",
    ambulatorial: "ALTA APÓS CRISE ÁLGICA — ADULTO\nUSO ORAL\n1. Dipirona 500 mg ------------------------------------ 30 comprimidos\n   Tomar 2 comprimidos (1 g) de 6 em 6 horas por 3 dias, depois se dor.\n2. Ibuprofeno 600 mg ---------------------------------- 10 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após refeições, por até 3 dias (somente se função renal normal).\n3. Codeína 30 mg + paracetamol 500 mg ---------------- 12 comprimidos (receita de controle especial)\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor forte apesar dos itens 1 e 2.\n\nCRIANÇA (peso: ___ kg)\n1. Dipirona 500 mg/mL gotas — 15–25 mg/kg por dose (aprox. 1 gota/kg, máximo 40 gotas) de 6 em 6 horas por 3 dias, depois se dor.\n2. Ibuprofeno 50 mg/mL — 10 mg/kg por dose = 0,2 mL/kg (máximo 600 mg) de 8 em 8 horas por até 3 dias, se hidratada e com função renal normal.\n(Codeína: contraindicada em menores de 12 anos.)\n\nManter hidroxiureia, ácido fólico e penicilina profilática conforme o hemocentro."
  },
  orientacoesRetorno: [
    "Beber bastante água, evitar frio, roupas molhadas e esforço intenso até a dor passar",
    "Usar os analgésicos nos horários, sem esperar a dor ficar forte",
    "Voltar imediatamente se: febre ≥ 38,5 °C, falta de ar, dor no peito, tosse, palidez forte, barriga crescendo do lado esquerdo, fraqueza em braço ou perna, boca torta, dificuldade para falar, convulsão, dor de cabeça forte, ereção dolorosa que não passa em 2 horas, dor que não melhora com os remédios",
    "Levar sempre o cartão do hemocentro (tipo de doença, hemoglobina habitual, transfusões)",
    "Consulta no hemocentro ou com o hematologista em até 1 semana"
  ],
  tabelas: [
    {
      titulo: "Complicações agudas — reconhecer e agir",
      colunas: ["Complicação", "Como reconhecer", "Conduta imediata"],
      linhas: [
        ["Febre", "T ≥ 38,5 °C", "Hemocultura + ceftriaxona IV em até 1 h; radiografia de tórax"],
        ["Síndrome torácica aguda", "Infiltrado novo + febre, dor torácica, tosse, taquipneia ou hipoxemia", "O₂, ceftriaxona + azitromicina, espirometria de incentivo, analgesia, transfusão simples; exsanguineotransfusão se grave"],
        ["Sequestro esplênico", "Baço maior que o basal + Hb ≥ 2 g/dL abaixo do basal, reticulócitos altos", "Volume para choque, transfusão em alíquotas pequenas (não exceder Hb 10 g/dL); ensinar palpação do baço"],
        ["Crise aplásica", "Palidez, Hb baixa, reticulócitos muito baixos", "Transfusão simples; isolar de gestantes e imunodeprimidos (parvovírus)"],
        ["AVC", "Déficit focal, convulsão, cefaleia intensa", "TC, transfusão imediata, exsanguineotransfusão (HbS < 30%), UTI"],
        ["Priapismo", "Ereção dolorosa ≥ 2–4 h", "Analgesia, hidratação, urinar; ≥ 4 h: urologia (aspiração e irrigação)"]
      ],
      nota: "Comparar sempre com Hb e baço basais do paciente. Concentrado de hemácias fenotipado (Rh e Kell) e leucorreduzido."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Doença Falciforme (Portaria Conjunta SAES/SECTICS nº 16, de 1º/11/2024)",
    "Ministério da Saúde — Doença falciforme: condutas básicas para tratamento (2012) e Manual de eventos agudos em doença falciforme (2009)",
    "American Society of Hematology — 2020 Guidelines for Sickle Cell Disease: Management of Acute and Chronic Pain; Transfusion Support; Prevention, Diagnosis and Treatment of Cerebrovascular Disease (2020)",
    "OMS — Guideline on the management of sickle cell disease in children and adolescents (2026)",
    "NHLBI — Evidence-Based Management of Sickle Cell Disease: Expert Panel Report (2014)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
