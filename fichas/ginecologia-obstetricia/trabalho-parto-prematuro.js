// Trabalho de parto prematuro
registrarFicha({
  id: "trabalho-parto-prematuro",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Trabalho de parto prematuro (TPP)",
  resumo: "Contrações uterinas regulares com modificação cervical entre 22 e 36 semanas e 6 dias. Objetivo: ganhar 48 h para corticoide antenatal, neuroproteção com magnésio (< 32 semanas), profilaxia para estreptococo do grupo B e transferência para centro com UTI neonatal.",
  palavrasChave: "tpp trabalho de parto prematuro pre termo prematuridade tocolise nifedipino nifedipina atosibano tractocile indometacina corticoide antenatal betametasona dexametasona neuroprotecao sulfato de magnesio estreptococo grupo b gbs profilaxia penicilina colo curto",
  critico: {
    tempo: "Corticoide + transferência",
    texto: "Entre 24 e 34 semanas: betametasona na 1ª hora, tocólise por até 48 h se sem contraindicação, MgSO₄ se < 32 semanas e parto iminente, e profilaxia para GBS. Transferir para maternidade com UTI neonatal antes do parto."
  },
  alarmes: [
    "Dilatação avançada ou bolsa protrusa (parto iminente: não transferir sem equipe)",
    "Febre, taquicardia materna ou fetal, líquido com odor (corioamnionite: tocólise contraindicada)",
    "Sangramento com dor e hipertonia (DPP)",
    "CTG não tranquilizadora",
    "Dispneia ou dor torácica durante tocólise (edema pulmonar)",
    "Pré-eclâmpsia com sinais de gravidade"
  ],
  condutaInicial: [
    "Confirmar IG (USG precoce de preferência) e avaliar contrações (frequência em 1 h)",
    "Exame especular: perda de líquido? Toque cervical só se membranas íntegras e placenta prévia excluída",
    "BCF/CTG; USG (apresentação, líquido, placenta, peso, colo por via transvaginal)",
    "Buscar causa: urina tipo 1 e urocultura, sinais de infecção, sangramento",
    "Diagnóstico: contrações regulares (≥ 4 em 20 min ou ≥ 8 em 60 min) com dilatação ≥ 2–3 cm ou modificação cervical progressiva",
    "24–34 semanas: corticoide + tocólise (nifedipino) por 48 h; < 32 semanas: MgSO₄ neuroproteção; GBS desconhecido ou positivo: penicilina"
  ],
  fataisExcluir: [
    "Corioamnionite / infecção intra-amniótica",
    "Descolamento prematuro de placenta",
    "Rotura prematura de membranas",
    "Pielonefrite",
    "Pré-eclâmpsia grave"
  ],
  proximaDecisao: "Contrações sem modificação cervical (falso trabalho de parto): observar 2–6 h, reavaliar o colo; colo estável e comprimento cervical ≥ 30 mm → alta com orientação. TPP confirmado < 34 semanas: tocólise, corticoide e transferência. ≥ 34 semanas: não fazer tocólise nem corticoide de rotina; assistir o parto com profilaxia GBS se indicada.",
  clinica: {
    anamnese: [
      "IG (DUM e USG), contrações (início, frequência, intensidade), perda de líquido ou sangue",
      "Parto prematuro prévio, colo curto, gemelaridade, polidrâmnio, cirurgia cervical",
      "Febre, disúria, corrimento",
      "Rastreio de GBS (swab 35–37 semanas) se já realizado",
      "Uso de progesterona, cerclagem"
    ],
    exameFisico: [
      "Sinais vitais maternos (febre e taquicardia sugerem infecção)",
      "Dinâmica uterina por 10–20 min com a mão no fundo",
      "Tônus uterino entre contrações (hipertonia = DPP)",
      "Especular: líquido, sangue, colo",
      "Toque: dilatação, apagamento, altura da apresentação (se sem RPM e sem prévia)"
    ],
    diferenciais: [
      { dx: "Falso trabalho de parto (Braxton-Hicks)", pista: "Contrações irregulares, colo sem modificação, melhoram com repouso" },
      { dx: "DPP", pista: "Dor contínua, hipertonia, sangramento" },
      { dx: "Infecção urinária / pielonefrite", pista: "Disúria, febre, Giordano positivo" },
      { dx: "Apendicite, colecistite", pista: "Dor localizada, sinais peritoneais" },
      { dx: "Corioamnionite", pista: "Febre, taquicardia fetal, útero doloroso" }
    ],
    gravidade: [
      "Periviabilidade (22–24 semanas): decisão individualizada com a família e a neonatologia",
      "Dilatação ≥ 4 cm e < 34 semanas: tocólise tem pouca chance de sucesso, priorizar corticoide e magnésio",
      "Colo ≥ 30 mm na USG transvaginal: baixo risco de parto em 7 dias"
    ]
  },
  exames: [
    {
      nome: "Comprimento do colo (USG transvaginal)",
      pedido: "Ultrassonografia transvaginal para medida do comprimento do colo uterino.",
      porQue: "Diferenciar TPP verdadeiro de falso em casos duvidosos.",
      esperar: "≥ 30 mm.",
      interpretacao: "< 20 mm: alto risco; 20–29 mm: risco intermediário; ≥ 30 mm: baixo risco de parto em 7 dias.",
      limitacoes: "Não realizar se RPM. Depende de técnica."
    },
    {
      nome: "Infecção",
      pedido: "Urina tipo 1 e urocultura. Hemograma. PCR. Swab vaginal e retal para estreptococo do grupo B (cultura), se não houver resultado.",
      porQue: "Infecção é causa frequente e contraindica tocólise se intra-amniótica.",
      esperar: "Normais.",
      interpretacao: "Bacteriúria: tratar (ver itu-gestante). Leucocitose com febre: pensar corioamnionite.",
      limitacoes: "Corticoide eleva leucócitos por 3–5 dias."
    },
    {
      nome: "Vitalidade e USG obstétrica",
      pedido: "Cardiotocografia. USG obstétrica com biometria, apresentação, placenta e líquido amniótico.",
      porQue: "Peso estimado e apresentação definem via de parto e prognóstico.",
      esperar: "—",
      interpretacao: "Oligoâmnio sugere RPM.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Nifedipino (tocólise)",
      linha: "l1",
      dose: "Ataque 20 mg VO; se contrações persistirem, novas doses de 10–20 mg conforme protocolo; manutenção 20 mg",
      via: "VO",
      intervalo: "Manutenção de 6/6 h a 8/8 h",
      duracao: "48 h (tempo do corticoide)",
      monitorizacao: "PA e FC materna a cada 30 min na 1ª hora; BCF; cefaleia, rubor",
      contraindicacoes: "Hipotensão (PA < 90/50), cardiopatia, uso de MgSO₄ concomitante exige vigilância",
      ajustes: "Usar comprimido de liberação imediata (10 mg) ou retard 20 mg conforme disponibilidade. Não usar sublingual. Dose máxima diária: conferir protocolo local (habitualmente até 120 mg/dia)"
    },
    {
      droga: "Atosibano",
      linha: "alt",
      dose: "Ataque 6,75 mg IV em 1 min; 18 mg/h (300 mcg/min) por 3 h; depois 6 mg/h (100 mcg/min)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até 48 h (total máximo 330 mg)",
      monitorizacao: "Contrações, BCF; poucos efeitos maternos",
      contraindicacoes: "< 24 ou > 33 semanas (bula), RPM > 30 semanas, infecção intrauterina, DPP",
      ajustes: "Diluição: 2 frascos de 37,5 mg/5 mL (75 mg) em SF 0,9% para 100 mL (0,75 mg/mL): 24 mL/h por 3 h e depois 8 mL/h. Preferir se cardiopatia, gemelar ou contraindicação ao nifedipino. Custo alto"
    },
    {
      droga: "Indometacina",
      linha: "alt",
      dose: "Ataque 50–100 mg; depois 25 mg",
      via: "VO ou retal",
      intervalo: "6/6 h",
      duracao: "Máximo 48 h",
      monitorizacao: "Líquido amniótico",
      contraindicacoes: "≥ 32 semanas (fechamento do ducto arterioso, oligoâmnio), plaquetopenia, doença renal ou péptica, asma sensível a AINE",
      ajustes: "Só < 32 semanas"
    },
    {
      droga: "Betametasona (corticoide antenatal)",
      linha: "l1",
      dose: "12 mg",
      via: "IM",
      intervalo: "24/24 h, 2 doses",
      duracao: "1 ciclo; resgate único se novo risco ≥ 7–14 dias após o 1º e < 34 semanas",
      monitorizacao: "Glicemia (sobe por 3–5 dias, inclusive em diabéticas)",
      contraindicacoes: "Infecção sistêmica grave não tratada",
      ajustes: "Indicação: 24 a 33 semanas e 6 dias com risco de parto em 7 dias; considerar a partir de 22–23 semanas se for oferecido suporte neonatal. Alternativa: dexametasona 6 mg IM 12/12 h, 4 doses. 34–36 semanas e 6 dias: uso individualizado (não em diabetes pré-gestacional)"
    },
    {
      droga: "Sulfato de magnésio (neuroproteção fetal)",
      linha: "l1",
      dose: "Ataque 4 g IV em 20–30 min; manutenção 1 g/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até o parto ou máximo 24 h",
      monitorizacao: "Reflexo patelar, FR ≥ 16, diurese ≥ 25 mL/h; gluconato de cálcio à beira do leito",
      contraindicacoes: "Miastenia gravis, bloqueio AV",
      ajustes: "Indicação: < 32 semanas com parto iminente (dilatação ≥ 4 cm ou parto indicado). Reduz paralisia cerebral. Não é tocolítico. Creatinina alterada: reduzir manutenção"
    },
    {
      droga: "Penicilina G cristalina (profilaxia GBS)",
      linha: "l1",
      dose: "Ataque 5 milhões UI; manutenção 2,5–3 milhões UI",
      via: "IV",
      intervalo: "4/4 h",
      duracao: "Até o parto; suspender se TPP inibido e cultura negativa",
      monitorizacao: "Alergia",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alternativa: ampicilina 2 g IV e depois 1 g 4/4 h. Alergia sem anafilaxia: cefazolina 2 g IV e depois 1 g 8/8 h. Alergia grave: clindamicina 900 mg IV 8/8 h (se sensível) ou vancomicina 20 mg/kg IV 8/8 h (máx. 2 g/dose)"
    },
    {
      droga: "Terbutalina / salbutamol IV (betamiméticos) para tocólise prolongada; progesterona após tocólise; tocólise de manutenção",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Betamiméticos: efeitos cardiovasculares graves (edema pulmonar, arritmia) — não usar como tocolítico de rotina. Tocólise além de 48 h não melhora desfecho",
      ajustes: "Terbutalina só em dose única para taquissistolia/reanimação intrauterina"
    }
  ],
  destino: {
    agora: [
      "< 34 semanas: iniciar corticoide e tocólise e regular vaga em maternidade com UTI neonatal (transporte intraútero é melhor)",
      "Parto iminente: não transferir; chamar pediatra/neonatologista e preparar reanimação neonatal"
    ],
    reavaliar: [
      "Dinâmica uterina e BCF de 30/30 min; PA e FC materna",
      "Toque após 2–6 h para confirmar/afastar modificação cervical"
    ],
    alta: [
      "Falso trabalho de parto: contrações cessaram, colo sem modificação em 2–6 h (e/ou colo ≥ 30 mm), feto bem; retorno ao pré-natal em até 1 semana"
    ],
    observacao: [
      "Contrações sem modificação cervical inicial: 2–6 h com reavaliação"
    ],
    internacao: [
      "TPP confirmado",
      "Após 48 h de tocólise e corticoide completo: suspender tocólise e manter vigilância"
    ],
    transferencia: [
      "Maternidade de alto risco com UTI neonatal para < 34 semanas (ou peso estimado < 2.000 g), com acesso venoso e medicação em curso"
    ]
  },
  prescricao: {
    hospitalar: "TRABALHO DE PARTO PREMATURO (IG: ___ semanas; peso: ___ kg)\n1. Dieta livre (zero se parto iminente).\n2. Repouso relativo em decúbito lateral; acesso venoso.\n3. Betametasona 12 mg IM agora; repetir em 24 h (24–33 sem e 6 dias).\n4. Nifedipino 20 mg VO agora; se contrações persistirem, nova dose conforme protocolo; manutenção 20 mg VO de 8/8 h por 48 h.\n   OU (se contraindicado) Atosibano: ataque 6,75 mg (0,9 mL) IV em 1 min; solução 75 mg (2 frascos de 5 mL) em SF 0,9% q.s.p. 100 mL: 24 mL/h por 3 h, depois 8 mL/h até 48 h.\n5. Se < 32 semanas e parto iminente: sulfato de magnésio 50% 8 mL (4 g) + água destilada 12 mL IV em 20–30 min; manutenção 50% 10 mL (5 g) + SF 0,9% 490 mL a 100 mL/h (1 g/h) até o parto (máx. 24 h). Gluconato de cálcio 10% 10 mL à beira do leito.\n6. Se GBS positivo ou desconhecido: penicilina G cristalina 5.000.000 UI IV em SF 0,9% 100 mL em 30 min; depois 2.500.000 UI IV de 4/4 h até o parto (suspender se TPP inibido e cultura negativa).\n7. Exames: hemograma, urina tipo 1, urocultura, swab vaginal e retal para GBS, USG obstétrica, USG transvaginal (colo).\n8. Controles: PA e FC materna de 30/30 min na 1ª hora e depois de 4/4 h; dinâmica uterina e BCF de 30/30 min; reflexos, FR e diurese de 1/1 h se MgSO₄; glicemia capilar se diabética."
  },
  orientacoesRetorno: [
    "Se for para casa: repouso relativo não é obrigatório, mas evite esforço intenso até o retorno",
    "Voltar imediatamente se: contrações regulares (mais de 3 em 30 minutos, mesmo sem dor forte), perda de líquido, sangramento, pressão na parte baixa da barriga, bebê mexendo menos, febre",
    "Levar o cartão da gestante em toda consulta",
    "Retornar ao pré-natal em até 1 semana; informar a internação para a equipe da UBS"
  ],
  tabelas: [
    {
      titulo: "Resumo por idade gestacional",
      colunas: ["IG", "Corticoide", "Tocólise", "MgSO₄", "GBS"],
      linhas: [
        ["22–23 sem e 6 d", "Individualizar com família/neonato", "Individualizar", "Individualizar", "Sim, se viabilidade considerada"],
        ["24–31 sem e 6 d", "Sim", "Sim (48 h)", "Sim, se parto iminente", "Sim"],
        ["32–33 sem e 6 d", "Sim", "Sim (48 h)", "Não", "Sim"],
        ["34–36 sem e 6 d", "Individualizar", "Não", "Não", "Sim, se GBS + ou desconhecido"]
      ],
      nota: "MS 2022, OMS 2022, ACOG. Contraindicações à tocólise: corioamnionite, DPP, sofrimento fetal, malformação letal, óbito fetal, pré-eclâmpsia grave, instabilidade materna."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "OMS — Recommendations on antenatal corticosteroids for improving preterm birth outcomes (2022) e Recommendations on interventions to improve preterm birth outcomes (2015)",
    "FEBRASGO — Tratado de Obstetrícia (2019)",
    "ACOG — Practice Bulletin nº 171: Management of preterm labor (2016, reafirmado) e Committee Opinion nº 455: Magnesium sulfate for neuroprotection (2010, reafirmado)",
    "ACOG — Committee Opinion nº 797: Prevention of group B streptococcal early-onset disease in newborns (2020)",
    "Bula de atosibano (ANVISA)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
