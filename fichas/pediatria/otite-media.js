// Otite média aguda
registrarFicha({
  id: "otite-media",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Otite média aguda",
  resumo: "Otalgia (ou irritabilidade, levar a mão à orelha) com membrana timpânica abaulada ou otorreia recente, geralmente após quadro viral.",
  palavrasChave: "otite media aguda oma dor de ouvido otalgia membrana timpanica amoxicilina clavulanato mastoidite pediatria",
  critico: {
    tempo: "Abaulamento confirma",
    texto: "O diagnóstico exige abaulamento da membrana timpânica (ou otorreia não explicada por otite externa). Hiperemia isolada não é otite média aguda."
  },
  alarmes: [
    "Edema, dor e eritema retroauricular, pavilhão deslocado (mastoidite)",
    "Paralisia facial, vertigem intensa",
    "Cefaleia intensa, rigidez de nuca, rebaixamento (complicação intracraniana)",
    "Toxemia ou febre ≥ 39°C persistente",
    "< 6 meses, imunodeficiência, implante coclear"
  ],
  condutaInicial: [
    "Otoscopia: abaulamento, opacidade, mobilidade reduzida, otorreia",
    "Analgesia para todos (paracetamol ou ibuprofeno)",
    "Decidir entre antibiótico imediato e observação vigiada de 48–72 h",
    "Amoxicilina como primeira escolha",
    "Orientar retorno se piora ou sem melhora em 48–72 h"
  ],
  fataisExcluir: [
    "Mastoidite aguda",
    "Meningite / abscesso cerebral",
    "Trombose de seio sigmoide"
  ],
  proximaDecisao: "Sem melhora em 48–72 h: em observação → iniciar amoxicilina; já em amoxicilina → trocar para amoxicilina-clavulanato.",
  clinica: {
    anamnese: [
      "Otalgia, febre, irritabilidade, alteração do sono, otorreia",
      "IVAS prévia, creche, exposição a fumo",
      "Episódios prévios, antibiótico nos últimos 30 dias",
      "Alergia a penicilina"
    ],
    exameFisico: [
      "Otoscopia bilateral (remover cerume se necessário)",
      "Região retroauricular",
      "Nervo facial, sinais meníngeos",
      "Orofaringe, ausculta pulmonar"
    ],
    diferenciais: [
      { dx: "Otite média com efusão (serosa)", pista: "Líquido sem abaulamento e sem sinais agudos — não usar antibiótico" },
      { dx: "Otite externa", pista: "Dor à tração do pavilhão, conduto edemaciado" },
      { dx: "Miringite / hiperemia por choro", pista: "Hiperemia sem abaulamento" },
      { dx: "Dor referida", pista: "Dente, faringe, ATM" }
    ],
    gravidade: [
      "Grave: otalgia moderada/intensa, otalgia > 48 h ou febre ≥ 39°C",
      "Observação vigiada é opção em: 6–23 meses unilateral não grave sem otorreia; ≥ 2 anos uni ou bilateral não grave sem otorreia"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Otoscopia. Exames complementares não são necessários.",
      porQue: "—",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "TC de mastoides apenas se suspeita de complicação."
    }
  ],
  tratamento: [
    {
      droga: "Amoxicilina",
      linha: "l1",
      dose: "80–90 mg/kg/dia (máx 3 g/dia) · em regiões de baixa resistência: 50 mg/kg/dia",
      via: "VO",
      intervalo: "12/12h (ou 8/8h)",
      duracao: "< 2 anos ou grave: 10 dias · 2–5 anos: 7 dias · ≥ 6 anos: 5–7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Adulto: 500 mg 8/8h ou 875 mg 12/12h"
    },
    {
      droga: "Amoxicilina-clavulanato",
      linha: "alt",
      dose: "90 mg/kg/dia de amoxicilina + 6,4 mg/kg/dia de clavulanato",
      via: "VO",
      intervalo: "12/12h",
      duracao: "10 dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Amoxicilina nos últimos 30 dias, conjuntivite purulenta associada, OMA recorrente ou falha da amoxicilina"
    },
    {
      droga: "Cefuroxima (alergia não grave)",
      linha: "alt",
      dose: "30 mg/kg/dia",
      via: "VO",
      intervalo: "12/12h",
      duracao: "10 dias",
      monitorizacao: "—",
      contraindicacoes: "Anafilaxia a betalactâmicos",
      ajustes: "—"
    },
    {
      droga: "Azitromicina (alergia grave)",
      linha: "alt",
      dose: "10 mg/kg no 1º dia, depois 5 mg/kg/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "5 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Menor eficácia; reservar para anafilaxia a betalactâmicos"
    },
    {
      droga: "Analgesia",
      linha: "l1",
      dose: "Paracetamol 10–15 mg/kg 6/6h · ibuprofeno 5–10 mg/kg 6–8/8h (> 6 meses)",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "Enquanto dor",
      monitorizacao: "—",
      contraindicacoes: "Ibuprofeno: desidratação, < 6 meses",
      ajustes: "Para todos, com ou sem antibiótico. Gotas otológicas e descongestionantes não são recomendados"
    }
  ],
  destino: {
    agora: [
      "Analgesia + antibiótico ou observação vigiada com prescrição de segurança"
    ],
    reavaliar: [
      "48–72 h se sem melhora",
      "Otoscopia de controle em 2–3 meses se efusão persistente ou queixa auditiva"
    ],
    alta: [
      "Tratamento domiciliar"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Mastoidite, complicação intracraniana, toxemia"
    ],
    transferencia: [
      "PS/otorrino: mastoidite, paralisia facial, complicação intracraniana",
      "Otorrino eletivo: ≥ 3 episódios em 6 meses ou ≥ 4 em 12 meses, efusão com perda auditiva > 3 meses"
    ]
  },
  fontes: [
    "AAP — Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media (Pediatrics, 2013)",
    "SBP / ABORL-CCF — Guia prático de otite média aguda",
    "NICE NG91 — Otitis media (acute): antimicrobial prescribing (2018, atualizado 2022)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
