// Tromboembolismo pulmonar
registrarFicha({
  id: "tep",
  especialidade: "pneumologia",
  caminho: "ps",
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
      duracao: "Mínimo 5 dias e até transição para oral",
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
      ajustes: "Pode iniciar direto, sem heparina prévia. Apixabana é alternativa: 10 mg 12/12h por 7 dias, depois 5 mg 12/12h"
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
      ajustes: "Preferir no TEP de alto risco, candidato à trombólise, ClCr < 30 ou risco de sangramento (reversível com protamina)"
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
      ajustes: "Suspender heparina durante a infusão e reiniciar quando TTPa < 2× controle"
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
  fontes: [
    "ESC 2019 Guidelines for the diagnosis and management of acute pulmonary embolism",
    "CHEST Guideline: Antithrombotic Therapy for VTE Disease (2021)",
    "SBPT — Recomendações para manejo do TEP (2010) e atualizações"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
