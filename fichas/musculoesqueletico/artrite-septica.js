// Artrite séptica (adulto e criança)
registrarFicha({
  id: "artrite-septica",
  especialidade: "musculoesqueletico",
  caminho: "ps",
  publico: "ambos",
  titulo: "Artrite séptica (adulto e criança)",
  resumo: "Monoartrite aguda dolorosa, com derrame e limitação, com ou sem febre: artrite séptica até prova em contrário. Emergência ortopédica: artrocentese, culturas, antibiótico IV e drenagem articular.",
  palavrasChave: "artrite septica pioartrite artrite bacteriana monoartrite joelho quadril criterios de kocher artrocentese puncao articular liquido sinovial staphylococcus aureus kingella gonococo oxacilina cefazolina ceftriaxona vancomicina sinovite transitoria",
  critico: {
    tempo: "Artrocentese antes do antibiótico",
    texto: "Puncionar a articulação e colher hemoculturas antes da 1ª dose, sem atrasar o antibiótico em sepse. Ortopedia no mesmo dia para lavagem articular: a cartilagem se destrói em horas a dias."
  },
  alarmes: [
    "Sinais de sepse ou choque",
    "Quadril infantil com recusa de apoio e febre (risco de necrose da cabeça femoral)",
    "Prótese articular dolorosa",
    "Imunossupressão, diabetes, usuário de drogas IV, hemodiálise",
    "Múltiplas articulações + pústulas, tenossinovite (gonococcemia disseminada)",
    "Sopro cardíaco novo (endocardite)"
  ],
  condutaInicial: [
    "Sinais vitais, critérios de sepse; analgesia; imobilização em posição de conforto",
    "Artrocentese diagnóstica (ver tabela de técnica): celularidade, Gram, cultura, cristais",
    "Hemoculturas 2 amostras, hemograma, PCR, VHS, creatinina; swabs uretral/cervical/retal/orofaringe se suspeita de gonococo",
    "Antibiótico IV empírico logo após a punção (não esperar resultado em paciente séptico)",
    "Ortopedia: lavagem/drenagem (artroscópica ou aberta) — quadril e ombro geralmente cirúrgicos",
    "Criança: aplicar critérios de Kocher; USG do quadril para derrame; punção guiada"
  ],
  fataisExcluir: [
    "Sepse / choque séptico",
    "Endocardite infecciosa",
    "Osteomielite contígua (criança, quadril)",
    "Infecção de prótese articular",
    "Fasciite necrosante / piomiosite (dor desproporcional)"
  ],
  proximaDecisao: "Líquido purulento, leucócitos sinoviais elevados (sobretudo > 50.000/mm³ com > 90% neutrófilos) ou Gram positivo → drenagem + antibiótico IV e ajuste pela cultura. Cristais não excluem infecção concomitante. Criança com melhora clínica e queda da PCR em 2–4 dias → transição para via oral.",
  clinica: {
    anamnese: [
      "Início, febre, trauma, infiltração articular ou cirurgia recente",
      "Fatores: idade > 80 anos, DM, AR, prótese, imunossupressão, drogas IV, infecção de pele",
      "Vida sexual (gonococo: jovem, poliartralgia migratória, tenossinovite, pústulas)",
      "Criança: recusa de apoio, claudicação, irritabilidade à troca de fralda, IVAS recente (sinovite transitória), vacinação",
      "Gota/pseudogota prévias (não exclui infecção)"
    ],
    exameFisico: [
      "Derrame, calor, rubor, dor à mobilização passiva (sinal mais sensível)",
      "Quadril: posição em flexão, abdução e rotação externa",
      "Pele (porta de entrada, pústulas), sopro cardíaco",
      "Outras articulações, tendões (tenossinovite em punhos e tornozelos)"
    ],
    diferenciais: [
      { dx: "Gota / pseudogota", pista: "Cristais no líquido; podem coexistir com infecção" },
      { dx: "Sinovite transitória do quadril", pista: "Criança 3–10 anos, pós-IVAS, afebril ou febre baixa, apoia o peso, PCR e VHS normais" },
      { dx: "Artrite gonocócica", pista: "Jovem sexualmente ativo, tenossinovite, pústulas, culturas articulares frequentemente negativas" },
      { dx: "Artrite reativa / viral (chikungunya)", pista: "Oligo/poliartrite, uretrite, diarreia ou arbovirose prévia — ver ficha Poliartralgia febril" },
      { dx: "Osteomielite, fratura, hemartrose", pista: "Trauma, anticoagulação, dor óssea focal" },
      { dx: "Celulite / bursite séptica", pista: "Edema superficial, mobilidade articular preservada" }
    ],
    gravidade: [
      "Critérios de Kocher (quadril infantil): não sustenta peso; febre > 38,5 °C; VHS > 40 mm/h; leucócitos > 12.000/mm³",
      "Probabilidade de artrite séptica com 0, 1, 2, 3 e 4 critérios: < 1%, ~3%, ~40%, ~93%, ~99% (coorte original; valor menor em validações externas)",
      "PCR > 2 mg/dL (20 mg/L) é preditor adicional (Caird)"
    ]
  },
  exames: [
    {
      nome: "Líquido sinovial",
      pedido: "Líquido sinovial: celularidade total e diferencial, bacterioscopia (Gram), cultura aeróbia (e frasco de hemocultura pediátrica inoculado à beira do leito), pesquisa de cristais com luz polarizada, glicose.",
      porQue: "Confirmar o diagnóstico e o agente.",
      esperar: "Turvo/purulento; leucócitos geralmente > 50.000/mm³ com > 90% neutrófilos.",
      interpretacao: "> 50.000: muito sugestivo; > 100.000: quase diagnóstico. Contagens menores não excluem (gonococo, imunossuprimido, prótese, antibiótico prévio).",
      limitacoes: "Gram positivo em só ~50%; cultura negativa em parte dos casos. Kingella cresce melhor em frasco de hemocultura e PCR."
    },
    {
      nome: "Sangue",
      pedido: "Hemoculturas (2 amostras), hemograma, PCR, VHS, ureia, creatinina, glicemia; lactato se sepse.",
      porQue: "Bacteremia em até metade dos casos; base para acompanhamento.",
      esperar: "Leucocitose e PCR/VHS elevados.",
      interpretacao: "Queda da PCR orienta transição para via oral (criança).",
      limitacoes: "Exames normais não excluem artrite séptica no adulto."
    },
    {
      nome: "Imagem",
      pedido: "Radiografia da articulação (AP e perfil). Ultrassonografia de quadril bilateral em criança.",
      porQue: "Basal, corpo estranho, fratura, osteomielite; USG detecta derrame e guia punção.",
      esperar: "RX inicial geralmente normal ou com aumento de partes moles.",
      interpretacao: "Derrame no quadril com Kocher ≥ 2 → punção/ortopedia. RM se suspeita de osteomielite associada.",
      limitacoes: "USG não distingue derrame séptico de não séptico."
    },
    {
      nome: "Pesquisa de gonococo",
      pedido: "PCR (teste molecular) para Neisseria gonorrhoeae e Chlamydia em urina de 1º jato, swab endocervical/uretral, retal e orofaríngeo; cultura de pústula.",
      porQue: "Culturas articulares frequentemente negativas no gonococo.",
      esperar: "Positivo em sítio mucoso.",
      interpretacao: "Tratar parceria e rastrear HIV, sífilis e hepatites.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Oxacilina",
      linha: "l1",
      dose: "Adulto: 2 g. Criança: 150–200 mg/kg/dia (máx. 12 g/dia)",
      via: "IV",
      intervalo: "Adulto 4/4 h. Criança 6/6 h",
      duracao: "Adulto: 2 semanas IV e completar 4 semanas no total (via oral). Criança: IV 2–4 dias e completar 10–14 dias (não complicada) por via oral",
      monitorizacao: "Flebite, função hepática, hemograma",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Cefazolina é alternativa equivalente: adulto 2 g IV 8/8 h; criança 100–150 mg/kg/dia de 8/8 h (máx. 6 g/dia). Em < 5 anos, a cefalosporina cobre Kingella (resistente a clindamicina e vancomicina)"
    },
    {
      droga: "Ceftriaxona (gram-negativos, gonococo, < 5 anos sem vacina Hib)",
      linha: "l1",
      dose: "Adulto: 2 g (gonococo: 1 g). Criança: 50–100 mg/kg/dia (máx. 2 g/dia)",
      via: "IV",
      intervalo: "24/24 h (criança pode dividir 12/12 h)",
      duracao: "Gonococo: 7 dias (24–48 h após melhora, completar via oral se possível). Demais: como acima",
      monitorizacao: "—",
      contraindicacoes: "Neonato com hiperbilirrubinemia ou cálcio IV",
      ajustes: "Associar à oxacilina em idoso, imunossuprimido, usuário de drogas IV ou Gram negativo. Gonococo: tratar Chlamydia (azitromicina 1 g VO ou doxiciclina) conforme PCDT IST"
    },
    {
      droga: "Vancomicina (risco de MRSA)",
      linha: "alt",
      dose: "Adulto: 15–20 mg/kg (ataque 25–30 mg/kg se grave). Criança: 15 mg/kg/dose",
      via: "IV em 1–2 h",
      intervalo: "Adulto 8/8–12/12 h. Criança 6/6 h",
      duracao: "Conforme cultura",
      monitorizacao: "Vale ou AUC, creatinina",
      contraindicacoes: "—",
      ajustes: "Indicação: MRSA conhecido, hospitalização recente, hemodiálise, usuário de drogas IV, prótese, alta prevalência local, ou alergia grave a betalactâmico. Diluir em ≥ 100 mL de SF/SG (≤ 5 mg/mL). Ajuste renal"
    },
    {
      droga: "Clindamicina",
      linha: "alt",
      dose: "Adulto: 600 mg. Criança: 30–40 mg/kg/dia (máx. 2,7 g/dia)",
      via: "IV ou VO",
      intervalo: "Adulto 8/8 h. Criança 6/6–8/8 h",
      duracao: "Conforme acima",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "Não cobre Kingella nem gram-negativos",
      ajustes: "Alergia a betalactâmico; MRSA comunitário sensível"
    },
    {
      droga: "Cefalexina (transição oral)",
      linha: "adj",
      dose: "Adulto: 1 g. Criança: 75–100 mg/kg/dia (máx. 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h (criança 6/6–8/8 h)",
      duracao: "Até completar o tempo total",
      monitorizacao: "Adesão, PCR",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Transição quando afebril, melhora da dor e queda da PCR e agente sensível"
    },
    {
      droga: "Analgesia",
      linha: "adj",
      dose: "Dipirona 1 g (criança 15–25 mg/kg, máx. 1 g); morfina 0,05–0,1 mg/kg IV (máx. 4 mg/dose inicial) se dor intensa",
      via: "IV",
      intervalo: "Dipirona 6/6 h; morfina 4/4 h SN",
      duracao: "Conforme dor",
      monitorizacao: "Sedação, FR",
      contraindicacoes: "—",
      ajustes: "Evitar AINE até excluir dengue em área endêmica e se lesão renal"
    }
  ],
  destino: {
    agora: ["Punção, hemoculturas, antibiótico IV e ortopedia no mesmo turno"],
    reavaliar: ["Dor, febre, derrame e PCR a cada 24–48 h; nova punção/drenagem se não melhora em 48 h"],
    alta: ["Afebril, sem dor importante, PCR em queda, antibiótico oral bem tolerado e retorno garantido (ortopedia/infectologia)"],
    observacao: ["Criança com Kocher 0–1, apoio do peso e PCR normal: observar e reavaliar em 12–24 h (provável sinovite transitória)"],
    internacao: ["Todos os casos suspeitos/confirmados"],
    transferencia: ["Sem ortopedia ou sem antibiótico IV: transferir após punção, hemocultura e 1ª dose"]
  },
  prescricao: {
    hospitalar: "ARTRITE SÉPTICA — ADULTO (peso: ___ kg)\n1. Dieta zero até avaliação ortopédica; depois dieta livre.\n2. Repouso com imobilização da articulação em posição de conforto; elevação do membro.\n3. Hemoculturas 2 amostras e artrocentese ANTES do antibiótico (não atrasar se sepse).\n4. Oxacilina 2 g IV de 4/4 h, diluída em 100 mL de SF 0,9% em 30 min.\n   + Ceftriaxona 2 g IV 1×/dia em 100 mL de SF 0,9% em 30 min (idoso, imunossuprimido, drogas IV, Gram negativo ou suspeita de gonococo — neste caso 1 g/dia).\n   OU, se risco de MRSA: vancomicina 25 mg/kg IV de ataque (___ mg) em 250 mL de SF 0,9% em 2 h, depois 15 mg/kg IV de 12/12 h; dosar vale antes da 4ª dose.\n5. Dipirona 1 g IV de 6/6 h; morfina 2–4 mg IV até de 4/4 h SN dor intensa.\n6. Ondansetrona 4 mg IV de 8/8 h SN náusea.\n7. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV) se sem contraindicação e após liberação cirúrgica.\n8. Controles: sinais vitais de 4/4 h; PCR, hemograma e creatinina a cada 48–72 h.\n9. Ajustar antibiótico pela cultura.\n\nCRIANÇA (por kg)\n- Oxacilina 50 mg/kg IV de 6/6 h (máx. 3 g/dose) OU cefazolina 33–50 mg/kg IV de 8/8 h (máx. 2 g/dose).\n- < 5 anos não vacinado para Hib ou Gram negativo: ceftriaxona 50–100 mg/kg/dia IV (máx. 2 g/dia).\n- Dipirona 15–25 mg/kg IV de 6/6 h (máx. 1 g/dose).",
    ambulatorial: "TRANSIÇÃO ORAL (após melhora clínica e queda da PCR)\nUSO ORAL\n1. Cefalexina 500 mg -------------------------------- ___ cápsulas\n   Adulto: tomar 2 cápsulas (1 g) de 6 em 6 horas até completar ___ dias de tratamento total.\n   Criança: cefalexina suspensão 250 mg/5 mL — 75–100 mg/kg/dia divididos de 6 em 6 horas (máx. 4 g/dia), até completar ___ dias.\n2. Dipirona 500 mg --------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre (criança 15–25 mg/kg/dose)."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico no horário certo até o último dia, mesmo sem dor",
    "Voltar imediatamente se a febre voltar, se a articulação inchar de novo ou se a dor piorar",
    "Fisioterapia/mobilização conforme orientação do ortopedista para não perder movimento",
    "Retorno com ortopedia e exames (PCR) em 1 semana e ao final do tratamento"
  ],
  tabelas: [
    {
      titulo: "Artrocentese — técnica resumida (joelho e criança)",
      colunas: ["Etapa", "Como fazer"],
      linhas: [
        ["Checagem", "Consentimento; não puncionar através de pele infectada (celulite) — abordar por outro ponto. Anticoagulação não contraindica de forma absoluta"],
        ["Material", "Clorexidina alcoólica, luvas estéreis, campo, agulha 18–21 G (40 × 12 ou 30 × 8; criança 21–23 G), seringas 10–20 mL, lidocaína 1–2%, tubos: EDTA (celularidade), seco (cristais/bioquímica), frasco de hemocultura"],
        ["Joelho (adulto)", "Paciente em decúbito dorsal, joelho estendido e relaxado. Ponto supero-lateral: 1 cm acima e 1 cm lateral ao polo superior da patela; agulha direcionada sob a patela, em direção ao centro da articulação, aspirando"],
        ["Quadril e criança", "Preferir punção guiada por USG, em centro cirúrgico ou com sedação, por ortopedista/radiologista"],
        ["Finalização", "Aspirar o máximo possível (alivia dor); curativo compressivo; anotar volume, aspecto e cor"],
        ["Complicações", "Infecção iatrogênica (< 0,1%), hemartrose, lesão de cartilagem; dor transitória"]
      ],
      nota: "Registrar no prontuário: articulação, via, anestesia, volume e aspecto, exames enviados, intercorrências."
    },
    {
      titulo: "Antibiótico empírico por cenário",
      colunas: ["Cenário", "Esquema"],
      linhas: [
        ["Adulto sem risco especial", "Oxacilina (ou cefazolina)"],
        ["Idoso, imunossuprimido, drogas IV, Gram negativo", "Oxacilina + ceftriaxona (ou cefepima se Pseudomonas)"],
        ["Risco de MRSA / prótese", "Vancomicina + ceftriaxona (prótese: ortopedia e infectologia)"],
        ["Jovem sexualmente ativo, gonococo provável", "Ceftriaxona 1 g IV 1×/dia"],
        ["Criança 3 meses a 5 anos", "Cefazolina ou oxacilina (cobre S. aureus e Kingella); ceftriaxona se não vacinada para Hib"],
        ["Neonato", "Oxacilina + cefotaxima (ou gentamicina) — conduta com neonatologia"]
      ]
    }
  ],
  fontes: [
    "IDSA/PIDS — Clinical Practice Guideline: Acute Bacterial Arthritis in Pediatrics (2023)",
    "ESPID — Bone and Joint Infections guideline (2017)",
    "EULAR/BSR — Management of the hot swollen joint in adults (BSR 2006, atualizado)",
    "Kocher MS et al. Differentiating septic arthritis from transient synovitis of the hip in children (J Bone Joint Surg Am, 1999; validação 2004)",
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
