// Drenagem de abscesso perianal e isquiorretal à beira-leito
registrarFicha({
  id: "drenagem-abscesso-perianal",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Drenagem de abscesso perianal e isquiorretal",
  resumo: "Incisão e drenagem à beira-leito do abscesso perianal superficial (e isquiorretal pequeno e bem localizado), com critérios de centro cirúrgico, antibiótico quando indicado e orientação sobre fístula.",
  palavrasChave: "abscesso perianal abscesso anorretal isquiorretal isquioanal interesfincteriano supraelevador fistula anal incisao cruciforme eliptica destelhamento drenagem banho de assento coloproctologia fournier",
  critico: {
    tempo: "Drenar no mesmo dia",
    texto: "Abscesso anorretal se trata com drenagem precoce; antibiótico isolado não substitui. Incisão o mais perto possível do ânus, sem lesar o esfíncter. Dor retal profunda sem abaulamento, febre, diabético ou imunossuprimido: centro cirúrgico."
  },
  alarmes: [
    "Crepitação, necrose, pele escura, dor desproporcional ou extensão para períneo/escroto/grandes lábios: gangrena de Fournier — cirurgia de urgência",
    "Febre alta, hipotensão, taquicardia, confusão: sepse — antibiótico IV e drenagem no centro cirúrgico",
    "Retenção urinária ou dor retal intensa sem abaulamento externo: abscesso interesfincteriano ou supraelevador",
    "Abaulamento em ambos os lados do ânus (abscesso em ferradura)",
    "Sangramento ativo que não cede à compressão"
  ],
  indicacoes: [
    "Abscesso perianal superficial com flutuação visível e palpável junto à margem anal",
    "Abscesso isquiorretal pequeno, bem delimitado, com flutuação, em paciente sem comorbidades graves e que tolera o procedimento com anestesia local"
  ],
  contraindicacoes: [
    "Abscesso supraelevador ou interesfincteriano (dor profunda, toque retal com abaulamento doloroso, pouco achado externo): centro cirúrgico com coloproctologia",
    "Abscesso isquiorretal grande, em ferradura ou mal delimitado",
    "Imunossupressão (neutropenia, quimioterapia, HIV avançado, transplante, corticoide em dose alta), diabetes descompensado ou sepse",
    "Doença de Crohn perianal conhecida: coloproctologia",
    "Suspeita de Fournier",
    "Dor que impede o exame adequado: drenagem sob anestesia (bloqueio/raqui/geral)",
    "Coagulopatia grave não corrigida"
  ],
  materiais: [
    "Luvas estéreis, campo fenestrado, gazes, foco de luz; avental e óculos",
    "Clorexidina ou PVPI",
    "Lidocaína 1% ou 2% (com vasoconstritor reduz sangramento), seringa 10–20 mL, agulhas 40 × 12 e 30 × 7",
    "Bisturi lâmina nº 11 e nº 15 com cabo",
    "Pinça hemostática curva (Kelly), pinça dente de rato, tesoura de Metzenbaum ou íris",
    "SF 0,9% e seringa de 20 mL para irrigação",
    "Swab/seringa estéril para cultura (se indicada)",
    "Gaze para curativo absorvente; fralda/absorvente; coletor de perfurocortante"
  ],
  checagemAntes: [
    "Exame com inspeção e palpação; toque retal se tolerado (abaulamento interno sugere abscesso profundo)",
    "Classificar: perianal (superficial, junto à borda anal) x isquiorretal (mais lateral e profundo, nádega endurecida) x interesfincteriano/supraelevador",
    "Glicemia capilar; sinais vitais; sinais de sepse",
    "Comorbidades: diabetes, imunossupressão, Crohn, HIV, uso de anticoagulante",
    "Alergias (anestésico, antibióticos, látex)",
    "USG perineal/endoanal, TC ou RM de pelve se dúvida sobre profundidade",
    "Explicar o procedimento, o risco de recidiva e de fístula; consentimento verbal; acompanhante/chaperone"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Analgesia sistêmica prévia (dipirona IV; opioide se dor intensa)",
      "Posição: decúbito lateral esquerdo com joelhos fletidos (Sims) ou prona em canivete; afastar as nádegas com fita adesiva se necessário",
      "Antissepsia ampla e campo fenestrado"
    ] },
    { etapa: "Anestesia", itens: [
      "Infiltrar a pele sobre o ponto de maior flutuação e ao redor (bloqueio de campo), sem injetar dentro do pus",
      "Respeitar a dose máxima de lidocaína (ver anestesia-local)"
    ] },
    { etapa: "Incisão", itens: [
      "Local: sobre a flutuação e o mais perto possível da borda anal (encurta o trajeto de eventual fístula), sem atingir o esfíncter",
      "Fazer incisão cruciforme (em cruz) ou excisar uma pequena elipse de pele (destelhamento), para a ferida não fechar antes da cavidade drenar",
      "Incisão radial ou circunferencial ampla o suficiente para drenagem completa; não fazer incisão pequena em furo"
    ] },
    { etapa: "Drenagem", itens: [
      "Deixar o pus sair; colher cultura em recidiva, imunossuprimido, sinais sistêmicos ou suspeita de MRSA",
      "Explorar delicadamente com o dedo ou pinça Kelly para desfazer loculações, sem forçar em direção ao canal anal",
      "Não procurar nem explorar fístula no PS (risco de falso trajeto e lesão do esfíncter)",
      "Irrigar com SF 0,9%"
    ] },
    { etapa: "Finalização", itens: [
      "Tamponamento (empacotamento) de rotina não é necessário: aumenta a dor sem melhorar a cicatrização; usar gaze frouxa só para hemostasia, retirada em 24 h",
      "Curativo absorvente externo",
      "Prescrever analgesia, banho de assento, laxativo/fibra para evitar fezes endurecidas",
      "Decidir antibiótico (ver conferir depois)"
    ] }
  ],
  conferirDepois: [
    "Cavidade bem drenada e hemostasia",
    "Antibiótico após a drenagem só se: celulite ao redor, sinais sistêmicos, imunossupressão, diabetes, valvopatia/prótese valvar, ou drenagem incompleta (ASCRS 2022)",
    "Glicemia controlada em diabéticos",
    "Retorno em 48–72 h na UBS ou ambulatório; antes se piora",
    "Encaminhar à coloproctologia: recidiva, secreção persistente por orifício (fístula), abscessos de repetição, suspeita de Crohn"
  ],
  complicacoes: [
    "Drenagem incompleta / recidiva precoce: reexaminar; suspeitar abscesso profundo — TC ou RM e centro cirúrgico",
    "Fístula anal (até um terço a metade dos casos): orifício que continua drenando após a cicatrização — coloproctologia eletiva (fistulotomia/seton)",
    "Sangramento: compressão com gaze; raramente ligadura",
    "Celulite progressiva ou Fournier: internação, antibiótico IV amplo e desbridamento cirúrgico",
    "Retenção urinária por dor: analgesia; sondagem de alívio se necessário",
    "Incontinência: rara na drenagem superficial; ocorre por lesão do esfíncter — por isso não aprofundar em direção ao ânus"
  ],
  prescricao: {
    ambulatorial: "APÓS DRENAGEM DE ABSCESSO PERIANAL — ADULTO\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n2. Ibuprofeno 400 mg -------------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 4 dias.\n3. Psyllium 5 g (ou lactulose 667 mg/mL) ----------------- 1 frasco/caixa\n   Psyllium: 1 envelope em 1 copo de água 1 a 2 vezes ao dia. Lactulose: 15 mL 1 a 2 vezes ao dia, ajustar para fezes macias.\n\nSE INDICADO ANTIBIÓTICO (celulite, diabetes, imunossupressão, sinais sistêmicos):\n4. Amoxicilina + clavulanato 875/125 mg --------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   Alergia à penicilina: Ciprofloxacino 500 mg de 12 em 12 horas + Metronidazol 400 mg de 8 em 8 horas por 7 dias.\n\nCUIDADOS LOCAIS\n5. Banho de assento com água morna (sem produtos) por 10 a 15 minutos, 2 a 3 vezes ao dia e após evacuar.\n6. Trocar o curativo/absorvente sempre que sujar.",
    hospitalar: "ABSCESSO ANORRETAL COMPLICADO (sepse, imunossuprimido, profundo)\n1. Jejum para drenagem em centro cirúrgico.\n2. Acesso venoso; hemograma, PCR, creatinina, glicemia, lactato, hemoculturas (2 amostras).\n3. SF 0,9% ou Ringer lactato 30 mL/kg nas primeiras 3 horas se hipotensão ou lactato ≥ 4 mmol/L.\n4. Ceftriaxona 2 g IV 1 vez ao dia (diluir em 100 mL de SF 0,9%, infundir em 30 min) + Metronidazol 500 mg IV de 8 em 8 horas (frasco 500 mg/100 mL, infundir em 30–60 min).\n   Sepse grave, imunossuprimido ou suspeita de Fournier: Piperacilina + tazobactam 4,5 g IV de 6 em 6 horas (infundir em 30 min ou estendida em 4 h) ± vancomicina se risco de MRSA; ajustar pela função renal.\n5. Dipirona 1 g IV de 6/6 h; morfina conforme dor.\n6. Glicemia capilar de 6/6 h em diabéticos; insulina conforme protocolo.\n7. Avaliação da cirurgia/coloproctologia para drenagem sob anestesia."
  },
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h ou febre persistente", "Reexaminar e pedir TC ou RM de pelve; drenagem no centro cirúrgico", "Falha quase sempre é coleção residual ou profunda, não resistência"],
        ["Celulite progressiva em uso de amoxicilina-clavulanato", "Internar: ceftriaxona + metronidazol IV; cultura do pus", "Avaliar Fournier"],
        ["Alergia grave à penicilina", "Ciprofloxacino + metronidazol VO; IV: ciprofloxacino ou aminoglicosídeo + metronidazol, ou clindamicina", "Evitar quinolona se outra opção segura"],
        ["MRSA na cultura ou recidiva com cultura de S. aureus", "SMX-TMP 800/160 mg 1–2 comprimidos de 12/12 h, doxiciclina 100 mg de 12/12 h ou clindamicina 300–450 mg de 6/6 h a 8/8 h, conforme antibiograma, associando metronidazol se flora entérica", "Internado: vancomicina IV"],
        ["Germe gram-negativo multirresistente (ESBL) ou imunossuprimido sem resposta", "Carbapenêmico IV conforme CCIH/infectologia", "Coloproctologia para revisar drenagem"]
      ]
    }
  ],
  documentacao: "Procedimento: incisão e drenagem de abscesso [perianal / isquiorretal] à [direita / esquerda], [ ] horas em posição de litotomia.\nAvaliação: flutuação de [ ] cm; toque retal [sem abaulamento interno / descrever]. Glicemia: [ ] mg/dL.\nAnestesia: lidocaína [ ]%, [ ] mL, bloqueio de campo.\nIncisão [cruciforme / elíptica] próxima à borda anal, sem atingir esfíncter.\nSaída de [ ] mL de pus [fétido / espesso]. Loculações desfeitas. Irrigação com SF 0,9%.\nCultura: [sim / não]. Tamponamento: [não / gaze para hemostasia].\nAntibiótico: [não indicado / indicado por [critério]: [esquema]].\nOrientado sobre banho de assento e risco de fístula.\nRetorno em [48–72 h]. Encaminhamento: [ ].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Faça banho de assento com água morna 2 a 3 vezes ao dia e depois de evacuar",
    "Coma fibras, beba bastante água e use o laxante para as fezes ficarem macias",
    "É normal sair um pouco de secreção ou sangue nos primeiros dias; use absorvente ou gaze",
    "Volte imediatamente se tiver febre, dor que piora muito, inchaço que aumenta, pele escura ou com bolhas, ou dificuldade para urinar",
    "Se depois de cicatrizar continuar saindo secreção por um furinho perto do ânus, procure o coloproctologista: pode ser fístula"
  ],
  relacionadas: ["doencas-anorretais", "hemorroidas", "gangrena-fournier", "drenagem-abscesso", "anestesia-local", "sepse"],
  fontes: [
    "ASCRS — Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula (2022)",
    "ESCP — Guideline on the management of anal fistula and abscess (2020)",
    "Newton K et al. (PPAC2) — Pack or no pack after drainage of perianal abscess. Lancet Gastroenterol Hepatol (2019)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
