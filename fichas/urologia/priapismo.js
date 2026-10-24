// Priapismo
registrarFicha({
  id: "priapismo",
  especialidade: "urologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Priapismo",
  resumo: "Ereção persistente (> 4 h) sem relação com estímulo sexual. O isquêmico (baixo fluxo, doloroso) é emergência: aspiração dos corpos cavernosos e fenilefrina intracavernosa. O não isquêmico (alto fluxo, pós-trauma, indolor) não é emergência.",
  palavrasChave: "priapismo isquemico baixo fluxo alto fluxo nao isquemico aspiracao corpo cavernoso fenilefrina intracavernosa gasometria cavernosa anemia falciforme trazodona injecao intracavernosa alprostadil papaverina sildenafil disfuncao eretil",
  critico: {
    tempo: "Isquêmico: aspirar em < 4–6 h",
    texto: "Ereção rígida e dolorosa > 4 h: gasometria do corpo cavernoso, aspiração e fenilefrina intracavernosa. Após 24–48 h, o risco de disfunção erétil definitiva é muito alto."
  },
  alarmes: [
    "Ereção rígida e dolorosa por mais de 4 h",
    "Anemia falciforme (episódios recorrentes ou prolongados)",
    "Uso de injeção intracavernosa, trazodona, antipsicóticos, cocaína",
    "Doenças hematológicas (leucemia) ou neoplasia pélvica",
    "PA muito elevada, arritmia ou dor torácica durante uso de fenilefrina"
  ],
  condutaInicial: [
    "Tempo de ereção, dor, causa provável (medicamentos, drogas, falciforme, trauma perineal)",
    "Exame: corpos cavernosos rígidos com glande e corpo esponjoso flácidos (isquêmico) x parcialmente rígido e indolor (não isquêmico)",
    "Gasometria do sangue aspirado do corpo cavernoso: diferencia isquêmico de não isquêmico",
    "Isquêmico: analgesia + bloqueio peniano dorsal; aspiração com agulha 16–19 G (lateral, às 2 h ou 10 h, na base do pênis) e lavagem com SF 0,9%; depois fenilefrina intracavernosa diluída, repetindo a cada 3–5 min",
    "Monitorizar PA e FC durante a fenilefrina (ideal em monitor)",
    "Falha após ~1 h de aspiração/fenilefrina → urologia para shunt cirúrgico",
    "Anemia falciforme: hidratação, analgesia e O₂ junto com o tratamento urológico (não atrasar a aspiração aguardando transfusão)",
    "Não isquêmico: conservador (gelo, compressão perineal); urologia eletiva (angioembolização seletiva se persistir)"
  ],
  fataisExcluir: [
    "Crise vaso-oclusiva falciforme com síndrome torácica aguda",
    "Leucemia / hiperviscosidade",
    "Intoxicação por cocaína",
    "Crise hipertensiva/arritmia pela fenilefrina"
  ],
  proximaDecisao: "Detumescência sustentada → observar 1–2 h e alta com urologia. Recidiva → repetir aspiração/fenilefrina. Falha após ~1 h → shunt cirúrgico (urologia); > 36–48 h pode haver indicação de prótese peniana precoce.",
  clinica: {
    anamnese: [
      "Duração da ereção (marcar a hora de início), dor",
      "Episódios prévios (priapismo intermitente)",
      "Medicamentos: injeção intracavernosa (alprostadil, papaverina), trazodona, antipsicóticos, alfabloqueadores, inibidores de PDE-5, anticoagulantes",
      "Drogas: cocaína, álcool, maconha",
      "Anemia falciforme, leucemia, neoplasia",
      "Trauma perineal/peniano (queda a cavaleiro) dias antes → alto fluxo"
    ],
    exameFisico: [
      "Rigidez dos corpos cavernosos; glande e corpo esponjoso",
      "Dor",
      "Períneo: hematoma, sinal de trauma",
      "Abdome e linfonodos (neoplasia), sinais de doença hematológica"
    ],
    diferenciais: [
      { dx: "Priapismo isquêmico (baixo fluxo)", pista: "Rígido, doloroso; sangue cavernoso escuro; pO₂ < 30, pCO₂ > 60, pH < 7,25" },
      { dx: "Priapismo não isquêmico (alto fluxo)", pista: "Parcialmente rígido, indolor; pós-trauma; sangue vermelho vivo, gasometria arterial; Doppler com fístula" },
      { dx: "Priapismo intermitente (stuttering)", pista: "Episódios recorrentes autolimitados, típico da anemia falciforme" },
      { dx: "Fratura peniana", pista: "Estalo, detumescência, hematoma (ver ficha trauma-genitourinario)" }
    ],
    gravidade: [
      "Isquêmico > 4 h = emergência; quanto maior o tempo, maior a fibrose e a disfunção erétil",
      "Após 48 h, a maioria evolui com disfunção erétil"
    ]
  },
  exames: [
    {
      nome: "Gasometria do corpo cavernoso",
      pedido: "Gasometria do sangue aspirado do corpo cavernoso (seringa heparinizada), por punção peniana.",
      porQue: "Diferenciar isquêmico de não isquêmico.",
      esperar: "Imediato.",
      interpretacao: "Isquêmico: pO₂ < 30 mmHg, pCO₂ > 60 mmHg, pH < 7,25. Não isquêmico: valores semelhantes ao sangue arterial (pO₂ > 90, pCO₂ < 40, pH 7,40).",
      limitacoes: "—"
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma com reticulócitos, eletroforese de hemoglobina (se desconhecida), toxicológico urinário (cocaína).",
      porQue: "Anemia falciforme, leucemia, drogas.",
      esperar: "—",
      interpretacao: "Leucocitose extrema → hematologia urgente.",
      limitacoes: "Não atrasar o tratamento."
    },
    {
      nome: "US Doppler peniano e perineal",
      pedido: "Ultrassom Doppler de pênis e períneo.",
      porQue: "Confirmar alto fluxo (fístula arteriolacunar) quando a gasometria é duvidosa.",
      esperar: "—",
      interpretacao: "Fluxo ausente/baixo nas artérias cavernosas → isquêmico. Fluxo alto/turbulento → não isquêmico.",
      limitacoes: "Não atrasar aspiração no isquêmico."
    }
  ],
  tratamento: [
    {
      droga: "Aspiração e lavagem dos corpos cavernosos",
      linha: "l1",
      dose: "Aspirar até sair sangue vermelho (com ou sem lavagem com SF 0,9%)",
      via: "Intracavernosa, agulha 16–19 G, às 2 h ou 10 h da base do pênis (evitar dorso e face ventral)",
      intervalo: "Pode repetir",
      duracao: "—",
      monitorizacao: "Detumescência, hematoma",
      contraindicacoes: "—",
      ajustes: "Antes: bloqueio do nervo dorsal do pênis com lidocaína 1–2% sem vasoconstritor (máx 4,5 mg/kg) ou infiltração local; analgesia sistêmica"
    },
    {
      droga: "Fenilefrina intracavernosa (ampola 10 mg/mL)",
      linha: "l1",
      dose: "Solução de 100–500 mcg/mL: injetar 1 mL",
      via: "Intracavernosa",
      intervalo: "A cada 3–5 min",
      duracao: "Até detumescência ou por cerca de 1 h",
      monitorizacao: "PA e FC (monitor), sintomas cardiovasculares",
      contraindicacoes: "Cautela em HAS grave, coronariopatia, arritmia, uso de IMAO",
      ajustes: "Diluir: 1 mL (10 mg) + SF 0,9% 99 mL = 100 mcg/mL; ou 1 mL + 19 mL = 500 mcg/mL. Usar concentrações menores em cardiopatas. Fenilefrina pode ser pouco disponível no Brasil: outras drogas alfa-adrenérgicas (ex.: etilefrina, adrenalina diluída) são usadas em alguns protocolos — dose conforme urologia"
    },
    {
      droga: "Shunt cirúrgico (distal ou proximal)",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica (urologia)",
      intervalo: "Falha do tratamento intracavernoso",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Priapismo prolongado (> 36–48 h): discutir prótese peniana precoce"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "adj",
      dose: "2–4 mg",
      via: "IV",
      intervalo: "A cada 5–10 min até controle",
      duracao: "—",
      monitorizacao: "FR, PA",
      contraindicacoes: "—",
      ajustes: "Anemia falciforme: analgesia e hidratação conforme ficha crise-falciforme"
    },
    {
      droga: "Exsanguinotransfusão / hidratação isoladas (falciforme)",
      linha: "ci",
      dose: "Não usar como tratamento único inicial",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Atrasam a aspiração; exsanguinotransfusão associada a eventos neurológicos (síndrome ASPEN)",
      ajustes: "Tratamento urológico intracavernoso primeiro (AUA/SMSNA 2022)"
    }
  ],
  destino: {
    agora: [
      "Isquêmico: aspiração/fenilefrina no PS e urologia"
    ],
    reavaliar: [
      "Após detumescência: observar 1–2 h (recidiva)",
      "PA e FC durante e 1 h após fenilefrina"
    ],
    alta: [
      "Detumescência sustentada, sem dor, PA estável, com retorno à urologia",
      "Não isquêmico: alta com gelo/compressão e urologia ambulatorial"
    ],
    observacao: ["Recidiva precoce: repetir tratamento e chamar urologia"],
    internacao: [
      "Falha do tratamento, necessidade de shunt, anemia falciforme com outras complicações"
    ],
    transferencia: [
      "Sem urologia: iniciar aspiração e fenilefrina se houver capacitação; transferir se falha ou sem capacitação, como emergência"
    ]
  },
  prescricao: {
    hospitalar: "PRIAPISMO ISQUÊMICO (adulto; peso: ___ kg)\n1. Monitor cardíaco e PA não invasiva de 5/5 min durante o procedimento.\n2. Acesso venoso.\n3. Dipirona 1 g IV + morfina 2–4 mg IV (1 mg/mL) se dor.\n4. Bloqueio peniano dorsal: lidocaína 2% sem vasoconstritor 5–10 mL (máx 4,5 mg/kg) na base do pênis.\n5. Aspiração dos corpos cavernosos com scalp/agulha 19 G às 10 h ou 2 h, até sangue vermelho; lavar com SF 0,9% 10–20 mL e reaspirar. Enviar 1ª amostra para gasometria.\n6. Fenilefrina 10 mg/mL — 1 mL + SF 0,9% 99 mL (100 mcg/mL): injetar 1 mL intracavernoso a cada 3–5 min até detumescência, por até 1 h (interromper se PA ou FC muito elevadas, bradicardia reflexa intensa ou dor torácica).\n7. Após detumescência: curativo compressivo leve; observar por 1–2 h.\n8. Se anemia falciforme: hidratação venosa (ex.: SF 0,9% conforme volemia), O₂ se SpO₂ < 95%, hematologia.\n9. Falha: urologia para shunt."
  },
  orientacoesRetorno: [
    "Ereção que dura mais de 4 horas é emergência: procurar o pronto-socorro imediatamente",
    "Pode haver hematoma no pênis por alguns dias após a punção",
    "Voltar se a ereção voltar, dor forte, sangramento no local da punção ou febre",
    "Não usar a medicação para ereção nem drogas que causaram o quadro até falar com a urologia",
    "Anemia falciforme: procurar o hematologista para prevenção de novos episódios",
    "Retorno com urologia para avaliar função erétil"
  ],
  fontes: [
    "AUA/SMSNA — Diagnosis and Management of Priapism Guideline (2022)",
    "EAU — Guidelines on Sexual and Reproductive Health: priapism (2024)",
    "Ministério da Saúde — Doença falciforme: condutas básicas para tratamento (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
