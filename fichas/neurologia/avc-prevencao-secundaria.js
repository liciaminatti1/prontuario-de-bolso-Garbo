// Prevenção secundária após AVC/AIT
registrarFicha({
  id: "avc-prevencao-secundaria",
  especialidade: "neurologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Pós-AVC e AIT: prevenção secundária",
  resumo: "Acompanhamento após AVC isquêmico ou AIT: antitrombótico adequado à causa, estatina, controle pressórico, investigação etiológica e reabilitação.",
  palavrasChave: "avc pos avc ait prevencao secundaria antiagregante aas clopidogrel dupla antiagregacao estatina carotida fa anticoagulacao reabilitacao sequela",
  critico: {
    tempo: "Tratar a causa do AVC",
    texto: "Aterosclerose/pequenos vasos: antiagregante + estatina. Cardioembólico (FA): anticoagular. Estenose carotídea sintomática ≥ 70%: cirurgia em até 2 semanas."
  },
  alarmes: [
    "Novo déficit neurológico súbito: SAMU 192 (protocolo AVC)",
    "AIT recente (< 7 dias) sem investigação",
    "Disfagia (risco de aspiração), quedas",
    "Depressão pós-AVC, espasticidade, dor",
    "Sangramento em uso de antitrombótico"
  ],
  condutaInicial: [
    "Confirmar o tipo de AVC e a causa provável (TOAST); conferir resumo de alta",
    "Antitrombótico: AAS 100 mg ou clopidogrel 75 mg; FA → anticoagulante (DOAC)",
    "Estatina de alta intensidade, alvo LDL-c < 70 mg/dL (aterosclerótico)",
    "PA < 130/80 mmHg; controle de DM, cessação do tabagismo, atividade física",
    "Reabilitação (fisioterapia, fono, terapia ocupacional) e rastreio de depressão"
  ],
  fataisExcluir: [
    "Recorrência do AVC",
    "Fibrilação atrial não diagnosticada",
    "Estenose carotídea sintomática não tratada",
    "Pneumonia aspirativa por disfagia"
  ],
  proximaDecisao: "Investigação completa (carótidas, ritmo, eco) e fatores controlados → seguimento na UBS. Estenose carotídea sintomática, FA de difícil manejo ou AVC criptogênico em jovem → especialista.",
  clinica: {
    anamnese: [
      "Data, tipo (isquêmico/hemorrágico), território, sequelas, causa definida na alta",
      "Adesão ao antitrombótico e estatina",
      "Palpitações (FA paroxística)",
      "Deglutição, humor, quedas, incontinência, dor"
    ],
    exameFisico: ["PA nos dois braços, ritmo cardíaco, sopro carotídeo", "Déficits residuais (NIHSS/mRS)", "Espasticidade, ombro doloroso", "Deglutição"],
    diferenciais: [
      { dx: "Cardioembólico", pista: "FA, trombo, IAM recente" },
      { dx: "Aterosclerose de grandes artérias", pista: "Estenose carotídea ≥ 50%" },
      { dx: "Pequenos vasos (lacunar)", pista: "HAS, DM, síndrome lacunar" },
      { dx: "Causas raras (jovem)", pista: "Dissecção, trombofilia, forame oval patente" }
    ],
    gravidade: [
      "Escala de Rankin modificada (mRS) 0–6: funcionalidade",
      "AVC menor (NIHSS ≤ 3) ou AIT de alto risco: dupla antiagregação por 21 dias"
    ]
  },
  exames: [
    { nome: "Doppler de carótidas e vertebrais", pedido: "Ultrassonografia Doppler de artérias carótidas e vertebrais.", porQue: "Estenose carotídea.", esperar: "—", interpretacao: "Sintomática ≥ 70% (e 50–69% selecionados) → endarterectomia ou stent em até 2 semanas.", limitacoes: "Confirmar com angio-TC/angio-RM se positivo." },
    { nome: "Ritmo e coração", pedido: "ECG; Holter de 24 h (prolongar a monitorização se AVC criptogênico); ecocardiograma transtorácico.", porQue: "FA paroxística, fonte cardioembólica.", esperar: "—", interpretacao: "FA → anticoagulação.", limitacoes: "Holter curto perde FA paroxística." },
    { nome: "Fatores de risco", pedido: "Perfil lipídico, HbA1c, creatinina, hemograma.", porQue: "Metas de prevenção.", esperar: "—", interpretacao: "LDL-c < 70 mg/dL; HbA1c individualizada.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "AAS", linha: "l1", dose: "100 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Sangramento", contraindicacoes: "Alergia, sangramento ativo", ajustes: "AVC menor/AIT alto risco: AAS + clopidogrel (ataque 300 mg, depois 75 mg) por 21 dias, depois monoterapia" },
    { droga: "Clopidogrel", linha: "alt", dose: "75 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Sangramento", contraindicacoes: "Sangramento ativo", ajustes: "Alternativa ao AAS" },
    { droga: "Anticoagulante (FA)", linha: "l1", dose: "Apixabana 5 mg 12/12h ou rivaroxabana 20 mg/dia (ajustes na ficha Anticoagulação oral)", via: "VO", intervalo: "Conforme fármaco", duracao: "Contínuo", monitorizacao: "Sangramento, função renal", contraindicacoes: "Prótese mecânica (varfarina)", ajustes: "Início em geral 1–14 dias após o AVC conforme tamanho do infarto; não associar antiagregante sem indicação específica" },
    { droga: "Atorvastatina", linha: "l1", dose: "40–80 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "LDL-c, mialgia", contraindicacoes: "Gestação", ajustes: "Associar ezetimiba se LDL-c ≥ 70" },
    { droga: "Anti-hipertensivo", linha: "l1", dose: "IECA/BRA + tiazídico ou BCC (ver ficha Hipertensão)", via: "VO", intervalo: "—", duracao: "Contínuo", monitorizacao: "PA alvo < 130/80", contraindicacoes: "—", ajustes: "Iniciar/retomar após a fase aguda" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ácido acetilsalicílico 100 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido após o almoço, todos os dias.\n2. Atorvastatina 40 mg ---------------------------- 30 comprimidos\n   Tomar 1 comprimido à noite.\n3. Losartana 50 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã (ajustar para PA < 130/80).\n\n(Se FA: substituir o AAS por anticoagulante — ver ficha Anticoagulação oral.)\n\nORIENTAÇÕES\n- SAMU 192 imediatamente se boca torta, fraqueza ou dormência de um lado, dificuldade para falar ou enxergar, mesmo que passe.\n- Não suspender os remédios por conta própria."
  },
  orientacoesRetorno: [
    "Sinais de novo AVC (rosto torto, braço fraco, fala enrolada): ligar 192 imediatamente, mesmo se melhorar",
    "Manter fisioterapia e exercícios em casa",
    "Parar de fumar, reduzir sal e álcool",
    "Retorno em 1 mês com exames; depois a cada 3 meses no primeiro ano"
  ],
  destino: {
    agora: ["Antitrombótico conforme causa, estatina, controle da PA e reabilitação"],
    reavaliar: ["Perfil lipídico em 4–12 semanas", "PA e adesão a cada consulta"],
    alta: ["Seguimento na UBS com eMulti/reabilitação"],
    observacao: ["—"],
    internacao: ["Novo AVC"],
    transferencia: ["Cirurgia vascular/neurologia: estenose carotídea sintomática ≥ 50%", "Neurologia: AVC em jovem, criptogênico, recorrente", "SAMU 192: déficit novo"]
  },
  fontes: [
    "AHA/ASA 2021 Guideline for the Prevention of Stroke in Patients With Stroke and TIA",
    "Ministério da Saúde — Linha de Cuidado do AVC no adulto",
    "ESO 2022 Guidelines on secondary prevention / CHANCE e POINT (dupla antiagregação)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
