// Dengue
registrarFicha({
  id: "dengue",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Dengue",
  resumo: "Febre aguda (2–7 dias) com 2 ou mais de: náusea/vômito, exantema, mialgia/artralgia, cefaleia/dor retro-orbital, petéquias ou prova do laço positiva, leucopenia.",
  palavrasChave: "dengue arbovirose febre hidratacao grupo a b c d sinais de alarme prova do laco chikungunya zika",
  critico: {
    tempo: "Classifique: A, B, C ou D",
    texto: "Sinais de alarme e de choque mudam o local de tratamento. Período crítico: na defervescência (3º ao 7º dia)."
  },
  alarmes: [
    "Dor abdominal intensa e contínua",
    "Vômitos persistentes",
    "Acúmulo de líquidos (ascite, derrame pleural/pericárdico)",
    "Hipotensão postural ou lipotimia",
    "Hepatomegalia > 2 cm; sangramento de mucosa; letargia/irritabilidade; aumento progressivo do hematócrito"
  ],
  condutaInicial: [
    "Classificar em grupo A, B, C ou D",
    "Prova do laço se sem sangramento espontâneo",
    "Hidratação conforme grupo",
    "Dipirona ou paracetamol; nunca AAS ou AINE",
    "Notificar e orientar sinais de alarme e retorno"
  ],
  fataisExcluir: [
    "Choque por extravasamento plasmático",
    "Hemorragia grave",
    "Disfunção grave de órgão (miocardite, hepatite, encefalite)"
  ],
  proximaDecisao: "Grupo A → casa com hidratação oral. B → hemograma e observação até resultado. C → hidratação IV imediata e leito de observação/internação. D → expansão rápida e UTI.",
  clinica: {
    anamnese: [
      "Dia de início da febre (define fase)",
      "Sinais de alarme",
      "Comorbidades e condições de risco: gestante, < 2 anos, > 65 anos, HAS, DM, DRC, cardiopatia, doença hematológica",
      "Uso de AINE/anticoagulante",
      "Diurese e ingesta hídrica"
    ],
    exameFisico: [
      "PA deitado e em pé, FC, enchimento capilar, pressão de pulso",
      "Prova do laço",
      "Abdome: dor, hepatomegalia, ascite",
      "Ausculta pulmonar: derrame",
      "Sangramentos de pele e mucosas"
    ],
    diferenciais: [
      {
        dx: "Chikungunya",
        pista: "Artralgia intensa e incapacitante"
      },
      {
        dx: "Zika",
        pista: "Exantema pruriginoso, febre baixa, conjuntivite"
      },
      {
        dx: "Leptospirose",
        pista: "Exposição a enchente, mialgia em panturrilhas, icterícia"
      },
      {
        dx: "Influenza / COVID-19",
        pista: "Sintomas respiratórios"
      },
      {
        dx: "Meningococcemia",
        pista: "Petéquias com toxemia rápida"
      },
      {
        dx: "Malária",
        pista: "Viagem a área endêmica"
      }
    ],
    gravidade: [
      "A: sem alarme, sem condição especial ou risco, prova do laço negativa e sem sangramento",
      "B: sem alarme, com sangramento de pele espontâneo ou prova do laço positiva, ou condição especial/risco/comorbidade",
      "C: algum sinal de alarme",
      "D: choque (PA convergente ≤ 20 mmHg, hipotensão, enchimento > 2 s, taquicardia, pulso fraco), sangramento grave ou disfunção grave de órgão"
    ]
  },
  exames: [
    {
      nome: "Hemograma",
      pedido: "Hemograma completo com contagem de plaquetas (grupo B: resultado no mesmo dia).",
      porQue: "Hematócrito e plaquetas definem conduta.",
      esperar: "Leucopenia, plaquetopenia, hemoconcentração.",
      interpretacao: "Ht ↑ > 10% do basal (ou > 44% mulher / > 50% homem) → conduzir como C.",
      limitacoes: "Hemograma normal no início não exclui progressão."
    },
    {
      nome: "Confirmação etiológica",
      pedido: "NS1 ou RT-PCR (até o 5º dia); sorologia IgM (a partir do 6º dia).",
      porQue: "Vigilância e diferencial.",
      esperar: "—",
      interpretacao: "Não muda a conduta clínica inicial.",
      limitacoes: "Não aguardar resultado para tratar."
    },
    {
      nome: "Grupos C e D",
      pedido: "Hemograma, albumina, transaminases, creatinina, eletrólitos, gasometria; RX de tórax e USG de abdome.",
      porQue: "Extravasamento e disfunções.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Hidratação oral (grupos A e B)",
      linha: "l1",
      dose: "Adulto 60 mL/kg/dia: 1/3 sais de reidratação oral, 2/3 líquidos caseiros",
      via: "VO",
      intervalo: "Fracionado ao longo do dia (1/3 nas primeiras 4–6 h)",
      duracao: "Até 24–48 h após a febre ceder",
      monitorizacao: "Diurese, sinais de alarme",
      contraindicacoes: "—",
      ajustes: "Criança (< 13 anos): até 10 kg 130 mL/kg/dia; 10–20 kg 100 mL/kg/dia; > 20 kg 80 mL/kg/dia — 1/3 em SRO e 2/3 em outros líquidos, volume maior nas primeiras 4–6 h"
    },
    {
      droga: "Soro fisiológico 0,9% (grupo C)",
      linha: "l1",
      dose: "10 mL/kg na 1ª hora",
      via: "IV",
      intervalo: "Reavaliar após 1 h; repetir até 3×",
      duracao: "Manutenção: 25 mL/kg em 6 h, depois 25 mL/kg em 8 h",
      monitorizacao: "Sinais vitais, diurese ≥ 1 mL/kg/h, Ht em 2 h",
      contraindicacoes: "—",
      ajustes: "Sem melhora após 3 fases → conduzir como D"
    },
    {
      droga: "Soro fisiológico 0,9% (grupo D)",
      linha: "l1",
      dose: "20 mL/kg em até 20 min",
      via: "IV",
      intervalo: "Repetir até 3×",
      duracao: "Conforme resposta",
      monitorizacao: "Reavaliar a cada 15–30 min, Ht em 2 h",
      contraindicacoes: "—",
      ajustes: "Ht em ascensão após volume → albumina 0,5–1 g/kg; Ht em queda → investigar sangramento"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "Adulto 500–1.000 mg · criança 10 mg/kg/dose (respeitar a dose máxima para peso e idade)",
      via: "VO",
      intervalo: "Até 6/6h",
      duracao: "Enquanto dor/febre",
      monitorizacao: "—",
      contraindicacoes: "Alergia",
      ajustes: "—"
    },
    {
      droga: "Paracetamol",
      linha: "alt",
      dose: "Adulto 500–750 mg · criança 10 mg/kg/dose",
      via: "VO",
      intervalo: "Até 6/6h (adulto máx 3 g/dia)",
      duracao: "—",
      monitorizacao: "Hepatotoxicidade",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "—"
    },
    {
      droga: "AAS e AINEs",
      linha: "ci",
      dose: "Contraindicados",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Risco de sangramento",
      ajustes: "Evitar também IM"
    }
  ],
  destino: {
    agora: [
      "Classificar e tratar conforme grupo",
      "Notificar o caso"
    ],
    reavaliar: [
      "A: retorno no dia da defervescência ou se alarme",
      "B: reavaliar com hemograma; retorno diário até 48 h sem febre",
      "C: após cada fase de expansão",
      "D: a cada 15–30 min"
    ],
    alta: [
      "A e B (Ht normal): domicílio com hidratação, cartão de acompanhamento e sinais de alarme",
      "C/D: sem febre por 24–48 h, hemodinâmica estável, Ht normal, plaquetas em ascensão (> 50 mil)"
    ],
    observacao: [
      "B: observar na unidade até resultado do hemograma"
    ],
    internacao: [
      "C: leito de observação ou internação (mín. 48 h)",
      "D: UTI"
    ],
    transferencia: [
      "Grupo C ou D na UBS: iniciar hidratação IV e transferir via regulação/SAMU"
    ]
  },
  prescricao: {
    ambulatorial: "GRUPO A (e grupo B com hemograma normal) — ADULTO (peso: ___ kg)\nHIDRATAÇÃO ORAL\n1. Sais para reidratação oral --------------------- ___ envelopes\n   Total de líquidos por dia: 60 mL/kg (70 kg ≈ 4,2 L). Tomar 1/3 em soro de reidratação oral (1 envelope em 1 L de água filtrada/fervida) e 2/3 em água, suco, chá, água de coco. Beber mais nas primeiras 4–6 h. Manter até 48 h após a febre passar.\n\nUSO ORAL\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor.\n   OU\n2. Paracetamol 500 mg ----------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se febre ou dor (máx 3 g por dia).\n\nCRIANÇA (por kg)\n- Líquidos por dia: até 10 kg 130 mL/kg; 10–20 kg 100 mL/kg; > 20 kg 80 mL/kg (1/3 em SRO).\n- Dipirona 500 mg/mL gotas (1 gota = 25 mg): 10 mg/kg/dose até de 6/6 h.\n- Paracetamol 200 mg/mL gotas: 10 mg/kg/dose até de 6/6 h (conferir na bula a equivalência em gotas).\n\nNÃO USAR: AAS, anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida), corticoide, medicação intramuscular.\n\nENTREGAR: cartão de acompanhamento da dengue. NOTIFICAR o caso (ficha SINAN).",
    hospitalar: "GRUPO C (sinal de alarme) — ADULTO OU CRIANÇA (peso: ___ kg) — iniciar na unidade e transferir/observar\n1. Coletar hemograma (Ht basal) antes; não atrasar a hidratação.\n2. SF 0,9% 10 mL/kg IV na 1ª hora (70 kg = 700 mL). Reavaliar clínica e diurese; repetir até 3 vezes.\n3. Melhora: manutenção com SF 0,9% 25 mL/kg em 6 h; se mantiver melhora, 25 mL/kg em 8 h.\n4. Sem melhora após 3 fases ou piora: conduzir como grupo D.\n5. Dipirona 1 g IV de 6/6 h se dor ou febre (criança 10 mg/kg/dose). Metoclopramida 10 mg IV lento de 8/8 h se vômitos (adulto).\n6. Controles: sinais vitais e PA (deitado e em pé) de 1/1 h; diurese (alvo ≥ 1 mL/kg/h); Ht em 2 h após cada etapa.\n\nGRUPO D (choque)\n1. SF 0,9% 20 mL/kg IV em até 20 min (70 kg = 1.400 mL); reavaliar a cada 15–30 min; repetir até 3 vezes.\n2. Melhora: seguir como grupo C (fase de manutenção).\n3. Ht em ascensão após 3 expansões: albumina 0,5–1 g/kg (ou coloide) e UTI. Ht em queda com instabilidade: investigar sangramento e transfundir concentrado de hemácias.\n4. Monitorização contínua; vaga em UTI pela regulação."
  },
  orientacoesRetorno: [
    "Beber muito líquido mesmo sem sede; urina clara e frequente é sinal de boa hidratação",
    "Repouso; usar só dipirona ou paracetamol; nada de AAS, anti-inflamatórios ou injeções",
    "Voltar imediatamente se: dor forte e contínua na barriga, vômitos repetidos, tontura ou desmaio ao levantar, sangramento de gengiva ou nariz, manchas roxas, falta de ar, sonolência ou irritabilidade (criança), urina em pouca quantidade",
    "O período mais perigoso é quando a febre baixa (3º ao 7º dia): continuar se hidratando e atento aos sinais",
    "Grupo A: retornar para reavaliação no dia em que a febre passar (ou até o 5º dia). Grupo B: retorno diário até 48 h sem febre",
    "Levar sempre o cartão de acompanhamento da dengue; usar repelente e eliminar água parada em casa"
  ],
  tabelas: [
    {
      titulo: "Hidratação oral (grupos A e B)",
      colunas: ["Paciente", "Volume total em 24 h", "Como dar"],
      linhas: [
        ["Adulto", "60 mL/kg/dia", "1/3 SRO + 2/3 outros líquidos; mais nas primeiras 4–6 h"],
        ["Criança até 10 kg", "130 mL/kg/dia", "1/3 SRO + 2/3 outros líquidos"],
        ["Criança 10–20 kg", "100 mL/kg/dia", "1/3 SRO + 2/3 outros líquidos"],
        ["Criança > 20 kg", "80 mL/kg/dia", "1/3 SRO + 2/3 outros líquidos"]
      ],
      nota: "Ministério da Saúde 2024. Manter até 24–48 h após a febre ceder."
    },
    {
      titulo: "Hidratação venosa (grupos C e D)",
      colunas: ["Grupo", "Expansão", "Reavaliação", "Manutenção"],
      linhas: [
        ["C", "SF 0,9% 10 mL/kg na 1ª hora (até 3×)", "Clínica e diurese após cada etapa; Ht em 2 h", "25 mL/kg em 6 h, depois 25 mL/kg em 8 h"],
        ["D", "SF 0,9% 20 mL/kg em até 20 min (até 3×)", "A cada 15–30 min; Ht em 2 h", "Melhorou → seguir como C"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "Ministério da Saúde — Guia de Vigilância em Saúde (6ª ed., 2023): dengue, notificação",
    "OPAS — Diretrizes para diagnóstico e tratamento das arboviroses nas Américas (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
