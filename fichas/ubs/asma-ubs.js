// Crise de asma na UBS
registrarFicha({
  id: "asma-ubs",
  caminho: "ubs",
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
    "Salbutamol spray com espaçador 4–10 jatos a cada 20 min na 1ª hora (criança: 2–6 jatos)",
    "Prednisona 40–50 mg (criança 1–2 mg/kg, máx 40 mg)",
    "O₂ se SpO₂ < 93% (adulto) / < 94% (criança)",
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
      dose: "Adulto 4–10 jatos · criança ≤ 5 anos 2–6 jatos",
      via: "Inalatória com espaçador (máscara em < 4 anos)",
      intervalo: "A cada 20 min na 1ª hora",
      duracao: "Depois conforme necessidade",
      monitorizacao: "FC, tremor",
      contraindicacoes: "—",
      ajustes: "Espaçador caseiro (garrafa PET) se não houver comercial"
    },
    {
      droga: "Prednisona / prednisolona",
      linha: "l1",
      dose: "Adulto 40–50 mg · criança 1–2 mg/kg (máx 40 mg)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Adulto 5–7 dias · criança 3–5 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "—"
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
      ajustes: "Iniciar ou intensificar na alta de toda crise"
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
  fontes: [
    "Global Initiative for Asthma (GINA) 2025",
    "Ministério da Saúde — PCDT Asma (2023)",
    "Cadernos de Atenção Básica nº 25 (Doenças respiratórias crônicas)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
