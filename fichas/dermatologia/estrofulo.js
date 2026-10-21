// Estrófulo (prurigo estrófulo, urticária papular)
registrarFicha({
  id: "estrofulo",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Estrófulo (prurigo por picada de inseto)",
  resumo: "Reação de hipersensibilidade à saliva de insetos (pernilongo, pulga, percevejo). Pápulas e seropápulas muito pruriginosas, às vezes com vesícula central, em surtos, em áreas expostas e membros. Mais comum de 1 a 7 anos.",
  palavrasChave: "estrofulo prurigo estrofulo urticaria papular picada inseto pernilongo pulga mosquito repelente icaridina deet coceira crianca",
  alarmes: [
    "Edema de face ou lábios, chiado, falta de ar ou tontura após picada (reação sistêmica: ver ficha Anafilaxia)",
    "Febre, pústulas, crostas melicéricas ou celulite (infecção secundária)",
    "Lesões que não poupam as áreas cobertas, com sulcos e contatos com prurido (pensar em escabiose)",
    "Lesões necróticas ou dolorosas extensas após picada (pensar em picada de aranha ou outros animais)"
  ],
  conduta: [
    "Diagnóstico clínico: surtos de pápulas pruriginosas em áreas expostas, com história de insetos, animais domésticos ou viagem",
    "Prevenção é o principal: telas, mosquiteiros, roupas longas e repelente adequado à idade",
    "Tratar animais domésticos e o ambiente (pulgas e percevejos): limpeza de colchões, frestas e tapetes",
    "Prurido e inflamação: corticoide tópico de média potência por cerca de 5 dias; baixa potência na face",
    "Prurido intenso ou muitas lesões: anti-histamínico oral (2ª geração de dia; 1ª geração só à noite, ≥ 2 anos)",
    "Unhas curtas para evitar escoriação; infecção secundária localizada: antibiótico tópico",
    "Explicar que o quadro pode durar meses ou anos, com melhora espontânea com a idade (dessensibilização)"
  ],
  diferenciais: [
    "Escabiose (sulcos, contatos, interdigitais e punhos)",
    "Varicela (lesões em diferentes estágios, couro cabeludo e mucosas, febre)",
    "Urticária (placas fugazes < 24 h, sem pápula central persistente)",
    "Dermatite atópica (dobras, pele seca crônica)",
    "Impetigo (crostas melicéricas)"
  ],
  exames: [
    "Nenhum: diagnóstico clínico"
  ],
  tratamento: [
    {
      droga: "Dexametasona (acetato) 0,1% creme",
      linha: "l1",
      dose: "Fina camada nas lesões do corpo",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "Cerca de 5 dias",
      monitorizacao: "Atrofia se uso prolongado",
      contraindicacoes: "Lesões infectadas não tratadas",
      ajustes: "Disponível no SUS (RENAME). Face e dobras: hidrocortisona 1% creme. Alternativa de média potência: furoato de mometasona 0,1% 1 vez ao dia"
    },
    {
      droga: "Loratadina (xarope 1 mg/mL ou comprimido 10 mg)",
      linha: "l1",
      dose: "2 a 12 anos: ≤ 30 kg 5 mg; > 30 kg 10 mg. > 12 anos: 10 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Enquanto houver prurido no surto (geralmente 7 a 14 dias)",
      monitorizacao: "—",
      contraindicacoes: "< 2 anos (sem dose aprovada em bula)",
      ajustes: "Disponível no SUS (RENAME). Insuficiência hepática grave: dose em dias alternados"
    },
    {
      droga: "Dexclorfeniramina (solução 0,4 mg/mL ou comprimido 2 mg)",
      linha: "adj",
      dose: "0,15 mg/kg/dia divididos de 8/8 h. Máx.: 2–6 anos 3 mg/dia; 6–12 anos 6 mg/dia",
      via: "VO",
      intervalo: "8/8 h ou dose única à noite se o prurido atrapalhar o sono",
      duracao: "Poucos dias",
      monitorizacao: "Sonolência, agitação paradoxal",
      contraindicacoes: "< 2 anos; glaucoma de ângulo fechado",
      ajustes: "Disponível no SUS (RENAME). Preferir anti-histamínico de 2ª geração durante o dia"
    },
    {
      droga: "Mupirocina 2% pomada",
      linha: "adj",
      dose: "Fina camada nas lesões escoriadas infectadas",
      via: "Tópica",
      intervalo: "3 vezes ao dia",
      duracao: "5 a 7 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Alternativa SUS conforme REMUME: neomicina + bacitracina pomada. Muitas lesões: ver ficha Impetigo"
    }
  ],
  prescricao: {
    ambulatorial: "USO TÓPICO\n1. Acetato de dexametasona 0,1% creme --------------------- 1 bisnaga\n   Aplicar fina camada nas picadas do corpo, 2 vezes ao dia, por 5 dias. No rosto, usar o item 2.\n2. Acetato de hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Aplicar fina camada nas picadas do rosto, 2 vezes ao dia, por 5 dias.\n\nUSO ORAL (se coceira intensa)\n3. Loratadina xarope 1 mg/mL ------------------------------- 1 frasco\n   Criança 2 a 12 anos com até 30 kg: 5 mL 1 vez ao dia. Acima de 30 kg: 10 mL 1 vez ao dia. Por 7 a 14 dias.\n   OU (à noite, se a coceira atrapalhar o sono, ≥ 2 anos)\n3. Dexclorfeniramina solução oral 0,4 mg/mL ------------------ 1 frasco\n   0,15 mg/kg/dia divididos de 8 em 8 horas, por até 5 dias (2–6 anos: máx. 3 mg/dia = 7,5 mL/dia; 6–12 anos: máx. 6 mg/dia = 15 mL/dia).\n\nPREVENÇÃO\n4. Repelente infantil adequado à idade (seguir o rótulo registrado na ANVISA):\n   - < 6 meses: não usar repelente; usar mosquiteiro e roupas.\n   - ≥ 6 meses: produtos com IR3535 ou icaridina liberados no rótulo para a idade.\n   - DEET: só ≥ 2 anos, concentração até 10%, no máximo 3 aplicações ao dia.\n   Aplicar nas áreas expostas, nunca nas mãos, olhos ou boca da criança; o adulto coloca na própria mão e passa na criança.\n\nSE FERIDAS INFECTADAS (poucas lesões)\n5. Mupirocina 2% pomada --------------------------------- 1 bisnaga\n   Aplicar nas feridas com crosta, 3 vezes ao dia, por 5 a 7 dias."
  },
  orientacoesRetorno: [
    "As bolinhas são uma alergia à picada; não passam de uma criança para outra",
    "Usar telas, mosquiteiro, roupas compridas e repelente adequado à idade",
    "Combater pulgas no cachorro e no gato e limpar colchões, sofás e tapetes",
    "Manter as unhas curtas para não ferir a pele ao coçar",
    "O problema pode voltar em novos surtos e costuma melhorar com o crescimento",
    "Voltar imediatamente se houver inchaço no rosto, falta de ar, febre ou feridas com pus e vermelhidão espalhando",
    "Retornar se não melhorar em 2 semanas"
  ],
  encaminhar: [
    "Dermatologia: dúvida diagnóstica ou quadro intenso persistente apesar das medidas",
    "Alergia: reação sistêmica após picada de inseto (especialmente himenópteros: abelha, vespa, formiga)"
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Picadas de inseto: prurigo estrófulo ou urticária papular, Guia Prático de Atualização do Departamento de Dermatologia (2022)",
    "Sociedade Brasileira de Pediatria — Repelentes e medidas de proteção contra insetos na infância (Guia Prático) e página Picadas de insetos e repelentes (2025)",
    "ANVISA — RDC nº 19/2013 (DEET: proibido < 2 anos; 2–12 anos até 10%, máximo 3 aplicações/dia)",
    "Ministério da Saúde — RENAME 2024 (dexametasona creme, hidrocortisona creme, loratadina, dexclorfeniramina)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
