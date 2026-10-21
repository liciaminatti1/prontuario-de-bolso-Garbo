// Parada cardiorrespiratória no adulto (ACLS)
registrarFicha({
  id: "pcr-adulto",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Parada cardiorrespiratória no adulto (ACLS)",
  resumo: "Paciente que não responde e não respira normalmente (ou só gasping), sem pulso central palpável em até 10 s. Ritmos chocáveis (FV/TVSP) e não chocáveis (AESP/assistolia), drogas e causas reversíveis (5H5T).",
  palavrasChave: "pcr parada cardiaca parada cardiorrespiratoria rcp acls fv fibrilacao ventricular tv sem pulso aesp assistolia adrenalina epinefrina amiodarona lidocaina desfibrilacao choque 5h5t hs ts capnografia",
  critico: {
    tempo: "Compressão em < 10 s; choque já",
    texto: "Comprima forte e rápido (100–120/min, 5–6 cm), com mínimo de pausas. FV/TVSP: choque o quanto antes. AESP/assistolia: adrenalina 1 mg IV o quanto antes."
  },
  alarmes: [
    "Gasping não é respiração: iniciar RCP",
    "Pausas nas compressões > 10 s (inclusive para intubar ou checar ritmo)",
    "ETCO₂ persistentemente < 10 mmHg com via aérea avançada: RCP de baixa qualidade ou prognóstico ruim (não usar isoladamente para encerrar)",
    "FV/TV refratária após 3 choques: rever qualidade da RCP, posição das pás e causas reversíveis",
    "PCR em gestante (deslocar útero para a esquerda; cesárea perimortem se sem RCE)",
    "Suspeita de hipercalemia, intoxicação ou TEP maciço: tratar a causa durante a RCP"
  ],
  condutaInicial: [
    "Checar responsividade, respiração e pulso carotídeo ao mesmo tempo (até 10 s). Chamar ajuda e pedir o desfibrilador",
    "Iniciar compressões: 100–120/min, 5–6 cm de profundidade, retorno total do tórax, trocar o compressor a cada 2 min",
    "Sem via aérea avançada: 30 compressões : 2 ventilações com bolsa-válvula-máscara e O₂ 100%",
    "Monitorizar com pás ou eletrodos assim que chegar o desfibrilador. Analisar o ritmo",
    "Chocável (FV/TVSP): choque imediato (bifásico na energia recomendada pelo fabricante, 120–200 J; se desconhecida, a máxima; monofásico 360 J) e voltar às compressões sem checar pulso",
    "Não chocável (AESP/assistolia): adrenalina 1 mg IV/IO o quanto antes e RCP por 2 min",
    "Acesso venoso periférico (preferido); intraósseo se o IV não for obtido rapidamente",
    "Checar ritmo a cada 2 min. Adrenalina 1 mg a cada 3–5 min. Amiodarona ou lidocaína na FV/TVSP refratária",
    "Via aérea avançada (tubo ou dispositivo supraglótico) sem interromper compressões; depois, 1 ventilação a cada 6 s (10/min) com compressões contínuas e capnografia",
    "Buscar e tratar 5H5T durante todo o atendimento (ultrassom à beira-leito se não atrasar compressões)"
  ],
  fataisExcluir: [
    "Hipovolemia (hemorragia, desidratação)",
    "Hipóxia (obstrução de via aérea, insuficiência respiratória)",
    "Hidrogênio — acidose grave",
    "Hipo/hipercalemia",
    "Hipotermia",
    "Tensão no tórax (pneumotórax hipertensivo)",
    "Tamponamento cardíaco",
    "Toxinas (tricíclicos, betabloqueador, bloqueador de canal de cálcio, opioides, cocaína, anestésico local)",
    "Trombose pulmonar (TEP maciço)",
    "Trombose coronariana (IAM)"
  ],
  proximaDecisao: "Retorno da circulação espontânea (pulso palpável, PA mensurável, subida abrupta e mantida do ETCO₂, geralmente ≥ 40 mmHg) → iniciar cuidados pós-PCR (ver ficha pos-pcr). Sem RCE após RCP prolongada, sem causa reversível e com múltiplos fatores de mau prognóstico → considerar encerrar em decisão de equipe, sem usar um critério isolado.",
  clinica: {
    anamnese: [
      "Testemunhada? Hora do colapso e tempo até RCP e até o 1º choque",
      "Ritmo inicial (DEA ou monitor do SAMU)",
      "Sintomas antes: dor torácica, dispneia, palpitação, síncope, convulsão",
      "Doenças: coronariopatia, IC, DRC em diálise (hipercalemia), câncer, TEP prévio, gestação",
      "Medicações e drogas: digoxina, antiarrítmicos, tricíclicos, betabloqueador, opioide, cocaína",
      "Diretivas antecipadas de vontade ou decisão prévia de não reanimar"
    ],
    exameFisico: [
      "Pulso carotídeo (até 10 s), respiração, pupilas",
      "Sinais de trauma, sangramento, distensão abdominal",
      "Turgência jugular e assimetria do murmúrio vesicular (pneumotórax hipertensivo)",
      "Temperatura (hipotermia), sinais de intoxicação, marcas de agulha",
      "Fístula arteriovenosa ou cateter de diálise (pensar hipercalemia)",
      "Edema assimétrico de membro inferior (TEP)",
      "Gestação: altura uterina na cicatriz umbilical ou acima → deslocamento manual do útero"
    ],
    diferenciais: [
      { dx: "Pulso fraco não palpado (choque grave)", pista: "ETCO₂ alto, atividade cardíaca organizada no ultrassom (pseudo-AESP); tratar como choque" },
      { dx: "Assistolia falsa (FV fina, cabo solto, ganho baixo)", pista: "Conferir derivações, ganho e cabos" },
      { dx: "Síncope / convulsão", pista: "Pulso presente, respiração retorna" },
      { dx: "Obstrução de via aérea", pista: "Engasgo antes do colapso; ver ficha ovace" }
    ],
    gravidade: [
      "Chocáveis: FV e TV sem pulso — prioridade é desfibrilar cedo",
      "Não chocáveis: AESP e assistolia — prioridade é adrenalina precoce e causa reversível",
      "Fatores de pior prognóstico: PCR não testemunhada, sem RCP por espectador, ritmo inicial não chocável, tempo prolongado sem RCE",
      "Capnografia: ETCO₂ baixo com via aérea avançada sugere RCP de baixa qualidade; subida súbita sugere RCE"
    ]
  },
  exames: [
    {
      nome: "Capnografia em forma de onda",
      pedido: "Capnografia contínua em forma de onda após via aérea avançada.",
      porQue: "Confirmar posição do tubo, avaliar a qualidade da RCP e detectar RCE.",
      esperar: "Curva presente; ETCO₂ idealmente ≥ 10–20 mmHg durante a RCP.",
      interpretacao: "Ausência de curva: tubo fora da traqueia até prova em contrário. Elevação abrupta e mantida: provável RCE.",
      limitacoes: "Adrenalina e bicarbonato alteram o ETCO₂. Não usar valor isolado para encerrar a RCP."
    },
    {
      nome: "Gasometria, eletrólitos e glicemia",
      pedido: "Gasometria arterial ou venosa com lactato, sódio, potássio, cálcio iônico, magnésio. Glicemia capilar.",
      porQue: "Buscar hipercalemia, acidose grave, hipocalcemia, hipoglicemia.",
      esperar: "Acidose mista é esperada durante a PCR.",
      interpretacao: "K muito alto → cálcio, bicarbonato e insulina-glicose durante a RCP.",
      limitacoes: "Não interromper compressões para coletar."
    },
    {
      nome: "Ultrassom à beira-leito (POCUS)",
      pedido: "Ultrassom focado cardíaco e pulmonar durante a checagem de ritmo.",
      porQue: "Identificar tamponamento, pneumotórax, sinais de TEP (VD dilatado), hipovolemia, atividade cardíaca.",
      esperar: "Imagem em até 10 s, durante a pausa já programada.",
      interpretacao: "Derrame com colapso de VD → pericardiocentese. Deslizamento pleural ausente → descompressão.",
      limitacoes: "Não deve aumentar a pausa nas compressões. Operador-dependente."
    },
    {
      nome: "ECG de 12 derivações (após RCE)",
      pedido: "ECG de 12 derivações imediatamente após o retorno da circulação.",
      porQue: "Identificar IAM com supra de ST para cateterismo de emergência.",
      esperar: "—",
      interpretacao: "Supra de ST → hemodinâmica de emergência.",
      limitacoes: "Alterações transitórias logo após choques e adrenalina; repetir."
    }
  ],
  tratamento: [
    {
      droga: "Desfibrilação",
      linha: "l1",
      dose: "Bifásico: energia recomendada pelo fabricante (120–200 J); se desconhecida, a máxima disponível. Monofásico: 360 J",
      via: "Pás ou eletrodos adesivos (anterolateral ou anteroposterior)",
      intervalo: "A cada checagem de ritmo (2 min) enquanto FV/TVSP",
      duracao: "Até RCE ou mudança de ritmo",
      monitorizacao: "Retomar compressões logo após o choque, sem checar pulso",
      contraindicacoes: "Ritmos não chocáveis",
      ajustes: "Choques seguintes com energia igual ou maior. Mudança de vetor e dupla desfibrilação sequencial: utilidade não estabelecida (AHA 2025); considerar só em FV refratária com equipe treinada"
    },
    {
      droga: "Adrenalina (epinefrina) 1 mg/mL",
      linha: "l1",
      dose: "1 mg",
      via: "IV ou IO em bolus, seguido de 20 mL de SF 0,9% e elevação do membro",
      intervalo: "A cada 3–5 min (na prática, a cada 2 ciclos)",
      duracao: "Enquanto durar a PCR",
      monitorizacao: "Ritmo, ETCO₂",
      contraindicacoes: "Nenhuma na PCR",
      ajustes: "Não chocável: o quanto antes. Chocável: após falha da desfibrilação inicial (no algoritmo, depois do 2º choque). Pode ser feita sem diluir ou diluída em 10 mL de SF 0,9%"
    },
    {
      droga: "Amiodarona 50 mg/mL",
      linha: "l1",
      dose: "1ª dose 300 mg; 2ª dose 150 mg",
      via: "IV ou IO em bolus",
      intervalo: "1ª após o 3º choque; 2ª 3–5 min depois",
      duracao: "Máximo 2 doses na PCR",
      monitorizacao: "Após RCE: hipotensão, bradicardia, QT",
      contraindicacoes: "Não usar em ritmos não chocáveis",
      ajustes: "Pode ser feita pura ou diluída em 20 mL de SG 5%. Após RCE com FV recorrente: considerar infusão de manutenção conforme protocolo"
    },
    {
      droga: "Lidocaína 2% sem vasoconstritor (20 mg/mL)",
      linha: "alt",
      dose: "1–1,5 mg/kg; depois 0,5–0,75 mg/kg",
      via: "IV ou IO em bolus",
      intervalo: "Doses adicionais a cada 5–10 min",
      duracao: "Máximo 3 mg/kg",
      monitorizacao: "Toxicidade neurológica após RCE",
      contraindicacoes: "Usar a formulação sem vasoconstritor",
      ajustes: "Alternativa à amiodarona na FV/TVSP refratária"
    },
    {
      droga: "Sulfato de magnésio 50% (500 mg/mL)",
      linha: "adj",
      dose: "1–2 g",
      via: "IV ou IO em bolus diluído em 10 mL de SF 0,9% ou SG 5%",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar de rotina",
      ajustes: "Só em torsades de pointes (QT longo) ou hipomagnesemia suspeita"
    },
    {
      droga: "Gluconato de cálcio 10% / cloreto de cálcio 10%",
      linha: "adj",
      dose: "Gluconato 10% 30 mL ou cloreto 10% 10 mL",
      via: "IV ou IO em bolus",
      intervalo: "Repetir se persistir",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar de rotina",
      ajustes: "Só se hipercalemia, hipocalcemia ou intoxicação por bloqueador de canal de cálcio. Não misturar com bicarbonato na mesma via"
    },
    {
      droga: "Bicarbonato de sódio 8,4% (1 mEq/mL)",
      linha: "adj",
      dose: "1 mEq/kg (50–100 mL)",
      via: "IV ou IO em bolus",
      intervalo: "Conforme gasometria",
      duracao: "—",
      monitorizacao: "Gasometria, sódio",
      contraindicacoes: "Uso rotineiro na PCR não recomendado",
      ajustes: "Indicado em hipercalemia e intoxicação por tricíclicos (ou outro bloqueador de canal de sódio)"
    },
    {
      droga: "Alteplase (TEP maciço suspeito ou confirmado)",
      linha: "adj",
      dose: "50 mg em bolus (esquema mais usado em PCR); pode repetir 50 mg",
      via: "IV",
      intervalo: "—",
      duracao: "Manter RCP por 60–90 min após o trombolítico",
      monitorizacao: "Sangramento",
      contraindicacoes: "Relativizar contraindicações na PCR por TEP",
      ajustes: "Decisão individual; a AHA considera razoável a trombólise na PCR por TEP. Conferir protocolo local de dose"
    },
    {
      droga: "Vasopressina, corticoide, atropina na assistolia",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício comprovado como rotina",
      ajustes: "Adrenalina é o único vasopressor do algoritmo. Atropina não é indicada na AESP/assistolia"
    }
  ],
  destino: {
    agora: [
      "RCP de alta qualidade, desfibrilação e adrenalina conforme o ritmo",
      "Designar líder, compressores (troca a cada 2 min), via aérea, medicações e anotador"
    ],
    reavaliar: [
      "Ritmo e pulso a cada 2 min",
      "Qualidade da RCP pela capnografia",
      "5H5T a cada ciclo"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "RCE: UTI com protocolo pós-PCR (ver ficha pos-pcr)"
    ],
    transferencia: [
      "RCE em unidade sem UTI ou hemodinâmica: regulação imediata após estabilizar via aérea, PA e oxigenação",
      "Candidato a ECPR (PCR refratária, testemunhada, jovem, causa reversível): só se houver centro com ECMO acessível"
    ]
  },
  prescricao: {
    hospitalar: "PCR — ADULTO (registrar horários de cada intervenção)\n1. RCP contínua: compressões 100–120/min, 5–6 cm, trocar compressor a cada 2 min. Sem via aérea avançada: 30:2. Com via aérea avançada: 1 ventilação a cada 6 s, compressões contínuas.\n2. O₂ 100% por bolsa-válvula-máscara (15 L/min); capnografia após via aérea avançada.\n3. FV/TVSP: desfibrilação bifásica 200 J (ou conforme fabricante; monofásico 360 J) a cada checagem de ritmo.\n4. Adrenalina 1 mg/mL — 1 mL (1 mg) IV/IO em bolus, seguida de 20 mL de SF 0,9% em bolus e elevação do membro, a cada 3–5 min.\n5. FV/TVSP refratária (após o 3º choque): amiodarona 50 mg/mL — 6 mL (300 mg) IV/IO em bolus; 2ª dose 3 mL (150 mg) após 3–5 min.\n   Alternativa: lidocaína 2% sem vasoconstritor 1–1,5 mg/kg IV/IO (70 kg: 3,5–5 mL); depois 0,5–0,75 mg/kg; máximo 3 mg/kg.\n6. Se hipercalemia suspeita: gluconato de cálcio 10% 30 mL IV em bolus + bicarbonato de sódio 8,4% 50–100 mL IV em bolus (vias separadas).\n7. Se torsades: sulfato de magnésio 50% 4 mL (2 g) + 10 mL de SF 0,9% IV em bolus.\n8. Glicemia capilar; corrigir hipoglicemia com glicose 50% 50 mL IV.\n9. SF 0,9% ou Ringer lactato 1.000 mL IV aberto se hipovolemia suspeita.\n10. Após RCE: ECG de 12 derivações, gasometria, eletrólitos, RX de tórax e seguir prescrição da ficha pos-pcr."
  },
  orientacoesRetorno: [
    "Família: informar com linguagem simples o que aconteceu, o que está sendo feito e o prognóstico; oferecer presença durante a reanimação quando possível",
    "Após RCE e alta futura: avaliação de cardiologia para causa da PCR e indicação de CDI; reabilitação física e cognitiva",
    "Orientar familiares a aprender RCP com as mãos e a acionar o SAMU 192"
  ],
  tabelas: [
    {
      titulo: "Ciclo de 2 minutos — o que fazer",
      colunas: ["Ritmo", "Ação imediata", "Drogas"],
      linhas: [
        ["FV / TV sem pulso", "Choque e RCP 2 min", "Adrenalina 1 mg após falha do choque inicial (após 2º choque), a cada 3–5 min; amiodarona 300 → 150 mg (ou lidocaína) após 3º choque"],
        ["AESP", "RCP 2 min; buscar 5H5T", "Adrenalina 1 mg o quanto antes, a cada 3–5 min"],
        ["Assistolia", "Conferir cabos e ganho; RCP 2 min", "Adrenalina 1 mg o quanto antes, a cada 3–5 min"]
      ],
      nota: "Checar pulso só se houver ritmo organizado na checagem. Adrenalina, amiodarona e lidocaína podem ser feitas IV ou IO."
    },
    {
      titulo: "5H5T e tratamento dirigido",
      colunas: ["Causa", "Tratamento durante a RCP"],
      linhas: [
        ["Hipovolemia", "Cristaloide e sangue; controlar sangramento"],
        ["Hipóxia", "O₂ 100%, via aérea avançada, checar posição do tubo"],
        ["H+ (acidose)", "Ventilação adequada; bicarbonato em situações específicas"],
        ["Hipo/hipercalemia", "Hiper: cálcio, bicarbonato, insulina + glicose. Hipo: KCl IV"],
        ["Hipotermia", "Reaquecimento; considerar ECMO"],
        ["Tensão no tórax", "Descompressão com agulha (5º EIC, entre linha axilar anterior e média) e drenagem"],
        ["Tamponamento", "Pericardiocentese guiada por ultrassom"],
        ["Toxinas", "Antídoto específico (bicarbonato nos tricíclicos, naloxona em opioides, emulsão lipídica em anestésico local)"],
        ["Trombose pulmonar", "Trombolítico e RCP prolongada"],
        ["Trombose coronariana", "Após RCE: cateterismo de emergência se supra de ST"]
      ]
    }
  ],
  fontes: [
    "American Heart Association — 2025 AHA Guidelines for CPR and ECC, Part 9: Adult Advanced Life Support (Circulation, 2025)",
    "American Heart Association — 2025 Adult Cardiac Arrest Algorithm (2025)",
    "ILCOR — International Consensus on CPR and ECC Science with Treatment Recommendations (2025)",
    "Sociedade Brasileira de Cardiologia — Atualização da Diretriz de RCP e Cuidados de Emergência (2019), para contexto nacional"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
