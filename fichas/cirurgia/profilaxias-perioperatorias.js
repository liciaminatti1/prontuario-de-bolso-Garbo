// Profilaxias perioperatórias: jejum, antibiótico cirúrgico, TEV
registrarFicha({
  id: "profilaxias-perioperatorias",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Profilaxias perioperatórias: jejum, antibiótico cirúrgico e TEV",
  resumo: "Tabelas de consulta rápida: tempo de jejum pré-anestésico (ASA), profilaxia antibiótica cirúrgica (escolha, dose, momento, redose e duração) e profilaxia de tromboembolismo venoso pelo escore de Caprini.",
  palavrasChave: "jejum pre operatorio jejum pre anestesico asa 2023 liquidos claros abreviacao jejum profilaxia antibiotica cirurgica cefazolina redose clindamicina vancomicina metronidazol cefoxitina profilaxia tev tromboembolismo caprini enoxaparina heparina meia compressiva compressao pneumatica",
  critico: {
    tempo: "Cefazolina ≤ 60 min da incisão",
    texto: "Antibiótico profilático nos 60 min antes da incisão (vancomicina e fluoroquinolona: 120 min), redose em cirurgia longa e suspensão em até 24 h."
  },
  alarmes: [
    "Alergia grave a betalactâmico (anafilaxia, angioedema) — usar alternativa; alergia não grave à penicilina permite cefazolina",
    "Cirurgia longa ou sangramento > 1.500 mL — redose do antibiótico",
    "Sangramento ativo, plaquetas < 50 mil, coagulopatia, anestesia de neuroeixo recente — cautela com anticoagulante profilático",
    "ClCr < 30 mL/min — ajustar enoxaparina ou usar heparina não fracionada",
    "Gastroparesia, obstrução, gestação a termo, GLP-1 com sintomas: jejum padrão pode não ser suficiente (risco de broncoaspiração)"
  ],
  conduta: [
    "Jejum: seguir tabela ASA; não prolongar jejum além do necessário; líquidos claros até 2 h antes em adultos saudáveis (inclusive bebida com carboidrato, exceto diabéticos conforme serviço)",
    "Antibiótico: indicado em cirurgia limpa com prótese/implante, limpa-contaminada e contaminada; não indicado em cirurgia limpa sem implante e de baixo risco (ex.: colecistectomia laparoscópica eletiva de baixo risco)",
    "Infecção já estabelecida (cirurgia suja): é tratamento, não profilaxia",
    "Dose única ou até 24 h; não prolongar por drenos ou cateteres",
    "TEV: calcular Caprini na admissão; associar deambulação precoce; mecânica se risco de sangramento",
    "Cirurgia oncológica abdominal/pélvica de grande porte: profilaxia farmacológica estendida por 4 semanas"
  ],
  tabelas: [
    {
      titulo: "Jejum pré-anestésico (ASA 2017, atualização 2023)",
      colunas: ["Ingesta", "Jejum mínimo"],
      linhas: [
        ["Líquidos claros (água, chá, café sem leite, suco sem polpa, isotônico, bebida com carboidrato)", "2 h"],
        ["Leite materno", "4 h"],
        ["Fórmula infantil", "6 h"],
        ["Leite não humano", "6 h"],
        ["Refeição leve (torrada e líquido claro)", "6 h"],
        ["Refeição com fritura, gordura ou carne", "8 h ou mais"]
      ],
      nota: "Goma de mascar não deve adiar a cirurgia (ASA 2023). Consensos europeus pediátricos (ESAIC 2022) aceitam líquidos claros até 1 h antes em crianças. Não se aplica a emergências e pacientes com esvaziamento gástrico retardado."
    },
    {
      titulo: "Profilaxia antibiótica cirúrgica — doses (ASHP/IDSA/SIS/SHEA 2013)",
      colunas: ["Droga", "Adulto", "Criança", "Redose (se função renal normal)"],
      linhas: [
        ["Cefazolina", "2 g IV (3 g se ≥ 120 kg)", "30 mg/kg (máx. 2 g)", "A cada 4 h"],
        ["Cefuroxima", "1,5 g IV", "50 mg/kg (máx. 1,5 g)", "A cada 4 h"],
        ["Cefoxitina", "2 g IV", "40 mg/kg (máx. 2 g)", "A cada 2 h"],
        ["Ceftriaxona", "2 g IV", "50–75 mg/kg (máx. 2 g)", "Não precisa"],
        ["Metronidazol", "500 mg IV", "15 mg/kg (máx. 500 mg)", "Não precisa"],
        ["Clindamicina", "900 mg IV", "10 mg/kg (máx. 900 mg)", "A cada 6 h"],
        ["Vancomicina", "15 mg/kg IV (iniciar 60–120 min antes)", "15 mg/kg", "Não precisa"],
        ["Gentamicina", "5 mg/kg IV (peso ajustado se obeso), dose única", "2,5 mg/kg", "Não precisa"],
        ["Ciprofloxacino", "400 mg IV (iniciar 60–120 min antes)", "10 mg/kg (máx. 400 mg)", "Não precisa"]
      ],
      nota: "Momento: terminar a infusão até 60 min antes da incisão (vancomicina/fluoroquinolona: até 120 min). Redose também se sangramento > 1.500 mL. Duração: dose única ou até 24 h."
    },
    {
      titulo: "Escolha do antibiótico por cirurgia (resumo)",
      colunas: ["Cirurgia", "Escolha", "Alergia grave a betalactâmico"],
      linhas: [
        ["Hérnia com tela, mama, ortopédica limpa, vascular, cardíaca", "Cefazolina", "Clindamicina ou vancomicina"],
        ["Gastroduodenal, bariátrica, biliar de alto risco (aberta, idoso, colecistite, icterícia)", "Cefazolina", "Clindamicina ou vancomicina + gentamicina ou ciprofloxacino"],
        ["Apendicectomia (não complicada), colorretal, intestino delgado com obstrução", "Cefazolina + metronidazol (ou cefoxitina)", "Clindamicina + gentamicina ou ciprofloxacino; ou metronidazol + gentamicina"],
        ["Cesárea", "Cefazolina antes da incisão", "Clindamicina + gentamicina"],
        ["Histerectomia", "Cefazolina (ou cefoxitina)", "Clindamicina ou vancomicina + gentamicina"],
        ["Urológica com abertura do trato urinário", "Cefazolina (± gentamicina) conforme procedimento", "Gentamicina ± clindamicina"],
        ["Colecistectomia laparoscópica eletiva de baixo risco; cirurgia limpa sem implante", "Não indicada", "—"]
      ],
      nota: "MRSA colonizado ou alta prevalência: associar vancomicina à cefazolina."
    },
    {
      titulo: "Escore de Caprini (pontos)",
      colunas: ["Pontos", "Fatores"],
      linhas: [
        ["1", "Idade 41–60; cirurgia menor; IMC > 25; edema de MMII; varizes; gestação ou pós-parto; abortos de repetição; anticoncepcional/TRH; sepse < 1 mês; doença pulmonar grave ou pneumonia < 1 mês; DPOC; IAM; IC < 1 mês; doença inflamatória intestinal; paciente clínico acamado"],
        ["2", "Idade 61–74; artroscopia; cirurgia aberta maior (> 45 min); laparoscopia > 45 min; câncer; acamado > 72 h; imobilização gessada; acesso venoso central"],
        ["3", "Idade ≥ 75; TEV prévio; história familiar de TEV; trombofilia (fator V Leiden, protrombina 20210A, anticoagulante lúpico, anticardiolipina, homocisteína elevada, outras); trombocitopenia induzida por heparina"],
        ["5", "AVC < 1 mês; artroplastia eletiva de quadril/joelho; fratura de quadril, pelve ou perna; lesão medular aguda < 1 mês"]
      ]
    },
    {
      titulo: "Profilaxia de TEV conforme Caprini (ACCP 2012, cirurgia geral e abdominopélvica)",
      colunas: ["Caprini", "Risco", "Conduta"],
      linhas: [
        ["0", "Muito baixo", "Deambulação precoce"],
        ["1–2", "Baixo", "Mecânica (compressão pneumática intermitente)"],
        ["3–4", "Moderado", "Enoxaparina 40 mg SC 1×/dia ou HNF 5.000 UI SC 12/12 h; mecânica se alto risco de sangramento"],
        ["≥ 5", "Alto", "Enoxaparina 40 mg SC 1×/dia ou HNF 5.000 UI SC 8/8 h + mecânica; câncer abdominopélvico: estender por 4 semanas"]
      ],
      nota: "ClCr < 30: enoxaparina 30 mg SC 1×/dia ou HNF. Obesidade grave: considerar enoxaparina 40 mg 12/12 h. Iniciar 12 h antes ou 6–12 h após a cirurgia, conforme hemostasia e anestesia de neuroeixo (intervalo de 12 h entre enoxaparina profilática e punção/retirada de cateter)."
    }
  ],
  prescricao: {
    hospitalar: "PROFILAXIAS PERIOPERATÓRIAS — MODELO (ADULTO)\n1. Jejum para sólidos a partir de ___ h (8 h antes); líquidos claros liberados até 2 h antes da cirurgia.\n2. Cefazolina 2 g + SF 0,9% 100 mL IV em 15–30 min, terminar até 60 min antes da incisão (no centro cirúrgico, na indução). Repetir 2 g a cada 4 h de cirurgia ou se sangramento > 1.500 mL.\n   (Colorretal/apendicectomia: + metronidazol 500 mg IV em 30–60 min na mesma janela.)\n   (Alergia grave a betalactâmico: clindamicina 900 mg IV em 30 min; redose a cada 6 h.)\n3. Enoxaparina 40 mg SC 1 vez ao dia, iniciar ___ h após a cirurgia (Caprini ≥ 3) — ClCr < 30: 30 mg SC 1 vez ao dia.\n   OU heparina não fracionada 5.000 UI SC de 8/8 h (Caprini ≥ 5) ou de 12/12 h (Caprini 3–4).\n4. Compressão pneumática intermitente / meias elásticas se Caprini ≥ 5 ou se contraindicação à anticoagulação.\n5. Deambulação precoce.\n\nCRIANÇA: cefazolina 30 mg/kg IV (máx. 2 g) até 60 min antes da incisão; redose a cada 4 h. Metronidazol 15 mg/kg (máx. 500 mg). Clindamicina 10 mg/kg (máx. 900 mg)."
  },
  orientacoesRetorno: [
    "Respeitar o jejum orientado; água e outros líquidos claros podem ser liberados até 2 horas antes, se a equipe permitir",
    "Levantar e caminhar o quanto antes após a cirurgia, como orientado",
    "Se for para casa com injeção de anticoagulante: aplicar todos os dias no horário certo, pelo tempo prescrito",
    "Procurar atendimento se: inchaço e dor na panturrilha, falta de ar súbita, dor no peito, sangramentos"
  ],
  fontes: [
    "ASA — Practice Guidelines for Preoperative Fasting (2017) e Modular Update on carbohydrate-containing clear liquids, chewing gum and pediatric clear liquids (2023)",
    "ASHP/IDSA/SIS/SHEA — Clinical practice guidelines for antimicrobial prophylaxis in surgery (Bratzler et al., 2013)",
    "ANVISA — Medidas de prevenção de infecção relacionada à assistência à saúde (2017)",
    "ACCP — Prevention of VTE in nonorthopedic surgical patients, 9ª ed. (Gould et al., 2012); ASH — Guidelines for prevention of VTE in surgical hospitalized patients (2019)",
    "Caprini JA. Thrombosis risk assessment (Dis Mon, 2005)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
