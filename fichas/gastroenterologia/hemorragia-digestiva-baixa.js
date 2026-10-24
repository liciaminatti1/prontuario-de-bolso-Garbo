// Hemorragia digestiva baixa
registrarFicha({
  id: "hemorragia-digestiva-baixa",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hemorragia digestiva baixa",
  resumo: "Hematoquezia (sangue vivo ou vinhoso pelo reto) de origem colônica ou anorretal. Estratificar (escore de Oakland, índice de choque), excluir fonte alta se instável e programar colonoscopia.",
  palavrasChave: "hdb hemorragia digestiva baixa hematoquezia enterorragia sangue vivo reto diverticulo doenca diverticular angiodisplasia colite isquemica oakland colonoscopia angiotomografia hemorroida",
  critico: {
    tempo: "Instável: angio-TC (ou EDA)",
    texto: "Hematoquezia com instabilidade: até 15% vem do tubo digestivo alto → considerar EDA. Índice de choque > 1 após ressuscitação: angiotomografia antes da colonoscopia."
  },
  alarmes: [
    "Índice de choque (FC/PAS) > 1, PAS < 90 mmHg, síncope",
    "Sangramento contínuo volumoso ou queda de Hb ≥ 2 g/dL",
    "Anticoagulante ou antiagregante em uso",
    "Ureia elevada desproporcional (sugere fonte alta)",
    "Dor abdominal intensa (colite isquêmica, isquemia mesentérica)",
    "Idoso com comorbidade cardiovascular"
  ],
  condutaInicial: [
    "Monitor, 2 acessos calibrosos, tipagem e prova cruzada",
    "Hemograma, ureia, creatinina, TP/INR, TTPa, lactato",
    "Cristaloide em alíquotas de 500 mL; concentrado de hemácias se Hb < 7 g/dL (< 8 se doença cardiovascular)",
    "Toque retal e inspeção anal (hemorroida, fissura, tumor)",
    "Instável ou ureia alta → pensar em fonte alta: IBP IV e EDA",
    "Calcular Oakland: ≤ 8 sem outros riscos → alta com colonoscopia ambulatorial",
    "Suspender anticoagulante; reverter se sangramento grave (ver ficha coagulopatias-urgencia)"
  ],
  fataisExcluir: [
    "Hemorragia digestiva alta volumosa (trânsito rápido)",
    "Isquemia mesentérica aguda",
    "Fístula aortoentérica",
    "Neoplasia colorretal (sangramento oculto ou recorrente)",
    "Choque hemorrágico em anticoagulado"
  ],
  proximaDecisao: "Estável e com sangramento cessado → colonoscopia na internação, após preparo, ou ambulatorial se Oakland ≤ 8. Instável ou sangramento contínuo → angiotomografia → embolização se extravasamento; EDA se suspeita de fonte alta. Sem fonte em colonoscopia e EDA → investigar intestino delgado (cápsula, enteroscopia).",
  clinica: {
    anamnese: [
      "Cor do sangue (vivo, vinhoso, misturado às fezes), volume, duração",
      "Dor abdominal, alteração do hábito intestinal, perda de peso",
      "Radioterapia pélvica, polipectomia recente (sangramento pós-polipectomia até ~2 semanas)",
      "Anticoagulantes, antiagregantes, AINE",
      "Doença diverticular, DII, hemorroidas, sangramento prévio",
      "Doença vascular (colite isquêmica), estenose aórtica (angiodisplasia), prótese de aorta"
    ],
    exameFisico: [
      "PA, FC, perfusão, índice de choque",
      "Abdome: dor, massa, peritonite",
      "Inspeção anal e toque retal (sangue, massa, hemorroida, fissura)"
    ],
    diferenciais: [
      { dx: "Doença diverticular", pista: "Idoso, sangramento indolor e volumoso, cessa espontaneamente na maioria" },
      { dx: "Angiodisplasia", pista: "Idoso, sangramento recorrente, DRC, estenose aórtica" },
      { dx: "Colite isquêmica", pista: "Dor abdominal em cólica seguida de diarreia com sangue; vasculopata" },
      { dx: "Hemorroida / fissura", pista: "Sangue vivo no papel, gotejamento, dor anal na evacuação" },
      { dx: "Neoplasia colorretal", pista: "> 45 anos, perda de peso, anemia ferropriva, mudança do hábito" },
      { dx: "Colite infecciosa / DII", pista: "Diarreia com sangue, febre, tenesmo" },
      { dx: "Hemorragia digestiva alta", pista: "Instabilidade, ureia alta, hepatopatia, uso de AINE" }
    ],
    gravidade: [
      "Oakland ≤ 8: baixo risco (alta segura com investigação ambulatorial — BSG 2019)",
      "Oakland > 8: internar",
      "Índice de choque > 1: instável — angiotomografia",
      "Sangramento maior: transfusão, queda de Hb ≥ 2 g/dL ou instabilidade"
    ]
  },
  exames: [
    {
      nome: "Laboratório inicial",
      pedido: "Tipagem ABO/Rh e prova cruzada. Hemograma, ureia, creatinina, sódio, potássio, TP/INR, TTPa, lactato.",
      porQue: "Gravidade, transfusão, escore de Oakland, fonte alta.",
      esperar: "Hb inicial pode subestimar a perda.",
      interpretacao: "Ureia/creatinina muito elevada sugere sangramento alto.",
      limitacoes: "—"
    },
    {
      nome: "Angiotomografia de abdome",
      pedido: "Angiotomografia de abdome e pelve (fases sem contraste, arterial e portal) — hemorragia digestiva baixa ativa com instabilidade.",
      porQue: "Localiza o sangramento ativo e guia embolização.",
      esperar: "Fazer com o paciente sangrando (sangramento intermitente gera exame negativo).",
      interpretacao: "Extravasamento de contraste → angiografia com embolização em até 60 min se possível; ou cirurgia.",
      limitacoes: "Contraste iodado (risco renal aceitável na hemorragia grave)."
    },
    {
      nome: "Colonoscopia",
      pedido: "Colonoscopia na internação, após preparo intestinal com polietilenoglicol — hemorragia digestiva baixa.",
      porQue: "Diagnóstico e terapêutica (clipes, coagulação).",
      esperar: "Melhor rendimento com preparo adequado.",
      interpretacao: "Colonoscopia urgente (< 24 h) não reduziu ressangramento nem mortalidade em ensaios (ACG 2023).",
      limitacoes: "Sem preparo, a visualização é ruim."
    },
    {
      nome: "EDA",
      pedido: "Endoscopia digestiva alta — hematoquezia com instabilidade / suspeita de fonte alta.",
      porQue: "Excluir fonte alta.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Concentrado de hemácias",
      linha: "l1",
      dose: "1 unidade por vez",
      via: "IV",
      intervalo: "Reavaliar Hb após cada unidade",
      duracao: "—",
      monitorizacao: "Hb, sobrecarga volêmica",
      contraindicacoes: "—",
      ajustes: "Gatilho Hb < 7 g/dL; doença cardiovascular Hb < 8 g/dL (BSG 2019, ACG 2023)"
    },
    {
      droga: "Polietilenoglicol (preparo de cólon)",
      linha: "l1",
      dose: "4–6 L de solução",
      via: "VO ou SNG",
      intervalo: "Em 3–4 h, até efluente claro",
      duracao: "Antes da colonoscopia",
      monitorizacao: "Volemia, eletrólitos, broncoaspiração",
      contraindicacoes: "Obstrução, perfuração, rebaixamento sem proteção de via aérea",
      ajustes: "Metoclopramida 10 mg IV antes melhora tolerância. Manitol é alternativa conforme protocolo local"
    },
    {
      droga: "Omeprazol (se suspeita de fonte alta)",
      linha: "adj",
      dose: "80 mg",
      via: "IV",
      intervalo: "Dose única até EDA; depois conforme achado",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ver ficha hemorragia-digestiva-alta"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício e com mais trombose em sangramento digestivo (HALT-IT 2020)",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Ressuscitação, estratificação (Oakland, índice de choque), suspender anticoagulante"],
    reavaliar: ["Sinais vitais de 1/1 h; Hb de 6/6 h nas primeiras 24 h", "Novo sangramento volumoso → angiotomografia"],
    alta: [
      "Oakland ≤ 8, estável, Hb estável, sem anticoagulação de alto risco",
      "Colonoscopia ambulatorial em até 2 semanas (ou conforme causa)",
      "Hemorroida/fissura evidente sem anemia: tratamento clínico (ver ficha hemorroidas)"
    ],
    observacao: ["Sangramento autolimitado com Oakland pouco acima do limite: observar 12–24 h com Hb seriada"],
    internacao: ["Oakland > 8, transfusão, anticoagulado com sangramento significativo", "UTI: instabilidade persistente, transfusão maciça"],
    transferencia: ["Sem endoscopia, tomografia ou radiologia intervencionista: regulação após ressuscitação"]
  },
  prescricao: {
    hospitalar: "HEMORRAGIA DIGESTIVA BAIXA — ADULTO (peso: ___ kg)\n1. Dieta líquida sem resíduos (zero se instável ou se colonoscopia/EDA programada).\n2. Monitor, oximetria, 2 acessos venosos calibrosos.\n3. Ringer lactato ou SF 0,9% 500 mL IV em 15–30 min se hipotensão; reavaliar.\n4. Reservar 2 concentrados de hemácias; transfundir 1 unidade se Hb < 7 g/dL (< 8 se cardiopata).\n5. Suspender anticoagulante, antiagregante (exceto AAS de prevenção secundária, discutir) e AINE.\n6. Se instável ou ureia alta: omeprazol 80 mg IV e solicitar EDA.\n7. Preparo de cólon (paciente estável, sangramento cessado ou lento): metoclopramida 10 mg IV 30 min antes; solução de polietilenoglicol 4 L VO em 3–4 h (ou por SNG), até efluente claro.\n8. Profilaxia de TEV mecânica até controle do sangramento.\n9. Controles: PA, FC de 1/1 h; Hb de 6/6 h; comunicar novo sangramento volumoso, PAS < 90 ou FC > 110.",
    ambulatorial: "ALTA — BAIXO RISCO (Oakland ≤ 8)\nSOLICITAÇÃO\n1. Colonoscopia ambulatorial prioritária — hematoquezia autolimitada.\n2. Hemograma em 7 dias.\n\nUSO ORAL (se hemorroida/fissura associada)\n3. Psyllium 5 g (ou outra fibra) ----------------- 1 frasco\n   Diluir 1 medida em 1 copo de água 1 a 2 vezes ao dia.\nEvitar anti-inflamatórios."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se: sangramento volumoso, coágulos, tontura, desmaio, palidez, falta de ar ou dor de barriga forte",
    "Não usar anti-inflamatórios; anticoagulante só retomar quando o médico orientar",
    "Comer fibras e beber água para não fazer força ao evacuar",
    "Fazer a colonoscopia agendada; é ela que mostra a causa",
    "Consulta na UBS em até 1 semana com o hemograma"
  ],
  tabelas: [
    {
      titulo: "Escore de Oakland (alta segura se ≤ 8)",
      colunas: ["Variável", "Faixas", "Pontos"],
      linhas: [
        ["Idade (anos)", "< 40 / 40–69 / ≥ 70", "0 / 1 / 2"],
        ["Sexo", "Feminino / Masculino", "0 / 1"],
        ["Internação prévia por HDB", "Não / Sim", "0 / 1"],
        ["Toque retal com sangue", "Não / Sim", "0 / 1"],
        ["FC (bpm)", "< 70 / 70–89 / 90–109 / ≥ 110", "0 / 1 / 2 / 3"],
        ["PAS (mmHg)", "50–89 / 90–119 / 120–129 / 130–159 / ≥ 160", "5 / 4 / 3 / 2 / 0"],
        ["Hb (g/dL)", "3,6–6,9 / 7–8,9 / 9–10,9 / 11–12,9 / 13–15,9 / ≥ 16", "22 / 17 / 13 / 8 / 4 / 0"]
      ],
      nota: "BSG 2019: Oakland ≤ 8 sem outras indicações de internação → alta e investigação ambulatorial."
    }
  ],
  fontes: [
    "ACG — Clinical Guideline: Management of Acute Lower Gastrointestinal Bleeding (Sengupta et al., 2023)",
    "British Society of Gastroenterology — Diagnosis and management of acute lower gastrointestinal bleeding (Oakland et al., Gut 2019)",
    "ESGE — Diagnosis and management of acute lower gastrointestinal bleeding (Triantafyllou et al., 2021)",
    "HALT-IT Trial Collaborators (Lancet, 2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
