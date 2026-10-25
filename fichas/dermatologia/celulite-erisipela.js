// Celulite e erisipela
registrarFicha({
  id: "celulite-erisipela",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Celulite e erisipela",
  resumo: "Área de pele quente, vermelha, edemaciada e dolorosa, em geral em membro inferior. Erisipela é superficial e bem delimitada; celulite é mais profunda e de bordas imprecisas.",
  palavrasChave: "celulite erisipela infeccao de pele partes moles abscesso cefalexina amoxicilina clindamicina fasceite tinea",
  critico: {
    tempo: "Dor desproporcional = fasceíte",
    texto: "Dor intensa desproporcional ao exame, bolhas hemorrágicas, crepitação, necrose ou toxemia: suspeitar fasceíte necrosante → PS e cirurgia imediata."
  },
  alarmes: [
    "Dor desproporcional, crepitação, bolhas violáceas, necrose, anestesia da pele",
    "Sinais de sepse (hipotensão, taquicardia, confusão)",
    "Progressão rápida em horas apesar do antibiótico",
    "Face/órbita, mão, períneo",
    "Imunossupressão, neutropenia, diabetes descompensado"
  ],
  condutaInicial: [
    "Marcar as bordas com caneta e registrar data/hora",
    "Pesquisar porta de entrada (tinea interdigital, ferida, úlcera, picada)",
    "Abscesso flutuante → incisão e drenagem",
    "Antibiótico oral para casos sem sinais sistêmicos graves",
    "Elevar o membro, analgesia, tratar a porta de entrada"
  ],
  fataisExcluir: [
    "Fasceíte necrosante",
    "Sepse",
    "Trombose venosa profunda (diagnóstico diferencial)",
    "Celulite orbitária",
    "Pé diabético infectado com osteomielite"
  ],
  proximaDecisao: "Reavaliar em 48–72 h: bordas pararam de avançar e febre cedeu → completar 5 dias (estender se melhora lenta). Progressão ou sinais sistêmicos → antibiótico IV.",
  clinica: {
    anamnese: [
      "Início, velocidade de progressão, dor, febre, calafrios",
      "Porta de entrada: micose nos pés, trauma, picada, úlcera, cirurgia",
      "Episódios prévios (erisipela recorrente), linfedema, insuficiência venosa",
      "Diabetes, obesidade, imunossupressão",
      "Alergia a penicilina"
    ],
    exameFisico: [
      "Sinais vitais (sepse?)",
      "Extensão, bordas (nítidas na erisipela), bolhas, flutuação, crepitação, necrose",
      "Linfangite, linfonodos",
      "Espaços interdigitais (tinea pedis)",
      "Pulsos e sinais de TVP"
    ],
    diferenciais: [
      { dx: "TVP", pista: "Edema de panturrilha, sem bordas eritematosas nítidas; Doppler" },
      { dx: "Dermatite de estase", pista: "Bilateral, crônica, sem febre, pouca dor" },
      { dx: "Dermatite de contato", pista: "Prurido, contato com agente" },
      { dx: "Gota / artrite séptica", pista: "Centrada na articulação" },
      { dx: "Fasceíte necrosante", pista: "Dor desproporcional, toxemia" }
    ],
    gravidade: [
      "Leve: sem sinais sistêmicos → VO ambulatorial",
      "Moderada: sinais sistêmicos (febre, taquicardia) → considerar IV",
      "Grave: sepse, imunossupressão, falha de VO, suspeita de infecção necrosante → IV e internação"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Exames não são necessários na celulite leve não complicada.",
      porQue: "—",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Casos moderados a graves",
      pedido: "Hemograma, PCR, creatinina, glicemia; hemoculturas se sepse ou imunossupressão; cultura de secreção de abscesso.",
      porQue: "Gravidade e agente.",
      esperar: "—",
      interpretacao: "LRINEC (PCR, leucócitos, Hb, Na, creatinina, glicose) ≥ 6 aumenta suspeita de fasceíte.",
      limitacoes: "LRINEC baixo não exclui fasceíte."
    },
    {
      nome: "USG",
      pedido: "Ultrassonografia de partes moles (abscesso) ou Doppler venoso (TVP).",
      porQue: "Identificar coleção drenável ou TVP.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cefalexina (celulite)",
      linha: "l1",
      dose: "Adulto 500 mg · criança 25–50 mg/kg/dia divididos de 6/6h (máx 4 g/dia)",
      via: "VO",
      intervalo: "6/6h",
      duracao: "5 dias (estender até 10 dias se melhora lenta)",
      monitorizacao: "Bordas e febre em 48–72 h",
      contraindicacoes: "Anafilaxia a betalactâmicos",
      ajustes: "Obesos: 1 g 6/6h"
    },
    {
      droga: "Amoxicilina ou penicilina (erisipela)",
      linha: "l1",
      dose: "Amoxicilina adulto 500 mg 8/8h (criança 50 mg/kg/dia de 8/8h, máx 500 mg/dose) · ou penicilina G benzatina IM: adulto e ≥ 27 kg 1.200.000 UI; < 27 kg 600.000 UI",
      via: "VO / IM",
      intervalo: "Amoxicilina 8/8h",
      duracao: "5 dias (estender se melhora lenta)",
      monitorizacao: "—",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Erisipela é estreptocócica"
    },
    {
      droga: "Clindamicina",
      linha: "alt",
      dose: "Adulto 300–450 mg · criança 30–40 mg/kg/dia divididos de 6/6h ou 8/8h (máx 450 mg/dose)",
      via: "VO",
      intervalo: "6/6h ou 8/8h",
      duracao: "5 dias (estender se melhora lenta)",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "—",
      ajustes: "Alérgicos a betalactâmicos"
    },
    {
      droga: "SMX-TMP (suspeita de MRSA / purulenta)",
      linha: "adj",
      dose: "Adulto 800/160 mg, 1–2 comprimidos · criança 8–12 mg/kg/dia de trimetoprima de 12/12h (máx 320 mg/dose)",
      via: "VO",
      intervalo: "12/12h",
      duracao: "5–7 dias",
      monitorizacao: "Rash, potássio, função renal",
      contraindicacoes: "Gestação (1º e 3º tri), alergia a sulfa, < 2 meses",
      ajustes: "Após drenagem de abscesso com fatores de risco para MRSA. Não cobre bem estreptococo: em celulite não purulenta, associar a betalactâmico"
    },
    {
      droga: "Cefazolina / oxacilina (IV)",
      linha: "alt",
      dose: "Cefazolina 1–2 g 8/8h (criança 50–100 mg/kg/dia de 8/8h, máx 2 g/dose) · oxacilina 2 g 4/4h (criança 100–200 mg/kg/dia de 6/6h, máx 2 g/dose)",
      via: "IV",
      intervalo: "Conforme droga",
      duracao: "Até melhora, depois VO",
      monitorizacao: "Evolução das bordas",
      contraindicacoes: "Alergia",
      ajustes: "Casos moderados/graves (PS/internação)"
    },
    {
      droga: "Tratar porta de entrada",
      linha: "l1",
      dose: "Tinea pedis: terbinafina ou miconazol creme 2×/dia por 2–4 semanas",
      via: "Tópica",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Reduz recorrência. Erisipela recorrente (3–4 episódios/ano apesar de tratar fatores predisponentes): profilaxia com penicilina benzatina IM a cada 2–4 semanas ou penicilina V oral (IDSA)"
    }
  ],
  destino: {
    agora: [
      "Marcar bordas, drenar abscesso se houver, antibiótico, elevar membro"
    ],
    reavaliar: [
      "48–72 h (piora nas primeiras 24 h pode ocorrer por liberação de toxinas)"
    ],
    alta: [
      "Ambulatorial nos casos leves"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Sepse, suspeita de infecção necrosante, falha de VO, face/órbita, imunossupressão"
    ],
    transferencia: [
      "PS + cirurgia: suspeita de fasceíte necrosante",
      "PS: sinais sistêmicos, progressão rápida, incapacidade de VO"
    ]
  },
  prescricao: {
    ambulatorial: "ADULTO — CELULITE NÃO PURULENTA, SEM SINAIS SISTÊMICOS\nUSO ORAL\n1. Cefalexina 500 mg ----------------------------- 20 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 5 dias (obeso: 2 cápsulas de 6/6 h).\n2. Dipirona 500 mg ------------------------------- 40 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre, por até 5 dias.\n\nADULTO — ERISIPELA (alternativas)\n1. Amoxicilina 500 mg ---------------------------- 15 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 5 dias.\n   OU\n1. Penicilina G benzatina 1.200.000 UI ----------- 1 frasco-ampola\n   Aplicar 1.200.000 UI IM profundo, dose única (na UBS, com material para anafilaxia).\n\nALERGIA A BETALACTÂMICO\n1. Clindamicina 300 mg ---------------------------- 20 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 5 dias.\n\nPORTA DE ENTRADA (tinea pedis) — USO TÓPICO\n3. Miconazol 2% creme ----------------------------- 1 bisnaga\n   Aplicar entre os dedos, 2 vezes ao dia, por 4 semanas.\n\nCRIANÇA (por kg)\n- Cefalexina 250 mg/5 mL suspensão: 25–50 mg/kg/dia divididos de 6/6 h, por 5 dias (máx 500 mg/dose).\n- Amoxicilina 250 mg/5 mL: 50 mg/kg/dia divididos de 8/8 h, por 5 dias (máx 500 mg/dose).\n- Clindamicina (alergia): 30–40 mg/kg/dia divididos de 6/6 h ou 8/8 h (máx 450 mg/dose).\n- Dipirona: 10–15 mg/kg/dose até de 6/6 h (máx 1 g/dose)."
  },
  orientacoesRetorno: [
    "Manter a perna (ou o braço) elevada sempre que possível; repouso relativo nos primeiros dias",
    "Tomar o antibiótico até o fim, nos horários certos",
    "A vermelhidão pode aumentar um pouco nas primeiras 24 h; a linha marcada ajuda a comparar",
    "Voltar imediatamente se: vermelhidão passar muito da linha marcada, bolhas escuras, pele preta ou dormente, dor muito forte, febre alta persistente, tontura ou confusão",
    "Tratar a micose entre os dedos e manter a pele hidratada (evita novas crises)",
    "Retorno na UBS em 48–72 h para reavaliar"
  ],
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h (piora leve nas primeiras 24 h pode ocorrer)", "Procurar abscesso oculto (USG: drenar), rever diagnóstico (TVP, dermatite de estase, gota) e sinais de infecção necrosante", "Demarcar a borda para comparar"],
        ["Falha da cefalexina com purulência ou risco de MRSA comunitário", "SMX-TMP 800/160 mg 1–2 cp de 12/12 h associado a cefalexina, ou clindamicina isolada, ou doxiciclina 100 mg de 12/12 h + cefalexina", "Cultura de secreção se houver"],
        ["Resistência à clindamicina (inclusive induzível, teste D)", "SMX-TMP ou doxiciclina, associados a betalactâmico para estreptococo", "—"],
        ["Alergia à penicilina", "Não grave: cefalexina; grave: clindamicina", "—"],
        ["Sinais sistêmicos, falha do oral ou imunossuprimido", "Internar: cefazolina ou oxacilina IV; vancomicina se MRSA, sepse ou falha", "Suspeita de necrosante: cirurgia + antibiótico amplo (ver fasciite-necrosante)"]
      ]
    }
  ],
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (2014)",
    "OMS — The WHO AWaRe (Access, Watch, Reserve) Antibiotic Book (2022)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013)"
  ],
  revisao: "2026-10-25",
  versao: "1.2"
});
