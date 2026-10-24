// Endometriose
registrarFicha({
  id: "endometriose",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Endometriose",
  resumo: "Tecido semelhante ao endométrio fora do útero (peritônio, ovários, septo retovaginal, intestino, bexiga). Dor pélvica cíclica progressiva, dismenorreia intensa, dispareunia profunda, disquezia e disúria menstruais, infertilidade. Tratamento hormonal empírico pode começar na UBS sem confirmação cirúrgica.",
  palavrasChave: "endometriose dor pelvica cronica dismenorreia dispareunia profunda disquezia endometrioma cisto de chocolate infertilidade adenomiose dienogeste desogestrel medroxiprogesterona anticoncepcional continuo goserrelina analogo gnrh videolaparoscopia",
  critico: {
    tempo: "Tratar empírico; não esperar cirurgia",
    texto: "Suspeita clínica basta para iniciar progestagênio ou anticoncepcional contínuo + analgesia. Laparoscopia não é necessária para começar o tratamento (FEBRASGO, ESHRE 2022)."
  },
  alarmes: [
    "Massa anexial com características suspeitas, sobretudo após 40–45 anos",
    "Sangramento retal ou hematúria cíclicos (endometriose intestinal/vesical profunda)",
    "Sintomas obstrutivos intestinais ou hidronefrose",
    "Dor aguda intensa com febre ou instabilidade (endometrioma roto, torção)"
  ],
  conduta: [
    "Anamnese dirigida: dismenorreia progressiva, dor pélvica acíclica, dispareunia profunda, disquezia/disúria cíclicas, infertilidade",
    "Exame: nódulos ou dor em fundo de saco posterior, útero fixo, massa anexial",
    "USG transvaginal (idealmente com preparo intestinal, por examinador experiente) ou RM pélvica para endometrioma e doença profunda; exames normais não excluem",
    "Excluir gravidez, DIP, IST (clamídia/gonorreia) e outras causas de dor pélvica",
    "1ª linha: AINE na dor + hormonal contínuo (progestagênio ou anticoncepcional combinado contínuo, sem pausa)",
    "Reavaliar em 3 meses; sem melhora ou efeitos intoleráveis → ginecologia (análogo de GnRH pelo PCDT, cirurgia)",
    "Desejo de gestação ou infertilidade: não usar hormônio contraceptivo; encaminhar precocemente (ver infertilidade)",
    "Abordar dor crônica: atividade física, fisioterapia pélvica, saúde mental; evitar opioide crônico"
  ],
  exames: [
    "USG transvaginal: 'Ultrassonografia transvaginal com preparo intestinal — pesquisa de endometriose profunda e endometrioma'",
    "RM de pelve (protocolo para endometriose) se USG inconclusiva e suspeita de doença profunda (nível especializado)",
    "Beta-hCG; pesquisa de clamídia/gonorreia se risco",
    "CA-125 não serve para diagnóstico nem rastreio"
  ],
  diferenciais: [
    "Dismenorreia primária (ver dismenorreia)",
    "Adenomiose",
    "DIP crônica / aderências",
    "Síndrome do intestino irritável, cistite intersticial",
    "Dor miofascial pélvica"
  ],
  tratamento: [
    {
      droga: "Desogestrel",
      linha: "l1",
      dose: "75 mcg",
      via: "VO",
      intervalo: "1 vez ao dia, contínuo",
      duracao: "Longo prazo, reavaliar em 3 meses",
      monitorizacao: "Dor, padrão de sangramento",
      contraindicacoes: "Câncer de mama atual, sangramento genital inexplicado",
      ajustes: "Alternativas: dienogeste 2 mg/dia (específico para endometriose; geralmente não disponível no SUS), noretisterona, AMP 150 mg IM trimestral, SIU-LNG"
    },
    {
      droga: "Anticoncepcional combinado contínuo (levonorgestrel 0,15 mg + etinilestradiol 0,03 mg)",
      linha: "l1",
      dose: "1 comprimido",
      via: "VO",
      intervalo: "1 vez ao dia, sem pausa entre as cartelas",
      duracao: "Longo prazo",
      monitorizacao: "PA, dor, escapes",
      contraindicacoes: "Critérios de elegibilidade OMS categoria 3–4 (enxaqueca com aura, TEV, ≥ 35 anos fumante etc.)",
      ajustes: "Escape persistente: pausa de 4 dias e reinício"
    },
    {
      droga: "Acetato de medroxiprogesterona de depósito",
      linha: "alt",
      dose: "150 mg",
      via: "IM",
      intervalo: "A cada 3 meses",
      duracao: "Longo prazo",
      monitorizacao: "Peso, densidade óssea se uso muito prolongado",
      contraindicacoes: "Câncer de mama, sangramento inexplicado",
      ajustes: "Retorno da fertilidade pode demorar meses após parar"
    },
    {
      droga: "Ibuprofeno ou naproxeno",
      linha: "adj",
      dose: "Ibuprofeno 400–600 mg ou naproxeno 500 mg",
      via: "VO",
      intervalo: "Ibuprofeno 8/8 h; naproxeno 12/12 h",
      duracao: "Nos dias de dor",
      monitorizacao: "Sintomas gástricos, função renal",
      contraindicacoes: "Úlcera, DRC, asma sensível a AINE",
      ajustes: "Associar ao tratamento hormonal"
    },
    {
      droga: "Análogo de GnRH (gosserrelina 3,6 mg)",
      linha: "alt",
      dose: "3,6 mg",
      via: "SC",
      intervalo: "A cada 28 dias",
      duracao: "Até 6 meses (mais com add-back)",
      monitorizacao: "Sintomas de hipoestrogenismo, massa óssea",
      contraindicacoes: "Gestação, amamentação",
      ajustes: "Prescrição pelo especialista, pelo PCDT Endometriose do MS (gosserrelina, leuprorrelina, triptorrelina). Add-back com estrogênio + progestagênio ou tibolona em uso prolongado"
    }
  ],
  prescricao: {
    ambulatorial: "ENDOMETRIOSE — TRATAMENTO EMPÍRICO\nUSO ORAL\n1. Desogestrel 75 mcg ------------------------------ 3 cartelas\n   Tomar 1 comprimido ao dia, todos os dias, sem pausa.\n   OU Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg --- 3 cartelas\n   Tomar 1 comprimido ao dia, emendando as cartelas sem pausa.\n2. Ibuprofeno 600 mg ------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, nos dias de dor (até 5 dias seguidos).\n3. Dipirona 500 mg --------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n\nOPÇÃO INJETÁVEL\n4. Acetato de medroxiprogesterona 150 mg/mL --------- 1 ampola\n   Aplicar 1 ampola IM profunda a cada 3 meses."
  },
  orientacoesRetorno: [
    "Endometriose é uma doença crônica com tratamento; o objetivo é controlar a dor e preservar a fertilidade",
    "O remédio hormonal deve ser tomado todos os dias, sem pausa; pequenos sangramentos no início são comuns",
    "Atividade física regular e fisioterapia pélvica ajudam na dor",
    "Voltar imediatamente se: dor muito forte com febre ou desmaio, sangue nas fezes ou na urina",
    "Retornar em 3 meses para avaliar a resposta"
  ],
  encaminhar: [
    "Ginecologia: falha do tratamento clínico em 3–6 meses, endometrioma, suspeita de doença profunda (intestinal, vesical, ureteral), infertilidade",
    "Reprodução humana: infertilidade associada (ver infertilidade)",
    "Urgência: hidronefrose, obstrução intestinal, massa com suspeita de malignidade"
  ],
  fontes: [
    "FEBRASGO — Endometriose. Protocolos FEBRASGO (2021)",
    "Ministério da Saúde — PCDT Endometriose (Portaria SAS/MS nº 879/2016)",
    "ESHRE — Endometriosis Guideline (2022)",
    "Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
