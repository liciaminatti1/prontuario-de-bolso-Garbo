// Câncer de mama: suspeita, estadiamento, subtipos e seguimento na APS
registrarFicha({
  id: "cancer-mama",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Câncer de mama: suspeita, subtipos e seguimento na APS",
  resumo: "Do achado suspeito ao seguimento: quando suspeitar, fluxo pelo BI-RADS e biópsia, estadiamento TNM, subtipos moleculares e o que muda no tratamento, prazos legais e cuidado da sobrevivente na APS (hormonioterapia, efeitos tardios, recidiva).",
  palavrasChave: "cancer de mama carcinoma de mama ductal lobular invasivo in situ cdis bi rads birads mamografia biopsia core tnm estadiamento luminal a luminal b her2 triplo negativo receptor de estrogenio ki67 tamoxifeno anastrozol letrozol inibidor de aromatase trastuzumabe mastectomia quadrantectomia linfonodo sentinela linfedema sobrevivente seguimento brca mama masculina lei 60 dias",
  critico: {
    tempo: "Suspeita: biópsia em até 30 dias",
    texto: "Nódulo suspeito ao exame ou BI-RADS 4/5: encaminhar com prioridade (Lei 13.896/2019: exames em até 30 dias). Diagnóstico confirmado: tratamento iniciado em até 60 dias (Lei 12.732/2012). Avaliação inicial e BI-RADS: ver nodulo-mamario."
  },
  alarmes: [
    "Nódulo endurecido, fixo, irregular ou crescente; linfonodo axilar ou supraclavicular endurecido",
    "Retração de pele ou mamilo, pele em casca de laranja, ulceração, eczema do mamilo que não melhora (Paget)",
    "Mama vermelha, quente e endurecida sem resposta a antibiótico (carcinoma inflamatório)",
    "Descarga papilar espontânea, unilateral, uniductal, sanguinolenta ou cristalina",
    "Em sobrevivente: dor óssea persistente, tosse ou dispneia, cefaleia nova, déficit neurológico, icterícia, perda de peso, novo nódulo ou alteração na cicatriz",
    "Fraqueza nas pernas ou dor na coluna com alteração esfincteriana (compressão medular — ver compressao-medular-maligna)",
    "Febre em quimioterapia (ver neutropenia-febril)"
  ],
  conduta: [
    "Suspeita: anamnese, exame das mamas, axilas e fossas supraclaviculares; imagem conforme idade e conduta por BI-RADS (ver nodulo-mamario). Rastreamento: ver rastreio-cancer",
    "Exame clínico suspeito com imagem normal ou BI-RADS 3: encaminhar mesmo assim",
    "Diagnóstico: biópsia por agulha grossa (core) guiada por imagem, com imuno-histoquímica (RE, RP, HER2, Ki-67)",
    "Estadiamento (oncologia): TNM AJCC 8ª ed. clínico e prognóstico. Estádios I–II assintomáticos não precisam de TC ou cintilografia; estádio III, sintomas ou exames alterados → TC de tórax e abdome e cintilografia óssea (ou PET-TC)",
    "Tratamento conforme subtipo e estádio (tabela): cirurgia conservadora + radioterapia ou mastectomia; linfonodo sentinela; quimioterapia neoadjuvante frequente em HER2+ e triplo-negativo; hormonioterapia em RE+; anti-HER2 em HER2+",
    "Pedir aconselhamento genético (BRCA1/2 e outros) se: diagnóstico em idade jovem, triplo-negativo em idade mais jovem, câncer bilateral, câncer de mama masculino, câncer de ovário ou pâncreas na família, vários parentes afetados",
    "Seguimento da sobrevivente (APS compartilhada com oncologia): anamnese e exame físico a cada 3–6 meses nos 3 primeiros anos, a cada 6–12 meses no 4º e 5º anos e depois anual",
    "Mamografia anual da mama tratada e da contralateral (a primeira cerca de 6–12 meses após a radioterapia). Em assintomática, NÃO pedir marcadores (CA 15-3, CEA), TC, cintilografia ou PET de rotina",
    "Tamoxifeno: perguntar sobre sangramento vaginal (investigar endométrio) e sintomas de trombose; evitar paroxetina e fluoxetina (reduzem a ativação do tamoxifeno); contracepção não hormonal (DIU de cobre) — tamoxifeno é teratogênico",
    "Inibidor de aromatase: densitometria no início e periódica, cálcio e vitamina D, exercício; artralgia é comum (analgésico, exercício); perfil lipídico",
    "Fogachos: medidas comportamentais; venlafaxina ou gabapentina. Terapia hormonal sistêmica é contraindicada após câncer de mama",
    "Atrofia vaginal: hidratante e lubrificante; estrogênio vaginal só com aval do oncologista",
    "Após antraciclina ou trastuzumabe: atenção a sintomas de insuficiência cardíaca; controlar fatores de risco cardiovascular",
    "Linfedema: orientar cuidados com a pele do braço, exercício, avaliação por fisioterapia se edema; tratar celulite cedo",
    "Adesão à hormonioterapia (5 a 10 anos), saúde mental, sexualidade, retorno ao trabalho, peso e atividade física; rastreio dos demais cânceres conforme idade"
  ],
  exames: [
    "Suspeita: 'Mamografia bilateral diagnóstica + ultrassonografia de mamas e axilas — nódulo em mama ___, quadrante ___' (ver nodulo-mamario)",
    "Biópsia (mastologia/serviço de imagem): 'Biópsia percutânea por agulha grossa guiada por USG/estereotaxia com imuno-histoquímica (RE, RP, HER2, Ki-67)'",
    "Seguimento: 'Mamografia bilateral (ou da mama remanescente) — controle anual pós-tratamento de câncer de mama'",
    "Densitometria óssea: início do inibidor de aromatase e a cada 1–2 anos conforme resultado",
    "Avaliação ginecológica anual; USG transvaginal só se sangramento em uso de tamoxifeno",
    "Exames de imagem do corpo ou marcadores tumorais somente se houver sintoma ou achado ao exame"
  ],
  diferenciais: [
    "Fibroadenoma, cisto, alteração fibrocística, tumor filoides",
    "Necrose gordurosa (trauma, cirurgia)",
    "Mastite e abscesso (ver mastite) × carcinoma inflamatório",
    "Ginecomastia × câncer de mama masculino",
    "Linfonodomegalia axilar por infecção, linfoma ou outra neoplasia"
  ],
  prescricao: {
    ambulatorial: "SEGUIMENTO — SOBREVIVENTE DE CÂNCER DE MAMA (adaptar)\nSOLICITAÇÃO\n1. Mamografia bilateral (ou da mama remanescente) — controle anual pós-tratamento (cirurgia em __/____).\n2. Densitometria óssea (coluna lombar e fêmur) — em uso de inibidor de aromatase.\n\nUSO ORAL — em uso de inibidor de aromatase (se ingestão de cálcio na dieta insuficiente)\n3. Carbonato de cálcio 1.250 mg (500 mg de cálcio) + colecalciferol ---- 60 comprimidos\n   Tomar 1 comprimido 1 a 2 vezes ao dia, após refeição.\n\nUSO ORAL — fogachos que atrapalham (venlafaxina pode ser usada junto com tamoxifeno)\n4. Venlafaxina 37,5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido pela manhã por 7 dias; depois, se necessário, 2 comprimidos (75 mg) pela manhã. Reavaliar em 4–6 semanas.\n\nUSO VAGINAL\n5. Gel lubrificante/hidratante vaginal à base de água ------ 1 tubo\n   Aplicar 3 vezes por semana e antes das relações sexuais.\n\nObservação: manter tamoxifeno / inibidor de aromatase conforme oncologia; não prescrever terapia hormonal sistêmica."
  },
  orientacoesRetorno: [
    "Fazer as consultas e a mamografia anual mesmo sem sintomas",
    "Tomar o comprimido de hormonioterapia todos os dias pelo tempo indicado; não parar sem falar com o médico, mesmo com efeitos colaterais — há como aliviá-los",
    "Em uso de tamoxifeno: avisar se tiver sangramento vaginal, dor ou inchaço em uma perna ou falta de ar súbita; não engravidar (usar preservativo ou DIU de cobre)",
    "Procurar atendimento se dor nos ossos que não passa, tosse ou falta de ar persistente, dor de cabeça diferente, fraqueza, perda de peso ou novo caroço",
    "Cuidar da pele do braço do lado operado; procurar logo se ficar vermelho, quente ou inchado",
    "Fazer atividade física regular, manter peso adequado, evitar álcool e não fumar",
    "Se estiver em quimioterapia e tiver febre, ir imediatamente ao pronto-socorro"
  ],
  encaminhar: [
    "Mastologia com prioridade: BI-RADS 4/5, exame clínico suspeito, descarga papilar suspeita, mama inflamada sem resposta a antibiótico",
    "Oncologia/CACON-UNACON: diagnóstico confirmado (prazo legal de 60 dias para iniciar tratamento)",
    "Genética: critérios de síndrome hereditária",
    "Fisioterapia: linfedema, limitação do ombro",
    "Retorno antecipado à oncologia: suspeita de recidiva ou metástase; efeitos adversos graves da hormonioterapia",
    "PS: febre em quimioterapia, suspeita de compressão medular, hipercalcemia, TEV"
  ],
  tabelas: [
    {
      titulo: "Subtipos e implicação terapêutica",
      colunas: ["Subtipo", "Perfil", "Tratamento sistêmico principal"],
      linhas: [
        ["Luminal A", "RE+ e RP alto, HER2−, Ki-67 baixo", "Hormonioterapia; quimioterapia raramente necessária"],
        ["Luminal B (HER2−)", "RE+, HER2−, Ki-67 alto e/ou RP baixo", "Hormonioterapia; quimioterapia conforme risco"],
        ["Luminal B (HER2+)", "RE+ e HER2+", "Quimioterapia + anti-HER2 (trastuzumabe) + hormonioterapia"],
        ["HER2 superexpresso", "RE− e RP−, HER2+", "Quimioterapia + anti-HER2 (frequentemente neoadjuvante)"],
        ["Triplo-negativo", "RE−, RP−, HER2−", "Quimioterapia (frequentemente neoadjuvante); imunoterapia em casos selecionados"]
      ],
      nota: "Hormonioterapia: tamoxifeno (pré-menopausa, ou pós-menopausa conforme caso) ou inibidor de aromatase (pós-menopausa), por 5 a 10 anos."
    },
    {
      titulo: "Estadiamento TNM (AJCC 8ª ed.) — resumo do T e grupos",
      colunas: ["Categoria", "Definição"],
      linhas: [
        ["Tis", "Carcinoma ductal in situ (estádio 0)"],
        ["T1 / T2 / T3", "≤ 2 cm / > 2 a ≤ 5 cm / > 5 cm"],
        ["T4", "Extensão à parede torácica e/ou pele (ulceração, nódulos satélites, casca de laranja) ou carcinoma inflamatório"],
        ["N", "N1: axilares móveis; N2: axilares fixos ou mamária interna; N3: infra/supraclavicular ou axilar + mamária interna"],
        ["Grupos", "I e II: inicial; III: localmente avançado (T4 ou N2–N3); IV: metástase a distância (M1)"]
      ],
      nota: "O estádio prognóstico da AJCC 8ª ed. incorpora grau, RE, RP e HER2. Conferir a tabela completa com a oncologia."
    }
  ],
  fontes: [
    "INCA/Ministério da Saúde — Parâmetros técnicos para detecção precoce do câncer de mama (2022) e Diretrizes para a detecção precoce do câncer de mama no Brasil (2015)",
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas do Carcinoma de Mama (Portaria Conjunta SAES/SECTICS vigente)",
    "Lei 12.732/2012 (60 dias) e Lei 13.896/2019 (30 dias para exames diagnósticos)",
    "ASCO — Breast cancer follow-up and management after primary treatment (2013, reafirmado) e ASCO/ACS Breast Cancer Survivorship Care Guideline (2016)",
    "AJCC Cancer Staging Manual, 8ª ed. (2017, atualização 2018)",
    "ACR BI-RADS Atlas, 5ª ed. (2013); FEBRASGO e Sociedade Brasileira de Mastologia — recomendações vigentes"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
