// Hipercalemia
registrarFicha({
  id: "hipercalemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hipercalemia",
  resumo: "Potássio sérico ≥ 5,5 mEq/L. Risco de arritmia fatal, sobretudo com K ≥ 6,5 ou alterações no ECG.",
  palavrasChave: "hipercalemia potassio alto gluconato de calcio insulina glicose salbutamol dialise drc ieca espironolactona",
  critico: {
    tempo: "ECG imediato",
    texto: "Alteração no ECG ou K ≥ 6,5: cálcio IV agora para estabilizar a membrana, depois insulina + glicose."
  },
  alarmes: [
    "K ≥ 6,5 mEq/L",
    "ECG: onda T apiculada, QRS alargado, perda de onda P, bradicardia, padrão sinusoidal",
    "Fraqueza muscular, paralisia ascendente",
    "Lesão renal aguda oligúrica",
    "Rabdomiólise, lise tumoral, hemólise"
  ],
  condutaInicial: [
    "Monitor cardíaco contínuo e ECG de 12 derivações",
    "Repetir K se suspeita de pseudo-hipercalemia (hemólise) — sem atrasar tratamento se ECG alterado",
    "Gluconato de cálcio 10% 30 mL IV em 5–10 min se alteração no ECG",
    "Insulina regular 10 U + glicose 25 g IV",
    "Suspender fontes de K e drogas que retêm K (IECA, BRA, espironolactona, AINE, trimetoprima)"
  ],
  fataisExcluir: [
    "Arritmia ventricular / assistolia",
    "Lesão renal aguda grave",
    "Rabdomiólise",
    "Insuficiência adrenal (Addison)",
    "Síndrome de lise tumoral"
  ],
  proximaDecisao: "Após estabilizar e redistribuir: remover potássio do corpo (diurético, quelante, diálise). Oligúria, K refratário ou acidose grave → diálise.",
  clinica: {
    anamnese: [
      "DRC, diálise (sessão perdida?), diabetes",
      "Medicações: IECA, BRA, espironolactona, AINE, trimetoprima, heparina, digoxina, betabloqueador, suplemento de K",
      "Trauma, convulsão, exercício extremo (rabdomiólise)",
      "Quimioterapia recente (lise tumoral)",
      "Sintomas: fraqueza, palpitação, parestesias"
    ],
    exameFisico: [
      "FC, ritmo, PA",
      "Força muscular e reflexos",
      "Volemia e diurese",
      "Sinais de insuficiência adrenal"
    ],
    diferenciais: [
      { dx: "Pseudo-hipercalemia", pista: "Hemólise na coleta, garrote prolongado, leucocitose/trombocitose extremas; ECG normal" },
      { dx: "Redistribuição", pista: "Acidose, deficiência de insulina (CAD), betabloqueador, digoxina" },
      { dx: "Excreção reduzida", pista: "LRA, DRC, hipoaldosteronismo, drogas" },
      { dx: "Liberação celular", pista: "Rabdomiólise, lise tumoral, hemólise" }
    ],
    gravidade: [
      "Leve: 5,5–5,9",
      "Moderada: 6,0–6,4",
      "Grave: ≥ 6,5 ou qualquer valor com alteração no ECG"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações — URGENTE (hipercalemia).",
      porQue: "Define urgência do cálcio.",
      esperar: "T apiculada → PR longo e P achatada → QRS largo → sinusoidal.",
      interpretacao: "Qualquer alteração → gluconato de cálcio.",
      limitacoes: "ECG normal não exclui risco; correlação imperfeita com o nível sérico."
    },
    {
      nome: "Potássio e função renal",
      pedido: "Potássio (repetir, sem garrote prolongado), sódio, ureia, creatinina, glicemia, magnésio, cálcio. Gasometria venosa.",
      porQue: "Confirmar e buscar causa.",
      esperar: "—",
      interpretacao: "Acidose metabólica → bicarbonato pode ajudar. Na baixo + K alto → pensar insuficiência adrenal.",
      limitacoes: "Potássio da gasometria é útil para decisão rápida."
    },
    {
      nome: "CK, ácido úrico, fósforo, LDH",
      pedido: "CPK, ácido úrico, fósforo, LDH — se suspeita de rabdomiólise ou lise tumoral.",
      porQue: "Identificar liberação celular.",
      esperar: "—",
      interpretacao: "CK > 5x o normal → rabdomiólise.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Gluconato de cálcio 10%",
      linha: "l1",
      dose: "30 mL (3 g)",
      via: "IV em 5–10 min",
      intervalo: "Repetir em 5–10 min se ECG não melhorar",
      duracao: "Efeito dura 30–60 min (não reduz o K)",
      monitorizacao: "ECG contínuo",
      contraindicacoes: "Cautela em uso de digoxina (infundir em 20–30 min)",
      ajustes: "Cloreto de cálcio 10% 10 mL é alternativa, preferir acesso central (necrose se extravasar)"
    },
    {
      droga: "Insulina regular + glicose",
      linha: "l1",
      dose: "Insulina regular 10 U + glicose 25 g (50 mL de glicose 50%)",
      via: "IV em 15 min",
      intervalo: "Pode repetir após 2–4 h",
      duracao: "Reduz K 0,6–1,0 mEq/L em 30–60 min; efeito de 4–6 h",
      monitorizacao: "Glicemia capilar a cada 1 h por 6 h (risco de hipoglicemia, sobretudo na DRC)",
      contraindicacoes: "—",
      ajustes: "Glicemia ≥ 250 mg/dL: insulina sem glicose. DRC/dialítico: considerar 5 U ou manter SG 10% 50 mL/h"
    },
    {
      droga: "Salbutamol nebulizado",
      linha: "adj",
      dose: "10–20 mg (2–4 mL da solução 5 mg/mL)",
      via: "Nebulização em 10 min",
      intervalo: "Dose única, pode repetir",
      duracao: "Efeito em 30 min, dura 2 h",
      monitorizacao: "FC, arritmia",
      contraindicacoes: "Taquiarritmia, cardiopatia isquêmica instável",
      ajustes: "Somar à insulina, não substituir"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "50–100 mEq",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Volemia, sódio",
      contraindicacoes: "Hipervolemia",
      ajustes: "Só se acidose metabólica associada (pH < 7,2)"
    },
    {
      droga: "Furosemida",
      linha: "l1",
      dose: "40–80 mg",
      via: "IV",
      intervalo: "Conforme diurese",
      duracao: "—",
      monitorizacao: "Diurese, volemia",
      contraindicacoes: "Hipovolemia, anúria",
      ajustes: "Se hipovolêmico: hidratar com SF antes"
    },
    {
      droga: "Quelantes intestinais",
      linha: "alt",
      dose: "Ciclossilicato de zircônio 10 g 8/8h por até 48 h · ou poliestirenossulfonato de cálcio 15–30 g",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "—",
      monitorizacao: "K a cada 2–4 h",
      contraindicacoes: "Íleo, obstrução intestinal; poliestirenossulfonato: risco de necrose intestinal",
      ajustes: "Início lento (1–6 h). Usar o disponível no serviço"
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
      ajustes: "Indicações: K refratário, LRA oligúrica, DRC dialítica, rabdomiólise ou lise tumoral grave"
    }
  ],
  destino: {
    agora: [
      "Cálcio se ECG alterado → insulina + glicose → remover K",
      "Acionar nefrologia se diálise provável"
    ],
    reavaliar: [
      "K em 1–2 h após insulina, depois a cada 2–4 h",
      "Glicemia horária por 6 h",
      "ECG seriado"
    ],
    alta: [
      "K leve (< 6,0), ECG normal, causa identificada e corrigida (ex.: suspensão de droga)",
      "Repetir K em 24–72 h na UBS"
    ],
    observacao: [
      "K 6,0–6,4 sem alteração de ECG com resposta ao tratamento"
    ],
    internacao: [
      "K ≥ 6,5, ECG alterado, LRA, rabdomiólise, lise tumoral"
    ],
    transferencia: [
      "Necessidade de diálise sem nefrologia local"
    ]
  },
  fontes: [
    "UK Kidney Association — Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults (2023)",
    "KDIGO — Controversies Conference on potassium homeostasis (2020)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
