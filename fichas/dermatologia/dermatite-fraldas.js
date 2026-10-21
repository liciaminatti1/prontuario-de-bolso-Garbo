// Dermatite da área das fraldas e candidíase perineal
registrarFicha({
  id: "dermatite-fraldas",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Dermatite de fraldas e candidíase perineal",
  resumo: "Eritema na área da fralda. Irritativa: poupa as dobras, nas áreas de maior contato. Candidíase: eritema vivo que atinge as dobras, bem delimitado, com pápulas e pústulas satélites, em geral após 3 dias de evolução ou uso de antibiótico.",
  palavrasChave: "dermatite de fraldas assadura candidiase perineal monilíase fralda oxido de zinco nistatina miconazol lesoes satelites lactente",
  alarmes: [
    "Febre, prostração ou recusa alimentar",
    "Bolhas, erosões extensas ou pele que descola (impetigo bolhoso, síndrome da pele escaldada estafilocócica)",
    "Vesículas agrupadas ou úlceras em saca-bocado (herpes simples)",
    "Pápulas purpúricas, crostas e lesões em couro cabeludo e dobras que não respondem (histiocitose de células de Langerhans)",
    "Lesões perioral e perianal com diarreia e queda de cabelo (acrodermatite enteropática — deficiência de zinco)",
    "Placas eritematosas bem delimitadas no períneo com borda nítida e sem satélites (pensar em dermatite estreptocócica perianal ou psoríase)"
  ],
  conduta: [
    "Diferenciar: irritativa (poupa dobras) × candidíase (atinge dobras, satélites) × outras (ver alarmes)",
    "Todas: trocar a fralda com frequência (logo após evacuar ou urinar), deixar a pele exposta ao ar alguns períodos do dia",
    "Limpar com água morna e algodão ou pano macio; evitar lenços com perfume ou álcool; secar sem esfregar",
    "Creme de barreira (óxido de zinco ou pasta d'água) em camada grossa em toda troca; não precisa remover todo o creme a cada troca",
    "Candidíase: antifúngico tópico (nistatina ou miconazol) 2 a 4 vezes ao dia, sob o creme de barreira; examinar a boca (sapinho)",
    "Inflamação intensa: hidrocortisona 1% creme por poucos dias; não usar corticoide potente nem combinações comerciais com corticoide potente",
    "Infecção bacteriana secundária (pústulas, crostas melicéricas): mupirocina tópica; se extensa ou febre, avaliar antibiótico oral",
    "Evitar talco, amido de milho e produtos caseiros"
  ],
  diferenciais: [
    "Dermatite seborreica (placas salmão, untuosas; couro cabeludo e outras dobras)",
    "Psoríase do lactente (placas bem delimitadas, resistentes)",
    "Impetigo bolhoso / síndrome da pele escaldada",
    "Dermatite estreptocócica perianal (eritema vivo perianal, dor à evacuação)",
    "Escabiose (nódulos, contatos com prurido)",
    "Acrodermatite enteropática e histiocitose de células de Langerhans (raras)",
    "Abuso sexual (lesões genitais traumáticas ou IST)"
  ],
  exames: [
    "Nenhum de rotina: o diagnóstico é clínico",
    "Exame micológico direto: só em dúvida ou falha terapêutica",
    "Cultura de secreção: pústulas ou crostas extensas sem resposta ao tratamento tópico; swab perianal para estreptococo se eritema perianal vivo e doloroso"
  ],
  tratamento: [
    {
      droga: "Óxido de zinco (creme/pomada de barreira ou pasta d'água)",
      linha: "l1",
      dose: "Camada grossa na área da fralda",
      via: "Tópica",
      intervalo: "A cada troca de fralda",
      duracao: "Enquanto houver lesão e como prevenção",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Base de todo tratamento. Aplicar por cima do antifúngico quando houver candidíase"
    },
    {
      droga: "Nistatina 100.000 UI/g creme (isolada ou associada a óxido de zinco)",
      linha: "l1",
      dose: "Fina camada nas lesões",
      via: "Tópica",
      intervalo: "3 a 4 vezes ao dia (nas trocas)",
      duracao: "Até alguns dias após a cura; em geral 7 a 14 dias",
      monitorizacao: "Melhora em 3–5 dias",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Conferir disponibilidade na REMUME"
    },
    {
      droga: "Miconazol 2% creme",
      linha: "alt",
      dose: "Fina camada nas lesões e 1–2 cm ao redor",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "Até 1 semana após a cura; em geral 7 a 14 dias",
      monitorizacao: "Irritação local",
      contraindicacoes: "Hipersensibilidade a azólicos",
      ajustes: "—"
    },
    {
      droga: "Hidrocortisona (acetato) 1% creme",
      linha: "adj",
      dose: "Fina camada",
      via: "Tópica",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Curto período: até 5–7 dias",
      monitorizacao: "Atrofia, estrias, piora de infecção fúngica",
      contraindicacoes: "Infecção bacteriana ou herpética não tratada",
      ajustes: "Só corticoide de baixa potência na área da fralda (oclusão aumenta absorção). Disponível no SUS (RENAME 2024)"
    },
    {
      droga: "Mupirocina 2% pomada",
      linha: "adj",
      dose: "Fina camada nas lesões com crosta ou pústula",
      via: "Tópica",
      intervalo: "3 vezes ao dia",
      duracao: "5 a 7 dias",
      monitorizacao: "Resposta em 3–5 dias",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Só se infecção bacteriana secundária localizada. Alternativa SUS conforme REMUME: neomicina + bacitracina pomada"
    }
  ],
  prescricao: {
    ambulatorial: "DERMATITE IRRITATIVA\nUSO TÓPICO\n1. Óxido de zinco creme/pomada (ou pasta d'água) ----------- 1 bisnaga/pote\n   Aplicar camada grossa em toda a área da fralda a cada troca. Não precisa retirar todo o creme na troca; limpar só a sujeira.\n\nSE INFLAMAÇÃO INTENSA (só baixa potência)\n2. Acetato de hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Aplicar fina camada nas áreas muito vermelhas, 1 a 2 vezes ao dia, por no máximo 5 dias, antes do creme de barreira.\n\nCANDIDÍASE PERINEAL (acrescentar)\nUSO TÓPICO\n3. Nistatina 100.000 UI/g creme ------------------------- 1 bisnaga\n   Aplicar fina camada nas lesões e dobras a cada troca de fralda (3 a 4 vezes ao dia), por 14 dias ou até 3 dias após a pele ficar normal. Cobrir com o creme de barreira.\n   OU\n3. Miconazol 2% creme ----------------------------------- 1 bisnaga\n   Aplicar fina camada nas lesões e 1 a 2 cm ao redor, 2 vezes ao dia, por 14 dias ou até 1 semana após a cura.\n\nSE PÚSTULAS OU CROSTAS (infecção bacteriana secundária localizada)\n4. Mupirocina 2% pomada --------------------------------- 1 bisnaga\n   Aplicar nas lesões com crosta, 3 vezes ao dia, por 5 a 7 dias.\n\nSE SAPINHO ASSOCIADO: ver ficha Candidíase oral (nistatina suspensão oral)."
  },
  orientacoesRetorno: [
    "Trocar a fralda sempre que estiver molhada ou suja, inclusive à noite se possível",
    "Limpar com água morna e algodão; evitar lenço umedecido com perfume ou álcool",
    "Deixar o bebê sem fralda alguns períodos do dia",
    "Não usar talco, maisena, pomadas caseiras ou cremes com corticoide forte",
    "Voltar imediatamente se houver febre, bolhas, pele soltando, feridas que sangram ou bebê muito irritado ou molinho",
    "Retornar se não melhorar em 7 dias de tratamento correto"
  ],
  encaminhar: [
    "Dermatologia/pediatria: falha após 2 semanas de tratamento correto, suspeita de psoríase, histiocitose, acrodermatite enteropática",
    "Urgência: suspeita de síndrome da pele escaldada estafilocócica, febre em lactente pequeno",
    "Rede de proteção (Conselho Tutelar/notificação de violência): sinais de abuso sexual"
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Dermatite da área das fraldas: diagnóstico diferencial, Documento Científico do Departamento de Dermatologia (2016) e Guia Prático de Atualização (2022)",
    "Ministério da Saúde — RENAME 2024 (acetato de hidrocortisona 1% creme)",
    "BMJ Best Practice — Dermatite das fraldas (atualização vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
