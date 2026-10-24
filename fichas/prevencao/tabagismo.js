// Tabagismo
registrarFicha({
  id: "tabagismo",
  especialidade: "prevencao",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Tabagismo: cessação",
  resumo: "Abordagem do fumante na atenção primária: avaliação da dependência (Fagerström), abordagem breve, tratamento farmacológico (adesivo, goma/pastilha de nicotina, bupropiona) e seguimento.",
  palavrasChave: "tabagismo cigarro fumante parar de fumar cessacao nicotina adesivo goma pastilha bupropiona vareniclina fagerstrom pnct cigarro eletronico vape",
  critico: {
    tempo: "Pergunte em toda consulta",
    texto: "Perguntar, aconselhar e oferecer ajuda em toda consulta. Tratamento farmacológico + abordagem comportamental dobra ou triplica a chance de parar."
  },
  alarmes: [
    "Sintomas de câncer de pulmão/cabeça e pescoço: hemoptise, perda de peso, rouquidão persistente",
    "Dispneia progressiva (DPOC)",
    "Depressão ou ideação suicida durante a cessação",
    "Gestante fumante (prioridade)"
  ],
  condutaInicial: [
    "Registrar carga tabágica (anos-maço) e uso de cigarro eletrônico/narguilé",
    "Avaliar dependência (Fagerström) e motivação (estágio de mudança)",
    "Abordagem breve (3–5 min) em toda consulta; marcar data de parada",
    "Oferecer terapia de reposição de nicotina e/ou bupropiona e o grupo do Programa Nacional de Controle do Tabagismo",
    "Seguimento nas semanas 1, 2, 4 e depois mensal"
  ],
  fataisExcluir: [
    "Câncer de pulmão (rastreio por TC de baixa dose em 50–80 anos com ≥ 20 anos-maço, conforme ficha de rastreio)",
    "DPOC não diagnosticada",
    "Doença cardiovascular"
  ],
  proximaDecisao: "Fagerström ≥ 5 ou > 20 cigarros/dia → adesivo de 21 mg + nicotina de curta ação. Recaída → reavaliar dose e associar bupropiona; não desistir.",
  clinica: {
    anamnese: [
      "Idade de início, cigarros/dia, anos-maço (cigarros/dia ÷ 20 × anos)",
      "Primeiro cigarro após acordar (dependência)",
      "Tentativas anteriores e o que funcionou",
      "Gatilhos (café, álcool, estresse), convivência com fumantes",
      "Comorbidades psiquiátricas, epilepsia, gestação"
    ],
    exameFisico: ["PA, peso, ausculta pulmonar", "Cavidade oral (leucoplasia)", "Sinais de DPOC"],
    diferenciais: [
      { dx: "Uso de cigarro eletrônico", pista: "Também gera dependência e lesão pulmonar (EVALI)" },
      { dx: "Uso associado de álcool", pista: "Aumenta recaída: abordar junto" }
    ],
    gravidade: [
      "Fagerström: 0–2 muito baixa · 3–4 baixa · 5 média · 6–7 elevada · 8–10 muito elevada dependência"
    ]
  },
  exames: [
    { nome: "Espirometria", pedido: "Espirometria com prova broncodilatadora — se sintomas respiratórios ou ≥ 40 anos com carga tabágica relevante.", porQue: "Diagnóstico de DPOC.", esperar: "—", interpretacao: "VEF₁/CVF < 0,70 pós-BD → DPOC.", limitacoes: "—" },
    { nome: "Rastreio de câncer de pulmão", pedido: "TC de tórax de baixa dose — 50–80 anos, ≥ 20 anos-maço, fumante ou ex-fumante há < 15 anos (decisão compartilhada; conferir disponibilidade).", porQue: "Reduz mortalidade por câncer de pulmão.", esperar: "—", interpretacao: "Seguir laudo Lung-RADS.", limitacoes: "Falsos-positivos; acesso limitado no SUS." }
  ],
  tratamento: [
    { droga: "Adesivo de nicotina", linha: "l1", dose: "21 mg/dia por 4 semanas → 14 mg/dia por 4 semanas → 7 mg/dia por 4 semanas", via: "Transdérmica (trocar o local diariamente)", intervalo: "1×/dia", duracao: "8–12 semanas", monitorizacao: "Irritação local, insônia (retirar à noite)", contraindicacoes: "IAM recente (< 2 semanas), arritmia grave, angina instável (relativa)", ajustes: "< 20 cigarros/dia ou Fagerström < 5: iniciar com 14 mg" },
    { droga: "Goma ou pastilha de nicotina 2 mg", linha: "l1", dose: "1 unidade quando houver fissura (máx 15/dia)", via: "Mascar e repousar na bochecha", intervalo: "Se necessário", duracao: "8–12 semanas", monitorizacao: "Soluços, dor mandibular", contraindicacoes: "Problemas na articulação temporomandibular (goma)", ajustes: "Associar ao adesivo nas fissuras" },
    { droga: "Bupropiona", linha: "l1", dose: "150 mg 1×/dia por 3 dias, depois 150 mg 12/12h", via: "VO (2ª dose até 16 h)", intervalo: "12/12h", duracao: "12 semanas; iniciar 1–2 semanas antes da data de parada", monitorizacao: "PA, insônia, humor", contraindicacoes: "Epilepsia, TCE, anorexia/bulimia, uso de IMAO, abstinência alcoólica", ajustes: "Pode associar à reposição de nicotina" },
    { droga: "Vareniclina", linha: "alt", dose: "0,5 mg 1×/dia (D1–3), 0,5 mg 12/12h (D4–7), depois 1 mg 12/12h", via: "VO", intervalo: "12/12h", duracao: "12 semanas", monitorizacao: "Náusea, sonhos vívidos", contraindicacoes: "—", ajustes: "Mais eficaz isolada; disponibilidade variável. ClCr < 30: máx 0,5 mg 12/12h" }
  ],
  prescricao: {
    ambulatorial: "USO TRANSDÉRMICO\n1. Adesivo de nicotina 21 mg ------------------------ 28 adesivos\n   Aplicar 1 adesivo por dia, pela manhã, em pele limpa e sem pelos, trocando o local. Retirar à noite se insônia.\n   Após 4 semanas: 14 mg por 4 semanas; depois 7 mg por 4 semanas.\n\nUSO ORAL\n2. Goma de mascar de nicotina 2 mg ------------------ 1 caixa\n   Mascar devagar 1 goma quando sentir vontade forte de fumar; repousar na bochecha entre as mastigadas (máx 15/dia).\n3. Bupropiona 150 mg (liberação prolongada) --------- 60 comprimidos\n   Tomar 1 comprimido pela manhã por 3 dias; depois 1 de manhã e 1 à tarde (até 16 h). Parar de fumar entre o 8º e o 14º dia.\n\nData marcada para parar de fumar: ____/____/______"
  },
  orientacoesRetorno: [
    "Marque uma data para parar e avise família e amigos",
    "Evite gatilhos nas primeiras semanas (café, álcool, locais onde fumava)",
    "A fissura dura poucos minutos: beba água, respire fundo, use a goma",
    "Se fumar de novo, não desista: volte à consulta e ajuste o tratamento",
    "Retorno em 1 semana, 2 semanas, 4 semanas e depois mensal até 3 meses"
  ],
  destino: {
    agora: ["Abordagem breve, data de parada e tratamento farmacológico"],
    reavaliar: ["Semanas 1, 2 e 4; depois mensal"],
    alta: ["Seguimento na UBS e grupo de tabagismo (PNCT)"],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: ["CAPS/CAPS AD se dependência de outras substâncias ou transtorno psiquiátrico grave"]
  },
  fontes: [
    "Ministério da Saúde — PCDT do Tabagismo (2020)",
    "INCA — Programa Nacional de Controle do Tabagismo",
    "USPSTF 2021 — Tobacco Smoking Cessation in Adults"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
