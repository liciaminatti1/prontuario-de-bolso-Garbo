// Cervicite e uretrite — abordagem sindrômica
registrarFicha({
  id: "cervicite-uretrite",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Cervicite e uretrite (gonorreia, clamídia, Mycoplasma)",
  resumo: "Uretrite: corrimento uretral, disúria, prurido uretral. Cervicite: mucopus endocervical, colo friável, sangramento pós-coito (muitas vezes assintomática). Agentes principais: Neisseria gonorrhoeae, Chlamydia trachomatis, Mycoplasma genitalium e Trichomonas. Tratar no mesmo atendimento, com a parceria.",
  palavrasChave: "uretrite cervicite gonorreia gonococo blenorragia clamidia chlamydia mycoplasma genitalium corrimento uretral secrecao pus ceftriaxona azitromicina doxiciclina ist parceria",
  critico: {
    tempo: "Tratar paciente e parceria hoje",
    texto: "Ceftriaxona 500 mg IM + azitromicina 1 g VO dose única no mesmo atendimento (PCDT). Convocar e tratar parcerias dos últimos 60 dias e testar HIV, sífilis e hepatites."
  },
  alarmes: [
    "Dor pélvica, dor à mobilização do colo ou febre (DIP)",
    "Dor e edema testicular/epididimário (orquiepididimite)",
    "Febre, artralgia ou artrite, lesões cutâneas pustulosas acrais (gonococcia disseminada)",
    "Conjuntivite purulenta (gonocócica: risco de perfuração de córnea)",
    "Gestante (risco de transmissão ao recém-nascido)",
    "Criança com corrimento uretral/vaginal sugestivo de IST (avaliar violência sexual e notificar)"
  ],
  condutaInicial: [
    "Anamnese sexual (parcerias, práticas, preservativo, sexo anal/oral), sintomas e tempo",
    "Exame: ordenhar uretra; especular para colo (mucopus, friabilidade); toque bimanual para excluir DIP; examinar testículos",
    "Coletar material para biologia molecular (CT/NG) e Gram se disponível, sem atrasar o tratamento",
    "Gram com diplococos Gram-negativos intracelulares ou sem exame: ceftriaxona 500 mg IM + azitromicina 1 g VO dose única",
    "Gram sem diplococos (só leucócitos): tratar clamídia (azitromicina 1 g ou doxiciclina 7 dias)",
    "Cervicite: tratar gonococo e clamídia juntos",
    "Testes rápidos de HIV, sífilis, hepatites B e C; oferecer PrEP e vacinas (hepatite B, HPV)",
    "Tratar todas as parcerias sexuais dos últimos 60 dias com o mesmo esquema, mesmo sem sintomas"
  ],
  fataisExcluir: [
    "Doença inflamatória pélvica",
    "Gestação ectópica (dor + atraso menstrual)",
    "Infecção gonocócica disseminada",
    "Orquiepididimite / torção testicular (dor testicular aguda)",
    "HIV e sífilis concomitantes"
  ],
  proximaDecisao: "Persistência ou recorrência após 7 dias: rever adesão e reexposição (parceria não tratada). Se aderiu e sem reexposição, tratar Mycoplasma genitalium e Trichomonas (moxifloxacino 7 dias + metronidazol 2 g) e colher cultura com antibiograma para gonococo se possível.",
  clinica: {
    anamnese: [
      "Corrimento uretral (purulento: gonococo; mucoide escasso: clamídia/Mycoplasma), disúria, prurido",
      "Mulher: corrimento, sangramento intermenstrual ou pós-coito, dispareunia, disúria; muitas assintomáticas",
      "Tempo de incubação curto (2–5 dias) favorece gonococo",
      "Parcerias nos últimos 60 dias, práticas sexuais (oral, anal), uso de preservativo",
      "Uso recente de antibióticos, episódios anteriores, gestação",
      "Sintomas sistêmicos: febre, artralgia, lesões de pele, dor testicular ou pélvica"
    ],
    exameFisico: [
      "Meato uretral: secreção espontânea ou à ordenha",
      "Especular: mucopus endocervical, colo edemaciado e friável (sangra ao toque do swab)",
      "Toque bimanual: dor à mobilização do colo ou anexos (DIP)",
      "Testículos e epidídimos: dor, edema",
      "Faringe e ânus se exposição (proctite: dor anal, tenesmo, secreção)",
      "Pele e articulações (gonococcia disseminada); linfonodos inguinais"
    ],
    diferenciais: [
      { dx: "Infecção urinária (cistite)", pista: "Disúria + polaciúria + urgência, sem corrimento; urina com nitrito" },
      { dx: "Tricomoníase", pista: "Corrimento vaginal bolhoso; no homem, uretrite pouco sintomática" },
      { dx: "DIP", pista: "Dor pélvica + dor à mobilização do colo/anexos" },
      { dx: "Herpes (uretrite herpética)", pista: "Disúria intensa, vesículas ou úlceras" },
      { dx: "Orquiepididimite", pista: "Dor testicular, edema do epidídimo; Prehn positivo" },
      { dx: "Uretrite não infecciosa / traumática", pista: "Manipulação, sondagem, irritantes" }
    ],
    gravidade: [
      "Não complicada: uretrite ou cervicite sem dor pélvica, sem sinais sistêmicos",
      "Complicada: DIP, orquiepididimite, proctite, conjuntivite, gonococcia disseminada (internação)",
      "Gestante: tratar no mesmo dia e garantir teste de cura"
    ]
  },
  exames: [
    {
      nome: "Biologia molecular para clamídia e gonococo (NAAT/PCR)",
      pedido: "Pesquisa de Chlamydia trachomatis e Neisseria gonorrhoeae por biologia molecular em urina de 1º jato (homem) ou swab endocervical/vaginal (mulher); swab retal e de orofaringe se exposição.",
      porQue: "Confirmar agente; rastreio em assintomáticos de risco; teste de cura em gestante.",
      esperar: "Resultado em dias.",
      interpretacao: "Positivo: tratar paciente e parcerias. Teste de cura (se feito) só após 4 semanas (falso-positivo por DNA residual).",
      limitacoes: "Não mostra sensibilidade a antibióticos. Disponibilidade variável."
    },
    {
      nome: "Bacterioscopia (Gram) da secreção uretral",
      pedido: "Bacterioscopia pelo Gram de secreção uretral.",
      porQue: "Diagnóstico rápido de gonorreia no homem.",
      esperar: "Na hora, se laboratório disponível.",
      interpretacao: "Diplococos Gram-negativos intracelulares = gonococo. ≥ 2 leucócitos/campo sem diplococos = uretrite não gonocócica.",
      limitacoes: "Baixa sensibilidade na endocérvice; Gram negativo não exclui gonococo na mulher."
    },
    {
      nome: "Cultura com antibiograma para gonococo",
      pedido: "Cultura de secreção uretral/endocervical para Neisseria gonorrhoeae em meio seletivo (Thayer-Martin) com antibiograma.",
      porQue: "Falha terapêutica (vigilância de resistência à ceftriaxona e azitromicina).",
      esperar: "48–72 h.",
      interpretacao: "Orienta retratamento.",
      limitacoes: "Exige transporte rápido; disponível em poucos serviços."
    },
    {
      nome: "Testes rápidos e sorologias",
      pedido: "Teste rápido para HIV, sífilis, hepatite B (HBsAg) e hepatite C (anti-HCV).",
      porQue: "Coinfecção frequente.",
      esperar: "30 minutos.",
      interpretacao: "Reagente: seguir fluxogramas do MS.",
      limitacoes: "Repetir HIV e sífilis em 30–90 dias se exposição recente (janela)."
    },
    {
      nome: "Beta-hCG",
      pedido: "Beta-hCG (teste rápido de gravidez urinário).",
      porQue: "Mulher em idade fértil: gestação muda seguimento (teste de cura) e exclui ectópica.",
      esperar: "Imediato.",
      interpretacao: "Positivo: seguir pré-natal; doxiciclina contraindicada.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    { droga: "Ceftriaxona", linha: "l1", dose: "500 mg", via: "IM", intervalo: "Dose única", duracao: "—", monitorizacao: "Observar 30 min (alergia)", contraindicacoes: "Anafilaxia a cefalosporinas", ajustes: "Diluir em lidocaína 1% sem vasoconstritor (3,5 mL para IM). Gestação: pode usar. Peso ≥ 150 kg: 1 g (CDC). Gonococcia disseminada: 1 g IV/IM 24/24 h (internar)" },
    { droga: "Azitromicina", linha: "l1", dose: "1 g (2 comprimidos de 500 mg)", via: "VO", intervalo: "Dose única", duracao: "—", monitorizacao: "Náusea, diarreia; QT longo", contraindicacoes: "Alergia a macrolídeos", ajustes: "Associada à ceftriaxona (PCDT: terapia dupla). Gestação: escolha para clamídia" },
    { droga: "Doxiciclina (clamídia)", linha: "alt", dose: "100 mg", via: "VO", intervalo: "12/12 h", duracao: "7 dias (proctite por clamídia/LGV: 21 dias)", monitorizacao: "Esofagite: tomar com água, sentada", contraindicacoes: "Gestação, < 8 anos", ajustes: "Mais eficaz que azitromicina na clamídia retal (CDC 2021 prefere doxiciclina). Substitui a azitromicina no esquema com ceftriaxona fora da gestação" },
    { droga: "Moxifloxacino (Mycoplasma genitalium persistente)", linha: "alt", dose: "400 mg", via: "VO", intervalo: "1 vez ao dia", duracao: "7 dias", monitorizacao: "QT, tendinite, disglicemia", contraindicacoes: "Gestação, QT longo, miastenia", ajustes: "Uretrite/cervicite persistente após azitromicina com boa adesão e sem reexposição" },
    { droga: "Metronidazol (Trichomonas na uretrite persistente)", linha: "adj", dose: "2 g (5 comprimidos de 400 mg ou 8 de 250 mg)", via: "VO", intervalo: "Dose única", duracao: "—", monitorizacao: "—", contraindicacoes: "Álcool por 24 h", ajustes: "Associar ao moxifloxacino na persistência" },
    { droga: "Ciprofloxacino ou penicilina para gonorreia", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Alta resistência do gonococo no Brasil (Projeto SenGono)", ajustes: "Não usar" }
  ],
  destino: {
    agora: ["Tratar no ato (dose supervisionada)", "Testes rápidos", "Entregar convite/receita para as parcerias"],
    reavaliar: ["Retorno em 7 dias se sintomas persistirem", "Gestante: teste de cura 4 semanas após o tratamento", "Retestar em 3 meses (reinfecção comum)"],
    alta: ["Sintomas resolvidos, parcerias tratadas, abstinência por 7 dias após tratamento de ambos"],
    observacao: ["—"],
    internacao: ["Gonococcia disseminada, DIP grave, orquiepididimite com abscesso"],
    transferencia: ["—"]
  },
  prescricao: {
    ambulatorial: "PACIENTE E CADA PARCERIA SEXUAL (receitas separadas)\nUSO INTRAMUSCULAR\n1. Ceftriaxona 500 mg pó para solução injetável ---- 1 frasco-ampola\n   Aplicar 500 mg IM profundo (glúteo), dose única, na unidade. Diluir em 2 mL de lidocaína 1% sem vasoconstritor.\nUSO ORAL\n2. Azitromicina 500 mg ---------------------------- 2 comprimidos\n   Tomar 2 comprimidos juntos, em dose única (total 1 g), de preferência na unidade.\n\nSOMENTE CLAMÍDIA (Gram sem diplococos) — USO ORAL\n1. Azitromicina 500 mg: 2 comprimidos em dose única\n   OU (não gestante) Doxiciclina 100 mg ------------ 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias, com copo cheio de água.\n\nURETRITE/CERVICITE PERSISTENTE (adesão confirmada, sem reexposição) — USO ORAL\n1. Moxifloxacino 400 mg --------------------------- 7 comprimidos\n   Tomar 1 comprimido ao dia por 7 dias.\n2. Metronidazol 400 mg ---------------------------- 5 comprimidos\n   Tomar 5 comprimidos juntos, em dose única. Não ingerir álcool por 24 h.\n\nORIENTAÇÃO: sem relações sexuais por 7 dias após o tratamento da paciente e das parcerias."
  },
  orientacoesRetorno: [
    "A parceria (ou parcerias dos últimos 2 meses) precisa ser tratada, mesmo sem sintomas",
    "Sem relações sexuais por 7 dias após o tratamento de todos e até sumirem os sintomas",
    "Usar preservativo em todas as relações; fazer os testes de HIV, sífilis e hepatites",
    "Voltar em 7 dias se continuar com corrimento ou ardor",
    "Procurar logo se febre, dor na barriga, dor ou inchaço no testículo, dor nas juntas ou manchas na pele",
    "Repetir os exames em 3 meses (é comum pegar de novo)"
  ],
  tabelas: [
    {
      titulo: "Tratamento por agente (PCDT IST 2022)",
      colunas: ["Situação", "1ª escolha", "Alternativa"],
      linhas: [
        ["Gonococo + clamídia (ou sem Gram)", "Ceftriaxona 500 mg IM + azitromicina 1 g VO, dose única", "Fora da gestação: ceftriaxona + doxiciclina 100 mg 12/12 h 7 dias"],
        ["Só clamídia", "Azitromicina 1 g VO dose única", "Doxiciclina 100 mg 12/12 h 7 dias"],
        ["Mycoplasma genitalium", "Azitromicina 1 g VO dose única", "Moxifloxacino 400 mg/dia 7 dias"],
        ["Trichomonas", "Metronidazol 2 g VO dose única", "Metronidazol 500 mg 12/12 h 7 dias"]
      ],
      nota: "CDC 2021: para M. genitalium, doxiciclina 7 dias seguida de moxifloxacino 400 mg 7 dias (ou azitromicina 4 dias se teste de resistência a macrolídeo negativo). Resistência a macrolídeos crescente no Brasil."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022); capítulo Infecções que causam corrimento uretral (Epidemiol Serv Saúde, 2021)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)",
    "OMS — Recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis and Treponema pallidum (2024)",
    "European guideline on the management of Mycoplasma genitalium infections (IUSTI, 2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
