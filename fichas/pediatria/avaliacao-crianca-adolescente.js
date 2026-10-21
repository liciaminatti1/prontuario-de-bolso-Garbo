// Avaliação clínica da criança e do adolescente (inclui HEEADSSS)
registrarFicha({
  id: "avaliacao-crianca-adolescente",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Avaliação clínica da criança e do adolescente (consulta do adolescente / HEEADSSS)",
  resumo: "Roteiro da consulta pediátrica geral e da consulta do adolescente (10 a 19 anos): anamnese por faixa etária, exame físico, estadiamento puberal, rastreios e entrevista psicossocial HEEADSSS com confidencialidade.",
  palavrasChave: "consulta pediatrica anamnese exame fisico crianca adolescente heeadsss heads confidencialidade tanner puberdade estadiamento hebiatria saude do adolescente caderneta do adolescente risco suicida drogas sexualidade",
  critico: {
    tempo: "Risco de suicídio: perguntar sempre",
    texto: "Em todo adolescente, perguntar diretamente sobre humor, autolesão e ideação suicida. Ideação com plano ou tentativa recente: não liberar sozinho; acionar responsável, CAPS/emergência no mesmo dia."
  },
  alarmes: [
    "Ideação suicida com plano, tentativa recente ou autolesão grave",
    "Suspeita de violência física, sexual ou negligência (notificação compulsória e Conselho Tutelar)",
    "Gestação na adolescência, especialmente < 14 anos (presunção legal de estupro de vulnerável: notificar e acionar rede de proteção)",
    "Perda de peso importante com restrição alimentar, vômitos provocados ou bradicardia (transtorno alimentar)",
    "Uso de substâncias com intoxicação, dependência ou situação de risco (direção, armas)",
    "Puberdade precoce (meninas < 8 anos; meninos < 9 anos) ou atrasada (sem sinais aos 13 anos nas meninas e aos 14 nos meninos)",
    "PA ≥ percentil 95 para idade, sexo e estatura (ou ≥ 130/80 mmHg a partir de 13 anos) confirmada"
  ],
  conduta: [
    "Criança: entrevistar o cuidador e, conforme a idade, a própria criança; queixa, história da doença, antecedentes (gestação, parto, neonatal), vacinas, alimentação, desenvolvimento, escola, sono, telas, contexto familiar",
    "Adolescente: iniciar com o responsável (história, antecedentes) e depois conversar a sós com o adolescente; explicar a confidencialidade e seus limites (risco de vida próprio ou de terceiros, abuso)",
    "Aplicar HEEADSSS na conversa a sós (ver tabela); começar pelos temas menos sensíveis (casa, escola) e terminar nos mais sensíveis (sexualidade, suicídio)",
    "Exame físico completo com acompanhante ou profissional de saúde presente no exame de mamas e genitália; respeitar pudor e explicar cada etapa",
    "Antropometria: peso, estatura e IMC nas curvas da OMS; PA anual a partir de 3 anos (tabela por percentil de estatura); estadiamento de Tanner",
    "Rastreios conforme idade e risco: acuidade visual (escala de Snellen) a partir de 3–4 anos; saúde bucal; perfil lipídico uma vez entre 9 e 11 anos (antes se risco); IST/HIV/sífilis se vida sexual ativa",
    "Vacinas: conferir HPV (9–14 anos), meningocócica ACWY (11–14 anos), dT/dTpa, febre amarela, hepatite B, dengue (10–14 anos, conforme oferta)",
    "Oferecer orientação sobre contracepção, preservativo, prevenção de violência, uso de álcool/tabaco/vape; registrar e combinar retorno"
  ],
  exames: [
    "Não há exames laboratoriais de rotina obrigatórios na criança ou adolescente saudável",
    "Perfil lipídico: universal uma vez entre 9 e 11 anos (SBP/SBC); a partir de 2 anos se história familiar de dislipidemia ou doença cardiovascular precoce, obesidade, DM, HAS",
    "Obesidade: glicemia de jejum (ou HbA1c), perfil lipídico, ALT/TGP",
    "Vida sexual ativa: testes rápidos de HIV, sífilis, hepatites B e C; beta-hCG se atraso menstrual",
    "Hemograma se palidez, sangramento menstrual intenso, dieta restritiva",
    "Parasitológico de fezes se sintomas ou área de risco"
  ],
  diferenciais: [
    "Queixas somáticas recorrentes (cefaleia, dor abdominal) podem ser apresentação de ansiedade, depressão, bullying ou violência",
    "Baixo rendimento escolar: considerar déficit visual/auditivo, TDAH, dificuldade de aprendizagem, depressão, uso de drogas, violência doméstica"
  ],
  prescricao: {
    ambulatorial: "ADOLESCENTE — ORIENTAÇÕES E PREVENÇÃO (adaptar)\n1. Vacinas: atualizar conforme Caderneta (HPV dose única 9–14 anos; meningocócica ACWY 11–14 anos; dT a cada 10 anos).\n2. Preservativo masculino/feminino ----------------- disponível na UBS\n   Usar em todas as relações sexuais.\n3. Contracepção: oferecer métodos de longa duração (DIU de cobre, implante quando disponível) e outros conforme escolha (ver ficha anticoncepcao).\n4. Testes rápidos de HIV, sífilis e hepatites B e C se vida sexual ativa.\n5. Atividade física: pelo menos 60 minutos por dia de atividade moderada a vigorosa.\n6. Sono: 8 a 10 horas por noite (13–18 anos); telas fora do quarto à noite.\n\nCRIANÇA EM IDADE ESCOLAR\n1. Higiene bucal com creme dental com flúor (1.000–1.500 ppm), 2 vezes ao dia; consulta odontológica anual.\n2. Alimentação: evitar ultraprocessados e bebidas açucaradas; refeições em família, sem telas."
  },
  orientacoesRetorno: [
    "O que o adolescente contar na consulta é sigiloso, exceto se houver risco à vida dele ou de outras pessoas, ou abuso",
    "Procurar a UBS a qualquer momento, inclusive sem o responsável, para dúvidas sobre sexualidade, contracepção, uso de drogas ou tristeza",
    "Procurar ajuda imediata (UPA, SAMU 192, CVV 188) se pensamentos de se machucar ou de morrer",
    "Retorno anual para consulta de rotina; antes, se queixa nova ou conforme exames pedidos"
  ],
  encaminhar: [
    "CAPS / CAPSi ou emergência psiquiátrica no mesmo dia: ideação suicida com plano, tentativa, psicose",
    "Conselho Tutelar e notificação no SINAN: suspeita ou confirmação de violência contra criança/adolescente (obrigatório pelo ECA)",
    "Endocrinologia pediátrica: puberdade precoce ou atrasada, baixa estatura com velocidade de crescimento reduzida",
    "Ginecologia / pré-natal de alto risco: gestação na adolescência",
    "Nutrição / equipe multiprofissional: obesidade ou suspeita de transtorno alimentar"
  ],
  tabelas: [
    {
      titulo: "HEEADSSS — roteiro da entrevista psicossocial do adolescente",
      colunas: ["Domínio", "Exemplos de perguntas"],
      linhas: [
        ["H — Home (casa)", "Com quem você mora? Como é a convivência? Já houve violência em casa? Já fugiu de casa?"],
        ["E — Education/Employment (escola/trabalho)", "Está estudando? Como estão as notas? Repetiu de ano? Sofre bullying? Trabalha?"],
        ["E — Eating (alimentação)", "O que acha do seu corpo? Faz dieta, jejum, vomita ou usa laxante para emagrecer?"],
        ["A — Activities (atividades)", "O que faz no tempo livre? Amigos? Esportes? Quanto tempo de tela e redes sociais?"],
        ["D — Drugs (drogas)", "Seus amigos usam cigarro, vape, álcool ou outras drogas? E você? Com que frequência?"],
        ["S — Sexuality (sexualidade)", "Já teve relações sexuais? Com quem? Usa preservativo e contraceptivo? Já foi forçado(a) a algo?"],
        ["S — Suicide/depression (humor)", "Tem se sentido triste ou sem vontade? Já pensou em se machucar ou em morrer? Tem plano?"],
        ["S — Safety (segurança)", "Usa cinto e capacete? Anda com quem dirige alcoolizado? Tem acesso a armas? Sofre violência on-line?"]
      ],
      nota: "Conversar a sós com o adolescente, em linguagem neutra e sem julgamento. Estatuto da Criança e do Adolescente e Código de Ética Médica garantem sigilo, exceto quando houver risco."
    },
    {
      titulo: "Estadiamento de Tanner (resumo)",
      colunas: ["Estágio", "Mamas (M) — meninas", "Genitália (G) — meninos", "Pelos pubianos (P)"],
      linhas: [
        ["1", "Pré-puberal", "Pré-puberal (testículo < 4 mL)", "Ausentes"],
        ["2", "Broto mamário (telarca)", "Aumento testicular (≥ 4 mL), pele escrotal mais fina e avermelhada", "Poucos, finos, na base do pênis ou grandes lábios"],
        ["3", "Mama e aréola aumentadas, sem separação de contornos", "Aumento do pênis em comprimento", "Mais escuros e grossos, sobre o púbis"],
        ["4", "Aréola e papila em elevação secundária", "Aumento do pênis em diâmetro, glande desenvolvida", "Tipo adulto, sem atingir coxas"],
        ["5", "Mama adulta", "Genitália adulta", "Tipo adulto, atinge face interna das coxas"]
      ],
      nota: "Menarca ocorre em geral cerca de 2 anos após a telarca (M3–M4). Estirão: meninas em M2–M3; meninos em G3–G4."
    }
  ],
  fontes: [
    "Ministério da Saúde — Proteger e Cuidar da Saúde de Adolescentes na Atenção Básica, 2ª ed. (2018); Caderneta de Saúde do Adolescente (edição vigente)",
    "SBP — Departamento Científico de Adolescência: Consulta do adolescente (documentos científicos 2019–2024)",
    "Klein DA, Goldenring JM, Adelman WP — HEEADSSS 3.0 (Contemporary Pediatrics, 2014)",
    "AAP — Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents (2017)",
    "SBP/SBC — Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose: crianças e adolescentes (2017; Diretriz SBC 2025)",
    "Estatuto da Criança e do Adolescente (Lei 8.069/1990); Código de Ética Médica (Resolução CFM 2.217/2018, art. 74)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
