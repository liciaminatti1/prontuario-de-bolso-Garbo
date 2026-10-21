// Acidente escorpiônico
registrarFicha({
  id: "escorpionismo",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Acidente escorpiônico (picada de escorpião)",
  resumo: "Picada por escorpião (Tityus serrulatus, escorpião-amarelo, e outras espécies). Dor local intensa em quase todos; manifestações sistêmicas (vômitos, sudorese, agitação, taquicardia ou bradicardia, edema pulmonar, choque) sobretudo em crianças. Soro para casos moderados e graves.",
  palavrasChave: "escorpiao escorpionismo picada de escorpiao tityus serrulatus escorpiao amarelo soro antiescorpionico saesc soro antiaracnidico saar lidocaina dor local vomitos edema pulmonar choque crianca",
  critico: {
    tempo: "Vômitos repetidos = gravidade",
    texto: "Criança com vômitos, sudorese, agitação ou sonolência após picada é caso moderado a grave: soro IV o mais cedo possível (3 frascos-ampolas no moderado, 6 no grave). Dor isolada: anestesia local e observação."
  },
  alarmes: [
    "Vômitos frequentes ou incoercíveis (principal sinal precoce de gravidade)",
    "Sudorese profusa, sialorreia, palidez, extremidades frias",
    "Agitação alternando com sonolência, confusão, tremores",
    "Taquicardia ou bradicardia, hipertensão ou hipotensão, arritmia",
    "Taquipneia, crepitações, espuma rósea (edema agudo de pulmão), SpO₂ < 94%",
    "Criança ≤ 10 anos e idoso: maior risco de forma grave"
  ],
  condutaInicial: [
    "Lavar o local com água e sabão; compressa morna pode aliviar a dor",
    "Anestesia local: lidocaína 2% sem vasoconstritor infiltrada no local (adulto 3–4 mL; criança 1–2 mL); pode repetir até 3 vezes com intervalo de 30–60 min",
    "Analgesia sistêmica: dipirona (criança 10 mg/kg/dose de 6/6 h; adulto 1 g)",
    "Classificar a gravidade (tabela) e reavaliar a cada 30–60 min nas primeiras horas",
    "Moderado ou grave: soro antiescorpiônico (SAEsc) ou antiaracnídico (SAAr) IV — moderado 3 frascos-ampolas, grave 6",
    "Grave: monitor, O₂, acesso venoso, preparar UTI; tratar edema pulmonar e choque",
    "Notificar no SINAN; identificar a espécie se o animal for trazido"
  ],
  fataisExcluir: [
    "Edema agudo de pulmão",
    "Choque cardiogênico (disfunção miocárdica tóxica)",
    "Arritmias",
    "Encefalopatia, convulsão (raros)"
  ],
  proximaDecisao: "Leve sem progressão após 6–12 h → alta. Qualquer manifestação sistêmica → soro e internação por no mínimo 24 h. Persistência de instabilidade após 6 frascos-ampolas → suporte em UTI (o PCDT 2025 não recomenda mais que 6).",
  clinica: {
    anamnese: [
      "Hora da picada, local, animal visto (escorpião amarelo com serrilha na cauda = T. serrulatus)",
      "Idade e peso; comorbidades cardíacas",
      "Vômitos (número de episódios), sudorese, agitação, sonolência, falta de ar",
      "Primeiros socorros já feitos"
    ],
    exameFisico: [
      "Local: dor, parestesia, eritema discreto, sudorese local, piloereção",
      "FC, PA, FR, SpO₂, temperatura, perfusão periférica",
      "Ausculta pulmonar (crepitações) e cardíaca (ritmo de galope, arritmia)",
      "Nível de consciência, tremores, mioclonias",
      "Sialorreia, lacrimejamento, priapismo (sinais de excesso autonômico)"
    ],
    diferenciais: [
      { dx: "Foneutrismo (aranha armadeira)", pista: "Quadro muito parecido: dor intensa e sinais adrenérgicos; animal identificado. Mesmo soro antiaracnídico cobre" },
      { dx: "Picada de inseto (abelha, vespa)", pista: "Ferrão, edema e eritema mais evidentes, prurido" },
      { dx: "Gastroenterite, intoxicação exógena", pista: "Ausência de picada e de dor local intensa" },
      { dx: "Choque séptico, miocardite", pista: "Febre, evolução mais lenta, sem história de picada" }
    ],
    gravidade: [
      "Leve: dor, eritema, parestesia, sudorese local; ocasionalmente náusea, vômito isolado, agitação e taquicardia discretas atribuídas à dor",
      "Moderado: quadro local associado a manifestações sistêmicas de pequena intensidade (sudorese, náuseas, vômitos ocasionais, taquicardia, taquipneia, hipertensão leve, agitação)",
      "Grave: uma ou mais manifestações exacerbadas — sudorese profusa, vômitos incoercíveis, sialorreia, prostração alternada com agitação, bradicardia, arritmia, insuficiência cardíaca, edema pulmonar, choque, convulsão, coma"
    ]
  },
  exames: [
    {
      nome: "Glicemia, eletrólitos e amilase",
      pedido: "Glicemia, sódio, potássio, ureia, creatinina, amilase. Hemograma.",
      porQue: "Alterações metabólicas da descarga autonômica.",
      esperar: "Hiperglicemia, hipocalemia, leucocitose e hiperamilasemia são comuns nos moderados e graves.",
      interpretacao: "Reforçam a gravidade, mas a indicação de soro é clínica.",
      limitacoes: "Não atrasar o soro por exames."
    },
    {
      nome: "ECG e marcadores cardíacos",
      pedido: "ECG de 12 derivações. Troponina e CK-MB nos casos moderados e graves.",
      porQue: "Detectar miocardite tóxica e arritmias.",
      esperar: "Taquicardia ou bradicardia sinusal; alterações de repolarização.",
      interpretacao: "Troponina elevada indica disfunção miocárdica: monitorizar em UTI.",
      limitacoes: "Alterações podem persistir dias."
    },
    {
      nome: "Radiografia de tórax e ecocardiograma",
      pedido: "Radiografia de tórax no leito. Ecocardiograma se choque ou edema pulmonar.",
      porQue: "Edema pulmonar e disfunção ventricular.",
      esperar: "Congestão pulmonar nos graves.",
      interpretacao: "Disfunção sistólica orienta uso de dobutamina.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Soro antiescorpiônico (SAEsc) ou antiaracnídico (SAAr)",
      linha: "l1",
      dose: "Moderado: 3 frascos-ampolas · Grave: 6 frascos-ampolas (máximo 6)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "Não repetir além de 6 frascos-ampolas",
      monitorizacao: "Reação anafilática durante e após a infusão; resposta clínica em 1–2 h",
      contraindicacoes: "Leve: não indicado",
      ajustes: "Mesma dose em qualquer idade. Administrar o mais cedo possível, puro ou diluído em SF 0,9%, infundido em 20 a 60 min sob vigilância (bula). Adrenalina e via aérea prontas"
    },
    {
      droga: "Lidocaína 2% sem vasoconstritor",
      linha: "l1",
      dose: "Adulto: 3–4 mL · Criança: 1–2 mL",
      via: "Infiltração no local da picada",
      intervalo: "Pode repetir até 3 vezes, a cada 30–60 min",
      duracao: "Até alívio",
      monitorizacao: "Toxicidade de anestésico local (gosto metálico, convulsão) se doses repetidas em criança pequena",
      contraindicacoes: "Alergia a anestésico local",
      ajustes: "Não ultrapassar 4,5 mg/kg de lidocaína somando todas as doses"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "Adulto: 1 g · Criança: 10 mg/kg/dose (máx. 1 g)",
      via: "VO ou IV",
      intervalo: "6/6 h",
      duracao: "Enquanto houver dor",
      monitorizacao: "Hipotensão (IV rápido)",
      contraindicacoes: "Alergia; < 3 meses ou < 5 kg",
      ajustes: "IV: diluir e infundir lentamente"
    },
    {
      droga: "Dobutamina (choque cardiogênico ou disfunção ventricular)",
      linha: "adj",
      dose: "2,5–20 mcg/kg/min",
      via: "IV em bomba de infusão",
      intervalo: "Contínua",
      duracao: "Até estabilidade",
      monitorizacao: "PA, FC, perfusão, lactato",
      contraindicacoes: "—",
      ajustes: "Em UTI. Edema pulmonar: O₂, ventilação não invasiva ou IOT; diurético com cautela"
    },
    {
      droga: "Ondansetrona (vômitos)",
      linha: "adj",
      dose: "Adulto: 4–8 mg · Criança: 0,15 mg/kg (máx. 4 mg)",
      via: "IV lento",
      intervalo: "8/8 h SN",
      duracao: "—",
      monitorizacao: "QTc",
      contraindicacoes: "QT longo",
      ajustes: "Antiemético não substitui o soro: vômitos repetidos indicam gravidade"
    },
    {
      droga: "Pré-medicação de rotina, corticoide, atropina para bradicardia sem instabilidade",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício comprovado; atropina pode agravar efeitos adrenérgicos",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Sala de emergência se manifestação sistêmica; soro no serviço de referência mais próximo"],
    reavaliar: ["Sinais vitais, vômitos, sudorese e nível de consciência a cada 30–60 min nas primeiras 6 h"],
    alta: ["Sem sintomas de envenenamento após 4 h", "Leve sem progressão após 6–12 h, dor controlada"],
    observacao: ["Sem envenenamento: 4 h", "Leve: 6–12 h, sobretudo criança ≤ 10 anos"],
    internacao: ["Todo paciente que recebeu soro: mínimo de 24 h"],
    transferencia: ["UTI: edema pulmonar, choque, arritmia, troponina elevada, rebaixamento de consciência", "Serviço com soro, se não houver no local (não atrasar)"]
  },
  prescricao: {
    ambulatorial: "ACIDENTE LEVE — ALTA APÓS OBSERVAÇÃO\nUSO ORAL\n1. Dipirona 500 mg ------------------------------------- 1 caixa\n   Tomar 2 comprimidos (1 g) de 6 em 6 horas se dor, por até 3 dias.\n   Criança: dipirona solução oral 50 mg/mL — 10 mg/kg/dose (0,2 mL/kg) de 6 em 6 horas se dor (máx. 1 g/dose).\n\nORIENTAÇÕES\n2. Compressa morna no local 3 a 4 vezes ao dia se dor.",
    hospitalar: "ACIDENTE ESCORPIÔNICO MODERADO/GRAVE (peso: ___ kg)\n1. Dieta zero enquanto houver vômitos; depois, dieta leve.\n2. Monitor cardíaco, oximetria, PA a cada 15 min durante o soro e na 1ª hora; depois de 1/1 h.\n3. O₂ por cateter ou máscara se SpO₂ < 94%. Cabeceira elevada.\n4. Acesso venoso periférico. SF 0,9% para manter veia; evitar hiper-hidratação (risco de edema pulmonar).\n5. Lidocaína 2% sem vasoconstritor: infiltrar 3–4 mL no local da picada (criança 1–2 mL); repetir até 3 vezes a cada 30–60 min se dor.\n6. Dipirona 1 g IV diluída em 10 mL de água destilada, lento, de 6/6 h (criança 10 mg/kg/dose, máx. 1 g).\n7. SORO ANTIESCORPIÔNICO (ou antiaracnídico) IV, dose única, mesma dose em qualquer idade:\n   ( ) Moderado: 3 frascos-ampolas\n   ( ) Grave: 6 frascos-ampolas (máximo)\n   Puro ou diluído em SF 0,9%, infusão IV lenta em 20 a 60 min, sob supervisão médica. Adrenalina 1 mg/mL e material de via aérea à beira do leito.\n8. Se reação ao soro: suspender; adrenalina 0,01 mg/kg IM (máx. 0,5 mg adulto; 0,3 mg criança pré-púbere); reiniciar mais lento após controle.\n9. Ondansetrona 0,15 mg/kg IV lento (máx. 4 mg; adulto 4–8 mg) de 8/8 h SN.\n10. Exames: glicemia, Na, K, ureia, creatinina, amilase, hemograma, troponina, ECG; radiografia de tórax se taquipneia ou crepitações.\n11. Glicemia capilar de 6/6 h.\n12. Comunicar: vômitos persistentes, sudorese profusa, FC < 60 ou > 160 (criança) / > 120 (adulto), PAS < 90 ou hipertensão grave, SpO₂ < 94%, crepitações, sonolência.\n13. Notificação SINAN (acidente por animal peçonhento)."
  },
  orientacoesRetorno: [
    "Prevenção: sacudir roupas, toalhas e calçados antes de usar; afastar camas da parede; vedar ralos, frestas e rodapés; manter quintal sem entulho e lixo",
    "Em nova picada: lavar com água e sabão, compressa morna e procurar logo o serviço de saúde, principalmente se for criança",
    "Após alta do caso leve: voltar imediatamente se vômitos, suor frio, agitação ou sonolência, falta de ar ou palidez",
    "A dor e o formigamento local podem durar até 1 a 2 dias"
  ],
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas dos Acidentes Escorpiônicos (Portaria SECTICS/MS nº 59, de 1º/8/2025; ed. 2026)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed., vol. 3 (2023): Escorpionismo",
    "Prefeitura de São Paulo/COVISA — Protocolo de Manejo Clínico dos Acidentes por Escorpião (atualizado em 2026)",
    "Ministério da Saúde/FUNASA — Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos, 2ª ed. rev. (2001)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
