// Pneumonia adquirida na comunidade na criança
registrarFicha({
  id: "pneumonia-crianca",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Pneumonia adquirida na comunidade na criança",
  resumo: "Febre e tosse com taquipneia para a idade, tiragem ou achados focais na ausculta, em criança de 2 meses a 18 anos previamente hígida. Amoxicilina oral é a 1ª escolha; reconhecer sinais de gravidade e de complicação (derrame, abscesso).",
  palavrasChave: "pneumonia pac crianca pediatria taquipneia tiragem amoxicilina penicilina cristalina ampicilina ceftriaxona derrame pleural empiema azitromicina mycoplasma",
  critico: {
    tempo: "Contar FR por 1 minuto",
    texto: "Taquipneia é o sinal mais útil (OMS): < 2 meses ≥ 60 irpm; 2–11 meses ≥ 50; 1–4 anos ≥ 40. Sem sinais de gravidade → amoxicilina oral 50 mg/kg/dia e reavaliação em 48–72 h."
  },
  alarmes: [
    "Tiragem subcostal, gemência, batimento de asa de nariz, apneia",
    "SpO₂ < 92% em ar ambiente, cianose",
    "Recusa alimentar, vômitos persistentes, desidratação",
    "Sonolência, irritabilidade extrema, convulsão (sinais gerais de perigo)",
    "< 2 meses (tratar como infecção grave — internar)",
    "Dor torácica, macicez, murmúrio abolido (derrame pleural/empiema)",
    "Sem melhora após 48–72 h de antibiótico"
  ],
  condutaInicial: [
    "Contar a FR por 1 minuto com a criança calma; medir SpO₂",
    "Procurar sinais gerais de perigo e tiragem subcostal",
    "Sem sinais de gravidade: amoxicilina oral e retorno em 48–72 h",
    "Com sinais de gravidade, < 2 meses ou SpO₂ < 92%: O₂, penicilina cristalina ou ampicilina IV e internação",
    "Sibilância difusa sem febre alta: pensar em bronquiolite/asma antes de antibiótico"
  ],
  fataisExcluir: [
    "Sepse",
    "Derrame pleural complicado / empiema",
    "Pneumonia necrosante / abscesso",
    "Insuficiência respiratória",
    "Corpo estranho aspirado (pneumonia recorrente no mesmo lobo)"
  ],
  proximaDecisao: "Reavaliar em 48–72 h: melhora → completar o antibiótico. Sem melhora → RX de tórax (derrame, abscesso), checar adesão e dose; considerar amoxicilina-clavulanato, macrolídeo (atípicos em ≥ 5 anos) ou internação.",
  clinica: {
    anamnese: [
      "Febre, tosse, dificuldade para respirar, dor torácica ou abdominal",
      "Tempo de evolução, aceitação alimentar, diurese",
      "Vacinação (pneumocócica, Hib, coqueluche, influenza, sarampo)",
      "Uso recente de antibiótico, internações, doenças crônicas (cardiopatia, anemia falciforme, imunodeficiência)",
      "Contato com TB ou com tosse prolongada; engasgo prévio"
    ],
    exameFisico: [
      "FR em 1 minuto, SpO₂, FC, temperatura",
      "Tiragem subcostal, gemência, batimento de asa nasal",
      "Ausculta: estertores crepitantes, sopro tubário, murmúrio diminuído; percussão (macicez)",
      "Hidratação, perfusão, estado de consciência",
      "Sibilância (sugere viral/atípico)"
    ],
    diferenciais: [
      { dx: "Bronquiolite viral", pista: "< 2 anos, sibilos e crepitações difusas, pródromo de coriza" },
      { dx: "Asma/sibilância transitória", pista: "Sibilância difusa, resposta ao broncodilatador, sem febre alta" },
      { dx: "Pneumonia atípica (Mycoplasma)", pista: "≥ 5 anos, início gradual, tosse seca, sintomas extrapulmonares" },
      { dx: "Tuberculose", pista: "Tosse e febre > 2 semanas, contato, perda de peso" },
      { dx: "Corpo estranho", pista: "Engasgo, sibilo localizado, pneumonia recorrente no mesmo local" }
    ],
    gravidade: [
      "Taquipneia (OMS): < 2 meses ≥ 60 irpm · 2–11 meses ≥ 50 irpm · 1–4 anos ≥ 40 irpm",
      "Pneumonia (sem gravidade): tosse ou dificuldade respiratória + taquipneia, sem sinais de perigo → amoxicilina oral",
      "Pneumonia grave: tiragem subcostal, SpO₂ < 92%, sinais gerais de perigo (não consegue beber, vomita tudo, convulsão, letargia), gemência → internação",
      "Fatores de risco de evolução ruim: < 6 meses, desnutrição, comorbidade, falta de acesso a retorno"
    ]
  },
  exames: [
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA (e perfil se dúvida).",
      porQue: "Não é necessária no caso ambulatorial típico. Indicada na pneumonia grave/internação, falha terapêutica em 48–72 h, suspeita de derrame/complicação, dúvida diagnóstica.",
      esperar: "Consolidação lobar/segmentar, infiltrado intersticial, derrame.",
      interpretacao: "Derrame pleural ou cavitação → internação e avaliação de drenagem.",
      limitacoes: "Não diferencia bem etiologia viral de bacteriana."
    },
    {
      nome: "Exames na internação",
      pedido: "Hemograma, PCR, hemocultura (antes do antibiótico), ureia, creatinina, sódio, potássio. Gasometria se desconforto importante.",
      porQue: "Gravidade e complicações; hemocultura positiva orienta o antibiótico.",
      esperar: "Leucocitose com neutrofilia sugere bacteriana, mas não confirma.",
      interpretacao: "Hiponatremia é comum (SIADH): cuidado com a hidratação.",
      limitacoes: "Hemograma e PCR não são necessários no ambulatório."
    },
    {
      nome: "USG de tórax / toracocentese",
      pedido: "Ultrassonografia de tórax para avaliar derrame pleural. Se derrame significativo: toracocentese com pH, glicose, LDH, proteínas, citologia, Gram, cultura e pesquisa de BAAR/TRM-TB conforme clínica.",
      porQue: "Diferenciar derrame simples de complicado/empiema.",
      esperar: "—",
      interpretacao: "Pus, Gram positivo, pH < 7,2 ou glicose baixa → drenagem (cirurgia pediátrica).",
      limitacoes: "Depende de serviço hospitalar."
    },
    {
      nome: "Pesquisa viral e de atípicos",
      pedido: "Painel viral (RT-PCR) de swab nasofaríngeo se internado; PCR para Mycoplasma se disponível e suspeita.",
      porQue: "Vigilância (SRAG) e uso racional de antibiótico.",
      esperar: "—",
      interpretacao: "Vírus detectado não exclui coinfecção bacteriana.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Amoxicilina",
      linha: "l1",
      dose: "50 mg/kg/dia (adolescente com peso de adulto: 500 mg 8/8 h ou 875 mg 12/12 h). Dose alta 80–90 mg/kg/dia (máx 4 g/dia) em regiões com pneumococo de sensibilidade reduzida ou falha",
      via: "VO",
      intervalo: "8/8 h ou 12/12 h",
      duracao: "5–7 dias (SBP: 7 dias; ensaios recentes sustentam 5 dias nos casos não graves com boa resposta)",
      monitorizacao: "Febre e FR devem melhorar em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Suspensão 250 mg/5 mL ou 400 mg/5 mL. Alergia não grave: cefuroxima. Alergia grave: macrolídeo (cobertura menor de pneumococo) ou levofloxacino em adolescentes, com especialista"
    },
    {
      droga: "Amoxicilina + clavulanato",
      linha: "alt",
      dose: "50 mg/kg/dia de amoxicilina (ou 80–90 mg/kg/dia com a formulação ES)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7 dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Falha da amoxicilina, pós-influenza/sarampo (cobrir S. aureus), não vacinados para Hib"
    },
    {
      droga: "Azitromicina (suspeita de atípico — em geral ≥ 5 anos)",
      linha: "adj",
      dose: "10 mg/kg no 1º dia (máx 500 mg), depois 5 mg/kg/dia (máx 250 mg)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "5 dias",
      monitorizacao: "—",
      contraindicacoes: "QT longo",
      ajustes: "Associar à amoxicilina se dúvida entre bacteriana típica e atípica. Também tratamento da coqueluche"
    },
    {
      droga: "Penicilina G cristalina (internação)",
      linha: "l1",
      dose: "150.000–200.000 UI/kg/dia (máx 24 milhões UI/dia)",
      via: "IV, diluída em SF 0,9% ou SG 5%, infundir em 30–60 min",
      intervalo: "6/6 h (ou 4/4 h)",
      duracao: "Até 24–48 h afebril e melhora, depois completar 7–10 dias com amoxicilina VO",
      monitorizacao: "Febre, FR, SpO₂, sódio e potássio (a penicilina potássica contém potássio)",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Alternativa: ampicilina 50 mg/kg/dose IV 6/6 h (máx 2 g/dose)"
    },
    {
      droga: "Ceftriaxona (grave, não vacinado, falha ou complicada)",
      linha: "alt",
      dose: "50–100 mg/kg/dia (máx 2 g/dia; até 4 g/dia em formas graves com 2 doses)",
      via: "IV (diluir e infundir em 30 min) ou IM",
      intervalo: "1 vez ao dia ou 12/12 h",
      duracao: "Conforme evolução; transição para VO",
      monitorizacao: "Resposta clínica",
      contraindicacoes: "RN com hiperbilirrubinemia ou uso de soluções com cálcio IV (neonatos)",
      ajustes: "Pneumonia complicada/necrosante ou suspeita de S. aureus: associar oxacilina 200 mg/kg/dia IV 6/6 h (ou clindamicina/vancomicina conforme gravidade e perfil local). < 2 meses: ampicilina + cefotaxima ou gentamicina (esquema neonatal)"
    }
  ],
  destino: {
    agora: [
      "Sem gravidade: amoxicilina, antitérmico, orientação e retorno marcado",
      "Grave: O₂, acesso, antibiótico IV, regulação para internação"
    ],
    reavaliar: [
      "48–72 h após início do antibiótico (todos)",
      "Falha: RX de tórax, revisar diagnóstico, adesão e dose"
    ],
    alta: [
      "Ambulatorial: SpO₂ ≥ 92%, sem tiragem subcostal, alimentando-se, cuidador confiável",
      "Pós-internação: afebril 24–48 h, sem O₂, aceitando VO"
    ],
    observacao: [
      "Desconforto leve ou SpO₂ limítrofe: observar algumas horas, broncodilatador se sibilância e reavaliar"
    ],
    internacao: [
      "< 2 meses (2–6 meses: baixo limiar)",
      "Tiragem subcostal, SpO₂ < 92%, sinais gerais de perigo, desidratação",
      "Derrame pleural, abscesso, falha do tratamento oral",
      "Comorbidade grave ou impossibilidade de seguimento",
      "UTI: insuficiência respiratória, choque, apneias"
    ],
    transferencia: [
      "UBS → hospital com pediatria (SAMU/regulação) mantendo O₂; dar a 1ª dose de antibiótico (ex.: ceftriaxona IM 50 mg/kg) se a remoção vai demorar"
    ]
  },
  prescricao: {
    ambulatorial: "PNEUMONIA SEM GRAVIDADE — CRIANÇA (exemplo 15 kg)\nUSO ORAL\n1. Amoxicilina 400 mg/5 mL suspensão ------------- 1 frasco de 150 mL\n   Dar 4,7 mL (375 mg = 25 mg/kg) de 12 em 12 horas por 7 dias.\n   (50 mg/kg/dia; ou 250 mg/5 mL: 5 mL de 8 em 8 horas.)\n2. Dipirona 500 mg/mL gotas (25 mg/gota) -------- 1 frasco\n   Dar 6 a 9 gotas (10–15 mg/kg) de 6 em 6 horas se febre ou dor.\n   ou Paracetamol 200 mg/mL gotas — 15 gotas (1 gota/kg) de 6 em 6 horas se febre.\n3. Soro fisiológico 0,9% — 2 a 5 mL em cada narina antes das mamadas/refeições.\n\nSE SUSPEITA DE ATÍPICO (≥ 5 anos, exemplo 20 kg) — acrescentar ou substituir\n4. Azitromicina 200 mg/5 mL suspensão ------------ 1 frasco\n   1º dia: 5 mL (200 mg = 10 mg/kg); 2º ao 5º dia: 2,5 mL (100 mg = 5 mg/kg) 1 vez ao dia.\n\nRETORNO OBRIGATÓRIO EM 48–72 HORAS.",
    hospitalar: "PNEUMONIA GRAVE — CRIANÇA INTERNADA (peso: ___ kg)\n1. Dieta oral conforme aceitação (fracionada); SNG se desconforto impede a alimentação.\n2. Hidratação venosa só se não aceitar VO: soro de manutenção isotônico (SF 0,9% + SG 5% ou solução balanceada com glicose) pela regra de Holliday-Segar; restringir a 2/3 se hiponatremia (SIADH).\n3. O₂ por cateter nasal (até 2 L/min no lactente) ou máscara para SpO₂ ≥ 92–94%.\n4. Penicilina G cristalina 200.000 UI/kg/dia IV, dividida de 6/6 h (= 50.000 UI/kg/dose), diluída em 50 mL de SF 0,9% e infundida em 30–60 min.\n   ou Ampicilina 50 mg/kg/dose IV de 6/6 h (máx 2 g/dose), diluída em SF 0,9% e infundida em 15–30 min.\n   ou (grave, não vacinado, complicada) Ceftriaxona 50–100 mg/kg/dia IV 1×/dia ou dividida de 12/12 h (máx 4 g/dia), diluída em SF 0,9% e infundida em 30 min.\n5. Se suspeita de atípico: azitromicina 10 mg/kg VO 1×/dia no D1 e 5 mg/kg D2–D5.\n6. Dipirona 15 mg/kg/dose IV de 6/6 h se febre ou dor (diluir em SF 0,9%).\n7. Cabeceira elevada; aspiração de vias aéreas superiores se necessário.\n8. Controles: FR, FC, SpO₂, temperatura de 4/4 h; balanço hídrico; peso diário; sódio e potássio conforme hidratação.\n9. Transição para amoxicilina VO 50 mg/kg/dia quando afebril 24–48 h e aceitando VO; total de 7–10 dias (complicada: mais longo, conforme especialista)."
  },
  orientacoesRetorno: [
    "Dar o antibiótico no horário certo até o fim; a febre deve melhorar em 2–3 dias",
    "Oferecer líquidos e alimentos em pequenas quantidades, várias vezes; limpar o nariz com soro",
    "Voltar imediatamente se: respiração muito rápida, barriga ou costelas afundando ao respirar, gemido, lábios roxos, não consegue beber ou mamar, vomita tudo, muito sonolenta ou com convulsão",
    "Retorno obrigatório em 48–72 h, mesmo se estiver melhor",
    "Manter vacinas em dia (pneumocócica, Hib, influenza, sarampo, coqueluche)"
  ],
  tabelas: [
    {
      titulo: "Taquipneia por idade (OMS)",
      colunas: ["Idade", "FR que indica taquipneia"],
      linhas: [
        ["< 2 meses", "≥ 60 irpm"],
        ["2–11 meses", "≥ 50 irpm"],
        ["1–4 anos", "≥ 40 irpm"]
      ],
      nota: "Contar por 1 minuto inteiro, com a criança calma e sem febre alta se possível."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h de amoxicilina", "RX de tórax; revisar dose e adesão; amoxicilina 80–90 mg/kg/dia (máx. 4 g/dia) ou amoxicilina-clavulanato", "Procurar derrame, empiema, abscesso"],
        ["Suspeita de S. aureus (pós-influenza/sarampo, pneumatoceles, derrame rápido)", "Internar: oxacilina IV (ou ceftriaxona + oxacilina); MRSA: vancomicina ou clindamicina conforme cultura", "Hemocultura e cultura do líquido pleural"],
        ["Suspeita de atípico (≥ 5 anos, sem resposta a betalactâmico)", "Associar azitromicina 10 mg/kg no 1º dia (máx. 500 mg), depois 5 mg/kg/dia (máx. 250 mg)", "—"],
        ["Alergia à penicilina", "Não grave: cefalosporina (ex.: ceftriaxona no internado); grave: azitromicina (atípico) ou clindamicina/levofloxacino com especialista", "Macrolídeo isolado cobre mal pneumococo resistente"],
        ["Falha do oral, grave ou sem vacinação para Hib", "Internar: penicilina cristalina ou ceftriaxona IV", "Ver doses na tabela de tratamento"]
      ]
    }
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Documento científico: Pneumonias adquiridas na comunidade não complicadas (2022) e complicadas — atualização (2024)",
    "OMS — Revised WHO classification and treatment of pneumonia in children at health facilities (2014) e Pocket book of hospital care for children (2013)",
    "Ministério da Saúde/OPAS — AIDPI Criança: 2 meses a 5 anos (2017)",
    "Bielicki JA et al. — CAP-IT trial, JAMA (2021); Williams DJ et al. — SCOUT-CAP trial, JAMA Pediatrics (2022)"
  ],
  revisao: "2026-10-25",
  versao: "1.1"
});
