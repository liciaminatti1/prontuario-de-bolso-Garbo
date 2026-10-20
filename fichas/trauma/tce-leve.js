// Traumatismo cranioencefálico leve
registrarFicha({
  id: "tce-leve",
  especialidade: "trauma",
  caminho: "ps",
  titulo: "Traumatismo cranioencefálico leve",
  resumo: "Trauma craniano com Glasgow 13–15. Decidir quem precisa de TC, quem observa e quem pode ir para casa.",
  palavrasChave: "tce trauma cranio cabeca queda concussao glasgow tomografia canadian ct head anticoagulado idoso",
  critico: {
    tempo: "Anticoagulado = TC",
    texto: "Em uso de anticoagulante ou antiagregante duplo, idoso ≥ 65 anos ou Glasgow < 15 em 2 h: TC de crânio. Nos demais, aplicar a regra canadense."
  },
  alarmes: [
    "Glasgow < 15 em 2 h ou queda de ≥ 2 pontos",
    "Vômitos repetidos (≥ 2), cefaleia progressiva, convulsão",
    "Déficit focal, anisocoria",
    "Sinais de fratura de base (hemotímpano, olhos de guaxinim, Battle, rinorreia/otorreia de líquor) ou afundamento",
    "Anticoagulação, coagulopatia, idade ≥ 65, intoxicação"
  ],
  condutaInicial: [
    "ABCDE, imobilização cervical se mecanismo/dor cervical (regra canadense da coluna)",
    "Glasgow, pupilas, glicemia capilar",
    "Aplicar Canadian CT Head Rule",
    "Analgesia (paracetamol/dipirona); antiemético se náusea",
    "Anticoagulado: TC e, se sangramento, reverter imediatamente"
  ],
  fataisExcluir: [
    "Hematoma epidural (intervalo lúcido)",
    "Hematoma subdural (idosos, anticoagulados)",
    "Lesão cervical associada",
    "Hipoglicemia ou intoxicação mascarando o quadro",
    "Maus-tratos (crianças, idosos)"
  ],
  proximaDecisao: "TC normal + Glasgow 15 + sem fatores de risco → alta com acompanhante e orientações. Anticoagulado com TC normal → observação (considerar repetir TC conforme protocolo).",
  clinica: {
    anamnese: [
      "Mecanismo: altura (> 1 m ou 5 degraus), atropelamento, ejeção, capotamento",
      "Perda de consciência, amnésia (retrógrada > 30 min), convulsão",
      "Cefaleia, vômitos, alteração visual",
      "Anticoagulantes, antiagregantes, hepatopatia, coagulopatia",
      "Álcool e drogas; causa da queda (síncope? hipoglicemia?)"
    ],
    exameFisico: [
      "Glasgow seriado, pupilas",
      "Inspeção e palpação do crânio: afundamento, lacerações",
      "Sinais de fratura de base",
      "Exame neurológico, coluna cervical",
      "Lesões associadas"
    ],
    diferenciais: [
      { dx: "Síncope com trauma", pista: "Pródromo; investigar a causa da queda" },
      { dx: "Intoxicação alcoólica", pista: "Não atribuir rebaixamento só ao álcool" },
      { dx: "AVC com queda", pista: "Déficit focal desproporcional" },
      { dx: "Hipoglicemia", pista: "Glicemia capilar" }
    ],
    gravidade: [
      "Leve: Glasgow 13–15 · moderado: 9–12 · grave: ≤ 8",
      "Canadian CT Head Rule — alto risco: Glasgow < 15 em 2 h, suspeita de fratura aberta/afundamento, sinais de fratura de base, ≥ 2 vômitos, idade ≥ 65",
      "Médio risco: amnésia retrógrada ≥ 30 min, mecanismo perigoso"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — trauma. Informar Glasgow e uso de anticoagulante.",
      porQue: "Detectar lesão intracraniana com indicação neurocirúrgica.",
      esperar: "Normal na maioria dos TCE leves.",
      interpretacao: "Hematoma, contusão ou fratura → neurocirurgia.",
      limitacoes: "A regra canadense não se aplica a anticoagulados, < 16 anos, convulsão, trauma penetrante, Glasgow < 13."
    },
    {
      nome: "Coagulograma",
      pedido: "TP/INR, TTPa, plaquetas — se anticoagulado, hepatopata ou coagulopatia.",
      porQue: "Guiar reversão.",
      esperar: "—",
      interpretacao: "INR > 1,5 com sangramento → reversão.",
      limitacoes: "DOACs podem ter coagulograma normal."
    },
    {
      nome: "Imagem cervical",
      pedido: "TC de coluna cervical — se regra canadense da coluna/NEXUS positiva.",
      porQue: "Lesão cervical associada.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Paracetamol / dipirona",
      linha: "l1",
      dose: "Paracetamol 500–1.000 mg · dipirona 500–1.000 mg",
      via: "VO ou IV",
      intervalo: "6/6h se necessário",
      duracao: "Poucos dias",
      monitorizacao: "Cefaleia progressiva = reavaliar",
      contraindicacoes: "—",
      ajustes: "Evitar AINE nas primeiras 24–48 h se suspeita de sangramento; evitar sedativos e opioides"
    },
    {
      droga: "Reversão da varfarina",
      linha: "l1",
      dose: "Vitamina K 10 mg IV lento + complexo protrombínico 25–50 U/kg (ou plasma 15 mL/kg se indisponível)",
      via: "IV",
      intervalo: "Dose única; repetir INR",
      duracao: "—",
      monitorizacao: "INR 30 min após",
      contraindicacoes: "—",
      ajustes: "Somente se sangramento intracraniano"
    },
    {
      droga: "Reversão de DOAC",
      linha: "l1",
      dose: "Dabigatrana: idarucizumabe 5 g IV · anti-Xa (rivaroxabana, apixabana): andexanete ou complexo protrombínico 50 U/kg",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Clínica e imagem",
      contraindicacoes: "—",
      ajustes: "Conforme disponibilidade e protocolo local"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "4–8 mg",
      via: "IV ou VO",
      intervalo: "8/8h se necessário",
      duracao: "—",
      monitorizacao: "QT",
      contraindicacoes: "QT longo",
      ajustes: "Vômitos persistentes exigem reavaliação e imagem"
    }
  ],
  destino: {
    agora: [
      "Decidir imagem pela regra canadense (ou TC direta em anticoagulados e idosos)"
    ],
    reavaliar: [
      "Glasgow e pupilas a cada 30 min até Glasgow 15, depois a cada 1–2 h"
    ],
    alta: [
      "Glasgow 15, TC normal ou não indicada, sem vômitos, dor controlada",
      "Acompanhante responsável por 24 h",
      "Orientação escrita: voltar se vômitos, sonolência, cefaleia que piora, confusão, convulsão, fraqueza, alteração visual",
      "Concussão: repouso relativo 24–48 h e retorno gradual às atividades e esportes"
    ],
    observacao: [
      "Anticoagulados com TC normal: observação conforme protocolo (em geral 12–24 h)",
      "Sem acompanhante ou intoxicado"
    ],
    internacao: [
      "Lesão na TC, Glasgow < 15 persistente, déficit, coagulopatia"
    ],
    transferencia: [
      "Lesão intracraniana sem neurocirurgia local",
      "UBS/sem TC: indicação de imagem → PS com tomógrafo"
    ]
  },
  fontes: [
    "Stiell IG et al. Canadian CT Head Rule (Lancet 2001)",
    "NICE NG232 — Head injury: assessment and early management (2023)",
    "ATLS — Advanced Trauma Life Support, 10ª ed."
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
