// Colite por Clostridioides difficile
registrarFicha({
  id: "colite-clostridioides",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Colite por Clostridioides difficile (colite pseudomembranosa)",
  resumo: "Diarreia (≥ 3 evacuações não formadas em 24 h) após antibiótico ou internação, com toxina de C. difficile positiva. Varia de diarreia leve a colite fulminante com megacólon tóxico.",
  palavrasChave: "clostridioides difficile clostridium difficile c diff colite pseudomembranosa diarreia associada a antibiotico megacolon toxico vancomicina oral fidaxomicina metronidazol toxina gdh pcr recorrencia transplante de microbiota fecal colectomia",
  critico: {
    tempo: "Vancomicina VO e suspender ATB",
    texto: "Confirmado (ou forte suspeita em caso grave): suspender o antibiótico desencadeante se possível e iniciar vancomicina oral ou fidaxomicina. Hipotensão, íleo ou megacólon = forma fulminante: vancomicina em dose alta + metronidazol IV e cirurgião."
  },
  alarmes: [
    "Leucócitos ≥ 15.000/mm³ ou creatinina > 1,5 mg/dL (forma grave)",
    "Hipotensão, choque, lactato elevado (fulminante)",
    "Distensão abdominal, íleo (diarreia pode diminuir), dor e defesa (megacólon tóxico, perfuração)",
    "Cólon transverso > 6 cm no RX",
    "Idoso, imunossuprimido, DII com colite grave"
  ],
  condutaInicial: [
    "Testar só se ≥ 3 evacuações não formadas em 24 h, sem laxante nas últimas 48 h; não testar fezes formadas nem pedir teste de cura",
    "Precauções de contato, quarto privativo, lavar as mãos com água e sabão (álcool gel não mata esporos), limpeza com hipoclorito",
    "Suspender o antibiótico desencadeante; se precisar manter, preferir espectro menor e menor duração",
    "Suspender IBP sem indicação clara; NÃO usar loperamida, opioides ou anticolinérgicos",
    "Hidratação e correção de potássio",
    "Classificar gravidade (leucócitos, creatinina, PA, exame abdominal) e iniciar tratamento"
  ],
  fataisExcluir: [
    "Megacólon tóxico",
    "Perfuração colônica",
    "Choque séptico",
    "Colite isquêmica",
    "Colite aguda grave por DII (pode coexistir com C. difficile)"
  ],
  proximaDecisao: "Fulminante sem melhora em 24–72 h, perfuração, megacólon progressivo ou lactato subindo → colectomia subtotal (ou ileostomia em alça com lavagem colônica). Recorrência em até 8 semanas → esquemas da tabela de recorrência.",
  clinica: {
    anamnese: [
      "Antibiótico nos últimos 3 meses (clindamicina, cefalosporinas, quinolonas, amoxicilina-clavulanato são os mais associados)",
      "Internação, instituição de longa permanência, quimioterapia, IBP",
      "Número de evacuações, sangue, febre, dor e distensão",
      "Episódios prévios de C. difficile (recorrência)"
    ],
    exameFisico: [
      "PA, FC, temperatura, sinais de desidratação",
      "Distensão, timpanismo, ruídos diminuídos, defesa, descompressão dolorosa"
    ],
    diferenciais: [
      { dx: "Diarreia associada a antibiótico sem C. difficile", pista: "Leve, melhora ao suspender o antibiótico, toxina negativa" },
      { dx: "Colite infecciosa (Salmonella, Shigella, Campylobacter, CMV)", pista: "Coprocultura; imunossuprimido (CMV)" },
      { dx: "DII em atividade", pista: "Diarreia sanguinolenta crônica; pode coexistir" },
      { dx: "Colite isquêmica", pista: "Idoso vascular, dor súbita, hematoquezia" },
      { dx: "Efeito de medicação (laxante, metformina, dieta enteral)", pista: "Cronologia" }
    ],
    gravidade: [
      "Não grave: leucócitos ≤ 15.000/mm³ e creatinina < 1,5 mg/dL",
      "Grave: leucócitos > 15.000/mm³ ou creatinina > 1,5 mg/dL",
      "Fulminante: hipotensão ou choque, íleo ou megacólon",
      "Recorrência: novo episódio até 8 semanas após o fim do tratamento de um episódio que respondeu"
    ]
  },
  exames: [
    {
      nome: "Pesquisa de C. difficile nas fezes",
      pedido: "Fezes líquidas/pastosas: pesquisa de toxinas A/B de Clostridioides difficile, com GDH (glutamato desidrogenase) ou PCR conforme disponível no laboratório (algoritmo em etapas).",
      porQue: "Confirmar a infecção.",
      esperar: "GDH ou PCR positivo + toxina positiva = infecção.",
      interpretacao: "PCR/GDH positivo com toxina negativa = colonização ou infecção leve; decidir pela clínica. Toxina isolada tem sensibilidade menor.",
      limitacoes: "Não testar fezes formadas, crianças < 2 anos (colonização comum) nem pedir controle de cura."
    },
    {
      nome: "Gravidade",
      pedido: "Hemograma, creatinina, ureia, sódio, potássio, albumina, lactato, PCR.",
      porQue: "Classificar e acompanhar.",
      esperar: "Leucocitose e LRA nas formas graves.",
      interpretacao: "Leucócitos > 15.000 ou creatinina > 1,5 = grave. Lactato subindo = pensar em cirurgia.",
      limitacoes: "—"
    },
    {
      nome: "Imagem",
      pedido: "RX de abdome em pé e deitado; TC de abdome e pelve com contraste se grave/fulminante.",
      porQue: "Megacólon, perfuração, espessamento colônico.",
      esperar: "Espessamento parietal, sinal do acordeão, ascite.",
      interpretacao: "Cólon > 6 cm, pneumoperitônio → cirurgia.",
      limitacoes: "Colonoscopia é contraindicada na forma fulminante (risco de perfuração); retossigmoidoscopia só em dúvida diagnóstica."
    }
  ],
  tratamento: [
    {
      droga: "Vancomicina oral",
      linha: "l1",
      dose: "125 mg",
      via: "VO (ou por sonda)",
      intervalo: "6/6 h",
      duracao: "10 dias",
      monitorizacao: "Número de evacuações, leucócitos, creatinina",
      contraindicacoes: "Alergia à vancomicina",
      ajustes: "Não precisa de ajuste renal (absorção mínima). Sem cápsula oral: usar o frasco IV de 500 mg reconstituído e dado por boca/sonda (ver prescrição). Vancomicina IV NÃO trata colite"
    },
    {
      droga: "Fidaxomicina",
      linha: "l1",
      dose: "200 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "10 dias",
      monitorizacao: "Resposta clínica",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Preferida pela IDSA/SHEA 2021 (menos recorrência), mas cara e de disponibilidade limitada no Brasil. Alternativa na recorrência: esquema estendido 200 mg 12/12 h por 5 dias e depois 200 mg em dias alternados por 20 dias"
    },
    {
      droga: "Metronidazol",
      linha: "alt",
      dose: "500 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "10–14 dias",
      monitorizacao: "Neuropatia, gosto metálico",
      contraindicacoes: "Forma grave ou fulminante como monoterapia; recorrência; 1º trimestre (relativa); álcool",
      ajustes: "Só na forma não grave quando vancomicina e fidaxomicina estiverem indisponíveis. Não repetir cursos (neurotoxicidade)"
    },
    {
      droga: "Vancomicina oral dose alta (fulminante)",
      linha: "l1",
      dose: "500 mg",
      via: "VO ou por sonda nasogástrica",
      intervalo: "6/6 h",
      duracao: "Até melhora; depois completar 10–14 dias",
      monitorizacao: "Abdome a cada 6 h, lactato, imagem",
      contraindicacoes: "—",
      ajustes: "Associar metronidazol IV. Se íleo: vancomicina retal 500 mg em 100 mL de SF 0,9% como enema de retenção de 6/6 h"
    },
    {
      droga: "Metronidazol IV (fulminante, associado)",
      linha: "adj",
      dose: "500 mg",
      via: "IV em 30–60 min",
      intervalo: "8/8 h",
      duracao: "Até melhora clínica",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Sempre junto com vancomicina enteral, nunca isolado"
    },
    {
      droga: "Loperamida, opioides, anticolinérgicos",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Risco de megacólon tóxico",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Isolamento de contato", "Hidratação, potássio", "Vancomicina oral (ou fidaxomicina)"],
    reavaliar: ["Resposta esperada em 3–5 dias", "Na forma grave/fulminante: abdome, lactato e leucócitos a cada 6–12 h"],
    alta: ["Forma não grave, tolerando via oral, sem LRA, com medicação garantida e retorno combinado"],
    observacao: ["Desidratação leve a moderada corrigível em horas"],
    internacao: ["Forma grave", "Idoso frágil, imunossuprimido, LRA, incapacidade de ingerir", "Fulminante: UTI + cirurgia geral desde a admissão"],
    transferencia: ["Fulminante sem cirurgião, UTI ou vancomicina disponível → regulação após iniciar metronidazol IV e volume"]
  },
  prescricao: {
    hospitalar: "COLITE POR C. DIFFICILE — ADULTO\n1. Dieta branda conforme tolerância (zero se íleo/megacólon).\n2. Precaução de contato; quarto privativo; higiene das mãos com água e sabão.\n3. SF 0,9% ou Ringer lactato ___ mL IV conforme volemia; KCl conforme potássio.\n4. Suspender: antibiótico desencadeante (se possível), IBP sem indicação, laxantes, loperamida, opioides.\n5. FORMA NÃO GRAVE OU GRAVE: Vancomicina 125 mg VO de 6/6 h por 10 dias.\n   Preparo com frasco IV: vancomicina 500 mg pó — reconstituir com 10 mL de água destilada (50 mg/mL); dar 2,5 mL (125 mg) VO ou por sonda, misturado a suco se necessário. Manter a solução reconstituída na geladeira e desprezar conforme orientação da farmácia.\n   (Alternativa: fidaxomicina 200 mg VO de 12/12 h por 10 dias.)\n   (Só se nenhuma disponível e forma não grave: metronidazol 500 mg VO de 8/8 h por 10–14 dias.)\n6. FORMA FULMINANTE: vancomicina 500 mg VO/SNG de 6/6 h (10 mL da solução 50 mg/mL)\n   + metronidazol 500 mg IV de 8/8 h (bolsa pronta 5 mg/mL, 100 mL em 30–60 min)\n   + se íleo: vancomicina 500 mg em 100 mL de SF 0,9% por sonda retal, clampear e reter por 30–60 min, de 6/6 h.\n7. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV), se sem contraindicação.\n8. Controles: número e aspecto das evacuações, sinais vitais 4/4 h, perímetro e exame abdominal 6/6 h (fulminante); hemograma, creatinina, eletrólitos e lactato diários.\n9. Avaliação da cirurgia geral na forma fulminante.",
    ambulatorial: "USO ORAL\n1. Vancomicina 125 mg (cápsula ou solução oral manipulada) -------- 40 doses\n   Tomar 125 mg de 6 em 6 horas por 10 dias.\n   (Se não houver cápsula: vancomicina 500 mg frasco-ampola — reconstituir com 10 mL de água; tomar 2,5 mL de 6 em 6 horas; manter na geladeira.)\n   OU\n   Fidaxomicina 200 mg ------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 10 dias.\n2. Sais para reidratação oral ---------------------- 10 envelopes\n   Diluir 1 envelope em 1 litro de água filtrada; beber aos poucos após cada evacuação líquida.\n\nNÃO usar remédios para prender o intestino."
  },
  orientacoesRetorno: [
    "Tomar o remédio até o fim, nos horários certos, mesmo que a diarreia melhore",
    "Lavar as mãos com água e sabão após usar o banheiro e antes de comer; o álcool gel não elimina essa bactéria. Limpar o banheiro com água sanitária",
    "Não tomar remédios para prender o intestino",
    "Avisar a qualquer médico que já teve C. difficile antes de usar antibiótico",
    "Voltar imediatamente se: barriga inchada e dura, dor forte, febre alta, tontura ao levantar, urina muito escura ou pouca, ou se a diarreia parar de repente com a barriga inchando",
    "Retornar se a diarreia não melhorar em 3–5 dias ou voltar nas semanas seguintes (recorrência é comum)"
  ],
  tabelas: [
    {
      titulo: "Recorrência (IDSA/SHEA 2021)",
      colunas: ["Situação", "Esquema preferido", "Alternativas"],
      linhas: [
        ["1ª recorrência", "Fidaxomicina 200 mg 12/12 h por 10 dias (ou esquema estendido)", "Vancomicina em esquema decrescente e pulsado; vancomicina 125 mg 6/6 h por 10 dias se o 1º episódio foi tratado com metronidazol"],
        ["2ª recorrência ou mais", "Fidaxomicina; vancomicina decrescente/pulsada", "Vancomicina 10 dias seguida de rifaximina 400 mg 8/8 h por 20 dias; transplante de microbiota fecal (após ≥ 2 recorrências tratadas)"],
        ["Esquema decrescente/pulsado de vancomicina", "125 mg 6/6 h por 10–14 dias → 125 mg 12/12 h por 7 dias → 125 mg 1×/dia por 7 dias → 125 mg a cada 2–3 dias por 2–8 semanas", "—"]
      ],
      nota: "Bezlotoxumabe, citado na diretriz de 2021, foi retirado do mercado pelo fabricante em 2025."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 3–5 dias com metronidazol", "Trocar para vancomicina oral 125 mg 6/6 h ou fidaxomicina", "Metronidazol tem taxa de falha maior; não insistir"],
        ["Sem melhora com vancomicina 125 mg", "Reavaliar diagnóstico (DII, CMV, isquemia, outra infecção), adesão e gravidade; fidaxomicina se disponível", "Resistência clínica à vancomicina é rara; falha costuma ser gravidade subestimada"],
        ["Piora para forma grave/fulminante", "Vancomicina 500 mg 6/6 h enteral + metronidazol IV; vancomicina retal se íleo", "Internar; cirurgia precoce se piora em 24–72 h"],
        ["Antibiótico desencadeante não pode ser suspenso", "Manter tratamento de C. difficile durante todo o antibiótico e por cerca de 1 semana depois", "Trocar para droga de menor risco quando possível"],
        ["Alergia à vancomicina", "Fidaxomicina; metronidazol se forma não grave e nada mais disponível", "Discutir com infectologia"],
        ["Recorrências múltiplas", "Vancomicina pulsada, fidaxomicina estendida, transplante de microbiota fecal", "Encaminhar à gastroenterologia/infectologia"]
      ]
    }
  ],
  fontes: [
    "IDSA/SHEA — Clinical Practice Guideline: 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults",
    "IDSA/SHEA — Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children (2017)",
    "ACG Clinical Guidelines: Prevention, Diagnosis, and Treatment of Clostridioides difficile Infections (2021)",
    "ESCMID — Guidance on treatment of Clostridioides difficile infection in adults (2021)",
    "ANVISA — Medidas de prevenção de infecção relacionada à assistência à saúde (2017)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
