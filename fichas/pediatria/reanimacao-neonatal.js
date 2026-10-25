// Reanimação neonatal na sala de parto (SBP 2022)
registrarFicha({
  id: "reanimacao-neonatal",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Reanimação neonatal na sala de parto",
  resumo: "Fluxograma do Programa de Reanimação Neonatal da SBP (2022) para RN ≥ 34 semanas e < 34 semanas: clampeamento do cordão, passos iniciais, ventilação com pressão positiva no minuto de ouro, intubação, massagem cardíaca e adrenalina.",
  palavrasChave: "reanimacao neonatal sala de parto prn sbp minuto de ouro golden minute vpp ventilacao pressao positiva intubacao massagem cardiaca adrenalina epinefrina cateter umbilical clampeamento cordao apgar meconio cpap prematuro mascara laringea",
  critico: {
    tempo: "VPP no 1º minuto de vida",
    texto: "Sem respiração regular ou FC < 100 bpm após os passos iniciais: iniciar ventilação com pressão positiva nos primeiros 60 segundos. A ventilação eficaz é a medida mais importante da reanimação."
  },
  alarmes: [
    "Apneia, respiração irregular (gasping) ou FC < 100 bpm após os passos iniciais",
    "FC < 60 bpm após 30 s de VPP com técnica adequada por cânula traqueal ou máscara laríngea",
    "FC < 60 bpm após 60 s de massagem + ventilação com O₂ 100%",
    "SpO₂ pré-ductal abaixo do alvo para os minutos de vida apesar de VPP eficaz",
    "Palidez, má perfusão e história de perda sanguínea (hipovolemia)",
    "Abdome escavado com desconforto (hérnia diafragmática: não ventilar com máscara)",
    "Temperatura axilar < 36,5 °C ou > 37,5 °C"
  ],
  condutaInicial: [
    "Antes do parto: anamnese materna, material testado, temperatura da sala 23–25 °C, ao menos 1 profissional capacitado só para o RN (2 a 3 se fatores de risco)",
    "Ao nascer, 3 perguntas: gestação ≥ 34 semanas? Respira ou chora? Tônus em flexão? (< 34 sem: só as 2 últimas)",
    "Boa vitalidade: clampeamento tardio (≥ 34 sem: pelo menos 60 s; < 34 sem: 30–60 s) e contato pele a pele / cuidados de rotina",
    "Sem boa vitalidade: clampeamento imediato e berço de calor radiante; passos iniciais em até 30 s: calor, cabeça em leve extensão, aspirar boca e narinas só se obstrução, secar (≥ 34 sem) ou saco plástico sem secar e touca (< 34 sem)",
    "Avaliar FC (estetoscópio no precórdio; monitor cardíaco de 3 derivações é o mais preciso) e respiração",
    "FC < 100 bpm ou apneia/respiração irregular: VPP com máscara (ou máscara laríngea), ar ambiente se ≥ 34 sem e O₂ 30% se < 34 sem; oxímetro no pulso direito e monitor cardíaco",
    "< 34 sem respirando com desconforto: CPAP 5 cmH₂O ainda na sala de parto"
  ],
  fataisExcluir: [
    "Ventilação ineficaz (vazamento na máscara, via aérea obstruída, pressão insuficiente)",
    "Pneumotórax (piora súbita, assimetria, transiluminação positiva)",
    "Hérnia diafragmática congênita",
    "Hipovolemia (descolamento de placenta, placenta prévia, rotura de vasa prévia)",
    "Hipotermia e hipoglicemia após a reanimação",
    "Obstrução de via aérea (atresia de coanas, Pierre Robin)"
  ],
  proximaDecisao: "Após 30 s de VPP: FC ≥ 100 e respirando → retirar VPP gradualmente e levar à UTI neonatal/observação conforme o quadro. FC < 100 → corrigir a técnica (máscara, posição, aspiração, boca aberta, pressão) e considerar via aérea avançada. FC < 60 com VPP eficaz por cânula ou máscara laríngea → massagem 3:1 com O₂ 100%; persistindo < 60 após 60 s → adrenalina IV pelo cateter umbilical.",
  clinica: {
    anamnese: [
      "Idade gestacional, número de fetos, líquido amniótico (claro ou meconial)",
      "Fatores de risco: pré-eclâmpsia, diabetes, corioamnionite, bolsa rota prolongada, sangramento, alteração da vitalidade fetal, apresentação anômala, parto instrumental",
      "Medicações maternas: opioide nas últimas 4 h, sulfato de magnésio, anestesia geral",
      "Malformações conhecidas no pré-natal (hérnia diafragmática, defeitos de parede, cardiopatia)"
    ],
    exameFisico: [
      "Respiração (regular, irregular, gasping, apneia), tônus, cor",
      "FC: ausculta por 6 s e multiplicar por 10; preferir monitor cardíaco se VPP",
      "SpO₂ pré-ductal (mão ou punho direito)",
      "Expansão torácica simétrica durante a VPP",
      "Apgar no 1º e 5º minuto (repetir a cada 5 min até 20 min se < 7); o Apgar não guia a reanimação"
    ],
    diferenciais: [
      { dx: "Depressão respiratória por drogas maternas", pista: "Opioide perto do parto; manter VPP, naloxona não é recomendada na sala de parto" },
      { dx: "Hérnia diafragmática", pista: "Abdome escavado, desvio de ictus, MV ausente de um lado: intubar e passar sonda gástrica, não usar máscara" },
      { dx: "Pneumotórax", pista: "Piora súbita após VPP, assimetria de MV" },
      { dx: "Cardiopatia congênita cianótica", pista: "Cianose sem desconforto que não melhora com ventilação eficaz" },
      { dx: "Choque hipovolêmico", pista: "Palidez, pulsos fracos, história de sangramento" }
    ],
    gravidade: [
      "Necessidade de massagem e adrenalina: alto risco de encefalopatia hipóxico-isquêmica",
      "RN ≥ 35–36 sem com encefalopatia moderada a grave: avaliar hipotermia terapêutica, iniciada até 6 h de vida em centro de referência",
      "Sem FC detectável após 20 min de reanimação adequada: discutir com a equipe a interrupção dos esforços (SBP 2022)"
    ]
  },
  exames: [
    {
      nome: "Gasometria de cordão",
      pedido: "Gasometria arterial de cordão umbilical (segmento clampeado duplamente).",
      porQue: "Documentar acidose perinatal e apoiar a indicação de hipotermia terapêutica.",
      esperar: "pH ≤ 7,0 ou BE ≤ −16 sugere asfixia significativa.",
      interpretacao: "Sempre junto com o exame neurológico e o Apgar.",
      limitacoes: "Não deve atrasar a reanimação."
    },
    {
      nome: "Glicemia capilar",
      pedido: "Glicemia capilar na 1ª hora após a reanimação e de 1/1 h a 3/3 h conforme o quadro.",
      porQue: "Hipoglicemia é frequente após asfixia e piora a lesão cerebral.",
      esperar: "Manter acima do limite do protocolo do serviço.",
      interpretacao: "Se baixa: SG 10% 2 mL/kg IV e soro de manutenção com glicose.",
      limitacoes: "Confirmar valores baixos com glicemia sérica."
    },
    {
      nome: "Exames pós-reanimação",
      pedido: "Hemograma, gasometria, lactato, eletrólitos, cálcio iônico, função renal e hepática, hemocultura se risco infeccioso. RX de tórax se ventilação prolongada ou suspeita de pneumotórax.",
      porQue: "Avaliar disfunção orgânica e complicações.",
      esperar: "—",
      interpretacao: "Ver fichas sepse-neonatal e desconforto-respiratorio-neonatal.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Ventilação com pressão positiva (VPP)",
      linha: "l1",
      dose: "Frequência 40–60/min (aperta, solta, solta). Pressão inspiratória inicial 20 cmH₂O (até 30–40 se necessário), PEEP 5 cmH₂O com ventilador mecânico manual em T",
      via: "Máscara facial ou máscara laríngea; cânula traqueal se indicado",
      intervalo: "Reavaliar FC após 30 s de VPP eficaz",
      duracao: "Até FC ≥ 100 bpm e respiração espontânea regular",
      monitorizacao: "FC (monitor cardíaco), SpO₂ pré-ductal, expansão torácica",
      contraindicacoes: "Hérnia diafragmática: não usar máscara, intubar",
      ajustes: "O₂ inicial: 21% (≥ 34 sem) e 30% (< 34 sem); ajustar pela SpO₂ alvo. Máscara laríngea é opção em ≥ 34 sem (peso ≥ 2.000 g) se a máscara facial falhar ou a intubação não for possível"
    },
    {
      droga: "Massagem cardíaca",
      linha: "l1",
      dose: "Técnica dos 2 polegares no terço inferior do esterno, profundidade de 1/3 do diâmetro anteroposterior do tórax",
      via: "—",
      intervalo: "3 compressões : 1 ventilação (90 compressões + 30 ventilações/min)",
      duracao: "Reavaliar FC após 60 s; parar quando FC > 60 bpm",
      monitorizacao: "FC por monitor cardíaco",
      contraindicacoes: "Iniciar só com ventilação eficaz por via aérea avançada",
      ajustes: "Durante a massagem: O₂ 100%. Ao recuperar a FC, reduzir a FiO₂ pela SpO₂"
    },
    {
      droga: "Adrenalina (epinefrina) 1:10.000",
      linha: "l1",
      dose: "IV: 0,02 mg/kg = 0,2 mL/kg da solução 0,1 mg/mL (faixa 0,01–0,03 mg/kg). Endotraqueal: 0,1 mg/kg = 1 mL/kg",
      via: "IV pelo cateter venoso umbilical (preferencial) ou intraóssea; endotraqueal só uma vez, enquanto se obtém o acesso",
      intervalo: "Repetir IV a cada 3–5 min se FC < 60 bpm",
      duracao: "Enquanto FC < 60 bpm",
      monitorizacao: "FC a cada 60 s",
      contraindicacoes: "—",
      ajustes: "Diluição: 1 mL de adrenalina 1 mg/mL + 9 mL de SF 0,9% = 0,1 mg/mL. Após a dose IV, lavar com 3 mL de SF 0,9%. Seringas identificadas (IV e endotraqueal são doses diferentes)"
    },
    {
      droga: "Expansor de volume: soro fisiológico 0,9%",
      linha: "adj",
      dose: "10 mL/kg",
      via: "IV (cateter umbilical) ou intraóssea",
      intervalo: "Em 5–10 min; pode repetir uma vez",
      duracao: "—",
      monitorizacao: "FC, perfusão, pulsos",
      contraindicacoes: "Sem suspeita de hipovolemia",
      ajustes: "Indicar se FC não melhora e há perda sanguínea ou sinais de choque. Concentrado de hemácias O negativo se sangramento grave"
    },
    {
      droga: "CPAP em sala de parto",
      linha: "l1",
      dose: "5 cmH₂O",
      via: "Máscara ou prong nasal",
      intervalo: "Contínuo",
      duracao: "Até avaliação na UTI neonatal",
      monitorizacao: "Desconforto, SpO₂, FC",
      contraindicacoes: "Apneia ou FC < 100 (fazer VPP)",
      ajustes: "Indicado no RN < 34 sem com respiração espontânea e desconforto"
    },
    {
      droga: "Aspiração traqueal de rotina no líquido meconial",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não recomendada; atrasa a VPP",
      ajustes: "RN não vigoroso com mecônio: passos iniciais e VPP no 1º minuto. Aspirar traqueia só se obstrução após VPP ineficaz"
    }
  ],
  destino: {
    agora: [
      "Reanimação no berço de calor radiante, com relógio e registro dos tempos",
      "Cateter venoso umbilical se massagem for necessária"
    ],
    reavaliar: [
      "FC e SpO₂ a cada 30–60 s durante a reanimação",
      "Temperatura axilar e glicemia na 1ª hora"
    ],
    alta: [
      "Boa vitalidade e sem necessidade de VPP: alojamento conjunto, amamentação na 1ª hora"
    ],
    observacao: [
      "VPP breve com boa resposta: observação em unidade neonatal com monitorização de FC, SpO₂, temperatura e glicemia"
    ],
    internacao: [
      "UTI neonatal: intubação, massagem, adrenalina, encefalopatia, < 34 sem com CPAP ou necessidade de O₂"
    ],
    transferencia: [
      "Encefalopatia em RN ≥ 35–36 sem: transferir para centro com hipotermia terapêutica antes de 6 h de vida; não aquecer ativamente (evitar hipertermia)",
      "Transporte em incubadora aquecida, com via aérea segura e equipe habilitada"
    ]
  },
  prescricao: {
    hospitalar: "RN PÓS-REANIMAÇÃO — UNIDADE NEONATAL (peso: ___ kg; IG: ___ sem)\n1. Dieta zero inicialmente (reavaliar em 6–24 h conforme estabilidade).\n2. Incubadora ou berço aquecido; manter temperatura axilar 36,5–37,5 °C (se encefalopatia com indicação de hipotermia: não aquecer; seguir o centro de referência).\n3. Monitor cardíaco e oximetria pré-ductal contínuos; alvo de SpO₂ 90–95% após a estabilização (ou conforme o protocolo da unidade).\n4. Soro de manutenção: SG 10% 60–80 mL/kg/dia = ___ mL/h (taxa de infusão de glicose 4–6 mg/kg/min), ajustar pela glicemia e diurese.\n5. Se glicemia baixa: SG 10% 2 mL/kg = ___ mL IV em 1–2 min e aumentar a taxa de glicose.\n6. Vitamina K 1 mg IM (0,5 mg se < 1.000 g) e profilaxia ocular conforme rotina.\n7. Se risco infeccioso: hemocultura e antibiótico conforme ficha sepse-neonatal.\n8. Controles: FC, FR, SpO₂, PA e temperatura de 1/1 h nas primeiras 6 h; glicemia capilar de 1/1 h a 3/3 h; diurese; avaliação neurológica (tônus, reflexos, convulsões).\n\nMATERIAL DA SALA DE PARTO (CONFERIR ANTES)\n- Ventilador manual em T e balão autoinflável com reservatório; máscaras 00, 0 e 1; máscara laríngea nº 1.\n- Laringoscópio com lâminas retas 00, 0 e 1; cânulas 2,5 / 3,0 / 3,5 / 4,0 sem cuff.\n- Aspirador com sondas 8 e 10; oxímetro e monitor cardíaco; blender de O₂.\n- Adrenalina diluída 0,1 mg/mL; SF 0,9%; material de cateterismo umbilical (cateter 3,5 ou 5 Fr).\n- Saco plástico e touca para < 34 sem."
  },
  orientacoesRetorno: [
    "Explicar aos pais, com calma, o que aconteceu e por que o bebê ficará em observação",
    "Estimular o contato e a extração de leite materno enquanto o bebê não puder mamar",
    "Bebê que precisou de reanimação deve ter seguimento do desenvolvimento (fala, movimentos, audição e visão) na UBS e no ambulatório de risco"
  ],
  tabelas: [
    {
      titulo: "SpO₂ pré-ductal alvo nos primeiros minutos (SBP 2022)",
      colunas: ["Minutos de vida", "SpO₂ alvo"],
      linhas: [
        ["Até 5", "70–80%"],
        ["5–10", "80–90%"],
        ["> 10", "85–95%"]
      ],
      nota: "Oxímetro no pulso ou palma da mão direita. Ajustar FiO₂ em incrementos de 20% a cada 30 s conforme a saturação. Na massagem: O₂ 100%."
    },
    {
      titulo: "Cânula traqueal e profundidade de inserção",
      colunas: ["IG / peso", "Cânula (diâmetro interno, mm)", "Lâmina reta"],
      linhas: [
        ["< 28 sem ou < 1.000 g", "2,5", "00"],
        ["28–34 sem ou 1.000–2.000 g", "3,0", "0"],
        ["> 34 sem ou > 2.000 g", "3,5", "1 (a termo) / 0"]
      ],
      nota: "Profundidade (marca no lábio superior) pela IG: 23–24 sem 5,5 cm; 25–26 sem 6,0; 27–29 sem 6,5; 30–32 sem 7,0; 33–34 sem 7,5; 35–37 sem 8,0; 38–40 sem 8,5; 41–43 sem 9,0. Confirmar por expansão simétrica, ausculta e detector de CO₂. Cada tentativa de intubação: até 30 s."
    },
    {
      titulo: "Fluxograma resumido (SBP 2022)",
      colunas: ["Etapa", "≥ 34 semanas", "< 34 semanas"],
      linhas: [
        ["Boa vitalidade", "Clampear ≥ 60 s; pele a pele; amamentar na 1ª hora", "Clampear 30–60 s; levar ao berço aquecido em saco plástico"],
        ["Passos iniciais", "Calor, posicionar, aspirar se necessário, secar", "Saco plástico sem secar + touca; calor; posicionar; aspirar se necessário"],
        ["VPP (FC < 100 ou apneia)", "Ar ambiente (21%)", "O₂ 30%"],
        ["VPP sem melhora em 30 s", "Corrigir técnica; máscara laríngea ou intubação", "Corrigir técnica; intubação"],
        ["FC < 60 após 30 s de VPP eficaz por via avançada", "Massagem 3:1 + O₂ 100%", "Massagem 3:1 + O₂ 100%"],
        ["FC < 60 após 60 s de massagem", "Adrenalina IV 0,02 mg/kg; considerar volume", "Adrenalina IV 0,02 mg/kg; considerar volume"]
      ],
      nota: "Golden minute: em 60 s o RN deve estar respirando espontaneamente ou recebendo VPP eficaz."
    }
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal: Reanimação do recém-nascido ≥ 34 semanas em sala de parto (Diretrizes 2022)",
    "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal: Reanimação do prematuro < 34 semanas em sala de parto (Diretrizes 2022)",
    "AHA/AAP — Neonatal Resuscitation Guidelines (2020, atualização 2025)",
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 1 (2014)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
