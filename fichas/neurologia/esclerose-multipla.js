// Doenças desmielinizantes: esclerose múltipla, NMOSD, ADEM
registrarFicha({
  id: "esclerose-multipla",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Esclerose múltipla e doenças desmielinizantes (NMOSD, MOGAD, ADEM)",
  resumo: "Déficit neurológico subagudo (neurite óptica, mielite, síndrome de tronco) em adulto jovem: pensar em doença desmielinizante. Excluir pseudossurto e diferenciais, tratar surto incapacitante com pulsoterapia e encaminhar para diagnóstico (McDonald) e terapia modificadora.",
  palavrasChave: "esclerose multipla em surto pseudossurto neurite optica mielite transversa neuromielite optica nmosd anti aquaporina 4 aqp4 mogad anti mog adem encefalomielite disseminada aguda mcdonald 2017 2024 bandas oligoclonais ressonancia gadolinio pulsoterapia metilprednisolona plasmaferese natalizumabe interferon",
  critico: {
    tempo: "Excluir infecção antes do pulso",
    texto: "Piora de sintomas antigos com febre ou infecção urinária é pseudossurto: tratar a infecção, não pulsar. Surto verdadeiro incapacitante: metilprednisolona 1 g IV/dia por 3–5 dias; grave sem resposta (sobretudo NMOSD): plasmaférese precoce."
  },
  alarmes: [
    "Perda visual grave ou bilateral, mielite com nível sensitivo e paraparesia/tetraparesia",
    "Soluços ou vômitos incoercíveis (síndrome da área postrema — NMOSD)",
    "Retenção urinária, fraqueza respiratória, disfagia",
    "Rebaixamento de consciência, convulsão, febre com sinais multifocais (ADEM; excluir meningoencefalite)",
    "Paciente em natalizumabe com déficit cognitivo, comportamental ou hemiparesia progressiva (leucoencefalopatia multifocal progressiva — LEMP)",
    "Febre em paciente em imunossupressor/anticorpo monoclonal"
  ],
  condutaInicial: [
    "Caracterizar: déficit novo ou piora com duração ≥ 24 h, ≥ 30 dias após o surto anterior, sem febre ou infecção",
    "Excluir pseudossurto: temperatura, urina tipo 1 e urocultura, hemograma, PCR; calor, estresse e privação de sono pioram sintomas antigos",
    "Excluir diferenciais urgentes: AVC (déficit súbito), compressão medular (RM urgente), infecção do SNC, deficiência de B12",
    "RM de crânio e da medula (segmento sintomático) com gadolínio; órbitas na neurite óptica",
    "Surto incapacitante (motor, visual, tronco, cerebelar): metilprednisolona 1 g IV 1×/dia por 3–5 dias. Surto sensitivo leve: pode só observar",
    "Antes do pulso: glicemia, potássio, PA; ivermectina empírica (estrongiloidíase) em área endêmica; descartar infecção ativa",
    "Neurite óptica grave, mielite longitudinal extensa ou área postrema: colher anti-AQP4 e anti-MOG antes de tratamentos que alterem resultado (plasmaférese/IGIV) e discutir com neurologia",
    "Sem melhora em 5–7 dias após o pulso e déficit grave: plasmaférese (5–7 sessões em dias alternados) — centro de referência"
  ],
  fataisExcluir: [
    "AVC isquêmico (déficit súbito em minutos)",
    "Compressão medular (tumor, abscesso epidural, hérnia)",
    "Meningoencefalite infecciosa (febre, rigidez de nuca, líquor)",
    "LEMP em paciente imunossuprimido",
    "Mielite infecciosa (HTLV-1, sífilis, HIV, esquistossomose) e deficiência de B12/cobre"
  ],
  proximaDecisao: "Após o surto: encaminhar à neurologia para fechar o diagnóstico (McDonald: disseminação no espaço e no tempo ou bandas oligoclonais) e iniciar terapia modificadora (PCDT EM). NMOSD e MOGAD têm tratamento diferente: algumas drogas da EM (interferon, natalizumabe, fingolimode) pioram a NMOSD.",
  clinica: {
    anamnese: [
      "Sintoma: visão (dor ao mover o olho, perda de cores), sensibilidade/força de membros, nível no tronco, diplopia, vertigem, ataxia, bexiga",
      "Instalação em horas a dias (subaguda); episódios prévios de sintomas transitórios",
      "Fenômeno de Lhermitte (choque descendo pela coluna ao fletir o pescoço), fenômeno de Uhthoff (piora com calor)",
      "Febre, infecção recente ou vacinação (ADEM), sintomas urinários",
      "Medicação atual (terapia modificadora), gestação/pós-parto"
    ],
    exameFisico: [
      "Acuidade visual, visão de cores, defeito pupilar aferente relativo, fundo de olho",
      "Força, reflexos, Babinski, nível sensitivo, coordenação, marcha",
      "Movimentos oculares (oftalmoplegia internuclear)",
      "Temperatura, sinais meníngeos, nível de consciência",
      "Bexiga palpável (retenção)"
    ],
    diferenciais: [
      { dx: "NMOSD (anti-AQP4)", pista: "Neurite óptica grave/bilateral, mielite ≥ 3 segmentos vertebrais, soluços/vômitos incoercíveis; mulher, associação com LES/Sjögren" },
      { dx: "MOGAD (anti-MOG)", pista: "Neurite óptica bilateral com edema de papila, ADEM em criança, mielite de cone" },
      { dx: "ADEM", pista: "Criança, pós-infecção/vacina, encefalopatia + déficits multifocais, lesões grandes e simultâneas; geralmente monofásica" },
      { dx: "Neurossífilis, HIV, HTLV-1, Lyme", pista: "Sorologias e líquor" },
      { dx: "Neurossarcoidose, LES, Behçet, vasculite", pista: "Sinais sistêmicos" },
      { dx: "Deficiência de B12/cobre", pista: "Mielopatia dos cordões posteriores, anemia, cirurgia bariátrica" }
    ],
    gravidade: [
      "Surto leve: sintomas sensitivos sem limitação funcional",
      "Surto moderado/grave: perda visual importante, déficit motor, ataxia, tronco, esfíncteres",
      "Muito grave: tetraparesia, insuficiência respiratória, encefalopatia — UTI e plasmaférese precoce",
      "EDSS: escala de incapacidade usada pelo neurologista (0 normal a 10 óbito)"
    ]
  },
  exames: [
    {
      nome: "RM de crânio e medula com gadolínio",
      pedido: "RM de crânio com gadolínio (protocolo para doença desmielinizante) + RM de coluna cervical e torácica com gadolínio. Na neurite óptica: incluir órbitas.",
      porQue: "Mostrar lesões típicas e disseminação no espaço e no tempo.",
      esperar: "Lesões ovoides periventriculares (perpendiculares ao corpo caloso — dedos de Dawson), justacorticais, infratentoriais, medulares curtas (< 2 segmentos).",
      interpretacao: "Lesões captantes e não captantes simultâneas = disseminação no tempo. Mielite ≥ 3 segmentos = pensar em NMOSD.",
      limitacoes: "Lesões inespecíficas de substância branca são comuns (enxaqueca, vascular, idade)."
    },
    {
      nome: "Líquor",
      pedido: "Líquor: celularidade, proteína, glicose, bacterioscopia, cultura, VDRL; bandas oligoclonais (pareadas com soro) e índice de IgG; cadeias leves kappa livres se disponível.",
      porQue: "Excluir infecção e apoiar o diagnóstico de EM.",
      esperar: "Celularidade normal ou < 50 células, proteína normal ou pouco elevada, bandas oligoclonais presentes na EM.",
      interpretacao: "Bandas oligoclonais substituem a disseminação no tempo (McDonald 2017). Pleocitose > 50 células ou neutrófilos: pensar em NMOSD, MOGAD, ADEM, infecção.",
      limitacoes: "Bandas costumam ser negativas na NMOSD e MOGAD."
    },
    {
      nome: "Sorologias e anticorpos",
      pedido: "Anti-aquaporina-4 IgG (cell-based assay) e anti-MOG IgG no soro; VDRL/FTA-Abs, HIV, HTLV-1 e 2, vitamina B12, TSH, FAN, hemograma, PCR, urina tipo 1 e urocultura.",
      porQue: "Diferenciais e pseudossurto.",
      esperar: "Negativos na EM.",
      interpretacao: "Anti-AQP4 positivo = NMOSD (mudar o tratamento).",
      limitacoes: "Colher antes de plasmaférese ou IGIV."
    }
  ],
  tratamento: [
    {
      droga: "Metilprednisolona (pulsoterapia)",
      linha: "l1",
      dose: "Adulto: 1 g/dia · Criança: 20–30 mg/kg/dia (máximo 1 g/dia)",
      via: "IV em 1–2 h",
      intervalo: "1×/dia",
      duracao: "3–5 dias (sem necessidade de desmame oral na EM)",
      monitorizacao: "Glicemia capilar, PA, potássio, humor, sono",
      contraindicacoes: "Infecção ativa não tratada",
      ajustes: "Diluir em 250 mL de SF 0,9% ou SG 5%. IBP se risco GI. Ivermectina 200 mcg/kg dose única antes, em área endêmica. ADEM: após pulso, prednisona oral 1 mg/kg/dia com redução em 4–6 semanas"
    },
    {
      droga: "Plasmaférese",
      linha: "adj",
      dose: "5–7 trocas (1–1,5 volume plasmático)",
      via: "Cateter de hemodiálise",
      intervalo: "Dias alternados",
      duracao: "10–14 dias",
      monitorizacao: "PA, cálcio, fibrinogênio, coagulação",
      contraindicacoes: "Instabilidade hemodinâmica, sepse",
      ajustes: "Surto grave sem resposta ao pulso; na NMOSD grave, iniciar precocemente (centro de referência)"
    },
    {
      droga: "Imunoglobulina humana IV",
      linha: "alt",
      dose: "2 g/kg (total)",
      via: "IV",
      intervalo: "Dividida em 2–5 dias",
      duracao: "1 ciclo",
      monitorizacao: "Função renal, cefaleia, trombose",
      contraindicacoes: "Deficiência de IgA com anticorpos anti-IgA",
      ajustes: "Opção em ADEM/MOGAD pediátrico refratário quando plasmaférese indisponível"
    },
    {
      droga: "Terapia modificadora da EM (PCDT 2024)",
      linha: "l1",
      dose: "Conforme neurologista",
      via: "VO, SC ou IV",
      intervalo: "—",
      duracao: "Longo prazo",
      monitorizacao: "Conforme droga (hemograma, enzimas hepáticas, JCV no natalizumabe)",
      contraindicacoes: "Não usar interferon, natalizumabe ou fingolimode na NMOSD",
      ajustes: "Baixa/moderada atividade: betainterferonas, glatirâmer, teriflunomida, fumarato de dimetila, azatioprina. Alta atividade: natalizumabe, cladribina e outras. Gestação: planejar com neurologista"
    }
  ],
  destino: {
    agora: ["Excluir infecção e diferenciais urgentes", "RM e exames de sangue/urina", "Pulso se surto incapacitante"],
    reavaliar: ["Glicemia e PA durante o pulso", "Função vesical e respiratória em mielite alta"],
    alta: ["Surto leve ou pulso concluído (pode ser em hospital-dia), sem retenção urinária, deambulando ou com suporte em casa", "Encaminhamento à neurologia garantido"],
    observacao: ["Pulso ambulatorial/hospital-dia em surto moderado com bom suporte"],
    internacao: ["Déficit motor grave, retenção urinária, disfagia, encefalopatia (ADEM), suspeita de NMOSD grave"],
    transferencia: ["Necessidade de plasmaférese, RM ou UTI indisponíveis → centro de referência em neurologia"]
  },
  prescricao: {
    hospitalar: "SURTO DE DOENÇA DESMIELINIZANTE — ADULTO\n1. Dieta livre (para diabético se hiperglicemia).\n2. Ivermectina 6 mg — 200 mcg/kg VO dose única (área endêmica para estrongiloidíase), antes do 1º pulso.\n3. Metilprednisolona 1 g + SF 0,9% 250 mL IV em 1–2 h, 1 vez ao dia, por 3 a 5 dias (dias 1 a ___).\n   Criança: 20–30 mg/kg/dia (máximo 1 g) em SF 0,9% 100–250 mL IV em 1–2 h.\n4. Omeprazol 20 mg VO em jejum durante o pulso.\n5. Insulina regular SC conforme glicemia capilar (esquema de correção) se hiperglicemia.\n6. Enoxaparina 40 mg SC 1×/dia se imobilizado e sem contraindicação.\n7. Sondagem vesical de alívio se retenção urinária (resíduo pós-miccional > 200 mL).\n8. Controles: glicemia capilar 6/6 h, PA 6/6 h, potássio no 2º–3º dia; exame neurológico e acuidade visual diários.\n9. Exames: RM de crânio e medula com gadolínio; anti-AQP4 e anti-MOG antes de plasmaférese/IGIV; líquor se diagnóstico inicial.",
    ambulatorial: "APÓS O SURTO\n1. Encaminhamento à neurologia (prioritário): primeiro surto de doença desmielinizante / esclerose múltipla em surto, para definição diagnóstica e terapia modificadora (PCDT EM).\n2. Fisioterapia motora se déficit residual.\n\nORIENTAÇÕES\n3. Evitar calor excessivo (banho muito quente, sol forte) — pode piorar temporariamente os sintomas."
  },
  orientacoesRetorno: [
    "Piora de sintomas antigos com febre, calor ou infecção costuma passar quando a causa é tratada; não é necessariamente um novo surto",
    "Voltar imediatamente se perder a visão, ficar com fraqueza ou dormência que sobe pelo corpo, não conseguir urinar, tiver soluços ou vômitos que não param, ou falta de ar",
    "Durante e logo após o pulso podem ocorrer insônia, rosto avermelhado, gosto metálico e aumento da glicemia; são passageiros",
    "Não deixar de ir à consulta com o neurologista: o tratamento de longo prazo reduz novos surtos",
    "Vitamina D adequada, atividade física e parar de fumar ajudam no controle da doença",
    "Planejar gestação com o neurologista"
  ],
  tabelas: [
    {
      titulo: "Critérios de McDonald 2017 — disseminação na RM",
      colunas: ["Item", "Critério"],
      linhas: [
        ["Disseminação no espaço", "≥ 1 lesão T2 em ≥ 2 de 4 áreas: periventricular, cortical/justacortical, infratentorial, medula espinal"],
        ["Disseminação no tempo", "Lesões captantes e não captantes de gadolínio ao mesmo tempo, OU lesão nova em RM de controle, OU novo surto clínico"],
        ["Substituto da disseminação no tempo", "Bandas oligoclonais no líquor (ausentes no soro)"],
        ["Pré-requisito", "Síndrome clínica típica e nenhuma explicação melhor"]
      ],
      nota: "Revisão McDonald 2024 (publicada em 2025): nervo óptico como 5ª topografia, sinal da veia central e lesões com borda paramagnética como apoio, cadeias leves kappa livres no líquor como alternativa às bandas oligoclonais, e critérios únicos para formas recorrentes e progressivas. Aplicação pelo neurologista."
    },
    {
      titulo: "EM × NMOSD × ADEM",
      colunas: ["Aspecto", "EM", "NMOSD (anti-AQP4)", "ADEM"],
      linhas: [
        ["Idade/sexo", "20–40 anos, mulheres", "30–40 anos, mulheres (até 9:1)", "Crianças"],
        ["Neurite óptica", "Unilateral, recuperação boa", "Grave, bilateral, quiasma", "Pode ocorrer (MOG)"],
        ["Mielite", "Curta, parcial", "Longitudinal extensa (≥ 3 segmentos)", "Pode ser extensa"],
        ["Encefalopatia", "Rara", "Rara", "Obrigatória"],
        ["Bandas oligoclonais", "Positivas (> 90%)", "Geralmente negativas", "Geralmente negativas"],
        ["Curso", "Surtos e remissões", "Surtos graves, dano cumulativo", "Geralmente monofásico"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Esclerose Múltipla (Portaria Conjunta SAES/SECTICS nº 8, 2024)",
    "Thompson AJ et al. — Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria (Lancet Neurol, 2018)",
    "Montalban X et al. — 2024 revisions of the McDonald criteria (Lancet Neurol, 2025)",
    "Wingerchuk DM et al. — International consensus diagnostic criteria for NMOSD (2015)",
    "Banwell B et al. — Diagnosis of MOGAD: International MOGAD Panel proposed criteria (2023)",
    "Academia Brasileira de Neurologia — Consenso brasileiro de esclerose múltipla e NMOSD (2022)",
    "ASFA — Guidelines on the Use of Therapeutic Apheresis in Clinical Practice (2023)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
