// Hipoglicemia
registrarFicha({
  id: "hipoglicemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "ambos",
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
    "Não deglute: glicose 50% 30–50 mL IV (adulto) · criança glicose 10% 2–5 mL/kg IV · ou glucagon IM/SC (1 mg; 0,5 mg se < 25 kg)",
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
      dose: "Adulto 30–50 mL (15–25 g) · criança: glicose 10% 2–5 mL/kg (0,2–0,5 g/kg), máx 25 g",
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
  prescricao: {
    hospitalar: "ADULTO — HIPOGLICEMIA COM REBAIXAMENTO OU SEM VIA ORAL\n1. Glicemia capilar agora. Decúbito lateral se rebaixado.\n2. Glicose 50% — 40 mL (20 g) IV lento em veia calibrosa, AGORA. Repetir 20–40 mL se glicemia < 70 mg/dL em 15 min.\n3. Etilista ou desnutrido: tiamina 100 mg IV (antes ou junto com a glicose).\n4. Sem acesso venoso: glucagon 1 mg IM ou SC (reconstituir no diluente do kit). Lateralizar (vômitos).\n5. Manutenção (sulfonilureia, insulina de ação longa, recorrência): SG 10% 100–150 mL/h IV contínuo, ajustando para glicemia > 100 mg/dL.\n6. Hipoglicemia recorrente por sulfonilureia apesar de glicose: octreotida 50–100 mcg SC de 6/6 h a 8/8 h.\n7. Dieta oral assim que acordar e deglutir (carboidrato complexo).\n8. Glicemia capilar de 15/15 min até > 100 mg/dL; depois de 1/1 h a 2/2 h. Sulfonilureia: observar ≥ 24 h.\n\nCRIANÇA (por kg)\n- Glicose 10%: 2–5 mL/kg IV em bolus lento (0,2–0,5 g/kg); não usar glicose 50% em criança pequena.\n- Glucagon IM/SC: 0,5 mg se < 25 kg (ou < 6–8 anos); 1 mg se ≥ 25 kg.\n- Manutenção: SG 10% no volume de manutenção (Holliday-Segar), ajustando pela glicemia.\n- Consciente: glicose 0,3 g/kg VO (máx 15–20 g).",
    ambulatorial: "ALTA — CORRIGIDA E COM CAUSA IDENTIFICADA\nORIENTAÇÕES / AJUSTES\n1. Revisar a dose de insulina ou sulfonilureia (reduzir 10–20% da dose implicada, ou suspender glibenclamida e preferir gliclazida MR/outra classe no idoso e na DRC).\n2. Ter sempre à mão 15 g de carboidrato rápido (1 colher de sopa de açúcar, 3 balas moles ou 150 mL de suco/refrigerante comum).\n3. Glicemia capilar antes das refeições e ao deitar por 1 semana; anotar.\n\nSE INSULINA E HIPOGLICEMIA GRAVE PRÉVIA (USO IM/SC — se disponível)\n4. Glucagon 1 mg (kit) --------------------------- 1 unidade\n   Familiar aplicar 1 mg (criança < 25 kg: 0,5 mg) na coxa se a pessoa não conseguir engolir ou desmaiar, e chamar o SAMU 192."
  },
  orientacoesRetorno: [
    "Regra dos 15: se glicemia < 70 ou sintomas, tomar 15 g de açúcar, medir em 15 min e repetir se ainda < 70; depois fazer um lanche",
    "Não pular refeições depois de aplicar insulina ou tomar glibenclamida/gliclazida; cuidado com álcool e exercício intenso sem comer",
    "Família deve saber reconhecer (suor frio, tremor, confusão, fala enrolada) e não dar comida na boca de quem está desacordado",
    "Voltar imediatamente se a hipoglicemia se repetir nas próximas 24–72 h, sobretudo com glibenclamida ou insulina NPH",
    "Não dirigir se teve hipoglicemia grave até reavaliação",
    "Retorno na UBS em poucos dias para ajustar os remédios"
  ],
  fontes: [
    "ADA — Standards of Care in Diabetes 2026, seção 6 (Glycemic goals and hypoglycemia)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Hipoglicemia (2024–2025)",
    "ISPAD Clinical Practice Consensus Guidelines 2022: Hypoglycemia in children and adolescents"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
