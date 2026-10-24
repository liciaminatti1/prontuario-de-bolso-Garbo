// Obesidade no adulto
registrarFicha({
  id: "obesidade",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Obesidade no adulto",
  resumo: "IMC ≥ 30 kg/m² (sobrepeso 25–29,9) com avaliação de adiposidade central e complicações. Mudança de estilo de vida, farmacoterapia e indicação cirúrgica.",
  palavrasChave: "obesidade sobrepeso imc emagrecimento perda de peso semaglutida tirzepatida liraglutida orlistate bariatrica circunferencia abdominal",
  critico: {
    tempo: "Meta inicial: perder 5–10%",
    texto: "Perda de 5–10% do peso já melhora PA, glicemia, lipídios e esteatose. Trate a obesidade como doença crônica, sem julgamento."
  },
  alarmes: [
    "Perda de peso rápida não intencional (investigar outra causa)",
    "Apneia do sono com sonolência diurna importante",
    "IMC ≥ 40 ou ≥ 35 com comorbidade grave",
    "Transtorno alimentar (compulsão, purgação)",
    "Obesidade de início recente com sinais de Cushing ou hipotireoidismo"
  ],
  condutaInicial: [
    "Medir peso, altura, IMC e circunferência abdominal; avaliar comorbidades",
    "Investigar causas secundárias e medicamentos que engordam (antipsicóticos, corticoide, alguns antidepressivos)",
    "Plano alimentar com déficit de ~500–750 kcal/dia e atividade física de 150–300 min/semana",
    "Farmacoterapia se IMC ≥ 30, ou ≥ 27 com comorbidade, após ou junto com MEV",
    "Avaliar cirurgia bariátrica conforme critérios"
  ],
  fataisExcluir: [
    "Apneia obstrutiva do sono grave",
    "Diabetes e doença cardiovascular não diagnosticados",
    "Causas endócrinas (Cushing, hipotireoidismo)"
  ],
  proximaDecisao: "Perda < 5% em 3 meses com dose plena → ajustar ou trocar o fármaco. IMC ≥ 40, ou ≥ 35 com comorbidade, sem resposta clínica → encaminhar para cirurgia bariátrica.",
  clinica: {
    anamnese: [
      "Evolução do peso, tentativas prévias, padrão alimentar, compulsão",
      "Atividade física, sono, ronco e sonolência",
      "Medicamentos, tabagismo, álcool",
      "Comorbidades: DM, HAS, dislipidemia, esteatose, artrose, SOP, depressão"
    ],
    exameFisico: [
      "Peso, altura, IMC, circunferência abdominal (risco: homem > 94 cm, mulher > 80 cm; alto: > 102 / > 88)",
      "PA com manguito adequado",
      "Acantose nigricans, estrias violáceas, giba",
      "Tireoide"
    ],
    diferenciais: [
      { dx: "Hipotireoidismo", pista: "TSH elevado" },
      { dx: "Síndrome de Cushing", pista: "Estrias violáceas largas, fraqueza proximal, HAS" },
      { dx: "Ganho por medicamentos", pista: "Início relacionado ao fármaco" }
    ],
    gravidade: [
      "Sobrepeso 25–29,9 · Obesidade I 30–34,9 · II 35–39,9 · III ≥ 40 kg/m²",
      "Complicações (DM2, apneia, esteatose, artrose) pesam mais que o IMC isolado"
    ]
  },
  exames: [
    { nome: "Avaliação metabólica", pedido: "Glicemia de jejum e HbA1c, colesterol total e frações, triglicerídeos, TGO, TGP, creatinina, TSH, urina tipo 1.", porQue: "Comorbidades e segurança dos fármacos.", esperar: "—", interpretacao: "Alterações orientam a escolha (ex.: GLP-1 se DM2).", limitacoes: "—" },
    { nome: "Polissonografia", pedido: "Polissonografia — se ronco com pausas ou sonolência diurna (escore STOP-Bang alto).", porQue: "Apneia obstrutiva do sono.", esperar: "—", interpretacao: "IAH ≥ 15 ou ≥ 5 com sintomas → CPAP.", limitacoes: "Acesso limitado." }
  ],
  tratamento: [
    { droga: "Semaglutida (agonista GLP-1)", linha: "l1", dose: "0,25 mg/semana, aumentar a cada 4 semanas: 0,5 → 1 → 1,7 → 2,4 mg/semana", via: "SC", intervalo: "Semanal", duracao: "Contínuo (reganho ao suspender)", monitorizacao: "Náusea, vômitos, constipação, colelitíase", contraindicacoes: "Carcinoma medular de tireoide/NEM2, gestação, pancreatite prévia", ajustes: "Alternativas: tirzepatida 2,5 → 15 mg/semana; liraglutida 0,6 → 3 mg/dia. Não disponíveis no SUS para obesidade" },
    { droga: "Orlistate", linha: "alt", dose: "120 mg", via: "VO, com as refeições que contêm gordura", intervalo: "3×/dia", duracao: "Contínuo", monitorizacao: "Esteatorreia, vitaminas lipossolúveis", contraindicacoes: "Má absorção, colestase", ajustes: "Associar multivitamínico à noite" },
    { droga: "Bupropiona + naltrexona", linha: "alt", dose: "8/90 mg 1×/dia → 2 comprimidos 12/12h em 4 semanas", via: "VO", intervalo: "12/12h", duracao: "Contínuo", monitorizacao: "PA, humor", contraindicacoes: "Epilepsia, uso de opioides, HAS não controlada, IMAO", ajustes: "—" },
    { droga: "Sibutramina", linha: "ci", dose: "Evitar se doença cardiovascular", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "DCV, HAS não controlada, arritmia, AVC", ajustes: "Receita especial B2" }
  ],
  prescricao: {
    ambulatorial: "PLANO TERAPÊUTICO\n1. Alimentação: reduzir cerca de 500 kcal/dia (porções menores, menos ultraprocessados, bebidas açucaradas e álcool).\n2. Atividade física: 150 a 300 minutos por semana de caminhada ou equivalente + exercícios de força 2×/semana.\n3. Sono: 7–8 horas por noite.\n\nUSO SUBCUTÂNEO (se indicado e disponível)\n4. Semaglutida 2,4 mg (caneta) ---------------------- 1 caneta\n   Aplicar 0,25 mg por semana, sempre no mesmo dia, por 4 semanas; aumentar a dose a cada 4 semanas conforme tolerância (0,5 → 1 → 1,7 → 2,4 mg).\n\nMeta: perder 5–10% do peso em 6 meses."
  },
  orientacoesRetorno: [
    "Pesar-se 1 vez por semana, no mesmo horário",
    "Comer devagar e parar ao primeiro sinal de saciedade (sobretudo em uso de GLP-1)",
    "Procurar atendimento se dor abdominal intensa, vômitos persistentes ou dor no lado direito da barriga",
    "Retorno mensal no início; depois a cada 3 meses"
  ],
  destino: {
    agora: ["MEV estruturada e avaliação de comorbidades"],
    reavaliar: ["Mensal no início, com peso e circunferência", "Resposta ao fármaco em 3 meses (≥ 5%)"],
    alta: ["Seguimento longitudinal na UBS, com nutrição e eMulti"],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: ["Cirurgia bariátrica: IMC ≥ 40, ou ≥ 35 com comorbidade, após tratamento clínico; (IMC 30–35 com DM2 de difícil controle: cirurgia metabólica, conforme CFM)", "Endocrinologia: suspeita de causa secundária", "Saúde mental: transtorno alimentar"]
  },
  fontes: [
    "ABESO/SBEM — Diretrizes Brasileiras de Obesidade (2016) e posicionamentos de tratamento farmacológico (2022–2024)",
    "Ministério da Saúde — Linha de cuidado do sobrepeso e obesidade",
    "CFM — Resolução nº 2.172/2017 (cirurgia metabólica)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
