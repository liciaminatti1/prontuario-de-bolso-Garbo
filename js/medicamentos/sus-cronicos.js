/* Medicamentos: Doenças crônicas: RENAME e uso comercial (cardio, endócrino, respiratório, gastro, vitaminas, reumato, neuro, psiquiatria).
   Formato em docs/ESQUEMA-MEDICAMENTOS.md. CONFERIR SEMPRE com a bula e o protocolo local. */

adicionarMedicamentos([
  /* ---------- anti-hipertensivos: IECA / BRA ---------- */
  { id: "enalapril", nomes: ["Enalapril", "maleato de enalapril", "Renitec"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, insuficiência cardíaca com FE reduzida, pós-IAM, nefropatia diabética/proteinúria (RENAME).",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 20 mg", mgPorComp: 20 }],
    adulto: "HAS: 5–40 mg/dia VO em 1–2 tomadas · IC: 2,5 mg 12/12h, dobrar a cada 2 semanas até 10–20 mg 12/12h",
    renal: [{ abaixo: 30, texto: "Iniciar com 2,5 mg/dia; creatinina e K em 1–2 semanas (aceitável elevação de até 30%)." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade no 2º e 3º trimestres); trocar ao planejar gestação." },
    alergia: [], contra: ["Angioedema prévio com IECA", "Estenose bilateral de artéria renal", "K > 5,5", "Não associar a BRA nem a sacubitril-valsartana (intervalo de 36 h)", "Tosse seca: trocar por BRA"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Enalapril 10 mg ----------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n   (Dosar creatinina e potássio em 1–2 semanas.)" },
      { contexto: "Adulto — insuficiência cardíaca (início)", texto: "USO ORAL\n1. Enalapril 5 mg ------------------------ 30 comprimidos\n   Tomar meio comprimido (2,5 mg) de 12 em 12 horas. Uso contínuo.\n   (Dobrar a cada 2 semanas conforme PA, K e creatinina; alvo 10–20 mg de 12/12h.)" }
    ] },
  { id: "ramipril", nomes: ["Ramipril", "Triatec", "Naprix"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, IC com FE reduzida, prevenção cardiovascular em alto risco, pós-IAM.",
    apres: [{ rotulo: "cápsula/comprimido 2,5 mg", mgPorComp: 2.5 }, { rotulo: "cápsula/comprimido 5 mg", mgPorComp: 5 }, { rotulo: "cápsula/comprimido 10 mg", mgPorComp: 10 }],
    adulto: "2,5–10 mg VO 1×/dia (pode dividir em 2 tomadas); iniciar 2,5 mg",
    renal: [{ abaixo: 30, texto: "Iniciar 1,25 mg/dia; máximo 5 mg/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Angioedema prévio com IECA", "Estenose bilateral de artéria renal", "K > 5,5", "Não associar a BRA"],
    prescrever: [
      { contexto: "Adulto — HAS / prevenção CV", texto: "USO ORAL\n1. Ramipril 5 mg ------------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia. Uso contínuo.\n   (Iniciar com 2,5 mg; alvo 10 mg/dia. Creatinina e potássio em 1–2 semanas.)" }
    ] },
  { id: "perindopril", nomes: ["Perindopril", "perindopril arginina", "Coversyl"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, doença coronariana estável (prevenção de eventos); associações fixas com indapamida e anlodipino.",
    apres: [{ rotulo: "comprimido 5 mg (arginina)", mgPorComp: 5 }, { rotulo: "comprimido 10 mg (arginina)", mgPorComp: 10 }],
    adulto: "Perindopril arginina 5–10 mg VO 1×/dia, pela manhã, antes da refeição",
    renal: [{ abaixo: 30, texto: "Reduzir (dias alternados); conferir bula." }, { abaixo: 60, texto: "Máximo 5 mg/dia (arginina)." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Angioedema prévio com IECA", "Estenose bilateral de artéria renal", "K > 5,5", "Não associar a BRA"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Perindopril arginina 5 mg ------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã, antes do café. Uso contínuo.\n   (Pode aumentar para 10 mg/dia após 4 semanas.)" }
    ] },
  { id: "valsartana", nomes: ["Valsartana", "valsartan", "Diovan"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, IC com FE reduzida (intolerância a IECA), pós-IAM.",
    apres: [{ rotulo: "comprimido 80 mg", mgPorComp: 80 }, { rotulo: "comprimido 160 mg", mgPorComp: 160 }, { rotulo: "comprimido 320 mg", mgPorComp: 320 }],
    adulto: "HAS: 80–320 mg VO 1×/dia · IC: 40 mg 12/12h até 160 mg 12/12h",
    renal: [{ abaixo: 30, texto: "Cautela; dados limitados. Creatinina e K após início." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Estenose bilateral de artéria renal", "K > 5,5", "Não associar a IECA nem a alisquireno"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Valsartana 160 mg --------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "olmesartana", nomes: ["Olmesartana", "olmesartana medoxomila", "Benicar", "Olmetec"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS (também em associações fixas com HCTZ e anlodipino).",
    apres: [{ rotulo: "comprimido 20 mg", mgPorComp: 20 }, { rotulo: "comprimido 40 mg", mgPorComp: 40 }],
    adulto: "20–40 mg VO 1×/dia",
    renal: [{ abaixo: 20, texto: "Evitar (pouca experiência)." }, { abaixo: 40, texto: "Máximo 20 mg/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Estenose bilateral de artéria renal", "K > 5,5", "Diarreia crônica grave (enteropatia tipo espru): suspender", "Não associar a IECA"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Olmesartana 20 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "candesartana", nomes: ["Candesartana", "candesartana cilexetila", "Atacand"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS, IC com FE reduzida; profilaxia de enxaqueca (uso fora de bula).",
    apres: [{ rotulo: "comprimido 8 mg", mgPorComp: 8 }, { rotulo: "comprimido 16 mg", mgPorComp: 16 }, { rotulo: "comprimido 32 mg", mgPorComp: 32 }],
    adulto: "HAS: 8–32 mg VO 1×/dia · IC: iniciar 4–8 mg/dia, dobrar a cada 2 semanas até 32 mg/dia",
    renal: [{ abaixo: 30, texto: "Iniciar 4 mg/dia; monitorar K e creatinina." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Estenose bilateral de artéria renal", "K > 5,5", "Não associar a IECA"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Candesartana 16 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "telmisartana", nomes: ["Telmisartana", "telmisartan", "Micardis"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS; prevenção cardiovascular em alto risco intolerante a IECA.",
    apres: [{ rotulo: "comprimido 40 mg", mgPorComp: 40 }, { rotulo: "comprimido 80 mg", mgPorComp: 80 }],
    adulto: "40–80 mg VO 1×/dia",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Estenose bilateral de artéria renal", "K > 5,5", "Obstrução biliar / hepatopatia grave", "Não associar a IECA"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Telmisartana 40 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Pode aumentar para 80 mg/dia.)" }
    ] },
  { id: "irbesartana", nomes: ["Irbesartana", "irbesartan", "Aprovel"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "hipercalemia"],
    usos: "HAS; nefropatia diabética no DM2 com proteinúria.",
    apres: [{ rotulo: "comprimido 150 mg", mgPorComp: 150 }, { rotulo: "comprimido 300 mg", mgPorComp: 300 }],
    adulto: "150–300 mg VO 1×/dia",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (fetotoxicidade)." },
    alergia: [], contra: ["Estenose bilateral de artéria renal", "K > 5,5", "Não associar a IECA"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Irbesartana 150 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Pode aumentar para 300 mg/dia.)" }
    ] },
  { id: "losartana-hidroclorotiazida", nomes: ["Losartana + hidroclorotiazida", "losartana/hidroclorotiazida", "Hyzaar"], classe: "anti-hipertensivos", receita: "simples", tags: ["iecabra", "diuretico"],
    usos: "HAS não controlada com monoterapia (associação fixa melhora a adesão).",
    apres: [{ rotulo: "comprimido 50 mg + 12,5 mg" }, { rotulo: "comprimido 100 mg + 25 mg" }],
    adulto: "1 comprimido 50/12,5 mg VO 1×/dia; pode passar a 100/25 mg 1×/dia",
    renal: [{ abaixo: 30, texto: "Não recomendado (tiazídico pouco eficaz; preferir componentes separados com diurético de alça)." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (BRA: fetotoxicidade)." },
    alergia: [], contra: ["Estenose bilateral de artéria renal", "Gota, hiponatremia, hipocalemia", "Alergia a sulfa antimicrobiana: reatividade cruzada baixa (aviso, não contraindicação)"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Losartana 50 mg + hidroclorotiazida 12,5 mg ---- 30 comprimidos\n   Tomar 1 comprimido pela manhã. Uso contínuo.\n   (Sódio, potássio e creatinina em 2–4 semanas.)" }
    ] },

  /* ---------- anti-hipertensivos: bloqueadores de canal de cálcio / vasodilatadores ---------- */
  { id: "verapamil", nomes: ["Verapamil", "cloridrato de verapamil", "Dilacoron"], classe: "cardio", receita: "simples", tags: ["cyp3a4-inib"],
    usos: "Controle da FC na FA/flutter sem IC, TSV (prevenção), angina, HAS; profilaxia de cefaleia em salvas.",
    apres: [{ rotulo: "comprimido 80 mg", mgPorComp: 80 }, { rotulo: "comprimido 120 mg", mgPorComp: 120 }, { rotulo: "comprimido retard 240 mg", mgPorComp: 240 }],
    adulto: "80–120 mg VO 8/8h (máx 480 mg/dia) · retard 240 mg 1×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar se necessário (arritmia materna); evitar no 1º trimestre se houver alternativa." },
    alergia: [], contra: ["IC com FE reduzida", "BAV 2º/3º grau, doença do nó sinusal, WPW com FA", "Hipotensão", "Associar a betabloqueador: risco de bradicardia/BAV", "Aumenta nível de digoxina e de sinvastatina (limitar a 10 mg)"],
    prescrever: [
      { contexto: "Adulto — controle de FC / angina", texto: "USO ORAL\n1. Verapamil 80 mg ----------------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas. Uso contínuo.\n   (Ajustar pela FC e PA; ECG se associar a outros cronotrópicos.)" }
    ] },
  { id: "diltiazem", nomes: ["Diltiazem", "cloridrato de diltiazem", "Cardizem", "Balcor"], classe: "cardio", receita: "simples", tags: ["cyp3a4-inib"],
    usos: "Angina (inclusive vasoespástica), controle da FC na FA sem IC, HAS.",
    apres: [{ rotulo: "comprimido 30 mg", mgPorComp: 30 }, { rotulo: "comprimido 60 mg", mgPorComp: 60 }, { rotulo: "cápsula liberação prolongada 90/120/180/240 mg" }],
    adulto: "30–60 mg VO 6/6h a 8/8h · liberação prolongada 120–360 mg/dia",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar (dados animais desfavoráveis); usar só sem alternativa." },
    alergia: [], contra: ["IC com FE reduzida", "BAV 2º/3º grau, doença do nó sinusal, WPW com FA", "Hipotensão", "Aumenta nível de sinvastatina, digoxina e DOAC"],
    prescrever: [
      { contexto: "Adulto — angina / FC", texto: "USO ORAL\n1. Diltiazem 60 mg ----------------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas. Uso contínuo." }
    ] },
  { id: "lercanidipino", nomes: ["Lercanidipino", "cloridrato de lercanidipino", "Zanidip"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS (di-hidropiridínico com menos edema de membros inferiores).",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 20 mg", mgPorComp: 20 }],
    adulto: "10–20 mg VO 1×/dia, 15 min antes de uma refeição",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "evitar", texto: "Sem dados; preferir metildopa, nifedipino ou anlodipino." },
    alergia: [], contra: ["Estenose aórtica grave", "Angina instável / IAM recente", "Inibidores fortes de CYP3A4 e suco de toranja"],
    prescrever: [
      { contexto: "Adulto — HAS", texto: "USO ORAL\n1. Lercanidipino 10 mg ------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, 15 minutos antes do café. Uso contínuo." }
    ] },
  { id: "minoxidil-oral", nomes: ["Minoxidil oral", "minoxidil comprimido", "Loniten"], classe: "anti-hipertensivos", receita: "simples", tags: [],
    usos: "HAS resistente/grave (associado a betabloqueador e diurético); em dose baixa, alopecia (uso fora de bula).",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    adulto: "HAS: iniciar 2,5–5 mg/dia, aumentar até 10–40 mg/dia em 1–2 tomadas (máx 100 mg/dia) · alopecia: doses baixas conforme dermatologia",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar (hipertricose fetal relatada)." },
    alergia: [], contra: ["Feocromocitoma", "Sempre com betabloqueador (taquicardia reflexa) e diurético (retenção de sódio/edema)", "Derrame pericárdico", "Hipertricose"],
    prescrever: [
      { contexto: "Adulto — HAS resistente", texto: "USO ORAL\n1. Minoxidil 10 mg ----------------------- 30 comprimidos\n   Tomar meio comprimido (5 mg) 1 vez ao dia. Uso contínuo.\n   (Manter betabloqueador e diurético de alça; aumentar gradualmente.)" }
    ] },

  /* ---------- cardio: antianginosos, antiarrítmicos, IC ---------- */
  { id: "ivabradina", nomes: ["Ivabradina", "Procoralan"], classe: "cardio", receita: "simples", tags: [],
    usos: "IC com FE ≤ 35% em ritmo sinusal com FC ≥ 70 apesar de betabloqueador em dose máxima tolerada; angina estável.",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 7,5 mg", mgPorComp: 7.5 }],
    adulto: "5 mg VO 12/12h com refeições; após 2 semanas, 7,5 mg 12/12h se FC > 60 (idoso: iniciar 2,5 mg 12/12h)",
    renal: [{ abaixo: 15, texto: "Cautela (sem dados)." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (teratogênica em animais); contracepção eficaz." },
    alergia: [], contra: ["FA ou ritmo não sinusal, marca-passo dependente", "FC < 70 antes de iniciar; reduzir se FC < 50", "Inibidores fortes de CYP3A4, verapamil e diltiazem", "Fosfenos (alterações visuais luminosas)"],
    prescrever: [
      { contexto: "Adulto — IC FE reduzida", texto: "USO ORAL\n1. Ivabradina 5 mg ----------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com o café e o jantar. Uso contínuo.\n   (Reavaliar FC em 2 semanas: > 60 bpm → 7,5 mg 12/12h; < 50 bpm → 2,5 mg 12/12h.)" }
    ] },
  { id: "trimetazidina", nomes: ["Trimetazidina", "dicloridrato de trimetazidina", "Vastarel"], classe: "cardio", receita: "simples", tags: [],
    usos: "Angina estável (adjuvante quando não controlada com antianginosos de 1ª linha).",
    apres: [{ rotulo: "comprimido MR 35 mg", mgPorComp: 35 }],
    adulto: "MR 35 mg VO 12/12h, nas refeições",
    renal: [{ abaixo: 30, texto: "Contraindicada." }, { abaixo: 60, texto: "35 mg 1×/dia." }],
    gestacao: { nivel: "evitar", texto: "Evitar (sem dados)." },
    alergia: [], contra: ["Doença de Parkinson, tremor, síndrome das pernas inquietas (pode causar ou piorar)", "Idosos: ajustar pela função renal"],
    prescrever: [
      { contexto: "Adulto — angina", texto: "USO ORAL\n1. Trimetazidina MR 35 mg ---------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, no café e no jantar. Uso contínuo." }
    ] },
  { id: "propafenona", nomes: ["Propafenona", "cloridrato de propafenona", "Ritmonorm"], classe: "cardio", receita: "simples", tags: [],
    usos: "FA paroxística sem cardiopatia estrutural (manutenção do ritmo ou 'pílula de bolso'), TSV.",
    apres: [{ rotulo: "comprimido 300 mg", mgPorComp: 300 }],
    adulto: "150–300 mg VO 8/8h (máx 900 mg/dia) · 'pílula de bolso': 450 mg (< 70 kg) ou 600 mg (≥ 70 kg) dose única",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar só se necessária (arritmia materna), com cardiologista." },
    alergia: [], contra: ["Cardiopatia estrutural, doença coronariana, IC (pró-arrítmica)", "Bradicardia, BAV, doença do nó sinusal", "Asma/broncoespasmo (efeito betabloqueador)", "Associar betabloqueador ou BCC não di-hidropiridínico na FA (evita flutter 1:1)", "Aumenta digoxina e varfarina"],
    prescrever: [
      { contexto: "Adulto — manutenção do ritmo (FA sem cardiopatia)", texto: "USO ORAL\n1. Propafenona 300 mg -------------------- 60 comprimidos\n   Tomar meio comprimido (150 mg) de 8 em 8 horas. Uso contínuo.\n   (Ajustar com cardiologia; ECG após início — alargamento do QRS > 25% indica reduzir.)" }
    ] },
  { id: "sotalol", nomes: ["Sotalol", "cloridrato de sotalol", "Sotacor"], classe: "cardio", receita: "simples", tags: ["qt"],
    usos: "Manutenção do ritmo sinusal na FA/flutter, arritmias ventriculares (com cardiologia).",
    apres: [{ rotulo: "comprimido 120 mg", mgPorComp: 120 }, { rotulo: "comprimido 160 mg", mgPorComp: 160 }],
    adulto: "80 mg VO 12/12h; aumentar até 160 mg 12/12h conforme QTc",
    renal: [{ abaixo: 40, texto: "Intervalo de 24–48 h ou contraindicado (risco de torsades); conferir bula." }, { abaixo: 60, texto: "Intervalo de 24 h." }],
    gestacao: { nivel: "cautela", texto: "Usar só se necessário; risco de bradicardia/hipoglicemia fetal." },
    alergia: [], contra: ["QTc > 450 ms antes de iniciar; suspender se > 500 ms", "Hipocalemia/hipomagnesemia", "Asma, bradicardia, BAV, IC descompensada", "Outros fármacos que prolongam QT", "Iniciar com ECG e monitorização"],
    prescrever: [
      { contexto: "Adulto — FA (início com cardiologia)", texto: "USO ORAL\n1. Sotalol 160 mg ------------------------ 30 comprimidos\n   Tomar meio comprimido (80 mg) de 12 em 12 horas. Uso contínuo.\n   (ECG com QTc em 2–3 dias; manter K e Mg normais.)" }
    ] },
  { id: "eplerenona", nomes: ["Eplerenona", "Inspra"], classe: "diureticos", receita: "simples", tags: ["poupador-k", "hipercalemia"],
    usos: "IC com FE reduzida e pós-IAM com disfunção de VE (alternativa à espironolactona sem ginecomastia).",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }],
    adulto: "25 mg VO 1×/dia; após 4 semanas, 50 mg 1×/dia se K normal",
    renal: [{ abaixo: 30, texto: "Contraindicada." }, { abaixo: 50, texto: "25 mg em dias alternados a 25 mg/dia; K frequente." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar só se necessária." },
    alergia: [], contra: ["K > 5,0 ao iniciar", "Inibidores fortes de CYP3A4 (claritromicina, cetoconazol, itraconazol)", "Associação com IECA/BRA: K e creatinina em 1 semana e 1 mês"],
    prescrever: [
      { contexto: "Adulto — IC FE reduzida", texto: "USO ORAL\n1. Eplerenona 25 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Potássio e creatinina em 1 semana, 1 mês e depois periodicamente.)" }
    ] },

  /* ---------- antiagregantes, anticoagulantes, vasculares ---------- */
  { id: "prasugrel", nomes: ["Prasugrel", "Effient"], classe: "anticoagulantes", receita: "simples", tags: ["antiagregante"],
    usos: "Síndrome coronariana aguda submetida a angioplastia (dupla antiagregação com AAS).",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 10 mg", mgPorComp: 10 }],
    adulto: "Ataque 60 mg; manutenção 10 mg VO 1×/dia (5 mg se < 60 kg) com AAS, em geral por 12 meses",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar só se indispensável." },
    alergia: [], contra: ["AVC ou AIT prévio (contraindicado)", "≥ 75 anos: em geral não recomendado", "Sangramento ativo", "Suspender 7 dias antes de cirurgia"],
    prescrever: [
      { contexto: "Adulto — pós-angioplastia (SCA)", texto: "USO ORAL\n1. Prasugrel 10 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o AAS. Não interromper sem falar com o cardiologista." }
    ] },
  { id: "cilostazol", nomes: ["Cilostazol", "Vasogard", "Cebralat"], classe: "anticoagulantes", receita: "simples", tags: ["antiagregante"],
    usos: "Claudicação intermitente da doença arterial periférica.",
    apres: [{ rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100 mg VO 12/12h, 30 min antes ou 2 h após o café e o jantar (50 mg 12/12h com inibidores de CYP3A4/2C19)",
    renal: [{ abaixo: 25, texto: "Contraindicado." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado." },
    alergia: [], contra: ["Insuficiência cardíaca de qualquer grau (contraindicado)", "Sangramento ativo", "Taquiarritmia", "Efeito em 2–12 semanas; reavaliar em 3 meses"],
    prescrever: [
      { contexto: "Adulto — claudicação", texto: "USO ORAL\n1. Cilostazol 100 mg --------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, 30 minutos antes do café e do jantar. Uso contínuo.\n   (Associar caminhada supervisionada; reavaliar em 3 meses.)" }
    ] },
  { id: "pentoxifilina", nomes: ["Pentoxifilina", "Trental"], classe: "cardio", receita: "simples", tags: [],
    usos: "Claudicação intermitente (alternativa ao cilostazol), úlcera venosa (adjuvante).",
    apres: [{ rotulo: "comprimido liberação prolongada 400 mg", mgPorComp: 400 }],
    adulto: "400 mg VO 8/8h com as refeições (400 mg 12/12h se intolerância)",
    renal: [{ abaixo: 30, texto: "400 mg 1–2×/dia." }],
    gestacao: { nivel: "evitar", texto: "Evitar (dados limitados)." },
    alergia: [], contra: ["Hemorragia recente (cerebral, retiniana)", "IAM recente", "Potencializa anticoagulantes e anti-hipertensivos", "Intolerância a metilxantinas"],
    prescrever: [
      { contexto: "Adulto — claudicação / úlcera venosa", texto: "USO ORAL\n1. Pentoxifilina 400 mg ------------------ 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, junto às refeições, sem partir. Uso contínuo." }
    ] },
  { id: "edoxabana", nomes: ["Edoxabana", "edoxaban", "Lixiana"], classe: "anticoagulantes", receita: "simples", tags: ["anticoagulante", "doac"],
    usos: "FA não valvar (prevenção de AVC), tratamento e prevenção de TVP/TEP (após 5 dias de heparina).",
    apres: [{ rotulo: "comprimido 30 mg", mgPorComp: 30 }, { rotulo: "comprimido 60 mg", mgPorComp: 60 }],
    adulto: "60 mg VO 1×/dia · 30 mg 1×/dia se ClCr 15–50, peso ≤ 60 kg ou uso de inibidores de P-gp (ciclosporina, dronedarona, eritromicina, cetoconazol)",
    renal: [{ abaixo: 15, texto: "Não recomendada." }, { abaixo: 50, texto: "30 mg 1×/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação e lactação (preferir heparina de baixo peso)." },
    alergia: [], contra: ["Prótese valvar mecânica, estenose mitral moderada/grave", "Sangramento ativo", "FA com ClCr > 95: eficácia menor (preferir outro DOAC)", "Hepatopatia com coagulopatia"],
    prescrever: [
      { contexto: "Adulto — FA não valvar", texto: "USO ORAL\n1. Edoxabana 60 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sempre no mesmo horário. Uso contínuo.\n   (30 mg/dia se ClCr 15–50, peso ≤ 60 kg ou inibidor de P-gp.)" }
    ] },

  /* ---------- hipolipemiantes ---------- */
  { id: "ciprofibrato", nomes: ["Ciprofibrato", "Oroxadin", "Lipless"], classe: "hipolipemiantes", receita: "simples", tags: [],
    usos: "Hipertrigliceridemia (sobretudo TG > 500 mg/dL, risco de pancreatite); dislipidemia mista.",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100 mg VO 1×/dia",
    renal: [{ abaixo: 30, texto: "Contraindicado." }, { abaixo: 60, texto: "100 mg em dias alternados." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação e lactação." },
    alergia: [], contra: ["Hepatopatia, colelitíase", "Com estatina: risco de miopatia (CK se dor muscular); não associar a outro fibrato", "Potencializa varfarina"],
    prescrever: [
      { contexto: "Adulto — hipertrigliceridemia", texto: "USO ORAL\n1. Ciprofibrato 100 mg ------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Lipidograma, TGO/TGP e creatinina em 2–3 meses.)" }
    ] },
  { id: "fenofibrato", nomes: ["Fenofibrato", "Lipidil", "Lipanon"], classe: "hipolipemiantes", receita: "simples", tags: [],
    usos: "Hipertrigliceridemia; dislipidemia mista (fibrato preferido para associar a estatina).",
    apres: [{ rotulo: "cápsula micronizada 200 mg", mgPorComp: 200 }, { rotulo: "cápsula retard 250 mg", mgPorComp: 250 }],
    adulto: "Micronizado 200 mg VO 1×/dia com refeição (ou retard 250 mg 1×/dia)",
    renal: [{ abaixo: 30, texto: "Contraindicado." }, { abaixo: 60, texto: "Reduzir a dose (conferir apresentação)." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação e lactação." },
    alergia: [], contra: ["Hepatopatia, colelitíase", "Eleva creatinina reversivelmente", "Com estatina: CK se dor muscular", "Potencializa varfarina"],
    prescrever: [
      { contexto: "Adulto — hipertrigliceridemia", texto: "USO ORAL\n1. Fenofibrato 200 mg -------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, junto ao almoço. Uso contínuo." }
    ] },
  { id: "genfibrozila", nomes: ["Genfibrozila", "genfibrozil", "Lopid"], classe: "hipolipemiantes", receita: "simples", tags: [],
    usos: "Hipertrigliceridemia (RENAME); evitar quando há estatina associada.",
    apres: [{ rotulo: "comprimido 600 mg", mgPorComp: 600 }, { rotulo: "comprimido 900 mg", mgPorComp: 900 }],
    adulto: "600 mg VO 12/12h, 30 min antes do café e do jantar",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "contraindicado", texto: "Evitar na gestação e lactação." },
    alergia: [], contra: ["NÃO associar a estatina (rabdomiólise; preferir fenofibrato)", "Contraindicado com repaglinida", "Hepatopatia, colelitíase", "Potencializa varfarina"],
    prescrever: [
      { contexto: "Adulto — hipertrigliceridemia", texto: "USO ORAL\n1. Genfibrozila 600 mg ------------------- 60 comprimidos\n   Tomar 1 comprimido 30 minutos antes do café e do jantar. Uso contínuo." }
    ] },
  { id: "pravastatina", nomes: ["Pravastatina", "pravastatina sódica", "Pravacol"], classe: "hipolipemiantes", receita: "simples", tags: ["estatina"],
    usos: "Dislipidemia e prevenção cardiovascular quando há muitas interações (não metabolizada pelo CYP3A4).",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 20 mg", mgPorComp: 20 }, { rotulo: "comprimido 40 mg", mgPorComp: 40 }],
    adulto: "20–40 mg VO 1×/dia, à noite (máx 80 mg)",
    renal: [{ abaixo: 30, texto: "Iniciar com 10 mg/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Suspender na gestação e lactação." },
    alergia: [], contra: ["Hepatopatia ativa", "Mialgia: dosar CK"],
    prescrever: [
      { contexto: "Adulto — dislipidemia", texto: "USO ORAL\n1. Pravastatina 40 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido à noite. Uso contínuo." }
    ] },
  { id: "omega-3", nomes: ["Ômega-3", "omega 3", "ácidos graxos ômega-3", "EPA DHA", "óleo de peixe"], classe: "hipolipemiantes", receita: "simples", tags: [],
    usos: "Hipertrigliceridemia (adjuvante a dieta, fibrato ou estatina).",
    adulto: "2–4 g/dia de EPA + DHA VO com refeições (conferir o teor de EPA + DHA por cápsula)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível em doses habituais." },
    alergia: [], contra: ["Alergia a peixe", "Doses altas: pequeno aumento de FA e de sangramento com anticoagulantes"],
    prescrever: [
      { contexto: "Adulto — hipertrigliceridemia", texto: "USO ORAL\n1. Ômega-3 (EPA + DHA) cápsula 1 g -------- 120 cápsulas\n   Tomar 2 cápsulas no almoço e 2 cápsulas no jantar. Uso contínuo.\n   (Ajustar ao teor de EPA + DHA do produto: alvo 2–4 g/dia.)" }
    ] },

  /* ---------- antidiabéticos orais ---------- */
  { id: "glibenclamida", nomes: ["Glibenclamida", "Daonil"], classe: "antidiabeticos", receita: "simples", tags: ["sulfonilureia"],
    usos: "DM2 (RENAME); maior risco de hipoglicemia que a gliclazida — evitar em idosos e DRC.",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }],
    adulto: "2,5–5 mg VO no café da manhã; aumentar até 20 mg/dia (doses > 10 mg em 2 tomadas, antes das refeições)",
    renal: [{ abaixo: 60, texto: "Evitar (hipoglicemia prolongada); trocar por gliclazida ou outra classe." }],
    gestacao: { nivel: "evitar", texto: "Preferir insulina na gestação." },
    alergia: [], contra: ["DM1, cetoacidose", "Idosos (hipoglicemia grave e prolongada)", "Hepatopatia grave", "Alergia a sulfa antimicrobiana: reatividade cruzada baixa (aviso, não contraindicação)"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Glibenclamida 5 mg ------------------- 60 comprimidos\n   Tomar 1 comprimido antes do café e 1 comprimido antes do jantar. Uso contínuo.\n   (Iniciar com 2,5–5 mg/dia; orientar sinais de hipoglicemia e não pular refeições.)" }
    ] },
  { id: "glimepirida", nomes: ["Glimepirida", "Amaryl"], classe: "antidiabeticos", receita: "simples", tags: ["sulfonilureia"],
    usos: "DM2 (sulfonilureia em dose única diária).",
    apres: [{ rotulo: "comprimido 1 mg", mgPorComp: 1 }, { rotulo: "comprimido 2 mg", mgPorComp: 2 }, { rotulo: "comprimido 4 mg", mgPorComp: 4 }],
    adulto: "1–2 mg VO no café da manhã; aumentar 1–2 mg a cada 1–2 semanas (habitual até 4 mg; máx 8 mg/dia)",
    renal: [{ abaixo: 30, texto: "Evitar." }, { abaixo: 60, texto: "Iniciar com 1 mg; cautela (hipoglicemia)." }],
    gestacao: { nivel: "evitar", texto: "Preferir insulina na gestação." },
    alergia: [], contra: ["DM1, cetoacidose", "Idosos frágeis (hipoglicemia)", "Hepatopatia grave", "Alergia a sulfa antimicrobiana: reatividade cruzada baixa (aviso, não contraindicação)"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Glimepirida 2 mg --------------------- 30 comprimidos\n   Tomar 1 comprimido antes do café da manhã. Uso contínuo." }
    ] },
  { id: "pioglitazona", nomes: ["Pioglitazona", "Actos"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 com resistência insulínica; esteato-hepatite (MASH) em diabéticos.",
    apres: [{ rotulo: "comprimido 15 mg", mgPorComp: 15 }, { rotulo: "comprimido 30 mg", mgPorComp: 30 }, { rotulo: "comprimido 45 mg", mgPorComp: 45 }],
    adulto: "15–45 mg VO 1×/dia",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Preferir insulina." },
    alergia: [], contra: ["Insuficiência cardíaca (retenção hídrica)", "Câncer de bexiga atual/prévio ou hematúria não investigada", "Osteoporose/fraturas", "Hepatopatia ativa (TGP > 2,5× LSN)", "Edema e ganho de peso"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Pioglitazona 15 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Pode aumentar para 30–45 mg/dia; orientar edema e ganho de peso.)" }
    ] },
  { id: "vildagliptina", nomes: ["Vildagliptina", "Galvus", "vildagliptina + metformina", "Galvus Met"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (inibidor de DPP-4; isolada ou associada à metformina).",
    apres: [{ rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 50 mg + metformina 850 ou 1.000 mg" }],
    adulto: "50 mg VO 12/12h (com sulfonilureia: 50 mg 1×/dia)",
    renal: [{ abaixo: 50, texto: "50 mg 1×/dia (associação com metformina: rever pela metformina)." }],
    gestacao: { nivel: "evitar", texto: "Dados insuficientes; preferir insulina." },
    alergia: [], contra: ["DM1", "Hepatopatia (TGP > 3× LSN): TGO/TGP antes e periodicamente", "Pancreatite prévia", "Não associar a agonista de GLP-1"],
    prescrever: [
      { contexto: "Adulto — DM2 (com metformina)", texto: "USO ORAL\n1. Vildagliptina 50 mg + metformina 1.000 mg ---- 60 comprimidos\n   Tomar 1 comprimido no café e 1 comprimido no jantar, junto à refeição. Uso contínuo." }
    ] },
  { id: "linagliptina", nomes: ["Linagliptina", "Trayenta", "linagliptina + metformina", "Trayenta Duo"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2; útil na DRC (sem ajuste renal).",
    apres: [{ rotulo: "comprimido 5 mg", mgPorComp: 5 }],
    adulto: "5 mg VO 1×/dia",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Dados insuficientes; preferir insulina." },
    alergia: [], contra: ["DM1", "Pancreatite prévia", "Penfigoide bolhoso", "Não associar a agonista de GLP-1"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Linagliptina 5 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "canagliflozina", nomes: ["Canagliflozina", "Invokana"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2, com benefício renal e cardiovascular (inibidor de SGLT2).",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "comprimido 300 mg", mgPorComp: 300 }],
    adulto: "100 mg VO 1×/dia antes da 1ª refeição; pode aumentar para 300 mg",
    renal: [{ abaixo: 30, texto: "Não iniciar; se já em uso por nefroproteção, manter 100 mg até diálise." }, { abaixo: 60, texto: "100 mg/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Evitar no 2º e 3º trimestres e na lactação." },
    alergia: [], contra: ["DM1 / cetoacidose (inclusive euglicêmica): suspender 3 dias antes de cirurgia e no jejum/doença aguda", "Infecção genital fúngica, ITU", "Hipovolemia (associação com diurético)", "Úlcera/doença arterial de pés: cautela (amputação)"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO ORAL\n1. Canagliflozina 100 mg ----------------- 30 comprimidos\n   Tomar 1 comprimido antes do café da manhã. Uso contínuo.\n   (Higiene genital e hidratação; suspender se vômitos, jejum ou doença aguda.)" }
    ] },

  /* ---------- agonistas de GLP-1 / GIP ---------- */
  { id: "semaglutida", nomes: ["Semaglutida", "semaglutida injetável", "Ozempic", "Wegovy"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (Ozempic, com benefício cardiovascular); obesidade/sobrepeso com comorbidade (Wegovy).",
    adulto: "DM2: 0,25 mg SC 1×/semana por 4 semanas → 0,5 mg; se necessário 1 mg e depois 2 mg (a cada ≥ 4 semanas) · obesidade (Wegovy): escalonar a cada 4 semanas 0,25 → 0,5 → 1 → 1,7 → 2,4 mg/semana",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Suspender ao planejar gestação (pelo menos 2 meses antes) e não usar na gestação/lactação." },
    alergia: [], contra: ["História pessoal/familiar de carcinoma medular de tireoide ou NEM 2", "Pancreatite prévia", "Retinopatia diabética avançada (piora com queda rápida da HbA1c)", "Colelitíase, náusea/vômitos (desidratação → LRA)", "Venda com retenção da receita na farmácia (norma ANVISA 2025 para agonistas de GLP-1: conferir exigências vigentes)"],
    prescrever: [
      { contexto: "Adulto — DM2 (início)", texto: "USO SUBCUTÂNEO\n1. Semaglutida 1,34 mg/mL caneta (Ozempic 0,25/0,5 mg) ---- 1 caneta\n   Aplicar 0,25 mg por via subcutânea 1 vez por semana, no mesmo dia, por 4 semanas.\n   Depois aplicar 0,5 mg 1 vez por semana. Uso contínuo.\n   (Agulhas para caneta: 1 caixa.)" }
    ] },
  { id: "semaglutida-oral", nomes: ["Semaglutida oral", "semaglutida comprimido", "Rybelsus"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (agonista de GLP-1 por via oral).",
    apres: [{ rotulo: "comprimido 3 mg", mgPorComp: 3 }, { rotulo: "comprimido 7 mg", mgPorComp: 7 }, { rotulo: "comprimido 14 mg", mgPorComp: 14 }],
    adulto: "3 mg VO 1×/dia por 30 dias → 7 mg/dia; após ≥ 30 dias pode passar a 14 mg/dia",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Suspender pelo menos 2 meses antes de engravidar." },
    alergia: [], contra: ["Carcinoma medular de tireoide / NEM 2 (pessoal ou familiar)", "Pancreatite prévia", "Tomar em jejum com até 120 mL de água e esperar 30 min para comer ou tomar outros remédios (inclusive levotiroxina)", "Retenção da receita na farmácia (norma ANVISA 2025: conferir)"],
    prescrever: [
      { contexto: "Adulto — DM2 (início)", texto: "USO ORAL\n1. Semaglutida 3 mg --------------------- 30 comprimidos\n   Tomar 1 comprimido em jejum, com no máximo meio copo de água, 30 minutos antes do café e de outros remédios, por 30 dias.\n   (Depois passar para 7 mg/dia.)" }
    ] },
  { id: "liraglutida", nomes: ["Liraglutida", "Victoza", "Saxenda"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (Victoza, com benefício cardiovascular); obesidade (Saxenda), inclusive adolescentes ≥ 12 anos.",
    adulto: "DM2: 0,6 mg SC 1×/dia por 1 semana → 1,2 mg (máx 1,8 mg/dia) · obesidade: 0,6 mg/dia, aumentar 0,6 mg por semana até 3 mg/dia",
    renal: [{ abaixo: 15, texto: "Não recomendada." }],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação/lactação." },
    alergia: [], contra: ["Carcinoma medular de tireoide / NEM 2", "Pancreatite prévia", "Náusea/vômitos (desidratação → LRA), colelitíase", "Retenção da receita na farmácia (norma ANVISA 2025: conferir)"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO SUBCUTÂNEO\n1. Liraglutida 6 mg/mL caneta ------------ 2 canetas\n   Aplicar 0,6 mg por via subcutânea 1 vez ao dia por 7 dias; depois 1,2 mg 1 vez ao dia. Uso contínuo.\n   (Agulhas para caneta: 1 caixa.)" }
    ] },
  { id: "dulaglutida", nomes: ["Dulaglutida", "Trulicity"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 (agonista de GLP-1 semanal, benefício cardiovascular).",
    adulto: "0,75 mg SC 1×/semana; aumentar para 1,5 mg (e, se necessário, 3 mg e 4,5 mg a cada ≥ 4 semanas)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação/lactação." },
    alergia: [], contra: ["Carcinoma medular de tireoide / NEM 2", "Pancreatite prévia", "Gastroparesia grave", "Retenção da receita na farmácia (norma ANVISA 2025: conferir)"],
    prescrever: [
      { contexto: "Adulto — DM2", texto: "USO SUBCUTÂNEO\n1. Dulaglutida 1,5 mg caneta ------------- 4 canetas\n   Aplicar 1 caneta por via subcutânea 1 vez por semana, no mesmo dia. Uso contínuo." }
    ] },
  { id: "tirzepatida", nomes: ["Tirzepatida", "Mounjaro"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM2 e obesidade (agonista duplo GIP/GLP-1).",
    adulto: "2,5 mg SC 1×/semana por 4 semanas; aumentar 2,5 mg a cada ≥ 4 semanas conforme resposta (manutenção 5–15 mg/semana)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação/lactação; reduz eficácia de anticoncepcional oral no início/escalonamento (usar método adicional por 4 semanas)." },
    alergia: [], contra: ["Carcinoma medular de tireoide / NEM 2", "Pancreatite prévia", "Náusea/vômitos (desidratação → LRA), colelitíase", "Retenção da receita na farmácia (norma ANVISA 2025: conferir)"],
    prescrever: [
      { contexto: "Adulto — início", texto: "USO SUBCUTÂNEO\n1. Tirzepatida 2,5 mg ------------------- 4 doses (1 caixa)\n   Aplicar 2,5 mg por via subcutânea 1 vez por semana, no mesmo dia, por 4 semanas.\n   (Depois 5 mg/semana; reavaliar a cada 4 semanas.)" }
    ] },
  { id: "insulina-degludeca", nomes: ["Insulina degludeca", "degludeca", "Tresiba"], classe: "antidiabeticos", receita: "simples", tags: [],
    usos: "DM1 e DM2: insulina basal de ação ultralonga (menos hipoglicemia noturna; horário flexível).",
    adulto: "DM2: iniciar 10 U SC 1×/dia (ou 0,1–0,2 U/kg) e ajustar 2 U a cada 3–4 dias pela glicemia de jejum · DM1: dose basal individual",
    renal: [{ abaixo: 30, texto: "Pode exigir redução da dose (hipoglicemia)." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada; insulina NPH/detemir têm mais dados na gestação." },
    alergia: [], contra: ["Hipoglicemia", "Não misturar com outras insulinas na seringa"],
    prescrever: [
      { contexto: "Adulto — DM2 (início de insulina basal)", texto: "USO SUBCUTÂNEO\n1. Insulina degludeca 100 U/mL caneta ---- 1 caixa (5 canetas)\n2. Agulhas para caneta ------------------ 1 caixa\n   Aplicar 10 unidades por via subcutânea 1 vez ao dia, sempre no mesmo horário.\n   Aumentar 2 unidades a cada 3 dias se glicemia de jejum > 130 mg/dL; reduzir 4 unidades se < 70 mg/dL." }
    ] },

  /* ---------- outros hormônios ---------- */
  { id: "fludrocortisona", nomes: ["Fludrocortisona", "acetato de fludrocortisona", "Florinefe"], classe: "hormonios", receita: "simples", tags: ["corticoide"],
    usos: "Insuficiência adrenal primária (com hidrocortisona/prednisona), hiperplasia adrenal congênita, hipotensão ortostática neurogênica.",
    apres: [{ rotulo: "comprimido 0,1 mg", mgPorComp: 0.1 }],
    adulto: "Addison: 0,05–0,2 mg VO 1×/dia · hipotensão ortostática: 0,1–0,2 mg/dia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Manter na insuficiência adrenal." },
    alergia: [], contra: ["Hipertensão, edema, IC", "Hipocalemia: dosar K", "Ajustar pela PA, K e renina"],
    prescrever: [
      { contexto: "Adulto — insuficiência adrenal primária", texto: "USO ORAL\n1. Fludrocortisona 0,1 mg ---------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã. Uso contínuo; não suspender." }
    ] },
  { id: "desmopressina", nomes: ["Desmopressina", "acetato de desmopressina", "DDAVP"], classe: "hormonios", receita: "simples", tags: [],
    usos: "Diabetes insípido central, enurese noturna primária (comprimido, > 5 anos), noctúria; hemofilia A leve/von Willebrand (injetável/nasal, hospitalar).",
    apres: [{ rotulo: "comprimido 0,1 mg", mgPorComp: 0.1 }, { rotulo: "comprimido 0,2 mg", mgPorComp: 0.2 }, { rotulo: "spray nasal 10 mcg/jato" }],
    adulto: "DI: 0,1–0,2 mg VO 2–3×/dia ou 10–20 mcg nasal 1–2×/dia · enurese: 0,2–0,4 mg VO ao deitar",
    renal: [{ abaixo: 50, texto: "Contraindicada (hiponatremia)." }],
    gestacao: { nivel: "cautela", texto: "Pode ser mantida no DI na gestação." },
    alergia: [], contra: ["Hiponatremia: restringir líquidos 1 h antes até 8 h após a dose (enurese); sódio em 3–7 dias", "Polidipsia primária, IC, uso de diurético", "Spray nasal NÃO para enurese (hiponatremia)", "Suspender se vômitos/diarreia ou febre"],
    prescrever: [
      { contexto: "Criança > 5 anos — enurese noturna", texto: "USO ORAL\n1. Desmopressina 0,2 mg ----------------- 30 comprimidos\n   Dar 1 comprimido 1 hora antes de deitar. Não beber líquidos 1 hora antes até 8 horas após a dose.\n   (Pode aumentar para 0,4 mg; reavaliar em 3 meses com pausa de 1 semana.)" },
      { contexto: "Adulto — diabetes insípido central", texto: "USO ORAL\n1. Desmopressina 0,1 mg ----------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n   (Ajustar pela diurese e sódio sérico.)" }
    ] },
  { id: "cabergolina", nomes: ["Cabergolina", "Dostinex"], classe: "hormonios", receita: "simples", tags: [],
    usos: "Hiperprolactinemia e prolactinoma (RENAME); inibição da lactação; acromegalia (adjuvante).",
    apres: [{ rotulo: "comprimido 0,5 mg", mgPorComp: 0.5 }],
    adulto: "Hiperprolactinemia: 0,25–0,5 mg VO 1×/semana (ou 2×/semana), aumentar 0,25–0,5 mg/semana a cada mês conforme prolactina (habitual até 2 mg/semana) · inibição da lactação: 1 mg dose única no 1º dia pós-parto",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Em geral suspender ao confirmar gestação (macroprolactinoma: conduta com endocrinologista)." },
    alergia: [], contra: ["Hipertensão não controlada, pré-eclâmpsia e psicose puerperal", "Fibrose valvar/pleural prévia (ecocardiograma em doses altas ou uso prolongado)", "Jogo/compulsão (agonista dopaminérgico)", "Não associar a antipsicóticos e metoclopramida (antagonismo)"],
    prescrever: [
      { contexto: "Adulto — hiperprolactinemia", texto: "USO ORAL\n1. Cabergolina 0,5 mg ------------------- 8 comprimidos\n   Tomar meio comprimido (0,25 mg) 2 vezes por semana (ex.: segunda e quinta), junto a uma refeição.\n   (Prolactina em 1 mês para ajuste.)" },
      { contexto: "Inibição da lactação (puerpério)", texto: "USO ORAL\n1. Cabergolina 0,5 mg ------------------- 2 comprimidos\n   Tomar 2 comprimidos (1 mg) de uma só vez, no 1º dia após o parto." }
    ] },

  /* ---------- osteoporose e metabolismo ósseo ---------- */
  { id: "alendronato", nomes: ["Alendronato", "alendronato de sódio", "Fosamax"], classe: "reumato", receita: "simples", tags: [],
    usos: "Osteoporose pós-menopausa, masculina e induzida por corticoide (RENAME).",
    apres: [{ rotulo: "comprimido 70 mg", mgPorComp: 70 }],
    adulto: "70 mg VO 1×/semana em jejum, com 1 copo cheio de água, permanecendo em pé/sentado por 30 min",
    renal: [{ abaixo: 35, texto: "Não recomendado." }],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação/lactação." },
    alergia: [], contra: ["Esofagite, estenose/acalasia, incapacidade de ficar em pé ou sentado 30 min", "Hipocalcemia (corrigir antes; repor cálcio e vitamina D)", "Osteonecrose de mandíbula: avaliação odontológica antes", "Reavaliar pausa após 5 anos"],
    prescrever: [
      { contexto: "Adulto — osteoporose", texto: "USO ORAL\n1. Alendronato de sódio 70 mg ------------ 4 comprimidos\n   Tomar 1 comprimido 1 vez por semana, em jejum, com 1 copo cheio de água.\n   Ficar em pé ou sentado e não comer nem tomar outros remédios por 30 minutos. Uso contínuo." }
    ] },
  { id: "risedronato", nomes: ["Risedronato", "risedronato sódico", "Actonel"], classe: "reumato", receita: "simples", tags: [],
    usos: "Osteoporose (alternativa ao alendronato).",
    apres: [{ rotulo: "comprimido 35 mg", mgPorComp: 35 }, { rotulo: "comprimido 150 mg", mgPorComp: 150 }],
    adulto: "35 mg VO 1×/semana ou 150 mg 1×/mês, em jejum, com água, em pé por 30 min",
    renal: [{ abaixo: 30, texto: "Não recomendado." }],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação/lactação." },
    alergia: [], contra: ["Doença esofágica", "Hipocalcemia", "Osteonecrose de mandíbula (avaliação odontológica)"],
    prescrever: [
      { contexto: "Adulto — osteoporose", texto: "USO ORAL\n1. Risedronato sódico 35 mg ------------- 4 comprimidos\n   Tomar 1 comprimido 1 vez por semana, em jejum, com 1 copo cheio de água; ficar em pé ou sentado por 30 minutos. Uso contínuo." }
    ] },
  { id: "acido-zoledronico", nomes: ["Ácido zoledrônico", "acido zoledronico", "zoledronato", "Aclasta"], classe: "reumato", receita: "simples", tags: [],
    usos: "Osteoporose com intolerância ou contraindicação a bifosfonato oral; doença de Paget (Aclasta 5 mg). Doses oncológicas (4 mg) seguem protocolo próprio.",
    adulto: "Osteoporose: 5 mg IV em ≥ 15 min, 1×/ano (em serviço de infusão)",
    renal: [{ abaixo: 35, texto: "Contraindicado." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado." },
    alergia: [], contra: ["Hipocalcemia (corrigir; vitamina D adequada antes)", "Hidratar antes; reação de fase aguda (febre, mialgia) nos 3 primeiros dias: paracetamol", "Osteonecrose de mandíbula (avaliação odontológica)", "Creatinina antes de cada dose"],
    prescrever: [
      { contexto: "Adulto — osteoporose (serviço de infusão)", texto: "Ácido zoledrônico 5 mg/100 mL — 1 frasco IV em no mínimo 15 minutos, dose única anual.\nHidratar com 500 mL de água VO ou SF 0,9% antes. Paracetamol se febre/mialgia nos 3 dias seguintes." }
    ] },
  { id: "denosumabe", nomes: ["Denosumabe", "denosumab", "Prolia"], classe: "reumato", receita: "simples", tags: [],
    usos: "Osteoporose de alto risco (inclusive com DRC); perda óssea por bloqueio hormonal.",
    adulto: "60 mg SC a cada 6 meses",
    renal: [{ abaixo: 30, texto: "Sem ajuste, mas risco alto de hipocalcemia grave: cálcio sérico em 2 semanas." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (contracepção até 5 meses após)." },
    alergia: [], contra: ["Hipocalcemia (corrigir antes; repor cálcio e vitamina D)", "NÃO atrasar nem suspender sem plano: perda óssea rebote e fraturas vertebrais múltiplas (fazer bifosfonato após)", "Osteonecrose de mandíbula, infecções de pele"],
    prescrever: [
      { contexto: "Adulto — osteoporose", texto: "USO SUBCUTÂNEO\n1. Denosumabe 60 mg/mL seringa preenchida --- 1 seringa\n   Aplicar 60 mg por via subcutânea a cada 6 meses (próxima dose em ___/___/___).\n   Manter cálcio e vitamina D." }
    ] },
  { id: "raloxifeno", nomes: ["Raloxifeno", "cloridrato de raloxifeno", "Evista"], classe: "hormonios", receita: "simples", tags: [],
    usos: "Osteoporose pós-menopausa (vertebral), com redução de câncer de mama invasivo.",
    apres: [{ rotulo: "comprimido 60 mg", mgPorComp: 60 }],
    adulto: "60 mg VO 1×/dia",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (somente pós-menopausa)." },
    alergia: [], contra: ["TEV atual/prévio (TVP, TEP, trombose de retina)", "Imobilização prolongada: suspender 72 h antes", "AVC prévio ou alto risco", "Fogachos e cãibras"],
    prescrever: [
      { contexto: "Mulher pós-menopausa — osteoporose", texto: "USO ORAL\n1. Raloxifeno 60 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "calcitriol", nomes: ["Calcitriol", "1,25-di-hidroxivitamina D", "Rocaltrol"], classe: "vitaminas", receita: "simples", tags: [],
    usos: "Hipoparatireoidismo, hiperparatireoidismo secundário da DRC, raquitismo dependente de vitamina D (RENAME).",
    apres: [{ rotulo: "cápsula 0,25 mcg" }],
    adulto: "0,25 mcg VO 1×/dia; ajustar 0,25 mcg a cada 2–4 semanas pelo cálcio sérico (habitual 0,5–1 mcg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar se indicado (hipoparatireoidismo), com cálcio monitorado." },
    alergia: [], contra: ["Hipercalcemia (dosar cálcio e fósforo semanalmente no ajuste)", "Não associar a outra vitamina D ativa", "Digoxina: risco de arritmia se hipercalcemia"],
    prescrever: [
      { contexto: "Adulto — hipoparatireoidismo / DRC", texto: "USO ORAL\n1. Calcitriol 0,25 mcg ------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia. Uso contínuo.\n   (Cálcio sérico em 1–2 semanas para ajuste.)" }
    ] },
  { id: "calcio-vitamina-d", nomes: ["Carbonato de cálcio + colecalciferol", "carbonato de calcio + vitamina D", "cálcio + vitamina D", "Os-Cal D", "Caltrate D"], classe: "vitaminas", receita: "simples", tags: ["calcio", "quelante"],
    usos: "Prevenção/tratamento de osteoporose com ingestão insuficiente de cálcio; associado a bifosfonato/denosumabe (RENAME: 500 mg + 400 UI).",
    apres: [{ rotulo: "comprimido 1.250 mg (500 mg de cálcio) + 400 UI" }],
    adulto: "500 mg de cálcio elementar + 400 UI VO 1–2×/dia, junto às refeições (completar até 1.000–1.200 mg/dia com a dieta)",
    renal: [{ abaixo: 30, texto: "Cautela (hipercalcemia); seguir nefrologia." }],
    gestacao: { nivel: "compativel", texto: "Compatível (prevenção de pré-eclâmpsia com baixa ingestão de cálcio)." },
    alergia: [], contra: ["Hipercalcemia, litíase renal cálcica recorrente", "Separar 2 h de levotiroxina, ferro e quinolonas/tetraciclinas", "Constipação"],
    prescrever: [
      { contexto: "Adulto — osteoporose", texto: "USO ORAL\n1. Carbonato de cálcio 1.250 mg + colecalciferol 400 UI ---- 60 comprimidos\n   Tomar 1 comprimido no almoço e 1 comprimido no jantar. Uso contínuo." }
    ] },

  /* ---------- andrógenos e obesidade ---------- */
  { id: "testosterona", nomes: ["Testosterona", "cipionato de testosterona", "undecilato de testosterona", "Deposteron", "Nebido", "Androgel"], classe: "hormonios", receita: "C1", tags: [],
    usos: "Hipogonadismo masculino confirmado (sintomas + testosterona baixa em 2 dosagens matinais). Anabolizante: lista C5.",
    adulto: "Cipionato 200 mg IM a cada 2–3 semanas · undecilato 1.000 mg IM (2ª dose em 6 semanas, depois a cada 10–14 semanas) · gel 1%: 50 mg/dia na pele",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (virilização fetal); evitar contato do gel com gestantes e crianças." },
    alergia: [], contra: ["Câncer de próstata ou mama masculino", "Hematócrito > 54% (monitorar Ht e PSA)", "Desejo de fertilidade (suprime espermatogênese)", "Apneia do sono grave não tratada, IC descompensada", "Receita de controle especial (lista C5) em 2 vias"],
    prescrever: [
      { contexto: "Adulto — hipogonadismo (cipionato)", texto: "USO INTRAMUSCULAR\n1. Cipionato de testosterona 200 mg/2 mL ---- 2 (duas) ampolas\n   Aplicar 1 ampola (200 mg) por via intramuscular profunda a cada 21 dias.\n   (Hematócrito e PSA em 3–6 meses e depois anualmente.)" }
    ] },
  { id: "orlistate", nomes: ["Orlistate", "orlistat", "Xenical"], classe: "diversos", receita: "simples", tags: [],
    usos: "Obesidade (IMC ≥ 30 ou ≥ 27 com comorbidade), associado a dieta.",
    apres: [{ rotulo: "cápsula 120 mg", mgPorComp: 120 }],
    adulto: "120 mg VO junto a cada refeição principal com gordura (até 3×/dia)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação." },
    alergia: [], contra: ["Síndrome de má absorção, colestase", "Esteatorreia e urgência fecal (piora com dieta gordurosa)", "Reduz absorção de vitaminas lipossolúveis (polivitamínico ao deitar), levotiroxina, anticonvulsivantes e ciclosporina"],
    prescrever: [
      { contexto: "Adulto — obesidade", texto: "USO ORAL\n1. Orlistate 120 mg ---------------------- 90 cápsulas\n   Tomar 1 cápsula junto ao café, ao almoço e ao jantar (pular a dose se a refeição não tiver gordura).\n   (Dieta com até 30% de gordura.)" }
    ] },
  { id: "sibutramina", nomes: ["Sibutramina", "cloridrato de sibutramina", "Reductil"], classe: "diversos", receita: "B1", tags: ["serotoninergico"],
    usos: "Obesidade (IMC ≥ 30) sem doença cardiovascular, quando outras medidas falharam. Lista B2 (notificação B + termo de responsabilidade).",
    apres: [{ rotulo: "cápsula 10 mg", mgPorComp: 10 }, { rotulo: "cápsula 15 mg", mgPorComp: 15 }],
    adulto: "10 mg VO 1×/dia pela manhã; 15 mg/dia se perda < 2 kg em 4 semanas",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada." },
    alergia: [], contra: ["Doença coronariana, IC, arritmia, AVC, doença arterial periférica, HAS não controlada (> 145/90)", "> 65 anos", "Uso de ISRS, IMAO, triptanos (síndrome serotoninérgica)", "Transtorno alimentar, psiquiátrico grave", "Suspender se perda < 2 kg em 4 semanas na dose máxima", "Notificação B2 + termo de responsabilidade do prescritor (RDC 50/2014)"],
    prescrever: [
      { contexto: "Adulto — obesidade", texto: "USO ORAL\n1. Sibutramina 10 mg ------------------- 30 (trinta) cápsulas\n   Tomar 1 cápsula pela manhã.\n   (Notificação B2 + termo de responsabilidade. Medir PA e FC a cada consulta.)" }
    ] },

  /* ---------- respiratório: broncodilatadores e associações inalatórias ---------- */
  { id: "fenoterol", nomes: ["Fenoterol", "bromidrato de fenoterol", "Berotec"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "Broncoespasmo (asma, DPOC) em nebulização; alternativa ao salbutamol (mais taquicardia).",
    adulto: "Nebulização: número de gotas conforme bula e peso, diluído em 3–5 mL de SF 0,9%, até 4/4h (crise: a cada 20 min na 1ª hora)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usado na crise; salbutamol tem mais dados. Inibe contrações uterinas." },
    alergia: [], contra: ["Taquiarritmia, cardiopatia isquêmica, hipertireoidismo", "Hipocalemia em doses repetidas", "Preferir salbutamol (mais seletivo)"],
    prescrever: [
      { contexto: "PS / domicílio — nebulização", texto: "USO INALATÓRIO\n1. Fenoterol 5 mg/mL solução para nebulização ---- 1 frasco\n   Nebulizar ___ gotas diluídas em 3 a 5 mL de soro fisiológico até de 4 em 4 horas, se falta de ar ou chiado.\n   (Número de gotas conforme bula/peso; procurar atendimento se não melhorar.)" }
    ] },
  { id: "formoterol", nomes: ["Formoterol", "fumarato de formoterol", "Foradil", "Fluir"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "DPOC (LABA isolado); asma SOMENTE associado a corticoide inalatório (RENAME: cápsula inalatória 12 mcg).",
    adulto: "12 mcg inalatório 12/12h (máx 24 mcg 12/12h)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser mantido se necessário (asma controlada é prioridade)." },
    alergia: [], contra: ["Asma: nunca em monoterapia (risco de morte) — sempre com corticoide inalatório", "Taquiarritmia, QT longo, hipocalemia", "A cápsula é para inalar no dispositivo, não engolir"],
    prescrever: [
      { contexto: "Adulto — DPOC", texto: "USO INALATÓRIO\n1. Formoterol 12 mcg cápsula inalatória + inalador ---- 60 cápsulas\n   Inalar o conteúdo de 1 cápsula de 12 em 12 horas, com o inalador. Não engolir a cápsula. Uso contínuo." }
    ] },
  { id: "salmeterol-fluticasona", nomes: ["Salmeterol + fluticasona", "fluticasona + salmeterol", "Seretide"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "Asma persistente moderada a grave; DPOC com exacerbações e eosinofilia.",
    adulto: "Diskus 50/100, 50/250 ou 50/500 mcg: 1 inalação 12/12h · spray 25/50, 25/125 ou 25/250 mcg: 2 jatos 12/12h",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Manter: asma controlada é prioridade; budesonida tem mais dados se iniciar." },
    alergia: [], contra: ["Não é medicação de resgate", "Enxaguar a boca após o uso (candidíase)", "DPOC: risco de pneumonia com corticoide inalatório", "Inibidores fortes de CYP3A4 (ritonavir): Cushing"],
    prescrever: [
      { contexto: "Adulto — asma persistente", texto: "USO INALATÓRIO\n1. Salmeterol 50 mcg + fluticasona 250 mcg pó inalatório ---- 1 dispositivo (60 doses)\n   Inalar 1 dose de 12 em 12 horas. Enxaguar a boca após o uso. Uso contínuo." }
    ] },
  { id: "formoterol-beclometasona", nomes: ["Formoterol + beclometasona", "beclometasona + formoterol", "Fostair", "Clenil Duo"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "Asma (manutenção e alívio — MART com 100/6) e DPOC.",
    adulto: "100/6 mcg: 1–2 jatos 12/12h (MART: +1 jato se sintomas, máx 8 jatos/dia) · DPOC: 2 jatos 12/12h",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Manter: asma controlada é prioridade." },
    alergia: [], contra: ["Enxaguar a boca após o uso", "Taquiarritmia, hipocalemia em doses altas"],
    prescrever: [
      { contexto: "Adulto — asma (manutenção e alívio)", texto: "USO INALATÓRIO\n1. Beclometasona 100 mcg + formoterol 6 mcg aerossol ---- 1 frasco (120 doses)\n2. Espaçador ----------------------------------------- 1 unidade\n   Inalar 1 jato de 12 em 12 horas e 1 jato extra se falta de ar (máximo 8 jatos por dia).\n   Enxaguar a boca após o uso. Uso contínuo." }
    ] },
  { id: "vilanterol-fluticasona", nomes: ["Furoato de fluticasona + vilanterol", "fluticasona + vilanterol", "vilanterol", "Relvar"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "Asma persistente e DPOC (dose única diária).",
    adulto: "100/25 ou 200/25 mcg: 1 inalação 1×/dia (DPOC: 100/25)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Manter se necessário; menos dados que budesonida." },
    alergia: [], contra: ["Não é medicação de resgate", "Enxaguar a boca após o uso", "DPOC: risco de pneumonia"],
    prescrever: [
      { contexto: "Adulto — asma / DPOC", texto: "USO INALATÓRIO\n1. Fluticasona 100 mcg + vilanterol 25 mcg pó inalatório ---- 1 dispositivo (30 doses)\n   Inalar 1 dose 1 vez ao dia, sempre no mesmo horário. Enxaguar a boca após o uso. Uso contínuo." }
    ] },
  { id: "tiotropio", nomes: ["Tiotrópio", "brometo de tiotrópio", "tiotropio", "Spiriva"], classe: "respiratorio", receita: "simples", tags: ["anticolinergico"],
    usos: "DPOC (LAMA de manutenção; PCDT/componente especializado); asma grave como adicional.",
    adulto: "Respimat 2,5 mcg/jato: 2 jatos 1×/dia (5 mcg)",
    renal: [{ abaixo: 50, texto: "Monitorar efeitos anticolinérgicos." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se o benefício compensar." },
    alergia: [], contra: ["Glaucoma de ângulo fechado (evitar contato com olhos)", "Retenção urinária / HPB", "Não associar a ipratrópio de manutenção"],
    prescrever: [
      { contexto: "Adulto — DPOC", texto: "USO INALATÓRIO\n1. Tiotrópio 2,5 mcg/jato solução para inalação (Respimat) ---- 1 frasco (60 jatos)\n   Inalar 2 jatos 1 vez ao dia, sempre no mesmo horário. Uso contínuo." }
    ] },
  { id: "umeclidinio-vilanterol", nomes: ["Umeclidínio + vilanterol", "umeclidinio + vilanterol", "Anoro"], classe: "respiratorio", receita: "simples", tags: ["beta2", "anticolinergico"],
    usos: "DPOC sintomática (LAMA + LABA em dose única diária).",
    adulto: "62,5/25 mcg: 1 inalação 1×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados." },
    alergia: [], contra: ["Não indicado para asma sem corticoide inalatório", "Glaucoma de ângulo fechado, retenção urinária", "Taquiarritmia"],
    prescrever: [
      { contexto: "Adulto — DPOC", texto: "USO INALATÓRIO\n1. Umeclidínio 62,5 mcg + vilanterol 25 mcg pó inalatório ---- 1 dispositivo (30 doses)\n   Inalar 1 dose 1 vez ao dia. Uso contínuo." }
    ] },
  { id: "indacaterol-glicopirronio", nomes: ["Indacaterol + glicopirrônio", "glicopirrônio + indacaterol", "glicopirronio", "Ultibro"], classe: "respiratorio", receita: "simples", tags: ["beta2", "anticolinergico"],
    usos: "DPOC sintomática (LABA + LAMA 1×/dia).",
    adulto: "110/50 mcg: inalar 1 cápsula 1×/dia",
    renal: [{ abaixo: 30, texto: "Cautela (glicopirrônio acumula)." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados." },
    alergia: [], contra: ["Não indicado para asma", "Glaucoma de ângulo fechado, retenção urinária", "Cápsula é para inalar, não engolir"],
    prescrever: [
      { contexto: "Adulto — DPOC", texto: "USO INALATÓRIO\n1. Indacaterol 110 mcg + glicopirrônio 50 mcg cápsula inalatória + inalador ---- 30 cápsulas\n   Inalar o conteúdo de 1 cápsula 1 vez ao dia, com o inalador. Não engolir. Uso contínuo." }
    ] },
  { id: "indacaterol", nomes: ["Indacaterol", "maleato de indacaterol", "Onbrize"], classe: "respiratorio", receita: "simples", tags: ["beta2"],
    usos: "DPOC (LABA 1×/dia).",
    adulto: "150 mcg inalar 1 cápsula 1×/dia (máx 300 mcg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados." },
    alergia: [], contra: ["Asma: não usar sem corticoide inalatório", "Taquiarritmia, hipocalemia", "Tosse logo após a inalação é comum"],
    prescrever: [
      { contexto: "Adulto — DPOC", texto: "USO INALATÓRIO\n1. Indacaterol 150 mcg cápsula inalatória + inalador ---- 30 cápsulas\n   Inalar o conteúdo de 1 cápsula 1 vez ao dia. Não engolir. Uso contínuo." }
    ] },
  { id: "teofilina", nomes: ["Teofilina", "Teolong", "Talofilina"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "DPOC e asma (adicional, quando outras opções não estão disponíveis); janela terapêutica estreita.",
    apres: [{ rotulo: "cápsula liberação prolongada 100 mg", mgPorComp: 100 }, { rotulo: "cápsula liberação prolongada 200 mg", mgPorComp: 200 }, { rotulo: "cápsula liberação prolongada 300 mg", mgPorComp: 300 }],
    adulto: "Liberação prolongada 200–300 mg VO 12/12h; ajustar por nível sérico (alvo 5–15 mcg/mL)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada com nível sérico (depuração muda no 3º trimestre)." },
    alergia: [], contra: ["Arritmias, convulsões, úlcera péptica", "Nível aumenta com ciprofloxacino, claritromicina/eritromicina, fluvoxamina, cimetidina, IC e hepatopatia; cai com tabagismo, carbamazepina, fenitoína, rifampicina", "Toxicidade: náusea, taquicardia, convulsão"],
    prescrever: [
      { contexto: "Adulto — DPOC", texto: "USO ORAL\n1. Teofilina 200 mg cápsula de liberação prolongada ---- 60 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, sem abrir ou mastigar. Uso contínuo.\n   (Nível sérico se sintomas de toxicidade ou interação.)" }
    ] },
  { id: "aminofilina", nomes: ["Aminofilina"], classe: "respiratorio", receita: "hospitalar", tags: [],
    usos: "Broncoespasmo grave refratário a beta-2, ipratrópio, corticoide e magnésio (terceira linha); apneia da prematuridade (protocolo neonatal).",
    apres: [{ rotulo: "ampola 24 mg/mL (240 mg/10 mL)", mgPorMl: 24 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "Ataque 5 mg/kg IV em 20–30 min (sem uso prévio de teofilina) · manutenção 0,5 mg/kg/h (idoso, IC, hepatopatia: 0,25 mg/kg/h)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar se necessário, com monitorização." },
    alergia: [], contra: ["Uso prévio de teofilina: não fazer ataque sem nível sérico", "Arritmias, convulsões", "Interações: ciprofloxacino, macrolídeos (aumentam o nível)", "Infusão rápida: arritmia e parada"],
    prescrever: [
      { contexto: "PS — broncoespasmo grave (adulto)", texto: "Aminofilina 24 mg/mL — ___ mL (5 mg/kg) + SG 5% ou SF 0,9% 100 mL IV em 20–30 min (ataque).\nManutenção: 0,5 mg/kg/h em bomba de infusão. Monitorização cardíaca; nível sérico em 12–24 h." }
    ] },
  { id: "roflumilaste", nomes: ["Roflumilaste", "roflumilast", "Daxas"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "DPOC grave com bronquite crônica e exacerbações frequentes apesar de terapia inalatória tripla.",
    apres: [{ rotulo: "comprimido 500 mcg" }],
    adulto: "500 mcg VO 1×/dia (pode iniciar 250 mcg/dia por 4 semanas para tolerância)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Não usar na gestação/lactação." },
    alergia: [], contra: ["Hepatopatia moderada/grave", "Depressão/ideação suicida", "Perda de peso, diarreia, náusea (pesar o paciente)", "Indutores (rifampicina, carbamazepina) reduzem efeito"],
    prescrever: [
      { contexto: "Adulto — DPOC grave", texto: "USO ORAL\n1. Roflumilaste 500 mcg ------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo." }
    ] },

  /* ---------- respiratório: mucolíticos e antitussígenos ---------- */
  { id: "acebrofilina", nomes: ["Acebrofilina", "Brondilat", "Filinar"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Expectorante/broncodilatador leve em bronquite com secreção (benefício modesto).",
    adulto: "100 mg VO 12/12h (xarope adulto 50 mg/5 mL: 10 mL 12/12h)",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar (dados insuficientes)." },
    alergia: [], contra: ["< 2 anos", "Úlcera péptica ativa, arritmias, epilepsia (derivado de teofilina)", "Criança: dose por peso conforme bula do xarope pediátrico"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Acebrofilina xarope adulto 50 mg/5 mL ---- 1 frasco\n   Tomar 10 mL de 12 em 12 horas por até 7 dias." }
    ] },
  { id: "ambroxol", nomes: ["Ambroxol", "cloridrato de ambroxol", "Mucosolvan"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Mucolítico em secreção espessa (bronquite); pastilha para dor de garganta. Benefício clínico modesto.",
    ped: { dose: 1.5, faixa: "1,2–1,6 mg/kg/dia ÷ 3", porDia: true, divisoes: 3, intervalo: "8/8h", maxDose: 30, maxDia: 90, idadeMin: "≥ 2 anos" },
    apres: [{ rotulo: "xarope pediátrico 15 mg/5 mL (3 mg/mL)", mgPorMl: 3 }, { rotulo: "xarope adulto 30 mg/5 mL (6 mg/mL)", mgPorMl: 6 }],
    adulto: "30 mg VO 8/8h (xarope adulto 30 mg/5 mL: 5 mL 8/8h)",
    renal: [{ abaixo: 30, texto: "Cautela (acúmulo de metabólitos)." }],
    gestacao: { nivel: "evitar", texto: "Evitar no 1º trimestre." },
    alergia: [], contra: ["< 2 anos", "Reações cutâneas graves (raras): suspender se exantema", "Não associar a antitussígeno (retém secreção)"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Ambroxol xarope adulto 30 mg/5 mL ------- 1 frasco\n   Tomar 5 mL de 8 em 8 horas por até 7 dias.\n   Beber bastante água." },
      { contexto: "Criança ≥ 2 anos", texto: "USO ORAL\n1. Ambroxol xarope pediátrico 15 mg/5 mL ---- 1 frasco\n   Dar ___ mL de 8 em 8 horas por até 5 dias.\n   (1,2–1,6 mg/kg/dia ÷ 3; 2–5 anos ≈ 2,5 mL/dose; 6–12 anos ≈ 5 mL/dose.)" }
    ] },
  { id: "dextrometorfano", nomes: ["Dextrometorfano", "bromidrato de dextrometorfano", "Silencium"], classe: "respiratorio", receita: "simples", tags: ["serotoninergico"],
    usos: "Tosse seca irritativa incômoda (sintomático, curto prazo).",
    adulto: "10–20 mg VO 4/4h ou 30 mg 6/6–8/8h (máx 120 mg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Uso pontual aceitável; evitar formulações com álcool." },
    alergia: [], contra: ["< 6 anos (sem benefício, risco)", "Uso de IMAO (contraindicado) e ISRS/IRSN (síndrome serotoninérgica)", "Tosse produtiva, asma", "Potencial de abuso em doses altas"],
    prescrever: [
      { contexto: "Adulto — tosse seca", texto: "USO ORAL\n1. Dextrometorfano xarope ------------------ 1 frasco\n   Tomar a dose de adulto da bula (15–30 mg) de 6 em 6 horas ou de 8 em 8 horas, se tosse seca, por até 5 dias." }
    ] },
  { id: "levodropropizina", nomes: ["Levodropropizina", "Antux", "Zyplo"], classe: "respiratorio", receita: "simples", tags: [],
    usos: "Tosse seca irritativa (antitussígeno periférico, menos sedativo).",
    adulto: "60 mg VO até 8/8h (xarope 6 mg/mL: 10 mL), intervalo mínimo de 6 h, por até 7 dias",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação e lactação (bula)." },
    alergia: [], contra: ["< 2 anos", "Tosse produtiva, broncorreia", "Hepatopatia grave", "Criança: dose por peso conforme bula"],
    prescrever: [
      { contexto: "Adulto — tosse seca", texto: "USO ORAL\n1. Levodropropizina xarope 6 mg/mL -------- 1 frasco\n   Tomar 10 mL de 8 em 8 horas, se tosse seca, por até 7 dias." }
    ] },

]);
