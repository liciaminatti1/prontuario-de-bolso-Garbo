/* Medicamentos: Emergência/hospitalar, anestésicos, antídotos, soluções, contraceptivos, urologia, imunologia e outros.
   Formato em docs/ESQUEMA-MEDICAMENTOS.md. CONFERIR SEMPRE com a bula e o protocolo local. */

adicionarMedicamentos([
  /* ---------- vasoativos e inotrópicos ---------- */
  { id: "dobutamina", nomes: ["Dobutamina", "cloridrato de dobutamina", "dobutrex"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Choque cardiogênico e IC descompensada com baixo débito; choque séptico com disfunção miocárdica (associada à noradrenalina)",
    apres: [{ rotulo: "ampola 12,5 mg/mL (20 mL = 250 mg)", mgPorMl: 12.5 }],
    adulto: "2,5–20 mcg/kg/min IV em bomba de infusão, titulando por perfusão e débito",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar quando indicada; benefício materno supera o risco." },
    alergia: [], contra: ["Hipotensão: pode piorar (vasodilatação) — associar vasopressor", "Taquiarritmias e isquemia miocárdica", "Cardiomiopatia hipertrófica obstrutiva", "Corrigir hipovolemia antes"],
    prescrever: [
      { contexto: "Hospitalar — solução padrão", texto: "Dobutamina 12,5 mg/mL — 1 ampola (250 mg = 20 mL) + SG 5% 230 mL = 250 mL (1.000 mcg/mL).\nIV em bomba de infusão: iniciar 2,5–5 mcg/kg/min e titular até 20 mcg/kg/min.\nmL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ 1.000. Monitor cardíaco." }
    ] },
  { id: "dopamina", nomes: ["Dopamina", "cloridrato de dopamina", "revivan"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Bradicardia sintomática refratária à atropina; choque (2ª linha — noradrenalina é preferida)",
    apres: [{ rotulo: "ampola 5 mg/mL (10 mL = 50 mg)", mgPorMl: 5 }],
    adulto: "5–20 mcg/kg/min IV em bomba de infusão",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar quando indicada; pode reduzir o fluxo uteroplacentário." },
    alergia: [], contra: ["Mais arritmias que a noradrenalina no choque", "Feocromocitoma", "Taquiarritmias não corrigidas", "Extravasamento: necrose (preferir acesso central)", "Dose 'dopaminérgica renal' não protege o rim"],
    prescrever: [
      { contexto: "Hospitalar — solução padrão", texto: "Dopamina 5 mg/mL — 5 ampolas (250 mg = 50 mL) + SG 5% 200 mL = 250 mL (1.000 mcg/mL).\nIV em bomba de infusão: 5–20 mcg/kg/min, titular por FC e PA.\nmL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ 1.000. Monitor cardíaco." }
    ] },
  { id: "vasopressina", nomes: ["Vasopressina", "encrise"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Choque séptico: 2º vasopressor associado à noradrenalina (poupa catecolamina); diabetes insípido central",
    adulto: "Choque: 0,03 UI/min IV contínua (dose fixa, até 0,04 UI/min)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode causar contrações uterinas; usar no choque se necessário." },
    alergia: [], contra: ["Isquemia mesentérica, digital e miocárdica", "Hiponatremia", "Não é titulada como a noradrenalina: dose fixa"],
    prescrever: [
      { contexto: "Choque séptico — associada à noradrenalina", texto: "Vasopressina 20 UI/mL — 1 ampola (20 UI) + SF 0,9% 100 mL (0,2 UI/mL).\nIV em bomba de infusão a 9 mL/h (0,03 UI/min), dose fixa.\nIniciar quando a noradrenalina estiver em dose moderada/alta; desligar antes da noradrenalina no desmame." }
    ] },
  { id: "efedrina", nomes: ["Efedrina", "sulfato de efedrina"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Hipotensão transitória (raquianestesia, indução anestésica, sedação), especialmente com bradicardia",
    adulto: "5–10 mg IV em bolus, repetir a cada 3–5 min conforme PA (máx habitual 50 mg)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usada na hipotensão da raquianestesia para cesárea." },
    alergia: [], contra: ["Taquiarritmias, cardiopatia isquêmica", "IMAO (crise hipertensiva)", "Taquifilaxia com doses repetidas"],
    prescrever: [
      { contexto: "Hospitalar — bolus diluído", texto: "Efedrina 50 mg/mL — 1 mL + SF 0,9% 9 mL (5 mg/mL).\nAplicar 1–2 mL (5–10 mg) IV em bolus se PAS < 90 mmHg; repetir a cada 3–5 min se necessário." }
    ] },
  { id: "fenilefrina", nomes: ["Fenilefrina", "cloridrato de fenilefrina"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Hipotensão por vasodilatação (anestesia, sedação), sobretudo com taquicardia; vasopressor alfa puro",
    adulto: "50–100 mcg IV em bolus, repetir conforme PA; infusão contínua titulada pela PAM",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Vasopressor preferido na hipotensão da raquianestesia para cesárea." },
    alergia: [], contra: ["Bradicardia reflexa", "Choque cardiogênico (aumenta pós-carga)", "IMAO", "Extravasamento: necrose"],
    prescrever: [
      { contexto: "Hospitalar — bolus diluído", texto: "Fenilefrina 10 mg/mL — 1 mL (10 mg) + SF 0,9% 99 mL (100 mcg/mL).\nAplicar 0,5–1 mL (50–100 mcg) IV em bolus se hipotensão; repetir a cada 2–5 min conforme PA." },
      { contexto: "Hospitalar — infusão contínua", texto: "Fenilefrina 10 mg/mL — diluir em SF 0,9% ou SG 5% conforme protocolo do serviço.\nIV em bomba de infusão, titular pela PAM (conferir dose na bula)." }
    ] },
  { id: "milrinona", nomes: ["Milrinona", "lactato de milrinona", "primacor"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "IC descompensada com baixo débito (inodilatador), sobretudo em uso de betabloqueador ou hipertensão pulmonar",
    adulto: "0,375–0,75 mcg/kg/min IV contínua (ataque de 50 mcg/kg em 10 min é opcional e costuma ser omitido)",
    renal: [{ abaixo: 50, texto: "Excreção renal: reduzir a dose de manutenção (conferir tabela da bula) e vigiar hipotensão/arritmia." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se benefício materno claro." },
    alergia: [], contra: ["Hipotensão (vasodilatador)", "Arritmias ventriculares", "Estenose aórtica/pulmonar grave, CMH obstrutiva"],
    prescrever: [
      { contexto: "Hospitalar — solução padrão", texto: "Milrinona 1 mg/mL — 20 mL (20 mg) + SG 5% 80 mL = 100 mL (200 mcg/mL).\nIV em bomba de infusão: 0,375–0,75 mcg/kg/min.\nmL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ 200. Monitor cardíaco e PA invasiva se possível." }
    ] },
  { id: "nitroprussiato", nomes: ["Nitroprussiato de sódio", "nitroprussiato", "nipride"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Emergência hipertensiva (EAP, dissecção de aorta com betabloqueador), IC aguda com pós-carga elevada",
    adulto: "0,3–0,5 mcg/kg/min IV, titular a cada 5 min até 10 mcg/kg/min (doses altas por pouco tempo)",
    renal: [{ abaixo: 30, texto: "Acúmulo de tiocianato: limitar dose e duração; monitorar toxicidade." }],
    gestacao: { nivel: "evitar", texto: "Risco de toxicidade fetal por cianeto; usar só se refratária a outras opções e por pouco tempo." },
    alergia: [], contra: ["Toxicidade por cianeto/tiocianato (acidose lática, confusão): doses altas, uso > 24–48 h, IR/IH", "Hipertensão intracraniana", "Proteger da luz (frasco e equipo)", "Exige PA invasiva ou medida a cada 5 min"],
    prescrever: [
      { contexto: "Hospitalar — solução padrão", texto: "Nitroprussiato de sódio 25 mg/mL — 1 ampola (50 mg = 2 mL) + SG 5% 248 mL (200 mcg/mL).\nIV em bomba de infusão: iniciar 0,3–0,5 mcg/kg/min e titular a cada 5 min pela PA.\nmL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ 200. Frasco e equipo protegidos da luz.\nMeta habitual: reduzir PA média ≤ 25% na 1ª hora (dissecção: PAS < 120 em 20 min, com betabloqueador antes)." }
    ] },
  { id: "esmolol", nomes: ["Esmolol", "cloridrato de esmolol", "brevibloc"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Controle rápido de FC: dissecção de aorta, taquiarritmias supraventriculares, hipertensão perioperatória (betabloqueador de ação curtíssima)",
    adulto: "Ataque 500 mcg/kg em 1 min; manutenção 50 mcg/kg/min, aumentar 50 a cada 4 min até 300 mcg/kg/min",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode causar bradicardia fetal; usar se necessário, com monitorização." },
    alergia: [], contra: ["Bradicardia, BAV 2º/3º grau", "IC descompensada / choque cardiogênico", "Broncoespasmo grave", "Cocaína/anfetamina sem vasodilatador associado", "Conferir apresentação: 10 mg/mL (pronta) ou 250 mg/mL (concentrada, diluir)"],
    prescrever: [
      { contexto: "Hospitalar — ataque + infusão", texto: "Esmolol 10 mg/mL — ataque 0,5 mg/kg (0,05 mL/kg) IV em 1 min.\nManutenção: solução 10 mg/mL (pronta, ou 2.500 mg + SF 0,9% até 250 mL) IV em bomba de infusão, 50 mcg/kg/min;\naumentar 50 mcg/kg/min a cada 4 min (com novo ataque se preciso) até 300 mcg/kg/min.\nmL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ 10.000." }
    ] },

  /* ---------- antiarrítmicos e eletrólitos ---------- */
  { id: "adenosina", nomes: ["Adenosina", "adenocard"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Taquicardia supraventricular paroxística (TRN/TRAV) estável após manobra vagal; diagnóstico de taquicardia de QRS estreito",
    ped: { dose: 0.1, faixa: "0,1 mg/kg IV rápido (2ª dose 0,2 mg/kg, máx 12 mg)", intervalo: "dose única; repetir conforme o ritmo", maxDose: 6 },
    apres: [{ rotulo: "ampola 3 mg/mL (2 mL = 6 mg)", mgPorMl: 3 }],
    adulto: "6 mg IV em bolus rápido + flush 20 mL SF; se não reverter, 12 mg (pode repetir 12 mg 1 vez)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Droga de escolha para TSV na gestação (meia-vida de segundos)." },
    alergia: [], contra: ["Asma/broncoespasmo grave", "BAV 2º/3º grau ou doença do nó sinusal sem marca-passo", "FA pré-excitada (WPW) e taquicardia de QRS largo irregular", "Dipiridamol e carbamazepina potencializam (reduzir a dose); teofilina/cafeína reduzem o efeito", "Avisar o paciente: sensação de morte iminente por segundos"],
    prescrever: [
      { contexto: "PS — TSV (adulto)", texto: "Adenosina 3 mg/mL — 2 mL (6 mg) IV em bolus rápido em veia antecubital, seguido de 20 mL de SF 0,9% em flush e elevação do braço.\nSe não reverter em 1–2 min: 4 mL (12 mg) da mesma forma; pode repetir 12 mg mais 1 vez.\nMonitor e registro do ritmo durante a aplicação; desfibrilador disponível." },
      { contexto: "PS — TSV (criança)", texto: "Adenosina 3 mg/mL — ___ mL IV em bolus rápido + flush de SF 0,9% 5–10 mL (técnica de 2 seringas).\n(0,1 mg/kg, máx 6 mg; 2ª dose 0,2 mg/kg, máx 12 mg.)" }
    ] },
  { id: "cloreto-calcio", nomes: ["Cloreto de cálcio", "cloreto de calcio", "CaCl2"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Hipercalemia com alteração no ECG, hipocalcemia grave, intoxicação por bloqueador de canal de cálcio, PCR com hipercalemia/hipocalcemia",
    ped: { dose: 20, faixa: "20 mg/kg (0,2 mL/kg da solução 10%) IV lento", intervalo: "dose única; repetir conforme ECG", maxDose: 1000 },
    apres: [{ rotulo: "ampola 10% (100 mg/mL; 10 mL = 1 g ≈ 13,6 mEq de Ca)", mgPorMl: 100 }],
    adulto: "500 mg–1 g (5–10 mL a 10%) IV lento em 5–10 min (PCR: 1 g em bolus)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usar quando indicado." },
    alergia: [], contra: ["3× mais cálcio elementar que o gluconato: preferir veia central (extravasamento causa necrose)", "Intoxicação digitálica (relativa)", "Não misturar com bicarbonato (precipita)"],
    prescrever: [
      { contexto: "Hipercalemia com ECG alterado / intox. por BCC", texto: "Cloreto de cálcio 10% — 10 mL (1 g) IV lento em 5–10 min, de preferência em veia central, com monitor cardíaco.\nRepetir se o ECG continuar alterado. Associar insulina + glicose na hipercalemia." },
      { contexto: "Criança", texto: "Cloreto de cálcio 10% — ___ mL IV lento em 5–10 min, em veia calibrosa/central.\n(20 mg/kg = 0,2 mL/kg; máximo 1 g = 10 mL.)" }
    ] },

  /* ---------- sedação, analgesia e intubação ---------- */
  { id: "cetamina", nomes: ["Cetamina", "ketamina", "escetamina", "ketalar", "ketamin"], classe: "emergencia", receita: "hospitalar", tags: ["sedativo"],
    usos: "Indução para IOT (sobretudo em choque e broncoespasmo), sedação para procedimento, analgesia em dose baixa, asma grave refratária",
    ped: { dose: 1.5, faixa: "IOT/sedação: 1–2 mg/kg IV (IM: 4–5 mg/kg)", intervalo: "dose única; repetir 0,5 mg/kg se necessário", maxDose: 200 },
    apres: [{ rotulo: "frasco 50 mg/mL (racêmica ou escetamina)", mgPorMl: 50 }],
    adulto: "IOT: 1–2 mg/kg IV · sedação: 1 mg/kg IV ou 4–5 mg/kg IM · analgesia: 0,1–0,3 mg/kg IV",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usada em indução anestésica obstétrica; evitar doses altas (aumenta tônus uterino)." },
    alergia: [], contra: ["Escetamina (S+) é ~2× mais potente: usar cerca de metade da dose da racêmica", "HAS grave não controlada, dissecção de aorta, SCA", "Psicose", "Reação de emergência (agitação ao despertar): ambiente calmo; midazolam se intensa", "Hipersalivação e laringoespasmo (raro)", "Substância da lista C1 (Portaria 344): controle de estoque"],
    prescrever: [
      { contexto: "IOT — sequência rápida", texto: "Cetamina 50 mg/mL — 1,5 mg/kg IV em bolus (ex.: 70 kg = 105 mg = 2,1 mL).\nEscetamina: 0,75–1 mg/kg. Seguido de bloqueador neuromuscular." },
      { contexto: "Sedação para procedimento", texto: "Cetamina 50 mg/mL — 1 mg/kg IV lento em 1 min; repetir 0,5 mg/kg a cada 5–10 min se necessário.\nSem acesso: 4–5 mg/kg IM. Monitorizar SpO2, PA e FC; jejum e material de via aérea." },
      { contexto: "Analgesia (dose subdissociativa)", texto: "Cetamina 50 mg/mL — 0,1–0,3 mg/kg diluída em SF 0,9% 100 mL IV em 10–15 min." }
    ] },
  { id: "etomidato", nomes: ["Etomidato", "hypnomidate"], classe: "emergencia", receita: "hospitalar", tags: ["sedativo"],
    usos: "Indução para IOT em paciente hemodinamicamente instável",
    ped: { dose: 0.3, faixa: "0,3 mg/kg IV", intervalo: "dose única", maxDose: 40 },
    apres: [{ rotulo: "ampola 2 mg/mL (10 mL = 20 mg)", mgPorMl: 2 }],
    adulto: "0,3 mg/kg IV em bolus (dose única)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Uso em dose única na indução é aceitável." },
    alergia: [], contra: ["Supressão adrenal transitória: evitar doses repetidas e infusão contínua", "Mioclonias e dor à injeção", "Não tem efeito analgésico"],
    prescrever: [
      { contexto: "IOT — sequência rápida", texto: "Etomidato 2 mg/mL — 0,3 mg/kg IV em bolus (ex.: 70 kg = 20 mg = 10 mL).\nSeguido de bloqueador neuromuscular." }
    ] },
  { id: "propofol", nomes: ["Propofol", "diprivan", "provive"], classe: "emergencia", receita: "hospitalar", tags: ["sedativo"],
    usos: "Indução anestésica e IOT (paciente estável), sedação contínua em ventilação mecânica, sedação para procedimento, estado de mal refratário",
    apres: [{ rotulo: "emulsão 1% (10 mg/mL)", mgPorMl: 10 }, { rotulo: "emulsão 2% (20 mg/mL)", mgPorMl: 20 }],
    adulto: "IOT: 1,5–2,5 mg/kg IV (idoso/instável: 0,5–1 mg/kg) · sedação contínua: 0,3–3 mg/kg/h",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Uso em anestesia obstétrica é aceito; atravessa a placenta." },
    alergia: [], contra: ["Hipotensão e depressão miocárdica (cuidado no choque)", "Síndrome de infusão do propofol: evitar > 4 mg/kg/h por > 48 h", "Hipertrigliceridemia e pancreatite (emulsão lipídica): dosar TG em uso prolongado", "Alergia a ovo/soja: conferir bula", "Técnica asséptica: trocar frasco e equipo a cada 12 h"],
    prescrever: [
      { contexto: "IOT / indução", texto: "Propofol 1% (10 mg/mL) — 1,5–2,5 mg/kg IV em 20–30 s (ex.: 70 kg = 100–150 mg = 10–15 mL).\nIdoso, choque ou cardiopata: 0,5–1 mg/kg ou preferir cetamina/etomidato." },
      { contexto: "Sedação contínua em VM", texto: "Propofol 1% (10 mg/mL) — puro, IV em bomba de infusão: iniciar 0,3–0,5 mg/kg/h e titular até 3 mg/kg/h pela escala RASS.\nmL/h = dose (mg/kg/h) × peso ÷ 10. Trocar frasco e equipo a cada 12 h." }
    ] },
  { id: "succinilcolina", nomes: ["Succinilcolina", "suxametônio", "suxametonio", "quelicin", "succitrat"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Bloqueio neuromuscular despolarizante de início rápido e curta duração para IOT em sequência rápida",
    ped: { dose: 2, faixa: "Lactente: 2 mg/kg IV · criança maior: 1–1,5 mg/kg (IM: 4 mg/kg)", intervalo: "dose única", maxDose: 150 },
    adulto: "1–1,5 mg/kg IV em bolus (dose única)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usada na anestesia obstétrica." },
    alergia: [], contra: ["Hipercalemia ou risco (DRC com K alto, rabdomiólise)", "Queimadura, trauma por esmagamento, AVC ou lesão medular após 24–72 h", "Doença neuromuscular/miopatias, imobilização prolongada", "História pessoal/familiar de hipertermia maligna", "Deficiência de pseudocolinesterase (bloqueio prolongado)", "Bradicardia em crianças e na 2ª dose: atropina disponível"],
    prescrever: [
      { contexto: "IOT — sequência rápida", texto: "Succinilcolina 100 mg (frasco-ampola) — reconstituir em 10 mL de água para injeção (10 mg/mL).\nAplicar 1,5 mg/kg IV em bolus (ex.: 70 kg = 100 mg = 10 mL), após o indutor.\nContraindicada: aplicar rocurônio 1,2 mg/kg." }
    ] },
  { id: "rocuronio", nomes: ["Rocurônio", "rocuronio", "brometo de rocurônio", "esmeron"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Bloqueio neuromuscular não despolarizante para IOT (sequência rápida em dose alta) e manutenção da curarização",
    ped: { dose: 1, faixa: "IOT: 0,6–1,2 mg/kg IV", intervalo: "dose única; manutenção 0,1–0,2 mg/kg", maxDose: 100 },
    apres: [{ rotulo: "frasco 10 mg/mL (5 mL = 50 mg)", mgPorMl: 10 }],
    adulto: "Sequência rápida: 1,2 mg/kg IV · IOT eletiva: 0,6 mg/kg · manutenção: 0,1–0,2 mg/kg",
    renal: [{ abaixo: 30, texto: "Duração pode ser prolongada; monitorar bloqueio (TOF)." }],
    gestacao: { nivel: "compativel", texto: "Usado em anestesia obstétrica." },
    alergia: [], contra: ["Paciente sem sedação adequada (paralisia consciente)", "Ventilação assegurada antes: não há reversão rápida sem sugamadex", "Anafilaxia a bloqueadores neuromusculares", "Conservar refrigerado (validade menor fora da geladeira)"],
    prescrever: [
      { contexto: "IOT — sequência rápida", texto: "Rocurônio 10 mg/mL — 1,2 mg/kg IV em bolus (ex.: 70 kg = 84 mg = 8,4 mL), após o indutor.\nManter sedação contínua após a IOT. Reversão: sugamadex." }
    ] },
  { id: "cisatracurio", nomes: ["Cisatracúrio", "cisatracurio", "besilato de cisatracúrio", "nimbium"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Bloqueio neuromuscular em IOT eletiva e infusão contínua na UTI (SDRA grave), sobretudo em insuficiência renal/hepática",
    apres: [{ rotulo: "ampola 2 mg/mL", mgPorMl: 2 }],
    adulto: "IOT: 0,15–0,2 mg/kg IV · infusão: 1–3 mcg/kg/min, titulada por TOF",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; uso em anestesia quando indicado." },
    alergia: [], contra: ["Início de ação lento: não é ideal para sequência rápida", "Usar sempre com sedação e analgesia profundas", "Miopatia do doente crítico com uso prolongado + corticoide", "Conservar refrigerado"],
    prescrever: [
      { contexto: "IOT eletiva", texto: "Cisatracúrio 2 mg/mL — 0,15–0,2 mg/kg IV em bolus (ex.: 70 kg = 10,5–14 mg = 5–7 mL)." },
      { contexto: "UTI — infusão contínua", texto: "Cisatracúrio 2 mg/mL — 50 mL (100 mg) puro em seringa de 50 mL (2 mg/mL).\nIV em bomba de infusão: 1–3 mcg/kg/min, titulado por TOF (alvo 1–2 respostas) e pela ventilação.\nmL/h = dose (mcg/kg/min) × peso × 60 ÷ 2.000. Sedação profunda obrigatória." }
    ] },
  { id: "vecuronio", nomes: ["Vecurônio", "vecuronio", "brometo de vecurônio"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Bloqueio neuromuscular não despolarizante para IOT eletiva e manutenção anestésica",
    adulto: "0,08–0,1 mg/kg IV (manutenção 0,01–0,015 mg/kg)",
    renal: [{ abaixo: 30, texto: "Metabólito ativo acumula: bloqueio prolongado; monitorar TOF." }],
    gestacao: { nivel: "cautela", texto: "Uso em anestesia quando indicado." },
    alergia: [], contra: ["Início lento para sequência rápida (preferir rocurônio ou succinilcolina)", "Usar sempre com sedação adequada", "Reversível com sugamadex (menos eficaz que para rocurônio) ou neostigmina"],
    prescrever: [
      { contexto: "IOT eletiva", texto: "Vecurônio 10 mg (frasco-ampola) — reconstituir em 10 mL de água para injeção (1 mg/mL).\nAplicar 0,1 mg/kg IV em bolus (ex.: 70 kg = 7 mg = 7 mL)." }
    ] },
  { id: "sugamadex", nomes: ["Sugamadex", "sugamadeque", "bridion"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão do bloqueio neuromuscular por rocurônio ou vecurônio (inclusive bloqueio profundo e 'não intubo, não ventilo')",
    apres: [{ rotulo: "frasco 100 mg/mL (2 mL = 200 mg; 5 mL = 500 mg)", mgPorMl: 100 }],
    adulto: "2 mg/kg (bloqueio moderado) · 4 mg/kg (profundo) · 16 mg/kg (reversão imediata após rocurônio 1,2 mg/kg)",
    renal: [{ abaixo: 30, texto: "Não recomendado na IR grave (ClCr < 30): eliminação renal do complexo." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se necessário." },
    alergia: [], contra: ["Não reverte succinilcolina nem benzilisoquinolínicos (cisatracúrio)", "Reduz o efeito de contraceptivo hormonal: orientar método de barreira por 7 dias", "Anafilaxia e bradicardia (raras)"],
    prescrever: [
      { contexto: "Reversão do bloqueio", texto: "Sugamadex 100 mg/mL — 2 mg/kg IV em bolus se 2 respostas no TOF (ex.: 70 kg = 140 mg = 1,4 mL);\n4 mg/kg se bloqueio profundo (1–2 contagens pós-tetânicas);\n16 mg/kg para reversão imediata após rocurônio 1,2 mg/kg." }
    ] },
  { id: "neostigmina", nomes: ["Neostigmina", "metilsulfato de neostigmina", "prostigmine", "normastig"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão de bloqueio neuromuscular não despolarizante residual; crise miastênica (sob orientação); pseudo-obstrução colônica (Ogilvie)",
    adulto: "Reversão: 0,04–0,05 mg/kg IV (máx 5 mg) com atropina; Ogilvie: 2 mg IV lento com monitor",
    renal: [{ abaixo: 30, texto: "Eliminação renal: efeito prolongado." }],
    gestacao: { nivel: "cautela", texto: "Usada na miastenia gestacional; doses IV podem estimular contração uterina." },
    alergia: [], contra: ["Só reverter com sinais de recuperação (≥ 2 respostas no TOF)", "Sempre associar atropina (bradicardia, broncoespasmo, secreção)", "Obstrução mecânica intestinal ou urinária", "Asma, bradicardia, BAV"],
    prescrever: [
      { contexto: "Reversão de bloqueio neuromuscular", texto: "Neostigmina 0,5 mg/mL — 0,04–0,05 mg/kg IV lento (ex.: 70 kg = 3 mg = 6 mL; máx 5 mg)\n+ Atropina 0,5 mg/mL — 0,015–0,02 mg/kg IV (ex.: 70 kg = 1–1,4 mg), aplicada junto ou antes." },
      { contexto: "Pseudo-obstrução colônica (Ogilvie)", texto: "Neostigmina 0,5 mg/mL — 4 mL (2 mg) IV lento em 3–5 min, com monitor cardíaco e atropina à beira-leito.\nPaciente em decúbito; observar 30 min (bradicardia, eliminação de flatos/fezes)." }
    ] },
  { id: "dexmedetomidina", nomes: ["Dexmedetomidina", "precedex"], classe: "emergencia", receita: "hospitalar", tags: ["sedativo"],
    usos: "Sedação leve/cooperativa na UTI (inclusive para desmame da VM e delirium agitado), sedação para procedimento",
    adulto: "0,2–0,7 mcg/kg/h IV contínua (até 1,4 mcg/kg/h); sem dose de ataque na UTI",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se benefício claro." },
    alergia: [], contra: ["Bradicardia e BAV avançado sem marca-passo", "Hipotensão (ou hipertensão transitória com bolus)", "Não causa depressão respiratória importante, mas não substitui analgesia", "Hepatopatia grave: reduzir dose"],
    prescrever: [
      { contexto: "UTI — sedação contínua", texto: "Dexmedetomidina 100 mcg/mL — 2 mL (200 mcg) + SF 0,9% 48 mL = 50 mL (4 mcg/mL).\nIV em bomba de infusão: 0,2–0,7 mcg/kg/h, titulada pela RASS (máx 1,4 mcg/kg/h).\nmL/h = dose (mcg/kg/h) × peso ÷ 4. Monitor de FC e PA." }
    ] },
  { id: "remifentanil", nomes: ["Remifentanil", "remifentanila", "ultiva"], classe: "opioides", receita: "hospitalar", tags: ["opioide", "sedativo"],
    usos: "Analgesia/sedação em infusão contínua (anestesia, UTI), quando se deseja despertar rápido",
    adulto: "UTI: 0,05–0,15 mcg/kg/min IV contínua, titulada · anestesia: conforme anestesiologista",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Atravessa a placenta; uso em analgesia de parto apenas sob protocolo e monitorização." },
    alergia: ["opioides"], contra: ["Não fazer bolus rápido (rigidez torácica, apneia)", "Efeito some em minutos ao suspender: programar analgesia de transição", "Hiperalgesia induzida por opioide", "Não usar pela via neuraxial (contém glicina)", "Ventilação monitorizada"],
    prescrever: [
      { contexto: "UTI — infusão contínua", texto: "Remifentanil 2 mg (frasco) — reconstituir e diluir em SF 0,9% até 40 mL (50 mcg/mL).\nIV em bomba de infusão: 0,05–0,15 mcg/kg/min, titular por dor e RASS.\nmL/h = dose (mcg/kg/min) × peso × 60 ÷ 50. Antes de suspender, iniciar outro analgésico." }
    ] },
  { id: "nalbufina", nomes: ["Nalbufina", "cloridrato de nalbufina", "nubain"], classe: "opioides", receita: "hospitalar", tags: ["opioide", "sedativo"],
    usos: "Dor moderada a intensa (agonista-antagonista, teto para depressão respiratória); prurido induzido por opioide neuraxial",
    adulto: "10 mg (0,1–0,15 mg/kg) IV, IM ou SC a cada 3–6 h; máx 20 mg/dose e 160 mg/dia",
    renal: [{ abaixo: 30, texto: "Reduzir a dose e aumentar o intervalo." }],
    gestacao: { nivel: "cautela", texto: "Pode causar bradicardia fetal e depressão respiratória do RN se usada perto do parto." },
    alergia: ["opioides"], contra: ["Precipita abstinência em usuário crônico de opioide", "Reduz o efeito de morfina/fentanil se associada", "Depressão respiratória (com teto) e sedação", "Antídoto: naloxona (pode precisar de doses maiores)"],
    prescrever: [
      { contexto: "Dor moderada/intensa (adulto)", texto: "Nalbufina 10 mg/mL — 1 mL (10 mg) + SF 0,9% 9 mL IV lento, de 6/6h se dor (ou IM/SC sem diluir).\nMáximo 20 mg por dose e 160 mg/dia." },
      { contexto: "Prurido por opioide neuraxial", texto: "Nalbufina 10 mg/mL — 0,25–0,5 mL (2,5–5 mg) IV, até de 6/6h se prurido." }
    ] },
  { id: "meperidina", nomes: ["Meperidina", "petidina", "dolantina", "dolosal"], classe: "opioides", receita: "A", tags: ["opioide", "sedativo", "serotoninergico"],
    usos: "Tremor pós-anestésico (shivering); dor aguda quando outros opioides não estão disponíveis (não é 1ª escolha)",
    adulto: "Dor: 50–100 mg IM ou 25–50 mg IV lento a cada 3–4 h (uso por até 48 h) · tremor: 12,5–25 mg IV",
    renal: [{ abaixo: 50, texto: "Metabólito normeperidina acumula (convulsões): evitar." }],
    gestacao: { nivel: "cautela", texto: "Depressão respiratória neonatal se usada perto do parto; preferir outros opioides." },
    alergia: ["opioides"], contra: ["IMAO (até 14 dias): reação grave/fatal", "Insuficiência renal, idoso, convulsões (normeperidina)", "Uso repetido ou prolongado", "Associação com ISRS/tramadol: síndrome serotoninérgica", "Notificação de Receita A (lista A1)"],
    prescrever: [
      { contexto: "Hospitalar — tremor pós-anestésico", texto: "Meperidina 50 mg/mL — 0,25–0,5 mL (12,5–25 mg) diluída em SF 0,9% 10 mL IV lento, dose única." },
      { contexto: "Hospitalar — dor aguda (exceção)", texto: "Meperidina 50 mg/mL — 1 mL (50 mg) diluída em SF 0,9% 10 mL IV lento, de 4/4h se dor, por até 48 h.\n(Ou 50–100 mg IM.) Preferir morfina." }
    ] },
  { id: "oxicodona", nomes: ["Oxicodona", "cloridrato de oxicodona", "oxycontin"], classe: "opioides", receita: "A", tags: ["opioide", "sedativo"],
    usos: "Dor crônica intensa oncológica e não oncológica refratária (comprimido de liberação controlada 12/12h)",
    adulto: "Iniciante: 10 mg VO de 12/12h; titular conforme dor (sem dose máxima fixa em dor oncológica)",
    renal: [{ abaixo: 60, texto: "Iniciar com doses menores (cerca de metade) e titular devagar." }],
    gestacao: { nivel: "evitar", texto: "Uso crônico: síndrome de abstinência neonatal; depressão respiratória perto do parto." },
    alergia: ["opioides"], contra: ["Engolir inteiro: partir/mastigar libera toda a dose (overdose)", "Depressão respiratória, íleo paralítico", "Associar laxante desde o início", "Benzodiazepínico/álcool: risco de overdose", "Notificação de Receita A (lista A1); máx 30 dias de tratamento"],
    prescrever: [
      { contexto: "Adulto — dor crônica (início)", texto: "Notificação de Receita A\nUSO ORAL\n1. Oxicodona 10 mg comprimido de liberação controlada ---- 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Engolir inteiro, sem partir ou mastigar.\n2. Associar laxante (ex.: lactulose ou macrogol) enquanto usar." }
    ] },

  /* ---------- soluções e expansores ---------- */
  { id: "soro-fisiologico", nomes: ["Soro fisiológico 0,9%", "cloreto de sódio 0,9%", "SF 0,9%", "solução fisiológica"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Expansão volêmica (choque, desidratação grave), hidratação venosa, diluente de medicamentos",
    ped: { dose: 20, faixa: "Bolus 10–20 mL/kg em 5–20 min (cardiopata/desnutrido: 10 mL/kg)", intervalo: "reavaliar após cada bolus", maxDose: 1000, unidade: "mL" },
    adulto: "Bolus 500–1.000 mL IV rápido (sepse com hipoperfusão: 30 mL/kg nas primeiras 3 h), reavaliando",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Seguro." },
    alergia: [], contra: ["Grandes volumes: acidose metabólica hiperclorêmica (preferir solução balanceada)", "Congestão/EAP, IC e DRC oligúrica: bolus menores e reavaliação", "Na 154 mEq/L"],
    prescrever: [
      { contexto: "Adulto — expansão volêmica", texto: "SF 0,9% 500 mL IV aberto (em 15–30 min). Reavaliar PA, FC, perfusão, diurese e ausculta pulmonar; repetir se necessário." },
      { contexto: "Criança — expansão volêmica", texto: "SF 0,9% ___ mL IV em 5–20 min.\n(10–20 mL/kg por bolus; reavaliar após cada bolus — sinais de sobrecarga: estertores, hepatomegalia.)" }
    ] },
  { id: "ringer-lactato", nomes: ["Ringer lactato", "solução de Ringer com lactato", "Ringer com lactato"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Expansão volêmica (trauma, sepse, queimados, cetoacidose), solução balanceada de 1ª escolha em grande volume",
    ped: { dose: 20, faixa: "Bolus 10–20 mL/kg", intervalo: "reavaliar após cada bolus", maxDose: 1000, unidade: "mL" },
    adulto: "Bolus 500–1.000 mL IV (trauma: 1 L aquecido e reavaliar); queimados: fórmula do ATLS",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Seguro." },
    alergia: [], contra: ["Na 130, K 4, Ca ~3 mEq/L e lactato 28 mEq/L (levemente hipotônico): cautela no TCE grave/edema cerebral", "Não misturar com sangue no mesmo equipo (cálcio coagula) nem com ceftriaxona"],
    prescrever: [
      { contexto: "Adulto — expansão / trauma", texto: "Ringer lactato 1.000 mL IV aquecido, aberto. Reavaliar a resposta (PA, FC, perfusão, lactato, diurese)." },
      { contexto: "Queimado (ATLS, 1ª 24 h)", texto: "Ringer lactato IV: 2 mL × peso (kg) × % SCQ (2º e 3º graus) no adulto; 3 mL × kg × % SCQ na criança.\nMetade nas primeiras 8 h (a contar da queimadura), metade nas 16 h seguintes.\nTitular por diurese: adulto 0,5 mL/kg/h; criança < 30 kg 1 mL/kg/h." }
    ] },
  { id: "soro-glicosado-5", nomes: ["Soro glicosado 5%", "glicose 5%", "SG 5%", "solução glicosada 5%"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Diluente de medicamentos, aporte de água livre (hipernatremia), base de soro de manutenção com eletrólitos, prevenir hipoglicemia",
    adulto: "Conforme o objetivo (manutenção: 25–30 mL/kg/dia de água total, com eletrólitos)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Seguro." },
    alergia: [], contra: ["Não usar para expansão volêmica (vira água livre)", "Hiponatremia e edema cerebral (hipotônico após metabolização)", "Hiperglicemia", "Lactentes e crianças: manutenção com soluções isotônicas (glicose + Na 140)"],
    prescrever: [
      { contexto: "Adulto — soro de manutenção (ex.: 70 kg)", texto: "SG 5% 500 mL\nNaCl 20% 10 mL\nKCl 19,1% 5 mL\nIV a 28 gotas/min (≈ 84 mL/h) — 4 etapas em 24 h (≈ 2.000 mL/dia).\nAjustar conforme volemia, Na, K e glicemia." }
    ] },
  { id: "solucao-balanceada", nomes: ["Solução eletrolítica balanceada", "Plasma-Lyte", "plasmalyte", "Plasma-Lyte 148"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Expansão volêmica e reposição em grande volume com menor risco de acidose hiperclorêmica (sepse, cetoacidose, perioperatório)",
    adulto: "Bolus 500–1.000 mL IV, reavaliando a resposta",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Seguro." },
    alergia: [], contra: ["Na 140, K 5, Mg 1,5, Cl 98, acetato 27 e gluconato 23 mEq/L", "Hipercalemia grave (contém K, embora pouco)", "Disponibilidade varia entre serviços"],
    prescrever: [
      { contexto: "Adulto — expansão volêmica", texto: "Solução eletrolítica balanceada (Plasma-Lyte) 1.000 mL IV aberto. Reavaliar perfusão, lactato e sinais de congestão." }
    ] },
  { id: "salina-hipertonica", nomes: ["Solução salina hipertônica", "NaCl 3%", "cloreto de sódio 20%", "NaCl 20%", "salina 7,5%"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Hiponatremia grave sintomática (convulsão, rebaixamento), hipertensão intracraniana; NaCl 20% como aditivo de soros",
    ped: { dose: 2, faixa: "Hiponatremia grave: NaCl 3% 2 mL/kg (máx 100–150 mL) em 10–20 min · HIC: 2–5 mL/kg", intervalo: "repetir até 2–3× conforme sintomas e Na", maxDose: 150, unidade: "mL" },
    adulto: "Hiponatremia grave: NaCl 3% 150 mL IV em 20 min, repetir até 2–3× (meta: +5 mEq/L e melhora clínica)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar quando indicada (ex.: hiponatremia grave), com controle frequente de Na." },
    alergia: [], contra: ["Correção máxima: 10 mEq/L em 24 h (8 mEq/L se alcoolismo, desnutrição, hipocalemia, hepatopatia): risco de desmielinização osmótica", "Dosar Na a cada 2–4 h", "NaCl 20% (3,4 mEq/mL) NUNCA puro em veia periférica", "Sobrecarga volêmica na IC"],
    prescrever: [
      { contexto: "Preparo do NaCl 3%", texto: "SF 0,9% 890 mL + NaCl 20% 110 mL = 1.000 mL de NaCl ≈ 3% (513 mEq/L).\n(Para 500 mL: SF 0,9% 445 mL + NaCl 20% 55 mL.)" },
      { contexto: "Hiponatremia grave sintomática (adulto)", texto: "NaCl 3% 150 mL IV em 20 min. Dosar Na após; repetir até 2–3 vezes até melhora dos sintomas ou Na +5 mEq/L.\nDepois: parar a salina hipertônica e tratar a causa; não ultrapassar +10 mEq/L em 24 h." },
      { contexto: "Hipertensão intracraniana (ponte para tratamento definitivo)", texto: "NaCl 3% ___ mL IV em 10–20 min (2–5 mL/kg; adulto habitual 250 mL), conforme protocolo de neurointensivismo.\nNaCl 7,5% ou 20% apenas em veia central e conforme protocolo do serviço. Alvo Na 145–155 mEq/L." }
    ] },
  { id: "manitol", nomes: ["Manitol", "manitol 20%"], classe: "emergencia", receita: "hospitalar", tags: ["diuretico"],
    usos: "Hipertensão intracraniana com sinais de herniação (ponte para neurocirurgia), glaucoma agudo refratário",
    ped: { dose: 0.5, faixa: "0,25–1 g/kg IV em 15–20 min", intervalo: "repetir a cada 4–6 h se necessário", maxDose: 100, unidade: "g" },
    adulto: "0,25–1 g/kg IV em 15–20 min (manitol 20%: 1,25–5 mL/kg)",
    renal: [{ abaixo: 30, texto: "Risco de LRA e sobrecarga; evitar se anúria." }],
    gestacao: { nivel: "cautela", texto: "Usar se indicação neurológica grave." },
    alergia: [], contra: ["Anúria, desidratação grave, hipovolemia/choque (hipotensão por diurese)", "EAP e IC descompensada", "Osmolaridade > 320 mOsm/L ou gap osmolar > 20", "Usar filtro (cristaliza); sondagem vesical"],
    prescrever: [
      { contexto: "HIC com sinais de herniação", texto: "Manitol 20% — 1 g/kg IV em 15–20 min, com filtro (ex.: 70 kg = 70 g = 350 mL).\nSondagem vesical; repor perdas com SF 0,9% para manter euvolemia. Dosar Na e osmolaridade." }
    ] },
  { id: "albumina", nomes: ["Albumina humana", "albumina 20%", "albumina 25%"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Paracentese de grande volume (> 5 L), peritonite bacteriana espontânea, síndrome hepatorrenal; expansão em casos selecionados",
    adulto: "Paracentese > 5 L: 6–8 g por litro retirado · PBE: 1,5 g/kg no D1 e 1 g/kg no D3 · SHR: 1 g/kg (máx 100 g) e depois 20–40 g/dia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Hemoderivado; usar quando indicado." },
    alergia: [], contra: ["Sobrecarga volêmica, IC e EAP", "Anemia grave (dilucional)", "Hemoderivado: registro de lote; reações alérgicas raras", "Hipoalbuminemia isolada não é indicação"],
    prescrever: [
      { contexto: "Paracentese de grande volume", texto: "Albumina humana 20% (frasco 50 mL = 10 g) — 6–8 g por litro de ascite retirado (ex.: 6 L = 40–50 g = 4–5 frascos)\nIV em 30–60 min, durante ou logo após a paracentese." },
      { contexto: "Peritonite bacteriana espontânea", texto: "Albumina humana 20% — 1,5 g/kg IV no D1 (em 6 h da suspeita) e 1 g/kg no D3 (máx 100 g/dia), junto do antibiótico." },
      { contexto: "Síndrome hepatorrenal", texto: "Albumina humana 20% — 1 g/kg IV no D1 (máx 100 g); depois 20–40 g/dia, junto da terlipressina.\nSuspender se congestão pulmonar." }
    ] },

  /* ---------- hemorragia digestiva e hepatologia ---------- */
  { id: "terlipressina", nomes: ["Terlipressina", "acetato de terlipressina", "glypressin"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Hemorragia digestiva alta varicosa (iniciar antes da endoscopia); síndrome hepatorrenal (com albumina)",
    adulto: "HDA varicosa: 2 mg IV de 4/4h por 24–48 h, depois 1 mg de 4/4h até 2–5 dias · SHR: 1 mg IV de 4/4–6/6h (até 2 mg)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Causa contrações uterinas e isquemia: contraindicada na gestação." },
    alergia: [], contra: ["Cardiopatia isquêmica, arritmia, doença arterial periférica, isquemia mesentérica", "Hiponatremia; sobrecarga volêmica (SHR + albumina)", "Monitor de ECG e SpO2"],
    prescrever: [
      { contexto: "HDA varicosa", texto: "Terlipressina 1 mg (frasco) — 2 mg IV em bolus de 4/4h (< 50 kg: 1 mg) nas primeiras 24–48 h;\ndepois 1 mg IV de 4/4h, completando 2–5 dias.\nAssociar ceftriaxona 1 g/dia e EDA em até 12 h." },
      { contexto: "Síndrome hepatorrenal", texto: "Terlipressina 1 mg IV em bolus de 6/6h (ou infusão contínua 2 mg/dia), com albumina 20–40 g/dia.\nSe a creatinina não cair ≥ 25% em 3 dias, aumentar até 2 mg de 4/4h (conforme tolerância)." }
    ] },
  { id: "octreotida", nomes: ["Octreotida", "octreotide", "acetato de octreotida", "sandostatin"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "HDA varicosa (alternativa à terlipressina); hipoglicemia refratária por sulfonilureia; fístulas digestivas; acromegalia/tumores neuroendócrinos (especialista)",
    adulto: "HDA varicosa: 50 mcg IV em bolus, depois 50 mcg/h por 2–5 dias · intox. sulfonilureia: 50–100 mcg SC de 6/6–8/8h",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se benefício claro." },
    alergia: [], contra: ["Hiper/hipoglicemia", "Bradicardia", "Litíase biliar no uso prolongado", "Ampolas: 0,05, 0,1 e 0,5 mg/mL (conferir)"],
    prescrever: [
      { contexto: "HDA varicosa", texto: "Octreotida 0,1 mg/mL — 0,5 mL (50 mcg) IV em bolus.\nDepois: octreotida 500 mcg + SF 0,9% 100 mL (5 mcg/mL) IV em bomba a 10 mL/h (50 mcg/h) por 2–5 dias." },
      { contexto: "Hipoglicemia por sulfonilureia (refratária à glicose)", texto: "Octreotida 0,1 mg/mL — 0,5–1 mL (50–100 mcg) SC de 6/6h ou 8/8h, mantendo glicose IV e glicemia capilar de 1/1h." }
    ] },

  /* ---------- reversão de anticoagulação e trombolíticos ---------- */
  { id: "fitomenadiona", nomes: ["Fitomenadiona", "vitamina K", "vitamina K1", "kanakion"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão da varfarina (INR alto ou sangramento), coagulopatia por deficiência de vitamina K, profilaxia da doença hemorrágica do RN",
    apres: [{ rotulo: "ampola 10 mg/mL (1 mL)", mgPorMl: 10 }, { rotulo: "ampola pediátrica 2 mg/0,2 mL", mgPorMl: 10 }],
    adulto: "Sangramento grave: 5–10 mg IV lento (em 20–30 min) + complexo protrombínico · INR > 10 sem sangramento: 2–5 mg VO",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Pode ser usada quando indicada." },
    alergia: [], contra: ["IV rápida: anafilaxia (diluir e infundir em 20–30 min)", "Efeito começa em 6–12 h: no sangramento grave associar complexo protrombínico", "Doses altas dificultam reanticoagular com varfarina", "Não reverte DOAC nem heparina"],
    prescrever: [
      { contexto: "Sangramento grave em uso de varfarina", texto: "Fitomenadiona 10 mg/mL — 1 ampola (10 mg) + SG 5% 50 mL IV em 20–30 min.\nAssociar complexo protrombínico; repetir INR em 6–12 h." },
      { contexto: "INR > 10 sem sangramento (ambulatorial/PS)", texto: "Suspender a varfarina.\nFitomenadiona 10 mg/mL — 0,2–0,5 mL (2–5 mg) por via oral, diluída em água ou suco, dose única.\nRepetir INR em 24 h." },
      { contexto: "Recém-nascido — profilaxia", texto: "Fitomenadiona — 1 mg IM na 1ª hora de vida (RN < 2.000 g: 0,5 mg IM)." }
    ] },
  { id: "complexo-protrombinico", nomes: ["Complexo protrombínico", "complexo protrombinico", "CCP", "beriplex", "octaplex", "prothromplex"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão urgente de varfarina em sangramento grave ou cirurgia de urgência; sangramento grave com inibidor do Xa sem antídoto específico",
    adulto: "Varfarina (por INR): 2–4: 25 UI/kg · 4–6: 35 UI/kg · > 6: 50 UI/kg (máx 2.500/3.500/5.000 UI) + vitamina K IV",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Hemoderivado; usar se sangramento grave." },
    alergia: [], contra: ["Risco trombótico (TEV, IAM, AVC) — reavaliar anticoagulação depois", "CIVD", "Trombocitopenia induzida por heparina (alguns contêm heparina)", "Dose em UI de fator IX: conferir a bula do produto"],
    prescrever: [
      { contexto: "Sangramento grave com varfarina", texto: "Complexo protrombínico — ___ UI IV (25–50 UI/kg conforme INR; reconstituir conforme bula) em velocidade de até 2–3 mL/min.\n+ Fitomenadiona 10 mg IV em 20–30 min. INR 30 min após." },
      { contexto: "Sangramento grave com rivaroxabana/apixabana", texto: "Complexo protrombínico — 50 UI/kg IV (ou dose fixa conforme protocolo local), se andexanete indisponível." }
    ] },
  { id: "idarucizumabe", nomes: ["Idarucizumabe", "praxbind"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão da dabigatrana em sangramento grave ou cirurgia/procedimento de urgência",
    adulto: "5 g IV (2 frascos de 2,5 g/50 mL em infusões consecutivas de 5–10 min cada, ou em bolus)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se sangramento grave." },
    alergia: [], contra: ["Reverte SOMENTE a dabigatrana", "Intolerância hereditária à frutose (contém sorbitol)", "Retomar anticoagulação assim que seguro"],
    prescrever: [
      { contexto: "Sangramento grave com dabigatrana", texto: "Idarucizumabe 2,5 g/50 mL — 2 frascos (5 g) IV: infusões consecutivas de 5–10 min cada (ou em bolus), sem diluir." }
    ] },
  { id: "protamina", nomes: ["Protamina", "sulfato de protamina", "cloridrato de protamina"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Reversão da heparina não fracionada (sangramento, superdosagem, pós-circulação extracorpórea); reversão parcial da enoxaparina",
    adulto: "1 mg para cada 100 UI de HNF das últimas 2–3 h (máx 50 mg por dose) IV lento em 10 min",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar se sangramento grave." },
    alergia: [], contra: ["Infundir lento (≤ 5 mg/min): hipotensão, bradicardia, hipertensão pulmonar e anafilaxia", "Maior risco de alergia: uso prévio de insulina NPH, alergia a peixe, vasectomia", "Excesso de protamina também anticoagula", "Enoxaparina: neutralização apenas parcial (~60%)"],
    prescrever: [
      { contexto: "Reversão de HNF", texto: "Protamina 10 mg/mL — ___ mg (1 mg por 100 UI de HNF recebidas nas últimas 2–3 h; máx 50 mg) em SF 0,9% 50 mL IV em 10 min.\nControlar TTPa 15 min após." },
      { contexto: "Reversão de enoxaparina (sangramento)", texto: "Protamina 10 mg/mL — 1 mg para cada 1 mg de enoxaparina se última dose < 8 h (0,5 mg/mg se 8–12 h); máx 50 mg, IV em 10 min." }
    ] },
  { id: "alteplase", nomes: ["Alteplase", "rt-PA", "actilyse"], classe: "emergencia", receita: "hospitalar", tags: ["anticoagulante"],
    usos: "AVC isquêmico agudo (até 4,5 h), TEP maciço/alto risco, IAM com supra de ST sem acesso à angioplastia em tempo",
    adulto: "AVC: 0,9 mg/kg (máx 90 mg), 10% em bolus em 1 min e 90% em 60 min · TEP: 100 mg em 2 h",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Gestação não é contraindicação absoluta: decidir com especialista em AVC/TEP grave." },
    alergia: [], contra: ["Sangramento ativo, AVC hemorrágico prévio, AVC isquêmico/TCE/cirurgia intracraniana < 3 meses", "Neoplasia intracraniana, dissecção de aorta", "AVC: PA > 185/110 antes (tratar) e > 180/105 nas 24 h seguintes", "Plaquetas < 100 mil, INR > 1,7, uso de DOAC nas últimas 48 h", "Não puncionar artérias; sem antitrombóticos por 24 h no AVC"],
    prescrever: [
      { contexto: "AVC isquêmico (até 4,5 h)", texto: "Alteplase 50 mg (frasco) — 0,9 mg/kg (máx 90 mg): reconstituir com o diluente (1 mg/mL).\n10% da dose IV em bolus em 1 min; os 90% restantes IV em bomba em 60 min.\nPA < 180/105 e exame neurológico de 15/15 min nas 2 primeiras horas." },
      { contexto: "TEP maciço", texto: "Alteplase — 100 mg IV em bomba de infusão em 2 h.\nSuspender heparina durante a infusão; reiniciar quando TTPa < 2× o controle." },
      { contexto: "IAM com supra de ST (esquema acelerado)", texto: "Alteplase — 15 mg IV em bolus; depois 0,75 mg/kg (máx 50 mg) em 30 min; depois 0,5 mg/kg (máx 35 mg) em 60 min.\nAssociar AAS, clopidogrel e anticoagulante conforme protocolo." }
    ] },
  { id: "tenecteplase", nomes: ["Tenecteplase", "TNK", "metalyse"], classe: "emergencia", receita: "hospitalar", tags: ["anticoagulante"],
    usos: "IAM com supra de ST quando a angioplastia primária não é possível em tempo (bolus único; ideal no pré-hospitalar/UPA); AVC isquêmico conforme protocolo local",
    adulto: "IAM (bolus único em 5–10 s): < 60 kg 30 mg · 60–69 kg 35 mg · 70–79 kg 40 mg · 80–89 kg 45 mg · ≥ 90 kg 50 mg (≥ 75 anos: metade da dose)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Decidir com especialista; risco de hemorragia placentária." },
    alergia: [], contra: ["Mesmas contraindicações da trombólise: sangramento ativo, AVC hemorrágico prévio, AVC isquêmico/TCE < 3 meses, dissecção de aorta, neoplasia intracraniana", "PA > 180/110 não controlada (relativa)", "Diluir só em água para injeção (incompatível com glicose)"],
    prescrever: [
      { contexto: "IAM com supra de ST", texto: "Tenecteplase (frasco 40 ou 50 mg; 5 mg/mL após reconstituição) — ___ mg IV em bolus único em 5–10 s, conforme o peso.\n≥ 75 anos: metade da dose.\nJunto: AAS 300 mg mastigado, clopidogrel 300 mg (≥ 75 anos: 75 mg) e enoxaparina. Transferir para angiografia em 2–24 h." },
      { contexto: "AVC isquêmico (conforme protocolo local)", texto: "Tenecteplase — 0,25 mg/kg (máx 25 mg) IV em bolus único em 5–10 s, apenas se previsto no protocolo de AVC do serviço." }
    ] },

  /* ---------- antídotos ---------- */
  { id: "glucagon", nomes: ["Glucagon", "glucagen"], classe: "emergencia", receita: "simples", tags: [],
    usos: "Hipoglicemia grave sem acesso venoso (inclusive em casa); intoxicação por betabloqueador ou bloqueador de canal de cálcio",
    adulto: "Hipoglicemia: 1 mg IM ou SC (< 25 kg: 0,5 mg) · intox. betabloqueador: 50 mcg/kg (3–5 mg) IV em 1–2 min, repetir, depois infusão",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Pode ser usado na hipoglicemia grave." },
    alergia: [], contra: ["Ineficaz se reserva de glicogênio baixa (jejum prolongado, álcool, desnutrição): dar glicose", "Feocromocitoma, insulinoma", "Vômitos: lateralizar o paciente", "Intox. grave exige quantidade grande (vários kits)"],
    prescrever: [
      { contexto: "Hipoglicemia grave — para ter em casa (insulina)", texto: "USO INTRAMUSCULAR\n1. Glucagon 1 mg (kit com seringa de diluente) ---------- 1 kit\n   Se a pessoa estiver desacordada ou não conseguir engolir: aplicar todo o conteúdo (1 mg) no músculo da coxa ou braço.\n   Criança < 25 kg: metade (0,5 mg). Deitar de lado e chamar o SAMU (192). Ao acordar, dar açúcar e lanche." },
      { contexto: "Intoxicação por betabloqueador / BCC", texto: "Glucagon — 50 mcg/kg (adulto 3–5 mg) IV em 1–2 min; repetir se sem resposta em 5–10 min.\nDepois, infusão contínua conforme CIATox (0800 722 6001). Associar insulina em alta dose/cálcio conforme protocolo." }
    ] },
  { id: "pralidoxima", nomes: ["Pralidoxima", "contrathion", "mesilato de pralidoxima"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Intoxicação por organofosforados (inseticidas) com sinais nicotínicos (fraqueza, fasciculações), sempre após atropinização",
    adulto: "30 mg/kg IV em 20–30 min, depois 8 mg/kg/h IV contínua (esquema OMS), até melhora clínica",
    renal: [{ abaixo: 50, texto: "Excreção renal: reduzir a infusão." }],
    gestacao: { nivel: "cautela", texto: "Usar na intoxicação grave; benefício supera o risco." },
    alergia: [], contra: ["Não substitui a atropina (dar atropina antes até secar secreções)", "Benefício duvidoso nos carbamatos (chumbinho/aldicarbe): discutir com CIATox", "Infusão rápida: laringoespasmo, rigidez, taquicardia", "Disponibilidade: farmácia hospitalar/CIATox"],
    prescrever: [
      { contexto: "Intoxicação por organofosforado", texto: "1. Atropina IV em doses dobradas até atropinização (secreções secas, FC > 80, PAS > 80).\n2. Pralidoxima — 30 mg/kg em SF 0,9% 100 mL IV em 20–30 min (ex.: 70 kg = 2 g);\n   depois 8 mg/kg/h IV contínua.\nDiscutir com CIATox (0800 722 6001)." }
    ] },
  { id: "azul-metileno", nomes: ["Azul de metileno", "cloreto de metiltionínio"], classe: "emergencia", receita: "hospitalar", tags: ["serotoninergico"],
    usos: "Meta-hemoglobinemia sintomática (dapsona, nitritos, anestésicos locais, anilinas) ou MetHb > 20–30%; vasoplegia refratária",
    ped: { dose: 1, faixa: "1–2 mg/kg IV em 5 min", intervalo: "repetir 1 mg/kg em 30–60 min se necessário (máx 7 mg/kg)", maxDose: 100 },
    apres: [{ rotulo: "solução 1% (10 mg/mL)", mgPorMl: 10 }],
    adulto: "1–2 mg/kg IV em 5 min (solução 1% = 0,1–0,2 mL/kg); repetir em 30–60 min se necessário",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Teratogênico em uso intra-amniótico; usar só se meta-hemoglobinemia grave." },
    alergia: [], contra: ["Deficiência de G6PD (hemólise; ineficaz)", "ISRS, IRSN, IMAO, clomipramina: síndrome serotoninérgica", "Oximetria falsamente baixa após aplicação; urina azul-esverdeada", "Doses > 7 mg/kg pioram a MetHb"],
    prescrever: [
      { contexto: "Meta-hemoglobinemia", texto: "Azul de metileno 1% (10 mg/mL) — 1–2 mg/kg (0,1–0,2 mL/kg) diluídos em SG 5% 50 mL IV em 5 min (ex.: 70 kg = 70 mg = 7 mL).\nRepetir 1 mg/kg após 30–60 min se persistir. Suspender o agente causador; O2 suplementar." }
    ] },
  { id: "hidroxocobalamina-antidoto", nomes: ["Hidroxocobalamina 5 g (antídoto do cianeto)", "cyanokit"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Intoxicação por cianeto (vítima de incêndio em ambiente fechado com acidose lática/choque, ingestão de cianeto, nitroprussiato)",
    adulto: "5 g IV em 15 min; repetir 5 g (em 15 min a 2 h) se gravidade persistir (máx 10 g)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar na intoxicação grave; benefício supera o risco." },
    alergia: [], contra: ["Pele, mucosas e urina avermelhadas por dias", "Interfere em exames colorimétricos e em hemodiálise (alarme falso de vazamento): colher exames antes", "Disponibilidade restrita: acionar CIATox (0800 722 6001)", "Diferente da hidroxocobalamina para deficiência de B12 (dose e apresentação)"],
    prescrever: [
      { contexto: "Intoxicação por cianeto", texto: "Hidroxocobalamina 5 g (frasco) — reconstituir com 200 mL de SF 0,9%; IV em 15 min (criança: 70 mg/kg, máx 5 g).\nRepetir 5 g se instabilidade persistir. O2 100%. Discutir com CIATox." }
    ] },
  { id: "nitrito-tiossulfato", nomes: ["Nitrito de sódio", "tiossulfato de sódio", "nitrito + tiossulfato de sódio"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Intoxicação por cianeto (alternativa à hidroxocobalamina); tiossulfato isolado em toxicidade por nitroprussiato",
    adulto: "Nitrito de sódio 3% 10 mL (300 mg) IV em 2–5 min, seguido de tiossulfato de sódio 25% 50 mL (12,5 g) IV em 10–30 min",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Nitrito pode causar meta-hemoglobinemia e hipotensão fetal; preferir hidroxocobalamina, se disponível." },
    alergia: [], contra: ["Nitrito: hipotensão e meta-hemoglobinemia — evitar em vítima de incêndio (intoxicação por CO associada): usar só tiossulfato ou hidroxocobalamina", "Anemia grave", "Disponibilidade: farmácia hospitalar/CIATox"],
    prescrever: [
      { contexto: "Intoxicação por cianeto (adulto)", texto: "1. Nitrito de sódio 3% — 10 mL (300 mg) IV em 2–5 min (criança: 0,2 mL/kg, máx 10 mL).\n2. Em seguida: Tiossulfato de sódio 25% — 50 mL (12,5 g) IV em 10–30 min (criança: 1,65 mL/kg, máx 50 mL).\nPode repetir metade das doses em 30 min se persistir. Monitorar PA e MetHb. Discutir com CIATox." }
    ] },
  { id: "etanol-antidoto", nomes: ["Etanol (antídoto)", "álcool etílico absoluto", "etanol"], classe: "emergencia", receita: "hospitalar", tags: ["sedativo"],
    usos: "Intoxicação por metanol ou etilenoglicol (fomepizol não disponível no Brasil), enquanto se providencia hemodiálise",
    adulto: "Ataque 600–800 mg/kg; manutenção 80–130 mg/kg/h (etilista: ~150 mg/kg/h; dobrar durante hemodiálise); alvo etanolemia 100–150 mg/dL",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar na intoxicação grave; benefício supera o risco." },
    alergia: [], contra: ["Depressão do SNC, hipoglicemia (sobretudo em crianças): glicemia de 1/1h", "IV: solução a 10% em veia central (flebite e hiperosmolaridade)", "Via oral/sonda (destilado) se IV indisponível", "Preparo e volumes: confirmar com o CIATox (0800 722 6001)"],
    prescrever: [
      { contexto: "Intoxicação por metanol/etilenoglicol", texto: "Etanol a 10% IV (preparado pela farmácia hospitalar a partir de etanol absoluto em SG 5%):\nataque 600–800 mg/kg em 30–60 min; manutenção 80–130 mg/kg/h em bomba (dobrar durante a hemodiálise).\nEtanolemia a cada 1–2 h (alvo 100–150 mg/dL), glicemia de 1/1h. Volumes conforme CIATox.\nAssociar ácido fólico (metanol) ou tiamina + piridoxina (etilenoglicol); hemodiálise se acidose grave." }
    ] },
  { id: "deferoxamina", nomes: ["Deferoxamina", "desferroxamina", "mesilato de deferoxamina", "desferal"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Intoxicação aguda grave por ferro (ferro sérico > 500 mcg/dL, acidose, choque, encefalopatia); sobrecarga crônica de ferro (especialista)",
    adulto: "Intox. aguda: 15 mg/kg/h IV contínua (iniciar mais lento se hipotensão), em geral por até 24 h",
    renal: [{ abaixo: 30, texto: "Complexo ferro-deferoxamina tem excreção renal: dialisável; discutir com nefrologia." }],
    gestacao: { nivel: "cautela", texto: "Não deixar de tratar intoxicação grave por ferro na gestação." },
    alergia: [], contra: ["Infusão rápida: hipotensão", "Uso > 24 h: risco de SDRA", "Urina cor de vinho rosé indica quelação", "Infecção por Yersinia (sobrecarga crônica)"],
    prescrever: [
      { contexto: "Intoxicação aguda grave por ferro", texto: "Deferoxamina 500 mg (frasco) — reconstituir e diluir em SF 0,9% 500 mL.\nIV em bomba de infusão a 15 mg/kg/h (iniciar mais lento e aumentar se PA baixa).\nReavaliar a cada 4–6 h com CIATox; em geral até 24 h." }
    ] },
  { id: "dimercaprol", nomes: ["Dimercaprol", "BAL", "british anti-lewisite"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Intoxicação aguda grave por arsênio, mercúrio inorgânico e chumbo (encefalopatia, associado ao EDTA cálcico)",
    adulto: "3–5 mg/kg IM profunda a cada 4–6 h (esquema e duração conforme metal e CIATox)",
    renal: [{ abaixo: 30, texto: "Manter diurese e urina alcalina; discutir com CIATox." }],
    gestacao: { nivel: "cautela", texto: "Usar só na intoxicação grave, com CIATox." },
    alergia: [], contra: ["Veículo em óleo de amendoim: alergia a amendoim", "Deficiência de G6PD (hemólise)", "Contraindicado em intox. por ferro, cádmio e selênio (complexo tóxico)", "Somente IM (dor local, febre, hipertensão, taquicardia)", "Disponibilidade restrita: acionar CIATox (0800 722 6001)"],
    prescrever: [
      { contexto: "Intoxicação por metal pesado", texto: "Dimercaprol (BAL) — 3–5 mg/kg IM profunda a cada 4 h, conforme orientação do CIATox (0800 722 6001).\nDuração e associação (EDTA cálcico no chumbo) conforme o metal e o nível sérico." }
    ] },
  { id: "emulsao-lipidica", nomes: ["Emulsão lipídica 20%", "emulsão lipídica", "intralipid", "lipovenos"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Toxicidade sistêmica por anestésico local (bupivacaína, lidocaína) com convulsão, arritmia ou PCR; intoxicação grave por fármaco lipossolúvel refratária (com CIATox)",
    adulto: "1,5 mL/kg IV em 2–3 min (> 70 kg: 100 mL), depois 0,25 mL/kg/min; repetir bolus 1–2× e dobrar a infusão se instável (máx ~12 mL/kg)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usar na toxicidade por anestésico local." },
    alergia: [], contra: ["Interfere em exames laboratoriais (colher antes)", "Pancreatite, hipertrigliceridemia", "Na PCR por anestésico local: adrenalina em doses menores (≤ 1 mcg/kg); evitar vasopressina, BCC e betabloqueador", "Manter RCP prolongada (pode levar 1 h)"],
    prescrever: [
      { contexto: "Toxicidade por anestésico local", texto: "Emulsão lipídica 20% — 1,5 mL/kg IV em 2–3 min (ex.: 70 kg ≈ 100 mL).\nDepois: 0,25 mL/kg/min IV em bomba (≈ 18 mL/min em 70 kg) até 10 min após estabilidade.\nSe instável: repetir o bolus 1–2 vezes e dobrar a infusão para 0,5 mL/kg/min. Máx ≈ 12 mL/kg na 1ª meia hora." }
    ] },

  /* ---------- soros antivenenos (acidentes por animais peçonhentos) ---------- */
  { id: "soro-antibotropico", nomes: ["Soro antibotrópico", "soro antibotrópico pentavalente", "SAB", "soro antibotrópico-crotálico", "soro antibotrópico-laquético"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Acidente botrópico (jararaca, jararacuçu, urutu): dor e edema locais, sangramento, TC alterado; antibotrópico-laquético se surucucu",
    adulto: "Guia MS: leve 3 ampolas · moderado 6 · grave 12 ampolas IV (mesma dose para criança)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não há contraindicação: tratar sem atraso." },
    alergia: [], contra: ["Reações precoces (anafilaxia): adrenalina, anti-histamínico e corticoide à mão; não há indicação de teste de sensibilidade", "Doença do soro em 5–24 dias", "Disponibilidade: unidades de referência; notificar no SINAN", "Orientação: CIATox (0800 722 6001)"],
    prescrever: [
      { contexto: "Acidente botrópico", texto: "Soro antibotrópico (pentavalente) — ___ ampolas IV (leve 3 / moderado 6 / grave 12), diluídas ou não em SF 0,9% 100–250 mL, em 20–60 min.\nTempo de coagulação antes e 12 h após (repetir soro se TC alterado após 24 h, conforme protocolo).\nHidratação, analgesia, membro elevado; não garrotear, não incisar. Profilaxia do tétano.\nConforme Guia de Animais Peçonhentos do MS/CIATox." }
    ] },
  { id: "soro-anticrotalico", nomes: ["Soro anticrotálico", "SAC"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Acidente crotálico (cascavel): fácies miastênica, ptose, mialgia, urina escura (rabdomiólise), pouca reação local",
    adulto: "Guia MS: leve 5 ampolas · moderado 10 · grave 20 ampolas IV (mesma dose para criança)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não há contraindicação: tratar sem atraso." },
    alergia: [], contra: ["Prevenir IRA: hidratação vigorosa (diurese 1–2 mL/kg/h)", "Reações precoces: material de anafilaxia à mão", "Disponibilidade: unidades de referência; notificar no SINAN"],
    prescrever: [
      { contexto: "Acidente crotálico", texto: "Soro anticrotálico — ___ ampolas IV (leve 5 / moderado 10 / grave 20) em 20–60 min.\nSF 0,9% para diurese 1–2 mL/kg/h; CK, creatinina, TC.\nConforme Guia de Animais Peçonhentos do MS/CIATox (0800 722 6001)." }
    ] },
  { id: "soro-antielapidico", nomes: ["Soro antielapídico", "SAE", "soro anticoral"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Acidente elapídico (coral verdadeira): ptose, diplopia, disfagia, fraqueza, insuficiência respiratória",
    adulto: "10 ampolas IV (todo acidente com sinais é considerado potencialmente grave; mesma dose para criança)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não há contraindicação: tratar sem atraso." },
    alergia: [], contra: ["Risco de insuficiência respiratória: suporte ventilatório", "Neostigmina (com atropina) pode ser usada como teste/terapia conforme protocolo", "Reações precoces: material de anafilaxia à mão"],
    prescrever: [
      { contexto: "Acidente elapídico", texto: "Soro antielapídico — 10 ampolas IV em 20–60 min.\nMonitorar padrão respiratório e SpO2; IOT se insuficiência respiratória.\nConforme Guia de Animais Peçonhentos do MS/CIATox (0800 722 6001)." }
    ] },
  { id: "soro-antiescorpionico", nomes: ["Soro antiescorpiônico", "soro antiescorpionico", "SAEsc"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Escorpionismo moderado (vômitos, sudorese, agitação) ou grave (vômitos profusos, choque, EAP), sobretudo em crianças < 10 anos",
    adulto: "Guia MS: moderado 2–3 ampolas · grave 4–6 ampolas IV (ou soro antiaracnídico na mesma dose); leve: só analgesia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não há contraindicação: tratar sem atraso." },
    alergia: [], contra: ["Caso leve (só dor local): não usar soro — analgesia e lidocaína local", "Crianças: observar 6–12 h (piora sistêmica)", "Reações precoces: material de anafilaxia à mão"],
    prescrever: [
      { contexto: "Escorpionismo moderado/grave", texto: "Soro antiescorpiônico (ou antiaracnídico) — ___ ampolas IV (moderado 2–3 / grave 4–6) em 20–30 min.\nDor: lidocaína 2% sem vasoconstritor 2–4 mL infiltrada no local + dipirona.\nGrave: UTI (EAP/choque). Conforme Guia de Animais Peçonhentos do MS/CIATox." }
    ] },
  { id: "soro-antiaracnidico", nomes: ["Soro antiaracnídico", "soro antiaracnidico", "SAAr", "soro antiloxoscélico", "SALox"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Loxoscelismo (aranha-marrom) cutâneo moderado/grave ou cutâneo-visceral (hemólise); foneutrismo (armadeira) grave; escorpionismo",
    adulto: "Loxosceles: moderado 5 ampolas · grave/cutâneo-visceral 10 ampolas IV · Phoneutria grave: 5–10 ampolas IV (Guia MS)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não há contraindicação: tratar sem atraso." },
    alergia: [], contra: ["Loxoscelismo: associar prednisona 1 mg/kg/dia (máx 40 mg) por 5 dias", "Foneutrismo leve/moderado: só analgesia e anestesia local", "Reações precoces: material de anafilaxia à mão"],
    prescrever: [
      { contexto: "Loxoscelismo / foneutrismo grave", texto: "Soro antiaracnídico (ou antiloxoscélico) — ___ ampolas IV em 20–60 min\n(Loxosceles moderado 5 / grave 10; Phoneutria grave 5–10).\nLoxosceles: prednisona 1 mg/kg/dia por 5 dias; hemograma, bilirrubinas, creatinina.\nConforme Guia de Animais Peçonhentos do MS/CIATox (0800 722 6001)." }
    ] },
  { id: "soro-antilonomico", nomes: ["Soro antilonômico", "soro antilonomico", "SALon"], classe: "emergencia", receita: "hospitalar", tags: [],
    usos: "Acidente por lagarta Lonomia (taturana) com distúrbio de coagulação (TC alterado) ou sangramento",
    adulto: "Guia MS: moderado 5 ampolas · grave 10 ampolas IV; leve (TC normal): observar e repetir TC",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Não há contraindicação: tratar sem atraso." },
    alergia: [], contra: ["Sem coagulopatia: não usar soro (compressa fria e analgesia)", "Evitar procedimentos invasivos e IM enquanto houver coagulopatia", "Reações precoces: material de anafilaxia à mão"],
    prescrever: [
      { contexto: "Acidente por Lonomia com coagulopatia", texto: "Soro antilonômico — ___ ampolas IV (moderado 5 / grave 10) em 20–60 min.\nTC antes e 12–24 h após. Conforme Guia de Animais Peçonhentos do MS/CIATox (0800 722 6001)." }
    ] },

  /* ---------- tétano e raiva ---------- */
  { id: "vacina-dt", nomes: ["Vacina dupla adulto (dT)", "vacina dT", "vacina antitetânica", "dupla adulto", "dTpa"], classe: "imunologia", receita: "simples", tags: [],
    usos: "Profilaxia do tétano em ferimentos e vacinação de rotina do adulto (reforço a cada 10 anos); dTpa na gestação",
    adulto: "0,5 mL IM no deltoide; esquema básico 3 doses (0, 60 e 120 dias) e reforço a cada 10 anos",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Gestante: dTpa a partir de 20 semanas em toda gestação (completar esquema com dT se necessário)." },
    alergia: [], contra: ["Anafilaxia a dose anterior", "Ferimento: reforço se última dose > 5 anos (alto risco) ou > 10 anos (baixo risco)", "Registrar na caderneta e no sistema de informação"],
    prescrever: [
      { contexto: "Ferimento — profilaxia do tétano", texto: "USO INTRAMUSCULAR\n1. Vacina dupla adulto (dT) ----------------------- 1 dose\n   Aplicar 0,5 mL IM no deltoide, na sala de vacina.\n   (Vacinação incompleta/desconhecida: iniciar ou completar 3 doses; ferimento de alto risco nessa situação: associar imunoglobulina antitetânica.)" }
    ] },
  { id: "imunoglobulina-antitetanica", nomes: ["Imunoglobulina humana antitetânica", "IGHAT", "soro antitetânico", "SAT"], classe: "imunologia", receita: "hospitalar", tags: [],
    usos: "Ferimento de alto risco para tétano em pessoa com vacinação incompleta ou desconhecida; tratamento do tétano",
    adulto: "Profilaxia: IGHAT 250 UI IM (ou SAT 5.000 UI IM) · tratamento do tétano: IGHAT 3.000–6.000 UI IM (ou SAT 20.000 UI IV)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Pode e deve ser usada quando indicada." },
    alergia: [], contra: ["IGHAT é preferida (menos reações); SAT (heterólogo): risco de anafilaxia e doença do soro", "Aplicar em local diferente da vacina", "Limpeza e desbridamento do ferimento são essenciais"],
    prescrever: [
      { contexto: "Profilaxia — ferimento de alto risco", texto: "Imunoglobulina humana antitetânica (IGHAT) — 250 UI IM, dose única, em grupo muscular diferente da vacina dT.\n(Na falta: soro antitetânico 5.000 UI IM, em serviço com suporte para anafilaxia.)" },
      { contexto: "Tratamento do tétano", texto: "Imunoglobulina humana antitetânica — 3.000 a 6.000 UI IM, dividida em 2 grupos musculares, dose única\n(ou soro antitetânico 20.000 UI IV). Associar metronidazol, sedação e suporte em UTI." }
    ] },
  { id: "vacina-antirrabica", nomes: ["Vacina antirrábica", "vacina raiva (inativada)", "verorab"], classe: "imunologia", receita: "simples", tags: [],
    usos: "Profilaxia pós-exposição da raiva (mordedura/arranhadura por cão, gato, morcego e outros mamíferos) e pré-exposição",
    adulto: "Pós-exposição IM: 4 doses (dias 0, 3, 7 e 14) no deltoide (< 2 anos: vasto lateral); esquema intradérmico conforme nota técnica do MS",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Gestação não contraindica a profilaxia da raiva." },
    alergia: [], contra: ["Nunca aplicar no glúteo", "Cão/gato observável: conduta conforme protocolo (observar 10 dias)", "Imunodeprimido: esquema específico e sorologia", "Notificar no SINAN (atendimento antirrábico)"],
    prescrever: [
      { contexto: "Profilaxia pós-exposição (IM)", texto: "USO INTRAMUSCULAR\n1. Vacina antirrábica (inativada) ------------------- 4 doses\n   Aplicar 1 dose IM no deltoide nos dias 0, 3, 7 e 14, na sala de vacina.\n   Indicação de soro/imunoglobulina e conduta com o animal conforme protocolo do MS." }
    ] },
  { id: "imunoglobulina-antirrabica", nomes: ["Imunoglobulina humana antirrábica", "IGHAR", "soro antirrábico", "SAR"], classe: "imunologia", receita: "hospitalar", tags: [],
    usos: "Profilaxia pós-exposição da raiva em exposição grave (mordedura profunda/múltipla, cabeça, mãos, pés, mucosas; morcego), junto da vacina",
    adulto: "IGHAR 20 UI/kg (máx 1.500 UI) ou SAR 40 UI/kg (máx 3.000 UI), dose única, infiltrando nas lesões",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Gestação não contraindica." },
    alergia: [], contra: ["Infiltrar o máximo possível na(s) lesão(ões); restante IM em local diferente da vacina", "Até 7 dias após a 1ª dose da vacina (depois não é indicado)", "SAR (heterólogo): risco de anafilaxia — aplicar em serviço com suporte", "IGHAR: preferir se reação prévia a soro heterólogo ou imunodepressão"],
    prescrever: [
      { contexto: "Exposição grave", texto: "Soro antirrábico — 40 UI/kg (máx 3.000 UI) ou Imunoglobulina humana antirrábica — 20 UI/kg (máx 1.500 UI)\ninfiltrados ao redor das lesões; o que sobrar, IM em grupo muscular diferente da vacina. Dose única, junto com a vacina (D0)." }
    ] },

  /* ---------- anestésicos locais (injetáveis) ---------- */
  { id: "lidocaina-injetavel", nomes: ["Lidocaína injetável", "lidocaína com epinefrina", "lidocaína sem vasoconstritor", "xylocaína", "xilocaína"], classe: "analgesicos", receita: "hospitalar", tags: [],
    usos: "Anestesia local infiltrativa e bloqueios (suturas, drenagens, procedimentos); antiarrítmico IV na TV/FV refratária (alternativa à amiodarona)",
    apres: [{ rotulo: "1% (10 mg/mL)", mgPorMl: 10 }, { rotulo: "2% (20 mg/mL)", mgPorMl: 20 }],
    adulto: "Anestesia: máx 4,5 mg/kg (300 mg) sem vasoconstritor e 7 mg/kg (500 mg) com · antiarrítmico: 1–1,5 mg/kg IV, depois 0,5–0,75 mg/kg",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Anestesia local é segura na gestação." },
    alergia: [], contra: ["Toxicidade (zumbido, gosto metálico, perioral, convulsão, arritmia): parar e tratar com emulsão lipídica 20%", "Aspirar antes de injetar (evitar injeção intravascular)", "Com vasoconstritor: evitar em extremidades com circulação comprometida (conduta atual permite em dedos saudáveis) e em cardiopatas graves", "Antiarrítmico: usar solução SEM vasoconstritor"],
    prescrever: [
      { contexto: "Anestesia local — sutura", texto: "Lidocaína 1% (ou 2%) sem vasoconstritor — infiltrar ___ mL na borda da ferida com agulha fina, aspirando antes.\nDose máxima: 4,5 mg/kg (1% = 0,45 mL/kg; 2% = 0,22 mL/kg), até 300 mg.\nCom epinefrina 1:200.000: até 7 mg/kg (500 mg)." },
      { contexto: "PCR — TV/FV refratária", texto: "Lidocaína 2% sem vasoconstritor (20 mg/mL) — 1–1,5 mg/kg IV em bolus (ex.: 70 kg = 100 mg = 5 mL).\nRepetir 0,5–0,75 mg/kg a cada 5–10 min (máx 3 mg/kg). Após o retorno da circulação: 1–4 mg/min IV contínua." }
    ] },
  { id: "bupivacaina", nomes: ["Bupivacaína", "bupivacaina", "neocaína", "marcaína", "bupivacaína pesada"], classe: "analgesicos", receita: "hospitalar", tags: [],
    usos: "Anestesia regional de longa duração: bloqueios periféricos, infiltração de ferida operatória, raquianestesia (solução hiperbárica) e peridural",
    adulto: "Máx 2 mg/kg (175 mg) sem vasoconstritor e 2,5 mg/kg (225 mg) com vasoconstritor",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usada em analgesia/anestesia obstétrica (concentração 0,75% contraindicada na peridural obstétrica)." },
    alergia: [], contra: ["Muito cardiotóxica: injeção intravascular pode causar PCR refratária — emulsão lipídica 20% disponível", "Nunca IV nem em bloqueio de Bier", "Injetar fracionado, aspirando a cada 3–5 mL", "Raquianestesia: usar bupivacaína pesada (hiperbárica) 0,5%"],
    prescrever: [
      { contexto: "Infiltração / bloqueio periférico", texto: "Bupivacaína 0,25% (2,5 mg/mL) ou 0,5% (5 mg/mL), com ou sem epinefrina — ___ mL infiltrados/injetados em doses fracionadas, aspirando.\nDose máxima: 2 mg/kg sem vasoconstritor (0,25% = 0,8 mL/kg), até 175 mg." }
    ] },
  { id: "ropivacaina", nomes: ["Ropivacaína", "ropivacaina", "naropin"], classe: "analgesicos", receita: "hospitalar", tags: [],
    usos: "Bloqueios periféricos e peridural (anestesia e analgesia pós-operatória/de parto), com menor cardiotoxicidade e bloqueio motor que a bupivacaína",
    adulto: "Máx cerca de 3 mg/kg por bolus (≈ 200–225 mg); analgesia peridural contínua 0,2% conforme anestesiologista",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Usada em analgesia de parto." },
    alergia: [], contra: ["Toxicidade sistêmica (convulsão, arritmia): emulsão lipídica 20%", "Aspirar e injetar fracionado", "Apresentações 2, 7,5 e 10 mg/mL: conferir antes de aspirar"],
    prescrever: [
      { contexto: "Bloqueio periférico", texto: "Ropivacaína 0,5%–0,75% (5–7,5 mg/mL) — ___ mL guiados por ultrassom, em doses fracionadas com aspiração.\nDose máxima ≈ 3 mg/kg." }
    ] },
  { id: "prilocaina-felipressina", nomes: ["Prilocaína + felipressina", "prilocaína", "prilocaina", "citanest"], classe: "analgesicos", receita: "simples", tags: [],
    usos: "Anestesia local odontológica (tubetes 1,8 mL), alternativa à lidocaína com epinefrina em cardiopatas e hipertensos",
    adulto: "Máx cerca de 6 mg/kg (até 400 mg) por sessão — tubete de 1,8 mL a 3% = 54 mg",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Felipressina pode ter efeito ocitócico: preferir lidocaína com epinefrina na gestante." },
    alergia: [], contra: ["Meta-hemoglobinemia (doses altas, lactentes, deficiência de G6PD, uso de dapsona/nitratos): azul de metileno", "Aspirar antes de injetar"],
    prescrever: [
      { contexto: "Odontologia / procedimento", texto: "Prilocaína 3% + felipressina 0,03 UI/mL (tubete 1,8 mL) — ___ tubetes infiltrados, aspirando antes.\nDose máxima ≈ 6 mg/kg (adulto 70 kg: até 7 tubetes)." }
    ] },

  /* ---------- anti-histamínicos ---------- */
  { id: "levocetirizina", nomes: ["Levocetirizina", "dicloridrato de levocetirizina", "zyxem"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica, urticária crônica, prurido alérgico (2ª geração, pouco sedativo)",
    adulto: "5 mg VO 1 vez ao dia (≥ 6 anos)",
    renal: [{ abaixo: 50, texto: "ClCr 30–49: 5 mg em dias alternados; 10–29: a cada 3 dias; < 10: contraindicada." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir loratadina ou cetirizina." },
    alergia: [], contra: ["Sonolência leve em alguns pacientes", "IR grave (ClCr < 10)", "Pediatria < 6 anos: conferir apresentação e bula"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 6 anos", texto: "USO ORAL\n1. Levocetirizina 5 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, à noite, por 30 dias." }
    ] },
  { id: "ebastina", nomes: ["Ebastina", "ebastel"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica e urticária (2ª geração, não sedativo)",
    adulto: "10–20 mg VO 1 vez ao dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir loratadina." },
    alergia: [], contra: ["Prolongamento de QT com azóis/macrolídeos (cetoconazol, eritromicina): evitar associação", "Hepatopatia grave: máx 10 mg"],
    prescrever: [
      { contexto: "Adulto e > 12 anos", texto: "USO ORAL\n1. Ebastina 10 mg ------------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 30 dias (urticária/rinite grave: 2 comprimidos ao dia)." },
      { contexto: "Criança 2–11 anos (xarope 1 mg/mL)", texto: "USO ORAL\n1. Ebastina xarope 1 mg/mL ------------------------ 1 frasco\n   2–5 anos: dar 2,5 mL 1 vez ao dia; 6–11 anos: dar 5 mL 1 vez ao dia, por até 30 dias.\n   (Conferir bula da apresentação.)" }
    ] },
  { id: "bilastina", nomes: ["Bilastina", "alektos"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica e urticária crônica (2ª geração, não sedativo)",
    adulto: "20 mg VO 1 vez ao dia, em jejum (≥ 12 anos)",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Sem dados suficientes; preferir loratadina." },
    alergia: [], contra: ["Tomar 1 h antes ou 2 h depois de refeição ou suco de fruta (reduz a absorção)", "Cetoconazol, eritromicina, ciclosporina, diltiazem aumentam o nível"],
    prescrever: [
      { contexto: "Adulto e ≥ 12 anos", texto: "USO ORAL\n1. Bilastina 20 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, em jejum (1 hora antes ou 2 horas depois de comer), por 30 dias." }
    ] },
  { id: "rupatadina", nomes: ["Rupatadina", "fumarato de rupatadina", "rupafin"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica e urticária crônica (anti-histamínico e antagonista do PAF)",
    adulto: "10 mg VO 1 vez ao dia (≥ 12 anos)",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Sem dados suficientes; preferir loratadina." },
    alergia: [], contra: ["Inibidores de CYP3A4 (cetoconazol, eritromicina, suco de toranja): evitar", "QT longo", "Sonolência ocasional"],
    prescrever: [
      { contexto: "Adulto e ≥ 12 anos", texto: "USO ORAL\n1. Rupatadina 10 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 30 dias." }
    ] },
  { id: "epinastina-oral", nomes: ["Epinastina oral", "cloridrato de epinastina", "talerc"], classe: "anti-histaminicos", receita: "simples", tags: [],
    usos: "Rinite alérgica, urticária e prurido alérgico (2ª geração)",
    adulto: "10–20 mg VO 1 vez ao dia",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Sem dados suficientes; preferir loratadina." },
    alergia: [], contra: ["Sonolência ocasional", "Hepatopatia: cautela", "Pediatria: conferir bula da apresentação"],
    prescrever: [
      { contexto: "Adulto — rinite / urticária", texto: "USO ORAL\n1. Epinastina 20 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 30 dias (rinite leve: 10 mg)." }
    ] },
  { id: "cetotifeno", nomes: ["Cetotifeno", "fumarato de cetotifeno", "zaditen", "asmalergin"], classe: "anti-histaminicos", receita: "simples", tags: ["sedativo"],
    usos: "Rinite e conjuntivite alérgicas, urticária, dermatite atópica (adjuvante); profilaxia de atopia em crianças (eficácia modesta)",
    adulto: "1 mg VO 12/12h (até 2 mg 12/12h)",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Dados limitados; preferir loratadina." },
    alergia: [], contra: ["Sedação e aumento de apetite/peso", "Antidiabéticos orais: rara trombocitopenia", "Efeito pleno após semanas", "Convulsões (reduz limiar)"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Cetotifeno 1 mg ------------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 30 dias. Pode dar sono." },
      { contexto: "Criança ≥ 3 anos (xarope 0,2 mg/mL)", texto: "USO ORAL\n1. Cetotifeno xarope 0,2 mg/mL ----------------------- 1 frasco\n   Dar 5 mL (1 mg) de 12 em 12 horas.\n   (6 meses–3 anos: 0,05 mg/kg = 0,25 mL/kg de 12 em 12 horas.)" }
    ] },

  /* ---------- urologia ---------- */
  { id: "solifenacina", nomes: ["Solifenacina", "succinato de solifenacina", "vesicare"], classe: "urologia", receita: "simples", tags: ["anticolinergico"],
    usos: "Bexiga hiperativa (urgência, polaciúria, incontinência de urgência) após medidas comportamentais",
    adulto: "5 mg VO 1 vez ao dia (até 10 mg)",
    renal: [{ abaixo: 30, texto: "Máximo 5 mg/dia." }],
    gestacao: { nivel: "evitar", texto: "Sem dados suficientes." },
    alergia: [], contra: ["Retenção urinária, glaucoma de ângulo fechado não tratado, miastenia, megacólon", "Idoso: efeito anticolinérgico cognitivo (preferir mirabegrona)", "Inibidores fortes de CYP3A4: máx 5 mg", "Boca seca e constipação"],
    prescrever: [
      { contexto: "Bexiga hiperativa", texto: "USO ORAL\n1. Solifenacina 5 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo; reavaliar em 4–8 semanas." }
    ] },
  { id: "tolterodina", nomes: ["Tolterodina", "tartarato de tolterodina", "detrusitol"], classe: "urologia", receita: "simples", tags: ["anticolinergico"],
    usos: "Bexiga hiperativa (urgência, polaciúria, incontinência de urgência)",
    adulto: "2 mg VO 12/12h ou 4 mg de liberação prolongada 1 vez ao dia",
    renal: [{ abaixo: 30, texto: "1 mg 12/12h (ou 2 mg LP/dia)." }],
    gestacao: { nivel: "evitar", texto: "Sem dados suficientes." },
    alergia: [], contra: ["Retenção urinária, glaucoma de ângulo fechado, miastenia", "Idoso: risco cognitivo (anticolinérgico)", "Hepatopatia ou inibidor de CYP3A4: 1 mg 12/12h", "QT longo"],
    prescrever: [
      { contexto: "Bexiga hiperativa", texto: "USO ORAL\n1. Tolterodina 4 mg liberação prolongada ------------ 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia. Uso contínuo; reavaliar em 4–8 semanas." }
    ] },
  { id: "mirabegrona", nomes: ["Mirabegrona", "myrbetric"], classe: "urologia", receita: "simples", tags: [],
    usos: "Bexiga hiperativa, sobretudo em idosos ou intolerância a anticolinérgicos (agonista beta-3)",
    adulto: "25 mg VO 1 vez ao dia; pode aumentar para 50 mg após 4–8 semanas",
    renal: [{ abaixo: 30, texto: "ClCr 15–29: máximo 25 mg/dia; < 15 ou diálise: não recomendada." }],
    gestacao: { nivel: "evitar", texto: "Sem dados suficientes." },
    alergia: [], contra: ["HAS grave não controlada (≥ 180/110): contraindicada; medir PA no seguimento", "Aumenta nível de digoxina e de substratos do CYP2D6 (metoprolol, tricíclicos)", "Hepatopatia moderada: máx 25 mg"],
    prescrever: [
      { contexto: "Bexiga hiperativa", texto: "USO ORAL\n1. Mirabegrona 25 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, inteiro. Uso contínuo; medir a pressão no retorno." }
    ] },
  { id: "dutasterida", nomes: ["Dutasterida", "avodart"], classe: "urologia", receita: "simples", tags: [],
    usos: "Hiperplasia prostática benigna com próstata aumentada (> 30–40 mL), reduz risco de retenção e cirurgia",
    adulto: "0,5 mg VO 1 vez ao dia (efeito pleno em 6 meses)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Uso masculino. Gestantes não devem manipular cápsulas rompidas (feminização de feto masculino)." },
    alergia: [], contra: ["Reduz o PSA em ~50% após 6 meses: dobrar o valor para rastreio", "Disfunção sexual, ginecomastia", "Não doar sangue até 6 meses após a última dose"],
    prescrever: [
      { contexto: "HPB", texto: "USO ORAL\n1. Dutasterida 0,5 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, inteira. Uso contínuo." }
    ] },
  { id: "dutasterida-tansulosina", nomes: ["Dutasterida + tansulosina", "dutasterida/tansulosina", "combodart"], classe: "urologia", receita: "simples", tags: [],
    usos: "HPB sintomática moderada a grave com próstata aumentada (terapia combinada)",
    adulto: "1 cápsula (0,5 mg + 0,4 mg) VO 1 vez ao dia, 30 min após a mesma refeição",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Uso masculino. Gestantes não devem manipular cápsulas rompidas." },
    alergia: [], contra: ["Hipotensão postural (1ª dose: tomar à noite)", "Avisar o oftalmologista antes de cirurgia de catarata (íris flácida)", "PSA cai ~50% (dobrar o valor)", "Não doar sangue até 6 meses após"],
    prescrever: [
      { contexto: "HPB", texto: "USO ORAL\n1. Dutasterida 0,5 mg + tansulosina 0,4 mg ----------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, 30 minutos após a mesma refeição. Uso contínuo.\n   Levantar devagar (pode causar tontura)." }
    ] },
  { id: "alfuzosina", nomes: ["Alfuzosina", "cloridrato de alfuzosina", "xatral"], classe: "urologia", receita: "simples", tags: [],
    usos: "HPB sintomática; terapia expulsiva de cálculo ureteral distal (alternativa à tansulosina)",
    adulto: "10 mg (liberação prolongada) VO 1 vez ao dia, após o jantar",
    renal: [{ abaixo: 30, texto: "Usar com cautela (dados limitados)." }],
    gestacao: { nivel: "evitar", texto: "Uso masculino (HPB); na litíase da gestante, não é a escolha." },
    alergia: [], contra: ["Hepatopatia moderada/grave", "Hipotensão postural; inibidores fortes de CYP3A4", "Síndrome da íris flácida na cirurgia de catarata", "QT longo (cautela)"],
    prescrever: [
      { contexto: "HPB", texto: "USO ORAL\n1. Alfuzosina 10 mg liberação prolongada ---------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, logo após o jantar, inteiro. Uso contínuo.\n   Levantar devagar (pode causar tontura)." }
    ] },
  { id: "citrato-potassio", nomes: ["Citrato de potássio", "citrato de potassio", "litocit"], classe: "urologia", receita: "simples", tags: ["hipercalemia"],
    usos: "Prevenção de cálculos renais com hipocitratúria, cálculos de ácido úrico e cistina, acidose tubular renal distal",
    adulto: "30–60 mEq/dia VO divididos em 2–3 tomadas com as refeições (alvo: pH urinário 6,0–7,0)",
    renal: [{ abaixo: 30, texto: "Risco de hipercalemia: evitar ou usar com K sérico frequente." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usado se indicado, com controle de K." },
    alergia: [], contra: ["Hipercalemia; IECA/BRA, espironolactona, AINE: dosar K", "Úlcera péptica ou retardo de esvaziamento gástrico (comprimido de cera)", "ITU por germe produtor de urease (cálculo de estruvita)"],
    prescrever: [
      { contexto: "Litíase com hipocitratúria", texto: "USO ORAL\n1. Citrato de potássio 10 mEq --------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, junto das refeições, com bastante água. Uso contínuo.\n   (Ajustar até 60 mEq/dia pelo citrato urinário e pH; dosar potássio.)" }
    ] },
  { id: "fenazopiridina", nomes: ["Fenazopiridina", "cloridrato de fenazopiridina", "pyridium"], classe: "urologia", receita: "simples", tags: [],
    usos: "Alívio sintomático da disúria (cistite, pós-procedimento urológico) por no máximo 2 dias, junto do tratamento da causa",
    adulto: "200 mg VO 8/8h após as refeições, por até 2 dias",
    renal: [{ abaixo: 50, texto: "Evitar (acúmulo, toxicidade)." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; uso curto se necessário." },
    alergia: [], contra: ["Não trata infecção (associar antibiótico na cistite)", "Urina e lentes de contato alaranjadas", "Deficiência de G6PD (hemólise, meta-hemoglobinemia)", "Hepatopatia"],
    prescrever: [
      { contexto: "Disúria intensa (adulto)", texto: "USO ORAL\n1. Fenazopiridina 200 mg ------------------------ 6 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 2 dias.\n   A urina fica laranja (normal)." }
    ] },
]);
