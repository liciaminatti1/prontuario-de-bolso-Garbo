// Sedação e analgesia contínuas no paciente intubado
registrarFicha({
  id: "sedacao-continua",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Sedação e analgesia contínuas no paciente intubado",
  resumo: "Analgossedação após intubação na sala de emergência: analgesia primeiro, sedação leve sempre que possível (RASS −2 a 0), com tabela de diluições e doses de adulto e por kg.",
  palavrasChave: "sedacao analgesia continua intubado ventilacao mecanica fentanil midazolam propofol dexmedetomidina precedex cetamina morfina rass bps cpot diluicao bomba de infusao analgossedacao",
  critico: {
    tempo: "Iniciar em até 10 min da intubação",
    texto: "O efeito do etomidato e da succinilcolina passa em minutos e o rocurônio dura cerca de 1 h: paciente paralisado sem sedação fica consciente. Analgesia primeiro; depois sedação mínima eficaz."
  },
  alarmes: [
    "Paciente sob bloqueio neuromuscular sem sedação adequada (taquicardia e hipertensão podem ser os únicos sinais)",
    "Hipotensão após iniciar sedativo (principalmente propofol e midazolam em bolus)",
    "Bradicardia com dexmedetomidina",
    "Propofol em dose alta e prolongada (> 4 mg/kg/h por > 48 h): acidose, rabdomiólise, hipertrigliceridemia (síndrome da infusão do propofol)",
    "Agitação súbita: checar dor, hipóxia, tubo deslocado, assincronia, bexigoma, abstinência, delirium"
  ],
  conduta: [
    "Analgesia primeiro (analgossedação): opioide em infusão contínua, titulado por escala de dor (BPS > 5 ou CPOT > 2 indica dor)",
    "Sedação leve como meta (RASS −2 a 0) na maioria dos casos. Sedação profunda (RASS −4 a −5) só se: bloqueio neuromuscular, SDRA grave com assincronia, hipertensão intracraniana, estado de mal epiléptico, controle de temperatura com tremores",
    "Escolha do sedativo: propofol ou dexmedetomidina preferidos a benzodiazepínico em adultos (PADIS 2018; atualização 2025 sugere dexmedetomidina em vez de propofol quando se busca sedação leve). Midazolam em choque grave ou falta de outros",
    "Choque: preferir fentanil + midazolam ou cetamina em doses baixas; evitar bolus de propofol",
    "Broncoespasmo grave: cetamina é opção (efeito broncodilatador)",
    "Reavaliar RASS a cada 2–4 h e ajustar; interromper ou reduzir diariamente (despertar diário) quando estável",
    "Rastrear delirium (CAM-ICU) e tratar causas; mobilização precoce quando possível",
    "Criança: mesmo princípio; escalas COMFORT-B ou FLACC; propofol não deve ser usado para sedação contínua prolongada"
  ],
  exames: [
    "Gasometria arterial após ajustes de sedação e ventilador",
    "Triglicerídeos e CK a cada 48–72 h se propofol em uso prolongado",
    "Eletrólitos, função renal e hepática (acúmulo de midazolam e morfina em insuficiência renal/hepática)"
  ],
  tratamento: [
    {
      droga: "Fentanil 50 mcg/mL",
      linha: "l1",
      dose: "Adulto 1–3 mcg/kg/h (PADIS: 0,7–10 mcg/kg/h); criança 1–3 mcg/kg/h. Bolus 0,5–1 mcg/kg se dor",
      via: "IV contínua",
      intervalo: "Titular a cada 15–30 min pela escala de dor",
      duracao: "Enquanto intubado",
      monitorizacao: "PA, FR (se em modo espontâneo), íleo",
      contraindicacoes: "—",
      ajustes: "Diluição: 20 mL (1.000 mcg) + 80 mL SF 0,9% = 10 mcg/mL. Acumula em infusões longas. Uso > 5–7 dias: desmame gradual (abstinência)"
    },
    {
      droga: "Propofol 1% (10 mg/mL)",
      linha: "l1",
      dose: "Adulto 0,3–3 mg/kg/h (5–50 mcg/kg/min)",
      via: "IV contínua, sem diluir",
      intervalo: "Titular a cada 5–10 min",
      duracao: "Preferir < 48–72 h em dose alta",
      monitorizacao: "PA, triglicerídeos, CK, lactato",
      contraindicacoes: "Choque, alergia a ovo/soja (relativa); sedação contínua prolongada em crianças",
      ajustes: "Trocar frasco e equipo a cada 12 h (emulsão lipídica). Não passar de 4 mg/kg/h"
    },
    {
      droga: "Dexmedetomidina 100 mcg/mL",
      linha: "l1",
      dose: "Adulto 0,2–0,7 mcg/kg/h (até 1,5 mcg/kg/h); criança 0,2–1 mcg/kg/h",
      via: "IV contínua, sem bolus",
      intervalo: "Titular a cada 30 min",
      duracao: "—",
      monitorizacao: "Bradicardia, hipotensão",
      contraindicacoes: "Bradicardia, bloqueio AV, choque",
      ajustes: "Diluição: 2 mL (200 mcg) + 48 mL SF 0,9% = 4 mcg/mL. Para sedação leve e delirium agitado; não serve para sedação profunda nem com bloqueador"
    },
    {
      droga: "Midazolam 5 mg/mL",
      linha: "alt",
      dose: "Adulto 0,02–0,1 mg/kg/h; criança 0,05–0,2 mg/kg/h. Bolus 0,01–0,05 mg/kg se agitação",
      via: "IV contínua",
      intervalo: "Titular a cada 30–60 min",
      duracao: "—",
      monitorizacao: "PA, acúmulo (despertar prolongado), delirium",
      contraindicacoes: "—",
      ajustes: "Diluição: 30 mL (150 mg) + 120 mL SF 0,9% = 1 mg/mL. Acumula na insuficiência renal e hepática e em obesos"
    },
    {
      droga: "Cetamina 50 mg/mL (adjuvante)",
      linha: "adj",
      dose: "Analgesia adjuvante: 0,5 mg/kg em bolus e 1–2 mcg/kg/min (0,06–0,12 mg/kg/h)",
      via: "IV contínua",
      intervalo: "Titular",
      duracao: "—",
      monitorizacao: "PA, FC, secreção, reações de emergência",
      contraindicacoes: "Hipertensão grave, SCA",
      ajustes: "Diluição: 10 mL (500 mg) + 240 mL SF 0,9% = 2 mg/mL. Poupa opioide; útil em broncoespasmo e choque"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "alt",
      dose: "Adulto: iniciar 1–2 mg/h e titular (PADIS: 2–30 mg/h); criança 10–40 mcg/kg/h",
      via: "IV contínua",
      intervalo: "Titular a cada 30–60 min",
      duracao: "—",
      monitorizacao: "Hipotensão (libera histamina)",
      contraindicacoes: "Insuficiência renal (metabólito ativo acumula)",
      ajustes: "Diluição: 10 mL (100 mg) + 90 mL SF 0,9% = 1 mg/mL. Alternativa quando não houver fentanil"
    }
  ],
  tabelas: [
    {
      titulo: "Diluições e vazões de exemplo (adulto 70 kg)",
      colunas: ["Droga", "Solução", "Concentração", "Dose de exemplo", "Vazão"],
      linhas: [
        ["Fentanil", "20 mL (1.000 mcg) + 80 mL SF", "10 mcg/mL", "1 mcg/kg/h", "7 mL/h"],
        ["Propofol 1%", "Puro", "10 mg/mL", "1 mg/kg/h", "7 mL/h"],
        ["Dexmedetomidina", "2 mL (200 mcg) + 48 mL SF", "4 mcg/mL", "0,5 mcg/kg/h", "8,8 mL/h"],
        ["Midazolam", "30 mL (150 mg) + 120 mL SF", "1 mg/mL", "0,05 mg/kg/h", "3,5 mL/h"],
        ["Cetamina", "10 mL (500 mg) + 240 mL SF", "2 mg/mL", "0,1 mg/kg/h", "3,5 mL/h"],
        ["Morfina", "10 mL (100 mg) + 90 mL SF", "1 mg/mL", "2 mg/h", "2 mL/h"]
      ],
      nota: "Vazão (mL/h) = dose por hora × peso ÷ concentração. Muitos serviços usam fentanil puro (50 mcg/mL): 70 kg a 1 mcg/kg/h = 1,4 mL/h. Seguir padronização da farmácia local."
    },
    {
      titulo: "RASS (Richmond Agitation-Sedation Scale)",
      colunas: ["Escore", "Descrição"],
      linhas: [
        ["+4", "Combativo"],
        ["+3", "Muito agitado, puxa tubo ou cateteres"],
        ["+2", "Agitado, briga com o ventilador"],
        ["+1", "Inquieto, sem agressividade"],
        ["0", "Alerta e calmo"],
        ["−1", "Sonolento, abre os olhos à voz por > 10 s"],
        ["−2", "Sedação leve, contato visual à voz < 10 s"],
        ["−3", "Sedação moderada, movimento à voz sem contato visual"],
        ["−4", "Sedação profunda, só responde ao estímulo físico"],
        ["−5", "Não desperta"]
      ]
    }
  ],
  prescricao: {
    hospitalar: "ANALGOSSEDAÇÃO CONTÍNUA — ADULTO (peso: ___ kg; exemplo 70 kg)\n1. Fentanil 50 mcg/mL — 20 mL (1.000 mcg) + SF 0,9% 80 mL (10 mcg/mL), IV em bomba a 7 mL/h (1 mcg/kg/h); titular de 0,7 a 3 mcg/kg/h (5–21 mL/h) para BPS ≤ 5 / CPOT < 3.\n2. Escolher um sedativo:\n   a) Propofol 1% (10 mg/mL) puro, IV em bomba a 7 mL/h (1 mg/kg/h); titular 0,3–3 mg/kg/h (2–21 mL/h); trocar frasco e equipo a cada 12 h; ou\n   b) Midazolam 5 mg/mL — 30 mL (150 mg) + SF 0,9% 120 mL (1 mg/mL), IV em bomba a 3,5 mL/h (0,05 mg/kg/h); titular 0,02–0,1 mg/kg/h (1,4–7 mL/h); ou\n   c) Dexmedetomidina 100 mcg/mL — 2 mL + SF 0,9% 48 mL (4 mcg/mL), IV em bomba a 8,8 mL/h (0,5 mcg/kg/h); titular 0,2–0,7 mcg/kg/h (3,5–12 mL/h); sem bolus.\n3. Meta: RASS −2 a 0 (registrar a meta do dia). Se sedação profunda indicada (bloqueador, HIC, estado de mal): RASS −4 a −5.\n4. Avaliar RASS e dor (BPS/CPOT) de 2/2 h a 4/4 h; despertar diário quando estável.\n5. Proteção ocular (lubrificante) e mudança de decúbito de 2/2 h.\n6. Se agitação: checar dor, tubo, SpO₂, bexiga, assincronia antes de aumentar sedativo.\n\nCRIANÇA (por kg)\n- Fentanil 1–3 mcg/kg/h IV contínuo.\n- Midazolam 0,05–0,2 mg/kg/h IV contínuo (ou dexmedetomidina 0,2–1 mcg/kg/h).\n- Não usar propofol para sedação contínua prolongada.\n- Escala COMFORT-B ou FLACC a cada 4 h."
  },
  orientacoesRetorno: [
    "Família: explicar que o paciente pode ser acordado diariamente para avaliação e que a confusão ao despertar (delirium) é comum e geralmente transitória",
    "Após uso prolongado de opioide e benzodiazepínico: desmame gradual para evitar abstinência",
    "Após a alta da UTI: rastrear fraqueza, alterações de memória, ansiedade e pesadelos (síndrome pós-terapia intensiva)"
  ],
  encaminhar: [
    "UTI: todo paciente em ventilação mecânica e sedação contínua",
    "Transporte inter-hospitalar com bombas de infusão e sedação garantida"
  ],
  fontes: [
    "Society of Critical Care Medicine — Clinical Practice Guidelines for Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult ICU Patients (PADIS, Crit Care Med, 2018)",
    "Society of Critical Care Medicine — Focused Update of the PADIS Guideline (Crit Care Med, 2025)",
    "AMIB/SBPT — Joint statement on evidence-based practices in mechanical ventilation (J Bras Pneumol, 2025)",
    "Bulas ANVISA de propofol, dexmedetomidina, midazolam e fentanil (consultar versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
