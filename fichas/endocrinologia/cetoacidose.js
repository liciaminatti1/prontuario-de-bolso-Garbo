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
    texto: "Volume na 1ª hora. Só inicie insulina com K ≥ 3,3 mEq/L. Com K < 3,3, reponha potássio primeiro."
  },
  alarmes: [
    "pH < 7,0 ou HCO₃ < 10 mEq/L",
    "K < 3,3 ou > 6,0 mEq/L",
    "Rebaixamento de consciência (pensar edema cerebral, sobretudo em jovens)",
    "Hipotensão / choque",
    "Osmolalidade > 320 mOsm/kg (sobreposição com estado hiperosmolar)"
  ],
  condutaInicial: [
    "Monitor, 2 acessos, glicemia capilar horária",
    "Gasometria venosa, eletrólitos, cetonemia (ou cetonúria), creatinina, ECG",
    "SF 0,9% 1–1,5 L (15–20 mL/kg) na 1ª hora",
    "Conferir K: < 3,3 → repor e adiar insulina; 3,3–5,2 → repor no soro; > 5,2 → não repor",
    "Insulina regular IV 0,1 U/kg/h e buscar o fator desencadeante"
  ],
  fataisExcluir: [
    "Hipocalemia grave durante o tratamento",
    "Edema cerebral",
    "Infecção / sepse como gatilho",
    "IAM silencioso",
    "Pancreatite, gestação"
  ],
  proximaDecisao: "Glicemia < 250 mg/dL → acrescentar SG 5% e reduzir insulina para 0,02–0,05 U/kg/h. Critérios de resolução → transição para insulina SC com sobreposição de 1–2 h.",
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
      { dx: "Estado hiperglicêmico hiperosmolar", pista: "Glicemia > 600, osmolalidade > 320, pH > 7,3, cetose discreta" },
      { dx: "Cetoacidose alcoólica", pista: "Etilista, glicemia normal ou baixa" },
      { dx: "Cetose de jejum", pista: "HCO₃ raramente < 18" },
      { dx: "Acidose lática", pista: "Choque, sepse, metformina; lactato alto" },
      { dx: "Intoxicação (metanol, etilenoglicol, salicilato)", pista: "Gap osmolar elevado, história" }
    ],
    gravidade: [
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
      dose: "1–1,5 L (15–20 mL/kg) na 1ª hora; depois 250–500 mL/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até correção da desidratação",
      monitorizacao: "PA, diurese, sódio corrigido, congestão",
      contraindicacoes: "—",
      ajustes: "Na corrigido normal ou alto → trocar para NaCl 0,45%. Cardiopatas e DRC: alíquotas menores"
    },
    {
      droga: "Cloreto de potássio",
      linha: "l1",
      dose: "K < 3,3: 10–20 mEq/h até K ≥ 3,3 (antes da insulina) · K 3,3–5,2: 20–30 mEq em cada litro de soro · K > 5,2: não repor",
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
      contraindicacoes: "K < 3,3 mEq/L (repor antes)",
      ajustes: "Diluição: 100 U em 100 mL de SF 0,9% = 1 U/mL (desprezar 20 mL pelo equipo). Glicemia < 250: reduzir para 0,02–0,05 U/kg/h + SG 5%"
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
      ajustes: "Opção para CAD leve a moderada sem bomba de infusão"
    },
    {
      droga: "SG 5% (associado)",
      linha: "l1",
      dose: "150–250 mL/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Glicemia < 250 mg/dL até resolução",
      monitorizacao: "Glicemia 150–200 mg/dL é o alvo",
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
      ajustes: "Critérios de resolução: glicemia < 250 e dois de: pH ≥ 7,3, HCO₃ ≥ 18, cetonemia < 0,6 (ou AG normal), paciente comendo"
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
      "UTI: pH < 7,0, rebaixamento, choque, K < 3,3 ou > 6, gestante"
    ],
    transferencia: [
      "Sem bomba de infusão, gasometria ou leito monitorizado → regulação após início de volume e potássio"
    ]
  },
  fontes: [
    "ADA/EASD/JBDS/AACE/DTS — Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (Diabetes Care, 2024)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Crises hiperglicêmicas agudas (2024)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
