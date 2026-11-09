/* Medicamentos: cardio-endocrino. Formato em js/medicamentos.js e docs/ESQUEMA-MEDICAMENTOS.md.
   Classes: anti-hipertensivos, diureticos, cardio, anticoagulantes, hipolipemiantes, antidiabeticos, tireoide.
   CONFERIR SEMPRE com a bula e o protocolo local. */
complementarMedicamentos({
  /* ---------- anticoagulantes e antiagregantes ---------- */
  aas: {
    receita: "simples",
    usos: "Prevenção secundária cardiovascular (DAC, AVC isquêmico, DAOP), SCA, prevenção de pré-eclâmpsia",
    prescrever: [
      { contexto: "Adulto — prevenção secundária (uso contínuo)", texto: "USO ORAL\n1. Ácido acetilsalicílico 100 mg ------------ 30 comprimidos\n   Tomar 1 comprimido por dia, após o almoço. Uso contínuo." },
      { contexto: "PS — suspeita de síndrome coronariana aguda", texto: "AAS 100 mg — 3 comprimidos (300 mg) VO, mastigados, agora (ataque).\nDepois 100 mg VO 1×/dia." },
      { contexto: "Gestante — prevenção de pré-eclâmpsia (alto risco)", texto: "USO ORAL\n1. Ácido acetilsalicílico 100 mg ------------ 30 comprimidos\n   Tomar 1 comprimido por dia, à noite.\n   (Iniciar entre 12 e 16 semanas, idealmente antes de 16; suspender com 36 semanas.)" }
    ]
  },
  enoxaparina: {
    receita: "simples",
    usos: "Profilaxia e tratamento de TEV, SCA, ponte de anticoagulação, anticoagulação na gestação",
    prescrever: [
      { contexto: "Hospitalar — profilaxia de TEV", texto: "Enoxaparina 40 mg SC 1×/dia.\n(ClCr < 30: 20 mg SC 1×/dia.)" },
      { contexto: "Hospitalar — tratamento de TVP/TEP", texto: "Enoxaparina ___ mg (1 mg/kg) SC de 12/12h.\n(ClCr < 30: 1 mg/kg SC 1×/dia. Arredondar para a seringa mais próxima.)" },
      { contexto: "Adulto — ambulatorial (tratamento, até iniciar/ajustar anticoagulante oral)", texto: "USO SUBCUTÂNEO\n1. Enoxaparina ___ mg (seringa preenchida) ---- ___ seringas\n   Aplicar 1 seringa via subcutânea, na barriga, de 12 em 12 horas por ___ dias.\n   (1 mg/kg por dose; ex.: 70 kg = seringa de 80 mg ou 60 mg conforme protocolo de arredondamento.)" }
    ]
  },
  varfarina: {
    receita: "simples",
    usos: "FA, TEV, prótese valvar mecânica (único anticoagulante oral indicado na prótese mecânica)",
    prescrever: [
      { contexto: "Adulto — início (ambulatorial)", texto: "USO ORAL\n1. Varfarina 5 mg ------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, sempre no mesmo horário (à tarde ou à noite).\n   Colher INR em 5 a 7 dias e trazer o resultado.\n   (Idoso, baixo peso, hepatopata: iniciar com 2,5 mg/dia. Manter heparina até INR no alvo por 2 dias seguidos no TEV.)" },
      { contexto: "Adulto — manutenção (dose semanal ajustada pelo INR)", texto: "USO ORAL\n1. Varfarina 5 mg ------------------------- ___ comprimidos\n   Tomar conforme a tabela: seg ___ · ter ___ · qua ___ · qui ___ · sex ___ · sáb ___ · dom ___ comprimido(s).\n   Não mudar a dose por conta própria. Avisar antes de iniciar qualquer remédio novo (antibióticos, anti-inflamatórios, chás).\n   Próximo INR em ___ semanas." }
    ]
  },
  rivaroxabana: {
    receita: "simples",
    usos: "FA não valvar, tratamento e prevenção de TVP/TEP",
    prescrever: [
      { contexto: "Adulto — FA não valvar", texto: "USO ORAL\n1. Rivaroxabana 20 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, junto com o jantar. Uso contínuo.\n   (ClCr 15–49: 15 mg 1×/dia.)" },
      { contexto: "Adulto — TVP/TEP (fase inicial + manutenção)", texto: "USO ORAL\n1. Rivaroxabana 15 mg ---------------------- 42 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento, por 21 dias.\n2. Rivaroxabana 20 mg ---------------------- 30 comprimidos\n   A partir do 22º dia, tomar 1 comprimido por dia, com alimento, por no mínimo 3 meses." }
    ]
  },
  apixabana: {
    receita: "simples",
    usos: "FA não valvar, tratamento e prevenção de TVP/TEP",
    prescrever: [
      { contexto: "Adulto — FA não valvar", texto: "USO ORAL\n1. Apixabana 5 mg -------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n   (2,5 mg 12/12h se ≥ 2 de: idade ≥ 80 anos, peso ≤ 60 kg, creatinina ≥ 1,5 mg/dL.)" },
      { contexto: "Adulto — TVP/TEP", texto: "USO ORAL\n1. Apixabana 5 mg -------------------------- 74 comprimidos\n   Tomar 2 comprimidos (10 mg) de 12 em 12 horas por 7 dias;\n   depois 1 comprimido (5 mg) de 12 em 12 horas por no mínimo 3 meses." }
    ]
  },
  clopidogrel: {
    receita: "simples",
    usos: "SCA e pós-angioplastia (com AAS), AVC/AIT, DAOP, alternativa ao AAS em intolerantes",
    prescrever: [
      { contexto: "Adulto — uso contínuo", texto: "USO ORAL\n1. Clopidogrel 75 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido por dia. Não suspender sem falar com o cardiologista." },
      { contexto: "PS — SCA (ataque)", texto: "Clopidogrel 75 mg — 4 comprimidos (300 mg) VO agora (600 mg se angioplastia primária; 75 mg sem ataque se > 75 anos com trombolítico).\nDepois 75 mg VO 1×/dia." }
    ]
  },

  /* ---------- anti-hipertensivos (o item "iecabra" é o enalapril) ---------- */
  iecabra: {
    receita: "simples",
    usos: "Enalapril: HAS, insuficiência cardíaca de FE reduzida, pós-IAM, nefropatia diabética/proteinúria",
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Enalapril 10 mg ------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n   (Dose habitual 10–40 mg/dia em 1 ou 2 tomadas. Dosar creatinina e potássio em 1–2 semanas.)" },
      { contexto: "Adulto — insuficiência cardíaca (titulação)", texto: "USO ORAL\n1. Enalapril 5 mg -------------------------- 60 comprimidos\n   Tomar meio comprimido (2,5 mg) de 12 em 12 horas.\n   (Dobrar a cada 1–2 semanas, se PA, K e creatinina permitirem, até 10–20 mg 12/12h.)" }
    ]
  },

  /* ---------- diuréticos ---------- */
  espironolactona: {
    receita: "simples",
    usos: "IC de FE reduzida, HAS resistente, ascite da cirrose, hiperaldosteronismo; hirsutismo/acne (fora de bula)",
    prescrever: [
      { contexto: "Adulto — IC de FE reduzida / HAS resistente", texto: "USO ORAL\n1. Espironolactona 25 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã. Uso contínuo.\n   (Dosar potássio e creatinina em 1 semana e em 4 semanas.)" },
      { contexto: "Adulto — ascite da cirrose (com furosemida, proporção 100:40)", texto: "USO ORAL\n1. Espironolactona 100 mg ----------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã.\n2. Furosemida 40 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã.\n   (Aumentar juntas a cada 3–5 dias se necessário, até 400 mg + 160 mg/dia. Controle de peso, Na, K e creatinina.)" }
    ]
  },
  furosemida: {
    receita: "simples",
    usos: "Congestão da IC, edema agudo de pulmão, edema renal/hepático, hipercalemia (adjuvante), HAS com DRC avançada",
    prescrever: [
      { contexto: "Adulto — ambulatorial (edema/IC)", texto: "USO ORAL\n1. Furosemida 40 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã.\n   (Pesar-se diariamente. Dosar potássio e creatinina em 1–2 semanas.)" },
      { contexto: "PS — edema agudo de pulmão / IC descompensada", texto: "Furosemida 10 mg/mL (ampola 2 mL = 20 mg) — 40 mg (4 mL) IV em bolus lento, agora.\n(Se já usava furosemida oral: dose IV de 1 a 2,5 vezes a dose oral diária.)\nReavaliar diurese em 2 h; sonda vesical se necessário. Dosar K e creatinina." }
    ]
  },
  hidroclorotiazida: {
    receita: "simples",
    usos: "HAS (1ª linha), edema leve, hipercalciúria/litíase cálcica",
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Hidroclorotiazida 25 mg ----------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã. Uso contínuo.\n   (Iniciar com meio comprimido — 12,5 mg — em idosos. Dosar Na, K, glicemia e ácido úrico.)" }
    ]
  },

  /* ---------- cardio ---------- */
  amiodarona: {
    receita: "simples",
    usos: "FV/TV sem pulso, TV com pulso estável, FA (controle de ritmo e de FC na IC), prevenção de arritmias",
    prescrever: [
      { contexto: "PCR — FV/TV sem pulso (após 3º choque)", texto: "Amiodarona 50 mg/mL — 300 mg (6 mL) IV/IO em bolus.\n2ª dose, se persistir: 150 mg (3 mL) IV/IO em bolus.\n(Criança: 5 mg/kg IV/IO em bolus, máx 300 mg; pode repetir até 15 mg/kg.)" },
      { contexto: "Hospitalar — FA/taquiarritmia estável", texto: "Ataque: Amiodarona 150 mg (3 mL) + SG 5% 100 mL IV em 10–30 min.\nManutenção: Amiodarona 900 mg (18 mL) + SG 5% 500 mL IV em 24 h\n(1 mg/min nas primeiras 6 h e 0,5 mg/min nas 18 h seguintes).\nDiluir sempre em SG 5%; acesso calibroso ou central se > 2 h; monitorar PA, FC e QT." },
      { contexto: "Adulto — oral (impregnação + manutenção)", texto: "USO ORAL\n1. Amiodarona 200 mg ---------------------- ___ comprimidos\n   Tomar 1 comprimido de 8 em 8 horas por 1 a 2 semanas;\n   depois 1 comprimido por dia. Uso contínuo.\n   (TSH, função hepática e ECG antes e a cada 6 meses; RX de tórax anual.)" }
    ]
  },
  digoxina: {
    receita: "simples",
    usos: "Controle de FC na FA (sobretudo com IC), IC de FE reduzida sintomática apesar do tratamento otimizado",
    prescrever: [
      { contexto: "Adulto — uso contínuo", texto: "USO ORAL\n1. Digoxina 0,25 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido por dia. Uso contínuo.\n   (Idoso, baixo peso ou ClCr < 60: meio comprimido — 0,125 mg — por dia. Manter K normal.)" },
      { contexto: "PS — FA de alta resposta com IC (deslanosídeo)", texto: "Deslanosídeo 0,2 mg/mL (ampola 2 mL) — 0,4 mg (1 ampola) IV lento, agora.\nReavaliar FC; conferir dose total máxima na bula e dosar K antes de repetir." }
    ]
  },
  nitrato: {
    receita: "simples",
    usos: "Angina (crise), SCA, edema agudo de pulmão hipertensivo, emergência hipertensiva com isquemia",
    prescrever: [
      { contexto: "Adulto — angina (crise), para ter em casa", texto: "USO SUBLINGUAL\n1. Dinitrato de isossorbida 5 mg ----------- 1 caixa\n   Se dor no peito: colocar 1 comprimido debaixo da língua, sentado.\n   Pode repetir a cada 5 minutos, até 3 comprimidos. Se a dor não passar, procurar a emergência (SAMU 192).\n   Não usar se tomou sildenafil nas últimas 24 h ou tadalafila nas últimas 48 h." },
      { contexto: "PS — SCA / EAP (sublingual)", texto: "Dinitrato de isossorbida 5 mg SL, agora; repetir a cada 5 min se dor persistir (máx 3 doses), se PAS ≥ 90 e sem suspeita de IAM de VD." },
      { contexto: "Hospitalar — nitroglicerina IV contínua", texto: "Nitroglicerina 5 mg/mL — 50 mg (10 mL) + SG 5% 240 mL (200 mcg/mL) em bomba de infusão.\nIniciar 5–10 mcg/min (1,5–3 mL/h); aumentar 5–10 mcg/min a cada 3–5 min conforme dor/PA, até 200 mcg/min.\nSuspender se PAS < 90. Frasco de vidro e equipo próprio." }
    ]
  },

  /* ---------- hipolipemiantes ---------- */
  sinvastatina: {
    receita: "simples",
    usos: "Dislipidemia, prevenção cardiovascular (moderada intensidade)",
    prescrever: [
      { contexto: "Adulto — uso contínuo", texto: "USO ORAL\n1. Sinvastatina 40 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, à noite. Uso contínuo.\n   (Com amiodarona ou anlodipino: máximo 20 mg/dia. Perfil lipídico em 4–12 semanas.)" }
    ]
  },
  atorvastatina: {
    receita: "simples",
    usos: "Dislipidemia, prevenção cardiovascular; alta intensidade (40–80 mg) após SCA/AVC e em muito alto risco",
    prescrever: [
      { contexto: "Adulto — alta intensidade", texto: "USO ORAL\n1. Atorvastatina 40 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, em qualquer horário. Uso contínuo.\n   (Pode chegar a 80 mg/dia. Perfil lipídico em 4–12 semanas.)" },
      { contexto: "Adulto — moderada intensidade", texto: "USO ORAL\n1. Atorvastatina 20 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido por dia. Uso contínuo." },
      { contexto: "Hospitalar — SCA", texto: "Atorvastatina 80 mg VO 1×/dia, iniciar na admissão." }
    ]
  },
  rosuvastatina: {
    receita: "simples",
    usos: "Dislipidemia, prevenção cardiovascular; alta intensidade com 20–40 mg",
    prescrever: [
      { contexto: "Adulto — alta intensidade", texto: "USO ORAL\n1. Rosuvastatina 20 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, em qualquer horário. Uso contínuo.\n   (ClCr < 30: máximo 10 mg/dia. Asiáticos: iniciar com 5 mg.)" },
      { contexto: "Adulto — moderada intensidade", texto: "USO ORAL\n1. Rosuvastatina 10 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido por dia. Uso contínuo." }
    ]
  },

  /* ---------- antidiabéticos ---------- */
  metformina: {
    receita: "simples",
    usos: "DM2 (1ª escolha), pré-diabetes de alto risco, SOP com resistência insulínica, DMG (2ª linha)",
    prescrever: [
      { contexto: "Adulto — início (titulação)", texto: "USO ORAL\n1. Metformina 500 mg ---------------------- 60 comprimidos\n   Tomar 1 comprimido após o jantar na 1ª semana;\n   depois 1 comprimido após o café e 1 após o jantar.\n   (Aumentar 500 mg por semana conforme tolerância, até 2 g/dia.)" },
      { contexto: "Adulto — manutenção", texto: "USO ORAL\n1. Metformina 850 mg ---------------------- 60 comprimidos\n   Tomar 1 comprimido após o café da manhã e 1 após o jantar. Uso contínuo.\n   (Se intolerância gastrointestinal: metformina XR 500 mg, 1 a 4 comprimidos juntos após o jantar.)" }
    ]
  },
  sulfonilureia: {
    receita: "simples",
    usos: "Glibenclamida: DM2 (associada ou em monoterapia quando metformina não é possível)",
    prescrever: [
      { contexto: "Adulto — glibenclamida", texto: "USO ORAL\n1. Glibenclamida 5 mg --------------------- 30 comprimidos\n   Tomar 1 comprimido antes do café da manhã. Uso contínuo.\n   (Iniciar com 2,5 mg em idosos; máximo 20 mg/dia em 2 tomadas. Orientar sinais de hipoglicemia e não pular refeições.\n   Em idosos e na DRC preferir gliclazida.)" }
    ]
  },

  /* ---------- tireoide ---------- */
  levotiroxina: {
    receita: "simples",
    usos: "Hipotireoidismo, reposição após tireoidectomia/iodo, supressão de TSH no câncer de tireoide",
    prescrever: [
      { contexto: "Adulto — hipotireoidismo", texto: "USO ORAL\n1. Levotiroxina ___ mcg -------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, em jejum, com água, 30 a 60 minutos antes do café da manhã.\n   Não tomar junto com cálcio, ferro ou antiácidos (intervalo de 4 horas).\n   (1,6 mcg/kg/dia; idoso ou cardiopata: iniciar 12,5–25 mcg. Repetir TSH em 6–8 semanas.)" }
    ]
  }
});

