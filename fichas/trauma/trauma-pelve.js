// Fratura de pelve instável
registrarFicha({
  id: "trauma-pelve",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
  titulo: "Fratura de pelve instável e cinta pélvica",
  resumo: "Trauma de alta energia com fratura do anel pélvico e risco de hemorragia retroperitoneal maciça: cinta pélvica, transfusão e controle do sangramento (fixação, angioembolização, tamponamento pré-peritoneal).",
  palavrasChave: "fratura de pelve bacia instavel cinta pelvica lencol livro aberto open book young burgess angioembolizacao tamponamento pre peritoneal fixador externo hemorragia retroperitoneal uretra",
  critico: {
    tempo: "Cinta pélvica no choque",
    texto: "Trauma de alta energia com choque e suspeita de fratura de pelve: cinta pélvica centrada nos trocânteres maiores, sangue 1:1:1 e ácido tranexâmico. Não manipular a pelve repetidamente."
  },
  alarmes: [
    "Choque com FAST negativo (pensar em retroperitônio/pelve)",
    "Dor pélvica, assimetria de membros inferiores, rotação externa de um membro sem fratura de fêmur",
    "Equimose perineal, escrotal ou em flancos",
    "Sangue no meato uretral, hematoma perineal, próstata alta (lesão de uretra)",
    "Sangue no toque retal ou vaginal (fratura exposta da pelve — alta mortalidade)",
    "Idoso com queda e anticoagulante (sangramento mesmo com fratura 'simples')"
  ],
  condutaInicial: [
    "xABCDE; 2 acessos acima do diafragma (membros superiores); sangue precoce (ver ficha choque-hemorragico)",
    "RX de pelve AP na sala de trauma",
    "Cinta pélvica (comercial ou lençol) centrada nos trocânteres maiores (não na crista ilíaca); rodar internamente e aproximar os pés/joelhos",
    "Ácido tranexâmico 1 g IV em 10 min (até 3 h) + 1 g em 8 h",
    "Não passar sonda vesical se sinais de lesão uretral; uretrografia ou cistostomia",
    "Instável: controle do sangramento conforme recursos (fixador externo, tamponamento pré-peritoneal, angioembolização, REBOA) — se FAST positivo, laparotomia primeiro",
    "Sem esses recursos: transferência imediata com a cinta"
  ],
  fataisExcluir: [
    "Hemorragia retroperitoneal (plexo venoso sacral, artérias ilíacas internas)",
    "Hemorragia intra-abdominal associada",
    "Lesão de uretra, bexiga, reto ou vagina (fratura exposta)",
    "Lesão de plexo lombossacro"
  ],
  proximaDecisao: "Instável + FAST positivo → laparotomia com tamponamento pré-peritoneal/fixação. Instável + FAST negativo → angioembolização ou tamponamento pré-peritoneal + fixação externa. Estável → TC com contraste; blush arterial → angioembolização.",
  clinica: {
    anamnese: [
      "Mecanismo: atropelamento, moto, queda de altura, esmagamento, impacto lateral em carro",
      "Dor no quadril/região inguinal/sacral, incapacidade de deambular",
      "Disúria, hematúria, incapacidade de urinar",
      "Anticoagulantes, osteoporose"
    ],
    exameFisico: [
      "Inspeção: equimoses, discrepância de comprimento, rotação de membro",
      "Palpação suave das cristas e sínfise uma única vez (compressão lateral leve) — não fazer abertura/compressão repetida",
      "Meato uretral, períneo, escroto; toque retal (sangue, próstata alta) e vaginal (laceração)",
      "Exame neurovascular dos membros inferiores"
    ],
    diferenciais: [
      { dx: "Fratura de colo de fêmur / acetábulo", pista: "Dor no quadril, membro encurtado e rodado; anel pélvico íntegro" },
      { dx: "Fratura isolada de ramo púbico (idoso)", pista: "Queda da própria altura, estável, sem choque" },
      { dx: "Hemoperitônio", pista: "FAST positivo" },
      { dx: "Lesão de uretra/bexiga", pista: "Sangue no meato, hematúria, globo vesical" }
    ],
    gravidade: [
      "Young-Burgess: compressão anteroposterior (APC, 'livro aberto' — maior volume e sangramento), compressão lateral (LC — mais comum), cisalhamento vertical (VS — muito instável), mecanismo combinado",
      "Fratura instável = anel rompido em dois pontos ou disjunção sacroilíaca",
      "Fratura exposta de pelve (comunicação com reto, vagina ou pele) = mortalidade muito alta"
    ]
  },
  exames: [
    {
      nome: "RX de pelve AP",
      pedido: "RX de bacia AP no leito da sala de trauma.",
      porQue: "Identificar rapidamente fratura do anel pélvico no paciente instável.",
      esperar: "Imediato.",
      interpretacao: "Alargamento da sínfise > 2,5 cm, disjunção sacroilíaca ou deslocamento vertical = instável.",
      limitacoes: "Com a cinta já colocada, fraturas podem parecer reduzidas. Dispensável se estável e vai fazer TC."
    },
    {
      nome: "TC de abdome e pelve com contraste",
      pedido: "Angiotomografia de abdome e pelve (fases arterial e portal; fase excretora/cistografia por TC se hematúria).",
      porQue: "Classificar a fratura, mostrar sangramento arterial (blush) e lesões associadas no paciente estável.",
      esperar: "—",
      interpretacao: "Blush arterial → angioembolização.",
      limitacoes: "Só se estável."
    },
    {
      nome: "Uretrocistografia retrógrada",
      pedido: "Uretrografia retrógrada (antes de sondagem vesical) — sangue no meato/hematoma perineal.",
      porQue: "Excluir lesão de uretra antes de passar sonda.",
      esperar: "—",
      interpretacao: "Extravasamento → não sondar; cistostomia suprapúbica pela urologia/cirurgia.",
      limitacoes: "Não atrasar reanimação; em instável, cistostomia/urologia decide."
    },
    {
      nome: "Laboratório",
      pedido: "Tipagem e prova cruzada, hemograma, coagulograma, fibrinogênio, gasometria com lactato, cálcio iônico, urina tipo 1.",
      porQue: "Guiar transfusão e detectar hematúria.",
      esperar: "Repetir a cada 30–60 min durante a reanimação.",
      interpretacao: "Ver ficha choque-hemorragico.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cinta pélvica (comercial ou lençol)",
      linha: "l1",
      dose: "Centrada nos trocânteres maiores; tração até fechar o anel, sem hipercorreção",
      via: "Externa",
      intervalo: "Manter até estabilização definitiva",
      duracao: "Idealmente < 24 h (risco de lesão de pele); inspecionar a pele",
      monitorizacao: "PA, FC, pulsos distais, pele sob a cinta",
      contraindicacoes: "Cautela em fratura por compressão lateral (pode deslocar) — ainda assim usar no choque",
      ajustes: "Lençol: dobrar, passar sob os trocânteres, cruzar na frente e fixar com pinças. Fazer recortes para acesso femoral e inguinal se angiografia"
    },
    {
      droga: "Hemocomponentes 1:1:1 + ácido tranexâmico",
      linha: "l1",
      dose: "Ver ficha choque-hemorragico",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ativar transfusão maciça cedo"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle",
      duracao: "Conforme dor",
      monitorizacao: "FR, PA, sedação",
      contraindicacoes: "Hipotensão não corrigida (preferir fentanil 25–50 mcg ou cetamina 0,1–0,3 mg/kg)",
      ajustes: "—"
    },
    {
      droga: "Antibiótico (fratura exposta de pelve)",
      linha: "adj",
      dose: "Cefazolina 2 g + metronidazol 500 mg (comunicação com reto/períneo)",
      via: "IV",
      intervalo: "Cefazolina 8/8 h; metronidazol 8/8 h",
      duracao: "Conforme cirurgião",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Fratura exposta de pelve com lesão retal costuma precisar de colostomia de desvio"
    }
  ],
  destino: {
    agora: [
      "Cinta, sangue e controle do sangramento (ortopedia, cirurgia, radiologia intervencionista)"
    ],
    reavaliar: [
      "Sinais vitais de 5–15 min; Hb e lactato seriados",
      "Pulsos e pele sob a cinta"
    ],
    alta: [
      "Fratura estável isolada de ramo púbico em paciente que deambula com auxílio, dor controlada e suporte em casa"
    ],
    observacao: ["—"],
    internacao: [
      "Toda fratura do anel pélvico instável (UTI se choque); idoso com fratura estável mas sem condição de deambular"
    ],
    transferencia: [
      "Sem ortopedia, cirurgia, banco de sangue e angiografia: transferência imediata com cinta, sangue em curso e ácido tranexâmico"
    ]
  },
  prescricao: {
    hospitalar: "FRATURA DE PELVE INSTÁVEL — SALA DE EMERGÊNCIA (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Cinta pélvica centrada nos trocânteres maiores; membros inferiores em rotação interna, joelhos e tornozelos unidos e acolchoados. Anotar horário de colocação.\n3. Monitor, oximetria, PA de 5/5 min; O₂ para SpO₂ ≥ 94%.\n4. 2 acessos 14–16 G em membros superiores.\n5. Ativar protocolo de transfusão maciça: concentrado de hemácias + plasma + plaquetas 1:1:1, aquecidos.\n6. Ácido tranexâmico 1 g + SF 0,9% 100 mL IV em 10 min (até 3 h do trauma); depois 1 g + SF 0,9% 500 mL IV a 62 mL/h.\n7. Fentanil 50 mcg/mL: 25–50 mcg IV a cada 5 min se dor (até controle), ou morfina 2–4 mg IV se PA estável.\n8. NÃO passar sonda vesical se sangue no meato, hematoma perineal ou próstata alta; avisar urologia.\n9. Manta térmica.\n10. Controles: sinais vitais de 5/5 min até estabilizar; gasometria com lactato, Hb, coagulograma e cálcio iônico de 30/30 min a 1/1 h; pulsos pediosos de 1/1 h; inspeção da pele sob a cinta."
  },
  orientacoesRetorno: [
    "Fratura estável de ramo púbico (idoso): caminhar com andador conforme a dor, analgésico em horários fixos, fisioterapia",
    "Voltar imediatamente se: tontura, desmaio, dor que piora muito, inchaço ou dor na panturrilha, falta de ar, urina com sangue ou dificuldade para urinar",
    "Retorno com ortopedia em 1–2 semanas"
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "WSES-AAST — Pelvic trauma: WSES classification and guidelines (World J Emerg Surg, 2017)",
    "EAST — Management of hemorrhage in pelvic fracture (2011)",
    "Rossaint R et al. — European guideline on management of major bleeding following trauma (Crit Care, 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
