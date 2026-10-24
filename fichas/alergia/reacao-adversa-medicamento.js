// Reação adversa a medicamento grave, DRESS e notificação
registrarFicha({
  id: "reacao-adversa-medicamento",
  especialidade: "alergia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Reação adversa a medicamento grave (DRESS, farmacodermias) e notificação",
  resumo: "Reconhecer e classificar a reação adversa a medicamento (RAM), identificar as reações cutâneas graves (DRESS, SJS/NET, PEGA, vasculite), suspender o suspeito, tratar e notificar no VigiMed (ANVISA).",
  palavrasChave: "ram reacao adversa medicamento farmacodermia alergia medicamentosa dress dihs sindrome de hipersensibilidade eosinofilia regiscar pega pustulose exantematica aguda generalizada exantema morbiliforme alopurinol carbamazepina fenitoina lamotrigina sulfa dapsona vancomicina notificacao vigimed anvisa farmacovigilancia naranjo",
  critico: {
    tempo: "Suspender o suspeito já",
    texto: "Suspender imediatamente o(s) medicamento(s) suspeito(s) e os não essenciais. Febre + exantema + edema facial + eosinofilia ou alteração hepática 2–8 semanas após droga nova = DRESS até prova em contrário."
  },
  alarmes: [
    "Bolhas, descolamento de pele, sinal de Nikolsky, lesão em ≥ 2 mucosas (SJS/NET — ver ficha SJS/NET)",
    "Febre alta, edema facial, linfonodos, exantema extenso (> 50% da superfície)",
    "Eosinofilia, linfócitos atípicos, TGP elevada, creatinina em ascensão",
    "Pústulas pequenas não foliculares sobre eritema, com febre (PEGA)",
    "Púrpura palpável, necrose (vasculite)",
    "Dor na pele desproporcional ao exantema (pródromo de SJS/NET)",
    "Hipotensão, broncoespasmo, angioedema (anafilaxia — ver ficha Anafilaxia)"
  ],
  condutaInicial: [
    "Suspender o medicamento suspeito e todos os não essenciais; listar todas as drogas iniciadas nas últimas 8 semanas com datas",
    "Classificar: imediata (< 1–6 h: urticária, angioedema, anafilaxia) × tardia (dias a semanas: exantema, DRESS, SJS/NET, PEGA)",
    "Exames: hemograma com eosinófilos e linfócitos atípicos, TGO, TGP, bilirrubinas, creatinina, urina tipo 1, PCR",
    "Calcular RegiSCAR se suspeita de DRESS",
    "DRESS leve (sem órgão grave): corticoide tópico potente + anti-histamínico; DRESS com órgão comprometido: prednisona 0,5–1 mg/kg/dia com retirada lenta",
    "Exantema simples sem sinais de gravidade: anti-histamínico, corticoide tópico, reavaliar em 24–48 h",
    "Registrar a alergia em destaque no prontuário e entregar relatório ao paciente",
    "Notificar no VigiMed (ANVISA) — toda RAM grave ou inesperada"
  ],
  fataisExcluir: [
    "Anafilaxia",
    "SJS/NET",
    "Hepatite fulminante e miocardite da DRESS",
    "Infecção (exantema viral, sepse, sífilis secundária) confundindo com farmacodermia",
    "Síndrome de ativação macrofágica"
  ],
  proximaDecisao: "RegiSCAR ≥ 4 ou envolvimento de órgão → internar e corticoide sistêmico. Exantema simples estável → alta com retorno em 48 h e hemograma/TGP de controle. Após a resolução: alergologia para investigação, nunca reexpor ao medicamento suspeito de reação grave (SCAR).",
  clinica: {
    anamnese: [
      "Todos os medicamentos (incluindo fitoterápicos e automedicação) com data de início, dose e suspensão",
      "Latência: imediata (minutos-horas) — IgE/anafilaxia; 4–28 dias — SJS/NET; 2–8 semanas — DRESS; 1–5 dias — PEGA",
      "Drogas de alto risco: alopurinol, carbamazepina, fenitoína, fenobarbital, lamotrigina, sulfametoxazol, sulfassalazina, dapsona, vancomicina, minociclina, nevirapina, abacavir, tuberculostáticos",
      "Reações prévias, doenças (HIV, LES aumentam risco), infecção viral concomitante"
    ],
    exameFisico: [
      "Tipo e extensão do exantema (% da superfície corporal), bolhas, Nikolsky, pústulas",
      "Mucosas (oral, ocular, genital)",
      "Edema facial, linfonodomegalia, hepatoesplenomegalia, febre",
      "Sinais vitais, sopro, crepitações (miocardite, pneumonite)"
    ],
    diferenciais: [
      { dx: "Exantema viral", pista: "Criança, pródromo, contato; sem droga nova compatível" },
      { dx: "SJS/NET", pista: "Dor cutânea, lesões em alvo atípicas, bolhas, mucosas, descolamento" },
      { dx: "PEGA", pista: "Dezenas de pústulas não foliculares em dobras, início em 1–5 dias (betalactâmicos), regressão rápida" },
      { dx: "Síndrome da pele escaldada estafilocócica", pista: "Criança pequena, descolamento superficial, mucosas poupadas" },
      { dx: "Sífilis secundária, mononucleose com amoxicilina", pista: "VDRL; exantema após amoxicilina em EBV" },
      { dx: "Doença de Still, linfoma, LES", pista: "Febre prolongada sem droga; ferritina; FAN" }
    ],
    gravidade: [
      "Gravidade (OMS): grave = óbito, risco de vida, internação ou prolongamento, incapacidade, anomalia congênita, ou clinicamente significativa",
      "Classificação: tipo A (dose-dependente, previsível) × tipo B (não previsível, imunológica/idiossincrática)",
      "RegiSCAR para DRESS: < 2 excluído; 2–3 possível; 4–5 provável; > 5 definido",
      "Causalidade: algoritmo de Naranjo ou OMS-UMC; ALDEN para SJS/NET"
    ]
  },
  exames: [
    {
      nome: "Hemograma e órgãos",
      pedido: "Hemograma com contagem de eosinófilos e pesquisa de linfócitos atípicos, TGO, TGP, fosfatase alcalina, GGT, bilirrubinas, TP/INR, ureia, creatinina, urina tipo 1, relação proteína/creatinina, CK, PCR.",
      porQue: "Detectar envolvimento sistêmico (DRESS) e pontuar RegiSCAR.",
      esperar: "Eosinofilia ≥ 700/mm³ ou ≥ 10%, linfócitos atípicos, TGP elevada.",
      interpretacao: "TGP > 2× o limite superior ou creatinina > 1,5× o basal = órgão comprometido.",
      limitacoes: "Eosinofilia pode surgir tardiamente; repetir."
    },
    {
      nome: "Coração e outros (DRESS)",
      pedido: "ECG, troponina, BNP; TSH basal; glicemia; RX de tórax.",
      porQue: "Miocardite, pneumonite; tireoidite e diabetes podem surgir semanas a meses depois.",
      esperar: "Normais na maioria.",
      interpretacao: "Troponina alta = miocardite (UTI, cardiologia).",
      limitacoes: "—"
    },
    {
      nome: "Infecções e reativação viral",
      pedido: "Sorologias: anti-HIV, HBsAg, anti-HCV, VDRL; hemoculturas se febre; PCR para HHV-6, EBV e CMV se disponível.",
      porQue: "Diferenciais e reativação de HHV-6 (apoia DRESS).",
      esperar: "—",
      interpretacao: "Reativação de CMV na evolução da DRESS pode exigir tratamento.",
      limitacoes: "PCR viral raramente disponível na urgência."
    },
    {
      nome: "Biópsia de pele",
      pedido: "Biópsia de pele (punch 4 mm) de lesão recente, com histopatológico.",
      porQue: "Confirmar padrão (DRESS, PEGA, SJS/NET, vasculite).",
      esperar: "Dermatite de interface, eosinófilos; pústulas subcórneas na PEGA.",
      interpretacao: "Ajuda a pontuar RegiSCAR.",
      limitacoes: "Não atrasar o tratamento."
    }
  ],
  tratamento: [
    {
      droga: "Prednisona / prednisolona (DRESS com órgão comprometido)",
      linha: "l1",
      dose: "Adulto: 0,5–1 mg/kg/dia (máx. 60–80 mg). Criança: prednisolona 1 mg/kg/dia (máx. 60 mg)",
      via: "VO (metilprednisolona IV equivalente se VO impossível)",
      intervalo: "1×/dia",
      duracao: "Até melhora clínica e laboratorial, depois retirada lenta em 6–12 semanas (retirada rápida causa recidiva)",
      monitorizacao: "Hemograma, TGP, creatinina semanais; glicemia, PA",
      contraindicacoes: "Infecção não controlada (relativa)",
      ajustes: "Formas graves (miocardite, hepatite grave, pneumonite): metilprednisolona 250–500 mg IV/dia por 3 dias (criança 10–30 mg/kg/dia, máx. 1 g). Ivermectina 200 mcg/kg dose única antes do corticoide em dose alta. Refratários: ciclosporina (especialista)"
    },
    {
      droga: "Corticoide tópico de alta potência",
      linha: "l1",
      dose: "Clobetasol 0,05% creme (adulto) ou betametasona 0,1% (criança e face: potência média)",
      via: "Tópica",
      intervalo: "2×/dia",
      duracao: "1–2 semanas, reduzindo",
      monitorizacao: "Atrofia cutânea",
      contraindicacoes: "Áreas erosadas extensas",
      ajustes: "DRESS leve sem órgão grave e exantemas simples"
    },
    {
      droga: "Anti-histamínico",
      linha: "adj",
      dose: "Dexclorfeniramina 2 mg (criança 2–6 anos 0,5 mg; 6–12 anos 1 mg) ou loratadina 10 mg (criança < 30 kg 5 mg)",
      via: "VO",
      intervalo: "Dexclorfeniramina 6/6–8/8 h; loratadina 1×/dia",
      duracao: "Enquanto prurido",
      monitorizacao: "Sedação",
      contraindicacoes: "Dexclorfeniramina < 2 anos",
      ajustes: "Sintomático; não trata a reação"
    },
    {
      droga: "Emoliente e cuidados de pele",
      linha: "adj",
      dose: "Hidratante sem perfume ou vaselina",
      via: "Tópica",
      intervalo: "2–3×/dia",
      duracao: "Até resolução",
      monitorizacao: "Infecção secundária",
      contraindicacoes: "—",
      ajustes: "Banhos mornos"
    },
    {
      droga: "Reintrodução do medicamento suspeito (teste de provocação)",
      linha: "ci",
      dose: "Nunca após SCAR (DRESS, SJS/NET, PEGA)",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar também drogas com reatividade cruzada (ex.: anticonvulsivantes aromáticos entre si: carbamazepina, fenitoína, fenobarbital)",
      ajustes: "Investigação com alergologista; HLA-B*58:01 (alopurinol) e HLA-B*15:02 (carbamazepina) têm valor preditivo em algumas populações"
    }
  ],
  destino: {
    agora: ["Suspender suspeitos, exames de órgão, classificar gravidade"],
    reavaliar: ["Exantema simples: 24–48 h. DRESS: hemograma, TGP e creatinina a cada 2–3 dias na internação, semanal na retirada do corticoide"],
    alta: ["Sem envolvimento de órgão, sem progressão, com retorno em 48 h e relatório de alergia"],
    observacao: ["Exantema extenso sem critérios de SCAR: 12–24 h"],
    internacao: ["DRESS (RegiSCAR ≥ 4 ou órgão comprometido), PEGA extensa, vasculite sistêmica; UTI se miocardite, hepatite fulminante ou SJS/NET extensa"],
    transferencia: ["SJS/NET com descolamento > 10%: centro de queimados/UTI com dermatologia"]
  },
  prescricao: {
    hospitalar: "DRESS COM ENVOLVIMENTO DE ÓRGÃO (peso: ___ kg)\n1. Dieta livre (para diabético se hiperglicemia).\n2. SUSPENDER: __________ (medicamento suspeito) e todos os não essenciais. Registrar ALERGIA em destaque.\n3. Ivermectina 6 mg — ___ comprimidos VO dose única (200 mcg/kg), antes do corticoide.\n4. Prednisona 1 mg/kg/dia VO pela manhã (___ mg; máx. 60–80 mg). Se grave (miocardite, hepatite grave): metilprednisolona 500 mg IV em 250 mL SG 5% em 2 h 1×/dia por 3 dias. Criança: prednisolona 1 mg/kg/dia (máx. 60 mg).\n5. Clobetasol 0,05% creme nas lesões do tronco e membros 2×/dia (não usar em face e dobras).\n6. Loratadina 10 mg VO 1×/dia (criança < 30 kg: 5 mg).\n7. Omeprazol 20 mg VO 1×/dia.\n8. Hidratante sem perfume em todo o corpo 3×/dia.\n9. Glicemia capilar de 6/6 h.\n10. Exames: hemograma, TGO, TGP, bilirrubinas, creatinina a cada 48–72 h; ECG e troponina na admissão; TSH basal.\n11. Notificar RAM grave no VigiMed (ANVISA).",
    ambulatorial: "EXANTEMA MEDICAMENTOSO SIMPLES (sem sinais de gravidade)\n1. SUSPENDER __________ (medicamento suspeito).\nUSO ORAL\n2. Loratadina 10 mg -------------------------------- 10 comprimidos\n   Tomar 1 comprimido por dia por 7 a 10 dias (criança 2–12 anos < 30 kg: loratadina xarope 1 mg/mL 5 mL 1×/dia).\nUSO TÓPICO\n3. Betametasona 0,1% creme ------------------------- 1 bisnaga\n   Aplicar fina camada nas manchas 2 vezes ao dia por 7 dias (não usar no rosto).\n4. Hidratante corporal sem perfume ------------------ 1 frasco\n   Aplicar no corpo 2 vezes ao dia.\n\nRELATÓRIO: Paciente apresentou reação adversa a __________ em __/__/____ (tipo: ________). Não deve receber esse medicamento."
  },
  orientacoesRetorno: [
    "Não usar mais o remédio que causou a reação; informar em toda consulta, farmácia e internação; anotar o nome no celular e na carteira",
    "Voltar imediatamente se aparecerem bolhas, pele soltando, feridas na boca ou nos olhos, febre alta, inchaço no rosto, pele ou olhos amarelos, falta de ar",
    "Na DRESS, o corticoide é retirado devagar ao longo de semanas; não parar por conta própria",
    "Na DRESS, fazer exames da tireoide e glicemia nos meses seguintes",
    "Retorno em 48 h (exantema simples) ou conforme a internação; consulta com alergologista após a recuperação"
  ],
  tabelas: [
    {
      titulo: "RegiSCAR (DRESS)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Febre ≥ 38,5 °C", "Não/desconhecido −1; sim 0"],
        ["Linfonodomegalia (≥ 2 sítios, > 1 cm)", "Sim 1"],
        ["Eosinofilia ≥ 700/mm³ ou ≥ 10% (≥ 1.500 ou ≥ 20%)", "1 (2)"],
        ["Linfócitos atípicos", "Sim 1"],
        ["Exantema > 50% da superfície corporal", "Sim 1"],
        ["Exantema sugestivo (≥ 2: edema facial, púrpura, infiltração, descamação)", "Sim 1; não −1"],
        ["Biópsia sugestiva de outro diagnóstico", "−1"],
        ["Órgão interno acometido (1 / ≥ 2)", "1 / 2"],
        ["Resolução em ≥ 15 dias", "Não/desconhecido −1"],
        ["≥ 3 exames negativos para outras causas (hepatites, sorologias, FAN, hemocultura)", "Sim 1"]
      ],
      nota: "Total: < 2 excluído · 2–3 possível · 4–5 provável · ≥ 6 definido. Kardaun et al., 2007/2013."
    },
    {
      titulo: "Notificação de RAM",
      colunas: ["O que", "Como"],
      linhas: [
        ["Toda suspeita de RAM, prioritariamente grave, inesperada ou com medicamento novo", "VigiMed (sistema da ANVISA, acesso pelo portal gov.br/anvisa) — profissionais e cidadãos podem notificar"],
        ["Queixa técnica (desvio de qualidade, falsificação)", "Notivisa (ANVISA)"],
        ["Hospital com Núcleo de Segurança do Paciente / farmacovigilância", "Comunicar também o núcleo local"]
      ],
      nota: "Notificar não exige certeza de causalidade. Informar: paciente, reação, datas, todos os medicamentos (lote se possível), evolução."
    }
  ],
  fontes: [
    "ANVISA — VigiMed: notificações de eventos adversos a medicamentos e vacinas (2018, vigente)",
    "OMS/Uppsala Monitoring Centre — The use of the WHO-UMC system for standardised case causality assessment (2018)",
    "Kardaun SH et al. RegiSCAR — Drug reaction with eosinophilia and systemic symptoms: validation of a scoring system (Br J Dermatol, 2013)",
    "British Association of Dermatologists — Guidelines for the management of DRESS (2024)",
    "Naranjo CA et al. A method for estimating the probability of adverse drug reactions (Clin Pharmacol Ther, 1981)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
