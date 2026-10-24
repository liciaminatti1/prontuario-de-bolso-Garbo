// Sutura de ferimentos cutâneos e retirada de pontos
registrarFicha({
  id: "sutura",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Sutura de ferimentos e retirada de pontos",
  resumo: "Fechamento primário de lacerações cutâneas no PS e na UBS: avaliação da ferida, escolha do fio por região, técnica dos pontos simples, Donati e intradérmico, e retirada dos pontos.",
  palavrasChave: "sutura ponto pontos laceracao corte ferimento corto contuso fio nylon mononylon vicryl poliglactina catgut agulha porta-agulha donati colchoeiro intradermico retirada de pontos deiscencia cola cirurgica fita adesiva steri-strip",
  critico: {
    tempo: "Explorar a ferida antes de fechar",
    texto: "Antes de suturar: hemostasia, exploração do fundo com boa luz, função de tendão, nervo e vaso distal, retirada de corpo estranho e irrigação abundante. Avaliar profilaxia do tétano em toda ferida."
  },
  alarmes: [
    "Lesão de tendão, nervo, artéria, articulação ou ducto (parótida, lacrimal): não suturar no PS — encaminhar ao especialista após limpeza e curativo",
    "Sangramento pulsátil ou que não para com compressão: controle de hemorragia e cirurgia",
    "Ferida de mão com mordida humana ou em punho cerrado (contra dente): não fechar; antibiótico e cirurgia de mão",
    "Lesão por injeção de alta pressão, esmagamento extenso ou perda de substância: encaminhar",
    "Ferida de pálpebra com borda livre, margem do vermelhão do lábio complexa, orelha com cartilagem exposta: considerar especialista"
  ],
  indicacoes: [
    "Laceração com bordas que se afastam, profundidade além da derme ou em área de tensão",
    "Ferida com sangramento controlado e sem contaminação grosseira, dentro da janela de fechamento primário",
    "Feridas pequenas, retilíneas, sem tensão: preferir fita adesiva ou cola cirúrgica (especialmente em crianças)"
  ],
  contraindicacoes: [
    "Ferida infectada ou com sinais de inflamação: não fechar (deixar cicatrizar por segunda intenção ou fechamento tardio)",
    "Ferida muito contaminada (fezes, terra, saliva) ou tardia, sobretudo em extremidades: considerar fechamento primário retardado em 3–5 dias",
    "Mordedura de animal em mão e pé, ou em imunossuprimido: em geral não fechar; mordedura em face pode ser suturada após limpeza rigorosa (avaliar profilaxia de raiva)",
    "Ferida puntiforme profunda (prego, perfuração): não suturar",
    "Lesão de estrutura profunda (tendão, nervo, vaso, articulação): reparo pelo especialista",
    "Úlcera, ferida crônica ou abscesso"
  ],
  materiais: [
    "Luvas estéreis, campo fenestrado estéril, gazes, foco de luz",
    "Kit de sutura: porta-agulha, pinça anatômica e dente de rato (pinça Adson), tesoura de fio, tesoura de Íris/Metzenbaum para desbridamento",
    "Fio monofilamentar não absorvível (náilon/mononylon) 3-0, 4-0, 5-0 e 6-0 com agulha cortante; fio absorvível (poliglactina) 3-0/4-0/5-0 para planos profundos e mucosa",
    "Anestésico local: lidocaína 1% ou 2% com ou sem vasoconstritor; seringa 10 mL, agulha 40 × 12 para aspirar e 13 × 4,5 ou 25 × 7 para infiltrar",
    "SF 0,9% para irrigação (seringa de 20 mL com agulha 40 × 12 ou cateter 18 G como bico) — volume generoso (em geral 100 mL por cm de ferida, ou mais se suja)",
    "Antisséptico: clorexidina aquosa ou PVPI tópico para a pele ao redor",
    "Curativo: gaze e fita, ou curativo não aderente; fita adesiva estéril (tipo Steri-Strip) e cola cirúrgica se disponíveis",
    "Lâmina de bisturi nº 15 para regularizar bordas; coletor de perfurocortante"
  ],
  checagemAntes: [
    "Mecanismo, hora da lesão, local (casa, trabalho, rua) e grau de contaminação",
    "Situação vacinal do tétano (ver ficha tetano-profilaxia) e, se mordedura, profilaxia de raiva",
    "Alergias (anestésico local, látex, iodo); uso de anticoagulante; diabetes, imunossupressão, tabagismo, uso de corticoide",
    "Exame neurovascular e motor distal ANTES da anestesia: sensibilidade, perfusão, flexão/extensão de cada dedo contra resistência",
    "Suspeita de corpo estranho (vidro, metal): RX; vidro em geral aparece no RX",
    "Explicar o procedimento; consentimento verbal; criança: avaliar contenção, presença do responsável e sedação",
    "Feridas na face: avaliar cicatriz e estética; feridas que cruzam margem do vermelhão ou da sobrancelha exigem alinhamento exato (não raspar sobrancelha)"
  ],
  passos: [
    { etapa: "Preparo e anestesia", itens: [
      "Posicionar o paciente deitado (evita síncope), ferida bem iluminada",
      "Cabelo: afastar ou cortar com tesoura; não raspar (aumenta infecção)",
      "Anestesia local infiltrando pelas bordas da ferida (dentro da ferida, menos dolorosa) ou bloqueio regional (dedo: bloqueio digital). Ver ficha anestesia-local para doses máximas",
      "Aguardar o efeito (2–5 min) e testar com a ponta da agulha"
    ] },
    { etapa: "Limpeza e exploração", itens: [
      "Irrigar sob pressão com SF 0,9% ou água potável corrente (tão eficaz quanto SF em feridas simples)",
      "Antissepsia da pele ao redor (não usar antisséptico concentrado dentro da ferida)",
      "Explorar o fundo da ferida em toda a sua extensão, com hemostasia, à procura de corpo estranho, tendão, osso ou articulação exposta",
      "Desbridar tecido desvitalizado e regularizar bordas muito irregulares com bisturi ou tesoura, economizando tecido (principalmente na face)",
      "Hemostasia por compressão; vasos pequenos podem ser ligados com fio absorvível"
    ] },
    { etapa: "Sutura", itens: [
      "Calçar luvas estéreis e colocar o campo fenestrado",
      "Ferida profunda ou com tensão: aproximar o subcutâneo/derme com fio absorvível (poliglactina 4-0/5-0), nó invertido (sepultado), para eliminar espaço morto",
      "Ponto simples: agulha entra a 90° na pele, a cerca de 2–3 mm da borda (1–2 mm na face), sai à mesma distância e profundidade do outro lado; pegar mais profundidade que largura para everter as bordas",
      "Começar pelo meio da ferida ou por pontos de referência (margem do lábio, sobrancelha, ângulos) e ir dividindo; espaçamento semelhante à distância da borda",
      "Nó: 1ª laçada dupla (cirurgião) e mais 2–3 laçadas simples alternadas (náilon pede 4–5 laçadas); nó lateral à ferida, sem estrangular — aproximar, não apertar (vai edemaciar)",
      "Donati (colchoeiro vertical): entra longe (cerca de 5–8 mm), sai longe do outro lado, volta perto (1–2 mm) dos dois lados e amarra. Indicado em áreas de tensão, pele frouxa ou bordas que tendem a inverter (dorso da mão, palma, joelho)",
      "Colchoeiro horizontal: útil em pele frágil ou para reduzir tensão; aproxima e everte",
      "Intradérmico: fio monofilamentar (absorvível ou náilon) passando na derme, paralelo à superfície, alternando lados, sem pontos visíveis. Bom resultado estético em face e feridas lineares sem tensão; exige ferida limpa e boa técnica",
      "Alternativas sem agulha: fita adesiva estéril em feridas lineares pequenas e sem tensão; cola cirúrgica (2-octil-cianoacrilato) em feridas superficiais, nunca dentro da ferida, em mucosa ou perto do olho sem proteção"
    ] },
    { etapa: "Finalização", itens: [
      "Limpar sangue ao redor com SF 0,9%; curativo não aderente e gaze seca nas primeiras 24–48 h",
      "Mão e dedos: tala se a ferida passa sobre articulação",
      "Profilaxia do tétano conforme ficha tetano-profilaxia",
      "Antibiótico profilático não é indicado na ferida simples; considerar em mordedura, ferida muito contaminada, fratura exposta, mão/pé com fechamento tardio ou imunossuprimido",
      "Orientar data de retirada dos pontos (tabela)"
    ] },
    { etapa: "Retirada de pontos", itens: [
      "Conferir cicatrização: bordas unidas, sem secreção, sem deiscência; se infecção, retirar pontos alternados ou todos e drenar",
      "Limpar com SF 0,9%; segurar o nó com a pinça e levantar levemente",
      "Cortar o fio rente à pele, do lado oposto ao nó, e puxar em direção à ferida (nunca afastando as bordas), para que o fio externo não passe por dentro",
      "Donati: cortar a alça curta próxima ao nó e puxar pelo nó",
      "Se a ferida parecer frágil: retirar pontos alternados e aplicar fita adesiva estéril; retirar o restante em 2–3 dias",
      "Orientar proteção solar da cicatriz por 6–12 meses"
    ] }
  ],
  conferirDepois: [
    "Bordas bem aproximadas e evertidas, sem tensão nem isquemia (pele pálida entre pontos)",
    "Hemostasia completa",
    "Exame neurovascular e motor distal repetido",
    "Vacina antitetânica/imunoglobulina e profilaxia de raiva registradas quando indicadas",
    "Data de retirada dos pontos e sinais de infecção explicados ao paciente"
  ],
  complicacoes: [
    "Infecção da ferida (eritema, calor, secreção, febre): retirar pontos, drenar, cultura se purulenta e antibiótico (ver celulite-erisipela e furunculo-abscesso)",
    "Deiscência: se limpa e precoce, pode ressuturar; se infectada, deixar por segunda intenção",
    "Hematoma sob a sutura: abrir pontos, drenar e fazer hemostasia",
    "Marca dos pontos (trilho de trem): pontos apertados ou retirados tarde — respeitar prazos",
    "Corpo estranho retido: dor persistente ou infecção; RX/USG e exploração",
    "Cicatriz hipertrófica ou queloide: encaminhar à dermatologia se sintomática",
    "Lesão de tendão ou nervo não reconhecida: reexaminar na retirada; encaminhar"
  ],
  tabelas: [
    {
      titulo: "Fio e prazo de retirada por região (adulto; náilon monofilamentar)",
      colunas: ["Região", "Fio de pele", "Dias para retirar"],
      linhas: [
        ["Face, pálpebra, nariz, orelha", "5-0 ou 6-0", "3–5 (pálpebra 3–5)"],
        ["Lábio (pele)", "6-0; mucosa e vermelhão com absorvível 5-0", "3–5 (absorvível não precisa retirar)"],
        ["Couro cabeludo", "3-0 ou 4-0 (ou grampos)", "7–10"],
        ["Pescoço", "4-0 ou 5-0", "5–7"],
        ["Tórax e abdome", "4-0", "7–10"],
        ["Dorso", "3-0 ou 4-0", "10–14"],
        ["Membros superiores e inferiores", "4-0", "10–14"],
        ["Sobre articulações (joelho, cotovelo)", "4-0 (considerar Donati)", "14"],
        ["Mão e dedos", "4-0 ou 5-0", "10–14"],
        ["Planta do pé", "3-0 ou 4-0", "14–21"],
        ["Plano subcutâneo, mucosa oral, língua", "Absorvível (poliglactina) 4-0 ou 5-0", "Não retirar"]
      ],
      nota: "Crianças cicatrizam mais rápido: em geral retirar 1–2 dias antes. Diabéticos, idosos, desnutridos e uso de corticoide: retirar mais tarde. Na face de criança, absorvível de absorção rápida evita a retirada."
    }
  ],
  documentacao: "Procedimento: sutura de ferimento.\nFerida: [corto-contusa / incisa / lacerada], [ ] cm, em [região], ocorrida há [ ] h, mecanismo [ ].\nExame antes: [sensibilidade, perfusão e motricidade distais preservadas / alteração].\nAnestesia: lidocaína [1% / 2%] [com / sem] vasoconstritor, [ ] mL, [infiltração local / bloqueio digital].\nIrrigação com [ ] mL de SF 0,9%. Exploração: [sem corpo estranho / sem lesão de tendão, nervo ou vaso].\nDesbridamento: [sim / não].\nSutura: [plano profundo com [fio] [ ]] + pele com [náilon [ ]-0], [ ] pontos [simples / Donati / intradérmico].\nCurativo [ ]. Tala: [sim / não].\nTétano: [ ]. Raiva: [não se aplica / conduta].\nRetirada dos pontos prevista em [ ] dias, na UBS.\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Mantenha o curativo seco por 24 a 48 horas; depois pode lavar com água e sabão, secar bem e cobrir com gaze limpa",
    "Não use pomadas caseiras, pó de café, açúcar ou outros produtos sobre os pontos",
    "Tire os pontos no dia indicado, na unidade de saúde",
    "Evite esforço e esticar a área até retirar os pontos; mantenha o membro elevado se estiver inchado",
    "Proteja a cicatriz do sol por 6 meses (filtro solar ou roupa)",
    "Volte antes se houver vermelhidão que aumenta, calor, pus, mau cheiro, febre, sangramento, os pontos abrirem, ou se o dedo/membro ficar dormente, frio ou sem força"
  ],
  relacionadas: ["anestesia-local", "feridas-escoriacoes", "tetano-profilaxia", "controle-hemorragia-torniquete", "curativos-desbridamento", "celulite-erisipela"],
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011)",
    "ATLS 10ª edição (2018): avaliação de ferimentos de partes moles",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2024): tétano acidental e raiva",
    "Forsch RT, Little SH, Williams C — Laceration Repair: A Practical Approach. Am Fam Physician (2017)",
    "Cochrane — Water for wound cleansing (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
