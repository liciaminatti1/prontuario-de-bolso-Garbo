// Cetoacidose diabética na criança e no adolescente
registrarFicha({
  id: "cad-pediatrica",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "pediatrico",
  formato: "completo",
  titulo: "Cetoacidose diabética na criança e no adolescente (ISPAD)",
  resumo: "Hiperglicemia (> 200 mg/dL ou diabetes conhecido), acidose (pH venoso < 7,3 ou bicarbonato < 18 mmol/L) e cetose (beta-hidroxibutirato ≥ 3 mmol/L ou cetonúria moderada/grande). Frequente na abertura do DM1. Principal risco: edema cerebral.",
  palavrasChave: "cad cetoacidose diabetica crianca adolescente pediatrica dm1 abertura diabetes tipo 1 insulina regular infusao edema cerebral manitol salina hipertonica potassio ispad beta hidroxibutirato cetonuria",
  critico: {
    tempo: "Insulina só 1 h após o volume",
    texto: "Expansão 10–20 mL/kg em 20–30 min; depois déficit + manutenção em 24–48 h. Insulina 0,05–0,1 U/kg/h sem bolus, 1 h após iniciar fluidos. Potássio no soro. Vigie edema cerebral a cada hora."
  },
  alarmes: [
    "Cefaleia que surge ou piora, vômitos recorrentes após melhora, irritabilidade, sonolência, confusão",
    "Queda da FC não explicada por sono ou melhora volêmica, aumento da PA, queda de SpO₂ (edema cerebral)",
    "Postura anormal, paralisia de nervo craniano, padrão respiratório irregular, incontinência inapropriada para a idade",
    "Criança < 5 anos, abertura do diabetes, pH < 7,1, ureia elevada, PaCO₂ muito baixa: maior risco de edema cerebral",
    "K < 3,5 ou > 5,5 mEq/L; alterações no ECG",
    "Choque (hipotensão é tardia na criança)",
    "Glicemia caindo > 90 mg/dL/h ou sódio corrigido caindo"
  ],
  condutaInicial: [
    "ABC, monitor, pesar a criança (peso real para os cálculos), 2 acessos venosos",
    "Glicemia capilar e cetonemia, gasometria venosa, sódio, potássio, cloro, ureia, creatinina, cálcio, fósforo, magnésio, hemograma",
    "Estimar desidratação: leve 5%; moderada 5–7%; grave 7–10% (CAD grave costuma ter 7–10%)",
    "Choque: SF 0,9% 20 mL/kg o mais rápido possível, repetir se necessário",
    "Sem choque: SF 0,9% (ou Ringer lactato) 10–20 mL/kg em 20–30 min; repetir se má perfusão",
    "Depois, reposição do déficit + manutenção em 24–48 h com SF 0,9% ou Ringer lactato (≥ 0,45% após 4–6 h); em geral 1,5–2 vezes a manutenção. Não descontar perdas urinárias",
    "Potássio: K < 3,5 → repor já na expansão e adiar insulina; K 3,5–5,5 → 40 mEq/L no soro ao iniciar a insulina; K > 5,5 → aguardar diurese e queda do K",
    "Insulina regular IV 0,05–0,1 U/kg/h sem bolus, iniciada 1 h após o começo dos fluidos",
    "Glicemia 250–300 mg/dL ou queda > 90 mg/dL/h: acrescentar glicose (SG 5%; até 10–12,5% se necessário) mantendo a insulina",
    "Glicemia e neurológico de 1/1 h; eletrólitos e gasometria de 2/2 h a 4/4 h",
    "Buscar desencadeante (infecção, omissão de insulina) e tratar"
  ],
  fataisExcluir: [
    "Edema cerebral",
    "Hipocalemia grave durante a insulinoterapia",
    "Hipoglicemia",
    "Choque e lesão renal aguda",
    "Infecção grave como gatilho (sepse, meningite)",
    "Abdome agudo (dor abdominal da CAD melhora com o tratamento; se não, investigar)",
    "Estado hiperglicêmico hiperosmolar associado (glicemia > 600, osmolalidade > 320)"
  ],
  proximaDecisao: "Resolução (pH > 7,30, bicarbonato > 18 mmol/L e beta-hidroxibutirato < 1 mmol/L), aceitando dieta → iniciar insulina SC e desligar a infusão 15–30 min após análogo rápido ou 1–2 h após insulina regular SC. Sinal de edema cerebral → tratar imediatamente (manitol ou salina 3%) antes de TC.",
  clinica: {
    anamnese: [
      "Poliúria, polidipsia, enurese nova, perda de peso, astenia (abertura de DM1)",
      "DM1 conhecido: omissão de insulina, bomba de insulina com falha, doença intercorrente",
      "Vômitos, dor abdominal, respiração rápida",
      "Cefaleia, sonolência",
      "Infecção recente, febre",
      "Adolescente: uso de drogas, gestação, transtorno alimentar, questões psicossociais"
    ],
    exameFisico: [
      "Peso, sinais vitais, perfusão, enchimento capilar",
      "Respiração de Kussmaul, hálito cetônico",
      "Grau de desidratação (mucosas, turgor, enchimento capilar)",
      "Glasgow e exame neurológico basal (comparar a cada hora)",
      "Foco infeccioso; candidíase genital"
    ],
    diferenciais: [
      { dx: "Gastroenterite com desidratação", pista: "Glicemia normal ou pouco alta, sem cetose importante" },
      { dx: "Abdome agudo", pista: "Dor que persiste após correção da acidose" },
      { dx: "Pneumonia / asma", pista: "Taquipneia sem acidose metabólica; ausculta, radiografia" },
      { dx: "Intoxicação (salicilato)", pista: "Acidose com hiperventilação, glicemia variável, história" },
      { dx: "Estado hiperglicêmico hiperosmolar", pista: "Glicemia > 600 mg/dL, osmolalidade > 320, pH > 7,25, cetose leve; exige volume maior e insulina mais tardia/menor" }
    ],
    gravidade: [
      "Leve: pH venoso < 7,3 ou bicarbonato < 18 mmol/L",
      "Moderada: pH < 7,2 ou bicarbonato < 10 mmol/L",
      "Grave: pH < 7,1 ou bicarbonato < 5 mmol/L",
      "UTI pediátrica: CAD grave, < 5 anos com CAD moderada/grave, sinais de edema cerebral, choque, alteração de consciência, distúrbio eletrolítico grave"
    ]
  },
  exames: [
    {
      nome: "Gasometria venosa e eletrólitos",
      pedido: "Gasometria venosa, sódio, potássio, cloro, cálcio, fósforo, magnésio, ureia, creatinina, glicemia.",
      porQue: "Classificar gravidade e guiar fluidos e potássio.",
      esperar: "pH < 7,3, bicarbonato < 18, ânion gap alto.",
      interpretacao: "Na corrigido = Na + 1,6 × (glicemia − 100)/100. Na corrigido deve se manter estável ou subir; queda é sinal de alerta para edema cerebral. Osmolalidade efetiva = 2 × Na + glicemia/18.",
      limitacoes: "Repetir de 2/2 h a 4/4 h; K de 1/1 h a 2/2 h se alterado."
    },
    {
      nome: "Cetonemia (beta-hidroxibutirato)",
      pedido: "Beta-hidroxibutirato capilar ou sérico; na falta, cetonúria por fita.",
      porQue: "Confirmar e monitorar cetose.",
      esperar: "≥ 3 mmol/L.",
      interpretacao: "< 1 mmol/L com pH > 7,3: resolução.",
      limitacoes: "Cetonúria persiste após a resolução; não guiar a alta por ela."
    },
    {
      nome: "Investigação do desencadeante e da abertura",
      pedido: "Hemograma, PCR, urina tipo 1 e urocultura; hemocultura se febre. Na abertura de DM1: HbA1c, TSH e T4 livre, anticorpo antitransglutaminase IgA e IgA total (podem ser colhidos depois).",
      porQue: "Infecção como gatilho; rastreio de doenças autoimunes associadas.",
      esperar: "Leucocitose é comum na CAD mesmo sem infecção.",
      interpretacao: "Febre não é da CAD: investigar.",
      limitacoes: "—"
    },
    {
      nome: "ECG",
      pedido: "ECG de 12 derivações se K alterado.",
      porQue: "Sinais de hipo ou hipercalemia.",
      esperar: "—",
      interpretacao: "Onda T apiculada (hiper); onda U, T achatada (hipo).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "SF 0,9% (ou Ringer lactato) — expansão",
      linha: "l1",
      dose: "10–20 mL/kg (choque: 20 mL/kg o mais rápido possível)",
      via: "IV",
      intervalo: "Em 20–30 min; repetir se má perfusão",
      duracao: "1ª hora",
      monitorizacao: "Perfusão, FC, PA, diurese",
      contraindicacoes: "—",
      ajustes: "Expansão inicial não é descontada do cálculo do déficit em muitos protocolos; seguir protocolo local"
    },
    {
      droga: "Reposição: déficit + manutenção",
      linha: "l1",
      dose: "Volume em 48 h = (déficit estimado: 5–10% do peso) + 2 × manutenção diária (Holliday-Segar); em geral 1,5–2 × a manutenção por hora",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "24–48 h",
      monitorizacao: "Balanço hídrico, sódio corrigido, peso",
      contraindicacoes: "—",
      ajustes: "SF 0,9% ou Ringer lactato nas primeiras 4–6 h; depois solução com NaCl ≥ 0,45% + potássio. Cálculo do peso: usar o peso atual. Limitar a volume máximo de ~ 1,5–2 × manutenção em obesos (peso ideal)"
    },
    {
      droga: "Insulina regular 100 U/mL em infusão",
      linha: "l1",
      dose: "0,05–0,1 U/kg/h (0,05 em crianças pequenas ou CAD leve)",
      via: "IV contínua em bomba, sem bolus",
      intervalo: "Iniciar 1 h após o começo dos fluidos",
      duracao: "Até resolução da acidose (não da hiperglicemia)",
      monitorizacao: "Glicemia de 1/1 h; queda ideal ≤ 90 mg/dL/h",
      contraindicacoes: "K < 3,5 mEq/L (repor antes)",
      ajustes: "Diluição: 50 U (0,5 mL) + 49,5 mL SF 0,9% = 1 U/mL → 0,1 mL/kg/h = 0,1 U/kg/h. Lavar o equipo com 20 mL da solução. Não reduzir para < 0,05 U/kg/h antes da resolução: aumentar a glicose do soro"
    },
    {
      droga: "Cloreto de potássio 19,1% (2,5 mEq/mL)",
      linha: "l1",
      dose: "40 mEq/L do soro de reposição (16 mL por litro); se vazão > 10 mL/kg/h, 20 mEq/L",
      via: "IV, no soro",
      intervalo: "Contínuo",
      duracao: "Durante toda a infusão de insulina",
      monitorizacao: "K de 2/2 h a 4/4 h (1/1 h a 2/2 h se alterado), ECG",
      contraindicacoes: "K > 5,5 sem diurese (aguardar)",
      ajustes: "K < 3,5: iniciar já com a expansão. Taxa máxima 0,5 mEq/kg/h. Pode-se usar parte como fosfato de potássio se fósforo muito baixo"
    },
    {
      droga: "Glicose (SG 5% a 10%) no soro",
      linha: "l1",
      dose: "Glicose 5% quando glicemia ~ 250–300 mg/dL ou queda > 90 mg/dL/h; até 10–12,5% se glicemia continua caindo com insulina ≥ 0,05 U/kg/h",
      via: "IV, no soro de reposição (sistema de 2 bolsas facilita ajustes)",
      intervalo: "Contínuo",
      duracao: "Até resolução",
      monitorizacao: "Glicemia de 1/1 h; alvo 150–250 mg/dL durante a infusão",
      contraindicacoes: "—",
      ajustes: "Glicemia < 70 mg/dL: aumentar glicose e só então reduzir a insulina"
    },
    {
      droga: "Manitol 20% (edema cerebral)",
      linha: "l1",
      dose: "0,5–1 g/kg (2,5–5 mL/kg)",
      via: "IV em 10–15 min",
      intervalo: "Repetir em 30 min a 2 h se sem resposta",
      duracao: "—",
      monitorizacao: "Neurológico, PA, diurese",
      contraindicacoes: "—",
      ajustes: "Alternativa equivalente: salina hipertônica 3% 2,5–5 mL/kg em 10–15 min (preparo: 89 mL de SF 0,9% + 11 mL de NaCl 20%). Reduzir os fluidos em 1/3, cabeceira 30°, intubar se necessário evitando hiperventilação; TC só após estabilizar"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "1–2 mEq/kg",
      via: "IV em 60 min (diluído)",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "K, gasometria",
      contraindicacoes: "Uso rotineiro (aumenta risco de edema cerebral)",
      ajustes: "Só se pH < 6,9 com contratilidade cardíaca reduzida ou hipercalemia com risco de vida"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência/observação com monitor, bomba de infusão e glicemia horária",
      "Contato com pediatria/endocrinologia pediátrica"
    ],
    reavaliar: [
      "Glicemia, sinais vitais e Glasgow de 1/1 h",
      "Eletrólitos e gasometria de 2/2 h a 4/4 h",
      "Balanço hídrico de 1/1 h"
    ],
    alta: [
      "CAD resolvida, aceitando dieta, em insulina SC com doses definidas",
      "Família treinada (aplicação, glicemia capilar, hipoglicemia, dias de doença) e insumos garantidos pelo SUS",
      "Seguimento agendado com endocrinologia pediátrica/UBS em poucos dias"
    ],
    observacao: [
      "CAD leve com resolução rápida e criança maior: pode concluir em enfermaria pediátrica"
    ],
    internacao: [
      "Todas as CAD: enfermaria pediátrica com protocolo",
      "UTI pediátrica: CAD grave, < 5 anos com CAD moderada/grave, edema cerebral, choque, rebaixamento"
    ],
    transferencia: [
      "Sem bomba de infusão, laboratório ou equipe pediátrica: regulação após expansão e início do potássio; insulina só com monitorização adequada"
    ]
  },
  prescricao: {
    hospitalar: "CAD PEDIÁTRICA (peso: ___ kg; exemplo 20 kg, desidratação 7%)\n1. Dieta zero até melhora da acidose e sem vômitos.\n2. Monitor, oximetria, cabeceira 30°, 2 acessos, balanço hídrico, glicemia capilar de 1/1 h, Glasgow e sinais vitais de 1/1 h.\n3. Expansão: SF 0,9% 200–400 mL (10–20 mL/kg) IV em 20–30 min; repetir se má perfusão.\n4. Reposição (48 h): déficit 7% = 1.400 mL + manutenção 2 × 1.500 mL = 3.000 mL → 4.400 mL em 48 h ≈ 90 mL/h.\n   SF 0,9% 500 mL + KCl 19,1% 8 mL (20 mEq; 40 mEq/L) a 90 mL/h nas primeiras 4–6 h; depois NaCl 0,45% (ou SF 0,9%) com a mesma concentração de KCl.\n   Ajustar KCl: K < 3,5 iniciar já; K > 5,5 aguardar diurese.\n5. Após 1 h de fluidos: insulina regular 100 U/mL — 0,5 mL (50 U) + SF 0,9% 49,5 mL (1 U/mL) IV em bomba a 2 mL/h (0,1 U/kg/h) [ou 1 mL/h = 0,05 U/kg/h]. Desprezar 20 mL pelo equipo.\n6. Glicemia ≤ 300 mg/dL ou queda > 90 mg/dL/h: trocar o soro por SG 5% + NaCl (0,45–0,9%) + KCl na mesma vazão total; se glicemia < 150 mg/dL com insulina 0,05 U/kg/h, usar SG 10%.\n7. Ondansetrona 0,15 mg/kg IV (máx 4 mg) de 8/8 h se vômitos.\n8. Controles: sódio, potássio, cloro, gasometria venosa e beta-hidroxibutirato de 2/2 h a 4/4 h; fósforo, magnésio e cálcio de 6/6 h a 12/12 h.\n9. EDEMA CEREBRAL (cefaleia, bradicardia, hipertensão, alteração de consciência): manitol 20% 5 mL/kg (1 g/kg = 100 mL) IV em 15 min OU salina 3% 5 mL/kg (100 mL) IV em 15 min; reduzir a reposição em 1/3; chamar UTI pediátrica.\n10. Transição: pH > 7,3, bicarbonato > 18 e cetonemia < 1, aceitando dieta: insulina SC antes de uma refeição; desligar a bomba 1–2 h após insulina regular SC (ou 15–30 min após análogo rápido).",
    ambulatorial: "ALTA — ESQUEMA SC INICIAL (exemplo com insulinas do SUS; dose total ≈ 0,7–1 U/kg/dia em pré-púbere, até 1–1,2 U/kg/dia ou mais em púbere; ajustar com endocrinologia)\nUSO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ------------------ ___ frascos\n   Aplicar ___ UI antes do café e ___ UI antes de dormir (cerca de metade da dose total).\n2. Insulina humana regular 100 UI/mL -------------- ___ frascos\n   Aplicar ___ UI 30 minutos antes do café, do almoço e do jantar (outra metade, conforme glicemia e alimentação).\n   (Análogos de ação rápida e longa conforme PCDT de DM1 e disponibilidade.)\n3. Seringas de insulina com agulha curta, glicosímetro, tiras e lancetas (SUS).\n\nMONITORIZAÇÃO\nGlicemia capilar antes das refeições, ao deitar e de madrugada nos primeiros dias; anotar e trazer no retorno.\n\nHIPOGLICEMIA (glicemia < 70 mg/dL)\nDar açúcar de absorção rápida, cerca de 0,3 g/kg (criança de 50 kg ou mais: 15 g = 1 colher de sopa rasa de açúcar em água ou 150 mL de suco ou refrigerante comum), e repetir a glicemia em 15 min. Repetir se continuar < 70 mg/dL."
  },
  orientacoesRetorno: [
    "Nunca deixar de aplicar a insulina basal (NPH ou análogo), mesmo se a criança comer pouco ou estiver doente",
    "Em dias de doença: medir glicemia a cada 2–4 h e cetona (fita) se glicemia > 250 mg/dL; oferecer líquidos",
    "Voltar imediatamente se: vômitos que não param, dor de barriga forte, respiração rápida ou funda, sonolência, confusão, cetona moderada ou alta, glicemia > 250–300 mg/dL que não baixa",
    "Reconhecer e tratar hipoglicemia (tremor, suor, palidez, irritabilidade, sonolência); avisar a escola",
    "Guardar a insulina em uso fora do congelador (geladeira ou local fresco conforme bula); trocar a agulha e fazer rodízio dos locais",
    "Consulta com endocrinologia pediátrica e equipe da UBS em até 1 semana; apoio de nutrição e psicologia"
  ],
  tabelas: [
    {
      titulo: "Manutenção hídrica (Holliday-Segar)",
      colunas: ["Peso", "Volume por dia", "Por hora (aproximado)"],
      linhas: [
        ["Até 10 kg", "100 mL/kg", "4 mL/kg/h"],
        ["10–20 kg", "1.000 mL + 50 mL/kg acima de 10 kg", "40 mL/h + 2 mL/kg/h acima de 10 kg"],
        ["> 20 kg", "1.500 mL + 20 mL/kg acima de 20 kg", "60 mL/h + 1 mL/kg/h acima de 20 kg"]
      ],
      nota: "Volume em 48 h = déficit (5–10% do peso) + 2 × manutenção diária. Taxa resultante costuma ficar entre 1,5 e 2 × a manutenção."
    },
    {
      titulo: "Potássio no soro conforme K sérico",
      colunas: ["K sérico (mEq/L)", "Conduta"],
      linhas: [
        ["< 3,5", "Repor já na expansão; adiar insulina até K ≥ 3,5"],
        ["3,5–5,5", "40 mEq/L no soro ao iniciar a insulina"],
        ["> 5,5", "Sem K até diurese presente e K em queda; dosar de 1/1 h a 2/2 h"]
      ],
      nota: "KCl 19,1% = 2,5 mEq/mL. Máximo 0,5 mEq/kg/h."
    }
  ],
  fontes: [
    "ISPAD — Clinical Practice Consensus Guidelines 2022: Diabetic ketoacidosis and hyperglycemic hyperosmolar state (Glaser N et al., Pediatr Diabetes, 2022)",
    "Kuppermann N et al. — Clinical Trial of Fluid Infusion Rates for Pediatric Diabetic Ketoacidosis (PECARN FLUID, NEJM, 2018)",
    "ISPAD — Clinical Practice Consensus Guidelines 2022: Insulin treatment in children and adolescents with diabetes",
    "Ministério da Saúde — PCDT Diabete Melito Tipo 1 (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
