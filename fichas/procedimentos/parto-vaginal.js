// Assistência ao parto vaginal (período expulsivo, dequitação e 4º período)
registrarFicha({
  id: "parto-vaginal",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Assistência ao parto vaginal",
  resumo: "Condução do período expulsivo, desprendimento do polo cefálico e dos ombros, clampeamento oportuno do cordão, manejo ativo do 3º período com ocitocina 10 UI IM, revisão do canal e vigilância do 4º período (Greenberg).",
  palavrasChave: "parto normal parto vaginal assistencia ao parto periodo expulsivo protecao perineal desprendimento cefalico ombros clampeamento tardio oportuno cordao ocitocina 10 ui im manejo ativo terceiro periodo dequitacao placenta tracao controlada do cordao quarto periodo greenberg contato pele a pele parto iminente",
  critico: {
    tempo: "Ocitocina 10 UI IM ao nascer",
    texto: "Logo após o nascimento (excluído outro feto): ocitocina 10 UI IM para todas as parturientes, a principal medida para prevenir hemorragia pós-parto. Clampear o cordão entre 1 e 3 min se o recém-nascido estiver bem."
  },
  alarmes: [
    "Cabeça que sai e retrai contra o períneo (sinal da tartaruga): distocia de ombro — chamar ajuda e iniciar manobras (ver ficha)",
    "Recém-nascido que não respira ou está hipotônico: clampear e levar à reanimação neonatal no primeiro minuto (minuto de ouro)",
    "Sangramento > 500 mL ou qualquer sangramento com instabilidade: hemorragia pós-parto — acionar protocolo",
    "Placenta não dequitada em 30 min com manejo ativo: placenta retida — chamar obstetra",
    "Bradicardia fetal persistente no expulsivo, prolapso de cordão, sangramento intenso antes do nascimento: chamar obstetra/acelerar o parto",
    "Inversão uterina (massa na vagina, choque desproporcional): não puxar o cordão, recolocar o útero imediatamente"
  ],
  indicacoes: [
    "Trabalho de parto em período expulsivo (dilatação completa com puxos) em serviço com assistência ao parto",
    "Parto iminente em pronto-socorro ou UBS sem tempo de transferência segura (períneo abaulado, cabeça visível entre as contrações)"
  ],
  contraindicacoes: [
    "Situações que exigem cesárea e ainda há tempo para transferir: placenta prévia, apresentação córmica (transversa), prolapso de cordão com dilatação incompleta, herpes genital ativo no parto, sofrimento fetal sem condição de parto imediato",
    "Apresentação pélvica ou gemelar fora de serviço preparado: transferir se houver tempo; se parto iminente, assistir e chamar ajuda",
    "Não é contraindicação: cesárea anterior única (com vigilância de rotura uterina)"
  ],
  materiais: [
    "Luvas estéreis, avental, máscara, óculos; campos estéreis",
    "Kit de parto: 2 pinças Kelly ou clampes umbilicais, tesoura reta estéril, gazes e compressas, cuba para a placenta",
    "Ocitocina 5 UI/mL ampola (10 UI = 2 mL) com seringa e agulha para IM pronta",
    "Material para episiotomia e sutura (ver ficha de revisão do canal): lidocaína 1%, porta-agulha, fio absorvível 2-0/3-0",
    "Campos aquecidos e touca para o recém-nascido; fonte de calor radiante",
    "Material de reanimação neonatal testado: balão autoinflável com máscaras 0 e 1, aspirador, sonda de aspiração, oxímetro, estetoscópio",
    "Acesso venoso calibroso na parturiente, SF 0,9% e ocitocina para infusão disponíveis; ácido tranexâmico 1 g disponível",
    "Clampe de cordão e material para coleta de sangue do cordão (tipagem se mãe Rh negativo)"
  ],
  checagemAntes: [
    "Identificação, idade gestacional, cartão pré-natal: tipagem e Rh, sorologias (HIV, sífilis, hepatite B), pesquisa de estreptococo do grupo B, comorbidades",
    "Apresentação cefálica, batimentos cardíacos fetais, número de fetos, dilatação completa",
    "Pré-eclâmpsia, sangramento, febre ou mecônio: aumentar o nível de cuidado e chamar ajuda",
    "Fatores de risco de hemorragia pós-parto e de distocia de ombro (macrossomia, diabetes, expulsivo prolongado)",
    "Acesso venoso; bexiga vazia (sondagem de alívio se globo vesical)",
    "Acompanhante de escolha da mulher (Lei 11.108/2005) e consentimento para os procedimentos",
    "Equipe de reanimação neonatal presente ou avisada",
    "Profilaxia para GBS e antibiótico se ruptura prolongada de membranas, conforme protocolo"
  ],
  passos: [
    { etapa: "Período expulsivo", itens: [
      "Estimular a posição que a mulher preferir (vertical, lateral, de cócoras, quatro apoios); evitar litotomia estrita",
      "Puxos espontâneos, sem manobra de Valsalva dirigida se não houver necessidade",
      "Ausculta dos batimentos fetais a cada 5 min (ou após cada contração) no expulsivo de baixo risco",
      "Não fazer pressão no fundo uterino (manobra de Kristeller)",
      "Compressas mornas no períneo podem reduzir lacerações graves",
      "Episiotomia não é rotina: só se indicação fetal (sofrimento com necessidade de abreviar) ou parto instrumental, mediolateral a 60° da linha média"
    ] },
    { etapa: "Desprendimento do polo cefálico", itens: [
      "Proteção perineal (hands-on): mão sobre o períneo posterior e outra controlando a deflexão da cabeça, para o desprendimento lento",
      "Orientar a mulher a respirar e soprar durante o coroamento, sem empurrar com força",
      "Após a saída da cabeça, aguardar a próxima contração para a rotação externa espontânea (não tracionar)",
      "Palpar o pescoço: circular de cordão frouxa — passar por cima da cabeça ou deixar e fazer a manobra de cambalhota; só clampear e cortar antes se apertada e impedir a saída"
    ] },
    { etapa: "Desprendimento dos ombros e do corpo", itens: [
      "Com a contração, tração suave para baixo (ombro anterior) e depois para cima (ombro posterior), sem forçar",
      "Se não sair com tração suave: distocia de ombro — chamar ajuda e seguir a ficha de distocia",
      "Apoiar o corpo e colocar o recém-nascido em contato pele a pele sobre o abdome da mãe, secando e cobrindo"
    ] },
    { etapa: "Ocitocina e cordão", itens: [
      "Palpar o abdome para excluir outro feto",
      "Ocitocina 10 UI IM no primeiro minuto após o nascimento (no vasto lateral da coxa ou deltoide)",
      "Recém-nascido com boa vitalidade (respira ou chora, tônus bom): clampear o cordão de 1 a 3 min após o nascimento (ou quando parar de pulsar)",
      "Recém-nascido que não respira: clampear e cortar já e levar à reanimação",
      "Clampear a 2–3 cm do abdome do bebê e cortar entre os clampes com tesoura estéril; colher sangue do cordão se mãe Rh negativo"
    ] },
    { etapa: "Dequitação (3º período)", itens: [
      "Aguardar sinais de descolamento: útero globoso e firme, pequeno sangramento, alongamento do cordão",
      "Tração controlada do cordão (se profissional treinado) com contratração suprapúbica (mão empurrando o útero para cima, manobra de Brandt-Andrews) durante a contração",
      "Ao exteriorizar, girar a placenta (manobra de Jacob-Dublin) para retirar as membranas inteiras",
      "Não tracionar o cordão sem contratração (risco de inversão uterina)",
      "Examinar a placenta: face materna completa (cotilédones), membranas, cordão com 2 artérias e 1 veia"
    ] },
    { etapa: "Revisão e 4º período", itens: [
      "Avaliar o tônus uterino logo após a dequitação; massagem se útero amolecido (não é necessária massagem contínua se útero contraído)",
      "Revisar vulva, vagina, períneo e colo (ver ficha de revisão do canal) e suturar lacerações",
      "Estimar a perda sanguínea (quantificar com coletor ou pesagem de compressas, se possível)",
      "1ª hora (período de Greenberg): checar tônus uterino e sangramento a cada 15 min por 2 h, com PA, FC e índice de choque",
      "Manter pele a pele e amamentação na 1ª hora; cuidados do recém-nascido conforme rotina (vitamina K, credé ou equivalente, identificação)"
    ] }
  ],
  conferirDepois: [
    "Útero contraído abaixo da cicatriz umbilical (globo de segurança de Pinard)",
    "Sangramento estimado; PA, FC e índice de choque (FC/PAS ≥ 0,9 = alerta)",
    "Placenta e membranas completas; se dúvida, revisão da cavidade por obstetra",
    "Lacerações suturadas; contagem de gazes e compressas conferida",
    "Bexiga vazia (bexiga cheia atrapalha a contração uterina)",
    "Apgar 1º e 5º min, peso, clampeamento (tempo), contato pele a pele e amamentação",
    "Imunoglobulina anti-D até 72 h se mãe Rh negativo e RN Rh positivo",
    "Notificações e registros (Declaração de Nascido Vivo)"
  ],
  complicacoes: [
    "Hemorragia pós-parto: massagem uterina, ocitocina 20 UI em 500 mL SF IV, ácido tranexâmico 1 g IV em 10 min nas primeiras 3 h, pedir ajuda — ver ficha de hemorragia pós-parto",
    "Distocia de ombro: ver ficha de distocia de ombro",
    "Placenta retida (> 30 min) ou incompleta: ocitocina, esvaziar a bexiga, chamar obstetra para extração manual",
    "Inversão uterina: parar ocitocina, reposicionar o útero imediatamente com a mão (manobra de Johnson), tratar o choque, chamar obstetra",
    "Lacerações de 3º e 4º grau: reparar em centro obstétrico por obstetra (ver ficha de revisão do canal)",
    "Recém-nascido deprimido: reanimação neonatal (SBP); ventilar com balão e máscara no 1º minuto"
  ],
  prescricao: {
    hospitalar: "PUERPÉRIO IMEDIATO (PARTO VAGINAL SEM INTERCORRÊNCIAS)\n1. Dieta livre (geral), conforme aceitação.\n2. Ocitocina 10 UI IM — já aplicada no 1º minuto após o nascimento (registrar horário).\n3. Dipirona 1 g VO de 6/6 h se dor.\n4. Ibuprofeno 400 mg VO de 8/8 h se dor perineal ou cólica (evitar se pré-eclâmpsia grave ou lesão renal).\n5. Sulfato ferroso 40 mg de ferro elementar VO 1x/dia por 3 meses pós-parto (MS).\n6. Imunoglobulina anti-D 300 mcg IM até 72 h se mãe Rh negativo, Coombs indireto negativo e RN Rh positivo.\n7. Controle de tônus uterino, sangramento, PA e FC de 15/15 min nas primeiras 2 h; depois de 30/30 min por 1 h e de 4/4 h.\n8. Estimular amamentação e deambulação precoce; alojamento conjunto."
  },
  documentacao: "Parto vaginal em [data], às [hora]. IG: [ ] semanas. Apresentação cefálica [OP / OS / outra].\nPosição no expulsivo: [ ]. Duração do expulsivo: [ ] min. Acompanhante: [sim / não].\nEpisiotomia: [não / sim, mediolateral D, indicação: ]. Lacerações: [íntegro / 1º / 2º / 3º (a/b/c) / 4º grau], [suturada com fio ]. Circular de cordão: [não / sim, frouxa / apertada].\nRN: sexo [ ], Apgar [ ]/[ ], peso [ ] g. Clampeamento do cordão com [ ] min. Contato pele a pele: [sim].\nOcitocina 10 UI IM às [hora]. Dequitação [espontânea / com tração controlada] em [ ] min; placenta [completa], cordão com 3 vasos.\nPerda sanguínea estimada: [ ] mL. Útero contraído [sim]. PA [ ], FC [ ].\nTipagem materna [ ], anti-D [indicada / não indicada].\nIntercorrências: [nenhuma / descrever].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Tempos de referência (MS 2017 / OMS 2018)",
      colunas: ["Etapa", "Referência", "Observação"],
      linhas: [
        ["Expulsivo ativo — nulípara", "Até cerca de 3 h", "Ao se aproximar do limite, chamar obstetra"],
        ["Expulsivo ativo — multípara", "Até cerca de 2 h", "Idem"],
        ["Clampeamento do cordão (RN bem)", "1 a 3 min", "Imediato se RN precisa de reanimação"],
        ["Dequitação com manejo ativo", "Até 30 min", "Mais que isso: placenta retida"],
        ["Vigilância do 4º período", "15/15 min nas 2 primeiras horas", "Tônus, sangramento, PA, FC"]
      ],
      nota: "Os tempos variam com analgesia peridural e com o protocolo local; diagnóstico de expulsivo prolongado deve levar à avaliação obstétrica, não a manobras de força."
    }
  ],
  orientacoesRetorno: [
    "Amamentar sempre que o bebê quiser",
    "Sangramento parecido com menstruação nos primeiros dias é normal e vai diminuindo",
    "Lavar a região genital com água e sabão e trocar o absorvente com frequência",
    "Voltar imediatamente se sangramento que encharca mais de 1 absorvente por hora, coágulos grandes, febre, dor forte na barriga, corrimento com mau cheiro, dor de cabeça forte, visão embaçada, falta de ar ou dor/inchaço em uma perna",
    "Consulta de puerpério na primeira semana (com o bebê) e até 42 dias"
  ],
  relacionadas: ["trabalho-de-parto", "hemorragia-pos-parto", "distocias", "distocia-ombro", "revisao-canal-episiorrafia", "hipertensao-gestacao", "prenatal-baixo-risco", "insercao-diu"],
  fontes: [
    "Ministério da Saúde — Diretrizes Nacionais de Assistência ao Parto Normal (CONITEC, 2017)",
    "OMS — Intrapartum care for a positive childbirth experience (2018)",
    "OMS — Recommendations on uterotonics for the prevention of postpartum haemorrhage (2018) e Consolidated guidelines on PPH (2025)",
    "OPAS/OMS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "FEBRASGO — Protocolos de assistência ao parto (2021)",
    "Sociedade Brasileira de Pediatria — Reanimação do recém-nascido ≥ 34 semanas em sala de parto (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
