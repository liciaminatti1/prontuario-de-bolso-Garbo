// Anemia ferropriva na criança — prevenção e tratamento
registrarFicha({
  id: "anemia-ferropriva-crianca",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Anemia ferropriva na criança — prevenção e tratamento",
  resumo: "Deficiência de ferro é a carência nutricional mais comum na infância, com pico entre 6 e 24 meses e na adolescência. Ficha com suplementação profilática (PNSF/SBP), diagnóstico (Hb pelos cortes da OMS 2024, ferritina) e tratamento com ferro oral.",
  palavrasChave: "anemia ferropriva deficiencia de ferro sulfato ferroso ferro elementar suplementacao profilatica pnsf ferritina hemoglobina microcitose hipocromia geofagia pica prematuro leite de vaca",
  critico: {
    tempo: "Hb 30 dias: deve subir ≥ 1 g/dL",
    texto: "Tratamento: 3–6 mg/kg/dia de ferro elementar VO. Hemograma em 30–45 dias: sem aumento de ≥ 1 g/dL, rever adesão, dose, perdas e diagnóstico. Manter por 3–6 meses (repor estoques)."
  },
  alarmes: [
    "Hb < 7 g/dL, sinais de insuficiência cardíaca (taquicardia, hepatomegalia, edema, dispneia) ou instabilidade hemodinâmica",
    "Plaquetopenia, leucopenia ou blastos no hemograma (pensar em leucemia/aplasia)",
    "Hepatoesplenomegalia, linfonodomegalia, icterícia, reticulocitose (anemia hemolítica)",
    "Sangramento visível (fezes com sangue, melena, menorragia em adolescente)",
    "Ausência de resposta a ferro oral bem tomado por 4 semanas",
    "Anemia com baixo ganho de peso, diarreia crônica (doença celíaca, DII, má absorção)"
  ],
  condutaInicial: [
    "Prevenção (todas as crianças): aleitamento materno exclusivo até 6 meses; clampeamento tardio do cordão; alimentação complementar rica em ferro (carnes, vísceras, feijão) com vitamina C; evitar leite de vaca integral antes de 12 meses e excesso de leite (> 500–600 mL/dia) depois",
    "Suplementação profilática: PNSF/MS — 1 mg/kg/dia de ferro elementar dos 6 aos 24 meses (a termo, peso adequado); prematuro e baixo peso: início mais precoce e dose maior (ver tabela)",
    "Suspeita de anemia: hemograma com reticulócitos, ferritina e PCR",
    "Confirmada ferropriva (microcitose/hipocromia, RDW alto, ferritina baixa): ferro elementar 3–6 mg/kg/dia VO",
    "Investigar causa: dieta (excesso de leite de vaca, pouca carne), perdas (parasitoses — ancilostomíase, tricuríase; sangramento digestivo; menorragia), má absorção (doença celíaca)",
    "Tratar parasitoses (ver ficha parasitoses-intestinais) e orientar alimentação"
  ],
  fataisExcluir: [
    "Leucemia aguda e aplasia de medula (citopenias associadas)",
    "Hemorragia digestiva oculta (divertículo de Meckel, pólipo, DII)",
    "Anemia hemolítica (falciforme, esferocitose) com crise aplásica",
    "Insuficiência cardíaca por anemia grave"
  ],
  proximaDecisao: "Hemograma com reticulócitos 30–45 dias após o início: Hb subiu ≥ 1 g/dL → manter ferro até completar 3–6 meses (e mais 2–3 meses após normalizar a Hb, ou até ferritina normal). Sem resposta → conferir adesão e dose, tratar perdas, pedir eletroforese de Hb (talassemia), anticorpos para doença celíaca, sangue oculto nas fezes, e encaminhar à hematologia.",
  clinica: {
    anamnese: [
      "Idade gestacional, peso ao nascer, clampeamento do cordão, gemelaridade",
      "Aleitamento materno, idade de introdução do leite de vaca, volume diário de leite, consumo de carnes, feijão e vegetais verde-escuros",
      "Uso de suplemento de ferro profilático",
      "Sintomas: palidez, cansaço, irritabilidade, baixo rendimento escolar, apetite reduzido, pica/geofagia, pagofagia",
      "Perdas: sangue nas fezes, melena, epistaxe de repetição, menstruação intensa (adolescente)",
      "Diarreia crônica, distensão, baixo ganho de peso (má absorção)",
      "Saneamento, andar descalço, eliminação de vermes",
      "História familiar de anemia (talassemia, doença falciforme), etnia"
    ],
    exameFisico: [
      "Palidez cutâneo-mucosa (palmar, conjuntival)",
      "Antropometria e curva de crescimento",
      "FC, sopro sistólico funcional, sinais de insuficiência cardíaca (anemia grave)",
      "Queilite angular, glossite, coiloníquia (deficiência crônica)",
      "Hepatoesplenomegalia, linfonodos, petéquias, icterícia (sugerem outra causa)"
    ],
    diferenciais: [
      { dx: "Traço talassêmico (talassemia minor)", pista: "Microcitose acentuada com Hb pouco reduzida, hemácias normais ou aumentadas, RDW normal, ferritina normal; índice de Mentzer (VCM/hemácias) < 13" },
      { dx: "Anemia da inflamação / doença crônica", pista: "Ferritina normal ou alta, PCR elevada, doença inflamatória ou infecção recente" },
      { dx: "Intoxicação por chumbo", pista: "Microcitose, pontilhado basófilo, exposição (tinta, baterias)" },
      { dx: "Doença falciforme", pista: "Teste do pezinho alterado, crises de dor, eletroforese com HbS" },
      { dx: "Leucemia / aplasia", pista: "Citopenias em mais de uma série, febre, sangramentos, visceromegalias" },
      { dx: "Deficiência de B12/folato", pista: "Macrocitose; dieta vegana materna, má absorção" }
    ],
    gravidade: [
      "Anemia (OMS 2024): Hb < 10,5 g/dL (6–23 meses); < 11,0 g/dL (24–59 meses); < 11,5 g/dL (5–11 anos); < 12,0 g/dL (12–14 anos)",
      "Grave: Hb < 7 g/dL (6–59 meses) — avaliar com urgência; descompensação cardíaca indica internação",
      "Deficiência de ferro: ferritina < 12 ng/mL (< 5 anos) ou < 15 ng/mL (≥ 5 anos) sem inflamação; com inflamação (PCR elevada) usar < 30 ng/mL (< 5 anos) e < 70 ng/mL (≥ 5 anos) — OMS 2020"
    ]
  },
  exames: [
    {
      nome: "Hemograma com reticulócitos",
      pedido: "Hemograma completo com índices hematimétricos (VCM, HCM, RDW), plaquetas e contagem de reticulócitos.",
      porQue: "Confirmar anemia, padrão microcítico/hipocrômico e excluir alteração de outras séries.",
      esperar: "Hb conforme idade (OMS 2024); VCM normal para idade.",
      interpretacao: "Ferropriva: microcitose, hipocromia, RDW aumentado, reticulócitos baixos; plaquetas podem estar elevadas. Reticulocitose em 7–10 dias de ferro confirma resposta.",
      limitacoes: "VCM normal varia com a idade (menor no lactente). Microcitose com RDW normal sugere talassemia."
    },
    {
      nome: "Ferritina e PCR",
      pedido: "Ferritina sérica e proteína C reativa.",
      porQue: "Ferritina baixa confirma estoque de ferro depletado.",
      esperar: "Ferritina ≥ 12 ng/mL (< 5 anos) ou ≥ 15 ng/mL (≥ 5 anos).",
      interpretacao: "Ferritina baixa = deficiência de ferro. Com PCR alta, ferritina normal não exclui deficiência (usar corte mais alto).",
      limitacoes: "Proteína de fase aguda: sobe em infecção e inflamação."
    },
    {
      nome: "Investigação de causa (conforme suspeita)",
      pedido: "Parasitológico de fezes (3 amostras); pesquisa de sangue oculto nas fezes; anticorpo antitransglutaminase IgA + IgA total; eletroforese de hemoglobina se microcitose sem ferropenia ou sem resposta ao ferro.",
      porQue: "Perdas intestinais, má absorção e hemoglobinopatias.",
      esperar: "Negativos / normais.",
      interpretacao: "Positivo direciona tratamento específico.",
      limitacoes: "Eletroforese no lactente < 6 meses e após transfusão é de difícil interpretação; HbA2 pode cair na ferropenia (tratar o ferro antes de concluir)."
    },
    {
      nome: "Controle do tratamento",
      pedido: "Hemograma com reticulócitos 30–45 dias após início do ferro; hemograma e ferritina ao final do tratamento.",
      porQue: "Confirmar resposta e reposição de estoques.",
      esperar: "Aumento de Hb ≥ 1 g/dL em 4 semanas.",
      interpretacao: "Sem resposta: adesão, dose, perda contínua, diagnóstico alternativo.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Sulfato ferroso — tratamento",
      linha: "l1",
      dose: "3–6 mg/kg/dia de ferro elementar (SBP 2026); em geral 3 mg/kg/dia, com menos efeitos gastrointestinais",
      via: "VO",
      intervalo: "1 vez ao dia (ou dividido em 2), 30–60 min antes das refeições; se intolerância, junto com alimento",
      duracao: "3–6 meses, até normalizar Hb e repor estoques (ferritina normal)",
      monitorizacao: "Hemograma com reticulócitos em 30–45 dias; ferritina ao final",
      contraindicacoes: "Anemia não ferropriva, hemocromatose, hemossiderose; doses altas em hemoglobinopatias sem ferropenia",
      ajustes: "SUS: solução oral 25 mg/mL de Fe elementar (1 gota ≈ 1,25 mg) e comprimido de 40 mg de Fe elementar. Não ultrapassar a dose de adulto em criança grande. Não tomar com leite, chá, café ou antiácidos. Vitamina C (suco de laranja) aumenta absorção. Intoxicação acidental por ferro é grave: guardar fora do alcance"
    },
    {
      droga: "Sulfato ferroso — profilaxia (PNSF/Ministério da Saúde)",
      linha: "l1",
      dose: "1 mg/kg/dia de ferro elementar",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Dos 6 aos 24 meses (a termo, peso adequado)",
      monitorizacao: "Adesão; hemograma se suspeita clínica",
      contraindicacoes: "Em tratamento de anemia (usar dose terapêutica); hemoglobinopatias com sobrecarga",
      ajustes: "SBP 2026: dose fixa de 10–12,5 mg/dia em 2 ciclos de 3 meses (6–9 meses e 12–15 meses), independentemente do peso, para a termo com peso adequado. Seguir o protocolo adotado pelo município"
    },
    {
      droga: "Sulfato ferroso — profilaxia em prematuros e baixo peso",
      linha: "l1",
      dose: "2–4 mg/kg/dia de ferro elementar conforme peso ao nascer (quanto menor o peso, maior a dose) até 12 meses; depois 1 mg/kg/dia até 24 meses",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Início a partir de 30 dias de vida até 24 meses",
      monitorizacao: "Hemograma e ferritina conforme seguimento do prematuro",
      contraindicacoes: "Transfusões múltiplas recentes (avaliar ferritina antes)",
      ajustes: "SBP (consenso 2021 e atualização 2026): RN pré-termo ou < 2.500 g; conferir a faixa de dose por peso ao nascer no documento vigente"
    },
    {
      droga: "Ferro parenteral (sacarato de hidróxido férrico) e transfusão",
      linha: "alt",
      dose: "Conforme cálculo do déficit de ferro (especialista); concentrado de hemácias 10–15 mL/kg se indicação",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Reações de hipersensibilidade; sinais de sobrecarga volêmica na transfusão",
      contraindicacoes: "—",
      ajustes: "Ferro IV: intolerância ou má absorção comprovada, sem resposta ao oral (em hospital/hematologia). Transfusão: só se descompensação hemodinâmica ou Hb muito baixa com sintomas; na anemia grave crônica, transfundir devagar (risco de ICC)"
    }
  ],
  destino: {
    agora: [
      "Tratamento ambulatorial na UBS na grande maioria",
      "Orientação alimentar e tratamento de parasitoses"
    ],
    reavaliar: [
      "Hemograma com reticulócitos em 30–45 dias",
      "Consulta mensal até normalizar a Hb; depois controle ao fim do tratamento"
    ],
    alta: [
      "Hb normal para a idade e ferritina normal após 3–6 meses; manter profilaxia se ainda < 24 meses"
    ],
    observacao: ["—"],
    internacao: [
      "Hb < 5 g/dL, ou < 7 g/dL com taquicardia/sinais de ICC, dispneia, letargia ou infecção grave associada",
      "Sangramento ativo"
    ],
    transferencia: [
      "Hematologia pediátrica: sem resposta ao ferro oral bem tomado, citopenias em outras séries, suspeita de hemoglobinopatia ou hemólise",
      "Gastroenterologia pediátrica: suspeita de perda digestiva oculta ou má absorção"
    ]
  },
  prescricao: {
    ambulatorial: "TRATAMENTO DA ANEMIA FERROPRIVA (peso: ___ kg)\nUSO ORAL\n1. Sulfato ferroso solução oral 25 mg/mL de ferro elementar (1 gota = 1,25 mg) ---- ___ frascos\n   Dar ___ gotas (3 mg/kg/dia = 2,4 gotas/kg/dia) 1 vez ao dia, 30 minutos antes do almoço, com um pouco de suco de laranja, por 3 a 6 meses.\n   Exemplo: 10 kg → 30 mg/dia = 24 gotas 1 vez ao dia.\n   Criança maior: Sulfato ferroso 40 mg de ferro elementar (comprimido) — ___ comprimido(s) por dia (3 mg/kg/dia), 30 minutos antes de uma refeição.\n\n2. Albendazol 400 mg (≥ 2 anos) ------------------- 1 comprimido\n   Mastigar 1 comprimido em dose única (se área de risco para verminose ou EPF positivo).\n\nPROFILAXIA (PNSF) — criança a termo, 6 a 24 meses\n1. Sulfato ferroso solução oral 25 mg/mL (1 gota = 1,25 mg) ---- 1 frasco\n   Dar 1 mg/kg por dia (≈ 1 gota a cada 1,25 kg; 8 kg = 6 a 7 gotas) 1 vez ao dia até completar 2 anos.\n\nORIENTAÇÕES\n- Não dar o ferro junto com leite, chá ou café.\n- Oferecer carne, frango, peixe, fígado ou ovo todos os dias; feijão com legumes e verduras verde-escuras; fruta cítrica após a refeição.\n- Leite de vaca: não antes de 1 ano; depois, no máximo 2 a 3 copos (500 mL) por dia.\n- As fezes ficam escuras (normal). Escovar os dentes após o ferro para não manchar."
  },
  orientacoesRetorno: [
    "O ferro precisa ser tomado todos os dias por meses, mesmo depois que a criança melhorar",
    "Efeitos comuns: fezes escuras, dor de barriga, prisão de ventre ou diarreia; se incomodar, dar junto com a comida em vez de parar",
    "Guardar o ferro trancado, fora do alcance das crianças: excesso de ferro é uma intoxicação grave. Se a criança tomar muitas gotas ou comprimidos, ir ao PS imediatamente",
    "Voltar imediatamente se: cansaço intenso, falta de ar, palidez muito forte, manchas roxas, sangramentos, febre persistente ou fezes pretas com mal-estar",
    "Retorno com hemograma em 30 a 45 dias"
  ],
  tabelas: [
    {
      titulo: "Suplementação profilática de ferro (ferro elementar)",
      colunas: ["Situação", "Ministério da Saúde (PNSF)", "SBP 2026"],
      linhas: [
        ["A termo, peso adequado", "1 mg/kg/dia dos 6 aos 24 meses", "10–12,5 mg/dia (dose fixa) em 2 ciclos: 6–9 meses e 12–15 meses"],
        ["Pré-termo ou baixo peso (< 2.500 g)", "Seguir orientação do serviço/SBP", "A partir de 30 dias: 2–4 mg/kg/dia conforme peso ao nascer até 12 meses; depois 1 mg/kg/dia até 24 meses"]
      ],
      nota: "Dados da SBP 2026 a partir de resumos secundários; conferir no documento original. Adotar o protocolo do município."
    },
    {
      titulo: "Cálculo rápido com sulfato ferroso gotas 25 mg/mL (1 gota ≈ 1,25 mg de ferro elementar)",
      colunas: ["Peso", "Profilaxia 1 mg/kg/dia", "Tratamento 3 mg/kg/dia"],
      linhas: [
        ["6 kg", "5 gotas", "14 gotas"],
        ["8 kg", "6 gotas", "19 gotas"],
        ["10 kg", "8 gotas", "24 gotas"],
        ["12 kg", "10 gotas", "29 gotas"],
        ["15 kg", "12 gotas", "36 gotas"],
        ["20 kg", "16 gotas", "48 gotas"]
      ],
      nota: "Conferir a concentração do frasco: há apresentações com 25 mg/mL de ferro elementar (gotas) e xaropes com 5 mg/mL."
    }
  ],
  fontes: [
    "SBP — Departamentos de Nutrologia e Hematologia: Recomendações para tratamento e prevenção da deficiência de ferro e anemia ferropriva (2026)",
    "SBP — Consenso sobre anemia ferropriva: atualização (2021)",
    "Ministério da Saúde — Programa Nacional de Suplementação de Ferro: manual de condutas gerais (2013) e Caderno dos Programas Nacionais de Suplementação de Micronutrientes (2022)",
    "OMS — Guideline on haemoglobin cutoffs to define anaemia in individuals and populations (2024)",
    "OMS — Guideline on use of ferritin concentrations to assess iron status in individuals and populations (2020)",
    "Ministério da Saúde — RENAME 2024 (sulfato ferroso)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
