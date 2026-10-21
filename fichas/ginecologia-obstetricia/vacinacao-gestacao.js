// Vacinação na gestação
registrarFicha({
  id: "vacinacao-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Vacinação na gestação (dTpa, hepatite B, influenza, covid-19, VSR)",
  resumo: "Vacinas do Calendário Nacional da gestante (2026): dTpa a partir de 20 semanas, hepatite B, influenza, covid-19 e VSR a partir de 28 semanas, em cada gestação. Vacinas de vírus vivo são contraindicadas.",
  palavrasChave: "vacina vacinacao gestante gravidez dtpa coqueluche pertussis difteria tetano dt hepatite b influenza gripe covid vsr virus sincicial respiratorio abrysvo bronquiolite calendario nacional pni febre amarela triplice viral",
  critico: {
    tempo: "dTpa ≥ 20 sem · VSR ≥ 28 sem",
    texto: "dTpa e VSR devem ser feitas em CADA gestação, mesmo se já vacinada antes. Podem ser aplicadas no mesmo dia que as demais vacinas."
  },
  alarmes: [
    "Anafilaxia a dose anterior ou a componente da vacina (contraindicação)",
    "Vacina de vírus vivo aplicada inadvertidamente (tríplice viral, varicela, febre amarela): notificar como erro de imunização e acompanhar, sem indicação de interromper a gestação",
    "Febre alta, convulsão ou reação local extensa após vacina: avaliar e notificar ESAVI"
  ],
  conduta: [
    "Conferir a caderneta de vacinação na 1ª consulta e em todo retorno",
    "dTpa: 1 dose a partir de 20 semanas em cada gestação. Se perdeu a oportunidade, aplicar no puerpério até 45 dias",
    "dT/dTpa com esquema incompleto ou desconhecido: completar 3 doses (intervalo de 60 dias, mínimo 30), sendo uma delas dTpa após 20 semanas",
    "Hepatite B: sem comprovação de 3 doses → iniciar ou completar o esquema (0, 1 e 6 meses) em qualquer idade gestacional, após HBsAg não reagente",
    "Influenza: 1 dose em qualquer idade gestacional, a cada gestação, durante a sazonalidade/campanha; se não feita, no puerpério até 45 dias",
    "Covid-19: 1 dose em cada gestação, em qualquer idade gestacional",
    "VSR (vacina recombinante, Abrysvo): 1 dose a partir de 28 semanas, em cada gestação, sem limite superior de idade gestacional no SUS",
    "Todas as vacinas inativadas podem ser aplicadas no mesmo dia ou com qualquer intervalo entre si",
    "Não aplicar na gestação: tríplice viral, varicela, febre amarela (exceto situação epidemiológica de alto risco, após avaliação), dengue, HPV (adiar para o pós-parto)",
    "Registrar no cartão de vacina e na Caderneta da Gestante"
  ],
  tabelas: [
    {
      titulo: "Calendário da gestante (PNI 2026)",
      colunas: ["Vacina", "Quando", "Esquema"],
      linhas: [
        ["dTpa (difteria, tétano, coqueluche)", "A partir de 20 semanas", "1 dose em cada gestação; completar dT se esquema incompleto"],
        ["Hepatite B", "Qualquer idade gestacional", "3 doses (0, 1, 6 meses) se não vacinada; completar se incompleto"],
        ["Influenza", "Qualquer idade gestacional", "1 dose por temporada/gestação"],
        ["Covid-19", "Qualquer idade gestacional", "1 dose em cada gestação"],
        ["VSR (Abrysvo)", "A partir de 28 semanas", "1 dose em cada gestação; no SUS, antes de 28 semanas é erro programático"]
      ],
      nota: "Instrução Normativa do Calendário Nacional de Vacinação 2026 e Estratégia de Vacinação contra o VSR em Gestantes (MS, 2025). A bula registra 24–36 semanas; o SUS adota ≥ 28 semanas sem limite superior."
    },
    {
      titulo: "dT/dTpa conforme histórico vacinal",
      colunas: ["Histórico", "Conduta na gestação"],
      linhas: [
        ["Nenhuma dose ou desconhecido", "2 doses de dT + 1 de dTpa (dTpa após 20 semanas), intervalo de 60 dias (mínimo 30)"],
        ["1 dose", "1 dose de dT + 1 de dTpa (após 20 semanas)"],
        ["2 doses", "1 dose de dTpa (após 20 semanas)"],
        ["3 doses ou reforço", "1 dose de dTpa (após 20 semanas) em cada gestação"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "ENCAMINHAMENTO À SALA DE VACINA\nGestante com ___ semanas. Aplicar conforme Calendário Nacional:\n1. dTpa (adsorvida difteria, tétano e pertussis acelular) 0,5 mL IM — 1 dose (≥ 20 semanas).\n2. Vacina hepatite B (recombinante) 1 mL IM — dose ___ (esquema 0, 1 e 6 meses), se não vacinada/incompleta e HBsAg não reagente.\n3. Vacina influenza 0,5 mL IM — 1 dose (sazonal).\n4. Vacina covid-19 — 1 dose (gestação atual).\n5. Vacina VSR recombinante (Abrysvo) 0,5 mL IM — 1 dose (≥ 28 semanas).\nVacinas inativadas podem ser aplicadas no mesmo dia. Registrar na caderneta de vacinação e na Caderneta da Gestante."
  },
  orientacoesRetorno: [
    "As vacinas da gestação protegem você e o bebê nos primeiros meses de vida (coqueluche, gripe, covid e bronquiolite pelo VSR)",
    "Dor, vermelhidão no local e febre baixa por 1–2 dias são comuns; pode usar paracetamol",
    "Procurar atendimento se falta de ar, inchaço no rosto ou na garganta, febre alta persistente ou reação local muito extensa",
    "Trazer a caderneta de vacinação em todas as consultas; voltar para as doses seguintes nas datas marcadas"
  ],
  encaminhar: [
    "CRIE: gestante com contraindicação a componente vacinal, imunossupressão ou situação especial",
    "Febre amarela em área de surto: decisão individual com vigilância epidemiológica"
  ],
  fontes: [
    "Ministério da Saúde — Instrução Normativa que instrui o Calendário Nacional de Vacinação (2026)",
    "Ministério da Saúde — Estratégia de Vacinação contra o Vírus Sincicial Respiratório em Gestantes (2025)",
    "SBIm/SBP/FEBRASGO — Guia rápido de imunização contra o VSR (março de 2026)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
