// Corpo estranho: ingestão (bateria, ímã, impactação alimentar), ouvido e nariz
registrarFicha({
  id: "corpo-estranho",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Corpo estranho: ingestão (baterias, ímãs, impactação alimentar), ouvido e nariz",
  resumo: "A maioria dos corpos estranhos ingeridos passa espontaneamente. São emergências: bateria de botão no esôfago, objeto que obstrui o esôfago (não engole saliva), objeto pontiagudo no esôfago e múltiplos ímãs. Ouvido e nariz: retirar com segurança na 1ª tentativa; bateria no nariz ou ouvido também é urgência.",
  palavrasChave: "corpo estranho ingestao engoliu moeda bateria de botao pilha ima iman impactacao alimentar carne entalada esofagite eosinofilica objeto pontiagudo espinha de peixe osso corpo estranho ouvido nariz inseto no ouvido mel sucralfato endoscopia",
  critico: {
    tempo: "Bateria no esôfago: EDA < 2 h",
    texto: "Bateria de botão no esôfago causa necrose em poucas horas: endoscopia de emergência (idealmente < 2 h). Enquanto aguarda, criança > 1 ano com ingestão < 12 h: mel 10 mL a cada 10 min (até 6 doses), se não houver contraindicação."
  },
  alarmes: [
    "Sialorreia, incapacidade de engolir saliva, estridor ou desconforto respiratório (obstrução esofágica ou via aérea)",
    "Bateria de botão (sobretudo ≥ 20 mm) ou ingestão não presenciada com sintomas inespecíficos em criança pequena",
    "Dois ou mais ímãs, ou ímã + objeto metálico",
    "Objeto pontiagudo (alfinete, palito, osso, espinha) ou longo (> 5–6 cm)",
    "Hematêmese, dor torácica, febre, enfisema subcutâneo (perfuração), dor abdominal com peritonite",
    "Pacotes de drogas (body packer) — não fazer endoscopia; risco de intoxicação",
    "Bateria no nariz ou no ouvido"
  ],
  condutaInicial: [
    "Avaliar via aérea primeiro: obstrução de via aérea → manobras de desobstrução (ver ficha ovace) / laringoscopia",
    "Identificar o objeto (pedir outro igual, embalagem da bateria), horário, sintomas",
    "RX cervical, tórax e abdome (AP e perfil) para objetos radiopacos; criança: do pescoço ao ânus",
    "Bateria no esôfago (duplo halo na AP, degrau no perfil) → endoscopia de emergência; mel ou sucralfato no caminho, se elegível",
    "Impactação alimentar com obstrução completa → endoscopia urgente (< 6 h); parcial → em até 24 h. Não usar papaína/amaciante; não forçar com SNG",
    "Não induzir vômito; não oferecer alimentos sólidos",
    "Objeto radiotransparente com sintomas: TC (não usar bário quando houver chance de endoscopia)",
    "Ouvido/nariz: ver tabela de técnicas; encaminhar à otorrinolaringologia se falha, objeto difícil ou bateria"
  ],
  fataisExcluir: [
    "Obstrução de via aérea / aspiração de corpo estranho (criança com tosse súbita, sibilo unilateral)",
    "Necrose e perfuração esofágica, fístula traqueoesofágica ou aortoesofágica (bateria)",
    "Perfuração intestinal / fístula por ímãs",
    "Intoxicação (pacotes de drogas, chumbo)"
  ],
  proximaDecisao: "Esôfago: bateria, objeto pontiagudo ou obstrução completa → endoscopia de emergência; moeda ou objeto rombo assintomático → endoscopia em até 24 h (criança: pode aguardar 12–24 h com RX de controle). Estômago/delgado: a maioria passa; objeto rombo pequeno assintomático → alta com orientação e RX se não eliminar. Bateria no estômago em criança < 5 anos com bateria ≥ 20 mm ou sintomática → discutir retirada endoscópica. Múltiplos ímãs ao alcance do endoscópio → retirar; além disso → RX seriados e cirurgia se não progredirem ou se sintomas.",
  clinica: {
    anamnese: [
      "O que foi ingerido, tamanho, quantidade, horário, se presenciado",
      "Disfagia, odinofagia, sialorreia, vômitos, dor torácica ou abdominal, tosse, estridor",
      "Adulto com impactação alimentar: episódios prévios (esofagite eosinofílica, estenose, anel, câncer)",
      "Pacientes psiquiátricos, presos, dependentes químicos (objetos múltiplos, pacotes)",
      "Ouvido/nariz: tempo, tipo (orgânico, inseto, bateria), tentativas prévias de retirada"
    ],
    exameFisico: [
      "Via aérea, esforço respiratório, estridor, sibilos",
      "Orofaringe (espinha visível na amígdala/base de língua), enfisema subcutâneo cervical",
      "Abdome (peritonite)",
      "Otoscopia e rinoscopia anterior com boa luz; secreção nasal fétida unilateral sugere corpo estranho antigo"
    ],
    diferenciais: [
      { dx: "Aspiração de corpo estranho", pista: "Engasgo seguido de tosse, sibilo localizado, hiperinsuflação unilateral" },
      { dx: "Esofagite eosinofílica", pista: "Adulto jovem com disfagia e impactações recorrentes; biópsias na endoscopia" },
      { dx: "Sensação de corpo estranho sem objeto", pista: "Escoriação de mucosa após espinha (sensação persiste algumas horas)" },
      { dx: "Rinossinusite / otite", pista: "Sem objeto visível" }
    ],
    gravidade: [
      "Local: esôfago (maior risco) > estômago > intestino",
      "Tipo: bateria > ímãs múltiplos > pontiagudo/longo > rombo pequeno",
      "Tempo de permanência no esôfago aumenta lesão (> 24 h)"
    ]
  },
  exames: [
    {
      nome: "Radiografias",
      pedido: "Radiografia cervical, de tórax e de abdome (AP e perfil) — ingestão de corpo estranho. Criança: pescoço ao ânus.",
      porQue: "Localizar objeto radiopaco; diferenciar bateria de moeda.",
      esperar: "Bateria: duplo contorno (halo) na AP e degrau no perfil.",
      interpretacao: "Esôfago: em geral retirada; abaixo do diafragma: maioria passa.",
      limitacoes: "Não mostra plástico, madeira, vidro fino, alimento, espinhas de peixe na maioria."
    },
    {
      nome: "Tomografia",
      pedido: "Tomografia de pescoço/tórax/abdome sem contraste oral — corpo estranho radiotransparente ou suspeita de perfuração.",
      porQue: "Objetos não radiopacos, espinhas, ossos, complicações.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Radiação (criança)."
    },
    {
      nome: "Endoscopia digestiva alta",
      pedido: "Endoscopia digestiva alta de urgência/emergência para retirada de corpo estranho (especificar objeto e horário da ingestão).",
      porQue: "Diagnóstico e tratamento.",
      esperar: "—",
      interpretacao: "Impactação alimentar em adulto: biópsias para esofagite eosinofílica.",
      limitacoes: "Proteger via aérea (intubação) em criança e quando há risco de aspiração."
    }
  ],
  tratamento: [
    {
      droga: "Mel (bateria de botão no esôfago, antes da endoscopia)",
      linha: "l1",
      dose: "10 mL",
      via: "VO",
      intervalo: "A cada 10 min, até 6 doses",
      duracao: "Até a endoscopia",
      monitorizacao: "Não atrasar a endoscopia",
      contraindicacoes: "Criança < 1 ano (botulismo), ingestão > 12 h, suspeita de perfuração ou sepse, alergia",
      ajustes: "Recomendação de National Capital Poison Center / NASPGHAN para reduzir lesão por bateria"
    },
    {
      droga: "Sucralfato suspensão (1 g/10 mL)",
      linha: "alt",
      dose: "10 mL",
      via: "VO",
      intervalo: "A cada 10 min, até 3 doses",
      duracao: "No hospital, até a endoscopia",
      monitorizacao: "—",
      contraindicacoes: "Mesmas do mel (exceto idade); perfuração",
      ajustes: "Alternativa ao mel em ambiente hospitalar"
    },
    {
      droga: "Endoscopia para retirada",
      linha: "l1",
      dose: "—",
      via: "Endoscópica",
      intervalo: "—",
      duracao: "Emergência (< 2–6 h): bateria no esôfago, obstrução completa, pontiagudo no esôfago. Urgente (< 24 h): demais objetos no esôfago, ímãs múltiplos ao alcance",
      monitorizacao: "Lesão residual da bateria: vigilância de fístula (sangramento, febre) por dias a semanas",
      contraindicacoes: "Pacotes de droga (risco de ruptura)",
      ajustes: "Após bateria esofágica: dieta e seguimento conforme lesão (lesões tardias podem surgir)"
    },
    {
      droga: "Lidocaína 2% ou óleo mineral (inseto vivo no ouvido)",
      linha: "l1",
      dose: "Algumas gotas para preencher o conduto",
      via: "Otológica",
      intervalo: "Dose única antes da retirada",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Suspeita de perfuração de membrana timpânica",
      ajustes: "Imobiliza/mata o inseto; depois retirar com irrigação ou pinça"
    },
    {
      droga: "Glucagon (impactação alimentar)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pouca eficácia e vômitos; não deve atrasar a endoscopia (ESGE 2016). Nunca usar papaína ou amaciante de carne"
    }
  ],
  destino: {
    agora: [
      "Bateria no esôfago, sialorreia/obstrução, pontiagudo no esôfago: endoscopia de emergência",
      "Via aérea comprometida: protocolo de obstrução de via aérea"
    ],
    reavaliar: [
      "Objeto rombo no estômago: RX se não eliminar no prazo orientado ou se sintomas",
      "Ímãs além do alcance: RX seriados (a cada 4–6 h no início, conforme cirurgião)"
    ],
    alta: [
      "Objeto rombo pequeno abaixo do esôfago, assintomático (inclusive moeda no estômago)",
      "Ouvido/nariz: retirado sem lesão"
    ],
    observacao: [
      "Moeda no esôfago distal em criança assintomática: pode ser observada por 12–24 h com RX de controle antes da endoscopia"
    ],
    internacao: [
      "Ímãs múltiplos, bateria com lesão, objetos pontiagudos no trato, sintomas abdominais, pacotes de droga"
    ],
    transferencia: [
      "Sem endoscopia (pediátrica, se criança): transferir com urgência para bateria/obstrução esofágica; não aguardar"
    ]
  },
  prescricao: {
    hospitalar: "BATERIA DE BOTÃO NO ESÔFAGO — AGUARDANDO ENDOSCOPIA\n1. Dieta zero (exceto o mel/sucralfato abaixo).\n2. Criança > 1 ano com ingestão < 12 h e sem sinais de perfuração: mel 10 mL VO a cada 10 min, até 6 doses.\n   OU no hospital: sucralfato 1 g/10 mL — 10 mL VO a cada 10 min, até 3 doses.\n3. Acionar endoscopia de emergência (meta < 2 h); proteção de via aérea pela anestesia.\n4. Acesso venoso; monitor; tipagem.\n\nIMPACTAÇÃO ALIMENTAR (ADULTO)\n1. Dieta zero; cabeceira elevada.\n2. Endoscopia: < 6 h se não engole saliva; < 24 h se engole saliva.\n3. Após retirada: biópsias de esôfago; omeprazol 40 mg VO 1 vez ao dia até resultado.",
    ambulatorial: "ALTA — OBJETO ROMBO PEQUENO NO ESTÔMAGO/INTESTINO (ASSINTOMÁTICO)\n1. Alimentação normal (não há necessidade de laxante).\n2. Observar as fezes; se não eliminar em ___ dias ou se sintomas, retornar para RX.\n3. Dipirona se dor leve — criança 15–25 mg/kg/dose (máx. 1 g) de 6/6 h; adulto 500 mg a 1 g de 6/6 h.\n\nAPÓS RETIRADA DE CORPO ESTRANHO DO OUVIDO COM ESCORIAÇÃO DO CONDUTO\n1. Ciprofloxacino 0,3% solução otológica — 4 gotas no ouvido afetado de 12/12 h por 5–7 dias, se lesão de conduto (manter o ouvido seco)."
  },
  orientacoesRetorno: [
    "Guardar pilhas, baterias e ímãs fora do alcance das crianças; fechar bem o compartimento de pilhas de brinquedos e controles",
    "Voltar imediatamente se: dor no peito ou na barriga, vômitos, sangue no vômito ou nas fezes (fezes pretas), febre, dificuldade para engolir ou respirar, baba que não para",
    "Objeto pequeno e rombo costuma sair nas fezes em alguns dias; não é preciso dar laxante",
    "Após bateria no esôfago: seguir rigorosamente o acompanhamento — lesões podem aparecer dias depois",
    "Não tentar retirar objetos do ouvido ou nariz em casa com cotonete, grampo ou pinça (empurra mais para dentro)",
    "Adulto que teve carne entalada: fazer o retorno com o gastroenterologista para resultado das biópsias"
  ],
  tabelas: [
    {
      titulo: "Ingestão — quando fazer endoscopia (ESGE 2016 / NASPGHAN 2015)",
      colunas: ["Situação", "Momento"],
      linhas: [
        ["Bateria de botão no esôfago", "Emergência (idealmente < 2 h)"],
        ["Obstrução esofágica completa (não engole saliva)", "Emergência (< 6 h)"],
        ["Objeto pontiagudo no esôfago", "Emergência (< 6 h)"],
        ["Outro objeto no esôfago sem obstrução completa (moeda, alimento)", "Urgente (< 24 h)"],
        ["Ímãs múltiplos ou ímã + metal ao alcance do endoscópio", "Urgente"],
        ["Pontiagudo ou longo (> 5–6 cm) no estômago/duodeno", "Urgente (< 24 h)"],
        ["Bateria no estômago, assintomática", "Criança < 5 anos e bateria ≥ 20 mm: discutir retirada; demais: RX de controle e retirada se não progredir ou sintomas"],
        ["Objeto rombo pequeno no estômago, assintomático", "Não urgente; acompanhar"]
      ]
    },
    {
      titulo: "Ouvido e nariz — técnicas de retirada",
      colunas: ["Situação", "Técnica", "Não fazer"],
      linhas: [
        ["Ouvido: objeto inerte não orgânico", "Irrigação com água morna (seringa 20 mL) ou pinça jacaré/cureta sob visão direta", "Irrigar se perfuração de membrana, bateria ou semente (incha)"],
        ["Ouvido: inseto vivo", "Lidocaína ou óleo mineral no conduto; depois irrigação ou pinça", "Tentar pegar inseto vivo com pinça"],
        ["Ouvido: objeto redondo/liso", "Cureta ou gancho atrás do objeto; aspiração", "Pinça (empurra para dentro)"],
        ["Nariz: objeto anterior", "Pressão positiva: 'beijo da mãe' (ocluir a narina livre e soprar na boca da criança) ou paciente assoa ocluindo a narina livre; depois pinça/gancho com vasoconstritor tópico", "Tentativas repetidas com criança agitada"],
        ["Bateria ou ímãs (um em cada narina) no nariz/ouvido", "Retirada urgente pelo otorrino", "Irrigar"]
      ],
      nota: "Após 1–2 tentativas sem sucesso ou objeto posterior, encaminhar à otorrinolaringologia (sedação pode ser necessária)."
    }
  ],
  fontes: [
    "ESGE — Removal of foreign bodies in the upper gastrointestinal tract in adults: ESGE Clinical Guideline (Birk et al., 2016)",
    "NASPGHAN — Management of ingested foreign bodies in children: a clinical report of the NASPGHAN Endoscopy Committee (Kramer et al., 2015)",
    "ESPGHAN — Position paper: Management of button battery ingestion in childhood (Mubarak et al., 2021)",
    "National Capital Poison Center — Button Battery Ingestion Triage and Treatment Guideline (atualização 2018 em diante); Anfang RR et al. (Laryngoscope, 2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
