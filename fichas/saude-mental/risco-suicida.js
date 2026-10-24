// Risco suicida: avaliação, plano de segurança e notificação
registrarFicha({
  id: "risco-suicida",
  especialidade: "saude-mental",
  caminho: "ps",
  publico: "ambos",
  titulo: "Risco suicida e tentativa de suicídio",
  resumo: "Avaliação de ideação, plano, intenção e tentativa; estratificação de risco, medidas de proteção, plano de segurança, notificação compulsória imediata de tentativa (violência autoprovocada) e encaminhamento na rede (CAPS, UBS, CVV 188).",
  palavrasChave: "suicidio risco suicida ideacao suicida tentativa de suicidio autoexterminio autolesao automutilacao violencia autoprovocada plano de seguranca cvv 188 caps notificacao sinan c-ssrs columbia setembro amarelo",
  critico: {
    tempo: "Perguntar diretamente sobre suicídio",
    texto: "Perguntar de forma direta não induz o ato. Com plano, intenção, tentativa recente ou psicose: não deixar sozinho, retirar meios letais, tratar a lesão/intoxicação e acionar psiquiatria. Tentativa: notificação imediata (até 24 h)."
  },
  alarmes: [
    "Plano definido, intenção declarada, acesso a meio letal (arma, medicamentos, pesticida, altura)",
    "Tentativa recente de alta letalidade ou com planejamento para não ser descoberto",
    "Psicose com vozes de comando, mania mista, agitação, insônia grave",
    "Desesperança intensa, despedidas, carta, doação de bens",
    "Intoxicação por álcool/drogas no momento",
    "Perda recente importante, violência sofrida, alta psiquiátrica recente (primeiras semanas)",
    "Criança ou adolescente com autolesão e ambiente de violência"
  ],
  condutaInicial: [
    "Tratar primeiro a lesão ou intoxicação (ver ficha Intoxicações exógenas) e garantir segurança: acompanhante ou vigilância contínua, retirar objetos cortantes, cintos, medicamentos",
    "Entrevista em ambiente reservado, sem julgamento: ideação (passiva/ativa), frequência, plano, meios, intenção, preparação, tentativas prévias",
    "Avaliar fatores de risco e de proteção (tabela) e transtorno mental associado (depressão, bipolar, uso de substâncias, psicose)",
    "Estratificar o risco (baixo, moderado, alto) e decidir o local de cuidado",
    "Construir com o paciente um plano de segurança por escrito antes da alta (ver tabela)",
    "Restringir acesso a meios letais com a família (armas fora de casa, medicamentos guardados por terceiro, quantidades pequenas na receita)",
    "Notificar no SINAN (ficha de violência interpessoal/autoprovocada): tentativa = notificação imediata em até 24 h à vigilância municipal",
    "Menor de 18 anos: comunicar o Conselho Tutelar (Lei 13.819/2019)",
    "Contato de seguimento em 24–72 h após a alta (telefone ou visita)"
  ],
  fataisExcluir: [
    "Intoxicação com efeito tardio (paracetamol, tricíclicos, liberação prolongada, chumbinho/organofosforado)",
    "Lesões ocultas (cortes profundos, enforcamento com lesão cervical, queda)",
    "Delirium ou causa orgânica para alteração de comportamento",
    "Gestação"
  ],
  proximaDecisao: "Risco alto → internação (psiquiatria em hospital geral ou CAPS III) com vigilância; recusa com risco iminente → internação involuntária (Lei 10.216/2001). Risco moderado → CAPS em até 24–72 h ou acompanhamento intensivo com família ciente. Risco baixo → UBS em até 1 semana com plano de segurança.",
  clinica: {
    anamnese: [
      "\"Você tem pensado em morrer ou em se matar?\" · \"Pensou em como faria?\" · \"Tem acesso a isso?\" · \"Você pretende fazer?\" · \"Já tentou antes?\"",
      "Tentativas prévias (maior preditor), letalidade, intenção, arrependimento",
      "Transtornos mentais, uso de álcool e drogas, dor crônica, doença grave",
      "Eventos: luto, separação, desemprego, dívidas, violência, bullying, discriminação",
      "Suicídio na família ou de pessoa próxima",
      "Rede de apoio, motivos para viver, filhos, religiosidade",
      "Colher informações com familiar (com consentimento sempre que possível; sigilo pode ser quebrado em risco de vida)"
    ],
    exameFisico: [
      "Lesões: cortes (antebraço, pescoço), marcas de enforcamento, queimaduras",
      "Sinais de intoxicação: pupilas, sudorese, FC, FR, odor",
      "Exame do estado mental: humor, afeto, pensamento (desesperança), sensopercepção (alucinações), juízo"
    ],
    diferenciais: [
      { dx: "Autolesão sem intenção suicida", pista: "Cortes superficiais para aliviar angústia; ainda aumenta risco futuro, notificar" },
      { dx: "Delirium / intoxicação", pista: "Rebaixamento, desorientação; reavaliar quando sóbrio" },
      { dx: "Psicose", pista: "Vozes de comando, delírio de ruína" }
    ],
    gravidade: [
      "Alto: plano + intenção, tentativa recente de alta letalidade, psicose, agitação, sem suporte, não aceita plano",
      "Moderado: ideação frequente sem intenção clara, fatores de risco múltiplos, algum suporte",
      "Baixo: ideação passiva e fugaz, sem plano, bons fatores de proteção",
      "Escalas (apoio, não substituem a entrevista): C-SSRS (Columbia), item 9 do PHQ-9, ASQ (crianças e adolescentes)"
    ]
  },
  exames: [
    {
      nome: "Tentativa por ingestão",
      pedido: "Glicemia, eletrólitos, creatinina, TGO, TGP, gasometria venosa, paracetamol sérico 4 h após a ingestão, salicilato se disponível, ECG; beta-hCG em mulheres em idade fértil.",
      porQue: "Coingestões silenciosas (paracetamol) e cardiotoxicidade.",
      esperar: "—",
      interpretacao: "Contatar CIATox 0800 722 6001.",
      limitacoes: "—"
    },
    {
      nome: "Avaliação clínica",
      pedido: "Conforme lesão: RX, TC cervical (enforcamento), hemograma.",
      porQue: "Lesões associadas.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Plano de segurança (intervenção)",
      linha: "l1",
      dose: "Elaborado com o paciente, por escrito, 6 passos (ver tabela)",
      via: "—",
      intervalo: "Revisar em cada contato",
      duracao: "Contínuo",
      monitorizacao: "Contato em 24–72 h após alta",
      contraindicacoes: "—",
      ajustes: "\"Contrato de não suicídio\" não tem eficácia e não deve ser usado"
    },
    {
      droga: "Antidepressivo (ISRS) — quando há depressão",
      linha: "l1",
      dose: "Sertralina 25–50 mg/dia ou fluoxetina 10–20 mg/dia (adolescente: fluoxetina 10 mg/dia, com psiquiatria)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "≥ 6–12 meses",
      monitorizacao: "Reavaliar em 1–2 semanas (risco transitório de ideação em < 25 anos)",
      contraindicacoes: "Mania/bipolar sem estabilizador",
      ajustes: "Ver ficha Depressão e ansiedade. Prescrever quantidade pequena (ex.: 14–30 dias) e entregar a terceiro se risco. Evitar tricíclicos (letais em superdose)"
    },
    {
      droga: "Lítio (transtorno bipolar / depressão recorrente — especialista)",
      linha: "adj",
      dose: "Conforme psiquiatria e litemia",
      via: "VO",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Litemia, função renal e tireoidiana",
      contraindicacoes: "—",
      ajustes: "Reduz suicídio no transtorno do humor, mas é tóxico em superdose: controlar quantidade dispensada"
    },
    {
      droga: "Benzodiazepínico em grande quantidade, tricíclico, opioide",
      linha: "ci",
      dose: "Evitar prescrição em quantidade",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Meio frequente de tentativa",
      ajustes: "Se indispensável: pequenas quantidades e guarda por familiar"
    }
  ],
  destino: {
    agora: ["Estabilizar lesão/intoxicação, vigilância contínua, avaliação de risco, notificação"],
    reavaliar: ["Reavaliar o risco quando sóbrio e após estabilização clínica"],
    alta: ["Risco baixo/moderado, sóbrio, plano de segurança escrito, meios letais restringidos com familiar, consulta marcada (CAPS/UBS) e contato em 24–72 h"],
    observacao: ["Intoxicação ou lesão até estabilizar; ideação com intoxicação alcoólica até sobriedade"],
    internacao: ["Risco alto, psicose, mania, tentativa grave, sem suporte social, impossibilidade de plano de segurança"],
    transferencia: ["Leito psiquiátrico em hospital geral, CAPS III ou serviço de referência via regulação"]
  },
  prescricao: {
    hospitalar: "RISCO SUICIDA ALTO / TENTATIVA — OBSERVAÇÃO (peso: ___ kg)\n1. Vigilância contínua 1:1 (profissional ou acompanhante orientado); não deixar sozinho, inclusive no banheiro.\n2. Retirar do leito e do quarto: objetos cortantes, cintos, cordões, sacos plásticos, medicamentos, isqueiros. Leito longe de janelas.\n3. Revista dos pertences com consentimento e registro.\n4. Tratamento da intoxicação/lesão conforme fichas específicas; contato com CIATox 0800 722 6001.\n5. Medicações por via supervisionada; conferir que foram engolidas.\n6. Se agitação: ver ficha Agitação psicomotora.\n7. Notificação SINAN (violência autoprovocada) imediata; menor de 18 anos: comunicar Conselho Tutelar.\n8. Avaliação psiquiátrica e serviço social.\n9. Registrar avaliação de risco, fatores de risco/proteção e plano no prontuário.",
    ambulatorial: "ALTA COM RISCO BAIXO/MODERADO\n1. Plano de segurança escrito entregue ao paciente (ver tabela).\n2. Retirar armas de fogo de casa; medicamentos guardados e administrados por familiar.\n3. Se antidepressivo indicado — USO ORAL\n   Sertralina 50 mg -------------------------------- 14 comprimidos\n   Tomar meio comprimido por dia por 7 dias, depois 1 comprimido por dia. Familiar guarda a cartela.\n4. Consulta no CAPS em __/__ ou na UBS em __/__ (até 7 dias).\n5. CVV 188 (ligação gratuita, 24 h) ou cvv.org.br (chat). SAMU 192."
  },
  orientacoesRetorno: [
    "Em crise: ligar 188 (CVV, gratuito, 24 horas), 192 (SAMU) ou ir ao PS mais próximo",
    "Para a família: guardar remédios trancados e entregar a dose do dia; tirar armas de casa; não deixar a pessoa sozinha em momento de crise",
    "Falar sobre o assunto não aumenta o risco; ouvir sem julgar ajuda",
    "Evitar álcool e outras drogas",
    "Voltar imediatamente se as ideias de morte voltarem mais fortes, se houver plano ou se não conseguir seguir o plano de segurança",
    "Consulta no CAPS/UBS em até 7 dias; a equipe vai entrar em contato nos próximos dias"
  ],
  tabelas: [
    {
      titulo: "Plano de segurança (Stanley-Brown) — preencher com o paciente",
      colunas: ["Passo", "O que escrever"],
      linhas: [
        ["1. Sinais de alerta", "Pensamentos, situações ou sentimentos que antecedem a crise"],
        ["2. Estratégias próprias", "O que posso fazer sozinho para me acalmar (caminhar, música, respiração, banho)"],
        ["3. Pessoas e lugares que distraem", "Nomes e lugares para estar com outras pessoas"],
        ["4. Pessoas a quem pedir ajuda", "Nomes e telefones de familiares/amigos"],
        ["5. Profissionais e serviços", "UBS, CAPS, CVV 188, SAMU 192, PS mais próximo"],
        ["6. Tornar o ambiente seguro", "Como afastar meios letais (quem guarda remédios, armas fora de casa)"]
      ],
      nota: "Acrescentar: \"Meu motivo para viver é...\". Entregar cópia ao paciente."
    },
    {
      titulo: "Fatores de risco e de proteção",
      colunas: ["Risco", "Proteção"],
      linhas: [
        ["Tentativa prévia (principal)", "Vínculo familiar e social"],
        ["Transtorno mental (depressão, bipolar, esquizofrenia, uso de álcool)", "Tratamento em curso e vínculo com a equipe"],
        ["Desesperança, impulsividade, agitação", "Filhos, responsabilidades, projetos"],
        ["Acesso a meios letais", "Crenças religiosas/culturais contrárias ao suicídio"],
        ["Isolamento, perdas, violência, dor crônica", "Habilidade de resolver problemas, busca de ajuda"],
        ["Homem idoso, população LGBTQIA+, indígena, pós-alta psiquiátrica", "Acesso a serviços de saúde"]
      ]
    }
  ],
  fontes: [
    "Lei nº 13.819/2019 — Política Nacional de Prevenção da Automutilação e do Suicídio (notificação compulsória; comunicação ao Conselho Tutelar)",
    "Ministério da Saúde — Portaria de Consolidação nº 4/2017, anexo 1 (lista de notificação compulsória: tentativa de suicídio é imediata)",
    "Associação Brasileira de Psiquiatria / CFM — Suicídio: informando para prevenir (2014)",
    "OMS — LIVE LIFE: an implementation guide for suicide prevention in countries (2021)",
    "Stanley B, Brown GK — Safety Planning Intervention (2012; ensaio JAMA Psychiatry 2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
