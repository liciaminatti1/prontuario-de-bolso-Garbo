// Trauma abdominal fechado e penetrante
registrarFicha({
  id: "trauma-abdominal",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
  titulo: "Trauma abdominal fechado e penetrante",
  resumo: "Avaliação do abdome no traumatizado: FAST, TC e exame seriado; indicações de laparotomia e de tratamento não operatório de vísceras sólidas.",
  palavrasChave: "trauma abdominal fechado penetrante fast tc laparotomia baco figado lesao de viscera oca evisceracao arma branca arma de fogo marca do cinto exame seriado lavado peritoneal hemoperitonio",
  critico: {
    tempo: "Instável + FAST positivo: laparotomia",
    texto: "Instabilidade hemodinâmica com FAST positivo (ou sem outra fonte) leva ao centro cirúrgico, não à tomografia. Penetrante com choque, peritonite ou evisceração: laparotomia."
  },
  alarmes: [
    "Hipotensão ou resposta transitória ao volume",
    "Peritonite (defesa, descompressão dolorosa difusa)",
    "Evisceração, objeto empalado",
    "Ferimento por arma de fogo que atravessa o abdome",
    "Sangue em sonda gástrica, no toque retal ou na urina (penetrante)",
    "Marca do cinto de segurança (lesão de víscera oca, pâncreas, coluna lombar — fratura de Chance)",
    "Gestante (útero pode esconder sinais; avaliar também o feto)"
  ],
  condutaInicial: [
    "xABCDE, 2 acessos, sangue precoce, ácido tranexâmico até 3 h (ver fichas politrauma-abcde e choque-hemorragico)",
    "FAST na avaliação primária; repetir se piora",
    "Instável + FAST positivo → laparotomia (ou transferência imediata)",
    "Estável → TC de abdome e pelve com contraste IV",
    "Objeto empalado: não retirar; fixar e retirar só no centro cirúrgico",
    "Evisceração: cobrir com compressa úmida com SF 0,9% estéril; não reintroduzir",
    "Arma branca na parede anterior, estável e sem peritonite: exame seriado, TC ou exploração local da ferida pelo cirurgião",
    "Sonda gástrica (descompressão) e vesical (se sem sinais de lesão uretral)",
    "Antibiótico profilático se penetrante com suspeita de lesão de víscera oca ou laparotomia (dose única pré-operatória)",
    "Profilaxia de tétano em ferimento penetrante (ficha tetano-profilaxia)"
  ],
  fataisExcluir: [
    "Hemoperitônio por lesão de baço ou fígado",
    "Lesão de víscera oca com peritonite tardia",
    "Lesão de grandes vasos e retroperitônio",
    "Lesão de diafragma (ferimentos toracoabdominais)",
    "Descolamento de placenta e trauma fetal na gestante"
  ],
  proximaDecisao: "Indicação de laparotomia (ver gravidade) → centro cirúrgico. Estável com lesão de víscera sólida na TC, sem peritonite → tratamento não operatório em serviço com cirurgião, UTI, banco de sangue e angioembolização. Exame normal com mecanismo de risco → observação com exame seriado.",
  clinica: {
    anamnese: [
      "Fechado: velocidade, cinto (abdominal ou de 3 pontos), guidão de bicicleta/moto, airbag, esmagamento",
      "Penetrante: tipo de arma, comprimento da lâmina, número de disparos, distância",
      "Dor abdominal, dor no ombro (sinal de Kehr — irritação diafragmática por sangue)",
      "Gestação, anticoagulante, intoxicação (exame não confiável)"
    ],
    exameFisico: [
      "Inspeção: equimoses, marca do cinto, distensão, orifícios de entrada e saída (incluir dorso, flancos, nádegas, períneo e axilas)",
      "Palpação: dor, defesa, descompressão dolorosa",
      "Estabilidade pélvica (uma única vez)",
      "Toque retal e vaginal em penetrante ou fratura pélvica (sangue, espícula óssea)",
      "Meato uretral, períneo e escroto (ver ficha trauma-genitourinario)"
    ],
    diferenciais: [
      { dx: "Lesão de baço", pista: "Dor no hipocôndrio esquerdo, fraturas de costelas baixas à esquerda, sinal de Kehr" },
      { dx: "Lesão de fígado", pista: "Dor no hipocôndrio direito, fraturas de costelas baixas à direita" },
      { dx: "Lesão de víscera oca", pista: "Marca do cinto, dor progressiva, febre e peritonite tardias, líquido livre sem lesão sólida na TC" },
      { dx: "Lesão de pâncreas/duodeno", pista: "Trauma epigástrico (guidão), amilase/lipase em elevação, dor nas costas" },
      { dx: "Hematoma retroperitoneal", pista: "Choque com FAST negativo, fratura de pelve, equimose de flanco" }
    ],
    gravidade: [
      "Indicações de laparotomia (ATLS): trauma fechado com hipotensão e FAST positivo ou evidência de sangramento intraperitoneal",
      "Hipotensão com ferimento abdominal penetrante",
      "Ferimento por arma de fogo que atravessa a cavidade peritoneal ou o retroperitônio",
      "Evisceração; peritonite",
      "Sangramento do estômago, reto ou trato geniturinário após trauma penetrante",
      "Pneumoperitônio, ar retroperitoneal ou ruptura de diafragma",
      "TC com lesão de trato gastrointestinal, lesão intraperitoneal de bexiga, lesão do pedículo renal ou lesão grave de víscera com instabilidade"
    ]
  },
  exames: [
    {
      nome: "FAST",
      pedido: "FAST: pericárdio, espaço hepatorrenal (Morison), esplenorrenal e pelve (fundo de saco).",
      porQue: "Detecção rápida de hemoperitônio no instável.",
      esperar: "Imediato; repetir em 15–30 min ou se piora.",
      interpretacao: "Positivo + instável → laparotomia. Negativo + instável → procurar outra fonte (tórax, pelve, retroperitônio, externa) e repetir.",
      limitacoes: "Não detecta lesão de víscera oca, pâncreas, diafragma e retroperitônio; volumes pequenos podem passar."
    },
    {
      nome: "TC de abdome e pelve",
      pedido: "TC de abdome e pelve com contraste IV (fase arterial e portal; fase tardia/excretora se hematúria).",
      porQue: "Graduar lesões sólidas, detectar sangramento ativo (blush), lesão de víscera oca e retroperitônio no estável.",
      esperar: "—",
      interpretacao: "Blush arterial → angioembolização ou cirurgia. Líquido livre sem lesão sólida em homem → suspeitar de víscera oca.",
      limitacoes: "Só com o paciente estável. Sensibilidade limitada para víscera oca e diafragma nas primeiras horas."
    },
    {
      nome: "Laboratório",
      pedido: "Tipagem e prova cruzada, hemograma, coagulograma, gasometria com lactato, amilase, lipase, TGO, TGP, ureia, creatinina, urina tipo 1 (hematúria), beta-hCG.",
      porQue: "Preparar transfusão, detectar lesão hepática/pancreática e hematúria.",
      esperar: "Hb seriada a cada 6 h no tratamento não operatório.",
      interpretacao: "Queda de Hb com estabilidade → reavaliar com TC; com instabilidade → cirurgia.",
      limitacoes: "Amilase normal na admissão não exclui lesão pancreática."
    },
    {
      nome: "Lavado peritoneal diagnóstico (DPL)",
      pedido: "Aspirado/lavado peritoneal diagnóstico (pelo cirurgião), se FAST indisponível ou duvidoso no instável.",
      porQue: "Alternativa ao FAST.",
      esperar: "—",
      interpretacao: "Aspirado de sangue ≥ 10 mL ou conteúdo intestinal = positivo.",
      limitacoes: "Invasivo; contraindicação absoluta: indicação já clara de laparotomia."
    }
  ],
  tratamento: [
    {
      droga: "Cefazolina + metronidazol (ou cefoxitina)",
      linha: "l1",
      dose: "Cefazolina 2 g (3 g se ≥ 120 kg) + metronidazol 500 mg · ou cefoxitina 2 g",
      via: "IV",
      intervalo: "Dose única antes da incisão; repetir no intraoperatório conforme duração/sangramento",
      duracao: "Até 24 h; não prolongar mesmo com lesão de víscera oca reparada (EAST)",
      monitorizacao: "—",
      contraindicacoes: "Alergia grave a beta-lactâmico: clindamicina 900 mg + gentamicina 5 mg/kg IV",
      ajustes: "Penetrante com suspeita de lesão de víscera oca"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle",
      duracao: "Conforme dor",
      monitorizacao: "FR, sedação, PA",
      contraindicacoes: "Hipotensão não corrigida",
      ajustes: "Analgesia não mascara o diagnóstico; não deixar o paciente com dor durante a avaliação"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "1 g em 10 min + 1 g em 8 h",
      via: "IV",
      intervalo: "—",
      duracao: "8 h",
      monitorizacao: "—",
      contraindicacoes: "> 3 h do trauma",
      ajustes: "Ver ficha choque-hemorragico"
    }
  ],
  destino: {
    agora: [
      "Laparotomia se indicação",
      "Tratamento não operatório só onde houver cirurgião presente, UTI, banco de sangue e TC"
    ],
    reavaliar: [
      "Exame abdominal seriado pelo mesmo examinador a cada 4–6 h",
      "Hb a cada 6 h, sinais vitais horários no tratamento não operatório"
    ],
    alta: [
      "Mecanismo de baixa energia, exame normal (ou TC normal), sem dor significativa, tolerando dieta, com orientações"
    ],
    observacao: [
      "Fechado com mecanismo de risco e TC normal ou marca do cinto: 12–24 h com exame seriado",
      "Arma branca em parede anterior, estável, sem peritonite: 24 h com exame seriado (conforme cirurgião)"
    ],
    internacao: [
      "Lesão de víscera sólida (UTI se grau alto), lesão penetrante, necessidade de transfusão"
    ],
    transferencia: [
      "Sem cirurgia de urgência: transferir; instável sem cirurgião → transferência imediata com sangue e ácido tranexâmico"
    ]
  },
  prescricao: {
    hospitalar: "TRAUMA ABDOMINAL — OBSERVAÇÃO / TRATAMENTO NÃO OPERATÓRIO (adulto; peso: ___ kg)\n1. Dieta zero (liberar líquidos após 24 h estável, conforme cirurgião).\n2. Repouso no leito.\n3. Ringer lactato 1.000 mL IV de 8/8 h (manutenção; ajustar conforme diurese).\n4. Dipirona 1 g (2 mL) + SF 0,9% 18 mL IV de 6/6 h.\n5. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–3 mL IV de 4/4 h se dor intensa (avisar o cirurgião se dor progressiva).\n6. Ondansetrona 4 mg IV de 8/8 h se náusea.\n7. Omeprazol 40 mg IV 1 vez ao dia.\n8. Profilaxia de TEV: compressão pneumática; enoxaparina 40 mg SC 1 vez ao dia quando liberada pelo cirurgião (em geral após 24–48 h de Hb estável).\n9. Profilaxia de tétano conforme cartão vacinal.\n10. Controles: sinais vitais de 1/1 h nas primeiras 6 h e depois de 2/2 h; exame abdominal pelo cirurgião de 4/4 h a 6/6 h; Hb de 6/6 h nas primeiras 24 h; diurese.\n11. Manter tipagem e reserva de 2 unidades de concentrado de hemácias.\n\nPRÉ-OPERATÓRIO (penetrante): cefazolina 2 g IV + metronidazol 500 mg IV dose única antes da incisão."
  },
  orientacoesRetorno: [
    "Lesões de baço e fígado podem sangrar dias depois: evitar esforço, esportes de contato e levantar peso por 4–8 semanas, ou conforme orientação do cirurgião",
    "Voltar imediatamente se: dor abdominal que piora, barriga inchada, vômitos, febre, tontura ou desmaio, dor no ombro esquerdo, fezes pretas ou com sangue, urina com sangue",
    "Ferimento: manter limpo e seco; trocar curativo conforme orientado",
    "Retorno no ambulatório de cirurgia na data marcada"
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "EAST — Nonoperative management of blunt splenic injury (2012) e blunt hepatic injury (2012)",
    "EAST — Selective nonoperative management of penetrating abdominal trauma (2010)",
    "EAST — Prophylactic antibiotics in penetrating abdominal trauma (2012)",
    "WSES — Splenic trauma (2017) e Liver trauma (2020) guidelines"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
