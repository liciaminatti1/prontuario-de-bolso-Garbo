// Deterioração clínica: reconhecimento precoce (NEWS2) e abordagem ABCDE
registrarFicha({
  id: "deterioracao-clinica",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Deterioração clínica: NEWS2, time de resposta rápida e ABCDE",
  resumo: "Reconhecer cedo o paciente que está piorando (sala de observação, enfermaria, UPA, UBS), pontuar o NEWS2, acionar o time de resposta rápida e fazer a avaliação ABCDE, tratando cada problema na ordem em que é encontrado.",
  palavrasChave: "deterioracao clinica news2 news mews pews escore de alerta precoce time de resposta rapida codigo amarelo abcde paciente grave piora sinais vitais qsofa sbar",
  critico: {
    tempo: "NEWS2 ≥ 7: médico à beira do leito",
    texto: "NEWS2 ≥ 7 (ou 3 em um único parâmetro com preocupação) = resposta de emergência: médico já, time de resposta rápida, monitor contínuo e ABCDE. Preocupação da enfermagem ou da família também aciona."
  },
  alarmes: [
    "NEWS2 ≥ 5 (urgente) ou ≥ 7 (emergência)",
    "Pontuação 3 em um único parâmetro",
    "Nova confusão mental (pontua 3 no NEWS2)",
    "FR ≤ 8 ou ≥ 25; SpO₂ ≤ 91% (escala 1); PAS ≤ 90; FC ≤ 40 ou ≥ 131",
    "Diurese < 0,5 mL/kg/h, lactato ≥ 2 mmol/L, pele mosqueada, enchimento capilar > 3 s",
    "Preocupação da equipe ou da família de que \"algo não está bem\""
  ],
  condutaInicial: [
    "Medir e registrar todos os sinais vitais e calcular o NEWS2",
    "Acionar resposta conforme pontuação (tabela); escalar sem hesitar",
    "Abordagem ABCDE: avaliar e tratar cada etapa antes de seguir; reavaliar após cada intervenção",
    "Monitor, O₂ conforme alvo, acesso venoso, glicemia capilar, gasometria com lactato",
    "Comunicar em formato SBAR e registrar decisão (plano, limites de suporte, frequência de reavaliação)"
  ],
  fataisExcluir: [
    "Obstrução de via aérea, anafilaxia",
    "Insuficiência respiratória, pneumotórax hipertensivo, TEP, broncoespasmo grave",
    "Choque (séptico, hemorrágico, cardiogênico, obstrutivo)",
    "Arritmia, síndrome coronariana aguda",
    "Hipoglicemia, AVC, rebaixamento por drogas (opioide, sedativo)",
    "Hipercalemia, sangramento oculto (digestivo, pós-procedimento)"
  ],
  proximaDecisao: "Após o ABCDE: estável e com causa tratada → manter monitorização na frequência do NEWS2. Sem melhora em 30–60 min ou NEWS2 persistente ≥ 7 → UTI/sala vermelha. Paciente em cuidado paliativo: alinhar com plano prévio e família, sem abandonar o conforto.",
  clinica: {
    anamnese: [
      "Motivo da internação/atendimento, procedimentos e medicações recentes (opioide, sedativo, anti-hipertensivo, insulina)",
      "Balanço hídrico, diurese, dieta, sangramentos",
      "Tendência dos sinais vitais nas últimas horas (piora gradual é a regra)",
      "Diretivas antecipadas e limites de suporte combinados"
    ],
    exameFisico: [
      "A — via aérea: fala? ruídos (estridor, roncos, gargarejo)? corpo estranho, edema?",
      "B — respiração: FR, SpO₂, esforço, ausculta, simetria, traqueia, cianose",
      "C — circulação: FC, PA, pulso, enchimento capilar, pele, diurese, sangramentos, ECG",
      "D — neurológico: AVDI/Glasgow, pupilas, glicemia, déficit focal, dor",
      "E — exposição: temperatura, pele (petéquias, rash, úlceras), abdome, drenos, cateteres, panturrilhas"
    ],
    diferenciais: [
      { dx: "Sepse", pista: "Febre ou hipotermia, foco infeccioso, lactato; ver ficha sepse" },
      { dx: "Choque hipovolêmico/hemorrágico", pista: "Taquicardia, pós-operatório, melena; ver ficha choque" },
      { dx: "Depressão respiratória por drogas", pista: "Miose, bradipneia após opioide/sedativo" },
      { dx: "Delirium", pista: "Confusão flutuante; ver ficha delirium" }
    ],
    gravidade: [
      "NEWS2 0: baixo · 1–4: baixo · 3 em um parâmetro: baixo-médio · 5–6: médio · ≥ 7: alto",
      "qSOFA (FR ≥ 22, PAS ≤ 100, alteração mental) ≥ 2 sugere maior risco em infecção, mas é menos sensível que o NEWS2 para triagem",
      "MEWS: escore mais antigo com FR, FC, PAS, temperatura e consciência; útil se for o padrão local, mas NEWS2 é o mais validado",
      "Criança: usar escore pediátrico (PEWS) do serviço e sinais vitais por idade — ver fichas crianca-grave e sinais-vitais-pediatricos"
    ]
  },
  exames: [
    {
      nome: "Exames iniciais na deterioração",
      pedido: "Glicemia capilar. Gasometria arterial (ou venosa) com lactato. Hemograma, sódio, potássio, ureia, creatinina, PCR. Conforme quadro: troponina, TP/TTPa, hemoculturas (2 pares), urina tipo 1 e urocultura, RX de tórax no leito. ECG de 12 derivações.",
      porQue: "Identificar causa e gravidade sem atrasar o tratamento.",
      esperar: "—",
      interpretacao: "Lactato ≥ 2 mmol/L = hipoperfusão (repetir em 2 h). K alto + bradicardia → tratar hipercalemia (ver ficha hipercalemia).",
      limitacoes: "Não atrasar O₂, volume, antibiótico ou glicose aguardando exames."
    }
  ],
  tratamento: [
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Alvo SpO₂ 94–98% (hipercápnico/DPOC: 88–92%)",
      via: "Cateter nasal, máscara com reservatório, VNI ou IOT conforme gravidade",
      intervalo: "Contínuo",
      duracao: "Conforme alvo",
      monitorizacao: "SpO₂, FR, gasometria",
      contraindicacoes: "—",
      ajustes: "Ver ficha oxigenoterapia. Escala 2 do NEWS2 só para hipercápnicos com alvo prescrito"
    },
    {
      droga: "Cristaloide (hipoperfusão)",
      linha: "l1",
      dose: "Bolus de 500 mL (250 mL se cardiopata/DRC) em 15 min; reavaliar após cada bolus (sepse: até 30 mL/kg nas primeiras 3 h)",
      via: "IV",
      intervalo: "Repetir conforme resposta",
      duracao: "—",
      monitorizacao: "PA, FC, enchimento capilar, diurese, congestão pulmonar",
      contraindicacoes: "Congestão/edema pulmonar",
      ajustes: "Ringer lactato ou SF 0,9%. Choque refratário → noradrenalina (ver ficha choque)"
    },
    {
      droga: "Glicose (hipoglicemia)",
      linha: "l1",
      dose: "Glicose 50% 40 mL",
      via: "IV",
      intervalo: "Repetir conforme glicemia em 15 min",
      duracao: "—",
      monitorizacao: "Glicemia capilar",
      contraindicacoes: "—",
      ajustes: "Ver ficha hipoglicemia"
    },
    {
      droga: "Naloxona (depressão respiratória por opioide)",
      linha: "l1",
      dose: "0,04–0,1 mg, repetir a cada 2–3 min até FR ≥ 10–12",
      via: "IV",
      intervalo: "Conforme resposta",
      duracao: "Efeito curto; vigiar recorrência",
      monitorizacao: "FR, SpO₂, dor",
      contraindicacoes: "—",
      ajustes: "Ampola 0,4 mg/mL: diluir 1 mL em 9 mL de SF (0,04 mg/mL). Titular para não reverter a analgesia por completo"
    }
  ],
  destino: {
    agora: [
      "NEWS2 ≥ 7: médico e time de resposta rápida imediatamente; monitor contínuo; considerar sala vermelha/UTI",
      "NEWS2 5–6 ou 3 em um parâmetro: avaliação médica urgente (em até ~30 min) e monitorização ao menos de 1/1 h"
    ],
    reavaliar: [
      "Reaplicar NEWS2 após cada intervenção e na frequência da tabela",
      "Registrar tendência (curva) dos sinais vitais"
    ],
    alta: ["—"],
    observacao: ["NEWS2 1–4: enfermagem avalia, sinais vitais de 4/4–6/6 h e decide se chama o médico"],
    internacao: ["NEWS2 persistentemente ≥ 5 apesar do tratamento inicial: leito com maior nível de cuidado"],
    transferencia: ["UBS/UPA sem suporte: estabilizar (ABCDE) e acionar SAMU 192 / regulação"]
  },
  prescricao: {
    hospitalar: "DETERIORAÇÃO CLÍNICA — MEDIDAS IMEDIATAS (adulto, enquanto se define a causa)\n1. Acionar time de resposta rápida / médico plantonista; levar carrinho de emergência e monitor ao leito.\n2. Monitor cardíaco, oxímetro e PA não invasiva de 15/15 min.\n3. O₂ por cateter nasal 2–4 L/min ou máscara com reservatório 10–15 L/min para SpO₂ 94–98% (DPOC/hipercápnico: 88–92%).\n4. Acesso venoso calibroso (2 se instável).\n5. Glicemia capilar agora; se < 70 mg/dL: glicose 50% 40 mL IV.\n6. Se PAS < 90 ou sinais de hipoperfusão sem congestão: Ringer lactato 500 mL IV em 15 min; reavaliar e repetir.\n7. Se FR < 10 com miose após opioide: naloxona 0,04 mg (1 mL da diluição 0,4 mg + 9 mL SF) IV a cada 2–3 min até FR ≥ 10–12.\n8. Suspender sedativos/opioides/anti-hipertensivos até reavaliação, conforme o caso.\n9. Coletar: gasometria com lactato, hemograma, eletrólitos, função renal, PCR, troponina e hemoculturas conforme suspeita; ECG.\n10. Reavaliar NEWS2 em 30 min e após cada intervenção; registrar plano e comunicação (SBAR) no prontuário."
  },
  orientacoesRetorno: [
    "Familiar/acompanhante: avise a equipe imediatamente se a pessoa ficar mais confusa, sonolenta, com falta de ar, fria e pálida, ou se \"não parece ela mesma\"",
    "Após alta: voltar imediatamente se falta de ar, desmaio, confusão, febre com tremores, pouca urina, pele manchada ou fria"
  ],
  tabelas: [
    {
      titulo: "NEWS2 — pontuação",
      colunas: ["Parâmetro", "3", "2", "1", "0", "1", "2", "3"],
      linhas: [
        ["FR (irpm)", "≤ 8", "—", "9–11", "12–20", "—", "21–24", "≥ 25"],
        ["SpO₂ escala 1 (%)", "≤ 91", "92–93", "94–95", "≥ 96", "—", "—", "—"],
        ["SpO₂ escala 2 (%) *", "≤ 83", "84–85", "86–87", "88–92 ou ≥ 93 em ar", "93–94 em O₂", "95–96 em O₂", "≥ 97 em O₂"],
        ["Ar ou O₂", "—", "O₂", "—", "Ar ambiente", "—", "—", "—"],
        ["PAS (mmHg)", "≤ 90", "91–100", "101–110", "111–219", "—", "—", "≥ 220"],
        ["FC (bpm)", "≤ 40", "—", "41–50", "51–90", "91–110", "111–130", "≥ 131"],
        ["Consciência", "—", "—", "—", "Alerta", "—", "—", "Confusão nova, V, D ou I"],
        ["Temperatura (°C)", "≤ 35,0", "—", "35,1–36,0", "36,1–38,0", "38,1–39,0", "≥ 39,1", "—"]
      ],
      nota: "* Escala 2 só para insuficiência respiratória hipercápnica com alvo de SpO₂ 88–92% prescrito. Consciência: AVDI (V = responde à voz, D = à dor, I = inconsciente)."
    },
    {
      titulo: "NEWS2 — resposta clínica",
      colunas: ["Pontuação", "Risco", "Frequência de sinais vitais", "Resposta"],
      linhas: [
        ["0", "Baixo", "Mínimo 12/12 h", "Rotina"],
        ["1–4", "Baixo", "Mínimo 4/4–6/6 h", "Enfermagem avalia e decide se aciona médico"],
        ["3 em um parâmetro", "Baixo-médio", "Mínimo 1/1 h", "Avaliação médica urgente"],
        ["5–6", "Médio", "Mínimo 1/1 h", "Avaliação médica urgente; considerar time de resposta rápida"],
        ["≥ 7", "Alto", "Monitorização contínua", "Emergência: time de resposta rápida/cuidados críticos imediatamente"]
      ]
    },
    {
      titulo: "Comunicação SBAR",
      colunas: ["Etapa", "Conteúdo"],
      linhas: [
        ["S — Situação", "Quem é, onde está, o que mudou agora e o NEWS2"],
        ["B — Breve histórico", "Diagnóstico, procedimentos, medicações relevantes, limites de suporte"],
        ["A — Avaliação", "ABCDE e o que você acha que está acontecendo"],
        ["R — Recomendação", "O que precisa (avaliação em X min, UTI, exame) e o que já foi feito"]
      ]
    }
  ],
  fontes: [
    "Royal College of Physicians — National Early Warning Score (NEWS) 2 (2017)",
    "Resuscitation Council UK — The ABCDE approach (2021)",
    "Surviving Sepsis Campaign — International Guidelines (2021): uso de NEWS/MEWS em vez de qSOFA como triagem isolada",
    "Ministério da Saúde / ANVISA — Programa Nacional de Segurança do Paciente (2013)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
