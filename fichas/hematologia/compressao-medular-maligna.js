// Compressão medular maligna
registrarFicha({
  id: "compressao-medular-maligna",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Compressão medular maligna",
  resumo: "Compressão da medula ou cauda equina por metástase vertebral ou tumor epidural. Dor nas costas em paciente com câncer é o primeiro sinal; o déficit neurológico ao diagnóstico define o prognóstico de marcha. Emergência oncológica.",
  palavrasChave: "compressao medular maligna metastase vertebral coluna dor nas costas cancer paraparesia paraplegia cauda equina retencao urinaria dexametasona ressonancia radioterapia neurocirurgia mieloma prostata mama pulmao",
  critico: {
    tempo: "Déficit: RM e cirurgia em 24 h",
    texto: "Câncer + dor nas costas + qualquer sinal neurológico: dexametasona 16 mg agora, RM de toda a coluna em até 24 h e contato com neurocirurgia/radioterapia no mesmo dia."
  },
  alarmes: [
    "Fraqueza nas pernas, dificuldade para andar, quedas",
    "Alteração de sensibilidade com nível sensitivo, dormência em sela",
    "Retenção urinária, incontinência, constipação nova",
    "Dor torácica ou lombar progressiva, noturna, que piora deitado, em faixa, ou com tosse/esforço",
    "Dor em coluna torácica (incomum em dor mecânica)",
    "Perda rápida de força (horas) — pior prognóstico"
  ],
  condutaInicial: [
    "Exame neurológico completo e documentado: força por grupo, nível sensitivo, reflexos, tônus anal, resíduo pós-miccional",
    "Dexametasona 16 mg (VO ou IV) imediatamente se déficit neurológico, com proteção gástrica",
    "Imobilização em decúbito plano e mobilização em bloco se dor mecânica intensa ou suspeita de instabilidade",
    "RM de toda a coluna (cervical, torácica e lombossacra) em até 24 h com déficit; TC se RM indisponível ou contraindicada",
    "Analgesia adequada (opioide), profilaxia de TEV, sondagem vesical se retenção",
    "Contato no mesmo dia com oncologia, neurocirurgia/ortopedia de coluna e radioterapia",
    "Sem câncer conhecido: investigar o primário (TC de tórax/abdome/pelve, eletroforese de proteínas, PSA); biópsia antes do corticoide se suspeita de linfoma e quadro permitir"
  ],
  fataisExcluir: [
    "Síndrome da cauda equina",
    "Abscesso epidural / espondilodiscite (febre, imunossupressão, usuário de drogas IV)",
    "Hematoma epidural (anticoagulado)",
    "Fratura patológica instável",
    "Hipercalcemia (confusão, constipação, poliúria)"
  ],
  proximaDecisao: "RM confirma compressão → decisão conjunta em 24 h: cirurgia de descompressão/estabilização (instabilidade, tumor radiorresistente, compressão por fragmento ósseo, piora durante radioterapia, bom performance status e expectativa de vida > 3 meses) seguida de radioterapia; ou radioterapia isolada. Paraplegia completa há > 48 h tem pouca chance de recuperação.",
  clinica: {
    anamnese: [
      "Câncer conhecido (pulmão, mama, próstata, rim, mieloma, linfoma são os mais comuns)",
      "Dor: localização, tempo, piora ao deitar, à noite, com tosse/espirro, irradiação em faixa",
      "Fraqueza, parestesias, desequilíbrio, alterações urinárias e intestinais e o tempo de evolução",
      "Anticoagulantes, febre, perda de peso"
    ],
    exameFisico: [
      "Força (escala 0–5) em membros, marcha se possível",
      "Nível sensitivo, sensibilidade perineal (sela)",
      "Reflexos, Babinski, clônus (lesão medular) × arreflexia (cauda equina)",
      "Tônus esfincteriano anal, globo vesical",
      "Dor à percussão vertebral"
    ],
    diferenciais: [
      { dx: "Dor lombar mecânica", pista: "Sem câncer, melhora com repouso, sem déficit" },
      { dx: "Abscesso epidural", pista: "Febre, PCR alta, fatores de risco" },
      { dx: "Hérnia de disco com compressão", pista: "Sem neoplasia, início após esforço" },
      { dx: "Metástase leptomeníngea / cerebral", pista: "Cefaleia, pares cranianos, sinais encefálicos" },
      { dx: "Mielopatia por radiação ou paraneoplásica", pista: "RM sem compressão" },
      { dx: "Síndrome de Guillain-Barré", pista: "Fraqueza ascendente arreflexa sem nível sensitivo" }
    ],
    gravidade: [
      "Capacidade de andar ao diagnóstico é o principal preditor de marcha após tratamento",
      "Déficit motor de evolução rápida (< 48 h) tem pior recuperação",
      "Escala SINS (Spinal Instability Neoplastic Score) orienta a estabilidade: decisão da equipe de coluna"
    ]
  },
  exames: [
    {
      nome: "RM de toda a coluna",
      pedido: "Ressonância magnética de coluna total (cervical, torácica e lombossacra), com e sem contraste — suspeita de compressão medular maligna. URGENTE.",
      porQue: "Confirmar e planejar cirurgia/radioterapia; até 1/3 tem múltiplos níveis.",
      esperar: "Em até 24 h se déficit; em até 1 semana se só dor suspeita (NICE 2023).",
      interpretacao: "Compressão do saco tecal/medula por massa epidural.",
      limitacoes: "Marca-passo e implantes: TC (mielotomografia) como alternativa."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, creatinina, cálcio (corrigido ou iônico), albumina, sódio, potássio, glicemia, TP/INR, TTPa, PCR. Se primário desconhecido: eletroforese de proteínas séricas, PSA (homem), DHL.",
      porQue: "Hipercalcemia, preparo cirúrgico, mieloma, abscesso.",
      esperar: "—",
      interpretacao: "Cálcio alto agrava sintomas e precisa ser tratado.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Dexametasona",
      linha: "l1",
      dose: "16 mg/dia (pode ser dada como 16 mg de ataque e depois 8 mg 12/12 h ou 4 mg 6/6 h)",
      via: "VO ou IV",
      intervalo: "Conforme esquema",
      duracao: "Até o tratamento definitivo; depois reduzir em 5–7 dias (ou conforme oncologia)",
      monitorizacao: "Glicemia capilar, PA, humor, infecção",
      contraindicacoes: "Suspeita de linfoma sem diagnóstico e quadro neurológico estável (discutir biópsia antes)",
      ajustes: "Doses muito altas (ex.: 96 mg) não mostraram benefício e têm mais efeitos adversos. Associar IBP (omeprazol 20–40 mg/dia)"
    },
    {
      droga: "Morfina",
      linha: "l1",
      dose: "2–4 mg IV a cada 4 h se dor (ou 5–10 mg VO de 4/4 h)",
      via: "IV ou VO",
      intervalo: "4/4 h e resgates",
      duracao: "Conforme dor",
      monitorizacao: "FR, sedação, constipação",
      contraindicacoes: "Depressão respiratória",
      ajustes: "Associar laxativo (lactulose ou bisacodil). Reduzir dose em idosos e DRC"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "adj",
      dose: "40 mg",
      via: "SC",
      intervalo: "1×/dia",
      duracao: "Durante a imobilidade",
      monitorizacao: "Plaquetas",
      contraindicacoes: "Sangramento, cirurgia iminente (suspender conforme equipe)",
      ajustes: "Ajuste renal. Profilaxia mecânica se contraindicada"
    },
    {
      droga: "Radioterapia / cirurgia",
      linha: "l1",
      dose: "Definidas pela equipe",
      via: "—",
      intervalo: "—",
      duracao: "Início idealmente em 24 h",
      monitorizacao: "Exame neurológico seriado",
      contraindicacoes: "—",
      ajustes: "Cirurgia + radioterapia supera radioterapia isolada em pacientes selecionados (Patchell 2005)"
    }
  ],
  destino: {
    agora: ["Dexametasona, imobilização se instável, analgesia, RM urgente"],
    reavaliar: ["Exame neurológico a cada 4–6 h", "Diurese e resíduo pós-miccional"],
    alta: ["Somente após tratamento definitivo e plano de reabilitação"],
    observacao: ["Dor suspeita sem déficit: RM em até 1 semana; orientar retorno imediato se sintomas neurológicos"],
    internacao: ["Compressão confirmada ou déficit neurológico"],
    transferencia: ["Sem RM, neurocirurgia ou radioterapia: regulação urgente (vaga zero se déficit progressivo), com dexametasona já administrada"]
  },
  prescricao: {
    hospitalar: "COMPRESSÃO MEDULAR MALIGNA — ADULTO (peso: ___ kg)\n1. Dieta conforme aceitação (zero se cirurgia iminente).\n2. Repouso no leito em decúbito plano se dor mecânica/instabilidade; mobilização em bloco. Mudança de decúbito de 2/2 h (prevenção de lesão por pressão).\n3. Dexametasona 16 mg IV (ou VO) agora; depois 8 mg IV/VO de 12/12 h.\n4. Omeprazol 40 mg VO/IV 1×/dia.\n5. Morfina 10 mg/mL: diluir 1 mL em 9 mL de SF 0,9%; 2–4 mg IV de 4/4 h se dor; dipirona 1 g IV de 6/6 h.\n6. Lactulose 15–20 mL VO de 12/12 h (constipação por opioide e neurogênica).\n7. Enoxaparina 40 mg SC 1×/dia (ou compressão pneumática se cirurgia próxima).\n8. Sondagem vesical de demora se retenção urinária ou resíduo elevado.\n9. Glicemia capilar de 6/6 h durante o corticoide.\n10. Exame neurológico (força, nível sensitivo, esfíncteres) de 4/4 h; comunicar qualquer piora.\n11. RM de coluna total urgente; avaliação de neurocirurgia e radioterapia hoje.",
    ambulatorial: "APÓS TRATAMENTO (conforme oncologia)\nUSO ORAL\n1. Dexametasona 4 mg ----------------------------- ___ comprimidos\n   Tomar conforme esquema de redução: ___ .\n2. Omeprazol 20 mg ------------------------------- 30 cápsulas\n   Tomar 1 cápsula em jejum enquanto usar dexametasona.\nVoltar imediatamente se nova fraqueza, dormência ou dificuldade para urinar."
  },
  orientacoesRetorno: [
    "Quem tem câncer e começa com dor nas costas que piora à noite ou ao deitar deve procurar atendimento rápido",
    "Voltar imediatamente (PS) se: fraqueza nas pernas, dificuldade para andar, dormência no corpo ou na região das nádegas e genitais, dificuldade para urinar ou perder urina/fezes sem perceber",
    "Tomar a dexametasona como orientado e não parar de repente",
    "Medir a glicemia se for diabético enquanto usa corticoide",
    "Manter a fisioterapia e a reabilitação"
  ],
  fontes: [
    "NICE — NG234: Spinal metastases and metastatic spinal cord compression (2023)",
    "ESMO — Clinical Practice Guideline: management of bone health and metastatic spinal cord compression (2020)",
    "Patchell RA et al. — Direct decompressive surgical resection in spinal cord compression (Lancet, 2005)",
    "Fisher CG et al. — Spinal Instability Neoplastic Score (SINS) (Spine, 2010)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
