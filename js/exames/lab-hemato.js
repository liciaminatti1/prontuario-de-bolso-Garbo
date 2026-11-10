/* Exames — lab-hemato. Formato em docs/EXAMES.md.
   Hemograma, coagulação, ferro/vitaminas, inflamatórios, gasometria, urina tipo 1 e líquor.
   Intervalos são os usuais de referência; vale SEMPRE o intervalo impresso no laudo do laboratório. */

/* ===================== HEMOGRAMA ===================== */
EXAMES_LAB.push(
  {
    id: "hemoglobina",
    nome: "Hemoglobina",
    sinonimos: ["hemoglobina", "hb", "hgb", "hemoglobina total", "taxa de hemoglobina", "dosagem de hemoglobina"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "g/dL",
    conversoes: [{ unidade: "g/L", fator: 0.1 }, { unidade: "mmol/L", fator: 1.611 }],
    ref: [
      { faixa: "adulto", sexo: "M", min: 13.5, max: 17.5 },
      { faixa: "adulto", sexo: "F", min: 12.0, max: 15.5 },
      { faixa: "adulto", gestante: true, min: 11.0, max: 15.0 },
      { faixa: "crianca", min: 11.5, max: 15.5 },
      { faixa: "rn", min: 14.0, max: 22.0 }
    ],
    critico: { min: 7.0, max: 20.0 },
    indicacoes: [
      "Suspeita de anemia (palidez, fadiga, dispneia, taquicardia) ou de sangramento",
      "Pré-natal (1º e 3º trimestres), pré-operatório de porte médio/grande",
      "Acompanhamento de doença renal crônica, quimioterapia, uso de anticoagulante",
      "Policitemia suspeita (pletora, tabagismo, DPOC, uso de testosterona)"
    ],
    preparo: "Sem jejum obrigatório (hemograma completo). Evitar coleta logo após transfusão ou hidratação vigorosa.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Hemoconcentração/desidratação", "Policitemia secundária (hipoxemia crônica, DPOC, tabagismo, altitude, apneia do sono)", "Uso de testosterona/eritropoetina", "Policitemia vera", "Tumores produtores de EPO (renal, hepático)"],
      fichas: ["diarreia-desidratacao", "dpoc", "tabagismo"]
    },
    baixo: {
      causas: ["Anemia ferropriva", "Anemia de doença crônica/inflamação", "Sangramento agudo ou crônico (digestivo, ginecológico)", "Deficiência de B12/folato", "Hemólise", "Doença renal crônica", "Infiltração medular (leucemia, mieloma)", "Hemodiluição"],
      fichas: ["anemia-investigacao", "anemia-ferropriva", "anemia-gestacao", "anemia-ferropriva-crianca", "hemorragia-digestiva-alta"]
    },
    notas: "OMS (anemia): homens < 13 g/dL; mulheres não grávidas < 12 g/dL; gestantes < 11 g/dL; crianças 6 meses–5 anos < 11 g/dL; 5–11 anos < 11,5 g/dL; 12–14 anos < 12 g/dL. RN tem Hb alta ao nascer, com queda fisiológica (nadir ~8–12 semanas, ~9–11 g/dL). No sangramento agudo a Hb inicial pode ser normal (equilíbrio leva horas). Classificar a anemia pelo VCM e pelos reticulócitos. Vale o intervalo do laudo.",
    fontes: ["OMS — Haemoglobin concentrations for the diagnosis of anaemia (2011; diretriz 2024)", "Henry's Clinical Diagnosis and Management by Laboratory Methods", "SBP — Anemia ferropriva (2021)"]
  },
  {
    id: "hematocrito",
    nome: "Hematócrito",
    sinonimos: ["hematocrito", "ht", "hct", "htc", "volume globular", "vg"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "%",
    conversoes: [{ unidade: "L/L", fator: 100 }],
    ref: [
      { faixa: "adulto", sexo: "M", min: 40, max: 52 },
      { faixa: "adulto", sexo: "F", min: 36, max: 46 },
      { faixa: "adulto", gestante: true, min: 33, max: 45 },
      { faixa: "crianca", min: 35, max: 45 },
      { faixa: "rn", min: 42, max: 65 }
    ],
    critico: { min: 20, max: 60 },
    indicacoes: ["Mesmas da hemoglobina", "Dengue: hemoconcentração (aumento ≥ 10–20% do basal) é sinal de alarme", "Suspeita de policitemia neonatal (Ht venoso > 65%)"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Desidratação/hemoconcentração (dengue com extravasamento plasmático, queimados)", "Policitemia secundária ou vera", "Policitemia neonatal (clampeamento tardio, filho de mãe diabética, RCF)"],
      fichas: ["dengue", "diarreia-desidratacao", "queimaduras", "dpoc"]
    },
    baixo: {
      causas: ["Anemias (ver hemoglobina)", "Hemorragia", "Hemodiluição", "Gestação (hemodiluição fisiológica)"],
      fichas: ["anemia-investigacao", "choque-hemorragico", "anemia-gestacao"]
    },
    notas: "Ht ≈ 3 × Hb. Na dengue, comparar com Ht basal do paciente (ou de referência por idade/sexo). OMS: Ht < 33% na gestação indica anemia. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Ministério da Saúde — Dengue: diagnóstico e manejo clínico (2024)"]
  },
  {
    id: "vcm",
    nome: "VCM (volume corpuscular médio)",
    sinonimos: ["vcm", "volume corpuscular medio", "volume globular medio", "mcv"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "fL",
    conversoes: [{ unidade: "µ³", fator: 1 }, { unidade: "um3", fator: 1 }],
    ref: [
      { faixa: "adulto", min: 80, max: 100 },
      { faixa: "crianca", min: 70, max: 95 },
      { faixa: "rn", min: 95, max: 121 }
    ],
    indicacoes: ["Classificação morfológica de anemia (micro, normo, macrocítica)", "Rastreio de traço talassêmico (microcitose sem anemia importante)", "Suspeita de uso abusivo de álcool (macrocitose)"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Deficiência de B12 ou folato (megaloblástica)", "Álcool", "Hepatopatia", "Hipotireoidismo", "Reticulocitose (hemólise, sangramento recente)", "Mielodisplasia", "Fármacos: metotrexato, hidroxiureia, zidovudina, anticonvulsivantes"],
      fichas: ["anemia-megaloblastica", "uso-alcool", "hipotireoidismo", "anemias-hemoliticas"]
    },
    baixo: {
      causas: ["Deficiência de ferro", "Talassemias (traço alfa/beta)", "Anemia de doença crônica (às vezes)", "Anemia sideroblástica", "Intoxicação por chumbo"],
      fichas: ["anemia-ferropriva", "anemia-ferropriva-crianca", "talassemias", "anemia-investigacao"]
    },
    notas: "Na criança o limite inferior sobe com a idade (regra prática: ~70 + idade em anos, até 80 fL). Índice de Mentzer (VCM/hemácias em milhões) < 13 sugere talassemia; > 13 sugere ferropenia. Deficiências mistas (ferro + B12) podem dar VCM normal com RDW alto. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Nelson Textbook of Pediatrics — valores hematológicos por idade"]
  },
  {
    id: "hcm",
    nome: "HCM (hemoglobina corpuscular média)",
    sinonimos: ["hcm", "hemoglobina corpuscular media", "hemoglobina globular media", "mch"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "pg",
    ref: [{ faixa: "adulto", min: 27, max: 33 }],
    indicacoes: ["Classificação de anemia (hipocrômica × normocrômica)"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: { causas: ["Macrocitose (acompanha VCM alto)", "Esferocitose (CHCM alto)", "Interferência: lipemia, hemólise in vitro"], fichas: ["anemia-megaloblastica"] },
    baixo: { causas: ["Ferropenia", "Talassemias", "Anemia de doença crônica"], fichas: ["anemia-ferropriva", "talassemias"] },
    notas: "Acompanha o VCM; analisar em conjunto. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "chcm",
    nome: "CHCM (concentração de hemoglobina corpuscular média)",
    sinonimos: ["chcm", "concentracao de hemoglobina corpuscular media", "concentracao hemoglobinica corpuscular media", "mchc"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "g/dL",
    conversoes: [{ unidade: "%", fator: 1 }, { unidade: "g/L", fator: 0.1 }],
    ref: [{ faixa: "adulto", min: 32, max: 36 }],
    indicacoes: ["Classificação de anemia; suspeita de esferocitose"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: { causas: ["Esferocitose hereditária", "Anemia hemolítica autoimune (esferócitos)", "Artefato: aglutininas frias, lipemia, hemólise in vitro"], fichas: ["anemias-hemoliticas"] },
    baixo: { causas: ["Ferropenia", "Talassemias"], fichas: ["anemia-ferropriva", "talassemias"] },
    notas: "CHCM > 36–37 g/dL sem esferocitose no esfregaço sugere artefato (aglutinina fria, lipemia): pedir revisão de lâmina. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "rdw",
    nome: "RDW (amplitude de distribuição dos eritrócitos)",
    sinonimos: ["rdw", "rdw-cv", "rdw cv", "amplitude de distribuicao dos eritrocitos", "indice de anisocitose", "red cell distribution width"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "%",
    ref: [{ faixa: "todas", min: 11.5, max: 14.5 }],
    indicacoes: ["Diferenciar ferropenia (RDW alto) de traço talassêmico (RDW geralmente normal)", "Suspeita de deficiência mista"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Ferropenia (precoce)", "Deficiência de B12/folato", "Deficiência mista", "Pós-transfusão", "Reticulocitose (hemólise, resposta ao tratamento)", "Mielodisplasia"],
      fichas: ["anemia-ferropriva", "anemia-megaloblastica", "anemia-investigacao"]
    },
    notas: "Refere-se ao RDW-CV. O RDW-SD (em fL) tem outro intervalo. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "leucocitos",
    nome: "Leucócitos (global)",
    sinonimos: ["leucocitos", "leucocitos totais", "global de leucocitos", "contagem de leucocitos", "contagem global de leucocitos", "leucometria", "globulos brancos", "wbc", "leuco"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [
      { unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 },
      { unidade: "x10³/µL", fator: 1000 }, { unidade: "x10^3/uL", fator: 1000 }, { unidade: "mil/mm³", fator: 1000 },
      { unidade: "x10⁹/L", fator: 1000 }, { unidade: "x10^9/L", fator: 1000 }
    ],
    ref: [
      { faixa: "adulto", min: 4000, max: 11000 },
      { faixa: "crianca", min: 5000, max: 15000 },
      { faixa: "rn", min: 9000, max: 30000 }
    ],
    critico: { min: 2000, max: 30000 },
    indicacoes: ["Suspeita de infecção/sepse, febre sem foco", "Neutropenia em quimioterapia", "Suspeita de leucemia/linfoma", "Monitorização de fármacos mielotóxicos (metotrexato, clozapina, carbamazepina)"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Infecção bacteriana", "Estresse/corticoide/adrenalina (desmarginação)", "Gestação e trabalho de parto", "Tabagismo, obesidade", "Inflamação, necrose tecidual, trauma", "Leucemias e neoplasias mieloproliferativas", "Reação leucemoide (> 50.000/mm³)"],
      fichas: ["sepse", "pneumonia", "leucemias", "apendicite", "pielonefrite"]
    },
    baixo: {
      causas: ["Infecções virais (dengue, HIV, influenza)", "Fármacos (quimioterapia, antitireoidianos, clozapina, dipirona)", "Doença autoimune (LES)", "Infiltração ou aplasia medular", "Hiperesplenismo", "Deficiência de B12/folato", "Sepse grave (pode cursar com leucopenia)"],
      fichas: ["neutropenia-febril", "dengue", "hiv-infeccao", "lupus-eritematoso-sistemico", "leucemias"]
    },
    notas: "Leucócitos e leucograma diferencial: interpretar valores ABSOLUTOS (/mm³), não só %. Lactentes podem ter até ~17.500/mm³; gestantes têm leucocitose fisiológica (até ~15.000/mm³; no parto, mais). SIRS: < 4.000 ou > 12.000/mm³ ou > 10% bastões. Laudos brasileiros usam ponto de milhar (\"7.500/mm³\") — 7,5 mil/mm³ = 7,5 × 10³/µL. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Nelson Textbook of Pediatrics", "Surviving Sepsis Campaign"]
  },
  {
    id: "neutrofilos",
    nome: "Neutrófilos (contagem absoluta)",
    sinonimos: ["neutrofilos", "neutrofilos totais", "neutrofilos segmentados", "segmentados", "contagem absoluta de neutrofilos", "granulocitos", "polimorfonucleares", "neutrofilo"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [
      { unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 },
      { unidade: "x10³/µL", fator: 1000 }, { unidade: "x10^3/uL", fator: 1000 }, { unidade: "mil/mm³", fator: 1000 },
      { unidade: "x10⁹/L", fator: 1000 }, { unidade: "x10^9/L", fator: 1000 }
    ],
    ref: [
      { faixa: "adulto", min: 1800, max: 7700 },
      { faixa: "crianca", min: 1500, max: 8500 }
    ],
    critico: { min: 500 },
    indicacoes: ["Febre em paciente em quimioterapia (neutropenia febril)", "Suspeita de infecção bacteriana", "Monitorização de fármacos (clozapina, antitireoidianos)"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Infecção bacteriana", "Corticoide, estresse, exercício", "Inflamação/necrose (IAM, pancreatite, queimadura)", "Neoplasias mieloproliferativas", "Tabagismo"],
      fichas: ["sepse", "pneumonia", "pielonefrite", "artrite-septica"]
    },
    baixo: {
      causas: ["Quimioterapia", "Fármacos (metimazol/PTU, clozapina, dipirona, sulfas)", "Infecções virais, sepse grave", "Neutropenia étnica benigna (afrodescendentes)", "Deficiência de B12/folato, aplasia, leucemia", "Autoimune (LES)"],
      fichas: ["neutropenia-febril", "hipertireoidismo", "leucemias", "anemia-megaloblastica"]
    },
    notas: "Contagem absoluta = leucócitos × (% segmentados + % bastões). Neutropenia: leve 1.000–1.500; moderada 500–1.000; grave < 500/mm³ (neutropenia febril: < 500 ou < 1.000 com queda prevista para < 500). No RN os valores variam muito nas primeiras 72 h (pico às 12–24 h) — usar curvas de Manroe/Mouzinho; não aplicar o intervalo adulto. Vale o intervalo do laudo.",
    fontes: ["IDSA/ASCO — Neutropenia febril", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "bastoes",
    nome: "Bastões (bastonetes)",
    sinonimos: ["bastoes", "bastonetes", "bastonete", "neutrofilos bastonetes", "neutrofilos bastoes", "formas jovens"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "%",
    ref: [{ faixa: "todas", min: 0, max: 5 }],
    indicacoes: ["Suspeita de infecção bacteriana/sepse (desvio à esquerda)"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Infecção bacteriana aguda (desvio à esquerda)", "Sepse", "Inflamação aguda intensa", "Neoplasia mieloproliferativa (com metamielócitos/mielócitos)"],
      fichas: ["sepse", "pneumonia", "apendicite", "sepse-neonatal"]
    },
    notas: "Desvio à esquerda: bastões > 5% (ou acima do intervalo do laudo); > 10% é critério de SIRS. Muitos laboratórios liberam também o valor absoluto (/mm³) — o limite absoluto usual é ~500–700/mm³, conferir no laudo. RN: razão imaturos/totais (I/T) > 0,2 sugere sepse neonatal. Contagem manual tem grande variação entre observadores.",
    fontes: ["Surviving Sepsis Campaign", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "linfocitos",
    nome: "Linfócitos (contagem absoluta)",
    sinonimos: ["linfocitos", "linfocitos totais", "linfocitos tipicos", "contagem absoluta de linfocitos", "linfocito"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [
      { unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 },
      { unidade: "x10³/µL", fator: 1000 }, { unidade: "x10^3/uL", fator: 1000 }, { unidade: "mil/mm³", fator: 1000 },
      { unidade: "x10⁹/L", fator: 1000 }, { unidade: "x10^9/L", fator: 1000 }
    ],
    ref: [
      { faixa: "adulto", min: 1000, max: 4800 },
      { faixa: "crianca", min: 1500, max: 9000 }
    ],
    indicacoes: ["Suspeita de infecção viral, mononucleose, coqueluche", "Imunodepressão (HIV, corticoide)", "Suspeita de leucemia linfoide crônica"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Infecções virais (mononucleose — linfócitos atípicos, CMV, hepatites)", "Coqueluche (linfocitose intensa)", "Tuberculose", "Leucemia linfoide crônica / linfomas", "Tabagismo"],
      fichas: ["mononucleose", "coqueluche", "leucemias", "linfomas"]
    },
    baixo: {
      causas: ["HIV", "Corticoide, imunossupressores, quimioterapia", "Infecção aguda grave/sepse, COVID-19", "LES", "Desnutrição", "Linfoma de Hodgkin"],
      fichas: ["hiv-infeccao", "covid-19", "lupus-eritematoso-sistemico", "sepse"]
    },
    notas: "Crianças pequenas têm predomínio linfocitário fisiológico (até ~4–5 anos), com contagens de até ~9.000–9.500/mm³ em lactentes. Linfócitos atípicos > 10% sugerem mononucleose. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Nelson Textbook of Pediatrics"]
  },
  {
    id: "eosinofilos",
    nome: "Eosinófilos (contagem absoluta)",
    sinonimos: ["eosinofilos", "contagem absoluta de eosinofilos", "eosinofilo"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [
      { unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 },
      { unidade: "x10³/µL", fator: 1000 }, { unidade: "x10^3/uL", fator: 1000 }, { unidade: "mil/mm³", fator: 1000 },
      { unidade: "x10⁹/L", fator: 1000 }, { unidade: "x10^9/L", fator: 1000 }
    ],
    ref: [{ faixa: "todas", min: 0, max: 500 }],
    indicacoes: ["Suspeita de parasitose, alergia/atopia, reação a fármaco (DRESS)", "Investigação de eosinofilia"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Parasitoses intestinais/teciduais (estrongiloidíase, ancilostomíase, toxocaríase, esquistossomose)", "Atopia: asma, rinite, dermatite atópica", "Reação a fármacos (DRESS)", "Insuficiência adrenal", "Vasculite (granulomatose eosinofílica)", "Neoplasias (linfoma de Hodgkin, síndrome hipereosinofílica)"],
      fichas: ["parasitoses-intestinais", "larva-migrans", "asma-manutencao", "reacao-adversa-medicamento", "insuficiencia-adrenal"]
    },
    baixo: { causas: ["Corticoide, estresse agudo, infecção aguda (sem significado isolado)"], fichas: [] },
    notas: "Eosinofilia: > 500/mm³; hipereosinofilia: > 1.500/mm³ (investigar lesão de órgão). Antes de corticoide/imunossupressão em paciente de área endêmica com eosinofilia, considerar estrongiloidíase (risco de hiperinfecção). Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "WHO classification — hypereosinophilic syndromes"]
  },
  {
    id: "monocitos",
    nome: "Monócitos (contagem absoluta)",
    sinonimos: ["monocitos", "contagem absoluta de monocitos", "monocito"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [
      { unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 },
      { unidade: "x10³/µL", fator: 1000 }, { unidade: "x10^3/uL", fator: 1000 }, { unidade: "mil/mm³", fator: 1000 },
      { unidade: "x10⁹/L", fator: 1000 }, { unidade: "x10^9/L", fator: 1000 }
    ],
    ref: [{ faixa: "todas", min: 100, max: 1000 }],
    indicacoes: ["Parte do leucograma; investigação de monocitose persistente"],
    preparo: "Sem jejum obrigatório.",
    pedido: "Hemograma completo",
    alto: {
      causas: ["Recuperação de neutropenia/infecção aguda", "Infecções crônicas: tuberculose, endocardite subaguda, sífilis, brucelose", "Doença inflamatória intestinal, sarcoidose", "Leucemia mielomonocítica crônica (monocitose persistente > 1.000/mm³)"],
      fichas: ["tuberculose-pulmonar", "endocardite", "doenca-inflamatoria-intestinal", "leucemias"]
    },
    baixo: { causas: ["Corticoide", "Aplasia medular", "Tricoleucemia"], fichas: [] },
    notas: "Monocitose: > 1.000/mm³. Monocitose persistente (> 3 meses) sem causa: avaliar hematologia. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "plaquetas",
    nome: "Plaquetas",
    sinonimos: ["plaquetas", "contagem de plaquetas", "plaquetometria", "trombocitos", "plt", "plaq"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [
      { unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 },
      { unidade: "x10³/µL", fator: 1000 }, { unidade: "x10^3/uL", fator: 1000 }, { unidade: "mil/mm³", fator: 1000 },
      { unidade: "x10⁹/L", fator: 1000 }, { unidade: "x10^9/L", fator: 1000 }
    ],
    ref: [{ faixa: "todas", min: 150000, max: 450000 }],
    critico: { min: 20000, max: 1000000 },
    indicacoes: [
      "Sangramento mucocutâneo, petéquias, equimoses",
      "Dengue (acompanhamento seriado), sepse, CIVD",
      "Gestante com hipertensão (HELLP)",
      "Uso de heparina (suspeita de HIT: queda > 50% em 5–10 dias)",
      "Pré-operatório, pré-procedimento (punção, cateter, raqui)"
    ],
    preparo: "Sem jejum obrigatório. Coletar em EDTA; se plaquetopenia isolada inesperada, repetir em citrato (pseudoplaquetopenia).",
    pedido: "Hemograma completo com contagem de plaquetas",
    alto: {
      causas: ["Reativa: ferropenia, inflamação/infecção, pós-esplenectomia, pós-sangramento, neoplasia", "Neoplasias mieloproliferativas (trombocitemia essencial, policitemia vera, LMC)"],
      fichas: ["anemia-ferropriva", "leucemias"]
    },
    baixo: {
      causas: ["Dengue e outras viroses", "Sepse/CIVD", "PTI", "HELLP / pré-eclâmpsia, trombocitopenia gestacional", "Hiperesplenismo (cirrose)", "Fármacos (heparina — HIT, quimioterapia, sulfas, valproato)", "Microangiopatias (PTT, SHU)", "Infiltração/aplasia medular, B12/folato", "Pseudoplaquetopenia (agregação em EDTA)"],
      fichas: ["trombocitopenia", "dengue", "coagulopatias-urgencia", "hipertensao-gestacao", "sindrome-hemolitico-uremica"]
    },
    notas: "Sangramento espontâneo raro com > 20.000–30.000/mm³ se função plaquetária normal. Gestação: trombocitopenia gestacional leve (> 70.000–80.000/mm³) é comum no 3º trimestre. Laudos variam: \"230.000/mm³\" = \"230 mil/mm³\" = \"230 × 10³/µL\". Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "ASH — Immune thrombocytopenia guideline (2019)", "Ministério da Saúde — Dengue (2024)"]
  },
  {
    id: "reticulocitos",
    nome: "Reticulócitos",
    sinonimos: ["reticulocitos", "contagem de reticulocitos", "reticulocitos percentual", "reticulocito"],
    categoria: "hemograma",
    tipo: "quantitativo",
    unidade: "%",
    ref: [
      { faixa: "adulto", min: 0.5, max: 2.5 },
      { faixa: "crianca", min: 0.5, max: 2.5 },
      { faixa: "rn", min: 2.0, max: 6.0 }
    ],
    indicacoes: ["Classificar anemia como hipoproliferativa (medula) ou hiperproliferativa (hemólise/sangramento)", "Avaliar resposta à reposição de ferro/B12 (pico em 7–10 dias)", "Doença falciforme (crise aplástica — parvovírus B19)"],
    preparo: "Sem jejum obrigatório. Coletar em EDTA.",
    pedido: "Contagem de reticulócitos",
    alto: {
      causas: ["Hemólise", "Sangramento agudo (após 3–5 dias)", "Resposta ao tratamento de ferropenia/megaloblástica"],
      fichas: ["anemias-hemoliticas", "anemia-falciforme", "hemorragia-digestiva-alta"]
    },
    baixo: {
      causas: ["Ferropenia, deficiência de B12/folato (antes do tratamento)", "Doença renal crônica (baixa EPO)", "Aplasia medular, infiltração", "Crise aplástica (parvovírus B19) na doença falciforme/esferocitose", "Anemia de doença crônica"],
      fichas: ["anemia-investigacao", "doenca-renal-cronica", "crise-falciforme", "eritema-infeccioso"]
    },
    notas: "Corrigir para o grau de anemia: reticulócito corrigido = % × (Ht/45). Índice de produção reticulocitária (IPR) = corrigido ÷ fator de maturação (1 se Ht 45; 1,5 se 35; 2 se 25; 2,5 se 15). IPR < 2 = hipoproliferativa; > 2–3 = resposta medular adequada (hemólise/sangramento). Valor absoluto usual ~25.000–100.000/mm³ (conferir no laudo). Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Harrison's Principles of Internal Medicine — Anemia"]
  }
);

/* ===================== COAGULAÇÃO ===================== */
EXAMES_LAB.push(
  {
    id: "tp-inr",
    nome: "Tempo de protrombina (TP) / RNI",
    sinonimos: ["rni", "inr", "tp", "tap", "tempo de protrombina", "tempo de atividade de protrombina", "tempo e atividade de protrombina", "atividade de protrombina", "protrombina", "razao normalizada internacional", "relacao normatizada internacional", "tp rni"],
    categoria: "coagulacao",
    tipo: "quantitativo",
    unidade: "RNI",
    conversoes: [{ unidade: "INR", fator: 1 }],
    ref: [{ faixa: "todas", min: 0.8, max: 1.2 }],
    critico: { max: 5.0 },
    indicacoes: [
      "Controle de varfarina (alvo RNI 2–3; 2,5–3,5 em prótese mecânica mitral/alto risco)",
      "Sangramento, suspeita de coagulopatia, CIVD",
      "Hepatopatia (função de síntese; MELD, Child-Pugh) e insuficiência hepática aguda",
      "Pré-procedimento invasivo em paciente de risco",
      "Intoxicação por raticida cumarínico"
    ],
    preparo: "Sem jejum. Tubo de citrato (tampa azul) preenchido até a marca (relação sangue:citrato 9:1); evitar coleta do mesmo braço de soro com heparina.",
    pedido: "Tempo de protrombina com RNI (TP/TAP com INR)",
    alto: {
      causas: ["Varfarina/antagonistas da vitamina K (ou raticida)", "Deficiência de vitamina K (desnutrição, antibiótico, má absorção, RN sem vitamina K)", "Hepatopatia (cirrose, hepatite aguda grave)", "CIVD", "Anticoagulantes diretos anti-Xa (prolongamento variável)", "Coleta inadequada (tubo pouco cheio, Ht > 55%)"],
      fichas: ["anticoagulacao-oral", "coagulopatias-urgencia", "cirrose-descompensada", "hepatite-aguda-insuficiencia-hepatica", "antidotos"]
    },
    notas: "TP em segundos (~10–14 s) e atividade (~70–100%) dependem do reagente; o RNI padroniza para controle de varfarina. RNI > 4,5–5 com ou sem sangramento: conduta conforme protocolo (suspender, vitamina K, complexo protrombínico se sangramento grave). RNI na hepatopatia não mede bem o risco de sangramento. Vale o intervalo do laudo.",
    fontes: ["SBC — Diretriz de antiagregantes e anticoagulantes", "ACCP/CHEST — Antithrombotic therapy", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "ttpa",
    nome: "TTPA (tempo de tromboplastina parcial ativada)",
    sinonimos: ["ttpa", "ttpa relacao", "tempo de tromboplastina parcial ativada", "tempo de tromboplastina parcial", "kptt", "ttp", "aptt", "ptt"],
    categoria: "coagulacao",
    tipo: "quantitativo",
    unidade: "s",
    conversoes: [{ unidade: "seg", fator: 1 }, { unidade: "segundos", fator: 1 }],
    ref: [{ faixa: "todas", min: 25, max: 35 }],
    critico: { max: 100 },
    indicacoes: ["Controle de heparina não fracionada (alvo usual 1,5–2,5 × controle)", "Sangramento, suspeita de hemofilia/von Willebrand", "CIVD", "Pré-operatório com história de sangramento", "Investigação de anticoagulante lúpico"],
    preparo: "Sem jejum. Tubo de citrato preenchido até a marca; não coletar de acesso com heparina.",
    pedido: "Tempo de tromboplastina parcial ativada (TTPA)",
    alto: {
      causas: ["Heparina não fracionada (ou contaminação da amostra)", "Hemofilia A/B, doença de von Willebrand", "CIVD, hepatopatia grave", "Anticoagulante lúpico (sem sangramento; risco trombótico)", "Anticoagulantes diretos (dabigatrana)", "Inibidores adquiridos de fator VIII"],
      fichas: ["hemofilias", "coagulopatias-urgencia", "hemostasia-primaria", "lupus-eritematoso-sistemico"]
    },
    notas: "Intervalo em segundos depende do reagente (cada laboratório tem o seu); muitos laudos trazem a relação paciente/controle (normal ~0,8–1,2). TTPA prolongado isolado: teste de mistura (corrige = deficiência de fator; não corrige = inibidor/anticoagulante lúpico). Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "ACCP/CHEST — Antithrombotic therapy"]
  },
  {
    id: "fibrinogenio",
    nome: "Fibrinogênio",
    sinonimos: ["fibrinogenio", "fibrinogenio funcional", "fibrinogenio clauss", "dosagem de fibrinogenio", "fator i"],
    categoria: "coagulacao",
    tipo: "quantitativo",
    unidade: "mg/dL",
    conversoes: [{ unidade: "g/L", fator: 100 }],
    ref: [{ faixa: "todas", min: 200, max: 400 }],
    critico: { min: 100 },
    indicacoes: ["Hemorragia maciça/choque hemorrágico, hemorragia pós-parto", "Suspeita de CIVD", "Hepatopatia grave", "Descolamento prematuro de placenta, embolia amniótica"],
    preparo: "Sem jejum. Tubo de citrato preenchido até a marca.",
    pedido: "Dosagem de fibrinogênio (método de Clauss)",
    alto: { causas: ["Proteína de fase aguda: inflamação, infecção, neoplasia", "Gestação (aumenta progressivamente, chega a 400–600 mg/dL no 3º trimestre)", "Tabagismo, síndrome nefrótica"], fichas: [] },
    baixo: {
      causas: ["Consumo: CIVD, hemorragia maciça, DPP, embolia amniótica", "Diluição (reposição com cristaloide/concentrado de hemácias)", "Hepatopatia grave", "Trombolíticos, asparaginase", "Afibrinogenemia/disfibrinogenemia congênita"],
      fichas: ["coagulopatias-urgencia", "hemorragia-pos-parto", "choque-hemorragico", "cirrose-descompensada"]
    },
    notas: "Na hemorragia, repor (crioprecipitado ou concentrado de fibrinogênio) se < 150–200 mg/dL; na hemorragia pós-parto, fibrinogênio < 200 mg/dL prediz sangramento grave (gestante tem valor basal alto). Vale o intervalo do laudo.",
    fontes: ["European guideline on management of major bleeding and coagulopathy following trauma (2023)", "OPAS/FEBRASGO — Hemorragia pós-parto", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "d-dimero",
    nome: "D-dímero",
    sinonimos: ["d-dimero", "d dimero", "dimero d", "dimero-d", "ddimero", "d-dimeros", "produtos de degradacao da fibrina d-dimero"],
    categoria: "coagulacao",
    tipo: "quantitativo",
    unidade: "ng/mL FEU",
    conversoes: [
      { unidade: "ng/mL", fator: 1 }, { unidade: "µg/L", fator: 1 }, { unidade: "ug/L", fator: 1 },
      { unidade: "µg/mL", fator: 1000 }, { unidade: "ug/mL", fator: 1000 }, { unidade: "mg/L", fator: 1000 }, { unidade: "µg/mL FEU", fator: 1000 }, { unidade: "mg/L FEU", fator: 1000 }
    ],
    ref: [{ faixa: "todas", min: 0, max: 500 }],
    indicacoes: [
      "Excluir TEP/TVP em probabilidade clínica baixa ou intermediária (Wells/Genebra; PERC não excludente)",
      "Suspeita de CIVD (escore ISTH)",
      "Acompanhamento de COVID-19 grave (prognóstico)"
    ],
    preparo: "Sem jejum. Tubo de citrato.",
    pedido: "Dosagem de D-dímero (quantitativo)",
    alto: {
      causas: ["TEP, TVP", "CIVD", "Dissecção de aorta", "Pós-operatório, trauma, queimadura", "Gestação e puerpério", "Câncer, sepse, infecção, COVID-19", "Idade avançada, internação, doença hepática/renal"],
      fichas: ["tep", "tvp", "coagulopatias-urgencia", "sindrome-aortica-aguda", "tev-gestacao"]
    },
    notas: "Alta sensibilidade e baixa especificidade: serve para EXCLUIR (negativo + probabilidade não alta). Corte ajustado por idade em > 50 anos: idade × 10 ng/mL FEU. Atenção à unidade: FEU ≈ 2 × DDU (alguns laudos usam DDU, corte ~250 ng/mL). 0,5 µg/mL = 500 ng/mL. Em probabilidade clínica alta, ir direto à imagem. Vale o intervalo do laudo.",
    fontes: ["ESC — Guidelines on acute pulmonary embolism (2019)", "ADJUST-PE (Righini, JAMA 2014)", "ISTH — DIC score"]
  }
);

/* ===================== FERRO E VITAMINAS ===================== */
EXAMES_LAB.push(
  {
    id: "ferritina",
    nome: "Ferritina",
    sinonimos: ["ferritina", "ferritina serica", "dosagem de ferritina"],
    categoria: "ferro",
    tipo: "quantitativo",
    unidade: "ng/mL",
    conversoes: [{ unidade: "µg/L", fator: 1 }, { unidade: "ug/L", fator: 1 }],
    ref: [
      { faixa: "adulto", sexo: "M", min: 30, max: 400 },
      { faixa: "adulto", sexo: "F", min: 15, max: 150 },
      { faixa: "crianca", min: 12, max: 140 }
    ],
    indicacoes: ["Anemia microcítica ou suspeita de ferropenia (inclusive sem anemia: fadiga, queda de cabelo, pica)", "Gestação, pós-bariátrica, doença inflamatória intestinal, doença celíaca", "Suspeita de sobrecarga de ferro (hemocromatose, politransfundidos)", "Doença renal crônica antes/durante uso de eritropoetina"],
    preparo: "Sem jejum obrigatório (se pedido com ferro sérico, preferir jejum de 8 h e coleta pela manhã).",
    pedido: "Dosagem de ferritina sérica",
    alto: {
      causas: ["Inflamação/infecção (proteína de fase aguda)", "Hepatopatia (álcool, MASLD, hepatites)", "Hemocromatose, sobrecarga transfusional (talassemia, falciforme)", "Neoplasias, síndrome hemofagocítica (muito alta, > 10.000)", "Síndrome metabólica"],
      fichas: ["masld", "uso-alcool", "talassemias", "anemia-falciforme", "hepatites-virais"]
    },
    baixo: {
      causas: ["Deficiência de ferro (único achado que, isolado, confirma ferropenia)", "Perdas: menstruação, sangramento digestivo", "Má absorção: celíaca, bariátrica, H. pylori, IBP", "Gestação, crescimento rápido, dieta pobre"],
      fichas: ["anemia-ferropriva", "anemia-ferropriva-crianca", "anemia-gestacao", "doenca-celiaca", "cirurgia-bariatrica"]
    },
    notas: "Ferritina < 30 ng/mL confirma ferropenia em adultos (< 15 é muito específica). Com inflamação (PCR alta), DRC ou ICC, ferropenia é possível até ~100 ng/mL (com saturação de transferrina < 20%). OMS crianças: deficiência se < 12 ng/mL (< 5 anos) ou < 15 ng/mL (≥ 5 anos). Vale o intervalo do laudo.",
    fontes: ["OMS — Guideline on use of ferritin concentrations (2020)", "AGA — Clinical practice guideline on iron deficiency anemia (2020)", "KDIGO — Anemia in CKD"]
  },
  {
    id: "ferro-serico",
    nome: "Ferro sérico",
    sinonimos: ["ferro serico", "ferro", "sideremia", "dosagem de ferro", "ferro total"],
    categoria: "ferro",
    tipo: "quantitativo",
    unidade: "µg/dL",
    conversoes: [{ unidade: "ug/dL", fator: 1 }, { unidade: "mcg/dL", fator: 1 }, { unidade: "µmol/L", fator: 5.585 }, { unidade: "umol/L", fator: 5.585 }],
    ref: [
      { faixa: "adulto", sexo: "M", min: 65, max: 175 },
      { faixa: "adulto", sexo: "F", min: 50, max: 170 }
    ],
    indicacoes: ["Junto com ferritina e transferrina/CTLF para calcular saturação de transferrina", "Suspeita de sobrecarga de ferro", "Intoxicação por ferro (dosagem 4–6 h após ingestão)"],
    preparo: "Jejum de 8 h, coleta pela manhã (variação circadiana); suspender suplemento de ferro 24 h antes, se possível.",
    pedido: "Dosagem de ferro sérico",
    alto: {
      causas: ["Hemocromatose, sobrecarga transfusional", "Uso recente de ferro oral/venoso", "Hemólise, hepatite aguda", "Intoxicação por ferro"],
      fichas: ["talassemias", "intoxicacoes-exogenas", "hepatites-virais"]
    },
    baixo: {
      causas: ["Deficiência de ferro", "Inflamação (sequestro de ferro)", "Coleta à tarde/noite"],
      fichas: ["anemia-ferropriva", "anemia-investigacao"]
    },
    notas: "Isolado é pouco útil (grande variação diária e com a alimentação): interpretar com ferritina e saturação de transferrina. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Tietz Textbook of Laboratory Medicine"]
  },
  {
    id: "saturacao-transferrina",
    nome: "Saturação da transferrina",
    sinonimos: ["saturacao da transferrina", "saturacao de transferrina", "indice de saturacao da transferrina", "ist", "sat transferrina", "satferro", "tsat"],
    categoria: "ferro",
    tipo: "quantitativo",
    unidade: "%",
    ref: [{ faixa: "adulto", min: 20, max: 50 }],
    indicacoes: ["Diagnóstico de ferropenia com inflamação/DRC/ICC (ferritina pouco confiável)", "Rastreio de hemocromatose (> 45% em jejum)"],
    preparo: "Jejum de 8 h, coleta pela manhã.",
    pedido: "Ferro sérico, transferrina (ou capacidade total de ligação do ferro) e índice de saturação da transferrina",
    alto: {
      causas: ["Hemocromatose hereditária", "Sobrecarga transfusional, anemias com eritropoese ineficaz (talassemia)", "Hepatopatia, uso de ferro"],
      fichas: ["talassemias", "masld"]
    },
    baixo: {
      causas: ["Deficiência de ferro (absoluta ou funcional)", "Anemia de doença crônica/inflamação"],
      fichas: ["anemia-ferropriva", "doenca-renal-cronica", "ic-cronica", "anemia-investigacao"]
    },
    notas: "Saturação = ferro sérico ÷ CTLF × 100. < 20% sugere ferropenia (absoluta ou funcional); > 45% em jejum, investigar sobrecarga (genotipagem HFE). Vale o intervalo do laudo.",
    fontes: ["KDIGO — Anemia in CKD", "ESC — Heart failure guidelines (deficiência de ferro: ferritina < 100 ou 100–299 com TSAT < 20%)", "EASL — Haemochromatosis (2022)"]
  },
  {
    id: "vitamina-b12",
    nome: "Vitamina B12 (cobalamina)",
    sinonimos: ["vitamina b12", "vit b12", "b12", "cobalamina", "cianocobalamina", "dosagem de vitamina b12"],
    categoria: "ferro",
    tipo: "quantitativo",
    unidade: "pg/mL",
    conversoes: [{ unidade: "pmol/L", fator: 1.355 }, { unidade: "ng/L", fator: 1 }],
    ref: [{ faixa: "adulto", min: 200, max: 900 }],
    indicacoes: ["Anemia macrocítica, pancitopenia", "Neuropatia periférica, alteração cognitiva, ataxia", "Uso prolongado de metformina ou IBP", "Pós-bariátrica, gastrectomia, vegetarianos estritos, idosos"],
    preparo: "Jejum de 4–8 h conforme laboratório; suspender suplementos de biotina 48 h antes (interferência em imunoensaios).",
    pedido: "Dosagem de vitamina B12 sérica",
    alto: { causas: ["Suplementação", "Hepatopatia", "Neoplasias mieloproliferativas", "Insuficiência renal"], fichas: [] },
    baixo: {
      causas: ["Anemia perniciosa (autoimune)", "Gastrectomia/bariátrica, ressecção ileal, Crohn", "Metformina, IBP", "Dieta vegana sem suplementação", "Gestação (redução fisiológica)"],
      fichas: ["anemia-megaloblastica", "neuropatia-periferica", "cirurgia-bariatrica", "diabetes-tipo-2", "demencia"]
    },
    notas: "< 200 pg/mL: deficiência provável; 200–300 pg/mL: limítrofe — confirmar com ácido metilmalônico e/ou homocisteína (elevados). Deficiência neurológica pode ocorrer sem anemia. 1 pmol/L ≈ 1,355 pg/mL. Vale o intervalo do laudo.",
    fontes: ["BSH — Guidelines for diagnosis and treatment of cobalamin and folate disorders (2014)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "acido-folico",
    nome: "Ácido fólico (folato sérico)",
    sinonimos: ["acido folico", "folato", "folato serico", "vitamina b9", "dosagem de acido folico"],
    categoria: "ferro",
    tipo: "quantitativo",
    unidade: "ng/mL",
    conversoes: [{ unidade: "nmol/L", fator: 0.441 }, { unidade: "µg/L", fator: 1 }, { unidade: "ug/L", fator: 1 }],
    ref: [{ faixa: "adulto", min: 3.0, max: 20.0 }],
    indicacoes: ["Anemia macrocítica", "Etilismo, desnutrição, má absorção (celíaca)", "Uso de metotrexato, fenitoína, sulfametoxazol-trimetoprima", "Anemias hemolíticas crônicas (aumento de consumo)"],
    preparo: "Jejum de 4–8 h (refeição recente eleva o folato sérico).",
    pedido: "Dosagem de ácido fólico sérico",
    baixo: {
      causas: ["Dieta pobre, etilismo", "Má absorção (doença celíaca)", "Aumento de demanda: gestação, hemólise crônica", "Fármacos antifolato"],
      fichas: ["anemia-megaloblastica", "uso-alcool", "doenca-celiaca", "anemias-hemoliticas", "suplementacao-gestacao"]
    },
    notas: "Folato < 3 ng/mL (~7 nmol/L) indica deficiência; o folato sérico cai rapidamente com ingestão baixa recente (o eritrocitário reflete estoque). Sempre dosar B12 junto: repor só folato na deficiência de B12 pode piorar o quadro neurológico. Vale o intervalo do laudo.",
    fontes: ["OMS — Serum and red blood cell folate concentrations (2015)", "BSH — Cobalamin and folate disorders (2014)"]
  }
);

/* ===================== INFLAMAÇÃO E INFECÇÃO ===================== */
EXAMES_LAB.push(
  {
    id: "pcr",
    nome: "Proteína C reativa (PCR)",
    sinonimos: ["proteina c reativa", "pcr", "pcr quantitativa", "proteina c-reativa", "pcr ultrassensivel", "pcr-us", "crp"],
    categoria: "inflamatorio",
    tipo: "quantitativo",
    unidade: "mg/L",
    conversoes: [{ unidade: "mg/dL", fator: 10 }],
    ref: [{ faixa: "todas", min: 0, max: 5 }],
    indicacoes: ["Suspeita de infecção bacteriana (pneumonia, apendicite, artrite séptica, infecção de sítio cirúrgico)", "Acompanhamento de resposta ao tratamento (queda em 48–72 h)", "Doenças inflamatórias (artrite reumatoide, DII, vasculites)", "PCR ultrassensível: estratificação de risco cardiovascular"],
    preparo: "Sem jejum.",
    pedido: "Dosagem de proteína C reativa (quantitativa)",
    alto: {
      causas: ["Infecção bacteriana (em geral > 100 mg/L)", "Viroses (geralmente < 50 mg/L, mas adenovírus/influenza podem elevar)", "Doenças inflamatórias, pós-operatório, trauma, queimadura", "Neoplasias, IAM, pancreatite", "Obesidade, tabagismo (PCR-us)"],
      fichas: ["sepse", "pneumonia", "apendicite", "artrite-septica", "artrite-reumatoide"]
    },
    notas: "Atenção à unidade: muitos laudos usam mg/dL (ref < 0,5 ou < 1,0 mg/dL) — 1 mg/dL = 10 mg/L. Sobe em 6–8 h, pico em 48 h. PCR-us cardiovascular: < 1 mg/L baixo risco; 1–3 intermediário; > 3 alto (dosar fora de quadro agudo). LES ativo costuma ter PCR baixa (se alta, pensar em infecção/serosite). Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "AHA/CDC — Markers of inflammation and cardiovascular disease (2003)"]
  },
  {
    id: "vhs",
    nome: "VHS (velocidade de hemossedimentação)",
    sinonimos: ["vhs", "velocidade de hemossedimentacao", "velocidade de sedimentacao", "vsg", "hemossedimentacao", "esr"],
    categoria: "inflamatorio",
    tipo: "quantitativo",
    unidade: "mm/h",
    conversoes: [{ unidade: "mm/1h", fator: 1 }, { unidade: "mm", fator: 1 }],
    ref: [
      { faixa: "adulto", sexo: "M", min: 0, max: 15 },
      { faixa: "adulto", sexo: "F", min: 0, max: 20 },
      { faixa: "crianca", min: 0, max: 10 }
    ],
    indicacoes: ["Suspeita de arterite de células gigantes/polimialgia reumática", "Osteomielite, endocardite, artrite séptica (acompanhamento)", "Doenças reumatológicas (atividade), mieloma", "Febre reumática (critério de Jones: ≥ 60 mm/h em baixo risco; ≥ 30 em moderado/alto)"],
    preparo: "Sem jejum. Tubo de citrato ou EDTA conforme método; processar em até 2–4 h.",
    pedido: "Velocidade de hemossedimentação (VHS)",
    alto: {
      causas: ["Infecção/inflamação crônica (osteomielite, endocardite, TB)", "Arterite de células gigantes, polimialgia reumática, vasculites", "Artrite reumatoide, LES", "Mieloma múltiplo, macroglobulinemia (VHS > 100)", "Anemia, gestação, idade, insuficiência renal, hipoalbuminemia"],
      fichas: ["vasculites", "artrite-reumatoide", "mieloma-multiplo", "febre-reumatica", "endocardite"]
    },
    notas: "Limite superior aproximado por idade: homens = idade ÷ 2; mulheres = (idade + 10) ÷ 2 (mm/h). Sobe e cai lentamente (dias a semanas) — pior que PCR para infecção aguda. Policitemia, anemia falciforme e microcitose extrema reduzem a VHS. Vale o intervalo do laudo.",
    fontes: ["Miller A et al. BMJ 1983 (fórmula por idade)", "AHA — Critérios de Jones revisados (2015)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "procalcitonina",
    nome: "Procalcitonina",
    sinonimos: ["procalcitonina", "pct", "procalcitonina serica", "dosagem de procalcitonina"],
    categoria: "inflamatorio",
    tipo: "quantitativo",
    unidade: "ng/mL",
    conversoes: [{ unidade: "µg/L", fator: 1 }, { unidade: "ug/L", fator: 1 }],
    ref: [{ faixa: "todas", min: 0, max: 0.5 }],
    indicacoes: ["Apoio na decisão de iniciar/suspender antibiótico em infecção respiratória baixa e sepse (seriada)", "Diferenciar infecção bacteriana de viral/inflamação não infecciosa", "Febre sem sinais localizatórios em lactente (escores PECARN/Step-by-Step)"],
    preparo: "Sem jejum.",
    pedido: "Dosagem de procalcitonina sérica",
    alto: {
      causas: ["Infecção bacteriana sistêmica / sepse", "Choque, trauma grave, grandes cirurgias, queimaduras (elevação não infecciosa)", "Insuficiência renal (eleva basal)", "Carcinoma medular de tireoide, CPPC", "RN nas primeiras 48–72 h (elevação fisiológica)"],
      fichas: ["sepse", "pneumonia", "antibioticoterapia-racional", "febre-lactente", "meningite"]
    },
    notas: "Valor em indivíduos saudáveis < 0,05 ng/mL. Infecção respiratória baixa: < 0,25 ng/mL antibiótico desencorajado; ≥ 0,5 sugere bacteriana. Sepse: suspensão de antibiótico se queda ≥ 80% do pico ou < 0,5 ng/mL. Não usar isoladamente para NÃO tratar paciente grave. Vale o intervalo do laudo.",
    fontes: ["Schuetz P et al. — ProHOSP / Cochrane (2017)", "Surviving Sepsis Campaign (2021)", "FDA — Procalcitonin assay clearance (2017)"]
  }
);

/* ===================== GASOMETRIA E LACTATO ===================== */
EXAMES_LAB.push(
  {
    id: "ph",
    nome: "pH (gasometria)",
    sinonimos: ["ph", "ph arterial", "ph sanguineo", "ph venoso", "ph sangue"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "",
    ref: [{ faixa: "todas", min: 7.35, max: 7.45 }],
    critico: { min: 7.20, max: 7.60 },
    indicacoes: ["Insuficiência respiratória, DPOC exacerbado, rebaixamento de consciência", "Choque, sepse, cetoacidose, intoxicações", "Ajuste de ventilação mecânica/VNI", "Diarreia/vômitos graves, insuficiência renal aguda"],
    preparo: "Arterial: seringa heparinizada, sem bolhas, analisar em até 15–30 min (gelo se demorar). Anotar FiO2 e temperatura. Teste de Allen antes da radial.",
    pedido: "Gasometria arterial (com lactato e eletrólitos, se disponível). Informar FiO2.",
    alto: {
      causas: ["Alcalose respiratória: hiperventilação (ansiedade, dor, sepse inicial, TEP, gestação, hepatopatia)", "Alcalose metabólica: vômitos, SNG aberta, diuréticos, hipocalemia, hiperaldosteronismo"],
      fichas: ["gasometria-acido-base", "crise-ansiedade", "nauseas-vomitos", "hipocalemia"]
    },
    baixo: {
      causas: ["Acidose metabólica com AG alto: cetoacidose, lactato (choque/sepse), insuficiência renal, intoxicações (metanol, salicilato)", "Acidose metabólica com AG normal: diarreia, ATR, SF 0,9% em excesso", "Acidose respiratória: DPOC, sedação/opioides, doença neuromuscular, exaustão"],
      fichas: ["gasometria-acido-base", "cetoacidose", "choque", "insuficiencia-respiratoria-aguda", "dpoc-exacerbacao"]
    },
    notas: "Interpretação: pH → distúrbio primário (pCO2 × HCO3) → compensação esperada (Winter: pCO2 esperada = 1,5 × HCO3 + 8 ± 2) → ânion gap (Na − Cl − HCO3; corrigir pela albumina) → delta/delta. Gasometria venosa: pH ~0,03–0,04 menor e pCO2 ~4–6 mmHg maior que a arterial; útil para pH/HCO3 (cetoacidose), não para oxigenação. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Berend K et al. — Physiological approach to assessment of acid-base disturbances. NEJM 2014"]
  },
  {
    id: "pco2",
    nome: "pCO2",
    sinonimos: ["pco2", "paco2", "pvco2", "pressao parcial de co2", "pressao parcial de dioxido de carbono", "pco 2"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "mmHg",
    conversoes: [{ unidade: "kPa", fator: 7.50 }],
    ref: [{ faixa: "todas", min: 35, max: 45 }],
    critico: { min: 20, max: 70 },
    indicacoes: ["Avaliar ventilação alveolar (hipercapnia) e compensação de distúrbios metabólicos", "DPOC, asma grave, rebaixamento de consciência, ventilação mecânica"],
    preparo: "Ver pH (gasometria arterial).",
    pedido: "Gasometria arterial",
    alto: {
      causas: ["Hipoventilação: DPOC, asma grave (pCO2 normal/alta na crise = sinal de exaustão)", "Depressão do SNC: opioides, benzodiazepínicos, AVC", "Doença neuromuscular (Guillain-Barré, miastenia), obesidade-hipoventilação", "Compensação de alcalose metabólica"],
      fichas: ["dpoc-exacerbacao", "asma-ps", "intoxicacao-opioides", "vni", "crise-miastenica"]
    },
    baixo: {
      causas: ["Hiperventilação: ansiedade, dor, hipoxemia, TEP, sepse", "Compensação de acidose metabólica (cetoacidose)", "Gestação (pCO2 ~30 mmHg é fisiológica)", "Hiperventilação em ventilação mecânica"],
      fichas: ["crise-ansiedade", "tep", "cetoacidose", "gasometria-acido-base"]
    },
    notas: "Em DPOC retentor, pCO2 basal alta é esperada: avaliar pelo pH (acidose = descompensação aguda). Gestante: pCO2 normal 27–32 mmHg; 40 mmHg em gestante com asma é preocupante. Vale o intervalo do laudo.",
    fontes: ["GOLD (2025)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "po2",
    nome: "pO2 (arterial)",
    sinonimos: ["po2", "pao2", "pressao parcial de o2", "pressao parcial de oxigenio", "po 2"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "mmHg",
    conversoes: [{ unidade: "kPa", fator: 7.50 }],
    ref: [{ faixa: "adulto", min: 80, max: 100 }],
    critico: { min: 40 },
    indicacoes: ["Avaliar oxigenação e indicação de O2 domiciliar (PaO2 ≤ 55 mmHg)", "Insuficiência respiratória (PaO2 < 60 mmHg)", "Cálculo da relação PaO2/FiO2 (SDRA: ≤ 300)"],
    preparo: "Ver pH. Anotar FiO2 / fluxo de O2 no pedido.",
    pedido: "Gasometria arterial (informar FiO2)",
    alto: { causas: ["Oxigenoterapia (hiperóxia)"], fichas: ["oxigenoterapia"] },
    baixo: {
      causas: ["Pneumonia, SDRA, edema agudo de pulmão", "TEP", "DPOC/asma", "Hipoventilação", "Shunt intracardíaco", "Amostra venosa ou com bolha (artefato)"],
      fichas: ["insuficiencia-respiratoria-aguda", "pneumonia", "tep", "dpoc-exacerbacao", "oxigenoterapia"]
    },
    notas: "Valores em ar ambiente, nível do mar. Cai com a idade (estimativa: PaO2 esperada ≈ 100 − idade/3). Relação P/F = PaO2 ÷ FiO2 (ex.: 80 mmHg em FiO2 0,4 = 200). pO2 de gasometria venosa NÃO avalia oxigenação. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Berlin Definition of ARDS (2012) / Global definition (2023)"]
  },
  {
    id: "bicarbonato",
    nome: "Bicarbonato (HCO3)",
    sinonimos: ["bicarbonato", "hco3", "hco3-", "bicarbonato real", "bicarbonato padrao", "bicarbonato standard", "co2 total", "bicarbonato serico"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "mEq/L",
    conversoes: [{ unidade: "mmol/L", fator: 1 }],
    ref: [{ faixa: "todas", min: 22, max: 26 }],
    critico: { min: 10, max: 40 },
    indicacoes: ["Distúrbios metabólicos ácido-base", "Cetoacidose (gravidade), insuficiência renal, diarreia grave"],
    preparo: "Ver pH.",
    pedido: "Gasometria arterial ou venosa",
    alto: {
      causas: ["Alcalose metabólica: vômitos, SNG, diuréticos, hipocalemia, hipovolemia (contração)", "Compensação de acidose respiratória crônica (DPOC)"],
      fichas: ["nauseas-vomitos", "hipocalemia", "dpoc", "gasometria-acido-base"]
    },
    baixo: {
      causas: ["Acidose metabólica: cetoacidose, lactato, insuficiência renal, diarreia, intoxicações", "Compensação de alcalose respiratória crônica"],
      fichas: ["cetoacidose", "cad-pediatrica", "lesao-renal-aguda", "diarreia-desidratacao", "choque"]
    },
    notas: "Gravidade da cetoacidose: leve HCO3 15–18; moderada 10–15; grave < 10 mEq/L (ADA). Vale o intervalo do laudo.",
    fontes: ["ADA — Hyperglycemic crises in adults (2024)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "base-excesso",
    nome: "Excesso de base (BE)",
    sinonimos: ["excesso de base", "base excess", "be", "beb", "bea", "be ecf", "sbe", "deficit de base", "excesso de bases"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "mEq/L",
    conversoes: [{ unidade: "mmol/L", fator: 1 }],
    ref: [{ faixa: "todas", min: -2, max: 2 }],
    indicacoes: ["Componente metabólico do distúrbio ácido-base", "Trauma/choque hemorrágico (déficit de base como marcador de hipoperfusão)"],
    preparo: "Ver pH.",
    pedido: "Gasometria arterial",
    alto: { causas: ["Alcalose metabólica (vômitos, diuréticos)", "Compensação de acidose respiratória crônica"], fichas: ["gasometria-acido-base"] },
    baixo: {
      causas: ["Acidose metabólica: choque, sepse, cetoacidose, insuficiência renal, diarreia", "Trauma com hipoperfusão (déficit de base < −6 associa-se a maior mortalidade)"],
      fichas: ["choque-hemorragico", "politrauma-abcde", "sepse", "cetoacidose"]
    },
    notas: "Alguns laboratórios usam −3 a +3 mEq/L. BE negativo = déficit de base. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "ATLS 10ª ed."]
  },
  {
    id: "lactato",
    nome: "Lactato",
    sinonimos: ["lactato", "acido latico", "lactato arterial", "lactato venoso", "lactato serico", "lactato plasmatico"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "mmol/L",
    conversoes: [{ unidade: "mEq/L", fator: 1 }, { unidade: "mg/dL", fator: 0.111 }],
    ref: [{ faixa: "todas", min: 0.5, max: 2.0 }],
    critico: { max: 4.0 },
    indicacoes: ["Suspeita de sepse (pacote da 1ª hora) — repetir em 2–4 h se > 2", "Choque de qualquer etiologia, hipoperfusão", "Isquemia mesentérica, convulsão prolongada, intoxicações (metformina, cianeto/fumaça)"],
    preparo: "Sem garrote prolongado e sem fechar a mão; analisar rapidamente (em gelo se demorar). Arterial ou venoso (venoso aceitável para triagem).",
    pedido: "Dosagem de lactato arterial (ou venoso)",
    alto: {
      causas: ["Hipoperfusão: choque séptico, hipovolêmico, cardiogênico", "Isquemia mesentérica/de membro", "Convulsão, exercício intenso", "Metformina (especialmente com insuficiência renal), álcool, adrenalina/salbutamol", "Hepatopatia grave, neoplasias, intoxicação por CO/cianeto", "Garrote prolongado (artefato)"],
      fichas: ["sepse", "choque", "isquemia-mesenterica", "convulsao", "deterioracao-clinica"]
    },
    notas: "Sepse: lactato ≥ 2 mmol/L indica hipoperfusão; choque séptico = vasopressor para PAM ≥ 65 + lactato > 2 apesar de volume (Sepsis-3); ≥ 4 mmol/L indica 30 mL/kg de cristaloide. Conversão: mg/dL ÷ 9 = mmol/L (18 mg/dL ≈ 2 mmol/L). Vale o intervalo do laudo.",
    fontes: ["Surviving Sepsis Campaign (2021)", "Sepsis-3 (Singer, JAMA 2016)", "ILAS — Instituto Latino-Americano de Sepse"]
  },
  {
    id: "sato2-gasometria",
    nome: "Saturação de O2 (gasometria)",
    sinonimos: ["sato2", "sao2", "so2", "saturacao de o2", "saturacao de oxigenio", "saturacao de oxigenio arterial", "sat o2", "o2 sat", "svo2", "svco2"],
    categoria: "gasometria",
    tipo: "quantitativo",
    unidade: "%",
    ref: [{ faixa: "todas", min: 95, max: 100 }],
    indicacoes: ["Avaliar oxigenação (comparar com oximetria de pulso, ex.: intoxicação por CO)", "SvcO2 (cateter central) na monitorização do choque: alvo ≥ 70%"],
    preparo: "Ver pH. Para SvcO2: coletar do cateter venoso central (ponta em cava superior).",
    pedido: "Gasometria arterial (com co-oximetria, se suspeita de CO/metemoglobina)",
    baixo: {
      causas: ["Hipoxemia (ver pO2)", "Metemoglobinemia, carboxi-hemoglobina (oxímetro de pulso superestima)", "SvcO2 baixa: baixo débito, anemia, consumo aumentado"],
      fichas: ["insuficiencia-respiratoria-aguda", "oxigenoterapia", "choque", "intoxicacoes-exogenas"]
    },
    notas: "SatO2 da gasometria pode ser calculada (a partir da pO2) ou medida por co-oximetria — só a medida detecta CO/metemoglobina. Alvo usual de SpO2 92–96% (DPOC retentor 88–92%). Na gasometria venosa a saturação normal é ~70–75%. Vale o intervalo do laudo.",
    fontes: ["BTS — Guideline for oxygen use in adults (2017)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  }
);

/* ===================== URINA TIPO 1 (EAS) E UROCULTURA ===================== */
EXAMES_LAB.push(
  {
    id: "densidade-urina",
    nome: "Densidade urinária",
    sinonimos: ["densidade", "densidade urinaria", "densidade da urina", "peso especifico", "gravidade especifica"],
    categoria: "urina",
    tipo: "quantitativo",
    unidade: "",
    ref: [{ faixa: "todas", min: 1.005, max: 1.030 }],
    indicacoes: ["Parte do exame de urina tipo 1 (EAS)", "Avaliar hidratação e capacidade de concentração renal", "Poliúria (diabetes insípido)"],
    preparo: "Primeira urina da manhã (ou com ≥ 4 h de retenção), jato médio após higiene; entregar em até 2 h.",
    pedido: "Urina tipo 1 (EAS / sumário de urina)",
    alto: { causas: ["Desidratação", "Glicosúria, contraste iodado, proteinúria importante", "SIADH (urina inapropriadamente concentrada)"], fichas: ["diarreia-desidratacao", "hiperglicemia", "hiponatremia"] },
    baixo: { causas: ["Ingesta hídrica elevada, polidipsia primária", "Diabetes insípido", "Diuréticos", "Doença renal crônica (isostenúria ~1.010)"], fichas: ["hipernatremia", "doenca-renal-cronica"] },
    notas: "Fita reagente pode ser imprecisa; refratometria é melhor. Laudos podem escrever \"1015\" (sem vírgula) = 1,015. Vale o intervalo do laudo.",
    fontes: ["SBPC/ML — Recomendações para o exame de urina", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "ph-urina",
    nome: "pH urinário",
    sinonimos: ["ph urinario", "ph da urina", "ph urina", "ph (urina)"],
    categoria: "urina",
    tipo: "quantitativo",
    unidade: "",
    ref: [{ faixa: "todas", min: 5.0, max: 8.0 }],
    indicacoes: ["Parte do EAS", "Litíase (ácido úrico/cistina em urina ácida; estruvita em urina alcalina)", "Suspeita de acidose tubular renal"],
    preparo: "Ver urina tipo 1. Amostra antiga alcaliniza (bactérias).",
    pedido: "Urina tipo 1 (EAS)",
    alto: { causas: ["ITU por bactérias produtoras de urease (Proteus) — cálculo de estruvita", "Dieta vegetariana, vômitos, alcalose", "ATR distal (pH > 5,5 com acidose sistêmica)", "Amostra deixada em temperatura ambiente"], fichas: ["litiase-urinaria", "pielonefrite"] },
    baixo: { causas: ["Dieta rica em proteína, acidose metabólica, cetoacidose", "Gota/litíase úrica"], fichas: ["gota", "litiase-urinaria", "cetoacidose"] },
    notas: "Vale o intervalo do laudo.",
    fontes: ["SBPC/ML — Recomendações para o exame de urina"]
  },
  {
    id: "leucocitos-urina",
    nome: "Leucócitos na urina (piócitos)",
    sinonimos: ["piocitos", "leucocitos urina", "leucocitos na urina", "leucocitos (urina)", "leucocituria", "piuria", "leucocito esterase", "esterase leucocitaria", "leucocitos por campo"],
    categoria: "urina",
    tipo: "quantitativo",
    unidade: "/mL",
    conversoes: [{ unidade: "p/mL", fator: 1 }, { unidade: "/ml", fator: 1 }],
    ref: [{ faixa: "todas", min: 0, max: 10000 }],
    indicacoes: ["Disúria, polaciúria, febre sem foco (criança), dor lombar", "Suspeita de ITU, prostatite, nefrite intersticial"],
    preparo: "Jato médio após higiene (ou sondagem/saco coletor em criança — saco coletor só é útil se negativo); entregar em até 2 h.",
    pedido: "Urina tipo 1 (EAS) e urocultura com antibiograma",
    alto: {
      causas: ["ITU (cistite, pielonefrite)", "Uretrite/cervicite (contaminação), vulvovaginite", "Prostatite", "Piúria estéril: tuberculose renal, nefrite intersticial, litíase, apendicite, Kawasaki, uretrite por clamídia"],
      fichas: ["cistite", "pielonefrite", "itu-infancia", "itu-gestante", "prostatite"]
    },
    notas: "Laudos brasileiros expressam em /mL (ref usual até 10.000/mL) ou por campo (ref usual até 5 por campo de grande aumento) — conferir o laudo. Piúria sozinha não é ITU; com nitrito e clínica, sugere fortemente. Células epiteliais numerosas = provável contaminação. Vale o intervalo do laudo.",
    fontes: ["SBPC/ML — Recomendações para o exame de urina", "AAP — UTI guideline (2011, reafirmada 2016)", "SBU/FEBRASGO — ITU"]
  },
  {
    id: "hemacias-urina",
    nome: "Hemácias na urina",
    sinonimos: ["hemacias urina", "hemacias na urina", "hemacias (urina)", "eritrocitos urina", "hematuria", "sangue oculto urina", "hemoglobina urina", "hemacias por campo", "hemacias dismorficas"],
    categoria: "urina",
    tipo: "quantitativo",
    unidade: "/mL",
    conversoes: [{ unidade: "p/mL", fator: 1 }, { unidade: "/ml", fator: 1 }],
    ref: [{ faixa: "todas", min: 0, max: 10000 }],
    indicacoes: ["Dor lombar/cólica renal, trauma", "Suspeita de glomerulonefrite (edema, HAS, hematúria macroscópica)", "Rastreio de neoplasia urotelial em hematúria persistente (tabagista, > 35–40 anos)"],
    preparo: "Jato médio; evitar coleta durante a menstruação e após exercício intenso ou sondagem.",
    pedido: "Urina tipo 1 (EAS) com pesquisa de dismorfismo eritrocitário, se suspeita glomerular",
    alto: {
      causas: ["Litíase urinária", "ITU (cistite hemorrágica)", "Glomerulonefrites (dismorfismo, cilindros hemáticos, proteinúria)", "Neoplasia de bexiga/rim/próstata", "Trauma, exercício intenso, anticoagulação excessiva", "Menstruação (contaminação)"],
      fichas: ["hematuria", "litiase-urinaria", "sindromes-glomerulares", "tumores-urologicos", "trauma-genitourinario"]
    },
    notas: "Laudos em /mL (ref usual até 10.000/mL) ou por campo (hematúria microscópica: ≥ 3 hemácias por campo de grande aumento — AUA). Fita positiva para sangue sem hemácias no sedimento: pensar em hemoglobinúria (hemólise) ou mioglobinúria (rabdomiólise). Vale o intervalo do laudo.",
    fontes: ["AUA/SUFU — Microhematuria guideline (2020)", "SBPC/ML — Recomendações para o exame de urina"]
  },
  {
    id: "nitrito",
    nome: "Nitrito (urina)",
    sinonimos: ["nitrito", "nitritos", "nitrito urina", "pesquisa de nitrito"],
    categoria: "urina",
    tipo: "qualitativo",
    indicacoes: ["Suspeita de ITU (componente da fita do EAS)"],
    preparo: "Preferir urina com ≥ 4 h de retenção vesical (primeira da manhã).",
    pedido: "Urina tipo 1 (EAS)",
    positivo: {
      causas: ["Bacteriúria por enterobactérias redutoras de nitrato (E. coli, Klebsiella, Proteus)", "Amostra antiga contaminada (falso-positivo)"],
      fichas: ["cistite", "pielonefrite", "itu-infancia", "itu-gestante"],
      conduta: "Alta especificidade para ITU: com sintomas, tratar e colher urocultura (obrigatória em gestante, criança, homem, ITU complicada ou recorrente)."
    },
    negativo: { texto: "NÃO exclui ITU: baixa sensibilidade (Enterococcus, Staphylococcus saprophyticus e Pseudomonas não produzem nitrito; urina pouco tempo na bexiga — lactentes, polaciúria; dieta pobre em nitrato)." },
    notas: "Interpretar com esterase leucocitária/piócitos e clínica.",
    fontes: ["AAP — UTI guideline (2011)", "SBPC/ML — Recomendações para o exame de urina"]
  },
  {
    id: "proteinas-urina",
    nome: "Proteínas na urina (fita)",
    sinonimos: ["proteinas urina", "proteinas na urina", "proteinas (urina)", "proteina urina", "proteinuria", "albumina urina", "proteinas urinarias"],
    categoria: "urina",
    tipo: "qualitativo",
    indicacoes: ["Parte do EAS", "Rastreio de lesão renal (HAS, DM — preferir albuminúria/RAC)", "Gestante com hipertensão (pré-eclâmpsia)", "Edema (síndrome nefrótica)"],
    preparo: "Ver urina tipo 1. Evitar após exercício intenso ou com febre.",
    pedido: "Urina tipo 1 (EAS). Quantificar: relação proteína/creatinina em amostra isolada ou proteinúria de 24 h.",
    positivo: {
      causas: ["Doença glomerular (nefrótica: > 3,5 g/24 h)", "Nefropatia diabética/hipertensiva", "Pré-eclâmpsia", "Transitória: febre, exercício, ICC descompensada", "Ortostática (adolescentes)", "ITU (discreta)"],
      fichas: ["sindromes-glomerulares", "doenca-renal-cronica", "hipertensao-gestacao", "diabetes-tipo-2", "lupus-eritematoso-sistemico"],
      conduta: "Confirmar e quantificar (relação proteína/creatinina urinária ou proteinúria de 24 h); em diabético/hipertenso, preferir relação albumina/creatinina. Gestante: RPC ≥ 0,3 ou ≥ 300 mg/24 h (ou fita ≥ 2+ se não houver outro método) define proteinúria."
    },
    negativo: { texto: "Fita detecta sobretudo albumina e tem baixa sensibilidade para microalbuminúria e cadeias leves (mieloma): não exclui nefropatia diabética inicial." },
    notas: "Resultado em cruzes (traços, 1+ a 4+) ou mg/dL; urina muito concentrada ou alcalina pode dar falso-positivo.",
    fontes: ["KDIGO — CKD Evaluation and Management (2024)", "FEBRASGO/RBEHG — Pré-eclâmpsia (2023)"]
  },
  {
    id: "glicose-urina",
    nome: "Glicose na urina",
    sinonimos: ["glicose urina", "glicose na urina", "glicose (urina)", "glicosuria", "glicose urinaria"],
    categoria: "urina",
    tipo: "qualitativo",
    indicacoes: ["Parte do EAS"],
    preparo: "Ver urina tipo 1.",
    pedido: "Urina tipo 1 (EAS)",
    positivo: {
      causas: ["Hiperglicemia acima do limiar renal (~180 mg/dL): diabetes descompensado", "Uso de inibidores de SGLT2 (dapagliflozina, empagliflozina) — esperado", "Gestação (limiar renal menor)", "Tubulopatia proximal (Fanconi), glicosúria renal"],
      fichas: ["hiperglicemia", "diabetes-tipo-2", "diabetes-tipo-1", "diabetes-gestacao", "cetoacidose"],
      conduta: "Dosar glicemia (capilar/plasmática) e HbA1c; não diagnosticar diabetes pela urina."
    },
    negativo: { texto: "Não exclui diabetes (glicemia abaixo do limiar renal)." },
    fontes: ["SBD — Diretriz 2024", "SBPC/ML — Recomendações para o exame de urina"]
  },
  {
    id: "cetonas-urina",
    nome: "Corpos cetônicos na urina",
    sinonimos: ["cetonas", "cetonas urina", "corpos cetonicos", "corpos cetonicos urina", "cetonuria", "acetona urina"],
    categoria: "urina",
    tipo: "qualitativo",
    indicacoes: ["Hiperglicemia com mal-estar, vômitos, dor abdominal (rastreio de cetoacidose)", "Hiperêmese gravídica, jejum prolongado"],
    preparo: "Ver urina tipo 1; analisar rapidamente (cetonas evaporam).",
    pedido: "Urina tipo 1 (EAS). Preferir beta-hidroxibutirato sérico/capilar na suspeita de cetoacidose.",
    positivo: {
      causas: ["Cetoacidose diabética (com hiperglicemia e acidose)", "Jejum, vômitos, hiperêmese gravídica", "Dieta cetogênica, cetoacidose alcoólica", "Cetoacidose euglicêmica (iSGLT2, gestação)"],
      fichas: ["cetoacidose", "cad-pediatrica", "nauseas-vomitos-gestacao", "hiperglicemia", "abstinencia-alcoolica-grave"],
      conduta: "Com glicemia > 250 mg/dL (ou em uso de iSGLT2 mesmo com glicemia menor): gasometria (pH, HCO3), eletrólitos, ânion gap e cetonemia."
    },
    negativo: { texto: "A fita (nitroprussiato) detecta acetoacetato, não beta-hidroxibutirato (cetona predominante na CAD): negativo não exclui cetoacidose." },
    fontes: ["ADA — Hyperglycemic crises in adults (2024)", "SBD — Diretriz 2024"]
  },
  {
    id: "urocultura",
    nome: "Urocultura",
    sinonimos: ["urocultura", "cultura de urina", "urocultura com antibiograma", "urocultura com tsa", "cultura de urina com antibiograma", "bacteriologia de urina"],
    categoria: "urina",
    tipo: "qualitativo",
    indicacoes: [
      "ITU em gestante (inclusive rastreio de bacteriúria assintomática no pré-natal)",
      "ITU em criança, homem, idoso, ITU complicada, pielonefrite, recorrência ou falha terapêutica",
      "Febre sem foco em lactente",
      "Antes de procedimento urológico com violação de mucosa"
    ],
    preparo: "Colher ANTES do antibiótico. Jato médio após higiene (primeira urina ou ≥ 2–4 h de retenção); em lactente, sondagem vesical ou punção suprapúbica (saco coletor só vale se negativo). Refrigerar se não semear em até 2 h.",
    pedido: "Urocultura com antibiograma (jato médio). HD: ___.",
    positivo: {
      causas: ["ITU (E. coli predomina; Klebsiella, Proteus, Enterococcus, S. saprophyticus)", "Bacteriúria assintomática", "Contaminação (crescimento misto, baixa contagem)"],
      fichas: ["cistite", "pielonefrite", "itu-gestante", "itu-infancia", "prostatite"],
      conduta: "Significativo em jato médio: ≥ 100.000 UFC/mL (em sintomática pode-se valorizar contagens menores, ≥ 1.000–10.000). Sondagem: ≥ 10.000–50.000 UFC/mL (criança: ≥ 50.000 pela AAP). Punção suprapúbica: qualquer crescimento. Ajustar antibiótico pelo antibiograma. Bacteriúria assintomática: tratar só em gestante e antes de procedimento urológico."
    },
    negativo: { texto: "Considerar uso prévio de antibiótico, urina muito diluída, germes de crescimento difícil (tuberculose, Chlamydia, Ureaplasma) — piúria estéril merece investigação." },
    notas: "Crescimento de 3 ou mais espécies ou flora mista = contaminação provável; repetir a coleta.",
    fontes: ["IDSA — Asymptomatic bacteriuria guideline (2019)", "AAP — UTI guideline (2011)", "FEBRASGO — ITU na gestação", "SBPC/ML — Recomendações para coleta"]
  }
);

/* ===================== LÍQUOR ===================== */
EXAMES_LAB.push(
  {
    id: "celulas-liquor",
    nome: "Celularidade do líquor",
    sinonimos: ["celulas liquor", "celularidade", "celularidade liquor", "citologia liquor", "leucocitos liquor", "contagem de celulas liquor", "citologia global", "leucocitos no liquor", "celulas no lcr", "citometria liquor"],
    categoria: "liquor",
    tipo: "quantitativo",
    unidade: "/mm³",
    conversoes: [{ unidade: "/µL", fator: 1 }, { unidade: "/uL", fator: 1 }, { unidade: "/mm3", fator: 1 }, { unidade: "celulas/mm³", fator: 1 }],
    ref: [
      { faixa: "adulto", min: 0, max: 5 },
      { faixa: "crianca", min: 0, max: 5 },
      { faixa: "rn", min: 0, max: 20 }
    ],
    indicacoes: ["Suspeita de meningite/encefalite (febre + cefaleia/rigidez de nuca/alteração de consciência)", "Suspeita de HSA com TC normal", "Sepse neonatal, febre em lactente pequeno", "Guillain-Barré, esclerose múltipla, neoplasia meníngea"],
    preparo: "Excluir contraindicações (sinais de HIC/lesão expansiva — TC antes se déficit focal, papiledema, convulsão recente, imunossupressão, rebaixamento; coagulopatia, plaquetas baixas, infecção no local). Colher glicemia simultânea.",
    pedido: "Líquor: citologia global e diferencial, bioquímica (proteína, glicose, lactato), bacterioscopia (Gram), cultura e, se indicado, PCR viral/painel. Glicemia simultânea.",
    alto: {
      causas: ["Meningite bacteriana (centenas a milhares, predomínio neutrofílico)", "Meningite viral/encefalite herpética (dezenas a centenas, linfomononuclear)", "Tuberculose, fungos (cripto), neurossífilis (linfocítico, glicose baixa em TB/fungo)", "Punção traumática (corrigir: ~1 leucócito por 500–1.000 hemácias)", "HSA, neoplasia meníngea"],
      fichas: ["meningite", "sepse-neonatal", "hemorragia-subaracnoidea", "hiv-infeccao", "sifilis"]
    },
    notas: "Guillain-Barré: dissociação proteíno-citológica (proteína alta, células < 50/mm³). RN: até ~20 células/mm³ pode ser normal (alguns autores aceitam até 30 no primeiro mês); lactentes 1–2 meses até ~10. Antibiótico prévio reduz celularidade e altera o diferencial. Vale o intervalo do laudo.",
    fontes: ["Ministério da Saúde — Guia de Vigilância em Saúde: Meningites (2024)", "IDSA — Bacterial meningitis guideline (2004)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  },
  {
    id: "proteina-liquor",
    nome: "Proteína no líquor (proteinorraquia)",
    sinonimos: ["proteina liquor", "proteinas liquor", "proteinorraquia", "proteinas totais liquor", "proteina no liquor", "proteina lcr"],
    categoria: "liquor",
    tipo: "quantitativo",
    unidade: "mg/dL",
    conversoes: [{ unidade: "g/L", fator: 100 }, { unidade: "mg/L", fator: 0.1 }],
    ref: [
      { faixa: "adulto", min: 15, max: 45 },
      { faixa: "crianca", min: 15, max: 45 },
      { faixa: "rn", min: 20, max: 150 }
    ],
    indicacoes: ["Meningite/encefalite", "Guillain-Barré", "Neoplasia meníngea, bloqueio raquimedular"],
    preparo: "Ver celularidade do líquor.",
    pedido: "Líquor: bioquímica (proteína, glicose) — ver pedido completo em celularidade.",
    alto: {
      causas: ["Meningite bacteriana (> 100–500), tuberculosa, fúngica", "Guillain-Barré (dissociação proteíno-citológica, após a 1ª semana)", "HSA, punção traumática", "Bloqueio raquimedular (síndrome de Froin)", "Neoplasia meníngea, diabetes, hipotireoidismo"],
      fichas: ["meningite", "guillain-barre", "hemorragia-subaracnoidea", "compressao-medular-maligna"]
    },
    baixo: { causas: ["Fístula liquórica, hipertensão intracraniana idiopática, punções repetidas"], fichas: [] },
    notas: "RN tem proteína alta fisiológica (prematuros ainda mais), caindo até o fim do 1º ano. Punção traumática eleva ~1 mg/dL para cada 1.000 hemácias/mm³. Vale o intervalo do laudo.",
    fontes: ["Henry's Clinical Diagnosis and Management by Laboratory Methods", "Ministério da Saúde — Guia de Vigilância: Meningites"]
  },
  {
    id: "glicose-liquor",
    nome: "Glicose no líquor (glicorraquia)",
    sinonimos: ["glicose liquor", "glicorraquia", "glicose no liquor", "glicose lcr", "glicose (liquor)"],
    categoria: "liquor",
    tipo: "quantitativo",
    unidade: "mg/dL",
    conversoes: [{ unidade: "mmol/L", fator: 18 }],
    ref: [{ faixa: "adulto", min: 40, max: 70 }],
    indicacoes: ["Meningite (diferenciar bacteriana/tuberculosa/fúngica de viral)"],
    preparo: "Colher glicemia (soro/capilar) no mesmo momento.",
    pedido: "Líquor: glicose, com glicemia simultânea.",
    alto: { causas: ["Hiperglicemia sistêmica (reflete a glicemia)"], fichas: ["hiperglicemia"] },
    baixo: {
      causas: ["Meningite bacteriana", "Meningite tuberculosa, fúngica (criptococo)", "Carcinomatose meníngea", "HSA (alguns dias após)", "Hipoglicemia sistêmica"],
      fichas: ["meningite", "tuberculose-pulmonar", "hiv-infeccao", "hipoglicemia"]
    },
    notas: "Interpretar pela relação glicose liquórica/sérica (normal ~0,6; < 0,4 sugere meningite bacteriana; RN tem relação maior, ~0,8). Glicorraquia < 40 mg/dL é anormal no adulto. Vale o intervalo do laudo.",
    fontes: ["IDSA — Bacterial meningitis guideline (2004)", "Henry's Clinical Diagnosis and Management by Laboratory Methods"]
  }
);

