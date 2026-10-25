// Tumores do pâncreas: adenocarcinoma, lesões císticas e tumores neuroendócrinos
registrarFicha({
  id: "tumores-pancreas",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Tumores do pâncreas: adenocarcinoma, lesões císticas e tumores neuroendócrinos",
  resumo: "Adenocarcinoma: icterícia indolor, perda de peso, dor epigástrica para o dorso ou diabetes de início recente com emagrecimento após os 50 anos → TC com protocolo de pâncreas e CA 19-9 e encaminhamento rápido. Cisto de pâncreas achado em exame: classificar pelos estigmas de alto risco e sinais preocupantes (Fukuoka 2017/Kyoto 2024). Tumores neuroendócrinos: funcionantes (insulinoma, gastrinoma) ou não funcionantes.",
  palavrasChave: "cancer pancreas adenocarcinoma ictericia indolor courvoisier ca 19-9 tomografia protocolo pancreas ecoendoscopia puncao whipple duodenopancreatectomia ressecabilidade borderline cisto pancreatico ipmn neoplasia mucinosa cistica cistoadenoma seroso pseudocisto fukuoka kyoto estigmas alto risco sinais preocupantes tumor neuroendocrino insulinoma gastrinoma zollinger ellison glucagonoma vipoma men1 cromogranina dotatate",
  alarmes: [
    "Icterícia sem dor, colúria, acolia, prurido, vesícula palpável indolor (Courvoisier)",
    "Perda de peso não explicada com dor epigástrica que irradia para o dorso e piora deitado",
    "Diabetes de início recente após os 50 anos com perda de peso (ou piora súbita de DM antes controlado)",
    "Esteatorreia, pancreatite sem causa aparente em > 50 anos",
    "Tromboflebite migratória (Trousseau) ou TEV sem causa",
    "Febre com icterícia (colangite: PS — ver colecistite-colangite)",
    "Hipoglicemia em jejum com sintomas neuroglicopênicos (insulinoma); úlceras pépticas múltiplas, refratárias ou com diarreia (gastrinoma)"
  ],
  conduta: [
    "Suspeita de adenocarcinoma: TC de abdome com protocolo de pâncreas (fases arterial e venosa portal) + TC de tórax; CA 19-9, bilirrubinas, enzimas hepáticas, hemograma, glicemia, albumina",
    "Massa ou dilatação de ducto biliar e pancreático (sinal do duplo ducto) sem massa visível: ecoendoscopia (com punção, se necessária) ou RM com colangio-RM",
    "Encaminhar com prioridade ao serviço de cirurgia pancreática/oncologia de alto volume; a decisão de drenagem biliar pré-operatória, biópsia e neoadjuvância fica com o serviço de referência",
    "Drenagem biliar antes do encaminhamento só se colangite, prurido intratável ou atraso previsto da cirurgia; preferir prótese metálica por CPRE",
    "Todo paciente com adenocarcinoma de pâncreas deve ter oferta de teste genético germinativo (BRCA1/2, PALB2, ATM, Lynch) — orienta tratamento e familiares",
    "Paliação: dor (opioide; neurólise do plexo celíaco), enzimas pancreáticas se esteatorreia ou perda de peso, prótese biliar ou duodenal, profilaxia de TEV em casos selecionados, cuidados paliativos precoces",
    "Cisto pancreático incidental: pedir RM com colangio-RM; classificar (tabela). Estigma de alto risco → cirurgia; sinal preocupante → ecoendoscopia; nenhum → vigilância por imagem conforme tamanho",
    "Cisto em paciente sem condição ou desejo de cirurgia: não iniciar vigilância (sem benefício)",
    "Suspeita de tumor neuroendócrino: TC ou RM; funcionante → dosagens hormonais dirigidas pelo quadro; encaminhar à endocrinologia/cirurgia; pensar em NEM1 (hiperparatireoidismo, hipófise)",
    "Insulinoma: tratar hipoglicemia (glicose), refeições frequentes; diagnóstico por jejum supervisionado de até 72 h em hospital"
  ],
  exames: [
    "TC de abdome com protocolo de pâncreas (trifásica) e TC de tórax; RM com colangio-RM se contraindicação ao iodo ou cisto",
    "CA 19-9 (com bilirrubina normal, de preferência): apoio diagnóstico e prognóstico; NÃO serve para rastreio; sobe na colestase e na colangite; ~5–10% da população (Lewis negativo) não produz",
    "Bilirrubinas, fosfatase alcalina, GGT, TGO, TGP, hemograma, glicemia, HbA1c, albumina, TP/INR",
    "Ecoendoscopia com punção: lesão pequena, diagnóstico tecidual antes de quimioterapia, cisto com sinal preocupante (CEA e citologia do líquido)",
    "Tumor neuroendócrino: cromogranina A (falso positivo com IBP e DRC), gastrina sérica em jejum (suspender IBP só com orientação do especialista), insulina, peptídeo C e glicemia durante hipoglicemia; PET-CT com análogo de somatostatina (68Ga-DOTATATE) no serviço de referência"
  ],
  diferenciais: [
    "Coledocolitíase, colangiocarcinoma distal, tumor de ampola ou duodeno (ver doencas-vias-biliares)",
    "Pancreatite crônica com massa inflamatória, pancreatite autoimune (IgG4)",
    "Pseudocisto (história de pancreatite) × neoplasia cística",
    "Linfoma, metástase pancreática (rim)",
    "Hipoglicemia por sulfonilureia ou insulina exógena (peptídeo C baixo com insulina exógena), pós-bariátrica"
  ],
  tabelas: [
    {
      titulo: "Ressecabilidade do adenocarcinoma (NCCN, resumo)",
      colunas: ["Categoria", "Critério principal", "Conduta usual"],
      linhas: [
        ["Ressecável", "Sem contato arterial (tronco celíaco, AMS, artéria hepática) e contato venoso ≤ 180° sem irregularidade", "Cirurgia (Whipple / pancreatectomia distal) ± neoadjuvância; quimioterapia adjuvante"],
        ["Borderline", "Contato arterial limitado ou envolvimento venoso reconstruível", "Quimioterapia neoadjuvante e reavaliação"],
        ["Localmente avançado", "Contato arterial extenso (> 180° AMS/tronco celíaco) ou veia não reconstruível", "Quimioterapia ± radioterapia; cirurgia raramente"],
        ["Metastático", "Fígado, peritônio, pulmão, linfonodos à distância", "Quimioterapia paliativa e cuidados paliativos"]
      ]
    },
    {
      titulo: "Cisto pancreático (IPMN suspeito) — Fukuoka 2017 / Kyoto 2024",
      colunas: ["Categoria", "Achados", "Conduta"],
      linhas: [
        ["Estigmas de alto risco", "Icterícia obstrutiva com cisto na cabeça; nódulo mural ou componente sólido com realce ≥ 5 mm; ducto pancreático principal ≥ 10 mm; citologia suspeita ou positiva", "Cirurgia (se apto)"],
        ["Sinais preocupantes", "Cisto ≥ 3 cm; nódulo mural com realce < 5 mm; parede espessada com realce; ducto principal 5–9 mm; mudança abrupta do calibre do ducto com atrofia distal; linfonodomegalia; CA 19-9 elevado; crescimento rápido do cisto; pancreatite; DM novo ou que piora (Kyoto 2024)", "Ecoendoscopia (± punção) e discussão em equipe"],
        ["Sem esses achados", "Cisto < 3 cm, sem nódulo, ducto normal", "Vigilância com RM/colangio-RM (ou ecoendoscopia) em intervalos conforme o tamanho"]
      ],
      nota: "Outros cistos: cistoadenoma seroso (microcístico, cicatriz central, benigno — sem vigilância se típico); neoplasia cística mucinosa (mulher de meia-idade, corpo/cauda — em geral cirurgia); neoplasia sólido-pseudopapilar (mulher jovem — cirurgia); pseudocisto (pancreatite prévia)."
    },
    {
      titulo: "Tumores neuroendócrinos funcionantes",
      colunas: ["Tumor", "Quadro", "Pista diagnóstica"],
      linhas: [
        ["Insulinoma", "Tríade de Whipple: sintomas neuroglicopênicos em jejum, glicemia baixa, melhora com glicose; ganho de peso", "Hipoglicemia com insulina e peptídeo C inapropriadamente altos (jejum de 72 h)"],
        ["Gastrinoma (Zollinger-Ellison)", "Úlceras múltiplas, refratárias ou em local atípico, diarreia, DRGE grave", "Gastrina muito elevada com pH gástrico ácido; 20–30% com NEM1"],
        ["Glucagonoma", "Eritema necrolítico migratório, DM, perda de peso, TVP", "Glucagon elevado"],
        ["VIPoma", "Diarreia aquosa volumosa, hipocalemia, acloridria", "VIP elevado"],
        ["Somatostatinoma", "DM, colelitíase, esteatorreia", "Somatostatina elevada"]
      ],
      nota: "A maioria dos tumores neuroendócrinos pancreáticos é não funcionante e achada em exame de imagem. Grau pelo Ki-67 (G1 < 3%, G2 3–20%, G3 > 20%). Não funcionante < 2 cm, G1, assintomático: vigilância é opção (ENETS 2023)."
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO\n1. Tomografia computadorizada de abdome com protocolo para pâncreas (fases arterial e venosa portal) e tomografia de tórax com contraste.\n   Indicação: suspeita de neoplasia de pâncreas (___: icterícia indolor / perda de peso / DM recente com emagrecimento / massa em USG). PRIORIDADE.\n2. CA 19-9, CEA, bilirrubinas totais e frações, fosfatase alcalina, GGT, TGO, TGP, hemograma, glicemia, HbA1c, albumina, TP/INR, creatinina.\n3. (Cisto incidental) Ressonância magnética de abdome superior com colangiorressonância. Indicação: cisto pancreático de ___ mm em ___ (exame/data) — caracterização.\n\nPALIAÇÃO (doença avançada, conforme oncologia)\nUSO ORAL\n1. Pancreatina (cápsulas com 25.000 UI de lipase) ----------- uso contínuo\n   Tomar 1 a 2 cápsulas no início de cada refeição e 1 cápsula nos lanches (ajustar pela esteatorreia).\n2. Morfina 10 mg (liberação imediata) ------------------------ ___ comprimidos\n   Tomar 1 comprimido de 4 em 4 horas se dor; ajustar dose conforme resposta.\n3. Lactulose 667 mg/mL ------------------------------------------ 1 frasco\n   Tomar 15 mL 1 a 2 vezes ao dia enquanto usar morfina.\n\nENCAMINHAMENTO PRIORITÁRIO\nCirurgia do aparelho digestivo / oncologia — suspeita de neoplasia de pâncreas. TC: ___. CA 19-9: ___. Bilirrubina: ___. Peso: ___ kg (perda ___ kg). Lei 13.896/2019 (exames em até 30 dias) e 12.732/2012."
  },
  orientacoesRetorno: [
    "Pele ou olhos amarelos, urina escura e fezes claras precisam de avaliação rápida, mesmo sem dor",
    "Procurar o PS se febre com calafrio junto da pele amarela, vômitos que não param ou dor muito forte",
    "Cisto no pâncreas na maioria das vezes é benigno; o importante é fazer os exames de controle nas datas combinadas",
    "Com enzimas do pâncreas: tomar junto com a comida, não depois",
    "Quem tem tumor neuroendócrino com hipoglicemia: não ficar muito tempo sem comer e andar com açúcar ou bala"
  ],
  encaminhar: [
    "Cirurgia pancreática / oncologia com prioridade: suspeita de adenocarcinoma ou massa sólida",
    "Gastroenterologia (ecoendoscopia) ou cirurgia: cisto com sinal preocupante ou estigma de alto risco",
    "Endocrinologia: suspeita de tumor neuroendócrino funcionante, NEM1",
    "Genética: adenocarcinoma de pâncreas (teste germinativo), ≥ 2 parentes de 1º grau com câncer de pâncreas",
    "Cuidados paliativos: doença avançada, desde o diagnóstico",
    "PS: colangite, obstrução duodenal, hipoglicemia grave"
  ],
  fontes: [
    "NCCN Guidelines — Pancreatic Adenocarcinoma (2025)",
    "ESMO — Pancreatic cancer: Clinical Practice Guideline (Ann Oncol, 2023)",
    "International consensus Fukuoka guidelines for IPMN (Pancreatology, 2017) e Kyoto guidelines (Pancreatology, 2024)",
    "European evidence-based guidelines on pancreatic cystic neoplasms (Gut, 2018)",
    "ENETS — Guidance paper for non-functioning and functioning pancreatic neuroendocrine tumours (J Neuroendocrinol, 2023)",
    "Lei nº 13.896/2019 e Lei nº 12.732/2012"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
