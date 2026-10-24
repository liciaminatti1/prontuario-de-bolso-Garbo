// Acesso venoso periférico e coleta de sangue venoso
registrarFicha({
  id: "acesso-venoso-periferico",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Acesso venoso periférico e coleta de sangue",
  resumo: "Punção venosa periférica com cateter sobre agulha (jelco/abocath) para infusão, e punção para coleta de sangue com a ordem correta dos tubos, em adultos e crianças.",
  palavrasChave: "acesso venoso periferico puncao venosa avp jelco abocath cateter periferico calibre 14 16 18 20 22 24 coleta de sangue venopuncao ordem dos tubos vacutainer garrote flebite infiltracao extravasamento hemocultura",
  critico: {
    tempo: "2 tentativas e chamar ajuda",
    texto: "No paciente grave, não insistir: após 2 tentativas sem sucesso (ou 90 s na PCR/criança grave), passar para via intraóssea. Em choque ou trauma, usar 2 acessos calibrosos (14–18 G)."
  },
  alarmes: [
    "Dor, edema, palidez ou frieza ao redor do cateter durante infusão: infiltração/extravasamento — parar a infusão",
    "Droga vesicante extravasada (vasopressor, cálcio, glicose 50%, bicarbonato, quimioterápico): parar, aspirar pelo cateter, avisar e seguir protocolo",
    "Punção arterial acidental (sangue vermelho vivo, pulsátil): retirar e comprimir por 5 min ou mais",
    "Paciente grave sem acesso após 2 tentativas ou 90 s: acesso intraósseo"
  ],
  indicacoes: [
    "Administração de medicamentos IV, hidratação, hemoderivados e contraste",
    "Acesso de segurança em paciente instável ou com risco de piora",
    "Coleta de sangue para exames laboratoriais e hemoculturas"
  ],
  contraindicacoes: [
    "Membro com fístula arteriovenosa para diálise (não puncionar nem garrotear)",
    "Membro do lado de mastectomia com esvaziamento axilar ou linfedema (relativa: evitar)",
    "Pele com infecção, queimadura, flebite ou trombose no local",
    "Membro com fratura, trauma importante ou proximal a lesão vascular (no trauma, puncionar o outro membro)",
    "Membro parético (relativa: preferir o lado não acometido)"
  ],
  materiais: [
    "Luvas de procedimento, bandeja limpa",
    "Garrote (preferir de uso único)",
    "Antisséptico: clorexidina alcoólica > 0,5% (ou álcool 70% se não houver)",
    "Cateter sobre agulha com dispositivo de segurança: 14 G a 24 G (ver tabela); no adulto estável 20–22 G; no choque/trauma 14–18 G; na criança 22–24 G",
    "Extensor ou polifix (2 vias) já preenchido com SF 0,9%",
    "Seringa de 10 mL com SF 0,9% para teste (flush)",
    "Curativo estéril transparente (filme) ou gaze e fita estéril",
    "Para coleta: sistema a vácuo (adaptador e agulha 25 × 8 ou 25 × 7) ou scalp 21–23 G; tubos identificados; frascos de hemocultura",
    "Gazes, algodão, coletor de perfurocortante ao alcance da mão",
    "Criança: imobilizador de membro (tala), anestésico tópico se disponível, auxiliar para conter"
  ],
  checagemAntes: [
    "Paciente correto (2 identificadores) e indicação; explicar o procedimento",
    "Alergias: clorexidina, látex, esparadrapo",
    "Escolher o membro: evitar fístula, mastectomia, membro com trauma ou infecção; preferir membro não dominante",
    "Uso de anticoagulante ou plaquetopenia (comprimir mais tempo)",
    "Para coleta: exames solicitados, tubos corretos e etiquetas, jejum quando exigido; se há soro correndo, colher do outro braço",
    "Coletor de perfurocortante perto do leito"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Higienizar as mãos e reunir o material; preencher o extensor com SF 0,9% sem bolhas",
      "Posicionar o membro apoiado, abaixo do nível do coração; boa iluminação",
      "Garrotear 5–10 cm acima do local escolhido; pedir para abrir e fechar a mão (não bater na veia com força)",
      "Escolher a veia: começar distal (dorso da mão, antebraço) e subir; evitar áreas de flexão. No paciente grave, a fossa antecubital é aceitável (veia calibrosa)",
      "Criança: dorso da mão, dorso do pé, antebraço, fossa antecubital; no lactente, veias do couro cabeludo são opção. Transiluminação ou USG ajudam"
    ] },
    { etapa: "Antissepsia", itens: [
      "Calçar luvas de procedimento",
      "Aplicar clorexidina alcoólica com fricção por cerca de 30 s e deixar secar completamente; não palpar de novo o local após a antissepsia"
    ] },
    { etapa: "Punção com cateter", itens: [
      "Tracionar a pele abaixo do local com a mão não dominante para fixar a veia",
      "Introduzir o cateter com o bisel para cima, ângulo de 15–30° (mais baixo em veias superficiais)",
      "Ao ver o refluxo de sangue na câmara, baixar o ângulo e avançar mais 1–2 mm",
      "Deslizar o cateter para dentro da veia mantendo a agulha parada; nunca reintroduzir a agulha no cateter (risco de cortar o cateter)",
      "Soltar o garrote, comprimir a veia acima da ponta do cateter e retirar a agulha (ativar o dispositivo de segurança); descartar no coletor",
      "Conectar o extensor e testar com 5–10 mL de SF 0,9%: deve correr sem resistência, sem dor e sem edema"
    ] },
    { etapa: "Coleta de sangue (se indicada)", itens: [
      "Coleta isolada: garrote por no máximo 1 min; puncionar com agulha do sistema a vácuo, bisel para cima, ângulo de cerca de 30°",
      "Se colher pelo cateter recém-inserido, colher antes de infundir qualquer solução",
      "Hemocultura: antissepsia rigorosa, desinfetar a tampa do frasco com álcool 70%, colher primeiro; volume recomendado pelo fabricante (adulto em geral 8–10 mL por frasco)",
      "Seguir a ordem dos tubos (tabela) e completar o volume de cada tubo; homogeneizar por inversão suave (não agitar)",
      "Soltar o garrote antes de retirar a agulha; comprimir com gaze (sem dobrar o braço) por 1–2 min ou mais se anticoagulado",
      "Identificar os tubos na frente do paciente"
    ] },
    { etapa: "Fixação e finalização", itens: [
      "Fixar com curativo estéril transparente, deixando o sítio visível; não envolver o membro com fita circular apertada",
      "Identificar o curativo com data, hora, calibre e responsável",
      "Criança: imobilizar a articulação com tala acolchoada, deixando os dedos visíveis",
      "Recolher o material, descartar perfurocortantes e higienizar as mãos"
    ] }
  ],
  conferirDepois: [
    "Infusão correndo livre, sem dor, edema, palidez ou frieza no local",
    "Curativo limpo, seco e identificado; dedos com boa perfusão (criança com tala)",
    "Tubos de coleta identificados, completos e sem coágulos ou hemólise visível",
    "Avaliar o sítio a cada turno (escala de flebite) e a cada administração",
    "Retirar o cateter assim que não for mais necessário; não trocar por rotina em intervalo menor que 96 h no adulto (ANVISA); em criança, não trocar de rotina — só por indicação clínica",
    "Cateter inserido em condição de emergência, sem técnica asséptica garantida: trocar assim que possível (até 48 h)"
  ],
  complicacoes: [
    "Hematoma: retirar, comprimir 3–5 min, puncionar outro local (preferir o outro membro ou acima do hematoma)",
    "Infiltração (solução não vesicante): parar, retirar o cateter, elevar o membro, compressa conforme a solução; nova punção em outro membro",
    "Extravasamento de vesicante: parar a infusão, aspirar pelo cateter antes de retirar, elevar o membro, marcar a área, avisar o médico; seguir antídoto do protocolo institucional (ex.: fentolamina para vasopressor)",
    "Flebite (dor, eritema, cordão palpável): retirar o cateter, compressa, analgesia; secreção purulenta ou febre: colher cultura e tratar como infecção",
    "Punção arterial acidental: retirar e comprimir 5 min ou mais; observar perfusão distal",
    "Hemólise da amostra (garrote prolongado, agulha fina, agitação, puxar com força na seringa): recoletar; pode falsear potássio, LDH e AST",
    "Síncope vasovagal na coleta: interromper, deitar o paciente e elevar as pernas",
    "Embolia gasosa: evitar ar no sistema; se suspeita, decúbito lateral esquerdo e oxigênio",
    "Fragmento de cateter na veia (cateter cortado): garrote acima, imagem e chamar cirurgia vascular"
  ],
  tabelas: [
    {
      titulo: "Cateter periférico por calibre",
      colunas: ["Calibre", "Cor usual", "Fluxo aproximado (gravidade, SF)", "Uso"],
      linhas: [
        ["14 G", "Laranja", "Cerca de 250–300 mL/min", "Choque hemorrágico, trauma grave, reposição rápida"],
        ["16 G", "Cinza", "Cerca de 200 mL/min", "Trauma, hemorragia, cirurgia"],
        ["18 G", "Verde", "Cerca de 90–100 mL/min", "Hemoderivados, contraste (TC), paciente grave"],
        ["20 G", "Rosa", "Cerca de 60 mL/min", "Adulto estável, maioria das medicações e hidratação"],
        ["22 G", "Azul", "Cerca de 35 mL/min", "Veias finas, idosos, crianças maiores"],
        ["24 G", "Amarelo", "Cerca de 20 mL/min", "Lactentes e neonatos, veias muito frágeis"]
      ],
      nota: "Fluxos variam por fabricante e comprimento do cateter; conferir a embalagem. O fluxo depende mais do calibre e do comprimento curto do que do tamanho da veia. Para reposição volêmica rápida, cateter periférico curto e calibroso é melhor que cateter central longo."
    },
    {
      titulo: "Ordem de coleta dos tubos (CLSI)",
      colunas: ["Ordem", "Frasco / tampa usual", "Aditivo", "Exames"],
      linhas: [
        ["1", "Hemocultura (frascos aeróbio e anaeróbio)", "Meio de cultura", "Hemocultura"],
        ["2", "Azul-claro", "Citrato de sódio", "Coagulograma (TP/INR, TTPa, fibrinogênio, D-dímero). Encher até a marca"],
        ["3", "Vermelha ou amarela (gel)", "Sem aditivo ou ativador de coágulo", "Bioquímica, sorologias, hormônios"],
        ["4", "Verde", "Heparina", "Bioquímica em plasma, gasometria venosa em alguns serviços"],
        ["5", "Roxa/lilás", "EDTA", "Hemograma, HbA1c, tipagem (alguns serviços)"],
        ["6", "Cinza", "Fluoreto/oxalato", "Glicemia, lactato"]
      ],
      nota: "Se colher com scalp e o primeiro tubo for o citrato, desprezar antes um tubo de descarte (sem aditivo) para retirar o ar do circuito. Seguir o padrão do laboratório local."
    }
  ],
  documentacao: "Procedimento: punção venosa periférica [e coleta de sangue].\nIndicação: [ ].\nMembro/veia: [ ] (ex.: antebraço esquerdo, veia cefálica).\nAntissepsia com clorexidina alcoólica. Cateter [ ] G, [ ] tentativa(s).\nTeste com SF 0,9% sem resistência ou sinais de infiltração. Fixado com curativo transparente identificado.\nColeta: [tubos / hemoculturas: nº de frascos e sítios].\nIntercorrências: [nenhuma / descrever].\nResponsável: [nome, registro profissional].",
  orientacoesRetorno: [
    "Avise a equipe se sentir dor, ardor, inchaço ou vermelhidão no local do soro",
    "Não molhe o curativo e evite dobrar o braço com força",
    "Depois da coleta, aperte o algodão por 1 a 2 minutos sem dobrar o braço; não carregue peso com esse braço por algumas horas",
    "Mancha roxa pequena no local é comum e some em alguns dias; procure atendimento se o braço inchar, ficar vermelho e quente ou se tiver febre"
  ],
  relacionadas: ["acesso-intraosseo", "hidratacao-venosa", "choque", "administracao-medicamentos", "sepse"],
  fontes: [
    "ANVISA — Medidas de prevenção de infecção relacionada à assistência à saúde, cap. 2: Infecção da corrente sanguínea (2017)",
    "Infusion Nurses Society — Infusion Therapy Standards of Practice, 9ª ed. (2024)",
    "CLSI GP41 — Collection of Diagnostic Venous Blood Specimens, 7ª ed. (2017): ordem de coleta",
    "Sociedade Brasileira de Patologia Clínica/Medicina Laboratorial — Recomendações para coleta de sangue venoso, 2ª ed. (2010)",
    "ATLS 10ª edição (2018): acesso venoso no choque"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