adicionarMedicamentos([
  /* ---------- anti-hipertensivos ---------- */
  { id: "captopril", nomes: ["Captopril"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, urgência hipertensiva (VO), IC de FE reduzida, pós-IAM",
    adulto: "HAS: 25–50 mg 2–3×/dia (máx 150 mg/dia) · IC: iniciar 6,25 mg 8/8h, alvo 50 mg 8/8h · urgência: 25 mg VO",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }],
    renal: [{ abaixo: 30, texto: "Iniciar com 6,25–12,5 mg e titular devagar; monitorar K e creatinina." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação (fetotoxicidade no 2º e 3º trimestres). Compatível na lactação." },
    alergia: [], contra: ["Angioedema prévio por IECA", "Estenose bilateral de artéria renal", "K > 5,5", "Associação com BRA ou sacubitril-valsartana (intervalo de 36 h)"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Captopril 25 mg ------------------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, 1 hora antes das refeições. Uso contínuo." },
      { contexto: "PS — urgência hipertensiva (sem lesão de órgão-alvo)", texto: "Captopril 25 mg VO, agora (engolir; não há vantagem sublingual).\nReavaliar PA em 1 h; pode repetir 25 mg. Objetivo: reduzir a PA gradualmente em 24–48 h." },
      { contexto: "Adulto — IC (titulação)", texto: "USO ORAL\n1. Captopril 12,5 mg ----------------------- 90 comprimidos\n   Tomar meio comprimido (6,25 mg) de 8 em 8 horas.\n   (Dobrar a cada 1–2 semanas conforme PA, K e creatinina, até 50 mg 8/8h.)" }
    ] },
  { id: "losartana", nomes: ["Losartana", "losartan"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, IC (intolerância a IECA), nefropatia diabética/proteinúria, HVE",
    adulto: "50–100 mg/dia em 1–2 tomadas (iniciar 25 mg em idoso/hipovolêmico ou IC)",
    apres: [{ rotulo: "comprimido 50 mg", mgPorComp: 50 }],
    renal: [{ abaixo: 30, texto: "Sem ajuste de dose, mas iniciar baixo e monitorar K e creatinina em 1–2 semanas." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação (fetotoxicidade no 2º e 3º trimestres)." },
    alergia: [], contra: ["K > 5,5", "Estenose bilateral de artéria renal", "Associação com IECA (duplo bloqueio)"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Losartana 50 mg ------------------------ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n   (Dosar creatinina e potássio em 1–2 semanas.)" }
    ] },
  { id: "anlodipino", nomes: ["Anlodipino", "amlodipina", "besilato de anlodipino"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS, angina estável",
    adulto: "5–10 mg VO 1×/dia (idoso: iniciar 2,5 mg)",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; na gestação preferir nifedipino ou metildopa." },
    alergia: [], contra: ["Choque cardiogênico", "Estenose aórtica grave", "Edema de membros inferiores (dose-dependente)", "Com sinvastatina: máximo 20 mg de sinvastatina"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Anlodipino 5 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido por dia. Uso contínuo.\n   (Pode aumentar para 10 mg/dia.)" }
    ] },
  { id: "nifedipino", nomes: ["Nifedipino", "nifedipina", "nifedipino retard"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS (retard), hipertensão na gestação, crise hipertensiva grave na gestante (liberação imediata)",
    adulto: "Retard: 20 mg 12/12h (até 60 mg 12/12h) · gestante com PA ≥ 160/110: 10 mg VO (liberação imediata), repetir a cada 20–30 min, máx 30 mg",
    apres: [{ rotulo: "comprimido retard 20 mg", mgPorComp: 20 }, { rotulo: "cápsula/comprimido 10 mg (liberação imediata)", mgPorComp: 10 }],
    renal: [],
    gestacao: { nivel: "compativel", texto: "Uma das primeiras escolhas na hipertensão da gestação (manutenção e crise). Cuidado com sulfato de magnésio (hipotensão)." },
    alergia: [], contra: ["Liberação imediata/sublingual fora da gestação (queda brusca de PA, isquemia)", "Choque cardiogênico", "SCA nas primeiras horas"],
    prescrever: [
      { contexto: "Adulto / gestante — HAS (retard)", texto: "USO ORAL\n1. Nifedipino retard 20 mg ---------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Não partir nem mastigar. Uso contínuo." },
      { contexto: "Gestante — PA ≥ 160/110 (crise hipertensiva)", texto: "Nifedipino 10 mg VO (liberação imediata), engolir; não usar sublingual.\nRepetir 10 mg a cada 20–30 min se PA ≥ 160/110, até 30 mg.\nAssociar sulfato de magnésio se pré-eclâmpsia grave; monitorar PA e vitalidade fetal." }
    ] },
  { id: "atenolol", nomes: ["Atenolol"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS (não 1ª linha isolado), angina, controle de FC na FA, taquicardia",
    adulto: "25–100 mg VO 1×/dia",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    renal: [{ abaixo: 15, texto: "Máximo 25 mg/dia." }, { abaixo: 35, texto: "Máximo 50 mg/dia." }],
    gestacao: { nivel: "evitar", texto: "Associado a restrição de crescimento fetal; preferir metildopa, nifedipino ou labetalol." },
    alergia: [], contra: ["Asma", "Bradicardia, BAV 2º/3º grau", "IC descompensada", "Não suspender abruptamente (rebote/angina)"],
    prescrever: [
      { contexto: "Adulto — uso contínuo", texto: "USO ORAL\n1. Atenolol 50 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia. Uso contínuo. Não parar de repente." }
    ] },
  { id: "propranolol", nomes: ["Propranolol"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS, profilaxia de enxaqueca, tremor essencial, sintomas adrenérgicos do hipertireoidismo, profilaxia de sangramento varicoso, ansiedade de desempenho",
    adulto: "HAS: 40–80 mg 2×/dia · enxaqueca: 40–160 mg/dia · hipertireoidismo: 20–40 mg 6/6–8/8h · varizes esofágicas: 20–40 mg 12/12h, titular até FC 55–60",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 40 mg", mgPorComp: 40 }, { rotulo: "comprimido 80 mg", mgPorComp: 80 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usado com indicação; risco de restrição de crescimento e bradicardia/hipoglicemia neonatal." },
    alergia: [], contra: ["Asma/DPOC com broncoespasmo (betabloqueador não seletivo)", "Bradicardia, BAV 2º/3º grau", "IC descompensada", "Mascara hipoglicemia em diabéticos", "Não suspender abruptamente"],
    prescrever: [
      { contexto: "Adulto — HAS / tremor / hipertireoidismo", texto: "USO ORAL\n1. Propranolol 40 mg ----------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Não parar de repente." },
      { contexto: "Adulto — profilaxia de enxaqueca", texto: "USO ORAL\n1. Propranolol 40 mg ----------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por no mínimo 3 meses.\n   (Pode iniciar com 20 mg 12/12h; até 160 mg/dia.)" }
    ] },
  { id: "carvedilol", nomes: ["Carvedilol"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "IC de FE reduzida, HAS, pós-IAM, profilaxia de sangramento varicoso",
    adulto: "IC: 3,125 mg 12/12h, dobrar a cada 2 semanas até 25 mg 12/12h (50 mg 12/12h se > 85 kg) · HAS: 12,5–25 mg 12/12h",
    apres: [{ rotulo: "comprimido 3,125 mg", mgPorComp: 3.125 }, { rotulo: "comprimido 6,25 mg", mgPorComp: 6.25 }, { rotulo: "comprimido 12,5 mg", mgPorComp: 12.5 }, { rotulo: "comprimido 25 mg", mgPorComp: 25 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se indicação clara (ex.: cardiopatia)." },
    alergia: [], contra: ["Asma", "Bradicardia, BAV 2º/3º grau", "IC descompensada/congesta (não iniciar)", "Hepatopatia grave"],
    prescrever: [
      { contexto: "Adulto — IC (início)", texto: "USO ORAL\n1. Carvedilol 3,125 mg --------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento.\n   (Dobrar a cada 2 semanas se FC > 60 e sem hipotensão/congestão, até 25 mg 12/12h.)" },
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Carvedilol 12,5 mg ---------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento. Uso contínuo." }
    ] },
  { id: "metoprolol", nomes: ["Metoprolol", "succinato de metoprolol", "tartarato de metoprolol"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "IC de FE reduzida (succinato), HAS, angina, controle de FC na FA, SCA",
    adulto: "Succinato: IC 12,5–25 mg 1×/dia até 200 mg/dia · HAS 50–100 mg 1×/dia (máx 200) · tartarato IV: 5 mg em 2–5 min, até 3 doses",
    apres: [{ rotulo: "succinato 25 mg (liberação prolongada)", mgPorComp: 25 }, { rotulo: "succinato 50 mg", mgPorComp: 50 }, { rotulo: "succinato 100 mg", mgPorComp: 100 }, { rotulo: "tartarato injetável 1 mg/mL (5 mL)", mgPorMl: 1 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usado com indicação; monitorar crescimento fetal." },
    alergia: [], contra: ["Bradicardia, BAV 2º/3º grau", "IC descompensada/choque", "Asma grave", "Não suspender abruptamente"],
    prescrever: [
      { contexto: "Adulto — IC (início)", texto: "USO ORAL\n1. Succinato de metoprolol 25 mg ----------- 30 comprimidos\n   Tomar 1 comprimido por dia. Não partir ao meio nem mastigar.\n   (Dobrar a cada 2 semanas conforme FC e PA, até 200 mg/dia.)" },
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Succinato de metoprolol 50 mg ----------- 30 comprimidos\n   Tomar 1 comprimido por dia. Uso contínuo." },
      { contexto: "PS — FA de alta resposta / SCA sem IC", texto: "Tartarato de metoprolol 1 mg/mL — 5 mg (5 mL) IV lento em 2–5 min.\nRepetir a cada 5 min se necessário, até 15 mg, se PAS > 100 e FC > 60.\nContraindicado se IC/congestão, choque ou BAV." }
    ] },
  { id: "bisoprolol", nomes: ["Bisoprolol"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "IC de FE reduzida, HAS, controle de FC na FA",
    adulto: "IC: 1,25 mg 1×/dia, dobrar a cada 2 semanas até 10 mg/dia · HAS: 2,5–10 mg 1×/dia",
    apres: [{ rotulo: "comprimido 1,25 mg", mgPorComp: 1.25 }, { rotulo: "comprimido 2,5 mg", mgPorComp: 2.5 }, { rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    renal: [{ abaixo: 20, texto: "Máximo 10 mg/dia." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se indicação clara." },
    alergia: [], contra: ["Bradicardia, BAV 2º/3º grau", "IC descompensada", "Asma grave", "Não suspender abruptamente"],
    prescrever: [
      { contexto: "Adulto — IC (início)", texto: "USO ORAL\n1. Bisoprolol 1,25 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido por dia.\n   (Dobrar a cada 2 semanas conforme FC e PA, até 10 mg/dia.)" }
    ] },
  { id: "hidralazina", nomes: ["Hidralazina"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "Crise hipertensiva na gestação (IV), IC (com nitrato, em intolerantes a IECA/BRA ou negros), HAS resistente",
    adulto: "Gestante PA ≥ 160/110: 5 mg IV a cada 20 min; se sem resposta com 30 mg, considerar outro fármaco (alguns protocolos até 45 mg) · IC: 25 mg 8/8h até 75–100 mg 8/8h, com dinitrato de isossorbida · HAS: 25–50 mg 2–3×/dia (máx habitual 200 mg/dia)",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "ampola 20 mg/mL (1 mL)", mgPorMl: 20 }],
    renal: [],
    gestacao: { nivel: "compativel", texto: "IV é 1ª linha na crise hipertensiva da gestação/pré-eclâmpsia." },
    alergia: [], contra: ["Taquicardia reflexa: evitar sem betabloqueador na doença coronariana", "Lúpus induzido (doses altas, uso prolongado)", "Estenose mitral/aórtica grave"],
    prescrever: [
      { contexto: "Gestante — PA ≥ 160/110 (crise hipertensiva)", texto: "Hidralazina 20 mg/mL — 1 ampola (1 mL) + 19 mL de água destilada (1 mg/mL).\nFazer 5 mL (5 mg) IV lento; repetir 5 mg a cada 20 min se PA ≥ 160/110; se sem resposta com 30 mg, considerar outro fármaco (alguns protocolos até 45 mg).\nAlvo PAS 140–155 e PAD 90–100; monitorar PA a cada 5 min e vitalidade fetal." },
      { contexto: "Adulto — IC (associada a nitrato)", texto: "USO ORAL\n1. Hidralazina 25 mg ----------------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas.\n2. Dinitrato de isossorbida 10 mg ----------- 90 comprimidos\n   Tomar 2 comprimidos (20 mg) de 8 em 8 horas.\n   (Titular a cada 2–4 semanas até hidralazina 75–100 mg + isossorbida 40 mg 8/8h.)" }
    ] },
  { id: "clonidina", nomes: ["Clonidina"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS resistente, urgência hipertensiva (VO); abstinência de opioides/álcool (adjuvante)",
    adulto: "HAS: 0,1–0,2 mg 2–3×/dia · urgência: 0,1–0,2 mg VO, repetir 0,1 mg a cada 1 h até 0,6 mg",
    apres: [{ rotulo: "comprimido 0,1 mg", mgPorComp: 0.1 }, { rotulo: "comprimido 0,15 mg", mgPorComp: 0.15 }, { rotulo: "comprimido 0,2 mg", mgPorComp: 0.2 }],
    renal: [{ abaixo: 30, texto: "Iniciar com dose menor; risco de sedação e bradicardia." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada como alternativa; dados limitados." },
    alergia: [], contra: ["Suspensão abrupta: hipertensão de rebote grave (retirar em 1–2 semanas)", "Bradicardia, BAV", "Sedação (cuidado com outros sedativos e idosos)"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Clonidina 0,1 mg ------------------------ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo. Não parar de repente." },
      { contexto: "PS — urgência hipertensiva", texto: "Clonidina 0,1–0,2 mg VO, agora.\nRepetir 0,1 mg a cada 1 h se necessário, até 0,6 mg no total. Reavaliar PA e sedação." }
    ] },
  { id: "metildopa", nomes: ["Metildopa", "alfametildopa"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "Hipertensão crônica e gestacional (1ª escolha na gestação)",
    adulto: "750 mg a 2 g/dia VO em 2–4 tomadas (iniciar 250 mg 2–3×/dia); máximo 3 g/dia",
    apres: [{ rotulo: "comprimido 250 mg", mgPorComp: 250 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    renal: [],
    gestacao: { nivel: "compativel", texto: "Anti-hipertensivo com maior experiência na gestação; compatível na lactação (preferir trocar no puerpério se depressão)." },
    alergia: [], contra: ["Hepatopatia ativa", "Depressão grave", "Anemia hemolítica (Coombs +)", "Feocromocitoma", "Uso de IMAO"],
    prescrever: [
      { contexto: "Gestante — hipertensão", texto: "USO ORAL\n1. Metildopa 250 mg ------------------------ 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas. Uso contínuo até nova avaliação.\n   (Aumentar conforme PA; ex.: 500 mg 8/8h. Máximo 3 g/dia.)" }
    ] },

  /* ---------- diuréticos ---------- */
  { id: "clortalidona", nomes: ["Clortalidona"], classe: "diureticos", receita: "simples", tags: ["diuretico"],
    usos: "HAS (1ª linha, longa duração), edema",
    adulto: "12,5–25 mg VO 1×/dia, pela manhã",
    apres: [{ rotulo: "comprimido 12,5 mg", mgPorComp: 12.5 }, { rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }],
    renal: [{ abaixo: 30, texto: "Menos eficaz; pode ser usada com cautela na DRC avançada, mas monitorar Na, K e volemia. Diurético de alça costuma ser preferido." }],
    gestacao: { nivel: "cautela", texto: "Não iniciar na gestação; manter só se já em uso e bem indicada." },
    alergia: [], contra: ["Hipocalemia, hiponatremia", "Gota", "Monitorar glicemia e ácido úrico"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Clortalidona 25 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã. Uso contínuo.\n   (Idoso: iniciar com meio comprimido — 12,5 mg. Dosar Na e K em 2–4 semanas.)" }
    ] },
  { id: "indapamida", nomes: ["Indapamida"], classe: "diureticos", receita: "simples", tags: ["diuretico"],
    usos: "HAS",
    adulto: "1,5 mg (liberação prolongada) VO 1×/dia ou 2,5 mg 1×/dia",
    apres: [{ rotulo: "comprimido LP 1,5 mg", mgPorComp: 1.5 }, { rotulo: "comprimido 2,5 mg", mgPorComp: 2.5 }],
    renal: [{ abaixo: 30, texto: "Evitar (pouco eficaz e risco de distúrbio eletrolítico)." }],
    gestacao: { nivel: "cautela", texto: "Não iniciar na gestação." },
    alergia: [], contra: ["Hipocalemia, hiponatremia", "Encefalopatia hepática"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Indapamida 1,5 mg (liberação prolongada) -- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã. Não partir. Uso contínuo." }
    ] },

  /* ---------- cardio ---------- */
  { id: "isossorbida-mononitrato", nomes: ["Mononitrato de isossorbida", "isossorbida mononitrato", "monocordil"], classe: "cardio", receita: "simples", tags: ["nitrato"],
    usos: "Prevenção de angina estável (não serve para a crise)",
    adulto: "20–40 mg VO 2×/dia em horários assimétricos (ex.: 8 h e 14 h), deixando período noturno sem nitrato",
    apres: [{ rotulo: "comprimido 20 mg", mgPorComp: 20 }, { rotulo: "comprimido 40 mg", mgPorComp: 40 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar com indicação." },
    alergia: [], contra: ["PAS < 90", "Inibidor de PDE-5 (sildenafil < 24 h, tadalafila < 48 h)", "Cardiomiopatia hipertrófica obstrutiva", "Cefaleia é comum no início"],
    prescrever: [
      { contexto: "Adulto — angina estável", texto: "USO ORAL\n1. Mononitrato de isossorbida 20 mg -------- 60 comprimidos\n   Tomar 1 comprimido às 8 h e 1 comprimido às 14 h. Uso contínuo.\n   Não usar sildenafil/tadalafila." }
    ] },
  { id: "sacubitril-valsartana", nomes: ["Sacubitril-valsartana", "sacubitril/valsartana", "sacubitril"], classe: "cardio", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "IC de FE reduzida (substitui IECA/BRA)",
    adulto: "49/51 mg 12/12h, dobrar a cada 2–4 semanas até 97/103 mg 12/12h (iniciar 24/26 mg 12/12h se sem IECA/BRA prévio, dose baixa, ClCr < 30 ou idoso)",
    renal: [{ abaixo: 30, texto: "Iniciar 24/26 mg 12/12h; monitorar K e creatinina." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (fetotoxicidade, como IECA/BRA)." },
    alergia: [], contra: ["Uso de IECA nas últimas 36 h", "Angioedema prévio", "K > 5,4", "PAS < 100", "Hepatopatia grave"],
    prescrever: [
      { contexto: "Adulto — IC de FE reduzida", texto: "USO ORAL\n1. Sacubitril-valsartana 49/51 mg ---------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n   (Suspender o IECA 36 horas antes da 1ª dose. Dosar K e creatinina em 1–2 semanas.)" }
    ] },

  /* ---------- anticoagulantes e antiagregantes ---------- */
  { id: "heparina", nomes: ["Heparina não fracionada", "heparina sódica", "heparina", "HNF"], classe: "anticoagulantes", receita: "hospitalar", tags: ["anticoagulante"],
    usos: "Profilaxia de TEV (inclusive na DRC), tratamento de TEV, SCA, anticoagulação com possível necessidade de reversão rápida",
    adulto: "Profilaxia: 5.000 UI SC 8/8h ou 12/12h · TEV: 80 UI/kg IV em bolus + 18 UI/kg/h · SCA: 60 UI/kg (máx 4.000 UI) + 12 UI/kg/h (máx 1.000 UI/h); TTPa 1,5–2,5× o controle",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não atravessa a placenta; compatível na gestação e lactação." },
    alergia: [], contra: ["Sangramento ativo", "Plaquetopenia induzida por heparina (HIT)", "Plaquetas < 50.000 (avaliar)", "Antídoto: protamina 1 mg para cada 100 UI das últimas 2–3 h"],
    prescrever: [
      { contexto: "Hospitalar — profilaxia de TEV", texto: "Heparina não fracionada 5.000 UI SC de 8/8h (ou 12/12h se baixo risco/baixo peso).\nPlaquetas a cada 2–3 dias nos primeiros 14 dias." },
      { contexto: "Hospitalar — tratamento de TVP/TEP (IV contínua)", texto: "Bolus: Heparina ___ UI (80 UI/kg) IV.\nManutenção: Heparina 25.000 UI (5 mL de 5.000 UI/mL) + SF 0,9% 245 mL (100 UI/mL) em bomba de infusão,\n18 UI/kg/h = ___ mL/h (peso × 0,18).\nTTPa 6 h após o início e após cada ajuste; alvo 1,5–2,5× o controle (ajustar pelo nomograma do serviço)." },
      { contexto: "Hospitalar — SCA", texto: "Heparina 60 UI/kg IV em bolus (máx 4.000 UI), depois 12 UI/kg/h (máx 1.000 UI/h)\nna solução de 100 UI/mL. TTPa alvo 1,5–2 × o controle." }
    ] },
  { id: "dabigatrana", nomes: ["Dabigatrana", "dabigatran"], classe: "anticoagulantes", receita: "simples", tags: ["anticoagulante", "doac"],
    usos: "FA não valvar, tratamento e prevenção de TVP/TEP",
    adulto: "FA: 150 mg 12/12h (110 mg 12/12h se ≥ 80 anos, alto risco de sangramento ou uso de verapamil) · TEV: 150 mg 12/12h após 5–10 dias de anticoagulante parenteral",
    apres: [{ rotulo: "cápsula 110 mg", mgPorComp: 110 }, { rotulo: "cápsula 150 mg", mgPorComp: 150 }],
    renal: [{ abaixo: 30, texto: "Contraindicada." }, { abaixo: 50, texto: "Considerar 110 mg 12/12h se risco de sangramento; monitorar função renal." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação e lactação." },
    alergia: [], contra: ["Prótese valvar mecânica", "ClCr < 30", "Não abrir a cápsula", "Antídoto: idarucizumabe"],
    prescrever: [
      { contexto: "Adulto — FA não valvar", texto: "USO ORAL\n1. Dabigatrana 150 mg --------------------- 60 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, com água, sem abrir a cápsula. Uso contínuo." }
    ] },
  { id: "ticagrelor", nomes: ["Ticagrelor"], classe: "anticoagulantes", receita: "simples", tags: ["antiagregante"],
    usos: "SCA (com AAS), por 12 meses na maioria",
    adulto: "Ataque 180 mg, depois 90 mg 12/12h com AAS ≤ 100 mg/dia",
    apres: [{ rotulo: "comprimido 90 mg", mgPorComp: 90 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se o benefício justificar." },
    alergia: [], contra: ["AVC hemorrágico prévio", "Sangramento ativo", "Hepatopatia grave", "Inibidores potentes do CYP3A4 (cetoconazol, claritromicina)", "AAS > 100 mg/dia reduz eficácia", "Dispneia é efeito comum"],
    prescrever: [
      { contexto: "PS — SCA (ataque)", texto: "Ticagrelor 90 mg — 2 comprimidos (180 mg) VO agora; depois 90 mg VO 12/12h.\nAssociar AAS 100 mg/dia." },
      { contexto: "Adulto — manutenção após SCA", texto: "USO ORAL\n1. Ticagrelor 90 mg ------------------------ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, junto com AAS 100 mg 1×/dia.\n   Não suspender sem falar com o cardiologista." }
    ] },

  /* ---------- hipolipemiantes ---------- */
  { id: "ezetimiba", nomes: ["Ezetimiba", "ezetimibe"], classe: "hipolipemiantes", receita: "simples", tags: [],
    usos: "Hipercolesterolemia: associada à estatina quando não atinge a meta de LDL, ou em intolerância à estatina",
    adulto: "10 mg VO 1×/dia",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar (e contraindicada quando associada à estatina)." },
    alergia: [], contra: ["Hepatopatia moderada/grave"],
    prescrever: [
      { contexto: "Adulto — uso contínuo", texto: "USO ORAL\n1. Ezetimiba 10 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido por dia, junto com a estatina. Uso contínuo." }
    ] },

  /* ---------- antidiabéticos e insulinas ---------- */
  { id: "gliclazida", nomes: ["Gliclazida MR", "gliclazida"], classe: "antidiabeticos", receita: "simples", tags: ["sulfonilureia"],
    usos: "DM2 (sulfonilureia com menor risco de hipoglicemia; preferida em idosos e DRC leve-moderada)",
    adulto: "MR: 30–120 mg VO 1×/dia, no café da manhã",
    apres: [{ rotulo: "comprimido MR 30 mg", mgPorComp: 30 }, { rotulo: "comprimido MR 60 mg", mgPorComp: 60 }],
    renal: [{ abaixo: 30, texto: "Evitar (hipoglicemia); se usar, dose mínima e monitorar." }, { abaixo: 60, texto: "Cautela; iniciar com 30 mg." }],
    gestacao: { nivel: "evitar", texto: "Preferir insulina na gestação." },
    alergia: [], contra: ["DM1, cetoacidose", "Idosos frágeis e refeições irregulares (hipoglicemia)", "Hepatopatia grave"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Gliclazida MR 30 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido no café da manhã. Não partir o de 30 mg. Uso contínuo.\n   (Aumentar 30 mg a cada 2–4 semanas conforme glicemia, até 120 mg/dia. Orientar hipoglicemia.)" }
    ] },
  { id: "dapagliflozina", nomes: ["Dapagliflozina"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (benefício cardiorrenal), IC (FE reduzida e preservada), DRC com ou sem diabetes",
    adulto: "10 mg VO 1×/dia",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    renal: [{ abaixo: 25, texto: "Não iniciar; se já em uso, pode manter para proteção renal até diálise. Efeito glicêmico pequeno com TFG < 45." }],
    gestacao: { nivel: "evitar", texto: "Evitar na gestação (2º e 3º trimestres) e na lactação." },
    alergia: [], contra: ["DM1", "Cetoacidose prévia (risco de cetoacidose euglicêmica)", "Suspender 3 dias antes de cirurgia e em doença aguda/jejum", "Infecção genital/urinária de repetição", "Hipovolemia"],
    prescrever: [
      { contexto: "Adulto — DM2 / IC / DRC", texto: "USO ORAL\n1. Dapagliflozina 10 mg ------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã. Uso contínuo.\n   Beber água; higiene íntima. Suspender se vômitos, jejum ou cirurgia." }
    ] },
  { id: "empagliflozina", nomes: ["Empagliflozina"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (benefício cardiovascular), IC (FE reduzida e preservada), DRC",
    adulto: "DM2: 10–25 mg VO 1×/dia · IC/DRC: 10 mg 1×/dia",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 25 mg", mgPorComp: 25 }],
    renal: [{ abaixo: 20, texto: "Não iniciar. Efeito glicêmico pequeno com TFG < 45." }],
    gestacao: { nivel: "evitar", texto: "Evitar na gestação (2º e 3º trimestres) e na lactação." },
    alergia: [], contra: ["DM1", "Cetoacidose prévia (risco de cetoacidose euglicêmica)", "Suspender 3 dias antes de cirurgia e em doença aguda/jejum", "Infecção genital/urinária de repetição", "Hipovolemia"],
    prescrever: [
      { contexto: "Adulto — DM2 / IC / DRC", texto: "USO ORAL\n1. Empagliflozina 10 mg ------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, pela manhã. Uso contínuo.\n   Beber água; higiene íntima. Suspender se vômitos, jejum ou cirurgia." }
    ] },
  { id: "sitagliptina", nomes: ["Sitagliptina"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (baixo risco de hipoglicemia; opção em idosos e DRC)",
    adulto: "100 mg VO 1×/dia",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    renal: [{ abaixo: 30, texto: "25 mg 1×/dia." }, { abaixo: 45, texto: "50 mg 1×/dia." }],
    gestacao: { nivel: "evitar", texto: "Dados insuficientes; preferir insulina." },
    alergia: [], contra: ["DM1", "Pancreatite prévia", "Não associar a agonista de GLP-1"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Sitagliptina 100 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, com ou sem alimento. Uso contínuo." }
    ] },
  { id: "insulina-nph", nomes: ["Insulina NPH", "insulina humana NPH", "NPH"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "Insulina basal (ação intermediária) no DM1, DM2 e DMG",
    adulto: "DM2 (início): 10 UI ou 0,1–0,2 UI/kg SC ao deitar, titular 2 UI a cada 3 dias pela glicemia de jejum · DM1: dose total 0,5–1 UI/kg/dia, ~50% basal",
    apres: [{ rotulo: "frasco 100 UI/mL (10 mL)" }, { rotulo: "caneta/refil 100 UI/mL (3 mL)" }],
    renal: [{ abaixo: 30, texto: "Necessidade menor: reduzir a dose e monitorar hipoglicemia." }],
    gestacao: { nivel: "compativel", texto: "Insulina basal de escolha na gestação (DMG e DM prévio)." },
    alergia: [], contra: ["Hipoglicemia", "Hipocalemia (com insulina IV)"],
    prescrever: [
      { contexto: "Adulto — DM2, início de insulina basal (bedtime)", texto: "USO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ----------- 1 frasco\n   Aplicar 10 unidades via subcutânea às 22 horas (antes de dormir).\n   Medir a glicemia em jejum todos os dias:\n   - jejum acima de 130 por 3 dias: aumentar 2 unidades;\n   - qualquer glicemia abaixo de 70: diminuir 4 unidades e avisar a equipe.\n   Manter metformina.\n2. Seringa de insulina 100 UI com agulha 6 mm (ou agulha de caneta 4 mm) ---- 30 unidades\n3. Lancetas e tiras de glicemia ------------- 1 caixa" },
      { contexto: "Adulto — NPH 2 vezes ao dia", texto: "USO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ----------- ___ frascos\n   Aplicar ___ unidades via subcutânea antes do café da manhã\n   e ___ unidades às 22 horas.\n   (Dose total ___ UI/dia: cerca de 2/3 pela manhã e 1/3 à noite. Ajustar 2 UI a cada 3 dias.)\n2. Seringas/agulhas, lancetas e tiras de glicemia" },
      { contexto: "Hospitalar — basal-bolus", texto: "Insulina NPH ___ UI SC às 7 h e ___ UI SC às 22 h.\n(Dose total 0,3–0,5 UI/kg/dia — 0,3 em idoso/DRC; metade como basal NPH e metade como insulina regular antes das refeições, + escala de correção.)\nGlicemia capilar antes das refeições e às 22 h. Se jejum: reduzir a NPH em 20–50%." }
    ] },
  { id: "insulina-regular", nomes: ["Insulina regular", "insulina humana regular"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "Insulina prandial e de correção; IV na cetoacidose, estado hiperosmolar e hipercalemia",
    adulto: "Prandial: SC 30 min antes das refeições · CAD/EHH: 0,1 UI/kg/h IV (após K ≥ 3,3) · hipercalemia: 10 UI IV com glicose",
    apres: [{ rotulo: "frasco 100 UI/mL (10 mL)" }, { rotulo: "caneta/refil 100 UI/mL (3 mL)" }],
    renal: [{ abaixo: 30, texto: "Necessidade menor: reduzir a dose e monitorar hipoglicemia." }],
    gestacao: { nivel: "compativel", texto: "Compatível; insulina prandial de escolha na gestação junto com asparte/lispro." },
    alergia: [], contra: ["Hipoglicemia", "Hipocalemia: na CAD não iniciar insulina com K < 3,3"],
    prescrever: [
      { contexto: "Adulto — prandial (ambulatorial)", texto: "USO SUBCUTÂNEO\n1. Insulina humana regular 100 UI/mL ------- 1 frasco\n   Aplicar via subcutânea 30 minutos antes das refeições:\n   café ___ unidades · almoço ___ unidades · jantar ___ unidades.\n   Não aplicar se não for comer.\n2. Seringas/agulhas, lancetas e tiras de glicemia" },
      { contexto: "Hospitalar — escala de correção (exemplo; ajustar à sensibilidade)", texto: "Insulina regular SC conforme glicemia capilar antes das refeições:\n150–200: 2 UI · 201–250: 4 UI · 251–300: 6 UI · 301–350: 8 UI · > 350: 10 UI e avisar o médico.\n< 70: protocolo de hipoglicemia." },
      { contexto: "PS — cetoacidose / estado hiperosmolar (IV contínua)", texto: "Insulina regular 100 UI + SF 0,9% 100 mL (1 UI/mL) em bomba de infusão (desprezar 20 mL pelo equipo antes).\nIniciar 0,1 UI/kg/h = ___ mL/h, só com K ≥ 3,3 mEq/L, após início da hidratação.\nGlicemia capilar de 1/1 h (queda esperada 50–75 mg/dL/h); K de 2/2 a 4/4 h.\nQuando glicemia ≤ 250 (CAD) ou ≤ 300 (EHH): associar SG 5% e reduzir para 0,02–0,05 UI/kg/h.\nTransição para SC: aplicar insulina SC 1–2 h antes de desligar a bomba.\n(Criança: 0,05–0,1 UI/kg/h, sem bolus.)" },
      { contexto: "PS — hipercalemia", texto: "Insulina regular 10 UI IV + glicose 50% 50–100 mL IV em 15–30 min.\nGlicemia capilar de 1/1 h por 4–6 h (risco de hipoglicemia tardia, sobretudo na DRC)." }
    ] },
  { id: "insulina-glargina", nomes: ["Insulina glargina", "glargina", "insulina detemir", "insulina degludeca"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "Insulina basal análoga (longa duração), menos hipoglicemia noturna que a NPH; DM1 e DM2",
    adulto: "Iniciar 10 UI ou 0,1–0,2 UI/kg SC 1×/dia, sempre no mesmo horário; titular 2 UI a cada 3 dias pela glicemia de jejum",
    apres: [{ rotulo: "caneta 100 UI/mL (3 mL)" }, { rotulo: "glargina 300 UI/mL (caneta 1,5 mL)" }],
    renal: [{ abaixo: 30, texto: "Necessidade menor: reduzir a dose e monitorar hipoglicemia." }],
    gestacao: { nivel: "cautela", texto: "Dados tranquilizadores; NPH e detemir têm mais evidência na gestação. Se já em uso e controlada, costuma ser mantida." },
    alergia: [], contra: ["Hipoglicemia", "Não misturar com outras insulinas na mesma seringa", "Na troca de NPH 2×/dia para glargina: usar ~80% da dose total de NPH"],
    prescrever: [
      { contexto: "Adulto — insulina basal", texto: "USO SUBCUTÂNEO\n1. Insulina glargina 100 UI/mL (caneta) ---- ___ canetas\n   Aplicar 10 unidades via subcutânea 1 vez ao dia, sempre no mesmo horário.\n   Medir glicemia de jejum diariamente: acima de 130 por 3 dias, aumentar 2 unidades;\n   abaixo de 70, diminuir 4 unidades e avisar a equipe.\n2. Agulhas para caneta 4 mm ---------------- 30 unidades\n3. Lancetas e tiras de glicemia ------------- 1 caixa" }
    ] },
  { id: "insulina-rapida-analoga", nomes: ["Insulina asparte", "insulina lispro", "insulina glulisina", "asparte", "lispro", "glulisina"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "Insulina prandial ultrarrápida (DM1, DM2 em basal-bolus), correção de hiperglicemia",
    adulto: "SC 0–15 min antes das refeições; dose individual (ex.: iniciar 4 UI ou 10% da basal na maior refeição)",
    apres: [{ rotulo: "caneta 100 UI/mL (3 mL)" }],
    renal: [{ abaixo: 30, texto: "Necessidade menor: reduzir a dose e monitorar hipoglicemia." }],
    gestacao: { nivel: "compativel", texto: "Asparte e lispro são compatíveis na gestação." },
    alergia: [], contra: ["Hipoglicemia", "Aplicar só se for comer logo em seguida"],
    prescrever: [
      { contexto: "Adulto — prandial", texto: "USO SUBCUTÂNEO\n1. Insulina asparte (ou lispro) 100 UI/mL (caneta) ---- ___ canetas\n   Aplicar via subcutânea 0 a 15 minutos antes das refeições:\n   café ___ unidades · almoço ___ unidades · jantar ___ unidades.\n   Não aplicar se não for comer.\n2. Agulhas para caneta 4 mm, lancetas e tiras de glicemia" }
    ] },

  /* ---------- tireoide ---------- */
  { id: "metimazol", nomes: ["Metimazol", "tiamazol", "tapazol"], classe: "tireoide", receita: "simples", tags: [],
    usos: "Hipertireoidismo (doença de Graves, bócio tóxico), preparo para iodo/cirurgia",
    adulto: "10–30 mg/dia VO em 1 tomada conforme gravidade (até 40 mg/dia nos graves); manutenção 5–10 mg/dia",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar no 1º trimestre (embriopatia): usar propiltiouracil e trocar para metimazol no 2º trimestre. Compatível na lactação em dose habitual." },
    alergia: [], contra: ["Agranulocitose prévia por antitireoidiano", "Orientar: febre ou dor de garganta → suspender e fazer hemograma no mesmo dia", "Hepatotoxicidade (colestática)"],
    prescrever: [
      { contexto: "Adulto — hipertireoidismo", texto: "USO ORAL\n1. Metimazol 10 mg ------------------------- 60 comprimidos\n   Tomar 2 comprimidos (20 mg) juntos, 1 vez ao dia.\n   Se febre, dor de garganta ou feridas na boca: parar o remédio e procurar a unidade no mesmo dia para hemograma.\n   (Hemograma e TGO/TGP de base; T4 livre em 4–6 semanas. Associar propranolol se sintomas adrenérgicos.)" }
    ] },
  { id: "propiltiouracil", nomes: ["Propiltiouracil", "PTU"], classe: "tireoide", receita: "simples", tags: [],
    usos: "Hipertireoidismo no 1º trimestre da gestação, tempestade tireoidiana, alergia/intolerância ao metimazol",
    adulto: "100–150 mg VO 8/8h (manutenção 50–150 mg/dia) · tempestade tireoidiana: 500–1.000 mg de ataque, depois 250 mg 4/4h",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    renal: [],
    gestacao: { nivel: "cautela", texto: "Antitireoidiano de escolha no 1º trimestre; depois trocar para metimazol (hepatotoxicidade do PTU)." },
    alergia: [], contra: ["Hepatotoxicidade grave (não usar como 1ª escolha fora da gestação/tempestade)", "Agranulocitose: febre ou dor de garganta → suspender e hemograma", "Vasculite ANCA"],
    prescrever: [
      { contexto: "Gestante (1º trimestre) — hipertireoidismo", texto: "USO ORAL\n1. Propiltiouracil 100 mg ----------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas.\n   Se febre, dor de garganta, pele/olhos amarelos ou urina escura: parar e procurar a unidade no mesmo dia.\n   (Usar a menor dose que mantenha o T4 livre no limite superior do normal; TGO/TGP e hemograma.)" },
      { contexto: "Hospitalar — tempestade tireoidiana", texto: "Propiltiouracil 500–1.000 mg VO/SNG de ataque, depois 250 mg VO/SNG de 4/4h.\nIodo (Lugol/solução saturada) somente 1 h após o PTU; associar betabloqueador e hidrocortisona; UTI." }
    ] }
]);
