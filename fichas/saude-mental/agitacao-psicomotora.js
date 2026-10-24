// Agitação psicomotora
registrarFicha({
  id: "agitacao-psicomotora",
  especialidade: "saude-mental",
  caminho: "ps",
  publico: "adulto",
  titulo: "Agitação psicomotora e comportamento agressivo",
  resumo: "Atividade motora e verbal excessiva, com tensão e risco de agressão, por causa psiquiátrica ou orgânica. Sequência: segurança da equipe, desescalada verbal, medicação oral, medicação IM, contenção física só como último recurso.",
  palavrasChave: "agitacao psicomotora agressividade paciente agitado violencia surto psicotico contencao fisica contencao mecanica tranquilizacao rapida haloperidol prometazina midazolam olanzapina risperidona desescalada delirium mania intoxicacao",
  critico: {
    tempo: "Desescalada verbal primeiro",
    texto: "Garantir a segurança e tentar a abordagem verbal. Glicemia capilar e sinais vitais assim que possível: hipoglicemia, hipóxia, intoxicação, abstinência e delirium são causas que matam se forem tratadas só como psiquiátricas."
  },
  alarmes: [
    "Febre, rigidez, alteração de consciência (delirium, encefalite, síndrome neuroléptica maligna, serotoninérgica)",
    "Hipoglicemia, hipóxia, TCE, AVC",
    "Taquicardia, hipertermia, midríase (intoxicação por estimulantes)",
    "Tremor, sudorese, alucinações após parar álcool ou BZD (abstinência)",
    "Idoso com início agudo (delirium)",
    "Após contenção: SpO₂ baixa, hipotensão, arritmia, hipertermia, rabdomiólise, asfixia (nunca em decúbito ventral)"
  ],
  condutaInicial: [
    "Segurança: equipe suficiente (5 pessoas se contenção), retirar objetos perigosos, porta de saída livre para a equipe, segurança acionada",
    "Desescalada verbal: uma pessoa fala, voz calma, respeitar o espaço, ouvir, validar o sentimento, oferecer escolhas (água, comida, medicação oral)",
    "Avaliar causa orgânica: glicemia capilar, SpO₂, sinais vitais, temperatura, sinais de trauma, intoxicação ou abstinência",
    "Paciente colaborativo: medicação VO (ver tabela) e reavaliar em 30–60 min",
    "Não colaborativo e com risco iminente: tranquilização rápida IM — haloperidol 5 mg + prometazina 50 mg, ou midazolam 5–15 mg, ou olanzapina 10 mg",
    "Contenção física só se as medidas anteriores falharem: prescrição médica, registro, monitorização a cada 15 min, reavaliação e retirada o quanto antes (CFM 2.057/2013)",
    "Após sedação: monitorar SpO₂, PA, FC, FR, nível de consciência; ECG se antipsicótico repetido"
  ],
  fataisExcluir: [
    "Hipoglicemia",
    "Hipóxia, sepse, meningite/encefalite",
    "TCE, hemorragia intracraniana, AVC",
    "Intoxicação (cocaína, anfetamina, anticolinérgicos) e abstinência alcoólica/BZD",
    "Síndrome neuroléptica maligna e síndrome serotoninérgica",
    "Delirium por qualquer causa clínica"
  ],
  proximaDecisao: "Calmo e cooperativo → completar avaliação clínica e psiquiátrica. Persistência após 2 doses IM → reavaliar causa orgânica, associar classe diferente e considerar sedação em ambiente monitorizado. Psicose/mania sem causa orgânica → avaliação psiquiátrica, CAPS ou internação (voluntária, involuntária com comunicação ao MP em 72 h — Lei 10.216/2001).",
  clinica: {
    anamnese: [
      "Com acompanhante: início, desencadeante, transtorno psiquiátrico prévio, adesão ao tratamento",
      "Uso de álcool, drogas, medicamentos (corticoide, anticolinérgicos, ISRS, antipsicóticos)",
      "Doenças clínicas, trauma, febre, cefaleia, convulsão",
      "Episódios prévios de agressividade e o que funcionou"
    ],
    exameFisico: [
      "Sinais vitais, glicemia, temperatura, SpO₂",
      "Nível de consciência e atenção (flutuação = delirium), orientação",
      "Pupilas, sudorese, tremor, rigidez, clônus",
      "Sinais de trauma craniano, déficits focais, rigidez de nuca"
    ],
    diferenciais: [
      { dx: "Delirium", pista: "Início agudo, flutuação, desatenção, idoso, doença clínica" },
      { dx: "Intoxicação por estimulantes", pista: "Taquicardia, hipertensão, hipertermia, midríase, sudorese" },
      { dx: "Abstinência alcoólica / delirium tremens", pista: "Tremor, sudorese, alucinações visuais 48–96 h após parar" },
      { dx: "Síndrome anticolinérgica", pista: "Pele seca e quente, midríase, retenção urinária" },
      { dx: "Psicose / mania", pista: "Consciência preservada, delírios, alucinações auditivas, histórico" },
      { dx: "Demência com sintomas comportamentais", pista: "Idoso com declínio cognitivo prévio; buscar dor, retenção urinária, infecção" }
    ],
    gravidade: [
      "Escalas de agitação: RASS (+1 inquieto a +4 combativo) ou Escala de Agitação e Calma (ACES)",
      "Risco iminente de violência: ameaças, punhos cerrados, voz alta, andar de um lado para outro, objetos na mão"
    ]
  },
  exames: [
    {
      nome: "Triagem orgânica",
      pedido: "Glicemia capilar, SpO₂, sinais vitais e temperatura; hemograma, sódio, potássio, cálcio, ureia, creatinina, TGO, TGP, CK, PCR; urina tipo 1.",
      porQue: "Excluir causa clínica e complicações (rabdomiólise após contenção).",
      esperar: "Normais na agitação de causa psiquiátrica primária.",
      interpretacao: "Hiponatremia, hipercalcemia, infecção, CK alta = investigar e tratar.",
      limitacoes: "Colher após sedação se necessário."
    },
    {
      nome: "ECG",
      pedido: "Eletrocardiograma de 12 derivações com QTc.",
      porQue: "Antipsicóticos prolongam QT; estimulantes causam isquemia e arritmia.",
      esperar: "QTc < 450 ms (homem) / < 470 ms (mulher).",
      interpretacao: "QTc > 500 ms: evitar haloperidol e repetir doses; preferir BZD.",
      limitacoes: "—"
    },
    {
      nome: "Toxicologia e imagem",
      pedido: "Etanol sérico e pesquisa de drogas na urina se disponível. TC de crânio sem contraste se trauma, déficit focal, primeiro episódio em > 40 anos ou rebaixamento. Líquor se febre e alteração de consciência.",
      porQue: "Causas orgânicas.",
      esperar: "—",
      interpretacao: "Teste de urina positivo não prova que a droga é a causa atual.",
      limitacoes: "Testes de urina não detectam muitas drogas sintéticas."
    }
  ],
  tratamento: [
    {
      droga: "Haloperidol 5 mg/mL + prometazina 25 mg/mL",
      linha: "l1",
      dose: "Haloperidol 5 mg + prometazina 50 mg",
      via: "IM (na mesma seringa ou separadas)",
      intervalo: "Repetir em 30–60 min se necessário",
      duracao: "Máx. haloperidol 20 mg/24 h no PS",
      monitorizacao: "SpO₂, PA, sedação, distonia, QTc",
      contraindicacoes: "QTc longo, Parkinson, demência com corpos de Lewy, intoxicação anticolinérgica, suspeita de SNM",
      ajustes: "Esquema TREC, com boa evidência no Brasil. Prometazina reduz distonia. Idoso: haloperidol 0,5–2 mg. Distonia aguda: biperideno 5 mg IM"
    },
    {
      droga: "Midazolam 5 mg/mL",
      linha: "l1",
      dose: "5–15 mg (idoso: 2,5–5 mg)",
      via: "IM",
      intervalo: "Repetir em 15–30 min se necessário",
      duracao: "—",
      monitorizacao: "Depressão respiratória (SpO₂ contínua), material de via aérea pronto",
      contraindicacoes: "Insuficiência respiratória, intoxicação por álcool ou depressores (cautela)",
      ajustes: "Início mais rápido (5–15 min). Preferir na intoxicação por estimulantes e na abstinência. Pode associar haloperidol 5 mg IM"
    },
    {
      droga: "Olanzapina",
      linha: "alt",
      dose: "10 mg IM (ou 10 mg VO / orodispersível)",
      via: "IM ou VO",
      intervalo: "Repetir em 2 h se necessário (máx. 20–30 mg/dia)",
      duracao: "—",
      monitorizacao: "Hipotensão, sedação",
      contraindicacoes: "Não associar BZD parenteral em menos de 1 h (hipotensão e depressão respiratória)",
      ajustes: "Disponibilidade IM limitada no SUS. Idoso: 2,5–5 mg"
    },
    {
      droga: "Medicação oral (paciente colaborativo)",
      linha: "l1",
      dose: "Risperidona 2 mg; ou olanzapina 10 mg; ou haloperidol 5 mg + prometazina 25 mg; ou diazepam 10 mg / lorazepam 2 mg (ansiedade, abstinência, estimulantes)",
      via: "VO",
      intervalo: "Repetir em 1–2 h se necessário",
      duracao: "—",
      monitorizacao: "Sedação",
      contraindicacoes: "Antipsicótico em intoxicação anticolinérgica ou suspeita de SNM",
      ajustes: "Oferecer sempre antes da via IM: aumenta a colaboração"
    },
    {
      droga: "Diazepam IM / clorpromazina IM",
      linha: "ci",
      dose: "Evitar",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Diazepam IM tem absorção errática; clorpromazina IM causa hipotensão grave",
      ajustes: "Diazepam pode ser usado IV lento em ambiente monitorizado"
    }
  ],
  destino: {
    agora: ["Segurança, abordagem verbal, causa orgânica, tranquilização rápida se necessário"],
    reavaliar: ["Sinais vitais e sedação a cada 15 min na 1ª hora após medicação IM; contido: a cada 15 min"],
    alta: ["Causa orgânica excluída, calmo, sem risco a si/outros, com acompanhante e seguimento no CAPS/UBS"],
    observacao: ["Intoxicação aguda até metabolização e reavaliação psiquiátrica sóbrio"],
    internacao: ["Causa clínica (delirium), psicose ou mania com risco, risco de suicídio — internação psiquiátrica (leito em hospital geral ou CAPS III)"],
    transferencia: ["Regulação para psiquiatria após estabilização clínica"]
  },
  prescricao: {
    hospitalar: "AGITAÇÃO PSICOMOTORA — TRANQUILIZAÇÃO RÁPIDA (adulto, peso: ___ kg)\n1. Ambiente calmo, pouca luz e ruído; acompanhante de confiança se ajudar.\n2. Glicemia capilar, SpO₂, PA, FC, temperatura assim que possível.\n3. Oferecer VO: risperidona 2 mg OU haloperidol 5 mg + prometazina 25 mg.\n4. Se recusar e houver risco iminente: haloperidol 5 mg/mL 1 mL (5 mg) + prometazina 25 mg/mL 2 mL (50 mg) IM no deltoide ou glúteo. Repetir em 30–60 min se necessário (máx. haloperidol 20 mg/24 h).\n   OU midazolam 5 mg/mL 1–3 mL (5–15 mg) IM (estimulantes, abstinência, QTc longo).\n5. Se distonia aguda: biperideno 5 mg/mL 1 mL IM.\n6. Contenção física (se indicada): em decúbito dorsal, cabeceira 30°, 4 pontos com faixas acolchoadas; registrar motivo, horário e responsável; checar perfusão de extremidades, SpO₂ e sinais vitais de 15/15 min; reavaliar necessidade a cada 1 h; retirar gradualmente assim que possível.\n7. Após sedação: SpO₂ contínua, PA/FC/FR de 15/15 min por 1 h, depois de 1/1 h; decúbito lateral se sonolento.\n8. ECG com QTc; exames conforme suspeita clínica; CK se contenção ou agitação prolongada.\n9. Hidratação: SF 0,9% 500 mL IV se desidratado ou CK alta.\n10. Idoso: haloperidol 0,5–2 mg; evitar BZD (exceto abstinência).",
    ambulatorial: "Não se aplica a prescrição ambulatorial para o episódio. Na alta, seguimento no CAPS ou UBS com o tratamento de base ajustado pelo psiquiatra."
  },
  orientacoesRetorno: [
    "Para a família: manter o tratamento indicado e não suspender os remédios por conta própria",
    "Evitar álcool e outras drogas",
    "Procurar o PS ou o SAMU 192 se houver nova agitação com risco, febre com rigidez, confusão ou ideias de morte",
    "Consulta no CAPS ou com psiquiatra em até 7 dias"
  ],
  tabelas: [
    {
      titulo: "Escolha conforme a causa",
      colunas: ["Situação", "Preferir", "Evitar"],
      linhas: [
        ["Psicose ou mania", "Haloperidol + prometazina IM; olanzapina; risperidona VO", "—"],
        ["Intoxicação por estimulante (cocaína, anfetamina)", "Midazolam / diazepam", "Antipsicótico isolado em hipertermia"],
        ["Abstinência alcoólica ou de BZD", "Diazepam (ver ficha Abstinência alcoólica grave)", "Haloperidol isolado (reduz limiar convulsivo)"],
        ["Intoxicação alcoólica", "Haloperidol em dose baixa", "BZD (depressão respiratória)"],
        ["Delirium no idoso", "Tratar a causa; haloperidol 0,5–1 mg", "BZD (piora o delirium)"],
        ["QTc > 500 ms", "Midazolam", "Haloperidol, clorpromazina"]
      ]
    }
  ],
  fontes: [
    "Associação Brasileira de Psiquiatria — Baldaçara L et al. Brazilian guidelines for the management of psychomotor agitation (Braz J Psychiatry, 2019)",
    "Conselho Federal de Medicina — Resolução CFM nº 2.057/2013 (contenção física e atendimento psiquiátrico)",
    "Lei nº 10.216/2001 — proteção das pessoas com transtornos mentais (internação involuntária)",
    "TREC Collaborative Group — Rapid tranquillisation trials (BMJ, 2003; Cochrane 2017–2021)",
    "NICE NG10 — Violence and aggression: short-term management (2015, atualizado)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
