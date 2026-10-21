// Sarampo
registrarFicha({
  id: "sarampo",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "completo",
  titulo: "Sarampo: suspeita, notificação imediata, vitamina A e bloqueio vacinal",
  resumo: "Doença viral muito contagiosa (aerossol). Suspeitar em toda pessoa com febre e exantema maculopapular com tosse, coriza ou conjuntivite, de qualquer idade e situação vacinal. Notificação imediata, isolamento, vitamina A em crianças e bloqueio vacinal dos contatos em até 72 h.",
  palavrasChave: "sarampo measles exantema koplik febre tosse coriza conjuntivite notificacao imediata vitamina a bloqueio vacinal triplice viral scr dose zero isolamento aerossol",
  critico: {
    tempo: "Notificar e isolar em até 24 h",
    texto: "Caso suspeito: isolamento respiratório (aerossol), notificação imediata à vigilância, coleta de sorologia + swab + urina no 1º atendimento e vitamina A em toda criança. Bloqueio vacinal seletivo dos contatos em até 72 h."
  },
  alarmes: [
    "Desconforto respiratório, hipoxemia (pneumonia viral ou bacteriana secundária)",
    "Desidratação, diarreia intensa, recusa alimentar",
    "Convulsão, rebaixamento, cefaleia intensa (encefalite)",
    "Lactente < 1 ano, desnutrido, imunodeprimido ou gestante",
    "Lesão de córnea, fotofobia intensa, baixa visual (ceratite; risco maior com deficiência de vitamina A)",
    "Otite média, laringotraqueíte com estridor"
  ],
  condutaInicial: [
    "Colocar máscara cirúrgica no paciente e levá-lo a sala separada, com porta fechada; profissionais com máscara N95/PFF2",
    "Avaliar gravidade (FR, SpO₂, hidratação, estado nutricional, consciência)",
    "Notificar à vigilância municipal no mesmo dia (até 24 h), por telefone e ficha do SINAN",
    "Coletar no primeiro atendimento: sangue (IgM/IgG), swab de naso + orofaringe e urina para RT-PCR (LACEN)",
    "Vitamina A em toda criança com sarampo suspeito: 1ª dose no dia, 2ª dose no dia seguinte",
    "Listar contatos dos 7 a 21 dias antes e durante a doença (casa, escola, trabalho, transporte, serviços de saúde); conferir vacinação",
    "Não vacinar o caso suspeito entre a 1ª e a 2ª coleta de soro"
  ],
  fataisExcluir: [
    "Pneumonia (viral ou bacteriana secundária) — principal causa de óbito",
    "Encefalite aguda pós-infecciosa",
    "Desidratação grave por diarreia",
    "Meningococcemia e doença de Kawasaki (diagnósticos diferenciais graves)",
    "Pan-encefalite esclerosante subaguda (tardia, anos depois)"
  ],
  proximaDecisao: "Sem sinais de gravidade → isolamento domiciliar até 4 dias após o início do exantema, vitamina A, sintomáticos e retorno em 48 h. Pneumonia, desidratação, convulsão ou lactente/imunodeprimido grave → internação em quarto com isolamento para aerossóis.",
  clinica: {
    anamnese: [
      "Febre alta e pródromo de 3–5 dias com tosse, coriza e conjuntivite antes do exantema",
      "Exantema começando atrás das orelhas e na face, descendo para tronco e membros",
      "Vacinação: tríplice viral (12 meses) e tetraviral/2ª dose (15 meses); adultos: doses registradas",
      "Viagem nos 21 dias anteriores (inclusive grandes eventos internacionais), contato com caso suspeito",
      "Gestação, imunodepressão, desnutrição"
    ],
    exameFisico: [
      "Manchas de Koplik: pontos branco-acinzentados na mucosa jugal, em frente aos molares (antes do exantema)",
      "Exantema maculopapular eritematoso que conflui na face e no tronco; dura 4–7 dias e descama fino",
      "Conjuntivite não purulenta, fotofobia",
      "Ausculta pulmonar, SpO₂, sinais de desidratação",
      "Otoscopia, estado nutricional, nível de consciência"
    ],
    diferenciais: [
      { dx: "Rubéola", pista: "Febre baixa, adenomegalia retroauricular/occipital, sem pródromo respiratório importante" },
      { dx: "Dengue / zika / chikungunya", pista: "Área endêmica, mialgia, artralgia, sem coriza e tosse importantes" },
      { dx: "Exantema súbito, eritema infeccioso", pista: "Lactente com exantema após a febre; face esbofeteada" },
      { dx: "Escarlatina", pista: "Faringite, exantema áspero, língua em framboesa" },
      { dx: "Doença de Kawasaki", pista: "Febre ≥ 5 dias, lábios fissurados, edema de mãos e pés, sem tosse/coriza" },
      { dx: "Farmacodermia", pista: "Medicamento recente, prurido, eosinofilia" }
    ],
    gravidade: [
      "Transmissão: de 6 dias antes até 4 dias após o início do exantema",
      "Mais grave em < 5 anos, adultos > 20 anos, desnutridos, gestantes e imunodeprimidos",
      "Complicações: otite, diarreia, pneumonia, laringotraqueíte, ceratite, encefalite"
    ]
  },
  exames: [
    {
      nome: "Sorologia para sarampo (e rubéola)",
      pedido: "IgM e IgG para sarampo e rubéola no soro — caso suspeito notificado. Enviar ao LACEN com ficha SINAN.",
      porQue: "Confirmação laboratorial obrigatória.",
      esperar: "IgM reagente.",
      interpretacao: "A vigilância define a necessidade de 2ª amostra e a classificação final.",
      limitacoes: "IgM pode ser não reagente nos primeiros dias do exantema; vacina recente gera IgM."
    },
    {
      nome: "RT-PCR para sarampo",
      pedido: "Swab combinado de nasofaringe e orofaringe + amostra de urina para RT-PCR de sarampo (LACEN), coletados no 1º atendimento.",
      porQue: "Detecta o vírus e identifica o genótipo (selvagem × vacinal; rota de importação).",
      esperar: "Detectável.",
      interpretacao: "Detectável confirma o caso.",
      limitacoes: "Positividade cai com os dias após o exantema; coletar no primeiro contato."
    },
    {
      nome: "Avaliação de complicações (se grave)",
      pedido: "Hemograma, eletrólitos, função renal; radiografia de tórax se taquipneia ou hipoxemia; líquor se sinais neurológicos.",
      porQue: "Pneumonia, desidratação, encefalite.",
      esperar: "Leucopenia é comum no sarampo.",
      interpretacao: "Leucocitose com consolidação → pneumonia bacteriana secundária.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Vitamina A (palmitato de retinol)",
      linha: "l1",
      dose: "< 6 meses: 50.000 UI · 6–11 meses: 100.000 UI · ≥ 12 meses: 200.000 UI",
      via: "Oral",
      intervalo: "1ª dose no dia da suspeita; 2ª dose no dia seguinte",
      duracao: "2 doses",
      monitorizacao: "Sinais oculares de deficiência (xeroftalmia): 3ª dose 2–4 semanas depois, conforme OMS",
      contraindicacoes: "—",
      ajustes: "Cápsulas do SUS: 100.000 UI (6–11 meses) e 200.000 UI (≥ 12 meses). Aplicar mesmo se suplementação prévia ou vacina em dia (MS prioriza < 5 anos)"
    },
    {
      droga: "Paracetamol",
      linha: "l1",
      dose: "Adulto: 500–1.000 mg/dose (máx. 4 g/dia) · Criança: 10–15 mg/kg/dose (máx. 750 mg/dose)",
      via: "Oral",
      intervalo: "6/6 h se febre",
      duracao: "Enquanto febre",
      monitorizacao: "—",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Gotas 200 mg/mL: 1 gota/kg"
    },
    {
      droga: "Antibiótico (só para complicação bacteriana)",
      linha: "adj",
      dose: "Pneumonia não grave — criança: amoxicilina 50 mg/kg/dia (máx. 500 mg/dose); adulto: amoxicilina 500 mg 8/8 h. Otite: ver ficha Otite média",
      via: "Oral",
      intervalo: "8/8 h ou 12/12 h",
      duracao: "5–7 dias",
      monitorizacao: "Resposta em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Não usar antibiótico profilático de rotina. Pneumonia grave: internar (ver fichas Pneumonia)"
    },
    {
      droga: "Vacina tríplice viral (contatos — bloqueio)",
      linha: "l1",
      dose: "0,5 mL",
      via: "Subcutânea",
      intervalo: "Dose única no bloqueio, conforme situação vacinal",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Gestantes, imunodeprimidos graves, < 6 meses, anafilaxia prévia a componente",
      ajustes: "6–11 meses: dose zero (não conta para a rotina; manter doses aos 12 e 15 meses). ≥ 12 meses e adultos: completar esquema da idade. Até 72 h após a exposição pode prevenir ou atenuar a doença"
    },
    {
      droga: "Imunoglobulina humana (contato suscetível com contraindicação à vacina)",
      linha: "alt",
      dose: "Conforme Manual dos CRIE / orientação da vigilância",
      via: "IM ou IV conforme produto",
      intervalo: "Dose única, até 6 dias após a exposição",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Para gestantes suscetíveis, imunodeprimidos e lactentes < 6 meses. Solicitar via vigilância/CRIE"
    }
  ],
  destino: {
    agora: [
      "Isolar, notificar, coletar exames, vitamina A, listar contatos"
    ],
    reavaliar: [
      "Retorno em 48 h ou visita domiciliar da equipe; acompanhamento diário dos contatos por 21 dias pela vigilância"
    ],
    alta: [
      "Sem sinais de gravidade, hidratado, família orientada; isolamento domiciliar até 4 dias após o início do exantema"
    ],
    observacao: [
      "Desidratação leve que responde à TRO"
    ],
    internacao: [
      "Pneumonia com hipoxemia, desidratação grave, encefalite, desnutrido grave, imunodeprimido, lactente pequeno com recusa alimentar",
      "Quarto privativo com pressão negativa ou porta fechada, precaução para aerossóis"
    ],
    transferencia: [
      "UBS: casos graves com SAMU, avisando o hospital de destino sobre o isolamento"
    ]
  },
  prescricao: {
    ambulatorial: "SARAMPO — CRIANÇA (peso: ___ kg; idade: ___)\nUSO ORAL\n1. Vitamina A (palmitato de retinol) cápsula ---------- 2 cápsulas\n   < 6 meses: 50.000 UI; 6 a 11 meses: 100.000 UI; ≥ 12 meses: 200.000 UI.\n   Dar 1 dose hoje (na unidade) e 1 dose amanhã. Cortar a ponta da cápsula e pingar o conteúdo na boca.\n2. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (10 mg/kg; máximo 35 gotas) de 6 em 6 horas se febre.\n3. Soro de reidratação oral --------------------------- 10 envelopes\n   Oferecer após cada evacuação líquida e ao longo do dia.\n4. Soro fisiológico 0,9% para limpeza dos olhos e do nariz várias vezes ao dia.\n\nADULTO\nUSO ORAL\n1. Paracetamol 500 mg --------------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre (máximo 4 g por dia).\n\nATESTADO: isolamento domiciliar até 4 dias após o início das manchas (data: ___)."
  },
  orientacoesRetorno: [
    "O sarampo passa pelo ar com muita facilidade: ficar em casa, em quarto separado se possível, até 4 dias após o início das manchas",
    "Não receber visitas; afastar gestantes, bebês e pessoas com imunidade baixa",
    "Todos da casa devem mostrar o cartão de vacina à equipe; quem não tem as doses será vacinado",
    "Oferecer líquidos e alimentação em pequenas porções; manter o aleitamento materno",
    "Voltar imediatamente se: respiração rápida ou difícil, chiado, lábios roxos, convulsão, sonolência, vômitos ou diarreia que não param, pouca urina, dor de ouvido, dor ou piora nos olhos",
    "Ao procurar o serviço, avisar na chegada e usar máscara"
  ],
  tabelas: [
    {
      titulo: "Bloqueio vacinal de contatos (NT Conjunta 345/2025-MS)",
      colunas: ["Contato", "Conduta"],
      linhas: [
        ["< 6 meses", "Não vacinar; imunoglobulina via vigilância/CRIE até 6 dias da exposição"],
        ["6 a 11 meses e 29 dias", "1 dose de tríplice viral (dose zero), não válida para a rotina"],
        ["12 meses a 59 anos", "Atualizar o esquema da idade (sem revacinar quem tem doses comprovadas)"],
        ["Gestantes e imunodeprimidos graves suscetíveis", "Não vacinar; imunoglobulina via vigilância/CRIE até 6 dias da exposição"],
        ["Contato já com sintomas", "Não vacinar; tratar como caso suspeito"]
      ],
      nota: "Bloqueio seletivo em até 72 h da notificação, em todos os locais frequentados pelo caso. Rotina: tríplice viral aos 12 meses e tetraviral aos 15 meses; 2 doses até 29 anos; 1 dose de 30 a 59 anos; profissionais de saúde: 2 doses. Confirmar faixas etárias no Calendário Nacional vigente."
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª edição revisada (2024): Sarampo",
    "Ministério da Saúde — Notas Técnicas Conjuntas nº 344/2025 e nº 345/2025-CGVDI/DPNI/SVSA/MS (definição de caso, coleta, conduta, bloqueio vacinal e monitoramento de contatos)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed. (2023)",
    "OMS — Measles: vitamin A supplementation for children (recomendação vigente) e Measles vaccines: WHO position paper (2017)",
    "American Academy of Pediatrics — Red Book 2024–2027: Measles"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
