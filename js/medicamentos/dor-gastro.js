/* Medicamentos: dor-gastro. Formato em js/medicamentos.js e docs/ESQUEMA-MEDICAMENTOS.md.
   Classes: analgesicos, aine, opioides, antiemeticos, antiacidos, intestinais.
   Opioides: tramadol e codeína (lista A2, preparações até 100 mg por unidade) = receita de controle especial em 2 vias;
   morfina, metadona e fentanil = Notificação de Receita A (amarela) + receita, quantidade por extenso. */

(() => {
const CE_2VIAS = "RECEITUÁRIO DE CONTROLE ESPECIAL (2 vias: 1 retida na farmácia)\n";
const NOTIF_A = "NOTIFICAÇÃO DE RECEITA A (amarela) + receita\n";

complementarMedicamentos({
  /* ---------- analgésicos ---------- */
  dipirona: {
    receita: "simples",
    usos: "Dor leve a moderada, febre, cólica (associada a antiespasmódico)",
    prescrever: [
      { contexto: "Adulto — ambulatorial (comprimido)", texto: "USO ORAL\n1. Dipirona 500 mg ---------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.\n   Não ultrapassar 8 comprimidos (4 g) por dia." },
      { contexto: "Adulto — ambulatorial (gotas)", texto: "USO ORAL\n1. Dipirona gotas 500 mg/mL ------------------- 1 frasco\n   Tomar 20 a 40 gotas de 6 em 6 horas, se dor ou febre." },
      { contexto: "Criança — gotas (10–15 mg/kg/dose)", texto: "USO ORAL\n1. Dipirona gotas 500 mg/mL ------------------- 1 frasco\n   Dar ___ gotas de 6 em 6 horas, se febre ou dor.\n   (10–15 mg/kg/dose; 1 gota = 25 mg; máximo 1 g por dose e 4 g/dia; ≥ 3 meses ou ≥ 5 kg)" },
      { contexto: "Criança — solução oral 50 mg/mL", texto: "USO ORAL\n1. Dipirona solução oral 50 mg/mL ------------ 1 frasco\n   Dar ___ mL de 6 em 6 horas, se febre ou dor.\n   (10–15 mg/kg/dose; máximo 1 g por dose)" },
      { contexto: "Hospitalar / PS", texto: "Dipirona 500 mg/mL — 2 mL (1 g) + AD 8 mL IV lento (não exceder 1 mL/min), paciente deitado; ou em SF 0,9% 100 mL IV em 15–30 min. Até 6/6h se dor ou febre." }
    ]
  },
  paracetamol: {
    receita: "simples",
    usos: "Dor leve a moderada e febre; 1ª escolha na gestação, na dengue e em quem não pode usar AINE",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Paracetamol 750 mg ------------------------- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas, se dor ou febre.\n   Não ultrapassar 4 comprimidos por dia." },
      { contexto: "Adulto — 500 mg", texto: "USO ORAL\n1. Paracetamol 500 mg ------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.\n   Não ultrapassar 8 comprimidos (4 g) por dia; hepatopatas/etilistas: máximo 2–3 g/dia." },
      { contexto: "Criança — suspensão 32 mg/mL", texto: "USO ORAL\n1. Paracetamol suspensão oral 32 mg/mL ------- 1 frasco\n   Dar ___ mL de 6 em 6 horas, se febre ou dor.\n   (10–15 mg/kg/dose; máximo 75 mg/kg/dia e 4 g/dia)" },
      { contexto: "Criança — gotas 200 mg/mL", texto: "USO ORAL\n1. Paracetamol gotas 200 mg/mL --------------- 1 frasco\n   Dar ___ gotas de 6 em 6 horas, se febre ou dor.\n   (10–15 mg/kg/dose; conferir no rótulo os mg por gota; máximo 75 mg/kg/dia)" }
    ]
  },
  sumatriptana: {
    receita: "simples",
    usos: "Crise de enxaqueca moderada a grave (com ou sem aura) que não responde a analgésico/AINE",
    prescrever: [
      { contexto: "Adulto — crise de enxaqueca", texto: "USO ORAL\n1. Sumatriptana 50 mg ------------------------- 4 comprimidos\n   Tomar 1 comprimido no início da crise de enxaqueca.\n   Se a dor voltar, pode repetir após 2 horas. Máximo 4 comprimidos (200 mg) em 24 horas.\n   Não usar mais de 9 dias por mês (risco de cefaleia por uso excessivo)." },
      { contexto: "Adulto — crise forte (100 mg)", texto: "USO ORAL\n1. Sumatriptana 100 mg ------------------------ 2 comprimidos\n   Tomar 1 comprimido no início da crise; se a dor voltar, pode repetir após 2 horas.\n   Máximo 2 comprimidos (200 mg) em 24 horas." }
    ]
  },

  /* ---------- AINE ---------- */
  ibuprofeno: {
    receita: "simples",
    usos: "Dor leve a moderada, febre, cólica menstrual, dor musculoesquelética",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Ibuprofeno 600 mg -------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias." },
      { contexto: "Adulto — dismenorreia / dor leve", texto: "USO ORAL\n1. Ibuprofeno 400 mg -------------------------- 12 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas, após as refeições, se dor, por até 3 dias." },
      { contexto: "Criança — suspensão 100 mg/5 mL (≥ 6 meses)", texto: "USO ORAL\n1. Ibuprofeno suspensão oral 100 mg/5 mL ----- 1 frasco\n   Dar ___ mL de 8 em 8 horas, após alimentação, se febre ou dor.\n   (5–10 mg/kg/dose; máximo 400 mg por dose e 40 mg/kg/dia; não usar na suspeita de dengue ou desidratação)" }
    ]
  },
  diclofenaco: {
    receita: "simples",
    usos: "Dor musculoesquelética, cólica renal, dor pós-traumática (curto prazo)",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Diclofenaco sódico 50 mg ------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias." },
      { contexto: "PS — IM (cólica renal, lombalgia)", texto: "Diclofenaco sódico 75 mg/3 mL — 1 ampola IM profunda (glúteo), dose única.\n(Não usar IM por mais de 2 dias; seguir com VO.)" }
    ]
  },
  cetoprofeno: {
    receita: "simples",
    usos: "Dor aguda moderada (cólica renal, pós-operatório, musculoesquelética)",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Cetoprofeno 50 mg -------------------------- 15 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas, após as refeições, por 5 dias." },
      { contexto: "Hospitalar / PS — IV", texto: "Cetoprofeno 100 mg (frasco-ampola) + SF 0,9% 100 mL IV em 20 min, até 12/12h." },
      { contexto: "PS — IM", texto: "Cetoprofeno 100 mg/2 mL — 1 ampola IM profunda (glúteo), até 12/12h." }
    ]
  },
  naproxeno: {
    receita: "simples",
    usos: "Dor musculoesquelética, dismenorreia, crise de gota (alternativa), enxaqueca",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Naproxeno 500 mg --------------------------- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após as refeições, por 5 dias." },
      { contexto: "Adulto — 250 mg", texto: "USO ORAL\n1. Naproxeno 250 mg --------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 12 em 12 horas, após as refeições, por 5 dias." }
    ]
  },

  /* ---------- opioides ---------- */
  tramadol: {
    receita: "C1",
    usos: "Dor moderada a forte sem resposta a analgésico comum/AINE (curto prazo). Receita de controle especial (lista A2, adendo: até 100 mg por unidade)",
    prescrever: [
      { contexto: "Adulto — ambulatorial (cápsula)", texto: CE_2VIAS + "USO ORAL\n1. Cloridrato de tramadol 50 mg -------------- 20 (vinte) cápsulas\n   Tomar 1 cápsula de 6 em 6 horas, se dor forte, por até 5 dias.\n   Não ultrapassar 8 cápsulas (400 mg) por dia; > 75 anos: máximo 300 mg/dia." },
      { contexto: "Adulto — ambulatorial (gotas 100 mg/mL)", texto: CE_2VIAS + "USO ORAL\n1. Cloridrato de tramadol gotas 100 mg/mL --- 1 (um) frasco\n   Tomar 20 gotas (50 mg) de 6 em 6 horas, se dor forte, por até 5 dias.\n   Não ultrapassar 160 gotas (400 mg) por dia." },
      { contexto: "Hospitalar / PS", texto: "Tramadol 100 mg/2 mL — 1 ampola + SF 0,9% 100 mL IV em 30 min, até 6/6h se dor (máximo 400 mg/dia).\nAssociar antiemético se náusea." }
    ]
  },
  codeina: {
    receita: "C1",
    usos: "Dor moderada (geralmente com paracetamol); tosse refratária. Receita de controle especial (lista A2, adendo: até 100 mg por unidade)",
    prescrever: [
      { contexto: "Adulto — paracetamol + codeína", texto: CE_2VIAS + "USO ORAL\n1. Paracetamol 500 mg + fosfato de codeína 30 mg --- 12 (doze) comprimidos\n   Tomar 1 comprimido de 6 em 6 horas, se dor forte, por até 3 dias.\n   Não tomar outro remédio com paracetamol junto." },
      { contexto: "Adulto — codeína isolada", texto: CE_2VIAS + "USO ORAL\n1. Fosfato de codeína 30 mg ------------------- 12 (doze) comprimidos\n   Tomar 1 comprimido de 6 em 6 horas, se dor, por até 3 dias." }
    ]
  },
  morfina: {
    receita: "A",
    usos: "Dor forte (aguda no PS, oncológica, paliativa), dispneia em cuidados paliativos, edema agudo de pulmão (uso restrito)",
    prescrever: [
      { contexto: "Hospitalar / PS — titulação IV", texto: "Morfina 10 mg/mL — 1 mL (10 mg) + AD 9 mL (1 mg/mL).\nFazer 2–4 mL (2–4 mg) IV lento; repetir 2 mg a cada 5–15 min até alívio da dor ou sonolência.\nMonitorar FR, SpO2 e nível de consciência; naloxona disponível." },
      { contexto: "Hospitalar — horário fixo SC/IV", texto: "Morfina 10 mg/mL — 0,2–0,5 mL (2–5 mg) SC ou IV de 4/4h (idoso/frágil: começar com 2 mg).\nResgate: mesma dose a cada 1 h se dor. Prescrever laxante e antiemético se necessário." },
      { contexto: "Criança — hospitalar", texto: "Morfina 10 mg/mL — diluir 1 mL em AD 9 mL (1 mg/mL).\nFazer ___ mL IV lento; pode repetir a cada 2–4 h se dor.\n(0,05–0,1 mg/kg/dose; máximo 4 mg por dose inicial)" },
      { contexto: "Ambulatorial — dor oncológica/paliativa (VO)", texto: NOTIF_A + "USO ORAL\n1. Sulfato de morfina 10 mg ------------------- 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 4 em 4 horas, em horário fixo.\n   Se dor entre as doses: tomar mais 1 comprimido (resgate), no máximo 1 a cada hora.\n2. Associar laxante (ex.: lactulose ou bisacodil) enquanto usar a morfina.\n(Idoso/frágil ou DRC: começar com 5 mg de 4/4h; Notificação A cobre até 30 dias)" }
    ]
  },

  /* ---------- antieméticos ---------- */
  ondansetrona: {
    receita: "simples",
    usos: "Náusea e vômitos (gastroenterite, pós-operatório, quimioterapia); hiperêmese como 2ª linha",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Ondansetrona 4 mg comprimido orodispersível --- 10 comprimidos\n   Dissolver 1 comprimido sobre a língua de 8 em 8 horas, se náusea ou vômito." },
      { contexto: "Criança — orodispersível (≥ 6 meses)", texto: "USO ORAL\n1. Ondansetrona 4 mg comprimido orodispersível --- 1 caixa\n   Dar ___ comprimido sobre a língua, dose única no serviço; se necessário repetir de 8 em 8 horas.\n   (0,15 mg/kg/dose; máximo 8 mg; prático: 15–30 kg = 4 mg; > 30 kg = 4–8 mg)" },
      { contexto: "Hospitalar / PS", texto: "Ondansetrona 2 mg/mL — 4 mL (8 mg) + SF 0,9% 50 mL IV em 15 min, até 8/8h.\n(4 mg pode ser feito IV lento sem diluir, em ≥ 30 s.)" },
      { contexto: "Criança — hospitalar", texto: "Ondansetrona 2 mg/mL — ___ mL IV lento (ou diluído em SF 0,9%), até 8/8h.\n(0,15 mg/kg/dose; máximo 8 mg por dose)" }
    ]
  },
  metoclopramida: {
    receita: "simples",
    usos: "Náusea e vômitos, gastroparesia, enxaqueca (adjuvante); uso máximo de 5 dias",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Metoclopramida 10 mg ----------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, 30 minutos antes das refeições, se náusea, por até 5 dias." },
      { contexto: "Criança — solução oral 1 mg/mL (≥ 1 ano)", texto: "USO ORAL\n1. Metoclopramida solução oral 1 mg/mL ------- 1 frasco\n   Dar ___ mL de 8 em 8 horas, se vômito, por até 5 dias.\n   (0,1–0,15 mg/kg/dose; máximo 0,5 mg/kg/dia; contraindicada < 1 ano)" },
      { contexto: "Hospitalar / PS", texto: "Metoclopramida 5 mg/mL — 2 mL (10 mg) IV lento em ≥ 3 min (ou em SF 0,9% 100 mL em 15 min), até 8/8h.\nMáximo 30 mg/dia. Se distonia aguda: biperideno ou difenidramina." }
    ]
  },

  /* ---------- protetores gástricos ---------- */
  ibp: {
    receita: "simples",
    usos: "DRGE, dispepsia, úlcera péptica, erradicação do H. pylori, profilaxia de úlcera com AINE/antiagregante",
    prescrever: [
      { contexto: "Adulto — DRGE / dispepsia", texto: "USO ORAL\n1. Omeprazol 20 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula em jejum, 30 minutos antes do café da manhã, por 30 dias." },
      { contexto: "Adulto — úlcera / esofagite (dose dobrada)", texto: "USO ORAL\n1. Omeprazol 40 mg ---------------------------- 56 cápsulas\n   Tomar 1 cápsula 30 minutos antes do café da manhã e 1 cápsula 30 minutos antes do jantar, por 4 semanas." },
      { contexto: "Adulto — erradicação de H. pylori (14 dias)", texto: "USO ORAL\n1. Omeprazol 20 mg ---------------------------- 28 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, 30 minutos antes do café e do jantar, por 14 dias.\n2. Amoxicilina 500 mg ------------------------- 56 cápsulas\n   Tomar 2 cápsulas (1 g) de 12 em 12 horas por 14 dias.\n3. Claritromicina 500 mg ---------------------- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias.\n(Amoxicilina e claritromicina: receita de antimicrobiano em 2 vias. Controle de cura ≥ 4 semanas após o fim, com IBP suspenso há 2 semanas.)" },
      { contexto: "Hospitalar", texto: "Omeprazol 40 mg (frasco-ampola) — reconstituir com o diluente próprio (10 mL) e fazer IV lento em 2,5–5 min, 1 vez ao dia (ou em SF 0,9% 100 mL em 20–30 min)." }
    ]
  },
  pantoprazol: {
    receita: "simples",
    usos: "DRGE, úlcera péptica, profilaxia de úlcera de estresse, hemorragia digestiva alta; preferido com clopidogrel",
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Pantoprazol 40 mg -------------------------- 28 comprimidos\n   Tomar 1 comprimido em jejum, 30 minutos antes do café da manhã, por 4 semanas.\n   Engolir inteiro, sem partir ou mastigar." },
      { contexto: "Hospitalar — IV", texto: "Pantoprazol 40 mg (frasco-ampola) — reconstituir em SF 0,9% 10 mL e fazer IV em 2–15 min (ou em SF 0,9% 100 mL em 15 min), 1 vez ao dia." },
      { contexto: "Hospitalar — HDA por úlcera (após endoscopia de alto risco)", texto: "Pantoprazol 80 mg IV em bolus.\nDepois: pantoprazol 80 mg em SF 0,9% 100 mL (0,8 mg/mL) a 10 mL/h (8 mg/h) em bomba de infusão, trocar a solução a cada 10 h, por 72 h\n(ou 40 mg IV de 12/12h por 72 h). Depois, VO 40 mg 12/12h." }
    ]
  }
});

