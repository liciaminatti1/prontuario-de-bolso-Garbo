// Malária
registrarFicha({
  id: "malaria",
  especialidade: "infectologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Malária",
  resumo: "Febre em quem esteve na Amazônia Legal, África, Ásia ou outra área endêmica (até meses antes) é malária até prova em contrário. Diagnóstico por gota espessa ou teste rápido no mesmo dia; tratamento conforme espécie (P. vivax, P. falciparum, mista) e gravidade.",
  palavrasChave: "malaria impaludismo paludismo maleita plasmodium vivax falciparum malariae gota espessa teste rapido cloroquina primaquina tafenoquina g6pd artemeter lumefantrina artesunato mefloquina malaria grave viajante amazonia notificacao",
  critico: {
    tempo: "Gota espessa e tratamento em 24 h",
    texto: "Febre + viagem a área endêmica: gota espessa (ou teste rápido) imediatamente e tratar no mesmo dia. Qualquer sinal de gravidade ou P. falciparum com hiperparasitemia: artesunato IV/IM sem demora."
  },
  alarmes: [
    "Prostração, rebaixamento de consciência, convulsão (malária cerebral)",
    "Dispneia, SpO₂ < 92%, edema pulmonar",
    "Hipotensão/choque, oligúria, creatinina elevada",
    "Icterícia, sangramentos, hemoglobinúria (urina escura)",
    "Hipoglicemia (sobretudo gestante e criança, inclusive durante tratamento)",
    "Anemia grave, acidose, hiperparasitemia",
    "Gestante, criança pequena, idoso, não imune (viajante) com P. falciparum"
  ],
  condutaInicial: [
    "Perguntar sempre: viagem a área endêmica (Amazônia Legal, África, Ásia) nos últimos meses, malária prévia",
    "Gota espessa (com parasitemia e espécie) ou teste rápido imunocromatográfico; repetir em 12–24 h se negativo e suspeita mantida",
    "Avaliar critérios de gravidade (tabela); glicemia capilar, hemograma, creatinina, bilirrubinas",
    "Malária não complicada: tratamento oral conforme espécie, peso e idade, com 1ª dose supervisionada",
    "Malária grave: artesunato IV (ou IM) + suporte em UTI; depois completar com ACT oral",
    "Notificar (fora da Amazônia: notificação imediata em 24 h) e solicitar medicamentos à vigilância"
  ],
  fataisExcluir: [
    "Malária grave por P. falciparum (também ocorre com P. vivax)",
    "Hipoglicemia",
    "Coinfecções: dengue, leptospirose, febre amarela, febre tifoide, sepse bacteriana",
    "Hemólise grave por primaquina/tafenoquina em deficiente de G6PD"
  ],
  proximaDecisao: "P. vivax/ovale: cloroquina 3 dias + cura radical (primaquina 7 dias ou tafenoquina dose única se G6PD normal). P. falciparum não complicada: artemeter-lumefantrina 3 dias + primaquina em dose única gametocitocida. Mista: ACT + primaquina 7 dias. Grave: artesunato parenteral. Controle de cura com lâminas (LVC) conforme Guia MS.",
  clinica: {
    anamnese: [
      "Local e datas de viagem/residência (garimpo, área indígena, ribeirinha), profilaxia usada",
      "Febre (pode ser diária ou terçã), calafrios, sudorese, cefaleia, mialgia, náuseas",
      "Malária prévia e tratamento (recaída de P. vivax até meses depois)",
      "Gestação, idade, peso, deficiência conhecida de G6PD, medicações"
    ],
    exameFisico: [
      "Sinais vitais, SpO₂, nível de consciência, glicemia capilar",
      "Palidez, icterícia, esplenomegalia, hepatomegalia",
      "Sangramentos, desidratação, diurese"
    ],
    diferenciais: [
      { dx: "Dengue / chikungunya / zika", pista: "Exantema, plaquetopenia; ver fichas dengue e chikungunya-zika" },
      { dx: "Leptospirose", pista: "Enchente, mialgia de panturrilha, icterícia rubínica; ver ficha leptospirose" },
      { dx: "Febre amarela", pista: "Não vacinado, icterícia, hepatite grave, área de transmissão" },
      { dx: "Febre tifoide, sepse, pneumonia, ITU", pista: "Foco clínico; hemoculturas" },
      { dx: "Hepatites virais", pista: "Icterícia sem febre alta prolongada; ver ficha hepatites-virais" }
    ],
    gravidade: [
      "Malária grave (OMS/MS): prostração, rebaixamento ou coma, convulsões repetidas, acidose, hipoglicemia (< 40 mg/dL), anemia grave (Hb < 7 g/dL adulto; < 5 g/dL criança), lesão renal (creatinina > 3 mg/dL), icterícia (bilirrubina > 3 mg/dL) com parasitemia alta, edema pulmonar/SpO₂ < 92%, sangramento significativo, choque, hiperparasitemia (> 10% pela OMS)",
      "Malária não complicada: febre e sintomas gerais sem critérios acima"
    ]
  },
  exames: [
    {
      nome: "Gota espessa / esfregaço",
      pedido: "Pesquisa de Plasmodium em gota espessa com identificação da espécie e parasitemia (e esfregaço delgado). URGENTE.",
      porQue: "Padrão-ouro no Brasil: espécie e densidade parasitária.",
      esperar: "Formas de P. vivax, P. falciparum, P. malariae ou mista.",
      interpretacao: "Negativa com suspeita: repetir em 12–24 h (até 3 amostras).",
      limitacoes: "Depende do microscopista; não atrasar tratamento de caso grave."
    },
    {
      nome: "Teste rápido (imunocromatográfico)",
      pedido: "Teste rápido para malária (P. falciparum e P. vivax/pan).",
      porQue: "Onde não há microscopia em tempo hábil.",
      esperar: "—",
      interpretacao: "Positivo: tratar e, quando possível, confirmar espécie e parasitemia em gota espessa.",
      limitacoes: "Pode permanecer positivo semanas após cura; não usar para controle de cura."
    },
    {
      nome: "Laboratório geral e G6PD",
      pedido: "Hemograma, glicemia, ureia, creatinina, TGO, TGP, bilirrubinas, gasometria com lactato (se grave), urina tipo 1, beta-hCG (mulher em idade fértil). Teste de G6PD (quantitativo ou qualitativo, conforme disponível) antes de primaquina/tafenoquina.",
      porQue: "Gravidade e segurança das 8-aminoquinolinas.",
      esperar: "Plaquetopenia e anemia são comuns.",
      interpretacao: "G6PD deficiente: não usar tafenoquina; primaquina em esquema semanal adaptado conforme Guia.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cloroquina (P. vivax, P. ovale, P. malariae)",
      linha: "l1",
      dose: "10 mg/kg no D1 e 7,5 mg/kg no D2 e D3 (adulto ≥ 50 kg: 4 comprimidos de 150 mg no D1, 3 no D2, 3 no D3)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "3 dias",
      monitorizacao: "Prurido, náuseas; QT em uso de outras drogas",
      contraindicacoes: "—",
      ajustes: "Pode ser usada na gestação. Doses por faixa de peso para crianças: tabela do Guia MS"
    },
    {
      droga: "Primaquina (cura radical do P. vivax/ovale)",
      linha: "l1",
      dose: "0,5 mg/kg/dia (adulto 70 kg: 30 mg/dia = 2 comprimidos de 15 mg)",
      via: "VO, após refeição",
      intervalo: "1×/dia",
      duracao: "7 dias (esquema curto)",
      monitorizacao: "Urina escura, icterícia, palidez (hemólise); metemoglobinemia",
      contraindicacoes: "Gestação, menores de 6 meses, deficiência de G6PD (esquema adaptado), lactação de lactente com G6PD não testado (conferir Guia)",
      ajustes: "Peso > 70 kg: ajustar dose total conforme tabela do Guia. Falha/recaída: esquema de 14 dias (0,25 mg/kg/dia). Gestante com P. vivax: cloroquina profilática semanal até após o parto e primaquina depois, conforme Guia"
    },
    {
      droga: "Tafenoquina (cura radical do P. vivax, dose única)",
      linha: "alt",
      dose: "Adulto/≥ 16 anos: 300 mg (2 comprimidos de 150 mg) dose única com cloroquina. Crianças a partir de 2 anos e 10 kg: dose por peso conforme Guia MS",
      via: "VO, com alimento",
      intervalo: "Dose única",
      duracao: "1 dia",
      monitorizacao: "Hemólise",
      contraindicacoes: "G6PD deficiente ou intermediária, gestação, lactação, < 2 anos ou < 10 kg",
      ajustes: "Exige teste quantitativo de G6PD com atividade normal (faixas de corte no Guia MS)"
    },
    {
      droga: "Artemeter + lumefantrina 20/120 mg (P. falciparum não complicada)",
      linha: "l1",
      dose: "≥ 35 kg: 4 comprimidos por dose. Crianças: 5–14 kg 1 cp · 15–24 kg 2 cp · 25–34 kg 3 cp",
      via: "VO, com alimento gorduroso ou leite",
      intervalo: "12/12 h (6 doses; 2ª dose 8 h após a 1ª, se possível)",
      duracao: "3 dias",
      monitorizacao: "Vômitos (repetir a dose se vomitar em 30 min)",
      contraindicacoes: "—",
      ajustes: "Alternativa: artesunato + mefloquina (dose fixa) 3 dias. Associar primaquina em dose única gametocitocida conforme Guia (não em gestante e < 6 meses). Gestante: ACT em qualquer trimestre conforme Guia MS/OMS"
    },
    {
      droga: "Artesunato (malária grave)",
      linha: "l1",
      dose: "2,4 mg/kg (criança < 20 kg: 3 mg/kg) nas horas 0, 12 e 24; depois 1×/dia",
      via: "IV em bolus lento (ou IM)",
      intervalo: "0, 12, 24 h e depois 24/24 h",
      duracao: "Mínimo 24 h e até tolerar VO; depois ACT oral completo (3 dias)",
      monitorizacao: "Glicemia, hemoglobina (hemólise tardia 1–3 semanas após), função renal",
      contraindicacoes: "—",
      ajustes: "Frasco 60 mg: reconstituir com 1 mL de bicarbonato de sódio 5% (diluente) e depois 5 mL de SG 5% ou SF (10 mg/mL) para IV; para IM, 2 mL (20 mg/mL). Usar em até 1 h. Gestante: artesunato em qualquer trimestre na malária grave"
    }
  ],
  destino: {
    agora: [
      "Grave: sala vermelha/UTI com artesunato parenteral",
      "Não complicada: 1ª dose supervisionada e tratamento ambulatorial"
    ],
    reavaliar: [
      "Retorno se febre persistir após 48–72 h de tratamento",
      "Lâminas de verificação de cura (LVC) nos dias definidos pelo Guia MS",
      "Grave: hemoglobina em 7, 14 e 28 dias (hemólise pós-artesunato)"
    ],
    alta: ["Não complicada, tolerando VO, com medicamento em mãos e retorno para LVC"],
    observacao: ["Vômitos que impedem VO: observação até tolerar ou tratamento parenteral"],
    internacao: [
      "Qualquer critério de gravidade",
      "Gestante com P. falciparum, criança pequena, idoso, não imune com P. falciparum, vômitos persistentes"
    ],
    transferencia: ["Sem artesunato ou UTI: iniciar o que houver (artemeter IM se disponível) e transferir"]
  },
  prescricao: {
    ambulatorial: "MALÁRIA POR P. VIVAX — ADULTO ≥ 50 kg (G6PD normal ou não testado sem história de hemólise; conforme Guia MS)\nUSO ORAL\n1. Cloroquina 150 mg ------------------------------ 10 comprimidos\n   Tomar 4 comprimidos no 1º dia, 3 no 2º dia e 3 no 3º dia.\n2. Primaquina 15 mg ------------------------------- 14 comprimidos (70 kg)\n   Tomar 2 comprimidos 1 vez ao dia, após uma refeição, por 7 dias.\n   (OU tafenoquina 150 mg — 2 comprimidos em dose única no 1º dia, se G6PD normal e ≥ 16 anos.)\n\nMALÁRIA POR P. FALCIPARUM NÃO COMPLICADA — ADULTO ≥ 35 kg\nUSO ORAL\n1. Artemeter 20 mg + lumefantrina 120 mg -------- 24 comprimidos\n   Tomar 4 comprimidos de 12 em 12 horas por 3 dias (6 doses), com alimento gorduroso ou leite.\n2. Primaquina 15 mg ------------------------------- dose única gametocitocida no 1º dia, conforme Guia MS (não usar em gestante).\n\nCRIANÇA: doses de cloroquina, primaquina e artemeter-lumefantrina por faixa de peso/idade conforme tabelas do Guia MS (artemeter-lumefantrina: 5–14 kg 1 cp; 15–24 kg 2 cp; 25–34 kg 3 cp por dose).\n\nSINTOMÁTICOS\n3. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor (criança: 15–25 mg/kg/dose).",
    hospitalar: "MALÁRIA GRAVE — ADULTO (peso: ___ kg)\n1. Dieta zero se rebaixamento; liberar VO quando acordado.\n2. Artesunato 2,4 mg/kg (= ___ mg) IV em bolus lento nas horas 0, 12 e 24; depois 1 vez ao dia até tolerar VO (mínimo 24 h). Preparo: frasco 60 mg + 1 mL de bicarbonato de sódio 5% + 5 mL de SG 5% (10 mg/mL); usar em até 1 h.\n3. Depois: artemeter-lumefantrina VO por 3 dias completos.\n4. Cristaloide com cautela (risco de edema pulmonar): SF 0,9% ou Ringer conforme volemia; evitar hiper-hidratação.\n5. SG 10% de manutenção se hipoglicemia; glicose 50% 40 mL IV se glicemia < 70 mg/dL.\n6. Dipirona 1 g IV de 6/6 h se T ≥ 37,8 °C.\n7. Concentrado de hemácias se Hb < 7 g/dL (ou conforme clínica).\n8. Cuidados: glicemia capilar de 4/4 h (de 1/1–2/2 h se rebaixado); diurese horária; Glasgow; SpO₂; parasitemia de 12/12–24/24 h; creatinina e bilirrubinas diários.\n\nCRIANÇA < 20 kg: artesunato 3 mg/kg nas mesmas horas."
  },
  orientacoesRetorno: [
    "Tomar todos os comprimidos até o fim, mesmo sem febre; a primaquina deve ser tomada após uma refeição",
    "Voltar imediatamente se: sonolência, confusão, convulsão, falta de ar, urina muito escura ou pouca urina, olhos amarelos, sangramento, vômitos que impedem os remédios",
    "Fazer as lâminas de controle nos dias marcados",
    "Malária por vivax pode voltar meses depois; com febre, procurar a unidade e informar o tratamento anterior",
    "Viajantes para área de malária: usar repelente, roupas compridas e mosquiteiro; procurar atendimento se febre até meses após a volta"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Tratamento da Malária no Brasil, 2ª ed. (2021) e atualizações (tafenoquina, 2023–2026; conferir a edição vigente)",
    "Ministério da Saúde — Esquemas recomendados para o tratamento da malária no Brasil (tabela vigente)",
    "OMS — WHO Guidelines for Malaria (2023/2024)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2023/2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
