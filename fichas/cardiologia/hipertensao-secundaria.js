// Hipertensão secundária: quando e como investigar
registrarFicha({
  id: "hipertensao-secundaria",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Hipertensão secundária: quando e como investigar",
  resumo: "Hipertensão com causa identificável e muitas vezes tratável: hiperaldosteronismo primário, apneia do sono, doença renal, estenose de artéria renal, feocromocitoma, Cushing, tireoide, coarctação e drogas. Quem rastrear, quais exames pedir na UBS e quando encaminhar.",
  palavrasChave: "hipertensao secundaria resistente hiperaldosteronismo primario aldosterona renina conn feocromocitoma paraganglioma metanefrinas estenose arteria renal renovascular displasia fibromuscular apneia do sono stop-bang polissonografia cpap cushing coarctacao aorta hipocalemia espironolactona incidentaloma",
  critico: {
    tempo: "K baixo + HAS: pedir aldo/renina",
    texto: "Hipocalemia espontânea ou fácil com diurético, HAS resistente, início antes dos 40 anos ou incidentaloma adrenal: dosar aldosterona e renina. Crise com cefaleia, sudorese e palpitação: pensar em feocromocitoma."
  },
  alarmes: [
    "Crises paroxísticas de cefaleia, sudorese, palpitação e palidez com PA muito alta (feocromocitoma)",
    "Edema agudo de pulmão súbito e recorrente com função sistólica preservada (estenose renal bilateral)",
    "Queda > 30% da TFG após iniciar IECA ou BRA (estenose de artéria renal)",
    "PA ≥ 180/120 com lesão aguda de órgão-alvo (ver ficha has-emerg)",
    "Hipocalemia grave (K < 3,0), fraqueza muscular",
    "Pulsos femorais fracos ou atrasados em jovem (coarctação da aorta)"
  ],
  conduta: [
    "Antes de tudo, excluir pseudorresistência: técnica de medida, manguito adequado, efeito do avental branco (MAPA ou MRPA) e adesão",
    "Revisar drogas que elevam a PA: AINE, anticoncepcional combinado, descongestionante nasal, corticoide, venlafaxina, ciclosporina/tacrolimo, eritropoetina, anfetaminas, cocaína, álcool em excesso, alcaçuz",
    "Quem investigar: HAS resistente; início < 40 anos (ESC 2024; DBHA 2020 usava < 30); piora súbita de HAS antes controlada; HAS grau 3 ou emergência; hipocalemia; incidentaloma adrenal; lesão de órgão-alvo desproporcional; sinais clínicos sugestivos de causa específica",
    "Endocrine Society 2025 sugere rastrear hiperaldosteronismo em TODO hipertenso (recomendação condicional); priorize os grupos acima quando o acesso for limitado",
    "Exames básicos para todos os hipertensos (ver has-ubs) já rastreiam DRC: creatinina com TFG, urina tipo 1, relação albumina/creatinina, potássio",
    "Hiperaldosteronismo: aldosterona + renina (atividade ou concentração) pela manhã, com K corrigido; relação aldosterona/renina elevada com aldosterona alta → endocrinologia para confirmação e lateralização",
    "Apneia do sono: ronco, pausas, sonolência diurna, obesidade, pescoço largo → STOP-Bang e polissonografia (ou poligrafia domiciliar); tratar com CPAP e perda de peso",
    "Feocromocitoma: metanefrinas livres plasmáticas ou metanefrinas fracionadas em urina de 24 h; elevação > 3 vezes o limite superior é muito sugestiva",
    "Renovascular: Doppler de artérias renais na suspeita; angio-TC ou angio-RM conforme função renal e serviço",
    "Outras: TSH (hipo/hipertireoidismo), cálcio (hiperparatireoidismo), rastreio de Cushing se fenótipo (ver ficha doencas-adrenal), PA nos 4 membros e eco se suspeita de coarctação",
    "HAS resistente confirmada sem causa encontrada: espironolactona como 4º fármaco (se K < 4,5–5,0 e TFG adequada)"
  ],
  exames: [
    "Aldosterona e renina: coletar pela manhã, 2 h após levantar, sentado 5–15 min. Corrigir K antes. Espironolactona e eplerenona interferem (suspender 4–6 semanas, se seguro); IECA, BRA e diuréticos aumentam a renina (podem dar falso-negativo); betabloqueador e clonidina reduzem a renina (podem dar falso-positivo). Fármacos com pouca interferência para usar no período: verapamil de liberação lenta, hidralazina, doxazosina",
    "Interpretação: relação aldosterona/renina acima do corte do laboratório (varia conforme a unidade de renina) com aldosterona elevada e renina suprimida = rastreio positivo; a confirmação (sobrecarga salina, captopril) e o cateterismo de veias adrenais são do especialista",
    "Metanefrinas livres plasmáticas (preferível, coleta em repouso) ou metanefrinas fracionadas na urina de 24 h. Tricíclicos, IRSN, levodopa e simpaticomiméticos podem causar falso-positivo",
    "Doppler colorido de artérias renais; USG de rins (assimetria > 1,5 cm entre os rins sugere estenose)",
    "Polissonografia tipo 1 ou poligrafia domiciliar (tipo 3)",
    "TSH, cálcio, PTH se cálcio alto; cortisol após 1 mg de dexametasona se fenótipo de Cushing",
    "Ecocardiograma e PA nos 4 membros se sopro interescapular, pulsos femorais diminuídos ou PA de membros inferiores menor que a dos superiores"
  ],
  diferenciais: [
    "Pseudorresistência: má adesão, técnica de medida errada, avental branco",
    "HAS primária com estilo de vida inadequado (sal, álcool, obesidade)",
    "Doença renal parenquimatosa (a causa secundária mais comum junto com hiperaldosteronismo e apneia)",
    "Hipertensão induzida por drogas ou substâncias",
    "Crises de ansiedade/pânico (diferencial do feocromocitoma)"
  ],
  tratamento: [
    {
      droga: "Espironolactona",
      linha: "l1",
      dose: "25 mg/dia; ajustar até 50 mg/dia na HAS resistente. No hiperaldosteronismo sem cirurgia, doses maiores conforme especialista",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "K e creatinina em 1–2 semanas, 1 mês e depois periodicamente",
      contraindicacoes: "K > 5,0 mEq/L, TFG < 30 (cautela < 45), gestação",
      ajustes: "Ginecomastia e mastalgia são comuns; associação com IECA/BRA aumenta risco de hipercalemia. Alternativa no hiperaldosteronismo: eplerenona (fora da RENAME)"
    },
    {
      droga: "Doxazosina (bloqueio alfa — feocromocitoma, pré-operatório)",
      linha: "adj",
      dose: "Conforme endocrinologista/cirurgião",
      via: "VO",
      intervalo: "Conforme especialista",
      duracao: "Até a cirurgia",
      monitorizacao: "PA e hipotensão postural",
      contraindicacoes: "—",
      ajustes: "No feocromocitoma, NUNCA iniciar betabloqueador antes do bloqueio alfa (risco de crise hipertensiva)"
    },
    {
      droga: "Betabloqueador isolado na suspeita de feocromocitoma",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Estímulo alfa sem oposição → crise hipertensiva",
      ajustes: "Só após bloqueio alfa adequado"
    },
    {
      droga: "Estenose aterosclerótica de artéria renal",
      linha: "l1",
      dose: "Tratamento clínico: IECA ou BRA (se tolerado, com controle de creatinina), estatina, antiagregante, cessar tabagismo",
      via: "VO",
      intervalo: "—",
      duracao: "Contínuo",
      monitorizacao: "Creatinina e K em 1–2 semanas após IECA/BRA",
      contraindicacoes: "IECA/BRA com estenose bilateral grave ou rim único: cautela e especialista",
      ajustes: "Revascularização reservada a EAP súbito recorrente, perda progressiva de função renal ou HAS refratária. Displasia fibromuscular (mulher jovem): angioplastia sem stent costuma curar"
    }
  ],
  prescricao: {
    ambulatorial: "HAS RESISTENTE — 4º FÁRMACO (após confirmar adesão e MAPA/MRPA)\nUSO ORAL\n1. Espironolactona 25 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã, todos os dias.\n   (Dosar potássio e creatinina em 1 a 2 semanas.)\n\nPEDIDO DE EXAMES — INVESTIGAÇÃO DE HAS SECUNDÁRIA\n- Aldosterona sérica e atividade de renina plasmática (ou renina direta), coleta pela manhã. Indicação: HAS resistente / hipocalemia / início precoce.\n- Sódio, potássio, creatinina, ureia, TSH, cálcio, glicemia.\n- Urina tipo 1 e relação albumina/creatinina em amostra isolada.\n- Metanefrinas livres plasmáticas OU metanefrinas fracionadas em urina de 24 h (se crises adrenérgicas, incidentaloma ou HAS paroxística).\n- Ultrassonografia de rins e vias urinárias com Doppler de artérias renais (suspeita de estenose de artéria renal).\n- Polissonografia (suspeita de apneia obstrutiva do sono; STOP-Bang ___)."
  },
  orientacoesRetorno: [
    "Tomar os remédios todos os dias, mesmo com a pressão boa; trazer as medidas de casa anotadas",
    "Reduzir sal e alimentos industrializados; evitar anti-inflamatórios, descongestionantes nasais e bebidas energéticas",
    "Se tiver crises de dor de cabeça forte, suor e coração disparado: medir a pressão e procurar atendimento",
    "Voltar imediatamente se falta de ar súbita, dor no peito, fraqueza em um lado do corpo ou confusão",
    "Retornar com os exames; algumas causas têm cura com cirurgia ou tratamento específico"
  ],
  encaminhar: [
    "Endocrinologia: rastreio positivo para hiperaldosteronismo, feocromocitoma ou Cushing; incidentaloma adrenal (ver doencas-adrenal)",
    "Cardiologia/nefrologia: HAS resistente sem causa, suspeita renovascular, DRC avançada, coarctação",
    "Pneumologia/medicina do sono: apneia moderada a grave para CPAP",
    "Urgência: suspeita de crise de feocromocitoma, emergência hipertensiva (ver has-emerg) ou EAP"
  ],
  fontes: [
    "SBC/SBH/SBN — Diretrizes Brasileiras de Hipertensão Arterial 2020 (Arq Bras Cardiol, 2021) e Diretriz Brasileira de Hipertensão Arterial 2025 (Arq Bras Cardiol, 2025)",
    "ESC — Guidelines for the management of elevated blood pressure and hypertension (2024)",
    "Endocrine Society — Primary Aldosteronism Clinical Practice Guideline (JCEM, 2025)",
    "Endocrine Society — Pheochromocytoma and Paraganglioma Clinical Practice Guideline (2014)",
    "AHA — Resistant Hypertension: Detection, Evaluation, and Management, Scientific Statement (2018)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
