// Trauma de extremidades: fraturas e luxações
registrarFicha({
  id: "trauma-extremidades",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  titulo: "Trauma de extremidades: fraturas e luxações",
  resumo: "Avaliação de fraturas e luxações no PS: exame neurovascular antes e depois de qualquer manobra, analgesia, alinhamento e imobilização, RX e quando chamar ortopedia ou cirurgia vascular com urgência.",
  palavrasChave: "fratura luxacao entorse tala imobilizacao gesso exame neurovascular pulso reducao ombro cotovelo punho joelho tornozelo femur tibia salter harris crianca ortopedia lesao vascular indice tornozelo braquial",
  critico: {
    tempo: "Membro sem pulso: alinhar já",
    texto: "Deformidade com pulso ausente ou membro frio: alinhar com tração suave imediatamente e reavaliar. Luxação de joelho, quadril e fratura-luxação com déficit são emergências."
  },
  alarmes: [
    "Pulso ausente ou fraco, membro frio ou pálido, hematoma em expansão, sopro/frêmito, sangramento pulsátil (sinais 'duros' de lesão vascular)",
    "Dor desproporcional, dor ao estiramento passivo, compartimento tenso (síndrome compartimental — ver ficha)",
    "Déficit motor ou sensitivo novo",
    "Fratura exposta ou ferida próxima à fratura (ver ficha fratura-exposta)",
    "Luxação de joelho (alto risco de lesão da artéria poplítea mesmo com pulso presente)",
    "Luxação de quadril (necrose de cabeça femoral: reduzir em até 6 h)",
    "Fratura de fêmur bilateral ou com choque; criança com fratura sem história compatível (maus-tratos)"
  ],
  condutaInicial: [
    "Avaliação primária primeiro (ver ficha politrauma-abcde); extremidade só ameaça a vida se sangramento grave",
    "Exame neurovascular distal (pulso, enchimento capilar, cor, temperatura, sensibilidade e motricidade) ANTES e DEPOIS de qualquer manobra; registrar",
    "Retirar anéis, relógios e roupas apertadas",
    "Analgesia precoce: dipirona/paracetamol, opioide IV; bloqueio regional (ex.: bloqueio do nervo femoral/fáscia ilíaca em fratura de fêmur)",
    "Alinhar deformidade grosseira com tração longitudinal suave e imobilizar incluindo as articulações acima e abaixo",
    "Fratura de diáfise de fêmur: tala de tração (não usar se fratura de pelve, joelho ou tornozelo associada)",
    "RX em 2 incidências (AP e perfil) incluindo as articulações proximal e distal",
    "Luxações: reduzir o mais cedo possível sob analgesia/sedação, com RX antes (excluir fratura) e depois",
    "Gelo e elevação em lesões fechadas sem comprometimento vascular"
  ],
  fataisExcluir: [
    "Hemorragia por fratura de fêmur (até 1–1,5 L por coxa) ou pelve",
    "Lesão arterial (poplítea na luxação de joelho, braquial na supracondiliana em criança)",
    "Síndrome compartimental",
    "Embolia gordurosa (hipoxemia, confusão, petéquias 24–72 h após fratura de ossos longos)",
    "Rabdomiólise por esmagamento"
  ],
  proximaDecisao: "Sinais duros de lesão vascular → cirurgia vascular imediata (não esperar exame). Sinais leves ou luxação de joelho → índice tornozelo-braquial (ITB): < 0,9 → angiotomografia. Fratura sem complicação → imobilizar e encaminhar à ortopedia conforme prazo.",
  clinica: {
    anamnese: [
      "Mecanismo, hora, posição do membro no impacto",
      "Dor, parestesias, fraqueza",
      "Mão dominante, profissão, nível funcional prévio",
      "Criança: história coerente com idade e desenvolvimento? Atraso para procurar atendimento?"
    ],
    exameFisico: [
      "Inspeção: deformidade, edema, feridas, cor",
      "Pulsos distais comparados com o lado oposto; enchimento capilar",
      "Nervos: radial (extensão do punho/polegar, dorso da 1ª comissura), mediano (pinça, polpa do indicador), ulnar (abdução dos dedos, 5º dedo), axilar (deltoide — luxação de ombro), fibular comum (dorsiflexão, dorso do pé — joelho/fíbula proximal), tibial (flexão plantar, planta)",
      "Palpar compartimentos; dor ao estiramento passivo",
      "Examinar a articulação acima e abaixo"
    ],
    diferenciais: [
      { dx: "Entorse/lesão ligamentar", pista: "Sem dor óssea à palpação; regras de Ottawa (tornozelo/joelho) negativas" },
      { dx: "Fratura oculta do escafoide", pista: "Dor na tabaqueira anatômica com RX normal: imobilizar e repetir RX/RM" },
      { dx: "Fratura de colo de fêmur (idoso)", pista: "Queda, membro encurtado e em rotação externa; RX de quadril" },
      { dx: "Fratura fisária (Salter-Harris)", pista: "Criança com dor sobre a placa de crescimento e RX normal (Salter I)" },
      { dx: "Pronação dolorosa", pista: "Criança < 5 anos, tração do braço, recusa a mover o braço, sem edema" }
    ],
    gravidade: [
      "Sinais duros de lesão vascular: pulso ausente, sangramento pulsátil, hematoma expansivo, sopro/frêmito, isquemia distal",
      "Sinais leves: pulso diminuído, déficit neurológico adjacente, hematoma estável, lesão próxima a trajeto vascular",
      "Emergências ortopédicas: fratura exposta, comprometimento vascular, síndrome compartimental, luxação de quadril e joelho, fratura-luxação com pele sob tensão"
    ]
  },
  exames: [
    {
      nome: "RX da região",
      pedido: "RX de ___ (região) em AP e perfil, incluindo as articulações proximal e distal. RX após redução/imobilização.",
      porQue: "Confirmar fratura/luxação, planejar redução e conferir resultado.",
      esperar: "—",
      interpretacao: "Descrever: osso, local, traço, desvio, angulação, encurtamento, articular ou não, exposta ou não.",
      limitacoes: "Fraturas ocultas (escafoide, colo de fêmur, fisárias); comparar com lado contralateral em criança só se dúvida."
    },
    {
      nome: "Índice tornozelo-braquial (ITB)",
      pedido: "Índice tornozelo-braquial com Doppler no membro lesado (após redução).",
      porQue: "Rastrear lesão arterial em luxação de joelho e sinais leves.",
      esperar: "Imediato à beira-leito.",
      interpretacao: "ITB ≥ 0,9 com pulsos normais: observar com exames seriados. < 0,9: angiotomografia e cirurgia vascular.",
      limitacoes: "Não substitui a avaliação vascular com sinais duros."
    },
    {
      nome: "Angiotomografia do membro",
      pedido: "Angiotomografia de membro ___ (suspeita de lesão arterial, ITB < 0,9).",
      porQue: "Localizar a lesão arterial.",
      esperar: "—",
      interpretacao: "Oclusão, extravasamento ou dissecção → cirurgia vascular.",
      limitacoes: "Não atrasar cirurgia com sinais duros e isquemia evidente."
    },
    {
      nome: "Laboratório (trauma grave / esmagamento)",
      pedido: "Hemograma, CK, ureia, creatinina, potássio, urina tipo 1 (mioglobinúria — sangue na fita sem hemácias). Tipagem se fratura de fêmur/pelve.",
      porQue: "Rabdomiólise e perda sanguínea.",
      esperar: "—",
      interpretacao: "CK > 5.000 U/L com risco de lesão renal → hidratação vigorosa (meta de diurese 200–300 mL/h no adulto).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Dipirona 500 mg/mL (ou paracetamol)",
      linha: "l1",
      dose: "Adulto: 1 g · Criança: 15 mg/kg (máx 1 g)",
      via: "IV ou VO",
      intervalo: "6/6 h",
      duracao: "Enquanto houver dor",
      monitorizacao: "PA",
      contraindicacoes: "Alergia",
      ajustes: "Paracetamol: adulto 750 mg–1 g VO de 6/6 h (máx 4 g/dia); criança 15 mg/kg/dose (máx 75 mg/kg/dia)"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "Adulto: 2–4 mg (0,05–0,1 mg/kg) · Criança: 0,05–0,1 mg/kg (máx 4 mg/dose)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle",
      duracao: "Fase aguda",
      monitorizacao: "FR, SpO₂, sedação",
      contraindicacoes: "Depressão respiratória",
      ajustes: "Alternativa: fentanil 1 mcg/kg IV ou intranasal 1,5 mcg/kg (criança; máx 100 mcg)"
    },
    {
      droga: "Ibuprofeno",
      linha: "adj",
      dose: "Adulto: 400–600 mg · Criança: 10 mg/kg (máx 400 mg/dose)",
      via: "VO",
      intervalo: "8/8 h (criança 6/6 a 8/8 h)",
      duracao: "3–5 dias",
      monitorizacao: "—",
      contraindicacoes: "Sangramento ativo, DRC, úlcera, gestação no 3º trimestre, uso de anticoagulante",
      ajustes: "Uso curto não parece prejudicar consolidação de forma relevante; evitar em idosos e nefropatas"
    },
    {
      droga: "Bloqueio da fáscia ilíaca / nervo femoral (fratura de fêmur e quadril)",
      linha: "adj",
      dose: "Anestésico local conforme protocolo (ex.: ropivacaína ou bupivacaína), respeitando dose máxima por kg",
      via: "Perineural guiado por US",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Sinais de toxicidade por anestésico local",
      contraindicacoes: "Infecção local, coagulopatia grave (relativa)",
      ajustes: "Reduz opioide e delirium em idosos"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "adj",
      dose: "Adulto: 40 mg",
      via: "SC",
      intervalo: "1 vez ao dia",
      duracao: "Durante imobilização de membro inferior com risco aumentado, conforme ortopedia",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo",
      ajustes: "ClCr < 30: 20 mg/dia. Não indicada de rotina em criança"
    }
  ],
  destino: {
    agora: [
      "Sinais duros de lesão vascular, fratura exposta, síndrome compartimental, luxação irredutível: ortopedia/cirurgia vascular imediata"
    ],
    reavaliar: [
      "Exame neurovascular após cada manobra e a cada 1–2 h nas lesões de risco",
      "Dor crescente sob a tala: abrir a tala e examinar"
    ],
    alta: [
      "Fratura fechada estável, sem déficit, bem imobilizada, dor controlada, com retorno à ortopedia agendado (em geral 5–7 dias)"
    ],
    observacao: [
      "Luxação de joelho reduzida com ITB normal: exame vascular seriado por 24 h"
    ],
    internacao: [
      "Fratura de fêmur, pelve, tíbia com risco compartimental, fratura cirúrgica, idoso com fratura de quadril, esmagamento"
    ],
    transferencia: [
      "Sem ortopedia ou cirurgia vascular: transferir imobilizado, com analgesia e exame neurovascular documentado"
    ]
  },
  prescricao: {
    hospitalar: "FRATURA DE OSSO LONGO — PS (adulto; peso: ___ kg)\n1. Dieta zero se possível cirurgia; senão, dieta livre.\n2. Membro imobilizado em tala e elevado (acima do coração, exceto se suspeita de síndrome compartimental — manter no nível do coração).\n3. Gelo local por 20 min de 2/2 h nas primeiras 48 h (proteger a pele).\n4. Dipirona 1 g (2 mL) + SF 0,9% 18 mL IV de 6/6 h.\n5. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV de 4/4 h se dor intensa.\n6. Ondansetrona 4 mg IV de 8/8 h se náusea.\n7. Enoxaparina 40 mg SC 1 vez ao dia se fratura de membro inferior com internação (conforme ortopedia).\n8. Controles: exame neurovascular distal (pulso, perfusão, sensibilidade, motricidade, dor ao estiramento passivo) de 2/2 h; avisar se piora.\n\nCRIANÇA (peso: ___ kg): dipirona 15 mg/kg IV (máx 1 g) de 6/6 h; morfina 0,05–0,1 mg/kg IV (máx 4 mg) de 4/4 h se dor intensa; fentanil intranasal 1,5 mcg/kg (máx 100 mcg) se sem acesso.",
    ambulatorial: "USO ORAL\n1. Dipirona 500 mg ----------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor (criança: 15 mg/kg/dose).\n2. Ibuprofeno 600 mg --------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias (criança: 10 mg/kg/dose de 8/8 h, máx 400 mg).\n3. Paracetamol 750 mg -------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se a dor persistir apesar da dipirona (máx 4 por dia).\n\nCUIDADOS\nManter a tala/gesso seco; membro elevado; gelo por cima da tala 20 minutos 4 vezes ao dia nos primeiros 2 dias."
  },
  orientacoesRetorno: [
    "Manter o membro elevado acima do coração nas primeiras 48–72 h e mexer os dedos várias vezes ao dia",
    "Não molhar, não cortar e não colocar objetos dentro da tala ou do gesso",
    "Voltar imediatamente se: dor que aumenta muito ou não melhora com o remédio, dedos frios, roxos, pálidos, dormentes ou que não se mexem, inchaço muito grande, gesso apertado, ferida ou cheiro ruim sob o gesso",
    "Voltar se dor e inchaço na panturrilha ou falta de ar",
    "Comparecer à consulta de ortopedia na data marcada (em geral em 5–7 dias)"
  ],
  tabelas: [
    {
      titulo: "Quando chamar a ortopedia",
      colunas: ["Prazo", "Situação"],
      linhas: [
        ["Imediato", "Fratura exposta, comprometimento vascular, síndrome compartimental, luxação de quadril/joelho, luxação irredutível, fratura-luxação com pele sob tensão, déficit neurológico novo"],
        ["Mesmo dia / internação", "Fratura de fêmur, fratura instável ou com desvio que precisa de redução, fratura articular com degrau, fratura de quadril no idoso, supracondiliana desviada em criança"],
        ["Ambulatório em 5–7 dias", "Fratura estável sem desvio imobilizada, suspeita de escafoide com RX normal, fratura fisária Salter I"]
      ]
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025), capítulo de trauma musculoesquelético",
    "EAST — Evaluation and management of penetrating lower extremity arterial trauma (2012)",
    "American Academy of Orthopaedic Surgeons (AAOS) — Clinical Practice Guidelines (fraturas de quadril 2021; supracondiliana pediátrica 2011)",
    "NICE NG38 — Fractures (non-complex): assessment and management (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
