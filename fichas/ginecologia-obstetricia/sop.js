// Síndrome dos ovários policísticos
registrarFicha({
  id: "sop",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Síndrome dos ovários policísticos (SOP)",
  resumo: "Causa mais comum de anovulação e hiperandrogenismo. Diagnóstico em adultas por 2 de 3 critérios (Rotterdam, guideline internacional 2023): ciclos irregulares/anovulação, hiperandrogenismo, ovário policístico na USG ou AMH elevado — após excluir outras causas.",
  palavrasChave: "sop sindrome ovarios policisticos micropolicistico anovulacao hirsutismo acne hiperandrogenismo resistencia insulinica metformina anticoncepcional espironolactona letrozol clomifeno infertilidade rotterdam amh ferriman",
  critico: {
    tempo: "Excluir outras causas",
    texto: "Antes de rotular SOP: beta-hCG, TSH, prolactina e 17-OH-progesterona. Virilização rápida ou testosterona muito alta → investigar tumor."
  },
  alarmes: [
    "Virilização de início rápido (clitoromegalia, voz grave, calvície, aumento de massa muscular) — tumor ovariano/adrenal",
    "Sinais de Cushing (estrias violáceas, fraqueza proximal, HAS, equimoses)",
    "Sangramento uterino anormal prolongado ou ≥ 35–45 anos com anovulação crônica (hiperplasia/câncer de endométrio)",
    "Glicemia/TOTG em faixa de diabetes, PA elevada",
    "Sintomas depressivos importantes, ideação suicida, transtorno alimentar",
    "Roncos com apneias testemunhadas e sonolência (apneia do sono)"
  ],
  condutaInicial: [
    "Confirmar critérios (2 de 3 em adultas; em adolescentes exige ciclos irregulares + hiperandrogenismo, sem USG/AMH)",
    "Excluir: gravidez, tireoidopatia, hiperprolactinemia, hiperplasia adrenal congênita não clássica, Cushing, tumor androgênico",
    "Rastrear comorbidades: IMC/circunferência abdominal, PA, TOTG 75 g (ou glicemia de jejum + HbA1c), lipídios, depressão/ansiedade, apneia do sono",
    "Mudança de estilo de vida para todas (perda de 5–10% do peso se excesso)",
    "Escolher tratamento pelo objetivo da paciente: ciclo/endométrio, hirsutismo/acne, metabólico, gestação",
    "Anticoncepcional combinado é 1ª linha para irregularidade menstrual e hirsutismo (se não deseja gestar)"
  ],
  fataisExcluir: [
    "Tumor ovariano ou adrenal secretor de androgênio",
    "Hiperplasia endometrial / câncer de endométrio (anovulação crônica)",
    "Diabetes tipo 2 não diagnosticado",
    "Síndrome de Cushing"
  ],
  proximaDecisao: "Sem desejo de gestação → anticoncepcional combinado (± metformina se metabólico; + espironolactona se hirsutismo após 6 meses). Contraindicação a estrogênio → progestogênio cíclico ou SIU-LNG para proteger endométrio. Deseja gestar → estilo de vida, ácido fólico e encaminhar para indução da ovulação (letrozol 1ª linha).",
  clinica: {
    anamnese: [
      "Padrão menstrual desde a menarca (ciclos < 21 ou > 35 dias, ou < 8 ciclos/ano)",
      "Acne, hirsutismo (início, progressão, uso de métodos de depilação), alopecia androgenética",
      "Velocidade de instalação dos sinais androgênicos (lenta na SOP; rápida sugere tumor)",
      "Desejo de gestação, tempo tentando engravidar",
      "Ganho de peso, hábitos alimentares, atividade física, sono e roncos",
      "Humor, ansiedade, imagem corporal, compulsão alimentar",
      "História familiar de DM2, SOP; uso de medicamentos (anabolizantes, valproato)"
    ],
    exameFisico: [
      "Peso, altura, IMC, circunferência abdominal, PA",
      "Hirsutismo: escore de Ferriman-Gallwey modificado (≥ 4–6 é positivo, conforme etnia)",
      "Acne, alopecia de padrão feminino, acantose nigricans",
      "Sinais de virilização e de Cushing",
      "Galactorreia, tireoide"
    ],
    diferenciais: [
      { dx: "Hiperplasia adrenal congênita não clássica", pista: "17-OH-progesterona basal elevada (fase folicular, manhã)" },
      { dx: "Hiperprolactinemia", pista: "Galactorreia, prolactina alta" },
      { dx: "Hipotireoidismo", pista: "TSH elevado" },
      { dx: "Tumor androgênico", pista: "Virilização rápida, testosterona total muito elevada, SDHEA muito alto (adrenal)" },
      { dx: "Síndrome de Cushing", pista: "Estrias violáceas, miopatia, HAS, hiperglicemia" },
      { dx: "Amenorreia hipotalâmica", pista: "Baixo peso/exercício, sem hiperandrogenismo, LH/FSH baixos, estradiol baixo" }
    ],
    gravidade: [
      "Critérios (adultas, 2 de 3): 1) oligo/anovulação; 2) hiperandrogenismo clínico (hirsutismo, acne, alopecia) ou bioquímico (testosterona total/livre); 3) morfologia policística (≥ 20 folículos por ovário e/ou volume ≥ 10 mL na USG transvaginal) ou AMH elevado",
      "Se ciclos irregulares + hiperandrogenismo: diagnóstico feito, USG/AMH desnecessários",
      "Adolescentes (< 8 anos da menarca): exige ciclos irregulares + hiperandrogenismo; não usar USG nem AMH",
      "Riscos associados: DM2, DMG, dislipidemia, esteatose hepática, apneia do sono, depressão/ansiedade, câncer de endométrio"
    ]
  },
  exames: [
    {
      nome: "Exclusão de outras causas",
      pedido: "Beta-hCG. TSH. Prolactina. 17-OH-progesterona (manhã, fase folicular precoce). Testosterona total.",
      porQue: "SOP é diagnóstico de exclusão.",
      esperar: "Testosterona normal ou discretamente elevada.",
      interpretacao: "17-OHP elevada → endocrinologia (teste da cortrosina). Testosterona muito elevada ou virilização → imagem de ovários e adrenais.",
      limitacoes: "Dosar testosterona sem uso de anticoncepcional há ≥ 3 meses. SDHEA só se suspeita adrenal."
    },
    {
      nome: "Rastreio metabólico",
      pedido: "Teste oral de tolerância à glicose 75 g (jejum e 2 h) — ou glicemia de jejum e hemoglobina glicada. Colesterol total e frações, triglicerídeos. TGO, TGP.",
      porQue: "Alta prevalência de pré-diabetes, DM2, dislipidemia e esteatose.",
      esperar: "—",
      interpretacao: "Repetir rastreio glicêmico a cada 1–3 anos conforme risco; TOTG antes de engravidar.",
      limitacoes: "Insulina de jejum/HOMA não são recomendados para diagnóstico."
    },
    {
      nome: "Ultrassonografia pélvica transvaginal",
      pedido: "Ultrassonografia transvaginal com contagem de folículos e volume ovariano.",
      porQue: "3º critério quando só há 1 dos outros 2; avaliar endométrio se sangramento anormal.",
      esperar: "Morfologia policística: ≥ 20 folículos (2–9 mm) por ovário e/ou volume ovariano ≥ 10 mL.",
      interpretacao: "Ovário policístico isolado sem clínica não é SOP.",
      limitacoes: "Não usar em adolescentes. Via abdominal: usar só volume ovariano."
    }
  ],
  tratamento: [
    {
      droga: "Mudança de estilo de vida",
      linha: "l1",
      dose: "Dieta com déficit calórico se excesso de peso; atividade física ≥ 150 min/semana moderada (ou 75 min vigorosa) + fortalecimento 2×/semana",
      via: "—",
      intervalo: "—",
      duracao: "Contínuo",
      monitorizacao: "Peso, circunferência abdominal, ciclos",
      contraindicacoes: "—",
      ajustes: "Perda de 5–10% do peso já melhora ovulação e metabolismo"
    },
    {
      droga: "Anticoncepcional oral combinado (ex.: levonorgestrel 0,15 mg + etinilestradiol 0,03 mg)",
      linha: "l1",
      dose: "1 comprimido ao dia (menor dose eficaz de etinilestradiol, 20–30 mcg)",
      via: "VO",
      intervalo: "21/7 ou uso contínuo",
      duracao: "Enquanto não desejar gestação; hirsutismo leva ≥ 6 meses para responder",
      monitorizacao: "PA; critérios de elegibilidade OMS",
      contraindicacoes: "Categoria 4 do MEC (enxaqueca com aura, ≥ 35 anos fumante, TEV, HAS grave etc.)",
      ajustes: "Guideline 2023: não há preferência por progestagênio específico; evitar 50 mcg de EE. Ciproterona + EE só para hirsutismo moderado-grave (maior risco de TEV)"
    },
    {
      droga: "Metformina",
      linha: "l1",
      dose: "500 mg/dia, aumentar 500 mg a cada 1–2 semanas até 1.500–2.000 mg/dia",
      via: "VO, com refeições",
      intervalo: "1–2 vezes ao dia (liberação prolongada 1×/dia)",
      duracao: "Contínuo, reavaliar a cada 6–12 meses",
      monitorizacao: "Tolerância gastrointestinal, vitamina B12 em uso prolongado, função renal",
      contraindicacoes: "TFG < 30; acidose; insuficiência hepática",
      ajustes: "Indicada em IMC ≥ 25 e/ou alterações metabólicas, isolada ou com o anticoncepcional. Efeito modesto em peso e ciclo"
    },
    {
      droga: "Espironolactona (hirsutismo)",
      linha: "adj",
      dose: "50–100 mg/dia (até 200 mg/dia)",
      via: "VO",
      intervalo: "1–2 vezes ao dia",
      duracao: "Reavaliar em 6–12 meses",
      monitorizacao: "Potássio e creatinina se doença renal ou uso de iECA/BRA",
      contraindicacoes: "Gravidez (feminização de feto masculino); hipercalemia; IRA",
      ajustes: "Só com contracepção eficaz; associar após 6 meses de anticoncepcional sem resposta suficiente ou se anticoncepcional contraindicado (com outro método)"
    },
    {
      droga: "Acetato de medroxiprogesterona cíclico (proteção endometrial)",
      linha: "alt",
      dose: "10 mg/dia por 12–14 dias",
      via: "VO",
      intervalo: "A cada 1–3 meses",
      duracao: "Enquanto anovulatória sem outro método hormonal",
      monitorizacao: "Sangramento de privação",
      contraindicacoes: "Gravidez",
      ajustes: "Não é contraceptivo. Alternativas: SIU-LNG, pílula só de progestagênio"
    },
    {
      droga: "Letrozol (indução da ovulação — atenção especializada)",
      linha: "l1",
      dose: "2,5 mg/dia por 5 dias (do 3º ao 7º dia do ciclo), aumentar até 7,5 mg/dia",
      via: "VO",
      intervalo: "Por ciclo",
      duracao: "Até 6 ciclos ovulatórios",
      monitorizacao: "USG de ovulação, teste de gravidez",
      contraindicacoes: "Gravidez",
      ajustes: "1ª linha para infertilidade anovulatória (guideline 2023); uso off-label no Brasil. Clomifeno 50–150 mg do 3º ao 7º dia é alternativa"
    },
    {
      droga: "Inositol, suplementos sem evidência",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não recomendado na prática clínica pelo guideline 2023 (evidência limitada)",
      ajustes: "Pode ser decisão compartilhada, sem substituir tratamento eficaz"
    }
  ],
  destino: {
    agora: [
      "Confirmar diagnóstico, excluir diferenciais, orientar estilo de vida e iniciar tratamento conforme objetivo"
    ],
    reavaliar: [
      "3 meses após iniciar anticoncepcional ou metformina; 6 meses para hirsutismo",
      "Peso, PA e humor a cada consulta; rastreio glicêmico a cada 1–3 anos; lipídios conforme risco"
    ],
    alta: [
      "Seguimento na UBS de forma crônica (risco cardiometabólico ao longo da vida)"
    ],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: [
      "Ginecologia/reprodução humana: infertilidade (indução da ovulação)",
      "Endocrinologia: suspeita de HAC não clássica, Cushing, tumor androgênico, DM de difícil controle",
      "Ginecologia com prioridade: sangramento anormal com espessamento endometrial (biópsia)",
      "Dermatologia: hirsutismo/acne refratários (laser, isotretinoína)"
    ]
  },
  prescricao: {
    ambulatorial: "SOP SEM DESEJO DE GESTAÇÃO\nUSO ORAL\n1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia por 21 dias, pausa de 7 dias e reiniciar (ou uso contínuo, sem pausa).\n2. Metformina 500 mg (se IMC ≥ 25 ou alteração metabólica) --- 120 comprimidos\n   Tomar 1 comprimido no jantar por 1 semana; depois 1 no almoço e 1 no jantar; após 2 semanas, 2 no jantar e 1 no almoço (até 2.000 mg/dia), sempre com refeição.\n\nHIRSUTISMO SEM RESPOSTA APÓS 6 MESES (com contracepção)\n3. Espironolactona 50 mg -------------------------- 60 comprimidos\n   Tomar 1 comprimido 2 vezes ao dia. Não engravidar durante o uso.\n\nSE ANTICONCEPCIONAL CONTRAINDICADO (proteção do endométrio)\n4. Acetato de medroxiprogesterona 10 mg ------------ 14 comprimidos\n   Tomar 1 comprimido ao dia por 14 dias, a cada 1 a 2 meses, se não menstruar. Não protege contra gravidez.\n\nDESEJA ENGRAVIDAR (enquanto aguarda especialista)\n5. Ácido fólico 400 mcg (0,4 mg) ------------------ 30 comprimidos\n   Tomar 1 comprimido ao dia."
  },
  orientacoesRetorno: [
    "SOP é uma condição crônica e comum; tem tratamento e não impede de engravidar na maioria das vezes",
    "Perder um pouco de peso (5–10%) e se exercitar regularmente melhora a menstruação, a ovulação e o risco de diabetes",
    "O efeito sobre os pelos demora pelo menos 6 meses",
    "Metformina pode dar enjoo e diarreia no começo: tomar com comida e aumentar aos poucos",
    "Espironolactona: não pode engravidar durante o uso",
    "Procurar a UBS se: menstruação muito prolongada ou intensa, ficar mais de 3 meses sem menstruar sem usar hormônio, aumento rápido de pelos ou voz grossa, tristeza persistente",
    "Retornar em 3 meses e fazer exames de glicose e colesterol periodicamente"
  ],
  tabelas: [
    {
      titulo: "Tratamento conforme objetivo",
      colunas: ["Objetivo", "1ª escolha", "Alternativa/adjuvante"],
      linhas: [
        ["Regular ciclo / proteger endométrio", "Anticoncepcional combinado", "Progestogênio cíclico, SIU-LNG"],
        ["Hirsutismo / acne", "Anticoncepcional combinado (≥ 6 meses)", "+ espironolactona; cosméticos/laser"],
        ["Metabólico / peso", "Estilo de vida", "+ metformina; antiobesidade conforme indicação"],
        ["Engravidar", "Estilo de vida + letrozol (especialista)", "Clomifeno; gonadotrofinas; FIV"]
      ],
      nota: "International Evidence-based Guideline for the Assessment and Management of PCOS (2023)."
    }
  ],
  fontes: [
    "Monash University/ESHRE/ASRM — International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome (2023)",
    "FEBRASGO — Síndrome dos ovários policísticos (Série Orientações e Recomendações FEBRASGO)",
    "OMS — Medical eligibility criteria for contraceptive use, 6ª edição (2025)",
    "Endocrine Society — Evaluation and treatment of hirsutism in premenopausal women (2018)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
