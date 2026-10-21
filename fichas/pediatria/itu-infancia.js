// Infecção do trato urinário na infância
registrarFicha({
  id: "itu-infancia",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Infecção do trato urinário na infância",
  resumo: "ITU em crianças de 2 meses a adolescentes: cistite (sintomas urinários sem febre) e pielonefrite (ITU febril). Diagnóstico exige urina colhida corretamente e urocultura. Para febre em menor de 2–3 meses, ver também a ficha febre-lactente.",
  palavrasChave: "itu infeccao urinaria crianca pielonefrite cistite urocultura saco coletor sondagem vesical jato medio cefalexina cefuroxima amoxicilina clavulanato ceftriaxona refluxo vesicoureteral uretrocistografia ultrassonografia rins e vias urinarias",
  critico: {
    tempo: "ITU febril: antibiótico em até 48 h",
    texto: "Lactente com febre sem foco: colher urina por sondagem (ou jato médio se continente) e urocultura ANTES do antibiótico. Antibiótico precoce na ITU febril reduz o risco de cicatriz renal."
  },
  alarmes: [
    "Idade < 2–3 meses com febre (internar — ver febre-lactente)",
    "Aspecto toxêmico, sepse, desidratação, vômitos que impedem antibiótico oral",
    "Massa abdominal ou bexiga palpável, jato urinário fraco em menino (válvula de uretra posterior)",
    "Creatinina elevada, HAS, oligúria",
    "Uropatia conhecida (hidronefrose, refluxo de alto grau), rim único, imunossupressão",
    "Ausência de melhora da febre após 48–72 h de antibiótico adequado",
    "Germe não-E. coli (Proteus, Pseudomonas, Klebsiella) ou ITU febril recorrente (suspeita de malformação)"
  ],
  condutaInicial: [
    "Suspeitar: lactente com febre sem foco, irritabilidade, vômitos, baixo ganho de peso; criança maior com disúria, polaciúria, urgência, enurese secundária, dor lombar ou abdominal",
    "Coletar urina adequadamente: sem controle esfincteriano → cateterismo vesical (ou punção suprapúbica); com controle → jato médio após higiene. Saco coletor só serve se o resultado for normal (alto falso-positivo)",
    "Urina tipo 1 / fita (leucocitúria, nitrito) + bacterioscopia (Gram) + urocultura antes do antibiótico",
    "Iniciar antibiótico empírico se exame sugestivo (leucocitúria e/ou nitrito positivo) com clínica compatível; ajustar pelo antibiograma",
    "Via oral é tão eficaz quanto IV na criança > 2–3 meses com bom estado e que aceita VO",
    "Analgesia/antitérmico, hidratação, reavaliar em 48–72 h",
    "Planejar USG de rins e vias urinárias após a 1ª ITU febril em < 2 anos (e em qualquer idade com ITU atípica ou recorrente)"
  ],
  fataisExcluir: [
    "Urossepse / bacteremia (maior risco < 3 meses)",
    "Meningite concomitante no lactente jovem",
    "Uropatia obstrutiva (válvula de uretra posterior, estenose de JUP) com lesão renal",
    "Abscesso renal",
    "Abuso sexual (ITU de repetição com lesões genitais)"
  ],
  proximaDecisao: "Reavaliar em 48–72 h com a urocultura: melhora → completar o curso oral e programar imagem. Febre persistente → rever antibiograma, internar, USG renal urgente (abscesso, obstrução). Após a 1ª ITU febril: USG; uretrocistografia miccional se USG alterada, ITU atípica ou 2ª ITU febril.",
  clinica: {
    anamnese: [
      "Febre (duração, intensidade), irritabilidade, recusa alimentar, vômitos, diarreia (lactente: sintomas inespecíficos)",
      "Disúria, polaciúria, urgência, incontinência/enurese nova, urina com odor forte ou hematúria, dor lombar ou suprapúbica",
      "ITU prévia, uropatia na USG pré-natal (hidronefrose), cirurgia urológica",
      "Constipação e disfunção vesical (segurar a urina, micções infrequentes, manobras de contenção) — fatores de recorrência",
      "Fimose em menino < 1 ano não circuncidado; higiene, sinéquia de pequenos lábios",
      "Antibiótico recente; contato com serviços de saúde (resistência)"
    ],
    exameFisico: [
      "Sinais vitais, PA, estado geral, hidratação",
      "Abdome: dor suprapúbica, punho-percussão lombar (Giordano), massa, globo vesical",
      "Genitália: fimose, sinéquias, vulvovaginite, lesões, sinais de abuso",
      "Região lombossacra: estigmas de disrafismo (bexiga neurogênica)",
      "Busca de outros focos de febre (otite, pneumonia, exantema)",
      "Curva de crescimento"
    ],
    diferenciais: [
      { dx: "Vulvovaginite / balanopostite", pista: "Disúria por contato da urina com mucosa inflamada; leucocitúria discreta, urocultura negativa" },
      { dx: "Bacteriúria assintomática", pista: "Urocultura positiva sem sintomas e sem leucocitúria — não tratar" },
      { dx: "Disfunção do trato urinário inferior / constipação", pista: "Urgência, incontinência, disúria com cultura negativa" },
      { dx: "Febre sem foco de outra origem", pista: "Leucocitúria pode ocorrer em febre de qualquer causa e em Kawasaki" },
      { dx: "Urolitíase, hipercalciúria", pista: "Hematúria, dor em cólica, história familiar" },
      { dx: "Apendicite pélvica", pista: "Leucocitúria estéril, dor em FID" }
    ],
    gravidade: [
      "Cistite: sintomas urinários sem febre (geralmente > 2 anos)",
      "Pielonefrite (ITU febril): febre ≥ 38 °C, dor lombar, sintomas sistêmicos; no lactente, febre pode ser o único sinal",
      "ITU atípica (NICE): criança gravemente doente, fluxo urinário fraco, massa abdominal/vesical, creatinina elevada, sepse, sem resposta a antibiótico em 48 h, germe não-E. coli",
      "Diagnóstico (urocultura): punção suprapúbica — qualquer crescimento de gram-negativo; cateterismo — ≥ 50.000 UFC/mL (AAP; alguns serviços usam ≥ 10.000); jato médio — ≥ 100.000 UFC/mL de um único germe. AAP exige também leucocitúria/piúria"
    ]
  },
  exames: [
    {
      nome: "Urina tipo 1 / fita reagente e bacterioscopia",
      pedido: "Urina tipo 1 (EAS) com bacterioscopia (Gram de gota de urina não centrifugada). Coleta por cateterismo vesical (sem controle esfincteriano) ou jato médio (com controle).",
      porQue: "Triagem rápida para iniciar tratamento empírico.",
      esperar: "Sem leucocitúria, nitrito negativo, bacterioscopia negativa.",
      interpretacao: "Nitrito positivo é muito específico; esterase/leucocitúria é sensível. Bacterioscopia com bactérias gram-negativas reforça. Ambos negativos tornam ITU improvável.",
      limitacoes: "Nitrito frequentemente negativo em lactentes (urina fica pouco tempo na bexiga). Urina de saco coletor contamina com frequência."
    },
    {
      nome: "Urocultura com antibiograma",
      pedido: "Urocultura com contagem de colônias e antibiograma — coletar antes do antibiótico (método de coleta: ___).",
      porQue: "Padrão-ouro do diagnóstico e guia do tratamento.",
      esperar: "Negativa.",
      interpretacao: "Ver cortes por método em 'gravidade'. Crescimento misto ou baixa contagem em jato médio = contaminação provável; repetir.",
      limitacoes: "Resultado em 48–72 h. Saco coletor positivo não confirma ITU: recoletar por método adequado."
    },
    {
      nome: "Exames de sangue (ITU febril com mau estado ou < 3 meses)",
      pedido: "Hemograma, PCR, ureia, creatinina, eletrólitos; hemocultura se toxemiado ou < 3 meses.",
      porQue: "Avaliar gravidade, função renal e bacteremia.",
      esperar: "Função renal normal.",
      interpretacao: "PCR/procalcitonina elevadas sugerem pielonefrite; creatinina alta → ITU atípica.",
      limitacoes: "Não são necessários na cistite nem na criança > 3 meses com bom estado."
    },
    {
      nome: "USG de rins e vias urinárias",
      pedido: "Ultrassonografia de rins e vias urinárias (com avaliação da bexiga pré e pós-miccional) — 1ª ITU febril.",
      porQue: "Detectar hidronefrose, duplicidade, obstrução, abscesso.",
      esperar: "Normal.",
      interpretacao: "Alterada → uretrocistografia miccional e encaminhamento à nefrologia/urologia pediátrica.",
      limitacoes: "Normal não exclui refluxo vesicoureteral. Fazer durante a internação se ITU atípica ou sem melhora em 48 h; nos demais, em até 6 semanas (rotina de < 2 anos na 1ª ITU febril — AAP)."
    },
    {
      nome: "Uretrocistografia miccional (UCM) e cintilografia DMSA",
      pedido: "Uretrocistografia miccional — após tratamento, com urocultura negativa (sob profilaxia se indicado).",
      porQue: "Diagnosticar refluxo vesicoureteral e válvula de uretra posterior.",
      esperar: "Sem refluxo.",
      interpretacao: "Indicada se USG alterada, ITU atípica, ITU febril recorrente (AAP: não de rotina após a 1ª ITU febril com USG normal). DMSA (4–6 meses após) para cicatriz renal em casos selecionados.",
      limitacoes: "Exame invasivo, com radiação; decisão compartilhada com especialista."
    }
  ],
  tratamento: [
    {
      droga: "Cefalexina",
      linha: "l1",
      dose: "50–100 mg/kg/dia (máx 4 g/dia)",
      via: "VO (suspensão 250 mg/5 mL; cápsula 500 mg)",
      intervalo: "6/6 h (ou 8/8 h)",
      duracao: "Cistite: 5 dias (3–5 dias em adolescentes). Pielonefrite: 7–10 dias (AAP 7–14; SBP 10 dias). No SCOUT (2023), 5 dias totais foram não inferiores a 10 dias em crianças de 2 meses a 10 anos que melhoraram até o 5º dia",
      monitorizacao: "Febre deve ceder em 48–72 h",
      contraindicacoes: "Alergia grave a betalactâmicos",
      ajustes: "Na RENAME. Boa opção oral onde a resistência local permite; ajustar ao antibiograma"
    },
    {
      droga: "Amoxicilina + clavulanato",
      linha: "l1",
      dose: "40–50 mg/kg/dia de amoxicilina (máx 1.750 mg/dia de amoxicilina na formulação 7:1, conforme apresentação)",
      via: "VO (suspensão 400 + 57 mg/5 mL)",
      intervalo: "12/12 h (formulação 7:1) ou 8/8 h (4:1)",
      duracao: "Cistite: 5 dias. Pielonefrite: 7–10 dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina; icterícia colestática prévia com o fármaco",
      ajustes: "Na RENAME. SBP 2021 cita 20–40 mg/kg/dia de 8/8 h; usar a dose maior na pielonefrite"
    },
    {
      droga: "Cefuroxima axetil",
      linha: "alt",
      dose: "30 mg/kg/dia (máx 1 g/dia)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Pielonefrite: 7–10 dias",
      monitorizacao: "—",
      contraindicacoes: "Alergia grave a cefalosporinas",
      ajustes: "Não está na RENAME; alternativa oral de 2ª geração com boa cobertura de E. coli"
    },
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "50–75 mg/kg/dia (máx 2 g/dia)",
      via: "IV (em 30 min, diluída em SF 0,9% ou SG 5%) ou IM",
      intervalo: "24/24 h",
      duracao: "Até afebril 24–48 h e aceitando VO; completar 7–10 dias com oral pelo antibiograma",
      monitorizacao: "Curva térmica, aceitação VO",
      contraindicacoes: "RN < 28 dias com hiperbilirrubinemia ou soluções com cálcio IV (usar cefotaxima)",
      ajustes: "Indicada: toxemia, vômitos, < 2–3 meses, falha oral. Lactente < 2 meses: associar ampicilina (enterococo) — ver febre-lactente. Gentamicina 5–7,5 mg/kg/dia IV 1 vez ao dia é alternativa (monitorar função renal)"
    },
    {
      droga: "Nitrofurantoína",
      linha: "alt",
      dose: "Tratamento de cistite: 5–7 mg/kg/dia (máx 400 mg/dia). Profilaxia: 1–2 mg/kg 1 vez à noite (máx 100 mg)",
      via: "VO",
      intervalo: "6/6 h (tratamento) ou 1 vez à noite (profilaxia)",
      duracao: "Cistite: 5 dias. Profilaxia: conforme especialista",
      monitorizacao: "Náuseas; uso prolongado: função pulmonar e hepática",
      contraindicacoes: "PIELONEFRITE/ITU febril (não atinge nível tecidual renal); < 1 mês; TFG reduzida; deficiência de G6PD",
      ajustes: "Na RENAME. Profilaxia antibiótica não é rotina após 1ª ITU; considerar em refluxo de alto grau ou ITU febril recorrente, com especialista"
    },
    {
      droga: "Sulfametoxazol + trimetoprima",
      linha: "alt",
      dose: "6–12 mg/kg/dia de trimetoprima (máx 320 mg/dia de TMP)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Cistite: 5 dias; pielonefrite: 7–10 dias (só se sensível)",
      monitorizacao: "Exantema, citopenias",
      contraindicacoes: "< 2 meses; deficiência de G6PD",
      ajustes: "Resistência de E. coli costuma ser alta no Brasil: usar só guiado por antibiograma ou perfil local"
    }
  ],
  destino: {
    agora: [
      "Criança > 2–3 meses, bom estado, aceitando VO: tratamento ambulatorial com antibiótico oral",
      "< 2–3 meses febril, toxemiado ou vômitos: internar"
    ],
    reavaliar: [
      "48–72 h: febre, aceitação, resultado da urocultura e antibiograma",
      "Após o tratamento: urocultura de controle NÃO é necessária se a criança melhorou"
    ],
    alta: [
      "Afebril, aceitando VO, com antibiótico ajustado e USG programada",
      "Orientar tratamento de constipação e de disfunção miccional (reduz recorrência)"
    ],
    observacao: [
      "Dose de ceftriaxona IM/IV no PS e reavaliação em 24 h na UBS se dúvida sobre aceitação oral"
    ],
    internacao: [
      "< 2–3 meses; toxemia/sepse; desidratação ou vômitos persistentes; falha do tratamento oral; ITU em uropatia complexa; contexto social que impede tratamento seguro"
    ],
    transferencia: [
      "Nefrologia/urologia pediátrica: USG alterada, refluxo vesicoureteral, ITU febril recorrente, ITU atípica, alteração de função renal ou HAS"
    ]
  },
  prescricao: {
    ambulatorial: "ITU FEBRIL (PIELONEFRITE) — CRIANÇA > 3 MESES EM BOM ESTADO (peso: ___ kg)\nUSO ORAL\n1. Cefalexina suspensão 250 mg/5 mL ------------- ___ frascos\n   Dar ___ mL (50–100 mg/kg/dia; ex.: 100 mg/kg/dia = 2 mL/kg/dia dividido em 4 doses) de 6 em 6 horas por 10 dias.\n   Exemplo: 10 kg, 100 mg/kg/dia → 5 mL de 6 em 6 horas.\n   OU Amoxicilina + clavulanato suspensão 400 + 57 mg/5 mL ---- ___ frascos\n   Dar ___ mL (45 mg/kg/dia de amoxicilina = 0,56 mL/kg/dia) dividido de 12 em 12 horas por 10 dias.\n   Exemplo: 10 kg → 2,8 mL de 12 em 12 horas.\n2. Dipirona gotas 500 mg/mL --------------------- 1 frasco\n   Dar ___ gotas (1 gota = 25 mg; 15 mg/kg/dose ≈ 0,6 gota/kg; ex.: 10 kg = 6 gotas; máx 1 g/dose) de 6 em 6 horas se febre ou dor (> 3 meses e > 5 kg).\n   OU Paracetamol gotas 200 mg/mL: 1 gota/kg (≈ 10 mg/kg) de 6 em 6 horas se febre (máx 5 doses/dia).\n\nCISTITE (sem febre, criança maior / adolescente)\n1. Cefalexina 50 mg/kg/dia de 6/6 h (máx 4 g/dia) por 5 dias; adolescente: 500 mg de 6/6 h por 5 dias.\n   OU Nitrofurantoína 100 mg (adolescente, só cistite): 1 cápsula de 6/6 h por 5 dias.\n\nORIENTAÇÕES\n- Oferecer água com frequência; urinar a cada 3 horas, sem segurar.\n- Tratar a prisão de ventre.\n- Meninas: higiene de frente para trás.",
    hospitalar: "ITU FEBRIL — INTERNAÇÃO (peso: ___ kg)\n1. Dieta livre para a idade / aleitamento materno conforme aceitação.\n2. Hidratação venosa de manutenção se não aceita VO (Holliday-Segar com soro isotônico e glicose).\n3. Ceftriaxona ___ mg (50–75 mg/kg/dia, máx 2 g) IV 1 vez ao dia, diluída em SF 0,9% 20–50 mL, em 30 minutos.\n   Lactente < 2 meses: + ampicilina 50 mg/kg/dose IV de 6/6 h (ver ficha febre-lactente).\n   Alternativa (alergia a cefalosporina): gentamicina 5–7,5 mg/kg IV 1 vez ao dia, diluída em SF 0,9% e infundida em 30–60 minutos.\n4. Dipirona 15–25 mg/kg/dose IV (máx 1 g) de 6/6 h se febre ou dor (IV só a partir de 1 ano; de 3 a 11 meses, IM; contraindicada < 3 meses ou < 5 kg).\n5. Controles: temperatura de 4/4 h, diurese, PA diária; peso diário.\n6. Exames: hemograma, PCR, ureia, creatinina, eletrólitos; hemocultura; urocultura com antibiograma (coletada antes do antibiótico); USG de rins e vias urinárias.\n7. Afebril por 24–48 h e aceitando VO: trocar para antibiótico oral pelo antibiograma, completar 7–10 dias."
  },
  orientacoesRetorno: [
    "Dar o antibiótico até o fim, mesmo que a febre passe antes",
    "Oferecer bastante líquido; não segurar a urina; tratar a prisão de ventre",
    "Voltar imediatamente se: febre que continua após 48 horas de antibiótico, vômitos que impedem tomar o remédio, criança muito sonolenta ou irritada, menos urina, manchas na pele, dificuldade para respirar",
    "Retorno em 48–72 horas com o resultado da urocultura para conferir o antibiótico",
    "Fazer a ultrassonografia pedida e trazer o resultado; em próximas febres sem causa, procurar atendimento para exame de urina"
  ],
  tabelas: [
    {
      titulo: "Coleta de urina na criança",
      colunas: ["Método", "Quando usar", "Urocultura positiva"],
      linhas: [
        ["Punção suprapúbica", "Lactente; padrão de referência", "Qualquer crescimento de gram-negativo"],
        ["Cateterismo vesical", "Sem controle esfincteriano (1ª escolha prática)", "≥ 50.000 UFC/mL (AAP); alguns serviços ≥ 10.000"],
        ["Jato médio", "Com controle esfincteriano", "≥ 100.000 UFC/mL de um germe"],
        ["Saco coletor", "Só triagem: válido se negativo", "Positivo não confirma: recoletar por método adequado"]
      ]
    }
  ],
  fontes: [
    "SBP — Departamento Científico de Nefrologia: Infecção do trato urinário em pediatria — atualização (2021) e Infecção urinária: diagnóstico, investigação e prevenção (2023)",
    "AAP — Urinary Tract Infection: Clinical Practice Guideline for the Diagnosis and Management of the Initial UTI in Febrile Infants and Children 2 to 24 Months (2011; reafirmada 2016)",
    "NICE — Urinary tract infection in under 16s: diagnosis and management (NG224, 2022)",
    "Zaoutis T et al. — Short-Course Therapy for Urinary Tract Infections in Children: SCOUT trial (JAMA Pediatr, 2023)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
