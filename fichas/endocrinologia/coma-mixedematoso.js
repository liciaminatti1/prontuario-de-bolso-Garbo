// Coma mixedematoso
registrarFicha({
  id: "coma-mixedematoso",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Coma mixedematoso (crise hipotireoidiana)",
  resumo: "Hipotireoidismo grave descompensado com rebaixamento de consciência (nem sempre coma), hipotermia, bradicardia, hipoventilação, hiponatremia e hipoglicemia. Mais comum em idosas no inverno, após infecção, cirurgia ou sedativos. Mortalidade alta: tratar pela suspeita.",
  palavrasChave: "coma mixedematoso mixedema crise hipotireoidiana hipotireoidismo grave hipotermia bradicardia hiponatremia levotiroxina hidrocortisona t3 liotironina",
  critico: {
    tempo: "Hidrocortisona antes da T4",
    texto: "Colher TSH, T4 livre e cortisol e iniciar hidrocortisona IV antes ou junto com a levotiroxina em dose de ataque. Não esperar resultado. Suporte ventilatório e aquecimento passivo."
  },
  alarmes: [
    "Hipercapnia ou hipoventilação (pode precisar de intubação)",
    "Hipotensão ou choque",
    "Temperatura < 35 °C",
    "Sódio < 120 mEq/L, convulsão",
    "Hipoglicemia"
  ],
  condutaInicial: [
    "Monitor, oximetria, gasometria (CO₂); ventilação mecânica se hipercapnia com rebaixamento",
    "Glicemia capilar; corrigir hipoglicemia",
    "Colher TSH, T4 livre, cortisol, eletrólitos, CK, hemograma, culturas — e tratar sem esperar",
    "Hidrocortisona 100 mg IV de 8/8 h",
    "Levotiroxina em dose de ataque (IV se disponível; no Brasil, em geral VO/SNG)",
    "Aquecimento passivo (cobertores, ambiente aquecido); evitar aquecimento ativo externo (vasodilatação e choque)",
    "Volume com cautela; hiponatremia grave sintomática → salina hipertônica (ver ficha hiponatremia)",
    "Buscar e tratar o gatilho (infecção, IAM, AVC, sedativos, frio)"
  ],
  fataisExcluir: [
    "Sepse (febre ausente pela hipotermia)",
    "Insuficiência adrenal associada",
    "Hipotermia ambiental, intoxicação por sedativos/opioides",
    "AVC, hipoglicemia, hiponatremia grave",
    "IAM (a reposição de T4 pode precipitar isquemia)"
  ],
  proximaDecisao: "Melhora de temperatura, consciência e ventilação em 24–72 h → passar a levotiroxina VO em dose plena ajustada (1,6 µg/kg/dia; menor em idoso/coronariopata) quando houver deglutição. Excluída insuficiência adrenal (cortisol adequado), reduzir e suspender a hidrocortisona.",
  clinica: {
    anamnese: [
      "Hipotireoidismo conhecido, adesão à levotiroxina, tireoidectomia ou iodo radioativo prévios",
      "Gatilho: infecção, frio, cirurgia, trauma, AVC, IAM, sedativos, opioides, amiodarona, lítio",
      "Evolução de dias a semanas com sonolência, lentidão, ganho de peso, constipação"
    ],
    exameFisico: [
      "Temperatura (usar termômetro de baixa leitura), FC, PA, FR",
      "Glasgow; reflexos com relaxamento lento",
      "Edema sem cacifo (face, mãos, periorbital), pele seca e fria, macroglossia",
      "Cicatriz de tireoidectomia, bócio",
      "Derrame pleural/pericárdico, íleo, retenção urinária"
    ],
    diferenciais: [
      { dx: "Hipotermia ambiental", pista: "Exposição ao frio; TSH normal" },
      { dx: "Sepse", pista: "Foco infeccioso, lactato; podem coexistir" },
      { dx: "Insuficiência adrenal", pista: "Hiponatremia + hipercalemia, hipotensão refratária" },
      { dx: "Síndrome do eutireoidiano doente", pista: "TSH normal ou baixo, T4 baixo, doença grave" },
      { dx: "Hipotireoidismo central", pista: "TSH normal/baixo com T4L muito baixo; pensar hipopituitarismo" }
    ],
    gravidade: [
      "Sinais centrais: alteração de consciência + hipotermia + fator desencadeante",
      "Pior prognóstico: idade avançada, hipotermia refratária, bradicardia, hipotensão, sepse, Glasgow baixo",
      "Escore diagnóstico de Popoveniuc (2014) pode ajudar; não atrasar tratamento"
    ]
  },
  exames: [
    {
      nome: "Função tireoidiana e cortisol",
      pedido: "TSH, T4 livre, cortisol sérico (colher antes da hidrocortisona).",
      porQue: "Confirmar hipotireoidismo e avaliar insuficiência adrenal associada.",
      esperar: "TSH muito elevado com T4L baixo (primário) ou TSH inapropriadamente normal/baixo (central).",
      interpretacao: "Cortisol baixo para o estresse → manter hidrocortisona e investigar.",
      limitacoes: "Tratar antes do resultado."
    },
    {
      nome: "Laboratório geral",
      pedido: "Glicemia, sódio, potássio, ureia, creatinina, CK, hemograma, gasometria arterial ou venosa (pCO₂), lactato, TGO, TGP, PCR, urina tipo 1, hemoculturas e urocultura, troponina.",
      porQue: "Hiponatremia, hipoglicemia, hipercapnia, rabdomiólise, infecção.",
      esperar: "Hiponatremia, CK alta, hipercapnia, anemia.",
      interpretacao: "pCO₂ elevada com rebaixamento → ventilação.",
      limitacoes: "—"
    },
    {
      nome: "ECG, RX de tórax e ecocardiograma",
      pedido: "ECG de 12 derivações; RX de tórax; ecocardiograma se cardiomegalia ou hipotensão.",
      porQue: "Bradicardia, baixa voltagem, QT longo, derrame pericárdico, isquemia.",
      esperar: "Bradicardia sinusal, baixa voltagem.",
      interpretacao: "Derrame pericárdico raramente causa tamponamento, mas avaliar se hipotensão.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Hidrocortisona",
      linha: "l1",
      dose: "100 mg",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Até excluir insuficiência adrenal; depois reduzir",
      monitorizacao: "Glicemia, PA",
      contraindicacoes: "—",
      ajustes: "Iniciar antes ou junto da levotiroxina"
    },
    {
      droga: "Levotiroxina IV",
      linha: "l1",
      dose: "Ataque 200–400 µg (doses menores em idoso, baixo peso, coronariopata); depois 1,6 µg/kg/dia × 0,75",
      via: "IV",
      intervalo: "Ataque único; depois 1×/dia",
      duracao: "Até poder usar VO",
      monitorizacao: "ECG, isquemia, arritmia; T4L em 3–7 dias",
      contraindicacoes: "—",
      ajustes: "Disponibilidade limitada no Brasil (importação/hospitais de referência). Quando passar a VO, a dose oral é ≈ dose IV ÷ 0,75"
    },
    {
      droga: "Levotiroxina VO / SNG (quando não há forma IV)",
      linha: "alt",
      dose: "Ataque 300–500 µg, depois 50–100 µg/dia (ajustar)",
      via: "VO ou SNG (comprimido triturado)",
      intervalo: "1×/dia, em jejum da dieta enteral quando possível",
      duracao: "Contínuo",
      monitorizacao: "ECG, T4L",
      contraindicacoes: "—",
      ajustes: "Absorção intestinal reduzida no mixedema (íleo, edema); preferir IV quando disponível. Conferir protocolo local"
    },
    {
      droga: "Liotironina (T3)",
      linha: "adj",
      dose: "Ataque 5–20 µg, depois 2,5–10 µg",
      via: "IV (ou VO)",
      intervalo: "8/8 h",
      duracao: "Até melhora clínica",
      monitorizacao: "Arritmia, isquemia",
      contraindicacoes: "Idoso e coronariopata: doses menores ou evitar",
      ajustes: "ATA 2014: opção associada à T4. Pouco disponível no Brasil"
    },
    {
      droga: "Solução salina hipertônica 3%",
      linha: "adj",
      dose: "Se hiponatremia grave sintomática: 100–150 mL em 10–20 min",
      via: "IV",
      intervalo: "Pode repetir 1–2 vezes",
      duracao: "Até melhora dos sintomas ou elevação de 4–6 mEq/L",
      monitorizacao: "Na a cada 2–4 h; limite de correção ≤ 8–10 mEq/L em 24 h",
      contraindicacoes: "—",
      ajustes: "Ver ficha hiponatremia. Restringir água livre"
    }
  ],
  destino: {
    agora: ["UTI", "Via aérea, ventilação, aquecimento passivo, hidrocortisona e levotiroxina"],
    reavaliar: ["Temperatura, consciência, gasometria e Na de 2/2 h a 4/4 h no início", "ECG e sinais de isquemia após a levotiroxina"],
    alta: ["Consciente, deglutindo, levotiroxina VO ajustada, seguimento com endocrinologia em 2–4 semanas e TSH/T4L em 4–6 semanas"],
    observacao: ["—"],
    internacao: ["Todos, em UTI"],
    transferencia: ["Sem UTI ou sem ventilação mecânica → regulação após hidrocortisona, T4 e suporte"]
  },
  prescricao: {
    hospitalar: "COMA MIXEDEMATOSO — ADULTO (peso: ___ kg)\n1. Dieta zero; SNG se rebaixado (para medicações).\n2. Monitor, oximetria, O₂; avaliar ventilação mecânica se pCO₂ elevada com rebaixamento.\n3. Aquecimento passivo: cobertores, manta, ambiente aquecido; soro aquecido. Evitar aquecimento ativo externo.\n4. Glicemia capilar de 2/2 h; se < 70 mg/dL: glicose 50% 40 mL IV e SG 5–10% em manutenção.\n5. Hidrocortisona 100 mg IV de 8/8 h (diluir em 100 mL de SF 0,9%, em 30 min) — 1ª dose antes ou junto com a levotiroxina.\n6. Levotiroxina:\n   - IV (se disponível): ___ µg (200–400 µg; menor em idoso/coronariopata) IV lento; depois ___ µg IV 1×/dia (1,6 µg/kg × 0,75).\n   - Sem forma IV: levotiroxina ___ µg (300–500 µg) triturada por SNG agora; depois 50–100 µg/dia por SNG.\n7. SF 0,9% em alíquotas de 250–500 mL conforme PA e congestão. Evitar soluções hipotônicas.\n8. Se Na < 120 com sintomas neurológicos graves: NaCl 3% 100–150 mL IV em 20 min (ver ficha hiponatremia).\n9. Antibiótico empírico se suspeita de infecção (culturas antes).\n10. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV), se sem contraindicação.\n11. Evitar sedativos e opioides; ajustar doses de drogas (metabolismo lento).\n12. Controles: temperatura central de 1/1 h, sinais vitais, Glasgow, diurese, Na e gasometria de 4/4 h a 6/6 h, ECG contínuo."
  },
  orientacoesRetorno: [
    "Tomar a levotiroxina todos os dias, em jejum, 30–60 minutos antes do café",
    "Não parar o remédio mesmo se sentir bem",
    "Voltar ao serviço se sonolência excessiva, frio intenso, inchaço, falta de ar, dor no peito ou palpitação",
    "Exames de controle (TSH e T4 livre) em 4–6 semanas e consulta com endocrinologia"
  ],
  fontes: [
    "American Thyroid Association — Guidelines for the Treatment of Hypothyroidism (Thyroid, 2014)",
    "SBEM — Diretrizes clínicas práticas para o manejo do hipotireoidismo (Arq Bras Endocrinol Metab, 2013)",
    "Popoveniuc G et al. — A diagnostic scoring system for myxedema coma (Endocrine Practice, 2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
