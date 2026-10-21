// Escabiose
registrarFicha({
  id: "escabiose",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Escabiose (sarna)",
  resumo: "Prurido intenso, pior à noite, com pápulas e sulcos em espaços interdigitais, punhos, axilas, cintura, mamas e genitais; frequentemente vários contatos acometidos.",
  palavrasChave: "escabiose sarna prurido coceira permetrina ivermectina acaro sulco crostosa",
  critico: {
    tempo: "Tratar todos ao mesmo tempo",
    texto: "Tratar o paciente e todos os contatos próximos no mesmo dia, mesmo sem sintomas, e repetir em 7 dias. Lavar roupas de cama e de uso."
  },
  alarmes: [
    "Crostas extensas e hiperceratóticas (sarna crostosa/norueguesa — muito contagiosa)",
    "Infecção secundária: pústulas, impetigo, celulite, febre",
    "Imunossupressão, institucionalizados, idosos acamados",
    "Lactente < 2 meses ou gestante (ajustar tratamento)",
    "Surto em instituição (creche, asilo, presídio)"
  ],
  condutaInicial: [
    "Diagnóstico clínico (prurido noturno + distribuição típica + contatos com prurido)",
    "Permetrina 5% do pescoço para baixo (incluir couro cabeludo e face em lactentes e idosos), deixar 8–12 h e enxaguar",
    "Repetir em 7 dias",
    "Tratar todos os contatos domiciliares e parcerias sexuais simultaneamente",
    "Lavar roupas e roupas de cama em água quente (≥ 60°C) ou isolar em saco fechado por 72 h"
  ],
  fataisExcluir: [
    "Sarna crostosa",
    "Infecção bacteriana secundária (impetigo, glomerulonefrite pós-estreptocócica)"
  ],
  proximaDecisao: "Prurido pode persistir 2–4 semanas após tratamento eficaz. Novas lesões ou sulcos após 4 semanas → retratar e revisar tratamento dos contatos.",
  clinica: {
    anamnese: [
      "Prurido noturno, tempo de evolução",
      "Contatos domiciliares ou institucionais com prurido",
      "Tratamentos prévios e como foram feitos (contatos tratados?)",
      "Gestação, lactação, idade do paciente"
    ],
    exameFisico: [
      "Sulcos (linhas finas e sinuosas), pápulas, escoriações",
      "Espaços interdigitais, punhos, cotovelos, axilas, cintura, nádegas, mamilos, genitais (nódulos no pênis/escroto)",
      "Lactentes: palmas, plantas, face e couro cabeludo",
      "Crostas espessas (crostosa), sinais de infecção secundária"
    ],
    diferenciais: [
      { dx: "Dermatite atópica", pista: "História atópica, dobras, sem contatos acometidos" },
      { dx: "Prurigo / picadas de inseto", pista: "Áreas expostas" },
      { dx: "Dermatite de contato", pista: "Relacionada a agente" },
      { dx: "Pediculose corporal", pista: "Piolhos nas costuras das roupas" },
      { dx: "Prurido sistêmico", pista: "Sem lesões primárias; colestase, DRC, linfoma" }
    ],
    gravidade: [
      "Clássica: poucos ácaros, muito prurido",
      "Crostosa: milhares de ácaros, pouco prurido, imunossuprimidos"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Exame direto (raspado de sulco com óleo mineral) — opcional, se disponível.",
      porQue: "Confirmar ácaro, ovos ou fezes.",
      esperar: "—",
      interpretacao: "Positivo confirma; negativo não exclui.",
      limitacoes: "Baixa sensibilidade."
    }
  ],
  tratamento: [
    {
      droga: "Permetrina 5% loção ou creme",
      linha: "l1",
      dose: "Aplicar em todo o corpo, do pescoço para baixo (incluir couro cabeludo/face em < 2 anos e idosos), sob unhas",
      via: "Tópica, à noite",
      intervalo: "Deixar 8–12 h e tomar banho",
      duracao: "2 aplicações: dia 0 e dia 7",
      monitorizacao: "Irritação local",
      contraindicacoes: "< 2 meses",
      ajustes: "Segura na gestação e lactação. Reaplicar nas mãos se lavadas durante o período"
    },
    {
      droga: "Ivermectina",
      linha: "alt",
      dose: "200 mcg/kg (ex.: comprimido de 6 mg: 15–24 kg ½ cp; 25–35 kg 1 cp; 36–50 kg 1½ cp; 51–65 kg 2 cp; 66–79 kg 2½ cp; ≥ 80 kg: 200 mcg/kg)",
      via: "VO, com alimento",
      intervalo: "Dose única, repetir em 7–14 dias",
      duracao: "2 doses",
      monitorizacao: "—",
      contraindicacoes: "< 15 kg, gestantes, lactantes",
      ajustes: "Útil em surtos institucionais e adesão difícil à tópica. Crostosa: várias doses + tópico"
    },
    {
      droga: "Enxofre precipitado 5–10% em vaselina",
      linha: "alt",
      dose: "Aplicar em todo o corpo",
      via: "Tópica",
      intervalo: "1×/dia à noite",
      duracao: "3 noites consecutivas; repetir após 7 dias",
      monitorizacao: "Odor, sujeira",
      contraindicacoes: "—",
      ajustes: "Opção para < 2 meses e gestantes quando permetrina indisponível"
    },
    {
      droga: "Anti-histamínico para prurido",
      linha: "adj",
      dose: "Ex.: dexclorfeniramina 2 mg 8/8h (criança 0,15 mg/kg/dia) ou hidroxizina 25 mg à noite",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "Enquanto prurido",
      monitorizacao: "Sonolência",
      contraindicacoes: "< 2 anos (sedativos), glaucoma",
      ajustes: "Prurido residual pode durar semanas; corticoide tópico leve por poucos dias se eczematização"
    }
  ],
  destino: {
    agora: [
      "Tratar paciente e contatos no mesmo dia, orientar higiene das roupas"
    ],
    reavaliar: [
      "2–4 semanas após tratamento"
    ],
    alta: [
      "Pode retornar à escola/trabalho 24 h após a primeira aplicação"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Raramente; sarna crostosa com infecção extensa em imunossuprimido"
    ],
    transferencia: [
      "Dermatologia: sarna crostosa, falha após 2 tratamentos corretos",
      "Vigilância em saúde: surtos institucionais"
    ]
  },
  prescricao: {
    ambulatorial: "ADULTO E CRIANÇA ≥ 2 MESES — 1ª ESCOLHA (paciente e cada contato)\nUSO TÓPICO\n1. Permetrina 5% loção ou creme ------------------ 1 frasco/bisnaga por pessoa\n   Aplicar à noite em todo o corpo, do pescoço até a sola dos pés, inclusive entre os dedos, sob as unhas, umbigo e genitais. Em criança < 2 anos e idoso, incluir couro cabeludo e rosto (sem olhos e boca). Deixar 8 a 12 horas e tomar banho. Repetir após 7 dias.\n\nALTERNATIVA ORAL (≥ 15 kg, não gestante, não lactante)\nUSO ORAL\n2. Ivermectina 6 mg ------------------------------ ___ comprimidos\n   Tomar 200 mcg/kg em dose única, com alimento; repetir após 7 a 14 dias. (15–24 kg: ½ cp; 25–35 kg: 1 cp; 36–50 kg: 1½ cp; 51–65 kg: 2 cp; 66–79 kg: 2½ cp; ≥ 80 kg: 3 cp.)\n\nGESTANTE OU LACTENTE < 2 MESES (se permetrina não indicada/indisponível)\nUSO TÓPICO\n3. Enxofre precipitado 5% (lactente/gestante) a 10% em vaselina — manipulado ---- 1 pote\n   Aplicar em todo o corpo à noite por 3 noites seguidas; tomar banho 24 h após cada aplicação. Repetir após 7 dias.\n\nPARA COCEIRA\nUSO ORAL\n4. Dexclorfeniramina 2 mg ------------------------ 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas se coceira, por até 7 dias.\n   Criança 2–12 anos: dexclorfeniramina 0,4 mg/mL solução, 0,15 mg/kg/dia divididos de 8/8 h (respeitar a dose máxima da bula para a idade)."
  },
  orientacoesRetorno: [
    "Tratar todos da casa e parcerias sexuais no mesmo dia, mesmo quem não tem coceira",
    "No dia seguinte à 1ª aplicação, lavar roupas, toalhas e roupas de cama em água quente e secar ao sol/ferro quente; o que não puder lavar, guardar em saco plástico fechado por 3 dias",
    "Se lavar as mãos durante as 8–12 horas, reaplicar o produto nas mãos",
    "A coceira pode continuar por 2 a 4 semanas mesmo com o tratamento certo; não repetir o remédio por conta própria",
    "Pode voltar à escola ou ao trabalho 24 h após a 1ª aplicação",
    "Voltar se aparecerem feridas com pus, crostas grossas, febre, ou se surgirem lesões novas depois de 4 semanas",
    "Retorno na UBS em 2–4 semanas"
  ],
  fontes: [
    "CDC — Clinical care of scabies / Scabies treatment guidelines (2024)",
    "OMS — Scabies fact sheet (2023) e WHO Model List of Essential Medicines (2023)",
    "Ministério da Saúde — RENAME 2024 (permetrina 5%, ivermectina 6 mg)",
    "SBD — Escabiose: atualização terapêutica"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
