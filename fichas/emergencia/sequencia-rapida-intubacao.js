// Sequência rápida de intubação
registrarFicha({
  id: "sequencia-rapida-intubacao",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Sequência rápida de intubação (SRI)",
  resumo: "Intubação traqueal de emergência com indutor e bloqueador neuromuscular em sequência, sem ventilação com pressão positiva intensa entre eles, para reduzir aspiração. Preparo, pré-oxigenação, doses de adulto e por kg, confirmação e pós-intubação.",
  palavrasChave: "sri sequencia rapida intubacao orotraqueal iot via aerea etomidato cetamina quetamina propofol midazolam fentanil succinilcolina suxametonio rocuronio sugamadex bougie videolaringoscopio pre oxigenacao via aerea dificil",
  critico: {
    tempo: "Pré-oxigenar 3 min; ressuscitar antes",
    texto: "Corrija hipotensão e hipóxia antes da indução (\"ressuscitar antes de intubar\"). Confirme sempre com capnografia em forma de onda."
  },
  alarmes: [
    "SpO₂ < 93% após pré-oxigenação ou dessaturação durante a tentativa: abortar e ventilar",
    "PAS < 90 mmHg ou índice de choque > 1 antes da indução: alto risco de colapso circulatório",
    "Preditores de via aérea difícil (LEMON, MOANS) ou via aérea fisiologicamente difícil (hipóxia, choque, acidose grave)",
    "Mais de 2 tentativas sem sucesso: via aérea falha (supraglótico; não intuba e não oxigena → cricotireoidostomia)",
    "Ausência de curva na capnografia após intubar: tubo fora da traqueia até prova em contrário"
  ],
  condutaInicial: [
    "Indicação: falha em proteger a via aérea (Glasgow ≤ 8 com perda de reflexos), falha de oxigenação ou ventilação, curso clínico previsível (queimadura de via aérea, angioedema progressivo, transporte de paciente instável)",
    "Preparo (SOAP-ME): aspirador ligado, O₂, via aérea (laringoscópio/videolaringoscópio, tubos de 2 tamanhos, bougie, supraglótico, kit de cricotireoidostomia), posicionamento, monitor e capnografia, medicações aspiradas e rotuladas",
    "Posicionar: rampa (orelha na altura do esterno) e cabeceira elevada 20–30° em obesos e se possível em todos",
    "Pré-oxigenar por 3 min: máscara com reservatório em fluxo máximo (≥ 15 L/min) ou VNI se hipoxemia grave; cateter nasal a 15 L/min mantido durante a laringoscopia (oxigenação apneica)",
    "Ressuscitar: cristaloide e vasopressor pronto (ou já em infusão) se hipotensão; considerar reduzir a dose do indutor",
    "Indução e bloqueio neuromuscular em sequência rápida, sem esperar entre eles",
    "Laringoscopia após 45–60 s (fasciculações cessarem ou relaxamento total). Videolaringoscópio aumenta o sucesso na 1ª tentativa; bougie se a glote não for bem vista",
    "Confirmar com capnografia em forma de onda (padrão-ouro), ausculta e expansão; fixar o tubo (adulto: 21–23 cm na rima labial)",
    "Pós-intubação imediata: sedação e analgesia contínuas, ventilação protetora, radiografia de tórax"
  ],
  fataisExcluir: [
    "Intubação esofágica não reconhecida",
    "Hipotensão e PCR peri-intubação",
    "Hipoxemia grave durante tentativas repetidas",
    "Hipercalemia por succinilcolina em paciente de risco",
    "Broncoaspiração",
    "Pneumotórax após ventilação com pressão positiva",
    "Intubação seletiva (brônquio direito)"
  ],
  proximaDecisao: "Falha na 1ª tentativa → reoxigenar com bolsa-válvula-máscara (2 pessoas, cânula orofaríngea), otimizar posição, trocar lâmina ou operador. Falha na 2ª ou 3ª → dispositivo supraglótico. Não intuba e não oxigena → cricotireoidostomia cirúrgica imediata (adulto) ou por punção (criança < 10–12 anos).",
  clinica: {
    anamnese: [
      "Motivo da intubação e tempo disponível",
      "Jejum, vômitos, obstrução intestinal (risco de aspiração)",
      "Alergias, intubações difíceis prévias",
      "Doenças: DRC e hipercalemia, doença neuromuscular, imobilização prolongada, queimadura ou esmagamento > 24–72 h (contraindicam succinilcolina)",
      "História pessoal ou familiar de hipertermia maligna"
    ],
    exameFisico: [
      "LEMON: Look (aspecto externo), Evaluate 3-3-2, Mallampati, Obstrução, Neck (mobilidade cervical)",
      "MOANS (dificuldade de ventilação com máscara): Máscara sem vedação (barba), Obesidade, Aged/idade, No teeth/sem dentes, Stiff/rigidez pulmonar",
      "Sinais vitais completos, índice de choque (FC/PAS), SpO₂",
      "Restrição cervical se trauma: estabilização manual alinhada durante a laringoscopia"
    ],
    diferenciais: [
      { dx: "Pode esperar VNI ou cânula nasal de alto fluxo?", pista: "DPOC hipercápnico, edema agudo de pulmão alerta: VNI pode evitar intubação" },
      { dx: "Intubação acordada", pista: "Via aérea anatomicamente muito difícil com tempo disponível: chamar anestesista" },
      { dx: "Intubação sem bloqueio (só sedação)", pista: "Em geral não recomendada; o bloqueador aumenta o sucesso na 1ª tentativa" }
    ],
    gravidade: [
      "Via aérea fisiologicamente difícil: hipoxemia, hipotensão, acidose metabólica grave (manter ventilação minuto alta após intubar), VD insuficiente",
      "Choque: reduzir dose do indutor (etomidato ou cetamina, metade da dose) e ter vasopressor pronto",
      "Acidose metabólica grave: apneia prolongada e hipoventilação pós-intubação podem levar à PCR"
    ]
  },
  exames: [
    {
      nome: "Capnografia em forma de onda",
      pedido: "Capnografia contínua com curva após intubação e durante todo o transporte.",
      porQue: "Confirmar posição traqueal e monitorizar deslocamento do tubo.",
      esperar: "Curva quadrada mantida por ≥ 5 ciclos.",
      interpretacao: "Sem curva: retirar e reintubar (\"na dúvida, tira\").",
      limitacoes: "Em PCR o ETCO₂ pode ser baixo; usar com ultrassom e visualização."
    },
    {
      nome: "Gasometria arterial pós-intubação",
      pedido: "Gasometria arterial 20–30 min após intubação e ajuste do ventilador.",
      porQue: "Ajustar FiO₂, PEEP e frequência.",
      esperar: "—",
      interpretacao: "Ver ficha ventilacao-mecanica.",
      limitacoes: "—"
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax no leito após intubação.",
      porQue: "Altura do tubo, pneumotórax, atelectasia.",
      esperar: "Ponta 2–4 cm acima da carina (adulto); entre T2 e T3 na criança.",
      interpretacao: "Tubo seletivo: tracionar e recontrolar.",
      limitacoes: "Não confirma posição traqueal versus esofágica: usar capnografia."
    },
    {
      nome: "Potássio (se succinilcolina e risco)",
      pedido: "Potássio sérico ou na gasometria antes da indução, se houver tempo e risco de hipercalemia.",
      porQue: "Succinilcolina eleva o K.",
      esperar: "—",
      interpretacao: "K alto ou desconhecido em paciente de risco: usar rocurônio.",
      limitacoes: "Não atrasar intubação emergente."
    }
  ],
  tratamento: [
    {
      droga: "Etomidato 2 mg/mL",
      linha: "l1",
      dose: "Adulto e criança: 0,3 mg/kg (choque: 0,15–0,2 mg/kg)",
      via: "IV em bolus",
      intervalo: "Dose única",
      duracao: "Efeito 3–5 min",
      monitorizacao: "PA, mioclonias",
      contraindicacoes: "Relativa: choque séptico (supressão adrenal transitória, dose única)",
      ajustes: "Estabilidade hemodinâmica. Ensaio RSI (NEJM 2025): sem diferença de mortalidade em relação à cetamina, com menos colapso cardiovascular"
    },
    {
      droga: "Cetamina (quetamina) 50 mg/mL",
      linha: "l1",
      dose: "Adulto e criança: 1–2 mg/kg (choque: 0,5–1 mg/kg)",
      via: "IV em bolus",
      intervalo: "Dose única",
      duracao: "Efeito 10–15 min",
      monitorizacao: "PA, FC; em choque grave pode causar hipotensão",
      contraindicacoes: "Relativa: hipertensão grave descontrolada, síndrome coronariana aguda, psicose",
      ajustes: "Boa escolha no broncoespasmo grave. Não é contraindicada no TCE. Diluir 1 mL (50 mg) + 4 mL SF = 10 mg/mL para crianças"
    },
    {
      droga: "Propofol 10 mg/mL",
      linha: "alt",
      dose: "Adulto e criança: 1–2,5 mg/kg (idoso/instável: reduzir dose ou evitar)",
      via: "IV em bolus",
      intervalo: "Dose única",
      duracao: "Efeito 5–10 min",
      monitorizacao: "Hipotensão frequente",
      contraindicacoes: "Choque, hipovolemia",
      ajustes: "Útil no estado de mal epiléptico e em paciente hemodinamicamente estável"
    },
    {
      droga: "Midazolam 5 mg/mL",
      linha: "alt",
      dose: "Adulto e criança: 0,1–0,3 mg/kg",
      via: "IV em bolus",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Hipotensão, início lento",
      contraindicacoes: "Choque",
      ajustes: "Indutor de exceção (início mais lento); usar se outros indisponíveis"
    },
    {
      droga: "Fentanil 50 mcg/mL (pré-tratamento, opcional)",
      linha: "adj",
      dose: "Adulto 1–3 mcg/kg; criança 1–2 mcg/kg",
      via: "IV lento (1–2 min), 3 min antes da indução",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Hipotensão, apneia, rigidez torácica",
      contraindicacoes: "Choque",
      ajustes: "Atenua resposta simpática em hipertensão intracraniana, dissecção de aorta, SCA. Omitir em choque"
    },
    {
      droga: "Rocurônio 10 mg/mL",
      linha: "l1",
      dose: "Adulto e criança: 1,2 mg/kg (1–1,2 mg/kg)",
      via: "IV em bolus, logo após o indutor",
      intervalo: "Dose única",
      duracao: "Bloqueio 45–60 min ou mais",
      monitorizacao: "Garantir sedação contínua após intubar",
      contraindicacoes: "Alergia",
      ajustes: "Usar quando a succinilcolina for contraindicada. Reversão com sugamadex 16 mg/kg IV (imediata) — disponibilidade variável no SUS"
    },
    {
      droga: "Succinilcolina (suxametônio) 100 mg — reconstituir em 10 mL (10 mg/mL)",
      linha: "l1",
      dose: "Adulto 1,5 mg/kg; criança 2 mg/kg (lactente até 3 mg/kg em alguns protocolos)",
      via: "IV em bolus, logo após o indutor",
      intervalo: "Dose única (repetir pode causar bradicardia)",
      duracao: "Bloqueio 6–10 min",
      monitorizacao: "Bradicardia (crianças), hipercalemia",
      contraindicacoes: "Hipercalemia ou risco (DRC dialítica sem K, rabdomiólise), queimadura ou esmagamento após 24–72 h, doença neuromuscular, AVC/lesão medular com déficit há > 72 h, imobilização prolongada, hipertermia maligna",
      ajustes: "Conservar refrigerada conforme fabricante. Se contraindicação: rocurônio"
    },
    {
      droga: "Atropina 0,25 mg/mL ou 0,5 mg/mL (criança)",
      linha: "adj",
      dose: "0,02 mg/kg",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "FC",
      contraindicacoes: "Não usar de rotina",
      ajustes: "Considerar em lactentes, bradicardia prévia ou 2ª dose de succinilcolina. PALS 2025 não define dose mínima nesse contexto"
    },
    {
      droga: "Adrenalina em microdoses (push-dose) ou noradrenalina",
      linha: "adj",
      dose: "Adrenalina 10 mcg/mL: 0,5–2 mL (5–20 mcg) adulto; noradrenalina em bomba 0,05–0,5 mcg/kg/min",
      via: "IV",
      intervalo: "Bolus a cada 2–5 min se hipotensão",
      duracao: "Peri-intubação",
      monitorizacao: "PA a cada 1–2 min",
      contraindicacoes: "—",
      ajustes: "Push-dose: 1 mL de adrenalina 1 mg/mL + 99 mL de SF 0,9% = 10 mcg/mL. Rotular bem a seringa. Uso por equipe experiente"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência: SRI com equipe, plano A-B-C da via aérea verbalizado antes",
      "Iniciar sedação e analgesia contínuas até 10 min após a intubação (efeito do etomidato e da succinilcolina acaba rápido)"
    ],
    reavaliar: [
      "Capnografia contínua, PA a cada 3–5 min por 30 min",
      "Gasometria em 20–30 min, radiografia de tórax"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "UTI (adulto ou pediátrica)"
    ],
    transferencia: [
      "Regulação para UTI; transporte com capnografia, ventilador de transporte e sedação contínua"
    ]
  },
  prescricao: {
    hospitalar: "SEQUÊNCIA RÁPIDA DE INTUBAÇÃO — ADULTO (peso: ___ kg; exemplo para 70 kg)\n1. Monitor, oximetria, PA a cada 2 min, capnografia pronta; 2 acessos venosos; aspirador ligado.\n2. Pré-oxigenação 3 min: máscara com reservatório a 15 L/min (ou VNI FiO₂ 100%) + cateter nasal a 15 L/min (oxigenação apneica).\n3. Se PAS < 90: SF 0,9% 500 mL IV aberto e noradrenalina em bomba antes da indução.\n4. (Opcional, sem choque) Fentanil 50 mcg/mL — 2–4 mL (100–200 mcg) IV lento, 3 min antes.\n5. Indutor (escolher um):\n   - Etomidato 2 mg/mL — 0,3 mg/kg = 10,5 mL (21 mg) IV em bolus; ou\n   - Cetamina 50 mg/mL — 1,5 mg/kg = 2,1 mL (105 mg) IV em bolus.\n   Em choque: metade da dose.\n6. Bloqueador (logo após o indutor):\n   - Succinilcolina 100 mg reconstituída em 10 mL (10 mg/mL) — 1,5 mg/kg = 10,5 mL (105 mg) IV em bolus; ou\n   - Rocurônio 10 mg/mL — 1,2 mg/kg = 8,4 mL (84 mg) IV em bolus.\n7. Laringoscopia após 45–60 s; tubo 7,0–8,0 com bougie; insuflar balonete (20–30 cmH₂O).\n8. Confirmar com capnografia; fixar; radiografia de tórax.\n9. Iniciar em até 10 min: fentanil + propofol ou midazolam em bomba (ver ficha sedacao-continua).\n10. Ventilação: VC 6–8 mL/kg de peso predito, PEEP 5, FR 14–18, FiO₂ 100% e reduzir para SpO₂ 92–96% (ver ficha ventilacao-mecanica).\n\nCRIANÇA (por kg)\n- Etomidato 0,3 mg/kg ou cetamina 1–2 mg/kg IV.\n- Succinilcolina 2 mg/kg ou rocurônio 1,2 mg/kg IV.\n- Atropina 0,02 mg/kg IV se lactente ou bradicardia.\n- Tubo com balonete: (idade/4) + 3,5 mm; profundidade (cm) ≈ 3 × diâmetro do tubo."
  },
  orientacoesRetorno: [
    "Família: explicar o motivo da intubação, que o paciente ficará sedado e que a ventilação é temporária",
    "Registrar no prontuário via aérea difícil e técnica usada; orientar o paciente após a alta a informar intubação difícil em procedimentos futuros"
  ],
  tabelas: [
    {
      titulo: "Volumes rápidos (adulto 70 kg)",
      colunas: ["Droga (apresentação)", "Dose", "Volume"],
      linhas: [
        ["Etomidato 2 mg/mL", "0,3 mg/kg = 21 mg", "10,5 mL"],
        ["Cetamina 50 mg/mL", "1,5 mg/kg = 105 mg", "2,1 mL"],
        ["Propofol 10 mg/mL", "1,5 mg/kg = 105 mg", "10,5 mL"],
        ["Succinilcolina 10 mg/mL (reconstituída)", "1,5 mg/kg = 105 mg", "10,5 mL"],
        ["Rocurônio 10 mg/mL", "1,2 mg/kg = 84 mg", "8,4 mL"],
        ["Fentanil 50 mcg/mL", "2 mcg/kg = 140 mcg", "2,8 mL"]
      ],
      nota: "Em choque, reduzir o indutor pela metade. Doses de bloqueador baseadas no peso real (succinilcolina) ou ideal/ajustado (rocurônio) em obesos — seguir protocolo local."
    },
    {
      titulo: "Tempos da SRI",
      colunas: ["Momento", "Ação"],
      linhas: [
        ["−10 min", "Preparo (equipe, material, drogas, plano B e C)"],
        ["−5 min", "Pré-oxigenação"],
        ["−3 min", "Pré-tratamento (opcional) e otimização hemodinâmica"],
        ["0", "Indutor seguido imediatamente do bloqueador"],
        ["+45–60 s", "Laringoscopia e intubação"],
        ["+1 a +10 min", "Confirmação e sedação pós-intubação"]
      ]
    }
  ],
  fontes: [
    "Society of Critical Care Medicine — Guidelines for Rapid Sequence Intubation in the Critically Ill Adult Patient (Crit Care Med, 2023)",
    "Casey JD et al. — Ketamine or Etomidate for Tracheal Intubation of Critically Ill Adults (RSI trial, NEJM, 2025)",
    "Prekker ME et al. — Video versus Direct Laryngoscopy for Tracheal Intubation of Critically Ill Adults (DEVICE, NEJM, 2023)",
    "Difficult Airway Society — Guidelines for tracheal intubation in critically ill adults (2018)",
    "American Heart Association / AAP — 2025 Pediatric Advanced Life Support: intubação e atropina (2025)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
