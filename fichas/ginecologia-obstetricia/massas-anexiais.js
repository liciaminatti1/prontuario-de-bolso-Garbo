// Massas anexiais e doenças benignas do ovário
registrarFicha({
  id: "massas-anexiais",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Massas anexiais e cistos de ovário",
  resumo: "Conduta diante de cisto ou massa anexial na USG: diferenciar cisto funcional e tumores benignos (teratoma, endometrioma, cistoadenoma) de lesão suspeita de câncer de ovário usando O-RADS/IOTA, idade, menopausa e CA-125; quando repetir a USG e quando encaminhar.",
  palavrasChave: "cisto de ovario massa anexial tumor de ovario cisto folicular corpo luteo cisto hemorragico teratoma dermoide endometrioma cistoadenoma seroso mucinoso fibroma meigs hidrossalpinge abscesso tubo ovariano o-rads orads iota regras simples ca 125 ca125 rmi indice de risco de malignidade cancer de ovario brca oncoginecologia",
  critico: {
    tempo: "Dor súbita + massa: PS (torção)",
    texto: "Dor pélvica súbita e intensa com massa anexial, vômitos ou sinais de irritação peritoneal: torção ou ruptura com hemoperitônio → PS/cirurgia (ver torcao-anexial). Beta-hCG em toda mulher em idade fértil."
  },
  alarmes: [
    "Dor súbita e intensa, vômitos, irritação peritoneal ou instabilidade (torção, ruptura, hemoperitônio, ectópica)",
    "Febre, dor e massa complexa (abscesso tubo-ovariano: ver dip)",
    "Componente sólido irregular, projeções papilares, fluxo intenso ao Doppler, ascite ou nódulos peritoneais",
    "Massa bilateral, fixa ou endurecida ao toque",
    "Pós-menopausa com massa não simples ou CA-125 elevado",
    "Sintomas persistentes (> 12 vezes por mês): distensão abdominal, saciedade precoce, dor pélvica, urgência urinária, perda de peso"
  ],
  conduta: [
    "Beta-hCG em idade fértil; perguntar DUM, dor, febre, uso de contraceptivo, história familiar de câncer de mama/ovário/colorretal",
    "Exame abdominal e pélvico: massa, mobilidade, consistência, ascite; linfonodos",
    "USG transvaginal (e abdominal se massa grande); pedir laudo com descrição morfológica e, se possível, categoria O-RADS ou IOTA",
    "Cisto simples (anecoico, parede fina, sem septo ou sólido) na pré-menopausa: geralmente funcional; até cerca de 5 cm não precisa seguimento; maior → repetir USG em 6–12 semanas, na fase folicular precoce",
    "Cisto hemorrágico (padrão reticular, sem fluxo interno) ou corpo lúteo: repetir USG em 6–12 semanas; costuma desaparecer",
    "Anticoncepcional não acelera a regressão de cisto funcional; pode ser usado para evitar novos cistos",
    "Teratoma maduro (dermoide), endometrioma, cistoadenoma: ginecologia para decidir cirurgia (cistectomia preservando ovário) ou seguimento",
    "Pós-menopausa: cisto simples unilocular sem septos ou sólido, com CA-125 normal, tem risco muito baixo e pode ser acompanhado com USG; qualquer outro padrão → ginecologia",
    "CA-125: pedir na pós-menopausa ou com USG suspeita; na pré-menopausa tem muitos falsos-positivos (endometriose, mioma, DIP, gestação, menstruação). Não usar para rastreio",
    "Adolescente ou jovem com massa sólida: pedir também alfafetoproteína, beta-hCG e LDH (tumores de células germinativas) e encaminhar com prioridade",
    "Suspeita de câncer (O-RADS 4–5, IOTA maligno, RMI elevado, ascite): encaminhar à oncoginecologia; não puncionar nem drenar a massa (risco de disseminação)",
    "História pessoal ou familiar sugestiva (BRCA, Lynch): aconselhamento genético; portadora de BRCA → salpingo-ooforectomia redutora de risco na idade recomendada para o gene",
    "Dor leve por cisto funcional: analgésico e AINE, retorno se piorar"
  ],
  exames: [
    "'Ultrassonografia transvaginal com Doppler — massa anexial: descrever tamanho, conteúdo, septos, componente sólido, projeções papilares, fluxo, ascite; classificar O-RADS/IOTA'",
    "Beta-hCG sérico (idade fértil)",
    "'CA-125' — pós-menopausa ou USG com achado suspeito",
    "'Alfafetoproteína, beta-hCG quantitativo, LDH' — massa sólida em menor de 40 anos",
    "Hemograma e PCR se febre ou dor (abscesso)",
    "RM de pelve (ginecologia): massa indeterminada à USG (O-RADS 3–4)",
    "Repetir USG transvaginal em 6–12 semanas, de preferência entre o 3º e o 10º dia do ciclo, para cisto possivelmente funcional"
  ],
  diferenciais: [
    "Cisto folicular, cisto de corpo lúteo, cisto hemorrágico (funcionais)",
    "Teratoma cístico maduro (dermoide): gordura, sombra acústica, 'linhas e pontos'",
    "Endometrioma: conteúdo homogêneo em 'vidro fosco' (ver endometriose)",
    "Cistoadenoma seroso ou mucinoso, fibroma/tecoma (pode ter ascite e derrame: Meigs)",
    "Hidrossalpinge, abscesso tubo-ovariano, cisto paraovariano",
    "Gravidez ectópica, mioma pediculado, rim pélvico, abscesso apendicular ou diverticular",
    "Câncer de ovário (epitelial, células germinativas, cordão sexual) ou metástase (estômago, intestino, mama)"
  ],
  prescricao: {
    ambulatorial: "SE DOR LEVE POR CISTO FUNCIONAL (USO ORAL)\n1. Ibuprofeno 400 mg ------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, se dor, por até 5 dias.\n2. Dipirona 500 mg --------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n\nSOLICITAÇÃO\n3. Ultrassonografia transvaginal com Doppler — controle de cisto anexial de __ cm em __/__/____. Realizar entre o 3º e o 10º dia do ciclo. Classificar O-RADS.\n4. CA-125 (se pós-menopausa ou achado suspeito)."
  },
  orientacoesRetorno: [
    "A maioria dos cistos de ovário é benigna e muitos desaparecem sozinhos em algumas semanas",
    "Fazer a nova ultrassonografia na data pedida, nos primeiros dias depois da menstruação",
    "Ir ao pronto-socorro imediatamente se tiver dor forte e de repente na barriga, vômitos, desmaio ou febre",
    "Avisar se a barriga crescer, se sentir enjoo ou empachamento constante ou perder peso sem explicação",
    "Retornar com o resultado do exame para decidir se precisa de cirurgia"
  ],
  encaminhar: [
    "PS: dor aguda intensa, suspeita de torção, ruptura com hemoperitônio, ectópica ou abscesso",
    "Oncoginecologia (prioridade): O-RADS 5 (e O-RADS 4 conforme serviço), IOTA maligno, RMI > 200, ascite, massa sólida em jovem com marcadores alterados",
    "Ginecologia: O-RADS 3–4, teratoma, endometrioma, cistoadenoma, cisto persistente após 2 USG, cisto não simples na pós-menopausa, massa sintomática",
    "Aconselhamento genético: câncer de ovário pessoal ou familiar, câncer de mama precoce ou masculino na família, Lynch"
  ],
  tabelas: [
    {
      titulo: "O-RADS US (ACR, v2022)",
      colunas: ["Categoria", "Risco de malignidade", "Conduta geral"],
      linhas: [
        ["0", "Avaliação incompleta", "Repetir ou complementar o exame"],
        ["1", "Ovário normal (folículo, corpo lúteo na pré-menopausa)", "Nenhuma"],
        ["2", "Quase certamente benigna (< 1%)", "Nenhuma ou USG de controle conforme tipo e tamanho"],
        ["3", "Baixo (1 a < 10%)", "Ginecologia; USG por especialista ou RM"],
        ["4", "Intermediário (10 a < 50%)", "Ginecologia com apoio da oncoginecologia; RM e CA-125"],
        ["5", "Alto (≥ 50%)", "Oncoginecologia"]
      ],
      nota: "Seguir o seguimento recomendado no laudo para cada descritor (cisto simples, hemorrágico, dermoide, endometrioma)."
    },
    {
      titulo: "IOTA — Regras simples",
      colunas: ["Características benignas (B)", "Características malignas (M)"],
      linhas: [
        ["B1: cisto unilocular", "M1: tumor sólido irregular"],
        ["B2: componente sólido < 7 mm", "M2: ascite"],
        ["B3: sombra acústica", "M3: ≥ 4 projeções papilares"],
        ["B4: multilocular liso < 10 cm", "M4: multilocular-sólido irregular ≥ 10 cm"],
        ["B5: sem fluxo ao Doppler", "M5: fluxo muito intenso ao Doppler"]
      ],
      nota: "Só B → benigno. Só M → maligno. Ambos ou nenhum → inconclusivo (avaliação por especialista ou RM). RMI = U × M × CA-125 (U: 0, 1 ou 3 pelos achados de USG; M: 1 pré e 3 pós-menopausa); RMI > 200 → oncoginecologia (RCOG)."
    }
  ],
  fontes: [
    "ACR — O-RADS US Risk Stratification and Management System, v2022 (Strachowski et al., Radiology, 2023)",
    "IOTA — Simple Rules (Timmerman et al., 2008; validação 2016) e modelo ADNEX",
    "ACOG Practice Bulletin nº 174 — Evaluation and management of adnexal masses (2016, reafirmado)",
    "RCOG Green-top Guidelines nº 34 (pós-menopausa, 2016) e nº 62 (pré-menopausa, 2011)",
    "FEBRASGO — Protocolos: Tumores anexiais / Massas anexiais",
    "INCA — Câncer de ovário: informações para profissionais (sem rastreamento populacional)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
