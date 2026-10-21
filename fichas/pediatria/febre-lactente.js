// Febre sem sinais localizatórios no lactente
registrarFicha({
  id: "febre-lactente",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Febre sem foco no lactente (< 3 meses)",
  resumo: "Temperatura ≥ 38°C em lactente de até 90 dias sem foco aparente após história e exame. Risco de infecção bacteriana grave (ITU, bacteremia, meningite).",
  palavrasChave: "febre lactente recem-nascido neonato sem foco infeccao bacteriana grave sepse meningite itu procalcitonina ampicilina ceftriaxona pediatria",
  critico: {
    tempo: "≤ 28 dias = investigação completa",
    texto: "Até 21 dias (AAP 2021) e, na prática brasileira, até 28 dias: hemograma, hemocultura, urina por cateterismo com urocultura, líquor, internação e antibiótico IV, mesmo com bom estado geral."
  },
  alarmes: [
    "Idade ≤ 28 dias",
    "Toxemia: letargia, má perfusão, gemência, hipotonia, irritabilidade inconsolável",
    "Hipotermia (< 36°C), apneia, cianose",
    "Fontanela abaulada, convulsão, petéquias",
    "Prematuridade, doença crônica, antibiótico recente, mãe com estreptococo B sem profilaxia"
  ],
  condutaInicial: [
    "Confirmar febre (≥ 38°C retal ou relatada com termômetro confiável)",
    "Avaliar aparência (Triângulo de Avaliação Pediátrica) e sinais vitais",
    "Toxemiado em qualquer idade: investigação completa + antibiótico imediato",
    "≤ 28 dias: investigação completa, internação e antibiótico",
    "29–90 dias com bom estado: urina + hemograma + PCR/procalcitonina e aplicar critérios de baixo risco"
  ],
  fataisExcluir: [
    "Meningite bacteriana",
    "Sepse / bacteremia",
    "Infecção urinária com bacteremia",
    "Herpes neonatal (vesículas, convulsão, mãe com lesões)",
    "Cardiopatia ou erro inato do metabolismo descompensado"
  ],
  proximaDecisao: "29–60 dias (AAP 2021; extrapolado até 90 dias), bem, urina normal e marcadores baixos (PCT ≤ 0,5 ng/mL; ou, sem PCT, PCR ≤ 20 mg/L, neutrófilos ≤ 4.000 e T ≤ 38,5°C) → baixo risco: alta com reavaliação em 24 h, sem antibiótico. Qualquer marcador alterado → considerar líquor, internar e antibiótico.",
  clinica: {
    anamnese: [
      "Idade exata (dias), idade gestacional, intercorrências neonatais",
      "Duração e altura da febre, antitérmico recente",
      "Alimentação, diurese, sono, irritabilidade",
      "Contatos doentes, vacinação",
      "Pré-natal: estreptococo B, herpes, febre materna, bolsa rota prolongada"
    ],
    exameFisico: [
      "Aparência, tônus, choro, perfusão (enchimento capilar)",
      "FC, FR, SpO₂, temperatura",
      "Fontanela, pele (petéquias, vesículas), umbigo",
      "Ausculta, abdome, articulações (artrite séptica)",
      "Otoscopia (a otite não explica febre em < 2 meses)"
    ],
    diferenciais: [
      { dx: "Infecção viral (enterovírus, VSR)", pista: "Sazonalidade, contatos; não exclui ITU concomitante" },
      { dx: "Infecção urinária", pista: "Causa bacteriana mais comum" },
      { dx: "Meningite", pista: "Pode não ter sinais meníngeos nessa idade" },
      { dx: "Superaquecimento", pista: "Excesso de roupas; temperatura normaliza em 15–30 min" },
      { dx: "Reação vacinal", pista: "Até 48 h após vacina; ainda assim avaliar" }
    ],
    gravidade: [
      "Alto risco: ≤ 28 dias, toxemiado, marcadores alterados, urina alterada",
      "Critérios de baixo risco (Step-by-Step / PECARN / AAP 2021) aplicam-se a 22/29–60/90 dias com bom estado geral"
    ]
  },
  exames: [
    {
      nome: "Urina por cateterismo",
      pedido: "Urina tipo 1 e urocultura com antibiograma — coleta por cateterismo vesical (ou punção suprapúbica).",
      porQue: "ITU é a infecção bacteriana grave mais comum.",
      esperar: "—",
      interpretacao: "Leucocitúria ou nitrito positivo → tratar como ITU; < 2 meses: internar.",
      limitacoes: "Saco coletor não serve para urocultura."
    },
    {
      nome: "Marcadores inflamatórios e hemograma",
      pedido: "Hemograma completo, PCR, procalcitonina, hemocultura.",
      porQue: "Estratificar risco de bacteremia/meningite.",
      esperar: "—",
      interpretacao: "AAP 2021: marcador alterado = PCT > 0,5 ng/mL; ou PCR > 20 mg/L, neutrófilos > 4.000–5.200/mm³ ou T > 38,5°C → maior risco de infecção bacteriana invasiva.",
      limitacoes: "Procalcitonina pode estar baixa nas primeiras horas de febre."
    },
    {
      nome: "Líquor",
      pedido: "Punção lombar: citologia, bioquímica, Gram, cultura; PCR para enterovírus/HSV se disponível.",
      porQue: "Excluir meningite.",
      esperar: "—",
      interpretacao: "Pleocitose → tratar meningite.",
      limitacoes: "Obrigatório ≤ 21–28 dias; em 29–60 dias se marcadores alterados ou antes de antibiótico empírico."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax — só se sintomas respiratórios ou SpO₂ baixa.",
      porQue: "Pneumonia.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não é rotina."
    }
  ],
  tratamento: [
    {
      droga: "Ampicilina (≤ 28 dias)",
      linha: "l1",
      dose: "≤ 7 dias: 50 mg/kg 8/8h · 8–28 dias: 50 mg/kg 6/6h (meningite: 75 mg/kg 6/6h)",
      via: "IV",
      intervalo: "Conforme idade",
      duracao: "Até culturas negativas em 24–36 h ou conforme diagnóstico",
      monitorizacao: "Culturas",
      contraindicacoes: "—",
      ajustes: "Associar cefotaxima 50 mg/kg 8/8h (6/6h se meningite) ou gentamicina 4 mg/kg 24/24h (sem suspeita de meningite). 22–28 dias com líquor normal ou não colhido: a AAP 2021 aceita ceftriaxona 50 mg/kg 24/24h isolada (sem hiperbilirrubinemia); muitos serviços brasileiros mantêm ampicilina associada"
    },
    {
      droga: "Ceftriaxona (29–90 dias)",
      linha: "l1",
      dose: "50 mg/kg 1×/dia (máx 2 g) · meningite: 100 mg/kg/dia ÷ 12/12h (máx 4 g/dia)",
      via: "IV ou IM",
      intervalo: "24/24h",
      duracao: "Conforme diagnóstico",
      monitorizacao: "—",
      contraindicacoes: "≤ 28 dias com hiperbilirrubinemia; não infundir com soluções com cálcio",
      ajustes: "Se suspeita de meningite em 29–60 dias: associar ampicilina até culturas"
    },
    {
      droga: "Aciclovir",
      linha: "adj",
      dose: "20 mg/kg",
      via: "IV",
      intervalo: "8/8h",
      duracao: "Até PCR de HSV negativo (14–21 dias se confirmado)",
      monitorizacao: "Função renal, hidratação",
      contraindicacoes: "—",
      ajustes: "Vesículas, convulsão, transaminases elevadas, pleocitose com Gram negativo, mãe com herpes"
    },
    {
      droga: "Paracetamol (antitérmico)",
      linha: "adj",
      dose: "10–15 mg/kg (< 3 meses: 10 mg/kg)",
      via: "VO",
      intervalo: "6/6h",
      duracao: "Se desconforto",
      monitorizacao: "Dose máxima diária 60 mg/kg (< 3 meses)",
      contraindicacoes: "—",
      ajustes: "Resposta ao antitérmico não diferencia infecção viral de bacteriana. Dipirona não recomendada < 3 meses"
    }
  ],
  destino: {
    agora: [
      "Estratificar por idade e aparência; não atrasar antibiótico no toxemiado"
    ],
    reavaliar: [
      "Baixo risco liberado: reavaliação presencial em 24 h obrigatória",
      "Culturas em 24–36 h"
    ],
    alta: [
      "29–90 dias, bom estado, exames de baixo risco, família confiável com acesso fácil ao serviço",
      "Reavaliação em 24 h e retorno imediato se piora"
    ],
    observacao: [
      "Baixo risco sem garantia de retorno: observação 24–36 h"
    ],
    internacao: [
      "Todo ≤ 28 dias",
      "Toxemiado, marcadores ou urina alterados (< 2 meses), líquor alterado"
    ],
    transferencia: [
      "UBS: todo lactente < 3 meses febril deve ser avaliado em serviço com laboratório no mesmo dia",
      "Toxemiado: SAMU"
    ]
  },
  tabelas: [
    {
      titulo: "Lactente febril bem-aparente por faixa etária (AAP 2021)",
      colunas: ["Idade", "Exames", "Líquor", "Antibiótico / destino"],
      linhas: [
        ["8–21 dias", "Urina (cateterismo) + urocultura, hemocultura, PCT/PCR/hemograma", "Sempre", "Internar; ampicilina + gentamicina (ou cefotaxima)"],
        ["22–28 dias", "Urina + urocultura, hemocultura, marcadores inflamatórios", "Se marcadores alterados (pode fazer em todos)", "Marcadores alterados: internar + ATB. Normais: observar no hospital (prática brasileira: internar)"],
        ["29–60 dias", "Urina + urocultura, marcadores inflamatórios; hemocultura se marcador alterado", "Se marcadores alterados (pode fazer)", "Tudo normal: alta com retorno em 24 h. Urina alterada isolada: ATB oral/IM e seguimento. Marcadores alterados: ATB e considerar internar"],
        ["61–90 dias", "Urina + urocultura; hemograma, PCR conforme aparência", "Se toxemiado ou marcadores muito alterados", "Fora do escopo da AAP 2021: individualizar"]
      ],
      nota: "Toxemiado em qualquer idade: investigação completa + antibiótico imediato. Bronquiolite ou COVID confirmados não excluem ITU."
    }
  ],
  prescricao: {
    hospitalar: "PRESCRIÇÃO — INTERNAÇÃO (RECÉM-NASCIDO ≤ 28 DIAS, exemplo 3,5 kg)\n1. Aleitamento materno em livre demanda (se bom estado); jejum se toxemiado.\n2. Se toxemiado ou não aceita: SG 10% 500 mL + NaCl 20% 10 mL a 15 mL/h (≈ 100 mL/kg/dia; ajustar à idade em dias e ao sódio).\n3. Ampicilina 175 mg (50 mg/kg) IV de 6 em 6 horas (≤ 7 dias de vida: de 8 em 8 horas), diluída em SF 0,9% a 100 mg/mL, em 15–30 min. Meningite: 75 mg/kg de 6 em 6 horas.\n4. Gentamicina 14 mg (4 mg/kg) IV 1 vez ao dia, diluída em SF 0,9% 5 mL, em 30 min.\n   OU (suspeita de meningite) cefotaxima 175 mg (50 mg/kg) IV de 8 em 8 horas (6 em 6 horas se meningite), em SF 0,9% em 30 min.\n5. Se vesículas, convulsão, transaminases altas ou mãe com herpes: aciclovir 70 mg (20 mg/kg) IV de 8 em 8 horas em SF 0,9% (≤ 5 mg/mL) em 1 h.\n6. Paracetamol 200 mg/mL: 10 mg/kg (≈ 1 gota/kg) VO de 6 em 6 horas se febre com desconforto (máx 60 mg/kg/dia).\n7. Cuidados: temperatura, FC, FR, SpO₂ e perfusão de 4 em 4 horas; glicemia capilar; peso diário; isolamento de contato até exclusão de enterovírus/HSV. Reavaliar culturas em 24–36 h para suspender antibiótico se negativas.\n\n29–90 DIAS COM MARCADOR ALTERADO OU ITU\n- Ceftriaxona 50 mg/kg IV ou IM 1 vez ao dia (máx 2 g); meningite: 50 mg/kg de 12 em 12 horas (máx 4 g/dia). Diluir em SF 0,9% e infundir em 30 min; não misturar com soluções com cálcio."
  },
  orientacoesRetorno: [
    "Lactente liberado do PS precisa ser reavaliado por médico em 24 horas, mesmo que esteja bem",
    "Medir a temperatura com termômetro (axilar) 3 a 4 vezes ao dia; não agasalhar demais",
    "Antitérmico só se a criança estiver desconfortável; não usar dipirona ou ibuprofeno em menor de 3 meses sem orientação",
    "Voltar imediatamente se: dificuldade para mamar, vômitos repetidos, sonolência excessiva ou choro inconsolável, gemido, respiração difícil, pele pálida, roxa ou com manchas, moleira estufada, convulsão ou temperatura abaixo de 36°C",
    "Trazer o resultado das culturas na reavaliação; se a urocultura vier positiva, a equipe vai chamar a família"
  ],
  fontes: [
    "AAP — Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old (Pediatrics, 2021)",
    "SBP — Departamentos de Pediatria Ambulatorial e Infectologia: Documento científico Manejo da febre aguda (2021)",
    "Gomez B et al. Step-by-Step approach (Pediatrics 2016)",
    "Kuppermann N et al. PECARN febrile infant rule (JAMA Pediatr 2019)"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
