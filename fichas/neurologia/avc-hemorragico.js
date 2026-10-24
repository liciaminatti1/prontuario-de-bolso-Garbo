// AVC hemorrágico (hemorragia intraparenquimatosa espontânea)
registrarFicha({
  id: "avc-hemorragico",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "AVC hemorrágico (hemorragia intraparenquimatosa)",
  resumo: "Hemorragia intracerebral espontânea (não traumática) confirmada na TC. Foco: controle precoce da PA, reversão de anticoagulante, prevenção de expansão do hematoma e indicação neurocirúrgica. AVC isquêmico: ver ficha avc. HSA: ver ficha hemorragia-subaracnoidea.",
  palavrasChave: "avc hemorragico avch hemorragia intracerebral hic hip hematoma intraparenquimatoso derrame ich score pressao arterial reversao anticoagulante varfarina complexo protrombinico idarucizumabe protamina vitamina k nitroprussiato",
  critico: {
    tempo: "PAS alvo 140 em até 1 h",
    texto: "PAS 150–220: reduzir para ~140 mmHg (faixa 130–150) começando nas primeiras 2 h e atingindo em 1 h; evitar < 130. Anticoagulado: reverter imediatamente, sem esperar exames se a história é clara."
  },
  alarmes: [
    "Queda do Glasgow ≥ 2 pontos, anisocoria, nova perda de força (expansão do hematoma, hidrocefalia)",
    "Glasgow ≤ 8 ou incapacidade de proteger a via aérea",
    "Hematoma cerebelar com piora neurológica, compressão de tronco ou hidrocefalia (neurocirurgia urgente)",
    "Uso de anticoagulante (varfarina, DOAC, heparina)",
    "Tríade de Cushing: hipertensão, bradicardia, respiração irregular (herniação)",
    "PAS > 220 mmHg sustentada"
  ],
  condutaInicial: [
    "ABC, monitor, cabeceira 30°, 2 acessos, glicemia capilar; IOT se Glasgow ≤ 8 ou via aérea em risco (ver ficha sequencia-rapida-intubacao)",
    "TC de crânio sem contraste imediata; angio-TC se suspeita de causa secundária (jovem, lobar, sem HAS, sangue intraventricular isolado)",
    "Anti-hipertensivo IV titulável: PAS alvo ~140 mmHg, sem variações bruscas",
    "Perguntar anticoagulante e horário da última dose; coletar TP/INR, TTPa, plaquetas e reverter conforme a droga",
    "Calcular o volume (ABC/2) e o ICH score; acionar neurocirurgia e regular leito de UTI/unidade de AVC"
  ],
  fataisExcluir: [
    "Expansão do hematoma (maior nas primeiras 6 h)",
    "Hidrocefalia aguda (sangue intraventricular, hematoma de fossa posterior)",
    "Herniação cerebral",
    "Coagulopatia (anticoagulante, hepatopatia, plaquetopenia)",
    "Causa secundária: MAV, aneurisma, trombose venosa cerebral, tumor, transformação hemorrágica de AVC isquêmico, cocaína/anfetamina"
  ],
  proximaDecisao: "Após a 1ª TC: hematoma cerebelar com piora, compressão de tronco ou hidrocefalia → neurocirurgia de urgência (evacuação/derivação ventricular externa). Supratentorial: tratamento clínico na maioria; repetir TC em 6–24 h ou se piora. Não iniciar anticoagulação profilática antes de 24–48 h de estabilidade do hematoma.",
  clinica: {
    anamnese: [
      "Horário de início (ou última vez visto bem), cefaleia súbita, vômitos, rebaixamento",
      "Anticoagulantes (varfarina, rivaroxabana, apixabana, edoxabana, dabigatrana, heparina) e antiagregantes: dose e horário",
      "HAS, etilismo, hepatopatia, cocaína/anfetamina, trauma, neoplasia, gestação/puerpério",
      "AVC prévio, demência (angiopatia amiloide em idoso com hematoma lobar)"
    ],
    exameFisico: [
      "Glasgow, pupilas, NIHSS",
      "PA nos dois braços, FC, padrão respiratório",
      "Sinais de trauma, rigidez de nuca (sangue no espaço subaracnóideo)",
      "Sinais de hepatopatia, petéquias/equimoses"
    ],
    diferenciais: [
      { dx: "AVC isquêmico", pista: "TC sem sangue; seguir ficha avc" },
      { dx: "Hemorragia subaracnóidea", pista: "Sangue nas cisternas/sulcos; ver ficha hemorragia-subaracnoidea" },
      { dx: "Hematoma subdural/extradural traumático", pista: "Trauma, coleção extra-axial; ver ficha tce-moderado-grave" },
      { dx: "Tumor com sangramento", pista: "Edema desproporcional, lesões múltiplas, história de câncer" },
      { dx: "Trombose venosa cerebral", pista: "Hemorragia em território venoso, puerpério, anticoncepcional, cefaleia progressiva" }
    ],
    gravidade: [
      "ICH score (0–6): Glasgow 3–4 = 2 · 5–12 = 1 · 13–15 = 0; volume ≥ 30 mL = 1; sangue intraventricular = 1; infratentorial = 1; idade ≥ 80 = 1",
      "Volume (mL) ≈ A × B × C / 2 (maiores diâmetros em cm; C = nº de cortes com sangue × espessura do corte em cm)",
      "AHA 2022: evitar limitar suporte (ordem de não reanimar) precocemente com base só em escores; reavaliar prognóstico após 24–48 h de tratamento pleno"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — URGENTE. Suspeita de AVC hemorrágico.",
      porQue: "Confirmar hemorragia, localização, volume, sangue intraventricular, hidrocefalia, desvio de linha média.",
      esperar: "Hiperdensidade intraparenquimatosa.",
      interpretacao: "Hematoma profundo (núcleos da base, tálamo, ponte, cerebelo) em hipertenso = hipertensivo. Lobar em idoso = angiopatia amiloide. Repetir em 6–24 h ou se piora.",
      limitacoes: "Não identifica a causa secundária; jovem ou padrão atípico → angio-TC."
    },
    {
      nome: "Angio-TC de crânio",
      pedido: "Angiotomografia de crânio (polígono de Willis) — investigar causa secundária de hemorragia intracerebral.",
      porQue: "Aneurisma, MAV, trombose venosa; spot sign sugere risco de expansão.",
      esperar: "Normal na hemorragia hipertensiva típica.",
      interpretacao: "Lesão vascular → neurocirurgia/neurorradiologia.",
      limitacoes: "Contraste: avaliar função renal sem atrasar o exame em caso urgente."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma com plaquetas, TP/INR, TTPa, fibrinogênio, glicemia, sódio, potássio, ureia, creatinina, TGO, TGP, troponina, tipagem sanguínea. Toxicológico se suspeita. Beta-hCG em mulher em idade fértil. ECG.",
      porQue: "Coagulopatia, distúrbios metabólicos, preparo para cirurgia.",
      esperar: "INR elevado em uso de varfarina.",
      interpretacao: "TP/TTPa normais não excluem efeito de DOAC; anti-Xa ou tempo de trombina quando disponíveis.",
      limitacoes: "Não atrasar a reversão de anticoagulante aguardando o resultado se o uso é confirmado."
    }
  ],
  tratamento: [
    {
      droga: "Nitroprussiato de sódio",
      linha: "l1",
      dose: "0,25–0,5 mcg/kg/min, titular a cada 5 min (usual até 3 mcg/kg/min)",
      via: "IV em bomba de infusão",
      intervalo: "Contínuo",
      duracao: "Até PA estável no alvo; transição para VO",
      monitorizacao: "PA invasiva ou não invasiva a cada 5–15 min; evitar queda > 70 mmHg em 1 h",
      contraindicacoes: "—",
      ajustes: "Diluição: 50 mg em 250 mL de SG 5% (200 mcg/mL); equipo fotoprotegido. Uso prolongado ou IR: risco de toxicidade por cianeto/tiocianato. Pode aumentar a PIC: preferir betabloqueador IV quando suficiente"
    },
    {
      droga: "Metoprolol",
      linha: "l1",
      dose: "5 mg IV lento em 1–2 min; repetir a cada 10 min (máximo 15 mg)",
      via: "IV",
      intervalo: "Conforme PA; depois a cada 6 h se necessário",
      duracao: "Até transição para VO",
      monitorizacao: "FC, PA",
      contraindicacoes: "Bradicardia, BAV, asma/broncoespasmo, IC descompensada, cocaína",
      ajustes: "Labetalol, nicardipina e clevidipina (de uso nas diretrizes AHA) têm disponibilidade limitada no Brasil; esmolol é alternativa onde houver"
    },
    {
      droga: "Complexo protrombínico (CCP) de 4 fatores — reversão de varfarina",
      linha: "l1",
      dose: "INR 2–4: 25 UI/kg · INR 4–6: 35 UI/kg · INR > 6: 50 UI/kg (dose de fator IX; conferir bula do produto)",
      via: "IV",
      intervalo: "Dose única; repetir INR 15–60 min após",
      duracao: "—",
      monitorizacao: "INR alvo < 1,3; trombose",
      contraindicacoes: "Trombose aguda recente (avaliar risco-benefício)",
      ajustes: "Sempre associar vitamina K. Plasma fresco congelado 10–15 mL/kg só se CCP indisponível (mais lento, sobrecarga de volume). AHA 2022: INR 1,3–1,9 → CCP pode ser razoável"
    },
    {
      droga: "Vitamina K (fitomenadiona)",
      linha: "l1",
      dose: "10 mg",
      via: "IV lento (diluir em 50–100 mL de SF 0,9%, em 20–30 min)",
      intervalo: "Dose única (repetir conforme INR)",
      duracao: "—",
      monitorizacao: "INR em 6–12 h (efeito do CCP é transitório)",
      contraindicacoes: "—",
      ajustes: "Infusão lenta reduz risco de reação anafilactoide"
    },
    {
      droga: "Idarucizumabe — reversão de dabigatrana",
      linha: "l1",
      dose: "5 g (2 frascos de 2,5 g)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "TTPa / tempo de trombina",
      contraindicacoes: "—",
      ajustes: "Sem idarucizumabe: CCP 50 UI/kg; considerar hemodiálise. Carvão ativado se ingestão < 2 h"
    },
    {
      droga: "Reversão de inibidor do fator Xa (rivaroxabana, apixabana, edoxabana)",
      linha: "l1",
      dose: "Andexanet alfa conforme bula (disponibilidade restrita) OU CCP 4 fatores 50 UI/kg",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Anti-Xa calibrado se disponível; TC de controle",
      contraindicacoes: "—",
      ajustes: "Carvão ativado se última dose < 2 h. Considerar reversão se última dose < 24 h ou nível sérico relevante"
    },
    {
      droga: "Protamina — reversão de heparina",
      linha: "l1",
      dose: "HNF: 1 mg para cada 100 UI recebidas nas últimas 2–3 h (máx 50 mg). Enoxaparina < 8 h: 1 mg para cada 1 mg de enoxaparina (máx 50 mg)",
      via: "IV lento (máx 5 mg/min)",
      intervalo: "Pode repetir 0,5 mg por 1 mg de enoxaparina se sangramento persistir",
      duracao: "—",
      monitorizacao: "TTPa, PA (hipotensão, anafilaxia)",
      contraindicacoes: "Alergia a protamina / peixe (cautela)",
      ajustes: "Reversão parcial da enoxaparina"
    },
    {
      droga: "Transfusão de plaquetas em uso de antiagregante",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "AHA 2022: transfusão de plaquetas por uso de antiagregante sem cirurgia pode ser prejudicial (estudo PATCH)",
      ajustes: "Considerar só se neurocirurgia de urgência ou plaquetopenia grave"
    },
    {
      droga: "Anticonvulsivante profilático, corticoide, manitol de rotina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício e com dano potencial. Tratar crise clínica ou eletrográfica se ocorrer (ver ficha convulsao)",
      ajustes: "Osmoterapia só como ponte em HIC/herniação (ver ficha hipertensao-intracraniana)"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência com monitor; PA a cada 5–15 min durante a titulação",
      "Neurocirurgia avaliada já na chegada se cerebelar, hidrocefalia ou piora"
    ],
    reavaliar: [
      "Glasgow e pupilas de 1/1 h nas primeiras 24 h",
      "TC de controle em 6–24 h ou imediatamente se piora",
      "Glicemia (alvo 140–180; evitar < 70 e > 180), temperatura (tratar febre), sódio"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Todos: UTI neurológica ou unidade de AVC",
      "Disfagia: teste de deglutição antes de qualquer VO",
      "Profilaxia de TEV: compressão pneumática intermitente desde o 1º dia; heparina profilática após 24–48 h se hematoma estável"
    ],
    transferencia: [
      "Sem neurocirurgia/UTI: regular para centro de referência após via aérea, controle de PA e reversão de anticoagulante iniciados"
    ]
  },
  prescricao: {
    hospitalar: "AVC HEMORRÁGICO — SALA DE EMERGÊNCIA (adulto, peso: ___ kg)\n1. Dieta zero até teste de deglutição.\n2. Cabeceira elevada 30°, cabeça em posição neutra; repouso no leito.\n3. SF 0,9% 1.000 mL IV a 60–80 mL/h (não usar soro glicosado ou hipotônico).\n4. Controle de PA (alvo PAS ~140 mmHg; faixa 130–150; não baixar < 130):\n   a) Metoprolol 5 mg (5 mL) IV lento em 1–2 min; repetir a cada 10 min até 15 mg se PAS > 150; OU\n   b) Nitroprussiato de sódio 50 mg + SG 5% 250 mL (200 mcg/mL) IV em bomba, iniciar 0,25–0,5 mcg/kg/min (70 kg: 5–10 mL/h), titular a cada 5 min; equipo fotoprotegido.\n5. Se varfarina com INR ≥ 2: complexo protrombínico ___ UI (25–50 UI/kg conforme INR) IV + vitamina K 10 mg diluída em 100 mL de SF 0,9% IV em 30 min. INR 30 min após.\n   Se dabigatrana: idarucizumabe 5 g IV. Se rivaroxabana/apixabana/edoxabana: complexo protrombínico 50 UI/kg IV.\n   Se heparina não fracionada: protamina ___ mg IV lento (1 mg/100 UI das últimas 2–3 h; máx 50 mg).\n6. Dipirona 1 g IV de 6/6 h se dor ou temperatura ≥ 37,8 °C.\n7. Ondansetrona 4 mg IV lento de 8/8 h se náusea ou vômito.\n8. Insulina regular SC conforme glicemia capilar se > 180 mg/dL; glicose 50% 40 mL IV se < 70 mg/dL.\n9. Compressão pneumática intermitente em MMII (se disponível); NÃO usar heparina profilática nas primeiras 24–48 h.\n10. Cuidados: Glasgow, pupilas e PA de 15/15 min durante titulação e depois de 1/1 h; monitor cardíaco; SpO₂ (O₂ só se < 94%); glicemia capilar de 6/6 h; avisar se queda de Glasgow ≥ 2, anisocoria, PAS < 130 ou > 160."
  },
  orientacoesRetorno: [
    "Após a alta hospitalar: tomar o remédio de pressão todos os dias; meta de PA em geral < 130/80 mmHg",
    "Não voltar a usar anticoagulante ou AAS por conta própria; a decisão é do neurologista/cardiologista",
    "Evitar álcool em excesso, cocaína e outras drogas",
    "Procurar emergência imediatamente se: dor de cabeça forte e súbita, fraqueza ou dormência em um lado, fala enrolada, confusão, convulsão ou vômitos repetidos",
    "Reabilitação (fisioterapia, fono, terapia ocupacional) e consulta na UBS em até 1–2 semanas após a alta"
  ],
  tabelas: [
    {
      titulo: "ICH score — mortalidade em 30 dias (coorte original)",
      colunas: ["Pontos", "Mortalidade aproximada"],
      linhas: [["0", "0%"], ["1", "13%"], ["2", "26%"], ["3", "72%"], ["4", "97%"], ["5–6", "~100%"]],
      nota: "Escore para comunicação e estratificação, não para decidir limitar suporte isoladamente (AHA 2022)."
    },
    {
      titulo: "Reversão de antitrombóticos na hemorragia intracerebral",
      colunas: ["Droga", "Reversão", "Observação"],
      linhas: [
        ["Varfarina (INR ≥ 2)", "CCP 4 fatores 25–50 UI/kg + vitamina K 10 mg IV", "PFC 10–15 mL/kg só sem CCP"],
        ["Dabigatrana", "Idarucizumabe 5 g IV", "Alternativa: CCP 50 UI/kg; diálise"],
        ["Rivaroxabana, apixabana, edoxabana", "Andexanet alfa ou CCP 50 UI/kg", "Carvão ativado se dose < 2 h"],
        ["Heparina não fracionada", "Protamina 1 mg/100 UI (últimas 2–3 h), máx 50 mg", "Infundir lento"],
        ["Enoxaparina", "Protamina 1 mg/1 mg (dose < 8 h)", "Reversão parcial"],
        ["AAS / clopidogrel", "Não transfundir plaquetas de rotina", "Só se cirurgia de urgência"]
      ]
    }
  ],
  fontes: [
    "AHA/ASA — 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage (Stroke, 2022)",
    "Ministério da Saúde — Linha de cuidado do AVC no adulto (2020)",
    "Hemphill JC et al. — The ICH Score (Stroke, 2001)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
