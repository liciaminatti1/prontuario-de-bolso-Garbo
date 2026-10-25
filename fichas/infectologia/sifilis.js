// Sífilis adquirida, na gestação e congênita
registrarFicha({
  id: "sifilis",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "completo",
  titulo: "Sífilis adquirida, na gestação e congênita",
  resumo: "Infecção por Treponema pallidum. Diagnóstico com teste treponêmico (teste rápido) + não treponêmico (VDRL/RPR). Tratamento com penicilina G benzatina conforme a fase. Gestante: tratar no mesmo dia com um único teste reagente. Notificação compulsória.",
  palavrasChave: "sifilis lues treponema cancro duro roseola condiloma plano vdrl rpr teste rapido penicilina benzatina benzetacil gestante congenita neurossifilis doxiciclina ceftriaxona jarisch herxheimer notificacao",
  critico: {
    tempo: "Gestante: 1ª dose no mesmo dia",
    texto: "Na gestante, um teste reagente (rápido ou VDRL) basta para aplicar penicilina benzatina na hora, sem esperar o 2º teste. Intervalo entre doses semanais de no máximo 9 dias na gestante; se ultrapassar, reiniciar o esquema."
  },
  alarmes: [
    "Sintomas neurológicos, oculares (uveíte, baixa visual) ou auditivos: suspeitar neurossífilis/sífilis ocular — internar para penicilina cristalina",
    "Gestante com sífilis: risco de aborto, natimorto e sífilis congênita",
    "Alergia grave a penicilina em gestante: dessensibilização hospitalar (única alternativa que trata o feto)",
    "Recém-nascido de mãe com sífilis não tratada ou inadequadamente tratada",
    "Reação de Jarisch-Herxheimer (febre, mal-estar nas primeiras 24 h): benigna, mas na gestante pode desencadear contrações",
    "Criança com sífilis adquirida (após período neonatal): investigar violência sexual"
  ],
  condutaInicial: [
    "Teste rápido treponêmico em: gestantes (1ª consulta, 3º trimestre e parto), pessoas com IST, PEP/PrEP, violência sexual, populações-chave",
    "Teste rápido reagente: coletar VDRL/RPR quantitativo (titulação basal) e tratar",
    "Fora da gestação: tratar com 1 teste reagente se sinais/sintomas, risco de perda de seguimento ou violência sexual; caso contrário, tratar após confirmação com o 2º teste",
    "Definir fase: recente (< 1 ano: primária, secundária, latente recente) ou tardia (> 1 ano ou duração ignorada: latente tardia, terciária)",
    "Recente: penicilina G benzatina 2,4 milhões UI IM dose única. Tardia ou ignorada: 2,4 milhões UI IM 1 vez por semana por 3 semanas (total 7,2 milhões UI)",
    "Testar e tratar parcerias sexuais: parceria com teste reagente trata conforme fase; parceria não reagente recebe 2,4 milhões UI dose única (profilaxia)",
    "Testar HIV e hepatites; notificar (sífilis adquirida, em gestante e congênita)",
    "Seguimento com VDRL (mesmo método do diagnóstico): gestante mensal até o parto e depois a cada 3 meses até 12 meses; demais (inclusive PVHIV) a cada 3 meses até 12 meses (3, 6, 9 e 12 meses)"
  ],
  fataisExcluir: [
    "Neurossífilis e sífilis ocular/otológica",
    "Sífilis congênita (natimorto, hidropsia, hepatoesplenomegalia, pênfigo palmoplantar)",
    "Sífilis cardiovascular (aortite, aneurisma) na fase terciária",
    "Coinfecção pelo HIV"
  ],
  proximaDecisao: "Resposta adequada: queda de pelo menos 2 diluições do VDRL em até 6 meses (sífilis recente) ou até 12 meses (tardia). Aumento de 2 diluições ou persistência sem queda: avaliar reinfecção, retratar e considerar punção lombar (neurossífilis), sobretudo em PVHIV.",
  clinica: {
    anamnese: [
      "Úlcera genital indolor prévia (primária, 10–90 dias após exposição)",
      "Exantema, lesões palmoplantares, febre, linfonodos, alopecia em clareira, condiloma plano (secundária)",
      "Sintomas neurológicos (cefaleia, déficit focal, alteração cognitiva, marcha), visuais ou auditivos",
      "Testes anteriores e títulos de VDRL; tratamentos prévios (datas, doses, número de aplicações)",
      "Gestação (IG), parcerias e tratamento das parcerias",
      "Alergia a penicilina (descrever reação: urticária x anafilaxia)"
    ],
    exameFisico: [
      "Genitais, ânus e boca (cancro, condiloma plano, placas mucosas)",
      "Pele: roséola, pápulas palmoplantares descamativas (colarete de Biett)",
      "Linfonodos generalizados",
      "Exame neurológico e ocular sumário (pupilas, acuidade visual)",
      "RN: hepatoesplenomegalia, icterícia, rinite serossanguinolenta, pênfigo palmoplantar, pseudoparalisia"
    ],
    diferenciais: [
      { dx: "Herpes genital", pista: "Úlceras dolorosas, múltiplas, vesículas" },
      { dx: "Cancroide", pista: "Úlceras dolorosas, fundo sujo" },
      { dx: "Pitiríase rósea / farmacodermia", pista: "Medalhão inicial; sem lesão palmoplantar; VDRL não reagente" },
      { dx: "Cicatriz sorológica", pista: "Tratamento documentado, VDRL baixo e estável (≤ 1:4) sem nova exposição" },
      { dx: "Falso-positivo do VDRL", pista: "Treponêmico não reagente; gestação, autoimune, idade, infecções" }
    ],
    gravidade: [
      "Recente (< 1 ano): primária, secundária, latente recente",
      "Tardia (> 1 ano ou ignorada): latente tardia, terciária (gomas, cardiovascular)",
      "Neurossífilis: pode ocorrer em qualquer fase; exige penicilina cristalina IV",
      "Tratamento adequado da gestante (para fins do RN): penicilina benzatina, esquema completo para a fase, iniciado até 30 dias antes do parto, com intervalos corretos"
    ]
  },
  exames: [
    {
      nome: "Teste treponêmico",
      pedido: "Teste rápido para sífilis (treponêmico). Se laboratório: FTA-Abs, TPHA ou quimioluminescência.",
      porQue: "Triagem e confirmação.",
      esperar: "Teste rápido em 30 minutos.",
      interpretacao: "Reagente: infecção atual ou passada (permanece reagente por toda a vida). Não serve para seguimento.",
      limitacoes: "Pode ser não reagente no cancro muito inicial (janela)."
    },
    {
      nome: "Teste não treponêmico quantitativo",
      pedido: "VDRL (ou RPR) quantitativo com titulação.",
      porQue: "Confirmar atividade e acompanhar resposta ao tratamento.",
      esperar: "Dias.",
      interpretacao: "Título basal para seguimento. Queda ≥ 2 diluições = resposta. Aumento ≥ 2 diluições = reinfecção/falha.",
      limitacoes: "Variação de 1 diluição pode ser do método. Usar o mesmo teste (VDRL ou RPR) no seguimento. Efeito prozona em títulos muito altos."
    },
    {
      nome: "Líquor (LCR)",
      pedido: "Punção lombar: celularidade, proteínas, glicose, VDRL no líquor.",
      porQue: "Sintomas neurológicos, oculares ou auditivos; falha terapêutica; RN com sífilis congênita.",
      esperar: "Horas a dias.",
      interpretacao: "VDRL no líquor reagente = neurossífilis. Pleocitose e proteína elevada apoiam.",
      limitacoes: "VDRL no líquor tem baixa sensibilidade."
    },
    {
      nome: "Recém-nascido exposto",
      pedido: "VDRL de sangue periférico do RN (não usar sangue de cordão) e da mãe no parto; se critério: hemograma, LCR, radiografia de ossos longos, ALT/AST, bilirrubinas, avaliação oftalmológica e auditiva.",
      porQue: "Classificar criança exposta x sífilis congênita.",
      esperar: "—",
      interpretacao: "VDRL do RN > materno em 2 diluições ou exames alterados = sífilis congênita.",
      limitacoes: "VDRL do RN pode refletir anticorpos maternos (seguimento até 18 meses)."
    },
    {
      nome: "HIV e hepatites",
      pedido: "Teste rápido para HIV, hepatite B (HBsAg) e hepatite C (anti-HCV).",
      porQue: "Coinfecção frequente.",
      esperar: "30 minutos.",
      interpretacao: "PVHIV: mesmo tratamento, seguimento mais próximo.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    { droga: "Penicilina G benzatina — sífilis recente", linha: "l1", dose: "Adulto: 2,4 milhões UI (1,2 milhão em cada glúteo). Criança/adolescente (adquirida): 50.000 UI/kg (máximo 2,4 milhões UI)", via: "IM", intervalo: "Dose única", duracao: "—", monitorizacao: "Jarisch-Herxheimer nas primeiras 24 h", contraindicacoes: "Anafilaxia a penicilina", ajustes: "Gestação: escolha. Pode ser aplicada na APS (adrenalina disponível)" },
    { droga: "Penicilina G benzatina — sífilis tardia ou duração ignorada", linha: "l1", dose: "Adulto: 2,4 milhões UI. Criança/adolescente: 50.000 UI/kg/dose (máximo 2,4 milhões UI)", via: "IM", intervalo: "1 vez por semana", duracao: "3 semanas (adulto: total 7,2 milhões UI)", monitorizacao: "Datas das doses", contraindicacoes: "Anafilaxia", ajustes: "Gestante: intervalo ideal 7 dias, máximo 9 dias; se ultrapassar, reiniciar o esquema (NT 14/2023). Não gestante: reiniciar se intervalo > 14 dias" },
    { droga: "Doxiciclina (não gestante, alergia)", linha: "alt", dose: "100 mg", via: "VO", intervalo: "12/12 h", duracao: "15 dias (recente) ou 30 dias (tardia)", monitorizacao: "Adesão; seguimento sorológico rigoroso", contraindicacoes: "Gestação, < 8 anos", ajustes: "Não trata o feto" },
    { droga: "Ceftriaxona (alternativa de exceção, sífilis recente)", linha: "alt", dose: "1 g", via: "IV ou IM", intervalo: "24/24 h", duracao: "10 a 14 dias (CDC 2021)", monitorizacao: "Seguimento sorológico rigoroso", contraindicacoes: "Anafilaxia a cefalosporina", ajustes: "Usar só se penicilina e doxiciclina forem impossíveis; discutir com infectologia. Sífilis tardia: dados insuficientes. Na gestante, não é tratamento adequado para o RN; preferir dessensibilização à penicilina" },
    { droga: "Penicilina G cristalina (potássica) — neurossífilis/ocular", linha: "l1", dose: "18 a 24 milhões UI/dia (3 a 4 milhões UI a cada 4 h)", via: "IV", intervalo: "4/4 h ou infusão contínua", duracao: "14 dias", monitorizacao: "Potássio, sódio; LCR a cada 6 meses até normalizar", contraindicacoes: "Anafilaxia (dessensibilizar)", ajustes: "Diluir cada dose em 50–100 mL de SF 0,9% ou SG 5% e infundir em 30–60 min. Alternativa: ceftriaxona 2 g IV/dia por 10–14 dias" },
    { droga: "Sífilis congênita — penicilina cristalina", linha: "l1", dose: "50.000 UI/kg/dose", via: "IV", intervalo: "12/12 h na 1ª semana de vida; 8/8 h após 7 dias de vida", duracao: "10 dias", monitorizacao: "Seguimento com VDRL; LCR", contraindicacoes: "—", ajustes: "Obrigatória se neurossífilis. Se perder mais de 1 dia de tratamento, reiniciar" },
    { droga: "Sífilis congênita sem neurossífilis — penicilina procaína", linha: "alt", dose: "50.000 UI/kg/dose", via: "IM", intervalo: "24/24 h", duracao: "10 dias", monitorizacao: "Adesão diária", contraindicacoes: "Neurossífilis", ajustes: "Permite tratamento fora da internação em situações selecionadas" },
    { droga: "Criança exposta, mãe não tratada/inadequada, RN assintomático com exames normais e VDRL não reagente — penicilina benzatina", linha: "l1", dose: "50.000 UI/kg", via: "IM", intervalo: "Dose única", duracao: "—", monitorizacao: "Seguimento com VDRL até 18 meses", contraindicacoes: "Exames alterados (tratar como congênita)", ajustes: "Conforme PCDT; se seguimento incerto, preferir esquema de 10 dias" }
  ],
  destino: {
    agora: ["Aplicar penicilina na UBS (gestante no mesmo dia)", "Notificar", "Testar e tratar parcerias"],
    reavaliar: ["Gestante: VDRL mensal até o parto; depois a cada 3 meses até completar 12 meses", "Demais: VDRL com 3, 6, 9 e 12 meses"],
    alta: ["Critério de cura sorológica atingido; manter rastreio se exposição contínua"],
    observacao: ["Gestante após penicilina no 3º trimestre: orientar sobre contrações/febre (Jarisch-Herxheimer)"],
    internacao: ["Neurossífilis, sífilis ocular ou otológica", "Gestante com alergia grave para dessensibilização", "RN com sífilis congênita"],
    transferencia: ["Maternidade/pediatria: RN de mãe com sífilis", "Infectologia: falha terapêutica, PVHIV, neurossífilis"]
  },
  prescricao: {
    ambulatorial: "SÍFILIS RECENTE (primária, secundária, latente < 1 ano) — ADULTO\nUSO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ------------ 2 frascos-ampola\n   Aplicar 1.200.000 UI IM em cada glúteo (total 2.400.000 UI), dose única, na unidade.\n\nSÍFILIS TARDIA / DURAÇÃO IGNORADA — ADULTO\n1. Penicilina G benzatina 1.200.000 UI ------------ 6 frascos-ampola\n   Aplicar 2.400.000 UI IM (1.200.000 UI em cada glúteo) 1 vez por semana por 3 semanas.\n   Datas: ___/___ , ___/___ , ___/___ (gestante: intervalo máximo de 9 dias).\n\nPARCERIA COM TESTE NÃO REAGENTE (profilaxia)\n1. Penicilina G benzatina 2.400.000 UI IM dose única.\n\nALERGIA (NÃO GESTANTE) — USO ORAL\n1. Doxiciclina 100 mg ----------------------------- 30 comprimidos (recente) / 60 (tardia)\n   Tomar 1 comprimido de 12 em 12 horas por 15 dias (recente) ou 30 dias (tardia).\n\nCRIANÇA / ADOLESCENTE (sífilis adquirida; peso: ___ kg)\n- Penicilina G benzatina 50.000 UI/kg IM (máximo 2.400.000 UI), dose única (recente) ou semanal por 3 semanas (tardia).\n\nSINTOMÁTICO\n- Paracetamol 500 mg a 750 mg VO de 6 em 6 horas se febre ou dor nas primeiras 24 horas (criança: 10–15 mg/kg/dose).",
    hospitalar: "NEUROSSÍFILIS / SÍFILIS OCULAR — ADULTO\n1. Dieta livre.\n2. Penicilina G cristalina (potássica) 4.000.000 UI + SF 0,9% 100 mL IV em 30–60 minutos de 4 em 4 horas por 14 dias (total 24 milhões UI/dia).\n   Alergia: dessensibilização ou ceftriaxona 2 g + SF 0,9% 100 mL IV 1 vez ao dia por 10–14 dias.\n3. Potássio e sódio a cada 72 h.\n4. Dipirona 1 g IV de 6/6 h se febre ou dor.\n5. Avaliação oftalmológica; LCR de controle após 6 meses.\n\nSÍFILIS CONGÊNITA — RECÉM-NASCIDO (peso: ___ kg)\n1. Penicilina G cristalina 50.000 UI/kg/dose IV de 12/12 h (até 7 dias de vida) e de 8/8 h (após 7 dias de vida), por 10 dias. Diluir para infusão em 15–30 minutos conforme padronização neonatal.\n   OU (sem neurossífilis) Penicilina G procaína 50.000 UI/kg IM 1 vez ao dia por 10 dias.\n2. Seguimento: VDRL com 1, 3, 6, 12 e 18 meses; avaliação oftalmológica, auditiva e neurológica."
  },
  orientacoesRetorno: [
    "Sífilis tem cura; o tratamento só vale se todas as doses forem tomadas nas datas certas",
    "A parceria precisa testar e tratar; sem relação sexual até ambos completarem o tratamento",
    "Pode ter febre e mal-estar nas primeiras 24 horas após a injeção: é esperado; gestante deve procurar a maternidade se tiver contrações",
    "Fazer o VDRL de controle nas datas marcadas (gestante: todo mês)",
    "Procurar atendimento se dor de cabeça forte, alteração da visão ou audição, fraqueza ou confusão",
    "Usar preservativo; sífilis pode pegar de novo"
  ],
  tabelas: [
    {
      titulo: "Tratamento por fase (PCDT IST 2022)",
      colunas: ["Fase", "1ª escolha", "Alternativa (exceto gestante)"],
      linhas: [
        ["Primária, secundária, latente recente", "Penicilina benzatina 2,4 milhões UI IM dose única", "Doxiciclina 100 mg 12/12 h 15 dias"],
        ["Latente tardia, duração ignorada, terciária", "Penicilina benzatina 2,4 milhões UI IM semanal × 3 (7,2 milhões UI)", "Doxiciclina 100 mg 12/12 h 30 dias"],
        ["Neurossífilis", "Penicilina cristalina 18–24 milhões UI/dia IV 14 dias", "Ceftriaxona 2 g IV/dia 10–14 dias"]
      ],
      nota: "Gestante: só penicilina benzatina é considerada tratamento adequado; alergia → dessensibilização."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Alergia à penicilina, não gestante", "Doxiciclina 100 mg de 12/12 h (15 dias recente; 30 dias tardia) ou ceftriaxona 1 g IV/IM 1×/dia por 10–14 dias", "Seguimento sorológico rigoroso"],
        ["Alergia à penicilina em gestante", "Dessensibilização à penicilina em ambiente hospitalar", "Só a penicilina benzatina trata o feto"],
        ["Desabastecimento de penicilina benzatina", "Priorizar gestantes, parcerias de gestantes e sífilis congênita; demais: doxiciclina ou ceftriaxona", "Seguir notas técnicas vigentes do Ministério da Saúde"],
        ["Falha: VDRL sem queda de 2 diluições no prazo esperado ou aumento de 2 diluições", "Afastar reinfecção; testar HIV; LCR para neurossífilis; retratar com penicilina benzatina 3 doses semanais", "PCDT IST 2022"],
        ["Neurossífilis com alergia à penicilina", "Ceftriaxona 2 g IV 1×/dia por 10–14 dias ou dessensibilização", "Infectologia"],
        ["Azitromicina", "Não usar", "Resistência do T. pallidum a macrolídeos é alta"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022, atualização 2024)",
    "Ministério da Saúde — Nota Técnica nº 14/2023-DATHI/SVSA/MS (intervalo entre doses de penicilina benzatina)",
    "OMS — Recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis and Treponema pallidum (2024)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)"
  ],
  revisao: "2026-10-25",
  versao: "1.1"
});
