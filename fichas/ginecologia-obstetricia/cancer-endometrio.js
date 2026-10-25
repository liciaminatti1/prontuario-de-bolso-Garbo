// Câncer de endométrio
registrarFicha({
  id: "cancer-endometrio",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Câncer de endométrio",
  resumo: "Câncer ginecológico mais associado a obesidade, anovulação e estrogênio sem oposição; quase sempre se apresenta como sangramento pós-menopausa. Na APS: reconhecer risco, investigar sangramento (USG transvaginal e biópsia), suspeitar de Lynch, encaminhar e seguir após o tratamento.",
  palavrasChave: "cancer de endometrio carcinoma endometrial adenocarcinoma endometrioide seroso celulas claras carcinossarcoma hiperplasia endometrial atipica nie neoplasia intraepitelial endometrial espessura endometrial biopsia endometrial pipelle aspirativa histeroscopia sangramento pos menopausa tamoxifeno lynch hnpcc mmr instabilidade microssatelite pole p53 figo 2023 histerectomia",
  critico: {
    tempo: "Sangramento pós-menopausa: investigar",
    texto: "Todo sangramento pós-menopausa precisa de USG transvaginal e, se endométrio > 4 mm, não mensurável ou sangramento persistente, biópsia endometrial. Ver ficha sangramento-pos-menopausa."
  },
  alarmes: [
    "Sangramento pós-menopausa (qualquer quantidade, mesmo uma vez)",
    "Sangramento uterino anormal a partir dos 45 anos, ou antes com obesidade, anovulação crônica, falha do tratamento clínico ou Lynch",
    "Sangramento em usuária de tamoxifeno",
    "Endométrio > 4 mm, heterogêneo, com espessamento focal ou líquido intrauterino na pós-menopausa",
    "Citologia do colo com células endometriais atípicas ou AGC",
    "Massa pélvica, ascite, dor pélvica, perda de peso (doença avançada)"
  ],
  conduta: [
    "Fatores de risco: obesidade, idade, nuliparidade, menopausa tardia, anovulação crônica (SOP), estrogênio sem progestogênio, tamoxifeno, diabetes, síndrome de Lynch, história familiar",
    "Fatores de proteção: anticoncepcional combinado, SIU-levonorgestrel, progestogênio associado ao estrogênio na terapia hormonal",
    "Não há rastreamento populacional; investigar quem sangra",
    "Pós-menopausa com sangramento: USG transvaginal. Endométrio ≤ 4 mm e episódio único: baixo risco (provável atrofia). > 4 mm, não mensurável ou sangramento recorrente: biópsia (ver sangramento-pos-menopausa)",
    "Pré-menopausa: espessura endometrial não exclui câncer; indicar biópsia pela clínica (≥ 45 anos com SUA, ou mais jovem com fator de risco ou falha do tratamento)",
    "Biópsia: aspirativa ambulatorial (Pipelle) ou histeroscopia com biópsia dirigida (preferir se lesão focal, biópsia insuficiente ou sangramento persistente com biópsia negativa)",
    "Achado incidental de endométrio espesso em pós-menopausa sem sangramento: não há ponto de corte consensual para biópsia; encaminhar à ginecologia se espessamento acentuado, heterogêneo, líquido ou fator de risco",
    "Tamoxifeno: não fazer USG de rotina em assintomática; investigar qualquer sangramento",
    "Hiperplasia sem atipia: progestogênio (SIU-LNG é a primeira opção) e controle de peso — ginecologia. Hiperplasia atípica (NIE): histerectomia, salvo desejo de gestação em casos selecionados",
    "Câncer confirmado: oncoginecologia (Lei 12.732/2012: início do tratamento em até 60 dias do diagnóstico). Base do tratamento: histerectomia total + salpingo-ooforectomia bilateral com estadiamento linfonodal (linfonodo sentinela); adjuvância conforme estádio e perfil molecular",
    "Lynch: o tumor deve ser testado para deficiência de reparo (MMR por imuno-histoquímica ou instabilidade de microssatélites); MMR deficiente sem metilação de MLH1, ou história familiar sugestiva → aconselhamento genético",
    "Portadora de Lynch: colonoscopia periódica; discutir histerectomia com salpingo-ooforectomia redutora de risco após completar a prole (idade conforme o gene); investigar qualquer sangramento",
    "Seguimento após tratamento (APS junto com oncologia): consulta com anamnese e exame pélvico a cada 3–6 meses nos primeiros 2–3 anos, depois a cada 6–12 meses até 5 anos e então anual; exames de imagem e CA-125 só se sintomas ou conforme oncologista",
    "Após tratamento: controle de peso, glicemia e PA (principal causa de morte em sobreviventes de baixo risco é cardiovascular); tratar atrofia vaginal com hidratante/lubrificante; estrogênio vaginal só com aval do oncologista"
  ],
  exames: [
    "'Ultrassonografia transvaginal — sangramento pós-menopausa / SUA: medir espessura endometrial, avaliar cavidade e anexos'",
    "Biópsia endometrial (ginecologia): 'Biópsia endometrial aspirativa ou histeroscopia com biópsia — indicação: ___'",
    "Hemograma se sangramento volumoso",
    "Glicemia/HbA1c e perfil lipídico (fatores de risco associados)",
    "Após diagnóstico (oncologia): RM de pelve para invasão miometrial e cervical; TC de tórax e abdome em histologias agressivas ou suspeita de doença avançada; CA-125 em casos selecionados",
    "Anatomopatológico com classificação molecular (POLE, MMR, p53) quando disponível"
  ],
  diferenciais: [
    "Atrofia endometrial (causa mais comum de sangramento pós-menopausa)",
    "Pólipo endometrial, mioma submucoso",
    "Hiperplasia endometrial com ou sem atipia",
    "Sarcoma uterino, câncer de colo com extensão ao corpo",
    "Sangramento por terapia hormonal, tamoxifeno ou anticoagulante",
    "Câncer de ovário ou de tuba com sangramento uterino"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO\n1. Ultrassonografia transvaginal. Indicação: sangramento pós-menopausa (DUM há ___ anos) / sangramento uterino anormal aos ___ anos. Medir espessura endometrial; avaliar cavidade e anexos.\n2. Hemograma completo.\n\nENCAMINHAMENTO — GINECOLOGIA (prioridade)\nPaciente de ___ anos com sangramento ___; USG TV de __/__/____: endométrio ___ mm (aspecto: ___). Fatores de risco: ( ) obesidade ( ) diabetes ( ) tamoxifeno ( ) SOP ( ) Lynch/história familiar. Solicito biópsia endometrial / histeroscopia.\n\nENCAMINHAMENTO — ONCOGINECOLOGIA (resultado de câncer ou hiperplasia atípica)\nAnatomopatológico de __/__/____: ________. Lei 12.732/2012 (60 dias)."
  },
  orientacoesRetorno: [
    "Sangramento depois da menopausa sempre precisa ser investigado, mesmo que pouco",
    "Na maioria das vezes a causa é benigna, mas quando é câncer de endométrio costuma ser descoberto cedo e tem boa chance de cura",
    "Perder peso, controlar diabetes e pressão reduz o risco e ajuda na recuperação",
    "Após o tratamento, voltar logo se tiver novo sangramento vaginal, dor na pelve, inchaço nas pernas, tosse persistente, perda de peso sem explicação",
    "Manter as consultas de seguimento, mesmo sem sintomas",
    "Contar aos parentes se o médico falar em síndrome de Lynch: eles também podem precisar de exames"
  ],
  encaminhar: [
    "Ginecologia com prioridade: sangramento pós-menopausa com endométrio > 4 mm ou recorrente; SUA com indicação de biópsia; hiperplasia",
    "Oncoginecologia: carcinoma confirmado ou hiperplasia atípica",
    "Genética/aconselhamento: MMR deficiente no tumor, diagnóstico antes dos 50 anos, família com câncer colorretal, de endométrio ou outros do espectro Lynch",
    "PS: sangramento intenso com instabilidade ou anemia sintomática"
  ],
  tabelas: [
    {
      titulo: "Estadiamento FIGO 2023 (resumo)",
      colunas: ["Estádio", "Definição"],
      linhas: [
        ["IA", "Histologia não agressiva (endometrioide de baixo grau) restrita ao endométrio/pólipo ou com invasão < 50% do miométrio, sem LVSI ou LVSI focal (IA3: baixo grau no útero e ovário)"],
        ["IB", "Não agressiva com invasão ≥ 50% do miométrio, sem LVSI ou LVSI focal"],
        ["IC", "Histologia agressiva (alto grau, serosa, células claras, carcinossarcoma, indiferenciado) restrita ao pólipo ou endométrio"],
        ["II", "Invasão do estroma cervical (IIA), LVSI extensa (IIB) ou histologia agressiva com invasão miometrial (IIC)"],
        ["III", "Serosa e/ou anexos (IIIA), vagina, paramétrio ou peritônio pélvico (IIIB), linfonodos pélvicos ou para-aórticos (IIIC)"],
        ["IV", "Mucosa de bexiga ou reto (IVA), peritônio abdominal além da pelve (IVB), metástase a distância (IVC)"]
      ],
      nota: "Classificação molecular: POLE mutado em estádio I–II passa a IAm-POLEmut (melhor prognóstico); p53 anormal em estádio I–II com invasão miometrial passa a IICm-p53abn. MMRd e NSMP não mudam o estádio. Conferir a tabela completa da FIGO 2023."
    },
    {
      titulo: "Espessura endometrial à USG transvaginal",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Pós-menopausa com sangramento, ≤ 4 mm, homogêneo, episódio único", "Baixo risco; acompanhar; novo sangramento → biópsia"],
        ["Pós-menopausa com sangramento, > 4 mm ou não mensurável", "Biópsia endometrial ou histeroscopia"],
        ["Pós-menopausa sem sangramento, endométrio espesso", "Sem ponto de corte consensual; individualizar com ginecologia"],
        ["Pré-menopausa", "Espessura não serve para excluir câncer; decidir biópsia pela clínica e fatores de risco"]
      ]
    }
  ],
  fontes: [
    "FIGO — Staging for endometrial cancer (Berek et al., Int J Gynaecol Obstet, 2023)",
    "ACOG Committee Opinion nº 734 — The role of transvaginal ultrasonography in evaluating the endometrium of women with postmenopausal bleeding (2018, reafirmado)",
    "ESGO/ESTRO/ESP — Guidelines for the management of patients with endometrial carcinoma (2025)",
    "FEBRASGO — Protocolos: Câncer de endométrio e Hiperplasia endometrial",
    "INCA/Ministério da Saúde — Estimativa 2023: incidência de câncer no Brasil; Lei 12.732/2012",
    "NCCN — Uterine Neoplasms (versão vigente) e Genetic/Familial High-Risk Assessment: Colorectal, Endometrial and Gastric (Lynch)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
