// Mieloma múltiplo e gamopatias monoclonais
registrarFicha({
  id: "mieloma-multiplo",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Mieloma múltiplo e gamopatia monoclonal (MGUS)",
  resumo: "Suspeitar em adulto, sobretudo > 50 anos, com anemia, dor óssea ou fratura, insuficiência renal, hipercalcemia, proteínas totais altas ou infecções de repetição (CRAB). Ficha para pedir eletroforese, imunofixação e cadeias leves livres, interpretar MGUS e reconhecer urgências (hipercalcemia, lesão renal, compressão medular, hiperviscosidade).",
  palavrasChave: "mieloma multiplo plasmocitoma gamopatia monoclonal mgus pico monoclonal componente m eletroforese de proteinas imunofixacao cadeias leves livres kappa lambda bence jones crab hipercalcemia insuficiencia renal anemia lesao litica dor ossea fratura patologica hiperviscosidade waldenstrom smoldering indolente rouleaux beta 2 microglobulina",
  critico: {
    tempo: "CRAB + pico M: hematologia urgente",
    texto: "Hipercalcemia, lesão renal aguda, compressão medular ou hiperviscosidade em suspeita de mieloma são urgências de PS. Fita urinária NÃO detecta cadeias leves: peça imunofixação e cadeias leves livres séricas."
  },
  alarmes: [
    "Cálcio alto com sonolência, confusão, poliúria, vômitos (ficha hipercalcemia)",
    "Creatinina subindo, oligúria (rim do mieloma por cadeias leves; evitar contraste e AINE)",
    "Dor nas costas com fraqueza nas pernas, perda de sensibilidade ou alteração esfincteriana (ficha compressao-medular-maligna)",
    "Sangramento de mucosa, borramento visual, cefaleia, confusão, dispneia com proteína muito alta (hiperviscosidade)",
    "Febre ou pneumonia (infecções graves por pneumococo e gram-negativos)",
    "Fratura com trauma mínimo, dor óssea noturna ou progressiva",
    "Anemia com rouleaux, VHS muito alta e proteínas totais altas com albumina baixa (gap globulina)"
  ],
  condutaInicial: [
    "Suspeita clínica (CRAB, VHS muito alta, gap entre proteínas totais e albumina, infecções de repetição, dor óssea): pedir os 3 exames de triagem juntos — eletroforese de proteínas séricas, imunofixação sérica e cadeias leves livres séricas (kappa, lambda e relação)",
    "Completar: hemograma, cálcio (corrigido pela albumina), creatinina, albumina, LDH, beta-2-microglobulina, proteinúria de 24 h com eletroforese e imunofixação urinária",
    "Imagem óssea: TC de corpo inteiro de baixa dose (preferida) ou inventário ósseo radiológico; RM se dor na coluna ou sintomas neurológicos",
    "Pico monoclonal com CRAB, lesão óssea ou relação de cadeias leves muito alterada: hematologia com prioridade (mielograma/biópsia de medula)",
    "Urgências vão ao PS: hipercalcemia, lesão renal aguda, compressão medular, hiperviscosidade, fratura patológica, infecção grave",
    "Lesão renal: hidratação (se sem sobrecarga), suspender AINE, IECA/BRA na fase aguda, diuréticos desnecessários e contraste; ajustar drogas à função renal",
    "Proteína M pequena sem CRAB: provável MGUS → estratificar risco e seguir na UBS ou com hematologia conforme risco",
    "Dor: paracetamol, dipirona, opioides; evitar AINE (rim)"
  ],
  fataisExcluir: [
    "Hipercalcemia grave",
    "Lesão renal aguda por cadeias leves (rim do mieloma)",
    "Compressão medular por plasmocitoma ou fratura vertebral",
    "Síndrome de hiperviscosidade",
    "Sepse em paciente com imunoparesia",
    "Amiloidose AL (proteinúria nefrótica, insuficiência cardíaca, neuropatia, macroglossia)"
  ],
  proximaDecisao: "Mieloma (plasmócitos clonais ≥ 10% ou plasmocitoma + CRAB ou biomarcador SLiM) → tratamento pela hematologia. Mieloma assintomático (smoldering) → seguimento com hematologia a cada 3–6 meses. MGUS → risco baixo: repetir em 6 meses e depois a cada 2–3 anos ou só se sintomas; risco intermediário/alto: anual com hematologia.",
  clinica: {
    anamnese: [
      "Dor óssea (coluna, costelas, quadril), sobretudo aos movimentos; perda de altura; fraturas",
      "Cansaço (anemia), sede, poliúria, constipação, confusão (hipercalcemia)",
      "Infecções bacterianas de repetição (pneumonia, ITU)",
      "Espuma na urina, edema, dispneia, dormência em mãos e pés (amiloidose, neuropatia)",
      "Sangramento nasal ou gengival, visão turva, cefaleia (hiperviscosidade)",
      "Perda de peso, sudorese noturna"
    ],
    exameFisico: [
      "Palidez, dor à percussão óssea, deformidades",
      "Exame neurológico de membros inferiores e sensibilidade em sela",
      "Hidratação, PA, diurese",
      "Fundo de olho (veias tortuosas e hemorragias na hiperviscosidade)",
      "Macroglossia, púrpura periorbital, hepatomegalia (amiloidose)",
      "Linfonodos e baço (sugerem linfoma ou Waldenström mais que mieloma)"
    ],
    diferenciais: [
      { dx: "MGUS", pista: "Proteína M < 3 g/dL, plasmócitos < 10%, sem CRAB nem lesão de órgão" },
      { dx: "Mieloma assintomático (smoldering)", pista: "Proteína M ≥ 3 g/dL ou plasmócitos 10–59%, sem CRAB nem SLiM" },
      { dx: "Macroglobulinemia de Waldenström", pista: "IgM monoclonal, linfonodos, baço, hiperviscosidade" },
      { dx: "Amiloidose AL", pista: "Cadeia leve monoclonal (lambda), síndrome nefrótica, cardiopatia, neuropatia" },
      { dx: "Metástases ósseas de carcinoma", pista: "Mama, próstata, pulmão, rim, tireoide; sem proteína M" },
      { dx: "Hiperparatireoidismo", pista: "Hipercalcemia com PTH alto, sem pico M" },
      { dx: "Hipergamaglobulinemia policlonal", pista: "Base larga na eletroforese: hepatopatia, HIV, doenças autoimunes, infecções crônicas" }
    ],
    gravidade: [
      "CRAB (IMWG 2014): hipercalcemia (Ca > 11 mg/dL ou > 1 mg/dL acima do normal), insuficiência renal (creatinina > 2 mg/dL ou ClCr < 40 mL/min), anemia (Hb < 10 g/dL ou > 2 g/dL abaixo do normal), lesão óssea lítica (≥ 1 em TC, PET-CT ou radiografia)",
      "SLiM (biomarcadores de malignidade): plasmócitos clonais ≥ 60%, relação cadeia leve envolvida/não envolvida ≥ 100 (com cadeia envolvida ≥ 100 mg/L), > 1 lesão focal ≥ 5 mm na RM",
      "Estadiamento (R-ISS/R2-ISS) pela hematologia: albumina, beta-2-microglobulina, LDH, citogenética"
    ]
  },
  exames: [
    {
      nome: "Triagem de proteína monoclonal",
      pedido: "Eletroforese de proteínas séricas; imunofixação sérica; dosagem de cadeias leves livres kappa e lambda séricas com relação kappa/lambda.",
      porQue: "Detectar e tipar a proteína monoclonal. Os três juntos detectam quase todos os mielomas.",
      esperar: "Pico estreito (banda M) na região gama ou beta; relação kappa/lambda alterada.",
      interpretacao: "Relação de cadeias leves normal: 0,26–1,65 (função renal normal; na DRC o intervalo de referência é mais amplo). Eletroforese normal NÃO exclui mieloma de cadeia leve ou não secretor.",
      limitacoes: "Cadeias leves livres podem não estar disponíveis em todos os serviços SUS; nesse caso, imunofixação urinária em urina de 24 h."
    },
    {
      nome: "Urina",
      pedido: "Proteinúria de 24 h com eletroforese e imunofixação de proteínas urinárias.",
      porQue: "Cadeias leves (proteína de Bence Jones) e albuminúria (amiloidose).",
      esperar: "—",
      interpretacao: "Proteinúria alta com fita urinária pouco positiva sugere cadeias leves (a fita detecta principalmente albumina). Albuminúria nefrótica: pensar amiloidose.",
      limitacoes: "Coleta de 24 h incompleta é comum."
    },
    {
      nome: "Avaliação de órgão-alvo",
      pedido: "Hemograma com esfregaço (rouleaux), VHS, cálcio total e iônico, albumina, proteínas totais, ureia, creatinina, LDH, beta-2-microglobulina, ácido úrico, TGO, TGP.",
      porQue: "CRAB e prognóstico.",
      esperar: "—",
      interpretacao: "Gap (proteínas totais − albumina) > 4 g/dL sugere paraproteína ou gamopatia policlonal.",
      limitacoes: "Paraproteína pode causar pseudo-hiponatremia e interferir em exames."
    },
    {
      nome: "Imagem óssea",
      pedido: "TC de corpo inteiro de baixa dose (preferencial) ou inventário ósseo radiológico (crânio, coluna, pelve, úmeros, fêmures, costelas). RM de coluna se dor ou déficit neurológico. PET-CT conforme hematologia.",
      porQue: "Lesões líticas definem doença ativa.",
      esperar: "Lesões em saca-bocado, osteopenia difusa, fraturas vertebrais.",
      interpretacao: "≥ 1 lesão lítica ≥ 5 mm = critério de mieloma ativo.",
      limitacoes: "Cintilografia óssea NÃO serve (lesões do mieloma não captam)."
    },
    {
      nome: "Medula óssea (hematologia)",
      pedido: "Mielograma e biópsia de medula com imuno-histoquímica, citometria de fluxo e citogenética/FISH.",
      porQue: "Confirmar e estratificar.",
      esperar: "Plasmócitos clonais ≥ 10% no mieloma.",
      interpretacao: "—",
      limitacoes: "Centro de referência."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (SF 0,9%) — lesão renal ou hipercalcemia",
      linha: "l1",
      dose: "Para diurese de 100–150 mL/h (cerca de 3 L/dia) se sem sobrecarga",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até corrigir",
      monitorizacao: "Diurese, peso, ausculta, creatinina, cálcio",
      contraindicacoes: "Sobrecarga de volume, IC descompensada",
      ajustes: "Ver ficha hipercalcemia para o esquema completo"
    },
    {
      droga: "Ácido zoledrônico",
      linha: "l1",
      dose: "4 mg (hipercalcemia); na prevenção de eventos ósseos, dose ajustada ao ClCr conforme bula",
      via: "IV em no mínimo 15 min, em 100 mL de SF 0,9%",
      intervalo: "Dose única na hipercalcemia; mensal ou a cada 12 semanas na doença óssea (hematologia)",
      duracao: "Conforme hematologia (em geral até 2 anos)",
      monitorizacao: "Creatinina antes de cada dose, cálcio, vitamina D; avaliação odontológica antes (osteonecrose de mandíbula)",
      contraindicacoes: "ClCr < 30 mL/min (preferir pamidronato com infusão lenta ou denosumabe, conforme especialista)",
      ajustes: "Pamidronato 60–90 mg IV em 2–4 h é alternativa (ficha hipercalcemia)"
    },
    {
      droga: "Dexametasona",
      linha: "l1",
      dose: "Compressão medular: 16 mg (ficha compressao-medular-maligna). Mieloma ativo com lesão renal ou hipercalcemia: dose conforme hematologista (pulsos de dose alta são parte do tratamento inicial)",
      via: "VO ou IV",
      intervalo: "Conforme indicação",
      duracao: "Conforme hematologia",
      monitorizacao: "Glicemia, PA, infecção, sintomas gástricos",
      contraindicacoes: "Infecção grave não controlada (relativa)",
      ajustes: "Proteção gástrica; profilaxia de Strongyloides em área endêmica"
    },
    {
      droga: "Plasmaférese (hiperviscosidade)",
      linha: "l1",
      dose: "Conforme hemoterapia",
      via: "Aférese",
      intervalo: "Diária até melhora dos sintomas",
      duracao: "Até início da quimioterapia",
      monitorizacao: "Sintomas neurológicos, visuais e sangramento",
      contraindicacoes: "—",
      ajustes: "Na falta de aférese imediata: hidratação e flebotomia com reposição de volume, conforme hematologia. Evitar transfusão de hemácias antes de reduzir a viscosidade (piora o quadro)"
    },
    {
      droga: "Vacinas (influenza, pneumocócicas, covid; herpes-zóster recombinante)",
      linha: "adj",
      dose: "Conforme calendário do CRIE para imunossuprimidos",
      via: "IM",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Vacinas de vírus vivo durante tratamento",
      ajustes: "Mieloma e MGUS têm imunoparesia e maior risco de infecção"
    },
    {
      droga: "AINE, contraste iodado sem necessidade, desidratação",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Mieloma e suspeita de mieloma",
      ajustes: "Precipitam lesão renal por cadeias leves. Se contraste for indispensável: hidratar e checar creatinina"
    }
  ],
  destino: {
    agora: [
      "Urgência (hipercalcemia, LRA, compressão medular, hiperviscosidade, sepse): PS e hematologia",
      "Sem urgência: exames de triagem e encaminhamento prioritário"
    ],
    reavaliar: [
      "Cálcio e creatinina em 24–48 h na hipercalcemia ou LRA",
      "MGUS: eletroforese, cadeias leves, hemograma, cálcio e creatinina conforme risco"
    ],
    alta: [
      "Urgência controlada, com consulta de hematologia agendada"
    ],
    observacao: ["—"],
    internacao: [
      "Hipercalcemia sintomática ou ≥ 14 mg/dL, LRA, compressão medular, hiperviscosidade, infecção grave, fratura patológica com dor não controlada"
    ],
    transferencia: [
      "Centro de onco-hematologia; diálise se LRA grave; neurocirurgia/radioterapia na compressão medular"
    ]
  },
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — SUSPEITA DE MIELOMA / GAMOPATIA MONOCLONAL\nEletroforese de proteínas séricas; imunofixação sérica; cadeias leves livres kappa e lambda séricas com relação kappa/lambda; proteinúria de 24 h com eletroforese e imunofixação urinária.\nHemograma completo com esfregaço; VHS; cálcio total e iônico; albumina; proteínas totais; ureia; creatinina; LDH; beta-2-microglobulina; ácido úrico.\nTC de corpo inteiro de baixa dose ou inventário ósseo radiológico.\nHD: Suspeita de mieloma múltiplo (CID C90.0) / gamopatia monoclonal de significado indeterminado (CID D47.2).\n\nDOR ÓSSEA (sem AINE)\nUSO ORAL\n1. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n2. Paracetamol 750 mg ---------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se dor (máx. 4 por dia), podendo alternar com a dipirona.",
    hospitalar: "MIELOMA COM HIPERCALCEMIA E/OU LESÃO RENAL — ADULTO (peso: ___ kg)\n1. Dieta livre, sem suplementos de cálcio; estimular ingestão de água se consciente.\n2. SF 0,9% 200–300 mL/h IV inicialmente, ajustando para diurese de 100–150 mL/h (reduzir se idoso, cardiopata ou congestão).\n3. Ácido zoledrônico 4 mg + SF 0,9% 100 mL IV em no mínimo 15 min, dose única (se ClCr < 30 mL/min: discutir pamidronato 60–90 mg IV em 2–4 h ou alternativa com especialista). Ver ficha hipercalcemia.\n4. Dexametasona: dose conforme hematologista (compressão medular: 16 mg VO/IV agora — ficha compressao-medular-maligna).\n5. Omeprazol 20 mg VO 1×/dia em jejum.\n6. Suspender AINE, IECA/BRA, diuréticos tiazídicos, metformina se LRA; evitar contraste iodado.\n7. Dipirona 1 g IV de 6/6 h se dor; morfina 2–4 mg IV se dor intensa.\n8. Enoxaparina 40 mg SC 1×/dia (ClCr < 30: 20 mg) se imobilizado e sem contraindicação.\n9. Exames: cálcio, creatinina, ureia, Na, K, Mg, P de 12/12 h a 24/24 h; hemograma diário.\n10. Controles: diurese horária, peso diário, sinais vitais de 4/4 h, Glasgow.\n11. Hematologia e nefrologia (diálise se LRA grave/refratária)."
  },
  orientacoesRetorno: [
    "Faça os exames de sangue e urina pedidos; o diagnóstico depende deles",
    "Não use anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida); para dor use dipirona ou paracetamol",
    "Beba água ao longo do dia (cerca de 2 a 3 litros, salvo orientação contrária por problema no coração ou rim)",
    "Volte ao PS se tiver confusão, sonolência, muita sede e vômitos, urinar pouco, fraqueza nas pernas, dor forte nas costas, febre ou sangramentos",
    "Quem tem MGUS: na maioria das vezes não vira câncer, mas precisa repetir exames no prazo combinado",
    "Antes de usar ácido zoledrônico: avaliação com dentista; avise se tiver dor ou ferida na boca"
  ],
  tabelas: [
    {
      titulo: "MGUS x mieloma assintomático x mieloma (IMWG 2014)",
      colunas: ["Condição", "Proteína M / plasmócitos", "Lesão de órgão (CRAB/SLiM)", "Seguimento"],
      linhas: [
        ["MGUS não IgM", "< 3 g/dL e plasmócitos < 10%", "Ausente", "Risco baixo: repetir em 6 meses e depois a cada 2–3 anos; risco maior: anual"],
        ["Mieloma assintomático (smoldering)", "≥ 3 g/dL (ou urinária ≥ 500 mg/24 h) e/ou plasmócitos 10–59%", "Ausente", "Hematologia a cada 3–6 meses"],
        ["Mieloma múltiplo", "Plasmócitos ≥ 10% ou plasmocitoma", "CRAB ou SLiM presente", "Tratamento pela hematologia"]
      ],
      nota: "MGUS de risco baixo (Mayo): proteína M < 1,5 g/dL, tipo IgG e relação de cadeias leves normal. Risco de progressão do MGUS: cerca de 1% ao ano."
    }
  ],
  fontes: [
    "International Myeloma Working Group — Updated criteria for the diagnosis of multiple myeloma (Lancet Oncol, 2014)",
    "IMWG — Recommendations on imaging in monoclonal plasma cell disorders (Lancet Oncol, 2019)",
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas do Mieloma Múltiplo (versão vigente)",
    "ESMO — Multiple myeloma: Clinical Practice Guidelines (2021)",
    "Kyle RA et al. — MGUS: risk stratification (Mayo Clinic) e NCCN Guidelines Multiple Myeloma (2025)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
