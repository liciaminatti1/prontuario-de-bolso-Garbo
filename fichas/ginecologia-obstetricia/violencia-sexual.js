// Violência sexual — atendimento
registrarFicha({
  id: "violencia-sexual",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Violência sexual: acolhimento, profilaxias, notificação e vestígios",
  resumo: "Atendimento integral e obrigatório (Lei 12.845/2013) a pessoa de qualquer idade ou gênero vítima de violência sexual: acolhimento, tratamento de lesões, profilaxias (HIV, IST, hepatite B, gestação), notificação, coleta de vestígios e encaminhamento para a rede. Não exige boletim de ocorrência.",
  palavrasChave: "violencia sexual estupro abuso sexual agressao sexual pep profilaxia contracepcao emergencia levonorgestrel notificacao sinan conselho tutelar vestigios aborto legal ceftriaxona azitromicina penicilina benzatina metronidazol hepatite b",
  critico: {
    tempo: "Profilaxias em até 72 h",
    texto: "PEP-HIV até 72 h (ideal nas primeiras 2 h) e contracepção de emergência até 5 dias, quanto antes melhor. Atender sem exigir boletim de ocorrência; acolher, registrar e notificar."
  },
  alarmes: [
    "Lesões graves: sangramento genital ou anal ativo, lesão perineal extensa, trauma abdominal, TCE, estrangulamento",
    "Instabilidade hemodinâmica, rebaixamento de consciência (pensar em drogas facilitadoras)",
    "Risco de morte ou de novas agressões (agressor no domicílio)",
    "Ideação suicida ou crise aguda de ansiedade/dissociação",
    "Criança, adolescente, pessoa idosa ou com deficiência (comunicação obrigatória à rede de proteção)",
    "Gestação em curso ou atraso menstrual"
  ],
  condutaInicial: [
    "Acolher em local reservado; escuta qualificada sem julgamento; evitar repetir o relato; consentimento para cada etapa",
    "Tratar primeiro as lesões com risco de vida",
    "Registrar no prontuário: data, hora, local, tipo de violência, descrição das lesões (diagrama), relato nas palavras da pessoa",
    "Testes rápidos: HIV, sífilis, HBsAg, anti-HCV; beta-hCG",
    "Até 72 h com penetração (vaginal, anal ou oral) e agressor desconhecido ou de status desconhecido: PEP-HIV (TDF/3TC + DTG 28 dias)",
    "Profilaxia de IST independentemente do tempo: penicilina benzatina + ceftriaxona + azitromicina (+ metronidazol, que pode ser adiado)",
    "Hepatite B: vacinar se não imune + IGHAHB (até 14 dias)",
    "Vacina HPV se não vacinada: grupo prioritário (NT 63/2023: 9 a 45 anos; nota técnica de setembro de 2026 ampliou a partir de 2 anos, segundo a imprensa — conferir com a sala de vacina)",
    "Contracepção de emergência (levonorgestrel 1,5 mg) até 5 dias, se risco de gestação",
    "Coleta de vestígios com consentimento (antes de banho/troca de roupa, quando possível), preservando a cadeia de custódia",
    "Notificar no SINAN (ficha de violência interpessoal/autoprovocada) em até 24 h; comunicar à rede de proteção"
  ],
  fataisExcluir: [
    "Lesões traumáticas graves (abdome, períneo, reto, crânio, pescoço)",
    "Intoxicação por drogas facilitadoras (GHB, benzodiazepínicos, álcool)",
    "Risco de suicídio",
    "Gestação ectópica ou gestação prévia ao evento",
    "Retorno ao convívio com o agressor sem proteção"
  ],
  proximaDecisao: "Seguimento ambulatorial: retorno em até 2 semanas (adesão à PEP, efeitos adversos, resultado de exames, saúde mental), testes de HIV em 30 e 90 dias, sífilis em 30 dias, vacinas de hepatite B em 1 e 6 meses, beta-hCG se atraso. Gestação decorrente de estupro: informar sobre o direito à interrupção legal e encaminhar ao serviço de referência.",
  clinica: {
    anamnese: [
      "Data e hora da violência (tempo para PEP e contracepção)",
      "Tipo de contato: penetração vaginal, anal, oral; ejaculação; uso de preservativo; objetos",
      "Número de agressores, agressor conhecido; uso de álcool/drogas; perda de consciência",
      "Banho, troca de roupa, micção, evacuação após o evento (afeta vestígios)",
      "DUM, método contraceptivo, gestação; vacinação de hepatite B e HPV",
      "Doenças prévias, medicações, alergias (penicilina, cefalosporina)",
      "Risco atual: mora com o agressor? Rede de apoio? Ideação suicida?"
    ],
    exameFisico: [
      "Sinais vitais, estado mental, sinais de intoxicação",
      "Exame geral: equimoses, escoriações, marcas de mordida, contenção ou estrangulamento (pescoço, punhos, coxas internas)",
      "Exame genital e anal com consentimento e, em crianças, sem especular (posição de rã ou genupeitoral); especular só se necessário e tolerado",
      "Descrever lesões (tipo, tamanho, localização) e documentar em diagrama ou foto com consentimento",
      "Sinais de IST pré-existente"
    ],
    diferenciais: [
      { dx: "Lesão genital acidental (crianças: queda a cavaleiro)", pista: "Lesão anterior e unilateral; história compatível; não exclui abuso" },
      { dx: "Dermatoses vulvares (líquen escleroso em crianças)", pista: "Hipopigmentação em 8, equimoses espontâneas; pode simular abuso" },
      { dx: "IST em criança", pista: "Gonorreia, sífilis adquirida, tricomoníase ou clamídia após período neonatal sugerem abuso" }
    ],
    gravidade: [
      "Agudo (≤ 72 h): todas as profilaxias, inclusive PEP-HIV",
      "72 h a 5 dias: contracepção de emergência, profilaxia de IST, hepatite B (até 14 dias); PEP-HIV não indicada",
      "Crônico (abuso repetido) ou > 5 dias: testagem, tratamento de IST diagnosticadas, avaliação de gestação, proteção",
      "PEP-HIV não indicada: violência sem penetração e sem contato com sêmen/sangue; agressor sabidamente HIV negativo; abuso crônico pelo mesmo agressor (avaliar caso a caso)"
    ]
  },
  exames: [
    {
      nome: "Testes rápidos na admissão",
      pedido: "Teste rápido para HIV, sífilis, hepatite B (HBsAg) e hepatite C (anti-HCV).",
      porQue: "Linha de base para profilaxias e seguimento (e documentação legal).",
      esperar: "30 minutos. Não atrasar a 1ª dose de PEP.",
      interpretacao: "HIV reagente: não é PEP — confirmar e encaminhar para TARV. HBsAg reagente: não vacinar como profilaxia; avaliar hepatite B.",
      limitacoes: "Resultado basal reagente reflete infecção prévia, não do evento."
    },
    {
      nome: "Gestação",
      pedido: "Beta-hCG (teste rápido urinário ou sérico).",
      porQue: "Identificar gestação prévia ao evento e orientar contracepção de emergência.",
      esperar: "Imediato.",
      interpretacao: "Positivo: gestação anterior ao evento; seguir pré-natal; a PEP pode ser usada.",
      limitacoes: "Repetir se atraso menstrual no seguimento."
    },
    {
      nome: "Pesquisa de IST",
      pedido: "Pesquisa de Chlamydia trachomatis, Neisseria gonorrhoeae (e Trichomonas vaginalis) por biologia molecular em locais de penetração, se disponível.",
      porQue: "Diagnóstico de IST (em crianças, valor médico-legal).",
      esperar: "Dias.",
      interpretacao: "Positivo no seguimento: tratar e reavaliar.",
      limitacoes: "Não atrasar profilaxia empírica."
    },
    {
      nome: "Coleta de vestígios",
      pedido: "Coleta de material (swab vaginal, anal, oral, de pele; roupas íntimas) em envelopes de papel identificados, secos ao ar, com termo de consentimento e registro da cadeia de custódia.",
      porQue: "Identificação do agressor (DNA) e prova pericial.",
      esperar: "Melhor em até 72 h; pode ser útil até 5 dias.",
      interpretacao: "Laudo pericial.",
      limitacoes: "Não usar plástico (degrada DNA). Seguir o fluxo local com a perícia oficial."
    },
    {
      nome: "Exames gerais (se PEP ou lesões)",
      pedido: "Hemograma, creatinina, ALT/AST se doença renal/hepática ou lesões graves; exames de imagem conforme trauma.",
      porQue: "Segurança da PEP e avaliação do trauma.",
      esperar: "—",
      interpretacao: "TFG < 60: trocar tenofovir por zidovudina.",
      limitacoes: "Não atrasar a 1ª dose."
    }
  ],
  tratamento: [
    { droga: "PEP-HIV: tenofovir/lamivudina 300/300 mg + dolutegravir 50 mg", linha: "l1", dose: "1 comprimido de cada", via: "VO", intervalo: "1 vez ao dia", duracao: "28 dias", monitorizacao: "Adesão, náusea, função renal se risco", contraindicacoes: "Exposição > 72 h", ajustes: "Gestante: pode usar. Criança: ver ficha PEP (doses por peso)" },
    { droga: "Penicilina G benzatina (sífilis)", linha: "l1", dose: "Adulto: 2,4 milhões UI. Criança: 50.000 UI/kg (máximo 2,4 milhões UI)", via: "IM", intervalo: "Dose única", duracao: "—", monitorizacao: "Observar 30 min", contraindicacoes: "Anafilaxia a penicilina", ajustes: "1,2 milhão UI em cada glúteo" },
    { droga: "Ceftriaxona (gonorreia)", linha: "l1", dose: "Adulto e ≥ 45 kg: 500 mg. < 45 kg: 125 mg", via: "IM", intervalo: "Dose única", duracao: "—", monitorizacao: "Alergia", contraindicacoes: "Anafilaxia a cefalosporina", ajustes: "Diluir em lidocaína 1% sem vasoconstritor" },
    { droga: "Azitromicina (clamídia)", linha: "l1", dose: "Adulto e ≥ 45 kg: 1 g. < 45 kg: 20 mg/kg (máximo 1 g)", via: "VO", intervalo: "Dose única", duracao: "—", monitorizacao: "Náusea", contraindicacoes: "Alergia a macrolídeo", ajustes: "Suspensão 40 mg/mL para crianças" },
    { droga: "Metronidazol (tricomoníase)", linha: "l1", dose: "Adulto e ≥ 45 kg: 2 g dose única. < 45 kg: 15 mg/kg/dia divididos de 8/8 h por 7 dias (máximo 2 g/dia)", via: "VO", intervalo: "Ver dose", duracao: "Ver dose", monitorizacao: "Náusea e vômitos (pode adiar para o retorno)", contraindicacoes: "Álcool por 24 h", ajustes: "Pode ser postergado se muitos medicamentos ao mesmo tempo ou intolerância; usar suspensão 40 mg/mL em crianças" },
    { droga: "Vacina hepatite B + IGHAHB", linha: "l1", dose: "Vacina: dose para a idade (0–1–6 meses). IGHAHB 0,06 mL/kg", via: "IM (locais diferentes)", intervalo: "IGHAHB dose única", duracao: "Até 14 dias (ideal 24–48 h)", monitorizacao: "—", contraindicacoes: "—", ajustes: "Não indicada se vacinação completa com resposta conhecida ou HBsAg reagente" },
    { droga: "Vacina HPV (papilomavírus humano)", linha: "l1", dose: "0,5 mL", via: "IM", intervalo: "9–14 anos: 2 doses (0 e 6 meses). 15–45 anos ou imunossuprimidos: 3 doses (0, 2 e 6 meses) — NT 63/2023", duracao: "—", monitorizacao: "—", contraindicacoes: "Gestação (adiar); anafilaxia a dose anterior", ajustes: "Não precisa ser no 1º atendimento; pode ser no retorno. Menores de 9 anos: conferir a nota técnica vigente de 2026" },
    { droga: "Levonorgestrel (contracepção de emergência)", linha: "l1", dose: "1,5 mg", via: "VO", intervalo: "Dose única", duracao: "Até 5 dias (quanto antes, mais eficaz)", monitorizacao: "Beta-hCG se atraso menstrual > 7 dias", contraindicacoes: "Gestação confirmada (não é abortivo, mas não há indicação)", ajustes: "Adolescente após a menarca: mesma dose. Pessoa com IMC elevado: considerar DIU de cobre (até 5 dias) se disponível" }
  ],
  destino: {
    agora: ["Acolhimento, lesões, profilaxias e notificação no mesmo atendimento", "Acionar serviço social/psicologia se disponível"],
    reavaliar: ["Retorno em 2 semanas; HIV em 30 e 90 dias; sífilis 30 dias; vacinas hepatite B 1 e 6 meses"],
    alta: ["Estável, profilaxias entregues, plano de segurança definido, retorno agendado na rede (UBS, SAE, CRAS/CREAS)"],
    observacao: ["Intoxicação, crise psíquica, lesões que exigem reavaliação"],
    internacao: ["Lesões graves, risco de vida, criança sem garantia de proteção (com Conselho Tutelar)"],
    transferencia: ["Serviço de referência para violência sexual (coleta de vestígios, aborto legal) conforme rede local"]
  },
  prescricao: {
    ambulatorial: "VIOLÊNCIA SEXUAL — ADULTO / ADOLESCENTE ≥ 45 kg (aplicar e entregar na unidade)\nUSO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI --------------- 2 frascos-ampola\n   Aplicar 1.200.000 UI em cada glúteo (total 2.400.000 UI), dose única.\n2. Ceftriaxona 500 mg ---------------------------------- 1 frasco-ampola\n   Aplicar 500 mg IM, dose única (diluir em lidocaína 1% sem vasoconstritor).\n3. Vacina hepatite B (1ª dose) + Imunoglobulina anti-hepatite B 0,06 mL/kg IM em outro músculo, se não imune.\nUSO ORAL\n4. Azitromicina 500 mg --------------------------------- 2 comprimidos\n   Tomar 2 comprimidos juntos, dose única.\n5. Metronidazol 400 mg --------------------------------- 5 comprimidos\n   Tomar 5 comprimidos juntos, dose única (pode ser tomado no retorno, se enjoo). Sem álcool por 24 h.\n6. Levonorgestrel 1,5 mg ------------------------------- 1 comprimido\n   Tomar 1 comprimido agora (até 5 dias após a violência).\n7. Tenofovir 300 mg + lamivudina 300 mg ---------------- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 28 dias (se até 72 h).\n8. Dolutegravir 50 mg ---------------------------------- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 28 dias, junto com o anterior.\n9. Ondansetrona 8 mg ----------------------------------- 10 comprimidos\n   Tomar 1 comprimido até de 8 em 8 horas se enjoo.\n\nCRIANÇA / ADOLESCENTE < 45 kg (peso: ___ kg)\n- Penicilina G benzatina 50.000 UI/kg IM dose única (máximo 2.400.000 UI).\n- Ceftriaxona 125 mg IM dose única.\n- Azitromicina suspensão 40 mg/mL: 20 mg/kg VO dose única (máximo 1 g).\n- Metronidazol suspensão 40 mg/mL: 15 mg/kg/dia VO divididos de 8 em 8 horas por 7 dias (máximo 2 g/dia).\n- PEP-HIV por peso: ver ficha PEP (AZT + 3TC + DTG ≤ 35 kg).\n- Levonorgestrel 1,5 mg dose única se após a menarca."
  },
  orientacoesRetorno: [
    "Você não tem culpa. O atendimento é sigiloso e não depende de boletim de ocorrência",
    "Tomar os remédios do HIV todos os dias por 28 dias; não parar sem falar com a equipe",
    "Usar preservativo até concluir os exames de 90 dias",
    "Se a menstruação atrasar, fazer teste de gravidez; gravidez por estupro dá direito à interrupção legal no SUS",
    "Voltar em 2 semanas e fazer os exames de 30 e 90 dias; completar a vacina de hepatite B",
    "Procurar ajuda imediata se sangramento, dor forte, febre, pensamentos de se machucar ou risco de nova agressão (Ligue 180; 190; crianças: Disque 100)"
  ],
  tabelas: [
    {
      titulo: "Linha do tempo das profilaxias",
      colunas: ["Medida", "Prazo", "Observação"],
      linhas: [
        ["PEP-HIV", "Até 72 h (ideal 2 h)", "28 dias"],
        ["Contracepção de emergência", "Até 5 dias", "Eficácia maior quanto mais cedo"],
        ["Hepatite B (vacina + IGHAHB)", "Até 14 dias", "Ideal 24–48 h"],
        ["Profilaxia de IST", "Sem limite rígido", "Fazer no 1º atendimento"],
        ["Coleta de vestígios", "Melhor até 72 h", "Com consentimento; cadeia de custódia"]
      ]
    },
    {
      titulo: "Notificação e comunicação",
      colunas: ["Situação", "O que fazer", "Base legal"],
      linhas: [
        ["Toda violência sexual", "Notificação imediata no SINAN (até 24 h) à vigilância municipal", "Portaria de consolidação MS nº 4/2017 (lista de notificação compulsória)"],
        ["Mulher", "Comunicação à autoridade policial em até 24 h, para fins estatísticos e providências", "Lei 10.778/2003 alterada pela Lei 13.931/2019"],
        ["Criança e adolescente", "Comunicar ao Conselho Tutelar", "ECA, Lei 8.069/1990"],
        ["Pessoa idosa", "Comunicar a autoridades e conselhos do idoso", "Estatuto da Pessoa Idosa, Lei 10.741/2003"]
      ],
      nota: "Atendimento integral obrigatório em todos os hospitais do SUS (Lei 12.845/2013). Coleta de vestígios por profissionais de saúde: Decreto 7.958/2013."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Profilaxia Pós-Exposição de Risco (PEP) à Infecção pelo HIV, IST e Hepatites Virais (2024)",
    "Ministério da Saúde — Nota Técnica nº 63/2023-CGICI/DPNI/SVSA/MS (vacina HPV para vítimas de violência sexual) e nota técnica de ampliação (setembro de 2026)",
    "Ministério da Saúde — Norma técnica: Prevenção e tratamento dos agravos resultantes da violência sexual contra mulheres e adolescentes (3ª ed., 2012) e Atenção humanizada às pessoas em situação de violência sexual com registro de informações e coleta de vestígios (2015)",
    "Lei 12.845/2013; Lei 13.931/2019; Decreto 7.958/2013",
    "OMS — Responding to children and adolescents who have been sexually abused: WHO clinical guidelines (2017)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
