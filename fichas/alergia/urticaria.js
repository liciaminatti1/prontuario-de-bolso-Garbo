// Urticária aguda e crônica e reação alérgica cutânea leve
registrarFicha({
  id: "urticaria",
  especialidade: "alergia",
  caminho: "ubs",
  publico: "ambos",
  formato: "completo",
  titulo: "Urticária aguda e crônica e reação alérgica cutânea leve",
  resumo: "Urticas (placas elevadas, pruriginosas, que somem em < 24 h sem deixar marca) e/ou angioedema. Aguda: < 6 semanas. Crônica: ≥ 6 semanas, espontânea ou induzida. Primeiro passo: excluir anafilaxia.",
  palavrasChave: "urticaria alergia vergoes placas coceira angioedema reacao alergica cutanea anti-histaminico loratadina desloratadina cetirizina fexofenadina dexclorfeniramina prednisolona omalizumabe urticaria cronica espontanea induzida dermografismo",
  critico: {
    tempo: "Excluir anafilaxia primeiro",
    texto: "Urticas com falta de ar, chiado, rouquidão, edema de língua, hipotensão, síncope ou vômitos após exposição = anafilaxia: adrenalina IM imediata (ver ficha Anafilaxia). Anti-histamínico não substitui adrenalina."
  },
  alarmes: [
    "Dispneia, sibilância, estridor, rouquidão ou edema de língua/úvula (anafilaxia ou angioedema de via aérea)",
    "Hipotensão, síncope, tontura, palidez ou sonolência",
    "Vômitos repetidos ou dor abdominal intensa após exposição a alérgeno",
    "Angioedema sem urticas, sem prurido, que dura > 24–48 h (pensar em angioedema por bradicinina: IECA, angioedema hereditário — não responde a anti-histamínico nem corticoide)",
    "Lesão que dura > 24 h, dolorosa ou que deixa mancha arroxeada (pensar em vasculite urticariforme)",
    "Febre, artralgia, mal-estar, lesões em alvo ou acometimento de mucosas (doença do soro, eritema multiforme, Stevens-Johnson)"
  ],
  condutaInicial: [
    "Avaliar ABC e sinais de anafilaxia; se presentes, adrenalina IM e seguir a ficha Anafilaxia",
    "Identificar e suspender o gatilho provável (medicamento, alimento, picada, infecção viral recente)",
    "Anti-histamínico H1 de 2ª geração em dose padrão, por via oral",
    "Prurido intenso que atrapalha o sono: pode-se usar anti-histamínico de 1ª geração só à noite, por poucos dias (≥ 2 anos)",
    "Corticoide oral só em quadro agudo intenso que não melhora com anti-histamínico: curso curto (até 10 dias; geralmente 3 a 5)",
    "Em uso de IECA com angioedema: suspender o IECA definitivamente"
  ],
  fataisExcluir: [
    "Anafilaxia (urticária + comprometimento respiratório, circulatório ou gastrointestinal)",
    "Angioedema de laringe (rouquidão, estridor, disfagia, sialorreia)",
    "Angioedema por bradicinina (IECA, angioedema hereditário ou adquirido)",
    "Farmacodermia grave: Stevens-Johnson/NET, DRESS (febre, lesões dolorosas, mucosas, descolamento, eosinofilia)",
    "Vasculite urticariforme e doença do soro"
  ],
  proximaDecisao: "Sem resposta à dose padrão de anti-H1 de 2ª geração em 2–4 semanas (crônica): aumentar até 4 vezes a dose em adulto (sem trocar de droga). Sem controle com dose 4×: encaminhar ao alergista/dermatologista para omalizumabe ou ciclosporina.",
  clinica: {
    anamnese: [
      "Tempo de evolução (< 6 semanas = aguda; ≥ 6 semanas = crônica) e duração de cada lesão (< 24 h na urticária comum)",
      "Gatilhos nas 1–2 h anteriores: medicamentos (AINE, AAS, antibióticos, contraste), alimentos (amendoim, frutos do mar, ovo, leite), picada de inseto, látex",
      "Infecção recente (principal causa de urticária aguda em crianças)",
      "Sintomas sistêmicos: dispneia, rouquidão, tontura, vômitos, dor abdominal",
      "Uso de IECA, BRA, gliptinas, estrogênio (angioedema)",
      "Crônica: gatilhos físicos (atrito, frio, calor, pressão, exercício, sol, água), piora com AINE, estresse",
      "História familiar de angioedema sem urticas (angioedema hereditário)",
      "Sintomas de tireoide, doenças autoimunes"
    ],
    exameFisico: [
      "Sinais vitais, ausculta pulmonar, inspeção de lábios, língua, úvula e voz",
      "Urticas: placas eritematoedematosas, centro pálido, bordas irregulares, que mudam de lugar",
      "Angioedema: edema mais profundo de pálpebras, lábios, mãos, genitais; mais dor/queimação que prurido",
      "Dermografismo: riscar a pele com objeto rombo e observar urtica linear em minutos",
      "Lesão fixa > 24 h, púrpura ou mancha residual: suspeitar de vasculite",
      "Lesões em alvo, bolhas ou mucosas: não é urticária comum"
    ],
    diferenciais: [
      { dx: "Anafilaxia", pista: "Urticária com sintomas respiratórios, cardiovasculares ou gastrointestinais" },
      { dx: "Vasculite urticariforme", pista: "Lesões > 24 h, dolorosas, com púrpura ou mancha residual; febre, artralgia; VHS alto, complemento baixo" },
      { dx: "Eritema multiforme", pista: "Lesões em alvo fixas, acrais, após herpes ou micoplasma; podem atingir mucosas" },
      { dx: "Urticária multiforme (criança)", pista: "Placas anulares com centro violáceo, transitórias (< 24 h), edema de mãos/pés, após infecção viral; boa resposta a anti-H1" },
      { dx: "Doença do soro e reações tipo doença do soro", pista: "Febre, artralgia e urticária 1–3 semanas após antibiótico (cefaclor, amoxicilina) ou soro heterólogo" },
      { dx: "Angioedema por bradicinina", pista: "Sem urticas e sem prurido; IECA; história familiar; dor abdominal recorrente" },
      { dx: "Estrófulo (prurigo por picada de inseto)", pista: "Pápulas fixas por dias, com vesícula central, em áreas expostas" },
      { dx: "Mastocitose cutânea", pista: "Máculas acastanhadas que formam urtica ao atrito (sinal de Darier)" }
    ],
    gravidade: [
      "Urticária aguda leve: urticas sem sintomas sistêmicos, prurido tolerável — anti-H1 2ª geração na UBS",
      "Urticária aguda extensa ou com angioedema periférico (lábios, pálpebras) sem comprometimento de via aérea: tratar na UBS/PS, observar resposta",
      "Qualquer sinal respiratório, cardiovascular ou gastrointestinal após exposição: anafilaxia",
      "Crônica: medir atividade com o UAS7 (escore de atividade de 7 dias: número de urticas + intensidade do prurido, anotados pelo paciente) e controle com o UCT (teste de controle da urticária; ≥ 12 pontos = controlada)"
    ]
  },
  exames: [
    {
      nome: "Urticária aguda — nenhum exame de rotina",
      pedido: "Não solicitar exames de rotina na urticária aguda sem sinais de alarme.",
      porQue: "A causa é geralmente infecção viral, medicamento ou alimento identificado pela história.",
      esperar: "—",
      interpretacao: "Teste alérgico (IgE específica ou teste cutâneo) só se houver suspeita clínica de alimento, medicamento, látex ou veneno de inseto — com o alergista.",
      limitacoes: "Painéis de IgE sem suspeita clínica geram falsos positivos e restrições alimentares desnecessárias."
    },
    {
      nome: "Urticária crônica espontânea — exames básicos",
      pedido: "Hemograma completo com contagem diferencial. Proteína C reativa e/ou VHS. Na avaliação especializada ou conforme a clínica: IgE total, anti-TPO e TSH.",
      porQue: "Diretriz internacional 2022: investigação mínima para excluir diagnósticos diferenciais e orientar prognóstico.",
      esperar: "Geralmente normais.",
      interpretacao: "PCR/VHS elevados ou eosinofilia: considerar outras doenças (vasculite, infecção, síndromes autoinflamatórias). IgE total baixa e anti-TPO positivo sugerem urticária autoimune (pior resposta ao omalizumabe).",
      limitacoes: "Não pedir exames extensos (parasitológico, sorologias, FAN) sem indicação clínica."
    },
    {
      nome: "Suspeita de vasculite urticariforme",
      pedido: "Hemograma, VHS, PCR, complemento (C3, C4, CH50), urina tipo 1, creatinina. Encaminhar para biópsia de pele.",
      porQue: "Lesões fixas > 24 h, dolorosas ou com púrpura.",
      esperar: "Complemento baixo na forma hipocomplementêmica.",
      interpretacao: "Biópsia confirma vasculite leucocitoclástica.",
      limitacoes: "Biópsia feita pelo dermatologista."
    },
    {
      nome: "Angioedema recorrente sem urticas",
      pedido: "Dosagem de C4 sérico. Se baixo: inibidor de C1-esterase (quantitativo e funcional) — encaminhar ao alergista/imunologista.",
      porQue: "Rastrear angioedema hereditário ou adquirido.",
      esperar: "C4 baixo fora de crise na maioria dos casos de AEH tipos 1 e 2.",
      interpretacao: "C4 normal não exclui AEH com C1-INH normal; se forte suspeita, encaminhar.",
      limitacoes: "Não responde a anti-histamínico, corticoide nem adrenalina de forma confiável."
    }
  ],
  tratamento: [
    {
      droga: "Loratadina (comprimido 10 mg; xarope 1 mg/mL)",
      linha: "l1",
      dose: "Adulto e > 12 anos: 10 mg. Criança 2–12 anos: ≤ 30 kg 5 mg; > 30 kg 10 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Aguda: até 1–2 semanas após o fim das lesões. Crônica: uso contínuo, reavaliar a cada 3–6 meses",
      monitorizacao: "Controle das lesões (UAS7/UCT na crônica)",
      contraindicacoes: "< 2 anos (sem dose em bula)",
      ajustes: "RENAME/SUS. Insuficiência hepática grave: dias alternados. Na crônica sem controle em 2–4 semanas: aumentar até 4× a dose (uso off-label, recomendado pela diretriz internacional 2022 e pela ASBAI)"
    },
    {
      droga: "Desloratadina (comprimido 5 mg; xarope 0,5 mg/mL)",
      linha: "alt",
      dose: "≥ 12 anos: 5 mg. 6–11 anos: 2,5 mg (5 mL). 1–5 anos: 1,25 mg (2,5 mL). 6–11 meses: 1 mg (2 mL)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Igual à loratadina",
      monitorizacao: "—",
      contraindicacoes: "< 6 meses",
      ajustes: "Não consta na RENAME (farmácia). Opção para lactente de 6 a 24 meses. Gestação: preferir loratadina ou cetirizina"
    },
    {
      droga: "Cetirizina (comprimido 10 mg; solução 1 mg/mL)",
      linha: "alt",
      dose: "≥ 12 anos: 10 mg 1×/dia. 6–12 anos: 5 mg de 12/12 h (ou 10 mg 1×/dia). 2–6 anos: 2,5 mg de 12/12 h",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Igual à loratadina",
      monitorizacao: "Sonolência leve em alguns pacientes",
      contraindicacoes: "DRC grave (ClCr < 10 mL/min)",
      ajustes: "Não consta na RENAME (farmácia). DRC moderada: reduzir à metade. Dados de segurança na gestação favoráveis"
    },
    {
      droga: "Fexofenadina (comprimido 120 e 180 mg; suspensão 6 mg/mL)",
      linha: "alt",
      dose: "≥ 12 anos: 180 mg 1×/dia. 2–11 anos: 30 mg (5 mL) de 12/12 h. 6 meses–2 anos: 15 mg (2,5 mL) de 12/12 h",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Igual à loratadina",
      monitorizacao: "—",
      contraindicacoes: "< 6 meses",
      ajustes: "Não consta na RENAME (farmácia). Não tomar com suco de frutas nem antiácido com alumínio/magnésio (reduzem absorção). Menos sedativa"
    },
    {
      droga: "Dexclorfeniramina (comprimido 2 mg; solução 0,4 mg/mL)",
      linha: "adj",
      dose: "Adulto: 2 mg. Criança: 0,15 mg/kg/dia divididos de 8/8 h (máx. 2–6 anos 3 mg/dia; 6–12 anos 6 mg/dia)",
      via: "VO",
      intervalo: "8/8 h ou dose única à noite",
      duracao: "Poucos dias, só se prurido atrapalhar o sono",
      monitorizacao: "Sonolência, queda de rendimento escolar, agitação paradoxal em criança",
      contraindicacoes: "< 2 anos; glaucoma de ângulo fechado; retenção urinária; idoso (anticolinérgico, quedas)",
      ajustes: "RENAME/SUS. Diretriz internacional 2022 recomenda não usar 1ª geração como tratamento de rotina; preferir 2ª geração"
    },
    {
      droga: "Prednisolona (solução 3 mg/mL; comprimido 5 e 20 mg) ou prednisona (comprimido 5 e 20 mg)",
      linha: "adj",
      dose: "Adulto: prednisona 20–50 mg/dia. Criança: prednisolona 0,5–1 mg/kg/dia (máx. 40 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia, pela manhã",
      duracao: "Curso curto: 3 a 5 dias (máximo 10 dias), sem desmame",
      monitorizacao: "Glicemia em diabéticos, PA",
      contraindicacoes: "Uso prolongado na urticária crônica (não recomendado)",
      ajustes: "Só para urticária aguda intensa ou exacerbação grave da crônica que não responde ao anti-H1. Ensaios recentes não mostram benefício de rotina. RENAME/SUS"
    },
    {
      droga: "Prometazina 25 mg/mL injetável",
      linha: "adj",
      dose: "Adulto: 25 mg (1 mL). Criança ≥ 2 anos: 0,25–0,5 mg/kg/dose (máx. 25 mg)",
      via: "IM profunda",
      intervalo: "Dose única; pode repetir em 6–8 h",
      duracao: "Só na sala de observação, se não puder usar VO",
      monitorizacao: "Sedação, hipotensão; observar por pelo menos 1–2 h",
      contraindicacoes: "< 2 anos (depressão respiratória fatal); via SC ou intra-arterial (necrose)",
      ajustes: "RENAME/SUS. Não usar IV de rotina (lesão tecidual grave se extravasar). Não substitui adrenalina na anafilaxia"
    },
    {
      droga: "Omalizumabe",
      linha: "alt",
      dose: "300 mg (≥ 12 anos)",
      via: "SC",
      intervalo: "A cada 4 semanas",
      duracao: "Conforme especialista",
      monitorizacao: "UAS7/UCT; observação após aplicações iniciais",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Urticária crônica espontânea sem controle com anti-H1 em dose 4×. Prescrição pelo especialista; acesso no SUS varia por estado (CEAF) — conferir"
    },
    {
      droga: "Anti-histamínico H2 (ranitidina), cetotifeno, corticoide crônico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não usar corticoide sistêmico prolongado na urticária crônica. Anti-H2 e associações não são recomendados de rotina pela diretriz 2022. Montelucaste só por especialista"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO — URTICÁRIA AGUDA OU CRÔNICA\nUSO ORAL\n1. Loratadina 10 mg --------------------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Urticária aguda: manter até 1 a 2 semanas depois que as manchas sumirem. Urticária crônica: uso contínuo até a reavaliação.\n\nSE COCEIRA ATRAPALHAR O SONO (poucos dias)\n2. Dexclorfeniramina 2 mg --------------------------------- 10 comprimidos\n   Tomar 1 comprimido à noite, por até 5 dias. Causa sono: não dirigir.\n\nSE QUADRO AGUDO INTENSO SEM MELHORA COM O ANTI-HISTAMÍNICO\n3. Prednisona 20 mg ---------------------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã, por 5 dias. Não precisa diminuir aos poucos.\n\nURTICÁRIA CRÔNICA SEM CONTROLE APÓS 2 A 4 SEMANAS (dose aumentada — uso fora da bula, recomendado pelas diretrizes)\n1. Loratadina 10 mg --------------------------------------- 60 a 120 comprimidos/mês\n   Tomar 1 comprimido de 12 em 12 horas. Se ainda sem controle em 2 a 4 semanas: 2 comprimidos de 12 em 12 horas (máximo 40 mg/dia).\n\nCRIANÇA (por idade e peso)\nUSO ORAL\n1. Loratadina xarope 1 mg/mL ------------------------------ 1 frasco\n   2 a 12 anos com até 30 kg: 5 mL 1 vez ao dia. Acima de 30 kg: 10 mL 1 vez ao dia.\n   6 a 24 meses (fora do SUS): desloratadina xarope 0,5 mg/mL — 6 a 11 meses 2 mL; 1 a 5 anos 2,5 mL, 1 vez ao dia.\n2. Se quadro agudo intenso: prednisolona solução oral 3 mg/mL — 1 mg/kg/dia (máx. 40 mg/dia), 1 vez ao dia pela manhã, por 3 a 5 dias.\n3. Se coceira atrapalhar o sono (≥ 2 anos): dexclorfeniramina solução 0,4 mg/mL — 0,15 mg/kg/dia divididos de 8/8 h, por até 5 dias (2–6 anos máx. 7,5 mL/dia; 6–12 anos máx. 15 mL/dia).",
    hospitalar: "SALA DE OBSERVAÇÃO — URTICÁRIA AGUDA EXTENSA OU ANGIOEDEMA PERIFÉRICO, SEM ANAFILAXIA (peso: ___ kg)\n1. Dieta oral livre (suspender alimento suspeito).\n2. Sinais vitais, SpO₂ e inspeção de lábios, língua e voz a cada 30 min. Material de via aérea e adrenalina 1 mg/mL à beira do leito.\n3. Loratadina 10 mg — 1 comprimido VO agora (criança: dose por peso, ver ambulatorial).\n4. Se não puder usar VO ou prurido muito intenso: prometazina 25 mg/mL — 1 mL (25 mg) IM profunda, dose única (criança ≥ 2 anos: 0,25–0,5 mg/kg, máx. 25 mg). Nunca SC.\n5. Se quadro intenso sem resposta ao anti-histamínico: prednisona 40 mg VO agora (criança: prednisolona 1 mg/kg, máx. 40 mg) OU, se VO impossível, metilprednisolona 1 mg/kg IV (máx. 60 mg) diluída em 50–100 mL de SF 0,9% em 15–30 min.\n6. Se surgir dispneia, sibilância, rouquidão, hipotensão, síncope ou vômitos: adrenalina 1 mg/mL 0,01 mg/kg IM no vasto lateral da coxa (máx. 0,5 mg adulto; 0,3 mg criança pré-púbere) e seguir a ficha Anafilaxia.\n7. Observar por pelo menos 2 a 4 horas antes da alta; suspender IECA se angioedema."
  },
  orientacoesRetorno: [
    "Urticária costuma melhorar em dias a poucas semanas; tomar o anti-histamínico todos os dias, mesmo sem manchas, pelo tempo combinado",
    "Evitar o que causou a reação (remédio, alimento) e anotar em documento/cartão; avisar em toda consulta",
    "Evitar anti-inflamatórios (ibuprofeno, diclofenaco, AAS) se pioram as manchas; para dor ou febre, preferir paracetamol ou dipirona se já tolerados",
    "Banho morno, roupas leves; calor, álcool e roupas apertadas pioram a coceira",
    "Procurar o pronto-socorro imediatamente se houver falta de ar, chiado, rouquidão, inchaço da língua ou da garganta, tontura, desmaio ou vômitos",
    "Urticária que dura mais de 6 semanas: retornar para avaliação de urticária crônica e anotar diariamente número de manchas e intensidade da coceira (UAS7)",
    "Retornar em 2 a 4 semanas se não houver controle com o remédio"
  ],
  destino: {
    agora: [
      "Anafilaxia: adrenalina IM e sala de emergência (ver ficha Anafilaxia)",
      "Urticária extensa ou angioedema periférico sem sinais sistêmicos: tratar e observar 2–4 h"
    ],
    reavaliar: [
      "Após 1–2 h de anti-histamínico: regressão das placas e ausência de sinais sistêmicos",
      "Crônica: a cada 2–4 semanas até controle, depois a cada 3–6 meses (tentar reduzir dose quando controlada)"
    ],
    alta: [
      "Sem sintomas sistêmicos, via aérea preservada, melhora do prurido, paciente capaz de reconhecer sinais de anafilaxia",
      "Com receita de anti-histamínico e orientação de evitar o gatilho"
    ],
    observacao: [
      "Angioedema de lábios ou pálpebras, urticária generalizada intensa: 2–4 h",
      "Após anafilaxia tratada: ver ficha Anafilaxia (observação mais longa)"
    ],
    internacao: [
      "Angioedema progressivo, anafilaxia com resposta parcial ou bifásica, farmacodermia grave (SJS/NET, DRESS)"
    ],
    transferencia: [
      "Alergia/imunologia ou dermatologia (eletivo): urticária crônica sem controle com anti-H1 em dose 4×, suspeita de vasculite urticariforme, angioedema recorrente sem urticas, suspeita de alergia a alimento, medicamento ou veneno de inseto",
      "Hospital de referência: angioedema de via aérea, anafilaxia refratária"
    ]
  },
  fontes: [
    "Zuberbier T, et al. The international EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline for the definition, classification, diagnosis, and management of urticaria. Allergy 2022;77:734–766 (versão vigente; anti-H1 2ª geração, aumento até 4×, omalizumabe, ciclosporina; corticoide só em curso curto até 10 dias)",
    "Associação Brasileira de Alergia e Imunologia (ASBAI) — Guia prático de urticária / Diretrizes brasileiras de urticária crônica, Arq Asma Alerg Imunol (2019) e atualizações",
    "Ministério da Saúde — RENAME 2024 (loratadina, dexclorfeniramina, prometazina, prednisona, prednisolona)",
    "Bulas ANVISA: loratadina, desloratadina, cetirizina, fexofenadina, dexclorfeniramina, prometazina — doses por idade",
    "World Allergy Organization — Anaphylaxis Guidance 2020 e ficha Anafilaxia deste sistema"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
