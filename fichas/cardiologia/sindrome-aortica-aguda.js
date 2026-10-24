// Síndrome aórtica aguda: dissecção de aorta e aneurisma de aorta abdominal roto
registrarFicha({
  id: "sindrome-aortica-aguda",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Dissecção de aorta e aneurisma de aorta abdominal roto",
  resumo: "Dor torácica, dorsal ou abdominal súbita e intensa (rasgando), com ou sem déficit de pulso, assimetria de PA, déficit neurológico ou choque. Inclui dissecção, hematoma intramural, úlcera penetrante e AAA roto.",
  palavrasChave: "disseccao de aorta aguda sindrome aortica aguda stanford debakey aneurisma aorta abdominal roto aaa hematoma intramural ulcera penetrante add-rs esmolol nitroprussiato hipotensao permissiva dor toracica dorsal",
  critico: {
    tempo: "FC < 60 e PAS < 120 em minutos",
    texto: "Dissecção: analgesia com opioide, betabloqueador IV primeiro (FC < 60 bpm) e depois vasodilatador (PAS 100–120 mmHg). AAA roto ou dissecção com choque: cirurgia vascular imediata; não atrasar com exames."
  },
  alarmes: [
    "Dor súbita, intensa, rasgando, irradiando para dorso ou migratória",
    "Déficit ou assimetria de pulso, diferença de PAS > 20 mmHg entre os braços",
    "Déficit neurológico focal, síncope, paraplegia",
    "Sopro novo de insuficiência aórtica, abafamento de bulhas, turgência jugular (tamponamento)",
    "Choque, massa abdominal pulsátil, dor lombar/abdominal com hipotensão em > 50 anos",
    "Supra de ST inferior + dor dorsal (dissecção tipo A acometendo a coronária direita)"
  ],
  condutaInicial: [
    "Sala de emergência, monitor, 2 acessos calibrosos, tipagem sanguínea e reserva de hemácias (4–6 unidades no AAA roto)",
    "PA nos dois braços, pulsos nos 4 membros, exame neurológico",
    "ECG (excluir IAM; supra inferior pode ser dissecção), POCUS (derrame pericárdico, raiz da aorta, flap, aorta abdominal)",
    "Analgesia com morfina ou fentanil IV",
    "Dissecção com PA alta: esmolol ou metoprolol IV até FC < 60, depois nitroprussiato se PAS > 120",
    "AAA roto/instável: hipotensão permissiva, transfusão precoce, chamar cirurgia vascular já",
    "Angiotomografia de aorta total (tórax, abdome e pelve) se estável; instável → ecocardiograma transesofágico ou centro cirúrgico"
  ],
  fataisExcluir: [
    "Tamponamento cardíaco por dissecção tipo A (não puncionar se puder operar)",
    "IAM por dissecção coronariana (não trombolisar nem antiagregar sem excluir dissecção)",
    "Ruptura aórtica / hemotórax",
    "Isquemia mesentérica, renal ou de membros (má perfusão)",
    "AVC por dissecção carotídea"
  ],
  proximaDecisao: "Stanford A (aorta ascendente) → cirurgia cardíaca de emergência (transferência imediata). Stanford B não complicada → UTI, controle de FC e PA, TEVAR eletivo conforme imagem. Stanford B complicada (ruptura, má perfusão, dor ou hipertensão refratárias, expansão) → TEVAR de urgência. AAA roto → reparo endovascular ou aberto imediato.",
  clinica: {
    anamnese: [
      "Início súbito, intensidade máxima no início, caráter rasgando/lancinante",
      "Hipertensão, cocaína/anfetamina, Marfan e outras doenças do tecido conjuntivo, valva aórtica bicúspide, aneurisma conhecido, história familiar, cirurgia ou cateterismo aórtico recente, gestação",
      "AAA: homem > 65 anos, tabagismo, aterosclerose; dor lombar ou abdominal, síncope"
    ],
    exameFisico: [
      "PA nos dois braços, pulsos radiais, femorais e pediosos",
      "Sopro diastólico aórtico, abafamento de bulhas, turgência jugular",
      "Déficit neurológico, paraparesia",
      "Massa abdominal pulsátil (ausência não exclui AAA), equimose em flanco"
    ],
    diferenciais: [
      { dx: "Síndrome coronariana aguda", pista: "Dor em aperto, crescente; ECG e troponina. Até 1/3 das dissecções têm alteração de ECG" },
      { dx: "TEP", pista: "Dispneia, hipoxemia, fatores de risco para TEV" },
      { dx: "Pericardite", pista: "Dor pleurítica, posicional, atrito" },
      { dx: "Cólica renal", pista: "Hematúria, sem choque; em > 60 anos com 'cólica renal' pensar em AAA" },
      { dx: "Pancreatite, úlcera perfurada, isquemia mesentérica", pista: "Lipase, pneumoperitônio, lactato; angiotomografia esclarece" }
    ],
    gravidade: [
      "ADD-RS (1 ponto por categoria): condição de alto risco (Marfan/doença do conjuntivo, história familiar, valvopatia aórtica, manipulação aórtica recente, aneurisma torácico conhecido) · dor de alto risco (abrupta, intensa, rasgando) · exame de alto risco (déficit de pulso ou diferença de PAS, déficit neurológico focal + dor, sopro aórtico novo + dor, hipotensão/choque)",
      "ADD-RS 0–1 + D-dímero < 500 ng/mL: probabilidade muito baixa (estratégia ADvISED). ADD-RS ≥ 2: angiotomografia direto",
      "Classificação de Stanford: A = envolve aorta ascendente (cirúrgica); B = não envolve",
      "Complicada: ruptura, má perfusão, dor ou hipertensão refratárias, expansão rápida"
    ]
  },
  exames: [
    {
      nome: "Angiotomografia de aorta",
      pedido: "Angiotomografia de aorta torácica e abdominal (tórax, abdome e pelve) com contraste — protocolo de síndrome aórtica aguda.",
      porQue: "Exame de escolha: confirma, classifica (Stanford) e mostra má perfusão.",
      esperar: "Flap intimal, falsa luz, hematoma intramural, úlcera, extravasamento.",
      interpretacao: "Envolvimento da aorta ascendente = tipo A = cirurgia.",
      limitacoes: "Instável não vai à tomografia: ecocardiograma transesofágico à beira-leito ou centro cirúrgico. Contraste na DRC: benefício supera risco."
    },
    {
      nome: "POCUS / ecocardiograma",
      pedido: "Ultrassom à beira-leito: janela subxifoide/paraesternal (derrame pericárdico, raiz da aorta > 4 cm, flap, insuficiência aórtica) e aorta abdominal.",
      porQue: "Triagem rápida no instável; AAA ≥ 3 cm + choque = roto até prova em contrário.",
      esperar: "Derrame pericárdico, dilatação de raiz, flap, aneurisma abdominal.",
      interpretacao: "POCUS positivo + instável → cirurgia sem esperar tomografia.",
      limitacoes: "Transtorácico normal não exclui dissecção. Retroperitônio (sangramento do AAA) mal visto no ultrassom."
    },
    {
      nome: "Laboratório e ECG",
      pedido: "ECG; hemograma, tipagem ABO/Rh e prova cruzada, coagulograma, fibrinogênio, creatinina, eletrólitos, lactato, troponina, D-dímero, gasometria.",
      porQue: "Excluir IAM, preparar transfusão, avaliar má perfusão.",
      esperar: "D-dímero elevado na maioria das dissecções.",
      interpretacao: "D-dímero < 500 ng/mL só ajuda a excluir se ADD-RS 0–1.",
      limitacoes: "D-dímero normal não exclui hematoma intramural ou dissecção com falsa luz trombosada."
    },
    {
      nome: "RX de tórax",
      pedido: "RX de tórax no leito.",
      porQue: "Avaliar diferenciais e derrame.",
      esperar: "Alargamento de mediastino, derrame pleural esquerdo.",
      interpretacao: "Normal em até 1/5 dos casos.",
      limitacoes: "Não exclui dissecção; não atrasar a angiotomografia."
    }
  ],
  tratamento: [
    {
      droga: "Morfina",
      linha: "l1",
      dose: "2–4 mg; repetir até controle da dor (ou fentanil 25–50 mcg)",
      via: "IV",
      intervalo: "5–10 min",
      duracao: "Conforme dor",
      monitorizacao: "FR, sedação, PA",
      contraindicacoes: "Hipotensão (usar doses menores/fentanil)",
      ajustes: "Dor descontrolada mantém resposta adrenérgica e dificulta controle pressórico"
    },
    {
      droga: "Esmolol",
      linha: "l1",
      dose: "Bolus 500 mcg/kg em 1 min; infusão 50 mcg/kg/min, aumentar até 200–300 mcg/kg/min",
      via: "IV",
      intervalo: "Titular a cada 5 min",
      duracao: "Até controle e transição oral",
      monitorizacao: "Alvo FC < 60 bpm e PAS 100–120 mmHg; bradicardia, broncoespasmo",
      contraindicacoes: "Insuficiência aórtica grave, tamponamento, choque, BAV, asma grave",
      ajustes: "Meia-vida curta: preferido. Sem esmolol: metoprolol 5 mg IV a cada 5 min (até 15 mg). Asma/contraindicação a betabloqueador: diltiazem ou verapamil IV"
    },
    {
      droga: "Nitroprussiato de sódio",
      linha: "l1",
      dose: "0,3–0,5 mcg/kg/min, aumentar até 10 mcg/kg/min",
      via: "IV em bomba, equipo fotoprotetor",
      intervalo: "Titular a cada 3–5 min",
      duracao: "Até controle e transição",
      monitorizacao: "PA invasiva idealmente; toxicidade por cianeto/tiocianato (acidose, uso > 48 h ou doses altas, DRC)",
      contraindicacoes: "Iniciar só após betabloqueio (taquicardia reflexa aumenta o estresse na parede)",
      ajustes: "50 mg + SG 5% 250 mL = 200 mcg/mL. Alternativa: nitroglicerina 5–200 mcg/min ou clevidipina/nicardipina (pouco disponíveis)"
    },
    {
      droga: "Hipotensão permissiva (AAA roto / dissecção com ruptura)",
      linha: "l1",
      dose: "Cristaloide mínimo e hemocomponentes precoces (hemácias, plasma, plaquetas 1:1:1) para manter consciência e PAS em torno de 70–90 mmHg",
      via: "IV",
      intervalo: "—",
      duracao: "Até controle cirúrgico",
      monitorizacao: "Nível de consciência, lactato, diurese",
      contraindicacoes: "—",
      ajustes: "Ácido tranexâmico não tem papel definido na ruptura de aorta"
    },
    {
      droga: "Antitrombóticos e trombolíticos",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "AAS, heparina, inibidores de P2Y12 e trombolítico enquanto houver suspeita de síndrome aórtica",
      ajustes: "Dor torácica com supra de ST + dor dorsal/assimetria de pulso: angiotomografia antes de antitrombóticos se possível"
    },
    {
      droga: "Vasodilatador sem betabloqueio prévio",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Taquicardia reflexa aumenta a força de cisalhamento (dP/dt) e propaga a dissecção",
      ajustes: "Sempre betabloqueador (ou bloqueador de canal de cálcio) antes"
    }
  ],
  destino: {
    agora: [
      "Analgesia, controle de FC e PA, reserva de sangue",
      "Acionar cirurgia cardíaca (tipo A) ou vascular (tipo B complicada, AAA roto) já na suspeita"
    ],
    reavaliar: [
      "PA e FC a cada 5–15 min durante a titulação",
      "Pulsos, perfusão, neurológico, diurese, lactato (má perfusão)"
    ],
    alta: [
      "Não há alta do PS com síndrome aórtica aguda",
      "AAA assintomático achado incidental, estável: encaminhamento à cirurgia vascular (prioridade conforme diâmetro)"
    ],
    observacao: ["—"],
    internacao: [
      "UTI: toda síndrome aórtica aguda",
      "Tipo B não complicada: UTI com controle pressórico e nova imagem"
    ],
    transferencia: [
      "Tipo A ou AAA roto sem cirurgia cardiovascular local: regulação imediata, com analgesia e controle de FC/PA (ou hipotensão permissiva) durante o transporte"
    ]
  },
  prescricao: {
    hospitalar: "DISSECÇÃO DE AORTA — CONTROLE INICIAL (peso: ___ kg)\n1. Dieta zero. Repouso absoluto. Cabeceira 30°.\n2. Monitor, oximetria, PA invasiva se disponível (na falta, PANI a cada 5 min no braço de maior PA). 2 acessos calibrosos. Sonda vesical com diurese horária.\n3. Morfina 10 mg/mL — 1 mL + 9 mL de água destilada (1 mg/mL): 2 a 4 mg IV a cada 5–10 min até controle da dor.\n4. Esmolol 10 mg/mL: bolus 500 mcg/kg (___ mg) IV em 1 min; infusão 2.500 mg em 250 mL (10 mg/mL) a 50 mcg/kg/min (70 kg = 21 mL/h), aumentar 50 mcg/kg/min a cada 5 min até FC < 60 bpm (máx. 300 mcg/kg/min).\n   (ou) Metoprolol 1 mg/mL — 5 mg IV em 2 min, repetir a cada 5 min até 15 mg.\n5. Após FC < 60, se PAS > 120: nitroprussiato de sódio 50 mg + SG 5% 250 mL (200 mcg/mL) em bomba, equipo fotoprotetor, iniciar 0,3 mcg/kg/min (70 kg = 6 mL/h) e titular a cada 3–5 min para PAS 100–120 mmHg.\n6. Ondansetrona 4 mg IV se náusea.\n7. Tipagem, prova cruzada e reserva de 4 concentrados de hemácias.\n8. NÃO administrar AAS, heparina ou trombolítico.\n9. Angiotomografia de aorta total; avisar cirurgia cardiovascular.\n\nAAA ROTO\n1. Acionar cirurgia vascular e centro cirúrgico imediatamente.\n2. Hipotensão permissiva: evitar cristaloide em excesso; transfundir hemácias, plasma e plaquetas (protocolo de transfusão maciça) para manter consciência e PAS em torno de 70–90 mmHg.\n3. Analgesia com fentanil 50 mcg/mL — 25 a 50 mcg IV, titulando."
  },
  orientacoesRetorno: [
    "Após a alta hospitalar: tomar os remédios de pressão todos os dias; a meta de pressão é rigorosa",
    "Evitar esforço físico intenso, levantar peso e cocaína/estimulantes",
    "Procurar o PS imediatamente se dor forte no peito, costas ou barriga, desmaio, fraqueza em braço ou perna",
    "Familiares de primeiro grau podem precisar de avaliação da aorta (doença hereditária)",
    "Exames de imagem de controle conforme agendado pela cirurgia"
  ],
  fontes: [
    "ESC — Guidelines for the management of peripheral arterial and aortic diseases (2024)",
    "ACC/AHA — Guideline for the Diagnosis and Management of Aortic Disease (2022)",
    "ESVS — Clinical Practice Guidelines on the Management of Abdominal Aorto-iliac Artery Aneurysms (2024)",
    "Nazerian P et al. — ADvISED study (ADD-RS + D-dímero), Circulation (2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
