// Gota
registrarFicha({
  id: "gota",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Gota: crise aguda e tratamento de controle (alopurinol, meta de ácido úrico)",
  resumo: "Artrite por cristais de urato: crise aguda muito dolorosa, em geral monoarticular (hálux, tornozelo, joelho), que melhora em dias a semanas. Tratar a crise cedo (colchicina em dose baixa, AINE ou corticoide) e, se indicado, baixar o ácido úrico com alopurinol até < 6 mg/dL.",
  palavrasChave: "gota artrite gotosa podagra hiperuricemia acido urico tofo crise de gota colchicina alopurinol febuxostate benzbromarona prednisona naproxeno ibuprofeno losartana hidroclorotiazida",
  critico: {
    tempo: "Tratar a crise nas primeiras 24 h",
    texto: "Quanto mais cedo o tratamento da crise, melhor a resposta. Monoartrite com febre alta ou mau estado geral: excluir artrite séptica antes de chamar de gota."
  },
  alarmes: [
    "Febre, calafrios, mau estado geral ou articulação protética (artrite séptica — puncionar)",
    "Primeira crise em articulação atípica sem confirmação (artrite séptica, outra artrite)",
    "Lesão renal aguda, litíase renal com obstrução",
    "Reação cutânea (exantema, bolhas, febre, eosinofilia) após iniciar alopurinol: suspender já (síndrome de hipersensibilidade/DRESS/Stevens-Johnson)",
    "Diarreia intensa, fraqueza muscular ou citopenia com colchicina (toxicidade)"
  ],
  condutaInicial: [
    "Confirmar o quadro: início rápido (pico em < 24 h), dor intensa, eritema, edema; hálux é o local clássico",
    "Puncionar se dúvida diagnóstica ou suspeita de infecção (cristais em agulha, birrefringência negativa)",
    "Crise: colchicina em dose baixa, AINE ou corticoide (escolher pelas comorbidades); gelo local e repouso da articulação",
    "Não suspender o alopurinol durante a crise se já em uso",
    "Ácido úrico sérico: dosar 2 semanas após a crise (pode estar normal durante a crise)",
    "Avaliar indicação de tratamento hipouricemiante e comorbidades (HAS, DRC, DM, obesidade, dislipidemia, álcool)",
    "Rever drogas que elevam urato: tiazídico, diurético de alça, AAS em dose baixa, ciclosporina; trocar anti-hipertensivo por losartana se possível"
  ],
  fataisExcluir: [
    "Artrite séptica (pode coexistir com gota)",
    "Celulite (pele avermelhada sobre articulação)",
    "Fratura",
    "Hipersensibilidade grave ao alopurinol",
    "Intoxicação por colchicina (interação com claritromicina, ciclosporina, verapamil, diltiazem, cetoconazol)"
  ],
  proximaDecisao: "Indicação de alopurinol (≥ 2 crises/ano, tofo, dano articular em imagem; considerar já na 1ª crise se DRC ≥ 3, urato > 9 mg/dL ou litíase) → iniciar 50–100 mg/dia, subir 50–100 mg a cada 2–5 semanas até ácido úrico < 6 mg/dL (< 5 se tofos), com profilaxia de colchicina por 3–6 meses.",
  clinica: {
    anamnese: [
      "Crises prévias, frequência, articulações acometidas, tempo até o pico da dor",
      "Tofos (nódulos em orelha, cotovelo, dedos), litíase renal",
      "Gatilhos: álcool (cerveja, destilados), carne vermelha, frutos do mar, refrigerante e sucos com frutose, jejum, desidratação, cirurgia, início de hipouricemiante",
      "Medicações: diuréticos, AAS em dose baixa, ciclosporina, tacrolimo",
      "Comorbidades: HAS, DRC, DM, obesidade, doença cardiovascular, úlcera péptica (escolha do tratamento da crise)",
      "Ascendência asiática (Sudeste Asiático, Coreia, China, Tailândia) ou africana: maior risco de hipersensibilidade ao alopurinol (HLA-B*58:01)"
    ],
    exameFisico: [
      "Articulação: calor, eritema intenso, edema, dor ao toque leve",
      "Contagem de articulações acometidas",
      "Tofos: pavilhão auricular, olécrano, tendão de Aquiles, dedos",
      "Temperatura, estado geral (infecção)",
      "PA, peso, cintura"
    ],
    diferenciais: [
      { dx: "Artrite séptica", pista: "Febre, mau estado geral, líquido purulento; Gram e cultura" },
      { dx: "Pseudogota (pirofosfato de cálcio)", pista: "Idoso, joelho ou punho; condrocalcinose na radiografia; cristais de birrefringência positiva" },
      { dx: "Celulite", pista: "Eritema que se estende além da articulação, porta de entrada" },
      { dx: "Artrite reativa / psoriásica", pista: "Uretrite ou diarreia prévias; psoríase; dactilite" },
      { dx: "Osteoartrite com crise inflamatória", pista: "Dor mecânica crônica de base" }
    ],
    gravidade: [
      "Crise leve a moderada: 1 ou poucas articulações pequenas",
      "Crise grave: poliarticular ou grandes articulações, dor muito intensa (considerar associar 2 tratamentos)",
      "Gota tofácea crônica: tofos, dano articular, crises frequentes",
      "Diagnóstico provável sem punção: homem, crise prévia, início < 1 dia, eritema, hálux, HAS ou doença CV, urato > 5,88 mg/dL (escore diagnóstico clínico)"
    ]
  },
  exames: [
    {
      nome: "Ácido úrico sérico",
      pedido: "Ácido úrico sérico (colher pelo menos 2 semanas após a crise).",
      porQue: "Apoiar o diagnóstico, definir indicação e acompanhar a meta.",
      esperar: "Geralmente > 6,8 mg/dL fora da crise.",
      interpretacao: "Meta em tratamento: < 6 mg/dL; < 5 mg/dL se tofos ou doença grave até o controle.",
      limitacoes: "Pode estar normal durante a crise. Hiperuricemia sem crise não é gota e não se trata com alopurinol."
    },
    {
      nome: "Função renal e metabólicos",
      pedido: "Creatinina, ureia, TGO, TGP, hemograma, glicemia de jejum, perfil lipídico, urina tipo 1.",
      porQue: "Escolher e ajustar a dose do tratamento; avaliar risco cardiovascular.",
      esperar: "DRC é frequente na gota.",
      interpretacao: "TFG < 30: evitar AINE; reduzir colchicina; alopurinol inicia com 50 mg.",
      limitacoes: "—"
    },
    {
      nome: "Análise do líquido sinovial",
      pedido: "Artrocentese com pesquisa de cristais em luz polarizada, citologia, Gram e cultura.",
      porQue: "Padrão-ouro; obrigatória se suspeita de infecção.",
      esperar: "Cristais em agulha, birrefringência negativa.",
      interpretacao: "Cristais não excluem infecção concomitante.",
      limitacoes: "Disponibilidade limitada na UBS: encaminhar se dúvida e febre."
    },
    {
      nome: "Radiografia",
      pedido: "Radiografia das articulações acometidas (ex.: pés em AP e oblíqua).",
      porQue: "Gota crônica, tofos, dano articular; diferencial com pseudogota.",
      esperar: "Erosões com bordas escleróticas e 'em saca-bocado'.",
      interpretacao: "Dano radiográfico = indicação de hipouricemiante.",
      limitacoes: "Normal nas crises iniciais."
    }
  ],
  tratamento: [
    {
      droga: "Colchicina (crise)",
      linha: "l1",
      dose: "1 mg no início e 0,5 mg 1 hora depois (total 1,5 mg no 1º dia); a partir do dia seguinte, 0,5 mg 2 a 3 vezes ao dia",
      via: "VO",
      intervalo: "Conforme esquema",
      duracao: "Até 2–3 dias após o fim da crise",
      monitorizacao: "Diarreia (reduzir ou suspender)",
      contraindicacoes: "TFG < 30 (crise: não repetir antes de 2 semanas; evitar se diálise), hepatopatia grave, uso de inibidores fortes de CYP3A4/P-gp (claritromicina, cetoconazol, ciclosporina, verapamil, diltiazem)",
      ajustes: "Melhor se iniciada nas primeiras 12–24 h. Doses altas antigas (a cada hora até diarreia) não devem ser usadas. RENAME"
    },
    {
      droga: "Prednisona (crise)",
      linha: "l1",
      dose: "30–35 mg/dia (ou 0,5 mg/kg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia, pela manhã",
      duracao: "5 dias (sem necessidade de desmame); crise grave: 7–10 dias com redução gradual",
      monitorizacao: "Glicemia em diabéticos, PA",
      contraindicacoes: "Infecção não tratada, DM muito descompensado (relativa)",
      ajustes: "Boa opção em DRC, IC e risco GI. Monoartrite de grande articulação: infiltração intra-articular com triancinolona é alternativa. RENAME"
    },
    {
      droga: "Naproxeno ou ibuprofeno (AINE na crise)",
      linha: "l1",
      dose: "Naproxeno 500 mg 12/12 h ou ibuprofeno 600 mg 8/8 h",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "5–7 dias (até 2–3 dias após o fim da crise)",
      monitorizacao: "PA, creatinina, dispepsia",
      contraindicacoes: "TFG < 30, IC, úlcera ou sangramento GI, anticoagulante, gestação ≥ 20 semanas",
      ajustes: "Associar omeprazol 20 mg/dia se > 65 anos ou risco GI. Crise grave: pode associar colchicina + AINE"
    },
    {
      droga: "Alopurinol (controle)",
      linha: "l1",
      dose: "Iniciar 100 mg/dia (50 mg/dia se TFG < 30 ou idoso frágil); aumentar 50–100 mg a cada 2–5 semanas até ácido úrico < 6 mg/dL; máx 800 mg/dia (900 mg conforme bula)",
      via: "VO",
      intervalo: "1 vez ao dia, após refeição (doses > 300 mg podem ser divididas)",
      duracao: "Contínuo (por toda a vida em geral)",
      monitorizacao: "Ácido úrico a cada 2–5 semanas na titulação, depois a cada 6 meses; creatinina, TGO/TGP, hemograma; pele",
      contraindicacoes: "Hipersensibilidade prévia ao alopurinol, uso de azatioprina ou mercaptopurina (interação grave)",
      ajustes: "Pode ser iniciado durante a crise se sob tratamento anti-inflamatório (ACR 2020). A dose pode passar de 300 mg mesmo em DRC, com titulação lenta e monitorização. Testar HLA-B*58:01 em ascendência do Sudeste Asiático ou africana, se disponível. RENAME"
    },
    {
      droga: "Colchicina (profilaxia ao iniciar alopurinol)",
      linha: "adj",
      dose: "0,5 mg 1 a 2 vezes ao dia",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "3–6 meses após iniciar o alopurinol (manter se crises continuarem)",
      monitorizacao: "Diarreia, CPK e hemograma se uso longo ou DRC",
      contraindicacoes: "As mesmas da colchicina",
      ajustes: "TFG 30–59: 0,5 mg/dia; TFG < 30: 0,5 mg em dias alternados ou usar prednisona 5–10 mg/dia ou AINE em dose baixa como profilaxia"
    },
    {
      droga: "Febuxostate",
      linha: "alt",
      dose: "40 mg/dia; aumentar para 80 mg/dia se ácido úrico ≥ 6 após 2–4 semanas",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Enzimas hepáticas",
      contraindicacoes: "Doença cardiovascular estabelecida (alerta de maior mortalidade CV), azatioprina",
      ajustes: "Intolerância ou falha ao alopurinol. Não disponível no SUS"
    },
    {
      droga: "Benzbromarona (uricosúrico)",
      linha: "alt",
      dose: "50–100 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Enzimas hepáticas (hepatotoxicidade), litíase",
      contraindicacoes: "Litíase renal, hepatopatia, TFG muito reduzida",
      ajustes: "Uso por especialista; ingerir ≥ 2 L de água por dia. Conferir disponibilidade no Brasil (não está na RENAME)"
    }
  ],
  destino: {
    agora: [
      "Tratar a crise na UBS; puncionar ou encaminhar se suspeita de infecção"
    ],
    reavaliar: [
      "Crise: em 48–72 h se sem melhora",
      "Alopurinol: ácido úrico a cada 2–5 semanas até a meta; depois a cada 6 meses"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Suspeita de artrite séptica, lesão renal aguda, hipersensibilidade grave ao alopurinol (via PS)"
    ],
    transferencia: [
      "Reumatologia: gota refratária (fora da meta com alopurinol em dose máxima tolerada), intolerância ao alopurinol, gota tofácea extensa, dúvida diagnóstica",
      "Nefrologia: DRC avançada associada"
    ]
  },
  prescricao: {
    ambulatorial: "CRISE DE GOTA (escolher 1 opção conforme comorbidades)\n\nOPÇÃO A — COLCHICINA\nUSO ORAL\n1. Colchicina 0,5 mg ----------------------------- 20 comprimidos\n   1º dia: tomar 2 comprimidos agora e 1 comprimido 1 hora depois (não tomar mais nesse dia). A partir do 2º dia: 1 comprimido de 12 em 12 horas até 2–3 dias após a dor passar. Suspender se diarreia.\n   (TFG < 30: não repetir o esquema antes de 2 semanas; preferir prednisona.)\n\nOPÇÃO B — CORTICOIDE (boa opção em DRC, insuficiência cardíaca, úlcera)\nUSO ORAL\n1. Prednisona 20 mg ------------------------------ 8 comprimidos\n   Tomar 1 e ½ comprimido (30 mg) pela manhã por 5 dias.\n\nOPÇÃO C — ANTI-INFLAMATÓRIO\nUSO ORAL\n1. Naproxeno 500 mg ------------------------------ 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas após as refeições por 7 dias.\n   (ou Ibuprofeno 600 mg — 1 comprimido de 8 em 8 horas por 7 dias.)\n   Não usar se doença renal, insuficiência cardíaca, úlcera, anticoagulante.\n\nSINTOMÁTICOS\n2. Gelo envolto em pano sobre a articulação por 15–20 minutos, 3 a 4 vezes ao dia. Repouso da articulação.\n\nTRATAMENTO DE CONTROLE (quando indicado)\nUSO ORAL\n1. Alopurinol 100 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia após o almoço. Uso contínuo. (TFG < 30: ½ comprimido ao dia.) Aumentar 100 mg a cada 2–5 semanas conforme ácido úrico, até < 6 mg/dL.\n2. Colchicina 0,5 mg ----------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 a 6 meses para prevenir crises (TFG 30–59: 1 comprimido ao dia).\n\nPEDIDO DE EXAMES\nÁcido úrico sérico, creatinina, TGO, TGP, hemograma, glicemia, perfil lipídico, urina tipo 1. Repetir ácido úrico em 4 semanas após cada ajuste do alopurinol."
  },
  orientacoesRetorno: [
    "Comece o remédio da crise logo no início da dor; tenha a receita em casa para as próximas crises",
    "No começo do alopurinol, as crises podem aparecer mais; por isso tome também a colchicina. Não pare o alopurinol durante uma crise",
    "Pare o alopurinol e volte imediatamente se aparecerem manchas na pele, bolhas, febre ou feridas na boca",
    "Reduza cerveja e destilados, refrigerantes e sucos adoçados, carnes vermelhas, vísceras e frutos do mar; beba bastante água; perca peso aos poucos (sem jejum prolongado)",
    "Volte antes se: febre, articulação muito inchada que não melhora em 3 dias, diarreia intensa com a colchicina, dor nas costas com sangue na urina",
    "Retorno em 2–4 semanas com ácido úrico; depois a cada ajuste até a meta"
  ],
  tabelas: [
    {
      titulo: "Indicação de tratamento hipouricemiante (ACR 2020)",
      colunas: ["Situação", "Recomendação"],
      linhas: [
        ["≥ 1 tofo, dano radiográfico por gota ou ≥ 2 crises por ano", "Iniciar (forte)"],
        ["> 1 crise prévia, mas < 2 por ano", "Considerar (condicional)"],
        ["1ª crise com DRC estágio ≥ 3, urato > 9 mg/dL ou litíase", "Considerar (condicional)"],
        ["1ª crise sem esses fatores", "Em geral não iniciar"],
        ["Hiperuricemia assintomática", "Não tratar"]
      ],
      nota: "Estratégia 'tratar até a meta': ácido úrico < 6 mg/dL; dose inicial baixa e titulação."
    }
  ],
  fontes: [
    "ACR — Guideline for the Management of Gout (Arthritis Care Res, 2020)",
    "EULAR — Updated evidence-based recommendations for the management of gout (2016) e recomendações de diagnóstico (2018)",
    "SBPC/ML–SBR — Diretriz conjunta sobre meta terapêutica do ácido úrico sérico na gota (2025): conferir o valor proposto no documento original",
    "Ministério da Saúde — RENAME (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
