// Escoriações e feridas leves
registrarFicha({
  id: "feridas-escoriacoes",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Escoriações e feridas leves (limpeza, curativo, tétano)",
  resumo: "Ralados (escoriações), cortes superficiais e pequenas feridas de pele sem lesão de estruturas profundas. Pilar do cuidado: limpeza abundante, remoção de sujeira, curativo úmido protegido, profilaxia do tétano e reconhecer quando a ferida precisa de sutura ou de serviço de urgência.",
  palavrasChave: "ferida escoriacao ralado arranhao corte laceracao curativo limpeza soro fisiologico tetano vacina dt antibiotico cefalexina ferida infectada sutura cola mordedura raiva queda bicicleta",
  alarmes: [
    "Sangramento que não para com 10–15 min de compressão direta",
    "Ferida profunda com exposição de gordura, músculo, tendão ou osso; dormência, fraqueza ou palidez distal (lesão de nervo, tendão ou vaso)",
    "Ferida em face com perda de tecido, pálpebras, lábio cruzando o vermelhão, orelha ou genitais",
    "Mordedura animal ou humana (ver profilaxia de raiva e antibiótico)",
    "Ferida por esmagamento, perfuração por prego ou arma, corpo estranho, terra/fezes impregnadas (alto risco de tétano e infecção)",
    "Sinais de infecção: vermelhidão que se espalha, calor, dor crescente, pus, febre, estrias vermelhas (linfangite)",
    "Diabético, imunossuprimido, insuficiência arterial ou ferida em pé com má cicatrização"
  ],
  conduta: [
    "Hemostasia por compressão direta; elevação do membro",
    "Limpar com água corrente potável ou SF 0,9% em abundância (irrigação com seringa de 20 mL e agulha/cateter calibroso em ferida suja) e sabão neutro ao redor",
    "Remover sujeira e corpos estranhos (escova macia ou gaze; anestésico tópico ou local se necessário) — sujeira deixada na escoriação pode tatuar a pele",
    "Não aplicar álcool, água oxigenada ou PVPI dentro da ferida (citotóxicos); antisséptico só na pele ao redor, se usado",
    "Corte: avaliar fechamento — bordas que se aproximam sem tensão e superficiais podem ser fechadas com fita adesiva ou cola; cortes profundos ou que abrem precisam de sutura, de preferência o quanto antes",
    "Escoriação: cobrir com curativo não aderente úmido (gaze com vaselina ou ácidos graxos essenciais) ou hidrocoloide; trocar 1 vez ao dia ou se molhar/sujar",
    "Profilaxia do tétano conforme cartão vacinal e tipo de ferida (ver ficha tetano-profilaxia)",
    "Antibiótico NÃO é necessário em feridas limpas; usar só se infecção instalada ou mordedura com indicação",
    "Analgesia simples"
  ],
  diferenciais: [
    "Queimadura (calor, atrito, química)",
    "Ferida com corpo estranho retido (dor localizada persistente, RX se radiopaco)",
    "Celulite/erisipela já instalada (ver ficha celulite-erisipela)",
    "Lesões autoprovocadas ou por violência (investigar com cuidado; em criança e idoso, considerar maus-tratos e notificar)"
  ],
  exames: [
    "Nenhum exame na ferida simples",
    "RX da região se suspeita de corpo estranho radiopaco (vidro, metal) ou fratura",
    "Glicemia capilar em diabético com ferida infectada"
  ],
  tratamento: [
    {
      droga: "Limpeza com SF 0,9% ou água corrente potável",
      linha: "l1",
      dose: "Volume abundante até remover a sujeira visível",
      via: "Irrigação local",
      intervalo: "No atendimento e a cada troca de curativo",
      duracao: "Até cicatrizar",
      monitorizacao: "Sinais de infecção",
      contraindicacoes: "—",
      ajustes: "Água potável é tão eficaz quanto soro para limpeza. Sabão neutro na pele ao redor"
    },
    {
      droga: "Curativo não aderente (gaze com vaselina ou ácidos graxos essenciais) ou hidrocoloide",
      linha: "l1",
      dose: "Cobrir toda a ferida",
      via: "Tópica",
      intervalo: "Trocar 1 vez ao dia (hidrocoloide: a cada 3–5 dias ou se descolar)",
      duracao: "Até epitelizar (escoriação: em geral 1–2 semanas)",
      monitorizacao: "Exsudato, odor, bordas",
      contraindicacoes: "Hidrocoloide em ferida infectada",
      ajustes: "Ambiente úmido acelera a cicatrização e reduz dor. Não deixar a ferida secar com crosta grossa"
    },
    {
      droga: "Cefalexina (ferida infectada sem gravidade)",
      linha: "l1",
      dose: "Adulto: 500 mg · Criança: 25–50 mg/kg/dia divididos de 6/6 h (máx. 500 mg/dose)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "5–7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "RENAME. Só se celulite ao redor ou pus. Alergia: clindamicina 300 mg de 6/6 h (criança 25–30 mg/kg/dia ÷ 8/8 h, máx. 300 mg/dose — IDSA 2014). Mordedura: amoxicilina + clavulanato (ver ficha específica)"
    },
    {
      droga: "Pomadas de antibiótico (neomicina, bacitracina) e antissépticos dentro da ferida",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Neomicina causa dermatite de contato; álcool, água oxigenada e PVPI lesam o tecido de cicatrização. Vaselina tem efeito semelhante para feridas limpas"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO\nCURATIVO (USO TÓPICO)\n1. Lavar a ferida 1 vez ao dia com água corrente e sabão neutro ao redor (ou soro fisiológico 0,9%), secar a pele em volta sem esfregar a ferida.\n2. Vaselina sólida ou óleo de ácidos graxos essenciais (AGE) --- 1 frasco/bisnaga\n   Aplicar fina camada sobre a ferida e cobrir com gaze; trocar 1 vez ao dia até cicatrizar.\nUSO ORAL\n3. Dipirona 500 mg ----------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n   OU Paracetamol 750 mg: 1 comprimido de 6 em 6 horas se dor (máximo 4 ao dia).\n\nSE FERIDA INFECTADA (vermelhidão ao redor, pus)\n4. Cefalexina 500 mg --------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n\nCRIANÇA (peso: ___ kg)\n- Mesmo curativo.\n- Dipirona gotas 500 mg/mL: 1 gota a cada 2 kg por dose (máx. 40 gotas) de 6/6 h se dor (≥ 3 meses). Paracetamol gotas 200 mg/mL: 1 gota/kg por dose (máx. 35 gotas) de 6/6 h.\n- Se infectada: cefalexina suspensão 250 mg/5 mL — 50 mg/kg/dia divididos de 6/6 h (= 0,25 mL/kg por dose; máx. 10 mL por dose) por 7 dias.\n\nTÉTANO: aplicar vacina dT (ou DTP/penta conforme idade) e/ou imunoglobulina conforme ficha tetano-profilaxia."
  },
  orientacoesRetorno: [
    "Manter a ferida limpa e coberta; trocar o curativo todo dia ou quando molhar ou sujar",
    "Ferida úmida e protegida cicatriza mais rápido e dói menos que ferida seca com casca",
    "Não usar álcool, água oxigenada, pó de café, açúcar ou pomadas caseiras",
    "Completar as doses da vacina antitetânica no posto, conforme o cartão",
    "Proteger do sol a cicatriz nova por alguns meses (evita mancha escura)",
    "Voltar se: vermelhidão espalhando, inchaço, pus, cheiro ruim, febre, riscos vermelhos subindo pelo braço ou perna, ou se a ferida não melhorar em 1 semana",
    "Retirar pontos (se houver) conforme orientado: face em cerca de 5 dias; corpo e membros em 7 a 14 dias"
  ],
  encaminhar: [
    "PS/cirurgia: sangramento incontrolável, lesão de tendão, nervo ou vaso, ferida profunda complexa, perda de tecido, face com acometimento de pálpebra/lábio/orelha, corpo estranho profundo",
    "Mordeduras: seguir ficha de profilaxia da raiva",
    "Sala de curativo/enfermagem da UBS para acompanhamento de feridas em diabéticos e idosos"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2023): tétano acidental — profilaxia em ferimentos",
    "Ministério da Saúde — Manual de Normas e Procedimentos para Vacinação (2024)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011): curativos e suturas",
    "IDSA — Practice guidelines for the diagnosis and management of skin and soft tissue infections (Stevens DL et al., 2014)",
    "Cochrane — Water for wound cleansing (Fernandez R, Griffiths R, 2012)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
