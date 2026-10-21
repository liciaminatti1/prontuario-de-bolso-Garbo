// Mastoidite aguda
registrarFicha({
  id: "mastoidite",
  especialidade: "oftalmo-otorrino",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Mastoidite aguda",
  resumo: "Complicação da otite média aguda, mais comum em crianças pequenas: dor, edema e eritema retroauricular, pavilhão deslocado para frente e para baixo, febre e otite média no exame. Exige internação, antibiótico IV e avaliação do otorrinolaringologista.",
  palavrasChave: "mastoidite otite media complicada retroauricular pavilhao deslocado abscesso subperiosteo ceftriaxona oxacilina clindamicina tomografia mastoidectomia",
  critico: {
    tempo: "Antibiótico IV + ORL hoje",
    texto: "Suspeita clínica de mastoidite: colher exames, iniciar ceftriaxona IV e acionar ORL. TC de mastoide com contraste se abscesso, sinais neurológicos ou sem melhora em 24–48 h."
  },
  alarmes: [
    "Cefaleia intensa, vômitos, rigidez de nuca, rebaixamento, convulsão (meningite, abscesso cerebral)",
    "Paralisia facial periférica",
    "Vertigem, nistagmo (labirintite)",
    "Edema de papila, cefaleia persistente, estrabismo novo — paralisia do VI par (trombose de seio venoso)",
    "Massa flutuante retroauricular (abscesso subperiosteal) ou edema cervical (abscesso de Bezold)",
    "Toxemia, sepse"
  ],
  conduta: [
    "Confirmar: otoscopia com otite média (abaulamento ou otorreia) + sinais retroauriculares; em lactentes o pavilhão pode deslocar-se para fora e para baixo",
    "Hemograma, PCR, hemocultura; cultura de secreção se otorreia ou drenagem",
    "Iniciar antibiótico IV: ceftriaxona (ampliar com oxacilina ou clindamicina se suspeita de S. aureus, quadro grave ou uso prévio de antibiótico)",
    "TC de ossos temporais/crânio com contraste: suspeita de complicação intracraniana, abscesso subperiosteal, sinais neurológicos, ou falha após 24–48 h",
    "ORL no mesmo dia: miringotomia/timpanostomia para drenagem e cultura; drenagem de abscesso ou mastoidectomia conforme achados",
    "Analgesia e antitérmico; hidratação",
    "Neurocirurgia se complicação intracraniana"
  ],
  exames: [
    "Hemograma, PCR, hemocultura (antes do antibiótico)",
    "Cultura e Gram da secreção de ouvido/abscesso",
    "TC de ossos temporais e crânio com contraste (ou RM com angio-RM venosa se suspeita de trombose de seio sigmoide)",
    "Ureia, creatinina, eletrólitos",
    "Punção lombar se sinais meníngeos e após imagem que exclua efeito de massa"
  ],
  diferenciais: [
    "Otite externa grave com celulite retroauricular (dor à tração do pavilhão, conduto edemaciado, membrana normal)",
    "Linfadenite retroauricular (couro cabeludo: pediculose, dermatite)",
    "Celulite/erisipela de pavilhão, pericondrite",
    "Trauma, picada de inseto",
    "Colesteatoma infectado, neoplasia (histiocitose, rabdomiossarcoma) em quadros atípicos"
  ],
  tratamento: [
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "Criança: 50–75 mg/kg/dia (máx 2 g/dia); com suspeita de complicação intracraniana 100 mg/kg/dia (máx 4 g/dia) · Adulto: 2 g/dia (4 g/dia se complicação intracraniana)",
      via: "IV, diluída em SF 0,9% ou SG 5% e infundida em 30 min",
      intervalo: "1 vez ao dia (ou 12/12 h na dose de 100 mg/kg/dia)",
      duracao: "IV até melhora clínica franca (em geral 5–7 dias), completando 2–3 semanas no total com antibiótico oral conforme ORL",
      monitorizacao: "Febre, sinais locais, neurológicos",
      contraindicacoes: "Anafilaxia a betalactâmicos; neonatos com hiperbilirrubinemia",
      ajustes: "Alternativa: cefotaxima. Alergia grave: discutir com infectologia (ex.: clindamicina + quinolona em adulto)"
    },
    {
      droga: "Oxacilina (suspeita de S. aureus sensível)",
      linha: "adj",
      dose: "Criança: 150–200 mg/kg/dia (máx 12 g/dia) · Adulto: 2 g",
      via: "IV, infundir em 30–60 min",
      intervalo: "Criança: 6/6 h · Adulto: 4/4 h",
      duracao: "Conforme culturas e evolução",
      monitorizacao: "Hemograma, função hepática, flebite",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Associar à ceftriaxona em quadros graves, abscesso, falha de amoxicilina-clavulanato ou otorreia crônica"
    },
    {
      droga: "Clindamicina (alternativa para cobrir S. aureus/anaeróbios)",
      linha: "alt",
      dose: "Criança: 30–40 mg/kg/dia (máx 2,7 g/dia) · Adulto: 600 mg",
      via: "IV, diluída e infundida em 20–60 min",
      intervalo: "Criança: 6/6 ou 8/8 h · Adulto: 8/8 h",
      duracao: "Conforme culturas",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "—",
      ajustes: "Útil em alérgicos a penicilina e onde há MRSA comunitário; vancomicina se grave com risco de MRSA"
    },
    {
      droga: "Dipirona",
      linha: "adj",
      dose: "Adulto: 1 g · Criança: 15–25 mg/kg/dose (máx 1 g)",
      via: "IV ou VO",
      intervalo: "6/6 h se dor ou febre",
      duracao: "Conforme necessidade",
      monitorizacao: "PA",
      contraindicacoes: "Alergia a dipirona",
      ajustes: "Associar AINE ou opioide fraco se dor intensa"
    }
  ],
  prescricao: {
    hospitalar: "MASTOIDITE AGUDA — CRIANÇA INTERNADA (exemplo 15 kg)\n1. Dieta oral conforme aceitação (jejum se cirurgia programada).\n2. Acesso venoso; soro de manutenção isotônico se baixa aceitação.\n3. Ceftriaxona 75 mg/kg/dia = 1.125 mg IV 1×/dia, diluída em 50 mL de SF 0,9%, infundir em 30 min (máx 2 g/dia; 100 mg/kg/dia ÷ 12/12 h se suspeita de complicação intracraniana, máx 4 g/dia).\n4. Se grave, abscesso ou suspeita de S. aureus: + oxacilina 50 mg/kg/dose = 750 mg IV de 6/6 h, diluída em SF 0,9% e infundida em 30–60 min (ou clindamicina 10 mg/kg/dose = 150 mg IV de 8/8 h, em 30 min).\n5. Dipirona 15–25 mg/kg/dose = 225–375 mg IV de 6/6 h se dor ou febre.\n6. Ibuprofeno 10 mg/kg/dose VO de 8/8 h se dor (se sem contraindicação).\n7. Avaliação ORL hoje (miringotomia/timpanostomia, drenagem); TC de ossos temporais e crânio com contraste conforme indicação.\n8. Controles: temperatura, sinais vitais de 4/4 h; exame neurológico e de nervo facial diário; hemograma e PCR em 48–72 h.\n\nADULTO\nCeftriaxona 2 g IV 1×/dia (4 g/dia ÷ 12/12 h se complicação intracraniana) ± oxacilina 2 g IV de 4/4 h ou clindamicina 600 mg IV de 8/8 h; dipirona 1 g IV de 6/6 h se dor."
  },
  orientacoesRetorno: [
    "Completar o antibiótico oral prescrito na alta até o fim",
    "Não molhar o ouvido se foi colocado tubo de ventilação, até liberação do ORL",
    "Voltar imediatamente se: febre que volta, inchaço atrás da orelha, dor de cabeça forte, vômitos, sonolência, boca torta, tontura ou convulsão",
    "Retorno com ORL em 1 semana após a alta e audiometria após a resolução"
  ],
  encaminhar: [
    "Todos: internação hospitalar com ORL disponível (transferir se não houver)",
    "Complicação intracraniana: neurocirurgia e UTI",
    "Na transferência: fazer a 1ª dose de ceftriaxona antes da remoção"
  ],
  fontes: [
    "ABORL-CCF / SBP — Otite média aguda e complicações: recomendações (2023)",
    "American Academy of Pediatrics — Clinical Practice Guideline: Diagnosis and Management of Acute Otitis Media (2013) e Red Book (2024–2027)",
    "Revisões: Loh R et al., Management of paediatric acute mastoiditis, J Laryngol Otol (2018); NICE CKS Otitis media — complications (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
