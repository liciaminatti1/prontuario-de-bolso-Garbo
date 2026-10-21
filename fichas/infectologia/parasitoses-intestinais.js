// Parasitoses intestinais e vermifugação
registrarFicha({
  id: "parasitoses-intestinais",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Parasitoses intestinais e vermifugação",
  resumo: "Helmintíases (ascaridíase, ancilostomíase, tricuríase, estrongiloidíase) e protozooses (giardíase, amebíase) em crianças e adultos: diagnóstico, tratamento por agente e tratamento preventivo em massa (desverminação) segundo OMS/Ministério da Saúde.",
  palavrasChave: "verminose vermes parasitose intestinal lombriga ascaris ascaridiase ancilostomo amarelao ancilostomiase tricuris tricuriase estrongiloides estrongiloidiase giardia giardiase ameba amebiase albendazol mebendazol ivermectina metronidazol secnidazol tinidazol nitazoxanida desverminacao parasitologico de fezes epf",
  critico: {
    tempo: "Ivermectina antes de corticoide",
    texto: "Antes de corticoide em dose alta ou imunossupressão, tratar empiricamente (ou investigar) estrongiloidíase: risco de hiperinfecção fatal. Dor abdominal com vômitos e massa em criança com áscaris: suspeitar suboclusão."
  },
  alarmes: [
    "Dor abdominal em cólica, vômitos (às vezes com vermes), distensão e parada de eliminação de fezes em criança (suboclusão por bolo de áscaris)",
    "Icterícia, dor em hipocôndrio direito ou pancreatite em quem elimina áscaris (migração biliar)",
    "Imunossuprimido, em uso de corticoide ou HTLV-1 positivo com febre, dor abdominal, sintomas respiratórios ou sepse por gram-negativo (hiperinfecção por Strongyloides)",
    "Disenteria com febre, dor intensa, toxemia (colite amebiana grave) ou febre com dor em hipocôndrio direito (abscesso hepático amebiano)",
    "Anemia grave, edema, desnutrição (ancilostomíase intensa, tricuríase maciça com prolapso retal)",
    "Diarreia crônica com perda de peso ou baixo ganho em criança (giardíase, outras causas)"
  ],
  condutaInicial: [
    "Suspeitar em: dor abdominal recorrente, diarreia, eliminação de vermes, prurido anal, anemia ferropriva, eosinofilia, baixo ganho de peso, condições precárias de saneamento",
    "Pedir parasitológico de fezes (3 amostras em dias alternados) quando houver sintomas; métodos específicos se suspeita de Strongyloides (Baermann-Moraes/Rugai)",
    "Tratar conforme agente identificado; com eliminação de verme adulto típico, tratar sem esperar exame",
    "Tratamento preventivo em massa (desverminação) com albendazol dose única em escolares e pré-escolares de áreas com prevalência de geo-helmintos ≥ 20% (OMS/MS), sem exame prévio",
    "Orientar higiene: lavar as mãos, ferver/filtrar água, higienizar verduras e frutas, andar calçado, unhas curtas; tratar contactantes conforme o caso",
    "Gestante: preferir tratar após o 1º trimestre; metronidazol pode ser usado; albendazol e mebendazol no 2º/3º trimestre se benefício"
  ],
  fataisExcluir: [
    "Obstrução intestinal ou volvo por áscaris",
    "Hiperinfecção / estrongiloidíase disseminada",
    "Colite amebiana fulminante / abscesso hepático amebiano",
    "Outras causas de diarreia crônica e emagrecimento (DII, doença celíaca, HIV)"
  ],
  proximaDecisao: "Sintomas persistentes após tratamento adequado → repetir parasitológico 1–3 semanas depois e reconsiderar diagnóstico. Eosinofilia persistente sem parasita encontrado → pesquisar Strongyloides (método de Baermann/sorologia) e tratar empiricamente se imunossupressão prevista.",
  clinica: {
    anamnese: [
      "Dor abdominal, diarreia (aguda, crônica, com muco/sangue), esteatorreia, flatulência, distensão (giardíase)",
      "Eliminação de vermes pelas fezes, boca ou nariz (áscaris); prurido anal noturno (oxiúros — ver ficha oxiuriase)",
      "Tosse, chiado, febre transitória (síndrome de Löffler — migração pulmonar de larvas de áscaris, ancilostomídeos, estrongiloides)",
      "Lesão cutânea serpiginosa (larva currens) ou prurido nos pés após andar descalço",
      "Saneamento, água, contato com solo, creche, viagens, uso de corticoide, HIV, HTLV",
      "Perda de peso, cansaço, palidez, geofagia (anemia)"
    ],
    exameFisico: [
      "Estado nutricional (curva de crescimento), palidez",
      "Abdome: distensão, massa palpável em cordão (bolo de áscaris), dor localizada",
      "Pele: urticária, larva currens, prurido",
      "Região perianal: escoriações (oxiúros), prolapso retal (tricuríase maciça)",
      "Sinais de desidratação se diarreia"
    ],
    diferenciais: [
      { dx: "Giardíase", pista: "Diarreia aquosa ou esteatorreica, distensão, flatulência; crianças em creche; má absorção e baixo ganho de peso" },
      { dx: "Amebíase intestinal invasiva", pista: "Disenteria (muco e sangue), cólica, tenesmo; diferenciar de shigelose e DII" },
      { dx: "Estrongiloidíase", pista: "Dor epigástrica, diarreia, urticária, eosinofilia; grave em imunossuprimidos" },
      { dx: "Ancilostomíase", pista: "Anemia ferropriva, hipoproteinemia; prurido no local de penetração" },
      { dx: "Diarreia bacteriana / viral", pista: "Aguda, febre, contexto epidêmico" },
      { dx: "Doença celíaca, intolerância à lactose, DII", pista: "Diarreia crônica sem parasita encontrado" }
    ],
    gravidade: [
      "Leve: assintomático ou sintomas digestivos discretos — tratamento ambulatorial",
      "Moderada: anemia, perda de peso, diarreia persistente",
      "Grave: obstrução intestinal, migração biliar, hiperinfecção por Strongyloides, colite amebiana grave, abscesso hepático — hospital"
    ]
  },
  exames: [
    {
      nome: "Parasitológico de fezes",
      pedido: "Exame parasitológico de fezes (EPF) — 3 amostras colhidas em dias alternados, em conservante (MIF), métodos de Hoffman/Lutz e Faust.",
      porQue: "Identificar ovos, larvas e cistos.",
      esperar: "Negativo.",
      interpretacao: "Positivo: tratar o agente. Entamoeba histolytica/dispar à microscopia não distingue a espécie patogênica; tratar se sintomático.",
      limitacoes: "Uma amostra única tem baixa sensibilidade. Não detecta bem Strongyloides nem Enterobius (este exige fita adesiva perianal)."
    },
    {
      nome: "Pesquisa de larvas de Strongyloides",
      pedido: "Pesquisa de larvas nas fezes pelo método de Baermann-Moraes (ou Rugai) — 3 amostras. Sorologia para Strongyloides se disponível.",
      porQue: "EPF comum tem baixa sensibilidade para larvas.",
      esperar: "Negativo.",
      interpretacao: "Positivo ou sorologia reagente: ivermectina.",
      limitacoes: "Sorologia pode ter reação cruzada com outros helmintos e permanecer positiva após tratamento."
    },
    {
      nome: "Hemograma",
      pedido: "Hemograma completo. Ferritina se anemia.",
      porQue: "Anemia ferropriva (ancilostomíase, tricuríase) e eosinofilia (helmintos teciduais).",
      esperar: "Normal.",
      interpretacao: "Eosinofilia sugere helmintíase com fase tecidual (Strongyloides, ancilostomídeos, áscaris na fase larvária, toxocaríase); protozoários não causam eosinofilia.",
      limitacoes: "Eosinofilia pode estar ausente na hiperinfecção."
    },
    {
      nome: "Imagem (complicações)",
      pedido: "Radiografia de abdome (suspeita de obstrução) e USG de abdome (bolo de áscaris, vias biliares, abscesso hepático).",
      porQue: "Avaliar complicações.",
      esperar: "—",
      interpretacao: "Níveis hidroaéreos e imagem em 'miolo de pão'/novelo: obstrução por áscaris.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Albendazol (ascaridíase, ancilostomíase; desverminação em massa)",
      linha: "l1",
      dose: "≥ 2 anos e adulto: 400 mg. 12–23 meses: 200 mg (OMS)",
      via: "VO (mastigar o comprimido ou suspensão 40 mg/mL)",
      intervalo: "Dose única",
      duracao: "Dose única. Tricuríase: 400 mg/dia por 3 dias (dose única tem cura baixa). Repetir em 2–3 semanas se infecção intensa",
      monitorizacao: "Eliminação de vermes; EPF de controle se sintomas persistem",
      contraindicacoes: "1º trimestre da gestação; hipersensibilidade",
      ajustes: "Na RENAME (comprimido 400 mg; suspensão 40 mg/mL). Desverminação: 1 a 2 vezes por ano conforme prevalência local (OMS)"
    },
    {
      droga: "Mebendazol (alternativa para geo-helmintos)",
      linha: "alt",
      dose: "100 mg (criança > 1 ano e adulto, mesma dose)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "3 dias (ou 500 mg em dose única para ascaridíase)",
      monitorizacao: "—",
      contraindicacoes: "1º trimestre da gestação; menores de 1 ano",
      ajustes: "Na RENAME (comprimido 100 mg; suspensão 20 mg/mL)"
    },
    {
      droga: "Ivermectina (estrongiloidíase; alternativa em ascaridíase e tricuríase)",
      linha: "l1",
      dose: "200 mcg/kg (adulto ≈ 12 mg; comprimido de 6 mg: 1 cp para cada 30 kg)",
      via: "VO, em jejum",
      intervalo: "1 vez ao dia",
      duracao: "Estrongiloidíase: 1 a 2 dias (há esquemas com repetição em 2 semanas). Hiperinfecção: diário até exames negativos por 2 semanas, em ambiente hospitalar",
      monitorizacao: "Controle de cura com pesquisa de larvas",
      contraindicacoes: "Peso < 15 kg; gestação; lactação (relativa); loíase (áreas endêmicas da África)",
      ajustes: "Na RENAME (comprimido 6 mg). Alternativa para < 15 kg: albendazol 400 mg/dia (criança ≥ 2 anos) por 3 a 7 dias (menos eficaz)"
    },
    {
      droga: "Metronidazol (giardíase; amebíase invasiva)",
      linha: "l1",
      dose: "Giardíase — criança: 15 mg/kg/dia (máx 750 mg/dia); adulto: 250 mg/dose. Amebíase invasiva — criança: 35–50 mg/kg/dia (máx 2,25 g/dia); adulto: 500–750 mg/dose",
      via: "VO (suspensão 40 mg/mL; comprimido 250 e 400 mg)",
      intervalo: "8/8 h",
      duracao: "Giardíase: 5–7 dias. Amebíase: 7–10 dias, seguido de amebicida luminal",
      monitorizacao: "Gosto metálico, náusea; não ingerir álcool até 48 h após (efeito dissulfiram)",
      contraindicacoes: "1º trimestre (relativa); uso de dissulfiram",
      ajustes: "Na RENAME. Abscesso hepático amebiano: internar, metronidazol IV/VO 750 mg 8/8 h por 7–10 dias (criança 35–50 mg/kg/dia)"
    },
    {
      droga: "Secnidazol ou tinidazol (dose única)",
      linha: "alt",
      dose: "Secnidazol — criança: 30 mg/kg (máx 2 g); adulto: 2 g. Tinidazol — criança: 50 mg/kg (máx 2 g); adulto: 2 g",
      via: "VO, após uma refeição",
      intervalo: "Dose única",
      duracao: "Giardíase e amebíase intestinal leve/moderada: dose única",
      monitorizacao: "Náusea, gosto metálico; sem álcool por 48–72 h",
      contraindicacoes: "1º trimestre da gestação, lactação (suspender amamentação 48–72 h)",
      ajustes: "Melhor adesão que o metronidazol. Secnidazol suspensão pediátrica conforme bula"
    },
    {
      droga: "Nitazoxanida (giardíase, amebíase intestinal, criptosporidíase; amplo espectro)",
      linha: "alt",
      dose: "Criança ≥ 1 ano: 7,5 mg/kg/dose (máx 500 mg/dose); adulto: 500 mg/dose",
      via: "VO, com alimento (suspensão 20 mg/mL)",
      intervalo: "12/12 h",
      duracao: "3 dias",
      monitorizacao: "Urina amarelo-esverdeada (inócua)",
      contraindicacoes: "Menores de 1 ano",
      ajustes: "Não está na RENAME; custo maior"
    },
    {
      droga: "Amebicida luminal após metronidazol (teclozana ou etofamida)",
      linha: "adj",
      dose: "Conforme bula",
      via: "VO",
      intervalo: "Conforme bula",
      duracao: "Conforme bula",
      monitorizacao: "EPF de controle",
      contraindicacoes: "—",
      ajustes: "Elimina cistos no lúmen e reduz recaída após colite amebiana; disponibilidade variável"
    }
  ],
  destino: {
    agora: [
      "Tratamento ambulatorial na grande maioria",
      "Desverminação em massa conforme programa local (escolas, creches)"
    ],
    reavaliar: [
      "Sintomas persistentes: EPF de controle 1–3 semanas após o fim do tratamento",
      "Anemia: hemograma 30–45 dias após início do ferro"
    ],
    alta: [
      "Assintomático, com orientação de higiene e saneamento"
    ],
    observacao: [
      "Dor abdominal com vômitos em criança com áscaris: observar e reavaliar; óleo mineral e jejum podem ser usados na suboclusão sob supervisão hospitalar"
    ],
    internacao: [
      "Obstrução/suboclusão intestinal, migração biliar, pancreatite",
      "Hiperinfecção por Strongyloides, colite amebiana grave, abscesso hepático",
      "Desidratação grave ou desnutrição grave"
    ],
    transferencia: [
      "Cirurgia pediátrica/geral: obstrução que não resolve, perfuração, volvo",
      "Infectologia: estrongiloidíase em imunossuprimido, HTLV-1"
    ]
  },
  prescricao: {
    ambulatorial: "ADULTO\nUSO ORAL\n1. Albendazol 400 mg ------------------------------- 1 comprimido\n   Mastigar 1 comprimido em dose única (ascaridíase, ancilostomíase).\n   Tricuríase: 3 comprimidos — 1 por dia por 3 dias.\n2. Ivermectina 6 mg (estrongiloidíase) ----------- ___ comprimidos\n   Tomar 200 mcg/kg em jejum (≈ 1 comprimido a cada 30 kg; 60 kg = 2 comprimidos) 1 vez ao dia por 2 dias.\n3. Metronidazol 250 mg (giardíase) ---------------- 21 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas por 7 dias. Não ingerir bebida alcoólica até 2 dias após.\n   OU Secnidazol 1 g ----------------------------- 2 comprimidos\n   Tomar 2 comprimidos juntos, após uma refeição, dose única.\n4. Amebíase intestinal sintomática: Metronidazol 250 mg — 2 a 3 comprimidos (500–750 mg) de 8 em 8 horas por 7 a 10 dias.\n\nCRIANÇA (peso: ___ kg)\n1. Albendazol suspensão 40 mg/mL ------------------ 1 frasco\n   ≥ 2 anos: 10 mL (400 mg) dose única. 1 a 2 anos: 5 mL (200 mg) dose única. Tricuríase: a mesma dose 1 vez ao dia por 3 dias.\n2. Ivermectina 6 mg (≥ 15 kg) --------------------- ___ comprimidos\n   15–24 kg: ½ comprimido; 25–35 kg: 1 comprimido; 36–50 kg: 1½ comprimido — 1 vez ao dia por 2 dias, em jejum.\n3. Metronidazol suspensão 40 mg/mL (giardíase) ---- 1 frasco\n   Dar 15 mg/kg/dia divididos de 8 em 8 horas (= 0,125 mL/kg por dose) por 5 a 7 dias. Máx 250 mg por dose.\n   OU Secnidazol 30 mg/kg (máx 2 g) dose única, após uma refeição.\n   Amebíase intestinal: metronidazol 35–50 mg/kg/dia divididos de 8 em 8 horas por 7 a 10 dias.\n\nORIENTAÇÕES\n- Lavar as mãos antes de comer e após usar o banheiro; unhas curtas.\n- Beber água filtrada ou fervida; lavar verduras e frutas e deixá-las de molho em água com hipoclorito (1 colher de sopa de água sanitária para 1 litro de água por 15 minutos) e enxaguar.\n- Andar calçado."
  },
  orientacoesRetorno: [
    "É normal eliminar vermes nas fezes nos dias seguintes ao remédio",
    "Metronidazol, secnidazol e tinidazol: não beber álcool durante o tratamento e por 2 a 3 dias depois; podem deixar gosto metálico na boca",
    "Voltar imediatamente se: dor de barriga forte com vômitos e barriga inchada, sem evacuar ou eliminar gases; olhos amarelados; diarreia com sangue e febre; criança molinha ou desidratada",
    "Retorno na UBS em 2 a 4 semanas se os sintomas continuarem, para repetir o exame de fezes",
    "Família e contactantes com sintomas também devem ser avaliados"
  ],
  tabelas: [
    {
      titulo: "Tratamento por parasita — resumo",
      colunas: ["Parasita", "1ª escolha", "Alternativa"],
      linhas: [
        ["Ascaris lumbricoides", "Albendazol 400 mg dose única", "Mebendazol 100 mg 12/12 h por 3 dias ou 500 mg dose única; ivermectina"],
        ["Ancilostomídeos", "Albendazol 400 mg dose única", "Mebendazol 100 mg 12/12 h por 3 dias"],
        ["Trichuris trichiura", "Albendazol 400 mg/dia por 3 dias", "Mebendazol 100 mg 12/12 h por 3 dias; associar ivermectina em infecção intensa"],
        ["Strongyloides stercoralis", "Ivermectina 200 mcg/kg/dia por 1–2 dias", "Albendazol 400 mg 12/12 h por 7 dias (menos eficaz)"],
        ["Giardia lamblia", "Metronidazol 15 mg/kg/dia (adulto 250 mg 8/8 h) por 5–7 dias; ou secnidazol/tinidazol dose única", "Nitazoxanida 7,5 mg/kg (adulto 500 mg) 12/12 h por 3 dias"],
        ["Entamoeba histolytica (intestinal)", "Metronidazol 35–50 mg/kg/dia (adulto 500–750 mg 8/8 h) por 7–10 dias + amebicida luminal", "Secnidazol 30 mg/kg (adulto 2 g) dose única nas formas leves; nitazoxanida"],
        ["Enterobius vermicularis", "Ver ficha oxiuriase", "—"],
        ["Taenia sp.", "Ver ficha teniase", "—"]
      ],
      nota: "Albendazol e mebendazol: evitar no 1º trimestre da gestação. Ivermectina: não usar < 15 kg nem na gestação. Esquemas para estrongiloidíase variam entre as fontes (SBP: ivermectina por 2 dias)."
    }
  ],
  fontes: [
    "Ministério da Saúde — Doenças Infecciosas e Parasitárias: Guia de Bolso, 8ª ed. (2010) e Guia de Vigilância em Saúde, 6ª ed. (2023)",
    "Ministério da Saúde — Plano Nacional de Enfrentamento das Geo-helmintíases / Guia prático para o controle das geo-helmintíases (2018)",
    "SBP — Guia Prático de Atualização nº 7: Parasitoses intestinais — diagnóstico e tratamento (2020)",
    "OMS — Guideline: Preventive chemotherapy to control soil-transmitted helminth infections in at-risk population groups (2017) e WHO Model Formulary",
    "Ministério da Saúde — RENAME 2024 (albendazol, mebendazol, ivermectina, metronidazol)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
