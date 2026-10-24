// Trauma torácico
registrarFicha({
  id: "trauma-torax",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
  titulo: "Trauma torácico",
  resumo: "Lesões torácicas que matam na avaliação primária (pneumotórax hipertensivo e aberto, hemotórax maciço, tórax instável, tamponamento) e as potencialmente fatais da secundária (contusão pulmonar e cardíaca, lesão de aorta, fraturas de costelas).",
  palavrasChave: "trauma toracico pneumotorax hipertensivo pneumotorax aberto hemotorax macico torax instavel retalho costal tamponamento cardiaco contusao pulmonar contusao miocardica fratura de costela dreno de torax toracostomia descompressao agulha toracotomia lesao de aorta",
  critico: {
    tempo: "Descomprimir sem esperar RX",
    texto: "Pneumotórax hipertensivo é diagnóstico clínico: descompressão imediata (agulha ou dedo no 4º/5º EIC, linha axilar média) e dreno de tórax em seguida."
  },
  alarmes: [
    "Desconforto respiratório com murmúrio abolido, hipotensão e jugular distendida",
    "Saída imediata ≥ 1.500 mL de sangue no dreno ou > 200 mL/h por 2–4 h",
    "Ferida aspirativa no tórax",
    "Movimento paradoxal de parte da parede torácica",
    "Bulhas abafadas, hipotensão e turgência jugular (tríade de Beck)",
    "Ferimento penetrante na 'caixa cardíaca' (entre as linhas hemiclaviculares, do esterno ao epigástrio)",
    "Enfisema subcutâneo extenso, hemoptise, escape aéreo persistente no dreno (lesão traqueobrônquica)",
    "Mediastino alargado, mecanismo de desaceleração (lesão de aorta)"
  ],
  condutaInicial: [
    "xABCDE, O₂, monitor, 2 acessos, eFAST (ver ficha politrauma-abcde)",
    "Pneumotórax hipertensivo: descompressão no 4º/5º EIC, anterior à linha axilar média (adulto), com agulha/cateter de 8 cm ou toracostomia digital; depois dreno de tórax",
    "Pneumotórax aberto: curativo quadrado oclusivo fixado em 3 lados (ou curativo valvulado comercial); dreno de tórax longe da ferida",
    "Hemotórax maciço: reposição com sangue (ver ficha choque-hemorragico) e dreno 28–32 Fr no 5º EIC; cirurgia torácica",
    "Tórax instável: O₂, analgesia potente (inclusive bloqueio regional), ventilação não invasiva ou intubação se insuficiência respiratória; evitar excesso de cristaloide",
    "Tamponamento: volume, eFAST, toracotomia/janela pericárdica pelo cirurgião; pericardiocentese guiada por US só como ponte se não houver cirurgião",
    "Ferimento penetrante com parada recente (< 15 min) e sinais de vida: toracotomia de reanimação, se houver cirurgião treinado",
    "Analgesia multimodal em fraturas de costelas; fisioterapia respiratória"
  ],
  fataisExcluir: [
    "Pneumotórax hipertensivo",
    "Pneumotórax aberto",
    "Hemotórax maciço",
    "Tórax instável com contusão pulmonar",
    "Tamponamento cardíaco",
    "Lesão de aorta, traqueobrônquica, de esôfago e ruptura de diafragma"
  ],
  proximaDecisao: "Após drenagem: saída ≥ 1.500 mL imediata, > 200 mL/h por 2–4 h, ou necessidade contínua de transfusão → toracotomia. Estável → TC de tórax com contraste e tratamento das lesões encontradas.",
  clinica: {
    anamnese: [
      "Mecanismo: impacto frontal no volante, desaceleração, esmagamento, arma branca ou de fogo (trajeto)",
      "Dor torácica, dispneia, hemoptise",
      "Idade (idoso com ≥ 2–3 fraturas de costela tem alta morbimortalidade), DPOC, anticoagulante"
    ],
    exameFisico: [
      "FR, SpO₂, simetria da expansão, movimento paradoxal",
      "Desvio de traqueia, turgência jugular (pode faltar se hipovolêmico)",
      "Ausculta e percussão: murmúrio abolido + hipertimpanismo (pneumotórax) ou macicez (hemotórax)",
      "Enfisema subcutâneo, crepitação de costelas, ferimentos (inclusive dorso e axilas)",
      "Bulhas cardíacas, pulso paradoxal",
      "Abaixo do 4º EIC (mamilo): pensar em lesão abdominal associada"
    ],
    diferenciais: [
      { dx: "Pneumotórax hipertensivo", pista: "Murmúrio abolido, hipertimpanismo, desvio de traqueia, hipotensão" },
      { dx: "Hemotórax maciço", pista: "Murmúrio abolido, macicez, choque, jugular vazia" },
      { dx: "Tamponamento", pista: "Pulmões ventilando, bulhas abafadas, jugular cheia, derrame no FAST" },
      { dx: "Contusão miocárdica", pista: "Arritmia, ECG alterado, troponina elevada, hipotensão sem outra causa" },
      { dx: "Ruptura de diafragma", pista: "Ruídos hidroaéreos no tórax, sonda gástrica no hemitórax esquerdo no RX" }
    ],
    gravidade: [
      "Tórax instável: ≥ 2 fraturas em ≥ 2 costelas adjacentes, com segmento de movimento paradoxal",
      "Hemotórax maciço: ≥ 1.500 mL na drenagem inicial (ou ≥ 1/3 da volemia)",
      "Contusão pulmonar: hipoxemia progressiva nas primeiras 24–72 h",
      "Idoso com fraturas de costelas: internar e monitorizar mesmo com poucas fraturas"
    ]
  },
  exames: [
    {
      nome: "eFAST",
      pedido: "eFAST: janelas pleurais bilaterais (deslizamento pleural, linha pulmonar), pericárdio e abdome.",
      porQue: "Mais sensível que o RX em decúbito para pneumotórax e hemotórax; diagnostica tamponamento.",
      esperar: "Imediato.",
      interpretacao: "Ausência de deslizamento + ponto pulmonar = pneumotórax. Líquido pericárdico + choque = tamponamento.",
      limitacoes: "Enfisema subcutâneo prejudica as janelas. Hemotórax pode drenar para o pericárdio e falsear o FAST."
    },
    {
      nome: "RX de tórax",
      pedido: "RX de tórax AP no leito (PA em pé se estável e coluna liberada).",
      porQue: "Hemotórax, pneumotórax, fraturas, mediastino, posição de tubos.",
      esperar: "Imediato.",
      interpretacao: "Mediastino alargado, apagamento do botão aórtico, desvio da traqueia/sonda para a direita → angiotomografia de aorta.",
      limitacoes: "Não esperar RX para descomprimir pneumotórax hipertensivo. RX em decúbito subestima hemotórax e pneumotórax anterior."
    },
    {
      nome: "TC de tórax com contraste",
      pedido: "Angiotomografia de tórax (paciente estável).",
      porQue: "Lesão de aorta, contusão, pneumotórax oculto, fraturas, trajeto de projétil.",
      esperar: "—",
      interpretacao: "Lesão de aorta → controle de FC e PA e cirurgia vascular/endovascular.",
      limitacoes: "Só em paciente estável."
    },
    {
      nome: "ECG e troponina",
      pedido: "ECG de 12 derivações e troponina.",
      porQue: "Rastrear contusão miocárdica em trauma torácico fechado significativo.",
      esperar: "ECG imediato; troponina na admissão (e repetir conforme protocolo).",
      interpretacao: "ECG e troponina normais praticamente excluem contusão clinicamente relevante. Alterados → monitor por 24 h e ecocardiograma.",
      limitacoes: "—"
    },
    {
      nome: "Gasometria",
      pedido: "Gasometria arterial com lactato.",
      porQue: "Hipoxemia (contusão), hipercapnia (hipoventilação por dor).",
      esperar: "—",
      interpretacao: "PaO₂/FiO₂ em queda → contusão evoluindo; considerar suporte ventilatório.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Descompressão por agulha / toracostomia digital",
      linha: "l1",
      dose: "Cateter 14 G de 8 cm (ou toracostomia digital)",
      via: "4º/5º EIC anterior à linha axilar média (alternativa: 2º EIC na linha hemiclavicular)",
      intervalo: "Imediato",
      duracao: "Ponte até o dreno",
      monitorizacao: "SpO₂, PA, recidiva (cateter obstrui ou dobra)",
      contraindicacoes: "—",
      ajustes: "Criança: 2º EIC na linha hemiclavicular (ATLS)"
    },
    {
      droga: "Dreno de tórax",
      linha: "l1",
      dose: "Hemotórax: 28–32 Fr · Pneumotórax simples estável: 14 Fr (pigtail) pode bastar",
      via: "5º EIC, entre linha axilar anterior e média (triângulo de segurança)",
      intervalo: "—",
      duracao: "Até parar escape aéreo e débito baixo",
      monitorizacao: "Débito horário, oscilação, escape aéreo, RX de controle",
      contraindicacoes: "—",
      ajustes: "Antibiótico profilático na drenagem por trauma é controverso: considerar dose única de cefazolina 2 g IV conforme protocolo local. Drenar o tórax antes de transporte aéreo/ventilação com pressão positiva se pneumotórax"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle; depois 4/4 h",
      duracao: "Conforme dor",
      monitorizacao: "FR, SpO₂, sedação",
      contraindicacoes: "Hipotensão não corrigida",
      ajustes: "Idoso: doses menores. Preferir bloqueio regional (peridural torácica, bloqueio do eretor da espinha ou serrátil) em ≥ 3 fraturas ou idoso"
    },
    {
      droga: "Dipirona e/ou paracetamol",
      linha: "l1",
      dose: "Dipirona 1 g · Paracetamol 1 g (máx 4 g/dia; 2–3 g/dia se hepatopata ou etilista)",
      via: "IV ou VO",
      intervalo: "6/6 h, horários fixos",
      duracao: "Enquanto houver dor",
      monitorizacao: "—",
      contraindicacoes: "Alergia; hepatopatia grave (paracetamol)",
      ajustes: "Base da analgesia multimodal das fraturas de costela"
    },
    {
      droga: "Esmolol (suspeita de lesão de aorta)",
      linha: "adj",
      dose: "Ataque 500 mcg/kg em 1 min; manutenção 50–300 mcg/kg/min",
      via: "IV em bomba",
      intervalo: "Contínuo",
      duracao: "Até tratamento definitivo",
      monitorizacao: "Meta FC < 80 bpm e PAM 60–70 mmHg (ATLS)",
      contraindicacoes: "Choque hemorrágico, bradicardia, broncoespasmo",
      ajustes: "Alternativa: metoprolol 5 mg IV lento a cada 5 min (máx 15 mg). Analgesia adequada primeiro"
    }
  ],
  destino: {
    agora: [
      "Descompressão, drenagem e controle do choque",
      "Toracotomia se critérios de hemotórax maciço ou tamponamento"
    ],
    reavaliar: [
      "Débito do dreno horário; SpO₂ e gasometria (contusão piora em 24–72 h)",
      "RX após drenagem"
    ],
    alta: [
      "Fratura isolada de 1–2 costelas, jovem, sem pneumotórax/hemotórax, SpO₂ normal, dor controlada com analgésico oral"
    ],
    observacao: [
      "Pneumotórax oculto pequeno (só na TC) sem ventilação mecânica: observar com RX seriado"
    ],
    internacao: [
      "Qualquer drenagem, contusão pulmonar, ≥ 3 fraturas de costela, idoso com ≥ 2 fraturas, tórax instável (UTI), contusão miocárdica com alteração"
    ],
    transferencia: [
      "Sem cirurgia torácica/vascular ou UTI: transferir com tórax drenado e acesso garantido"
    ]
  },
  prescricao: {
    hospitalar: "TRAUMA TORÁCICO / FRATURAS DE COSTELAS (adulto; peso: ___ kg)\n1. Dieta zero inicialmente; liberar conforme quadro.\n2. Cabeceira elevada 30° (se coluna liberada).\n3. Monitor, oximetria contínua; O₂ para SpO₂ ≥ 94%.\n4. Dreno de tórax em selo d'água: anotar débito de 1/1 h, oscilação e escape aéreo; chamar o cirurgião se > 200 mL/h por 2 h.\n5. Dipirona 1 g (2 mL) + SF 0,9% 18 mL IV de 6/6 h, horários fixos.\n6. Paracetamol 750 mg VO de 6/6 h, alternado com a dipirona (máx 4 g/dia).\n7. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV de 4/4 h se dor ≥ 4 (escala 0–10), ou bomba de analgesia conforme protocolo.\n8. Ondansetrona 4 mg IV de 8/8 h se náusea.\n9. Fisioterapia respiratória (espirometria de incentivo, tosse assistida) de 6/6 h.\n10. Enoxaparina 40 mg SC 1 vez ao dia (se sem sangramento ativo e liberado pelo cirurgião).\n11. Controles: FR, SpO₂ e dor de 2/2 h; gasometria se piora; RX de tórax diário enquanto drenado."
  },
  orientacoesRetorno: [
    "A dor da fratura de costela dura semanas; tome os analgésicos em horários fixos para conseguir respirar fundo",
    "Faça respirações profundas e tosse com um travesseiro apertado no peito a cada hora acordado (previne pneumonia)",
    "Voltar imediatamente se: falta de ar que piora, dor que não melhora com o remédio, febre, tosse com catarro ou sangue, tontura ou desmaio",
    "Não usar faixa apertada no tórax",
    "Retorno em 7 dias na UBS ou ambulatório de cirurgia"
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "Eastern Association for the Surgery of Trauma (EAST) — Pain management in blunt thoracic trauma (2016)",
    "EAST — Screening of blunt cardiac injury (2012)",
    "Society for Vascular Surgery — Endovascular repair of traumatic thoracic aortic injury (2011)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
