// Refluxo e regurgitação no lactente
registrarFicha({
  id: "refluxo-lactente",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Refluxo e regurgitação no lactente (fisiológico × DRGE)",
  resumo: "Regurgitação frequente em lactente saudável que cresce bem é refluxo fisiológico e não precisa de remédio. DRGE é o refluxo que causa sintomas incômodos ou complicações (baixo ganho de peso, esofagite, sintomas respiratórios).",
  palavrasChave: "refluxo gastroesofagico regurgitacao golfada lactente bebe drge vomito omeprazol espessamento formula antirregurgitacao ar alergia proteina leite de vaca aplv",
  critico: {
    tempo: "Vômito bilioso = PS agora",
    texto: "Vômito verde (bilioso), vômitos em jato progressivos, sangue ou distensão abdominal não são refluxo: encaminhar ao PS (má rotação/volvo, estenose hipertrófica de piloro, obstrução)."
  },
  alarmes: [
    "Vômitos biliosos (verdes) ou fecaloides",
    "Vômitos em jato persistentes, especialmente entre 2 e 8 semanas de vida (estenose hipertrófica de piloro)",
    "Hematêmese ou sangue nas fezes",
    "Início após os 6 meses ou persistência/piora após 12–18 meses",
    "Baixo ganho ou perda de peso, recusa alimentar persistente, desidratação",
    "Febre, letargia, abaulamento de fontanela, macro ou microcefalia, convulsão (causa neurológica ou infecciosa)",
    "Distensão abdominal, hepatoesplenomegalia, diarreia crônica",
    "Apneia, cianose ou ALTE/BRUE"
  ],
  conduta: [
    "Diferenciar: regurgitação sem esforço, bebê feliz e ganhando peso = refluxo fisiológico (pico aos 4 meses; resolve em geral até 12 meses). Não pedir exames nem prescrever remédio",
    "Tranquilizar a família e explicar a história natural",
    "Rever volume e frequência: evitar superalimentação (fórmula: conferir diluição e volume para o peso); mamadas menores e mais frequentes",
    "Manter aleitamento materno; não trocar leite materno por fórmula",
    "Posição: arrotar durante e após mamadas; manter no colo, em posição vertical, 20–30 min após mamar. Dormir sempre de barriga para cima, em superfície plana (não elevar cabeceira com travesseiro, não usar posicionadores)",
    "Em fórmula com regurgitação incômoda: considerar fórmula espessada / antirregurgitação (AR)",
    "Suspeita de DRGE (irritabilidade durante mamadas, recusa, baixo ganho) ou de alergia à proteína do leite de vaca: teste terapêutico de 2–4 semanas com exclusão de leite de vaca da dieta materna (se mama no peito) ou fórmula extensamente hidrolisada",
    "Inibidor de bomba de prótons só para DRGE com sintomas típicos ou esofagite, em teste de 4–8 semanas; não usar para choro/irritabilidade isolados nem para regurgitação simples",
    "Não usar procinéticos (domperidona, metoclopramida, bromoprida) nem antiácidos rotineiramente"
  ],
  exames: [
    "Refluxo fisiológico: nenhum exame",
    "Vômitos em jato em lactente de 2–8 semanas: USG de piloro (urgente)",
    "Suspeita de alteração anatômica (vômitos persistentes, biliosos fora do PS agudo): radiografia contrastada de esôfago, estômago e duodeno (EED) — não serve para diagnosticar DRGE",
    "Urina tipo 1 e urocultura se vômitos com baixo ganho de peso ou febre (ITU)",
    "pHmetria/impedanciometria e endoscopia: só com gastroenterologista pediátrico"
  ],
  diferenciais: [
    "Alergia à proteína do leite de vaca (sangue nas fezes, dermatite atópica, história familiar)",
    "Estenose hipertrófica de piloro (2–8 semanas, vômitos em jato não biliosos, bebê faminto, perda de peso)",
    "Má rotação intestinal com volvo (vômito bilioso — emergência cirúrgica)",
    "Infecção urinária, gastroenterite, meningite",
    "Erros inatos do metabolismo, hiperplasia adrenal congênita (RN com vômitos e desidratação)",
    "Hipertensão intracraniana"
  ],
  prescricao: {
    ambulatorial: "REFLUXO FISIOLÓGICO — ORIENTAÇÕES (sem medicamento)\n1. Manter o aleitamento materno em livre demanda.\n2. Pôr para arrotar durante e após as mamadas.\n3. Manter o bebê no colo, em pé, por 20 a 30 minutos depois de mamar.\n4. Evitar apertar a barriga (fralda e roupa folgadas).\n5. Dormir sempre de barriga para cima, no berço, sem travesseiro e sem elevar a cabeceira com objetos.\n6. Se usa fórmula: preparar exatamente como a lata indica (medida rasa, na proporção de água do rótulo) e não oferecer mais do que o volume orientado.\n\nSE DRGE CONFIRMADA PELO MÉDICO (teste terapêutico, peso: ___ kg)\nUSO ORAL\n1. Omeprazol suspensão oral 2 mg/mL (manipulada) ---- 1 frasco\n   Dar ___ mL (1 mg/kg/dia) 1 vez ao dia, 30 minutos antes da primeira mamada, por 4 a 8 semanas. Reavaliar com o médico em 4 semanas.\n   (Criança que engole: omeprazol 10 mg para 10–20 kg; 20 mg para > 20 kg, 1 vez ao dia em jejum.)\n\nSE SUSPEITA DE ALERGIA À PROTEÍNA DO LEITE DE VACA\n- Mãe que amamenta: retirar leite de vaca e derivados da dieta da mãe por 2 a 4 semanas (com orientação de cálcio para a mãe).\n- Bebê em fórmula: fórmula extensamente hidrolisada por 2 a 4 semanas (solicitar pelo protocolo do SUS/componente especializado)."
  },
  orientacoesRetorno: [
    "Golfar é comum e melhora sozinho, na maioria dos bebês até 1 ano",
    "Voltar imediatamente se: vômito verde, vômito em jato que se repete, sangue no vômito ou nas fezes, barriga inchada, bebê muito mole ou sonolento, febre em menor de 3 meses, pausas na respiração ou ficar roxo, menos fraldas molhadas",
    "Procurar a UBS se: não ganhar peso, recusar mamadas, chorar muito durante as mamadas ou se arquear com frequência",
    "Retorno na puericultura conforme calendário; se em teste com remédio ou dieta, retorno em 2–4 semanas"
  ],
  encaminhar: [
    "PS no mesmo dia: vômito bilioso, suspeita de estenose de piloro, desidratação, sinais neurológicos",
    "Gastroenterologia pediátrica: DRGE sem resposta a 4–8 semanas de IBP, necessidade de IBP prolongado, baixo ganho de peso persistente, disfagia, suspeita de esofagite",
    "Pneumologia pediátrica: sintomas respiratórios recorrentes atribuídos a refluxo"
  ],
  fontes: [
    "NASPGHAN/ESPGHAN — Pediatric Gastroesophageal Reflux Clinical Practice Guidelines (Rosen et al., JPGN 2018)",
    "SBP — Departamento Científico de Gastroenterologia: Doença do refluxo gastroesofágico em pediatria (documento científico vigente)",
    "AAP — Safe Sleep: Sleep-Related Infant Deaths, Updated 2022 Recommendations (2022)",
    "ASBAI/SBAN/SBP — Consenso Brasileiro sobre Alergia Alimentar (2018)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
