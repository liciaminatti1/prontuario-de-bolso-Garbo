// Asma: controle e tratamento de manutenção
registrarFicha({
  id: "asma-manutencao",
  especialidade: "pneumologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Asma: controle e tratamento de manutenção (GINA, MART)",
  resumo: "Acompanhamento do adulto e do adolescente (≥ 12 anos) com asma fora da crise: confirmar o diagnóstico, avaliar controle e risco, escolher a etapa de tratamento e ajustar a cada 1–3 meses. Para a crise, ver fichas asma-ubs e asma-ps.",
  palavrasChave: "asma manutencao controle gina mart air budesonida formoterol beclometasona salbutamol espirometria act corticoide inalatorio etapas step",
  critico: {
    tempo: "Nunca tratar só com SABA",
    texto: "Todo adulto com asma deve usar corticoide inalatório. Preferir budesonida + formoterol como resgate (AIR) ou manutenção e resgate (MART). SABA isolado aumenta o risco de crise grave e morte."
  },
  alarmes: [
    "Crise grave no último ano, internação ou intubação prévia por asma",
    "Uso de mais de 1 frasco de salbutamol por mês ou de resgate quase diário",
    "Uso de mais de 12 inalações de budesonida + formoterol em um dia",
    "Necessidade de corticoide oral 2 ou mais vezes no ano",
    "VEF1 < 60% do previsto, sintomas noturnos frequentes, baixa percepção da dispneia",
    "Asma na gestação sem controle, tabagismo ativo, problema psicossocial ou baixa adesão"
  ],
  condutaInicial: [
    "Confirmar o diagnóstico: história típica + obstrução variável (espirometria com resposta ao broncodilatador ou variação do PFE), de preferência antes de iniciar corticoide",
    "Avaliar controle das últimas 4 semanas (4 perguntas GINA) e fatores de risco para crise",
    "Escolher a etapa: preferir a trilha 1 (budesonida + formoterol como resgate, com ou sem manutenção)",
    "Ensinar a técnica inalatória na consulta (pedir para o paciente demonstrar) e entregar plano de ação escrito",
    "Tratar fatores modificáveis: tabagismo, rinite, obesidade, DRGE sintomática, exposição ocupacional, AAS/AINE em quem piora",
    "Reavaliar em 1–3 meses; após 3 meses de bom controle, considerar reduzir a etapa"
  ],
  fataisExcluir: [
    "Crise atual (tratar antes: ver fichas asma-ubs e asma-ps)",
    "DPOC ou sobreposição asma-DPOC (tabagista > 40 anos com obstrução fixa)",
    "Insuficiência cardíaca (\"asma cardíaca\")",
    "Obstrução de via aérea central (tumor, corpo estranho, estenose traqueal): estridor, sibilo localizado",
    "Tuberculose ou neoplasia em tosse persistente com perda de peso ou hemoptise"
  ],
  proximaDecisao: "Controlada há 3 meses e sem fatores de risco → reduzir a etapa (nunca retirar o corticoide inalatório). Não controlada → antes de subir a etapa, conferir técnica, adesão, diagnóstico e comorbidades. Etapa 4 sem controle ou ≥ 2 crises com corticoide oral no ano → encaminhar ao pneumologista (avaliar asma grave e imunobiológico).",
  clinica: {
    anamnese: [
      "Sintomas variáveis: chiado, falta de ar, aperto no peito, tosse, piores à noite ou ao acordar",
      "Gatilhos: infecção viral, exercício, alérgenos, fumaça, frio, riso, AAS/AINE, betabloqueador",
      "Controle nas últimas 4 semanas: sintomas diurnos > 2×/semana? Despertar noturno? Resgate > 2×/semana? Limitação de atividade?",
      "Crises no último ano, uso de corticoide oral, idas ao PS, internação, intubação",
      "Medicações em uso, dispositivo, quem ensinou a técnica, adesão real (quantos frascos retira)",
      "Rinite, DRGE, obesidade, apneia do sono, ansiedade/depressão, tabagismo (inclusive cigarro eletrônico), exposição ocupacional",
      "Gestação ou desejo de engravidar"
    ],
    exameFisico: [
      "Muitas vezes normal fora da crise",
      "Sibilos expiratórios difusos; sibilo localizado ou estridor sugere outra causa",
      "Sinais de rinite (mucosa pálida, edema de cornetos) e pólipos nasais",
      "IMC, sinais de IC (edema, B3, turgência jugular)",
      "Observar o paciente usar o inalador"
    ],
    diferenciais: [
      { dx: "DPOC", pista: "Tabagista ou exposto a lenha, > 40 anos, obstrução que não normaliza com broncodilatador" },
      { dx: "Disfunção de cordas vocais / obstrução laríngea induzível", pista: "Estridor inspiratório, sensação na garganta, espirometria normal" },
      { dx: "Insuficiência cardíaca", pista: "Ortopneia, edema, BNP elevado, cardiomegalia" },
      { dx: "Bronquiectasia", pista: "Expectoração purulenta diária, infecções de repetição" },
      { dx: "Tosse por IECA ou DRGE", pista: "Tosse seca isolada, sem obstrução variável" },
      { dx: "Síndrome de hiperventilação / ansiedade", pista: "Parestesias, tontura, suspiros, sem obstrução" }
    ],
    gravidade: [
      "Controle (GINA, últimas 4 semanas — sintomas diurnos > 2×/semana, despertar noturno, resgate > 2×/semana, limitação de atividade): 0 itens = controlada; 1–2 = parcialmente controlada; 3–4 = não controlada",
      "Asma de difícil controle: não controlada apesar de dose média/alta de CI + LABA, ou que precisa dessa dose para manter controle",
      "Asma grave: não controlada apesar de adesão, boa técnica e tratamento otimizado de comorbidades em dose alta de CI + LABA",
      "Risco futuro de crise: crise no último ano, VEF1 baixo, uso excessivo de SABA, CI não usado, tabagismo, eosinofilia, obesidade, gestação"
    ]
  },
  exames: [
    {
      nome: "Espirometria com prova broncodilatadora",
      pedido: "Espirometria com prova broncodilatadora. Indicação: confirmação diagnóstica de asma / acompanhamento.",
      porQue: "Confirma obstrução variável e serve de base para o acompanhamento. Exigida pelo SUS para dispensação de alguns inalatórios pelo Componente Especializado.",
      esperar: "VEF1/CVF reduzida; aumento do VEF1 após broncodilatador.",
      interpretacao: "Resposta significativa: aumento do VEF1 ≥ 12% e ≥ 200 mL (ou > 10% do previsto, pelos critérios ERS/ATS 2022). Exame normal fora da crise não exclui asma.",
      limitacoes: "Suspender SABA 4–6 h e LABA 24–48 h antes, se seguro. Repetir em sintomas ou após suspender tratamento se o resultado inicial for normal."
    },
    {
      nome: "Pico de fluxo expiratório (PFE) seriado",
      pedido: "Registro domiciliar de PFE 2×/dia por 2 semanas (melhor de 3 sopros, manhã e noite).",
      porQue: "Alternativa quando não há espirometria; documenta variabilidade.",
      esperar: "Variabilidade diurna média > 10% sugere asma.",
      interpretacao: "Variabilidade = (maior − menor) / média do dia. Melhora > 20% após tratamento também apoia o diagnóstico.",
      limitacoes: "Depende do esforço e da técnica; usar sempre o mesmo aparelho."
    },
    {
      nome: "Hemograma (eosinófilos)",
      pedido: "Hemograma completo com contagem de eosinófilos.",
      porQue: "Fenotipagem em asma não controlada; candidatos a imunobiológico.",
      esperar: "Eosinófilos ≥ 150–300 céls/µL sugerem inflamação tipo 2.",
      interpretacao: "Útil para o especialista; não muda a conduta inicial na UBS.",
      limitacoes: "Corticoide oral reduz eosinófilos; colher sem corticoide sistêmico recente se possível."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax PA e perfil. Indicação: investigar diagnóstico alternativo.",
      porQue: "Só se apresentação atípica, sinais focais, suspeita de outra doença ou asma de início tardio.",
      esperar: "Normal ou hiperinsuflação.",
      interpretacao: "Alterações focais, cardiomegalia ou massa → investigar diferencial.",
      limitacoes: "Não é necessária de rotina na asma típica."
    }
  ],
  tratamento: [
    {
      droga: "Budesonida + formoterol 6/200 mcg só como resgate (AIR) — etapas 1 e 2, trilha 1",
      linha: "l1",
      dose: "1 inalação quando houver sintoma (pode repetir após alguns minutos)",
      via: "Inalatória (cápsula inalante ou aerossol/pó)",
      intervalo: "Conforme sintomas",
      duracao: "Contínuo",
      monitorizacao: "Número de inalações por semana; controle; crises",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Máximo de 12 inalações em um dia (GINA, adultos e adolescentes). Pode ser usada antes do exercício. O PCDT do SUS limita a dose diária por apresentação; conferir a tabela da Portaria vigente"
    },
    {
      droga: "Budesonida + formoterol 6/200 mcg em manutenção e resgate (MART) — etapas 3 e 4, trilha 1",
      linha: "l1",
      dose: "Etapa 3: 1 inalação de 12/12 h. Etapa 4: 2 inalações de 12/12 h. Mais 1 inalação extra sempre que houver sintoma",
      via: "Inalatória",
      intervalo: "12/12 h + resgate",
      duracao: "Contínuo; reavaliar a cada 1–3 meses",
      monitorizacao: "Controle de sintomas, uso de resgate, técnica, crises",
      contraindicacoes: "Não usar MART com outro LABA ou com outra combinação CI + LABA",
      ajustes: "Total máximo (manutenção + resgate) de 12 inalações por dia; acima disso, procurar atendimento no mesmo dia. Gestação: manter (budesonida tem mais dados de segurança)"
    },
    {
      droga: "Corticoide inalatório isolado (budesonida 200 mcg ou beclometasona 200–250 mcg) + salbutamol de resgate — trilha 2",
      linha: "alt",
      dose: "Dose baixa: budesonida 200 mcg de 12/12 h ou beclometasona 250 mcg 1 jato de 12/12 h. Salbutamol 100 mcg 2–4 jatos se sintomas",
      via: "Inalatória (aerossol com espaçador ou cápsula)",
      intervalo: "CI de 12/12 h; SABA conforme sintomas",
      duracao: "Contínuo",
      monitorizacao: "Adesão ao CI (o maior problema dessa trilha)",
      contraindicacoes: "—",
      ajustes: "Usar quando budesonida + formoterol não estiver disponível ou o paciente estiver estável e aderente. Etapa 1 da trilha 2: usar CI toda vez que usar salbutamol. Etapa 3: CI dose baixa + LABA; etapa 4: CI dose média + LABA. Enxaguar a boca após o CI"
    },
    {
      droga: "Tiotrópio (névoa suave) 2,5 mcg",
      linha: "adj",
      dose: "2 jatos (5 mcg)",
      via: "Inalatória",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Controle, crises",
      contraindicacoes: "Glaucoma de ângulo fechado, retenção urinária",
      ajustes: "Etapa 5: associar a CI + LABA e encaminhar ao pneumologista para fenotipagem e avaliação de imunobiológico"
    },
    {
      droga: "Montelucaste 10 mg",
      linha: "alt",
      dose: "10 mg",
      via: "Oral",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Contínuo",
      monitorizacao: "Alterações de humor, sono, ideação suicida",
      contraindicacoes: "Histórico de doença psiquiátrica (avaliar risco)",
      ajustes: "Menos eficaz que o CI. Alerta para efeitos neuropsiquiátricos. Pode ajudar se rinite alérgica associada"
    },
    {
      droga: "Salbutamol isolado sem corticoide inalatório",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar como único tratamento em adultos e adolescentes",
      ajustes: "Aumenta risco de crise grave e morte por asma (GINA desde 2019)"
    },
    {
      droga: "LABA isolado (formoterol ou salmeterol sem CI)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Nunca usar LABA sem corticoide inalatório na asma",
      ajustes: "Associação com aumento de mortalidade"
    }
  ],
  destino: {
    agora: [
      "Iniciar ou ajustar etapa, ensinar técnica, entregar plano de ação escrito",
      "Pedir espirometria se ainda não houver confirmação"
    ],
    reavaliar: [
      "1–3 meses após iniciar ou mudar tratamento; depois a cada 3–12 meses",
      "Até 1 semana após qualquer crise",
      "Gestantes: a cada 4–6 semanas"
    ],
    alta: [
      "Asma controlada com plano de ação: seguimento na UBS",
      "Reduzir etapa após 3 meses controlada (ex.: reduzir 25–50% da dose do CI), mantendo sempre algum CI"
    ],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: [
      "Pneumologia: dúvida diagnóstica, asma não controlada na etapa 4, ≥ 2 crises com corticoide oral/ano, asma ocupacional, candidato a imunobiológico",
      "Pré-natal de alto risco se asma não controlada na gestação"
    ]
  },
  prescricao: {
    ambulatorial: "TRILHA 1 — ETAPAS 1 e 2 (SÓ RESGATE, AIR)\nUSO INALATÓRIO\n1. Formoterol + budesonida 6/200 mcg (cápsula inalante ou aerossol) ------ 60 doses\n   Inalar 1 dose sempre que tiver falta de ar, chiado ou aperto no peito. Pode usar antes do exercício. Não ultrapassar 12 doses no dia.\n\nTRILHA 1 — ETAPA 3 (MART)\n1. Formoterol + budesonida 6/200 mcg ------------------------------ 120 doses (2 meses)\n   Inalar 1 dose de 12 em 12 horas todos os dias, mesmo sem sintomas.\n   Inalar 1 dose extra sempre que tiver sintomas.\n   Não ultrapassar 12 doses no dia somando todas; se precisar de mais, procurar atendimento no mesmo dia.\n   (Etapa 4: 2 doses de 12 em 12 horas + 1 dose extra se sintomas.)\n\nTRILHA 2 (SE NÃO HOUVER FORMOTEROL + BUDESONIDA)\n1. Budesonida 200 mcg (cápsula inalante) ----------------------- 60 cápsulas\n   Inalar 1 cápsula de 12 em 12 horas todos os dias. Enxaguar a boca depois.\n   (ou Beclometasona 250 mcg aerossol: 1 jato de 12 em 12 horas com espaçador)\n2. Salbutamol 100 mcg aerossol ------------------------------------ 1 frasco\n   Inalar 2 a 4 jatos com espaçador se falta de ar ou chiado, até de 4 em 4 horas.\n3. Espaçador ------------------------------------------------------ 1 unidade\n\nPLANO DE AÇÃO (ESCRITO À MÃO NA RECEITA)\nPiora leve: aumentar o resgate (até 12 doses/dia na trilha 1). Sem melhora em 2–3 dias ou piora rápida: procurar a UBS/PS. Falta de ar forte, fala entrecortada, lábios roxos: SAMU 192."
  },
  orientacoesRetorno: [
    "A asma é uma inflamação crônica: o remédio com corticoide controla e previne crises, mesmo quando você está bem",
    "Leve o inalador em todas as consultas para conferir a técnica",
    "Enxágue a boca e cuspa após usar o corticoide inalatório (previne sapinho e rouquidão)",
    "Evite fumaça de cigarro, fogão a lenha, mofo, poeira e produtos de limpeza fortes; não use anti-inflamatório se já piorou com ele",
    "Vacine-se contra gripe todo ano e mantenha as vacinas de COVID-19 e pneumococo conforme indicação",
    "Volte no mesmo dia se precisar do resgate mais de 12 vezes em um dia (ou salbutamol a cada 3–4 h) ou se o remédio não aliviar",
    "Procure o PS ou ligue 192 se tiver falta de ar forte, não conseguir falar frases, lábios roxos ou sonolência",
    "Retorno em 1–3 meses após começar ou mudar o tratamento, e em até 1 semana depois de qualquer crise"
  ],
  tabelas: [
    {
      titulo: "Etapas de tratamento — adultos e adolescentes (GINA)",
      colunas: ["Etapa", "Trilha 1 (preferida)", "Trilha 2 (alternativa)"],
      linhas: [
        ["1–2", "Budesonida + formoterol só se sintomas (AIR)", "Etapa 1: CI sempre que usar SABA. Etapa 2: CI dose baixa diário + SABA"],
        ["3", "MART com budesonida + formoterol dose baixa", "CI dose baixa + LABA diário + SABA"],
        ["4", "MART com budesonida + formoterol dose média", "CI dose média/alta + LABA + SABA"],
        ["5", "Associar LAMA; encaminhar para fenotipagem e imunobiológico", "Idem"]
      ],
      nota: "Antes de subir a etapa: conferir diagnóstico, técnica, adesão, exposições e comorbidades."
    },
    {
      titulo: "Doses diárias de corticoide inalatório — ≥ 12 anos (GINA)",
      colunas: ["Corticoide (mcg/dia)", "Baixa", "Média", "Alta"],
      linhas: [
        ["Budesonida (pó)", "200–400", "> 400–800", "> 800"],
        ["Beclometasona (aerossol, partícula padrão)", "200–500", "> 500–1.000", "> 1.000"],
        ["Beclometasona (aerossol, partícula extrafina)", "100–200", "> 200–400", "> 400"],
        ["Fluticasona propionato", "100–250", "> 250–500", "> 500"]
      ],
      nota: "Não são doses equivalentes; são faixas de dose clínica."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT da Asma, Portaria Conjunta SAES/SCTIE nº 43 (2026)",
    "Global Initiative for Asthma (GINA) — Global Strategy for Asthma Management and Prevention (2026)",
    "SBPT — Recomendações para o manejo da asma (2020) e atualizações",
    "ERS/ATS — Interpretive strategies for routine lung function tests (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
