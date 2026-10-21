// Dor torácica / Síndrome coronariana aguda
registrarFicha({
  id: "sca",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Dor torácica / Síndrome coronariana aguda",
  resumo: "Dor ou desconforto torácico, epigástrico, em mandíbula ou membro superior; equivalentes anginosos (dispneia, síncope, sudorese).",
  palavrasChave: "infarto iam scacsst scassst troponina ecg angina aas clopidogrel nitrato heart trombolise tenecteplase",
  critico: {
    tempo: "ECG ≤ 10 min",
    texto: "ECG de 12 derivações em até 10 minutos da chegada. Se supra de ST: reperfusão (porta-balão ≤ 90 min ou porta-agulha ≤ 30 min)."
  },
  alarmes: [
    "Supra de ST ou BRE novo/presumidamente novo",
    "Dor persistente refratária a nitrato",
    "Hipotensão, choque, congestão pulmonar (Killip ≥ II)",
    "Arritmia ventricular, BAVT, síncope",
    "Dor que irradia para dorso, assimetria de pulsos (pensar dissecção)"
  ],
  condutaInicial: [
    "Monitor, acesso venoso, SpO₂; O₂ só se SpO₂ < 90%",
    "AAS 162–300 mg mastigado (se sem alergia/sangramento ativo)",
    "Nitrato SL se PAS ≥ 90 e sem IAM de VD ou inibidor de PDE-5",
    "Troponina (0/1h ou 0/2h se ultrassensível) e RX de tórax",
    "Repetir ECG a cada 15–30 min se dor persistente e ECG inicial normal"
  ],
  fataisExcluir: [
    "IAM com supra de ST",
    "Dissecção aguda de aorta",
    "Tromboembolismo pulmonar",
    "Pneumotórax hipertensivo",
    "Tamponamento cardíaco",
    "Ruptura de esôfago (Boerhaave)"
  ],
  proximaDecisao: "Com supra de ST → acionar reperfusão agora. Sem supra → estratificar (HEART + troponina seriada) e decidir entre alta, observação ou estratégia invasiva.",
  clinica: {
    anamnese: [
      "Caráter da dor: aperto/peso/queimação; início súbito × progressivo; duração (> 20 min sugere IAM)",
      "Relação com esforço, repouso, respiração, posição e palpação",
      "Irradiação: mandíbula, braço esquerdo ou ambos, dorso (dissecção)",
      "Sintomas associados: dispneia, sudorese, náusea, síncope",
      "Fatores de risco: DM, HAS, tabagismo, dislipidemia, DAC prévia, história familiar precoce, cocaína",
      "Uso de sildenafil/tadalafila (contraindica nitrato), anticoagulantes, sangramento recente",
      "Atípicos frequentes em idosos, mulheres, diabéticos e DRC"
    ],
    exameFisico: [
      "PA nos dois braços (diferença > 20 mmHg sugere dissecção)",
      "Pulsos periféricos e simetria",
      "Ausculta: sopro novo (insuficiência mitral, CIV), atrito pericárdico, B3",
      "Estertores, turgência jugular, perfusão periférica → classificar Killip",
      "Murmúrio vesicular assimétrico (pneumotórax), sinais de TVP (TEP)",
      "Dor reprodutível à palpação não exclui SCA"
    ],
    diferenciais: [
      {
        dx: "IAM com supra de ST",
        pista: "Supra ST ≥ 1 mm em 2 derivações contíguas (V2–V3 com critérios por sexo/idade) ou BRE novo"
      },
      {
        dx: "SCA sem supra",
        pista: "Troponina elevada com curva (IAMSSST) ou normal (angina instável)"
      },
      {
        dx: "Dissecção de aorta",
        pista: "Dor lancinante para dorso, déficit de pulso, mediastino alargado"
      },
      {
        dx: "TEP",
        pista: "Dispneia súbita, taquicardia, hipoxemia, fatores de risco para TVP"
      },
      {
        dx: "Pericardite",
        pista: "Dor pleurítica que melhora ao inclinar o tronco, supra difuso com infra de PR"
      },
      {
        dx: "Pneumotórax",
        pista: "Dor pleurítica súbita, MV abolido, hipertimpanismo"
      },
      {
        dx: "DRGE / espasmo esofágico",
        pista: "Queimação pós-prandial; diagnóstico de exclusão"
      },
      {
        dx: "Osteomuscular / ansiedade",
        pista: "Somente após exclusão das causas fatais"
      }
    ],
    gravidade: [
      "Killip II–IV",
      "Instabilidade hemodinâmica ou elétrica",
      "Angina refratária",
      "Insuficiência mitral aguda",
      "Critérios de muito alto risco → cateterismo < 2 h mesmo sem supra"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações — URGENTE (dor torácica). Acrescentar V7–V9 e V3R–V4R se infra em V1–V3 ou IAM inferior.",
      porQue: "Define a via: supra de ST (reperfusão) × sem supra (estratificação).",
      esperar: "Supra, infra de ST, inversão de T, BRE novo, Q patológica; pode ser normal no início.",
      interpretacao: "Supra ST → reperfusão imediata. Infra/T invertida dinâmica → alto risco. Normal → repetir seriado.",
      limitacoes: "ECG normal não exclui SCA (sensibilidade inicial ~50%). Território circunflexo pode ser 'silencioso'."
    },
    {
      nome: "Troponina (preferir ultrassensível)",
      pedido: "Troponina I ou T ultrassensível — 0h e 1h (ou 0h e 2h), conforme algoritmo do laboratório.",
      porQue: "Diagnóstico de lesão miocárdica e estratificação.",
      esperar: "Elevação acima do percentil 99 com variação (delta) significativa.",
      interpretacao: "Muito baixa na admissão + delta baixo → regra de exclusão. Elevada com delta → IAMSSST. Elevada estável → lesão crônica (DRC, IC).",
      limitacoes: "Eleva em sepse, TEP, miocardite, DRC, taquiarritmia. Troponina convencional: repetir em 3–6 h."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA e perfil (ou AP no leito se instável).",
      porQue: "Congestão, pneumotórax, alargamento de mediastino.",
      esperar: "Normal na maioria das SCA.",
      interpretacao: "Mediastino > 8 cm → pensar dissecção, solicitar angio-TC antes de antitrombóticos agressivos.",
      limitacoes: "RX normal não exclui dissecção nem TEP."
    },
    {
      nome: "Laboratório geral",
      pedido: "Hemograma, creatinina, sódio, potássio, magnésio, glicemia, coagulograma (TP/INR, TTPa).",
      porQue: "Ajuste de anticoagulante, risco de sangramento, arritmia.",
      esperar: "—",
      interpretacao: "ClCr < 30 mL/min muda dose de enoxaparina e fondaparinux. Plaquetas < 100 mil aumentam risco.",
      limitacoes: "Não atrasar AAS nem reperfusão aguardando resultados."
    },
    {
      nome: "Ecocardiograma à beira-leito",
      pedido: "Ecocardiograma transtorácico (ou POCUS) — avaliar contratilidade, derrame pericárdico, VD.",
      porQue: "Alteração segmentar, complicações mecânicas, diferenciais (tamponamento, TEP com VD dilatado).",
      esperar: "Hipocinesia segmentar no território acometido.",
      interpretacao: "Função normal durante dor reduz probabilidade de isquemia extensa.",
      limitacoes: "Operador-dependente."
    }
  ],
  tratamento: [
    {
      droga: "AAS",
      linha: "l1",
      dose: "162–300 mg (ataque), depois 100 mg/dia",
      via: "VO, mastigado",
      intervalo: "Ataque único; manutenção 1×/dia",
      duracao: "Indefinida",
      monitorizacao: "Sangramento",
      contraindicacoes: "Alergia verdadeira, sangramento ativo",
      ajustes: "—"
    },
    {
      droga: "Clopidogrel",
      linha: "l1",
      dose: "Ataque 300 mg (600 mg se ICP primária). Com trombólise: 300 mg se ≤ 75 anos; 75 mg se > 75 anos. Manutenção 75 mg/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "12 meses (DAPT) salvo risco hemorrágico",
      monitorizacao: "Sangramento",
      contraindicacoes: "Sangramento ativo",
      ajustes: "Ticagrelor 180 mg → 90 mg 12/12h é preferível ao clopidogrel quando disponível (ACC/AHA 2025, ESC 2023), exceto se trombólise, anticoagulação oral ou alto risco de sangramento"
    },
    {
      droga: "Dinitrato de isossorbida",
      linha: "adj",
      dose: "5 mg",
      via: "Sublingual",
      intervalo: "A cada 5 min, até 3 doses",
      duracao: "Enquanto dor",
      monitorizacao: "PA antes de cada dose",
      contraindicacoes: "PAS < 90 mmHg, IAM de VD, sildenafil < 24 h / tadalafila < 48 h, estenose aórtica grave",
      ajustes: "Dor persistente: nitroglicerina IV 5–10 mcg/min, ↑ 5–10 a cada 3–5 min (50 mg em 250 mL SG 5% = 200 mcg/mL)"
    },
    {
      droga: "Enoxaparina",
      linha: "l1",
      dose: "1 mg/kg",
      via: "SC",
      intervalo: "12/12h",
      duracao: "Até revascularização ou 8 dias",
      monitorizacao: "Sangramento, plaquetas, função renal",
      contraindicacoes: "Sangramento ativo, plaquetopenia induzida por heparina",
      ajustes: "ClCr < 30: 1 mg/kg 1×/dia. Com trombólise: ≤ 75 anos 30 mg IV + 1 mg/kg SC 12/12h; > 75 anos sem bolus, 0,75 mg/kg 12/12h (máx 75 mg nas 2 primeiras)"
    },
    {
      droga: "Tenecteplase (IAMCSST sem acesso a ICP em 120 min)",
      linha: "l1",
      dose: "< 60 kg 30 mg · 60–69 kg 35 mg · 70–79 kg 40 mg · 80–89 kg 45 mg · ≥ 90 kg 50 mg",
      via: "IV em bolus único (5–10 s)",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Sangramento, arritmia de reperfusão, critérios de reperfusão em 60–90 min",
      contraindicacoes: "AVC hemorrágico prévio, AVC isquêmico < 3 meses, neoplasia SNC, sangramento ativo, suspeita de dissecção, TCE < 3 meses",
      ajustes: "≥ 75 anos: considerar metade da dose. Ideal até 12 h do início; porta-agulha ≤ 30 min"
    },
    {
      droga: "Morfina",
      linha: "adj",
      dose: "2–4 mg",
      via: "IV",
      intervalo: "Repetir a cada 5–15 min se necessário",
      duracao: "Só para dor refratária a nitrato",
      monitorizacao: "FR, PA, nível de consciência",
      contraindicacoes: "Hipotensão, depressão respiratória",
      ajustes: "Pode atrasar absorção de antiagregantes orais"
    },
    {
      droga: "Betabloqueador oral (metoprolol)",
      linha: "adj",
      dose: "25–50 mg",
      via: "VO",
      intervalo: "12/12h",
      duracao: "Contínuo",
      monitorizacao: "FC, PA, sinais de IC",
      contraindicacoes: "IC aguda, choque, BAV avançado, broncoespasmo, cocaína",
      ajustes: "Iniciar nas primeiras 24 h se estável; evitar IV de rotina"
    },
    {
      droga: "Atorvastatina",
      linha: "l1",
      dose: "40–80 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínua",
      monitorizacao: "Transaminases, CK se mialgia",
      contraindicacoes: "Hepatopatia ativa",
      ajustes: "Alta intensidade para todos sem contraindicação"
    }
  ],
  destino: {
    agora: [
      "Supra de ST: acionar hemodinâmica ou trombolisar (se ICP > 120 min)",
      "Sem supra: troponina seriada + HEART",
      "Muito alto risco (instabilidade, dor refratária, arritmia grave): cateterismo < 2 h"
    ],
    reavaliar: [
      "ECG a cada 15–30 min se dor persistir",
      "Troponina conforme algoritmo (1h, 2h ou 3–6h)",
      "60–90 min após trombólise: critérios de reperfusão (↓ ST ≥ 50%, alívio da dor)"
    ],
    alta: [
      "HEART ≤ 3 com troponinas seriadas negativas e ECG sem isquemia",
      "Dor resolvida, exame normal",
      "Retorno ambulatorial com cardiologia/teste funcional quando indicado",
      "Orientar retorno imediato se dor recorrer"
    ],
    observacao: [
      "HEART 4–6 ou troponina indeterminada",
      "Repetir ECG/troponina e considerar teste funcional ou angio-TC coronariana"
    ],
    internacao: [
      "IAMSSST ou angina instável de alto risco",
      "Killip ≥ II",
      "Necessidade de anticoagulação plena"
    ],
    transferencia: [
      "IAMCSST sem hemodinâmica: transferir para ICP se tempo ≤ 120 min; senão trombolisar e transferir (estratégia fármaco-invasiva, cateterismo em 2–24 h)",
      "Falha de trombólise → ICP de resgate imediata"
    ]
  },
  prescricao: {
    hospitalar: "SCA — SALA DE EMERGÊNCIA / UNIDADE CORONARIANA (peso: ___ kg; ClCr: ___)\n1. Jejum até definir cateterismo; depois dieta leve hipossódica. Repouso no leito nas primeiras 12–24 h.\n2. Monitor cardíaco contínuo, oximetria; O₂ por cateter 2–4 L/min só se SpO₂ < 90%.\n3. AAS 100 mg — 3 comprimidos (300 mg) VO mastigados (ataque); a partir do dia seguinte, 1 comprimido 1 vez ao dia.\n4. Clopidogrel 75 mg — ataque 4 comprimidos (300 mg) VO (8 comprimidos = 600 mg se ICP primária; com trombólise > 75 anos: 1 comprimido, sem ataque). Depois 75 mg 1 vez ao dia. (Ticagrelor 90 mg — 2 comprimidos de ataque e 1 de 12/12 h — é preferível quando disponível, se não houve trombólise e sem anticoagulante oral.)\n5. Enoxaparina 1 mg/kg SC de 12/12 h (ClCr < 30: 1 mg/kg 1 vez ao dia). Na trombólise ≤ 75 anos: 30 mg IV em bolus + 1 mg/kg SC 15 min depois e de 12/12 h (máx 100 mg nas 2 primeiras doses); > 75 anos: sem bolus, 0,75 mg/kg SC de 12/12 h (máx 75 mg nas 2 primeiras doses). Na ICP primária, a anticoagulação é feita na hemodinâmica.\n6. Atorvastatina 40 mg — 2 comprimidos (80 mg) VO 1 vez ao dia, à noite.\n7. Dinitrato de isossorbida 5 mg SL se dor e PAS ≥ 90 mmHg, a cada 5 min, até 3 doses.\n8. Se dor persistente, HAS ou congestão: nitroglicerina 5 mg/mL — 50 mg (10 mL) + SG 5% 240 mL (200 mcg/mL) IV em bomba; iniciar 5–10 mcg/min (1,5–3 mL/h), aumentar 5–10 mcg/min a cada 3–5 min.\n9. Metoprolol (tartarato) 25 mg VO de 12/12 h nas primeiras 24 h, se sem IC, choque, BAV ou broncoespasmo.\n10. Se dor refratária a nitrato: morfina 10 mg/mL — 1 mL + 9 mL de SF 0,9% (1 mg/mL): 2–4 mg IV lento, a cada 5–15 min se necessário.\n11. Pantoprazol 40 mg VO 1 vez ao dia em jejum (proteção gástrica durante dupla antiagregação).\n12. ECG de 12 derivações a cada 15–30 min se dor; troponina conforme algoritmo; controles de PA, FC e diurese.\n\nTROMBÓLISE — IAMCSST ≤ 12 h sem ICP possível em 120 min (checar contraindicações)\n- Tenecteplase IV em bolus único em 5–10 s, dose por peso (tabela). Idade ≥ 75 anos: considerar metade da dose.\n- Junto: AAS 300 mg + clopidogrel (300 mg se ≤ 75 anos; 75 mg se > 75 anos) + enoxaparina conforme item 5.\n- Avaliar critérios de reperfusão em 60–90 min; transferir para cateterismo em 2–24 h (resgate imediato se falha).",
    ambulatorial: "ALTA PÓS-SCA (seguir orientação da cardiologia)\nUSO ORAL\n1. AAS 100 mg ----------------------------------- 30 comprimidos\n   Tomar 1 comprimido após o almoço. Uso contínuo.\n2. Clopidogrel 75 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 12 meses (não suspender sem falar com o cardiologista).\n3. Atorvastatina 80 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido à noite. Uso contínuo.\n4. Succinato de metoprolol 25–50 mg -------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n5. Enalapril 5 mg (se FE ≤ 40%, HAS, DM ou DRC) ---- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas.\n6. Dinitrato de isossorbida 5 mg ------------------ 10 comprimidos\n   Colocar 1 comprimido embaixo da língua se dor no peito; se não passar em 5 minutos, ligar 192."
  },
  orientacoesRetorno: [
    "Dor no peito por mais de 5 minutos ou que não melhora com o comprimido embaixo da língua: ligar 192 imediatamente",
    "Não parar o AAS e o clopidogrel por conta própria, nem antes de dentista ou cirurgia sem falar com o cardiologista",
    "Voltar se fezes pretas, vômito com sangue ou sangramento que não para",
    "Parar de fumar; dieta com pouco sal e gordura; caminhar conforme liberação médica (reabilitação cardíaca)",
    "Não usar sildenafila ou tadalafila se estiver usando nitrato",
    "Consulta com cardiologia em até 2–4 semanas e acompanhamento na UBS; trazer exames"
  ],
  tabelas: [
    {
      titulo: "Tenecteplase por peso (bolus IV único)",
      colunas: ["Peso", "Dose", "Volume (5 mg/mL)"],
      linhas: [
        ["< 60 kg", "30 mg", "6 mL"],
        ["60–69 kg", "35 mg", "7 mL"],
        ["70–79 kg", "40 mg", "8 mL"],
        ["80–89 kg", "45 mg", "9 mL"],
        ["≥ 90 kg", "50 mg", "10 mL"]
      ],
      nota: "≥ 75 anos: considerar metade da dose (ESC 2023). Reconstituir o frasco de 50 mg com 10 mL de água para injeção."
    },
    {
      titulo: "Escore HEART",
      colunas: ["Item", "0", "1", "2"],
      linhas: [
        ["História", "Pouco suspeita", "Moderadamente suspeita", "Muito suspeita"],
        ["ECG", "Normal", "Alteração inespecífica de repolarização", "Infra de ST significativo"],
        ["Idade", "< 45", "45–64", "≥ 65"],
        ["Fatores de risco", "Nenhum", "1–2", "≥ 3 ou aterosclerose conhecida"],
        ["Troponina", "≤ limite normal", "1–3× o limite", "> 3× o limite"]
      ],
      nota: "0–3 baixo risco (alta com seguimento se troponinas seriadas negativas); 4–6 intermediário (observação); 7–10 alto (estratégia invasiva)."
    }
  ],
  fontes: [
    "SBC — Diretriz Brasileira de Dor Torácica na Emergência (Arq Bras Cardiol, 2025)",
    "ACC/AHA/ACEP/NAEMSP/SCAI — Guideline for the Management of Patients With Acute Coronary Syndromes (2025)",
    "ESC 2023 Guidelines for the management of acute coronary syndromes",
    "SBC — Diretrizes de Angina Instável e IAM sem supra de ST (2021) e de IAM com supra de ST (2015)",
    "4ª Definição Universal de Infarto (2018)",
    "Backus BE et al. HEART score (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
