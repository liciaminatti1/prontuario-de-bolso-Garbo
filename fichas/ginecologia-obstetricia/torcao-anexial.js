// Torção anexial e cisto ovariano roto/hemorrágico
registrarFicha({
  id: "torcao-anexial",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Torção anexial e cisto ovariano roto ou hemorrágico",
  resumo: "Dor pélvica aguda unilateral em menina ou mulher. Torção: rotação do ovário/tuba sobre o pedículo, emergência cirúrgica para salvar o ovário. Cisto roto ou hemorrágico (em geral de corpo lúteo): maioria tratada clinicamente; cirurgia se instabilidade.",
  palavrasChave: "torcao anexial torcao ovariana torcao de ovario cisto ovariano roto cisto hemorragico corpo luteo hemoperitonio dor pelvica aguda laparoscopia distorcao doppler teratoma",
  critico: {
    tempo: "Torção: laparoscopia em horas",
    texto: "Dor pélvica súbita com náuseas e massa anexial = torção até prova em contrário. Doppler com fluxo NÃO exclui. Cirurgia precoce aumenta a chance de preservar o ovário."
  },
  alarmes: [
    "Dor pélvica súbita, intensa, unilateral, com náuseas e vômitos",
    "Hipotensão, taquicardia, síncope (hemoperitônio)",
    "Peritonite, febre (necrose ovariana)",
    "Beta-hCG positivo (pensar em ectópica)",
    "Queda de hemoglobina em exames seriados"
  ],
  condutaInicial: [
    "Beta-hCG em toda paciente pós-menarca",
    "Sinais vitais, acesso venoso, analgesia e antiemético",
    "Hemograma, tipagem ABO/Rh, urina tipo 1",
    "USG pélvica (transvaginal se vida sexual; transabdominal em criança/virgem) com Doppler",
    "Suspeita de torção ou instabilidade: acionar ginecologia/cirurgia pediátrica sem esperar"
  ],
  fataisExcluir: [
    "Gravidez ectópica rota",
    "Apendicite aguda",
    "Abscesso tubo-ovariano / DIP (ver dip)",
    "Hemoperitônio por cisto roto em paciente anticoagulada"
  ],
  proximaDecisao: "Suspeita clínica de torção (mesmo com Doppler normal) → laparoscopia diagnóstica e distorção, preservando o ovário. Cisto roto/hemorrágico estável → analgesia, Hb seriada em 6–12 h e alta com USG de controle em 6–8 semanas. Instável ou Hb em queda → cirurgia.",
  clinica: {
    anamnese: [
      "Início súbito, muitas vezes após esforço, exercício ou relação sexual",
      "Dor intermitente prévia (torção parcial que se desfaz)",
      "Náuseas e vômitos (frequentes na torção)",
      "DUM e fase do ciclo (cisto de corpo lúteo: 2ª fase), uso de anticoagulante",
      "Tumor ou cisto ovariano conhecido; indução de ovulação; gestação"
    ],
    exameFisico: [
      "Sinais vitais",
      "Dor localizada em fossa ilíaca/hipogástrio, defesa, descompressão",
      "Massa anexial dolorosa ao toque (quando aplicável)",
      "Na criança, a dor pode ser periumbilical e confundida com apendicite"
    ],
    diferenciais: [
      { dx: "Gravidez ectópica", pista: "Beta-hCG positivo" },
      { dx: "Apendicite", pista: "Dor migratória, febre, ovário normal à USG" },
      { dx: "Cólica renal", pista: "Hematúria, dor lombar irradiada" },
      { dx: "DIP / abscesso tubo-ovariano", pista: "Febre, corrimento, dor bilateral, dor à mobilização do colo" },
      { dx: "Mittelschmerz (dor da ovulação)", pista: "Meio do ciclo, leve, autolimitada" }
    ],
    gravidade: [
      "Torção: emergência cirúrgica (tempo de isquemia)",
      "Cisto hemorrágico íntegro: dor, sem hemoperitônio relevante → clínico",
      "Cisto roto com hemoperitônio pequeno e estável → clínico com Hb seriada",
      "Hemoperitônio volumoso, instabilidade ou Hb caindo → cirurgia"
    ]
  },
  exames: [
    {
      nome: "Beta-hCG",
      pedido: "Beta-hCG (urinário rápido e/ou sérico quantitativo).",
      porQue: "Excluir gravidez ectópica.",
      esperar: "Negativo.",
      interpretacao: "Positivo → conduzir como gestação de localização a definir (ver gravidez-ectopica).",
      limitacoes: "—"
    },
    {
      nome: "USG pélvica com Doppler",
      pedido: "Ultrassonografia pélvica transvaginal (ou transabdominal) com Doppler colorido dos ovários — dor pélvica aguda, suspeita de torção anexial / cisto roto.",
      porQue: "Avaliar tamanho ovariano, massa, fluxo e líquido livre.",
      esperar: "Torção: ovário aumentado, edemaciado, com folículos periféricos, massa associada, pedículo torcido (sinal do redemoinho).",
      interpretacao: "Cisto hemorrágico: padrão rendilhado/reticular, coágulo retrátil. Líquido livre ecogênico = sangue. Ovário com tamanho normal torna torção pouco provável.",
      limitacoes: "Fluxo ao Doppler presente em parte das torções confirmadas: não exclui. TC é alternativa se USG indisponível."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma completo, tipagem ABO/Rh, coagulograma, urina tipo 1. Repetir hemoglobina em 6 h se cisto roto.",
      porQue: "Quantificar perda sanguínea e preparar cirurgia.",
      esperar: "—",
      interpretacao: "Queda de Hb ≥ 2 g/dL ou progressiva → cirurgia.",
      limitacoes: "Leucocitose discreta pode ocorrer na torção e no hemoperitônio."
    }
  ],
  tratamento: [
    {
      droga: "Laparoscopia com distorção do anexo",
      linha: "l1",
      dose: "Distorção e conservação do ovário, mesmo de aspecto escuro/isquêmico; cistectomia se cisto",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Dor, febre no pós-operatório",
      contraindicacoes: "—",
      ajustes: "Ooforectomia só se necrose franca/friável ou suspeita de malignidade em pós-menopausa. Em gestante, laparoscopia é segura. Ooforopexia em casos selecionados (torção recorrente)"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "Adulto 1 g · criança 15–25 mg/kg (máx. 1 g)",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Enquanto dor",
      monitorizacao: "PA",
      contraindicacoes: "Alergia, discrasia sanguínea",
      ajustes: "Diluir em 10 mL de água destilada, infundir lento"
    },
    {
      droga: "Cetoprofeno",
      linha: "adj",
      dose: "Adulto 100 mg · criança (> 1 ano, uso off-label) 1–2 mg/kg (máx. 100 mg)",
      via: "IV",
      intervalo: "12/12 h",
      duracao: "Até 48 h",
      monitorizacao: "Função renal",
      contraindicacoes: "Gestação no 3º trimestre, DRC, úlcera, sangramento ativo importante ou hipovolemia",
      ajustes: "Diluir em 100 mL de SF 0,9% em 20–30 min. Evitar se hemoperitônio com instabilidade"
    },
    {
      droga: "Morfina",
      linha: "adj",
      dose: "Adulto 2–4 mg · criança 0,05–0,1 mg/kg (máx. 4 mg por dose)",
      via: "IV lento",
      intervalo: "Repetir a cada 10–15 min se necessário; depois 4/4 h",
      duracao: "Dor intensa",
      monitorizacao: "FR, sedação, SpO2, PA",
      contraindicacoes: "Hipotensão não corrigida, depressão respiratória",
      ajustes: "Diluir 10 mg (1 mL) em 9 mL de SF 0,9% = 1 mg/mL. Analgesia não mascara o diagnóstico de forma relevante"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "Adulto 4 mg · criança 0,1–0,15 mg/kg (máx. 4 mg)",
      via: "IV lento",
      intervalo: "8/8 h",
      duracao: "Se náusea",
      monitorizacao: "QT se uso associado a outros prolongadores",
      contraindicacoes: "QT longo",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Suspeita de torção: cirurgia de urgência",
      "Instabilidade: reanimação e cirurgia"
    ],
    reavaliar: [
      "Cisto roto estável: Hb e exame abdominal em 6–12 h"
    ],
    alta: [
      "Cisto hemorrágico ou roto estável, dor controlada com VO, Hb estável",
      "USG de controle em 6–8 semanas (cisto funcional deve sumir)",
      "Considerar anticoncepcional combinado para reduzir novos cistos funcionais em quem tem recorrência"
    ],
    observacao: [
      "Dor importante, hemoperitônio pequeno ou dúvida diagnóstica: observação com Hb seriada"
    ],
    internacao: [
      "Torção (pós-operatório)",
      "Hemoperitônio moderado, Hb em queda, anticoagulada"
    ],
    transferencia: [
      "Sem ginecologia/cirurgia pediátrica ou laparoscopia: transferir com prioridade (tempo de isquemia)"
    ]
  },
  prescricao: {
    hospitalar: "DOR PÉLVICA AGUDA — SUSPEITA DE TORÇÃO / CISTO ROTO (adulto)\n1. Dieta zero.\n2. Acesso venoso; SF 0,9% 500 mL IV; se hipotensão, bolus de 500–1.000 mL e reavaliar.\n3. Dipirona 1 g + água destilada 10 mL IV lento de 6/6 h.\n4. Morfina 10 mg/mL — 1 mL + 9 mL de SF 0,9% (1 mg/mL): 2–4 mg IV lento se dor intensa; repetir a cada 15 min se necessário.\n5. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n6. Exames: beta-hCG, hemograma, tipagem ABO/Rh, coagulograma, urina tipo 1. USG pélvica com Doppler.\n7. Avaliação da ginecologia/cirurgia.\n8. Cisto roto estável: hemoglobina em 6 h; sinais vitais de 1/1 h.\n\nCRIANÇA (peso ___ kg)\n- Dipirona 15–25 mg/kg IV (máx. 1 g) de 6/6 h.\n- Morfina 0,05–0,1 mg/kg IV lento (máx. 4 mg/dose).\n- Ondansetrona 0,15 mg/kg IV (máx. 4 mg) de 8/8 h.",
    ambulatorial: "CISTO OVARIANO HEMORRÁGICO/ROTO ESTÁVEL — ALTA (adulto)\nUSO ORAL\n1. Ibuprofeno 400 mg ----------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n(Criança: ibuprofeno 10 mg/kg/dose de 8/8 h, máx. 400 mg; dipirona 15–25 mg/kg/dose de 6/6 h, máx. 1 g.)\n\nEXAME\n3. Ultrassonografia pélvica de controle em 6 a 8 semanas."
  },
  orientacoesRetorno: [
    "Cistos do ovário que sangram costumam sumir sozinhos em algumas semanas",
    "Evitar esforço físico intenso e relação sexual por alguns dias, até a dor passar",
    "Voltar imediatamente se: dor forte que volta ou piora, desmaio, tontura, barriga inchada, vômitos ou febre",
    "Fazer a USG de controle na data marcada",
    "Após cirurgia de torção: retorno ambulatorial com a equipe cirúrgica; o ovário preservado costuma voltar a funcionar"
  ],
  fontes: [
    "FEBRASGO — Massas anexiais / Abdome agudo ginecológico. Protocolos FEBRASGO (2021)",
    "ACOG Committee Opinion nº 783 — Adnexal Torsion in Adolescents (2019)",
    "ACOG Practice Bulletin nº 174 — Evaluation and Management of Adnexal Masses (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
