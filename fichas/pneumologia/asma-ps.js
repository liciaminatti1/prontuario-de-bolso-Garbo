// Crise de asma no adulto
registrarFicha({
  id: "asma-ps",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
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
    "O₂ se SpO₂ < 92%, alvo 92–95% (GINA 2026); sinais de anafilaxia → adrenalina IM primeiro",
    "Salbutamol 100 mcg 4–10 jatos com espaçador (ou NBZ 5 mg) a cada 20 min por 1 h",
    "Ipratrópio associado se crise grave",
    "Prednisona 40–50 mg VO em até 1 h na crise moderada/grave (ou metilprednisolona/hidrocortisona IV); crise leve: ICS-formoterol ou SABA, sem corticoide oral obrigatório",
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
      ajustes: "Espaçador é tão eficaz quanto nebulização. NBZ: 5 mg = 1 mL (20 gotas) da solução 5 mg/mL em 3–4 mL de SF, com O₂ 6–8 L/min. Crise leve: budesonida-formoterol 200/6 mcg 1–2 inalações é alternativa ao SABA (GINA 2026)"
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
      ajustes: "Se VO impossível: metilprednisolona 40–80 mg IV 1×/dia ou hidrocortisona 100 mg IV 6/6h (ou 200 mg dose inicial)"
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
      ajustes: "Crise grave sem resposta inicial ao SABA + ipratrópio + corticoide. Ampola 50% = 0,5 g/mL: 4 mL em 100 mL SF"
    },
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Iniciar se SpO₂ < 92%; alvo 92–95%",
      via: "Cateter ou máscara",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "SpO₂",
      contraindicacoes: "—",
      ajustes: "Evitar hiperóxia (SpO₂ > 95%). Oximetria pode superestimar a saturação em pele escura"
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
  prescricao: {
    hospitalar: "PRESCRIÇÃO — SALA DE EMERGÊNCIA (CRISE MODERADA A GRAVE, ADULTO)\n1. Dieta zero enquanto dispneia importante; depois dieta livre.\n2. O₂ por cateter nasal ou máscara se SpO₂ < 92%; alvo SpO₂ 92–95%.\n3. Salbutamol spray 100 mcg/jato: 4 a 10 jatos com espaçador a cada 20 minutos na 1ª hora (3 ciclos).\n   OU nebulização: salbutamol 5 mg (20 gotas de 5 mg/mL) + SF 0,9% 3 mL com O₂ 6–8 L/min a cada 20 minutos na 1ª hora.\n4. Brometo de ipratrópio: 4 a 8 jatos de 20 mcg com espaçador (ou 500 mcg = 40 gotas de 0,25 mg/mL na nebulização, junto ao salbutamol) a cada 20 minutos na 1ª hora.\n5. Prednisona 40 mg VO agora (ou metilprednisolona 40 mg IV, ou hidrocortisona 200 mg IV se VO impossível).\n6. Se grave sem resposta após 1 h: sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL IV em 20 minutos, dose única.\n7. Depois da 1ª hora: salbutamol 4–8 jatos de 1 em 1 hora até de 4 em 4 horas, conforme resposta.\n8. Cuidados: monitor, oximetria contínua, FR, FC e PFE antes e 1 h após; gasometria se SpO₂ < 90% ou piora; cabeceira elevada.\n9. Sinais de anafilaxia: adrenalina 0,5 mg IM (0,5 mL de 1 mg/mL) antes dos broncodilatadores.\n\nALTA (USO ORAL E INALATÓRIO)\n1. Prednisona 20 mg ------------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.\n2. Budesonida + formoterol 200/6 mcg inalador ------ 1 unidade\n   Inalar 1 dose de 12 em 12 horas (manutenção) e 1 dose a mais se falta de ar (máx 12 doses/dia).\n   OU (se indisponível) Beclometasona 250 mcg spray: 1 jato de 12 em 12 horas com espaçador + salbutamol 100 mcg: 2 a 4 jatos com espaçador se falta de ar."
  },
  orientacoesRetorno: [
    "Usar o corticoide oral até o fim e o inalador de manutenção todos os dias, mesmo sem sintomas",
    "Usar sempre espaçador com bombinha; enxaguar a boca após o corticoide inalatório",
    "Evitar fumaça, poeira e outros gatilhos; não usar AINE ou betabloqueador se já piorou com eles",
    "Voltar imediatamente se falta de ar que não melhora com a bombinha, dificuldade para falar, lábios roxos, sonolência ou necessidade de bombinha de alívio com intervalos menores que 3–4 horas",
    "Consulta na UBS em 2 a 7 dias para revisar técnica inalatória, plano de ação por escrito e tratamento de manutenção"
  ],
  fontes: [
    "Global Initiative for Asthma (GINA) — Global Strategy for Asthma Management and Prevention (2026)",
    "Ministério da Saúde — PCDT Asma (2023)",
    "SBPT — Recomendações para o manejo da asma (2020)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
