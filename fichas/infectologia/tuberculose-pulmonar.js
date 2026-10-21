// Tuberculose pulmonar
registrarFicha({
  id: "tuberculose-pulmonar",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Tuberculose pulmonar",
  resumo: "Tosse por 3 semanas ou mais (ou qualquer duração em populações vulneráveis), febre vespertina, sudorese noturna e emagrecimento. Diagnóstico por TRM-TB, baciloscopia e cultura; tratamento com esquema básico de 6 meses e tratamento diretamente observado.",
  palavrasChave: "tuberculose tb bk bacilifero trm-tb genexpert teste rapido molecular baciloscopia escarro rhze rifampicina isoniazida pirazinamida etambutol esquema basico sintomatico respiratorio tdo contatos",
  critico: {
    tempo: "Escarro + TRM-TB no 1º contato",
    texto: "Todo sintomático respiratório colhe escarro para TRM-TB (e cultura com teste de sensibilidade) no mesmo dia. Iniciar o esquema básico assim que confirmado, notificar e convocar os contatos."
  },
  alarmes: [
    "Hemoptise volumosa (sangue vivo em quantidade) ou instabilidade hemodinâmica",
    "Dispneia, SpO₂ < 95%, insuficiência respiratória",
    "Rebaixamento de consciência, cefaleia intensa, rigidez de nuca (TB meníngea)",
    "Icterícia, vômitos persistentes ou dor abdominal durante o tratamento (hepatotoxicidade)",
    "TRM-TB com resistência à rifampicina detectada",
    "PVHIV com CD4 baixo, desnutrição grave, criança pequena com doença extensa"
  ],
  condutaInicial: [
    "Busca ativa: tosse ≥ 3 semanas na população geral; tosse de qualquer duração em PVHIV, população em situação de rua, indígenas e contatos; nos privados de liberdade e em outros grupos de risco o tempo de tosse exigido é menor (conferir o quadro de populações especiais do Manual MS)",
    "Escarro (1 amostra) para TRM-TB + cultura com teste de sensibilidade; RX de tórax",
    "Testar HIV (teste rápido) em todo caso; glicemia, função hepática e renal",
    "Confirmado e sensível à rifampicina: esquema básico 2RHZE/4RH por faixa de peso, em tratamento diretamente observado (TDO)",
    "Notificar no SINAN e investigar todos os contatos (ver ficha de ILTB)"
  ],
  fataisExcluir: [
    "TB resistente à rifampicina (TRM-TB) — encaminhar à referência terciária",
    "TB meníngea ou miliar (sobretudo em criança e PVHIV)",
    "Coinfecção HIV com doença avançada",
    "Hemoptise maciça",
    "Câncer de pulmão (adulto tabagista com lesão atípica e TRM-TB negativo)"
  ],
  proximaDecisao: "TRM-TB detectado e rifampicina sensível → esquema básico na UBS. Resistência detectada → referência terciária antes de iniciar. TRM-TB não detectado com clínica e RX sugestivos → aguardar cultura, repetir escarro e discutir caso; em criança < 10 anos usar o escore de pontos do MS.",
  clinica: {
    anamnese: [
      "Tosse (tempo), expectoração, hemoptise, febre vespertina, sudorese noturna, perda de peso, inapetência",
      "Contato com caso de TB, tratamento prévio de TB (recidiva, abandono)",
      "HIV, diabetes, uso de imunossupressores, anti-TNF, doença renal, silicose",
      "Situação de rua, privação de liberdade, uso de álcool e drogas, tabagismo",
      "Medicações em uso (interações com rifampicina: anticoncepcional, varfarina, antirretrovirais, anticonvulsivantes)",
      "Criança: contato adulto com TB, BCG, ganho de peso, febre persistente, sibilância que não melhora"
    ],
    exameFisico: [
      "Peso (base da dose), IMC, estado nutricional",
      "FR, SpO₂, ausculta (pode ser normal)",
      "Linfonodos cervicais, hepatoesplenomegalia",
      "Sinais de HIV avançado (candidíase oral, emagrecimento)",
      "Exame neurológico se cefaleia ou alteração de comportamento"
    ],
    diferenciais: [
      { dx: "Pneumonia bacteriana", pista: "Quadro agudo, melhora com antibiótico comum" },
      { dx: "Câncer de pulmão", pista: "Tabagista, > 50 anos, nódulo/massa, TRM-TB negativo" },
      { dx: "Micoses pulmonares (paracoccidioidomicose, histoplasmose)", pista: "Trabalhador rural, lesões de mucosa; fungo no escarro" },
      { dx: "Micobactéria não tuberculosa", pista: "Baciloscopia positiva com TRM-TB negativo; bronquiectasias" },
      { dx: "Pneumocistose (PVHIV)", pista: "Dispneia progressiva, infiltrado intersticial, CD4 < 200" }
    ],
    gravidade: [
      "Forma grave em criança (define esquema de 6 meses): TB miliar, meníngea, osteoarticular, lesão cavitária ou extensa, derrame pleural complicado, TB abdominal",
      "Escore do MS para criança < 10 anos com baciloscopia negativa/TRM não detectado: ≥ 40 pontos = diagnóstico muito provável (tratar); 30–35 = possível (tratar a critério clínico); ≤ 25 = pouco provável",
      "Hemoptise volumosa, insuficiência respiratória, desnutrição grave → avaliação hospitalar"
    ]
  },
  exames: [
    {
      nome: "Teste rápido molecular para TB (TRM-TB)",
      pedido: "Escarro (1 amostra, de preferência matinal) para teste rápido molecular para tuberculose (TRM-TB) com detecção de resistência à rifampicina.",
      porQue: "Diagnóstico em cerca de 2 horas e triagem de resistência à rifampicina.",
      esperar: "MTB detectado / não detectado; resistência à rifampicina detectada / não detectada / indeterminada.",
      interpretacao: "Detectado e sensível → esquema básico. Resistência detectada → referência terciária e cultura com TS. Em retratamento, TRM-TB pode detectar bacilo morto: confirmar com cultura.",
      limitacoes: "Não serve para controle de tratamento. Sensibilidade menor em criança e em PVHIV (paucibacilar)."
    },
    {
      nome: "Cultura com teste de sensibilidade",
      pedido: "Cultura para micobactérias com identificação e teste de sensibilidade (escarro).",
      porQue: "Confirma o diagnóstico e detecta resistência a outros fármacos. Indicada a todos os casos com TRM-TB detectado e aos casos com TRM-TB negativo e suspeita clínica.",
      esperar: "Resultado em semanas (meio líquido mais rápido que sólido).",
      interpretacao: "Positiva com resistência → rever esquema com a referência.",
      limitacoes: "Demorada; depende de transporte adequado."
    },
    {
      nome: "Baciloscopia de escarro",
      pedido: "Baciloscopia de escarro (BAAR) — 2 amostras no diagnóstico onde não há TRM-TB; 1 amostra mensal para controle de tratamento.",
      porQue: "Diagnóstico onde não há TRM-TB e acompanhamento mensal do tratamento.",
      esperar: "Negativação até o fim do 2º mês na maioria.",
      interpretacao: "Positiva no fim do 2º mês → pedir cultura com TS e avaliar adesão. Positiva no 4º mês ou depois → suspeita de falência.",
      limitacoes: "Baixa sensibilidade em criança e PVHIV."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA e perfil.",
      porQue: "Avaliar extensão, cavitação, derrame; apoio diagnóstico em casos com bacteriologia negativa e em criança.",
      esperar: "Infiltrado e cavitação em ápices/segmentos posteriores; adenomegalia hilar em criança.",
      interpretacao: "Imagem não confirma TB isoladamente; usar com clínica e bacteriologia.",
      limitacoes: "PVHIV com CD4 baixo pode ter RX normal ou atípico."
    },
    {
      nome: "Exames de base",
      pedido: "Teste rápido para HIV, sífilis, hepatites B e C. Glicemia de jejum ou HbA1c. TGO, TGP, bilirrubinas, creatinina, hemograma. Beta-hCG se mulher em idade fértil.",
      porQue: "Comorbidades que mudam a conduta e base para monitorar hepatotoxicidade.",
      esperar: "—",
      interpretacao: "PVHIV: iniciar TARV em até 2 semanas do início do tratamento da TB (em TB meníngea, após 4–8 semanas — seguir PCDT HIV).",
      limitacoes: "—"
    },
    {
      nome: "LF-LAM (PVHIV)",
      pedido: "Pesquisa de lipoarabinomanano em urina (LF-LAM) — PVHIV com sinais de TB, CD4 ≤ 200 ou doença grave.",
      porQue: "Teste rápido à beira do leito que aumenta o diagnóstico em PVHIV com imunossupressão grave.",
      esperar: "Reagente / não reagente.",
      interpretacao: "Reagente em PVHIV → iniciar tratamento de TB (colher também TRM-TB e cultura).",
      limitacoes: "Uso restrito a PVHIV; baixa sensibilidade com CD4 alto."
    }
  ],
  tratamento: [
    {
      droga: "RHZE (rifampicina 150 mg + isoniazida 75 mg + pirazinamida 400 mg + etambutol 275 mg) — fase intensiva",
      linha: "l1",
      dose: "20–35 kg: 2 comp · 36–50 kg: 3 comp · 51–70 kg: 4 comp · > 70 kg: 5 comp",
      via: "VO, em jejum (1 h antes ou 2 h depois do café)",
      intervalo: "1 vez ao dia",
      duracao: "2 meses",
      monitorizacao: "Peso mensal (ajustar dose), baciloscopia mensal, sintomas de hepatite, acuidade visual (etambutol)",
      contraindicacoes: "Hipersensibilidade. Hepatopatia grave exige esquema especial (referência)",
      ajustes: "Adultos e crianças ≥ 10 anos. Gestante: usar o esquema básico + piridoxina 50 mg/dia. TFG < 30 mL/min: ajustar pirazinamida e etambutol (3 vezes por semana) — discutir com a referência. Rifampicina reduz efeito de anticoncepcional hormonal (usar método de barreira ou DIU), varfarina, anticonvulsivantes e vários antirretrovirais"
    },
    {
      droga: "RH (rifampicina + isoniazida) — fase de manutenção",
      linha: "l1",
      dose: "20–35 kg: 1 comp 300/150 mg · 36–50 kg: 1 comp 300/150 mg + 1 comp 150/75 mg · 51–70 kg: 2 comp 300/150 mg · > 70 kg: 2 comp 300/150 mg + 1 comp 150/75 mg",
      via: "VO, em jejum",
      intervalo: "1 vez ao dia",
      duracao: "4 meses (10 meses na TB meníngea e osteoarticular)",
      monitorizacao: "Baciloscopia mensal; adesão; peso",
      contraindicacoes: "—",
      ajustes: "Adolescente de 10 a 16 anos com TB pulmonar não grave e sensível: pode receber o esquema encurtado de 4 meses (2RHZE/2RH, nota informativa MS 2024), com reavaliação no 4º mês. Prolongar a manutenção só com indicação da referência (ex.: cavitação extensa com cultura positiva no 2º mês, conforme avaliação)"
    },
    {
      droga: "Criança < 10 anos — RHZ dispersível 75/50/150 mg (2 meses) + RH dispersível 75/50 mg",
      linha: "l1",
      dose: "4–7 kg: 1 comp · 8–11 kg: 2 comp · 12–15 kg: 3 comp · 16–24 kg: 4 comp (mesmo número de comprimidos nas duas fases). ≥ 25 kg: não usar o dispersível (sem estudos nessa faixa); usar as doses do MS para ≥ 25 kg, com apoio da referência",
      via: "VO — dissolver o comprimido em água (cerca de 10–50 mL) e dar logo",
      intervalo: "1 vez ao dia",
      duracao: "TB pulmonar não grave e sensível, 3 meses a 16 anos: 2 meses RHZ + 2 meses RH (4 meses, nota informativa MS 2024). Forma grave, < 3 meses ou < 4 kg: 2 meses + 4 meses (6 meses)",
      monitorizacao: "Peso mensal e reajuste da dose; adesão; sintomas",
      contraindicacoes: "—",
      ajustes: "Etambutol não é usado de rotina em < 10 anos. Crianças < 3 meses, < 4 kg ou PVHIV: conduzir com referência"
    },
    {
      droga: "Piridoxina (vitamina B6)",
      linha: "adj",
      dose: "50 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Durante o uso de isoniazida",
      monitorizacao: "Parestesias",
      contraindicacoes: "—",
      ajustes: "Indicada em gestantes, PVHIV, diabéticos, etilistas, desnutridos, neuropatia prévia"
    }
  ],
  destino: {
    agora: [
      "Iniciar o esquema básico no dia do diagnóstico, com TDO (pelo menos 3 vezes por semana, idealmente diário, na UBS ou no domicílio)",
      "Notificar (SINAN) e registrar no livro de acompanhamento",
      "Convocar os contatos para avaliação"
    ],
    reavaliar: [
      "Consulta mensal: peso, adesão, efeitos adversos, baciloscopia",
      "Hepatotoxicidade: suspender se TGO/TGP > 5× o limite superior sem sintomas, > 3× com sintomas, ou icterícia — e discutir reintrodução com a referência",
      "Baciloscopia positiva no 2º mês: cultura com TS"
    ],
    alta: [
      "Cura: paciente com baciloscopia positiva no início que completa o tratamento com pelo menos 2 baciloscopias negativas (uma delas no fim)",
      "Tratamento completo: completou o esquema sem bacteriologia de fim de tratamento",
      "Orientar retorno se sintomas voltarem"
    ],
    observacao: ["—"],
    internacao: [
      "TB meníngea, miliar ou com insuficiência respiratória",
      "Hemoptise volumosa",
      "Intolerância grave aos fármacos ou hepatotoxicidade",
      "Vulnerabilidade social que impede o tratamento (internação por indicação social)"
    ],
    transferencia: [
      "Referência secundária: comorbidades graves, efeitos adversos maiores, PVHIV com dificuldade de manejo, falência",
      "Referência terciária: TB drogarresistente (TRM-TB com resistência à rifampicina ou TS alterado)"
    ]
  },
  prescricao: {
    ambulatorial: "TUBERCULOSE PULMONAR — ESQUEMA BÁSICO ADULTO (exemplo 55 kg; ajustar pela faixa de peso)\nUSO ORAL — dispensação pela UBS (Programa de TB)\n1. Rifampicina 150 mg + isoniazida 75 mg + pirazinamida 400 mg + etambutol 275 mg (RHZE) ---- 240 comprimidos\n   Tomar 4 comprimidos juntos, 1 vez ao dia, em jejum, por 2 meses (tratamento observado).\n2. Depois: rifampicina 300 mg + isoniazida 150 mg (RH) ---- 240 comprimidos\n   Tomar 2 comprimidos juntos, 1 vez ao dia, em jejum, por 4 meses.\n3. Piridoxina 50 mg (se gestante, PVHIV, diabético, etilista ou desnutrido) ---- 1 comprimido ao dia durante todo o tratamento.\n\nFaixas de peso — RHZE: 20–35 kg 2 comp · 36–50 kg 3 comp · 51–70 kg 4 comp · > 70 kg 5 comp.\nRH: 20–35 kg 1 comp 300/150 · 36–50 kg 1 comp 300/150 + 1 comp 150/75 · 51–70 kg 2 comp 300/150 · > 70 kg 2 comp 300/150 + 1 comp 150/75.\n\nCRIANÇA < 10 ANOS (exemplo 14 kg)\n1. Rifampicina 75 mg + isoniazida 50 mg + pirazinamida 150 mg (RHZ dispersível) ---- 3 comprimidos 1 vez ao dia por 2 meses. Dissolver em um pouco de água e dar logo.\n2. Depois: rifampicina 75 mg + isoniazida 50 mg (RH dispersível) ---- 3 comprimidos 1 vez ao dia por 2 meses (TB não grave) ou 4 meses (forma grave).\nFaixas: 4–7 kg 1 comp · 8–11 kg 2 comp · 12–15 kg 3 comp · 16–24 kg 4 comp.\n\nORIENTAÇÕES\n- A urina, o suor e a lágrima ficam alaranjados (efeito normal da rifampicina).\n- Anticoncepcional em pílula ou injeção perde efeito: usar camisinha ou DIU."
  },
  orientacoesRetorno: [
    "Tomar todos os dias, em jejum, até o fim (6 meses); melhorar não é estar curado",
    "Após cerca de 15 dias de tratamento, o risco de transmissão cai muito; até lá, manter ambiente ventilado e cobrir a boca ao tossir",
    "Trazer todas as pessoas que moram junto ou convivem para avaliação na UBS",
    "Voltar imediatamente se: pele ou olhos amarelos, vômitos que não param, dor na barriga forte, manchas na pele com coceira intensa, visão embaçada ou alteração de cores, falta de ar ou escarro com muito sangue",
    "Consulta mensal com coleta de escarro para controle"
  ],
  tabelas: [
    {
      titulo: "Esquema básico — adultos e ≥ 10 anos (MS)",
      colunas: ["Peso", "RHZE 150/75/400/275 mg (2 meses)", "RH (4 meses)"],
      linhas: [
        ["20–35 kg", "2 comp", "1 comp 300/150 mg"],
        ["36–50 kg", "3 comp", "1 comp 300/150 mg + 1 comp 150/75 mg"],
        ["51–70 kg", "4 comp", "2 comp 300/150 mg"],
        ["> 70 kg", "5 comp", "2 comp 300/150 mg + 1 comp 150/75 mg"]
      ],
      nota: "TB meníngea e osteoarticular: manutenção por 10 meses."
    },
    {
      titulo: "Criança < 10 anos — comprimidos dispersíveis (MS)",
      colunas: ["Peso", "RHZ 75/50/150 mg (2 meses)", "RH 75/50 mg"],
      linhas: [
        ["4–7 kg", "1 comp", "1 comp"],
        ["8–11 kg", "2 comp", "2 comp"],
        ["12–15 kg", "3 comp", "3 comp"],
        ["16–24 kg", "4 comp", "4 comp"]
      ],
      nota: "RH por 2 meses na TB pulmonar não grave (3 meses a 16 anos) ou 4 meses nas formas graves. ≥ 25 kg: tabela específica do MS."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2019) e errata (2021)",
    "Ministério da Saúde — Nota Informativa nº 5/2024-CGTM/DATHI/SVSA: tratamento encurtado (4 meses) da TB não grave em crianças e adolescentes (2024)",
    "Secretaria Municipal da Saúde de São Paulo — Nota Informativa 10/2026: tratamento e acompanhamento da TB em adultos e adolescentes (2026)",
    "OMS — WHO consolidated guidelines on tuberculosis, Module 4: Treatment (2025)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
