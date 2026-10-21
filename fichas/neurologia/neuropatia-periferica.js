// Neuropatia periférica e dor neuropática
registrarFicha({
  id: "neuropatia-periferica",
  especialidade: "neurologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Neuropatia periférica e dor neuropática (inclui neuropatia diabética)",
  resumo: "Formigamento, queimação, choques ou dormência, em geral em bota e luva, simétricos e distais. A causa mais comum é o diabetes; investigar causas tratáveis (B12, hipotireoidismo, álcool, sífilis, HIV, hanseníase) e tratar a dor com antidepressivo tricíclico, gabapentinoide ou IRSN.",
  palavrasChave: "neuropatia periferica polineuropatia diabetica dor neuropatica formigamento parestesia queimacao pe dormencia monofilamento amitriptilina nortriptilina gabapentina pregabalina duloxetina carbamazepina capsaicina b12 hanseniase neuralgia",
  critico: {
    tempo: "Fraqueza ascendente: PS hoje",
    texto: "Fraqueza que progride em dias, arreflexia, dispneia ou disfagia sugerem síndrome de Guillain-Barré: encaminhar ao PS. Neuropatia com manchas hipoestésicas ou nervo espessado: pensar hanseníase."
  },
  alarmes: [
    "Fraqueza progressiva em dias a semanas, sobretudo ascendente, com arreflexia (Guillain-Barré, PIDC)",
    "Dispneia, disfagia ou fraqueza facial associada",
    "Quadro assimétrico, multifocal ou de predomínio motor (vasculite, mononeurite múltipla)",
    "Nível sensitivo no tronco, retenção urinária ou incontinência (lesão medular, não é neuropatia)",
    "Perda de peso, febre, linfonodomegalia (neoplasia, paraproteinemia)",
    "Manchas com perda de sensibilidade, nervo periférico espessado ou doloroso (hanseníase — notificação compulsória)",
    "Úlcera, deformidade ou pé quente e edemaciado em diabético (pé diabético, Charcot)"
  ],
  condutaInicial: [
    "Confirmar o padrão: distal e simétrico (polineuropatia) × focal (túnel do carpo, radiculopatia) × multifocal",
    "Exame neurológico e dos pés: monofilamento de 10 g, diapasão de 128 Hz, reflexo aquileu, sensibilidade dolorosa e térmica, força",
    "Exames para causas tratáveis: glicemia/HbA1c, B12, TSH, creatinina, hemograma, VDRL, anti-HIV; eletroforese de proteínas se > 50 anos ou sem causa",
    "Avaliar risco do pé (IWGDF) em todo diabético com perda da sensibilidade protetora",
    "Dor neuropática: iniciar amitriptilina (ou nortriptilina) em dose baixa à noite ou gabapentina, com titulação lenta; reavaliar em 4–6 semanas",
    "Diabéticos: melhorar o controle glicêmico e da PA, parar tabagismo e álcool"
  ],
  fataisExcluir: [
    "Síndrome de Guillain-Barré (fraqueza ascendente aguda, arreflexia)",
    "Compressão medular ou síndrome da cauda equina",
    "Deficiência grave de B12 com degeneração combinada subaguda (ataxia, sinais piramidais, anemia macrocítica)",
    "Neoplasia, mieloma ou paraproteinemia",
    "Hanseníase (incapacidade evitável; notificação e tratamento no SUS)"
  ],
  proximaDecisao: "Dor com resposta parcial em dose máxima tolerada de 1 droga após 4–6 semanas → trocar de classe ou associar (tricíclico + gabapentinoide). Quadro atípico (assimétrico, motor, rápido, sem causa) → neurologia e eletroneuromiografia.",
  clinica: {
    anamnese: [
      "Início, tempo de evolução e progressão (agudo em dias = alarme)",
      "Distribuição: pés e depois mãos (bota e luva), um nervo, um dermátomo",
      "Sintomas positivos (queimação, choque, alodinia, piora à noite) e negativos (dormência, desequilíbrio)",
      "Fraqueza, quedas, alterações autonômicas (hipotensão postural, diarreia noturna, disfunção erétil, gastroparesia)",
      "DM e tempo de doença, uso de metformina (B12), álcool, cirurgia bariátrica, dieta vegana",
      "Medicações neurotóxicas: quimioterápicos, isoniazida sem piridoxina, amiodarona, metronidazol prolongado, antirretrovirais antigos",
      "Exposição a hanseníase, IST, doença renal, tireoide, história familiar de neuropatia (pés cavos)"
    ],
    exameFisico: [
      "Monofilamento de 10 g (pontos plantares) e diapasão de 128 Hz no hálux",
      "Sensibilidade dolorosa (picada) e térmica; propriocepção; Romberg",
      "Reflexos (aquileu ausente é precoce na polineuropatia)",
      "Força distal (dorsiflexão do hálux e do pé, interósseos)",
      "Pés: pele, unhas, calos, deformidades, pulsos pediosos e tibiais posteriores",
      "Pele: manchas hipocrômicas com hipoestesia; palpar nervos ulnar, fibular e tibial (espessamento)",
      "PA deitado e em pé (neuropatia autonômica)"
    ],
    diferenciais: [
      { dx: "Polineuropatia diabética", pista: "DM de longa data, distal e simétrica, sensitiva, com perda de reflexo aquileu" },
      { dx: "Deficiência de B12", pista: "Metformina, IBP, bariátrica, vegano; macrocitose; ataxia" },
      { dx: "Neuropatia alcoólica", pista: "Etilismo, desnutrição, dor em queimação" },
      { dx: "Hanseníase", pista: "Manchas hipoestésicas, nervo espessado, mononeurite múltipla" },
      { dx: "Síndrome do túnel do carpo", pista: "Parestesia noturna em 1º–3º dedos, Phalen e Tinel positivos" },
      { dx: "Radiculopatia lombar ou cervical", pista: "Dor que segue um dermátomo, piora com a postura da coluna" },
      { dx: "Guillain-Barré / PIDC", pista: "Fraqueza com arreflexia, evolução aguda (GB) ou > 8 semanas (PIDC)" },
      { dx: "Doença arterial periférica", pista: "Claudicação, pulsos ausentes, dor ao elevar a perna" }
    ],
    gravidade: [
      "Leve: sintomas sensitivos, sem perda da sensibilidade protetora",
      "Moderada: perda da sensibilidade protetora (monofilamento alterado) → risco de úlcera",
      "Grave: fraqueza, deformidade, úlcera, quedas, disautonomia",
      "Intensidade da dor: escala numérica 0–10; meta realista é redução de 30–50% e melhora do sono e função"
    ]
  },
  exames: [
    {
      nome: "Exames de causas tratáveis",
      pedido: "Glicemia de jejum, HbA1c, vitamina B12, TSH, creatinina, hemograma completo, VDRL, anti-HIV (teste rápido), TGO, TGP, GGT.",
      porQue: "DM, B12, hipotireoidismo, álcool, sífilis e HIV são causas comuns e tratáveis.",
      esperar: "Pode haver mais de uma causa no mesmo paciente.",
      interpretacao: "B12 limítrofe com sintomas → dosar ácido metilmalônico se disponível ou tratar empiricamente. Macrocitose sugere B12, folato ou álcool.",
      limitacoes: "Ainda que o paciente seja diabético, investigar B12 e outras causas."
    },
    {
      nome: "Eletroforese de proteínas séricas",
      pedido: "Eletroforese de proteínas séricas (com imunofixação se alterada).",
      porQue: "Paraproteinemia (mieloma, MGUS) em neuropatia sem causa, sobretudo > 50 anos.",
      esperar: "Normal na maioria.",
      interpretacao: "Pico monoclonal → hematologia.",
      limitacoes: "—"
    },
    {
      nome: "Eletroneuromiografia",
      pedido: "Eletroneuromiografia de membros inferiores e superiores. HD: polineuropatia periférica a esclarecer.",
      porQue: "Quadro atípico: assimétrico, motor, progressão rápida, sem causa definida ou suspeita de túnel do carpo para cirurgia.",
      esperar: "Padrão axonal (DM, álcool) ou desmielinizante (PIDC).",
      interpretacao: "Laudo orienta encaminhamento à neurologia.",
      limitacoes: "Pode ser normal na neuropatia de fibras finas (dor em queimação com exame motor normal). Não é necessária para diagnosticar a neuropatia diabética típica."
    },
    {
      nome: "Rastreamento anual da neuropatia no diabético",
      pedido: "Exame dos pés com monofilamento de 10 g e diapasão de 128 Hz (registro em prontuário).",
      porQue: "Detectar perda da sensibilidade protetora e prevenir úlceras.",
      esperar: "Fazer no diagnóstico do DM2, 5 anos após o diagnóstico do DM1 e depois pelo menos anualmente.",
      interpretacao: "Monofilamento alterado = perda da sensibilidade protetora → classificar risco IWGDF (ficha Pé diabético).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Amitriptilina",
      linha: "l1",
      dose: "Iniciar 10–25 mg à noite; aumentar 10–25 mg a cada 1–2 semanas até 25–75 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Avaliar resposta após 4–6 semanas na dose eficaz; manter enquanto houver benefício",
      monitorizacao: "Sonolência, boca seca, constipação, hipotensão postural, ganho de peso; ECG se > 40 anos ou cardiopata",
      contraindicacoes: "IAM recente, arritmia, BAV, QT longo, glaucoma de ângulo fechado, retenção urinária, uso de IMAO",
      ajustes: "RENAME. Idoso: evitar ou preferir nortriptilina em dose baixa (anticolinérgico, quedas). Risco em superdose: dispensar quantidades pequenas se risco de suicídio"
    },
    {
      droga: "Nortriptilina",
      linha: "l1",
      dose: "Iniciar 10–25 mg à noite; aumentar até 25–75 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Como a amitriptilina",
      monitorizacao: "Como a amitriptilina (menos sedação e hipotensão)",
      contraindicacoes: "As mesmas dos tricíclicos",
      ajustes: "RENAME. Melhor tolerada que a amitriptilina em idosos"
    },
    {
      droga: "Gabapentina",
      linha: "l1",
      dose: "300 mg à noite no 1º dia; aumentar 300 mg a cada 1–3 dias até 900–1.800 mg/dia (máx 3.600 mg/dia)",
      via: "VO",
      intervalo: "De 8 em 8 horas",
      duracao: "Avaliar após 4–6 semanas na dose eficaz",
      monitorizacao: "Tontura, sonolência, edema, ganho de peso; risco de dependência e depressão respiratória com opioide",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Ajuste renal (bula): ClCr 30–59: 400–1.400 mg/dia; 15–29: 200–700 mg/dia; < 15: 100–300 mg/dia. Disponível no SUS pelo Componente Especializado (PCDT Dor Crônica)"
    },
    {
      droga: "Pregabalina",
      linha: "alt",
      dose: "75 mg 12/12 h; aumentar para 150 mg 12/12 h em 1 semana (máx 600 mg/dia)",
      via: "VO",
      intervalo: "De 12 em 12 horas",
      duracao: "Avaliar após 4–6 semanas",
      monitorizacao: "Tontura, sonolência, edema, ganho de peso",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Não disponível no SUS na maioria dos municípios. Reduzir dose se ClCr < 60"
    },
    {
      droga: "Duloxetina",
      linha: "alt",
      dose: "30 mg/dia por 1 semana; depois 60 mg/dia (máx 120 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Avaliar após 4–6 semanas",
      monitorizacao: "Náusea, sudorese, PA; síndrome serotoninérgica com tramadol e outros serotoninérgicos",
      contraindicacoes: "ClCr < 30, hepatopatia, etilismo pesado, glaucoma de ângulo fechado não controlado, uso de IMAO",
      ajustes: "Não disponível no SUS. Útil se depressão ou ansiedade associadas ou se tricíclico contraindicado"
    },
    {
      droga: "Capsaicina creme 0,075% ou lidocaína 5% tópica",
      linha: "adj",
      dose: "Capsaicina: fina camada na área dolorosa; lidocaína adesivo/gel na área",
      via: "Tópica",
      intervalo: "Capsaicina 3–4×/dia; lidocaína até 12 h por dia",
      duracao: "Avaliar após 4–8 semanas",
      monitorizacao: "Ardência local (capsaicina) que melhora com o uso",
      contraindicacoes: "Pele lesada, mucosas, olhos",
      ajustes: "2ª linha (NeuPSIG 2025). Útil em dor localizada e em idosos. Lavar as mãos após aplicar"
    },
    {
      droga: "Carbamazepina",
      linha: "alt",
      dose: "100–200 mg 12/12 h; aumentar até 400–800 mg/dia",
      via: "VO",
      intervalo: "De 12 em 12 horas (ou 8/8 h)",
      duracao: "Conforme resposta",
      monitorizacao: "Hemograma, sódio, enzimas hepáticas; reações cutâneas graves",
      contraindicacoes: "BAV, aplasia de medula, uso de IMAO",
      ajustes: "RENAME. 1ª escolha na neuralgia do trigêmeo; não é 1ª linha na polineuropatia. Muitas interações (indutor enzimático; reduz eficácia de anticoncepcional)"
    },
    {
      droga: "Tramadol",
      linha: "adj",
      dose: "50 mg; máx 400 mg/dia (300 mg em > 75 anos)",
      via: "VO",
      intervalo: "De 6 em 6 a 8 em 8 horas, se dor",
      duracao: "Curto prazo, em crises",
      monitorizacao: "Náusea, tontura, constipação, convulsão, síndrome serotoninérgica",
      contraindicacoes: "Epilepsia não controlada, uso de IMAO; cautela com tricíclico e IRSN",
      ajustes: "3ª linha (NeuPSIG 2025). Evitar uso crônico; opioides fortes não são recomendados de rotina"
    },
    {
      droga: "Cianocobalamina (se deficiência de B12)",
      linha: "adj",
      dose: "1.000 mcg IM diariamente por 1 semana, semanalmente por 4 semanas e depois mensal; ou 1.000–2.000 mcg VO/dia se absorção preservada",
      via: "IM ou VO",
      intervalo: "Conforme esquema",
      duracao: "Mensal por toda a vida se causa permanente (anemia perniciosa, bariátrica)",
      monitorizacao: "Hemograma e B12 em 2–3 meses",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Usuários de metformina: dosar B12 periodicamente"
    }
  ],
  destino: {
    agora: [
      "Investigar causas tratáveis e iniciar controle da dor na UBS",
      "Educação sobre cuidados com os pés"
    ],
    reavaliar: [
      "Dor e efeitos adversos a cada 2–4 semanas durante a titulação",
      "Pés: conforme a categoria de risco IWGDF"
    ],
    alta: [
      "Seguimento na UBS com plano de titulação e reavaliação periódica"
    ],
    observacao: ["—"],
    internacao: [
      "Suspeita de Guillain-Barré ou fraqueza rapidamente progressiva (encaminhar ao PS)"
    ],
    transferencia: [
      "Neurologia: quadro atípico, motor, assimétrico, rápido, sem causa após investigação inicial, ou dor refratária a 2 classes",
      "Dermatologia/serviço de hanseníase: suspeita de hanseníase",
      "Clínica da dor (se disponível): dor refratária"
    ]
  },
  prescricao: {
    ambulatorial: "DOR NEUROPÁTICA — ESCOLHER 1 OPÇÃO E TITULAR\n\nOPÇÃO A — TRICÍCLICO (RENAME)\nUSO ORAL\n1. Amitriptilina 25 mg --------------------------- 30 comprimidos\n   Tomar ½ comprimido (12,5 mg) à noite por 1 semana; depois 1 comprimido à noite. Se ainda houver dor após 2 semanas, aumentar para 2 comprimidos à noite (máx 3 comprimidos = 75 mg).\n   (Idoso: preferir Nortriptilina 10 mg, 1 cápsula à noite, aumentando de 10 em 10 mg a cada 1–2 semanas até 25–50 mg.)\n\nOPÇÃO B — GABAPENTINOIDE (SUS: Componente Especializado)\nUSO ORAL\n1. Gabapentina 300 mg ---------------------------- 90 cápsulas\n   Dia 1: 1 cápsula à noite. Dia 2: 1 cápsula de 12 em 12 horas. Dia 3 em diante: 1 cápsula de 8 em 8 horas. Se necessário, aumentar 1 cápsula a cada 3 dias até 2 cápsulas de 8 em 8 horas (1.800 mg/dia).\n   (Ajustar se ClCr < 60.)\n\nOPÇÃO C — FORA DO SUS (alternativas)\n1. Duloxetina 30 mg ------------------------------ 30 cápsulas\n   Tomar 1 cápsula pela manhã por 7 dias; depois 60 mg 1 vez ao dia.\n   ou Pregabalina 75 mg ----------------------------- 60 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas; aumentar para 150 mg de 12 em 12 horas após 1 semana se necessário.\n\nUSO TÓPICO (dor localizada, adjuvante)\n2. Capsaicina creme 0,075% ------------------------ 1 bisnaga\n   Aplicar fina camada na área dolorosa 3 a 4 vezes ao dia. Lavar as mãos após aplicar.\n\nSE DEFICIÊNCIA DE B12\nUSO INTRAMUSCULAR\n3. Cianocobalamina 1.000 mcg/mL ------------------- ampolas\n   Aplicar 1 ampola IM por dia por 7 dias, depois 1 por semana por 4 semanas, depois 1 por mês.\n\nPEDIDO DE EXAMES\nGlicemia de jejum, HbA1c, vitamina B12, TSH, creatinina, hemograma, VDRL, anti-HIV, TGO, TGP, GGT. Se > 50 anos ou sem causa: eletroforese de proteínas séricas."
  },
  orientacoesRetorno: [
    "O remédio para dor de nervo começa em dose baixa e sobe aos poucos; o efeito completo leva de 2 a 6 semanas",
    "Sonolência e tontura são comuns no início: tome à noite e cuidado ao dirigir",
    "Não pare a gabapentina ou o antidepressivo de uma vez; reduza com orientação",
    "Olhe os pés todos os dias (use espelho se precisar), use calçado fechado e confortável, não ande descalço, teste a água do banho com o cotovelo",
    "Volte imediatamente se: fraqueza nas pernas que piora em dias, dificuldade para andar, engolir ou respirar, ferida, bolha ou pé vermelho e inchado",
    "Retorno em 2–4 semanas para ajustar a dose; depois a cada 3 meses"
  ],
  tabelas: [
    {
      titulo: "Escada do tratamento da dor neuropática (NeuPSIG 2025)",
      colunas: ["Linha", "Opções", "Observação"],
      linhas: [
        ["1ª", "Tricíclicos (amitriptilina, nortriptilina), gabapentinoides (gabapentina, pregabalina), IRSN (duloxetina, venlafaxina)", "Recomendação forte; benefício modesto"],
        ["2ª", "Capsaicina tópica (creme ou adesivo 8%), lidocaína 5% tópica", "Bem toleradas; dor localizada"],
        ["3ª", "Toxina botulínica, opioides (incluindo tramadol), estimulação magnética", "Uso criterioso, preferir especialista"]
      ],
      nota: "Associação de 2 classes de 1ª linha é opção se resposta parcial. Cannabinoides não são recomendados."
    }
  ],
  fontes: [
    "NeuPSIG/IASP — Pharmacotherapy and non-invasive neuromodulation for neuropathic pain: systematic review and meta-analysis (Lancet Neurol, 2025)",
    "Ministério da Saúde — PCDT Dor Crônica (Portaria SAS/MS nº 1.083/2012) e RENAME (versão vigente)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes: Diagnóstico e tratamento da neuropatia diabética (2024)",
    "ADA — Standards of Care in Diabetes (2026): Retinopathy, Neuropathy, and Foot Care",
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
