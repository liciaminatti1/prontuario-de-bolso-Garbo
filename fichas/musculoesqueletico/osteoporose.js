// Osteoporose
registrarFicha({
  id: "osteoporose",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Osteoporose: rastreamento, FRAX e tratamento",
  resumo: "Doença óssea com baixa massa e fragilidade, silenciosa até a fratura. Rastrear com densitometria em mulheres ≥ 65 anos, homens ≥ 70 anos e adultos com fatores de risco; estimar risco com FRAX Brasil; tratar com bifosfonato, cálcio, vitamina D, exercício e prevenção de quedas.",
  palavrasChave: "osteoporose osteopenia densitometria dxa t-score frax fratura fragilidade vertebral quadril colo femur alendronato risedronato zoledronico raloxifeno teriparatida romosozumabe denosumabe calcio vitamina d colecalciferol quedas menopausa",
  critico: {
    tempo: "Fratura por fragilidade = tratar",
    texto: "Fratura de quadril ou vertebral por queda da própria altura já define osteoporose e indica tratamento, mesmo sem densitometria ou com T-escore acima de −2,5."
  },
  alarmes: [
    "Dor lombar ou dorsal súbita após esforço mínimo, perda de altura > 4 cm ou cifose nova (fratura vertebral)",
    "Fratura com trauma mínimo em pessoa jovem ou homem sem fator de risco (osteoporose secundária: investigar)",
    "Hipercalcemia, anemia, proteinúria ou insuficiência renal (mieloma, hiperparatireoidismo)",
    "Dor na coxa ou virilha em uso prolongado de bifosfonato (fratura atípica de fêmur)",
    "Exposição óssea na boca ou dor mandibular em uso de bifosfonato (osteonecrose de mandíbula)"
  ],
  condutaInicial: [
    "Identificar fatores de risco: idade, fratura prévia, fratura de quadril nos pais, baixo peso (IMC < 20), tabagismo, álcool ≥ 3 doses/dia, corticoide (≥ 5 mg/dia de prednisona por ≥ 3 meses), artrite reumatoide, menopausa precoce, hipogonadismo, quedas",
    "Pedir densitometria (DXA de coluna lombar e fêmur) para quem tem indicação",
    "Calcular o FRAX Brasil (site da ABRASSO), com ou sem densitometria",
    "Pedir exames para causas secundárias antes de tratar",
    "Tratar: T-escore ≤ −2,5, fratura por fragilidade, ou risco alto pelo FRAX Brasil acima do limiar de intervenção para a idade",
    "Para todos: cálcio da dieta, vitamina D, exercício de fortalecimento e equilíbrio, prevenção de quedas, parar tabagismo e reduzir álcool"
  ],
  fataisExcluir: [
    "Mieloma múltiplo ou metástase óssea (fratura patológica)",
    "Hiperparatireoidismo primário",
    "Fratura de quadril não reconhecida (dor na virilha após queda, incapacidade de apoiar)",
    "Hipocalcemia antes de iniciar bifosfonato (corrigir vitamina D e cálcio)"
  ],
  proximaDecisao: "Sem contraindicação → alendronato 70 mg/semana + vitamina D (e cálcio se dieta insuficiente). Intolerância gastrointestinal ou impossibilidade de tomar corretamente → ácido zoledrônico IV anual (PCDT). Fratura nova em tratamento, T-escore ≤ −3,0 com fratura ou risco muito alto → reumatologia/endocrinologia para avaliar teriparatida ou romosozumabe (critérios do PCDT).",
  clinica: {
    anamnese: [
      "Idade, idade da menopausa, amenorreia prolongada, hipogonadismo no homem",
      "Fraturas prévias (punho, vertebral, quadril, úmero) e o mecanismo (queda da própria altura = fragilidade)",
      "Quedas no último ano, uso de sedativos, tontura, visão ruim",
      "Medicações: corticoide, anticonvulsivante, inibidor de aromatase, privação androgênica, IBP prolongado, heparina, levotiroxina em excesso",
      "Doenças: artrite reumatoide, DPOC, doença celíaca, DII, bariátrica, DRC, hepatopatia, hipertireoidismo, DM1",
      "Dieta (leite e derivados), sol, atividade física, tabagismo, álcool",
      "Saúde bucal (antes de bifosfonato: tratar focos dentários)"
    ],
    exameFisico: [
      "Altura medida a cada consulta (perda > 4 cm sugere fratura vertebral)",
      "Peso e IMC",
      "Cifose torácica, dor à percussão das vértebras",
      "Distância costela-pelve (< 2 dedos sugere fratura vertebral)",
      "Teste de levantar e andar (Timed Up and Go), equilíbrio, força"
    ],
    diferenciais: [
      { dx: "Osteomalácia", pista: "Fosfatase alcalina alta, cálcio e fósforo baixos, vitamina D muito baixa, dor óssea" },
      { dx: "Mieloma múltiplo", pista: "Anemia, hipercalcemia, proteína monoclonal, insuficiência renal" },
      { dx: "Hiperparatireoidismo primário", pista: "Cálcio alto com PTH normal-alto ou alto" },
      { dx: "Metástase óssea", pista: "Neoplasia conhecida, dor noturna, perda de peso" },
      { dx: "Osteoporose induzida por corticoide", pista: "Uso crônico; tratar com limiar mais baixo" }
    ],
    gravidade: [
      "Diagnóstico (OMS, pós-menopausa e homem ≥ 50 anos): T-escore ≤ −2,5 em coluna lombar, colo do fêmur ou fêmur total",
      "Osteopenia (baixa massa): T-escore entre −1,0 e −2,5; tratar se FRAX alto ou fratura",
      "Osteoporose estabelecida/grave: T-escore ≤ −2,5 com fratura por fragilidade",
      "Pré-menopausa e homem < 50 anos: usar Z-escore (≤ −2,0 = abaixo do esperado para a idade); não diagnosticar osteoporose só pela DXA",
      "Risco muito alto: fratura recente (≤ 2 anos), fraturas múltiplas, fratura em tratamento, T-escore ≤ −3,0, FRAX muito acima do limiar"
    ]
  },
  exames: [
    {
      nome: "Densitometria óssea (DXA)",
      pedido: "Densitometria óssea de coluna lombar e fêmur proximal (colo e fêmur total). HD: rastreamento de osteoporose / fratura por fragilidade.",
      porQue: "Diagnóstico e base para seguimento.",
      esperar: "Indicada: mulher ≥ 65 anos, homem ≥ 70 anos, pós-menopausa ou homem 50–69 anos com fator de risco, fratura por fragilidade, corticoide prolongado, doenças ou drogas que causem perda óssea.",
      interpretacao: "T-escore ≤ −2,5 = osteoporose. Repetir a cada 1–2 anos em tratamento ou 2–5 anos se normal, conforme risco.",
      limitacoes: "Osteófitos, escoliose e fraturas falsamente elevam a densidade da coluna; usar o fêmur."
    },
    {
      nome: "Exames para causas secundárias",
      pedido: "Cálcio total e albumina (ou cálcio iônico), fósforo, fosfatase alcalina, creatinina, 25-OH-vitamina D, TSH, hemograma, eletroforese de proteínas séricas (se fratura vertebral ou anemia), PTH se cálcio alterado. Homem: testosterona total.",
      porQue: "Excluir causas tratáveis e contraindicações (hipocalcemia, DRC) antes de iniciar bifosfonato.",
      esperar: "Normais na osteoporose primária.",
      interpretacao: "Vitamina D < 20 ng/mL: repor antes de bifosfonato. Cálcio alto: hiperparatireoidismo ou mieloma.",
      limitacoes: "Alvo de vitamina D para pessoas com osteoporose: ≥ 30 ng/mL (SBPC/ML–SBEM)."
    },
    {
      nome: "Radiografia de coluna torácica e lombar",
      pedido: "Radiografia de coluna torácica e lombar em perfil. HD: suspeita de fratura vertebral.",
      porQue: "Fratura vertebral é frequentemente assintomática e muda a classificação de risco.",
      esperar: "Perda de altura de corpo vertebral ≥ 20–25%.",
      interpretacao: "Fratura vertebral por fragilidade = osteoporose e indicação de tratamento.",
      limitacoes: "Pedir se perda de altura, cifose nova, dor dorsal ou corticoide prolongado."
    },
    {
      nome: "FRAX Brasil",
      pedido: "Calcular em abrasso.org.br/frax-brasil (versão 2.0, 2024), com ou sem densidade do colo do fêmur.",
      porQue: "Estimar a probabilidade de fratura maior e de quadril em 10 anos e comparar com o limiar de intervenção por idade.",
      esperar: "O site mostra se o risco está acima do limiar de intervenção, do limiar de avaliação (pedir DXA) ou abaixo.",
      interpretacao: "Acima do limiar de intervenção → tratar. Duas vezes acima → risco muito alto (consenso SBEM/ABRASSO).",
      limitacoes: "Os limiares do FRAX Brasil variam com a idade; usar a ferramenta, não um número fixo. Não usar em quem já está em tratamento para decidir iniciar."
    }
  ],
  tratamento: [
    {
      droga: "Alendronato de sódio",
      linha: "l1",
      dose: "70 mg",
      via: "VO",
      intervalo: "1 vez por semana, em jejum",
      duracao: "5 anos; depois reavaliar (pausa se risco não alto; manter até 10 anos se risco alto)",
      monitorizacao: "Adesão, sintomas esofágicos, DXA em 1–2 anos",
      contraindicacoes: "ClCr < 35 mL/min, doença do esôfago (acalasia, estenose), incapacidade de ficar sentado/em pé 30 min, hipocalcemia não corrigida, gestação",
      ajustes: "Tomar com 1 copo cheio (200 mL) de água pura, em jejum, e ficar em pé ou sentado e sem comer por 30 minutos. RENAME / PCDT 2023"
    },
    {
      droga: "Risedronato de sódio",
      linha: "alt",
      dose: "35 mg",
      via: "VO",
      intervalo: "1 vez por semana, em jejum",
      duracao: "5 anos, depois reavaliar",
      monitorizacao: "Como o alendronato",
      contraindicacoes: "ClCr < 30, doença esofágica, hipocalcemia",
      ajustes: "Mesmas orientações de tomada do alendronato"
    },
    {
      droga: "Ácido zoledrônico",
      linha: "alt",
      dose: "5 mg (frasco de 5 mg/100 mL)",
      via: "IV",
      intervalo: "1 vez por ano",
      duracao: "3 anos; depois reavaliar (até 6 anos se risco alto)",
      monitorizacao: "Creatinina antes de cada dose, cálcio, vitamina D",
      contraindicacoes: "ClCr < 35, hipocalcemia, gestação",
      ajustes: "Infundir em no mínimo 15 minutos, com hidratação prévia (500 mL de água VO). Paracetamol pode reduzir a reação de fase aguda (febre, mialgia nos 3 primeiros dias). Opção do PCDT para intolerância ou impossibilidade de bifosfonato oral"
    },
    {
      droga: "Raloxifeno",
      linha: "alt",
      dose: "60 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Conforme reavaliação",
      monitorizacao: "Sintomas de TEV, fogachos",
      contraindicacoes: "TEV prévio, AVC, pré-menopausa",
      ajustes: "Reduz fratura vertebral, não de quadril; opção quando bifosfonato contraindicado e risco de câncer de mama alto"
    },
    {
      droga: "Colecalciferol (vitamina D3)",
      linha: "adj",
      dose: "Manutenção: 1.000–2.000 UI/dia (ou 7.000–14.000 UI/semana). Deficiência (< 20 ng/mL): 50.000 UI/semana por 8 semanas e depois manutenção",
      via: "VO",
      intervalo: "Diário ou semanal",
      duracao: "Contínuo",
      monitorizacao: "25-OH-vitamina D após 3 meses; cálcio",
      contraindicacoes: "Hipercalcemia, sarcoidose ativa (cautela)",
      ajustes: "Obesos e má absorção podem precisar de doses maiores. Meta ≥ 30 ng/mL em osteoporose"
    },
    {
      droga: "Carbonato de cálcio",
      linha: "adj",
      dose: "500–1.000 mg de cálcio elementar/dia, só para completar a dieta até 1.000–1.200 mg/dia",
      via: "VO",
      intervalo: "Com as refeições, dividido (no máximo 500 mg por tomada)",
      duracao: "Contínuo",
      monitorizacao: "Constipação, cálculo renal",
      contraindicacoes: "Hipercalcemia, litíase renal por cálcio (preferir citrato e avaliar)",
      ajustes: "Carbonato de cálcio 1.250 mg = 500 mg de cálcio elementar. Separar 4 h de levotiroxina e de ferro; nunca junto com o alendronato. Preferir cálcio da dieta (1 copo de leite ≈ 300 mg)"
    },
    {
      droga: "Teriparatida / romosozumabe (anabólicos)",
      linha: "adj",
      dose: "Teriparatida 20 mcg SC 1×/dia (até 24 meses); romosozumabe 210 mg SC 1×/mês por 12 meses",
      via: "SC",
      intervalo: "Conforme droga",
      duracao: "Seguir com antirreabsortivo após",
      monitorizacao: "Especialista",
      contraindicacoes: "Teriparatida: doença de Paget, radioterapia óssea, hipercalcemia. Romosozumabe: IAM ou AVC no último ano",
      ajustes: "Critérios restritos do PCDT 2023 (falha a outros tratamentos e risco muito alto; romosozumabe só em mulheres pós-menopausa > 70 anos). Prescrição pelo especialista; a dispensação pelo CEAF varia por estado. Denosumabe não foi incorporado ao SUS (CONITEC, Portaria SCTIE/MS nº 62/2022). A CONITEC aprovou novo PCDT ainda não publicado em 2025: conferir a versão vigente"
    }
  ],
  destino: {
    agora: [
      "Iniciar tratamento na UBS (bifosfonato oral, vitamina D, cálcio se necessário)",
      "Programa de exercícios e prevenção de quedas"
    ],
    reavaliar: [
      "Adesão e efeitos adversos em 3 meses",
      "DXA em 1–2 anos após início",
      "Após 5 anos de alendronato (3 de zoledrônico): decidir pausa ou continuidade"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Fratura de quadril (cirurgia em até 48 h) — via PS"
    ],
    transferencia: [
      "Reumatologia ou endocrinologia: fratura em tratamento, risco muito alto, intolerância a bifosfonato oral e IV, osteoporose em homem jovem ou pré-menopausa, causa secundária complexa, ClCr < 35",
      "Ortopedia: fratura vertebral com dor refratária ou déficit neurológico"
    ]
  },
  prescricao: {
    ambulatorial: "OSTEOPOROSE — TRATAMENTO INICIAL\nUSO ORAL\n1. Alendronato de sódio 70 mg ---------------------- 4 comprimidos/mês (uso contínuo)\n   Tomar 1 comprimido 1 vez por semana, sempre no mesmo dia, em jejum, com 1 copo cheio de água pura. Ficar sentado ou em pé e sem comer, beber ou tomar outros remédios por 30 minutos.\n2. Colecalciferol (vitamina D3) 1.000 UI ---------- 60 cápsulas\n   Tomar 1 a 2 cápsulas (1.000 a 2.000 UI) 1 vez ao dia, com a refeição principal. Uso contínuo.\n   (Se 25-OH-vitamina D < 20 ng/mL: Colecalciferol 50.000 UI — 1 cápsula por semana por 8 semanas; depois a dose acima.)\n3. Carbonato de cálcio 1.250 mg (500 mg de cálcio) -- 30 comprimidos\n   Tomar 1 comprimido após o almoço, se a dieta tiver menos de 3 porções de leite e derivados por dia. Não tomar junto com o alendronato.\n\nSE NÃO PUDER USAR BIFOSFONATO ORAL (PCDT — Componente Especializado)\nÁcido zoledrônico 5 mg/100 mL — infundir IV em no mínimo 15 minutos, 1 vez por ano. Hidratar antes (2 copos de água). Paracetamol 750 mg de 6/6 h por até 3 dias se febre ou dor no corpo.\n\nANTES DE INICIAR: cálcio, creatinina, 25-OH-vitamina D; avaliação odontológica se possível.\n\nPEDIDO DE EXAMES\nDensitometria óssea de coluna lombar e fêmur proximal. Cálcio, albumina, fósforo, fosfatase alcalina, creatinina, 25-OH-vitamina D, TSH, hemograma. Radiografia de coluna torácica e lombar em perfil se perda de altura ou dor dorsal."
  },
  orientacoesRetorno: [
    "O alendronato só funciona e só é seguro se tomado do jeito certo: em jejum, com água pura, e sem deitar por 30 minutos",
    "Faça exercícios com carga e de equilíbrio (caminhada, musculação leve, tai chi), se possível com orientação",
    "Previna quedas: tapetes fixos ou retirados, luz à noite, barras no banheiro, calçado firme, revisar remédios que dão sono",
    "Coma leite, iogurte e queijo todos os dias; tome sol 15 minutos em braços e pernas, fora dos horários de pico",
    "Pare de fumar e reduza a bebida alcoólica",
    "Volte antes se: dor nas costas forte de repente, dor na coxa ou virilha que não passa, dor ou ferida na gengiva/mandíbula, dor ao engolir",
    "Retorno em 3 meses e densitometria em 1–2 anos"
  ],
  tabelas: [
    {
      titulo: "Interpretação da densitometria (OMS)",
      colunas: ["T-escore", "Classificação", "Conduta"],
      linhas: [
        ["≥ −1,0", "Normal", "Medidas gerais; repetir conforme risco"],
        ["−1,0 a −2,5", "Baixa massa óssea (osteopenia)", "Tratar se FRAX acima do limiar ou fratura"],
        ["≤ −2,5", "Osteoporose", "Tratar"],
        ["≤ −2,5 + fratura", "Osteoporose estabelecida", "Tratar; avaliar risco muito alto"]
      ],
      nota: "Fratura vertebral ou de quadril por fragilidade = osteoporose independentemente do T-escore."
    }
  ],
  fontes: [
    "Ministério da Saúde/CONITEC — PCDT Osteoporose (Portaria Conjunta SAES/SECTICS nº 19, de 28/09/2023)",
    "ABRASSO — FRAX Brasil 2.0 (2024)",
    "SBEM/ABRASSO — Consenso sobre risco muito alto de fratura em mulheres na pós-menopausa (2023)",
    "FEBRASGO — Osteoporose na pós-menopausa (protocolo, versão vigente)",
    "SBPC/ML–SBEM — Intervalos de referência da vitamina D (25-OH-D) (2017, atualização 2020)",
    "SBEM — Recomendações para o diagnóstico e tratamento da hipovitaminose D (Arq Bras Endocrinol Metab, 2014)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
