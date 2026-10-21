// Asma na criança: crise e manutenção
registrarFicha({
  id: "asma-crianca",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Asma na criança: crise e tratamento de manutenção",
  resumo: "Sibilância recorrente, tosse noturna ou com exercício e dispneia que melhoram com broncodilatador. Tratar a crise com salbutamol com espaçador e corticoide oral; prevenir com corticoide inalatório conforme a etapa do GINA por faixa etária (≤ 5 anos e 6–11 anos).",
  palavrasChave: "asma crianca pediatria sibilancia chiado bronquite crise broncoespasmo salbutamol espacador beclometasona budesonida formoterol montelucaste prednisolona gina etapas controle",
  critico: {
    tempo: "Salbutamol com espaçador já",
    texto: "Crise: salbutamol 100 mcg com espaçador a cada 20 min na 1ª hora (≤ 5 anos 2–6 jatos; 6–11 anos 4–10 jatos), O₂ se SpO₂ < 94% e prednisolona 1–2 mg/kg. SABA isolado sem corticoide inalatório não é mais tratamento de manutenção (GINA 2026)."
  },
  alarmes: [
    "Não consegue falar ou mamar, agitação ou sonolência, confusão",
    "SpO₂ < 92% em ar ambiente, cianose",
    "Tórax silencioso, tiragem intensa, uso de musculatura acessória",
    "FR muito elevada para a idade ou FC > 180 bpm (0–3 anos) / > 150 bpm (4–5 anos)",
    "Sem resposta a 1 hora de broncodilatador",
    "Crise grave prévia com UTI ou intubação, uso frequente de salbutamol, internação no último ano"
  ],
  condutaInicial: [
    "Avaliar gravidade: fala, consciência, FR, FC, SpO₂, tiragem",
    "Salbutamol spray com espaçador (máscara se < 4 anos) a cada 20 min por 1 hora",
    "O₂ para SpO₂ 94–98%",
    "Prednisolona VO 1–2 mg/kg (crise moderada/grave ou resposta incompleta)",
    "Crise moderada/grave: associar ipratrópio nas 3 primeiras doses; grave ou sem resposta → SAMU/emergência"
  ],
  fataisExcluir: [
    "Crise grave com insuficiência respiratória iminente",
    "Pneumotórax",
    "Corpo estranho aspirado",
    "Anafilaxia (sibilância com urticária, hipotensão, exposição a alérgeno)",
    "Pneumonia ou bronquiolite (lactente)"
  ],
  proximaDecisao: "Boa resposta em 1 h (SpO₂ ≥ 94%, sem tiragem, fala normal) → alta com prednisolona por 3–5 dias, iniciar ou subir o corticoide inalatório e retorno em 1 semana. Resposta incompleta ou grave → transferir/internar.",
  clinica: {
    anamnese: [
      "Episódios de chiado, tosse noturna, cansaço com exercício ou riso; gatilhos (viroses, poeira, fumaça, mofo, animais, exercício)",
      "Frequência de sintomas diurnos, despertares noturnos, uso de salbutamol e limitação de atividades nas últimas 4 semanas (controle)",
      "Crises com corticoide oral, idas ao PS e internações no último ano",
      "Técnica inalatória e adesão (pedir para demonstrar)",
      "Atopia pessoal/familiar (rinite, dermatite), tabagismo passivo",
      "Lactente: chiado só com viroses ou também entre elas"
    ],
    exameFisico: [
      "FR, FC, SpO₂, capacidade de falar, consciência",
      "Tiragem, uso de musculatura acessória, sibilos e entrada de ar",
      "Sinais de rinite alérgica (prega nasal, olheiras, mucosa pálida), dermatite",
      "Peso e estatura (crescimento com corticoide inalatório)",
      "Pico de fluxo em ≥ 6 anos se disponível"
    ],
    diferenciais: [
      { dx: "Bronquiolite viral", pista: "< 2 anos, 1º episódio, crepitações e sibilos difusos" },
      { dx: "Corpo estranho", pista: "Início súbito, engasgo, sibilo localizado" },
      { dx: "Refluxo/aspiração, fibrose cística, displasia broncopulmonar", pista: "Sintomas desde o nascimento, déficit de crescimento, infecções de repetição" },
      { dx: "Tuberculose", pista: "Tosse persistente, febre, contato" },
      { dx: "Disfunção de cordas vocais / respiração disfuncional", pista: "Adolescente, estridor inspiratório, sem resposta ao broncodilatador" }
    ],
    gravidade: [
      "Crise ≤ 5 anos — grave se qualquer um: não consegue falar/beber, cianose, SpO₂ < 92%, FC > 180 (0–3 anos) ou > 150 (4–5 anos), confusão/sonolência, tórax silencioso",
      "Crise 6–11 anos — leve a moderada: fala frases, prefere sentar, não agitada, SpO₂ 90–95%; grave: fala palavras, curvada para frente, agitada, uso de musculatura acessória, SpO₂ < 90%",
      "Controle (últimas 4 semanas): sintomas diurnos frequentes, despertar noturno, necessidade de resgate frequente, limitação de atividade — 0 itens = controlada; 1–2 = parcialmente; 3–4 = não controlada (GINA)",
      "Risco futuro de crises: crise grave prévia, mau controle, adesão ruim, técnica errada, tabagismo passivo"
    ]
  },
  exames: [
    {
      nome: "Espirometria com broncodilatador (≥ 5–6 anos)",
      pedido: "Espirometria com prova broncodilatadora.",
      porQue: "Confirmar limitação variável ao fluxo aéreo e acompanhar.",
      esperar: "VEF1/CVF reduzido e resposta ao broncodilatador.",
      interpretacao: "Aumento do VEF1 > 12% do previsto após broncodilatador sugere asma. Normal não exclui (fora de crise).",
      limitacoes: "Difícil em < 5 anos; diagnóstico nessa idade é clínico (padrão de sintomas + resposta ao teste terapêutico)."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA — apenas se 1º episódio grave, suspeita de pneumonia, pneumotórax, corpo estranho ou diagnóstico duvidoso.",
      porQue: "Excluir diferenciais e complicações.",
      esperar: "Hiperinsuflação na crise.",
      interpretacao: "Consolidação focal, pneumotórax, assimetria de aeração → conduta específica.",
      limitacoes: "Não é necessário em crise típica."
    },
    {
      nome: "Gasometria e eletrólitos (crise grave hospitalar)",
      pedido: "Gasometria venosa ou arterial, potássio, glicemia — se crise grave sem resposta.",
      porQue: "Avaliar hipercapnia e efeitos do salbutamol (hipocalemia, hiperglicemia).",
      esperar: "Hipocapnia na crise moderada.",
      interpretacao: "PaCO₂ normal ou alta em criança taquipneica = fadiga → UTI.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Salbutamol 100 mcg/jato spray com espaçador",
      linha: "l1",
      dose: "Crise: ≤ 5 anos 2–6 jatos · 6–11 anos 4–10 jatos · Resgate em casa: 2–4 jatos",
      via: "Inalatória com espaçador (máscara facial em < 4 anos; bocal a partir de 4–6 anos)",
      intervalo: "Crise: a cada 20 min na 1ª hora, depois de 1/1 h a 4/4 h conforme resposta · Resgate: se sintomas",
      duracao: "Conforme crise",
      monitorizacao: "FC, tremor, SpO₂, resposta clínica; potássio se doses repetidas",
      contraindicacoes: "—",
      ajustes: "1 jato por vez, 5–10 respirações (ou 10 s) após cada jato. Nebulização (solução 5 mg/mL): 0,15 mg/kg = 0,03 mL/kg (mín 2,5 mg = 0,5 mL; máx 5 mg = 1 mL) em 3–4 mL de SF, com O₂ 6–8 L/min — reservar para crise grave ou sem espaçador"
    },
    {
      droga: "Brometo de ipratrópio",
      linha: "adj",
      dose: "Spray 20 mcg/jato: 4 jatos (80 mcg) · Nebulização 0,25 mg/mL: ≤ 5 anos 250 mcg (20 gotas = 1 mL); 6–11 anos 250–500 mcg",
      via: "Inalatória",
      intervalo: "A cada 20 min na 1ª hora (3 doses), junto com o salbutamol",
      duracao: "1ª hora da crise moderada/grave",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não manter após a 1ª hora"
    },
    {
      droga: "Prednisolona (ou prednisona)",
      linha: "l1",
      dose: "1–2 mg/kg/dia — máx 20 mg (< 2 anos), 30 mg (2–5 anos), 40 mg (6–11 anos)",
      via: "VO (1 vez pela manhã)",
      intervalo: "1 vez ao dia",
      duracao: "3–5 dias (sem necessidade de desmame)",
      monitorizacao: "Glicemia em diabéticos, vômitos",
      contraindicacoes: "Varicela ativa (relativa)",
      ajustes: "Solução 3 mg/mL ou 1 mg/mL. Se vômitos ou grave: metilprednisolona 1–2 mg/kg/dia IV dividida 12/12 h (máx 60 mg/dia) ou dexametasona"
    },
    {
      droga: "Corticoide inalatório (manutenção) — beclometasona ou budesonida",
      linha: "l1",
      dose: "Dose baixa diária — ≤ 5 anos: beclometasona HFA 100 mcg/dia; budesonida nebulizada 500 mcg/dia · 6–11 anos: beclometasona HFA 100–200 mcg/dia; budesonida inalatória 100–200 mcg/dia. Dose média 6–11 anos: beclometasona > 200–400 mcg/dia; budesonida > 200–400 mcg/dia",
      via: "Inalatória com espaçador (spray) ou inalador de pó (≥ 6 anos, se fluxo adequado)",
      intervalo: "12/12 h (ou 1×/dia em dose baixa de budesonida)",
      duracao: "Contínuo; reavaliar a cada 1–3 meses e reduzir após 3 meses de controle",
      monitorizacao: "Controle, técnica, adesão, crescimento (estatura a cada consulta), candidíase oral",
      contraindicacoes: "—",
      ajustes: "SUS: beclometasona spray 50 mcg e 250 mcg; budesonida cápsula inalatória 200 mcg. Enxaguar a boca após o uso"
    },
    {
      droga: "Budesonida + formoterol (6–11 anos, etapas 3–4; resgate anti-inflamatório)",
      linha: "alt",
      dose: "Dose muito baixa/baixa (ex.: budesonida-formoterol 100/6 mcg): manutenção 1 inalação 1–2×/dia + 1 inalação se sintomas (MART), máx 8 inalações/dia",
      via: "Inalador de pó",
      intervalo: "Conforme esquema",
      duracao: "Contínuo",
      monitorizacao: "Técnica do inalador de pó (exige fluxo inspiratório adequado)",
      contraindicacoes: "< 6 anos",
      ajustes: "GINA 2026: MART é opção nas etapas 3–4 em 6–11 anos e o relatório passou a não recomendar SABA isolado nessa faixa (dados do estudo CARE). No SUS, a apresentação 6/200 mcg é do componente especializado conforme PCDT; a de 100/6 nem sempre está disponível"
    },
    {
      droga: "Montelucaste",
      linha: "alt",
      dose: "2–5 anos: 4 mg · 6–14 anos: 5 mg",
      via: "VO (sachê ou comprimido mastigável)",
      intervalo: "1 vez ao dia à noite",
      duracao: "Contínuo, reavaliar",
      monitorizacao: "Alterações de comportamento, sono, humor e ideação suicida (alerta da FDA) — orientar a família",
      contraindicacoes: "—",
      ajustes: "Alternativa menos eficaz que o corticoide inalatório; não disponível no componente básico do SUS"
    }
  ],
  destino: {
    agora: [
      "Crise: tratar na unidade por 1 hora e reavaliar",
      "Manutenção: definir etapa pelo controle e risco, ensinar técnica com espaçador, plano de ação escrito"
    ],
    reavaliar: [
      "Após crise: retorno em até 1 semana",
      "Manutenção: a cada 1–3 meses após mudança; subir etapa se não controlada (após checar técnica, adesão, exposição e diagnóstico); descer após 3 meses controlada"
    ],
    alta: [
      "Crise: SpO₂ ≥ 94% em ar ambiente, sem tiragem, fala/mama normalmente, resposta mantida 1 h após o último salbutamol",
      "Com prednisolona por 3–5 dias, corticoide inalatório iniciado ou aumentado e plano de ação"
    ],
    observacao: [
      "Resposta parcial: manter salbutamol de 1/1 h e reavaliar em 1–2 h antes de decidir"
    ],
    internacao: [
      "Crise grave, SpO₂ < 92% após tratamento inicial, sem resposta em 1–2 h",
      "≤ 5 anos com necessidade de salbutamol a intervalos < 3–4 h",
      "UTI: sonolência, tórax silencioso, hipercapnia, exaustão"
    ],
    transferencia: [
      "UBS → SAMU 192 mantendo salbutamol contínuo/a cada 20 min, ipratrópio e O₂",
      "Pneumologia pediátrica: etapa 4–5, dúvida diagnóstica, crises graves, < 5 anos sem controle com dose dobrada de corticoide inalatório"
    ]
  },
  prescricao: {
    ambulatorial: "ASMA — CRIANÇA 2–5 ANOS (exemplo 15 kg) após crise\nUSO ORAL\n1. Prednisolona 3 mg/mL solução --------------------- 1 frasco\n   Dar 5 mL (15 mg ≈ 1 mg/kg) pela manhã por 3 a 5 dias (máx 30 mg).\nUSO INALATÓRIO (com espaçador e máscara)\n2. Beclometasona 50 mcg/jato spray ----------------- 1 frasco\n   Fazer 1 jato de 12 em 12 horas todos os dias (100 mcg/dia), mesmo sem sintomas. Limpar a boca/rosto depois.\n3. Salbutamol 100 mcg/jato spray ------------------- 1 frasco\n   Fazer 2 a 4 jatos (1 por vez, 5–10 respirações cada) se chiado ou cansaço, até de 4 em 4 horas. Se precisar antes de 4 horas → procurar atendimento.\n4. Espaçador com máscara (ou garrafa PET adaptada) — 1 unidade.\n\nASMA — CRIANÇA 6–11 ANOS (exemplo 25 kg)\nUSO ORAL\n1. Prednisolona 3 mg/mL solução — 10 mL (30 mg ≈ 1,2 mg/kg) pela manhã por 3 a 5 dias (máx 40 mg).\nUSO INALATÓRIO (com espaçador e bocal)\n2. Beclometasona 50 mcg/jato spray — 1 a 2 jatos de 12 em 12 horas (100–200 mcg/dia) todos os dias.\n   ou Budesonida 200 mcg cápsula inalatória — 1 cápsula 1 vez ao dia (se usa bem o inalador de pó).\n3. Salbutamol 100 mcg/jato spray — 2 a 4 jatos com espaçador se chiado ou falta de ar, até de 4 em 4 horas.\n\nPLANO DE AÇÃO ESCRITO: aumentar o salbutamol e procurar a UBS se precisar mais de 3 vezes no dia; procurar emergência se não melhorar após 6–10 jatos ou se lábios roxos/não consegue falar.",
    hospitalar: "CRISE DE ASMA — CRIANÇA NO PS (peso: ___ kg)\n1. Posição sentada/no colo; O₂ por cateter ou máscara para SpO₂ 94–98%.\n2. Salbutamol 100 mcg/jato com espaçador: ≤ 5 anos 2–6 jatos; 6–11 anos 4–10 jatos, a cada 20 min por 3 vezes; depois de 1/1 h conforme resposta.\n   ou Salbutamol solução 5 mg/mL 0,15 mg/kg (0,03 mL/kg; mín 0,5 mL, máx 1 mL) + SF 0,9% 3 mL em nebulização com O₂ 6–8 L/min, a cada 20 min por 3 vezes.\n3. Brometo de ipratrópio 20 mcg/jato 4 jatos (ou 0,25 mg/mL 20–40 gotas na nebulização) junto às 3 primeiras doses.\n4. Prednisolona 1–2 mg/kg VO (máx 20 mg < 2 anos; 30 mg 2–5 anos; 40 mg 6–11 anos) agora.\n   Se vômitos ou grave: metilprednisolona 1 mg/kg IV (máx 60 mg/dia) de 12/12 h.\n5. Crise grave sem resposta em 1 h (≥ 2 anos, preferencialmente 6–11 anos): sulfato de magnésio 50% 40–50 mg/kg (máx 2 g) diluído em SF 0,9% para concentração ≤ 100 mg/mL (ex.: 20 mL), IV em 20 min, com monitor de PA.\n6. Hidratação venosa de manutenção se não aceita VO.\n7. Controles: FR, FC, SpO₂ e escore clínico a cada 20 min na 1ª hora, depois de 1/1 h; potássio e glicemia se salbutamol frequente.\n8. Sem resposta, sonolência ou SpO₂ < 92% com O₂: UTI pediátrica."
  },
  orientacoesRetorno: [
    "O remédio de manutenção (bombinha de corticoide) é para todos os dias, mesmo sem chiado; o salbutamol é só para alívio",
    "Usar sempre o espaçador; enxaguar a boca ou limpar o rosto após o corticoide inalatório",
    "Evitar fumaça de cigarro em casa e no carro, mofo, poeira; manter a vacina da gripe em dia",
    "Voltar imediatamente se: falta de ar que não melhora com o salbutamol, lábios roxos, não consegue falar ou mamar, afundamento das costelas, sonolência",
    "Retorno em até 1 semana após a crise e depois a cada 1–3 meses, trazendo as bombinhas e o espaçador"
  ],
  tabelas: [
    {
      titulo: "Etapas de manutenção por faixa etária (GINA 2025–2026, resumo)",
      colunas: ["Etapa", "≤ 5 anos", "6–11 anos"],
      linhas: [
        ["1", "SABA se sintomas; considerar CI inalatório intermitente nas viroses", "CI dose baixa sempre que usar SABA, ou CI dose baixa diária (SABA isolado não recomendado em 2026)"],
        ["2", "CI dose baixa diária (preferencial); alternativa: montelucaste", "CI dose baixa diária + SABA de resgate (ou budesonida-formoterol de resgate, conforme GINA 2026)"],
        ["3", "CI dose baixa dobrada (dose média); encaminhar", "CI-LABA dose baixa, ou MART com budesonida-formoterol dose muito baixa, ou CI dose média"],
        ["4", "Manter e encaminhar ao especialista", "CI-LABA dose média ou MART dose baixa; encaminhar"],
        ["5", "—", "Especialista: fenotipagem, anti-IgE/anti-IL-5/anti-IL-4R"]
      ],
      nota: "CI = corticoide inalatório. Antes de subir etapa: checar técnica, adesão, exposição (fumo) e diagnóstico."
    },
    {
      titulo: "Corticoide inalatório — dose diária (GINA)",
      colunas: ["Fármaco", "≤ 5 anos (dose baixa)", "6–11 anos baixa", "6–11 anos média"],
      linhas: [
        ["Beclometasona HFA (partícula padrão)", "100 mcg", "100–200 mcg", "> 200–400 mcg"],
        ["Budesonida pó", "—", "100–200 mcg", "> 200–400 mcg"],
        ["Budesonida nebulizada", "500 mcg", "250–500 mcg", "> 500–1.000 mcg"],
        ["Fluticasona propionato HFA", "50 mcg", "50–100 mcg", "> 100–200 mcg"]
      ],
      nota: "Usar a menor dose que mantém o controle. Monitorar estatura."
    }
  ],
  fontes: [
    "GINA — Global Strategy for Asthma Management and Prevention (2026) e Summary Guide (2026)",
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas da Asma (2023)",
    "Sociedade Brasileira de Pediatria — Documento científico: Asma na infância — diagnóstico e manejo (2023)",
    "SBPT — Recomendações para o manejo da asma (2020) e atualização (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
