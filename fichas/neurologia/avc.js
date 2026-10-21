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
    texto: "Hora do último momento visto bem define a janela. Trombólise até 4,5 h; trombectomia até 24 h em oclusão de grande vaso."
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
  proximaDecisao: "TC sem sangramento + janela ≤ 4,5 h + sem contraindicação → trombolisar (porta-agulha ≤ 60 min). Suspeita de grande vaso → angio-TC e acionar trombectomia.",
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
      interpretacao: "Manter 140–180 mg/dL na fase aguda.",
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
      interpretacao: "Oclusão de grande vaso → trombectomia (até 24 h com critérios de imagem).",
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
      ajustes: "Piora neurológica, cefaleia ou vômitos → suspender e repetir TC"
    },
    {
      droga: "Tenecteplase",
      linha: "alt",
      dose: "0,25 mg/kg (máx 25 mg)",
      via: "IV em bolus único",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Igual à alteplase",
      contraindicacoes: "Igual à alteplase",
      ajustes: "Usar conforme protocolo institucional (atenção: dose diferente da do IAM)"
    },
    {
      droga: "Controle pressórico pré-trombólise",
      linha: "l1",
      dose: "Alvo < 185/110 antes e < 180/105 por 24 h após. Ex.: metoprolol 5 mg IV lento (até 3×) ou nitroprussiato 0,25–0,5 mcg/kg/min",
      via: "IV",
      intervalo: "Titular a cada 5–10 min",
      duracao: "24 h",
      monitorizacao: "PA a cada 15 min",
      contraindicacoes: "Betabloqueador: bradicardia, broncoespasmo, IC",
      ajustes: "Sem trombólise: tratar só se PA > 220/120"
    },
    {
      droga: "AAS",
      linha: "l1",
      dose: "160–300 mg",
      via: "VO ou SNE",
      intervalo: "Dose inicial, depois 100 mg/dia",
      duracao: "Contínuo",
      monitorizacao: "Deglutição antes da VO",
      contraindicacoes: "Nas 24 h após trombólise",
      ajustes: "AIT/AVC menor (NIHSS ≤ 3): AAS + clopidogrel por 21 dias"
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
  fontes: [
    "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019 e atualizações)",
    "Ministério da Saúde — Linha de Cuidado do AVC no adulto",
    "ESO Guideline on Thrombolysis (2021) e recomendação de tenecteplase (2023)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
