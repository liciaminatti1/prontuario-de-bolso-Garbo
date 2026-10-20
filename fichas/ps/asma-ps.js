// Crise de asma no adulto
registrarFicha({
  id: "asma-ps",
  caminho: "ps",
  titulo: "Crise de asma no adulto",
  resumo: "Dispneia, sibilância, tosse e aperto torácico em asmático conhecido ou com padrão compatível.",
  palavrasChave: "asma broncoespasmo sibilancia salbutamol ipratropio magnesio prednisona peak flow dpoc",
  critico: {
    tempo: "SABA nos primeiros 20 min",
    texto: "Salbutamol a cada 20 min na 1ª hora + corticoide sistêmico em até 1 h."
  },
  alarmes: [
    "Tórax silencioso, cianose",
    "Fala em palavras isoladas, uso de musculatura acessória",
    "SpO₂ < 90%, PFE < 50% do previsto",
    "Confusão, sonolência, bradicardia",
    "PaCO₂ normal ou elevada em crise (fadiga)"
  ],
  condutaInicial: [
    "O₂ para SpO₂ 93–95%",
    "Salbutamol 100 mcg 4–10 jatos com espaçador (ou NBZ 5 mg) a cada 20 min por 1 h",
    "Ipratrópio associado se crise grave",
    "Prednisona 40–50 mg VO (ou metilprednisolona/hidrocortisona IV)",
    "Medir PFE antes e 1 h após"
  ],
  fataisExcluir: [
    "Asma quase fatal",
    "Pneumotórax",
    "Anafilaxia",
    "Edema agudo de pulmão (asma cardíaca)",
    "TEP"
  ],
  proximaDecisao: "Após 1 h: PFE > 60–80% e SpO₂ ≥ 94% em ar ambiente → alta com corticoide e plano. PFE < 60% → magnésio IV e internação.",
  clinica: {
    anamnese: [
      "Gatilho: infecção viral, alérgeno, interrupção de corticoide inalatório, AINE/betabloqueador",
      "Tempo de sintomas, medicações já usadas",
      "Fatores de risco de óbito: intubação prévia, internação/PS no último ano, uso > 1 frasco de SABA/mês, sem corticoide inalatório"
    ],
    exameFisico: [
      "FR, FC, SpO₂, capacidade de falar",
      "Uso de musculatura acessória, pulso paradoxal",
      "Ausculta: sibilos difusos; tórax silencioso é grave",
      "Assimetria (pneumotórax)"
    ],
    diferenciais: [
      {
        dx: "DPOC exacerbado",
        pista: "Tabagista > 40 anos, dispneia crônica"
      },
      {
        dx: "Insuficiência cardíaca",
        pista: "Crepitações, B3, edema, turgência"
      },
      {
        dx: "Anafilaxia",
        pista: "Urticária, hipotensão, exposição"
      },
      {
        dx: "Disfunção de cordas vocais",
        pista: "Estridor inspiratório"
      },
      {
        dx: "Corpo estranho",
        pista: "Início súbito, sibilo localizado"
      }
    ],
    gravidade: [
      "Leve/moderada: fala frases, FC 100–120, SpO₂ 90–95%, PFE > 50%",
      "Grave: palavras, FC > 120, SpO₂ < 90%, PFE ≤ 50%",
      "Risco de vida: sonolência, tórax silencioso, bradicardia"
    ]
  },
  exames: [
    {
      nome: "Pico de fluxo expiratório (PFE)",
      pedido: "PFE antes do broncodilatador e 1 h após.",
      porQue: "Objetiva gravidade e resposta.",
      esperar: "—",
      interpretacao: "> 60–80% do previsto/melhor pessoal → alta provável. < 50% → grave.",
      limitacoes: "Não fazer em crise com risco de vida."
    },
    {
      nome: "Gasometria arterial",
      pedido: "Gasometria arterial — se SpO₂ < 90% ou crise grave sem melhora.",
      porQue: "Detectar retenção de CO₂ (fadiga).",
      esperar: "Hipocapnia na crise.",
      interpretacao: "PaCO₂ ≥ 42 mmHg em crise = falência iminente.",
      limitacoes: "—"
    },
    {
      nome: "RX de tórax",
      pedido: "RX de tórax — somente se suspeita de complicação (pneumotórax, pneumonia) ou sem resposta.",
      porQue: "Diferenciais e complicações.",
      esperar: "Hiperinsuflação.",
      interpretacao: "—",
      limitacoes: "Não é rotina."
    }
  ],
  tratamento: [
    {
      droga: "Salbutamol",
      linha: "l1",
      dose: "100 mcg/jato: 4–10 jatos com espaçador · ou NBZ 2,5–5 mg",
      via: "Inalatória",
      intervalo: "A cada 20 min na 1ª hora, depois 1–4/4h",
      duracao: "Conforme resposta",
      monitorizacao: "FC, tremor, potássio",
      contraindicacoes: "—",
      ajustes: "Espaçador é tão eficaz quanto nebulização"
    },
    {
      droga: "Brometo de ipratrópio",
      linha: "l1",
      dose: "Spray 20 mcg/jato 4–8 jatos · ou NBZ 500 mcg (40 gotas de 0,025%)",
      via: "Inalatória (com salbutamol)",
      intervalo: "A cada 20 min por 3 doses",
      duracao: "Primeira hora",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Indicado em crise moderada a grave"
    },
    {
      droga: "Prednisona",
      linha: "l1",
      dose: "40–50 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "5–7 dias (sem desmame)",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "—",
      ajustes: "Se VO impossível: metilprednisolona 40–80 mg IV ou hidrocortisona 200 mg IV"
    },
    {
      droga: "Sulfato de magnésio",
      linha: "alt",
      dose: "2 g",
      via: "IV em 20 min (em 100 mL SF)",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "PA, reflexos",
      contraindicacoes: "Insuficiência renal grave",
      ajustes: "Crise grave sem resposta inicial"
    },
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Alvo SpO₂ 93–95%",
      via: "Cateter ou máscara",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "SpO₂",
      contraindicacoes: "—",
      ajustes: "Evitar hiperóxia"
    }
  ],
  destino: {
    agora: [
      "SABA seriado + corticoide + O₂",
      "Crise com risco de vida: equipe de via aérea, considerar UTI"
    ],
    reavaliar: [
      "Após cada ciclo de SABA",
      "PFE e SpO₂ em 1 h"
    ],
    alta: [
      "PFE > 60–80%, SpO₂ ≥ 94% em ar ambiente, sem esforço",
      "Prednisona 5–7 dias + iniciar/ajustar corticoide inalatório",
      "Técnica inalatória revisada; consulta na UBS em 2–7 dias"
    ],
    observacao: [
      "Resposta parcial em 1 h: manter tratamento e reavaliar em 2–4 h"
    ],
    internacao: [
      "PFE < 60% após tratamento",
      "Fatores de risco para asma fatal",
      "Necessidade de O₂"
    ],
    transferencia: [
      "Sinais de falência (sonolência, PaCO₂ elevada) sem UTI local"
    ]
  },
  fontes: [
    "Global Initiative for Asthma (GINA) 2025",
    "SBPT — Recomendações para o manejo da asma (2020 e atualizações)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
