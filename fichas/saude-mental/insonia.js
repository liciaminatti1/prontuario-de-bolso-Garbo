// Insônia no adulto
registrarFicha({
  id: "insonia",
  especialidade: "saude-mental",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Insônia (higiene do sono, TCC-I, fármacos com cautela)",
  resumo: "Dificuldade para iniciar ou manter o sono, ou despertar precoce, com prejuízo diurno, apesar de oportunidade adequada para dormir. Crônica: ≥ 3 noites por semana por ≥ 3 meses. Tratamento de 1ª linha é a terapia cognitivo-comportamental para insônia (TCC-I); hipnóticos só por curto prazo e com cautela.",
  palavrasChave: "insonia nao consegue dormir sono higiene do sono tcc-i terapia cognitivo comportamental restricao de sono controle de estimulos zolpidem eszopiclona zopiclona trazodona benzodiazepinico clonazepam melatonina apneia do sono pernas inquietas isi indice de gravidade da insonia",
  critico: {
    tempo: "Excluir apneia, depressão e drogas",
    texto: "Antes de prescrever hipnótico, investigar apneia do sono, depressão/ansiedade com risco de suicídio, uso de álcool ou estimulantes e medicamentos que tiram o sono. Hipnótico não é tratamento de longo prazo: TCC-I primeiro."
  },
  alarmes: [
    "Ideação suicida ou depressão grave (avaliar risco no mesmo dia)",
    "Sonolência diurna excessiva com cochilos involuntários ao volante (apneia, narcolepsia) — orientar não dirigir",
    "Ronco alto, pausas respiratórias observadas, engasgos noturnos (apneia obstrutiva do sono)",
    "Mania ou hipomania (pouca necessidade de sono com energia aumentada) ou sintomas psicóticos",
    "Comportamentos complexos durante o sono (dirigir, comer, sair de casa), especialmente em uso de zolpidem",
    "Uso de hipnóticos em doses crescentes, associação com álcool ou opioide, quedas em idoso",
    "Insônia com dor, dispneia noturna, noctúria intensa ou perda de peso (doença clínica)"
  ],
  condutaInicial: [
    "Caracterizar: início, manutenção ou despertar precoce; duração (aguda < 3 meses × crônica); horários de deitar e levantar; tempo na cama; cochilos",
    "Aplicar o Índice de Gravidade da Insônia (ISI) e pedir diário do sono por 1–2 semanas",
    "Rastrear depressão e ansiedade (PHQ-9/GAD-7) e risco de suicídio",
    "Rastrear apneia do sono (STOP-Bang), pernas inquietas e uso de álcool, cafeína, nicotina, drogas",
    "Revisar medicamentos que causam insônia: corticoide, descongestionante, fluoxetina/venlafaxina pela manhã → noite, betabloqueador, diurético à noite, levotiroxina em excesso, broncodilatador, estimulantes",
    "Tratar a causa associada (dor, refluxo, noctúria, hipertireoidismo, depressão)",
    "Iniciar TCC-I (componentes na tabela): restrição do tempo de cama e controle de estímulos são as técnicas mais eficazes",
    "Hipnótico só se sofrimento importante apesar das medidas, na menor dose e por até 4 semanas, com plano de retirada"
  ],
  fataisExcluir: [
    "Depressão com risco de suicídio",
    "Transtorno bipolar em fase maníaca ou mista",
    "Apneia obstrutiva do sono grave (piora com benzodiazepínico e hipnótico)",
    "Abstinência de álcool ou benzodiazepínico",
    "Doença clínica que se manifesta à noite: insuficiência cardíaca (ortopneia), asma/DPOC, hipertireoidismo, dor oncológica"
  ],
  proximaDecisao: "Insônia aguda com estressor claro → orientação, higiene do sono e, se muito intensa, hipnótico por poucos dias. Insônia crônica → TCC-I (individual, em grupo ou digital) por 4–8 semanas; reavaliar com ISI e diário. Sem resposta → rever diagnóstico (apneia, ritmo circadiano, pernas inquietas, depressão) e considerar polissonografia ou encaminhamento. Depressão associada → tratar a depressão (antidepressivo sedativo pode ajudar).",
  clinica: {
    anamnese: [
      "Horário de deitar, tempo até adormecer (latência), despertares e duração, horário de acordar e de levantar, tempo total de sono estimado",
      "Consequências diurnas: cansaço, irritabilidade, atenção, desempenho, sonolência (Epworth)",
      "Hábitos: telas, trabalho na cama, cochilos, exercício tardio, refeições pesadas, horário irregular, trabalho em turnos",
      "Cafeína (café, chá-mate, refrigerante, energético), álcool (fragmenta o sono), nicotina, maconha, cocaína",
      "Medicamentos em uso, inclusive hipnóticos (dose, tempo, tentativas de retirada)",
      "Humor, ansiedade, preocupações na hora de deitar, traumas, luto",
      "Ronco, apneias observadas, cefaleia matinal, boca seca (apneia)",
      "Desconforto nas pernas ao repouso que melhora ao mexer (síndrome das pernas inquietas)",
      "Dor, noctúria, refluxo, falta de ar, calores (climatério)",
      "Ritmo: sono bom quando dorme em horário tardio e acorda tarde (atraso de fase)"
    ],
    exameFisico: [
      "IMC, circunferência cervical, orofaringe (Mallampati, hipertrofia de amígdalas) — apneia",
      "PA (apneia e HAS resistente)",
      "Tireoide, sinais de hipertireoidismo",
      "Sinais de doença cardiopulmonar, dor articular",
      "Estado mental: humor, ansiedade, psicose"
    ],
    diferenciais: [
      { dx: "Apneia obstrutiva do sono", pista: "Ronco, pausas, sonolência diurna, obesidade, HAS" },
      { dx: "Síndrome das pernas inquietas", pista: "Urgência de mexer as pernas ao deitar, alívio com movimento; ferritina baixa" },
      { dx: "Transtorno do ritmo circadiano (atraso de fase)", pista: "Adolescente/adulto jovem; dorme bem se puder acordar tarde" },
      { dx: "Depressão / ansiedade generalizada", pista: "Despertar precoce, anedonia, ruminação" },
      { dx: "Sono curto por privação voluntária", pista: "Pouco tempo reservado para dormir; dorme logo ao deitar" },
      { dx: "Insônia por substâncias", pista: "Cafeína, álcool, estimulantes, corticoide, abstinência de hipnótico" }
    ],
    gravidade: [
      "ISI 0–7: sem insônia clinicamente significativa · 8–14: subliminar · 15–21: moderada · 22–28: grave",
      "Aguda (< 3 meses): geralmente ligada a estressor; costuma melhorar",
      "Crônica (≥ 3 noites/semana por ≥ 3 meses, com prejuízo diurno): TCC-I"
    ]
  },
  exames: [
    {
      nome: "Diário do sono",
      pedido: "Diário do sono por 1 a 2 semanas: hora de deitar, tempo para adormecer, despertares, hora de acordar e de levantar, cochilos, cafeína, álcool e medicamentos.",
      porQue: "Base para o diagnóstico e para calcular a janela de sono da restrição de sono (TCC-I).",
      esperar: "—",
      interpretacao: "Eficiência do sono = tempo dormindo ÷ tempo na cama × 100. Baixa eficiência orienta a restrição do tempo de cama.",
      limitacoes: "Depende da adesão; não é preciso olhar o relógio a noite toda (estimativa)."
    },
    {
      nome: "Exames laboratoriais dirigidos",
      pedido: "TSH. Hemograma e ferritina (se sintomas de pernas inquietas). Glicemia e creatinina conforme quadro clínico.",
      porQue: "Hipertireoidismo; deficiência de ferro piora pernas inquietas.",
      esperar: "Normais na maioria.",
      interpretacao: "Pernas inquietas com ferritina ≤ 75 ng/mL: repor ferro (AASM 2024).",
      limitacoes: "Não há exame de rotina para insônia; não pedir bateria sem suspeita."
    },
    {
      nome: "Polissonografia",
      pedido: "Polissonografia de noite inteira (tipo I) ou poligrafia domiciliar, por suspeita de apneia obstrutiva do sono (STOP-Bang ___ pontos).",
      porQue: "Suspeita de apneia ou movimentos periódicos, comportamento anormal no sono, insônia refratária ao tratamento.",
      esperar: "Na insônia isolada não é necessária.",
      interpretacao: "Apneia moderada a grave → CPAP (pneumologia/otorrino/medicina do sono).",
      limitacoes: "Acesso limitado no SUS; não indicada para avaliação de rotina da insônia."
    }
  ],
  tratamento: [
    {
      droga: "Terapia cognitivo-comportamental para insônia (TCC-I)",
      linha: "l1",
      dose: "Restrição do tempo de cama + controle de estímulos + higiene do sono + reestruturação cognitiva + relaxamento",
      via: "Individual, em grupo na UBS, ou digital/autoguiada",
      intervalo: "Sessões semanais",
      duracao: "4–8 semanas",
      monitorizacao: "Diário do sono e ISI; sonolência diurna no início da restrição (não dirigir se sonolento)",
      contraindicacoes: "Restrição de sono: cautela em epilepsia, transtorno bipolar, motoristas profissionais",
      ajustes: "Primeira linha para todo adulto com insônia crônica, inclusive idosos e quem usa hipnótico há anos (ajuda na retirada). Efeito mais duradouro que o dos fármacos"
    },
    {
      droga: "Zolpidem",
      linha: "alt",
      dose: "5 mg ao deitar (mulheres e idosos); homens: 5–10 mg. Máximo 10 mg",
      via: "VO",
      intervalo: "1×/noite, imediatamente ao deitar, com pelo menos 7–8 h disponíveis para dormir",
      duracao: "Curto prazo: até 2–4 semanas; preferir uso intermitente",
      monitorizacao: "Sonolência matinal, amnésia, comportamentos complexos no sono, quedas, dependência",
      contraindicacoes: "Apneia do sono grave não tratada, insuficiência hepática grave, miastenia, insuficiência respiratória, história de comportamento complexo no sono, uso de álcool",
      ajustes: "Desde agosto de 2024 exige Notificação de Receita B (azul) em qualquer dose (Anvisa). Não dirigir na manhã seguinte. Fora da RENAME. Eszopiclona 1–3 mg é alternativa (também Notificação de Receita B desde 01/08/2024)"
    },
    {
      droga: "Antidepressivo sedativo (trazodona 25–100 mg ou mirtazapina 7,5–15 mg à noite)",
      linha: "adj",
      dose: "Trazodona: 25–50 mg, até 100 mg · Mirtazapina: 7,5–15 mg",
      via: "VO",
      intervalo: "À noite",
      duracao: "Reavaliar em 4–8 semanas",
      monitorizacao: "Hipotensão postural e priapismo (trazodona); ganho de peso (mirtazapina)",
      contraindicacoes: "Uso com IMAO; cautela em cardiopatas",
      ajustes: "Indicar quando há depressão ou ansiedade associada. Para insônia isolada a evidência é fraca (AASM sugere não usar trazodona só para insônia). Receita de controle especial (C1). Fora da RENAME"
    },
    {
      droga: "Benzodiazepínicos (clonazepam, diazepam, alprazolam, bromazepam)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não usar como hipnótico de rotina: tolerância, dependência, quedas e fraturas, prejuízo cognitivo, acidentes. Evitar no idoso (Beers). Se já em uso crônico: reduzir aos poucos (ex.: 10–25% da dose a cada 2–4 semanas) associado à TCC-I"
    },
    {
      droga: "Anti-histamínicos sedativos (prometazina, difenidramina, hidroxizina) e amitriptilina para dormir",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pouca eficácia, tolerância rápida, efeitos anticolinérgicos (confusão, retenção urinária, constipação). Evitar no idoso (Beers)"
    },
    {
      droga: "Melatonina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "No Brasil é suplemento alimentar (máx. 0,21 mg/dia), sem registro como medicamento para insônia. Evidência fraca para insônia crônica (AASM sugere não usar). Pode ter papel em transtorno do ritmo circadiano — orientação de especialista"
    }
  ],
  destino: {
    agora: [
      "Risco de suicídio: avaliação e plano de segurança no mesmo dia (CAPS/psiquiatria se alto risco)",
      "Iniciar orientações de higiene do sono e controle de estímulos na 1ª consulta; entregar diário do sono"
    ],
    reavaliar: [
      "Em 2–4 semanas com diário do sono: ajustar janela de sono (TCC-I)",
      "Se hipnótico: rever em 2–4 semanas e planejar retirada"
    ],
    alta: [
      "ISI < 8 e funcionamento diurno normal: manter técnicas; retorno se recaída"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "—"
    ],
    transferencia: [
      "Psicologia (TCC-I) / grupo de sono na UBS ou NASF/eMulti",
      "Medicina do sono, pneumologia ou otorrino: suspeita de apneia, narcolepsia, parassonia, insônia refratária",
      "Psiquiatria/CAPS: depressão grave, bipolaridade, dependência de hipnóticos ou álcool"
    ]
  },
  prescricao: {
    ambulatorial: "INSÔNIA CRÔNICA — ORIENTAÇÕES DE TCC-I (entregar por escrito)\n1. Horário fixo para LEVANTAR todos os dias, inclusive fins de semana: ____ h.\n2. Ir para a cama só quando estiver com sono, não antes de ____ h (janela de sono combinada pelo diário; não menor que 5 horas).\n3. Se não dormir em cerca de 20 minutos ou acordar e não voltar a dormir, levantar, ir para outro cômodo com luz fraca e fazer algo calmo; voltar para a cama só com sono.\n4. Usar a cama só para dormir e para relação sexual: sem celular, TV, trabalho ou refeições na cama.\n5. Evitar cochilos durante o dia (se necessário, até 20 minutos antes das 15 h).\n6. Café, chá-mate, chá preto, refrigerante de cola e energético só até o almoço. Evitar álcool e cigarro à noite.\n7. Atividade física regular, de preferência de manhã ou à tarde; luz natural pela manhã.\n8. Desligar telas 1 hora antes de deitar; quarto escuro, silencioso e com temperatura agradável.\n9. Reservar 15 minutos no início da noite para anotar preocupações e planos (tempo de preocupação), longe da cama.\n10. Preencher o diário do sono e trazer no retorno.\n\nSE HIPNÓTICO FOR NECESSÁRIO (curto prazo) — NOTIFICAÇÃO DE RECEITA B (AZUL)\nUSO ORAL\n1. Zolpidem 5 mg --------------------------------- 14 comprimidos\n   Tomar 1 comprimido ao deitar, já na cama, somente nas noites de maior dificuldade (no máximo 3 a 4 vezes por semana), por até 4 semanas. Não usar com bebida alcoólica. Não dirigir se sonolento no dia seguinte.\n\nSE DEPRESSÃO OU ANSIEDADE ASSOCIADA — RECEITA DE CONTROLE ESPECIAL (2 VIAS)\n1. Trazodona 50 mg -------------------------------- 30 comprimidos\n   Tomar 1/2 comprimido (25 mg) à noite por 3 dias; depois 1 comprimido (50 mg) à noite. Levantar devagar.\n   (Alternativa: mirtazapina 15 mg, 1/2 comprimido à noite.)"
  },
  orientacoesRetorno: [
    "Insônia crônica melhora mais e por mais tempo com mudança de hábitos e terapia (TCC-I) do que com remédio",
    "Nas primeiras semanas de restrição do tempo de cama pode haver mais sono durante o dia: não dirigir nem operar máquinas se estiver sonolento",
    "Remédio para dormir é por pouco tempo; não aumentar a dose por conta própria e não misturar com álcool",
    "Não parar de repente remédio para dormir usado há muito tempo: a retirada é gradual, com o médico",
    "Procurar atendimento imediato se tiver pensamentos de morte ou de se machucar",
    "Avisar se alguém notar ronco alto com paradas na respiração, ou se tiver sono incontrolável durante o dia",
    "Retornar em 2 a 4 semanas com o diário do sono preenchido"
  ],
  tabelas: [
    {
      titulo: "Componentes da TCC-I",
      colunas: ["Componente", "Como fazer"],
      linhas: [
        ["Restrição do tempo de cama", "Tempo na cama = tempo médio dormido no diário (mínimo 5 h). Hora de levantar fixa. Aumentar 15–30 min/semana se eficiência ≥ 85–90%; reduzir se < 80–85%"],
        ["Controle de estímulos", "Cama só para dormir; deitar só com sono; levantar se não dormir em ~20 min; horário fixo de levantar; sem cochilos"],
        ["Higiene do sono", "Cafeína só pela manhã, sem álcool à noite, exercício regular, quarto escuro e silencioso, sem telas antes de dormir (isolada tem pouco efeito)"],
        ["Reestruturação cognitiva", "Trabalhar crenças catastróficas sobre o sono (ex.: 'se eu não dormir 8 h vou passar mal amanhã')"],
        ["Relaxamento", "Respiração diafragmática, relaxamento muscular progressivo, atenção plena"]
      ],
      nota: "Eficiência do sono = tempo dormindo ÷ tempo na cama × 100. Os cortes de eficiência variam entre protocolos (80–90%)."
    },
    {
      titulo: "Índice de Gravidade da Insônia (ISI) — últimas 2 semanas",
      colunas: ["Item", "Pontuação"],
      linhas: [
        ["1. Dificuldade para pegar no sono", "0 (nenhuma) a 4 (muito grave)"],
        ["2. Dificuldade para manter o sono", "0 a 4"],
        ["3. Despertar muito cedo", "0 a 4"],
        ["4. Satisfação com o padrão de sono atual", "0 (muito satisfeito) a 4 (muito insatisfeito)"],
        ["5. Quanto o problema é percebido pelos outros", "0 a 4"],
        ["6. Preocupação/angústia com o sono", "0 a 4"],
        ["7. Interferência no funcionamento diário", "0 a 4"],
        ["Total", "0–7 ausente · 8–14 subliminar · 15–21 moderada · 22–28 grave"]
      ]
    }
  ],
  fontes: [
    "Associação Brasileira do Sono / Associação Brasileira de Medicina do Sono — Diretriz brasileira de diagnóstico e tratamento da insônia em adultos (Sleep Science, 2023;16 supl. 2:507–549)",
    "European Sleep Research Society — European Insomnia Guideline 2023 (Riemann D et al., J Sleep Res, 2023)",
    "American Academy of Sleep Medicine — Clinical practice guideline for the pharmacologic treatment of chronic insomnia in adults (2017) e Behavioral and psychological treatments for chronic insomnia (2021)",
    "American College of Physicians — Management of chronic insomnia disorder in adults (2016)",
    "Anvisa — RDC nº 871/2024 e nº 877/2024: zolpidem (qualquer concentração), zopiclona e eszopiclona passam a exigir Notificação de Receita B (vigência 01/08/2024)",
    "Anvisa — Melatonina como suplemento alimentar: limite de 0,21 mg/dia",
    "AASM — Clinical practice guideline for the treatment of restless legs syndrome (2024)",
    "American Geriatrics Society — Beers Criteria (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
