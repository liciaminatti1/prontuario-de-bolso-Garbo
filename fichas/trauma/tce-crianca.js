// TCE na criança — PECARN e conduta
registrarFicha({
  id: "tce-crianca",
  especialidade: "trauma",
  caminho: "ps",
  publico: "pediatrico",
  formato: "completo",
  titulo: "TCE na criança: regras PECARN e conduta",
  resumo: "Criança com trauma de crânio. Para Glasgow 14–15 nas primeiras 24 h, a regra PECARN identifica quem precisa de TC, quem pode ser observado e quem pode ir para casa sem TC. Inclui conduta no TCE moderado/grave e alerta para maus-tratos.",
  palavrasChave: "tce crianca trauma craniano pediatrico pecarn tomografia queda bebe lactente hematoma de couro cabeludo concussao glasgow pediatrico maus tratos observacao vomitos",
  critico: {
    tempo: "PECARN: TC só quando indicada",
    texto: "Glasgow 14–15: aplique a regra PECARN pela idade (< 2 anos ou ≥ 2 anos). Glasgow ≤ 13: TC imediata e conduta de TCE moderado/grave. Evite radiação desnecessária: risco intermediário pode ser observado."
  },
  alarmes: [
    "Glasgow ≤ 14, agitação, sonolência, perguntas repetitivas ou resposta lenta",
    "Fratura de crânio palpável (< 2 anos) ou sinais de fratura de base (≥ 2 anos)",
    "Fontanela abaulada, convulsão, déficit focal, anisocoria",
    "Vômitos persistentes ou que pioram, cefaleia intensa progressiva",
    "Coagulopatia (hemofilia, anticoagulante), derivação ventriculoperitoneal",
    "Suspeita de maus-tratos: lactente que ainda não anda com hematoma, história incompatível, demora em buscar atendimento, outras lesões",
    "Lactente < 3 meses com qualquer hematoma de couro cabeludo"
  ],
  condutaInicial: [
    "xABCDE com restrição cervical se mecanismo ou exame indicam",
    "Glasgow pediátrico, pupilas, fontanela, glicemia capilar se rebaixado",
    "Glasgow ≤ 13: TC imediata, neuroproteção (SpO₂ ≥ 94%, PAS > 70 + 2 × idade, PaCO₂ 35–40) e neurocirurgia — ver ficha tce-moderado-grave",
    "Glasgow 14–15 até 24 h do trauma: aplicar PECARN (ver tabela) separando < 2 anos e ≥ 2 anos",
    "Alto risco PECARN: TC de crânio sem contraste",
    "Risco intermediário: observação de 4–6 h a partir do trauma ou TC, decidida com a família, considerando experiência do médico, múltiplos achados versus isolado, piora durante a observação, idade < 3 meses e preferência dos pais",
    "Baixo risco (nenhum critério): não fazer TC; alta com orientações",
    "Analgesia (paracetamol ou dipirona) e antiemético se vômitos; evitar sedação para não mascarar o exame",
    "Sempre avaliar maus-tratos; se suspeita, internar para proteção, investigar (fundo de olho, radiografias de esqueleto) e notificar"
  ],
  fataisExcluir: [
    "Hematoma epidural (pode haver intervalo lúcido; criança pode piorar rápido)",
    "Hematoma subdural (lactente: pensar em trauma abusivo)",
    "Trauma craniano abusivo (síndrome do bebê sacudido)",
    "Lesão cervical associada",
    "Hipovolemia por lesão extracraniana ou por hematoma subgaleal extenso no lactente"
  ],
  proximaDecisao: "Durante a observação, piora (vômitos persistentes, sonolência, Glasgow < 15, cefaleia progressiva) → TC. Assintomático após 4–6 h de observação, com cuidador confiável → alta com orientações. TC com lesão → neurocirurgia e internação.",
  clinica: {
    anamnese: [
      "Mecanismo e altura da queda, superfície de impacto",
      "Perda de consciência e duração, convulsão, vômitos (número), cefaleia, amnésia",
      "Comportamento atual segundo os pais (\"está agindo normalmente?\")",
      "Doenças: coagulopatia, derivação ventricular, distúrbio neurológico prévio",
      "História coerente com a idade e o desenvolvimento? Quem estava com a criança"
    ],
    exameFisico: [
      "Glasgow pediátrico (adaptado para a idade verbal), pupilas",
      "Fontanela (abaulada?), hematoma de couro cabeludo (local: frontal tem menor risco que occipital, parietal e temporal), depressão palpável",
      "Sinais de fratura de base: hemotímpano, olhos de guaxinim, sinal de Battle, otoliquorreia/rinoliquorreia",
      "Exame neurológico focal, marcha",
      "Pele inteira: equimoses em diferentes estágios, padrão (orelhas, pescoço, tronco em lactente que não anda), queimaduras"
    ],
    diferenciais: [
      { dx: "Concussão", pista: "Sintomas transitórios (cefaleia, tontura, lentidão) com TC não indicada ou normal" },
      { dx: "Trauma abusivo", pista: "Lactente, história vaga ou mutável, hemorragia retiniana, fraturas de idades diferentes" },
      { dx: "Síncope ou convulsão causando a queda", pista: "Evento antes da queda" },
      { dx: "Intoxicação acidental", pista: "Sonolência desproporcional, acesso a medicamentos" }
    ],
    gravidade: [
      "Leve: Glasgow 14–15 (PECARN aplicável)",
      "Moderado: Glasgow 9–13 (alguns protocolos pediátricos consideram 13 como moderado)",
      "Grave: Glasgow ≤ 8",
      "Risco PECARN de lesão cerebral clinicamente importante: alto (TC), intermediário (observar ou TC), muito baixo (< 0,05% em < 2 anos e < 0,1% em ≥ 2 anos sem nenhum critério)"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste. Indicação: TCE pediátrico com critério PECARN de alto risco (descrever o critério).",
      porQue: "Detectar lesão intracraniana que exija neurocirurgia ou internação.",
      esperar: "A maioria das TC em TCE leve é normal.",
      interpretacao: "Hematoma, contusão, fratura com afundamento: neurocirurgia.",
      limitacoes: "Radiação ionizante (risco de câncer ao longo da vida, maior quanto menor a criança). Evitar sedação se possível."
    },
    {
      nome: "Investigação de maus-tratos (se suspeita)",
      pedido: "Fundoscopia sob midríase (oftalmologia). Radiografias de esqueleto completo em < 2 anos. Hemograma e coagulograma.",
      porQue: "Hemorragia retiniana e fraturas ocultas apoiam trauma abusivo; excluir coagulopatia.",
      esperar: "—",
      interpretacao: "Achados compatíveis: notificação e proteção.",
      limitacoes: "—"
    },
    {
      nome: "Radiografia de crânio",
      pedido: "Não solicitar de rotina.",
      porQue: "Não exclui lesão intracraniana.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Pode ter papel limitado na triagem de fratura em lactente quando TC não disponível, conforme especialista."
    }
  ],
  tratamento: [
    {
      droga: "Paracetamol 200 mg/mL (gotas) ou 32 mg/mL (suspensão)",
      linha: "l1",
      dose: "15 mg/kg/dose (máx 1 g)",
      via: "VO",
      intervalo: "A cada 6 h se dor",
      duracao: "Até 3 dias",
      monitorizacao: "—",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Gotas 200 mg/mL: 1 gota/kg (≈ 13 mg/kg; máx 35 gotas por dose, conforme bula). Máx 75 mg/kg/dia"
    },
    {
      droga: "Dipirona 500 mg/mL (gotas) ou 50 mg/mL (solução oral)",
      linha: "l1",
      dose: "15 mg/kg/dose (máx 1 g)",
      via: "VO ou IV",
      intervalo: "A cada 6 h se dor ou febre",
      duracao: "Até 3 dias",
      monitorizacao: "—",
      contraindicacoes: "< 3 meses ou < 5 kg; discrasia sanguínea",
      ajustes: "Gotas 500 mg/mL: 20 gotas = 1 mL = 500 mg (1 gota = 25 mg)"
    },
    {
      droga: "Ondansetrona 4 mg (comprimido orodispersível) ou 2 mg/mL (injetável)",
      linha: "adj",
      dose: "0,15 mg/kg (máx 4 mg); VO: 8–15 kg 2 mg, 15–30 kg 4 mg",
      via: "VO ou IV",
      intervalo: "Dose única no PS; repetir a cada 8 h se necessário",
      duracao: "—",
      monitorizacao: "QT se uso repetido",
      contraindicacoes: "< 6 meses (uso fora de bula); QT longo",
      ajustes: "Vômitos persistentes após antiemético são critério para TC/observação prolongada"
    },
    {
      droga: "Ibuprofeno",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar nas primeiras 24–48 h se lesão hemorrágica possível",
      ajustes: "Após TC normal ou baixo risco PECARN, pode ser usado (10 mg/kg, máx 400 mg, de 8/8 h)"
    }
  ],
  destino: {
    agora: [
      "Classificar pelo Glasgow e aplicar PECARN",
      "Avaliar maus-tratos em toda criança"
    ],
    reavaliar: [
      "Observação: Glasgow, comportamento e vômitos a cada 1 h por 4–6 h a partir do trauma"
    ],
    alta: [
      "PECARN baixo risco, ou risco intermediário assintomático após observação, ou TC normal com Glasgow 15",
      "Cuidador confiável, capaz de retornar, com orientação escrita",
      "Sem suspeita de maus-tratos"
    ],
    observacao: [
      "Risco intermediário PECARN: 4–6 h no PS (do trauma), com reavaliação seriada",
      "TC normal mas sintomas persistentes (vômitos, sonolência): observação até melhora"
    ],
    internacao: [
      "TC com lesão intracraniana, fratura com afundamento ou de base",
      "Glasgow < 15 persistente, vômitos incoercíveis, convulsão",
      "Suspeita de maus-tratos (proteção)"
    ],
    transferencia: [
      "Sem TC ou neurocirurgia pediátrica: regular criança com alto risco PECARN, Glasgow ≤ 13 ou lesão na TC",
      "Glasgow ≤ 8: intubar antes do transporte (ver ficha sequencia-rapida-intubacao)"
    ]
  },
  prescricao: {
    hospitalar: "OBSERVAÇÃO NO PS — TCE PEDIÁTRICO LEVE (peso: ___ kg)\n1. Dieta leve após 1–2 h se sem vômitos; dieta zero se TC pendente ou vômitos.\n2. Cabeceira 30°; acompanhante presente.\n3. Paracetamol 15 mg/kg VO (máx 1 g) de 6/6 h se dor, ou dipirona 15 mg/kg VO/IV (máx 1 g) de 6/6 h se dor.\n4. Ondansetrona 0,15 mg/kg IV ou VO (máx 4 mg) se vômito; repetir de 8/8 h se necessário.\n5. Não usar sedativos.\n6. Reavaliar Glasgow pediátrico, pupilas, comportamento e vômitos de 1/1 h por 4–6 h a partir do trauma.\n7. Avisar se: Glasgow < 15, vômitos persistentes, sonolência, cefaleia que piora, convulsão, anisocoria (indicar TC).\n8. Se TC com lesão: manter jejum, cabeceira 30°, SF 0,9% em manutenção (isotônico) e acionar neurocirurgia.",
    ambulatorial: "ALTA — TCE LEVE NA CRIANÇA\nUSO ORAL\n1. Paracetamol 200 mg/mL (gotas) ---------------- 1 frasco\n   Dar 1 gota por kg de peso de 6 em 6 horas se dor (máximo 35 gotas por dose), por até 3 dias.\n   (ou) Dipirona 500 mg/mL (gotas) ------------- 1 frasco\n   Dar ___ gotas (15 mg/kg = 0,6 gota/kg) de 6 em 6 horas se dor ou febre, por até 3 dias.\n\nORIENTAÇÕES\n2. Repouso relativo por 24–48 h; retorno gradual às atividades e à escola conforme sintomas.\n3. Evitar telas em excesso e atividades com risco de nova batida até ficar sem sintomas."
  },
  orientacoesRetorno: [
    "Pode dormir normalmente; não é preciso acordar a criança de hora em hora, mas um adulto deve ficar com ela nas primeiras 24 h",
    "Voltar imediatamente se: vômitos repetidos, sonolência difícil de acordar, choro inconsolável, convulsão, fraqueza ou dormência, fala enrolada, confusão, dor de cabeça forte que piora, sangue ou líquido saindo do nariz ou ouvido, pupilas de tamanhos diferentes, moleira estufada",
    "Sintomas leves (dor de cabeça, cansaço, irritabilidade, dificuldade de concentração) podem durar alguns dias; retornar à UBS se durarem mais de 1–2 semanas",
    "Esportes de contato só após ficar sem sintomas e com liberação médica, retornando de forma gradual",
    "Prevenção: grades em janelas e escadas, cadeirinha no carro, capacete na bicicleta, não deixar bebê sozinho em cama ou trocador"
  ],
  tabelas: [
    {
      titulo: "Regra PECARN — menor de 2 anos (Glasgow 14–15, até 24 h)",
      colunas: ["Risco", "Critérios", "Conduta"],
      linhas: [
        ["Alto (≈ 4,4%)", "Glasgow 14, outros sinais de alteração do estado mental (agitação, sonolência, perguntas repetitivas, resposta lenta) ou fratura de crânio palpável", "TC"],
        ["Intermediário (≈ 0,9%)", "Hematoma de couro cabeludo occipital, parietal ou temporal; perda de consciência ≥ 5 s; mecanismo grave; não está agindo normalmente segundo os pais", "Observação ou TC (decisão compartilhada)"],
        ["Muito baixo (< 0,02%)", "Nenhum dos critérios acima", "Sem TC"]
      ],
      nota: "Mecanismo grave: colisão de veículo com ejeção, morte de outro passageiro ou capotamento; pedestre ou ciclista sem capacete atingido por veículo motorizado; queda > 0,9 m (3 pés) em < 2 anos; cabeça atingida por objeto de alto impacto."
    },
    {
      titulo: "Regra PECARN — 2 anos ou mais (Glasgow 14–15, até 24 h)",
      colunas: ["Risco", "Critérios", "Conduta"],
      linhas: [
        ["Alto (≈ 4,3%)", "Glasgow 14, outros sinais de alteração do estado mental ou sinais de fratura de base de crânio", "TC"],
        ["Intermediário (≈ 0,9%)", "Perda de consciência (qualquer); vômitos; mecanismo grave; cefaleia intensa", "Observação ou TC (decisão compartilhada)"],
        ["Muito baixo (< 0,05%)", "Nenhum dos critérios acima", "Sem TC"]
      ],
      nota: "Mecanismo grave: como acima, com queda > 1,5 m (5 pés). Favorecem TC no risco intermediário: múltiplos achados, piora na observação, idade < 3 meses, inexperiência do médico, preferência dos pais."
    },
    {
      titulo: "Escala de coma de Glasgow pediátrica (< 2 anos / pré-verbal)",
      colunas: ["Item", "Resposta", "Pontos"],
      linhas: [
        ["Abertura ocular", "Espontânea / ao som / à dor / ausente", "4 / 3 / 2 / 1"],
        ["Verbal", "Balbucia, sorri, segue objetos / choro consolável / choro inconsolável à dor / gemido à dor / ausente", "5 / 4 / 3 / 2 / 1"],
        ["Motora", "Movimentos espontâneos / retirada ao toque / retirada à dor / flexão anormal / extensão / ausente", "6 / 5 / 4 / 3 / 2 / 1"]
      ]
    }
  ],
  fontes: [
    "Kuppermann N et al. — Identification of children at very low risk of clinically-important brain injuries after head trauma: a prospective cohort study (PECARN, Lancet, 2009)",
    "American College of Surgeons — ATLS: Advanced Trauma Life Support, 11ª ed. (2025), capítulo de trauma pediátrico",
    "NICE NG232 — Head injury: assessment and early management (2023)",
    "Kochanek PM et al. — Guidelines for the Management of Pediatric Severe Traumatic Brain Injury, 3ª ed. (2019)",
    "Ministério da Saúde — Notificação de violência interpessoal/autoprovocada (SINAN) e Estatuto da Criança e do Adolescente (comunicação ao Conselho Tutelar)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
