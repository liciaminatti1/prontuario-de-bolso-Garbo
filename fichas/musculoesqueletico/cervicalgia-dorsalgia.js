// Cervicalgia, dorsalgia, dor intensa na coluna e discopatia
registrarFicha({
  id: "cervicalgia-dorsalgia",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Cervicalgia, dorsalgia, dor intensa na coluna e discopatia",
  resumo: "Dor no pescoço ou nas costas (torácica), com ou sem irradiação para o braço (radiculopatia por hérnia de disco ou artrose). A maioria é mecânica e melhora em semanas. Prioridade: excluir causas graves (mielopatia, infecção, fratura, tumor, causas cardiovasculares na dorsalgia) e aliviar a dor mantendo a atividade. Lombalgia tem ficha própria.",
  palavrasChave: "cervicalgia dor no pescoco torcicolo dorsalgia dor nas costas dor toracica posterior hernia de disco cervical discopatia radiculopatia cervicobraquialgia mielopatia espondiloartrose dor intensa coluna ibuprofeno naproxeno ciclobenzaprina dipirona tramadol cetoprofeno",
  critico: {
    tempo: "Excluir mielopatia e causa visceral",
    texto: "Fraqueza ou perda de destreza nas mãos, marcha instável, alteração esfincteriana ou hiper-reflexia = mielopatia (encaminhar com urgência). Dorsalgia súbita intensa, com dispneia, sudorese ou hipotensão: pensar em dissecção de aorta, IAM e TEP."
  },
  alarmes: [
    "Mielopatia: mãos desajeitadas, marcha instável, fraqueza em braços e pernas, Hoffmann ou Babinski, alteração urinária ou intestinal",
    "Déficit motor progressivo ou grave no braço (radiculopatia com fraqueza)",
    "Febre, imunossupressão, uso de drogas IV, infecção recente (espondilodiscite, abscesso epidural)",
    "Câncer prévio, perda de peso, dor noturna que não alivia com repouso (metástase)",
    "Trauma relevante, idoso com osteoporose ou uso de corticoide (fratura)",
    "Dorsalgia súbita 'rasgando' irradiada, assimetria de pulsos ou PA (dissecção de aorta)",
    "Dor torácica posterior com dispneia, sudorese, náusea (IAM, TEP), ou com vesículas em faixa (herpes-zóster)",
    "Rigidez de nuca com febre e cefaleia (meningite)"
  ],
  conduta: [
    "Anamnese e exame com foco nas bandeiras vermelhas e no exame neurológico dos membros superiores e inferiores (força, reflexos, sensibilidade, Hoffmann, marcha)",
    "Dorsalgia: sinais vitais, pulsos nos 4 membros, ausculta; ECG se qualquer dúvida de causa cardíaca",
    "Sem bandeiras vermelhas: não pedir imagem nas primeiras 4–6 semanas",
    "Explicar o bom prognóstico; manter atividades e trabalho conforme tolerar; evitar colar cervical e repouso prolongado",
    "Analgesia: AINE por 5–7 dias (se sem contraindicação) + dipirona/paracetamol; relaxante muscular por poucos dias se espasmo",
    "Calor local, exercícios de mobilidade e fortalecimento cervical e escapular; fisioterapia se persistir > 2–4 semanas",
    "Radiculopatia (dor no braço em dermátomo, parestesia): mesma base; a maioria melhora em 6–12 semanas. Dor neuropática persistente: considerar amitriptilina ou gabapentina (ficha Neuropatia periférica)",
    "Dor muito intensa que não cede com VO: analgesia parenteral na sala de medicação/PS e reavaliar bandeiras vermelhas",
    "Reavaliar em 2–4 semanas; RM se radiculopatia sem melhora em 6 semanas com candidatura a procedimento, ou já se bandeira vermelha"
  ],
  exames: [
    "Sem bandeiras vermelhas: nenhum exame nas primeiras 4–6 semanas",
    "Radiografia de coluna cervical (AP, perfil) ou torácica: trauma, suspeita de fratura osteoporótica, dor persistente > 6 semanas em > 50 anos",
    "Ressonância magnética de coluna cervical/torácica: mielopatia, déficit motor, suspeita de infecção ou tumor (com urgência); radiculopatia refratária > 6 semanas para planejar tratamento",
    "Hemograma, VHS e PCR: suspeita de infecção, tumor ou doença inflamatória",
    "ECG (e troponina no PS) em dorsalgia com qualquer suspeita de causa cardíaca",
    "Pedido pronto (RM): \"Ressonância magnética de coluna cervical sem contraste. HD: cervicobraquialgia com radiculopatia C__ refratária a 6 semanas de tratamento / suspeita de mielopatia cervical.\""
  ],
  diferenciais: [
    "Cervicalgia mecânica / tensional, torcicolo agudo",
    "Radiculopatia cervical (hérnia discal, osteófito foraminal): C5 ombro/deltoide, C6 polegar/bíceps, C7 3º dedo/tríceps, C8 5º dedo/mão",
    "Mielopatia cervical espondilótica",
    "Ombro doloroso (síndrome do manguito) com dor referida ao pescoço",
    "Síndrome do túnel do carpo (parestesia na mão sem dor cervical)",
    "Dorsalgia visceral: dissecção de aorta, IAM, TEP, pneumonia, pancreatite, cólica biliar ou renal, herpes-zóster",
    "Fratura vertebral osteoporótica (idoso, corticoide)",
    "Espondilodiscite, metástase, mieloma"
  ],
  tratamento: [
    {
      droga: "Ibuprofeno",
      linha: "l1",
      dose: "400–600 mg",
      via: "VO",
      intervalo: "De 8 em 8 horas, após refeição",
      duracao: "5–7 dias",
      monitorizacao: "Dispepsia, PA, função renal se risco",
      contraindicacoes: "Úlcera ativa ou sangramento GI, ClCr < 30, IC, anticoagulante, gestação ≥ 20 semanas",
      ajustes: "Alternativa: naproxeno 500 mg 12/12 h. Omeprazol 20 mg/dia se > 65 anos ou risco GI. RENAME (ibuprofeno)"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "500 mg–1 g (máx 4 g/dia)",
      via: "VO",
      intervalo: "De 6 em 6 horas se dor",
      duracao: "Enquanto dor",
      monitorizacao: "Hipotensão (IV), reação alérgica",
      contraindicacoes: "Alergia a pirazolonas, agranulocitose prévia, deficiência de G6PD",
      ajustes: "Alternativa: paracetamol 500–1.000 mg 6/6 h (máx 3 g/dia). RENAME"
    },
    {
      droga: "Ciclobenzaprina",
      linha: "adj",
      dose: "5–10 mg",
      via: "VO",
      intervalo: "1 vez à noite (até 8/8 h)",
      duracao: "Até 7–10 dias",
      monitorizacao: "Sonolência, boca seca",
      contraindicacoes: "Arritmia, IAM recente, glaucoma, retenção urinária, IMAO, idoso frágil",
      ajustes: "Não dirigir. Benefício modesto e só em espasmo. Fora do SUS. Evitar em idosos (Beers)"
    },
    {
      droga: "Tramadol",
      linha: "alt",
      dose: "50 mg (máx 400 mg/dia; 300 mg > 75 anos)",
      via: "VO",
      intervalo: "De 6 em 6 a 8 em 8 horas se dor intensa",
      duracao: "Até 5 dias",
      monitorizacao: "Náusea, tontura, sonolência, constipação",
      contraindicacoes: "Epilepsia, IMAO; cautela com ISRS/IRSN/tricíclicos",
      ajustes: "Reservar para dor intensa refratária; evitar uso prolongado. Alternativa: codeína 30 mg + paracetamol 500 mg 1 comprimido 6/6 h por até 3–5 dias"
    },
    {
      droga: "Prednisona (radiculopatia aguda intensa)",
      linha: "adj",
      dose: "40–60 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia, pela manhã",
      duracao: "5 dias",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "Infecção, DM descompensado",
      ajustes: "Evidência fraca e benefício pequeno e de curta duração; individualizar. Não usar em cervicalgia sem radiculopatia"
    }
  ],
  prescricao: {
    ambulatorial: "CERVICALGIA / DORSALGIA MECÂNICA (adulto)\nUSO ORAL\n1. Ibuprofeno 600 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias.\n   (Alternativa: Naproxeno 500 mg — 1 comprimido de 12 em 12 horas por 5 a 7 dias.)\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Ciclobenzaprina 5 mg -------------------------- 10 comprimidos\n   Tomar 1 comprimido à noite, ao deitar, por até 10 dias, se contratura muscular. Não dirigir após tomar.\n4. Omeprazol 20 mg ------------------------------- 7 cápsulas\n   Tomar 1 cápsula em jejum enquanto usar o anti-inflamatório (se > 65 anos ou risco gastrointestinal).\n\nSE DOR FORTE QUE NÃO MELHORA COM OS ANTERIORES\n5. Tramadol 50 mg -------------------------------- 10 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas se dor forte, por no máximo 3 a 5 dias.\n\nORIENTAÇÕES\n6. Bolsa morna no pescoço/costas por 20 minutos, 3 vezes ao dia.\n7. Movimentar o pescoço suavemente várias vezes ao dia; manter as atividades. Não usar colar cervical.\n8. Ajustar posição no trabalho (tela na altura dos olhos, pausas a cada hora) e travesseiro de altura média.",
    hospitalar: "DOR INTENSA NA COLUNA (sala de medicação / PS) — após excluir bandeiras vermelhas\n1. Dipirona 1 g (2 mL de 500 mg/mL) + SF 0,9% 100 mL IV em 15–30 minutos.\n2. Cetoprofeno 100 mg + SF 0,9% 100 mL IV em 20–30 minutos (não usar se ClCr < 30, úlcera, sangramento, IC, gestação ≥ 20 semanas).\n3. Se dor persistir após 30–60 min: Tramadol 100 mg (2 mL) + SF 0,9% 100 mL IV em 30 minutos (idoso: 50 mg).\n4. Ondansetrona 4 mg IV lento se náusea.\n5. Reavaliar dor (0–10) e exame neurológico em 1 hora. Alta com prescrição oral se dor controlada e sem sinais de alarme."
  },
  orientacoesRetorno: [
    "A maioria das dores no pescoço e nas costas melhora em 2 a 6 semanas, mesmo com hérnia de disco",
    "Movimentar-se ajuda a melhorar; repouso prolongado e colar cervical atrasam a recuperação",
    "Use o anti-inflamatório só pelos dias indicados, após as refeições",
    "Procure atendimento imediatamente se: fraqueza no braço ou na perna, mãos desajeitadas, desequilíbrio para andar, perda do controle da urina ou das fezes, febre, dor no peito, falta de ar ou suor frio",
    "Retorno em 2–4 semanas se não melhorar; antes se a dor no braço piorar"
  ],
  encaminhar: [
    "Neurocirurgia/ortopedia de coluna com urgência: mielopatia, déficit motor progressivo ou grave",
    "PS no mesmo dia: suspeita de dissecção de aorta, IAM, TEP, infecção espinhal, fratura com déficit",
    "Neurocirurgia/ortopedia eletiva: radiculopatia com dor incapacitante sem melhora após 6–12 semanas de tratamento e RM compatível",
    "Fisioterapia: dor persistente > 2–4 semanas ou recorrente"
  ],
  fontes: [
    "Ministério da Saúde / TelessaúdeRS-UFRGS — Protocolos de encaminhamento da APS para ortopedia e neurocirurgia (versão vigente)",
    "JOSPT/APTA — Neck Pain: Revision 2017 Clinical Practice Guidelines",
    "NASS — Clinical Guideline for the Diagnosis and Treatment of Cervical Radiculopathy from Degenerative Disorders (2010, revisão vigente)",
    "ACR Appropriateness Criteria — Cervical Neck Pain or Cervical Radiculopathy (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
