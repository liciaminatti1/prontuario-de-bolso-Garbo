// Abdome agudo hemorrágico (não traumático)
registrarFicha({
  id: "abdome-agudo-hemorragico",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Abdome agudo hemorrágico (não traumático)",
  resumo: "Dor abdominal súbita com sinais de sangramento intra-abdominal ou retroperitoneal sem trauma: gravidez ectópica rota, cisto ovariano hemorrágico, aneurisma de aorta roto, ruptura espontânea de baço ou fígado, ruptura de adenoma ou carcinoma hepatocelular. Conduta comum: reanimar, achar a fonte e controlar o sangramento (cirurgia ou embolização).",
  palavrasChave: "abdome agudo hemorragico hemoperitonio choque hemorragico gravidez ectopica rota cisto ovariano hemorragico corpo luteo roto aneurisma aorta roto aaa ruptura esplenica espontanea mononucleose ruptura hepatica adenoma hepatico chc carcinoma hepatocelular hellp fast embolizacao anticoagulante hematoma retroperitoneal reto abdominal",
  critico: {
    tempo: "Choque: sangue e cirurgia já",
    texto: "Dor abdominal súbita com hipotensão, palidez ou síncope = hemorragia até prova em contrário. Beta-hCG e FAST à beira-leito, tipagem, sangue O negativo se necessário e acionar cirurgia/ginecologia/vascular sem esperar tomografia."
  },
  alarmes: [
    "PAS < 90 mmHg, FC > 120 bpm, índice de choque (FC/PAS) > 1, extremidades frias, rebaixamento",
    "Síncope ou pré-síncope com dor abdominal",
    "Queda de hemoglobina em exames seriados",
    "Distensão abdominal progressiva, macicez móvel, dor no ombro (sinal de Kehr, sangue no diafragma)",
    "Massa pulsátil, dor lombar ou no flanco em idoso (aneurisma de aorta roto)",
    "Mulher em idade fértil com atraso menstrual ou beta-hCG positivo (ectópica rota)",
    "Uso de anticoagulante ou antiagregante, cirrose, plaquetopenia"
  ],
  condutaInicial: [
    "Monitor, O₂ se SpO₂ < 94%, 2 acessos venosos calibrosos (14–16 G), aquecer o paciente",
    "Coletar tipagem ABO/Rh, prova cruzada (4 concentrados de hemácias), hemograma, coagulograma, fibrinogênio, lactato, creatinina, beta-hCG",
    "FAST/USG à beira-leito: líquido livre, útero vazio com beta-hCG positivo, diâmetro da aorta",
    "Reposição: cristaloide em pequenas alíquotas (até 1 L) e logo hemocomponentes; hipotensão permissiva (PAS 80–90 mmHg, PAM ~65) até o controle do sangramento, exceto se TCE",
    "Choque grave ou sem resposta: protocolo de transfusão maciça (hemácias:plasma:plaquetas ~1:1:1) e cálcio",
    "Reverter anticoagulação (ver ficha coagulopatias-urgencia)",
    "Acionar a equipe da fonte provável: ginecologia (ectópica, cisto), cirurgia vascular (aorta), cirurgia geral (baço/fígado), radiologia intervencionista (embolização)",
    "Estável: angio-TC de abdome e pelve (fases arterial e portal) para localizar a fonte"
  ],
  fataisExcluir: [
    "Aneurisma de aorta abdominal roto (ver sindrome-aortica-aguda)",
    "Gravidez ectópica rota (ver gravidez-ectopica)",
    "Ruptura esplênica espontânea (mononucleose, malária, leucemia, linfoma, anticoagulado)",
    "Ruptura de adenoma hepático ou carcinoma hepatocelular; ruptura hepática na pré-eclâmpsia/HELLP",
    "Ruptura de aneurisma de artéria visceral (esplênica: gestante, hipertensão portal)",
    "Hematoma retroperitoneal ou da bainha do reto em anticoagulado"
  ],
  proximaDecisao: "Instável sem resposta à reanimação → centro cirúrgico direto (laparotomia; reparo aórtico aberto ou endovascular no AAA roto). Instável com resposta transitória ou estável → angio-TC e escolher entre cirurgia, embolização (baço, fígado, artéria visceral, hematoma em anticoagulado) ou tratamento conservador (cisto hemorrágico pequeno e estável, hematoma de bainha do reto).",
  clinica: {
    anamnese: [
      "Início súbito, síncope, dor no ombro (Kehr), dor lombar",
      "Atraso menstrual, DUM, métodos contraceptivos, DIU, reprodução assistida, ectópica prévia",
      "Fase do ciclo (cisto de corpo lúteo roto é típico da 2ª fase, pode ocorrer após relação ou exercício)",
      "Aneurisma conhecido, tabagismo, hipertensão, homem > 60 anos",
      "Mononucleose ou febre recente, doença hematológica, malária (baço)",
      "Anticoncepcional oral por longo prazo ou anabolizante (adenoma), cirrose ou hepatite B/C (CHC), gestação no 3º trimestre com hipertensão (HELLP)",
      "Anticoagulante, antiagregante, tosse intensa (hematoma da bainha do reto)"
    ],
    exameFisico: [
      "Sinais de choque: FC, PA, perfusão, nível de consciência, palidez",
      "Distensão, macicez móvel, descompressão dolorosa (sangue irrita o peritônio menos que pus ou fezes)",
      "Massa pulsátil, pulsos femorais assimétricos",
      "Equimose periumbilical (Cullen) ou em flancos (Grey Turner): sangramento retroperitoneal",
      "Massa dolorosa na parede que não some ao contrair o abdome (sinal de Fothergill: hematoma da bainha do reto)",
      "Exame especular e toque vaginal (sangramento, dor à mobilização do colo, abaulamento de fundo de saco)"
    ],
    diferenciais: [
      { dx: "Gravidez ectópica rota", pista: "Beta-hCG positivo, útero vazio, líquido livre; mulher em idade fértil" },
      { dx: "Cisto ovariano hemorrágico / corpo lúteo roto", pista: "Beta-hCG negativo, 2ª fase do ciclo, cisto com conteúdo heterogêneo e líquido pélvico" },
      { dx: "Aneurisma de aorta abdominal roto", pista: "Idoso, dor lombar ou no flanco, massa pulsátil, hipotensão; aorta > 3 cm no USG" },
      { dx: "Ruptura esplênica espontânea", pista: "Dor em hipocôndrio esquerdo e Kehr à esquerda; mononucleose, malária, doença hematológica" },
      { dx: "Ruptura de adenoma hepático / CHC", pista: "Dor em hipocôndrio direito; mulher com anticoncepcional (adenoma) ou cirrótico (CHC); hemoperitônio com lesão hepática na TC" },
      { dx: "Hematoma retroperitoneal ou da bainha do reto", pista: "Anticoagulado, dor em flanco ou massa na parede; TC sem hemoperitônio livre" },
      { dx: "Diferenciais não hemorrágicos", pista: "Torção anexial, perfuração, isquemia mesentérica, pancreatite necro-hemorrágica, IAM" }
    ],
    gravidade: [
      "Classe de choque (ATLS): taquicardia isolada → hipotensão → rebaixamento; idoso e betabloqueado podem não ter taquicardia",
      "Lactato > 4 mmol/L ou déficit de base > 6 sugere choque grave",
      "Respondedor transitório = sangramento ativo: precisa de controle definitivo",
      "Hemoglobina inicial pode ser normal; não usar para descartar sangramento agudo"
    ]
  },
  exames: [
    {
      nome: "Laboratório de urgência",
      pedido: "Tipagem sanguínea ABO/Rh, prova cruzada para 4 concentrados de hemácias, hemograma completo, TP/INR, TTPa, fibrinogênio, gasometria venosa com lactato, ureia, creatinina, sódio, potássio, cálcio iônico, beta-hCG quantitativo (mulher em idade fértil). Se cirrótico: TGO, TGP, bilirrubinas, albumina.",
      porQue: "Preparar transfusão, avaliar choque e coagulopatia, confirmar gestação.",
      esperar: "Lactato alto e queda de Hb nos exames seriados no sangramento ativo.",
      interpretacao: "Fibrinogênio < 150–200 mg/dL na hemorragia maciça: repor (crioprecipitado). Beta-hCG positivo + útero vazio = ectópica até prova em contrário.",
      limitacoes: "Hb inicial subestima a perda."
    },
    {
      nome: "FAST / USG à beira-leito",
      pedido: "Ultrassonografia point-of-care (FAST) com avaliação da aorta abdominal e pelve.",
      porQue: "Detectar hemoperitônio e aneurisma de aorta em minutos, sem tirar o paciente da sala.",
      esperar: "Líquido livre em Morison, esplenorrenal e pelve; aorta > 3 cm.",
      interpretacao: "Instável + FAST positivo → cirurgia. Aneurisma + choque + dor = AAA roto até prova em contrário (a ruptura costuma ser retroperitoneal e o FAST pode ser negativo).",
      limitacoes: "Não vê bem o retroperitônio; pequenos volumes podem passar despercebidos."
    },
    {
      nome: "Angiotomografia de abdome e pelve",
      pedido: "Angiotomografia de abdome e pelve (fases sem contraste, arterial e portal). Hipótese: hemoperitônio / sangramento ___.",
      porQue: "Localizar a fonte, ver extravasamento ativo de contraste (blush) e planejar cirurgia ou embolização.",
      esperar: "Hemoperitônio com sentinela de coágulo junto à fonte; blush arterial; aneurisma roto; lesão hepática ou esplênica.",
      interpretacao: "Blush em baço, fígado ou artéria visceral em paciente que responde à reanimação → avaliar embolização.",
      limitacoes: "Só em paciente estável ou respondedor. Gestante: USG primeiro."
    },
    {
      nome: "USG transvaginal",
      pedido: "Ultrassonografia transvaginal (ou pélvica). Indicação: beta-hCG ___ — investigar gravidez ectópica / cisto ovariano roto.",
      porQue: "Diferenciar ectópica de cisto hemorrágico e quantificar líquido.",
      esperar: "Massa anexial, saco gestacional extrauterino, cisto com padrão em rede.",
      interpretacao: "Ver fichas gravidez-ectopica e torcao-anexial.",
      limitacoes: "Não atrasar cirurgia na paciente instável."
    }
  ],
  tratamento: [
    {
      droga: "Concentrado de hemácias (e plasma, plaquetas)",
      linha: "l1",
      dose: "1 a 2 unidades por vez, reavaliando; transfusão maciça 1:1:1 (hemácias:plasma:plaquetas) se choque grave",
      via: "IV",
      intervalo: "Conforme resposta",
      duracao: "Até controle do sangramento",
      monitorizacao: "PA, FC, lactato, Hb, coagulograma, fibrinogênio, cálcio iônico, temperatura",
      contraindicacoes: "—",
      ajustes: "Sem tipagem: O negativo para mulher em idade fértil (O positivo para homem). Aquecer hemocomponentes. Ver ficha choque-hemorragico"
    },
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "Até 1.000 mL no início, em alíquotas de 250–500 mL",
      via: "IV aquecido",
      intervalo: "Reavaliar após cada alíquota",
      duracao: "Só enquanto o sangue não chega",
      monitorizacao: "PAS alvo 80–90 mmHg até controle da fonte",
      contraindicacoes: "Grande volume piora coagulopatia e diluição",
      ajustes: "Hipotensão permissiva não se aplica a TCE e deve ser curta em idoso hipertenso"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "1 g em 10 min, seguido de 1 g em 8 h",
      via: "IV",
      intervalo: "Dose única + infusão",
      duracao: "8 h",
      monitorizacao: "Trombose",
      contraindicacoes: "Trombose ativa",
      ajustes: "Benefício comprovado no trauma (≤ 3 h) e na hemorragia pós-parto; no sangramento não traumático o uso é por extrapolação, a critério da equipe. Ampola 250 mg/5 mL: 4 ampolas em 100 mL de SF 0,9%"
    },
    {
      droga: "Gluconato de cálcio 10%",
      linha: "adj",
      dose: "10–30 mL",
      via: "IV lento (10 min)",
      intervalo: "Conforme cálcio iônico",
      duracao: "Durante a transfusão maciça",
      monitorizacao: "Cálcio iônico (manter > 1,1 mmol/L), ECG",
      contraindicacoes: "Não misturar com hemocomponentes no mesmo acesso",
      ajustes: "Citrato das bolsas causa hipocalcemia"
    },
    {
      droga: "Morfina (analgesia)",
      linha: "adj",
      dose: "1–2 mg, titulada",
      via: "IV",
      intervalo: "A cada 10 min SN",
      duracao: "—",
      monitorizacao: "PA, FR",
      contraindicacoes: "Hipotensão grave não corrigida (preferir doses pequenas ou fentanil)",
      ajustes: "Alternativa: fentanil 25–50 mcg IV (menos hipotensão)"
    }
  ],
  destino: {
    agora: [
      "Instável: centro cirúrgico ou hemodinâmica após medidas iniciais",
      "Estável: angio-TC e decisão com a especialidade"
    ],
    reavaliar: [
      "Sinais vitais a cada 15 min no instável; Hb a cada 4–6 h no tratamento conservador",
      "Exame abdominal seriado"
    ],
    alta: [
      "Apenas cisto ovariano hemorrágico pequeno, Hb estável em exames seriados, sem dor importante — com retorno garantido"
    ],
    observacao: [
      "Cisto hemorrágico ou hematoma pequeno estável: observação com Hb seriada por 12–24 h"
    ],
    internacao: [
      "Todos os demais; UTI se choque, transfusão maciça ou pós-operatório de AAA"
    ],
    transferencia: [
      "Sem cirurgia, banco de sangue ou radiologia intervencionista: transferir após reanimação, com sangue em curso e equipe acompanhando; o AAA roto vai para centro com cirurgia vascular"
    ]
  },
  prescricao: {
    hospitalar: "ABDOME AGUDO HEMORRÁGICO — SALA DE EMERGÊNCIA (ADULTO)\n1. Jejum absoluto.\n2. Monitor cardíaco, oximetria, O₂ se SpO₂ < 94%; manta térmica.\n3. 2 acessos venosos calibrosos (14–16 G).\n4. Coletar: tipagem ABO/Rh, prova cruzada 4 CH, hemograma, TP/INR, TTPa, fibrinogênio, gasometria venosa com lactato, creatinina, eletrólitos, cálcio iônico, beta-hCG.\n5. Ringer lactato aquecido 500 mL IV rápido; reavaliar (máximo de 1.000 mL antes do sangue). Meta: PAS 80–90 mmHg até controle do sangramento.\n6. Concentrado de hemácias ___ unidades IV (O negativo se sem tipagem); se choque grave, acionar protocolo de transfusão maciça 1:1:1.\n7. Gluconato de cálcio 10% 10 mL IV lento em 10 min a cada 4 CH ou se cálcio iônico < 1,1 mmol/L.\n8. (Se indicado pela equipe) Ácido tranexâmico 1 g (4 ampolas de 250 mg/5 mL) + SF 0,9% 100 mL IV em 10 min; depois 1 g + SF 0,9% 250 mL IV em 8 h.\n9. Fentanil 25–50 mcg IV lento SN dor (ou morfina 1–2 mg IV, titulada).\n10. Sonda vesical de demora; diurese horária.\n11. Reverter anticoagulante conforme ficha coagulopatias-urgencia.\n12. Avaliação imediata: cirurgia geral / ginecologia / cirurgia vascular; radiologia intervencionista se disponível.\n13. Sinais vitais a cada 15 min; avisar se PAS < 80 mmHg, FC > 130 bpm ou rebaixamento."
  },
  orientacoesRetorno: [
    "Para alta após cisto ovariano roto tratado sem cirurgia: repouso relativo por alguns dias, evitar relação sexual e esforço até melhorar",
    "Voltar imediatamente se a dor aumentar, se tiver desmaio, tontura ao levantar, palidez, falta de ar ou barriga inchando",
    "Após mononucleose: evitar esporte de contato por pelo menos 3–4 semanas (risco de ruptura do baço)",
    "Quem tem aneurisma de aorta conhecido: procurar o PS se dor súbita na barriga ou nas costas"
  ],
  tabelas: [
    {
      titulo: "Causas e tratamento definitivo",
      colunas: ["Causa", "Pista principal", "Tratamento", "Ficha"],
      linhas: [
        ["Gravidez ectópica rota", "Beta-hCG +, útero vazio, líquido livre", "Laparoscopia ou laparotomia (salpingectomia)", "gravidez-ectopica"],
        ["Cisto ovariano hemorrágico", "Beta-hCG −, 2ª fase do ciclo", "Conservador se estável; laparoscopia se instável ou Hb caindo", "torcao-anexial"],
        ["AAA roto", "Idoso, dor lombar, massa pulsátil", "Reparo endovascular (preferido se anatomia permitir) ou aberto", "sindrome-aortica-aguda"],
        ["Ruptura esplênica espontânea", "Hipocôndrio esquerdo, mono/malária/leucemia", "Esplenectomia se instável; embolização ou observação se estável", "—"],
        ["Ruptura de adenoma / CHC", "Hipocôndrio direito, lesão hepática na TC", "Embolização arterial e ressecção eletiva depois", "—"],
        ["Ruptura hepática na HELLP", "Gestante com pré-eclâmpsia, dor epigástrica", "Parto + controle cirúrgico/embolização", "hipertensao-gestacao"],
        ["Aneurisma de artéria visceral", "Gestante, hipertensão portal", "Embolização ou cirurgia", "—"],
        ["Hematoma retroperitoneal / bainha do reto", "Anticoagulado, sem hemoperitônio livre", "Reverter anticoagulação, transfundir; embolizar se sangramento ativo", "coagulopatias-urgencia"]
      ]
    }
  ],
  fontes: [
    "ATLS — Advanced Trauma Life Support, 10ª edição (ACS, 2018): reconhecimento e reanimação do choque hemorrágico",
    "European guideline on management of major bleeding and coagulopathy following trauma, 6ª ed. (Crit Care, 2023)",
    "ESVS — Clinical Practice Guidelines on the Management of Abdominal Aorto-iliac Artery Aneurysms (2024)",
    "ACOG Practice Bulletin 193 — Tubal Ectopic Pregnancy (2018) e FEBRASGO — Gravidez ectópica (2021)",
    "EASL — Clinical Practice Guidelines on the management of benign liver tumours (2016)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
