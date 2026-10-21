// Obstrução de vias aéreas por corpo estranho (OVACE)
registrarFicha({
  id: "ovace",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Obstrução de vias aéreas por corpo estranho (OVACE, engasgo)",
  resumo: "Engasgo súbito com incapacidade de falar, tossir ou respirar (obstrução grave) ou com tosse eficaz (obstrução leve). Manobras para adulto, criança e lactente segundo a AHA 2025.",
  palavrasChave: "ovace engasgo engasgamento corpo estranho obstrucao via aerea heimlich compressao abdominal golpes nas costas tapotagem lactente bebe pinca de magill cricotireoidostomia",
  critico: {
    tempo: "5 golpes nas costas + 5 compressões",
    texto: "Obstrução grave consciente: alternar 5 golpes nas costas e 5 compressões abdominais (lactente: 5 golpes nas costas e 5 compressões torácicas). Ficou inconsciente: RCP."
  },
  alarmes: [
    "Não consegue falar, tossir ou chorar; tosse fraca e silenciosa; cianose",
    "Sinal universal do engasgo (mãos no pescoço)",
    "Perda da consciência (iniciar RCP)",
    "Estridor, sibilância localizada ou tosse persistente após o episódio (corpo estranho residual)",
    "Ingestão de bateria em botão ou ímãs (urgência endoscópica, mesmo sem sintoma respiratório)"
  ],
  conduta: [
    "Obstrução leve (tosse eficaz, fala, chora): não fazer manobras. Estimular a tosse, observar e encaminhar para avaliação",
    "Adulto e criança (> 1 ano) consciente com obstrução grave: alternar 5 golpes nas costas (entre as escápulas, com o tronco inclinado para frente) e 5 compressões abdominais (Heimlich), até sair o objeto ou perder a consciência",
    "Gestante avançada, obeso ou quando não se consegue abraçar o abdome: compressões torácicas no lugar das abdominais",
    "Lactente (< 1 ano) consciente: apoiar de bruços no antebraço com a cabeça mais baixa; 5 golpes nas costas; virar e fazer 5 compressões torácicas (centro do tórax, abaixo da linha mamilar). Repetir. Não fazer compressão abdominal",
    "Ficou inconsciente: colocar no chão, chamar ajuda/SAMU 192 e iniciar RCP começando pelas compressões. Antes de cada ventilação, olhar a boca e retirar o objeto só se estiver visível. Não fazer varredura às cegas com o dedo",
    "No hospital, se inconsciente e sem desobstrução: laringoscopia direta ou videolaringoscopia e retirada com pinça de Magill; se falhar e não ventila, cricotireoidostomia (por punção em < 10–12 anos)",
    "Após desobstrução: avaliar sempre. Compressões abdominais podem causar lesão de vísceras; corpo estranho pode ter progredido para o brônquio",
    "Tosse, sibilância, estridor ou assimetria após o episódio: radiografia de tórax (inspiração e expiração ou decúbito lateral em criança) e broncoscopia se suspeita persistir (radiografia normal não exclui)"
  ],
  exames: [
    "Radiografia de tórax PA e perfil (e cervical) após o episódio se houver sintoma residual: corpo estranho radiopaco, hiperinsuflação unilateral, atelectasia",
    "Criança: radiografia em inspiração e expiração (ou decúbitos laterais) para aprisionamento aéreo",
    "Radiografia de abdome se manobra abdominal vigorosa com dor abdominal (pneumoperitônio) ou se corpo estranho pode ter sido engolido (bateria, moeda)",
    "Pedido: \"Radiografia de tórax PA e perfil em inspiração e expiração. Suspeita de aspiração de corpo estranho.\""
  ],
  diferenciais: [
    "Anafilaxia com angioedema de glote",
    "Crupe, epiglotite, abscesso retrofaríngeo",
    "Broncoespasmo grave (asma)",
    "Convulsão, síncope ou PCR de outra causa"
  ],
  prescricao: {
    hospitalar: "OBSERVAÇÃO PÓS-DESOBSTRUÇÃO (adulto ou criança; peso: ___ kg)\n1. Dieta zero por 2 h; depois liberar se sem desconforto respiratório.\n2. Monitor, oximetria contínua; O₂ por cateter nasal ou máscara para SpO₂ ≥ 94%.\n3. Se dor: dipirona 1 g IV lento (criança: 15 mg/kg/dose, máx 1 g) de 6/6 h se necessário.\n4. Radiografia de tórax PA e perfil (criança: inspiração e expiração).\n5. Reavaliar ausculta e esforço respiratório a cada 1 h por 4–6 h.\n6. Sintomas persistentes ou radiografia alterada: avaliação de broncoscopia (cirurgia pediátrica/pneumologia/otorrinolaringologia).\n\nSE INCONSCIENTE E SEM DESOBSTRUÇÃO\n7. RCP; laringoscopia/videolaringoscopia + pinça de Magill; aspiração rígida.\n8. Se não ventila: cricotireoidostomia cirúrgica (adulto) ou por punção com cateter 14G (criança)."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se tiver tosse que não passa, chiado, falta de ar, febre ou dor no peito nos próximos dias (corpo estranho pode ter ficado no pulmão)",
    "Crianças < 4 anos: não oferecer amendoim, pipoca, uva inteira, salsicha em rodelas, balas duras; cortar alimentos em pedaços pequenos e comer sentado, sem correr",
    "Manter brinquedos pequenos, moedas, baterias em botão e ímãs fora do alcance",
    "Aprender as manobras de desengasgo; em caso de engasgo grave, ligar 192"
  ],
  encaminhar: [
    "Urgência: suspeita de corpo estranho brônquico (broncoscopia) ou bateria em botão no esôfago (endoscopia imediata)",
    "Observação no PS por 4–6 h após manobras abdominais ou episódio grave"
  ],
  fontes: [
    "American Heart Association / Cruz Vermelha Americana — 2025 Guidelines for CPR and ECC: suporte básico de vida e primeiros socorros, manejo do engasgo (Circulation, 2025)",
    "American Heart Association — 2025 Pediatric Basic Life Support (2025)",
    "Ministério da Saúde — Protocolos de Suporte Básico de Vida do SAMU 192 (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
