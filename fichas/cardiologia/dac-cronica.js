// Doença arterial coronariana crônica
registrarFicha({
  id: "dac-cronica",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Doença coronariana crônica (angina estável e pós-IAM)",
  resumo: "Síndrome coronariana crônica: angina estável, pós-infarto ou pós-revascularização. Prevenção secundária, controle de sintomas e sinais de instabilização.",
  palavrasChave: "dac doenca arterial coronariana angina estavel sindrome coronariana cronica pos iam prevencao secundaria aas estatina betabloqueador nitrato",
  critico: {
    tempo: "Angina nova ou em repouso = SCA",
    texto: "Dor anginosa em repouso, prolongada (> 20 min) ou em crescendo é síndrome coronariana aguda: ECG e encaminhar ao PS."
  },
  alarmes: [
    "Angina em repouso, prolongada ou progressiva (instável)",
    "Dispneia ou síncope aos esforços",
    "Sinais de IC nova",
    "Palpitações sustentadas",
    "Sangramento em uso de dupla antiagregação"
  ],
  condutaInicial: [
    "AAS 100 mg/dia (clopidogrel 75 mg se intolerância)",
    "Estatina de alta intensidade, alvo de LDL-c do risco muito alto (SBC 2025)",
    "Antianginoso: betabloqueador (1ª linha) ou bloqueador de canal de cálcio; nitrato SL de resgate",
    "IECA/BRA se HAS, DM, DRC ou FE reduzida",
    "Controle de fatores de risco: tabagismo, PA < 130/80, HbA1c, peso, atividade física (reabilitação)"
  ],
  fataisExcluir: [
    "Síndrome coronariana aguda",
    "Estenose aórtica grave",
    "Dissecção de aorta",
    "Anemia grave precipitando angina"
  ],
  proximaDecisao: "Angina controlada com 1–2 antianginosos → seguimento na UBS. Angina limitante apesar de tratamento, isquemia extensa ou FE reduzida → cardiologia para estratificação/revascularização.",
  clinica: {
    anamnese: [
      "Característica da dor: aperto aos esforços, alívio em repouso/nitrato",
      "Classe da angina (CCS I–IV), mudança recente do padrão",
      "IAM, angioplastia, cirurgia de revascularização prévios; data da última",
      "Fatores de risco e adesão",
      "Uso de sildenafil/tadalafila (interação com nitrato)"
    ],
    exameFisico: [
      "PA, FC, IMC, circunferência abdominal",
      "Sopros (estenose aórtica), sinais de IC",
      "Pulsos periféricos (DAP associada)"
    ],
    diferenciais: [
      { dx: "Dor torácica não cardíaca", pista: "DRGE, osteomuscular, ansiedade" },
      { dx: "Estenose aórtica", pista: "Sopro sistólico ejetivo, síncope" },
      { dx: "Angina microvascular / vasoespástica", pista: "Coronárias sem obstrução, dor em repouso" }
    ],
    gravidade: [
      "CCS I: só com esforço intenso · II: limitação leve · III: limitação acentuada · IV: em qualquer atividade",
      "Alto risco: isquemia extensa, FE < 50%, angina CCS III–IV"
    ]
  },
  exames: [
    { nome: "ECG", pedido: "Eletrocardiograma de repouso.", porQue: "Isquemia, área inativa, arritmias.", esperar: "—", interpretacao: "Alteração nova → avaliar instabilização.", limitacoes: "Normal não exclui DAC." },
    { nome: "Ecocardiograma", pedido: "Ecocardiograma transtorácico.", porQue: "FE, alterações segmentares, valvas.", esperar: "—", interpretacao: "FE < 50% → alto risco, IECA/BRA e betabloqueador.", limitacoes: "—" },
    { nome: "Teste funcional ou anatômico", pedido: "Teste ergométrico, cintilografia de perfusão miocárdica ou angiotomografia de coronárias (conforme disponibilidade e probabilidade).", porQue: "Diagnóstico e estratificação de risco.", esperar: "—", interpretacao: "Isquemia extensa (> 10% do VE) → cardiologia/cateterismo.", limitacoes: "Ergométrico exige ECG basal interpretável e capacidade de exercício." },
    { nome: "Laboratório", pedido: "Perfil lipídico, glicemia/HbA1c, creatinina, potássio, hemograma, TSH.", porQue: "Metas e fatores agravantes.", esperar: "—", interpretacao: "Ajustar estatina pela meta de LDL-c.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "AAS", linha: "l1", dose: "100 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Sangramento", contraindicacoes: "Alergia, sangramento ativo", ajustes: "Clopidogrel 75 mg/dia se intolerância. Dupla antiagregação por 6–12 meses após SCA/angioplastia, conforme o cardiologista" },
    { droga: "Atorvastatina (alta intensidade)", linha: "l1", dose: "40–80 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Perfil lipídico em 4–12 semanas, mialgia", contraindicacoes: "Gestação, hepatopatia ativa", ajustes: "Associar ezetimiba 10 mg se LDL-c fora da meta" },
    { droga: "Betabloqueador (atenolol, metoprolol, carvedilol, bisoprolol)", linha: "l1", dose: "Ex.: metoprolol succinato 25–200 mg/dia; atenolol 25–100 mg/dia", via: "VO", intervalo: "1–2×/dia", duracao: "Contínuo", monitorizacao: "FC alvo 55–60 em repouso, PA", contraindicacoes: "Bradicardia, BAV avançado, asma grave", ajustes: "Indispensável se FE reduzida ou IAM recente" },
    { droga: "Anlodipino", linha: "alt", dose: "5–10 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Edema", contraindicacoes: "—", ajustes: "Alternativa ou associação ao betabloqueador" },
    { droga: "Dinitrato de isossorbida SL (resgate)", linha: "adj", dose: "5 mg SL", via: "Sublingual", intervalo: "A cada 5 min, até 3 doses", duracao: "Se dor", monitorizacao: "PA", contraindicacoes: "Sildenafil < 24 h, tadalafila < 48 h, PAS < 90", ajustes: "Se a dor não passar após a 1ª dose: ligar 192" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ácido acetilsalicílico 100 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido após o almoço.\n2. Atorvastatina 40 mg ---------------------------- 30 comprimidos\n   Tomar 1 comprimido à noite.\n3. Succinato de metoprolol 50 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido pela manhã.\n\nUSO SUBLINGUAL (SE DOR NO PEITO)\n4. Dinitrato de isossorbida 5 mg ------------------ 10 comprimidos\n   Colocar 1 comprimido embaixo da língua se dor no peito; pode repetir após 5 minutos (máximo 3).\n   Se a dor não melhorar após o primeiro comprimido, ligar 192.\n   Não usar se tomou sildenafil nas últimas 24 h ou tadalafila nas últimas 48 h."
  },
  orientacoesRetorno: [
    "Dor no peito em repouso, que dura mais de 20 minutos ou não melhora com o comprimido sublingual: ligar 192",
    "Não parar o AAS ou o clopidogrel sem falar com o médico (inclusive antes de procedimentos dentários)",
    "Parar de fumar, caminhar diariamente conforme liberação, alimentação com pouco sal e gordura",
    "Retorno em 1–3 meses com perfil lipídico; depois a cada 3–6 meses"
  ],
  destino: {
    agora: ["Prevenção secundária completa e antianginoso"],
    reavaliar: ["Perfil lipídico 4–12 semanas após ajuste de estatina", "Sintomas e FC a cada consulta"],
    alta: ["Seguimento longitudinal na UBS"],
    observacao: ["—"],
    internacao: ["Angina instável / SCA"],
    transferencia: ["Cardiologia: angina limitante apesar de 2 antianginosos, isquemia extensa, FE reduzida, dúvida diagnóstica", "PS (SAMU 192): angina em repouso ou prolongada"]
  },
  fontes: [
    "ESC 2024 Guidelines for the management of chronic coronary syndromes",
    "SBC — Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose (2025)",
    "AHA/ACC 2023 Guideline for Chronic Coronary Disease"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
