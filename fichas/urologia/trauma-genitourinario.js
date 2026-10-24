// Trauma geniturinário
registrarFicha({
  id: "trauma-genitourinario",
  especialidade: "urologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Trauma geniturinário: rim, bexiga, uretra, escroto e fratura peniana",
  resumo: "Lesões traumáticas do trato geniturinário: quando suspeitar, que imagem pedir (TC com fase excretora, cistografia, uretrografia, US escrotal), quando não sondar e quando a urologia opera.",
  palavrasChave: "trauma renal trauma vesical ruptura de bexiga lesao de uretra sangue no meato uretrografia retrograda cistografia cistostomia trauma escrotal ruptura testicular fratura peniana hematuria aast",
  critico: {
    tempo: "Sangue no meato: não sondar",
    texto: "Sangue no meato, hematoma perineal/escrotal ou próstata alta após trauma pélvico: não passar sonda vesical às cegas. Uretrografia retrógrada ou cistostomia pela urologia."
  },
  alarmes: [
    "Hematúria macroscópica após trauma",
    "Hematúria (qualquer) com hipotensão (PAS < 90 mmHg) em algum momento",
    "Sangue no meato uretral, hematoma perineal em 'borboleta', próstata alta ou não palpável",
    "Incapacidade de urinar com bexiga palpável após trauma pélvico",
    "Fratura de pelve (lesão de bexiga/uretra associada)",
    "Pênis com estalo, detumescência súbita, dor e hematoma em 'berinjela' durante relação sexual",
    "Testículo muito doloroso, aumentado, com hematoma após trauma (ruptura)"
  ],
  condutaInicial: [
    "xABCDE (ver ficha politrauma-abcde); trauma renal grave pode causar choque",
    "Examinar meato, períneo, escroto; toque retal em trauma pélvico",
    "Suspeita de lesão uretral: NÃO sondar; uretrografia retrógrada; se lesão ou impossibilidade, cistostomia suprapúbica (urologia/cirurgião)",
    "Urina tipo 1 / fita para hematúria",
    "Estável com hematúria macroscópica, ou microscópica com hipotensão, ou mecanismo de desaceleração/penetrante em flanco: TC de abdome com contraste e fase excretora",
    "Hematúria macroscópica + fratura de pelve: cistografia por TC (bexiga distendida por via retrógrada)",
    "Rim: maioria tratamento não operatório (repouso, Hb seriada); instável → cirurgia/angioembolização",
    "Fratura peniana e ruptura testicular: urologia para cirurgia de urgência",
    "Analgesia e profilaxia de tétano em feridas penetrantes"
  ],
  fataisExcluir: [
    "Hemorragia renal (grau IV–V, lesão de pedículo)",
    "Ruptura intraperitoneal de bexiga (ascite urinosa, peritonite química, sepse)",
    "Lesões abdominais e pélvicas associadas",
    "Ruptura testicular (perda do testículo se não operada precocemente)"
  ],
  proximaDecisao: "Rim: estável → tratamento não operatório (mesmo em graus altos, em centros com recursos); instável/expansão de hematoma → angioembolização ou cirurgia. Bexiga: intraperitoneal → cirurgia; extraperitoneal → sonda vesical de demora (cirurgia se colo vesical, fragmento ósseo, lesão retal/vaginal ou laparotomia por outra causa). Uretra posterior → cistostomia. Fratura peniana e ruptura testicular → cirurgia de urgência.",
  clinica: {
    anamnese: [
      "Mecanismo: desaceleração (pedículo renal), golpe no flanco, queda a cavaleiro (uretra bulbar), fratura de pelve (uretra posterior/bexiga), trauma com bexiga cheia (ruptura intraperitoneal), relação sexual (fratura peniana)",
      "Hematúria, dor no flanco, dor suprapúbica, dificuldade para urinar",
      "Rim único, anomalia renal prévia (hidronefrose, rim em ferradura) — lesões com trauma menor",
      "Anticoagulantes"
    ],
    exameFisico: [
      "Flanco: equimose, massa, fraturas de costelas baixas ou processos transversos",
      "Abdome: distensão, peritonite (ruptura intraperitoneal)",
      "Meato: sangue; períneo e escroto: hematoma, edema",
      "Toque retal: próstata alta/flutuante, sangue (lesão retal)",
      "Pênis: hematoma, desvio, lesão da túnica palpável",
      "Escroto: dor, aumento, hematoma, transiluminação ausente; contorno testicular"
    ],
    diferenciais: [
      { dx: "Hematúria por lesão prévia (tumor, cálculo)", pista: "Hematúria desproporcional ao trauma; investigar depois" },
      { dx: "Ruptura de veia dorsal do pênis", pista: "Hematoma sem estalo e sem perda da ereção; US/RM mostram túnica íntegra" },
      { dx: "Torção testicular pós-trauma", pista: "Doppler com fluxo ausente (ver ficha escroto-agudo)" },
      { dx: "Hematocele/hematoma de parede escrotal", pista: "US com túnica albugínea íntegra" }
    ],
    gravidade: [
      "Rim (AAST): I contusão/hematoma subcapsular · II laceração < 1 cm sem extravasamento urinário · III laceração > 1 cm sem lesão do sistema coletor ou com sangramento contido · IV lesão do sistema coletor com extravasamento, lesão vascular segmentar ou sangramento ativo contido · V rim fragmentado/desvascularizado, avulsão do hilo, sangramento ativo além da fáscia",
      "Bexiga: extraperitoneal (mais comum, com fratura de pelve) x intraperitoneal (golpe com bexiga cheia; contraste entre alças)",
      "Uretra: posterior (membranosa/prostática — fratura de pelve) x anterior (bulbar — queda a cavaleiro; peniana)"
    ]
  },
  exames: [
    {
      nome: "Urina tipo 1 / fita reagente",
      pedido: "Urina tipo 1 (sedimento) ou fita reagente para hemoglobina.",
      porQue: "Rastrear hematúria.",
      esperar: "—",
      interpretacao: "Macroscópica → imagem. Microscópica → imagem se hipotensão, mecanismo de desaceleração, penetrante ou criança com > 50 hemácias/campo.",
      limitacoes: "Lesão de pedículo renal e de JUP pode ocorrer sem hematúria."
    },
    {
      nome: "TC de abdome com fase excretora",
      pedido: "TC de abdome e pelve com contraste IV — fases arterial, portal e excretora tardia (10 min) — trauma renal.",
      porQue: "Graduar lesão renal, extravasamento urinário e sangramento ativo.",
      esperar: "—",
      interpretacao: "Extravasamento de contraste na fase excretora → lesão do sistema coletor (grau IV). Blush → angioembolização.",
      limitacoes: "Só no paciente estável."
    },
    {
      nome: "Cistografia por TC",
      pedido: "Cistografia por TC: contraste diluído instilado por sonda vesical até distensão (≥ 300–350 mL no adulto), com imagens cheia e após esvaziamento.",
      porQue: "Hematúria macroscópica + fratura de pelve ou suspeita de lesão de bexiga.",
      esperar: "—",
      interpretacao: "Contraste em torno de alças/goteiras → intraperitoneal. Contraste perivesical em 'chama' → extraperitoneal.",
      limitacoes: "Clampear a sonda apenas durante a TC com contraste IV não é suficiente (falso-negativo). Fazer uretrografia antes se suspeita de lesão uretral."
    },
    {
      nome: "Uretrografia retrógrada",
      pedido: "Uretrografia retrógrada: 20–30 mL de contraste injetado no meato com sonda fina na fossa navicular, paciente em oblíqua.",
      porQue: "Sangue no meato, hematoma perineal, próstata alta, dificuldade de sondagem.",
      esperar: "—",
      interpretacao: "Extravasamento → lesão uretral; não sondar, cistostomia.",
      limitacoes: "Não atrasar reanimação no instável."
    },
    {
      nome: "US escrotal com Doppler",
      pedido: "Ultrassom de bolsa testicular com Doppler.",
      porQue: "Ruptura testicular (túnica albugínea), hematocele, torção, fluxo.",
      esperar: "—",
      interpretacao: "Túnica descontínua, contorno irregular, hematocele grande → exploração cirúrgica.",
      limitacoes: "Exame duvidoso com forte suspeita clínica → exploração."
    }
  ],
  tratamento: [
    {
      droga: "Cistostomia suprapúbica",
      linha: "l1",
      dose: "Por punção guiada por US ou aberta",
      via: "Suprapúbica",
      intervalo: "Urgência (retenção)",
      duracao: "Até reparo uretral tardio ou realinhamento",
      monitorizacao: "Débito, hematúria",
      contraindicacoes: "Bexiga não distendida (punção cega), cirurgia pélvica prévia (relativa)",
      ajustes: "Realizada pela urologia/cirurgião"
    },
    {
      droga: "Sonda vesical de demora (bexiga extraperitoneal)",
      linha: "l1",
      dose: "Sonda calibrosa (20–22 Fr) para drenagem livre",
      via: "Uretral (se uretra íntegra)",
      intervalo: "—",
      duracao: "Conforme urologia; cistografia antes da retirada",
      monitorizacao: "Coágulos, débito",
      contraindicacoes: "Lesão uretral",
      ajustes: "—"
    },
    {
      droga: "Dipirona e morfina",
      linha: "l1",
      dose: "Dipirona 1 g IV de 6/6 h · Morfina 2–4 mg IV a cada 5–10 min até controle",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "FR, PA",
      contraindicacoes: "—",
      ajustes: "Cólica por coágulo na via urinária é comum no trauma renal"
    },
    {
      droga: "Antibiótico profilático",
      linha: "adj",
      dose: "Cefazolina 2 g IV (perioperatório)",
      via: "IV",
      intervalo: "Dose única pré-operatória",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Uso prolongado em lesão renal com extravasamento ou sonda de demora: conforme urologia"
    }
  ],
  destino: {
    agora: [
      "Instável: controle do sangramento (cirurgia/angioembolização)",
      "Fratura peniana, ruptura testicular, ruptura intraperitoneal de bexiga: urologia para cirurgia"
    ],
    reavaliar: [
      "Rim em tratamento não operatório: Hb de 6/6 h, sinais vitais, hematúria, repouso até urina clarear",
      "Febre, dor em flanco, íleo → urinoma/abscesso (TC)"
    ],
    alta: [
      "Contusão renal (grau I) ou hematúria microscópica isolada em estável, com urina clareando e orientação",
      "Trauma escrotal com US normal: analgesia, suspensório, gelo"
    ],
    observacao: [
      "Hematúria macroscópica com lesão renal baixa: 24 h com Hb seriada"
    ],
    internacao: [
      "Lesão renal grau ≥ III, lesão de bexiga ou uretra, cirurgia"
    ],
    transferencia: [
      "Sem urologia, TC ou radiologia intervencionista: transferir (com cistostomia se retenção e lesão uretral)"
    ]
  },
  prescricao: {
    hospitalar: "TRAUMA RENAL — TRATAMENTO NÃO OPERATÓRIO (adulto; peso: ___ kg)\n1. Dieta livre se sem lesões abdominais associadas (zero se possível cirurgia).\n2. Repouso no leito até a urina clarear.\n3. Ringer lactato 1.000 mL IV de 8/8 h (ajustar à diurese).\n4. Dipirona 1 g (2 mL) + SF 0,9% 18 mL IV de 6/6 h.\n5. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV de 4/4 h se dor intensa.\n6. Ondansetrona 4 mg IV de 8/8 h se náusea.\n7. Profilaxia de TEV mecânica; química quando liberada pela urologia/cirurgia.\n8. Controles: sinais vitais de 2/2 h; Hb de 6/6 h nas primeiras 24 h; aspecto da urina a cada micção; diurese.\n9. Manter tipagem e reserva de 2 unidades de concentrado de hemácias.\n\nNÃO passar sonda vesical se sangue no meato, hematoma perineal ou próstata alta — chamar urologia.",
    ambulatorial: "TRAUMA ESCROTAL LEVE (US sem ruptura)\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n2. Ibuprofeno 600 mg -------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias.\nCUIDADOS\nUsar cueca firme ou suspensório escrotal; gelo envolto em pano por 20 minutos 3–4 vezes ao dia por 2 dias; repouso relativo."
  },
  orientacoesRetorno: [
    "Após trauma renal: urina pode ficar rosada por alguns dias; beber água e evitar esforço, esportes de contato e levantar peso por 2–6 semanas, conforme orientação",
    "Voltar imediatamente se: urina com sangue vivo ou coágulos que aumentam, não conseguir urinar, dor forte nas costas ou na barriga, febre, tontura ou desmaio",
    "Pressão alta pode aparecer meses depois de lesão renal: medir a pressão na UBS nos meses seguintes",
    "Trauma no escroto: voltar se dor que aumenta, inchaço grande ou testículo endurecido",
    "Retorno com urologia na data marcada"
  ],
  fontes: [
    "AUA — Urotrauma Guideline (2017, emenda 2020)",
    "EAU — Guidelines on Urological Trauma (2024)",
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "AAST — Kidney injury scale, revisão (2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
