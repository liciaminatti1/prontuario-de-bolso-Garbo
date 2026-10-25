// Sepse neonatal precoce e tardia
registrarFicha({
  id: "sepse-neonatal",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Sepse neonatal (precoce e tardia)",
  resumo: "Infecção bacteriana sistêmica no RN. Precoce: até 72 h de vida (germes do trato genital materno: estreptococo do grupo B, E. coli, Listeria). Tardia: após 72 h (comunitária ou hospitalar). Para RN ≥ 34 semanas, estimar o risco com a calculadora de Kaiser.",
  palavrasChave: "sepse neonatal precoce tardia estreptococo grupo b gbs streptococcus agalactiae e coli listeria ampicilina gentamicina amicacina oxacilina vancomicina cefotaxima cefepima meropenem calculadora kaiser eos calculator corioamnionite bolsa rota hemocultura pcr liquor rn recem-nascido infeccao hospitalar",
  critico: {
    tempo: "Antibiótico em até 1 h",
    texto: "RN com sinais clínicos de sepse: hemocultura e antibiótico IV em até 1 h, sem esperar exames. Precoce: ampicilina + gentamicina. Sem infecção confirmada e RN bem: suspender com 36–48 h."
  },
  alarmes: [
    "Instabilidade térmica (hipotermia é mais comum que febre)",
    "Apneia, desconforto respiratório, necessidade de O₂",
    "Má perfusão (TEC > 3 s), taquicardia > 180 ou bradicardia, hipotensão",
    "Letargia, hipotonia, sucção débil, irritabilidade, convulsão",
    "Intolerância alimentar, distensão abdominal, vômitos",
    "Hipoglicemia ou hiperglicemia, acidose metabólica",
    "Icterícia precoce sem explicação, petéquias, sangramento"
  ],
  condutaInicial: [
    "ABC, aquecer, monitor, oximetria, glicemia capilar",
    "Acesso venoso (periférico, umbilical ou intraósseo)",
    "Hemocultura (mínimo 1 mL) antes do antibiótico; não atrasar o antibiótico por dificuldade de coleta",
    "Ampicilina + gentamicina IV em até 1 h (tardia hospitalar: esquema conforme flora da unidade)",
    "Líquor quando estável, se hemocultura positiva, quadro clínico de sepse ou piora em antibiótico; tardia: urina por sonda (urocultura) também",
    "Choque: SF 0,9% 10 mL/kg em 10–20 min, reavaliar; vasoativo precoce na UTI neonatal",
    "RN ≥ 34 sem assintomático com fator de risco: estimar risco com a calculadora de Kaiser ou observação clínica seriada, conforme protocolo"
  ],
  fataisExcluir: [
    "Meningite neonatal",
    "Herpes simples neonatal (vesículas, convulsão, transaminases altas, mãe com lesão): aciclovir",
    "Cardiopatia canal-dependente (choque nos primeiros dias, pulsos femorais fracos)",
    "Erro inato do metabolismo (vômitos, acidose, hiperamonemia)",
    "Enterocolite necrosante (prematuro com distensão abdominal)",
    "Hiperplasia adrenal congênita (crise perdedora de sal)"
  ],
  proximaDecisao: "Hemocultura negativa em 36–48 h e RN clinicamente bem: suspender o antibiótico. Hemocultura positiva: líquor, ajustar pelo antibiograma e tratar 10 dias (bacteremia sem foco), 14 dias (meningite por GBS) ou 21 dias (meningite por gram-negativo). Cultura negativa com clínica fortemente sugestiva: discutir 5–7 dias com o neonatologista.",
  clinica: {
    anamnese: [
      "Bolsa rota ≥ 18 h, febre materna intraparto ≥ 38 °C, corioamnionite (infecção intra-amniótica)",
      "Colonização materna por GBS e profilaxia intraparto adequada (penicilina, ampicilina ou cefazolina ≥ 4 h antes do parto)",
      "Prematuridade, trabalho de parto prematuro sem causa, ITU materna recente",
      "Tardia: cateteres, ventilação, nutrição parenteral, internação prolongada, procedimentos",
      "Tardia comunitária: febre em casa, contatos doentes, lesões de pele, coto umbilical"
    ],
    exameFisico: [
      "Temperatura, FC, FR, PA, TEC, SpO₂",
      "Tônus, atividade, fontanela",
      "Coto umbilical (onfalite), pele (pústulas, celulite), articulações",
      "Abdome (distensão, sangue nas fezes)"
    ],
    diferenciais: [
      { dx: "Taquipneia transitória / SDR", pista: "Melhora progressiva, RN bem, sem fatores de risco" },
      { dx: "Hipotermia ambiental ou desidratação", pista: "Normaliza com correção" },
      { dx: "Cardiopatia congênita", pista: "Sopro, diferença de pulsos/SpO₂, cianose sem melhora com O₂" },
      { dx: "Erros inatos do metabolismo", pista: "RN bem nas primeiras horas, piora após alimentação" },
      { dx: "Abstinência neonatal", pista: "Uso materno de opioide; irritabilidade, tremores" }
    ],
    gravidade: [
      "Sepse grave/choque: má perfusão, hipotensão, lactato alto, disfunção orgânica → UTI neonatal",
      "Os critérios de Phoenix não se aplicam a prematuros no período perinatal"
    ]
  },
  exames: [
    {
      nome: "Hemocultura",
      pedido: "Hemocultura periférica (volume mínimo 1 mL) antes do antibiótico. Em sepse tardia com cateter: hemocultura do cateter e periférica.",
      porQue: "Padrão-ouro diagnóstico; guia o antibiótico.",
      esperar: "Maioria positiva em 24–36 h.",
      interpretacao: "Estafilococo coagulase-negativo em 1 amostra pode ser contaminação; valorizar se 2 amostras ou RN com cateter e clínica.",
      limitacoes: "Volume pequeno e antibiótico materno reduzem a sensibilidade."
    },
    {
      nome: "Líquor",
      pedido: "Líquor: citologia, bioquímica (glicose, proteína), Gram, cultura.",
      porQue: "Meningite muda dose e duração.",
      esperar: "—",
      interpretacao: "Interpretar com valores de referência neonatais (celularidade normal é maior que em crianças maiores).",
      limitacoes: "Adiar se instável; colher depois, mesmo após início do antibiótico."
    },
    {
      nome: "Hemograma e PCR",
      pedido: "Hemograma com contagem diferencial; PCR com 6–12 h de vida (ou na suspeita) e repetir em 24 h.",
      porQue: "Apoio diagnóstico e decisão de suspensão.",
      esperar: "Leucopenia < 5.000, neutropenia, relação imaturos/totais elevada, plaquetopenia.",
      interpretacao: "Duas PCR normais com 24 h de intervalo têm alto valor preditivo negativo.",
      limitacoes: "Não usar hemograma ou PCR isolados para iniciar ou manter antibiótico."
    },
    {
      nome: "Urocultura (sepse tardia)",
      pedido: "Urina tipo 1 e urocultura por sondagem vesical ou punção suprapúbica.",
      porQue: "ITU é foco frequente após 72 h.",
      esperar: "—",
      interpretacao: "Não indicada na sepse precoce (< 72 h).",
      limitacoes: "Saco coletor não serve para cultura."
    },
    {
      nome: "Gasometria, lactato, glicemia, eletrólitos",
      pedido: "Gasometria com lactato, glicemia, sódio, potássio, cálcio iônico, ureia, creatinina, TGO/TGP, coagulograma se sangramento.",
      porQue: "Disfunção orgânica.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Ampicilina",
      linha: "l1",
      dose: "Sepse: 50 mg/kg/dose. Meningite: 100 mg/kg/dose (≤ 7 dias) ou 75 mg/kg/dose (> 7 dias)",
      via: "IV em 3–5 min",
      intervalo: "≤ 7 dias: 8/8 h · > 7 dias: 6/6 h",
      duracao: "Suspender em 36–48 h se culturas negativas; bacteremia 10 dias; meningite 14–21 dias",
      monitorizacao: "Culturas, clínica",
      contraindicacoes: "—",
      ajustes: "Cobre GBS, Listeria e enterococo. Reconstituir em água destilada (ex.: 100 mg/mL)"
    },
    {
      droga: "Gentamicina",
      linha: "l1",
      dose: "4–5 mg/kg/dose conforme IG e idade pós-natal (tabela)",
      via: "IV em 30 min",
      intervalo: "24/24 h a 48/48 h (tabela)",
      duracao: "Igual à ampicilina; suspender se GBS isolado sensível após melhora",
      monitorizacao: "Creatinina, diurese; nível sérico (vale) se uso > 48 h ou disfunção renal",
      contraindicacoes: "Insuficiência renal (aumentar intervalo pelo nível)",
      ajustes: "Diluir em SF 0,9% ou SG 5% (1–2 mg/mL). Não infundir junto com ampicilina na mesma via sem lavar"
    },
    {
      droga: "Cefotaxima",
      linha: "alt",
      dose: "50 mg/kg/dose",
      via: "IV em 30 min",
      intervalo: "≤ 7 dias: 12/12 h (8/8 h se meningite) · > 7 dias: 8/8 h (6/6 h se meningite)",
      duracao: "Conforme foco",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Associar à ampicilina quando há suspeita de meningite ou gram-negativo. Uso rotineiro favorece resistência. Ceftriaxona: evitar no RN com hiperbilirrubinemia e nunca com soluções com cálcio"
    },
    {
      droga: "Oxacilina + amicacina (sepse tardia hospitalar — esquema empírico usual no Brasil)",
      linha: "l1",
      dose: "Oxacilina 25–50 mg/kg/dose (50 se meningite). Amicacina 15 mg/kg/dose (≤ 29 sem nos primeiros 7 dias: 18 mg/kg 48/48 h; 30–34 sem nos primeiros 7 dias: 18 mg/kg 36/36 h)",
      via: "IV (oxacilina em 15–30 min; amicacina em 30 min)",
      intervalo: "Oxacilina: 12/12 h (≤ 7 dias) a 6/6 h (> 7 dias e ≥ 2 kg). Amicacina: ≥ 35 sem 24/24 h; demais conforme IG",
      duracao: "Conforme culturas: 7–14 dias",
      monitorizacao: "Nível de amicacina, creatinina, audição na alta",
      contraindicacoes: "—",
      ajustes: "Escolha depende da flora da UTI (CCIH). Com cateter e estafilococo coagulase-negativo ou MRSA: trocar oxacilina por vancomicina"
    },
    {
      droga: "Vancomicina",
      linha: "alt",
      dose: "10–15 mg/kg/dose",
      via: "IV em 60 min (≤ 5 mg/mL)",
      intervalo: "8/8 h a 24/24 h conforme IG, idade pós-natal e creatinina (protocolo do serviço)",
      duracao: "Conforme culturas",
      monitorizacao: "Nível sérico (vale) ou AUC, creatinina",
      contraindicacoes: "—",
      ajustes: "Sepse tardia com cateter, MRSA ou estafilococo coagulase-negativo confirmado. Suspender se cultura negativa em 48 h"
    },
    {
      droga: "Aciclovir",
      linha: "adj",
      dose: "20 mg/kg/dose",
      via: "IV em 1 h",
      intervalo: "8/8 h",
      duracao: "14 dias (pele/olho/boca) ou 21 dias (SNC ou disseminada)",
      monitorizacao: "Função renal, neutrófilos, hidratação",
      contraindicacoes: "—",
      ajustes: "Suspeita de herpes neonatal: vesículas, convulsão, transaminases altas, líquor com pleocitose, mãe com herpes genital"
    }
  ],
  destino: {
    agora: [
      "Culturas e antibiótico em até 1 h; suporte hemodinâmico e glicêmico"
    ],
    reavaliar: [
      "Clínica de 1/1 h a 3/3 h; hemocultura e PCR em 24–48 h",
      "Repetir hemocultura se positiva (documentar negativação)"
    ],
    alta: [
      "Culturas negativas 36–48 h, RN bem, mamando, PCR normalizada",
      "Bacteremia tratada: completar curso; triagem auditiva após aminoglicosídeo"
    ],
    observacao: [
      "RN ≥ 34 sem assintomático com fator de risco: observação com sinais vitais a cada 4 h por 36–48 h no alojamento conjunto, ou pela recomendação da calculadora de Kaiser"
    ],
    internacao: [
      "Todo RN com suspeita clínica de sepse: unidade neonatal; UTI neonatal se instável"
    ],
    transferencia: [
      "Sem unidade neonatal: iniciar antibiótico, aquecer, glicemia e regular para unidade neonatal"
    ]
  },
  prescricao: {
    hospitalar: "SEPSE NEONATAL PRECOCE (peso: ___ kg; IG: ___ sem; vida: ___ h)\n1. Dieta: leite materno se estável; dieta zero se instável ou distensão abdominal.\n2. Incubadora; temperatura axilar 36,5–37,5 °C.\n3. Soro de manutenção: SG 10% ___ mL/kg/dia = ___ mL/h (taxa de glicose 4–6 mg/kg/min), ajustar conforme dia de vida, glicemia e diurese.\n4. Ampicilina 50 mg/kg = ___ mg IV de 8/8 h (≤ 7 dias) ou 6/6 h (> 7 dias). Reconstituir 500 mg em 5 mL de água destilada (100 mg/mL) e aplicar em 3–5 min. Meningite: 100 mg/kg de 8/8 h (≤ 7 dias) ou 75 mg/kg de 6/6 h (> 7 dias).\n5. Gentamicina ___ mg/kg = ___ mg IV a cada ___ h (ver tabela por IG), diluir em SF 0,9% para 1–2 mg/mL e infundir em 30 min.\n6. Se choque: SF 0,9% 10 mL/kg = ___ mL IV em 10–20 min; reavaliar perfusão e repetir até 20–30 mL/kg se sem sobrecarga; vasoativo conforme UTI neonatal.\n7. Se glicemia baixa: SG 10% 2 mL/kg = ___ mL IV e aumentar a taxa de glicose.\n8. Controles: FC, FR, SpO₂, PA, temperatura e TEC de 1/1 h a 3/3 h; glicemia de 3/3 h a 6/6 h; diurese; peso diário.\n9. Exames: hemocultura antes do antibiótico; hemograma e PCR agora e em 24 h; líquor quando estável; gasometria e lactato.\n10. Reavaliar com 36–48 h: culturas negativas e RN bem → suspender antibiótico.\n\nSEPSE TARDIA HOSPITALAR (exemplo; seguir a CCIH)\n- Oxacilina ___ mg/kg = ___ mg IV de ___/___ h + Amicacina 15 mg/kg = ___ mg IV de 24/24 h (≥ 35 sem; demais conforme tabela).\n- Com cateter central ou MRSA: Vancomicina 10–15 mg/kg = ___ mg IV em 60 min de ___/___ h (nível sérico)."
  },
  orientacoesRetorno: [
    "Bebê que recebeu alta após observação: volte se ficar molinho, sonolento, mamar mal, respirar rápido ou com gemido, ficar frio ou com febre (≥ 37,8 °C axilar), vomitar ou mudar de cor",
    "No primeiro mês, qualquer febre é motivo para ir ao pronto-socorro no mesmo dia",
    "Após tratamento com gentamicina ou amicacina: fazer o teste da orelhinha (PEATE) e manter o seguimento na UBS"
  ],
  tabelas: [
    {
      titulo: "Gentamicina e amicacina no RN (por IG e idade pós-natal)",
      colunas: ["IG ao nascer", "Idade pós-natal", "Gentamicina", "Amicacina"],
      linhas: [
        ["≤ 29 sem", "0–7 dias", "5 mg/kg 48/48 h", "18 mg/kg 48/48 h"],
        ["≤ 29 sem", "8–28 dias", "4 mg/kg 36/36 h", "15 mg/kg 36/36 h"],
        ["≤ 29 sem", "≥ 29 dias", "4 mg/kg 24/24 h", "15 mg/kg 24/24 h"],
        ["30–34 sem", "0–7 dias", "4,5 mg/kg 36/36 h", "18 mg/kg 36/36 h"],
        ["30–34 sem", "≥ 8 dias", "4 mg/kg 24/24 h", "15 mg/kg 24/24 h"],
        ["≥ 35 sem", "Todas", "4 mg/kg 24/24 h", "15 mg/kg 24/24 h"]
      ],
      nota: "Esquema baseado no Neofax/Lexicomp neonatal. Asfixia, uso de indometacina/ibuprofeno ou insuficiência renal: aumentar o intervalo e guiar por nível sérico. Conferir com a farmácia clínica do serviço."
    },
    {
      titulo: "Precoce x tardia",
      colunas: ["Característica", "Precoce", "Tardia"],
      linhas: [
        ["Início", "≤ 72 h de vida", "> 72 h (até 28 dias; no prematuro internado, até a alta)"],
        ["Origem", "Materna (vertical)", "Hospitalar ou comunitária"],
        ["Germes", "GBS, E. coli, Listeria, outros gram-negativos", "Estafilococo coagulase-negativo, S. aureus, gram-negativos (Klebsiella, Enterobacter, Pseudomonas), Candida; na comunidade: GBS, E. coli (ITU)"],
        ["Empírico", "Ampicilina + gentamicina", "Hospitalar: conforme CCIH (ex.: oxacilina/vancomicina + amicacina). Comunitária (de casa): ampicilina + gentamicina ou cefotaxima (ver ficha febre-lactente)"]
      ],
      nota: "A ANVISA classifica a infecção precoce de origem materna até 48 h de vida para fins de vigilância de IRAS."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Piora clínica em 48–72 h com ampicilina + gentamicina", "Recolher hemocultura, colher líquor e urina; escalonar para cefotaxima (ou cefepima) + ampicilina; com fatores hospitalares, esquema da CCIH", "Rever foco: meningite, abscesso, ECN, cateter, herpes, fungo"],
        ["Gram-negativo produtor de ESBL", "Meropenem 20 mg/kg/dose IV de 8/8 h (12/12 h se < 32 sem e ≤ 14 dias); meningite 40 mg/kg/dose 8/8 h", "Ajustar pelo antibiograma; discutir com a CCIH"],
        ["S. aureus resistente à oxacilina (MRSA) ou estafilococo coagulase-negativo com cateter", "Vancomicina (nível sérico); retirar o cateter se possível", "Hemoculturas seriadas até negativar"],
        ["Pseudomonas", "Cefepima 50 mg/kg/dose IV de 12/12 h (≤ 28 dias), ou piperacilina-tazobactam, ou meropenem conforme antibiograma", "Associar aminoglicosídeo conforme sensibilidade"],
        ["Candida (prematuro extremo, antibiótico de amplo espectro, cateter, NPT)", "Anfotericina B desoxicolato 1 mg/kg/dia IV ou fluconazol 12 mg/kg/dia IV (ataque 25 mg/kg)", "Fundo de olho, eco e USG renal; retirar cateter"],
        ["Listeria", "Ampicilina + gentamicina (cefalosporinas não cobrem)", "Meningite: 21 dias"],
        ["Hemocultura persistentemente positiva", "Retirar cateter, buscar foco profundo (endocardite, trombose, osteomielite)", "Discutir com infectologia pediátrica"]
      ],
      nota: "Sem confirmação de infecção, o maior risco é manter antibiótico por tempo demais: suspender em 36–48 h com culturas negativas e RN bem."
    },
    {
      titulo: "Calculadora de risco de sepse precoce de Kaiser (RN ≥ 34 sem)",
      colunas: ["Entrada", "Saída", "Como usar"],
      linhas: [
        ["Incidência local de sepse precoce, IG, temperatura máxima materna intraparto, tempo de bolsa rota, colonização por GBS, tipo e momento do antibiótico intraparto", "Risco por 1.000 nascidos vivos ao nascer e após o exame clínico (bem, equívoco, doente) com recomendação: rotina, sinais vitais seriados, hemocultura, antibiótico empírico", "Disponível on-line (Kaiser Permanente Neonatal Early-Onset Sepsis Calculator). Reduz o uso desnecessário de antibiótico; exige observação clínica seriada confiável"]
      ],
      nota: "AAP 2018/2019 aceita 3 abordagens para RN ≥ 35 sem: categórica (fatores de risco), multivariada (Kaiser) ou baseada no exame clínico seriado. Seguir o protocolo da maternidade."
    }
  ],
  fontes: [
    "AAP Committee on Fetus and Newborn — Management of Neonates Born at ≥ 35 0/7 Weeks' Gestation With Suspected or Proven Early-Onset Bacterial Sepsis (Pediatrics, 2018)",
    "AAP — Management of Infants at Risk for Group B Streptococcal Disease (Pediatrics, 2019)",
    "AAP — Red Book: Report of the Committee on Infectious Diseases (2024–2027)",
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 2 (2014)",
    "ANVISA — Critérios Diagnósticos de Infecção Relacionada à Assistência à Saúde: Neonatologia (2017)",
    "Kuzniewicz MW et al. — A quantitative, risk-based approach to the management of neonatal early-onset sepsis (JAMA Pediatr, 2017)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
