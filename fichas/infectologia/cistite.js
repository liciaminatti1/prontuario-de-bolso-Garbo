// Infecção urinária baixa (cistite)
registrarFicha({
  id: "cistite",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Infecção urinária baixa (cistite)",
  resumo: "Disúria, polaciúria, urgência e dor suprapúbica, sem febre ou dor lombar, em mulher não gestante.",
  palavrasChave: "itu infeccao urinaria cistite disuria nitrofurantoina fosfomicina pielonefrite urocultura",
  critico: {
    tempo: "Diagnóstico clínico",
    texto: "Mulher não gestante com sintomas típicos e sem corrimento: tratar sem exame. Febre ou dor lombar = pielonefrite."
  },
  alarmes: [
    "Febre, calafrios, dor lombar, Giordano positivo",
    "Vômitos ou incapacidade de usar VO",
    "Gestação",
    "Homem, imunossuprimido, sonda vesical, anomalia urinária",
    "Sinais de sepse"
  ],
  condutaInicial: [
    "Confirmar ausência de febre e dor lombar",
    "Excluir gestação quando possível",
    "Perguntar sobre corrimento/prurido (vaginite, IST)",
    "Tratar empiricamente com nitrofurantoína ou fosfomicina",
    "Orientar hidratação e retorno se não melhorar em 48–72 h"
  ],
  fataisExcluir: [
    "Pielonefrite com sepse",
    "Pielonefrite obstrutiva",
    "ITU em gestante não tratada"
  ],
  proximaDecisao: "Cistite não complicada → tratamento empírico curto. Recorrência (≥ 2 em 6 meses ou ≥ 3 em 1 ano), falha ou caso complicado → urocultura e reavaliação.",
  clinica: {
    anamnese: [
      "Sintomas, duração, febre, dor lombar",
      "Episódios prévios e antibióticos recentes",
      "Corrimento, prurido, dispareunia, parceria nova",
      "DUM e possibilidade de gestação",
      "Comorbidades: DM, litíase, imunossupressão"
    ],
    exameFisico: [
      "Temperatura, FC, PA",
      "Punho-percussão lombar (Giordano)",
      "Palpação suprapúbica",
      "Exame ginecológico se corrimento"
    ],
    diferenciais: [
      {
        dx: "Vaginite / cervicite",
        pista: "Corrimento, prurido; disúria externa"
      },
      {
        dx: "Uretrite (IST)",
        pista: "Corrimento uretral, parceria nova"
      },
      {
        dx: "Pielonefrite",
        pista: "Febre, dor lombar"
      },
      {
        dx: "Litíase",
        pista: "Cólica, hematúria"
      },
      {
        dx: "Síndrome da bexiga dolorosa",
        pista: "Sintomas crônicos com culturas negativas"
      }
    ],
    gravidade: [
      "Complicada: homem, gestante, alteração anatômica/funcional, cateter, imunossupressão, DRC"
    ]
  },
  exames: [
    {
      nome: "Urina tipo 1 / fita",
      pedido: "Urina tipo 1 (EAS) — opcional na cistite típica.",
      porQue: "Apoio quando a clínica é atípica.",
      esperar: "Leucocitúria, nitrito positivo, hematúria.",
      interpretacao: "Nitrito + leucócitos aumentam probabilidade; negativos não excluem.",
      limitacoes: "Não é necessário em quadro típico em mulher não gestante."
    },
    {
      nome: "Urocultura com antibiograma",
      pedido: "Urocultura com antibiograma — coletar antes do antibiótico.",
      porQue: "Indicada em gestante, homem, recorrência, falha, pielonefrite ou caso complicado.",
      esperar: "≥ 10⁵ UFC/mL (≥ 10³ com sintomas pode ser significativo).",
      interpretacao: "Ajustar antibiótico pelo antibiograma.",
      limitacoes: "Não tratar bacteriúria assintomática (exceto gestante e antes de procedimento urológico)."
    }
  ],
  tratamento: [
    {
      droga: "Nitrofurantoína",
      linha: "l1",
      dose: "100 mg",
      via: "VO",
      intervalo: "6/6h (macrocristais) — ou 100 mg 12/12h na apresentação de liberação modificada",
      duracao: "5 dias",
      monitorizacao: "Náusea",
      contraindicacoes: "TFG < 30 (relativa < 45), gestação a termo",
      ajustes: "Não usar em pielonefrite"
    },
    {
      droga: "Fosfomicina trometamol",
      linha: "l1",
      dose: "3 g",
      via: "VO, diluída em água, à noite após urinar",
      intervalo: "Dose única",
      duracao: "1 dia",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Boa opção para adesão"
    },
    {
      droga: "Cefalexina",
      linha: "alt",
      dose: "500 mg",
      via: "VO",
      intervalo: "6/6h",
      duracao: "5–7 dias",
      monitorizacao: "—",
      contraindicacoes: "Alergia grave a betalactâmicos",
      ajustes: "Opção na gestação"
    },
    {
      droga: "Sulfametoxazol-trimetoprima",
      linha: "alt",
      dose: "800/160 mg",
      via: "VO",
      intervalo: "12/12h",
      duracao: "3 dias",
      monitorizacao: "Hipercalemia, rash",
      contraindicacoes: "Gestação (1º e 3º tri), resistência local > 20%",
      ajustes: "Usar só se resistência local conhecida baixa"
    },
    {
      droga: "Fluoroquinolonas",
      linha: "ci",
      dose: "Evitar na cistite simples",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Efeitos adversos graves; reservar para pielonefrite",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Tratamento empírico e orientação"
    ],
    reavaliar: [
      "Sem melhora em 48–72 h → urocultura e trocar antibiótico",
      "Sintomas recorrendo em 2 semanas → urocultura"
    ],
    alta: [
      "Tratamento domiciliar; não é necessário urina de controle se assintomática"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Pielonefrite com vômitos, sepse ou gestante com pielonefrite"
    ],
    transferencia: [
      "Sinais de sepse ou obstrução → PS"
    ]
  },
  prescricao: {
    ambulatorial: "CISTITE NÃO COMPLICADA — MULHER NÃO GESTANTE (escolher uma opção)\nUSO ORAL\n1. Nitrofurantoína 100 mg (macrocristais) -------- 20 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas, com alimento, por 5 dias.\n   OU\n1. Fosfomicina trometamol 3 g ------------------- 1 envelope\n   Dissolver em meio copo de água e tomar em dose única, à noite, após esvaziar a bexiga.\n   OU (alergia/intolerância às anteriores)\n1. Cefalexina 500 mg ----------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n\nSINTOMÁTICOS\n2. Fenazopiridina 200 mg ------------------------- 6 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas por até 2 dias se ardor forte (deixa a urina laranja).\n3. Dipirona 500 mg ------------------------------- 24 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor, por até 3 dias.\n\nGESTANTE: urocultura antes; cefalexina 500 mg de 6/6 h por 7 dias ou nitrofurantoína (evitar no termo), ajustar pelo antibiograma; urocultura de controle 1–2 semanas após."
  },
  orientacoesRetorno: [
    "Beber bastante água e não segurar a urina",
    "Os sintomas devem melhorar em 48–72 h; tomar o antibiótico até o fim",
    "Voltar imediatamente se febre, calafrios, dor nas costas (lombar), vômitos ou piora do estado geral (pode ser infecção nos rins)",
    "Voltar se não melhorar em 48–72 h ou se os sintomas voltarem em até 2 semanas (precisa de urocultura)",
    "Se corrimento, coceira ou dor na relação, avisar: pode ser outra infecção",
    "Não precisa repetir exame de urina se ficar sem sintomas (exceto gestante)"
  ],
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h ou sintomas que voltam em até 2–4 semanas", "Urocultura com antibiograma antes de trocar; trocar para outra classe (nitrofurantoína, fosfomicina ou cefalexina, a que não foi usada)", "Rever diagnóstico: vaginite, IST, litíase, pielonefrite; tratar como cistite complicada"],
        ["Antibiograma com resistência ao antibiótico em uso", "Trocar para opção oral sensível, mesmo que os sintomas tenham melhorado parcialmente", "Nitrofurantoína e fosfomicina costumam manter atividade contra E. coli ESBL"],
        ["E. coli ESBL ou multirresistente", "Nitrofurantoína ou fosfomicina se sensíveis no antibiograma", "Sem opção oral sensível: discutir com infectologia (pode exigir via IV/IM)"],
        ["Resistência local a SMX-TMP > 20% ou uso recente dele", "Não usar SMX-TMP empírico; só guiado por antibiograma", "IDSA/ESCMID; resistência comunitária alta no Brasil"],
        ["Alergia a betalactâmico", "Nitrofurantoína ou fosfomicina", "Fluoroquinolona só se nenhuma outra opção, guiada por antibiograma"],
        ["Febre, dor lombar, calafrios ou vômitos", "Tratar como pielonefrite (ver ficha); internar se sepse ou sem tolerância oral", "Nitrofurantoína e fosfomicina não atingem nível adequado no rim"]
      ]
    }
  ],
  fontes: [
    "IDSA/ESCMID — International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women (2010; atualização em andamento)",
    "IDSA — Guideline on Management of Complicated Urinary Tract Infections (2025)",
    "EAU Guidelines on Urological Infections (2025)",
    "FEBRASGO — Infecção do trato urinário (protocolo)"
  ],
  revisao: "2026-10-25",
  versao: "1.2"
});
