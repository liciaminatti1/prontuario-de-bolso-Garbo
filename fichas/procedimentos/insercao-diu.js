// Inserção do DIU de cobre (com notas sobre o SIU-LNG), inclusive pós-parto e pós-aborto
registrarFicha({
  id: "insercao-diu",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Inserção de DIU de cobre",
  resumo: "Técnica de inserção do DIU TCu 380A (e notas sobre o sistema intrauterino de levonorgestrel) no intervalo, no pós-parto e no pós-aborto, com critérios de elegibilidade da OMS, histerometria e seguimento.",
  palavrasChave: "diu dispositivo intrauterino diu de cobre tcu 380a insercao de diu histerometria pinca de pozzi siu levonorgestrel mirena diu hormonal pos parto pos placentario pos aborto criterios de elegibilidade oms larc planejamento reprodutivo",
  critico: {
    tempo: "Excluir gravidez e infecção",
    texto: "Inserir somente com certeza razoável de que não está grávida e sem cervicite purulenta, DIP ou sepse puerperal/pós-aborto atuais. Nulíparas e adolescentes podem usar DIU. Antibiótico profilático não é indicado."
  },
  alarmes: [
    "Dor súbita intensa, perda da resistência do histerômetro além do tamanho esperado ou sangramento importante: suspeita de perfuração — parar",
    "Bradicardia, palidez, sudorese, síncope: reação vasovagal — interromper, decúbito, atropina se persistente",
    "Febre, dor pélvica e corrimento purulento nas primeiras semanas: DIP — tratar sem necessariamente retirar o DIU",
    "Fios não visualizados ou haste palpável no colo: expulsão parcial ou perfuração — USG",
    "Atraso menstrual com dor: excluir gravidez ectópica"
  ],
  indicacoes: [
    "Desejo de contracepção de longa duração reversível (DIU de cobre TCu 380A: uso por 10 anos, OMS admite até 12)",
    "Contracepção de emergência até 5 dias após a relação desprotegida (DIU de cobre é o método mais eficaz)",
    "Contraindicação a estrogênio (DIU de cobre não tem hormônio)",
    "SIU-LNG 52 mg: contracepção e sangramento uterino aumentado, dismenorreia, proteção endometrial (onde disponível)",
    "Pós-parto imediato (até 48 h, de preferência nos primeiros 10 min após a dequitação) e pós-aborto imediato"
  ],
  contraindicacoes: [
    "Gravidez confirmada ou suspeita",
    "Sepse puerperal ou aborto séptico recente",
    "DIP atual, cervicite purulenta, clamídia ou gonorreia atuais (tratar e inserir depois)",
    "Sangramento vaginal inexplicado antes de investigação",
    "Câncer de colo ou endométrio aguardando tratamento; doença trofoblástica com hCG persistentemente elevado ou maligna",
    "Malformação ou mioma que distorce a cavidade uterina",
    "Tuberculose pélvica",
    "Inserção entre 48 h e 4 semanas pós-parto: não recomendada (risco de perfuração e expulsão) — aguardar 4 semanas",
    "SIU-LNG, além das acima: câncer de mama atual (categoria 4)"
  ],
  materiais: [
    "DIU TCu 380A estéril com tubo insertor e êmbolo (checar validade e embalagem íntegra)",
    "Espéculo de tamanho adequado, foco de luz",
    "Luvas estéreis (técnica sem toque: luva de procedimento é aceitável se o DIU for montado na embalagem e não tocar nada)",
    "Antisséptico aquoso: PVPI tópico ou clorexidina aquosa; gazes, pinça Cheron, cuba",
    "Pinça de Pozzi (tentáculo)",
    "Histerômetro (maleável)",
    "Tesoura longa (Metzenbaum ou de Mayo) para cortar os fios",
    "Opcional: anestésico para bloqueio paracervical (lidocaína 1% sem vasoconstritor) ou spray de lidocaína 10%; vela de Hegar se orifício estreito",
    "Pós-placentário: pinça de Kelly longa ou pinça de Foerster (anel) ou insertor próprio, e luva estéril longa",
    "Atropina e material de reanimação disponíveis"
  ],
  checagemAntes: [
    "Escolha informada: eficácia, mudança no padrão menstrual (cobre: fluxo e cólica podem aumentar nos primeiros meses), riscos (expulsão, perfuração rara, gravidez ectópica se falhar)",
    "Termo de consentimento conforme o serviço",
    "Critérios de elegibilidade da OMS (categorias 1 e 2 = pode usar); conferir tabela",
    "Certeza razoável de não gravidez: até 7 dias do início da menstruação (DIU de cobre pode ser inserido até o 12º dia), sem relação desde a última menstruação, uso correto de método confiável, até 7 dias pós-aborto, pós-parto há menos de 4 semanas (com cuidados), amenorreia lactacional; teste de gravidez se dúvida",
    "Exame especular e toque: cervicite, tamanho, posição (anteversão/retroversão) e mobilidade do útero",
    "Rastreamento de IST conforme risco: pode inserir e tratar se o teste vier positivo (não aguardar resultado em assintomática)",
    "Analgesia prévia: anti-inflamatório VO 30–60 min antes, se desejado",
    "Time-out: paciente, tipo de DIU, lote anotado"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Bexiga vazia; posição ginecológica",
      "Toque bimanual para definir posição e tamanho do útero",
      "Colocar o espéculo e visualizar o colo",
      "Antissepsia do colo e da vagina com antisséptico aquoso"
    ] },
    { etapa: "Pinçamento e histerometria", itens: [
      "Pinçar o lábio anterior do colo com a Pozzi (lábio posterior se útero retrovertido), fechando devagar, cerca de 1,5–2 cm do orifício",
      "Tracionar suavemente para retificar o ângulo entre colo e corpo",
      "Introduzir o histerômetro devagar, sem forçar, até sentir a leve resistência do fundo; ler a medida",
      "Cavidade adequada para o TCu 380A: cerca de 6–9 cm; fora disso, reavaliar (USG) antes de inserir"
    ] },
    { etapa: "Montagem do DIU (dentro da embalagem)", itens: [
      "Abrir a embalagem só na ponta do êmbolo; dobrar os braços horizontais e encaixá-los no tubo insertor, sem tocar o DIU",
      "Introduzir o êmbolo pelo tubo até tocar a base do DIU",
      "Ajustar o marcador azul (limitador) na medida da histerometria e no mesmo plano dos braços do DIU",
      "Não deixar os braços dobrados dentro do tubo por mais de alguns minutos"
    ] },
    { etapa: "Inserção (técnica de retirada)", itens: [
      "Com tração na Pozzi, introduzir o insertor com o DIU até o marcador encostar no colo (fundo uterino), limitador em posição horizontal",
      "Segurar o êmbolo parado e recuar o tubo insertor cerca de 1,5 cm (libera os braços)",
      "Empurrar o tubo novamente até sentir o fundo (posiciona o DIU no fundo)",
      "Retirar o êmbolo e, depois, o tubo insertor",
      "Cortar os fios a cerca de 3 cm do orifício externo do colo",
      "Retirar a Pozzi e comprimir o ponto de sangramento com gaze se necessário; retirar o espéculo"
    ] },
    { etapa: "SIU-LNG (hormonal)", itens: [
      "Insertor próprio, com técnica diferente conforme o fabricante: seguir as instruções da embalagem",
      "Inserção nos primeiros 7 dias do ciclo dispensa método de apoio; depois disso, usar preservativo por 7 dias"
    ] },
    { etapa: "Pós-parto e pós-aborto", itens: [
      "Pós-placentário (até 10 min após a dequitação, no parto vaginal): pinçar o DIU com pinça de Foerster ou Kelly longa (ou com a mão), levar até o fundo uterino guiando com a mão abdominal, soltar e retirar a pinça aberta; fios longos (não cortar rente) — serão cortados na revisão",
      "Na cesárea: colocar o DIU no fundo pela histerotomia e direcionar os fios para o colo antes da histerorrafia",
      "Até 48 h pós-parto: possível, com maior taxa de expulsão; entre 48 h e 4 semanas: não inserir",
      "Pós-aborto (espontâneo ou induzido, 1º ou 2º trimestre): inserir logo após o esvaziamento uterino se não houver infecção; no 2º trimestre, técnica semelhante à pós-placentária"
    ] }
  ],
  conferirDepois: [
    "Fios visíveis e cortados no comprimento certo",
    "Sangramento do ponto da Pozzi controlado",
    "Paciente sem sinais de reação vasovagal; observar 10–15 min",
    "Tipo de DIU, lote, data e data-limite de troca anotados no prontuário e no cartão da paciente",
    "Consulta de revisão marcada em 3–6 semanas (ou após a próxima menstruação); no pós-parto, na revisão puerperal",
    "Método de apoio (preservativo por 7 dias) se SIU-LNG fora dos 7 primeiros dias do ciclo; DIU de cobre é eficaz de imediato"
  ],
  complicacoes: [
    "Perfuração uterina (rara): parar, observar sinais vitais e sangramento; USG; se o DIU estiver na cavidade abdominal, retirada por laparoscopia",
    "Reação vasovagal: interromper, deitar, elevar as pernas; atropina 0,5 mg IV se bradicardia persistente",
    "Expulsão (maior no pós-parto): fios mais longos ou haste visível — retirar e reinserir se desejar",
    "Dor e sangramento aumentados (cobre): anti-inflamatório nos dias de menstruação; avaliar mal posicionamento se persistente",
    "DIP nas primeiras semanas: tratar conforme PCDT; retirar só se não houver melhora em 48–72 h ou se a paciente desejar",
    "Gravidez com DIU: excluir ectópica; se intrauterina e fios visíveis no 1º trimestre, retirar o DIU",
    "Fios não visíveis: USG para localizar; método de apoio até esclarecer"
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ibuprofeno 400 mg ------------------------- 10 comprimidos\n   Tomar 1 comprimido 30 a 60 minutos antes da inserção e depois de 8 em 8 horas se cólica, por até 3 dias, após as refeições.\n2. Dipirona 500 mg --------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor."
  },
  documentacao: "Procedimento: inserção de [DIU de cobre TCu 380A / SIU-LNG 52 mg], [intervalo / pós-placentário / pós-aborto], [dia do ciclo: ].\nCritérios de elegibilidade OMS: categoria [1 / 2]. Certeza razoável de não gravidez: [critério / teste negativo].\nConsentimento informado [termo assinado].\nToque: útero [AVF / RVF / médio], [ ] tamanho. Especular: colo [sem sinais de cervicite].\nAntissepsia com [PVPI / clorexidina aquosa]. Pinçamento com Pozzi no lábio [anterior / posterior]. Histerometria: [ ] cm.\nInserção [sem intercorrências / descrever]. Fios cortados a [3] cm do orifício externo.\nLote: [ ]. Validade do método até: [mês/ano].\nOrientada sobre sinais de alerta e revisão em [data].\nResponsável: [nome, CRM / COREN].",
  tabelas: [
    {
      titulo: "Momento da inserção do DIU de cobre (OMS)",
      colunas: ["Situação", "Pode inserir?", "Observação"],
      linhas: [
        ["Ciclo menstrual", "Sim, até o 12º dia do início da menstruação", "Outros dias: se certeza razoável de não gravidez"],
        ["Pós-parto < 48 h (inclui pós-placentário)", "Sim (categoria 1–2)", "Maior expulsão que no intervalo"],
        ["Pós-parto 48 h a 4 semanas", "Não (categoria 3)", "Aguardar 4 semanas"],
        ["Pós-parto ≥ 4 semanas", "Sim", "Excluir gravidez se não amamenta exclusivamente"],
        ["Sepse puerperal", "Não (categoria 4)", "Tratar e inserir depois"],
        ["Pós-aborto 1º trimestre", "Sim, imediato", "Exceto aborto séptico"],
        ["Pós-aborto 2º trimestre", "Sim (categoria 2)", "Técnica semelhante à pós-placentária"],
        ["Contracepção de emergência", "Sim, até 5 dias", "Mantém como método regular"]
      ],
      nota: "Categorias: 1 = sem restrição; 2 = benefícios superam riscos; 3 = riscos geralmente superam benefícios; 4 = não usar."
    }
  ],
  orientacoesRetorno: [
    "Cólica e pequeno sangramento nos primeiros dias são normais",
    "Com o DIU de cobre, a menstruação pode ficar mais longa e com mais cólica nos primeiros meses; costuma melhorar",
    "O DIU de cobre protege contra gravidez desde já; não protege de infecções sexualmente transmissíveis: usar camisinha",
    "Voltar imediatamente se dor forte na barriga, febre, corrimento com mau cheiro, dor na relação, atraso menstrual ou se sentir a haste do DIU",
    "Retorno para revisão em 3 a 6 semanas; anotar a data de troca no cartão"
  ],
  relacionadas: ["anticoncepcao", "exame-especular-coleta", "dip", "cervicite-uretrite", "sangramento-uterino-anormal", "parto-vaginal"],
  fontes: [
    "OMS — Medical eligibility criteria for contraceptive use (6ª ed., 2025) e Selected practice recommendations (2016)",
    "OMS/Johns Hopkins — Family Planning: A Global Handbook for Providers (2022)",
    "Ministério da Saúde — Manual técnico para profissionais de saúde: DIU com cobre TCu 380A (2018)",
    "FEBRASGO — Protocolo: Contracepção reversível de longa ação (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
