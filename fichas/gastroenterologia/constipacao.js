// Constipação intestinal funcional (criança e adulto)
registrarFicha({
  id: "constipacao",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Constipação intestinal funcional (criança e adulto)",
  resumo: "Evacuações infrequentes, endurecidas ou difíceis, sem causa orgânica, pelos critérios de Roma IV. Inclui desimpactação fecal e manutenção com laxativos em crianças e adultos.",
  palavrasChave: "constipacao prisao de ventre intestino preso fecaloma impactacao fecal escape fecal encoprese roma iv macrogol polietilenoglicol peg lactulose oleo mineral bisacodil senna fibras",
  critico: {
    tempo: "Desimpactar antes da manutenção",
    texto: "Com fecaloma (massa abdominal ou reto cheio, escape fecal), desimpactar primeiro (PEG oral em dose alta por 3–6 dias ou enema) e só depois iniciar manutenção. Manter laxativo por meses e retirar devagar."
  },
  alarmes: [
    "Criança: início no 1º mês de vida ou eliminação de mecônio após 48 h (doença de Hirschsprung)",
    "Criança: distensão abdominal importante, vômitos biliosos, baixo ganho de peso, ampola retal vazia com fezes explosivas ao toque",
    "Criança: alterações neurológicas de membros inferiores, tufo piloso/fosseta sacral, ausência de reflexo cremastérico ou anal (disrafismo)",
    "Adulto: idade ≥ 45–50 anos com início recente, sangue nas fezes, anemia ferropriva, perda de peso não intencional, história familiar de câncer colorretal ou DII",
    "Dor abdominal intensa, vômitos e parada de eliminação de gases (obstrução intestinal — PS)",
    "Febre com diarreia sanguinolenta (enterocolite associada a Hirschsprung)"
  ],
  condutaInicial: [
    "Confirmar critérios de Roma IV e afastar sinais de alarme",
    "Revisar medicamentos constipantes (opioides, anticolinérgicos, ferro, cálcio, antiácidos com alumínio, bloqueadores de canal de cálcio, antidepressivos tricíclicos)",
    "Avaliar impactação: massa fecal palpável no abdome ou reto cheio de fezes endurecidas ao toque (o toque retal em criança só se dúvida diagnóstica ou sinal de alarme)",
    "Se impactação: desimpactar com PEG oral (criança 1–1,5 g/kg/dia por 3–6 dias; adulto conforme esquema) ou enema",
    "Iniciar manutenção: PEG (1ª escolha em criança e adulto) ou lactulose; adulto também pode usar fibra solúvel (psyllium)",
    "Orientar: treino de toalete (sentar 5–10 min após as refeições, com apoio para os pés), água, fibras, atividade física, diário de evacuações (escala de Bristol)"
  ],
  fataisExcluir: [
    "Obstrução intestinal (volvo, bridas, tumor)",
    "Câncer colorretal (adulto com sinais de alarme)",
    "Doença de Hirschsprung / megacólon tóxico",
    "Hipotireoidismo, hipercalcemia, hipocalemia",
    "Disrafismo espinhal / lesão medular (síndrome da cauda equina no adulto)"
  ],
  proximaDecisao: "Reavaliar em 2–4 semanas: ajustar a dose do laxativo para 1 evacuação pastosa por dia, sem dor. Sem resposta após 3 meses de tratamento bem feito (com adesão confirmada) ou com sinal de alarme → investigação e encaminhamento (gastroenterologia; colonoscopia no adulto).",
  clinica: {
    anamnese: [
      "Frequência das evacuações, consistência (escala de Bristol 1–2 = endurecidas), esforço, dor, sangue no papel (fissura)",
      "Criança: idade de início, eliminação de mecônio nas primeiras 48 h, comportamento de retenção (cruza as pernas, fica na ponta dos pés, se esconde), escape fecal na roupa, fezes calibrosas que entopem o vaso, desfralde coercitivo, entrada na escola",
      "Lactente: introdução de fórmula ou alimentação complementar; disquezia do lactente (esforço e choro antes de fezes moles, < 9 meses) não é constipação",
      "Adulto: tempo de evolução, sensação de evacuação incompleta, manobras digitais (dissinergia), sinais de alarme, rastreio de câncer colorretal em dia",
      "Dieta (fibras, água, leite de vaca em excesso na criança), atividade física, medicamentos, sintomas urinários (ITU e enurese associadas na criança)",
      "Sintomas de hipotireoidismo, DM, doença neurológica, depressão"
    ],
    exameFisico: [
      "Peso, estatura e curva de crescimento (criança)",
      "Abdome: distensão, massa fecal palpável (fossa ilíaca esquerda, suprapúbica)",
      "Inspeção perianal: fissura, plicoma, posição do ânus, dermatite, sinais de abuso",
      "Região lombossacra: tufo piloso, fosseta, assimetria glútea",
      "Neurológico de membros inferiores: força, reflexos, reflexo anal e cremastérico",
      "Toque retal (adulto e, se indicado, criança): tônus, fecaloma, massa, sangue, contração paradoxal ao pedir para evacuar (dissinergia)"
    ],
    diferenciais: [
      { dx: "Doença de Hirschsprung", pista: "Início neonatal, mecônio após 48 h, distensão, baixo ganho de peso, ampola vazia" },
      { dx: "Síndrome do intestino irritável com constipação", pista: "Dor abdominal relacionada à evacuação ≥ 1 dia/semana (no adulto, a dor é o sintoma predominante)" },
      { dx: "Hipotireoidismo / hipercalcemia", pista: "Fadiga, intolerância ao frio, poliúria; TSH e cálcio alterados" },
      { dx: "Alergia à proteína do leite de vaca", pista: "Lactente, constipação refratária, associada a dermatite atópica ou sangue nas fezes; melhora com dieta de exclusão" },
      { dx: "Câncer colorretal", pista: "Adulto > 45 anos, mudança recente do hábito, sangue, anemia, emagrecimento" },
      { dx: "Constipação induzida por medicamento", pista: "Início após opioide, ferro, anticolinérgico, verapamil" },
      { dx: "Disfunção do assoalho pélvico (dissinergia)", pista: "Esforço excessivo, evacuação incompleta, manobras digitais, mesmo com fezes moles" }
    ],
    gravidade: [
      "Roma IV — lactente e criança até 4 anos: pelo menos 2 critérios por 1 mês — ≤ 2 evacuações/semana; retenção excessiva; evacuações dolorosas ou endurecidas; fezes de grande diâmetro; massa fecal no reto. Em criança com desfralde: ≥ 1 episódio/semana de incontinência; fezes que entopem o vaso",
      "Roma IV — criança ≥ 4 anos e adolescente: pelo menos 2 critérios, ≥ 1 vez/semana por ≥ 1 mês, sem critério para SII — ≤ 2 evacuações/semana no vaso; ≥ 1 episódio de incontinência fecal/semana; postura de retenção; evacuações dolorosas ou endurecidas; massa fecal no reto; fezes que entopem o vaso",
      "Roma IV — adulto: ≥ 2 critérios em > 25% das evacuações (esforço; fezes endurecidas Bristol 1–2; sensação de evacuação incompleta; sensação de obstrução; manobras manuais) ou < 3 evacuações espontâneas/semana; fezes moles raras sem laxativo; critérios por 3 meses, com início ≥ 6 meses antes",
      "Impactação fecal: massa dura no abdome inferior, reto dilatado e cheio de fezes, ou excesso de fezes no cólon distal em exame de imagem"
    ]
  },
  exames: [
    {
      nome: "Na constipação funcional sem sinais de alarme",
      pedido: "Não há exames de rotina. Diagnóstico clínico (Roma IV).",
      porQue: "Exames não mudam a conduta na constipação funcional típica.",
      esperar: "—",
      interpretacao: "Radiografia de abdome não é indicada para diagnosticar constipação em criança (ESPGHAN/NASPGHAN).",
      limitacoes: "Radiografia pode ser útil se toque retal impossível ou recusado e a impactação é duvidosa."
    },
    {
      nome: "Constipação refratária ou suspeita de causa orgânica",
      pedido: "TSH, T4 livre, cálcio total, potássio, glicemia de jejum, hemograma. Criança: anticorpo antitransglutaminase IgA + IgA total (doença celíaca).",
      porQue: "Afastar causas metabólicas, endócrinas e doença celíaca.",
      esperar: "Normais.",
      interpretacao: "Alteração orienta o tratamento da causa.",
      limitacoes: "Anticorpo antitransglutaminase falso-negativo se deficiência de IgA ou dieta sem glúten."
    },
    {
      nome: "Colonoscopia (adulto com alarme)",
      pedido: "Colonoscopia por constipação de início recente em paciente de ___ anos com [sangramento / anemia / perda de peso / história familiar de CCR].",
      porQue: "Excluir câncer colorretal e outras lesões.",
      esperar: "Normal.",
      interpretacao: "Lesão estenosante ou tumor → seguimento oncológico.",
      limitacoes: "Não indicada na constipação funcional sem alarme, além do rastreio habitual de CCR (a partir de 45–50 anos)."
    },
    {
      nome: "Exames especializados (gastroenterologia)",
      pedido: "Conforme especialista: manometria anorretal, teste de expulsão do balão, tempo de trânsito colônico; criança: enema opaco e biópsia retal se suspeita de Hirschsprung.",
      porQue: "Dissinergia, inércia colônica, aganglionose.",
      esperar: "—",
      interpretacao: "Dissinergia: biofeedback.",
      limitacoes: "Disponibilidade restrita no SUS."
    }
  ],
  tratamento: [
    {
      droga: "Polietilenoglicol 3350 / macrogol (com ou sem eletrólitos)",
      linha: "l1",
      dose: "Criança — desimpactação: 1–1,5 g/kg/dia; manutenção: 0,4 g/kg/dia (faixa 0,2–0,8), ajustar. Adulto — manutenção: 17 g/dia (1 sachê de 17 g ou 14–17 g conforme apresentação), ajustar; desimpactação: conforme bula/protocolo (doses maiores por 1–3 dias)",
      via: "VO, diluído em água, suco ou leite",
      intervalo: "1 vez ao dia (pode dividir em 2 tomadas)",
      duracao: "Desimpactação: 3–6 dias. Manutenção: pelo menos 2 meses e até 1 mês sem sintomas; retirar devagar",
      monitorizacao: "Diário de evacuações; objetivo: 1 evacuação pastosa por dia sem dor",
      contraindicacoes: "Obstrução ou perfuração intestinal, íleo, megacólon tóxico",
      ajustes: "1ª escolha da ESPGHAN/NASPGHAN em criança (inclusive < 6 meses fora de bula, com cautela). Não está na RENAME: em geral comprado em farmácia; alternativa SUS: lactulose"
    },
    {
      droga: "Lactulose (xarope 667 mg/mL)",
      linha: "alt",
      dose: "Criança: 1–2 g/kg/dia (≈ 1,5–3 mL/kg/dia). Adulto: 15–30 mL/dia (até 60 mL/dia)",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Manutenção prolongada, como o PEG",
      monitorizacao: "Distensão, flatulência, cólica",
      contraindicacoes: "Galactosemia, obstrução intestinal",
      ajustes: "Na RENAME (alternativa SUS). Segura em lactentes. Efeito em 24–48 h"
    },
    {
      droga: "Óleo mineral",
      linha: "alt",
      dose: "Criança: 1–3 mL/kg/dia (máx 90 mL/dia). Adulto: 15–45 mL/dia",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia, longe das refeições e não ao deitar",
      duracao: "Manutenção",
      monitorizacao: "Escape oleoso anal",
      contraindicacoes: "Menores de 1 ano, distúrbio de deglutição, refluxo/vômitos, neuropatas, acamados (risco de pneumonia lipoídica por aspiração)",
      ajustes: "Usar só em criança > 1 ano e neurologicamente normal. Uso prolongado reduz absorção de vitaminas lipossolúveis"
    },
    {
      droga: "Bisacodil",
      linha: "adj",
      dose: "Adulto: 5–10 mg à noite. Criança > 4 anos: 5 mg/dia (resgate)",
      via: "VO (ou supositório 10 mg no adulto)",
      intervalo: "1 vez ao dia",
      duracao: "Resgate ou curto prazo; uso contínuo só sob orientação",
      monitorizacao: "Cólica, diarreia, hipocalemia",
      contraindicacoes: "Obstrução, abdome agudo, desidratação",
      ajustes: "Estimulante: 2ª linha / resgate quando o osmótico isolado não basta. Senna é alternativa (adulto: conforme apresentação)"
    },
    {
      droga: "Enema de fosfato de sódio (Fleet) — desimpactação retal",
      linha: "alt",
      dose: "Criança ≥ 2 anos: 2,5 mL/kg (máx 133 mL — 1 frasco adulto); adulto: 1 frasco de 133 mL",
      via: "Retal",
      intervalo: "1 vez ao dia",
      duracao: "1–3 dias (máx); não repetir no mesmo dia",
      monitorizacao: "Retenção do enema (risco de hiperfosfatemia e hipocalcemia)",
      contraindicacoes: "Menores de 2 anos, insuficiência renal, desidratação, Hirschsprung, obstrução",
      ajustes: "Alternativa: enema de glicerina 12% ou SF 0,9% 5–10 mL/kg (criança) — mais seguro em lactentes. Supositório de glicerina para lactente com fezes no reto"
    },
    {
      droga: "Psyllium (fibra solúvel)",
      linha: "adj",
      dose: "Adulto: iniciar 1 sachê (cerca de 3,5–5 g) 1 vez ao dia e aumentar gradualmente",
      via: "VO com 1 copo grande de água",
      intervalo: "1 a 3 vezes ao dia",
      duracao: "Contínuo",
      monitorizacao: "Distensão e gases no início",
      contraindicacoes: "Disfagia, estenose intestinal",
      ajustes: "Recomendado no adulto (AGA/ACG 2023). Em criança, priorizar fibras da alimentação (frutas, verduras, feijão, cereais integrais)"
    },
    {
      droga: "Probióticos, domperidona, procinéticos",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem evidência de benefício na constipação funcional pediátrica",
      ajustes: "ESPGHAN/NASPGHAN não recomendam probióticos nem excesso de fibras/água além do normal para a idade em crianças. Prucaloprida, linaclotida: adulto refratário, sob especialista"
    }
  ],
  destino: {
    agora: [
      "Tratamento ambulatorial na UBS na grande maioria",
      "PS se suspeita de obstrução intestinal, abdome agudo ou desidratação com vômitos"
    ],
    reavaliar: [
      "2–4 semanas após início (ajuste de dose)",
      "Depois a cada 1–3 meses até alta; a recaída é comum"
    ],
    alta: [
      "Evacuações normais por pelo menos 1 mês após retirada gradual do laxativo"
    ],
    observacao: [
      "Fecaloma com dor intensa no PS: enema e observar eliminação; se falha, desimpactação manual"
    ],
    internacao: [
      "Obstrução, enterocolite, desimpactação refratária que necessite de lavagem por sonda nasogástrica com PEG"
    ],
    transferencia: [
      "Gastroenterologia (pediátrica ou adulto): refratária a 3 meses de tratamento adequado, suspeita de Hirschsprung, dissinergia, alarme",
      "Neurocirurgia/neurologia: suspeita de disrafismo ou medula presa",
      "Coloproctologia: fissura crônica, prolapso"
    ]
  },
  prescricao: {
    ambulatorial: "CONSTIPAÇÃO — ADULTO\nUSO ORAL\n1. Macrogol 3350 (polietilenoglicol) sachê ----------- 30 sachês\n   Dissolver 1 sachê em 1 copo de água e tomar 1 vez ao dia. Ajustar (meio a 2 sachês) para 1 evacuação macia por dia.\n   (Alternativa SUS) Lactulose 667 mg/mL ------------- 2 frascos\n   Tomar 15 a 30 mL 1 vez ao dia, de manhã. Ajustar a dose.\n2. Psyllium sachê --------------------------------- 30 sachês\n   Dissolver 1 sachê em 1 copo grande de água 1 vez ao dia.\n3. Se 3 dias sem evacuar: bisacodil 5 mg ------------- 1 caixa\n   Tomar 1 a 2 comprimidos à noite.\n\nCRIANÇA (peso: ___ kg)\nDESIMPACTAÇÃO (se fecaloma)\n1. Macrogol 3350 pó: ___ g (1 a 1,5 g/kg/dia) por dia, dissolvido em água ou suco, dividido em 2 tomadas, por 3 a 6 dias, até sair fezes líquidas claras.\nMANUTENÇÃO (após desimpactação, por pelo menos 2 meses)\n2. Macrogol 3350 pó: ___ g (0,4 g/kg/dia; ajustar entre 0,2 e 0,8 g/kg/dia) 1 vez ao dia.\n   OU Lactulose 667 mg/mL: ___ mL (1,5 a 3 mL/kg/dia) por dia, em 1 ou 2 tomadas.\n   OU (criança > 1 ano, sem problema para engolir) óleo mineral: ___ mL (1 a 3 mL/kg/dia, máx 90 mL/dia) 1 vez ao dia, longe das refeições e nunca deitada.\n\nORIENTAÇÕES\n- Sentar no vaso 5 a 10 minutos após o café, o almoço e o jantar, com apoio para os pés (banquinho).\n- Beber água ao longo do dia; comer frutas, verduras, feijão e cereais integrais.\n- Anotar as evacuações (diário) e trazer no retorno.",
    hospitalar: "FECALOMA NO PS — DESIMPACTAÇÃO RETAL\n1. Dieta conforme aceitação.\n2. Adulto: enema de fosfato de sódio 133 mL via retal agora (contraindicado se insuficiência renal ou desidratação); alternativa: enema de glicerina 12% 250–500 mL via retal.\n3. Criança ≥ 2 anos: enema de fosfato de sódio 2,5 mL/kg (máx 133 mL) via retal, dose única. Lactente/criança < 2 anos: supositório de glicerina infantil ou SF 0,9% 5–10 mL/kg via retal.\n4. Se dor: dipirona 1 g IV (criança: 15–25 mg/kg/dose, máx 1 g).\n5. Se falha após 2 tentativas: desimpactação manual sob analgesia, e/ou macrogol oral em dose de desimpactação.\n6. Alta com manutenção (ver receita ambulatorial)."
  },
  orientacoesRetorno: [
    "O laxativo é para usar todos os dias por meses, não só quando o intestino trava. Parar cedo é a principal causa de recaída",
    "O laxativo osmótico (macrogol, lactulose) não vicia e não 'preguiça' o intestino",
    "Criança: não brigar nem castigar por escapes; elogiar quando sentar no vaso; adiar o desfralde se houver medo de evacuar",
    "Voltar imediatamente se: barriga muito inchada, vômitos (principalmente verdes), dor forte, febre, sangue nas fezes em grande quantidade, parar de eliminar gases",
    "Retorno na UBS em 2 a 4 semanas para ajustar a dose"
  ],
  tabelas: [
    {
      titulo: "Escala de Bristol (forma das fezes)",
      colunas: ["Tipo", "Aspecto", "Interpretação"],
      linhas: [
        ["1", "Caroços duros separados (cocô de cabrito)", "Constipação"],
        ["2", "Formato de salsicha, com caroços", "Constipação"],
        ["3", "Salsicha com rachaduras", "Normal"],
        ["4", "Salsicha lisa e macia", "Normal (ideal)"],
        ["5", "Pedaços macios com bordas nítidas", "Tendência a diarreia"],
        ["6", "Pedaços pastosos, bordas irregulares", "Diarreia leve"],
        ["7", "Líquida, sem pedaços sólidos", "Diarreia"]
      ]
    }
  ],
  fontes: [
    "ESPGHAN/NASPGHAN — Evaluation and Treatment of Functional Constipation in Infants and Children (Tabbers et al., JPGN 2014) e atualização das diretrizes de tratamento (Gordon et al., JPGN 2026)",
    "Critérios de Roma IV — Rome Foundation (2016): distúrbios funcionais pediátricos e do adulto",
    "AGA/ACG — Clinical Practice Guideline on the Pharmacological Management of Chronic Idiopathic Constipation (Gastroenterology/Am J Gastroenterol, 2023)",
    "SBP — Departamento Científico de Gastroenterologia: Constipação intestinal funcional (documento científico vigente)",
    "Ministério da Saúde — RENAME 2024 (lactulose; conferir na lista local a disponibilidade de óleo mineral, enemas e glicerina)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
