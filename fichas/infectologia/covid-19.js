// COVID-19
registrarFicha({
  id: "covid-19",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "COVID-19",
  resumo: "Síndrome gripal ou SRAG por SARS-CoV-2 confirmada por teste de antígeno ou RT-PCR. Classificar gravidade, indicar nirmatrelvir/ritonavir nos grupos de alto risco elegíveis do SUS (até o 5º dia) e reconhecer sinais de SRAG.",
  palavrasChave: "covid covid-19 coronavirus sars-cov-2 nirmatrelvir ritonavir paxlovid antiviral teste rapido antigeno rt-pcr srag sindrome gripal isolamento dexametasona",
  critico: {
    tempo: "Antiviral até o 5º dia de sintomas",
    texto: "Teste positivo + ≥ 65 anos ou imunossuprimido ≥ 18 anos, sem necessidade de O₂ → nirmatrelvir/ritonavir até o 5º dia (Guia MS 2025), após checar interações e função renal. SpO₂ < 95% ou desconforto respiratório = SRAG: encaminhar."
  },
  alarmes: [
    "Dispneia, desconforto respiratório, pressão persistente no tórax",
    "SpO₂ < 95% em ar ambiente, cianose",
    "Hipotensão, confusão mental, sonolência",
    "Piora após melhora inicial (5º–10º dia)",
    "Criança: batimento de asa de nariz, tiragem, gemência, desidratação, recusa alimentar, sonolência",
    "Criança com febre persistente + exantema, conjuntivite, dor abdominal ou choque (síndrome inflamatória multissistêmica pediátrica — SIM-P)"
  ],
  condutaInicial: [
    "Confirmar com teste rápido de antígeno (até o 7º dia) ou RT-PCR",
    "Medir SpO₂, FR, FC, PA, temperatura; classificar como síndrome gripal (leve) ou SRAG",
    "Identificar grupo de risco e elegibilidade ao nirmatrelvir/ritonavir (início em até 5 dias)",
    "Sintomáticos, hidratação, isolamento e sinais de alerta por escrito",
    "Notificar: síndrome gripal no e-SUS Notifica; SRAG hospitalizada e óbito no SIVEP-Gripe"
  ],
  fataisExcluir: [
    "SRAG / pneumonia viral com hipoxemia",
    "Tromboembolismo pulmonar",
    "Pneumonia bacteriana secundária",
    "Miocardite",
    "SIM-P na criança"
  ],
  proximaDecisao: "Sem hipoxemia e sem sinais de alerta → tratamento domiciliar (antiviral se elegível) e reavaliação em 48–72 h nos grupos de risco. SpO₂ < 95%, dispneia ou sinais de alerta → sala de emergência/internação (oxigênio e dexametasona se precisar de O₂).",
  clinica: {
    anamnese: [
      "Data de início dos sintomas (decide antiviral)",
      "Febre, tosse, dor de garganta, coriza, alteração de olfato/paladar, mialgia, diarreia, dispneia",
      "Idade, imunossupressão (transplante, quimioterapia, HIV com CD4 baixo, corticoide em dose alta, imunobiológicos), doenças crônicas, gestação",
      "Vacinação contra COVID-19",
      "Medicações em uso (interações do ritonavir) e função renal/hepática conhecida"
    ],
    exameFisico: [
      "SpO₂ em ar ambiente, FR, FC, PA, temperatura",
      "Ausculta pulmonar, esforço respiratório",
      "Estado de hidratação e de consciência",
      "Criança: tiragem, gemência, perfusão, exantema, conjuntivite"
    ],
    diferenciais: [
      { dx: "Influenza", pista: "Febre alta súbita, mialgia intensa; teste para influenza; oseltamivir se risco" },
      { dx: "Outros vírus respiratórios (VSR, rinovírus)", pista: "Painel viral; bronquiolite em lactente" },
      { dx: "Pneumonia bacteriana", pista: "Febre alta persistente, escarro purulento, consolidação focal" },
      { dx: "Dengue", pista: "Febre, mialgia, exantema sem sintomas respiratórios importantes" },
      { dx: "TEP", pista: "Dispneia desproporcional, taquicardia, dor pleurítica" }
    ],
    gravidade: [
      "Síndrome gripal: ≥ 2 de febre (mesmo referida), calafrios, dor de garganta, cefaleia, tosse, coriza, distúrbio de olfato ou paladar",
      "SRAG: síndrome gripal + dispneia/desconforto respiratório OU pressão persistente no tórax OU SpO₂ < 95% em ar ambiente OU cianose",
      "Fatores de risco de evolução grave: ≥ 60 anos (maior risco ≥ 65), imunossupressão, gestantes e puérperas, obesidade, diabetes, doenças cardiovasculares, pulmonares, renais e hepáticas crônicas, neoplasias, < 5 anos (sobretudo < 2 anos)"
    ]
  },
  exames: [
    {
      nome: "Teste rápido de antígeno ou RT-PCR para SARS-CoV-2",
      pedido: "Teste rápido de antígeno para SARS-CoV-2 (swab nasofaríngeo/nasal) ou RT-PCR para SARS-CoV-2 (preferir painel com influenza e VSR quando disponível).",
      porQue: "Confirmar o diagnóstico; exigido para dispensar o nirmatrelvir/ritonavir.",
      esperar: "Antígeno: melhor do 1º ao 7º dia de sintomas.",
      interpretacao: "Positivo confirma. Negativo com alta suspeita: repetir em 24–48 h ou RT-PCR.",
      limitacoes: "Autoteste não substitui teste em serviço para fins de notificação e de dispensação do antiviral."
    },
    {
      nome: "Exames antes do antiviral",
      pedido: "Creatinina (com TFG estimada) quando houver DRC, idade avançada ou dúvida sobre função renal. Beta-hCG se mulher em idade fértil com dúvida.",
      porQue: "Ajustar dose do nirmatrelvir e afastar gestação.",
      esperar: "—",
      interpretacao: "TFG 30–59 mL/min: reduzir dose. TFG < 30: não usar (salvo orientação especializada).",
      limitacoes: "Não atrasar o início além do 5º dia aguardando exames em quem tem função renal sabidamente normal."
    },
    {
      nome: "Exames na SRAG / internação",
      pedido: "Hemograma, PCR, ureia, creatinina, sódio, potássio, TGO, TGP, glicemia, gasometria arterial se SpO₂ < 92%, D-dímero, troponina se suspeita de miocardite, RX de tórax. Hemoculturas se suspeita de infecção bacteriana.",
      porQue: "Avaliar gravidade, complicações e diagnósticos alternativos.",
      esperar: "Linfopenia; opacidades bilaterais em vidro fosco.",
      interpretacao: "TC de tórax não é necessária para diagnóstico; usar se dúvida diagnóstica ou suspeita de TEP (angio-TC).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Nirmatrelvir 150 mg + ritonavir 100 mg",
      linha: "l1",
      dose: "Nirmatrelvir 300 mg (2 comp) + ritonavir 100 mg (1 comp), tomados juntos",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "5 dias, iniciando até o 5º dia de sintomas",
      monitorizacao: "Interações, sintomas gastrointestinais, disgeusia",
      contraindicacoes: "TFG < 30 mL/min, insuficiência hepática grave (Child-Pugh C), gestação (conforme MS), uso de fármacos com interação grave: amiodarona, sinvastatina e lovastatina (suspender durante o tratamento e até 5 dias após), rifampicina, carbamazepina, fenitoína, erva-de-são-joão, colchicina com DRC/hepatopatia, midazolam oral, sildenafila para hipertensão pulmonar, rivaroxabana, ticagrelor, alguns antipsicóticos e antiarrítmicos",
      ajustes: "Elegíveis no SUS (Guia MS 2025): ≥ 65 anos e imunocomprometidos ≥ 18 anos, com teste positivo, sintomas leves a moderados, sem O₂, independentemente da vacinação. TFG 30–59 mL/min: nirmatrelvir 150 mg (1 comp) + ritonavir 100 mg 12/12 h por 5 dias. Tacrolimo/ciclosporina: só com orientação da equipe de transplante. Checar interações em ferramenta específica (ex.: Liverpool COVID-19 Drug Interactions)"
    },
    {
      droga: "Dipirona ou paracetamol",
      linha: "adj",
      dose: "Adulto: dipirona 500–1.000 mg ou paracetamol 500–750 mg · Criança: dipirona 10–15 mg/kg/dose; paracetamol 10–15 mg/kg/dose (máx 75 mg/kg/dia e 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h se febre ou dor",
      duracao: "Enquanto houver sintomas",
      monitorizacao: "Febre persistente > 3 dias → reavaliar",
      contraindicacoes: "Hepatopatia grave (paracetamol); alergia a dipirona",
      ajustes: "Evitar AAS em < 19 anos"
    },
    {
      droga: "Dexametasona (somente se precisar de oxigênio)",
      linha: "l1",
      dose: "Adulto: 6 mg · Criança: 0,15 mg/kg (máx 6 mg)",
      via: "IV ou VO",
      intervalo: "1 vez ao dia",
      duracao: "Até 10 dias ou até a alta",
      monitorizacao: "Glicemia",
      contraindicacoes: "Não usar em pacientes sem necessidade de O₂ (piora desfecho)",
      ajustes: "Hospitalar. Associar profilaxia de TEV (enoxaparina 40 mg SC 1×/dia em adulto, se sem contraindicação)"
    },
    {
      droga: "Antibiótico, ivermectina, cloroquina, azitromicina ou corticoide inalatório de rotina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício comprovado na COVID-19",
      ajustes: "Antibiótico só se pneumonia bacteriana associada"
    }
  ],
  destino: {
    agora: [
      "Síndrome gripal sem sinais de alerta: domicílio, antiviral se elegível, isolamento",
      "SRAG: sala de emergência, O₂ para SpO₂ ≥ 92–96% (criança ≥ 92–94%), acesso, exames"
    ],
    reavaliar: [
      "Grupos de risco: contato ou consulta em 48–72 h e no 5º–7º dia (fase de piora)",
      "Criança pequena: reavaliar em 24–48 h se febre persistente"
    ],
    alta: [
      "Sem hipoxemia, sem desconforto, tolerando via oral, com cuidador e orientação de retorno"
    ],
    observacao: [
      "SpO₂ limítrofe (94–95%) ou comorbidade descompensada: observar algumas horas e repetir a SpO₂ com esforço (caminhar)"
    ],
    internacao: [
      "SpO₂ < 95% em ar ambiente ou necessidade de O₂",
      "Desconforto respiratório, hipotensão, confusão, desidratação",
      "UTI: SpO₂ < 90% com O₂ por cateter, esforço respiratório crescente, choque"
    ],
    transferencia: [
      "UBS sem oxigênio ou com SRAG → SAMU 192 / regulação, mantendo O₂ disponível"
    ]
  },
  prescricao: {
    ambulatorial: "COVID-19 — ADULTO ELEGÍVEL (≥ 65 anos ou imunocomprometido ≥ 18 anos, até o 5º dia, sem O₂)\nUSO ORAL — dispensação pelo SUS mediante teste positivo\n1. Nirmatrelvir 150 mg + ritonavir 100 mg (embalagem com 30 comprimidos) --- 1 caixa\n   Tomar 2 comprimidos de nirmatrelvir (rosa) + 1 comprimido de ritonavir (branco), juntos, de 12 em 12 horas, por 5 dias.\n   (TFG 30–59 mL/min: tomar 1 comprimido de nirmatrelvir + 1 de ritonavir de 12 em 12 horas por 5 dias.)\n   Suspender durante o tratamento e por 5 dias após: sinvastatina/lovastatina (e outros conforme checagem de interações).\n2. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor.\n\nCRIANÇA (sintomático)\n1. Dipirona 500 mg/mL gotas (25 mg/gota) — 0,4 a 0,6 gota/kg/dose (10–15 mg/kg; máx 40 gotas = 1 g) de 6 em 6 horas se febre ou dor. Não usar dipirona em < 3 meses ou < 5 kg.\n   ou Paracetamol 200 mg/mL gotas — 1 gota/kg/dose (máx 35 gotas) de 6 em 6 horas se febre.\n2. Soro fisiológico 0,9% — 2 a 5 mL em cada narina várias vezes ao dia.\n\nNÃO há antiviral para COVID-19 em crianças no SUS; nirmatrelvir/ritonavir só é indicado na bula a partir de 12 anos e 40 kg.",
    hospitalar: "COVID-19 COM NECESSIDADE DE O₂ — ADULTO\n1. Dieta oral conforme aceitação; cabeceira elevada.\n2. O₂ por cateter nasal 1–5 L/min ou máscara para SpO₂ 92–96%. Considerar posição prona acordado se tolerar.\n3. Dexametasona 6 mg IV (ou VO) 1 vez ao dia por até 10 dias.\n4. Enoxaparina 40 mg SC 1 vez ao dia (profilaxia de TEV; ajustar se TFG < 30 ou peso extremo).\n5. Dipirona 1 g IV de 6/6 h se febre ou dor.\n6. Ondansetrona 4 mg IV de 8/8 h se náusea.\n7. Insulina regular conforme glicemia capilar (corticoide eleva a glicemia).\n8. Antibiótico apenas se pneumonia bacteriana associada (ver ficha de pneumonia).\n9. Precaução para gotículas e contato; aerossol em procedimentos geradores de aerossol.\n10. Controles: SpO₂, FR, FC, PA de 4/4 h; glicemia capilar de 6/6 h; balanço hídrico.\nCriança: dexametasona 0,15 mg/kg/dia IV/VO (máx 6 mg) se necessidade de O₂."
  },
  orientacoesRetorno: [
    "Isolamento em casa por 7 dias a partir do início dos sintomas; se ainda tiver febre ou sintomas importantes, manter até 24 h sem febre (sem antitérmico) e com melhora. Usar máscara bem ajustada perto de outras pessoas até o 10º dia",
    "Beber bastante líquido, repousar, manter a casa ventilada",
    "Voltar imediatamente se: falta de ar, cansaço ao falar, dor ou pressão no peito, lábios roxos, confusão, desmaio, oxímetro < 95%; na criança, respiração rápida ou com esforço, gemido, não aceitar líquidos, sonolência",
    "Quem toma nirmatrelvir: tomar até o fim os 5 dias; não reiniciar remédios suspensos antes do prazo orientado",
    "Retorno ou teleconsulta em 48–72 h se for de grupo de risco"
  ],
  tabelas: [
    {
      titulo: "Nirmatrelvir/ritonavir — dose por função renal",
      colunas: ["TFG (mL/min/1,73 m²)", "Dose"],
      linhas: [
        ["≥ 60", "Nirmatrelvir 300 mg + ritonavir 100 mg 12/12 h, 5 dias"],
        ["30–59", "Nirmatrelvir 150 mg + ritonavir 100 mg 12/12 h, 5 dias"],
        ["< 30 ou diálise", "Não recomendado no SUS (discutir com especialista)"]
      ],
      nota: "Início até o 5º dia de sintomas. Sempre checar interações do ritonavir."
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia para uso do antiviral nirmatrelvir/ritonavir em pacientes com COVID-19 não hospitalizados e de alto risco, 2ª ed. (2025)",
    "Ministério da Saúde — Guia de vigilância integrada da covid-19, influenza e outros vírus respiratórios de importância em saúde pública (2024)",
    "Ministério da Saúde/CONITEC — Diretrizes Brasileiras para Tratamento Hospitalar do Paciente com COVID-19 (2021–2022)",
    "OMS — Clinical management of COVID-19: living guideline (2023–2025)",
    "Bula do nirmatrelvir/ritonavir (Paxlovid) — ANVISA"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
