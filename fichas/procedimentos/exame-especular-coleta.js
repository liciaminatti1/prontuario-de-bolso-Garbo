// Exame especular, toque bimanual e coletas (citopatológico, DNA-HPV, secreções)
registrarFicha({
  id: "exame-especular-coleta",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Exame especular, toque e coleta do preventivo e do DNA-HPV",
  resumo: "Exame ginecológico com espéculo e toque bimanual, coleta do teste de DNA-HPV e do citopatológico (Papanicolau) para rastreamento do câncer do colo, e coleta de secreção vaginal e cervical para diagnóstico de vulvovaginites e IST.",
  palavrasChave: "exame especular especulo toque bimanual exame ginecologico preventivo papanicolau citologia oncotica citopatologico coleta dna hpv teste molecular meio liquido espatula de ayre escova endocervical secrecao vaginal ph whiff koh exame a fresco clamidia gonorreia",
  critico: {
    tempo: "Consentimento e acompanhante",
    texto: "Explicar cada etapa, pedir consentimento e oferecer acompanhante (profissional ou de escolha da paciente). A paciente pode interromper o exame a qualquer momento. Na coleta do DNA-HPV e da citologia, não usar lubrificante no espéculo (só água ou SF, se necessário)."
  },
  alarmes: [
    "Lesão vegetante, ulcerada ou friável no colo, ou sangramento ao toque: encaminhar para colposcopia independentemente do resultado do rastreamento",
    "Dor intensa à mobilização do colo, febre ou massa anexial: pensar em DIP, abscesso ou gravidez ectópica",
    "Sangramento vaginal com atraso menstrual: teste de gravidez antes de prosseguir",
    "Sinais de violência sexual: acolher, seguir o fluxo da ficha de violência sexual, notificar",
    "Reação vasovagal ou dor que a paciente não tolera: parar"
  ],
  indicacoes: [
    "Rastreamento do câncer do colo do útero: DNA-HPV oncogênico (onde implantado) ou citopatológico, 25 a 64 anos com atividade sexual prévia (MS/INCA)",
    "Corrimento vaginal, prurido, odor, sangramento ou dor pélvica",
    "Investigação de IST (cervicite, úlceras) e de DIP",
    "Antes da inserção do DIU",
    "Seguimento de lesões precursoras após colposcopia/tratamento"
  ],
  contraindicacoes: [
    "Recusa da paciente (respeitar; oferecer nova data e, para HPV, autocoleta onde houver)",
    "Mulher sem início da vida sexual: não fazer especular; avaliar a necessidade e usar espéculo virginal só com consentimento e indicação",
    "Menstruação: adiar a coleta do citopatológico (pode interferir); exame especular por queixa pode ser feito",
    "Gestação não contraindica o exame nem a coleta (não usar escova endocervical na citologia convencional da gestante, só espátula; coleta do DNA-HPV conforme protocolo local)"
  ],
  materiais: [
    "Espéculo descartável tamanhos P, M e G (P para nulíparas, pós-menopausa ou idosas)",
    "Luvas de procedimento, foco de luz, mesa ginecológica, lençol, avental",
    "DNA-HPV: frasco com meio líquido do laboratório de referência e escova cervical própria do kit (ou conforme o fabricante)",
    "Citologia convencional: espátula de Ayre, escova endocervical, lâmina com extremidade fosca identificada a lápis, fixador (álcool 96% ou spray) e porta-lâmina",
    "Requisição preenchida (SISCAN no SUS) e etiqueta",
    "Secreções: fita de pH, lâminas, tubo com SF 0,9% e KOH 10% (exame a fresco), swab de algodão/dacron, meio de transporte para cultura e kit de biologia molecular para clamídia e gonococo, se disponível",
    "Gazes, pinça Cheron (pinça de antissepsia), cuba, lixo infectante"
  ],
  checagemAntes: [
    "Identificação, anamnese ginecológica: data da última menstruação, método contraceptivo, gestação, último rastreamento e resultados, queixas",
    "Orientações seguidas para o rastreamento: sem relação com penetração vaginal, duchas, cremes ou óvulos vaginais nas 48 h anteriores (citologia); fora da menstruação",
    "Consentimento verbal e oferta de acompanhante; registrar",
    "Bexiga vazia",
    "Material conferido e lâmina/frasco identificados antes da coleta",
    "Alergia a látex (luvas)"
  ],
  passos: [
    { etapa: "Preparo e inspeção", itens: [
      "Posição ginecológica com nádegas na borda da mesa, lençol cobrindo as coxas",
      "Inspeção da vulva, períneo e região perianal: lesões, verrugas, úlceras, atrofia, secreção, cicatrizes",
      "Avisar antes de tocar; afastar os pequenos lábios com dois dedos"
    ] },
    { etapa: "Exame especular", itens: [
      "Escolher o tamanho; aquecer e umedecer com água ou SF se necessário (lubrificante só se não for coletar citologia/HPV, ou mínima quantidade na face externa)",
      "Introduzir fechado, oblíquo, pressionando levemente a parede posterior (evita uretra e clitóris); girar para a horizontal ao avançar",
      "Abrir devagar até expor o colo; fixar a rosca",
      "Observar paredes vaginais, conteúdo (cor, odor, quantidade), colo (ectopia, pólipos, lesões, mucopus no orifício), fios de DIU"
    ] },
    { etapa: "Coleta do DNA-HPV (meio líquido)", itens: [
      "Introduzir a escova do kit no orifício cervical e girar cerca de 5 voltas no sentido indicado pelo fabricante, abrangendo ecto e endocérvice",
      "Agitar a escova no frasco com meio líquido (ou destacar a ponta dentro do frasco, conforme o kit)",
      "Fechar bem, identificar e preencher a requisição",
      "Onde a citologia reflexa é feita no mesmo frasco, não coletar lâmina separada"
    ] },
    { etapa: "Coleta do citopatológico convencional (onde não há DNA-HPV)", itens: [
      "Ectocérvice: espátula de Ayre com a ponta mais longa no orifício, girar 360° com pressão leve",
      "Estender na metade da lâmina (longitudinal, uma só passada)",
      "Endocérvice: escova no canal, girar 360° (não usar escova na gestante)",
      "Estender na outra metade da lâmina rolando a escova",
      "Fixar imediatamente (spray a cerca de 20 cm ou imersão em álcool 96%) para não secar"
    ] },
    { etapa: "Coleta de secreções (se queixa)", itens: [
      "pH: encostar a fita na parede lateral da vagina (não no colo); normal até 4,5",
      "Teste das aminas (whiff): gota de KOH 10% sobre a secreção — odor de peixe sugere vaginose ou tricomoníase",
      "Exame a fresco: secreção em SF (clue cells, tricomonas) e em KOH (hifas e pseudo-hifas)",
      "Gram de secreção vaginal (escore de Nugent) se laboratório disponível",
      "Endocérvice: swab para biologia molecular de clamídia e gonococo (após limpar o excesso de muco), conforme o kit"
    ] },
    { etapa: "Retirada e toque bimanual", itens: [
      "Afrouxar a rosca, fechar parcialmente e retirar girando, observando as paredes vaginais",
      "Toque: dois dedos (indicador e médio) lubrificados na vagina e a outra mão no hipogástrio",
      "Avaliar colo (consistência, dor à mobilização), útero (tamanho, posição, contorno, mobilidade, dor) e anexos (massas, dor)",
      "Toque retal ou retovaginal se indicado (septo retovaginal, endometriose, paramétrios)"
    ] }
  ],
  conferirDepois: [
    "Frasco/lâmina identificados com nome completo, data de nascimento e data da coleta",
    "Requisição completa (SISCAN): motivo, último exame, achados ao especular (inclusive lesão visível)",
    "Se lesão suspeita visível: encaminhar para colposcopia já, sem aguardar o resultado",
    "Tratamento iniciado se diagnóstico sindrômico de vulvovaginite ou cervicite (ver fichas)",
    "Paciente informada de como e quando receberá o resultado"
  ],
  complicacoes: [
    "Pequeno sangramento após a coleta (escova endocervical): esperado, orientar",
    "Dor ou desconforto: usar espéculo menor, pedir para relaxar o períneo, interromper se necessário",
    "Reação vasovagal: interromper, decúbito com pernas elevadas",
    "Amostra insatisfatória (sangue, ressecamento, poucas células): repetir em 6–12 semanas (ou conforme laudo), corrigindo a causa",
    "Lesão do colo ou parede com o espéculo: compressão com gaze"
  ],
  documentacao: "Exame ginecológico realizado com consentimento verbal, acompanhante [presente: nome/função / recusado pela paciente].\nDUM: [ ]. Método contraceptivo: [ ]. Último rastreamento: [data / resultado].\nVulva/períneo: [sem alterações / descrever].\nEspéculo [P / M / G]: paredes vaginais [ ], conteúdo [ ] (pH [ ], teste das aminas [positivo / negativo]), colo [epitelizado / ectopia / lesão: descrever], [fios de DIU visíveis].\nColeta: [DNA-HPV em meio líquido / citopatológico convencional (espátula e escova)] [e secreção para: ].\nToque bimanual: útero [tamanho, posição, mobilidade], anexos [livres / massa / dor], mobilização do colo [indolor / dolorosa].\nConduta: [ ].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Achados das secreções vaginais",
      colunas: ["Condição", "pH", "Aminas (KOH)", "Microscopia"],
      linhas: [
        ["Normal", "≤ 4,5", "Negativo", "Lactobacilos, células epiteliais"],
        ["Vaginose bacteriana", "> 4,5", "Positivo", "Clue cells, poucos lactobacilos"],
        ["Candidíase", "≤ 4,5", "Negativo", "Hifas e pseudo-hifas (KOH)"],
        ["Tricomoníase", "> 4,5", "Frequentemente positivo", "Tricomonas móveis (SF), muitos leucócitos"]
      ]
    }
  ],
  orientacoesRetorno: [
    "Pode sair um pouco de sangue nas próximas horas: é normal",
    "O resultado do teste de HPV ou do preventivo será avisado pela unidade; guardar o comprovante",
    "Se o teste de HPV der negativo, o próximo é em 5 anos; no preventivo convencional, seguir o intervalo informado",
    "Voltar antes se sangramento após relação, entre as menstruações ou após a menopausa, corrimento com odor, dor pélvica ou febre"
  ],
  relacionadas: ["rastreio-cancer", "vulvovaginites", "vaginose-bacteriana", "candidiase-vulvovaginal", "tricomoniase", "cervicite-uretrite", "dip", "insercao-diu", "violencia-sexual"],
  fontes: [
    "INCA/Ministério da Saúde — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016)",
    "Ministério da Saúde/INCA — Diretrizes para o rastreamento do câncer do colo do útero com teste molecular de DNA-HPV (2024/2025)",
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "FEBRASGO — Protocolos: vulvovaginites e rastreamento do câncer do colo (2021–2024)",
    "OMS — WHO guideline for screening and treatment of cervical pre-cancer lesions (2ª ed., 2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
