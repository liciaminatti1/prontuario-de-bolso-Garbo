// Violência interpessoal: identificação, acolhimento, notificação e rede
registrarFicha({
  id: "violencia-interpessoal",
  especialidade: "prevencao",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Violência interpessoal: doméstica, contra mulher, criança, idoso e pessoa vulnerável",
  resumo: "Identificar sinais de violência física, psicológica, sexual, patrimonial, negligência e tortura; acolher sem julgamento; tratar lesões; avaliar risco; notificar no SINAN; comunicar os órgãos exigidos por lei e acionar a rede de proteção. Violência sexual: ver ficha Violência sexual.",
  palavrasChave: "violencia domestica violencia contra mulher maria da penha maus tratos crianca abuso infantil negligencia violencia contra idoso pessoa com deficiencia notificacao sinan conselho tutelar creas cras ligue 180 disque 100 feminicidio avaliacao de risco medida protetiva",
  critico: {
    tempo: "Acolher, proteger e notificar",
    texto: "Perguntar em privado, sem o acompanhante suspeito. Risco imediato à vida (ameaça com arma, estrangulamento prévio, criança sem proteção) → não liberar sem plano de segurança: acionar polícia (190), Conselho Tutelar ou internação protetiva."
  },
  alarmes: [
    "Ameaça de morte, uso ou acesso a arma, tentativa de estrangulamento/sufocação, escalada da violência (fatores de risco de feminicídio)",
    "Gestante agredida",
    "Criança < 1 ano com fratura, equimose, queimadura em padrão, TCE sem história plausível",
    "Lesões em estágios diferentes, história incompatível ou que muda, demora para buscar atendimento",
    "Idoso ou pessoa com deficiência com desnutrição, úlceras de pressão, medicação não administrada, contenção",
    "Ideação suicida da vítima",
    "Agressor presente controlando a consulta"
  ],
  conduta: [
    "Acolher em ambiente reservado; falar com a vítima sozinha (criança: com responsável não suspeito); escutar sem julgar, sem pressionar por detalhes; acreditar",
    "Tratar lesões e dor; profilaxia de tétano; violência sexual → seguir ficha Violência sexual (profilaxias em até 72 h)",
    "Registrar no prontuário com as palavras da vítima entre aspas, descrição detalhada das lesões (localização, tamanho, cor, forma) e desenho/foto com consentimento",
    "Avaliar risco (perguntas do Formulário Nacional de Avaliação de Risco para mulheres) e construir plano de segurança: para onde ir, documentos, contatos, sinal combinado",
    "Notificar no SINAN (Ficha de Notificação Individual de Violência Interpessoal/Autoprovocada) toda suspeita ou confirmação — não exige prova nem consentimento",
    "Comunicações obrigatórias (ver tabela): Conselho Tutelar (criança/adolescente), autoridade policial em 24 h (violência contra mulher — Lei 13.931/2019), autoridade policial/MP/Conselhos (pessoa idosa e pessoa com deficiência)",
    "Mulher adulta capaz: orientar sobre direitos (Lei Maria da Penha, medida protetiva, Delegacia da Mulher, Defensoria); registrar BO é decisão dela",
    "Acionar a rede: assistência social (CRAS/CREAS), Casa da Mulher Brasileira/centro de referência, CAPS, psicologia, Conselho Tutelar",
    "Criança < 2 anos com suspeita de maus-tratos físicos: PS/pediatria para inventário esquelético, fundo de olho e TC de crânio conforme o caso",
    "Seguimento na UBS com visita domiciliar do ACS (com cuidado para não expor a vítima ao agressor)"
  ],
  exames: [
    "Conforme lesões: radiografias, TC de crânio, exames de imagem de abdome se trauma",
    "Criança < 2 anos com suspeita de violência física: inventário esquelético (série óssea), fundo de olho, TC de crânio, hemograma, coagulograma, TGO/TGP, amilase/lipase, urina tipo 1",
    "Violência sexual: exames e profilaxias da ficha Violência sexual",
    "Beta-hCG em mulheres em idade fértil",
    "Idoso/vulnerável: hemograma, albumina, eletrólitos, função renal (desnutrição, desidratação)"
  ],
  diferenciais: [
    "Criança: osteogênese imperfeita, coagulopatias, manchas mongólicas, lesões culturais (ventosa, moeda), fitofotodermatite, queda acidental compatível com o desenvolvimento",
    "Idoso: quedas por doença, equimoses por anticoagulante/corticoide, úlceras por imobilidade sem negligência",
    "Considerar que acidente e violência podem coexistir: a história deve ser compatível com o mecanismo e a idade"
  ],
  tratamento: [
    { droga: "Analgesia", linha: "l1", dose: "Dipirona 500 mg–1 g (criança 15–25 mg/kg, máx. 1 g); paracetamol 500–750 mg (criança 10–15 mg/kg, máx. 750 mg)", via: "VO", intervalo: "6/6 h", duracao: "3–5 dias SN", monitorizacao: "—", contraindicacoes: "Alergia", ajustes: "Evitar AINE em gestante" },
    { droga: "Profilaxia antitetânica", linha: "l1", dose: "Conforme ficha Tétano: vacina dT/dTpa (criança conforme calendário) ± imunoglobulina", via: "IM", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "—", ajustes: "Feridas e mordeduras" },
    { droga: "Profilaxias pós-violência sexual", linha: "l1", dose: "Ver ficha Violência sexual (PEP-HIV, IST, hepatite B, contracepção de emergência)", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "—", ajustes: "Até 72 h para PEP; contracepção de emergência até 5 dias" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor (criança: 15–25 mg/kg por dose, máx. 1 g).\n\nENCAMINHAMENTOS / CONTATOS (entregar por escrito, em papel discreto se necessário)\n- Ligue 180 (Central de Atendimento à Mulher, 24 h, gratuito)\n- Disque 100 (Direitos Humanos: criança, idoso, pessoa com deficiência)\n- 190 (Polícia Militar) em perigo imediato\n- CREAS/CRAS do território: __________\n- Delegacia da Mulher / Defensoria Pública: __________\n- Conselho Tutelar: __________\n- Retorno na UBS: __/__/____"
  },
  encaminhar: [
    "PS/hospital: lesões graves, TCE, criança < 2 anos com suspeita de violência física, violência sexual recente (profilaxias), risco iminente sem local seguro",
    "Conselho Tutelar: toda suspeita em criança/adolescente (sem prejuízo do atendimento)",
    "CREAS: acompanhamento de famílias em situação de violência; CRAS: vulnerabilidade social",
    "Casa da Mulher Brasileira / Centro de Referência da Mulher / Defensoria: medidas protetivas e orientação jurídica",
    "CAPS/psicologia: sofrimento psíquico, uso de álcool/drogas da vítima ou do agressor, ideação suicida",
    "Ministério Público/Conselho do Idoso ou da Pessoa com Deficiência: violência contra idoso ou pessoa com deficiência"
  ],
  orientacoesRetorno: [
    "Você não tem culpa pela violência que sofreu; existe ajuda e você pode voltar aqui sempre que precisar",
    "Em perigo imediato, ligar 190; para orientação, Ligue 180 (mulher) ou Disque 100",
    "Plano de segurança: deixar documentos, chaves, dinheiro e remédios em local fácil; combinar um sinal com alguém de confiança; saber para onde ir",
    "A medida protetiva pode ser pedida na delegacia, na Defensoria ou no Ministério Público",
    "Retorno na UBS em até 7 dias (ou antes) para acompanhar a saúde e a rede de apoio"
  ],
  tabelas: [
    {
      titulo: "Notificação e comunicação obrigatórias",
      colunas: ["Situação", "O que fazer", "Base legal"],
      linhas: [
        ["Qualquer violência interpessoal (suspeita ou confirmada)", "Notificar no SINAN (semanal; violência sexual e tentativa de suicídio: imediata, até 24 h)", "Portaria de Consolidação MS nº 4/2017"],
        ["Criança e adolescente", "Comunicar ao Conselho Tutelar (sem prejuízo de outras medidas)", "ECA (Lei 8.069/1990, art. 13 e 245); Lei 14.344/2022"],
        ["Mulher", "Notificação compulsória; comunicar à autoridade policial em até 24 h para fins estatísticos (indícios ou confirmação)", "Lei 10.778/2003; Lei 13.931/2019"],
        ["Pessoa idosa", "Notificação compulsória + comunicação à autoridade policial, Ministério Público ou Conselhos do Idoso", "Estatuto da Pessoa Idosa (Lei 10.741/2003, art. 19)"],
        ["Pessoa com deficiência", "Notificação compulsória + comunicação à autoridade policial, Ministério Público e Conselhos", "Lei 13.146/2015 (LBI), art. 26"],
        ["Violência sexual", "Ver ficha Violência sexual", "Lei 12.845/2013"]
      ],
      nota: "Notificar é dever do profissional e não é denúncia policial. Informar a vítima sobre a notificação."
    },
    {
      titulo: "Avaliação rápida de risco (mulher) — sinais de alto risco",
      colunas: ["Pergunta", "Se sim"],
      linhas: [
        ["O agressor já ameaçou matar você ou usou/tem acesso a arma?", "Alto risco"],
        ["Já tentou estrangular, sufocar ou afogar?", "Alto risco"],
        ["A violência aumentou de frequência ou gravidade?", "Alto risco"],
        ["Você está grávida ou se separou recentemente?", "Risco aumentado"],
        ["Ele faz uso abusivo de álcool/drogas ou descumpriu medida protetiva?", "Risco aumentado"]
      ],
      nota: "Baseado no Formulário Nacional de Avaliação de Risco (Resolução Conjunta CNJ/CNMP nº 5/2020; Lei 14.149/2021). Alto risco: plano de segurança e acionamento da rede no mesmo dia."
    }
  ],
  fontes: [
    "Ministério da Saúde — Viva: instrutivo de notificação de violência interpessoal e autoprovocada (2ª ed., 2016)",
    "Ministério da Saúde — Portaria de Consolidação nº 4/2017 (notificação compulsória)",
    "Lei nº 11.340/2006 (Maria da Penha); Lei nº 10.778/2003; Lei nº 13.931/2019; Lei nº 14.149/2021",
    "Lei nº 8.069/1990 (ECA); Lei nº 14.344/2022 (Henry Borel)",
    "Lei nº 10.741/2003 (Estatuto da Pessoa Idosa); Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência)",
    "Sociedade Brasileira de Pediatria — Manual de atendimento às crianças e adolescentes vítimas de violência (2ª ed., 2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
