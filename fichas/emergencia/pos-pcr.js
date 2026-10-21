// Cuidados pós-parada cardiorrespiratória
registrarFicha({
  id: "pos-pcr",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Cuidados pós-PCR (retorno da circulação espontânea)",
  resumo: "Condutas após o retorno da circulação espontânea (RCE) no adulto e na criança: via aérea, oxigenação, ventilação, pressão arterial, controle de temperatura, busca da causa (cateterismo) e prognóstico neurológico.",
  palavrasChave: "pos pcr pos parada rce retorno da circulacao espontanea controle de temperatura hipotermia terapeutica normotermia febre prognostico neurologico cateterismo noradrenalina sindrome pos parada",
  critico: {
    tempo: "PAM ≥ 65 e SpO₂ 90–98%",
    texto: "Evite hipotensão, hipóxia e hiperóxia. ECG em minutos: supra de ST → cateterismo de emergência. Paciente que não obedece comandos: controle ativo de temperatura e prevenção de febre."
  },
  alarmes: [
    "PAS < 90 mmHg ou PAM < 65 mmHg (adulto); PAS ou PAM abaixo do percentil 10 para a idade (criança)",
    "SpO₂ < 90% ou PaO₂ < 60 mmHg; hiperóxia (SpO₂ 100% mantida)",
    "Temperatura > 37,5 °C",
    "Supra de ST ou choque cardiogênico",
    "Convulsão ou mioclonias",
    "Nova PCR (arritmia recorrente, hipercalemia, hipóxia)"
  ],
  condutaInicial: [
    "ABC: confirmar tubo com capnografia; se ainda sem via aérea avançada e com rebaixamento, intubar",
    "Oxigênio: FiO₂ 100% até poder medir a SpO₂ com confiança; depois titular para SpO₂ 90–98% (AHA 2025) ou 94–98% (ERC/ESICM 2025). Criança: normoxemia (94–99%)",
    "Ventilação: alvo de PaCO₂ 35–45 mmHg (normocapnia); volume corrente 6–8 mL/kg de peso predito; evitar hiperventilação",
    "Pressão: adulto PAM ≥ 65 mmHg e PAS ≥ 90 mmHg; criança PAS e PAM acima do percentil 10 para a idade. Cristaloide se hipovolêmico e noradrenalina se persistir",
    "ECG de 12 derivações em até 10 min; supra de ST → hemodinâmica de emergência",
    "Glicemia capilar; evitar hipoglicemia e hiperglicemia",
    "Controle de temperatura: em quem não obedece comandos, manter entre 32 e 37,5 °C e prevenir febre (> 37,5 °C) ativamente",
    "Tratar causa: 5H5T; ultrassom à beira-leito; TC de crânio se causa neurológica suspeita",
    "Sedação e analgesia para tolerar o tubo (ver ficha sedacao-continua); evitar bloqueio neuromuscular de rotina",
    "Transferir para UTI (e hemodinâmica, se indicada)"
  ],
  fataisExcluir: [
    "IAM com supra de ST / oclusão coronariana",
    "TEP maciço",
    "Hemorragia (digestiva, aneurisma roto, trauma)",
    "Hemorragia subaracnóidea ou AVC (TC de crânio)",
    "Pneumotórax por compressões ou punção central",
    "Hipercalemia, intoxicação",
    "Choque séptico"
  ],
  proximaDecisao: "Supra de ST ou suspeita forte de causa coronária com choque/arritmia → cateterismo de emergência. Sem supra e estável → cateterismo não emergencial, decisão com cardiologia. Prognóstico neurológico: não antes de 72 h após normotermia, com abordagem multimodal; nunca por um critério isolado.",
  clinica: {
    anamnese: [
      "Tempo até RCP, até o 1º choque e até o RCE (low-flow e no-flow)",
      "Ritmo inicial e número de choques, doses de adrenalina",
      "Sintomas antes da PCR (dor torácica, dispneia, cefaleia súbita)",
      "Comorbidades, medicações, diretivas antecipadas"
    ],
    exameFisico: [
      "Sinais vitais completos, temperatura central",
      "Glasgow (ou escala motora), pupilas, reflexos de tronco, mioclonias",
      "Ausculta pulmonar (broncoaspiração, edema), assimetria (pneumotórax)",
      "Perfusão periférica, diurese",
      "Lesões por compressão torácica (fratura de costela, hemotórax)"
    ],
    diferenciais: [
      { dx: "Choque cardiogênico pós-PCR (atordoamento miocárdico)", pista: "Disfunção do VE nas primeiras 24–72 h, melhora progressiva" },
      { dx: "Choque distributivo pós-PCR (síndrome inflamatória)", pista: "Vasoplegia; lactato alto" },
      { dx: "Estado de mal epiléptico não convulsivo", pista: "Coma sem sedação; EEG" },
      { dx: "Lesão cerebral hipóxico-isquêmica", pista: "Coma, ausência de reflexos de tronco, edema na TC" }
    ],
    gravidade: [
      "Síndrome pós-PCR: lesão cerebral, disfunção miocárdica, resposta isquemia-reperfusão e doença precipitante",
      "Pior prognóstico: PCR não testemunhada, ritmo não chocável, tempo prolongado até RCE, choque refratário",
      "Não usar exame neurológico precoce (< 72 h) para limitar suporte"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações imediato e seriado.",
      porQue: "Identificar oclusão coronariana.",
      esperar: "—",
      interpretacao: "Supra de ST ou equivalente → cateterismo de emergência.",
      limitacoes: "Alterações transitórias logo após o RCE; repetir em 10–20 min."
    },
    {
      nome: "Gasometria arterial e laboratório",
      pedido: "Gasometria arterial com lactato. Sódio, potássio, cálcio iônico, magnésio, glicemia, ureia, creatinina, hemograma, coagulograma, troponina, CK, TGO/TGP.",
      porQue: "Ajustar ventilação, corrigir eletrólitos e avaliar disfunção orgânica.",
      esperar: "Acidose lática que melhora com a reperfusão.",
      interpretacao: "Lactato que não cai sugere hipoperfusão ou causa não tratada.",
      limitacoes: "Troponina sobe após PCR e choques; interpretar com ECG e eco."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax no leito.",
      porQue: "Posição do tubo e do cateter, pneumotórax, broncoaspiração, edema.",
      esperar: "—",
      interpretacao: "Ponta do tubo 2–4 cm acima da carina (adulto).",
      limitacoes: "—"
    },
    {
      nome: "Tomografia de crânio (e angiotomografia de tórax se indicada)",
      pedido: "TC de crânio sem contraste. Angiotomografia de tórax se suspeita de TEP ou dissecção.",
      porQue: "Buscar causa neurológica ou TEP; avaliar edema cerebral.",
      esperar: "—",
      interpretacao: "Hemorragia subaracnóidea muda a conduta (sem antiagregação/anticoagulação).",
      limitacoes: "Transportar só com paciente estável e monitorizado."
    },
    {
      nome: "Ecocardiograma e EEG",
      pedido: "Ecocardiograma transtorácico. Eletroencefalograma (contínuo ou intermitente) em paciente em coma.",
      porQue: "Função ventricular, tamponamento, VD; detectar crises não convulsivas.",
      esperar: "Disfunção de VE transitória.",
      interpretacao: "Crises no EEG: tratar como estado de mal.",
      limitacoes: "EEG nem sempre disponível; regular se necessário."
    }
  ],
  tratamento: [
    {
      droga: "Noradrenalina",
      linha: "l1",
      dose: "Adulto 0,05–0,5 mcg/kg/min; criança 0,05–1 mcg/kg/min, titular",
      via: "IV contínua (acesso central; periférico calibroso por curto prazo)",
      intervalo: "Contínua",
      duracao: "Até estabilidade",
      monitorizacao: "PAM (pressão invasiva ideal), perfusão, lactato, diurese",
      contraindicacoes: "Hipovolemia não corrigida",
      ajustes: "Adulto: 4 ampolas de 4 mg/4 mL (16 mg) + 234 mL SG 5% = 64 mcg/mL. Criança: diluição por peso conforme protocolo local"
    },
    {
      droga: "Dobutamina 12,5 mg/mL",
      linha: "adj",
      dose: "2,5–20 mcg/kg/min",
      via: "IV contínua",
      intervalo: "Contínua",
      duracao: "—",
      monitorizacao: "FC, arritmias, PA",
      contraindicacoes: "Hipotensão sem vasopressor",
      ajustes: "Choque cardiogênico com baixo débito após PAM corrigida. 250 mg (20 mL) + 230 mL SG 5% = 1.000 mcg/mL"
    },
    {
      droga: "Cristaloide (SF 0,9% ou Ringer lactato)",
      linha: "l1",
      dose: "Adulto 250–500 mL; criança 10–20 mL/kg, com reavaliação",
      via: "IV",
      intervalo: "Em bolus, repetir se responder",
      duracao: "—",
      monitorizacao: "Congestão pulmonar, hepatomegalia (criança), ultrassom",
      contraindicacoes: "Edema agudo de pulmão",
      ajustes: "Não usar soro gelado em bolus para resfriar logo após o RCE"
    },
    {
      droga: "Controle de temperatura (medidas físicas ou dispositivo)",
      linha: "l1",
      dose: "Alvo entre 32 e 37,5 °C; prevenir febre > 37,5 °C",
      via: "Manta térmica, compressas, dispositivo de controle de temperatura",
      intervalo: "Contínuo",
      duracao: "Pelo menos 36 h (AHA 2025); prevenção de febre até 72 h (ERC/ESICM 2025)",
      monitorizacao: "Temperatura central (esofágica, vesical ou retal) contínua",
      contraindicacoes: "—",
      ajustes: "Paracetamol 750 mg (adulto) ou 15 mg/kg (criança, máx 1 g) a cada 6 h como adjuvante. Tremores: sedação/analgesia; magnésio se necessário. Reaquecer devagar se usada hipotermia"
    },
    {
      droga: "Anticonvulsivante (se crise clínica ou no EEG)",
      linha: "adj",
      dose: "Levetiracetam 60 mg/kg (máx 4.500 mg) IV em 10–15 min, ou fenitoína 20 mg/kg IV",
      via: "IV",
      intervalo: "Manutenção conforme protocolo",
      duracao: "—",
      monitorizacao: "EEG, nível de consciência",
      contraindicacoes: "Não fazer profilaxia de rotina",
      ajustes: "Fenitoína: diluir em SF 0,9%, máx 50 mg/min no adulto, com monitor. Mioclonias: avaliar com EEG"
    },
    {
      droga: "Profilaxia de úlcera de estresse e de TEV",
      linha: "adj",
      dose: "Omeprazol 40 mg IV 1×/dia; enoxaparina 40 mg SC 1×/dia (adulto)",
      via: "IV / SC",
      intervalo: "Diário",
      duracao: "Durante a ventilação mecânica",
      monitorizacao: "Sangramento",
      contraindicacoes: "Sangramento ativo, plaquetopenia grave",
      ajustes: "Ajustar enoxaparina se ClCr < 30 (20 mg/dia). Criança: conforme protocolo pediátrico"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência com monitor, pressão invasiva se possível, capnografia",
      "ECG e decisão sobre cateterismo"
    ],
    reavaliar: [
      "PA, SpO₂, ETCO₂ continuamente; gasometria em 30–60 min após ajustes",
      "Temperatura central contínua",
      "Glicemia a cada 1–2 h"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "UTI em todos os casos (adulto ou pediátrica)"
    ],
    transferencia: [
      "Sem UTI, hemodinâmica ou TC: regulação para centro com capacidade pós-PCR (cateterismo 24 h, controle de temperatura, EEG)",
      "Transportar intubado, com capnografia, noradrenalina em bomba e equipe de suporte avançado"
    ]
  },
  prescricao: {
    hospitalar: "PÓS-PCR — ADULTO (peso: ___ kg)\n1. Dieta zero; sonda orogástrica aberta.\n2. Cabeceira 30°; monitor, oximetria, capnografia, pressão arterial invasiva se disponível; sonda vesical com diurese horária.\n3. Ventilação mecânica: VC 6–8 mL/kg de peso predito, PEEP 5–8 cmH₂O, FR para PaCO₂ 35–45 mmHg; FiO₂ para SpO₂ 92–98% (aceitável 90–98%).\n4. Noradrenalina 4 mg/4 mL — 4 ampolas (16 mg) + SG 5% 234 mL (64 mcg/mL) IV em bomba, iniciar 0,05 mcg/kg/min (70 kg ≈ 3,3 mL/h) e titular para PAM ≥ 65 mmHg.\n5. SF 0,9% 250–500 mL IV em 15–30 min se sinais de hipovolemia; reavaliar.\n6. Sedação e analgesia contínuas (ver ficha sedacao-continua): fentanil 1–2 mcg/kg/h + propofol ou midazolam; meta conforme controle de temperatura.\n7. Controle de temperatura: manter 32–37,5 °C com manta/compressas; não deixar passar de 37,5 °C. Paracetamol 750 mg via sonda de 6/6 h se temperatura > 37,5 °C.\n8. Glicemia capilar de 2/2 h; insulina regular SC conforme protocolo se > 180 mg/dL; evitar < 80 mg/dL.\n9. Omeprazol 40 mg IV 1×/dia.\n10. Enoxaparina 40 mg SC 1×/dia (se sem sangramento e sem cateterismo/trombólise em curso).\n11. Controles: ECG de 12 derivações agora e após 6–12 h; gasometria arterial em 1 h; eletrólitos, lactato, troponina de 6/6 h; Glasgow e pupilas de 2/2 h (sem sedação, quando possível).\n\nCRIANÇA (peso: ___ kg)\n- FiO₂ para SpO₂ 94–99%; PaCO₂ 35–45 mmHg.\n- PAS/PAM acima do percentil 10 para a idade: cristaloide 10–20 mL/kg e vasopressor (adrenalina ou noradrenalina 0,05–1 mcg/kg/min) se persistir.\n- Prevenir febre: temperatura ≤ 37,5 °C; paracetamol 15 mg/kg (máx 1 g) de 6/6 h.\n- Glicemia de 2/2 h; tratar hipoglicemia com glicose 10% 2–5 mL/kg."
  },
  orientacoesRetorno: [
    "Família: explicar que o prognóstico neurológico só é definido após vários dias, com exames combinados",
    "Após alta: seguimento com cardiologia (causa da PCR, CDI), neurologia e reabilitação física, cognitiva e emocional",
    "Rastrear ansiedade, depressão e estresse pós-traumático no paciente e na família",
    "Familiares: treinamento de RCP"
  ],
  tabelas: [
    {
      titulo: "Metas pós-PCR",
      colunas: ["Parâmetro", "Adulto", "Criança"],
      linhas: [
        ["SpO₂", "90–98% (AHA 2025); 94–98% (ERC/ESICM 2025)", "Normoxemia (94–99%); evitar hipóxia e hiperóxia"],
        ["PaCO₂", "35–45 mmHg", "Adequada à condição; evitar hipo e hipercapnia"],
        ["Pressão", "PAM ≥ 65 mmHg; PAS ≥ 90 mmHg", "PAS e PAM > percentil 10 para a idade"],
        ["Temperatura", "Controle entre 32 e 37,5 °C por ≥ 36 h; prevenir febre", "Prevenir febre: ≤ 37,5 °C"],
        ["Glicemia", "Evitar hipo e hiperglicemia", "Evitar hipo e hiperglicemia"],
        ["Prognóstico", "Multimodal, ≥ 72 h após normotermia", "Multimodal; não usar fator isolado"]
      ]
    }
  ],
  fontes: [
    "American Heart Association — 2025 Guidelines for CPR and ECC, Part 11: Post-Cardiac Arrest Care (Circulation, 2025)",
    "American Heart Association / AAP — 2025 Guidelines, Part 8: Pediatric Advanced Life Support — cuidados pós-PCR (2025)",
    "European Resuscitation Council / ESICM — Guidelines 2025: Post-resuscitation care (Resuscitation, 2025)",
    "Sociedade Brasileira de Cardiologia — Atualização da Diretriz de RCP e Cuidados de Emergência (2019), para contexto nacional"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
