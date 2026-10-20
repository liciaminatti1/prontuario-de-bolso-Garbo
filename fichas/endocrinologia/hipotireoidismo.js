// Hipotireoidismo
registrarFicha({
  id: "hipotireoidismo",
  especialidade: "endocrinologia",
  caminho: "ubs",
  titulo: "Hipotireoidismo",
  resumo: "TSH elevado com T4 livre baixo (clínico) ou normal (subclínico). Diagnóstico, início e ajuste de levotiroxina.",
  palavrasChave: "hipotireoidismo tireoide tsh t4 livre levotiroxina hashimoto bocio subclinico",
  critico: {
    tempo: "Idoso ou cardiopata: dose baixa",
    texto: "Iniciar levotiroxina com 12,5–25 mcg/dia e subir devagar. Jovens sem cardiopatia toleram dose plena (1,6 mcg/kg/dia)."
  },
  alarmes: [
    "Rebaixamento, hipotermia, bradicardia, hiponatremia → coma mixedematoso (PS)",
    "Gestante ou planejando gestar com TSH alterado",
    "Angina ao iniciar levotiroxina",
    "TSH baixo com T4 baixo (hipotireoidismo central)",
    "Bócio volumoso, nódulo ou compressão"
  ],
  condutaInicial: [
    "Confirmar TSH alterado em nova dosagem com T4 livre (4–12 semanas, exceto se TSH muito alto ou gestante)",
    "Anti-TPO para definir etiologia autoimune",
    "Clínico: levotiroxina",
    "Subclínico: tratar se TSH ≥ 10, gestação ou desejo de gestar; individualizar se 4,5–10",
    "Orientar tomada em jejum e interações"
  ],
  fataisExcluir: [
    "Coma mixedematoso",
    "Insuficiência adrenal associada (corrigir cortisol antes da levotiroxina)",
    "Hipotireoidismo central (doença hipofisária)"
  ],
  proximaDecisao: "Dosar TSH 6–8 semanas após cada ajuste. Ajustar 12,5–25 mcg por vez até TSH na faixa alvo; depois TSH anual.",
  clinica: {
    anamnese: [
      "Cansaço, intolerância ao frio, ganho de peso, constipação, pele seca, queda de cabelo, depressão, alteração menstrual",
      "Gestação ou planejamento, pós-parto",
      "Medicações: amiodarona, lítio, interferon, imunoterapia",
      "Cirurgia de tireoide, iodo radioativo, radioterapia cervical",
      "Doenças autoimunes associadas, história familiar"
    ],
    exameFisico: [
      "Palpação da tireoide (bócio, nódulos)",
      "FC, PA (bradicardia, HAS diastólica)",
      "Pele, edema não depressível, reflexos lentificados",
      "Peso"
    ],
    diferenciais: [
      { dx: "Fase de recuperação de doença não tireoidiana", pista: "TSH transitoriamente alto após internação" },
      { dx: "Tireoidite pós-parto / subaguda", pista: "Fase hipotireóidea transitória" },
      { dx: "Interferência laboratorial", pista: "Biotina em altas doses, anticorpos heterofílicos" },
      { dx: "Depressão", pista: "Sintomas semelhantes com TSH normal" }
    ],
    gravidade: [
      "Coma mixedematoso: emergência, mortalidade alta",
      "TSH > 10 tem maior risco cardiovascular e progressão"
    ]
  },
  exames: [
    {
      nome: "TSH e T4 livre",
      pedido: "TSH e T4 livre.",
      porQue: "Diagnóstico e acompanhamento.",
      esperar: "TSH alto; T4L baixo (clínico) ou normal (subclínico).",
      interpretacao: "Meta de TSH em adultos: faixa de referência (em idosos > 70 anos, aceitar 4–7). Gestação: alvos por trimestre.",
      limitacoes: "Suspender biotina 2–3 dias antes da coleta. TSH demora 6–8 semanas para estabilizar."
    },
    {
      nome: "Anti-TPO",
      pedido: "Anticorpo antitireoperoxidase (anti-TPO).",
      porQue: "Confirma tireoidite de Hashimoto e prediz progressão do subclínico.",
      esperar: "Positivo na maioria dos hipotireoidismos primários.",
      interpretacao: "Positivo + subclínico → maior chance de evolução; favorece tratar.",
      limitacoes: "Não repetir."
    },
    {
      nome: "Ultrassonografia de tireoide",
      pedido: "Ultrassonografia de tireoide — apenas se nódulo palpável ou bócio assimétrico.",
      porQue: "Avaliar nódulos.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não é necessária para diagnosticar hipotireoidismo."
    }
  ],
  tratamento: [
    {
      droga: "Levotiroxina",
      linha: "l1",
      dose: "Adulto jovem sem cardiopatia: 1,6 mcg/kg/dia · idoso ou cardiopata: 12,5–25 mcg/dia · subclínico: 25–50 mcg/dia",
      via: "VO, em jejum, 30–60 min antes do café",
      intervalo: "1×/dia",
      duracao: "Em geral por toda a vida",
      monitorizacao: "TSH 6–8 semanas após cada ajuste; depois anual. Palpitações, angina",
      contraindicacoes: "Tireotoxicose; insuficiência adrenal não tratada",
      ajustes: "Ajustes de 12,5–25 mcg. Separar 4 h de cálcio, ferro, antiácidos. IBP e ganho de peso aumentam a necessidade"
    },
    {
      droga: "Levotiroxina na gestação",
      linha: "l1",
      dose: "Já em uso: aumentar ~25–30% ao confirmar gestação (ex.: 2 comprimidos extras por semana)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Retornar à dose prévia após o parto",
      monitorizacao: "TSH a cada 4 semanas até 20 semanas",
      contraindicacoes: "—",
      ajustes: "Encaminhar ao pré-natal de alto risco conforme protocolo local"
    }
  ],
  destino: {
    agora: [
      "Confirmar diagnóstico e iniciar levotiroxina quando indicado"
    ],
    reavaliar: [
      "TSH 6–8 semanas após início ou ajuste",
      "Estável: TSH anual",
      "Subclínico não tratado: TSH a cada 6–12 meses"
    ],
    alta: [
      "Seguimento na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Coma mixedematoso"
    ],
    transferencia: [
      "Endocrinologia: hipotireoidismo central, gestante com difícil controle, nódulo suspeito, cardiopatia grave, TSH persistentemente alto apesar de doses altas",
      "PS: rebaixamento, hipotermia, bradicardia grave"
    ]
  },
  fontes: [
    "SBEM — Consenso Brasileiro para Abordagem Clínica e Tratamento do Hipotireoidismo em Adultos (2013) e atualizações",
    "ATA — Guidelines for the Treatment of Hypothyroidism (2014)",
    "ATA — Guidelines for Thyroid Disease During Pregnancy (2017)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
