// Diarreia aguda e gastroenterite no adulto
registrarFicha({
  id: "diarreia-adulto",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Diarreia aguda e gastroenterite no adulto",
  resumo: "Três ou mais evacuações amolecidas ou líquidas em 24 h, há menos de 14 dias. Quase sempre viral e autolimitada. O centro do tratamento é a hidratação (Planos A, B e C do Ministério da Saúde). Antibiótico só em disenteria com comprometimento do estado geral, cólera grave ou imunossuprimido. Criança: ver ficha diarreia-desidratacao.",
  palavrasChave: "diarreia aguda gastroenterite virose desidratacao soro de reidratacao oral sro plano a b c disenteria sangue nas fezes ciprofloxacino azitromicina loperamida racecadotrila ondansetrona colera norovirus",
  critico: {
    tempo: "Avaliar desidratação e escolher o plano",
    texto: "Desidratação grave (letargia, pulso fraco, hipotensão, incapaz de beber) = Plano C: SF 0,9% ou Ringer lactato 30 mL/kg em 30 min e depois 70 mL/kg em 2 h 30 min, reavaliando sempre."
  },
  alarmes: [
    "Desidratação grave: letargia, confusão, pulso rápido e fraco, hipotensão, oligúria, incapaz de beber",
    "Sangue nas fezes com febre alta, dor abdominal intensa ou toxemia",
    "Vômitos que impedem a hidratação oral",
    "Idoso ≥ 65–70 anos, gestante, imunossuprimido (HIV, quimioterapia, transplante), DRC, IC, diabetes descompensado",
    "Dor abdominal intensa ou localizada, distensão, abdome agudo (apendicite, isquemia mesentérica)",
    "Uso recente de antibiótico ou internação (Clostridioides difficile)",
    "Diarreia por > 7 dias sem melhora ou > 14 dias (persistente)",
    "Oligúria, palidez e petéquias após diarreia com sangue (síndrome hemolítico-urêmica)"
  ],
  condutaInicial: [
    "Avaliar o estado de hidratação (estado geral, olhos, sede, sinal da prega, pulso, PA, diurese) e escolher o plano",
    "Plano A (sem desidratação): líquidos e SRO em casa após cada evacuação, manter alimentação",
    "Plano B (desidratação): SRO 50–100 mL/kg em 4–6 h na unidade, com reavaliação; ondansetrona se vômitos persistentes",
    "Plano C (grave): hidratação venosa rápida e reavaliação a cada 30 min",
    "Diarreia com sangue: avaliar comprometimento do estado geral para antibiótico",
    "Notificar surto (2 ou mais pessoas após a mesma refeição/fonte) e suspeita de cólera"
  ],
  fataisExcluir: [
    "Choque hipovolêmico / lesão renal aguda",
    "Abdome agudo cirúrgico (apendicite, isquemia mesentérica, diverticulite)",
    "Colite por C. difficile grave / megacólon tóxico",
    "Síndrome hemolítico-urêmica (E. coli produtora de toxina Shiga)",
    "Cólera",
    "Sepse com foco abdominal; malária ou dengue em área endêmica (febre + diarreia)",
    "Hipocalemia e hiponatremia graves"
  ],
  proximaDecisao: "Hidratado e tolerando via oral → Plano A em casa, retorno se sinais de alarme. Plano B sem melhora em 4–6 h ou vômitos persistentes → Plano C ou observação/transferência. Disenteria com comprometimento do estado geral → ciprofloxacino 3 dias (ou azitromicina).",
  clinica: {
    anamnese: [
      "Início, número de evacuações, aspecto (aquosa, com sangue/muco, gordurosa), volume",
      "Vômitos, febre, dor abdominal, tenesmo",
      "Diurese, sede, tontura ao levantar",
      "Alimentos suspeitos, outras pessoas doentes, água não tratada, viagem, creche/instituição",
      "Antibiótico ou internação recentes (C. difficile); medicamentos novos (metformina, laxantes, magnésio, colchicina, ISRS)",
      "Comorbidades: HIV, imunossupressão, DRC, IC, diabetes, gestação",
      "Uso de diurético, IECA/BRA, iSGLT2, metformina (suspender temporariamente se desidratado)"
    ],
    exameFisico: [
      "Estado geral, nível de consciência",
      "Mucosas, olhos, sinal da prega, enchimento capilar",
      "FC, PA deitado e em pé, temperatura, peso",
      "Abdome: dor localizada, defesa, descompressão dolorosa, distensão, ruídos",
      "Sinais de anemia, petéquias, icterícia"
    ],
    diferenciais: [
      { dx: "Gastroenterite viral (norovírus, rotavírus)", pista: "Vômitos proeminentes, diarreia aquosa, surtos, 1–3 dias" },
      { dx: "Intoxicação alimentar por toxina (S. aureus, B. cereus)", pista: "Início 1–6 h após refeição, vômitos, sem febre (ver ficha intoxicacao-alimentar)" },
      { dx: "Disenteria bacteriana (Shigella, Campylobacter, Salmonella)", pista: "Febre, sangue e muco, tenesmo" },
      { dx: "E. coli produtora de toxina Shiga", pista: "Diarreia com sangue, pouca febre, cólica intensa; risco de SHU (evitar antibiótico e antidiarreico)" },
      { dx: "C. difficile", pista: "Antibiótico nas últimas 12 semanas, internação, idoso" },
      { dx: "Parasitose (giardíase, amebíase)", pista: "Persistente, esteatorreia (Giardia), disenteria sem febre alta (ameba)" },
      { dx: "Apendicite / doença inflamatória intestinal", pista: "Dor localizada; diarreia com sangue recorrente, perda de peso" }
    ],
    gravidade: [
      "Sem desidratação (Plano A): bem, alerta, olhos normais, bebe normalmente, prega desaparece rápido, pulso cheio",
      "Desidratação (Plano B): irritado ou inquieto, olhos fundos, sedento, prega desaparece lentamente, pulso rápido",
      "Desidratação grave (Plano C): comatoso, hipotônico ou letárgico, olhos muito fundos, bebe mal ou não bebe, prega desaparece muito lentamente (> 2 s), pulso fraco ou ausente",
      "Disenteria com comprometimento do estado geral, febre alta persistente ou toxemia → antibiótico"
    ]
  },
  exames: [
    {
      nome: "Na maioria: nenhum exame",
      pedido: "—",
      porQue: "Diarreia aguda aquosa sem alarme é autolimitada; o tratamento não muda.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Laboratório na desidratação moderada/grave ou grupo de risco",
      pedido: "Hemograma, ureia, creatinina, sódio, potássio, glicemia. Gasometria venosa se desidratação grave.",
      porQue: "Avaliar lesão renal aguda, distúrbios eletrolíticos e acidose.",
      esperar: "Hemoconcentração, hipocalemia, acidose metabólica, ureia elevada.",
      interpretacao: "Creatinina elevada → hidratação venosa e suspender nefrotóxicos. Anemia + plaquetopenia + LRA após diarreia com sangue → SHU (internação).",
      limitacoes: "—"
    },
    {
      nome: "Coprocultura e pesquisa de toxinas",
      pedido: "Coprocultura com antibiograma (incluir Salmonella, Shigella, Campylobacter e E. coli O157). Pesquisa de toxinas A/B ou PCR para Clostridioides difficile se uso recente de antibiótico/internação. Indicação: diarreia com sangue / febre alta / imunossuprimido / surto / persistente.",
      porQue: "Orientar antibiótico e vigilância de surtos.",
      esperar: "Positiva em minoria.",
      interpretacao: "Ajustar antibiótico pelo antibiograma. C. difficile positivo → tratar conforme protocolo.",
      limitacoes: "Resultado demora; não atrasar hidratação ou antibiótico indicado."
    },
    {
      nome: "Parasitológico de fezes",
      pedido: "Exame parasitológico de fezes (3 amostras em dias alternados) e pesquisa de antígeno de Giardia se disponível. Indicação: diarreia > 7–14 dias.",
      porQue: "Giardíase, amebíase, Cryptosporidium (imunossuprimido).",
      esperar: "—",
      interpretacao: "Tratar o parasita encontrado.",
      limitacoes: "Baixa sensibilidade com amostra única."
    }
  ],
  tratamento: [
    {
      droga: "Sais para reidratação oral (SRO)",
      linha: "l1",
      dose: "Plano A: 200–400 mL (ou à vontade) após cada evacuação líquida. Plano B: 50–100 mL/kg em 4–6 h na unidade",
      via: "Oral, em pequenos goles frequentes",
      intervalo: "Contínuo",
      duracao: "Enquanto durar a diarreia",
      monitorizacao: "Diurese, sinais de desidratação, vômitos",
      contraindicacoes: "Íleo, rebaixamento de consciência, choque (usar IV)",
      ajustes: "Diluir 1 envelope em 1 L de água filtrada ou fervida (fria). Bebidas esportivas e refrigerantes não substituem o SRO em desidratação. IC/DRC: volumes menores e reavaliação frequente"
    },
    {
      droga: "Hidratação venosa (Plano C)",
      linha: "l1",
      dose: "Fase rápida: SF 0,9% ou Ringer lactato 30 mL/kg em 30 min, depois 70 mL/kg em 2 h 30 min",
      via: "IV, 2 acessos calibrosos",
      intervalo: "Reavaliar a cada 15–30 min",
      duracao: "Até sair da desidratação grave; iniciar SRO assim que conseguir beber",
      monitorizacao: "PA, FC, diurese, consciência, congestão pulmonar, potássio",
      contraindicacoes: "—",
      ajustes: "Idoso, cardiopata e DRC: alíquotas menores (ex.: 500 mL) com ausculta pulmonar entre elas. Repor potássio após diurese se hipocalemia"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "4–8 mg",
      via: "Oral (comprimido orodispersível) ou IV lento",
      intervalo: "8/8 h se vômitos",
      duracao: "1–2 dias",
      monitorizacao: "QT",
      contraindicacoes: "QT longo; gestante (o cartaz do MS exclui gestantes)",
      ajustes: "Facilita a reidratação oral quando há vômitos persistentes"
    },
    {
      droga: "Ciprofloxacino",
      linha: "l1",
      dose: "500 mg",
      via: "Oral",
      intervalo: "12/12 h",
      duracao: "3 dias",
      monitorizacao: "Tendinopatia, QT, confusão em idosos",
      contraindicacoes: "Gestação, lactação, miastenia, uso prévio com tendinite",
      ajustes: "Indicação: disenteria (sangue nas fezes) com comprometimento do estado geral, febre alta persistente ou toxemia; cólera grave; imunossuprimido. Grave/sem via oral: ceftriaxona 1–2 g IV 1×/dia. Evitar se suspeita de E. coli produtora de toxina Shiga (sangue sem febre)"
    },
    {
      droga: "Azitromicina",
      linha: "alt",
      dose: "500 mg (ou 1 g em dose única)",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "3 dias (ou dose única de 1 g)",
      monitorizacao: "QT",
      contraindicacoes: "QT longo",
      ajustes: "Gestante, alergia ou resistência à quinolona, Campylobacter (resistência a quinolonas), diarreia do viajante"
    },
    {
      droga: "Racecadotrila",
      linha: "adj",
      dose: "100 mg (1ª dose a qualquer hora)",
      via: "Oral, antes das refeições",
      intervalo: "8/8 h",
      duracao: "Até 7 dias (parar quando as fezes normalizarem)",
      monitorizacao: "—",
      contraindicacoes: "Disenteria (sangue nas fezes), febre alta, angioedema com IECA",
      ajustes: "Antissecretor; reduz o volume de fezes. Não substitui a hidratação"
    },
    {
      droga: "Loperamida",
      linha: "adj",
      dose: "4 mg na 1ª dose e 2 mg após cada evacuação líquida (máx 16 mg/dia)",
      via: "Oral",
      intervalo: "Após cada evacuação",
      duracao: "Até 2 dias",
      monitorizacao: "Distensão, constipação",
      contraindicacoes: "Diarreia com sangue, febre alta, suspeita de C. difficile ou E. coli O157, colite; arritmia (doses altas prolongam QT)",
      ajustes: "Só em adulto com diarreia aquosa sem febre, para alívio (ex.: trabalho, viagem)"
    },
    {
      droga: "Antibiótico de rotina na diarreia aquosa",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar na diarreia aquosa sem alarme",
      ajustes: "Não encurta a doença viral, aumenta resistência, C. difficile e, na E. coli produtora de toxina Shiga, o risco de SHU"
    }
  ],
  destino: {
    agora: [
      "Plano A: casa com SRO e orientações",
      "Plano B: unidade por 4–6 h com SRO e reavaliação",
      "Plano C: hidratação venosa imediata e transferência se não houver estrutura"
    ],
    reavaliar: [
      "Plano B: a cada hora; ao fim de 4–6 h decidir Plano A ou C",
      "Plano C: a cada 15–30 min"
    ],
    alta: [
      "Sem desidratação, tolerando via oral, urinando",
      "Orientar Plano A, sinais de alarme e retorno se piora ou sem melhora em 48–72 h"
    ],
    observacao: [
      "Plano B sem melhora em 6 h, idoso ou comorbidade com desidratação moderada"
    ],
    internacao: [
      "Desidratação grave, LRA, distúrbio eletrolítico importante, vômitos incoercíveis, sepse, SHU, abdome agudo"
    ],
    transferencia: [
      "UBS sem hidratação venosa: iniciar Plano C se possível e acionar SAMU/regulação"
    ]
  },
  prescricao: {
    ambulatorial: "PLANO A — DIARREIA AGUDA SEM DESIDRATAÇÃO\nUSO ORAL\n1. Sais para reidratação oral (envelope) ------------------------ 6 envelopes\n   Dissolver 1 envelope em 1 litro de água filtrada ou fervida (fria). Beber 1 a 2 copos (200–400 mL) após cada evacuação líquida e ao longo do dia. Usar em até 24 h após preparado.\n2. Ondansetrona 4 mg (comprimido orodispersível) ---------------- 6 comprimidos\n   Dissolver 1 comprimido na língua de 8 em 8 horas se vômitos (não usar na gestação).\n3. Dipirona 500 mg ---------------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor.\n4. Racecadotrila 100 mg (opcional, diarreia aquosa sem sangue e sem febre alta) --- 15 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas até as fezes normalizarem (máx 7 dias).\n\nDISENTERIA COM COMPROMETIMENTO DO ESTADO GERAL\n5. Ciprofloxacino 500 mg ------------------------------------------ 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias.\n   (Gestante ou contraindicação: azitromicina 500 mg 1 comprimido 1 vez ao dia por 3 dias.)",
    hospitalar: "PLANO C — DESIDRATAÇÃO GRAVE (ADULTO, peso: ___ kg)\n1. Dieta zero na fase rápida; liberar SRO e dieta assim que conseguir beber.\n2. 2 acessos venosos calibrosos.\n3. Fase rápida: SF 0,9% ou Ringer lactato 30 mL/kg IV em 30 minutos (70 kg = 2.100 mL); depois 70 mL/kg IV em 2 h 30 min (70 kg = 4.900 mL). Reavaliar a cada 15–30 minutos; idoso/cardiopata/DRC: alíquotas de 500 mL com reavaliação.\n4. Manutenção após reidratação: SRO por via oral à vontade; se ainda sem via oral, SF 0,9% ou Ringer lactato conforme perdas.\n5. Cloreto de potássio 19,1% 10 mL (25 mEq) em cada 1.000 mL de soro após diurese presente, se K < 3,5 mEq/L.\n6. Ondansetrona 8 mg IV lento de 8/8 h se vômitos.\n7. Se disenteria com toxemia ou sepse: ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min 1 vez ao dia (ajustar após cultura).\n8. Suspender temporariamente diurético, IECA/BRA, metformina, iSGLT2 e AINE.\n9. Controles: PA, FC e diurese de 1/1 h na fase rápida; peso; sódio, potássio, ureia e creatinina na admissão e em 6–12 h."
  },
  orientacoesRetorno: [
    "Beba o soro de reidratação aos poucos, várias vezes, principalmente depois de cada evacuação; continue comendo normalmente, em pequenas porções",
    "Lave as mãos com água e sabão após ir ao banheiro e antes de preparar alimentos; não prepare comida para outras pessoas enquanto estiver doente",
    "Não use remédio para \"prender\" o intestino se houver sangue nas fezes ou febre alta",
    "Procure atendimento imediatamente se: sangue nas fezes, muita sede ou boca muito seca, urina pouca ou escura, tontura ao levantar, sonolência ou confusão, vômitos que não param, dor forte na barriga, febre alta",
    "Idosos, gestantes e pessoas com doença crônica devem procurar a UBS mais cedo",
    "Se tomar remédios para pressão, diabetes (metformina, dapagliflozina) ou diurético, pergunte se deve suspendê-los durante a diarreia",
    "Retorne se não melhorar em 2–3 dias ou se a diarreia passar de 7 dias"
  ],
  fontes: [
    "Ministério da Saúde — Manejo do paciente com diarreia (cartaz, 2023)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. revisada (2024): doenças diarreicas agudas, cólera e surtos de DTA",
    "IDSA — Clinical Practice Guidelines for the Diagnosis and Management of Infectious Diarrhea (Clin Infect Dis, 2017)",
    "ACG — Clinical Guideline: Diagnosis, Treatment, and Prevention of Acute Diarrheal Infections in Adults (Am J Gastroenterol, 2016)",
    "WGO — Global Guidelines: Acute diarrhea in adults and children (2012)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
