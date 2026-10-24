// Politrauma: atendimento inicial (xABCDE)
registrarFicha({
  id: "politrauma-abcde",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  titulo: "Politrauma: atendimento inicial (xABCDE)",
  resumo: "Sequência ATLS para o traumatizado grave: avaliação primária com reanimação simultânea (xABCDE), adjuntos (eFAST, RX de tórax e pelve), avaliação secundária e decisão de transferência.",
  palavrasChave: "politrauma atls phtls xabcde abcde avaliacao primaria secundaria fast efast trauma grave acidente atropelamento queda arma de fogo arma branca ampla torniquete colar cervical",
  critico: {
    tempo: "Parar sangramento antes do A",
    texto: "Hemorragia externa exsanguinante primeiro (compressão direta, torniquete). Trate cada ameaça à vida assim que encontrada e reavalie do início (x) a cada piora."
  },
  alarmes: [
    "Sangramento externo em jato ou que encharca curativo",
    "Via aérea ameaçada: estridor, rouquidão, Glasgow ≤ 8, queimadura de face, trauma maxilofacial grave",
    "SpO₂ < 90% em O₂, murmúrio abolido, desvio de traqueia, enfisema subcutâneo",
    "FC > PAS (índice de choque > 1), PAS < 90 mmHg, pele fria, enchimento capilar lento",
    "Glasgow ≤ 8, queda ≥ 2 pontos, anisocoria, déficit focal",
    "Mecanismo de alta energia: ejeção, morte de ocupante, capotamento, atropelamento, queda > 3 m (adulto), arma de fogo em tronco",
    "Idoso, gestante, anticoagulado, criança pequena (descompensam de forma tardia e súbita)"
  ],
  condutaInicial: [
    "Equipe, precauções padrão, monitor, O₂; um líder distribui as tarefas",
    "x — Hemorragia externa: compressão direta; membro: torniquete 5–7 cm acima da lesão (anotar hora); juncional: compressão e curativo compressivo",
    "A — Via aérea com restrição de movimento da coluna cervical (estabilização manual ou colar): aspirar, elevar mandíbula, cânula; via aérea definitiva se Glasgow ≤ 8 ou incapaz de proteger (ver ficha sequencia-rapida-intubacao)",
    "B — Expor tórax, FR, SpO₂, ausculta, percussão; descomprimir pneumotórax hipertensivo já (ver ficha trauma-torax)",
    "C — 2 acessos calibrosos (14–16 G) ou intraósseo; coletar tipagem e exames; cristaloide aquecido no máximo 1 L (criança 20 mL/kg) e sangue cedo; cinta pélvica se suspeita de pelve; eFAST",
    "D — Glasgow, pupilas, movimento dos 4 membros, glicemia capilar",
    "E — Despir totalmente, rolar em bloco para examinar dorso; prevenir hipotermia (manta, soro aquecido, sala aquecida)",
    "Adjuntos: ECG, SpO₂, capnografia se intubado, gasometria com lactato, sonda vesical (se sem sinais de lesão uretral), sonda gástrica (orogástrica se suspeita de fratura de base de crânio), RX de tórax AP e de pelve AP, eFAST",
    "Decidir cedo: precisa de transferência? Não atrasar com exames que não mudam a conduta (ver ficha transferencia-trauma)"
  ],
  fataisExcluir: [
    "Obstrução de via aérea",
    "Pneumotórax hipertensivo, pneumotórax aberto, hemotórax maciço",
    "Tamponamento cardíaco",
    "Hemorragia intra-abdominal, pélvica ou de ossos longos (fêmur)",
    "TCE com hipertensão intracraniana / hematoma em expansão",
    "Choque neurogênico (trauma raquimedular)"
  ],
  proximaDecisao: "Instável (sem resposta ou resposta transitória ao volume) → controle cirúrgico do sangramento (centro cirúrgico, angioembolização) ou transferência imediata; TC só depois. Estável → avaliação secundária completa e TC dirigida (ou de corpo inteiro se mecanismo de alta energia).",
  clinica: {
    anamnese: [
      "AMPLA: Alergias, Medicamentos (anticoagulante, antiagregante, betabloqueador), Passado médico/Prenhez, Líquidos e alimentos ingeridos, Ambiente e eventos do trauma",
      "Mecanismo: velocidade, uso de cinto/capacete, airbag, ejeção, altura da queda, tipo de arma, número de ferimentos",
      "Dados do pré-hospitalar: sinais vitais na cena, volume infundido, torniquete e horário",
      "Gestação: idade gestacional (útero acima da cicatriz umbilical → lateralizar à esquerda 15–30° ou deslocar o útero manualmente)"
    ],
    exameFisico: [
      "Avaliação secundária da cabeça aos pés só após a primária e com a reanimação em curso",
      "Cabeça e face: couro cabeludo, olhos (antes do edema), sinais de fratura de base (Battle, guaxinim, otorragia, rinorreia)",
      "Pescoço: traqueia, jugulares, enfisema, hematoma em expansão, dor na linha média",
      "Tórax e abdome: marca de cinto, equimoses, dor, distensão, peritonite",
      "Pelve: inspeção e palpação delicada uma única vez (não fazer compressão repetida)",
      "Períneo, reto e vagina quando indicado: sangue no meato, hematoma perineal, próstata alta",
      "Extremidades: deformidade, pulsos, perfusão, sensibilidade e motricidade (ver ficha trauma-extremidades)",
      "Dorso e coluna: rolamento em bloco, palpar processos espinhosos",
      "Neurológico completo; reavaliar Glasgow seriado"
    ],
    diferenciais: [
      { dx: "Choque hemorrágico", pista: "Causa mais comum de choque no trauma: taquicardia, pele fria, jugular vazia" },
      { dx: "Choque obstrutivo (pneumotórax hipertensivo, tamponamento)", pista: "Jugular distendida, murmúrio abolido, abafamento de bulhas, eFAST" },
      { dx: "Choque neurogênico", pista: "Hipotensão com bradicardia, pele quente, déficit motor/sensitivo" },
      { dx: "Contusão cardíaca", pista: "Arritmia, ECG alterado, troponina" },
      { dx: "Evento clínico que causou o trauma", pista: "Síncope, hipoglicemia, IAM, AVC, convulsão, intoxicação" }
    ],
    gravidade: [
      "Resposta ao volume inicial (ATLS): rápida (estável) / transitória (volta a cair, sangramento ativo) / mínima ou nenhuma (sangramento grave ou causa não hemorrágica) — ver ficha choque-hemorragico",
      "Índice de choque (FC/PAS) > 1 sugere hemorragia grave",
      "Glasgow ≤ 8 = via aérea definitiva",
      "Lactato e déficit de base são marcadores de hipoperfusão e de necessidade de sangue"
    ]
  },
  exames: [
    {
      nome: "eFAST (ultrassom à beira-leito)",
      pedido: "Ultrassom eFAST na sala de trauma: pericárdio, hepatorrenal, esplenorrenal, pelve e janelas pleurais bilaterais (pneumotórax e hemotórax).",
      porQue: "Detectar rapidamente líquido livre, tamponamento, pneumotórax e hemotórax no paciente instável.",
      esperar: "Resultado em minutos; repetir se piora clínica.",
      interpretacao: "Instável + FAST positivo no abdome → laparotomia. Ausência de deslizamento pleural → pneumotórax. Líquido pericárdico com choque → tamponamento.",
      limitacoes: "Não avalia retroperitônio nem víscera oca; FAST negativo não exclui lesão; dependente do operador; menos sensível em crianças."
    },
    {
      nome: "Laboratório da sala de trauma",
      pedido: "Tipagem ABO/Rh e prova cruzada (reservar ___ unidades de concentrado de hemácias). Hemograma, coagulograma (TP/INR, TTPa), fibrinogênio, gasometria venosa ou arterial com lactato e déficit de base, sódio, potássio, cálcio iônico, glicemia, ureia, creatinina, CK. Beta-hCG em mulher em idade fértil. Etanol e toxicológico se disponível.",
      porQue: "Preparar transfusão, avaliar perfusão e coagulopatia.",
      esperar: "Hemoglobina inicial pode ser normal na hemorragia aguda.",
      interpretacao: "Déficit de base ≤ −6 ou lactato elevado → hipoperfusão, provável necessidade de sangue. INR > 1,5 ou fibrinogênio baixo → coagulopatia do trauma.",
      limitacoes: "Não esperar resultado para transfundir paciente instável."
    },
    {
      nome: "RX de tórax AP e de pelve AP",
      pedido: "RX de tórax AP no leito e RX de pelve AP na sala de trauma.",
      porQue: "Adjuntos da avaliação primária: hemotórax, pneumotórax, mediastino alargado, fratura de pelve instável.",
      esperar: "Imediato, sem tirar o paciente da sala.",
      interpretacao: "Fratura de pelve com choque → cinta pélvica e controle do sangramento pélvico (ver ficha trauma-pelve).",
      limitacoes: "RX de pelve dispensável se o paciente estável vai fazer TC de abdome e pelve."
    },
    {
      nome: "Tomografia",
      pedido: "TC de crânio sem contraste, coluna cervical, tórax, abdome e pelve com contraste IV (fase arterial e portal) — paciente hemodinamicamente estável.",
      porQue: "Mapear lesões no estável com mecanismo de alta energia.",
      esperar: "Laudo ou leitura imediata pelo cirurgião.",
      interpretacao: "Define tratamento não operatório de vísceras sólidas, angioembolização ou cirurgia.",
      limitacoes: "Nunca levar paciente instável à TC. Não atrasar transferência para fazer TC se o paciente vai de qualquer forma para outro hospital."
    },
    {
      nome: "ECG",
      pedido: "ECG de 12 derivações.",
      porQue: "Contusão cardíaca, arritmia, causa clínica do trauma.",
      esperar: "Imediato.",
      interpretacao: "Arritmia nova, bloqueio de ramo ou alteração de ST → monitorizar e dosar troponina.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide aquecido (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "Adulto: até 1 L inicial · Criança: 20 mL/kg",
      via: "IV ou IO",
      intervalo: "Bolus e reavaliar",
      duracao: "Só como ponte até o sangue",
      monitorizacao: "FC, PA, perfusão, diurese, lactato",
      contraindicacoes: "Evitar volumes grandes (piora coagulopatia, hipotermia, acidose)",
      ajustes: "Aquecer a 39 °C. Sem resposta ou resposta transitória → concentrado de hemácias e protocolo de transfusão maciça (ficha choque-hemorragico)"
    },
    {
      droga: "Ácido tranexâmico 50 mg/mL (ampola 250 mg/5 mL)",
      linha: "l1",
      dose: "Adulto: 1 g em 10 min + 1 g em 8 h · Criança: 15 mg/kg (máx 1 g) em 10 min + 2 mg/kg/h por 8 h",
      via: "IV",
      intervalo: "Ataque e manutenção",
      duracao: "8 h",
      monitorizacao: "Sinais de trombose",
      contraindicacoes: "Mais de 3 h do trauma (não iniciar)",
      ajustes: "Indicado no trauma com hemorragia significativa ou risco de, iniciado em até 3 h (CRASH-2)"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "Adulto: 2–4 mg (0,05–0,1 mg/kg) · Criança: 0,05–0,1 mg/kg (máx 4 mg/dose)",
      via: "IV lento",
      intervalo: "A cada 5–10 min até controle da dor",
      duracao: "Conforme dor",
      monitorizacao: "FR, SpO₂, PA, sedação",
      contraindicacoes: "Hipotensão não corrigida (usar doses menores ou cetamina)",
      ajustes: "Diluir 1 mL (10 mg) + 9 mL SF 0,9% = 1 mg/mL. Alternativa: fentanil 1 mcg/kg IV (adulto 25–50 mcg) ou cetamina 0,1–0,3 mg/kg IV (dose analgésica) se hipotensão"
    },
    {
      droga: "Dipirona 500 mg/mL",
      linha: "adj",
      dose: "Adulto: 1 g · Criança: 15 mg/kg (máx 1 g)",
      via: "IV lento",
      intervalo: "6/6 h",
      duracao: "Conforme dor",
      monitorizacao: "PA (hipotensão na infusão rápida)",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Diluir em 10–20 mL de SF 0,9% e infundir em 3–5 min"
    },
    {
      droga: "Profilaxia de tétano",
      linha: "adj",
      dose: "Conforme histórico vacinal e tipo de ferimento",
      via: "IM",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ver ficha tetano-profilaxia"
    }
  ],
  destino: {
    agora: [
      "Controle do sangramento: centro cirúrgico, angioembolização, fixação pélvica",
      "Instável sem cirurgião/estrutura: transferência imediata após medidas de reanimação"
    ],
    reavaliar: [
      "Reavaliação primária a cada piora e após cada intervenção",
      "Glasgow, pupilas e perfusão a cada 15–30 min na 1ª hora",
      "Avaliação terciária em 24 h (lesões despercebidas)"
    ],
    alta: [
      "Mecanismo de baixa energia, exame completo normal, sem dor significativa, deambulando, com acompanhante e orientações"
    ],
    observacao: [
      "Mecanismo de alta energia com avaliação inicial normal: observar 6–24 h com exame abdominal seriado"
    ],
    internacao: [
      "Qualquer lesão significativa; UTI se instabilidade, TCE grave, transfusão maciça, tórax instável"
    ],
    transferencia: [
      "Necessidade que excede a capacidade do serviço: neurocirurgia, cirurgia torácica/vascular, UTI, trauma pediátrico, queimado grave (ver ficha transferencia-trauma)"
    ]
  },
  prescricao: {
    hospitalar: "POLITRAUMA — SALA DE EMERGÊNCIA (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Restrição de movimento da coluna (colar cervical, rolamento em bloco); retirar da prancha rígida assim que possível.\n3. Monitor cardíaco, oximetria, PA a cada 5–15 min, capnografia se intubado.\n4. O₂ por máscara com reservatório 10–15 L/min; titular SpO₂ ≥ 94%.\n5. 2 acessos venosos 14–16 G (ou intraósseo).\n6. Ringer lactato aquecido até 1.000 mL IV em bolus; reavaliar. Sem resposta ou resposta transitória: concentrado de hemácias e protocolo de transfusão maciça.\n7. Ácido tranexâmico 1 g (20 mL) + SF 0,9% 100 mL IV em 10 min (até 3 h do trauma); depois 1 g + SF 0,9% 500 mL IV a 62 mL/h (8 h).\n8. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV a cada 5–10 min se dor, até controle (máx. conforme sedação/FR).\n9. Dipirona 1 g (2 mL) + SF 0,9% 18 mL IV lento de 6/6 h.\n10. Ondansetrona 4 mg IV lento de 8/8 h se náusea ou vômito.\n11. Profilaxia de tétano conforme cartão vacinal (ficha tetano-profilaxia).\n12. Sonda vesical de demora com diurese horária (não passar se sangue no meato, hematoma perineal ou próstata alta).\n13. Manta térmica; soros e hemocomponentes aquecidos.\n14. Controles: sinais vitais de 15/15 min; Glasgow e pupilas de 1/1 h; glicemia capilar; diurese horária (meta ≥ 0,5 mL/kg/h).\n\nCRIANÇA (peso: ___ kg)\n- Cristaloide aquecido 20 mL/kg IV/IO; se não responder: concentrado de hemácias 10 mL/kg.\n- Ácido tranexâmico 15 mg/kg (máx 1 g) IV em 10 min + 2 mg/kg/h por 8 h.\n- Morfina 0,05–0,1 mg/kg IV (máx 4 mg/dose); dipirona 15 mg/kg IV (máx 1 g) de 6/6 h.\n- Diurese meta: lactente 2 mL/kg/h; criança 1 mL/kg/h."
  },
  orientacoesRetorno: [
    "Alta só após avaliação completa; algumas lesões aparecem horas depois",
    "Voltar imediatamente se: dor abdominal que piora, vômitos repetidos, falta de ar, dor no peito, desmaio, tontura ao levantar, urina com sangue, sonolência ou confusão, fraqueza ou formigamento nos braços ou pernas",
    "Repouso relativo nas primeiras 24–48 h; ter acompanhante em casa",
    "Usar só os analgésicos prescritos; não tomar bebida alcoólica",
    "Retorno na UBS em 7 dias ou antes, conforme orientação, e completar a vacina antitetânica se indicado"
  ],
  tabelas: [
    {
      titulo: "Avaliação primária (xABCDE)",
      colunas: ["Etapa", "Avaliar", "Agir"],
      linhas: [
        ["x — Hemorragia exsanguinante", "Sangramento externo grave", "Compressão direta, torniquete, curativo compressivo"],
        ["A — Via aérea + coluna cervical", "Fala? Estridor, corpo estranho, trauma de face", "Aspirar, elevar mandíbula, cânula, via aérea definitiva; colar"],
        ["B — Respiração", "FR, SpO₂, expansão, ausculta, traqueia", "O₂; descompressão, curativo de 3 pontas, dreno"],
        ["C — Circulação", "FC, PA, pele, pulsos, sangramento oculto", "2 acessos, sangue cedo, ácido tranexâmico, cinta pélvica"],
        ["D — Neurológico", "Glasgow, pupilas, glicemia", "Via aérea se Glasgow ≤ 8; evitar hipóxia e hipotensão"],
        ["E — Exposição", "Lesões ocultas, dorso", "Despir, rolar em bloco, aquecer"]
      ],
      nota: "Em equipe, as etapas são feitas em paralelo. Reavaliar do início a cada mudança."
    }
  ],
  fontes: [
    "American College of Surgeons — Advanced Trauma Life Support (ATLS), 10ª ed. (2018) e 11ª ed. (2025)",
    "NAEMT — PHTLS: Atendimento Pré-Hospitalar ao Traumatizado, 10ª ed. (2023)",
    "CRASH-2 Collaborators — ácido tranexâmico no trauma (Lancet, 2010)",
    "Rossaint R et al. — European guideline on management of major bleeding and coagulopathy following trauma, 6ª ed. (Crit Care, 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
