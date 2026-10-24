// Ruptura esofágica — síndrome de Boerhaave e perfuração esofágica
registrarFicha({
  id: "ruptura-esofagica",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Ruptura esofágica (síndrome de Boerhaave) e perfuração de esôfago",
  resumo: "Ruptura transmural do esôfago, em geral distal à esquerda, após vômitos intensos (Boerhaave), ou iatrogênica (endoscopia, dilatação, ETE), por corpo estranho ou trauma. Dor torácica/epigástrica intensa após vômito, enfisema subcutâneo e sepse rápida. Alta mortalidade se diagnóstico tardio.",
  palavrasChave: "boerhaave ruptura esofagica perfuracao de esofago triade de mackler enfisema subcutaneo pneumomediastino mediastinite hidropneumotorax esquerdo vomito dor toracica esofagograma contraste hidrossoluvel",
  critico: {
    tempo: "Dieta zero + ATB + cirurgia",
    texto: "Dor torácica após vômitos com enfisema subcutâneo ou pneumomediastino = Boerhaave até prova em contrário. Dieta zero absoluta, antibiótico de amplo espectro + antifúngico, IBP, TC e cirurgia torácica/digestiva imediatamente."
  },
  alarmes: [
    "Tríade de Mackler: vômitos + dor torácica intensa + enfisema subcutâneo",
    "Sinal de Hamman (crepitação sincrônica com o coração), pneumomediastino",
    "Derrame pleural/hidropneumotórax à esquerda, saída de líquido com restos alimentares no dreno de tórax",
    "Sepse, choque, insuficiência respiratória",
    "Dor torácica ou febre após endoscopia, dilatação ou ecocardiograma transesofágico"
  ],
  condutaInicial: [
    "Dieta zero absoluta (nem água), cabeceira elevada",
    "Monitor, 2 acessos, oxigênio, cristaloide guiado por perfusão",
    "Exames: hemograma, PCR, lactato, função renal, eletrólitos, amilase (sérica e do líquido pleural), coagulograma, tipagem, hemoculturas",
    "ECG e troponina (excluir SCA), RX de tórax",
    "TC de tórax e abdome com contraste IV e contraste oral hidrossolúvel (ou esofagograma com contraste hidrossolúvel)",
    "Antibiótico de amplo espectro + antifúngico, IBP IV",
    "Drenagem torácica se derrame/pneumotórax significativo",
    "Acionar cirurgia torácica/digestiva e endoscopia; não passar SNG às cegas"
  ],
  fataisExcluir: [
    "Síndrome coronariana aguda",
    "Dissecção de aorta",
    "Tromboembolismo pulmonar",
    "Pneumotórax hipertensivo",
    "Úlcera perfurada, pancreatite aguda"
  ],
  proximaDecisao: "Perfuração contida, pequena, sem sepse (sobretudo iatrogênica precoce) → tratamento conservador ou endoscópico (clipes, prótese, vácuo endoscópico) em centro especializado. Perfuração livre, sepse, contaminação pleural/mediastinal → cirurgia (reparo primário com reforço, drenagem; ressecção/exclusão em casos graves). Em todos: nutrição enteral distal (jejunostomia/sonda posicionada por endoscopia) ou parenteral.",
  clinica: {
    anamnese: [
      "Vômitos intensos (etilismo, excesso alimentar) seguidos de dor torácica/epigástrica súbita, irradiada para dorso ou ombro esquerdo",
      "Endoscopia, dilatação, ETE, intubação ou sonda recente",
      "Ingestão de corpo estranho, cáustico, trauma",
      "Dispneia, disfagia, odinofagia, febre"
    ],
    exameFisico: [
      "Enfisema subcutâneo cervical/torácico",
      "Taquicardia, taquipneia, febre, hipotensão",
      "Murmúrio diminuído à esquerda (derrame, pneumotórax)",
      "Abdome agudo alto (perfuração do esôfago abdominal)"
    ],
    diferenciais: [
      { dx: "Síndrome de Mallory-Weiss", pista: "Hematêmese após vômitos, sem enfisema nem pneumomediastino (laceração não transmural)" },
      { dx: "IAM / dissecção de aorta", pista: "ECG, troponina, angio-TC" },
      { dx: "Pneumomediastino espontâneo", pista: "Jovem, asma/esforço, sem vômitos intensos e sem extravasamento de contraste; evolução benigna" },
      { dx: "Pancreatite / úlcera perfurada", pista: "Lipase, ar livre subdiafragmático" }
    ],
    gravidade: [
      "Tempo até o tratamento é o principal determinante: < 24 h tem prognóstico muito melhor",
      "Sepse, choque e contaminação pleural ampla = alta mortalidade",
      "Escore de Pittsburgh pode ajudar a estratificar (idade, taquicardia, leucocitose, derrame, febre, extravasamento não contido, dificuldade respiratória, tempo > 24 h, câncer, hipotensão)"
    ]
  },
  exames: [
    {
      nome: "TC de tórax e abdome com contraste",
      pedido: "Tomografia de tórax e abdome superior com contraste endovenoso e contraste oral hidrossolúvel — suspeita de perfuração esofágica.",
      porQue: "Exame de escolha: pneumomediastino, coleções, derrame, extravasamento.",
      esperar: "Ar extraluminal periesofágico, líquido mediastinal, derrame pleural esquerdo.",
      interpretacao: "Extravasamento livre ou coleção = tratamento cirúrgico/endoscópico.",
      limitacoes: "Não usar bário na suspeita (mediastinite química)."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax PA (e cervical em perfil se suspeita cervical).",
      porQue: "Triagem rápida.",
      esperar: "Pneumomediastino, enfisema subcutâneo, derrame/hidropneumotórax à esquerda, sinal do V de Naclerio.",
      interpretacao: "—",
      limitacoes: "Pode ser normal nas primeiras horas."
    },
    {
      nome: "Líquido pleural",
      pedido: "Análise do líquido pleural: pH, amilase, Gram e cultura, pesquisa de fungos.",
      porQue: "Derrame associado.",
      esperar: "pH baixo (< 7,0), amilase elevada (salivar), restos alimentares.",
      interpretacao: "Sugere comunicação com o esôfago.",
      limitacoes: "—"
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, lactato, ureia, creatinina, Na, K, amilase, TP/INR, TTPa, tipagem, hemoculturas 2 pares; ECG e troponina.",
      porQue: "Sepse, preparo cirúrgico, diferenciais.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Piperacilina-tazobactam",
      linha: "l1",
      dose: "4,5 g",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Em geral 7–14 dias conforme controle do foco",
      monitorizacao: "Culturas, função renal",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alternativa: meropenem 1 g IV 8/8 h. Considerar vancomicina se MRSA/choque"
    },
    {
      droga: "Fluconazol",
      linha: "l1",
      dose: "Ataque 800 mg (12 mg/kg); depois 400 mg (6 mg/kg)",
      via: "IV",
      intervalo: "24/24 h",
      duracao: "Conforme culturas e evolução",
      monitorizacao: "Função hepática, QT",
      contraindicacoes: "—",
      ajustes: "Choque ou uso prévio de azólico: equinocandina (caspofungina 70 mg ataque e 50 mg/dia; micafungina 100 mg/dia). ClCr < 50: metade da dose de manutenção"
    },
    {
      droga: "Omeprazol IV",
      linha: "l1",
      dose: "40 mg",
      via: "IV",
      intervalo: "12/12 h",
      duracao: "Enquanto em jejum",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pantoprazol 40 mg IV é equivalente"
    },
    {
      droga: "Reparo cirúrgico / terapia endoscópica + drenagem",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica ou endoscópica",
      intervalo: "—",
      duracao: "Urgente",
      monitorizacao: "Fístula, empiema, mediastinite",
      contraindicacoes: "—",
      ajustes: "Drenagem torácica de derrames; nutrição enteral distal ou parenteral precoce"
    }
  ],
  destino: {
    agora: [
      "Dieta zero, antibiótico + antifúngico, IBP, TC e cirurgia"
    ],
    reavaliar: [
      "Sinais de sepse, débito e aspecto de drenos de tórax"
    ],
    alta: [
      "Após resolução, com dieta liberada após controle radiológico/endoscópico e seguimento"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Sempre; UTI na maioria"
    ],
    transferencia: [
      "Sem cirurgia torácica/digestiva ou endoscopia terapêutica: transferir com urgência após antibiótico e estabilização"
    ]
  },
  prescricao: {
    hospitalar: "SUSPEITA DE RUPTURA ESOFÁGICA — ADULTO\n1. Dieta zero absoluta (inclusive água e medicações VO).\n2. Cabeceira elevada 30–45°.\n3. Monitor; oxigênio para SpO₂ ≥ 94%.\n4. Ringer lactato 500 mL IV em 30 min; repetir conforme perfusão.\n5. Piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n6. Fluconazol 800 mg IV no 1º dia; depois 400 mg IV 1 vez ao dia.\n7. Omeprazol 40 mg IV de 12/12 h.\n8. Dipirona 1 g IV de 6/6 h; morfina 2–4 mg IV SN dor.\n9. Ondansetrona 4 mg IV de 8/8 h (evitar novos vômitos).\n10. NÃO passar sonda nasogástrica às cegas.\n11. Hemoculturas; TC de tórax e abdome com contraste oral hidrossolúvel.\n12. Cirurgia torácica/digestiva imediata.",
    ambulatorial: "ALTA (após tratamento)\n1. Dieta conforme liberação da equipe (progressão de líquidos para pastosa e sólida).\n2. Omeprazol 20 mg — 2 cápsulas em jejum por tempo definido pela equipe.\n3. Abstinência de álcool."
  },
  orientacoesRetorno: [
    "Seguir a dieta liberada pela equipe, sem pular etapas",
    "Evitar álcool e episódios de vômitos; procurar tratamento para o uso de álcool se for o caso",
    "Voltar imediatamente se: dor no peito, febre, falta de ar, dificuldade ou dor para engolir, inchaço com crepitação no pescoço",
    "Retornos com a cirurgia e endoscopia conforme agendado"
  ],
  fontes: [
    "WSES — Esophageal emergencies: WSES guidelines (Chirica et al., 2019)",
    "ESGE — Diagnosis and management of iatrogenic endoscopic perforations: ESGE Position Statement update (2020)",
    "IDSA — Clinical Practice Guideline for the Management of Candidiasis (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
