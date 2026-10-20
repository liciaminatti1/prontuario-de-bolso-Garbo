// Enxaqueca e cefaleias primárias na UBS
registrarFicha({
  id: "enxaqueca",
  especialidade: "neurologia",
  caminho: "ubs",
  titulo: "Enxaqueca e cefaleia tensional",
  resumo: "Diagnóstico das cefaleias primárias, tratamento da crise e indicação de profilaxia na atenção primária.",
  palavrasChave: "enxaqueca migranea cefaleia tensional dor de cabeca profilaxia propranolol amitriptilina topiramato triptano sumatriptana",
  critico: {
    tempo: "Procure sinais de alarme",
    texto: "Cefaleia nova após 50 anos, súbita, progressiva, com febre, déficit ou mudança de padrão não é primária até prova em contrário (ver Cefaleia no PS)."
  },
  alarmes: [
    "Início súbito / pior dor da vida",
    "Febre, rigidez de nuca, déficit neurológico, papiledema",
    "Primeira cefaleia após 50 anos ou padrão progressivo",
    "Imunossupressão, câncer, gestação",
    "Uso de analgésico ≥ 10–15 dias/mês (cefaleia por uso excessivo)"
  ],
  condutaInicial: [
    "Excluir sinais de alarme (SNOOP)",
    "Classificar: enxaqueca, tensional, salvas, uso excessivo de medicação",
    "Diário de cefaleia por 4–8 semanas",
    "Tratar a crise precocemente com analgésico/AINE ± antiemético",
    "Profilaxia se ≥ 4 dias de crise/mês, crises incapacitantes ou falha do tratamento agudo"
  ],
  fataisExcluir: [
    "Cefaleia secundária (HSA, meningite, tumor, TVC, arterite)",
    "Pré-eclâmpsia em gestante",
    "Intoxicação por monóxido de carbono"
  ],
  proximaDecisao: "Reavaliar a profilaxia após 2–3 meses de dose adequada. Resposta = redução ≥ 50% dos dias de dor. Manter 6–12 meses e tentar desmame.",
  clinica: {
    anamnese: [
      "Frequência, duração, localização, caráter, intensidade",
      "Aura, náusea, fotofobia, fonofobia, piora com atividade",
      "Gatilhos: sono, jejum, álcool, estresse, ciclo menstrual",
      "Medicações usadas e dias de uso por mês",
      "Anticoncepcional com estrogênio (contraindicado na enxaqueca com aura)",
      "Comorbidades: depressão, ansiedade, insônia, HAS, asma (orienta profilaxia)"
    ],
    exameFisico: [
      "PA, exame neurológico, fundo de olho",
      "Palpação pericraniana e cervical",
      "Articulação temporomandibular"
    ],
    diferenciais: [
      { dx: "Enxaqueca sem aura", pista: "4–72 h, unilateral, pulsátil, moderada/forte, piora com atividade, náusea ou foto/fonofobia" },
      { dx: "Enxaqueca com aura", pista: "Sintomas visuais/sensitivos reversíveis de 5–60 min antes da dor" },
      { dx: "Cefaleia tensional", pista: "Bilateral, em pressão, leve/moderada, não piora com atividade" },
      { dx: "Cefaleia em salvas", pista: "Orbitária, 15–180 min, lacrimejamento, rinorreia, inquietação" },
      { dx: "Cefaleia por uso excessivo de medicação", pista: "≥ 15 dias/mês com uso frequente de analgésico" }
    ],
    gravidade: [
      "Enxaqueca crônica: ≥ 15 dias/mês por > 3 meses (≥ 8 com características de enxaqueca)",
      "Incapacidade: escala MIDAS"
    ]
  },
  exames: [
    {
      nome: "Neuroimagem",
      pedido: "Não solicitar em cefaleia primária típica com exame neurológico normal. RM de crânio (ou TC) apenas se sinal de alarme ou mudança de padrão.",
      porQue: "Imagem não muda conduta na cefaleia primária típica.",
      esperar: "—",
      interpretacao: "Achados incidentais geram ansiedade e encaminhamentos desnecessários.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Dipirona / paracetamol / AINE (crise)",
      linha: "l1",
      dose: "Dipirona 1 g · paracetamol 1 g · ibuprofeno 400–600 mg · naproxeno 550 mg",
      via: "VO",
      intervalo: "Dose única no início da dor; pode repetir após 2–4 h",
      duracao: "Limitar a < 10–15 dias/mês",
      monitorizacao: "Dias de uso por mês",
      contraindicacoes: "AINE: úlcera, DRC, gestação 3º tri",
      ajustes: "Associar metoclopramida 10 mg se náusea"
    },
    {
      droga: "Sumatriptana (crise moderada/forte)",
      linha: "alt",
      dose: "50–100 mg",
      via: "VO",
      intervalo: "Repetir após 2 h se recorrência (máx 200 mg/dia)",
      duracao: "Limitar a < 10 dias/mês",
      monitorizacao: "Opressão torácica",
      contraindicacoes: "DCV, AVC, HAS não controlada, enxaqueca hemiplégica, gestação (relativa)",
      ajustes: "Pode associar naproxeno 500 mg (maior eficácia)"
    },
    {
      droga: "Propranolol (profilaxia)",
      linha: "l1",
      dose: "Iniciar 20–40 mg/dia; alvo 80–160 mg/dia",
      via: "VO",
      intervalo: "2×/dia",
      duracao: "6–12 meses",
      monitorizacao: "FC, PA, fadiga",
      contraindicacoes: "Asma, bradicardia, BAV, depressão grave",
      ajustes: "Bom para HAS associada ou ansiedade"
    },
    {
      droga: "Amitriptilina (profilaxia)",
      linha: "l1",
      dose: "10–25 mg ao deitar; até 50–75 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "6–12 meses",
      monitorizacao: "Sonolência, boca seca, peso, constipação",
      contraindicacoes: "Arritmia, glaucoma, retenção urinária, idoso frágil",
      ajustes: "Também eficaz na tensional crônica; útil com insônia/depressão"
    },
    {
      droga: "Topiramato (profilaxia)",
      linha: "alt",
      dose: "25 mg/dia, aumentar 25 mg/semana até 50 mg 12/12h",
      via: "VO",
      intervalo: "12/12h",
      duracao: "6–12 meses",
      monitorizacao: "Parestesias, cognição, litíase",
      contraindicacoes: "Gestação (teratogênico), litíase renal",
      ajustes: "Reduz eficácia de anticoncepcional oral em doses altas; bom com obesidade"
    },
    {
      droga: "Flunarizina (profilaxia)",
      linha: "alt",
      dose: "5–10 mg à noite",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até 6 meses",
      monitorizacao: "Peso, depressão, parkinsonismo (idosos)",
      contraindicacoes: "Depressão, parkinsonismo",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Tratar a crise, orientar diário e iniciar profilaxia se indicada"
    ],
    reavaliar: [
      "4–8 semanas após início da profilaxia; eficácia em 2–3 meses"
    ],
    alta: [
      "Seguimento na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "—"
    ],
    transferencia: [
      "Neurologia: dúvida diagnóstica, falha de 2–3 profiláticos, cefaleia em salvas, enxaqueca crônica refratária",
      "PS: qualquer sinal de alarme ou crise refratária > 72 h"
    ]
  },
  fontes: [
    "ICHD-3 — Classificação Internacional das Cefaleias (2018)",
    "SBCe — Consenso da Sociedade Brasileira de Cefaleia: tratamento profilático da migrânea (2022)",
    "AHS Consensus Statement (2021)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
