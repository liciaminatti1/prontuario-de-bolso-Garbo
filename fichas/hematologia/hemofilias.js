// Hemofilias e deficiências de fatores: TP/TTPa alargado, teste de mistura, sangramento
registrarFicha({
  id: "hemofilias",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Hemofilias e coagulograma alterado: TP/TTPa alargado e sangramento no hemofílico",
  resumo: "Hemostasia secundária. Conduta no sangramento do paciente com hemofilia A (fator VIII) ou B (fator IX) — reposição imediata do fator — e roteiro para investigar TP ou TTPa alargado (teste de mistura, deficiências de fatores, inibidores, hemofilia adquirida). Para anticoagulantes e CIVD, ver ficha coagulopatias-urgencia.",
  palavrasChave: "hemofilia a b fator viii fator ix deficiencia de fatores coagulopatia hereditaria hemartrose hematoma iliopsoas ttpa alargado tp alargado teste de mistura inibidor bethesda hemofilia adquirida agente de bypass ccpa feiba fator vii ativado recombinante novoseven emicizumabe hemlibra desmopressina acido tranexamico hemocentro fator xi fator vii fibrinogenio",
  critico: {
    tempo: "Fator antes do exame",
    texto: "Hemofílico com trauma de crânio, sangramento grave, de cabeça/pescoço, abdome ou iliopsoas: infundir o fator na dose de 80–100% (B: 60–80%) ANTES da tomografia e dos exames. Use o fator que o paciente traz e ligue para o hemocentro."
  },
  alarmes: [
    "Trauma de crânio (mesmo leve), cefaleia, vômitos, sonolência ou déficit (hemorragia intracraniana)",
    "Sangramento em pescoço, língua ou garganta (risco de obstrução de via aérea)",
    "Dor na virilha ou abdome inferior com flexão do quadril e parestesia na coxa (hematoma de iliopsoas)",
    "Hematoma em antebraço ou panturrilha com dor intensa ou parestesia (síndrome compartimental)",
    "Hematêmese, melena, hematúria com cólica, dor abdominal, sangramento com instabilidade",
    "Sangramento que não melhora com a dose habitual de fator (suspeitar de inibidor)",
    "Idoso ou puérpera sem história prévia com equimoses extensas e TTPa isolado alargado (hemofilia adquirida: urgência)"
  ],
  condutaInicial: [
    "Perguntar: tipo e gravidade da hemofilia, peso, uso de profilaxia (fator ou emicizumabe), última dose, presença de inibidor; pedir a carteira do hemocentro",
    "Infundir o fator imediatamente pelo tipo de sangramento (tabela), sem esperar exames; preferir o produto que o paciente já usa",
    "Fator VIII (hemofilia A): UI = peso (kg) × nível desejado (%) × 0,5. Fator IX (hemofilia B): UI = peso (kg) × nível desejado (%) × 1 (recombinante pode exigir mais; conferir bula)",
    "Contatar o hemocentro de referência (plantão de coagulopatias) para dose, manutenção e fornecimento",
    "Analgesia com paracetamol, dipirona ou opioide; NUNCA AAS ou AINE não seletivo; NÃO aplicar injeção IM nem puncionar artéria",
    "Hemartrose ou hematoma muscular: repouso, gelo 15–20 min a cada 2 h, elevação, imobilização provisória",
    "Sangramento de mucosa (nariz, boca, menstruação, pós-extração): ácido tranexâmico associado; NÃO usar na hematúria",
    "Sem resposta clínica à dose adequada: dosar fator e inibidor (Bethesda) e usar agente de bypass (hemocentro)",
    "Paciente sem diagnóstico com TP ou TTPa alargado: repetir com coleta correta e fazer teste de mistura"
  ],
  fataisExcluir: [
    "Hemorragia intracraniana",
    "Sangramento de via aérea (pescoço, língua, faringe)",
    "Hematoma de iliopsoas com choque",
    "Síndrome compartimental",
    "Hemofilia adquirida (anticorpo contra fator VIII) em idoso ou puérpera",
    "CIVD, hepatopatia grave ou intoxicação por cumarínico (raticida) como causa do coagulograma alterado"
  ],
  proximaDecisao: "Sangramento grave → manter nível-alvo com doses a cada 8–12 h (FVIII) ou 12–24 h (FIX) por 7–14 dias, internado, com dosagem do fator. Sangramento leve (hemartrose precoce) que melhora com 1 dose → alta com plano do hemocentro. Teste de mistura que corrige → dosar fatores VIII, IX, XI (TTPa) ou VII (TP). Não corrige → anticoagulante lúpico, heparina ou inibidor de fator (hemofilia adquirida: hematologia urgente).",
  clinica: {
    anamnese: [
      "Hemofilia conhecida: tipo, gravidade, inibidor, profilaxia, articulações-alvo, última dose de fator",
      "Sangramento articular, muscular ou tardio após trauma, circuncisão, extração dentária ou cirurgia",
      "História familiar no lado materno (homens afetados: herança ligada ao X); mulheres portadoras podem sangrar",
      "Sem diagnóstico: medicamentos (varfarina, DOAC, heparina), raticida, hepatopatia, desnutrição, antibióticos prolongados, má absorção (vitamina K)",
      "Idoso, puerpério, doença autoimune ou câncer com sangramento novo e extenso (hemofilia adquirida)"
    ],
    exameFisico: [
      "Sinais vitais e perfusão",
      "Articulação: dor, calor, edema, limitação (hemartrose); flexão antálgica do quadril (iliopsoas)",
      "Pulsos, sensibilidade e dor ao estiramento em compartimentos musculares",
      "Exame neurológico e Glasgow em todo trauma de crânio",
      "Equimoses extensas, sangramento de mucosa e locais de punção"
    ],
    diferenciais: [
      { dx: "Hemofilia A ou B hereditária", pista: "Homem, TTPa alargado isolado, corrige na mistura, FVIII ou FIX baixo" },
      { dx: "Doença de von Willebrand (tipo 3 ou 2N)", pista: "FVIII baixo com FvW baixo ou ligação ao FVIII alterada (ficha hemostasia-primaria)" },
      { dx: "Deficiência de fator XI", pista: "TTPa alargado, sangramento variável, principalmente pós-operatório" },
      { dx: "Deficiência de fator XII, pré-calicreína", pista: "TTPa muito alargado SEM sangramento: não tratar" },
      { dx: "Deficiência de fator VII ou de vitamina K", pista: "TP alargado isolado (vitamina K: corrige com vitamina K)" },
      { dx: "Hemofilia adquirida", pista: "TTPa isolado que não corrige após incubação, equimoses extensas, idoso ou puerpério" },
      { dx: "Anticoagulante lúpico", pista: "TTPa que não corrige, sem sangramento, com tromboses ou abortos" },
      { dx: "CIVD / hepatopatia", pista: "TP e TTPa alargados, fibrinogênio baixo, plaquetopenia (ficha coagulopatias-urgencia)" }
    ],
    gravidade: [
      "Hemofilia grave: fator < 1% (sangramento espontâneo, hemartroses)",
      "Moderada: 1–5% (sangramento com trauma pequeno, às vezes espontâneo)",
      "Leve: > 5% a < 40% (sangramento em cirurgia ou trauma maior)",
      "Sangramento com risco de vida: intracraniano, via aérea, gastrointestinal, iliopsoas, trauma grave"
    ]
  },
  exames: [
    {
      nome: "Coagulograma",
      pedido: "Hemograma com plaquetas; TP/INR; TTPa; fibrinogênio; tempo de trombina (se disponível). Coleta em tubo de citrato completo, sem garrote prolongado e sem coletar de acesso com heparina.",
      porQue: "Localizar o defeito na cascata.",
      esperar: "Hemofilia: TTPa alargado, TP normal, plaquetas normais.",
      interpretacao: "TTPa isolado: VIII, IX, XI, XII, FvW, heparina, anticoagulante lúpico. TP isolado: VII, vitamina K, varfarina, hepatopatia inicial. Ambos: X, V, II, fibrinogênio, CIVD, hepatopatia, varfarina em dose alta, DOAC.",
      limitacoes: "Hemofilia leve pode ter TTPa normal. Em uso de emicizumabe o TTPa fica normal e não reflete a hemostasia (dosagem específica no hemocentro)."
    },
    {
      nome: "Teste de mistura",
      pedido: "Teste de mistura do TTPa (ou TP) com plasma normal 1:1, leitura imediata e após incubação de 2 h a 37 °C.",
      porQue: "Separar deficiência de fator de inibidor.",
      esperar: "Deficiência: corrige. Inibidor: não corrige.",
      interpretacao: "Corrige → dosar fatores. Não corrige imediatamente → anticoagulante lúpico ou heparina. Corrige no início e prolonga após incubação → inibidor tempo-dependente de FVIII (hemofilia adquirida).",
      limitacoes: "Critério de correção varia por laboratório."
    },
    {
      nome: "Dosagem de fatores e inibidor",
      pedido: "Dosagem de fator VIII, fator IX e fator XI (TTPa alargado) ou fator VII (TP alargado); fator de von Willebrand antígeno e atividade; pesquisa e titulação de inibidor (método Bethesda) se hemofílico sem resposta ou suspeita de hemofilia adquirida.",
      porQue: "Confirmar diagnóstico e gravidade; detectar inibidor.",
      esperar: "—",
      interpretacao: "Inibidor ≥ 0,6 UB/mL = positivo; ≥ 5 UB/mL = alta resposta (fator não funciona; usar agente de bypass).",
      limitacoes: "Geralmente feito no hemocentro."
    },
    {
      nome: "Imagem conforme sangramento",
      pedido: "TC de crânio sem contraste (trauma de crânio ou sintomas neurológicos) APÓS a infusão do fator. Ultrassonografia de partes moles ou TC para iliopsoas e hematomas profundos.",
      porQue: "Localizar e dimensionar o sangramento.",
      esperar: "—",
      interpretacao: "Hematoma de iliopsoas confirma necessidade de internação e nível alto de fator.",
      limitacoes: "Nunca atrasar o fator para fazer a imagem."
    }
  ],
  tratamento: [
    {
      droga: "Concentrado de fator VIII (hemofilia A)",
      linha: "l1",
      dose: "UI = peso (kg) × nível desejado (%) × 0,5 (cada 1 UI/kg eleva cerca de 2%)",
      via: "IV lenta (conforme bula, em geral 3–5 min)",
      intervalo: "8–12 h (meia-vida ~8–12 h; produtos de meia-vida estendida: conforme hemocentro)",
      duracao: "Conforme sangramento (tabela): 1–2 dias (hemartrose) a 14–21 dias (SNC)",
      monitorizacao: "Resposta clínica; dosagem de FVIII em sangramento grave e cirurgia; inibidor se resposta ruim",
      contraindicacoes: "Inibidor de alta resposta (usar bypass)",
      ajustes: "Mesma fórmula em adulto e criança (dose por kg). Arredondar para o frasco inteiro. Fornecido pelo hemocentro (Programa de Coagulopatias Hereditárias do MS)"
    },
    {
      droga: "Concentrado de fator IX (hemofilia B)",
      linha: "l1",
      dose: "UI = peso (kg) × nível desejado (%) × 1 (cada 1 UI/kg eleva cerca de 1%; recombinante pode render menos)",
      via: "IV lenta",
      intervalo: "12–24 h (meia-vida ~18–24 h)",
      duracao: "Conforme sangramento (tabela)",
      monitorizacao: "Resposta clínica; dosagem de FIX; reação alérgica (inibidor de FIX pode vir com anafilaxia)",
      contraindicacoes: "Inibidor (bypass)",
      ajustes: "Mesma fórmula em adulto e criança"
    },
    {
      droga: "Agentes de bypass: fator VII ativado recombinante (rFVIIa) ou concentrado de complexo protrombínico ativado (CCPA)",
      linha: "alt",
      dose: "rFVIIa: 90 mcg/kg. CCPA: 50–100 UI/kg (máx. 200 UI/kg/dia)",
      via: "IV",
      intervalo: "rFVIIa a cada 2–3 h; CCPA a cada 8–12 h, até controle",
      duracao: "Conforme hemocentro",
      monitorizacao: "Resposta clínica (não há exame que meça); sinais de trombose",
      contraindicacoes: "CCPA em quem usa emicizumabe: evitar (microangiopatia trombótica e trombose); preferir rFVIIa",
      ajustes: "Hemofilia com inibidor de alta resposta e hemofilia adquirida. Decisão com hemocentro"
    },
    {
      droga: "Desmopressina (hemofilia A leve e portadoras, respondedores conhecidos)",
      linha: "alt",
      dose: "0,3 mcg/kg (máx. 20 mcg) em 50 mL de SF 0,9% em 30 min",
      via: "IV ou SC",
      intervalo: "A cada 12–24 h, no máximo 2–3 doses",
      duracao: "—",
      monitorizacao: "Sódio; restrição hídrica 24 h",
      contraindicacoes: "Criança < 2 anos, hemofilia A grave ou moderada, hemofilia B, sangramento com risco de vida",
      ajustes: "Ver ficha hemostasia-primaria"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "Adulto: 1 g VO 8/8 h ou 10 mg/kg (máx. 1 g) IV 8/8 h. Criança: 15–25 mg/kg VO 8/8 h (máx. 1,5 g por dose) ou 10 mg/kg IV",
      via: "VO, IV ou bochecho",
      intervalo: "8/8 h",
      duracao: "5–7 dias (mucosa, extração dentária)",
      monitorizacao: "—",
      contraindicacoes: "Hematúria (coágulos obstrutivos), uso junto com CCPA (risco trombótico; discutir com hemocentro)",
      ajustes: "Reduzir na insuficiência renal. RENAME"
    },
    {
      droga: "Analgesia: paracetamol ou dipirona; opioide se dor intensa",
      linha: "adj",
      dose: "Paracetamol adulto 500–1.000 mg (máx. 4 g/dia); criança 10–15 mg/kg/dose (máx. 1 g/dose). Dipirona adulto 1 g; criança 10–15 mg/kg/dose (máx. 1 g/dose). Morfina IV conforme ficha de analgesia",
      via: "VO ou IV",
      intervalo: "6/6 h",
      duracao: "Enquanto houver dor",
      monitorizacao: "Dor, sedação",
      contraindicacoes: "—",
      ajustes: "Inibidores seletivos da COX-2 só com orientação do hemocentro"
    },
    {
      droga: "AAS, AINE não seletivos, injeções IM, punção arterial",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Todo paciente com hemofilia",
      ajustes: "Vacinas: aplicar SC ou IM com agulha fina e compressão por 5 min, conforme orientação do hemocentro"
    }
  ],
  destino: {
    agora: [
      "Fator imediato; contato com hemocentro; imagem depois do fator quando indicado"
    ],
    reavaliar: [
      "Dor e função articular em 12–24 h",
      "Sangramento grave: nível de fator e Hb a cada 12–24 h"
    ],
    alta: [
      "Hemartrose ou hematoma superficial com melhora após a dose, dor controlada, plano de doses domiciliares e retorno ao hemocentro em 24–72 h"
    ],
    observacao: [
      "Trauma de crânio leve com TC normal após o fator: observar e manter nível de fator conforme hemocentro (risco de sangramento tardio)"
    ],
    internacao: [
      "Sangramento de SNC, via aérea, iliopsoas, gastrointestinal, síndrome compartimental, sangramento com inibidor, hemofilia adquirida, necessidade de cirurgia"
    ],
    transferencia: [
      "Sem fator disponível ou sem hemocentro de retaguarda: regulação para hospital de referência após a 1ª dose (se possível, levar o fator do paciente)"
    ]
  },
  prescricao: {
    hospitalar: "SANGRAMENTO EM HEMOFILIA — peso: ___ kg | Tipo: A / B | Gravidade: ___ | Inibidor: sim / não\n1. Concentrado de fator VIII (hemofilia A): ___ UI IV lenta (peso × nível desejado ___% × 0,5) agora; manter ___ UI a cada 8–12 h conforme hemocentro.\n   OU Concentrado de fator IX (hemofilia B): ___ UI IV lenta (peso × nível desejado ___% × 1) agora; manter ___ UI a cada 12–24 h.\n2. Ácido tranexâmico 250 mg/5 mL (50 mg/mL): 10 mg/kg = ___ mg (máx. 1 g) IV em 10 min de 8/8 h — somente se sangramento de mucosa; NÃO usar se hematúria.\n3. Dipirona 1 g IV de 6/6 h (criança 10–15 mg/kg/dose) ou paracetamol 750 mg VO de 6/6 h (criança 10–15 mg/kg/dose); morfina 2–4 mg IV se dor intensa (criança 0,05–0,1 mg/kg/dose, máx. 4 mg).\n4. Hemartrose: repouso, gelo por 15–20 min a cada 2 h, elevação, tala provisória.\n5. PROIBIDO: AAS, AINE, injeção IM, punção arterial.\n6. Exames: hemograma, TP, TTPa, dosagem de fator VIII/IX e pesquisa de inibidor (se sangramento grave ou má resposta).\n7. Contato com o hemocentro: ___________ (registrar nome e horário).\n8. Controles: sinais vitais de 4/4 h; Glasgow de 2/2 h se trauma de crânio; perímetro do membro se hematoma.",
    ambulatorial: "PEDIDO DE EXAMES — TP OU TTPa ALARGADO SEM CAUSA\nHemograma com plaquetas; TP/INR; TTPa; fibrinogênio; teste de mistura do TTPa (ou TP) com plasma normal, imediato e após incubação de 2 h; dosagem de fator VIII, IX e XI (se TTPa alargado) ou fator VII (se TP alargado); fator de von Willebrand antígeno e atividade; função hepática.\nHD: Defeito de coagulação a esclarecer (CID D68.9).\n\nENCAMINHAMENTO: Hemocentro / hematologia — coagulopatia hereditária (CID D66 hemofilia A / D67 hemofilia B)."
  },
  orientacoesRetorno: [
    "Ande sempre com a carteira do hemocentro e, se tiver, com o fator em casa; aplique logo no início do sangramento",
    "Trauma na cabeça, sangramento no pescoço ou boca, dor forte na virilha ou na barriga: aplique o fator e venha ao PS imediatamente",
    "Para dor, use paracetamol ou dipirona; não use AAS, ibuprofeno, diclofenaco ou nimesulida",
    "Avise que tem hemofilia antes de qualquer injeção, dentista, cirurgia ou vacina",
    "Se o sangramento não melhorar com a dose habitual, pode haver inibidor: avisar o hemocentro",
    "Hemartrose: gelo, repouso e elevação por 1–2 dias; depois voltar a mexer com orientação de fisioterapia",
    "Retorno ao hemocentro em 24–72 h após qualquer sangramento importante"
  ],
  tabelas: [
    {
      titulo: "Nível de fator desejado e duração (WFH 2020, quando não há restrição de fator)",
      colunas: ["Sangramento", "Hemofilia A (FVIII)", "Hemofilia B (FIX)", "Duração"],
      linhas: [
        ["Articulação (hemartrose)", "40–60%", "40–60%", "1–2 dias ou até resolver"],
        ["Músculo superficial (sem compressão nervosa)", "40–60%", "40–60%", "2–3 dias"],
        ["Iliopsoas / músculo profundo com lesão nervosa", "80–100% inicial; depois 30–60%", "60–80% inicial; depois 30–60%", "1–2 dias; manutenção 3–5 dias ou mais"],
        ["SNC / trauma de crânio", "80–100% inicial; depois 50%", "60–80% inicial; depois 30%", "1–7 dias; manutenção até 21 dias"],
        ["Garganta e pescoço", "80–100% inicial; depois 50%", "60–80% inicial; depois 30%", "1–7 dias; manutenção até 14 dias"],
        ["Gastrointestinal", "80–100% inicial; depois 50%", "60–80% inicial; depois 30%", "7–14 dias"],
        ["Renal (hematúria)", "50%", "40%", "3–5 dias"],
        ["Laceração profunda", "50%", "40%", "5–7 dias"]
      ],
      nota: "Conferir com o Manual de Hemofilia do MS e com o hemocentro, que podem adotar alvos menores conforme disponibilidade. FVIII: UI = kg × % × 0,5. FIX: UI = kg × % × 1."
    },
    {
      titulo: "Coagulograma alterado — onde está o defeito",
      colunas: ["TP", "TTPa", "Pensar em"],
      linhas: [
        ["Normal", "Alargado", "FVIII, FIX, FXI, FXII (sem sangramento), FvW, heparina, anticoagulante lúpico, inibidor de FVIII"],
        ["Alargado", "Normal", "FVII, deficiência de vitamina K, varfarina, hepatopatia inicial"],
        ["Alargado", "Alargado", "FX, FV, FII, fibrinogênio, CIVD, hepatopatia, varfarina em excesso, DOAC, raticida"],
        ["Normal", "Normal com sangramento", "von Willebrand, disfunção plaquetária, FXIII, hemofilia leve, vascular"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de hemofilia, 2ª ed. (2015) e Manual de reabilitação na hemofilia (2011)",
    "World Federation of Hemophilia — WFH Guidelines for the Management of Hemophilia, 3ª ed. (Haemophilia, 2020)",
    "Ministério da Saúde — Protocolo de uso de emicizumabe para profilaxia em hemofilia A com inibidor (versão vigente)",
    "International recommendations on the diagnosis and treatment of acquired hemophilia A (Haematologica, 2020)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
