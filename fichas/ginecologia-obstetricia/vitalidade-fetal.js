// Vitalidade fetal: CTG, diminuição de movimentos, sofrimento fetal agudo
registrarFicha({
  id: "vitalidade-fetal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Vitalidade fetal: cardiotocografia, diminuição de movimentos e sofrimento fetal agudo",
  resumo: "Interpretação da cardiotocografia (categorias I, II e III), avaliação da gestante com diminuição de movimentos fetais e medidas de reanimação intrauterina diante de traçado anormal.",
  palavrasChave: "vitalidade fetal cardiotocografia ctg cardiotocografo categoria i ii iii nichd figo desaceleracao tardia variavel precoce variabilidade bradicardia fetal taquicardia fetal sinusoidal sofrimento fetal agudo reanimacao intrauterina taquissistolia terbutalina movimentos fetais diminuidos mobilograma perfil biofisico bcf",
  critico: {
    tempo: "Categoria III: parto imediato",
    texto: "Traçado anormal: reanimação intrauterina já (decúbito lateral, suspender ocitocina, corrigir hipotensão, tratar taquissistolia). Categoria III que não reverte em poucos minutos: parto pela via mais rápida."
  },
  alarmes: [
    "Bradicardia fetal < 110 bpm por ≥ 10 min (ou < 80 bpm prolongada)",
    "Variabilidade ausente com desacelerações tardias ou variáveis recorrentes",
    "Padrão sinusoidal (anemia fetal grave: vasa prévia, hemorragia feto-materna, aloimunização)",
    "Ausência de movimentos fetais por ≥ 12–24 h ou BCF ausente",
    "Taquissistolia (> 5 contrações em 10 min) ou hipertonia",
    "Febre materna, sangramento, hipertensão grave associados"
  ],
  condutaInicial: [
    "Confirmar BCF e diferenciá-lo do pulso materno (palpar pulso da mãe ao mesmo tempo)",
    "CTG por pelo menos 20 min (estender até 40 min se não reativa; feto pode estar dormindo)",
    "Classificar o traçado (tabela) considerando IG, medicações (opioide, MgSO₄, corticoide reduzem variabilidade) e contexto",
    "Traçado alterado: reanimação intrauterina (tabela) e avaliar dilatação, prolapso de cordão, sangramento",
    "Diminuição de movimentos fetais: BCF, CTG, USG (líquido, crescimento, perfil biofísico) e investigar causa",
    "Categoria III ou bradicardia persistente: chamar obstetra/anestesia/neonatologia e preparar parto"
  ],
  fataisExcluir: [
    "Prolapso de cordão",
    "Descolamento prematuro de placenta",
    "Rotura uterina",
    "Vasa prévia rota",
    "Hipotensão materna (peridural, decúbito dorsal, hemorragia)",
    "Óbito fetal"
  ],
  proximaDecisao: "Categoria I: manter vigilância de rotina. Categoria II: reanimação intrauterina e reavaliar em 15–30 min; se aceleração presente ou variabilidade moderada, acidemia é improvável; se surgir variabilidade mínima/ausente com desacelerações recorrentes, tratar como III. Categoria III: parto em curto prazo (meta de decisão-parto em até 30 min, menor se bradicardia prolongada).",
  clinica: {
    anamnese: [
      "IG, fatores de risco (hipertensão, diabetes, RCF, pós-datismo, gemelar, colestase, lúpus)",
      "Movimentos fetais: desde quando diminuídos; última vez sentidos",
      "Contrações, sangramento, perda de líquido (cor), febre",
      "Medicações (opioide, MgSO₄, betabloqueador, corticoide), analgesia de parto, uso de ocitocina ou misoprostol",
      "Tabagismo, drogas, trauma"
    ],
    exameFisico: [
      "PA (hipotensão ou pré-eclâmpsia), FC, temperatura",
      "Altura uterina (RCF), tônus, dinâmica uterina por 10 min",
      "Especular/toque: líquido (meconial), sangue, cordão, dilatação"
    ],
    diferenciais: [
      { dx: "Sono fetal", pista: "Variabilidade mínima < 40 min, volta ao normal com estímulo" },
      { dx: "Efeito de medicação", pista: "Opioide, MgSO₄, sedativos reduzem variabilidade" },
      { dx: "Taquicardia por febre materna/infecção", pista: "Linha de base > 160 com febre (corioamnionite)" },
      { dx: "Arritmia fetal", pista: "Ritmo muito irregular ou FC > 200 / bloqueio fixo < 80: ecocardiografia fetal" },
      { dx: "Registro do pulso materno", pista: "Linha de base igual à FC materna" }
    ],
    gravidade: [
      "Categoria III prediz acidemia fetal: intervenção imediata",
      "Desacelerações tardias recorrentes = insuficiência uteroplacentária",
      "Diminuição de movimentos recorrente (≥ 2 episódios): maior risco de RCF e óbito; avaliar com USG e considerar parto a termo"
    ]
  },
  exames: [
    {
      nome: "Cardiotocografia",
      pedido: "Cardiotocografia anteparto/intraparto por no mínimo 20 min (prolongar até 40 min).",
      porQue: "Avaliar oxigenação fetal.",
      esperar: "Linha de base 110–160; variabilidade 6–25 bpm; ≥ 2 acelerações em 20 min (reativa).",
      interpretacao: "Ver tabela de categorias. Anteparto: reativa = tranquilizadora; não reativa → estímulo sonoro/vibroacústico, prolongar e perfil biofísico.",
      limitacoes: "Alta taxa de falso-positivo; < 32 semanas acelerações são menores (≥ 10 bpm por 10 s)."
    },
    {
      nome: "USG com perfil biofísico e Doppler",
      pedido: "Ultrassonografia obstétrica com biometria, índice de líquido amniótico/maior bolsão, perfil biofísico fetal e Doppler de artéria umbilical e cerebral média.",
      porQue: "Diminuição de movimentos, CTG não reativa, suspeita de RCF.",
      esperar: "Perfil biofísico 8/10 ou 10/10; Doppler normal.",
      interpretacao: "Perfil ≤ 4 ou oligoâmnio no termo: considerar parto. Diástole zero/reversa na umbilical: ver restricao-crescimento-fetal.",
      limitacoes: "—"
    },
    {
      nome: "Exames maternos conforme suspeita",
      pedido: "Kleihauer-Betke (se padrão sinusoidal ou trauma). Glicemia. Proteinúria e laboratório de pré-eclâmpsia se PA alta. Ácidos biliares se prurido.",
      porQue: "Buscar causa da hipóxia fetal.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Reanimação intrauterina — medidas gerais",
      linha: "l1",
      dose: "Decúbito lateral (esquerdo ou direito); suspender ocitocina; suspender puxos; corrigir hipotensão; cristaloide 500 mL em bolus se hipovolemia/peridural",
      via: "—",
      intervalo: "Imediato",
      duracao: "Reavaliar em 10–15 min",
      monitorizacao: "CTG contínua, PA materna",
      contraindicacoes: "Bolus de volume com cautela em pré-eclâmpsia",
      ajustes: "O₂ materno só se hipoxemia materna (SpO₂ < 95%); não é rotina (ACOG)"
    },
    {
      droga: "Terbutalina (tocólise aguda)",
      linha: "l1",
      dose: "0,25 mg",
      via: "SC",
      intervalo: "Dose única (pode repetir após 15–20 min conforme protocolo)",
      duracao: "—",
      monitorizacao: "FC materna (taquicardia), glicemia",
      contraindicacoes: "Cardiopatia, FC materna > 120, sangramento (DPP)",
      ajustes: "Taquissistolia ou hipertonia com traçado anormal, enquanto se prepara o parto. Ampola 0,5 mg/mL: 0,5 mL"
    },
    {
      droga: "Efedrina / fenilefrina (hipotensão pós-raquianestesia)",
      linha: "adj",
      dose: "Efedrina 5–10 mg IV ou fenilefrina 50–100 mcg IV",
      via: "IV",
      intervalo: "Repetir conforme PA",
      duracao: "—",
      monitorizacao: "PA a cada 2–5 min",
      contraindicacoes: "—",
      ajustes: "Conduta do anestesista"
    },
    {
      droga: "Amnioinfusão",
      linha: "adj",
      dose: "SF 0,9% ou Ringer em temperatura ambiente pelo cateter intrauterino, conforme protocolo",
      via: "Intrauterina",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Tônus uterino",
      contraindicacoes: "Sangramento, placenta prévia, infecção",
      ajustes: "Desacelerações variáveis recorrentes por compressão de cordão (oligoâmnio). Não é indicada para diluir mecônio"
    }
  ],
  destino: {
    agora: [
      "Categoria III que não reverte: parto imediato (cesárea ou instrumental se dilatação completa e apresentação baixa)",
      "UBS/UPA com BCF alterado ou ausente: maternidade imediatamente"
    ],
    reavaliar: [
      "Categoria II: CTG contínua e reavaliação a cada 15–30 min",
      "Diminuição de movimentos com exames normais: orientar contagem e reavaliar se novo episódio"
    ],
    alta: [
      "Movimentos diminuídos com CTG reativa, USG normal (crescimento e líquido) e gestante voltando a sentir o bebê",
      "Retorno ao pré-natal em até 1 semana; nova diminuição = voltar no mesmo dia"
    ],
    observacao: [
      "CTG não reativa anteparto com perfil biofísico normal: repetir CTG em algumas horas"
    ],
    internacao: [
      "Categoria II persistente, perfil biofísico alterado, oligoâmnio, RCF com Doppler alterado",
      "Diminuição de movimentos recorrente ≥ 39 semanas: discutir indução"
    ],
    transferencia: [
      "Prematuro com sofrimento fetal e sem UTI neonatal: transferir se houver tempo; se não, parto e chamar transporte neonatal"
    ]
  },
  prescricao: {
    hospitalar: "SOFRIMENTO FETAL AGUDO — REANIMAÇÃO INTRAUTERINA\n1. Dieta zero.\n2. Decúbito lateral esquerdo (ou direito, o que melhorar o traçado).\n3. Suspender ocitocina em infusão; suspender puxos.\n4. Acesso venoso; Ringer lactato 500 mL IV em bolus se PA baixa ou após peridural.\n5. O₂ por cateter/máscara somente se SpO₂ materna < 95%.\n6. Se taquissistolia/hipertonia: terbutalina 0,25 mg (0,5 mL da ampola de 0,5 mg/mL) SC, dose única.\n7. Toque vaginal: excluir prolapso de cordão e avaliar dilatação.\n8. Cardiotocografia contínua; reavaliar em 10–15 min.\n9. Sem melhora (categoria III): comunicar obstetra, anestesista e neonatologista; preparar cesárea de emergência."
  },
  orientacoesRetorno: [
    "Prestar atenção aos movimentos do bebê todos os dias a partir de 28 semanas: ele deve mexer várias vezes ao dia, no padrão de sempre",
    "Se achar que o bebê está mexendo menos: deitar de lado por 1–2 h após comer; se não sentir pelo menos 10 movimentos em 2 horas, ir à maternidade no mesmo dia",
    "Não esperar o dia seguinte nem usar aparelho doméstico de ouvir o coração para se tranquilizar",
    "Voltar imediatamente se: bebê parou de mexer, sangramento, perda de líquido, dor forte ou barriga dura"
  ],
  tabelas: [
    {
      titulo: "Cardiotocografia intraparto — categorias (NICHD/ACOG)",
      colunas: ["Categoria", "Critérios", "Conduta"],
      linhas: [
        ["I (normal)", "Linha de base 110–160; variabilidade moderada (6–25); sem desacelerações tardias ou variáveis; precoces e acelerações podem estar presentes", "Vigilância de rotina"],
        ["II (indeterminada)", "Tudo que não é I nem III: bradicardia com variabilidade presente, taquicardia, variabilidade mínima ou marcada, ausência de acelerações após estímulo, desacelerações tardias ou variáveis recorrentes com variabilidade moderada, desaceleração prolongada (2–10 min)", "Reanimação intrauterina; reavaliar; avaliar causa e progressão do parto"],
        ["III (anormal)", "Variabilidade ausente com desacelerações tardias recorrentes, ou variáveis recorrentes, ou bradicardia; ou padrão sinusoidal", "Reanimação intrauterina e parto imediato se não reverter"]
      ],
      nota: "Recorrente = em ≥ 50% das contrações em 20 min. Taquissistolia = > 5 contrações em 10 min (média de 30 min). FIGO 2015 usa normal / suspeito / patológico com critérios equivalentes."
    },
    {
      titulo: "Tipos de desaceleração",
      colunas: ["Tipo", "Aspecto", "Causa provável"],
      linhas: [
        ["Precoce", "Gradual, espelha a contração (nadir junto ao pico)", "Compressão do polo cefálico — benigna"],
        ["Tardia", "Gradual, nadir após o pico da contração", "Insuficiência uteroplacentária"],
        ["Variável", "Abrupta (< 30 s até o nadir), forma de V/U/W", "Compressão de cordão"],
        ["Prolongada", "Queda ≥ 15 bpm por 2–10 min", "Hipotensão, taquissistolia, prolapso de cordão, DPP, rotura"]
      ]
    }
  ],
  fontes: [
    "ACOG — Practice Bulletin nº 106: Intrapartum fetal heart rate monitoring (2009, reafirmado) e nº 116: Management of intrapartum fetal heart rate tracings (2010, reafirmado)",
    "FIGO — Consensus guidelines on intrapartum fetal monitoring: cardiotocography (2015)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) e Diretrizes Nacionais de Assistência ao Parto Normal (2017)",
    "RCOG — Green-top Guideline nº 57: Reduced fetal movements (2011)",
    "ACOG — Practice Bulletin nº 229: Antepartum fetal surveillance (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
