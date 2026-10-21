// Vias de administração, volumes IM, diluições e organização da prescrição
registrarFicha({
  id: "vias-administracao",
  especialidade: "referencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Vias de administração, volumes IM e diluições",
  resumo: "Referência prática para prescrever no PS e na UBS: escolha da via (VO, SL, IM, IV, SC, IO, intranasal), volume máximo IM por músculo e idade, agulhas, diluições usuais, cálculo de gotejamento e modelo de organização da prescrição.",
  palavrasChave: "via de administracao intramuscular im intravenosa iv endovenosa ev subcutanea sc oral vo sublingual intraossea intranasal volume maximo deltoide ventrogluteo vasto lateral dorsogluteo hochstetter agulha diluicao gotejamento gotas por minuto microgotas bomba de infusao prescricao medica organizacao abreviaturas perigosas ismp receita controle especial antimicrobiano",
  critico: {
    tempo: "Confira dose, via e diluição",
    texto: "Escreva nome genérico, dose, via, diluição, velocidade e intervalo por extenso. Nunca prescreva KCl concentrado em bolus. Evite abreviaturas perigosas (ex.: 'U' para unidade, 'SC' confundido com 'SL')."
  },
  alarmes: [
    "Cloreto de potássio 19,1% IV em bolus: parada cardíaca — sempre diluído, em bomba, ≤ 10 mEq/h em veia periférica",
    "IM em paciente com coagulopatia, plaquetopenia grave ou anticoagulado: preferir outra via",
    "IM e SC em choque: absorção imprevisível — usar IV ou IO (exceção: adrenalina IM na anafilaxia)",
    "Prometazina SC ou intra-arterial e diclofenaco IM: risco de necrose",
    "Dorsoglúteo em menor de 2 anos (músculo pouco desenvolvido, risco de lesão do nervo isquiático)",
    "Extravasamento de droga vesicante (vasopressor, cálcio, glicose 50%, bicarbonato): parar e avisar"
  ],
  conduta: [
    "VO: 1ª escolha se o paciente engole, está acordado e sem vômitos; tão eficaz quanto IV para muitos antibióticos e analgésicos",
    "SL: início rápido (ex.: nitrato na angina); orientar a não engolir",
    "IM: absorção em 10–30 min; não exige acesso; volume limitado pelo músculo (tabela); aspirar não é necessário para vacinas (MS 2020)",
    "IV: início imediato; preferir diluição e infusão lenta para drogas irritantes ou que causam hipotensão; bolus só quando indicado",
    "SC: insulina, heparina, enoxaparina, algumas vacinas; volume até cerca de 1–1,5 mL por local; hipodermóclise em cuidados paliativos",
    "IO: em emergência (PCR, choque) quando o acesso venoso falha em 60–90 s; qualquer droga ou volume da via IV",
    "Intranasal (com atomizador): midazolam, naloxona, fentanil — útil em criança sem acesso",
    "Retal: diazepam em convulsão sem acesso; absorção variável",
    "Calcular sempre a dose pediátrica em mg/kg e conferir que não passa da dose de adulto"
  ],
  tabelas: [
    {
      titulo: "Volume máximo por injeção IM (referência)",
      colunas: ["Músculo", "Lactente (< 2 anos)", "Pré-escolar e escolar", "Adolescente e adulto", "Observações"],
      linhas: [
        ["Vasto lateral da coxa", "0,5 mL (prematuro/neonato) a 1 mL", "1–2 mL", "3–4 mL", "Local preferido no lactente; local da adrenalina na anafilaxia em todas as idades"],
        ["Ventroglúteo (Hochstetter)", "Pode ser usado; 1 mL", "1,5–2 mL", "3–4 mL", "Mais seguro em qualquer idade: longe de nervos e vasos grandes"],
        ["Dorsoglúteo", "Não usar", "Evitar < 2 anos; 1,5–2 mL", "3–4 mL", "Quadrante superior externo. Risco de lesão do nervo isquiático; em queda de uso"],
        ["Deltoide", "Não usar", "0,5 mL", "1 mL (até 2 mL em alguns protocolos)", "Vacinas e pequenos volumes. Risco de lesão de nervo radial e axilar"]
      ],
      nota: "Valores compilados do Parecer COREN-SP 010/2020 e da nota técnica do MS sobre vacinação (2020); há variação entre referências. Volumes maiores: dividir em 2 locais. Penicilina benzatina 1.200.000 UI (cerca de 4 mL): ventroglúteo ou dorsoglúteo no adulto; dividir em 2 locais na criança se necessário."
    },
    {
      titulo: "Agulhas usuais (comprimento × calibre, mm)",
      colunas: ["Via", "Criança", "Adulto", "Observações"],
      linhas: [
        ["IM", "20 × 5,5 a 25 × 6", "25 × 7 a 30 × 7 (obeso: 30 × 8 ou maior)", "Ângulo de 90°; técnica em Z para soluções irritantes"],
        ["SC", "13 × 4,5", "13 × 4,5", "Ângulo de 90° com prega (45° se pouco tecido)"],
        ["ID", "13 × 3,8 ou 13 × 4,5", "13 × 3,8 ou 13 × 4,5", "BCG, PPD"],
        ["IV (aspirar medicamento)", "25 × 8 a 40 × 12", "40 × 12", "Agulha com filtro para ampola de vidro, se disponível"]
      ]
    },
    {
      titulo: "Diluições e velocidades usuais (adulto)",
      colunas: ["Medicamento", "Diluição", "Velocidade / tempo", "Cuidados"],
      linhas: [
        ["Dipirona 1 g (2 mL)", "Completar 10 mL com água destilada ou SF 0,9% — ou em 100 mL de SF 0,9%", "IV lento em 3–5 min, ou em 15–30 min se em 100 mL", "IV rápido: hipotensão"],
        ["Ondansetrona 4–8 mg", "Puro ou em 50 mL de SF 0,9%", "IV lento ≥ 30 s; em 15 min se diluída", "Prolonga QT"],
        ["Metoclopramida 10 mg", "Puro ou em 10–50 mL de SF 0,9%", "IV lento em ≥ 3 min", "Distonia aguda (ver Antídotos: biperideno). Máx. 5 dias. Evitar em < 1 ano"],
        ["Cetoprofeno 100 mg", "100 mL de SF 0,9%", "20 min", "AINE: cuidados renais e gástricos"],
        ["Tramadol 50–100 mg", "100 mL de SF 0,9%", "15–30 min", "Náusea; reduz limiar convulsivo"],
        ["Omeprazol 40 mg", "Diluente próprio; pode completar 100 mL de SF 0,9%", "IV lento em ≥ 2,5 min; ou 20–30 min se em 100 mL", "—"],
        ["Ceftriaxona 1–2 g", "IV: 100 mL de SF 0,9% · IM: 1 g em 3,5 mL de lidocaína 1% sem vasoconstritor", "IV em 30 min", "IM com lidocaína nunca IV. Não misturar com cálcio em neonato"],
        ["Hidrocortisona 100–500 mg", "Diluente próprio (pode ir em 100 mL de SF 0,9%)", "IV lento em 3–5 min ou em 30 min", "—"],
        ["Escopolamina (butilbrometo) 20 mg", "Puro ou com dipirona em 100 mL de SF 0,9%", "IV lento", "Taquicardia, retenção urinária; evitar em glaucoma de ângulo fechado"],
        ["Cloreto de potássio 19,1% (2,5 mEq/mL)", "Sempre diluído em SF 0,9% (ex.: 10 mL = 25 mEq em 250–500 mL)", "≤ 10 mEq/h em veia periférica; até 20 mEq/h só em acesso central com monitor", "Nunca em bolus. Dor no trajeto: diluir mais"],
        ["Glicose 50%", "Pura (em veia calibrosa) ou diluir 1:1 para periférica", "IV lento", "Vesicante. Criança: usar glicose 10% (2–5 mL/kg)"]
      ],
      nota: "Confirme na bula do fabricante disponível no serviço e no guia de diluição da farmácia; compatibilidade em Y deve ser checada."
    },
    {
      titulo: "Cálculo de gotejamento",
      colunas: ["Equipo", "Fórmula", "Exemplo"],
      linhas: [
        ["Macrogotas (20 gotas = 1 mL)", "gotas/min = volume (mL) ÷ (tempo em horas × 3)", "1.000 mL em 8 h → 1.000 ÷ 24 ≈ 42 gotas/min"],
        ["Microgotas (60 microgotas = 1 mL)", "microgotas/min = volume (mL) ÷ tempo em horas (= mL/h)", "500 mL em 12 h → ≈ 42 microgotas/min (42 mL/h)"],
        ["Bomba de infusão", "mL/h = volume (mL) ÷ tempo (h)", "100 mL em 30 min → 200 mL/h"],
        ["Dose por minuto em bomba", "mL/h = dose (mcg/kg/min) × peso (kg) × 60 ÷ concentração (mcg/mL)", "Noradrenalina 0,1 mcg/kg/min, 70 kg, solução 64 mcg/mL → 6,6 mL/h"]
      ]
    }
  ],
  prescricao: {
    hospitalar: "MODELO DE ORGANIZAÇÃO DA PRESCRIÇÃO (sala de observação/internação)\nPaciente: ________ Idade: ___ Peso: ___ kg  Alergias: ________  Data/hora: ___\n1. Dieta: (oral livre / branda / hipossódica / para diabético / zero — motivo).\n2. Hidratação: solução, volume, velocidade (mL/h ou gotas/min) e período. Ex.: SF 0,9% 1.000 mL IV a 42 gotas/min (8/8 h).\n3. Medicações de horário (uma por linha): NOME GENÉRICO + concentração — dose — via — diluição — tempo de infusão — intervalo — duração/dia do tratamento.\n   Ex.: Ceftriaxona 1 g — 1 g IV — diluir em 100 mL de SF 0,9% — correr em 30 min — 1 vez ao dia — D1/7.\n4. Medicações se necessário (SN), com critério claro e intervalo mínimo.\n   Ex.: Dipirona 1 g IV, diluída em 10 mL de água destilada, lento, de 6/6 h se dor ou temperatura ≥ 37,8 °C.\n5. Profilaxias: tromboembolismo venoso (enoxaparina 40 mg SC 1×/dia, se indicado), úlcera de estresse (se indicado).\n6. Cuidados de enfermagem: decúbito, cabeceira, curativos, precauções (contato, gotículas, aerossóis), contenção se necessário.\n7. Controles: sinais vitais (frequência), glicemia capilar, diurese, balanço hídrico, peso.\n8. Exames solicitados e horário.\n9. Comunicar ao médico se: critérios objetivos (PAS < 90, SpO₂ < 92%, FC > 120, rebaixamento, diurese < 0,5 mL/kg/h).\n\nREGRAS\n- Escrever 'unidades' por extenso (nunca 'U'); zero à esquerda (0,5 mg) e nunca zero à direita (5 mg, não 5,0 mg).\n- Criança: escrever dose em mg/kg e a dose final calculada (ex.: 15 mg/kg = 300 mg).\n- Psicotrópicos e opioides: receita de controle especial (Portaria SVS/MS nº 344/1998). Antimicrobianos ambulatoriais: receita em 2 vias, validade de 10 dias (RDC ANVISA nº 471/2021)."
  },
  orientacoesRetorno: [
    "Após injeção IM: dor local leve por 1 a 2 dias é esperada; compressa morna alivia",
    "Voltar se o local da injeção ficar muito vermelho, quente, com pus, febre ou endurecimento que aumenta (abscesso)",
    "Formigamento, dor em choque ou fraqueza na perna após injeção no glúteo: procurar atendimento",
    "Remédio por via oral: tomar nos horários combinados; se vomitar logo após, avisar a equipe"
  ],
  encaminhar: [
    "Dúvidas de diluição, compatibilidade e estabilidade: farmácia hospitalar ou centro de informação sobre medicamentos"
  ],
  fontes: [
    "COREN-SP — Parecer nº 010/2020: volumes máximos e técnica de administração intramuscular",
    "Ministério da Saúde — Nota técnica sobre administração de vacinas IM sem aspiração e volumes por músculo (2020)",
    "Ministério da Saúde — Manual de Normas e Procedimentos para Vacinação (2014; atualizações)",
    "ISMP Brasil — Boletim: abreviaturas, siglas e símbolos perigosos (atualização vigente) e medicamentos potencialmente perigosos (2022)",
    "ANVISA — RDC nº 471/2021 (antimicrobianos) e Portaria SVS/MS nº 344/1998 (controle especial)",
    "AHA — Diretrizes de RCP e ACE 2025 (acesso intraósseo)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
