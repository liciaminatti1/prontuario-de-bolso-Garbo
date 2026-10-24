// Escroto agudo
registrarFicha({
  id: "escroto-agudo",
  especialidade: "urologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Escroto agudo: torção testicular, torção de apêndice, epididimite",
  resumo: "Dor escrotal aguda: excluir torção testicular (emergência cirúrgica com janela de ~6 h) usando clínica, escore TWIST e Doppler; tratar torção de apêndice testicular e epididimite/orquite.",
  palavrasChave: "escroto agudo torcao testicular torcao de cordao espermatico twist reflexo cremasterico sinal de prehn torcao de apendice testicular hidatide de morgagni ponto azul epididimite orquite caxumba ceftriaxona doxiciclina levofloxacino",
  critico: {
    tempo: "Torção: cirurgia em até 6 h",
    texto: "Dor escrotal súbita em criança, adolescente ou adulto jovem é torção até prova em contrário. Urologia imediata; não atrasar cirurgia por exame quando o TWIST é alto."
  },
  alarmes: [
    "Dor escrotal de início súbito, intensa, às vezes acordando o paciente",
    "Náusea e vômitos com dor escrotal",
    "Testículo elevado, horizontalizado, endurecido",
    "Reflexo cremastérico ausente",
    "Dor abdominal baixa em menino (sempre examinar o escroto)",
    "Recém-nascido com escroto endurecido e escurecido (torção neonatal)",
    "Febre alta, toxemia, crepitação ou necrose de pele do períneo (gangrena de Fournier)"
  ],
  condutaInicial: [
    "Tempo de início da dor (cada hora conta)",
    "Examinar em pé e deitado: posição e eixo do testículo, reflexo cremastérico, ponto doloroso",
    "Calcular o TWIST (tabela): alto risco → urologia e centro cirúrgico sem esperar US; intermediário → US Doppler imediato; baixo → US conforme quadro",
    "Analgesia IV e jejum enquanto não excluir torção",
    "Destorção manual ('abrir o livro', girar o testículo de medial para lateral) se a cirurgia vai demorar — é temporária e não dispensa cirurgia",
    "Torção de apêndice: tratamento conservador",
    "Epididimite/orquite: antibiótico conforme idade e risco de IST; tratar parceiros quando IST"
  ],
  fataisExcluir: [
    "Torção testicular",
    "Gangrena de Fournier",
    "Hérnia inguinal encarcerada/estrangulada",
    "Trauma com ruptura testicular",
    "Abscesso escrotal"
  ],
  proximaDecisao: "TWIST ≥ 5 ou Doppler com fluxo ausente/reduzido → exploração cirúrgica imediata (com orquidopexia bilateral). Doppler normal com fluxo aumentado no epidídimo → epididimite. Ponto azul no polo superior com testículo normal → torção de apêndice.",
  clinica: {
    anamnese: [
      "Início (súbito x gradual), tempo de dor, episódios prévios de dor que passaram (torção intermitente)",
      "Náusea e vômitos (sugere torção)",
      "Sintomas urinários, secreção uretral, relação sexual desprotegida (epididimite)",
      "Caxumba recente, vacinação (orquite viral)",
      "Trauma, esforço; cirurgia ou sondagem urológica recente"
    ],
    exameFisico: [
      "Testículo elevado e horizontalizado (sinal de 'badalo'), edema, consistência",
      "Reflexo cremastérico: estimular a face interna da coxa; ausente na torção (presente não exclui totalmente)",
      "Ponto azul no polo superior (torção de apêndice)",
      "Sinal de Prehn (alívio ao elevar o testículo na epididimite) — pouco confiável",
      "Abdome e canal inguinal (hérnia), períneo (Fournier)",
      "Meato: secreção"
    ],
    diferenciais: [
      { dx: "Torção testicular", pista: "Súbita, náuseas/vômitos, testículo alto, cremastérico ausente; pico no período neonatal e na adolescência" },
      { dx: "Torção de apêndice testicular", pista: "Pré-púbere (7–12 anos), dor localizada no polo superior, ponto azul, testículo normal" },
      { dx: "Epididimite / orquiepididimite", pista: "Início gradual, febre, disúria/secreção, dor no epidídimo; Doppler com fluxo aumentado" },
      { dx: "Orquite por caxumba", pista: "Parotidite 4–8 dias antes, pós-puberal" },
      { dx: "Hérnia inguinal encarcerada", pista: "Massa que não reduz, vem do canal inguinal" },
      { dx: "Edema escrotal idiopático / púrpura de Henoch-Schönlein", pista: "Edema e eritema de pele, testículo normal; púrpura em membros inferiores" },
      { dx: "Tumor de testículo", pista: "Massa endurecida, geralmente indolor; US" }
    ],
    gravidade: [
      "Salvamento testicular na torção: muito alto em < 6 h, cai progressivamente depois e é baixo após 24 h",
      "TWIST (tabela): 0–2 baixo risco · 3–4 intermediário · 5–7 alto risco"
    ]
  },
  exames: [
    {
      nome: "US de bolsa testicular com Doppler",
      pedido: "Ultrassom de bolsa testicular com Doppler colorido — URGENTE (suspeita de torção testicular).",
      porQue: "Avaliar fluxo testicular, epidídimo, apêndices e cordão (sinal do redemoinho).",
      esperar: "Imediato; não atrasar cirurgia se alta suspeita.",
      interpretacao: "Fluxo ausente/reduzido ou redemoinho no cordão → torção. Fluxo aumentado no epidídimo → epididimite. Massa avascular junto ao polo superior → torção de apêndice.",
      limitacoes: "Fluxo presente não exclui torção parcial ou intermitente. Dependente do operador."
    },
    {
      nome: "Urina e IST",
      pedido: "Urina tipo 1 e urocultura. Teste molecular (PCR) para Chlamydia trachomatis e Neisseria gonorrhoeae em urina de primeiro jato ou secreção uretral; bacterioscopia (Gram) da secreção. Sorologias para HIV, sífilis e hepatites B e C.",
      porQue: "Etiologia da epididimite.",
      esperar: "PCR em dias; não aguardar para tratar.",
      interpretacao: "Diplococos Gram-negativos → gonococo. Piúria/bacteriúria em idoso ou criança → bactéria entérica (investigar via urinária).",
      limitacoes: "Urina normal não exclui epididimite; piúria não exclui torção."
    }
  ],
  tratamento: [
    {
      droga: "Exploração cirúrgica com orquidopexia bilateral",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica (urologia)",
      intervalo: "Imediata",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Testículo inviável → orquiectomia. Fixar o contralateral"
    },
    {
      droga: "Ceftriaxona + doxiciclina (epididimite com risco de IST, em geral < 35 anos)",
      linha: "l1",
      dose: "Ceftriaxona 500 mg (1 g se ≥ 150 kg) dose única + doxiciclina 100 mg de 12/12 h",
      via: "Ceftriaxona IM · Doxiciclina VO",
      intervalo: "—",
      duracao: "Doxiciclina por 10 dias",
      monitorizacao: "Melhora em 72 h",
      contraindicacoes: "Doxiciclina: gestação, < 8 anos",
      ajustes: "Sexo anal insertivo (risco de entéricos): ceftriaxona dose única + levofloxacino 500 mg VO 1 vez ao dia por 10 dias. Tratar parceria sexual dos últimos 60 dias. Notificar se IST de notificação"
    },
    {
      droga: "Levofloxacino (epididimite por bactéria entérica: > 35 anos sem risco de IST, pós-procedimento urológico)",
      linha: "alt",
      dose: "500 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "10 dias",
      monitorizacao: "Tendinopatia, QT, glicemia",
      contraindicacoes: "< 18 anos, gestação, miastenia",
      ajustes: "Alternativa conforme urocultura: ciprofloxacino 500 mg de 12/12 h por 10 dias ou SMX-TMP 800/160 mg de 12/12 h. Ajustar à função renal"
    },
    {
      droga: "Epididimite em criança pré-púbere",
      linha: "adj",
      dose: "Geralmente pós-infecciosa/inflamatória: analgesia e repouso; antibiótico só se urina alterada/urocultura positiva",
      via: "VO",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "ITU com epididimite: tratar como ITU (ver ficha itu-infancia) e investigar anomalias do trato urinário"
    },
    {
      droga: "Analgesia (todos)",
      linha: "l1",
      dose: "Dipirona: adulto 1 g; criança 15 mg/kg (máx 1 g) · Ibuprofeno: adulto 400–600 mg; criança 10 mg/kg (máx 400 mg) · Morfina IV se dor intensa: adulto 2–4 mg; criança 0,05–0,1 mg/kg (máx 4 mg)",
      via: "IV ou VO",
      intervalo: "Dipirona 6/6 h · Ibuprofeno 8/8 h",
      duracao: "Conforme dor",
      monitorizacao: "—",
      contraindicacoes: "AINE: DRC, úlcera, sangramento",
      ajustes: "Suspensório escrotal, gelo e repouso na epididimite e torção de apêndice"
    }
  ],
  destino: {
    agora: [
      "Suspeita de torção: urologia e centro cirúrgico; sem urologia, transferência imediata (não esperar US se TWIST alto)"
    ],
    reavaliar: [
      "Epididimite: melhora em 72 h; sem melhora → US (abscesso, tumor) e reavaliar diagnóstico"
    ],
    alta: [
      "Torção excluída: torção de apêndice ou epididimite sem sinais sistêmicos, com analgesia e retorno"
    ],
    observacao: ["—"],
    internacao: [
      "Torção (cirurgia), epididimite com sepse, abscesso, falha do tratamento oral, Fournier"
    ],
    transferencia: [
      "Sem urologia/cirurgia pediátrica: transferir como emergência, em jejum, com analgesia"
    ]
  },
  prescricao: {
    ambulatorial: "EPIDIDIMITE — RISCO DE IST (adulto)\nUSO INTRAMUSCULAR\n1. Ceftriaxona 500 mg ------------------------------ 1 frasco-ampola\n   Aplicar 500 mg IM dose única na unidade (diluir em lidocaína 1% sem vasoconstritor 2 mL).\nUSO ORAL\n2. Doxiciclina 100 mg ------------------------------ 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 10 dias, com um copo de água, sem deitar em seguida.\n3. Ibuprofeno 600 mg ------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias.\n4. Dipirona 500 mg --------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\nCUIDADOS: suspensório escrotal ou cueca firme; gelo 20 min 3–4 vezes ao dia; não ter relações sexuais até completar o tratamento (e parceria tratada).\n\nEPIDIDIMITE ENTÉRICA (> 35 anos, sem risco de IST)\n1. Levofloxacino 500 mg ---------------------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 10 dias.\n\nTORÇÃO DE APÊNDICE / CRIANÇA (peso: ___ kg)\n1. Ibuprofeno suspensão 100 mg/5 mL — 10 mg/kg/dose (0,5 mL/kg; máx 20 mL) de 8 em 8 horas por 5 dias.\n2. Dipirona 500 mg/mL gotas — 15 mg/kg/dose (≈ 0,6 gota/kg; máx 40 gotas) de 6 em 6 horas se dor.",
    hospitalar: "SUSPEITA DE TORÇÃO TESTICULAR (peso: ___ kg)\n1. Dieta zero.\n2. Acesso venoso.\n3. Dipirona 1 g (criança 15 mg/kg, máx 1 g) IV agora.\n4. Morfina 10 mg/mL diluída a 1 mg/mL: adulto 2–4 mg IV; criança 0,05–0,1 mg/kg IV (máx 4 mg) se dor intensa.\n5. Ondansetrona 4 mg IV (criança 0,15 mg/kg, máx 4 mg) se vômitos.\n6. US Doppler de bolsa escrotal urgente (se não atrasar a cirurgia) e avaliação imediata da urologia.\n7. Registrar hora de início da dor."
  },
  orientacoesRetorno: [
    "Dor no testículo que começa de repente é emergência: procurar o pronto-socorro na hora, sem esperar passar",
    "Epididimite: a dor melhora em 2–3 dias com o tratamento; completar o antibiótico; parceria sexual também precisa tratar",
    "Voltar imediatamente se: dor que piora, febre alta, vômitos, vermelhidão ou escurecimento da pele do escroto",
    "Torção de apêndice: dor pode durar até 1–2 semanas; repouso e anti-inflamatório",
    "Retorno com urologia ou UBS em 1–2 semanas para conferir resolução (e resultado dos exames de IST)"
  ],
  tabelas: [
    {
      titulo: "Escore TWIST (Testicular Workup for Ischemia and Suspected Torsion)",
      colunas: ["Achado", "Pontos"],
      linhas: [
        ["Edema testicular", "2"],
        ["Testículo endurecido", "2"],
        ["Reflexo cremastérico ausente", "1"],
        ["Náusea ou vômito", "1"],
        ["Testículo elevado (alto)", "1"]
      ],
      nota: "0–2: baixo risco (US conforme quadro) · 3–4: intermediário (US Doppler urgente) · 5–7: alto risco (cirurgia sem esperar US). Validado em crianças; usar com cautela em adultos e quando aplicado por não urologistas."
    }
  ],
  fontes: [
    "Barbosa JA et al. — TWIST score (J Urol, 2013); Sheth KR et al. — validação por não urologistas (J Urol, 2016)",
    "EAU/ESPU — Guidelines on Paediatric Urology: acute scrotum (2024)",
    "Ministério da Saúde — PCDT Atenção Integral às Pessoas com IST (2022)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines: epididymitis (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
