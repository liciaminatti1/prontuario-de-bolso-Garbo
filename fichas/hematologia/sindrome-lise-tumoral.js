// Síndrome de lise tumoral
registrarFicha({
  id: "sindrome-lise-tumoral",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Síndrome de lise tumoral",
  resumo: "Liberação maciça de conteúdo celular (potássio, fósforo, ácido úrico) após quimioterapia ou espontânea em tumores de alta proliferação (linfoma de Burkitt, leucemias agudas com leucometria alta). Causa hipercalemia, hipocalcemia, arritmia e lesão renal aguda.",
  palavrasChave: "sindrome de lise tumoral slt cairo bishop acido urico hiperuricemia hipercalemia hiperfosfatemia hipocalcemia alopurinol rasburicase hidratacao linfoma burkitt leucemia aguda quimioterapia lesao renal aguda dialise",
  critico: {
    tempo: "K e ECG agora; hidratar",
    texto: "Hipercalemia é a causa de morte precoce: ECG e potássio imediatos. Hidratação vigorosa para diurese ≥ 100 mL/h e redução do ácido úrico (rasburicase se alto risco ou SLT estabelecida)."
  },
  alarmes: [
    "K ≥ 6,0 mEq/L ou alteração no ECG",
    "Oligúria, creatinina subindo",
    "Arritmia, convulsão, tetania, sinal de Chvostek/Trousseau (hipocalcemia)",
    "Sobrecarga volêmica impedindo hidratação",
    "Leucometria muito alta, massa tumoral volumosa, LDH muito elevada",
    "Início de quimioterapia em tumor de alto risco nas últimas 72 h"
  ],
  condutaInicial: [
    "Monitor cardíaco, ECG, acesso venoso calibroso",
    "Potássio, fósforo, cálcio (iônico), ácido úrico, creatinina, ureia, LDH, gasometria venosa; repetir a cada 6–8 h (4–6 h se SLT estabelecida)",
    "Hidratação: SF 0,9% 2,5–3 L/m²/dia (≈ 3 L/dia no adulto), meta de diurese ≥ 100 mL/h (80–100 mL/m²/h); sem potássio no soro",
    "Hipercalemia: tratar como na ficha hipercalemia (gluconato de cálcio se ECG alterado, insulina + glicose, beta-2)",
    "Redução de ácido úrico: alopurinol na prevenção de risco intermediário; rasburicase no alto risco ou SLT estabelecida (se disponível, excluir deficiência de G6PD)",
    "Hipocalcemia: tratar só se sintomática (arritmia, tetania, convulsão) — cálcio piora deposição de fosfato de cálcio",
    "Contato precoce com nefrologia (diálise) e hematologia/oncologia"
  ],
  fataisExcluir: [
    "Hipercalemia com arritmia",
    "Lesão renal aguda oligoanúrica",
    "Hipocalcemia com convulsão ou arritmia",
    "Leucostase (leucometria muito alta com sintomas respiratórios/neurológicos)",
    "Sepse em paciente oncológico"
  ],
  proximaDecisao: "Diurese adequada e eletrólitos estáveis → manter hidratação e controles até 48–72 h após a quimioterapia. Oligúria apesar de volume, K persistente ≥ 6, fósforo muito alto, hipocalcemia sintomática ou sobrecarga → hemodiálise.",
  clinica: {
    anamnese: [
      "Tipo de neoplasia, data da quimioterapia (SLT em geral 12–72 h após), corticoide recente (pode desencadear em linfoma)",
      "Náusea, vômitos, letargia, cãibras, parestesias, palpitações, síncope",
      "Diurese, edema, DRC prévia",
      "Uso de nefrotóxicos, contraste, AINE"
    ],
    exameFisico: [
      "Volemia, edema, ausculta pulmonar (sobrecarga)",
      "Massa tumoral, hepatoesplenomegalia, linfonodomegalia",
      "Chvostek, Trousseau, tetania",
      "Diurese horária"
    ],
    diferenciais: [
      { dx: "LRA por sepse, contraste ou nefrotóxicos", pista: "Sem hiperfosfatemia/hiperuricemia proporcional" },
      { dx: "Obstrução urinária por tumor", pista: "Hidronefrose na USG" },
      { dx: "Pseudo-hipercalemia", pista: "Leucocitose ou plaquetose extrema; dosar K em gasometria" },
      { dx: "Infiltração renal por linfoma/leucemia", pista: "Rins aumentados na USG" }
    ],
    gravidade: [
      "SLT laboratorial (Cairo-Bishop): ≥ 2 de: ácido úrico ≥ 8 mg/dL, K ≥ 6 mEq/L, fósforo ≥ 4,5 mg/dL, cálcio ≤ 7 mg/dL (ou variação de 25% do basal), de 3 dias antes a 7 dias após a quimioterapia",
      "SLT clínica: SLT laboratorial + creatinina ≥ 1,5× LSN, arritmia/morte súbita ou convulsão",
      "Alto risco: Burkitt, leucemia linfoblástica aguda com leucócitos ≥ 100.000/mm³, LMA com leucócitos ≥ 100.000/mm³, linfoma volumoso com LDH ≥ 2× LSN, DRC ou ácido úrico alto prévios"
    ]
  },
  exames: [
    {
      nome: "Eletrólitos e função renal",
      pedido: "Potássio, fósforo, cálcio total e iônico, magnésio, ácido úrico, creatinina, ureia, LDH, sódio, gasometria venosa. Repetir de 6/6 h.",
      porQue: "Diagnóstico (Cairo-Bishop) e monitorização.",
      esperar: "—",
      interpretacao: "Ver critérios em gravidade.",
      limitacoes: "Amostra para ácido úrico em paciente que recebeu rasburicase: colher em tubo pré-resfriado e transportar no gelo (degradação in vitro)."
    },
    {
      nome: "ECG",
      pedido: "Eletrocardiograma de 12 derivações agora e se K ≥ 6 ou cálcio baixo.",
      porQue: "Hipercalemia e hipocalcemia (QT longo).",
      esperar: "—",
      interpretacao: "T apiculada, QRS largo → gluconato de cálcio imediato.",
      limitacoes: "—"
    },
    {
      nome: "Outros",
      pedido: "Hemograma, urina tipo 1, USG de rins e vias urinárias se LRA. Dosagem de G6PD antes de rasburicase (se possível sem atrasar).",
      porQue: "Leucometria, obstrução, contraindicação à rasburicase.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Soro fisiológico 0,9%",
      linha: "l1",
      dose: "2,5–3 L/m²/dia (≈ 3 L/dia adulto)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até 48–72 h após a quimioterapia ou correção",
      monitorizacao: "Diurese ≥ 100 mL/h, peso, balanço, congestão",
      contraindicacoes: "Sobrecarga volêmica, oligoanúria estabelecida",
      ajustes: "Sem potássio no soro. Furosemida só para manter diurese em paciente euvolêmico/hipervolêmico (não em hipovolêmico). Alcalinização urinária não é recomendada"
    },
    {
      droga: "Alopurinol",
      linha: "l1",
      dose: "100 mg/m² 8/8 h (máximo 800 mg/dia); usual no adulto 300 mg/dia",
      via: "VO",
      intervalo: "8/8 h ou 1×/dia",
      duracao: "Iniciar 24–48 h antes da quimioterapia e manter 3–7 dias após",
      monitorizacao: "Ácido úrico, creatinina, rash",
      contraindicacoes: "Hipersensibilidade (reação grave mais comum em HLA-B*58:01)",
      ajustes: "Reduzir dose em DRC. Interação: reduzir dose de azatioprina/mercaptopurina. Não reduz ácido úrico já formado"
    },
    {
      droga: "Rasburicase",
      linha: "l1",
      dose: "0,2 mg/kg (dose única de 3–6 mg costuma bastar no adulto)",
      via: "IV em 30 min",
      intervalo: "1×/dia",
      duracao: "Até 5 dias, conforme ácido úrico",
      monitorizacao: "Ácido úrico (amostra no gelo), hemólise, metemoglobinemia",
      contraindicacoes: "Deficiência de G6PD (hemólise e metemoglobinemia), gestação",
      ajustes: "Alto risco ou SLT estabelecida. Disponibilidade limitada no SUS; se indisponível, alopurinol + hidratação e diálise precoce. Não associar alopurinol no mesmo período"
    },
    {
      droga: "Gluconato de cálcio 10% (hipocalcemia sintomática ou hipercalemia com ECG alterado)",
      linha: "adj",
      dose: "10–20 mL (1–2 g) em 100 mL de SG 5%",
      via: "IV em 10–20 min",
      intervalo: "Repetir conforme ECG/sintomas",
      duracao: "—",
      monitorizacao: "ECG, cálcio, fósforo",
      contraindicacoes: "Hipocalcemia assintomática (não tratar: risco de precipitação de fosfato de cálcio)",
      ajustes: "Usar a menor dose que controla os sintomas"
    },
    {
      droga: "Hemodiálise",
      linha: "l1",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Indicações: oligúria refratária, K persistente ≥ 6 apesar de tratamento, hiperfosfatemia grave, hipocalcemia sintomática com fósforo alto, sobrecarga volêmica, uremia"
    },
    {
      droga: "Bicarbonato para alcalinizar a urina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Favorece precipitação de fosfato de cálcio e piora hipocalcemia",
      ajustes: "Não recomendado (BSH 2015)"
    }
  ],
  destino: {
    agora: ["Monitor, ECG, hidratação, tratamento da hipercalemia", "Contato com nefrologia e onco-hematologia"],
    reavaliar: ["Eletrólitos e creatinina de 4/4–6/6 h", "Diurese horária e balanço"],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["Todos; UTI se SLT clínica, K ≥ 6, LRA, arritmia ou necessidade de diálise"],
    transferencia: ["Sem diálise ou onco-hematologia: regulação urgente após iniciar hidratação e tratar o potássio"]
  },
  prescricao: {
    hospitalar: "SÍNDROME DE LISE TUMORAL — ADULTO (peso: ___ kg; SC: ___ m²)\n1. Dieta pobre em potássio e fósforo.\n2. Monitor cardíaco contínuo.\n3. SF 0,9% 125–200 mL/h IV (≈ 3 L/dia), SEM potássio; meta diurese ≥ 100 mL/h.\n4. Se diurese < 100 mL/h com volemia adequada: furosemida 20–40 mg IV.\n5. Alopurinol 300 mg VO 1×/dia (até 100 mg/m² de 8/8 h, máx. 800 mg/dia; reduzir na DRC) — OU, se alto risco/SLT estabelecida e disponível (G6PD normal): rasburicase 0,2 mg/kg (___ mg) em 50 mL de SF 0,9% IV em 30 min, 1×/dia.\n6. Hipercalemia (K ≥ 6 ou ECG alterado): gluconato de cálcio 10% 10 mL + SG 5% 100 mL IV em 10 min; insulina regular 10 UI + glicose 50% 50 mL IV; fenoterol/salbutamol inalatório; repetir K em 1–2 h (ver ficha hipercalemia).\n7. Hiperfosfatemia: restrição de fósforo; quelante (carbonato de cálcio ou sevelâmer) às refeições se tolerar VO; diálise se grave.\n8. Hipocalcemia SOMENTE se sintomática: gluconato de cálcio 10% 10 mL em 100 mL SG 5% IV em 20 min.\n9. Evitar AINE, contraste iodado e nefrotóxicos.\n10. Exames: K, fósforo, cálcio, ácido úrico, creatinina, LDH de 6/6 h (amostra de ácido úrico no gelo se rasburicase).\n11. Controles: diurese horária, balanço hídrico, peso diário; comunicar diurese < 100 mL/h por 2 h, K ≥ 6, arritmia, tetania.\n12. Nefrologia: avaliar diálise se critérios.",
    ambulatorial: "PREVENÇÃO EM RISCO INTERMEDIÁRIO (orientação da oncologia)\nUSO ORAL\n1. Alopurinol 300 mg ----------------------------- ___ comprimidos\n   Tomar 1 comprimido ao dia, começando 1 a 2 dias antes da quimioterapia e até ___ dias depois.\n\nORIENTAÇÃO\n- Beber pelo menos 3 litros de água por dia nesse período, se não houver restrição médica."
  },
  orientacoesRetorno: [
    "Beber bastante água nos dias da quimioterapia, se o médico permitir",
    "Tomar o alopurinol no horário indicado",
    "Voltar imediatamente se: urina diminuir muito, inchaço, falta de ar, palpitação, desmaio, cãibras fortes, formigamento na boca e mãos ou convulsão",
    "Fazer os exames de sangue no dia marcado após a quimioterapia"
  ],
  tabelas: [
    {
      titulo: "Critérios laboratoriais de Cairo-Bishop (adulto)",
      colunas: ["Parâmetro", "Valor"],
      linhas: [
        ["Ácido úrico", "≥ 8 mg/dL ou aumento de 25%"],
        ["Potássio", "≥ 6 mEq/L ou aumento de 25%"],
        ["Fósforo", "≥ 4,5 mg/dL ou aumento de 25%"],
        ["Cálcio", "≤ 7 mg/dL ou queda de 25%"]
      ],
      nota: "≥ 2 critérios entre 3 dias antes e 7 dias após o início da terapia. Muitos protocolos atuais usam os valores absolutos sem o critério de variação de 25%."
    }
  ],
  fontes: [
    "Cairo MS, Bishop M — Tumour lysis syndrome: new therapeutic strategies and classification (Br J Haematol, 2004)",
    "British Society for Haematology — Guidelines for the management of tumour lysis syndrome in adults and children (Jones et al., 2015)",
    "Howard SC, Jones DP, Pui CH — The tumor lysis syndrome (NEJM, 2011)",
    "Coiffier B et al. — Guidelines for the management of pediatric and adult tumor lysis syndrome (J Clin Oncol, 2008)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
