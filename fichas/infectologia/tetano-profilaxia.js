// Profilaxia do tétano em ferimentos
registrarFicha({
  id: "tetano-profilaxia",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Tétano: profilaxia em ferimentos (vacina, IGHAT e SAT)",
  resumo: "Conduta diante de qualquer ferimento: limpeza, classificação do risco e decisão entre vacina, imunoglobulina humana antitetânica (IGHAT) ou soro antitetânico (SAT) conforme o histórico vacinal.",
  palavrasChave: "tetano antitetanica vacina dt dtpa reforco ighat imunoglobulina sat soro antitetanico ferimento corte prego mordedura queimadura profilaxia",
  critico: {
    tempo: "Limpeza do ferimento + vacina hoje",
    texto: "Lavar e desbridar o ferimento é a medida mais importante. Histórico incerto ou < 3 doses com ferimento de alto risco: vacina + IGHAT (ou SAT) em locais diferentes, no mesmo atendimento."
  },
  alarmes: [
    "Trismo, rigidez de nuca ou abdome, espasmos, riso sardônico, disfagia (tétano instalado — emergência, internação em UTI)",
    "Ferimento profundo, com tecido desvitalizado, corpo estranho, sujeira, fezes ou terra",
    "Fratura exposta, queimadura extensa, mordedura, esmagamento, ferimento por arma de fogo",
    "Sinais de infecção local (celulite, abscesso)",
    "Imunodeprimido, desnutrido grave ou idoso com ferimento de alto risco"
  ],
  conduta: [
    "Lavar abundantemente com água e sabão ou SF 0,9%; remover corpo estranho e tecido desvitalizado; desbridar se necessário",
    "Classificar o ferimento: limpo/superficial (baixo risco) ou de alto risco (profundo, sujo, puntiforme, com corpo estranho, mordedura, queimadura, fratura exposta, esmagamento, arma de fogo)",
    "Conferir o cartão vacinal: número de doses e data da última",
    "Aplicar a vacina e/ou IGHAT/SAT conforme a tabela; IGHAT/SAT em grupo muscular diferente da vacina",
    "Completar o esquema vacinal depois (3 doses: 0, 60 e 120 dias — intervalo mínimo de 30 dias) e reforço a cada 10 anos",
    "Antibiótico não previne tétano; usar só se ferimento infectado ou mordedura com indicação (ver mordeduras/raiva)",
    "Mordedura animal: avaliar também profilaxia da raiva"
  ],
  exames: [
    "Nenhum exame é necessário para a profilaxia",
    "RX se suspeita de corpo estranho radiopaco ou fratura"
  ],
  diferenciais: [
    "Se houver rigidez/espasmos: reação distônica a medicamentos (metoclopramida, haloperidol), intoxicação por estricnina, tetania por hipocalcemia, meningite, abscesso dentário com trismo"
  ],
  tratamento: [
    {
      droga: "Vacina dT (difteria e tétano adulto) — ≥ 7 anos",
      linha: "l1",
      dose: "0,5 mL",
      via: "IM (deltoide)",
      intervalo: "Esquema: 3 doses (0, 60 e 120 dias) · Reforço a cada 10 anos (antecipar conforme tabela)",
      duracao: "Dose única no atendimento + completar esquema",
      monitorizacao: "Dor local, febre baixa",
      contraindicacoes: "Reação anafilática a dose anterior",
      ajustes: "< 7 anos: usar penta/DTP conforme calendário infantil. Gestante: dTpa a partir de 20 semanas em toda gestação (completar com dT se esquema incompleto). Profissionais de saúde e de berçário: dTpa conforme PNI"
    },
    {
      droga: "Imunoglobulina humana antitetânica (IGHAT)",
      linha: "l1",
      dose: "250 UI (adulto e criança)",
      via: "IM, em grupo muscular diferente da vacina",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Reações locais",
      contraindicacoes: "—",
      ajustes: "Preferir IGHAT em imunodeprimidos, alérgicos a soro heterólogo e recém-nascidos de mães sem vacinação. Disponível nos CRIE/hospitais de referência"
    },
    {
      droga: "Soro antitetânico (SAT) — heterólogo",
      linha: "alt",
      dose: "5.000 UI (adulto e criança)",
      via: "IM (glúteo ou vasto lateral), em local diferente da vacina",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Observar por pelo menos 1–2 h após (risco de anafilaxia e doença do soro)",
      contraindicacoes: "Reação prévia a soro heterólogo (usar IGHAT)",
      ajustes: "Aplicar em serviço preparado para atender anafilaxia (adrenalina disponível). Não é necessário teste de sensibilidade"
    }
  ],
  prescricao: {
    ambulatorial: "PROFILAXIA DO TÉTANO — no atendimento\n1. Limpeza do ferimento com SF 0,9% em jato e sabão neutro; desbridamento se necessário.\n2. Vacina dT (dupla adulto) 0,5 mL IM no deltoide — agora (se indicada pela tabela).\n3. Imunoglobulina humana antitetânica (IGHAT) 250 UI IM, em outro grupo muscular (vasto lateral ou glúteo) — agora (se indicada).\n   ou Soro antitetânico (SAT) 5.000 UI IM, em outro grupo muscular, com observação de 1–2 h.\n4. Agendar 2ª e 3ª doses de dT na sala de vacina (60 e 120 dias), se esquema incompleto.\n\nUSO ORAL (se dor)\n5. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor (criança: 10–15 mg/kg/dose).\n\nCriança < 7 anos: vacina conforme calendário (penta ou DTP); IGHAT 250 UI ou SAT 5.000 UI, mesmas doses do adulto."
  },
  orientacoesRetorno: [
    "Manter o ferimento limpo e seco; lavar com água e sabão 1 a 2 vezes ao dia",
    "Voltar se: vermelhidão que aumenta, pus, febre, dor forte",
    "Procurar emergência imediatamente se: dificuldade para abrir a boca, rigidez no pescoço ou na barriga, espasmos, dificuldade para engolir (mesmo semanas depois)",
    "Após SAT: voltar se manchas na pele, coceira, inchaço, falta de ar (precoce) ou febre, dor nas juntas e manchas 1–2 semanas depois (doença do soro)",
    "Completar as doses da vacina nas datas marcadas e guardar o cartão"
  ],
  encaminhar: [
    "IGHAT: CRIE ou hospital de referência (pedido conforme fluxo local)",
    "Ferimento extenso, fratura exposta, queimadura grave → PS/cirurgia",
    "Suspeita de tétano instalado → emergência hospitalar/UTI, notificação compulsória imediata"
  ],
  tabelas: [
    {
      titulo: "Conduta conforme histórico vacinal e tipo de ferimento (MS)",
      colunas: ["Histórico de vacinação", "Ferimento limpo/superficial", "Ferimento de alto risco"],
      linhas: [
        ["Incerto ou < 3 doses", "Vacina (iniciar/completar). Sem IGHAT/SAT", "Vacina + IGHAT ou SAT"],
        ["≥ 3 doses, última < 5 anos", "Nada", "Nada (só limpeza)"],
        ["≥ 3 doses, última entre 5 e 10 anos", "Nada", "1 reforço de vacina*"],
        ["≥ 3 doses, última > 10 anos", "1 reforço de vacina", "1 reforço de vacina*"]
      ],
      nota: "* Imunodeprimido, desnutrido grave ou idoso: além do reforço, IGHAT ou SAT (preferir IGHAT em imunodeprimidos). Sempre limpeza e desbridamento."
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed.: Tétano acidental (2023–2024)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed. (2023)",
    "Ministério da Saúde — Calendário Nacional de Vacinação/PNI (2025)",
    "SES-AL — Nota Informativa SEVISA 07/2025: indicações do soro e da imunoglobulina antitetânica (2025)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
