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
      dose: "80–90 mg/kg/dia (máx 2 g/dose)",
      via: "VO",
      intervalo: "12/12h (ou 8/8h)",
      duracao: "< 2 anos ou grave: 10 dias · 2–5 anos: 7 dias · ≥ 6 anos: 5–7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Adulto: 500 mg 8/8h ou 875 mg 12/12h por 5–7 dias. Suspensão 250 mg/5 mL ou 400 mg/5 mL"
    },
    {
      droga: "Amoxicilina-clavulanato",
      linha: "alt",
      dose: "90 mg/kg/dia de amoxicilina + 6,4 mg/kg/dia de clavulanato (máx 2 g de amoxicilina/dose)",
      via: "VO",
      intervalo: "12/12h",
      duracao: "10 dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Amoxicilina nos últimos 30 dias, conjuntivite purulenta associada, OMA recorrente ou falha da amoxicilina. Usar suspensão 400/57 mg por 5 mL (relação 7:1) para não exceder o clavulanato. Adulto: 875/125 mg 12/12h. Vômitos ou falha: ceftriaxona 50 mg/kg IM/IV 1×/dia (máx 1 g) por 1–3 dias"
    },
    {
      droga: "Cefuroxima (alergia não grave)",
      linha: "alt",
      dose: "30 mg/kg/dia (máx 1 g/dia)",
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
      dose: "10 mg/kg no 1º dia (máx 500 mg), depois 5 mg/kg/dia (máx 250 mg)",
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
      dose: "Paracetamol 10–15 mg/kg 6/6h (máx 75 mg/kg/dia; adulto 500–1.000 mg) · ibuprofeno 5–10 mg/kg 6–8/8h (> 6 meses; máx 40 mg/kg/dia; adulto 400 mg) · dipirona 10–15 mg/kg 6/6h (> 3 meses)",
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
  prescricao: {
    ambulatorial: "CRIANÇA (exemplo 15 kg)\nUSO ORAL\n1. Amoxicilina 400 mg/5 mL suspensão ----------------- frascos para 170 mL\n   Dar 8,5 mL (≈ 90 mg/kg/dia) de 12 em 12 horas por 10 dias (< 2 anos ou grave) ou 7 dias (2–5 anos).\n2. Paracetamol 200 mg/mL gotas ------------------------ 1 frasco\n   Dar 15 gotas (1 gota/kg; máx 35 gotas) de 6 em 6 horas se dor ou febre.\n   OU Ibuprofeno 50 mg/mL gotas: 1 a 2 gotas por kg (máx 40 gotas) de 8 em 8 horas se dor (> 6 meses).\n\nOBSERVAÇÃO VIGIADA (prescrição de segurança)\n- Analgesia como acima e iniciar a amoxicilina só se não melhorar em 48–72 horas ou se piorar.\n\nFALHA / AMOXICILINA RECENTE\n3. Amoxicilina + clavulanato 400/57 mg por 5 mL --- frascos para 170 mL\n   Dar 8,5 mL de 12 em 12 horas por 10 dias.\n\nADULTO\n1. Amoxicilina 500 mg ------------------------------- 21 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 7 dias.\n2. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor."
  },
  orientacoesRetorno: [
    "A dor costuma melhorar em 24 a 72 horas; dar o analgésico nos horários enquanto houver dor",
    "Se receber antibiótico, dar até o fim, mesmo que melhore antes",
    "Não pingar nada no ouvido nem usar cotonete",
    "Voltar imediatamente se inchaço, vermelhidão ou dor atrás da orelha, orelha \"empurrada\" para frente, rosto torto, dor de cabeça forte, rigidez de nuca, sonolência ou vômitos repetidos",
    "Voltar em 48–72 horas se a febre ou a dor não melhorarem",
    "Retornar em 2–3 meses se a criança parecer não ouvir bem",
    "Prevenção: aleitamento materno, vacinas em dia (pneumocócica e influenza), evitar fumaça de cigarro e mamadeira deitado"
  ],
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h de amoxicilina", "Confirmar OMA à otoscopia; trocar para amoxicilina-clavulanato 90 mg/kg/dia de amoxicilina", "AAP 2013"],
        ["Falha da amoxicilina-clavulanato", "Ceftriaxona 50 mg/kg IM/IV 1×/dia (máx. 1 g) por 3 dias", "—"],
        ["Falha da ceftriaxona", "ORL: timpanocentese com cultura; clindamicina ± cefalosporina de 3ª geração conforme cultura", "Pensar em pneumococo resistente"],
        ["Alergia à penicilina", "Não grave: cefuroxima; grave: azitromicina (menor eficácia) ou clindamicina", "—"],
        ["Mastoidite, paralisia facial, sinais meníngeos ou toxemia", "Internar; antibiótico IV e ORL (ver mastoidite, meningite)", "—"]
      ]
    }
  ],
  fontes: [
    "AAP — Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media (Pediatrics, 2013)",
    "SBP / ABORL-CCF — Guia prático de otite média aguda",
    "NICE NG91 — Otitis media (acute): antimicrobial prescribing (2018, atualizado 2022)"
  ],
  revisao: "2026-10-25",
  versao: "1.3"
});
