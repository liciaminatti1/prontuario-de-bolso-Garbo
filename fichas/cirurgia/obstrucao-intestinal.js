// Obstrução intestinal — delgado e cólon, volvo de sigmoide
registrarFicha({
  id: "obstrucao-intestinal",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Obstrução intestinal (delgado, cólon, volvo de sigmoide)",
  resumo: "Dor em cólica, vômitos, distensão e parada de eliminação de gases e fezes. Delgado: bridas (aderências) e hérnias. Cólon: câncer, volvo de sigmoide, diverticulite. Prioridades: hidratação, descompressão com sonda nasogástrica, correção eletrolítica e reconhecer estrangulamento.",
  palavrasChave: "obstrucao intestinal suboclusao bridas aderencias hernia volvo sigmoide ceco ogilvie pseudo obstrucao sonda nasogastrica sng gastrografina contraste hidrossoluvel neoplasia colon distensao parada eliminacao gases fezes",
  critico: {
    tempo: "Estrangulamento: cirurgia já",
    texto: "Dor contínua, febre, taquicardia, peritonite, lactato alto ou alça fechada/sinais de isquemia na TC indicam estrangulamento: cirurgia de urgência, sem tentativa de tratamento conservador."
  },
  alarmes: [
    "Dor contínua (não mais em cólica), dor desproporcional, peritonite",
    "Febre, taquicardia, hipotensão, leucocitose, lactato elevado, acidose",
    "TC: alça fechada, pneumatose, gás portal, redemoinho mesentérico, ausência de realce da parede",
    "Hérnia encarcerada dolorosa e irredutível (ver ficha hernias-complicadas)",
    "Ceco > 10–12 cm na obstrução colônica (risco de perfuração)",
    "Vômitos fecaloides, desidratação grave, lesão renal aguda, hipocalemia"
  ],
  condutaInicial: [
    "Jejum; acesso venoso; cristaloide para corrigir desidratação",
    "Sonda nasogástrica (16–18 Fr) aberta em frasco se vômitos ou distensão; anotar débito",
    "Sonda vesical e diurese horária nos casos moderados/graves",
    "Exames: hemograma, PCR, Na, K, Cl, Mg, ureia, creatinina, gasometria venosa com lactato, CPK, coagulograma, tipagem",
    "Examinar orifícios herniários e fazer toque retal",
    "TC de abdome e pelve com contraste IV (padrão); RX de abdome se TC indisponível",
    "Analgesia com dipirona e opioide; antiemético (evitar metoclopramida na obstrução mecânica)",
    "Cirurgia geral desde o início"
  ],
  fataisExcluir: [
    "Estrangulamento / isquemia de alça",
    "Volvo de sigmoide ou de ceco",
    "Hérnia encarcerada (inguinal, femoral, umbilical, incisional, obturadora)",
    "Perfuração (diastática do ceco)",
    "Isquemia mesentérica",
    "Distúrbio hidroeletrolítico grave e lesão renal aguda"
  ],
  proximaDecisao: "Obstrução de delgado por bridas sem sinais de estrangulamento → tratamento conservador (jejum, SNG, hidratação) + contraste hidrossolúvel oral/SNG; contraste no cólon em até 24 h prediz resolução. Sem melhora em até 72 h ou piora → cirurgia. Volvo de sigmoide sem isquemia → distorção endoscópica e sigmoidectomia na mesma internação. Volvo de ceco → cirurgia. Obstrução colônica por tumor → cirurgia ou prótese endoscópica conforme centro.",
  clinica: {
    anamnese: [
      "Cólica, vômitos (precoces no delgado alto, tardios e fecaloides no baixo/cólon), distensão",
      "Última evacuação e eliminação de gases",
      "Cirurgias abdominais prévias (bridas), hérnias conhecidas",
      "Perda de peso, sangue nas fezes, mudança do hábito intestinal (neoplasia)",
      "Idoso acamado, institucionalizado, constipação crônica, doença neurológica, Chagas (volvo de sigmoide, megacólon)",
      "Medicações: opioides, anticolinérgicos (pseudo-obstrução, íleo)"
    ],
    exameFisico: [
      "Desidratação, sinais vitais",
      "Distensão, cicatrizes, hérnias (inguinal, femoral, umbilical, incisional)",
      "Ruídos hidroaéreos (aumentados/metálicos no início; ausentes tardiamente)",
      "Timpanismo, peritonite",
      "Toque retal: fezes impactadas, massa, sangue, ampola vazia"
    ],
    diferenciais: [
      { dx: "Íleo paralítico", pista: "Pós-operatório, distúrbio eletrolítico, opioide; distensão difusa sem ponto de transição" },
      { dx: "Pseudo-obstrução colônica (Ogilvie)", pista: "Idoso internado/grave; cólon muito dilatado sem obstrução mecânica" },
      { dx: "Fecaloma", pista: "Toque retal com fezes endurecidas; idoso, acamado" },
      { dx: "Gastroenterite", pista: "Diarreia, sem parada de eliminação" },
      { dx: "Isquemia mesentérica", pista: "Dor desproporcional, FA" }
    ],
    gravidade: [
      "Suboclusão (ainda elimina gases) × obstrução completa",
      "Simples × estrangulada (comprometimento vascular)",
      "Alça fechada (volvo, hérnia) = alto risco de estrangulamento"
    ]
  },
  exames: [
    {
      nome: "Tomografia de abdome e pelve com contraste IV",
      pedido: "Tomografia de abdome e pelve com contraste endovenoso — suspeita de obstrução intestinal (ponto de transição, sinais de isquemia).",
      porQue: "Confirma, localiza o ponto de transição, identifica causa e sinais de estrangulamento.",
      esperar: "Alças dilatadas a montante e colabadas a jusante; sinal do redemoinho no volvo.",
      interpretacao: "Isquemia/alça fechada → cirurgia. Ponto de transição único por brida sem isquemia → conservador.",
      limitacoes: "Contraste oral não é necessário e pode piorar vômitos."
    },
    {
      nome: "Radiografia de abdome (se TC indisponível)",
      pedido: "Radiografia de abdome em pé e deitado e tórax PA em pé.",
      porQue: "Triagem rápida.",
      esperar: "Níveis hidroaéreos em degrau (delgado); cólon dilatado; 'grão de café' ou 'U invertido' no volvo de sigmoide.",
      interpretacao: "Ar livre → perfuração (cirurgia).",
      limitacoes: "Normal em parte das obstruções de delgado alto e alça fechada."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, Na, K, Cl, Mg, ureia, creatinina, gasometria venosa com lactato, CPK, amilase/lipase, TP/INR, TTPa, tipagem.",
      porQue: "Desidratação, alcalose hipoclorêmica/hipocalêmica por vômitos, sinais de isquemia.",
      esperar: "Hemoconcentração, hipocalemia, alcalose metabólica; acidose e lactato se isquemia.",
      interpretacao: "Leucocitose + lactato alto + dor contínua = suspeitar estrangulamento.",
      limitacoes: "Lactato normal não exclui isquemia."
    },
    {
      nome: "Contraste hidrossolúvel (teste diagnóstico-terapêutico)",
      pedido: "Diatrizoato de meglumina/sódio (contraste hidrossolúvel iodado) 100 mL pela SNG após descompressão; RX de abdome em 8 h e, se necessário, em 24 h.",
      porQue: "Obstrução de delgado por bridas sem sinais de estrangulamento.",
      esperar: "Contraste no cólon em até 24 h.",
      interpretacao: "Chegou ao cólon → alta probabilidade de resolução não cirúrgica. Não chegou → indicar cirurgia.",
      limitacoes: "Risco de aspiração (fechar SNG por 2–4 h com cabeceira elevada); alergia a iodo."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%) + KCl",
      linha: "l1",
      dose: "Bolus 500–1.000 mL se desidratado; manutenção + reposição das perdas da SNG (mL a mL)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Enquanto em jejum",
      monitorizacao: "Diurese ≥ 0,5 mL/kg/h, Na, K, creatinina, gasometria",
      contraindicacoes: "—",
      ajustes: "Perdas gástricas: SF 0,9% + KCl (ex.: 20 mEq/L) ajustado ao K sérico. Corrigir Mg"
    },
    {
      droga: "Sonda nasogástrica",
      linha: "l1",
      dose: "16–18 Fr, aberta em frasco",
      via: "Nasal",
      intervalo: "Medir débito 6/6 h",
      duracao: "Até redução do débito e retorno de gases",
      monitorizacao: "Posição (RX ou ausculta + aspirado), débito, lesão nasal",
      contraindicacoes: "Trauma de face/base de crânio (usar via oral); varizes de esôfago (relativa)",
      ajustes: "Medida: ponta do nariz → lóbulo da orelha → apêndice xifoide (marcar). Lubrificar, cabeça fletida, pedir para engolir. Fixar no nariz sem pressionar a asa nasal"
    },
    {
      droga: "Diatrizoato de meglumina e sódio (contraste hidrossolúvel)",
      linha: "adj",
      dose: "100 mL",
      via: "Pela SNG (ou VO)",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "RX em 8–24 h",
      contraindicacoes: "Sinais de estrangulamento, alergia grave a contraste iodado",
      ajustes: "Também pode reduzir o tempo de internação (efeito osmótico)"
    },
    {
      droga: "Neostigmina (pseudo-obstrução de Ogilvie)",
      linha: "alt",
      dose: "2 mg",
      via: "IV lento em 3–5 min",
      intervalo: "Pode repetir 1 vez se resposta incompleta",
      duracao: "—",
      monitorizacao: "Monitor cardíaco contínuo; atropina 0,5–1 mg à beira-leito (bradicardia)",
      contraindicacoes: "Obstrução mecânica, perfuração, bradicardia, broncoespasmo grave",
      ajustes: "Só após TC excluir obstrução mecânica e falha de medidas conservadoras (corrigir eletrólitos, suspender opioides, deambular). Alternativa: descompressão colonoscópica"
    },
    {
      droga: "Distorção endoscópica do volvo de sigmoide",
      linha: "l1",
      dose: "Retossigmoidoscopia flexível/colonoscopia com sonda retal deixada",
      via: "Endoscópica",
      intervalo: "—",
      duracao: "Urgente",
      monitorizacao: "Mucosa isquêmica na endoscopia → cirurgia",
      contraindicacoes: "Peritonite, perfuração, isquemia/necrose",
      ajustes: "Recidiva alta: sigmoidectomia eletiva na mesma internação (ASCRS 2021)"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "4–8 mg",
      via: "IV",
      intervalo: "8/8 h SN",
      duracao: "—",
      monitorizacao: "QT",
      contraindicacoes: "QT longo",
      ajustes: "Metoclopramida: não usar na obstrução mecânica"
    }
  ],
  destino: {
    agora: [
      "Jejum, SNG, hidratação, analgesia, TC e cirurgia geral"
    ],
    reavaliar: [
      "Exame abdominal e débito da SNG a cada 4–6 h",
      "Eletrólitos e lactato a cada 12–24 h"
    ],
    alta: [
      "Suboclusão resolvida: eliminando gases e fezes, tolerando dieta, sem dor",
      "Encaminhar investigação ambulatorial se suspeita de neoplasia (colonoscopia)"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Todos os casos de obstrução completa ou suboclusão com vômitos/distúrbio eletrolítico"
    ],
    transferencia: [
      "Sem cirurgião/TC: transferir após hidratação e SNG"
    ]
  },
  prescricao: {
    hospitalar: "OBSTRUÇÃO INTESTINAL — ADULTO (peso ___ kg)\n1. Jejum absoluto.\n2. Sonda nasogástrica nº 16–18 aberta em frasco; medir débito de 6/6 h.\n3. Ringer lactato 1.000 mL IV agora (desidratação); depois SF 0,9% 1.000 mL + KCl 19,1% 10 mL (25 mEq) IV de 8/8 h, ajustando ao K sérico.\n4. Repor débito da SNG mL a mL com SF 0,9% a cada 6 h.\n5. Dipirona 1 g IV lento de 6/6 h.\n6. Morfina 1 mg/mL (diluída): 2–4 mg IV se dor intensa, até de 4/4 h.\n7. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n8. Omeprazol 40 mg IV 1 vez ao dia.\n9. Enoxaparina 40 mg SC 1 vez ao dia (se sem sangramento e sem cirurgia iminente).\n10. Se bridas sem sinais de estrangulamento (após avaliação do cirurgião): diatrizoato de meglumina e sódio 100 mL pela SNG; fechar SNG por 2–4 h; RX de abdome em 8 h e 24 h.\n11. Sinais vitais de 4/4 h; diurese; Na, K, Mg, creatinina diários.\n12. Avisar se febre, FC > 110, dor contínua ou piora da distensão.",
    ambulatorial: "ALTA APÓS SUBOCLUSÃO RESOLVIDA\n1. Dieta leve e fracionada por alguns dias, com boa ingestão de água.\n2. Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Evitar opioides e anticolinérgicos.\n4. Colonoscopia ambulatorial se sinais de neoplasia ou idade de rastreio."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se: cólica forte, vômitos, barriga inchada, parar de eliminar gases ou fezes, febre",
    "Quem já operou a barriga pode ter novo episódio por aderências; procurar atendimento cedo",
    "Hérnia que dói e não volta para dentro: procurar o PS no mesmo dia",
    "Retorno com o cirurgião conforme agendado (sigmoidectomia programada após volvo, investigação de tumor)"
  ],
  fontes: [
    "WSES — Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ten Broek et al., World J Emerg Surg, 2018)",
    "ASCRS — Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction (2021)",
    "WSES — Obstruction and perforation in colorectal cancer (Pisano et al., 2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
