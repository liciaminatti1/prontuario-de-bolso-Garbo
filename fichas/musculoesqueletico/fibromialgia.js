// Fibromialgia
registrarFicha({
  id: "fibromialgia",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Fibromialgia",
  resumo: "Dor crônica disseminada (≥ 3 meses) com fadiga, sono não reparador e queixas cognitivas, sem inflamação ou lesão que a explique. Diagnóstico clínico pelos critérios ACR 2016, com poucos exames. Tratamento centrado em educação e exercício; medicamentos (amitriptilina, ciclobenzaprina, duloxetina, pregabalina) são adjuvantes.",
  palavrasChave: "fibromialgia dor cronica difusa generalizada dor no corpo todo fadiga sono nao reparador sensibilizacao central pontos dolorosos amitriptilina ciclobenzaprina duloxetina pregabalina exercicio aerobico tcc acr 2016",
  critico: {
    tempo: "Exercício é o tratamento principal",
    texto: "Exercício aeróbico e de fortalecimento progressivo tem a melhor evidência (EULAR 2017). Evitar opioides fortes, corticoides e AINE crônico, que não ajudam e trazem riscos."
  },
  alarmes: [
    "Febre, perda de peso, sudorese noturna (infecção, neoplasia)",
    "Artrite (edema articular), rigidez matinal prolongada, rash, fotossensibilidade, úlceras orais (doença reumática inflamatória)",
    "Fraqueza muscular proximal objetiva ou CPK alta (miopatia, estatina, hipotireoidismo)",
    "Dor em cinturas escapular e pélvica com rigidez em > 50 anos e VHS/PCR altos (polimialgia reumática)",
    "Déficit neurológico focal",
    "Ideação suicida (depressão é comum associada)"
  ],
  condutaInicial: [
    "Aplicar critérios ACR 2016 (índice de dor generalizada + escala de gravidade dos sintomas)",
    "Exames mínimos para excluir doenças que imitam: hemograma, VHS, PCR, TSH, CPK; outros só se houver pista clínica",
    "Validar a dor e explicar o diagnóstico (sensibilização central; dor real, sem lesão nos tecidos)",
    "Prescrever exercício aeróbico de baixo impacto com progressão lenta + fortalecimento",
    "Higiene do sono; rastrear e tratar depressão, ansiedade, apneia do sono",
    "Medicamento se necessário: amitriptilina em dose baixa à noite (1ª opção no SUS) ou ciclobenzaprina; duloxetina se depressão associada",
    "Terapia cognitivo-comportamental ou abordagem psicológica, práticas integrativas (acupuntura, yoga, tai chi) quando disponíveis"
  ],
  fataisExcluir: [
    "Hipotireoidismo",
    "Doença inflamatória sistêmica (lúpus, artrite reumatoide, espondiloartrite, polimialgia reumática)",
    "Miopatia (inflamatória, por estatina)",
    "Neoplasia (mieloma, metástases) e infecções crônicas",
    "Depressão grave com risco de suicídio"
  ],
  proximaDecisao: "Reavaliar em 4–8 semanas: função, sono e dor (escala 0–10, FIQR se disponível). Resposta parcial → otimizar exercício e trocar ou associar medicamento (ex.: amitriptilina + fluoxetina, ou duloxetina, ou pregabalina). Dúvida diagnóstica ou sinais inflamatórios → reumatologia.",
  clinica: {
    anamnese: [
      "Dor difusa (acima e abaixo da cintura, lados direito e esquerdo, esqueleto axial) há ≥ 3 meses",
      "Fadiga, sono não reparador, despertar cansado, dificuldade de memória e concentração",
      "Cefaleia, dor abdominal, intestino irritável, bexiga dolorosa, disfunção temporomandibular, parestesias",
      "Humor: depressão, ansiedade, estresse, trauma, violência",
      "Ronco e apneias testemunhadas (apneia do sono)",
      "Medicações: estatinas (mialgia), uso de opioides e benzodiazepínicos",
      "Impacto no trabalho, família e atividades"
    ],
    exameFisico: [
      "Exame articular normal (sem sinovite)",
      "Força muscular normal",
      "Dor à palpação difusa (não é mais exigida a contagem de 'tender points')",
      "Exame neurológico normal",
      "Pele, mucosas e unhas sem sinais de doença sistêmica"
    ],
    diferenciais: [
      { dx: "Hipotireoidismo", pista: "Fadiga, ganho de peso, frio; TSH alto" },
      { dx: "Polimialgia reumática", pista: "> 50 anos, rigidez de cinturas, VHS/PCR altos, resposta rápida a prednisona" },
      { dx: "Artrite reumatoide / lúpus / espondiloartrite", pista: "Sinovite, rash, serosite, dor lombar inflamatória, provas inflamatórias altas" },
      { dx: "Miopatia por estatina ou inflamatória", pista: "Fraqueza proximal, CPK alta" },
      { dx: "Depressão maior", pista: "Humor deprimido, anedonia; frequentemente coexiste" },
      { dx: "Deficiência de vitamina D / osteomalácia", pista: "Dor óssea, fosfatase alcalina alta" },
      { dx: "Apneia obstrutiva do sono", pista: "Ronco, sonolência diurna, obesidade" }
    ],
    gravidade: [
      "Critérios ACR 2016: (1) índice de dor generalizada (WPI) ≥ 7 e escala de gravidade dos sintomas (SSS) ≥ 5, OU WPI 4–6 e SSS ≥ 9; (2) dor generalizada em pelo menos 4 de 5 regiões; (3) sintomas há ≥ 3 meses",
      "WPI: número de áreas dolorosas na última semana (0–19)",
      "SSS (0–12): fadiga, sono não reparador e sintomas cognitivos (0–3 cada) + cefaleia, dor abdominal e depressão nos últimos 6 meses (0–1 cada)",
      "O diagnóstico de fibromialgia é válido mesmo com outra doença presente",
      "Maior gravidade: SSS alto, incapacidade para o trabalho, depressão grave, uso de opioide"
    ]
  },
  exames: [
    {
      nome: "Exames básicos",
      pedido: "Hemograma completo, VHS, PCR, TSH, CPK, glicemia de jejum, creatinina, TGO, TGP.",
      porQue: "Excluir doenças inflamatórias, tireoidianas e musculares que imitam fibromialgia.",
      esperar: "Normais na fibromialgia.",
      interpretacao: "Alteração → investigar a doença correspondente (pode coexistir com fibromialgia).",
      limitacoes: "Não há exame que confirme fibromialgia."
    },
    {
      nome: "Exames só com pista clínica",
      pedido: "FAN, fator reumatoide, anti-CCP, 25-OH-vitamina D, cálcio, fosfatase alcalina, sorologias, polissonografia — apenas se houver suspeita específica.",
      porQue: "Evitar falso-positivos e medicalização.",
      esperar: "FAN em títulos baixos é comum na população sem doença.",
      interpretacao: "FAN positivo sem clínica de doença autoimune não muda o diagnóstico.",
      limitacoes: "Não pedir FAN de rotina."
    }
  ],
  tratamento: [
    {
      droga: "Exercício físico",
      linha: "l1",
      dose: "Aeróbico de baixo impacto (caminhada, bicicleta, hidroginástica) começando com 10–15 min e progredindo até 30 min, 2–3 vezes por semana no início e depois mais; fortalecimento e alongamento",
      via: "—",
      intervalo: "Regular",
      duracao: "Contínuo",
      monitorizacao: "Função, dor, fadiga",
      contraindicacoes: "—",
      ajustes: "Única recomendação forte da EULAR 2017. Progredir devagar para evitar piora inicial. Grupos na UBS, academia da saúde, eMulti"
    },
    {
      droga: "Amitriptilina",
      linha: "l1",
      dose: "10–12,5 mg à noite; aumentar a cada 2 semanas até 25–50 mg à noite",
      via: "VO",
      intervalo: "1 vez ao dia, 1–2 h antes de deitar",
      duracao: "Reavaliar em 6–8 semanas; manter se benefício",
      monitorizacao: "Sonolência diurna, boca seca, constipação, ganho de peso; ECG se > 40 anos ou cardiopata",
      contraindicacoes: "IAM recente, arritmia, BAV, glaucoma de ângulo fechado, retenção urinária, IMAO",
      ajustes: "Melhora sono e dor. Idoso: evitar ou preferir nortriptilina. RENAME"
    },
    {
      droga: "Ciclobenzaprina",
      linha: "alt",
      dose: "5–10 mg à noite (máx 30 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Reavaliar em 4–8 semanas",
      monitorizacao: "Sonolência, boca seca",
      contraindicacoes: "As dos tricíclicos (estrutura semelhante); não associar a amitriptilina ou IMAO",
      ajustes: "Recomendação fraca a favor (EULAR 2017). Não disponível no SUS"
    },
    {
      droga: "Duloxetina",
      linha: "alt",
      dose: "30 mg/dia por 1 semana; depois 60 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia, pela manhã",
      duracao: "Reavaliar em 8–12 semanas",
      monitorizacao: "Náusea, insônia, sudorese, PA",
      contraindicacoes: "ClCr < 30, hepatopatia, etilismo, IMAO",
      ajustes: "Boa opção com depressão ou ansiedade associadas. Não disponível no SUS; alternativa no SUS com depressão: fluoxetina 20–40 mg/dia (pode associar a amitriptilina em dose baixa)"
    },
    {
      droga: "Pregabalina",
      linha: "alt",
      dose: "75 mg à noite; aumentar para 75–150 mg 12/12 h (máx 450 mg/dia)",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Reavaliar em 8 semanas",
      monitorizacao: "Tontura, sonolência, edema, ganho de peso",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Reduzir se ClCr < 60. Não disponível no SUS na maioria dos municípios; gabapentina é alternativa com menor evidência"
    },
    {
      droga: "Tramadol",
      linha: "adj",
      dose: "50 mg (máx 200–300 mg/dia)",
      via: "VO",
      intervalo: "De 8 em 8 horas se dor intensa",
      duracao: "Curto prazo",
      monitorizacao: "Náusea, tontura, dependência",
      contraindicacoes: "Epilepsia, IMAO; cautela com ISRS, IRSN e tricíclicos (síndrome serotoninérgica, convulsão)",
      ajustes: "Recomendação fraca (EULAR 2017). Evitar uso crônico"
    },
    {
      droga: "Opioides fortes, corticoides, AINE crônico, benzodiazepínicos",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício na fibromialgia e com riscos (dependência, hiperalgesia, efeitos adversos)",
      ajustes: "EULAR 2017: recomendação contra opioides fortes e corticoides; AINE sem eficácia demonstrada"
    }
  ],
  destino: {
    agora: [
      "Acompanhamento na UBS com plano de exercício, sono e medicação",
      "eMulti (educador físico, fisioterapia, psicologia) e práticas integrativas"
    ],
    reavaliar: [
      "4–8 semanas após início ou mudança de medicamento",
      "Depois a cada 3 meses"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: [
      "Reumatologia: dúvida diagnóstica, suspeita de doença inflamatória, refratariedade a várias estratégias",
      "Saúde mental (CAPS/psiquiatria): depressão grave, risco de suicídio, transtorno por uso de substâncias",
      "Clínica da dor (se disponível): casos refratários"
    ]
  },
  prescricao: {
    ambulatorial: "FIBROMIALGIA\nUSO ORAL\n1. Amitriptilina 25 mg --------------------------- 30 comprimidos\n   Tomar ½ comprimido (12,5 mg) 1 a 2 horas antes de deitar. Após 2 semanas, se tolerar e ainda houver dor ou sono ruim, tomar 1 comprimido à noite (máx 2 comprimidos).\n   (Alternativa fora do SUS: Ciclobenzaprina 5 mg — 1 comprimido à noite, podendo aumentar para 10 mg.)\n\nSE DEPRESSÃO OU ANSIEDADE ASSOCIADA\n2. Fluoxetina 20 mg ------------------------------ 30 cápsulas\n   Tomar 1 cápsula pela manhã. (Ou, fora do SUS: Duloxetina 30 mg 1 cápsula pela manhã por 7 dias, depois 60 mg; não associar à fluoxetina.)\n\nSE DOR FORTE OCASIONAL\n3. Paracetamol 750 mg ---------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas se dor, por no máximo 5 dias seguidos.\n\nATIVIDADE FÍSICA (prescrição)\n4. Caminhada ou hidroginástica 10–15 minutos, 3 vezes por semana, aumentando 5 minutos por semana até 30 minutos na maioria dos dias. Alongamento diário. Encaminhamento ao grupo de atividade física / eMulti.\n\nSONO\n5. Horário regular para dormir e acordar; evitar telas, café e bebida alcoólica à noite; não cochilar à tarde por mais de 30 minutos.\n\nPEDIDO DE EXAMES\nHemograma, VHS, PCR, TSH, CPK, glicemia de jejum, creatinina, TGO, TGP."
  },
  orientacoesRetorno: [
    "Sua dor é real; não há lesão nos músculos ou articulações, e sim um aumento da sensibilidade do sistema nervoso à dor",
    "O exercício é o tratamento que mais ajuda; comece leve e aumente devagar. Uma piora pequena no início é esperada e passa",
    "Os remédios ajudam, mas sozinhos não resolvem; sono, atividade física e cuidado com o estresse são parte do tratamento",
    "Evite ficar parado por muito tempo e evite remédios fortes para dor sem orientação",
    "Volte antes se: febre, perda de peso, juntas inchadas, fraqueza de verdade nos braços ou pernas, tristeza profunda ou pensamentos de morte",
    "Retorno em 4–8 semanas para avaliar a resposta"
  ],
  fontes: [
    "ACR — 2016 Revisions to the 2010/2011 fibromyalgia diagnostic criteria (Wolfe et al., Semin Arthritis Rheum, 2016)",
    "EULAR — Revised recommendations for the management of fibromyalgia (Ann Rheum Dis, 2017)",
    "SBR — Recomendações para o diagnóstico e tratamento da fibromialgia (versão vigente)",
    "Ministério da Saúde — PCDT Dor Crônica (2012) e RENAME (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
