// Doença hemorroidária
registrarFicha({
  id: "hemorroidas",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Doença hemorroidária (hemorroidas)",
  resumo: "Sangramento vermelho vivo ao evacuar, prolapso ou desconforto anal por hemorroidas internas; dor aguda intensa com nódulo endurecido arroxeado na borda anal = trombose hemorroidária externa. Tratamento: fibra, água, evitar esforço; tópicos e flebotônicos por curto período; procedimentos se refratária.",
  palavrasChave: "hemorroida hemorroidas doenca hemorroidaria trombose hemorroidaria sangramento anal prolapso fissura anal psyllium fibra diosmina hesperidina banho de assento ligadura elastica",
  critico: {
    tempo: "Sangue nas fezes ≥ 45–50 anos: colonoscopia",
    texto: "Não atribua sangramento às hemorroidas sem avaliar: anemia, mudança do hábito intestinal, perda de peso, sangue escuro misturado às fezes, história familiar ou idade a partir de 45–50 anos exigem colonoscopia (câncer colorretal, DII)."
  },
  alarmes: [
    "Anemia, perda de peso, mudança recente do hábito intestinal, sangue escuro ou misturado às fezes",
    "Idade ≥ 45–50 anos sem colonoscopia recente, história familiar de câncer colorretal",
    "Sangramento volumoso ou instabilidade (raro; pensar em hipertensão portal/varizes retais, anticoagulação)",
    "Hemorroida interna prolapsada que não reduz, arroxeada, muito dolorosa (estrangulamento)",
    "Febre, dor perianal progressiva, retenção urinária (abscesso, gangrena de Fournier)",
    "Imunossuprimido ou neutropênico com dor anal"
  ],
  conduta: [
    "Anamnese e inspeção anal; toque retal (e anuscopia, se disponível) para classificar e excluir fissura, abscesso e tumor",
    "Para todos: fibra na dieta (25–35 g/dia) ou psyllium, 1,5–2 L de água/dia, não fazer força nem ficar muito tempo no vaso (sem celular), tratar constipação/diarreia",
    "Crise (dor, edema, sangramento): banho de assento morno 10–15 min 2–3×/dia, analgésico, pomada com anestésico local por até 7 dias, flebotônico (diosmina + hesperidina) por curto período",
    "Trombose externa com dor intensa e < 72 h do início: excisão do trombo (não só incisão) por cirurgião, se disponível; > 72 h ou dor já melhorando: tratamento clínico",
    "Hemorroida interna graus I–III refratária ao tratamento clínico: encaminhar para ligadura elástica",
    "Grau IV, mista volumosa ou falha da ligadura: coloproctologia (hemorroidectomia)",
    "Evitar corticoide tópico por mais de 7 dias (atrofia da pele)"
  ],
  exames: [
    "Diagnóstico clínico (inspeção, toque, anuscopia)",
    "Hemograma se sangramento frequente ou suspeita de anemia",
    "Colonoscopia: sangramento com sinais de alarme, idade ≥ 45–50 anos sem rastreio, anemia, história familiar ou sangramento que persiste apesar do tratamento",
    "Retossigmoidoscopia flexível é alternativa em jovem sem alarme com sangramento persistente"
  ],
  diferenciais: [
    "Fissura anal (dor intensa ao evacuar que dura horas, sangue no papel, fissura na linha média posterior)",
    "Abscesso ou fístula perianal (dor contínua, febre, abaulamento)",
    "Câncer colorretal ou anal, pólipo",
    "Doença inflamatória intestinal (diarreia com sangue, lesões perianais)",
    "Plicoma, condiloma, prolapso retal (mucosa em círculos concêntricos)"
  ],
  tabelas: [
    {
      titulo: "Classificação das hemorroidas internas (Goligher)",
      colunas: ["Grau", "Achado", "Tratamento usual"],
      linhas: [
        ["I", "Sangra, não prolapsa", "Clínico"],
        ["II", "Prolapsa ao evacuar e volta sozinha", "Clínico; ligadura se refratária"],
        ["III", "Prolapsa e precisa ser reduzida com o dedo", "Ligadura; cirurgia se falha"],
        ["IV", "Prolapsada, irredutível", "Cirurgia"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Psyllium (Plantago ovata) 5 g (sachê) -------------------- 30 sachês\n   Dissolver 1 sachê em 1 copo de água (200 mL) 1 a 2 vezes ao dia e beber em seguida, com mais 1 copo de água. Uso contínuo.\n   (Alternativa: aumentar fibras na dieta — frutas com casca, verduras, aveia, feijão.)\n2. Diosmina 450 mg + hesperidina 50 mg ----------------------- 1 caixa (60 comprimidos)\n   Na crise: tomar 2 comprimidos de 8 em 8 horas (6 por dia) por 4 dias; depois 2 comprimidos de 12 em 12 horas (4 por dia) por 3 dias.\n3. Dipirona 500 mg -------------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n   (ou Paracetamol 750 mg de 6 em 6 horas. Evitar opioide: causa constipação.)\n\nUSO TÓPICO\n4. Lidocaína gel 2% (ou pomada proctológica com anestésico local) --- 1 bisnaga\n   Aplicar fina camada na região anal até 3 vezes ao dia e após evacuar, por até 7 dias.\n\nCUIDADOS LOCAIS\n5. Banho de assento com água morna (sem produtos) por 10 a 15 minutos, 2 a 3 vezes ao dia e após evacuar.\n6. Higiene com água e sabão neutro após evacuar, em vez de papel higiênico; secar sem esfregar.\n\nTROMBOSE EXTERNA > 72 H OU SEM CIRURGIÃO (OPÇÃO MANIPULADA)\n7. Nifedipina 0,3% + lidocaína 1,5% pomada (manipulada) ------- 30 g\n   Aplicar na região anal de 12 em 12 horas por 14 dias."
  },
  orientacoesRetorno: [
    "Coma mais fibras e beba água; o psyllium deve ser tomado com bastante líquido",
    "Não faça força para evacuar e não fique mais de 3–5 minutos sentado no vaso; evite celular no banheiro",
    "A pomada é só para alívio por poucos dias; o que resolve é o intestino funcionar bem",
    "Procure atendimento no mesmo dia se o sangramento for grande, se o caroço ficar roxo, muito dolorido e não voltar para dentro, se tiver febre ou dificuldade para urinar",
    "Volte à UBS se o sangramento continuar após 4–6 semanas de tratamento, se tiver perda de peso, anemia ou mudança no ritmo do intestino",
    "Retorno em 4–6 semanas para reavaliar"
  ],
  encaminhar: [
    "Cirurgia geral/coloproctologia (eletivo): grau III–IV, falha do tratamento clínico (ligadura elástica, hemorroidectomia), plicomas sintomáticos",
    "Cirurgia no mesmo dia (ou PS): trombose externa muito dolorosa com < 72 h, hemorroida interna encarcerada/estrangulada, abscesso",
    "Colonoscopia: sangramento com sinais de alarme ou idade de rastreio"
  ],
  fontes: [
    "ASCRS — The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Hemorrhoids (Dis Colon Rectum, 2024)",
    "ESCP — European Society of Coloproctology guideline for haemorrhoidal disease (Colorectal Dis, 2020)",
    "Perrotti P et al. — Conservative treatment of acute thrombosed external hemorrhoids with topical nifedipine (Dis Colon Rectum, 2001)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
