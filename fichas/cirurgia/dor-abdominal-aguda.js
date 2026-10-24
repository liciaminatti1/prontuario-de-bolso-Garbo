// Dor abdominal aguda / abdome agudo — abordagem inicial no PS
registrarFicha({
  id: "dor-abdominal-aguda",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Dor abdominal aguda e abdome agudo (abordagem inicial)",
  resumo: "Dor abdominal com menos de 7 dias de evolução. Classificar em síndrome (inflamatória, obstrutiva, perfurativa, vascular, hemorrágica), excluir causas fatais extra-abdominais e decidir imagem e cirurgia. Idoso, gestante e imunossuprimido têm quadro atípico.",
  palavrasChave: "abdome agudo dor abdominal aguda peritonite irritacao peritoneal descompressao blumberg fid quadrante inferior direito hipocondrio direito idoso gestante tomografia abdome analgesia cirurgia geral",
  critico: {
    tempo: "Choque + dor abdominal: cirurgia já",
    texto: "Dor abdominal com instabilidade hemodinâmica: pensar em aneurisma roto, gestação ectópica rota, isquemia mesentérica e peritonite fecal. Reanimar, tipagem sanguínea e acionar cirurgia sem esperar a tomografia."
  },
  alarmes: [
    "Hipotensão, taquicardia, lactato elevado, sinais de choque",
    "Abdome em tábua, descompressão dolorosa difusa (peritonite generalizada)",
    "Dor desproporcional ao exame físico (isquemia mesentérica)",
    "Vômitos fecaloides, distensão sem eliminação de gases e fezes (obstrução)",
    "Idade > 65 anos, imunossupressão, corticoide, diabetes (quadro atenuado)",
    "Mulher em idade fértil com dor e atraso menstrual ou sangramento (ectópica)",
    "Dor lombar/abdominal com massa pulsátil ou síncope (aneurisma de aorta)",
    "Dor que piora apesar da analgesia adequada ou exame que piora na reavaliação"
  ],
  condutaInicial: [
    "Sinais vitais, glicemia capilar, acesso venoso; monitor se instável",
    "Analgesia precoce (não atrapalha o diagnóstico): dipirona + opioide se dor moderada a intensa",
    "Beta-hCG em toda mulher em idade fértil; ECG em idoso, diabético e dor em andar superior",
    "Jejum até definir conduta; sonda nasogástrica se vômitos incoercíveis ou obstrução",
    "Exames por hipótese (hemograma, PCR, lipase, função renal, eletrólitos, lactato, urina, função hepática)",
    "Imagem conforme síndrome e paciente (TC com contraste no adulto; USG em gestante, criança e hipocôndrio direito)",
    "Reavaliação seriada do abdome pelo mesmo examinador; acionar cirurgia cedo"
  ],
  fataisExcluir: [
    "Aneurisma de aorta abdominal roto ou dissecção de aorta",
    "Gestação ectópica rota",
    "Isquemia mesentérica aguda",
    "Víscera perfurada / peritonite",
    "Obstrução intestinal com estrangulamento ou volvo",
    "Infarto agudo do miocárdio (dor epigástrica), cetoacidose diabética, pneumonia de base",
    "Torção de ovário ou de testículo"
  ],
  proximaDecisao: "Peritonite difusa, pneumoperitônio, estrangulamento ou instabilidade → cirurgia (laparotomia/laparoscopia) após reanimação. Quadro localizado → imagem e ficha específica (apendicite, colecistite, diverticulite, obstrução). Exames e imagem normais com dor controlada → alta com reavaliação em 12–24 h e orientações claras (dor abdominal inespecífica).",
  clinica: {
    anamnese: [
      "Início (súbito = perfuração, vascular, torção, ruptura; gradual = inflamatório)",
      "Localização inicial e migração (periumbilical → FID na apendicite)",
      "Tipo: cólica (víscera oca obstruída) × contínua (inflamação, isquemia)",
      "Irradiação: dorso (pâncreas, aorta), escápula direita (vesícula), região inguinal/genital (ureter)",
      "Vômitos (antes ou depois da dor), última evacuação e eliminação de gases, febre",
      "Ciclo menstrual, DUM, corrimento, contracepção, gestação",
      "Cirurgias prévias (bridas), hérnias, cálculo biliar, etilismo, doença diverticular",
      "Fibrilação atrial, doença vascular (isquemia mesentérica); anticoagulantes, AINE, corticoide"
    ],
    exameFisico: [
      "Sinais vitais completos, perfusão, mucosas, icterícia",
      "Inspeção (distensão, cicatrizes, hérnias), ausculta, percussão (timpanismo, macicez)",
      "Palpação superficial e profunda começando longe da dor; defesa voluntária × involuntária",
      "Irritação peritoneal: descompressão brusca, dor à percussão, dor ao tossir",
      "Sinais: Murphy, McBurney, Rovsing, psoas, obturador",
      "Toque retal e exame pélvico/genital quando indicado; orifícios herniários (inguinal, femoral, umbilical, incisional)",
      "Pulsos femorais e massa pulsátil; ausculta pulmonar"
    ],
    diferenciais: [
      { dx: "Síndrome inflamatória", pista: "Dor progressiva, febre, leucocitose, dor localizada (apendicite, colecistite, diverticulite, pancreatite)" },
      { dx: "Síndrome obstrutiva", pista: "Cólica, vômitos, distensão, parada de gases e fezes (bridas, hérnia, tumor, volvo)" },
      { dx: "Síndrome perfurativa", pista: "Dor súbita intensa, abdome em tábua, pneumoperitônio (úlcera, divertículo, corpo estranho)" },
      { dx: "Síndrome vascular (isquêmica)", pista: "Dor desproporcional ao exame, FA, idoso, lactato alto, diarreia com sangue tardia" },
      { dx: "Síndrome hemorrágica", pista: "Dor súbita, palidez, choque, queda de Hb (ectópica, aneurisma roto, cisto ovariano roto, ruptura esplênica)" },
      { dx: "Causas extra-abdominais", pista: "IAM inferior, pneumonia de base, cetoacidose, crise falciforme, porfiria, herpes-zóster, cólica renal" }
    ],
    gravidade: [
      "Instabilidade hemodinâmica ou lactato elevado = emergência cirúrgica até prova em contrário",
      "Peritonite generalizada > peritonite localizada > dor sem irritação peritoneal",
      "Idoso: mortalidade muito maior; febre e leucocitose podem faltar; menor limiar para TC e internação",
      "Gestante: útero desloca o apêndice para cima (flanco/hipocôndrio direito no 3º trimestre); leucocitose fisiológica; defesa menos evidente",
      "Imunossuprimido, corticoide, cirrótico, dialítico: sinais peritoneais mínimos"
    ]
  },
  exames: [
    {
      nome: "Laboratório básico",
      pedido: "Hemograma completo, PCR, ureia, creatinina, sódio, potássio, glicemia, lipase, TGO, TGP, bilirrubinas, fosfatase alcalina, GGT, urina tipo 1. Beta-hCG em mulheres em idade fértil.",
      porQue: "Apoiar síndrome inflamatória, hepatobiliar, pancreática, urinária e afastar gestação.",
      esperar: "Leucocitose e PCR alta nas causas inflamatórias; lipase ≥ 3× o limite superior na pancreatite.",
      interpretacao: "Exames normais não excluem abdome agudo cirúrgico, sobretudo no início e no idoso.",
      limitacoes: "Leucócitos na urina ocorrem em apendicite pélvica e diverticulite (contato com ureter/bexiga)."
    },
    {
      nome: "Gasometria venosa com lactato",
      pedido: "Gasometria venosa com lactato.",
      porQue: "Gravidade, hipoperfusão, suspeita de isquemia mesentérica ou estrangulamento.",
      esperar: "Lactato > 2 mmol/L sugere hipoperfusão.",
      interpretacao: "Lactato normal não exclui isquemia intestinal inicial.",
      limitacoes: "Inespecífico."
    },
    {
      nome: "Tipagem e prova cruzada",
      pedido: "Tipagem sanguínea ABO/Rh e prova cruzada; coagulograma (TP/INR, TTPa).",
      porQue: "Possível cirurgia, sangramento, uso de anticoagulante.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Tomografia de abdome e pelve com contraste IV",
      pedido: "Tomografia computadorizada de abdome total e pelve com contraste endovenoso. Hipótese: ___. (Angio-TC se suspeita vascular.)",
      porQue: "Exame de maior acurácia para dor abdominal aguda no adulto (apendicite, diverticulite, obstrução, perfuração, isquemia).",
      esperar: "Define causa e complicações (abscesso, ar livre, ponto de obstrução).",
      interpretacao: "Não atrasar a cirurgia no paciente instável ou com peritonite difusa evidente.",
      limitacoes: "Contraste: avaliar função renal, mas não adiar se a suspeita for grave. Evitar em gestante (USG e RM primeiro)."
    },
    {
      nome: "Ultrassonografia de abdome",
      pedido: "Ultrassonografia de abdome total (ou abdome superior / pélvica e transvaginal, conforme hipótese).",
      porQue: "1ª imagem em hipocôndrio direito (vesícula), gestante, criança, mulher jovem com dor pélvica; FAST em instável.",
      esperar: "Colecistite, apendicite, líquido livre, massa anexial, hidronefrose, aneurisma.",
      interpretacao: "USG inconclusiva com suspeita mantida → TC (ou RM na gestante).",
      limitacoes: "Operador-dependente; limitada por obesidade e gases."
    },
    {
      nome: "Radiografia de tórax em pé e abdome",
      pedido: "Radiografia de tórax PA em pé (cúpulas) e abdome em pé e deitado.",
      porQue: "Quando TC não disponível: pneumoperitônio, obstrução (níveis hidroaéreos), volvo.",
      esperar: "Ar sob as cúpulas na perfuração; alças distendidas com níveis na obstrução.",
      interpretacao: "RX normal não exclui perfuração nem obstrução.",
      limitacoes: "Baixa sensibilidade; não substitui a TC."
    },
    {
      nome: "Eletrocardiograma",
      pedido: "ECG de 12 derivações.",
      porQue: "IAM inferior simula dor epigástrica; FA sugere embolia mesentérica.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "1 g (até 2 g)",
      via: "IV lento",
      intervalo: "6/6 h",
      duracao: "Enquanto dor",
      monitorizacao: "PA (hipotensão na infusão rápida)",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Diluir em 10–20 mL de água destilada ou SF; infundir em 3–5 min"
    },
    {
      droga: "Morfina",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg), repetir até controle",
      via: "IV",
      intervalo: "A cada 5–10 min na titulação; depois 4/4 h SN",
      duracao: "Enquanto dor",
      monitorizacao: "FR, sedação, SpO₂, PA",
      contraindicacoes: "Depressão respiratória, instabilidade não corrigida",
      ajustes: "Ampola 10 mg/mL: diluir 1 mL em 9 mL de SF (1 mg/mL). Idoso e DRC: metade da dose. Analgesia com opioide não mascara o diagnóstico (revisões Cochrane)"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "4–8 mg",
      via: "IV lento",
      intervalo: "8/8 h SN",
      duracao: "—",
      monitorizacao: "QT se doses repetidas",
      contraindicacoes: "QT longo",
      ajustes: "Alternativa: metoclopramida 10 mg IV (evitar se obstrução mecânica)"
    },
    {
      droga: "Cristaloide (SF 0,9% ou Ringer lactato)",
      linha: "l1",
      dose: "500–1.000 mL em bolus se desidratado ou hipotenso; reavaliar",
      via: "IV",
      intervalo: "Conforme resposta",
      duracao: "—",
      monitorizacao: "PA, FC, diurese, lactato, congestão",
      contraindicacoes: "—",
      ajustes: "Cardiopata/DRC: bolus de 250–500 mL. Sepse abdominal: ver ficha sepse"
    },
    {
      droga: "Antibiótico (peritonite / sepse abdominal comunitária)",
      linha: "l1",
      dose: "Ceftriaxona 2 g + metronidazol 500 mg",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "Até controle do foco e reavaliação (em geral 4 dias após controle do foco)",
      monitorizacao: "Culturas, resposta clínica",
      contraindicacoes: "Alergia grave a betalactâmico: ciprofloxacino 400 mg IV 12/12 h + metronidazol",
      ajustes: "Choque séptico ou infecção hospitalar: piperacilina-tazobactam 4,5 g IV 6/6 h ou meropenem 1 g IV 8/8 h. Iniciar na 1ª hora se sepse"
    }
  ],
  destino: {
    agora: [
      "Instável/peritonite difusa: reanimação, antibiótico, cirurgia imediata",
      "Estável: analgesia, exames e imagem dirigidos"
    ],
    reavaliar: [
      "Exame abdominal seriado a cada 2–4 h (mesmo examinador)",
      "Sinais vitais, diurese, lactato se alterado"
    ],
    alta: [
      "Dor controlada, aceita dieta, exame sem irritação peritoneal, exames e imagem (se indicada) normais",
      "Retorno garantido em 12–24 h ou reavaliação na UBS; orientar sinais de alarme por escrito"
    ],
    observacao: [
      "Dúvida diagnóstica sem sinais de gravidade: observação de 6–12 h com reexame e repetir leucograma/PCR"
    ],
    internacao: [
      "Diagnóstico cirúrgico, idoso com dor sem causa definida, dor refratária, intolerância oral"
    ],
    transferencia: [
      "Sem cirurgião ou tomografia: regular para hospital com cirurgia geral após estabilização e antibiótico se indicado"
    ]
  },
  prescricao: {
    hospitalar: "DOR ABDOMINAL AGUDA — SALA DE EMERGÊNCIA (ADULTO)\n1. Jejum.\n2. Acesso venoso periférico; SF 0,9% 500 mL IV em 30 min se desidratado; depois reavaliar.\n3. Dipirona 1 g + 10 mL de água destilada IV lento agora e de 6/6 h.\n4. Morfina 10 mg/mL — 1 mL + 9 mL de SF 0,9% (1 mg/mL): fazer 2–4 mL IV lento se dor intensa; repetir a cada 10 min até controle (máx. 10 mg sem reavaliação médica).\n5. Ondansetrona 4 mg IV lento se náusea ou vômito, até de 8/8 h.\n6. Sonda nasogástrica aberta em frasco se vômitos incoercíveis ou distensão (obstrução).\n7. Exames: hemograma, PCR, ureia, creatinina, Na, K, glicemia, lipase, TGO, TGP, bilirrubinas, FA, GGT, urina tipo 1, beta-hCG (mulher em idade fértil), gasometria venosa com lactato, ECG.\n8. Sinais vitais de 1/1 h a 2/2 h; diurese; reavaliação do abdome a cada 2–4 h.\n9. Avisar médico se PAS < 90 mmHg, FC > 120 bpm, piora da dor ou febre.",
    ambulatorial: "ALTA — DOR ABDOMINAL INESPECÍFICA (exames e exame físico tranquilizadores)\nUSO ORAL\n1. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor, por até 3 dias.\n2. Butilbrometo de escopolamina 10 mg ------------- 1 caixa\n   Tomar 1 comprimido de 8 em 8 horas se cólica, por até 3 dias.\n\nEvitar anti-inflamatório e laxante até a reavaliação."
  },
  orientacoesRetorno: [
    "Muitos casos de abdome agudo começam leves; por isso a reavaliação é importante",
    "Voltar imediatamente se: dor que aumenta ou muda de lugar, febre, vômitos que não param, barriga inchada e dura, sem eliminar gases ou fezes, sangue nas fezes ou no vômito, desmaio ou tontura forte",
    "Gestante ou com atraso menstrual: voltar já se sangramento vaginal ou dor forte",
    "Comer leve e beber líquidos; não tomar remédio por conta própria para prender ou soltar o intestino",
    "Retornar em 12–24 h para reavaliação se ainda tiver dor"
  ],
  tabelas: [
    {
      titulo: "Hipóteses por localização da dor",
      colunas: ["Local", "Pensar em"],
      linhas: [
        ["Hipocôndrio direito", "Colecistite, colangite, cólica biliar, hepatite, abscesso hepático, pneumonia de base, pielonefrite; gestante: apendicite (3º tri), HELLP/fígado gorduroso"],
        ["Epigástrio", "IAM inferior, úlcera péptica/perfurada, pancreatite, gastrite, colecistopatia, dissecção de aorta"],
        ["Hipocôndrio esquerdo", "Infarto/ruptura esplênica, pancreatite, pielonefrite, pneumonia"],
        ["Periumbilical", "Apendicite inicial, obstrução de delgado, isquemia mesentérica, aneurisma de aorta, hérnia umbilical"],
        ["Fossa ilíaca direita (FID)", "Apendicite, adenite mesentérica, ileíte (Crohn), diverticulite à direita, cólica ureteral, hérnia; mulher: ectópica, torção/cisto de ovário, DIP; homem: torção testicular"],
        ["Fossa ilíaca esquerda", "Diverticulite (sigmoide), cólica ureteral, ectópica, torção/cisto de ovário, DIP, volvo de sigmoide"],
        ["Difusa", "Peritonite, obstrução, isquemia mesentérica, cetoacidose, gastroenterite, crise falciforme"]
      ],
      nota: "Sempre examinar regiões inguinais e femorais e, quando indicado, testículos e exame pélvico."
    },
    {
      titulo: "Síndromes do abdome agudo",
      colunas: ["Síndrome", "Quadro típico", "Conduta principal"],
      linhas: [
        ["Inflamatória", "Dor progressiva, localizada, febre, leucocitose", "Imagem; antibiótico; cirurgia/drenagem conforme causa"],
        ["Obstrutiva", "Cólica, vômitos, distensão, parada de eliminação", "Jejum, SNG, hidratação, TC; cirurgia se estrangulamento"],
        ["Perfurativa", "Dor súbita intensa, peritonite difusa, ar livre", "Antibiótico, cirurgia de urgência"],
        ["Vascular", "Dor desproporcional ao exame, FA, idoso, lactato alto", "Angio-TC, heparina, revascularização/laparotomia"],
        ["Hemorrágica", "Dor súbita, choque, anemia", "Reanimação, sangue, cirurgia/radiologia intervencionista"]
      ]
    },
    {
      titulo: "Particularidades",
      colunas: ["Grupo", "O que muda"],
      linhas: [
        ["Idoso", "Febre e leucocitose ausentes com frequência; dor menor; mais causas vasculares (aneurisma, isquemia), neoplasias, volvo, diverticulite; IAM atípico. Menor limiar para TC e internação"],
        ["Gestante", "Beta-hCG positivo: excluir ectópica (USG). Apendicite é a causa cirúrgica não obstétrica mais comum. Imagem: USG → RM sem gadolínio; TC se indispensável. Leucocitose até ~15 mil pode ser fisiológica. Avaliar vitalidade fetal e obstetrícia"],
        ["Mulher em idade fértil", "Ectópica, torção de ovário, cisto roto, DIP, endometriose"],
        ["Imunossuprimido / corticoide", "Sinais peritoneais mínimos; colite por CMV, neutropênica; TC precoce"]
      ]
    }
  ],
  fontes: [
    "WSES — Jerusalem guidelines: diagnosis and treatment of acute appendicitis (2020) e WSES/SIS — management of intra-abdominal infections (2017)",
    "American College of Radiology — ACR Appropriateness Criteria: Acute Nonlocalized Abdominal Pain (2023) e Right Lower Quadrant Pain (2022)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II: Acolhimento à demanda espontânea (2013)",
    "Cochrane — Analgesia for patients with acute abdominal pain (2011)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
