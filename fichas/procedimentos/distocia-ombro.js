// Distocia de ombro: reconhecimento e sequência de manobras
registrarFicha({
  id: "distocia-ombro",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Distocia de ombro",
  resumo: "Emergência obstétrica em que, após a saída da cabeça, os ombros não se desprendem com tração suave. Sequência de manobras (McRoberts, pressão suprapúbica, rotacionais, braço posterior, quatro apoios) e registro.",
  palavrasChave: "distocia de ombro ombro impactado sinal da tartaruga mcroberts pressao suprapubica rubin woods saca rolha woods reverso braco posterior jacquemier gaskin quatro apoios zavanelli helperr aleeerta also emergencia obstetrica",
  critico: {
    tempo: "Chamar ajuda e anotar o horário",
    texto: "Ao reconhecer (cabeça retrai contra o períneo), anotar a hora do desprendimento da cabeça, chamar ajuda (obstetra, pediatra, anestesista) e iniciar McRoberts com pressão suprapúbica. Não tracionar com força, não fazer pressão no fundo uterino, não fazer rotação forçada da cabeça."
  },
  alarmes: [
    "Intervalo cabeça-corpo prolongando-se: o risco de asfixia aumenta a cada minuto — passar à manobra seguinte, cada uma em cerca de 30–60 s",
    "Tentação de puxar a cabeça com força: causa lesão do plexo braquial — trocar de manobra",
    "Pressão no fundo uterino (Kristeller): proibida — piora a impactação e pode romper o útero",
    "Após o nascimento: recém-nascido deprimido (reanimação neonatal) e risco alto de hemorragia pós-parto e lacerações graves na mãe"
  ],
  indicacoes: [
    "Sinal da tartaruga: cabeça desprende e retrai contra o períneo",
    "Falha em desprender os ombros com tração suave para baixo na contração seguinte à rotação externa",
    "Face da criança vermelha/arroxeada sem rotação externa espontânea",
    "Fatores de risco (alertar a equipe antes): macrossomia, diabetes materno, distocia de ombro prévia, obesidade, expulsivo prolongado, parto instrumental — mas a maioria ocorre sem fator de risco"
  ],
  contraindicacoes: [
    "Pressão no fundo uterino: nunca",
    "Tração forte ou lateral da cabeça, torção do pescoço: nunca",
    "Cortar circular de cordão antes de desprender os ombros: evitar (piora a asfixia se o parto demorar)",
    "Manobras de último recurso (Zavanelli, sinfisiotomia, cleidotomia): somente por obstetra experiente"
  ],
  materiais: [
    "Equipe: pedir ajuda imediatamente (obstetra, pediatra/neonatologista, anestesista, enfermagem, 1 pessoa para cronometrar e registrar)",
    "Maca/cama com pernas livres e auxiliares para hiperflexionar as coxas",
    "Material de episiotomia (tesoura, lidocaína) se precisar de espaço para manobras internas",
    "Material de reanimação neonatal pronto e testado",
    "Ocitocina 10 UI IM, acesso venoso, uterotônicos e ácido tranexâmico disponíveis para hemorragia pós-parto",
    "Relógio visível ou cronômetro"
  ],
  checagemAntes: [
    "Anotar a hora do desprendimento da cabeça",
    "Chamar ajuda em voz alta; avisar que é distocia de ombro",
    "Parturiente informada de forma clara e breve; pedir para parar de fazer força durante as manobras iniciais",
    "Esvaziar a bexiga se possível (não atrasar)",
    "Posicionar as nádegas na borda da cama",
    "Identificar o lado das costas fetais (para saber a direção das rotações)"
  ],
  passos: [
    { etapa: "Mnemônicos", itens: [
      "HELPERR (ALSO): Help (ajuda) — Evaluate for episiotomy (avaliar episiotomia) — Legs (McRoberts) — Pressure (pressão suprapúbica) — Enter (manobras internas) — Remove posterior arm (braço posterior) — Roll (rolar para quatro apoios)",
      "ALEEERTA (adaptação brasileira): A — chamar Ajuda; L — Levantar as pernas (McRoberts); E — pressão suprapúbica Externa; E — avaliar Episiotomia; E — Entrar com a mão (manobras rotacionais internas); R — Remover o braço posterior; T — Trocar de posição (quatro apoios); A — Anotar (registrar tempos e manobras)",
      "A ordem das manobras pode ser adaptada à situação e à experiência da equipe; o essencial é não insistir na mesma manobra"
    ] },
    { etapa: "Manobras externas (1ª linha)", itens: [
      "McRoberts: dois auxiliares hiperflexionam as coxas da mulher sobre o abdome (joelhos em direção aos ombros), retirando a cabeceira; aplicar tração axial suave (alinhada com a coluna fetal, não para baixo com força)",
      "Pressão suprapúbica (Rubin I externa): auxiliar, do lado das costas fetais, coloca a mão em posição de massagem cardíaca acima do púbis e empurra o ombro anterior para baixo e em direção ao tórax fetal (aduzir o ombro); contínua por 30 s e depois intermitente (em balanço)",
      "Repetir a tração axial suave durante a pressão suprapúbica",
      "McRoberts com pressão suprapúbica resolve a maioria dos casos"
    ] },
    { etapa: "Avaliar episiotomia", itens: [
      "A episiotomia não libera o ombro (o problema é ósseo), mas pode dar espaço para a mão nas manobras internas",
      "Fazer mediolateral se a mão não entra"
    ] },
    { etapa: "Manobras internas rotacionais", itens: [
      "Introduzir a mão inteira pela parte posterior da vagina (região sacral, onde há mais espaço)",
      "Rubin II: pressão na face posterior do ombro anterior (pelas costas do feto), empurrando-o em direção ao tórax fetal para levá-lo ao diâmetro oblíquo",
      "Woods (saca-rolha): pressão na face anterior do ombro posterior, girando o feto no sentido de levar o ombro posterior para a frente; pode associar ao Rubin II",
      "Woods reverso: pressão na face posterior do ombro posterior, girando no sentido oposto",
      "Rotação de 180° pode trazer o ombro posterior para baixo do púbis e liberar o parto"
    ] },
    { etapa: "Retirada do braço posterior (Jacquemier)", itens: [
      "Mão inteira na vagina pela região sacral, seguir o braço posterior até o cotovelo",
      "Pressionar a fossa antecubital para fletir o antebraço",
      "Segurar o punho/mão do feto e trazê-lo pela frente do tórax e da face (como um gesto de 'saudação'), para fora da vagina",
      "Não puxar pelo úmero (risco de fratura); fratura de úmero ou clavícula pode ocorrer e é aceitável diante da asfixia"
    ] },
    { etapa: "Quatro apoios (Gaskin)", itens: [
      "Virar a mulher para mãos e joelhos; a gravidade e o aumento dos diâmetros pélvicos podem liberar",
      "Tentar tração suave do ombro posterior (que agora fica para cima) e repetir as manobras internas nessa posição",
      "Útil especialmente sem peridural e quando há poucos auxiliares"
    ] },
    { etapa: "Último recurso (obstetra)", itens: [
      "Fratura intencional da clavícula, sinfisiotomia ou manobra de Zavanelli (reposição da cabeça e cesárea) — somente por profissional treinado e em serviço com centro cirúrgico"
    ] },
    { etapa: "Após o nascimento", itens: [
      "Entregar o recém-nascido à equipe de reanimação; clampeamento imediato se deprimido",
      "Ocitocina 10 UI IM e vigilância rigorosa de hemorragia pós-parto",
      "Revisão cuidadosa do canal de parto (lacerações de 3º e 4º grau são mais frequentes)",
      "Examinar o recém-nascido: movimento dos braços (plexo braquial — paralisia de Erb), clavículas e úmeros"
    ] }
  ],
  conferirDepois: [
    "Hora do desprendimento da cabeça e do corpo (intervalo cabeça-corpo)",
    "Sequência, tempo e quem fez cada manobra; lado das costas fetais (ombro anterior direito ou esquerdo)",
    "Apgar, gasometria de cordão se disponível, peso",
    "Exame neonatal de membros superiores registrado",
    "Perda sanguínea materna e lacerações",
    "Comunicação com a mulher e a família após o evento (explicar o que ocorreu)"
  ],
  complicacoes: [
    "Lesão do plexo braquial (Erb-Duchenne): registrar, encaminhar à pediatria/fisioterapia; a maioria recupera",
    "Fratura de clavícula ou úmero: imobilização conforme pediatria; geralmente boa evolução",
    "Asfixia neonatal, encefalopatia hipóxico-isquêmica: reanimação neonatal, avaliar hipotermia terapêutica em centro de referência",
    "Hemorragia pós-parto: protocolo de hemorragia (ocitocina, ácido tranexâmico, massagem, ajuda)",
    "Lacerações perineais graves e lesão do esfíncter anal: reparo por obstetra no centro obstétrico",
    "Rotura uterina (associada à pressão fúndica): choque, dor — laparotomia"
  ],
  documentacao: "Distocia de ombro em [data].\nHora do desprendimento da cabeça: [hh:mm:ss]. Hora do desprendimento do corpo: [hh:mm:ss]. Intervalo cabeça-corpo: [ ] s.\nOmbro anterior: [direito / esquerdo] (dorso fetal à [direita / esquerda]).\nAjuda chamada às [hh:mm]; chegaram: [nomes/funções].\nManobras em ordem (horário, responsável, resultado): [McRoberts — ], [pressão suprapúbica — ], [episiotomia — sim/não], [Rubin II / Woods / Woods reverso — ], [braço posterior — direito/esquerdo], [quatro apoios — ], [outras — ].\nTração aplicada: [axial suave, sem tração lateral]. Pressão fúndica: não realizada.\nRN: Apgar [ ]/[ ], peso [ ] g, gasometria de cordão [ ], reanimação [não / sim: ], exame dos membros superiores [ ].\nMãe: perda sanguínea [ ] mL, lacerações [ ].\nComunicado à paciente e acompanhante por [nome].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Observar se o bebê movimenta os dois braços igualmente; avisar se um braço ficar parado ou com choro ao mexer",
    "Na próxima gestação, informar ao pré-natal que houve distocia de ombro (o risco de repetir é maior e o plano de parto deve ser discutido)",
    "Voltar se sangramento intenso, febre, dor perineal forte ou dificuldade para controlar fezes ou gases"
  ],
  relacionadas: ["parto-vaginal", "distocias", "hemorragia-pos-parto", "revisao-canal-episiorrafia", "trabalho-de-parto", "diabetes-gestacao"],
  fontes: [
    "RCOG — Green-top Guideline nº 42: Shoulder Dystocia (2012)",
    "ACOG — Practice Bulletin nº 178: Shoulder Dystocia (2017, reafirmado)",
    "ALSO — Advanced Life Support in Obstetrics (AAFP), mnemônico HELPERR",
    "FEBRASGO — Protocolo: Distocia de ombro (2021)",
    "Ministério da Saúde — Diretrizes Nacionais de Assistência ao Parto Normal (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
