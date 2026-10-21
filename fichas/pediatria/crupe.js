// Crupe viral (laringotraqueíte)
registrarFicha({
  id: "crupe",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Crupe viral (laringotraqueíte aguda)",
  resumo: "Tosse ladrante, rouquidão e estridor inspiratório, geralmente de 6 meses a 3 anos, após pródromo de coriza (parainfluenza e outros vírus). Gravidade pelo escore de Westley; dexametasona para todos e adrenalina nebulizada nos moderados e graves.",
  palavrasChave: "crupe laringite laringotraqueite estridor tosse ladrante tosse de cachorro rouquidao westley dexametasona adrenalina nebulizada epinefrina budesonida",
  critico: {
    tempo: "Dexametasona no 1º atendimento",
    texto: "Toda criança com crupe recebe dexametasona 0,15–0,6 mg/kg em dose única. Estridor em repouso ou desconforto: adrenalina nebulizada 0,5 mL/kg (máx 5 mL) e observar 3–4 h."
  },
  alarmes: [
    "Estridor em repouso com tiragem importante, agitação ou sonolência",
    "Cianose, SpO₂ < 92%, fadiga respiratória (falência iminente)",
    "Salivação, dificuldade para engolir, posição em tripé, aspecto toxêmico, febre alta (epiglotite, traqueíte bacteriana, abscesso)",
    "Início súbito sem pródromo, engasgo (corpo estranho)",
    "Edema de face/lábios, urticária (angioedema/anafilaxia)",
    "< 6 meses, crupe recorrente ou prolongado (malformação, estenose subglótica, hemangioma)"
  ],
  condutaInicial: [
    "Manter a criança calma no colo do cuidador; evitar exame de orofaringe com abaixador e procedimentos desnecessários",
    "Classificar a gravidade (Westley) e medir SpO₂",
    "Dexametasona VO (ou IM se vômitos) em dose única para todos",
    "Moderado/grave: adrenalina nebulizada (1 mg/mL, 0,5 mL/kg, máx 5 mL) com O₂ se SpO₂ < 92%",
    "Observar 3–4 h após a adrenalina antes de decidir a alta (efeito dura cerca de 2 h)"
  ],
  fataisExcluir: [
    "Epiglotite",
    "Traqueíte bacteriana",
    "Abscesso retrofaríngeo ou periamigdaliano",
    "Corpo estranho em via aérea",
    "Anafilaxia / angioedema"
  ],
  proximaDecisao: "Leve (Westley ≤ 2): dexametasona e alta. Moderado (3–5): dexametasona + adrenalina; alta se sem estridor em repouso após 3–4 h de observação. Grave (≥ 6) ou sem resposta a 2–3 nebulizações de adrenalina: internação; ≥ 12 ou fadiga: UTI e preparo para via aérea difícil.",
  clinica: {
    anamnese: [
      "Início, pródromo de coriza e febre baixa, piora à noite",
      "Tosse ladrante, rouquidão, estridor (com choro ou em repouso)",
      "Salivação, disfagia, voz abafada (pensar epiglotite/abscesso)",
      "Engasgo prévio, alergias, episódios anteriores, intubação prévia (estenose subglótica)",
      "Vacinação (Hib, difteria)"
    ],
    exameFisico: [
      "Estado de consciência, cor, agitação",
      "Estridor (com agitação ou em repouso), tiragem (supraesternal, intercostal, subcostal)",
      "FR, FC, SpO₂ (saturação normal não exclui gravidade)",
      "Entrada de ar na ausculta",
      "Febre alta e toxemia → pensar em causa bacteriana"
    ],
    diferenciais: [
      { dx: "Epiglotite", pista: "Febre alta, toxemia, salivação, posição em tripé, sem tosse ladrante; não vacinado para Hib" },
      { dx: "Traqueíte bacteriana", pista: "Crupe que piora apesar do tratamento, febre alta, secreção purulenta" },
      { dx: "Corpo estranho", pista: "Início súbito, engasgo, sem febre" },
      { dx: "Crupe espasmódico", pista: "Episódios noturnos súbitos, sem febre, recorrentes; associação com atopia" },
      { dx: "Anafilaxia/angioedema", pista: "Urticária, edema de lábios, exposição a alérgeno" }
    ],
    gravidade: [
      "Escore de Westley (tabela): ≤ 2 leve · 3–5 moderado · 6–11 grave · ≥ 12 falência respiratória iminente",
      "Leve: tosse ladrante, sem estridor em repouso, sem ou com tiragem leve",
      "Moderado: estridor em repouso, tiragem leve a moderada, sem agitação importante",
      "Grave: estridor em repouso importante, tiragem acentuada, agitação ou letargia"
    ]
  },
  exames: [
    {
      nome: "Nenhum exame de rotina",
      pedido: "Não solicitar exames no crupe típico (diagnóstico clínico).",
      porQue: "Exames agitam a criança e podem piorar a obstrução.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "RX cervical (perfil) e de tórax",
      pedido: "Radiografia cervical em perfil para partes moles e radiografia de tórax PA — apenas se dúvida diagnóstica (corpo estranho, abscesso retrofaríngeo), quadro atípico ou sem resposta ao tratamento.",
      porQue: "Diagnóstico diferencial.",
      esperar: "Crupe: estreitamento subglótico ('sinal da torre' no AP).",
      interpretacao: "Aumento de partes moles pré-vertebrais → abscesso retrofaríngeo. Epiglote espessada ('sinal do polegar') → epiglotite.",
      limitacoes: "Nunca levar ao RX criança grave ou com suspeita de epiglotite sem acompanhamento e material de via aérea."
    }
  ],
  tratamento: [
    {
      droga: "Dexametasona",
      linha: "l1",
      dose: "0,15–0,6 mg/kg (leve: 0,15 mg/kg é suficiente; moderado/grave: 0,6 mg/kg) — dose máxima usual 10 mg (algumas referências admitem 16 mg)",
      via: "VO (preferencial) ou IM/IV se vômitos ou grave",
      intervalo: "Dose única",
      duracao: "Dose única (repetir em 24 h só se persistência de sintomas moderados)",
      monitorizacao: "Efeito começa em 1–2 h",
      contraindicacoes: "Varicela ativa ou exposição recente (relativa), tuberculose",
      ajustes: "Elixir 0,1 mg/mL (0,5 mg/5 mL) ou a solução injetável 4 mg/mL por via oral. Alternativas: prednisolona 1 mg/kg VO dose única (ou por 3 dias); budesonida nebulizada 2 mg se não tolera VO e sem acesso IM"
    },
    {
      droga: "Adrenalina (epinefrina) 1 mg/mL nebulizada",
      linha: "l1",
      dose: "0,5 mL/kg (máx 5 mL) da solução 1 mg/mL, sem diluir ou completando para 5 mL com SF 0,9%",
      via: "Nebulização com O₂ a 6–8 L/min",
      intervalo: "Pode repetir a cada 15–20 min se grave",
      duracao: "Conforme resposta",
      monitorizacao: "FC (taquicardia esperada), estridor, tiragem; efeito-rebote após 2 h — observar 3–4 h após a última dose",
      contraindicacoes: "Sem contraindicação absoluta no crupe grave; cautela em cardiopatia com obstrução de via de saída (tetralogia de Fallot)",
      ajustes: "Indicada no crupe moderado e grave. 3 ou mais nebulizações → internação"
    },
    {
      droga: "Oxigênio",
      linha: "adj",
      dose: "Para SpO₂ ≥ 92–94%",
      via: "Cateter, máscara ou O₂ próximo à face (blow-by) sem agitar a criança",
      intervalo: "Contínuo",
      duracao: "Enquanto hipoxêmico",
      monitorizacao: "SpO₂ contínua",
      contraindicacoes: "—",
      ajustes: "Hipoxemia no crupe indica gravidade"
    },
    {
      droga: "Nebulização com soro, ar umidificado, antibiótico, anti-histamínico, antitussígeno",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício; ar umidificado e nebulização simples não são recomendados",
      ajustes: "Antibiótico só se suspeita de traqueíte bacteriana ou epiglotite"
    }
  ],
  destino: {
    agora: [
      "Dexametasona para todos",
      "Moderado/grave: adrenalina nebulizada + O₂ se necessário",
      "Grave sem resposta: chamar a pessoa mais experiente em via aérea pediátrica; preparar tubo 0,5–1 número menor que o previsto para a idade"
    ],
    reavaliar: [
      "Westley a cada 15–30 min durante o tratamento",
      "3–4 h após a última adrenalina"
    ],
    alta: [
      "Sem estridor em repouso, sem tiragem, SpO₂ normal, aceitando líquidos",
      "Pelo menos 3–4 h após a adrenalina",
      "Cuidador orientado e com acesso para retornar"
    ],
    observacao: [
      "Crupe moderado que recebeu adrenalina: observar 3–4 h no PS",
      "Considerar observação mais longa se < 6 meses, retorno no mesmo episódio ou moradia distante"
    ],
    internacao: [
      "Necessidade de 2–3 ou mais nebulizações de adrenalina",
      "Estridor em repouso persistente após 4 h, hipoxemia, desidratação",
      "UTI: Westley ≥ 12, fadiga, rebaixamento, cianose, necessidade de adrenalina repetida"
    ],
    transferencia: [
      "UBS/UPA sem estrutura → transferir após dexametasona e adrenalina, com O₂ e acompanhante médico se grave"
    ]
  },
  prescricao: {
    hospitalar: "CRUPE MODERADO/GRAVE — PS (exemplo 12 kg)\n1. Manter no colo do cuidador, ambiente calmo; não examinar orofaringe com abaixador.\n2. Dexametasona 4 mg/mL injetável — 0,6 mg/kg = 7,2 mg = 1,8 mL VO (misturado em suco) ou IM, dose única (máx 10 mg).\n3. Adrenalina 1 mg/mL — 0,5 mL/kg = 5 mL (máx 5 mL) pura em nebulizador com O₂ 6–8 L/min. Repetir a cada 15–20 min se persistência de sinais de gravidade.\n4. O₂ úmido por máscara/blow-by se SpO₂ < 92%.\n5. Monitorizar FC, FR, SpO₂ e escore de Westley a cada 15–30 min.\n6. Observar no mínimo 3–4 h após a última adrenalina antes da alta.\n7. Se 3 ou mais nebulizações, hipoxemia ou Westley ≥ 6 persistente: internar; acionar UTI se Westley ≥ 12.\n8. Dipirona 15 mg/kg VO/IV se febre.\n\nCRUPE LEVE\n1. Dexametasona 0,15–0,6 mg/kg VO dose única (elixir 0,1 mg/mL: 12 kg × 0,15 mg/kg = 1,8 mg = 18 mL; ou usar a solução injetável 4 mg/mL VO, volume menor).",
    ambulatorial: "ALTA APÓS CRUPE (exemplo 12 kg) — a dose de dexametasona já foi dada no atendimento\nUSO ORAL\n1. Dipirona 500 mg/mL gotas (25 mg/gota) -------- 1 frasco\n   Dar 5 a 7 gotas (10–15 mg/kg) de 6 em 6 horas se febre ou desconforto.\n   ou Paracetamol 200 mg/mL gotas — 12 gotas (1 gota/kg) de 6 em 6 horas se febre.\n2. Soro fisiológico 0,9% — 2 a 5 mL em cada narina várias vezes ao dia.\n\nSe sintomas moderados persistentes após 24 h e reavaliação médica: nova dose de dexametasona 0,15–0,6 mg/kg ou prednisolona 1 mg/kg/dia por 1–2 dias."
  },
  orientacoesRetorno: [
    "O crupe costuma piorar à noite e melhorar em 2–3 dias; a tosse rouca pode durar até 1 semana",
    "Manter a criança calma, no colo, oferecer líquidos; choro piora o estridor",
    "Não usar vaporizador com água quente (risco de queimadura) nem xaropes para tosse",
    "Voltar imediatamente se: chiado alto ao respirar com a criança parada, afundamento do pescoço ou entre as costelas, lábios roxos, babando ou sem conseguir engolir, muito sonolenta ou muito agitada",
    "Retornar na UBS em 24–48 h se não melhorar"
  ],
  tabelas: [
    {
      titulo: "Escore de Westley",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Estridor", "Ausente 0 · com agitação 1 · em repouso 2"],
        ["Tiragem", "Ausente 0 · leve 1 · moderada 2 · grave 3"],
        ["Entrada de ar", "Normal 0 · diminuída 1 · muito diminuída 2"],
        ["Cianose", "Ausente 0 · com agitação 4 · em repouso 5"],
        ["Consciência", "Normal 0 · desorientado 5"]
      ],
      nota: "≤ 2 leve · 3–5 moderado · 6–11 grave · ≥ 12 falência respiratória iminente."
    }
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Tratado de Pediatria / documentos do Departamento de Emergência: Laringotraqueíte aguda (2022–2024)",
    "Cochrane — Glucocorticoids for croup in children (2023) e Nebulized epinephrine for croup in children (2013)",
    "Alberta Medical Association/TOP — Guideline for the diagnosis and management of croup (atualização 2023)",
    "Sociedad Española de Urgencias de Pediatría — Protocolo de laringitis aguda (2025)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
