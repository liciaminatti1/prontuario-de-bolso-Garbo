// Bronquiolite viral aguda
registrarFicha({
  id: "bronquiolite",
  especialidade: "pediatria",
  caminho: "ps",
  titulo: "Bronquiolite viral aguda",
  resumo: "Primeiro episódio de sibilância e/ou crepitações em criança < 2 anos, precedido por coriza e tosse. Principal agente: vírus sincicial respiratório (VSR).",
  palavrasChave: "bronquiolite vsr sincicial lactente sibilancia desconforto respiratorio oxigenio lavagem nasal cateter alto fluxo nirsevimabe pediatria",
  critico: {
    tempo: "Tratamento é suporte",
    texto: "Lavagem nasal, aspiração, O₂ se SpO₂ < 90–92% e hidratação. Broncodilatador, corticoide e antibiótico não são recomendados de rotina."
  },
  alarmes: [
    "Apneia ou cianose",
    "SpO₂ < 90–92% em ar ambiente",
    "Desconforto moderado/grave: tiragem intensa, gemência, batimento de asa nasal, FR > 70",
    "Ingestão < 50% do habitual ou desidratação",
    "Idade < 3 meses, prematuridade < 35 semanas, cardiopatia, doença pulmonar crônica, imunodeficiência"
  ],
  condutaInicial: [
    "Avaliar desconforto, SpO₂, hidratação e capacidade de mamar",
    "Lavagem nasal com SF 0,9% e aspiração antes das mamadas",
    "O₂ se SpO₂ persistentemente < 90–92% (alvo ≥ 90–92%)",
    "Hidratação oral fracionada; sonda nasogástrica se não aceita",
    "Cânula nasal de alto fluxo se falha do O₂ convencional"
  ],
  fataisExcluir: [
    "Insuficiência respiratória / apneia",
    "Pneumonia bacteriana",
    "Cardiopatia congênita / miocardite",
    "Coqueluche (paroxismos, guincho, apneia em < 6 meses)",
    "Corpo estranho"
  ],
  proximaDecisao: "Sem alarmes, SpO₂ adequada e mamando bem → alta com orientações (pico no 3º–5º dia). Algum alarme → internação.",
  clinica: {
    anamnese: [
      "Idade, prematuridade, comorbidades",
      "Dias de doença (piora esperada até o 3º–5º dia)",
      "Aceitação alimentar, diurese",
      "Apneia, cianose",
      "Episódios prévios de sibilância (se recorrente, pensar em lactente sibilante/asma)"
    ],
    exameFisico: [
      "FR (contar 1 min), tiragem, batimento de asa nasal, gemência",
      "SpO₂ após aspiração nasal",
      "Ausculta: sibilos, crepitações difusas",
      "Hidratação, perfusão",
      "Sopros cardíacos, hepatomegalia"
    ],
    diferenciais: [
      { dx: "Lactente sibilante / asma", pista: "Episódios recorrentes, atopia, resposta ao broncodilatador" },
      { dx: "Pneumonia", pista: "Febre alta, toxemia, achado focal" },
      { dx: "Coqueluche", pista: "Tosse paroxística, guincho, apneia, linfocitose" },
      { dx: "IC por cardiopatia", pista: "Sopro, hepatomegalia, cansaço às mamadas" },
      { dx: "Aspiração / corpo estranho", pista: "Início súbito, assimetria" }
    ],
    gravidade: [
      "Leve: FR normal ou pouco elevada, sem tiragem importante, SpO₂ > 92%, mama bem",
      "Moderada: tiragem, FR elevada, SpO₂ 88–92%, mamadas interrompidas",
      "Grave: gemência, apneia, cianose, SpO₂ < 88%, letargia"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Não solicitar exames de rotina na bronquiolite típica.",
      porQue: "Não mudam o manejo.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax — apenas se grave, evolução atípica ou suspeita de complicação.",
      porQue: "Pneumonia, pneumotórax, cardiopatia.",
      esperar: "Hiperinsuflação, atelectasias (comuns, não indicam antibiótico).",
      interpretacao: "—",
      limitacoes: "Atelectasias são confundidas com pneumonia e levam a antibiótico desnecessário."
    },
    {
      nome: "Pesquisa viral e gasometria",
      pedido: "Painel viral (VSR, influenza, SARS-CoV-2) em internados para coorte/isolamento; gasometria se grave.",
      porQue: "Isolamento e avaliação de hipercapnia.",
      esperar: "—",
      interpretacao: "pCO₂ > 50–55 com acidose → suporte ventilatório.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Lavagem nasal e aspiração",
      linha: "l1",
      dose: "SF 0,9% 1–2 mL em cada narina",
      via: "Nasal",
      intervalo: "Antes das mamadas e se obstrução",
      duracao: "Durante a doença",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Aspiração superficial; evitar aspiração profunda repetida"
    },
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Cateter nasal 0,5–2 L/min; alvo SpO₂ ≥ 90–92%",
      via: "Inalatória",
      intervalo: "Contínuo enquanto necessário",
      duracao: "Até SpO₂ estável em ar ambiente",
      monitorizacao: "SpO₂, desconforto",
      contraindicacoes: "—",
      ajustes: "Falha: cânula nasal de alto fluxo 1–2 L/kg/min"
    },
    {
      droga: "Hidratação",
      linha: "l1",
      dose: "Oral fracionada; SNG se aceitação < 50%; IV se SNG impossível",
      via: "VO / SNG / IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Diurese, peso, sódio (risco de SIADH)",
      contraindicacoes: "—",
      ajustes: "Soro IV isotônico; restringir a 2/3 da manutenção se risco de SIADH"
    },
    {
      droga: "Salina hipertônica 3% nebulizada",
      linha: "adj",
      dose: "4 mL",
      via: "Nebulização",
      intervalo: "8/8h",
      duracao: "—",
      monitorizacao: "Broncoespasmo",
      contraindicacoes: "Uso no PS (não reduz internação)",
      ajustes: "Pode ser considerada em internados com previsão de > 72 h"
    },
    {
      droga: "Broncodilatador, corticoide, antibiótico",
      linha: "ci",
      dose: "Não recomendados de rotina",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício comprovado",
      ajustes: "Antibiótico apenas com infecção bacteriana documentada (ex.: otite, pneumonia confirmada)"
    },
    {
      droga: "Prevenção: nirsevimabe / palivizumabe",
      linha: "adj",
      dose: "Conforme calendário e critérios do Ministério da Saúde",
      via: "IM",
      intervalo: "—",
      duracao: "Sazonalidade do VSR",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Prematuros e crianças com cardiopatia/doença pulmonar crônica; vacina para VSR em gestantes conforme disponibilidade"
    }
  ],
  destino: {
    agora: [
      "Suporte e estratificação de gravidade"
    ],
    reavaliar: [
      "Após aspiração e mamada: SpO₂ e esforço",
      "Alta: reavaliação em 24–48 h (pico da doença no 3º–5º dia)"
    ],
    alta: [
      "SpO₂ ≥ 90–92% em ar ambiente, desconforto leve, aceitando ≥ 50–75% da dieta",
      "Cuidadores orientados sobre lavagem nasal e sinais de alarme"
    ],
    observacao: [
      "Moderada com melhora após medidas iniciais: observar algumas horas"
    ],
    internacao: [
      "SpO₂ < 90–92%, desconforto moderado/grave, apneia, desidratação, < 3 meses com dificuldade, fatores de risco"
    ],
    transferencia: [
      "UTI pediátrica: apneias, falha de cânula de alto fluxo, hipercapnia",
      "UBS: qualquer alarme → PS"
    ]
  },
  fontes: [
    "AAP — Clinical Practice Guideline: Diagnosis, Management and Prevention of Bronchiolitis (2014, reafirmado)",
    "NICE NG9 — Bronchiolitis in children (2015, atualizado 2021)",
    "SBP — Diretrizes para o manejo da infecção causada pelo VSR (2017 e atualizações)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
