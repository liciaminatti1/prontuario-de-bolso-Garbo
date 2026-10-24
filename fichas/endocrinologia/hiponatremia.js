// Hiponatremia
registrarFicha({
  id: "hiponatremia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hiponatremia",
  resumo: "Sódio sérico < 135 mEq/L. Grave < 125. O que decide a conduta são os sintomas (graves: vômitos, convulsão, rebaixamento) e o tempo de instalação (aguda < 48 h × crônica). Corrigir devagar na crônica para evitar desmielinização osmótica.",
  palavrasChave: "hiponatremia sodio baixo siadh sihad salina hipertonica nacl 3 desmielinizacao osmotica mielinolise pontina polidipsia tiazidico potomania cerveja diureticos osmolalidade sodio urinario",
  critico: {
    tempo: "Sintoma grave: NaCl 3% em 20 min",
    texto: "Sintomas graves (vômitos, convulsão, Glasgow ≤ 8, sonolência importante): NaCl 3% 150 mL IV em 20 min, repetir até 2× se necessário, alvo de +5 mEq/L. Depois, não ultrapassar 10 mEq/L nas primeiras 24 h (8 se alto risco)."
  },
  alarmes: [
    "Vômitos, convulsão, rebaixamento, sinais de herniação",
    "Na < 120 mEq/L",
    "Correção rápida (> 8–10 mEq/L em 24 h), sobretudo com diurese aquosa abundante",
    "Alto risco de desmielinização: Na ≤ 105, etilismo, desnutrição, hipocalemia, hepatopatia",
    "Hipovolemia com choque"
  ],
  condutaInicial: [
    "Repetir o sódio e dosar glicemia (excluir pseudo-hiponatremia e hiperglicemia: Na corrigido)",
    "Classificar: sintomas graves / moderados / leves ou ausentes; aguda (< 48 h) ou crônica (ou desconhecida = crônica)",
    "Grave: NaCl 3% 150 mL IV em 20 min, Na em 20 min, repetir até 2× até subir 5 mEq/L",
    "Moderada (náusea sem vômito, confusão, cefaleia): NaCl 3% 150 mL única vez e investigar",
    "Leve/assintomática crônica: tratar causa conforme volemia (abaixo); suspender drogas implicadas",
    "Na de 4/4 h a 6/6 h; diurese horária (diurese aquosa abundante = risco de correção excessiva)"
  ],
  fataisExcluir: [
    "Edema cerebral (hiponatremia aguda: maratonista, ecstasy, polidipsia, pós-operatório)",
    "Insuficiência adrenal (hiponatremia + hipotensão ± hipercalemia)",
    "Hipotireoidismo grave",
    "SIADH por neoplasia (pulmão), doença do SNC, pneumonia",
    "Desmielinização osmótica por correção rápida"
  ],
  proximaDecisao: "Subiu ≥ 10 mEq/L antes de 24 h (ou ≥ 8 em alto risco) → parar a correção, SG 5% 10 mL/kg em 1 h e desmopressina 2 µg IV (até 8/8 h), com Na de 1/1 h a 2/2 h. Hiponatremia crônica sem sintomas graves → tratamento da causa, sem salina hipertônica.",
  clinica: {
    anamnese: [
      "Sintomas: náusea, vômitos, cefaleia, confusão, quedas, convulsão",
      "Tempo de instalação; ingestão de água e de solutos (potomania de cerveja, dieta só de chá e torrada)",
      "Medicamentos: tiazídico, ISRS, carbamazepina/oxcarbazepina, antipsicóticos, ciclofosfamida, opioides, ecstasy, desmopressina",
      "Perdas: vômitos, diarreia, diuréticos; IC, cirrose, nefropatia",
      "Câncer de pulmão, doença do SNC, pneumonia, dor, pós-operatório"
    ],
    exameFisico: [
      "Volemia: PA e FC deitado/em pé, mucosas, turgor, JVP",
      "Edema, ascite, congestão (hipervolêmica)",
      "Estado neurológico (Glasgow, focalização)"
    ],
    diferenciais: [
      { dx: "Pseudo-hiponatremia", pista: "Osmolalidade normal; hipertrigliceridemia ou paraproteína" },
      { dx: "Hiperglicemia (translocacional)", pista: "Osmolalidade alta; Na corrigido = Na + 1,6–2,4 × (glicemia − 100)/100" },
      { dx: "Hipovolêmica (perdas)", pista: "Na urinário < 30 (perdas extrarrenais); > 30 com diurético, IA primária, cerebral perdedor de sal" },
      { dx: "Euvolêmica — SIADH", pista: "Osm urinária > 100, Na urinário > 30, TSH e cortisol normais, sem diurético" },
      { dx: "Euvolêmica — baixa ingestão de solutos / polidipsia", pista: "Osm urinária < 100 mOsm/kg" },
      { dx: "Hipervolêmica (IC, cirrose, nefrótica, DRC)", pista: "Edema; Na urinário < 30 (exceto com diurético ou DRC)" }
    ],
    gravidade: [
      "Bioquímica: leve 130–134 · moderada 125–129 · grave < 125 mEq/L",
      "Sintomas graves: vômitos, sofrimento cardiorrespiratório, sonolência anormal e profunda, convulsão, Glasgow ≤ 8",
      "Sintomas moderados: náusea sem vômito, confusão, cefaleia",
      "Limite de correção: 10 mEq/L nas 1ªs 24 h e 8 mEq/L a cada 24 h seguintes (diretriz europeia); alto risco: 8 mEq/L/24 h"
    ]
  },
  exames: [
    {
      nome: "Osmolalidade e glicemia",
      pedido: "Sódio, glicemia, ureia, creatinina, osmolalidade sérica (medida, se disponível), triglicerídeos e proteínas totais se suspeita de pseudo-hiponatremia.",
      porQue: "Confirmar hiponatremia hipotônica.",
      esperar: "Osm < 275 mOsm/kg na hipotônica.",
      interpretacao: "Osm calculada = 2 × Na + glicemia/18 + ureia/6. Osm normal ou alta → não é hiponatremia hipotônica.",
      limitacoes: "Calculada é menos fiel que a medida."
    },
    {
      nome: "Urina: osmolalidade e sódio",
      pedido: "Osmolalidade urinária e sódio urinário (amostra isolada), colhidos ANTES do soro/diurético, se possível. Potássio urinário.",
      porQue: "Separar as causas.",
      esperar: "—",
      interpretacao: "Osm U < 100: excesso de água ou baixa ingestão de soluto. Osm U > 100 + Na U < 30: hipovolemia efetiva. Osm U > 100 + Na U > 30: SIADH, diurético, IA, DRC.",
      limitacoes: "Diurético torna o Na urinário ininterpretável."
    },
    {
      nome: "Causas endócrinas e de SIADH",
      pedido: "TSH, cortisol sérico às 8 h, potássio, ácido úrico. RX de tórax (e TC conforme suspeita).",
      porQue: "SIADH é diagnóstico de exclusão.",
      esperar: "—",
      interpretacao: "Ácido úrico < 4 mg/dL sugere SIADH.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "NaCl 3% (salina hipertônica)",
      linha: "l1",
      dose: "150 mL (ou 2 mL/kg) em bolus",
      via: "IV em 20 min (veia periférica calibrosa)",
      intervalo: "Repetir até 2× (total 3) conforme Na de controle",
      duracao: "Até melhora dos sintomas ou +5 mEq/L",
      monitorizacao: "Na após cada bolus e de 4/4 h nas 24 h; diurese",
      contraindicacoes: "Assintomático crônico",
      ajustes: "Preparo (≈ 3%): SF 0,9% 890 mL + NaCl 20% 110 mL (1 L), ou SF 0,9% 133 mL + NaCl 20% 17 mL (150 mL). NaCl 20% = 3,4 mEq/mL"
    },
    {
      droga: "SF 0,9% (hipovolêmica)",
      linha: "l1",
      dose: "0,5–1 mL/kg/h (ou bolus se choque)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até euvolemia",
      monitorizacao: "Na de 4/4 h a 6/6 h; ao repor volume, o ADH cai e o Na pode subir rápido",
      contraindicacoes: "SIADH (piora o Na) e hipervolemia",
      ajustes: "—"
    },
    {
      droga: "Restrição hídrica (SIADH, hipervolêmica)",
      linha: "l1",
      dose: "< 800–1.000 mL/dia",
      via: "—",
      intervalo: "Diário",
      duracao: "Enquanto persistir a causa",
      monitorizacao: "Na a cada 24–48 h",
      contraindicacoes: "Hipovolemia; hemorragia subaracnoide",
      ajustes: "Falha provável se Osm U > 500 ou (Na U + K U) > Na sérico"
    },
    {
      droga: "Ureia (SIADH)",
      linha: "alt",
      dose: "0,25–0,5 g/kg/dia (ex.: 15–30 g/dia)",
      via: "VO, dissolvida em suco",
      intervalo: "1–2×/dia",
      duracao: "Conforme causa",
      monitorizacao: "Na, ureia",
      contraindicacoes: "—",
      ajustes: "Diretriz europeia 2014: 2ª linha na SIADH. Manipulada no Brasil"
    },
    {
      droga: "Furosemida (hipervolêmica)",
      linha: "adj",
      dose: "20–40 mg",
      via: "IV ou VO",
      intervalo: "1–2×/dia",
      duracao: "Conforme congestão",
      monitorizacao: "Na, K, volemia",
      contraindicacoes: "Hipovolemia",
      ajustes: "Na SIADH, pode ser associada ao sal VO"
    },
    {
      droga: "Desmopressina + SG 5% (correção excessiva)",
      linha: "adj",
      dose: "SG 5% 10 mL/kg em 1 h + desmopressina 2 µg",
      via: "IV",
      intervalo: "Desmopressina até de 8/8 h",
      duracao: "Até Na voltar ao limite permitido",
      monitorizacao: "Na de 1/1 h a 2/2 h",
      contraindicacoes: "—",
      ajustes: "Usar quando o Na passou de 10 mEq/L em 24 h (8 em alto risco)"
    },
    {
      droga: "Tolvaptana",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Diretriz europeia 2014 recomenda não usar na SIADH moderada/grave; hepatotoxicidade",
      ajustes: "Uso restrito a especialista"
    }
  ],
  destino: {
    agora: ["Sintomas graves: NaCl 3% em sala de emergência", "Suspender drogas causadoras"],
    reavaliar: ["Na após cada bolus; depois de 4/4 h a 6/6 h nas primeiras 24–48 h", "Diurese horária"],
    alta: ["Assintomático, Na ≥ 125–130 estável, causa definida, controle em 48–72 h na UBS"],
    observacao: ["Na 125–129 sem sintomas ou leves com causa clara (ex.: tiazídico suspenso)"],
    internacao: ["Sintomas moderados/graves, Na < 125, alto risco de desmielinização"],
    transferencia: ["Sem dosagem seriada de Na → regulação"]
  },
  prescricao: {
    hospitalar: "HIPONATREMIA COM SINTOMAS GRAVES — ADULTO (peso: ___ kg)\n1. Dieta conforme consciência; restrição hídrica até definir causa.\n2. Monitor, oximetria, precauções para convulsão.\n3. NaCl 3% 150 mL IV em 20 min AGORA (preparo: SF 0,9% 133 mL + NaCl 20% 17 mL).\n4. Na sérico 20 min após; se não subiu 5 mEq/L e sintomas persistem, repetir item 3 (até 3 bolus no total).\n5. Após melhora/+5 mEq/L: suspender salina hipertônica; SF 0,9% para manter acesso; tratar causa.\n6. Limite: Na não deve subir mais de 10 mEq/L nas primeiras 24 h (8 se alto risco) — avisar médico se ultrapassar.\n7. Se ultrapassar: SG 5% 10 mL/kg em 1 h + desmopressina 2 µg IV.\n8. Suspender tiazídico, ISRS, carbamazepina e outras drogas implicadas.\n9. Controles: Na de 4/4 h nas primeiras 24 h, diurese horária, balanço hídrico, Glasgow.\n\nSIADH CRÔNICA LEVE\n1. Restrição hídrica 800 mL/dia.\n2. Dieta com sal liberado.\n3. Na de 24/24 h."
  },
  orientacoesRetorno: [
    "Seguir o limite de líquidos combinado (inclui água, suco, café, sopa)",
    "Não usar remédio diurético ou antidepressivo novo sem avisar o médico",
    "Voltar imediatamente se dor de cabeça forte, vômitos, confusão, sonolência, quedas ou convulsão",
    "Exame de sódio em 48–72 h e consulta na UBS"
  ],
  tabelas: [
    {
      titulo: "Hiponatremia hipotônica: diagnóstico pela urina e volemia",
      colunas: ["Osm urinária", "Na urinário", "Volemia", "Causas"],
      linhas: [
        ["< 100", "—", "Qualquer", "Polidipsia, potomania de cerveja, dieta pobre em soluto"],
        ["> 100", "< 30", "Hipovolêmica", "Vômitos, diarreia, 3º espaço, perdas antigas por diurético"],
        ["> 100", "< 30", "Hipervolêmica", "IC, cirrose, síndrome nefrótica"],
        ["> 100", "> 30", "Hipovolêmica", "Diurético, IA primária, nefropatia perdedora de sal, cerebral perdedor de sal"],
        ["> 100", "> 30", "Euvolêmica", "SIADH, hipotireoidismo, IA secundária, diurético"]
      ],
      nota: "Diretriz europeia (ESE/ESICM/ERA-EDTA) 2014."
    }
  ],
  fontes: [
    "Spasovski G et al. — Clinical practice guideline on diagnosis and treatment of hyponatraemia (ESE/ESICM/ERBP; Eur J Endocrinol, 2014)",
    "Verbalis JG et al. — Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations (Am J Med, 2013)",
    "Adrogué HJ, Tucker BM, Madias NE — Diagnosis and Management of Hyponatremia: A Review (JAMA, 2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
