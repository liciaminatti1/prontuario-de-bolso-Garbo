// Transtorno bipolar
registrarFicha({
  id: "transtorno-bipolar",
  especialidade: "saude-mental",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Transtorno bipolar (mania, hipomania, depressão bipolar) e uso do lítio",
  resumo: "Transtorno do humor com episódios de mania (bipolar I) ou hipomania (bipolar II) alternando com depressão. Base do tratamento: estabilizador de humor (lítio, valproato) e/ou antipsicótico; evitar antidepressivo isolado. Inclui níveis e toxicidade do lítio.",
  palavrasChave: "transtorno bipolar bipolaridade psicose maniaco depressiva mania hipomania depressao bipolar episodio misto estabilizador de humor litio carbonato de litio litemia intoxicacao por litio valproato acido valproico divalproato carbamazepina quetiapina risperidona olanzapina haloperidol lamotrigina canmat isbd ciclagem rapida virada maniaca",
  critico: {
    tempo: "Litemia > 1,5: suspender e PS",
    texto: "Paciente em lítio com vômitos, diarreia, tremor grosseiro, ataxia, fala arrastada ou confusão: suspender o lítio, pedir litemia e creatinina e encaminhar ao PS. Mania com risco a si ou a outros: avaliação psiquiátrica no mesmo dia."
  },
  alarmes: [
    "Ideação ou plano suicida (risco alto, sobretudo em depressão bipolar e estados mistos — ver ficha risco-suicida)",
    "Mania com agitação, agressividade, psicose, gastos ou exposição de risco, sem crítica (ver ficha agitacao-psicomotora)",
    "Intoxicação por lítio: vômitos, diarreia, tremor grosseiro, ataxia, disartria, confusão, mioclonias, convulsão",
    "Febre, rigidez e confusão com antipsicótico (síndrome neuroléptica maligna)",
    "Gestação ou puerpério (alto risco de recaída e psicose puerperal; lítio e valproato exigem ajuste/troca)",
    "Rash, dor de garganta com febre, sangramento (lamotrigina, carbamazepina); dor abdominal com vômitos em uso de valproato (pancreatite, hepatotoxicidade)"
  ],
  conduta: [
    "Rastrear bipolaridade em todo paciente com depressão antes de antidepressivo: episódios de euforia ou irritabilidade com pouca necessidade de sono, aceleração, gastos, projetos grandiosos; história familiar",
    "Mania: humor elevado/irritável + energia aumentada ≥ 7 dias (ou qualquer duração se internação), com ≥ 3 sintomas (4 se só irritável) e prejuízo importante. Hipomania: ≥ 4 dias, sem prejuízo grave nem psicose",
    "Excluir causas orgânicas e substâncias: cocaína, anfetaminas, álcool, corticoide, levotiroxina em excesso, hipertireoidismo, lesão neurológica (sobretudo início após os 40–50 anos)",
    "Avaliar risco: suicídio, agressividade, exposição a risco, capacidade de cuidar de si; definir local de cuidado (UBS, CAPS, internação)",
    "Mania aguda: suspender antidepressivo e estimulantes; iniciar lítio ou valproato e/ou antipsicótico (quetiapina, risperidona, olanzapina; haloperidol se agitação); combinação estabilizador + antipsicótico nos casos graves",
    "Depressão bipolar: quetiapina, lítio ou lamotrigina (CANMAT 1ª linha; lurasidona não está no SUS). NÃO usar antidepressivo em monoterapia; se usar (2ª linha), sempre associado a estabilizador e por tempo limitado, com vigilância de virada",
    "Manutenção: manter o esquema que funcionou no episódio agudo; lítio é o padrão-ouro (previne mania, depressão e suicídio)",
    "Antes de iniciar lítio: creatinina/TFG, ureia, sódio, cálcio, TSH, ECG (> 40 anos ou cardiopatia), beta-hCG, peso",
    "Antes de valproato/antipsicótico: hemograma, TGO/TGP, peso, cintura, glicemia, lipídios; valproato é contraindicado em mulher em idade fértil sem contracepção eficaz (teratogênico)",
    "Psicoeducação (sono regular, evitar álcool e drogas, sinais de recaída), envolver a família, CAPS e psiquiatria em todo caso de bipolar I",
    "Seguimento da UBS: adesão, humor, efeitos adversos, peso/metabólico e exames de controle (tabela)"
  ],
  exames: [
    "Basal: hemograma, glicemia, colesterol total e frações, triglicérides, creatinina, ureia, sódio, cálcio, TGO, TGP, TSH, beta-hCG, urina tipo 1; ECG se > 40 anos ou cardiopatia",
    "Toxicológico de urina e sorologias (HIV, sífilis) conforme o caso",
    "Litemia: 12 h após a última dose, 5–7 dias após iniciar ou mudar a dose, depois a cada 3–6 meses; creatinina e TSH a cada 6–12 meses; cálcio anual",
    "Valproato: nível sérico de vale após 3–5 dias; hemograma com plaquetas e TGO/TGP nos primeiros meses e depois a cada 6–12 meses",
    "Antipsicóticos de 2ª geração: peso a cada consulta; glicemia e lipídios em 3 meses e depois anualmente; prolactina se sintomas (risperidona)"
  ],
  diferenciais: [
    "Depressão unipolar (sem história de mania/hipomania)",
    "Uso de substâncias (cocaína, anfetamina, álcool) e mania induzida por corticoide ou antidepressivo",
    "Hipertireoidismo, lesão frontal, demência frontotemporal, epilepsia",
    "Esquizofrenia e transtorno esquizoafetivo (psicose fora dos episódios de humor)",
    "Transtorno de personalidade borderline (oscilações de horas, ligadas a relações)",
    "TDAH (sintomas contínuos desde a infância, sem episódios)"
  ],
  tratamento: [
    { droga: "Carbonato de lítio", linha: "l1", dose: "Iniciar 300 mg 2×/dia; ajustar pela litemia. Alvo: mania 0,8–1,2 mEq/L; manutenção 0,6–0,8 mEq/L (até 1,0)", via: "VO", intervalo: "2×/dia (ou 1×/dia à noite na manutenção)", duracao: "Longo prazo (≥ 2 anos após episódio; frequentemente por toda a vida)", monitorizacao: "Litemia, creatinina, TSH, cálcio, peso; tremor, poliúria", contraindicacoes: "DRC moderada a grave, desidratação, hiponatremia, IC descompensada, doença do nó sinusal", ajustes: "AINE, IECA, BRA, tiazídicos, dieta sem sal e desidratação AUMENTAM a litemia. Idoso: doses e alvos menores. Gestação: risco de anomalia de Ebstein — planejar com psiquiatria; não suspender abruptamente" },
    { droga: "Ácido valproico / divalproato", linha: "l1", dose: "Iniciar 250 mg 2–3×/dia (ou 500 mg/dia) e aumentar até 1.000–2.000 mg/dia; mania aguda internada: 20–30 mg/kg/dia", via: "VO", intervalo: "2–3×/dia", duracao: "Longo prazo", monitorizacao: "Nível sérico (vale ~50–125 mcg/mL), hemograma/plaquetas, TGO/TGP, peso, amônia se confusão", contraindicacoes: "Gestação e mulher em idade fértil sem contracepção eficaz, hepatopatia, doença mitocondrial, distúrbio do ciclo da ureia", ajustes: "Mais eficaz em estados mistos e ciclagem rápida. Interação: aumenta nível de lamotrigina (reduzir dose dela)" },
    { droga: "Quetiapina", linha: "l1", dose: "Mania: 400–800 mg/dia (titular a partir de 100 mg/dia) · Depressão bipolar: 50 mg à noite, aumentando até 300 mg à noite em ~4 dias", via: "VO", intervalo: "1–2×/dia", duracao: "Longo prazo", monitorizacao: "Sedação, hipotensão, peso, glicemia, lipídios", contraindicacoes: "Cautela em QT longo, idoso com demência", ajustes: "Dispensada pelo CEAF (PCDT TAB)" },
    { droga: "Risperidona", linha: "l1", dose: "2–6 mg/dia (iniciar 1–2 mg)", via: "VO", intervalo: "1–2×/dia", duracao: "Conforme psiquiatria", monitorizacao: "Sintomas extrapiramidais, prolactina, peso", contraindicacoes: "Parkinson, demência com corpos de Lewy", ajustes: "Mania aguda, isolada ou com lítio/valproato" },
    { droga: "Olanzapina", linha: "alt", dose: "10–20 mg/dia", via: "VO", intervalo: "1×/dia à noite", duracao: "Conforme psiquiatria", monitorizacao: "Ganho de peso importante, glicemia, lipídios", contraindicacoes: "Síndrome metabólica descompensada (relativa)", ajustes: "Eficaz na mania; 2ª linha na manutenção por efeito metabólico (CANMAT 2018)" },
    { droga: "Haloperidol", linha: "alt", dose: "2,5–5 mg VO ou IM; repetir conforme agitação", via: "VO ou IM", intervalo: "Até 8/8 h", duracao: "Curto prazo (fase aguda)", monitorizacao: "Distonia, acatisia, QTc", contraindicacoes: "Parkinson, QT longo", ajustes: "Associar prometazina 25–50 mg IM ou biperideno se distonia. Ver ficha agitacao-psicomotora" },
    { droga: "Lamotrigina", linha: "alt", dose: "25 mg/dia por 2 semanas → 50 mg/dia por 2 semanas → 100 mg/dia → alvo 200 mg/dia", via: "VO", intervalo: "1×/dia", duracao: "Manutenção (previne depressão, pouco efeito na mania)", monitorizacao: "Rash (Stevens-Johnson) — suspender se aparecer", contraindicacoes: "Rash prévio com lamotrigina", ajustes: "Com valproato: metade das doses. Sem efeito na mania aguda (titulação lenta)" },
    { droga: "Antidepressivo em monoterapia (ISRS, tricíclico, IRSN)", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Risco de virada maníaca, estado misto e ciclagem rápida", ajustes: "Se necessário (2ª linha, bipolar I): ISRS ou bupropiona sempre com estabilizador, pelo psiquiatra; evitar tricíclicos e venlafaxina" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES (antes de iniciar estabilizador)\n1. Hemograma, glicemia, colesterol total e frações, triglicérides, creatinina, ureia, sódio, cálcio, TGO, TGP, TSH, beta-hCG, urina tipo 1. ECG se > 40 anos ou cardiopatia.\n2. Litemia 12 horas após a última dose, 5 a 7 dias após iniciar o lítio.\n3. Encaminhamento à psiquiatria/CAPS: transtorno afetivo bipolar.\n\nUSO ORAL — MANUTENÇÃO/EPISÓDIO LEVE (exemplo; ajustar com psiquiatria)\n4. Carbonato de lítio 300 mg ---------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Beber 2 a 3 litros de água por dia. Não tomar anti-inflamatórios.\n   OU (se lítio contraindicado e sem possibilidade de gestação)\n   Ácido valproico 250 mg ---------------------- 90 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas, aumentando conforme orientação.\n\nDEPRESSÃO BIPOLAR\n5. Quetiapina 25 mg ------------------------------ 1 caixa (CEAF; titular para comprimidos de 100 mg)\n   Dia 1: 2 comprimidos (50 mg) à noite; dia 2: 4 comprimidos (100 mg) à noite; depois 200 mg e então 300 mg à noite, conforme tolerância.\n\nCuidado: entregar quantidade limitada (ex.: 30 dias) e a um familiar se risco de suicídio."
  },
  orientacoesRetorno: [
    "O tratamento continua mesmo quando estiver bem: parar por conta própria é a principal causa de nova crise",
    "Dormir em horários regulares; noites sem dormir podem desencadear euforia",
    "Evitar álcool, maconha, cocaína e outras drogas",
    "Com lítio: beber bastante água, não fazer dieta sem sal por conta própria, não tomar anti-inflamatório (ibuprofeno, diclofenaco, nimesulida) nem diurético sem avisar o médico",
    "Parar o lítio e procurar o PS se: vômitos ou diarreia que não passam, tremor forte, desequilíbrio, fala enrolada, confusão ou sonolência",
    "Família: procurar ajuda se a pessoa dormir muito pouco sem cansaço, falar muito, gastar demais, ficar agressiva ou falar em morrer",
    "Mulheres: planejar gravidez com o psiquiatra; usar anticoncepcional eficaz (o valproato causa malformações)",
    "Retornar em 1–2 semanas no início e trazer os exames de controle"
  ],
  encaminhar: [
    "Psiquiatria/CAPS: todo caso de bipolar I, diagnóstico duvidoso, falha ou intolerância ao tratamento, gestação",
    "PS/internação psiquiátrica (leito em hospital geral ou CAPS III): mania grave, psicose, risco de suicídio ou heteroagressividade, incapacidade de autocuidado",
    "PS clínico: suspeita de intoxicação por lítio, síndrome neuroléptica maligna, pancreatite/hepatite por valproato"
  ],
  tabelas: [
    {
      titulo: "Lítio: níveis e toxicidade",
      colunas: ["Litemia (mEq/L)", "Situação", "Conduta"],
      linhas: [
        ["0,6–0,8 (até 1,0)", "Manutenção", "Litemia a cada 3–6 meses"],
        ["0,8–1,2", "Mania aguda", "Litemia semanal até estabilizar"],
        ["1,5–2,5", "Intoxicação leve a moderada: náusea, vômitos, diarreia, tremor grosseiro, ataxia, sonolência", "Suspender lítio; PS; SF 0,9% IV se desidratado; creatinina, sódio, ECG; repetir litemia"],
        ["> 2,5", "Intoxicação grave: confusão, mioclonias, convulsão, arritmia, coma", "UTI; nefrologia para hemodiálise"],
        ["Hemodiálise (EXTRIP)", "Recomendada se litemia > 4,0 com função renal alterada ou se rebaixamento, convulsão ou arritmia, em qualquer nível; sugerida se > 5,0, confusão ou demora prevista para cair < 1,0", "Carvão ativado não adsorve lítio; irrigação intestinal em formulação de liberação prolongada"]
      ],
      nota: "Coletar 12 h após a última dose. Toxicidade pode ocorrer com nível 'normal' em idosos e na intoxicação crônica. Causas comuns: desidratação, AINE, IECA/BRA, tiazídico, piora renal."
    },
    {
      titulo: "Escolha por fase (CANMAT/ISBD 2018, adaptado ao SUS)",
      colunas: ["Fase", "1ª linha", "Observação"],
      linhas: [
        ["Mania aguda", "Lítio, valproato, quetiapina, risperidona (aripiprazol, asenapina, paliperidona, cariprazina fora do SUS); combinação estabilizador + antipsicótico", "Haloperidol e olanzapina: 2ª linha. Suspender antidepressivo"],
        ["Depressão bipolar I", "Quetiapina, lítio, lamotrigina (lurasidona fora do SUS)", "Antidepressivo só como adjunto, 2ª linha"],
        ["Manutenção", "Lítio (padrão-ouro), quetiapina, valproato, lamotrigina (polo depressivo)", "Manter o que funcionou na fase aguda"],
        ["Bipolar II (depressão)", "Quetiapina", "Lítio, lamotrigina como 2ª linha"]
      ]
    }
  ],
  fontes: [
    "CANMAT/ISBD — Guidelines for the management of patients with bipolar disorder (Yatham et al., 2018)",
    "Ministério da Saúde — PCDT Transtorno Afetivo Bipolar do tipo I (Portaria SAS/MS nº 315, 2016)",
    "EXTRIP Workgroup — Extracorporeal treatment for lithium poisoning: systematic review and recommendations (2015)",
    "NICE — Bipolar disorder: assessment and management (CG185, atualização 2023)",
    "ANVISA/EMA — Restrições ao uso de valproato em mulheres em idade fértil (2018)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
