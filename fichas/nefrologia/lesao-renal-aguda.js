// Lesão renal aguda (LRA)
registrarFicha({
  id: "lesao-renal-aguda",
  especialidade: "nefrologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Lesão renal aguda (LRA)",
  resumo: "Aumento de creatinina ≥ 0,3 mg/dL em 48 h, ou ≥ 1,5 vez o basal em 7 dias, ou diurese < 0,5 mL/kg/h por 6 h (KDIGO). Separar pré-renal, renal (intrínseca) e pós-renal; corrigir volemia, desobstruir, suspender nefrotóxicos e reconhecer quem precisa de diálise.",
  palavrasChave: "lra lesao renal aguda insuficiencia renal aguda ira creatinina oliguria anuria kdigo pre renal necrose tubular aguda nta pos renal obstrucao nefrotoxicos aine contraste fena feureia dialise",
  critico: {
    tempo: "Excluir obstrução e hipercalemia",
    texto: "Toda LRA: potássio e gasometria agora, bexiga (palpação/USG — sondar se retenção) e suspensão de nefrotóxicos. Hipercalemia, acidose grave, congestão refratária ou uremia → diálise de urgência."
  },
  alarmes: [
    "K ≥ 6,0 mEq/L ou alterações no ECG",
    "pH < 7,15 ou HCO₃ muito baixo",
    "Congestão pulmonar com oligúria",
    "Anúria (pensar obstrução, vascular, glomerulonefrite rapidamente progressiva)",
    "Rebaixamento, pericardite, sangramento urêmico",
    "Hematúria + proteinúria + hipertensão (glomerulonefrite) ou hemoptise (síndrome pulmão-rim)"
  ],
  condutaInicial: [
    "Confirmar critério KDIGO e estadiar (creatinina basal, diurese)",
    "K, Na, gasometria venosa, ureia, creatinina, urina tipo 1, Na e creatinina urinários, ECG",
    "Avaliar volemia: hipovolêmico → cristaloide (preferir balanceado: Ringer lactato) em alíquotas de 500 mL com reavaliação",
    "Palpar bexiga / USG à beira-leito; retenção → sonda vesical",
    "Suspender: AINE, IECA/BRA, diuréticos (se hipovolemia), metformina, aminoglicosídeo, contraste; ajustar doses à TFG",
    "Controle de diurese (sonda só se necessário), balanço hídrico, peso diário",
    "Tratar hipercalemia (ver ficha hipercalemia) e avaliar critérios de diálise (ver ficha dialise-urgencia)"
  ],
  fataisExcluir: [
    "Hipercalemia grave",
    "Obstrução urinária bilateral ou de rim único",
    "Glomerulonefrite rapidamente progressiva / vasculite",
    "Rabdomiólise (ver ficha rabdomiolise)",
    "Choque séptico, síndrome compartimental abdominal",
    "Trombose ou dissecção de artéria renal, microangiopatia trombótica (SHU/PTT)"
  ],
  proximaDecisao: "Melhora da diurese e da creatinina em 24–72 h após volume → pré-renal. Sem resposta, sedimento com cilindros granulosos → NTA (suporte). Sedimento ativo (hemácias dismórficas, cilindros hemáticos), proteinúria importante ou causa incerta → nefrologia (biópsia). Critérios AEIOU → diálise.",
  clinica: {
    anamnese: [
      "Creatinina basal prévia (resultados antigos, DRC)",
      "Perdas: vômitos, diarreia, sangramento, baixa ingestão, febre",
      "Medicamentos: AINE, IECA/BRA, diuréticos, aminoglicosídeo, vancomicina, aciclovir, contraste iodado, lítio, metotrexato",
      "Sintomas urinários obstrutivos, HPB, cálculo, câncer pélvico",
      "Hematúria, urina espumosa, edema, artralgia, lesões de pele, hemoptise (doença sistêmica)",
      "Trauma, convulsão, exercício extenuante, imobilização (rabdomiólise)"
    ],
    exameFisico: [
      "Volemia: PA deitado/em pé, FC, mucosas, JVP, edema, crepitações",
      "Globo vesical, toque retal (próstata)",
      "Lesões de pele (púrpura, livedo), sopro abdominal",
      "Peso"
    ],
    diferenciais: [
      { dx: "Pré-renal", pista: "Hipovolemia, IC, cirrose; ureia/creatinina > 40; FENa < 1% (FEUreia < 35% em uso de diurético); sedimento pobre; melhora com volume" },
      { dx: "NTA (isquêmica ou tóxica)", pista: "Choque prolongado, sepse, contraste, aminoglicosídeo; FENa > 2%; cilindros granulosos 'barrentos'" },
      { dx: "Nefrite intersticial aguda", pista: "Droga nova (beta-lactâmico, IBP, AINE); febre, rash, eosinofilia, leucocitúria estéril" },
      { dx: "Glomerulonefrite", pista: "Hematúria dismórfica, cilindros hemáticos, proteinúria, HAS, edema" },
      { dx: "Pós-renal", pista: "Globo vesical, hidronefrose na USG, anúria súbita, HPB, tumor pélvico" },
      { dx: "Vascular", pista: "Dor lombar, hematúria, FA (embolia); livedo após cateterismo (ateroembolia)" }
    ],
    gravidade: [
      "Estágio 1: creatinina 1,5–1,9× basal ou ↑ ≥ 0,3 mg/dL; ou diurese < 0,5 mL/kg/h por 6–12 h",
      "Estágio 2: 2,0–2,9× basal; ou < 0,5 mL/kg/h por ≥ 12 h",
      "Estágio 3: ≥ 3× basal, ou creatinina ≥ 4,0 mg/dL, ou início de diálise; ou < 0,3 mL/kg/h por ≥ 24 h, ou anúria ≥ 12 h"
    ]
  },
  exames: [
    {
      nome: "Função renal, eletrólitos e gasometria",
      pedido: "Ureia, creatinina, sódio, potássio, cálcio, fósforo, magnésio, ácido úrico, gasometria venosa, hemograma, CK.",
      porQue: "Gravidade, complicações e causas (rabdomiólise, hemólise).",
      esperar: "—",
      interpretacao: "Anemia + plaquetopenia + LDH alto + esquizócitos → microangiopatia trombótica.",
      limitacoes: "A creatinina atrasa em relação à queda real da filtração; fórmulas de TFG não valem na LRA."
    },
    {
      nome: "Urina tipo 1 com sedimento e índices urinários",
      pedido: "Urina tipo 1 com sedimentoscopia (pesquisa de dismorfismo eritrocitário e cilindros). Sódio, creatinina e ureia urinários em amostra isolada. Relação proteína/creatinina urinária.",
      porQue: "Diferenciar pré-renal, NTA, glomerular e intersticial.",
      esperar: "—",
      interpretacao: "FENa = (Na U × Cr S) ÷ (Na S × Cr U) × 100. < 1% pré-renal; > 2% NTA. FEUreia < 35% sugere pré-renal em uso de diurético.",
      limitacoes: "FENa baixa também em contraste, rabdomiólise, GN aguda, sepse inicial."
    },
    {
      nome: "Ultrassonografia de rins e vias urinárias",
      pedido: "USG de rins e vias urinárias com avaliação de bexiga (resíduo).",
      porQue: "Excluir obstrução; tamanho renal (rins pequenos = DRC).",
      esperar: "Hidronefrose na obstrução.",
      interpretacao: "Hidronefrose bilateral ou de rim único → desobstruir (sonda, urologia: duplo J ou nefrostomia).",
      limitacoes: "Obstrução muito precoce ou com desidratação pode não dilatar."
    },
    {
      nome: "Investigação de doença glomerular/sistêmica (se sedimento ativo)",
      pedido: "Complemento C3 e C4, FAN, ANCA, anti-MBG, sorologias para hepatites B e C e HIV, ASLO, eletroforese de proteínas, LDH, haptoglobina, esfregaço de sangue periférico.",
      porQue: "GNRP e microangiopatia exigem tratamento específico urgente.",
      esperar: "—",
      interpretacao: "Discutir com nefrologia no mesmo dia.",
      limitacoes: "Não atrasar o contato com nefrologia aguardando resultados."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "Alíquotas de 250–500 mL",
      via: "IV",
      intervalo: "Reavaliar volemia e congestão após cada alíquota",
      duracao: "Até euvolemia",
      monitorizacao: "PA, diurese, crepitações, SpO₂, balanço",
      contraindicacoes: "Congestão/hipervolemia",
      ajustes: "Preferir balanceado em grandes volumes (menos acidose hiperclorêmica). Evitar coloides sintéticos (amido). Excesso de volume piora o desfecho"
    },
    {
      droga: "Furosemida",
      linha: "adj",
      dose: "40–80 mg em bolus (doses maiores se DRC); pode seguir infusão",
      via: "IV",
      intervalo: "Conforme resposta",
      duracao: "Enquanto congesto",
      monitorizacao: "Diurese em 2–6 h, K, Mg",
      contraindicacoes: "Hipovolemia",
      ajustes: "Só para tratar sobrecarga de volume; não previne nem trata a LRA (KDIGO). Ausência de resposta → considerar diálise"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "Conforme déficit; ex.: 100 mEq em 2–4 h",
      via: "IV",
      intervalo: "Conforme gasometria",
      duracao: "—",
      monitorizacao: "Gasometria, Na, Ca iônico, volemia",
      contraindicacoes: "Congestão (carga de sódio)",
      ajustes: "Considerar em acidose metabólica grave (pH < 7,2) na LRA estágio 2–3 enquanto se decide diálise"
    },
    {
      droga: "Dopamina em 'dose renal', manitol ou diurético para 'proteger o rim'",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício (KDIGO)",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Tratar hipercalemia/acidose grave", "Volume se hipovolêmico", "Sondar se retenção", "Suspender nefrotóxicos"],
    reavaliar: ["Diurese horária e balanço; creatinina, K e gasometria a cada 12–24 h (mais se grave)", "Revisar todas as doses pela função renal"],
    alta: ["LRA estágio 1 pré-renal com causa corrigida, creatinina em queda, K normal e retorno em 48–72 h com exame", "Pós-alta: creatinina em 3 meses (risco de DRC); evitar AINE"],
    observacao: ["Estágio 1 pré-renal, reavaliar após hidratação em 12–24 h"],
    internacao: ["Estágios 2–3, oligúria, K ≥ 6, acidose, congestão, causa intrínseca ou indefinida"],
    transferencia: ["Indicação de diálise, GNRP, obstrução que precisa de urologia sem disponibilidade local → regulação"]
  },
  prescricao: {
    hospitalar: "LESÃO RENAL AGUDA — ADULTO (peso ___ kg)\n1. Dieta normocalórica, hipossódica, com restrição de potássio (< 2 g/dia de K) enquanto K alto ou oligúria; proteína 0,8–1,0 g/kg/dia (1,0–1,5 se diálise ou catabolismo).\n2. Ringer lactato 500 mL IV em 30 min se hipovolemia; reavaliar volemia e repetir conforme resposta. Se congesto: não hidratar.\n3. Suspender: AINE, IECA/BRA, diuréticos (se hipovolemia), metformina, nefrotóxicos; evitar contraste iodado.\n4. Ajustar à TFG estimada: antibióticos, enoxaparina (se TFG < 30: 30 mg SC 1×/dia, ou heparina não fracionada 5.000 UI SC 8/8–12/12 h), insulina, analgésicos (evitar morfina; preferir tramadol com cautela ou paracetamol).\n5. Se congestão: furosemida 40–80 mg IV; repetir conforme diurese.\n6. Sondagem vesical de demora se retenção ou para controle de diurese no paciente grave (retirar assim que possível).\n7. Controles: diurese horária, balanço hídrico, peso diário; creatinina, ureia, Na, K, gasometria de 12/12 h a 24/24 h; K mais frequente se ≥ 5,5.\n8. Hipercalemia: ver ficha hipercalemia. Critérios de diálise: ver ficha dialise-urgencia."
  },
  orientacoesRetorno: [
    "Não usar anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida) sem orientação médica",
    "Beber água conforme orientado (nem pouco, nem demais se tiver inchaço)",
    "Voltar se urinar muito pouco, inchaço, falta de ar, vômitos, sonolência ou confusão",
    "Exame de creatinina e potássio em 2–3 dias e consulta na UBS; repetir a função renal em 3 meses",
    "Avisar em qualquer atendimento que teve lesão nos rins (cuidado com remédios e contraste)"
  ],
  tabelas: [
    {
      titulo: "Estadiamento KDIGO da LRA",
      colunas: ["Estágio", "Creatinina", "Diurese"],
      linhas: [
        ["1", "1,5–1,9× basal ou aumento ≥ 0,3 mg/dL em 48 h", "< 0,5 mL/kg/h por 6–12 h"],
        ["2", "2,0–2,9× basal", "< 0,5 mL/kg/h por ≥ 12 h"],
        ["3", "≥ 3× basal, ou ≥ 4,0 mg/dL, ou início de terapia renal substitutiva", "< 0,3 mL/kg/h por ≥ 24 h ou anúria ≥ 12 h"]
      ],
      nota: "KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012); atualização em andamento."
    }
  ],
  fontes: [
    "KDIGO — Clinical Practice Guideline for Acute Kidney Injury (Kidney Int Suppl, 2012) e materiais de atualização (2024–2025)",
    "KDIGO — Clinical Practice Guideline for the Evaluation and Management of CKD (2024) — ajuste de doses"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
