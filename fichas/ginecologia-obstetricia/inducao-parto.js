// Indução do trabalho de parto
registrarFicha({
  id: "inducao-parto",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Indução do trabalho de parto (Bishop, misoprostol, sonda de Foley, ocitocina)",
  resumo: "Quando induzir, como avaliar o colo (índice de Bishop) e como amadurecer e induzir com misoprostol, sonda de Foley ou ocitocina, com as contraindicações e a vigilância de taquissistolia.",
  palavrasChave: "inducao do parto inducao maturacao cervical bishop misoprostol prostokos sonda de foley balao ocitocina pos datismo 41 semanas rotura prematura de membranas taquissistolia hiperestimulacao cesarea anterior",
  critico: {
    tempo: "Sem misoprostol se cesárea prévia",
    texto: "Útero com cicatriz (cesárea ou miomectomia com entrada na cavidade): não usar misoprostol no 3º trimestre com feto vivo, pelo risco de rotura. Use sonda de Foley e/ou ocitocina com cautela."
  },
  alarmes: [
    "Taquissistolia (> 5 contrações em 10 min por 30 min) ou hipertonia",
    "Alteração do BCF ou da cardiotocografia durante a indução",
    "Dor contínua, sangramento, subida da apresentação (rotura uterina)",
    "Febre ou líquido com odor fétido (corioamnionite)",
    "Prolapso de cordão após amniotomia ou expulsão do balão"
  ],
  condutaInicial: [
    "Confirmar a indicação e a idade gestacional (DUM + USG precoce); registrar consentimento",
    "Excluir contraindicações ao parto vaginal e à droga escolhida",
    "CTG de entrada (vitalidade fetal) e apresentação cefálica confirmada",
    "Calcular o índice de Bishop: ≤ 6 = colo desfavorável → maturação (misoprostol ou Foley); > 6 = favorável → ocitocina ± amniotomia",
    "Vigiar BCF e contrações após cada dose; reavaliar Bishop antes de cada nova dose",
    "Ocitocina só depois de pelo menos 4 h da última dose de misoprostol vaginal (6 h em alguns protocolos)"
  ],
  fataisExcluir: [
    "Rotura uterina",
    "Taquissistolia com sofrimento fetal",
    "Prolapso de cordão",
    "Placenta prévia / vasa prévia não diagnosticada"
  ],
  proximaDecisao: "Sem entrar em fase ativa após o ciclo completo de maturação e ocitocina com bolsa rota (falha de indução, avaliada após 12–18 h de ocitocina com bolsa rota, conforme protocolo) → nova tentativa, outro método ou cesárea, decidido com a gestante. Fase latente prolongada sozinha não é falha.",
  clinica: {
    anamnese: [
      "Indicação e urgência; idade gestacional confiável",
      "Cesárea ou cirurgia uterina anterior (tipo de incisão)",
      "Paridade, partos anteriores, alergias, asma (misoprostol é seguro na asma)",
      "Movimentos fetais, perda de líquido, sangramento"
    ],
    exameFisico: [
      "PA, temperatura; altura uterina e apresentação (Leopold)",
      "Toque vaginal para Bishop; especular se bolsa rota",
      "USG se dúvida de apresentação, líquido ou placenta"
    ],
    diferenciais: [
      { dx: "Gestação ≥ 41 semanas", pista: "Indicação mais comum; oferecer indução a partir de 41 semanas" },
      { dx: "Rotura prematura de membranas ≥ 37 semanas", pista: "Indução imediata ou em até 24 h reduz infecção" },
      { dx: "Condição materna ou fetal", pista: "Pré-eclâmpsia ≥ 37 semanas, hipertensão gestacional, DMG/DM, RCF, oligoâmnio, óbito fetal" }
    ],
    gravidade: [
      "Contraindicações absolutas (indução e parto vaginal): placenta prévia, vasa prévia, apresentação transversa, prolapso de cordão, herpes genital ativo, cesárea corporal (clássica) prévia, rotura uterina prévia, sofrimento fetal agudo",
      "Contraindicação ao misoprostol: cicatriz uterina com feto vivo no 3º trimestre, hipersensibilidade",
      "Cautela: grande multípara, gemelar, polidrâmnio, apresentação pélvica (indução individualizada)"
    ]
  },
  exames: [
    {
      nome: "Vitalidade fetal antes e durante",
      pedido: "Cardiotocografia anteparto antes de iniciar a indução e após cada dose de misoprostol (ou se contrações); CTG contínua durante a ocitocina.",
      porQue: "Garantir vitalidade e detectar taquissistolia com alteração do BCF.",
      esperar: "CTG categoria I.",
      interpretacao: "CTG alterada antes de iniciar: reavaliar a via de parto.",
      limitacoes: "—"
    },
    {
      nome: "Ultrassonografia (se dúvida)",
      pedido: "USG obstétrica com ILA e localização placentária.",
      porQue: "Confirmar apresentação, líquido e placenta.",
      esperar: "Cefálica, placenta fora do segmento inferior.",
      interpretacao: "Placenta prévia ou vasa prévia: contraindicam indução.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Misoprostol 25 mcg (comprimido vaginal)",
      linha: "l1",
      dose: "25 mcg",
      via: "Vaginal (fundo de saco posterior)",
      intervalo: "A cada 6 h",
      duracao: "Até colo favorável ou fase ativa; número máximo de doses conforme protocolo local",
      monitorizacao: "BCF e contrações 30 min após cada dose e depois a cada 1 h; CTG antes da dose seguinte",
      contraindicacoes: "Cicatriz uterina com feto vivo no 3º trimestre; taquissistolia; CTG alterada",
      ajustes: "Não repetir se ≥ 3 contrações em 10 min, Bishop ≥ 6 ou fase ativa. OMS 2022: alternativa misoprostol oral 25 mcg a cada 2 h. Óbito fetal: doses diferentes conforme idade gestacional (ver protocolo)"
    },
    {
      droga: "Sonda de Foley (balão intracervical)",
      linha: "l1",
      dose: "Sonda Foley 14–18 Fr, balão com 30–60 mL de SF 0,9%",
      via: "Intracervical, acima do orifício interno",
      intervalo: "—",
      duracao: "Até expulsão espontânea ou retirada em 12–24 h",
      monitorizacao: "BCF; tracionar levemente e fixar na coxa",
      contraindicacoes: "Placenta baixa, sangramento, infecção ativa, bolsa rota (relativa)",
      ajustes: "Método preferido com cesárea anterior; menor taquissistolia que o misoprostol; pode ser feito em ambulatório em alguns protocolos. Pode ser combinado ao misoprostol"
    },
    {
      droga: "Ocitocina",
      linha: "l1",
      dose: "Início 1–2 mUI/min; aumentar 1–2 mUI/min a cada 30–40 min",
      via: "IV em bomba de infusão",
      intervalo: "Contínua",
      duracao: "Até o parto",
      monitorizacao: "CTG contínua; contrações (meta 3–5 em 10 min); diurese e sódio se uso prolongado",
      contraindicacoes: "As do parto vaginal; taquissistolia; sofrimento fetal",
      ajustes: "5 UI em 500 mL de SG 5% ou SF 0,9% (10 mUI/mL): 1 mUI/min = 6 mL/h. Máximo usual 20 mUI/min (até 32 conforme protocolo). Taquissistolia: reduzir ou parar"
    },
    {
      droga: "Amniotomia",
      linha: "adj",
      dose: "—",
      via: "Vaginal",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Cor do líquido, BCF logo após",
      contraindicacoes: "Apresentação alta e móvel (risco de prolapso), HIV com carga viral detectável, herpes",
      ajustes: "Com colo favorável, combinada à ocitocina"
    },
    {
      droga: "Terbutalina (taquissistolia com alteração do BCF)",
      linha: "adj",
      dose: "0,25 mg",
      via: "SC",
      intervalo: "Dose única; pode repetir conforme protocolo",
      duracao: "—",
      monitorizacao: "FC materna (evitar se > 120 bpm), glicemia",
      contraindicacoes: "Cardiopatia, taquicardia materna",
      ajustes: "Junto com: suspender ocitocina, decúbito lateral esquerdo, hidratação; retirar resíduo de misoprostol se possível"
    }
  ],
  destino: {
    agora: ["Indução em unidade com centro obstétrico e possibilidade de cesárea"],
    reavaliar: ["Bishop antes de cada dose", "BCF 30/30 min durante maturação; CTG contínua com ocitocina"],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["Toda indução hospitalar"],
    transferencia: ["Unidade sem centro cirúrgico ou com gestante de alto risco: regular para maternidade de referência"]
  },
  prescricao: {
    hospitalar: "INDUÇÃO DO PARTO — COLO DESFAVORÁVEL (Bishop ≤ 6), SEM CESÁREA ANTERIOR\n1. Dieta leve.\n2. CTG antes de iniciar.\n3. Misoprostol 25 mcg — 1 comprimido via vaginal no fundo de saco posterior, de 6 em 6 horas. Não repetir se ≥ 3 contrações em 10 minutos, Bishop ≥ 6, fase ativa ou CTG alterada. Reavaliar Bishop antes de cada dose.\n4. BCF e dinâmica uterina 30 min após cada dose e depois de 1/1 h.\n5. Avisar plantonista se: > 5 contrações em 10 min, BCF < 110 ou > 160, sangramento, dor contínua, perda de líquido.\n\nCESÁREA ANTERIOR (ou alternativa ao misoprostol)\n6. Sonda Foley 16 Fr inserida pelo canal cervical; balão com 30–60 mL de SF 0,9%; tracionar e fixar na coxa. Retirar se não expelida em 12–24 h.\n\nCOLO FAVORÁVEL (Bishop > 6) — OCITOCINA (≥ 4 h após o último misoprostol)\n7. SG 5% 500 mL + Ocitocina 5 UI (10 mUI/mL) IV em bomba: iniciar 6–12 mL/h (1–2 mUI/min); aumentar 6–12 mL/h a cada 30–40 min até 3–5 contrações em 10 min; máximo 120 mL/h (20 mUI/min) salvo protocolo.\n8. Cardiotocografia contínua.\n9. Amniotomia quando apresentação fixa.\n\nTAQUISSISTOLIA COM ALTERAÇÃO DO BCF\n10. Suspender ocitocina; decúbito lateral esquerdo; SF 0,9% 500 mL IV; Terbutalina 0,25 mg SC; chamar obstetra."
  },
  orientacoesRetorno: [
    "A indução pode levar 1 a 3 dias, principalmente no 1º parto; isso é esperado",
    "Avise a equipe se as contrações ficarem muito fortes e sem intervalo, se perder líquido ou sangue, ou se o bebê mexer menos",
    "Você pode caminhar, comer leve e ter acompanhante durante a indução",
    "A partir de 41 semanas, converse com a equipe sobre indução; não espere passar de 42 semanas"
  ],
  tabelas: [
    {
      titulo: "Índice de Bishop",
      colunas: ["Parâmetro", "0", "1", "2", "3"],
      linhas: [
        ["Dilatação (cm)", "0", "1–2", "3–4", "≥ 5"],
        ["Apagamento (%)", "0–30", "40–50", "60–70", "≥ 80"],
        ["Altura (De Lee)", "−3", "−2", "−1 / 0", "+1 / +2"],
        ["Consistência", "Firme", "Média", "Amolecida", "—"],
        ["Posição do colo", "Posterior", "Intermediária", "Anterior (centralizado)", "—"]
      ],
      nota: "≤ 6: colo desfavorável (maturação). > 6 (alguns usam ≥ 8): colo favorável, ocitocina com boa chance de sucesso."
    },
    {
      titulo: "Indicações frequentes e momento",
      colunas: ["Indicação", "Momento usual"],
      linhas: [
        ["Gestação prolongada", "Oferecer a partir de 41 semanas (antes de 42)"],
        ["Rotura prematura de membranas a termo", "Indução imediata (ou até 24 h)"],
        ["Pré-eclâmpsia sem gravidade / hipertensão gestacional", "37 semanas"],
        ["Pré-eclâmpsia com gravidade", "Após estabilização (≥ 34 semanas) ou conforme gravidade"],
        ["DMG em dieta bem controlada", "Até 40–41 semanas"],
        ["DMG/DM com insulina ou mal controlado", "37–39 semanas conforme controle"],
        ["Óbito fetal", "Após diagnóstico, conforme desejo e condição clínica"]
      ],
      nota: "Momento exato depende do caso; ver fichas específicas (Hipertensão na gestação, Diabetes na gestação, Restrição de crescimento fetal)."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde/CONITEC — Diretriz Nacional de Assistência ao Parto Normal (2017)",
    "OMS — WHO recommendations on induction of labour, at or beyond term (2022)",
    "FEBRASGO — Protocolo: Indução do trabalho de parto (2021)",
    "FIGO — Misoprostol-only recommended regimens (2017; atualização 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
