// Infecções necrotizantes de partes moles (fasciite necrosante)
registrarFicha({
  id: "fasciite-necrosante",
  especialidade: "infectologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Fasciite necrosante (infecção necrotizante de partes moles)",
  resumo: "Infecção rapidamente progressiva da fáscia e do subcutâneo (incluindo gangrena de Fournier e gangrena gasosa). Dor desproporcional ao aspecto da pele, toxemia e progressão em horas. Tratamento: desbridamento cirúrgico urgente + antibiótico amplo + suporte de sepse.",
  palavrasChave: "fasciite necrosante infeccao necrotizante partes moles gangrena de fournier gangrena gasosa clostridium estreptococo grupo a choque toxico lrinec crepitacao desbridamento clindamicina vancomicina piperacilina tazobactam",
  critico: {
    tempo: "Cirurgia em < 6 h; ATB em 1 h",
    texto: "Suspeita clínica basta: antibiótico amplo + clindamicina na 1ª hora e cirurgião imediatamente. Atraso no desbridamento aumenta muito a mortalidade. Exame de imagem não deve atrasar a cirurgia."
  },
  alarmes: [
    "Dor intensa desproporcional ao aspecto da pele, ou que se estende além do eritema",
    "Edema tenso e endurecido além da área de eritema, bolhas (sobretudo hemorrágicas), equimoses, pele acinzentada",
    "Crepitação ou gás na imagem",
    "Anestesia da pele sobre a lesão (necrose nervosa)",
    "Progressão em horas apesar de antibiótico",
    "Hipotensão, taquicardia, confusão, lactato alto, insuficiência renal (sepse/choque tóxico)",
    "Dor/edema perineal ou escrotal em diabético (Fournier)"
  ],
  condutaInicial: [
    "ABCDE, 2 acessos, cristaloide e protocolo de sepse (ver fichas sepse e choque)",
    "Hemoculturas (2 pares) e exames, sem atrasar o antibiótico",
    "Antibiótico amplo IV na 1ª hora: vancomicina + piperacilina-tazobactam (ou meropenem) + clindamicina",
    "Cirurgia geral/plástica/urologia (Fournier) imediatamente para exploração e desbridamento",
    "Marcar com caneta a borda do eritema e reavaliar a cada 1–2 h",
    "Analgesia com opioide; profilaxia antitetânica (ver ficha tetano-profilaxia)"
  ],
  fataisExcluir: [
    "Choque séptico / síndrome do choque tóxico estreptocócico ou estafilocócico",
    "Gangrena gasosa por Clostridium",
    "Síndrome compartimental",
    "Infecção por Vibrio vulnificus (água salgada, hepatopata) ou Aeromonas (água doce)"
  ],
  proximaDecisao: "Exploração cirúrgica confirma (tecido acinzentado, fáscia que se descola com o dedo, ausência de sangramento, líquido em \"água de lavar pratos\"). Reabordagem programada em 24–48 h até não haver mais necrose. Descalonar antibiótico pela cultura de tecido; suspender clindamicina após 48–72 h de estabilidade.",
  clinica: {
    anamnese: [
      "Ferida, trauma, cirurgia, injeção (drogas), picada, varicela em criança",
      "Diabetes, obesidade, etilismo, cirrose, imunossupressão, DRC, doença vascular",
      "Uso de AINE (pode mascarar)",
      "Exposição a água doce/salgada, frutos do mar crus",
      "Velocidade de progressão e intensidade da dor"
    ],
    exameFisico: [
      "Sinais vitais completos e perfusão",
      "Área: eritema, edema além do eritema, bolhas, necrose, crepitação, anestesia",
      "Períneo e genitais (Fournier)",
      "Marcar bordas e fotografar para comparação"
    ],
    diferenciais: [
      { dx: "Celulite/erisipela", pista: "Dor proporcional, sem toxemia, melhora com antibiótico; ver ficha celulite-erisipela" },
      { dx: "Abscesso", pista: "Flutuação, coleção na ultrassonografia; ver ficha furunculo-abscesso" },
      { dx: "Piomiosite", pista: "Dor muscular profunda, coleção intramuscular" },
      { dx: "Trombose venosa profunda", pista: "Edema de membro sem toxemia, Doppler" },
      { dx: "Acidente ofídico/loxoscélico", pista: "Picada, história; ver fichas ofidismo e araneismo" }
    ],
    gravidade: [
      "Tipo I polimicrobiano (anaeróbios + gram-negativos; diabéticos, períneo, pós-operatório)",
      "Tipo II monomicrobiano (Streptococcus pyogenes, às vezes S. aureus/MRSA; membros, jovens hígidos)",
      "LRINEC (PCR, leucócitos, Hb, Na, creatinina, glicose) ≥ 6 sugere infecção necrotizante, mas tem baixa sensibilidade: escore baixo NÃO exclui"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, sódio, potássio, ureia, creatinina, glicemia, CPK, gasometria com lactato, TP/INR, TTPa, TGO, TGP, bilirrubinas, tipagem sanguínea. Hemoculturas (2 pares).",
      porQue: "Gravidade, disfunção orgânica, LRINEC, preparo cirúrgico.",
      esperar: "Leucocitose, PCR muito alta, hiponatremia, CPK alta, lactato alto.",
      interpretacao: "CPK elevada sugere acometimento muscular.",
      limitacoes: "Exames normais não excluem doença precoce."
    },
    {
      nome: "Imagem",
      pedido: "TC da região acometida com contraste (se não atrasar a cirurgia); RX simples para gás; ultrassonografia à beira do leito (espessamento e líquido fascial).",
      porQue: "Apoiar o diagnóstico em casos duvidosos e definir extensão.",
      esperar: "Gás em partes moles, líquido ao longo da fáscia, ausência de realce da fáscia.",
      interpretacao: "Gás = alta especificidade.",
      limitacoes: "Ausência de gás não exclui. Nunca atrasar a exploração cirúrgica por imagem."
    },
    {
      nome: "Cultura de tecido",
      pedido: "Cultura aeróbia e anaeróbia e Gram de tecido profundo obtido na cirurgia.",
      porQue: "Guiar descalonamento.",
      esperar: "Polimicrobiano (tipo I) ou S. pyogenes (tipo II).",
      interpretacao: "—",
      limitacoes: "Swab de superfície tem pouco valor."
    }
  ],
  tratamento: [
    {
      droga: "Desbridamento cirúrgico",
      linha: "l1",
      dose: "Ressecção de todo tecido necrótico",
      via: "Centro cirúrgico",
      intervalo: "Reabordagem a cada 24–48 h",
      duracao: "Até ausência de necrose",
      monitorizacao: "Progressão, perfusão",
      contraindicacoes: "—",
      ajustes: "Principal determinante de sobrevida. Fournier: urologia/coloproctologia (colostomia em casos selecionados)"
    },
    {
      droga: "Vancomicina",
      linha: "l1",
      dose: "Ataque 25–30 mg/kg; manutenção 15–20 mg/kg",
      via: "IV em 1–2 h (máx 1 g/h)",
      intervalo: "8/8–12/12 h",
      duracao: "Até descalonamento (cobertura de MRSA)",
      monitorizacao: "Nível sérico (vale 15–20 ou AUC 400–600), creatinina",
      contraindicacoes: "—",
      ajustes: "Ajuste renal pelo nível. Alternativas: linezolida 600 mg IV 12/12 h ou daptomicina"
    },
    {
      droga: "Piperacilina-tazobactam",
      linha: "l1",
      dose: "4,5 g",
      via: "IV (infusão estendida em 3–4 h se possível)",
      intervalo: "6/6 h",
      duracao: "Até descalonamento",
      monitorizacao: "Função renal",
      contraindicacoes: "Alergia grave a beta-lactâmico",
      ajustes: "ClCr 20–40: 3,375 g 6/6 h; < 20: 2,25 g 6/6 h. Alternativa: meropenem 1 g IV 8/8 h (preferir se ESBL provável)"
    },
    {
      droga: "Clindamicina",
      linha: "l1",
      dose: "900 mg",
      via: "IV em 30 min",
      intervalo: "8/8 h",
      duracao: "48–72 h após estabilidade clínica/fim do desbridamento",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "—",
      ajustes: "Inibe produção de toxinas (estreptococo, clostrídio). Sem ajuste renal"
    },
    {
      droga: "Penicilina G cristalina + clindamicina (S. pyogenes confirmado)",
      linha: "alt",
      dose: "Penicilina cristalina 4 milhões UI IV 4/4 h + clindamicina 900 mg IV 8/8 h",
      via: "IV",
      intervalo: "4/4 h e 8/8 h",
      duracao: "Até melhora e sem novo desbridamento; total individualizado",
      monitorizacao: "—",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Clostridium: mesmo esquema. Vibrio: doxiciclina 100 mg IV/VO 12/12 h + ceftriaxona 1 g IV 24/24 h (ou ceftazidima)"
    },
    {
      droga: "Imunoglobulina IV",
      linha: "adj",
      dose: "Conforme protocolo do serviço",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Considerada apenas em choque tóxico estreptocócico; evidência limitada (IDSA 2014: sem recomendação firme)"
    }
  ],
  destino: {
    agora: ["Sala vermelha, sepse, cirurgia imediata"],
    reavaliar: ["Bordas marcadas e sinais vitais a cada 1–2 h até a cirurgia", "Lactato a cada 2–4 h"],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["Todos: UTI no pós-operatório na maioria"],
    transferencia: ["Sem cirurgião disponível em poucas horas: transferir imediatamente após antibiótico e volume"]
  },
  prescricao: {
    hospitalar: "FASCIITE NECROSANTE — ADULTO (peso: ___ kg; ClCr: ___)\n1. Dieta zero (cirurgia).\n2. Ringer lactato 30 mL/kg IV nas primeiras 3 h se hipotensão ou lactato ≥ 4 (reavaliar após cada 500 mL); noradrenalina se PAM < 65 após volume (ver ficha choque).\n3. Vancomicina ___ mg (25–30 mg/kg, máx 3 g) em 250–500 mL de SF 0,9% IV em 2 h (ataque); depois 15–20 mg/kg IV de 12/12 h, ajustar por nível sérico.\n4. Piperacilina-tazobactam 4,5 g em 100 mL de SF 0,9% IV em 3–4 h, de 6/6 h (ou meropenem 1 g em 100 mL de SF IV em 3 h de 8/8 h).\n5. Clindamicina 900 mg em 100 mL de SF 0,9% IV em 30 min de 8/8 h.\n6. Morfina 10 mg/mL — 0,3 mL (3 mg) diluída IV lento até de 4/4 h se dor; dipirona 1 g IV de 6/6 h.\n7. Profilaxia antitetânica conforme histórico vacinal.\n8. Insulina regular SC conforme glicemia capilar (alvo 140–180 mg/dL).\n9. Enoxaparina 40 mg SC 1 vez ao dia (após cirurgia, se sem sangramento).\n10. Cuidados: marcar bordas da lesão e reavaliar de 1/1 h; sinais vitais de 1/1 h; diurese horária (sonda vesical); lactato de 2/2–4/4 h; hemoculturas antes do antibiótico se não atrasar."
  },
  orientacoesRetorno: [
    "Após a alta: cuidar da ferida conforme orientado; trocar curativos na UBS",
    "Voltar imediatamente se febre, dor que aumenta, vermelhidão que se espalha, secreção com mau cheiro ou pele escurecendo",
    "Controlar o diabetes e cuidar dos pés; procurar atendimento cedo diante de qualquer ferida que piora",
    "Retorno com cirurgia e reabilitação conforme agendado"
  ],
  tabelas: [
    {
      titulo: "LRINEC (apoio, não exclui)",
      colunas: ["Variável", "Valor", "Pontos"],
      linhas: [
        ["PCR (mg/L)", "≥ 150", "4"],
        ["Leucócitos (/mm³)", "15.000–25.000 / > 25.000", "1 / 2"],
        ["Hemoglobina (g/dL)", "11–13,5 / < 11", "1 / 2"],
        ["Sódio (mEq/L)", "< 135", "2"],
        ["Creatinina (mg/dL)", "> 1,6", "2"],
        ["Glicose (mg/dL)", "> 180", "1"]
      ],
      nota: "≥ 6 sugere infecção necrotizante; ≥ 8 alto risco. Sensibilidade baixa: a decisão é clínica e cirúrgica."
    }
  ],
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (2014)",
    "WSES/SIS-E — Consensus conference: recommendations for the management of skin and soft-tissue infections (World J Emerg Surg, 2018)",
    "Surviving Sepsis Campaign — International Guidelines (2021)",
    "Wong CH et al. — LRINEC score (Crit Care Med, 2004)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
