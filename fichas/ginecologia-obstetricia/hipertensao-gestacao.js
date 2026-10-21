// Hipertensão na gestação e pré-eclâmpsia
registrarFicha({
  id: "hipertensao-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Hipertensão na gestação e pré-eclâmpsia",
  resumo: "PA ≥ 140/90 mmHg na gestação: hipertensão crônica, gestacional, pré-eclâmpsia (com ou sem sinais de gravidade), eclâmpsia e HELLP. Inclui prevenção na UBS (AAS e cálcio) e manejo no PS (anti-hipertensivo e sulfato de magnésio).",
  palavrasChave: "pre eclampsia preeclampsia eclampsia hellp hipertensao gestacional hipertensao cronica gestante dheg toxemia sulfato de magnesio zuspan pritchard hidralazina nifedipina metildopa aas aspirina calcio proteinuria crise hipertensiva iminencia de eclampsia",
  critico: {
    tempo: "PA ≥ 160/110: tratar em 30–60 min",
    texto: "Crise hipertensiva (PA ≥ 160 e/ou ≥ 110 confirmada em 15 min): nifedipina VO ou hidralazina EV + sulfato de magnésio se pré-eclâmpsia suspeita ou confirmada. Eclâmpsia: proteger via aérea, decúbito lateral esquerdo e MgSO₄ 4 g EV."
  },
  alarmes: [
    "PA ≥ 160/110 mmHg",
    "Cefaleia intensa, escotomas, visão turva, fotofobia",
    "Dor epigástrica ou em hipocôndrio direito, náuseas e vômitos após 20 semanas",
    "Convulsão (eclâmpsia) ou rebaixamento de consciência",
    "Dispneia, SpO₂ < 95%, estertores (edema agudo de pulmão)",
    "Oligúria (< 25–30 mL/h), plaquetas < 100.000, transaminases ≥ 2× o normal, creatinina > 1,1 mg/dL",
    "Sangramento vaginal com dor e útero endurecido (descolamento de placenta)",
    "Diminuição de movimentos fetais"
  ],
  condutaInicial: [
    "Confirmar PA com técnica correta (sentada, manguito adequado, 2 medidas)",
    "PA ≥ 140/90 após 20 semanas na UBS: pesquisar sintomas, proteinúria (fita ou P/C) e encaminhar à maternidade no mesmo dia para avaliação laboratorial e fetal",
    "PA ≥ 160/110 ou sintomas: anti-hipertensivo de ação rápida + MgSO₄ e transferência para maternidade",
    "Eclâmpsia: decúbito lateral, aspirar, O₂, acesso venoso, MgSO₄ ataque; não usar diazepam como 1ª escolha",
    "Exames: hemograma/plaquetas, creatinina, AST/ALT, LDH, bilirrubinas, relação proteína/creatinina urinária",
    "Avaliar vitalidade fetal (BCF, cardiotocografia, USG com Doppler)",
    "< 34 semanas com indicação de parto próximo: corticoide para maturação pulmonar"
  ],
  fataisExcluir: [
    "Eclâmpsia",
    "Síndrome HELLP / hematoma ou rotura hepática",
    "AVC hemorrágico (PA sistólica ≥ 160 é o principal fator)",
    "Edema agudo de pulmão",
    "Descolamento prematuro de placenta",
    "Intoxicação por magnésio (depressão respiratória)"
  ],
  proximaDecisao: "Pré-eclâmpsia com sinais de gravidade: estabilizar (PA, MgSO₄) e indicar parto se ≥ 34 semanas; < 34 semanas em centro terciário com corticoide e vigilância. Pré-eclâmpsia sem sinais de gravidade e hipertensão gestacional: seguimento hospitalar/ambulatorial rigoroso e parto com 37 semanas. Hipertensão crônica: PNAR, meta < 140/90.",
  clinica: {
    anamnese: [
      "IG, HAS prévia, pré-eclâmpsia em gestação anterior, DM, doença renal, lúpus/SAF",
      "Cefaleia, alterações visuais, dor epigástrica, náuseas, dispneia, edema súbito",
      "Movimentos fetais, sangramento, perda de líquido, contrações",
      "Medicações em uso (iECA/BRA devem ser trocados)",
      "Uso de AAS e cálcio no pré-natal"
    ],
    exameFisico: [
      "PA nos dois braços, FC, FR, SpO₂, diurese",
      "Nível de consciência, reflexos patelares (clônus sugere iminência de eclâmpsia)",
      "Ausculta pulmonar (estertores)",
      "Palpação do hipocôndrio direito/epigástrio",
      "Edema (face e mãos), petéquias",
      "Altura uterina, tônus uterino, BCF"
    ],
    diferenciais: [
      { dx: "Hipertensão crônica", pista: "PA ≥ 140/90 antes de 20 semanas ou antes da gestação" },
      { dx: "Hipertensão gestacional", pista: "PA ≥ 140/90 após 20 semanas, sem proteinúria nem lesão de órgão-alvo" },
      { dx: "Pré-eclâmpsia sobreposta", pista: "HAS crônica com proteinúria nova, piora súbita da PA ou lesão de órgão-alvo" },
      { dx: "Esteatose hepática aguda da gestação", pista: "Hipoglicemia, coagulopatia, IRA, transaminases altas" },
      { dx: "PTT / SHU", pista: "Plaquetopenia e hemólise desproporcionais, alteração neurológica ou renal predominante" },
      { dx: "Epilepsia, AVC, trombose venosa cerebral", pista: "Convulsão sem hipertensão, déficit focal: neuroimagem" }
    ],
    gravidade: [
      "Pré-eclâmpsia: PA ≥ 140/90 após 20 semanas + proteinúria (≥ 300 mg/24 h ou P/C ≥ 0,3) OU lesão de órgão-alvo (mesmo sem proteinúria)",
      "Sinais de gravidade: PA ≥ 160/110; cefaleia/alteração visual persistente; dor epigástrica/HCD; plaquetas < 100.000; transaminases ≥ 2× o normal; creatinina > 1,1 mg/dL ou dobro do basal; edema pulmonar",
      "HELLP: hemólise (LDH ≥ 600 U/L, bilirrubina ≥ 1,2 mg/dL, esquizócitos), AST/ALT ≥ 70 U/L, plaquetas < 100.000",
      "Iminência de eclâmpsia: cefaleia, escotomas, epigastralgia, hiper-reflexia — tratar como eclâmpsia (MgSO₄)"
    ]
  },
  exames: [
    {
      nome: "Proteinúria",
      pedido: "Relação proteína/creatinina em amostra isolada de urina. (Na indisponibilidade: proteinúria de 24 h ou fita urinária.)",
      porQue: "Diagnóstico de pré-eclâmpsia.",
      esperar: "P/C < 0,3 normal.",
      interpretacao: "P/C ≥ 0,3 ou proteinúria ≥ 300 mg/24 h = proteinúria significativa. Fita ≥ 2+ sugere (ISSHP/ACOG); 1+ deve ser confirmada.",
      limitacoes: "Quantidade de proteinúria não define gravidade nem conduta."
    },
    {
      nome: "Laboratório de lesão de órgão-alvo e HELLP",
      pedido: "Hemograma com plaquetas. Creatinina, ureia. AST (TGO), ALT (TGP). LDH. Bilirrubinas totais e frações. Ácido úrico. Pesquisa de esquizócitos. Coagulograma se plaquetas < 100.000.",
      porQue: "Classificar gravidade e diagnosticar HELLP.",
      esperar: "Normais na pré-eclâmpsia sem gravidade.",
      interpretacao: "Ver critérios de gravidade/HELLP. Repetir 1–2×/semana no seguimento ou a cada 6–24 h se grave.",
      limitacoes: "Ácido úrico isolado não diagnostica nem indica parto."
    },
    {
      nome: "Avaliação fetal",
      pedido: "Ultrassonografia obstétrica com biometria, líquido amniótico e Doppler de artérias umbilicais. Cardiotocografia (≥ 28–30 semanas).",
      porQue: "Restrição de crescimento e sofrimento fetal são comuns.",
      esperar: "—",
      interpretacao: "Doppler alterado ou CTG não tranquilizadora → discutir resolução.",
      limitacoes: "—"
    },
    {
      nome: "Na UBS (gestante com PA ≥ 140/90)",
      pedido: "Teste rápido de proteinúria (fita) na consulta. Encaminhamento à maternidade de referência para avaliação de pré-eclâmpsia.",
      porQue: "Triagem rápida; a investigação completa é feita no hospital.",
      esperar: "—",
      interpretacao: "Fita positiva ou sintomas com PA alta → maternidade no mesmo dia.",
      limitacoes: "Fita negativa não exclui pré-eclâmpsia."
    }
  ],
  tratamento: [
    {
      droga: "Nifedipina de liberação imediata (crise hipertensiva)",
      linha: "l1",
      dose: "10 mg",
      via: "VO (engolir; não usar sublingual nem mastigar)",
      intervalo: "Repetir 10 mg a cada 20–30 min se PA ≥ 160/110",
      duracao: "Máximo de 30 mg na crise",
      monitorizacao: "PA a cada 5–10 min na 1ª hora; BCF",
      contraindicacoes: "Hipotensão; cautela com MgSO₄ (hipotensão rara)",
      ajustes: "Meta: PAS 140–150 e PAD 90–100. Evitar queda brusca (sofrimento fetal)"
    },
    {
      droga: "Hidralazina (crise hipertensiva)",
      linha: "l1",
      dose: "5 mg",
      via: "IV lento (1–2 min)",
      intervalo: "Repetir a cada 20 min se PA ≥ 160/110",
      duracao: "Dose máxima 20–30 mg conforme protocolo; se não controlar, outro fármaco",
      monitorizacao: "PA a cada 5 min; BCF; taquicardia, cefaleia",
      contraindicacoes: "Taquicardia importante",
      ajustes: "Diluição: ampola 20 mg/mL (1 mL) + 19 mL de água destilada = 1 mg/mL; aplicar 5 mL (5 mg)"
    },
    {
      droga: "Sulfato de magnésio 50% — esquema de Zuspan (EV)",
      linha: "l1",
      dose: "Ataque 4 g EV em 15–20 min; manutenção 1 g/h (até 2 g/h) em bomba de infusão",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "24 h após o parto, a última convulsão ou a dose de ataque (o que vier por último)",
      monitorizacao: "Antes de cada hora: reflexo patelar presente, FR ≥ 12–16 irpm, diurese ≥ 25 mL/h. Magnesemia se IRA",
      contraindicacoes: "Miastenia gravis; bloqueio AV",
      ajustes: "Ataque: MgSO₄ 50% 8 mL (4 g) + 12 mL de água destilada, em 15–20 min. Manutenção: MgSO₄ 50% 10 mL (5 g) + SF 0,9% 490 mL a 100 mL/h (1 g/h). Creatinina ≥ 1,2: manter só ataque ou reduzir manutenção à metade. Nova convulsão: 2 g EV em 5–10 min"
    },
    {
      droga: "Sulfato de magnésio 50% — esquema de Pritchard (IM)",
      linha: "alt",
      dose: "Ataque 4 g EV + 10 g IM (5 g em cada glúteo); manutenção 5 g IM",
      via: "IV + IM profunda",
      intervalo: "Manutenção de 4/4 h, alternando glúteos",
      duracao: "24 h após o parto/última convulsão",
      monitorizacao: "Mesma do Zuspan antes de cada dose",
      contraindicacoes: "Coagulopatia/plaquetopenia grave (via IM)",
      ajustes: "Útil sem bomba de infusão e para transporte. Cada 5 g = 10 mL de MgSO₄ 50%"
    },
    {
      droga: "Gluconato de cálcio 10% (antídoto do magnésio)",
      linha: "adj",
      dose: "1 g (10 mL)",
      via: "IV lento em 3–5 min",
      intervalo: "Dose única, repetir se necessário",
      duracao: "—",
      monitorizacao: "FR, reflexos, ECG",
      contraindicacoes: "—",
      ajustes: "Usar se FR < 12, arreflexia com depressão respiratória ou parada; suspender o MgSO₄ e ventilar"
    },
    {
      droga: "Metildopa (manutenção oral)",
      linha: "l1",
      dose: "250 mg 2–3×/dia, até 2 g/dia",
      via: "VO",
      intervalo: "8/8 h a 12/12 h",
      duracao: "Até o parto (no puerpério trocar por outra classe se depressão)",
      monitorizacao: "Sonolência, depressão, hepatite, anemia hemolítica",
      contraindicacoes: "Hepatopatia ativa, depressão grave",
      ajustes: "Meta ambulatorial: PA < 140/90 (estudo CHAP)"
    },
    {
      droga: "Nifedipina de liberação prolongada (retard) ou anlodipino (manutenção oral)",
      linha: "l1",
      dose: "Nifedipina retard 20 mg 1–2×/dia, até 60–120 mg/dia · Anlodipino 5–10 mg/dia",
      via: "VO",
      intervalo: "12/12 h (nifedipina) · 24/24 h (anlodipino)",
      duracao: "Até o parto e no puerpério",
      monitorizacao: "Cefaleia, edema, taquicardia",
      contraindicacoes: "—",
      ajustes: "Pode ser usado na amamentação"
    },
    {
      droga: "Betametasona (maturação pulmonar fetal)",
      linha: "adj",
      dose: "12 mg",
      via: "IM",
      intervalo: "24/24 h, 2 doses",
      duracao: "1 ciclo",
      monitorizacao: "Glicemia materna",
      contraindicacoes: "—",
      ajustes: "Entre 24 e 34 semanas com risco de parto em 7 dias (decisão obstétrica). Alternativa: dexametasona 6 mg IM 12/12 h, 4 doses"
    },
    {
      droga: "AAS (prevenção)",
      linha: "l1",
      dose: "100 mg (alguns protocolos 150 mg)",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "De 12 (até 16) semanas até 36 semanas; suspender se pré-eclâmpsia instalada",
      monitorizacao: "Sangramento",
      contraindicacoes: "Alergia, sangramento ativo, úlcera ativa",
      ajustes: "Indicado se ≥ 1 fator de alto risco ou ≥ 2 fatores moderados (tabela)"
    },
    {
      droga: "Carbonato de cálcio (prevenção)",
      linha: "l1",
      dose: "1.000 mg de cálcio elementar/dia (1.250 mg de carbonato 2×/dia)",
      via: "VO",
      intervalo: "12/12 h, 2 h longe do ferro",
      duracao: "12 semanas até o parto",
      monitorizacao: "—",
      contraindicacoes: "Hipercalcemia",
      ajustes: "Universal no SUS desde 2024 (NT MS 251/2024)"
    },
    {
      droga: "iECA, BRA, atenolol, diuréticos (na gestação)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "iECA/BRA: fetotoxicidade (oligoâmnio, IRA fetal). Atenolol: restrição de crescimento. Diurético: só no edema pulmonar",
      ajustes: "No puerpério, enalapril e captopril são seguros na amamentação"
    }
  ],
  destino: {
    agora: [
      "UBS: PA ≥ 140/90 após 20 semanas → maternidade no mesmo dia; PA ≥ 160/110 ou sintomas → nifedipina 10 mg VO + MgSO₄ (Pritchard IM se sem bomba) e transferência com acompanhamento",
      "PS: anti-hipertensivo, MgSO₄, exames, vitalidade fetal"
    ],
    reavaliar: [
      "PA a cada 15 min até controle, depois de 1/1 h",
      "Reflexos, FR e diurese de 1/1 h durante MgSO₄",
      "Exames a cada 6–24 h na forma grave; 1–2×/semana na forma sem gravidade"
    ],
    alta: [
      "Hipertensão gestacional ou PE sem gravidade, estável, exames normais, vitalidade fetal boa, com retorno em 3–7 dias e aferição de PA garantida",
      "Puerpério: PA aferida em 3–5 dias após a alta (a PE pode surgir ou piorar até 6 semanas pós-parto)"
    ],
    observacao: [
      "PA 140–159/90–109 sem sintomas: observação para exames e vitalidade antes de decidir alta ou internação"
    ],
    internacao: [
      "Pré-eclâmpsia com sinais de gravidade, HELLP, eclâmpsia",
      "PE sem gravidade sem condições de seguimento ambulatorial rigoroso",
      "Resolução da gestação: ≥ 34 semanas na forma grave; 37 semanas na forma sem gravidade e na hipertensão gestacional"
    ],
    transferencia: [
      "Maternidade de alto risco/UTI materna: eclâmpsia, HELLP, edema pulmonar, < 34 semanas com forma grave",
      "Transportar com MgSO₄ em curso, PA controlada, acesso venoso e médico acompanhando"
    ]
  },
  prescricao: {
    ambulatorial: "HIPERTENSÃO CRÔNICA OU GESTACIONAL ESTÁVEL (meta PA < 140/90)\nUSO ORAL\n1. Metildopa 250 mg ------------------------------ 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas (ajustar até 2 comprimidos de 8 em 8 horas).\n   OU Nifedipina retard 20 mg --------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas.\n   OU Anlodipino 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido ao dia (até 10 mg/dia).\n\nPREVENÇÃO DE PRÉ-ECLÂMPSIA\n2. Ácido acetilsalicílico 100 mg ---------------- 30 comprimidos\n   Tomar 1 comprimido à noite, de 12 a 36 semanas.\n3. Carbonato de cálcio 1.250 mg (500 mg de cálcio) - 60 comprimidos\n   Tomar 1 comprimido no café e 1 no jantar, a partir de 12 semanas até o parto (2 horas longe do ferro).\n\nPUERPÉRIO (amamentando)\n4. Enalapril 10 mg ------------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas (ou manter nifedipina/anlodipino).",
    hospitalar: "PRÉ-ECLÂMPSIA COM SINAIS DE GRAVIDADE / CRISE HIPERTENSIVA (peso: ___ kg; IG: ___ semanas)\n1. Dieta zero se parto iminente; senão, dieta geral.\n2. Decúbito lateral esquerdo; cabeceira 30°; grades elevadas; acesso venoso calibroso; sonda vesical de demora (diurese horária).\n3. Nifedipina 10 mg VO; repetir 10 mg a cada 20–30 min se PA ≥ 160/110 (máximo 30 mg).\n   OU Hidralazina 20 mg/mL: 1 ampola + 19 mL de água destilada (1 mg/mL); aplicar 5 mL (5 mg) IV em 1–2 min; repetir a cada 20 min se PA ≥ 160/110 (máximo 20–30 mg conforme protocolo).\n   Meta: PAS 140–150 e PAD 90–100.\n4. Sulfato de magnésio (Zuspan):\n   Ataque: MgSO₄ 50% 8 mL (4 g) + água destilada 12 mL IV em 15–20 min.\n   Manutenção: MgSO₄ 50% 10 mL (5 g) + SF 0,9% 490 mL IV em bomba a 100 mL/h (1 g/h), por 24 h após o parto ou a última convulsão.\n   Sem bomba (Pritchard): ataque 4 g IV + 10 g IM (MgSO₄ 50% 10 mL em cada glúteo); manutenção 5 g IM (10 mL) de 4/4 h alternando glúteos.\n5. Antes de cada hora de MgSO₄ checar: reflexo patelar presente, FR ≥ 12–16, diurese ≥ 25 mL/h. Se alterado: suspender e chamar o médico.\n6. Gluconato de cálcio 10% 10 mL à beira do leito: aplicar IV em 3–5 min se depressão respiratória.\n7. Hidratação restrita: SF 0,9% ou Ringer lactato 80–100 mL/h (risco de edema pulmonar).\n8. Betametasona 12 mg IM, repetir em 24 h, se 24–34 semanas e parto provável em 7 dias.\n9. Exames: hemograma, plaquetas, creatinina, AST, ALT, LDH, bilirrubinas, relação proteína/creatinina; repetir a cada 6–24 h.\n10. Controles: PA de 15/15 min até controle e depois de 1/1 h; FR, SpO₂, reflexos e diurese de 1/1 h; BCF/cardiotocografia conforme IG.\n11. Suspender AAS. Comunicar obstetra para decisão sobre o parto."
  },
  orientacoesRetorno: [
    "Medir a pressão conforme combinado (na UBS ou em casa) e anotar",
    "Ir à maternidade imediatamente se: dor de cabeça forte, visão embaçada ou pontos brilhantes, dor no estômago ou abaixo das costelas à direita, falta de ar, inchaço súbito no rosto e mãos, bebê mexendo menos, sangramento ou convulsão",
    "Não parar o remédio da pressão por conta própria",
    "Tomar AAS e cálcio todos os dias se prescritos",
    "Após o parto, a pré-eclâmpsia pode aparecer ou piorar por até 6 semanas: medir a pressão na 1ª semana e voltar se os sintomas acima surgirem",
    "Quem teve pré-eclâmpsia tem maior risco de hipertensão, diabetes e doença do coração: manter acompanhamento anual na UBS"
  ],
  tabelas: [
    {
      titulo: "Indicação de AAS para prevenção de pré-eclâmpsia",
      colunas: ["Risco", "Fatores", "Conduta"],
      linhas: [
        ["Alto (basta 1)", "Pré-eclâmpsia prévia; gestação múltipla; HAS crônica; DM 1 ou 2; doença renal; lúpus ou SAF", "AAS 100 mg/noite 12–36 sem"],
        ["Moderado (≥ 2)", "Nuliparidade; IMC > 30; história familiar de PE; idade ≥ 35 anos; intervalo > 10 anos; baixo nível socioeconômico; mulher negra; FIV; desfecho adverso em gestação prévia", "AAS 100 mg/noite 12–36 sem"],
        ["Todas as gestantes", "—", "Cálcio 1.000 mg/dia a partir de 12 semanas (SUS)"]
      ],
      nota: "Fatores: USPSTF/ACOG adotados pela RBEHG. AAS: RBEHG 2025 (100 mg à noite, 12–36 semanas)."
    },
    {
      titulo: "Sulfato de magnésio 50% (ampola 10 mL = 5 g)",
      colunas: ["Esquema", "Ataque", "Manutenção"],
      linhas: [
        ["Zuspan (EV)", "4 g EV em 15–20 min (8 mL + 12 mL AD)", "1 g/h EV (5 g em 500 mL a 100 mL/h)"],
        ["Pritchard (IM)", "4 g EV + 10 g IM (5 g em cada glúteo)", "5 g IM de 4/4 h"]
      ],
      nota: "Manter por 24 h após o parto ou a última convulsão. Antídoto: gluconato de cálcio 10% 10 mL IV."
    }
  ],
  fontes: [
    "RBEHG (Rede Brasileira de Estudos sobre Hipertensão na Gravidez) — Protocolo Pré-eclâmpsia (2025) e Hipertensão arterial crônica na gestação (2023)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Nota Técnica Conjunta nº 251/2024 (suplementação universal de cálcio)",
    "FEBRASGO — Protocolo: Pré-eclâmpsia nos seus diversos aspectos (2021)",
    "ACOG — Practice Bulletin nº 222: Gestational hypertension and preeclampsia (2020) e Clinical Practice Update (2022, estudo CHAP)",
    "ISSHP — The 2021 International Society for the Study of Hypertension in Pregnancy classification, diagnosis & management recommendations"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
