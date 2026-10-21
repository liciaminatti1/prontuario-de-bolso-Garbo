// Diabetes mellitus tipo 2
registrarFicha({
  id: "diabetes-tipo-2",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Diabetes mellitus tipo 2",
  resumo: "Diagnóstico, metas, início e intensificação do tratamento e rastreamento de complicações na atenção primária.",
  palavrasChave: "diabetes dm2 glicemia hba1c metformina gliclazida glibenclamida dapagliflozina insulina nph pe diabetico",
  critico: {
    tempo: "Glicemia > 300 com sintomas",
    texto: "Glicemia > 300 com vômitos, desidratação, confusão ou cetose → descartar cetoacidose ou estado hiperosmolar (PS)."
  },
  alarmes: [
    "Glicemia > 300 mg/dL com sintomas, vômitos ou rebaixamento",
    "Perda de peso importante e poliúria (insulinopenia)",
    "Úlcera, infecção ou isquemia no pé",
    "Hipoglicemias repetidas",
    "Queda rápida da TFG"
  ],
  condutaInicial: [
    "Confirmar diagnóstico (2 exames alterados ou 1 com sintomas clássicos)",
    "Definir meta individual de HbA1c (em geral < 7%)",
    "Mudança de estilo de vida para todos",
    "Metformina se sem contraindicação; iSGLT2 (ou agonista de GLP-1) se DCV, IC ou DRC, independentemente da HbA1c",
    "Rastrear complicações: pé, fundo de olho, albuminúria, TFG, lipídios"
  ],
  fataisExcluir: [
    "Cetoacidose / estado hiperosmolar",
    "DM1 ou LADA (jovem, magro, perda de peso, cetose)",
    "Pé diabético infectado / isquêmico",
    "Doença cardiovascular silenciosa"
  ],
  proximaDecisao: "HbA1c acima da meta após 3 meses de dose adequada → associar segundo fármaco. HbA1c ≥ 10% ou glicemia ≥ 300 com sintomas catabólicos → iniciar insulina.",
  clinica: {
    anamnese: [
      "Sintomas: poliúria, polidipsia, perda de peso, visão turva, infecções de repetição",
      "Hipoglicemias, adesão, dieta, atividade física",
      "Comorbidades: HAS, dislipidemia, DCV, IC, DRC, esteatose",
      "Sintomas de neuropatia, disfunção erétil, claudicação",
      "Tabagismo, álcool, história familiar"
    ],
    exameFisico: [
      "Peso, IMC, circunferência abdominal, PA",
      "Exame dos pés a cada consulta de rotina e completo anual: monofilamento 10 g, diapasão, pulsos, deformidades, calosidades",
      "Acantose nigricans",
      "Pele e locais de aplicação de insulina (lipodistrofia)"
    ],
    diferenciais: [
      { dx: "DM1 / LADA", pista: "Jovem ou magro, perda de peso, cetose, má resposta a orais; anti-GAD" },
      { dx: "Diabetes secundário", pista: "Corticoide, pancreatite crônica, Cushing, hemocromatose" },
      { dx: "Pré-diabetes", pista: "Jejum 100–125, HbA1c 5,7–6,4%, TOTG 2h 140–199" },
      { dx: "Diabetes gestacional", pista: "Diagnosticado na gestação" }
    ],
    gravidade: [
      "Diagnóstico: jejum ≥ 126, HbA1c ≥ 6,5%, TOTG 2h ≥ 200, ou casual ≥ 200 com sintomas",
      "Alto risco: DCV estabelecida, DRC, IC, lesão de órgão-alvo"
    ]
  },
  exames: [
    {
      nome: "HbA1c e glicemia de jejum",
      pedido: "Hemoglobina glicada (HbA1c) e glicemia de jejum.",
      porQue: "Diagnóstico e acompanhamento.",
      esperar: "—",
      interpretacao: "Repetir a cada 3 meses fora da meta e a cada 6 meses na meta.",
      limitacoes: "HbA1c não confiável em anemia, hemoglobinopatias, DRC avançada, gestação, transfusão recente."
    },
    {
      nome: "Rastreamento de nefropatia",
      pedido: "Creatinina com TFG estimada e relação albumina/creatinina em amostra isolada de urina — anual.",
      porQue: "Detectar doença renal do diabetes e orientar fármacos.",
      esperar: "RAC < 30 mg/g.",
      interpretacao: "RAC ≥ 30 ou TFG < 60 → IECA/BRA e iSGLT2; ajustar metformina.",
      limitacoes: "Confirmar albuminúria em 2 de 3 amostras."
    },
    {
      nome: "Perfil lipídico e outros anuais",
      pedido: "Colesterol total, HDL, triglicerídeos, LDL; TGO, TGP; urina tipo 1; vitamina B12 em uso prolongado de metformina.",
      porQue: "Risco cardiovascular, esteatose, deficiência de B12.",
      esperar: "—",
      interpretacao: "Maioria dos diabéticos de 40–75 anos tem indicação de estatina.",
      limitacoes: "—"
    },
    {
      nome: "Retinografia / fundo de olho",
      pedido: "Fundoscopia sob midríase ou retinografia — ao diagnóstico e anual (a cada 2 anos se normal e bom controle).",
      porQue: "Retinopatia é assintomática até fases avançadas.",
      esperar: "—",
      interpretacao: "Retinopatia → encaminhar oftalmologia.",
      limitacoes: "—"
    },
    {
      nome: "ECG",
      pedido: "Eletrocardiograma de repouso — ao diagnóstico.",
      porQue: "Isquemia silenciosa, arritmias.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Metformina",
      linha: "l1",
      dose: "Iniciar 500 mg 1–2×/dia; aumentar a cada 1–2 semanas até 2 g/dia (máx 2,55 g)",
      via: "VO, com refeições",
      intervalo: "1–3×/dia (XR 1×/dia, no jantar)",
      duracao: "Contínuo",
      monitorizacao: "TFG, B12, sintomas gastrointestinais",
      contraindicacoes: "TFG < 30; suspender em contraste/cirurgia com risco de LRA, choque, hipóxia",
      ajustes: "TFG 30–45: máx 1 g/dia. Intolerância: formulação XR"
    },
    {
      droga: "Dapagliflozina (iSGLT2)",
      linha: "l1",
      dose: "10 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Infecção genital, volemia, cetoacidose euglicêmica",
      contraindicacoes: "DM1, cetoacidose prévia",
      ajustes: "Prioridade se DCV, IC ou DRC (benefício independente da glicemia). No SUS (Componente Especializado, PCDT DM2 2024): como intensificação após metformina + sulfonilureia, em ≥ 65 anos com DCV estabelecida ou 40–64 anos com DCV estabelecida ou alto risco cardiovascular (conferir critérios atuais de dispensação). Suspender 3 dias antes de cirurgia e em doença aguda com desidratação ou jejum"
    },
    {
      droga: "Gliclazida MR",
      linha: "alt",
      dose: "30–120 mg",
      via: "VO, no café da manhã",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Hipoglicemia, peso",
      contraindicacoes: "Insuficiência hepática grave, gestação",
      ajustes: "Preferir à glibenclamida em idosos e DRC (menor hipoglicemia). Glibenclamida 2,5–20 mg/dia é alternativa"
    },
    {
      droga: "Insulina NPH (basal)",
      linha: "l1",
      dose: "10 U ou 0,1–0,2 U/kg ao deitar",
      via: "SC",
      intervalo: "1×/dia (ao deitar); dividir 2×/dia se > 0,5 U/kg",
      duracao: "Contínuo",
      monitorizacao: "Glicemia de jejum",
      contraindicacoes: "—",
      ajustes: "Titular +2 U a cada 3 dias até jejum 80–130 mg/dL; reduzir 10–20% se hipoglicemia"
    },
    {
      droga: "Agonista de GLP-1",
      linha: "alt",
      dose: "Conforme fármaco (liraglutida, semaglutida, dulaglutida)",
      via: "SC (semaglutida também VO)",
      intervalo: "Diário ou semanal",
      duracao: "Contínuo",
      monitorizacao: "Náusea, pancreatite",
      contraindicacoes: "Carcinoma medular de tireoide / NEM2",
      ajustes: "Boa opção com obesidade ou DCV aterosclerótica; acesso limitado no SUS"
    }
  ],
  destino: {
    agora: [
      "Confirmar diagnóstico, iniciar tratamento, educação em diabetes",
      "Estratificar risco cardiovascular e iniciar estatina se indicado"
    ],
    reavaliar: [
      "Após início ou ajuste: 4–12 semanas",
      "HbA1c a cada 3 meses até a meta, depois 6 meses",
      "Pé, fundo de olho, albuminúria e TFG anualmente"
    ],
    alta: [
      "Seguimento longitudinal na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Cetoacidose, estado hiperosmolar, pé diabético grave"
    ],
    transferencia: [
      "Endocrinologia: suspeita de DM1/LADA, HbA1c fora da meta com insulina otimizada, DM na gestação",
      "Nefrologia: TFG < 30 ou queda rápida",
      "Ambulatório do pé diabético / vascular: úlcera, isquemia",
      "PS: glicemia > 300 com sintomas, cetose ou rebaixamento"
    ]
  },
  prescricao: {
    ambulatorial: "INÍCIO — METFORMINA (titular a cada 1–2 semanas)\nUSO ORAL\n1. Metformina 850 mg ----------------------------- 60 comprimidos\n   Tomar 1 comprimido após o jantar na 1ª semana; depois 1 comprimido após o café e 1 após o jantar. (Se intolerância: metformina 500 mg, subir mais devagar; máx 2.550 mg/dia; TFG 30–45: máx 1.000 mg/dia.)\n\nSEGUNDO FÁRMACO (HbA1c acima da meta após 3 meses)\n2. Gliclazida 30 mg de liberação modificada -------- 30 comprimidos\n   Tomar 1 comprimido no café da manhã; aumentar 30 mg a cada 2–4 semanas conforme glicemia (máx 120 mg/dia).\n   E/OU, se DCV, IC ou DRC (ou como 2º fármaco):\n3. Dapagliflozina 10 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Beber água; higiene íntima diária.\n\nINSULINA BASAL (HbA1c ≥ 10%, glicemia ≥ 300 com sintomas ou falha dos orais)\nUSO SUBCUTÂNEO\n4. Insulina humana NPH 100 UI/mL ------------------ 1 frasco/caneta ao mês (ajustar)\n   Aplicar 10 UI (ou 0,1–0,2 UI/kg) às 22 h. Aumentar 2 UI a cada 3 dias até glicemia de jejum 80–130 mg/dL; reduzir 10–20% se hipoglicemia.\n5. Seringas de insulina, tiras e lancetas para glicemia capilar (SUS).\n\nPEDIDO DE EXAMES (a cada 3–6 meses / anual)\nHbA1c, glicemia de jejum; anual: creatinina com TFG, relação albumina/creatinina urinária, perfil lipídico, TGO/TGP, vitamina B12 (metformina), retinografia/fundo de olho."
  },
  orientacoesRetorno: [
    "Plano alimentar com menos açúcar, farinha branca e ultraprocessados; atividade física 150 min por semana; perder 5–10% do peso se acima do ideal",
    "Hipoglicemia (tremor, suor frio, fome, confusão): tomar 1 colher de sopa de açúcar em água ou 150 mL de suco, medir de novo em 15 min",
    "Examinar os pés todos os dias; não andar descalço; voltar logo se ferida, bolha, mudança de cor ou dor no pé",
    "Voltar imediatamente se: muita sede e urina, vômitos, dor na barriga, respiração rápida, sonolência ou glicemia > 300 mg/dL",
    "Dapagliflozina: suspender em vômitos, diarreia forte, jejum prolongado ou cirurgia e procurar a UBS",
    "Retorno em 4–12 semanas após iniciar ou mudar remédio; HbA1c a cada 3 meses até a meta, depois a cada 6 meses; exame dos pés, olhos e urina 1 vez ao ano"
  ],
  fontes: [
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes (2025)",
    "ADA — Standards of Care in Diabetes 2026",
    "Ministério da Saúde — PCDT Diabete Melito Tipo 2 (Portaria SECTICS/MS nº 7, 2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
