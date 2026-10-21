// Prostatite e ITU no homem
registrarFicha({
  id: "prostatite",
  especialidade: "urologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Prostatite e ITU no homem",
  resumo: "EAU considera toda ITU no homem complicada; IDSA 2025 classifica como complicada a ITU com sinais sistêmicos (febre, prostatite). Cistite masculina: sintomas urinários baixos sem febre. Prostatite bacteriana aguda: febre, calafrios, disúria, dor perineal e próstata dolorosa. Prostatite crônica: ITU recorrente pelo mesmo germe ou dor pélvica crônica.",
  palavrasChave: "prostatite aguda cronica itu homem infeccao urinaria masculina dor perineal disuria retencao urinaria epididimite ciprofloxacino levofloxacino sulfametoxazol trimetoprima ceftriaxona psa sindrome dor pelvica cronica",
  critico: {
    tempo: "Urocultura antes do antibiótico",
    texto: "Todo homem com ITU: colher urocultura antes de tratar. Febre + próstata dolorosa = prostatite aguda: não massagear a próstata, avaliar retenção urinária e sepse."
  },
  alarmes: [
    "Sinais de sepse (hipotensão, confusão, taquipneia) — encaminhar ao PS",
    "Retenção urinária ou resíduo pós-miccional elevado",
    "Febre persistente após 48–72 h de antibiótico (pensar abscesso prostático)",
    "Imunossupressão, diabetes descompensado, sonda vesical ou manipulação urológica recente",
    "Dor escrotal com edema (epididimite/orquite); dor súbita intensa em jovem = torção testicular até prova em contrário",
    "Hematúria sem infecção comprovada (investigar neoplasia de bexiga)"
  ],
  condutaInicial: [
    "Classificar: cistite afebril, prostatite aguda (febre, dor perineal, próstata dolorosa), epididimite ou uretrite (corrimento)",
    "Urina tipo 1 e urocultura antes do antibiótico; em < 35 anos ou com risco de IST, testar gonococo/clamídia e oferecer HIV, sífilis e hepatites",
    "Toque retal delicado se suspeita de prostatite (sem massagem)",
    "Avaliar retenção: globo vesical, USG com resíduo pós-miccional quando disponível",
    "Iniciar antibiótico empírico e ajustar ao antibiograma; febre alta, sepse ou retenção → PS"
  ],
  fataisExcluir: [
    "Urosepse",
    "Abscesso prostático",
    "Retenção urinária aguda",
    "Torção testicular (dor escrotal aguda)",
    "Pielonefrite obstrutiva (ver ficha pielonefrite)"
  ],
  proximaDecisao: "Cistite masculina afebril → 7 dias de antibiótico. Prostatite aguda estável → quinolona ou SMX-TMP por 2–4 semanas (reavaliar em 14 dias). Sepse, retenção ou não tolera VO → PS/internação. ITU recorrente ou sem melhora → USG de vias urinárias com resíduo, investigar obstrução e prostatite crônica, encaminhar à urologia.",
  clinica: {
    anamnese: [
      "Disúria, polaciúria, urgência, jato fraco, gotejamento, hesitação",
      "Febre, calafrios, mal-estar, dor perineal, retal, suprapúbica, peniana ou ao ejacular",
      "Corrimento uretral, parceria nova ou sexo sem preservativo (uretrite/IST)",
      "Dor e edema escrotal (epididimite)",
      "Biópsia de próstata, cateterismo, cistoscopia recentes; sonda vesical",
      "Sintomas prostáticos prévios (HPB), cálculo, ITU prévias, antibióticos recentes",
      "Dor pélvica há ≥ 3 dos últimos 6 meses sem infecção comprovada (síndrome de dor pélvica crônica)"
    ],
    exameFisico: [
      "Temperatura, PA, FC, FR, estado mental",
      "Abdome: globo vesical, dor suprapúbica; punho-percussão lombar",
      "Genitália: meato (corrimento), epidídimo, testículo, reflexo cremastérico",
      "Toque retal delicado: próstata aumentada, quente, dolorosa, amolecida na aguda; flutuação sugere abscesso. Não massagear (risco de bacteriemia)"
    ],
    diferenciais: [
      { dx: "Uretrite (IST)", pista: "Corrimento uretral, disúria sem polaciúria importante, homem jovem sexualmente ativo — ver ficha cervicite-uretrite" },
      { dx: "Epididimite / orquite", pista: "Dor e edema escrotal unilateral, epidídimo doloroso" },
      { dx: "Pielonefrite", pista: "Dor lombar, Giordano positivo" },
      { dx: "Hiperplasia prostática benigna", pista: "Sintomas obstrutivos crônicos, sem febre, urina normal" },
      { dx: "Cálculo vesical ou ureteral distal", pista: "Hematúria, dor em cólica irradiada para o pênis" },
      { dx: "Câncer de bexiga ou próstata", pista: "Hematúria persistente, toque endurecido/nodular, perda de peso" }
    ],
    gravidade: [
      "Cistite masculina sem febre e sem retenção: tratamento ambulatorial",
      "Prostatite aguda sem sepse, tolerando VO: ambulatorial com retorno em 48–72 h",
      "Prostatite com sepse, retenção, imunossupressão ou abscesso: internação"
    ]
  },
  exames: [
    {
      nome: "Urina tipo 1 e urocultura",
      pedido: "Urina tipo 1 (EAS) e urocultura com antibiograma (jato médio), antes do antibiótico.",
      porQue: "Confirmar ITU e guiar o antibiótico.",
      esperar: "Leucocitúria, nitrito, bacteriúria; E. coli e outras enterobactérias.",
      interpretacao: "Cultura positiva com sintomas = ITU. Repetir urocultura se sintomas persistirem após o tratamento.",
      limitacoes: "Na prostatite crônica, a urina pode ser estéril entre os episódios."
    },
    {
      nome: "Pesquisa de IST",
      pedido: "Pesquisa de Neisseria gonorrhoeae e Chlamydia trachomatis por biologia molecular (1º jato de urina). Teste rápido para HIV, sífilis, hepatites B e C.",
      porQue: "Homens < 35 anos ou com risco sexual: uretrite e epididimite costumam ser IST.",
      esperar: "—",
      interpretacao: "Positivo → tratar paciente e parcerias conforme PCDT IST.",
      limitacoes: "Disponibilidade da biologia molecular varia; na falta, tratar sindromicamente."
    },
    {
      nome: "Exames gerais",
      pedido: "Hemograma, PCR, creatinina, glicemia. Hemoculturas se febre alta ou sinais de sepse.",
      porQue: "Gravidade e função renal.",
      esperar: "Leucocitose na prostatite aguda.",
      interpretacao: "Creatinina elevada com retenção → obstrução.",
      limitacoes: "—"
    },
    {
      nome: "USG de vias urinárias com resíduo pós-miccional",
      pedido: "USG de rins e vias urinárias com medida do volume prostático e do resíduo pós-miccional (ou USG transretal se suspeita de abscesso).",
      porQue: "Retenção, abscesso, falha do tratamento, ITU recorrente.",
      esperar: "Pode mostrar próstata aumentada, resíduo elevado, hidronefrose.",
      interpretacao: "Abscesso prostático → urologia para drenagem. Resíduo elevado → tratar a obstrução.",
      limitacoes: "Não é necessário em cistite simples com boa resposta."
    },
    {
      nome: "PSA",
      pedido: "Não solicitar PSA durante a infecção.",
      porQue: "A prostatite eleva o PSA de forma transitória.",
      esperar: "PSA alto na fase aguda.",
      interpretacao: "Se houver indicação de PSA (ver ficha hpb), dosar só algumas semanas após a cura clínica.",
      limitacoes: "PSA elevado na prostatite não indica câncer."
    }
  ],
  tratamento: [
    {
      droga: "Ciprofloxacino",
      linha: "l1",
      dose: "500 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Cistite masculina: 7 dias · Prostatite aguda: 2–4 semanas (reavaliar em 14 dias) · Prostatite crônica: 4 semanas",
      monitorizacao: "Tendinopatia, confusão no idoso, QT, glicemia",
      contraindicacoes: "Miastenia, aneurisma de aorta, QT longo, tendinopatia prévia por quinolona",
      ajustes: "Boa penetração na próstata. Preferir guiado por antibiograma (resistência comunitária em E. coli). ClCr < 30: 500 mg 24/24 h. Separar 2 h de antiácidos, ferro, cálcio e leite. RENAME"
    },
    {
      droga: "Levofloxacino",
      linha: "alt",
      dose: "500–750 mg",
      via: "VO",
      intervalo: "24/24 h",
      duracao: "Igual ao ciprofloxacino",
      monitorizacao: "Igual ao ciprofloxacino",
      contraindicacoes: "Igual ao ciprofloxacino",
      ajustes: "Uma tomada ao dia. Ajustar se ClCr < 50"
    },
    {
      droga: "Sulfametoxazol + trimetoprima",
      linha: "alt",
      dose: "800/160 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Cistite masculina: 7 dias · Prostatite aguda: 2–4 semanas",
      monitorizacao: "Potássio e creatinina, rash, hemograma em uso prolongado",
      contraindicacoes: "Alergia a sulfa, deficiência de G6PD",
      ajustes: "Usar se sensível no antibiograma. ClCr 15–30: metade da dose. Interage com varfarina, metotrexato, IECA/BRA e espironolactona (hipercalemia). RENAME"
    },
    {
      droga: "Nitrofurantoína (cistite masculina afebril)",
      linha: "alt",
      dose: "100 mg",
      via: "VO",
      intervalo: "6/6 h (macrocristais) ou conforme apresentação",
      duracao: "7 dias",
      monitorizacao: "Náusea",
      contraindicacoes: "ClCr < 30 (eficácia menor e toxicidade); suspeita de prostatite ou febre",
      ajustes: "Não atinge a próstata: só para cistite sem febre e sem sinais de prostatite. RENAME"
    },
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "1–2 g",
      via: "IV ou IM",
      intervalo: "24/24 h",
      duracao: "Até melhora; depois VO para completar 2–4 semanas",
      monitorizacao: "Curva térmica",
      contraindicacoes: "Anafilaxia a cefalosporinas",
      ajustes: "Prostatite com febre alta ou não tolera VO: 1ª dose na UBS e encaminhar. Epididimite com risco de IST: 500 mg IM dose única + doxiciclina 100 mg 12/12 h por 10 dias (CDC 2021; tratar parcerias — ver ficha cervicite-uretrite)"
    },
    {
      droga: "Tansulosina 0,4 mg ou doxazosina 2–4 mg",
      linha: "adj",
      dose: "Tansulosina 0,4 mg 1×/dia · Doxazosina 2 mg à noite (ajustar até 4 mg)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Durante a fase aguda; manter se sintomas obstrutivos",
      monitorizacao: "Hipotensão postural, tontura",
      contraindicacoes: "Hipotensão ortostática; cirurgia de catarata programada (síndrome da íris flácida)",
      ajustes: "Alivia sintomas e reduz risco de retenção. Doxazosina na RENAME"
    },
    {
      droga: "Massagem prostática",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Prostatite aguda",
      ajustes: "Risco de bacteriemia. Também evitar cateterismo uretral repetido; se retenção, sonda de pequeno calibre ou cistostomia suprapúbica (urologia)"
    }
  ],
  destino: {
    agora: [
      "Urocultura e 1ª dose do antibiótico na UBS",
      "Sepse, retenção urinária ou não tolera VO: 1ª dose de ceftriaxona e encaminhar ao PS"
    ],
    reavaliar: [
      "48–72 h: febre e dor devem melhorar; ajustar ao antibiograma",
      "Prostatite aguda: reavaliar em 14 dias para decidir parar ou completar 4 semanas"
    ],
    alta: [
      "Melhora clínica completa ao fim do esquema",
      "Após prostatite ou ITU febril: avaliar sintomas obstrutivos e resíduo pós-miccional (ver ficha hpb)"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Sepse, retenção urinária, abscesso prostático, imunossupressão, falha do tratamento oral"
    ],
    transferencia: [
      "Abscesso prostático ou retenção que não se resolve: urologia"
    ]
  },
  prescricao: {
    ambulatorial: "CISTITE NO HOMEM (sem febre, sem dor perineal) — ajustar ao antibiograma\nUSO ORAL\n1. Ciprofloxacino 500 mg ---------------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   OU Sulfametoxazol + trimetoprima 800/160 mg ------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   OU Nitrofurantoína 100 mg ------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias (não usar se febre ou suspeita de prostatite).\n\nPROSTATITE AGUDA SEM SEPSE (reavaliar em 48–72 h e em 14 dias)\nUSO ORAL\n1. Ciprofloxacino 500 mg ---------------------------- 28 comprimidos (repetir receita se estender para 4 semanas)\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias, podendo estender até 4 semanas conforme reavaliação.\n   (Alternativa guiada por cultura: sulfametoxazol + trimetoprima 800/160 mg de 12/12 h pelo mesmo período.)\n2. Ibuprofeno 600 mg -------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas após as refeições por até 5 dias, se dor (evitar se DRC, úlcera ou anticoagulante).\n   OU Dipirona 500 mg: 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n3. Doxazosina 2 mg ---------------------------------- 30 comprimidos\n   Tomar 1 comprimido à noite, ao deitar. Levantar devagar.\n4. Lactulose 667 mg/mL ------------------------------ 1 frasco\n   Tomar 15 mL 1 a 2 vezes ao dia se intestino preso (evitar esforço ao evacuar).\n\nEPIDIDIMITE / URETRITE COM RISCO DE IST: ceftriaxona 500 mg IM dose única + doxiciclina 100 mg de 12/12 h por 10 dias; tratar parcerias (ver ficha cervicite-uretrite).",
    hospitalar: "PROSTATITE AGUDA GRAVE — ADULTO\n1. Dieta livre conforme aceitação.\n2. Acesso venoso; SF 0,9% 500 mL IV em 30 min se desidratação ou hipotensão (sepse: ver ficha sepse).\n3. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia (sepse com risco de ESBL/Pseudomonas: piperacilina + tazobactam 4,5 g IV de 6/6 h ou meropenem 1 g IV de 8/8 h, em 100 mL de SF 0,9% em 30 min).\n4. Dipirona 1 g (2 mL) + água destilada 8 mL IV lento de 6/6 h se dor ou febre.\n5. Ondansetrona 4 mg (2 mL) IV lento de 8/8 h se náusea.\n6. Retenção urinária: cistostomia suprapúbica (urologia) ou sonda uretral de pequeno calibre, sem manobras repetidas.\n7. Enoxaparina 40 mg SC 1 vez ao dia se sem contraindicação.\n8. Controles: sinais vitais de 4/4 h, diurese, glicemia se diabético.\n9. Exames: urocultura, hemoculturas, hemograma, PCR, creatinina; USG (transretal se suspeita de abscesso).\n10. Trocar para ciprofloxacino 500 mg VO 12/12 h (ou conforme antibiograma) quando afebril e melhorando; total de 2–4 semanas."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico até o fim; na prostatite o tratamento é longo (2 a 4 semanas) para não voltar",
    "Beber água, evitar álcool e cafeína em excesso, não fazer força para urinar ou evacuar",
    "Evitar relação sexual até melhorar; se houver suspeita de IST, a parceria também precisa ser tratada",
    "Voltar imediatamente se: não conseguir urinar, febre alta que não cede em 48 h, calafrios fortes, confusão, tontura ao levantar, dor forte no saco escrotal",
    "Retornar em 48–72 h com o resultado da urocultura e em 14 dias para reavaliação da prostatite",
    "Após a cura, conversar sobre sintomas urinários de próstata e, se indicado, exame de PSA algumas semanas depois"
  ],
  tabelas: [
    {
      titulo: "Duração do antibiótico na ITU masculina",
      colunas: ["Situação", "Duração"],
      linhas: [
        ["Cistite masculina afebril", "7 dias"],
        ["ITU febril sem sinais de prostatite (boa resposta)", "7 dias (IDSA 2025)"],
        ["ITU febril com suspeita de prostatite aguda", "10–14 dias no mínimo; habitualmente 2–4 semanas"],
        ["Prostatite bacteriana crônica", "Quinolona por 4 semanas (urologia)"]
      ],
      nota: "IDSA 2025 reconhece evidência limitada para a duração ideal na prostatite; EAU recomenda 2–4 semanas na aguda e 4 a 6 semanas de quinolona na crônica."
    }
  ],
  fontes: [
    "IDSA — 2025 Guideline on Management and Treatment of Complicated Urinary Tract Infections (Clin Infect Dis, 2025)",
    "EAU — Guidelines on Urological Infections (edição 2025): prostatite bacteriana aguda e crônica",
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022): uretrite e epididimite",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021): epididimite aguda",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
