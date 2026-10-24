// Afogamento — classificação de Szpilman
registrarFicha({
  id: "afogamento",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Afogamento (classificação de Szpilman)",
  resumo: "Aspiração de líquido não corporal por submersão ou imersão, levando a insuficiência respiratória. A hipóxia é o problema central: ventilar primeiro. Classificação de Szpilman (SOBRASA) em 6 graus guia conduta e prognóstico.",
  palavrasChave: "afogamento quase afogamento submersao imersao piscina praia szpilman sobrasa ventilacao rcp agua doce agua salgada hipotermia mergulho trauma cervical",
  critico: {
    tempo: "Ventilar primeiro (5 resgates)",
    texto: "Na parada por afogamento, iniciar com 5 ventilações de resgate e depois RCP 30:2 (lactente/criança com 2 socorristas 15:2). O₂ em alto fluxo em todos com espuma na boca. Não fazer manobra de Heimlich para retirar água."
  },
  alarmes: [
    "Muita espuma na boca/nariz (graus 3–4)",
    "Ausência de pulso radial (hipotensão — grau 4)",
    "Apneia (grau 5) ou PCR (grau 6)",
    "SpO₂ < 92% ou piora respiratória nas primeiras 6–8 h (lesão pulmonar tardia)",
    "Rebaixamento de consciência",
    "Mergulho em águas rasas, queda ou surfe (trauma cervical)",
    "Hipotermia associada"
  ],
  condutaInicial: [
    "Retirar da água com segurança (o socorrista não deve virar vítima); colocar em decúbito dorsal paralelo à água",
    "Checar resposta e respiração; se não respira: 5 ventilações de resgate e verificar sinais de vida; sem pulso → RCP",
    "Classificar o grau de Szpilman e tratar (ver tabela)",
    "O₂ por máscara 15 L/min nos graus 3–6; considerar CPAP/VNI no grau 3 consciente; IOT se grau 4 com falha, 5 e 6",
    "Decúbito lateral direito se respirando com espuma (reduz aspiração)",
    "Imobilização cervical só se mecanismo de trauma (mergulho, queda, surfe) ou sinais de lesão",
    "Retirar roupas molhadas, aquecer; tratar hipotermia (ver ficha Hipotermia)",
    "Glicemia, gasometria, RX de tórax; investigar causa do afogamento (convulsão, síncope/arritmia, álcool, trauma, maus-tratos em criança)"
  ],
  fataisExcluir: [
    "Hipoxemia / SDRA",
    "Lesão de coluna cervical",
    "Hipotermia",
    "Arritmia primária (QT longo, síndrome de Brugada) ou convulsão como causa",
    "Intoxicação alcoólica/drogas, TCE"
  ],
  proximaDecisao: "Resgate e grau 1: liberar no local se assintomático (grau 1 com repouso e reavaliação). Grau 2: observação hospitalar 6–24 h. Graus 3–6: internação em UTI. Pneumonia é incomum no início: não usar antibiótico profilático.",
  clinica: {
    anamnese: [
      "Tempo de submersão, tipo de água (piscina, mar, rio, esgoto), temperatura",
      "RCP realizada por leigo e tempo até ela",
      "Mecanismo (mergulho, queda), álcool, drogas, epilepsia, síncope prévia, cardiopatia",
      "Criança: supervisão, história compatível (suspeitar de negligência/maus-tratos)"
    ],
    exameFisico: [
      "Espuma em boca/nariz, FR, esforço, SpO₂, ausculta (estertores)",
      "Pulso radial, PA, perfusão",
      "Glasgow, pupilas, temperatura central",
      "Coluna cervical, sinais de trauma"
    ],
    diferenciais: [
      { dx: "Trauma raquimedular", pista: "Mergulho em água rasa, déficit motor" },
      { dx: "Arritmia/síncope que causou o afogamento", pista: "Nadador experiente, história familiar de morte súbita; ECG" },
      { dx: "Convulsão", pista: "Epilepsia conhecida, mordedura de língua" },
      { dx: "Hipotermia isolada", pista: "Imersão prolongada sem aspiração" }
    ],
    gravidade: [
      "Resgate: sem tosse, espuma ou dificuldade respiratória — avaliar e liberar",
      "Grau 1: tosse sem espuma — mortalidade ~0%",
      "Grau 2: pouca espuma na boca/nariz — ~0,6%",
      "Grau 3: muita espuma, pulso radial palpável — ~5%",
      "Grau 4: muita espuma, sem pulso radial (hipotensão) — ~19%",
      "Grau 5: parada respiratória com pulso — ~44%",
      "Grau 6: parada cardiorrespiratória — ~93%",
      "Já cadáver: submersão > 1 h ou sinais evidentes de morte (rigidez, decomposição) — não iniciar RCP"
    ]
  },
  exames: [
    {
      nome: "Respiratório",
      pedido: "Gasometria arterial, RX de tórax, SpO₂ contínua.",
      porQue: "Hipoxemia e infiltrados (podem piorar em 4–6 h).",
      esperar: "Infiltrados bilaterais e acidose nos graus ≥ 3.",
      interpretacao: "PaO₂/FiO₂ < 300 → ventilação protetora com PEEP.",
      limitacoes: "RX inicial pode ser normal."
    },
    {
      nome: "Laboratório e ECG",
      pedido: "Glicemia, sódio, potássio, cloro, ureia, creatinina, hemograma, CK, lactato, etanol sérico e toxicológico se suspeita; ECG com QTc; troponina se PCR.",
      porQue: "Distúrbios clínicos raramente relevantes; causa do afogamento.",
      esperar: "Eletrólitos geralmente normais (água doce × salgada sem diferença prática).",
      interpretacao: "QT longo ou padrão de Brugada → cardiologia.",
      limitacoes: "—"
    },
    {
      nome: "Imagem",
      pedido: "TC de coluna cervical (e crânio) se mecanismo de trauma ou rebaixamento sem causa.",
      porQue: "Lesão medular, TCE.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Grau 2: cateter nasal 5 L/min. Graus 3–4: máscara com reservatório 15 L/min",
      via: "Inalatória",
      intervalo: "Contínuo",
      duracao: "Até SpO₂ ≥ 94% em ar ambiente",
      monitorizacao: "SpO₂, FR, esforço",
      contraindicacoes: "—",
      ajustes: "Grau 3 consciente e cooperativo: CPAP/VNI pode evitar IOT"
    },
    {
      droga: "Ventilação mecânica protetora",
      linha: "l1",
      dose: "Volume corrente 6 mL/kg de peso predito, PEEP inicial 5–10 cmH₂O, titular por SpO₂ e complacência",
      via: "IOT",
      intervalo: "—",
      duracao: "Em geral 48–72 h",
      monitorizacao: "Gasometria, pressão de platô ≤ 30",
      contraindicacoes: "—",
      ajustes: "Graus 4 com falha de O₂, 5 e 6. Ver fichas Sequência rápida de intubação e Ventilação mecânica. Não retirar PEEP precocemente"
    },
    {
      droga: "Cristaloide",
      linha: "l1",
      dose: "Adulto: 500 mL em bolus. Criança: 10–20 mL/kg",
      via: "IV/IO",
      intervalo: "Repetir conforme resposta",
      duracao: "—",
      monitorizacao: "PA, congestão pulmonar",
      contraindicacoes: "—",
      ajustes: "Grau 4 (hipotensão). Vasopressor se refratário. Evitar diurético na fase inicial"
    },
    {
      droga: "RCP (grau 6)",
      linha: "l1",
      dose: "5 ventilações iniciais, depois 30:2 (criança/lactente com 2 socorristas 15:2); adrenalina 1 mg IV a cada 3–5 min (criança 0,01 mg/kg, máx. 1 mg)",
      via: "IV/IO",
      intervalo: "—",
      duracao: "Prolongar se hipotermia",
      monitorizacao: "Capnografia",
      contraindicacoes: "—",
      ajustes: "Ver fichas PCR adulto e PCR pediátrica"
    },
    {
      droga: "Antibiótico profilático / corticoide",
      linha: "ci",
      dose: "Não usar de rotina",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Febre, novo infiltrado após 48 h",
      contraindicacoes: "—",
      ajustes: "Antibiótico só se pneumonia (febre persistente, secreção, infiltrado novo após 48 h) ou água muito contaminada"
    }
  ],
  destino: {
    agora: ["Ventilar/oxigenar, classificar, aquecer"],
    reavaliar: ["SpO₂ e esforço respiratório de 1/1 h por 6–8 h (piora tardia)"],
    alta: ["Resgate/grau 1 assintomático; grau 2 após 6–8 h com SpO₂ normal em ar ambiente, ausculta e RX normais e acompanhante"],
    observacao: ["Grau 2: 6–24 h"],
    internacao: ["Graus 3–6 em UTI; grau 2 com piora"],
    transferencia: ["Sem UTI: transferir graus 3–6 após via aérea e oxigenação garantidas"]
  },
  prescricao: {
    hospitalar: "AFOGAMENTO GRAU 3–4 (peso: ___ kg)\n1. Dieta zero.\n2. Decúbito lateral direito se respirando espontaneamente; cabeceira 30° quando estável. Colar cervical só se trauma.\n3. O₂ máscara com reservatório 15 L/min; considerar CPAP 5–10 cmH₂O se consciente; IOT se SpO₂ < 92% com O₂, cansaço ou Glasgow ≤ 8.\n4. Monitor, SpO₂ contínua.\n5. SF 0,9% aquecido 500 mL IV em bolus (criança 10–20 mL/kg) se hipotensão; repetir conforme resposta.\n6. Retirar roupas molhadas, cobertores, manta térmica; temperatura central de 1/1 h.\n7. Glicemia capilar; gasometria arterial; RX de tórax; ECG; eletrólitos.\n8. Sonda nasogástrica se distensão gástrica após ventilação.\n9. Não usar antibiótico profilático nem corticoide.\n10. Criança: avaliar circunstância (supervisão) e comunicar Conselho Tutelar se suspeita de negligência.",
    ambulatorial: "ALTA (resgate, grau 1 ou grau 2 observado)\n1. Repouso por 24 h; acompanhante.\n2. Voltar imediatamente se falta de ar, tosse que piora, febre, sonolência ou lábios roxos nas próximas 24–48 h."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se falta de ar, tosse persistente, chiado, febre ou sonolência nas próximas 48 h",
    "Criança perto da água: supervisão a um braço de distância, o tempo todo; cercar piscinas; colete salva-vidas",
    "Não entrar na água após beber álcool; nadar em locais com guarda-vidas; não mergulhar em local raso ou desconhecido",
    "Aprender RCP: começar sempre pelas respirações no afogamento"
  ],
  tabelas: [
    {
      titulo: "Classificação de Szpilman — conduta",
      colunas: ["Grau", "Achado", "Conduta"],
      linhas: [
        ["Resgate", "Sem tosse, espuma ou dispneia", "Avaliar e liberar no local"],
        ["1", "Tosse sem espuma", "Repouso, aquecimento, tranquilizar; sem O₂ ou hospital em geral"],
        ["2", "Pouca espuma", "O₂ 5 L/min por cateter; observação hospitalar 6–24 h"],
        ["3", "Muita espuma, pulso radial presente", "O₂ 15 L/min por máscara, decúbito lateral direito, CPAP/IOT; UTI"],
        ["4", "Muita espuma, sem pulso radial", "Como grau 3 + volume/vasopressor; vigiar parada respiratória; UTI"],
        ["5", "Apneia com pulso", "Ventilação (10 ventilações iniciais no APH) até respirar; depois como grau 4"],
        ["6", "PCR", "RCP iniciando com 5 ventilações; depois 30:2; ACLS/PALS"]
      ],
      nota: "Classificação da SOBRASA (Szpilman, 1997; revisões posteriores)."
    }
  ],
  fontes: [
    "SOBRASA — Szpilman D. Classificação e tratamento do afogamento (Sociedade Brasileira de Salvamento Aquático, versão vigente)",
    "Szpilman D. Near-drowning and drowning classification: a proposal to stratify mortality based on the analysis of 1,831 cases (Chest, 1997)",
    "European Resuscitation Council — Guidelines 2021: Cardiac arrest in special circumstances (afogamento)",
    "AHA — Diretrizes de RCP e ACE (2020; atualização 2025)",
    "Wilderness Medical Society — Clinical Practice Guidelines for the treatment and prevention of drowning (2019, atualização 2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
