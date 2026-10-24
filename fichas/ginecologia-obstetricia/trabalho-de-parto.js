// Trabalho de parto: diagnóstico, fases, partograma e condutas
registrarFicha({
  id: "trabalho-de-parto",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Trabalho de parto: diagnóstico, partograma e condutas por período",
  resumo: "Gestante a termo com contrações: diferenciar trabalho de parto de falso trabalho de parto, definir a fase, quando internar, como acompanhar (partograma, ausculta fetal) e condutas no 1º, 2º e 3º períodos e na analgesia.",
  palavrasChave: "trabalho de parto falso trabalho de parto fase latente fase ativa periodo expulsivo dequitacao partograma linha de alerta linha de acao ausculta intermitente bcf toque vaginal analgesia peridural ocitocina manejo ativo clampeamento tardio estreptococo grupo b egb penicilina dilatacao contracoes",
  critico: {
    tempo: "BCF 15–30 min na fase ativa",
    texto: "Na fase ativa, ausculte o BCF por 1 min após a contração a cada 15–30 min (a cada 5 min no expulsivo). Desaceleração tardia, bradicardia ou taquicardia persistente: mudar decúbito, hidratar, suspender ocitocina e chamar o obstetra."
  },
  alarmes: [
    "Sangramento vaginal maior que o do muco (descolamento de placenta, placenta prévia, rotura uterina, vasa prévia)",
    "BCF < 110 ou > 160 bpm persistente, desacelerações tardias ou prolongadas",
    "Líquido meconial espesso",
    "Cordão palpável ou visível na vagina (prolapso de cordão)",
    "Febre materna ≥ 38 °C (corioamnionite) ou PA ≥ 140/90 (pré-eclâmpsia)",
    "Dor contínua entre as contrações, parada súbita das contrações ou subida da apresentação (rotura uterina, sobretudo com cesárea anterior)",
    "Apresentação não cefálica, gestação < 37 semanas ou gemelar",
    "Hipertonia ou taquissistolia (> 5 contrações em 10 min)"
  ],
  condutaInicial: [
    "Acolher com classificação de risco obstétrico (ACCR); ver Caderneta, idade gestacional, tipagem, sorologias do 3º trimestre e cultura para EGB",
    "Sinais vitais, dinâmica uterina por 10 min, BCF, altura uterina, apresentação (Leopold) e toque vaginal (dilatação, apagamento, altura, bolsa)",
    "Testes rápidos de HIV e sífilis (e hepatite B se não feitos no 3º trimestre)",
    "Fase latente sem risco: orientar e liberar para casa com sinais de retorno; fase ativa: internar no pré-parto/PPP",
    "Na fase ativa: partograma, ausculta intermitente, toque a cada 4 h, dieta leve e líquidos, liberdade de posição e movimento, acompanhante de livre escolha",
    "Oferecer métodos não farmacológicos de alívio da dor e analgesia regional quando solicitada",
    "Profilaxia para EGB quando indicada (tabela) e anti-D no pós-parto se Rh negativo com RN Rh positivo"
  ],
  fataisExcluir: [
    "Descolamento prematuro de placenta",
    "Placenta prévia e vasa prévia",
    "Rotura uterina (cesárea anterior, uso de ocitocina ou misoprostol)",
    "Prolapso de cordão",
    "Pré-eclâmpsia grave / eclâmpsia",
    "Corioamnionite e sepse materna"
  ],
  proximaDecisao: "Dilatação sem progresso por 4 h na fase ativa (ou partograma cruzando a linha de ação) → avaliar contrações, bolsa, posição fetal e proporção (ver ficha Distocias): amniotomia e/ou ocitocina ou cesárea. Dilatação completa sem nascimento em 2 h (nulípara sem analgesia) ou 1 h (multípara sem analgesia) → período expulsivo prolongado: avaliar parto instrumental ou cesárea.",
  clinica: {
    anamnese: [
      "Início e frequência das contrações, perda de líquido (cor, horário), sangramento, movimentos fetais",
      "DUM/USG precoce para idade gestacional; paridade e partos anteriores (cesárea, tempo de trabalho de parto)",
      "Comorbidades e intercorrências do pré-natal (HAS, DMG, infecções, RCF, apresentação)",
      "Sorologias e testes do 3º trimestre, tipagem Rh, cultura para EGB, alergias",
      "Plano de parto e desejos (posição, analgesia, acompanhante)"
    ],
    exameFisico: [
      "PA, FC, temperatura, FR; edema; reflexos se PA alta",
      "Dinâmica uterina: número, duração e intensidade das contrações em 10 min; tônus entre elas",
      "Manobras de Leopold e altura uterina; BCF antes, durante e após a contração",
      "Especular se perda de líquido ou sangramento (não tocar se suspeita de placenta prévia)",
      "Toque: dilatação, apagamento, consistência, posição do colo, altura da apresentação (planos de DeLee), variedade de posição, bolsa"
    ],
    diferenciais: [
      { dx: "Falso trabalho de parto (contrações de Braxton Hicks)", pista: "Contrações irregulares, que não aumentam e cedem com repouso ou analgesia; colo sem modificação em 1–2 h" },
      { dx: "Fase latente", pista: "Contrações dolorosas com modificação do colo até 4 cm (MS 2017; OMS 2018 considera até 5 cm)" },
      { dx: "Descolamento de placenta", pista: "Dor contínua, útero hipertônico, sangramento escuro, alteração do BCF" },
      { dx: "Infecção urinária / pielonefrite", pista: "Disúria, febre, dor lombar; contrações irritativas" },
      { dx: "Rotura prematura de membranas sem trabalho de parto", pista: "Perda de líquido sem contrações regulares" }
    ],
    gravidade: [
      "Fase latente: contrações dolorosas e modificações do colo (apagamento, dilatação até 4 cm)",
      "Fase ativa: contrações regulares e dolorosas com dilatação progressiva a partir de 4 cm (MS 2017) ou 5 cm (OMS 2018)",
      "Duração da fase ativa (MS 2017): nulípara em média 8 h, improvável passar de 18 h; multípara em média 5 h, improvável passar de 12 h",
      "2º período (expulsivo): da dilatação completa ao nascimento; fase passiva (sem puxo) e ativa (puxos)",
      "3º período: dequitação, até 30 min com manejo ativo; > 30 min = retenção placentária",
      "4º período: 1ª hora após a dequitação (risco de hemorragia pós-parto)"
    ]
  },
  exames: [
    {
      nome: "Testes rápidos na admissão",
      pedido: "Teste rápido para HIV. Teste rápido para sífilis (treponêmico) + VDRL. Teste rápido para hepatite B (HBsAg) se não realizado no 3º trimestre. Tipagem ABO-Rh se não disponível.",
      porQue: "Profilaxia de transmissão vertical (AZT, tratamento do RN, imunoglobulina anti-hepatite B, anti-D).",
      esperar: "Resultado em 30 min.",
      interpretacao: "HIV reagente: AZT IV e cuidados de TV (ficha HIV na gestação). Sífilis reagente: tratar e avaliar o RN (ficha Sífilis). HBsAg reagente: vacina + imunoglobulina no RN.",
      limitacoes: "Janela imunológica; repetir se exposição recente."
    },
    {
      nome: "Partograma",
      pedido: "Abrir partograma na fase ativa: dilatação e altura a cada toque (4/4 h), contrações em 10 min a cada 30 min, BCF a cada 15–30 min, PA e temperatura a cada 4 h, FC a cada 1 h, líquido amniótico e medicações.",
      porQue: "Detectar desvios de progressão e de vitalidade fetal.",
      esperar: "Curva de dilatação à esquerda da linha de alerta.",
      interpretacao: "Cruzar a linha de alerta: reavaliar causas. Atingir a linha de ação (4 h à direita da de alerta): intervir (amniotomia, ocitocina, analgesia, cesárea conforme causa).",
      limitacoes: "A OMS (2018) não recomenda usar a velocidade de 1 cm/h, sozinha, para indicar intervenção; o Guia de Cuidados no Trabalho de Parto (LCG/OMS 2020) substitui o partograma clássico onde implantado."
    },
    {
      nome: "Cardiotocografia",
      pedido: "Cardiotocografia intraparto contínua (se indicada).",
      porQue: "Gestante de risco (ocitocina, analgesia peridural nas 1ª horas, mecônio, febre, RCF, cesárea anterior) ou ausculta alterada.",
      esperar: "Categoria I: linha de base 110–160, variabilidade 6–25, sem desacelerações tardias ou variáveis.",
      interpretacao: "Categoria III (variabilidade ausente com desacelerações recorrentes ou bradicardia, ou padrão sinusoidal): medidas de reanimação intrauterina e parto imediato.",
      limitacoes: "Em baixo risco, CTG contínua aumenta cesárea sem melhorar desfecho neonatal; preferir ausculta intermitente."
    }
  ],
  tratamento: [
    {
      droga: "Penicilina G cristalina (profilaxia para EGB)",
      linha: "l1",
      dose: "5 milhões UI de ataque; depois 2,5–3 milhões UI",
      via: "IV",
      intervalo: "A cada 4 h",
      duracao: "Até o nascimento (ideal ≥ 4 h antes do parto)",
      monitorizacao: "Reação alérgica",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Diluir em 50–100 mL de SF 0,9%, correr em 30 min. Alternativa: ampicilina 2 g IV ataque e 1 g IV 4/4 h. Alergia sem anafilaxia: cefazolina 2 g IV e 1 g 8/8 h. Alergia grave: clindamicina 900 mg IV 8/8 h (se sensível) ou vancomicina 20 mg/kg IV 8/8 h"
    },
    {
      droga: "Ocitocina (manejo ativo do 3º período)",
      linha: "l1",
      dose: "10 UI",
      via: "IM",
      intervalo: "Dose única logo após o nascimento",
      duracao: "—",
      monitorizacao: "Tônus uterino e sangramento a cada 15 min na 1ª hora",
      contraindicacoes: "—",
      ajustes: "Para todas as parturientes (prevenção de hemorragia pós-parto). Associar tração controlada do cordão (por profissional treinado) e clampeamento do cordão após 1–3 min"
    },
    {
      droga: "Ocitocina (correção de distocia funcional)",
      linha: "alt",
      dose: "Início 1–2 mUI/min; aumentar 1–2 mUI/min a cada 30–40 min",
      via: "IV em bomba de infusão",
      intervalo: "Contínua",
      duracao: "Até o parto",
      monitorizacao: "Contrações (meta 3–5 em 10 min), BCF contínuo (CTG)",
      contraindicacoes: "Sofrimento fetal, desproporção, apresentação anômala, cicatriz uterina corporal",
      ajustes: "5 UI em 500 mL de SG 5% ou SF 0,9% = 10 mUI/mL; 1 mUI/min = 6 mL/h. Máximo usual 20 mUI/min (até 32 conforme protocolo). Taquissistolia: reduzir ou suspender"
    },
    {
      droga: "Analgesia regional (peridural ou combinada raqui-peridural)",
      linha: "l1",
      dose: "Pelo anestesiologista",
      via: "Neuroaxial",
      intervalo: "Contínua ou intermitente",
      duracao: "Até o parto",
      monitorizacao: "PA a cada 5 min após o bolus inicial e depois a cada 30 min; BCF contínuo nos primeiros 30 min; bloqueio motor e diurese",
      contraindicacoes: "Recusa, coagulopatia, plaquetas baixas, infecção no local, hipovolemia não corrigida",
      ajustes: "Pode ser feita em qualquer dilatação quando a mulher pedir (MS 2017). Hipotensão: decúbito lateral, cristaloide e vasopressor. Aumenta a duração do 2º período"
    },
    {
      droga: "Métodos não farmacológicos",
      linha: "adj",
      dose: "Banho morno, bola, deambulação, massagem, respiração, técnicas de relaxamento, imersão em água",
      via: "—",
      intervalo: "Livre",
      duracao: "Durante o trabalho de parto",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Oferecer a todas, com acompanhante e doula se desejado"
    }
  ],
  destino: {
    agora: [
      "Fase ativa ou qualquer sinal de alarme: internar",
      "Fase latente de baixo risco: casa com orientações, analgesia simples e retorno"
    ],
    reavaliar: [
      "Toque a cada 4 h na fase ativa (antes, se puxo, rotura de bolsa ou alteração do BCF)",
      "BCF: 15–30 min na fase ativa e 5 min no expulsivo",
      "PA e temperatura 4/4 h; FC materna 1/1 h; contrações 30/30 min"
    ],
    alta: [
      "Falso trabalho de parto ou fase latente: alta com retorno combinado e orientações escritas",
      "Puerpério: ver ficha Consulta puerperal"
    ],
    observacao: [
      "Dúvida diagnóstica: observar 1–2 h e repetir o toque"
    ],
    internacao: [
      "Fase ativa, rotura de membranas, sangramento, alteração de vitalidade, PA elevada, febre"
    ],
    transferencia: [
      "Serviço sem obstetra, centro cirúrgico ou UTI neonatal com gestante de risco ou < 34 semanas: regular para maternidade de referência (vinculação Rede Alyne); parto iminente não deve ser transferido"
    ]
  },
  prescricao: {
    hospitalar: "TRABALHO DE PARTO — FASE ATIVA (risco habitual)\n1. Dieta: líquidos claros e dieta leve à vontade (risco habitual, sem previsão de anestesia geral).\n2. Acesso venoso salinizado (não obrigatório em baixo risco; obrigatório se ocitocina, analgesia ou risco).\n3. Deambulação livre; posição de escolha da parturiente; acompanhante.\n4. Ausculta do BCF por 1 min após a contração a cada 15–30 min; no expulsivo a cada 5 min.\n5. Controles: dinâmica uterina 30/30 min; PA e temperatura 4/4 h; FC materna 1/1 h; toque vaginal 4/4 h; registrar no partograma.\n6. Métodos não farmacológicos para dor (banho, bola, massagem); analgesia peridural se solicitar (acionar anestesiologista).\n7. Se profilaxia para EGB indicada: Penicilina G cristalina 5.000.000 UI IV em 100 mL de SF 0,9% em 30 min; depois 2.500.000 UI IV de 4/4 h até o parto.\n8. 3º período: Ocitocina 10 UI IM logo após o nascimento; clampeamento do cordão após 1–3 min; contato pele a pele e amamentação na 1ª hora.\n9. Rh negativo com RN Rh positivo e Coombs indireto negativo: Imunoglobulina anti-D 300 mcg IM até 72 h após o parto.\n10. 4º período: tônus uterino, sangramento, PA e FC de 15/15 min na 1ª hora.",
    ambulatorial: "FALSO TRABALHO DE PARTO / FASE LATENTE — ALTA\nUSO ORAL\n1. Paracetamol 500 mg --------------------------- 10 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n\nORIENTAÇÕES\n- Banho morno, caminhar, descansar entre as contrações, beber líquidos e comer leve.\n- Voltar à maternidade se: contrações a cada 5 minutos ou menos por 1 hora, perda de líquido, sangramento, bebê mexendo menos, dor de cabeça forte, febre."
  },
  orientacoesRetorno: [
    "Contrações de verdade ficam mais fortes, mais longas e mais próximas e não passam com o repouso",
    "Voltar à maternidade se as contrações vierem a cada 5 minutos ou menos por 1 hora (antes, se morar longe ou não for o 1º parto)",
    "Voltar imediatamente se perder líquido pela vagina, sangrar, sentir o bebê mexer menos, tiver dor contínua na barriga, dor de cabeça forte, visão embaçada ou febre",
    "Você tem direito a acompanhante de sua escolha durante todo o trabalho de parto, parto e pós-parto (Lei 11.108/2005)",
    "Pode comer leve, beber líquidos, caminhar e escolher a posição durante o trabalho de parto"
  ],
  tabelas: [
    {
      titulo: "Trabalho de parto x falso trabalho de parto",
      colunas: ["Característica", "Trabalho de parto", "Falso trabalho de parto"],
      linhas: [
        ["Contrações", "Regulares, intervalos cada vez menores", "Irregulares, sem padrão"],
        ["Intensidade", "Aumenta progressivamente", "Não muda"],
        ["Repouso / analgesia", "Não cedem", "Melhoram ou somem"],
        ["Colo uterino", "Apaga e dilata progressivamente", "Sem modificação em 1–2 h"],
        ["Dor", "Lombar e abdominal, em cólica", "Mais em baixo ventre, desconforto"]
      ]
    },
    {
      titulo: "Profilaxia intraparto para estreptococo do grupo B (EGB)",
      colunas: ["Situação", "Profilaxia"],
      linhas: [
        ["Cultura vaginal/retal positiva com 35–37 semanas (nesta gestação)", "Sim"],
        ["Bacteriúria por EGB em qualquer momento da gestação", "Sim"],
        ["Filho anterior com doença invasiva por EGB", "Sim"],
        ["Cultura desconhecida + parto < 37 semanas, bolsa rota ≥ 18 h ou febre ≥ 38 °C", "Sim"],
        ["Cesárea eletiva fora de trabalho de parto e com bolsa íntegra", "Não (mesmo com cultura positiva)"],
        ["Cultura negativa nas últimas 5 semanas", "Não"]
      ],
      nota: "Febre intraparto sugere corioamnionite: antibiótico de amplo espectro (ampicilina + gentamicina), não só profilaxia."
    },
    {
      titulo: "Duração do 2º período: quando considerar prolongado (MS 2017)",
      colunas: ["Paridade", "Sem analgesia", "Com analgesia regional"],
      linhas: [
        ["Nulípara", "> 2 h", "> 3 h"],
        ["Multípara", "> 1 h", "> 2 h"]
      ],
      nota: "Ao atingir esses tempos, avaliar parto vaginal operatório ou cesárea; não é indicação automática. Puxos espontâneos; não usar Kristeller; episiotomia só seletiva."
    }
  ],
  fontes: [
    "Ministério da Saúde/CONITEC — Diretriz Nacional de Assistência ao Parto Normal (2017; versão resumida 2022)",
    "OMS — Intrapartum care for a positive childbirth experience (2018) e WHO Labour Care Guide (2020)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "ACOG Committee Opinion 797 — Prevention of Group B Streptococcal Early-Onset Disease in Newborns (2020)",
    "FEBRASGO — Protocolos/Femina: assistência ao trabalho de parto (2021–2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
