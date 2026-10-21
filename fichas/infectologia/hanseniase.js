// Hanseníase
registrarFicha({
  id: "hanseniase",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "completo",
  titulo: "Hanseníase: diagnóstico, PQT-U, reações e contatos",
  resumo: "Doença crônica por Mycobacterium leprae que acomete pele e nervos periféricos. Diagnóstico clínico (lesão com alteração de sensibilidade e/ou nervo espessado com alteração funcional). Tratamento na UBS com PQT-U (rifampicina, dapsona e clofazimina): 6 doses (paucibacilar) ou 12 doses (multibacilar). Notificação compulsória e exame de contatos.",
  palavrasChave: "hanseniase lepra mal de hansen mancha dormente pqt pqt-u poliquimioterapia rifampicina dapsona clofazimina paucibacilar multibacilar reacao hansenica eritema nodoso neurite talidomida prednisona contatos bcg baciloscopia",
  critico: {
    tempo: "Neurite: corticoide no mesmo dia",
    texto: "Dor ou espessamento de nervo com perda recente de força ou sensibilidade é neurite: prednisona 1 mg/kg/dia, imobilização e avaliação neurológica seriada. Atraso causa incapacidade permanente. Não suspender a PQT nas reações."
  },
  alarmes: [
    "Neurite: dor neural, perda de força ou de sensibilidade nas mãos, pés ou olhos (lagoftalmo)",
    "Reação tipo 2 grave: nódulos dolorosos com febre, orquite, iridociclite, artrite, glomerulonefrite",
    "Reação tipo 1 com ulceração de lesões ou lesão na face próxima a olhos",
    "Olho vermelho doloroso, baixa visual, lagoftalmo (risco de cegueira)",
    "Icterícia, anemia, febre com exantema e linfonodos após dapsona (hepatite, hemólise, síndrome da sulfona — suspender e internar)",
    "Mulher em idade fértil sem contracepção eficaz em uso de talidomida (teratogênica)"
  ],
  condutaInicial: [
    "Exame dermatoneurológico: pele toda, sensibilidade térmica, dolorosa e tátil das lesões (monofilamentos), palpação dos nervos (ulnar, mediano, radial, fibular comum, tibial posterior, auricular), força muscular",
    "Diagnóstico (1 ou mais sinais cardinais): lesão de pele com alteração de sensibilidade; espessamento de nervo periférico com alteração sensitiva, motora e/ou autonômica; baciloscopia positiva",
    "Classificação operacional: paucibacilar (PB) até 5 lesões e baciloscopia negativa; multibacilar (MB) mais de 5 lesões ou baciloscopia positiva (na dúvida, tratar como MB)",
    "Avaliar e registrar grau de incapacidade física (0, 1 ou 2) no diagnóstico e na alta",
    "Iniciar PQT-U: dose mensal supervisionada na UBS + doses diárias em casa. PB: 6 cartelas em até 9 meses. MB: 12 cartelas em até 18 meses",
    "Notificar (SINAN) e examinar todos os contatos domiciliares e sociais dos últimos 5 anos",
    "Antes de corticoide prolongado: tratar empiricamente estrongiloidíase; checar glicemia e PA",
    "Orientar autocuidado (olhos, mãos, pés) e combater o estigma; a transmissão cessa logo após o início da PQT"
  ],
  fataisExcluir: [
    "Neurite silenciosa com perda funcional progressiva",
    "Reação tipo 2 com acometimento sistêmico",
    "Síndrome da sulfona (DRESS por dapsona) e hemólise grave (deficiência de G6PD)",
    "Iridociclite / ceratite de exposição"
  ],
  proximaDecisao: "Alta por cura ao completar as doses no prazo (PB 6/9 meses, MB 12/18 meses) com avaliação neurológica e grau de incapacidade. Reação após a alta não é recidiva: tratar a reação sem reiniciar PQT. Suspeita de recidiva ou resistência: encaminhar à referência.",
  clinica: {
    anamnese: [
      "Manchas hipocrômicas ou avermelhadas com diminuição de sensibilidade, áreas dormentes, perda de pelos ou suor",
      "Formigamento, choques, dor nos nervos, fraqueza nas mãos e pés, queimaduras ou feridas indolores",
      "Ressecamento ocular, dificuldade de fechar os olhos, obstrução nasal crônica, epistaxe",
      "Contato com caso de hanseníase (domiciliar ou social)",
      "Comorbidades, gestação, alergia a sulfas, deficiência de G6PD, medicações em uso (anticoncepcional, anticoagulante, antirretrovirais)"
    ],
    exameFisico: [
      "Inspeção da pele em ambiente iluminado: número e tipo de lesões (máculas, placas, infiltração difusa, hansenomas)",
      "Teste de sensibilidade térmica (tubos quente/frio ou algodão com éter), dolorosa (agulha) e tátil",
      "Palpação de nervos: espessamento, dor, choque",
      "Avaliação neurológica simplificada: monofilamentos em mãos e pés, força muscular (abrir/fechar dedos, dorsiflexão do pé), olhos (força de fechamento, sensibilidade corneana)",
      "Madarose, infiltração de lóbulos e face (MB)"
    ],
    diferenciais: [
      { dx: "Pitiríase versicolor", pista: "Descamação fina ao estiramento; sensibilidade preservada" },
      { dx: "Pitiríase alba / vitiligo", pista: "Sensibilidade preservada; vitiligo acrômico" },
      { dx: "Tinha do corpo", pista: "Borda descamativa, prurido; sensibilidade normal; exame micológico" },
      { dx: "Neuropatia diabética, alcoólica ou por túnel do carpo", pista: "Simétrica, distal, sem lesões de pele nem nervo espessado" },
      { dx: "Eritema nodoso de outras causas, lúpus, sarcoidose, leishmaniose", pista: "Sem perda de sensibilidade; biópsia se dúvida" }
    ],
    gravidade: [
      "Grau 0: sem alteração de sensibilidade ou força em olhos, mãos e pés",
      "Grau 1: diminuição ou perda de sensibilidade em olhos, mãos ou pés (sem deformidade visível)",
      "Grau 2: deformidades visíveis (lagoftalmo, garras, reabsorção, pé caído, úlceras) ou acuidade visual < 0,1",
      "Reação tipo 1 (reversa): lesões antigas ficam eritematosas e edemaciadas, surgem novas, neurite; mais em formas dimorfas",
      "Reação tipo 2 (eritema nodoso hansênico): nódulos dolorosos, febre, mal-estar, artralgia, orquite, irite; em MB"
    ]
  },
  exames: [
    {
      nome: "Baciloscopia de raspado intradérmico",
      pedido: "Baciloscopia de raspado intradérmico (lóbulos auriculares, cotovelos e lesão) — índice baciloscópico.",
      porQue: "Classificação operacional e casos de dúvida.",
      esperar: "Dias.",
      interpretacao: "Positiva = MB. Negativa não exclui hanseníase.",
      limitacoes: "Baixa sensibilidade em PB. O diagnóstico é clínico; não atrasar o tratamento esperando o exame."
    },
    {
      nome: "Exames antes da PQT",
      pedido: "Hemograma completo, ALT, AST, bilirrubinas, creatinina; beta-hCG em mulher em idade fértil; G6PD se disponível (antes da dapsona).",
      porQue: "Basal para toxicidade de dapsona (hemólise, metemoglobinemia) e rifampicina (hepatite).",
      esperar: "—",
      interpretacao: "Queda importante da hemoglobina, icterícia, cianose (metemoglobinemia) ou elevação relevante das transaminases: avaliar suspensão e esquema substitutivo com a referência.",
      limitacoes: "Não atrasar o início se sem acesso a laboratório."
    },
    {
      nome: "Exames antes de corticoide/talidomida",
      pedido: "Glicemia, PA, parasitológico de fezes (ou tratamento empírico para Strongyloides), beta-hCG.",
      porQue: "Corticoide prolongado: hiperinfecção por estrongiloides, diabetes, hipertensão. Talidomida: teratogênica.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Testes complementares (referência)",
      pedido: "Biópsia de pele com pesquisa de BAAR; eletroneuromiografia; teste rápido anti-PGL-I e qPCR conforme disponibilidade local.",
      porQue: "Dúvida diagnóstica, forma neural pura, investigação de contatos.",
      esperar: "Semanas.",
      interpretacao: "Teste rápido reagente em contato indica maior risco: examinar e acompanhar com prioridade.",
      limitacoes: "Teste rápido não confirma doença."
    }
  ],
  tratamento: [
    { droga: "PQT-U adulto (> 50 kg) — dose mensal supervisionada", linha: "l1", dose: "Rifampicina 600 mg + clofazimina 300 mg + dapsona 100 mg", via: "VO", intervalo: "1 vez a cada 28 dias, na UBS", duracao: "PB: 6 doses em até 9 meses. MB: 12 doses em até 18 meses", monitorizacao: "Hemograma, ALT/AST periódicos; sinais de reação", contraindicacoes: "Hepatopatia grave (rifampicina); anemia hemolítica grave/G6PD (dapsona)", ajustes: "Rifampicina reduz eficácia de anticoncepcional hormonal, varfarina, antirretrovirais: orientar método de barreira. Urina avermelhada" },
    { droga: "PQT-U adulto (> 50 kg) — doses diárias autoadministradas", linha: "l1", dose: "Clofazimina 50 mg + dapsona 100 mg", via: "VO", intervalo: "1 vez ao dia", duracao: "Mesma da cartela", monitorizacao: "Pigmentação da pele (clofazimina, reversível); anemia", contraindicacoes: "—", ajustes: "Gestação e lactação: PQT-U pode ser mantida" },
    { droga: "PQT-U infantil (30 a 50 kg; também adulto < 50 kg)", linha: "l1", dose: "Mensal: rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg. Diária: dapsona 50 mg/dia + clofazimina 50 mg em dias alternados", via: "VO", intervalo: "Mensal supervisionada + diária", duracao: "PB 6 / MB 12 doses", monitorizacao: "Hemograma, função hepática", contraindicacoes: "—", ajustes: "Criança > 50 kg: esquema de adulto" },
    { droga: "PQT-U criança < 30 kg (por peso)", linha: "l1", dose: "Mensal: rifampicina 10 mg/kg + clofazimina 6 mg/kg + dapsona 2 mg/kg. Diária: dapsona 2 mg/kg + clofazimina 1 mg/kg", via: "VO", intervalo: "Mensal supervisionada + diária", duracao: "PB 6 / MB 12 doses", monitorizacao: "Hemograma", contraindicacoes: "—", ajustes: "Clofazimina diária: calcular a dose semanal e dividir em 2 a 3 tomadas. Conferir no PCDT/guia vigente" },
    { droga: "Prednisona — reação tipo 1, neurite ou reação tipo 2 com neurite", linha: "l1", dose: "1 mg/kg/dia (adulto e criança)", via: "VO", intervalo: "1 vez ao dia pela manhã", duracao: "Dose plena até melhora clínica; depois redução lenta e gradual guiada pela avaliação neurológica (em geral 4 a 6 meses no total)", monitorizacao: "Glicemia, PA, avaliação neurológica a cada 15–30 dias", contraindicacoes: "Infecção ativa não tratada", ajustes: "Profilaxia de estrongiloidíase antes (ivermectina 200 mcg/kg dose única ou albendazol). Cálcio e vitamina D se uso prolongado. Imobilizar membro na neurite" },
    { droga: "Talidomida — reação tipo 2 (eritema nodoso hansênico)", linha: "l1", dose: "100 a 400 mg/dia conforme gravidade", via: "VO", intervalo: "1 vez ao dia à noite ou dividido", duracao: "Reduzir gradualmente após controle", monitorizacao: "Neuropatia periférica, sonolência, trombose (associar AAS se risco)", contraindicacoes: "Gestação. Mulher em idade fértil só com 2 métodos contraceptivos e termo de responsabilidade (RDC 11/2011)", ajustes: "Se contraindicada: prednisona 1 mg/kg/dia. Pentoxifilina é alternativa adjuvante" },
    { droga: "Suspender PQT durante reações", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Reação não é falha nem alergia", ajustes: "Manter PQT e tratar a reação" }
  ],
  destino: {
    agora: ["1ª dose supervisionada na UBS", "Notificação e convocação de contatos", "Avaliação de incapacidade física"],
    reavaliar: ["Mensal na dose supervisionada (exame neurológico simplificado)", "Reação/neurite: a cada 15–30 dias até estabilizar"],
    alta: ["Alta por cura ao completar as doses no prazo, com avaliação neurológica e grau de incapacidade registrados"],
    observacao: ["—"],
    internacao: ["Reação tipo 2 grave com sintomas sistêmicos", "Neurite grave refratária", "Síndrome da sulfona, hepatite ou hemólise grave"],
    transferencia: ["Centro de referência em hanseníase: dúvida diagnóstica, reações refratárias, intolerância à PQT, suspeita de recidiva ou resistência, reabilitação (cirurgia, órteses)"]
  },
  prescricao: {
    ambulatorial: "HANSENÍASE — PQT-U ADULTO (> 50 kg)\nUSO ORAL — cartela PQT-U adulto (fornecida pelo SUS)\n1. Dose mensal supervisionada (na UBS, a cada 28 dias):\n   Rifampicina 600 mg (2 cápsulas de 300 mg) + Clofazimina 300 mg (3 cápsulas de 100 mg) + Dapsona 100 mg (1 comprimido).\n2. Doses diárias em casa (do 2º ao 28º dia):\n   Clofazimina 50 mg 1 cápsula + Dapsona 100 mg 1 comprimido, 1 vez ao dia.\n   Duração: paucibacilar 6 cartelas (em até 9 meses); multibacilar 12 cartelas (em até 18 meses).\n\nCRIANÇA 30–50 kg (ou adulto < 50 kg) — cartela PQT-U infantil\n1. Mensal supervisionada: rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg.\n2. Diária: dapsona 50 mg 1 vez ao dia + clofazimina 50 mg em dias alternados.\n\nCRIANÇA < 30 kg (peso: ___ kg)\n- Mensal: rifampicina 10 mg/kg + clofazimina 6 mg/kg + dapsona 2 mg/kg. Diária: dapsona 2 mg/kg + clofazimina 1 mg/kg (dividir a dose semanal em 2 a 3 tomadas).\n\nREAÇÃO TIPO 1 OU NEURITE (adulto 60 kg = exemplo)\n3. Ivermectina 6 mg ------------------------------ 2 comprimidos\n   Tomar 2 comprimidos (12 mg = 200 mcg/kg para 60 kg) em dose única antes de iniciar o corticoide.\n4. Prednisona 20 mg ----------------------------- 45 comprimidos\n   Tomar 3 comprimidos (60 mg = 1 mg/kg) 1 vez ao dia pela manhã por 15 dias; reavaliar para iniciar redução (nova receita).\n\nREAÇÃO TIPO 2 (homem ou mulher sem possibilidade de gestar)\n5. Talidomida 100 mg ----------------------------- 30 comprimidos (receita específica + termo)\n   Tomar 1 a 4 comprimidos ao dia conforme gravidade, à noite; reduzir após controle."
  },
  orientacoesRetorno: [
    "Hanseníase tem cura e o tratamento é gratuito; após começar o remédio, a pessoa deixa de transmitir",
    "Vir à UBS todo mês para a dose supervisionada; tomar as doses diárias em casa sem falhar",
    "A urina pode ficar avermelhada (rifampicina) e a pele escurecer (clofazimina): melhora após o tratamento",
    "Rifampicina corta o efeito do anticoncepcional: usar também preservativo",
    "Cuidar de olhos, mãos e pés todos os dias: hidratar, examinar feridas, usar calçado adequado",
    "Voltar logo se dor ou choque nos nervos, perda de força ou sensibilidade, manchas que inflamam, caroços doloridos com febre, olho vermelho, pele ou olhos amarelos, falta de ar ou manchas no corpo",
    "Trazer as pessoas da casa e contatos próximos para exame e vacina BCG"
  ],
  tabelas: [
    {
      titulo: "Exame e conduta nos contatos",
      colunas: ["Situação do contato", "Conduta", "Observação"],
      linhas: [
        ["Todos os contatos domiciliares e sociais (últimos 5 anos)", "Exame dermatoneurológico; orientação sobre sinais", "Repetir anualmente por 5 anos se possível"],
        ["Sem cicatriz de BCG ou com 1 cicatriz", "1 dose de BCG (contatos sem doença)", "Com 2 cicatrizes: não vacinar"],
        ["Menor de 1 ano já vacinado", "Não revacinar", "—"],
        ["Teste rápido anti-PGL-I reagente (onde disponível)", "Acompanhamento prioritário", "Não confirma doença"]
      ],
      nota: "Quimioprofilaxia com rifampicina dose única foi usada em projeto piloto no SUS (2016–2018) e excluída em 2020 (Conitec). A OMS recomenda; verificar se há protocolo local vigente."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Hanseníase (Portaria SCTIE/MS nº 67, 2022)",
    "Ministério da Saúde — Diretrizes para vigilância, atenção e eliminação da hanseníase como problema de saúde pública (2016) e Guia prático sobre a hanseníase (2017)",
    "OMS — Guidelines for the diagnosis, treatment and prevention of leprosy (2018) e Estratégia Global de Hanseníase 2021–2030",
    "OPAS — Hanseníase: exame de contatos e profilaxia pós-exposição — guia técnico (2023)",
    "SESA-PR — Guia rápido de hanseníase para profissionais da atenção primária (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
