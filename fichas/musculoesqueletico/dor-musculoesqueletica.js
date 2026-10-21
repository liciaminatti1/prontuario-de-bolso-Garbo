// Dor muscular e algias musculoesqueléticas
registrarFicha({
  id: "dor-musculoesqueletica",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Dor muscular e algias musculoesqueléticas",
  resumo: "Mialgia, contratura, distensão muscular, dor miofascial e dor de partes moles (tendinite, bursite) sem sinais de gravidade. Tratamento com analgesia simples, AINE tópico ou oral por poucos dias, calor ou gelo e retorno gradual à atividade. Excluir mialgia febril (dengue, chikungunya, leptospirose), rabdomiólise e miopatia por estatina.",
  palavrasChave: "dor muscular mialgia contratura distensao estiramento dor miofascial ponto gatilho tendinite bursite epicondilite algia dor no corpo diclofenaco gel ibuprofeno naproxeno dipirona paracetamol ciclobenzaprina rabdomiolise estatina cpk",
  critico: {
    tempo: "Mialgia com febre: pensar arbovirose",
    texto: "Dor no corpo com febre é dengue até prova em contrário no Brasil: não prescrever AINE nem AAS e seguir a ficha de dengue. Urina escura com fraqueza e dor muscular intensa: CPK (rabdomiólise)."
  },
  alarmes: [
    "Febre com mialgia intensa, sobretudo em panturrilhas (dengue, chikungunya, leptospirose — exposição a enchente ou lama)",
    "Urina escura (cor de coca-cola), fraqueza intensa, oligúria (rabdomiólise)",
    "Fraqueza muscular proximal objetiva (miopatia inflamatória, por estatina, hipotireoidismo)",
    "Dor desproporcional, tensa e progressiva em compartimento após trauma ou esforço (síndrome compartimental — urgência)",
    "Panturrilha edemaciada, dolorosa e assimétrica (TVP)",
    "Músculo quente, endurecido, com febre (piomiosite/abscesso)",
    "Dor em cinturas com rigidez matinal em > 50 anos (polimialgia reumática; avaliar arterite temporal se cefaleia ou alteração visual)",
    "Dor torácica, em braço esquerdo ou mandíbula com esforço (isquemia cardíaca)"
  ],
  conduta: [
    "Caracterizar: local, início (esforço, trauma, postura), mecânica (piora com o movimento), febre, fraqueza, cor da urina, medicações (estatina, fibrato, colchicina, zidovudina, corticoide)",
    "Examinar: palpação (ponto gatilho, tendão, bursa), força, amplitude de movimento, pele, panturrilhas, sinais vitais",
    "Com febre: aplicar a ficha de dengue/arboviroses; evitar AINE até excluir dengue",
    "Lesão muscular aguda (distensão): proteger a área e gelo 15–20 min nas primeiras 48–72 h; depois carga progressiva e alongamento suave",
    "Contratura e dor miofascial: calor local, alongamento, correção postural, exercício; relaxante muscular só por poucos dias",
    "Analgesia: dipirona ou paracetamol; AINE tópico (diclofenaco gel) como 1ª opção em dor localizada; AINE oral por 5–7 dias se sem contraindicação",
    "Usuário de estatina com mialgia: dosar CPK; suspender se CPK > 10× o limite superior ou sintomas intoleráveis; reintroduzir outra estatina ou dose menor após melhora",
    "Dor que persiste > 4–6 semanas ou recorrente: fisioterapia/eMulti, ergonomia; reavaliar diagnóstico"
  ],
  exames: [
    "Sem sinais de alarme: nenhum exame",
    "CPK, creatinina, potássio e urina tipo 1 (heme sem hemácias): urina escura, fraqueza, esforço extremo, trauma muscular extenso, estatina com mialgia intensa",
    "TSH e CPK: mialgia difusa persistente ou fraqueza",
    "Hemograma, plaquetas, prova do laço e NS1/sorologia conforme fluxo local: mialgia com febre (dengue)",
    "VHS e PCR: suspeita de polimialgia reumática ou doença inflamatória",
    "Ultrassonografia de partes moles: suspeita de ruptura muscular ou tendínea, hematoma, abscesso; doppler venoso se suspeita de TVP",
    "Pedido pronto: \"Solicito CPK, creatinina, potássio, TSH e urina tipo 1. HD: mialgia a esclarecer.\""
  ],
  diferenciais: [
    "Distensão/estiramento muscular, contratura, dor muscular tardia pós-exercício",
    "Síndrome dolorosa miofascial (pontos gatilho com dor referida)",
    "Tendinopatias e bursites (ombro, cotovelo, trocânter, pata de ganso)",
    "Arboviroses (dengue, chikungunya, zika), leptospirose, influenza, COVID-19",
    "Miopatia por estatina, hipotireoidismo, polimiosite/dermatomiosite",
    "Polimialgia reumática; fibromialgia (dor difusa > 3 meses — ficha própria)",
    "Rabdomiólise; síndrome compartimental; TVP"
  ],
  tratamento: [
    {
      droga: "Diclofenaco gel 1% (AINE tópico)",
      linha: "l1",
      dose: "2–4 g na área dolorosa",
      via: "Tópica",
      intervalo: "De 6 em 6 a 8 em 8 horas",
      duracao: "Até 7–14 dias",
      monitorizacao: "Irritação local",
      contraindicacoes: "Pele lesada; suspeita de dengue (cautela)",
      ajustes: "Preferir em dor localizada, idosos e quem tem contraindicação a AINE oral"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "500 mg–1 g (máx 4 g/dia)",
      via: "VO",
      intervalo: "De 6 em 6 horas se dor",
      duracao: "Enquanto dor",
      monitorizacao: "Reação alérgica",
      contraindicacoes: "Alergia a pirazolonas, agranulocitose prévia",
      ajustes: "Alternativa: paracetamol 500–1.000 mg 6/6 h (máx 3 g/dia; 2 g se hepatopatia ou etilismo). Ambos seguros na suspeita de dengue. RENAME"
    },
    {
      droga: "Ibuprofeno",
      linha: "alt",
      dose: "400–600 mg",
      via: "VO",
      intervalo: "De 8 em 8 horas, após refeição",
      duracao: "5–7 dias",
      monitorizacao: "Dispepsia, PA, função renal",
      contraindicacoes: "Suspeita de dengue, úlcera/sangramento GI, ClCr < 30, IC, anticoagulante, gestação ≥ 20 semanas, rabdomiólise",
      ajustes: "Alternativa: naproxeno 500 mg 12/12 h. Omeprazol 20 mg/dia se > 65 anos ou risco GI. RENAME (ibuprofeno)"
    },
    {
      droga: "Ciclobenzaprina",
      linha: "adj",
      dose: "5–10 mg",
      via: "VO",
      intervalo: "À noite (até 8/8 h)",
      duracao: "Até 7 dias",
      monitorizacao: "Sonolência, boca seca",
      contraindicacoes: "Arritmia, IAM recente, glaucoma, retenção urinária, IMAO; evitar em idosos",
      ajustes: "Só em contratura/espasmo; não dirigir. Fora do SUS"
    }
  ],
  prescricao: {
    ambulatorial: "DOR MUSCULAR / ALGIA MUSCULOESQUELÉTICA (sem febre)\nUSO TÓPICO\n1. Diclofenaco dietilamônio gel 1% --------------- 1 bisnaga 60 g\n   Aplicar na área dolorida 3 a 4 vezes ao dia, massageando, por até 10 dias. Lavar as mãos após.\n\nUSO ORAL\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n   (ou Paracetamol 750 mg — 1 comprimido de 6 em 6 horas se dor; máximo 4 comprimidos por dia.)\n3. Ibuprofeno 600 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias, se dor forte. NÃO usar se febre/suspeita de dengue, doença renal, úlcera ou anticoagulante.\n4. Ciclobenzaprina 5 mg --------------------------- 7 comprimidos\n   Tomar 1 comprimido à noite por até 7 dias, se contratura. Não dirigir após tomar.\n\nORIENTAÇÕES\n5. Lesão aguda (primeiros 2–3 dias): gelo envolto em pano por 15–20 minutos, 3 a 4 vezes ao dia. Contratura ou dor crônica: bolsa morna por 20 minutos, 3 vezes ao dia.\n6. Alongamento suave e retorno gradual às atividades conforme a dor permitir.\n\nSE MIALGIA COM FEBRE: não usar ibuprofeno, diclofenaco ou AAS; usar dipirona ou paracetamol e seguir a ficha de dengue."
  },
  orientacoesRetorno: [
    "A maioria das dores musculares melhora em poucos dias a 2 semanas",
    "Movimente-se dentro do limite da dor; repouso total atrasa a recuperação",
    "Não use anti-inflamatório se tiver febre (pode ser dengue)",
    "Volte imediatamente se: urina escura, fraqueza forte, febre, perna inchada e dolorosa, dor que aumenta muito e deixa o membro tenso, falta de ar ou dor no peito",
    "Retorno se não melhorar em 1–2 semanas ou se a dor voltar com frequência"
  ],
  encaminhar: [
    "PS no mesmo dia: rabdomiólise, síndrome compartimental, suspeita de TVP sem doppler disponível, dengue com sinais de alarme",
    "Fisioterapia/eMulti: dor persistente > 4 semanas, dor miofascial recorrente, tendinopatia",
    "Ortopedia: suspeita de ruptura muscular ou tendínea completa",
    "Reumatologia: fraqueza proximal com CPK alta, suspeita de polimialgia reumática ou miopatia inflamatória"
  ],
  fontes: [
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª edição, 2024)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013) e RENAME (versão vigente)",
    "ACP/AAFP — Nonpharmacologic and Pharmacologic Management of Acute Pain From Non–Low Back, Musculoskeletal Injuries in Adults (Ann Intern Med, 2020)",
    "NLA — Statin intolerance: an updated scientific statement (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
