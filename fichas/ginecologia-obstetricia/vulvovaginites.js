// Corrimento vaginal: abordagem sindrômica e vulvovaginites
registrarFicha({
  id: "vulvovaginites",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Corrimento vaginal e vulvovaginites (abordagem sindrômica e vaginite mista)",
  resumo: "Queixa de corrimento, prurido, odor ou ardor vulvovaginal. Diferenciar vaginose bacteriana, candidíase e tricomoníase (vaginites) de cervicite (gonococo/clamídia) e de DIP. Tratar no mesmo atendimento com base no exame especular, pH e teste das aminas.",
  palavrasChave: "corrimento vaginal vulvovaginite vaginite mista leucorreia abordagem sindromica fluxograma ph vaginal teste aminas vaginose candidiase tricomoniase cervicite metronidazol fluconazol",
  critico: {
    tempo: "Excluir DIP e cervicite",
    texto: "Dor pélvica, dor à mobilização do colo ou febre mudam a conduta (DIP). Mucopus ou sangramento fácil do colo indicam cervicite: tratar gonococo e clamídia e a parceria."
  },
  alarmes: [
    "Dor abdominal baixa, dor à mobilização do colo ou anexos, febre (DIP)",
    "Gestante com corrimento + perda de líquido, contrações ou sangramento",
    "Corrimento fétido com sangramento pós-coito ou lesão de colo (neoplasia)",
    "Criança ou adolescente com corrimento sugestivo de IST (avaliar violência sexual)",
    "Úlcera genital associada (abordagem de úlcera)"
  ],
  condutaInicial: [
    "Anamnese dirigida: características do corrimento, odor, prurido, relação com coito/menstruação, parcerias, uso de preservativo, antibióticos, gestação",
    "Exame especular sempre que possível: aspecto do corrimento, paredes vaginais, colo (mucopus, friabilidade, colpite)",
    "pH vaginal (fita na parede lateral) e teste das aminas (KOH 10%); exame a fresco se microscópio",
    "Classificar: pH > 4,5 + aminas positivas → vaginose e/ou tricomoníase; pH ≤ 4,5 + grumos/prurido → candidíase",
    "Tratar no mesmo dia; vaginite mista: associar os tratamentos (ex.: metronidazol oral + miconazol vaginal)",
    "Sinais de cervicite: tratar gonococo e clamídia (ver ficha Cervicite e uretrite) e a parceria",
    "Oferecer testes rápidos de HIV, sífilis, hepatites B e C; atualizar vacinas (HPV, hepatite B)"
  ],
  fataisExcluir: [
    "Doença inflamatória pélvica",
    "Gestação ectópica ou complicação obstétrica (corrimento + dor + atraso menstrual)",
    "Câncer de colo ou vagina",
    "Violência sexual (crianças, adolescentes e vulneráveis)",
    "Choque tóxico (tampão ou dispositivo vaginal, febre, eritrodermia, hipotensão)"
  ],
  proximaDecisao: "Falha ao tratamento ou ≥ 3–4 episódios/ano: confirmar o agente (Gram com Nugent, cultura para fungos com espécie, NAAT para Trichomonas, gonococo e clamídia) antes de repetir tratamento empírico. Gestante: tratar sempre a vaginite sintomática.",
  clinica: {
    anamnese: [
      "Início, cor, quantidade, odor (peixe = vaginose/trico), prurido (cândida/trico), ardor, disúria externa",
      "Piora após coito ou menstruação (vaginose); piora pré-menstrual (cândida)",
      "Dispareunia, sangramento pós-coito, dor pélvica, febre",
      "Parcerias novas ou múltiplas, uso de preservativo, sintomas na parceria",
      "Antibióticos recentes, DM, imunossupressão, gestação, DUM, método contraceptivo",
      "Duchas vaginais, sabonetes, absorventes diários, produtos tópicos (dermatite de contato)",
      "Episódios prévios e tratamentos usados"
    ],
    exameFisico: [
      "Vulva: hiperemia, edema, fissuras, escoriações, lesões ulceradas ou verrucosas",
      "Especular: corrimento (fino homogêneo acinzentado; grumoso branco aderido; amarelo-esverdeado bolhoso)",
      "Colo: colpite em framboesa (trico); mucopus endocervical e sangramento ao toque com espátula ou swab (cervicite)",
      "Toque bimanual: dor à mobilização do colo, anexos dolorosos, massas (DIP, abscesso)",
      "Temperatura e abdome"
    ],
    diferenciais: [
      { dx: "Vaginose bacteriana", pista: "Corrimento fino homogêneo, odor de peixe, pH > 4,5, aminas +, clue cells; pouca inflamação" },
      { dx: "Candidíase vulvovaginal", pista: "Prurido intenso, corrimento branco grumoso, edema vulvar, pH ≤ 4,5, aminas −" },
      { dx: "Tricomoníase", pista: "Corrimento amarelo-esverdeado bolhoso, prurido, colo em framboesa, pH > 4,5, protozoário móvel" },
      { dx: "Cervicite (gonococo, clamídia, Mycoplasma)", pista: "Mucopus endocervical, colo friável, sangramento pós-coito; vagina pode estar normal" },
      { dx: "Vaginite inflamatória descamativa", pista: "Corrimento purulento, pH > 4,5, muitos leucócitos e células parabasais, sem agente; responde a clindamicina vaginal" },
      { dx: "Vaginite atrófica (síndrome geniturinária da menopausa)", pista: "Pós-menopausa ou lactação, mucosa pálida e fina, pH alto" },
      { dx: "Corpo estranho / dermatite de contato", pista: "Odor fétido intenso; relação com produto novo" },
      { dx: "Leucorreia fisiológica", pista: "Corrimento claro ou branco, sem odor, prurido ou inflamação; pH ≤ 4,5" }
    ],
    gravidade: [
      "Vaginite não complicada: sintomas leves a moderados, episódio esporádico, imunocompetente",
      "Complicada: sintomas intensos, recorrência (cândida ≥ 4/ano; vaginose ≥ 3/ano), gestação, DM descompensado, imunossupressão, espécie não albicans",
      "Sinais de DIP ou de doença sistêmica: sair desta ficha e tratar DIP"
    ]
  },
  exames: [
    {
      nome: "pH vaginal e teste das aminas (no consultório)",
      pedido: "Fita de pH na parede lateral da vagina; teste das aminas com KOH 10% na secreção.",
      porQue: "Separar rapidamente vaginose/tricomoníase (pH alto) de candidíase (pH normal).",
      esperar: "Resultado imediato.",
      interpretacao: "pH > 4,5 + aminas positivas: vaginose bacteriana e/ou tricomoníase. pH ≤ 4,5: candidíase ou fisiológico.",
      limitacoes: "Sangue, sêmen e duchas alteram o pH. Infecções mistas podem confundir."
    },
    {
      nome: "Exame a fresco / bacterioscopia",
      pedido: "Bacterioscopia (Gram) de secreção vaginal com escore de Nugent; pesquisa de fungos e de Trichomonas vaginalis em exame a fresco.",
      porQue: "Confirmar o agente em dúvida, recorrência ou falha.",
      esperar: "Clue cells (vaginose), pseudo-hifas (cândida), protozoário móvel (trico).",
      interpretacao: "Nugent ≥ 7 = vaginose; 4–6 = intermediário.",
      limitacoes: "Sensibilidade do fresco para Trichomonas é baixa (cerca de metade dos casos); ler em até 10 minutos."
    },
    {
      nome: "Cultura para fungos",
      pedido: "Cultura de secreção vaginal para fungos com identificação de espécie (e antifungigrama, se disponível).",
      porQue: "Candidíase recorrente ou falha terapêutica.",
      esperar: "C. albicans na maioria; não albicans (C. glabrata) em recorrência.",
      interpretacao: "Não albicans responde mal a fluconazol: encaminhar.",
      limitacoes: "Colonização assintomática não exige tratamento."
    },
    {
      nome: "Biologia molecular para IST",
      pedido: "Pesquisa de Chlamydia trachomatis, Neisseria gonorrhoeae (e Trichomonas vaginalis, se disponível) por biologia molecular em swab vaginal/endocervical ou urina de 1º jato.",
      porQue: "Cervicite, rastreio de mulheres ≤ 25 anos sexualmente ativas e gestantes conforme PCDT, falha terapêutica.",
      esperar: "Resultado em dias; não atrasar tratamento sindrômico.",
      interpretacao: "Positivo: tratar paciente e parcerias e notificar conforme orientação local.",
      limitacoes: "Disponibilidade variável na rede."
    },
    {
      nome: "Testes rápidos",
      pedido: "Teste rápido para HIV, sífilis, hepatite B (HBsAg) e hepatite C (anti-HCV).",
      porQue: "Toda pessoa com suspeita de IST deve ser testada.",
      esperar: "Resultado em 30 minutos.",
      interpretacao: "Reagente: seguir fluxograma do Ministério da Saúde.",
      limitacoes: "Janela imunológica após exposição recente."
    }
  ],
  tratamento: [
    { droga: "Metronidazol 250 mg (vaginose / tricomoníase)", linha: "l1", dose: "500 mg (2 comprimidos)", via: "VO", intervalo: "12/12 h", duracao: "7 dias", monitorizacao: "Náusea, gosto metálico", contraindicacoes: "Álcool durante e até 24 h após", ajustes: "Gestação e lactação: pode usar. Tricomoníase: tratar a parceria (2 g dose única)" },
    { droga: "Metronidazol gel vaginal 100 mg/g (vaginose)", linha: "alt", dose: "1 aplicador (5 g)", via: "Vaginal", intervalo: "À noite", duracao: "5 dias", monitorizacao: "—", contraindicacoes: "Não trata tricomoníase", ajustes: "Recorrente: 2 vezes/semana por 4–6 meses após o curso" },
    { droga: "Miconazol creme vaginal 2% (candidíase)", linha: "l1", dose: "1 aplicador (5 g)", via: "Vaginal", intervalo: "À noite", duracao: "7 dias (14 se complicada)", monitorizacao: "—", contraindicacoes: "—", ajustes: "Gestação: escolha. Pode danificar preservativo de látex" },
    { droga: "Fluconazol 150 mg (candidíase)", linha: "l1", dose: "150 mg", via: "VO", intervalo: "Dose única; complicada: dias 1, 4 e 7", duracao: "Recorrente: + 150 mg/semana por 6 meses", monitorizacao: "Interações (varfarina, sulfonilureias, estatinas)", contraindicacoes: "Gestação", ajustes: "Compatível com amamentação" },
    { droga: "Clindamicina 300 mg (vaginose)", linha: "alt", dose: "300 mg", via: "VO", intervalo: "12/12 h", duracao: "7 dias", monitorizacao: "Diarreia", contraindicacoes: "Colite por C. difficile", ajustes: "Intolerância ao metronidazol" },
    { droga: "Duchas vaginais / tratamento de rotina da parceria em candidíase e vaginose", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Duchas alteram a microbiota e aumentam recorrência", ajustes: "Parceria trata sempre na tricomoníase e na cervicite" }
  ],
  destino: {
    agora: ["Tratar no mesmo atendimento conforme o fluxograma", "Testes rápidos de HIV, sífilis e hepatites"],
    reavaliar: ["Sem melhora em 7–14 dias: confirmar agente com exames", "Recorrência: investigar fatores e iniciar supressão"],
    alta: ["Vaginite tratada, sem sinais de DIP, com orientação sobre parceria e preservativo"],
    observacao: ["—"],
    internacao: ["Só se DIP grave ou complicação obstétrica (ver fichas específicas)"],
    transferencia: ["—"]
  },
  prescricao: {
    ambulatorial: "VAGINOSE BACTERIANA OU TRICOMONÍASE (pH > 4,5) — USO ORAL\n1. Metronidazol 250 mg ---------------------------- 28 comprimidos\n   Tomar 2 comprimidos de 12 em 12 horas por 7 dias. Não ingerir álcool durante e até 1 dia após.\n\nCANDIDÍASE (pH ≤ 4,5, prurido, corrimento grumoso) — USO VAGINAL\n2. Miconazol creme vaginal 2% --------------------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador à noite por 7 dias.\n   (Não gestante: alternativa fluconazol 150 mg, 1 cápsula VO dose única.)\n\nVAGINITE MISTA: associar os itens 1 e 2.\n\nPARCERIA (somente se tricomoníase ou cervicite) — USO ORAL\n3. Metronidazol 400 mg ---------------------------- 5 comprimidos\n   Tomar os 5 comprimidos juntos, em dose única (tricomoníase).\n   Cervicite: ver ficha Cervicite e uretrite (ceftriaxona + azitromicina para paciente e parceria)."
  },
  orientacoesRetorno: [
    "Completar o tratamento mesmo se melhorar antes",
    "Não usar duchas vaginais, sabonetes perfumados ou produtos íntimos",
    "Na tricomoníase, a parceria precisa tratar junto; na candidíase e na vaginose, em geral não",
    "Usar preservativo; não beber álcool durante o metronidazol",
    "Voltar logo se tiver febre, dor no pé da barriga, dor na relação ou sangramento fora da menstruação",
    "Retornar se não melhorar em 1–2 semanas ou se o corrimento voltar várias vezes no ano"
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022); capítulo Infecções que causam corrimento vaginal (Epidemiol Serv Saúde, 2021)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)",
    "OMS — Recommendations for the treatment of Trichomonas vaginalis, Mycoplasma genitalium, Candida albicans, bacterial vaginosis and human papillomavirus (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
