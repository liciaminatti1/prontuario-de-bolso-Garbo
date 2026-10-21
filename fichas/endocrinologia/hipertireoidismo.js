// Hipertireoidismo e tireotoxicose
registrarFicha({
  id: "hipertireoidismo",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Hipertireoidismo e tireotoxicose",
  resumo: "Excesso de hormônio tireoidiano: palpitação, tremor, perda de peso, intolerância ao calor, ansiedade, diarreia. TSH suprimido com T4 livre e/ou T3 altos. Definir a causa (Graves, bócio nodular tóxico, tireoidite, excesso de levotiroxina), controlar sintomas com betabloqueador e tratar com metimazol quando houver hiperprodução.",
  palavrasChave: "hipertireoidismo tireotoxicose doenca de graves basedow bocio toxico nodulo toxico plummer tireoidite subaguda pos-parto tsh suprimido t4 livre trab metimazol tiamazol propiltiouracil ptu propranolol tempestade tireoidiana exoftalmia orbitopatia iodo radioativo",
  critico: {
    tempo: "Febre ou dor de garganta: hemograma",
    texto: "Em uso de metimazol ou PTU, febre ou dor de garganta exigem suspender a droga e fazer hemograma no mesmo dia (agranulocitose). Febre alta, confusão, taquiarritmia ou IC com tireotoxicose = tempestade tireoidiana: PS."
  },
  alarmes: [
    "Febre, agitação ou confusão, taquicardia muito alta, FA rápida, IC, vômitos ou diarreia intensos, icterícia (tempestade tireoidiana)",
    "Febre ou dor de garganta em uso de antitireoidiano (agranulocitose)",
    "Icterícia, colúria, dor abdominal em uso de PTU ou metimazol (hepatotoxicidade)",
    "Dor ocular, baixa visual, visão dupla, proptose progressiva (orbitopatia de Graves moderada a grave)",
    "Fibrilação atrial nova (anticoagulação conforme CHA₂DS₂-VA)",
    "Gestante com tireotoxicose"
  ],
  condutaInicial: [
    "Confirmar: TSH baixo + T4 livre (e T3 total se T4 livre normal)",
    "Excluir uso de levotiroxina em excesso, amiodarona, contraste iodado recente, gestação (hCG no 1º trimestre)",
    "Definir a causa: exame da tireoide (bócio difuso, nódulo, dor), orbitopatia; TRAb; cintilografia com captação se dúvida",
    "Sintomático: propranolol (ou atenolol) para FC e tremor, salvo contraindicação",
    "Graves ou nódulo/bócio tóxico: metimazol com dose conforme o T4 livre; hemograma e TGO/TGP antes de iniciar",
    "Tireoidite (captação baixa, dor ou pós-parto): só betabloqueador e AINE/corticoide se dor; não usar antitireoidiano",
    "Orientar sinais de agranulocitose por escrito; parar de fumar (piora orbitopatia)"
  ],
  fataisExcluir: [
    "Tempestade tireoidiana",
    "Fibrilação atrial com resposta rápida, IC de alto débito, isquemia",
    "Agranulocitose por antitireoidiano",
    "Paralisia periódica hipocalêmica tireotóxica (fraqueza súbita, K baixo)",
    "Orbitopatia com neuropatia óptica compressiva"
  ],
  proximaDecisao: "Reavaliar T4 livre e T3 em 4–6 semanas: reduzir metimazol à medida que normalizar (TSH pode ficar suprimido por meses). Graves: manter 12–18 meses e tentar suspender se TRAb negativo; recidiva, bócio grande, orbitopatia ou nódulo tóxico → endocrinologia para iodo radioativo ou cirurgia.",
  clinica: {
    anamnese: [
      "Palpitação, tremor, perda de peso com apetite preservado, calor excessivo, sudorese, insônia, ansiedade, irritabilidade",
      "Diarreia ou aumento do número de evacuações, fraqueza proximal, irregularidade menstrual",
      "Dor cervical anterior com febre após quadro viral (tireoidite subaguda); parto nos últimos 12 meses (tireoidite pós-parto)",
      "Sintomas oculares: areia nos olhos, lacrimejamento, dor, visão dupla",
      "Uso de levotiroxina, amiodarona, lítio, iodo (contraste, suplementos, 'emagrecedores' com hormônio)",
      "Gestação ou desejo de engravidar (muda a droga)",
      "Idosos: pode haver só FA, perda de peso, apatia (tireotoxicose apática)"
    ],
    exameFisico: [
      "FC, ritmo (FA), PA (pressão de pulso alargada), peso",
      "Tremor fino, pele quente e úmida, hiper-reflexia, fraqueza proximal",
      "Tireoide: bócio difuso (Graves), nódulo único (adenoma tóxico), multinodular, dor à palpação (subaguda)",
      "Olhos: retração palpebral, proptose, edema periorbital, hiperemia conjuntival, motilidade, acuidade visual",
      "Mixedema pré-tibial (Graves)",
      "Sinais de IC"
    ],
    diferenciais: [
      { dx: "Doença de Graves", pista: "Bócio difuso, orbitopatia, TRAb positivo, captação alta e difusa" },
      { dx: "Bócio multinodular tóxico / adenoma tóxico", pista: "Idoso, nódulo(s) palpáveis, captação focal" },
      { dx: "Tireoidite subaguda (De Quervain)", pista: "Dor cervical, febre, VHS alta, captação baixa; evolui com hipotireoidismo transitório" },
      { dx: "Tireoidite pós-parto ou silenciosa", pista: "Indolor, até 12 meses pós-parto, captação baixa" },
      { dx: "Tireotoxicose factícia / excesso de levotiroxina", pista: "Tireoglobulina baixa, sem bócio, captação baixa" },
      { dx: "Induzida por amiodarona ou iodo", pista: "Uso recente; encaminhar" },
      { dx: "Hipertireoidismo gestacional transitório (hCG)", pista: "1º trimestre, hiperêmese, TRAb negativo" },
      { dx: "Ansiedade, feocromocitoma", pista: "TSH normal" }
    ],
    gravidade: [
      "Subclínico: TSH baixo com T4 livre e T3 normais. TSH < 0,1: tratar se ≥ 65 anos, cardiopatia, osteoporose, pós-menopausa ou sintomas; TSH 0,1–0,4: considerar nesses grupos",
      "Clínico leve: T4 livre até 1,5× o limite superior",
      "Moderado a grave: T4 livre ≥ 2× o limite superior, T3 muito alto, idosos ou cardiopatas",
      "Tempestade tireoidiana: escore de Burch-Wartofsky ≥ 45 sugere fortemente (25–44 = iminente)"
    ]
  },
  exames: [
    {
      nome: "Função tireoidiana",
      pedido: "TSH, T4 livre, T3 total (ou T3 livre).",
      porQue: "Confirmar e graduar a tireotoxicose.",
      esperar: "TSH suprimido; T4 livre e/ou T3 elevados.",
      interpretacao: "T3 alto com T4 livre normal = T3-toxicose (comum em nódulo tóxico e Graves inicial). TSH normal ou alto com T4 livre alto: interferência laboratorial, tumor produtor de TSH ou resistência (endocrinologia).",
      limitacoes: "Biotina em dose alta interfere nos ensaios (suspender 2 dias antes). Na gestação usar valores por trimestre."
    },
    {
      nome: "TRAb (anticorpo antirreceptor de TSH)",
      pedido: "Anticorpo antirreceptor de TSH (TRAb).",
      porQue: "Confirmar Graves sem cintilografia; prever recidiva ao suspender; gestação.",
      esperar: "Positivo na maioria dos casos de Graves.",
      interpretacao: "Positivo = Graves. Negativo ao fim do tratamento = maior chance de remissão.",
      limitacoes: "Pode não estar disponível na rede; não é obrigatório se o quadro de Graves for clássico (bócio difuso + orbitopatia)."
    },
    {
      nome: "Cintilografia de tireoide com captação",
      pedido: "Cintilografia de tireoide com captação de iodo-131 (ou tecnécio) de 2 e 24 horas. HD: tireotoxicose a esclarecer.",
      porQue: "Diferenciar hiperprodução (captação alta) de tireoidite ou exógena (captação baixa); mostrar nódulos quentes.",
      esperar: "Graves: alta e difusa. Nódulo tóxico: focal com supressão do restante. Tireoidite: muito baixa.",
      interpretacao: "Captação baixa → não usar antitireoidiano.",
      limitacoes: "Contraindicada na gestação e amamentação. Contraste iodado recente reduz a captação."
    },
    {
      nome: "Exames antes do antitireoidiano",
      pedido: "Hemograma completo com contagem de neutrófilos, TGO, TGP, bilirrubinas, fosfatase alcalina. ECG se FC alta ou idoso. Beta-hCG em mulher em idade fértil.",
      porQue: "Linha de base para agranulocitose e hepatotoxicidade; arritmia; gestação muda a droga.",
      esperar: "Leucopenia leve é comum no Graves sem tratamento.",
      interpretacao: "Neutrófilos < 1.000/mm³ ou transaminases > 5× o normal: não iniciar sem discussão com especialista.",
      limitacoes: "—"
    },
    {
      nome: "Ultrassonografia de tireoide",
      pedido: "Ultrassonografia de tireoide com doppler.",
      porQue: "Nódulos palpáveis; avaliar vascularização quando cintilografia indisponível.",
      esperar: "Graves: glândula aumentada e hipervascular.",
      interpretacao: "Nódulo hipocaptante na cintilografia com critério ultrassonográfico → punção.",
      limitacoes: "Não substitui a cintilografia para definir função do nódulo."
    }
  ],
  tratamento: [
    {
      droga: "Metimazol (tiamazol)",
      linha: "l1",
      dose: "Conforme T4 livre: 1–1,5× o limite superior: 5–10 mg/dia · 1,5–2×: 10–20 mg/dia · 2–3×: 30–40 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia (doses altas podem ser divididas em 2 no início)",
      duracao: "Graves: 12–18 meses; nódulo/bócio tóxico: até tratamento definitivo",
      monitorizacao: "T4 livre e T3 em 4–6 semanas, depois a cada 2–3 meses; hemograma se febre ou dor de garganta; TGO/TGP se sintomas",
      contraindicacoes: "Agranulocitose ou hepatite prévia com antitireoidiano, 1º trimestre de gestação (preferir PTU)",
      ajustes: "Reduzir a dose em 30–50% quando T4 livre normalizar; manutenção usual 5–10 mg/dia. Prurido/urticária leve: anti-histamínico; reação grave: suspender. RENAME"
    },
    {
      droga: "Propranolol",
      linha: "l1",
      dose: "10–40 mg",
      via: "VO",
      intervalo: "De 6 em 6 a 8 em 8 horas",
      duracao: "Até controle do T4 livre (reduzir gradualmente)",
      monitorizacao: "FC alvo < 90 bpm, PA",
      contraindicacoes: "Asma, broncoespasmo, BAV de 2º/3º grau, IC descompensada",
      ajustes: "Alternativa 1×/dia: atenolol 25–100 mg/dia. Asma: diltiazem ou verapamil para controle da FC. Propranolol em dose alta também reduz conversão de T4 em T3. RENAME"
    },
    {
      droga: "Propiltiouracila (PTU)",
      linha: "alt",
      dose: "50–150 mg (dose inicial total 150–450 mg/dia)",
      via: "VO",
      intervalo: "De 8 em 8 horas",
      duracao: "1º trimestre de gestação; trocar para metimazol após",
      monitorizacao: "TGO/TGP e hemograma se sintomas; T4 livre a cada 4 semanas na gestação",
      contraindicacoes: "Hepatite prévia por PTU",
      ajustes: "Indicações: 1º trimestre de gestação, tempestade tireoidiana, reação menor ao metimazol sem opção definitiva. Risco de hepatotoxicidade grave maior que o metimazol. RENAME"
    },
    {
      droga: "Tireoidite subaguda dolorosa",
      linha: "adj",
      dose: "AINE (ibuprofeno 400–600 mg 8/8 h ou naproxeno 500 mg 12/12 h); se dor intensa ou sem resposta: prednisona 40 mg/dia por 1–2 semanas com redução gradual em 2–4 semanas",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "Até controle da dor",
      monitorizacao: "TSH e T4 livre a cada 4–6 semanas (fase de hipotireoidismo)",
      contraindicacoes: "As de AINE e corticoide",
      ajustes: "Associar propranolol se sintomas adrenérgicos. Não usar metimazol"
    },
    {
      droga: "Iodo radioativo ou tireoidectomia",
      linha: "adj",
      dose: "Definido pelo especialista",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Hipotireoidismo após o tratamento (levotiroxina)",
      contraindicacoes: "Iodo: gestação, amamentação, orbitopatia moderada a grave ativa",
      ajustes: "Indicados em nódulo/bócio tóxico, recidiva de Graves, efeito adverso grave ao antitireoidiano"
    }
  ],
  destino: {
    agora: [
      "Iniciar betabloqueador e, se hiperprodução, metimazol na UBS",
      "Tempestade tireoidiana, FA rápida, IC ou agranulocitose → PS"
    ],
    reavaliar: [
      "4–6 semanas após início ou ajuste: T4 livre, T3, sintomas",
      "Depois a cada 2–3 meses durante o tratamento"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Tempestade tireoidiana (UTI), agranulocitose febril, hepatite grave por antitireoidiano, FA com instabilidade"
    ],
    transferencia: [
      "Endocrinologia: Graves para planejar duração e tratamento definitivo, nódulo ou bócio tóxico, recidiva, gestante, induzido por amiodarona, efeito adverso ao antitireoidiano",
      "Oftalmologia: orbitopatia moderada a grave (dor, diplopia, proptose importante, baixa visual — urgente se baixa visual)",
      "Pré-natal de alto risco: gestante com hipertireoidismo"
    ]
  },
  prescricao: {
    ambulatorial: "HIPERTIREOIDISMO (GRAVES OU NÓDULO TÓXICO) — INÍCIO\nUSO ORAL\n1. Metimazol (tiamazol) 10 mg -------------------- ___ comprimidos (quantidade para 30 dias: 15 a 120)\n   Tomar ___ comprimido(s) 1 vez ao dia (T4 livre até 1,5× o normal: ½ a 1 comprimido; 1,5–2×: 1 a 2 comprimidos; 2–3×: 3 a 4 comprimidos/dia, que podem ser divididos em 2 tomadas).\n2. Propranolol 40 mg ------------------------------ 90 comprimidos\n   Tomar ½ a 1 comprimido de 8 em 8 horas enquanto houver palpitação ou tremor. (Asma: não usar; avisar o médico.)\n\nGESTANTE NO 1º TRIMESTRE (em vez do metimazol)\n1. Propiltiouracila 100 mg ----------------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas (ajustar conforme T4 livre). Encaminhar ao pré-natal de alto risco.\n\nTIREOIDITE (captação baixa) — NÃO usar metimazol\n1. Propranolol 40 mg — ½ a 1 comprimido de 8 em 8 horas se palpitação.\n2. Se dor no pescoço: Ibuprofeno 600 mg — 1 comprimido de 8 em 8 horas por 7 a 14 dias.\n\nATENÇÃO (entregar por escrito): se febre, dor de garganta ou feridas na boca, PARAR o metimazol e fazer hemograma no mesmo dia.\n\nPEDIDO DE EXAMES\nAntes de iniciar: hemograma, TGO, TGP, bilirrubinas, beta-hCG (mulher em idade fértil). Diagnóstico: TSH, T4 livre, T3 total, TRAb; cintilografia de tireoide com captação se causa incerta (não fazer em gestante). Controle: T4 livre e T3 em 4–6 semanas."
  },
  orientacoesRetorno: [
    "O remédio leva de 4 a 8 semanas para normalizar o hormônio; o propranolol alivia a palpitação e o tremor enquanto isso",
    "Se tiver febre, dor de garganta ou feridas na boca: pare o metimazol e procure a UBS ou PS no mesmo dia para fazer hemograma",
    "Pele ou olhos amarelados, urina escura ou dor na barriga: suspender e procurar atendimento",
    "Não fume: o cigarro piora a doença dos olhos; use colírio lubrificante e óculos escuros se irritação",
    "Mulheres: evitar gravidez até o controle; se engravidar, avisar logo (troca de remédio)",
    "Volte imediatamente se: coração muito acelerado ou irregular, falta de ar, febre alta com agitação ou confusão, vômitos, visão dupla ou perda de visão",
    "Retorno em 4–6 semanas com TSH, T4 livre e T3"
  ],
  fontes: [
    "American Thyroid Association — Guidelines for the Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis (Thyroid, 2016)",
    "European Thyroid Association — Guideline for the management of Graves' hyperthyroidism (2018)",
    "SBEM — Consenso brasileiro para o diagnóstico e tratamento do hipertireoidismo (Arq Bras Endocrinol Metab, 2013) e posicionamentos posteriores",
    "Ministério da Saúde — RENAME (versão vigente); Manual de Gestação de Alto Risco (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
