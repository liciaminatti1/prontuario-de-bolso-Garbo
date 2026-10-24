// Hemorragia pós-parto
registrarFicha({
  id: "hemorragia-pos-parto",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Hemorragia pós-parto (HPP)",
  resumo: "Perda de sangue ≥ 500 mL após o parto (≥ 1.000 mL na cesárea) ou qualquer perda que cause instabilidade hemodinâmica. OMS 2025: considerar HPP já a partir de 300 mL se houver sinais vitais alterados. Principal causa evitável de morte materna no Brasil.",
  palavrasChave: "hpp hemorragia pos parto puerperal atonia uterina 4 ts tonus trauma tecido trombina indice de choque ocitocina acido tranexamico misoprostol metilergometrina methergin balao de bakri tamponamento inversao uterina johnson transfusao macica traje antichoque tan zero morte materna",
  critico: {
    tempo: "Uterotônico + tranexâmico em 15 min",
    texto: "Chamar ajuda, massagem uterina, ocitocina IV e ácido tranexâmico 1 g IV (até 3 h do parto). Calcular índice de choque (FC/PAS): ≥ 0,9 indica perda importante; ≥ 1,4 indica transfusão imediata."
  },
  alarmes: [
    "Índice de choque (FC ÷ PAS) ≥ 0,9; ≥ 1,4 = grave",
    "Sangramento persistente apesar de útero contraído (pensar em trauma ou coagulopatia)",
    "Útero não palpável no abdome, massa vaginal e choque desproporcional (inversão uterina)",
    "Sangue que não coagula, sangramento em punções (CIVD)",
    "Rebaixamento de consciência, oligúria, extremidades frias",
    "Dor intensa e sangramento após parto com cesárea prévia (rotura uterina)"
  ],
  condutaInicial: [
    "Pedir ajuda: obstetra, anestesista, enfermagem; acionar banco de sangue (código de hemorragia se houver)",
    "Registrar a hora; calcular índice de choque; quantificar a perda (pesar compressas, coletor/drape calibrado)",
    "2 acessos calibrosos (14–16G); coletar hemograma, tipagem, prova cruzada, coagulograma, fibrinogênio",
    "O₂ por máscara, monitor, sonda vesical (diurese horária), aquecer a paciente",
    "Massagem uterina bimanual + ocitocina 5 UI IV lento e infusão de 20 UI em 500 mL",
    "Ácido tranexâmico 1 g IV em 10 min, o mais cedo possível (até 3 h do parto)",
    "Cristaloide aquecido 500 mL em bolus e reavaliar (evitar > 1.500–2.000 mL antes do sangue)",
    "Revisar os 4 Ts: tônus, trauma (laceração, hematoma, rotura, inversão), tecido (placenta retida) e trombina (coagulopatia)"
  ],
  fataisExcluir: [
    "Atonia uterina (70% dos casos)",
    "Rotura uterina",
    "Inversão uterina",
    "Retenção placentária / acretismo",
    "Coagulopatia: CIVD (DPP, embolia amniótica, sepse, óbito fetal), HELLP",
    "Hematoma de parede, vulvar ou retroperitoneal (choque com pouco sangramento externo)"
  ],
  proximaDecisao: "Sem resposta à ocitocina em 15–30 min: associar metilergometrina (se sem hipertensão) e/ou misoprostol; sem resposta: balão de tamponamento intrauterino e traje antichoque não pneumático; persistindo: cirurgia (suturas compressivas tipo B-Lynch, ligaduras vasculares, histerectomia) ou embolização. Instabilidade com IC ≥ 1,4: transfusão imediata e protocolo de transfusão maciça.",
  clinica: {
    anamnese: [
      "Tipo e hora do parto, duração do trabalho de parto, uso de ocitocina, parto instrumental",
      "Fatores de risco: gestação múltipla, polidrâmnio, macrossomia, multiparidade, trabalho de parto prolongado ou precipitado, corioamnionite, placenta prévia/acreta, cesárea prévia, HPP prévia, anemia, pré-eclâmpsia, anticoagulante",
      "Dequitação completa? Placenta conferida?"
    ],
    exameFisico: [
      "FC, PA, índice de choque, FR, SpO₂, perfusão, consciência, diurese",
      "Palpação uterina: útero amolecido acima da cicatriz umbilical (atonia) ou ausente (inversão)",
      "Revisão do canal de parto com boa iluminação e analgesia (colo, vagina, períneo)",
      "Revisão da cavidade uterina se suspeita de restos placentários",
      "Sinais de coagulopatia: sangramento em punções, sangue sem coágulos"
    ],
    diferenciais: [
      { dx: "Tônus (atonia)", pista: "Útero amolecido e aumentado; melhora com massagem e uterotônico" },
      { dx: "Trauma (lacerações, hematoma)", pista: "Útero contraído com sangramento vivo; hematoma doloroso" },
      { dx: "Tecido (restos, acretismo)", pista: "Placenta incompleta, dequitação difícil, cesáreas prévias com placenta prévia" },
      { dx: "Trombina (coagulopatia)", pista: "Sangue não coagula, fibrinogênio < 200 mg/dL, DPP, embolia amniótica" },
      { dx: "Inversão uterina", pista: "Fundo uterino não palpável, massa na vagina, choque desproporcional (vagal)" }
    ],
    gravidade: [
      "Índice de choque (OPAS 2018): ≥ 0,9 = perda significativa; ≥ 1,4 = transfusão imediata; ≥ 1,7 = risco muito alto de desfecho grave",
      "HPP grave: perda ≥ 1.000 mL, instabilidade, necessidade de transfusão",
      "HPP maciça: perda > 2.000 mL ou necessidade de ≥ 4 concentrados de hemácias",
      "Sinais clínicos aparecem tarde na gestante: hipotensão indica perda já de cerca de 30% da volemia"
    ]
  },
  exames: [
    {
      nome: "Hemograma, tipagem e prova cruzada",
      pedido: "Hemograma completo com plaquetas. Tipagem ABO/Rh. Prova cruzada para 2–4 concentrados de hemácias (URGENTE).",
      porQue: "Base para transfusão e seguimento.",
      esperar: "Hb inicial pode estar normal na hemorragia aguda.",
      interpretacao: "Não esperar resultado para transfundir paciente instável (sangue O negativo ou tipo específico).",
      limitacoes: "Hb atrasada em relação à perda real."
    },
    {
      nome: "Coagulação e fibrinogênio",
      pedido: "TP/INR, TTPa, fibrinogênio (Clauss). Repetir a cada 30–60 min na hemorragia ativa. Tromboelastometria (ROTEM/TEG) se disponível.",
      porQue: "Coagulopatia é causa e consequência da HPP.",
      esperar: "Fibrinogênio normal no termo costuma ser > 400 mg/dL.",
      interpretacao: "Fibrinogênio < 200 mg/dL prediz HPP grave: repor crioprecipitado ou concentrado de fibrinogênio.",
      limitacoes: "Resultados demoram; ROTEM orienta mais rápido."
    },
    {
      nome: "Gasometria e lactato",
      pedido: "Gasometria venosa ou arterial com lactato, cálcio iônico e potássio.",
      porQue: "Perfusão, acidose, hipocalcemia da transfusão.",
      esperar: "Lactato < 2 mmol/L.",
      interpretacao: "Lactato alto e acidose = choque; corrigir cálcio iônico < 1,1 mmol/L na transfusão maciça.",
      limitacoes: "—"
    },
    {
      nome: "Ultrassonografia à beira do leito",
      pedido: "USG pélvica/abdominal à beira do leito (restos placentários, líquido livre, hematoma).",
      porQue: "Busca de tecido retido e sangramento oculto.",
      esperar: "—",
      interpretacao: "Líquido livre com choque após cesárea ou parto com cicatriz prévia: pensar rotura ou sangramento intra-abdominal.",
      limitacoes: "Não atrasar a conduta."
    }
  ],
  tratamento: [
    {
      droga: "Ocitocina",
      linha: "l1",
      dose: "5 UI IV lento (em 3 min) + 20 UI em 500 mL de SF 0,9% a 250 mL/h; manutenção 20 UI em 500 mL a 125 mL/h por 4 h",
      via: "IV (prevenção: 10 UI IM logo após o nascimento)",
      intervalo: "Contínuo",
      duracao: "Até 4 h após controle do sangramento (ou 24 h se atonia importante, conforme protocolo)",
      monitorizacao: "Tônus uterino, PA (hipotensão com bolus rápido), diurese",
      contraindicacoes: "—",
      ajustes: "Não aplicar bolus rápido: hipotensão e arritmia. Doses muito altas: intoxicação hídrica (hiponatremia)"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "l1",
      dose: "1 g (ampola 250 mg/5 mL: 4 ampolas = 20 mL) em 100 mL de SF 0,9%",
      via: "IV em 10 min",
      intervalo: "Repetir 1 g se sangramento persistir após 30 min ou recomeçar em até 24 h",
      duracao: "Máximo 2 doses",
      monitorizacao: "Sangramento; convulsão (rara)",
      contraindicacoes: "Iniciar até 3 h do parto (após 3 h não há benefício). Cautela em TEV ativo",
      ajustes: "Usar em toda HPP, qualquer causa, junto ao uterotônico (OMS)"
    },
    {
      droga: "Metilergometrina",
      linha: "l1",
      dose: "0,2 mg (1 ampola)",
      via: "IM",
      intervalo: "Pode repetir após 20 min; depois 0,2 mg a cada 2–4 h",
      duracao: "Máximo 5 doses (1 mg) em 24 h",
      monitorizacao: "PA, dor torácica",
      contraindicacoes: "Hipertensão, pré-eclâmpsia, cardiopatia, uso de inibidores de protease/antirretrovirais com ritonavir, macrolídeos",
      ajustes: "2ª linha após ocitocina. Não fazer IV em bolus"
    },
    {
      droga: "Misoprostol",
      linha: "alt",
      dose: "800 mcg (4 comprimidos de 200 mcg)",
      via: "Via retal (ou sublingual)",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Febre e tremores (comuns, autolimitados)",
      contraindicacoes: "—",
      ajustes: "Ação mais lenta (15–30 min retal). Útil se metilergometrina contraindicada ou sem acesso venoso"
    },
    {
      droga: "Balão de tamponamento intrauterino (Bakri ou com preservativo e sonda)",
      linha: "adj",
      dose: "Encher com SF 0,9% morno até controle do sangramento (em geral 300–500 mL)",
      via: "Intrauterino",
      intervalo: "—",
      duracao: "Retirar em até 24 h, esvaziando gradualmente em ambiente com suporte",
      monitorizacao: "Sangramento pelo dreno, altura uterina, sinais vitais",
      contraindicacoes: "Rotura uterina, sangramento arterial cirúrgico",
      ajustes: "Manter ocitocina em infusão e antibiótico profilático (cefazolina 2 g IV). Sonda vesical. Se sangramento persistir: cirurgia"
    },
    {
      droga: "Traje antichoque não pneumático (TAN)",
      linha: "adj",
      dose: "Fechar segmentos de baixo para cima (tornozelos até abdome)",
      via: "Externo",
      intervalo: "—",
      duracao: "Até tratamento definitivo; retirar de cima para baixo, de forma lenta, com PA estável",
      monitorizacao: "PA, FC, respiração",
      contraindicacoes: "Feto vivo intraútero, lesão acima do diafragma",
      ajustes: "Ponte para transferência ou cirurgia (OPAS)"
    },
    {
      droga: "Hemocomponentes (protocolo de transfusão maciça)",
      linha: "l1",
      dose: "Concentrado de hemácias : plasma : plaquetas em proporção 1:1:1; crioprecipitado 1 U/10 kg se fibrinogênio < 200 mg/dL",
      via: "IV, aquecido",
      intervalo: "Conforme perda e exames a cada 30–60 min",
      duracao: "Até controle",
      monitorizacao: "Hb > 7–8 g/dL, plaquetas > 50.000, fibrinogênio > 200, INR < 1,5, cálcio iônico, temperatura",
      contraindicacoes: "—",
      ajustes: "IC ≥ 1,4 ou instabilidade: transfundir sem esperar exames (O negativo). Gluconato de cálcio 10% 10 mL IV a cada 4 U de hemácias se hipocalcemia"
    }
  ],
  destino: {
    agora: [
      "Tratar em sala de parto/centro obstétrico com equipe completa",
      "Unidade sem centro cirúrgico: ocitocina, tranexâmico, massagem, balão e TAN como ponte, e regular transferência"
    ],
    reavaliar: [
      "Sinais vitais e índice de choque a cada 15 min na 1ª hora (hora de ouro) e depois a cada 30 min",
      "Tônus uterino e sangramento a cada 15 min por 2 h",
      "Hb, fibrinogênio e coagulação após controle e em 6 h"
    ],
    alta: [
      "Sem sangramento ativo ≥ 24 h, Hb estável, sem sintomas de anemia",
      "Sulfato ferroso prescrito e retorno na UBS em 7 dias"
    ],
    observacao: [
      "Perda 500–1.000 mL com resposta rápida ao uterotônico e estabilidade: vigilância intensiva por 24 h no alojamento conjunto"
    ],
    internacao: [
      "UTI: HPP grave, transfusão maciça, cirurgia, disfunção orgânica"
    ],
    transferencia: [
      "Para maternidade com banco de sangue e cirurgia, após estabilização inicial, com acesso venoso, ocitocina em curso, balão e/ou TAN e médico acompanhando"
    ]
  },
  prescricao: {
    hospitalar: "HEMORRAGIA PÓS-PARTO (peso: ___ kg; hora do parto: ___; perda estimada: ___ mL)\n1. Dieta zero.\n2. O₂ por máscara 8–10 L/min; monitor; oximetria; 2 acessos 14–16G; sonda vesical de demora; manta térmica.\n3. Ocitocina 5 UI IV lento em 3 minutos.\n4. Ocitocina 20 UI (4 ampolas de 5 UI) + SF 0,9% 500 mL IV a 250 mL/h; depois 20 UI em 500 mL a 125 mL/h por 4 h.\n5. Ácido tranexâmico 1 g (4 ampolas de 250 mg/5 mL) + SF 0,9% 100 mL IV em 10 minutos. Repetir 1 g se sangramento persistir após 30 min.\n6. Se sem resposta e sem hipertensão: metilergometrina 0,2 mg IM; pode repetir em 20 min (máx. 1 mg/24 h).\n7. Se sem resposta: misoprostol 200 mcg — 4 comprimidos (800 mcg) via retal, dose única.\n8. Ringer lactato aquecido 500 mL IV em bolus; reavaliar após cada bolus (máx. ~1.500 mL antes de hemocomponentes).\n9. Concentrado de hemácias ___ U (O negativo se instável), plasma fresco ___ U, plaquetas ___ U em 1:1:1 se transfusão maciça; crioprecipitado 1 U/10 kg se fibrinogênio < 200 mg/dL.\n10. Gluconato de cálcio 10% 10 mL IV lento se cálcio iônico < 1,1 mmol/L ou a cada 4 U de hemácias.\n11. Se balão intrauterino: cefazolina 2 g IV dose única; manter ocitocina.\n12. Exames: hemograma, tipagem, prova cruzada, TP, TTPa, fibrinogênio, gasometria com lactato e cálcio iônico; repetir de 30/30–60/60 min se sangramento ativo.\n13. Controles: PA, FC e índice de choque de 15/15 min; diurese horária (meta ≥ 30 mL/h); tônus uterino e sangramento de 15/15 min por 2 h.\n14. Após estabilizar: enoxaparina 40 mg SC 1×/dia a partir de 12–24 h do controle do sangramento, se sem coagulopatia.",
    ambulatorial: "ALTA APÓS HPP\nUSO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ----------- 90 comprimidos\n   Tomar 1 comprimido 2 a 3 vezes ao dia, 1 hora antes das refeições, por 3 meses (anemia: conforme Hb).\n2. Paracetamol 750 mg -------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor."
  },
  orientacoesRetorno: [
    "É normal sangramento como menstruação forte nos primeiros dias, diminuindo aos poucos",
    "Voltar imediatamente se: encharcar mais de 1 absorvente por hora, coágulos grandes, tontura ou desmaio, coração acelerado, falta de ar, febre ou corrimento com mau cheiro",
    "Tomar o sulfato de ferro todos os dias; ele escurece as fezes",
    "Consulta na UBS em até 7 dias para ver a anemia e a pressão",
    "Na próxima gestação, avisar que teve hemorragia: o parto deve ser em maternidade preparada"
  ],
  tabelas: [
    {
      titulo: "Índice de choque obstétrico (FC ÷ PAS) — OPAS 2018",
      colunas: ["Índice", "Significado", "Conduta"],
      linhas: [
        ["< 0,9", "Esperado", "Manter vigilância"],
        ["≥ 0,9", "Perda significativa", "Tratamento agressivo, preparar sangue"],
        ["≥ 1,4", "Grave", "Transfusão imediata, considerar transfusão maciça"],
        ["≥ 1,7", "Risco muito alto", "Transfusão maciça e controle cirúrgico"]
      ],
      nota: "Mais sensível que PA isolada: a gestante mantém PA até perder grande volume."
    },
    {
      titulo: "Inversão uterina — conduta",
      colunas: ["Passo", "Ação"],
      linhas: [
        ["1", "Chamar ajuda; não retirar a placenta se ainda aderida; suspender ocitocina"],
        ["2", "Reposicionar imediatamente: manobra de Johnson (empurrar o fundo pela vagina em direção à cicatriz umbilical)"],
        ["3", "Se anel de constrição: relaxante uterino (terbutalina 0,25 mg SC ou nitroglicerina IV) ou anestesia geral"],
        ["4", "Após reposição: manter a mão no fundo, iniciar ocitocina, retirar placenta e massagear"],
        ["5", "Falha: correção cirúrgica (Huntington/Haultain) por laparotomia"]
      ],
      nota: "Choque desproporcional ao sangramento é típico (reflexo vagal). Repor volume ao mesmo tempo."
    }
  ],
  fontes: [
    "OPAS/OMS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (Estratégia Zero Morte Materna por Hemorragia, 2018)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "OMS/FIGO/ICM — Consolidated guidelines for the prevention, diagnosis and treatment of postpartum haemorrhage (2025)",
    "OMS — Updated recommendation on tranexamic acid for the treatment of postpartum haemorrhage (2017) — estudo WOMAN",
    "FEBRASGO — Tratado de Obstetrícia (2019)",
    "ACOG — Practice Bulletin nº 183: Postpartum hemorrhage (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
