// Dengue
registrarFicha({
  id: "dengue",
  caminho: "ubs",
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
      ajustes: "Crianças: regra de Holliday-Segar + reposição"
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
      dose: "Adulto 500–1.000 mg",
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
      dose: "Adulto 500–750 mg",
      via: "VO",
      intervalo: "Até 6/6h (máx 3 g/dia)",
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
  fontes: [
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "OPAS — Diretrizes para diagnóstico e tratamento das arboviroses (2022)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
