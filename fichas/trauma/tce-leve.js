// Traumatismo cranioencefálico leve
registrarFicha({
  id: "tce-leve",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
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
    "xABCDE (ATLS 11ª ed.), restrição de movimento cervical se mecanismo/dor cervical (regra canadense da coluna)",
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
      ajustes: "Somente se sangramento intracraniano. Vitamina K em 50 mL SF em 20–30 min. Complexo protrombínico por INR (conforme bula): INR 2–4 25 U/kg; 4–6 35 U/kg; > 6 50 U/kg"
    },
    {
      droga: "Reversão de DOAC",
      linha: "l1",
      dose: "Dabigatrana: idarucizumabe 5 g IV · anti-Xa (rivaroxabana, apixabana): complexo protrombínico 50 U/kg (andexanete só se disponível; registro no Brasil não confirmado)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Clínica e imagem",
      contraindicacoes: "—",
      ajustes: "Conforme disponibilidade e protocolo local. Idarucizumabe: 2 frascos de 2,5 g IV em bolus ou infusões consecutivas"
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
    },
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "1 g em 10 min + 1 g em 8 h",
      via: "IV",
      intervalo: "Dose única + infusão",
      duracao: "Iniciar em até 3 h do trauma",
      monitorizacao: "Trombose, convulsão",
      contraindicacoes: "> 3 h do trauma, trombose ativa",
      ajustes: "CRASH-3: benefício em TCE leve a moderado (Glasgow 9–15) com sangramento intracraniano, se iniciado em até 3 h. Ampola 250 mg/5 mL: 1 g em 100 mL SF em 10 min; 1 g em 500 mL SF a 62 mL/h"
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
  prescricao: {
    hospitalar: "PRESCRIÇÃO — OBSERVAÇÃO NO PS (TCE LEVE, ADULTO)\n1. Dieta zero até avaliação da TC e ausência de vômitos; depois dieta leve.\n2. Cabeceira 30°; restrição de movimento cervical até liberação clínica ou por imagem.\n3. SF 0,9% 500 mL IV a 42 mL/h (manter acesso).\n4. Dipirona 1 g IV lento de 6 em 6 horas se dor (ou paracetamol 750 mg VO de 6 em 6 horas).\n5. Ondansetrona 4 mg IV lento de 8 em 8 horas se náusea.\n6. Se TC com sangramento e < 3 h do trauma: ácido tranexâmico 1 g + SF 0,9% 100 mL IV em 10 min, depois 1 g + SF 0,9% 500 mL IV em 8 h.\n7. Se em uso de varfarina com sangramento intracraniano: vitamina K 10 mg + SF 0,9% 50 mL IV em 30 min + complexo protrombínico 25–50 U/kg IV conforme INR.\n8. Não usar sedativos, opioides ou AINE.\n9. Cuidados: Glasgow e pupilas de 30 em 30 min até Glasgow 15, depois de 1 em 1 hora por 4 h e de 2 em 2 horas; glicemia capilar; avisar se queda de 1 ponto no Glasgow, cefaleia que piora, vômitos ou anisocoria (repetir TC).\n\nALTA (USO ORAL)\n1. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor de cabeça, por até 3 dias.\n   (ou Paracetamol 750 mg: 1 comprimido de 6 em 6 horas se dor, máx 4 por dia.)"
  },
  orientacoesRetorno: [
    "Ficar com um adulto responsável nas primeiras 24 horas",
    "Repouso relativo por 24–48 horas e volta gradual às atividades; esportes de contato só após liberação e sem sintomas",
    "Não beber álcool, não usar calmantes nem dirigir nas primeiras 24 horas",
    "Dor de cabeça leve, tontura, cansaço e dificuldade de concentração podem durar dias a semanas",
    "Voltar imediatamente se: sonolência difícil de acordar, confusão, vômitos repetidos, dor de cabeça que piora, convulsão, fraqueza ou dormência, visão dupla, pupilas diferentes, saída de líquido claro pelo nariz ou ouvido",
    "Procurar a UBS se os sintomas durarem mais de 2 semanas"
  ],
  fontes: [
    "American College of Surgeons — ATLS: Advanced Trauma Life Support, 11ª ed. (2025)",
    "NICE NG232 — Head injury: assessment and early management (2023)",
    "Stiell IG et al. Canadian CT Head Rule (Lancet 2001)",
    "CRASH-3 Trial Collaborators — ácido tranexâmico no TCE (Lancet 2019)"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
