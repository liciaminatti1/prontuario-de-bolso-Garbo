// Síndrome serotoninérgica
registrarFicha({
  id: "sindrome-serotoninergica",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Síndrome serotoninérgica",
  resumo: "Excesso de serotonina após início, aumento de dose, superdose ou associação de serotoninérgicos (ISRS, IRSN, tramadol, linezolida, triptanos, ondansetrona em associação, MDMA). Tríade: alteração mental, hiperatividade autonômica e anormalidade neuromuscular (clônus, hiper-reflexia), de início rápido (< 24 h).",
  palavrasChave: "sindrome serotoninergica serotonina isrs fluoxetina sertralina paroxetina escitalopram venlafaxina tramadol linezolida imao triptano mdma ecstasy clonus hiperreflexia criterios de hunter ciproeptadina hipertermia",
  critico: {
    tempo: "Suspender serotoninérgicos",
    texto: "Suspender todos os serotoninérgicos, sedar com benzodiazepínico e resfriar. Temperatura > 41 °C: sedação profunda, intubação e paralisia com não despolarizante (evitar succinilcolina). Antitérmico não funciona."
  },
  alarmes: [
    "Temperatura > 38,5 °C, sobretudo > 41 °C",
    "Rigidez de tronco (pode mascarar o clônus nos casos graves)",
    "Rebaixamento de consciência, convulsão",
    "Instabilidade autonômica (PA lábil, taquicardia > 120)",
    "Rabdomiólise, acidose metabólica, CIVD",
    "Associação com IMAO ou linezolida"
  ],
  condutaInicial: [
    "Suspender todos os serotoninérgicos (incluindo tramadol, ondansetrona, metoclopramida, linezolida, fentanil em dose alta, triptanos)",
    "Monitor, acesso, hidratação IV; temperatura contínua",
    "Benzodiazepínico para agitação, tremor e taquicardia: diazepam 5–10 mg IV (repetir) ou midazolam",
    "Evitar contenção física (piora a hipertermia e acidose); se necessário, por curto período com sedação",
    "Moderada ou sem resposta: ciproeptadina 12 mg VO/SNG, depois 2 mg a cada 2 h se persistir",
    "Hipertermia > 41 °C: resfriamento ativo, sedação, IOT e bloqueio neuromuscular não despolarizante (rocurônio) em UTI",
    "Contatar CIATox 0800 722 6001; notificar se intoxicação"
  ],
  fataisExcluir: [
    "Síndrome neuroléptica maligna (bradicinesia, rigidez em cano de chumbo, instalação em dias, antipsicótico)",
    "Síndrome anticolinérgica (pele seca, ruídos hidroaéreos ausentes, reflexos normais)",
    "Hipertermia maligna (anestésico inalatório/succinilcolina)",
    "Meningite/encefalite, sepse",
    "Abstinência alcoólica, intoxicação por estimulantes, tireotoxicose"
  ],
  proximaDecisao: "Leve (tremor, hiper-reflexia, sem febre) → suspender droga, BZD e observar 6–12 h; maioria resolve em 24 h. Moderada → internar, ciproeptadina. Grave (T > 41 °C, rigidez) → UTI. Drogas de meia-vida longa (fluoxetina, IMAO) podem manter sintomas por dias.",
  clinica: {
    anamnese: [
      "Medicamentos: início ou aumento recente de dose, associação (ex.: ISRS + tramadol, ISRS + linezolida, IMAO + qualquer serotoninérgico)",
      "Superdose intencional",
      "Drogas recreativas (MDMA, cocaína, anfetaminas), fitoterápicos (erva-de-são-joão)",
      "Início dos sintomas (geralmente < 6–24 h após a mudança)"
    ],
    exameFisico: [
      "Clônus espontâneo, induzível (tornozelo) ou ocular; hiper-reflexia, mais intensos em membros inferiores",
      "Tremor, mioclonias, rigidez",
      "Midríase, diaforese, ruídos hidroaéreos aumentados, diarreia, rubor",
      "Agitação, confusão, temperatura, FC, PA"
    ],
    diferenciais: [
      { dx: "Síndrome neuroléptica maligna", pista: "Antipsicótico, início em dias, bradicinesia, rigidez difusa, reflexos diminuídos, CK muito alta" },
      { dx: "Síndrome anticolinérgica", pista: "Pele seca e quente, midríase, retenção urinária, íleo, reflexos normais" },
      { dx: "Hipertermia maligna", pista: "Intraoperatório, rigidez, hipercapnia" },
      { dx: "Intoxicação simpaticomimética", pista: "Sem clônus; cocaína/anfetamina" },
      { dx: "Infecção do SNC", pista: "Febre, rigidez de nuca, líquor alterado" }
    ],
    gravidade: [
      "Critérios de Hunter (uso de serotoninérgico + 1 dos seguintes): clônus espontâneo; clônus induzível + agitação ou diaforese; clônus ocular + agitação ou diaforese; tremor + hiper-reflexia; hipertonia + temperatura > 38 °C + clônus ocular ou induzível",
      "Leve: tremor, hiper-reflexia, sem febre · Moderada: clônus, febre < 40 °C, agitação · Grave: T > 40–41 °C, rigidez, delirium, instabilidade"
    ]
  },
  exames: [
    {
      nome: "Complicações",
      pedido: "Hemograma, sódio, potássio, ureia, creatinina, CK, gasometria venosa com lactato, TGO, TGP, coagulograma, fibrinogênio, urina tipo 1 (mioglobinúria).",
      porQue: "Rabdomiólise, acidose, CIVD, lesão renal.",
      esperar: "CK elevada nos casos com rigidez.",
      interpretacao: "Não há exame diagnóstico; o diagnóstico é clínico.",
      limitacoes: "Dosagem sérica de serotonina não ajuda."
    },
    {
      nome: "ECG e outros",
      pedido: "ECG com QTc; glicemia; paracetamol e salicilato se superdose; TC de crânio e líquor se dúvida diagnóstica com febre.",
      porQue: "Coingestões e diferenciais.",
      esperar: "Taquicardia sinusal.",
      interpretacao: "QRS largo sugere tricíclico ou bloqueador de sódio associado.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Diazepam 5 mg/mL (ou midazolam)",
      linha: "l1",
      dose: "Diazepam 5–10 mg IV lento (midazolam 2–5 mg IV)",
      via: "IV",
      intervalo: "Repetir a cada 5–10 min até controle da agitação",
      duracao: "Conforme sintomas",
      monitorizacao: "FR, SpO₂, sedação",
      contraindicacoes: "—",
      ajustes: "Base do tratamento: reduz atividade muscular, hipertermia e taquicardia"
    },
    {
      droga: "Ciproeptadina (antagonista 5-HT2A)",
      linha: "l1",
      dose: "12 mg de ataque; depois 2 mg a cada 2 h se sintomas persistirem; manutenção 8 mg a cada 6 h (máx. 32 mg/dia)",
      via: "VO ou macerada por SNG (só via oral)",
      intervalo: "Conforme dose",
      duracao: "Até resolução (24–72 h)",
      monitorizacao: "Sedação, efeito anticolinérgico",
      contraindicacoes: "Glaucoma de ângulo fechado, retenção urinária",
      ajustes: "Disponibilidade limitada no Brasil (comprimidos ou xarope em associações); conferir apresentação na farmácia. Evidência de eficácia é limitada"
    },
    {
      droga: "Resfriamento e cristaloide",
      linha: "l1",
      dose: "SF 0,9% ou Ringer lactato 500–1.000 mL e manter diurese ≥ 1 mL/kg/h (rabdomiólise: 2–3 mL/kg/h)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "Temperatura, diurese, CK",
      contraindicacoes: "—",
      ajustes: "Resfriamento externo (gelo em axilas e virilhas, borrifar água e ventilar)"
    },
    {
      droga: "Bloqueio neuromuscular não despolarizante (rocurônio) + IOT",
      linha: "adj",
      dose: "Rocurônio 1 mg/kg na IOT; manutenção em UTI",
      via: "IV",
      intervalo: "—",
      duracao: "Até controle da temperatura",
      monitorizacao: "Ventilação mecânica, sedação contínua",
      contraindicacoes: "—",
      ajustes: "Hipertermia > 41 °C ou rigidez grave. Evitar succinilcolina (hipercalemia por rabdomiólise)"
    },
    {
      droga: "Antipiréticos, haloperidol, bromocriptina, dantroleno, propranolol, contenção física prolongada",
      linha: "ci",
      dose: "Não usar",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Antipirético não atua (calor é muscular); haloperidol e bromocriptina podem piorar; propranolol mascara a taquicardia e causa hipotensão",
      ajustes: "Clorpromazina IM é citada como alternativa, mas causa hipotensão e confunde com SNM — evitar no PS"
    }
  ],
  destino: {
    agora: ["Suspender serotoninérgicos, BZD, hidratação, resfriamento"],
    reavaliar: ["Temperatura, clônus e sinais vitais de 1/1 h; CK e creatinina a cada 12–24 h"],
    alta: ["Leve, assintomático após 6–12 h de observação, droga ajustada pelo prescritor, sem intenção suicida"],
    observacao: ["Leve: 6–12 h"],
    internacao: ["Moderada; UTI se T > 40 °C, rigidez, rebaixamento, instabilidade"],
    transferencia: ["Sem UTI para casos graves: transferir após BZD, resfriamento e via aérea garantida"]
  },
  prescricao: {
    hospitalar: "SÍNDROME SEROTONINÉRGICA MODERADA (adulto, peso: ___ kg)\n1. Dieta zero até melhora da agitação.\n2. SUSPENDER: __________ (todos os serotoninérgicos, inclusive tramadol, ondansetrona, metoclopramida, linezolida).\n3. Monitor, SpO₂, temperatura de 1/1 h (contínua se > 39 °C).\n4. Ringer lactato 1.000 mL IV em 1 h; depois 150–200 mL/h, ajustando para diurese ≥ 1 mL/kg/h.\n5. Diazepam 5 mg/mL — 1–2 mL (5–10 mg) IV lento, sem diluir; repetir a cada 10 min SN agitação, tremor ou taquicardia.\n6. Ciproeptadina 4 mg — 3 comprimidos (12 mg) VO/SNG agora; depois 2 mg a cada 2 h se sintomas; manutenção 8 mg de 6/6 h (máx. 32 mg/dia).\n7. Resfriamento externo se T > 38,5 °C: compressas frias/gelo em axilas e virilhas, borrifar água e ventilar.\n8. Exames: CK, eletrólitos, creatinina, gasometria venosa, coagulograma; repetir CK e creatinina em 12 h.\n9. Comunicar: T > 40 °C, rigidez, rebaixamento, PAS < 90 → UTI (IOT + rocurônio).\n10. Contato CIATox 0800 722 6001; notificar SINAN se intoxicação.",
    ambulatorial: "ALTA (casos leves resolvidos)\n1. Não usar __________ junto com __________ (associação que causou a síndrome).\n2. Reavaliação do antidepressivo/analgésico com o médico assistente antes de reiniciar.\n3. Evitar tramadol, linezolida e ecstasy durante o uso de antidepressivo."
  },
  orientacoesRetorno: [
    "Avisar a todo médico e farmacêutico que teve síndrome serotoninérgica e quais remédios estavam associados",
    "Não tomar remédios para dor (tramadol), enjoo ou enxaqueca sem conferir interação com o antidepressivo",
    "Voltar imediatamente se tremores, febre, agitação, diarreia intensa ou movimentos involuntários voltarem",
    "Retorno com o médico que prescreve o antidepressivo em até 1 semana"
  ],
  fontes: [
    "Dunkley EJC et al. The Hunter Serotonin Toxicity Criteria (QJM, 2003)",
    "Boyer EW, Shannon M. The serotonin syndrome (N Engl J Med, 2005)",
    "Goldfrank's Toxicologic Emergencies, 11ª ed. (2019)",
    "Ministério da Saúde — RENACIAT / Disque-Intoxicação 0800 722 6001"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
