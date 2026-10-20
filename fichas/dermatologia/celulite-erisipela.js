// Celulite e erisipela
registrarFicha({
  id: "celulite-erisipela",
  especialidade: "dermatologia",
  caminho: "ubs",
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
  proximaDecisao: "Reavaliar em 48–72 h: bordas pararam de avançar e febre cedeu → completar 5–7 dias. Progressão ou sinais sistêmicos → antibiótico IV.",
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
      dose: "500 mg (criança 25–50 mg/kg/dia)",
      via: "VO",
      intervalo: "6/6h",
      duracao: "5–7 dias (estender se melhora lenta)",
      monitorizacao: "Bordas e febre em 48–72 h",
      contraindicacoes: "Anafilaxia a betalactâmicos",
      ajustes: "Obesos: 1 g 6/6h"
    },
    {
      droga: "Amoxicilina ou penicilina (erisipela)",
      linha: "l1",
      dose: "Amoxicilina 500 mg 8/8h · ou penicilina G benzatina 1.200.000 UI IM (dose única ou repetir)",
      via: "VO / IM",
      intervalo: "8/8h",
      duracao: "7–10 dias",
      monitorizacao: "—",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Erisipela é estreptocócica"
    },
    {
      droga: "Clindamicina",
      linha: "alt",
      dose: "300–450 mg",
      via: "VO",
      intervalo: "6/6h ou 8/8h",
      duracao: "5–7 dias",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "—",
      ajustes: "Alérgicos a betalactâmicos"
    },
    {
      droga: "SMX-TMP (suspeita de MRSA / purulenta)",
      linha: "adj",
      dose: "800/160 mg, 1–2 comprimidos",
      via: "VO",
      intervalo: "12/12h",
      duracao: "5–7 dias",
      monitorizacao: "Rash, potássio, função renal",
      contraindicacoes: "Gestação (1º e 3º tri), alergia a sulfa",
      ajustes: "Após drenagem de abscesso com fatores de risco para MRSA"
    },
    {
      droga: "Cefazolina / oxacilina (IV)",
      linha: "alt",
      dose: "Cefazolina 1–2 g 8/8h · oxacilina 2 g 4/4h",
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
      ajustes: "Reduz recorrência. Erisipela recorrente (≥ 3/ano): profilaxia com penicilina benzatina a cada 3–4 semanas"
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
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (2014)",
    "SBD (Dermatologia) — Consenso sobre infecções bacterianas de pele",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28 (vol. II)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
