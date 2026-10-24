// Golpe de calor (intermação / insolação)
registrarFicha({
  id: "hipertermia-intermacao",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Golpe de calor (intermação, insolação) e exaustão pelo calor",
  resumo: "Golpe de calor: temperatura central em geral > 40 °C com disfunção do SNC (confusão, convulsão, coma) após exposição ao calor (clássico: idosos, ondas de calor) ou esforço (esportistas, militares, trabalhadores). Emergência: resfriar imediatamente.",
  palavrasChave: "golpe de calor intermacao insolacao hipertermia exaustao pelo calor onda de calor calor extremo exercicio resfriamento imersao em agua gelada rabdomiolise heat stroke",
  critico: {
    tempo: "Resfriar: < 39 °C em 30 min",
    texto: "Resfriar primeiro, transportar depois. Imersão em água fria/gelada é o método mais rápido (golpe de calor por esforço). Parar em 38,5–39 °C para não causar hipotermia. Antitérmico não funciona."
  },
  alarmes: [
    "Confusão, comportamento estranho, convulsão, coma com calor",
    "Temperatura central > 40 °C (pode estar menor se resfriamento já iniciado)",
    "Hipotensão, taquicardia persistente",
    "Urina escura, oligúria (rabdomiólise, lesão renal)",
    "Sangramentos (CIVD), icterícia (lesão hepática)",
    "Idoso, criança pequena, gestante, uso de diuréticos, anticolinérgicos, antipsicóticos, estimulantes"
  ],
  condutaInicial: [
    "Medir temperatura central (retal) e glicemia",
    "Iniciar resfriamento imediatamente: imersão do corpo (até o pescoço) em água fria/gelada (1–15 °C) com agitação da água; mexer e massagear",
    "Sem imersão: retirar roupas, borrifar água morna/fria e ventilar (evaporação), gelo/compressas em pescoço, axilas e virilha; lençóis molhados trocados com frequência",
    "Medir temperatura a cada 5 min; interromper resfriamento em 38,5–39 °C",
    "ABC; O₂; acesso e cristaloide frio se hipotensão (cautela em idoso cardiopata)",
    "Convulsão ou tremor que gera calor: benzodiazepínico (diazepam)",
    "Após resfriar: avaliar rabdomiólise, lesão renal, hepática, CIVD, hipoglicemia"
  ],
  fataisExcluir: [
    "Sepse / meningite / encefalite (febre não ambiental)",
    "Intoxicação por estimulantes, síndrome serotoninérgica, anticolinérgica",
    "Síndrome neuroléptica maligna, hipertermia maligna",
    "Tireotoxicose, feocromocitoma",
    "Hiponatremia associada ao exercício (confusão com temperatura normal)"
  ],
  proximaDecisao: "Consciência normalizada após resfriamento e exames sem disfunção de órgão → observar 6–24 h. Disfunção persistente, CK muito alta, LRA, CIVD ou hepatite → UTI. Retorno ao esporte/trabalho gradual após liberação médica (semanas).",
  clinica: {
    anamnese: [
      "Exposição: temperatura, umidade, tempo, esforço, roupas/EPI",
      "Hidratação, uso de álcool, drogas (cocaína, anfetamina, MDMA)",
      "Medicamentos: diuréticos, betabloqueadores, anticolinérgicos, antipsicóticos, antidepressivos, anti-histamínicos",
      "Comorbidades: cardiopatia, DM, obesidade, demência, acamado",
      "Sintomas: cefaleia, náusea, tontura, cãibras, colapso"
    ],
    exameFisico: [
      "Temperatura retal, PA, FC, FR, SpO₂, glicemia",
      "Glasgow, convulsão, ataxia, delirium",
      "Pele: quente, pode estar suada (esforço) ou seca (clássico)",
      "Sinais de sangramento, icterícia, dor muscular"
    ],
    diferenciais: [
      { dx: "Exaustão pelo calor", pista: "T < 40 °C, SNC normal, fraqueza, cefaleia, náusea, síncope" },
      { dx: "Sepse / meningite", pista: "Foco infeccioso, rigidez de nuca, sem exposição relevante" },
      { dx: "Intoxicação simpaticomimética", pista: "Midríase, HAS, uso de drogas" },
      { dx: "Síndrome serotoninérgica / SNM", pista: "Clônus (SS); rigidez em cano de chumbo e antipsicótico (SNM)" },
      { dx: "Hiponatremia do exercício", pista: "Ingestão excessiva de água, T normal, Na baixo" }
    ],
    gravidade: [
      "Cãibras e edema pelo calor: leves",
      "Exaustão pelo calor: T geralmente < 40 °C, sem disfunção do SNC",
      "Golpe de calor: disfunção do SNC + hipertermia (em geral > 40 °C); falência de múltiplos órgãos possível"
    ]
  },
  exames: [
    {
      nome: "Disfunção de órgãos",
      pedido: "Glicemia, sódio, potássio, cálcio, fósforo, ureia, creatinina, CK, TGO, TGP, bilirrubinas, hemograma, TP/INR, TTPa, fibrinogênio, D-dímero, gasometria venosa com lactato, urina tipo 1 (mioglobina).",
      porQue: "Rabdomiólise, LRA, hepatite, CIVD.",
      esperar: "CK e transaminases elevadas (pico em 24–72 h).",
      interpretacao: "Transaminases muito altas e coagulopatia = gravidade. Repetir em 24–48 h.",
      limitacoes: "Alterações podem surgir tardiamente."
    },
    {
      nome: "Outros",
      pedido: "ECG; troponina se dor torácica ou instabilidade; hemoculturas, TC de crânio e líquor se dúvida diagnóstica; toxicológico se suspeita.",
      porQue: "Lesão miocárdica, diferenciais.",
      esperar: "Taquicardia sinusal; alterações inespecíficas de ST.",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Imersão em água fria/gelada",
      linha: "l1",
      dose: "Água 1–15 °C, corpo imerso até o pescoço, cabeça apoiada",
      via: "—",
      intervalo: "Contínuo, temperatura a cada 5 min",
      duracao: "Até 38,5–39 °C",
      monitorizacao: "Temperatura retal, via aérea, ritmo",
      contraindicacoes: "Sem equipe para proteger via aérea",
      ajustes: "Taxa de resfriamento mais alta, padrão para golpe de calor por esforço. Também segura no clássico quando viável"
    },
    {
      droga: "Resfriamento evaporativo e gelo",
      linha: "alt",
      dose: "Borrifar água e ventilar; gelo em pescoço, axilas e virilha; lençóis encharcados com gelo",
      via: "—",
      intervalo: "Contínuo",
      duracao: "Até 38,5–39 °C",
      monitorizacao: "Temperatura a cada 5–10 min",
      contraindicacoes: "—",
      ajustes: "Quando não houver imersão; método usual no golpe de calor clássico em idosos"
    },
    {
      droga: "Cristaloide (SF 0,9% ou Ringer lactato, de preferência frio)",
      linha: "l1",
      dose: "Adulto: 500–1.000 mL em bolus conforme PA e volemia. Criança: 10–20 mL/kg",
      via: "IV",
      intervalo: "Reavaliar após cada bolus",
      duracao: "Manter diurese ≥ 1 mL/kg/h (rabdomiólise 2–3 mL/kg/h no adulto)",
      monitorizacao: "Congestão (idoso, cardiopata), sódio",
      contraindicacoes: "—",
      ajustes: "Golpe clássico em idoso: volume menor e reavaliado"
    },
    {
      droga: "Diazepam (tremor, agitação, convulsão)",
      linha: "adj",
      dose: "Adulto: 5–10 mg IV. Criança: 0,2 mg/kg (máx. 10 mg)",
      via: "IV",
      intervalo: "Repetir em 5–10 min se necessário",
      duracao: "—",
      monitorizacao: "FR, SpO₂",
      contraindicacoes: "—",
      ajustes: "Midazolam IM se sem acesso"
    },
    {
      droga: "Antipiréticos (dipirona, paracetamol) e dantroleno",
      linha: "ci",
      dose: "Não usar para o golpe de calor",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Antipirético não age (não é febre); paracetamol pode piorar lesão hepática. Dantroleno sem benefício comprovado",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Resfriamento imediato até 38,5–39 °C, depois exames"],
    reavaliar: ["Temperatura a cada 5 min no resfriamento e de 1/1 h depois (rebote); CK, creatinina, TGO/TGP e coagulograma em 24–48 h"],
    alta: ["Exaustão pelo calor resolvida; golpe de calor só após observação com SNC normal e exames sem disfunção"],
    observacao: ["Exaustão pelo calor: 4–6 h com hidratação"],
    internacao: ["Todo golpe de calor; UTI se disfunção de órgão, CIVD, coma, convulsão"],
    transferencia: ["Resfriar ANTES de transferir; transporte com resfriamento contínuo"]
  },
  prescricao: {
    hospitalar: "GOLPE DE CALOR (peso: ___ kg)\n1. Dieta zero até consciência normal.\n2. RESFRIAMENTO IMEDIATO: imersão em água fria/gelada (ou retirar roupas, borrifar água e ventilar + gelo em pescoço, axilas e virilha). Interromper em 38,5–39 °C.\n3. Temperatura retal de 5/5 min durante o resfriamento; depois de 1/1 h por 24 h.\n4. Monitor, SpO₂, O₂ para SpO₂ ≥ 94%.\n5. SF 0,9% (frio, se disponível) 1.000 mL IV em 30–60 min (criança 20 mL/kg); reavaliar e repetir; manter diurese ≥ 1 mL/kg/h.\n6. Glicemia capilar agora e de 2/2 h; glicose 50% 50 mL IV se < 70 mg/dL (criança glicose 10% 2–5 mL/kg).\n7. Diazepam 10 mg IV lento SN tremor intenso, agitação ou convulsão (criança 0,2 mg/kg, máx. 10 mg).\n8. Sonda vesical para diurese horária.\n9. Exames: eletrólitos, creatinina, CK, TGO/TGP, coagulograma, fibrinogênio, gasometria, urina tipo 1; repetir em 12–24 h.\n10. NÃO usar dipirona/paracetamol para baixar a temperatura.\n11. Enoxaparina 40 mg SC 1×/dia após excluir coagulopatia.",
    ambulatorial: "EXAUSTÃO PELO CALOR — ALTA\n1. Soro de reidratação oral ----------------------- 5 envelopes\n   Diluir 1 envelope em 1 litro de água; beber aos poucos ao longo do dia.\n2. Repouso em local fresco por 24–48 h; retorno gradual às atividades."
  },
  orientacoesRetorno: [
    "Em dias quentes: beber água antes de sentir sede, roupas leves e claras, evitar sol e esforço das 10 h às 16 h",
    "Idosos e crianças: oferecer água com frequência; nunca deixar crianças ou animais dentro de carro fechado",
    "Não voltar a treinar ou trabalhar no calor até liberação médica; voltar aos poucos",
    "Voltar imediatamente se confusão, desmaio, urina escura ou muito pouca, dor muscular intensa, sangramento ou febre",
    "Consulta na UBS em 1 semana com exames de controle (função renal, CK, fígado)"
  ],
  fontes: [
    "Wilderness Medical Society — Clinical Practice Guidelines for the prevention and treatment of heat illness (2019, atualização 2024)",
    "American College of Sports Medicine — Expert consensus statement on exertional heat illness (2023)",
    "Epstein Y, Yanovich R. Heatstroke (N Engl J Med, 2019)",
    "Ministério da Saúde — Guia de preparação e resposta aos efeitos do calor extremo sobre a saúde (versão vigente)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
