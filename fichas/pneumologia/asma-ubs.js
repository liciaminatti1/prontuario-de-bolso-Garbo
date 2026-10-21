// Crise de asma na UBS
registrarFicha({
  id: "asma-ubs",
  especialidade: "pneumologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Crise de asma na UBS",
  resumo: "Crise leve a moderada pode ser tratada na unidade; crise grave exige primeiro tratamento e remoção.",
  palavrasChave: "asma crise broncoespasmo salbutamol espacador prednisona ubs criança",
  critico: {
    tempo: "SABA com espaçador agora",
    texto: "Salbutamol 4–10 jatos a cada 20 min por 1 h + prednisona. Avaliar resposta em 1 h."
  },
  alarmes: [
    "Fala só palavras, agitação ou sonolência",
    "SpO₂ < 90% em ar ambiente",
    "Tórax silencioso, cianose",
    "Sem melhora após 1 h de tratamento",
    "Internação ou intubação prévia por asma"
  ],
  condutaInicial: [
    "Avaliar gravidade (fala, FR, FC, SpO₂, PFE)",
    "Salbutamol spray com espaçador 4–10 jatos a cada 20 min na 1ª hora (criança ≤ 5 anos: 2–6 jatos; 6–11 anos: 4–10 jatos)",
    "Crise moderada: prednisona 40–50 mg (criança 1–2 mg/kg/dia, máx 40 mg; < 2 anos máx 20 mg; 2–5 anos máx 30 mg)",
    "O₂ se SpO₂ < 92%; alvo 92–95% (≤ 5 anos: ≥ 92%)",
    "Crise grave: tratar e acionar SAMU"
  ],
  fataisExcluir: [
    "Asma quase fatal",
    "Anafilaxia",
    "Pneumotórax"
  ],
  proximaDecisao: "Boa resposta → alta com corticoide oral, corticoide inalatório e consulta em 2–7 dias. Resposta ruim ou crise grave → SAMU para PS.",
  clinica: {
    anamnese: [
      "Gatilho e tempo de crise",
      "Uso atual de corticoide inalatório e de SABA",
      "Crises e internações prévias"
    ],
    exameFisico: [
      "FR, FC, SpO₂, fala, musculatura acessória",
      "Ausculta",
      "PFE se ≥ 5–6 anos e colaborativo"
    ],
    diferenciais: [
      {
        dx: "Bronquiolite (lactentes)",
        pista: "< 2 anos, primeiro episódio, pródromo viral"
      },
      {
        dx: "Pneumonia",
        pista: "Febre, crepitações localizadas"
      },
      {
        dx: "Corpo estranho",
        pista: "Início súbito, criança pequena"
      }
    ],
    gravidade: [
      "Leve/moderada: frases, FR elevada, SpO₂ 90–95%",
      "Grave: palavras, agitação, SpO₂ < 90%"
    ]
  },
  exames: [
    {
      nome: "Pico de fluxo",
      pedido: "PFE antes e 1 h após o broncodilatador.",
      porQue: "Objetivar resposta.",
      esperar: "—",
      interpretacao: "> 60–80% do previsto → alta provável.",
      limitacoes: "Não atrasar tratamento para medir."
    }
  ],
  tratamento: [
    {
      droga: "Salbutamol spray 100 mcg com espaçador",
      linha: "l1",
      dose: "Adulto e 6–11 anos 4–10 jatos · ≤ 5 anos 2–6 jatos",
      via: "Inalatória com espaçador (máscara em < 4 anos)",
      intervalo: "A cada 20 min na 1ª hora",
      duracao: "Depois conforme necessidade",
      monitorizacao: "FC, tremor",
      contraindicacoes: "—",
      ajustes: "Espaçador caseiro (garrafa PET) se não houver comercial. Crise leve em ≥ 6 anos: budesonida-formoterol 1–2 inalações é alternativa (GINA 2026). Crise moderada/grave em criança: associar ipratrópio 80 mcg (4 jatos de 20 mcg) ou 250 mcg (20 gotas) na nebulização a cada 20 min na 1ª hora"
    },
    {
      droga: "Prednisona / prednisolona",
      linha: "l1",
      dose: "Adulto 40–50 mg · criança 1–2 mg/kg/dia (máx 40 mg; < 2 anos máx 20 mg; 2–5 anos máx 30 mg)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Adulto 5–7 dias · criança 3–5 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Prednisolona solução 3 mg/mL (ou 1 mg/mL) para criança. Não é obrigatório na crise leve"
    },
    {
      droga: "Corticoide inalatório de manutenção",
      linha: "l1",
      dose: "Ex.: budesonida 200–400 mcg ou beclometasona 200–500 mcg/dia (adulto) · ou budesonida-formoterol conforme GINA",
      via: "Inalatória",
      intervalo: "12/12h",
      duracao: "Contínuo; revisar em 1–3 meses",
      monitorizacao: "Controle, técnica inalatória",
      contraindicacoes: "—",
      ajustes: "Iniciar ou intensificar na alta de toda crise. Criança 6–11 anos (dose baixa): budesonida 100 mcg 12/12h ou beclometasona 50–100 mcg 12/12h; ≤ 5 anos: dose baixa de CI com espaçador e máscara (ex.: budesonida 100 mcg 12/12h ou beclometasona 50 mcg 12/12h)"
    }
  ],
  destino: {
    agora: [
      "Tratamento da 1ª hora na unidade",
      "Crise grave: SAMU 192"
    ],
    reavaliar: [
      "Após cada ciclo de 20 min",
      "Consulta em 2–7 dias após a crise"
    ],
    alta: [
      "Boa resposta mantida por 1 h, SpO₂ ≥ 94%, PFE > 60–80%",
      "Plano de ação por escrito"
    ],
    observacao: [
      "Resposta parcial: manter na unidade e reavaliar"
    ],
    internacao: [
      "—"
    ],
    transferencia: [
      "Crise grave, sem resposta em 1 h, ou fatores de risco para asma fatal → PS via SAMU"
    ]
  },
  prescricao: {
    hospitalar: "ATENDIMENTO NA UNIDADE (1ª HORA)\n1. Salbutamol spray 100 mcg/jato com espaçador: adulto 4 a 10 jatos; criança ≤ 5 anos 2 a 6 jatos (com máscara); a cada 20 minutos por 3 vezes.\n2. Se moderada a grave: + brometo de ipratrópio 20 mcg/jato — adulto 4 a 8 jatos, criança 4 jatos — a cada 20 minutos na 1ª hora.\n3. Prednisona 40 mg VO agora (criança: prednisolona 1–2 mg/kg, máx 40 mg).\n4. O₂ por cateter ou máscara se SpO₂ < 92%.\n5. Reavaliar fala, FR, FC, SpO₂ e PFE após cada ciclo. Grave ou sem resposta em 1 h: acionar SAMU 192 mantendo salbutamol contínuo e O₂.",
    ambulatorial: "ADULTO\nUSO ORAL\n1. Prednisona 20 mg ------------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.\nUSO INALATÓRIO\n2. Beclometasona 250 mcg spray --------------------- 1 frasco\n   Inalar 1 jato com espaçador de 12 em 12 horas, todos os dias. Enxaguar a boca depois.\n   (ou budesonida + formoterol 200/6 mcg: 1 inalação de 12 em 12 horas e 1 a mais se falta de ar, máx 12/dia)\n3. Salbutamol 100 mcg spray ------------------------ 1 frasco\n   Inalar 2 a 4 jatos com espaçador se falta de ar ou chiado (até de 4 em 4 horas).\n\nCRIANÇA (exemplo 15 kg)\nUSO ORAL\n1. Prednisolona 3 mg/mL solução ------------------ 1 frasco\n   Dar 5 mL (15 mg ≈ 1 mg/kg) pela manhã por 3 a 5 dias (máx 30 mg em 2–5 anos).\nUSO INALATÓRIO\n2. Salbutamol 100 mcg spray + espaçador com máscara -- 1 frasco\n   Fazer 2 a 4 jatos (1 por vez, 5–10 respirações cada) se chiado ou cansaço, até de 4 em 4 horas.\n3. Beclometasona 50 mcg spray ------------------- 1 frasco\n   Fazer 1 jato com espaçador e máscara de 12 em 12 horas, todos os dias."
  },
  orientacoesRetorno: [
    "Usar a bombinha sempre com espaçador; agitar antes, um jato por vez",
    "O corticoide inalatório é para todos os dias, mesmo sem sintomas; enxaguar a boca depois",
    "Seguir o plano de ação por escrito e anotar quantas vezes usa a bombinha de alívio",
    "Evitar fumaça de cigarro, poeira, mofo e animais dentro do quarto",
    "Voltar imediatamente (ou ligar 192) se falta de ar forte, dificuldade para falar ou mamar, lábios roxos, sonolência, ou se a bombinha de alívio não fizer efeito ou for necessária antes de 3–4 horas",
    "Consulta de retorno na UBS em 2 a 7 dias após a crise"
  ],
  fontes: [
    "Global Initiative for Asthma (GINA) — Global Strategy e Summary Guide (2026)",
    "Ministério da Saúde — PCDT Asma (Portaria Conjunta SAES/SECTICS nº 32/2023; atualização de 2026 relatada por nota estadual, conferir no DOU)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 25: Doenças respiratórias crônicas (2010)"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
