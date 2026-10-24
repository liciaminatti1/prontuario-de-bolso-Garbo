// Sepse materna
registrarFicha({
  id: "sepse-materna",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Sepse materna (gestação e puerpério)",
  resumo: "Disfunção orgânica por infecção na gestação, parto, pós-aborto ou puerpério (até 42 dias). Sinais vitais da gestante mascaram a gravidade: use omqSOFA e MEOWS e aplique o pacote da 1ª hora.",
  palavrasChave: "sepse materna puerperal choque septico obstetrico omqsofa qsofa obstetrico meows endometrite infeccao puerperal pos aborto aborto septico corioamnionite pielonefrite gestante estreptococo grupo a pacote primeira hora lactato",
  critico: {
    tempo: "Antibiótico na 1ª hora",
    texto: "Suspeita de infecção + omqSOFA ≥ 2 (FR ≥ 25, PAS ≤ 90, alteração mental): lactato, hemoculturas, antibiótico de amplo espectro em até 1 h, cristaloide e controle do foco. Gestante ≥ 20 semanas em decúbito lateral esquerdo."
  },
  alarmes: [
    "FR ≥ 25 irpm, PAS ≤ 90 mmHg, confusão ou agitação",
    "FC > 120 persistente, SpO₂ < 95%, lactato ≥ 2 mmol/L",
    "Oligúria < 0,5 mL/kg/h",
    "Dor abdominal desproporcional, diarreia, exantema, choque rápido (estreptococo grupo A / toxina)",
    "Sangramento com lóquios fétidos, útero amolecido e doloroso",
    "Sofrimento fetal (pode ser o 1º sinal de sepse materna)"
  ],
  condutaInicial: [
    "Avaliar ABCDE, O₂ para SpO₂ ≥ 95%, 2 acessos, monitor; gestante ≥ 20 semanas: deslocamento uterino para a esquerda",
    "Calcular omqSOFA e MEOWS; comunicar obstetra e equipe da UTI",
    "Coletar lactato, gasometria, hemograma, creatinina, bilirrubina, plaquetas, coagulograma e 2 pares de hemoculturas (sem atrasar o antibiótico)",
    "Antibiótico de amplo espectro em até 1 h, conforme foco provável",
    "Cristaloide 30 mL/kg em até 3 h se hipotensão ou lactato ≥ 4 (em bolus de 500 mL, reavaliando congestão; cautela em pré-eclâmpsia)",
    "Noradrenalina se PAM < 65 após volume",
    "Controle do foco: esvaziar útero (restos/aborto infectado), parto na corioamnionite, drenar abscesso",
    "Avaliar o feto (BCF/CTG) depois de estabilizar a mãe"
  ],
  fataisExcluir: [
    "Aborto séptico com restos ovulares",
    "Endometrite com retenção placentária",
    "Fasceíte necrosante / infecção de ferida operatória grave",
    "Infecção por estreptococo do grupo A (choque tóxico)",
    "Pielonefrite com obstrução",
    "Pneumonia grave (influenza, COVID-19)",
    "Diagnósticos que imitam sepse: TEP, embolia amniótica, DPP, HELLP, cardiomiopatia periparto"
  ],
  proximaDecisao: "Sem resposta em 1–2 h ao volume e antibiótico, ou necessidade de vasopressor: UTI e reavaliar foco (imagem, esvaziamento uterino, laparotomia). A decisão de parto depende da IG e da estabilidade: estabilizar a mãe primeiro, salvo se o foco for intrauterino (corioamnionite), quando o parto é parte do controle do foco.",
  clinica: {
    anamnese: [
      "Gestação (IG), parto recente (via, data), aborto (provocado ou espontâneo), procedimentos",
      "Febre, calafrios, dor abdominal, lóquios fétidos, disúria, tosse, diarreia, dor em ferida ou mama",
      "Contato com criança com amigdalite ou escarlatina (estreptococo grupo A)",
      "Imunossupressão, diabetes, obesidade, HIV, anemia"
    ],
    exameFisico: [
      "FR, PA, FC, SpO₂, temperatura (hipotermia também é grave), consciência, diurese, perfusão",
      "Útero: altura, tônus, dor; lóquios; especular (restos, lesão)",
      "Ferida operatória, episiorrafia, mamas, membros (TVP), pulmões, Giordano",
      "Pele: exantema, necrose, crepitação"
    ],
    diferenciais: [
      { dx: "Endometrite puerperal", pista: "Febre após o parto, útero doloroso e amolecido, lóquios fétidos" },
      { dx: "Aborto infectado", pista: "Atraso menstrual, sangramento, restos, manipulação" },
      { dx: "Pielonefrite", pista: "Disúria, dor lombar, Giordano positivo" },
      { dx: "Mastite / abscesso", pista: "Mama dolorosa, eritema" },
      { dx: "Tromboflebite pélvica séptica", pista: "Febre persistente apesar de antibiótico, sem foco" },
      { dx: "TEP, embolia amniótica, cardiomiopatia", pista: "Dispneia súbita, hipoxemia sem febre importante" }
    ],
    gravidade: [
      "omqSOFA (SOMANZ 2017): FR ≥ 25; PAS ≤ 90; qualquer alteração do estado mental — ≥ 2 pontos sugere sepse com maior risco",
      "Sepse: disfunção orgânica (SOFA obstétrico) por infecção",
      "Choque séptico: vasopressor para PAM ≥ 65 e lactato > 2 mmol/L apesar de volume",
      "Na gestante, FC até ~100 e PA levemente baixa no 2º trimestre podem ser normais; leucocitose até ~15.000 é comum"
    ]
  },
  exames: [
    {
      nome: "Lactato e gasometria",
      pedido: "Lactato sérico e gasometria arterial ou venosa. Repetir lactato em 2–4 h se ≥ 2 mmol/L.",
      porQue: "Gravidade e resposta ao tratamento.",
      esperar: "< 2 mmol/L.",
      interpretacao: "≥ 2 = hipoperfusão; ≥ 4 = volume 30 mL/kg e UTI. Lactato sobe no trabalho de parto ativo.",
      limitacoes: "Interpretar no contexto de trabalho de parto e uso de beta-agonista."
    },
    {
      nome: "Culturas",
      pedido: "Hemoculturas (2 pares de sítios diferentes). Urocultura. Cultura de secreção endocervical/lóquios, de ferida ou de restos, conforme foco. Swab de orofaringe se suspeita de estreptococo do grupo A.",
      porQue: "Ajustar antibiótico.",
      esperar: "—",
      interpretacao: "Estreptococo grupo A: tratar como emergência (clindamicina + penicilina; notificar CCIH).",
      limitacoes: "Não atrasar o antibiótico para coletar."
    },
    {
      nome: "Disfunção orgânica",
      pedido: "Hemograma, plaquetas, creatinina, ureia, bilirrubinas, AST, ALT, TP, TTPa, fibrinogênio, sódio, potássio, glicemia, PCR.",
      porQue: "SOFA obstétrico e diferenciais (HELLP, CIVD).",
      esperar: "Creatinina normal da gestante é menor que fora da gestação.",
      interpretacao: "Creatinina > 1,0 mg/dL, plaquetas < 100.000 ou bilirrubina alta = disfunção.",
      limitacoes: "—"
    },
    {
      nome: "Imagem do foco",
      pedido: "USG pélvica/obstétrica (restos, abscesso). RX de tórax (com proteção abdominal). USG de rins e vias urinárias. TC conforme suspeita.",
      porQue: "Achar foco drenável.",
      esperar: "—",
      interpretacao: "Restos ovulares/placentários com sepse: esvaziamento uterino após antibiótico.",
      limitacoes: "Não negar exame de imagem necessário por estar grávida."
    }
  ],
  tratamento: [
    {
      droga: "Clindamicina + gentamicina (foco pélvico: endometrite, pós-aborto, pós-cesárea)",
      linha: "l1",
      dose: "Clindamicina 900 mg IV 8/8 h + gentamicina 5 mg/kg IV 1×/dia",
      via: "IV",
      intervalo: "Conforme droga",
      duracao: "Até 24–48 h afebril e melhora clínica (sem necessidade de VO depois na endometrite)",
      monitorizacao: "Creatinina (gentamicina)",
      contraindicacoes: "—",
      ajustes: "Associar ampicilina 2 g IV 6/6 h se sem melhora em 48–72 h ou para cobrir enterococo. Alternativa: piperacilina-tazobactam"
    },
    {
      droga: "Piperacilina-tazobactam (sepse grave/choque sem foco definido ou hospitalar)",
      linha: "l1",
      dose: "4,5 g",
      via: "IV (infusão estendida em 3–4 h após a 1ª dose)",
      intervalo: "6/6 h",
      duracao: "7–10 dias conforme foco",
      monitorizacao: "Função renal",
      contraindicacoes: "Alergia grave à penicilina",
      ajustes: "Associar clindamicina 900 mg IV 8/8 h se suspeita de estreptococo grupo A ou choque tóxico. Risco de MRSA: vancomicina. Alternativa: meropeném 1 g IV 8/8 h"
    },
    {
      droga: "Ceftriaxona (pielonefrite, pneumonia comunitária)",
      linha: "alt",
      dose: "2 g (pielonefrite: 1–2 g)",
      via: "IV",
      intervalo: "24/24 h",
      duracao: "Conforme foco",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pneumonia: + azitromicina 500 mg IV/VO 1×/dia. Influenza: oseltamivir 75 mg VO 12/12 h"
    },
    {
      droga: "Cristaloide (Ringer lactato)",
      linha: "l1",
      dose: "30 mL/kg em até 3 h, em bolus de 500 mL",
      via: "IV",
      intervalo: "Reavaliar após cada bolus",
      duracao: "—",
      monitorizacao: "Ausculta, SpO₂, USG pulmonar, diurese, lactato",
      contraindicacoes: "Edema pulmonar",
      ajustes: "Pré-eclâmpsia: alíquotas menores (250–500 mL) e reavaliação frequente"
    },
    {
      droga: "Noradrenalina",
      linha: "l1",
      dose: "0,05–0,1 mcg/kg/min, titular",
      via: "IV em bomba (periférica calibrosa até acesso central)",
      intervalo: "Contínuo",
      duracao: "Até estabilidade",
      monitorizacao: "PAM ≥ 65; PA invasiva; BCF",
      contraindicacoes: "—",
      ajustes: "Diluição: 16 mg (4 ampolas de 4 mL) + SG 5% 234 mL = 64 mcg/mL. Vasopressor de escolha também na gestação"
    },
    {
      droga: "Hidrocortisona",
      linha: "adj",
      dose: "50 mg",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Enquanto vasopressor",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Choque com noradrenalina ≥ 0,25 mcg/kg/min (SSC 2021). Se 24–34 semanas e parto provável, a betametasona fetal é feita à parte"
    }
  ],
  destino: {
    agora: [
      "Pacote da 1ª hora na sala de emergência; acionar obstetra e UTI",
      "UBS/UPA: O₂, acesso, cristaloide, 1ª dose de antibiótico (ceftriaxona 2 g IV ou IM se sem acesso) e transferência"
    ],
    reavaliar: [
      "Sinais vitais e MEOWS de 15/15 min até estabilizar; diurese horária",
      "Lactato em 2–4 h; BCF/CTG conforme IG"
    ],
    alta: [
      "Afebril ≥ 24–48 h, sem disfunção, foco controlado, aceitando dieta; antibiótico VO se indicado"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Todos os casos de sepse",
      "UTI: choque, lactato ≥ 4, disfunção respiratória, renal ou neurológica"
    ],
    transferencia: [
      "Para hospital com UTI adulto e obstétrica após 1ª dose de antibiótico e início de volume"
    ]
  },
  prescricao: {
    hospitalar: "SEPSE MATERNA (peso: ___ kg; IG/dia de puerpério: ___)\n1. Dieta zero inicialmente.\n2. Decúbito lateral esquerdo se ≥ 20 semanas; O₂ para SpO₂ ≥ 95%; 2 acessos; monitor; sonda vesical.\n3. Ringer lactato 500 mL IV em 15–30 min; repetir até 30 mL/kg em 3 h reavaliando ausculta e SpO₂ após cada bolus.\n4. Antibiótico na 1ª hora (escolher pelo foco):\n   Foco pélvico/puerperal/pós-aborto: clindamicina 900 mg + SF 0,9% 100 mL IV de 8/8 h + gentamicina 5 mg/kg (___ mg) + SF 0,9% 100 mL IV 1×/dia.\n   Sem foco definido ou choque: piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV de 6/6 h + clindamicina 900 mg IV de 8/8 h.\n5. Noradrenalina 16 mg + SG 5% 234 mL (64 mcg/mL) IV em bomba, iniciar 0,05–0,1 mcg/kg/min, titular para PAM ≥ 65 mmHg.\n6. Paracetamol 750 mg VO ou 1 g IV de 6/6 h se febre.\n7. Enoxaparina 40 mg SC 1×/dia quando sem sangramento e sem parto iminente.\n8. Exames: lactato (repetir em 2–4 h), gasometria, 2 pares de hemoculturas, urocultura, culturas do foco, hemograma, creatinina, bilirrubinas, AST, ALT, coagulograma, fibrinogênio, PCR.\n9. Controles: PA, FC, FR, SpO₂ de 15/15 min; temperatura de 2/2 h; diurese horária (meta ≥ 0,5 mL/kg/h); MEOWS; BCF/CTG.\n10. Controle do foco: comunicar obstetra (esvaziamento uterino, parto, drenagem)."
  },
  orientacoesRetorno: [
    "Após o parto ou aborto, voltar imediatamente se: febre, calafrios, dor na barriga que piora, sangramento com mau cheiro, falta de ar, tontura, confusão",
    "Lavar as mãos antes de trocar absorvente e cuidar da cicatriz",
    "Tomar o antibiótico até o fim, se prescrito",
    "Consulta de puerpério na UBS em até 7 dias"
  ],
  tabelas: [
    {
      titulo: "omqSOFA (SOMANZ 2017)",
      colunas: ["Critério", "Ponto"],
      linhas: [
        ["FR ≥ 25 irpm", "1"],
        ["PAS ≤ 90 mmHg", "1"],
        ["Alteração do estado mental", "1"]
      ],
      nota: "≥ 2 pontos com infecção suspeita: maior risco de desfecho grave — aplicar pacote, avaliar SOFA obstétrico e UTI. Não substitui o julgamento clínico nem atrasa o antibiótico."
    }
  ],
  fontes: [
    "Surviving Sepsis Campaign — International guidelines for management of sepsis and septic shock (2021)",
    "SOMANZ — Guideline for the investigation and management of sepsis in pregnancy (2017) — omqSOFA",
    "OMS — Statement on maternal sepsis (2017) e Global Maternal Sepsis Study (GLOSS)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "RCOG — Green-top Guideline nº 64a/64b: Bacterial sepsis in pregnancy / following pregnancy (2012)",
    "SMFM — Consult Series nº 47: Sepsis during pregnancy and the puerperium (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
