// Faringoamigdalite aguda (viral x estreptocócica), falha terapêutica, recorrência e complicações
registrarFicha({
  id: "faringoamigdalite",
  especialidade: "oftalmo-otorrino",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Faringoamigdalite aguda: viral x estreptocócica, falha e recorrência",
  resumo: "Dor de garganta com inflamação de faringe e amígdalas. A maioria é viral; o estreptococo beta-hemolítico do grupo A (S. pyogenes) causa 20–30% em crianças e 5–15% em adultos. Decidir com Centor/McIsaac e teste rápido; tratar o estreptococo para prevenir febre reumática. Resfriado e sinusite: ver ficha ivas-sinusite; escarlatina e mononucleose têm fichas próprias.",
  palavrasChave: "faringoamigdalite amigdalite faringite dor de garganta estreptococo grupo a streptococcus pyogenes centor mcisaac teste rapido amoxicilina penicilina benzatina cefalexina azitromicina clindamicina amoxicilina clavulanato falha terapeutica recorrencia portador cronico abscesso periamigdaliano retrofaringeo amigdalectomia paradise febre reumatica pfapa",
  critico: {
    tempo: "ATB até 9 dias evita febre reumática",
    texto: "Estreptocócica confirmada ou muito provável: amoxicilina 10 dias ou penicilina G benzatina dose única. Trismo, voz abafada, sialorreia, desvio de úvula ou estridor → abscesso ou obstrução: PS/otorrino no mesmo dia."
  },
  alarmes: [
    "Trismo, voz abafada (\"batata quente\"), desvio da úvula, abaulamento palatino unilateral (abscesso periamigdaliano)",
    "Criança pequena com febre, torcicolo ou recusa a mover o pescoço, sialorreia, abaulamento da parede posterior da faringe (abscesso retrofaríngeo)",
    "Estridor, dispneia, salivação intensa, posição em tripé (epiglotite, obstrução de via aérea)",
    "Incapacidade de engolir líquidos, desidratação",
    "Dor e edema cervical lateral com febre alta e toxemia após faringite (síndrome de Lemierre, tromboflebite jugular)",
    "Sinais de choque ou exantema com hipotensão (síndrome do choque tóxico estreptocócico)",
    "Artrite migratória, cardite, coreia ou hematúria/edema 1–3 semanas após faringite (febre reumática, glomerulonefrite pós-estreptocócica)"
  ],
  condutaInicial: [
    "Excluir sinais de gravidade e abscesso (trismo, voz abafada, úvula desviada, estridor)",
    "Sinais de vírus (coriza, tosse, rouquidão, conjuntivite, aftas/úlceras, diarreia) → viral: sintomáticos, sem antibiótico e sem teste",
    "Sem sinais de vírus: calcular Centor/McIsaac (tabela)",
    "Escore 0–1 → sem teste, sem antibiótico. Escore 2–3 → teste rápido para estreptococo (ou cultura) e tratar se positivo. Escore 4–5 → testar; sem teste disponível, tratar empiricamente",
    "Menores de 3 anos: estreptococo é raro; não testar de rotina (exceto contato domiciliar com caso confirmado)",
    "Positivo: amoxicilina VO 10 dias ou penicilina G benzatina IM dose única; alérgico: cefalexina (alergia não grave) ou azitromicina/clindamicina (alergia grave)",
    "Analgesia em todos (ibuprofeno, paracetamol ou dipirona)"
  ],
  fataisExcluir: [
    "Abscesso periamigdaliano, retrofaríngeo ou parafaríngeo",
    "Epiglotite",
    "Síndrome de Lemierre (Fusobacterium necrophorum)",
    "Difteria (membrana acinzentada aderente que sangra ao descolar, criança não vacinada) — notificação imediata",
    "Infecção aguda pelo HIV (faringite + exantema + exposição de risco)",
    "Neutropenia/agranulocitose (úlceras orais, uso de metimazol, clozapina, quimioterapia)"
  ],
  proximaDecisao: "Sem melhora em 48–72 h de antibiótico adequado → reavaliar diagnóstico (viral, mononucleose, abscesso) e adesão antes de trocar o antibiótico. Recorrência confirmada em poucas semanas → amoxicilina-clavulanato, clindamicina ou cefalosporina (tabela de falha). ≥ 7 episódios documentados em 1 ano (ou 5/ano em 2 anos, 3/ano em 3 anos) → otorrino para avaliar amigdalectomia (Paradise).",
  clinica: {
    anamnese: [
      "Início, febre, odinofagia, capacidade de engolir líquidos e saliva",
      "Tosse, coriza, rouquidão, conjuntivite (sugerem vírus)",
      "Idade (pico do estreptococo: 5–15 anos), contato com caso de estreptococo, surto em escola/creche",
      "Episódios prévios no último ano a 3 anos, com datas, testes e antibióticos (para recorrência e critérios de Paradise)",
      "Antibiótico recente, adesão ao tratamento anterior",
      "Alergia a penicilina: tipo de reação (urticária imediata, angioedema, anafilaxia x exantema tardio leve)",
      "História pessoal ou familiar de febre reumática; vacinação (difteria); risco para HIV e mononucleose"
    ],
    exameFisico: [
      "Temperatura, hidratação, FR, estridor",
      "Orofaringe: hiperemia, edema, exsudato, petéquias no palato, simetria das amígdalas, posição da úvula, abaulamento",
      "Abertura bucal (trismo), voz",
      "Linfonodos cervicais anteriores (dolorosos, > 1 cm) x posteriores e generalizados (mononucleose)",
      "Baço e fígado (mononucleose)",
      "Pele: exantema em lixa (escarlatina), exantema maculopapular",
      "Pescoço: rigidez, torcicolo, edema lateral"
    ],
    diferenciais: [
      { dx: "Faringite viral (adenovírus, rinovírus, influenza, covid-19)", pista: "Coriza, tosse, rouquidão, conjuntivite; adenovírus pode dar exsudato e febre alta (febre faringoconjuntival)" },
      { dx: "Mononucleose (EBV)", pista: "Adolescente, adenomegalia posterior/generalizada, esplenomegalia, fadiga, exsudato extenso; exantema com amoxicilina. Ver ficha mononucleose" },
      { dx: "Herpangina / mão-pé-boca (enterovírus)", pista: "Vesículas e úlceras em palato mole e pilares; criança pequena" },
      { dx: "Gengivoestomatite herpética", pista: "Úlceras em gengiva e mucosa anterior, gengivas sangrantes" },
      { dx: "Escarlatina", pista: "Exantema em lixa, língua em framboesa, Pastia. Ver ficha escarlatina" },
      { dx: "PFAPA", pista: "Febre periódica a cada 3–8 semanas com aftas, faringite e adenite; criança bem entre crises; resposta drástica a dose única de corticoide" },
      { dx: "Gonococo, sífilis, HIV agudo", pista: "Exposição sexual oral, úlcera, exantema" },
      { dx: "Difteria", pista: "Pseudomembrana acinzentada aderente, edema cervical (pescoço taurino), não vacinado" }
    ],
    gravidade: [
      "Centor/McIsaac (1 ponto cada): febre > 38 °C; ausência de tosse; linfonodos cervicais anteriores aumentados e dolorosos; exsudato ou edema amigdaliano; idade 3–14 anos (+1); idade ≥ 45 anos (−1)",
      "0–1: risco baixo (sem teste, sem antibiótico) · 2–3: testar · 4–5: testar ou tratar empiricamente se não houver teste",
      "Teste rápido: especificidade alta (positivo = tratar). Negativo em criança/adolescente com quadro sugestivo: confirmar com cultura quando disponível (IDSA). Adulto: negativo não exige cultura",
      "FeverPAIN (alternativa): febre, exsudato, consulta em ≤ 3 dias, amígdalas muito inflamadas, sem tosse/coriza"
    ]
  },
  exames: [
    {
      nome: "Teste rápido de antígeno para estreptococo do grupo A",
      pedido: "Pesquisa rápida de antígeno de Streptococcus pyogenes (estreptococo beta-hemolítico do grupo A) em swab de orofaringe (amígdalas e parede posterior).",
      porQue: "Confirmar estreptococo em Centor/McIsaac 2–5 e evitar antibiótico em faringite viral.",
      esperar: "Resultado em 10–15 min.",
      interpretacao: "Positivo → tratar. Negativo em adulto → tratar como viral. Negativo em criança/adolescente com alta suspeita → cultura de orofaringe se disponível.",
      limitacoes: "Não diferencia infecção de portador crônico com virose. Coleta inadequada (sem esfregar as amígdalas) dá falso-negativo. Não testar contatos assintomáticos nem fazer controle de cura."
    },
    {
      nome: "Cultura de orofaringe",
      pedido: "Cultura de secreção de orofaringe para Streptococcus beta-hemolítico do grupo A, com antibiograma (incluir eritromicina/azitromicina e clindamicina).",
      porQue: "Padrão de referência; confirmar teste rápido negativo em criança; antibiograma na falha, recorrência ou alergia que obriga a usar macrolídeo.",
      esperar: "24–48 h.",
      interpretacao: "Crescimento de S. pyogenes = infecção ou portador (correlacionar com a clínica). O estreptococo do grupo A continua 100% sensível à penicilina; macrolídeo e clindamicina podem ter resistência.",
      limitacoes: "Demora; não atrasar o tratamento em quadro típico com teste rápido positivo."
    },
    {
      nome: "Exames na suspeita de mononucleose ou complicação",
      pedido: "Hemograma com contagem diferencial (linfócitos atípicos). Pesquisa de anticorpos heterófilos (monoteste) ou sorologia para EBV (VCA IgM). TGO, TGP. Se suspeita de abscesso cervical profundo: TC de pescoço com contraste.",
      porQue: "Diferenciar mononucleose; definir abscesso retro ou parafaríngeo.",
      esperar: "Linfocitose com atípicos na mononucleose.",
      interpretacao: "Monoteste pode ser negativo na 1ª semana e em < 4 anos.",
      limitacoes: "ASLO não serve para diagnosticar faringite aguda (sobe tardiamente); útil só na suspeita de febre reumática ou glomerulonefrite."
    }
  ],
  tratamento: [
    {
      droga: "Amoxicilina",
      linha: "l1",
      dose: "Adulto: 500 mg 12/12 h ou 1 g 1×/dia (alternativa usual no Brasil: 500 mg 8/8 h) · Criança: 50 mg/kg/dia 1×/dia ou divididos de 12/12 h (máx 1.000 mg/dia)",
      via: "VO",
      intervalo: "12/12 h ou 1×/dia",
      duracao: "10 dias",
      monitorizacao: "Melhora da febre e da dor em 48–72 h",
      contraindicacoes: "Alergia a penicilina; evitar se suspeita de mononucleose (exantema)",
      ajustes: "Apresentações: suspensão 250 mg/5 mL (RENAME) e 400 mg/5 mL; cápsula 500 mg. ClCr < 30: 500 mg 12/12 h ou 24/24 h conforme função. Gestação e lactação: segura"
    },
    {
      droga: "Penicilina G benzatina",
      linha: "l1",
      dose: "< 27 kg: 600.000 UI · ≥ 27 kg e adultos: 1.200.000 UI",
      via: "IM profunda (glúteo ou vasto lateral)",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Observar 30 min após a aplicação (anafilaxia)",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Preferir quando adesão ao tratamento oral é duvidosa, vômitos, história de febre reumática ou difícil retorno. Frasco de 1.200.000 UI: reconstituir em 4 mL de água para injeção (600.000 UI = metade do volume). Gestação: segura"
    },
    {
      droga: "Cefalexina (alergia NÃO grave à penicilina)",
      linha: "alt",
      dose: "Adulto: 500 mg 12/12 h · Criança: 20 mg/kg/dose 12/12 h (máx 500 mg/dose)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "10 dias",
      monitorizacao: "—",
      contraindicacoes: "Anafilaxia ou reação imediata grave à penicilina",
      ajustes: "Alternativa: cefadroxila 30 mg/kg 1×/dia (máx 1 g/dia; adulto 1 g 1×/dia) por 10 dias. Suspensão de cefalexina 250 mg/5 mL na RENAME"
    },
    {
      droga: "Azitromicina (alergia grave à penicilina)",
      linha: "alt",
      dose: "Adulto: 500 mg 1×/dia · Criança: 12 mg/kg 1×/dia (máx 500 mg/dia)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "5 dias",
      monitorizacao: "Falha clínica sugere resistência a macrolídeo",
      contraindicacoes: "QT longo, uso de drogas que prolongam o QT",
      ajustes: "Resistência do estreptococo a macrolídeos é variável e pode ser alta em algumas regiões: prefira clindamicina se houver dado local de resistência, falha prévia com macrolídeo ou cultura com resistência. Claritromicina 7,5 mg/kg/dose 12/12 h (máx 250 mg/dose; adulto 250 mg 12/12 h) por 10 dias é alternativa"
    },
    {
      droga: "Clindamicina (alergia grave ou resistência a macrolídeo)",
      linha: "alt",
      dose: "Adulto: 300 mg 8/8 h · Criança: 7 mg/kg/dose 8/8 h (máx 300 mg/dose)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "10 dias",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "Colite prévia por C. difficile",
      ajustes: "Também é opção na falha, na recorrência e no portador crônico. Pouca apresentação pediátrica líquida no Brasil: cápsulas podem ser abertas (sabor amargo)"
    },
    {
      droga: "Analgésico/antitérmico",
      linha: "adj",
      dose: "Ibuprofeno: adulto 400–600 mg; criança 5–10 mg/kg/dose (máx 400 mg; ≥ 6 meses) · Paracetamol: adulto 500–750 mg; criança 10–15 mg/kg/dose (máx 750 mg) · Dipirona: adulto 500 mg–1 g; criança 15 mg/kg/dose (máx 1 g)",
      via: "VO",
      intervalo: "Ibuprofeno 8/8 h; paracetamol e dipirona 6/6 h",
      duracao: "Enquanto houver dor ou febre",
      monitorizacao: "—",
      contraindicacoes: "Ibuprofeno: dengue suspeita, úlcera, DRC, gestação no 3º trimestre",
      ajustes: "Não usar ácido acetilsalicílico em < 16 anos (síndrome de Reye)"
    },
    {
      droga: "Dexametasona (adulto com dor intensa, opcional)",
      linha: "adj",
      dose: "Adulto: 10 mg",
      via: "VO ou IM",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "Suspeita de mononucleose sem diagnóstico definido (pode mascarar linfoma), infecção grave",
      ajustes: "Recomendação fraca (BMJ Rapid Recommendations 2017) para alívio mais rápido da dor; não de rotina em crianças"
    },
    {
      droga: "Antibiótico para faringite com sinais virais ou Centor 0–1",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício; aumenta efeitos adversos e resistência",
      ajustes: "Também não tratar contatos assintomáticos nem pedir controle de cura em quem melhorou"
    }
  ],
  tabelas: [
    {
      titulo: "Centor modificado (McIsaac)",
      colunas: ["Critério", "Pontos"],
      linhas: [
        ["Febre > 38 °C", "+1"],
        ["Ausência de tosse", "+1"],
        ["Linfonodos cervicais anteriores aumentados e dolorosos", "+1"],
        ["Edema ou exsudato amigdaliano", "+1"],
        ["Idade 3–14 anos", "+1"],
        ["Idade 15–44 anos", "0"],
        ["Idade ≥ 45 anos", "−1"]
      ],
      nota: "0–1: sem teste e sem antibiótico · 2–3: teste rápido ou cultura, tratar se positivo · ≥ 4: testar; sem teste disponível, tratar empiricamente. O escore isolado tem baixa especificidade: sempre que possível, confirme com teste."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora após 48–72 h de amoxicilina ou penicilina", "Reavaliar antes de trocar: adesão, dose, diagnóstico (viral, mononucleose), complicação (abscesso)", "O estreptococo não tem resistência à penicilina; falha raramente é resistência. Se abscesso: PS/otorrino"],
        ["Adesão duvidosa ao tratamento oral", "Penicilina G benzatina IM dose única", "600.000 UI (< 27 kg) ou 1.200.000 UI"],
        ["Recorrência sintomática confirmada (teste/cultura +) em poucas semanas após amoxicilina", "Amoxicilina-clavulanato 10 dias: criança 40 mg/kg/dia de amoxicilina em 3 doses (máx 2 g/dia); adulto 500/125 mg 8/8 h ou 875/125 mg 12/12 h", "Alternativas: clindamicina 10 dias ou cefalosporina (cefalexina/cefadroxila) 10 dias; ou benzatina se a 1ª foi oral"],
        ["Falha com macrolídeo ou cultura resistente a eritromicina/azitromicina", "Clindamicina 7 mg/kg/dose 8/8 h (máx 300 mg/dose) 10 dias", "Se alergia não grave: cefalosporina. Pedir cultura com antibiograma"],
        ["Episódios repetidos com teste positivo, criança bem entre eles (suspeita de portador crônico + viroses)", "Não tratar o portador de rotina; tratar só episódios com quadro clínico típico", "Portador: S. pyogenes na orofaringe sem resposta imune; baixo risco de transmissão e de febre reumática"],
        ["Erradicação do portador indicada: surto de febre reumática ou GNPE, história pessoal/familiar de febre reumática, comunidade fechada com transmissão, \"pingue-pongue\" familiar apesar de tratamento", "Clindamicina 20–30 mg/kg/dia em 3 doses (máx 300 mg/dose) por 10 dias; OU amoxicilina-clavulanato 40 mg/kg/dia de amoxicilina em 3 doses (máx 2 g/dia) por 10 dias; OU penicilina G benzatina dose única + rifampicina 20 mg/kg/dia 1×/dia (máx 600 mg) por 4 dias", "Esquemas da IDSA 2012. Adulto: clindamicina 300 mg 8/8 h; rifampicina 600 mg/dia"],
        ["Alergia grave à penicilina + resistência a macrolídeo", "Clindamicina", "Se não tolerar: discutir com infectologia"],
        ["Abscesso periamigdaliano ou não consegue engolir / toxemia", "Internar ou observar: drenagem + antibiótico IV (clindamicina ou ampicilina-sulbactam)", "Ver prescrição hospitalar. Cultura do pus"]
      ],
      nota: "Não há resistência documentada do estreptococo do grupo A à penicilina. Resistência a macrolídeo e, em menor grau, a clindamicina varia por região: use dados locais e antibiograma."
    },
    {
      titulo: "Complicações supurativas",
      colunas: ["Complicação", "Pistas", "Conduta"],
      linhas: [
        ["Abscesso periamigdaliano", "Adolescente/adulto; odinofagia unilateral intensa, trismo, voz abafada, úvula desviada, abaulamento do palato", "Otorrino/PS: aspiração por agulha ou incisão e drenagem + antibiótico (clindamicina ou amoxicilina-clavulanato VO se estável; IV se não engole). Dexametasona dose única pode reduzir a dor"],
        ["Abscesso retrofaríngeo", "Criança < 5 anos; febre, torcicolo, dor ao estender o pescoço, sialorreia, estridor", "PS: TC de pescoço com contraste; antibiótico IV (ampicilina-sulbactam ou clindamicina); otorrino para drenagem se grande ou via aérea em risco"],
        ["Abscesso parafaríngeo / Lemierre", "Edema cervical lateral, febre alta, toxemia, êmbolos pulmonares", "PS: hemoculturas, TC; antibiótico IV com cobertura anaeróbia (ampicilina-sulbactam ou ceftriaxona + metronidazol)"],
        ["Adenite cervical supurada", "Linfonodo doloroso, flutuante", "Antibiótico; drenagem se flutuação"]
      ]
    },
    {
      titulo: "Critérios de Paradise para amigdalectomia (amigdalite recorrente)",
      colunas: ["Frequência", "Exigência"],
      linhas: [
        ["≥ 7 episódios no último ano", "Cada episódio documentado em prontuário"],
        ["≥ 5 episódios por ano nos últimos 2 anos", "Cada episódio com ≥ 1: febre > 38,3 °C, linfonodo cervical > 2 cm ou doloroso, exsudato amigdaliano, ou teste positivo para estreptococo"],
        ["≥ 3 episódios por ano nos últimos 3 anos", "Abaixo desses números: observação vigilante (watchful waiting)"]
      ],
      nota: "AAO-HNS 2019 (crianças): considerar também com menos episódios se múltiplas alergias/intolerâncias a antibióticos, PFAPA, abscesso periamigdaliano recorrente ou apneia obstrutiva do sono/hipertrofia com distúrbio respiratório do sono."
    }
  ],
  destino: {
    agora: [
      "Faringite viral ou Centor 0–1: sintomáticos e orientações, sem antibiótico",
      "Estreptococo confirmado ou provável: iniciar antibiótico na consulta (benzatina na unidade ou 1ª dose de amoxicilina)"
    ],
    reavaliar: [
      "Retorno se não melhorar em 48–72 h ou se piorar a qualquer momento",
      "Registrar cada episódio com data, temperatura, exsudato, linfonodo e resultado de teste (para critérios de Paradise)"
    ],
    alta: [
      "Engole líquidos, sem sinais de abscesso ou obstrução, com antibiótico e analgesia orientados",
      "Pode voltar à escola/trabalho após 12–24 h de antibiótico e sem febre"
    ],
    observacao: [
      "Desidratação leve por odinofagia: analgesia, hidratação oral ou venosa e reavaliar antes da alta"
    ],
    internacao: [
      "Abscesso periamigdaliano que não engole, abscesso retro ou parafaríngeo, Lemierre",
      "Incapacidade de ingerir líquidos com desidratação, toxemia, sinais de choque",
      "Comprometimento de via aérea"
    ],
    transferencia: [
      "Otorrinolaringologia de urgência: abscesso cervical profundo, via aérea em risco",
      "Otorrino eletivo: critérios de Paradise, PFAPA, apneia obstrutiva com hipertrofia amigdaliana, amígdalas assimétricas suspeitas"
    ]
  },
  prescricao: {
    ambulatorial: "FARINGOAMIGDALITE ESTREPTOCÓCICA — ADULTO\nUSO ORAL\n1. Amoxicilina 500 mg ------------------------------ 30 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 10 dias (ou 1 cápsula de 12 em 12 horas por 10 dias — 20 cápsulas).\n2. Ibuprofeno 600 mg ------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, se dor (até 5 dias).\n   ou Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\nOU (dose única, na unidade)\nUSO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ------------ 1 frasco-ampola\n   Aplicar 1.200.000 UI IM profunda no glúteo, dose única. Observar 30 minutos.\n\nCRIANÇA (exemplo 20 kg)\nUSO ORAL\n1. Amoxicilina 250 mg/5 mL suspensão -------------- 2 frascos de 150 mL\n   Dar 10 mL (500 mg) de 12 em 12 horas por 10 dias. (50 mg/kg/dia, máx 1.000 mg/dia; pode dar a dose do dia inteira 1 vez ao dia.)\n2. Paracetamol 200 mg/mL gotas -------------------- 1 frasco\n   Dar 20 gotas (1 gota/kg, máx 35 gotas) de 6 em 6 horas se dor ou febre.\n   ou Ibuprofeno — 5 a 10 mg/kg/dose (máx 400 mg) de 8 em 8 horas (calcular o volume pela concentração do frasco).\nOU Penicilina G benzatina 600.000 UI IM profunda, dose única (< 27 kg).\n\nALERGIA NÃO GRAVE À PENICILINA\n1. Cefalexina 500 mg (adulto) ---------------------- 20 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 10 dias.\n   Criança: cefalexina 250 mg/5 mL — 20 mg/kg/dose (máx 500 mg) de 12 em 12 horas por 10 dias.\n\nALERGIA GRAVE À PENICILINA\n1. Azitromicina 500 mg (adulto) -------------------- 5 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 5 dias.\n   Criança: azitromicina 200 mg/5 mL — 12 mg/kg (máx 500 mg) 1 vez ao dia por 5 dias.\n   OU (resistência a macrolídeo/falha) Clindamicina 300 mg — 1 cápsula de 8 em 8 horas por 10 dias (criança 7 mg/kg/dose, máx 300 mg, de 8 em 8 horas).\n\nRECORRÊNCIA / FALHA CONFIRMADA\n1. Amoxicilina + clavulanato 875/125 mg (adulto) --- 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 10 dias.\n   Criança: amoxicilina + clavulanato 250/62,5 mg/5 mL — 40 mg/kg/dia de amoxicilina divididos de 8 em 8 horas (máx 2 g/dia) por 10 dias.",
    hospitalar: "ABSCESSO PERIAMIGDALIANO / CERVICAL PROFUNDO — ADULTO (peso: ___ kg)\n1. Dieta líquida ou pastosa fria conforme aceitação; zero se via aérea em risco ou drenagem programada.\n2. Acesso venoso. SF 0,9% ou Ringer lactato conforme hidratação (manutenção ~ 30 mL/kg/dia se não ingere).\n3. Clindamicina 600 mg + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n   OU Ampicilina-sulbactam 3 g (2 g + 1 g) + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n   (Lemierre/toxemia: ceftriaxona 2 g IV 1×/dia + metronidazol 500 mg IV de 8/8 h.)\n4. Dexametasona 10 mg IV dose única (se sem contraindicação).\n5. Dipirona 1 g IV de 6/6 h se dor ou febre. Cetoprofeno 100 mg IV de 12/12 h se dor intensa e sem contraindicação.\n6. Ondansetrona 4 mg IV de 8/8 h se náusea.\n7. Avaliação da otorrinolaringologia para aspiração/drenagem; enviar pus para cultura.\n8. Controles: sinais vitais de 4/4 h, saturação, estridor, aceitação oral.\n9. Transição para VO (clindamicina 300 mg 8/8 h ou amoxicilina-clavulanato 875/125 mg 12/12 h) quando afebril e engolindo, completando 10–14 dias.\n\nCRIANÇA (por kg)\n- Clindamicina 10–13 mg/kg/dose IV de 8/8 h (máx 600 mg/dose) OU ampicilina-sulbactam 50 mg/kg/dose de ampicilina IV de 6/6 h (máx 2 g de ampicilina/dose).\n- Dipirona 15–25 mg/kg/dose IV de 6/6 h (máx 1 g).\n- Hidratação de manutenção (Holliday-Segar) com soro isotônico."
  },
  orientacoesRetorno: [
    "A maioria das dores de garganta é por vírus e melhora sozinha em 5 a 7 dias, sem antibiótico",
    "Se recebeu antibiótico, tomar até o fim dos 10 dias, mesmo melhorando: isso evita a febre reumática, que pode afetar o coração",
    "Pode voltar à escola ou ao trabalho 12 a 24 horas após o início do antibiótico, se sem febre",
    "Trocar a escova de dentes após 24 horas de antibiótico; não compartilhar copos e talheres",
    "Voltar imediatamente se: não conseguir abrir a boca ou engolir a saliva, voz abafada, falta de ar ou chiado ao respirar, pescoço duro ou inchado, febre alta que não cede, manchas roxas na pele",
    "Voltar em 2 a 3 dias se a febre e a dor não melhorarem com o tratamento",
    "Avisar o médico se surgir dor ou inchaço nas juntas, urina escura ou inchaço no rosto nas semanas seguintes"
  ],
  fontes: [
    "IDSA — Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis (Shulman et al., 2012)",
    "AAP — Red Book 2024–2027: Group A Streptococcal Infections",
    "AHA — Prevention of Rheumatic Fever and Diagnosis and Treatment of Acute Streptococcal Pharyngitis (2009); Jones revisado (2015)",
    "AAO-HNS — Clinical Practice Guideline: Tonsillectomy in Children (Update, 2019)",
    "Sociedade Brasileira de Pediatria — Tratado de Pediatria, 5ª ed. (2022): faringoamigdalites; Associação Brasileira de Otorrinolaringologia — Diretrizes de IVAS (2017)",
    "NICE — NG84 Sore throat (acute): antimicrobial prescribing (2018)",
    "BMJ Rapid Recommendations — Corticosteroids for sore throat (2017)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
