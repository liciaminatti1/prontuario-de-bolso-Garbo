/* Medicamentos: outros (anti-histamínicos, corticoides, respiratório, hormônios, vitaminas/eletrólitos,
   reumatologia, urologia, emergência). Formato em js/medicamentos.js e docs/ESQUEMA-MEDICAMENTOS.md.
   CONFERIR SEMPRE com a bula e o protocolo local. */

complementarMedicamentos({
  /* ---------- anti-histamínicos ---------- */
  prometazina: {
    receita: "simples",
    usos: "Reações alérgicas agudas, urticária, prurido, náuseas/vômitos e cinetose; sedação",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Prometazina 25 mg ------------------------ 10 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, se coceira ou alergia, por até 3 dias.\n   Causa sonolência: não dirigir nem ingerir álcool." },
      { contexto: "Adulto — PS (reação alérgica)", texto: "Prometazina 25 mg/mL — 1 ampola (25 mg) IM profunda, dose única.\nNão fazer IV (risco de lesão tecidual grave)." },
      { contexto: "Criança ≥ 2 anos — PS (0,25–0,5 mg/kg)", texto: "Prometazina 25 mg/mL — ___ mL IM profunda, dose única.\n(0,25–0,5 mg/kg/dose; máximo 25 mg. Contraindicada < 2 anos.)" }
    ]
  },
  dexclorfeniramina: {
    receita: "simples",
    usos: "Urticária, rinite e prurido alérgico; reações alérgicas leves",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Dexclorfeniramina 2 mg -------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, se coceira, por até 7 dias.\n   Causa sonolência." },
      { contexto: "Criança 2–6 anos", texto: "USO ORAL\n1. Dexclorfeniramina solução oral 2 mg/5 mL -------- 1 frasco\n   Dar 1,25 mL de 8 em 8 horas, se coceira, por até 5 dias.\n   (0,5 mg por dose; máximo 3 mg/dia. Contraindicada < 2 anos.)" },
      { contexto: "Criança 6–12 anos", texto: "USO ORAL\n1. Dexclorfeniramina solução oral 2 mg/5 mL -------- 1 frasco\n   Dar 2,5 mL de 8 em 8 horas, se coceira, por até 5 dias.\n   (1 mg por dose; máximo 6 mg/dia.)" }
    ]
  },
  loratadina: {
    receita: "simples",
    usos: "Rinite alérgica, urticária, prurido alérgico (não sedativo)",
    prescrever: [
      { contexto: "Adulto e criança > 30 kg", texto: "USO ORAL\n1. Loratadina 10 mg --------------------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 10 dias." },
      { contexto: "Criança 2–12 anos ≤ 30 kg", texto: "USO ORAL\n1. Loratadina xarope 1 mg/mL ------------------- 1 frasco\n   Dar 5 mL 1 vez ao dia por 10 dias.\n   (5 mg/dia; > 30 kg: 10 mL = 10 mg/dia.)" }
    ]
  },

  /* ---------- corticoides ---------- */
  prednisolona: {
    receita: "simples",
    usos: "Crise de asma e sibilância na criança, crupe, urticária/alergia, doenças inflamatórias",
    prescrever: [
      { contexto: "Criança — crise de asma (1–2 mg/kg/dia)", texto: "USO ORAL\n1. Prednisolona solução oral 3 mg/mL ----------- 1 frasco\n   Dar ___ mL 1 vez ao dia, pela manhã, por 3 a 5 dias.\n   (1–2 mg/kg/dia em dose única; máximo 40 mg/dia.)" },
      { contexto: "Adulto — crise de asma / DPOC", texto: "USO ORAL\n1. Prednisolona 20 mg -------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) 1 vez ao dia, pela manhã, por 5 dias." }
    ]
  },
  prednisona: {
    receita: "simples",
    usos: "Exacerbação de asma e DPOC, urticária/alergia extensa, crise de gota, doenças inflamatórias e autoimunes",
    prescrever: [
      { contexto: "Adulto — asma / DPOC (5 dias)", texto: "USO ORAL\n1. Prednisona 20 mg ---------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) 1 vez ao dia, pela manhã, após o café, por 5 dias." },
      { contexto: "Adulto — crise de gota (alternativa a AINE/colchicina)", texto: "USO ORAL\n1. Prednisona 20 mg ---------------------------- 10 comprimidos\n   Tomar 1 comprimido e meio (30 mg) 1 vez ao dia, pela manhã, por 5 dias." },
      { contexto: "Adulto — curso curto (urticária / alergia extensa)", texto: "USO ORAL\n1. Prednisona 20 mg ---------------------------- 5 comprimidos\n   Tomar 2 comprimidos (40 mg) 1 vez ao dia, pela manhã, por 3 a 5 dias.\n   (Cursos ≤ 7–10 dias não precisam de desmame.)" }
    ]
  },
  dexametasona: {
    receita: "simples",
    usos: "Crupe (laringotraqueíte), meningite bacteriana, edema cerebral, enxaqueca refratária, maturação pulmonar fetal, náusea",
    prescrever: [
      { contexto: "Criança — crupe (dose única)", texto: "Dexametasona 4 mg/mL — ___ mL VO ou IM, dose única.\n(0,15–0,6 mg/kg; máximo 10 mg. Crupe leve: 0,15 mg/kg; moderado/grave: 0,6 mg/kg.)" },
      { contexto: "Adulto — PS (dose única IV)", texto: "Dexametasona 4 mg/mL — 2,5 mL (10 mg) IV lento, dose única." },
      { contexto: "Meningite bacteriana (antes ou junto da 1ª dose do antibiótico)", texto: "Dexametasona 4 mg/mL — 2,5 mL (10 mg) IV de 6/6h por 4 dias.\n(Criança: 0,15 mg/kg/dose de 6/6h por 4 dias.)" },
      { contexto: "Maturação pulmonar fetal (24–34 semanas)", texto: "Dexametasona 4 mg/mL — 1,5 mL (6 mg) IM de 12/12h, total de 4 doses." }
    ]
  },

  /* ---------- respiratório ---------- */
  salbutamol: {
    receita: "simples",
    usos: "Broncoespasmo: crise de asma, exacerbação de DPOC, sibilância; alívio sintomático",
    prescrever: [
      { contexto: "Adulto — alívio (ambulatorial)", texto: "USO INALATÓRIO\n1. Salbutamol aerossol 100 mcg/dose --------------- 1 frasco\n2. Espaçador --------------------------------------- 1 unidade\n   Inalar 2 a 4 jatos com espaçador até de 4 em 4 horas, se falta de ar ou chiado.\n   Se precisar mais que isso ou não melhorar, procurar a unidade." },
      { contexto: "Criança — alívio (ambulatorial)", texto: "USO INALATÓRIO\n1. Salbutamol aerossol 100 mcg/dose --------------- 1 frasco\n2. Espaçador com máscara -------------------------- 1 unidade\n   Fazer 2 a 4 jatos com espaçador até de 4 em 4 horas, se chiado ou cansaço.\n   (1 jato por vez, 5 a 10 respirações após cada jato.)" },
      { contexto: "PS — crise de asma (spray)", texto: "Salbutamol aerossol 100 mcg/dose — 4 a 10 jatos com espaçador a cada 20 min na 1ª hora (3 ciclos); depois conforme resposta.\n(Criança: 2 a 10 jatos conforme peso e gravidade.)" },
      { contexto: "PS — nebulização", texto: "Salbutamol solução 5 mg/mL — ___ gotas + SF 0,9% 3 a 5 mL, nebulizar com O2 6–8 L/min a cada 20 min na 1ª hora.\n(0,15 mg/kg = 0,6 gota/kg; mínimo 10 gotas = 2,5 mg; máximo 20 gotas = 5 mg. Adulto: 10–20 gotas.)" }
    ]
  },

  /* ---------- hormônios ---------- */
  anticoncepcional: {
    receita: "simples",
    usos: "Contracepção hormonal combinada oral; regularização do ciclo, dismenorreia",
    prescrever: [
      { contexto: "Combinado oral (RENAME)", texto: "USO ORAL\n1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, iniciando no 1º dia da menstruação.\n   Ao terminar a cartela, fazer pausa de 7 dias e iniciar a próxima." },
      { contexto: "Orientação de esquecimento", texto: "Esqueceu 1 comprimido (< 24 h de atraso): tomar assim que lembrar, mesmo que tome 2 no mesmo dia, e seguir a cartela.\nEsqueceu 2 ou mais: tomar o último esquecido, seguir a cartela e usar preservativo por 7 dias; se relação desprotegida na 1ª semana, considerar contracepção de emergência." }
    ]
  },

  /* ---------- vitaminas / minerais ---------- */
  "sulfato-ferroso": {
    receita: "simples",
    usos: "Anemia ferropriva; profilaxia na gestação e na infância",
    prescrever: [
      { contexto: "Adulto — anemia ferropriva", texto: "USO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ------- 60 comprimidos\n   Tomar 1 comprimido 1 a 2 vezes ao dia, 30 minutos antes das refeições, com suco de fruta cítrica.\n   Não tomar com leite, café ou chá. Pode escurecer as fezes." },
      { contexto: "Gestante — profilaxia (MS)", texto: "USO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ------- 30 comprimidos\n   Tomar 1 comprimido ao dia, 30 minutos antes do almoço, durante a gestação e até 3 meses após o parto." },
      { contexto: "Criança — profilaxia (1 mg/kg/dia)", texto: "USO ORAL\n1. Sulfato ferroso gotas 25 mg/mL de ferro elementar ---- 1 frasco\n   Dar ___ gotas 1 vez ao dia, 30 minutos antes de uma refeição.\n   (1 mg/kg/dia de ferro elementar; 1 gota = 1,25 mg.)" },
      { contexto: "Criança — tratamento (3–5 mg/kg/dia)", texto: "USO ORAL\n1. Sulfato ferroso gotas 25 mg/mL de ferro elementar ---- 1 frasco\n   Dar ___ gotas 1 vez ao dia (ou divididas em 2 tomadas), 30 minutos antes das refeições.\n   (3–5 mg/kg/dia de ferro elementar; manter 2–3 meses após normalizar a hemoglobina.)" }
    ]
  },
  calcio: {
    receita: "simples",
    usos: "Suplementação de cálcio (osteoporose com ingestão baixa, gestação), hiperfosfatemia",
    prescrever: [
      { contexto: "Adulto — suplementação", texto: "USO ORAL\n1. Carbonato de cálcio 1.250 mg (500 mg de cálcio elementar) ---- 60 comprimidos\n   Tomar 1 comprimido 2 vezes ao dia, junto com as refeições.\n   Separar 4 horas de levotiroxina, ferro e quinolonas." }
    ]
  },

  /* ---------- reumatologia ---------- */
  colchicina: {
    receita: "simples",
    usos: "Crise de gota, profilaxia de crise ao iniciar hipouricemiante, pericardite",
    prescrever: [
      { contexto: "Crise de gota (iniciar nas primeiras 12–36 h)", texto: "USO ORAL\n1. Colchicina 0,5 mg ---------------------------- 20 comprimidos\n   Tomar 2 comprimidos (1 mg) agora e 1 comprimido (0,5 mg) após 1 hora.\n   A partir do dia seguinte, 1 comprimido de 12 em 12 horas até a crise passar.\n   Suspender se diarreia." },
      { contexto: "Profilaxia ao iniciar alopurinol", texto: "USO ORAL\n1. Colchicina 0,5 mg ---------------------------- 60 comprimidos\n   Tomar 1 comprimido 1 a 2 vezes ao dia por 3 a 6 meses." },
      { contexto: "Pericardite aguda (com AINE/AAS)", texto: "USO ORAL\n1. Colchicina 0,5 mg ---------------------------- 180 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 meses (< 70 kg: 1 comprimido 1 vez ao dia)." }
    ]
  },
  alopurinol: {
    receita: "simples",
    usos: "Hiperuricemia com gota recorrente, tofos ou litíase úrica; profilaxia de síndrome de lise tumoral",
    prescrever: [
      { contexto: "Adulto — início (titular até ácido úrico < 6 mg/dL)", texto: "USO ORAL\n1. Alopurinol 100 mg ---------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, após uma refeição, com bastante água.\n   Aumentar 100 mg a cada 2–4 semanas conforme ácido úrico (máximo 800 mg/dia).\n   Associar colchicina 0,5 mg 1–2×/dia nos primeiros 3–6 meses." }
    ]
  },

  /* ---------- urologia ---------- */
  sildenafil: {
    receita: "simples",
    usos: "Disfunção erétil; hipertensão arterial pulmonar (sildenafil 20 mg); tadalafila 5 mg diária também na HPB",
    prescrever: [
      { contexto: "Disfunção erétil — sildenafil", texto: "USO ORAL\n1. Sildenafila 50 mg ---------------------------- 4 comprimidos\n   Tomar 1 comprimido cerca de 1 hora antes da relação sexual. No máximo 1 vez ao dia.\n   Não usar com nitratos (isossorbida, nitroglicerina)." },
      { contexto: "Disfunção erétil — tadalafila sob demanda", texto: "USO ORAL\n1. Tadalafila 20 mg ----------------------------- 4 comprimidos\n   Tomar 1 comprimido pelo menos 30 minutos antes da relação sexual. No máximo 1 vez ao dia.\n   Não usar com nitratos." },
      { contexto: "HPB / DE — tadalafila diária", texto: "USO ORAL\n1. Tadalafila 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sempre no mesmo horário." }
    ]
  },

  /* ---------- emergência ---------- */
  adrenalina: {
    receita: "hospitalar",
    usos: "Anafilaxia, parada cardiorrespiratória, bradicardia instável, crupe moderado/grave (nebulização), choque",
    prescrever: [
      { contexto: "Anafilaxia — adulto", texto: "Adrenalina 1 mg/mL — 0,5 mL (0,5 mg) IM na face anterolateral da coxa.\nRepetir a cada 5–15 min se necessário." },
      { contexto: "Anafilaxia — criança (0,01 mg/kg)", texto: "Adrenalina 1 mg/mL — ___ mL IM na face anterolateral da coxa.\n(0,01 mg/kg = 0,01 mL/kg; máximo 0,5 mg = 0,5 mL. Repetir a cada 5–15 min se necessário.)" },
      { contexto: "PCR (FV/TV sem pulso após 2º choque; AESP/assistolia de imediato)", texto: "Adrenalina 1 mg/mL — 1 mL (1 mg) IV/IO em bolus, seguida de 20 mL de SF 0,9% e elevação do membro.\nRepetir a cada 3–5 min. Criança: 0,01 mg/kg (0,1 mL/kg da solução diluída 0,1 mg/mL); máximo 1 mg." },
      { contexto: "Crupe moderado/grave — nebulização", texto: "Adrenalina 1 mg/mL — ___ mL pura (0,5 mL/kg; máximo 5 mL), nebulizar com O2.\nObservar por 2–4 h após (efeito rebote)." }
    ]
  }
});

