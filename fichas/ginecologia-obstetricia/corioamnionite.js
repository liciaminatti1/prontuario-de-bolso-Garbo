// Corioamnionite / infecção intra-amniótica
registrarFicha({
  id: "corioamnionite",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Corioamnionite (infecção intra-amniótica)",
  resumo: "Infecção do líquido amniótico, membranas, placenta ou decídua, geralmente com bolsa rota. Febre materna com taquicardia fetal, leucocitose ou líquido purulento. Tratamento: antibiótico IV imediato e resolução da gestação.",
  palavrasChave: "corioamnionite infeccao intra amniotica triplo i febre intraparto bolsa rota rpm taquicardia fetal liquido fetido purulento ampicilina gentamicina clindamicina endometrite",
  critico: {
    tempo: "Antibiótico IV em até 1 h",
    texto: "Ampicilina + gentamicina IV logo na suspeita e indicar o parto (indução ou cesárea por indicação obstétrica). Não há indicação de cesárea só pela infecção. Tratar a febre."
  },
  alarmes: [
    "Hipotensão, FR ≥ 25, alteração de consciência (sepse materna)",
    "CTG categoria III ou bradicardia fetal",
    "Febre ≥ 39 °C",
    "Útero muito doloroso, líquido purulento",
    "Sangramento com dor (DPP associado)"
  ],
  condutaInicial: [
    "Confirmar febre (≥ 39 °C uma vez, ou 38–38,9 °C repetida em 30 min) e buscar critérios associados",
    "Monitorizar sinais vitais maternos (pensar sepse materna) e CTG contínua",
    "Hemograma, PCR, lactato, hemoculturas (2 pares) se sinais de sepse; urina tipo 1 e urocultura",
    "Ampicilina 2 g IV 6/6 h + gentamicina 5 mg/kg IV 1×/dia",
    "Paracetamol para febre (hipertermia piora o desfecho neonatal)",
    "Indicar o parto: indução/condução com ocitocina; cesárea só por indicação obstétrica",
    "Avisar o pediatra/neonatologista"
  ],
  fataisExcluir: [
    "Sepse materna / choque séptico",
    "Infecção por estreptococo do grupo A (toxemia rápida, dor desproporcional)",
    "Pielonefrite",
    "Apendicite",
    "Listeriose (febre, diarreia, mialgia, gestante com alimentos de risco)"
  ],
  proximaDecisao: "Após o parto vaginal: suspender o antibiótico (ou fazer só mais 1 dose) se sem febre e sem bacteremia. Após cesárea: pelo menos 1 dose adicional com cobertura anaeróbia (clindamicina ou metronidazol). Febre persistente > 24–48 h ou sepse: manter antibiótico, investigar endometrite, abscesso, tromboflebite pélvica e retenção.",
  clinica: {
    anamnese: [
      "Tempo de bolsa rota, número de toques, trabalho de parto prolongado",
      "GBS, ITU, vaginose, monitorização interna",
      "Febre, calafrios, dor abdominal, odor do líquido",
      "Uso de antibiótico prévio; alergia à penicilina"
    ],
    exameFisico: [
      "Temperatura, FC (> 100), PA, FR, consciência",
      "Útero doloroso à palpação",
      "Líquido amniótico turvo, purulento ou fétido",
      "BCF (taquicardia fetal > 160 bpm por ≥ 10 min)"
    ],
    diferenciais: [
      { dx: "Febre por analgesia peridural", pista: "Febre baixa, sem outros sinais, após horas de peridural (diagnóstico de exclusão)" },
      { dx: "Pielonefrite", pista: "Disúria, Giordano, urina alterada" },
      { dx: "Infecção respiratória / COVID / influenza", pista: "Tosse, coriza, ausculta" },
      { dx: "DPP", pista: "Hipertonia e sangramento" },
      { dx: "Apendicite", pista: "Dor localizada, sinais peritoneais" }
    ],
    gravidade: [
      "Suspeita (ACOG 2017): febre ≥ 39 °C ou 38–38,9 °C persistente + 1 critério: leucocitose materna, secreção purulenta pelo colo, taquicardia fetal > 160",
      "Confirmada: além disso, cultura, Gram ou bioquímica do líquido amniótico positiva, ou histologia placentária",
      "Febre isolada 38–38,9 °C sem outro critério: considerar antibiótico se nenhuma outra causa"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Hemograma, PCR, lactato. Hemoculturas (2 pares) se T ≥ 39 °C, sinais de sepse ou imunossupressão. Urina tipo 1 e urocultura.",
      porQue: "Apoiar diagnóstico, rastrear sepse e outro foco.",
      esperar: "Leucocitose (> 15.000 sugere), PCR alta.",
      interpretacao: "Lactato ≥ 2 ou disfunção orgânica: tratar como sepse materna.",
      limitacoes: "Leucocitose é comum no trabalho de parto e após corticoide."
    },
    {
      nome: "Vitalidade fetal",
      pedido: "Cardiotocografia contínua.",
      porQue: "Taquicardia fetal e redução de variabilidade são comuns.",
      esperar: "—",
      interpretacao: "Categoria III: parto imediato.",
      limitacoes: "—"
    },
    {
      nome: "Placenta",
      pedido: "Exame anatomopatológico de placenta e membranas. Cultura de swab da face fetal da placenta se disponível.",
      porQue: "Confirmação e orientação do neonatologista.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Resultado tardio."
    }
  ],
  tratamento: [
    {
      droga: "Ampicilina",
      linha: "l1",
      dose: "2 g",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Até o parto (ver próxima decisão)",
      monitorizacao: "Alergia",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Associar gentamicina"
    },
    {
      droga: "Gentamicina",
      linha: "l1",
      dose: "5 mg/kg (peso atual) 1×/dia; ou 2 mg/kg ataque e 1,5 mg/kg 8/8 h",
      via: "IV em 30–60 min",
      intervalo: "24/24 h (ou 8/8 h)",
      duracao: "Até o parto e conforme evolução",
      monitorizacao: "Creatinina, diurese, audição",
      contraindicacoes: "Insuficiência renal (ajustar), miastenia",
      ajustes: "Diluir em 100 mL de SF 0,9%. Ajustar por ClCr. Peso > 120% do ideal: usar peso ajustado"
    },
    {
      droga: "Clindamicina (se cesárea)",
      linha: "adj",
      dose: "900 mg",
      via: "IV em 30 min",
      intervalo: "8/8 h",
      duracao: "Pelo menos 1 dose após a cesárea",
      monitorizacao: "Diarreia",
      contraindicacoes: "—",
      ajustes: "Alternativa: metronidazol 500 mg IV 8/8 h. Diluir clindamicina em 100 mL de SF 0,9%"
    },
    {
      droga: "Cefazolina + gentamicina (alergia sem anafilaxia)",
      linha: "alt",
      dose: "Cefazolina 2 g IV 8/8 h + gentamicina como acima",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Igual ao esquema principal",
      monitorizacao: "Alergia",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Alergia grave: clindamicina 900 mg IV 8/8 h ou vancomicina 1 g IV 12/12 h + gentamicina"
    },
    {
      droga: "Ampicilina-sulbactam / piperacilina-tazobactam / ceftriaxona + metronidazol",
      linha: "alt",
      dose: "Ampicilina-sulbactam 3 g IV 6/6 h; piperacilina-tazobactam 4,5 g IV 6/6 h; ceftriaxona 2 g IV 1×/dia + metronidazol 500 mg IV 8/8 h",
      via: "IV",
      intervalo: "Conforme droga",
      duracao: "Conforme evolução",
      monitorizacao: "—",
      contraindicacoes: "Alergia",
      ajustes: "Alternativas em monoterapia (ACOG 2017); seguir padronização da CCIH"
    },
    {
      droga: "Paracetamol",
      linha: "adj",
      dose: "750 mg a 1 g",
      via: "VO ou IV",
      intervalo: "6/6 h se febre",
      duracao: "Enquanto febril",
      monitorizacao: "Temperatura",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Máximo 4 g/dia. Evitar AINE na gestação"
    }
  ],
  destino: {
    agora: [
      "Antibiótico IV e parto em maternidade; avisar neonatologia",
      "Unidade sem maternidade: 1ª dose de antibiótico e transferência"
    ],
    reavaliar: [
      "Temperatura, FC, PA, FR de 1/1 h no trabalho de parto; CTG contínua",
      "Puerpério: febre, involução uterina, lóquios"
    ],
    alta: [
      "Puérpera afebril > 24–48 h, bem, sem dor uterina, lóquios normais e RN avaliado"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Todos os casos",
      "UTI se sepse com disfunção orgânica"
    ],
    transferencia: [
      "Prematuro < 34 semanas: maternidade com UTI neonatal, se a transferência não atrasar o parto"
    ]
  },
  prescricao: {
    hospitalar: "CORIOAMNIONITE (peso: ___ kg; IG: ___ semanas)\n1. Dieta zero se cesárea provável; senão líquidos.\n2. Acesso venoso; Ringer lactato 125 mL/h.\n3. Ampicilina 2 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n4. Gentamicina 5 mg/kg (___ mg) + SF 0,9% 100 mL IV em 60 min 1×/dia.\n5. Se cesárea: clindamicina 900 mg + SF 0,9% 100 mL IV em 30 min de 8/8 h (ou metronidazol 500 mg IV de 8/8 h), pelo menos 1 dose após a cirurgia.\n6. Paracetamol 750 mg VO de 6/6 h se T ≥ 37,8 °C.\n7. Indução/condução com ocitocina conforme protocolo; cesárea só por indicação obstétrica.\n8. Exames: hemograma, PCR, lactato, hemoculturas (2 pares) se T ≥ 39 °C ou sinais de sepse; urina tipo 1; anatomopatológico da placenta.\n9. Controles: T, FC, PA, FR de 1/1 h; CTG contínua; diurese.\n10. Comunicar neonatologia."
  },
  orientacoesRetorno: [
    "O bebê será avaliado pelo pediatra porque a infecção pode passar para ele",
    "Voltar imediatamente se depois da alta: febre, dor forte na barriga, sangramento com mau cheiro, tontura, falta de ar",
    "Consulta de puerpério na UBS em até 7 dias"
  ],
  fontes: [
    "ACOG — Committee Opinion nº 712: Intrapartum management of intraamniotic infection (2017, reafirmado)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Tratado de Obstetrícia (2019)",
    "Higgins RD et al. — Evaluation and management of women and newborns with a maternal diagnosis of chorioamnionitis (NICHD workshop, Obstet Gynecol 2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
