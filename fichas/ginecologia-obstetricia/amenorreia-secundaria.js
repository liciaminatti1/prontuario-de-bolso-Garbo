// Amenorreia secundária
registrarFicha({
  id: "amenorreia-secundaria",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Amenorreia secundária",
  resumo: "Ausência de menstruação por 3 meses em quem tinha ciclos regulares, ou por 6 meses em ciclos irregulares. Primeiro excluir gravidez; depois TSH, prolactina e FSH; teste do progestogênio para avaliar o estado estrogênico.",
  palavrasChave: "amenorreia secundaria ausencia menstruacao atraso menstrual teste progestogenio progesterona medroxiprogesterona prolactina hiperprolactinemia fsh insuficiencia ovariana prematura iop falencia ovariana sop hipotalamica asherman sheehan cabergolina",
  critico: {
    tempo: "Beta-hCG antes de tudo",
    texto: "Gravidez é a causa mais comum. Depois: TSH, prolactina e FSH. Galactorreia com cefaleia ou alteração de campo visual → ressonância de sela."
  },
  alarmes: [
    "Cefaleia, alteração de campo visual, galactorreia (tumor hipofisário)",
    "Virilização rápida: clitoromegalia, voz grave, calvície (tumor produtor de androgênio)",
    "IMC < 17,5, perda de peso rápida, vômitos induzidos, bradicardia, hipotensão (transtorno alimentar)",
    "Amenorreia após parto com hemorragia grave e falha na lactação (Sheehan)",
    "Ondas de calor antes dos 40 anos (insuficiência ovariana prematura)",
    "Atraso menstrual com dor abdominal e sangramento (gravidez ectópica)"
  ],
  condutaInicial: [
    "Beta-hCG (ou teste rápido de gravidez) em toda mulher com amenorreia",
    "Anamnese dirigida: peso, exercício, estresse, dieta, medicamentos (antipsicóticos, AMPD, opioides), sintomas de hiperandrogenismo, galactorreia, fogachos, curetagem prévia",
    "Exame: IMC, PA, acne/hirsutismo (Ferriman), acantose, galactorreia, tireoide, sinais de Cushing",
    "Exames: TSH, prolactina, FSH (e LH, estradiol); testosterona total se hiperandrogenismo",
    "Se exames normais: teste do progestogênio",
    "Tratar a causa e proteger endométrio e osso"
  ],
  fataisExcluir: [
    "Gravidez (inclusive ectópica)",
    "Tumor hipofisário (macroadenoma) com compressão quiasmática",
    "Tumor ovariano ou adrenal secretor de androgênio",
    "Anorexia nervosa grave (distúrbio hidroeletrolítico, arritmia)",
    "Síndrome de Cushing"
  ],
  proximaDecisao: "Teste do progestogênio positivo (sangra) → anovulação com estrogênio presente (SOP é a principal): ver ficha SOP. Negativo → teste com estrogênio + progestogênio: se sangra, hipoestrogenismo → FSH alto = insuficiência ovariana; FSH baixo/normal = causa hipotalâmica/hipofisária. Se não sangra → causa uterina (sinéquias) → ginecologia/histeroscopia.",
  clinica: {
    anamnese: [
      "DUM, padrão menstrual prévio, uso de contraceptivo (AMPD pode causar amenorreia por meses após a última dose)",
      "Atividade sexual, método contraceptivo, sintomas de gravidez",
      "Variação de peso, dieta, exercício intenso, estresse, transtorno alimentar",
      "Galactorreia, cefaleia, alterações visuais",
      "Fogachos, secura vaginal (hipoestrogenismo)",
      "Acne, hirsutismo, queda de cabelo, ganho de peso (SOP)",
      "Curetagem, cirurgia uterina, infecção pós-parto/aborto (Asherman)",
      "Quimioterapia, radioterapia pélvica, doença autoimune",
      "Medicamentos: antipsicóticos, metoclopramida, domperidona, antidepressivos, opioides"
    ],
    exameFisico: [
      "Peso, altura, IMC, PA",
      "Acne, hirsutismo (escore de Ferriman-Gallwey), acantose nigricans",
      "Expressão mamária (galactorreia)",
      "Tireoide",
      "Estrias violáceas, giba, fácies de lua cheia (Cushing)",
      "Sinais de virilização",
      "Exame ginecológico: trofismo vaginal (hipoestrogenismo), massas anexiais"
    ],
    diferenciais: [
      { dx: "Gravidez", pista: "Beta-hCG positivo" },
      { dx: "SOP", pista: "Ciclos irregulares desde a menarca, hiperandrogenismo, teste do progestogênio positivo" },
      { dx: "Amenorreia hipotalâmica funcional", pista: "Perda de peso, exercício, estresse; FSH/LH baixos ou normais, estradiol baixo, progestogênio negativo" },
      { dx: "Hiperprolactinemia", pista: "Galactorreia, medicamentos, prolactina elevada; hipotireoidismo associado" },
      { dx: "Insuficiência ovariana prematura", pista: "< 40 anos, fogachos, FSH > 25 UI/L" },
      { dx: "Síndrome de Asherman", pista: "Curetagem prévia; teste com estrogênio + progestogênio negativo" },
      { dx: "Hipotireoidismo / hipertireoidismo", pista: "TSH alterado" },
      { dx: "Síndrome de Sheehan", pista: "Hemorragia pós-parto grave, agalactia, outros déficits hipofisários" }
    ],
    gravidade: [
      "Hipoestrogenismo prolongado (> 6 meses): risco de perda óssea — avaliar densitometria",
      "Anovulação crônica com estrogênio presente (SOP): risco de hiperplasia endometrial — proteger endométrio",
      "Sinais neurológicos ou visuais: urgência relativa (macroadenoma)"
    ]
  },
  exames: [
    {
      nome: "Teste de gravidez",
      pedido: "Beta-hCG sérico quantitativo (ou teste rápido de gravidez na urina).",
      porQue: "Excluir gravidez antes de qualquer outra investigação.",
      esperar: "Negativo.",
      interpretacao: "Positivo → pré-natal ou avaliação de gravidez inicial.",
      limitacoes: "—"
    },
    {
      nome: "Dosagens hormonais iniciais",
      pedido: "TSH. Prolactina. FSH. LH. Estradiol. Testosterona total (se hiperandrogenismo).",
      porQue: "Causas endócrinas mais comuns.",
      esperar: "Prolactina normal: geralmente < 25 ng/mL (ver valor de referência do laboratório).",
      interpretacao: "Prolactina alta: repetir em jejum, sem estresse; excluir medicamento, hipotireoidismo e macroprolactina; muito elevada → ressonância de sela. FSH > 25 UI/L em < 40 anos → insuficiência ovariana prematura (repetir em 4–6 semanas se dúvida). Testosterona muito elevada ou virilização → tumor.",
      limitacoes: "FSH e LH variam no ciclo; em uso de hormônio, suspender por 4–6 semanas para dosar."
    },
    {
      nome: "Teste do progestogênio",
      pedido: "Acetato de medroxiprogesterona 10 mg VO 1 vez ao dia por 7 a 10 dias; observar sangramento nos 7–10 dias após a última dose.",
      porQue: "Avaliar se há estrogênio endógeno e endométrio responsivo.",
      esperar: "Sangramento = teste positivo.",
      interpretacao: "Positivo: anovulação com estrogênio presente (SOP, hiperprolactinemia leve, hipotireoidismo). Negativo: hipoestrogenismo ou causa uterina → teste com estrogênio + progestogênio.",
      limitacoes: "Só após excluir gravidez. Sangramento escasso tem interpretação incerta."
    },
    {
      nome: "Teste do estrogênio + progestogênio",
      pedido: "Valerato de estradiol 2 mg VO 1 vez ao dia (ou estrogênios conjugados 1,25 mg) por 21 dias, associando acetato de medroxiprogesterona 10 mg VO nos últimos 10 dias; observar sangramento após o término.",
      porQue: "Diferenciar causa uterina de hipoestrogenismo.",
      esperar: "Sangramento = endométrio responsivo.",
      interpretacao: "Sangra → hipoestrogenismo: FSH alto = ovariana; FSH baixo/normal = hipotalâmica/hipofisária. Não sangra → causa uterina (Asherman).",
      limitacoes: "—"
    },
    {
      nome: "Imagem",
      pedido: "Ultrassonografia pélvica transvaginal. Ressonância magnética de sela túrcica (se prolactina elevada sem causa, cefaleia, alteração visual ou hipogonadismo hipogonadotrófico sem causa funcional).",
      porQue: "Morfologia ovariana e uterina; adenoma hipofisário.",
      esperar: "—",
      interpretacao: "Ovários multifoliculares com quadro clínico compatível → SOP. Endométrio fino → hipoestrogenismo.",
      limitacoes: "USG não é necessária para diagnosticar SOP em adultas com ciclo irregular + hiperandrogenismo."
    }
  ],
  tratamento: [
    {
      droga: "Acetato de medroxiprogesterona (proteção endometrial na anovulação)",
      linha: "l1",
      dose: "10 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia por 10–14 dias a cada 1–3 meses",
      duracao: "Enquanto anovulatória sem outro método hormonal",
      monitorizacao: "Sangramento de privação",
      contraindicacoes: "Gravidez, sangramento genital não esclarecido",
      ajustes: "Alternativa: anticoncepcional combinado (se deseja contracepção e sem contraindicação) ou SIU-LNG"
    },
    {
      droga: "Cabergolina (hiperprolactinemia/prolactinoma)",
      linha: "l1",
      dose: "0,25–0,5 mg por semana, aumentar conforme prolactina (dose usual 0,5–1 mg/semana)",
      via: "VO",
      intervalo: "1–2 vezes por semana",
      duracao: "Conforme especialista (geralmente ≥ 2 anos no prolactinoma)",
      monitorizacao: "Prolactina em 4–8 semanas; ecocardiograma se doses altas e prolongadas",
      contraindicacoes: "Valvopatia, hipertensão não controlada, psicose",
      ajustes: "Excluir causa medicamentosa e hipotireoidismo antes. Bromocriptina 1,25–2,5 mg/dia é alternativa"
    },
    {
      droga: "Terapia hormonal (hipoestrogenismo: insuficiência ovariana prematura, hipotalâmica)",
      linha: "l1",
      dose: "Valerato de estradiol 2 mg/dia (ou estradiol gel 1–2 mg/dia) + progestogênio (AMP 10 mg/dia por 12–14 dias/mês ou progesterona micronizada 200 mg/dia por 12–14 dias/mês)",
      via: "VO ou transdérmica",
      intervalo: "Diário",
      duracao: "Na IOP, até a idade média da menopausa (~50 anos)",
      monitorizacao: "PA, sangramento, densitometria",
      contraindicacoes: "Câncer sensível a estrogênio, TEV ativo, doença hepática ativa grave",
      ajustes: "Anticoncepcional combinado é alternativa quando também se deseja contracepção. Na amenorreia hipotalâmica, a base é recuperação de peso, nutrição e redução do exercício"
    },
    {
      droga: "Cálcio e vitamina D",
      linha: "adj",
      dose: "Ingestão de cálcio ~1.000 mg/dia (dieta ou suplemento); vitamina D conforme dosagem",
      via: "VO",
      intervalo: "Diário",
      duracao: "Durante o hipoestrogenismo",
      monitorizacao: "Densitometria",
      contraindicacoes: "Hipercalcemia",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Excluir gravidez, solicitar exames e, se normais, fazer o teste do progestogênio"
    ],
    reavaliar: [
      "Retorno com exames em 4–6 semanas",
      "Após teste do progestogênio: retorno em 2–3 semanas com o resultado"
    ],
    alta: [
      "Causa identificada e tratada na UBS (SOP, causa funcional, hiperprolactinemia medicamentosa): seguimento semestral a anual"
    ],
    observacao: ["—"],
    internacao: [
      "Transtorno alimentar com instabilidade clínica (bradicardia, hipotensão, distúrbio eletrolítico)"
    ],
    transferencia: [
      "Endocrinologia: prolactinoma, hipogonadismo hipogonadotrófico sem causa funcional, Cushing, tireoidopatia complexa, Sheehan",
      "Ginecologia: insuficiência ovariana prematura, suspeita de Asherman (histeroscopia), virilização",
      "Neurocirurgia/endocrinologia com prioridade: macroadenoma com alteração visual",
      "Saúde mental: transtorno alimentar"
    ]
  },
  prescricao: {
    ambulatorial: "TESTE DO PROGESTOGÊNIO (gravidez excluída)\nUSO ORAL\n1. Acetato de medroxiprogesterona 10 mg ------------ 10 comprimidos\n   Tomar 1 comprimido ao dia por 10 dias. Anotar se vier sangramento até 10 dias depois do último comprimido.\n\nTESTE DO ESTROGÊNIO + PROGESTOGÊNIO (se o anterior não der sangramento)\n2. Valerato de estradiol 2 mg ------------------- 21 comprimidos\n   Tomar 1 comprimido ao dia por 21 dias.\n3. Acetato de medroxiprogesterona 10 mg ------------ 10 comprimidos\n   Tomar 1 comprimido ao dia do 12º ao 21º dia (junto com o estradiol). Anotar se vier sangramento após terminar.\n\nPROTEÇÃO DO ENDOMÉTRIO NA ANOVULAÇÃO (sem uso de anticoncepcional)\n4. Acetato de medroxiprogesterona 10 mg ------------ 14 comprimidos\n   Tomar 1 comprimido ao dia por 14 dias, a cada 2 meses (ou todo mês), se não menstruar.\n\nHIPERPROLACTINEMIA (após excluir remédios e hipotireoidismo)\n5. Cabergolina 0,5 mg ----------------------------- 8 comprimidos\n   Tomar meio comprimido (0,25 mg) 2 vezes por semana (ex.: segunda e quinta), com alimento. Retornar com prolactina em 4 a 8 semanas."
  },
  orientacoesRetorno: [
    "Fazer o teste de gravidez sempre que a menstruação atrasar",
    "Anotar o calendário menstrual e trazer na consulta",
    "Depois do teste com comprimidos, anotar se veio sangramento e em que dia",
    "Manter peso saudável, alimentação adequada e exercício sem exageros; perder ou ganhar peso pode normalizar a menstruação",
    "Ficar sem menstruar não protege contra gravidez: usar método contraceptivo se não deseja engravidar",
    "Procurar atendimento se dor de cabeça forte e persistente, alteração da visão, saída de leite pelas mamas, dor na barriga com sangramento",
    "Retornar com os exames em 4–6 semanas"
  ],
  tabelas: [
    {
      titulo: "Raciocínio após excluir gravidez",
      colunas: ["Achado", "Provável causa", "Próximo passo"],
      linhas: [
        ["TSH alterado", "Tireoidopatia", "Tratar e reavaliar o ciclo"],
        ["Prolactina elevada", "Medicamento, hipotireoidismo, prolactinoma", "Repetir; RM de sela se sem causa"],
        ["Progestogênio positivo", "Anovulação normoestrogênica (SOP)", "Ver ficha SOP; proteger endométrio"],
        ["Progestogênio negativo + E+P positivo + FSH alto", "Insuficiência ovariana", "Repetir FSH; ginecologia; terapia hormonal"],
        ["Progestogênio negativo + E+P positivo + FSH baixo/normal", "Hipotalâmica/hipofisária", "Peso, exercício, estresse; RM se sem causa funcional"],
        ["E+P negativo", "Causa uterina (Asherman)", "Ginecologia — histeroscopia"]
      ]
    }
  ],
  fontes: [
    "FEBRASGO — Protocolo: Amenorreia (Protocolos FEBRASGO de Ginecologia)",
    "ASRM — Current evaluation of amenorrhea (Practice Committee, 2008, reafirmado)",
    "Endocrine Society — Functional hypothalamic amenorrhea: clinical practice guideline (2017)",
    "ESHRE/ASRM/CRE/IMS — Evidence-based guideline: Management of premature ovarian insufficiency (2024)",
    "Endocrine Society — Diagnosis and treatment of hyperprolactinemia (2011) e Pituitary Society — consenso de prolactinomas (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
