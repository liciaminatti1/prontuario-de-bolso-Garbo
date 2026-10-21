// Dispepsia funcional, síndrome dispéptica e gastrite
registrarFicha({
  id: "dispepsia",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Dispepsia (síndrome dispéptica), dispepsia funcional e \"gastrite\"",
  resumo: "Dor ou queimação epigástrica, plenitude pós-prandial ou saciedade precoce. Sem alarme e jovem: testar e tratar H. pylori e/ou IBP. Com alarme ou idade de risco: endoscopia. Dispepsia funcional = sintomas sem lesão na endoscopia (Roma IV). \"Gastrite\" é diagnóstico histológico, não sintoma.",
  palavrasChave: "dispepsia dispepsia funcional gastrite epigastralgia queimacao estomago azia plenitude saciedade precoce empachamento helicobacter pylori omeprazol endoscopia eda roma iv sindrome do desconforto pos prandial amitriptilina domperidona",
  critico: {
    tempo: "Alarme ou risco → endoscopia",
    texto: "Perda de peso, disfagia, vômitos persistentes, anemia, sangramento, massa ou dispepsia nova em idade de risco para câncer gástrico exigem endoscopia digestiva alta antes de tratar empiricamente."
  },
  alarmes: [
    "Perda de peso não intencional",
    "Disfagia progressiva ou odinofagia",
    "Vômitos persistentes",
    "Hematêmese, melena ou anemia ferropriva",
    "Massa epigástrica, linfonodo supraclavicular, icterícia",
    "Início dos sintomas a partir de 40 anos no Brasil (alta incidência de câncer gástrico) — ver nota",
    "História familiar de câncer gástrico em parente de 1º grau",
    "Dor que irradia para dorso, piora ao deitar, sudorese ou relação com esforço (pancreatite, aneurisma, isquemia miocárdica)"
  ],
  condutaInicial: [
    "Excluir causa cardíaca (dor ao esforço, fatores de risco: ECG) e biliar/pancreática (dor em cólica, irradiação)",
    "Revisar medicamentos: AINE, AAS, bisfosfonato, ferro, potássio, metformina, antibióticos, corticoide",
    "Separar DRGE (pirose e regurgitação predominantes: ver ficha drge) de dispepsia",
    "Com alarme ou idade de risco: endoscopia digestiva alta com biópsias (incluindo pesquisa de H. pylori)",
    "Sem alarme e jovem: testar e tratar H. pylori (antígeno fecal ou teste respiratório); se negativo ou sintomas persistirem após erradicação, IBP por 4–8 semanas",
    "Mudanças de hábito: refeições menores e frequentes, reduzir gordura, álcool, tabagismo, café se piora"
  ],
  fataisExcluir: [
    "Síndrome coronariana aguda (dor epigástrica em idoso, diabético, mulher)",
    "Câncer gástrico ou de esôfago",
    "Úlcera péptica complicada (sangramento, perfuração)",
    "Pancreatite / câncer de pâncreas",
    "Colecistite ou coledocolitíase"
  ],
  proximaDecisao: "H. pylori positivo → erradicar (ver ficha ulcera-peptica-hpylori) e confirmar cura. Negativo ou sem resposta → IBP 4–8 semanas. Persistência após IBP → endoscopia (se ainda não feita); EDA normal = dispepsia funcional: explicar a doença, procinético se plenitude, amitriptilina em dose baixa se dor epigástrica refratária.",
  clinica: {
    anamnese: [
      "Tipo de sintoma: dor/queimação epigástrica (síndrome da dor epigástrica) × plenitude pós-prandial e saciedade precoce (síndrome do desconforto pós-prandial)",
      "Duração e frequência; relação com alimentos e jejum",
      "Pirose e regurgitação (DRGE), dor em cólica no hipocôndrio direito após refeição gordurosa (biliar)",
      "Sinais de alarme (perda de peso, disfagia, vômitos, sangramento)",
      "Medicamentos (AINE, AAS, anticoagulante), álcool, tabagismo",
      "Úlcera prévia, H. pylori prévio e tratamento, história familiar de câncer gástrico",
      "Ansiedade, depressão, estresse, sintomas intestinais associados (síndrome do intestino irritável)"
    ],
    exameFisico: [
      "Peso e IMC (comparar com registro anterior)",
      "Palidez, icterícia, linfonodo supraclavicular esquerdo (Virchow)",
      "Palpação abdominal: massa, visceromegalia, sinal de Murphy, defesa",
      "Exame normal é a regra na dispepsia funcional"
    ],
    diferenciais: [
      { dx: "Dispepsia funcional", pista: "Sintomas ≥ 3 meses (início ≥ 6 meses), EDA normal" },
      { dx: "Úlcera péptica", pista: "Dor que melhora ou piora com alimento, uso de AINE, H. pylori" },
      { dx: "DRGE", pista: "Pirose e regurgitação predominantes" },
      { dx: "Doença biliar", pista: "Dor em cólica no hipocôndrio direito/epigástrio por 30 min a horas" },
      { dx: "Câncer gástrico", pista: "Idade, perda de peso, anemia, saciedade precoce progressiva" },
      { dx: "Gastroparesia", pista: "Diabetes de longa data, vômitos de alimentos ingeridos horas antes" },
      { dx: "Doença celíaca, parasitose (giardíase, estrongiloidíase)", pista: "Diarreia, anemia, perda de peso" },
      { dx: "Isquemia miocárdica", pista: "Relação com esforço, fatores de risco cardiovascular" }
    ],
    gravidade: [
      "Dispepsia funcional (Roma IV): plenitude pós-prandial, saciedade precoce, dor ou queimação epigástrica incômodas, sem doença estrutural na EDA, por 3 meses com início ≥ 6 meses",
      "Síndrome do desconforto pós-prandial: plenitude e saciedade precoce ≥ 3 dias/semana",
      "Síndrome da dor epigástrica: dor ou queimação ≥ 1 dia/semana",
      "\"Gastrite\" endoscópica leve (enantema) não explica sintomas; a gastrite histológica relevante é a por H. pylori (e a atrófica/metaplasia, que muda o seguimento)"
    ]
  },
  exames: [
    {
      nome: "Endoscopia digestiva alta com biópsias",
      pedido: "Endoscopia digestiva alta com biópsias gástricas (antro e corpo — protocolo de Sydney) e pesquisa de H. pylori (teste da urease e histologia). Indicação: dispepsia com sinal de alarme / idade ≥ ___ anos / dispepsia refratária.",
      porQue: "Excluir câncer, úlcera, esofagite; diagnosticar H. pylori e gastrite atrófica/metaplasia.",
      esperar: "Normal na dispepsia funcional.",
      interpretacao: "Úlcera → tratar (ficha ulcera-peptica-hpylori). Atrofia ou metaplasia intestinal extensa → seguimento endoscópico com gastroenterologista.",
      limitacoes: "Suspender IBP 2 semanas e antibiótico/bismuto 4 semanas antes para não falsear a pesquisa de H. pylori."
    },
    {
      nome: "Pesquisa não invasiva de H. pylori",
      pedido: "Pesquisa de antígeno de Helicobacter pylori nas fezes (anticorpo monoclonal) OU teste respiratório com ureia marcada (13C). Indicação: dispepsia sem sinais de alarme — estratégia testar e tratar.",
      porQue: "Testar e tratar é custo-efetivo em jovens sem alarme.",
      esperar: "Positivo em parte relevante dos adultos brasileiros.",
      interpretacao: "Positivo → erradicar. Negativo → IBP empírico.",
      limitacoes: "Falso-negativo com IBP (suspender 2 semanas) e antibiótico/bismuto recentes (4 semanas). Sorologia não serve para diagnóstico de infecção ativa nem controle de cura."
    },
    {
      nome: "Laboratório básico",
      pedido: "Hemograma, ferritina. Se diarreia/perda de peso: antitransglutaminase IgA + IgA total, parasitológico de fezes (3 amostras). Se dor sugestiva: TGO, TGP, GGT, fosfatase alcalina, bilirrubinas, lipase. ECG se fator de risco cardiovascular.",
      porQue: "Anemia é alarme; excluir causas orgânicas.",
      esperar: "Normais na dispepsia funcional.",
      interpretacao: "Anemia ferropriva → EDA e colonoscopia.",
      limitacoes: "—"
    },
    {
      nome: "Ultrassonografia de abdome superior",
      pedido: "Ultrassonografia de abdome superior. Indicação: dor em hipocôndrio direito / suspeita de colelitíase.",
      porQue: "Só se quadro sugestivo de doença biliar.",
      esperar: "—",
      interpretacao: "Colelitíase assintomática achada por acaso não explica dispepsia; não indica cirurgia por si.",
      limitacoes: "Não é exame de rotina para dispepsia."
    }
  ],
  tratamento: [
    {
      droga: "Omeprazol",
      linha: "l1",
      dose: "20 mg",
      via: "Oral, 30 min antes do café",
      intervalo: "1 vez ao dia",
      duracao: "4–8 semanas; depois tentar suspender ou usar sob demanda",
      monitorizacao: "Resposta; evitar uso crônico sem indicação",
      contraindicacoes: "Uso com rilpivirina; cuidado com clopidogrel (preferir pantoprazol)",
      ajustes: "Alternativas: pantoprazol 40 mg, esomeprazol 20 mg, lansoprazol 30 mg. Melhor resposta na síndrome da dor epigástrica"
    },
    {
      droga: "Erradicação de H. pylori",
      linha: "l1",
      dose: "Conforme ficha ulcera-peptica-hpylori (quádrupla com bismuto por 14 dias é a preferida no V Consenso Brasileiro 2026)",
      via: "Oral",
      intervalo: "—",
      duracao: "14 dias",
      monitorizacao: "Confirmar cura ≥ 4 semanas após o fim",
      contraindicacoes: "—",
      ajustes: "Indicada em todo dispéptico com H. pylori positivo, mesmo com EDA normal (parte melhora e reduz risco de câncer)"
    },
    {
      droga: "Domperidona",
      linha: "alt",
      dose: "10 mg",
      via: "Oral, 15–30 min antes das refeições",
      intervalo: "Até 3 vezes ao dia (máx 30 mg/dia)",
      duracao: "Até 7 dias (EMA/Anvisa: menor dose pelo menor tempo); reavaliar antes de repetir",
      monitorizacao: "QT (ECG se cardiopata ou com outras drogas que prolongam QT)",
      contraindicacoes: "QT longo, cardiopatia significativa, insuficiência hepática moderada/grave, uso de cetoconazol, eritromicina, claritromicina",
      ajustes: "Para plenitude pós-prandial e saciedade precoce. Metoclopramida 10 mg 3×/dia é alternativa por até 5 dias (risco de discinesia tardia; evitar em idosos)"
    },
    {
      droga: "Amitriptilina",
      linha: "alt",
      dose: "10 mg à noite; aumentar até 25–50 mg se necessário",
      via: "Oral",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Pelo menos 8–12 semanas para avaliar resposta; manter 6–12 meses se funcionar",
      monitorizacao: "Sonolência, boca seca, constipação; ECG se cardiopata ou > 50 anos",
      contraindicacoes: "IAM recente, arritmia, glaucoma de ângulo fechado, retenção urinária; cautela em idosos",
      ajustes: "Neuromodulador para dispepsia funcional (sobretudo dor epigástrica) refratária ao IBP. Explicar que é para modular a dor, não por depressão"
    },
    {
      droga: "Simeticona / antiácido (hidróxido de alumínio + magnésio)",
      linha: "adj",
      dose: "Antiácido 10 mL",
      via: "Oral",
      intervalo: "Após refeições e ao deitar, se sintomas",
      duracao: "Uso pontual",
      monitorizacao: "—",
      contraindicacoes: "DRC avançada (magnésio, alumínio)",
      ajustes: "Alívio rápido, sem efeito sobre a evolução. Não usar junto com outros remédios (intervalo de 2 h)"
    },
    {
      droga: "Uso crônico de IBP sem indicação",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar \"protetor gástrico\" contínuo sem indicação formal",
      ajustes: "Indicações de IBP contínuo: esofagite grave, Barrett, uso de AINE/AAS/anticoagulante com risco de sangramento. Uso prolongado: associação com infecções entéricas, deficiência de B12 e magnésio, fraturas"
    }
  ],
  destino: {
    agora: [
      "Sem alarme e < 40 anos: testar e tratar H. pylori ou IBP empírico",
      "Com alarme ou ≥ 40 anos: solicitar EDA (prioridade se perda de peso, disfagia, anemia ou sangramento)"
    ],
    reavaliar: [
      "4–8 semanas após iniciar tratamento",
      "Confirmar erradicação do H. pylori ≥ 4 semanas após o fim do tratamento"
    ],
    alta: [
      "Sintomas controlados: suspender o IBP gradualmente ou uso sob demanda",
      "Dispepsia funcional: seguimento na UBS com plano de autocuidado"
    ],
    observacao: ["—"],
    internacao: [
      "Hemorragia digestiva, perfuração, obstrução, vômitos com desidratação"
    ],
    transferencia: [
      "PS: hematêmese, melena, dor abdominal intensa súbita, dor torácica",
      "Gastroenterologia: dispepsia refratária, EDA com atrofia/metaplasia extensa, falha de 2 tratamentos de H. pylori, suspeita de neoplasia (via rápida)"
    ]
  },
  prescricao: {
    ambulatorial: "DISPEPSIA SEM SINAIS DE ALARME\nUSO ORAL\n1. Omeprazol 20 mg ------------------------------------------- 56 cápsulas\n   Tomar 1 cápsula em jejum, 30 minutos antes do café da manhã, por 8 semanas.\n2. Hidróxido de alumínio + hidróxido de magnésio (suspensão) --- 1 frasco\n   Tomar 10 mL após as refeições e ao deitar se queimação, por até 2 semanas. Não tomar junto com outros remédios.\n\nSE PLENITUDE / SACIEDADE PRECOCE PREDOMINANTE\n3. Domperidona 10 mg ----------------------------------------- 21 comprimidos\n   Tomar 1 comprimido 15 a 30 minutos antes do café, do almoço e do jantar, por até 7 dias. Não passar de 3 comprimidos por dia.\n\nDISPEPSIA FUNCIONAL REFRATÁRIA (EDA NORMAL)\n4. Amitriptilina 25 mg ------------------------------------------ 30 comprimidos\n   Tomar meio comprimido (12,5 mg) à noite por 2 semanas; depois 1 comprimido à noite. Uso por pelo menos 3 meses. (Iniciar com 10 mg se disponível.)\n\nEXAMES\n- Pesquisa de antígeno de H. pylori nas fezes (suspender omeprazol 2 semanas antes) OU EDA com biópsias se alarme/idade."
  },
  orientacoesRetorno: [
    "Faça refeições menores e mais vezes ao dia; evite comer muito à noite e alimentos que você percebeu que pioram (gordura, frituras, álcool, café em excesso)",
    "Pare de fumar e evite anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida) e AAS sem indicação",
    "O omeprazol funciona melhor em jejum, 30 minutos antes do café; não use por meses sem reavaliação",
    "Dispepsia funcional é real e comum, não é câncer; estresse e ansiedade pioram e podem ser tratados",
    "Procure atendimento imediato se vomitar sangue ou \"borra de café\", tiver fezes pretas, dor forte de repente, desmaio ou dor no peito",
    "Volte antes se perder peso sem querer, tiver dificuldade para engolir ou vômitos repetidos",
    "Retorno em 4–8 semanas para avaliar resposta e resultado de exames"
  ],
  tabelas: [
    {
      titulo: "Quando pedir endoscopia na dispepsia",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Qualquer sinal de alarme", "EDA com biópsias (prioridade conforme gravidade)"],
        ["Sintomas novos a partir de 40 anos (Brasil)", "EDA inicial"],
        ["< 40 anos, sem alarme", "Testar e tratar H. pylori; ou IBP 4–8 semanas"],
        ["Falha do testar e tratar + IBP", "EDA"],
        ["Parente de 1º grau com câncer gástrico", "EDA e pesquisa de H. pylori"]
      ],
      nota: "Corte de 40 anos adotado aqui por ser conservador em país de alta incidência de câncer gástrico. O corte não foi confirmado no texto do V Consenso Brasileiro (2026): um resumo secundário cita testar e tratar em dispepsia não investigada até 45 anos sem alarme. ACG/CAG (2017) usa 60 anos em países de baixa incidência. Em região de alta incidência ou com história familiar, preferir EDA mais cedo."
    }
  ],
  fontes: [
    "Federação Brasileira de Gastroenterologia — V Consenso Brasileiro sobre Infecção por Helicobacter pylori (Arq Gastroenterol, 2026)",
    "ACG/CAG — Clinical Guideline: Management of Dyspepsia (Am J Gastroenterol, 2017)",
    "BSG — Guidelines on the management of functional dyspepsia (Gut, 2022)",
    "Roma IV — Gastroduodenal disorders (Gastroenterology, 2016)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II: Queixas comuns no adulto (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
