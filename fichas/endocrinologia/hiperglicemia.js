// Hiperglicemia descompensada e estado hiperglicêmico hiperosmolar
registrarFicha({
  id: "hiperglicemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hiperglicemia descompensada e estado hiperglicêmico hiperosmolar (EHH)",
  resumo: "Adulto no PS com glicemia muito elevada. Separa hiperglicemia sem crise (alta com ajuste) do estado hiperglicêmico hiperosmolar: glicemia ≥ 600 mg/dL, osmolalidade efetiva > 300 mOsm/kg, sem cetoacidose importante, com desidratação grave e alteração de consciência.",
  palavrasChave: "ehh estado hiperosmolar coma hiperosmolar hiperglicemia descompensada glicemia alta diabetes descompensado desidratacao osmolalidade sodio corrigido insulina regular nph soro fisiologico idoso",
  critico: {
    tempo: "Volume antes da insulina no EHH",
    texto: "No EHH, o soro sozinho já baixa a glicemia. Comece com SF 0,9%, confira o potássio e só inicie insulina em dose baixa (0,05 UI/kg/h) quando a glicemia parar de cair com o soro ou se houver cetose."
  },
  alarmes: [
    "Rebaixamento de consciência, convulsão ou déficit focal",
    "Osmolalidade efetiva > 320 mOsm/kg ou sódio corrigido > 160 mEq/L",
    "Hipotensão, choque, oligúria",
    "K < 3,5 ou > 6,0 mEq/L",
    "pH < 7,3 ou cetonemia ≥ 3 mmol/L (cetoacidose ou quadro misto → ficha Cetoacidose)",
    "Queda de osmolalidade > 8 mOsm/kg/h ou de glicemia > 90 mg/dL/h (risco de edema cerebral e mielinólise)"
  ],
  condutaInicial: [
    "Glicemia capilar, monitor, acesso venoso calibroso, Glasgow",
    "Gasometria venosa, Na, K, Cl, ureia, creatinina, cetonemia (ou cetonúria); calcular osmolalidade efetiva e Na corrigido",
    "Separar: CAD (cetose + acidose), EHH (osmolalidade > 300, pH ≥ 7,3, HCO₃ ≥ 15, cetonemia < 3) ou hiperglicemia sem crise",
    "EHH: SF 0,9% 1.000 mL na 1ª hora e depois 500–1.000 mL/h nas primeiras 2–4 h (alíquotas menores em idoso cardiopata/DRC)",
    "Potássio como na CAD: K < 3,5 → repor e adiar insulina",
    "Profilaxia de TEV com enoxaparina, salvo contraindicação",
    "Buscar o gatilho: infecção, IAM, AVC, suspensão de medicação, corticoide, diurético, desidratação em idoso acamado"
  ],
  fataisExcluir: [
    "Infecção grave/sepse como gatilho (pneumonia, ITU, pé diabético)",
    "IAM ou AVC desencadeante (e AVC como diferencial do rebaixamento)",
    "Cetoacidose associada (quadro misto)",
    "Trombose venosa ou arterial (hiperviscosidade)",
    "Rabdomiólise, lesão renal aguda",
    "Edema cerebral por correção rápida (raro em adulto, mais em jovens)"
  ],
  proximaDecisao: "EHH: glicemia caindo < 90 mg/dL/h (5 mmol/L/h) só com soro (ou cetonemia > 1 mmol/L) → insulina regular IV 0,05 UI/kg/h. Glicemia < 250 mg/dL → acrescentar SG 5% e manter glicemia em 180–270 mg/dL nas primeiras 24 h. Resolução: osmolalidade < 300, glicemia < 250, diurese > 0,5 mL/kg/h e consciência melhor → insulina SC com sobreposição de 1–2 h. Hiperglicemia sem crise, comendo, sem gatilho grave → alta com ajuste e retorno precoce.",
  clinica: {
    anamnese: [
      "DM conhecido? Tipo, tempo, medicações, insulina, adesão, acesso aos insumos",
      "Poliúria, polidipsia, perda de peso, visão turva, fraqueza (EHH evolui em dias a semanas)",
      "Ingesta hídrica reduzida (idoso dependente, demência, acamado)",
      "Gatilhos: febre, tosse, disúria, ferida no pé, dor torácica, déficit neurológico",
      "Drogas: corticoide, tiazídico, antipsicótico atípico, iSGLT2 (cetoacidose euglicêmica), interrupção de insulina",
      "Sintomas de DM tipo 1 novo em jovem magro (pensar em cetoacidose)"
    ],
    exameFisico: [
      "Desidratação: mucosas, turgor, PA (incluindo postural), FC, perfusão, diurese",
      "Nível de consciência (Glasgow), sinais focais, convulsão",
      "Respiração de Kussmaul ou hálito cetônico (sugere CAD)",
      "Foco infeccioso: ausculta, abdome, pele, pés (úlcera, celulite)",
      "Peso para cálculo das doses"
    ],
    diferenciais: [
      { dx: "Cetoacidose diabética", pista: "pH < 7,3 e/ou HCO₃ < 18 com cetonemia ≥ 3 mmol/L" },
      { dx: "Quadro misto CAD + EHH", pista: "Critérios das duas; cerca de 1 em cada 3 casos" },
      { dx: "Hiperglicemia sem crise", pista: "Sem acidose, osmolalidade ≤ 300, consciente, hidratando-se" },
      { dx: "AVC, meningite, encefalopatia", pista: "Déficit focal ou rebaixamento desproporcional à osmolalidade (< 320)" },
      { dx: "Hipernatremia por desidratação sem DM descompensado", pista: "Glicemia pouco elevada" },
      { dx: "Pseudo-hiperglicemia por coleta em braço com soro glicosado", pista: "Repetir em outro acesso" }
    ],
    gravidade: [
      "EHH (consenso 2024): glicemia ≥ 600 mg/dL + osmolalidade efetiva > 300 mOsm/kg + cetonemia < 3 mmol/L + pH ≥ 7,3 + HCO₃ ≥ 15 mEq/L",
      "Osmolalidade efetiva = 2 × Na + glicemia/18 (não inclui ureia)",
      "Rebaixamento importante costuma ocorrer com osmolalidade efetiva > 320; abaixo disso, procurar outra causa",
      "Gravidade: idade avançada, osmolalidade > 320–350, Na > 160, hipotensão, K alterado, Glasgow baixo, comorbidades",
      "Déficit hídrico estimado no EHH: cerca de 100–220 mL/kg (repor em 24–72 h)"
    ]
  },
  exames: [
    {
      nome: "Glicemia, eletrólitos e osmolalidade",
      pedido: "Glicemia plasmática, sódio, potássio, cloro, magnésio, fósforo, ureia, creatinina. Calcular osmolalidade efetiva e sódio corrigido.",
      porQue: "Classificar EHH × CAD, avaliar desidratação e guiar soro.",
      esperar: "Glicemia ≥ 600, osmolalidade efetiva > 300, ureia e creatinina elevadas (pré-renal).",
      interpretacao: "Na corrigido = Na + 1,6 × (glicemia − 100)/100. Na corrigido normal ou alto → trocar para NaCl 0,45% após estabilizar volemia se a osmolalidade não cair.",
      limitacoes: "Osmolalidade medida inclui ureia; para guiar o tratamento use a efetiva (calculada) ou medida de forma seriada."
    },
    {
      nome: "Gasometria venosa e cetonemia",
      pedido: "Gasometria venosa com lactato. Beta-hidroxibutirato sérico ou capilar (na falta, cetonúria em fita).",
      porQue: "Excluir cetoacidose ou quadro misto.",
      esperar: "pH ≥ 7,3, HCO₃ ≥ 15, cetonemia < 3 mmol/L no EHH puro.",
      interpretacao: "Cetonemia > 1 mmol/L no EHH → iniciar insulina junto com o soro.",
      limitacoes: "Lactato pode subir por hipoperfusão."
    },
    {
      nome: "Investigação do gatilho e complicações",
      pedido: "Hemograma, PCR, urina tipo 1 e urocultura, hemoculturas se febre, RX de tórax, ECG, troponina, CPK. TC de crânio se déficit focal ou rebaixamento desproporcional.",
      porQue: "Infecção, IAM e AVC são gatilhos frequentes e mudam a conduta.",
      esperar: "Leucocitose discreta pode ocorrer sem infecção.",
      interpretacao: "Febre ou leucocitose importante → buscar foco e iniciar antibiótico conforme a ficha de sepse.",
      limitacoes: "CPK alta: risco de rabdomiólise e lesão renal."
    },
    {
      nome: "HbA1c",
      pedido: "Hemoglobina glicada (HbA1c).",
      porQue: "Distinguir descompensação aguda de controle ruim crônico e planejar o esquema da alta.",
      esperar: "Geralmente elevada.",
      interpretacao: "HbA1c > 10% ou glicemia ≥ 300 com sintomas → insulina na alta.",
      limitacoes: "Alterada por anemia, hemoglobinopatia, transfusão recente."
    }
  ],
  tratamento: [
    {
      droga: "Soro fisiológico 0,9%",
      linha: "l1",
      dose: "1.000 mL na 1ª hora; depois 500–1.000 mL/h nas primeiras 2–4 h; depois ajustar (250–500 mL/h) pelo balanço e osmolalidade",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Repor o déficit em 24–72 h",
      monitorizacao: "Osmolalidade e Na de 1/1 h a 2/2 h no início; alvo de queda da osmolalidade 3–8 mOsm/kg/h; diurese; congestão",
      contraindicacoes: "—",
      ajustes: "Ringer lactato é alternativa aceita. NaCl 0,45% só se a osmolalidade não cair apesar de balanço positivo adequado. Idoso cardiopata/DRC: alíquotas de 250–500 mL e reavaliação frequente"
    },
    {
      droga: "Cloreto de potássio 19,1% (2,5 mEq/mL)",
      linha: "l1",
      dose: "K < 3,5: 10–20 mEq/h antes de iniciar insulina · K 3,5–5,0: 20–30 mEq por litro de soro · K > 5,0: não repor",
      via: "IV",
      intervalo: "Conforme K a cada 2–4 h",
      duracao: "Durante o tratamento",
      monitorizacao: "K sérico, ECG, diurese",
      contraindicacoes: "Anúria",
      ajustes: "Periférico: máximo 10 mEq/h; acima disso, acesso central e monitor"
    },
    {
      droga: "Insulina regular em infusão contínua",
      linha: "l1",
      dose: "0,05 UI/kg/h (dose fixa, sem bolus)",
      via: "IV em bomba",
      intervalo: "Iniciar quando a glicemia parar de cair com o soro (queda < 90 mg/dL/h) ou de imediato se cetonemia > 1 mmol/L",
      duracao: "Até resolução",
      monitorizacao: "Glicemia capilar de 1/1 h; queda ideal ≤ 90 mg/dL/h",
      contraindicacoes: "K < 3,5 (repor antes)",
      ajustes: "Diluição: 100 UI em 100 mL SF 0,9% = 1 UI/mL (70 kg = 3,5 mL/h). Glicemia < 250: acrescentar SG 5% e manter glicemia 180–270 mg/dL nas primeiras 24 h"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "adj",
      dose: "40 mg",
      via: "SC",
      intervalo: "1 vez ao dia",
      duracao: "Durante a internação",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo, plaquetopenia grave",
      ajustes: "ClCr < 30: 20 mg/dia ou heparina não fracionada 5.000 UI SC 8/8–12/12 h"
    },
    {
      droga: "Insulina NPH (início na hiperglicemia sem crise ou na alta)",
      linha: "l1",
      dose: "10 UI ou 0,1–0,2 UI/kg ao deitar; ajustar 2 UI a cada 3 dias pela glicemia de jejum",
      via: "SC",
      intervalo: "1 vez ao dia (ao deitar); dividir 2/3 manhã e 1/3 noite se dose alta",
      duracao: "Uso contínuo",
      monitorizacao: "Glicemia capilar de jejum e antes do jantar",
      contraindicacoes: "—",
      ajustes: "Glicemia ≥ 300 mg/dL ou HbA1c > 10% com sintomas, ou catabolismo (perda de peso): considerar esquema basal-bolus (dose total 0,3–0,5 UI/kg/dia). Após EHH, muitos pacientes precisam de insulina por semanas"
    },
    {
      droga: "Metformina",
      linha: "adj",
      dose: "500 mg 1–2×/dia; aumentar até 2.000–2.550 mg/dia",
      via: "VO",
      intervalo: "Com as refeições",
      duracao: "Uso contínuo",
      monitorizacao: "Função renal, B12",
      contraindicacoes: "TFG < 30, hipóxia, choque, sepse, lesão renal aguda, uso de contraste recente",
      ajustes: "Não iniciar ou reintroduzir durante o EHH; retomar após resolução e função renal estável. TFG 30–45: máximo 1.000 mg/dia"
    },
    {
      droga: "Bicarbonato de sódio",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não há acidose relevante no EHH puro",
      ajustes: "Não usar"
    }
  ],
  destino: {
    agora: [
      "EHH: sala de emergência com monitor, soro e potássio; insulina IV em bomba quando indicada",
      "Hiperglicemia sem crise: hidratação oral ou IV, corrigir glicemia e tratar o gatilho"
    ],
    reavaliar: [
      "Glicemia capilar de 1/1 h",
      "Na, K, osmolalidade calculada de 2/2 h nas primeiras 6 h, depois 4/4 h",
      "Glasgow, diurese e balanço hídrico de 1/1 h a 2/2 h",
      "Sinais de congestão (idoso, cardiopata)"
    ],
    alta: [
      "Hiperglicemia sem crise: consciente, comendo e bebendo, sem cetose, gatilho controlado, glicemias em queda",
      "Esquema definido (ajuste de orais e/ou insulina NPH), insumos garantidos e orientação de aplicação",
      "Retorno na UBS em até 7 dias"
    ],
    observacao: [
      "Hiperglicemia sem crise com desidratação leve: observação de 6–12 h com hidratação e correção"
    ],
    internacao: [
      "Todo EHH",
      "UTI: Glasgow ≤ 12, choque, osmolalidade > 350, Na > 160, K < 3,5 ou > 6, pH < 7,1, lesão renal grave, IAM/AVC associado"
    ],
    transferencia: [
      "Sem bomba de infusão, laboratório seriado ou leito monitorizado: iniciar soro e potássio e regular para hospital de referência"
    ]
  },
  prescricao: {
    hospitalar: "ESTADO HIPERGLICÊMICO HIPEROSMOLAR — ADULTO (peso: ___ kg)\n1. Dieta zero enquanto rebaixado; liberar dieta para diabético quando acordado e deglutindo bem.\n2. Monitor, oximetria, acesso venoso calibroso, cabeceira 30°. Sonda vesical se necessário para diurese horária.\n3. SF 0,9% 1.000 mL IV na 1ª hora; depois 500–1.000 mL/h por 2–4 h; depois 250–500 mL/h conforme osmolalidade, Na e balanço (alvo de queda da osmolalidade 3–8 mOsm/kg/h).\n4. Potássio (conferir antes da insulina):\n   - K < 3,5: KCl 19,1% 4 mL (10 mEq) em 100 mL de SF 0,9% IV em 1 h; repetir até K ≥ 3,5; não iniciar insulina.\n   - K 3,5–5,0: KCl 19,1% 8–12 mL (20–30 mEq) em cada 1.000 mL de soro.\n   - K > 5,0: não repor; dosar em 2 h.\n5. Insulina regular 100 UI/mL — 100 UI (1 mL) + SF 0,9% 99 mL (1 UI/mL), IV em bomba a 0,05 UI/kg/h (70 kg = 3,5 mL/h). Iniciar quando a glicemia parar de cair só com o soro, ou já no início se cetonemia > 1 mmol/L. Lavar o equipo com 20 mL da solução. Queda de glicemia não deve passar de 90 mg/dL/h.\n6. Glicemia < 250 mg/dL: SG 5% 125–150 mL/h em Y; ajustar insulina para manter glicemia 180–270 mg/dL nas primeiras 24 h.\n7. Enoxaparina 40 mg SC 1 vez ao dia (ClCr < 30: 20 mg/dia).\n8. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n9. Controles: glicemia capilar de 1/1 h; Na, K e osmolalidade calculada de 2/2 h nas primeiras 6 h e depois de 4/4 h; Mg e fósforo a cada 12 h; Glasgow e diurese de 1/1 h; balanço hídrico.\n10. Resolução (osmolalidade < 300, glicemia < 250, diurese > 0,5 mL/kg/h, consciência melhor) e paciente comendo: insulina NPH SC + regular SC antes da refeição; desligar a bomba 1–2 h depois.\n\nHIPERGLICEMIA SEM CRISE (sem acidose, osmolalidade ≤ 300, consciente)\n1. SF 0,9% 1.000 mL IV em 1–2 h se desidratado; depois hidratação oral.\n2. Insulina regular SC conforme escala de correção da instituição; glicemia capilar de 2/2 h a 4/4 h.\n3. Investigar e tratar o gatilho; rever medicações hiperglicemiantes.",
    ambulatorial: "ALTA — HIPERGLICEMIA SEM CRISE (ajustar ao esquema prévio)\nUSO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ------------------ 1 frasco\n   Aplicar ___ UI (10 UI ou 0,1–0,2 UI/kg) às 22 horas. Aumentar 2 UI a cada 3 dias se glicemia de jejum acima de 130 mg/dL; reduzir 4 UI se glicemia abaixo de 70 mg/dL.\n2. Seringas para insulina 100 UI com agulha curta, fitas e lancetas para glicemia capilar (SUS).\n\nUSO ORAL\n3. Metformina 850 mg ----------------------------- 60 comprimidos\n   Tomar 1 comprimido após o café e 1 após o jantar. (Não usar se TFG < 30; se TFG 30–45, máximo 1.000 mg/dia.)\n\nMONITORIZAÇÃO\nGlicemia capilar em jejum todos os dias e antes do jantar; anotar e trazer no retorno.\n\nHIPOGLICEMIA (glicemia < 70 ou suor frio, tremor, confusão): tomar 1 copo de suco de laranja ou 1 colher de sopa de açúcar em água; repetir a glicemia em 15 minutos."
  },
  orientacoesRetorno: [
    "Beba água ao longo do dia (se não houver restrição por coração ou rim); idosos devem ter água sempre por perto",
    "Não pare a insulina nem os remédios do diabetes sem orientação",
    "Em dias de doença (febre, diarreia, vômitos), medir a glicemia a cada 4 horas e procurar atendimento se ficar acima de 300 mg/dL",
    "Voltar imediatamente se: sonolência, confusão, fraqueza intensa, vômitos que não param, falta de ar, pouca urina, glicemia > 300 mg/dL persistente ou glicemia < 70 mg/dL repetida",
    "Aprender a aplicar e guardar a insulina (geladeira, fora do congelador) e a reconhecer hipoglicemia",
    "Consulta na UBS em até 7 dias com o registro das glicemias"
  ],
  tabelas: [
    {
      titulo: "CAD × EHH (consenso 2024)",
      colunas: ["Critério", "CAD", "EHH"],
      linhas: [
        ["Glicemia", "≥ 200 mg/dL ou DM prévio", "≥ 600 mg/dL"],
        ["pH / HCO₃", "< 7,3 e/ou < 18", "≥ 7,3 e ≥ 15"],
        ["Cetonemia", "≥ 3 mmol/L", "< 3 mmol/L"],
        ["Osmolalidade efetiva", "Variável", "> 300 mOsm/kg"],
        ["Insulina IV", "0,1 UI/kg/h", "0,05 UI/kg/h"]
      ],
      nota: "Até 1 em cada 3 pacientes tem quadro misto: tratar a cetoacidose e corrigir a osmolalidade devagar."
    }
  ],
  fontes: [
    "ADA/EASD/JBDS/AACE/DTS — Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (Diabetes Care/Diabetologia, 2024)",
    "Joint British Diabetes Societies (JBDS) — The management of the hyperosmolar hyperglycaemic state (HHS) in adults (atualização 2022)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Crises hiperglicêmicas agudas e Insulinoterapia no DM2 (2024–2025)",
    "ADA — Standards of Care in Diabetes (2026): Diabetes Care in the Hospital; Pharmacologic Approaches to Glycemic Treatment"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
