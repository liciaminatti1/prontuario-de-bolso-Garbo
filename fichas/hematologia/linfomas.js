// Linfomas: linfonodomegalia suspeita, Hodgkin e não Hodgkin, biópsia e encaminhamento
registrarFicha({
  id: "linfomas",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Linfonodomegalia suspeita e linfomas (Hodgkin e não Hodgkin)",
  resumo: "Como avaliar o adulto com linfonodo aumentado, quando suspeitar de linfoma (linfonodo persistente, endurecido, supraclavicular, generalizado, sintomas B), pedir biópsia excisional e encaminhar. Inclui urgências que podem ser a primeira manifestação.",
  palavrasChave: "linfoma hodgkin nao hodgkin lnh linfoma difuso grandes celulas b folicular burkitt linfonodo linfonodomegalia adenomegalia ingua ganglio supraclavicular virchow sintomas b febre sudorese noturna perda de peso prurido biopsia excisional puncao aspirativa ldh massa mediastinal",
  critico: {
    tempo: "Linfonodo suspeito: biópsia excisional",
    texto: "Linfonodo > 2 cm, endurecido, aderido, supraclavicular, ou que persiste > 4–6 semanas sem causa, ou com sintomas B: biópsia excisional (o linfonodo inteiro). Punção aspirativa não serve para diagnosticar ou classificar linfoma. Evite corticoide antes da biópsia."
  },
  alarmes: [
    "Edema de face e pescoço, turgência jugular, dispneia ao deitar (síndrome da veia cava superior: ficha sindrome-veia-cava-superior)",
    "Estridor, tosse seca, dispneia com massa mediastinal (compressão de via aérea)",
    "Dor nas costas com fraqueza nas pernas, alteração urinária ou intestinal (compressão medular: ficha compressao-medular-maligna)",
    "Linfonodos que crescem em dias, LDH muito alto, ácido úrico e K altos (linfoma agressivo/Burkitt e lise tumoral: ficha sindrome-lise-tumoral)",
    "Febre persistente, sudorese noturna encharcante, perda de peso > 10% em 6 meses (sintomas B)",
    "Citopenias, hepatoesplenomegalia, icterícia, hipercalcemia",
    "Imunossuprimido (HIV, transplantado) com linfonodomegalia ou lesão cerebral"
  ],
  conduta: [
    "Caracterizar o linfonodo: local, tamanho (normal em geral < 1 cm; inguinal até 1,5 cm), consistência, mobilidade, dor, tempo de evolução",
    "Localizado com causa evidente (infecção dentária, faringite, lesão de pele): tratar a causa e reavaliar em 2–4 semanas",
    "Generalizado (2 ou mais regiões não contíguas): hemograma, sorologias (HIV, sífilis, toxoplasmose, EBV, CMV, hepatites), PPD/IGRA ou investigação de tuberculose, LDH, radiografia de tórax",
    "Sem causa após 4–6 semanas, ou com características suspeitas desde o início: biópsia excisional do maior e mais acessível (preferir cervical/axilar a inguinal), com material a fresco para anatomopatológico, imuno-histoquímica e cultura (micobactéria e fungos)",
    "Supraclavicular, qualquer tamanho persistente, em adulto: biópsia sem esperar (alto risco de neoplasia)",
    "Não usar antibiótico empírico repetido nem corticoide 'para ver se desincha': atrasam o diagnóstico",
    "Pedir LDH, ácido úrico, creatinina, cálcio, função hepática, sorologias HIV, hepatites B e C antes do encaminhamento",
    "Encaminhar com prioridade à hematologia/oncologia com o laudo; casos com sinais de urgência vão ao PS"
  ],
  exames: [
    "Hemograma com esfregaço, VHS, PCR, LDH, ácido úrico, creatinina, cálcio, TGO, TGP, fosfatase alcalina, albumina",
    "Sorologias: HIV, sífilis (VDRL/teste rápido), hepatite B (HBsAg, anti-HBc) e C, EBV, CMV e toxoplasmose conforme quadro",
    "Radiografia de tórax (alargamento de mediastino, massa hilar); ultrassonografia do linfonodo e do abdome",
    "Biópsia excisional com anatomopatológico e imuno-histoquímica; enviar fragmento para cultura de micobactérias e fungos",
    "Estadiamento (hematologia/oncologia): PET-CT ou TC de pescoço, tórax, abdome e pelve; biópsia de medula conforme subtipo",
    "Biópsia por agulha grossa (core) guiada por imagem é alternativa quando a excisional não é viável; PAAF serve apenas para metástase de carcinoma ou para drenar abscesso"
  ],
  diferenciais: [
    "Reacional a infecção local (dentária, faringe, pele, IST)",
    "Mononucleose, CMV, toxoplasmose, HIV agudo, sífilis secundária",
    "Tuberculose ganglionar (escrófula), doença da arranhadura do gato, paracoccidioidomicose",
    "Metástase de carcinoma (cabeça e pescoço, pulmão, mama, gástrico — Virchow), melanoma",
    "Sarcoidose, lúpus, doença de Kikuchi, reação a drogas (fenitoína)",
    "Leucemia linfocítica crônica (linfocitose; ficha leucemias)"
  ],
  tabelas: [
    {
      titulo: "Linfonodo: características que pedem biópsia",
      colunas: ["Mais benigno", "Suspeito", "Comentário"],
      linhas: [
        ["< 1 cm (inguinal < 1,5 cm)", "> 2 cm", "Entre 1 e 2 cm: reavaliar em 4–6 semanas"],
        ["Mole, móvel, doloroso", "Endurecido, borrachoso, aderido, indolor", "Linfoma costuma ser borrachoso e indolor"],
        ["Cervical anterior, com infecção evidente", "Supraclavicular, epitroclear, mediastinal, abdominal", "Supraclavicular em adulto: biópsia direta"],
        ["Melhora em 2–4 semanas", "Persiste > 4–6 semanas ou cresce", "—"],
        ["Jovem sem sintomas", "Idade > 40 anos, sintomas B, citopenias, esplenomegalia", "—"]
      ]
    },
    {
      titulo: "Hodgkin x não Hodgkin",
      colunas: ["Aspecto", "Linfoma de Hodgkin", "Linfoma não Hodgkin"],
      linhas: [
        ["Idade", "Pico em adultos jovens (15–35) e após 55", "Aumenta com a idade; Burkitt em crianças e HIV"],
        ["Disseminação", "Contígua, cervical e mediastinal", "Não contígua; extranodal frequente (TGI, pele, SNC, medula)"],
        ["Sintomas", "Sintomas B, prurido; dor com álcool (rara)", "Depende do subtipo: indolente (folicular) ou agressivo (difuso de grandes células B, Burkitt)"],
        ["Diagnóstico", "Células de Reed-Sternberg na biópsia", "Imuno-histoquímica define subtipo"],
        ["Prognóstico", "Curável na maioria", "Agressivos são potencialmente curáveis; indolentes têm curso longo"]
      ],
      nota: "Sintomas B: febre > 38 °C sem causa, sudorese noturna encharcante, perda > 10% do peso em 6 meses (Lugano 2014)."
    }
  ],
  encaminhar: [
    "Cirurgia geral/cabeça e pescoço: biópsia excisional de linfonodo suspeito (pedido com prioridade)",
    "Hematologia/oncologia: diagnóstico de linfoma, ou suspeita forte (massa mediastinal, sintomas B, LDH alto) para agilizar biópsia",
    "Infectologia: suspeita de tuberculose ganglionar, HIV ou micose sistêmica",
    "PS no mesmo dia: síndrome da veia cava superior, compressão de via aérea ou medula, lise tumoral, hipercalcemia, citopenias graves, febre em imunossuprimido"
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — LINFONODOMEGALIA A ESCLARECER\nHemograma completo com esfregaço; VHS; PCR; LDH; ácido úrico; creatinina; cálcio; TGO; TGP; fosfatase alcalina; albumina.\nSorologias: anti-HIV; VDRL ou teste rápido para sífilis; HBsAg; anti-HBc total; anti-HCV; EBV (VCA IgM/IgG); CMV IgM/IgG; toxoplasmose IgM/IgG.\nPPD ou IGRA (se disponível).\nRadiografia de tórax PA e perfil; ultrassonografia da região cervical/axilar/inguinal e de abdome total.\nHD: Linfonodomegalia localizada (CID R59.0) / generalizada (CID R59.1) a esclarecer.\n\nENCAMINHAMENTO — CIRURGIA (PRIORIDADE)\nSolicito biópsia EXCISIONAL de linfonodo ________ (região), ___ cm, presente há ___ semanas, endurecido/aderido, com/sem sintomas B. Enviar material a fresco para anatomopatológico com imuno-histoquímica e fragmento para cultura de micobactérias e fungos. Suspeita: linfoma. Evitar corticoide antes da biópsia."
  },
  orientacoesRetorno: [
    "Ínguas pequenas e doloridas depois de gripe, dor de garganta ou machucado costumam sumir em 2 a 4 semanas",
    "Volte se a íngua crescer, ficar dura, não doer e não diminuir em 4 a 6 semanas, ou aparecer acima da clavícula",
    "Avise se tiver febre sem motivo, suor que encharca a roupa à noite, perda de peso sem dieta ou coceira no corpo todo",
    "Procure o PS se o rosto e o pescoço incharem, faltar ar ao deitar, tiver dificuldade para respirar, fraqueza nas pernas ou dor forte nas costas",
    "Não tome corticoide (prednisona, dexametasona) por conta própria: pode atrapalhar o diagnóstico"
  ],
  fontes: [
    "Cheson BD et al. — Recommendations for initial evaluation, staging, and response assessment of Hodgkin and non-Hodgkin lymphoma: the Lugano classification (J Clin Oncol, 2014)",
    "NCCN Guidelines — B-Cell Lymphomas e Hodgkin Lymphoma (versão 2025)",
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas do Linfoma Difuso de Grandes Células B (2014) e do Linfoma de Hodgkin (versão vigente)",
    "INCA — Estimativa 2023: incidência de câncer no Brasil; Detecção precoce do câncer (2021)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
