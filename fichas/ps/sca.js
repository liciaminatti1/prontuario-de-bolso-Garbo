// Dor torácica / Síndrome coronariana aguda
registrarFicha({
  id: "sca",
  caminho: "ps",
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
      ajustes: "Ticagrelor 180 mg → 90 mg 12/12h é alternativa em SCA sem trombólise"
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
  fontes: [
    "SBC — Diretrizes de Síndromes Coronarianas Agudas (SCA sem supra 2021; IAM com supra)",
    "ESC 2023 Guidelines for the management of acute coronary syndromes",
    "4ª Definição Universal de Infarto (2018)",
    "Backus BE et al. HEART score (2013)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
