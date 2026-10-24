// Trauma na gestante
registrarFicha({
  id: "trauma-gestante",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Trauma na gestante",
  resumo: "Atendimento ATLS adaptado à gestação: a melhor conduta para o feto é ressuscitar a mãe. Deslocamento uterino a partir de 20 semanas, monitorização fetal por pelo menos 4–6 h, Kleihauer-Betke e anti-D na Rh negativo, cesárea perimortem na PCR.",
  palavrasChave: "trauma gestante gravida atls acidente transito queda agressao violencia domestica deslocamento uterino veia cava kleihauer betke anti d imunoglobulina cesarea perimortem histerotomia ressuscitativa descolamento placenta dpp rotura uterina fast cinto de seguranca",
  critico: {
    tempo: "Útero para a esquerda ≥ 20 sem",
    texto: "Gestante com fundo uterino na cicatriz umbilical ou acima: deslocar o útero manualmente para a esquerda (ou inclinar a prancha 15–30° com o lado direito elevado) para liberar a veia cava. PCR sem retorno em 4 min: cesárea perimortem, com nascimento em até 5 min."
  },
  alarmes: [
    "Taquicardia, hipotensão ou índice de choque ≥ 0,9 (a gestante perde até 30% da volemia antes da hipotensão)",
    "Sangramento vaginal, dor ou hipertonia uterina, contrações (DPP)",
    "BCF ausente, < 110 ou desacelerações tardias (sofrimento fetal é sinal precoce de choque materno)",
    "Perda de líquido amniótico",
    "Útero assimétrico, partes fetais palpáveis (rotura uterina)",
    "Lesão por violência doméstica (risco de nova agressão e morte)"
  ],
  condutaInicial: [
    "ATLS: X (hemorragia exsanguinante), A com proteção cervical, B, C, D, E — prioridade é a mãe",
    "≥ 20 semanas: deslocamento uterino manual para a esquerda ou prancha inclinada 15–30° (lado direito para cima)",
    "O₂ para SpO₂ ≥ 95%; 2 acessos calibrosos acima do diafragma; cristaloide aquecido e sangue O negativo se choque",
    "Evitar vasopressor antes de repor volume (reduz fluxo uterino)",
    "Avaliação secundária obstétrica: altura uterina (IG), tônus, contrações, BCF, sangramento ou líquido vaginal, especular",
    "Exames: hemograma, tipagem ABO/Rh, Coombs indireto, coagulograma, fibrinogênio, Kleihauer-Betke se Rh negativo",
    "FAST e exames de imagem necessários não devem ser negados (proteger o abdome quando possível)",
    "≥ 20–24 semanas: cardiotocografia contínua por no mínimo 4–6 h (ATLS: 6 h)",
    "Rh negativo: imunoglobulina anti-D 300 mcg IM em até 72 h"
  ],
  fataisExcluir: [
    "Choque hemorrágico materno (lesão esplênica, hepática, pélvica, retroperitoneal)",
    "Descolamento prematuro de placenta (até 48 h após trauma, mesmo leve)",
    "Rotura uterina",
    "Hemorragia feto-materna / aloimunização",
    "Embolia amniótica",
    "TCE grave, pneumotórax hipertensivo"
  ],
  proximaDecisao: "Mãe estável, CTG sem alterações e sem contrações, sangramento, dor ou perda de líquido após 4–6 h: alta com orientação. Contrações frequentes (≥ 1 em 10 min ou ≥ 4–6/h), sangramento, dor uterina, CTG alterada, fibrinogênio baixo ou trauma grave: internação com monitorização por 24 h. Sofrimento fetal com feto viável e mãe estável: cesárea.",
  clinica: {
    anamnese: [
      "Mecanismo (colisão, uso e posição do cinto, queda, agressão, queimadura, arma)",
      "IG (DUM, USG), pré-natal, complicações prévias",
      "Dor abdominal, contrações, sangramento, perda de líquido, movimentos fetais",
      "Tipo sanguíneo; vacinação antitetânica",
      "Rastreio de violência por parceiro íntimo (perguntar em privado)"
    ],
    exameFisico: [
      "ATLS completo; lembrar que FC 10–20 bpm maior e PA 5–15 mmHg menor no 2º trimestre são fisiológicas",
      "Altura uterina: cicatriz umbilical ≈ 20 semanas; rebordo costal ≈ 34–36 semanas",
      "Marca do cinto no abdome, equimoses",
      "Tônus e dor uterina, contrações, BCF",
      "Especular: sangue, líquido; toque só após excluir placenta prévia"
    ],
    diferenciais: [
      { dx: "Contrações sem DPP", pista: "Contrações esparsas que cessam, sem sangramento, CTG normal" },
      { dx: "DPP", pista: "Dor, hipertonia, sangramento (pode ser oculto), contrações frequentes, CTG alterada" },
      { dx: "Rotura uterina", pista: "Choque, partes fetais palpáveis, BCF ausente" },
      { dx: "Lesão intra-abdominal materna", pista: "FAST positivo, dor fora do útero, choque" },
      { dx: "Pré-eclâmpsia / eclâmpsia", pista: "Convulsão ou PA alta após 20 semanas — pode simular TCE" }
    ],
    gravidade: [
      "Volemia aumenta até ~50%: sinais de choque aparecem tarde",
      "PaCO₂ normal da gestante é ~30 mmHg: PaCO₂ de 35–40 pode indicar falência respiratória iminente",
      "Bicarbonato sérico menor e leucocitose até ~15.000 são fisiológicos",
      "Trauma menor também causa DPP: todo trauma ≥ 20 semanas deve ser monitorizado"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Hemograma, tipagem ABO/Rh, Coombs indireto, prova cruzada, TP, TTPa, fibrinogênio, gasometria com lactato, beta-hCG se gestação não confirmada.",
      porQue: "Avaliar perda, coagulopatia (DPP) e necessidade de anti-D.",
      esperar: "Fibrinogênio > 400 mg/dL no 3º trimestre.",
      interpretacao: "Fibrinogênio < 200 mg/dL sugere DPP com coagulopatia. Fibrinogênio 'normal' de não gestante pode já ser baixo.",
      limitacoes: "—"
    },
    {
      nome: "Teste de Kleihauer-Betke",
      pedido: "Teste de Kleihauer-Betke (pesquisa de hemácias fetais no sangue materno).",
      porQue: "Quantificar hemorragia feto-materna e ajustar dose de anti-D na Rh negativo.",
      esperar: "Negativo.",
      interpretacao: "Positivo indica hemorragia feto-materna; dose extra de anti-D conforme volume estimado. Não descarta DPP se negativo.",
      limitacoes: "Não está disponível em muitos serviços; na falta, fazer anti-D 300 mcg e repetir se grande sangramento."
    },
    {
      nome: "Imagem",
      pedido: "FAST (e-FAST). USG obstétrica (vitalidade, placenta, líquido, IG). RX e TC conforme ATLS, com proteção abdominal quando não for o alvo.",
      porQue: "Identificar lesões maternas; a radiação de exames diagnósticos usuais está bem abaixo do limiar de dano fetal (~50 mGy).",
      esperar: "—",
      interpretacao: "USG tem baixa sensibilidade para DPP: CTG e clínica são mais úteis.",
      limitacoes: "Não atrasar exame necessário para a mãe."
    },
    {
      nome: "Cardiotocografia",
      pedido: "Cardiotocografia contínua por no mínimo 4–6 h (≥ 20–24 semanas).",
      porQue: "Detectar DPP e sofrimento fetal.",
      esperar: "Categoria I e < 1 contração a cada 10 min.",
      interpretacao: "Contrações frequentes, desacelerações tardias ou bradicardia: internar 24 h e avaliar parto.",
      limitacoes: "Abaixo de 24 semanas: só BCF."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide e hemocomponentes",
      linha: "l1",
      dose: "Ringer lactato aquecido 1 L inicial (até 20 mL/kg) e sangue precoce; O negativo até tipagem",
      via: "IV, acessos acima do diafragma",
      intervalo: "Conforme resposta",
      duracao: "—",
      monitorizacao: "FC, PA, diurese, BCF",
      contraindicacoes: "—",
      ajustes: "Transfusão maciça 1:1:1 (ver ficha choque-hemorragico). Usar sangue Rh negativo em mulheres em idade fértil sem tipagem"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "l1",
      dose: "300 mcg (1.500 UI)",
      via: "IM",
      intervalo: "Dose única em até 72 h",
      duracao: "—",
      monitorizacao: "Kleihauer-Betke para doses adicionais",
      contraindicacoes: "Rh positivo; já sensibilizada",
      ajustes: "Toda gestante Rh negativo não sensibilizada vítima de trauma abdominal, independente do Kleihauer"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "1 g IV em 10 min; depois 1 g IV em 8 h",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Após 3 h do trauma",
      ajustes: "Trauma com hemorragia significativa (CRASH-2); gestação não contraindica"
    },
    {
      droga: "Profilaxia antitetânica",
      linha: "adj",
      dose: "dTpa ou dT 0,5 mL conforme situação vacinal",
      via: "IM",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "dTpa é a vacina indicada na gestação a partir de 20 semanas (ver ficha tetano-profilaxia)"
    },
    {
      droga: "Betametasona",
      linha: "adj",
      dose: "12 mg",
      via: "IM",
      intervalo: "24/24 h, 2 doses",
      duracao: "1 ciclo",
      monitorizacao: "Glicemia",
      contraindicacoes: "Não atrasar cirurgia de urgência",
      ajustes: "24–33 semanas e 6 dias com risco de parto em 7 dias"
    },
    {
      droga: "Vasopressor antes de volume / tocólise na suspeita de DPP",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Vasopressor sem volume reduz perfusão uteroplacentária. Tocólise pode mascarar DPP",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Trauma grave: sala de trauma com cirurgião, obstetra e neonatologista",
      "Trauma leve ≥ 20 semanas: maternidade/serviço com CTG para monitorização"
    ],
    reavaliar: [
      "Sinais vitais de 15/15 min; CTG contínua 4–6 h; sangramento, dor e contrações",
      "Hb e fibrinogênio se suspeita de DPP"
    ],
    alta: [
      "Mãe estável, sem dor, sangramento ou perda de líquido; CTG normal sem contrações frequentes após 4–6 h",
      "Rh negativo com anti-D feita; plano de segurança se violência; retorno ao pré-natal em 1 semana"
    ],
    observacao: [
      "Trauma leve: 4–6 h de CTG"
    ],
    internacao: [
      "Contrações ≥ 1 a cada 10 min, sangramento, dor uterina, CTG alterada, fibrinogênio baixo, perda de líquido: monitorização 24 h",
      "Lesão materna que exija internação"
    ],
    transferencia: [
      "Centro de trauma com maternidade e UTI neonatal após estabilização"
    ]
  },
  prescricao: {
    hospitalar: "TRAUMA NA GESTANTE (IG: ___ semanas; Rh: ___)\n1. Dieta zero.\n2. Deslocamento uterino manual para a esquerda ou prancha inclinada 15–30° (lado direito elevado) se ≥ 20 semanas; colar cervical se indicado.\n3. O₂ por máscara para SpO₂ ≥ 95%; 2 acessos 14–16G em membros superiores.\n4. Ringer lactato aquecido 1.000 mL IV rápido se choque; concentrado de hemácias O negativo se sem resposta.\n5. Ácido tranexâmico 1 g + SF 0,9% 100 mL IV em 10 min, depois 1 g em SF 0,9% 250 mL IV em 8 h (se hemorragia e < 3 h do trauma).\n6. Imunoglobulina anti-D 300 mcg IM, dose única, se Rh negativo e Coombs indireto negativo.\n7. Analgesia: paracetamol 1 g IV de 6/6 h; morfina 2–4 mg IV se dor intensa (avisar neonatologia se perto do parto). Evitar AINE.\n8. Exames: hemograma, tipagem, Coombs indireto, prova cruzada, TP, TTPa, fibrinogênio, Kleihauer-Betke, gasometria com lactato; FAST; USG obstétrica.\n9. Controles: sinais vitais de 15/15 min; cardiotocografia contínua por no mínimo 4–6 h; observar sangramento e perda de líquido; diurese.\n10. Avaliar situação vacinal antitetânica."
  },
  orientacoesRetorno: [
    "Usar o cinto de três pontos: faixa de baixo abaixo da barriga, sobre o quadril; faixa diagonal entre as mamas, ao lado da barriga",
    "Voltar imediatamente nas próximas 48 h se: dor ou barriga dura, sangramento, perda de líquido, contrações, bebê mexendo menos, tontura",
    "Se sofre violência: Disque 180 (Central de Atendimento à Mulher) ou 190; a equipe pode ajudar com proteção e rede de apoio",
    "Retorno ao pré-natal em até 1 semana"
  ],
  tabelas: [
    {
      titulo: "Cesárea perimortem (histerotomia ressuscitativa)",
      colunas: ["Item", "Conduta"],
      linhas: [
        ["Indicação", "PCR materna com fundo uterino na cicatriz umbilical ou acima (≈ ≥ 20 semanas), sem RCE após RCP de alta qualidade com deslocamento uterino"],
        ["Tempo", "Decidir e iniciar em 4 min de PCR; nascimento até o 5º minuto"],
        ["Local", "No próprio local da PCR; não transportar para centro cirúrgico"],
        ["Técnica", "Incisão vertical mediana, histerotomia, retirar o feto, manter RCP durante todo o procedimento"],
        ["Objetivo", "Melhorar o retorno venoso e a RCP materna; benefício fetal é secundário"],
        ["Após", "Clampear cordão, entregar RN à equipe de reanimação; se RCE, controle de hemorragia e antibiótico"]
      ],
      nota: "AHA 2020 / Scientific Statement Cardiac Arrest in Pregnancy (2015). Durante a RCP: compressões com deslocamento uterino, desfibrilação com as mesmas cargas, suspender MgSO₄ e dar gluconato de cálcio se toxicidade."
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS: Advanced Trauma Life Support, 10ª ed. (2018), capítulo Trauma na gestação",
    "AHA — Guidelines for CPR and ECC (2020) e Scientific Statement: Cardiac arrest in pregnancy (2015)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "SOGC — Clinical Practice Guideline nº 341: Diagnosis and management of trauma in pregnancy (2015)",
    "ACOG — Committee Opinion nº 723: Guidelines for diagnostic imaging during pregnancy and lactation (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
