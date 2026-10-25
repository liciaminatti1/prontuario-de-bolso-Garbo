// Diagnóstico de gestação, idade gestacional e DPP
registrarFicha({
  id: "diagnostico-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Diagnóstico de gestação, idade gestacional e DPP",
  resumo: "Confirmar a gravidez (sinais clínicos, teste rápido, beta-hCG, USG), calcular idade gestacional e data provável do parto (Naegele) e quando redatar pela USG. Teste positivo na UBS já inicia o pré-natal.",
  palavrasChave: "diagnostico de gravidez teste de gravidez teste rapido de gravidez trg beta hcg quantitativo duplicacao zona discriminatoria atraso menstrual sinais de presuncao probabilidade certeza hegar piskacek nobile budin goodell chadwick jacquemier kluge osiander bcf sonar idade gestacional dpp regra de naegele dum gestograma ccn comprimento cabeca nadega datacao ultrassom redatar",
  critico: {
    tempo: "Teste positivo: iniciar pré-natal",
    texto: "Teste rápido positivo na UBS: acolher, calcular IG e DPP, fazer testes rápidos (HIV, sífilis, hepatites B e C) e solicitar exames do 1º trimestre na mesma consulta. Dor abdominal ou sangramento com teste positivo: excluir ectópica."
  },
  alarmes: [
    "Teste positivo com dor abdominal, sangramento, síncope ou dor no ombro (gravidez ectópica — ver gravidez-ectopica)",
    "Beta-hCG acima da zona discriminatória sem saco gestacional intrauterino à USG transvaginal",
    "Beta-hCG muito elevado, vômitos intensos, sangramento ou útero maior que a IG (mola — ver doenca-trofoblastica)",
    "Queda ou elevação insuficiente do beta-hCG em 48 h (abortamento ou ectópica)",
    "Adolescente menor de 14 anos grávida: presunção legal de violência sexual (notificar e acionar rede de proteção)"
  ],
  conduta: [
    "Pensar em gravidez em toda mulher em idade fértil com atraso menstrual, sangramento atípico, náuseas ou dor pélvica",
    "Teste rápido de gravidez (urina) na UBS: resultado na hora; pode ser feito desde o 1º dia de atraso menstrual",
    "Teste negativo com atraso: repetir em 1 semana ou dosar beta-hCG sérico; persistindo negativo, investigar amenorreia (ver amenorreia-secundaria)",
    "Beta-hCG sérico quantitativo: detecta a gravidez cerca de 8–11 dias após a concepção; útil se dúvida, sangramento, dor ou suspeita de ectópica",
    "Gestação inicial viável: beta-hCG costuma subir pelo menos cerca de 35–50% em 48 h; elevação menor ou queda sugere gestação inviável ou ectópica (repetir em 48 h com USG)",
    "Zona discriminatória: com beta-hCG acima de cerca de 1.500–3.500 mUI/mL, espera-se ver saco gestacional intrauterino na USG transvaginal",
    "Calcular IG pela DUM (semanas e dias desde o 1º dia da última menstruação) e DPP pela regra de Naegele (tabela)",
    "DUM incerta, ciclos irregulares, uso recente de anticoncepcional ou amamentação: datar pela USG",
    "USG de 1º trimestre (CCN entre cerca de 7 e 13 semanas e 6 dias) é a forma mais precisa de datar; corrigir a IG da DUM se a diferença ultrapassar o limite da tabela",
    "Uma vez definida, a DPP não muda com USGs posteriores",
    "Teste positivo e gestação desejada: iniciar pré-natal na consulta (ver prenatal-baixo-risco e exames-prenatal); ácido fólico (ver suplementacao-gestacao)",
    "Gestação não planejada ou não desejada: escuta sem julgamento; informar sobre pré-natal, rede de apoio e situações de aborto previsto em lei (violência sexual, risco de vida, anencefalia)",
    "Teste negativo e não deseja engravidar: oferecer contracepção (ver anticoncepcao); deseja engravidar: ácido fólico e consulta pré-concepcional"
  ],
  exames: [
    "Teste rápido de gravidez na urina (UBS)",
    "'Beta-hCG sérico quantitativo' (e repetir em 48 h se sangramento, dor ou USG sem saco intrauterino)",
    "'Ultrassonografia obstétrica transvaginal — 1º trimestre: localização, número de embriões/corionicidade, BCF, CCN para datação'",
    "Na confirmação: testes rápidos de HIV, sífilis, hepatite B e hepatite C e exames do 1º trimestre (ver exames-prenatal)"
  ],
  diferenciais: [
    "Falso-negativo: teste muito precoce, urina diluída, efeito gancho (beta-hCG muito alto, ex.: mola)",
    "Falso-positivo ou positivo sem gestação viável: abortamento recente (hCG pode levar semanas para negativar), doença trofoblástica, tumor produtor de hCG, hCG exógeno (indução de ovulação), anticorpos heterofílicos (sérico)",
    "Pseudociese",
    "Atraso menstrual sem gravidez: estresse, SOP, tireoidopatia, hiperprolactinemia, perimenopausa"
  ],
  prescricao: {
    ambulatorial: "GESTAÇÃO CONFIRMADA — PRIMEIRA CONSULTA\nDUM: __/__/____  IG: ___ semanas e ___ dias  DPP (Naegele): __/__/____\n\nUSO ORAL\n1. Ácido fólico 0,4 mg (400 mcg) ---------------- 1 frasco/caixa\n   Tomar 0,4 mg ao dia até o fim da gestação (5 mg/dia se alto risco de defeito do tubo neural — ver suplementacao-gestacao).\n\nSOLICITAÇÃO\n2. Ultrassonografia obstétrica transvaginal (1º trimestre) — datação, número de embriões e corionicidade.\n3. Exames do 1º trimestre conforme protocolo do pré-natal (ver exames-prenatal).\n4. Testes rápidos: HIV, sífilis, hepatite B e hepatite C — realizados em __/__/____.\n\nSE DÚVIDA DIAGNÓSTICA OU SANGRAMENTO/DOR\n5. Beta-hCG sérico quantitativo — repetir em 48 horas."
  },
  orientacoesRetorno: [
    "O teste deu positivo: vamos começar o pré-natal hoje; trazer a caderneta da gestante em todas as consultas",
    "Tomar o ácido fólico todos os dias",
    "Ir ao pronto-socorro imediatamente se tiver dor forte na barriga, sangramento, desmaio ou dor no ombro",
    "Se o teste deu negativo e a menstruação continuar atrasada, repetir o teste em 1 semana",
    "Evitar álcool, cigarro e remédios sem orientação médica",
    "Fazer a ultrassonografia de preferência até 13 semanas: é a que melhor calcula a data do parto"
  ],
  encaminhar: [
    "PS/maternidade: dor abdominal, sangramento importante ou instabilidade com teste positivo (ectópica, abortamento)",
    "Pré-natal de alto risco: conforme estratificação de risco (ver prenatal-baixo-risco)",
    "Serviço de referência para aborto legal: gestação por violência sexual, risco de vida materno ou anencefalia, se for o desejo da mulher"
  ],
  tabelas: [
    {
      titulo: "Sinais de gravidez",
      colunas: ["Tipo", "Sinais"],
      linhas: [
        ["Presunção (relatados ou maternos)", "Atraso menstrual, náuseas, mastalgia, aumento das mamas, polaciúria, sonolência, tubérculos de Montgomery, rede venosa de Haller, aréola secundária (Hunter), percepção de movimentos fetais pela mulher"],
        ["Probabilidade (útero e genitais)", "Aumento do volume uterino; Hegar (amolecimento do istmo); Piskacek (assimetria uterina); Nobile-Budin (fundo de saco lateral preenchido); Goodell (amolecimento do colo); Jacquemier/Chadwick (coloração violácea de vulva e vagina); Osiander (pulso vaginal); beta-hCG positivo"],
        ["Certeza (fetais)", "BCF ao sonar Doppler (a partir de cerca de 10–12 semanas) ou Pinard (cerca de 18–20 semanas); movimentos fetais percebidos pelo examinador; partes fetais palpáveis/rechaço; embrião ou feto à USG"]
      ]
    },
    {
      titulo: "Cálculo de IG e DPP",
      colunas: ["Item", "Como fazer"],
      linhas: [
        ["IG pela DUM", "Contar os dias desde o 1º dia da DUM e dividir por 7 (semanas + dias); usar gestograma ou calculadora"],
        ["DPP (Naegele)", "DUM + 7 dias e − 3 meses (DUM em janeiro a março: + 7 dias e + 9 meses, mesmo ano). Ex.: DUM 10/05 → DPP 17/02"],
        ["Ciclos regulares mais longos ou mais curtos que 28 dias", "Ajustar a DPP somando ou subtraindo a diferença de dias"],
        ["IG pela USG", "IG da USG no dia do exame + tempo decorrido desde então"]
      ]
    },
    {
      titulo: "Quando redatar pela USG (diferença USG × DUM)",
      colunas: ["IG na USG", "Usar a USG se a diferença for maior que"],
      linhas: [
        ["Até 8 semanas e 6 dias", "5 dias"],
        ["9 a 13 semanas e 6 dias", "7 dias"],
        ["14 a 15 semanas e 6 dias", "7 dias"],
        ["16 a 21 semanas e 6 dias", "10 dias"],
        ["22 a 27 semanas e 6 dias", "14 dias"],
        ["28 semanas ou mais", "21 dias (datação tardia é imprecisa: acompanhar crescimento)"]
      ],
      nota: "ACOG/AIUM/SMFM 2017. USG transvaginal: saco gestacional por volta de 4,5–5 semanas, vesícula vitelínica por volta de 5,5 semanas e embrião com BCF por volta de 6 semanas."
    }
  ],
  fontes: [
    "Ministério da Saúde — Teste rápido de gravidez na Atenção Básica: guia técnico (2013) e Caderno de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco (2012)",
    "Ministério da Saúde — Rede Alyne (Portaria GM/MS nº 5.350/2024) e Caderneta da Gestante (edição vigente)",
    "ACOG Committee Opinion nº 700 — Methods for estimating the due date (2017, reafirmado)",
    "ACOG Practice Bulletin nº 193 — Tubal ectopic pregnancy (2018) e SRU — Diagnostic criteria for nonviable pregnancy early in the first trimester (Doubilet et al., 2013)",
    "FEBRASGO — Protocolos de Obstetrícia: Assistência pré-natal"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
