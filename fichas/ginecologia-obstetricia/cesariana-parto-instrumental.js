// Cesariana e parto vaginal instrumental
registrarFicha({
  id: "cesariana-parto-instrumental",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Cesariana e parto instrumental (fórceps e vácuo)",
  resumo: "Indicações de cesárea, classificação de Robson, cesárea a pedido, profilaxias (antibiótico, tromboembolismo, aspiração, hemorragia) e pré-requisitos e indicações do fórceps e do vácuo-extrator.",
  palavrasChave: "cesarea cesariana robson indicacao cesarea eletiva cesarea a pedido parto instrumental forceps vacuo extrator ventosa kiwi periodo expulsivo prolongado cefazolina profilaxia antibiotica tromboprofilaxia enoxaparina vbac parto apos cesarea",
  critico: {
    tempo: "Cefazolina 2 g até 60 min antes",
    texto: "Toda cesárea recebe cefazolina 2 g IV (3 g se ≥ 120 kg) 30–60 min antes da incisão. Cesárea de emergência por sofrimento fetal ou prolapso: decisão à incisão o mais rápido possível (meta clássica de 30 min)."
  },
  alarmes: [
    "Bradicardia fetal persistente, prolapso de cordão, descolamento de placenta com feto vivo, rotura uterina: cesárea de emergência",
    "Hemorragia pós-parto ou atonia na cesárea",
    "Falha de fórceps ou vácuo: não insistir com o outro instrumento; cesárea",
    "Febre, dor e secreção na ferida no pós-operatório (ver ficha Infecção puerperal)",
    "Dispneia ou dor torácica no pós-operatório (TEP)"
  ],
  condutaInicial: [
    "Confirmar e registrar a indicação (classificar no grupo de Robson)",
    "Consentimento informado; tipagem e reserva de sangue conforme risco (placenta prévia/acretismo: reserva maior)",
    "Jejum de 6–8 h para sólidos em cesárea eletiva (líquidos claros até 2 h antes)",
    "Profilaxia de aspiração, antibiótica e de HPP; sonda vesical de demora; tricotomia só se necessária (aparar, não raspar)",
    "Cesárea eletiva sem indicação de antecipar: a partir de 39 semanas",
    "Parto instrumental: conferir todos os pré-requisitos e ter plano B (cesárea) pronto"
  ],
  fataisExcluir: [
    "Acretismo placentário (placenta prévia + cesárea anterior)",
    "Rotura uterina",
    "Hemorragia pós-parto",
    "Tromboembolismo venoso no puerpério"
  ],
  proximaDecisao: "Expulsivo prolongado: cabeça insinuada (≥ +2), dilatação completa, variedade conhecida e operador experiente → fórceps ou vácuo; cabeça alta, variedade incerta ou sinais de desproporção → cesárea. Após cesárea, decidir tromboprofilaxia farmacológica pelo escore de risco.",
  clinica: {
    anamnese: [
      "Indicação; idade gestacional; cesáreas e cirurgias uterinas anteriores (tipo de incisão)",
      "Alergias (penicilina/cefalosporina), coagulopatia, anticoagulante",
      "Fatores de risco para TEV: obesidade, idade ≥ 35, trombofilia, pré-eclâmpsia, imobilidade, infecção",
      "Desejo de laqueadura (Lei 14.443/2022: pode ser feita no parto se manifestada ≥ 60 dias antes)"
    ],
    exameFisico: [
      "Sinais vitais, peso",
      "Para instrumental: dilatação completa, membranas rotas, altura (De Lee), variedade de posição (fontanelas, sutura sagital), bossa, assinclitismo, bexiga vazia"
    ],
    diferenciais: [
      { dx: "Indicações maternas", pista: "Placenta prévia total, vasa prévia, cesárea corporal ou rotura prévia, ≥ 2 cesáreas (relativa), herpes genital ativo, HIV com CV ≥ 1.000 ou desconhecida, obstrução do canal" },
      { dx: "Indicações fetais", pista: "Sofrimento fetal sem parto vaginal iminente, prolapso de cordão com dilatação incompleta, situação transversa, pélvico (após discussão), gemelar com 1º não cefálico" },
      { dx: "Indicações de trabalho de parto", pista: "Desproporção cefalopélvica, parada de progressão não corrigida, falha de indução" }
    ],
    gravidade: [
      "Cesárea anterior não é indicação absoluta: oferecer prova de trabalho de parto (VBAC) se 1 cesárea segmentar e sem outra contraindicação",
      "Cesárea a pedido: permitida a partir de 39 semanas, após informação de riscos e benefícios e registro em termo (Resolução CFM 2.144/2016)",
      "Classes de urgência: 1 risco imediato à vida (materna/fetal); 2 comprometimento sem risco imediato; 3 sem comprometimento, precisa nascer; 4 eletiva"
    ]
  },
  exames: [
    {
      nome: "Pré-operatório",
      pedido: "Hemograma, tipagem ABO-Rh, Coombs indireto se Rh negativo, testes rápidos de HIV, sífilis e hepatite B se não feitos no 3º trimestre. Coagulograma se pré-eclâmpsia grave/HELLP, descolamento ou suspeita de coagulopatia. Reserva de concentrado de hemácias conforme risco.",
      porQue: "Segurança anestésica e transfusional.",
      esperar: "—",
      interpretacao: "Plaquetas baixas ou coagulopatia: discutir anestesia geral x raquianestesia com o anestesiologista.",
      limitacoes: "Exames não devem atrasar cesárea de emergência."
    },
    {
      nome: "USG/Doppler para acretismo",
      pedido: "USG obstétrica com Doppler para avaliação de acretismo placentário (placenta prévia ou anterior baixa com cesárea prévia).",
      porQue: "Planejar cesárea em centro de referência.",
      esperar: "—",
      interpretacao: "Suspeita de acretismo: equipe multidisciplinar, reserva de sangue, cell saver se disponível.",
      limitacoes: "Ressonância como complemento."
    }
  ],
  tratamento: [
    {
      droga: "Cefazolina",
      linha: "l1",
      dose: "2 g (3 g se peso ≥ 120 kg)",
      via: "IV",
      intervalo: "Dose única 30–60 min antes da incisão; repetir se cirurgia > 4 h ou sangramento > 1.500 mL",
      duracao: "Dose única",
      monitorizacao: "Reação alérgica",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Alergia grave: clindamicina 900 mg IV + gentamicina 5 mg/kg IV. Cesárea em trabalho de parto ou bolsa rota: ACOG sugere acrescentar azitromicina 500 mg IV"
    },
    {
      droga: "Ocitocina (prevenção de HPP na cesárea)",
      linha: "l1",
      dose: "Conforme protocolo institucional de HPP (bolus IV lento de baixa dose seguido de infusão de manutenção)",
      via: "IV",
      intervalo: "Após o nascimento",
      duracao: "Algumas horas no pós-operatório",
      monitorizacao: "Tônus uterino, sangramento, PA",
      contraindicacoes: "—",
      ajustes: "Bolus IV rápido causa hipotensão; fazer lento. Ver protocolo OPAS 2018"
    },
    {
      droga: "Enoxaparina (tromboprofilaxia)",
      linha: "adj",
      dose: "40 mg (peso 50–90 kg); ajustar por peso",
      via: "SC",
      intervalo: "1×/dia, iniciar 6–12 h após a cirurgia (≥ 4 h após retirar cateter peridural)",
      duracao: "Por 10 dias ou 6 semanas conforme risco",
      monitorizacao: "Plaquetas se uso prolongado",
      contraindicacoes: "Sangramento ativo, plaquetas < 75 mil, coagulopatia",
      ajustes: "Indicação por escore de risco (RCOG/FEBRASGO). Todas: deambulação precoce e hidratação. ClCr < 30: 20 mg 1×/dia"
    },
    {
      droga: "Profilaxia de aspiração",
      linha: "adj",
      dose: "Omeprazol 40 mg IV + metoclopramida 10 mg IV",
      via: "IV",
      intervalo: "30–60 min antes da cirurgia",
      duracao: "Dose única",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Conforme protocolo da anestesia; antiácido não particulado (citrato de sódio) se disponível"
    },
    {
      droga: "Analgesia pós-operatória",
      linha: "l1",
      dose: "Dipirona 1 g IV/VO 6/6 h + cetoprofeno 100 mg IV 12/12 h (ou ibuprofeno 600 mg VO 8/8 h)",
      via: "IV/VO",
      intervalo: "Horário",
      duracao: "48–72 h, depois SN",
      monitorizacao: "Dor, sangramento, função renal",
      contraindicacoes: "AINE: pré-eclâmpsia grave com lesão renal, plaquetopenia, sangramento",
      ajustes: "Morfina intratecal pela anestesia. Resgate: tramadol 50–100 mg IV/VO 6/6 h SN. Evitar codeína na amamentação"
    }
  ],
  destino: {
    agora: ["Cesárea de emergência: centro cirúrgico imediato, pediatra presente"],
    reavaliar: ["Pós-operatório: tônus e sangramento 15/15 min na 1ª hora, diurese, dor, ferida em 24–48 h"],
    alta: ["Cesárea sem complicações: em geral 48 h; retirada de pontos (se não absorvíveis) em 7–10 dias; consulta puerperal na 1ª semana"],
    observacao: ["—"],
    internacao: ["Todos"],
    transferencia: ["Suspeita de acretismo, prematuro extremo ou doença materna grave: centro de referência (programar antes do trabalho de parto)"]
  },
  prescricao: {
    hospitalar: "CESÁREA — PRÉ E PÓS-OPERATÓRIO (risco habitual)\nPRÉ-OPERATÓRIO\n1. Jejum (sólidos 6–8 h; líquidos claros até 2 h antes nas eletivas).\n2. Acesso venoso calibroso; SF 0,9% ou Ringer lactato conforme anestesia.\n3. Omeprazol 40 mg IV + Metoclopramida 10 mg IV 30–60 min antes.\n4. Cefazolina 2 g IV (3 g se ≥ 120 kg) 30–60 min antes da incisão. Alergia grave: Clindamicina 900 mg IV + Gentamicina 5 mg/kg IV.\n5. Sondagem vesical de demora no centro cirúrgico.\n\nPÓS-OPERATÓRIO\n1. Dieta líquida 4–6 h após, progredir conforme aceitação.\n2. Soro conforme ingesta: Ringer lactato 1.000 mL IV 8/8 h até dieta aceita.\n3. Ocitocina conforme protocolo de HPP da instituição.\n4. Dipirona 1 g IV de 6/6 h.\n5. Cetoprofeno 100 mg IV de 12/12 h (se sem contraindicação) — depois Ibuprofeno 600 mg VO 8/8 h.\n6. Tramadol 50 mg IV lento de 6/6 h se dor intensa.\n7. Ondansetrona 4 mg IV de 8/8 h se náusea.\n8. Enoxaparina 40 mg SC 1×/dia a partir de 6–12 h, se indicada pelo escore de risco.\n9. Retirar sonda vesical em 12–24 h; deambulação precoce; curativo oclusivo retirado em 24–48 h.\n10. Controles: PA, FC, temperatura 6/6 h; tônus e lóquios; diurese.\n11. Rh negativo com RN Rh positivo: Imunoglobulina anti-D 300 mcg IM até 72 h.",
    ambulatorial: "ALTA PÓS-CESÁREA\nUSO ORAL\n1. Dipirona 500 mg ----------------------------- 20 comprimidos\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n2. Ibuprofeno 600 mg --------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após refeições, por até 5 dias.\n3. Sulfato ferroso 40 mg de ferro elementar ----- 30 comprimidos\n   Tomar 1 comprimido ao dia até 3 meses após o parto.\n\nCUIDADOS\n- Banho normal, lavar a cicatriz com água e sabão e secar bem. Não precisa de pomada.\n- Consulta na UBS em até 7 dias."
  },
  orientacoesRetorno: [
    "Caminhar desde o primeiro dia ajuda a recuperação e previne trombose",
    "Lavar a cicatriz no banho com água e sabão e secar bem; não usar pomadas",
    "Voltar se febre, vermelhidão ou pus na cicatriz, cicatriz abrindo, sangramento maior que uma menstruação forte, corrimento com cheiro ruim, dor na perna com inchaço ou falta de ar",
    "Evitar pegar peso maior que o bebê nas primeiras semanas; dirigir quando conseguir frear sem dor",
    "Consulta na UBS na primeira semana e revisão até 42 dias"
  ],
  tabelas: [
    {
      titulo: "Classificação de Robson (10 grupos)",
      colunas: ["Grupo", "Definição"],
      linhas: [
        ["1", "Nulípara, gestação única, cefálica, ≥ 37 semanas, trabalho de parto espontâneo"],
        ["2", "Nulípara, única, cefálica, ≥ 37 semanas: 2a induzido; 2b cesárea antes do trabalho de parto"],
        ["3", "Multípara sem cesárea anterior, única, cefálica, ≥ 37 semanas, trabalho de parto espontâneo"],
        ["4", "Multípara sem cesárea anterior, única, cefálica, ≥ 37 semanas: 4a induzido; 4b cesárea antes do trabalho de parto"],
        ["5", "Com ao menos uma cesárea anterior, única, cefálica, ≥ 37 semanas"],
        ["6", "Nulíparas com apresentação pélvica"],
        ["7", "Multíparas com apresentação pélvica (inclui cesárea anterior)"],
        ["8", "Gestações múltiplas (inclui cesárea anterior)"],
        ["9", "Situação transversa ou oblíqua (inclui cesárea anterior)"],
        ["10", "Única, cefálica, < 37 semanas (inclui cesárea anterior)"]
      ],
      nota: "OMS recomenda a classificação de Robson para monitorar e comparar taxas de cesárea. Grupos 1, 2 e 5 respondem pela maior parte das cesáreas."
    },
    {
      titulo: "Parto instrumental: pré-requisitos (todos)",
      colunas: ["Item", "Exigência"],
      linhas: [
        ["Dilatação", "Completa"],
        ["Membranas", "Rotas"],
        ["Cabeça", "Insinuada, encaixada; ≤ 1/5 palpável no abdome; ideal plano ≥ +2 (baixo/alívio)"],
        ["Variedade de posição", "Conhecida com certeza (USG se dúvida)"],
        ["Proporção", "Sem sinais de desproporção (bossa e cavalgamento importantes)"],
        ["Contrações", "Presentes"],
        ["Bexiga", "Vazia"],
        ["Analgesia", "Adequada (pudendo ou neuroaxial; fórceps rotacional exige regional)"],
        ["Equipe", "Operador treinado, consentimento, pediatra, plano de cesárea"],
        ["Vácuo", "≥ 34 semanas, sem coagulopatia fetal ou desmineralização óssea; máx. 3 trações / 3 desprendimentos da ventosa"]
      ],
      nota: "Indicações: expulsivo prolongado, exaustão materna, condição materna que contraindica puxo (cardiopatia, doença cerebrovascular), suspeita de comprometimento fetal no expulsivo. Fórceps: Simpson/Kielland (rotação) / Piper (cabeça derradeira)."
    }
  ],
  fontes: [
    "Ministério da Saúde/CONITEC — Diretrizes de Atenção à Gestante: a operação cesariana (2016)",
    "Ministério da Saúde/CONITEC — Diretriz Nacional de Assistência ao Parto Normal (2017)",
    "OMS — Robson Classification: Implementation Manual (2017)",
    "Conselho Federal de Medicina — Resolução CFM nº 2.144/2016 (cesárea a pedido a partir de 39 semanas)",
    "ACOG Practice Bulletin 199 — Prophylactic antibiotics in labor and delivery (2018) e 219 — Operative vaginal birth (2020)",
    "RCOG — Green-top 26: Assisted Vaginal Birth (2020) e 37a: Reducing the risk of VTE in pregnancy and puerperium (2015)",
    "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
