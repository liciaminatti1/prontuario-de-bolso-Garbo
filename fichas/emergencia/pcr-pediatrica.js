// Parada cardiorrespiratória pediátrica (PALS)
registrarFicha({
  id: "pcr-pediatrica",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "pediatrico",
  formato: "completo",
  titulo: "Parada cardiorrespiratória pediátrica (PALS)",
  resumo: "Lactente ou criança (até a puberdade) que não responde, não respira normalmente e sem pulso, ou com FC < 60 bpm e má perfusão apesar de oxigenação e ventilação. Na criança, a causa mais comum é respiratória ou choque.",
  palavrasChave: "pcr pediatrica parada cardiaca crianca lactente pals rcp 15:2 adrenalina epinefrina 0,01 mg/kg desfibrilacao 2 j/kg 4 j/kg amiodarona lidocaina bradicardia intraossea broselow",
  critico: {
    tempo: "FC < 60 com má perfusão = RCP",
    texto: "Compressões 100–120/min (1/3 do diâmetro do tórax), 15:2 com 2 socorristas. Adrenalina 0,01 mg/kg IV/IO (máx 1 mg). Choque 2 J/kg, depois 4 J/kg."
  },
  alarmes: [
    "Bradicardia < 60 bpm com má perfusão apesar de O₂ e ventilação: iniciar compressões",
    "Gasping ou apneia em criança que estava com desconforto respiratório",
    "Hiperventilação durante a RCP (piora o retorno venoso)",
    "Pausas > 10 s nas compressões",
    "Suspeita de maus-tratos (lesões incompatíveis com a história)",
    "Hipoglicemia, hipercalemia ou intoxicação como causa"
  ],
  condutaInicial: [
    "Verificar responsividade, respiração e pulso (braquial no lactente, carotídeo ou femoral na criança) em até 10 s. Chamar ajuda e pedir desfibrilador",
    "Compressões: 100–120/min, profundidade de pelo menos 1/3 do diâmetro anteroposterior (cerca de 4 cm no lactente e 5 cm na criança), retorno total",
    "Lactente: 2 polegares com mãos envolvendo o tórax (2 socorristas). Criança: 1 ou 2 mãos na metade inferior do esterno",
    "Relação 30:2 com 1 socorrista e 15:2 com 2 socorristas. Ventilar com bolsa-válvula-máscara e O₂ 100%, só o suficiente para elevar o tórax",
    "Com via aérea avançada: compressões contínuas e 1 ventilação a cada 2–3 s (20–30/min)",
    "Monitor/desfibrilador: chocável (FV/TVSP) → choque 2 J/kg; não chocável → adrenalina o quanto antes",
    "Acesso IV; se não obtido rapidamente, intraósseo (tíbia proximal)",
    "Estimar o peso: fita de Broselow ou fórmula (ver tabela); calcular doses",
    "Glicemia capilar e busca de causas reversíveis (5H5T)"
  ],
  fataisExcluir: [
    "Hipóxia (causa mais comum: insuficiência respiratória, obstrução)",
    "Hipovolemia (desidratação, hemorragia, sepse)",
    "Hipoglicemia",
    "Hipo/hipercalemia, acidose",
    "Hipotermia (afogamento)",
    "Pneumotórax hipertensivo, tamponamento",
    "Intoxicação",
    "Trauma não acidental"
  ],
  proximaDecisao: "RCE → cuidados pós-PCR pediátricos (ver ficha pos-pcr): evitar hipotensão, hipóxia e hiperóxia, hipo e hipercapnia, prevenir febre. Bradicardia com pulso e má perfusão após O₂ e ventilação → adrenalina 0,01 mg/kg e compressões se FC < 60.",
  clinica: {
    anamnese: [
      "Evento: testemunhado? Tempo sem RCP, afogamento, engasgo, trauma",
      "Doença atual: bronquiolite, asma, diarreia, febre, convulsão",
      "Cardiopatia congênita, prematuridade, doença crônica, traqueostomia",
      "Possível ingestão de medicamentos ou produtos do domicílio",
      "Idade e peso conhecidos (caderneta da criança)"
    ],
    exameFisico: [
      "Pulso central (braquial em lactente), respiração, cor",
      "Temperatura, glicemia",
      "Sinais de trauma, petéquias, queimaduras, lesões em diferentes estágios",
      "Murmúrio vesicular assimétrico, turgência jugular",
      "Fontanela, pupilas"
    ],
    diferenciais: [
      { dx: "Bradicardia com pulso", pista: "Pulso presente: oxigenar e ventilar primeiro; compressões se FC < 60 com má perfusão" },
      { dx: "Choque descompensado", pista: "Pulso fraco, hipotensão para a idade; tratar como choque (ver ficha choque)" },
      { dx: "Apneia por convulsão ou intoxicação", pista: "Pulso presente; ventilar" },
      { dx: "Obstrução por corpo estranho", pista: "Engasgo súbito; ver ficha ovace" }
    ],
    gravidade: [
      "Ritmo mais comum: assistolia ou AESP (origem hipóxica)",
      "FV/TVSP é menos comum: pensar cardiopatia, intoxicação, eletrocussão, colapso súbito",
      "Hipotensão para a idade: PAS < 70 mmHg + (2 × idade em anos) de 1 a 10 anos; < 70 mmHg de 1 mês a 1 ano; < 90 mmHg acima de 10 anos"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar",
      pedido: "Glicemia capilar imediata.",
      porQue: "Hipoglicemia é causa e complicação frequente.",
      esperar: "—",
      interpretacao: "< 60 mg/dL: glicose 10% 2–5 mL/kg IV/IO.",
      limitacoes: "—"
    },
    {
      nome: "Gasometria e eletrólitos",
      pedido: "Gasometria venosa ou arterial com lactato, sódio, potássio, cálcio iônico.",
      porQue: "Acidose, hipercalemia, hipocalcemia.",
      esperar: "Acidose mista.",
      interpretacao: "Hipercalemia: cálcio e bicarbonato.",
      limitacoes: "Não interromper compressões."
    },
    {
      nome: "Capnografia em forma de onda",
      pedido: "Capnografia contínua após intubação.",
      porQue: "Confirmar posição do tubo e qualidade da RCP.",
      esperar: "Curva presente.",
      interpretacao: "Subida súbita e mantida sugere RCE.",
      limitacoes: "Não usar valor isolado para encerrar a RCP."
    }
  ],
  tratamento: [
    {
      droga: "Adrenalina (epinefrina) 0,1 mg/mL (diluir 1 mL da ampola de 1 mg/mL + 9 mL de SF 0,9%)",
      linha: "l1",
      dose: "0,01 mg/kg = 0,1 mL/kg da solução 0,1 mg/mL (máx 1 mg = 10 mL)",
      via: "IV ou IO em bolus, seguido de 5–10 mL de SF 0,9%",
      intervalo: "A cada 3–5 min",
      duracao: "Enquanto durar a PCR",
      monitorizacao: "Ritmo, ETCO₂",
      contraindicacoes: "Nenhuma na PCR",
      ajustes: "Não chocável: 1ª dose em até 5 min do início das compressões. Chocável: após as tentativas iniciais de desfibrilação. Via endotraqueal só se sem acesso: 0,1 mg/kg (0,1 mL/kg da ampola 1 mg/mL), seguida de 5 mL de SF"
    },
    {
      droga: "Desfibrilação",
      linha: "l1",
      dose: "1º choque 2 J/kg; 2º choque 4 J/kg; seguintes ≥ 4 J/kg, máx 10 J/kg ou a dose de adulto",
      via: "Pás pediátricas (< 10 kg ou < 1 ano) ou de adulto (> 10 kg); posição anterolateral ou anteroposterior",
      intervalo: "A cada checagem de ritmo (2 min) enquanto FV/TVSP",
      duracao: "Até RCE",
      monitorizacao: "Retomar compressões logo após o choque",
      contraindicacoes: "Ritmos não chocáveis",
      ajustes: "DEA: usar atenuador pediátrico em < 8 anos; se não houver, usar o DEA comum"
    },
    {
      droga: "Amiodarona 50 mg/mL",
      linha: "l1",
      dose: "5 mg/kg (máx 300 mg por dose)",
      via: "IV ou IO em bolus",
      intervalo: "Pode repetir até 3 doses na FV/TVSP refratária",
      duracao: "Máx total 15 mg/kg",
      monitorizacao: "Após RCE: hipotensão, bradicardia",
      contraindicacoes: "Ritmos não chocáveis",
      ajustes: "Alternativa: lidocaína"
    },
    {
      droga: "Lidocaína 2% sem vasoconstritor (20 mg/mL)",
      linha: "alt",
      dose: "1 mg/kg (ataque)",
      via: "IV ou IO em bolus",
      intervalo: "Manutenção após RCE 20–50 mcg/kg/min",
      duracao: "—",
      monitorizacao: "Convulsão, hipotensão",
      contraindicacoes: "—",
      ajustes: "Na FV/TVSP refratária, alternativa à amiodarona"
    },
    {
      droga: "Glicose 10%",
      linha: "adj",
      dose: "2–5 mL/kg (0,2–0,5 g/kg)",
      via: "IV ou IO",
      intervalo: "Repetir conforme glicemia",
      duracao: "—",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Só se hipoglicemia"
    },
    {
      droga: "Gluconato de cálcio 10%",
      linha: "adj",
      dose: "0,5–1 mL/kg (50–100 mg/kg), máx 20 mL (2 g)",
      via: "IV ou IO lento",
      intervalo: "Pode repetir",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar de rotina",
      ajustes: "Só se hipercalemia, hipocalcemia, hipermagnesemia ou intoxicação por bloqueador de canal de cálcio"
    },
    {
      droga: "Bicarbonato de sódio 8,4% (1 mEq/mL)",
      linha: "adj",
      dose: "1 mEq/kg (1 mL/kg); em recém-nascidos e lactentes pequenos diluir 1:1 com água destilada (4,2%)",
      via: "IV ou IO lento",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Gasometria",
      contraindicacoes: "Uso rotineiro na PCR não recomendado",
      ajustes: "Hipercalemia e intoxicação por tricíclicos"
    },
    {
      droga: "Atropina 0,25 mg/mL ou 0,5 mg/mL",
      linha: "adj",
      dose: "0,02 mg/kg (mín 0,1 mg; máx 0,5 mg por dose)",
      via: "IV ou IO",
      intervalo: "Pode repetir 1 vez",
      duracao: "—",
      monitorizacao: "FC",
      contraindicacoes: "Não faz parte do tratamento da PCR",
      ajustes: "Só na bradicardia com pulso por aumento do tônus vagal ou bloqueio AV primário, após oxigenação e ventilação"
    }
  ],
  destino: {
    agora: [
      "RCP de alta qualidade, ventilação adequada sem hiperventilar, adrenalina precoce no ritmo não chocável",
      "Chamar pediatra/intensivista e regulação"
    ],
    reavaliar: [
      "Ritmo e pulso a cada 2 min",
      "Glicemia, temperatura, 5H5T"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "RCE: UTI pediátrica"
    ],
    transferencia: [
      "RCE em unidade sem UTI pediátrica: regulação imediata, transporte com equipe de suporte avançado após estabilizar via aérea e circulação"
    ]
  },
  prescricao: {
    hospitalar: "PCR — CRIANÇA (peso: ___ kg; registrar horários)\n1. RCP: compressões 100–120/min, 1/3 do diâmetro do tórax; 15:2 (2 socorristas). Com via aérea avançada: 1 ventilação a cada 2–3 s e compressões contínuas.\n2. O₂ 100% por bolsa-válvula-máscara (bolsa pediátrica, máscara do tamanho adequado).\n3. Adrenalina: diluir 1 mL de adrenalina 1 mg/mL + 9 mL de SF 0,9% (0,1 mg/mL). Fazer 0,1 mL/kg (0,01 mg/kg; máx 10 mL = 1 mg) IV/IO em bolus + 5–10 mL de SF 0,9%, a cada 3–5 min.\n   Ex.: 10 kg = 1 mL; 20 kg = 2 mL.\n4. FV/TVSP: choque 2 J/kg; depois 4 J/kg; seguintes ≥ 4 J/kg (máx 10 J/kg ou dose de adulto).\n5. FV/TVSP refratária: amiodarona 50 mg/mL — 5 mg/kg (0,1 mL/kg; máx 300 mg = 6 mL) IV/IO em bolus; repetir até 3 doses.\n   Alternativa: lidocaína 2% 1 mg/kg (0,05 mL/kg) IV/IO.\n6. Se glicemia < 60 mg/dL: glicose 10% 2–5 mL/kg IV/IO.\n7. Se hipercalemia: gluconato de cálcio 10% 0,5–1 mL/kg (máx 20 mL) IV lento + bicarbonato de sódio 8,4% 1 mL/kg IV (vias separadas).\n8. Se hipovolemia: SF 0,9% ou Ringer lactato 20 mL/kg IV/IO em bolus.\n9. Após RCE: gasometria, eletrólitos, glicemia, RX de tórax e seguir a ficha pos-pcr."
  },
  orientacoesRetorno: [
    "Família: comunicar com clareza e oferecer presença durante a reanimação quando possível",
    "Após RCE: seguimento com pediatria, neurologia e reabilitação; investigar causa (cardiopatia, canalopatias) se colapso súbito",
    "Prevenção: sono seguro do lactente (de barriga para cima, berço sem objetos), cercar piscinas, guardar medicamentos e produtos de limpeza fora do alcance",
    "Se suspeita de maus-tratos: notificação compulsória (SINAN) e comunicação ao Conselho Tutelar"
  ],
  tabelas: [
    {
      titulo: "Doses rápidas por peso",
      colunas: ["Peso", "Adrenalina 0,1 mg/mL", "Choque 2 / 4 J/kg", "Amiodarona 50 mg/mL"],
      linhas: [
        ["5 kg", "0,5 mL (0,05 mg)", "10 J / 20 J", "0,5 mL (25 mg)"],
        ["10 kg", "1 mL (0,1 mg)", "20 J / 40 J", "1 mL (50 mg)"],
        ["15 kg", "1,5 mL (0,15 mg)", "30 J / 60 J", "1,5 mL (75 mg)"],
        ["20 kg", "2 mL (0,2 mg)", "40 J / 80 J", "2 mL (100 mg)"],
        ["30 kg", "3 mL (0,3 mg)", "60 J / 120 J", "3 mL (150 mg)"],
        ["40 kg", "4 mL (0,4 mg)", "80 J / 160 J", "4 mL (200 mg)"]
      ],
      nota: "Adrenalina máx 1 mg (10 mL). Amiodarona máx 300 mg por dose. Usar o nível de energia mais próximo disponível no aparelho."
    },
    {
      titulo: "Estimativa de peso e tubo traqueal",
      colunas: ["Item", "Fórmula"],
      linhas: [
        ["Peso (1–10 anos)", "(idade em anos + 4) × 2 kg — preferir fita de Broselow ou peso da caderneta"],
        ["Tubo com balonete (> 1 ano)", "(idade/4) + 3,5 mm de diâmetro interno"],
        ["Tubo sem balonete (> 1 ano)", "(idade/4) + 4 mm"],
        ["Lactente < 1 ano", "Com balonete 3,0–3,5 mm"]
      ]
    }
  ],
  fontes: [
    "American Heart Association / American Academy of Pediatrics — 2025 Guidelines for CPR and ECC, Part 8: Pediatric Advanced Life Support (Circulation, 2025)",
    "American Heart Association — 2025 PALS Cardiac Arrest and Bradycardia Algorithms (2025)",
    "ILCOR — Consensus on Science with Treatment Recommendations (2025)",
    "Sociedade Brasileira de Pediatria — Documentos científicos de reanimação pediátrica (consultar versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
