// Abstinência alcoólica grave no PS
registrarFicha({
  id: "abstinencia-alcoolica-grave",
  especialidade: "saude-mental",
  caminho: "ps",
  publico: "adulto",
  titulo: "Abstinência alcoólica grave, delirium tremens e Wernicke (PS)",
  resumo: "Manejo hospitalar da síndrome de abstinência alcoólica moderada a grave: CIWA-Ar, benzodiazepínico guiado por sintomas ou dose de ataque, convulsões, delirium tremens refratário e prevenção/tratamento da encefalopatia de Wernicke. Para rastreio e abstinência leve na UBS, ver ficha Uso de álcool.",
  palavrasChave: "abstinencia alcoolica delirium tremens dt ciwa ciwa-ar convulsao alcoolica alucinose alcoolica wernicke tiamina diazepam fenobarbital etilismo alcool magnesio korsakoff",
  critico: {
    tempo: "Tiamina antes da glicose",
    texto: "Tiamina IV antes de qualquer glicose. Benzodiazepínico em dose suficiente e precoce: o delirium tremens tem mortalidade alta se subtratado. Haloperidol isolado não trata abstinência."
  },
  alarmes: [
    "CIWA-Ar > 18–20 apesar do tratamento",
    "Delirium (desorientação, alucinações, agitação, flutuação) com hiperatividade autonômica",
    "Convulsão (especialmente repetida ou focal: investigar TCE)",
    "Confusão + ataxia + oftalmoplegia/nistagmo (Wernicke)",
    "Febre, hipotensão, hipoxemia (pneumonia aspirativa, sepse)",
    "Necessidade de > 200 mg de diazepam em poucas horas (abstinência refratária)"
  ],
  condutaInicial: [
    "Monitor, acesso, glicemia capilar; tiamina IV antes de glicose",
    "Aplicar CIWA-Ar (se paciente consegue responder) a cada 1 h nas primeiras horas",
    "CIWA-Ar ≥ 10: diazepam 10–20 mg VO (ou 10 mg IV) a cada 1 h até CIWA-Ar < 10 (tratamento guiado por sintomas)",
    "Delirium tremens / agitação grave: diazepam 10 mg IV, repetir 10–20 mg a cada 5–10 min até sedação leve (paciente calmo, desperta ao chamado)",
    "Refratário: fenobarbital IV ou midazolam/propofol em infusão com IOT, em UTI",
    "Corrigir glicose, magnésio, potássio, fósforo; hidratação",
    "Investigar complicações: TCE, infecção, hemorragia digestiva, pancreatite, hepatopatia, hipoglicemia",
    "Ambiente calmo, iluminado, orientação frequente; contenção só se necessário e com sedação"
  ],
  fataisExcluir: [
    "Encefalopatia de Wernicke",
    "TCE com hematoma subdural",
    "Meningite / sepse / pneumonia aspirativa",
    "Hipoglicemia, hiponatremia, encefalopatia hepática",
    "Intoxicação por metanol ou outras drogas, abstinência de BZD"
  ],
  proximaDecisao: "CIWA-Ar < 10 por 24 h sem necessidade de doses → reduzir e suspender BZD. Paciente estável sem delirium → encaminhar ao CAPS AD com plano de tratamento (naltrexona etc. — ver ficha Uso de álcool). DT → UTI e manter tiamina.",
  clinica: {
    anamnese: [
      "Hora da última dose de álcool, quantidade diária, tempo de uso",
      "Abstinências prévias, convulsões ou DT prévios (maior risco)",
      "Uso de BZD, outras drogas, doenças (hepatopatia, cardiopatia, DPOC)",
      "Quedas, TCE, vômitos, sangramentos"
    ],
    exameFisico: [
      "Tremor, sudorese, taquicardia, hipertensão, febre, agitação",
      "Orientação, atenção, alucinações (visuais e táteis)",
      "Sinais de Wernicke: nistagmo, oftalmoplegia, ataxia, confusão",
      "Estigmas hepáticos, sinais de TCE, desidratação"
    ],
    diferenciais: [
      { dx: "Encefalopatia de Wernicke", pista: "Confusão, ataxia, alteração ocular (tríade completa em minoria)" },
      { dx: "Encefalopatia hepática", pista: "Asterixe, hepatopatia, sem hiperatividade autonômica importante" },
      { dx: "Hematoma subdural", pista: "Queda, déficit focal, rebaixamento — TC de crânio" },
      { dx: "Sepse / meningite", pista: "Febre persistente, foco, rigidez de nuca" },
      { dx: "Intoxicação por estimulantes / anticolinérgicos", pista: "História, toxíndrome" }
    ],
    gravidade: [
      "Tempo após a última dose: tremor e ansiedade 6–24 h; alucinose 12–48 h; convulsões 6–48 h; delirium tremens 48–96 h (dura até 5–7 dias)",
      "CIWA-Ar: < 10 leve · 10–18 moderada · > 18 grave",
      "Risco de abstinência grave: DT ou convulsão prévios, idade > 65, comorbidade aguda, plaquetas baixas, hipocalemia, uso de BZD, PAWSS ≥ 4 (escala de previsão)"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Glicemia, sódio, potássio, magnésio, fósforo, cálcio, ureia, creatinina, hemograma, TGO, TGP, GGT, bilirrubinas, TP/INR, albumina, lipase, CK, gasometria venosa com lactato, etanol sérico se disponível.",
      porQue: "Distúrbios eletrolíticos (Mg, K, P), hepatopatia, pancreatite, rabdomiólise.",
      esperar: "Hipomagnesemia, hipocalemia, hipofosfatemia, macrocitose, plaquetopenia.",
      interpretacao: "Corrigir Mg e K melhora tremor e reduz arritmias.",
      limitacoes: "—"
    },
    {
      nome: "Imagem e outros",
      pedido: "TC de crânio sem contraste (1ª convulsão, convulsão focal ou repetida, trauma, rebaixamento persistente); ECG; RX de tórax se febre ou hipóxia; líquor se febre sem foco com alteração mental.",
      porQue: "Excluir causas estruturais e infecção.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Tiamina (ampola 100 mg/mL)",
      linha: "l1",
      dose: "Profilaxia: 100–300 mg/dia IV ou IM. Wernicke suspeita/confirmada: 500 mg IV",
      via: "IV (em 100 mL de SF 0,9% em 30 min) ou IM",
      intervalo: "Profilaxia 1×/dia; Wernicke 8/8 h",
      duracao: "Wernicke: 500 mg 8/8 h por 3 dias, depois 250 mg/dia por 3–5 dias, depois VO",
      monitorizacao: "Sinais neurológicos",
      contraindicacoes: "—",
      ajustes: "Sempre antes de glicose. Reação anafilática é rara"
    },
    {
      droga: "Diazepam (ampola 5 mg/mL — 10 mg/2 mL; comprimido 10 mg)",
      linha: "l1",
      dose: "Guiado por sintomas: 10–20 mg VO ou 10 mg IV a cada 1 h se CIWA-Ar ≥ 10. DT: 10 mg IV, repetir 10–20 mg a cada 5–10 min até sedação leve",
      via: "VO ou IV lento (não IM)",
      intervalo: "Conforme CIWA-Ar",
      duracao: "Em geral 3–7 dias",
      monitorizacao: "Sedação (RASS), FR, SpO₂",
      contraindicacoes: "Insuficiência respiratória grave; cautela em hepatopatia avançada",
      ajustes: "Hepatopatia grave/idoso: lorazepam VO 1–4 mg a cada 1 h conforme CIWA-Ar (não há lorazepam IV no Brasil — usar midazolam em infusão se necessário). Meia-vida longa favorece desmame automático"
    },
    {
      droga: "Fenobarbital (ampola 100 mg/mL)",
      linha: "alt",
      dose: "Conforme protocolo institucional / UTI",
      via: "IV lento",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Depressão respiratória (sobretudo associado a BZD), hipotensão",
      contraindicacoes: "Sem capacidade de suporte ventilatório",
      ajustes: "Abstinência refratária a BZD (ASAM 2020). Sinergismo com BZD: monitorar intensivamente"
    },
    {
      droga: "Midazolam ou propofol em infusão + IOT",
      linha: "alt",
      dose: "Conforme ficha Sedação contínua",
      via: "IV contínua",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "UTI",
      contraindicacoes: "—",
      ajustes: "DT refratário"
    },
    {
      droga: "Sulfato de magnésio 50% / reposição de K e P",
      linha: "adj",
      dose: "MgSO₄ 2 g (4 mL de 50%) IV em 100 mL de SF em 1 h se Mg baixo",
      via: "IV",
      intervalo: "Repetir conforme dosagem",
      duracao: "—",
      monitorizacao: "Mg, K, reflexos",
      contraindicacoes: "Insuficiência renal grave (ajustar)",
      ajustes: "Hipocalemia refratária costuma exigir correção de Mg"
    },
    {
      droga: "Haloperidol",
      linha: "adj",
      dose: "2,5–5 mg IV/IM",
      via: "IV/IM",
      intervalo: "Até 6/6 h",
      duracao: "Curto prazo",
      monitorizacao: "QTc, limiar convulsivo",
      contraindicacoes: "Monoterapia (não trata abstinência), QTc longo",
      ajustes: "Só como adjuvante para alucinações/agitação após BZD adequado"
    },
    {
      droga: "Fenitoína para convulsão de abstinência",
      linha: "ci",
      dose: "Não usar",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Ineficaz nas convulsões de abstinência",
      ajustes: "Tratar convulsão com BZD"
    }
  ],
  destino: {
    agora: ["Tiamina, BZD conforme CIWA-Ar, eletrólitos, investigar complicações"],
    reavaliar: ["CIWA-Ar de 1/1 h até < 10 por 4 h, depois de 4/4 h; RASS e FR após cada dose"],
    alta: ["CIWA-Ar < 10 sem medicação por 24 h, sem delirium, sem complicações, com acompanhante e seguimento no CAPS AD/UBS"],
    observacao: ["Abstinência moderada com resposta rápida: 12–24 h"],
    internacao: ["CIWA-Ar > 18, convulsão, alucinose, DT, Wernicke, comorbidade aguda; UTI se DT, doses altas de BZD, necessidade de fenobarbital ou IOT"],
    transferencia: ["Sem UTI: transferir com sedação controlada e via aérea avaliada"]
  },
  prescricao: {
    hospitalar: "ABSTINÊNCIA ALCOÓLICA MODERADA/GRAVE (adulto, peso: ___ kg)\n1. Dieta oral livre se acordado e sem risco de aspiração; dieta zero se DT.\n2. Monitor, SpO₂, grades elevadas, ambiente iluminado e calmo; precaução de queda e de aspiração.\n3. Tiamina 100 mg/mL — 3 mL (300 mg) IV em 100 mL de SF 0,9% em 30 min 1×/dia ANTES de qualquer soro glicosado. Se suspeita de Wernicke: 500 mg (5 mL) IV em 100 mL de SF 0,9% em 30 min de 8/8 h por 3 dias.\n4. SF 0,9% 1.000 mL IV em 2 h se desidratado; manutenção SG 5% + eletrólitos após a tiamina, conforme ingestão.\n5. Diazepam conforme CIWA-Ar (aplicar de 1/1 h):\n   - CIWA-Ar ≥ 10: diazepam 10 mg VO (ou 10 mg IV lento, sem diluir, se não aceita VO); repetir em 1 h se persistir.\n   - Delirium/agitação grave: diazepam 10 mg IV lento, repetir 10–20 mg a cada 5–10 min até paciente calmo e despertável.\n   - Comunicar se > 100 mg em 2 h ou necessidade crescente (refratário → UTI).\n6. Sulfato de magnésio 50% 4 mL (2 g) em 100 mL de SF 0,9% IV em 1 h se Mg < 1,8 mg/dL ou não dosado e função renal normal.\n7. KCl conforme potássio; fósforo se < 2 mg/dL.\n8. Ácido fólico 5 mg VO 1×/dia.\n9. Omeprazol 20 mg VO/IV 1×/dia se sintomas dispépticos.\n10. Enoxaparina 40 mg SC 1×/dia se plaquetas > 50.000 e sem sangramento.\n11. Haloperidol 5 mg IM/IV até 6/6 h SN alucinações apesar de BZD adequado (ECG antes).\n12. Controles: CIWA-Ar de 1/1 h; sinais vitais de 2/2 h; glicemia capilar de 6/6 h; eletrólitos diários.",
    ambulatorial: "ALTA — ver ficha Uso de álcool para manutenção (tiamina VO, naltrexona, CAPS AD).\nUSO ORAL\n1. Tiamina 300 mg ----------------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia.\n2. Ácido fólico 5 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia."
  },
  orientacoesRetorno: [
    "Não voltar a beber; se beber de novo e parar de repente, os sintomas podem voltar",
    "Procurar o CAPS AD nos próximos dias para tratamento",
    "Voltar imediatamente se tremor intenso, ver ou ouvir coisas, convulsão, confusão ou andar cambaleante",
    "Não dirigir enquanto usar calmante",
    "Retorno na UBS/CAPS AD em até 7 dias"
  ],
  tabelas: [
    {
      titulo: "CIWA-Ar — itens",
      colunas: ["Item", "Pontuação"],
      linhas: [
        ["Náusea e vômitos", "0–7"],
        ["Tremor", "0–7"],
        ["Sudorese paroxística", "0–7"],
        ["Ansiedade", "0–7"],
        ["Agitação", "0–7"],
        ["Distúrbios táteis", "0–7"],
        ["Distúrbios auditivos", "0–7"],
        ["Distúrbios visuais", "0–7"],
        ["Cefaleia", "0–7"],
        ["Orientação e sensório", "0–4"]
      ],
      nota: "Total máximo 67. < 10 leve; 10–18 moderada; > 18 grave. Exige paciente comunicativo — no delirium, guiar por escala de sedação (RASS)."
    }
  ],
  fontes: [
    "ASAM — Clinical Practice Guideline on Alcohol Withdrawal Management (2020)",
    "EFNS — Guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy (2010)",
    "NICE CG100 — Alcohol-use disorders: diagnosis and management of physical complications (2010, atualizado 2017)",
    "Sullivan JT et al. CIWA-Ar (Br J Addict, 1989)",
    "Associação Brasileira de Psiquiatria / AMB — Abuso e dependência do álcool: diretriz (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
