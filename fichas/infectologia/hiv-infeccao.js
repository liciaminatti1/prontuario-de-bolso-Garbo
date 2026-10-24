// Infecção pelo HIV: diagnóstico, HIV agudo, início de TARV na APS e PrEP
registrarFicha({
  id: "hiv-infeccao",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "HIV: diagnóstico, início de TARV e PrEP",
  resumo: "Testagem pelos fluxogramas do Ministério da Saúde, reconhecimento do HIV agudo, início rápido da TARV na APS (TDF/3TC + DTG) com profilaxias conforme CD4, e PrEP para pessoas com risco aumentado. PEP: ver ficha pep-sexual.",
  palavrasChave: "hiv aids teste rapido tr1 tr2 fluxograma tarv antirretroviral dolutegravir tenofovir lamivudina cd4 carga viral hiv agudo soroconversao prep profilaxia pre exposicao truvada indetectavel intransmissivel sulfametoxazol trimetoprima criptococo",
  critico: {
    tempo: "TARV em até 7 dias (ideal: mesmo dia)",
    texto: "Diagnóstico confirmado e sem sinais de infecção oportunista grave (meningite, TB): oferecer TARV no mesmo dia ou em até 7 dias, sem esperar CD4 e carga viral. Cefaleia, febre, tosse ou perda de peso: investigar TB e criptococose antes."
  },
  alarmes: [
    "Cefaleia persistente, febre, confusão, rigidez de nuca (meningite criptocócica/tuberculosa, toxoplasmose) — PS",
    "Tosse, febre, sudorese noturna, emagrecimento (tuberculose)",
    "Dispneia progressiva com dessaturação ao esforço (pneumocistose)",
    "Déficit focal, convulsão",
    "Diarreia crônica com desidratação, candidíase esofágica (disfagia)",
    "Gestante com teste reagente (início imediato de TARV, pré-natal de alto risco)",
    "CD4 < 200 ou < 100 células/mm³"
  ],
  condutaInicial: [
    "Testar com 2 testes rápidos de fabricantes diferentes (fluxograma 1) após aconselhamento",
    "TR1 e TR2 reagentes = diagnóstico; colher CD4 e carga viral, sem atrasar o início da TARV",
    "Rastrear sintomas de TB (tosse, febre, sudorese, perda de peso) e de meningite (cefaleia, febre) antes de iniciar",
    "Iniciar TDF/3TC 300/300 mg + DTG 50 mg 1 vez ao dia e vincular ao serviço (UBS/SAE)",
    "Profilaxias e rastreios conforme CD4 (SMX-TMP, CrAg, LAM, ILTB)",
    "Notificar (SINAN), testar parcerias e filhos, oferecer preservativos e explicar indetectável = intransmissível"
  ],
  fataisExcluir: [
    "Meningite criptocócica (adiar TARV)",
    "Tuberculose ativa (inclusive meníngea)",
    "Pneumocistose",
    "Neurotoxoplasmose",
    "Síndrome inflamatória de reconstituição imune (piora após iniciar TARV)",
    "Coinfecção por hepatite B (não usar esquema sem TDF/3TC; não suspender abruptamente)"
  ],
  proximaDecisao: "Sem sintomas de infecção oportunista → TARV agora. TB ativa → iniciar tratamento de TB e TARV em até 2 semanas (DTG 50 mg 12/12 h com rifampicina). Meningite criptocócica ou tuberculosa → adiar TARV (4–6 semanas na criptocócica) e conduzir com especialista. CV em 8–12 semanas; esperar indetectável em até 6 meses.",
  clinica: {
    anamnese: [
      "Exposições (sexual, uso de drogas injetáveis, transfusão, vertical), testagens prévias, uso prévio de PrEP/PEP",
      "Sintomas de HIV agudo 2–4 semanas após exposição: febre, faringite, linfonodomegalia, exantema, úlceras orais, mialgia",
      "Sintomas de TB, cefaleia, perda de peso, diarreia, lesões de pele",
      "Gestação/desejo reprodutivo, contracepção",
      "Medicamentos (metformina, antiácidos, ferro/cálcio, anticonvulsivantes, rifampicina), álcool e drogas",
      "Saúde mental e rede de apoio"
    ],
    exameFisico: [
      "Peso, IMC, sinais vitais",
      "Orofaringe (candidíase, leucoplasia pilosa), linfonodos",
      "Pele (dermatite seborreica, herpes, sarcoma de Kaposi, sífilis secundária)",
      "Ausculta pulmonar, exame neurológico, genitália e região anal",
      "Fundo de olho se CD4 < 50 ou queixa visual (CMV)"
    ],
    diferenciais: [
      { dx: "Mononucleose (EBV/CMV)", pista: "HIV agudo é diferencial obrigatório; ver ficha mononucleose" },
      { dx: "Sífilis secundária", pista: "Exantema palmoplantar; testar ambos (ver ficha sifilis)" },
      { dx: "Infecções oportunistas", pista: "CD4 baixo, sintomas focais" }
    ],
    gravidade: [
      "CD4 ≥ 350: baixo risco de oportunistas",
      "CD4 < 200: risco de pneumocistose, criptococose, toxoplasmose → profilaxias e rastreios",
      "CD4 < 100 (ou < 50): risco de criptococose, MAC, CMV; doença avançada pela OMS se CD4 < 200 ou estágio clínico 3–4"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico — testes rápidos (fluxograma 1)",
      pedido: "Teste rápido para HIV TR1 e, se reagente, TR2 de fabricante diferente (sangue por punção digital).",
      porQue: "Diagnóstico no mesmo atendimento.",
      esperar: "TR1 não reagente = amostra não reagente. TR1 e TR2 reagentes = amostra reagente para HIV.",
      interpretacao: "TR1 reagente e TR2 não reagente (discordante): repetir os dois; persistindo, colher sangue venoso para fluxograma laboratorial. Suspeita de janela (exposição < 30 dias): repetir em 30 dias e pedir carga viral se suspeita de HIV agudo.",
      limitacoes: "Fluido oral (fluxograma 2) exige confirmação com TR em sangue. Uso de PrEP/PEP pode atrasar a soroconversão."
    },
    {
      nome: "Diagnóstico laboratorial",
      pedido: "Imunoensaio de 4ª geração para HIV e, se reagente, teste molecular (carga viral) ou Western blot/imunoblot conforme fluxograma do laboratório.",
      porQue: "Quando não há TR ou há resultados discordantes; suspeita de HIV agudo.",
      esperar: "—",
      interpretacao: "HIV agudo: imunoensaio pode ser reagente com Western blot negativo/indeterminado; carga viral alta confirma.",
      limitacoes: "Ver Manual Técnico para o Diagnóstico da Infecção pelo HIV (MS)."
    },
    {
      nome: "Avaliação inicial (não atrasar a TARV)",
      pedido: "Contagem de linfócitos T CD4+. Carga viral do HIV (RNA). Genotipagem pré-tratamento conforme critérios do PCDT (gestante, coinfecção TB, parceria com falha virológica, entre outros). Hemograma, creatinina, urina tipo 1, glicemia, perfil lipídico, TGO, TGP, bilirrubinas. HBsAg, anti-HBs, anti-HBc total, anti-HCV, anti-HAV IgG. Teste para sífilis. IgG para toxoplasmose. Prova tuberculínica ou IGRA (ou tratar ILTB conforme CD4). RX de tórax. Beta-hCG em mulher em idade fértil. Citopatológico de colo uterino (e anal conforme risco).",
      porQue: "Estadiar, definir profilaxias e segurança da TARV.",
      esperar: "—",
      interpretacao: "CD4 ≤ 200: CrAg sérico e LAM urinário. HBsAg reagente: manter TDF/3TC sempre.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Tenofovir + lamivudina (TDF/3TC 300/300 mg) + dolutegravir 50 mg",
      linha: "l1",
      dose: "1 comprimido de TDF/3TC + 1 comprimido de DTG",
      via: "VO",
      intervalo: "1×/dia, mesmo horário",
      duracao: "Contínuo",
      monitorizacao: "Carga viral em 8–12 semanas e depois a cada 6 meses (estável: conforme PCDT); creatinina, urina e fósforo; peso e glicemia",
      contraindicacoes: "TDF: ClCr < 60 mL/min ou osteoporose (discutir alternativa com SAE)",
      ajustes: "DTG: tomar 2 h antes ou 6 h depois de antiácidos, cálcio, ferro e zinco. Metformina: máx 1 g/dia. Rifampicina: DTG 50 mg 12/12 h. Evitar com carbamazepina, fenitoína, fenobarbital. Gestação: mesmo esquema"
    },
    {
      droga: "Sulfametoxazol-trimetoprima (profilaxia)",
      linha: "l1",
      dose: "800/160 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até CD4 > 200 por ≥ 3 meses com CV indetectável",
      monitorizacao: "Hemograma, potássio, exantema",
      contraindicacoes: "Alergia a sulfa (dessensibilizar ou alternativa com SAE)",
      ajustes: "Indicação: CD4 < 200, candidíase oral, febre sem causa > 2 semanas ou doença definidora de aids. Também previne toxoplasmose (IgG reagente e CD4 < 100)"
    },
    {
      droga: "Tratamento de ILTB",
      linha: "adj",
      dose: "Ver ficha iltb (isoniazida ou rifapentina + isoniazida)",
      via: "VO",
      intervalo: "—",
      duracao: "Conforme esquema",
      monitorizacao: "Hepatotoxicidade",
      contraindicacoes: "TB ativa (excluir antes)",
      ajustes: "PVHIV: tratar ILTB se CD4 ≤ 350, PT ≥ 5 mm/IGRA positivo, contato de TB ou cicatriz radiológica sem tratamento prévio (MS). Rifapentina interage com DTG: conferir PCDT"
    },
    {
      droga: "PrEP diária — tenofovir + entricitabina (TDF/FTC 300/200 mg)",
      linha: "l1",
      dose: "Início: 2 comprimidos no 1º dia; depois 1 comprimido",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Enquanto houver risco",
      monitorizacao: "Teste de HIV a cada retorno; creatinina; sífilis e outras IST; hepatites",
      contraindicacoes: "HIV reagente ou sintomas de HIV agudo; ClCr < 60 mL/min",
      ajustes: "Proteção: relação anal ~2 h após a dose de ataque; vaginal/neovaginal após 7 dias de uso. Indicação: ≥ 15 anos e ≥ 35 kg com risco aumentado. HBsAg reagente: não suspender sem avaliação (risco de reativação)"
    },
    {
      droga: "PrEP sob demanda (2-1-1)",
      linha: "alt",
      dose: "2 comprimidos 2–24 h antes da relação + 1 comprimido 24 h após a 1ª dose + 1 comprimido 48 h após a 1ª dose",
      via: "VO",
      intervalo: "Por evento",
      duracao: "Manter 1/dia enquanto houver relações; parar 2 dias após a última",
      monitorizacao: "Igual à PrEP diária",
      contraindicacoes: "Mulheres cis, homens trans e pessoas em uso de estradiol; hepatite B",
      ajustes: "Indicada para homens cis e pessoas designadas homem ao nascer sem uso de hormônio, com relações pouco frequentes e programáveis"
    }
  ],
  destino: {
    agora: [
      "Diagnóstico + TARV iniciada na UBS ou encaminhamento ao SAE conforme rede local (vínculo garantido)",
      "Sintomas de infecção oportunista grave → PS/hospital"
    ],
    reavaliar: [
      "Retorno em 2–4 semanas após início (adesão, efeitos adversos, resultados)",
      "CV em 8–12 semanas; CD4 conforme PCDT",
      "Busca ativa se faltar ao retorno ou à retirada de medicamentos"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["Infecção oportunista grave, meningite, TB com gravidade, pneumocistose com hipoxemia"],
    transferencia: [
      "SAE/infectologia: gestante, criança, coinfecção TB ou hepatites, falha virológica, ClCr < 60, CD4 < 200 com sintomas, interações complexas"
    ]
  },
  prescricao: {
    ambulatorial: "INÍCIO DE TARV — ADULTO (incluindo gestante)\nUSO ORAL\n1. Tenofovir 300 mg + lamivudina 300 mg ---------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sempre no mesmo horário, uso contínuo.\n2. Dolutegravir 50 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o comprimido acima, uso contínuo.\n   (Em tratamento de TB com rifampicina: 1 comprimido de 12 em 12 horas.)\n   Tomar 2 horas antes ou 6 horas depois de antiácidos, cálcio, ferro ou zinco.\n\nSE CD4 < 200 (ou candidíase oral / doença definidora)\n3. Sulfametoxazol 800 mg + trimetoprima 160 mg --- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo até nova orientação.\n\nPrEP DIÁRIA\nUSO ORAL\n1. Tenofovir 300 mg + entricitabina 200 mg ------- 31 comprimidos (1º retorno em 30 dias)\n   Tomar 2 comprimidos no primeiro dia e depois 1 comprimido 1 vez ao dia, sempre no mesmo horário.\n\nPrEP SOB DEMANDA (2-1-1) — apenas homens cis/pessoas designadas homem ao nascer sem estradiol, sem hepatite B\n1. Tenofovir 300 mg + entricitabina 200 mg ------- ___ comprimidos\n   Tomar 2 comprimidos de 2 a 24 horas antes da relação; 1 comprimido 24 horas depois da primeira dose e 1 comprimido 48 horas depois da primeira dose."
  },
  orientacoesRetorno: [
    "O tratamento é para toda a vida e funciona muito bem: com a carga viral indetectável por 6 meses, o HIV não é transmitido por via sexual (indetectável = intransmissível)",
    "Tomar os remédios todos os dias no mesmo horário; se esquecer, tomar assim que lembrar (não dobrar a dose no dia seguinte)",
    "Não tomar antiácido, cálcio ou ferro junto com o dolutegravir; avisar qualquer remédio novo",
    "Voltar imediatamente se: dor de cabeça forte e persistente, febre, falta de ar, confusão, manchas na pele com febre ou amarelão",
    "Usar camisinha para prevenir outras infecções; parcerias devem fazer o teste",
    "PrEP: tomar sempre; fazer teste de HIV em cada retorno; a PrEP não protege contra sífilis e outras IST",
    "Retorno em 2–4 semanas e depois conforme agendamento; nunca ficar sem remédio"
  ],
  tabelas: [
    {
      titulo: "Rastreios e profilaxias conforme CD4",
      colunas: ["CD4 (células/mm³)", "Ação"],
      linhas: [
        ["≤ 350", "Tratar ILTB após excluir TB ativa (ver ficha iltb)"],
        ["< 200", "SMX-TMP 800/160 mg 1×/dia; CrAg sérico (se reagente: punção lombar e conduta especializada); LAM urinário"],
        ["< 100 com IgG toxo reagente", "SMX-TMP 800/160 mg 1×/dia (já cobre)"],
        ["< 50", "Fundo de olho (CMV); considerar profilaxia de MAC conforme PCDT"]
      ],
      nota: "Iniciar TARV em todos, independentemente do CD4."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Manejo da Infecção pelo HIV em Adultos: Módulo 1 — Tratamento (2023/2024)",
    "Ministério da Saúde — Manual Técnico para o Diagnóstico da Infecção pelo HIV em Adultos e Crianças (2018)",
    "Ministério da Saúde — PCDT para Profilaxia Pré-Exposição (PrEP) de risco à infecção pelo HIV (2022)",
    "Ministério da Saúde — Notas técnicas de dose fixa combinada e início rápido de TARV (2024–2025)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
