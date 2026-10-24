// Insuficiência adrenal: crise adrenal e doença crônica
registrarFicha({
  id: "insuficiencia-adrenal",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Insuficiência adrenal e crise adrenal",
  resumo: "Deficiência de cortisol: primária (Addison, adrenalectomia, HAC), secundária/terciária (hipófise, uso crônico de corticoide). Crise adrenal: hipotensão ou choque, vômitos, dor abdominal, hiponatremia, hipoglicemia — tratar imediatamente com hidrocortisona. Inclui dose de estresse e regras para dias de doença.",
  palavrasChave: "insuficiencia adrenal crise adrenal addison addisoniana hidrocortisona fludrocortisona prednisona dose de estresse corticoide cronico supressao do eixo hiperplasia adrenal congenita hipopituitarismo cortisol acth",
  critico: {
    tempo: "Hidrocortisona sem esperar exame",
    texto: "Suspeita de crise adrenal: colher cortisol (e ACTH) se não atrasar e dar hidrocortisona 100 mg IV/IM imediatamente (criança 50–100 mg/m²), com SF 0,9%. Nunca atrasar para confirmar."
  },
  alarmes: [
    "Hipotensão ou choque refratário a volume e vasopressor",
    "Vômitos que impedem o corticoide oral em quem usa corticoide",
    "Hiponatremia com hipercalemia (primária)",
    "Hipoglicemia (sobretudo em criança)",
    "Rebaixamento, confusão"
  ],
  condutaInicial: [
    "Monitor, 2 acessos, glicemia capilar",
    "Colher cortisol sérico, ACTH, sódio, potássio, glicemia, creatinina (sem atrasar o tratamento)",
    "Hidrocortisona 100 mg IV (ou IM) em bolus; criança: 50–100 mg/m² (máx. 100 mg)",
    "SF 0,9% 1.000 mL na 1ª hora (criança: 20 mL/kg, repetir conforme perfusão)",
    "Corrigir hipoglicemia (glicose IV)",
    "Manter hidrocortisona 200 mg/24 h (50 mg 6/6 h ou infusão contínua); criança 50–100 mg/m²/dia dividido 6/6 h",
    "Tratar o gatilho (infecção, cirurgia, suspensão de corticoide)"
  ],
  fataisExcluir: [
    "Choque séptico (pode coexistir; tratar ambos)",
    "Abdome agudo (dor abdominal da crise imita)",
    "Hemorragia adrenal bilateral (anticoagulado, sepse meningocócica — Waterhouse-Friderichsen)",
    "Apoplexia hipofisária (cefaleia súbita, alteração visual)",
    "Hipercalemia grave com arritmia"
  ],
  proximaDecisao: "Estável e comendo após 24–72 h → reduzir hidrocortisona IV (ex.: 50 mg 8/8 h → 25 mg 8/8 h) e passar a dose oral de estresse (dobro ou triplo da manutenção), voltando à manutenção em 1–3 dias. Sem diagnóstico prévio: confirmar depois com teste da cortrosina (ACTH sintético) e investigar a causa.",
  clinica: {
    anamnese: [
      "Uso de corticoide (qualquer via: oral, inalatório em dose alta, injetável, intra-articular, tópico extenso) e suspensão recente",
      "Doença de Addison, HAC, cirurgia de hipófise ou adrenal, radioterapia",
      "Fadiga, perda de peso, anorexia, náusea, dor abdominal, desejo de sal, tontura postural",
      "Uso de mitotano, cetoconazol, etomidato, inibidores de checkpoint (hipofisite/adrenalite)",
      "Anticoagulação, sepse, trauma (hemorragia adrenal)"
    ],
    exameFisico: [
      "PA (hipotensão postural), FC, perfusão",
      "Hiperpigmentação de pele, mucosas, sulcos palmares e cicatrizes (primária)",
      "Desidratação, dor abdominal",
      "Sinais de Cushing iatrogênico (uso crônico de corticoide)"
    ],
    diferenciais: [
      { dx: "Choque séptico ou hipovolêmico", pista: "Responde a volume; sem uso de corticoide" },
      { dx: "Gastroenterite", pista: "Melhora com hidratação; Na/K normais" },
      { dx: "SIADH", pista: "Hiponatremia euvolêmica sem hipercalemia (mas IA secundária pode imitar)" },
      { dx: "Hipotireoidismo", pista: "Pode coexistir; tratar IA antes de iniciar levotiroxina" }
    ],
    gravidade: [
      "Crise adrenal: deterioração aguda com hipotensão absoluta ou relativa que melhora em 1–2 h após hidrocortisona",
      "Primária: falta cortisol + aldosterona → hiponatremia, hipercalemia, desidratação mais intensa",
      "Secundária/terciária: falta só cortisol → hiponatremia sem hipercalemia; crise menos frequente"
    ]
  },
  exames: [
    {
      nome: "Cortisol sérico e ACTH",
      pedido: "Cortisol sérico (preferir às 8 h; na emergência, a qualquer hora antes da hidrocortisona) e ACTH plasmático.",
      porQue: "Confirmar e definir primária × secundária.",
      esperar: "Cortisol baixo; ACTH alto (primária) ou baixo/normal (secundária).",
      interpretacao: "Cortisol matinal < 5 µg/dL com ACTH > 2× o limite superior sugere fortemente insuficiência primária. Valores intermediários: teste da cortrosina.",
      limitacoes: "Pontos de corte variam com o ensaio. Estrogênio oral (eleva globulina) aumenta o cortisol total. Prednisona/prednisolona interferem na dosagem; dexametasona não."
    },
    {
      nome: "Teste de estímulo com ACTH sintético (cortrosina)",
      pedido: "Teste da cortrosina 250 µg IV ou IM com cortisol basal, 30 e 60 min.",
      porQue: "Padrão para confirmar o diagnóstico, após estabilização.",
      esperar: "Pico de cortisol adequado exclui insuficiência primária.",
      interpretacao: "Pico < 18 µg/dL (≈ 500 nmol/L) é diagnóstico nos ensaios tradicionais; ensaios mais novos usam cortes menores (≈ 14–15 µg/dL) — conferir com o laboratório.",
      limitacoes: "Pode ser normal na insuficiência secundária recente (< 4–6 semanas)."
    },
    {
      nome: "Eletrólitos e laboratório",
      pedido: "Sódio, potássio, glicemia, ureia, creatinina, cálcio, hemograma, gasometria venosa; renina e aldosterona (primária); TSH e T4L.",
      porQue: "Gravidade e tipo.",
      esperar: "Hiponatremia, hipercalemia, hipoglicemia, eosinofilia, hipercalcemia leve.",
      interpretacao: "Renina alta com aldosterona baixa → deficiência mineralocorticoide (indica fludrocortisona).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Hidrocortisona (succinato) — crise",
      linha: "l1",
      dose: "Adulto: 100 mg em bolus, depois 200 mg/24 h · Criança: 50–100 mg/m² (máx. 100 mg) em bolus, depois 50–100 mg/m²/dia. Sem superfície corporal: até 3 anos 25 mg, 3–12 anos 50 mg, ≥ 12 anos 100 mg",
      via: "IV (ou IM se sem acesso)",
      intervalo: "Manutenção: 50 mg 6/6 h (adulto) ou infusão contínua; criança dividido 6/6 h",
      duracao: "24–72 h, depois reduzir",
      monitorizacao: "PA, glicemia, Na, K",
      contraindicacoes: "—",
      ajustes: "Em dose ≥ 50 mg/dia, a hidrocortisona tem efeito mineralocorticoide suficiente: fludrocortisona desnecessária na fase aguda"
    },
    {
      droga: "Dexametasona (se sem hidrocortisona)",
      linha: "alt",
      dose: "Adulto: 4 mg · Criança: 0,15 mg/kg (máx. 4 mg)",
      via: "IV",
      intervalo: "24/24 h",
      duracao: "Até ter hidrocortisona",
      monitorizacao: "PA, Na, K",
      contraindicacoes: "—",
      ajustes: "Não interfere na dosagem de cortisol, mas não tem ação mineralocorticoide (insuficiente na primária). Metilprednisolona é outra alternativa"
    },
    {
      droga: "Soro fisiológico 0,9% (± glicose)",
      linha: "l1",
      dose: "Adulto: 1.000 mL na 1ª hora, depois conforme volemia · Criança: 20 mL/kg em bolus, repetir até 60 mL/kg; manutenção com SG 5% + SF",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até estabilidade",
      monitorizacao: "PA, diurese, Na (não corrigir > 10 mEq/L em 24 h se hiponatremia crônica)",
      contraindicacoes: "—",
      ajustes: "Hipoglicemia: glicose IV"
    },
    {
      droga: "Manutenção — hidrocortisona oral",
      linha: "l1",
      dose: "Adulto: 15–25 mg/dia · Criança: 8–10 mg/m²/dia",
      via: "VO",
      intervalo: "2–3 tomadas (maior dose ao acordar)",
      duracao: "Contínuo",
      monitorizacao: "Clínica, peso, PA (não guiar por cortisol ou ACTH)",
      contraindicacoes: "—",
      ajustes: "No Brasil, hidrocortisona oral geralmente é manipulada. Preferida em crianças (crescimento)"
    },
    {
      droga: "Manutenção — prednisona ou prednisolona (adulto)",
      linha: "alt",
      dose: "Prednisolona 3–5 mg/dia (prednisona dose equivalente)",
      via: "VO",
      intervalo: "1×/dia pela manhã (ou 2 tomadas)",
      duracao: "Contínuo",
      monitorizacao: "Peso, PA, glicemia, densidade óssea",
      contraindicacoes: "Evitar em criança (crescimento)",
      ajustes: "Alternativa no SUS quando sem hidrocortisona oral"
    },
    {
      droga: "Fludrocortisona (só na primária)",
      linha: "l1",
      dose: "Adulto: 50–100 µg (0,05–0,1 mg) · Criança: conforme endocrinologia pediátrica (lactentes precisam também de suplemento de sal)",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "Contínuo",
      monitorizacao: "PA (em pé e deitado), edema, K, renina",
      contraindicacoes: "—",
      ajustes: "Hipertensão ou edema → reduzir. Calor intenso/exercício: pode precisar aumentar"
    },
    {
      droga: "Dose de estresse (dias de doença e cirurgia)",
      linha: "l1",
      dose: "Febre > 38 °C ou doença com acamamento: dobrar a dose oral; > 39 °C: triplicar · Vômitos ou incapaz de tomar VO: hidrocortisona 100 mg IM/IV (criança 50 mg/m² ou por idade) e ir ao PS · Cirurgia de grande porte: 100 mg IV na indução e depois 200 mg/24 h, reduzindo em 1–3 dias",
      via: "VO / IM / IV",
      intervalo: "Durante a doença aguda",
      duracao: "Em geral 2–3 dias; voltar à dose habitual após melhora",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pequenos procedimentos e exames: dose dobrada no dia ou 25–50 mg de hidrocortisona conforme porte. Inclui pacientes com supressão do eixo por corticoide crônico"
    }
  ],
  destino: {
    agora: ["Hidrocortisona + volume na sala de emergência", "Tratar gatilho"],
    reavaliar: ["PA, glicemia, Na e K de 4/4 h a 6/6 h nas primeiras 24 h"],
    alta: ["Estável, comendo, com dose oral de manutenção, regras de dias de doença por escrito, hidrocortisona injetável para emergência quando possível e cartão/identificação de insuficiência adrenal", "Endocrinologia em 2–4 semanas"],
    observacao: ["Paciente com IA conhecida, vômitos leves, que respondeu a hidrocortisona IM e tolera VO: observar 12–24 h"],
    internacao: ["Toda crise adrenal; UTI se choque refratário"],
    transferencia: ["Sem leito monitorizado → regulação após hidrocortisona"]
  },
  prescricao: {
    hospitalar: "CRISE ADRENAL — ADULTO\n1. Dieta zero enquanto vômitos/hipotensão; liberar assim que tolerar.\n2. Monitor, 2 acessos, glicemia capilar de 2/2 h.\n3. Colher cortisol, ACTH, Na, K, glicemia, creatinina (não atrasar o item 4).\n4. Hidrocortisona (succinato) 100 mg IV em bolus AGORA (ou IM se sem acesso).\n5. Hidrocortisona 50 mg IV de 6/6 h (ou 200 mg em 250 mL de SF 0,9% em 24 h em bomba).\n6. SF 0,9% 1.000 mL IV na 1ª hora; depois 500 mL/h a 250 mL/h conforme PA e congestão; associar SG 5% se hipoglicemia.\n7. Se glicemia < 70: glicose 50% 40 mL IV.\n8. Tratar o desencadeante (antibiótico se infecção, culturas antes).\n9. Enoxaparina 40 mg SC 1×/dia se sem contraindicação.\n10. Controles: PA de 1/1 h, diurese, Na e K de 6/6 h nas primeiras 24 h.\n\nCRIANÇA (peso ___ kg; SC ___ m²)\n- Hidrocortisona 50–100 mg/m² IV/IM em bolus (máx. 100 mg) — até 3 anos 25 mg; 3–12 anos 50 mg; ≥ 12 anos 100 mg.\n- Depois 50–100 mg/m²/dia IV dividido de 6/6 h.\n- SF 0,9% 20 mL/kg em bolus, repetir conforme perfusão; glicemia de 1/1 h a 2/2 h; hipoglicemia: SG 10% 2–5 mL/kg IV.",
    ambulatorial: "INSUFICIÊNCIA ADRENAL — MANUTENÇÃO (adulto, exemplo)\nUSO ORAL\n1. Prednisona 5 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã, todos os dias. NÃO SUSPENDER.\n   (Ou hidrocortisona manipulada 10 mg ao acordar + 5 mg às 13–14 h.)\n2. Fludrocortisona 0,1 mg (só insuficiência primária) -- 30 comprimidos\n   Tomar 1 comprimido pela manhã.\n\nDIAS DE DOENÇA\n- Febre acima de 38 °C ou doença que obriga a ficar de cama: tomar o DOBRO da dose de corticoide (acima de 39 °C: o TRIPLO) por 2–3 dias e depois voltar ao normal.\n- Vômitos ou diarreia que impedem tomar o remédio: aplicar hidrocortisona 100 mg IM (se tiver em casa) e ir ao pronto-socorro.\nUSO INJETÁVEL (kit de emergência, se disponível)\n3. Hidrocortisona (succinato) 100 mg ------------- 1 frasco-ampola + diluente, seringa e agulha IM\n   Aplicar 100 mg IM em caso de vômitos, desmaio ou mal-estar grave e ir ao PS."
  },
  orientacoesRetorno: [
    "Nunca parar o corticoide de uma vez; levar sempre um cartão ou pulseira dizendo que tem insuficiência adrenal",
    "Em febre, gripe forte ou diarreia: dobrar a dose do corticoide por 2–3 dias e avisar a equipe",
    "Se vomitar e não conseguir tomar o remédio, se tiver tontura forte ou desmaio: aplicar a injeção (se tiver) e ir ao pronto-socorro na hora",
    "Antes de cirurgia, parto, endoscopia ou tratamento dentário maior: avisar que usa corticoide (precisa de dose extra)",
    "Consulta com endocrinologia em 2–4 semanas"
  ],
  fontes: [
    "Endocrine Society — Diagnosis and Treatment of Primary Adrenal Insufficiency: Clinical Practice Guideline (JCEM, 2016)",
    "ESE/Endocrine Society — Diagnosis and therapy of glucocorticoid-induced adrenal insufficiency: joint guideline (Eur J Endocrinol / JCEM, 2024)",
    "Society for Endocrinology — Endocrine emergency guidance: emergency management of acute adrenal insufficiency (adrenal crisis) in adult patients (Endocrine Connections, 2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
