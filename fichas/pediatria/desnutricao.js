// Desnutrição na criança: classificação e manejo da desnutrição aguda grave (10 passos da OMS)
registrarFicha({
  id: "desnutricao",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Desnutrição na criança (desnutrição aguda grave — 10 passos da OMS)",
  resumo: "Classificação do estado nutricional pelo escore-z (curvas OMS) e manejo hospitalar da desnutrição aguda grave (marasmo, kwashiorkor): hipoglicemia, hipotermia, desidratação com ReSoMal, infecção, micronutrientes, F-75 e F-100. Sobrepeso e obesidade infantil no fim da ficha.",
  palavrasChave: "desnutricao desnutricao grave marasmo kwashiorkor emagrecimento magreza acentuada escore z peso estatura perimetro braquial pb edema nutricional f-75 f-100 resomal rutf hipoglicemia hipotermia realimentacao sindrome de realimentacao 10 passos oms obesidade infantil sobrepeso",
  critico: {
    tempo: "Glicose, aquecer e ATB na 1ª hora",
    texto: "Toda criança com desnutrição grave é tratada como hipoglicêmica, hipotérmica e infectada até prova em contrário. Hidratar de preferência VO/SNG com ReSoMal; SF IV rápido pode causar insuficiência cardíaca."
  },
  alarmes: [
    "Peso/estatura (ou IMC/idade) < escore-z −3, perímetro braquial < 11,5 cm (6–59 meses) ou edema bilateral de pés (desnutrição aguda grave)",
    "Glicemia < 54 mg/dL (3 mmol/L), temperatura axilar < 35 °C",
    "Letargia, inconsciência, convulsão",
    "Choque: extremidades frias, enchimento capilar > 3 s, pulso fino",
    "Diarreia com desidratação, vômitos persistentes, recusa alimentar (falha no teste do apetite)",
    "Lesões oculares de deficiência de vitamina A (xeroftalmia, úlcera de córnea)",
    "Lesões de pele extensas descamativas (kwashiorkor), anemia grave (Hb < 4 g/dL ou < 6 g/dL com dispneia)",
    "Lactente < 6 meses com emagrecimento visível ou que não suga bem"
  ],
  condutaInicial: [
    "Pesar, medir, PB (6–59 meses), pesquisar edema (pressão no dorso dos pés por 3 s); classificar pelo escore-z (tabela)",
    "Glicemia capilar imediata; < 54 mg/dL ou impossível medir: 50 mL de glicose 10% VO/SNG (ou glicose 10% 5 mL/kg IV se inconsciente) e iniciar F-75 em 30 min",
    "Temperatura: < 35 °C axilar → contato pele a pele (método canguru), cobrir cabeça, ambiente aquecido, alimentar já",
    "Avaliar desidratação com cautela (sinais clássicos superestimam): sem choque → ReSoMal VO/SNG; com choque → expansão IV lenta (tabela)",
    "Antibiótico para todas as crianças com desnutrição grave internadas, mesmo sem foco",
    "Iniciar F-75 em pequenos volumes a cada 2 h, dia e noite (inclusive madrugada)",
    "Coletar exames, mas não atrasar glicose, aquecimento, antibiótico e alimentação"
  ],
  fataisExcluir: [
    "Hipoglicemia e hipotermia (causas mais comuns de morte nas primeiras 48 h)",
    "Sepse/choque séptico",
    "Insuficiência cardíaca por sobrecarga de volume ou sódio",
    "Síndrome de realimentação (hipofosfatemia, hipocalemia, hipomagnesemia)",
    "Tuberculose, HIV, cardiopatia, doença renal ou metabólica como causa de base",
    "Negligência ou maus-tratos"
  ],
  proximaDecisao: "Fase de estabilização (dias 1–7): F-75 até voltar o apetite e o edema começar a diminuir. Depois, transição para F-100 (ou RUTF) em 2–3 dias e fase de reabilitação com meta de ganho > 10 g/kg/dia; iniciar ferro só nessa fase. Desnutrição grave SEM complicação, com apetite preservado (passa no teste do apetite), pode ser tratada no ambulatório com RUTF onde houver programa.",
  clinica: {
    anamnese: [
      "Alimentação habitual (antes da doença), aleitamento materno, quantidade e qualidade, quem alimenta",
      "Duração e frequência de diarreia, vômitos; tosse crônica, febre",
      "Contato com tuberculose; sarampo recente; HIV materno",
      "Perda de peso, edema, apetite (teste do apetite com RUTF quando disponível)",
      "Peso ao nascer, prematuridade, desenvolvimento, vacinas",
      "Contexto social: renda, insegurança alimentar, Bolsa Família, violência, negligência, saúde mental materna"
    ],
    exameFisico: [
      "Peso, comprimento/estatura, PB, edema (+ pés; ++ pés e pernas/mãos; +++ generalizado incluindo face)",
      "Temperatura axilar, FR, FC, enchimento capilar, pulsos, nível de consciência",
      "Marasmo: emagrecimento acentuado, pele sobre os ossos, face de velho, sem edema",
      "Kwashiorkor: edema depressível, dermatose (pele descamativa \"em tinta descascada\"), cabelo fino/descolorido, hepatomegalia",
      "Olhos (xeroftalmia, manchas de Bitot, úlcera de córnea), boca (candidíase, estomatite), pele (lesões, escaras)",
      "Sinais de infecção: pneumonia, otite, ITU, lesões de pele; ausculta cardíaca e sinais de ICC",
      "Sinais de violência ou negligência"
    ],
    diferenciais: [
      { dx: "Desnutrição primária (ingestão insuficiente)", pista: "Insegurança alimentar, desmame precoce, alimentação inadequada" },
      { dx: "Desnutrição secundária", pista: "Doença crônica: tuberculose, HIV, doença celíaca, fibrose cística, cardiopatia, nefropatia, parasitose, alergia alimentar" },
      { dx: "Síndrome nefrótica / hepatopatia / ICC", pista: "Edema com proteinúria maciça, ascite, sopro; edema não nutricional" },
      { dx: "Baixa estatura familiar ou constitucional", pista: "Peso/estatura normal, estatura baixa proporcional, velocidade de crescimento normal" }
    ],
    gravidade: [
      "Desnutrição aguda (wasting) — peso/estatura ou IMC/idade: < −3 escore-z = magreza acentuada (grave); −3 a −2 = magreza (moderada)",
      "Perímetro braquial (6–59 meses): < 11,5 cm = grave; 11,5 a < 12,5 cm = moderada",
      "Edema bilateral de origem nutricional = desnutrição grave independentemente do peso",
      "Desnutrição crônica (stunting) — estatura/idade < −2 escore-z (baixa estatura); < −3 (muito baixa)",
      "Peso/idade < −2: baixo peso; < −3: muito baixo peso",
      "Complicada (internar): falta de apetite, edema +++, complicações clínicas (desidratação, hipoglicemia, hipotermia, infecção, letargia, anemia grave), lactente < 6 meses"
    ]
  },
  exames: [
    {
      nome: "Exames iniciais",
      pedido: "Glicemia (capilar imediata e sérica). Hemograma completo. Sódio, potássio, cálcio, magnésio, fósforo. Ureia, creatinina. Albumina, proteínas totais. Urina tipo 1 e urocultura. Hemocultura se febre, hipotermia ou toxemia. Parasitológico de fezes. Teste rápido/sorologia para HIV. Radiografia de tórax.",
      porQue: "Identificar hipoglicemia, distúrbios eletrolíticos, anemia grave, infecção oculta e causa de base.",
      esperar: "Hipocalemia, hipofosfatemia, hipomagnesemia, anemia e hipoalbuminemia (kwashiorkor) são comuns.",
      interpretacao: "Fósforo baixo antes ou durante a realimentação → risco de síndrome de realimentação. Sódio corporal total está alto mesmo com Na sérico baixo: não corrigir hiponatremia com sódio.",
      limitacoes: "A desnutrição grave frequentemente não dá febre nem leucocitose na infecção; não esperar exame para iniciar antibiótico."
    },
    {
      nome: "Investigação da causa conforme o caso",
      pedido: "Prova tuberculínica/IGRA e investigação de tuberculose se contato ou tosse crônica. Anti-transglutaminase IgA + IgA total (doença celíaca). Teste do suor (fibrose cística) se infecções respiratórias de repetição. Ecocardiograma se sopro ou ICC.",
      porQue: "Desnutrição secundária exige tratar a doença de base.",
      esperar: "—",
      interpretacao: "Prova tuberculínica pode ser falso-negativa na desnutrição grave.",
      limitacoes: "Fazer após estabilização."
    },
    {
      nome: "Fósforo, potássio e magnésio de controle",
      pedido: "Fósforo, potássio, magnésio séricos diários nos primeiros 3–5 dias de realimentação.",
      porQue: "Monitorar síndrome de realimentação.",
      esperar: "Queda nos primeiros dias de alimentação.",
      interpretacao: "Queda importante → reduzir o volume de F-75 e repor.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Glicose 10% (hipoglicemia)",
      linha: "l1",
      dose: "Consciente: 50 mL de glicose 10% (ou sacarose 10%: 1 colher de chá rasa de açúcar em 3,5 colheres de sopa de água) · Inconsciente/convulsão: glicose 10% 5 mL/kg IV, depois 50 mL VO/SNG",
      via: "VO, SNG ou IV",
      intervalo: "Dose única; repetir se glicemia segue baixa",
      duracao: "Até F-75 a cada 2 h estabelecido",
      monitorizacao: "Glicemia após 30 min",
      contraindicacoes: "—",
      ajustes: "Prevenção: F-75 a cada 2 h dia e noite. Hipoglicemia geralmente indica infecção grave: antibiótico já"
    },
    {
      droga: "ReSoMal (solução de reidratação para desnutridos)",
      linha: "l1",
      dose: "5 mL/kg a cada 30 min por 2 h; depois 5–10 mL/kg/h alternando com F-75 (horas alternadas)",
      via: "VO ou SNG",
      intervalo: "Conforme esquema",
      duracao: "Até 10 h ou até parar sinais de desidratação",
      monitorizacao: "A cada 30 min na 1ª h-2 h, depois de hora em hora: FC, FR, diurese, nº de evacuações, hepatomegalia, edema",
      contraindicacoes: "Choque (usar IV)",
      ajustes: "ReSoMal tem menos sódio e mais potássio que o SRO padrão; usar a solução pronta ou a preparação do manual MS/OMS. Parar se FC e FR aumentarem (FR +5/min e FC +15/min), estertores, hepatomegalia ou edema (sobrecarga). Diarreia em curso: 50–100 mL a cada evacuação"
    },
    {
      droga: "Expansão IV no choque",
      linha: "l1",
      dose: "15 mL/kg em 1 h de Ringer lactato com glicose 5% (ou SF 0,45% com glicose 5%); se melhorar, repetir 15 mL/kg em 1 h e passar para ReSoMal VO/SNG",
      via: "IV",
      intervalo: "Reavaliar a cada 5–10 min",
      duracao: "1–2 h",
      monitorizacao: "FC e FR a cada 5–10 min (sobrecarga: parar)",
      contraindicacoes: "Sem choque: não usar IV",
      ajustes: "Sem melhora após o 1º bolus → tratar como choque séptico: soro de manutenção 4 mL/kg/h, antibióticos, sangue (concentrado de hemácias ou sangue total 10 mL/kg em 3 h) e considerar droga vasoativa em UTI. Transfundir também se Hb < 4 g/dL (ou < 6 com dificuldade respiratória): 10 mL/kg em 3 h, com furosemida 1 mg/kg IV no início"
    },
    {
      droga: "Antibiótico (desnutrição grave complicada)",
      linha: "l1",
      dose: "Ampicilina 50 mg/kg/dose 6/6 h por 2 dias, seguida de amoxicilina VO 15 mg/kg/dose 8/8 h por 5 dias + gentamicina 7,5 mg/kg 1×/dia por 7 dias",
      via: "IM/IV (depois VO)",
      intervalo: "Ampicilina 6/6 h; gentamicina 24/24 h",
      duracao: "7 dias",
      monitorizacao: "Diurese e função renal (gentamicina), resposta clínica em 48 h",
      contraindicacoes: "Gentamicina: cautela se oligúria",
      ajustes: "Sem complicação (ambulatorial): amoxicilina VO 7 dias (OMS 2013). Foco específico (meningite, disenteria, celulite) → antibiótico do foco. Ver tabela de falha"
    },
    {
      droga: "Ceftriaxona (sem melhora em 48 h ou choque séptico)",
      linha: "alt",
      dose: "50–100 mg/kg/dia (máx 2 g; meningite 100 mg/kg/dia, máx 4 g/dia)",
      via: "IV ou IM",
      intervalo: "1×/dia (ou 12/12 h na meningite)",
      duracao: "Conforme foco (em geral 7–10 dias)",
      monitorizacao: "Hemocultura, resposta clínica",
      contraindicacoes: "Neonato com hiperbilirrubinemia ou recebendo cálcio IV",
      ajustes: "Considerar cobertura para estafilococo (oxacilina) se lesões de pele/abscessos"
    },
    {
      droga: "F-75 (fase de estabilização)",
      linha: "l1",
      dose: "130 mL/kg/dia (≈ 100 kcal/kg/dia); edema grave (+++): 100 mL/kg/dia",
      via: "VO (copo/colher) ou SNG se não aceita 80% do volume",
      intervalo: "A cada 2 h (12 refeições) → a cada 3 h → a cada 4 h conforme tolerância",
      duracao: "Até retorno do apetite e redução do edema (em geral 2–7 dias)",
      monitorizacao: "Peso diário, aceitação, vômitos, diarreia, FC e FR (sobrecarga), fósforo e potássio",
      contraindicacoes: "—",
      ajustes: "F-75 (75 kcal/100 mL, pouca proteína e sódio) industrializado ou preparado conforme o manual do MS. Manter o aleitamento materno, oferecendo o peito antes do F-75. Sinais de síndrome de realimentação: reduzir o volume e repor fósforo/potássio"
    },
    {
      droga: "F-100 ou RUTF (fase de reabilitação)",
      linha: "l1",
      dose: "Transição: substituir F-75 por igual volume de F-100 por 2 dias; depois aumentar 10 mL por refeição até sobrar; meta 150–220 kcal/kg/dia (F-100 150–200 mL/kg/dia)",
      via: "VO",
      intervalo: "A cada 4 h (5–6 refeições/dia), mais alimentação da família adaptada",
      duracao: "Até peso/estatura ≥ −2 escore-z (ou PB ≥ 12,5 cm) e sem edema por 2 semanas",
      monitorizacao: "Ganho de peso: bom > 10 g/kg/dia; moderado 5–10; ruim < 5 (investigar infecção, oferta, TB, HIV). FC e FR a cada 4 h na transição",
      contraindicacoes: "Iniciar só após estabilização",
      ajustes: "RUTF (alimento terapêutico pronto) pode substituir F-100 onde disponível, inclusive no ambulatório"
    },
    {
      droga: "Micronutrientes",
      linha: "adj",
      dose: "Ácido fólico 5 mg no dia 1, depois 1 mg/dia · Multivitamínico diário · Zinco e cobre (na mistura mineral do F-75/F-100) · Vitamina A: < 6 meses 50.000 UI; 6–12 meses 100.000 UI; > 12 meses 200.000 UI",
      via: "VO",
      intervalo: "Diário (vitamina A: dose única no dia 1)",
      duracao: "Pelo menos 2 semanas (vitamina A: repetir nos dias 2 e 14 se sinais oculares)",
      monitorizacao: "—",
      contraindicacoes: "Vitamina A: dose recebida no último mês",
      ajustes: "OMS 2013: vitamina A em dose alta no dia 1 se sinais oculares, sarampo recente ou se o leite terapêutico não for fortificado. Ferro (sulfato ferroso 3 mg/kg/dia de Fe elementar) SÓ na fase de reabilitação, quando estiver ganhando peso — nunca na estabilização"
    },
    {
      droga: "Diuréticos para tratar edema · SF 0,9% em bolus repetidos · ferro na 1ª semana",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "O edema da desnutrição melhora com a alimentação; diurético agrava distúrbios eletrolíticos",
      ajustes: "Excesso de sódio e de volume causa insuficiência cardíaca; ferro precoce piora infecções e estresse oxidativo"
    }
  ],
  tabelas: [
    {
      titulo: "Classificação nutricional por escore-z (OMS / SISVAN)",
      colunas: ["Índice", "Ponto de corte", "Diagnóstico"],
      linhas: [
        ["Peso/estatura ou IMC/idade", "< −3", "Magreza acentuada (desnutrição aguda grave)"],
        ["Peso/estatura ou IMC/idade", "≥ −3 e < −2", "Magreza (desnutrição aguda moderada)"],
        ["Estatura/idade", "< −3 / ≥ −3 e < −2", "Muito baixa estatura / baixa estatura (desnutrição crônica)"],
        ["Peso/idade", "< −3 / ≥ −3 e < −2", "Muito baixo peso / baixo peso"],
        ["IMC/idade 0–5 anos", "> +1 / > +2 / > +3", "Risco de sobrepeso / sobrepeso / obesidade"],
        ["IMC/idade 5–19 anos", "> +1 / > +2 / > +3", "Sobrepeso / obesidade / obesidade grave"]
      ],
      nota: "Curvas OMS 2006 (0–5 anos) e 2007 (5–19 anos), as mesmas da Caderneta da Criança. Edema bilateral de origem nutricional = desnutrição grave em qualquer peso."
    },
    {
      titulo: "Os 10 passos da OMS",
      colunas: ["Passo", "Estabilização (dias 1–7)", "Reabilitação (semanas 2–6)"],
      linhas: [
        ["1. Hipoglicemia", "Tratar/prevenir (F-75 2/2 h)", "—"],
        ["2. Hipotermia", "Tratar/prevenir (pele a pele, cobrir)", "—"],
        ["3. Desidratação", "ReSoMal VO/SNG; IV só no choque", "—"],
        ["4. Eletrólitos", "K e Mg extras (mistura mineral); restringir Na", "Continuar"],
        ["5. Infecção", "Antibiótico para todos", "—"],
        ["6. Micronutrientes", "Sem ferro", "Com ferro"],
        ["7. Alimentação cautelosa", "F-75", "—"],
        ["8. Crescimento de recuperação", "—", "F-100 ou RUTF"],
        ["9. Estímulo sensorial e emocional", "Sim", "Sim"],
        ["10. Preparar seguimento", "—", "Plano de alta, UBS, programas sociais"]
      ]
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora clínica em 48 h de ampicilina + gentamicina", "Trocar para ceftriaxona 50–100 mg/kg/dia IV (± manter gentamicina)", "Colher hemocultura e urocultura antes da troca"],
        ["Lesões de pele infectadas, abscessos, pneumonia com pneumatocele (suspeita de S. aureus)", "Acrescentar oxacilina 50 mg/kg/dose IV 6/6 h (máx 2 g/dose)", "MRSA comunitário ou falha: vancomicina 15 mg/kg/dose 6/6 h com nível sérico, conforme CCIH"],
        ["Disenteria (sangue nas fezes)", "Ciprofloxacino 15 mg/kg/dose VO 12/12 h por 3 dias", "Ou ceftriaxona se não tolera VO; seguir perfil local de Shigella"],
        ["Cultura com germe resistente", "Ajustar ao antibiograma", "Discutir com CCIH/infectologia"],
        ["Persistência da febre ou ganho ruim apesar de antibiótico", "Investigar tuberculose, HIV, ITU, candidíase sistêmica, malária em área endêmica", "Desnutrição grave pode não ter febre nem leucocitose"]
      ]
    },
    {
      titulo: "Sobrepeso e obesidade infantil — conduta na UBS (resumo)",
      colunas: ["Item", "Conduta"],
      linhas: [
        ["Diagnóstico", "IMC/idade nas curvas OMS (cortes na 1ª tabela); circunferência abdominal como complemento"],
        ["Avaliar", "PA (tabela por percentil), acantose nigricans, estrias, apneia do sono, dor em quadril/joelho (epifisiólise), puberdade precoce; causas endócrinas/genéticas se baixa estatura associada ou atraso do desenvolvimento"],
        ["Exames (≥ 10 anos ou se fatores de risco)", "Perfil lipídico, glicemia de jejum (ou HbA1c), TGP/ALT"],
        ["Tratamento", "Toda a família: alimentação do Guia Alimentar, sem bebidas açucaradas e ultraprocessados, ≥ 60 min/dia de atividade física, menos telas, sono adequado; meta inicial é manter o peso enquanto cresce"],
        ["Encaminhar", "Obesidade grave, comorbidade, suspeita de causa secundária, falha após 6 meses → pediatria/endocrinologia pediátrica. Ficha do adulto: obesidade"]
      ]
    }
  ],
  destino: {
    agora: [
      "Glicemia, aquecimento, antibiótico e F-75 na 1ª hora",
      "Hidratação VO/SNG com ReSoMal; IV só se choque"
    ],
    reavaliar: [
      "Glicemia e temperatura a cada 2–3 h no 1º dia",
      "FC, FR, diurese e sinais de sobrecarga a cada 30–60 min durante a reidratação e a cada 4 h na transição para F-100",
      "Peso diário; fósforo, potássio e magnésio nos primeiros dias"
    ],
    alta: [
      "Apetite bom, ganho de peso adequado, sem edema, infecções tratadas, vacinas atualizadas",
      "Peso/estatura ≥ −2 escore-z (ou PB ≥ 12,5 cm) ou continuidade garantida em programa ambulatorial com RUTF",
      "Cuidador treinado; seguimento na UBS em 1 semana; inclusão em programas sociais (Bolsa Família, CRAS); notificação se negligência"
    ],
    observacao: ["—"],
    internacao: [
      "Toda desnutrição aguda grave com complicação, sem apetite, edema +++, ou lactente < 6 meses",
      "Desnutrição moderada com doença aguda grave"
    ],
    transferencia: [
      "UTI pediátrica: choque, insuficiência cardíaca, insuficiência respiratória",
      "Serviço de referência em nutrição/pediatria quando não houver F-75/F-100 ou equipe treinada"
    ]
  },
  prescricao: {
    hospitalar: "DESNUTRIÇÃO AGUDA GRAVE — FASE DE ESTABILIZAÇÃO (peso: ___ kg; edema: ___)\n1. F-75: ___ mL a cada 2 horas, dia e noite (130 mL/kg/dia ÷ 12; se edema +++: 100 mL/kg/dia ÷ 12), VO em copo/colher; por SNG se aceitar < 80%. Oferecer o peito antes, se amamentado.\n2. Se glicemia < 54 mg/dL: glicose 10% 50 mL VO/SNG (inconsciente: glicose 10% 5 mL/kg IV em bolus) e F-75 em 30 min. Glicemia capilar de 3/3 h nas primeiras 24 h.\n3. Desidratação sem choque: ReSoMal 5 mL/kg (___ mL) a cada 30 min por 2 h VO/SNG; depois 5–10 mL/kg/h em horas alternadas com F-75, por até 10 h. Após cada evacuação líquida: 50–100 mL de ReSoMal.\n4. Choque: Ringer lactato + glicose 5% (ou SF 0,45% + glicose 5%) 15 mL/kg (___ mL) IV em 1 h; repetir se melhora; sem melhora → choque séptico (manutenção 4 mL/kg/h, sangue 10 mL/kg em 3 h, UTI).\n5. Ampicilina 50 mg/kg/dose (___ mg) IV de 6/6 h por 2 dias, depois amoxicilina 15 mg/kg/dose VO de 8/8 h por 5 dias.\n6. Gentamicina 7,5 mg/kg (___ mg) IV ou IM 1 vez ao dia por 7 dias.\n7. Ácido fólico 5 mg VO no dia 1; depois 1 mg VO 1 vez ao dia.\n8. Vitamina A VO no dia 1 (se indicada): ___ UI (< 6 m 50.000; 6–12 m 100.000; > 12 m 200.000).\n9. Polivitamínico VO 1 vez ao dia. NÃO prescrever ferro nesta fase.\n10. Aquecimento: manter coberta (inclusive cabeça), contato pele a pele com a mãe, ambiente 25–30 °C. Temperatura axilar de 3/3 h.\n11. Controles: peso diário (mesmo horário), FC, FR de 4/4 h (1/1 h durante reidratação), diurese, nº de evacuações e vômitos, aceitação de cada refeição, edema diário.\n12. Fósforo, potássio, magnésio diários nos primeiros 3–5 dias.\n13. Estímulo: brincar e conversar com a criança; mãe acompanhante; avaliação do serviço social."
  },
  orientacoesRetorno: [
    "Dar a alimentação nos horários certos, inclusive à noite, nos primeiros dias",
    "Continuar amamentando sempre que possível",
    "Manter a criança aquecida e limpa; lavar as mãos antes de preparar os alimentos",
    "Voltar imediatamente se: a criança ficar muito sonolenta ou mole, fria, parar de comer ou mamar, tiver vômitos repetidos, diarreia com sinais de desidratação, febre ou respiração rápida",
    "Retornar à UBS em 1 semana após a alta para pesar, e depois a cada 2 semanas até a recuperação",
    "Procurar o CRAS para inclusão em programas de apoio (Bolsa Família)"
  ],
  fontes: [
    "OMS — Guideline: Updates on the management of severe acute malnutrition in infants and children (2013)",
    "OMS — Guideline on the prevention and management of wasting and nutritional oedema (acute malnutrition) in infants and children under 5 years (2023)",
    "OMS — Pocket Book of Hospital Care for Children, 2ª ed. (2013)",
    "Ministério da Saúde — Manual de atendimento da criança com desnutrição grave em nível hospitalar (2005)",
    "Ministério da Saúde — Orientações para a coleta e análise de dados antropométricos (SISVAN, 2011) e Caderneta da Criança, 6ª ed. (2024)",
    "SBP — Departamento de Nutrologia: Obesidade na infância e adolescência — Manual de orientação, 3ª ed. (2019)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
