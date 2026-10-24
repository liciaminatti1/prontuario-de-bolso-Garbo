// Abortamento
registrarFicha({
  id: "abortamento",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Abortamento: formas clínicas, AMIU, misoprostol e aborto infectado",
  resumo: "Interrupção da gestação antes de 20–22 semanas ou feto < 500 g. Sangramento na 1ª metade da gestação: classificar a forma clínica (ameaça, inevitável, incompleto, completo, retido, infectado), excluir ectópica e escolher conduta expectante, medicamentosa (misoprostol) ou esvaziamento (AMIU).",
  palavrasChave: "abortamento aborto ameaca de aborto aborto incompleto aborto retido aborto infectado aborto septico perda gestacional sangramento primeiro trimestre amiu aspiracao manual intrauterina curetagem misoprostol anti d aborto legal interrupcao legal da gestacao anencefalia estupro",
  critico: {
    tempo: "Infectado: antibiótico e esvaziar",
    texto: "Sangramento intenso com instabilidade ou aborto infectado: reanimação, antibiótico IV de amplo espectro e esvaziamento uterino nas primeiras horas. Sempre excluir gravidez ectópica."
  },
  alarmes: [
    "Instabilidade hemodinâmica ou sangramento que encharca 2 absorventes por hora por 2 horas",
    "Febre, secreção fétida, dor à mobilização do colo, peritonite (aborto infectado)",
    "Choque séptico, icterícia, oligúria, CIVD (aborto infectado grave, Clostridium)",
    "Relato de manipulação uterina ou introdução de objetos (risco de perfuração e sepse)",
    "Útero vazio com beta-hCG positivo (pensar em ectópica)"
  ],
  condutaInicial: [
    "Sinais vitais, acesso venoso, hemograma, tipagem ABO/Rh e beta-hCG se não confirmado",
    "Exame especular: volume do sangramento, colo aberto ou fechado, restos no canal",
    "USG transvaginal para localizar a gestação e definir a forma clínica",
    "Instável: cristaloide, sangue, ocitocina se colo aberto com restos e esvaziamento de urgência",
    "Rh negativo não sensibilizada: anti-D até 72 h"
  ],
  fataisExcluir: [
    "Gravidez ectópica",
    "Aborto infectado / sepse",
    "Perfuração uterina ou lesão intestinal (aborto provocado inseguro)",
    "Doença trofoblástica gestacional (mola)",
    "Hemorragia por coagulopatia"
  ],
  proximaDecisao: "Ameaça (colo fechado, embrião vivo): expectante e pré-natal. Completo (útero vazio, sangramento cessando, gestação intrauterina previamente documentada): seguimento. Incompleto ou retido < 12–13 semanas: decisão compartilhada entre expectante, misoprostol ou AMIU. Infectado, instável ou sangramento intenso: AMIU/esvaziamento imediato após antibiótico. ≥ 12–13 semanas: internação, misoprostol e esvaziamento em ambiente hospitalar.",
  clinica: {
    anamnese: [
      "DUM, idade gestacional, USG prévia com gestação intrauterina documentada",
      "Volume do sangramento, coágulos, eliminação de tecido, dor em cólica",
      "Febre, secreção fétida, manipulação uterina ou uso de medicações para abortar",
      "Perdas gestacionais anteriores, tipagem Rh",
      "Contexto: violência sexual, gestação indesejada (acolher sem julgamento; sigilo profissional)"
    ],
    exameFisico: [
      "Sinais vitais, palidez, sinais de sepse",
      "Abdome: defesa, peritonite",
      "Especular: colo fechado ou pérvio, restos ovulares, lesões ou corpos estranhos",
      "Toque: tamanho uterino compatível ou não com a IG, dor à mobilização, anexos"
    ],
    diferenciais: [
      { dx: "Gravidez ectópica", pista: "Útero vazio, massa anexial, beta-hCG acima da zona discriminatória" },
      { dx: "Mola hidatiforme", pista: "Útero maior que a IG, beta-hCG muito alto, hiperêmese, imagem em 'flocos de neve'" },
      { dx: "Sangramento de implantação ou hematoma subcoriônico", pista: "Embrião vivo, colo fechado" },
      { dx: "Lesão do colo (pólipo, ectrópio, cervicite, câncer)", pista: "Sangramento de origem cervical ao especular" }
    ],
    gravidade: [
      "Ameaça: sangramento leve, colo fechado, embrião vivo",
      "Inevitável: colo pérvio, sangramento e cólica, gestação ainda intrauterina",
      "Incompleto: colo pérvio ou restos à USG (eco endometrial heterogêneo e espesso)",
      "Completo: colo fechado, sangramento diminuindo, cavidade vazia (só confirmar se havia gestação intrauterina prévia)",
      "Retido: embrião sem atividade cardíaca, sem expulsão. Critérios de USG: CCN ≥ 7 mm sem batimento ou diâmetro médio do saco ≥ 25 mm sem embrião",
      "Infectado: febre, secreção purulenta ou fétida, dor uterina; grave se sepse, peritonite ou choque"
    ]
  },
  exames: [
    {
      nome: "USG transvaginal",
      pedido: "Ultrassonografia transvaginal — sangramento na gestação inicial, DUM ___. Avaliar gestação intrauterina, vitalidade, restos ovulares e anexos.",
      porQue: "Definir a forma clínica e excluir ectópica e mola.",
      esperar: "Saco gestacional intrauterino com embrião e batimento cardíaco na ameaça de aborto.",
      interpretacao: "CCN ≥ 7 mm sem batimento ou saco ≥ 25 mm sem embrião = perda confirmada. Abaixo desses limites e sem certeza: repetir USG em 7–14 dias. Eco endometrial espesso e heterogêneo = restos.",
      limitacoes: "Não existe ponto de corte de espessura endometrial consensual para indicar esvaziamento; decidir pela clínica."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma completo, tipagem ABO/Rh, Coombs indireto (se Rh negativo), beta-hCG quantitativo. No aborto infectado: hemoculturas (2 amostras), lactato, creatinina, bilirrubinas, coagulograma, gasometria.",
      porQue: "Avaliar anemia, necessidade de anti-D e gravidade da sepse.",
      esperar: "—",
      interpretacao: "Beta-hCG serve de base para seguimento quando o tratamento é expectante ou medicamentoso.",
      limitacoes: "—"
    },
    {
      nome: "Anatomopatológico",
      pedido: "Exame anatomopatológico do material obtido no esvaziamento uterino.",
      porQue: "Confirmar gestação intrauterina e excluir mola.",
      esperar: "Restos ovulares.",
      interpretacao: "Mola hidatiforme → seguimento com beta-hCG (ver ficha doenca-trofoblastica).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "AMIU (aspiração manual intrauterina)",
      linha: "l1",
      dose: "Cânula de diâmetro próximo à IG em semanas; bloqueio paracervical com lidocaína 1% sem vasoconstritor (dose máxima 4,5 mg/kg)",
      via: "Intrauterina",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Sangramento, sinais vitais, dor; revisar o material aspirado",
      contraindicacoes: "Útero acima de 12 semanas (preferir esvaziamento hospitalar com preparo); suspeita de perfuração",
      ajustes: "Técnica de escolha até 12 semanas (OMS, MS): menos perfuração e anestesia que a curetagem. Preparo do colo com misoprostol 400 mcg vaginal ou sublingual 1–3 h antes quando necessário. Profilaxia antibiótica antes do procedimento (doxiciclina 200 mg VO ou azitromicina 500 mg VO)"
    },
    {
      droga: "Misoprostol — aborto incompleto < 13 semanas",
      linha: "l1",
      dose: "600 mcg VO dose única ou 400 mcg sublingual dose única (alternativa: 800 mcg vaginal)",
      via: "VO, sublingual ou vaginal",
      intervalo: "Dose única",
      duracao: "Reavaliar em 7–14 dias",
      monitorizacao: "Sangramento, dor, febre; USG ou clínica no retorno",
      contraindicacoes: "Suspeita de ectópica, infecção, instabilidade, DIU in situ (retirar), alergia a prostaglandinas, coagulopatia grave",
      ajustes: "FIGO 2023 / OMS 2022. No Brasil, o misoprostol é de uso hospitalar (comprimidos vaginais de 25 e 200 mcg); administrar na unidade. Efeitos: cólica, sangramento, febre transitória, diarreia"
    },
    {
      droga: "Misoprostol — aborto retido < 13 semanas",
      linha: "l1",
      dose: "800 mcg vaginal (ou sublingual)",
      via: "Vaginal ou sublingual",
      intervalo: "A cada 3 h se necessário até a expulsão (FIGO 2023)",
      duracao: "Conforme protocolo do serviço; falha → AMIU",
      monitorizacao: "Expulsão, sangramento, dor, temperatura",
      contraindicacoes: "As mesmas do aborto incompleto",
      ajustes: "Mifepristona + misoprostol é mais eficaz, mas a mifepristona não está registrada no Brasil. Gestação ≥ 13 semanas e óbito fetal no 2º trimestre: doses menores e protocolo hospitalar (FIGO 2023); cicatriz uterina prévia exige cautela"
    },
    {
      droga: "Clindamicina + gentamicina (aborto infectado)",
      linha: "l1",
      dose: "Clindamicina 900 mg + gentamicina 5 mg/kg",
      via: "IV",
      intervalo: "Clindamicina 8/8 h; gentamicina 1 vez ao dia",
      duracao: "Até 48 h sem febre e com melhora clínica; não precisa completar por VO na maioria",
      monitorizacao: "Temperatura, lactato, creatinina, diurese",
      contraindicacoes: "Gentamicina: insuficiência renal (ajustar)",
      ajustes: "Clindamicina em 100 mL de SF 0,9% em 30 min; gentamicina em 100 mL de SF 0,9% em 30–60 min. Alternativa: ampicilina 2 g IV 6/6 h + gentamicina + metronidazol 500 mg IV 8/8 h. Sepse: iniciar na 1ª hora e esvaziar o útero logo após"
    },
    {
      droga: "Ocitocina",
      linha: "adj",
      dose: "20 UI em 500 mL de SF 0,9%",
      via: "IV",
      intervalo: "Infusão contínua",
      duracao: "Durante e após o esvaziamento se sangramento importante",
      monitorizacao: "Tônus uterino e sangramento",
      contraindicacoes: "—",
      ajustes: "Útil sobretudo em gestações mais avançadas; o esvaziamento é o tratamento definitivo do sangramento por restos"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "adj",
      dose: "1 ampola (250–300 mcg, conforme apresentação disponível)",
      via: "IM",
      intervalo: "Dose única até 72 h",
      duracao: "—",
      monitorizacao: "Tipagem e Coombs indireto",
      contraindicacoes: "Rh positivo; Coombs indireto positivo",
      ajustes: "Rh negativo não sensibilizada em abortamento (MS). Algumas diretrizes dispensam no aborto completo espontâneo < 12 semanas sem instrumentação; seguir o protocolo local"
    },
    {
      droga: "Progesterona micronizada (ameaça de aborto)",
      linha: "alt",
      dose: "400 mg",
      via: "Vaginal",
      intervalo: "12/12 h",
      duracao: "Até 16 semanas",
      monitorizacao: "—",
      contraindicacoes: "Gestação não viável ou ectópica",
      ajustes: "Não é rotina. Pode ser oferecida a quem tem sangramento com embrião vivo e perda gestacional prévia (NICE 2021, estudo PRISM). Repouso absoluto não tem benefício"
    }
  ],
  destino: {
    agora: [
      "Instável ou infectado: reanimação, antibiótico e esvaziamento uterino",
      "Estável: definir a forma clínica e conduta compartilhada"
    ],
    reavaliar: [
      "Expectante ou misoprostol: retorno em 7–14 dias (clínica e/ou USG; ou beta-hCG urinário em 3 semanas)",
      "Ameaça de aborto: retorno no pré-natal em 1–2 semanas"
    ],
    alta: [
      "Estável, sangramento controlado, Hb adequada",
      "Anti-D aplicada se indicada",
      "Contracepção oferecida e iniciada (DIU pode ser inserido logo após AMIU sem infecção; hormonais no mesmo dia)",
      "Encaminhamento à UBS e apoio psicológico"
    ],
    observacao: [
      "Após AMIU: observar 1–2 h (sangramento, dor, sinais vitais)"
    ],
    internacao: [
      "Aborto infectado",
      "Gestação ≥ 12–13 semanas",
      "Sangramento intenso ou anemia sintomática",
      "Suspeita de perfuração ou manipulação uterina com objeto"
    ],
    transferencia: [
      "Sem AMIU, centro cirúrgico ou banco de sangue: transferir após estabilização e início do antibiótico",
      "Aborto legal: serviço de referência para interrupção legal da gestação (ver violencia-sexual)"
    ]
  },
  prescricao: {
    hospitalar: "ABORTAMENTO INCOMPLETO/RETIDO < 12 SEMANAS — AMIU\n1. Dieta zero até o procedimento.\n2. Acesso venoso; SF 0,9% 500 mL IV para manter acesso.\n3. Profilaxia: doxiciclina 100 mg 2 comprimidos VO (200 mg) 1 h antes (ou azitromicina 500 mg VO).\n4. Preparo do colo (se necessário): misoprostol 200 mcg 2 comprimidos (400 mcg) via vaginal ou sublingual 1–3 h antes.\n5. Analgesia: dipirona 1 g IV + cetoprofeno 100 mg IV em 100 mL de SF 0,9% 30 min antes; bloqueio paracervical com lidocaína 1% sem vasoconstritor (até 4,5 mg/kg).\n6. AMIU. Enviar material para anatomopatológico.\n7. Se Rh negativo e Coombs indireto negativo: imunoglobulina anti-D 1 ampola IM.\n8. Sinais vitais e sangramento de 30/30 min por 2 h.\n\nABORTO INFECTADO\n1. Dieta zero; 2 acessos; ressuscitação volêmica conforme protocolo de sepse.\n2. Hemoculturas (2 amostras), lactato, hemograma, creatinina, coagulograma antes do antibiótico, sem atrasá-lo.\n3. Clindamicina 900 mg + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n4. Gentamicina 5 mg/kg (___ mg) + SF 0,9% 100 mL IV em 30–60 min 1 vez ao dia.\n   (Alternativa: ampicilina 2 g IV 6/6 h + gentamicina + metronidazol 500 mg IV 8/8 h.)\n5. Ocitocina 20 UI + SF 0,9% 500 mL IV contínuo se sangramento.\n6. Esvaziamento uterino (AMIU ou curetagem) assim que iniciado o antibiótico.\n7. Dipirona 1 g IV de 6/6 h se dor ou febre.\n8. Anti-D se Rh negativo não sensibilizada.\n9. Controle de diurese, sinais vitais de 1/1 h nas primeiras 6 h.\n\nMISOPROSTOL (na unidade; uso hospitalar)\n- Incompleto < 13 semanas: misoprostol 600 mcg VO dose única ou 400 mcg sublingual dose única.\n- Retido < 13 semanas: misoprostol 800 mcg via vaginal; repetir a cada 3 h se necessário (FIGO 2023).",
    ambulatorial: "APÓS ESVAZIAMENTO OU TRATAMENTO MEDICAMENTOSO\nUSO ORAL\n1. Ibuprofeno 400 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, se cólica, por até 5 dias.\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor ou febre.\n3. Sulfato ferroso 40 mg de ferro elementar ------ 60 comprimidos\n   Tomar 1 comprimido ao dia, 30 minutos antes do almoço, por 2 meses (se anemia: 2 comprimidos ao dia por 3 meses).\n\nCONTRACEPÇÃO (se desejar evitar gravidez)\n- Iniciar o método escolhido hoje (ver ficha anticoncepcao)."
  },
  orientacoesRetorno: [
    "Perder a gravidez no início é comum e quase sempre não tem relação com algo que você fez",
    "Sangramento parecido com menstruação por até 2 semanas é esperado; usar absorvente, não usar tampão interno",
    "Voltar imediatamente se: febre, sangramento que encharca 2 absorventes por hora por 2 horas, dor forte, corrimento com mau cheiro, tontura ou desmaio",
    "A ovulação pode voltar em 2 semanas: usar contracepção se não deseja nova gravidez agora",
    "Não há necessidade de esperar vários meses para tentar engravidar de novo se estiver bem física e emocionalmente; começar ácido fólico antes",
    "Retorno na UBS em 1–2 semanas; procurar apoio se tristeza persistente"
  ],
  tabelas: [
    {
      titulo: "Formas clínicas do abortamento",
      colunas: ["Forma", "Colo", "USG", "Conduta"],
      linhas: [
        ["Ameaça", "Fechado", "Embrião vivo", "Expectante, analgesia, pré-natal"],
        ["Inevitável", "Aberto", "Gestação em expulsão", "Esvaziamento ou misoprostol"],
        ["Incompleto", "Aberto ou fechado", "Restos ovulares", "Expectante, misoprostol ou AMIU"],
        ["Completo", "Fechado", "Cavidade vazia", "Seguimento; anti-D se indicado"],
        ["Retido", "Fechado", "CCN ≥ 7 mm sem BCF ou saco ≥ 25 mm sem embrião", "Expectante, misoprostol ou AMIU"],
        ["Infectado", "Variável, secreção fétida", "Restos", "Antibiótico IV + esvaziamento"]
      ],
      nota: "Perda gestacional de repetição (≥ 2–3 perdas): encaminhar para investigação no ambulatório de ginecologia."
    },
    {
      titulo: "Aborto legal no Brasil",
      colunas: ["Situação", "O que é necessário"],
      linhas: [
        ["Gravidez resultante de estupro (CP art. 128, II)", "Relato da mulher e consentimento; NÃO exige boletim de ocorrência nem autorização judicial. Ver ficha violencia-sexual"],
        ["Risco de vida para a gestante (CP art. 128, I)", "Avaliação e registro médico"],
        ["Anencefalia fetal (STF, ADPF 54, 2012)", "Diagnóstico ultrassonográfico com laudo"]
      ],
      nota: "Encaminhar ao serviço de referência para interrupção legal. Atendimento ao abortamento (inclusive provocado) é dever profissional, com sigilo; não comunicar à polícia. Notificar violência no SINAN quando houver."
    }
  ],
  fontes: [
    "Ministério da Saúde — Atenção Humanizada ao Abortamento: norma técnica, 2ª ed. (2011)",
    "Ministério da Saúde — Prevenção e tratamento dos agravos resultantes da violência sexual contra mulheres e adolescentes: norma técnica (2012)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Abortamento espontâneo / Perda gestacional precoce. Protocolos FEBRASGO (2021)",
    "FIGO — Updated recommendations for misoprostol and mifepristone regimens (2023)",
    "OMS — Abortion care guideline (2022)",
    "NICE NG126 — Ectopic pregnancy and miscarriage (2019, atualizado 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
