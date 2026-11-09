/* Vaga Zero — conteudo-complicacoes-obst-neonatal. Formato em docs/VAGA-ZERO.md.
   Obstétricas (grupo "obstetrica") e neonatais/pediátricas (grupo "neonatal").
   Convulsão pediátrica não é repetida aqui: ver a complicação de convulsão do grupo neurológico. */
VZ_COMPLICACOES.push(
  /* ======================= OBSTÉTRICAS ======================= */
  {
    id: "hemorragia-obstetrica",
    titulo: "Hemorragia obstétrica / choque hemorrágico obstétrico",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "dx:hemorragia-obstetrica": 3, "puerpera": 2, "dx:sangramento": 2, "gestante": 1, "hipotensao": 1, "fc-alta": 1, "perfusao-ruim": 1 },
    porQue: "Placenta prévia, descolamento prematuro de placenta (DPP), rotura uterina e hemorragia pós-parto (atonia, trauma, retenção, coagulopatia) sangram rápido. A gestante compensa por mais tempo e a hipotensão é sinal tardio.",
    sinaisAlerta: [
      "Índice de choque (FC/PAS) ≥ 0,9: alerta; ≥ 1,4: choque grave, pensar em transfusão maciça",
      "Útero amolecido acima da cicatriz umbilical após o parto (atonia)",
      "Dor abdominal intensa com útero hipertônico (DPP) ou perda da apresentação/dor súbita com parada das contrações (rotura uterina)",
      "Sangramento que encharca absorventes/compressas, coágulos, sangramento em locais de punção (coagulopatia)",
      "Taquicardia, palidez, agitação ou sonolência, enchimento capilar lento, oligúria"
    ],
    monitorar: ["FC, PA não invasiva a cada 3–5 min, SpO₂, índice de choque", "Tônus e altura uterina (puérpera)", "Perda sanguínea estimada (pesar/contar compressas)", "Nível de consciência e temperatura", "Diurese, se sonda vesical"],
    reconhecer: [
      "HPP: perda ≥ 500 mL (parto vaginal) ou ≥ 1.000 mL (cesárea) nas primeiras 24 h, ou qualquer perda com instabilidade",
      "Placenta prévia: sangramento vermelho vivo, indolor, útero relaxado",
      "DPP: dor, hipertonia uterina, sangramento escuro (pode ser oculto), sofrimento ou óbito fetal",
      "Causas da HPP — 4 T: Tônus, Trauma, Tecido (restos), Trombina"
    ],
    conduta: [
      "Pré-transporte: dois acessos calibrosos (16–18G), coletar tipagem/Hb/coagulograma, hemocomponentes disponíveis acompanhando se o serviço tiver",
      "Pedir apoio e avisar o destino (código de hemorragia obstétrica)",
      "Gestante > 20 semanas: decúbito lateral esquerdo ou deslocamento manual do útero para a esquerda",
      "O₂ para SpO₂ ≥ 95%; aquecer (manta, soro aquecido): hipotermia piora a coagulopatia",
      "Puérpera com atonia: massagem uterina bimanual contínua + ocitocina",
      "Ácido tranexâmico precoce (até 3 h do início do sangramento), junto com os uterotônicos",
      "Cristaloide aquecido em bolus de 500 mL com reavaliação; evitar grandes volumes sem hemocomponentes",
      "Placenta prévia: NÃO fazer toque vaginal",
      "DPP e rotura uterina: tratamento é cirúrgico — o transporte é o tratamento; não atrasar para estabilização completa",
      "Durante o transporte: reavaliar índice de choque, tônus uterino e perda a cada 5 min; manter massagem uterina"
    ],
    medicamentos: [
      {
        farmaco: "ocitocina", nome: "Ocitocina (ampola 5 UI/mL)", indicacao: "HPP por atonia (primeira linha)",
        adulto: "5 UI IV lento (cerca de 3 min) + infusão de 20 UI em 500 mL de SF 0,9% a 250 mL/h; manutenção 20 UI em 500 mL a 125 mL/h por 4 h (OPAS 2018)",
        pediatrico: "", neonatal: "",
        diluicao: "Bolus: 1 ampola (5 UI); infusão: 4 ampolas (20 UI) em 500 mL de SF 0,9%",
        via: "IV (sem acesso: 10 UI IM)", velocidade: "Bolus lento em ~3 min (bolus rápido causa hipotensão); infusão em bomba",
        repeticao: "Manter infusão; se atonia persistir, associar segundo uterotônico conforme protocolo"
      },
      {
        farmaco: "acido-tranexamico", nome: "Ácido tranexâmico (ampola 50 mg/mL, 5 mL = 250 mg)", indicacao: "Toda HPP, o mais cedo possível (até 3 h do início)",
        adulto: "1 g IV (4 ampolas) em 10 min",
        pediatrico: "", neonatal: "",
        diluicao: "1 g em 100 mL de SF 0,9% (ou sem diluição, IV lento)",
        via: "IV", velocidade: "Em 10 min (1 mL/min se sem diluição); bolus rápido causa hipotensão",
        repeticao: "Segunda dose de 1 g se o sangramento continuar após 30 min ou recomeçar em até 24 h (OMS 2017)"
      },
      {
        farmaco: null, nome: "Misoprostol (comprimido 200 mcg)", indicacao: "Atonia sem resposta à ocitocina ou ocitocina indisponível",
        adulto: "800 mcg via retal (4 comprimidos) — dose da OPAS 2018",
        pediatrico: "", neonatal: "",
        diluicao: "Não se aplica", via: "Retal (ou sublingual)", velocidade: "Dose única",
        repeticao: "Não repetir sem orientação; efeito em 15–30 min"
      },
      {
        farmaco: null, nome: "Metilergometrina (ampola 0,2 mg/mL)", indicacao: "Atonia sem resposta à ocitocina",
        adulto: "0,2 mg IM; repetir conforme protocolo institucional. CONTRAINDICADA em hipertensão, pré-eclâmpsia e cardiopatia",
        pediatrico: "", neonatal: "",
        diluicao: "Sem diluição (IM)", via: "IM", velocidade: "IM",
        repeticao: "Conforme protocolo institucional"
      },
      {
        farmaco: "cristaloide", nome: "Cristaloide aquecido (SF 0,9% ou Ringer lactato)", indicacao: "Reposição volêmica inicial até hemocomponentes",
        adulto: "Bolus de 500 mL, reavaliar após cada bolus; evitar grandes volumes (> 1,5–2 L) sem sangue",
        pediatrico: "", neonatal: "",
        diluicao: "Pronto para uso", via: "IV", velocidade: "Aberto, com reavaliação",
        repeticao: "Guiado por FC, PA, perfusão e índice de choque"
      }
    ],
    alternativas: [
      "Concentrado de hemácias O negativo / protocolo de transfusão maciça, se disponível no transporte",
      "Noradrenalina apenas como ponte em choque refratário após volume e controle do sangramento"
    ],
    procedimentos: [
      "Compressão uterina bimanual (puérpera)",
      "Traje antichoque não pneumático (TAN), se disponível — recomendado pela OPAS para transporte",
      "Balão de tamponamento intrauterino, se treinado e disponível",
      "Compressão de aorta abdominal como medida extrema temporária",
      "Sonda vesical para débito urinário"
    ],
    parar: [
      "Parar a viatura para massagem uterina/compressão bimanual eficaz se impossível com o veículo em movimento",
      "Desviar para o hospital com centro obstétrico mais próximo se índice de choque ≥ 1,4 ou PAS < 80 mmHg persistente apesar das medidas",
      "Pedir apoio da regulação para reserva de sangue e equipe cirúrgica no destino"
    ],
    contingencia: {
      se: "Se o índice de choque passar de 1,4 ou a PAS cair abaixo de 80 mmHg durante o transporte",
      faca: ["Massagem uterina bimanual contínua", "Ácido tranexâmico se ainda não feito", "Cristaloide aquecido 500 mL e reavaliar", "Avisar regulação: transfusão maciça e cirurgia no destino", "Desviar para o centro obstétrico mais próximo"]
    },
    fontes: [
      "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (Estratégia Zero Morte Materna por Hemorragia, 2018)",
      "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
      "OMS — Recommendation on tranexamic acid for the treatment of postpartum haemorrhage (2017)",
      "FEBRASGO — Hemorragia pós-parto, Protocolo FEBRASGO Obstetrícia (2021)"
    ]
  },

  {
    id: "eclampsia",
    titulo: "Eclâmpsia (convulsão na gestante/puérpera)",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "dx:eclampsia": 3, "dx:pre-eclampsia": 2, "dx:hellp": 2, "pa-muito-alta": 2, "gestante": 1, "puerpera": 1, "dx:convulsao": 1 },
    porQue: "Pré-eclâmpsia grave evolui para convulsão tônico-clônica, inclusive até 6 semanas pós-parto. O tratamento e a prevenção da recorrência são com sulfato de magnésio, não com benzodiazepínico.",
    sinaisAlerta: ["Cefaleia intensa, escotomas, turvação visual", "Dor epigástrica ou em hipocôndrio direito", "Hiperreflexia, clônus", "PA ≥ 160 x 110 mmHg", "Agitação ou rebaixamento"],
    monitorar: ["PA a cada 5–15 min", "FR e SpO₂ contínuas", "Reflexo patelar antes de cada dose e a cada hora", "Diurese horária (sonda vesical)", "Nível de consciência", "BCF, se disponível"],
    reconhecer: [
      "Convulsão tônico-clônica em gestante > 20 semanas ou puérpera, sem outra causa",
      "Pode ocorrer sem hipertensão prévia conhecida e sem proteinúria",
      "Convulsão focal, déficit persistente ou coma prolongado: pensar em AVC/hemorragia e pedir imagem no destino"
    ],
    conduta: [
      "Durante a crise: proteger de trauma, decúbito lateral esquerdo, aspirar via aérea, O₂ por máscara",
      "Não tentar abolir a crise com benzodiazepínico como primeira escolha; iniciar sulfato de magnésio",
      "Dose de ataque de sulfato de magnésio (Zuspan IV ou Pritchard IV + IM se sem bomba)",
      "Manutenção por 24 h após o parto ou após a última convulsão",
      "Controlar PA grave (≥ 160 x 110) com hidralazina ou nifedipino — ver crise hipertensiva na gestação",
      "Sonda vesical e controle de diurese antes do transporte",
      "Após estabilizar a mãe: o tratamento definitivo é o parto em centro com UTI; não fazer parto de urgência na viatura por eclâmpsia",
      "Durante o transporte: reflexo patelar, FR e diurese a cada hora; gluconato de cálcio preparado"
    ],
    medicamentos: [
      {
        farmaco: "sulfato-magnesio", nome: "Sulfato de magnésio 50% (ampola 10 mL = 5 g; 500 mg/mL)", indicacao: "Esquema de Zuspan (IV, em bomba)",
        adulto: "Ataque 4 g IV em 10–20 min; manutenção 1 g/h IV em bomba por 24 h",
        pediatrico: "", neonatal: "",
        diluicao: "Ataque: 8 mL de MgSO₄ 50% (4 g) + 12 mL de água destilada = 20 mL. Manutenção: 10 mL de MgSO₄ 50% (5 g) + 490 mL de SG 5% ou SF 0,9% (1 g/100 mL) a 100 mL/h",
        via: "IV", velocidade: "Ataque em 10–20 min; manutenção 1 g/h (até 2 g/h conforme protocolo do serviço)",
        repeticao: "Nova convulsão: 2 g IV em 5–10 min. Ajustar/suspender manutenção se diurese < 25 mL/h, FR < 16 irpm ou reflexo patelar ausente"
      },
      {
        farmaco: "sulfato-magnesio", nome: "Sulfato de magnésio 50%", indicacao: "Esquema de Pritchard (sem bomba de infusão)",
        adulto: "Ataque 4 g IV (como acima) + 10 g IM (5 g em cada glúteo); manutenção 5 g IM a cada 4 h, alternando glúteos, por 24 h",
        pediatrico: "", neonatal: "",
        diluicao: "IV: 8 mL a 50% + 12 mL de água destilada. IM: 10 mL a 50% (5 g) puro, em cada glúteo, agulha longa (pode associar lidocaína 2% 1 mL)",
        via: "IV + IM profundo", velocidade: "IV em 10–20 min",
        repeticao: "IM a cada 4 h só com reflexo patelar presente, FR ≥ 16 irpm e diurese ≥ 25 mL/h"
      },
      {
        farmaco: "gluconato-calcio", nome: "Gluconato de cálcio 10% (ampola 10 mL = 1 g)", indicacao: "Intoxicação por magnésio (depressão respiratória, parada)",
        adulto: "1 g (10 mL) IV lento",
        pediatrico: "", neonatal: "",
        diluicao: "Sem diluição ou diluído em SF 0,9%",
        via: "IV", velocidade: "Lento, em cerca de 3–10 min, com monitor cardíaco",
        repeticao: "Conforme resposta e protocolo institucional"
      },
      {
        farmaco: "diazepam", nome: "Diazepam (ampola 10 mg/2 mL)", indicacao: "Somente se convulsão prolongada sem acesso ao magnésio ou sem resposta",
        adulto: "Conforme protocolo institucional; risco de depressão respiratória materna e fetal",
        pediatrico: "", neonatal: "",
        diluicao: "Sem diluição", via: "IV", velocidade: "Lento",
        repeticao: "Não é tratamento de manutenção da eclâmpsia"
      }
    ],
    alternativas: ["Se convulsão refratária ao magnésio: tratar como estado de mal e considerar via aérea avançada (ver convulsão no grupo neurológico)"],
    procedimentos: ["Decúbito lateral esquerdo", "Cânula orofaríngea após a crise se necessário; aspiração", "Sonda vesical de demora", "Intubação se Glasgow ≤ 8 ou crises repetidas"],
    parar: [
      "Parar a viatura durante a convulsão para proteger via aérea e administrar o magnésio com segurança",
      "Desviar para o hospital mais próximo com obstetrícia se convulsões repetidas, rebaixamento persistente ou sinais de toxicidade do magnésio sem resposta ao cálcio"
    ],
    contingencia: {
      se: "Se houver nova convulsão durante o transporte",
      faca: ["Decúbito lateral esquerdo e proteger a cabeça", "Aspirar e O₂", "Sulfato de magnésio 2 g IV em 5–10 min", "Checar reflexo patelar e FR depois", "Avisar regulação e destino"]
    },
    fontes: [
      "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
      "FEBRASGO / RBEHG — Pré-eclâmpsia: protocolo (2021) e Diretriz da Rede Brasileira de Estudos sobre Hipertensão na Gravidez (2023)",
      "OMS — Recommendations for prevention and treatment of pre-eclampsia and eclampsia (2011)"
    ]
  },

  {
    id: "crise-hipertensiva-gestacao",
    titulo: "Crise hipertensiva na gestação / pré-eclâmpsia grave",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "dx:pre-eclampsia": 3, "dx:hellp": 2, "dx:crise-hipertensiva": 2, "pa-muito-alta": 2, "gestante": 1, "puerpera": 1 },
    porQue: "PAS ≥ 160 ou PAD ≥ 110 mmHg em gestante/puérpera é emergência: risco de AVC hemorrágico, eclâmpsia, DPP, edema pulmonar e HELLP. Tratar em até 30–60 min, sem queda brusca (prejudica perfusão placentária).",
    sinaisAlerta: ["PA ≥ 160 x 110 mmHg confirmada em 15 min", "Cefaleia, alteração visual, dor epigástrica", "Dispneia/estertores (edema pulmonar)", "Oligúria", "Plaquetopenia, hemólise, transaminases elevadas (HELLP)"],
    monitorar: ["PA a cada 5 min durante o tratamento, depois a cada 15–30 min", "FC materna", "BCF, se disponível", "SpO₂ e ausculta pulmonar", "Diurese", "Reflexo patelar se em uso de magnésio"],
    reconhecer: [
      "Pré-eclâmpsia grave: PA ≥ 160 x 110 ou sinais de lesão de órgão-alvo",
      "Meta: PAS 140–150 e PAD 90–100 mmHg; evitar PA < 130 x 80",
      "Queda brusca da PA pode causar bradicardia fetal"
    ],
    conduta: [
      "Pré-transporte: acesso venoso, decúbito lateral esquerdo, confirmar a PA (manguito adequado)",
      "Anti-hipertensivo de ação rápida: hidralazina IV ou nifedipino VO",
      "Sulfato de magnésio para prevenção de eclâmpsia na pré-eclâmpsia grave (esquema da eclâmpsia)",
      "Restringir volume (risco de edema pulmonar); sonda vesical",
      "Durante o transporte: PA a cada 5–15 min; não deixar de repetir a dose se a meta não foi atingida",
      "Destino com UTI materna e neonatal conforme a idade gestacional"
    ],
    medicamentos: [
      {
        farmaco: "hidralazina", nome: "Hidralazina (ampola 20 mg/mL)", indicacao: "PA ≥ 160 x 110 mmHg",
        adulto: "5 mg IV a cada 20 min; dose máxima 30 mg",
        pediatrico: "", neonatal: "",
        diluicao: "1 ampola (20 mg) + 19 mL de água destilada = 1 mg/mL; dar 5 mL",
        via: "IV", velocidade: "Bolus lento em 1–2 min",
        repeticao: "A cada 20 min até a meta, máx. 30 mg; se não atingir, trocar de fármaco"
      },
      {
        farmaco: null, nome: "Nifedipino de liberação imediata (comprimido 10 mg)", indicacao: "PA ≥ 160 x 110 mmHg, alternativa à hidralazina (não está na biblioteca de fármacos)",
        adulto: "10 mg VO a cada 20–30 min; dose máxima 30 mg",
        pediatrico: "", neonatal: "",
        diluicao: "Não se aplica; NÃO usar sublingual nem cápsula mastigada", via: "VO", velocidade: "Engolir o comprimido",
        repeticao: "A cada 20–30 min até a meta, máx. 30 mg na fase aguda"
      },
      {
        farmaco: "sulfato-magnesio", nome: "Sulfato de magnésio 50%", indicacao: "Prevenção de eclâmpsia na pré-eclâmpsia grave",
        adulto: "Mesmo esquema da eclâmpsia: ataque 4 g IV em 10–20 min, manutenção 1 g/h por 24 h",
        pediatrico: "", neonatal: "",
        diluicao: "Ver complicação Eclâmpsia", via: "IV (ou IM no esquema de Pritchard)", velocidade: "Ataque em 10–20 min",
        repeticao: "Manter por 24 h"
      }
    ],
    alternativas: [
      "Refratária a hidralazina e nifedipino em doses máximas: nitroprussiato de sódio em UTI/sala de parto (uso curto, risco fetal de cianeto) — conforme protocolo institucional",
      "Edema agudo de pulmão: furosemida e nitroglicerina conforme protocolo"
    ],
    procedimentos: ["Decúbito lateral esquerdo", "Sonda vesical", "Monitor de PA automático com intervalo curto"],
    parar: [
      "Parar a viatura se convulsão, edema pulmonar ou sinais neurológicos focais",
      "Desviar para o hospital mais próximo com obstetrícia se PA ≥ 160 x 110 persistente após doses máximas, eclâmpsia ou suspeita de DPP"
    ],
    contingencia: {
      se: "Se a PA continuar ≥ 160 x 110 mmHg 20 min após a primeira dose",
      faca: ["Repetir hidralazina 5 mg IV (máx. 30 mg)", "Ou nifedipino 10 mg VO (máx. 30 mg)", "Garantir sulfato de magnésio", "Avisar regulação e o destino"]
    },
    fontes: [
      "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
      "FEBRASGO — Pré-eclâmpsia nos seus diversos aspectos, Série Orientações e Recomendações (2017/2021)",
      "RBEHG — Diretriz de pré-eclâmpsia (2023)"
    ]
  },

  {
    id: "parto-iminente-transporte",
    titulo: "Parto iminente durante o transporte",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "dx:trabalho-parto": 3, "dx:tpp": 2, "dx:rpm": 2, "gestante": 1, "prematuro": 1 },
    porQue: "Trabalho de parto avançado pode evoluir para expulsivo dentro da ambulância. Parto em movimento expõe mãe e recém-nascido a queda, hipotermia e falta de espaço para reanimação.",
    sinaisAlerta: ["Contrações a cada 2 min ou menos, fortes", "Puxo involuntário, vontade de evacuar", "Abaulamento do períneo, coroamento", "Rotura da bolsa com líquido meconial", "Sangramento vaginal importante"],
    monitorar: ["Frequência e duração das contrações", "Inspeção do períneo (sem toque repetido)", "BCF, se disponível", "PA e FC maternas", "Após o parto: tônus uterino e sangramento"],
    reconhecer: [
      "Avaliar antes de sair: paridade, idade gestacional, dilatação; multípara com dilatação avançada pode parir em minutos",
      "Coroamento = parto em minutos: não transportar, preparar assistência",
      "Prematuro: preparar material de reanimação neonatal e aquecimento"
    ],
    conduta: [
      "Pré-transporte: se dilatação total ou coroamento, NÃO iniciar o transporte; assistir o parto no local",
      "Durante o transporte: parar o veículo em local seguro e avisar a regulação",
      "Preparar kit de parto: luvas, 2 clamps, tesoura estéril, campos/toalhas aquecidas, gorro, aspirador, bolsa-valva-máscara neonatal (máscaras 0 e 1)",
      "Aquecer o ambiente da ambulância (alvo 23–26 °C) e desligar ar-condicionado",
      "Posição semi-sentada; apoiar o períneo e controlar a saída da cabeça; não tracionar",
      "Circular de cordão frouxa: passar sobre a cabeça; apertada: clampear duas vezes e cortar",
      "RN: secar, avaliar respiração/tônus; se bem, contato pele a pele com a mãe e cobrir",
      "Clampeamento do cordão: RN ≥ 34 sem com boa vitalidade, após 1–3 min; < 34 sem com boa vitalidade, após 30–60 s; se precisa de reanimação, clampear imediatamente",
      "RN que não respira ou hipotônico: ir para reanimação neonatal (ver apneia/bradicardia neonatal)",
      "3º período: ocitocina 10 UI IM após o nascimento (descartada outra gestação); não puxar o cordão com força; a placenta pode sair durante o transporte — guardar e levar ao hospital",
      "Massagem uterina e vigiar sangramento; seguir viagem ao destino após estabilidade"
    ],
    medicamentos: [
      {
        farmaco: "ocitocina", nome: "Ocitocina (ampola 5 UI/mL)", indicacao: "Prevenção da HPP no 3º período (após confirmar feto único)",
        adulto: "10 UI IM logo após o nascimento",
        pediatrico: "", neonatal: "",
        diluicao: "2 ampolas (10 UI) sem diluição", via: "IM (coxa ou deltoide)", velocidade: "IM",
        repeticao: "Se HPP: ver complicação Hemorragia obstétrica"
      }
    ],
    alternativas: ["Se ocitocina indisponível: misoprostol 600 mcg VO para prevenção, conforme OMS/OPAS (verificar disponibilidade no protocolo local)"],
    procedimentos: ["Assistência ao parto vaginal", "Clampeamento e secção do cordão", "Tração controlada do cordão apenas se treinado e com ocitocina já feita", "Massagem uterina", "Reanimação neonatal"],
    parar: [
      "Parar a viatura em local seguro para o período expulsivo e nos primeiros minutos do RN",
      "Pedir uma segunda equipe/ambulância (idealmente com suporte neonatal) se o RN precisar de reanimação",
      "Desviar para a maternidade mais próxima se distócia de ombro, apresentação pélvica, prolapso de cordão, hemorragia ou RN grave"
    ],
    contingencia: {
      se: "Se houver coroamento durante o transporte",
      faca: ["Parar o veículo", "Avisar regulação", "Aquecer o ambiente e preparar o kit", "Assistir o parto e o RN", "Ocitocina 10 UI IM e vigiar sangramento"]
    },
    fontes: [
      "Ministério da Saúde — Diretrizes Nacionais de Assistência ao Parto Normal (2017)",
      "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal: Reanimação do recém-nascido ≥ 34 semanas e < 34 semanas (2022)",
      "Ministério da Saúde — Protocolos de Suporte Avançado de Vida SAMU 192 (2016)",
      "OMS — Recommendations on uterotonics for the prevention of postpartum haemorrhage (2018)"
    ]
  },

  {
    id: "prolapso-cordao-sofrimento-fetal",
    titulo: "Prolapso de cordão / sofrimento fetal agudo",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "dx:sofrimento-fetal": 3, "dx:rpm": 2, "dx:trabalho-parto": 1, "dx:tpp": 1, "gestante": 1, "hipotensao": 1 },
    porQue: "No prolapso, o cordão fica comprimido entre a apresentação e a pelve, interrompendo o fluxo para o feto. Hipotensão materna, hipóxia e hipertonia uterina também reduzem a oxigenação fetal.",
    sinaisAlerta: ["Cordão visível ou palpável na vagina após rotura da bolsa", "BCF < 110 bpm persistente ou desacelerações", "Redução de movimentos fetais", "Sangramento com dor (DPP)"],
    monitorar: ["BCF com sonar/doppler, se disponível, a cada 15 min e após contrações", "PA e SpO₂ maternas", "Contrações", "Cordão: não manipular"],
    reconhecer: [
      "Prolapso de cordão: emergência; o parto deve ocorrer o mais rápido possível (geralmente cesárea)",
      "Fatores: bolsa rota com apresentação alta, pélvica/transversa, prematuridade, polidrâmnio, gemelaridade"
    ],
    conduta: [
      "Pré-transporte e durante: avisar o destino para cesárea de emergência",
      "Elevar manualmente a apresentação com dedos na vagina, sem comprimir o cordão; manter até a cesárea",
      "Posição genupeitoral, ou Trendelenburg com decúbito lateral esquerdo para o transporte",
      "Alternativa à mão: encher a bexiga com 500–700 mL de SF por sonda vesical e clampear (esvaziar antes da cesárea)",
      "Não tentar recolocar o cordão; manipular o mínimo; se exteriorizado, cobrir com compressa úmida e morna",
      "Sofrimento fetal sem prolapso: decúbito lateral esquerdo, O₂ se hipoxemia materna, corrigir hipotensão com cristaloide, suspender ocitocina em infusão",
      "Se parto vaginal iminente com dilatação total: assistir o parto (ver parto iminente)"
    ],
    medicamentos: [
      {
        farmaco: "cristaloide", nome: "Cristaloide (SF 0,9% ou Ringer lactato)", indicacao: "Hipotensão materna",
        adulto: "Bolus de 500 mL e reavaliar (cuidado na pré-eclâmpsia)",
        pediatrico: "", neonatal: "",
        diluicao: "Pronto para uso", via: "IV", velocidade: "Aberto, com reavaliação",
        repeticao: "Conforme PA e perfusão"
      },
      {
        farmaco: null, nome: "Tocolítico (ex.: terbutalina)", indicacao: "Reduzir contrações no prolapso enquanto se aguarda a cesárea",
        adulto: "Conforme protocolo institucional (não está na biblioteca de fármacos; não há dose validada aqui)",
        pediatrico: "", neonatal: "",
        diluicao: "Conforme protocolo institucional", via: "SC/IV", velocidade: "Conforme protocolo institucional",
        repeticao: "Conforme protocolo institucional"
      }
    ],
    alternativas: ["Se impossível manter a elevação manual por todo o trajeto: enchimento vesical"],
    procedimentos: ["Elevação manual da apresentação", "Posição genupeitoral / Trendelenburg com lateralização esquerda", "Enchimento vesical por sonda", "Deslocamento uterino para a esquerda"],
    parar: [
      "Desviar para a maternidade com centro cirúrgico mais próxima — o tempo até a cesárea é o determinante",
      "Parar a viatura apenas se o parto vaginal for iminente"
    ],
    contingencia: {
      se: "Se o BCF cair abaixo de 110 bpm ou o cordão aparecer na vagina",
      faca: ["Elevar a apresentação com a mão", "Genupeitoral ou Trendelenburg + lateral esquerdo", "O₂ e cristaloide se hipotensão", "Avisar destino: cesárea imediata", "Ir ao centro obstétrico mais próximo"]
    },
    fontes: [
      "Royal College of Obstetricians and Gynaecologists — Umbilical Cord Prolapse, Green-top Guideline nº 50 (2014)",
      "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
      "FEBRASGO — Tratado de Obstetrícia (2019)"
    ]
  },

  {
    id: "sindrome-hipotensiva-supina",
    titulo: "Síndrome hipotensiva supina (compressão aortocava)",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "gestante": 2, "hipotensao": 2, "dx:trauma": 1, "dx:trabalho-parto": 1, "obeso": 1 },
    porQue: "A partir de ~20 semanas, o útero em decúbito dorsal comprime a veia cava inferior e a aorta, reduzindo o retorno venoso e o débito cardíaco materno e a perfusão placentária. Comum na maca e na prancha rígida.",
    sinaisAlerta: ["Hipotensão, tontura, náusea, palidez e sudorese ao deitar de costas", "Taquicardia ou bradicardia materna", "Bradicardia fetal"],
    monitorar: ["PA e FC após cada mudança de posição", "BCF se disponível", "Posição da paciente durante todo o trajeto"],
    reconhecer: ["Útero na altura da cicatriz umbilical ou acima (≈ 20 semanas)", "Melhora em minutos com lateralização esquerda confirma o mecanismo", "Se não melhorar: procurar hemorragia oculta (DPP, trauma)"],
    conduta: [
      "Pré-transporte: posicionar em decúbito lateral esquerdo antes de sair",
      "Em prancha rígida (trauma): inclinar a prancha 15–30° para a esquerda com coxins, mantendo alinhamento da coluna",
      "Se precisar ficar em decúbito dorsal (procedimento, RCP): deslocamento manual do útero para a esquerda",
      "Reavaliar PA após a mudança; se mantiver hipotensão, cristaloide e investigar sangramento",
      "Na PCR materna: deslocamento uterino manual contínuo durante a RCP e pedir cesárea perimortem em até 4–5 min no hospital"
    ],
    medicamentos: [
      {
        farmaco: "cristaloide", nome: "Cristaloide (SF 0,9% ou Ringer lactato)", indicacao: "Hipotensão persistente após lateralização",
        adulto: "Bolus de 500 mL e reavaliar",
        pediatrico: "", neonatal: "",
        diluicao: "Pronto para uso", via: "IV", velocidade: "Aberto, com reavaliação",
        repeticao: "Conforme resposta; cautela na pré-eclâmpsia"
      }
    ],
    alternativas: ["Cunha/coxim sob o quadril direito quando a lateralização completa não for possível"],
    procedimentos: ["Decúbito lateral esquerdo", "Inclinação da prancha 15–30°", "Deslocamento manual do útero para a esquerda"],
    parar: ["Parar se hipotensão persistir após posicionamento e volume — tratar como possível hemorragia oculta e desviar para o hospital mais próximo"],
    contingencia: {
      se: "Se a gestante ficar hipotensa deitada de costas",
      faca: ["Lateral esquerdo ou deslocar o útero à esquerda", "Reavaliar PA em 2–3 min", "Cristaloide 500 mL se persistir", "Procurar sangramento oculto"]
    },
    fontes: [
      "American College of Surgeons — ATLS, 10ª edição (2018): trauma na gestante",
      "AHA — Diretrizes de RCP e ACE: PCR na gestação (2020, atualização 2025)",
      "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)"
    ]
  },

  {
    id: "toxicidade-magnesio",
    titulo: "Intoxicação por sulfato de magnésio",
    grupo: "obstetrica",
    publico: ["adulto"],
    gatilhos: { "dx:eclampsia": 2, "dx:pre-eclampsia": 2, "dx:hellp": 1, "fr-baixa": 2, "dx:insuf-renal": 2, "comorb:drc": 2, "glasgow-baixo": 1 },
    porQue: "O magnésio é eliminado pelo rim. Oligúria ou insuficiência renal acumulam magnésio, causando perda de reflexos, depressão respiratória e, em níveis altos, parada cardíaca.",
    sinaisAlerta: ["Reflexo patelar abolido (primeiro sinal)", "FR < 16 irpm", "Diurese < 25 mL/h", "Sonolência, fala arrastada, rubor, fraqueza", "Bradicardia, hipotensão, alterações de condução no ECG"],
    monitorar: ["Reflexo patelar a cada hora e antes de cada dose IM", "FR e SpO₂ contínuas", "Diurese horária", "Monitor cardíaco", "Magnesemia no destino, se disponível"],
    reconhecer: [
      "Níveis aproximados: terapêutico 4–7 mEq/L; perda de reflexos ~10 mEq/L; depressão respiratória > 12 mEq/L; parada cardíaca > 25 mEq/L (valores de referência variam entre fontes)",
      "Diferenciar de rebaixamento por eclâmpsia/AVC: na toxicidade, arreflexia acompanha a sonolência"
    ],
    conduta: [
      "Reflexo patelar ausente: suspender a infusão/dose IM",
      "FR < 16 irpm ou diurese < 25 mL/h: suspender ou reduzir a manutenção conforme protocolo e reavaliar",
      "Depressão respiratória: suspender magnésio, O₂, ventilar com bolsa-valva-máscara se necessário e dar gluconato de cálcio",
      "Parada respiratória: ventilação, intubação e gluconato de cálcio",
      "Durante o transporte: manter gluconato de cálcio aspirado e identificado ao alcance"
    ],
    medicamentos: [
      {
        farmaco: "gluconato-calcio", nome: "Gluconato de cálcio 10% (ampola 10 mL = 1 g)", indicacao: "Antídoto da intoxicação por magnésio",
        adulto: "1 g (10 mL) IV lento",
        pediatrico: "", neonatal: "",
        diluicao: "Sem diluição ou diluído em SF 0,9%",
        via: "IV", velocidade: "Lento, em cerca de 3–10 min, com monitor cardíaco",
        repeticao: "Conforme resposta e protocolo institucional"
      }
    ],
    alternativas: ["Furosemida pode aumentar a eliminação se a função renal permitir — conforme protocolo institucional", "Diálise em insuficiência renal grave (no destino)"],
    procedimentos: ["Ventilação com bolsa-valva-máscara", "Intubação orotraqueal se apneia persistente", "Sonda vesical para diurese horária"],
    parar: ["Parar a viatura para ventilar se FR < 10 irpm ou apneia", "Desviar para o hospital mais próximo se depressão respiratória não reverter com o cálcio"],
    contingencia: {
      se: "Se a FR cair abaixo de 12 irpm ou o reflexo patelar sumir",
      faca: ["Suspender o magnésio", "O₂ e ventilar se necessário", "Gluconato de cálcio 1 g IV lento", "Avisar regulação"]
    },
    fontes: [
      "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
      "FEBRASGO — Pré-eclâmpsia nos seus diversos aspectos (2021)",
      "Bula ANVISA — Sulfato de magnésio injetável"
    ]
  },

  /* ======================= NEONATAIS E PEDIÁTRICAS ======================= */
  {
    id: "hipotermia-neonatal",
    titulo: "Hipotermia neonatal no transporte",
    grupo: "neonatal",
    publico: ["neonato"],
    gatilhos: { "neonato": 2, "prematuro": 3, "hipotermia": 3, "dx:prematuro": 2, "dx:neonatal-grave": 2, "vm": 1 },
    porQue: "O RN, sobretudo o prematuro e o de baixo peso, perde calor rápido por evaporação, condução, convecção e radiação. Hipotermia aumenta mortalidade, hipoglicemia, acidose, apneia e hipertensão pulmonar.",
    sinaisAlerta: ["Temperatura axilar < 36,5 °C", "Extremidades frias, pele marmórea", "Apneia, bradicardia, letargia, sucção fraca", "Hipoglicemia associada", "Desconforto respiratório piorando"],
    monitorar: ["Temperatura axilar a cada 15–30 min (contínua por sensor, se a incubadora tiver)", "Temperatura da incubadora", "Glicemia", "FC, FR e SpO₂"],
    reconhecer: ["Normotermia neonatal: 36,5–37,5 °C (SBP/OMS)", "Hipotermia moderada: 32,0–35,9 °C; grave: < 32 °C (OMS)", "Evitar também hipertermia (> 37,5 °C)"],
    conduta: [
      "Pré-transporte: não sair com RN hipotérmico sem iniciar o aquecimento; incubadora de transporte ligada e pré-aquecida",
      "Gorro, campos aquecidos, trocar roupas/fraldas úmidas",
      "Prematuro: envolver em saco plástico de polietileno sem secar o corpo, conforme SBP 2022",
      "Gases aquecidos e umidificados se em ventilação",
      "Ambulância aquecida (23–26 °C), portas fechadas, evitar correntes de ar",
      "Reaquecimento gradual; checar glicemia",
      "Durante o transporte: medir temperatura a cada 15–30 min e ajustar a incubadora"
    ],
    medicamentos: [],
    alternativas: ["Sem incubadora: contato pele a pele com a mãe (RN estável) coberto com manta e gorro", "Colchão térmico químico, se disponível, com monitorização para evitar hipertermia"],
    procedimentos: ["Incubadora de transporte pré-aquecida", "Saco plástico para prematuro", "Gorro e campos aquecidos"],
    parar: ["Adiar a saída até iniciar o aquecimento se a incubadora não aquecer", "Parar e pedir apoio se a incubadora falhar no trajeto e a temperatura cair"],
    contingencia: {
      se: "Se a temperatura axilar cair abaixo de 36 °C durante o transporte",
      faca: ["Conferir incubadora e portinholas", "Gorro e campos secos aquecidos", "Aquecer a ambulância", "Checar glicemia", "Medir a temperatura a cada 15 min"]
    },
    fontes: [
      "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal (2022)",
      "Sociedade Brasileira de Pediatria / Ministério da Saúde — Transporte do recém-nascido de alto risco: diretrizes da SBP (Manual de Transporte Neonatal)",
      "Ministério da Saúde — Atenção à Saúde do Recém-Nascido, vol. 1 (2014)",
      "OMS — Thermal protection of the newborn: a practical guide (1997)"
    ]
  },

  {
    id: "hipoglicemia-neonatal",
    titulo: "Hipoglicemia neonatal",
    grupo: "neonatal",
    publico: ["neonato"],
    gatilhos: { "neonato": 2, "glicemia-baixa": 3, "dx:hipoglicemia": 3, "prematuro": 2, "hipotermia": 1, "dx:neonatal-grave": 1, "dx:sepse": 1 },
    porQue: "O RN tem reserva de glicogênio pequena. Prematuros, PIG/GIG, filhos de mãe diabética, RN em jejum, com hipotermia, sepse ou asfixia esgotam a glicose rápido; hipoglicemia prolongada causa lesão neurológica.",
    sinaisAlerta: ["Tremores, irritabilidade, hipotonia, letargia", "Apneia, cianose, sucção fraca", "Convulsão", "Hipotermia"],
    monitorar: ["Glicemia capilar antes de sair e a cada 30–60 min no transporte (mais frequente após correção)", "Infusão de glicose (bomba)", "Temperatura", "FC, FR, SpO₂"],
    reconhecer: [
      "Limiares de tratamento variam com a idade em horas e os sintomas — seguir protocolo institucional; em geral, glicemia < 45 mg/dL com sintomas exige tratamento IV imediato",
      "Muitos RN são assintomáticos: medir é a regra"
    ],
    conduta: [
      "Pré-transporte: acesso venoso (periférico ou umbilical) e infusão contínua de glicose em bomba antes de sair",
      "Hipoglicemia sintomática ou grave: bolus de glicose 10% seguido de infusão contínua",
      "Não usar glicose 50% ou 25% em RN",
      "Ajustar a velocidade de infusão de glicose (VIG) pela glicemia de controle",
      "Durante o transporte: nunca interromper a infusão de glicose; checar glicemia 30 min após cada mudança",
      "Tratar hipotermia associada"
    ],
    medicamentos: [
      {
        farmaco: "glicose", nome: "Glicose 10% (SG 10%)", indicacao: "Hipoglicemia neonatal sintomática",
        adulto: "", pediatrico: "Ver hipoglicemia no grupo metabólico (pediatria: glicose 10% 5–10 mL/kg = 0,5–1 g/kg, máx. 25 g, conforme PALS)",
        neonatal: "Bolus 2 mL/kg (200 mg/kg) de glicose 10%, seguido de infusão contínua com VIG 4–6 mg/kg/min",
        diluicao: "SG 10% pronto (ou preparar a partir de glicose 50% com água destilada, conferindo a concentração final)",
        via: "IV (periférica ou cateter umbilical)", velocidade: "Bolus em 1–5 min; depois bomba de infusão contínua",
        repeticao: "Glicemia em 30 min; se persistir baixa, novo bolus e aumentar VIG em 1–2 mg/kg/min conforme protocolo"
      }
    ],
    alternativas: ["Sem acesso venoso: acesso intraósseo; RN assintomático e estável em transição: alimentação/gel de glicose oral conforme protocolo do serviço de origem"],
    procedimentos: ["Acesso venoso periférico ou cateterismo umbilical", "Glicemia capilar seriada"],
    parar: ["Parar a viatura para puncionar acesso se a infusão for perdida e o RN tiver hipoglicemia", "Desviar para o hospital mais próximo se convulsão ou apneia sem resposta"],
    contingencia: {
      se: "Se a glicemia ficar abaixo de 45 mg/dL ou o acesso for perdido",
      faca: ["Glicose 10% 2 mL/kg IV/IO", "Retomar a infusão contínua", "Nova glicemia em 30 min", "Aquecer o RN"]
    },
    fontes: [
      "Sociedade Brasileira de Pediatria — Hipoglicemia no período neonatal, Documento Científico (2014)",
      "Ministério da Saúde — Atenção à Saúde do Recém-Nascido, vol. 3 (2014)",
      "American Academy of Pediatrics — Postnatal glucose homeostasis in late-preterm and term infants (2011)"
    ]
  },

  {
    id: "apneia-bradicardia-neonatal",
    titulo: "Apneia e bradicardia neonatal / reanimação neonatal no transporte",
    grupo: "neonatal",
    publico: ["neonato"],
    gatilhos: { "neonato": 2, "prematuro": 3, "dx:prematuro": 2, "fc-baixa": 3, "spo2-baixa": 2, "dx:neonatal-grave": 2, "hipotermia": 1, "glicemia-baixa": 1, "dx:sepse": 1 },
    porQue: "Prematuros têm controle respiratório imaturo (apneia da prematuridade). Hipotermia, hipoglicemia, sepse, obstrução de via aérea e vibração do transporte precipitam apneia; no RN a bradicardia quase sempre é hipóxica e responde à ventilação.",
    sinaisAlerta: ["Pausa respiratória ≥ 20 s, ou menor com bradicardia/dessaturação", "FC < 100 bpm", "SpO₂ caindo, cianose, palidez", "Hipotonia"],
    monitorar: ["Oximetria de pulso pré-ductal (mão direita) e FC contínuas", "Movimentos respiratórios", "Temperatura e glicemia", "Posição da cabeça (leve extensão do pescoço)"],
    reconhecer: [
      "Durante reanimação: FC avaliada por ausculta/monitor cardíaco; FC < 100 bpm indica VPP; FC < 60 bpm após VPP efetiva indica massagem",
      "Apneia recorrente no prematuro pode exigir CPAP ou intubação antes de sair"
    ],
    conduta: [
      "Pré-transporte: RN com apneias repetidas — estabilizar via aérea (CPAP ou intubação) antes de sair; material de reanimação neonatal testado",
      "Episódio isolado: estimular (planta do pé/dorso), reposicionar a cabeça, aspirar boca e nariz se secreção",
      "Sem resposta ou FC < 100 bpm: VPP com bolsa-valva-máscara ou ventilador manual em T a 40–60 ventilações/min (SBP 2022)",
      "O₂ inicial na VPP: 21% para ≥ 34 semanas; 30% para < 34 semanas; ajustar pela SpO₂ alvo",
      "VPP sem melhora: corrigir técnica (MR-SOPA: Máscara, Reposicionar, Sucção, Ocluir/abrir a boca, Pressão, Alternativa de via aérea)",
      "FC < 60 bpm após 30 s de VPP efetiva com cânula traqueal: massagem cardíaca 3:1 (90 compressões + 30 ventilações/min) com O₂ 100%",
      "FC < 60 bpm após 60 s de massagem + ventilação: adrenalina (via veia umbilical preferencial)",
      "Durante o transporte: parar a viatura para reanimação; procurar causa (hipotermia, hipoglicemia, cânula deslocada, pneumotórax)"
    ],
    medicamentos: [
      {
        farmaco: "adrenalina", nome: "Adrenalina 1 mg/mL diluída a 0,1 mg/mL", indicacao: "FC < 60 bpm apesar de VPP com O₂ 100% e massagem",
        adulto: "", pediatrico: "Ver PALS (0,01 mg/kg IV/IO, máx. 1 mg)",
        neonatal: "IV (veia umbilical): 0,02 mg/kg (faixa 0,01–0,03 mg/kg) = 0,2 mL/kg da solução 0,1 mg/mL. Endotraqueal: 0,05–0,1 mg/kg (0,5–1 mL/kg da solução 0,1 mg/mL), uma única vez enquanto se obtém acesso",
        diluicao: "1 mL de adrenalina 1 mg/mL + 9 mL de SF 0,9% = 0,1 mg/mL; identificar a seringa",
        via: "IV umbilical (preferencial), IO ou endotraqueal", velocidade: "Bolus rápido seguido de flush de 3 mL de SF",
        repeticao: "IV a cada 3–5 min se FC < 60 bpm"
      },
      {
        farmaco: "cristaloide", nome: "SF 0,9%", indicacao: "Suspeita de hipovolemia (perda sanguínea, choque) sem resposta à reanimação",
        adulto: "", pediatrico: "",
        neonatal: "10 mL/kg IV em 5–10 min; pode repetir uma vez conforme resposta (SBP 2022)",
        diluicao: "Pronto para uso", via: "IV umbilical ou IO", velocidade: "Em 5–10 min",
        repeticao: "Reavaliar após cada dose"
      },
      {
        farmaco: null, nome: "Cafeína (citrato)", indicacao: "Apneia da prematuridade (não está na biblioteca de fármacos)",
        adulto: "", pediatrico: "",
        neonatal: "Conforme prescrição do serviço de origem/protocolo institucional — sem dose validada nesta biblioteca",
        diluicao: "Conforme protocolo institucional", via: "IV ou VO", velocidade: "Conforme protocolo institucional",
        repeticao: "Conforme protocolo institucional"
      }
    ],
    alternativas: ["CPAP nasal para apneias leves recorrentes", "Máscara laríngea (RN ≥ 34 semanas e > 2.000 g) se intubação não for possível"],
    procedimentos: ["Estímulo tátil e posicionamento", "VPP com máscara ou cânula traqueal", "Massagem cardíaca 3:1 com técnica dos dois polegares", "Cateterismo venoso umbilical de emergência", "Intubação traqueal neonatal"],
    parar: [
      "Parar a viatura para VPP com máscara ou massagem cardíaca — não é possível reanimar com qualidade em movimento",
      "Desviar para a unidade neonatal mais próxima se o RN precisar de massagem ou adrenalina"
    ],
    contingencia: {
      se: "Se a FC cair abaixo de 100 bpm ou a apneia não ceder ao estímulo",
      faca: ["Parar a viatura", "Posicionar e aspirar", "VPP 40–60/min e checar MR-SOPA", "FC < 60 após VPP efetiva: massagem 3:1 com O₂ 100%", "Persistir < 60: adrenalina 0,02 mg/kg IV"]
    },
    fontes: [
      "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal: Reanimação do recém-nascido ≥ 34 semanas em sala de parto (2022)",
      "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal: Reanimação do prematuro < 34 semanas em sala de parto (2022)",
      "Sociedade Brasileira de Pediatria — Transporte do recém-nascido de alto risco (Manual de Transporte Neonatal SBP/MS)",
      "AHA/AAP — Neonatal Resuscitation Guidelines (2020, atualização 2025)"
    ]
  },

  {
    id: "obstrucao-deslocamento-tubo-neonatal-pediatrico",
    titulo: "Obstrução ou deslocamento da cânula traqueal no RN/criança (DOPE)",
    grupo: "neonatal",
    publico: ["neonato", "pediatrico"],
    gatilhos: { "via-aerea-avancada": 3, "vm": 3, "neonato": 1, "pediatrico": 1, "prematuro": 1, "spo2-baixa": 2, "fc-baixa": 1 },
    porQue: "Cânulas pequenas obstruem com secreção facilmente e a distância entre extubação e intubação seletiva é de poucos milímetros; movimentar a cabeça ou transferir de maca desloca o tubo.",
    sinaisAlerta: ["Queda súbita de SpO₂ ou bradicardia", "Perda ou queda da curva de capnografia", "Expansão torácica assimétrica ou ausente", "Murmúrio vesicular diminuído de um lado", "Distensão abdominal, choro audível (tubo fora da traqueia)", "Aumento da pressão de pico no ventilador"],
    monitorar: ["Capnografia contínua (curva)", "SpO₂ e FC", "Marca do tubo na comissura labial/gengiva antes e após cada mobilização", "Expansão torácica e ausculta", "Pressões e volumes do ventilador"],
    reconhecer: [
      "DOPE: Deslocamento, Obstrução, Pneumotórax, Equipamento (O₂, ventilador, circuito)",
      "Tamanho da cânula (sem cuff) no RN — SBP 2022: < 1.000 g/< 28 sem: 2,5; 1.000–2.000 g/28–34 sem: 3,0; 2.000–3.000 g/34–38 sem: 3,5; > 3.000 g/> 38 sem: 3,5–4,0",
      "Profundidade no RN: tabela por idade gestacional da SBP 2022 (ex.: 30–32 sem ≈ 7,0 cm; 38–40 sem ≈ 8,5 cm) ou peso (kg) + 6 cm",
      "Criança > 2 anos (PALS): com cuff = idade/4 + 3,5; sem cuff = idade/4 + 4; profundidade ≈ 3 × diâmetro interno"
    ],
    conduta: [
      "Pré-transporte: confirmar posição (capnografia, ausculta, radiografia se disponível), anotar a marca, fixar bem, cabeça em posição neutra, aspirador e material de reintubação prontos",
      "Durante o transporte, ao dessaturar: desconectar do ventilador e ventilar com bolsa (ou ventilador manual em T) com O₂ 100%",
      "Checar DOPE em ordem: marca do tubo e capnografia (D); aspirar a cânula (O); ausculta e expansão (P); fonte de O₂, circuito e ventilador (E)",
      "Tubo deslocado ou obstruído sem melhora com aspiração: retirar e ventilar com máscara; reintubar com cânula do tamanho adequado",
      "Intubação seletiva (MV reduzido à esquerda): tracionar a cânula 0,5–1 cm e reavaliar",
      "Pneumotórax hipertensivo: punção de alívio"
    ],
    medicamentos: [
      {
        farmaco: null, nome: "SF 0,9% para aspiração", indicacao: "Secreção espessa obstruindo a cânula",
        adulto: "", pediatrico: "Instilação somente se secreção espessa, conforme protocolo institucional",
        neonatal: "Instilação de rotina não é recomendada; usar somente conforme protocolo institucional",
        diluicao: "Não se aplica", via: "Endotraqueal", velocidade: "Não se aplica",
        repeticao: "Conforme necessidade"
      }
    ],
    alternativas: ["Máscara laríngea como resgate (RN ≥ 34 sem e > 2.000 g; criança conforme tamanho)", "Ventilação com bolsa-valva-máscara até reintubação"],
    procedimentos: ["Aspiração da cânula com sonda adequada", "Reintubação traqueal", "Punção torácica de alívio", "Refixação da cânula"],
    parar: ["Parar a viatura para reintubar ou puncionar tórax", "Desviar para o hospital mais próximo se não conseguir via aérea e SpO₂ não se recupera com máscara"],
    contingencia: {
      se: "Se a SpO₂ ou a FC caírem subitamente em RN/criança intubada",
      faca: ["Desconectar do ventilador e ventilar com bolsa O₂ 100%", "Checar capnografia e marca do tubo", "Aspirar a cânula", "Ausculta: pneumotórax?", "Se sem melhora: extubar, máscara, reintubar"]
    },
    fontes: [
      "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal (2022)",
      "AHA — Pediatric Advanced Life Support (PALS) (2020, atualização 2025)",
      "Sociedade Brasileira de Pediatria — Transporte do recém-nascido de alto risco (Manual de Transporte Neonatal SBP/MS)"
    ]
  },

  {
    id: "descompensacao-cardiopatia-canal-dependente",
    titulo: "Cardiopatia congênita canal-dependente descompensada",
    grupo: "neonatal",
    publico: ["neonato"],
    gatilhos: { "dx:cardiopatia-congenita": 3, "neonato": 2, "spo2-critica": 2, "spo2-baixa": 1, "perfusao-ruim": 2, "hipotensao": 1 },
    porQue: "Em cardiopatias que dependem do canal arterial (fluxo pulmonar ou sistêmico), o fechamento do canal nos primeiros dias causa hipoxemia grave ou choque. Prostaglandina E1 mantém o canal aberto até a cirurgia.",
    sinaisAlerta: ["Cianose que não melhora com O₂ (teste de hiperóxia negativo)", "Diferença de SpO₂ pré e pós-ductal > 3%", "Pulsos femorais fracos, má perfusão, acidose, choque", "Taquipneia sem esforço importante"],
    monitorar: ["SpO₂ pré-ductal (mão direita) e pós-ductal (pé)", "FC, FR, apneia", "PA nos quatro membros quando possível", "Temperatura (prostaglandina causa febre)", "Glicemia", "Infusão de alprostadil sem interrupção"],
    reconhecer: [
      "Lesões com fluxo pulmonar dependente (ex.: atresia pulmonar) e sistêmico dependente (ex.: hipoplasia de VE, coarctação crítica), além da transposição das grandes artérias",
      "Alvo de SpO₂ em cardiopatia cianótica geralmente 75–85%: hiperóxia pode piorar fluxo sistêmico em lesões com circulação em paralelo",
      "Apneia é efeito adverso frequente do alprostadil, dose-dependente"
    ],
    conduta: [
      "Pré-transporte: iniciar alprostadil antes de sair (não aguardar ecocardiograma se suspeita forte), dois acessos seguros, infusão em bomba",
      "Decidir via aérea antes de sair: considerar intubação se apneias com a prostaglandina ou doses altas/transporte longo",
      "O₂ com cautela, mirando SpO₂ indicada pela equipe de cardiologia (em geral 75–85%)",
      "Normotermia, glicemia normal, correção de acidose/choque conforme protocolo",
      "Durante o transporte: não interromper a infusão; acesso reserva; ventilação pronta para apneia"
    ],
    medicamentos: [
      {
        farmaco: "alprostadil", nome: "Alprostadil (prostaglandina E1; ampola 500 mcg/mL)", indicacao: "Manter canal arterial aberto",
        adulto: "", pediatrico: "",
        neonatal: "Início 0,05–0,1 mcg/kg/min; após resposta, reduzir para a menor dose eficaz (frequentemente 0,01–0,05 mcg/kg/min)",
        diluicao: "Conforme protocolo institucional (diluir em SG 5% ou SF 0,9%, conferir concentração final e dupla checagem)",
        via: "IV contínua (periférica ou umbilical)", velocidade: "Bomba de infusão contínua, sem bolus",
        repeticao: "Infusão contínua; ajustar pela SpO₂/perfusão e orientação da cardiologia pediátrica"
      }
    ],
    alternativas: ["Choque com baixo débito: suporte inotrópico conforme protocolo de cardiologia pediátrica"],
    procedimentos: ["Acesso venoso seguro (dois acessos ou cateter umbilical)", "Intubação traqueal eletiva antes do transporte se indicada", "Monitorização pré e pós-ductal"],
    parar: ["Parar a viatura para ventilar se apneia", "Desviar para a UTI neonatal mais próxima se choque refratário ou perda do acesso sem conseguir reiniciar a prostaglandina"],
    contingencia: {
      se: "Se houver apneia ou queda da SpO₂ em RN com alprostadil",
      faca: ["Estimular e ventilar com bolsa/ventilador em T", "Conferir se a infusão está correndo", "Considerar intubação", "Avisar regulação e equipe de cardiologia"]
    },
    fontes: [
      "Sociedade Brasileira de Pediatria — Transporte do recém-nascido de alto risco (Manual de Transporte Neonatal SBP/MS)",
      "Ministério da Saúde — Atenção à Saúde do Recém-Nascido, vol. 3 (2014): cardiopatias congênitas",
      "Bula ANVISA — Alprostadil (Prostin VR)",
      "AHA — Pediatric Advanced Life Support (PALS) (2020)"
    ]
  },

  {
    id: "crianca-desidratacao-choque",
    titulo: "Desidratação grave / choque hipovolêmico na criança",
    grupo: "neonatal",
    publico: ["pediatrico"],
    gatilhos: { "pediatrico": 2, "perfusao-ruim": 3, "hipotensao": 3, "fc-alta": 2, "vomitos": 2, "dx:choque": 2, "dx:sepse": 1, "febre": 1, "glicemia-baixa": 1 },
    porQue: "A criança mantém a PA por vasoconstrição e taquicardia até perder muito volume; a hipotensão é sinal tardio de choque descompensado e precede a parada.",
    sinaisAlerta: ["Taquicardia para a idade", "Enchimento capilar > 2 s, extremidades frias, pulsos finos", "Letargia, irritabilidade", "Diurese reduzida", "Hipotensão (sinal tardio)", "Hipoglicemia"],
    monitorar: ["FC, PA, enchimento capilar, pulsos e nível de consciência após cada bolus", "Sinais de sobrecarga: estertores, hepatomegalia, piora respiratória", "Glicemia", "Diurese", "Temperatura"],
    reconhecer: [
      "PAS mínima esperada (PALS): < 1 ano 70 mmHg; 1–10 anos 70 + (2 × idade) mmHg; > 10 anos 90 mmHg",
      "Choque compensado: perfusão ruim com PA normal",
      "Cardiopatia, desnutrição grave ou sinais de sobrecarga: bolus menores (10 mL/kg) e mais lentos"
    ],
    conduta: [
      "Pré-transporte: dois acessos (ou intraósseo em até 90 s se falhar), glicemia, aquecer, O₂ se necessário",
      "Bolus de cristaloide isotônico 10–20 mL/kg em 5–20 min",
      "Reavaliar perfusão e sinais de sobrecarga após cada bolus; repetir se ainda houver choque e sem sobrecarga",
      "Após 40–60 mL/kg sem resposta ou sinais de sobrecarga: pensar em choque refratário e vasoativo (adrenalina ou noradrenalina conforme protocolo PALS/SSC)",
      "Corrigir hipoglicemia com dose pediátrica",
      "Durante o transporte: bolus com seringa ou bomba (gotejamento livre é impreciso em criança); reavaliar a cada bolus"
    ],
    medicamentos: [
      {
        farmaco: "cristaloide", nome: "Cristaloide isotônico (SF 0,9% ou Ringer lactato)", indicacao: "Choque hipovolêmico/desidratação grave",
        adulto: "", pediatrico: "10–20 mL/kg por bolus em 5–20 min; volume do bolus não deve ultrapassar o de adulto (em geral 500–1.000 mL)",
        neonatal: "10 mL/kg (ver apneia/bradicardia neonatal)",
        diluicao: "Pronto para uso", via: "IV ou IO", velocidade: "Em 5–20 min com seringa ou bomba",
        repeticao: "Reavaliar após cada bolus; repetir se persistir choque sem sobrecarga"
      },
      {
        farmaco: "glicose", nome: "Glicose 10%", indicacao: "Hipoglicemia na criança em choque",
        adulto: "", pediatrico: "0,5–1 g/kg = 5–10 mL/kg de glicose 10% (máx. 25 g por dose) (PALS)",
        neonatal: "Ver hipoglicemia neonatal",
        diluicao: "SG 10% pronto", via: "IV ou IO", velocidade: "Em alguns minutos",
        repeticao: "Glicemia em 15–30 min"
      }
    ],
    alternativas: ["Choque refratário a volume: adrenalina ou noradrenalina em infusão conforme PALS/Surviving Sepsis Campaign pediátrica (ver biblioteca de fármacos)", "Sangramento: concentrado de hemácias 10–20 mL/kg conforme protocolo"],
    procedimentos: ["Acesso intraósseo", "Monitorização de diurese", "Aquecimento"],
    parar: ["Parar a viatura para obter acesso intraósseo se perder o acesso venoso em choque", "Desviar para o hospital mais próximo se hipotensão persistente após 40–60 mL/kg ou sinais de pré-parada (bradicardia, rebaixamento)"],
    contingencia: {
      se: "Se o enchimento capilar ficar > 3 s, a FC subir ou a PA cair durante o transporte",
      faca: ["Bolus 10–20 mL/kg de cristaloide", "Checar glicemia", "Reavaliar estertores e fígado", "Avisar regulação; considerar vasoativo"]
    },
    fontes: [
      "AHA — Pediatric Advanced Life Support (PALS) (2020, atualização 2025)",
      "Surviving Sepsis Campaign — International Guidelines for Septic Shock in Children (2020)",
      "OMS — The treatment of diarrhoea: a manual for physicians and other senior health workers (2005)",
      "Ministério da Saúde — Protocolos de Suporte Avançado de Vida SAMU 192 (2016)"
    ]
  }
);