adicionarMedicamentos([
  /* ---------- analgésicos / relaxantes musculares ---------- */
  { id: "dipirona-orfenadrina-cafeina", nomes: ["Dipirona + orfenadrina + cafeína", "orfenadrina", "dorflex"], classe: "analgesicos", receita: "simples",
    tags: ["analgesico", "anticolinergico"],
    usos: "Dor musculoesquelética com contratura (lombalgia, torcicolo) e cefaleia tensional",
    adulto: "Dipirona 300 mg + citrato de orfenadrina 35 mg + cafeína 50 mg: 1–2 comprimidos VO 3–4×/dia",
    renal: [{ abaixo: 30, texto: "Evitar uso repetido (dipirona)." }],
    gestacao: { nivel: "evitar", texto: "Evitar (dipirona no 1º trimestre e nas últimas 6 semanas; cafeína e orfenadrina sem segurança estabelecida)." },
    alergia: ["dipirona"],
    contra: ["Glaucoma de ângulo fechado", "Hiperplasia prostática / retenção urinária, obstrução intestinal", "Miastenia gravis", "Discrasia sanguínea, deficiência de G6PD, porfiria (dipirona)", "Somar a dipirona do composto à de outras prescrições"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Dipirona 300 mg + citrato de orfenadrina 35 mg + cafeína 50 mg --- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 8 em 8 horas, se dor, por até 5 dias.\n   Não tomar dipirona isolada junto." }
    ] },
  { id: "ciclobenzaprina", nomes: ["Ciclobenzaprina"], classe: "analgesicos", receita: "simples",
    tags: ["anticolinergico", "sedativo", "serotoninergico"],
    usos: "Espasmo muscular agudo (lombalgia, cervicalgia) como adjuvante, por curto prazo (até 2–3 semanas)",
    adulto: "5–10 mg VO até 3×/dia (máx 30 mg/dia); preferir 5 mg à noite no idoso",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar apenas se necessário, por curto prazo." },
    alergia: [],
    contra: ["Uso de IMAO nos últimos 14 dias", "IAM recente, arritmia, bloqueio, IC", "Hipertireoidismo", "Glaucoma, retenção urinária", "Idosos: sedação e efeito anticolinérgico (critérios de Beers)", "Com ISRS/tramadol: risco de síndrome serotoninérgica", "Hepatopatia: evitar ou reduzir"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Cloridrato de ciclobenzaprina 5 mg -------- 15 comprimidos\n   Tomar 1 comprimido à noite (pode chegar a 1 comprimido de 8 em 8 horas), por até 2 semanas.\n   Pode dar sonolência: não dirigir e não ingerir álcool." },
      { contexto: "Adulto — 10 mg", texto: "USO ORAL\n1. Cloridrato de ciclobenzaprina 10 mg ------- 15 comprimidos\n   Tomar 1 comprimido à noite por até 2 semanas (máximo 30 mg/dia)." }
    ] },

  /* ---------- AINE ---------- */
  { id: "cetorolaco", nomes: ["Cetorolaco", "cetorolaco de trometamol", "toragesic"], classe: "aine", receita: "simples",
    tags: ["aine"],
    usos: "Dor aguda moderada a forte (cólica renal, pós-operatório) por no máximo 5 dias",
    adulto: "SL 10 mg 6–8h (máx 40 mg/dia). IV/IM 30 mg 6/6h (máx 120 mg/dia); ≥ 65 anos, < 50 kg ou DRC leve: 15 mg (máx 60 mg/dia). Máx 5 dias no total",
    renal: [{ abaixo: 30, texto: "Contraindicado." }, { abaixo: 60, texto: "Dose reduzida (15 mg IV/IM; máx 60 mg/dia) e curto prazo; monitorar creatinina." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado no trabalho de parto e no 3º trimestre; evitar em toda a gestação." },
    alergia: ["aine"],
    contra: ["Úlcera ou sangramento digestivo, distúrbio de coagulação", "Uso de anticoagulante, AAS ou outro AINE", "Hipovolemia, desidratação, dengue", "Profilaxia antes de cirurgia (risco de sangramento)", "Não ultrapassar 5 dias (VO + parenteral)"],
    prescrever: [
      { contexto: "Adulto — ambulatorial (sublingual)", texto: "USO SUBLINGUAL\n1. Cetorolaco de trometamol 10 mg ------------ 10 comprimidos\n   Colocar 1 comprimido embaixo da língua de 8 em 8 horas, se dor, por até 3 dias.\n   Máximo 4 comprimidos por dia." },
      { contexto: "Hospitalar / PS", texto: "Cetorolaco 30 mg/mL — 1 mL (30 mg) IV lento em ≥ 15 s ou IM, até 6/6h (máx 120 mg/dia).\n≥ 65 anos, < 50 kg ou DRC leve: 15 mg (0,5 mL) até 6/6h (máx 60 mg/dia). Máximo 5 dias." }
    ] },
  { id: "nimesulida", nomes: ["Nimesulida"], classe: "aine", receita: "simples",
    tags: ["aine"],
    usos: "Dor aguda e dismenorreia (curto prazo); não é 1ª escolha pelo risco hepático",
    adulto: "100 mg VO 12/12h após refeições, menor tempo possível (máx 15 dias)",
    renal: [{ abaixo: 30, texto: "Contraindicada." }, { abaixo: 60, texto: "Cautela; monitorar função renal." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada no 3º trimestre e na lactação; evitar em toda a gestação." },
    alergia: ["aine"],
    contra: ["Hepatopatia, etilismo, uso de outros hepatotóxicos (hepatotoxicidade)", "Úlcera ou sangramento digestivo", "Uso pediátrico: não recomendado (< 12 anos contraindicada na Europa)", "Dengue, desidratação"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Nimesulida 100 mg -------------------------- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após as refeições, por 5 dias." }
    ] },
  { id: "meloxicam", nomes: ["Meloxicam"], classe: "aine", receita: "simples",
    tags: ["aine"],
    usos: "Osteoartrite, artrite reumatoide, dor musculoesquelética (AINE preferencial COX-2, dose única diária)",
    adulto: "7,5–15 mg VO 1×/dia (máx 15 mg/dia)",
    renal: [{ abaixo: 30, texto: "Contraindicado se não dialítico (dialítico: máx 7,5 mg/dia)." }, { abaixo: 60, texto: "Cautela; menor dose e monitorar creatinina e K." }],
    gestacao: { nivel: "evitar", texto: "Evitar; contraindicado a partir de 20 semanas." },
    alergia: ["aine"],
    contra: ["Úlcera ou sangramento digestivo", "Doença cardiovascular grave, IC descompensada", "Dengue, desidratação"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Meloxicam 15 mg ---------------------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, após uma refeição, por 10 dias." },
      { contexto: "Adulto — idoso / uso prolongado", texto: "USO ORAL\n1. Meloxicam 7,5 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, após uma refeição. Associar IBP se risco gastrointestinal." }
    ] },

  /* ---------- opioides ---------- */
  { id: "fentanil", nomes: ["Fentanil", "fentanila", "citrato de fentanila"], classe: "opioides", receita: "A",
    tags: ["opioide", "serotoninergico"],
    usos: "Analgesia e sedação hospitalar (PS, sala de emergência, UTI, sequência rápida de intubação); adesivo transdérmico só em dor crônica com tolerância a opioide",
    ped: { dose: 1, faixa: "0,5–1 mcg/kg IV lento (analgesia)", intervalo: "a cada 30–60 min se necessário", maxDose: 50, unidade: "mcg" },
    apres: [{ rotulo: "injetável 50 mcg/mL", mgPorMl: 50 }],
    adulto: "Analgesia: 0,5–1 mcg/kg IV lento (25–100 mcg), repetir a cada 30–60 min. Infusão contínua: 1–2 mcg/kg/h (titular). IOT: 1–3 mcg/kg",
    renal: [{ abaixo: 30, texto: "Opioide preferido na DRC (sem metabólito ativo); titular, pode precisar de dose menor." }],
    gestacao: { nivel: "cautela", texto: "Usar com indicação; depressão respiratória neonatal se usado perto do parto." },
    alergia: ["opioides"],
    contra: ["Depressão respiratória sem suporte ventilatório", "Bolus rápido ou dose alta: rigidez torácica", "Inibidores de CYP3A4 (claritromicina, fluconazol) aumentam o nível", "Uso de IMAO", "Adesivo: nunca em paciente virgem de opioide ou em dor aguda"],
    prescrever: [
      { contexto: "Hospitalar / PS — analgesia em bolus", texto: "Fentanil 50 mcg/mL — 1 mL (50 mcg) + AD 4 mL (10 mcg/mL).\nFazer 0,5–1 mcg/kg IV lento em 1–2 min (ex.: 70 kg = 3,5–7 mL); repetir a cada 30–60 min se dor.\nMonitorar FR, SpO2; naloxona disponível." },
      { contexto: "Hospitalar / UTI — infusão contínua", texto: "Fentanil 50 mcg/mL — 20 mL (1.000 mcg) + SF 0,9% 80 mL (10 mcg/mL) em bomba de infusão.\nIniciar 1 mcg/kg/h (ex.: 70 kg = 7 mL/h), titular por dor/sedação (habitual 1–2 mcg/kg/h)." },
      { contexto: "Criança — hospitalar", texto: "Fentanil 50 mcg/mL — diluir 1 mL em AD 4 mL (10 mcg/mL).\nFazer ___ mL IV lento; repetir a cada 30–60 min se necessário.\n(0,5–1 mcg/kg/dose; máximo 50 mcg por dose inicial)" }
    ] },
  { id: "metadona", nomes: ["Metadona", "cloridrato de metadona"], classe: "opioides", receita: "A",
    tags: ["opioide", "qt"],
    usos: "Dor oncológica/crônica refratária e dor neuropática (preferir com especialista/paliativista); tratamento da dependência de opioide",
    adulto: "Virgem de opioide: 2,5 mg VO 8/8h ou 12/12h; aumentar no máximo a cada 5–7 dias. Conversão de outro opioide: com especialista",
    renal: [{ abaixo: 10, texto: "Reduzir a dose e titular devagar." }],
    gestacao: { nivel: "cautela", texto: "Mantida na gestante em tratamento de dependência de opioide (com equipe especializada); síndrome de abstinência neonatal." },
    alergia: ["opioides"],
    contra: ["Meia-vida longa e variável: acúmulo e depressão respiratória tardia (dias 2–5)", "QT longo: ECG basal e após ajustes; evitar com outros que prolongam QT", "Indutores (rifampicina, fenitoína) reduzem e inibidores aumentam o nível", "Não usar para dor aguda no PS"],
    prescrever: [
      { contexto: "Ambulatorial — dor (iniciar)", texto: NOTIF_A + "USO ORAL\n1. Cloridrato de metadona 5 mg --------------- 30 (trinta) comprimidos\n   Tomar meio comprimido (2,5 mg) de 12 em 12 horas.\n   Não aumentar a dose por conta própria; retorno em 7 dias.\n2. Associar laxante enquanto usar.\n(Notificação A cobre até 30 dias; ECG antes de iniciar.)" }
    ] },

  /* ---------- antieméticos ---------- */
  { id: "bromoprida", nomes: ["Bromoprida"], classe: "antiemeticos", receita: "simples",
    tags: ["antidopaminergico"],
    usos: "Náusea, vômitos e dispepsia funcional (procinético)",
    ped: { dose: 0.5, faixa: "0,5–1 mg/kg/dia ÷ 3", porDia: true, divisoes: 3, intervalo: "8/8h", maxDose: 10 },
    apres: [{ rotulo: "gotas 4 mg/mL", mgPorMl: 4 }, { rotulo: "solução oral 1 mg/mL", mgPorMl: 1 }, { rotulo: "injetável 5 mg/mL", mgPorMl: 5 }, { rotulo: "cápsula 10 mg", mgPorComp: 10 }],
    adulto: "10 mg VO/IM/IV 8/8h (até 20 mg por dose)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir dimenidrinato + piridoxina, metoclopramida ou ondansetrona." },
    alergia: [],
    contra: ["Obstrução, perfuração ou hemorragia digestiva", "Feocromocitoma, epilepsia", "Reação extrapiramidal (mais em crianças e jovens); não associar a metoclopramida", "Parkinson"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Bromoprida 10 mg --------------------------- 15 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas, 15 a 30 minutos antes das refeições, se náusea, por até 5 dias." },
      { contexto: "Criança — solução oral 1 mg/mL", texto: "USO ORAL\n1. Bromoprida solução oral 1 mg/mL ----------- 1 frasco\n   Dar ___ mL de 8 em 8 horas, antes das refeições, se vômito.\n   (0,5–1 mg/kg/dia ÷ 3; máximo 10 mg por dose)" },
      { contexto: "Hospitalar / PS", texto: "Bromoprida 5 mg/mL — 2 mL (10 mg) IV lento ou IM, até 8/8h (ou em SF 0,9% 100 mL IV em 15 min)." }
    ] },
  { id: "dimenidrinato", nomes: ["Dimenidrinato", "dimenidrinato + piridoxina", "dramin"], classe: "antiemeticos", receita: "simples",
    tags: ["sedativo", "anticolinergico"],
    usos: "Náusea e vômitos (inclusive na gestação e hiperêmese), cinetose, vertigem",
    adulto: "50 mg (com piridoxina 10 mg) VO 4/4h a 6/6h (máx 400 mg/dia); IV/IM conforme apresentação",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; dimenidrinato + piridoxina é opção de 1ª linha para náusea e vômitos da gestação." },
    alergia: [],
    contra: ["< 2 anos", "Glaucoma de ângulo fechado", "Retenção urinária, hiperplasia prostática", "Porfiria", "Sonolência: não dirigir; idosos (critérios de Beers)"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Dimenidrinato 50 mg + cloridrato de piridoxina 10 mg --- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas, se náusea ou vômito.\n   Pode dar sonolência." },
      { contexto: "Gestante — náusea e vômitos", texto: "USO ORAL\n1. Dimenidrinato 50 mg + cloridrato de piridoxina 10 mg --- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas, se náusea, de preferência 30 minutos antes das refeições.\n   Fracionar a dieta (pequenas refeições várias vezes ao dia)." },
      { contexto: "Hospitalar / PS — IV", texto: "Dimenidrinato 30 mg + piridoxina 50 mg (ampola 10 mL para uso IV) — 1 ampola IV lento ou diluída em SF 0,9% 100 mL em 15–30 min, até 6/6h." }
    ] },
  { id: "domperidona", nomes: ["Domperidona"], classe: "antiemeticos", receita: "simples",
    tags: ["qt"],
    usos: "Náusea e vômitos, gastroparesia (não atravessa a barreira hematoencefálica: pouco efeito extrapiramidal)",
    adulto: "10 mg VO até 3×/dia antes das refeições (máx 30 mg/dia), por até 7 dias",
    renal: [{ abaixo: 30, texto: "Reduzir a frequência para 1–2×/dia." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar só se benefício superar o risco." },
    alergia: [],
    contra: ["QT longo, cardiopatia, distúrbio eletrolítico", "Inibidores potentes de CYP3A4 (claritromicina, fluconazol, cetoconazol)", "Hepatopatia moderada a grave", "Prolactinoma", "Hemorragia, obstrução ou perfuração digestiva"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Domperidona 10 mg -------------------------- 21 comprimidos\n   Tomar 1 comprimido 15 a 30 minutos antes das refeições, até 3 vezes ao dia, por até 7 dias." },
      { contexto: "Criança (< 35 kg) — suspensão 1 mg/mL", texto: "USO ORAL\n1. Domperidona suspensão oral 1 mg/mL -------- 1 frasco\n   Dar ___ mL antes das refeições, até 3 vezes ao dia, por até 7 dias.\n   (0,25 mg/kg/dose; máximo 0,75 mg/kg/dia)" }
    ] },

  /* ---------- protetores gástricos ---------- */
  { id: "famotidina", nomes: ["Famotidina"], classe: "antiacidos", receita: "simples",
    tags: [],
    usos: "DRGE e dispepsia leves, úlcera péptica (alternativa ao IBP; ranitidina saiu do mercado)",
    adulto: "20 mg VO 12/12h ou 40 mg à noite",
    renal: [{ abaixo: 50, texto: "Reduzir a dose em 50% ou dar a cada 36–48 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [],
    contra: ["Confusão mental em idosos com DRC (ajustar dose)"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Famotidina 20 mg --------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 30 dias." },
      { contexto: "Adulto — dose noturna", texto: "USO ORAL\n1. Famotidina 40 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido à noite, ao deitar, por 30 dias." }
    ] },
  { id: "sucralfato", nomes: ["Sucralfato"], classe: "antiacidos", receita: "simples",
    tags: ["quelante"],
    usos: "Úlcera péptica e gastrite (protetor de mucosa), opção na gestação",
    adulto: "1 g VO 4×/dia (1 h antes das refeições e ao deitar) ou 2 g 12/12h",
    renal: [{ abaixo: 30, texto: "Evitar uso prolongado (acúmulo de alumínio)." }],
    gestacao: { nivel: "compativel", texto: "Compatível (absorção mínima)." },
    alergia: [],
    contra: ["Reduz a absorção de quinolonas, levotiroxina, digoxina, fenitoína, varfarina: separar 2 h", "DRC: acúmulo de alumínio", "Constipação"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Sucralfato 1 g ----------------------------- 56 comprimidos\n   Tomar 1 comprimido 1 hora antes do café, do almoço e do jantar e 1 ao deitar, por 14 dias.\n   Tomar outros remédios 2 horas antes ou depois." }
    ] },
  { id: "antiacido-al-mg", nomes: ["Hidróxido de alumínio", "hidroxido de aluminio", "hidróxido de magnésio", "hidroxido de magnesio"], classe: "antiacidos", receita: "simples",
    tags: ["quelante"],
    usos: "Alívio sintomático de pirose e dispepsia (uso ocasional)",
    adulto: "Suspensão: 10–20 mL VO 1–3 h após as refeições e ao deitar, se sintomas",
    renal: [{ abaixo: 30, texto: "Evitar uso regular (acúmulo de alumínio e magnésio)." }],
    gestacao: { nivel: "compativel", texto: "Compatível no uso ocasional." },
    alergia: [],
    contra: ["Quela quinolonas, tetraciclinas, levotiroxina e ferro: separar 2 h antes ou 4 h depois", "DRC: hipermagnesemia e acúmulo de alumínio", "Alumínio constipa; magnésio causa diarreia"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Hidróxido de alumínio + hidróxido de magnésio suspensão oral --- 1 frasco\n   Tomar 10 mL (1 colher de sopa) 1 hora após as refeições e ao deitar, se azia.\n   Tomar outros remédios 2 horas antes." }
    ] },

  /* ---------- laxantes, antidiarreicos, antiespasmódicos ---------- */
  { id: "escopolamina", nomes: ["Escopolamina", "butilbrometo de escopolamina", "butilescopolamina", "hioscina", "buscopan"], classe: "intestinais", receita: "simples",
    tags: ["anticolinergico"],
    usos: "Cólica abdominal, biliar, renal e menstrual (antiespasmódico)",
    adulto: "10–20 mg VO 3–5×/dia; IV/IM 20 mg, pode repetir (máx 100 mg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; uso pontual quando necessário." },
    alergia: [],
    contra: ["Glaucoma de ângulo fechado", "Retenção urinária, hiperplasia prostática", "Taquiarritmia", "Miastenia gravis", "Megacólon, íleo, obstrução intestinal"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Butilbrometo de escopolamina 10 mg -------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 8 em 8 horas, se cólica." },
      { contexto: "Hospitalar / PS", texto: "Butilbrometo de escopolamina 20 mg/mL — 1 ampola IV lento (diluída em AD 10 mL ou em SF 0,9% 100 mL) ou IM, até 8/8h (máx 100 mg/dia).\nPode associar dipirona 1 g IV na mesma solução de SF." }
    ] },
  { id: "escopolamina-dipirona", nomes: ["Escopolamina + dipirona", "butilescopolamina + dipirona", "hioscina + dipirona", "buscopan composto"], classe: "intestinais", receita: "simples",
    tags: ["anticolinergico", "analgesico"],
    usos: "Cólica abdominal, biliar, renal e menstrual com dor",
    adulto: "Comprimido (escopolamina 10 mg + dipirona 250 mg): 1–2 comprimidos VO 3–4×/dia",
    renal: [{ abaixo: 30, texto: "Evitar uso repetido (dipirona)." }],
    gestacao: { nivel: "evitar", texto: "Evitar (dipirona no 1º trimestre e nas últimas 6 semanas)." },
    alergia: ["dipirona"],
    contra: ["Contraindicações da escopolamina (glaucoma, retenção urinária, taquiarritmia, miastenia, megacólon)", "Contraindicações da dipirona (discrasia, G6PD, porfiria)", "Somar a dipirona do composto à de outras prescrições"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Butilbrometo de escopolamina 10 mg + dipirona 250 mg --- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas, se cólica, por até 5 dias.\n   Não tomar dipirona isolada junto." }
    ] },
  { id: "simeticona", nomes: ["Simeticona", "dimeticona", "luftal"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Excesso de gases, distensão abdominal; preparo para exame de imagem/endoscopia",
    adulto: "40–125 mg VO 3–4×/dia, após as refeições e ao deitar",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (não absorvida)." },
    alergia: [],
    contra: ["Sem benefício comprovado na cólica do lactente", "Dor abdominal com sinais de alarme: investigar"],
    prescrever: [
      { contexto: "Adulto — comprimido", texto: "USO ORAL\n1. Simeticona 40 mg --------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 8 em 8 horas, após as refeições, se gases." },
      { contexto: "Adulto — gotas 75 mg/mL", texto: "USO ORAL\n1. Simeticona gotas 75 mg/mL ----------------- 1 frasco\n   Tomar 16 gotas de 8 em 8 horas, após as refeições, se gases." }
    ] },
  { id: "lactulose", nomes: ["Lactulose"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Constipação intestinal (adulto, criança, gestante) e encefalopatia hepática",
    adulto: "Constipação: 15–30 mL/dia VO. Encefalopatia hepática: 20–30 mL 2–4×/dia até 2–3 evacuações pastosas por dia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (laxante osmótico de escolha na gestação)." },
    alergia: [],
    contra: ["Galactosemia", "Obstrução intestinal", "Distensão e flatulência no início; diarreia excessiva causa distúrbio hidroeletrolítico"],
    prescrever: [
      { contexto: "Adulto — constipação", texto: "USO ORAL\n1. Lactulose xarope 667 mg/mL ---------------- 1 frasco\n   Tomar 15 mL (1 colher de sopa) 1 vez ao dia; ajustar para 15–30 mL até evacuações macias diárias.\n   Beber bastante água e aumentar fibras na dieta." },
      { contexto: "Criança — constipação", texto: "USO ORAL\n1. Lactulose xarope 667 mg/mL ---------------- 1 frasco\n   Dar ___ mL 1 vez ao dia (ou dividido em 2 vezes); ajustar até fezes macias diárias.\n   (1–2 g/kg/dia = 1,5–3 mL/kg/dia em 1–2 tomadas)" },
      { contexto: "Hospitalar — encefalopatia hepática", texto: "Lactulose 667 mg/mL — 20–30 mL VO/SNG de 6/6h a 12/12h; titular para 2–3 evacuações pastosas por dia.\nSe não tolera VO: enema de retenção com lactulose 300 mL + AD 700 mL, até 6/6h." }
    ] },
  { id: "bisacodil", nomes: ["Bisacodil"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Constipação ocasional, constipação por opioide, preparo intestinal",
    adulto: "5–10 mg VO à noite; supositório 10 mg via retal 1×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Uso pontual e por curto prazo se laxante osmótico/fibras falharem." },
    alergia: [],
    contra: ["Obstrução intestinal, abdome agudo, apendicite", "Desidratação grave", "Uso crônico: cólica e hipocalemia", "Não tomar junto com leite ou antiácido (desfaz o revestimento)"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Bisacodil 5 mg ----------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos à noite, se não evacuar, engolidos inteiros.\n   Não tomar junto com leite ou antiácido." },
      { contexto: "Adulto — supositório", texto: "USO RETAL\n1. Bisacodil supositório 10 mg ---------------- 1 caixa\n   Aplicar 1 supositório via retal 1 vez ao dia, se não evacuar." }
    ] },
  { id: "oleo-mineral", nomes: ["Óleo mineral", "oleo mineral", "vaselina líquida", "vaselina liquida", "petrolato líquido"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Constipação e fecaloma (lubrificante); em criança, após 1 ano e sem risco de aspiração",
    adulto: "15–45 mL VO 1×/dia, longe das refeições",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar uso prolongado (reduz absorção de vitaminas lipossolúveis); preferir lactulose ou macrogol." },
    alergia: [],
    contra: ["< 1 ano", "Risco de aspiração (pneumonia lipoídica): disfagia, DRGE, vômitos, alteração neurológica, acamado", "Não dar antes de deitar nem em posição deitada", "Uso prolongado: má absorção de vitaminas A, D, E, K"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Óleo mineral ------------------------------ 1 frasco\n   Tomar 15 mL (1 colher de sopa) 1 vez ao dia, longe das refeições, sentado.\n   Não tomar antes de deitar." },
      { contexto: "Criança (> 1 ano, sem risco de aspiração)", texto: "USO ORAL\n1. Óleo mineral ------------------------------ 1 frasco\n   Dar ___ mL 1 vez ao dia, longe das refeições, com a criança sentada.\n   (1–3 mL/kg/dia; máximo 90 mL/dia; não dar antes de deitar)" }
    ] },
  { id: "macrogol", nomes: ["Macrogol", "polietilenoglicol", "PEG 3350", "PEG 4000"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Constipação crônica e desimpactação fecal (1ª linha em criança); preparo de colonoscopia (soluções próprias)",
    adulto: "Macrogol 3350 cerca de 17 g (1 sachê) em 200 mL de água VO 1×/dia, ajustar",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (absorção mínima)." },
    alergia: [],
    contra: ["Obstrução ou perfuração intestinal, íleo", "Doença inflamatória intestinal grave / megacólon tóxico", "Diluir sempre em água (risco de desidratação se pouco líquido)"],
    prescrever: [
      { contexto: "Adulto — constipação", texto: "USO ORAL\n1. Macrogol 3350 pó para solução oral -------- 1 caixa (sachês) ou frasco\n   Dissolver 1 sachê (ou 17 g do pó) em 1 copo de água (200 mL) e tomar 1 vez ao dia.\n   Ajustar a dose até evacuações macias diárias." },
      { contexto: "Criança — manutenção", texto: "USO ORAL\n1. Macrogol 3350 pó para solução oral -------- 1 frasco\n   Dissolver ___ g em água (cerca de 10 mL de água por grama) e dar 1 vez ao dia.\n   (0,4–0,8 g/kg/dia; máximo 17 g/dia; ajustar até fezes macias diárias)" },
      { contexto: "Criança — desimpactação fecal (3–6 dias)", texto: "USO ORAL\n1. Macrogol 3350 pó para solução oral -------- 1 frasco\n   Dissolver ___ g em água e dar 1 vez ao dia por 3 a 6 dias; depois passar para a dose de manutenção.\n   (1–1,5 g/kg/dia)" }
    ] },
  { id: "loperamida", nomes: ["Loperamida"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Diarreia aguda não invasiva no adulto (sem febre ou sangue) e diarreia crônica funcional",
    adulto: "4 mg VO, depois 2 mg após cada evacuação líquida (máx 16 mg/dia), por até 2 dias na diarreia aguda",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Evitar no 1º trimestre; uso pontual depois, se necessário. Priorizar hidratação." },
    alergia: [],
    contra: ["Disenteria (sangue nas fezes) ou febre alta", "Colite pseudomembranosa (C. difficile), colite ulcerativa aguda", "Criança: não recomendada na diarreia aguda (MS); contraindicada < 2 anos", "Doses altas: arritmia e QT longo", "Parar se distensão abdominal ou constipação"],
    prescrever: [
      { contexto: "Adulto — diarreia aguda", texto: "USO ORAL\n1. Cloridrato de loperamida 2 mg ------------- 12 comprimidos\n   Tomar 2 comprimidos na primeira evacuação líquida e depois 1 comprimido após cada evacuação líquida.\n   Máximo 8 comprimidos por dia. Parar se as fezes ficarem firmes ou se houver febre ou sangue nas fezes.\n2. Manter soro de reidratação oral após cada evacuação." }
    ] },
  { id: "racecadotrila", nomes: ["Racecadotrila", "racecadotril", "tiorfan"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Diarreia aguda (antissecretor), sempre junto com reidratação oral",
    porPeso: [
      { maxKg: 9, texto: "> 3 meses: 10 mg (1 sachê de 10 mg) de 8/8h até parar a diarreia (máx 7 dias)" },
      { maxKg: 13, texto: "20 mg (2 sachês de 10 mg) de 8/8h até parar a diarreia (máx 7 dias)" },
      { maxKg: 27, texto: "30 mg (1 sachê de 30 mg) de 8/8h até parar a diarreia (máx 7 dias)" },
      { maxKg: 999, texto: "Criança > 27 kg: 60 mg (2 sachês de 30 mg) de 8/8h. Adulto: 100 mg de 8/8h (máx 7 dias)" }
    ],
    adulto: "100 mg VO 8/8h (1ª dose a qualquer hora) até parar a diarreia, máx 7 dias",
    renal: [{ abaixo: 30, texto: "Sem dados suficientes; usar com cautela." }],
    gestacao: { nivel: "evitar", texto: "Evitar (sem dados de segurança)." },
    alergia: [],
    contra: ["< 3 meses", "Diarreia com sangue ou febre (investigar causa)", "Uso de IECA: risco de angioedema", "Intolerância à frutose / má absorção de glicose-galactose (sachês com sacarose)"],
    prescrever: [
      { contexto: "Adulto — diarreia aguda", texto: "USO ORAL\n1. Racecadotrila 100 mg ---------------------- 1 caixa\n   Tomar 1 cápsula de 8 em 8 horas até parar a diarreia (máximo 7 dias).\n2. Manter soro de reidratação oral após cada evacuação." },
      { contexto: "Criança — sachê (1,5 mg/kg/dose)", texto: "USO ORAL\n1. Racecadotrila sachê ___ mg ---------------- 1 caixa\n   Dar ___ sachê(s) dissolvido(s) em água ou alimento de 8 em 8 horas até parar a diarreia (máximo 7 dias).\n   (1,5 mg/kg/dose: < 9 kg = 10 mg; 9–13 kg = 20 mg; 13–27 kg = 30 mg; > 27 kg = 60 mg; > 3 meses)\n2. Manter soro de reidratação oral após cada evacuação." }
    ] },
  { id: "sro", nomes: ["Sais de reidratação oral", "soro de reidratação oral", "SRO", "TRO"], classe: "intestinais", receita: "simples",
    tags: [],
    usos: "Prevenção e tratamento da desidratação na diarreia aguda (planos A e B do MS)",
    porPeso: [{ maxKg: 999, texto: "Plano B: 50–100 mL/kg em 4–6 h na unidade. Plano A: após cada evacuação, < 1 ano 50–100 mL; 1–10 anos 100–200 mL; > 10 anos à vontade" }],
    adulto: "Após cada evacuação líquida, à vontade; desidratação (plano B): 50–100 mL/kg em 4–6 h",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [],
    contra: ["Desidratação grave, choque, íleo ou alteração do nível de consciência: hidratação venosa (plano C)", "Vômitos persistentes: oferecer em pequenos volumes frequentes; se falhar, SNG ou IV", "Dissolver só em água filtrada/fervida fria; não misturar com leite, suco ou refrigerante; descartar após 24 h"],
    prescrever: [
      { contexto: "Plano A — domicílio (criança)", texto: "USO ORAL\n1. Sais de reidratação oral (envelope para 1 litro) --- 4 envelopes\n   Dissolver 1 envelope em 1 litro de água filtrada ou fervida (fria). Usar em até 24 horas.\n   Oferecer após cada evacuação líquida: menores de 1 ano 50–100 mL; 1 a 10 anos 100–200 mL; maiores de 10 anos à vontade.\n2. Manter a alimentação habitual e o aleitamento materno.\n(MS: associar zinco por 10–14 dias na criança.) Voltar se piorar, sangue nas fezes, vômitos que não param, sede intensa ou pouca urina." },
      { contexto: "Plano A — adulto", texto: "USO ORAL\n1. Sais de reidratação oral (envelope para 1 litro) --- 4 envelopes\n   Dissolver 1 envelope em 1 litro de água filtrada ou fervida (fria). Usar em até 24 horas.\n   Beber à vontade, principalmente após cada evacuação líquida ou vômito." },
      { contexto: "Plano B — na unidade", texto: "Sais de reidratação oral — ___ mL VO em 4–6 h, em pequenos volumes frequentes (copo ou colher).\n(50–100 mL/kg em 4–6 h; reavaliar a hidratação de hora em hora; se melhorar, plano A; se piorar ou falhar, plano C)" }
    ] }
]);
})();
