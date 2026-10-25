// Espondiloartrites
registrarFicha({
  id: "espondiloartrites",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Espondiloartrites (espondilite anquilosante, artrite psoriásica, reativa, enteropática)",
  resumo: "Grupo de artrites inflamatórias soronegativas com acometimento da coluna e sacroilíacas, entesite, dactilite e oligoartrite de membros inferiores, associadas a HLA-B27, psoríase, DII, uveíte e infecções prévias.",
  palavrasChave: "espondiloartrite espondilite anquilosante espondiloartrite axial lombalgia inflamatoria sacroiliite hla b27 asas artrite psoriasica caspar artrite reativa reiter uretrite chlamydia artrite enteropatica doenca de crohn retocolite entesite dactilite uveite anterior aine naproxeno sulfassalazina anti tnf secuquinumabe basdai",
  critico: {
    tempo: "Lombalgia inflamatória < 45 anos",
    texto: "Lombalgia há ≥ 3 meses iniciada antes dos 45 anos, com rigidez matinal, melhora com exercício e piora com repouso: pensar em espondiloartrite axial, pedir HLA-B27, PCR e imagem de sacroilíacas e encaminhar."
  },
  alarmes: [
    "Olho vermelho doloroso com fotofobia e baixa visual (uveíte anterior — oftalmologia no mesmo dia)",
    "Monoartrite aguda febril (excluir artrite séptica — punção)",
    "Trauma leve com dor cervical/dorsal em coluna anquilosada (fratura instável — imobilizar e TC)",
    "Febre, perda de peso, dor noturna sem melhora (infecção, neoplasia)",
    "Diarreia com sangue e perda de peso (DII não diagnosticada)",
    "Dispneia, síncope ou sopro diastólico (insuficiência aórtica, bloqueio AV)"
  ],
  conduta: [
    "Identificar o padrão: axial (lombalgia inflamatória, sacroiliíte) ou periférico (oligoartrite assimétrica de MMII, entesite de calcâneo, dactilite)",
    "Procurar características de espondiloartrite: psoríase (inclusive couro cabeludo, umbigo, unhas), uveíte, DII, uretrite ou diarreia nas 4 semanas anteriores, história familiar, boa resposta a AINE",
    "Pedir HLA-B27, PCR, VHS, hemograma, urina, RX de bacia (sacroilíacas) e de coluna lombar; RM de sacroilíacas (STIR) se RX normal e suspeita forte — critérios ASAS (tabela)",
    "1ª linha axial: AINE em dose plena contínua; testar pelo menos 2 AINEs diferentes, cada um por 2–4 semanas, antes de considerar falha",
    "Exercício diário, fisioterapia (mobilidade, postura, respiração), parar de fumar",
    "Periférico: AINE, infiltração com corticoide; sulfassalazina ou metotrexato para artrite periférica persistente (não funcionam na doença axial)",
    "Corticoide sistêmico não é indicado na doença axial",
    "Falha de AINE (axial) com doença ativa (BASDAI ≥ 4 + PCR elevada ou inflamação na RM): reumatologia para biológico (anti-TNF ou anti-IL-17) via PCDT/CEAF",
    "Artrite psoriásica: critérios CASPAR; MTX é a 1ª opção para artrite periférica e ajuda a pele; biológico se falha",
    "Artrite reativa: geralmente autolimitada em 3–6 meses; AINE; tratar a infecção desencadeante só se ainda ativa (uretrite por clamídia — tratar também parcerias); antibiótico prolongado não muda a artrite",
    "Artrite enteropática: tratar a DII com o gastroenterologista; evitar AINE prolongado na DII ativa (preferir analgésico, infiltração, sulfassalazina); anti-TNF monoclonal (adalimumabe, infliximabe) trata as duas",
    "Triagem antes de biológico: tuberculose latente, hepatites B/C, HIV, vacinas (ver ficha artrite-reumatoide)"
  ],
  exames: [
    "HLA-B27 (positivo em grande parte das espondilites; negativo não exclui)",
    "PCR e VHS (atividade; podem ser normais)",
    "Hemograma, creatinina, TGO/TGP, urina tipo 1 (basal para AINE e MMCD)",
    "RX de bacia AP (sacroilíacas) e de coluna lombar perfil (sindesmófitos, coluna em bambu)",
    "RM de sacroilíacas com STIR: edema ósseo subcondral (sacroiliíte ativa) quando RX normal",
    "Artrite reativa: PCR/NAAT para clamídia e gonococo em urina de 1º jato ou secreção; coprocultura se diarreia recente; sorologias HIV e sífilis",
    "Artrite psoriásica: FR negativo (critério CASPAR), RX de mãos e pés",
    "Calprotectina fecal e colonoscopia se sintomas intestinais"
  ],
  diferenciais: [
    "Lombalgia mecânica (piora com esforço, melhora com repouso, sem rigidez prolongada)",
    "Hiperostose esquelética idiopática difusa (DISH) — idoso, osteófitos grosseiros, sacroilíacas normais",
    "Osteíte condensante do ílio (mulher pós-parto)",
    "Artrite séptica, gota, doença por pirofosfato",
    "Artrite reumatoide (poliartrite simétrica, FR/anti-CCP)",
    "Fibromialgia (dor difusa sem inflamação)"
  ],
  tratamento: [
    { droga: "Naproxeno", linha: "l1", dose: "500 mg", via: "VO", intervalo: "12/12 h", duracao: "Contínuo enquanto houver sintomas (avaliar resposta em 2–4 semanas)", monitorizacao: "PA, creatinina, hemoglobina, sintomas dispépticos", contraindicacoes: "DRC (ClCr < 30), úlcera ativa, IC descompensada, DCV grave, 3º trimestre de gestação", ajustes: "IBP se > 65 anos, úlcera prévia ou corticoide/anticoagulante associados" },
    { droga: "Ibuprofeno", linha: "alt", dose: "600 mg", via: "VO", intervalo: "8/8 h", duracao: "Idem", monitorizacao: "Idem", contraindicacoes: "Idem", ajustes: "Trocar de AINE se resposta insuficiente após 2–4 semanas" },
    { droga: "Sulfassalazina", linha: "alt", dose: "500 mg/dia, aumentando 500 mg por semana até 2–3 g/dia", via: "VO", intervalo: "Dividir em 2 tomadas", duracao: "Contínuo", monitorizacao: "Hemograma, TGO/TGP", contraindicacoes: "Alergia a sulfa ou salicilatos", ajustes: "Só para artrite periférica (e enteropática); sem efeito axial" },
    { droga: "Metotrexato", linha: "alt", dose: "15 mg/semana, até 20–25 mg/semana + ácido fólico 5 mg/semana", via: "VO ou SC", intervalo: "1 vez por SEMANA", duracao: "Contínuo", monitorizacao: "Hemograma, TGO/TGP, creatinina", contraindicacoes: "Gestação, hepatopatia, ClCr < 30, etilismo", ajustes: "Artrite psoriásica periférica; sem efeito axial" },
    { droga: "Corticoide sistêmico na doença axial", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Sem benefício axial; na psoríase a retirada pode piorar a pele", ajustes: "Infiltração local é aceitável em entesite/artrite periférica" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES\n1. HLA-B27, PCR, VHS, hemograma, creatinina, TGO, TGP, urina tipo 1.\n2. RX de bacia AP (articulações sacroilíacas) e coluna lombossacra AP e perfil.\n3. Ressonância magnética de articulações sacroilíacas (com sequência STIR) — suspeita de sacroiliíte (se RX normal).\n4. Encaminhamento à reumatologia: suspeita de espondiloartrite.\n\nUSO ORAL\n5. Naproxeno 500 mg ----------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após as refeições, por 30 dias.\n6. Omeprazol 20 mg ------------------------------- 30 cápsulas\n   Tomar 1 cápsula em jejum, 1 vez ao dia, enquanto usar o naproxeno (se > 65 anos ou risco gástrico).\n\nARTRITE REATIVA COM URETRITE ATIVA (paciente e parcerias)\n7. Doxiciclina 100 mg --------------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias (gestante: azitromicina 1 g dose única).\n\nORIENTAÇÕES\n8. Exercícios diários de alongamento e mobilidade da coluna; fisioterapia."
  },
  orientacoesRetorno: [
    "Exercício e alongamento todos os dias são parte do tratamento, tanto quanto o remédio",
    "Tomar o anti-inflamatório após as refeições; avisar se dor no estômago, fezes pretas ou inchaço nas pernas",
    "Parar de fumar: o cigarro piora a doença da coluna",
    "Procurar atendimento no mesmo dia se olho vermelho com dor e visão embaçada",
    "Após qualquer queda ou batida, com dor na coluna, procurar o PS: a coluna rígida quebra com mais facilidade",
    "Retornar em 4 semanas para avaliar a resposta"
  ],
  encaminhar: [
    "Reumatologia: suspeita de espondiloartrite axial, artrite psoriásica, artrite periférica persistente > 6 semanas, falha de 2 AINEs",
    "Oftalmologia no mesmo dia: olho vermelho doloroso com fotofobia",
    "Gastroenterologia: sintomas intestinais (suspeita de DII)",
    "Dermatologia: psoríase extensa"
  ],
  tabelas: [
    {
      titulo: "Critérios ASAS — espondiloartrite axial (lombalgia ≥ 3 meses, início < 45 anos)",
      colunas: ["Via", "Requisito"],
      linhas: [
        ["Imagem", "Sacroiliíte na RM ou no RX + ≥ 1 característica de espondiloartrite"],
        ["Clínica", "HLA-B27 positivo + ≥ 2 outras características"],
        ["Características", "Lombalgia inflamatória, artrite, entesite (calcâneo), uveíte, dactilite, psoríase, DII, boa resposta a AINE, história familiar, HLA-B27, PCR elevada"]
      ],
      nota: "Lombalgia inflamatória (ASAS): ≥ 4 de 5 — idade < 40 anos, início insidioso, melhora com exercício, sem melhora com repouso, dor noturna que melhora ao levantar."
    },
    {
      titulo: "CASPAR — artrite psoriásica (doença inflamatória articular + ≥ 3 pontos)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Psoríase atual", "2"],
        ["História pessoal ou familiar de psoríase (se sem psoríase atual)", "1"],
        ["Distrofia ungueal psoriásica (onicólise, pitting, hiperceratose)", "1"],
        ["Fator reumatoide negativo", "1"],
        ["Dactilite atual ou prévia", "1"],
        ["Neoformação óssea justa-articular no RX de mãos/pés", "1"]
      ]
    },
    {
      titulo: "Falha ou resistência ao antibiótico (uretrite desencadeante da artrite reativa)",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Persistência da uretrite após doxiciclina", "Investigar reinfecção, adesão e parceria não tratada; testar gonococo e Mycoplasma genitalium", "Ver ficha cervicite-uretrite"],
        ["Gonococo identificado", "Ceftriaxona 500 mg IM dose única + tratamento para clamídia", "Cultura com antibiograma se falha (resistência de gonococo)"],
        ["Alergia ou gestação", "Azitromicina 1 g VO dose única", "Teste de cura em gestante"],
        ["Artrite persiste após tratar a infecção", "Não prolongar antibiótico; AINE, infiltração, sulfassalazina", "Antibiótico prolongado não altera a evolução da artrite"]
      ]
    }
  ],
  fontes: [
    "ASAS-EULAR recommendations for the management of axial spondyloarthritis (2022 update)",
    "ASAS classification criteria for axial (2009) and peripheral (2011) spondyloarthritis",
    "CASPAR — Classification criteria for psoriatic arthritis (2006)",
    "EULAR recommendations for the management of psoriatic arthritis (2023 update)",
    "Ministério da Saúde — PCDT Espondilite Ancilosante (versão vigente na CONITEC) e PCDT Artrite Psoriásica (Portaria Conjunta nº 37, 2026)",
    "Ministério da Saúde — PCDT Atenção Integral às Pessoas com IST (2022)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
