// Comunicação de más notícias (SPIKES) e comunicação de óbito
registrarFicha({
  id: "comunicacao-mas-noticias",
  especialidade: "referencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Comunicação de más notícias e de óbito (SPIKES)",
  resumo: "Como comunicar um diagnóstico grave ou um óbito à pessoa e à família: protocolo SPIKES, roteiro para comunicação de óbito no PS, situações com criança e frases que ajudam ou atrapalham.",
  palavrasChave: "comunicacao de mas noticias spikes protocolo de buckman comunicacao de obito morte familia luto diagnostico grave cancer cuidados paliativos empatia nure acolhimento declaracao de obito",
  critico: {
    tempo: "Local reservado, sentado, sem pressa",
    texto: "Preparar o ambiente (sala reservada, sentar, celular no silencioso), saber os fatos, perguntar o que a pessoa já sabe, dar um aviso antes da notícia, usar palavras claras ('morreu', 'câncer') e depois ficar em silêncio e acolher a emoção."
  },
  alarmes: [
    "Familiar com risco de agressão ou com reação extrema: chamar apoio (enfermagem, segurança, serviço social) sem abandonar o acolhimento",
    "Familiar que passa mal (síncope, dor torácica, crise hipertensiva): atender como paciente",
    "Ideação suicida ou desespero intenso: avaliar risco e não liberar sozinho",
    "Óbito com suspeita de violência ou morte não natural: comunicar à família sem antecipar conclusões; corpo vai ao IML (não emitir declaração de óbito)",
    "Barreira de idioma ou deficiência auditiva: intérprete; não usar criança como intérprete"
  ],
  conduta: [
    "S — Setting (preparar): ler o prontuário, confirmar identidade e fatos; sala reservada, sentar à altura dos olhos, lenços, celular no silencioso; convidar quem a pessoa quiser; apresentar-se pelo nome e função",
    "P — Perception (percepção): 'O que o senhor já sabe sobre o que está acontecendo?' — corrigir mal-entendidos e ajustar a linguagem",
    "I — Invitation (convite): 'Como prefere que eu fale sobre os resultados? Quer saber todos os detalhes?' — respeitar quem não quer saber tudo",
    "K — Knowledge (conhecimento): dar um aviso ('Infelizmente, não tenho boas notícias'); frases curtas, sem jargão; pausas; verificar entendimento",
    "E — Emotions (emoções): nomear e validar a emoção ('Vejo que isso é muito difícil'); silêncio; não discutir nem tentar consolar com otimismo falso",
    "S — Strategy/Summary (plano e resumo): resumir, combinar próximos passos, o que será feito para cuidar (controle da dor, apoio), quando haverá nova conversa e quem procurar",
    "Registrar no prontuário o que foi comunicado, a quem e as decisões"
  ],
  tabelas: [
    {
      titulo: "Comunicação de óbito no pronto-socorro",
      colunas: ["Momento", "O que fazer", "Exemplo de fala"],
      linhas: [
        ["Antes", "Confirmar nome do paciente, quem é o familiar e o grau de parentesco; saber o que aconteceu e o que foi feito; levar alguém da equipe (enfermagem/serviço social)", "—"],
        ["Abertura", "Apresentar-se, sentar, perguntar o que sabem", "'Sou a Dra. ___, médica que atendeu o seu pai. O que contaram para vocês até agora?'"],
        ["Aviso", "Preparar para a notícia", "'Ele chegou muito grave. Infelizmente, eu tenho uma notícia muito difícil.'"],
        ["Notícia", "Usar a palavra 'morreu' ou 'faleceu'; evitar 'partiu', 'descansou', 'não resistiu' isoladamente", "'Fizemos tudo o que era possível, mas o coração não voltou a bater, e ele morreu às ___ horas.'"],
        ["Acolhimento", "Silêncio, presença, oferecer água e lenço; responder perguntas; reforçar que não houve culpa se for verdade", "'Sinto muito pela sua perda.' 'Ele não sentiu dor.' (só se for verdade)"],
        ["Despedida do corpo", "Oferecer ver o corpo em ambiente preparado (sem sangue exposto quando possível)", "'Vocês gostariam de vê-lo e se despedir?'"],
        ["Próximos passos", "Explicar a declaração de óbito ou encaminhamento ao SVO/IML, documentos e funerária; serviço social", "'A assistente social vai ajudar com os documentos.'"]
      ]
    },
    {
      titulo: "Frases: o que ajuda e o que evitar",
      colunas: ["Ajuda", "Evitar"],
      linhas: [
        ["'Sinto muito.'", "'Eu sei como você se sente.'"],
        ["'Isso é muito difícil de ouvir.'", "'Pelo menos ele não sofreu mais' (dito pelo profissional)"],
        ["'O que mais preocupa o senhor agora?'", "'Não há mais nada a fazer' — sempre há cuidado a oferecer"],
        ["'Vamos cuidar para que ela não sinta dor.'", "Jargão técnico (metástase, PCR, assistolia) sem explicação"],
        ["Silêncio e presença", "Falar sem parar, olhar o relógio, ficar em pé na porta"]
      ],
      nota: "Respostas empáticas (NURSE): Nomear a emoção, Entender, Respeitar, Suporte (Support), Explorar."
    }
  ],
  prescricao: {
    ambulatorial: "MODELO DE REGISTRO\nComunicação de [diagnóstico / prognóstico / óbito] realizada em [data/hora], em sala reservada.\nPresentes: [paciente / familiares: nome e parentesco]; equipe: [nome/função].\nPercepção prévia da família: [ ].\nInformações transmitidas: [ ].\nReação e dúvidas: [ ].\nPlano combinado: [próximos exames / cuidados paliativos / retorno / documentos de óbito].\nApoio oferecido: [serviço social / psicologia / religioso conforme desejo].\nResponsável: [nome, CRM]."
  },
  orientacoesRetorno: [
    "Deixar claro quem a família pode procurar e como (nome, setor, horário)",
    "Oferecer nova conversa: muitas informações não são retidas na primeira vez",
    "Orientar sobre apoio no luto na UBS (equipe de saúde da família, psicologia, CAPS se necessário)",
    "Procurar ajuda se sintomas de luto intenso por muito tempo, ideias de morte, uso de álcool para aliviar"
  ],
  encaminhar: [
    "Cuidados paliativos: diagnóstico de doença grave e progressiva",
    "Psicologia/CAPS: luto complicado, risco de suicídio",
    "Serviço social: documentos, funeral, benefícios"
  ],
  fontes: [
    "Baile WF, Buckman R et al. — SPIKES: a six-step protocol for delivering bad news (The Oncologist, 2000)",
    "INCA/Ministério da Saúde — Comunicação de notícias difíceis: compartilhando desafios na atenção à saúde (2010)",
    "Back AL et al. — Mastering Communication with Seriously Ill Patients (2009): NURSE",
    "Conselho Federal de Medicina — Código de Ética Médica (Resolução CFM 2.217/2018), art. 34",
    "Ministério da Saúde — Manual de instruções para o preenchimento da Declaração de Óbito (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
