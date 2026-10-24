// Insulinoterapia no paciente internado / PS
registrarFicha({
  id: "insulinoterapia-hospitalar",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Insulina no paciente internado (basal-bolus-correção) e hiperglicemia hospitalar",
  resumo: "Adulto internado ou em observação com glicemia persistentemente ≥ 180 mg/dL, com ou sem diabetes prévio. Como montar o esquema basal-bolus-correção, ajustar em jejum, dieta enteral, corticoide e transição para a alta. Não se aplica a cetoacidose ou estado hiperosmolar (ver fichas próprias).",
  palavrasChave: "insulina hospitalar basal bolus correcao escala insulina regular nph glargina lispro asparte hiperglicemia hospitalar internado jejum dieta zero corticoide perioperatorio dieta enteral sliding scale glicemia capilar",
  critico: {
    tempo: "Não usar só escala de correção",
    texto: "Escala de correção isolada (sliding scale) não deve ser o esquema único em quem já tem hiperglicemia persistente. Use basal + prandial + correção. Nunca suspender a basal no DM1, nem em jejum."
  },
  alarmes: [
    "Glicemia < 70 mg/dL (rever todo o esquema no mesmo dia) ou < 54 mg/dL (hipoglicemia clinicamente importante)",
    "Glicemia > 300 mg/dL persistente, vômitos, dor abdominal, taquipneia: pesquisar cetoacidose (cetonemia, gasometria)",
    "DM1 sem insulina basal prescrita (risco de cetoacidose em horas)",
    "Uso de iSGLT2 (dapagliflozina, empagliflozina) em paciente agudamente doente ou em jejum: risco de cetoacidose euglicêmica",
    "Paciente crítico (choque, ventilação mecânica): preferir insulina IV contínua"
  ],
  condutaInicial: [
    "Glicemia capilar à admissão; HbA1c se não houver nos últimos 3 meses (separa DM prévio não diagnosticado de hiperglicemia de estresse)",
    "Alvo para a maioria (internado clínico ou cirúrgico, não crítico e crítico): 140–180 mg/dL (ADA 2025, SBD 2024)",
    "Iniciar insulina se glicemia ≥ 180 mg/dL em 2 medidas (ou persistente)",
    "Suspender a maioria dos antidiabéticos orais na internação aguda (metformina se contraste, instabilidade, LRA, hipóxia; iSGLT2 se doente agudo ou jejum)",
    "Calcular a dose total diária (DTD) e dividir: comendo → 50% basal + 50% prandial; jejum → só basal + correção",
    "Prescrever protocolo de hipoglicemia junto com toda insulina"
  ],
  fataisExcluir: [
    "Cetoacidose diabética ou estado hiperosmolar (ver fichas cetoacidose e hiperglicemia)",
    "Hipoglicemia grave por insulina sem dieta (jejum para exame, vômitos, dieta suspensa)",
    "Infecção grave como causa da descompensação (sepse)",
    "Hipocalemia induzida por insulina em paciente com K baixo"
  ],
  proximaDecisao: "Reavaliar a cada 24 h: se a maioria das glicemias > 180 sem hipoglicemia → aumentar a DTD em 10–20% (somar a correção usada nas últimas 24 h e redistribuir). Glicemia < 70 sem causa clara → reduzir a dose responsável em 10–20%. Glicemia < 100 → rever a dose. Na alta, voltar ao esquema prévio ou ajustar pela HbA1c.",
  clinica: {
    anamnese: [
      "DM prévio? Tipo (DM1 sempre precisa de basal), tempo de doença, HbA1c",
      "Insulina e doses em casa (NPH, regular, análogos), horários, hipoglicemias prévias",
      "Antidiabéticos orais e injetáveis (metformina, iSGLT2, sulfonilureia, agonista GLP-1)",
      "Dieta prevista: oral, jejum para exame ou cirurgia, enteral, parenteral",
      "Corticoide (dose, horário), nutrição, função renal, idade e fragilidade"
    ],
    exameFisico: [
      "Hidratação, padrão respiratório (Kussmaul), nível de consciência",
      "Peso (para cálculo da dose)",
      "Locais de aplicação (lipodistrofia altera absorção)",
      "Pés e focos de infecção"
    ],
    diferenciais: [
      { dx: "Hiperglicemia de estresse", pista: "Sem DM prévio, HbA1c < 6,5%; costuma regredir com a doença aguda" },
      { dx: "DM não diagnosticado", pista: "HbA1c ≥ 6,5% à admissão" },
      { dx: "Hiperglicemia induzida por corticoide", pista: "Glicemia sobe à tarde e à noite, normal de madrugada com prednisona pela manhã" },
      { dx: "Cetoacidose / estado hiperosmolar", pista: "Acidose, cetonemia, osmolalidade alta, desidratação" }
    ],
    gravidade: [
      "Hipoglicemia nível 1: < 70 mg/dL · nível 2: < 54 mg/dL · nível 3: evento grave com alteração mental que exige ajuda",
      "Hiperglicemia hospitalar: glicemia > 140 mg/dL; tratar quando persistente ≥ 180 mg/dL",
      "Risco alto de hipoglicemia: idade > 65–70 anos, DRC (TFG < 45), baixo peso, desnutrição, dieta irregular, hepatopatia"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar seriada",
      pedido: "Glicemia capilar antes do café, almoço e jantar e às 22 h (se comendo); de 4/4 h ou 6/6 h (se jejum, dieta enteral contínua ou parenteral).",
      porQue: "Guiar ajuste diário e correção.",
      esperar: "Maioria entre 140–180 mg/dL.",
      interpretacao: "Glicemia de jejum alta → ajustar basal. Glicemia antes da refeição seguinte alta → ajustar o bolus da refeição anterior.",
      limitacoes: "Perfusão ruim, anemia e hipóxia alteram a capilar; confirmar valores extremos com glicemia sérica."
    },
    {
      nome: "HbA1c",
      pedido: "Hemoglobina glicada (HbA1c), se não houver resultado nos últimos 3 meses.",
      porQue: "Separar DM prévio de hiperglicemia de estresse e planejar a alta.",
      esperar: "≥ 6,5% sugere DM.",
      interpretacao: "HbA1c > 9–10% geralmente indica alta com insulina.",
      limitacoes: "Falseada por anemia, transfusão recente, hemoglobinopatias, DRC avançada."
    },
    {
      nome: "Função renal e eletrólitos",
      pedido: "Creatinina, ureia, sódio, potássio.",
      porQue: "DRC reduz a dose de insulina; insulina baixa o potássio.",
      esperar: "—",
      interpretacao: "TFG < 45: usar DTD menor (0,2–0,3 UI/kg/dia).",
      limitacoes: "—"
    },
    {
      nome: "Cetonemia e gasometria (se suspeita de crise)",
      pedido: "Beta-hidroxibutirato capilar ou sérico e gasometria venosa se glicemia > 250–300 mg/dL com sintomas, DM1 ou uso de iSGLT2.",
      porQue: "Excluir cetoacidose.",
      esperar: "Cetonemia < 0,6 mmol/L.",
      interpretacao: "≥ 3 mmol/L com acidose → protocolo de cetoacidose.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Insulina basal (NPH humana ou glargina)",
      linha: "l1",
      dose: "50% da DTD. DTD: 0,3 UI/kg/dia (idoso, DRC, magro) · 0,4 UI/kg/dia (glicemia 140–200) · 0,5 UI/kg/dia (glicemia 201–400) · se usava insulina, partir da dose de casa (reduzir 20% se comia mal ou se tinha hipoglicemia)",
      via: "SC",
      intervalo: "NPH: 2/3 antes do café e 1/3 às 22 h (ou 1/2 e 1/2) · glargina: 1×/dia no mesmo horário",
      duracao: "Durante a internação",
      monitorizacao: "Glicemia de jejum",
      contraindicacoes: "—",
      ajustes: "Jejum: manter basal com 75–80% da dose (NPH da manhã: 50%). DM1: nunca suspender. Ajuste diário de 10–20%"
    },
    {
      droga: "Insulina prandial (regular humana ou análogo rápido: lispro, asparte, glulisina)",
      linha: "l1",
      dose: "50% da DTD dividida igualmente nas 3 refeições",
      via: "SC",
      intervalo: "Regular: 30 min antes da refeição · análogo rápido: 0–15 min antes (ou logo após, se aceitação incerta)",
      duracao: "Enquanto se alimenta",
      monitorizacao: "Glicemia antes da refeição seguinte",
      contraindicacoes: "Jejum ou refeição suspensa (não aplicar a dose prandial)",
      ajustes: "Se comer menos da metade, reduzir ou omitir a prandial e manter só a correção"
    },
    {
      droga: "Insulina de correção (mesma insulina prandial)",
      linha: "l1",
      dose: "Conforme glicemia e sensibilidade (ver tabela). Somar à dose prandial",
      via: "SC",
      intervalo: "Antes das refeições e às 22 h (dose noturna metade ou só se > 250) · em jejum: de 4/4 h (rápida) ou 6/6 h (regular)",
      duracao: "Durante a internação",
      monitorizacao: "Se usou correção em quase todas as medidas → aumentar basal/prandial",
      contraindicacoes: "Como esquema único em hiperglicemia persistente",
      ajustes: "Escala sensível: idoso, DRC, baixo peso. Resistente: obesidade, corticoide, DTD > 80 UI"
    },
    {
      droga: "NPH matinal para hiperglicemia por corticoide",
      linha: "adj",
      dose: "0,1 UI/kg para cada 10 mg de prednisona (ou equivalente), máximo 0,4 UI/kg",
      via: "SC",
      intervalo: "Junto com o corticoide da manhã",
      duracao: "Reduzir junto com o desmame do corticoide",
      monitorizacao: "Glicemia antes do almoço e do jantar",
      contraindicacoes: "—",
      ajustes: "Dexametasona ou corticoide de várias tomadas/dia: insulina basal-bolus com mais peso para a prandial"
    },
    {
      droga: "Insulina regular em infusão IV contínua",
      linha: "alt",
      dose: "Conforme protocolo institucional, alvo 140–180 mg/dL",
      via: "IV em bomba de infusão (100 UI em 100 mL de SF 0,9% = 1 UI/mL)",
      intervalo: "Contínuo, glicemia de 1/1 h a 2/2 h",
      duracao: "Paciente crítico, perioperatório de grande porte, nutrição parenteral com hiperglicemia grave",
      monitorizacao: "Glicemia horária, K",
      contraindicacoes: "Sem bomba de infusão ou sem enfermagem para glicemia horária",
      ajustes: "Na transição para SC: basal 2 h antes de desligar (≈ 60–80% da infusão das últimas 24 h como DTD)"
    },
    {
      droga: "Sitagliptina (inibidor de DPP-4)",
      linha: "alt",
      dose: "100 mg (TFG 30–45: 50 mg; < 30: 25 mg)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Internação",
      monitorizacao: "Glicemias",
      contraindicacoes: "Pancreatite",
      ajustes: "ADA 2025: opção, isolada ou com basal, em DM2 com hiperglicemia leve a moderada que come. Não substitui insulina em glicemia muito elevada"
    },
    {
      droga: "Escala de correção como esquema único (sliding scale)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Desaconselhada como esquema exclusivo pela ADA e SBD",
      ajustes: "Aceitável só por 24–48 h em quem não tinha DM, glicemias pouco elevadas e sem uso prévio de insulina"
    }
  ],
  destino: {
    agora: [
      "Prescrever basal + prandial + correção + protocolo de hipoglicemia",
      "Combinar com enfermagem e nutrição horários de glicemia, refeição e insulina"
    ],
    reavaliar: [
      "Ajuste diário da DTD (10–20%)",
      "Rever a cada mudança de dieta, corticoide, função renal ou jejum"
    ],
    alta: [
      "HbA1c < 7–8%: voltar ao esquema prévio",
      "HbA1c 8–10%: esquema prévio + basal (≈ 50–80% da basal hospitalar) ou intensificar oral",
      "HbA1c > 10%: basal-bolus ou basal + oral",
      "Ensinar aplicação, glicemia capilar e hipoglicemia; retorno na UBS em 1–2 semanas"
    ],
    observacao: ["Paciente do PS em observação > 12–24 h já deve ter esquema basal, não só correção"],
    internacao: ["Conforme doença de base; hiperglicemia isolada sem crise raramente indica internação"],
    transferencia: ["Crítico em insulina IV sem estrutura de UTI → regulação"]
  },
  prescricao: {
    hospitalar: "INSULINA HOSPITALAR — BASAL-BOLUS-CORREÇÃO (adulto comendo; peso: ___ kg)\nDTD = ___ UI/kg/dia × ___ kg = ___ UI (0,3 idoso/DRC · 0,4 glicemia 140–200 · 0,5 glicemia 201–400)\n1. Dieta para diabético, 3 refeições + lanches conforme nutrição.\n2. Insulina humana NPH 100 UI/mL: ___ UI SC antes do café e ___ UI SC às 22 h (total = 50% da DTD; 2/3 manhã e 1/3 noite).\n   (Alternativa: insulina glargina ___ UI SC 1×/dia, 50% da DTD.)\n3. Insulina humana regular 100 UI/mL: ___ UI SC 30 min antes do café, do almoço e do jantar (50% da DTD ÷ 3). Não aplicar se a refeição for suspensa; se comer menos da metade, aplicar metade.\n4. Insulina regular de correção SC, somada ao item 3, conforme glicemia capilar antes das refeições (escala: sensível / usual / resistente — ver tabela da ficha). Às 22 h: só se glicemia > 250, com metade da dose.\n5. Glicemia capilar antes do café, almoço, jantar e às 22 h (e às 3 h se hipoglicemia noturna suspeita).\n6. Protocolo de hipoglicemia: se glicemia < 70 mg/dL e acordado → 15 g de glicose VO (150 mL de suco ou refrigerante comum, ou 1 colher de sopa de açúcar em água); se não puder engolir → glicose 50% 30–50 mL (3 a 5 ampolas de 10 mL) IV lento em veia calibrosa e avisar o médico; repetir glicemia em 15 min até ≥ 100 mg/dL.\n7. Suspender metformina e iSGLT2 durante a fase aguda (anotar para reintroduzir na alta).\n\nJEJUM (exame, cirurgia, vômitos)\n1. Manter basal: NPH da manhã com 50% da dose (ou glargina com 75–80% da dose).\n2. Suspender a insulina prandial.\n3. Correção com insulina regular de 6/6 h (ou rápida de 4/4 h) conforme escala.\n4. Soro glicosado 5% com eletrólitos 80–100 mL/h se jejum prolongado e em uso de insulina (ajustar à volemia).\n5. Glicemia capilar de 4/4 h a 6/6 h.\n\nDIETA ENTERAL CONTÍNUA\n1. Basal (NPH de 12/12 h ou glargina) com ~40–50% da DTD.\n2. Insulina regular de 6/6 h com a dose nutricional (≈ 1 UI para cada 10–15 g de carboidrato da dieta, dividida) + correção.\n3. Se a dieta for interrompida: suspender a regular nutricional e iniciar SG 10% na mesma vazão de carboidrato até religar.",
    ambulatorial: "ALTA COM INSULINA BASAL (exemplo, ajustar à HbA1c)\nUSO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ------------------ ___ frascos\n   Aplicar ___ UI às 22 h (ou ___ UI antes do café e ___ UI às 22 h).\n2. Seringas de insulina 100 UI com agulha curta, tiras reagentes e lancetas (UBS).\nMONITORIZAÇÃO\nMedir a glicemia em jejum todos os dias e anotar. Se jejum > 130 por 3 dias seguidos, aumentar 2 UI (combinar com a equipe); se < 80, reduzir 2–4 UI e procurar a UBS.\nRetorno na UBS em 1–2 semanas com o registro."
  },
  orientacoesRetorno: [
    "Medir e anotar a glicemia conforme orientado e levar o caderno na consulta",
    "Hipoglicemia (tremor, suor frio, fome, confusão): comer ou beber açúcar na hora (1 colher de sopa em água ou 1 copo de suco) e medir de novo em 15 minutos",
    "Não pular refeição depois de aplicar insulina; se não for comer, não aplicar a insulina rápida ou regular",
    "Nunca parar a insulina basal sem orientação, mesmo doente; em vômitos ou glicemia > 300 que não baixa, procurar atendimento",
    "Consulta na UBS em 1–2 semanas após a alta"
  ],
  tabelas: [
    {
      titulo: "Escala de correção — exemplo adaptado (UI de insulina regular ou rápida a somar antes da refeição)",
      colunas: ["Glicemia (mg/dL)", "Sensível", "Usual", "Resistente"],
      linhas: [
        ["141–180", "1", "2", "3"],
        ["181–220", "2", "3", "4"],
        ["221–260", "3", "4", "6"],
        ["261–300", "4", "6", "8"],
        ["301–350", "5", "8", "10"],
        ["351–400", "6", "10", "12"],
        ["> 400", "6 + avisar médico", "10 + avisar médico", "12 + avisar médico"]
      ],
      nota: "Exemplo conservador para adaptar ao protocolo da instituição; não é a escala de um estudo específico. Sensível: idoso, DRC, baixo peso, DM1 magro. Resistente: obesidade, corticoide, infecção, DTD > 80 UI. > 300 em DM1, iSGLT2 ou sintomático: dosar cetonemia."
    },
    {
      titulo: "Cálculo da dose total diária (DTD) — sem insulina prévia",
      colunas: ["Situação", "DTD (UI/kg/dia)", "Divisão"],
      linhas: [
        ["Idoso > 70 anos, TFG < 45, baixo peso", "0,2–0,3", "50% basal / 50% prandial"],
        ["Glicemia 140–200 mg/dL", "0,4", "50% basal / 50% prandial"],
        ["Glicemia 201–400 mg/dL", "0,5", "50% basal / 50% prandial"],
        ["Jejum ou dieta incerta", "Só basal (0,1–0,25 UI/kg/dia)", "Basal + correção"]
      ],
      nota: "Baseado nos estudos RABBIT 2 e recomendações ADA 2025 / SBD 2024. Quem já usa insulina: partir da dose de casa."
    }
  ],
  fontes: [
    "ADA — Standards of Care in Diabetes 2025, seção 16: Diabetes Care in the Hospital (Diabetes Care, 2025)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Manejo da hiperglicemia hospitalar no paciente não crítico e crítico (2024)",
    "Umpierrez GE et al. — Randomized study of basal-bolus insulin therapy in the inpatient management of type 2 diabetes (RABBIT 2). Diabetes Care, 2007",
    "Endocrine Society — Management of Hyperglycemia in Hospitalized Adult Patients in Non-Critical Care Settings: Clinical Practice Guideline (JCEM, 2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
