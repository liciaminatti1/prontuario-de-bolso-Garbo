// Rebaixamento do nível de consciência / coma
registrarFicha({
  id: "rebaixamento-consciencia",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Rebaixamento de consciência e coma",
  resumo: "Paciente sonolento, torporoso ou em coma (Glasgow reduzido). Abordagem: estabilizar, corrigir de imediato as causas reversíveis (hipoglicemia, hipóxia, opioide, Wernicke) e separar causa estrutural (TC) de tóxico-metabólica.",
  palavrasChave: "rebaixamento nivel de consciencia coma torpor sonolencia glasgow gcs avpu encefalopatia hipoglicemia naloxona tiamina wernicke estado de mal nao convulsivo herniacao pupilas",
  critico: {
    tempo: "Glicemia capilar no 1º minuto",
    texto: "ABC + glicemia capilar imediata. Hipoglicemia → glicose IV já (tiamina antes em etilista/desnutrido). Miose + bradipneia → naloxona. Glasgow ≤ 8 → proteger via aérea."
  },
  alarmes: [
    "Glasgow ≤ 8, apneia, respiração irregular, SpO₂ baixa",
    "Anisocoria, pupila fixa dilatada, postura de decorticação/descerebração (herniação)",
    "Tríade de Cushing: hipertensão, bradicardia, respiração irregular",
    "Febre + rigidez de nuca ou petéquias (meningite / meningococcemia)",
    "Déficit focal de início súbito (AVC: ver ficha avc)",
    "Movimentos sutis (piscamentos, desvio do olhar, mioclonias) — estado de mal não convulsivo"
  ],
  condutaInicial: [
    "A-B-C: via aérea pérvia, O₂ se SpO₂ < 94%, monitor, acesso venoso; proteger coluna se trauma",
    "Glicemia capilar imediata; tratar hipoglicemia (tiamina antes da glicose se etilista/desnutrido)",
    "Naloxona se miose + bradipneia ou suspeita de opioide",
    "Glasgow com pupilas, sinais vitais, temperatura, procurar trauma, odor, marcas de agulha, sinais meníngeos e déficit focal",
    "Coletar gasometria, eletrólitos, função renal e hepática, hemograma, toxicológico; TC de crânio sem contraste se causa não esclarecida ou qualquer sinal focal/trauma",
    "Glasgow ≤ 8 ou não protege via aérea → intubação (ver ficha sequencia-rapida-intubacao)"
  ],
  fataisExcluir: [
    "Hipoglicemia",
    "Hipóxia / hipercapnia",
    "Herniação cerebral (hematoma, AVC hemorrágico, tumor, TCE)",
    "Meningite / encefalite",
    "Intoxicação (opioide, benzodiazepínico, álcool, monóxido de carbono, organofosforado)",
    "Estado de mal epiléptico não convulsivo",
    "Choque, sepse, hipotermia, hipertermia",
    "Encefalopatia de Wernicke"
  ],
  proximaDecisao: "Sinal focal, anisocoria, trauma ou causa não evidente → TC de crânio. TC normal e febre/meningismo → punção lombar (ver ficha meningite). Exames normais e flutuação ou movimentos sutis → EEG. Causa tóxico-metabólica identificada → tratar e reavaliar o Glasgow seriadamente.",
  clinica: {
    anamnese: [
      "Com acompanhante/SAMU: início súbito ou gradual, último momento visto bem",
      "Trauma, convulsão, cefaleia, febre, vômitos antes do quadro",
      "Medicamentos e drogas (opioides, BZD, antidepressivos, insulina, sulfonilureia), álcool",
      "Doenças: diabetes, cirrose, DRC, epilepsia, HIV, câncer, cardiopatia",
      "Ambiente: fogão/aquecedor (CO), agrotóxico, calor"
    ],
    exameFisico: [
      "Glasgow (melhor resposta) e pupilas (tamanho, simetria, reação)",
      "Padrão respiratório (Kussmaul, Cheyne-Stokes, bradipneia)",
      "Movimentos oculares, reflexo corneano, resposta motora simétrica",
      "Sinais meníngeos, petéquias, icterícia, asterixe, hálito (cetônico, etílico, urêmico)",
      "Temperatura central, sinais de trauma craniano (Battle, guaxinim, otorragia)"
    ],
    diferenciais: [
      { dx: "Coma estrutural", pista: "Assimetria motora/pupilar, déficit focal; TC alterada" },
      { dx: "Coma tóxico-metabólico", pista: "Pupilas reativas e simétricas, sem déficit focal, asterixe, mioclonias" },
      { dx: "Estado de mal não convulsivo", pista: "Pós-crise prolongada, flutuação, automatismos sutis; EEG" },
      { dx: "Síndrome do encarceramento (locked-in)", pista: "Movimentos oculares verticais preservados, consciente; lesão de ponte" },
      { dx: "Não responsividade psicogênica", pista: "Resistência à abertura ocular, queda da mão evitando o rosto; diagnóstico de exclusão" }
    ],
    gravidade: [
      "Glasgow 13–15 leve · 9–12 moderado · ≤ 8 grave (via aérea)",
      "Glasgow-P = Glasgow − nº de pupilas sem reação à luz (0, 1 ou 2)",
      "AVDI (AVPU) rápido: Alerta, responde à Voz, à Dor, Inconsciente (P/U ≈ Glasgow ≤ 8)"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar",
      pedido: "Glicemia capilar imediata.",
      porQue: "Causa mais rápida de corrigir.",
      esperar: "< 70 mg/dL = hipoglicemia.",
      interpretacao: "Hiperglicemia muito alta → CAD ou estado hiperosmolar (ver ficha cetoacidose).",
      limitacoes: "Confirmar com glicemia sérica se choque ou valor discrepante."
    },
    {
      nome: "Laboratório inicial",
      pedido: "Gasometria arterial com lactato e carboxi-hemoglobina (se suspeita de CO). Sódio, potássio, cálcio iônico, magnésio, glicemia, ureia, creatinina, TGO, TGP, bilirrubinas, amônia (se hepatopata), hemograma, TP/INR, CPK, TSH. Etanol sérico e triagem toxicológica de urina se disponível. Hemoculturas se febre. Beta-hCG em mulher em idade fértil. ECG.",
      porQue: "Causas metabólicas, tóxicas e infecciosas.",
      esperar: "Depende da causa.",
      interpretacao: "Hipercapnia (PaCO₂ alta) → narcose; Na < 120 ou > 160 explica coma; ânion gap e gap osmolar alterados → intoxicação.",
      limitacoes: "Achado metabólico leve não exclui lesão estrutural associada."
    },
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — rebaixamento do nível de consciência de causa a esclarecer (Glasgow: ___).",
      porQue: "Hemorragia, efeito de massa, hidrocefalia, AVC extenso.",
      esperar: "Normal nas causas tóxico-metabólicas.",
      interpretacao: "Normal não exclui AVC isquêmico precoce de tronco, encefalite ou trombose venosa.",
      limitacoes: "Transporte só com paciente estabilizado e via aérea segura."
    },
    {
      nome: "Líquor e EEG",
      pedido: "Punção lombar: citologia, bioquímica, Gram, cultura, (PCR viral se disponível). Eletroencefalograma se suspeita de estado de mal não convulsivo.",
      porQue: "Meningite/encefalite; crises sem manifestação motora.",
      esperar: "—",
      interpretacao: "Ver ficha meningite. EEG com atividade epileptiforme contínua → tratar como estado de mal (ver ficha convulsao).",
      limitacoes: "TC antes da PL se déficit focal, papiledema, Glasgow < 11 ou imunossupressão. Não atrasar antibiótico por causa da PL."
    }
  ],
  tratamento: [
    {
      droga: "Glicose hipertônica",
      linha: "l1",
      dose: "Adulto: glicose 50% 40–50 mL (20–25 g). Criança: glicose 10% 2–5 mL/kg",
      via: "IV",
      intervalo: "Repetir conforme glicemia em 15 min",
      duracao: "Manter SG 5–10% se causa persistente (sulfonilureia)",
      monitorizacao: "Glicemia capilar a cada 15–30 min até estável",
      contraindicacoes: "—",
      ajustes: "Glicose 50% é irritante: veia calibrosa. Sem acesso: glucagon 1 mg IM (criança < 25 kg: 0,5 mg). Ver ficha hipoglicemia"
    },
    {
      droga: "Tiamina",
      linha: "l1",
      dose: "Adulto: 100–500 mg (suspeita de Wernicke: 500 mg 8/8 h)",
      via: "IV (diluída em 100 mL de SF em 30 min) ou IM",
      intervalo: "8/8 h se Wernicke",
      duracao: "3–5 dias IV, depois VO",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Dar antes da glicose em etilista, desnutrido, hiperêmese, bariátrico — sem atrasar a glicose na hipoglicemia grave"
    },
    {
      droga: "Naloxona",
      linha: "l1",
      dose: "Adulto: 0,04–0,4 mg, repetir a cada 2–3 min até FR adequada (até 2 mg; máx usual 10 mg). Criança: 0,1 mg/kg (máx 2 mg/dose)",
      via: "IV, IM, SC ou intranasal",
      intervalo: "Repetir conforme resposta; efeito dura 30–90 min",
      duracao: "Infusão se opioide de longa ação",
      monitorizacao: "FR, SpO₂; recorrência da depressão respiratória",
      contraindicacoes: "—",
      ajustes: "Em usuário crônico, doses pequenas e tituladas (abstinência aguda). Ampola 0,4 mg/mL"
    },
    {
      droga: "Flumazenil",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar de rotina no coma indiferenciado: risco de convulsão (uso crônico de BZD, tricíclicos, epilepsia)",
      ajustes: "Reservado à reversão de sedação iatrogênica por BZD em paciente sem esses riscos (ver ficha antidotos)"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência com monitor; via aérea protegida se Glasgow ≤ 8",
      "Herniação: cabeceira 30°, osmoterapia e neurocirurgia (ver ficha hipertensao-intracraniana)"
    ],
    reavaliar: [
      "Glasgow e pupilas a cada 15–60 min",
      "Glicemia seriada; temperatura; diurese"
    ],
    alta: [
      "Causa simples e totalmente revertida (ex.: hipoglicemia por erro de dose de insulina) com Glasgow 15, alimentando-se, acompanhante e ajuste do tratamento",
      "Hipoglicemia por sulfonilureia ou insulina de longa ação: observar/internar"
    ],
    observacao: ["Intoxicação leve em melhora: observar até Glasgow 15 e efeito da substância esgotado"],
    internacao: ["Causa estrutural, infecciosa, intoxicação grave, metabólica persistente: enfermaria ou UTI conforme gravidade"],
    transferencia: ["Sem TC, neurocirurgia ou UTI: regular após estabilização"]
  },
  prescricao: {
    hospitalar: "REBAIXAMENTO DE CONSCIÊNCIA — MEDIDAS INICIAIS (adulto)\n1. Dieta zero.\n2. Decúbito elevado 30° (lateral se vômitos e via aérea não protegida); aspiração de vias aéreas se necessário.\n3. O₂ por cateter ou máscara para SpO₂ ≥ 94%.\n4. Se glicemia < 70 mg/dL: glicose 50% 40 mL IV em veia calibrosa; repetir glicemia em 15 min. Manter SG 10% 500 mL IV a 80 mL/h se causa persistente.\n5. Se etilista, desnutrido ou suspeita de Wernicke: tiamina 300 mg diluída em 100 mL de SF 0,9% IV em 30 min (antes ou junto da glicose); Wernicke: 500 mg IV de 8/8 h.\n6. Se miose e FR < 12 ou suspeita de opioide: naloxona 0,4 mg/mL — diluir 1 mL em 9 mL de SF (0,04 mg/mL) e fazer 1–2 mL IV a cada 2–3 min até FR ≥ 12 (máx 2 mg; reavaliar diagnóstico se sem resposta).\n7. SF 0,9% 500 mL IV em 30 min se hipotensão; depois manutenção conforme quadro.\n8. Se febre e suspeita de meningite: colher hemoculturas e iniciar antibiótico conforme ficha meningite sem aguardar a punção.\n9. Cuidados: monitor, SpO₂, PA e Glasgow com pupilas de 15/15 min na 1ª hora e depois de 1/1 h; glicemia capilar de 1/1 h se hipoglicemia; proteção contra queda (grades); sonda vesical se retenção.\n\nCRIANÇA (por kg)\n- Glicose 10% 2–5 mL/kg IV.\n- Naloxona 0,1 mg/kg IV/IM/IN (máx 2 mg/dose).\n- SF 0,9% 10–20 mL/kg IV se choque (reavaliar após cada alíquota)."
  },
  orientacoesRetorno: [
    "Família: voltar imediatamente se sonolência difícil de acordar, confusão, convulsão, vômitos repetidos ou respiração lenta",
    "Diabético que teve hipoglicemia: não dirigir até nova orientação; levar sempre açúcar ou balas; revisar as doses na UBS em até 1 semana",
    "Guardar remédios e produtos tóxicos longe de crianças; usar fogão e aquecedor a gás só em local ventilado",
    "Uso de álcool ou drogas: oferecer acompanhamento na UBS/CAPS AD"
  ],
  tabelas: [
    {
      titulo: "Escala de coma de Glasgow (adulto e criança)",
      colunas: ["Resposta", "Adulto / criança que fala", "Lactente / pré-verbal", "Pontos"],
      linhas: [
        ["Ocular", "Espontânea", "Espontânea", "4"],
        ["Ocular", "Ao som / comando verbal", "Ao som", "3"],
        ["Ocular", "À pressão (dor)", "À pressão (dor)", "2"],
        ["Ocular", "Nenhuma", "Nenhuma", "1"],
        ["Verbal", "Orientada", "Balbucia, sorri, segue objetos", "5"],
        ["Verbal", "Confusa", "Choro irritável, consolável", "4"],
        ["Verbal", "Palavras inapropriadas", "Choro à dor", "3"],
        ["Verbal", "Sons incompreensíveis", "Gemido à dor", "2"],
        ["Verbal", "Nenhuma", "Nenhuma", "1"],
        ["Motora", "Obedece comandos", "Movimento espontâneo normal", "6"],
        ["Motora", "Localiza a dor", "Retira ao toque", "5"],
        ["Motora", "Flexão normal (retirada)", "Retira à dor", "4"],
        ["Motora", "Flexão anormal (decorticação)", "Flexão anormal", "3"],
        ["Motora", "Extensão (descerebração)", "Extensão anormal", "2"],
        ["Motora", "Nenhuma", "Nenhuma", "1"]
      ],
      nota: "Total 3–15. Registrar por componente (ex.: O2 V2 M4 = 8) e anotar \"NT\" se não testável (intubado: V = T). Glasgow-P: subtrair 1 por pupila sem reação à luz."
    },
    {
      titulo: "Causas reversíveis a checar já",
      colunas: ["Causa", "Pista", "Ação imediata"],
      linhas: [
        ["Hipoglicemia", "Glicemia capilar < 70", "Glicose IV"],
        ["Hipóxia / hipercapnia", "SpO₂ baixa, gasometria", "O₂, VNI ou IOT"],
        ["Opioide", "Miose, bradipneia", "Naloxona"],
        ["Wernicke", "Etilista, ataxia, oftalmoplegia", "Tiamina IV"],
        ["Monóxido de carbono", "Ambiente fechado, vários afetados", "O₂ a 100% em máscara com reservatório"],
        ["Hipo/hipertermia", "Temperatura central", "Aquecer / resfriar"],
        ["Meningite", "Febre, rigidez, petéquias", "Antibiótico sem atraso"],
        ["Estado de mal não convulsivo", "Pós-crise prolongada, automatismos", "BZD e EEG"]
      ]
    }
  ],
  fontes: [
    "Teasdale G et al. — Glasgow Coma Scale: 40 anos e Glasgow-P (J Neurosurg, 2018); www.glasgowcomascale.org",
    "ATLS — Advanced Trauma Life Support, 10ª ed. (American College of Surgeons, 2018)",
    "Ministério da Saúde — Protocolos de Intervenção para o SAMU 192: suporte avançado de vida (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
