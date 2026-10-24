// Antibioticoterapia racional: princípios, duração e ajuste renal
registrarFicha({
  id: "antibioticoterapia-racional",
  especialidade: "referencia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Antibioticoterapia racional (escolha, duração e ajuste renal)",
  resumo: "Referência rápida para usar antibiótico bem: quando não usar, culturas antes, escolha empírica por sítio (remetendo às fichas de cada infecção), reavaliação em 48–72 h com descalonamento, duração curta baseada em evidência e ajuste renal dos mais usados.",
  palavrasChave: "antibiotico antimicrobiano stewardship descalonamento duracao ajuste renal clearance creatinina empirico cultura hemocultura aware oms acesso vigilancia reserva",
  alarmes: [
    "Sepse ou choque séptico: antibiótico na 1ª hora (ver ficha sepse)",
    "Suspeita de meningite: não atrasar antibiótico por exame (ver ficha meningite)",
    "Infecção necrotizante: cirurgia + antibiótico (ver ficha fasciite-necrosante)",
    "Alergia grave prévia a beta-lactâmico (anafilaxia, Stevens-Johnson)",
    "ClCr < 30 mL/min, gestação, idoso frágil, uso de varfarina ou drogas que prolongam o QT"
  ],
  conduta: [
    "Confirmar que é infecção bacteriana: não usar antibiótico em resfriado, gripe, bronquite aguda, a maioria das faringites e diarreias, bacteriúria assintomática (exceto gestante e pré-procedimento urológico)",
    "Coletar culturas antes da 1ª dose quando o paciente for internar (hemoculturas 2 pares, urocultura, cultura do sítio), sem atrasar o antibiótico em sepse",
    "Escolher o esquema empírico pelo sítio, gravidade, local de aquisição (comunidade x hospital), uso recente de antibiótico e perfil local (tabela e fichas de cada infecção)",
    "Dose plena desde a 1ª dose (ataque sem ajuste renal); ajustar as doses seguintes pelo ClCr (Cockcroft-Gault)",
    "Reavaliar em 48–72 h: culturas, evolução e diagnóstico; descalonar para o espectro mais estreito, passar para VO quando estável e tolerando dieta",
    "Definir a duração no início e registrar a data de término (\"D1 = __/__; previsão de término __/__\")",
    "Controle de foco (drenagem, retirada de cateter, desbridamento) é tão importante quanto o antibiótico"
  ],
  exames: [
    "Hemoculturas: 2 pares de punções diferentes, 20 mL por par (adulto), antes do antibiótico",
    "Urocultura: só se sintomas urinários, sepse sem foco ou gestante (rastreio)",
    "Culturas de sítio: escarro de boa qualidade, aspirado de abscesso, tecido profundo (swab de ferida superficial tem pouco valor)",
    "Creatinina para calcular ClCr (Cockcroft-Gault) antes de definir a dose de manutenção",
    "Procalcitonina, se disponível: pode apoiar a suspensão precoce em infecção respiratória (não decide início isoladamente)"
  ],
  encaminhar: [
    "Infectologia/CCIH: bacteremia por S. aureus, endocardite, germe multirresistente (ESBL, KPC, MRSA, Acinetobacter), falha terapêutica, alergia complexa, osteomielite",
    "Ver fichas: pneumonia, pneumonia-crianca, cistite, pielonefrite, itu-gestante, celulite-erisipela, furunculo-abscesso, pe-diabetico, meningite, sepse, fasciite-necrosante, ivas-sinusite, otite-media, cervicite-uretrite, sifilis, leptospirose"
  ],
  prescricao: {
    hospitalar: "MODELO DE REGISTRO DO ANTIBIÓTICO NA PRESCRIÇÃO\n1. ___________ (antibiótico) ___ mg/g IV, diluído em ___ mL de SF 0,9%, infundir em ___ min, de ___/___ h.\n   Indicação: ___________ (sítio/diagnóstico). Culturas colhidas em __/__: [ ] hemocultura [ ] urocultura [ ] outra: ____.\n   D1 = __/__/____. Reavaliar em 48–72 h (__/__). Previsão de término: __/__ (duração planejada: ___ dias).\n   ClCr (Cockcroft-Gault): ___ mL/min — dose ajustada? [ ] sim [ ] não se aplica.\n2. Em 48–72 h: [ ] manter [ ] descalonar para ________ [ ] trocar para VO: ________ [ ] suspender (infecção bacteriana descartada)."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico nos horários certos e pelo tempo indicado pelo médico; não guardar sobras nem dar a outras pessoas",
    "Antibiótico não trata gripe, resfriado nem a maioria das dores de garganta",
    "Voltar se não melhorar em 48–72 h, se piorar ou se aparecer manchas na pele, inchaço no rosto, falta de ar ou diarreia intensa",
    "Avisar sempre se já teve alergia a remédio e qual foi a reação"
  ],
  tabelas: [
    {
      titulo: "Empírico por sítio — resumo (detalhes e doses nas fichas)",
      colunas: ["Sítio / situação", "Comunidade, sem gravidade", "Grave / internado", "Ficha"],
      linhas: [
        ["Pneumonia comunitária", "Amoxicilina (± macrolídeo se comorbidade)", "Ceftriaxona + azitromicina (ou levofloxacino)", "pneumonia"],
        ["Cistite não complicada", "Nitrofurantoína ou fosfomicina", "—", "cistite"],
        ["Pielonefrite", "Ciprofloxacino (se resistência local < 10%) ou ceftriaxona 1ª dose + VO", "Ceftriaxona; sepse/risco de ESBL: carbapenêmico", "pielonefrite"],
        ["Celulite / erisipela", "Cefalexina (erisipela: amoxicilina ou penicilina)", "Oxacilina ou cefazolina; MRSA: vancomicina", "celulite-erisipela"],
        ["Abscesso de pele", "Drenagem; antibiótico só se critérios", "Drenagem + cobertura de MRSA se grave", "furunculo-abscesso"],
        ["Pé diabético infectado", "Amoxicilina-clavulanato (leve)", "Conforme gravidade e cultura", "pe-diabetico"],
        ["Meningite bacteriana", "—", "Ceftriaxona ± ampicilina (> 50 anos) ± vancomicina + dexametasona", "meningite"],
        ["Sepse sem foco", "—", "Amplo conforme origem e risco de MDR, na 1ª hora", "sepse"],
        ["Infecção necrotizante", "—", "Vancomicina + piperacilina-tazobactam + clindamicina + cirurgia", "fasciite-necrosante"],
        ["Sinusite / otite média", "Amoxicilina (se critérios de antibiótico)", "—", "ivas-sinusite / otite-media"]
      ],
      nota: "Adapte ao perfil de resistência local e às orientações da CCIH."
    },
    {
      titulo: "Duração usual com boa resposta clínica",
      colunas: ["Infecção", "Duração"],
      linhas: [
        ["Pneumonia comunitária", "5 dias (mínimo; estável há 48 h)"],
        ["Cistite (mulher)", "Nitrofurantoína 5 dias; fosfomicina dose única"],
        ["Pielonefrite", "7 dias (quinolona) ou 7–10 dias (beta-lactâmico)"],
        ["ITU no homem", "7 dias (14 dias se prostatite aguda suspeita: ver ficha prostatite)"],
        ["Celulite não complicada", "5–6 dias (prolongar se melhora lenta)"],
        ["Abscesso drenado (quando há antibiótico)", "5–7 dias"],
        ["Bacteremia por gram-negativo não complicada", "7 dias"],
        ["Bacteremia por S. aureus", "≥ 14 dias IV (complicada: 4–6 semanas) — infectologia"],
        ["Infecção intra-abdominal com controle de foco", "4 dias após controle do foco"],
        ["Meningite (pneumococo / meningococo)", "10–14 dias / 7 dias"]
      ]
    },
    {
      titulo: "Ajuste renal — antimicrobianos frequentes (adulto)",
      colunas: ["Droga (dose usual)", "ClCr 30–50", "ClCr 10–29", "ClCr < 10 / diálise"],
      linhas: [
        ["Amoxicilina 500 mg 8/8 h", "Sem ajuste", "250–500 mg 12/12 h", "250–500 mg 24/24 h"],
        ["Amoxicilina-clavulanato 875/125 mg 12/12 h", "Sem ajuste", "500/125 mg 12/12 h (não usar 875)", "500/125 mg 24/24 h"],
        ["Ciprofloxacino 500 mg 12/12 h VO", "250–500 mg 12/12 h", "250–500 mg 24/24 h", "250–500 mg 24/24 h"],
        ["Levofloxacino 750 mg 24/24 h", "750 mg 48/48 h (ClCr 20–49)", "750 mg ataque, depois 500 mg 48/48 h (ClCr 10–19)", "Idem ClCr 10–19"],
        ["SMX-TMP 800/160 mg 12/12 h", "Sem ajuste", "50% da dose (ClCr 15–30)", "Evitar (ClCr < 15)"],
        ["Nitrofurantoína", "Sem ajuste (≥ 30)", "Evitar (< 30)", "Evitar"],
        ["Piperacilina-tazobactam 4,5 g 6/6 h", "Sem ajuste (> 40)", "3,375 g 6/6 h (ClCr 20–40); 2,25 g 6/6 h (< 20)", "2,25 g 8/8 h (diálise)"],
        ["Meropenem 1 g 8/8 h", "1 g 12/12 h (26–50)", "500 mg 12/12 h (10–25)", "500 mg 24/24 h"],
        ["Cefepima 2 g 8/8 h", "2 g 12/12 h (30–60)", "2 g 24/24 h (11–29)", "1 g 24/24 h"],
        ["Aciclovir IV 10 mg/kg 8/8 h", "10 mg/kg 12/12 h (25–50)", "10 mg/kg 24/24 h (10–25)", "5 mg/kg 24/24 h"],
        ["Fluconazol (após ataque)", "50% da dose (≤ 50)", "50% da dose", "Dose após diálise"],
        ["Vancomicina", "Pelo nível sérico (vale/AUC)", "Pelo nível sérico", "Pelo nível sérico"],
        ["Sem ajuste renal", "Ceftriaxona, azitromicina, doxiciclina, clindamicina, metronidazol, oxacilina, linezolida", "—", "—"]
      ],
      nota: "1ª dose sempre plena. Conferir na bula/tabela da farmácia do serviço, sobretudo em diálise e terapia renal contínua. Ver também ficha doenca-renal-cronica."
    }
  ],
  fontes: [
    "OMS — The WHO AWaRe (Access, Watch, Reserve) Antibiotic Book (2022)",
    "ANVISA — Diretriz Nacional para Elaboração de Programa de Gerenciamento do Uso de Antimicrobianos em Serviços de Saúde (2023)",
    "Surviving Sepsis Campaign — International Guidelines (2021)",
    "IDSA/ATS — Community-Acquired Pneumonia in Adults (2019); IDSA/ESCMID — Acute uncomplicated cystitis and pyelonephritis in women (2011)",
    "Sanford Guide to Antimicrobial Therapy / bulas dos fabricantes (ajuste renal, 2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
