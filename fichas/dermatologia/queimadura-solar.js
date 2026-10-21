// Queimadura solar leve
registrarFicha({
  id: "queimadura-solar",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Queimadura solar leve",
  resumo: "Inflamação aguda da pele após exposição excessiva à radiação ultravioleta: eritema, calor, dor e, nos casos mais intensos, bolhas (queimadura de 2º grau superficial), surgindo horas após a exposição e com pico em 12–24 h. Tratamento sintomático: resfriar, hidratar, analgesia com AINE e prevenção.",
  palavrasChave: "queimadura solar insolacao vermelhidao pele sol praia eritema solar bolha ultravioleta protetor solar fotoprotecao ibuprofeno hidratante aloe vera calamina",
  alarmes: [
    "Bolhas extensas (grande parte de um segmento do corpo) ou queimadura de 2º grau em face, mãos, pés, genitais ou articulações",
    "Febre, calafrios, cefaleia intensa, náuseas, vômitos, tontura ou confusão (insolação / intermação — urgência)",
    "Sinais de desidratação: boca seca, pouca urina, taquicardia, hipotensão",
    "Lactente ou idoso frágil com queimadura significativa",
    "Sinais de infecção nas bolhas rompidas (pus, vermelhidão que se espalha)",
    "Reação desproporcional a pouca exposição ou em áreas cobertas (fotossensibilidade por medicamento: tetraciclinas, sulfas, tiazídicos, amiodarona, AINE; lúpus; porfiria)"
  ],
  conduta: [
    "Avaliar extensão e profundidade; se bolhas extensas ou sinais sistêmicos, seguir ficha queimaduras",
    "Resfriar a pele: banho ou compressas com água fria (não gelada) por 15–20 min, várias vezes ao dia; não aplicar gelo direto",
    "Hidratante leve sem perfume (pode ser gel de aloe vera ou loção de calamina) várias vezes ao dia",
    "Analgesia: AINE (ibuprofeno) nas primeiras 24–48 h reduz dor e inflamação; paracetamol ou dipirona como alternativa",
    "Bolhas: não romper; se romperem, limpar com água e sabão neutro e cobrir com curativo não aderente (vaselina)",
    "Hidratação oral aumentada",
    "Evitar produtos com benzocaína, lidocaína ou outros anestésicos tópicos (podem causar dermatite de contato) e manteiga, óleo, pasta de dente ou pó de café",
    "Corticoide tópico tem benefício pequeno; não usar corticoide oral",
    "Revisar medicamentos fotossensibilizantes e orientar fotoproteção"
  ],
  diferenciais: [
    "Fitofotodermatite (limão, figo + sol: manchas e bolhas em respingos e escorridos)",
    "Fotossensibilidade por medicamento (fototóxica ou fotoalérgica)",
    "Lúpus eritematoso (fotossensibilidade, eritema malar, sintomas sistêmicos)",
    "Queimadura térmica ou química",
    "Insolação/intermação (hipertermia com alteração neurológica)"
  ],
  exames: [
    "Nenhum exame na queimadura solar leve",
    "Eletrólitos e creatinina só se desidratação ou sinais sistêmicos importantes"
  ],
  tratamento: [
    {
      droga: "Ibuprofeno",
      linha: "l1",
      dose: "Adulto: 400 mg · Criança ≥ 6 meses: 10 mg/kg/dose (máx. 400 mg/dose)",
      via: "VO",
      intervalo: "6/6 a 8/8 h, após alimentação",
      duracao: "2–3 dias",
      monitorizacao: "Dor epigástrica",
      contraindicacoes: "Úlcera péptica ativa, DRC, desidratação importante, gestação no 3º trimestre, alergia a AINE, dengue suspeita",
      ajustes: "RENAME (comprimido e suspensão 50 mg/mL — conferir REMUME). Alternativa: paracetamol ou dipirona"
    },
    {
      droga: "Hidratante / gel de aloe vera / loção de calamina",
      linha: "l1",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "Várias vezes ao dia",
      duracao: "Até a descamação terminar",
      monitorizacao: "Irritação",
      contraindicacoes: "Alergia a componentes",
      ajustes: "Preferir produtos sem perfume e sem álcool. Guardar na geladeira alivia mais"
    },
    {
      droga: "Hidrocortisona 1% creme",
      linha: "adj",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "Até 3 dias",
      monitorizacao: "—",
      contraindicacoes: "Pele com bolhas rompidas/infecção",
      ajustes: "Benefício pequeno; pode aliviar a inflamação se iniciado cedo. Criança: áreas pequenas"
    },
    {
      droga: "Anestésicos tópicos (benzocaína, lidocaína spray) e corticoide oral",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Anestésicos tópicos podem causar dermatite de contato; corticoide oral não traz benefício"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO\nUSO ORAL\n1. Ibuprofeno 400 mg --------------------------- 9 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 3 dias.\n   (Se contraindicação a AINE: dipirona 500 mg, 1 a 2 comprimidos de 6 em 6 horas, ou paracetamol 750 mg de 6 em 6 horas.)\nUSO TÓPICO\n2. Gel de aloe vera ou hidratante sem perfume (ou loção de calamina) ---- 1 frasco\n   Aplicar na pele vermelha 4 a 6 vezes ao dia até parar de descamar.\n3. Banhos ou compressas com água fria (não gelada) por 15 a 20 minutos, 3 a 4 vezes ao dia.\n4. Beber mais água que o habitual.\n\nCRIANÇA ≥ 6 MESES (peso: ___ kg)\n1. Ibuprofeno suspensão oral 50 mg/mL: 10 mg/kg por dose (= 0,2 mL/kg; máx. 400 mg = 8 mL) de 8 em 8 horas, após alimentação, por até 3 dias. Se usar ibuprofeno em gotas, conferir a concentração e o número de gotas por mL na bula.\n   OU Paracetamol gotas 200 mg/mL: 1 gota/kg por dose (máx. 35 gotas) de 6 em 6 horas se dor.\n2. Mesmos cuidados locais (itens 2 a 4)."
  },
  orientacoesRetorno: [
    "A vermelhidão melhora em 3 a 5 dias e a pele descasca depois; não arrancar a pele",
    "Não estourar as bolhas; se estourarem, lavar com água e sabão neutro e cobrir",
    "Ficar longe do sol até a pele melhorar",
    "Prevenção: evitar sol entre 10 h e 16 h; usar chapéu, roupa, óculos escuros e protetor solar FPS 30 ou maior, aplicado 15–30 min antes e reaplicado a cada 2 horas e após banho ou suor",
    "Bebês com menos de 6 meses não devem ficar expostos diretamente ao sol",
    "Voltar ou procurar o PS se: febre, calafrios, vômitos, tontura, confusão, bolhas grandes ou em muitas áreas, pouca urina, ou sinais de infecção",
    "Queimaduras solares repetidas aumentam o risco de câncer de pele: examinar a pele e procurar a UBS se surgir pinta nova ou que muda"
  ],
  encaminhar: [
    "PS: queimadura de 2º grau extensa, sinais de insolação, desidratação, lactente com bolhas (ver ficha queimaduras)",
    "Dermatologia: fotossensibilidade sem causa clara ou suspeita de doença fotossensível (lúpus, porfiria)"
  ],
  fontes: [
    "Sociedade Brasileira de Dermatologia — Consenso Brasileiro de Fotoproteção (2014; orientações de campanha Dezembro Laranja vigentes)",
    "American Academy of Dermatology — How to treat sunburn (orientação atual)",
    "Ministério da Saúde / INCA — Câncer de pele: prevenção e fotoproteção",
    "Sociedade Brasileira de Pediatria — Fotoproteção na infância e adolescência (Departamento de Dermatologia)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
