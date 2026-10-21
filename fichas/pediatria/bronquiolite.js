// Bronquiolite viral aguda
registrarFicha({
  id: "bronquiolite",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Bronquiolite viral aguda",
  resumo: "Primeiro episódio de sibilância e/ou crepitações em criança < 2 anos, precedido por coriza e tosse. Principal agente: vírus sincicial respiratório (VSR).",
  palavrasChave: "bronquiolite vsr sincicial lactente sibilancia desconforto respiratorio oxigenio lavagem nasal cateter alto fluxo nirsevimabe pediatria",
  critico: {
    tempo: "Tratamento é suporte",
    texto: "Lavagem nasal, aspiração, O₂ se SpO₂ < 90–92% e hidratação. Broncodilatador, corticoide e antibiótico não são recomendados de rotina."
  },
  alarmes: [
    "Apneia ou cianose",
    "SpO₂ < 90–92% em ar ambiente",
    "Desconforto moderado/grave: tiragem intensa, gemência, batimento de asa nasal, FR > 70",
    "Ingestão < 50% do habitual ou desidratação",
    "Idade < 3 meses, prematuridade < 35 semanas, cardiopatia, doença pulmonar crônica, imunodeficiência"
  ],
  condutaInicial: [
    "Avaliar desconforto, SpO₂, hidratação e capacidade de mamar",
    "Lavagem nasal com SF 0,9% e aspiração antes das mamadas",
    "O₂ se SpO₂ persistentemente < 90–92% (alvo ≥ 90–92%)",
    "Hidratação oral fracionada; sonda nasogástrica se não aceita",
    "Cânula nasal de alto fluxo se falha do O₂ convencional"
  ],
  fataisExcluir: [
    "Insuficiência respiratória / apneia",
    "Pneumonia bacteriana",
    "Cardiopatia congênita / miocardite",
    "Coqueluche (paroxismos, guincho, apneia em < 6 meses)",
    "Corpo estranho"
  ],
  proximaDecisao: "Sem alarmes, SpO₂ adequada e mamando bem → alta com orientações (pico no 3º–5º dia). Algum alarme → internação.",
  clinica: {
    anamnese: [
      "Idade, prematuridade, comorbidades",
      "Dias de doença (piora esperada até o 3º–5º dia)",
      "Aceitação alimentar, diurese",
      "Apneia, cianose",
      "Episódios prévios de sibilância (se recorrente, pensar em lactente sibilante/asma)"
    ],
    exameFisico: [
      "FR (contar 1 min), tiragem, batimento de asa nasal, gemência",
      "SpO₂ após aspiração nasal",
      "Ausculta: sibilos, crepitações difusas",
      "Hidratação, perfusão",
      "Sopros cardíacos, hepatomegalia"
    ],
    diferenciais: [
      { dx: "Lactente sibilante / asma", pista: "Episódios recorrentes, atopia, resposta ao broncodilatador" },
      { dx: "Pneumonia", pista: "Febre alta, toxemia, achado focal" },
      { dx: "Coqueluche", pista: "Tosse paroxística, guincho, apneia, linfocitose" },
      { dx: "IC por cardiopatia", pista: "Sopro, hepatomegalia, cansaço às mamadas" },
      { dx: "Aspiração / corpo estranho", pista: "Início súbito, assimetria" }
    ],
    gravidade: [
      "Leve: FR normal ou pouco elevada, sem tiragem importante, SpO₂ > 92%, mama bem",
      "Moderada: tiragem, FR elevada, SpO₂ 88–92%, mamadas interrompidas",
      "Grave: gemência, apneia, cianose, SpO₂ < 88%, letargia"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Não solicitar exames de rotina na bronquiolite típica.",
      porQue: "Não mudam o manejo.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax — apenas se grave, evolução atípica ou suspeita de complicação.",
      porQue: "Pneumonia, pneumotórax, cardiopatia.",
      esperar: "Hiperinsuflação, atelectasias (comuns, não indicam antibiótico).",
      interpretacao: "—",
      limitacoes: "Atelectasias são confundidas com pneumonia e levam a antibiótico desnecessário."
    },
    {
      nome: "Pesquisa viral e gasometria",
      pedido: "Painel viral (VSR, influenza, SARS-CoV-2) em internados para coorte/isolamento; gasometria se grave.",
      porQue: "Isolamento e avaliação de hipercapnia.",
      esperar: "—",
      interpretacao: "pCO₂ > 50–55 com acidose → suporte ventilatório.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Lavagem nasal e aspiração",
      linha: "l1",
      dose: "SF 0,9% 1–2 mL em cada narina",
      via: "Nasal",
      intervalo: "Antes das mamadas e se obstrução",
      duracao: "Durante a doença",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Aspiração superficial; evitar aspiração profunda repetida"
    },
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Cateter nasal 0,5–2 L/min; alvo SpO₂ ≥ 90–92%",
      via: "Inalatória",
      intervalo: "Contínuo enquanto necessário",
      duracao: "Até SpO₂ estável em ar ambiente",
      monitorizacao: "SpO₂, desconforto",
      contraindicacoes: "—",
      ajustes: "Falha: cânula nasal de alto fluxo 1–2 L/kg/min"
    },
    {
      droga: "Hidratação",
      linha: "l1",
      dose: "Oral fracionada; SNG se aceitação < 50%; IV se SNG impossível",
      via: "VO / SNG / IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Diurese, peso, sódio (risco de SIADH)",
      contraindicacoes: "—",
      ajustes: "Soro IV isotônico (Na 130–154 mEq/L com glicose 5%); volume de manutenção de Holliday-Segar (100 mL/kg/dia até 10 kg; +50 mL/kg/dia de 10–20 kg); restringir a 2/3 se risco de SIADH"
    },
    {
      droga: "Salina hipertônica 3% nebulizada",
      linha: "adj",
      dose: "4 mL (preparo: 0,6 mL de NaCl 20% + 3,4 mL de água destilada)",
      via: "Nebulização",
      intervalo: "8/8h",
      duracao: "—",
      monitorizacao: "Broncoespasmo",
      contraindicacoes: "Uso no PS (não reduz internação)",
      ajustes: "Pode ser considerada em internados com previsão de > 72 h"
    },
    {
      droga: "Broncodilatador, corticoide, antibiótico",
      linha: "ci",
      dose: "Não recomendados de rotina",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício comprovado",
      ajustes: "Antibiótico apenas com infecção bacteriana documentada (ex.: otite, pneumonia confirmada)"
    },
    {
      droga: "Prevenção: nirsevimabe / palivizumabe",
      linha: "adj",
      dose: "Nirsevimabe: < 5 kg 50 mg; ≥ 5 kg 100 mg, dose única no 1º ano de vida (2ª sazonalidade em comorbidades: 200 mg)",
      via: "IM",
      intervalo: "—",
      duracao: "Prematuros: ao longo do ano, de preferência na maternidade; comorbidades: no início da sazonalidade",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Doses conforme bula. SUS (Portaria SCTIE/MS nº 14/2026 e notas técnicas do PNI de 2026): prematuros ≤ 36 semanas e 6 dias, independentemente do peso, e < 24 meses com comorbidades (cardiopatia congênita, broncodisplasia, síndrome de Down, entre outras). Nirsevimabe substitui o palivizumabe. Fora da sazonalidade, seguir a nota técnica vigente do PNI (NT nº 89/2026). Vacina VSR para gestantes conforme o PNI"
    }
  ],
  destino: {
    agora: [
      "Suporte e estratificação de gravidade"
    ],
    reavaliar: [
      "Após aspiração e mamada: SpO₂ e esforço",
      "Alta: reavaliação em 24–48 h (pico da doença no 3º–5º dia)"
    ],
    alta: [
      "SpO₂ ≥ 90–92% em ar ambiente, desconforto leve, aceitando ≥ 50–75% da dieta",
      "Cuidadores orientados sobre lavagem nasal e sinais de alarme"
    ],
    observacao: [
      "Moderada com melhora após medidas iniciais: observar algumas horas"
    ],
    internacao: [
      "SpO₂ < 90–92%, desconforto moderado/grave, apneia, desidratação, < 3 meses com dificuldade, fatores de risco"
    ],
    transferencia: [
      "UTI pediátrica: apneias, falha de cânula de alto fluxo, hipercapnia",
      "UBS: qualquer alarme → PS"
    ]
  },
  prescricao: {
    hospitalar: "PRESCRIÇÃO — INTERNAÇÃO (LACTENTE, exemplo 6 kg — ajustar ao peso)\n1. Dieta: leite materno ou fórmula em livre demanda, fracionada. Se aceitação < 50% ou desconforto moderado: dieta por SNG (mesmo volume, fracionado de 3 em 3 horas).\n2. Se SNG impossível: solução isotônica IV — SG 5% 500 mL + NaCl 20% 20 mL — a 25 mL/h (100 mL/kg/dia; 2/3 = 17 mL/h se risco de SIADH). Acrescentar KCl 19,1% 5 mL por frasco após diurese.\n3. Lavagem nasal com SF 0,9% 1–2 mL em cada narina e aspiração nasal superficial antes das mamadas e se obstrução.\n4. O₂ por cateter nasal 0,5–2 L/min se SpO₂ < 90–92%; alvo SpO₂ ≥ 90–92%. Falha: cânula nasal de alto fluxo 2 L/kg/min.\n5. Salina hipertônica 3% 4 mL por nebulização de 8 em 8 horas (opcional, internados com previsão de > 72 h).\n6. Paracetamol 200 mg/mL: 1 gota/kg (10–15 mg/kg, conforme o conta-gotas da apresentação) VO de 6 em 6 horas se febre ≥ 37,8 °C ou dor (máx 75 mg/kg/dia).\n7. Cabeceira elevada 30°.\n8. Cuidados: SpO₂ contínua se em O₂, FR e esforço a cada 2–4 horas, balanço hídrico, peso diário, sódio se em soro IV. Isolamento de contato e gotículas.\n9. NÃO prescrever salbutamol, corticoide, antibiótico ou fisioterapia respiratória de rotina.",
    ambulatorial: "USO NASAL\n1. Soro fisiológico 0,9% -------------------------- 1 frasco\n   Pingar 1 a 2 mL em cada narina antes das mamadas e quando o nariz estiver entupido; aspirar com aspirador nasal.\n\nUSO ORAL\n2. Paracetamol 200 mg/mL gotas --------------------- 1 frasco\n   Dar 1 gota por kg de peso (máx 35 gotas) de 6 em 6 horas se febre ou dor."
  },
  orientacoesRetorno: [
    "A doença piora até o 3º–5º dia e a tosse pode durar 2 a 4 semanas",
    "Lavar o nariz com soro antes de mamar; oferecer o peito ou mamadeira em menor volume e mais vezes",
    "Não usar xaropes, descongestionantes ou inalação com remédios sem orientação",
    "Voltar imediatamente se: pausa na respiração, lábios roxos, respiração muito rápida ou com afundamento das costelas, gemido, mama menos da metade, menos fraldas molhadas, sonolência excessiva ou febre em menor de 3 meses",
    "Reavaliação na UBS em 24–48 horas",
    "Manter o bebê longe de fumaça de cigarro; lavar as mãos antes de pegá-lo; manter aleitamento materno"
  ],
  fontes: [
    "Ministério da Saúde — Portaria SCTIE/MS nº 14/2026 (protocolo de uso do nirsevimabe) e Estratégia de imunização contra o VSR para prematuros e crianças com comorbidades; Notas Técnicas nº 31/2026 e nº 89/2026-CGICI/DPNI/SVSA/MS",
    "AAP — Clinical Practice Guideline: Diagnosis, Management and Prevention of Bronchiolitis (2014, reafirmado)",
    "NICE NG9 — Bronchiolitis in children (2015, atualizado 2021)",
    "SBP — Diretrizes para o manejo da infecção causada pelo VSR (2017 e atualizações)"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
