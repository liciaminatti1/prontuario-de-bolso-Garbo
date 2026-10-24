// Abdome agudo perfurativo — úlcera péptica perfurada e pneumoperitônio
registrarFicha({
  id: "abdome-agudo-perfurativo",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Abdome agudo perfurativo (úlcera perfurada, pneumoperitônio)",
  resumo: "Dor abdominal súbita e intensa, logo difusa, com abdome em tábua e ar livre na cavidade. Causa mais comum: úlcera péptica perfurada (AINE, H. pylori, tabagismo). Outras: diverticulite, corpo estranho, neoplasia, iatrogenia. Tratamento: reanimação, antibiótico, IBP e cirurgia de urgência.",
  palavrasChave: "abdome agudo perfurativo ulcera perfurada perfuracao pneumoperitonio ar livre peritonite abdome em tabua jobert rafia graham omentoplastia boey aine h pylori",
  critico: {
    tempo: "Peritonite: cirurgia em < 6 h",
    texto: "Cada hora de atraso na cirurgia da úlcera perfurada aumenta a mortalidade. Reanimar, antibiótico, IBP, sonda nasogástrica e centro cirúrgico sem demora."
  },
  alarmes: [
    "Choque, lactato elevado, oligúria",
    "Peritonite generalizada",
    "Idade > 70 anos, comorbidades graves, > 24 h de evolução (escore de Boey alto)",
    "Uso de corticoide ou imunossupressor (sinais mascarados)",
    "Hematêmese associada (úlcera perfurada e sangrante)"
  ],
  condutaInicial: [
    "Monitor, 2 acessos calibrosos, oxigênio se SpO₂ < 94%",
    "Cristaloide guiado por perfusão; vasopressor se choque refratário (ver ficha choque/sepse)",
    "Jejum, sonda nasogástrica aberta em frasco, sonda vesical para diurese",
    "Antibiótico de amplo espectro na 1ª hora; IBP IV",
    "Exames: hemograma, PCR, lactato, função renal, eletrólitos, lipase, coagulograma, tipagem; hemoculturas se sepse",
    "RX de tórax em pé (ou decúbito lateral esquerdo com raios horizontais) e TC de abdome se estável",
    "Cirurgião imediatamente"
  ],
  fataisExcluir: [
    "Choque séptico de foco abdominal",
    "Isquemia mesentérica com perfuração",
    "Pancreatite aguda grave (lipase alta, sem ar livre)",
    "IAM inferior e dissecção de aorta",
    "Ruptura de esôfago (Boerhaave) — ver ficha ruptura-esofagica"
  ],
  proximaDecisao: "Pneumoperitônio + peritonite → cirurgia (laparoscópica ou aberta): rafia com omentoplastia (Graham) na úlcera; ressecção na perfuração colônica. Tratamento não operatório (Taylor) só em casos muito selecionados: estável, sem peritonite difusa, perfuração bloqueada na TC com contraste, < 70 anos, com reavaliação cirúrgica frequente. Pós-operatório: pesquisar e tratar H. pylori e suspender AINE.",
  clinica: {
    anamnese: [
      "Dor súbita, em pontada, epigástrica que se generaliza ('facada')",
      "Uso de AINE, AAS, corticoide; tabagismo; etilismo; crack/cocaína",
      "Dispepsia ou úlcera prévia, H. pylori não tratado",
      "Doença diverticular, endoscopia/colonoscopia recente, ingestão de corpo estranho",
      "Tempo desde o início (> 24 h piora o prognóstico)"
    ],
    exameFisico: [
      "Paciente imóvel, evitando movimentos; respiração superficial",
      "Abdome em tábua, descompressão dolorosa difusa",
      "Perda da macicez hepática à percussão (sinal de Jobert)",
      "Taquicardia, febre (pode faltar no início), hipotensão",
      "Dor referida no ombro (irritação diafragmática)"
    ],
    diferenciais: [
      { dx: "Pancreatite aguda", pista: "Lipase ≥ 3× o limite superior, sem ar livre na TC" },
      { dx: "Colecistite / colangite", pista: "Murphy, USG compatível" },
      { dx: "Isquemia mesentérica", pista: "Dor desproporcional, FA, acidose" },
      { dx: "Pneumoperitônio sem perfuração", pista: "Pós-operatório recente (até ~7 dias), diálise peritoneal, pneumatose" },
      { dx: "Sinal de Chilaiditi", pista: "Cólon interposto entre fígado e diafragma (falso ar livre); haustrações visíveis" }
    ],
    gravidade: [
      "Escore de Boey (úlcera perfurada): 1 ponto para cada — choque na admissão (PAS < 100 mmHg), comorbidade clínica grave, perfuração > 24 h",
      "Boey 0: baixa mortalidade; 3 pontos: mortalidade muito alta (UTI pós-operatória)",
      "Escore PULP também pode ser usado (Peptic Ulcer Perforation score)"
    ]
  },
  exames: [
    {
      nome: "Radiografia de tórax em pé",
      pedido: "Radiografia de tórax PA em pé (incluindo cúpulas diafragmáticas). Se não puder ficar em pé: abdome em decúbito lateral esquerdo com raios horizontais.",
      porQue: "Rápida e disponível para ar livre subdiafragmático.",
      esperar: "Crescente de ar sob a cúpula diafragmática.",
      interpretacao: "Ar livre + quadro clínico = cirurgia; não precisa de TC se o paciente está instável.",
      limitacoes: "Não mostra ar livre em parte importante dos casos; ficar em pé 5–10 min antes do exame aumenta a sensibilidade."
    },
    {
      nome: "Tomografia de abdome",
      pedido: "Tomografia de abdome e pelve com contraste endovenoso (contraste oral hidrossolúvel se suspeita de perfuração gastroduodenal bloqueada).",
      porQue: "Exame mais sensível para pneumoperitônio; localiza a perfuração e coleções.",
      esperar: "Ar livre, líquido livre, defeito na parede, extravasamento de contraste.",
      interpretacao: "Bolhas de ar próximas ao local sugerem a origem (duodeno, sigmoide).",
      limitacoes: "Não atrasar cirurgia em paciente instável."
    },
    {
      nome: "Laboratório e gravidade",
      pedido: "Hemograma, PCR, lactato (gasometria venosa), ureia, creatinina, Na, K, lipase, TP/INR, TTPa, albumina, tipagem sanguínea; hemoculturas 2 pares se sepse.",
      porQue: "Gravidade, preparo cirúrgico, diferenciais.",
      esperar: "Leucocitose; lipase pode subir discretamente na úlcera perfurada.",
      interpretacao: "Lactato alto e creatinina elevada = pior prognóstico.",
      limitacoes: "—"
    },
    {
      nome: "Pesquisa de H. pylori",
      pedido: "Pesquisa de H. pylori (biópsia intraoperatória, sorologia ou teste respiratório/antígeno fecal após o quadro agudo).",
      porQue: "Erradicação reduz recidiva da úlcera.",
      esperar: "Positivo na maioria das úlceras duodenais perfuradas sem AINE.",
      interpretacao: "Positivo → tratar (ver ficha ulcera-peptica-hpylori).",
      limitacoes: "IBP causa falso-negativo em teste respiratório/antígeno fecal."
    }
  ],
  tratamento: [
    {
      droga: "Omeprazol IV",
      linha: "l1",
      dose: "40 mg (ou 80 mg em bolus inicial)",
      via: "IV",
      intervalo: "12/12 h",
      duracao: "Até via oral; depois 40 mg VO/dia por 8 semanas",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Diluir em 100 mL de SF e infundir em 20–30 min (ou bolus lento com diluente próprio). Pantoprazol 40 mg IV é equivalente"
    },
    {
      droga: "Ceftriaxona + metronidazol",
      linha: "l1",
      dose: "Ceftriaxona 2 g + metronidazol 500 mg",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "4 dias após controle do foco na maioria (estudo STOP-IT); individualizar",
      monitorizacao: "Febre, leucograma, culturas do líquido peritoneal",
      contraindicacoes: "Alergia grave a betalactâmico: ciprofloxacino 400 mg IV 12/12 h + metronidazol",
      ajustes: "Choque séptico, idoso frágil ou hospitalar: piperacilina-tazobactam 4,5 g IV 6/6 h ou meropenem 1 g IV 8/8 h. Antifúngico (fluconazol) em perfuração gastroduodenal só se imunossupressão, uso prolongado de IBP/antibiótico ou choque, conforme WSES"
    },
    {
      droga: "Cirurgia: rafia + omentoplastia (Graham), laparoscópica ou aberta",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "O quanto antes (idealmente < 6 h da admissão)",
      monitorizacao: "Fístula, abscesso residual, deiscência",
      contraindicacoes: "—",
      ajustes: "Úlcera gástrica: biopsiar bordas (excluir neoplasia). Perfuração colônica: ressecção (Hartmann ou anastomose conforme condições)"
    },
    {
      droga: "Tratamento não operatório (Taylor)",
      linha: "alt",
      dose: "SNG, jejum, IBP IV, antibiótico",
      via: "—",
      intervalo: "—",
      duracao: "Reavaliar a cada poucas horas",
      monitorizacao: "Piora em 12–24 h → cirurgia",
      contraindicacoes: "Peritonite difusa, choque, extravasamento de contraste, > 70 anos, imunossupressão",
      ajustes: "Só em centro com cirurgião e TC disponíveis"
    },
    {
      droga: "Morfina",
      linha: "adj",
      dose: "2–4 mg (titular)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle; depois 4/4 h SN",
      duracao: "—",
      monitorizacao: "FR, PA, sedação",
      contraindicacoes: "—",
      ajustes: "Evitar AINE (causa e piora da úlcera)"
    }
  ],
  destino: {
    agora: [
      "Reanimação, antibiótico, IBP, SNG e centro cirúrgico"
    ],
    reavaliar: [
      "Lactato, diurese, PA de 1/1 h até a cirurgia"
    ],
    alta: [
      "Pós-operatório sem complicação, aceitando dieta, com IBP, plano de erradicação de H. pylori e suspensão de AINE",
      "Endoscopia de controle em 6–8 semanas se úlcera gástrica"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Sempre; UTI se choque, Boey ≥ 2 ou disfunção orgânica"
    ],
    transferencia: [
      "Sem cirurgião: regular com urgência após reanimação, antibiótico, IBP e SNG"
    ]
  },
  prescricao: {
    hospitalar: "ABDOME AGUDO PERFURATIVO — PRÉ-OPERATÓRIO (ADULTO)\n1. Jejum absoluto.\n2. Sonda nasogástrica nº 16–18 aberta em frasco; anotar débito.\n3. Sonda vesical de demora; diurese horária.\n4. Ringer lactato 500 mL IV em 15–30 min; repetir conforme PA, FC, perfusão e diurese (choque séptico: 30 mL/kg nas primeiras 3 h, SSC 2021).\n5. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia.\n6. Metronidazol 500 mg/100 mL IV em 30–60 min de 8/8 h.\n   (Choque séptico: piperacilina-tazobactam 4,5 g IV de 6/6 h no lugar de 5 e 6.)\n7. Omeprazol 80 mg IV em bolus agora; depois 40 mg IV de 12/12 h.\n8. Dipirona 1 g IV lento de 6/6 h.\n9. Morfina 1 mg/mL (diluída): 2–4 mg IV a cada 10 min até controle da dor; depois 2–4 mg de 4/4 h SN.\n10. Ondansetrona 4 mg IV de 8/8 h se náusea.\n11. Hemoculturas 2 pares se sepse; tipagem e reserva de sangue.\n12. Sinais vitais de 1/1 h. Encaminhar ao centro cirúrgico.",
    ambulatorial: "ALTA PÓS-RAFIA DE ÚLCERA PERFURADA\nUSO ORAL\n1. Omeprazol 20 mg -------------------------------- 112 cápsulas\n   Tomar 2 cápsulas (40 mg) em jejum, 30 minutos antes do café, por 8 semanas.\n2. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Tratamento do H. pylori se positivo (ver ficha ulcera-peptica-hpylori).\n\nNÃO usar anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida, cetoprofeno, AAS para dor)."
  },
  orientacoesRetorno: [
    "Não usar anti-inflamatórios nem AAS sem indicação médica; parar de fumar e evitar álcool",
    "Tomar o omeprazol todos os dias até o fim e fazer o tratamento da bactéria, se indicado",
    "Voltar imediatamente se: febre, dor forte na barriga, vômitos, fezes pretas ou vômito com sangue, vermelhidão ou pus no corte",
    "Retorno com o cirurgião em 7–14 dias e com o gastroenterologista para controle (endoscopia se úlcera gástrica)"
  ],
  fontes: [
    "WSES — Perforated and bleeding peptic ulcer: WSES guidelines (Tarasconi et al., 2020)",
    "WSES/SIS — Management of intra-abdominal infections (2017); Sawyer et al. STOP-IT trial (NEJM, 2015)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II (2013)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
