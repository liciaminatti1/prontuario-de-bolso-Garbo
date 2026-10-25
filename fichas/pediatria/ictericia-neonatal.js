// Icterícia neonatal (hiperbilirrubinemia)
registrarFicha({
  id: "ictericia-neonatal",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Icterícia neonatal",
  resumo: "RN amarelado. Separar icterícia fisiológica de patológica, medir bilirrubina e decidir fototerapia ou exsanguineotransfusão pelas curvas da AAP 2022 (IG ≥ 35 semanas). Icterícia prolongada com fezes claras ou bilirrubina direta alta é colestase: investigar com urgência.",
  palavrasChave: "ictericia neonatal hiperbilirrubinemia bilirrubina indireta direta fototerapia exsanguineotransfusao kramer bhutani nomograma aap 2022 kernicterus encefalopatia bilirrubinica incompatibilidade abo rh coombs g6pd leite materno colestase acolia coluria atresia de vias biliares kasai cartao de cores das fezes",
  critico: {
    tempo: "Icterícia < 24 h ou acolia: urgente",
    texto: "Icterícia nas primeiras 24 h de vida é patológica: dosar bilirrubina na hora. Fezes claras (acolia) ou bilirrubina direta elevada em qualquer idade: suspeitar de atresia de vias biliares, que precisa ser operada idealmente antes de 60 dias de vida."
  },
  alarmes: [
    "Icterícia nas primeiras 24 h de vida",
    "Letargia, sucção débil, hipotonia ou hipertonia, opistótono, choro agudo (encefalopatia bilirrubínica aguda)",
    "Bilirrubina subindo rápido (≥ 0,3 mg/dL/h nas primeiras 24 h ou ≥ 0,2 mg/dL/h depois) ou próxima do limiar de exsanguineotransfusão",
    "Fezes claras (acolia), urina escura (colúria) ou hepatomegalia",
    "Icterícia > 14 dias no termo ou > 21 dias no prematuro",
    "RN com febre, hipotermia, vômitos ou má aceitação (sepse, ITU)",
    "Perda de peso > 10% ou desidratação"
  ],
  condutaInicial: [
    "Avaliar todo RN ictérico com bilirrubina transcutânea (BTc) ou sérica (BT); zonas de Kramer servem só como triagem visual",
    "Localizar a BT nas curvas por horas de vida e IG da AAP 2022 (ou calculadora on-line BiliTool) considerando fatores de risco de neurotoxicidade",
    "Pedir BT e frações, tipagem ABO/Rh e Coombs direto do RN (sobretudo mãe O ou Rh negativo), hemograma com reticulócitos; G6PD se história familiar ou etnia de risco",
    "Acima do limiar: fototerapia intensiva; próxima do limiar de exsanguíneo: internar em UTI neonatal, fototerapia intensiva e preparar exsanguineotransfusão",
    "Manter e apoiar o aleitamento materno (8–12 mamadas/dia); complementar só se perda de peso excessiva ou desidratação",
    "Icterícia prolongada: dosar bilirrubina direta; direta > 1 mg/dL ou acolia → investigação de colestase e cirurgia pediátrica/gastropediatria com urgência"
  ],
  fataisExcluir: [
    "Doença hemolítica por isoimunização (Rh, ABO, outros antígenos)",
    "Deficiência de G6PD com hemólise",
    "Sepse neonatal ou ITU",
    "Encefalopatia bilirrubínica aguda / kernicterus",
    "Atresia de vias biliares (colestase)",
    "Hipotireoidismo congênito (icterícia prolongada)"
  ],
  proximaDecisao: "Abaixo do limiar de fototerapia: definir o retorno pela distância até o limiar (quanto mais perto e quanto mais novo o RN, mais cedo — de horas a 1–2 dias). Em fototerapia: BT a cada 4–24 h conforme a gravidade; suspender quando a BT estiver ≥ 2 mg/dL abaixo do limiar em que foi iniciada; dosar rebote 6–12 h depois se hemólise, < 38 sem ou início antes de 48 h (nos demais, BT no dia seguinte ou avaliação clínica).",
  clinica: {
    anamnese: [
      "Horas de vida no início da icterícia; IG; peso de nascimento e perda de peso",
      "Tipagem materna, Coombs indireto, irmão com icterícia que precisou de fototerapia ou exsanguíneo",
      "Aleitamento: número de mamadas, pega, diurese (≥ 6 fraldas/dia após o 5º dia) e evacuações",
      "Cor das fezes (comparar com o cartão de cores da Caderneta) e da urina",
      "Cefalohematoma, equimoses, policitemia, filho de mãe diabética",
      "História familiar de anemia hemolítica, G6PD, esferocitose"
    ],
    exameFisico: [
      "Extensão crânio-caudal da icterícia (zonas de Kramer), com luz natural",
      "Estado de hidratação, peso, atividade, sucção, tônus",
      "Hepatoesplenomegalia, palidez, cefalohematoma",
      "Sinais de infecção"
    ],
    diferenciais: [
      { dx: "Icterícia fisiológica", pista: "Surge após 24 h, pico no 3º–5º dia no termo, BT abaixo do limiar, RN bem; some até 2 semanas" },
      { dx: "Icterícia do aleitamento (baixa ingesta)", pista: "Primeira semana, perda de peso alta, poucas fraldas, mamadas ineficazes" },
      { dx: "Icterícia do leite materno", pista: "Prolongada (até 8–12 semanas), RN ganhando peso, fezes amarelas, BT indireta; diagnóstico de exclusão" },
      { dx: "Doença hemolítica (ABO, Rh)", pista: "Icterícia precoce, Coombs direto positivo, reticulocitose, anemia" },
      { dx: "Deficiência de G6PD / esferocitose", pista: "Hemólise com Coombs negativo, história familiar" },
      { dx: "Colestase (atresia de vias biliares, infecções, metabólicas)", pista: "Bilirrubina direta > 1 mg/dL, acolia, colúria, hepatomegalia" },
      { dx: "Hipotireoidismo congênito", pista: "Icterícia prolongada, constipação, hérnia umbilical, pezinho alterado" }
    ],
    gravidade: [
      "Fatores de risco de neurotoxicidade (AAP 2022): IG < 38 sem (risco maior quanto menor a IG), albumina < 3,0 g/dL, doença hemolítica isoimune, deficiência de G6PD ou outra hemólise, sepse, instabilidade clínica significativa nas últimas 24 h",
      "Com fatores de neurotoxicidade, usar as curvas de limiar mais baixas",
      "Limiar de escalonamento: BT a 2 mg/dL do limiar de exsanguíneo → emergência"
    ]
  },
  exames: [
    {
      nome: "Bilirrubina total e frações",
      pedido: "Bilirrubina total e frações (sérica). Informar horas de vida no pedido.",
      porQue: "Decisão de fototerapia e diagnóstico de colestase.",
      esperar: "Predomínio de indireta na icterícia fisiológica.",
      interpretacao: "Plotar a BT total por horas de vida nas curvas AAP 2022. Bilirrubina direta (conjugada) > 1,0 mg/dL é anormal em qualquer idade.",
      limitacoes: "BTc tende a subestimar valores altos e não vale durante e logo após a fototerapia: confirmar com sérica se BTc ≥ 15 mg/dL ou a 3 mg/dL do limiar."
    },
    {
      nome: "Avaliação de hemólise",
      pedido: "Tipagem sanguínea ABO/Rh e Coombs direto do RN; hemograma com reticulócitos; tipagem e Coombs indireto materno; G6PD (dosagem quantitativa).",
      porQue: "Hemólise muda o limiar de tratamento e a velocidade de subida.",
      esperar: "Coombs direto positivo, reticulócitos altos, anemia na doença isoimune.",
      interpretacao: "Coombs direto positivo + subida rápida: alto risco; considerar imunoglobulina.",
      limitacoes: "G6PD pode ser falsamente normal durante hemólise aguda."
    },
    {
      nome: "Albumina",
      pedido: "Albumina sérica.",
      porQue: "Albumina < 3,0 g/dL é fator de neurotoxicidade.",
      esperar: "—",
      interpretacao: "Relação BT/albumina também ajuda na decisão de exsanguíneo (ver AAP 2022).",
      limitacoes: "—"
    },
    {
      nome: "Icterícia prolongada / colestase",
      pedido: "Bilirrubina total e frações, TGO, TGP, GGT, fosfatase alcalina, TP/INR, albumina, glicemia, TSH e T4 livre, urina tipo 1 e urocultura. USG de abdome com vias biliares (jejum de 4 h).",
      porQue: "Atresia de vias biliares e outras causas de colestase.",
      esperar: "Colestase: direta > 1 mg/dL, GGT alta.",
      interpretacao: "USG normal NÃO exclui atresia (sinal do cordão triangular, vesícula ausente ou pequena sugerem). Encaminhar sem esperar todos os resultados.",
      limitacoes: "INR alargado: vitamina K IV/IM."
    }
  ],
  tratamento: [
    {
      droga: "Fototerapia intensiva",
      linha: "l1",
      dose: "Irradiância ≥ 30 µW/cm²/nm (luz azul 460–490 nm), máxima superfície corporal exposta",
      via: "Contínua; pode interromper para mamar se a BT não estiver perto do limiar de escalonamento",
      intervalo: "BT de controle em 4–24 h conforme a gravidade",
      duracao: "Até BT ≥ 2 mg/dL abaixo do limiar em que foi iniciada",
      monitorizacao: "Temperatura, hidratação, peso diário, diurese; proteção ocular",
      contraindicacoes: "Colestase importante (síndrome do bebê bronzeado) — discutir com especialista",
      ajustes: "Fototerapia domiciliar só em RN ≥ 38 sem, sem fatores de risco, BT até 1–2 mg/dL acima do limiar, com aparelho adequado e controle diário (AAP 2022). Não suspender aleitamento"
    },
    {
      droga: "Imunoglobulina humana IV",
      linha: "adj",
      dose: "0,5–1 g/kg",
      via: "IV em 2 h",
      intervalo: "Pode repetir em 12 h",
      duracao: "—",
      monitorizacao: "BT, sinais de sobrecarga, hemólise",
      contraindicacoes: "—",
      ajustes: "Doença hemolítica isoimune (Coombs direto positivo) com BT atingindo o limiar de escalonamento apesar de fototerapia intensiva"
    },
    {
      droga: "Exsanguineotransfusão",
      linha: "l1",
      dose: "Duplo volume: 2 × volemia (cerca de 160 mL/kg no termo)",
      via: "Cateter venoso umbilical (ou arterial e venoso)",
      intervalo: "Alíquotas de 5–10 mL (conforme peso) ao longo de cerca de 1 h",
      duracao: "—",
      monitorizacao: "FC, SpO₂, glicemia, cálcio, potássio, plaquetas, BT após o procedimento",
      contraindicacoes: "—",
      ajustes: "Indicação: BT no limiar de exsanguíneo da AAP 2022 para IG/horas de vida/fatores de risco, ou qualquer sinal de encefalopatia bilirrubínica aguda. Só em UTI neonatal. Sangue reconstituído, irradiado, compatível"
    },
    {
      droga: "Complementação com fórmula infantil",
      linha: "adj",
      dose: "Conforme peso e perda ponderal, após cada mamada",
      via: "Oral (copinho, translactação ou seringa)",
      intervalo: "—",
      duracao: "Até perda de peso controlada e boa transferência de leite",
      monitorizacao: "Peso, diurese",
      contraindicacoes: "—",
      ajustes: "Usar quando houver perda de peso excessiva ou desidratação; manter o leite materno. Água ou chá: não usar"
    },
    {
      droga: "Expor ao sol / banho de sol",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não trata icterícia e expõe a queimadura e hipertermia",
      ajustes: "Orientar a família"
    }
  ],
  destino: {
    agora: [
      "BT abaixo do limiar e RN bem: retorno programado pela distância até o limiar",
      "Acima do limiar: encaminhar para fototerapia (maternidade/hospital)"
    ],
    reavaliar: [
      "BT de controle conforme a curva; peso e mamadas em 24–48 h após alta precoce (< 72 h)"
    ],
    alta: [
      "Da fototerapia: BT ≥ 2 mg/dL abaixo do limiar inicial, mamando bem; plano de reavaliação do rebote"
    ],
    observacao: [
      "Fototerapia em alojamento conjunto quando possível, mantendo a mãe junto"
    ],
    internacao: [
      "Fototerapia; UTI neonatal se BT perto do limiar de exsanguíneo, hemólise com subida rápida ou sinais neurológicos"
    ],
    transferencia: [
      "BT a 2 mg/dL do limiar de exsanguíneo ou encefalopatia: transferir para UTI neonatal com exsanguineotransfusão; iniciar fototerapia intensiva no transporte se possível",
      "Colestase / acolia: encaminhamento urgente para cirurgia pediátrica ou gastropediatria (atresia de vias biliares)"
    ]
  },
  prescricao: {
    hospitalar: "ICTERÍCIA NEONATAL — FOTOTERAPIA (peso: ___ kg; IG: ___ sem; vida: ___ h; BT: ___ mg/dL)\n1. Aleitamento materno em livre demanda, 8–12 vezes/dia (complementar com fórmula ___ mL após as mamadas se perda de peso > 10% ou desidratação).\n2. Fototerapia intensiva contínua (irradiância ≥ 30 µW/cm²/nm), RN só de fralda, proteção ocular; pausas apenas para mamar e higiene.\n3. Se BT a 2 mg/dL do limiar de exsanguíneo: fototerapia com máxima exposição (dupla ou com foco por cima e por baixo), sem pausas; acesso venoso; avisar UTI neonatal e banco de sangue.\n4. Se doença isoimune (Coombs direto +) e BT no limiar de escalonamento: imunoglobulina humana 0,5–1 g/kg = ___ g IV em 2 h.\n5. Hidratação venosa só se desidratação ou incapaz de mamar.\n6. Controles: temperatura de 3/3 h; peso diário; diurese e evacuações; BT em ___ h (4–6 h se perto do limiar de escalonamento; 12–24 h nos demais); sinais neurológicos (letargia, hipertonia, choro agudo).\n7. Suspender a fototerapia quando BT ≥ 2 mg/dL abaixo do limiar em que foi iniciada; BT de rebote em 6–12 h se hemólise, < 38 sem ou início < 48 h.",
    ambulatorial: "SOLICITAÇÃO — RN ICTÉRICO (vida: ___ h / ___ dias)\n1. Bilirrubina total e frações — URGENTE.\n2. Tipagem ABO/Rh e Coombs direto do RN; hemograma com reticulócitos.\n3. Se icterícia > 14 dias (> 21 dias no prematuro): bilirrubina total e frações, TGO, TGP, GGT, TSH e T4 livre, urina tipo 1 e urocultura; USG de abdome superior (vias biliares).\n\nORIENTAÇÕES\n- Amamentar de 8 a 12 vezes por dia, inclusive à noite.\n- Não dar água, chá ou glicose. Não colocar o bebê no sol para tratar a icterícia.\n- Observar a cor das fezes todos os dias com o cartão da Caderneta da Criança."
  },
  orientacoesRetorno: [
    "Amamente de 8 a 12 vezes por dia; bebê bem alimentado faz xixi claro pelo menos 6 vezes por dia depois da 1ª semana",
    "Banho de sol não trata a icterícia e pode queimar a pele do bebê",
    "Volte no mesmo dia se o amarelo aumentar (chegar à barriga, pernas ou pés), se o bebê ficar muito sonolento, mamar mal, chorar de forma estranha, ficar mole ou rígido",
    "Fezes claras (branco, cinza, amarelo-claro como massa de vidraceiro) ou xixi escuro em qualquer idade: procure a UBS ou o pronto-socorro no mesmo dia",
    "Se o bebê continuar amarelo depois de 2 semanas de vida, volte para exames"
  ],
  tabelas: [
    {
      titulo: "Zonas de Kramer (estimativa visual, só para triagem)",
      colunas: ["Zona", "Área ictérica", "BT aproximada (mg/dL)"],
      linhas: [
        ["1", "Cabeça e pescoço", "4–8"],
        ["2", "Até o umbigo", "5–12"],
        ["3", "Até os joelhos", "8–16"],
        ["4", "Braços e pernas (até punhos e tornozelos)", "11–18"],
        ["5", "Mãos e pés (palmas e plantas)", "> 15"]
      ],
      nota: "A avaliação visual é imprecisa, principalmente em pele escura e após fototerapia. Nunca decidir tratamento pela zona: medir BTc ou BT."
    },
    {
      titulo: "Nomograma de Bhutani x curvas AAP 2022",
      colunas: ["Ferramenta", "Para que serve", "Como usar"],
      linhas: [
        ["Nomograma de Bhutani (1999)", "Prever o risco de hiperbilirrubinemia significativa pela BT por horas de vida (zonas de risco baixo, intermediário e alto, percentis 40, 75 e 95)", "Ainda útil para planejar o seguimento após a alta; não define tratamento"],
        ["Curvas de fototerapia AAP 2022", "Decidir fototerapia por IG (35 a ≥ 40 sem) e horas de vida, com e sem fatores de neurotoxicidade", "Limiar da curva = iniciar fototerapia. Acompanhamento pela distância BT–limiar"],
        ["Curvas de exsanguineotransfusão AAP 2022", "Decidir escalonamento e exsanguíneo", "BT a 2 mg/dL do limiar = escalonamento (emergência); no limiar = exsanguíneo"]
      ],
      nota: "Os valores numéricos das curvas variam a cada hora de vida e IG: consultar as figuras da AAP 2022 ou o aplicativo/calculadora (BiliTool, PediTools). Para < 35 semanas, seguir o protocolo da UTI neonatal (limiares mais baixos)."
    }
  ],
  fontes: [
    "AAP — Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation (Kemper AR et al., Pediatrics, 2022)",
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 2 (2014)",
    "Sociedade Brasileira de Pediatria — Icterícia no recém-nascido com idade gestacional ≥ 35 semanas (Departamento de Neonatologia)",
    "Sociedade Brasileira de Pediatria — Alerta: Colestase neonatal / Cartão de cores das fezes na Caderneta da Criança",
    "NASPGHAN/ESPGHAN — Guideline for the Evaluation of Cholestatic Jaundice in Infants (2017)",
    "Bhutani VK et al. — Predictive ability of a predischarge hour-specific serum bilirubin (Pediatrics, 1999)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
