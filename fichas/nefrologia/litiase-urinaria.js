// Litíase urinária: investigação metabólica e prevenção de recorrência
registrarFicha({
  id: "litiase-urinaria",
  especialidade: "nefrologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Litíase urinária: investigação metabólica e prevenção",
  resumo: "Paciente que já teve cálculo urinário: investigação básica para todos, investigação metabólica completa para quem tem alto risco de recorrência, medidas dietéticas e tratamento medicamentoso dirigido (citrato de potássio, tiazídico, alopurinol). Crise aguda: ver ficha colica-renal.",
  palavrasChave: "litiase urinaria nefrolitiase calculo renal pedra no rim recorrencia prevencao urina de 24 horas hipercalciuria hipocitraturia hiperoxaluria hiperuricosuria oxalato de calcio acido urico estruvita cistina citrato de potassio hidroclorotiazida clortalidona alopurinol ingestao hidrica sodio",
  alarmes: [
    "Cólica com febre ou sinais de infecção (cálculo obstrutivo infectado — urgência; ver colica-renal e pielonefrite)",
    "Rim único, transplantado ou cálculos bilaterais obstrutivos",
    "Piora da função renal ou nefrocalcinose",
    "Cálculo em criança (sempre investigar causa metabólica ou anatômica)",
    "Hipercalcemia (pensar hiperparatireoidismo — ver hipercalcemia)",
    "Cálculos coraliformes ou ITU de repetição por Proteus (estruvita)"
  ],
  conduta: [
    "Todo paciente com 1º cálculo: avaliação básica (tabela de exames) e análise do cálculo se eliminado ou retirado",
    "Classificar o risco: ALTO se recorrência, idade jovem no 1º episódio (criança/adolescente), história familiar forte, rim único, DRC, cálculo de ácido úrico, cistina ou estruvita, nefrocalcinose, doença intestinal (Crohn, bariátrica, diarreia crônica), hiperparatireoidismo, acidose tubular renal, gota, osteoporose, bilateral ou grande carga de cálculos",
    "Alto risco: investigação metabólica com urina de 24 h (2 coletas, com dieta habitual, ≥ 4 semanas após a crise e sem infecção)",
    "Medidas gerais para todos (tabela): líquidos para urinar ≥ 2,5 L/dia, sal reduzido, cálcio da dieta normal (não restringir), menos proteína animal, evitar refrigerante à base de cola e excesso de vitamina C",
    "Tratamento dirigido conforme o distúrbio encontrado (tabela de tratamento)",
    "Ácido úrico: cálculo radiotransparente; dissolução com alcalinização urinária (pH 6,0–6,5) com citrato de potássio",
    "Estruvita (infecção): remoção completa do cálculo pelo urologista e tratar a ITU conforme urocultura",
    "Cistina: hidratação muito alta, alcalinização e especialista",
    "Revisar medicamentos litogênicos: topiramato, acetazolamida, suplementos de cálcio fora das refeições, vitamina C em altas doses, indinavir/atazanavir, sulfadiazina, triantereno",
    "Seguimento: urina de 24 h 3–6 meses após iniciar tratamento e depois anual; imagem (USG) anual ou conforme recorrência"
  ],
  exames: [
    "Básico (todos): creatinina, cálcio, ácido úrico, sódio, potássio; bicarbonato se disponível; urina tipo 1 (pH, cristais, hematúria, leucocitúria); urocultura; PTH se cálcio alto ou no limite superior",
    "Análise química do cálculo (preferir espectroscopia infravermelha ou difração de raios X)",
    "Imagem: USG de rins e vias urinárias; TC sem contraste de baixa dose define carga de cálculos e densidade (UH)",
    "Alto risco — urina de 24 h (2 amostras): 'Urina de 24 h: volume, creatinina, cálcio, oxalato, citrato, ácido úrico, sódio, potássio, magnésio, fosfato e pH. Indicação: nefrolitíase recorrente.' Cistinúria qualitativa se suspeita",
    "Gasometria venosa se suspeita de acidose tubular renal (pH urinário persistentemente > 6,0 com bicarbonato baixo)"
  ],
  diferenciais: [
    "Hiperparatireoidismo primário",
    "Acidose tubular renal distal",
    "Doença intestinal com hiperoxalúria entérica (Crohn, cirurgia bariátrica)",
    "Rim esponja medular",
    "Sarcoidose, imobilização prolongada (hipercalciúria)",
    "Hiperoxalúria primária (criança/jovem com nefrocalcinose — especialista)"
  ],
  tratamento: [
    {
      droga: "Citrato de potássio",
      linha: "l1",
      dose: "30–60 mEq/dia (ex.: 15–20 mEq 2–3×/dia); apresentações de 5, 10 e 15 mEq",
      via: "VO",
      intervalo: "2–3×/dia, com as refeições",
      duracao: "Contínuo (reavaliar com urina de 24 h)",
      monitorizacao: "K sérico, creatinina, pH urinário (alvo 6,0–6,5 no ácido úrico)",
      contraindicacoes: "Hipercalemia, TFG muito reduzida, uso de poupador de K/IECA sem monitorização, úlcera péptica ativa, ITU por bactéria produtora de urease (estruvita)",
      ajustes: "Indicação: hipocitratúria, cálculo de ácido úrico, cistina, acidose tubular, e associado ao tiazídico. Não está na RENAME; pode ser manipulado"
    },
    {
      droga: "Hidroclorotiazida (hipercalciúria com cálculo de cálcio recorrente)",
      linha: "l1",
      dose: "25–50 mg/dia (ou clortalidona 25 mg/dia)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "K, Na, glicemia, ácido úrico, PA",
      contraindicacoes: "Hiponatremia, gota descompensada",
      ajustes: "Restringir sal (sem isso o efeito se perde); associar citrato de potássio para evitar hipocalemia e hipocitratúria. O estudo NOSTONE (2023) não mostrou redução de recorrência com hidroclorotiazida — decidir com o especialista e reforçar dieta"
    },
    {
      droga: "Alopurinol",
      linha: "l1",
      dose: "100–300 mg/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Ácido úrico, função renal e hepática, rash",
      contraindicacoes: "Reação cutânea prévia ao alopurinol",
      ajustes: "Indicação: hiperuricosúria com cálculo de oxalato de cálcio, ou cálculo de ácido úrico com hiperuricemia/hiperuricosúria apesar da alcalinização. Ajuste renal. Risco de SJS/NET (HLA-B*58:01); iniciar com 100 mg"
    },
    {
      droga: "Restrição de cálcio na dieta",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Aumenta absorção de oxalato e o risco de cálculo, além de piorar a massa óssea",
      ajustes: "Manter ingestão de cálcio de 1.000–1.200 mg/dia, de preferência nos alimentos e junto com as refeições"
    }
  ],
  tabelas: [
    {
      titulo: "Medidas dietéticas para todos os formadores de cálculo",
      colunas: ["Medida", "Meta", "Observação"],
      linhas: [
        ["Líquidos", "Diurese ≥ 2,5 L/dia (beber cerca de 2,5–3 L/dia, distribuídos, inclusive à noite)", "Urina clara; cistina: diurese > 3,5 L/dia"],
        ["Sal", "Sódio < 2,3 g/dia (≈ 5 g de sal)", "Menos industrializados e embutidos"],
        ["Cálcio", "1.000–1.200 mg/dia na dieta, com as refeições", "Não restringir"],
        ["Proteína animal", "Moderar (≈ 0,8–1,0 g/kg/dia)", "Reduz ácido úrico e aumenta citrato"],
        ["Oxalato", "Evitar excesso (espinafre, beterraba, chocolate, castanhas, chá preto)", "Principalmente se hiperoxalúria"],
        ["Frutas e verduras", "Aumentar; limão e laranja ajudam (citrato)", "—"],
        ["Peso", "Perda de peso se obesidade", "Obesidade, DM e síndrome metabólica aumentam risco (ácido úrico)"]
      ],
      nota: "EAU 2025 e AUA 2014 (revisada 2019)."
    },
    {
      titulo: "Tratamento dirigido pelo distúrbio",
      colunas: ["Distúrbio / cálculo", "Tratamento", "Alternativa"],
      linhas: [
        ["Hipercalciúria (oxalato/fosfato de cálcio)", "Sal baixo + tiazídico", "Citrato de potássio associado"],
        ["Hipocitratúria", "Citrato de potássio", "Suco de limão concentrado como adjuvante"],
        ["Hiperuricosúria com oxalato de cálcio", "Menos proteína animal + alopurinol", "Citrato de potássio"],
        ["Ácido úrico", "Alcalinizar urina pH 6,0–6,5 com citrato de potássio", "Alopurinol se hiperuricemia/hiperuricosúria persistente"],
        ["Hiperoxalúria entérica", "Cálcio com as refeições, menos gordura e oxalato", "Especialista"],
        ["Estruvita", "Remoção completa do cálculo + tratar ITU pela cultura", "Urologia"],
        ["Cistina", "Diurese > 3,5 L/dia, alcalinizar (pH > 7,0), menos sódio e proteína", "Especialista (tiopronina)"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "PREVENÇÃO — LITÍASE RECORRENTE (ajustar ao distúrbio encontrado)\nUSO ORAL\n1. Citrato de potássio 10 mEq (1.080 mg) ---------- 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia, junto com as refeições, com bastante água. (Hipocitratúria, ácido úrico.)\n2. Hidroclorotiazida 25 mg ------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã. (Hipercalciúria com cálculos de cálcio recorrentes.)\n3. Alopurinol 100 mg ------------------------------- 30 comprimidos\n   Tomar 1 comprimido ao dia após uma refeição. (Hiperuricosúria / ácido úrico.)\n\nORIENTAÇÃO\nBeber água suficiente para urinar 2,5 litros por dia; reduzir sal; não cortar leite e derivados.\n\nPEDIDO DE EXAMES\n- Creatinina, ureia, cálcio, ácido úrico, sódio, potássio, PTH (se cálcio alto), urina tipo 1, urocultura.\n- Análise química do cálculo (trazer o cálculo eliminado).\n- Urina de 24 horas (2 coletas): volume, creatinina, cálcio, oxalato, citrato, ácido úrico, sódio, potássio, magnésio, fosfato e pH. Indicação: nefrolitíase recorrente/alto risco.\n- Ultrassonografia de rins e vias urinárias."
  },
  orientacoesRetorno: [
    "Beber água ao longo do dia todo; a urina deve ficar clara",
    "Diminuir o sal, embutidos e comida pronta; não cortar leite e queijo (o cálcio da comida protege)",
    "Guardar a pedra se sair (coar a urina) e trazer para análise",
    "Coletar a urina de 24 horas comendo e bebendo como de costume",
    "Procurar o PS se dor forte nas costas com febre, calafrios ou vômitos, ou se parar de urinar",
    "Retornar com os exames; consulta de controle a cada 6–12 meses"
  ],
  encaminhar: [
    "Nefrologia: alto risco de recorrência, distúrbio metabólico complexo, DRC, acidose tubular, cistinúria, criança",
    "Urologia: cálculo > 10 mm, obstrução persistente, estruvita/coraliforme, cálculo que não elimina (ver colica-renal)",
    "Endocrinologia/cirurgia: hiperparatireoidismo primário",
    "Nutricionista: orientação dietética individualizada"
  ],
  fontes: [
    "EAU — Guidelines on Urolithiasis (2025)",
    "AUA — Medical Management of Kidney Stones Guideline (2014, revisada 2019)",
    "Dhayat NA et al. — Hydrochlorothiazide and Prevention of Kidney-Stone Recurrence, NOSTONE (N Engl J Med, 2023)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
