// Enxaqueca e cefaleias primárias na UBS
registrarFicha({
  id: "enxaqueca",
  especialidade: "neurologia",
  caminho: "ubs",
  publico: "adulto",
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
      ajustes: "Pode associar naproxeno 500 mg (maior eficácia). Tomar no início da dor, não durante a aura. Não consta na RENAME (compra pela farmácia); alternativa SUS: dipirona/AINE + metoclopramida"
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
      ajustes: "Disponível no SUS em alguns municípios; conferir REMUME"
    },
    {
      droga: "Anticorpos anti-CGRP / gepantes (profilaxia)",
      linha: "alt",
      dose: "Conforme bula (erenumabe, fremanezumabe, galcanezumabe mensais SC)",
      via: "SC",
      intervalo: "Mensal (ou trimestral para fremanezumabe)",
      duracao: "Reavaliar em 3–6 meses",
      monitorizacao: "Constipação, reação no local, PA (erenumabe)",
      contraindicacoes: "Gestação",
      ajustes: "AHS 2024: opção de 1ª linha sem exigir falha prévia, mas sem cobertura no SUS. Prescrição pela neurologia"
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
  prescricao: {
    ambulatorial: "TRATAMENTO DA CRISE (USO ORAL)\n1. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 2 comprimidos (1 g) no início da dor; pode repetir após 4 horas (máx 4 g/dia).\n   OU Ibuprofeno 600 mg, 1 comprimido no início da dor, após comer; pode repetir após 8 horas.\n2. Metoclopramida 10 mg ------------------------------ 10 comprimidos\n   Tomar 1 comprimido junto com o analgésico se náusea (máx 3 por dia).\n3. (Crise forte sem resposta ao analgésico) Sumatriptana 50 mg ---- 6 comprimidos\n   Tomar 1 comprimido no início da dor; se voltar, repetir após 2 horas (máx 200 mg/dia).\n   Usar remédio para crise no máximo 2 a 3 dias por semana.\n\nPROFILAXIA (USO ORAL — escolher uma)\n4. Propranolol 40 mg -------------------------------- 60 comprimidos\n   Tomar meio comprimido (20 mg) de 12 em 12 horas na 1ª semana; depois 1 comprimido de 12 em 12 horas. Uso contínuo.\n   OU Amitriptilina 25 mg ----------------------------- 30 comprimidos\n   Tomar meio comprimido (12,5 mg) à noite por 1 semana; depois 1 comprimido à noite. Uso contínuo.\n   OU Topiramato 25 mg ------------------------------- 60 comprimidos\n   Tomar 1 comprimido à noite; aumentar 25 mg por semana até 50 mg de 12 em 12 horas. Usar método contraceptivo eficaz."
  },
  orientacoesRetorno: [
    "Anotar no diário de cefaleia os dias de dor, a intensidade e os remédios tomados",
    "Remédio para crise: tomar logo no começo da dor; evitar usar mais de 2 a 3 dias por semana (risco de cefaleia por uso excessivo)",
    "Dormir em horários regulares, não pular refeições, beber água, fazer atividade física, reduzir álcool e cafeína em excesso",
    "O preventivo leva 4 a 8 semanas para começar a funcionar; não parar antes do retorno",
    "Mulheres com enxaqueca com aura não devem usar anticoncepcional com estrogênio",
    "Procurar o PS imediatamente se dor súbita e muito forte, febre com rigidez de nuca, fraqueza, dormência, fala enrolada, confusão, convulsão, dor diferente da habitual ou crise que não passa em 72 horas",
    "Retorno na UBS em 4 a 8 semanas com o diário"
  ],
  fontes: [
    "ICHD-3 — Classificação Internacional das Cefaleias (2018)",
    "SBCe — Consenso da Sociedade Brasileira de Cefaleia: tratamento profilático da migrânea, partes I e II (Arq Neuropsiquiatr, 2022)",
    "SBCe — Consenso sobre tratamento agudo da migrânea em adultos e crianças (2016)",
    "AHS — Position statement: CGRP-targeting therapies as first-line option for migraine prevention (Headache, 2024)",
    "AHS Consensus Statement (2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
