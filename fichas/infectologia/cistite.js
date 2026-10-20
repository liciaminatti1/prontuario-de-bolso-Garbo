// Infecção urinária baixa (cistite)
registrarFicha({
  id: "cistite",
  especialidade: "infectologia",
  caminho: "ubs",
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
  fontes: [
    "IDSA — Guidelines for uncomplicated cystitis and pyelonephritis in women (2010; atualização 2025)",
    "SBU / FEBRASGO — Infecção do trato urinário (protocolos)",
    "EAU Guidelines on Urological Infections (2025)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
