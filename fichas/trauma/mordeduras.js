// Mordeduras de cão, gato e humana
registrarFicha({
  id: "mordeduras",
  especialidade: "trauma",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Mordeduras de cão, gato e humana",
  resumo: "Cuidado da ferida por mordedura: lavagem abundante, decisão sobre sutura, antibiótico profilático (amoxicilina-clavulanato) quando indicado, tétano e avaliação da profilaxia da raiva.",
  palavrasChave: "mordedura mordida cao cachorro gato humana soco na boca briga amoxicilina clavulanato pasteurella capnocytophaga eikenella raiva tetano sutura ferida mao",
  critico: {
    tempo: "Lavar com água e sabão já",
    texto: "Lavar a ferida com água e sabão em abundância por vários minutos e irrigar com SF 0,9%. Avaliar sempre raiva (ficha raiva-profilaxia) e tétano (ficha tetano-profilaxia)."
  },
  alarmes: [
    "Mordedura na mão, punho, pé, face ou genitais; ferida sobre articulação ou tendão",
    "Ferida por soco na boca de outra pessoa (lesão da articulação metacarpofalângica)",
    "Mordedura de gato (punctiforme, profunda — alto risco de infecção)",
    "Febre, celulite que se espalha, linfangite, dor ao mover o dedo, edema fusiforme do dedo (tenossinovite)",
    "Asplenia, cirrose, imunossupressão, diabetes (risco de sepse por Capnocytophaga)",
    "Lesão extensa, esmagamento, fratura, lesão de nervo, vaso ou tendão; criança pequena com mordida em cabeça/pescoço (pode haver lesão craniana)"
  ],
  conduta: [
    "Controlar sangramento; anestesia local se necessário",
    "Lavar com água e sabão em abundância e irrigar sob pressão com SF 0,9% (seringa 20 mL com agulha 18–19 G ou cateter); remover corpos estranhos e desbridar tecido desvitalizado",
    "Explorar: tendão, articulação, osso (RX se suspeita de fratura, dente/corpo estranho ou mordida sobre osso)",
    "Sutura: em geral NÃO suturar feridas punctiformes, de mão e pé, com > 12–24 h, ou de mordida de gato/humana. Face: pode suturar após irrigação e desbridamento cuidadosos, com antibiótico profilático. Feridas grandes: aproximar sem fechar totalmente ou fechamento tardio em 72 h",
    "Antibiótico profilático por 3–5 dias se: mordida de gato ou humana, mão/pé/face/genitais, ferida punctiforme profunda, ferida perto de osso ou articulação, esmagamento/edema, imunossupressão, asplenia, cirrose",
    "Infecção instalada: amoxicilina-clavulanato por tempo maior; internar se sistêmica, tenossinovite, artrite ou osteomielite",
    "Tétano: mordedura é ferimento de alto risco (ficha tetano-profilaxia)",
    "Raiva: avaliar animal (espécie, observável por 10 dias se cão ou gato), local e gravidade da lesão — seguir a ficha raiva-profilaxia. Lavar bem é a primeira medida também contra a raiva",
    "Notificar o atendimento antirrábico humano (SINAN) e orientar observação do animal",
    "Mordida humana: considerar exposição a hepatite B, hepatite C e HIV (sangue na boca do agressor) — avaliar profilaxia conforme protocolo de exposição"
  ],
  exames: [
    "Em geral nenhum",
    "RX se suspeita de fratura, corpo estranho (dente) ou mordida sobre articulação/osso (soco na boca)",
    "Cultura de secreção apenas se ferida infectada",
    "Mordida humana com sangue: sorologias de HIV, hepatite B e C e sífilis da vítima (e do agressor se possível)"
  ],
  diferenciais: [
    "Celulite/erisipela sem mordedura (ver ficha celulite-erisipela)",
    "Arranhadura de gato com linfadenopatia regional (doença da arranhadura do gato — Bartonella)"
  ],
  tratamento: [
    {
      droga: "Amoxicilina + clavulanato",
      linha: "l1",
      dose: "Adulto: 875/125 mg · Criança: 45 mg/kg/dia de amoxicilina (máx 875 mg/dose)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Profilaxia: 3–5 dias · Infecção: em geral 7–14 dias, mais se osso/articulação",
      monitorizacao: "Diarreia, reação alérgica",
      contraindicacoes: "Alergia a penicilina; icterícia prévia com amoxicilina-clavulanato",
      ajustes: "Suspensão 400 mg + 57 mg/5 mL. ClCr < 30: não usar a apresentação de 875 mg. Infecção grave: amoxicilina-clavulanato IV 1 g/200 mg de 8/8 h (criança 25–30 mg/kg/dose de amoxicilina de 8/8 h, máx 1 g) ou ampicilina-sulbactam"
    },
    {
      droga: "Doxiciclina (alergia a penicilina, adulto)",
      linha: "alt",
      dose: "100 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Mesma do esquema principal",
      monitorizacao: "Fotossensibilidade, esofagite (tomar com água, sentado)",
      contraindicacoes: "Gestação",
      ajustes: "Alternativa: sulfametoxazol-trimetoprima 800/160 mg de 12/12 h + clindamicina 300 mg de 8/8 h (cobre anaeróbios)"
    },
    {
      droga: "Sulfametoxazol-trimetoprima + clindamicina (alergia a penicilina, criança)",
      linha: "alt",
      dose: "SMX-TMP: 8 mg/kg/dia de trimetoprima (máx 160 mg/dose) · Clindamicina: 10 mg/kg/dose (máx 450 mg/dose)",
      via: "VO",
      intervalo: "SMX-TMP 12/12 h · Clindamicina 8/8 h",
      duracao: "Mesma do esquema principal",
      monitorizacao: "Exantema, diarreia",
      contraindicacoes: "SMX-TMP: < 2 meses, deficiência de G6PD",
      ajustes: "Clindamicina sozinha não cobre Pasteurella — sempre associar"
    }
  ],
  prescricao: {
    ambulatorial: "PROFILAXIA APÓS MORDEDURA — ADULTO\nUSO ORAL\n1. Amoxicilina + clavulanato de potássio 875 mg + 125 mg ---- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, junto com a refeição, por 5 dias.\n2. Dipirona 500 mg -------------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n\nALERGIA A PENICILINA (adulto, não gestante)\n1. Doxiciclina 100 mg ----------------------------------------- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com um copo de água, sem deitar em seguida, por 5 dias.\n\nCRIANÇA (peso: ___ kg)\n1. Amoxicilina + clavulanato de potássio suspensão 400 mg + 57 mg/5 mL ---- 1 frasco\n   Dar ___ mL (45 mg/kg/dia de amoxicilina ÷ 2 = 0,28 mL/kg por dose) de 12 em 12 horas por 5 dias (máx 875 mg por dose).\n2. Dipirona 500 mg/mL gotas — 15 mg/kg/dose (≈ 0,6 gota/kg; máx 40 gotas) de 6 em 6 horas se dor ou febre.\n\nCUIDADOS LOCAIS\nLavar a ferida com água e sabão 2 vezes ao dia; curativo limpo e seco; manter o membro elevado."
  },
  orientacoesRetorno: [
    "Lavar com água e sabão e manter o curativo limpo; elevar a mão ou o pé mordido nas primeiras 48 h",
    "Voltar em 24–48 h para revisão se mordida na mão ou ferida de risco",
    "Voltar imediatamente se: vermelhidão que aumenta, pus, febre, riscos vermelhos subindo pelo braço ou perna, dor para mexer o dedo, inchaço que aumenta",
    "Se o cão ou gato for observável: observar o animal por 10 dias e avisar a unidade se ele adoecer, sumir ou morrer",
    "Seguir corretamente as doses da vacina antirrábica, se indicada — não faltar nas datas"
  ],
  encaminhar: [
    "PS/cirurgia de mão no mesmo dia: lesão de tendão, articulação, nervo ou vaso; soco na boca com lesão articular; tenossinovite",
    "Internação: infecção sistêmica, celulite grave ou que piora com antibiótico oral, imunossuprimido/asplênico infectado",
    "Cirurgia plástica: lesões extensas de face"
  ],
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: animal and human bites (Clin Infect Dis, 2014)",
    "Ministério da Saúde — Protocolo de Profilaxia pré, pós e reexposição da raiva humana no Brasil (2022) e Guia de Vigilância em Saúde (2024)",
    "Ministério da Saúde — Guia de Vigilância em Saúde: tétano acidental (2024)",
    "American Academy of Pediatrics — Red Book: Bite wounds (2024–2027)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
