// Lesões precursoras do câncer do colo do útero: condutas pelos resultados
registrarFicha({
  id: "lesoes-precursoras-colo",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Resultado alterado do preventivo: citologia e DNA-HPV",
  resumo: "O que fazer com cada resultado do teste de DNA-HPV oncogênico e do exame citopatológico do colo (ASC-US, LSIL, ASC-H, HSIL, AGC e outros), segundo as Diretrizes do INCA. Quem rastrear e com que intervalo: ver rastreio-cancer.",
  palavrasChave: "preventivo alterado papanicolau alterado citologia alterada ascus asc us asc h lsil hsil lesao intraepitelial baixo grau alto grau agc atipias glandulares nic cin dna hpv hpv 16 18 genotipagem colposcopia ezt conizacao lesao precursora colo do utero inca",
  critico: {
    tempo: "HSIL ou HPV 16/18: colposcopia",
    texto: "HPV 16/18 positivo, citologia ASC-H, HSIL, AGC, AOI ou suspeita de invasão: encaminhar para colposcopia (prioridade se suspeita de invasão). Fazer busca ativa: a perda de seguimento é a principal falha."
  },
  alarmes: [
    "Citologia sugestiva de carcinoma invasor ou adenocarcinoma: colposcopia com urgência",
    "Lesão visível no colo, sangramento pós-coito ou pós-menopausa: colposcopia independentemente do resultado do rastreio",
    "Gestante com HSIL ou suspeita de invasão: colposcopia na gestação",
    "Imunossuprimida (HIV, transplante, uso de imunossupressor): limiar mais baixo para colposcopia"
  ],
  conduta: [
    "Conferir: idade, tipo de exame (DNA-HPV ou citologia), resultado anterior, gestação, imunossupressão, menopausa",
    "Explicar o resultado sem alarmismo: HPV é muito comum e a maioria das infecções some sozinha; alteração não é câncer",
    "DNA-HPV negativo: repetir em 5 anos (imunossuprimida: 3 anos)",
    "HPV 16 e/ou 18 positivo: colposcopia (qualquer resultado da citologia)",
    "HPV oncogênico não 16/18 positivo: olhar a citologia reflexa — ASC-US ou pior → colposcopia; negativa → repetir DNA-HPV em 12 meses",
    "Na repetição em 12 meses: negativo → volta ao intervalo de 5 anos; persistência de HPV → seguir o fluxograma da diretriz (em geral colposcopia)",
    "Onde o rastreio ainda é por citologia: conduta pela tabela (INCA 2016)",
    "Registrar no SISCAN, agendar o retorno e fazer busca ativa de quem não retorna",
    "Colposcopia alterada com HSIL/NIC 2–3: tratamento por excisão da zona de transformação (EZT/CAF) no nível secundário"
  ],
  exames: [
    "Colposcopia: 'Colposcopia com biópsia se necessário — resultado: ___ (DNA-HPV/citologia de __/__/____)'",
    "Repetição: 'Exame citopatológico do colo do útero — repetição por ___' ou 'Teste de DNA-HPV oncogênico — repetição em 12 meses'",
    "Pós-menopausa com atrofia e ASC-US/LSIL: estrogênio vaginal antes de repetir a citologia",
    "AGC em ≥ 35 anos ou com sangramento anormal: avaliação endometrial (USG transvaginal e/ou biópsia) além da colposcopia"
  ],
  prescricao: {
    ambulatorial: "PREPARO PARA REPETIR CITOLOGIA (pós-menopausa com atrofia)\nUSO VAGINAL\n1. Estriol 1 mg/g creme vaginal -------------------- 1 bisnaga\n   Aplicar 0,5 g (meio aplicador) dentro da vagina à noite por 21 dias; suspender 5 a 7 dias antes da coleta.\n\nENCAMINHAMENTO\n2. Encaminho para colposcopia. Motivo: ___ (ex.: DNA-HPV 16/18 positivo; citologia HSIL) em __/__/____. Gestante: sim/não. Imunossupressão: sim/não."
  },
  orientacoesRetorno: [
    "HPV é uma infecção muito comum, transmitida pelo contato sexual; na maioria das pessoas o próprio corpo elimina o vírus",
    "O resultado alterado não significa câncer; é uma alteração que precisa ser acompanhada ou tratada para nunca virar câncer",
    "Não deixar de fazer a repetição ou a colposcopia na data marcada",
    "Parar de fumar ajuda o organismo a eliminar o HPV",
    "Usar preservativo; vacinar contra HPV quem estiver na faixa de vacinação",
    "Procurar a UBS se sangramento após a relação ou fora da menstruação"
  ],
  encaminhar: [
    "Colposcopia (serviço de referência): HPV 16/18; HPV outros com citologia ≥ ASC-US; ASC-H; HSIL; AGC; AOI; carcinoma/adenocarcinoma (prioridade); ASC-US ou LSIL persistentes",
    "Gestante: colposcopia só se HSIL ou mais grave; ASC-US/LSIL → repetir citologia 3 meses após o parto",
    "Mulher < 25 anos com ASC-US ou LSIL: repetir citologia em 3 anos (não encaminhar); ASC-H ou HSIL: colposcopia"
  ],
  tabelas: [
    {
      titulo: "Rastreio com DNA-HPV (Diretrizes 2024–2025)",
      colunas: ["Resultado", "Conduta"],
      linhas: [
        ["HPV não detectado", "Repetir em 5 anos (imunossuprimida: 3 anos)"],
        ["HPV 16 e/ou 18", "Colposcopia"],
        ["HPV outros + citologia reflexa ≥ ASC-US", "Colposcopia"],
        ["HPV outros + citologia reflexa negativa", "Repetir DNA-HPV em 12 meses"],
        ["Amostra insatisfatória/inválida", "Nova coleta"]
      ],
      nota: "Coteste (DNA-HPV + citologia na mesma coleta para todas) não é recomendado. Conferir o fluxograma oficial vigente para a conduta na repetição positiva e no seguimento pós-colposcopia."
    },
    {
      titulo: "Rastreio com citologia (INCA 2016)",
      colunas: ["Resultado", "≥ 25 anos", "< 25 anos"],
      linhas: [
        ["Insatisfatória", "Repetir em 6–12 semanas, corrigindo a causa", "Idem"],
        ["ASC-US", "≥ 30 anos: repetir em 6 meses · 25–29 anos: repetir em 12 meses. 2 negativas → rotina; alterada → colposcopia", "Repetir em 3 anos"],
        ["LSIL", "Repetir em 6 meses. 2 negativas → rotina; alterada → colposcopia", "Repetir em 3 anos"],
        ["ASC-H", "Colposcopia", "Colposcopia"],
        ["HSIL", "Colposcopia (ver e tratar se critérios)", "Colposcopia (sem ver e tratar)"],
        ["HSIL não podendo excluir microinvasão, carcinoma invasor", "Colposcopia com prioridade", "Idem"],
        ["AGC / AOI", "Colposcopia + avaliação endocervical; ≥ 35 anos ou sangramento anormal: avaliar endométrio", "Colposcopia"],
        ["Adenocarcinoma in situ ou invasor", "Colposcopia com prioridade", "Idem"]
      ],
      nota: "Imunossuprimida com ASC-US ou LSIL: colposcopia direta. Pós-menopausa: estrogenizar antes de repetir."
    }
  ],
  fontes: [
    "INCA/Ministério da Saúde — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed. revista e atualizada (2016)",
    "INCA/Ministério da Saúde — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero: rastreamento organizado utilizando testes moleculares para detecção de DNA-HPV oncogênico (Parte I, 2024; Portaria Conjunta SAES/SECTICS nº 13/2025)",
    "FEBRASGO — Lesões precursoras do câncer do colo uterino. Protocolos FEBRASGO (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
