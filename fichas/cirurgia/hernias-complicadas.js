// Hérnias da parede abdominal encarceradas e estranguladas
registrarFicha({
  id: "hernias-complicadas",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hérnia encarcerada e estrangulada (inguinal, femoral, umbilical, incisional)",
  resumo: "Hérnia encarcerada: conteúdo irredutível, sem comprometimento vascular. Estrangulada: com isquemia do conteúdo (dor intensa contínua, pele alterada, febre, obstrução, peritonite). Encarcerada recente e sem sinais de estrangulamento pode ser reduzida manualmente; estrangulada vai direto para cirurgia.",
  palavrasChave: "hernia encarcerada estrangulada inguinal femoral crural umbilical incisional epigastrica obturadora taxis reducao manual herniorrafia hernioplastia tela obstrucao intestinal richter",
  critico: {
    tempo: "Estrangulada: não reduzir, operar",
    texto: "Sinais de estrangulamento (dor intensa contínua, hiperemia/equimose, febre, leucocitose, lactato alto, peritonite, obstrução) contraindicam a redução manual: cirurgia de urgência."
  },
  alarmes: [
    "Dor contínua e intensa, pele vermelha, arroxeada ou quente sobre a hérnia",
    "Febre, taquicardia, leucocitose, lactato elevado",
    "Vômitos, distensão, parada de eliminação (obstrução)",
    "Hérnia femoral (abaixo do ligamento inguinal, mulher idosa): alto risco de estrangulamento",
    "Irredutível há muitas horas",
    "Dor abdominal após redução (redução em bloco ou alça inviável reduzida)"
  ],
  condutaInicial: [
    "Examinar todos os orifícios (inguinal, femoral, umbilical, incisional); em idosa magra com obstrução sem hérnia visível, pensar em obturadora",
    "Analgesia IV; jejum",
    "Sinais de estrangulamento ou obstrução → hidratação, SNG se vômitos, antibiótico, exames e cirurgia",
    "Sem sinais de estrangulamento → tentar redução manual (taxis) com analgesia/sedação leve e posição de Trendelenburg",
    "Exames: hemograma, PCR, lactato, eletrólitos, função renal, coagulograma",
    "USG ou TC se dúvida diagnóstica ou suspeita de sofrimento de alça (não atrasar cirurgia evidente)"
  ],
  fataisExcluir: [
    "Estrangulamento com necrose de alça",
    "Hérnia de Richter (pinçamento parcial da parede, pode não obstruir)",
    "Torção testicular, linfadenite inguinal, hidrocele (diferenciais na região inguinal)",
    "Obstrução intestinal por outra causa"
  ],
  proximaDecisao: "Redução manual eficaz → observar 4–6 h (dor, abdome, aceitação oral) e agendar cirurgia eletiva prioritária. Redução ineficaz após tentativa adequada, sinais de estrangulamento ou femoral encarcerada → cirurgia de urgência (com tela em campo limpo/limpo-contaminado sem necrose conforme WSES).",
  clinica: {
    anamnese: [
      "Hérnia conhecida? Desde quando irredutível? Dor contínua ou em cólica?",
      "Vômitos, distensão, eliminação de gases e fezes",
      "Cirurgias prévias (incisional), tosse crônica, constipação, esforço, ascite (umbilical em cirrótico)",
      "Anticoagulantes, comorbidades"
    ],
    exameFisico: [
      "Tamanho, consistência, dor, calor, cor da pele sobre a hérnia",
      "Relação com o ligamento inguinal (inguinal acima e medial ao tubérculo púbico; femoral abaixo e lateral)",
      "Exame do abdome: distensão, peritonite",
      "Testículos (diferenciar de torção, hidrocele)"
    ],
    diferenciais: [
      { dx: "Linfadenite inguinal", pista: "Massa endurecida, lesão em membro inferior/genital" },
      { dx: "Hidrocele / cisto do cordão", pista: "Transiluminação, sem impulso à tosse" },
      { dx: "Torção testicular", pista: "Dor testicular súbita, testículo elevado, reflexo cremastérico ausente" },
      { dx: "Abscesso de parede / seroma", pista: "Flutuação, sem conteúdo intestinal na USG" },
      { dx: "Aneurisma femoral", pista: "Massa pulsátil — nunca puncionar" }
    ],
    gravidade: [
      "Redutível → encarcerada (irredutível sem isquemia) → estrangulada (isquemia)",
      "Fatores de risco para estrangulamento: hérnia femoral, colo estreito, idade avançada, duração da irredutibilidade",
      "Umbilical em cirrótico com ascite: risco de ruptura cutânea e peritonite (cirurgia/hepatologia)"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, gasometria venosa com lactato, ureia, creatinina, Na, K, TP/INR, TTPa, tipagem.",
      porQue: "Sinais de estrangulamento e preparo cirúrgico.",
      esperar: "Normal na encarcerada simples.",
      interpretacao: "Leucocitose, PCR e lactato elevados sugerem estrangulamento.",
      limitacoes: "Normais não excluem estrangulamento inicial."
    },
    {
      nome: "Ultrassonografia de parede abdominal / região inguinal",
      pedido: "Ultrassonografia de parede abdominal (região inguinal/femoral/umbilical) com Doppler — hérnia irredutível.",
      porQue: "Confirmar hérnia, conteúdo e fluxo; diferenciais.",
      esperar: "Alça no saco herniário, líquido, fluxo ausente se estrangulamento.",
      interpretacao: "—",
      limitacoes: "Operador-dependente."
    },
    {
      nome: "Tomografia de abdome",
      pedido: "Tomografia de abdome e pelve com contraste endovenoso — hérnia encarcerada / obstrução.",
      porQue: "Obstrução, hérnias internas/obturadora, sofrimento de alça, obeso.",
      esperar: "—",
      interpretacao: "Parede sem realce, líquido no saco, densificação → estrangulamento.",
      limitacoes: "Não atrasar cirurgia em quadro clínico evidente."
    }
  ],
  tratamento: [
    {
      droga: "Redução manual (taxis)",
      linha: "l1",
      dose: "Trendelenburg, flexão do quadril; pressão suave e contínua no colo do saco, alongando-o e direcionando o conteúdo pelo orifício",
      via: "Manual",
      intervalo: "1–2 tentativas",
      duracao: "Sem força excessiva",
      monitorizacao: "Observação 4–6 h após a redução: dor, peritonite, aceitação oral",
      contraindicacoes: "Sinais de estrangulamento, peritonite, obstrução prolongada, hérnia femoral (relativa), irredutibilidade prolongada",
      ajustes: "Analgesia com morfina e, se necessário, sedação leve com monitorização. Gelo local por 15–20 min pode ajudar"
    },
    {
      droga: "Morfina",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg), titular",
      via: "IV",
      intervalo: "A cada 5–10 min até analgesia",
      duracao: "—",
      monitorizacao: "FR, SpO₂, sedação",
      contraindicacoes: "—",
      ajustes: "Idoso: começar com 1–2 mg. Midazolam 1–2 mg IV só com monitorização e material de via aérea"
    },
    {
      droga: "Cefazolina (profilaxia, hernioplastia com tela)",
      linha: "l1",
      dose: "2 g (3 g se ≥ 120 kg)",
      via: "IV",
      intervalo: "Até 60 min antes da incisão; repetir a cada 4 h de cirurgia",
      duracao: "Dose única",
      monitorizacao: "—",
      contraindicacoes: "Alergia grave: clindamicina 900 mg IV",
      ajustes: "Se necrose/ressecção intestinal: ceftriaxona 2 g + metronidazol 500 mg (tratamento), conforme achado"
    },
    {
      droga: "Herniorrafia/hernioplastia de urgência ± ressecção intestinal",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "Urgente se estrangulada ou redução ineficaz",
      monitorizacao: "Viabilidade da alça",
      contraindicacoes: "—",
      ajustes: "WSES: tela sintética pode ser usada em campo limpo/limpo-contaminado; em campo contaminado, individualizar"
    }
  ],
  destino: {
    agora: [
      "Sem sinais de estrangulamento: tentar redução manual com analgesia",
      "Com sinais: cirurgia de urgência"
    ],
    reavaliar: [
      "4–6 h após a redução: abdome, dor, sinais vitais, aceitação oral"
    ],
    alta: [
      "Redução eficaz, sem dor residual, abdome normal, aceitando dieta",
      "Encaminhar com prioridade para cirurgia eletiva (dias a poucas semanas)"
    ],
    observacao: [
      "Após redução manual: 4–6 h em observação"
    ],
    internacao: [
      "Redução ineficaz, estrangulamento, obstrução, hérnia femoral encarcerada"
    ],
    transferencia: [
      "Sem cirurgião: regular com urgência; não insistir em reduções repetidas"
    ]
  },
  prescricao: {
    hospitalar: "HÉRNIA ENCARCERADA/ESTRANGULADA — ADULTO\n1. Jejum.\n2. Ringer lactato 1.000 mL IV de 8/8 h (bolus 500 mL se desidratado).\n3. Dipirona 1 g IV lento de 6/6 h.\n4. Morfina 1 mg/mL (diluída): 2–4 mg IV a cada 10 min até analgesia; depois 2–4 mg de 4/4 h SN.\n5. Ondansetrona 4 mg IV de 8/8 h se náusea.\n6. SNG aberta se vômitos/obstrução.\n7. Se estrangulamento: ceftriaxona 2 g IV 1 vez ao dia + metronidazol 500 mg IV de 8/8 h.\n8. Exames: hemograma, PCR, lactato, Na, K, ureia, creatinina, coagulograma, tipagem.\n9. Avaliação da cirurgia geral.",
    ambulatorial: "APÓS REDUÇÃO MANUAL EFICAZ\nUSO ORAL\n1. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n2. Psyllium 5 g (sachê) -------------------------- 30 sachês\n   Dissolver 1 sachê em 1 copo de água 1 vez ao dia (evitar esforço para evacuar).\n\nEncaminhamento prioritário à cirurgia geral para correção eletiva."
  },
  orientacoesRetorno: [
    "Evitar pegar peso e fazer força até a cirurgia; tratar tosse e intestino preso",
    "Voltar imediatamente se a hérnia sair e não voltar, ficar dura, vermelha ou muito dolorida, ou se tiver vômitos, barriga inchada ou não eliminar gases",
    "A cirurgia deve ser feita logo: hérnia que já prendeu tem risco de prender de novo",
    "Não usar cintas apertadas sobre a hérnia sem orientação"
  ],
  fontes: [
    "WSES — 2017 update of the guidelines for emergency repair of complicated abdominal wall hernias (Birindelli et al., 2017)",
    "HerniaSurge Group — International guidelines for groin hernia management (2018) e atualização EHS/AHS (2023)",
    "EHS/AHS — Guidelines for treatment of umbilical and epigastric hernias (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
