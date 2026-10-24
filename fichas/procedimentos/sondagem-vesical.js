// Sondagem vesical de demora e de alívio
registrarFicha({
  id: "sondagem-vesical",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Sondagem vesical (demora e alívio)",
  resumo: "Passagem de cateter uretral com técnica estéril para drenagem da bexiga: alívio (intermitente) ou demora (Foley).",
  palavrasChave: "sonda vesical foley cateterismo vesical svd sva retencao urinaria diurese bexigoma",
  critico: {
    tempo: "Sem resistência forçada",
    texto: "Nunca forçar contra resistência. Só insuflar o balão após saída de urina. Suspeita de trauma de uretra (sangue no meato, hematoma perineal, próstata alta) contraindica a sondagem."
  },
  alarmes: [
    "Resistência que não cede com tração do pênis e lubrificação: parar, não forçar",
    "Sangramento uretral durante a passagem",
    "Dor intensa ao insuflar o balão (balão na uretra): desinsuflar imediatamente",
    "Hematúria importante ou hipotensão após esvaziar grande volume"
  ],
  indicacoes: [
    "Retenção urinária aguda (alívio ou demora)",
    "Controle rigoroso de diurese em paciente grave (choque, sepse, grande queimado)",
    "Perioperatório de cirurgias selecionadas",
    "Coleta de urina estéril quando não é possível jato médio (sondagem de alívio)",
    "Cuidado de fim de vida ou úlcera sacral/perineal em incontinente (casos selecionados)"
  ],
  contraindicacoes: [
    "Suspeita de lesão de uretra: sangue no meato, hematoma perineal/escrotal, próstata alta ao toque (trauma pélvico) — fazer uretrografia ou cistostomia",
    "Prostatite aguda (relativa)",
    "Estenose uretral conhecida ou cirurgia uretral recente (relativa: chamar urologia)",
    "Incontinência sem outra indicação (não usar sonda por conveniência)"
  ],
  materiais: [
    "Luvas de procedimento e luvas estéreis",
    "Kit de sondagem estéril (cuba-rim, cuba redonda, pinça, gazes, campo fenestrado)",
    "Antisséptico aquoso (clorexidina aquosa 0,2% ou PVPI tópico) e soro fisiológico",
    "Sonda: alívio (uretral simples) ou Foley 2 vias; adulto 14–16 Fr; criança conforme idade/peso",
    "Lidocaína gel 2% (seringa ou bisnaga estéril)",
    "Seringa de 10–20 mL e água destilada estéril para o balão (volume indicado na sonda)",
    "Bolsa coletora de sistema fechado (demora) ou frasco/cuba (alívio)",
    "Fita adesiva para fixação, biombo, foco de luz"
  ],
  checagemAntes: [
    "Paciente correto e indicação registrada; explicar e obter consentimento verbal",
    "Alergia a látex, clorexidina, iodo ou lidocaína",
    "Sinais de trauma uretral (contraindicação)",
    "USG ou palpação de bexiga (globo vesical) quando a indicação é retenção",
    "Higiene íntima prévia com água e sabão",
    "Testar o balão da Foley antes de introduzir (insuflar e desinsuflar)",
    "Privacidade, posição e iluminação adequadas; segundo profissional se necessário"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Higienizar as mãos, abrir o kit com técnica estéril e calçar luvas estéreis",
      "Posicionar: homem em decúbito dorsal com pernas estendidas; mulher em posição ginecológica",
      "Conectar a sonda ao coletor (sistema fechado) antes de introduzir, quando for de demora",
      "Lubrificar a ponta da sonda; no homem, instilar 10–15 mL de lidocaína gel na uretra e aguardar alguns minutos"
    ] },
    { etapa: "Antissepsia", itens: [
      "Mulher: afastar os pequenos lábios com a mão não dominante (que passa a ser contaminada) e fazer antissepsia de cima para baixo, do meato para fora, uma gaze por movimento",
      "Homem: retrair o prepúcio, fazer antissepsia da glande do meato para a periferia",
      "Colocar o campo fenestrado"
    ] },
    { etapa: "Introdução", itens: [
      "Homem: manter o pênis perpendicular ao corpo (cerca de 90°) com leve tração, para retificar a uretra",
      "Introduzir a sonda delicadamente até a saída de urina; na demora, avançar mais 2–3 cm (no homem, até perto da bifurcação) antes de insuflar",
      "Se resistência na próstata: pedir ao paciente para respirar fundo, manter leve pressão constante; não forçar",
      "Mulher: se a sonda entrar na vagina, deixá-la como referência e usar sonda nova"
    ] },
    { etapa: "Fixação e finalização", itens: [
      "Insuflar o balão com o volume indicado de água destilada; tracionar suavemente até sentir resistência",
      "Homem: reposicionar o prepúcio sobre a glande (evita parafimose)",
      "Fixar a sonda: na coxa (mulher) ou no hipogástrio/abdome (homem, reduz lesão uretral)",
      "Manter a bolsa abaixo do nível da bexiga, sem tocar o chão, sem dobras no circuito",
      "Alívio: deixar drenar e retirar a sonda após o esvaziamento"
    ] }
  ],
  conferirDepois: [
    "Volume drenado e aspecto da urina (hematúria, piúria, coágulos)",
    "Prepúcio reposicionado",
    "Fixação adequada e bolsa abaixo da bexiga, com data da inserção identificada",
    "Dor ou desconforto suprapúbico resolvidos",
    "Pressão arterial se grande volume drenado (> 1 L)",
    "Registrar e reavaliar diariamente a necessidade de manter a sonda"
  ],
  complicacoes: [
    "Falso trajeto / trauma uretral: parar, não reinsistir; chamar urologia (sonda de Coudé ou cistostomia)",
    "Balão insuflado na uretra: dor intensa e ausência de urina — desinsuflar e reposicionar",
    "Hematúria ex vacuo após esvaziar bexigoma: geralmente autolimitada; observar",
    "Infecção urinária associada a cateter: retirar a sonda o quanto antes é a principal prevenção",
    "Parafimose: reduzir o prepúcio imediatamente",
    "Sonda não desinsufla: cortar a via do balão ou chamar urologia; não puxar"
  ],
  documentacao: "Procedimento: sondagem vesical de [demora / alívio].\nIndicação: [ ].\nConsentimento verbal obtido. Sem sinais de trauma uretral.\nTécnica estéril, antissepsia com [clorexidina aquosa / PVPI], lidocaína gel 2%.\nSonda [Foley 2 vias / uretral] nº [ ] Fr, balão insuflado com [ ] mL de água destilada.\nPassagem [sem intercorrências / com dificuldade: descrever].\nDrenado: [ ] mL de urina [clara / concentrada / hematúrica].\nFixação em [coxa / hipogástrio], sistema fechado.\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Manter a bolsa sempre abaixo da cintura e esvaziá-la quando estiver com metade do volume",
    "Lavar as mãos antes e depois de mexer na sonda; higiene íntima diária com água e sabão",
    "Beber água conforme orientação médica",
    "Voltar se febre, dor ou sangue na urina, urina parar de sair, vazamento ao redor da sonda ou sonda sair"
  ],
  relacionadas: ["hpb", "colica-renal", "cistite"],
  fontes: [
    "ANVISA — Medidas de prevenção de infecção relacionada à assistência à saúde (2017)",
    "CDC/HICPAC — Guideline for Prevention of Catheter-Associated Urinary Tract Infections (2009, atualizado 2019)",
    "ATLS 10ª edição (2018) — contraindicações ao cateterismo no trauma pélvico"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
