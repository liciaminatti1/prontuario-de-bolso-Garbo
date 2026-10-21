// Tromboembolismo pulmonar
registrarFicha({
  id: "tep",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Tromboembolismo pulmonar",
  resumo: "Dispneia súbita, dor pleurítica, taquicardia, hipoxemia ou síncope, sobretudo com fatores de risco para trombose venosa.",
  palavrasChave: "tep embolia pulmonar tvp trombose wells d-dimero angiotomografia anticoagulacao enoxaparina rivaroxabana apixabana trombolise",
  critico: {
    tempo: "Hipotensão = TEP de alto risco",
    texto: "PAS < 90 por > 15 min ou choque: anticoagular com heparina não fracionada e considerar trombólise sem esperar angio-TC se ecocardiograma mostra VD dilatado."
  },
  alarmes: [
    "PAS < 90 mmHg, choque ou parada cardíaca",
    "Síncope",
    "SpO₂ < 90% apesar de O₂",
    "VD dilatado no ecocardiograma / troponina ou BNP elevados",
    "Taquicardia > 110 bpm persistente"
  ],
  condutaInicial: [
    "Monitor, O₂ se SpO₂ < 90%, acesso venoso",
    "Estimar probabilidade clínica (Wells ou Genebra); se baixa, aplicar PERC",
    "D-dímero (ajustado à idade) se probabilidade não alta; angio-TC de tórax se alta ou D-dímero positivo",
    "Probabilidade alta ou intermediária: iniciar anticoagulação enquanto aguarda imagem (se sem sangramento)",
    "Instável: ecocardiograma à beira-leito e decisão de trombólise"
  ],
  fataisExcluir: [
    "TEP de alto risco",
    "SCA",
    "Dissecção de aorta",
    "Pneumotórax",
    "Tamponamento cardíaco"
  ],
  proximaDecisao: "TEP confirmado: estratificar (PESI/sPESI, VD, troponina). Baixo risco (sPESI 0) → alta precoce com anticoagulante oral. Intermediário → internar. Alto → trombólise / UTI.",
  clinica: {
    anamnese: [
      "Início e evolução da dispneia, dor pleurítica, hemoptise, síncope",
      "Fatores de risco: cirurgia ou imobilização recente, câncer, TVP/TEP prévio, gestação/puerpério, estrogênio, trombofilia, viagem longa",
      "Sintomas de TVP: dor e edema unilateral de perna",
      "Sangramentos, cirurgia recente (contraindicações à anticoagulação)"
    ],
    exameFisico: [
      "FC, FR, PA, SpO₂",
      "Sinais de TVP (assimetria de panturrilha > 3 cm)",
      "Turgência jugular, B2 hiperfonética, sinais de falência de VD",
      "Ausculta pulmonar (frequentemente normal)"
    ],
    diferenciais: [
      { dx: "Pneumonia", pista: "Febre, tosse produtiva, consolidação" },
      { dx: "SCA", pista: "Dor anginosa, alteração isquêmica no ECG" },
      { dx: "Pneumotórax", pista: "MV abolido, RX característico" },
      { dx: "IC descompensada", pista: "Congestão, BNP alto, edema bilateral" },
      { dx: "Exacerbação de DPOC/asma", pista: "Sibilos, história prévia" }
    ],
    gravidade: [
      "Alto risco: instabilidade hemodinâmica",
      "Intermediário-alto: PESI III–V ou sPESI ≥ 1 + VD disfuncional E troponina elevada",
      "Intermediário-baixo: PESI III–V ou sPESI ≥ 1 com no máximo um dos dois",
      "Baixo: PESI I–II ou sPESI 0"
    ]
  },
  exames: [
    {
      nome: "D-dímero",
      pedido: "D-dímero quantitativo.",
      porQue: "Excluir TEP em probabilidade baixa ou intermediária.",
      esperar: "Negativo exclui TEP nesses grupos.",
      interpretacao: "Corte ajustado à idade > 50 anos: idade × 10 ng/mL (FEU). Negativo → não fazer imagem.",
      limitacoes: "Não pedir em probabilidade alta. Eleva em idade, gestação, câncer, infecção, pós-operatório."
    },
    {
      nome: "Angiotomografia de tórax",
      pedido: "Angiotomografia de artérias pulmonares (protocolo TEP).",
      porQue: "Confirmar diagnóstico.",
      esperar: "Falha de enchimento em artérias pulmonares; relação VD/VE > 1.",
      interpretacao: "Positiva → anticoagular e estratificar.",
      limitacoes: "Contraste: alergia, DRC. Alternativas: cintilografia V/Q, USG venoso de MMII com TVP + quadro compatível."
    },
    {
      nome: "Ecocardiograma / POCUS",
      pedido: "Ecocardiograma transtorácico (ou à beira-leito) — avaliar VD.",
      porQue: "Estratificação; no instável, autoriza trombólise.",
      esperar: "VD dilatado, hipocinesia, McConnell.",
      interpretacao: "Instável + VD dilatado → tratar como TEP de alto risco.",
      limitacoes: "Normal não exclui TEP."
    },
    {
      nome: "Troponina, BNP, ECG, gasometria",
      pedido: "Troponina, BNP ou NT-proBNP, ECG, gasometria arterial, creatinina, hemograma, coagulograma.",
      porQue: "Estratificação e segurança da anticoagulação.",
      esperar: "ECG: taquicardia sinusal, S1Q3T3, BRD, T invertida V1–V4.",
      interpretacao: "Troponina e BNP elevados → risco intermediário-alto.",
      limitacoes: "ECG e gasometria não diagnosticam."
    },
    {
      nome: "USG Doppler venoso de MMII",
      pedido: "Ultrassonografia Doppler venosa de membros inferiores.",
      porQue: "Alternativa quando angio-TC contraindicada (gestante, DRC).",
      esperar: "TVP proximal.",
      interpretacao: "TVP proximal + suspeita de TEP → tratar sem outra imagem.",
      limitacoes: "Negativo não exclui TEP."
    }
  ],
  tratamento: [
    {
      droga: "Enoxaparina",
      linha: "l1",
      dose: "1 mg/kg",
      via: "SC",
      intervalo: "12/12h",
      duracao: "Mínimo 5 dias e até transição para oral; anticoagulação total mínima de 3 meses; estendida se TEP sem fator transitório maior ou fator persistente",
      monitorizacao: "Sangramento, plaquetas, função renal",
      contraindicacoes: "Sangramento ativo, plaquetopenia induzida por heparina",
      ajustes: "ClCr < 30: 1 mg/kg 1×/dia ou preferir heparina não fracionada. Câncer e gestação: manter heparina de baixo peso"
    },
    {
      droga: "Rivaroxabana",
      linha: "l1",
      dose: "15 mg 12/12h por 21 dias, depois 20 mg 1×/dia",
      via: "VO, com alimento",
      intervalo: "Conforme fase",
      duracao: "Mínimo 3 meses",
      monitorizacao: "Sangramento, função renal",
      contraindicacoes: "ClCr < 15 (cautela < 30), gestação, SAF triplo positivo, valva mecânica",
      ajustes: "Pode iniciar direto, sem heparina prévia. Apixabana é alternativa: 10 mg 12/12h por 7 dias, depois 5 mg 12/12h. DOAC preferido à varfarina (AHA/ACC 2026). Sem DOAC no SUS local: varfarina 5 mg/dia com enoxaparina por ≥ 5 dias e até INR 2–3 em 2 dias consecutivos"
    },
    {
      droga: "Heparina não fracionada",
      linha: "alt",
      dose: "Bolus 80 U/kg, infusão 18 U/kg/h",
      via: "IV contínua",
      intervalo: "Ajustar por TTPa (1,5–2,5× controle) a cada 6 h",
      duracao: "—",
      monitorizacao: "TTPa, plaquetas",
      contraindicacoes: "Sangramento ativo",
      ajustes: "Diluição: 25.000 U (5 mL) + SF 0,9% 245 mL = 100 U/mL. Ex.: 70 kg → bolus 5.600 U; infusão 1.260 U/h = 12,6 mL/h. Preferir no TEP de alto risco, candidato à trombólise, ClCr < 30 ou risco de sangramento (reversível com protamina)"
    },
    {
      droga: "Alteplase (TEP de alto risco)",
      linha: "l1",
      dose: "100 mg em 2 h (ou 0,6 mg/kg em 15 min, máx 50 mg, na PCR / colapso)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Sangramento, hemodinâmica",
      contraindicacoes: "AVC hemorrágico prévio, AVC isquêmico < 6 meses, neoplasia SNC, trauma/cirurgia maior < 3 semanas, sangramento ativo",
      ajustes: "Frasco 50 mg + 50 mL diluente (1 mg/mL): 2 frascos em bomba em 2 h. Suspender heparina durante a infusão e reiniciar quando TTPa < 2× controle. AHA/ACC 2026: em categoria E (falência cardiopulmonar) com contraindicação, considerar trombectomia/terapia por cateter"
    },
    {
      droga: "Noradrenalina",
      linha: "adj",
      dose: "0,05–0,5 mcg/kg/min",
      via: "IV contínua",
      intervalo: "Titular",
      duracao: "—",
      monitorizacao: "PAM",
      contraindicacoes: "—",
      ajustes: "Choque: evitar expansão volêmica agressiva (piora o VD) — no máximo 500 mL"
    }
  ],
  destino: {
    agora: [
      "Anticoagular e estratificar",
      "Alto risco: trombólise, UTI"
    ],
    reavaliar: [
      "Hemodinâmica e SpO₂ seriadas no intermediário-alto (risco de descompensação nas primeiras 48–72 h)"
    ],
    alta: [
      "sPESI 0 / Hestia negativo, sem VD disfuncional, sem necessidade de O₂, suporte social",
      "Anticoagulante oral prescrito, entregue e explicado",
      "Retorno em 1–2 semanas e reavaliação aos 3 meses"
    ],
    observacao: [
      "Baixo risco com dúvida social ou dor não controlada: 24 h"
    ],
    internacao: [
      "Risco intermediário",
      "UTI: alto risco ou intermediário-alto"
    ],
    transferencia: [
      "Sem tomografia: anticoagular (se probabilidade alta e sem contraindicação) e transferir",
      "Alto risco com contraindicação à trombólise → centro com embolectomia/cateter"
    ]
  },
  tabelas: [
    {
      titulo: "Categorias clínicas do TEP agudo (AHA/ACC 2026) e equivalência ESC",
      colunas: ["Categoria", "Definição resumida", "Equivalente ESC", "Destino"],
      linhas: [
        ["A", "TEP subclínico, incidental, assintomático", "—", "Tratamento ambulatorial"],
        ["B", "Sintomático, escore de gravidade baixo (PESI I–II, sPESI 0 ou Hestia 0); B1 subsegmentar, B2 segmentar ou mais proximal", "Baixo risco", "Ambulatorial se anticoagulação e retorno garantidos"],
        ["C", "Sintomático com escore elevado, biomarcadores e/ou disfunção de VD", "Intermediário (baixo ou alto)", "Internação"],
        ["D", "Falência cardiopulmonar incipiente: D1 hipotensão transitória responsiva a volume; D2 choque normotenso", "Intermediário-alto", "UTI; discutir terapia avançada"],
        ["E", "Falência cardiopulmonar: hipotensão persistente/choque ou parada", "Alto risco", "Trombólise ou terapia por cateter; UTI"]
      ],
      nota: "Resumo de fontes secundárias; conferir subcategorias C1–C3 e E1–E2 no texto completo (Circulation 2026)."
    }
  ],
  prescricao: {
    hospitalar: "PRESCRIÇÃO — INTERNAÇÃO (TEP RISCO INTERMEDIÁRIO, 70 kg)\n1. Dieta livre.\n2. Enoxaparina 70 mg (1 mg/kg) SC de 12 em 12 horas (ClCr < 30: 70 mg 1 vez ao dia ou preferir HNF).\n   OU heparina não fracionada 25.000 U + SF 0,9% 245 mL (100 U/mL): bolus 5.600 U (80 U/kg) IV e infusão 12,6 mL/h (18 U/kg/h); TTPa em 6 h e ajustar para 1,5–2,5× controle.\n3. O₂ por cateter nasal se SpO₂ < 90%.\n4. Dipirona 1 g IV lento de 6 em 6 horas se dor pleurítica; evitar AINE em anticoagulado.\n5. Cuidados: monitor cardíaco e oximetria contínuos nas primeiras 48–72 h (intermediário-alto), PA de 2 em 2 horas, sinais de sangramento, plaquetas a cada 2–3 dias com heparina.\n\nTEP DE ALTO RISCO (CHOQUE)\n1. Heparina não fracionada em bolus 80 U/kg IV.\n2. Alteplase 100 mg IV em 2 horas (2 frascos de 50 mg reconstituídos a 1 mg/mL, em bomba a 50 mL/h); na parada cardíaca: 0,6 mg/kg (máx 50 mg) em 15 minutos. Suspender HNF durante a infusão e reiniciar sem bolus quando TTPa < 2× controle.\n3. Noradrenalina 16 mg + SG 5% 234 mL (64 mcg/mL) IV em bomba, 0,05–0,5 mcg/kg/min; volume no máximo 500 mL.\n4. Evitar IOT se possível (risco de colapso do VD); se necessária, preparar vasopressor antes.",
    ambulatorial: "TEP DE BAIXO RISCO (USO ORAL)\n1. Rivaroxabana 15 mg ------------------------------- 42 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento, por 21 dias.\n2. Rivaroxabana 20 mg ------------------------------- 30 comprimidos\n   Após os 21 dias: tomar 1 comprimido 1 vez ao dia, com alimento, por no mínimo 3 meses no total.\n   OU Apixabana 5 mg: 2 comprimidos de 12 em 12 horas por 7 dias; depois 1 comprimido de 12 em 12 horas.\n   OU (SUS) Enoxaparina 1 mg/kg SC de 12 em 12 horas + varfarina 5 mg 1 vez ao dia; suspender enoxaparina após ≥ 5 dias e INR 2–3 por 2 dias seguidos. Controle de INR semanal no início.\n3. Dipirona 500 mg: 1 a 2 comprimidos de 6 em 6 horas se dor."
  },
  orientacoesRetorno: [
    "Tomar o anticoagulante todos os dias, no mesmo horário; não pular doses nem parar sem orientação",
    "Não usar anti-inflamatórios, AAS ou chás e remédios naturais sem falar com o médico; avisar dentistas e outros médicos",
    "Com varfarina: manter alimentação regular e fazer o exame de INR nas datas marcadas",
    "Voltar imediatamente se falta de ar que piora, dor no peito, desmaio, tosse com sangue, sangramento que não para, urina vermelha, fezes pretas, vômito com sangue ou dor de cabeça forte",
    "Caminhar e evitar ficar muito tempo parado; meias de compressão se inchaço na perna",
    "Retorno em 1–2 semanas e reavaliação aos 3 meses para decidir a duração do anticoagulante"
  ],
  fontes: [
    "AHA/ACC/ACCP/ACEP/CHEST/SCAI/SHM/SIR/SVM/SVN — Guideline for the Evaluation and Management of Acute Pulmonary Embolism in Adults (Circulation/JACC, 2026)",
    "ESC — Guidelines for the diagnosis and management of acute pulmonary embolism (2019)",
    "CHEST Guideline: Antithrombotic Therapy for VTE Disease (2021)",
    "SBPT — Recomendações para manejo do TEP (2010)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
