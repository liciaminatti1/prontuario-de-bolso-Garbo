// Náuseas e vômitos na gestação e hiperêmese gravídica
registrarFicha({
  id: "nauseas-vomitos-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Náuseas e vômitos na gestação e hiperêmese gravídica",
  resumo: "Náuseas e vômitos que começam antes de 10 semanas e melhoram até 16–20 semanas. Hiperêmese: vômitos persistentes com desidratação, perda de peso (> 5%), cetonúria ou distúrbio hidroeletrolítico.",
  palavrasChave: "hiperemese gravidica nauseas vomitos enjoo gravidez gestante puqe tiamina wernicke ondansetrona metoclopramida dimenidrinato piridoxina doxilamina prometazina cetonuria hipocalemia",
  critico: {
    tempo: "Tiamina antes de soro glicosado",
    texto: "Na gestante com vômitos prolongados, dar tiamina antes de qualquer glicose (risco de encefalopatia de Wernicke). Vômitos que começam após 10–12 semanas ou com dor, febre ou PA alta: procurar outra causa."
  },
  alarmes: [
    "Incapacidade de manter líquidos por 24 h, diurese reduzida, hipotensão, taquicardia",
    "Perda de peso > 5% do peso pré-gestacional",
    "Confusão, ataxia, nistagmo, oftalmoplegia (Wernicke)",
    "Hematêmese",
    "Dor abdominal, febre, icterícia, diarreia intensa (não é só hiperêmese)",
    "Início após 10–12 semanas, ou após 20 semanas com PA alta ou dor epigástrica (pré-eclâmpsia/HELLP, esteatose aguda)",
    "K < 3,0 mEq/L, Na < 130 mEq/L, creatinina elevada"
  ],
  condutaInicial: [
    "Avaliar gravidade: PUQE-24, hidratação, peso atual × pré-gestacional, diurese",
    "Exame físico completo; excluir abdome agudo, ITU, hepatite, tireotoxicose",
    "Leve (PUQE ≤ 6) e hidratada: dieta fracionada + antiemético VO na UBS",
    "Moderada/grave ou desidratada: hidratação EV na UBS/PS, eletrólitos, cetonúria",
    "Tiamina 100 mg IV antes de soro glicosado em quem vomita há várias semanas ou come pouco",
    "Antiemético EV (ondansetrona ou metoclopramida) e reavaliar em 2–4 h",
    "USG obstétrica se ainda não realizada (gemelar, mola)"
  ],
  fataisExcluir: [
    "Encefalopatia de Wernicke",
    "Hipocalemia grave com arritmia",
    "Mola hidatiforme / gestação múltipla (hCG alto)",
    "Pré-eclâmpsia, HELLP e esteatose hepática aguda (2ª metade da gestação)",
    "Cetoacidose diabética, pancreatite, apendicite, colecistite, obstrução intestinal",
    "Ruptura esofágica (Boerhaave) após vômitos intensos"
  ],
  proximaDecisao: "Tolera líquidos, sem cetonúria importante e eletrólitos normais após hidratação → alta com antiemético VO regular e retorno em 24–72 h. Não tolera VO após 2 linhas de antiemético EV, K < 3,0, Na < 130, IRA ou perda de peso > 5% → internar.",
  clinica: {
    anamnese: [
      "IG (início típico antes de 10 semanas; pico 8–12 semanas)",
      "Número de vômitos/dia, horas de náusea, consegue beber e comer? (PUQE-24)",
      "Perda de peso, tontura, diurese, sialorreia",
      "Hiperêmese em gestação anterior",
      "Dor abdominal, febre, diarreia, disúria, cefaleia, icterícia (sugerem outra causa)",
      "Medicações (ferro pode piorar náusea — pausar temporariamente), DM, tireoide",
      "Impacto emocional, rede de apoio; sintomas depressivos"
    ],
    exameFisico: [
      "PA, FC, temperatura, peso",
      "Mucosas, turgor, enchimento capilar",
      "Abdome: dor localizada, Murphy, Blumberg, Giordano",
      "Tireoide (bócio, tremor, exoftalmia)",
      "Neurológico: nistagmo, ataxia, confusão (Wernicke)",
      "Altura uterina incompatível com IG (mola, gemelar)"
    ],
    diferenciais: [
      { dx: "Infecção urinária / pielonefrite", pista: "Disúria, febre, Giordano positivo, urocultura" },
      { dx: "Gastroenterite, hepatite viral", pista: "Diarreia, febre, contato; transaminases muito altas, icterícia" },
      { dx: "Colecistite, pancreatite, apendicite", pista: "Dor abdominal localizada; lipase, USG" },
      { dx: "Hipertireoidismo (Graves)", pista: "Bócio, oftalmopatia, sintomas antes da gestação. TSH baixo isolado com T4L pouco elevado é comum na hiperêmese (tireotoxicose gestacional transitória)" },
      { dx: "Cetoacidose diabética", pista: "DM prévio, glicemia alta, acidose" },
      { dx: "Doença trofoblástica gestacional", pista: "hCG muito alto, sangramento, útero grande, USG típica" },
      { dx: "Pré-eclâmpsia / HELLP / esteatose aguda", pista: "Após 20 semanas, PA alta, dor epigástrica, plaquetopenia, transaminases altas, hipoglicemia" }
    ],
    gravidade: [
      "PUQE-24 (náusea em horas, nº de vômitos, nº de ânsias em 24 h; 3–15 pontos): ≤ 6 leve · 7–11 moderada · ≥ 12 grave",
      "Hiperêmese: vômitos persistentes + perda de peso > 5% e/ou desidratação e/ou cetonúria/distúrbio eletrolítico",
      "Grave: incapacidade de manter VO, hipocalemia, hiponatremia, IRA pré-renal, sinais neurológicos"
    ]
  },
  exames: [
    {
      nome: "Eletrólitos e função renal",
      pedido: "Sódio, potássio, cloro, magnésio, fósforo, ureia, creatinina, glicemia.",
      porQue: "Avaliar desidratação e distúrbios que exigem internação.",
      esperar: "Hipocalemia, hiponatremia, alcalose metabólica hipoclorêmica, ureia alta.",
      interpretacao: "K < 3,0 ou Na < 130 ou IRA → internar.",
      limitacoes: "Normais não excluem desidratação clínica."
    },
    {
      nome: "Urina tipo 1 e urocultura",
      pedido: "Urina tipo 1 (EAS) com pesquisa de corpos cetônicos. Urocultura com antibiograma.",
      porQue: "Cetonúria indica jejum/catabolismo; ITU é causa e complicação.",
      esperar: "Cetonúria 1+ a 3+ na hiperêmese.",
      interpretacao: "Cetonúria isolada não define gravidade; usar com a clínica.",
      limitacoes: "—"
    },
    {
      nome: "Hemograma, função hepática e tireoide",
      pedido: "Hemograma completo. TGO, TGP, bilirrubinas. TSH e T4 livre. Amilase e lipase se dor abdominal.",
      porQue: "Hemoconcentração; excluir hepatite, pancreatite, hipertireoidismo.",
      esperar: "Hematócrito alto; transaminases discretamente elevadas em até metade dos casos graves; TSH baixo transitório.",
      interpretacao: "Transaminases muito altas ou icterícia → outra causa. TSH baixo com T4L muito alto, bócio ou oftalmopatia → Graves.",
      limitacoes: "Não tratar com antitireoidiano a tireotoxicose gestacional transitória."
    },
    {
      nome: "Ultrassonografia obstétrica",
      pedido: "Ultrassonografia obstétrica (transvaginal se < 12 semanas).",
      porQue: "Excluir gestação múltipla e doença trofoblástica; confirmar vitalidade e IG.",
      esperar: "—",
      interpretacao: "Imagem de mola → encaminhar para esvaziamento uterino e seguimento de hCG.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Medidas não farmacológicas",
      linha: "l1",
      dose: "Refeições pequenas e frequentes, secas, frias; evitar gatilhos (odores, gordura); gengibre (cápsula, chá ou alimento)",
      via: "VO",
      intervalo: "—",
      duracao: "Enquanto houver sintomas",
      monitorizacao: "PUQE, peso",
      contraindicacoes: "—",
      ajustes: "Pausar ferro no 1º trimestre se piora a náusea; manter ácido fólico"
    },
    {
      droga: "Doxilamina + piridoxina (10 mg + 10 mg, liberação retardada)",
      linha: "l1",
      dose: "2 comprimidos ao deitar; se necessário + 1 pela manhã e + 1 à tarde (máx. 4/dia)",
      via: "VO",
      intervalo: "Conforme sintomas",
      duracao: "Até melhora (geralmente até 14–16 semanas)",
      monitorizacao: "Sonolência",
      contraindicacoes: "Uso de IMAO",
      ajustes: "1ª linha internacional (ACOG, RCOG). Verificar disponibilidade no Brasil; na falta, usar dimenidrinato + piridoxina"
    },
    {
      droga: "Dimenidrinato + piridoxina (50 mg + 10 mg)",
      linha: "l1",
      dose: "1 comprimido",
      via: "VO",
      intervalo: "6/6 h se necessário (máx. 400 mg/dia de dimenidrinato)",
      duracao: "Até melhora",
      monitorizacao: "Sonolência",
      contraindicacoes: "Porfiria; cautela com outros sedativos",
      ajustes: "Anti-histamínico de uso comum no Brasil"
    },
    {
      droga: "Metoclopramida",
      linha: "alt",
      dose: "10 mg",
      via: "VO, IM ou IV",
      intervalo: "8/8 h (máx. 30 mg/dia)",
      duracao: "Preferir até 5 dias (risco de efeitos extrapiramidais)",
      monitorizacao: "Distonia, acatisia",
      contraindicacoes: "Epilepsia, feocromocitoma, obstrução intestinal, história de discinesia",
      ajustes: "IV: diluir em 10–20 mL de SF 0,9% e infundir em pelo menos 3 min (ou em 50 mL em 15 min). Distonia: suspender e dar biperideno ou difenidramina"
    },
    {
      droga: "Ondansetrona",
      linha: "alt",
      dose: "4–8 mg",
      via: "VO (comprimido ou orodispersível) ou IV",
      intervalo: "8/8 h",
      duracao: "Até melhora",
      monitorizacao: "Constipação, cefaleia, QT longo (ECG se cardiopatia ou hipocalemia)",
      contraindicacoes: "QT longo congênito; corrigir K e Mg antes",
      ajustes: "IV: diluir em 50–100 mL de SF 0,9% e infundir em 15 min. 1º trimestre: possível pequeno aumento absoluto de fenda orofacial — usar após falha de anti-histamínico, com decisão compartilhada (RCOG 2024)"
    },
    {
      droga: "Prometazina",
      linha: "alt",
      dose: "12,5–25 mg",
      via: "VO ou IM profunda",
      intervalo: "6/6 h a 8/8 h",
      duracao: "Até melhora",
      monitorizacao: "Sedação",
      contraindicacoes: "Evitar via IV (lesão tecidual grave)",
      ajustes: "—"
    },
    {
      droga: "Tiamina (vitamina B1)",
      linha: "l1",
      dose: "100 mg",
      via: "IV (em 100 mL de SF 0,9% em 30 min) ou IM; depois VO",
      intervalo: "1 vez ao dia",
      duracao: "Durante a hidratação EV e enquanto ingestão for baixa",
      monitorizacao: "Sinais neurológicos",
      contraindicacoes: "—",
      ajustes: "Obrigatória ANTES de soro glicosado em vômitos prolongados (RCOG)"
    },
    {
      droga: "Cristaloide (SF 0,9% ou Ringer lactato) com potássio",
      linha: "l1",
      dose: "1.000 mL na 1ª hora se desidratada; depois 1.000 mL de 6/6 a 8/8 h conforme volemia e diurese",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até tolerar VO",
      monitorizacao: "Diurese, Na e K diários",
      contraindicacoes: "—",
      ajustes: "KCl 19,1% 10 mL (25 mEq) por litro se K baixo e diurese presente. Hiponatremia: corrigir devagar. Evitar soro glicosado até dar tiamina"
    },
    {
      droga: "Metilprednisolona (hiperêmese refratária, internada)",
      linha: "adj",
      dose: "16 mg",
      via: "IV ou VO",
      intervalo: "8/8 h por 3 dias; depois reduzir em 2 semanas até a menor dose eficaz",
      duracao: "Máximo de 6 semanas",
      monitorizacao: "Glicemia",
      contraindicacoes: "Evitar antes de 10 semanas (fenda orofacial)",
      ajustes: "Decisão do obstetra; alternativa: hidrocortisona 100 mg IV 12/12 h e depois prednisolona VO (RCOG)"
    },
    {
      droga: "Omeprazol",
      linha: "adj",
      dose: "20 mg",
      via: "VO ou IV",
      intervalo: "1 vez ao dia",
      duracao: "Enquanto houver pirose/refluxo",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pirose associada piora a náusea"
    }
  ],
  destino: {
    agora: [
      "Hidratação, tiamina e antiemético EV na sala de observação/medicação",
      "Coletar eletrólitos, função renal e urina"
    ],
    reavaliar: [
      "Em 2–4 h: tolerância a líquidos, diurese, sinais vitais",
      "Internada: peso diário, balanço hídrico, Na/K/Mg diários"
    ],
    alta: [
      "Tolera líquidos e comprimidos, sem hipotensão, eletrólitos aceitáveis",
      "Antiemético VO regular (não só se necessário) e retorno na UBS em 24–72 h"
    ],
    observacao: [
      "Hidratação EV em hospital-dia/UBS com retorno diário é opção para casos moderados (RCOG)"
    ],
    internacao: [
      "Vômitos persistentes sem tolerar VO apesar de antiemético",
      "K < 3,0, Na < 130, IRA, perda de peso > 5% com desidratação",
      "Comorbidade descompensada (DM, ITU febril), suspeita de Wernicke",
      "Internadas: considerar profilaxia de TEV (enoxaparina 40 mg SC/dia) se sem contraindicação"
    ],
    transferencia: [
      "Maternidade/referência obstétrica quando sem condições de hidratação EV e exames",
      "Suspeita de mola: serviço de referência em doença trofoblástica"
    ]
  },
  prescricao: {
    ambulatorial: "USO ORAL\n1. Dimenidrinato 50 mg + piridoxina 10 mg --------- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se náusea ou vômito (máximo 8 comprimidos por dia). Pode dar sono.\n   (Alternativa, se disponível: Doxilamina 10 mg + piridoxina 10 mg — 2 comprimidos ao deitar; se necessário, mais 1 pela manhã e 1 à tarde.)\n2. Metoclopramida 10 mg ---------------------------- 15 comprimidos\n   Tomar 1 comprimido 30 minutos antes das refeições, até 3 vezes ao dia, por até 5 dias, se o item 1 não resolver.\n   OU Ondansetrona 4 mg (orodispersível) ------------- 15 comprimidos\n   Dissolver 1 comprimido na língua de 8 em 8 horas se náusea ou vômito.\n\nORIENTAÇÕES\nRefeições pequenas, de 2 em 2 ou 3 em 3 horas; alimentos secos e frios; beber líquidos em pequenos goles entre as refeições; gengibre pode ajudar.",
    hospitalar: "HIPERÊMESE GRAVÍDICA — SALA DE OBSERVAÇÃO / INTERNAÇÃO (peso: ___ kg)\n1. Dieta zero por 4–6 h; depois líquidos em pequenos volumes e progressão conforme aceitação.\n2. Tiamina 100 mg + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia (ANTES de qualquer soro glicosado).\n3. SF 0,9% (ou Ringer lactato) 1.000 mL IV na 1ª hora; depois 1.000 mL de 8/8 h. Acrescentar KCl 19,1% 10 mL (25 mEq) em cada 1.000 mL se K < 3,5 e diurese presente.\n4. Ondansetrona 8 mg + SF 0,9% 50 mL IV em 15 min de 8/8 h.\n   OU Metoclopramida 10 mg + SF 0,9% 20 mL IV lento (≥ 3 min) de 8/8 h (máximo 30 mg/dia).\n5. Omeprazol 40 mg IV 1 vez ao dia (se pirose ou vômitos com esforço intenso).\n6. Enoxaparina 40 mg SC 1 vez ao dia, se internada e sem contraindicação.\n7. Controles: sinais vitais de 6/6 h; diurese e balanço hídrico; peso diário; Na, K, Mg, ureia, creatinina diários até normalizar; ECG se K < 3,0 ou uso de ondansetrona com QT longo.\n8. Transição: tolerando líquidos por 24 h → antiemético VO regular, tiamina 100 mg VO 1 vez ao dia e alta."
  },
  orientacoesRetorno: [
    "Enjoo no início da gravidez é comum e geralmente melhora até 16–20 semanas",
    "Comer pouco e várias vezes ao dia; evitar ficar em jejum e cheiros fortes",
    "Tomar o remédio no horário (não esperar vomitar) e beber líquidos aos goles",
    "Voltar imediatamente se: não conseguir beber nada por 12–24 h, urina escura ou muito pouca, tontura ao levantar, vômito com sangue, dor na barriga, febre, confusão ou visão dupla",
    "Retornar à UBS em 24–72 h para pesar e reavaliar; se melhorar, seguir o pré-natal normal"
  ],
  tabelas: [
    {
      titulo: "PUQE-24 (escore de náusea e vômito em 24 h)",
      colunas: ["Pergunta", "1 ponto", "2 pontos", "3 pontos", "4 pontos", "5 pontos"],
      linhas: [
        ["Horas com náusea em 24 h", "Nenhuma", "≤ 1 h", "2–3 h", "4–6 h", "> 6 h"],
        ["Vômitos em 24 h", "Nenhum", "1–2", "3–4", "5–6", "≥ 7"],
        ["Ânsias sem vômito em 24 h", "Nenhuma", "1–2", "3–4", "5–6", "≥ 7"]
      ],
      nota: "Soma 3–15: ≤ 6 leve · 7–11 moderada · ≥ 12 grave (RCOG Green-top 69)."
    }
  ],
  fontes: [
    "RCOG — Green-top Guideline nº 69: The management of nausea and vomiting of pregnancy and hyperemesis gravidarum (atualização 2024)",
    "ACOG — Practice Bulletin nº 189: Nausea and vomiting of pregnancy (2018, reafirmado)",
    "FEBRASGO — Femina: Hiperêmese gravídica (protocolos FEBRASGO de obstetrícia)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
