// Pericardite aguda e tamponamento cardíaco
registrarFicha({
  id: "pericardite-tamponamento",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Pericardite aguda e tamponamento cardíaco",
  resumo: "Dor torácica pleurítica que melhora sentado e inclinado para frente, com atrito, supra de ST difuso ou derrame pericárdico. Tamponamento: derrame com hipotensão, turgência jugular e pulso paradoxal.",
  palavrasChave: "pericardite aguda derrame pericardico tamponamento cardiaco beck pulso paradoxal pericardiocentese colchicina ibuprofeno aas atrito pericardico supra st difuso infra pr miopericardite",
  critico: {
    tempo: "Tamponamento: punção/drenagem já",
    texto: "Derrame + hipotensão, turgência jugular, pulso paradoxal ou colapso de câmaras direitas no eco = tamponamento: volume IV e pericardiocentese guiada por ultrassom. Evitar diuréticos e vasodilatadores."
  },
  alarmes: [
    "Hipotensão, taquicardia, turgência jugular, abafamento de bulhas (tríade de Beck)",
    "Pulso paradoxal > 10 mmHg, alternância elétrica, baixa voltagem no ECG",
    "Febre > 38 °C, curso subagudo, derrame grande (> 20 mm), falha do AINE após 1 semana",
    "Troponina elevada (miopericardite), imunossupressão, anticoagulação oral, trauma",
    "Dor dorsal intensa com derrame: excluir dissecção de aorta tipo A"
  ],
  condutaInicial: [
    "ECG, troponina, PCR, hemograma, função renal, RX de tórax, ecocardiograma/POCUS em todos",
    "Tamponamento: monitor, SF 0,9% 250–500 mL IV, pericardiocentese guiada por ultrassom (ou drenagem cirúrgica se trauma, dissecção ou hemopericárdio)",
    "Pericardite sem critérios de alto risco: tratamento ambulatorial com AINE ou AAS em dose alta + colchicina",
    "Restringir atividade física até resolução dos sintomas e normalização da PCR",
    "Investigar causa conforme contexto (tuberculose em área endêmica, neoplasia, uremia, autoimune, pós-IAM/pós-cirurgia)"
  ],
  fataisExcluir: [
    "Tamponamento cardíaco",
    "IAM com supra de ST (supra localizado, imagem em espelho, sem infra de PR)",
    "Dissecção de aorta tipo A com hemopericárdio",
    "Miocardite (troponina elevada, disfunção ventricular)",
    "Pericardite purulenta ou tuberculosa"
  ],
  proximaDecisao: "Sem critérios de alto risco → alta com AINE + colchicina e retorno em 1 semana. Algum critério maior (febre > 38 °C, curso subagudo, derrame > 20 mm ou tamponamento, falha do AINE) → internação e investigação etiológica. Tamponamento → drenagem e UTI.",
  clinica: {
    anamnese: [
      "Dor pleurítica retroesternal, melhora sentado e inclinado para frente, piora deitado; irradiação para trapézio",
      "Infecção viral recente, febre, perda de peso, sudorese noturna (TB), neoplasia, DRC/diálise, doença autoimune",
      "IAM ou cirurgia cardíaca recente (Dressler/pós-pericardiotomia), radioterapia, trauma",
      "Anticoagulantes, procedimentos cardíacos recentes (perfuração)"
    ],
    exameFisico: [
      "Atrito pericárdico (paciente sentado e inclinado, expiração)",
      "Tamponamento: hipotensão, turgência jugular, bulhas abafadas, pulso paradoxal (queda da PAS > 10 mmHg na inspiração)",
      "Sinais de doença sistêmica"
    ],
    diferenciais: [
      { dx: "IAM com supra de ST", pista: "Supra convexo localizado, espelho, ondas Q, troponina em curva" },
      { dx: "Repolarização precoce", pista: "Supra sem infra de PR, sem dor pleurítica, ECG estável" },
      { dx: "TEP", pista: "Dispneia, hipoxemia, fatores de risco" },
      { dx: "Pneumotórax, pneumonia com pleurite", pista: "RX/POCUS" },
      { dx: "Dissecção de aorta", pista: "Dor rasgando, assimetria de pulsos" }
    ],
    gravidade: [
      "Diagnóstico (ESC): ≥ 2 de 4 — dor pericárdica, atrito, alterações típicas do ECG (supra de ST difuso/infra de PR), derrame pericárdico novo ou que aumenta. PCR elevada e imagem com inflamação pericárdica apoiam",
      "Critérios maiores de pior prognóstico: febre > 38 °C, curso subagudo, derrame grande ou tamponamento, falta de resposta ao AINE em 1 semana",
      "Critérios menores: miopericardite, imunossupressão, trauma, anticoagulação oral",
      "Tamponamento é diagnóstico clínico apoiado pelo eco: colapso diastólico de VD, colapso de AD, veia cava inferior dilatada sem variação respiratória"
    ]
  },
  exames: [
    {
      nome: "ECG",
      pedido: "ECG de 12 derivações; repetir em 24–48 h e na evolução.",
      porQue: "Alterações típicas e diferencial com IAM.",
      esperar: "Supra de ST difuso côncavo, infra de PR (supra de PR em aVR). Tamponamento: baixa voltagem, alternância elétrica.",
      interpretacao: "Supra localizado com espelho → tratar como IAM (ficha sca).",
      limitacoes: "Até 40% não têm alterações típicas."
    },
    {
      nome: "Ecocardiograma / POCUS",
      pedido: "Ecocardiograma transtorácico (urgente se hipotensão ou derrame).",
      porQue: "Derrame, tamponamento, função ventricular.",
      esperar: "Derrame pequeno ou ausente na pericardite simples.",
      interpretacao: "Derrame + colapso de câmaras direitas + VCI pletórica = fisiologia de tamponamento.",
      limitacoes: "Eco normal não exclui pericardite."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, VHS, troponina, ureia, creatinina, TGO, TGP; TSH; se derrame ou alto risco: FAN, fator reumatoide, HIV, prova tuberculínica/IGRA, hemoculturas se febre.",
      porQue: "Inflamação, miocardite, etiologia.",
      esperar: "PCR elevada; troponina normal na pericardite isolada.",
      interpretacao: "Troponina elevada = miopericardite (ver ficha miocardite). PCR guia duração do tratamento.",
      limitacoes: "Etiologia viral/idiopática é a mais comum; investigação extensa só se alto risco."
    },
    {
      nome: "Líquido pericárdico (se puncionado)",
      pedido: "Líquido pericárdico: citologia oncótica, bacterioscopia e cultura, pesquisa de BAAR, TRM-TB, cultura para micobactérias, ADA, proteínas, LDH, glicose, celularidade.",
      porQue: "Etiologia (TB, neoplasia, purulenta).",
      esperar: "Exsudato.",
      interpretacao: "ADA elevada em área endêmica sugere TB pericárdica.",
      limitacoes: "Punção diagnóstica eletiva só se suspeita de purulenta, TB ou neoplasia."
    }
  ],
  tratamento: [
    {
      droga: "Ibuprofeno",
      linha: "l1",
      dose: "600 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "1–2 semanas, depois reduzir 200–400 mg a cada 1–2 semanas (guiado por sintomas e PCR)",
      monitorizacao: "Dor, PCR, função renal, sangramento",
      contraindicacoes: "Úlcera péptica ativa, DRC avançada, IC descompensada, gestação ≥ 20 semanas",
      ajustes: "Associar omeprazol 20 mg/dia. Pós-IAM: preferir AAS"
    },
    {
      droga: "AAS",
      linha: "l1",
      dose: "750–1.000 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "1–2 semanas, depois reduzir 250–500 mg a cada 1–2 semanas",
      monitorizacao: "Sangramento, função renal",
      contraindicacoes: "Alergia, sangramento ativo",
      ajustes: "Preferido após IAM ou se já usa antiagregante. Associar protetor gástrico"
    },
    {
      droga: "Colchicina",
      linha: "l1",
      dose: "0,5 mg 2×/dia (0,5 mg 1×/dia se < 70 kg ou intolerância)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "3 meses (primeiro episódio); 6 meses na recorrência",
      monitorizacao: "Diarreia, função renal e hepática",
      contraindicacoes: "DRC grave, hepatopatia grave; interação com claritromicina, ciclosporina, verapamil, cetoconazol",
      ajustes: "Reduz recorrência. Ajustar em DRC"
    },
    {
      droga: "Prednisona",
      linha: "alt",
      dose: "0,2–0,5 mg/kg/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até resolução, depois redução lenta",
      monitorizacao: "Glicemia, PA",
      contraindicacoes: "Pericardite infecciosa (bacteriana, TB) não tratada",
      ajustes: "Só se contraindicação ou falha de AINE/AAS, ou causa autoimune; aumenta recorrência"
    },
    {
      droga: "Pericardiocentese (tamponamento)",
      linha: "l1",
      dose: "Punção guiada por ultrassom (via subxifoide ou apical), com drenagem por cateter",
      via: "Percutânea",
      intervalo: "—",
      duracao: "Dreno até débito baixo",
      monitorizacao: "Monitor, PA, ECG; complicações: perfuração, arritmia, pneumotórax",
      contraindicacoes: "Dissecção de aorta tipo A e hemopericárdio traumático: drenagem cirúrgica",
      ajustes: "Enquanto aguarda: SF 0,9% 250–500 mL IV (pré-carga). Evitar ventilação com pressão positiva se possível (piora retorno venoso)"
    },
    {
      droga: "Diuréticos e vasodilatadores no tamponamento",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Reduzem a pré-carga e precipitam colapso",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Tamponamento: volume + pericardiocentese/drenagem",
      "Pericardite simples: AINE/AAS + colchicina"
    ],
    reavaliar: [
      "Dor e PCR em 1–2 semanas",
      "Eco de controle se derrame"
    ],
    alta: [
      "Sem critérios maiores, troponina normal, sem derrame significativo, dor controlada",
      "Retorno em 1 semana para avaliar resposta"
    ],
    observacao: [
      "Dúvida diagnóstica com IAM: ECG e troponina seriados"
    ],
    internacao: [
      "Critério maior (febre > 38 °C, subagudo, derrame grande, tamponamento, falha do AINE)",
      "Miopericardite, imunossupressão, anticoagulação, trauma",
      "Suspeita de TB, neoplasia ou purulenta"
    ],
    transferencia: [
      "Tamponamento sem possibilidade de pericardiocentese local: regulação imediata após volume",
      "Hemopericárdio por dissecção ou trauma: cirurgia cardiovascular"
    ]
  },
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ibuprofeno 600 mg ------------------------------ 42 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 14 dias (depois reduzir conforme retorno).\n   (ou, após infarto ou se já usa AAS) AAS 500 mg ---- tomar 2 comprimidos (1.000 mg) de 8 em 8 horas por 14 dias.\n2. Colchicina 0,5 mg ------------------------------ 180 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 meses (se peso < 70 kg: 1 comprimido por dia).\n3. Omeprazol 20 mg ------------------------------- 30 cápsulas\n   Tomar 1 cápsula em jejum, pela manhã, enquanto usar o anti-inflamatório.\n\nORIENTAÇÕES\n- Evitar exercício físico intenso até liberação médica.",
    hospitalar: "TAMPONAMENTO CARDÍACO — SALA DE EMERGÊNCIA\n1. Dieta zero. Monitor, oximetria, 2 acessos calibrosos. Cabeceira elevada.\n2. SF 0,9% 500 mL IV rápido; reavaliar PA.\n3. NÃO usar diuréticos, nitratos ou outros vasodilatadores.\n4. Pericardiocentese guiada por ultrassom com cateter de drenagem (ver passo a passo em serviço); enviar líquido para: citologia, Gram e cultura, BAAR, TRM-TB, ADA, proteínas, LDH, glicose, celularidade.\n5. Se necessária intubação: preparar volume e vasopressor; evitar PEEP alta.\n6. Exames: hemograma, coagulograma, PCR, troponina, creatinina, eletrólitos, tipagem sanguínea.\n7. Avisar cardiologia/cirurgia cardíaca."
  },
  orientacoesRetorno: [
    "A dor costuma melhorar em poucos dias; tomar os remédios no horário e não interromper a colchicina antes de 3 meses",
    "Evitar esforço físico até a dor sumir e os exames normalizarem; atletas só voltam com liberação do cardiologista",
    "Voltar imediatamente se falta de ar, desmaio, tontura ao levantar, inchaço no pescoço, dor que piora ou febre alta",
    "Retorno em 1 semana com novo exame de PCR"
  ],
  fontes: [
    "ESC — Guidelines for the management of myocarditis and pericarditis (2025)",
    "ESC — Guidelines for the diagnosis and management of pericardial diseases (2015)",
    "SBC — I Diretriz Brasileira de Miocardites e Pericardites (2013); Diretriz de Miocardites (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
