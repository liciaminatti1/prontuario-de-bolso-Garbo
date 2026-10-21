// Crise de ansiedade e ataque de pânico no pronto-socorro
registrarFicha({
  id: "crise-ansiedade",
  especialidade: "saude-mental",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Crise de ansiedade e ataque de pânico",
  resumo: "Surto súbito de medo intenso que atinge o pico em minutos, com palpitação, falta de ar, dor ou aperto no peito, tremor, sudorese, formigamento, tontura e medo de morrer ou enlouquecer. Diagnóstico de exclusão no PS: afastar causas orgânicas antes de rotular como ansiedade.",
  palavrasChave: "crise de ansiedade ataque de panico sindrome do panico hiperventilacao parestesia falta de ar palpitacao diazepam clonazepam lorazepam respiracao diafragmatica sertralina fluoxetina tcc",
  critico: {
    tempo: "ECG e glicemia antes de rotular",
    texto: "Dor torácica, dispneia ou palpitação não são ansiedade até prova em contrário: sinais vitais, SpO₂, glicemia capilar e ECG. Perguntar sempre sobre ideação suicida."
  },
  alarmes: [
    "Dor torácica típica, fatores de risco cardiovascular, idade > 40 anos ou ECG alterado (SCA, arritmia)",
    "SpO₂ baixa, taquicardia persistente, dispneia com sinais de TEP (Wells), sibilância",
    "Taquicardia com QRS estreito regular ≥ 150 bpm (taquicardia supraventricular)",
    "Hipoglicemia, febre, alteração de consciência, déficit neurológico",
    "Uso de cocaína, anfetamina, energéticos em excesso; abstinência de álcool ou benzodiazepínico (tremor, sudorese, alucinações)",
    "Ideação ou plano suicida, autolesão, sintomas psicóticos ou agitação com risco a si ou a outros",
    "Primeiro episódio após os 40–45 anos ou crise atípica (sem gatilho, com sinais objetivos persistentes)"
  ],
  conduta: [
    "Acolher em local calmo; uma pessoa conduz; explicar que os sintomas são reais e estão sendo avaliados",
    "Sinais vitais, SpO₂, glicemia capilar; ECG de 12 derivações se dor torácica, palpitação, síncope ou fator de risco",
    "Excluir causas orgânicas pela história e exame (ver alarmes); pedir exames só se dirigidos",
    "Hiperventilação com parestesias: respiração lenta guiada (inspirar 4 s, expirar 6 s, por alguns minutos). Não usar saco de papel (risco de hipóxia)",
    "Técnicas de ancoragem: nomear objetos ao redor, focar nos pés no chão; a crise costuma passar em 10–30 min",
    "Medicação só se sofrimento intenso que não cede com medidas: benzodiazepínico VO em dose única",
    "Avaliar risco de suicídio e uso de álcool e drogas antes da alta",
    "Na alta: explicar o que é crise de pânico, ensinar a respiração, encaminhar para UBS/CAPS para tratamento de manutenção (ISRS e psicoterapia)"
  ],
  exames: [
    "Glicemia capilar: todos",
    "ECG: dor torácica, palpitação, síncope, > 40 anos ou fatores de risco",
    "Troponina, D-dímero, TSH, eletrólitos, toxicológico: só se a clínica sugerir (não pedir em bateria)",
    "Gasometria não é necessária para diagnosticar hiperventilação"
  ],
  diferenciais: [
    "Síndrome coronariana aguda, arritmias (TSV, FA), TEP, asma/DPOC",
    "Hipoglicemia, hipertireoidismo, hipocalcemia, feocromocitoma (raro)",
    "Intoxicação por estimulantes (cocaína, anfetaminas, cafeína) ou abstinência de álcool/benzodiazepínico",
    "Crise epiléptica focal, AIT/AVC, vertigem vestibular",
    "Transtorno de estresse agudo/pós-traumático, depressão com ansiedade, transtorno de ansiedade generalizada"
  ],
  tratamento: [
    {
      droga: "Diazepam",
      linha: "l1",
      dose: "5–10 mg",
      via: "VO",
      intervalo: "Dose única; pode repetir 5 mg após 60 min se necessário",
      duracao: "Só na crise",
      monitorizacao: "Sedação, FR, SpO₂; não dirigir após",
      contraindicacoes: "Insuficiência respiratória, apneia do sono grave, miastenia, intoxicação por álcool/depressores, gestação (evitar)",
      ajustes: "RENAME. Idoso: 2,5–5 mg. Evitar diazepam IM (absorção errática). IV só em agitação grave ou crise convulsiva"
    },
    {
      droga: "Clonazepam",
      linha: "alt",
      dose: "0,5 mg (até 1 mg)",
      via: "VO ou sublingual (comprimido 0,25 mg SL ou 0,5 mg)",
      intervalo: "Dose única",
      duracao: "Só na crise",
      monitorizacao: "Sedação",
      contraindicacoes: "Iguais às do diazepam",
      ajustes: "RENAME lista clonazepam em solução oral 2,5 mg/mL (1 gota = 0,1 mg) e comprimido — conferir apresentações na REMUME. Idoso: 0,25 mg. Lorazepam 1–2 mg VO é outra opção (fora da RENAME)"
    },
    {
      droga: "ISRS para manutenção (sertralina ou fluoxetina)",
      linha: "l1",
      dose: "Sertralina 25 mg por 1 semana, depois 50 mg (até 200 mg) · Fluoxetina 10 mg por 1 semana, depois 20 mg (até 60 mg)",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "≥ 6–12 meses após remissão",
      monitorizacao: "Piora inicial da ansiedade nas primeiras semanas; ideação suicida em < 25 anos",
      contraindicacoes: "IMAO nas últimas 2 semanas",
      ajustes: "Iniciar na UBS/CAPS, não necessariamente no PS. Dose inicial baixa porque o pânico é sensível aos efeitos iniciais. Fluoxetina é RENAME; sertralina conferir REMUME. Receita de controle especial (C1)"
    },
    {
      droga: "Benzodiazepínico de uso contínuo prescrito no PS",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Evitar receita de benzodiazepínico para casa como tratamento: dependência e reforço do ciclo do pânico. Se indispensável, poucos comprimidos (no máximo 1–2 semanas) até consulta na UBS, com Notificação de Receita B (azul)"
    }
  ],
  prescricao: {
    hospitalar: "CRISE DE PÂNICO NO PS — ADULTO (após excluir causa orgânica)\n1. Acolhimento em sala calma; acompanhante se o paciente desejar.\n2. Respiração lenta guiada: inspirar pelo nariz em 4 segundos e expirar pela boca em 6 segundos, por 5 minutos.\n3. Diazepam 10 mg VO, dose única, se sofrimento intenso persistente (idoso ou < 60 kg: 5 mg). Pode repetir 5 mg VO após 60 minutos.\n   OU Clonazepam 0,5 mg VO ou SL, dose única (idoso: 0,25 mg).\n4. Sinais vitais, SpO₂ e glicemia capilar na admissão; ECG de 12 derivações se indicado.\n5. Reavaliar em 30–60 minutos; observar até melhora da sedação antes da alta.\n6. Não dirigir após benzodiazepínico.",
    ambulatorial: "ALTA — ATAQUE DE PÂNICO\nORIENTAÇÕES\n1. Exercício de respiração 2 vezes ao dia e durante as crises: inspirar em 4 segundos, expirar em 6 segundos, por 5 minutos.\n2. Reduzir café, energético e bebida alcoólica.\n3. Agendar consulta na UBS em até 7 dias para avaliação de tratamento contínuo (psicoterapia e, se necessário, antidepressivo).\n\nSE CRISES FREQUENTES E SEGUIMENTO GARANTIDO — RECEITA DE CONTROLE ESPECIAL (2 VIAS)\nUSO ORAL\n1. Sertralina 50 mg ------------------------------- 30 comprimidos\n   Tomar 1/2 comprimido (25 mg) pela manhã por 7 dias; depois 1 comprimido (50 mg) pela manhã. Pode piorar um pouco a ansiedade nas primeiras 1 a 2 semanas; o efeito aparece em 4 a 6 semanas.\n   (Alternativa SUS: fluoxetina 20 mg — 1 cápsula pela manhã; se muito ansioso, começar em dias alternados na 1ª semana.)"
  },
  orientacoesRetorno: [
    "A crise de pânico assusta, mas não causa infarto nem morte; os exames de hoje não mostraram doença grave",
    "A crise passa sozinha em minutos: respire devagar, solte o ar mais lentamente do que puxa",
    "Evite café, energéticos, álcool e drogas; eles pioram as crises",
    "Procure a UBS nesta semana: síndrome do pânico tem tratamento eficaz (psicoterapia e remédio de uso contínuo)",
    "Volte ao PS se a dor no peito for diferente, durar mais de 20 minutos, vier com desmaio, falta de ar que não melhora, ou se tiver pensamentos de se machucar",
    "CVV: ligue 188 (24 horas, gratuito) se precisar conversar"
  ],
  encaminhar: [
    "UBS em até 7 dias: crises recorrentes, evitação de lugares, preocupação persistente com novas crises (transtorno de pânico) — psicoterapia (TCC) e ISRS",
    "CAPS/psiquiatria: risco de suicídio, comorbidade com uso de álcool/drogas, bipolaridade, falha de 2 tratamentos",
    "Avaliação psiquiátrica no PS antes da alta: ideação suicida com plano, psicose, agitação grave"
  ],
  fontes: [
    "NICE — Generalised anxiety disorder and panic disorder in adults: management (CG113, atualizado 2020)",
    "Associação Brasileira de Psiquiatria — Diretrizes para o tratamento do transtorno de pânico (Projeto Diretrizes AMB)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 34: Saúde Mental (2013)",
    "Ministério da Saúde — RENAME 2024 (diazepam, clonazepam, fluoxetina)",
    "AHA/ACC — Guideline for the Evaluation and Diagnosis of Chest Pain (2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
