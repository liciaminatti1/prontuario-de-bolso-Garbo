// Climatério e menopausa
registrarFicha({
  id: "climaterio",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Climatério e menopausa: sintomas vasomotores, terapia hormonal e alternativas",
  resumo: "Menopausa: 12 meses de amenorreia após os 40–45 anos, diagnóstico clínico. Terapia hormonal é o tratamento mais eficaz dos fogachos; risco-benefício favorável quando iniciada antes dos 60 anos ou até 10 anos da menopausa, sem contraindicações. Inclui alternativas não hormonais e síndrome geniturinária.",
  palavrasChave: "climaterio menopausa perimenopausa fogacho fogachos calorao suores noturnos terapia hormonal th trh reposicao hormonal estradiol estrogenio progesterona tibolona estriol secura vaginal sindrome geniturinaria venlafaxina paroxetina gabapentina fezolinetanto osteoporose",
  critico: {
    tempo: "Sangramento pós-menopausa: investigar",
    texto: "Qualquer sangramento após 12 meses de amenorreia exige USG transvaginal e avaliação endometrial antes de iniciar hormônio. Mulher com útero que usa estrogênio sistêmico precisa sempre de progestogênio."
  },
  alarmes: [
    "Sangramento genital após a menopausa ou sangramento irregular em uso de TH após 6 meses",
    "Nódulo mamário, descarga papilar sanguinolenta, alteração na mamografia",
    "Dor torácica, dispneia súbita, edema unilateral de perna, déficit neurológico em uso de TH",
    "Fogachos antes dos 40 anos (insuficiência ovariana prematura)",
    "Depressão grave ou ideação suicida no climatério",
    "Fratura por trauma mínimo"
  ],
  condutaInicial: [
    "Diagnóstico clínico: ≥ 45 anos com sintomas e alteração menstrual — não dosar FSH",
    "Quantificar sintomas: frequência e intensidade dos fogachos, sono, humor, libido, secura vaginal, dispareunia, sintomas urinários",
    "Avaliar contraindicações à TH e risco cardiovascular, de TEV e de câncer de mama",
    "Atualizar rastreios: mamografia, colo do útero, PA, glicemia, lipídios; densitometria se indicado",
    "Sintomas moderados a graves sem contraindicação, < 60 anos ou < 10 anos de menopausa: oferecer TH (decisão compartilhada)",
    "Contraindicação ou preferência: alternativas não hormonais (ISRS/IRSN, gabapentina, fezolinetanto)",
    "Síndrome geniturinária isolada: hidratante/lubrificante e estrogênio vaginal em baixa dose",
    "Perimenopausa: manter contracepção até 12 meses de amenorreia (> 50 anos) ou 24 meses (< 50 anos)"
  ],
  fataisExcluir: [
    "Câncer de endométrio (sangramento pós-menopausa)",
    "Câncer de mama",
    "TEV/AVC associados a estrogênio oral",
    "Hipertireoidismo, feocromocitoma, carcinoide, infecção crônica (fogachos atípicos)"
  ],
  proximaDecisao: "Sem contraindicação e < 60 anos/< 10 anos de menopausa → TH na menor dose eficaz (via transdérmica se risco de TEV, obesidade, HAS, enxaqueca, hipertrigliceridemia). Com útero → estrogênio + progestogênio; sem útero → estrogênio isolado. Contraindicação → não hormonal. Reavaliar em 3 meses e depois anualmente.",
  clinica: {
    anamnese: [
      "DUM, padrão menstrual nos últimos meses, histerectomia/ooforectomia",
      "Fogachos e suores noturnos (frequência/dia, intensidade, impacto no sono e trabalho)",
      "Humor, ansiedade, insônia, memória",
      "Secura vaginal, dispareunia, disúria, urgência, ITU de repetição",
      "Antecedentes: câncer de mama ou endométrio, TEV, AVC, IAM, doença hepática, enxaqueca com aura, lúpus",
      "História familiar de câncer de mama/ovário, osteoporose, fratura de quadril",
      "Tabagismo, álcool, atividade física, uso de tamoxifeno ou outros medicamentos"
    ],
    exameFisico: [
      "PA, peso, IMC, circunferência abdominal",
      "Exame das mamas",
      "Exame ginecológico: trofismo vaginal, pH, prolapso",
      "Tireoide"
    ],
    diferenciais: [
      { dx: "Hipertireoidismo", pista: "Taquicardia, perda de peso, tremor; TSH baixo" },
      { dx: "Gravidez (perimenopausa)", pista: "Atraso menstrual com vida sexual ativa sem contracepção" },
      { dx: "Insuficiência ovariana prematura", pista: "< 40 anos; FSH > 25 UI/L — TH até ~50 anos" },
      { dx: "Efeito de medicamento", pista: "Tamoxifeno, inibidor de aromatase, análogo de GnRH, ISRS, opioide" },
      { dx: "Depressão/ansiedade primária", pista: "Sintomas de humor dominantes sem fogachos" }
    ],
    gravidade: [
      "Fogachos leves: medidas comportamentais podem bastar",
      "Moderados a graves (vários por dia, prejuízo de sono/trabalho): tratamento farmacológico",
      "Janela favorável à TH: < 60 anos ou < 10 anos da menopausa",
      "Contraindicações à TH (SOBRAC/FEBRASGO 2024): câncer de mama ou outro câncer estrogênio-dependente; câncer de endométrio; sangramento genital não esclarecido; doença hepática grave descompensada; TEV/trombofilia (estrogênio oral); doença coronariana ou AVC"
    ]
  },
  exames: [
    {
      nome: "Avaliação antes de terapia hormonal",
      pedido: "Mamografia bilateral (se não realizada no último ano/conforme rastreio). Glicemia de jejum. Colesterol total e frações, triglicerídeos. TSH (se sintomas sugestivos).",
      porQue: "Excluir câncer de mama e estratificar risco cardiovascular.",
      esperar: "—",
      interpretacao: "BI-RADS 0, 3, 4 ou 5 → completar investigação antes de TH. Hipertrigliceridemia → preferir via transdérmica.",
      limitacoes: "FSH e estradiol não são necessários para diagnóstico de menopausa acima de 45 anos."
    },
    {
      nome: "Ultrassonografia transvaginal",
      pedido: "Ultrassonografia pélvica transvaginal (espessura endometrial).",
      porQue: "Sangramento pós-menopausa ou sangramento irregular em TH.",
      esperar: "Endométrio ≤ 4 mm em pós-menopausa com sangramento: baixo risco de câncer.",
      interpretacao: "> 4 mm ou sangramento persistente → biópsia/histeroscopia (ginecologia).",
      limitacoes: "Não é exame de rotina antes da TH em mulher assintomática."
    },
    {
      nome: "Densitometria óssea",
      pedido: "Densitometria óssea de coluna lombar e fêmur.",
      porQue: "Rastreio de osteoporose.",
      esperar: "T-score > −1,0 normal.",
      interpretacao: "T-score ≤ −2,5 = osteoporose. Usar FRAX Brasil para decisão.",
      limitacoes: "Indicar a partir de 65 anos ou antes se fatores de risco (menopausa precoce, corticoide, baixo peso, fratura prévia)."
    },
    {
      nome: "Rastreios oncológicos",
      pedido: "Mamografia de rastreamento. Teste de DNA-HPV (ou citologia oncótica onde o teste não está implantado).",
      porQue: "Rotina da faixa etária.",
      esperar: "—",
      interpretacao: "MS (2025): mamografia bienal de 50 a 74 anos; de 40 a 49 anos por decisão compartilhada. FEBRASGO/SBM/CBR: anual a partir de 40 anos.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Estradiol transdérmico (gel ou adesivo)",
      linha: "l1",
      dose: "Gel: 0,5–1,5 mg/dia de estradiol · Adesivo: 25–50 mcg/24 h",
      via: "Transdérmica (gel no braço, coxa ou abdome; adesivo abaixo da cintura)",
      intervalo: "Gel 1×/dia · Adesivo trocado 2×/semana",
      duracao: "Individualizada; reavaliar anualmente (sem limite arbitrário de tempo)",
      monitorizacao: "Sintomas, sangramento, PA, mamografia",
      contraindicacoes: "Ver gravidade",
      ajustes: "Preferir em obesidade, HAS, DM, enxaqueca, hipertrigliceridemia, risco de TEV, tabagismo. Mulher com útero: associar progestogênio"
    },
    {
      droga: "Estradiol oral (estradiol ou valerato de estradiol) ou estrogênios conjugados",
      linha: "l1",
      dose: "Estradiol 1 mg/dia (0,5–2 mg) · Estrogênios conjugados 0,3–0,625 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Individualizada",
      monitorizacao: "PA, triglicerídeos",
      contraindicacoes: "TEV prévio/trombofilia, hipertrigliceridemia grave, doença hepática",
      ajustes: "Mulher com útero: associar progestogênio. Estrogênios conjugados constam da RENAME (verificar REMUME)"
    },
    {
      droga: "Progesterona micronizada (proteção endometrial)",
      linha: "l1",
      dose: "100 mg/dia contínuo ou 200 mg/dia por 12–14 dias/mês",
      via: "VO (à noite) ou vaginal",
      intervalo: "1 vez ao dia",
      duracao: "Enquanto usar estrogênio sistêmico",
      monitorizacao: "Sangramento",
      contraindicacoes: "Alergia a amendoim (algumas formulações)",
      ajustes: "Regime cíclico na perimenopausa/pós-menopausa recente; contínuo após 1 ano de amenorreia. Alternativas: didrogesterona 10 mg, AMP 2,5–5 mg contínuo, SIU-LNG"
    },
    {
      droga: "Tibolona",
      linha: "alt",
      dose: "1,25–2,5 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Individualizada",
      monitorizacao: "Sangramento, PA",
      contraindicacoes: "As da TH; câncer de mama prévio; > 60 anos com risco de AVC",
      ajustes: "Só após 12 meses de amenorreia. Não precisa de progestogênio. Melhora libido"
    },
    {
      droga: "Estriol creme vaginal 1 mg/g (síndrome geniturinária)",
      linha: "l1",
      dose: "0,5 g (0,5 mg) por aplicação",
      via: "Vaginal, à noite",
      intervalo: "Diário por 2–3 semanas; depois 2 vezes por semana",
      duracao: "Contínuo enquanto sintomas",
      monitorizacao: "Sintomas",
      contraindicacoes: "Sangramento não esclarecido; câncer de mama em uso de inibidor de aromatase (discutir com oncologia)",
      ajustes: "Absorção sistêmica mínima; não exige progestogênio. Alternativa: promestrieno 10 mg/g. Lubrificante na relação e hidratante vaginal 2–3×/semana"
    },
    {
      droga: "Venlafaxina (não hormonal)",
      linha: "alt",
      dose: "37,5 mg/dia por 1 semana, depois 75 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia (liberação prolongada)",
      duracao: "Reavaliar em 4–12 semanas",
      monitorizacao: "PA, náusea, insônia; retirar gradualmente",
      contraindicacoes: "IMAO, HAS não controlada",
      ajustes: "Pode ser usada com tamoxifeno. Alternativas: escitalopram 10–20 mg/dia, desvenlafaxina 50–100 mg/dia, paroxetina 10–20 mg/dia (evitar com tamoxifeno — inibe CYP2D6)"
    },
    {
      droga: "Gabapentina (não hormonal)",
      linha: "alt",
      dose: "300 mg à noite, aumentar até 900 mg/dia (300 mg 3×/dia)",
      via: "VO",
      intervalo: "Noite ou 8/8 h",
      duracao: "Reavaliar em 4–12 semanas",
      monitorizacao: "Sonolência, tontura",
      contraindicacoes: "—",
      ajustes: "Boa opção se fogachos noturnos e insônia. Ajustar na DRC"
    },
    {
      droga: "Fezolinetanto (antagonista do receptor NK3)",
      linha: "alt",
      dose: "45 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Individualizada",
      monitorizacao: "TGO, TGP e bilirrubinas antes e periodicamente nos primeiros meses (alerta de hepatotoxicidade)",
      contraindicacoes: "Cirrose, insuficiência renal grave, uso de inibidores do CYP1A2",
      ajustes: "Registrado na Anvisa em 2026; disponibilidade comercial ainda incerta; não disponível no SUS"
    },
    {
      droga: "Estrogênio sistêmico sem progestogênio em mulher com útero; TH com câncer de mama",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Hiperplasia e câncer de endométrio; recorrência de câncer de mama",
      ajustes: "Fitoterápicos/isoflavonas e hormônios manipulados (\"bioidênticos\" de farmácia, implantes de gestrinona) não são recomendados"
    }
  ],
  destino: {
    agora: [
      "Orientações gerais, rastreios, e início de TH ou alternativa conforme preferência e contraindicações"
    ],
    reavaliar: [
      "3 meses após iniciar (eficácia, efeitos, sangramento, PA)",
      "Depois anualmente: necessidade de manter, dose, via, mamografia"
    ],
    alta: [
      "Seguimento anual na UBS; ao suspender TH, reduzir gradualmente ou suspender — os sintomas podem voltar"
    ],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: [
      "Ginecologia: sangramento pós-menopausa/endométrio espessado, TH em situação de exceção (câncer prévio, TEV), insuficiência ovariana prematura",
      "Mastologia: alteração mamográfica BI-RADS 4/5",
      "Saúde mental: depressão moderada/grave"
    ]
  },
  prescricao: {
    ambulatorial: "TH — MULHER COM ÚTERO (exemplo, via oral)\nUSO ORAL\n1. Estradiol 1 mg ----------------------------------- 30 comprimidos\n   Tomar 1 comprimido ao dia, todos os dias.\n2. Progesterona micronizada 100 mg ------------------- 30 cápsulas\n   Tomar 1 cápsula à noite, todos os dias (pós-menopausa > 1 ano).\n   (Perimenopausa: 200 mg à noite do 1º ao 12º dia de cada mês.)\n\nTH — VIA TRANSDÉRMICA (risco de trombose, HAS, obesidade, enxaqueca)\nUSO TÓPICO\n3. Estradiol gel ------------------------------------- 1 frasco\n   Aplicar a dose correspondente a 1 mg de estradiol (conforme a apresentação) 1 vez ao dia na pele do braço ou coxa; não lavar o local por 1 hora. Associar o item 2 se tiver útero.\n\nTH — SEM ÚTERO (histerectomizada)\n4. Estradiol 1 mg (ou estrogênios conjugados 0,3–0,625 mg) - 30 comprimidos\n   Tomar 1 comprimido ao dia. Não precisa de progesterona.\n\nSÍNDROME GENITURINÁRIA (secura vaginal)\nUSO VAGINAL\n5. Estriol 1 mg/g creme vaginal ---------------------- 1 bisnaga\n   Aplicar 0,5 g (meio aplicador) dentro da vagina à noite, todos os dias por 3 semanas; depois 2 vezes por semana.\n\nNÃO HORMONAL (contraindicação ou preferência)\nUSO ORAL\n6. Venlafaxina 37,5 mg (liberação prolongada) -------- 30 cápsulas\n   Tomar 1 cápsula pela manhã por 7 dias; depois 2 cápsulas (75 mg) pela manhã. Não parar de repente.\n   OU Gabapentina 300 mg ------------------------------ 90 cápsulas\n   Tomar 1 cápsula à noite por 1 semana; depois 1 cápsula de 12 em 12 horas; depois de 8 em 8 horas, se necessário."
  },
  orientacoesRetorno: [
    "A menopausa é uma fase natural; os fogachos costumam durar alguns anos e há tratamento eficaz",
    "Ajudam: roupas leves em camadas, ambiente fresco, evitar álcool, cafeína e comida muito quente à noite, parar de fumar, atividade física, controle do peso",
    "A terapia hormonal é segura para a maioria das mulheres saudáveis com menos de 60 anos; o risco depende de idade, tempo de menopausa e doenças",
    "Procurar atendimento se: qualquer sangramento depois de 1 ano sem menstruar, nódulo na mama, dor no peito, falta de ar súbita, dor e inchaço em uma perna, fraqueza em um lado do corpo",
    "Gel vaginal ou lubrificante melhoram a secura e a dor na relação; o creme de estriol é seguro e de baixa absorção",
    "Retornar em 3 meses após iniciar o tratamento e depois uma vez por ano; manter mamografia e preventivo em dia"
  ],
  tabelas: [
    {
      titulo: "Escolha do tratamento",
      colunas: ["Situação", "Opção"],
      linhas: [
        ["Com útero, sem contraindicação", "Estrogênio + progestogênio (ou tibolona após 1 ano de amenorreia)"],
        ["Sem útero", "Estrogênio isolado"],
        ["Risco de TEV, obesidade, HAS, enxaqueca, TG alto", "Estradiol transdérmico"],
        ["Câncer de mama, TEV prévio, DAC/AVC", "Não hormonal: venlafaxina, escitalopram, gabapentina, fezolinetanto"],
        ["Só sintomas vaginais/urinários", "Estrogênio vaginal em baixa dose + hidratante/lubrificante"],
        ["Insuficiência ovariana prematura", "TH até ~50 anos (ou anticoncepcional combinado)"]
      ],
      nota: "Consenso Brasileiro de Terapêutica Hormonal da Menopausa SOBRAC/FEBRASGO (2024); The Menopause Society — Hormone therapy (2022) e Nonhormone therapy (2023)."
    }
  ],
  fontes: [
    "SOBRAC/FEBRASGO — Consenso Brasileiro de Terapêutica Hormonal da Menopausa (2024)",
    "The Menopause Society — The 2022 hormone therapy position statement",
    "The Menopause Society — The 2023 nonhormone therapy position statement",
    "The Menopause Society — The 2020 genitourinary syndrome of menopause position statement",
    "Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres (2016)",
    "Ministério da Saúde — Ampliação do rastreamento mamográfico (anúncio de setembro de 2025)",
    "Anvisa — Registro do fezolinetanto (junho de 2026); FDA — alerta de hepatotoxicidade do fezolinetanto (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
