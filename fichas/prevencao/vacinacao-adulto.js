// Vacinação do adulto e do idoso
registrarFicha({
  id: "vacinacao-adulto",
  especialidade: "prevencao",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Vacinação do adulto e do idoso (PNI)",
  resumo: "Vacinas do Calendário Nacional de Vacinação para adultos (20–59 anos) e idosos (≥ 60 anos) no SUS, com esquemas, contraindicações e quando encaminhar ao CRIE. Gestantes: ver ficha Vacinação na gestação.",
  palavrasChave: "vacina vacinacao adulto idoso calendario pni sus hepatite b dupla adulto dt dtpa tetano difteria febre amarela triplice viral sarampo caxumba rubeola scr influenza gripe covid pneumococica vpp23 vpc20 pneumo 20 hpv dengue butantan qdenga herpes zoster crie caderneta",
  critico: {
    tempo: "Toda consulta: rever a caderneta",
    texto: "Esquema interrompido não se reinicia: complete as doses que faltam. Sem comprovante, considere não vacinado. Vacinas atenuadas (febre amarela, tríplice viral) são contraindicadas em gestantes e imunossuprimidos."
  },
  alarmes: [
    "Imunossupressão (quimioterapia, corticoide em dose alta, biológicos, HIV com CD4 baixo, transplante): não aplicar vacinas atenuadas sem avaliação — encaminhar ao CRIE",
    "Gestante: não aplicar febre amarela nem tríplice viral (salvo situação de risco avaliada); seguir calendário da gestante",
    "Anafilaxia a dose anterior ou a componente da vacina: contraindicação àquela vacina",
    "Febre amarela em ≥ 60 anos e em nutriz de bebê < 6 meses: avaliar risco-benefício",
    "Reação grave após vacina (ESAVI grave): notificar e investigar"
  ],
  conduta: [
    "Pedir a caderneta em toda consulta; registrar no sistema (e-SUS APS/SI-PNI)",
    "Adulto 20–59 anos: hepatite B (3 doses), dT (3 doses e reforço a cada 10 anos), febre amarela (dose única), tríplice viral (2 doses até 29 anos; 1 dose de 30 a 59 anos)",
    "Idoso ≥ 60 anos: hepatite B e dT conforme histórico, influenza anual, covid-19 conforme calendário vigente, pneumocócica conforme grupo (VPP23 para acamados/institucionalizados; VPC20 para ≥ 85 anos e estratégias especiais)",
    "Febre amarela em ≥ 60 anos nunca vacinado: avaliar risco de exposição e comorbidades antes de indicar",
    "Dengue (Butantan-DV, dose única): implantação gradual em 2026 na faixa de 15 a 59 anos conforme grupos e municípios definidos pelo MS — conferir a orientação local",
    "Comorbidades (diabetes, cardiopatia, pneumopatia, DRC, asplenia, HIV, imunossupressão): encaminhar ao CRIE para pneumocócicas, hepatite A, varicela, meningocócicas, HPV e outras",
    "Profissionais de saúde: hepatite B (com anti-HBs após o esquema), dT/dTpa, tríplice viral 2 doses, influenza, covid-19, varicela se suscetível",
    "Herpes-zóster recombinante: não incorporada ao SUS (decisão de jan/2026); disponível na rede privada (SBIm recomenda a partir de 50 anos)"
  ],
  tabelas: [
    {
      titulo: "Calendário do adulto e do idoso no SUS",
      colunas: ["Vacina", "Quem", "Esquema", "Observações"],
      linhas: [
        ["Hepatite B (recombinante)", "Todas as idades, sem comprovação de 3 doses", "3 doses: 0, 1 e 6 meses", "Profissional de saúde e grupos de risco: anti-HBs 1–2 meses após a 3ª dose"],
        ["Dupla adulto (dT)", "Todos", "Sem dose prévia: 3 doses com intervalo de 60 dias (mínimo 30). Reforço a cada 10 anos", "Ferimento: ver ficha Tétano — profilaxia. Gestante: dTpa a partir de 20 semanas em cada gestação"],
        ["Febre amarela (atenuada)", "Não vacinados até 59 anos; ≥ 60 anos após avaliação", "Dose única (quem recebeu só dose fracionada em 2018 deve receber dose padrão)", "Contraindicada em gestante, imunossuprimido, alergia grave a ovo. Aplicar ≥ 10 dias antes de viagem a área de risco"],
        ["Tríplice viral (sarampo, caxumba, rubéola)", "20–29 anos: 2 doses · 30–59 anos: 1 dose", "Intervalo mínimo de 30 dias entre doses", "Profissional de saúde: 2 doses em qualquer idade. Contraindicada em gestante e imunossuprimido; evitar gravidez por 30 dias"],
        ["Influenza", "≥ 60 anos, gestantes, puérperas, profissionais de saúde, doenças crônicas e outros grupos prioritários", "1 dose anual (campanha)", "Pode ser aplicada junto com outras vacinas"],
        ["Covid-19", "≥ 60 anos, gestantes, imunocomprometidos e grupos prioritários", "Conforme calendário/nota técnica vigente do MS (idosos com doses periódicas)", "Conferir intervalo e vacina disponível no ano"],
        ["Pneumocócica 23-valente (VPP23)", "≥ 60 anos acamados ou institucionalizados; indígenas; grupos do CRIE", "1 dose; reforço único após 5 anos em grupos específicos", "—"],
        ["Pneumocócica 20-valente (VPC20)", "≥ 85 anos (rotina desde set/2026); 60–84 anos só em estratégias especiais e CRIE", "Dose única, conforme histórico vacinal", "Incorporada ao SUS em 2026; conferir orientação local"],
        ["HPV", "Rotina 9–14 anos. Adultos só em grupos especiais (imunossuprimidos, HIV, transplantados e outros definidos pelo MS)", "Conforme grupo (3 doses em imunossuprimidos)", "Encaminhar ao CRIE/sala de vacina com indicação"],
        ["Dengue (Butantan-DV)", "15–59 anos, em implantação gradual por grupos e municípios (2026)", "Dose única", "Atenuada: contraindicada em gestante e imunossuprimido"]
      ],
      nota: "Baseado na Instrução Normativa do Calendário Nacional de Vacinação 2026 e comunicações do MS até out/2026. O calendário muda a cada ano: confira a versão vigente no site do Ministério da Saúde."
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO DE VACINAÇÃO — SALA DE VACINA\nPaciente: ________ Idade: ___ Gestante: ( ) sim ( ) não  Imunossupressão: ( ) sim ( ) não\nFavor aplicar / atualizar conforme Calendário Nacional de Vacinação vigente:\n( ) Hepatite B — dose ___ de 3 (esquema 0, 1 e 6 meses)\n( ) Dupla adulto (dT) — dose ___ de 3 / reforço decenal\n( ) Febre amarela — dose única\n( ) Tríplice viral — dose ___ (2 doses até 29 anos; 1 dose de 30 a 59 anos)\n( ) Influenza — dose anual\n( ) Covid-19 — conforme esquema vigente\n( ) Pneumocócica ______ — conforme indicação (VPP23 / VPC20)\n( ) Dengue — conforme grupo e disponibilidade local\nAgendar doses seguintes e registrar na caderneta e no SI-PNI.\n\nENCAMINHAMENTO AO CRIE\nEncaminho ________ (diagnóstico: ________ ) para avaliação de imunobiológicos especiais (pneumocócicas, hepatite A, varicela, meningocócicas, HPV), conforme Manual dos CRIE vigente."
  },
  orientacoesRetorno: [
    "Trazer a caderneta de vacinação em todas as consultas",
    "Dor, vermelhidão e febre baixa por 1 a 2 dias após a vacina são esperadas; usar compressa fria e dipirona ou paracetamol se necessário",
    "Voltar imediatamente se falta de ar, inchaço no rosto, manchas pelo corpo ou desmaio nas primeiras horas após a vacina",
    "Febre amarela: febre, dor no corpo e dor de cabeça podem surgir 3 a 10 dias depois; procurar a UBS se icterícia, sangramento ou confusão",
    "Retornar na data marcada para as doses seguintes; dose atrasada não precisa recomeçar o esquema"
  ],
  encaminhar: [
    "CRIE: imunossupressão, asplenia, DRC, diabetes, cardiopatia ou pneumopatia crônica, HIV, transplante, candidatos a quimioterapia ou biológicos",
    "Notificar ESAVI grave no e-SUS Notifica"
  ],
  fontes: [
    "Ministério da Saúde — Instrução Normativa que instrui o Calendário Nacional de Vacinação 2026",
    "Ministério da Saúde — Calendário Técnico Nacional de Vacinação do Adulto e do Idoso (atualização jan/2026)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed. (2023)",
    "Ministério da Saúde — Incorporação da vacina pneumocócica 20-valente (jun/2026) e ampliação para ≥ 85 anos (set/2026)",
    "Ministério da Saúde/CONITEC — Decisão de não incorporação da vacina herpes-zóster recombinante (jan/2026)",
    "Ministério da Saúde/Instituto Butantan — Vacina dengue Butantan-DV: início da vacinação no SUS (jan/2026)",
    "SBIm — Calendários de vacinação 2026/2027"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
