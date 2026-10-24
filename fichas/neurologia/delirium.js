// Delirium
registrarFicha({
  id: "delirium",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Delirium (estado confusional agudo)",
  resumo: "Alteração aguda (horas a dias) e flutuante da atenção e da consciência, causada por doença clínica, medicamento ou abstinência. Comum em idosos internados e no PS. Diagnóstico pelo CAM (ou CAM-ICU); tratamento é achar e corrigir a causa.",
  palavrasChave: "delirium estado confusional agudo confusao mental agitacao idoso cam cam-icu rass 4at haloperidol quetiapina hipoativo hiperativo desorientacao",
  critico: {
    tempo: "Buscar a causa; evite contenção",
    texto: "Delirium é emergência clínica: procurar hipoglicemia, hipóxia, infecção, retenção urinária, dor, drogas e abstinência. Medidas não farmacológicas sempre; antipsicótico só se agitação com risco."
  },
  alarmes: [
    "Agitação com risco para si ou para a equipe",
    "Febre, rigidez de nuca ou rebaixamento progressivo (meningite/encefalite)",
    "Déficit focal novo (AVC)",
    "Tremor, sudorese, taquicardia e alucinações em etilista (delirium tremens)",
    "Rigidez, febre alta e instabilidade autonômica em uso de antipsicótico (síndrome neuroléptica maligna)",
    "Delirium hipoativo: sonolência e apatia passam despercebidos e têm pior prognóstico"
  ],
  condutaInicial: [
    "Confirmar com CAM (ou 4AT); na UTI/paciente intubado, RASS + CAM-ICU",
    "Sinais vitais, SpO₂, glicemia capilar, temperatura, palpar bexiga, avaliar dor e evacuação",
    "Revisar todos os medicamentos (anticolinérgicos, BZD, opioides, anti-histamínicos, corticoide) e uso/abstinência de álcool",
    "Exames dirigidos à causa (infecção, eletrólitos, função renal e hepática, ECG)",
    "Medidas não farmacológicas para todos; antipsicótico em dose baixa só se agitação grave ou sintomas psicóticos angustiantes"
  ],
  fataisExcluir: [
    "Hipoglicemia, hipóxia, hipercapnia",
    "Sepse (ITU, pneumonia) e meningite/encefalite",
    "AVC, hematoma subdural (idoso com queda, anticoagulado)",
    "Abstinência alcoólica / delirium tremens, encefalopatia de Wernicke",
    "Intoxicação medicamentosa, síndrome serotoninérgica, síndrome anticolinérgica",
    "Hiponatremia grave, hipercalcemia, uremia, encefalopatia hepática",
    "IAM silencioso no idoso"
  ],
  proximaDecisao: "Causa identificada e tratável, sem risco → tratar e reavaliar o CAM a cada turno. Sem causa evidente após exames básicos, déficit focal, queda ou anticoagulante → TC de crânio. Febre sem foco e meningismo → punção lombar.",
  clinica: {
    anamnese: [
      "Com familiar/cuidador: como estava antes (cognição e funcionalidade basais), início, flutuação",
      "Demência prévia (fator de risco; delirium sobreposto é comum)",
      "Medicamentos novos, mudança de dose, automedicação, álcool, BZD, drogas",
      "Sintomas de infecção, dor, constipação, retenção urinária, quedas",
      "Privação de sono, internação recente, cirurgia"
    ],
    exameFisico: [
      "Atenção: dizer os meses do ano de trás para frente, contar de 20 a 1",
      "Nível de consciência (RASS), orientação",
      "Sinais vitais, hidratação, globo vesical, fecaloma, úlceras de pressão",
      "Exame neurológico focal, sinais meníngeos, asterixe, tremor",
      "Foco infeccioso: pulmão, urina, pele, cateteres"
    ],
    diferenciais: [
      { dx: "Demência", pista: "Início insidioso (meses), atenção preservada nas fases iniciais; ver ficha demencia" },
      { dx: "Depressão", pista: "Atenção e consciência preservadas, humor deprimido" },
      { dx: "Psicose primária", pista: "Consciência clara, alucinações auditivas, idade jovem, história psiquiátrica" },
      { dx: "Afasia (AVC)", pista: "Distúrbio de linguagem, início súbito, sinais focais" },
      { dx: "Estado de mal não convulsivo", pista: "Flutuação, automatismos; EEG" }
    ],
    gravidade: [
      "Subtipos: hiperativo (agitação), hipoativo (sonolento, quieto) e misto",
      "CAM positivo = (1) início agudo E curso flutuante + (2) desatenção + (3) pensamento desorganizado OU (4) nível de consciência alterado",
      "CAM-ICU: só aplicar com RASS ≥ −3; teste de atenção com letras (apertar a mão na letra A); > 2 erros = desatenção"
    ]
  },
  exames: [
    {
      nome: "Exames iniciais",
      pedido: "Glicemia, hemograma, sódio, potássio, cálcio, magnésio, ureia, creatinina, TGO, TGP, bilirrubinas, PCR, urina tipo 1 e urocultura, gasometria (se dispneia ou sonolência), ECG. Conforme quadro: RX de tórax, hemoculturas, troponina, TSH, vitamina B12, amônia, nível sérico de drogas (lítio, digoxina, anticonvulsivantes).",
      porQue: "Encontrar a causa (frequentemente múltipla).",
      esperar: "Infecção e distúrbio eletrolítico são achados frequentes.",
      interpretacao: "Bacteriúria isolada em idoso não basta para explicar o delirium; procurar outras causas.",
      limitacoes: "—"
    },
    {
      nome: "TC de crânio",
      pedido: "TC de crânio sem contraste — delirium com sinal focal, queda/trauma, anticoagulante ou sem causa clínica identificada.",
      porQue: "Hematoma subdural, AVC, tumor.",
      esperar: "Normal na maioria.",
      interpretacao: "—",
      limitacoes: "Baixo rendimento sem sinais focais ou trauma."
    }
  ],
  tratamento: [
    {
      droga: "Medidas não farmacológicas (todas as pessoas)",
      linha: "l1",
      dose: "Reorientação (relógio, calendário, nome da equipe), acompanhante, óculos e aparelho auditivo, luz de dia e escuro/silêncio à noite, sono sem interrupções, mobilização precoce, hidratação e alimentação, evitar sonda e contenção",
      via: "—",
      intervalo: "Contínuo",
      duracao: "Durante toda a internação",
      monitorizacao: "CAM a cada turno",
      contraindicacoes: "—",
      ajustes: "Também é a principal medida de prevenção em idosos internados (NICE)"
    },
    {
      droga: "Haloperidol",
      linha: "l1",
      dose: "Idoso: 0,5–1 mg; adulto jovem: 1–2,5 mg. Repetir após 30–60 min se necessário (idoso: usar a menor dose eficaz, em geral ≤ 3–5 mg/dia)",
      via: "VO, IM ou IV",
      intervalo: "Se necessário; dose fixa 12/12 h só se agitação recorrente",
      duracao: "O menor tempo possível; reavaliar diariamente e suspender após 24–48 h sem agitação",
      monitorizacao: "ECG (QTc), sintomas extrapiramidais, sedação, quedas",
      contraindicacoes: "Parkinson, demência com corpos de Lewy, QTc prolongado (> 500 ms), síndrome neuroléptica prévia",
      ajustes: "Apenas para agitação com risco ou sintomas psicóticos angustiantes; não trata a causa nem encurta o delirium. Ampola 5 mg/mL"
    },
    {
      droga: "Quetiapina",
      linha: "alt",
      dose: "12,5–25 mg (até 50 mg)",
      via: "VO",
      intervalo: "À noite ou 12/12 h",
      duracao: "Curta; suspender com a resolução",
      monitorizacao: "Sedação, hipotensão postural, QTc",
      contraindicacoes: "—",
      ajustes: "Preferir em Parkinson e demência com corpos de Lewy"
    },
    {
      droga: "Benzodiazepínicos",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Pioram e prolongam o delirium no idoso",
      ajustes: "Exceção: abstinência de álcool ou de BZD (ver ficha uso-alcool) e crise convulsiva"
    }
  ],
  destino: {
    agora: [
      "Tratar a causa; ambiente calmo e acompanhante; prevenção de quedas",
      "Contenção mecânica só como último recurso, por tempo mínimo, prescrita e reavaliada"
    ],
    reavaliar: ["CAM e RASS a cada turno", "Dor, diurese, evacuação, sono, hidratação"],
    alta: [
      "Causa identificada e tratada, delirium resolvido ou em melhora clara, com cuidador presente e capaz",
      "Acompanhamento na UBS em até 1 semana (cognição pode levar semanas para recuperar)"
    ],
    observacao: ["Delirium leve com causa simples em tratamento (ex.: retenção urinária, dor) e boa resposta"],
    internacao: ["Maioria dos casos: causa grave, agitação, idoso frágil sem cuidador"],
    transferencia: ["Sem recursos para investigar a causa (TC, laboratório) → regular"]
  },
  prescricao: {
    hospitalar: "DELIRIUM — IDOSO (exemplo)\n1. Dieta conforme aceitação, sentado e com supervisão; oferecer líquidos 1.500–2.000 mL/dia se sem restrição.\n2. Acompanhante 24 h; relógio e calendário visíveis; óculos e aparelho auditivo; luz natural de dia; luzes apagadas e silêncio das 22 h às 6 h; evitar procedimentos noturnos.\n3. Mobilizar fora do leito 3 vezes ao dia; grades elevadas e prevenção de quedas; evitar contenção mecânica.\n4. Suspender: ___ (anticolinérgicos, benzodiazepínicos, anti-histamínicos de 1ª geração, outros contribuintes).\n5. Dipirona 1 g VO ou IV de 6/6 h (dor) — tratar dor de forma regular.\n6. Lactulose 10 mL VO 12/12 h se constipação.\n7. Se agitação com risco ou sintomas psicóticos angustiantes: haloperidol 5 mg/mL — 0,1–0,2 mL (0,5–1 mg) IM ou IV lento; repetir após 30–60 min se necessário (máx 3 mg/24 h no idoso, salvo reavaliação médica). Alternativa (Parkinson/Lewy): quetiapina 25 mg — ½ comprimido (12,5 mg) VO à noite.\n8. ECG antes e após antipsicótico (QTc).\n9. Cuidados: CAM a cada turno; sinais vitais de 4/4 h; glicemia capilar; palpar bexiga e cateterismo de alívio se retenção; registrar evacuações e sono."
  },
  orientacoesRetorno: [
    "A confusão costuma melhorar quando a doença que a causou é tratada, mas pode levar dias ou semanas",
    "Ficar perto, falar com calma, lembrar onde a pessoa está e que dia é; manter óculos e aparelho de audição",
    "Manter rotina: luz e atividade de dia, escuro e silêncio à noite; oferecer água e comida",
    "Não dar remédio para dormir ou para alergia sem orientação médica",
    "Voltar imediatamente se a confusão piorar, aparecer febre, sonolência difícil de acordar, queda ou fraqueza de um lado",
    "Consulta na UBS em até 1 semana para revisar remédios e a memória"
  ],
  fontes: [
    "NICE — Delirium: prevention, diagnosis and management in hospital and long-term care (CG103, atualização 2023)",
    "SCCM — Clinical Practice Guidelines for Pain, Agitation/Sedation, Delirium, Immobility, and Sleep in Adult ICU (PADIS, 2018)",
    "American Geriatrics Society — Beers Criteria (2023)",
    "Inouye SK et al. — Confusion Assessment Method (CAM), 1990; Ely EW et al. — CAM-ICU, 2001"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
