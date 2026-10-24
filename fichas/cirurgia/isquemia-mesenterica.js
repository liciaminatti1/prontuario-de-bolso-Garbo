// Isquemia mesentérica aguda
registrarFicha({
  id: "isquemia-mesenterica",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Isquemia mesentérica aguda",
  resumo: "Interrupção súbita do fluxo para o intestino: embolia (FA, IAM recente), trombose arterial (aterosclerose, angina abdominal prévia), trombose venosa mesentérica (trombofilia, câncer, cirrose) ou não oclusiva (choque, vasopressor, diálise). Dor intensa desproporcional ao exame. Diagnóstico por angio-TC e tratamento imediato.",
  palavrasChave: "isquemia mesenterica aguda embolia mesenterica trombose arteria mesenterica superior trombose venosa mesenterica isquemia nao oclusiva angina abdominal dor desproporcional fibrilacao atrial lactato angiotomografia heparina laparotomia revascularizacao colite isquemica",
  critico: {
    tempo: "Angio-TC + heparina já",
    texto: "Suspeita (dor desproporcional, FA, idoso vascular): angio-TC sem esperar lactato, heparina não fracionada, antibiótico e cirurgia vascular/geral. Peritonite = laparotomia imediata."
  },
  alarmes: [
    "Dor abdominal intensa com abdome inicialmente flácido (desproporção)",
    "Fibrilação atrial, IAM recente, cardioversão ou cateterismo recente",
    "Esvaziamento intestinal súbito (vômitos, diarreia) logo após a dor; sangue nas fezes (tardio)",
    "Peritonite, choque, acidose metabólica, lactato elevado (sinais de necrose)",
    "Paciente crítico em vasopressor ou diálise com distensão/intolerância à dieta (não oclusiva)"
  ],
  condutaInicial: [
    "Monitor, 2 acessos, oxigênio se necessário, cristaloide guiado por perfusão",
    "Angio-TC de abdome (fases arterial e venosa) imediata — não adiar por função renal",
    "Heparina não fracionada IV em bolus + infusão logo que suspeita, salvo contraindicação",
    "Antibiótico de amplo espectro (translocação bacteriana)",
    "Jejum, SNG se distensão/vômitos, sonda vesical",
    "Exames: hemograma, lactato, gasometria, função renal, eletrólitos, amilase, D-dímero, coagulograma, tipagem, troponina, ECG",
    "Acionar cirurgia vascular e geral (revascularização + avaliação da viabilidade)"
  ],
  fataisExcluir: [
    "Necrose intestinal / perfuração",
    "Aneurisma de aorta roto, dissecção de aorta com envolvimento mesentérico",
    "Pancreatite grave, obstrução com estrangulamento",
    "IAM associado (fonte embólica)"
  ],
  proximaDecisao: "Peritonite ou necrose → laparotomia: revascularização primeiro (embolectomia, endovascular ou híbrida) e ressecção do intestino inviável; relaparotomia programada (second look) em 24–48 h. Sem peritonite e oclusão arterial → revascularização endovascular ou aberta urgente. Trombose venosa → anticoagulação plena (cirurgia se necrose). Não oclusiva → tratar causa, otimizar débito, reduzir vasopressor; vasodilatador intra-arterial (papaverina) em centro especializado.",
  clinica: {
    anamnese: [
      "Dor súbita, intensa, periumbilical, contínua (embolia) ou dor pós-prandial e emagrecimento prévios (trombose arterial)",
      "FA, valvopatia, IAM recente, anticoagulação suspensa",
      "Aterosclerose: DAC, doença arterial periférica, tabagismo, AVC",
      "Trombofilia, câncer, cirrose/hipertensão portal, anticoncepcional, pós-operatório (trombose venosa)",
      "Choque, uso de vasopressor, diálise, cirurgia cardíaca, digoxina, cocaína (não oclusiva)"
    ],
    exameFisico: [
      "Abdome flácido ou pouco doloroso no início, apesar de dor intensa",
      "Distensão, ruídos ausentes e peritonite em fase tardia",
      "Sinais de embolia em outros territórios (membros, AVC)",
      "Ritmo cardíaco irregular, sopros"
    ],
    diferenciais: [
      { dx: "Colite isquêmica", pista: "Idoso, dor leve a moderada em FIE com diarreia sanguinolenta; quase sempre não oclusiva e de bom prognóstico; colonoscopia" },
      { dx: "Pancreatite aguda", pista: "Lipase ≥ 3× o limite superior" },
      { dx: "Obstrução com estrangulamento", pista: "Distensão, vômitos, ponto de transição" },
      { dx: "Úlcera perfurada", pista: "Ar livre, abdome em tábua precoce" },
      { dx: "Aneurisma roto / dissecção", pista: "Dor lombar, choque, assimetria de pulsos" }
    ],
    gravidade: [
      "Lactato e acidose são marcadores tardios (necrose); valores normais não excluem",
      "Peritonite, ar portal ou pneumatose na TC = intestino inviável provável",
      "Mortalidade alta e muito dependente do tempo até a revascularização"
    ]
  },
  exames: [
    {
      nome: "Angiotomografia de abdome",
      pedido: "Angiotomografia de abdome e pelve (fases sem contraste, arterial e portal) — suspeita de isquemia mesentérica aguda.",
      porQue: "Exame de escolha: mostra a oclusão, o tipo e a viabilidade da parede.",
      esperar: "Falha de enchimento da artéria mesentérica superior, trombose venosa, parede sem realce, pneumatose, gás portal.",
      interpretacao: "Define estratégia (endovascular × aberta × anticoagulação).",
      limitacoes: "Não adiar por creatinina: o risco de não diagnosticar supera o da nefropatia por contraste (ESVS)."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, gasometria venosa ou arterial com lactato, ureia, creatinina, Na, K, amilase, lipase, CPK, D-dímero, TP/INR, TTPa, fibrinogênio, troponina, tipagem sanguínea.",
      porQue: "Gravidade, preparo cirúrgico e anticoagulação.",
      esperar: "Leucocitose, acidose metabólica, lactato elevado em fase tardia; D-dímero elevado.",
      interpretacao: "D-dímero normal torna o diagnóstico improvável (ESVS 2017), mas a clínica forte mantém a indicação da angio-TC.",
      limitacoes: "Nenhum marcador sérico é suficiente para excluir."
    },
    {
      nome: "ECG e ecocardiograma",
      pedido: "ECG de 12 derivações. Ecocardiograma transtorácico após estabilização.",
      porQue: "Fonte embólica (FA, trombo ventricular, valvopatia).",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Heparina não fracionada",
      linha: "l1",
      dose: "Bolus 80 UI/kg (ou 5.000 UI) + infusão 18 UI/kg/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até definição terapêutica; depois anticoagulação oral conforme causa",
      monitorizacao: "TTPa 6/6 h (alvo 1,5–2,5× o controle), plaquetas",
      contraindicacoes: "Sangramento ativo, plaquetopenia grave, HIT",
      ajustes: "Heparina 5.000 UI/mL: 25.000 UI (5 mL) + SF 0,9% 245 mL = 100 UI/mL. HNF preferida pela reversão rápida (protamina) e cirurgia iminente"
    },
    {
      droga: "Piperacilina-tazobactam",
      linha: "l1",
      dose: "4,5 g",
      via: "IV em 30 min",
      intervalo: "6/6 h",
      duracao: "Conforme achados; em geral curta se ressecção sem perfuração",
      monitorizacao: "Função renal",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alternativa: ceftriaxona 2 g IV/dia + metronidazol 500 mg IV 8/8 h. ClCr < 40: ajustar"
    },
    {
      droga: "Revascularização (endovascular ou embolectomia aberta) + laparotomia",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica/endovascular",
      intervalo: "—",
      duracao: "Urgente",
      monitorizacao: "Second look em 24–48 h",
      contraindicacoes: "—",
      ajustes: "Ressecar só o intestino claramente necrótico; preservar o duvidoso para reavaliação"
    },
    {
      droga: "Cristaloide e vasopressor",
      linha: "adj",
      dose: "Cristaloide guiado por perfusão; noradrenalina se choque após volume",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Lactato, diurese, PAM ≥ 65 mmHg",
      contraindicacoes: "—",
      ajustes: "Vasopressores pioram a isquemia não oclusiva: usar a menor dose possível"
    },
    {
      droga: "Morfina",
      linha: "adj",
      dose: "2–4 mg (titular)",
      via: "IV",
      intervalo: "SN",
      duracao: "—",
      monitorizacao: "FR, PA",
      contraindicacoes: "—",
      ajustes: "Dor de difícil controle com opioide é sinal de alerta diagnóstico"
    }
  ],
  destino: {
    agora: [
      "Angio-TC, heparina, antibiótico e cirurgia vascular/geral"
    ],
    reavaliar: [
      "Lactato, diurese e exame abdominal de 2/2 h até a intervenção"
    ],
    alta: [
      "Após tratamento, com anticoagulação definida (FA/trombose venosa), controle de fatores de risco e acompanhamento vascular",
      "Atenção a síndrome do intestino curto se grande ressecção"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Sempre; UTI na maioria"
    ],
    transferencia: [
      "Sem angio-TC ou cirurgia vascular: transferir com urgência após heparina, antibiótico e reanimação"
    ]
  },
  prescricao: {
    hospitalar: "ISQUEMIA MESENTÉRICA AGUDA — ADULTO (peso ___ kg)\n1. Jejum; SNG aberta se distensão ou vômitos.\n2. Monitor, oxigênio para SpO₂ ≥ 94%, sonda vesical com diurese horária.\n3. Ringer lactato 500 mL IV em 15–30 min; repetir conforme perfusão.\n4. Heparina não fracionada: bolus 80 UI/kg IV; depois solução 100 UI/mL (25.000 UI em 250 mL de SF) a 18 UI/kg/h em bomba; TTPa de 6/6 h com ajuste por nomograma.\n5. Piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n6. Morfina 1 mg/mL (diluída): 2–4 mg IV SN dor.\n7. Omeprazol 40 mg IV 1 vez ao dia.\n8. Gasometria com lactato de 4/4 h; hemograma, função renal e eletrólitos de 12/12 h.\n9. Angio-TC de abdome imediata. Cirurgia vascular e geral.",
    ambulatorial: "ALTA (exemplo, conforme causa)\n1. Anticoagulação oral conforme indicação (FA, trombose venosa mesentérica) — ver ficha anticoagulacao-oral.\n2. Antiagregante e estatina se aterosclerose (conforme cirurgia vascular)."
  },
  orientacoesRetorno: [
    "Tomar o anticoagulante todos os dias, sem interromper sem orientação",
    "Voltar imediatamente se: dor forte na barriga, vômitos, sangue nas fezes, barriga inchada ou sangramentos",
    "Parar de fumar; controlar pressão, diabetes e colesterol",
    "Retorno com cirurgia vascular e cardiologia (fonte de êmbolo) conforme agendado"
  ],
  fontes: [
    "ESVS — Management of the diseases of mesenteric arteries and veins: clinical practice guidelines (Björck et al., 2017)",
    "WSES — Acute mesenteric ischemia: updated guidelines (Bala et al., 2022)",
    "ACG — Clinical guideline: epidemiology, risk factors, patterns of presentation, diagnosis and management of colon ischemia (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
