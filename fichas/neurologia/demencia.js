// Demência e declínio cognitivo
registrarFicha({
  id: "demencia",
  especialidade: "neurologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Demência e declínio cognitivo",
  resumo: "Queixa de memória ou mudança cognitiva/comportamental em idoso: rastreio, exclusão de causas reversíveis, diagnóstico, tratamento e apoio ao cuidador.",
  palavrasChave: "demencia alzheimer declinio cognitivo memoria esquecimento meem minimental donepezila rivastigmina galantamina memantina cuidador delirium",
  critico: {
    tempo: "Exclua delirium e causas reversíveis",
    texto: "Piora aguda (dias) com flutuação e desatenção é delirium até prova em contrário: buscar infecção, medicamentos, distúrbio metabólico."
  },
  alarmes: [
    "Início agudo/subagudo, flutuação da atenção (delirium)",
    "Déficit focal, cefaleia nova, quedas com TCE (hematoma subdural)",
    "Idade < 65 anos ou progressão rápida (meses)",
    "Risco à segurança: dirigir, fogo, perder-se, maus-tratos, negligência",
    "Agitação grave, psicose, recusa alimentar"
  ],
  condutaInicial: [
    "Ouvir o acompanhante: o que mudou, desde quando, impacto nas atividades (AVD/AIVD)",
    "Aplicar teste de rastreio (MEEM com corte por escolaridade, Mini-Cog, fluência verbal, desenho do relógio)",
    "Excluir causas reversíveis: B12, TSH, sífilis, cálcio, glicemia, função renal e hepática, hemograma, depressão, medicamentos",
    "Neuroimagem (TC ou RM de crânio)",
    "Rever medicamentos anticolinérgicos e benzodiazepínicos; orientar o cuidador e a segurança"
  ],
  fataisExcluir: [
    "Delirium (infecção, hiponatremia, hipoglicemia, medicamentos)",
    "Hematoma subdural crônico",
    "Tumor cerebral, hidrocefalia de pressão normal",
    "Neurossífilis, HIV"
  ],
  proximaDecisao: "Demência leve a moderada provável (Alzheimer) → iniciar inibidor de colinesterase e plano de cuidado. Atípica, rápida, < 65 anos ou dúvida → neurologia/geriatria.",
  clinica: {
    anamnese: [
      "Memória recente, linguagem, orientação, planejamento, comportamento",
      "Atividades: dinheiro, remédios, transporte, cozinhar (AIVD); banho e alimentação (AVD)",
      "Escolaridade (interpretação do MEEM)",
      "Depressão, álcool, quedas, AVC prévio, sintomas parkinsonianos, alucinações visuais",
      "Medicamentos: anticolinérgicos, benzodiazepínicos, antipsicóticos"
    ],
    exameFisico: ["Exame neurológico (sinais focais, marcha, parkinsonismo)", "Audição e visão", "PA ortostática", "Sinais de maus-tratos"],
    diferenciais: [
      { dx: "Delirium", pista: "Agudo, flutuante, desatenção" },
      { dx: "Depressão (pseudodemência)", pista: "Queixa subjetiva intensa, humor deprimido, respostas 'não sei'" },
      { dx: "Demência vascular", pista: "AVCs, fatores de risco, piora em degraus" },
      { dx: "Demência com corpos de Lewy", pista: "Alucinações visuais, parkinsonismo, flutuação; sensível a antipsicóticos" },
      { dx: "Comprometimento cognitivo leve", pista: "Déficit objetivo sem perda de autonomia" }
    ],
    gravidade: [
      "MEEM (pontos de corte por escolaridade — Brucki 2003): analfabetos 20 · 1–4 anos 25 · 5–8 anos 26,5 · 9–11 anos 28 · > 11 anos 29",
      "Leve: AIVD comprometidas · moderada: precisa de ajuda em AVD · grave: dependência total"
    ]
  },
  exames: [
    { nome: "Causas reversíveis", pedido: "Hemograma, vitamina B12, TSH, VDRL (ou teste treponêmico), cálcio, sódio, glicemia, creatinina, TGO, TGP, albumina; anti-HIV se fator de risco.", porQue: "Excluir causas tratáveis.", esperar: "—", interpretacao: "Corrigir alterações e reavaliar cognição.", limitacoes: "A correção raramente reverte totalmente uma demência estabelecida." },
    { nome: "Neuroimagem", pedido: "TC de crânio sem contraste (ou RM de encéfalo).", porQue: "AVC, hematoma, tumor, hidrocefalia, atrofia.", esperar: "—", interpretacao: "Lesão estrutural → neurologia.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "Donepezila", linha: "l1", dose: "5 mg à noite por 4–6 semanas, depois 10 mg", via: "VO", intervalo: "1×/dia", duracao: "Enquanto houver benefício", monitorizacao: "Bradicardia, síncope, náusea, diarreia, pesadelos", contraindicacoes: "Bradicardia/BAV, síncope", ajustes: "Disponível no SUS (PCDT Doença de Alzheimer)" },
    { droga: "Rivastigmina", linha: "alt", dose: "Oral 1,5 mg 12/12h, aumentar 1,5 mg por dose a cada 4 semanas até 6 mg 12/12h · adesivo 4,6 → 9,5 mg/24 h", via: "VO com alimento ou transdérmica", intervalo: "12/12h ou diário", duracao: "Contínuo", monitorizacao: "Náusea, perda de peso, bradicardia", contraindicacoes: "Bradicardia", ajustes: "Adesivo tem menos efeitos gastrointestinais" },
    { droga: "Galantamina", linha: "alt", dose: "8 mg/dia → 16 → 24 mg/dia (liberação prolongada)", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Bradicardia", contraindicacoes: "Insuficiência hepática/renal grave", ajustes: "—" },
    { droga: "Memantina", linha: "adj", dose: "5 mg/dia, aumentar 5 mg/semana até 10 mg 12/12h", via: "VO", intervalo: "12/12h", duracao: "Contínuo", monitorizacao: "Tontura, confusão", contraindicacoes: "—", ajustes: "Demência moderada a grave; ClCr < 30: máx 10 mg/dia" },
    { droga: "Antipsicóticos e benzodiazepínicos", linha: "ci", dose: "Evitar de rotina", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Aumentam mortalidade, quedas e confusão", ajustes: "Sintomas comportamentais: medidas não farmacológicas primeiro; se agitação grave/psicose com risco, antipsicótico em dose baixa por tempo curto (decisão compartilhada)" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Cloridrato de donepezila 5 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido à noite por 4 semanas; depois, se bem tolerado, 10 mg à noite.\n\nORIENTAÇÕES AO CUIDADOR\n- Manter rotina, ambiente iluminado e calendário/relógio visíveis.\n- Supervisionar remédios, dinheiro, fogão e direção de veículos.\n- Estimular atividade física, convívio e atividades cognitivas.\n- Procurar o serviço se piora brusca (pode ser infecção ou efeito de remédio)."
  },
  orientacoesRetorno: [
    "Piora rápida em dias, sonolência, agitação ou confusão nova: procurar atendimento (pode ser infecção ou remédio)",
    "Desmaio, tontura ou batimento lento após iniciar o remédio: avisar",
    "Planejar com a família decisões futuras (cuidados, finanças, diretivas antecipadas)",
    "Retorno em 4–6 semanas após iniciar; depois a cada 3–6 meses"
  ],
  destino: {
    agora: ["Rastreio, exames de causas reversíveis, neuroimagem e plano com o cuidador"],
    reavaliar: ["4–6 semanas após início do fármaco", "Cognição e funcionalidade a cada 6 meses"],
    alta: ["Seguimento na UBS com eMulti e apoio ao cuidador"],
    observacao: ["—"],
    internacao: ["Delirium grave, risco à vida"],
    transferencia: ["Neurologia/geriatria: < 65 anos, progressão rápida, quadro atípico, dúvida diagnóstica", "CAPS/psiquiatria: sintomas psicóticos ou comportamentais graves", "PS: delirium, déficit focal agudo"]
  },
  fontes: [
    "Ministério da Saúde — PCDT Doença de Alzheimer (2017) e atualização",
    "Academia Brasileira de Neurologia — Recomendações para diagnóstico e tratamento da demência (2022)",
    "Brucki SMD et al. Sugestões para o uso do MEEM no Brasil (Arq Neuropsiquiatr 2003)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
