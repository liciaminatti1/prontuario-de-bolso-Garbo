// Anemia ferropriva no adulto
registrarFicha({
  id: "anemia-ferropriva",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Anemia ferropriva no adulto (ferro oral, ferro IV e transfusão)",
  resumo: "Anemia microcítica e hipocrômica com ferritina baixa. Tratar com ferro oral (1 vez ao dia ou em dias alternados), investigar sempre a causa da perda, usar ferro IV quando o oral falha ou não é possível, e transfundir só se instabilidade ou sintomas graves.",
  palavrasChave: "anemia ferropriva deficiencia de ferro ferropenia sulfato ferroso ferro elementar ferro endovenoso sacarato de hidroxido ferrico noripurum carboximaltose ferrica ganzoni transfusao concentrado de hemacias ferritina menorragia sangramento",
  critico: {
    tempo: "Instável ou sintomática: PS",
    texto: "Dor torácica, dispneia em repouso, síncope, hipotensão ou sangramento ativo → PS. Anemia ferropriva estável, mesmo com Hb muito baixa, em geral se trata com ferro (oral ou IV) e não com transfusão."
  },
  alarmes: [
    "Dor torácica, dispneia em repouso, síncope, sinais de IC, hipotensão",
    "Sangramento ativo (melena, hematêmese, enterorragia, menorragia volumosa)",
    "Homem ou mulher pós-menopausa com ferropenia (investigar câncer digestivo)",
    "Perda de peso, disfagia, mudança do hábito intestinal, massa abdominal",
    "Sem resposta ao ferro oral bem tomado em 4 semanas",
    "Gestante com Hb < 10 no 2º–3º trimestre ou perto do parto (considerar ferro IV)"
  ],
  condutaInicial: [
    "Confirmar: Hb baixa (OMS 2024), VCM e HCM baixos, RDW alto, ferritina < 30 ng/mL (ou até 100 com inflamação e saturação de transferrina < 20%)",
    "Avaliar estabilidade e sintomas",
    "Investigar a causa: menstruação, sangramento digestivo, dieta, parasitose, celíaca, bariátrica, doação de sangue, AINE/anticoagulante",
    "Iniciar ferro oral: 1 comprimido de sulfato ferroso (40 mg de ferro) 1 vez ao dia, ou 2–3 comprimidos em dias alternados (melhor absorção e menos efeitos)",
    "Tratar a causa (menorragia, parasitose, suspender AINE) e encaminhar para endoscopia/colonoscopia quando indicado",
    "Reavaliar Hb em 2–4 semanas: esperar aumento ≥ 1 g/dL",
    "Ferro IV se intolerância, falha, má absorção, perdas contínuas maiores que a reposição oral ou necessidade de correção rápida"
  ],
  fataisExcluir: [
    "Hemorragia digestiva ativa",
    "Câncer colorretal ou gástrico",
    "Isquemia miocárdica por anemia grave",
    "Anafilaxia ao ferro IV (raro; administrar onde houver suporte)"
  ],
  proximaDecisao: "Hb subiu ≥ 1 g/dL em 2–4 semanas → manter ferro até normalizar Hb e mais 3 meses (repor estoque; ferritina > 50 ng/mL). Sem resposta → conferir adesão e modo de tomar, sangramento contínuo, celíaca, H. pylori, gastrite atrófica, IBP, inflamação ou diagnóstico errado (talassemia) → ferro IV e investigar.",
  clinica: {
    anamnese: [
      "Cansaço, falta de ar aos esforços, palpitação, cefaleia, queda de cabelo, pica (gelo, terra), pernas inquietas",
      "Menstruação: duração, coágulos, trocas de absorvente, inundações noturnas",
      "Sangramento digestivo, uso de AINE, AAS, anticoagulante",
      "Dieta pobre em carne, vegetarianismo, gestação, amamentação, doação de sangue",
      "Bariátrica, gastrectomia, doença celíaca, DII, uso crônico de IBP",
      "Intolerância a ferro prévio (náusea, dor epigástrica, constipação)"
    ],
    exameFisico: [
      "Palidez, taquicardia, sopro sistólico",
      "Coiloníquia, glossite, queilite angular",
      "Sinais de IC (edema, crepitações, turgência jugular)",
      "Abdome: massa, visceromegalia; toque retal se suspeita de sangramento"
    ],
    diferenciais: [
      { dx: "Traço talassêmico", pista: "Ferritina normal, hemácias normais ou altas, RDW normal; eletroforese de Hb" },
      { dx: "Anemia da inflamação", pista: "PCR alta, ferritina normal ou alta; pode coexistir com ferropenia" },
      { dx: "Anemia sideroblástica", pista: "Ferritina alta, sideroblastos em anel (raro)" },
      { dx: "Anemia mista (ferro + B12/folato)", pista: "VCM normal com RDW muito alto" }
    ],
    gravidade: [
      "Leve: Hb 11,0–11,9 (mulher) ou 11,0–12,9 g/dL (homem)",
      "Moderada: Hb 8,0–10,9 g/dL",
      "Grave: Hb < 8,0 g/dL (OMS 2024 para adultos não gestantes)",
      "Sintomática em repouso ou instável: urgência, independentemente do valor"
    ]
  },
  exames: [
    {
      nome: "Hemograma e perfil de ferro",
      pedido: "Hemograma completo com reticulócitos, ferritina, ferro sérico, saturação de transferrina, PCR.",
      porQue: "Confirmar ferropenia e acompanhar resposta.",
      esperar: "Microcitose, hipocromia, RDW alto, ferritina baixa, saturação < 20%.",
      interpretacao: "Ferritina < 30 ng/mL confirma. Com PCR alta, ferritina < 100 e saturação < 20% sugere ferropenia associada à inflamação.",
      limitacoes: "Não dosar ferro nas 24 h após tomar o comprimido (valor falsamente alto)."
    },
    {
      nome: "Exames da causa",
      pedido: "Parasitológico de fezes (3 amostras), sangue oculto nas fezes, antitransglutaminase IgA + IgA total, urina tipo 1, creatinina. Endoscopia digestiva alta e colonoscopia: homem, mulher pós-menopausa, ≥ 50 anos ou sintomas digestivos. Ultrassonografia transvaginal: sangramento uterino anormal.",
      porQue: "Toda ferropenia tem causa; no adulto, perda de sangue é a principal.",
      esperar: "Mulher pré-menopausa: menorragia é a causa mais comum.",
      interpretacao: "Ver ficha Investigação da anemia.",
      limitacoes: "Sangue oculto negativo não exclui lesão digestiva."
    },
    {
      nome: "Controle do tratamento",
      pedido: "Hemoglobina (hemograma) em 2–4 semanas após início do ferro; hemograma e ferritina ao final do tratamento.",
      porQue: "Confirmar resposta e reposição dos estoques.",
      esperar: "Aumento de Hb ≥ 1 g/dL em 2–4 semanas; normalização em 6–8 semanas na maioria.",
      interpretacao: "Sem aumento: investigar falha (adesão, perda contínua, má absorção, diagnóstico).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Sulfato ferroso (40 mg de ferro elementar por comprimido)",
      linha: "l1",
      dose: "40–80 mg de ferro elementar 1 vez ao dia OU 80–120 mg em dias alternados (máx usual 120 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia ou em dias alternados, 1 h antes de refeição, com suco cítrico ou vitamina C",
      duracao: "Até normalizar Hb + 3 meses",
      monitorizacao: "Hb em 2–4 semanas; efeitos GI (náusea, dor epigástrica, constipação, fezes escuras)",
      contraindicacoes: "Hemocromatose, anemia não ferropriva, transfusões repetidas",
      ajustes: "Doses maiores e fracionadas não aumentam a absorção (hepcidina) e dão mais efeitos adversos. Se intolerância: tomar com alimento, reduzir a dose ou usar em dias alternados. Separar 2 h de antiácido, IBP, cálcio, leite, café, chá, levotiroxina, quinolona e tetraciclina. RENAME"
    },
    {
      droga: "Sacarato de hidróxido férrico (ferro IV) 100 mg/5 mL",
      linha: "alt",
      dose: "100–200 mg por aplicação, até completar o déficit (Ganzoni)",
      via: "IV",
      intervalo: "Até 3 vezes por semana",
      duracao: "Até repor o déficit total calculado",
      monitorizacao: "PA e sinais de reação durante e por 30 min após; Hb e ferritina 4 semanas após a última dose",
      contraindicacoes: "Anemia não ferropriva, sobrecarga de ferro, hipersensibilidade prévia a ferro IV, 1º trimestre de gestação, infecção ativa (bacteremia)",
      ajustes: "Diluição: 100 mg (5 mL) em no máximo 100 mL de SF 0,9%, infundir em no mínimo 15 min; 200 mg em no máximo 200 mL em no mínimo 30 min. Dose única máxima pela bula europeia: 7 mg/kg, sem passar de 500 mg, com infusão mais longa (conferir a bula Anvisa); na rotina, 200 mg por aplicação. Só SF 0,9%; nunca IM. Indicações: intolerância ou falha do oral, má absorção (bariátrica, celíaca, DII ativa), perdas contínuas, DRC, gestação 2º–3º trimestre com anemia importante, pré-operatório. Em ambiente com material de reanimação. RENAME (uso hospitalar/ambulatorial especializado)"
    },
    {
      droga: "Carboximaltose férrica",
      linha: "alt",
      dose: "Até 20 mg/kg por aplicação (máx 1.000 mg)",
      via: "IV",
      intervalo: "1 vez por semana se necessária 2ª dose",
      duracao: "1–2 aplicações em geral",
      monitorizacao: "Fósforo (hipofosfatemia), PA",
      contraindicacoes: "As do ferro IV",
      ajustes: "Diluir em SF 0,9% (500–1.000 mg em até 250 mL) e infundir em ≥ 15 min. Menos visitas; disponibilidade no SUS variável"
    },
    {
      droga: "Concentrado de hemácias",
      linha: "adj",
      dose: "1 unidade e reavaliar (eleva Hb em cerca de 1 g/dL no adulto)",
      via: "IV",
      intervalo: "Infundir em 1–2 h (máx 4 h); idoso/IC: mais lento e considerar furosemida",
      duracao: "—",
      monitorizacao: "Sinais vitais antes, nos primeiros 15 min e ao fim; sobrecarga de volume, reação transfusional",
      contraindicacoes: "Paciente estável sem sintomas importantes (tratar com ferro)",
      ajustes: "Estratégia restritiva (AABB 2023): Hb < 7 g/dL; < 8 g/dL se doença cardiovascular prévia ou cirurgia ortopédica/cardíaca; ou sintomas graves e instabilidade em qualquer Hb. Após transfusão, iniciar ferro para repor estoques"
    }
  ],
  destino: {
    agora: [
      "Estável: ferro oral na UBS e investigação da causa",
      "Instável ou sintomática em repouso → PS"
    ],
    reavaliar: [
      "Hb em 2–4 semanas",
      "Hemograma e ferritina ao fim do tratamento; depois a cada 3 meses por 1 ano (recidiva sugere perda não resolvida)"
    ],
    alta: [
      "Hb normal, ferritina reposta e causa tratada"
    ],
    observacao: [
      "Ferro IV: observar 30 minutos após a infusão"
    ],
    internacao: [
      "Anemia com instabilidade, IC, angina, sangramento ativo (via PS)"
    ],
    transferencia: [
      "Gastroenterologia/endoscopia: homem, pós-menopausa, ≥ 50 anos, sintomas digestivos, falha do ferro oral sem causa",
      "Ginecologia: menorragia que não responde ao tratamento clínico",
      "Hematologia ou serviço de infusão: indicação de ferro IV (conforme rede local), refratariedade"
    ]
  },
  prescricao: {
    ambulatorial: "ANEMIA FERROPRIVA — FERRO ORAL (adulto)\nUSO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ------ 60 comprimidos\n   Tomar 1 comprimido 1 vez ao dia (ou 2 comprimidos em dias alternados), 1 hora antes do almoço, com suco de laranja ou limão. Não tomar com leite, café, chá ou antiácido. Manter por 3 meses após a hemoglobina normalizar.\n   (Se náusea ou dor de estômago: tomar após uma refeição leve ou passar para dias alternados.)\n\nSE MENORRAGIA (conforme avaliação ginecológica)\n2. Ácido tranexâmico 250 mg --------------------- 60 comprimidos\n   Tomar 4 comprimidos (1 g) de 8 em 8 horas nos dias de sangramento intenso, por até 5 dias por ciclo (não usar se trombose prévia).\n\nSE PARASITOLÓGICO POSITIVO PARA ANCILOSTOMÍDEO\n3. Albendazol 400 mg ----------------------------- 1 comprimido\n   Tomar em dose única.\n\nPEDIDO DE EXAMES\nHemograma em 2–4 semanas. Ao final: hemograma e ferritina. Investigação da causa conforme ficha (parasitológico, sangue oculto, antitransglutaminase, endoscopia e colonoscopia quando indicadas).",
    hospitalar: "FERRO ENDOVENOSO — SACARATO DE HIDRÓXIDO FÉRRICO (sala de medicação / hospital-dia)\nCálculo do déficit (Ganzoni): ferro total (mg) = peso (kg) × (15 − Hb atual) × 2,4 + 500. Ex.: 60 kg, Hb 8 → 60 × 7 × 2,4 + 500 ≈ 1.508 mg → cerca de 15 ampolas de 100 mg.\n1. Sacarato de hidróxido férrico 100 mg/5 mL — 200 mg (2 ampolas) + SF 0,9% 200 mL IV em bomba ou gotejamento em no mínimo 30 minutos (100 mg em 100 mL em no mínimo 15 minutos). Repetir até 3 vezes por semana até completar a dose total.\n2. Verificar PA, FC e sintomas antes, aos 15 minutos e ao fim; observar 30 minutos após.\n3. Reação leve (rubor, mialgia, aperto torácico sem hipotensão): parar a infusão, aguardar 15 minutos e reiniciar mais devagar. Reação com hipotensão, broncoespasmo ou edema: suspender e tratar como anafilaxia (adrenalina 0,5 mg IM).\n4. Não administrar junto com ferro oral (suspender o oral durante o esquema IV).\n\nTRANSFUSÃO (somente se indicada)\n1. Concentrado de hemácias 1 unidade IV em 2 horas (idoso ou IC: em 3–4 horas; considerar furosemida 20 mg IV entre unidades).\n2. Reavaliar sintomas e Hb antes de nova unidade. Iniciar reposição de ferro após."
  },
  orientacoesRetorno: [
    "Tome o ferro 1 vez ao dia (ou em dias alternados, se orientado), longe de leite, café e chá; suco de laranja ajuda a absorver",
    "As fezes ficam escuras com o ferro; isso é esperado. Fezes pretas e pegajosas com mal-estar ou tontura não são normais: procure atendimento",
    "Continue o ferro por 3 meses depois que a anemia melhorar, para encher o estoque",
    "Coma carnes, feijão, lentilha, folhas verde-escuras, com uma fruta cítrica na refeição",
    "Faça os exames e a endoscopia/colonoscopia se pedidas: é importante achar a causa",
    "Volte imediatamente se: falta de ar em repouso, dor no peito, desmaio, sangramento intenso",
    "Retorno com hemograma em 2–4 semanas"
  ],
  tabelas: [
    {
      titulo: "Ferro oral × ferro IV",
      colunas: ["Situação", "Preferência"],
      linhas: [
        ["Ferropenia estável, tolera via oral", "Ferro oral 1×/dia ou dias alternados"],
        ["Intolerância ao oral apesar de ajuste, ou sem resposta em 4 semanas", "Ferro IV"],
        ["Má absorção: bariátrica, celíaca ativa, DII ativa, gastrite atrófica", "Ferro IV"],
        ["Perda contínua maior que a reposição oral (ex.: angiodisplasia)", "Ferro IV"],
        ["Gestante 2º–3º trimestre com anemia importante ou perto do parto", "Ferro IV"],
        ["DRC em diálise ou com eritropoetina", "Ferro IV (nefrologia)"],
        ["Instabilidade, angina, IC por anemia", "Transfusão + ferro depois"]
      ],
      nota: "Ferro IV: 1º trimestre de gestação e infecção ativa são contraindicações."
    }
  ],
  fontes: [
    "British Society of Gastroenterology — Guidelines for the management of iron deficiency anaemia in adults (Gut, 2021)",
    "OMS — Guideline on haemoglobin cutoffs to define anaemia (2024) e Guideline on use of ferritin concentrations (2020)",
    "AABB/ICTMG — International guidelines for red blood cell transfusion (JAMA, 2023)",
    "Ministério da Saúde — Guia para uso de hemocomponentes (2015) e RENAME (versão vigente)",
    "Anvisa — Bula de sacarato de hidróxido férrico 20 mg/mL (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
