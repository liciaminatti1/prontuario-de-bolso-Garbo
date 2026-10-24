// Morte encefálica — protocolo CFM 2.173/2017
registrarFicha({
  id: "morte-encefalica",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Morte encefálica: determinação (CFM 2.173/2017) e manutenção do potencial doador",
  resumo: "Paciente em coma não perceptivo, sem reflexos de tronco e em apneia, com lesão encefálica conhecida e irreversível. Abrir o protocolo é obrigatório (independe de doação), com notificação à Central Estadual de Transplantes via OPO/CIHDOTT, comunicação à família e manutenção hemodinâmica.",
  palavrasChave: "morte encefalica me protocolo cfm 2173 teste de apneia reflexos de tronco doppler transcraniano eeg arteriografia cintilografia potencial doador cihdott opo central de transplantes captacao de orgaos diabetes insipidus",
  critico: {
    tempo: "Notificar a CET/OPO na abertura",
    texto: "Ao abrir o protocolo, notificar a Central Estadual de Transplantes (via CIHDOTT ou OPO) e informar a família. Paralelamente, manter PAM ≥ 65 mmHg, SpO₂ > 94% e T > 35 °C: sem esses pré-requisitos o exame não é válido."
  },
  alarmes: [
    "Hipotensão (PAS < 100 ou PAM < 65 no adulto) — corrigir antes e durante o protocolo",
    "Poliúria > 4 mL/kg/h com sódio em ascensão (diabetes insípido)",
    "Hipotermia (< 35 °C) invalida o exame",
    "Sedativos, bloqueadores neuromusculares, intoxicação ou distúrbio metabólico grave não corrigidos (confundidores)",
    "Instabilidade durante o teste de apneia (PAS < 90, SpO₂ < 85%, arritmia): interromper",
    "Parada cardíaca do potencial doador"
  ],
  condutaInicial: [
    "Conferir pré-requisitos: lesão encefálica de causa conhecida, irreversível e capaz de causar ME; ausência de confundidores tratáveis; observação/tratamento hospitalar ≥ 6 h (≥ 24 h se encefalopatia hipóxico-isquêmica)",
    "Garantir parâmetros: T > 35 °C, SpO₂ > 94%, PAS ≥ 100 mmHg ou PAM ≥ 65 mmHg no adulto (criança: tabela por idade)",
    "Notificar a CIHDOTT/OPO/CET e comunicar a família sobre a abertura do protocolo (registrar)",
    "Dois exames clínicos por médicos diferentes, capacitados, que não integrem equipe de transplante, com intervalo mínimo conforme a idade",
    "Um teste de apneia (PaCO₂ > 55 mmHg sem movimentos respiratórios)",
    "Um exame complementar que comprove ausência de perfusão, atividade metabólica ou elétrica encefálica",
    "Preencher o Termo de Declaração de Morte Encefálica; hora do óbito = conclusão do último procedimento; comunicar a família",
    "Manutenção do potencial doador durante todo o processo (ver tratamento)"
  ],
  fataisExcluir: [
    "Efeito de sedativos/analgésicos (barbitúricos, midazolam, fentanil, propofol) — respeitar meias-vidas ou dosar",
    "Hipotermia, hipotensão, hipoxemia",
    "Distúrbios graves: hiponatremia/hipernatremia extrema, hipoglicemia, uremia, encefalopatia hepática",
    "Bloqueio neuromuscular residual (checar com estimulador)",
    "Síndrome do encarceramento (locked-in), síndrome de Guillain-Barré fulminante (mimetizadores)"
  ],
  proximaDecisao: "Protocolo positivo e família autoriza doação → OPO coordena avaliação dos órgãos e captação, mantendo cuidados intensivos. Sem doação → após a declaração de óbito, o suporte pode ser retirado (CFM 1.826/2007), com acolhimento da família. Qualquer etapa inconclusiva → corrigir o fator e repetir.",
  clinica: {
    anamnese: [
      "Causa da lesão (TCE, AVC hemorrágico/isquêmico extenso, encefalopatia anóxica, tumor) e confirmação por imagem",
      "Horário de início do coma, últimas doses de sedativos, bloqueadores e anticonvulsivantes",
      "Intoxicações, hipotermia terapêutica prévia (aguardar reaquecimento)",
      "Contato da família e possível manifestação prévia sobre doação"
    ],
    exameFisico: [
      "Coma não perceptivo (Glasgow 3), sem resposta motora supraespinal à dor (reflexos medulares podem persistir)",
      "Pupilas fixas, sem reflexo fotomotor",
      "Ausência de reflexo corneopalpebral, oculocefálico, vestíbulo-calórico e de tosse",
      "Temperatura, PA, SpO₂ dentro dos pré-requisitos"
    ],
    diferenciais: [
      { dx: "Intoxicação por depressores do SNC", pista: "Sem lesão estrutural compatível na imagem" },
      { dx: "Hipotermia", pista: "T < 35 °C" },
      { dx: "Síndrome do encarceramento", pista: "Movimentos oculares verticais preservados" },
      { dx: "Polineuropatia grave/Guillain-Barré", pista: "Lesão periférica, imagem do encéfalo normal" }
    ],
    gravidade: [
      "Idade mínima: recém-nascido a termo com ≥ 7 dias completos de vida",
      "Intervalo mínimo entre os 2 exames clínicos: 7 dias a 2 meses incompletos — 24 h; 2 a 24 meses incompletos — 12 h; ≥ 2 anos — 1 h",
      "Médicos examinadores: ≥ 1 ano de experiência no atendimento a pacientes em coma e ≥ 10 determinações de ME acompanhadas/realizadas ou curso de capacitação; um deles, sempre que possível, especialista em medicina intensiva, neurologia, neurocirurgia ou medicina de emergência"
    ]
  },
  exames: [
    {
      nome: "Teste de apneia",
      pedido: "Gasometria arterial antes (PaCO₂ basal 35–45 mmHg) e ao final do teste de apneia.",
      porQue: "Comprovar ausência de drive respiratório.",
      esperar: "PaCO₂ > 55 mmHg sem movimentos respiratórios.",
      interpretacao: "Técnica: FiO₂ 100% por ≥ 10 min (PaO₂ ≥ 200 mmHg); desconectar e ofertar O₂ 6 L/min por cateter traqueal (ou tubo T/CPAP); observar 8–10 min; colher gasometria e reconectar. Instabilidade: interromper, colher gasometria; se PaCO₂ > 55 o teste é positivo, senão usar exame complementar/repetir.",
      limitacoes: "DPOC retentor de CO₂ e lesão cervical alta exigem cautela/discussão."
    },
    {
      nome: "Exame complementar (obrigatório)",
      pedido: "Doppler transcraniano OU eletroencefalograma OU angiografia cerebral OU cintilografia/SPECT cerebral, conforme disponibilidade e idade.",
      porQue: "Comprovar ausência de perfusão sanguínea, atividade metabólica ou atividade elétrica encefálica.",
      esperar: "DTC: padrão de parada circulatória (fluxo reverberante, espículas sistólicas). EEG: silêncio elétrico. Angiografia/cintilografia: ausência de fluxo intracraniano.",
      interpretacao: "Exame compatível + 2 exames clínicos + apneia = ME. Se não compatível, repetir após intervalo.",
      limitacoes: "DTC: janela inadequada em ~10%; craniectomia/derivação podem alterar o padrão. EEG sofre interferência de sedativos e hipotermia."
    },
    {
      nome: "Avaliação do potencial doador",
      pedido: "Tipagem ABO, hemograma, eletrólitos, função renal e hepática, amilase, coagulograma, gasometria, lactato, hemoculturas, urocultura, sorologias (HIV, HTLV, hepatites B e C, sífilis, Chagas, toxoplasmose, CMV), ECG, ecocardiograma, RX de tórax — conforme solicitação da OPO.",
      porQue: "Viabilidade e segurança dos órgãos.",
      esperar: "—",
      interpretacao: "Definido pela OPO/CET.",
      limitacoes: "Não atrasa a determinação de ME."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide",
      linha: "l1",
      dose: "Adulto: 500–1.000 mL em bolus. Criança: 20 mL/kg",
      via: "IV",
      intervalo: "Reavaliar resposta",
      duracao: "—",
      monitorizacao: "PAM, diurese, lactato, responsividade a volume",
      contraindicacoes: "Congestão pulmonar",
      ajustes: "Metas (AMIB/ABTO): PAM ≥ 65 mmHg, diurese 0,5–4 mL/kg/h, lactato normalizando"
    },
    {
      droga: "Noradrenalina",
      linha: "l1",
      dose: "0,05–1 mcg/kg/min (adulto e criança), titular para PAM ≥ 65 (criança: PA pela idade)",
      via: "IV em acesso central (periférico calibroso temporariamente)",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "PA invasiva",
      contraindicacoes: "—",
      ajustes: "Ex.: 4 mg em 250 mL de SG 5% (16 mcg/mL). Doses altas: associar vasopressina"
    },
    {
      droga: "Vasopressina (choque e diabetes insípido)",
      linha: "l1",
      dose: "Adulto: 0,01–0,04 U/min (bolus de 1 U se necessário). Criança: 0,5 mU/kg/h, titular",
      via: "IV contínua",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "Diurese, sódio de 4/4–6/6 h",
      contraindicacoes: "—",
      ajustes: "Ex.: 20 U em 100 mL de SF 0,9% (0,2 U/mL). Alternativa no DI isolado: desmopressina 1–4 mcg IV (adulto), repetir conforme diurese e sódio"
    },
    {
      droga: "Metilprednisolona",
      linha: "adj",
      dose: "15 mg/kg (máx. 1 g) — adulto e criança",
      via: "IV",
      intervalo: "Dose única (repetir a cada 24 h conforme protocolo da OPO)",
      duracao: "—",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Após o diagnóstico de ME, para reduzir instabilidade e melhorar oxigenação (diretriz AMIB/ABTO); seguir a OPO"
    },
    {
      droga: "Insulina regular em infusão",
      linha: "adj",
      dose: "Conforme protocolo para glicemia 140–180 mg/dL",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "Glicemia capilar de 1/1–2/2 h",
      contraindicacoes: "—",
      ajustes: "Corrigir sódio para 130–150 mEq/L (diluir com SG 5% ou água por SNG no DI)"
    },
    {
      droga: "Medidas gerais",
      linha: "l1",
      dose: "Ventilação protetora (6–8 mL/kg, PEEP 8–10), aquecimento (T > 35 °C), Hb > 7 g/dL, cabeceira 30°, lubrificação ocular",
      via: "—",
      intervalo: "—",
      duracao: "Até a captação ou retirada do suporte",
      monitorizacao: "Gasometria, temperatura",
      contraindicacoes: "—",
      ajustes: "Manutenção agressiva preserva os órgãos e a validade dos exames"
    }
  ],
  destino: {
    agora: ["Conferir pré-requisitos, estabilizar, notificar CIHDOTT/OPO/CET, informar a família"],
    reavaliar: ["PA, diurese, sódio, glicemia e temperatura de 1/1–2/2 h"],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["UTI (ou sala de emergência com recursos de UTI) durante todo o protocolo"],
    transferencia: ["Exame complementar indisponível: discutir com a CET a realização (equipes móveis) ou a transferência"]
  },
  prescricao: {
    hospitalar: "MANUTENÇÃO DO POTENCIAL DOADOR (peso: ___ kg)\n1. Dieta zero (ou enteral conforme OPO).\n2. Ventilação mecânica: VC 6–8 mL/kg de peso predito, PEEP 8–10 cmH₂O, FiO₂ para SpO₂ > 94%.\n3. Cabeceira 30°; manta térmica para T > 35 °C; lubrificante ocular e oclusão palpebral.\n4. SF 0,9% 500–1.000 mL IV se PAM < 65 e responsivo a volume (criança 20 mL/kg).\n5. Noradrenalina 4 mg + SG 5% 250 mL (16 mcg/mL) IV em bomba; iniciar 0,05 mcg/kg/min, titular para PAM ≥ 65.\n6. Diurese > 4 mL/kg/h com Na em ascensão (diabetes insípido): vasopressina 20 U + SF 0,9% 100 mL (0,2 U/mL) IV a 0,01–0,04 U/min (3–12 mL/h no adulto; criança 0,5 mU/kg/h) OU desmopressina 1–4 mcg IV (adulto).\n7. Metilprednisolona 15 mg/kg IV (___ mg; máx. 1 g) após o diagnóstico de ME, conforme OPO.\n8. Glicemia capilar de 2/2 h; insulina regular IV para 140–180 mg/dL.\n9. Repor K, Mg e P; manter Na 130–150 mEq/L.\n10. Concentrado de hemácias se Hb < 7 g/dL.\n11. SUSPENDER sedativos e bloqueadores neuromusculares (respeitar meia-vida antes do exame).\n12. Controles: PA invasiva contínua, diurese horária, temperatura de 1/1 h, Na de 4/4–6/6 h, gasometria de 6/6 h.\n13. Notificação à CET via CIHDOTT/OPO: horário ___; família informada em ___."
  },
  orientacoesRetorno: [
    "Para a família (conversa em local reservado, linguagem simples): morte encefálica é a morte da pessoa; o coração pode continuar batendo por aparelhos e remédios, mas o cérebro não volta a funcionar",
    "Explicar cada etapa do protocolo e que a família pode acompanhar e ter um médico de confiança presente",
    "A conversa sobre doação é feita, de preferência, pela equipe da CIHDOTT/OPO, separada da comunicação do óbito",
    "A decisão da família sobre doação é respeitada em qualquer caso; não doar não muda o cuidado prestado"
  ],
  tabelas: [
    {
      titulo: "Pressão mínima para iniciar o protocolo em < 16 anos (CFM 2.173/2017)",
      colunas: ["Idade", "PAS (mmHg)", "PAM (mmHg)"],
      linhas: [
        ["Até 5 meses incompletos", "60", "43"],
        ["5 meses a 2 anos incompletos", "80", "60"],
        ["2 a 7 anos incompletos", "85", "62"],
        ["7 a 15 anos", "90", "65"]
      ],
      nota: "Adulto (≥ 16 anos): PAS ≥ 100 ou PAM ≥ 65. Conferir na resolução original antes de usar."
    },
    {
      titulo: "Reflexos de tronco a testar (ausentes na ME)",
      colunas: ["Reflexo", "Como testar"],
      linhas: [
        ["Fotomotor", "Luz intensa em cada pupila: sem constrição (pupilas médias ou dilatadas, fixas)"],
        ["Corneopalpebral", "Tocar a córnea com gaze/algodão: sem piscar"],
        ["Oculocefálico", "Rotação rápida da cabeça (sem lesão cervical): olhos acompanham a cabeça (\"olhos de boneca\" ausentes)"],
        ["Vestíbulo-calórico", "Conferir conduto livre e tímpano íntegro; cabeceira 30°; 50 mL de água gelada (~0 °C) no conduto; observar 1 min: sem movimento ocular. Aguardar alguns minutos entre os lados"],
        ["Tosse", "Aspiração traqueal profunda: sem tosse"]
      ]
    }
  ],
  fontes: [
    "Conselho Federal de Medicina — Resolução CFM nº 2.173/2017 (critérios do diagnóstico de morte encefálica)",
    "Lei nº 9.434/1997 e Decreto nº 9.175/2017 (Sistema Nacional de Transplantes; notificação compulsória de ME à CET)",
    "Conselho Federal de Medicina — Resolução CFM nº 1.826/2007 (suspensão de suporte após ME em não doador)",
    "AMIB/ABTO — Westphal GA et al. Diretrizes para avaliação e validação do potencial doador de órgãos em morte encefálica (Rev Bras Ter Intensiva, 2016)",
    "Ministério da Saúde — Portaria de Consolidação nº 4/2017 (regulamento técnico do SNT)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
