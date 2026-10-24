// Hipotermia acidental
registrarFicha({
  id: "hipotermia",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Hipotermia acidental",
  resumo: "Temperatura central < 35 °C por exposição ao frio, imersão, intoxicação, idade extrema, sepse ou doença endócrina. Manuseio gentil, reaquecimento conforme o estágio e, em parada, RCP prolongada: ninguém está morto até estar quente e morto.",
  palavrasChave: "hipotermia frio temperatura baixa reaquecimento afogamento imersao morador de rua etilista idoso recem nascido onda j osborn ecmo swiss staging",
  critico: {
    tempo: "Manuseio gentil, reaquecer",
    texto: "Retirar roupas molhadas, isolar e reaquecer. Movimentos bruscos podem desencadear fibrilação ventricular. Parada em hipotermia: RCP contínua e reaquecimento (ECMO se disponível); adrenalina suspensa < 30 °C."
  },
  alarmes: [
    "Temperatura < 32 °C (sem tremor, consciência rebaixada)",
    "Temperatura < 28 °C (risco alto de FV e parada)",
    "PAS < 90 mmHg, arritmia ventricular",
    "Parada cardiorrespiratória",
    "Potássio > 10–12 mmol/L (prognóstico muito ruim, sugere asfixia/morte prévia)",
    "Hipotermia sem exposição evidente (sepse, hipoglicemia, hipotireoidismo, insuficiência adrenal, intoxicação)"
  ],
  condutaInicial: [
    "Checar pulso e respiração por até 60 s (bradicardia e bradipneia extremas são possíveis)",
    "Manuseio gentil, posição horizontal; retirar roupas molhadas (cortar), secar e isolar com cobertores e manta aluminizada",
    "Medir temperatura central (esofágica, retal ou vesical; timpânica só se paciente consciente)",
    "Monitor cardíaco, glicemia capilar, acesso venoso",
    "Leve (32–35 °C): reaquecimento passivo + ativo externo (bebidas quentes e doces se acordado, ambiente aquecido)",
    "Moderada (28–32 °C): ativo externo (manta térmica de ar forçado, bolsas quentes em tronco/axilas) + cristaloide aquecido 38–42 °C",
    "Grave (< 28 °C) ou instável: ativo interno (fluidos aquecidos, lavagem pleural/peritoneal) e ECMO/circulação extracorpórea se disponível",
    "IOT quando indicada não deve ser adiada (risco de FV é baixo com técnica cuidadosa)"
  ],
  fataisExcluir: [
    "Fibrilação ventricular / PCR",
    "Hipoglicemia",
    "Sepse",
    "Intoxicação (álcool, sedativos), TCE",
    "Hipotireoidismo (coma mixedematoso), insuficiência adrenal",
    "Trauma oculto e afogamento associados"
  ],
  proximaDecisao: "Reaquecer cerca de 1–2 °C/h; alvo > 35 °C. Hipotensão no reaquecimento (vasodilatação) → volume aquecido. Sem resposta ao reaquecimento ativo externo → buscar causa secundária (sepse, endócrina). PCR com hipotermia grave → transporte com RCP contínua para centro com ECMO.",
  clinica: {
    anamnese: [
      "Exposição (tempo, ambiente, imersão), álcool, drogas, medicamentos (sedativos, antipsicóticos)",
      "Idoso, desnutrido, morador de rua, recém-nascido, imobilizado",
      "Doenças: hipotireoidismo, DM, sepse, AVC, queimadura extensa",
      "Trauma associado"
    ],
    exameFisico: [
      "Temperatura central, FC, PA, FR, SpO₂ (oximetria pouco confiável em vasoconstrição)",
      "Nível de consciência, tremor (cessa abaixo de ~32 °C), pupilas (podem estar fixas e dilatadas em hipotermia grave)",
      "Lesões por frio (geladura), trauma",
      "ECG: bradicardia, onda J de Osborn, prolongamento de intervalos, FA"
    ],
    diferenciais: [
      { dx: "Sepse", pista: "Foco infeccioso, lactato alto, ausência de exposição" },
      { dx: "Hipotireoidismo grave", pista: "Mixedema, bradicardia, hiponatremia, TSH alto" },
      { dx: "Hipoglicemia", pista: "Glicemia capilar" },
      { dx: "Intoxicação", pista: "Álcool, sedativos, opioides" }
    ],
    gravidade: [
      "Estadiamento suíço (clínico, quando não há termômetro central): I consciente, com tremor (~32–35 °C) · II consciência reduzida, sem tremor (~28–32 °C) · III inconsciente, sinais vitais presentes (< 28 °C) · IV sem sinais vitais",
      "Leve 32–35 °C · Moderada 28–32 °C · Grave < 28 °C"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Glicemia, sódio, potássio, cálcio, magnésio, ureia, creatinina, hemograma, coagulograma, gasometria (não corrigir pela temperatura), lactato, CK, lipase, TSH, etanol, pesquisa toxicológica; cortisol se suspeita.",
      porQue: "Causas secundárias e complicações.",
      esperar: "Hiperglicemia ou hipoglicemia, hemoconcentração, coagulopatia (testes feitos a 37 °C subestimam).",
      interpretacao: "K > 12 mmol/L em PCR: prognóstico muito ruim (critério para não ECMO segundo ERC). Repetir K durante o reaquecimento (desvio).",
      limitacoes: "—"
    },
    {
      nome: "ECG e imagem",
      pedido: "ECG de 12 derivações; RX de tórax; imagem conforme trauma.",
      porQue: "Arritmias, aspiração, edema pulmonar.",
      esperar: "Bradicardia sinusal, onda J (Osborn), FA lenta.",
      interpretacao: "Arritmias atriais costumam reverter com reaquecimento.",
      limitacoes: "Tremor gera artefato."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide aquecido (SF 0,9% a 38–42 °C)",
      linha: "l1",
      dose: "Adulto: 500–1.000 mL em bolus conforme PA. Criança: 20 mL/kg (aquecido)",
      via: "IV ou IO",
      intervalo: "Repetir conforme resposta",
      duracao: "Durante o reaquecimento",
      monitorizacao: "PA, congestão, temperatura",
      contraindicacoes: "—",
      ajustes: "Soro aquecido sozinho aquece pouco; previne perda adicional. Evitar Ringer lactato em hipotermia grave (metabolismo hepático reduzido) — preferir SF"
    },
    {
      droga: "Reaquecimento ativo externo",
      linha: "l1",
      dose: "Manta térmica de ar forçado, bolsas quentes em tronco, axilas e virilha (protegidas), ambiente aquecido",
      via: "—",
      intervalo: "Contínuo",
      duracao: "Até > 35 °C",
      monitorizacao: "Temperatura central a cada 15–30 min, queimaduras",
      contraindicacoes: "—",
      ajustes: "Aquecer tronco antes de extremidades. Oxigênio aquecido e umidificado se IOT"
    },
    {
      droga: "Glicose",
      linha: "adj",
      dose: "Adulto: glicose 50% 50 mL (após tiamina 100 mg IV se etilista/desnutrido). Criança: glicose 10% 2–5 mL/kg",
      via: "IV",
      intervalo: "Se glicemia < 70 mg/dL",
      duracao: "—",
      monitorizacao: "Glicemia de 1/1 h",
      contraindicacoes: "—",
      ajustes: "Insulina é pouco eficaz < 30 °C; evitar correção agressiva de hiperglicemia"
    },
    {
      droga: "Adrenalina e desfibrilação na PCR hipotérmica",
      linha: "adj",
      dose: "< 30 °C: até 3 choques e suspender adrenalina até > 30 °C. 30–35 °C: adrenalina com intervalo dobrado (a cada 6–10 min)",
      via: "IV/IO",
      intervalo: "—",
      duracao: "RCP até reaquecimento ou decisão de equipe",
      monitorizacao: "Temperatura central contínua",
      contraindicacoes: "—",
      ajustes: "Recomendações ERC 2021; a AHA admite seguir o padrão. RCP mecânica facilita transporte prolongado"
    },
    {
      droga: "Hidrocortisona / levotiroxina empíricas",
      linha: "adj",
      dose: "Hidrocortisona 100 mg IV (criança 2 mg/kg, máx. 100 mg) se suspeita de insuficiência adrenal; levotiroxina conforme endocrinologia se mixedema",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Só se suspeita clínica ou falha do reaquecimento"
    }
  ],
  destino: {
    agora: ["Isolar, reaquecer conforme estágio, monitorizar ritmo"],
    reavaliar: ["Temperatura central a cada 15–30 min; K e glicemia de 1/1–2/2 h no reaquecimento"],
    alta: ["Hipotermia leve corrigida, causa esclarecida, ambiente seguro (serviço social se situação de rua)"],
    observacao: ["Leve: até normotermia e causa esclarecida"],
    internacao: ["Moderada ou grave; UTI se < 28 °C, instabilidade ou arritmia"],
    transferencia: ["Grave instável ou PCR: centro com ECMO/circulação extracorpórea, com RCP contínua se necessário"]
  },
  prescricao: {
    hospitalar: "HIPOTERMIA MODERADA (peso: ___ kg; T central: ___ °C)\n1. Dieta zero até T > 35 °C e consciência normal.\n2. Retirar roupas molhadas; secar; manta térmica de ar forçado a 42–43 °C sobre o tronco; cobertores; sala aquecida.\n3. Manuseio gentil, decúbito horizontal; monitor cardíaco contínuo; desfibrilador à disposição.\n4. SF 0,9% aquecido a 40 °C — 1.000 mL IV em 30–60 min (criança 20 mL/kg); repetir conforme PA.\n5. O₂ aquecido e umidificado se SpO₂ baixa ou IOT.\n6. Tiamina 100 mg IV se etilista/desnutrido; glicose 50% 50 mL IV se glicemia < 70 (criança glicose 10% 2–5 mL/kg).\n7. Temperatura central (retal/esofágica/vesical) de 15/15 min; meta de aumento 1–2 °C/h até > 35 °C.\n8. Exames: gasometria, eletrólitos, K de 1/1–2/2 h, glicemia de 1/1 h, CK, coagulograma, TSH.\n9. Sonda vesical de demora para diurese (diurese fria do frio é comum).\n10. Comunicar: arritmia, PAS < 90, T sem subir após 1 h.",
    ambulatorial: "ALTA\n1. Retorno na UBS em até 7 dias.\n2. Encaminhamento ao serviço social/CREAS/Centro POP se pessoa em situação de rua; abrigo para noites frias."
  },
  orientacoesRetorno: [
    "Vestir roupas em camadas, secas, cobrir cabeça, mãos e pés",
    "Evitar álcool no frio: dá falsa sensação de calor e aumenta perda",
    "Idosos e bebês perdem calor rápido: manter a casa aquecida",
    "Procurar atendimento se tremor intenso, confusão, sonolência, pele muito fria e pálida, dedos endurecidos ou escuros"
  ],
  fontes: [
    "European Resuscitation Council — Guidelines 2021: Cardiac arrest in special circumstances (hipotermia acidental)",
    "AHA — Diretrizes de RCP e ACE (2020; atualização 2025): parada em hipotermia",
    "Wilderness Medical Society — Clinical Practice Guidelines for the out-of-hospital evaluation and treatment of accidental hypothermia (2019)",
    "Paal P et al. Accidental hypothermia: 2021 update (Int J Environ Res Public Health, 2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
