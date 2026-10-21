// Cetoacidose diabética
registrarFicha({
  id: "cetoacidose",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Cetoacidose diabética",
  resumo: "Hiperglicemia (ou DM conhecido), acidose metabólica e cetose. Também pode ocorrer com glicemia normal ou pouco elevada (iSGLT2, gestação, jejum).",
  palavrasChave: "cad cetoacidose diabetes insulina cetonemia acidose potassio estado hiperosmolar hiperglicemia",
  critico: {
    tempo: "Potássio antes da insulina",
    texto: "Volume na 1ª hora. Só inicie insulina com K ≥ 3,5 mEq/L (consenso 2024). Com K < 3,5, reponha potássio primeiro."
  },
  alarmes: [
    "pH < 7,0 ou HCO₃ < 10 mEq/L",
    "K < 3,5 ou > 6,0 mEq/L",
    "Rebaixamento de consciência (pensar edema cerebral, sobretudo em jovens)",
    "Hipotensão / choque",
    "Osmolalidade > 320 mOsm/kg (sobreposição com estado hiperosmolar)"
  ],
  condutaInicial: [
    "Monitor, 2 acessos, glicemia capilar horária",
    "Gasometria venosa, eletrólitos, cetonemia (ou cetonúria), creatinina, ECG",
    "SF 0,9% ou cristaloide balanceado (Ringer lactato) 500–1.000 mL/h nas primeiras 2–4 h (alíquotas menores se cardiopata/DRC)",
    "Conferir K: < 3,5 → repor e adiar insulina; 3,5–5,0 → repor no soro; > 5,0 → não repor e dosar a cada 2 h",
    "Insulina regular IV 0,1 U/kg/h e buscar o fator desencadeante"
  ],
  fataisExcluir: [
    "Hipocalemia grave durante o tratamento",
    "Edema cerebral",
    "Infecção / sepse como gatilho",
    "IAM silencioso",
    "Pancreatite, gestação"
  ],
  proximaDecisao: "Glicemia < 250 mg/dL → acrescentar soro glicosado (5–10%) e reduzir insulina para 0,05 U/kg/h, mantendo glicemia ~150–200 mg/dL. Resolução (cetonemia < 0,6 mmol/L + pH ≥ 7,3 ou HCO₃ ≥ 18) → transição para insulina SC com sobreposição de 1–2 h.",
  clinica: {
    anamnese: [
      "DM conhecido? Tipo, insulina em uso, omissão de doses",
      "Gatilho: infecção, IAM, AVC, pancreatite, álcool, cocaína, corticoide, gestação",
      "Uso de iSGLT2 (dapagliflozina, empagliflozina) → CAD euglicêmica",
      "Poliúria, polidipsia, perda de peso, náusea, vômitos, dor abdominal"
    ],
    exameFisico: [
      "Grau de desidratação, PA, FC, perfusão",
      "Respiração de Kussmaul, hálito cetônico",
      "Nível de consciência (Glasgow)",
      "Abdome (dor pode ser da CAD ou de abdome agudo)",
      "Busca ativa de foco infeccioso, pés"
    ],
    diferenciais: [
      { dx: "Estado hiperglicêmico hiperosmolar", pista: "Glicemia ≥ 600, osmolalidade efetiva > 300, pH ≥ 7,3, HCO₃ ≥ 15, cetonemia < 3,0" },
      { dx: "Cetoacidose alcoólica", pista: "Etilista, glicemia normal ou baixa" },
      { dx: "Cetose de jejum", pista: "HCO₃ raramente < 18" },
      { dx: "Acidose lática", pista: "Choque, sepse, metformina; lactato alto" },
      { dx: "Intoxicação (metanol, etilenoglicol, salicilato)", pista: "Gap osmolar elevado, história" }
    ],
    gravidade: [
      "Diagnóstico (consenso 2024): glicemia ≥ 200 mg/dL ou DM prévio + cetonemia ≥ 3,0 mmol/L (ou cetonúria ≥ 2+) + pH < 7,3 e/ou HCO₃ < 18",
      "Leve: pH 7,25–7,30, HCO₃ 15–18, alerta",
      "Moderada: pH 7,00–7,24, HCO₃ 10–14, sonolento",
      "Grave: pH < 7,00, HCO₃ < 10, estupor ou coma"
    ]
  },
  exames: [
    {
      nome: "Gasometria venosa e ânion gap",
      pedido: "Gasometria venosa com lactato. Sódio, cloro, potássio, magnésio, fósforo.",
      porQue: "Confirmar acidose, calcular ânion gap e acompanhar resolução.",
      esperar: "pH < 7,3, HCO₃ < 18, ânion gap > 12.",
      interpretacao: "AG = Na − (Cl + HCO₃). Normalização do AG indica resolução da cetose.",
      limitacoes: "Gasometria venosa é suficiente; arterial só se dúvida respiratória."
    },
    {
      nome: "Cetonemia (beta-hidroxibutirato)",
      pedido: "Beta-hidroxibutirato sérico ou capilar. Na falta: cetonúria (fita).",
      porQue: "Confirmar e monitorar cetose.",
      esperar: "≥ 3 mmol/L.",
      interpretacao: "< 0,6 mmol/L = critério de resolução.",
      limitacoes: "Cetonúria mede acetoacetato e pode aumentar na fase de melhora; não usar para guiar resolução."
    },
    {
      nome: "Glicemia, função renal e sódio corrigido",
      pedido: "Glicemia, ureia, creatinina, osmolalidade sérica (calculada).",
      porQue: "Avaliar hiperosmolaridade e lesão renal.",
      esperar: "Pseudo-hiponatremia por hiperglicemia.",
      interpretacao: "Na corrigido = Na + 1,6 × (glicemia − 100)/100. Osm = 2×Na + glicemia/18.",
      limitacoes: "—"
    },
    {
      nome: "Investigação do gatilho",
      pedido: "Hemograma, PCR, urina tipo 1 e urocultura, RX de tórax, ECG, troponina se indicado, lipase, beta-hCG em mulheres em idade fértil.",
      porQue: "Tratar a causa.",
      esperar: "Leucocitose é comum na CAD mesmo sem infecção.",
      interpretacao: "Leucocitose > 25 mil ou febre → investigar infecção ativamente.",
      limitacoes: "Lipase e amilase podem subir na CAD sem pancreatite."
    }
  ],
  tratamento: [
    {
      droga: "Soro fisiológico 0,9%",
      linha: "l1",
      dose: "500–1.000 mL/h nas primeiras 2–4 h; depois 250–500 mL/h conforme volemia",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até correção da desidratação",
      monitorizacao: "PA, diurese, sódio corrigido, congestão",
      contraindicacoes: "—",
      ajustes: "Cristaloide balanceado (Ringer lactato) é alternativa igualmente aceita (consenso 2024). Na corrigido normal ou alto → NaCl 0,45%. Cardiopatas e DRC: alíquotas menores"
    },
    {
      droga: "Cloreto de potássio",
      linha: "l1",
      dose: "K < 3,5: 10–20 mEq/h até K ≥ 3,5 (antes da insulina) · K 3,5–5,0: 10–20 mEq em cada litro de soro, para manter K 4–5 · K > 5,0: não repor",
      via: "IV",
      intervalo: "Conforme K a cada 2 h",
      duracao: "Durante todo o tratamento",
      monitorizacao: "K a cada 2 h, ECG, diurese",
      contraindicacoes: "Anúria (repor com cautela)",
      ajustes: "Alvo K 4–5 mEq/L. Acima de 10 mEq/h: acesso central e monitor"
    },
    {
      droga: "Insulina regular em infusão",
      linha: "l1",
      dose: "0,1 U/kg/h (com ou sem bolus de 0,1 U/kg) ou 0,14 U/kg/h sem bolus",
      via: "IV contínua",
      intervalo: "Ajustar para queda de glicemia de 50–75 mg/dL/h",
      duracao: "Até resolução da cetoacidose",
      monitorizacao: "Glicemia capilar horária, K a cada 2 h",
      contraindicacoes: "K < 3,5 mEq/L (repor antes)",
      ajustes: "Diluição: 100 U em 100 mL de SF 0,9% = 1 U/mL (desprezar 20 mL pelo equipo). Glicemia < 250: reduzir para 0,05 U/kg/h + soro glicosado; não desligar antes da resolução da cetose"
    },
    {
      droga: "Insulina regular SC/IM (CAD leve, sem bomba)",
      linha: "alt",
      dose: "0,2 U/kg e depois 0,1 U/kg",
      via: "SC ou IM",
      intervalo: "A cada 1 h (ou 0,3 U/kg e depois 0,2 U/kg a cada 2 h com análogo rápido)",
      duracao: "Até resolução",
      monitorizacao: "Glicemia horária",
      contraindicacoes: "CAD grave, choque, edema",
      ajustes: "Consenso 2024: insulina SC é opção para CAD leve e moderada não complicada fora da UTI"
    },
    {
      droga: "Soro glicosado 5–10% (associado)",
      linha: "l1",
      dose: "150–250 mL/h (SG 10% se glicemia caindo apesar de SG 5%)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Glicemia < 250 mg/dL até resolução",
      monitorizacao: "Alvo de glicemia ~150–200 mg/dL até a resolução",
      contraindicacoes: "—",
      ajustes: "Permite manter insulina até zerar a cetose sem hipoglicemia"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "100 mEq (100 mL) em 400 mL de água destilada + 20 mEq de KCl",
      via: "IV em 2 h",
      intervalo: "Repetir até pH ≥ 7,0",
      duracao: "—",
      monitorizacao: "Gasometria e K a cada 2 h",
      contraindicacoes: "pH ≥ 7,0",
      ajustes: "Só se pH < 7,0"
    },
    {
      droga: "Transição para insulina SC",
      linha: "l1",
      dose: "Dose total diária 0,5–0,6 U/kg (ou dose prévia): metade basal, metade prandial",
      via: "SC",
      intervalo: "Basal 1–2 h antes de desligar a infusão",
      duracao: "—",
      monitorizacao: "Glicemia antes das refeições",
      contraindicacoes: "—",
      ajustes: "Critérios de resolução (consenso 2024): cetonemia < 0,6 mmol/L E pH venoso ≥ 7,3 ou HCO₃ ≥ 18 mEq/L. Transicionar quando o paciente conseguir comer. DM2 em uso de iSGLT2: não reiniciar o iSGLT2 até recuperação plena"
    }
  ],
  destino: {
    agora: [
      "Volume, potássio e insulina em leito monitorizado",
      "Tratar o desencadeante"
    ],
    reavaliar: [
      "Glicemia a cada 1 h",
      "Eletrólitos e gasometria venosa a cada 2–4 h",
      "Nível de consciência (cefaleia, piora neurológica → edema cerebral)"
    ],
    alta: [
      "Cetoacidose resolvida, comendo, em insulina SC estável",
      "Gatilho controlado, educação sobre dias de doença e insulina",
      "Retorno precoce na UBS ou endocrinologia"
    ],
    observacao: [
      "CAD leve com resolução rápida em sala de emergência pode receber alta após 12–24 h com seguimento garantido"
    ],
    internacao: [
      "Quase todos os casos",
      "UTI: pH < 7,0, rebaixamento, choque, K < 3,5 ou > 6, gestante"
    ],
    transferencia: [
      "Sem bomba de infusão, gasometria ou leito monitorizado → regulação após início de volume e potássio"
    ]
  },
  prescricao: {
    hospitalar: "CETOACIDOSE DIABÉTICA — ADULTO (peso: ___ kg)\n1. Dieta zero enquanto houver vômitos/rebaixamento; liberar dieta para diabético quando acordado e sem náuseas.\n2. Monitor cardíaco, 2 acessos venosos, cabeceira elevada 30°.\n3. SF 0,9% (ou Ringer lactato) 1.000 mL IV na 1ª hora; depois 500 mL/h por 2–4 h; depois 250 mL/h conforme volemia e sódio corrigido (Na corrigido normal/alto: NaCl 0,45%).\n4. Potássio (conferir antes da insulina):\n   - K < 3,5: KCl 19,1% (2,5 mEq/mL) 4 mL (10 mEq) em 100 mL de SF 0,9% IV em 1 h em veia periférica; 20 mEq/h (8 mL em 100 mL/h) só em acesso central com monitor. Repetir e dosar K a cada 1–2 h até K ≥ 3,5. NÃO iniciar insulina.\n   - K 3,5–5,0: KCl 19,1% 4–8 mL (10–20 mEq) em cada 1.000 mL de soro; ajustar pelo K de 2/2 h para manter 4–5.\n   - K > 5,0: não repor; dosar K em 2 h.\n5. Insulina regular 100 UI/mL — 100 UI (1 mL) + SF 0,9% 99 mL (1 UI/mL), IV em bomba de infusão a 0,1 UI/kg/h (70 kg = 7 mL/h). Lavar o equipo com 20 mL da solução. Ajustar para queda de glicemia de 50–75 mg/dL/h.\n6. Quando glicemia < 250 mg/dL: SG 5% (ou SG 10%) 150–250 mL/h em Y e reduzir insulina para 0,05 UI/kg/h (70 kg = 3,5 mL/h); manter glicemia 150–200 mg/dL até a resolução.\n7. Se pH < 7,0: bicarbonato de sódio 8,4% 100 mL (100 mEq) + água destilada 400 mL + KCl 19,1% 8 mL (20 mEq) IV em 2 h; repetir a cada 2 h até pH ≥ 7,0.\n8. Ondansetrona 4 mg IV lento de 8/8 h se náusea ou vômito.\n9. Enoxaparina 40 mg SC 1 vez ao dia (profilaxia de TEV), se sem contraindicação.\n10. Controles: glicemia capilar de 1/1 h; K, Na, Cl e gasometria venosa (pH, HCO₃, ânion gap) de 2/2 h a 4/4 h; cetonemia de 2/2 h a 4/4 h se disponível; diurese horária; Glasgow de 2/2 h.\n11. Transição: resolvida a CAD e paciente comendo, aplicar insulina NPH SC (ou basal) e regular SC antes de uma refeição; desligar a bomba 1–2 h depois.",
    ambulatorial: "ALTA — ESQUEMA SC (exemplo com insulinas do SUS; dose total 0,5–0,6 UI/kg/dia ou dose prévia)\nUSO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ------------------ ___ frascos\n   Aplicar ___ UI antes do café e ___ UI às 22 h (metade da dose total diária, dividida em 2/3 manhã e 1/3 noite ou conforme ajuste).\n2. Insulina humana regular 100 UI/mL -------------- ___ frascos\n   Aplicar ___ UI 30 minutos antes do café, do almoço e do jantar (outra metade da dose total, dividida nas refeições).\n3. Seringas para insulina 100 UI com agulha curta, tiras e lancetas para glicemia capilar (SUS).\n\nMONITORIZAÇÃO\nGlicemia capilar antes das refeições e ao deitar; anotar e trazer no retorno."
  },
  orientacoesRetorno: [
    "Nunca suspender a insulina basal (NPH ou análogo), mesmo sem comer; em dias de doença, medir a glicemia a cada 3–4 h e beber água",
    "Voltar imediatamente se: vômitos que não param, dor abdominal forte, respiração rápida ou profunda, sonolência ou confusão, glicemia > 250–300 mg/dL que não baixa com a insulina",
    "Se usar dapagliflozina ou empagliflozina: não reiniciar sem orientação; esses remédios podem causar cetoacidose mesmo com glicemia pouco elevada",
    "Aprender a aplicar e guardar a insulina (geladeira, longe do congelador) e a reconhecer hipoglicemia",
    "Consulta na UBS ou endocrinologia em até 1–2 semanas, com o registro de glicemias"
  ],
  tabelas: [
    {
      titulo: "Reposição de potássio na CAD (consenso 2024)",
      colunas: ["K sérico (mEq/L)", "Insulina", "Potássio"],
      linhas: [
        ["< 3,5", "Adiar", "10–20 mEq/h até K ≥ 3,5"],
        ["3,5–5,0", "Iniciar", "10–20 mEq por litro de soro, para manter K 4–5"],
        ["> 5,0", "Iniciar", "Não repor; dosar K a cada 2 h"]
      ],
      nota: "Diretrizes anteriores (ADA 2009/SBD) usavam corte de 3,3 e 5,2 mEq/L. KCl 19,1% = 2,5 mEq/mL."
    }
  ],
  fontes: [
    "ADA/EASD/JBDS/AACE/DTS — Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (Diabetes Care/Diabetologia, 2024)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Crises hiperglicêmicas agudas (2024–2025)"
  ],
  revisao: "2026-10-21",
  versao: "2.0"
});
