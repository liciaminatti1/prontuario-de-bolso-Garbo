// Pancreatite aguda
registrarFicha({
  id: "pancreatite-aguda",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Pancreatite aguda",
  resumo: "Dor epigástrica em faixa com lipase ou amilase ≥ 3× o limite superior. Classificar pela Atlanta revisada, hidratar com Ringer lactato de forma moderada, analgesia adequada e dieta oral precoce.",
  palavrasChave: "pancreatite aguda lipase amilase atlanta bisap ringer lactato hidratacao litiase biliar coledocolitiase alcool hipertrigliceridemia necrose cpre colecistectomia",
  critico: {
    tempo: "Volume moderado e dieta em 24 h",
    texto: "Ringer lactato guiado por metas (evitar hidratação agressiva). Dieta oral assim que tolerar. Colangite associada → CPRE em até 24 h."
  },
  alarmes: [
    "Falência orgânica: PAS < 90 mmHg, SpO₂ < 90% / PaO₂/FiO₂ ≤ 300, creatinina ≥ 1,9 mg/dL",
    "SIRS persistente > 48 h",
    "BISAP ≥ 3, idade > 60, obesidade, ureia em ascensão, hematócrito ≥ 44% ou subindo",
    "Icterícia + febre (colangite)",
    "Dor que piora após melhora, febre tardia (necrose infectada)",
    "Derrame pleural, rebaixamento"
  ],
  condutaInicial: [
    "Confirmar diagnóstico: 2 de 3 — dor típica, lipase (ou amilase) ≥ 3× LSN, imagem compatível",
    "Monitor, acesso, sinais vitais, diurese, SpO₂",
    "Ringer lactato: bolus de 10 mL/kg se hipovolemia; depois 1,5 mL/kg/h; reavaliar em 3, 6, 12 e 24 h",
    "Analgesia: dipirona + opioide (morfina) conforme dor",
    "USG de abdome na admissão (litíase biliar)",
    "Triglicerídeos, cálcio, função hepática, ureia, creatinina, hemograma, PCR",
    "Dieta oral leve hipogordurosa assim que tolerar (em até 24–72 h), sem esperar normalização da lipase"
  ],
  fataisExcluir: [
    "Colangite aguda (CPRE urgente)",
    "Úlcera perfurada, isquemia mesentérica, aneurisma de aorta roto",
    "IAM de parede inferior",
    "Cetoacidose diabética (lipase pode subir)",
    "Síndrome compartimental abdominal"
  ],
  proximaDecisao: "Leve e biliar → colecistectomia na mesma internação. Sem melhora em 48–72 h ou falência orgânica → TC com contraste para avaliar necrose e coleções. Necrose com suspeita de infecção → antibiótico e abordagem step-up (drenagem percutânea/endoscópica, preferir após 4 semanas).",
  clinica: {
    anamnese: [
      "Dor epigástrica súbita, em faixa, irradiação para dorso, náuseas e vômitos",
      "Litíase biliar conhecida, cólicas prévias",
      "Álcool (quantidade, último consumo)",
      "Medicamentos (azatioprina, valproato, estrogênio, diuréticos, inibidores de DPP-4), CPRE recente",
      "Hipertrigliceridemia, hipercalcemia, trauma, história familiar"
    ],
    exameFisico: [
      "Sinais vitais, SpO₂, volemia",
      "Icterícia, febre (colangite)",
      "Defesa abdominal, distensão, íleo",
      "Equimose em flancos (Grey-Turner) ou periumbilical (Cullen): hemorragia retroperitoneal"
    ],
    diferenciais: [
      { dx: "Úlcera péptica perfurada", pista: "Dor súbita, peritonite, pneumoperitônio" },
      { dx: "Colecistite / colangite", pista: "Dor em hipocôndrio direito, Murphy, icterícia, febre" },
      { dx: "Isquemia mesentérica", pista: "Dor desproporcional ao exame, FA, lactato alto" },
      { dx: "IAM inferior", pista: "ECG e troponina" },
      { dx: "Obstrução intestinal", pista: "Vômitos, parada de eliminação, distensão" },
      { dx: "Aneurisma de aorta", pista: "Idoso, dor lombar, massa pulsátil, choque" }
    ],
    gravidade: [
      "Atlanta revisada — Leve: sem falência orgânica e sem complicação local ou sistêmica",
      "Moderadamente grave: falência orgânica transitória (< 48 h) e/ou complicação local (coleção, necrose) ou exacerbação de comorbidade",
      "Grave: falência orgânica persistente (> 48 h), de um ou mais órgãos",
      "Falência orgânica = escore de Marshall modificado ≥ 2 em sistema respiratório, cardiovascular ou renal",
      "BISAP (1 ponto cada): BUN > 25 mg/dL (ureia > 53 mg/dL), alteração mental, SIRS, idade > 60, derrame pleural; ≥ 3 = maior mortalidade"
    ]
  },
  exames: [
    {
      nome: "Lipase (ou amilase)",
      pedido: "Lipase sérica (amilase se lipase indisponível).",
      porQue: "Diagnóstico.",
      esperar: "≥ 3× o limite superior.",
      interpretacao: "O valor não mede gravidade; não repetir para guiar dieta.",
      limitacoes: "Amilase normaliza mais cedo e é normal em pancreatite por hipertrigliceridemia; lipase sobe em DRC e CAD."
    },
    {
      nome: "Laboratório de gravidade e causa",
      pedido: "Hemograma, ureia, creatinina, sódio, potássio, glicemia, cálcio, triglicerídeos, TGO, TGP, fosfatase alcalina, GGT, bilirrubinas, PCR, gasometria venosa com lactato.",
      porQue: "Estratificar (BISAP, hemoconcentração) e achar a causa.",
      esperar: "TGP > 3× LSN sugere origem biliar.",
      interpretacao: "Triglicerídeos ≥ 1.000 mg/dL = causa provável. PCR alta em 48 h sugere necrose.",
      limitacoes: "Triglicerídeos caem com jejum; colher na admissão."
    },
    {
      nome: "USG de abdome",
      pedido: "Ultrassonografia de abdome superior — pancreatite aguda, pesquisa de litíase biliar e dilatação de vias.",
      porQue: "Litíase biliar define colecistectomia e CPRE.",
      esperar: "Pâncreas muitas vezes mal visto (gás).",
      interpretacao: "Colédoco dilatado + icterícia/colangite → CPRE.",
      limitacoes: "Microlitíase pode escapar; considerar ecoendoscopia ou CPRM depois."
    },
    {
      nome: "TC de abdome com contraste",
      pedido: "Tomografia de abdome com contraste IV (protocolo pâncreas) — pancreatite aguda sem melhora em 72 h / suspeita de complicação.",
      porQue: "Necrose, coleções, complicações vasculares.",
      esperar: "Após 72–96 h do início.",
      interpretacao: "Necrose ou coleção com gás → suspeita de infecção.",
      limitacoes: "Na admissão, só se dúvida diagnóstica (subestima necrose no início)."
    }
  ],
  tratamento: [
    {
      droga: "Ringer lactato",
      linha: "l1",
      dose: "Bolus de 10 mL/kg se hipovolemia (nenhum se normovolêmico); depois 1,5 mL/kg/h",
      via: "IV",
      intervalo: "Contínuo, reavaliado em 3, 6, 12, 24, 48 e 72 h",
      duracao: "Reduzir quando tolerar dieta (geralmente 24–48 h)",
      monitorizacao: "FC, PA, diurese ≥ 0,5 mL/kg/h, hematócrito, ureia, congestão pulmonar",
      contraindicacoes: "Sobrecarga volêmica",
      ajustes: "Hidratação agressiva (20 mL/kg em bolus + 3 mL/kg/h) aumentou sobrecarga sem benefício (WATERFALL 2022). Cardiopata/DRC: alíquotas menores"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "1 g (até 2 g se dor intensa)",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Enquanto houver dor",
      monitorizacao: "PA (hipotensão na infusão rápida)",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Diluir em 100 mL de SF 0,9% e infundir em 15–30 min"
    },
    {
      droga: "Morfina",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV lenta",
      intervalo: "Até 4/4 h, se dor",
      duracao: "Fase aguda",
      monitorizacao: "FR, sedação, íleo",
      contraindicacoes: "Depressão respiratória",
      ajustes: "Ampola 10 mg/mL: diluir 1 mL em 9 mL de SF (1 mg/mL). Reduzir dose em idoso e DRC. Opioides são seguros na pancreatite"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "4–8 mg",
      via: "IV lenta",
      intervalo: "8/8 h se náusea",
      duracao: "—",
      monitorizacao: "QTc",
      contraindicacoes: "QT longo",
      ajustes: "—"
    },
    {
      droga: "Nutrição enteral",
      linha: "alt",
      dose: "Dieta polimérica por sonda nasogástrica ou nasoenteral",
      via: "Enteral",
      intervalo: "Contínua",
      duracao: "Até tolerar VO",
      monitorizacao: "Tolerância, glicemia",
      contraindicacoes: "Íleo grave, obstrução",
      ajustes: "Se não tolerar VO em 72 h (ou grave). Preferir enteral a parenteral"
    },
    {
      droga: "Antibiótico profilático",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não indicado, mesmo com necrose estéril",
      ajustes: "Tratar só infecção documentada ou suspeita forte (necrose infectada: carbapenêmico, ou quinolona + metronidazol) e colangite"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "adj",
      dose: "40 mg",
      via: "SC",
      intervalo: "1×/dia",
      duracao: "Internação",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo",
      ajustes: "ClCr < 30: 20 mg/dia"
    }
  ],
  destino: {
    agora: ["Hidratação moderada, analgesia, USG", "Colangite → antibiótico e CPRE em até 24 h"],
    reavaliar: [
      "Sinais vitais, diurese e balanço a cada 4–6 h nas primeiras 24 h",
      "Hematócrito, ureia e creatinina em 12–24 h",
      "Sem melhora em 72 h → TC com contraste"
    ],
    alta: [
      "Dor controlada com analgésico oral, dieta tolerada, sem falência orgânica",
      "Biliar: colecistectomia na mesma internação (leve) ou programada",
      "Alcoólica: intervenção para cessar álcool (ver ficha uso-alcool)",
      "Retorno na UBS em 1–2 semanas"
    ],
    observacao: ["—"],
    internacao: ["Todos os casos de pancreatite aguda", "UTI: falência orgânica persistente, SIRS persistente, necessidade de vasopressor ou ventilação"],
    transferencia: ["Grave ou necrose extensa sem UTI, cirurgia, CPRE ou radiologia intervencionista: regulação"]
  },
  prescricao: {
    hospitalar: "PANCREATITE AGUDA — ADULTO (peso: ___ kg)\n1. Dieta oral leve hipogordurosa assim que tolerar (sem náusea/vômito); se não, dieta zero e reavaliar em 24 h. Não aguardar normalização da lipase.\n2. Ringer lactato 10 mL/kg (___ mL) IV em 1–2 h SE hipovolemia; depois Ringer lactato 1,5 mL/kg/h (___ mL/h). Reavaliar volume em 3, 6, 12 e 24 h; reduzir quando tolerar dieta.\n3. Dipirona 1 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n4. Morfina 10 mg/mL: diluir 1 mL em 9 mL de SF 0,9% (1 mg/mL); fazer 2–4 mL (2–4 mg) IV lento até de 4/4 h se dor moderada a intensa.\n5. Ondansetrona 4 mg IV lento de 8/8 h se náusea ou vômito.\n6. Omeprazol 40 mg IV 1×/dia só se risco de úlcera de estresse (ventilação, coagulopatia).\n7. Enoxaparina 40 mg SC 1×/dia.\n8. Glicemia capilar de 6/6 h.\n9. Controles: PA, FC, FR, SpO₂, temperatura de 4/4 h; diurese (meta ≥ 0,5 mL/kg/h); balanço hídrico; comunicar PAS < 90, SpO₂ < 92%, diurese baixa, febre ou icterícia.\n10. Exames: hemograma, ureia, creatinina e eletrólitos em 24 h; PCR em 48 h.",
    ambulatorial: "ALTA APÓS PANCREATITE LEVE\nUSO ORAL\n1. Dipirona 500 mg ---------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor, por até 5 dias.\n\nORIENTAÇÕES\n- Dieta com pouca gordura nas primeiras semanas; evitar frituras.\n- Não beber álcool.\n- Se cálculo na vesícula: cirurgia de vesícula (colecistectomia) agendada — não deixar para depois."
  },
  orientacoesRetorno: [
    "Comer refeições leves e com pouca gordura; aumentar aos poucos",
    "Não beber bebida alcoólica; parar de fumar",
    "Se tem pedra na vesícula, fazer a cirurgia indicada: sem ela a pancreatite pode voltar",
    "Voltar imediatamente se: dor forte que volta, vômitos que não param, febre, pele ou olhos amarelos, falta de ar ou urina muito escura",
    "Consulta na UBS em 1–2 semanas com exames de controle (glicemia, triglicerídeos se alterados)"
  ],
  tabelas: [
    {
      titulo: "Atlanta revisada (2012) — gravidade",
      colunas: ["Classe", "Falência orgânica", "Complicações locais/sistêmicas"],
      linhas: [
        ["Leve", "Ausente", "Ausentes"],
        ["Moderadamente grave", "Transitória (< 48 h)", "Presentes ou ausentes"],
        ["Grave", "Persistente (> 48 h)", "Geralmente presentes"]
      ],
      nota: "Complicações locais: coleção peripancreática aguda, pseudocisto (> 4 semanas), coleção necrótica aguda, necrose encapsulada (> 4 semanas)."
    }
  ],
  fontes: [
    "Banks PA et al. — Classification of acute pancreatitis 2012: revision of the Atlanta classification (Gut, 2013)",
    "ACG — Clinical Guideline: Management of Acute Pancreatitis (Tenner et al., 2024)",
    "AGA — Clinical Practice Update on the Management of Pancreatic Necrosis (2020) e Guideline on Initial Management of Acute Pancreatitis (2018)",
    "de-Madaria E et al. — Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis (WATERFALL, NEJM 2022)",
    "IAP/APA — Evidence-based guidelines for the management of acute pancreatitis (2013; revisão em andamento)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
