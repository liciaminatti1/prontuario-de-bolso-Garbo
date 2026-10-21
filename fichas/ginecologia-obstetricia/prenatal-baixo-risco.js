// Pré-natal de baixo risco
registrarFicha({
  id: "prenatal-baixo-risco",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Pré-natal de baixo risco (risco habitual)",
  resumo: "Roteiro das consultas de pré-natal na UBS: captação, calendário, exame obstétrico, estratificação de risco a cada consulta, Caderneta da Gestante e vinculação à maternidade (Rede Alyne).",
  palavrasChave: "prenatal pre natal gestante gravidez gestacao risco habitual baixo risco rede alyne rede cegonha caderneta da gestante consulta dum dpp altura uterina bcf acido folico sulfato ferroso calcio puerperio",
  critico: {
    tempo: "Captação até 12 semanas",
    texto: "Na 1ª consulta: testes rápidos (HIV, sífilis, hepatites B e C), pedidos do 1º trimestre e estratificação de risco. Mínimo de 7 consultas, intercaladas entre médico e enfermeiro (Rede Alyne, 2024)."
  },
  alarmes: [
    "PA ≥ 140/90 mmHg após 20 semanas, ou PA ≥ 160/110 em qualquer momento",
    "Cefaleia intensa, escotomas, dor epigástrica ou em hipocôndrio direito",
    "Sangramento vaginal",
    "Perda de líquido pela vagina",
    "Diminuição ou ausência de movimentos fetais",
    "Contrações regulares antes de 37 semanas",
    "Febre, disúria com dor lombar, sinais de sepse",
    "Dispneia, dor torácica, edema unilateral de membro inferior",
    "Tristeza intensa, ideação suicida, sinais de violência"
  ],
  condutaInicial: [
    "Confirmar a gestação (beta-hCG ou teste rápido de gravidez) e calcular IG e DPP pela DUM; corrigir pela USG de 1º trimestre se discrepância",
    "Abrir a Caderneta da Gestante e o registro no e-SUS APS; vincular à maternidade de referência",
    "Testes rápidos na 1ª consulta: HIV, sífilis, hepatite B, hepatite C (e teste rápido de proteinúria quando indicado)",
    "Solicitar exames do 1º trimestre (ver ficha Exames do pré-natal)",
    "Estratificar o risco (tabela de fatores de alto risco) em TODA consulta",
    "Prescrever ácido fólico e sulfato ferroso; cálcio a partir de 12 semanas (universal no SUS)",
    "Atualizar vacinas (dTpa, hepatite B, influenza, covid-19, VSR conforme IG)",
    "Encaminhar à saúde bucal; rastrear violência, uso de álcool, tabaco e outras drogas, sofrimento mental"
  ],
  fataisExcluir: [
    "Gravidez ectópica (dor e sangramento no 1º trimestre, útero menor que o esperado)",
    "Pré-eclâmpsia e síndrome HELLP",
    "Sífilis e HIV não tratados (transmissão vertical)",
    "Diabetes gestacional ou diabetes prévio não diagnosticado",
    "Depressão grave com risco de suicídio; violência doméstica"
  ],
  proximaDecisao: "Sem fatores de alto risco → seguir na UBS com calendário habitual. Algum fator de alto risco → encaminhar ao pré-natal de alto risco (PNAR) e manter o acompanhamento compartilhado na UBS. Sinal de alarme → maternidade/PS obstétrico no mesmo momento.",
  clinica: {
    anamnese: [
      "DUM (certeza, regularidade dos ciclos), método contraceptivo prévio, gestação planejada/desejada",
      "Antecedentes obstétricos: G, P (normal/cesárea), A; pré-eclâmpsia, DMG, parto prematuro, óbito fetal, malformação, intervalo interpartal",
      "Doenças prévias: HAS, DM, tireoide, cardiopatia, nefropatia, epilepsia, lúpus/SAF, trombose, anemia falciforme, HIV, sífilis, transtorno mental",
      "Medicações em uso (revisar teratogênicos: isotretinoína, valproato, varfarina, iECA/BRA, metotrexato, estatinas)",
      "Tabaco, álcool, outras drogas; situação de violência; rede de apoio; trabalho",
      "Queixas comuns: náuseas, pirose, constipação, lombalgia, corrimento, sintomas urinários",
      "A partir de 20 semanas: movimentos fetais, contrações, perdas vaginais, cefaleia, visão turva, edema"
    ],
    exameFisico: [
      "Peso, altura, IMC pré-gestacional e curva de ganho de peso da Caderneta",
      "PA sentada, com manguito adequado; edema (face e mãos sugerem pré-eclâmpsia)",
      "Exame geral, tireoide, mamas (sem rastreio de rotina por exame clínico isolado), dentes",
      "Altura uterina a partir de 12–13 semanas (fita métrica; comparar com a curva da Caderneta)",
      "BCF: sonar Doppler a partir de 10–12 semanas; Pinard a partir de 20 semanas",
      "Manobras de Leopold no 3º trimestre (situação e apresentação)",
      "Exame especular e coleta de citologia se rastreio em atraso (pode ser feito na gestação)"
    ],
    diferenciais: [
      { dx: "Gravidez ectópica / abortamento / mola", pista: "Sangramento ou dor no 1º trimestre; beta-hCG desproporcional; USG sem saco intrauterino" },
      { dx: "Altura uterina acima do esperado", pista: "Erro de datação, gemelar, polidrâmnio, macrossomia (DMG), mioma" },
      { dx: "Altura uterina abaixo do esperado", pista: "Erro de datação, restrição de crescimento fetal, oligoâmnio, óbito fetal" },
      { dx: "Edema fisiológico x pré-eclâmpsia", pista: "Edema de MMII que melhora com repouso é comum; edema de face/mãos com PA alta, cefaleia ou proteinúria não" },
      { dx: "Dispneia fisiológica x doença", pista: "Dispneia leve aos esforços é comum; dispneia súbita, taquicardia, hipoxemia → TEP, cardiopatia, asma" }
    ],
    gravidade: [
      "Fatores de alto risco (encaminhar ao PNAR, MS 2022): HAS crônica, DM prévio, cardiopatia, nefropatia, doença autoimune, tireoidopatia descompensada, epilepsia, trombofilia/TEV prévio, anemia falciforme, HIV, câncer, transtorno mental grave, dependência química",
      "Na gestação atual: pré-eclâmpsia/hipertensão gestacional, DMG, gemelaridade, restrição de crescimento, alteração de líquido amniótico, placenta prévia, isoimunização Rh, sífilis/toxoplasmose/infecções congênitas, anemia grave, ITU de repetição ou pielonefrite",
      "História obstétrica: pré-eclâmpsia grave/eclâmpsia, óbito fetal, parto prematuro, abortamento de repetição, malformação, ≥ 2 cesáreas, intervalo interpartal curto",
      "Fatores individuais: idade < 15 anos ou ≥ 40 anos (conforme protocolo local), IMC < 18,5 ou ≥ 40, vulnerabilidade social extrema",
      "Classificação deve ser refeita em toda consulta; o risco muda ao longo da gestação"
    ]
  },
  exames: [
    {
      nome: "Exames do 1º trimestre / 1ª consulta",
      pedido: "Hemograma. Tipagem sanguínea ABO e fator Rh. Coombs indireto (se Rh negativo). Glicemia de jejum. Teste rápido de sífilis e VDRL. Teste rápido de HIV (ou sorologia). HBsAg / teste rápido de hepatite B. Anti-HCV / teste rápido de hepatite C. Sorologia para HTLV 1/2. Toxoplasmose IgG e IgM. Urina tipo 1 (EAS) e urocultura com antibiograma. Eletroforese de hemoglobina. Citologia oncótica se rastreio em atraso.",
      porQue: "Rastrear anemia, isoimunização, diabetes, infecções de transmissão vertical e bacteriúria assintomática.",
      esperar: "Resultados em até 2–4 semanas; testes rápidos na hora.",
      interpretacao: "Conduta por exame na ficha Exames do pré-natal.",
      limitacoes: "Teste rápido reagente de sífilis: tratar na hora sem esperar o VDRL. HTLV foi incluído na Rede Alyne (2024)."
    },
    {
      nome: "Ultrassonografia obstétrica",
      pedido: "Ultrassonografia obstétrica de 1º trimestre (idealmente entre 11 e 14 semanas) para datação e avaliação de vitalidade. Ultrassonografia morfológica de 2º trimestre (20–24 semanas), se disponível.",
      porQue: "Datação precisa da gestação, número de fetos, corionicidade.",
      esperar: "Datação pelo CCN até ~14 semanas é a mais precisa.",
      interpretacao: "Se diferença entre DUM e USG de 1º trimestre for relevante, adotar a IG da USG e registrar na Caderneta.",
      limitacoes: "Ausência de USG não impede o pré-natal; usar DUM e altura uterina."
    },
    {
      nome: "Exames do 2º trimestre",
      pedido: "Teste oral de tolerância à glicose 75 g (jejum, 1 h e 2 h) entre 24 e 28 semanas, se glicemia de jejum inicial < 92 mg/dL. Toxoplasmose IgM e IgG se suscetível (repetir a cada trimestre). Coombs indireto se Rh negativo.",
      porQue: "Rastreio de DMG e soroconversão de toxoplasmose.",
      esperar: "—",
      interpretacao: "Ver ficha Diabetes na gestação.",
      limitacoes: "—"
    },
    {
      nome: "Exames do 3º trimestre",
      pedido: "Hemograma. Glicemia de jejum. Teste rápido de sífilis e VDRL. Teste rápido de HIV. HBsAg (se não vacinada/suscetível). Toxoplasmose IgM e IgG (se suscetível). Urina tipo 1 e urocultura. Coombs indireto (se Rh negativo). Cultura vaginal e anorretal para estreptococo do grupo B (35–37 semanas), se disponível.",
      porQue: "Repetir rastreio de infecções e anemia antes do parto.",
      esperar: "—",
      interpretacao: "Sífilis e HIV também são testados na admissão para o parto.",
      limitacoes: "Cultura para EGB nem sempre disponível no SUS; na falta, profilaxia intraparto por fatores de risco."
    }
  ],
  tratamento: [
    {
      droga: "Ácido fólico",
      linha: "l1",
      dose: "400 mcg (0,4 mg) ao dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Idealmente 30 dias antes da concepção até o fim da gestação (PNSF, MS 2022)",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Alto risco de defeito do tubo neural (filho prévio com DTN, uso de anticonvulsivante, DM prévio, obesidade): dose maior (5 mg/dia) por indicação médica"
    },
    {
      droga: "Sulfato ferroso",
      linha: "l1",
      dose: "40 mg de ferro elementar ao dia (profilaxia)",
      via: "VO",
      intervalo: "1 vez ao dia, longe das refeições e do cálcio",
      duracao: "Do diagnóstico da gestação até o fim da gestação e 3 meses pós-parto",
      monitorizacao: "Hemoglobina no 1º e 3º trimestres",
      contraindicacoes: "Hemocromatose, anemias não ferroprivas com sobrecarga de ferro",
      ajustes: "Anemia (Hb < 11 g/dL): dose de tratamento — ver ficha Ácido fólico e ferro na gestação"
    },
    {
      droga: "Carbonato de cálcio 1.250 mg (500 mg de cálcio elementar)",
      linha: "l1",
      dose: "1.000 mg de cálcio elementar ao dia (1 comprimido 2 vezes ao dia)",
      via: "VO",
      intervalo: "12/12 h, com refeições, pelo menos 2 h longe do ferro",
      duracao: "Da 12ª semana até o parto (suplementação universal, NT MS 251/2024)",
      monitorizacao: "Constipação",
      contraindicacoes: "Hipercalcemia, litíase renal por cálcio (avaliar)",
      ajustes: "—"
    },
    {
      droga: "AAS (ácido acetilsalicílico)",
      linha: "adj",
      dose: "100 mg ao dia (alguns protocolos 150 mg)",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "De 12 (até 16) semanas até 36 semanas",
      monitorizacao: "Sangramentos",
      contraindicacoes: "Alergia a AAS, sangramento ativo, úlcera péptica ativa",
      ajustes: "Só se alto risco de pré-eclâmpsia (ver ficha Hipertensão na gestação)"
    },
    {
      droga: "Paracetamol",
      linha: "adj",
      dose: "500–750 mg (máx. 3 g/dia)",
      via: "VO",
      intervalo: "6/6 h se dor ou febre",
      duracao: "Uso curto",
      monitorizacao: "—",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Analgésico de escolha na gestação; dipirona é usada no Brasil, evitar no 3º trimestre por precaução"
    },
    {
      droga: "AINEs (ibuprofeno, diclofenaco, naproxeno)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar a partir de 20 semanas (oligoâmnio, disfunção renal fetal) e no 3º trimestre (fechamento do ducto arterioso)",
      ajustes: "AAS em baixa dose para prevenção de pré-eclâmpsia é exceção"
    },
    {
      droga: "Teratogênicos: iECA/BRA, isotretinoína, varfarina, valproato, metotrexato, misoprostol",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Suspender/trocar ao diagnosticar a gestação",
      ajustes: "Anticonvulsivantes: não suspender abruptamente; discutir troca com neurologia"
    }
  ],
  destino: {
    agora: [
      "1ª consulta completa, testes rápidos, exames solicitados, suplementos e vacinas",
      "Registrar na Caderneta da Gestante e agendar o retorno"
    ],
    reavaliar: [
      "Consultas mensais até 28 semanas, quinzenais de 28 a 36 semanas e semanais de 36 semanas até o parto (MS)",
      "Mínimo de 7 consultas (Rede Alyne); não há alta do pré-natal antes do parto",
      "Retorno com resultados em até 2–4 semanas; resultado alterado → antecipar"
    ],
    alta: [
      "Consulta puerperal na 1ª semana após o parto (visita domiciliar ou UBS) e revisão até 42 dias",
      "Planejamento reprodutivo e contracepção no puerpério"
    ],
    observacao: ["—"],
    internacao: [
      "Encaminhar à maternidade: sinais de alarme, PA ≥ 160/110, suspeita de pré-eclâmpsia com sinais de gravidade, sangramento, perda de líquido, trabalho de parto, redução de movimentos fetais, pielonefrite"
    ],
    transferencia: [
      "PNAR (pré-natal de alto risco) via regulação para fatores de alto risco, mantendo o vínculo com a UBS",
      "Gestação de 41 semanas sem parto → maternidade de referência para avaliação e indução"
    ]
  },
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ácido fólico 400 mcg (0,4 mg) ------------------- 30 comprimidos\n   Tomar 1 comprimido ao dia, até o fim da gestação.\n   (Se o serviço só dispuser de 5 mg: ver ficha Ácido fólico e ferro na gestação.)\n2. Sulfato ferroso 40 mg de ferro elementar ------ 30 comprimidos\n   Tomar 1 comprimido ao dia, 30 minutos antes do almoço ou entre as refeições, com suco de fruta cítrica, até 3 meses após o parto.\n3. Carbonato de cálcio 1.250 mg (500 mg de cálcio) - 60 comprimidos\n   A partir de 12 semanas: tomar 1 comprimido no café da manhã e 1 no jantar, até o parto. Não tomar junto com o ferro (intervalo mínimo de 2 horas).\n\nSE DOR OU FEBRE\n4. Paracetamol 500 mg ----------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se dor ou febre (máximo 6 comprimidos por dia).\n\nSE ALTO RISCO DE PRÉ-ECLÂMPSIA (indicação médica)\n5. Ácido acetilsalicílico 100 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido à noite, de 12 a 36 semanas de gestação."
  },
  orientacoesRetorno: [
    "Trazer a Caderneta da Gestante em todas as consultas e exames",
    "Ir à maternidade imediatamente se: sangramento, perda de líquido, dor de cabeça forte, visão embaçada ou pontos brilhantes, dor forte no estômago, inchaço súbito de rosto e mãos, febre, bebê mexendo menos, contrações regulares antes de 37 semanas",
    "A partir de 28 semanas, observar os movimentos do bebê todos os dias; se mexer menos que o habitual, procurar atendimento no mesmo dia",
    "Não usar remédios por conta própria (anti-inflamatórios são proibidos a partir de 20 semanas)",
    "Alimentação variada, sem álcool e sem cigarro; atividade física leve a moderada é segura na gestação sem complicações",
    "Conhecer a maternidade de referência antes do parto (vinculação)",
    "Retornar na data agendada; após o parto, consulta na 1ª semana e até 42 dias"
  ],
  tabelas: [
    {
      titulo: "Calendário de consultas e ações (risco habitual)",
      colunas: ["Período", "Frequência", "Ações principais"],
      linhas: [
        ["Até 12 semanas", "Captação", "Testes rápidos, exames do 1º tri, USG, ácido fólico, ferro, vacinas"],
        ["12–28 semanas", "Mensal", "Cálcio desde 12 sem; TOTG 24–28 sem; dTpa a partir de 20 sem"],
        ["28–36 semanas", "Quinzenal", "Exames do 3º tri; VSR a partir de 28 sem; movimentos fetais"],
        ["36 semanas até o parto", "Semanal", "EGB 35–37 sem (se disponível); apresentação; plano de parto"],
        ["41 semanas", "Maternidade", "Avaliação para indução"],
        ["Puerpério", "1ª semana e até 42 dias", "Amamentação, PA, humor, contracepção"]
      ],
      nota: "Mínimo de 7 consultas (Rede Alyne, Portaria GM/MS 5.350/2024); a OMS (2016) recomenda 8 contatos."
    },
    {
      titulo: "Ganho de peso gestacional",
      colunas: ["IMC pré-gestacional", "Referência"],
      linhas: [
        ["< 18,5 (baixo peso)", "9,7–12,2 kg até 40 semanas (curvas brasileiras)"],
        ["18,5–24,9 (eutrofia)", "Usar a curva de ganho de peso da Caderneta da Gestante"],
        ["25–29,9 (sobrepeso)", "Usar a curva de ganho de peso da Caderneta da Gestante"],
        ["≥ 30 (obesidade)", "Usar a curva de ganho de peso da Caderneta da Gestante"]
      ],
      nota: "Desde 2022 o MS adota curvas brasileiras de ganho de peso (Kac e cols.), impressas na Caderneta da Gestante."
    }
  ],
  fontes: [
    "Ministério da Saúde — Portaria GM/MS nº 5.350/2024 (Rede Alyne) e Nota Técnica Conjunta nº 220/2024 (exames do pré-natal)",
    "Ministério da Saúde — Caderneta da Gestante (edição vigente, com curvas brasileiras de ganho de peso)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco (2012)",
    "Ministério da Saúde — Nota Técnica Conjunta nº 251/2024 (suplementação universal de cálcio na gestação)",
    "Ministério da Saúde — Caderno dos Programas Nacionais de Suplementação de Micronutrientes (2022)",
    "OMS — WHO recommendations on antenatal care for a positive pregnancy experience (2016)",
    "FEBRASGO — Position statement: ganho de peso gestacional (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
