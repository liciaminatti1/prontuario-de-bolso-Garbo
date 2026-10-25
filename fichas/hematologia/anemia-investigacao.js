// Investigação inicial da anemia e de sangramento
registrarFicha({
  id: "anemia-investigacao",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Anemia no adulto: investigação inicial e busca de sangramento",
  resumo: "Roteiro para o adulto com hemoglobina baixa: confirmar anemia pelos cortes da OMS, classificar pelo VCM e reticulócitos, pedir os exames certos e procurar perda de sangue (digestiva, ginecológica, urinária) e causas carenciais, renais, inflamatórias, hemolíticas e medulares.",
  palavrasChave: "anemia investigacao hemoglobina baixa vcm microcitica macrocitica normocitica reticulocitos ferritina b12 folato hemolise sangramento oculto sangue oculto nas fezes endoscopia colonoscopia menorragia ancilostomo talassemia doenca cronica renal mielodisplasia pancitopenia",
  critico: {
    tempo: "Anemia sintomática ou bicitopenia: hoje",
    texto: "Hb < 7 g/dL com sintomas, sangramento ativo, instabilidade, dor torácica, ou anemia com plaquetopenia/leucopenia ou blastos → PS ou hematologia com urgência."
  },
  alarmes: [
    "Dispneia em repouso, dor torácica, síncope, taquicardia ou hipotensão (anemia descompensada)",
    "Sangramento ativo: melena, hematêmese, enterorragia, menorragia volumosa",
    "Pancitopenia, blastos no sangue periférico, leucocitose muito alta (leucemia, aplasia, mielodisplasia)",
    "Icterícia, urina escura, esplenomegalia, LDH alto (hemólise)",
    "Perda de peso, alteração do hábito intestinal, disfagia, massa abdominal, idade ≥ 50 anos com ferropenia (neoplasia digestiva)",
    "Neuropatia, ataxia ou confusão com macrocitose (deficiência grave de B12)",
    "Insuficiência renal aguda, hipercalcemia, dor óssea (mieloma)"
  ],
  condutaInicial: [
    "Confirmar anemia (OMS 2024): Hb < 13,0 g/dL em homens, < 12,0 g/dL em mulheres não gestantes; gestante < 11,0 (1º e 3º trimestres) e < 10,5 g/dL (2º)",
    "Avaliar gravidade e estabilidade: sintomas, FC, PA, sangramento ativo",
    "Hemograma completo com reticulócitos, ferritina, PCR e creatinina para todos",
    "Classificar pelo VCM: microcítica (< 80 fL), normocítica (80–100) ou macrocítica (> 100) e pelos reticulócitos (baixos = produção; altos = perda aguda ou hemólise)",
    "Olhar as outras séries: plaquetas e leucócitos alterados apontam para medula",
    "Ferropenia em homem ou mulher pós-menopausa = perda digestiva até prova em contrário: endoscopia digestiva alta e colonoscopia",
    "Pesquisar perdas ginecológicas (menstruação > 7 dias, coágulos, troca de absorvente a cada 1–2 h), urinária (hematúria) e parasitoses (ancilostomíase)"
  ],
  fataisExcluir: [
    "Hemorragia digestiva oculta ou ativa",
    "Câncer colorretal ou gástrico",
    "Leucemia aguda, aplasia de medula, mielodisplasia",
    "Hemólise grave (autoimune, microangiopática: plaquetopenia + esquizócitos = PTT/SHU, urgência)",
    "Mieloma múltiplo",
    "Deficiência grave de B12 com lesão neurológica"
  ],
  proximaDecisao: "Microcítica com ferritina baixa → ficha Anemia ferropriva e investigar a causa. Microcítica com ferritina normal → talassemia (eletroforese de hemoglobina) ou anemia da inflamação. Macrocítica → B12, folato, TSH, função hepática, álcool, drogas. Normocítica com reticulócitos baixos → DRC, inflamação, endócrina, medula. Reticulócitos altos → hemólise ou sangramento agudo.",
  clinica: {
    anamnese: [
      "Cansaço, dispneia aos esforços, palpitação, tontura, cefaleia, queda de cabelo, unhas frágeis, pica (gelo, terra), síndrome das pernas inquietas",
      "Sangramentos: fezes pretas ou com sangue, vômito com sangue, menstruação (duração, volume, coágulos), urina escura ou com sangue, epistaxe, gengivorragia, doação de sangue frequente",
      "Dieta (vegetariana, pouca carne), cirurgia bariátrica ou gastrectomia, doença celíaca, DII",
      "Uso de AINE, AAS, anticoagulante, antiagregante, IBP prolongado, metformina, metotrexato, hidroxiureia, zidovudina, anticonvulsivantes",
      "Álcool, hepatopatia, doença renal, hipotireoidismo, doenças inflamatórias crônicas, infecções (HIV, TB)",
      "Perda de peso, febre, sudorese noturna, dor óssea",
      "História familiar de anemia (talassemia, doença falciforme), origem étnica",
      "Andar descalço em área rural (ancilostomíase)"
    ],
    exameFisico: [
      "Palidez de mucosas e palmar, icterícia, glossite, queilite angular, coiloníquia",
      "FC, PA (incluindo postural), sopro sistólico de fluxo",
      "Linfonodomegalias, hepatomegalia, esplenomegalia",
      "Petéquias, equimoses (plaquetopenia)",
      "Toque retal se suspeita de sangramento baixo; exame ginecológico se sangramento uterino",
      "Exame neurológico: propriocepção, vibração, marcha (B12)"
    ],
    diferenciais: [
      { dx: "Anemia ferropriva", pista: "Microcítica, hipocrômica, RDW alto, ferritina baixa, plaquetas às vezes altas" },
      { dx: "Traço talassêmico", pista: "Microcitose acentuada com Hb pouco baixa, hemácias normais ou altas, RDW normal, ferritina normal; Mentzer (VCM/hemácias em milhões) < 13" },
      { dx: "Anemia da inflamação / doença crônica", pista: "Normo ou microcítica leve, ferritina normal ou alta, PCR alta, saturação de transferrina baixa" },
      { dx: "Anemia da doença renal crônica", pista: "Normocítica, reticulócitos baixos, TFG < 30–45" },
      { dx: "Deficiência de B12 ou folato", pista: "Macrocítica (VCM > 100, às vezes > 115), neutrófilos hipersegmentados, LDH alto; neuropatia na B12" },
      { dx: "Álcool, hepatopatia, hipotireoidismo", pista: "Macrocitose leve (VCM 100–110)" },
      { dx: "Hemólise", pista: "Reticulócitos altos, LDH e bilirrubina indireta altos, haptoglobina baixa; Coombs direto" },
      { dx: "Doença da medula (mielodisplasia, leucemia, aplasia, mieloma)", pista: "Outras citopenias, macrocitose sem causa em idoso, blastos, proteína monoclonal" }
    ],
    gravidade: [
      "OMS (adulto não gestante): leve — Hb 11,0–11,9 (mulher) ou 11,0–12,9 (homem); moderada — 8,0–10,9; grave — < 8,0 g/dL",
      "Instável ou sintomática em repouso: urgência independente do valor",
      "Anemia crônica bem tolerada com Hb baixa pode ser tratada sem transfusão se estável"
    ]
  },
  exames: [
    {
      nome: "Hemograma com reticulócitos",
      pedido: "Hemograma completo com contagem de reticulócitos e análise do esfregaço de sangue periférico.",
      porQue: "Confirmar, classificar (VCM, RDW) e ver as outras séries.",
      esperar: "VCM, HCM e RDW orientam o grupo da anemia.",
      interpretacao: "Reticulócitos baixos = falta de produção (carência, inflamação, rim, medula). Altos = hemólise ou sangramento agudo (ou resposta ao tratamento). Esquizócitos + plaquetopenia = urgência.",
      limitacoes: "Anemia mista (ferro + B12) pode ter VCM normal com RDW muito alto."
    },
    {
      nome: "Perfil de ferro",
      pedido: "Ferritina, ferro sérico, transferrina (ou capacidade total de ligação do ferro) e saturação de transferrina, PCR.",
      porQue: "Diagnosticar deficiência de ferro e separar da anemia da inflamação.",
      esperar: "Ferropenia: ferritina baixa, saturação < 20%.",
      interpretacao: "Ferritina < 30 ng/mL confirma deficiência no adulto (OMS usa < 15 em pessoa saudável). Com inflamação (PCR alta), ferritina até 70–100 ng/mL ainda pode ser ferropenia se saturação < 20%.",
      limitacoes: "Ferritina sobe em inflamação, infecção, hepatopatia e neoplasia."
    },
    {
      nome: "Macrocitose",
      pedido: "Vitamina B12, ácido fólico sérico, TSH, TGO, TGP, GGT, bilirrubinas.",
      porQue: "Causas de macrocitose.",
      esperar: "B12 < 200 pg/mL = deficiência provável; 200–300 = limítrofe.",
      interpretacao: "B12 limítrofe com sintomas: tratar ou dosar ácido metilmalônico. GGT alta: álcool.",
      limitacoes: "Folato sérico cai rápido com dieta recente; B12 pode ser falsamente normal."
    },
    {
      nome: "Hemólise",
      pedido: "LDH, bilirrubinas totais e frações, haptoglobina, teste de Coombs direto.",
      porQue: "Reticulócitos altos sem sangramento.",
      esperar: "Hemólise: LDH e bilirrubina indireta altos, haptoglobina baixa.",
      interpretacao: "Coombs positivo = autoimune. Negativo com esquizócitos = microangiopática (urgência).",
      limitacoes: "—"
    },
    {
      nome: "Busca de sangramento e outras causas",
      pedido: "Pesquisa de sangue oculto nas fezes (imunoquímico, se disponível), exame parasitológico de fezes (3 amostras), urina tipo 1, creatinina, anticorpo antitransglutaminase IgA com IgA total. Endoscopia digestiva alta e colonoscopia se ferropenia em homem, mulher pós-menopausa ou ≥ 50 anos. Ultrassonografia transvaginal se sangramento uterino anormal. Eletroforese de hemoglobina se microcitose com ferritina normal. Eletroforese de proteínas se > 50 anos com anemia sem causa, insuficiência renal ou hipercalcemia.",
      porQue: "Achar a causa: perda digestiva (úlcera, câncer, angiodisplasia, parasitose), ginecológica, urinária, doença celíaca, talassemia, mieloma.",
      esperar: "Na ferropenia de homem e mulher pós-menopausa, a causa digestiva é a mais comum.",
      interpretacao: "Sangue oculto negativo NÃO dispensa endoscopia e colonoscopia na ferropenia de homem ou mulher pós-menopausa. Antitransglutaminase positivo → endoscopia com biópsia de duodeno.",
      limitacoes: "Mulher pré-menopausa com menorragia e sem sintomas digestivos: endoscopia só se ≥ 50 anos, sintomas digestivos, história familiar de câncer colorretal ou falha do ferro."
    }
  ],
  tratamento: [
    {
      droga: "Sulfato ferroso (ferropenia confirmada)",
      linha: "l1",
      dose: "40–120 mg de ferro elementar/dia (1 a 3 comprimidos de 40 mg) ou em dias alternados",
      via: "VO",
      intervalo: "1 vez ao dia ou em dias alternados, em jejum ou entre refeições",
      duracao: "Até normalizar Hb e mais 3 meses",
      monitorizacao: "Hemoglobina em 2–4 semanas",
      contraindicacoes: "Anemia não ferropriva, hemocromatose",
      ajustes: "Detalhes, ferro IV e transfusão: ficha Anemia ferropriva. RENAME"
    },
    {
      droga: "Cianocobalamina (deficiência de B12)",
      linha: "l1",
      dose: "Sem sintoma neurológico, sem anemia grave e com boa adesão: 1.000–2.000 mcg VO 1×/dia (sem injeções). Demais casos: 1.000 mcg IM em dias alternados por 2 semanas (6 aplicações), depois 1×/mês",
      via: "IM ou VO",
      intervalo: "Conforme esquema",
      duracao: "Por toda a vida se anemia perniciosa, gastrectomia ou bariátrica",
      monitorizacao: "Reticulócitos em 7–10 dias; Hb em 4–8 semanas; potássio se anemia grave (cai no início)",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Esquema escolhido por exigir menos aplicações e idas à unidade (detalhes na ficha anemia-megaloblastica). Com sintomas neurológicos: IM em dias alternados até parar de melhorar (orientação de especialista). Tratar B12 antes ou junto com folato. RENAME"
    },
    {
      droga: "Ácido fólico (deficiência de folato)",
      linha: "l1",
      dose: "5 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "4 meses (contínuo se causa persistente: hemólise crônica)",
      monitorizacao: "Hemograma",
      contraindicacoes: "Deficiência de B12 não tratada (pode piorar a lesão neurológica)",
      ajustes: "Sempre dosar B12 antes. RENAME"
    },
    {
      droga: "Albendazol (ancilostomíase)",
      linha: "adj",
      dose: "400 mg",
      via: "VO",
      intervalo: "Dose única",
      duracao: "Dose única (repetir conforme parasitológico)",
      monitorizacao: "Parasitológico de controle",
      contraindicacoes: "Gestação no 1º trimestre",
      ajustes: "Tratar se parasitológico positivo ou empiricamente em área endêmica conforme protocolo local. RENAME"
    },
    {
      droga: "Transfusão de concentrado de hemácias",
      linha: "adj",
      dose: "1 unidade e reavaliar",
      via: "IV",
      intervalo: "Conforme clínica",
      duracao: "—",
      monitorizacao: "Sinais vitais, sobrecarga de volume",
      contraindicacoes: "Paciente estável e assintomático com anemia carencial tratável",
      ajustes: "Estratégia restritiva: Hb < 7 g/dL (< 8 g/dL se doença cardiovascular ou cirurgia ortopédica), ou sintomas/instabilidade. Encaminhar ao PS/hospital"
    }
  ],
  destino: {
    agora: [
      "Estável: investigação e tratamento na UBS",
      "Instável, sangramento ativo, sintomas em repouso, Hb < 7 g/dL sintomática → PS"
    ],
    reavaliar: [
      "Resultados em 1–2 semanas",
      "Resposta ao tratamento em 2–4 semanas (ferro) ou 1–2 semanas com reticulócitos (B12)"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Anemia descompensada, sangramento digestivo ativo, hemólise grave, suspeita de leucemia aguda ou PTT (via PS)"
    ],
    transferencia: [
      "Gastroenterologia/endoscopia: ferropenia em homem, mulher pós-menopausa, ≥ 50 anos, sintomas digestivos, sangue oculto positivo, antitransglutaminase positivo (prioridade se sinais de alarme)",
      "Ginecologia: sangramento uterino anormal com falha do tratamento clínico ou alteração no ultrassom",
      "Hematologia: bicitopenia ou pancitopenia, hemólise, macrocitose sem causa, suspeita de mielodisplasia ou mieloma, talassemia com dúvida, anemia sem causa após investigação",
      "Nefrologia: anemia da DRC (avaliar eritropoetina)"
    ]
  },
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — INVESTIGAÇÃO DE ANEMIA (adulto)\n1ª etapa (todos):\nHemograma completo com reticulócitos e esfregaço; ferritina, ferro sérico, saturação de transferrina; PCR; creatinina; urina tipo 1.\nConforme o VCM:\n- Microcítica: parasitológico de fezes (3 amostras); sangue oculto nas fezes; antitransglutaminase IgA + IgA total; eletroforese de hemoglobina se ferritina normal.\n- Macrocítica: vitamina B12, ácido fólico, TSH, TGO, TGP, GGT, bilirrubinas.\n- Normocítica com reticulócitos altos: LDH, bilirrubinas, haptoglobina, Coombs direto.\n- > 50 anos sem causa / insuficiência renal / hipercalcemia: eletroforese de proteínas séricas, cálcio.\nEncaminhamento: endoscopia digestiva alta e colonoscopia se ferropenia em homem ou mulher pós-menopausa.\nHD: Anemia a esclarecer (CID D64.9).\n\nTRATAMENTO CONFORME CAUSA (exemplos)\nUSO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ------ 60 comprimidos\n   Tomar 1 comprimido 1 a 2 vezes ao dia (ou 2 comprimidos em dias alternados), 1 hora antes das refeições, com suco de fruta cítrica. Ver ficha Anemia ferropriva.\n2. Albendazol 400 mg ----------------------------- 1 comprimido\n   Tomar 1 comprimido em dose única (se parasitológico positivo para ancilostomídeo ou conforme protocolo local).\n\nUSO INTRAMUSCULAR (se deficiência de B12)\n3. Cianocobalamina 1.000 mcg/mL ----------------- 12 ampolas\n   Aplicar 1 ampola IM por dia por 7 dias; depois 1 por semana por 4 semanas; depois 1 por mês.\n\nUSO ORAL (se deficiência de folato, com B12 normal)\n4. Ácido fólico 5 mg ----------------------------- 120 comprimidos\n   Tomar 1 comprimido por dia por 4 meses."
  },
  orientacoesRetorno: [
    "Faça todos os exames pedidos; descobrir a causa da anemia é tão importante quanto tratá-la",
    "Evite anti-inflamatórios e AAS sem orientação",
    "Volte imediatamente ou procure o PS se: falta de ar em repouso, dor no peito, desmaio, fezes pretas ou com sangue, vômito com sangue, sangramento menstrual muito intenso, pele ou olhos amarelos",
    "Retorno em 1–2 semanas com os resultados; depois conforme a causa"
  ],
  tabelas: [
    {
      titulo: "Anemia pelo VCM — causas e exames-chave",
      colunas: ["VCM", "Causas principais", "Exames-chave"],
      linhas: [
        ["< 80 fL (microcítica)", "Ferropenia, talassemia, doença crônica, sideroblástica", "Ferritina, saturação de transferrina, PCR, eletroforese de Hb"],
        ["80–100 fL (normocítica)", "Doença crônica, DRC, sangramento agudo, hemólise, endócrina, medula, mista", "Reticulócitos, creatinina, PCR, LDH, Coombs, TSH"],
        ["> 100 fL (macrocítica)", "B12, folato, álcool, hepatopatia, hipotireoidismo, drogas, mielodisplasia, reticulocitose", "B12, folato, TSH, função hepática, reticulócitos"]
      ],
      nota: "Cortes de anemia: OMS 2024. Ferropenia em homem e mulher pós-menopausa: endoscopia alta e colonoscopia (BSG 2021)."
    }
  ],
  fontes: [
    "OMS — Guideline on haemoglobin cutoffs to define anaemia in individuals and populations (2024)",
    "OMS — Guideline on use of ferritin concentrations to assess iron status (2020)",
    "British Society of Gastroenterology — Guidelines for the management of iron deficiency anaemia in adults (Gut, 2021)",
    "AABB/ICTMG — International guidelines for red blood cell transfusion (JAMA, 2023)",
    "Ministério da Saúde — Guia para uso de hemocomponentes (2015) e RENAME (versão vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.1"
});
