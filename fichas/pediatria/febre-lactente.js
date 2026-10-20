// Febre sem sinais localizatórios no lactente
registrarFicha({
  id: "febre-lactente",
  especialidade: "pediatria",
  caminho: "ps",
  titulo: "Febre sem foco no lactente (< 3 meses)",
  resumo: "Temperatura ≥ 38°C em lactente de até 90 dias sem foco aparente após história e exame. Risco de infecção bacteriana grave (ITU, bacteremia, meningite).",
  palavrasChave: "febre lactente recem-nascido neonato sem foco infeccao bacteriana grave sepse meningite itu procalcitonina ampicilina ceftriaxona pediatria",
  critico: {
    tempo: "< 28 dias = investigação completa",
    texto: "Até 28 dias: hemograma, hemocultura, urina por cateterismo com urocultura, líquor, internação e antibiótico IV, mesmo com bom estado geral."
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
  proximaDecisao: "29–90 dias, bem, urina normal e marcadores baixos (PCT ≤ 0,5 ng/mL, neutrófilos ≤ 4.000, PCR ≤ 20) → baixo risco: observação ou alta com reavaliação em 24 h. Qualquer alteração → líquor, internação e antibiótico.",
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
      interpretacao: "PCT > 0,5 ng/mL, neutrófilos > 4.000 ou PCR > 20 mg/L → alto risco.",
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
      ajustes: "Associar cefotaxima 50 mg/kg 8/8h (ou 6/6h se meningite) ou gentamicina 4 mg/kg 24/24h"
    },
    {
      droga: "Ceftriaxona (29–90 dias)",
      linha: "l1",
      dose: "50 mg/kg 1×/dia (meningite: 100 mg/kg/dia ÷ 12/12h, máx 4 g)",
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
  fontes: [
    "AAP — Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old (Pediatrics, 2021)",
    "Gomez B et al. Step-by-Step approach (Pediatrics 2016)",
    "Kuppermann N et al. PECARN febrile infant rule (JAMA Pediatr 2019)",
    "SBP — Documento científico: febre sem sinais localizatórios"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
