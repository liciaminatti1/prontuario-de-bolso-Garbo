// Uso de álcool: rastreio, abstinência e tratamento
registrarFicha({
  id: "uso-alcool",
  especialidade: "saude-mental",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Uso de álcool: rastreio, abstinência e tratamento",
  resumo: "Rastreio do consumo (AUDIT/AUDIT-C), intervenção breve, manejo da síndrome de abstinência e tratamento do transtorno por uso de álcool.",
  palavrasChave: "alcool alcoolismo etilismo audit abstinencia delirium tremens tiamina wernicke diazepam naltrexona dissulfiram caps ad",
  critico: {
    tempo: "Tiamina antes da glicose",
    texto: "Em etilista desnutrido ou em abstinência: tiamina 100–300 mg antes de qualquer glicose (prevenção de Wernicke). Abstinência com alucinação, convulsão ou confusão → PS."
  },
  alarmes: [
    "Abstinência com tremor intenso, alucinações, convulsão ou confusão (delirium tremens)",
    "Confusão + ataxia + alteração ocular (encefalopatia de Wernicke)",
    "Hematêmese, melena, icterícia, ascite",
    "Ideação suicida, violência doméstica",
    "Gestante que consome álcool"
  ],
  condutaInicial: [
    "Rastrear com AUDIT-C (ou AUDIT completo) em toda consulta de adulto",
    "Consumo de risco: intervenção breve (feedback, conselho, metas, acompanhamento)",
    "Dependência: avaliar risco de abstinência (convulsões ou delirium prévios, comorbidades)",
    "Abstinência leve/moderada sem complicações pode ser tratada no ambulatório: benzodiazepínico + tiamina",
    "Oferecer tratamento farmacológico (naltrexona) e CAPS AD / grupos de apoio"
  ],
  fataisExcluir: [
    "Delirium tremens",
    "Encefalopatia de Wernicke",
    "Hemorragia digestiva, pancreatite, hepatite alcoólica",
    "Hipoglicemia, TCE (quedas)"
  ],
  proximaDecisao: "AUDIT 8–15 → intervenção breve. 16–19 → intervenção breve + acompanhamento. ≥ 20 → avaliação de dependência e tratamento especializado (CAPS AD).",
  clinica: {
    anamnese: [
      "Quantidade (doses/dia), frequência, beber pesado episódico (≥ 5 doses homem / ≥ 4 mulher)",
      "Última dose, abstinências prévias, convulsões ou delirium",
      "Consequências: trabalho, família, trânsito, violência",
      "Outras substâncias, tabagismo, depressão, ansiedade"
    ],
    exameFisico: ["Tremor, sudorese, taquicardia, hipertensão (abstinência)", "Estigmas hepáticos", "Estado nutricional, neuropatia, ataxia, nistagmo"],
    diferenciais: [
      { dx: "Abstinência de benzodiazepínicos", pista: "Uso crônico de BZD" },
      { dx: "Hipoglicemia, infecção, TCE", pista: "Confusão sem padrão típico de abstinência" },
      { dx: "Transtorno de ansiedade", pista: "Ansiedade sem relação com interrupção do álcool" }
    ],
    gravidade: [
      "AUDIT: 0–7 baixo risco · 8–15 risco · 16–19 uso nocivo · ≥ 20 provável dependência",
      "CIWA-Ar: < 10 leve · 10–18 moderada · > 18 grave (sem tratamento ambulatorial)"
    ]
  },
  exames: [
    { nome: "Laboratório", pedido: "Hemograma (VCM, plaquetas), TGO, TGP, GGT, bilirrubinas, albumina, TP/INR, glicemia, sódio, potássio, magnésio, creatinina; sorologias para hepatites B e C e HIV.", porQue: "Dano hepático e metabólico, carências.", esperar: "VCM e GGT elevados, TGO/TGP > 2.", interpretacao: "Plaquetas baixas sugerem hepatopatia avançada.", limitacoes: "Exames normais não excluem uso nocivo." }
  ],
  tratamento: [
    { droga: "Tiamina", linha: "l1", dose: "100–300 mg/dia (Wernicke: 500 mg IV 8/8h no hospital)", via: "VO ou IM/IV", intervalo: "1×/dia", duracao: "Durante a abstinência e enquanto desnutrido", monitorizacao: "—", contraindicacoes: "—", ajustes: "Sempre antes de glicose" },
    { droga: "Diazepam (abstinência)", linha: "l1", dose: "10–20 mg VO a cada 6 h no 1º dia, reduzindo 20–25% ao dia (ou guiado por sintomas/CIWA)", via: "VO", intervalo: "6/6h", duracao: "3–7 dias", monitorizacao: "Sedação, função respiratória; não associar ao álcool", contraindicacoes: "Hepatopatia grave (preferir lorazepam), insuficiência respiratória", ajustes: "Tratamento ambulatorial só com acompanhante e retorno diário" },
    { droga: "Naltrexona", linha: "l1", dose: "50 mg", via: "VO", intervalo: "1×/dia", duracao: "3–12 meses", monitorizacao: "Transaminases", contraindicacoes: "Uso de opioides, hepatite aguda ou insuficiência hepática", ajustes: "Reduz recaída e consumo pesado" },
    { droga: "Dissulfiram", linha: "alt", dose: "250 mg", via: "VO", intervalo: "1×/dia", duracao: "Conforme plano", monitorizacao: "Hepatotoxicidade", contraindicacoes: "Cardiopatia, psicose; nunca sem conhecimento e consentimento do paciente", ajustes: "Reação grave se beber (inclui álcool em alimentos e cosméticos)" },
    { droga: "Topiramato", linha: "adj", dose: "25 mg/dia, aumentar até 75–150 mg 12/12h", via: "VO", intervalo: "12/12h", duracao: "Conforme resposta", monitorizacao: "Parestesia, cognição", contraindicacoes: "Gestação, litíase", ajustes: "Uso off-label com evidência de redução de consumo" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL (abstinência leve, com acompanhante e retorno diário)\n1. Tiamina 300 mg ----------------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia.\n2. Diazepam 10 mg ---------------------------------- 11 comprimidos\n   Dia 1: 1 comprimido de 6 em 6 horas; dia 2: 8 em 8 horas; dia 3: 12 em 12 horas; dias 4–5: 1 à noite. Não beber álcool. (Receita controlada B1.)\n3. Naltrexona 50 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia (iniciar após a abstinência).\n\nORIENTAÇÕES\n- Procurar o PS se tremor intenso, ver ou ouvir coisas, convulsão ou confusão.\n- Não dirigir em uso de diazepam.\n- Encaminhamento ao CAPS AD e grupos de apoio."
  },
  orientacoesRetorno: [
    "Abstinência: retorno diário nos primeiros dias, com acompanhante",
    "Procurar o PS imediatamente se confusão, alucinações, convulsão ou vômitos com sangue",
    "Recaída faz parte do processo: retornar e ajustar o plano",
    "Retorno em 1–2 semanas e depois mensal"
  ],
  destino: {
    agora: ["Rastreio, intervenção breve e plano conforme gravidade"],
    reavaliar: ["Abstinência ambulatorial: diário até estabilizar", "AUDIT a cada consulta de seguimento"],
    alta: ["Seguimento compartilhado UBS–CAPS AD"],
    observacao: ["—"],
    internacao: ["Abstinência grave/delirium, convulsões, Wernicke, comorbidade grave"],
    transferencia: ["CAPS AD: dependência, falha do tratamento na APS, outras substâncias", "PS: abstinência complicada"]
  },
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 34: Saúde Mental (2013)",
    "OMS — AUDIT: Alcohol Use Disorders Identification Test (2001) e mhGAP 2.0",
    "APA 2018 Practice Guideline for the Pharmacological Treatment of Alcohol Use Disorder"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