adicionarMedicamentos([
  /* ========== ANTI-HISTAMÍNICOS ========== */
  { id: "cetirizina", nomes: ["Cetirizina"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica, urticária, prurido alérgico (pouco sedativo)",
    porIdade: [{ maxAnos: 2, texto: "< 2 anos: uso não previsto na bula brasileira" }, { maxAnos: 6, texto: "2,5 mg (2,5 mL da solução 1 mg/mL) 12/12h" }, { maxAnos: 12, texto: "5 mg (5 mL) 12/12h ou 10 mg 1×/dia" }, { maxAnos: 200, texto: "10 mg 1×/dia" }],
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "solução oral 1 mg/mL", mgPorMl: 1 }],
    adulto: "10 mg VO 1×/dia",
    renal: [{ abaixo: 10, texto: "Contraindicada." }, { abaixo: 30, texto: "5 mg em dias alternados." }, { abaixo: 50, texto: "5 mg 1×/dia." }],
    gestacao: { nivel: "compativel", texto: "Compatível (com loratadina, anti-histamínico preferido)." },
    alergia: [], contra: ["Pode causar sonolência leve"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Cetirizina 10 mg ---------------------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, à noite, por 10 dias." },
      { contexto: "Criança 2–6 anos", texto: "USO ORAL\n1. Cetirizina solução oral 1 mg/mL --------------- 1 frasco\n   Dar 2,5 mL de 12 em 12 horas por 10 dias." },
      { contexto: "Criança 6–12 anos", texto: "USO ORAL\n1. Cetirizina solução oral 1 mg/mL --------------- 1 frasco\n   Dar 5 mL de 12 em 12 horas por 10 dias." }
    ] },
  { id: "desloratadina", nomes: ["Desloratadina"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica, urticária crônica (não sedativo)",
    porIdade: [{ maxAnos: 0.5, texto: "< 6 meses: não indicada" }, { maxAnos: 1, texto: "1 mg (2 mL do xarope 0,5 mg/mL) 1×/dia" }, { maxAnos: 6, texto: "1,25 mg (2,5 mL) 1×/dia" }, { maxAnos: 12, texto: "2,5 mg (5 mL) 1×/dia" }, { maxAnos: 200, texto: "5 mg 1×/dia" }],
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "xarope 0,5 mg/mL", mgPorMl: 0.5 }],
    adulto: "5 mg VO 1×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir loratadina ou cetirizina." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Adulto e ≥ 12 anos", texto: "USO ORAL\n1. Desloratadina 5 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 30 dias." },
      { contexto: "Criança 1–5 anos", texto: "USO ORAL\n1. Desloratadina xarope 0,5 mg/mL --------------- 1 frasco\n   Dar 2,5 mL 1 vez ao dia por 30 dias.\n   (6–11 meses: 2 mL; 6–11 anos: 5 mL.)" }
    ] },
  { id: "fexofenadina", nomes: ["Fexofenadina"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica, urticária crônica (não sedativo)",
    porIdade: [{ maxAnos: 0.5, texto: "< 6 meses: não estabelecida" }, { maxAnos: 2, texto: "15 mg (2,5 mL da suspensão 6 mg/mL) 12/12h" }, { maxAnos: 12, texto: "30 mg (5 mL da suspensão 6 mg/mL) 12/12h" }, { maxAnos: 200, texto: "120 mg 1×/dia (rinite) ou 180 mg 1×/dia (urticária)" }],
    apres: [{ rotulo: "comprimido 120 mg", mgPorComp: 120 }, { rotulo: "comprimido 180 mg", mgPorComp: 180 }, { rotulo: "suspensão oral 6 mg/mL", mgPorMl: 6 }],
    adulto: "120 mg (rinite) ou 180 mg (urticária) VO 1×/dia",
    renal: [{ abaixo: 80, texto: "Insuficiência renal: iniciar com 60 mg 1×/dia." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir loratadina ou cetirizina." },
    alergia: [], contra: ["Não tomar com sucos de fruta (laranja, uva, maçã) nem antiácidos de alumínio/magnésio: reduzem a absorção"],
    prescrever: [
      { contexto: "Adulto — rinite", texto: "USO ORAL\n1. Fexofenadina 120 mg -------------------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, com água, por 10 dias." },
      { contexto: "Adulto — urticária", texto: "USO ORAL\n1. Fexofenadina 180 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, com água, por 30 dias." },
      { contexto: "Criança 2–11 anos", texto: "USO ORAL\n1. Fexofenadina suspensão oral 6 mg/mL ------------ 1 frasco\n   Dar 5 mL (30 mg) de 12 em 12 horas por 10 dias.\n   (6 meses a 2 anos: 2,5 mL = 15 mg de 12/12h.)" }
    ] },
  { id: "hidroxizina", nomes: ["Hidroxizina"], classe: "anti-histaminicos", receita: "simples", tags: ["sedativo", "anticolinergico", "qt"],
    usos: "Prurido (urticária, dermatite atópica, escabiose), ansiedade leve",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "solução oral 2 mg/mL", mgPorMl: 2 }],
    adulto: "25 mg VO 6–8h (máx 100 mg/dia; idosos: máx 50 mg/dia)",
    renal: [{ abaixo: 50, texto: "Reduzir a dose (cerca de 50%)." }],
    gestacao: { nivel: "evitar", texto: "Evitar, sobretudo no 1º trimestre e perto do parto; preferir loratadina ou cetirizina." },
    alergia: [], contra: ["QT longo, hipocalemia, uso de outros fármacos que prolongam o QT", "Idosos (sedação, quedas, efeito anticolinérgico)", "Glaucoma de ângulo fechado, retenção urinária"],
    prescrever: [
      { contexto: "Adulto — prurido", texto: "USO ORAL\n1. Hidroxizina 25 mg --------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, se coceira, por até 7 dias.\n   Causa sonolência: não dirigir nem ingerir álcool." },
      { contexto: "Criança — prurido (até 2 mg/kg/dia)", texto: "USO ORAL\n1. Hidroxizina solução oral 2 mg/mL -------------- 1 frasco\n   Dar ___ mL de 8 em 8 horas, se coceira, por até 5 dias.\n   (Dose diária máxima 2 mg/kg/dia até 40 kg, dividida em 3 tomadas. Conferir a bula.)" }
    ] },

  /* ========== CORTICOIDES ========== */
  { id: "hidrocortisona", nomes: ["Hidrocortisona", "succinato de hidrocortisona"], classe: "corticoides", receita: "hospitalar", tags: ["corticoide"],
    usos: "Insuficiência adrenal aguda, choque séptico refratário a vasopressor, anafilaxia/asma grave sem via oral",
    apres: [{ rotulo: "frasco-ampola 100 mg", mgPorComp: 100 }, { rotulo: "frasco-ampola 500 mg", mgPorComp: 500 }],
    adulto: "Crise adrenal: 100 mg IV em bolus, depois 50 mg IV 6/6h · choque séptico: 50 mg IV 6/6h (200 mg/dia)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (pouca passagem placentária); é o corticoide da insuficiência adrenal na gestação." },
    alergia: [], contra: ["Hiperglicemia, infecção não tratada (em situação de urgência não atrasar)"],
    prescrever: [
      { contexto: "Crise adrenal — adulto", texto: "Hidrocortisona 100 mg — reconstituir e fazer IV em bolus (dose de ataque).\nDepois: Hidrocortisona 50 mg IV de 6/6h (ou 200 mg/24h em infusão contínua).\nAssociar SF 0,9% 1.000 mL IV na 1ª hora e corrigir hipoglicemia." },
      { contexto: "Choque séptico refratário a vasopressor", texto: "Hidrocortisona 50 mg IV de 6/6h (200 mg/dia).\nReduzir gradualmente após suspensão do vasopressor." }
    ] },
  { id: "metilprednisolona", nomes: ["Metilprednisolona", "succinato de metilprednisolona"], classe: "corticoides", receita: "hospitalar", tags: ["corticoide"],
    usos: "Asma/DPOC grave sem via oral, pulsoterapia (lúpus, vasculites, esclerose múltipla), reações alérgicas graves",
    apres: [{ rotulo: "frasco-ampola 125 mg", mgPorComp: 125 }, { rotulo: "frasco-ampola 500 mg", mgPorComp: 500 }],
    adulto: "Asma/DPOC grave: 40–60 mg IV 1–2×/dia até tolerar VO · pulsoterapia: 500–1.000 mg IV/dia por 3 dias",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível quando indicada (pouca passagem placentária)." },
    alergia: [], contra: ["Hiperglicemia, infecção não tratada", "Pulsoterapia: monitorar PA, glicemia e ritmo"],
    prescrever: [
      { contexto: "Adulto — asma/DPOC grave sem VO", texto: "Metilprednisolona 125 mg — reconstituir; fazer 40 mg (ou 60 mg) IV lento 1 vez ao dia.\nPassar para prednisona 40 mg VO assim que tolerar via oral (total 5–7 dias)." },
      { contexto: "Criança — asma grave sem VO", texto: "Metilprednisolona ___ mg IV de 6/6h no 1º dia.\n(1 mg/kg/dose; máximo 60 mg/dia. Passar para prednisolona VO assim que possível.)" },
      { contexto: "Pulsoterapia (decisão especializada)", texto: "Metilprednisolona 1.000 mg + SF 0,9% 250 mL IV em 1 a 2 horas, 1 vez ao dia por 3 dias.\nMonitorar PA, glicemia capilar e sinais vitais durante a infusão." }
    ] },
  { id: "betametasona", nomes: ["Betametasona", "fosfato dissódico de betametasona", "acetato de betametasona"], classe: "corticoides", receita: "simples", tags: ["corticoide"],
    usos: "Maturação pulmonar fetal; corticoide IM de depósito (dermatoses e alergias extensas, bursites)",
    apres: [{ rotulo: "suspensão injetável fosfato 3 mg + acetato 3 mg por mL (6 mg/mL)", mgPorMl: 6 }],
    adulto: "Maturação pulmonar fetal: 12 mg IM 24/24h, 2 doses",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Indicada para maturação pulmonar fetal entre 24 e 34 semanas com risco de parto prematuro." },
    alergia: [], contra: ["Não fazer IV (suspensão)", "Hiperglicemia (diabetes: controlar glicemia nas 72 h seguintes)", "Infecção não tratada"],
    prescrever: [
      { contexto: "Maturação pulmonar fetal (24–34 semanas)", texto: "Betametasona (fosfato + acetato) 6 mg/mL — 2 mL (12 mg) IM profunda, de 24 em 24 horas, total de 2 doses." },
      { contexto: "Adulto — dose IM de depósito", texto: "USO INTRAMUSCULAR\n1. Betametasona (fosfato + acetato) 6 mg/mL, ampola 1 mL ---- 1 ampola\n   Aplicar 1 mL IM profunda no glúteo, dose única." }
    ] },
  { id: "betametasona-topica", nomes: ["Valerato de betametasona", "betametasona creme", "betametasona pomada"], classe: "corticoides", receita: "simples", tags: [],
    usos: "Dermatites (atópica, de contato, seborreica extensa), psoríase em placas, líquen — corticoide tópico de média/alta potência",
    adulto: "Creme ou pomada 0,1%: camada fina 1–2×/dia por até 2 semanas",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Uso em áreas pequenas e por pouco tempo é aceitável; evitar grandes áreas e uso prolongado." },
    alergia: [], contra: ["Não usar em face, dobras, genitais e fraldas (atrofia; preferir corticoide de baixa potência)", "Infecções cutâneas (fúngica, bacteriana, viral, escabiose) sem tratamento", "Uso prolongado: atrofia, estrias, absorção sistêmica"],
    prescrever: [
      { contexto: "Adulto — dermatite", texto: "USO TÓPICO\n1. Valerato de betametasona 0,1% creme ------------- 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia por 7 a 14 dias.\n   Não aplicar no rosto, nas dobras nem nos genitais." },
      { contexto: "Pele espessa / liquenificada", texto: "USO TÓPICO\n1. Valerato de betametasona 0,1% pomada ------------ 1 bisnaga\n   Aplicar uma camada fina nas lesões 1 a 2 vezes ao dia por até 14 dias." }
    ] },

  /* ========== RESPIRATÓRIO ========== */
  { id: "budesonida", nomes: ["Budesonida", "budesonida inalatória"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Asma persistente (corticoide inalatório de manutenção); nebulização em crupe/sibilância (suspensão)",
    apres: [{ rotulo: "aerossol 200 mcg/dose" }, { rotulo: "suspensão para nebulização 0,25 mg/mL e 0,5 mg/mL" }],
    adulto: "Asma: dose baixa 200–400 mcg/dia · média > 400–800 mcg/dia · alta > 800 mcg/dia (divididos 12/12h)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Corticoide inalatório preferido na gestação; não suspender o controle da asma." },
    alergia: [], contra: ["Lavar a boca após o uso (candidíase oral, disfonia)", "Não é medicação de resgate"],
    prescrever: [
      { contexto: "Adulto — asma (dose baixa/média)", texto: "USO INALATÓRIO\n1. Budesonida aerossol 200 mcg/dose ---------------- 1 frasco\n2. Espaçador --------------------------------------- 1 unidade\n   Inalar 1 a 2 jatos com espaçador de 12 em 12 horas, todos os dias, mesmo sem sintomas.\n   Enxaguar a boca após o uso. Uso contínuo." },
      { contexto: "Criança — asma (dose baixa)", texto: "USO INALATÓRIO\n1. Budesonida aerossol 200 mcg/dose ---------------- 1 frasco\n2. Espaçador com máscara -------------------------- 1 unidade\n   Fazer 1 jato com espaçador 1 vez ao dia (ou de 12/12h, conforme gravidade), todos os dias.\n   Lavar a boca/rosto após o uso. Uso contínuo." }
    ] },
  { id: "budesonida-nasal", nomes: ["Budesonida nasal", "budesonida spray nasal"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Rinite alérgica persistente, rinossinusite crônica",
    adulto: "Spray 32 ou 64 mcg/jato: até 256 mcg/dia (ex.: 64 mcg, 2 jatos em cada narina 1×/dia); reduzir após controle",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Corticoide nasal preferido na gestação." },
    alergia: [], contra: ["Epistaxe, perfuração septal (direcionar o jato para fora do septo)"],
    prescrever: [
      { contexto: "Adulto — rinite alérgica", texto: "USO NASAL\n1. Budesonida 64 mcg/dose spray nasal ------------- 1 frasco\n   Aplicar 1 jato em cada narina de 12 em 12 horas (ou 2 jatos em cada narina 1 vez ao dia).\n   Uso contínuo; o efeito pleno aparece em 1–2 semanas. Após controle, reduzir para a menor dose eficaz." }
    ] },
  { id: "mometasona-nasal", nomes: ["Mometasona", "mometasona nasal", "furoato de mometasona"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Rinite alérgica, rinossinusite, pólipos nasais",
    porIdade: [{ maxAnos: 3, texto: "< 3 anos: conferir a bula (uso não previsto)" }, { maxAnos: 12, texto: "1 jato (50 mcg) em cada narina 1×/dia (100 mcg/dia)" }, { maxAnos: 200, texto: "2 jatos (50 mcg cada) em cada narina 1×/dia (200 mcg/dia)" }],
    adulto: "Spray 50 mcg/jato: 2 jatos em cada narina 1×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica mínima; na gestação preferir budesonida nasal." },
    alergia: [], contra: ["Epistaxe, perfuração septal"],
    prescrever: [
      { contexto: "Adulto e ≥ 12 anos", texto: "USO NASAL\n1. Furoato de mometasona 50 mcg/dose spray nasal ---- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia. Uso contínuo." },
      { contexto: "Criança 3–11 anos", texto: "USO NASAL\n1. Furoato de mometasona 50 mcg/dose spray nasal ---- 1 frasco\n   Aplicar 1 jato em cada narina 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "beclometasona", nomes: ["Beclometasona", "dipropionato de beclometasona"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Asma persistente (corticoide inalatório de manutenção, RENAME)",
    apres: [{ rotulo: "aerossol 50 mcg/dose" }, { rotulo: "aerossol 200 mcg/dose" }, { rotulo: "aerossol 250 mcg/dose" }],
    adulto: "Asma (partícula padrão): dose baixa 200–500 mcg/dia · média > 500–1.000 · alta > 1.000 mcg/dia, divididos 12/12h",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; manter o controle da asma." },
    alergia: [], contra: ["Lavar a boca após o uso (candidíase oral, disfonia)", "Não é medicação de resgate"],
    prescrever: [
      { contexto: "Adulto — asma (dose baixa)", texto: "USO INALATÓRIO\n1. Beclometasona aerossol 200 mcg/dose ------------- 1 frasco\n2. Espaçador --------------------------------------- 1 unidade\n   Inalar 1 jato com espaçador de 12 em 12 horas, todos os dias, mesmo sem sintomas.\n   Enxaguar a boca após o uso. Uso contínuo." },
      { contexto: "Criança — asma (dose baixa)", texto: "USO INALATÓRIO\n1. Beclometasona aerossol 50 mcg/dose -------------- 1 frasco\n2. Espaçador com máscara -------------------------- 1 unidade\n   Fazer 1 a 2 jatos com espaçador de 12 em 12 horas, todos os dias (100–200 mcg/dia).\n   Lavar a boca/rosto após o uso. Uso contínuo." }
    ] },
  { id: "budesonida-formoterol", nomes: ["Budesonida + formoterol", "budesonida/formoterol", "formoterol + budesonida", "formoterol"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "Asma: manutenção e resgate (MART) ou alívio sob demanda na asma leve; DPOC",
    apres: [{ rotulo: "pó inalatório 6/100, 6/200 e 12/400 mcg (formoterol/budesonida)" }],
    adulto: "6/200 mcg: 1–2 inalações 12/12h + 1 inalação de resgate se sintomas (máx 12 inalações/dia)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; manter o controle da asma." },
    alergia: [], contra: ["Taquiarritmia", "Lavar a boca após o uso"],
    prescrever: [
      { contexto: "Asma — manutenção e resgate (MART, ≥ 12 anos)", texto: "USO INALATÓRIO\n1. Budesonida 200 mcg + formoterol 6 mcg pó inalatório ---- 1 frasco/caixa\n   Inalar 1 dose de 12 em 12 horas, todos os dias.\n   Se falta de ar ou chiado, inalar 1 dose extra (pode repetir), no máximo 12 inalações por dia.\n   Enxaguar a boca após o uso." },
      { contexto: "Asma leve — alívio sob demanda (≥ 12 anos)", texto: "USO INALATÓRIO\n1. Budesonida 200 mcg + formoterol 6 mcg pó inalatório ---- 1 frasco/caixa\n   Inalar 1 dose sempre que tiver sintomas (falta de ar, chiado); repetir se necessário.\n   No máximo 12 inalações por dia. Se precisar com frequência, retornar." }
    ] },
  { id: "ipratropio", nomes: ["Ipratrópio", "brometo de ipratrópio", "ipratropio"], classe: "respiratorio", receita: "simples", tags: ["anticolinergico"],
    usos: "Crise de asma moderada/grave (associado ao salbutamol na 1ª hora), exacerbação e manutenção de DPOC",
    porIdade: [{ maxAnos: 12, texto: "Nebulização 0,25 mg (20 gotas da solução 0,25 mg/mL) 20/20 min na 1ª hora (3 doses)" }, { maxAnos: 200, texto: "Nebulização 0,5 mg (40 gotas) 20/20 min na 1ª hora (3 doses)" }],
    apres: [{ rotulo: "solução para nebulização 0,25 mg/mL (20 gotas/mL)", mgPorMl: 0.25, mgPorGota: 0.0125 }, { rotulo: "aerossol 20 mcg/dose" }],
    adulto: "Nebulização 0,5 mg (40 gotas) com salbutamol 20/20 min na 1ª hora · DPOC: spray 20 mcg 2 jatos 6/6h",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Glaucoma de ângulo fechado (evitar contato com os olhos)", "Retenção urinária / HPB importante"],
    prescrever: [
      { contexto: "PS — crise de asma, adulto", texto: "Brometo de ipratrópio 0,25 mg/mL — 40 gotas (0,5 mg) + salbutamol 5 mg/mL 10–20 gotas + SF 0,9% 3 a 5 mL, nebulizar com O2 6–8 L/min a cada 20 min na 1ª hora (3 doses)." },
      { contexto: "PS — crise de asma, criança", texto: "Brometo de ipratrópio 0,25 mg/mL — 20 gotas (0,25 mg) + salbutamol (0,15 mg/kg) + SF 0,9% 3 mL, nebulizar com O2 a cada 20 min na 1ª hora (3 doses).\n(≥ 12 anos: 40 gotas.)" },
      { contexto: "DPOC — ambulatorial", texto: "USO INALATÓRIO\n1. Brometo de ipratrópio aerossol 20 mcg/dose ------- 1 frasco\n   Inalar 2 jatos de 6 em 6 horas." }
    ] },
  { id: "montelucaste", nomes: ["Montelucaste", "montelucasto", "montelukast"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Asma leve (alternativa ao corticoide inalatório), broncoespasmo induzido por exercício, rinite alérgica associada à asma",
    porIdade: [{ maxAnos: 0.5, texto: "< 6 meses: não indicado" }, { maxAnos: 6, texto: "4 mg (sachê ou comprimido mastigável) 1×/dia à noite" }, { maxAnos: 15, texto: "5 mg (comprimido mastigável) 1×/dia à noite" }, { maxAnos: 200, texto: "10 mg 1×/dia à noite" }],
    adulto: "10 mg VO 1×/dia à noite",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados tranquilizadores; usar se a asma já estava controlada com ele antes da gestação." },
    alergia: [], contra: ["Alterações neuropsiquiátricas (pesadelos, agitação, depressão, ideação suicida): orientar e suspender se ocorrerem"],
    prescrever: [
      { contexto: "Adulto e ≥ 15 anos", texto: "USO ORAL\n1. Montelucaste 10 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, à noite. Uso contínuo." },
      { contexto: "Criança 6–14 anos", texto: "USO ORAL\n1. Montelucaste 5 mg comprimido mastigável --------- 30 comprimidos\n   Mastigar 1 comprimido 1 vez ao dia, à noite. Uso contínuo." },
      { contexto: "Criança 2–5 anos", texto: "USO ORAL\n1. Montelucaste 4 mg (sachê ou comprimido mastigável) ---- 30 unidades\n   Dar 1 unidade 1 vez ao dia, à noite. Uso contínuo.\n   (Sachê: misturar em 1 colher de alimento pastoso frio e dar em até 15 minutos.)" }
    ] },

  /* ========== HORMÔNIOS ========== */
  { id: "medroxiprogesterona", nomes: ["Medroxiprogesterona", "acetato de medroxiprogesterona", "DMPA", "depo-provera"], classe: "hormonios", receita: "simples", tags: [],
    usos: "Contracepção injetável trimestral (150 mg IM); sangramento uterino anormal e amenorreia secundária (oral)",
    adulto: "Contracepção: 150 mg IM a cada 3 meses (12 semanas) · oral: 10 mg/dia por 10–14 dias",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação; descartar gravidez antes de iniciar." },
    alergia: [], contra: ["Sangramento vaginal não esclarecido", "Câncer de mama atual", "Doença hepática grave", "Perda de massa óssea com uso prolongado; retorno da fertilidade pode demorar meses", "Seguro na amamentação (iniciar após 6 semanas do parto)"],
    prescrever: [
      { contexto: "Contracepção trimestral", texto: "USO INTRAMUSCULAR\n1. Acetato de medroxiprogesterona 150 mg/mL --------- 1 ampola\n   Aplicar 1 mL IM profunda (glúteo ou deltoide), sem massagear o local.\n   1ª dose até o 7º dia da menstruação. Repetir a cada 3 meses (12 semanas)." },
      { contexto: "Sangramento uterino anormal / amenorreia secundária", texto: "USO ORAL\n1. Acetato de medroxiprogesterona 10 mg ------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 10 dias." }
    ] },
  { id: "levonorgestrel-emergencia", nomes: ["Levonorgestrel 1,5 mg", "levonorgestrel 0,75 mg", "contracepção de emergência", "contracepcao de emergencia", "pílula do dia seguinte", "pilula do dia seguinte"], classe: "hormonios", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção de emergência após relação desprotegida, falha do método ou violência sexual",
    adulto: "1,5 mg VO dose única, o mais cedo possível (até 72 h; eficácia menor até 120 h)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Não interrompe gestação já implantada; não há evidência de dano fetal se usada inadvertidamente." },
    alergia: [], contra: ["Uso de indutor enzimático (rifampicina, carbamazepina, fenitoína, efavirenz): dose dobrada (3 mg) ou DIU de cobre", "Menos eficaz com IMC ≥ 30: considerar DIU de cobre"],
    prescrever: [
      { contexto: "Contracepção de emergência", texto: "USO ORAL\n1. Levonorgestrel 1,5 mg --------------------------- 1 comprimido\n   Tomar 1 comprimido, dose única, o mais cedo possível (até 5 dias após a relação).\n   (Alternativa: levonorgestrel 0,75 mg, 2 comprimidos juntos.)\n   Se não menstruar em 3 semanas, fazer teste de gravidez." }
    ] },
  { id: "noretisterona", nomes: ["Noretisterona", "enantato de noretisterona"], classe: "hormonios", receita: "simples", tags: ["anticoncepcional"],
    usos: "Minipílula de progestagênio (amamentação, contraindicação a estrogênio); injetável mensal combinado com valerato de estradiol",
    adulto: "Minipílula 0,35 mg VO 1×/dia contínuo · injetável mensal: enantato de noretisterona 50 mg + valerato de estradiol 5 mg IM a cada 30 dias",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Minipílula: atraso > 3 h reduz eficácia", "Injetável mensal (contém estrogênio): mesmas contraindicações do anticoncepcional combinado (enxaqueca com aura, tabagismo ≥ 35 anos, TEV, HAS não controlada, < 6 semanas pós-parto amamentando)"],
    prescrever: [
      { contexto: "Minipílula (amamentação)", texto: "USO ORAL\n1. Noretisterona 0,35 mg --------------------------- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, sem pausa entre as cartelas.\n   Pode iniciar 6 semanas após o parto." },
      { contexto: "Injetável mensal combinado", texto: "USO INTRAMUSCULAR\n1. Enantato de noretisterona 50 mg + valerato de estradiol 5 mg/mL ---- 1 ampola\n   Aplicar 1 mL IM profunda (glúteo). 1ª dose até o 5º dia da menstruação; repetir a cada 30 dias (± 3 dias)." }
    ] },
  { id: "desogestrel", nomes: ["Desogestrel"], classe: "hormonios", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção oral só de progestagênio (amamentação, contraindicação a estrogênio)",
    adulto: "75 mcg VO 1×/dia contínuo, sem pausa",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Câncer de mama atual", "Doença hepática grave", "Sangramento irregular é frequente"],
    prescrever: [
      { contexto: "Contracepção contínua", texto: "USO ORAL\n1. Desogestrel 75 mcg ---------------------------- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, sem pausa entre as cartelas.\n   Se atrasar mais de 12 horas, usar preservativo por 7 dias." }
    ] },
  { id: "estrogenos-conjugados", nomes: ["Estrogênios conjugados", "estrogenios conjugados", "estrogênio conjugado"], classe: "hormonios", receita: "simples", tags: [],
    usos: "Terapia hormonal dos sintomas vasomotores do climatério; creme vaginal na síndrome geniturinária",
    adulto: "0,3–0,625 mg VO 1×/dia (com progestagênio se tiver útero) · creme vaginal 0,625 mg/g: 0,5–1 g à noite",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado." },
    alergia: [], contra: ["Câncer de mama ou de endométrio, sangramento genital não esclarecido", "TEV, AVC, IAM, doença hepática ativa", "Com útero: associar progestagênio (proteção endometrial)", "Preferir iniciar antes dos 60 anos ou até 10 anos da menopausa, na menor dose eficaz"],
    prescrever: [
      { contexto: "Climatério — mulher sem útero", texto: "USO ORAL\n1. Estrogênios conjugados 0,625 mg ----------------- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo; reavaliar anualmente." },
      { contexto: "Síndrome geniturinária (atrofia vaginal)", texto: "USO VAGINAL\n1. Estrogênios conjugados creme vaginal 0,625 mg/g ---- 1 bisnaga\n   Aplicar 1 g com o aplicador à noite, todos os dias por 2 semanas;\n   depois 2 vezes por semana." }
    ] },

  /* ========== VITAMINAS, MINERAIS E ELETRÓLITOS ========== */
  { id: "acido-folico", nomes: ["Ácido fólico", "acido folico", "folato"], classe: "vitaminas", receita: "simples", tags: [],
    usos: "Prevenção de defeito do tubo neural (pré-concepção e gestação), anemia megaloblástica por deficiência de folato, uso de anticonvulsivantes/metotrexato",
    apres: [{ rotulo: "solução oral 0,2 mg/mL", mgPorMl: 0.2 }, { rotulo: "comprimido 5 mg", mgPorComp: 5 }],
    adulto: "Prevenção de DTN: 0,4 mg/dia (alto risco: 5 mg/dia) · anemia: 5 mg/dia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Indicado: iniciar 30 dias antes da concepção e manter até a 12ª semana." },
    alergia: [], contra: ["Não tratar anemia megaloblástica só com folato sem afastar deficiência de B12 (piora neurológica)"],
    prescrever: [
      { contexto: "Pré-concepção / gestação (risco habitual)", texto: "USO ORAL\n1. Ácido fólico solução oral 0,2 mg/mL ------------- 1 frasco\n   Tomar 2 mL (0,4 mg) 1 vez ao dia, desde 30 dias antes de engravidar até a 12ª semana de gestação." },
      { contexto: "Alto risco de DTN (DTN prévio, anticonvulsivante, diabetes)", texto: "USO ORAL\n1. Ácido fólico 5 mg ---------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, desde 30 dias antes de engravidar até a 12ª semana de gestação." },
      { contexto: "Anemia megaloblástica por folato", texto: "USO ORAL\n1. Ácido fólico 5 mg ---------------------------- 120 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 4 meses." }
    ] },
  { id: "cianocobalamina", nomes: ["Cianocobalamina", "vitamina B12", "hidroxocobalamina"], classe: "vitaminas", receita: "simples", tags: [],
    usos: "Deficiência de vitamina B12 (anemia megaloblástica, neuropatia, uso crônico de metformina/IBP, gastrectomia, dieta vegana)",
    adulto: "IM: 1.000 mcg em dias alternados por 1–2 semanas, depois 1×/semana até normalizar, depois 1×/mês · VO: 1.000–2.000 mcg/dia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Sintomas neurológicos ou má absorção grave (anemia perniciosa, gastrectomia): preferir IM", "Monitorar potássio no início do tratamento da anemia grave"],
    prescrever: [
      { contexto: "Deficiência — IM", texto: "USO INTRAMUSCULAR\n1. Cianocobalamina 1.000 mcg, ampola --------------- 10 ampolas\n   Aplicar 1 ampola IM em dias alternados por 2 semanas (7 doses),\n   depois 1 ampola por semana até normalizar e, então, 1 ampola por mês." },
      { contexto: "Deficiência leve / manutenção — VO", texto: "USO ORAL\n1. Cianocobalamina 1.000 mcg ---------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Reavaliar B12 em 3 meses." }
    ] },
  { id: "colecalciferol", nomes: ["Colecalciferol", "vitamina D", "vitamina D3"], classe: "vitaminas", receita: "simples", tags: [],
    usos: "Profilaxia de raquitismo no lactente; deficiência de vitamina D; osteoporose (com cálcio)",
    porIdade: [{ maxAnos: 1, texto: "Profilaxia: 400 UI/dia" }, { maxAnos: 2, texto: "Profilaxia: 600 UI/dia" }],
    adulto: "Manutenção 1.000–2.000 UI/dia · deficiência: 50.000 UI/semana por 8 semanas (ou 7.000 UI/dia), depois manutenção",
    renal: [{ abaixo: 30, texto: "DRC avançada: a forma ativa (calcitriol) pode ser necessária; seguir a nefrologia." }],
    gestacao: { nivel: "compativel", texto: "Compatível em dose de suplementação." },
    alergia: [], contra: ["Hipercalcemia", "Doenças granulomatosas (sarcoidose): risco de hipercalcemia"],
    prescrever: [
      { contexto: "Lactente — profilaxia (SBP)", texto: "USO ORAL\n1. Colecalciferol gotas ----------------------------- 1 frasco\n   Dar ___ gotas (400 UI) 1 vez ao dia, da 1ª semana até 1 ano; de 1 a 2 anos, 600 UI/dia.\n   (Número de gotas conforme a concentração do produto.)" },
      { contexto: "Adulto — deficiência", texto: "USO ORAL\n1. Colecalciferol 50.000 UI ----------------------- 8 cápsulas\n   Tomar 1 cápsula 1 vez por semana, após uma refeição, por 8 semanas.\n   Depois, manutenção com 1.000–2.000 UI/dia. Dosar 25(OH)D em 3 meses." },
      { contexto: "Adulto — manutenção", texto: "USO ORAL\n1. Colecalciferol 2.000 UI ------------------------ 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, após uma refeição." }
    ] },
  { id: "tiamina", nomes: ["Tiamina", "vitamina B1"], classe: "vitaminas", receita: "simples", tags: [],
    usos: "Etilismo/desnutrição (prevenção e tratamento da encefalopatia de Wernicke), antes de glicose no etilista",
    adulto: "Profilaxia: 100 mg IM/IV antes da glicose, depois 100–300 mg/dia VO · Wernicke: 200–500 mg IV 8/8h por 3–5 dias",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (indicada na hiperêmese grave)." },
    alergia: [], contra: ["Raras reações anafiláticas com uso IV: infundir diluída"],
    prescrever: [
      { contexto: "PS — etilista / desnutrido (antes da glicose)", texto: "Tiamina 100 mg IM ou IV (diluída em SF 0,9% 100 mL em 30 min), antes de qualquer solução glicosada." },
      { contexto: "Suspeita de encefalopatia de Wernicke", texto: "Tiamina 500 mg + SF 0,9% 100 mL IV em 30 min de 8/8h por 3 dias;\ndepois 250 mg IV/IM 1×/dia por 3–5 dias e, então, VO. (Conferir protocolo local; esquemas de 200 mg 8/8h também são usados.)" },
      { contexto: "Ambulatorial — etilista", texto: "USO ORAL\n1. Tiamina 300 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia." }
    ] },
  { id: "cloreto-potassio", nomes: ["Cloreto de potássio", "cloreto de potassio", "KCl"], classe: "vitaminas", receita: "simples", tags: ["hipercalemia"],
    usos: "Hipocalemia (uso de diurético, diarreia, vômitos); reposição IV na hipocalemia moderada/grave",
    apres: [{ rotulo: "xarope 6% (60 mg/mL ≈ 0,8 mEq/mL)", mgPorMl: 60 }, { rotulo: "ampola 19,1% 10 mL (≈ 2,5 mEq/mL; 25 mEq)" }, { rotulo: "comprimido de liberação prolongada 600 mg (8 mEq)", mgPorComp: 600 }],
    adulto: "VO: 20–40 mEq/dia divididos · IV periférico: até 10 mEq/h e concentração ≤ 40 mEq/L (via central com monitor: até 20 mEq/h)",
    renal: [{ abaixo: 30, texto: "Alto risco de hipercalemia: reduzir a dose e dosar K com frequência." }, { abaixo: 60, texto: "Cautela; dosar potássio após iniciar." }],
    gestacao: { nivel: "compativel", texto: "Compatível para corrigir hipocalemia." },
    alergia: [], contra: ["Hipercalemia, insuficiência renal grave", "Uso de IECA/BRA, espironolactona, SMX-TMP: risco de hipercalemia", "NUNCA fazer KCl IV em bolus ou sem diluir (parada cardíaca)", "Corrigir magnésio junto (hipocalemia refratária)"],
    prescrever: [
      { contexto: "Ambulatorial — hipocalemia leve", texto: "USO ORAL\n1. Cloreto de potássio xarope 6% ------------------- 2 frascos\n   Tomar 15 mL (≈ 12 mEq) diluídos em água ou suco, de 8 em 8 horas, após as refeições, por 7 dias.\n   Dosar potássio ao final." },
      { contexto: "Hospitalar — reposição IV periférica", texto: "SF 0,9% 1.000 mL + KCl 19,1% 15 mL (≈ 38 mEq) IV em 4 horas (≈ 9,5 mEq/h).\nNunca em bolus. Dosar K após a reposição; monitor se K < 2,5 mEq/L ou alteração no ECG." }
    ] },
  { id: "sulfato-magnesio", nomes: ["Sulfato de magnésio", "sulfato de magnesio", "MgSO4"], classe: "vitaminas", receita: "hospitalar", tags: [],
    usos: "Pré-eclâmpsia grave/eclâmpsia, crise de asma grave, torsades de pointes, hipomagnesemia",
    ped: { dose: 50, faixa: "Asma grave: 25–50 mg/kg IV em 20 min", intervalo: "dose única", maxDose: 2000 },
    apres: [{ rotulo: "ampola 50% (500 mg/mL; 10 mL = 5 g)", mgPorMl: 500 }, { rotulo: "ampola 10% (100 mg/mL; 10 mL = 1 g)", mgPorMl: 100 }],
    adulto: "Eclâmpsia (Zuspan): 4 g IV em 15–20 min + 1 g/h · asma grave: 2 g IV em 20 min · torsades: 2 g IV",
    renal: [{ abaixo: 30, texto: "Risco de intoxicação: na pré-eclâmpsia com oligúria/creatinina elevada, reduzir a manutenção (ex.: 0,5 g/h) e monitorar reflexos e magnesemia." }],
    gestacao: { nivel: "compativel", texto: "Indicado na pré-eclâmpsia grave/eclâmpsia e na neuroproteção fetal (< 32 semanas)." },
    alergia: [], contra: ["Monitorar: reflexo patelar presente, FR ≥ 16 irpm, diurese ≥ 25 mL/h — se alterados, suspender", "Antídoto: gluconato de cálcio 10% 10 mL IV lento", "Miastenia gravis, BAV"],
    prescrever: [
      { contexto: "Pré-eclâmpsia grave / eclâmpsia — Zuspan", texto: "Ataque: Sulfato de magnésio 50% 8 mL (4 g) + água destilada 12 mL IV em 15–20 min.\nManutenção: Sulfato de magnésio 50% 10 mL (5 g) + SG 5% 490 mL IV em bomba a 100 mL/h (1 g/h) por 24 h após o parto ou a última crise.\nControle horário de reflexo patelar, FR e diurese." },
      { contexto: "Crise de asma grave — adulto", texto: "Sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL IV em 20 min, dose única." },
      { contexto: "Crise de asma grave — criança", texto: "Sulfato de magnésio 50% ___ mL + SF 0,9% 50–100 mL IV em 20 min, dose única.\n(25–50 mg/kg = 0,05–0,1 mL/kg da solução 50%; máximo 2 g = 4 mL.)" },
      { contexto: "Torsades de pointes (com pulso)", texto: "Sulfato de magnésio 50% 4 mL (2 g) + SG 5% 50 mL IV em 15 min." }
    ] },
  { id: "gluconato-calcio", nomes: ["Gluconato de cálcio", "gluconato de calcio"], classe: "vitaminas", receita: "hospitalar", tags: [],
    usos: "Hipercalemia com alteração no ECG (estabilização de membrana), hipocalcemia sintomática, intoxicação por magnésio ou bloqueador de canal de cálcio",
    apres: [{ rotulo: "ampola 10% 10 mL (1 g; 93 mg de cálcio elementar)", mgPorMl: 100 }],
    adulto: "1 g (10 mL a 10%) IV em 5–10 min; repetir se ECG persistir alterado",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (antídoto da intoxicação por magnésio)." },
    alergia: [], contra: ["Extravasamento causa necrose: veia calibrosa", "Usuário de digoxina: infundir lentamente (20–30 min) com monitor", "Não misturar com bicarbonato nem com ceftriaxona na mesma linha (precipita)"],
    prescrever: [
      { contexto: "Hipercalemia com alteração no ECG", texto: "Gluconato de cálcio 10% 10 mL (1 g) IV lento em 5–10 min, com monitor cardíaco.\nRepetir em 5 min se o ECG continuar alterado. Efeito dura 30–60 min: associar insulina + glicose." },
      { contexto: "Hipocalcemia sintomática", texto: "Gluconato de cálcio 10% 10–20 mL (1–2 g) + SG 5% 100 mL IV em 10–20 min.\nDepois, infusão contínua conforme cálcio sérico; corrigir magnésio." },
      { contexto: "Intoxicação por sulfato de magnésio", texto: "Gluconato de cálcio 10% 10 mL (1 g) IV lento em 10 min." }
    ] },
  { id: "bicarbonato-sodio", nomes: ["Bicarbonato de sódio", "bicarbonato de sodio"], classe: "vitaminas", receita: "hospitalar", tags: [],
    usos: "Intoxicação por antidepressivo tricíclico (QRS > 100 ms), hipercalemia com acidose, acidose metabólica grave selecionada, alcalinização urinária (salicilato)",
    apres: [{ rotulo: "ampola 8,4% (1 mEq/mL)" }],
    adulto: "Intox. tricíclico: 1–2 mEq/kg IV em bolus, repetir até QRS < 100 ms (alvo pH 7,45–7,55)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar quando indicado; evitar alcalose." },
    alergia: [], contra: ["Hipocalemia (piora), hipernatremia, sobrecarga de volume", "Não usar de rotina na PCR nem na cetoacidose com pH ≥ 6,9", "Extravasamento: necrose; não misturar com cálcio"],
    prescrever: [
      { contexto: "Intoxicação por tricíclico (QRS alargado)", texto: "Bicarbonato de sódio 8,4% — ___ mL (1–2 mEq/kg = 1–2 mL/kg) IV em bolus.\nRepetir conforme QRS e gasometria (alvo pH 7,45–7,55). Monitor e ECG seriado." }
    ] },

  /* ========== UROLOGIA ========== */
  { id: "tansulosina", nomes: ["Tansulosina", "tamsulosina"], classe: "urologia", receita: "simples", tags: [],
    usos: "Hiperplasia prostática benigna (sintomas urinários); terapia expulsiva de cálculo ureteral distal (5–10 mm)",
    adulto: "0,4 mg VO 1×/dia, após a mesma refeição",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Uso masculino; não indicada na gestação." },
    alergia: [], contra: ["Hipotensão ortostática (orientar 1ª dose)", "Cirurgia de catarata: avisar o oftalmologista (síndrome da íris flácida)"],
    prescrever: [
      { contexto: "HPB", texto: "USO ORAL\n1. Tansulosina 0,4 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, 30 minutos após a mesma refeição. Não abrir a cápsula. Uso contínuo." },
      { contexto: "Cólica renal — terapia expulsiva", texto: "USO ORAL\n1. Tansulosina 0,4 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia por até 4 semanas ou até a eliminação do cálculo.\n   Retornar se febre, dor sem controle ou vômitos." }
    ] },
  { id: "doxazosina", nomes: ["Doxazosina"], classe: "urologia", receita: "simples", tags: [],
    usos: "Hiperplasia prostática benigna; hipertensão (não como 1ª linha)",
    adulto: "Iniciar 1 mg à noite; aumentar a cada 1–2 semanas até 2–8 mg/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar só se necessária." },
    alergia: [], contra: ["Hipotensão postural e síncope da 1ª dose (iniciar à noite, deitado)", "Idosos: risco de quedas"],
    prescrever: [
      { contexto: "HPB — início", texto: "USO ORAL\n1. Doxazosina 2 mg ------------------------------- 30 comprimidos\n   Tomar meio comprimido (1 mg) à noite, ao deitar, por 1–2 semanas;\n   depois 1 comprimido (2 mg) à noite. Levantar devagar da cama." }
    ] },
  { id: "finasterida", nomes: ["Finasterida"], classe: "urologia", receita: "simples", tags: [],
    usos: "Hiperplasia prostática benigna com próstata aumentada (5 mg); alopecia androgenética masculina (1 mg)",
    adulto: "HPB: 5 mg VO 1×/dia · alopecia: 1 mg VO 1×/dia",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado: gestantes não devem manusear comprimidos partidos ou esmagados (risco de malformação genital em feto masculino)." },
    alergia: [], contra: ["Reduz o PSA em ~50% (multiplicar por 2 para interpretar)", "Efeitos sexuais (libido, ejaculação)", "Efeito na HPB leva 6–12 meses"],
    prescrever: [
      { contexto: "HPB", texto: "USO ORAL\n1. Finasterida 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." },
      { contexto: "Alopecia androgenética masculina", texto: "USO ORAL\n1. Finasterida 1 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo; resultado em 3–6 meses." }
    ] },
  { id: "oxibutinina", nomes: ["Oxibutinina"], classe: "urologia", receita: "simples", tags: ["anticolinergico"],
    usos: "Bexiga hiperativa, incontinência de urgência, bexiga neurogênica, enurese (2ª linha)",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "xarope 1 mg/mL", mgPorMl: 1 }],
    adulto: "5 mg VO 2–3×/dia (máx 20 mg/dia); idosos: iniciar 2,5 mg 2–3×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar só se necessária." },
    alergia: [], contra: ["Glaucoma de ângulo fechado, retenção urinária, obstrução intestinal, miastenia", "Idosos e demência: efeito anticolinérgico (confusão, quedas, constipação) — evitar se possível"],
    prescrever: [
      { contexto: "Adulto — bexiga hiperativa", texto: "USO ORAL\n1. Oxibutinina 5 mg ------------------------------ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas (pode chegar a 8/8h). Uso contínuo; reavaliar em 4–8 semanas." }
    ] },

  /* ========== EMERGÊNCIA E ANTÍDOTOS ========== */
  { id: "naloxona", nomes: ["Naloxona"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Intoxicação por opioide com depressão respiratória/rebaixamento",
    ped: { dose: 0.1, faixa: "0,1 mg/kg IV/IM/IO (reversão completa)", intervalo: "repetir a cada 2–3 min se necessário", maxDose: 2 },
    apres: [{ rotulo: "ampola 0,4 mg/mL", mgPorMl: 0.4 }],
    adulto: "0,04–0,4 mg IV, repetir a cada 2–3 min até FR adequada (máx ~10 mg); IM/SC se sem acesso",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usar na intoxicação grave; em usuária crônica, titular doses baixas (abstinência também afeta o feto)." },
    alergia: [], contra: ["Usuário crônico de opioide: doses baixas e tituladas (abstinência aguda, agitação, vômitos)", "Duração (30–90 min) menor que a de muitos opioides: observar e repetir/infusão"],
    prescrever: [
      { contexto: "Adulto — intoxicação por opioide", texto: "Naloxona 0,4 mg/mL — diluir 1 ampola (1 mL) em 9 mL de SF 0,9% (0,04 mg/mL).\nFazer 1 mL (0,04 mg) IV a cada 2–3 min até FR ≥ 12 irpm; em apneia, 0,4 mg (1 ampola) IV direto.\nVentilar com bolsa-válvula-máscara enquanto isso. Observar ≥ 4–6 h." },
      { contexto: "Criança — intoxicação por opioide", texto: "Naloxona 0,4 mg/mL — ___ mL IV/IM/IO.\n(0,1 mg/kg; máximo 2 mg por dose. Repetir a cada 2–3 min se necessário.)" }
    ] },
  { id: "flumazenil", nomes: ["Flumazenil"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão de sedação por benzodiazepínico (iatrogênica, procedimento); intoxicação pura por benzodiazepínico em não usuário crônico",
    ped: { dose: 0.01, faixa: "0,01 mg/kg IV (> 1 ano)", intervalo: "repetir a cada 1 min; total máx 0,05 mg/kg ou 1 mg", maxDose: 0.2 },
    apres: [{ rotulo: "ampola 0,1 mg/mL (5 mL = 0,5 mg)", mgPorMl: 0.1 }],
    adulto: "0,2 mg IV em 15 s; depois 0,1 mg a cada 60 s até resposta (total máx 1 mg)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar só se necessário." },
    alergia: [], contra: ["Usuário crônico de benzodiazepínico (convulsão por abstinência)", "Epilepsia em uso de benzodiazepínico", "Intoxicação mista, sobretudo por tricíclico ou pró-convulsivantes", "Duração curta: risco de re-sedação"],
    prescrever: [
      { contexto: "Adulto — reversão de benzodiazepínico", texto: "Flumazenil 0,1 mg/mL — 2 mL (0,2 mg) IV em 15 segundos.\nSe necessário, 1 mL (0,1 mg) IV a cada 60 segundos até resposta; dose total máxima 1 mg.\nObservar re-sedação por 2 h." },
      { contexto: "Criança > 1 ano", texto: "Flumazenil 0,1 mg/mL — ___ mL IV em 15 segundos.\n(0,01 mg/kg; máximo 0,2 mg por dose; total máximo 0,05 mg/kg ou 1 mg.)" }
    ] },
  { id: "atropina", nomes: ["Atropina", "sulfato de atropina"], classe: "emergencia", receita: "hospitalar", tags: ["anticolinergico"],
    usos: "Bradicardia sintomática, intoxicação por organofosforado/carbamato, pré-intubação em pediatria selecionada",
    ped: { dose: 0.02, faixa: "0,02 mg/kg IV/IO", intervalo: "pode repetir 1 vez em 5 min", maxDose: 0.5 },
    apres: [{ rotulo: "ampola 0,25 mg/mL", mgPorMl: 0.25 }, { rotulo: "ampola 0,5 mg/mL", mgPorMl: 0.5 }],
    adulto: "Bradicardia: 1 mg IV a cada 3–5 min (máx 3 mg) · organofosforado: 1–2 mg IV, dobrando a cada 5 min até secar secreções",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usar quando indicada (bradicardia instável, intoxicação)." },
    alergia: [], contra: ["Glaucoma de ângulo fechado (em emergência, não impede o uso)", "Pouco eficaz no BAV de alto grau e no transplante cardíaco: preparar marca-passo"],
    prescrever: [
      { contexto: "Bradicardia sintomática — adulto", texto: "Atropina 0,5 mg/mL — 2 mL (1 mg) IV em bolus.\nRepetir a cada 3–5 min, dose máxima total 3 mg. Se não responder: marca-passo transcutâneo ou adrenalina/dopamina em infusão." },
      { contexto: "Intoxicação por organofosforado — adulto", texto: "Atropina — 1 a 2 mg IV em bolus; dobrar a dose a cada 5 min até atropinização\n(secreções brônquicas secas, ausculta limpa, FC > 80 bpm, PAS > 80 mmHg). Depois, infusão contínua." },
      { contexto: "Criança — bradicardia", texto: "Atropina 0,25 mg/mL — ___ mL IV/IO em bolus.\n(0,02 mg/kg; máximo 0,5 mg por dose; pode repetir 1 vez.)" }
    ] },
  { id: "glicose-50", nomes: ["Glicose 50%", "glicose hipertônica", "soro glicosado 50%", "glicose 25%"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Hipoglicemia sintomática ou com rebaixamento; junto da insulina no tratamento da hipercalemia",
    ped: { dose: 2, faixa: "2–5 mL/kg de glicose 10% (0,2–0,5 g/kg)", intervalo: "repetir conforme glicemia", maxDose: 250, unidade: "mL de glicose 10%" },
    adulto: "Glicose 50% 40–50 mL (20–25 g) IV em bolus; checar glicemia em 15 min",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Etilista/desnutrido: tiamina 100 mg antes ou junto", "Glicose 50% é hipertônica e irritante: veia calibrosa, conferir refluxo (necrose se extravasar)", "Criança: não usar 50%; usar glicose 10%"],
    prescrever: [
      { contexto: "Hipoglicemia — adulto", texto: "Glicose 50% — 40 mL (4 ampolas de 10 mL; 20 g) IV em bolus, em veia calibrosa.\nGlicemia capilar em 15 min; repetir se < 70 mg/dL. Depois, SG 5–10% de manutenção e alimentação." },
      { contexto: "Hipoglicemia — criança", texto: "Glicose 10% — ___ mL IV em 5 min.\n(2–5 mL/kg = 0,2–0,5 g/kg. Preparar: 1 parte de glicose 50% + 4 partes de água destilada ou SF.) Glicemia em 15 min." },
      { contexto: "Hipercalemia (junto da insulina)", texto: "Insulina regular 10 UI + glicose 50% 50 mL (25 g) IV em 15–30 min.\nGlicemia capilar de 1/1h nas 4–6 h seguintes." }
    ] },
  { id: "noradrenalina", nomes: ["Noradrenalina", "norepinefrina", "hemitartarato de norepinefrina"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Choque séptico e choque distributivo (vasopressor de 1ª escolha); choque cardiogênico com hipotensão grave",
    adulto: "Iniciar 0,05–0,1 mcg/kg/min e titular até PAM ≥ 65 mmHg",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar quando indicada; pode reduzir o fluxo uteroplacentário — preferível à hipotensão materna mantida." },
    alergia: [], contra: ["Repor volume junto (não substitui a ressuscitação volêmica)", "Preferir acesso central; periférico calibroso por pouco tempo com vigilância (extravasamento: necrose)", "Isquemia de extremidades em doses altas"],
    prescrever: [
      { contexto: "Choque — solução padrão", texto: "Noradrenalina (hemitartarato 2 mg/mL, ampola 4 mL = 4 mg de noradrenalina base) — 4 ampolas + SG 5% 234 mL = 250 mL (64 mcg/mL).\nIV em bomba de infusão, iniciar 0,05–0,1 mcg/kg/min e titular até PAM ≥ 65 mmHg.\nmL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ 64. Conferir na ampola se a concentração é do sal ou da base." }
    ] },
  { id: "acido-tranexamico", nomes: ["Ácido tranexâmico", "acido tranexamico", "transamin"], classe: "emergencia", receita: "simples", tags: [],
    usos: "Trauma com sangramento (até 3 h), hemorragia pós-parto, sangramento uterino aumentado, epistaxe e sangramentos em mucosas",
    apres: [{ rotulo: "ampola 50 mg/mL (5 mL = 250 mg)", mgPorMl: 50 }, { rotulo: "comprimido 250 mg", mgPorComp: 250 }],
    adulto: "Trauma/HPP: 1 g IV em 10 min (trauma: + 1 g em 8 h) · sangramento menstrual: 1 g VO 8/8h por até 5 dias",
    renal: [{ abaixo: 50, texto: "Acumula: reduzir doses repetidas e o uso oral prolongado (dose única de trauma/HPP não muda)." }],
    gestacao: { nivel: "compativel", texto: "Indicado na hemorragia pós-parto (1 g IV em até 3 h do parto)." },
    alergia: [], contra: ["TEV ou trombose arterial ativa", "Após 3 h do trauma (piora desfecho)", "Hematúria de vias altas (coágulos obstruem o ureter)", "Doses altas: convulsões"],
    prescrever: [
      { contexto: "Trauma com sangramento (até 3 h)", texto: "Ácido tranexâmico 1 g (4 ampolas de 250 mg) + SF 0,9% 100 mL IV em 10 min.\nDepois: 1 g + SF 0,9% 500 mL IV em 8 horas." },
      { contexto: "Hemorragia pós-parto", texto: "Ácido tranexâmico 1 g (4 ampolas de 250 mg) IV lento em 10 min, junto da ocitocina.\nRepetir 1 g se o sangramento persistir após 30 min ou recomeçar em até 24 h." },
      { contexto: "Sangramento menstrual aumentado", texto: "USO ORAL\n1. Ácido tranexâmico 250 mg ------------------------ 60 comprimidos\n   Tomar 4 comprimidos (1 g) de 8 em 8 horas, apenas nos dias de maior fluxo, por até 5 dias por ciclo." }
    ] },
  { id: "carvao-ativado", nomes: ["Carvão ativado", "carvao ativado"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Descontaminação gastrointestinal em intoxicação oral potencialmente grave, idealmente até 1 h da ingestão",
    ped: { dose: 1, faixa: "1 g/kg VO ou por sonda", intervalo: "dose única", maxDose: 50, unidade: "g" },
    adulto: "50 g VO ou por sonda, dose única (até 1 h da ingestão)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (não é absorvido)." },
    alergia: [], contra: ["Via aérea não protegida / rebaixamento sem intubação (broncoaspiração)", "Cáusticos, hidrocarbonetos", "Não adsorve: álcoois, ferro, lítio, metais", "Obstrução ou perfuração intestinal"],
    prescrever: [
      { contexto: "Adulto", texto: "Carvão ativado 50 g em suspensão com água, VO ou por sonda nasogástrica, dose única.\nConfirmar via aérea protegida antes." },
      { contexto: "Criança", texto: "Carvão ativado ___ g em suspensão com água, VO ou por sonda nasogástrica, dose única.\n(1 g/kg; máximo 50 g.)" }
    ] },
  { id: "acetilcisteina", nomes: ["Acetilcisteína", "acetilcisteina", "N-acetilcisteína", "N-acetilcisteina"], classe: "emergencia", receita: "simples", tags: [],
    usos: "Antídoto da intoxicação por paracetamol; mucolítico (benefício modesto)",
    adulto: "Paracetamol (IV, 21 h): 150 mg/kg em 1 h + 50 mg/kg em 4 h + 100 mg/kg em 16 h · VO: 140 mg/kg, depois 70 mg/kg 4/4h (17 doses)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Na intoxicação por paracetamol, usar sem atraso (protege mãe e feto)." },
    alergia: [], contra: ["IV: reação anafilactoide (rubor, broncoespasmo) — pausar, anti-histamínico e reiniciar mais lento", "Indicação pelo nomograma de Rumack-Matthew (nível 4 h) ou dose ingerida ≥ 150 mg/kg (≥ 7,5 g no adulto)", "Iniciar até 8 h da ingestão para máxima proteção"],
    prescrever: [
      { contexto: "Intoxicação por paracetamol — IV (protocolo 21 h, adulto)", texto: "1ª bolsa: Acetilcisteína ___ mg (150 mg/kg) + SG 5% 200 mL IV em 1 hora.\n2ª bolsa: Acetilcisteína ___ mg (50 mg/kg) + SG 5% 500 mL IV em 4 horas.\n3ª bolsa: Acetilcisteína ___ mg (100 mg/kg) + SG 5% 1.000 mL IV em 16 horas.\n(Peso máximo para o cálculo: 100 kg. Criança: reduzir os volumes de diluição — conferir protocolo.)" },
      { contexto: "Intoxicação por paracetamol — VO", texto: "Acetilcisteína ___ mg VO (140 mg/kg) de ataque, diluída em suco;\ndepois ___ mg (70 mg/kg) VO de 4 em 4 horas, total de 17 doses. Repetir a dose se vomitar em até 1 h." },
      { contexto: "Mucolítico — adulto", texto: "USO ORAL\n1. Acetilcisteína 600 mg granulado ------------------- 7 envelopes\n   Dissolver 1 envelope em meio copo de água e tomar 1 vez ao dia por 7 dias." }
    ] }
]);
