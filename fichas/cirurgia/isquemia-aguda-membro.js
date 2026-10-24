// Isquemia arterial aguda de membro
registrarFicha({
  id: "isquemia-aguda-membro",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Isquemia arterial aguda de membro",
  resumo: "Queda súbita da perfusão de um membro (< 2 semanas), por embolia (FA, IAM) ou trombose (doença arterial prévia, stent, enxerto). Heparina imediata e cirurgia vascular conforme a classificação de Rutherford.",
  palavrasChave: "isquemia arterial aguda membro embolia arterial trombose arterial 6 ps dor palidez ausencia de pulso parestesia paralisia poiquilotermia rutherford heparina embolectomia fogarty trombolise fibrilacao atrial doenca arterial obstrutiva periferica",
  critico: {
    tempo: "Heparina IV e vascular agora",
    texto: "Membro frio, pálido e sem pulso de início súbito: heparina não fracionada IV em bolus imediatamente (se sem contraindicação) e cirurgia vascular. Déficit motor ou sensitivo = revascularização em horas."
  },
  alarmes: [
    "Perda de sensibilidade além dos dedos",
    "Fraqueza ou paralisia do membro",
    "Panturrilha endurecida, dolorosa (necrose muscular)",
    "Doppler arterial e venoso inaudíveis (isquemia irreversível)",
    "Hipercalemia, acidose, mioglobinúria (pós-revascularização ou isquemia extensa)"
  ],
  condutaInicial: [
    "Avaliar os 6 Ps e classificar (Rutherford) com Doppler portátil se disponível",
    "Heparina não fracionada IV: bolus 80 UI/kg (ou 5.000 UI) e infusão 18 UI/kg/h, se sem contraindicação",
    "Analgesia IV (opioide); O₂ se hipoxemia",
    "Membro em posição pendente ou horizontal, protegido, sem calor local nem compressão",
    "Hidratação; corrigir hipotensão",
    "ECG (FA? IAM?), exames, tipagem",
    "Cirurgia vascular imediata: IIa — revascularização urgente (horas); IIb — emergência; III — amputação primária geralmente",
    "Sem cirurgia vascular no serviço: heparina e transferência imediata"
  ],
  fataisExcluir: [
    "Dissecção de aorta (déficit de pulso + dor torácica/dorsal — heparina contraindicada)",
    "IAM com trombo mural / FA como fonte embólica",
    "Síndrome de reperfusão (hipercalemia, acidose, arritmia, rabdomiólise, lesão renal)",
    "Síndrome compartimental após revascularização"
  ],
  proximaDecisao: "Rutherford I → heparina e investigação/revascularização em horas, conforme vascular. IIa → revascularização urgente (endovascular ou cirúrgica). IIb → cirurgia imediata. III → amputação primária (revascularizar pode ser fatal pela reperfusão).",
  clinica: {
    anamnese: [
      "Início: súbito (embolia) x piora de claudicação prévia (trombose)",
      "FA, IAM recente, valvopatia, endocardite; anticoagulação suspensa",
      "Claudicação prévia, cirurgia/stent arterial, aneurisma poplíteo",
      "Trauma, cateterismo recente (lesão iatrogênica), trombofilia, COVID-19, câncer",
      "Hora de início dos sintomas (tempo de isquemia)"
    ],
    exameFisico: [
      "6 Ps: dor (pain), palidez, ausência de pulso (pulselessness), parestesia, paralisia, poiquilotermia (frio)",
      "Palpar pulsos em todos os níveis e comparar com o membro contralateral (contralateral normal sugere embolia; pulsos fracos bilaterais sugerem trombose sobre aterosclerose)",
      "Nível de temperatura e cor (marca o nível da obstrução)",
      "Sensibilidade (toque leve nos dedos) e motricidade (mexer os dedos)",
      "Doppler portátil arterial e venoso no pé",
      "Ausculta cardíaca, ritmo"
    ],
    diferenciais: [
      { dx: "Embolia arterial", pista: "Início abrupto, FA, pulsos contralaterais normais, sem claudicação prévia" },
      { dx: "Trombose arterial", pista: "Claudicação prévia, DAOP bilateral, stent/enxerto" },
      { dx: "Dissecção de aorta", pista: "Dor torácica/dorsal, diferença de PA entre membros" },
      { dx: "Flegmasia cerúlea dolens", pista: "TVP maciça: membro edemaciado e cianótico (não pálido)" },
      { dx: "Choque com baixo débito", pista: "Membros frios bilaterais, hipotensão" },
      { dx: "Síndrome compartimental", pista: "Trauma, dor ao estiramento passivo, pulsos geralmente presentes" }
    ],
    gravidade: [
      "Rutherford I (viável): sem perda sensitiva nem motora; Doppler arterial audível",
      "IIa (ameaça marginal): perda sensitiva mínima (dedos), sem perda motora; Doppler arterial geralmente inaudível, venoso audível — salvável com tratamento rápido",
      "IIb (ameaça imediata): perda sensitiva além dos dedos, dor em repouso, fraqueza leve a moderada; Doppler arterial inaudível — revascularização imediata",
      "III (irreversível): anestesia e paralisia profundas, rigidez; Doppler arterial e venoso inaudíveis"
    ]
  },
  exames: [
    {
      nome: "Angiotomografia",
      pedido: "Angiotomografia de aorta e membros ___ (inferiores/superiores) com run-off.",
      porQue: "Localizar a oclusão e planejar a revascularização.",
      esperar: "Rutherford I/IIa: fazer antes da intervenção. IIb: não atrasar a cirurgia.",
      interpretacao: "Corte abrupto em bifurcação sem colaterais → embolia. Doença difusa com colaterais → trombose.",
      limitacoes: "Contraste iodado (função renal); em IIb pode-se ir direto à arteriografia intraoperatória."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, TP/INR, TTPa (basal e 6 h após início da heparina), fibrinogênio, ureia, creatinina, sódio, potássio, CK, gasometria venosa com lactato, troponina, tipagem ABO/Rh.",
      porQue: "Basal para anticoagulação, repercussão metabólica e preparo cirúrgico.",
      esperar: "—",
      interpretacao: "CK, potássio e lactato elevados → isquemia extensa, risco de reperfusão.",
      limitacoes: "—"
    },
    {
      nome: "ECG e ecocardiograma",
      pedido: "ECG de 12 derivações. Ecocardiograma transtorácico (fonte embólica).",
      porQue: "FA, IAM, trombo intracavitário, endocardite.",
      esperar: "ECG imediato; ecocardiograma na internação.",
      interpretacao: "FA → anticoagulação plena a longo prazo (ver ficha fibrilacao-atrial).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Heparina não fracionada 5.000 UI/mL",
      linha: "l1",
      dose: "Bolus 80 UI/kg (ou 5.000 UI) + infusão 18 UI/kg/h",
      via: "IV",
      intervalo: "Contínua; TTPa 6 h após início e após cada ajuste",
      duracao: "Até revascularização e depois conforme vascular",
      monitorizacao: "TTPa alvo 1,5–2,5 × controle; plaquetas (trombocitopenia induzida por heparina)",
      contraindicacoes: "Sangramento ativo, suspeita de dissecção de aorta, AVC hemorrágico recente, plaquetopenia grave",
      ajustes: "Diluição: 25.000 UI (5 mL) + SF 0,9% 245 mL = 100 UI/mL. 70 kg: bolus 5.600 UI (1,1 mL da ampola) e infusão 1.260 UI/h = 12,6 mL/h"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "2–4 mg",
      via: "IV",
      intervalo: "A cada 5–10 min até controle; depois 4/4 h",
      duracao: "—",
      monitorizacao: "FR, sedação",
      contraindicacoes: "—",
      ajustes: "Idoso e DRC: doses menores"
    },
    {
      droga: "Revascularização (embolectomia com cateter de Fogarty, trombólise dirigida por cateter, trombectomia mecânica, ponte)",
      linha: "l1",
      dose: "Conforme cirurgião vascular",
      via: "Cirúrgica / endovascular",
      intervalo: "IIa: urgente · IIb: imediata",
      duracao: "—",
      monitorizacao: "Pulsos, síndrome compartimental (fasciotomia profilática se isquemia > 4–6 h), potássio",
      contraindicacoes: "Trombólise: contraindicada em IIb com tempo de reperfusão longo e nas contraindicações habituais a fibrinolítico",
      ajustes: "ESVS 2020: técnica escolhida conforme anatomia, tempo de isquemia e recursos"
    },
    {
      droga: "Fibrinólise sistêmica (IV periférica)",
      linha: "ci",
      dose: "Não usar",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício e com risco de sangramento",
      ajustes: "Trombólise só dirigida por cateter, pelo especialista"
    }
  ],
  destino: {
    agora: [
      "Heparina e cirurgia vascular"
    ],
    reavaliar: [
      "Exame neurovascular (sensibilidade, motricidade, Doppler) de 1/1 h até a revascularização",
      "TTPa de 6/6 h até estabilizar"
    ],
    alta: [
      "Somente após revascularização, com anticoagulação/antiagregação definida e seguimento com cirurgia vascular"
    ],
    observacao: ["—"],
    internacao: [
      "Todos; UTI após revascularização de isquemia extensa (reperfusão)"
    ],
    transferencia: [
      "Sem cirurgia vascular: heparina IV e transferência imediata como emergência (tempo de isquemia)"
    ]
  },
  prescricao: {
    hospitalar: "ISQUEMIA ARTERIAL AGUDA DE MEMBRO (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Repouso; membro horizontal ou levemente pendente, protegido com algodão; não aplicar calor nem compressão.\n3. Monitor cardíaco; O₂ se SpO₂ < 94%.\n4. SF 0,9% 500 mL IV em 30 min se desidratado; depois 1.000 mL de 8/8 h (ajustar à função renal/cardíaca).\n5. Heparina não fracionada 5.000 UI/mL: bolus de 80 UI/kg IV (máx usual 5.000–10.000 UI) AGORA.\n6. Heparina não fracionada 25.000 UI (5 mL) + SF 0,9% 245 mL (100 UI/mL) IV em bomba a 18 UI/kg/h (70 kg = 12,6 mL/h). TTPa 6 h após o início; ajustar para 1,5–2,5 × o controle conforme nomograma do serviço.\n7. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV de 4/4 h se dor.\n8. Dipirona 1 g IV de 6/6 h.\n9. Ondansetrona 4 mg IV de 8/8 h se náusea.\n10. Controles: pulsos, sensibilidade e motricidade do membro de 1/1 h; diurese; TTPa de 6/6 h; plaquetas diárias; potássio e CK após revascularização."
  },
  orientacoesRetorno: [
    "Tomar o anticoagulante ou antiagregante todos os dias, sem pular doses",
    "Voltar imediatamente se: dor súbita, frieza, palidez, dormência ou fraqueza em braço ou perna; sangramento importante; fezes pretas",
    "Parar de fumar; controlar pressão, diabetes e colesterol",
    "Seguimento com cirurgia vascular e cardiologia (se FA) nas datas marcadas"
  ],
  fontes: [
    "European Society for Vascular Surgery (ESVS) — Clinical Practice Guidelines on the Management of Acute Limb Ischaemia (Eur J Vasc Endovasc Surg, 2020)",
    "AHA/ACC — Guideline for the Management of Lower Extremity Peripheral Artery Disease (2024)",
    "Rutherford RB et al. — Recommended standards for reports dealing with lower extremity ischemia (J Vasc Surg, 1997)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
