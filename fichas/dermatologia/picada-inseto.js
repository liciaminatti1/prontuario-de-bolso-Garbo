// Picada de inseto com reação inflamatória local
registrarFicha({
  id: "picada-inseto",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Picada de inseto com reação local",
  resumo: "Pápula ou placa eritematosa, edematosa e pruriginosa após picada de mosquito, borrachudo, pulga, percevejo ou mutuca. Reação local extensa (> 10 cm) é inflamatória, não infecciosa. Surtos recorrentes em criança: ver ficha Estrófulo. Abelhas, vespas e formigas: ver ficha própria.",
  palavrasChave: "picada de inseto mosquito pernilongo muricoca borrachudo pulga percevejo mutuca reacao local extensa skeeter edema eritema coceira prurido corticoide topico anti-histaminico repelente icaridina deet ir3535 celulite",
  critico: {
    tempo: "Sinais sistêmicos = anafilaxia",
    texto: "Edema de face ou lábios, falta de ar, rouquidão, tontura ou vômitos após picada: adrenalina IM 0,01 mg/kg (máx. 0,5 mg) e seguir a ficha Anafilaxia."
  },
  alarmes: [
    "Edema de lábios, língua ou face, chiado, falta de ar, tontura, desmaio ou vômitos (anafilaxia)",
    "Febre, dor crescente, calor, vermelhidão que se espalha após 48–72 h, linfangite ou pus (infecção secundária: celulite)",
    "Lesão necrótica, dor muito intensa ou placa marmórea (pensar em aranha-marrom)",
    "Picada perto do olho com edema palpebral importante, dor ao mover o olho ou baixa visual",
    "Febre e manchas pelo corpo dias após picada em área endêmica (dengue, chikungunya, zika, febre maculosa por carrapato)"
  ],
  conduta: [
    "Diagnóstico clínico: história de exposição, lesões em áreas expostas, prurido; ponto central de picada",
    "Lavar com água e sabão; compressa fria por 10–20 min várias vezes ao dia",
    "Prurido e inflamação: corticoide tópico de média potência por 3–7 dias (baixa potência na face e em dobras)",
    "Prurido intenso ou muitas lesões: anti-histamínico oral de 2ª geração; 1ª geração só à noite, por poucos dias, em ≥ 2 anos",
    "Reação local extensa (> 10 cm, contínua ao local, pico em 24–48 h): compressa fria, anti-histamínico, corticoide oral curto se muito incômoda; não é indicação de antibiótico",
    "Infecção secundária localizada (crostas melicéricas, poucas lesões): mupirocina tópica; celulite: antibiótico oral (ver ficha Celulite e erisipela)",
    "Unhas curtas; evitar coçar",
    "Prevenção: telas, mosquiteiro, roupas longas, repelente adequado à idade; tratar pulgas de animais e o ambiente"
  ],
  diferenciais: [
    "Celulite (febre, calor, dor crescente após 48 h, piora progressiva)",
    "Estrófulo (surtos recorrentes em criança, pápulas com vesícula central)",
    "Urticária (placas fugazes < 24 h, sem ponto central)",
    "Escabiose (sulcos, interdigitais, punhos, prurido noturno, contatos)",
    "Picada de aranha ou acidente por lagarta (dor intensa, necrose, sangramento)"
  ],
  exames: [
    "Nenhum: diagnóstico clínico",
    "Hemograma e PCR só se suspeita de celulite com sinais sistêmicos"
  ],
  tratamento: [
    {
      droga: "Acetato de dexametasona 0,1% creme (média potência)",
      linha: "l1",
      dose: "Fina camada sobre as lesões",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "3–7 dias",
      monitorizacao: "Atrofia se uso prolongado",
      contraindicacoes: "Pele infectada sem tratamento",
      ajustes: "Face, dobras e lactente: hidrocortisona 1% creme"
    },
    {
      droga: "Loratadina",
      linha: "l1",
      dose: "Adulto 10 mg · Criança 2–12 anos: ≤ 30 kg 5 mg; > 30 kg 10 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "3–7 dias",
      monitorizacao: "—",
      contraindicacoes: "< 2 anos: usar desloratadina (≥ 6 meses) conforme bula",
      ajustes: "Ver ficha Anti-histamínicos"
    },
    {
      droga: "Prednisona / prednisolona (reação local extensa)",
      linha: "adj",
      dose: "Adulto 40 mg/dia · Criança 1 mg/kg/dia (máx. 40 mg)",
      via: "VO",
      intervalo: "1 vez ao dia pela manhã",
      duracao: "3–5 dias",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "Infecção não tratada",
      ajustes: "Reservar para edema grande e incômodo"
    },
    {
      droga: "Antibiótico sistêmico sem sinais de infecção; pasta de dente, álcool, vinagre ou outros produtos caseiros",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Reação local extensa não é celulite; produtos caseiros irritam a pele",
      ajustes: "—"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO\nUSO TÓPICO\n1. Acetato de dexametasona 0,1% creme --------------------- 1 bisnaga\n   Aplicar fina camada nas picadas do corpo 2 vezes ao dia por 5 dias. No rosto, usar hidrocortisona 1% creme.\nUSO ORAL\n2. Loratadina 10 mg --------------------------------------- 7 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por até 7 dias se coceira.\nSE REAÇÃO LOCAL EXTENSA E MUITO INCÔMODA\n3. Prednisona 20 mg --------------------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 3 a 5 dias.\n\nCRIANÇA (peso: ___ kg)\nUSO TÓPICO\n1. Acetato de hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Aplicar fina camada nas picadas 2 vezes ao dia por 5 dias (corpo de criança maior: dexametasona 0,1% creme).\nUSO ORAL\n2. Loratadina xarope 1 mg/mL ------------------------------- 1 frasco\n   2 a 12 anos com até 30 kg: 5 mL 1 vez ao dia; acima de 30 kg: 10 mL 1 vez ao dia, por até 7 dias.\n3. Se reação local extensa: prednisolona solução oral 3 mg/mL — 1 mg/kg/dia (máx. 40 mg) pela manhã por 3 a 5 dias.\n\nPREVENÇÃO\n4. Repelente registrado na ANVISA, conforme a idade no rótulo: < 6 meses não usar (mosquiteiro e roupas); ≥ 6 meses IR3535 ou icaridina; DEET só ≥ 2 anos (até 10% em criança). Reaplicar conforme o rótulo; não aplicar nas mãos, olhos e boca da criança."
  },
  orientacoesRetorno: [
    "Compressa fria e não coçar; manter as unhas curtas",
    "O inchaço pode aumentar nas primeiras 24–48 h e depois diminui em 3 a 10 dias",
    "Voltar imediatamente se inchaço no rosto ou na boca, falta de ar, chiado, tontura ou vômitos",
    "Voltar se febre, dor que aumenta, vermelhidão quente que se espalha depois de 2 a 3 dias, riscos vermelhos subindo pelo membro ou pus",
    "Voltar se febre e manchas no corpo nos dias seguintes (dengue, chikungunya, zika, febre maculosa)"
  ],
  encaminhar: [
    "Alergia/imunologia: reação sistêmica após picada ou reações locais extensas muito frequentes",
    "PS: anafilaxia, celulite com sinais sistêmicos ou celulite periorbitária"
  ],
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013)",
    "Sociedade Brasileira de Dermatologia/SBP — Orientações sobre repelentes e picadas de inseto em crianças",
    "ANVISA — Repelentes de insetos: orientações de uso por faixa etária",
    "World Allergy Organization — Anaphylaxis Guidance (2020)",
    "Ministério da Saúde — RENAME 2024 (dexametasona creme, hidrocortisona creme, loratadina, prednisona, prednisolona)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
