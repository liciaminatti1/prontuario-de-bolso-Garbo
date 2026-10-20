// Insuficiência cardíaca descompensada / edema agudo de pulmão
registrarFicha({
  id: "ic-descompensada",
  especialidade: "cardiologia",
  caminho: "ps",
  titulo: "IC descompensada / edema agudo de pulmão",
  resumo: "Dispneia progressiva ou súbita com congestão (ortopneia, crepitações, edema, turgência jugular) em paciente com ou sem IC conhecida.",
  palavrasChave: "insuficiencia cardiaca ic eap edema agudo de pulmao congestao furosemida nitroglicerina vni cpap bnp dobutamina",
  critico: {
    tempo: "Sentar + VNI + nitrato",
    texto: "EAP hipertensivo: cabeceira elevada, VNI (CPAP/BiPAP), nitroglicerina IV e furosemida IV. Buscar o gatilho (SCA, arritmia, HAS, infecção, má adesão)."
  },
  alarmes: [
    "SpO₂ < 90% apesar de O₂, esforço respiratório, FR > 30",
    "PAS < 90 ou sinais de hipoperfusão (perfil frio)",
    "Rebaixamento de consciência",
    "SCA ou arritmia como gatilho",
    "Lactato elevado, oligúria"
  ],
  condutaInicial: [
    "Cabeceira elevada, monitor, SpO₂, acesso venoso",
    "O₂ se SpO₂ < 90%; VNI se desconforto respiratório ou SpO₂ baixa",
    "ECG (excluir SCA/arritmia), RX de tórax, POCUS pulmonar se disponível",
    "Furosemida IV 1–2,5× a dose oral habitual (sem uso prévio: 40 mg)",
    "PAS > 110: nitroglicerina IV; definir perfil hemodinâmico (quente/frio, úmido/seco)"
  ],
  fataisExcluir: [
    "SCA",
    "Choque cardiogênico",
    "Arritmia (FA de alta resposta, TV, BAVT)",
    "TEP",
    "Complicação mecânica (insuficiência mitral aguda, CIV)",
    "Pneumonia grave / sepse"
  ],
  proximaDecisao: "Reavaliar diurese em 2 h e 6 h (alvo > 100–150 mL/h ou sódio urinário > 50–70 mEq/L). Resposta ruim → dobrar diurético ou associar tiazídico. Perfil frio → inotrópico e UTI.",
  clinica: {
    anamnese: [
      "IC prévia: FE, medicações, peso seco, última internação",
      "Gatilhos: má adesão a dieta/medicação, infecção, SCA, arritmia, HAS descontrolada, AINE, IRA, tireoide",
      "Ortopneia, dispneia paroxística noturna, ganho de peso, edema",
      "Dor torácica, palpitações"
    ],
    exameFisico: [
      "PA, FC, SpO₂, FR, temperatura",
      "Congestão: crepitações, turgência jugular, refluxo hepatojugular, edema, ascite (úmido × seco)",
      "Perfusão: extremidades frias, enchimento capilar, confusão, pressão de pulso estreita (quente × frio)",
      "B3, sopros novos"
    ],
    diferenciais: [
      { dx: "Exacerbação de DPOC / asma", pista: "Sibilos, tabagismo; BNP normal" },
      { dx: "Pneumonia", pista: "Febre, consolidação" },
      { dx: "TEP", pista: "Pulmões limpos, VD dilatado" },
      { dx: "SDRA / EAP não cardiogênico", pista: "Sepse, BNP baixo, função cardíaca normal" },
      { dx: "Insuficiência renal com hipervolemia", pista: "Oligúria, creatinina alta" }
    ],
    gravidade: [
      "Quente-úmido (mais comum): diurético + vasodilatador",
      "Frio-úmido: inotrópico ± vasopressor, UTI",
      "Frio-seco: avaliar volume com cautela",
      "Choque cardiogênico: PAS < 90 com hipoperfusão"
    ]
  },
  exames: [
    {
      nome: "BNP / NT-proBNP",
      pedido: "BNP ou NT-proBNP.",
      porQue: "Diferenciar dispneia cardíaca e não cardíaca.",
      esperar: "Elevado.",
      interpretacao: "BNP < 100 ou NT-proBNP < 300 pg/mL tornam IC aguda improvável.",
      limitacoes: "Mais alto em idosos e DRC; mais baixo em obesos e EAP flash."
    },
    {
      nome: "ECG e troponina",
      pedido: "ECG de 12 derivações e troponina.",
      porQue: "SCA e arritmias como causa.",
      esperar: "—",
      interpretacao: "Supra de ST → reperfusão. Troponina discretamente elevada é comum na IC.",
      limitacoes: "—"
    },
    {
      nome: "RX de tórax e POCUS",
      pedido: "RX de tórax; ultrassom pulmonar (linhas B) e ecocardiograma à beira-leito.",
      porQue: "Confirmar congestão, derrame, diferenciais.",
      esperar: "Cefalização, linhas B difusas, derrame pleural.",
      interpretacao: "Linhas B bilaterais difusas apoiam congestão.",
      limitacoes: "RX normal em até 20%."
    },
    {
      nome: "Laboratório",
      pedido: "Creatinina, ureia, sódio, potássio, magnésio, hemograma, glicemia, TSH, função hepática; lactato e gasometria se grave.",
      porQue: "Função renal, eletrólitos para diurético, gatilhos.",
      esperar: "—",
      interpretacao: "Piora leve da creatinina com descongestão eficaz é aceitável.",
      limitacoes: "—"
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico.",
      porQue: "FE, valvopatias, complicações mecânicas.",
      esperar: "—",
      interpretacao: "FE ≤ 40% → terapia modificadora de doença na alta.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Furosemida",
      linha: "l1",
      dose: "1–2,5× a dose oral diária, em bolus (sem uso prévio: 40 mg)",
      via: "IV",
      intervalo: "12/12h ou infusão contínua",
      duracao: "Até euvolemia",
      monitorizacao: "Diurese (2 h e 6 h), peso diário, creatinina, K, Mg",
      contraindicacoes: "Hipovolemia, choque sem perfusão",
      ajustes: "Resposta insuficiente: dobrar dose; associar hidroclorotiazida 25–50 mg ou acetazolamida 500 mg IV"
    },
    {
      droga: "Nitroglicerina",
      linha: "l1",
      dose: "10–20 mcg/min, aumentar 5–10 mcg/min a cada 3–5 min (até 200 mcg/min)",
      via: "IV contínua",
      intervalo: "Titular por PA e sintomas",
      duracao: "Até melhora da congestão",
      monitorizacao: "PA a cada 5–15 min, cefaleia",
      contraindicacoes: "PAS < 90–100, inibidor de PDE-5, estenose aórtica grave, IAM de VD",
      ajustes: "50 mg em 250 mL SG 5% = 200 mcg/mL. Sem bomba: dinitrato SL 5 mg a cada 5–10 min"
    },
    {
      droga: "Ventilação não invasiva",
      linha: "l1",
      dose: "CPAP 5–10 cmH₂O ou BiPAP (IPAP 10–15 / EPAP 5–8)",
      via: "Máscara facial",
      intervalo: "Contínua",
      duracao: "Até melhora (horas)",
      monitorizacao: "FR, SpO₂, gasometria, PA",
      contraindicacoes: "Rebaixamento, vômitos, instabilidade grave, impossibilidade de proteger via aérea",
      ajustes: "Reduz necessidade de intubação no EAP"
    },
    {
      droga: "Dobutamina",
      linha: "alt",
      dose: "2,5–10 mcg/kg/min (até 20)",
      via: "IV contínua",
      intervalo: "Titular",
      duracao: "O menor tempo possível",
      monitorizacao: "Arritmia, isquemia, PA",
      contraindicacoes: "—",
      ajustes: "Perfil frio (baixo débito). 250 mg em 230 mL SG 5% = 1 mg/mL. Hipotensão: associar noradrenalina"
    },
    {
      droga: "Manter/otimizar terapia crônica",
      linha: "adj",
      dose: "Manter betabloqueador e IECA/BRA/INRA se estável; iniciar iSGLT2 durante a internação",
      via: "VO",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "PA, K, creatinina",
      contraindicacoes: "Suspender betabloqueador apenas em choque/baixo débito",
      ajustes: "FE ≤ 40%: quatro pilares (betabloqueador, sacubitril-valsartana/IECA/BRA, espironolactona, dapagliflozina)"
    }
  ],
  destino: {
    agora: [
      "Descongestionar e tratar o gatilho",
      "Choque cardiogênico → UTI, considerar hemodinâmica se SCA"
    ],
    reavaliar: [
      "Diurese em 2 h e 6 h; sódio urinário em 2 h",
      "Peso e balanço diários; eletrólitos diários"
    ],
    alta: [
      "Euvolêmico, sem O₂, diurético oral estável por 24 h",
      "Terapia modificadora de doença otimizada; orientação de dieta, peso diário e sinais de alerta",
      "Consulta em 7–14 dias (UBS ou cardiologia)"
    ],
    observacao: [
      "Descompensação leve com resposta rápida ao diurético IV: 12–24 h"
    ],
    internacao: [
      "Maioria dos casos",
      "UTI: VNI prolongada, inotrópico, choque, SCA"
    ],
    transferencia: [
      "SCA com indicação de cateterismo, choque cardiogênico sem UTI"
    ]
  },
  fontes: [
    "SBC — Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (2018) e atualização (2021)",
    "ESC 2021 Guidelines for heart failure e Focused Update 2023"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
