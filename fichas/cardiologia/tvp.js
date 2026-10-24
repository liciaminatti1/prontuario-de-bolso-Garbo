// Trombose venosa profunda
registrarFicha({
  id: "tvp",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Trombose venosa profunda (TVP)",
  resumo: "Dor e edema unilateral de membro, sobretudo com fatores de risco. Probabilidade pelo escore de Wells, D-dímero e ultrassom com compressão; anticoagular se confirmada. TEP: ver ficha tep.",
  palavrasChave: "tvp trombose venosa profunda wells d-dimero ultrassom doppler venoso compressao anticoagulacao enoxaparina heparina varfarina rivaroxabana apixabana edema perna panturrilha phlegmasia",
  critico: {
    tempo: "Alta suspeita: anticoagular antes do USG",
    texto: "Probabilidade alta e sem risco de sangramento: iniciar anticoagulação enquanto aguarda o ultrassom. Dispneia, dor torácica, taquicardia ou hipoxemia: investigar TEP."
  },
  alarmes: [
    "Dispneia, dor torácica, síncope, taquicardia, hipoxemia (TEP)",
    "Membro muito edemaciado, cianótico, doloroso, com bolhas ou pulso reduzido (phlegmasia cerulea dolens): risco de gangrena",
    "TVP iliofemoral extensa",
    "Sangramento ativo ou alto risco de sangramento",
    "Gestante ou puérpera, câncer ativo"
  ],
  condutaInicial: [
    "Estimar probabilidade pelo escore de Wells para TVP",
    "Wells < 2 (improvável): D-dímero; negativo exclui; positivo → ultrassom",
    "Wells ≥ 2 (provável): ultrassom venoso com compressão; se não disponível em horas, anticoagular e agendar",
    "Confirmada: anticoagulação (preferir DOAC; no SUS, enoxaparina + varfarina)",
    "Pesquisar fatores provocadores; avaliar sinais de TEP",
    "Maioria pode ser tratada ambulatorialmente"
  ],
  fataisExcluir: [
    "TEP associado",
    "Phlegmasia cerulea dolens / isquemia venosa",
    "Câncer oculto (TVP não provocada: rastreio conforme idade e clínica)",
    "Síndrome compartimental, celulite necrotizante (diferencial)"
  ],
  proximaDecisao: "TVP proximal confirmada → anticoagulação por pelo menos 3 meses e decisão de estender. TVP distal isolada (panturrilha) sem sintomas graves nem fatores de risco de extensão → ultrassom seriado em 1–2 semanas ou anticoagular por 3 meses. Ultrassom inicial negativo com probabilidade alta ou D-dímero positivo → repetir ultrassom em 5–7 dias.",
  clinica: {
    anamnese: [
      "Dor, edema, calor unilateral; início",
      "Fatores de risco: cirurgia ou internação recente, imobilização, gesso, viagem longa, câncer, TVP/TEP prévio, gestação/puerpério, estrogênio, trombofilia, obesidade",
      "Sintomas de TEP: dispneia, dor pleurítica, hemoptise, síncope",
      "Risco de sangramento: sangramento recente, úlcera, AVC, plaquetopenia, DRC, hepatopatia, quedas"
    ],
    exameFisico: [
      "Perímetro de panturrilha 10 cm abaixo da tuberosidade tibial (diferença > 3 cm)",
      "Edema com cacifo, empastamento, veias colaterais superficiais",
      "Pulsos, perfusão, cor do membro",
      "FC, FR, SpO₂"
    ],
    diferenciais: [
      { dx: "Celulite/erisipela", pista: "Eritema bem delimitado, febre, porta de entrada" },
      { dx: "Cisto de Baker roto", pista: "Dor súbita na panturrilha, artrose/artrite de joelho; ultrassom" },
      { dx: "Ruptura/estiramento muscular", pista: "Trauma ou esforço, hematoma" },
      { dx: "Insuficiência venosa crônica, linfedema", pista: "Bilateral, crônico" },
      { dx: "Tromboflebite superficial", pista: "Cordão palpável superficial; ultrassom para excluir TVP associada" }
    ],
    gravidade: [
      "Wells TVP ≥ 2 = provável; < 2 = improvável",
      "TVP proximal (poplítea e acima) tem maior risco de TEP",
      "D-dímero ajustado por idade (> 50 anos: idade × 10 µg/L FEU) aumenta especificidade"
    ]
  },
  exames: [
    {
      nome: "D-dímero",
      pedido: "D-dímero quantitativo (método de alta sensibilidade).",
      porQue: "Excluir TVP em probabilidade improvável.",
      esperar: "Negativo exclui TVP se Wells < 2.",
      interpretacao: "Corte usual 500 µg/L FEU; > 50 anos: idade × 10.",
      limitacoes: "Positivo é inespecífico (idade, câncer, gestação, infecção, pós-operatório). Não usar se probabilidade alta."
    },
    {
      nome: "Ultrassom venoso com compressão",
      pedido: "Ultrassom Doppler venoso do membro inferior (direito/esquerdo) com compressão — suspeita de TVP.",
      porQue: "Exame de confirmação.",
      esperar: "Veia não compressível, trombo.",
      interpretacao: "POCUS de 2 pontos (femoral comum e poplítea) pode ser feito à beira-leito por médico treinado.",
      limitacoes: "Ultrassom de 2 pontos não avalia veias da panturrilha: se negativo com suspeita, repetir em 5–7 dias."
    },
    {
      nome: "Exames antes de anticoagular",
      pedido: "Hemograma com plaquetas, TP/INR, TTPa, creatinina (ClCr), TGO, TGP; beta-hCG em mulher em idade fértil.",
      porQue: "Escolha e dose do anticoagulante.",
      esperar: "—",
      interpretacao: "ClCr < 30: evitar DOAC/ajustar; preferir heparina não fracionada ou varfarina.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Rivaroxabana",
      linha: "l1",
      dose: "15 mg 12/12 h por 21 dias, depois 20 mg 1×/dia",
      via: "VO, com alimento",
      intervalo: "12/12 h → 1×/dia",
      duracao: "Mínimo 3 meses",
      monitorizacao: "Sangramento, função renal",
      contraindicacoes: "ClCr < 15 (evitar < 30), gestação, lactação, SAF triplo positivo, valva mecânica, interações (inibidores fortes de CYP3A4/P-gp)",
      ajustes: "Não disponível na RENAME para TVP em todos os locais; conferir protocolo"
    },
    {
      droga: "Apixabana",
      linha: "l1",
      dose: "10 mg 12/12 h por 7 dias, depois 5 mg 12/12 h",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Mínimo 3 meses; extensão: 2,5 mg 12/12 h após 6 meses",
      monitorizacao: "Sangramento, função renal",
      contraindicacoes: "Gestação, lactação, SAF, valva mecânica",
      ajustes: "Cautela com ClCr < 25"
    },
    {
      droga: "Enoxaparina",
      linha: "l1",
      dose: "1 mg/kg 12/12 h (ou 1,5 mg/kg 1×/dia)",
      via: "SC",
      intervalo: "12/12 h",
      duracao: "Mínimo 5 dias e até INR 2–3 por 24 h, se transição para varfarina; gestação e câncer: manter",
      monitorizacao: "Plaquetas (HIT), função renal",
      contraindicacoes: "Sangramento ativo, HIT",
      ajustes: "ClCr < 30: 1 mg/kg 1×/dia ou heparina não fracionada. Escolha na gestação. Disponível no SUS"
    },
    {
      droga: "Varfarina",
      linha: "alt",
      dose: "5 mg/dia no início (2,5 mg se idoso, frágil, hepatopatia), ajustar pelo INR",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Mínimo 3 meses; alvo INR 2–3",
      monitorizacao: "INR a cada 2–3 dias até estável, depois mensal",
      contraindicacoes: "Gestação (teratogênica)",
      ajustes: "Iniciar no 1º dia junto com enoxaparina; sobreposição ≥ 5 dias e INR ≥ 2 por 24 h. Muitas interações. Escolha na SAF e DRC grave"
    },
    {
      droga: "Heparina não fracionada",
      linha: "alt",
      dose: "80 UI/kg em bolus + 18 UI/kg/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Transição para anticoagulante oral",
      monitorizacao: "TTPa a cada 6 h (alvo 1,5–2,5× controle), plaquetas",
      contraindicacoes: "Sangramento ativo",
      ajustes: "Preferida se ClCr < 30, alto risco de sangramento, possibilidade de procedimento/trombólise"
    }
  ],
  destino: {
    agora: [
      "Wells, D-dímero ou ultrassom; anticoagular se provável e sem risco de sangramento",
      "Excluir TEP"
    ],
    reavaliar: [
      "Ultrassom em 5–7 dias se negativo com suspeita persistente",
      "TVP distal sem anticoagulação: ultrassom em 1–2 semanas"
    ],
    alta: [
      "TVP sem TEP, estável, sem alto risco de sangramento, com acesso ao anticoagulante e seguimento",
      "Retorno na UBS em 1–2 semanas; controle de INR se varfarina"
    ],
    observacao: ["—"],
    internacao: [
      "TEP associado com instabilidade ou hipoxemia",
      "TVP iliofemoral extensa, phlegmasia, dor intensa",
      "Alto risco de sangramento, insuficiência renal grave, sem condições de tratamento domiciliar"
    ],
    transferencia: [
      "Phlegmasia cerulea dolens ou TVP iliofemoral com indicação de trombólise dirigida: cirurgia vascular"
    ]
  },
  prescricao: {
    ambulatorial: "USO ORAL (opção 1 — DOAC)\n1. Rivaroxabana 15 mg ----------------------------- 42 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento, por 21 dias.\n2. Rivaroxabana 20 mg ----------------------------- 30 comprimidos\n   Depois, tomar 1 comprimido por dia, com alimento, até completar 3 meses (no mínimo).\n\nUSO SUBCUTÂNEO + ORAL (opção 2 — SUS)\n1. Enoxaparina 80 mg/0,8 mL (dose 1 mg/kg: ___ mg) ---- ___ seringas\n   Aplicar ___ mg no subcutâneo da barriga de 12 em 12 horas até o INR ficar entre 2 e 3 por 2 dias seguidos (mínimo 5 dias).\n2. Varfarina 5 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, sempre no mesmo horário, desde o 1º dia. Dose ajustada pelo INR.\n3. Exame de INR em 3 dias e conforme orientação.",
    hospitalar: "TVP — INTERNAÇÃO (peso: ___ kg; ClCr: ___)\n1. Dieta livre. Deambulação permitida conforme tolerância (não é necessário repouso no leito).\n2. Enoxaparina 1 mg/kg (___ mg) SC de 12/12 h (ClCr < 30: 1 mg/kg 1×/dia).\n   (ou, se ClCr < 30 ou alto risco de sangramento) Heparina não fracionada 25.000 UI + SF 0,9% 250 mL (100 UI/mL): bolus 80 UI/kg IV e infusão 18 UI/kg/h; TTPa de 6/6 h e ajuste por protocolo.\n3. Varfarina 5 mg VO 1×/dia às 17 h (se escolhida); INR diário.\n4. Dipirona 1 g VO/IV de 6/6 h se dor. Elevação do membro.\n5. Hemograma com plaquetas no 1º dia e a cada 2–3 dias (HIT)."
  },
  orientacoesRetorno: [
    "Tomar o anticoagulante todos os dias, no mesmo horário; não pular doses nem dobrar",
    "Andar é permitido e ajuda; elevar a perna quando sentado",
    "Avisar qualquer médico ou dentista que usa anticoagulante; evitar anti-inflamatórios (ibuprofeno, diclofenaco) e AAS sem orientação",
    "Voltar imediatamente se falta de ar, dor no peito, tosse com sangue, desmaio, sangramento que não para, fezes pretas, urina com sangue ou dor de cabeça forte",
    "Varfarina: fazer o exame de INR nas datas marcadas e manter alimentação regular (verduras verde-escuras sem exageros)"
  ],
  tabelas: [
    {
      titulo: "Escore de Wells para TVP",
      colunas: ["Critério", "Pontos"],
      linhas: [
        ["Câncer ativo (tratamento nos últimos 6 meses ou paliativo)", "+1"],
        ["Paralisia, paresia ou imobilização gessada recente de membro inferior", "+1"],
        ["Acamado ≥ 3 dias ou cirurgia maior nas últimas 12 semanas", "+1"],
        ["Dor à palpação no trajeto do sistema venoso profundo", "+1"],
        ["Edema de toda a perna", "+1"],
        ["Panturrilha > 3 cm maior que a contralateral (10 cm abaixo da tuberosidade tibial)", "+1"],
        ["Edema com cacifo restrito à perna sintomática", "+1"],
        ["Veias colaterais superficiais (não varicosas)", "+1"],
        ["TVP prévia documentada", "+1"],
        ["Diagnóstico alternativo tão ou mais provável que TVP", "−2"]
      ],
      nota: "≥ 2 = TVP provável (ultrassom); < 2 = improvável (D-dímero). Duração: 3 meses se provocada por fator transitório; estender (sem data de término) se não provocada ou fator persistente, pesando risco de sangramento."
    }
  ],
  fontes: [
    "ASH — Guidelines for management of venous thromboembolism: treatment of DVT and PE (2020)",
    "CHEST — Antithrombotic Therapy for VTE Disease: Second Update (2021)",
    "NICE — Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (NG158, 2020, atualizado 2023)",
    "Wells PS et al. — Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis, N Engl J Med (2003)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
