// AVC agudo / déficit neurológico súbito
registrarFicha({
  id: "avc",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "AVC agudo / déficit neurológico súbito",
  resumo: "Déficit focal súbito: fraqueza ou dormência unilateral, desvio de rima, alteração de fala ou visão, ataxia.",
  palavrasChave: "avc acidente vascular cerebral derrame trombolise alteplase tenecteplase trombectomia nihss samu",
  critico: {
    tempo: "Porta-TC ≤ 25 min",
    texto: "Hora do último momento visto bem define a janela. Trombólise (alteplase ou tenecteplase) até 4,5 h, porta-agulha ≤ 60 min; trombectomia até 24 h em oclusão de grande vaso com critérios de imagem."
  },
  alarmes: [
    "Início < 4,5 h (janela trombolítica)",
    "NIHSS ≥ 6 ou sinais corticais (afasia, negligência, desvio do olhar) → suspeita de grande vaso",
    "Rebaixamento de consciência, vômitos, cefaleia intensa (hemorragia)",
    "Glasgow ≤ 8 ou incapacidade de proteger via aérea",
    "PA ≥ 185/110 em candidato a trombólise"
  ],
  condutaInicial: [
    "Glicemia capilar imediata (hipoglicemia simula AVC)",
    "Definir hora do último momento visto bem",
    "Aplicar NIHSS",
    "TC de crânio sem contraste ± angio-TC",
    "Cabeceira 0–30°, jejum, SpO₂ > 94%; não reduzir PA abaixo do necessário"
  ],
  fataisExcluir: [
    "AVC hemorrágico / HSA",
    "Oclusão de artéria basilar",
    "Hipoglicemia",
    "Dissecção arterial cervical",
    "Meningoencefalite, abscesso, tumor com sangramento"
  ],
  proximaDecisao: "TC sem sangramento + janela ≤ 4,5 h + déficit incapacitante + sem contraindicação → trombolisar (porta-agulha ≤ 60 min), independentemente do NIHSS. Suspeita de grande vaso → angio-TC e acionar trombectomia. Sem trombólise e AVC menor (NIHSS ≤ 3) ou AIT de alto risco → AAS + clopidogrel em até 24 h (NIHSS 4–5 ou 24–72 h com causa aterosclerótica presumida: considerar).",
  clinica: {
    anamnese: [
      "Hora exata do início ou do último momento visto bem (testemunha!)",
      "AVC ao acordar = considerar a hora em que foi dormir",
      "Anticoagulantes (varfarina, DOAC) e hora da última dose",
      "Cirurgia, trauma, sangramento recentes; AVC ou TCE prévios",
      "Convulsão no início (pode ser paralisia de Todd)",
      "Sintomas de dissecção: dor cervical, trauma cervical"
    ],
    exameFisico: [
      "Glicemia capilar, PA, ritmo (FA?)",
      "NIHSS completo",
      "Escala pré-hospitalar (Cincinnati, LAPSS, RACE para grande vaso)",
      "Sinais meníngeos",
      "Ausculta carotídea, sinais de trauma"
    ],
    diferenciais: [
      {
        dx: "AVC isquêmico",
        pista: "Déficit focal súbito com TC inicial normal"
      },
      {
        dx: "AVC hemorrágico",
        pista: "Cefaleia, vômitos, rebaixamento, PA muito elevada; TC confirma"
      },
      {
        dx: "Hipoglicemia",
        pista: "Glicemia < 60 mg/dL; reverte com glicose"
      },
      {
        dx: "Crise convulsiva / Todd",
        pista: "Movimentos prévios, recuperação em horas"
      },
      {
        dx: "Enxaqueca com aura",
        pista: "Sintomas positivos com marcha progressiva"
      },
      {
        dx: "Conversivo",
        pista: "Exame inconsistente; diagnóstico de exclusão"
      }
    ],
    gravidade: [
      "NIHSS alto, rebaixamento",
      "Sinais de herniação",
      "Hemorragia com efeito de massa ou em fossa posterior"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar",
      pedido: "Glicemia capilar — imediata.",
      porQue: "Exclui hipoglicemia; glicemia < 50 contraindica trombólise até correção.",
      esperar: "—",
      interpretacao: "Manter 140–180 mg/dL na fase aguda; controle intensivo (80–130) não é mais recomendado.",
      limitacoes: "—"
    },
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — URGENTE, protocolo AVC. Hora de início: __:__.",
      porQue: "Excluir hemorragia antes de trombólise.",
      esperar: "Frequentemente normal nas primeiras horas no isquêmico.",
      interpretacao: "Hemorragia → protocolo de AVCh. ASPECTS < 6 → menor benefício/maior risco.",
      limitacoes: "Pouco sensível para isquemia precoce e fossa posterior."
    },
    {
      nome: "Angio-TC de crânio e cervical",
      pedido: "Angiotomografia de vasos intracranianos e cervicais — suspeita de oclusão de grande vaso.",
      porQue: "Selecionar trombectomia.",
      esperar: "Oclusão de ACI, M1/M2, basilar.",
      interpretacao: "Oclusão de grande vaso → trombectomia (até 24 h com critérios de imagem; AHA 2026 amplia para núcleo isquêmico grande em pacientes selecionados).",
      limitacoes: "Não aguardar creatinina para fazer."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma com plaquetas, TP/INR, TTPa, creatinina, eletrólitos, troponina.",
      porQue: "Contraindicações e diferenciais.",
      esperar: "—",
      interpretacao: "Plaquetas < 100 mil ou INR > 1,7 contraindicam trombólise.",
      limitacoes: "Sem uso de anticoagulante, não aguardar resultado para trombolisar."
    },
    {
      nome: "ECG",
      pedido: "ECG de 12 derivações.",
      porQue: "FA, IAM concomitante.",
      esperar: "—",
      interpretacao: "FA → prevenção secundária com anticoagulação no momento adequado.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Alteplase",
      linha: "l1",
      dose: "0,9 mg/kg (máx 90 mg): 10% em bolus em 1 min, 90% em 60 min",
      via: "IV",
      intervalo: "Dose única",
      duracao: "60 min de infusão",
      monitorizacao: "NIHSS e PA a cada 15 min por 2 h, a cada 30 min por 6 h, depois horário até 24 h",
      contraindicacoes: "Hemorragia na TC, AVC ou TCE grave < 3 meses, cirurgia intracraniana recente, sangramento ativo, plaquetas < 100 mil, INR > 1,7, DOAC < 48 h, glicemia < 50",
      ajustes: "Frasco 50 mg + 50 mL de diluente = 1 mg/mL. Ex.: 70 kg = 63 mg: 6,3 mL em bolus em 1 min e 56,7 mL em bomba em 60 min. Desprezar o excedente do frasco. Piora neurológica, cefaleia ou vômitos → suspender e repetir TC"
    },
    {
      droga: "Tenecteplase",
      linha: "l1",
      dose: "0,25 mg/kg (máx 25 mg)",
      via: "IV em bolus único",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Igual à alteplase",
      contraindicacoes: "Igual à alteplase",
      ajustes: "AHA 2026: opção equivalente à alteplase em até 4,5 h. Frasco 50 mg + 10 mL de água = 5 mg/mL → 0,05 mL/kg (70 kg = 17,5 mg = 3,5 mL) em bolus de 5 s. Dose diferente da do IAM. Indicação para AVC na bula brasileira relatada em dez/2025 (fonte secundária); conferir registro, disponibilidade no SUS e protocolo local"
    },
    {
      droga: "Controle pressórico pré-trombólise",
      linha: "l1",
      dose: "Alvo < 185/110 antes e < 180/105 por 24 h após. Ex.: metoprolol 5 mg IV lento em 1–2 min (repetir a cada 10 min, até 15 mg) ou nitroprussiato 0,25–0,5 mcg/kg/min (até 10 mcg/kg/min)",
      via: "IV",
      intervalo: "Titular a cada 5–10 min",
      duracao: "24 h",
      monitorizacao: "PA a cada 15 min",
      contraindicacoes: "Betabloqueador: bradicardia, broncoespasmo, IC",
      ajustes: "Nitroprussiato 50 mg + SG 5% 250 mL = 200 mcg/mL, protegido da luz (70 kg a 0,25 mcg/kg/min ≈ 5 mL/h). Sem trombólise: tratar só se PA ≥ 220/120 (reduzir cerca de 15% nas primeiras 24 h). Não baixar PAS para < 140 após trombólise ou trombectomia (sem benefício; dano após recanalização)"
    },
    {
      droga: "AAS",
      linha: "l1",
      dose: "160–325 mg",
      via: "VO ou SNE",
      intervalo: "Dose inicial, depois 100 mg/dia",
      duracao: "Contínuo",
      monitorizacao: "Deglutição antes da VO",
      contraindicacoes: "Nas 24 h após trombólise",
      ajustes: "AVC menor não cardioembólico (NIHSS ≤ 3) ou AIT de alto risco, sem trombólise: AAS + clopidogrel (ataque 300–600 mg, depois 75 mg/dia) iniciados em até 24 h, por 21 dias, depois antiagregante único. AHA 2026 (recomendação mais fraca, estudo INSPIRES): considerar também em NIHSS 4–5 ou chegada entre 24 e 72 h, se causa aterosclerótica presumida"
    },
    {
      droga: "Glicose 50%",
      linha: "adj",
      dose: "Hipoglicemia: 40–60 mL (20–30 g)",
      via: "IV",
      intervalo: "Repetir conforme glicemia",
      duracao: "—",
      monitorizacao: "Glicemia em 15 min",
      contraindicacoes: "—",
      ajustes: "Etilistas/desnutridos: tiamina 100–300 mg IV antes"
    }
  ],
  destino: {
    agora: [
      "Protocolo AVC: TC, NIHSS e decisão de trombólise em ≤ 60 min",
      "Suspeita de grande vaso → angio-TC e contato com centro de trombectomia"
    ],
    reavaliar: [
      "NIHSS seriado",
      "Teste de deglutição antes de qualquer VO",
      "TC de controle 24 h após trombólise"
    ],
    alta: [
      "Não se aplica na fase aguda. AIT: só após investigação (imagem vascular, ECG, ABCD²) e prevenção secundária iniciada"
    ],
    observacao: [
      "AIT de baixo risco em unidade com investigação rápida disponível"
    ],
    internacao: [
      "Todo AVC agudo, preferencialmente em Unidade de AVC"
    ],
    transferencia: [
      "Sem TC ou trombolítico: transferir imediatamente para centro de AVC (regulação/SAMU)",
      "Oclusão de grande vaso sem trombectomia local: drip-and-ship (trombolisar e transferir)"
    ]
  },
  prescricao: {
    hospitalar: "PRESCRIÇÃO — SALA DE EMERGÊNCIA (AVC ISQUÊMICO, CANDIDATO À TROMBÓLISE, 70 kg)\n1. Dieta zero até teste de deglutição.\n2. Cabeceira 0–30°; repouso no leito.\n3. SF 0,9% 1.000 mL IV a 80 mL/h (evitar soro glicosado).\n4. Se PA > 185/110 antes da trombólise: metoprolol 5 mg (5 mL) IV lento em 1–2 min, repetir a cada 10 min até 15 mg; OU nitroprussiato de sódio 50 mg + SG 5% 250 mL (200 mcg/mL) IV em bomba, 0,25–0,5 mcg/kg/min (70 kg: 5–10 mL/h), titular; equipo fotoprotegido.\n5. Alteplase 0,9 mg/kg (máx 90 mg) — 70 kg = 63 mg (1 mg/mL): 6,3 mg IV em bolus em 1 min + 56,7 mg IV em bomba em 60 min.\n   OU tenecteplase 0,25 mg/kg (máx 25 mg) — 70 kg = 17,5 mg (3,5 mL de 5 mg/mL) IV em bolus único.\n6. Após trombólise: manter PA < 180/105 por 24 h; não usar antiagregante, anticoagulante nem punção arterial/SNG/SVD nas primeiras 24 h, se possível.\n7. Sem trombólise e sem hemorragia: AAS 300 mg VO/SNE agora (após teste de deglutição), depois 100 mg 1 vez ao dia.\n   AVC menor (NIHSS ≤ 3) ou AIT de alto risco: + clopidogrel 300 mg agora, depois 75 mg 1 vez ao dia por 21 dias.\n8. Insulina regular SC conforme glicemia capilar se > 180 mg/dL (alvo 140–180); glicose 50% 40 mL IV se glicemia < 60.\n9. Dipirona 1 g IV lento de 6 em 6 horas se febre (manter T < 37,5 °C) ou dor.\n10. O₂ apenas se SpO₂ < 94%.\n11. Cuidados: NIHSS e PA a cada 15 min por 2 h, a cada 30 min por 6 h, depois a cada hora até 24 h; monitor cardíaco; glicemia capilar de 6 em 6 horas; teste de deglutição antes de qualquer VO.\n12. Profilaxia de TEV com compressão pneumática; heparina profilática após 24 h da trombólise, se sem sangramento."
  },
  orientacoesRetorno: [
    "Reconhecer AVC com SAMU: rosto torto, braço fraco, fala enrolada — ligar 192 imediatamente e anotar a hora",
    "Tomar todos os dias o antiagregante ou anticoagulante e os remédios de pressão e colesterol; não suspender sem orientação",
    "Parar de fumar, controlar pressão, diabetes e colesterol, evitar álcool, praticar atividade física",
    "Voltar imediatamente se novo déficit, dor de cabeça súbita e forte, sangramentos ou fezes pretas",
    "Consulta na UBS em até 7–14 dias após a alta e acompanhamento com neurologia e reabilitação (fisioterapia, fonoaudiologia)"
  ],
  fontes: [
    "AHA/ASA — 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (Stroke, 2026)",
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas do AVC isquêmico agudo (trombólise e trombectomia) e Linha de Cuidado do AVC no adulto",
    "ESO — Guideline on intravenous thrombolysis (2021) e recomendação sobre tenecteplase (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
