// Rastreamento de câncer na atenção primária
registrarFicha({
  id: "rastreio-cancer",
  especialidade: "prevencao",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Rastreamento de câncer: colo do útero, mama, colorretal, pulmão e próstata",
  resumo: "Quem rastrear, com qual exame e a cada quanto tempo, segundo o Ministério da Saúde/INCA: colo do útero com DNA-HPV, mama com mamografia, colorretal com teste imunoquímico fecal (FIT); pulmão e próstata por decisão compartilhada. Rastreamento é para pessoas sem sintomas.",
  palavrasChave: "rastreamento rastreio cancer prevencao colo do utero dna hpv teste molecular papanicolau citologia oncotica preventivo colposcopia mama mamografia birads colorretal intestino sangue oculto fit teste imunoquimico fecal colonoscopia pulmao tomografia baixa dose tabagismo prostata psa toque retal decisao compartilhada inca",
  critico: {
    tempo: "Sintoma não é rastreamento",
    texto: "Nódulo de mama, sangramento genital anormal, sangue nas fezes, alteração do hábito intestinal, hemoptise ou sintomas urinários exigem investigação diagnóstica imediata, não exame de rastreio."
  },
  alarmes: [
    "Nódulo mamário palpável, descarga papilar sanguinolenta unilateral, retração de pele ou mamilo",
    "Sangramento pós-coito ou pós-menopausa, lesão visível no colo",
    "Sangue nas fezes, anemia ferropriva sem causa em homem ou mulher na pós-menopausa, perda de peso, alteração recente do hábito intestinal",
    "Hemoptise, tosse persistente em tabagista, perda de peso",
    "Dor óssea, retenção urinária, hematúria em homem idoso",
    "Resultado de rastreio alterado sem encaminhamento (perda de seguimento)"
  ],
  condutaInicial: [
    "Confirmar que a pessoa está assintomática; com sintoma, seguir investigação diagnóstica",
    "Checar faixa etária, fatores de risco e exames anteriores (data e resultado)",
    "Colo do útero (25–64 anos, com vida sexual): DNA-HPV oncogênico a cada 5 anos se negativo; onde ainda não implantado, citologia (2 anuais e depois trienal)",
    "Mama: 50–74 anos mamografia bienal; 40–49 anos por decisão compartilhada, sob demanda (MS 2025)",
    "Colorretal: 50–75 anos FIT bienal (protocolo nacional 2026); positivo → colonoscopia",
    "Pulmão: sem programa nacional; 50–80 anos com ≥ 20 maços-ano, fumante ou ex há < 15 anos — discutir TC de baixa dose anual (SBPT/CBR) e oferecer cessação do tabagismo",
    "Próstata: MS/INCA não recomenda rastreamento populacional; se o homem pedir, decisão compartilhada com informação sobre benefícios e danos",
    "Registrar no prontuário a decisão, a data do próximo exame e a busca ativa de resultados alterados"
  ],
  fataisExcluir: [
    "Câncer sintomático tratado como rastreio (atraso diagnóstico)",
    "Resultado alterado sem seguimento",
    "Alto risco hereditário (BRCA, síndrome de Lynch, polipose) rastreado como risco habitual"
  ],
  proximaDecisao: "Exame positivo → encaminhar com prioridade (colposcopia, mastologia/mamografia diagnóstica, colonoscopia, pneumologia) e fazer busca ativa até o resultado final. Alto risco familiar → rastreio antecipado e encaminhamento a especialista/genética.",
  clinica: {
    anamnese: [
      "Sintomas atuais (excluem rastreio): sangramentos, nódulos, mudança de hábito intestinal, tosse, perda de peso",
      "Data e resultado dos últimos exames de rastreio",
      "História familiar: câncer de mama ou ovário (sobretudo < 50 anos, homem com câncer de mama), colorretal em parente de 1º grau, próstata em pai/irmão < 65 anos",
      "Tabagismo: maços-ano (cigarros por dia ÷ 20 × anos de fumo) e data de cessação",
      "Imunossupressão, HIV (rastreio de colo diferente), radioterapia de tórax antes dos 30 anos",
      "Expectativa de vida e comorbidades (rastreio não beneficia quem tem expectativa < 10 anos)"
    ],
    exameFisico: [
      "Exame clínico das mamas quando houver queixa (o MS não recomenda o exame clínico como rastreio isolado)",
      "Exame especular na coleta do DNA-HPV ou da citologia",
      "IMC, sinais de anemia",
      "Toque retal só para investigação de sintomas, não como rastreio isolado"
    ],
    diferenciais: [
      { dx: "Risco habitual", pista: "Sem história familiar relevante: seguir calendário do MS" },
      { dx: "Alto risco de câncer de mama", pista: "Mutação BRCA, parente de 1º grau com câncer de mama < 50 anos ou bilateral, irradiação torácica: rastreio antecipado com especialista" },
      { dx: "Alto risco colorretal", pista: "Parente de 1º grau com câncer colorretal, doença inflamatória intestinal, síndrome de Lynch ou polipose: colonoscopia com intervalos próprios" },
      { dx: "Alto risco de próstata", pista: "Homem negro ou pai/irmão com câncer de próstata: discussão mais precoce (sociedades de urologia sugerem a partir de 45 anos)" }
    ],
    gravidade: [
      "Colo — HPV 16/18 positivo: colposcopia em todas · HPV outros oncogênicos positivo com citologia reflexa ASC-US ou pior: colposcopia · com citologia normal: repetir DNA-HPV em 1 ano",
      "Mama — BI-RADS 0: complementar · 1–2: rotina · 3: controle em 6 meses · 4–5: biópsia (encaminhar com prioridade)",
      "Colorretal — FIT positivo: colonoscopia (não repetir o FIT)",
      "Pulmão — Lung-RADS 3–4: seguimento ou investigação com pneumologia"
    ]
  },
  exames: [
    {
      nome: "DNA-HPV oncogênico (colo do útero)",
      pedido: "Teste molecular para detecção de DNA-HPV oncogênico com genotipagem parcial (16/18) — rastreamento, mulher de ___ anos, assintomática. Citologia em meio líquido reflexa se HPV não 16/18 positivo.",
      porQue: "Mais sensível que a citologia; permite intervalo de 5 anos.",
      esperar: "Negativo.",
      interpretacao: "Negativo: repetir em 5 anos (imunossuprimida/HIV: 3 anos). HPV 16/18: colposcopia. Outros HPV: citologia reflexa — alterada: colposcopia; normal: repetir DNA-HPV em 1 ano. Encerrar aos 64 anos (ou após os 60) com último teste negativo.",
      limitacoes: "Implantação gradual no SUS desde 2024. Coteste (DNA-HPV + citologia juntos) não é recomendado. Onde não disponível: citologia 25–64 anos, 2 anuais negativas e depois a cada 3 anos."
    },
    {
      nome: "Mamografia de rastreamento",
      pedido: "Mamografia bilateral de rastreamento — mulher de ___ anos, assintomática, risco habitual. Última mamografia: ___.",
      porQue: "Reduz mortalidade por câncer de mama na faixa de 50–69/74 anos.",
      esperar: "BI-RADS 1 ou 2.",
      interpretacao: "BI-RADS 0: ultrassom/incidências adicionais. 3: controle em 6 meses. 4 ou 5: encaminhar para biópsia com prioridade.",
      limitacoes: "40–49 anos: mais falso-positivos e menor benefício absoluto; decidir junto com a mulher. > 74 anos: individualizar pela expectativa de vida."
    },
    {
      nome: "Teste imunoquímico fecal (FIT)",
      pedido: "Pesquisa de sangue oculto nas fezes por método imunoquímico (FIT) — rastreamento de câncer colorretal, ___ anos, assintomático.",
      porQue: "Teste de referência do protocolo nacional 2026; não exige dieta nem preparo.",
      esperar: "Negativo.",
      interpretacao: "Negativo: repetir em 2 anos. Positivo: colonoscopia.",
      limitacoes: "Não serve para investigar sintomas. Método com guaiaco é menos sensível e exige dieta. Colonoscopia direta é opção nos serviços que a oferecem para rastreio (intervalo de 10 anos se normal)."
    },
    {
      nome: "TC de tórax de baixa dose (pulmão)",
      pedido: "Tomografia computadorizada de tórax de baixa dose sem contraste — rastreamento de câncer de pulmão. Tabagismo: ___ maços-ano; fumante atual / cessou em ___.",
      porQue: "Reduz mortalidade em alto risco (NLST, NELSON).",
      esperar: "Lung-RADS 1–2.",
      interpretacao: "Lung-RADS 1–2: repetir em 1 ano. 3–4: seguimento ou investigação com pneumologia.",
      limitacoes: "Sem programa no SUS (INCA estuda viabilidade, 2026); disponibilidade limitada. Falso-positivos frequentes e achados incidentais."
    },
    {
      nome: "PSA total (só após decisão compartilhada)",
      pedido: "PSA total — homem de ___ anos, assintomático, após decisão compartilhada sobre benefícios e danos do rastreamento.",
      porQue: "Pode detectar câncer de próstata precoce, com pequeno benefício em mortalidade e risco de sobrediagnóstico.",
      esperar: "Valor de referência varia com a idade.",
      interpretacao: "PSA elevado: repetir antes de encaminhar (prostatite, ejaculação, ciclismo elevam); persistente → urologia.",
      limitacoes: "MS/INCA (2023) não recomenda rastreamento populacional. Biópsias, incontinência e disfunção erétil são danos possíveis."
    }
  ],
  tratamento: [
    {
      droga: "Vacina HPV (prevenção primária)",
      linha: "l1",
      dose: "Conforme calendário (rotina 9–14 anos; grupos especiais até 45 anos)",
      via: "IM",
      intervalo: "Conforme esquema",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Gestação (adiar)",
      ajustes: "Vacinada também deve fazer rastreio do colo; o DNA-HPV independe do status vacinal"
    },
    {
      droga: "Cessação do tabagismo (abordagem + TRN e/ou bupropiona — Programa Nacional de Controle do Tabagismo)",
      linha: "l1",
      dose: "Adesivo de nicotina 21 mg/dia se > 20 cigarros/dia (14 mg se 10–20), com redução gradual; bupropiona 150 mg 1×/dia por 3 dias e depois 150 mg 12/12 h",
      via: "Transdérmica / VO",
      intervalo: "Diário",
      duracao: "8–12 semanas",
      monitorizacao: "Abstinência, efeitos adversos, PA",
      contraindicacoes: "Bupropiona: epilepsia, transtorno alimentar, uso de IMAO",
      ajustes: "Intervenção com maior impacto na mortalidade por câncer de pulmão"
    },
    {
      droga: "Citologia anual após 2 negativas, coteste, rastreio < 25 anos ou > 64 anos com exames normais",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Aumenta danos (procedimentos desnecessários) sem benefício",
      ajustes: "—"
    },
    {
      droga: "PSA ou toque retal de rotina sem decisão compartilhada; ultrassom de mama ou exame clínico como rastreio isolado; marcadores tumorais (CEA, CA-125) para rastreio",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem evidência de benefício; sobrediagnóstico",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Sintomático: investigação diagnóstica e encaminhamento prioritário (não é rastreio)"],
    reavaliar: ["Busca ativa de resultados alterados até o desfecho", "Atualizar data do próximo exame a cada consulta"],
    alta: ["Resultado normal: orientar data do próximo exame (DNA-HPV 5 anos; mamografia 2 anos; FIT 2 anos; TC baixa dose 1 ano)"],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: ["Colposcopia: HPV 16/18 ou citologia alterada", "Mastologia/biópsia: BI-RADS 4–5", "Colonoscopia: FIT positivo", "Pneumologia: Lung-RADS 3–4", "Urologia: PSA persistentemente elevado", "Genética/oncologia: suspeita de síndrome hereditária"]
  },
  prescricao: {
    ambulatorial: "SOLICITAÇÕES DE RASTREAMENTO (paciente assintomático, risco habitual)\n\n1. Teste de DNA-HPV oncogênico com genotipagem 16/18 e citologia reflexa em meio líquido.\n   Indicação: rastreamento do câncer do colo do útero. Idade: ___. Último exame: ___ (resultado: ___).\n   [Onde o DNA-HPV não estiver implantado: Exame citopatológico do colo do útero — rastreamento.]\n\n2. Mamografia bilateral de rastreamento.\n   Indicação: rastreamento do câncer de mama, ___ anos, risco habitual. Última mamografia: ___.\n   (40–49 anos: solicitada após decisão compartilhada com a paciente.)\n\n3. Pesquisa de sangue oculto nas fezes — método imunoquímico (FIT), amostra única.\n   Indicação: rastreamento do câncer colorretal, ___ anos, assintomático.\n\n4. Tomografia computadorizada de tórax de baixa dose, sem contraste.\n   Indicação: rastreamento de câncer de pulmão; ___ anos; carga tabágica ___ maços-ano; fumante atual / cessou há ___ anos. Decisão compartilhada registrada.\n\n5. PSA total.\n   Indicação: homem de ___ anos, assintomático, solicitado após decisão compartilhada sobre benefícios e danos.\n\nCESSAÇÃO DO TABAGISMO (se fumante)\nUSO TRANSDÉRMICO\n1. Adesivo de nicotina 21 mg -------------------------- 28 adesivos\n   Aplicar 1 adesivo por dia, trocando o local, por 4 semanas; depois adesivo de 14 mg por 4 semanas e de 7 mg por 4 semanas (prescrever os adesivos de 14 e 7 mg no retorno).\nUSO ORAL\n2. Bupropiona 150 mg ---------------------------------- 60 comprimidos\n   Tomar 1 comprimido pela manhã por 3 dias; depois 1 comprimido de 12 em 12 horas (último até 16 h). Parar de fumar entre o 8º e o 14º dia. Duração: 12 semanas."
  },
  orientacoesRetorno: [
    "Rastreamento é para quem não tem sintomas; se aparecer sintoma, procure a UBS sem esperar a data do exame",
    "Procurar logo a UBS se: caroço na mama ou axila, sangramento vaginal fora da menstruação ou após a menopausa, sangue nas fezes, mudança no funcionamento do intestino, perda de peso sem motivo, tosse com sangue",
    "Trazer o resultado assim que sair; resultado alterado precisa de consulta mesmo sem sintomas",
    "Retornar na data do próximo exame: DNA-HPV a cada 5 anos (se negativo), mamografia a cada 2 anos, teste de sangue oculto a cada 2 anos",
    "Parar de fumar é a medida que mais reduz o risco de câncer; a UBS oferece tratamento gratuito"
  ],
  fontes: [
    "INCA/Ministério da Saúde — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 3ª ed. rev., vol. 1: rastreamento organizado com DNA-HPV (Portaria Conjunta SAES/SECTICS nº 13/2025)",
    "INCA — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed. (2016): citologia, onde o DNA-HPV não está implantado",
    "Ministério da Saúde — Nota Técnica nº 626/2025-CGCAN/DECAN/SAES/MS: rastreamento do câncer de mama (40–49 anos sob demanda; 50–74 anos bienal)",
    "Ministério da Saúde/INCA — Protocolo nacional de rastreamento do câncer colorretal com FIT, 50–75 anos, bienal (2026)",
    "Ministério da Saúde/INCA — Nota técnica: não recomendação do rastreamento populacional do câncer de próstata (2023)",
    "SBPT/CBR — Recomendação brasileira para rastreamento do câncer de pulmão; USPSTF Lung Cancer Screening (2021)",
    "Ministério da Saúde — PCDT do Tabagismo (2020)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
