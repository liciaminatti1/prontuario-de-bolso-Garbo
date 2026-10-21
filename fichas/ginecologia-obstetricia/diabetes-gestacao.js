// Diabetes na gestação
registrarFicha({
  id: "diabetes-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Diabetes na gestação: rastreio, diabetes gestacional e diabetes prévio",
  resumo: "Rastreio universal com glicemia de jejum na 1ª consulta e TOTG 75 g com 24–28 semanas. DMG: dieta, atividade física e automonitorização; insulina se fora da meta. Diabetes prévio (DM1/DM2) ou franco: pré-natal de alto risco.",
  palavrasChave: "diabetes gestacional dmg diabetes pregestacional overt diabetes franco totg 75g curva glicemica glicemia jejum 92 insulina nph regular metformina gestante gravidez macrossomia hipoglicemia",
  critico: {
    tempo: "Jejum ≥ 92: DMG · ≥ 126: DM",
    texto: "Glicemia de jejum na 1ª consulta: 92–125 mg/dL = DMG; ≥ 126 mg/dL = diabetes franco. Sem diagnóstico até então: TOTG 75 g com 24–28 semanas (jejum ≥ 92, 1 h ≥ 180 ou 2 h ≥ 153 = DMG)."
  },
  alarmes: [
    "Glicemia ≥ 250 mg/dL com náusea, vômitos, dor abdominal ou taquipneia (cetoacidose — ocorre com glicemias mais baixas na gestação)",
    "Hipoglicemia grave (confusão, convulsão) em uso de insulina",
    "PA ≥ 140/90 (DM aumenta risco de pré-eclâmpsia)",
    "Diminuição de movimentos fetais",
    "Polidrâmnio ou feto grande para a IG na USG",
    "Infecção urinária de repetição ou pielonefrite"
  ],
  condutaInicial: [
    "Glicemia de jejum na 1ª consulta para todas as gestantes",
    "TOTG 75 g com 24–28 semanas se jejum inicial < 92 mg/dL",
    "DMG: orientação nutricional, atividade física, glicemia capilar (jejum e 1 h ou 2 h após as refeições)",
    "Reavaliar em 1–2 semanas: se ≥ 30% das medidas fora da meta, iniciar insulina (ou metformina se insulina inviável)",
    "Diabetes franco ou prévio: encaminhar ao PNAR; trocar antidiabéticos orais por insulina (metformina pode ser mantida como adjuvante no DM2)",
    "AAS 100 mg à noite de 12 a 36 semanas no DM prévio (prevenção de pré-eclâmpsia)",
    "Pós-parto do DMG: suspender insulina e fazer TOTG 75 g entre 4 e 12 semanas"
  ],
  fataisExcluir: [
    "Cetoacidose diabética na gestação (euglicêmica possível)",
    "Hipoglicemia grave por insulina",
    "Pré-eclâmpsia associada",
    "Óbito fetal (risco aumentado com mau controle)",
    "Malformações fetais no DM prévio mal controlado (morfológico e ecocardiograma fetal)"
  ],
  proximaDecisao: "DMG controlado só com dieta → seguir na UBS com retorno a cada 2 semanas (compartilhado com PNAR conforme rede). DMG com insulina, DM prévio ou franco, ou complicação fetal → PNAR. Glicemias persistentemente > 200 mg/dL ou sintomas de cetoacidose → maternidade/PS.",
  clinica: {
    anamnese: [
      "Fatores de risco: IMC elevado, DMG prévio, macrossomia prévia, DM em parente de 1º grau, SOP, idade ≥ 35 anos, HAS",
      "DM prévio: tipo, tempo de doença, insulina e antidiabéticos em uso, HbA1c pré-concepção",
      "Complicações: retinopatia, nefropatia, neuropatia, doença coronariana",
      "Hipoglicemias (sintomas, frequência, reconhecimento)",
      "Hábitos alimentares, atividade física, rotina de trabalho",
      "Poliúria, polidipsia, candidíase de repetição"
    ],
    exameFisico: [
      "Peso e ganho de peso na curva da Caderneta",
      "PA em toda consulta",
      "Altura uterina (> esperado: macrossomia, polidrâmnio)",
      "Pés (DM prévio), fundo de olho (encaminhar)",
      "Locais de aplicação de insulina (lipo-hipertrofia)"
    ],
    diferenciais: [
      { dx: "Diabetes franco (prévio não diagnosticado)", pista: "Jejum ≥ 126, TOTG 2 h ≥ 200 ou HbA1c ≥ 6,5% em qualquer fase da gestação" },
      { dx: "DM1 de início na gestação", pista: "Glicemias muito altas, perda de peso, cetose; considerar anticorpos" },
      { dx: "Hiperglicemia por corticoide", pista: "Uso de betametasona para maturação pulmonar: glicemia sobe por 3–5 dias" },
      { dx: "Macrossomia sem DMG", pista: "Obesidade materna, erro de datação, constitucional" }
    ],
    gravidade: [
      "DMG controlado com dieta: risco intermediário, pode seguir na UBS conforme rede",
      "DMG com insulina/metformina: alto risco",
      "DM prévio (tipo 1 ou 2) ou diabetes franco: alto risco",
      "Complicações vasculares, nefropatia, HbA1c alta no 1º trimestre: risco muito alto (malformações, pré-eclâmpsia, óbito fetal)"
    ]
  },
  exames: [
    {
      nome: "Glicemia de jejum (1ª consulta)",
      pedido: "Glicemia plasmática de jejum (8 h de jejum).",
      porQue: "Rastreio universal e diagnóstico precoce.",
      esperar: "< 92 mg/dL normal.",
      interpretacao: "92–125 = DMG · ≥ 126 = diabetes franco (confirmar com 2ª dosagem se assintomática).",
      limitacoes: "HbA1c pode ser usada para diagnosticar diabetes franco (≥ 6,5%), mas não para DMG."
    },
    {
      nome: "TOTG 75 g (24–28 semanas)",
      pedido: "Teste oral de tolerância à glicose com 75 g de glicose anidra: glicemia de jejum, 1 hora e 2 horas.",
      porQue: "Diagnóstico de DMG em quem teve jejum inicial normal.",
      esperar: "Jejum < 92, 1 h < 180, 2 h < 153 mg/dL.",
      interpretacao: "Um valor alterado basta para DMG. Jejum ≥ 126 ou 2 h ≥ 200 = diabetes franco.",
      limitacoes: "Dieta habitual (sem restrição de carboidrato) nos 3 dias antes. Sem TOTG disponível: glicemia de jejum com 24–28 semanas (≥ 92 = DMG), conforme viabilidade (consenso 2016). Pós-bariátrica: não fazer TOTG (dumping) — usar perfil glicêmico capilar."
    },
    {
      nome: "Perfil glicêmico capilar",
      pedido: "Glicemia capilar em jejum e 1 h (ou 2 h) após café, almoço e jantar; com insulina, também antes das refeições e ao deitar conforme esquema.",
      porQue: "Guiar dieta e dose de insulina.",
      esperar: "Metas (SBD): jejum < 95 · 1 h pós < 140 · 2 h pós < 120 mg/dL.",
      interpretacao: "≥ 30% das medidas fora da meta após 1–2 semanas de dieta → tratamento farmacológico.",
      limitacoes: "Fornecer glicosímetro e tiras pelo SUS conforme protocolo local."
    },
    {
      nome: "DM prévio: avaliação inicial",
      pedido: "Hemoglobina glicada (HbA1c). Creatinina e relação albumina/creatinina em urina isolada. TSH (DM1). Fundoscopia (oftalmologia). ECG se DM de longa data ou HAS. USG morfológica 20–24 semanas e ecocardiograma fetal.",
      porQue: "Estadiar complicações e rastrear malformações.",
      esperar: "Meta de HbA1c < 6,5% (< 6% se sem hipoglicemia, SBD).",
      interpretacao: "HbA1c alta no 1º trimestre = maior risco de malformação; encaminhar ao PNAR com prioridade.",
      limitacoes: "HbA1c cai fisiologicamente na gestação."
    },
    {
      nome: "Reclassificação pós-parto (DMG)",
      pedido: "Teste oral de tolerância à glicose 75 g (jejum e 2 horas) entre 4 e 12 semanas após o parto.",
      porQue: "Até metade das mulheres com DMG evolui para DM2 ao longo da vida.",
      esperar: "Jejum < 100 e 2 h < 140 mg/dL.",
      interpretacao: "Jejum ≥ 126 ou 2 h ≥ 200 = DM; 100–125 ou 140–199 = pré-diabetes. Normal: rastrear a cada 1–3 anos.",
      limitacoes: "Baixa adesão: agendar já na alta da maternidade."
    }
  ],
  tratamento: [
    {
      droga: "Terapia nutricional e atividade física",
      linha: "l1",
      dose: "Plano alimentar individualizado (3 refeições + 2–3 lanches, carboidrato distribuído); caminhada ou exercício moderado 30 min/dia (150 min/semana) se sem contraindicação obstétrica",
      via: "—",
      intervalo: "Diário",
      duracao: "Até o parto",
      monitorizacao: "Perfil glicêmico, ganho de peso",
      contraindicacoes: "Exercício: sangramento, placenta prévia, risco de parto prematuro, pré-eclâmpsia",
      ajustes: "Evitar dietas muito restritivas (cetose)"
    },
    {
      droga: "Insulina humana NPH",
      linha: "l1",
      dose: "Início usual 0,5 UI/kg/dia (menor se só jejum alterado), ajustada a cada 3–7 dias",
      via: "SC",
      intervalo: "2–3 aplicações/dia (ex.: antes do café e às 22 h; ou café, almoço e 22 h)",
      duracao: "Até o parto",
      monitorizacao: "Glicemia capilar; hipoglicemia",
      contraindicacoes: "—",
      ajustes: "Jejum alto → aumentar NPH noturna (10–20%). Necessidade aumenta no 3º trimestre. Análogos (detemir, glargina) aceitos na gestação conforme disponibilidade"
    },
    {
      droga: "Insulina humana regular (ou asparte/lispro)",
      linha: "l1",
      dose: "2–4 UI antes da refeição com glicemia pós-prandial alta, ajustar por resposta",
      via: "SC",
      intervalo: "30 min antes das refeições (análogo: 0–15 min antes)",
      duracao: "Até o parto",
      monitorizacao: "Glicemia 1 h ou 2 h pós-prandial",
      contraindicacoes: "—",
      ajustes: "—"
    },
    {
      droga: "Metformina",
      linha: "alt",
      dose: "500 mg 1–2×/dia, aumentar até 2.000 mg/dia (máx. 2.500 mg/dia)",
      via: "VO, com refeições",
      intervalo: "12/12 h ou 8/8 h",
      duracao: "Até o parto",
      monitorizacao: "Glicemia; tolerância gastrointestinal",
      contraindicacoes: "TFG < 30; restrição de crescimento fetal; pré-eclâmpsia/hipertensão (cautela, SBD); risco de acidose",
      ajustes: "Atravessa a placenta. SBD: alternativa quando insulina não é viável ou como adjuvante (DM2, ganho de peso excessivo). Se meta não atingida, associar insulina"
    },
    {
      droga: "AAS",
      linha: "adj",
      dose: "100 mg",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "12 a 36 semanas",
      monitorizacao: "Sangramento",
      contraindicacoes: "Alergia, sangramento ativo",
      ajustes: "DM prévio é fator de alto risco para pré-eclâmpsia"
    },
    {
      droga: "Glibenclamida, iSGLT2 (dapagliflozina, empagliflozina), iDPP-4, agonistas de GLP-1",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Glibenclamida: hipoglicemia e macrossomia neonatal. Os demais: sem segurança estabelecida na gestação",
      ajustes: "Suspender ao confirmar gestação (GLP-1: idealmente antes da concepção)"
    }
  ],
  destino: {
    agora: [
      "DMG: orientação nutricional, glicosímetro, metas e retorno em 1–2 semanas",
      "Diabetes franco/prévio: insulina e encaminhamento ao PNAR com prioridade"
    ],
    reavaliar: [
      "A cada 1–2 semanas com o registro de glicemias",
      "USG obstétrica para crescimento fetal e líquido amniótico no 3º trimestre",
      "PA e proteinúria a cada consulta"
    ],
    alta: [
      "Pós-parto do DMG: suspender insulina; glicemias nos primeiros dias; TOTG 4–12 semanas",
      "Estimular amamentação (reduz risco de DM2)"
    ],
    observacao: ["—"],
    internacao: [
      "Cetoacidose, hiperglicemia grave sem controle ambulatorial, hipoglicemia grave",
      "Uso de corticoide para maturação pulmonar em gestante com insulina: monitorar glicemia em ambiente hospitalar"
    ],
    transferencia: [
      "PNAR: DMG com tratamento farmacológico, DM prévio, diabetes franco, alteração do crescimento fetal",
      "Maternidade de referência para parto: programar a via e a data conforme controle e vitalidade fetal"
    ]
  },
  prescricao: {
    ambulatorial: "DMG — INÍCIO DE INSULINA (exemplo: 70 kg × 0,5 UI/kg = 35 UI/dia; menor se só o jejum estiver alterado; ajustar)\nUSO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ----------------- 1 frasco (ou canetas)\n   Aplicar ___ UI antes do café da manhã e ___ UI às 22 horas (ex.: dose total de 35 UI = 20 UI antes do café + 15 UI às 22 h; se só o jejum alto, começar só com a dose das 22 h). Ajustar a cada 3 a 7 dias pelas glicemias.\n2. Insulina humana regular 100 UI/mL ------------- 1 frasco (se pós-prandial alta)\n   Aplicar ___ UI 30 minutos antes de ___ (refeição com glicemia 1 h > 140 mg/dL).\n3. Seringas de insulina, agulhas curtas, glicosímetro, tiras e lancetas (SUS).\n\nMONITORIZAÇÃO\nGlicemia capilar em jejum e 1 hora após café, almoço e jantar; anotar e trazer em 1 semana.\nMetas: jejum < 95; 1 hora após refeição < 140; 2 horas < 120 mg/dL.\n\nALTERNATIVA SE INSULINA INVIÁVEL (USO ORAL)\n4. Metformina 500 mg ---------------------------- 60 comprimidos\n   Tomar 1 comprimido no jantar por 1 semana; depois 1 no almoço e 1 no jantar; aumentar conforme glicemias até no máximo 2 comprimidos 2 vezes ao dia (2.000 mg/dia).\n\nDM PRÉVIO\n5. Ácido acetilsalicílico 100 mg ---------------- 30 comprimidos\n   Tomar 1 comprimido à noite, de 12 a 36 semanas.\n\nHIPOGLICEMIA (glicemia < 70 mg/dL ou sintomas)\nTomar 15 g de açúcar (1 colher de sopa de açúcar em água ou 150 mL de suco ou refrigerante comum), medir em 15 minutos e repetir se ainda < 70."
  },
  orientacoesRetorno: [
    "Diabetes gestacional é comum e controlável; a alimentação e as glicemias são o tratamento principal",
    "Medir e anotar as glicemias nos horários combinados e trazer em todas as consultas",
    "Insulina: guardar na geladeira (fora do congelador); o frasco em uso pode ficar em temperatura ambiente por até 4 semanas, longe do calor",
    "Sinais de glicose baixa: suor frio, tremor, fome, confusão — tomar açúcar e medir",
    "Voltar imediatamente se: vômitos, dor abdominal, respiração rápida, glicemia > 250 mg/dL, bebê mexendo menos, dor de cabeça forte, inchaço súbito, perda de líquido",
    "Após o parto: fazer a curva glicêmica entre 4 e 12 semanas e manter acompanhamento na UBS; o risco de diabetes tipo 2 continua"
  ],
  tabelas: [
    {
      titulo: "Critérios diagnósticos (plasma venoso)",
      colunas: ["Momento", "DMG", "Diabetes franco"],
      linhas: [
        ["Jejum (qualquer IG, idealmente 1ª consulta)", "92–125 mg/dL", "≥ 126 mg/dL"],
        ["TOTG 75 g — jejum (24–28 sem)", "≥ 92 mg/dL", "≥ 126 mg/dL"],
        ["TOTG 75 g — 1 h", "≥ 180 mg/dL", "—"],
        ["TOTG 75 g — 2 h", "153–199 mg/dL", "≥ 200 mg/dL"],
        ["HbA1c (se dosada)", "Não usar", "≥ 6,5%"]
      ],
      nota: "Consenso OPAS/MS/FEBRASGO/SBD (2016), adotado pela Diretriz SBD. Um valor alterado no TOTG basta."
    },
    {
      titulo: "Metas glicêmicas na gestação (SBD)",
      colunas: ["Momento", "Meta (mg/dL)"],
      linhas: [
        ["Jejum e pré-prandial", "< 95"],
        ["1 h pós-prandial", "< 140"],
        ["2 h pós-prandial", "< 120"],
        ["Evitar", "< 70 (hipoglicemia)"]
      ]
    }
  ],
  fontes: [
    "OPAS/Ministério da Saúde/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2016)",
    "SBD — Diretriz da Sociedade Brasileira de Diabetes: Diabetes na gestação — diagnóstico e tratamento farmacológico (edição 2024–2025)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "ADA — Standards of Care in Diabetes, seção 15: Management of diabetes in pregnancy (2026)",
    "FEBRASGO — Protocolo: Diabetes mellitus gestacional"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
