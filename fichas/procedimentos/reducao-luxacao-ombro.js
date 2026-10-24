// Redução de luxação anterior do ombro
registrarFicha({
  id: "reducao-luxacao-ombro",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Redução de luxação anterior do ombro",
  resumo: "Redução fechada da luxação glenoumeral anterior no PS por técnicas de baixa força (Cunningham, rotação externa, FARES, manipulação escapular), com Kocher modificado como alternativa, analgesia intra-articular e checagem do nervo axilar.",
  palavrasChave: "luxacao de ombro luxacao glenoumeral anterior reducao cunningham rotacao externa hennepin kocher fares manipulacao escapular stimson hipocrates nervo axilar lidocaina intra-articular sedacao tipoia bankart hill-sachs",
  critico: {
    tempo: "RX antes e depois; nervo axilar",
    texto: "Fazer RX (AP e perfil escapular em Y ou axilar) antes, para excluir fratura do colo do úmero, e depois da redução. Examinar e registrar a sensibilidade da face lateral do ombro (nervo axilar) e os pulsos antes e depois."
  },
  alarmes: [
    "Fratura do colo cirúrgico/anatômico do úmero associada: não reduzir no PS — ortopedia (risco de desviar a fratura)",
    "Pulso radial ausente, mão fria ou hematoma axilar em expansão: lesão da artéria axilar — vascular urgente",
    "Déficit neurológico novo após a manobra: registrar, RX e ortopedia",
    "Luxação posterior (convulsão, choque elétrico; braço em rotação interna fixa) ou inferior (luxatio erecta): técnica diferente — ortopedia",
    "Duas tentativas sem sucesso com analgesia adequada: sedação ou ortopedia; não aumentar a força"
  ],
  indicacoes: [
    "Luxação glenoumeral anterior confirmada clinicamente e por RX, sem fratura do colo do úmero",
    "Luxação anterior com fratura não desviada da tuberosidade maior: pode ser reduzida com cuidado (a tuberosidade costuma reduzir junto)",
    "Luxação recidivante típica: alguns serviços reduzem sem RX prévio; fazer RX após"
  ],
  contraindicacoes: [
    "Fratura do colo do úmero ou fratura-luxação complexa",
    "Fratura da glenoide grande ou instável (relativa: ortopedia)",
    "Luxação há vários dias (crônica): redução fechada arriscada — ortopedia",
    "Lesão vascular suspeita: priorizar avaliação vascular",
    "Paciente que não colabora sem possibilidade de sedação segura"
  ],
  materiais: [
    "RX disponível (AP verdadeiro do ombro e perfil escapular em Y ou axilar)",
    "Lidocaína 1% sem vasoconstritor 20 mL, seringa de 20 mL, agulha 40 × 8 ou 30 × 7 (ou cateter 20 G), clorexidina",
    "Analgesia/sedação: morfina ou fentanil; para sedação, cetamina, propofol ou midazolam com monitorização e material de via aérea",
    "Monitor, oxímetro, O₂ e aspirador (se sedação)",
    "Lençol dobrado (contratração) e cadeira",
    "Tipoia (ou imobilizador tipo Velpeau)"
  ],
  checagemAntes: [
    "Mecanismo (abdução + rotação externa), primeiro episódio ou recidiva, idade, mão dominante",
    "Exame: ombro quadrado (perda do contorno do deltoide), acrômio proeminente, braço em leve abdução e rotação externa, cabeça umeral palpável anteriormente",
    "Exame neurovascular registrado ANTES: sensibilidade da face lateral do ombro (nervo axilar — 'região do distintivo'), pulso radial, sensibilidade e força da mão",
    "RX: confirmar luxação anterior e excluir fratura do colo do úmero",
    "Analgesia/sedação planejada; jejum e consentimento se sedação",
    "Explicar o procedimento: relaxamento muscular é a chave"
  ],
  passos: [
    { etapa: "Analgesia", itens: [
      "Analgesia IV (ex.: morfina 0,1 mg/kg, máx. 10 mg, ou fentanil 1 mcg/kg) conforme dor",
      "Bloqueio intra-articular (alternativa à sedação, igualmente eficaz em vários estudos): antissepsia; agulha cerca de 2 cm abaixo da borda lateral do acrômio, na depressão deixada pela cabeça umeral, direcionada medial e levemente caudal; aspirar (sangue confirma a cavidade) e injetar 20 mL de lidocaína 1% sem vasoconstritor (máx. 4,5 mg/kg); aguardar 10–15 min",
      "Sedação de procedimento (se necessário): monitorização completa, profissional dedicado à via aérea (ver sequencia-rapida-intubacao e anestesia-local para cuidados)",
      "Várias técnicas de baixa força funcionam sem sedação em paciente colaborativo"
    ] },
    { etapa: "Técnica de Cunningham (sem sedação, paciente colaborativo)", itens: [
      "Paciente sentado, ereto, com os ombros para trás ('postura de peito estufado'), sem encolher o ombro",
      "Médico sentado ou ajoelhado à frente, do lado afetado; o antebraço do paciente apoiado no antebraço do médico, cotovelo fletido e braço junto ao corpo (aduzido)",
      "Mão do paciente apoiada no ombro do médico",
      "Massagear suavemente bíceps, deltoide e trapézio para relaxar a musculatura, enquanto o paciente leva as escápulas para trás e para baixo",
      "A cabeça umeral costuma reduzir espontaneamente em alguns minutos; pode-se associar leve tração para baixo no cotovelo"
    ] },
    { etapa: "Rotação externa (Hennepin)", itens: [
      "Paciente deitado (ou sentado), braço aduzido junto ao corpo e cotovelo fletido a 90°",
      "Segurar o cotovelo junto ao tronco com uma mão e o punho com a outra",
      "Rodar externamente o antebraço muito lentamente (5–10 min no total), parando sempre que houver espasmo ou dor e aguardando relaxar",
      "A redução costuma ocorrer entre 70° e 110° de rotação externa; se não reduzir, elevar o braço (flexão anterior) mantendo a rotação externa, ou associar Cunningham"
    ] },
    { etapa: "FARES e manipulação escapular", itens: [
      "FARES: paciente em decúbito dorsal; segurar o punho com o cotovelo estendido e antebraço neutro; aplicar tração longitudinal leve e movimentos oscilatórios verticais curtos (5 cm, 2–3 por segundo) enquanto abduz o braço lentamente; ao passar de 90°, rodar externamente — a redução ocorre geralmente entre 120° e 150°",
      "Manipulação escapular: paciente sentado (ou em decúbito ventral com braço pendente); um auxiliar aplica tração leve no braço para frente; o médico empurra a ponta inferior da escápula medialmente com os polegares e roda levemente a borda superior lateralmente"
    ] },
    { etapa: "Kocher modificado (alternativa; sem força)", itens: [
      "Paciente deitado, cotovelo fletido a 90° e braço aduzido",
      "1) Rotação externa lenta até sentir resistência (como na técnica anterior)",
      "2) Adução: levar o cotovelo em direção à linha média do tórax, mantendo a rotação externa",
      "3) Rotação interna: levar a mão do paciente em direção ao ombro oposto",
      "Fazer sem tração e sem força; o Kocher clássico com tração/alavanca aumenta risco de fratura do úmero e lesão neurovascular — evitar em idosos com osteoporose"
    ] },
    { etapa: "Após a redução", itens: [
      "Sinais de sucesso: estalido/sensação de encaixe, recuperação do contorno do ombro, alívio da dor e paciente consegue tocar o ombro oposto com a mão",
      "Repetir e registrar o exame neurovascular (nervo axilar, pulso radial)",
      "RX de controle (AP e perfil em Y/axilar)",
      "Imobilizar com tipoia em rotação interna para conforto (ver imobilizacao-talas)",
      "Analgesia oral e orientação"
    ] }
  ],
  conferirDepois: [
    "RX confirma redução e mostra se há fratura associada (tuberosidade maior, Bankart ósseo, Hill-Sachs)",
    "Nervo axilar e pulso radial registrados após a manobra",
    "Recuperação adequada da sedação, se usada",
    "Paciente com tipoia, analgesia e retorno à ortopedia em cerca de 1 semana",
    "Paciente acima de 40 anos: maior risco de lesão do manguito rotador — avaliar na reavaliação (incapacidade de abduzir depois que a dor melhora)"
  ],
  complicacoes: [
    "Falha da redução: trocar de técnica, melhorar analgesia (intra-articular) ou sedação; após falhas, ortopedia (pode exigir redução sob anestesia geral)",
    "Fratura do úmero durante a manobra (mais com força e Kocher clássico em idosos): imobilizar, RX e ortopedia",
    "Lesão do nervo axilar ou do plexo: geralmente neuropraxia; registrar e encaminhar",
    "Lesão da artéria axilar (rara, idosos): pulso ausente, hematoma — vascular urgente",
    "Reluxação precoce: reduzir novamente e encaminhar (instabilidade)",
    "Complicações da sedação (hipoventilação, hipotensão): ventilar, reverter, monitorar",
    "Toxicidade por lidocaína: respeitar dose máxima (ver anestesia-local)"
  ],
  documentacao: "Procedimento: redução fechada de luxação anterior do ombro [D/E].\nMecanismo: [ ]. Episódio: [primeiro / recidiva nº [ ]].\nRX pré: luxação anterior [subcoracoide / subglenoide], [sem fratura / fratura da tuberosidade maior não desviada].\nNeurovascular PRÉ: sensibilidade do nervo axilar [preservada / alterada], pulso radial [ ], mão [ ].\nAnalgesia: [lidocaína 1% 20 mL intra-articular] / [opioide [ ]] / [sedação com [ ] — monitorizado].\nTécnica: [Cunningham / rotação externa / FARES / manipulação escapular / Kocher modificado], [ ] tentativa(s), redução às [hh:mm].\nNeurovascular PÓS: [ ].\nRX pós: [redução confirmada; achados: ].\nImobilização: tipoia. Analgesia prescrita. Retorno ortopedia em [ ].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Use a tipoia para conforto pelo tempo orientado (em geral 1 a 3 semanas, conforme o ortopedista); tire para o banho e para mexer cotovelo, punho e dedos várias vezes ao dia",
    "Evite levantar o braço para o lado e girar para fora (posição de arremesso) até liberação",
    "Use gelo por 20 minutos algumas vezes ao dia nos primeiros dias e o analgésico receitado",
    "Faça a consulta com o ortopedista: pode precisar de fisioterapia ou cirurgia, principalmente se for jovem e praticar esporte",
    "Volte imediatamente se o ombro sair de novo, se o braço ou a mão ficarem dormentes, frios, roxos ou fracos, ou se a dor piorar muito"
  ],
  relacionadas: ["imobilizacao-talas", "anestesia-local", "dor-musculoesqueletica", "analgesicos-antitermicos"],
  fontes: [
    "Cunningham NJ — Techniques for reduction of anteroinferior shoulder dislocation. Emerg Med Australas (2005)",
    "Sayegh FE et al. — Reduction of acute anterior dislocations: a prospective randomized study comparing a new technique (FARES) with the Hippocratic and Kocher methods. J Bone Joint Surg Am (2009)",
    "Cochrane — Intra-articular lidocaine versus intravenous analgesia/sedation for reduction of acute anterior shoulder dislocation (Wakai et al., 2011)",
    "ATLS 10ª edição (2018): trauma musculoesquelético"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
