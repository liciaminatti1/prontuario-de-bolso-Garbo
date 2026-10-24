// Síndrome neuroléptica maligna
registrarFicha({
  id: "sindrome-neuroleptica-maligna",
  especialidade: "saude-mental",
  caminho: "ps",
  publico: "adulto",
  titulo: "Síndrome neuroléptica maligna",
  resumo: "Reação rara e potencialmente fatal a bloqueadores dopaminérgicos (antipsicóticos, metoclopramida, prometazina) ou à retirada abrupta de levodopa: hipertermia, rigidez em cano de chumbo, alteração mental, disautonomia e CK elevada, instalando-se em dias.",
  palavrasChave: "sindrome neuroleptica maligna snm haloperidol antipsicotico risperidona olanzapina clorpromazina metoclopramida levodopa rigidez hipertermia ck rabdomiolise bromocriptina dantroleno",
  critico: {
    tempo: "Suspender o antipsicótico",
    texto: "Suspender todo bloqueador dopaminérgico (inclusive metoclopramida e prometazina) e reiniciar dopaminérgico se foi retirado. Resfriamento, hidratação e benzodiazepínico; casos moderados/graves em UTI."
  },
  alarmes: [
    "Temperatura > 40 °C",
    "Rigidez generalizada com CK muito elevada, mioglobinúria, oligúria",
    "Rebaixamento de consciência, disfagia, aspiração",
    "Instabilidade autonômica: PA lábil, taquicardia, arritmia",
    "Insuficiência respiratória (rigidez torácica)",
    "CIVD, hipercalemia"
  ],
  condutaInicial: [
    "Suspender antipsicóticos e antieméticos antidopaminérgicos; reiniciar levodopa se retirada recente",
    "Monitor, acesso, temperatura contínua",
    "Cristaloide IV generoso para rabdomiólise (alvo de diurese 2–3 mL/kg/h se CK alta)",
    "Resfriamento externo ativo; antitérmico tem pouco efeito",
    "Benzodiazepínico: diazepam 5–10 mg IV a cada 6–8 h (ou lorazepam VO 1–2 mg) — 1ª linha em casos leves e catatonia",
    "Moderado/grave: bromocriptina e/ou dantroleno (ver tratamento), UTI, profilaxia de TEV",
    "Corrigir eletrólitos; avaliar via aérea e deglutição"
  ],
  fataisExcluir: [
    "Síndrome serotoninérgica (clônus, hiper-reflexia, início em horas)",
    "Meningite/encefalite, sepse",
    "Hipertermia por calor (golpe de calor)",
    "Catatonia maligna (sem antipsicótico; pode coexistir)",
    "Intoxicação anticolinérgica ou por estimulantes",
    "Tireotoxicose, feocromocitoma, abstinência alcoólica"
  ],
  proximaDecisao: "Melhora em geral em 7–14 dias (mais com antipsicótico de depósito). Refratária ou catatonia → eletroconvulsoterapia (psiquiatria). Reintrodução de antipsicótico só ≥ 2 semanas após a resolução, com antipsicótico de baixa potência, dose baixa, titulação lenta e monitorização de CK e temperatura.",
  clinica: {
    anamnese: [
      "Antipsicótico novo, aumento rápido de dose, via IM/depósito, associação de antipsicóticos",
      "Metoclopramida, prometazina, droperidol; retirada de levodopa/amantadina (Parkinson)",
      "Fatores: desidratação, agitação, contenção física, calor, lítio, SNM prévia",
      "Evolução em 1–3 dias (geralmente nas primeiras 2 semanas de uso)"
    ],
    exameFisico: [
      "Temperatura, PA, FC, FR, sudorese, sialorreia",
      "Rigidez em cano de chumbo, tremor, bradicinesia, distonia, disfagia, mutismo",
      "Reflexos (normais ou reduzidos — clônus fala a favor de síndrome serotoninérgica)",
      "Nível de consciência (delirium a coma)"
    ],
    diferenciais: [
      { dx: "Síndrome serotoninérgica", pista: "Serotoninérgico, início em horas, clônus, hiper-reflexia, diarreia" },
      { dx: "Meningite / encefalite", pista: "Rigidez de nuca, líquor alterado — fazer líquor se dúvida" },
      { dx: "Catatonia maligna", pista: "Sintomas catatônicos prévios ao antipsicótico" },
      { dx: "Síndrome anticolinérgica", pista: "Pele seca, sem rigidez importante, CK normal" },
      { dx: "Golpe de calor", pista: "Exposição ao calor/esforço, pele quente" }
    ],
    gravidade: [
      "Critérios (consenso internacional — Gurrera 2011): exposição a antagonista dopaminérgico (ou retirada de agonista) nas últimas 72 h; hipertermia > 38 °C em pelo menos 2 medidas; rigidez; alteração do nível de consciência; CK elevada (≥ 4× o limite); instabilidade autonômica; ausência de outra causa",
      "Leve: rigidez, febre < 38,5 °C, sem instabilidade · Moderada: febre 38,5–40 °C, CK alta, taquicardia · Grave: > 40 °C, rebaixamento, instabilidade, insuficiência de órgão"
    ]
  },
  exames: [
    {
      nome: "Músculo e rim",
      pedido: "CK total (repetir a cada 12–24 h), ureia, creatinina, sódio, potássio, cálcio, fósforo, magnésio, urina tipo 1 (heme positivo sem hemácias = mioglobinúria).",
      porQue: "Rabdomiólise e lesão renal.",
      esperar: "CK muito elevada (milhares).",
      interpretacao: "CK > 5.000 U/L: hidratação vigorosa; hipercalemia: tratar e evitar succinilcolina.",
      limitacoes: "CK pode ser normal no início."
    },
    {
      nome: "Gerais e diferenciais",
      pedido: "Hemograma, PCR, TGO, TGP, gasometria venosa com lactato, coagulograma, fibrinogênio, TSH, hemoculturas; TC de crânio e líquor se dúvida com infecção do SNC.",
      porQue: "Leucocitose é comum; excluir infecção e CIVD.",
      esperar: "Leucocitose, acidose metabólica, ferro sérico baixo (marcador citado).",
      interpretacao: "Líquor normal favorece SNM.",
      limitacoes: "—"
    },
    {
      nome: "ECG",
      pedido: "ECG com QTc.",
      porQue: "Arritmias, hipercalemia.",
      esperar: "Taquicardia sinusal.",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Diazepam 5 mg/mL (ou lorazepam VO)",
      linha: "l1",
      dose: "Diazepam 5–10 mg IV lento; lorazepam 1–2 mg VO",
      via: "IV / VO",
      intervalo: "6/6–8/8 h",
      duracao: "Até melhora",
      monitorizacao: "FR, sedação",
      contraindicacoes: "—",
      ajustes: "Útil em agitação e componente catatônico"
    },
    {
      droga: "Bromocriptina",
      linha: "l1",
      dose: "2,5 mg, aumentando 2,5 mg por dose conforme resposta (máx. 45 mg/dia)",
      via: "VO ou SNG",
      intervalo: "8/8 h",
      duracao: "Manter ≥ 10 dias após resolução e retirar lentamente",
      monitorizacao: "Hipotensão, vômitos, piora de psicose",
      contraindicacoes: "Psicose ativa grave (relativa), hipotensão",
      ajustes: "Moderada/grave. Alternativa: amantadina 100 mg VO 12/12 h (até 200 mg 12/12 h)"
    },
    {
      droga: "Dantroleno",
      linha: "adj",
      dose: "1–2,5 mg/kg IV; repetir 1 mg/kg a cada 6 h se necessário (máx. 10 mg/kg/dia)",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Até controle da rigidez/hipertermia, depois VO ou suspender",
      monitorizacao: "Função hepática, fraqueza respiratória",
      contraindicacoes: "Hepatopatia",
      ajustes: "Formas graves com rigidez e hipertermia extremas. Disponível em hospitais com protocolo de hipertermia maligna"
    },
    {
      droga: "Cristaloide e resfriamento",
      linha: "l1",
      dose: "SF 0,9% ou Ringer lactato para diurese 2–3 mL/kg/h se CK alta",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até CK em queda",
      monitorizacao: "Diurese, K, creatinina, congestão",
      contraindicacoes: "—",
      ajustes: "Mantas térmicas/gelo; antitérmico pouco eficaz"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "adj",
      dose: "40 mg",
      via: "SC",
      intervalo: "1×/dia",
      duracao: "Enquanto imobilizado",
      monitorizacao: "Plaquetas",
      contraindicacoes: "Sangramento, CIVD com plaquetopenia",
      ajustes: "TFG < 30: 20 mg/dia"
    },
    {
      droga: "Antipsicóticos, metoclopramida, prometazina",
      linha: "ci",
      dose: "Suspender",
      via: "—",
      intervalo: "—",
      duracao: "≥ 2 semanas após resolução",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Agitação: usar benzodiazepínico. Náusea: ondansetrona"
    }
  ],
  destino: {
    agora: ["Suspender antidopaminérgicos, hidratação, resfriamento, BZD"],
    reavaliar: ["Temperatura de 1/1 h, CK e creatinina a cada 12–24 h, deglutição"],
    alta: ["Afebril, sem rigidez, CK normalizando, plano psiquiátrico definido"],
    observacao: ["—"],
    internacao: ["Todos os casos; UTI se moderada/grave"],
    transferencia: ["Sem UTI ou dantroleno/bromocriptina: transferir após início de hidratação e BZD"]
  },
  prescricao: {
    hospitalar: "SÍNDROME NEUROLÉPTICA MALIGNA (adulto, peso: ___ kg)\n1. Dieta zero se disfagia/rebaixamento (avaliar deglutição); cabeceira 30°.\n2. SUSPENDER: haloperidol, risperidona, olanzapina, clorpromazina, metoclopramida, prometazina e qualquer antidopaminérgico. Se Parkinson com levodopa suspensa: reiniciar dose prévia.\n3. Monitor, SpO₂, temperatura contínua (ou de 1/1 h).\n4. SF 0,9% 1.000 mL IV em 1 h; depois 200–300 mL/h para diurese 2–3 mL/kg/h (ajustar por congestão).\n5. Diazepam 5 mg/mL — 2 mL (10 mg) IV lento de 8/8 h e SN agitação.\n6. Bromocriptina 2,5 mg VO/SNG de 8/8 h; aumentar 2,5 mg por dose a cada 24 h conforme resposta (máx. 45 mg/dia).\n7. Se T > 40 °C ou rigidez extrema: dantroleno 1–2,5 mg/kg IV (___ mg), repetir 1 mg/kg de 6/6 h (máx. 10 mg/kg/dia) — UTI.\n8. Resfriamento externo: gelo em axilas e virilhas, manta térmica, ambiente frio.\n9. Enoxaparina 40 mg SC 1×/dia.\n10. Ondansetrona 4 mg IV de 8/8 h SN náusea (não usar metoclopramida).\n11. Exames: CK, eletrólitos, creatinina de 12/12 h; gasometria, coagulograma.\n12. Diurese horária; comunicar diurese < 0,5 mL/kg/h, K > 5,5, T > 40 °C, rebaixamento.",
    ambulatorial: "ALTA\n1. Relatório: Síndrome neuroléptica maligna em __/__/____ associada a __________. Reintroduzir antipsicótico somente com psiquiatra.\n2. Não usar metoclopramida ou prometazina; para enjoo, preferir ondansetrona."
  },
  orientacoesRetorno: [
    "Levar o relatório e avisar a todo médico sobre a reação",
    "Não usar remédios para enjoo como metoclopramida e prometazina",
    "Antipsicótico só deve ser reiniciado pelo psiquiatra, em dose baixa e com acompanhamento",
    "Voltar imediatamente se febre com rigidez, confusão ou urina escura",
    "Consulta com psiquiatra/CAPS em até 1 semana"
  ],
  fontes: [
    "Gurrera RJ et al. An international consensus study of neuroleptic malignant syndrome diagnostic criteria using the Delphi method (J Clin Psychiatry, 2011)",
    "American Psychiatric Association — DSM-5-TR (2022)",
    "Strawn JR, Keck PE, Caroff SN. Neuroleptic malignant syndrome (Am J Psychiatry, 2007)",
    "Goldfrank's Toxicologic Emergencies, 11ª ed. (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
