// Depressão e ansiedade
registrarFicha({
  id: "depressao-ansiedade",
  especialidade: "saude-mental",
  caminho: "ubs",
  titulo: "Depressão e ansiedade",
  resumo: "Rastreamento, avaliação de risco de suicídio, início de antidepressivo e seguimento na atenção primária.",
  palavrasChave: "depressao ansiedade tag panico phq-9 gad-7 suicidio sertralina fluoxetina escitalopram isrs caps saude mental",
  critico: {
    tempo: "Pergunte sobre suicídio",
    texto: "Pergunte diretamente sobre ideação, plano e meios. Perguntar não induz o comportamento. Risco alto → não deixar o paciente sozinho e acionar a rede (CAPS/PS)."
  },
  alarmes: [
    "Ideação suicida com plano, intenção ou tentativa recente",
    "Sintomas psicóticos (alucinações, delírios)",
    "Episódio de mania/hipomania atual ou prévio (transtorno bipolar)",
    "Incapacidade de cuidar de si, recusa alimentar",
    "Uso abusivo de álcool ou drogas, violência doméstica"
  ],
  condutaInicial: [
    "Aplicar PHQ-9 (depressão) e GAD-7 (ansiedade)",
    "Avaliar risco de suicídio (ideação, plano, meios, tentativas, suporte)",
    "Rastrear bipolaridade antes de antidepressivo (episódios de euforia, pouca necessidade de sono)",
    "Excluir causas orgânicas e medicamentosas (TSH, hemograma, B12 se indicado)",
    "Plano: psicoeducação, atividade física, psicoterapia; ISRS se moderado/grave"
  ],
  fataisExcluir: [
    "Risco de suicídio",
    "Transtorno bipolar (antidepressivo isolado pode induzir mania)",
    "Depressão psicótica",
    "Delirium ou causa orgânica (hipotireoidismo, demência, tumor)"
  ],
  proximaDecisao: "Reavaliar em 2–4 semanas após iniciar ISRS (efeitos adversos, risco). Sem resposta parcial em 4–6 semanas de dose adequada → aumentar dose; sem resposta em 8–12 semanas → trocar ou encaminhar.",
  clinica: {
    anamnese: [
      "Humor deprimido, anedonia, sono, apetite, energia, concentração, culpa, lentificação ou agitação (≥ 2 semanas)",
      "Preocupação excessiva, tensão, irritabilidade, crises de pânico",
      "Ideação suicida, tentativas prévias, acesso a meios (armas, medicamentos)",
      "Eventos de vida, luto, violência, situação social",
      "Álcool, drogas, medicações (corticoide, isotretinoína, betabloqueador)",
      "Gestação e puerpério"
    ],
    exameFisico: [
      "Exame do estado mental: aparência, humor, afeto, pensamento, sensopercepção, juízo",
      "Sinais de autolesão",
      "Sinais de hipotireoidismo, doenças crônicas"
    ],
    diferenciais: [
      { dx: "Transtorno bipolar", pista: "Episódios de mania/hipomania, história familiar" },
      { dx: "Luto normal", pista: "Relacionado à perda, preserva autoestima" },
      { dx: "Hipotireoidismo, anemia, B12", pista: "Exames alterados" },
      { dx: "Uso de substâncias", pista: "Sintomas relacionados ao uso ou abstinência" },
      { dx: "Demência (idoso)", pista: "Déficit cognitivo progressivo" }
    ],
    gravidade: [
      "PHQ-9: 5–9 leve · 10–14 moderada · 15–19 moderadamente grave · ≥ 20 grave",
      "GAD-7: 5–9 leve · 10–14 moderada · ≥ 15 grave",
      "Item 9 do PHQ-9 positivo → avaliar risco de suicídio na hora"
    ]
  },
  exames: [
    {
      nome: "Exames para causas orgânicas",
      pedido: "TSH, hemograma, glicemia; vitamina B12 e sorologias (sífilis, HIV) se indicado.",
      porQue: "Excluir causas tratáveis.",
      esperar: "—",
      interpretacao: "Alteração → tratar a causa em paralelo.",
      limitacoes: "Não atrasar o cuidado em saúde mental aguardando exames."
    },
    {
      nome: "ECG",
      pedido: "ECG — antes de tricíclicos ou citalopram/escitalopram em doses altas, idosos ou cardiopatas.",
      porQue: "QT longo, arritmias.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Sertralina",
      linha: "l1",
      dose: "Iniciar 25–50 mg; aumentar 50 mg a cada 2–4 semanas até 50–200 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "6–12 meses após remissão (1º episódio); 2 anos ou mais se recorrente",
      monitorizacao: "Náusea, diarreia, insônia, disfunção sexual, ideação suicida (< 25 anos)",
      contraindicacoes: "Uso de IMAO; mania",
      ajustes: "Boa opção em cardiopatas e na gestação/lactação"
    },
    {
      droga: "Fluoxetina",
      linha: "l1",
      dose: "20 mg; até 40–60 mg",
      via: "VO, pela manhã",
      intervalo: "1×/dia",
      duracao: "Igual à sertralina",
      monitorizacao: "Ansiedade/insônia no início, interações (CYP2D6)",
      contraindicacoes: "IMAO, mania",
      ajustes: "Meia-vida longa, menor síndrome de descontinuação. Disponível na RENAME"
    },
    {
      droga: "Escitalopram",
      linha: "alt",
      dose: "10 mg; até 20 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Igual à sertralina",
      monitorizacao: "QT em doses altas",
      contraindicacoes: "QT longo, IMAO",
      ajustes: "Idoso: máx 10 mg"
    },
    {
      droga: "Amitriptilina / nortriptilina",
      linha: "alt",
      dose: "Amitriptilina 25 mg ao deitar, até 75–150 mg · nortriptilina 25–100 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "—",
      monitorizacao: "Sedação, anticolinérgico, hipotensão postural",
      contraindicacoes: "Risco de suicídio (letal em overdose), arritmia, IAM recente, glaucoma, idoso",
      ajustes: "Prescrever quantidades pequenas se houver risco"
    },
    {
      droga: "Benzodiazepínicos",
      linha: "adj",
      dose: "Ex.: clonazepam 0,25–0,5 mg",
      via: "VO",
      intervalo: "Se necessário",
      duracao: "Máximo 2–4 semanas, só no início do ISRS",
      monitorizacao: "Dependência, quedas, sedação",
      contraindicacoes: "Uso de álcool, idosos, apneia, gestação",
      ajustes: "Não são tratamento de manutenção"
    }
  ],
  destino: {
    agora: [
      "Avaliar risco, iniciar plano terapêutico, construir rede de apoio",
      "Risco alto de suicídio: não liberar sozinho; acompanhar até CAPS ou PS"
    ],
    reavaliar: [
      "2–4 semanas após início (ou 1 semana se risco)",
      "Mensal até remissão, com PHQ-9/GAD-7"
    ],
    alta: [
      "Seguimento longitudinal na UBS com apoio do NASF/eMulti"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Risco iminente de suicídio, psicose, incapacidade grave de autocuidado"
    ],
    transferencia: [
      "CAPS: transtorno grave e persistente, bipolar, psicose, uso problemático de substâncias (CAPS AD), falha de 2 antidepressivos",
      "PS/emergência psiquiátrica: risco iminente",
      "CVV: 188 (24 h, gratuito)"
    ]
  },
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 34: Saúde Mental (2013)",
    "WHO — mhGAP Intervention Guide, version 2.0 (2016)",
    "NICE NG222 — Depression in adults: treatment and management (2022)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
