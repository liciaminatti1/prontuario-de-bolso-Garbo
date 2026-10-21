// Infecção latente por tuberculose (ILTB)
registrarFicha({
  id: "iltb",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Infecção latente por tuberculose (ILTB) e avaliação de contatos",
  resumo: "Pessoa infectada pelo M. tuberculosis sem doença ativa. Rastreio de contatos e de grupos de risco com prova tuberculínica (PT) ou IGRA; tratamento preventivo (3HP, 4R, 6H/9H; 1HP onde disponível) após excluir TB ativa.",
  palavrasChave: "iltb tuberculose latente contatos prova tuberculinica pt ppd igra quantiferon 3hp rifapentina isoniazida 4r rifampicina 6h 9h 1hp tpt tratamento preventivo",
  critico: {
    tempo: "Excluir TB ativa antes de tratar",
    texto: "Todo contato ou pessoa com PT/IGRA positivo passa por avaliação clínica e RX de tórax antes do tratamento preventivo. Tratar ILTB em quem tem TB ativa gera resistência."
  },
  alarmes: [
    "Tosse, febre, sudorese noturna, emagrecimento ou RX alterado → investigar TB ativa (não iniciar ILTB)",
    "Criança < 5 anos contato de caso bacilífero (risco de TB grave, miliar e meníngea)",
    "PVHIV contato de TB",
    "Icterícia, náuseas e vômitos, colúria durante o tratamento (hepatotoxicidade)",
    "Reação de hipersensibilidade ou síndrome gripal intensa com 3HP (febre, hipotensão)"
  ],
  condutaInicial: [
    "Listar e avaliar todos os contatos do caso índice (prioridade: domiciliares, crianças, PVHIV, imunossuprimidos)",
    "Sintomático → investigar TB ativa (ficha tuberculose-pulmonar). Assintomático → PT ou IGRA e RX de tórax",
    "PT ≥ 5 mm ou IGRA reagente, com TB ativa excluída → tratar ILTB",
    "PT < 5 mm em contato → repetir em 8 semanas (conversão = aumento ≥ 10 mm)",
    "Escolher o esquema (3HP preferencial quando possível) e notificar no sistema de ILTB"
  ],
  fataisExcluir: [
    "TB pulmonar ativa paucibacilar",
    "TB extrapulmonar (linfonodal, pleural, meníngea em criança)",
    "TB em PVHIV com apresentação atípica"
  ],
  proximaDecisao: "TB ativa excluída e indicação presente → iniciar o esquema. Contato com PT inicial negativa → nova PT em 8 semanas. PVHIV com CD4 ≤ 350 ou contato de TB pulmonar → tratar sem necessidade de PT/IGRA (após excluir TB ativa).",
  clinica: {
    anamnese: [
      "Tipo de contato (domiciliar, tempo de exposição), baciloscopia/TRM-TB do caso índice e perfil de sensibilidade",
      "Sintomas de TB (tosse, febre, sudorese, perda de peso); em criança: ganho de peso, irritabilidade",
      "HIV, diabetes, DRC dialítica, silicose, neoplasia, transplante, uso de anti-TNF ou outros imunobiológicos, corticoide > 15 mg/dia de prednisona por mais de 1 mês",
      "Tratamento prévio de TB ou de ILTB; PT ou IGRA anteriores",
      "Hepatopatia, etilismo, gestação, medicações em uso (interações com rifamicinas)"
    ],
    exameFisico: [
      "Peso (define dose), estado geral",
      "Ausculta pulmonar, linfonodos, fígado e baço",
      "Cicatriz de BCG (registrar; não muda a leitura atual da PT para contatos)"
    ],
    diferenciais: [
      { dx: "TB ativa", pista: "Sintomas, RX alterado, TRM-TB/baciloscopia positivos" },
      { dx: "PT positiva por BCG ou micobactéria não tuberculosa", pista: "BCG recente em lactente; IGRA não sofre interferência do BCG" },
      { dx: "Falso-negativo da PT", pista: "Imunossupressão, desnutrição, < 6 meses, infecção recente (janela de 8 semanas)" }
    ],
    gravidade: [
      "Maior risco de adoecer: < 5 anos, PVHIV, imunossuprimidos, infecção recente (conversão), silicose, DRC em diálise, transplantados, anti-TNF",
      "PT ≥ 10 mm (ou IGRA reagente) indica tratamento em: diabetes, silicose, neoplasia de cabeça e pescoço, linfomas, insuficiência renal em diálise, tabagistas, baixo peso, conforme o MS"
    ]
  },
  exames: [
    {
      nome: "Prova tuberculínica (PT)",
      pedido: "Prova tuberculínica (PPD RT23 2 UT, 0,1 mL intradérmico no antebraço esquerdo), leitura em 48–72 h (até 96 h).",
      porQue: "Identificar infecção pelo M. tuberculosis.",
      esperar: "Leitura do maior diâmetro transverso da enduração, em mm.",
      interpretacao: "Contatos (adultos e crianças): ≥ 5 mm = positiva. Conversão: 2ª PT com aumento ≥ 10 mm em relação à 1ª. Quem já teve PT positiva não repete.",
      limitacoes: "Falso-positivo por BCG e micobactérias ambientais; falso-negativo em imunossuprimidos e na janela de 8 semanas."
    },
    {
      nome: "IGRA (ensaio de liberação de interferon-gama)",
      pedido: "IGRA (ensaio de liberação de interferon-gama) para diagnóstico de ILTB.",
      porQue: "Alternativa à PT nos grupos definidos pelo MS (ex.: PVHIV, crianças contatos, imunossuprimidos, candidatos a imunobiológicos, conforme disponibilidade local).",
      esperar: "Reagente / não reagente / indeterminado.",
      interpretacao: "Reagente = ILTB (se TB ativa excluída). Indeterminado: repetir o IGRA ou usar a PT.",
      limitacoes: "Disponibilidade restrita; não diferencia TB ativa de latente."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA e perfil (excluir TB ativa antes do tratamento preventivo).",
      porQue: "Excluir TB ativa em assintomáticos.",
      esperar: "Normal ou cicatriz.",
      interpretacao: "Qualquer alteração sugestiva → investigar TB ativa (escarro para TRM-TB e cultura).",
      limitacoes: "Lesão mínima pode passar despercebida."
    },
    {
      nome: "Exames antes de iniciar",
      pedido: "Teste rápido para HIV. TGO, TGP e bilirrubinas se: > 50 anos, hepatopatia, etilismo, PVHIV, gestante/puérpera ou uso de outras drogas hepatotóxicas.",
      porQue: "Rastrear HIV e risco de hepatotoxicidade.",
      esperar: "—",
      interpretacao: "Transaminases elevadas na base → preferir rifamicina e monitorar; discutir com referência.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "3HP — isoniazida + rifapentina semanal (12 doses)",
      linha: "l1",
      dose: "Adulto e ≥ 14 anos com ≥ 30 kg: isoniazida 900 mg + rifapentina 900 mg (3 comp de 300 mg de cada, ou 3 comp da dose fixa 300/300 mg). Criança 2–14 anos — isoniazida/rifapentina: 10–15 kg 300/300 mg · 16–23 kg 500/450 mg · 24–30 kg 600/600 mg · > 30 kg 700/750 mg",
      via: "VO",
      intervalo: "1 vez por semana (mesmo dia da semana)",
      duracao: "12 doses em até 12–15 semanas",
      monitorizacao: "Tomada observada ou autoadministrada com controle; sintomas de hipersensibilidade (febre, mal-estar, hipotensão) e de hepatite",
      contraindicacoes: "< 2 anos, gestantes, PVHIV em uso de inibidores de protease ou outros antirretrovirais com interação, contato de caso resistente a isoniazida ou rifampicina",
      ajustes: "PVHIV em dolutegravir: a OMS considera o 3HP compatível; confirmar no PCDT HIV vigente. Interage com anticoncepcional hormonal, varfarina, metadona e outros indutores/substratos do CYP3A4"
    },
    {
      droga: "4R — rifampicina diária",
      linha: "l1",
      dose: "Adulto: 10 mg/kg/dia (máx 600 mg) · Criança < 10 anos: 15 (10–20) mg/kg/dia (máx 600 mg)",
      via: "VO, em jejum",
      intervalo: "1 vez ao dia",
      duracao: "120 doses em 4 a 6 meses",
      monitorizacao: "Adesão, sintomas de hepatite",
      contraindicacoes: "PVHIV em uso de inibidores de protease ou nevirapina; contato de caso resistente a rifampicina",
      ajustes: "Preferido em > 50 anos, hepatopatas e contatos de caso resistente a isoniazida. Suspensão oral 20 mg/mL para crianças. Mesmas interações da rifampicina"
    },
    {
      droga: "6H ou 9H — isoniazida diária",
      linha: "alt",
      dose: "Adulto: 5–10 mg/kg/dia (máx 300 mg) · Criança < 10 anos: 10 mg/kg/dia (até 20 kg); 21–25 kg 200 mg; > 25 kg 300 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "180 doses em 6–9 meses (6H) ou 270 doses em 9–12 meses (9H — PVHIV e outras situações definidas pelo MS)",
      monitorizacao: "Sintomas de hepatite e neuropatia; transaminases se risco",
      contraindicacoes: "Hepatopatia ativa; contato de caso resistente à isoniazida",
      ajustes: "Associar piridoxina 50 mg/dia em gestantes, PVHIV, diabéticos, etilistas e desnutridos. Opção em gestantes"
    },
    {
      droga: "3RH — rifampicina + isoniazida (dispersível 75/50 mg) em criança",
      linha: "alt",
      dose: "4–7 kg: 1 comp · 8–11 kg: 2 comp · 12–15 kg: 3 comp · 16–24 kg: 4 comp (RH 75/50 mg dispersível; faixa de 4 a < 25 kg)",
      via: "VO, dissolvido em água",
      intervalo: "1 vez ao dia",
      duracao: "3 meses",
      monitorizacao: "Adesão, peso",
      contraindicacoes: "Interações da rifampicina",
      ajustes: "Opção para crianças < 10 anos com 4 a < 25 kg (Nota Informativa nº 6/2024-CGTM). Faixas iguais às da OMS para o RH dispersível; conferir na nota oficial"
    },
    {
      droga: "1HP — isoniazida + rifapentina diária",
      linha: "alt",
      dose: "≥ 13 anos: isoniazida 300 mg + rifapentina 600 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "28 doses (1 mês)",
      monitorizacao: "Hipersensibilidade, hepatite",
      contraindicacoes: "Gestantes, < 13 anos, mesmas interações do 3HP",
      ajustes: "Recomendado pela OMS (2024). Uso no SUS depende de normativa e disponibilidade local — confirmar com o programa de TB antes de prescrever"
    }
  ],
  destino: {
    agora: [
      "Excluir TB ativa (clínica + RX) e iniciar o esquema na UBS",
      "Notificar no sistema de informação de ILTB (IL-TB) e registrar a avaliação dos contatos"
    ],
    reavaliar: [
      "Consulta mensal (3HP: a cada dose ou mensal): adesão, efeitos adversos, sintomas de TB",
      "Hepatotoxicidade: mesmos critérios de suspensão do tratamento da TB (TGO/TGP > 5× sem sintomas ou > 3× com sintomas, ou icterícia)"
    ],
    alta: [
      "Tratamento completo: 12 doses (3HP), 120 doses (4R), 180 doses (6H) ou 270 doses (9H) dentro do prazo",
      "Orientar procurar a UBS se surgir tosse, febre ou emagrecimento no futuro"
    ],
    observacao: ["—"],
    internacao: ["Hepatite medicamentosa grave ou reação de hipersensibilidade grave"],
    transferencia: [
      "Contato de TB drogarresistente → referência terciária para definir tratamento preventivo",
      "Gestante, hepatopata ou PVHIV com interações → discutir com referência"
    ]
  },
  prescricao: {
    ambulatorial: "ILTB — 3HP ADULTO (≥ 14 anos e ≥ 30 kg) — dispensação pela UBS\nUSO ORAL\n1. Isoniazida 300 mg + rifapentina 300 mg (dose fixa) ---------- 36 comprimidos\n   Tomar 3 comprimidos juntos, 1 vez por semana (sempre no mesmo dia), por 12 semanas.\n   (ou isoniazida 300 mg 3 comp + rifapentina 150 mg 6 comp, juntos, 1 vez por semana)\n2. Piridoxina 50 mg (se indicada) — 1 comprimido 1 vez por semana junto com a dose.\n\nALTERNATIVA — 4R ADULTO (exemplo 60 kg)\n1. Rifampicina 300 mg ------------------------------ 240 cápsulas\n   Tomar 2 cápsulas (600 mg) 1 vez ao dia, em jejum, por 4 meses.\n\nALTERNATIVA — 6H ADULTO\n1. Isoniazida 100 mg ------------------------------- 540 comprimidos\n   Tomar 3 comprimidos (300 mg) 1 vez ao dia por 6 meses.\n2. Piridoxina 50 mg -------------------------------- 180 comprimidos (se gestante, PVHIV, diabético, etilista ou desnutrido)\n\nCRIANÇA (exemplo 18 kg)\n- 3HP (≥ 2 anos): isoniazida 500 mg + rifapentina 450 mg 1 vez por semana por 12 semanas (faixa 16–23 kg).\n- 4R: rifampicina suspensão 20 mg/mL — 15 mg/kg = 270 mg = 13,5 mL 1 vez ao dia em jejum por 4 meses (máx 600 mg).\n- 6H: isoniazida 10 mg/kg/dia = 180 mg 1 vez ao dia por 6 meses (máx 300 mg).\n\nORIENTAÇÕES\n- Rifampicina e rifapentina deixam urina e lágrima alaranjadas e cortam o efeito da pílula: usar camisinha ou DIU."
  },
  orientacoesRetorno: [
    "O tratamento previne a doença; não transmite TB enquanto está em ILTB",
    "Não pular doses; no 3HP, se esquecer, tomar assim que lembrar e manter o intervalo de 1 semana a partir daí",
    "Voltar imediatamente se: olhos ou pele amarelos, urina escura, vômitos, dor na barriga, febre com mal-estar ou tontura após a dose semanal, manchas na pele",
    "Procurar a UBS se surgir tosse, febre, suor à noite ou perda de peso",
    "Retorno mensal para pegar a medicação e avaliação"
  ],
  tabelas: [
    {
      titulo: "3HP por faixa de peso (MS)",
      colunas: ["Peso / idade", "Isoniazida semanal", "Rifapentina semanal"],
      linhas: [
        ["10–15 kg (2–14 anos)", "300 mg", "300 mg"],
        ["16–23 kg", "500 mg", "450 mg"],
        ["24–30 kg", "600 mg", "600 mg"],
        ["> 30 kg (até 14 anos)", "700 mg", "750 mg"],
        ["≥ 14 anos e ≥ 30 kg", "900 mg", "900 mg"]
      ],
      nota: "12 doses semanais. Não usar em < 2 anos, gestantes e contatos de caso resistente."
    },
    {
      titulo: "Quando a PT/IGRA indica tratamento (MS)",
      colunas: ["Situação", "Critério"],
      linhas: [
        ["Contatos (adultos e crianças)", "PT ≥ 5 mm ou IGRA reagente ou conversão"],
        ["PVHIV", "CD4 ≤ 350 ou contato de TB pulmonar: tratar sem PT; demais: PT ≥ 5 mm ou IGRA reagente; cicatriz radiológica sem tratamento prévio"],
        ["Imunossuprimidos, anti-TNF, pré-transplante, corticoide > 15 mg/dia de prednisona por > 1 mês, RX com sequela fibrótica de TB sem tratamento prévio", "PT ≥ 5 mm ou IGRA reagente"],
        ["Diabetes, silicose, diálise, neoplasias, tabagismo, baixo peso", "PT ≥ 10 mm ou IGRA reagente"],
        ["Profissionais de saúde e prisionais", "Conversão (aumento ≥ 10 mm)"]
      ],
      nota: "Excluir TB ativa em todos antes de tratar."
    }
  ],
  fontes: [
    "Ministério da Saúde — Protocolo de vigilância da infecção latente pelo Mycobacterium tuberculosis no Brasil, 2ª ed. (2022)",
    "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. (2019)",
    "Ministério da Saúde — Nota Técnica nº 399/2021 e Nota Informativa nº 5/2021 (rifapentina para ILTB); Nota Informativa nº 6/2024-CGTM/DATHI/SVSA (3RH em crianças < 10 anos, 2024)",
    "Secretaria Municipal da Saúde de São Paulo — Nota Informativa 05/2024: ILTB (atualizada 12/2024)",
    "OMS — WHO consolidated guidelines on tuberculosis, Module 1: Prevention — TB preventive treatment (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
