// Apendicite aguda — adulto, criança e gestante
registrarFicha({
  id: "apendicite",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Apendicite aguda",
  resumo: "Dor periumbilical que migra para a fossa ilíaca direita, com anorexia, náuseas e febre baixa. Usar escores (Alvarado, AIR, PAS na criança) para estratificar e decidir imagem. Tratamento padrão: apendicectomia (laparoscópica) com antibiótico.",
  palavrasChave: "apendicite apendice apendicectomia fid fossa iliaca direita mcburney blumberg rovsing alvarado air pas samuel gestante crianca plastrao abscesso apendicular",
  critico: {
    tempo: "Antibiótico + cirurgião cedo",
    texto: "Apendicite confirmada ou muito provável: jejum, analgesia, antibiótico e avaliação cirúrgica. Peritonite difusa ou sepse = cirurgia de urgência após reanimação."
  },
  alarmes: [
    "Peritonite difusa, abdome em tábua (perfuração)",
    "Febre alta, taquicardia, hipotensão, lactato elevado (sepse)",
    "Massa palpável na FID (plastrão / abscesso)",
    "Criança < 5 anos e idoso: perfuração mais frequente e precoce",
    "Gestante: quadro atípico (dor mais alta no 3º trimestre); risco de perda fetal com perfuração"
  ],
  condutaInicial: [
    "Jejum, acesso venoso, hidratação",
    "Analgesia (dipirona + opioide se necessário); não atrasa nem mascara o diagnóstico",
    "Hemograma, PCR, urina tipo 1, beta-hCG (mulher em idade fértil)",
    "Calcular escore: Alvarado ou AIR (adulto), PAS ou Alvarado (criança)",
    "Imagem conforme risco: USG primeiro em criança, gestante e mulher jovem; TC com contraste no adulto se dúvida",
    "Chamar cirurgião; antibiótico assim que o diagnóstico for provável"
  ],
  fataisExcluir: [
    "Gestação ectópica",
    "Torção de ovário / torção testicular",
    "Doença inflamatória pélvica com abscesso tubo-ovariano",
    "Diverticulite à direita, neoplasia de ceco (idoso)",
    "Isquemia mesentérica (idoso, FA)"
  ],
  proximaDecisao: "Escore de baixo risco → alta com reavaliação em 12–24 h. Intermediário → imagem (ou observação com reexame). Alto risco → cirurgião (imagem conforme protocolo local, sobretudo em mulheres e idosos). Confirmada não complicada → apendicectomia laparoscópica (tratamento só com antibiótico é opção em adultos selecionados sem apendicolito, após decisão compartilhada). Complicada com abscesso bem delimitado → antibiótico + drenagem percutânea.",
  clinica: {
    anamnese: [
      "Sequência clássica: dor periumbilical/epigástrica → anorexia, náuseas → dor em FID",
      "Duração (> 48 h aumenta risco de perfuração)",
      "Febre, diarreia (apêndice pélvico), disúria (contato com ureter/bexiga)",
      "DUM, corrimento, dor pélvica, relação sexual (diferenciais ginecológicos)",
      "Criança: recusa alimentar, dificuldade de andar ou pular, vômitos"
    ],
    exameFisico: [
      "Dor no ponto de McBurney, descompressão brusca dolorosa (Blumberg)",
      "Rovsing (dor na FID ao comprimir FIE), psoas (apêndice retrocecal), obturador (pélvico)",
      "Dor ao tossir, ao pular ou à percussão (irritação peritoneal)",
      "Massa palpável (plastrão)",
      "Exame pélvico se dúvida ginecológica; exame testicular em meninos"
    ],
    diferenciais: [
      { dx: "Adenite mesentérica", pista: "Criança com IVAS recente; linfonodos aumentados na USG, apêndice normal" },
      { dx: "Gestação ectópica", pista: "Beta-hCG positivo, atraso menstrual, sangramento" },
      { dx: "Cisto ovariano roto / torção", pista: "Dor súbita, USG pélvica alterada, Doppler" },
      { dx: "DIP", pista: "Dor bilateral, corrimento, dor à mobilização do colo" },
      { dx: "Cólica ureteral", pista: "Dor em cólica lombar, hematúria, sem irritação peritoneal" },
      { dx: "Gastroenterite", pista: "Diarreia volumosa precedendo a dor, dor difusa" },
      { dx: "Doença de Crohn (ileíte)", pista: "Diarreia crônica, perda de peso" }
    ],
    gravidade: [
      "Não complicada: apêndice inflamado sem perfuração",
      "Complicada: gangrena, perfuração, abscesso, peritonite",
      "Plastrão (fleimão) ou abscesso: em geral sintomas > 3–5 dias"
    ]
  },
  exames: [
    {
      nome: "Hemograma e PCR",
      pedido: "Hemograma completo com diferencial e proteína C reativa.",
      porQue: "Compõem os escores (Alvarado, AIR, PAS).",
      esperar: "Leucocitose com neutrofilia; PCR elevada (mais ainda na complicada).",
      interpretacao: "Leucócitos e PCR normais com > 24 h de dor tornam apendicite menos provável.",
      limitacoes: "Normais no início do quadro; não usar isoladamente."
    },
    {
      nome: "Urina tipo 1 e beta-hCG",
      pedido: "Urina tipo 1. Beta-hCG (sérico ou urinário) em mulheres em idade fértil.",
      porQue: "Diferenciais urinários e ginecológicos.",
      esperar: "Piúria leve pode ocorrer na apendicite.",
      interpretacao: "Beta-hCG positivo → USG transvaginal para ectópica.",
      limitacoes: "—"
    },
    {
      nome: "Ultrassonografia",
      pedido: "Ultrassonografia de abdome com estudo da fossa ilíaca direita (apêndice). Mulher: USG pélvica/transvaginal.",
      porQue: "1ª imagem em criança, gestante e mulher jovem (sem radiação).",
      esperar: "Apêndice não compressível > 6 mm, apendicolito, líquido, gordura inflamada.",
      interpretacao: "Apêndice não visualizado = inconclusivo; seguir com observação, TC (adulto) ou RM (gestante/criança).",
      limitacoes: "Operador-dependente."
    },
    {
      nome: "Tomografia de abdome e pelve com contraste",
      pedido: "Tomografia de abdome e pelve com contraste endovenoso — suspeita de apendicite aguda.",
      porQue: "Maior acurácia no adulto; define complicações (abscesso, perfuração, apendicolito).",
      esperar: "Apêndice espessado, densificação de gordura, abscesso.",
      interpretacao: "Abscesso bem delimitado: candidato a drenagem percutânea. Apendicolito: maior falha do tratamento não operatório.",
      limitacoes: "Radiação: evitar em gestante e minimizar em crianças (preferir USG/RM)."
    },
    {
      nome: "Ressonância magnética (gestante)",
      pedido: "Ressonância magnética de abdome e pelve sem gadolínio — suspeita de apendicite em gestante.",
      porQue: "USG inconclusiva na gestante.",
      esperar: "Alta acurácia.",
      interpretacao: "—",
      limitacoes: "Disponibilidade; não atrasar cirurgia se clínica evidente."
    }
  ],
  tratamento: [
    {
      droga: "Ceftriaxona + metronidazol",
      linha: "l1",
      dose: "Adulto: ceftriaxona 2 g + metronidazol 500 mg · Criança: ceftriaxona 50–75 mg/kg/dia (máx. 2 g) + metronidazol 30 mg/kg/dia divididos de 8/8 h (máx. 500 mg/dose)",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "Não complicada: só profilaxia (dose pré-operatória), sem antibiótico pós-operatório. Complicada: 3–5 dias após controle do foco (até 4 dias, conforme WSES)",
      monitorizacao: "Febre, dor, leucograma",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Ceftriaxona: diluir em 100 mL de SF e infundir em 30 min. Metronidazol 500 mg/100 mL em 30–60 min. Alternativa profilática: cefazolina 2 g (criança 30 mg/kg) + metronidazol. Gestante: esquema seguro"
    },
    {
      droga: "Amoxicilina-clavulanato",
      linha: "alt",
      dose: "Adulto: 1 g/200 mg IV de 8/8 h ou 875/125 mg VO de 12/12 h · Criança: 25–30 mg/kg/dose IV de 8/8 h (máx. 1 g) ou 45 mg/kg/dia VO de 12/12 h",
      via: "IV ou VO",
      intervalo: "8/8 h IV; 12/12 h VO",
      duracao: "Tratamento não operatório: 1–3 dias IV e completar 7–10 dias VO; complicada: completar 3–5 dias após controle do foco",
      monitorizacao: "Resposta clínica em 24–48 h",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alergia grave a betalactâmico: ciprofloxacino 400 mg IV 12/12 h (adulto) + metronidazol"
    },
    {
      droga: "Apendicectomia (preferencialmente laparoscópica)",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "Em geral nas primeiras 24 h do diagnóstico",
      monitorizacao: "Pós-operatório: febre, ferida, abscesso residual (5–7 dias)",
      contraindicacoes: "—",
      ajustes: "Gestante: laparoscopia segura em qualquer trimestre (SAGES 2017). Plastrão/abscesso: antibiótico ± drenagem percutânea e reavaliar apendicectomia de intervalo (colonoscopia ou TC no adulto > 40 anos para excluir neoplasia)"
    },
    {
      droga: "Tratamento não operatório (só antibiótico)",
      linha: "alt",
      dose: "Esquema acima",
      via: "IV → VO",
      intervalo: "—",
      duracao: "7–10 dias",
      monitorizacao: "Falha em 24–48 h → cirurgia. Recorrência em 1 ano em parte relevante dos casos",
      contraindicacoes: "Apendicolito, perfuração, peritonite, gestante, imunossuprimido",
      ajustes: "Opção segura em adultos e crianças selecionados com apendicite não complicada confirmada por imagem, após decisão compartilhada (WSES 2020, CODA 2020)"
    },
    {
      droga: "Analgesia",
      linha: "adj",
      dose: "Dipirona 1 g (criança 15–25 mg/kg, máx. 1 g) · Morfina 0,05–0,1 mg/kg (máx. 4 mg por dose na titulação)",
      via: "IV",
      intervalo: "Dipirona 6/6 h; morfina SN",
      duracao: "—",
      monitorizacao: "FR, sedação",
      contraindicacoes: "—",
      ajustes: "Gestante: paracetamol e opioide; evitar AINE (sobretudo após 20 semanas)"
    }
  ],
  destino: {
    agora: [
      "Jejum, analgesia, antibiótico e avaliação do cirurgião",
      "Gestante: obstetra junto (vitalidade fetal)"
    ],
    reavaliar: [
      "Escore intermediário sem imagem: reexame e novo hemograma/PCR em 6–12 h"
    ],
    alta: [
      "Escore baixo, exame tranquilizador, aceitando dieta, com retorno garantido em 12–24 h",
      "Pós-apendicectomia não complicada: alta em 24 h na maioria"
    ],
    observacao: [
      "Risco intermediário: observação com exames seriados quando imagem não disponível"
    ],
    internacao: [
      "Apendicite confirmada ou alto risco: cirurgia geral (cirurgia pediátrica na criança)"
    ],
    transferencia: [
      "Sem cirurgião (ou sem cirurgião pediátrico para criança pequena): regular após 1ª dose de antibiótico e analgesia"
    ]
  },
  prescricao: {
    hospitalar: "APENDICITE AGUDA — PRÉ-OPERATÓRIO (ADULTO)\n1. Jejum absoluto.\n2. Ringer lactato 1.000 mL IV de 8/8 h (ajustar à volemia).\n3. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia.\n4. Metronidazol 500 mg/100 mL IV em 30–60 min de 8/8 h.\n5. Dipirona 1 g + água destilada 10 mL IV lento de 6/6 h.\n6. Morfina 1 mg/mL (diluída): 2–4 mg IV se dor intensa, até de 4/4 h.\n7. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n8. Sinais vitais de 4/4 h; avisar se febre, PAS < 90 mmHg ou piora da dor.\n9. Avaliação da cirurgia geral.\n\nCRIANÇA (peso ___ kg)\n- Ceftriaxona 50–75 mg/kg IV 1 vez ao dia (máx. 2 g) + metronidazol 10 mg/kg IV de 8/8 h (máx. 500 mg/dose).\n- Dipirona 15–25 mg/kg IV de 6/6 h (máx. 1 g/dose). Morfina 0,05–0,1 mg/kg IV SN (máx. 4 mg/dose).\n- Hidratação de manutenção (Holliday-Segar) com solução isotônica.",
    ambulatorial: "PÓS-APENDICECTOMIA NÃO COMPLICADA (ADULTO)\nUSO ORAL\n1. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas por 3 dias; depois se dor.\n2. Paracetamol 750 mg ----------------------------- 1 caixa\n   Tomar 1 comprimido de 8 em 8 horas se dor que não melhora com a dipirona.\n(Criança: dipirona 15–25 mg/kg/dose de 6/6 h, máx. 1 g; paracetamol 15 mg/kg/dose de 6/6 h, máx. 750 mg/dose.)\n\nAntibiótico em casa só se apendicite complicada, conforme cirurgião.\n\nALTA SEM CIRURGIA (ESCORE BAIXO)\n1. Dipirona 500 mg — 1 a 2 comprimidos de 6/6 h se dor. Reavaliação em 12–24 h."
  },
  orientacoesRetorno: [
    "Sem cirurgia: voltar em 12–24 h para reavaliação, ou antes se a dor aumentar, migrar para o lado direito, aparecer febre, vômitos ou dificuldade de andar",
    "Após a cirurgia: caminhar desde o 1º dia; banho normal; limpar o curativo com água e sabão",
    "Voltar se febre, vermelhidão ou pus na ferida, barriga cada vez mais dolorida ou inchada, vômitos ou diarreia persistentes (abscesso)",
    "Evitar esforço físico intenso por cerca de 2–4 semanas (laparoscopia) ou conforme orientação do cirurgião",
    "Retorno ao ambulatório de cirurgia em 7–14 dias"
  ],
  tabelas: [
    {
      titulo: "Escore de Alvarado (MANTRELS)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Migração da dor para FID", "1"],
        ["Anorexia", "1"],
        ["Náuseas ou vômitos", "1"],
        ["Dor à palpação da FID", "2"],
        ["Descompressão brusca dolorosa", "1"],
        ["Temperatura ≥ 37,3 °C", "1"],
        ["Leucocitose > 10.000", "2"],
        ["Desvio à esquerda (neutrofilia)", "1"]
      ],
      nota: "1–4: baixo risco (alta com reavaliação). 5–6: intermediário (imagem/observação). 7–10: alto risco (cirurgião). Bom para excluir (escore baixo); menos preciso em mulheres."
    },
    {
      titulo: "Escore AIR (Appendicitis Inflammatory Response)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Vômitos", "1"],
        ["Dor na FID", "1"],
        ["Descompressão dolorosa: leve / moderada / intensa", "1 / 2 / 3"],
        ["Temperatura ≥ 38,5 °C", "1"],
        ["Neutrófilos 70–84% / ≥ 85%", "1 / 2"],
        ["Leucócitos 10.000–14.900 / ≥ 15.000", "1 / 2"],
        ["PCR 10–49 mg/L / ≥ 50 mg/L", "1 / 2"]
      ],
      nota: "0–4: baixo; 5–8: intermediário (imagem ou observação); 9–12: alto. Recomendado pela WSES 2020."
    },
    {
      titulo: "Pediatric Appendicitis Score (PAS, Samuel)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Dor na FID ao tossir, pular ou à percussão", "2"],
        ["Anorexia", "1"],
        ["Febre ≥ 38 °C", "1"],
        ["Náuseas ou vômitos", "1"],
        ["Dor à palpação da FID", "2"],
        ["Leucocitose > 10.000", "1"],
        ["Neutrofilia > 75%", "1"],
        ["Migração da dor para FID", "1"]
      ],
      nota: "≤ 3: baixo risco; 4–6: intermediário (USG); ≥ 7: alto risco (cirurgião pediátrico). Cortes variam entre estudos."
    }
  ],
  fontes: [
    "WSES — Jerusalem guidelines: diagnosis and treatment of acute appendicitis (Di Saverio et al., 2020)",
    "Samuel M. Pediatric Appendicitis Score (J Pediatr Surg, 2002); Alvarado A. (Ann Emerg Med, 1986); Andersson & Andersson — AIR score (World J Surg, 2008)",
    "SAGES — Guidelines for the use of laparoscopy during pregnancy (2017)",
    "CODA Collaborative — Antibiotics versus appendectomy for appendicitis (NEJM, 2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
