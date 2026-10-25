// Drenagem de abscesso pilonidal
registrarFicha({
  id: "drenagem-cisto-pilonidal",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Drenagem de abscesso pilonidal (cisto pilonidal infectado)",
  resumo: "Incisão e drenagem do abscesso pilonidal agudo com incisão lateral à linha média interglútea, curetagem de pelos e detritos, curativo e encaminhamento para tratamento definitivo eletivo.",
  palavrasChave: "cisto pilonidal abscesso pilonidal doenca pilonidal sacrococcigea fistula pilonidal sinus pilonidal incisao lateral linha media interglutea curetagem pelos tratamento definitivo",
  critico: {
    tempo: "Incisão fora da linha média",
    texto: "Abscesso pilonidal com flutuação: drenar com incisão lateral à linha média (cicatriza melhor e não fica sob atrito). Retirar pelos e detritos. O tratamento definitivo (cirurgia dos orifícios/sinus) é eletivo, depois que a inflamação acaba."
  },
  alarmes: [
    "Febre alta, sinais de sepse ou celulite extensa da região sacral/glútea",
    "Crepitação, necrose ou dor desproporcional: infecção necrosante",
    "Diabetes descompensado ou imunossupressão",
    "Abscesso muito grande ou com extensão profunda/múltiplos trajetos: centro cirúrgico",
    "Abaulamento próximo ao ânus: pode ser abscesso anorretal (ver drenagem-abscesso-perianal)"
  ],
  indicacoes: [
    "Abscesso pilonidal agudo com flutuação na região sacrococcígea/interglútea",
    "Coleção confirmada por USG quando o exame é duvidoso"
  ],
  contraindicacoes: [
    "Doença pilonidal crônica sem abscesso (orifícios na linha média com secreção intermitente): encaminhar para cirurgia eletiva",
    "Celulite sem coleção: antibiótico e reavaliar em 24–48 h",
    "Abscesso extenso, profundo ou com sepse: drenagem no centro cirúrgico",
    "Coagulopatia grave não corrigida (relativa)"
  ],
  materiais: [
    "Luvas estéreis, campo fenestrado, gazes, clorexidina ou PVPI, foco de luz",
    "Tricotomia com máquina (não lâmina) se muitos pelos",
    "Lidocaína 1% ou 2% (com vasoconstritor reduz sangramento), seringa 10–20 mL, agulhas 40 × 12 e 30 × 7",
    "Bisturi lâmina nº 11 ou 15",
    "Pinça Kelly curva, pinça anatômica, cureta pequena",
    "SF 0,9% e seringa de 20 mL",
    "Tira de gaze para tamponamento frouxo (cavidade grande)",
    "Curativo absorvente e fita"
  ],
  checagemAntes: [
    "Confirmar flutuação e localização (linha média interglútea, a alguns centímetros do ânus); diferenciar de furúnculo, hidradenite e abscesso perianal",
    "Sinais vitais, glicemia em diabéticos",
    "Alergias (anestésico, antibiótico, látex)",
    "Anticoagulante/antiagregante",
    "Explicar: a drenagem alivia, mas a doença pode voltar; o tratamento definitivo é uma cirurgia eletiva; consentimento verbal"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Decúbito ventral (prona), com coxim sob o quadril; afastar as nádegas com fita adesiva",
      "Remover pelos ao redor com máquina; antissepsia ampla e campo"
    ] },
    { etapa: "Anestesia", itens: [
      "Infiltrar a pele da linha de incisão e em leque ao redor (bloqueio de campo), sem injetar dentro da cavidade"
    ] },
    { etapa: "Incisão e drenagem", itens: [
      "Incisão longitudinal sobre a flutuação, lateral à linha média (cerca de 1–2 cm da prega interglútea), paralela a ela",
      "Comprimento suficiente para drenar a cavidade toda; pode-se excisar pequena elipse de pele para manter aberto",
      "Deixar o pus sair; cultura se recorrência, imunossupressão ou sinais sistêmicos",
      "Desfazer loculações com pinça Kelly e retirar pelos, detritos e tecido de granulação com pinça/cureta (diminui a recidiva)",
      "Irrigar com SF 0,9% até sair limpo"
    ] },
    { etapa: "Finalização", itens: [
      "Cavidade pequena: só curativo absorvente; cavidade grande: tira de gaze frouxa, retirada em 24–48 h",
      "Não fechar a ferida (cicatrização por segunda intenção)",
      "Analgesia; antibiótico apenas se celulite, sinais sistêmicos ou imunossupressão",
      "Orientar higiene local e retirada de pelos da região durante a cicatrização"
    ] }
  ],
  conferirDepois: [
    "Cavidade bem drenada, sem pelos ou detritos residuais; hemostasia",
    "Antibiótico só se celulite ao redor, sinais sistêmicos, imunossupressão ou diabetes descompensado",
    "Retorno em 48 h para retirar a gaze e depois troca de curativo na UBS até fechar",
    "Encaminhar à cirurgia geral/coloproctologia para tratamento definitivo eletivo (após a fase aguda), principalmente se recidiva ou orifícios na linha média"
  ],
  complicacoes: [
    "Recidiva do abscesso (comum, até metade dos casos sem tratamento definitivo): nova drenagem e encaminhamento",
    "Sinus crônico com secreção: cirurgia eletiva (técnicas de pit picking, retalhos, fechamento fora da linha média)",
    "Cicatrização lenta: curativos regulares, retirada de pelos ao redor, controle glicêmico",
    "Sangramento: compressão",
    "Celulite progressiva: antibiótico e reavaliação; internação se sistêmica"
  ],
  prescricao: {
    ambulatorial: "APÓS DRENAGEM DE ABSCESSO PILONIDAL — ADULTO\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n2. Ibuprofeno 400 mg -------------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 4 dias.\n\nSE INDICADO ANTIBIÓTICO (celulite, sinais sistêmicos, imunossupressão):\n3. Amoxicilina + clavulanato 875/125 mg --------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   Alergia à penicilina: Clindamicina 300 mg de 6 em 6 horas por 7 dias (ou SMX-TMP 800/160 mg de 12/12 h + metronidazol 400 mg de 8/8 h por 7 dias).\n\nCUIDADOS LOCAIS\n4. Tomar banho normalmente, lavar a ferida com água e sabão, secar e cobrir com gaze; trocar 1 a 2 vezes ao dia.\n5. Manter a região sem pelos (máquina ou creme depilatório ao redor, não sobre a ferida).\n6. Evitar ficar muito tempo sentado nos primeiros dias."
  },
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h", "Reabrir, retirar pelos e detritos residuais, USG", "Falha costuma ser drenagem incompleta"],
        ["Celulite progressiva em uso de amoxicilina-clavulanato", "Cultura; trocar conforme antibiograma; internar se sistêmico (ceftriaxona + metronidazol IV ou ampicilina-sulbactam IV)", "Flora mista: S. aureus, estreptococos e anaeróbios"],
        ["MRSA na cultura ou recorrência com S. aureus", "SMX-TMP 800/160 mg 1–2 cp de 12/12 h ou doxiciclina 100 mg de 12/12 h, associados a metronidazol; ou clindamicina isolada", "Internado: vancomicina IV + metronidazol"],
        ["Alergia grave à penicilina", "Clindamicina ou SMX-TMP + metronidazol", "—"],
        ["Abscessos de repetição apesar de drenagem e antibiótico", "Não é problema de antibiótico: encaminhar para tratamento cirúrgico definitivo", "—"]
      ]
    }
  ],
  documentacao: "Procedimento: incisão e drenagem de abscesso pilonidal sacrococcígeo.\nAchados: flutuação de [ ] cm, eritema de [ ] cm; orifícios na linha média: [sim / não].\nAnestesia: lidocaína [ ]%, [ ] mL, bloqueio de campo.\nIncisão longitudinal de [ ] cm, [ ] cm lateral à linha média, à [direita / esquerda].\nSaída de [ ] mL de pus; retirados pelos e detritos; loculações desfeitas; irrigação com SF 0,9%.\nCultura: [sim / não]. Gaze: [sim / não]. Ferida aberta para 2ª intenção.\nAntibiótico: [não indicado / esquema].\nEncaminhado para tratamento definitivo eletivo: [sim / não].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Lave a ferida no banho com água e sabão e troque a gaze 1 a 2 vezes ao dia",
    "Mantenha a região sem pelos enquanto cicatriza",
    "Volte em 2 dias para tirar a gaze",
    "Volte antes se tiver febre, vermelhidão que aumenta, dor muito forte ou pus com mau cheiro",
    "Depois de cicatrizar, procure o cirurgião para o tratamento definitivo, pois o cisto pode voltar"
  ],
  relacionadas: ["drenagem-abscesso", "furunculo-abscesso", "drenagem-abscesso-perianal", "anestesia-local", "curativos-desbridamento"],
  fontes: [
    "ASCRS — Clinical Practice Guidelines for the Management of Pilonidal Disease (2019)",
    "Diretriz alemã S3 — Sinus pilonidalis (Iesalnieks I, Ommer A et al., 2020)",
    "IDSA — Practice Guidelines for Skin and Soft Tissue Infections (2014)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
