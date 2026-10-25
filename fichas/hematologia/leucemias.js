// Leucemias: suspeita pelo hemograma, leucemia aguda, leucostase, LMC e LLC
registrarFicha({
  id: "leucemias",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Leucemias: suspeita no hemograma, leucemia aguda, leucostase, LMC e LLC",
  resumo: "Quando o hemograma sugere leucemia (blastos, citopenias inexplicadas, leucocitose muito alta ou com desvio, linfocitose persistente), o que fazer no PS e na UBS. Leucemia aguda é urgência (infecção, sangramento, CIVD na promielocítica, leucostase, lise tumoral); LMC e LLC costumam ser ambulatoriais.",
  palavrasChave: "leucemia aguda lma lla leucemia mieloide linfoide cronica lmc llc blastos bastonete de auer leucocitose hiperleucocitose leucostase promielocitica lpa atra tretinoina civd pancitopenia bicitopenia linfocitose esplenomegalia bcr abl cromossomo philadelphia imatinibe hidroxiureia mielograma imunofenotipagem citometria de fluxo",
  critico: {
    tempo: "Blastos no sangue: hematologia hoje",
    texto: "Blastos ou bi/pancitopenia com febre, sangramento ou leucócitos > 100.000/mm³: internar e acionar a hematologia no mesmo dia. Suspeita de leucemia promielocítica (sangramento + CIVD): iniciar tretinoína (ATRA) e repor fibrinogênio e plaquetas sem esperar confirmação."
  },
  alarmes: [
    "Febre com neutrófilos < 500/mm³ (ficha neutropenia-febril: antibiótico em até 1 h)",
    "Sangramento com plaquetopenia, TP/TTPa alargados, fibrinogênio baixo (CIVD; pensar em leucemia promielocítica)",
    "Leucócitos > 100.000/mm³ ou blastos > 50.000/mm³ com dispneia, hipoxemia, confusão, cefaleia, alteração visual, priapismo (leucostase)",
    "Hipercalemia, hiperfosfatemia, hiperuricemia, creatinina subindo (lise tumoral espontânea: ficha sindrome-lise-tumoral)",
    "Massa mediastinal com dispneia, edema de face (ficha sindrome-veia-cava-superior)",
    "Hipertrofia gengival, infiltração de pele, dor óssea intensa, déficit neurológico",
    "Criança com palidez, petéquias, dor óssea, hepatoesplenomegalia e citopenias: oncologia pediátrica com urgência"
  ],
  condutaInicial: [
    "Repetir hemograma com revisão do esfregaço por hematologista/laboratório (blastos, bastonetes de Auer, promielócitos anormais, desvio escalonado, manchas de Gumprecht)",
    "Avaliar febre, sangramento, sinais de leucostase e estabilidade",
    "Exames de urgência: hemograma, reticulócitos, TP, TTPa, fibrinogênio, D-dímero, LDH, ácido úrico, K, P, Ca, ureia, creatinina, TGO, TGP, bilirrubinas, tipagem, sorologias (HIV, hepatites B e C)",
    "Febre + neutropenia: culturas e antibiótico em até 1 h (ficha neutropenia-febril)",
    "Prevenção de lise tumoral: hidratação e alopurinol (ficha sindrome-lise-tumoral)",
    "Plaquetas: transfundir se < 10.000/mm³, < 20.000 com febre ou sangramento, ou < 50.000 com sangramento significativo ou procedimento",
    "CIVD/suspeita de promielocítica: manter plaquetas > 30.000–50.000/mm³ e fibrinogênio > 100–150 mg/dL (crioprecipitado), e ATRA imediato",
    "Leucostase: hidratação, citorredução urgente com a hematologia (hidroxiureia, quimioterapia, leucaférese); evitar transfusão de hemácias até reduzir os leucócitos",
    "Evitar corticoide antes do diagnóstico em suspeita de LLA ou linfoma (pode prejudicar o diagnóstico), salvo urgência",
    "Leucemia crônica estável (LMC, LLC): encaminhamento ambulatorial à hematologia com exames"
  ],
  fataisExcluir: [
    "Leucemia promielocítica aguda com CIVD (hemorragia intracraniana precoce)",
    "Leucostase (insuficiência respiratória, AVC)",
    "Neutropenia febril / sepse",
    "Síndrome de lise tumoral",
    "Massa mediastinal com compressão de via aérea (LLA T)",
    "Hemorragia intracraniana por plaquetopenia"
  ],
  proximaDecisao: "Blastos ou citopenias sem causa → mielograma com imunofenotipagem, citogenética e biologia molecular no centro de referência. Leucocitose com desvio escalonado, basofilia e esplenomegalia → pesquisa de BCR::ABL1 no sangue periférico (LMC). Linfocitose > 5.000/mm³ persistente em adulto → imunofenotipagem do sangue periférico (LLC). Reação leucemoide (infecção, corticoide) → tratar a causa e repetir.",
  clinica: {
    anamnese: [
      "Cansaço, palidez, febre, infecções repetidas, sangramentos (gengiva, nariz, menstruação), equimoses espontâneas",
      "Dor óssea, perda de peso, sudorese noturna, saciedade precoce ou peso no lado esquerdo (esplenomegalia)",
      "Cefaleia, alteração visual, dispneia (leucostase)",
      "Quimioterapia ou radioterapia prévias, benzeno, síndrome de Down, mielodisplasia prévia",
      "Uso recente de corticoide, G-CSF, lítio; infecção grave (reação leucemoide)"
    ],
    exameFisico: [
      "Palidez, petéquias, equimoses, sangramento gengival",
      "Linfonodomegalias, hepatoesplenomegalia (medir o baço abaixo do rebordo)",
      "Hipertrofia gengival, infiltrado cutâneo",
      "Fundo de olho (hemorragias, leucostase), exame neurológico",
      "Foco infeccioso, saturação de O₂, testículos (LLA)"
    ],
    diferenciais: [
      { dx: "Leucemia mieloide aguda (LMA)", pista: "Adulto, blastos mieloides, bastonetes de Auer, citopenias" },
      { dx: "Leucemia promielocítica (LPA)", pista: "Promielócitos anormais, CIVD com fibrinogênio baixo, sangramento; leucócitos muitas vezes baixos" },
      { dx: "Leucemia linfoide aguda (LLA)", pista: "Criança ou adulto jovem, blastos linfoides, linfonodos, massa mediastinal, dor óssea" },
      { dx: "Leucemia mieloide crônica (LMC)", pista: "Leucocitose com todas as fases de maturação, basofilia, eosinofilia, plaquetas altas, esplenomegalia" },
      { dx: "Leucemia linfocítica crônica (LLC)", pista: "Idoso, linfocitose madura persistente, manchas de Gumprecht, linfonodos" },
      { dx: "Reação leucemoide", pista: "Infecção grave, sepse, corticoide; neutrofilia com granulações tóxicas, sem basofilia" },
      { dx: "Linfocitose reativa", pista: "Mononucleose, CMV, coqueluche; linfócitos atípicos, transitória" },
      { dx: "Aplasia, mielodisplasia, B12, infiltração por câncer", pista: "Citopenias sem blastos; macrocitose; leucoeritroblastose" }
    ],
    gravidade: [
      "Leucemia aguda = urgência; mortalidade precoce por infecção, hemorragia, leucostase",
      "Hiperleucocitose: leucócitos > 100.000/mm³ (leucostase ocorre com contagens menores na LMA)",
      "LMC em fase crônica e LLC assintomática: não são urgência"
    ]
  },
  exames: [
    {
      nome: "Hemograma com esfregaço revisado",
      pedido: "Hemograma completo com contagem diferencial manual e revisão do esfregaço de sangue periférico (pesquisa de blastos, bastonetes de Auer, promielócitos, desvio escalonado, basófilos); reticulócitos.",
      porQue: "Definir o padrão e a urgência.",
      esperar: "—",
      interpretacao: "Blastos = urgência. Desvio escalonado com basofilia = LMC. Linfocitose madura = LLC ou reativa.",
      limitacoes: "Leucemia aguda pode ter leucócitos normais ou baixos (aleucêmica)."
    },
    {
      nome: "Coagulação e lise tumoral",
      pedido: "TP/INR, TTPa, fibrinogênio, D-dímero; LDH, ácido úrico, potássio, fósforo, cálcio, ureia, creatinina; gasometria venosa.",
      porQue: "CIVD (promielocítica) e lise tumoral.",
      esperar: "—",
      interpretacao: "Fibrinogênio baixo com sangramento = tratar como LPA até prova em contrário.",
      limitacoes: "Hiperleucocitose causa pseudo-hipercalemia e pseudo-hipoxemia (gasometria e K falsamente alterados): conferir com sangue processado rápido."
    },
    {
      nome: "Diagnóstico definitivo (hematologia)",
      pedido: "Mielograma com imunofenotipagem por citometria de fluxo, citogenética e biologia molecular; biópsia de medula se aspirado seco. LMC: pesquisa de BCR::ABL1 (PCR quantitativo) no sangue periférico. LLC: imunofenotipagem do sangue periférico.",
      porQue: "Classificar e definir tratamento.",
      esperar: "LLC: clone B ≥ 5.000/mm³ (CD5+, CD23+).",
      interpretacao: "Imunofenotipagem do sangue periférico pode diagnosticar leucemia aguda com muitos blastos circulantes.",
      limitacoes: "Feito no centro de referência."
    },
    {
      nome: "Avaliação para infecção e transfusão",
      pedido: "Hemoculturas (2 amostras), urocultura, radiografia de tórax se febre; tipagem ABO/Rh e pesquisa de anticorpos irregulares; sorologias para HIV, hepatite B (HBsAg, anti-HBc) e C.",
      porQue: "Neutropenia febril e preparo para quimioterapia.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Tretinoína (ácido all-trans retinoico, ATRA) — suspeita de leucemia promielocítica",
      linha: "l1",
      dose: "45 mg/m²/dia dividido em 2 tomadas",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Conforme protocolo da hematologia",
      monitorizacao: "Síndrome de diferenciação (febre, dispneia, infiltrado pulmonar, ganho de peso, hipotensão, insuficiência renal): tratar com dexametasona conforme hematologia",
      contraindicacoes: "Gestação no 1º trimestre (teratogênico; discutir)",
      ajustes: "Iniciar na suspeita clínica (ELN 2019), sem esperar confirmação molecular. Disponível em centros de tratamento"
    },
    {
      droga: "Crioprecipitado e plaquetas (CIVD da LPA)",
      linha: "l1",
      dose: "Crioprecipitado 1 unidade/10 kg; plaquetas 1 unidade/10 kg ou 1 aférese",
      via: "IV",
      intervalo: "Conforme fibrinogênio e plaquetas a cada 6–12 h",
      duracao: "Até controle da coagulopatia",
      monitorizacao: "Fibrinogênio > 100–150 mg/dL; plaquetas > 30.000–50.000/mm³",
      contraindicacoes: "—",
      ajustes: "Ácido tranexâmico NÃO é recomendado de rotina na LPA"
    },
    {
      droga: "Hidratação e alopurinol (prevenção de lise)",
      linha: "l1",
      dose: "SF 0,9% para diurese ≥ 80–100 mL/m²/h; alopurinol conforme ficha sindrome-lise-tumoral",
      via: "IV / VO",
      intervalo: "Contínuo / diário",
      duracao: "Até o fim do risco",
      monitorizacao: "Eletrólitos, ácido úrico, creatinina de 6/6 a 12/12 h nos casos de risco alto",
      contraindicacoes: "Sobrecarga de volume",
      ajustes: "Rasburicase se risco alto ou ácido úrico muito alto (contraindicada na deficiência de G6PD)"
    },
    {
      droga: "Hidroxiureia (citorredução na hiperleucocitose/leucostase e LMC antes do diagnóstico molecular)",
      linha: "adj",
      dose: "Conforme hematologista (mg/kg/dia em doses divididas)",
      via: "VO",
      intervalo: "Conforme hematologia",
      duracao: "Até reduzir leucócitos ou iniciar tratamento específico",
      monitorizacao: "Hemograma diário",
      contraindicacoes: "Gestação",
      ajustes: "Leucaférese em casos selecionados (não em LPA). Evitar transfusão de hemácias enquanto houver leucostase"
    },
    {
      droga: "Imatinibe (LMC confirmada)",
      linha: "l1",
      dose: "Conforme PCDT (dose padrão na fase crônica)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "BCR::ABL1 quantitativo a cada 3 meses no início",
      contraindicacoes: "Gestação",
      ajustes: "Prescrição pelo hematologista (PCDT de LMC do MS). Atenção a interações (rifampicina, azóis, anticonvulsivantes)"
    },
    {
      droga: "Concentrado de hemácias",
      linha: "adj",
      dose: "1 unidade e reavaliar",
      via: "IV",
      intervalo: "Conforme Hb",
      duracao: "—",
      monitorizacao: "Sinais de leucostase",
      contraindicacoes: "Leucostase não tratada (aumenta viscosidade), salvo anemia grave sintomática",
      ajustes: "Hemocomponentes irradiados e leucorreduzidos conforme protocolo do centro (candidatos a transplante, análogos de purina)"
    }
  ],
  destino: {
    agora: [
      "Suspeita de leucemia aguda: internar, contato com hematologia e regulação para centro de tratamento",
      "Neutropenia febril: antibiótico em até 1 h"
    ],
    reavaliar: [
      "Hemograma, coagulação e eletrólitos a cada 12–24 h (6/6 h se LPA ou lise)",
      "Respiratório e neurológico (leucostase)"
    ],
    alta: [
      "LMC em fase crônica ou LLC sem sintomas, sem citopenias graves e sem infecção: encaminhar à hematologia ambulatorial com prioridade"
    ],
    observacao: ["—"],
    internacao: [
      "Toda leucemia aguda suspeita",
      "UTI: leucostase, CIVD com sangramento, sepse, lise tumoral grave"
    ],
    transferencia: [
      "Para centro de onco-hematologia (adulto ou pediátrico) após estabilização: antibiótico, hemocomponentes, ATRA se LPA e hidratação já iniciados"
    ]
  },
  prescricao: {
    hospitalar: "SUSPEITA DE LEUCEMIA AGUDA — ADULTO (peso: ___ kg | SC: ___ m²)\n1. Dieta livre, alimentos cozidos; precaução para neutropênico se neutrófilos < 500/mm³.\n2. SF 0,9% 3 L/m²/dia IV (≈ 125–200 mL/h no adulto) se sem sobrecarga; meta diurese ≥ 80–100 mL/m²/h.\n3. Alopurinol 300 mg VO 1×/dia (ajustar à função renal; ver ficha sindrome-lise-tumoral).\n4. Se febre com neutropenia: culturas e antibiótico em até 1 h conforme ficha neutropenia-febril.\n5. Plaquetas 1 unidade/10 kg (ou 1 aférese) IV se < 10.000/mm³, < 20.000 com febre, ou sangramento.\n6. SUSPEITA DE PROMIELOCÍTICA (sangramento/CIVD, promielócitos): tretinoína (ATRA) 45 mg/m²/dia VO = ___ mg divididos de 12/12 h (cápsulas de 10 mg); crioprecipitado 1 unidade/10 kg se fibrinogênio < 150 mg/dL; plaquetas para manter > 30.000–50.000/mm³.\n7. Não fazer injeção IM; evitar AAS e AINE.\n8. Omeprazol 20 mg VO 1×/dia se plaquetopenia grave com risco de sangramento digestivo.\n9. Exames: hemograma, TP, TTPa, fibrinogênio, K, P, Ca, ácido úrico, creatinina, LDH de 12/12 h (6/6 h se LPA ou lise).\n10. Controles: sinais vitais de 4/4 h, SpO₂, diurese, Glasgow.\n11. Hematologia hoje; regulação para centro de referência.",
    ambulatorial: "PEDIDO DE EXAMES — SUSPEITA DE LEUCEMIA CRÔNICA\nHemograma completo com contagem diferencial manual e revisão do esfregaço; reticulócitos; LDH; ácido úrico; creatinina; TGO; TGP; ultrassonografia de abdome (baço).\nLeucocitose com desvio escalonado/basofilia/esplenomegalia: pesquisa de BCR::ABL1 por PCR quantitativo em sangue periférico.\nLinfocitose > 5.000/mm³ persistente (> 3 meses) em adulto: imunofenotipagem de sangue periférico (painel para doença linfoproliferativa crônica B).\nHD: Leucocitose/linfocitose a esclarecer (CID D72.8) — suspeita de LMC (C92.1) / LLC (C91.1).\n\nENCAMINHAMENTO: Hematologia — prioridade alta."
  },
  orientacoesRetorno: [
    "Febre de 38 °C ou mais, calafrios, sangramento que não para, manchas roxas novas, falta de ar, dor de cabeça forte ou confusão: ir ao PS imediatamente",
    "Não tomar AAS, anti-inflamatórios nem injeções no músculo",
    "Leucemia crônica (LMC ou LLC): muitas pessoas vivem bem por anos; tomar o remédio todos os dias e fazer os exames de controle é o que garante o resultado",
    "LLC: manter vacinas em dia (gripe, pneumococo, covid); evitar vacinas de vírus vivo sem orientação do hematologista",
    "Comparecer à consulta de hematologia agendada; levar todos os hemogramas antigos"
  ],
  tabelas: [
    {
      titulo: "Padrão do hemograma e o que pensar",
      colunas: ["Achado", "Pensar em", "O que fazer"],
      linhas: [
        ["Blastos no sangue periférico", "Leucemia aguda", "Hematologia hoje; internar se febre, sangramento ou leucocitose alta"],
        ["Bi ou pancitopenia sem causa", "Leucemia aguda, aplasia, mielodisplasia, B12, infiltração medular", "Hematologia com urgência"],
        ["Leucocitose com desvio escalonado, basofilia, plaquetas altas, baço grande", "LMC", "BCR::ABL1; hematologia prioritária"],
        ["Linfocitose madura persistente > 5.000/mm³ em adulto", "LLC", "Imunofenotipagem; hematologia ambulatorial"],
        ["Leucocitose neutrofílica com infecção ou corticoide", "Reação leucemoide", "Tratar a causa e repetir"],
        ["Linfócitos atípicos em jovem com febre e faringite", "Mononucleose", "Ficha mononucleose; repetir em 4–6 semanas"]
      ]
    },
    {
      titulo: "LLC — quando o hematologista trata (iwCLL 2018)",
      colunas: ["Critério de doença ativa", "Exemplo", "Observação"],
      linhas: [
        ["Falência medular progressiva", "Hb < 10 g/dL ou plaquetas < 100.000/mm³ por infiltração", "Excluir AHAI e PTI associadas"],
        ["Baço ou linfonodos volumosos ou progressivos sintomáticos", "Baço ≥ 6 cm abaixo do rebordo; linfonodos ≥ 10 cm", "—"],
        ["Linfocitose de duplicação rápida", "Aumento ≥ 50% em 2 meses ou duplicação em < 6 meses", "—"],
        ["Sintomas constitucionais", "Perda de peso ≥ 10% em 6 meses, febre, sudorese noturna, fadiga importante", "—"],
        ["Citopenias autoimunes refratárias", "AHAI, PTI", "—"]
      ],
      nota: "LLC sem critério de atividade: apenas observação (watch and wait) com hemograma periódico."
    }
  ],
  fontes: [
    "European LeukemiaNet — Diagnosis and management of AML in adults: 2022 recommendations (Blood, 2022) e de APL (Blood, 2019)",
    "iwCLL — Guidelines for diagnosis, indications for treatment, response assessment, and supportive management of CLL (Blood, 2018)",
    "European LeukemiaNet — Recommendations for treating chronic myeloid leukemia (Leukemia, 2020)",
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas da Leucemia Mieloide Crônica do Adulto (versão vigente)",
    "Ministério da Saúde/INCA — Diagnóstico precoce do câncer na criança e no adolescente (2014)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
