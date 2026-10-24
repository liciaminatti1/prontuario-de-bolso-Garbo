// Tromboembolismo venoso na gestação e puerpério
registrarFicha({
  id: "tev-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "TVP e TEP na gestação e puerpério",
  resumo: "Gestação e puerpério aumentam o risco de tromboembolismo venoso (maior no puerpério). Diagnóstico com Doppler venoso e, no TEP, angio-TC ou cintilografia. Tratamento com heparina de baixo peso molecular em dose plena; profilaxia conforme escore de risco (RCOG).",
  palavrasChave: "tev tvp tep trombose venosa profunda embolia pulmonar gestante gravida puerperio enoxaparina heparina baixo peso profilaxia rcog escore varfarina amamentacao dimero d years doppler angiotomografia cintilografia",
  critico: {
    tempo: "Suspeita: enoxaparina já",
    texto: "Suspeita clínica de TVP ou TEP na gestante: iniciar enoxaparina 1 mg/kg SC 12/12 h enquanto aguarda exames, se não houver contraindicação. TEP com instabilidade: trombólise é permitida na gestação."
  },
  alarmes: [
    "Dispneia súbita, dor torácica pleurítica, hemoptise, síncope",
    "SpO₂ < 95%, FC > 110, hipotensão (TEP de alto risco)",
    "Edema unilateral de perna, especialmente à esquerda (80% na gestação)",
    "Dor abdominal baixa/lombar com edema de toda a perna (trombose ilíaca)",
    "Cefaleia intensa, convulsão ou déficit no puerpério (trombose venosa cerebral)"
  ],
  condutaInicial: [
    "Avaliar estabilidade (PA, FC, SpO₂); O₂ se SpO₂ < 95%",
    "Coletar hemograma, plaquetas, creatinina, TP, TTPa antes da heparina",
    "Iniciar enoxaparina 1 mg/kg (peso atual) SC 12/12 h se suspeita alta e sem contraindicação",
    "Suspeita de TVP: Doppler venoso de membros inferiores",
    "Suspeita de TEP: ECG, RX de tórax (com proteção), Doppler de MMII se sintomas de TVP (se positivo, trata sem mais imagem); senão angio-TC de tórax ou cintilografia V/Q",
    "D-dímero isolado não exclui nem confirma na gestação (só em algoritmos validados como YEARS adaptado)",
    "TEP de alto risco (choque): considerar trombólise; envolver obstetra, UTI e cardiologia"
  ],
  fataisExcluir: [
    "TEP maciço",
    "Embolia amniótica (peri-parto, colapso súbito com CIVD)",
    "Cardiomiopatia periparto",
    "Edema agudo de pulmão na pré-eclâmpsia",
    "Dissecção de aorta, SCA",
    "Trombose venosa cerebral"
  ],
  proximaDecisao: "TEV confirmado: enoxaparina dose plena durante toda a gestação e por pelo menos 6 semanas após o parto (mínimo de 3 meses no total). Planejar o parto: suspender a dose terapêutica 24 h antes de anestesia neuraxial ou indução programada. No puerpério, pode trocar por varfarina (compatível com amamentação). Anticoagulantes orais diretos são contraindicados na gestação e na amamentação.",
  clinica: {
    anamnese: [
      "IG ou dias de puerpério, via de parto, cesárea de urgência, hemorragia",
      "TEV prévio, trombofilia, história familiar, SAF, lúpus",
      "Imobilidade, viagem longa, hiperêmese, desidratação, infecção, pré-eclâmpsia",
      "Obesidade, idade > 35, tabagismo, varizes, gestação múltipla, FIV"
    ],
    exameFisico: [
      "FC, FR, PA, SpO₂",
      "Membros inferiores: assimetria (diferença de circunferência da panturrilha), dor, edema, empastamento",
      "Ausculta cardíaca e pulmonar; turgência jugular",
      "Sinais de TVP ilíaca: edema de toda a perna, dor em flanco ou glúteo"
    ],
    diferenciais: [
      { dx: "Edema fisiológico da gestação", pista: "Bilateral, simétrico, sem dor" },
      { dx: "Cisto de Baker roto, celulite, hematoma", pista: "Doppler sem trombo" },
      { dx: "Dispneia fisiológica", pista: "Gradual, SpO₂ normal, sem taquicardia importante" },
      { dx: "Pneumonia, asma", pista: "Febre, tosse, sibilos" },
      { dx: "Cardiomiopatia periparto", pista: "Final da gestação/puerpério, congestão, FE reduzida" }
    ],
    gravidade: [
      "TEP de alto risco: hipotensão (PAS < 90 por > 15 min) ou choque",
      "Risco intermediário: disfunção de VD (ecocardiograma, angio-TC) ou troponina elevada",
      "Escores clínicos (Wells, Genebra) não foram validados na gestação"
    ]
  },
  exames: [
    {
      nome: "Doppler venoso",
      pedido: "Ultrassonografia com Doppler venoso de membros inferiores (incluir veias ilíacas se suspeita de trombose proximal).",
      porQue: "Exame inicial para TVP; também no TEP com sintomas em pernas.",
      esperar: "Veias compressíveis, sem trombo.",
      interpretacao: "Positivo = tratar. Negativo com suspeita alta: repetir em 3 e 7 dias ou RM venosa se suspeita ilíaca (manter anticoagulação até exclusão).",
      limitacoes: "Menor sensibilidade para veias ilíacas e pélvicas."
    },
    {
      nome: "Angio-TC de tórax ou cintilografia V/Q",
      pedido: "Angiotomografia de artérias pulmonares (ou cintilografia de ventilação/perfusão se RX normal).",
      porQue: "Confirmar TEP.",
      esperar: "Sem falha de enchimento.",
      interpretacao: "Ambos têm dose fetal muito baixa; angio-TC dá mais radiação à mama, V/Q um pouco mais ao feto. Escolher pela disponibilidade.",
      limitacoes: "Não negar o exame por estar grávida: o risco do TEP não tratado é maior."
    },
    {
      nome: "Exames de base",
      pedido: "Hemograma com plaquetas, creatinina, TP/INR, TTPa, AST, ALT. ECG. RX de tórax com proteção abdominal. Troponina e BNP se TEP confirmado. Ecocardiograma se instabilidade.",
      porQue: "Segurança da anticoagulação e estratificação.",
      esperar: "—",
      interpretacao: "Plaquetas < 75.000 ou ClCr < 30: discutir dose/heparina não fracionada.",
      limitacoes: "Trombofilia não deve ser pesquisada na fase aguda para decidir tratamento."
    }
  ],
  tratamento: [
    {
      droga: "Enoxaparina (dose terapêutica)",
      linha: "l1",
      dose: "1 mg/kg (peso atual)",
      via: "SC",
      intervalo: "12/12 h",
      duracao: "Toda a gestação e ≥ 6 semanas pós-parto, total mínimo de 3 meses",
      monitorizacao: "Plaquetas no início; anti-Xa só em extremos de peso ou DRC",
      contraindicacoes: "Sangramento ativo, plaquetas < 50.000, plaquetopenia induzida por heparina",
      ajustes: "Apresentações: 40, 60, 80, 100 mg. ClCr < 30: preferir heparina não fracionada. Suspender 24 h antes de raqui/peridural ou parto programado; reiniciar 4–6 h após parto vaginal ou 6–12 h após cesárea (≥ 4 h após retirar cateter), se sem sangramento"
    },
    {
      droga: "Heparina não fracionada (HNF)",
      linha: "alt",
      dose: "Ataque 80 UI/kg IV; infusão 18 UI/kg/h ajustada pelo TTPa (1,5–2,5× controle)",
      via: "IV contínua",
      intervalo: "Contínuo; TTPa 6 h após cada ajuste",
      duracao: "Fase aguda de alto risco, perto do parto ou DRC",
      monitorizacao: "TTPa, plaquetas",
      contraindicacoes: "Sangramento ativo",
      ajustes: "Preferir no TEP de alto risco (pode haver trombólise/procedimento) e perto do parto (meia-vida curta). Antídoto: protamina"
    },
    {
      droga: "Alteplase (TEP de alto risco)",
      linha: "adj",
      dose: "100 mg em 2 h (10 mg em bolus + 90 mg em 2 h)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Sangramento",
      contraindicacoes: "Relativas: gestação e puerpério < 1 semana (avaliar risco-benefício; com choque, benefício supera)",
      ajustes: "Suspender HNF durante a infusão. Alternativa: embolectomia cirúrgica/por cateter em centro especializado"
    },
    {
      droga: "Varfarina (puerpério)",
      linha: "alt",
      dose: "Iniciar 5 mg/dia, ajustar INR 2–3",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até completar o tratamento",
      monitorizacao: "INR",
      contraindicacoes: "Gestação (teratogênica, sobretudo 6–12 semanas; sangramento fetal)",
      ajustes: "Iniciar após o parto (≥ 5º dia ou quando sem risco de sangramento), sobreposta à enoxaparina até INR ≥ 2 por 2 dias. Compatível com amamentação"
    },
    {
      droga: "Enoxaparina profilática",
      linha: "l1",
      dose: "< 50 kg: 20 mg · 50–90 kg: 40 mg · 91–130 kg: 60 mg · 131–170 kg: 80 mg · > 170 kg: 0,6 mg/kg/dia",
      via: "SC",
      intervalo: "1×/dia (doses ≥ 60 mg podem ser divididas 12/12 h)",
      duracao: "Conforme escore (tabela)",
      monitorizacao: "Plaquetas",
      contraindicacoes: "Sangramento ativo, plaquetas < 75.000, placenta prévia sangrando",
      ajustes: "Peso do início da gestação (RCOG 2015). Suspender 12 h antes de anestesia neuraxial"
    },
    {
      droga: "Rivaroxabana, apixabana, dabigatrana",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Contraindicados na gestação e na amamentação",
      ajustes: "Orientar contracepção eficaz se mantidos após o fim da amamentação"
    }
  ],
  destino: {
    agora: [
      "Iniciar heparina na suspeita e completar diagnóstico no mesmo dia",
      "TEP com instabilidade: sala de emergência/UTI"
    ],
    reavaliar: [
      "SpO₂, FC, PA, sangramento; plaquetas no 1º dia e se suspeita de plaquetopenia induzida",
      "Programar o parto com obstetra e anestesia"
    ],
    alta: [
      "TVP sem TEP ou TEP de baixo risco, estável, aprendeu a aplicar enoxaparina, com acesso garantido ao medicamento e seguimento no pré-natal de alto risco"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "TEP com hipoxemia, risco intermediário ou alto",
      "TVP extensa (ilíaca) ou sem condições de tratamento domiciliar",
      "Perto do termo (planejamento do parto com HNF)"
    ],
    transferencia: [
      "Centro com UTI, hemodinâmica/cirurgia e maternidade de alto risco se TEP de alto risco"
    ]
  },
  prescricao: {
    hospitalar: "TEV NA GESTAÇÃO — TRATAMENTO (peso atual: ___ kg)\n1. Dieta livre.\n2. Deambulação liberada após início da anticoagulação (TVP); repouso relativo se TEP com hipoxemia.\n3. Enoxaparina 1 mg/kg = ___ mg SC de 12/12 h.\n   OU (alto risco/perto do parto/ClCr < 30) Heparina não fracionada 25.000 UI em SF 0,9% 250 mL (100 UI/mL): ataque 80 UI/kg IV; infusão 18 UI/kg/h; ajustar pelo TTPa de 6/6 h.\n4. O₂ por cateter nasal se SpO₂ < 95%.\n5. Paracetamol 750 mg VO de 6/6 h se dor. Evitar AINE.\n6. Meia de compressão graduada após melhora da dor (opcional).\n7. Exames: hemograma e plaquetas (basal e no 5º–7º dia), creatinina, TP, TTPa.\n8. Controles: sinais vitais de 4/4 h; SpO₂; sinais de sangramento; BCF.",
    ambulatorial: "USO SUBCUTÂNEO\n1. Enoxaparina ___ mg (seringa preenchida) ----------- ___ seringas\n   Aplicar 1 seringa no tecido da barriga ou da coxa de 12 em 12 horas, todos os dias, até 6 semanas após o parto (conforme orientação).\n   Não aplicar e procurar a maternidade se começar trabalho de parto ou sangramento; NÃO aplicar nas 24 h antes da indução ou cesárea marcada.\n\nPROFILAXIA (dose conforme peso: ___ mg)\n2. Enoxaparina ___ mg ------------------------------ ___ seringas\n   Aplicar 1 seringa SC 1 vez ao dia por ___ (10 dias ou 6 semanas após o parto)."
  },
  orientacoesRetorno: [
    "Aplicar a injeção sempre no mesmo horário; trocar o local a cada aplicação; não esfregar",
    "Hematomas pequenos no local são esperados",
    "Ao começar contrações ou perder líquido, não aplicar a próxima dose e ir à maternidade avisando que usa enoxaparina",
    "Voltar imediatamente se: falta de ar, dor no peito, tosse com sangue, desmaio, perna mais inchada, sangramento importante",
    "Não usar anticoncepcional com estrogênio (pílula combinada, injetável mensal, adesivo, anel) após trombose",
    "Pode amamentar com enoxaparina ou varfarina"
  ],
  tabelas: [
    {
      titulo: "Fatores de risco para profilaxia (RCOG Green-top 37a, 2015 — resumo)",
      colunas: ["Fator", "Pontos"],
      linhas: [
        ["TEV prévio (exceto um único após cirurgia de grande porte)", "4 (alto risco)"],
        ["TEV prévio provocado por cirurgia de grande porte", "3"],
        ["Trombofilia de alto risco conhecida", "3"],
        ["Comorbidade (câncer, IC, LES ativo, doença inflamatória, nefrótica, DM1 com nefropatia, anemia falciforme, uso de drogas IV)", "3"],
        ["História familiar de TEV sem causa ou estrogênio em parente de 1º grau", "1"],
        ["Trombofilia de baixo risco", "1"],
        ["Idade > 35 anos", "1"],
        ["IMC ≥ 30 (≥ 40 = 2)", "1"],
        ["Paridade ≥ 3; tabagismo; varizes calibrosas", "1 cada"],
        ["Pré-eclâmpsia; FIV; gestação múltipla", "1 cada"],
        ["Cesárea eletiva 1 · cesárea em trabalho de parto 2", "1–2"],
        ["Parto instrumental rotacional ou médio; trabalho de parto > 24 h; HPP > 1 L ou transfusão; parto prematuro < 37 sem; natimorto", "1 cada"],
        ["Transitórios: cirurgia na gestação/puerpério 3; hiperêmese, OHSS 1º tri 4; desidratação, imobilidade, infecção sistêmica 1", "Variável"]
      ],
      nota: "Pré-natal: ≥ 4 pontos → profilaxia desde o 1º trimestre; 3 pontos → a partir de 28 semanas. Pós-parto: ≥ 2 pontos → 10 dias; alto risco (TEV prévio, uso de HBPM no pré-natal, trombofilia de alto risco) → 6 semanas. Conferir a tabela completa na diretriz."
    }
  ],
  fontes: [
    "RCOG — Green-top Guideline nº 37a: Reducing the risk of venous thromboembolism during pregnancy and the puerperium (2015)",
    "RCOG — Green-top Guideline nº 37b: Thromboembolic disease in pregnancy and the puerperium: acute management (2015)",
    "ASH — 2018 guidelines for management of venous thromboembolism: venous thromboembolism in the context of pregnancy",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "ESC — Guidelines on acute pulmonary embolism (2019)",
    "van der Pol LM et al. — Pregnancy-adapted YEARS algorithm (Artemis Study, NEJM 2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
