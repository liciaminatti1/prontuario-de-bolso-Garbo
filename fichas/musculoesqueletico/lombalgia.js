// Lombalgia aguda
registrarFicha({
  id: "lombalgia",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Lombalgia aguda",
  resumo: "Dor lombar com ou sem irradiação para membro inferior. A maioria é inespecífica e melhora em semanas; o essencial é identificar as bandeiras vermelhas.",
  palavrasChave: "lombalgia dor nas costas lombar ciatica radiculopatia hernia de disco cauda equina bandeira vermelha ibuprofeno ciclobenzaprina",
  critico: {
    tempo: "Cauda equina = emergência",
    texto: "Retenção ou incontinência urinária, anestesia em sela ou déficit motor progressivo: RM e avaliação cirúrgica no mesmo dia."
  },
  alarmes: [
    "Retenção/incontinência urinária ou fecal, anestesia em sela",
    "Déficit motor progressivo ou bilateral",
    "História de câncer, perda de peso inexplicada, dor noturna em repouso",
    "Febre, imunossupressão, uso de drogas IV, infecção recente (osteomielite, abscesso)",
    "Trauma significativo, osteoporose, corticoide crônico, idade > 50 com dor nova (fratura)"
  ],
  condutaInicial: [
    "Pesquisar bandeiras vermelhas",
    "Exame neurológico de MMII (força, reflexos, sensibilidade, Lasègue)",
    "Sem alarmes: não pedir imagem nas primeiras 4–6 semanas",
    "Orientar manter-se ativo, calor local, evitar repouso no leito",
    "AINE por curto período; relaxante muscular se espasmo"
  ],
  fataisExcluir: [
    "Síndrome da cauda equina",
    "Aneurisma de aorta abdominal (idoso, tabagista, massa pulsátil)",
    "Neoplasia / metástase",
    "Infecção (espondilodiscite, abscesso epidural)",
    "Fratura vertebral",
    "Causas viscerais: pielonefrite, cólica renal, pancreatite"
  ],
  proximaDecisao: "Reavaliar em 2–4 semanas. Dor > 6 semanas apesar do tratamento, ou radiculopatia persistente candidata a procedimento → imagem (RM) e encaminhamento.",
  clinica: {
    anamnese: [
      "Início, mecanismo, duração, irradiação (abaixo do joelho sugere radiculopatia)",
      "Bandeiras vermelhas (ver alarmes)",
      "Sintomas urinários e intestinais",
      "Rigidez matinal prolongada > 30 min que melhora com movimento (espondiloartrite)",
      "Bandeiras amarelas: medo-evitação, depressão, conflitos no trabalho (risco de cronificação)"
    ],
    exameFisico: [
      "Inspeção, palpação, mobilidade",
      "Lasègue (sensibilidade para hérnia L5/S1)",
      "Força: dorsiflexão do hálux (L5), flexão plantar (S1), extensão do joelho (L4)",
      "Reflexos patelar (L4) e aquileu (S1); sensibilidade em sela",
      "Palpação abdominal e pulsos (aneurisma), Giordano"
    ],
    diferenciais: [
      { dx: "Lombalgia inespecífica", pista: "Mais de 90% dos casos; sem alarmes" },
      { dx: "Radiculopatia (hérnia de disco)", pista: "Dor irradiada abaixo do joelho, Lasègue positivo" },
      { dx: "Estenose de canal", pista: "Idoso, claudicação neurogênica, melhora ao sentar" },
      { dx: "Espondiloartrite", pista: "< 45 anos, dor inflamatória, rigidez matinal" },
      { dx: "Cólica renal / pielonefrite", pista: "Dor em flanco, hematúria, febre" }
    ],
    gravidade: [
      "Aguda < 6 semanas · subaguda 6–12 · crônica > 12 semanas",
      "Déficit neurológico progressivo ou cauda equina = emergência"
    ]
  },
  exames: [
    {
      nome: "Imagem",
      pedido: "Sem alarmes: não solicitar imagem nas primeiras 4–6 semanas. Com alarme: RM de coluna lombar (urgente se cauda equina ou déficit progressivo).",
      porQue: "Imagem precoce não melhora desfechos e encontra alterações degenerativas em assintomáticos.",
      esperar: "—",
      interpretacao: "Hérnias e protrusões são comuns em pessoas sem dor; correlacionar com a clínica.",
      limitacoes: "RX simples só para suspeita de fratura."
    },
    {
      nome: "Laboratório (suspeita de infecção ou câncer)",
      pedido: "Hemograma, VHS, PCR; PSA/eletroforese de proteínas conforme suspeita.",
      porQue: "Rastrear infecção, mieloma, metástase.",
      esperar: "—",
      interpretacao: "VHS/PCR elevados + alarme → RM.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Ibuprofeno",
      linha: "l1",
      dose: "400–600 mg",
      via: "VO, após refeição",
      intervalo: "8/8h",
      duracao: "5–7 dias (menor tempo possível)",
      monitorizacao: "Dor epigástrica, PA, função renal",
      contraindicacoes: "Úlcera, DRC, IC, anticoagulação, gestação 3º tri",
      ajustes: "Naproxeno 500 mg 12/12h é alternativa. Idoso/risco GI: associar omeprazol 20 mg"
    },
    {
      droga: "Ciclobenzaprina",
      linha: "adj",
      dose: "5–10 mg (máx 30 mg/dia)",
      via: "VO, ao deitar",
      intervalo: "1×/dia (até 3×/dia)",
      duracao: "Até 1–2 semanas",
      monitorizacao: "Sonolência, boca seca",
      contraindicacoes: "Idoso, arritmia, glaucoma, IMAO",
      ajustes: "Benefício modesto e de curto prazo; sem ganho claro somado ao AINE. Orientar não dirigir. Evitar com álcool e benzodiazepínicos"
    },
    {
      droga: "Dipirona / paracetamol",
      linha: "alt",
      dose: "Dipirona 500–1.000 mg · paracetamol 500–1.000 mg",
      via: "VO",
      intervalo: "6/6h se dor",
      duracao: "Curto",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Paracetamol isolado não é recomendado pelo NICE para lombalgia; usar como opção quando AINE contraindicado. Paracetamol máx 3–4 g/dia (2 g se hepatopatia ou etilismo)"
    },
    {
      droga: "Medidas não farmacológicas",
      linha: "l1",
      dose: "Manter atividades, calor local, exercícios, educação em dor",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Fisioterapia se > 2–4 semanas ou cronificação. Evitar opioides e corticoide sistêmico de rotina"
    }
  ],
  destino: {
    agora: [
      "Excluir alarmes, orientar e tratar sintomas"
    ],
    reavaliar: [
      "2–4 semanas, ou antes se piora ou surgimento de alarme"
    ],
    alta: [
      "Seguimento na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Cauda equina, abscesso epidural, fratura instável"
    ],
    transferencia: [
      "PS / neurocirurgia no mesmo dia: cauda equina, déficit progressivo, suspeita de infecção espinhal ou aneurisma",
      "Ortopedia/neurocirurgia eletiva: radiculopatia > 6 semanas com RM compatível, estenose incapacitante",
      "Fisioterapia: dor persistente ou cronificação"
    ]
  },
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ibuprofeno 600 mg -------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias.\n   (Alternativa: naproxeno 500 mg, 1 comprimido de 12 em 12 horas por 5 a 7 dias.)\n2. Ciclobenzaprina 5 mg ----------------------------- 10 comprimidos\n   Tomar 1 comprimido à noite, ao deitar, por até 10 dias, se espasmo muscular. Não dirigir após tomar.\n3. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n4. Omeprazol 20 mg ---------------------------------- 7 cápsulas\n   Tomar 1 cápsula em jejum enquanto usar o anti-inflamatório (se > 65 anos ou risco gastrointestinal).\n\nORIENTAÇÕES\n5. Calor local (bolsa morna) por 20 minutos, 3 vezes ao dia.\n6. Manter as atividades do dia a dia e caminhar conforme tolerar; evitar repouso na cama."
  },
  orientacoesRetorno: [
    "A dor lombar comum melhora na maioria das pessoas em 2 a 6 semanas",
    "Ficar ativo ajuda a melhorar mais rápido; repouso na cama atrasa a recuperação",
    "Anti-inflamatório: tomar após comer e pelo menor tempo possível",
    "Voltar imediatamente se perder o controle da urina ou das fezes, dormência na região entre as pernas (\"sela\"), fraqueza que piora nas pernas, febre ou dor muito forte que não melhora em repouso",
    "Retornar em 2 a 4 semanas se não melhorar, para reavaliação e fisioterapia"
  ],
  fontes: [
    "Ministério da Saúde / TelessaúdeRS-UFRGS — Protocolos de encaminhamento da APS para ortopedia e neurocirurgia",
    "ACP Clinical Practice Guideline — Noninvasive treatments for acute, subacute and chronic low back pain (2017)",
    "NICE NG59 — Low back pain and sciatica in over 16s (2016, atualizado 2020)",
    "OMS — Guideline for non-surgical management of chronic primary low back pain in adults (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
