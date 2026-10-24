// Diverticulite aguda — não complicada e complicada (Hinchey)
registrarFicha({
  id: "diverticulite",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Diverticulite aguda",
  resumo: "Inflamação de divertículo colônico, em geral no sigmoide: dor em fossa ilíaca esquerda, febre e PCR elevada. Não complicada em imunocompetente pode ser tratada em casa e, em casos selecionados, sem antibiótico. Complicada (abscesso, perfuração, obstrução, fístula) é classificada por Hinchey e tratada no hospital.",
  palavrasChave: "diverticulite diverticulo sigmoide fossa iliaca esquerda hinchey abscesso pericolico peritonite purulenta fecal hartmann drenagem percutanea colonoscopia amoxicilina clavulanato ciprofloxacino metronidazol sem antibiotico",
  critico: {
    tempo: "Peritonite difusa: cirurgia",
    texto: "Diverticulite com peritonite generalizada (Hinchey III–IV) ou sepse: reanimação, antibiótico na 1ª hora e cirurgia de urgência."
  },
  alarmes: [
    "Peritonite difusa, ar livre extenso, choque",
    "Abscesso na TC",
    "Imunossupressão (corticoide, transplante, quimioterapia), idoso frágil, comorbidades graves",
    "Intolerância à via oral, dor intensa não controlada",
    "Pneumatúria ou fecalúria (fístula colovesical), obstrução",
    "Falha do tratamento ambulatorial em 48–72 h"
  ],
  condutaInicial: [
    "Hemograma, PCR, função renal, eletrólitos, urina tipo 1, beta-hCG (mulher em idade fértil), lactato se grave",
    "TC de abdome e pelve com contraste IV para confirmar e classificar (1º episódio, dúvida ou suspeita de complicação)",
    "Classificar: não complicada × complicada (Hinchey) e risco do paciente",
    "Não complicada + critérios de baixo risco → tratamento ambulatorial (antibiótico seletivo)",
    "Complicada → internação, jejum ou dieta líquida, antibiótico IV, cirurgia geral"
  ],
  fataisExcluir: [
    "Perfuração livre com peritonite fecal",
    "Neoplasia de cólon perfurada (simula diverticulite)",
    "Isquemia mesentérica / colite isquêmica",
    "Gestação ectópica, torção ovariana (mulheres)",
    "Aneurisma de aorta (idoso)"
  ],
  proximaDecisao: "Não complicada sem critérios de risco → casa, dieta líquida/leve, analgesia; antibiótico oral só se critérios. Abscesso pequeno → antibiótico IV; abscesso maior (≥ 3 cm pela ASCRS 2020; ≥ 4–5 cm pela WSES 2020) → drenagem percutânea guiada + antibiótico. Peritonite purulenta/fecal → cirurgia (Hartmann ou ressecção com anastomose ± ileostomia). Após episódio complicado ou sem colonoscopia recente → colonoscopia em 6–8 semanas.",
  clinica: {
    anamnese: [
      "Dor em fossa ilíaca esquerda (à direita em asiáticos e no cólon direito), febre, alteração do hábito intestinal",
      "Episódios prévios, colonoscopia prévia",
      "Sintomas urinários, pneumatúria, fecalúria, saída de fezes pela vagina (fístula)",
      "Perda de peso, sangramento, anemia (excluir câncer)",
      "Imunossupressão, comorbidades, anticoagulantes"
    ],
    exameFisico: [
      "Dor e defesa em fossa ilíaca esquerda; massa palpável (fleimão/abscesso)",
      "Peritonite localizada × difusa",
      "Sinais vitais, sinais de sepse",
      "Toque retal e exame pélvico se dúvida"
    ],
    diferenciais: [
      { dx: "Câncer colorretal", pista: "Perda de peso, anemia, espessamento longo e irregular na TC" },
      { dx: "Colite isquêmica / infecciosa / DII", pista: "Diarreia sanguinolenta, distribuição segmentar" },
      { dx: "Cólica ureteral / pielonefrite", pista: "Hematúria, dor lombar, piúria" },
      { dx: "Doença ginecológica", pista: "Ectópica, torção, DIP" },
      { dx: "Apendicite (diverticulite à direita)", pista: "TC" }
    ],
    gravidade: [
      "Hinchey Ia: fleimão/inflamação pericólica sem abscesso",
      "Hinchey Ib: abscesso pericólico (junto ao cólon)",
      "Hinchey II: abscesso pélvico, intra-abdominal distante ou retroperitoneal",
      "Hinchey III: peritonite purulenta generalizada",
      "Hinchey IV: peritonite fecal generalizada"
    ]
  },
  exames: [
    {
      nome: "Tomografia de abdome e pelve com contraste IV",
      pedido: "Tomografia de abdome e pelve com contraste endovenoso — suspeita de diverticulite aguda.",
      porQue: "Confirma, classifica (abscesso, ar livre) e exclui diferenciais.",
      esperar: "Divertículos com espessamento da parede e densificação da gordura.",
      interpretacao: "Classificar Hinchey/WSES; medir abscesso.",
      limitacoes: "Episódio recorrente típico, leve e com resposta clínica pode dispensar nova TC."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, ureia, creatinina, Na, K, urina tipo 1, beta-hCG (mulher em idade fértil); lactato e hemoculturas se sepse.",
      porQue: "Gravidade e diferenciais.",
      esperar: "Leucocitose, PCR alta.",
      interpretacao: "PCR muito elevada sugere complicação (pedir TC).",
      limitacoes: "—"
    },
    {
      nome: "Colonoscopia (após a fase aguda)",
      pedido: "Colonoscopia eletiva 6–8 semanas após o episódio de diverticulite.",
      porQue: "Excluir câncer após diverticulite complicada, quadro atípico ou sem colonoscopia recente de qualidade.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Contraindicada na fase aguda (risco de perfuração)."
    }
  ],
  tratamento: [
    {
      droga: "Observação sem antibiótico (não complicada selecionada)",
      linha: "l1",
      dose: "Dieta líquida/leve progressiva + analgesia",
      via: "VO",
      intervalo: "—",
      duracao: "Reavaliação em 48–72 h",
      monitorizacao: "Piora da dor, febre persistente, intolerância oral → reavaliar e iniciar antibiótico",
      contraindicacoes: "Imunossupressão, sepse, idoso frágil, comorbidades descompensadas, gestação, PCR muito alta, sintomas > 5 dias, fleimão extenso na TC, intolerância oral",
      ajustes: "Diverticulite não complicada confirmada por TC em imunocompetente (AGA 2021, ASCRS 2020, WSES 2020; estudos AVOD e DIABOLO)"
    },
    {
      droga: "Amoxicilina-clavulanato",
      linha: "l1",
      dose: "875/125 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "4–7 dias (até 10 dias se resposta lenta)",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Para não complicada com indicação de antibiótico. Alternativa: ciprofloxacino 500 mg VO 12/12 h + metronidazol 500 mg VO 8/8 h; ou sulfametoxazol-trimetoprima 800/160 mg 12/12 h + metronidazol. ClCr < 30: amoxicilina-clavulanato 500/125 mg 12/12 h"
    },
    {
      droga: "Ceftriaxona + metronidazol",
      linha: "l1",
      dose: "Ceftriaxona 2 g + metronidazol 500 mg",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "Complicada: 4 dias após controle do foco (drenagem/cirurgia); abscesso tratado só com antibiótico: até melhora clínica e completar 7–10 dias VO",
      monitorizacao: "Febre, PCR, leucograma, TC se não melhorar",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Sepse/choque ou hospitalar: piperacilina-tazobactam 4,5 g IV 6/6 h. Transição VO para amoxicilina-clavulanato quando tolerar dieta"
    },
    {
      droga: "Drenagem percutânea guiada por imagem",
      linha: "l1",
      dose: "—",
      via: "Percutânea (TC/USG)",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Débito e aspecto do dreno",
      contraindicacoes: "Sem janela segura",
      ajustes: "Abscesso grande (≥ 3 cm ASCRS; ≥ 4–5 cm WSES). Pequeno: só antibiótico"
    },
    {
      droga: "Cirurgia (Hartmann ou ressecção com anastomose ± ostomia de proteção)",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "Urgente em Hinchey III–IV",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Paciente instável: Hartmann ou cirurgia de controle de dano. Colectomia eletiva após recorrências: decisão individual, não pelo número de episódios"
    },
    {
      droga: "Analgesia",
      linha: "adj",
      dose: "Dipirona 1 g VO/IV · paracetamol 750 mg VO",
      via: "VO/IV",
      intervalo: "6/6 h",
      duracao: "Enquanto dor",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Evitar AINE (associado a perfuração) e opioide em excesso (constipação)"
    }
  ],
  destino: {
    agora: [
      "Não complicada de baixo risco: alta com reavaliação em 48–72 h",
      "Complicada ou com fatores de risco: internação e cirurgia geral"
    ],
    reavaliar: [
      "48–72 h após início do tratamento (clínico) — sem melhora: TC"
    ],
    alta: [
      "Tolerando dieta, dor controlada, sem febre, com acompanhamento",
      "Colonoscopia em 6–8 semanas quando indicada"
    ],
    observacao: [
      "Dúvida de tolerância oral: observação de 12–24 h"
    ],
    internacao: [
      "Complicada (Hinchey Ib–IV), sepse, imunossupressão, intolerância oral, dor refratária, falha ambulatorial"
    ],
    transferencia: [
      "Sem TC/cirurgião para casos complicados: regular após antibiótico IV"
    ]
  },
  prescricao: {
    ambulatorial: "DIVERTICULITE NÃO COMPLICADA — TRATAMENTO EM CASA\nDIETA\n1. Dieta líquida/leve por 2 a 3 dias e depois progredir conforme tolerância.\n\nUSO ORAL\n2. Dipirona 500 mg ------------------------------ 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Paracetamol 750 mg ---------------------------- 1 caixa\n   Tomar 1 comprimido de 8 em 8 horas se dor persistente.\n\nSE INDICADO ANTIBIÓTICO\n4. Amoxicilina + clavulanato 875/125 mg ---------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   (Alergia à penicilina: ciprofloxacino 500 mg de 12/12 h + metronidazol 500 mg de 8/8 h por 7 dias.)\n\nReavaliação em 48 a 72 horas. Colonoscopia em 6 a 8 semanas se indicada.\nAPÓS A CRISE: dieta rica em fibras (ou psyllium 5 g 1–2 vezes ao dia), água, atividade física.",
    hospitalar: "DIVERTICULITE COMPLICADA — ADULTO\n1. Jejum (ou dieta líquida se Hinchey Ib estável, conforme cirurgião).\n2. Ringer lactato 1.000 mL IV de 8/8 h (ajustar à volemia).\n3. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia.\n4. Metronidazol 500 mg/100 mL IV em 30–60 min de 8/8 h.\n   (Sepse/choque: piperacilina-tazobactam 4,5 g IV de 6/6 h no lugar de 3 e 4.)\n5. Dipirona 1 g IV lento de 6/6 h.\n6. Morfina 1 mg/mL (diluída): 2–4 mg IV se dor intensa, até de 4/4 h.\n7. Ondansetrona 4 mg IV de 8/8 h se náusea.\n8. Enoxaparina 40 mg SC 1 vez ao dia.\n9. Sinais vitais de 4/4 h; PCR e hemograma a cada 48 h.\n10. Cirurgia geral: avaliar drenagem percutânea (abscesso) ou cirurgia (peritonite)."
  },
  orientacoesRetorno: [
    "Fazer dieta leve nos primeiros dias e beber bastante líquido",
    "Voltar imediatamente se: febre alta, dor que aumenta ou se espalha pela barriga, vômitos, não conseguir comer ou beber, barriga dura, ar ou fezes na urina",
    "Reavaliação em 2–3 dias, mesmo se melhorar",
    "Depois da crise: alimentação rica em fibras, atividade física, perder peso e parar de fumar ajudam a evitar novas crises",
    "Fazer a colonoscopia quando solicitada"
  ],
  fontes: [
    "WSES — Guidelines for the management of acute left sided colonic diverticulitis in the emergency setting (Sartelli et al., 2020)",
    "ASCRS — Clinical Practice Guidelines for the Management of Left-sided Colonic Diverticulitis (2020)",
    "AGA — Clinical Practice Update: Medical Management of Colonic Diverticulitis (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
