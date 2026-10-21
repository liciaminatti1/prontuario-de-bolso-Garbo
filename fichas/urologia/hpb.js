// Hiperplasia prostática benigna e sintomas do trato urinário inferior
registrarFicha({
  id: "hpb",
  especialidade: "urologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Hiperplasia prostática benigna e investigação de sintomas urinários (IPSS, PSA)",
  resumo: "Homem, em geral > 50 anos, com sintomas do trato urinário inferior (LUTS): jato fraco, hesitação, esvaziamento incompleto, noctúria, urgência e polaciúria. Avaliar com IPSS, exame de urina, toque retal e, em decisão compartilhada, PSA. Tratar conforme incômodo: medidas comportamentais, alfabloqueador, inibidor da 5-alfa-redutase.",
  palavrasChave: "hpb hiperplasia prostatica benigna prostata aumentada luts sintomas urinarios ipss jato fraco noctúria nocturia retencao urinaria psa toque retal doxazosina tansulosina finasterida dutasterida tadalafila oxibutinina mirabegrona rastreamento cancer de prostata",
  critico: {
    tempo: "Retenção, hematúria, toque suspeito",
    texto: "Retenção urinária, hematúria, ITU recorrente, creatinina subindo com hidronefrose ou toque retal endurecido/nodular mudam a conduta: encaminhar. Sem esses sinais, tratar pelo incômodo (IPSS)."
  },
  alarmes: [
    "Retenção urinária aguda (dor suprapúbica, globo vesical, incapacidade de urinar) — sondagem de alívio e urologia",
    "Hematúria macroscópica ou microscópica persistente (investigar câncer de bexiga e rim)",
    "Toque retal com nódulo, endurecimento ou assimetria; PSA elevado para a idade ou subindo",
    "ITU de repetição, cálculo vesical",
    "Hidronefrose ou piora de função renal (obstrução crônica)",
    "Sintomas neurológicos (lesão medular, Parkinson, esclerose múltipla, diabetes com neuropatia) — bexiga neurogênica",
    "Incontinência por transbordamento (gotejamento contínuo com bexiga cheia)"
  ],
  condutaInicial: [
    "Aplicar o IPSS (7 perguntas, 0–35 pontos) e a pergunta de qualidade de vida",
    "Revisar fármacos que pioram LUTS: anti-histamínicos de 1ª geração, descongestionantes, anticolinérgicos, antidepressivos tricíclicos, opioides, diuréticos à noite",
    "Exame de urina (excluir infecção e hematúria); creatinina se suspeita de comprometimento renal; glicemia se poliúria",
    "Toque retal (tamanho, consistência, nódulos) e palpação suprapúbica (resíduo)",
    "Diário miccional de 3 dias se noctúria ou polaciúria predominante (poliúria noturna?)",
    "PSA: decisão compartilhada, se o resultado mudar a conduta e expectativa de vida > 10 anos"
  ],
  fataisExcluir: [
    "Câncer de próstata",
    "Câncer de bexiga (hematúria, sintomas irritativos em tabagista)",
    "Retenção crônica com insuficiência renal obstrutiva",
    "Compressão medular / síndrome da cauda equina (retenção + déficit neurológico + anestesia em sela)"
  ],
  proximaDecisao: "IPSS 0–7 ou pouco incômodo → orientação e acompanhamento. IPSS ≥ 8 com incômodo → alfabloqueador; próstata aumentada (> 30–40 mL ou PSA > 1,5 ng/mL) e risco de progressão → associar finasterida. Predomínio de urgência sem resíduo elevado → considerar antimuscarínico ou mirabegrona. Falha, complicações ou dúvida diagnóstica → urologia.",
  clinica: {
    anamnese: [
      "Esvaziamento: jato fraco, hesitação, intermitência, esforço, sensação de esvaziamento incompleto, gotejamento",
      "Armazenamento: urgência, polaciúria, noctúria (quantas vezes), urge-incontinência",
      "Tempo de evolução, impacto na vida, expectativa do paciente",
      "Hematúria, disúria, febre, dor óssea, perda de peso",
      "Ingestão de líquidos, café, álcool; volume urinário noturno",
      "Diabetes, ICC, apneia do sono (poliúria noturna), doenças neurológicas, cirurgias pélvicas, uretrite prévia (estenose)",
      "História familiar de câncer de próstata; raça negra (maior risco)",
      "Função sexual (escolha do fármaco)"
    ],
    exameFisico: [
      "Abdome: globo vesical",
      "Genitália: meato (estenose), fimose",
      "Toque retal: volume estimado, consistência fibroelástica (HPB) × pétrea/nodular (câncer), dor (prostatite)",
      "Exame neurológico sumário: sensibilidade perineal, membros inferiores, tônus anal",
      "Edema de membros inferiores (ICC, poliúria noturna)"
    ],
    diferenciais: [
      { dx: "Bexiga hiperativa", pista: "Urgência e polaciúria predominantes, jato bom, resíduo baixo" },
      { dx: "Poliúria noturna", pista: "Diário: volume noturno > 1/3 do total em idoso; ICC, apneia, diurético à noite" },
      { dx: "Diabetes descompensado", pista: "Poliúria, polidipsia, glicemia alta" },
      { dx: "Estenose de uretra", pista: "Uretrite ou trauma/sondagem prévios, jato fino desde jovem" },
      { dx: "Prostatite / ITU", pista: "Disúria, febre, dor perineal, urina alterada" },
      { dx: "Câncer de próstata", pista: "Toque nodular, PSA elevado; costuma ser assintomático no início" },
      { dx: "Bexiga neurogênica", pista: "Doença neurológica, diabetes de longa data, resíduo alto" }
    ],
    gravidade: [
      "IPSS 0–7: leve · 8–19: moderado · 20–35: grave",
      "Risco de progressão: idade avançada, próstata > 30–40 mL, PSA > 1,5 ng/mL, resíduo elevado, sintomas graves",
      "Complicações: retenção, ITU recorrente, cálculo vesical, hematúria, hidronefrose, insuficiência renal → indicação cirúrgica (urologia)"
    ]
  },
  exames: [
    {
      nome: "Urina tipo 1",
      pedido: "Urina tipo 1 (EAS). Urocultura se leucocitúria ou nitrito positivo.",
      porQue: "Excluir infecção e hematúria.",
      esperar: "Normal na HPB não complicada.",
      interpretacao: "Hematúria persistente sem infecção → investigar (USG, citologia e cistoscopia — urologia).",
      limitacoes: "—"
    },
    {
      nome: "PSA total",
      pedido: "PSA total (antígeno prostático específico). Colher sem ejaculação nas 48 h anteriores, sem ITU/prostatite recente e antes de manipulação urológica.",
      porQue: "Em LUTS: estimar volume prostático e risco de progressão, e diagnóstico precoce de câncer em homem sintomático que deseje investigar.",
      esperar: "Aumenta com a idade e o volume prostático.",
      interpretacao: "Valor acima do limite de referência para a idade, elevação progressiva em dosagens seriadas ou toque alterado → urologia. Em uso de finasterida/dutasterida por ≥ 6 meses, multiplicar o PSA por 2.",
      limitacoes: "Não é específico: sobe em HPB, prostatite, ITU, sondagem e retenção. Rastreamento em homem assintomático não é recomendado pelo MS/INCA; SBU defende decisão individualizada (ver tabela). Explicar riscos de sobrediagnóstico e biópsia antes de pedir."
    },
    {
      nome: "Creatinina e glicemia",
      pedido: "Creatinina sérica e glicemia de jejum.",
      porQue: "Suspeita de comprometimento renal por obstrução; poliúria por diabetes.",
      esperar: "Normais na maioria.",
      interpretacao: "Creatinina elevada → USG de vias urinárias e urologia.",
      limitacoes: "Não obrigatório em todos (AUA); EAU recomenda se suspeita de dano renal."
    },
    {
      nome: "USG de vias urinárias e próstata com resíduo",
      pedido: "USG de rins, vias urinárias e próstata (via abdominal) com volume prostático e resíduo pós-miccional.",
      porQue: "Volume prostático (escolha de 5-ARI), resíduo, hidronefrose, cálculo vesical.",
      esperar: "Próstata > 30 mL na HPB clínica; resíduo baixo nos casos leves.",
      interpretacao: "Resíduo elevado ou hidronefrose → urologia; cautela com antimuscarínicos.",
      limitacoes: "Medidas de resíduo variam entre exames; repetir se alterado."
    },
    {
      nome: "Diário miccional",
      pedido: "Diário miccional de 3 dias (horário e volume de cada micção, ingestão de líquidos, perdas).",
      porQue: "Noctúria ou polaciúria predominante.",
      esperar: "—",
      interpretacao: "Volume noturno elevado = poliúria noturna (tratar a causa: líquidos à noite, ICC, apneia, diurético).",
      limitacoes: "Depende da adesão do paciente."
    }
  ],
  tratamento: [
    {
      droga: "Medidas comportamentais",
      linha: "l1",
      dose: "Reduzir líquidos 2 h antes de deitar, cafeína e álcool; urinar duas vezes seguidas (micção dupla); ordenhar a uretra após urinar; treinar a bexiga; tratar constipação; revisar medicamentos",
      via: "—",
      intervalo: "—",
      duracao: "Contínuo",
      monitorizacao: "IPSS em 6–12 semanas",
      contraindicacoes: "—",
      ajustes: "Única medida nos casos leves ou pouco incômodos (vigilância ativa)"
    },
    {
      droga: "Doxazosina",
      linha: "l1",
      dose: "Iniciar 1–2 mg à noite; aumentar a cada 1–2 semanas até 4 mg (máx. 8 mg/dia)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo; efeito em dias",
      monitorizacao: "PA em pé, tontura; IPSS em 4–12 semanas",
      contraindicacoes: "Hipotensão ortostática, síncope",
      ajustes: "Alfabloqueador da RENAME. Cirurgia de catarata: avisar o oftalmologista (síndrome da íris flácida). Cuidado com sildenafila/tadalafila e anti-hipertensivos (hipotensão)"
    },
    {
      droga: "Tansulosina",
      linha: "alt",
      dose: "0,4 mg",
      via: "VO",
      intervalo: "1×/dia, 30 min após a mesma refeição",
      duracao: "Contínuo",
      monitorizacao: "Ejaculação retrógrada, tontura",
      contraindicacoes: "Hipotensão ortostática",
      ajustes: "Não precisa de titulação e causa menos hipotensão. Fora da RENAME (farmácia). Síndrome da íris flácida na cirurgia de catarata"
    },
    {
      droga: "Finasterida",
      linha: "l1",
      dose: "5 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo; efeito pleno em 6–12 meses",
      monitorizacao: "Libido, ereção, ginecomastia; PSA (cai cerca de 50% — multiplicar por 2)",
      contraindicacoes: "Mulheres grávidas não devem manipular comprimidos partidos",
      ajustes: "Próstata > 30–40 mL ou PSA > 1,5 ng/mL; reduz risco de retenção e cirurgia. Associar ao alfabloqueador quando sintomas moderados a graves e próstata aumentada. RENAME. Dutasterida 0,5 mg 1×/dia é alternativa"
    },
    {
      droga: "Tadalafila",
      linha: "alt",
      dose: "5 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Cefaleia, dispepsia, PA",
      contraindicacoes: "Uso de nitratos (absoluta); ClCr < 30",
      ajustes: "Útil com disfunção erétil associada. Fora da RENAME"
    },
    {
      droga: "Antimuscarínico (oxibutinina 5 mg 2–3×/dia) ou mirabegrona 25–50 mg 1×/dia",
      linha: "adj",
      dose: "Oxibutinina 2,5–5 mg de 8/8 a 12/12 h · Mirabegrona 25 mg (aumentar para 50 mg)",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "Reavaliar em 4–8 semanas",
      monitorizacao: "Resíduo pós-miccional, retenção, constipação, confusão (oxibutinina no idoso); PA (mirabegrona)",
      contraindicacoes: "Resíduo elevado ou retenção; glaucoma de ângulo fechado (antimuscarínico); HAS grave não controlada (mirabegrona)",
      ajustes: "Para urgência/polaciúria persistentes apesar do alfabloqueador. Oxibutinina: evitar no idoso frágil (Beers — risco cognitivo); preferir mirabegrona"
    },
    {
      droga: "Fitoterápicos (Serenoa repens e similares)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Sem benefício consistente sobre placebo; não recomendados como tratamento (AUA/EAU)"
    }
  ],
  destino: {
    agora: [
      "Retenção urinária aguda: sondagem vesical de alívio (sonda de demora), iniciar alfabloqueador e encaminhar à urologia; tentativa de retirada da sonda após alguns dias de alfabloqueador (urologia)"
    ],
    reavaliar: [
      "IPSS e efeitos adversos 4–12 semanas após iniciar alfabloqueador; 6–12 meses após 5-ARI",
      "Depois, anualmente: IPSS, urina e PSA conforme decisão compartilhada"
    ],
    alta: [
      "Sintomas controlados: seguimento anual na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Retenção com infecção, hematúria com coágulos, insuficiência renal obstrutiva"
    ],
    transferencia: [
      "Urologia eletiva: falha do tratamento clínico, desejo de cirurgia, toque suspeito ou PSA alterado, hematúria, ITU recorrente, cálculo vesical, resíduo elevado, hidronefrose, retenção prévia, suspeita de bexiga neurogênica ou estenose"
    ]
  },
  prescricao: {
    ambulatorial: "HPB COM SINTOMAS MODERADOS (IPSS ≥ 8) — USO ORAL\n1. Doxazosina 2 mg ------------------------------- 30 comprimidos\n   Tomar 1/2 comprimido (1 mg) à noite, ao deitar, por 7 dias; depois 1 comprimido (2 mg) à noite. Levantar da cama devagar.\n   (Se resposta parcial após 2–4 semanas: 4 mg à noite.)\n   OU Tansulosina 0,4 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula ao dia, 30 minutos após o almoço ou jantar, sempre na mesma refeição.\n\nPRÓSTATA AUMENTADA (> 30–40 mL) OU PSA > 1,5 ng/mL — ASSOCIAR\n2. Finasterida 5 mg ------------------------------- 30 comprimidos\n   Tomar 1 comprimido ao dia, uso contínuo. O efeito completo aparece em 6 a 12 meses.\n\nURGÊNCIA PERSISTENTE COM RESÍDUO BAIXO (após 4–8 semanas de alfabloqueador)\n3. Mirabegrona 25 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido ao dia (pode aumentar para 50 mg após 4–8 semanas).\n   (Alternativa no SUS, evitar em idoso frágil: oxibutinina 5 mg — 1/2 a 1 comprimido de 12 em 12 horas.)\n\nORIENTAÇÕES\n- Evitar líquidos nas 2 horas antes de deitar; reduzir café e álcool.\n- Após urinar, esperar um pouco e tentar de novo (micção dupla).\n- Não usar descongestionante nasal nem antialérgico que dá sono sem orientação."
  },
  orientacoesRetorno: [
    "Aumento benigno da próstata é comum com a idade e não vira câncer; o tratamento serve para aliviar os sintomas e evitar complicações",
    "Doxazosina e tansulosina podem dar tontura ao levantar: levantar devagar, principalmente à noite",
    "Avisar o oftalmologista que usa esses remédios se for operar catarata",
    "Finasterida demora meses para fazer efeito e reduz o PSA pela metade: avisar em qualquer exame de PSA",
    "Procurar o pronto-socorro se não conseguir urinar, urina com sangue ou coágulos, febre com dor ao urinar",
    "Retornar em 1–3 meses para reavaliar os sintomas e depois pelo menos 1 vez ao ano"
  ],
  tabelas: [
    {
      titulo: "IPSS — Escore Internacional de Sintomas Prostáticos (último mês)",
      colunas: ["Pergunta", "Pontuação"],
      linhas: [
        ["1. Sensação de não esvaziar a bexiga completamente", "0 (nunca) a 5 (quase sempre)"],
        ["2. Precisou urinar de novo menos de 2 h depois", "0 a 5"],
        ["3. Parou e recomeçou várias vezes ao urinar (intermitência)", "0 a 5"],
        ["4. Dificuldade para segurar a urina (urgência)", "0 a 5"],
        ["5. Jato urinário fraco", "0 a 5"],
        ["6. Precisou fazer força para começar a urinar", "0 a 5"],
        ["7. Quantas vezes levantou à noite para urinar (noctúria)", "0 (nenhuma) a 5 (5 ou mais)"],
        ["Total", "0–7 leve · 8–19 moderado · 20–35 grave"],
        ["Qualidade de vida: se tivesse de viver o resto da vida assim", "0 (encantado) a 6 (péssimo)"]
      ],
      nota: "Respostas das perguntas 1 a 6: 0 nenhuma vez, 1 menos de 1 vez em 5, 2 menos da metade das vezes, 3 cerca da metade, 4 mais da metade, 5 quase sempre."
    },
    {
      titulo: "PSA: posições oficiais no Brasil",
      colunas: ["Entidade", "Recomendação"],
      linhas: [
        ["Ministério da Saúde / INCA", "Não recomenda rastreamento populacional em homens assintomáticos; investigar quem tem sinais ou sintomas (diagnóstico precoce)"],
        ["Sociedade Brasileira de Urologia", "Decisão individualizada, após explicar benefícios e riscos; iniciar mais cedo em negros e com história familiar"],
        ["Homem com LUTS", "PSA se o resultado mudar a conduta (volume prostático, 5-ARI, suspeita de câncer) e expectativa de vida > 10 anos"]
      ],
      nota: "Registrar em prontuário a decisão compartilhada. As idades de início citadas pela SBU variam entre documentos (45–50 anos; mais cedo se fatores de risco) — conferir o posicionamento vigente."
    }
  ],
  fontes: [
    "EAU — Guidelines on Management of Non-neurogenic Male LUTS (edição 2025)",
    "AUA — Management of Lower Urinary Tract Symptoms Attributed to BPH (2021, emenda 2023)",
    "Ministério da Saúde / INCA — Nota técnica conjunta sobre rastreamento do câncer de próstata (2023): não recomenda rastreamento populacional (posição mantida em 2026)",
    "Sociedade Brasileira de Urologia — posicionamento sobre rastreamento do câncer de próstata (Novembro Azul)",
    "Ministério da Saúde — RENAME 2024 (doxazosina, finasterida)",
    "American Geriatrics Society — Beers Criteria (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
