// Hipoglicemia
registrarFicha({
  id: "hipoglicemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  titulo: "Hipoglicemia",
  resumo: "Glicemia < 70 mg/dL com sintomas adrenérgicos (tremor, sudorese, palpitação) ou neuroglicopênicos (confusão, convulsão, coma).",
  palavrasChave: "hipoglicemia glicose glucagon insulina sulfonilureia glibenclamida rebaixamento convulsao",
  critico: {
    tempo: "Glicemia capilar em todo rebaixamento",
    texto: "Corrija imediatamente. Consciente: 15 g de carboidrato VO. Inconsciente: glicose 50% IV ou glucagon IM."
  },
  alarmes: [
    "Glicemia < 54 mg/dL ou rebaixamento de consciência",
    "Convulsão ou déficit focal",
    "Uso de sulfonilureia ou insulina de ação longa (recorrência por horas)",
    "Hipoglicemia sem diabetes conhecido",
    "Etilismo, sepse, insuficiência hepática ou renal"
  ],
  condutaInicial: [
    "Glicemia capilar",
    "Consciente e deglutindo: 15–20 g de glicose VO (1 colher de sopa de açúcar em água, 150 mL de suco)",
    "Não deglute: glicose 50% 30–50 mL IV (adulto) ou glucagon 1 mg IM/SC",
    "Etilista ou desnutrido: tiamina 100 mg IV antes ou junto com a glicose",
    "Repetir glicemia em 15 min (regra dos 15) e oferecer refeição quando acordar"
  ],
  fataisExcluir: [
    "Hipoglicemia por sulfonilureia (prolongada)",
    "Sepse",
    "Insuficiência adrenal",
    "Insuficiência hepática",
    "Intoxicação (álcool, betabloqueador, insulina intencional)"
  ],
  proximaDecisao: "Causa clara (atraso de refeição, insulina rápida) e glicemia estável após refeição → alta com ajuste. Sulfonilureia, insulina longa, causa desconhecida ou recorrência → observação prolongada com SG 10%.",
  clinica: {
    anamnese: [
      "Medicações: insulina (tipo, dose, horário), sulfonilureia (glibenclamida, gliclazida)",
      "Refeição omitida, exercício, álcool",
      "Episódios prévios e percepção dos sintomas",
      "Função renal (prolonga ação de insulina e sulfonilureia)",
      "Sem diabetes: tumor, insulinoma, cirurgia bariátrica, medicação de outra pessoa"
    ],
    exameFisico: [
      "Nível de consciência, déficit focal (pode mimetizar AVC)",
      "Sinais de sepse, hepatopatia, etilismo",
      "Sinais de insuficiência adrenal (hipotensão, hiperpigmentação)"
    ],
    diferenciais: [
      { dx: "AVC", pista: "Déficit focal que não reverte com glicose" },
      { dx: "Intoxicação alcoólica", pista: "Pode coexistir com hipoglicemia" },
      { dx: "Crise convulsiva", pista: "Glicemia normal após a crise" },
      { dx: "Pseudo-hipoglicemia", pista: "Leucocitose extrema, policitemia, má coleta capilar" }
    ],
    gravidade: [
      "Nível 1: 54–69 mg/dL",
      "Nível 2: < 54 mg/dL",
      "Nível 3 (grave): alteração mental que exige ajuda de terceiros, qualquer valor"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar seriada",
      pedido: "Glicemia capilar a cada 15 min até > 100 mg/dL, depois a cada 1–2 h.",
      porQue: "Confirmar correção e detectar recorrência.",
      esperar: "—",
      interpretacao: "Recorrência após correção → causa de ação prolongada.",
      limitacoes: "Glicosímetros perdem precisão em valores muito baixos e na má perfusão."
    },
    {
      nome: "Investigação (sem diabetes ou causa obscura)",
      pedido: "Glicemia plasmática, insulina, peptídeo C, beta-hidroxibutirato, cortisol — coletar durante a hipoglicemia, antes de corrigir, se possível sem atrasar o tratamento.",
      porQue: "Diferenciar insulina exógena, sulfonilureia e insulinoma.",
      esperar: "—",
      interpretacao: "Insulina alta com peptídeo C baixo → insulina exógena. Ambos altos → sulfonilureia ou insulinoma.",
      limitacoes: "Coleta fora da hipoglicemia perde valor."
    },
    {
      nome: "Exames gerais",
      pedido: "Creatinina, eletrólitos, função hepática, hemograma; etanol se suspeita.",
      porQue: "Fatores que prolongam ou causam hipoglicemia.",
      esperar: "—",
      interpretacao: "DRC → maior risco de recorrência.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Glicose VO",
      linha: "l1",
      dose: "15–20 g (criança 0,3 g/kg)",
      via: "VO",
      intervalo: "Repetir após 15 min se glicemia < 70",
      duracao: "Até > 70 mg/dL, depois lanche com carboidrato complexo",
      monitorizacao: "Glicemia em 15 min",
      contraindicacoes: "Rebaixamento ou risco de aspiração",
      ajustes: "Em uso de acarbose: usar glicose pura (não sacarose)"
    },
    {
      droga: "Glicose 50%",
      linha: "l1",
      dose: "Adulto 30–50 mL (15–25 g) · criança: glicose 10% 2–5 mL/kg",
      via: "IV (veia calibrosa; irritante)",
      intervalo: "Repetir conforme glicemia em 15 min",
      duracao: "—",
      monitorizacao: "Glicemia, local de infusão",
      contraindicacoes: "—",
      ajustes: "Não usar glicose 50% em criança pequena (usar 10%)"
    },
    {
      droga: "Glucagon",
      linha: "alt",
      dose: "1 mg (criança < 25 kg: 0,5 mg)",
      via: "IM ou SC",
      intervalo: "Pode repetir em 15 min",
      duracao: "—",
      monitorizacao: "Vômitos (lateralizar)",
      contraindicacoes: "Feocromocitoma",
      ajustes: "Pouco eficaz em etilistas, desnutridos e hepatopatas (sem glicogênio)"
    },
    {
      droga: "SG 10% em manutenção",
      linha: "l1",
      dose: "100–150 mL/h (ajustar)",
      via: "IV contínua",
      intervalo: "Contínuo",
      duracao: "Sulfonilureia: no mínimo 24 h; insulina longa: 12–24 h",
      monitorizacao: "Glicemia capilar a cada 1–2 h",
      contraindicacoes: "—",
      ajustes: "Recorrência por sulfonilureia apesar de glicose: octreotida 50–100 mcg SC 6–8/8h"
    },
    {
      droga: "Tiamina",
      linha: "adj",
      dose: "100 mg",
      via: "IV",
      intervalo: "Dose única inicial",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Etilistas e desnutridos, para prevenir encefalopatia de Wernicke"
    }
  ],
  destino: {
    agora: [
      "Corrigir a glicemia e identificar a causa"
    ],
    reavaliar: [
      "Glicemia em 15 min e depois de 1–2 h",
      "Após a refeição, antes da alta"
    ],
    alta: [
      "Causa identificada e corrigível (insulina rápida, refeição omitida)",
      "Consciência normal, alimentado, glicemia estável por algumas horas",
      "Acompanhante, orientação da regra dos 15 e ajuste da medicação",
      "Retorno à UBS em poucos dias para revisar esquema"
    ],
    observacao: [
      "Insulina de ação longa: 12–24 h",
      "Hipoglicemia grave sem causa clara"
    ],
    internacao: [
      "Sulfonilureia (24–72 h de risco)",
      "Recorrência apesar de glicose, sepse, insuficiência renal ou hepática, tentativa de autoextermínio"
    ],
    transferencia: [
      "Na UBS: corrigir e transferir se rebaixamento persistente, sulfonilureia ou recorrência"
    ]
  },
  fontes: [
    "ADA — Standards of Care in Diabetes 2025, seção 6 (Glycemic goals and hypoglycemia)",
    "SBD — Diretriz Oficial: Hipoglicemia (2024)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
