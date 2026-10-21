// Osteoartrite (artrose)
registrarFicha({
  id: "osteoartrite",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Osteoartrite (artrose)",
  resumo: "Dor articular mecânica em pessoa ≥ 45 anos (joelho, quadril, mãos, coluna), que piora com o uso e melhora com repouso, com rigidez matinal curta. Diagnóstico clínico. Base do tratamento: educação, exercício e perda de peso; AINE tópico e oral em dose baixa por pouco tempo; infiltração com corticoide em crises.",
  palavrasChave: "osteoartrite artrose osteoartrose gonartrose coxartrose rizartrose nodulos heberden bouchard dor joelho dor quadril crepitacao ibuprofeno naproxeno diclofenaco gel paracetamol duloxetina infiltracao triancinolona fisioterapia exercicio protese",
  critico: {
    tempo: "Articulação quente: pensar artrite séptica",
    texto: "Monoartrite aguda, quente e vermelha, com febre ou incapacidade de apoiar, não é artrose: puncionar ou encaminhar ao PS no mesmo dia (artrite séptica, gota, pseudogota)."
  },
  alarmes: [
    "Articulação quente, vermelha, com derrame volumoso e febre (artrite séptica)",
    "Dor noturna intensa, perda de peso, febre, neoplasia prévia (tumor, metástase)",
    "Rigidez matinal > 1 hora, poliartrite de pequenas articulações das mãos, punhos (artrite reumatoide)",
    "Piora rápida em semanas, deformidade nova, instabilidade, bloqueio articular",
    "Dor no quadril com incapacidade súbita de apoiar após queda (fratura de colo de fêmur)",
    "Dor no quadril em usuário de corticoide ou álcool (necrose avascular)"
  ],
  condutaInicial: [
    "Diagnóstico clínico: ≥ 45 anos, dor com o uso e rigidez matinal ≤ 30 min; radiografia não é obrigatória no quadro típico",
    "Avaliar dor (0–10), função, impacto no trabalho e sono, peso, humor",
    "Educação: doença crônica, não é 'desgaste' inevitável; atividade física ajuda e não piora a articulação",
    "Exercício (fortalecimento + aeróbico), perda de peso se sobrepeso (≥ 5–10% do peso), bengala na mão oposta se joelho/quadril",
    "Dor: AINE tópico (joelho, mãos) → AINE oral na menor dose pelo menor tempo; paracetamol só em uso limitado",
    "Crise com derrame no joelho: infiltração intra-articular com corticoide",
    "Encaminhar para ortopedia se dor e limitação graves refratárias ao tratamento clínico (avaliar prótese)"
  ],
  fataisExcluir: [
    "Artrite séptica",
    "Fratura (colo do fêmur, platô tibial, insuficiência)",
    "Tumor ósseo ou metástase",
    "Necrose avascular da cabeça do fêmur",
    "Dor referida (quadril → joelho; coluna lombar → quadril)"
  ],
  proximaDecisao: "Sem melhora após 3 meses de exercício, perda de peso e analgesia adequada → fisioterapia supervisionada, considerar duloxetina e infiltração. Dor grave com limitação importante da vida diária apesar disso → ortopedia para avaliar artroplastia.",
  clinica: {
    anamnese: [
      "Articulações acometidas, tempo de evolução, padrão mecânico (piora com uso, melhora com repouso)",
      "Rigidez matinal (≤ 30 min na artrose; > 1 h sugere inflamatória)",
      "Limitação funcional: subir escada, levantar da cadeira, caminhar, cuidar de si",
      "Bloqueio ou falseio do joelho (lesão meniscal ou ligamentar)",
      "Comorbidades que limitam AINE: HAS, DRC, IC, úlcera péptica, sangramento, anticoagulante, idade > 65",
      "Tratamentos já usados e resposta"
    ],
    exameFisico: [
      "Peso, IMC, marcha",
      "Joelho: crepitação, aumento ósseo, derrame (pequeno, frio), dor à palpação da interlinha, desvio em varo/valgo, limitação de flexão",
      "Quadril: dor na virilha à rotação interna, limitação da rotação interna e da flexão",
      "Mãos: nódulos de Heberden (interfalângicas distais) e Bouchard (proximais), rizartrose (base do polegar)",
      "Sinais inflamatórios intensos (calor, eritema) não são típicos: investigar outra causa"
    ],
    diferenciais: [
      { dx: "Artrite reumatoide", pista: "Poliartrite simétrica de mãos e punhos, rigidez > 1 h, edema mole, FR/anti-CCP" },
      { dx: "Gota / pseudogota", pista: "Crise aguda, articulação muito inflamada; cristais no líquido sinovial" },
      { dx: "Artrite séptica", pista: "Monoartrite quente com febre" },
      { dx: "Bursite anserina / trocantérica", pista: "Dor à palpação localizada fora da articulação" },
      { dx: "Lesão meniscal", pista: "Bloqueio, falseio, dor na interlinha após torção" },
      { dx: "Radiculopatia lombar", pista: "Dor que irradia abaixo do joelho com parestesia" }
    ],
    gravidade: [
      "Leve: dor intermitente, função preservada",
      "Moderada: dor frequente, limita algumas atividades, precisa de analgesia regular",
      "Grave: dor em repouso e noturna, limitação importante da marcha e das atividades básicas, falha do tratamento clínico",
      "Radiografia (Kellgren-Lawrence 0–4) não se correlaciona bem com a dor; tratar o paciente, não a imagem"
    ]
  },
  exames: [
    {
      nome: "Radiografia da articulação",
      pedido: "Radiografia de joelhos com carga (AP em pé e perfil) / radiografia de bacia em AP e quadril em perfil. HD: osteoartrite.",
      porQue: "Quadro atípico, dúvida diagnóstica ou planejamento cirúrgico.",
      esperar: "Redução do espaço articular, osteófitos, esclerose subcondral, cistos.",
      interpretacao: "Alterações graves com dor refratária reforçam encaminhamento para prótese.",
      limitacoes: "Não é necessária para diagnosticar quadro típico em ≥ 45 anos. Ressonância não é indicada de rotina."
    },
    {
      nome: "Exames laboratoriais",
      pedido: "Hemograma, VHS, PCR. Se suspeita inflamatória: fator reumatoide, anti-CCP. Antes de AINE prolongado: creatinina.",
      porQue: "Excluir artrite inflamatória e avaliar segurança do AINE.",
      esperar: "Normais na osteoartrite.",
      interpretacao: "VHS/PCR elevados ou FR/anti-CCP positivos → pensar artrite inflamatória.",
      limitacoes: "FR positivo em baixos títulos é comum em idosos."
    },
    {
      nome: "Análise do líquido sinovial",
      pedido: "Artrocentese com análise do líquido sinovial: citologia total e diferencial, pesquisa de cristais, Gram e cultura.",
      porQue: "Derrame inflamatório ou suspeita de infecção ou cristais.",
      esperar: "Artrose: < 2.000 leucócitos/mm³, viscoso, claro.",
      interpretacao: "> 2.000 = inflamatório; > 50.000 = suspeita de séptica; cristais = gota/pseudogota.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Exercício e perda de peso",
      linha: "l1",
      dose: "Fortalecimento de quadríceps e glúteos + aeróbico (caminhada, bicicleta, hidroginástica) ≥ 150 min/semana conforme tolerância; perda de ≥ 5–10% do peso",
      via: "—",
      intervalo: "Regular",
      duracao: "Contínuo",
      monitorizacao: "Dor e função a cada consulta",
      contraindicacoes: "—",
      ajustes: "Recomendação forte em todas as diretrizes. Pode ser feito em grupo na UBS/academia da saúde"
    },
    {
      droga: "Diclofenaco gel 1% (AINE tópico)",
      linha: "l1",
      dose: "Aplicar 2–4 g na articulação",
      via: "Tópica",
      intervalo: "De 6 em 6 a 8 em 8 horas",
      duracao: "2–4 semanas, repetir em crises",
      monitorizacao: "Irritação local",
      contraindicacoes: "Pele lesada",
      ajustes: "1ª escolha para joelho e mãos, sobretudo em idosos e com comorbidades; pouca absorção sistêmica"
    },
    {
      droga: "Ibuprofeno (AINE oral)",
      linha: "l1",
      dose: "400–600 mg (máx 2.400 mg/dia; preferir ≤ 1.200 mg/dia)",
      via: "VO",
      intervalo: "De 8 em 8 horas, após refeição",
      duracao: "Menor tempo possível (7–14 dias nas crises)",
      monitorizacao: "PA, creatinina, sintomas dispépticos, edema",
      contraindicacoes: "ClCr < 30, IC descompensada, úlcera ativa ou sangramento GI, anticoagulante, gestação ≥ 20 semanas, asma induzida por AINE",
      ajustes: "Idoso > 65, úlcera prévia ou uso de AAS/corticoide: associar omeprazol 20 mg/dia. Alternativa: naproxeno 250–500 mg 12/12 h (menor risco CV entre os não seletivos). Celecoxibe 100–200 mg/dia é opção fora do SUS (menos efeito GI)"
    },
    {
      droga: "Paracetamol",
      linha: "alt",
      dose: "500–1.000 mg (máx 3 g/dia; 2 g/dia se hepatopatia, etilismo ou desnutrição)",
      via: "VO",
      intervalo: "De 6 em 6 a 8 em 8 horas",
      duracao: "Uso limitado; manter só se houver benefício claro",
      monitorizacao: "Função hepática se uso prolongado",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Efeito pequeno na artrose; útil quando AINE contraindicado"
    },
    {
      droga: "Duloxetina",
      linha: "adj",
      dose: "30 mg/dia por 1 semana; depois 60 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Avaliar após 8–12 semanas",
      monitorizacao: "Náusea, sonolência, PA",
      contraindicacoes: "ClCr < 30, hepatopatia, IMAO",
      ajustes: "Recomendação condicional (ACR 2019). Útil com dor crônica disseminada ou depressão. Não disponível no SUS"
    },
    {
      droga: "Triancinolona hexacetonida (infiltração intra-articular)",
      linha: "adj",
      dose: "Joelho: 20–40 mg (1–2 mL da suspensão 20 mg/mL)",
      via: "Intra-articular",
      intervalo: "Não repetir antes de 3 meses (máx 3–4 por ano na mesma articulação)",
      duracao: "Efeito de semanas",
      monitorizacao: "Glicemia em diabéticos (sobe por alguns dias)",
      contraindicacoes: "Infecção local ou sistêmica, prótese, coagulopatia não controlada",
      ajustes: "Recomendação forte para joelho e quadril (quadril guiado por imagem). Alternativa: metilprednisolona acetato 40 mg"
    },
    {
      droga: "Tramadol",
      linha: "adj",
      dose: "50 mg (máx 400 mg/dia; 300 mg > 75 anos)",
      via: "VO",
      intervalo: "De 8 em 8 horas se dor",
      duracao: "Curto prazo",
      monitorizacao: "Náusea, tontura, constipação, quedas",
      contraindicacoes: "Epilepsia, IMAO; cautela com ISRS/IRSN",
      ajustes: "Recomendação condicional; evitar uso crônico. Outros opioides não são recomendados"
    },
    {
      droga: "Glucosamina, condroitina, ácido hialurônico, colágeno",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício clínico relevante comprovado",
      ajustes: "ACR 2019: recomenda contra glucosamina; contra condroitina e hialurônico no joelho e quadril (condroitina tem recomendação condicional a favor apenas na artrose de mãos)"
    }
  ],
  destino: {
    agora: [
      "Tratamento na UBS com plano de exercício, perda de peso e analgesia"
    ],
    reavaliar: [
      "4–6 semanas após mudança de tratamento",
      "Depois a cada 3–6 meses"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: [
      "Fisioterapia/NASF-AB (eMulti): todos os casos moderados e graves",
      "Ortopedia: dor grave e limitação funcional refratárias ao tratamento clínico (avaliar artroplastia), deformidade progressiva, instabilidade, bloqueio",
      "Reumatologia: suspeita de artrite inflamatória"
    ]
  },
  prescricao: {
    ambulatorial: "OSTEOARTRITE — CRISE DE DOR\nUSO TÓPICO\n1. Diclofenaco dietilamônio gel 1% --------------- 1 bisnaga 60 g\n   Aplicar na articulação dolorida 3 a 4 vezes ao dia, massageando, por até 14 dias. Lavar as mãos após (exceto se for tratar as mãos).\n\nUSO ORAL\n2. Ibuprofeno 600 mg ------------------------------ 21 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 7 dias. Não usar junto com outros anti-inflamatórios.\n3. Omeprazol 20 mg -------------------------------- 7 cápsulas\n   Tomar 1 cápsula em jejum por 7 dias (se > 65 anos, úlcera prévia, AAS ou corticoide).\n4. Paracetamol 500 mg ----------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 8 em 8 horas se dor (máximo 6 comprimidos por dia).\n\nNÃO USAR ANTI-INFLAMATÓRIO ORAL SE: insuficiência renal, insuficiência cardíaca, úlcera ou sangramento digestivo, anticoagulante, gestação. Nesses casos, usar só gel e paracetamol.\n\nORIENTAÇÕES / ATIVIDADE FÍSICA\n5. Exercícios de fortalecimento das coxas e caminhada leve todos os dias, aumentando aos poucos. Encaminhamento para fisioterapia/grupo de atividade física.\n6. Bengala na mão do lado oposto ao joelho/quadril doloroso, se necessário.\n\nINFILTRAÇÃO (procedimento na UBS ou ambulatório)\nTriancinolona hexacetonida 20 mg/mL — 1 a 2 mL intra-articular no joelho ___, técnica asséptica. Repouso relativo por 24–48 h."
  },
  orientacoesRetorno: [
    "Artrose tem tratamento: exercício e perda de peso são o que mais ajuda; movimentar a articulação não piora a doença",
    "Use o gel primeiro; o anti-inflamatório em comprimido deve ser por poucos dias",
    "Gelo (15 minutos, protegido por pano) nas crises; calor local para rigidez",
    "Calçado confortável, evitar ficar de cócoras e carregar peso excessivo",
    "Volte antes se: articulação muito quente, vermelha e inchada, febre, dor que não deixa apoiar, fezes pretas ou dor de estômago com o anti-inflamatório",
    "Retorno em 4–6 semanas para avaliar a resposta"
  ],
  fontes: [
    "Ministério da Saúde/CONITEC — Diretrizes Brasileiras para o tratamento não cirúrgico da osteoartrite de joelho e de quadril (relatórios CONITEC, 2024)",
    "ACR/Arthritis Foundation — Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee (2019)",
    "OARSI — Guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis (2019)",
    "NICE NG226 — Osteoarthritis in over 16s: diagnosis and management (2022)",
    "SBR — Recomendações para o tratamento da osteoartrite de joelho (Rev Bras Reumatol / Adv Rheumatol, versão vigente)",
    "Ministério da Saúde — RENAME (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
