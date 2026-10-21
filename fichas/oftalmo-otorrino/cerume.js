// Rolha de cerume
registrarFicha({
  id: "cerume",
  especialidade: "oftalmo-otorrino",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Rolha de cerume e cerume impactado",
  resumo: "Acúmulo de cerume que causa sintomas (hipoacusia, plenitude, zumbido, otalgia, prurido, tontura, tosse) ou impede o exame do tímpano. Cerume sem sintomas não precisa ser removido. Tratar com cerumenolítico, irrigação ou remoção manual.",
  palavrasChave: "cerume cera de ouvido rolha tampao ouvido entupido lavagem otologica irrigacao cerumenolitico oleato de trietanolamina oleo mineral soro fisiologico hipoacusia zumbido cotonete vela",
  critico: {
    tempo: "Não irrigar se tímpano duvidoso",
    texto: "Antes de lavar o ouvido, perguntar sobre perfuração, cirurgia otológica, tubo de ventilação, otite ativa, diabetes ou imunossupressão. Nesses casos, não irrigar: cerumenolítico ou remoção manual por otorrino."
  },
  alarmes: [
    "Perda auditiva súbita (em até 72 h) sem rolha que a explique — perda neurossensorial súbita, urgência otorrinolaringológica",
    "Otalgia intensa, otorreia, febre ou edema do conduto (otite externa ou média)",
    "Diabético ou imunossuprimido idoso com otalgia intensa e otorreia (otite externa necrotizante)",
    "Vertigem intensa, nistagmo ou paralisia facial",
    "Sangramento ou dor forte durante a remoção (lesão do conduto ou do tímpano)",
    "Hipoacusia que persiste após remover o cerume"
  ],
  conduta: [
    "Otoscopia: confirmar que o cerume é a causa dos sintomas; cerume que não oclui e não dá sintoma não precisa ser removido",
    "Checar contraindicações à irrigação: perfuração atual ou prévia, cirurgia de ouvido, tubo de ventilação, otite ativa, ouvido único com audição útil, radioterapia na região, diabetes ou imunossupressão",
    "Cerumenolítico por 3–5 dias antes da irrigação ou como tratamento único (água, soro fisiológico, óleo mineral ou oleato de trietanolamina têm eficácia parecida)",
    "Irrigação: água ou SF 0,9% à temperatura do corpo (água fria ou quente causa vertigem); tracionar o pavilhão para cima e para trás (criança pequena: para baixo e para trás); jato suave dirigido à parede posterossuperior do conduto, nunca diretamente no tímpano; usar seringa de 20 mL com ponta romba ou equipamento próprio",
    "Interromper se dor, tontura ou sangramento",
    "Ao final, nova otoscopia: documentar se o conduto e o tímpano ficaram visíveis e reavaliar a audição",
    "Se falhar após 2 tentativas: mais alguns dias de cerumenolítico e nova tentativa, ou encaminhar para remoção manual sob visão (otorrino)",
    "Orientar não usar cotonete, grampo ou vela (vela não funciona e causa queimaduras)"
  ],
  diferenciais: [
    "Otite externa (dor à tração do pavilhão, conduto edemaciado)",
    "Corpo estranho (criança), otomicose (massa algodonosa/esporos)",
    "Otite média com efusão, disfunção tubária",
    "Perda auditiva neurossensorial súbita ou presbiacusia",
    "Colesteatoma (otorreia fétida crônica, retração/perfuração do tímpano)"
  ],
  exames: [
    "Nenhum exame. Audiometria se hipoacusia persistir após a remoção"
  ],
  tratamento: [
    {
      droga: "Óleo mineral, soro fisiológico 0,9% ou água (cerumenolítico)",
      linha: "l1",
      dose: "Algumas gotas até cobrir o cerume (cerca de 3–5 gotas)",
      via: "Otológica, com a cabeça inclinada por alguns minutos",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "3 a 5 dias",
      monitorizacao: "Pode aumentar a sensação de ouvido tampado no início",
      contraindicacoes: "Perfuração timpânica, otite ativa",
      ajustes: "Adulto e criança: mesma posologia. Baratos e com eficácia semelhante aos produtos comerciais"
    },
    {
      droga: "Oleato de trietanolamina (solução otológica)",
      linha: "alt",
      dose: "Conforme bula do produto",
      via: "Otológica",
      intervalo: "Conforme bula",
      duracao: "Curto prazo, antes da irrigação",
      monitorizacao: "Irritação e dermatite do conduto",
      contraindicacoes: "Perfuração timpânica, otite, alergia",
      ajustes: "Não deixar em contato prolongado com o conduto (irritação); seguir o tempo indicado na bula e lavar em seguida"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO E CRIANÇA (mesma posologia)\nUSO OTOLÓGICO\n1. Óleo mineral ----------------------------------- 1 frasco\n   Com a cabeça inclinada, pingar 3 a 5 gotas no ouvido afetado, 2 vezes ao dia, por 5 dias. Manter a cabeça inclinada por 5 minutos e depois limpar só a parte de fora com pano.\n   (Alternativa: soro fisiológico 0,9%, mesma posologia.)\n2. Retornar à UBS no 5º ou 6º dia para lavagem do ouvido, se ainda tampado.\n\nPREVENÇÃO EM QUEM FORMA ROLHA COM FREQUÊNCIA\n3. Óleo mineral: 2 a 3 gotas em cada ouvido 1 vez por semana.\n\nNÃO USAR cotonete, grampo, palito ou vela no ouvido.",
    hospitalar: "PROCEDIMENTO — IRRIGAÇÃO OTOLÓGICA (UBS)\n1. Confirmar ausência de contraindicações (perfuração, cirurgia, tubo, otite, diabetes/imunossupressão).\n2. Proteger o ombro com toalha e cuba rim abaixo da orelha.\n3. Água filtrada ou SF 0,9% aquecido à temperatura corporal (testar no punho).\n4. Tracionar o pavilhão (adulto: para cima e para trás); seringa de 20 mL com ponta romba; jatos suaves na parede posterossuperior do conduto.\n5. Interromper se dor, tontura ou sangramento.\n6. Secar o conduto externo; otoscopia final e registro do resultado em prontuário."
  },
  orientacoesRetorno: [
    "Cera no ouvido é normal e protege; o ouvido se limpa sozinho",
    "Não usar cotonete dentro do ouvido: empurra a cera e pode ferir o tímpano",
    "Vela de ouvido não remove cera e pode queimar",
    "Depois da lavagem, secar só a parte de fora; evitar água no ouvido por 1 a 2 dias se ficou irritado",
    "Voltar se tiver dor forte, saída de secreção, febre, tontura ou se a audição não melhorar",
    "Perda de audição súbita sem cera: procurar atendimento no mesmo dia"
  ],
  encaminhar: [
    "Otorrinolaringologia: falha de 2 tentativas, contraindicação à irrigação, conduto estreito ou deformado, criança não colaborativa com rolha sintomática, hipoacusia que persiste",
    "Urgência otorrino: perda auditiva súbita, suspeita de otite externa necrotizante, lesão do tímpano durante o procedimento"
  ],
  fontes: [
    "AAO-HNSF — Clinical Practice Guideline (Update): Earwax (Cerumen Impaction). Otolaryngol Head Neck Surg, 2017 (versão vigente)",
    "Michaudet C, Malaty J — Cerumen Impaction: diagnosis and management. Am Fam Physician, 2018",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
