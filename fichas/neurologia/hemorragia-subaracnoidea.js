// Hemorragia subaracnóidea aneurismática
registrarFicha({
  id: "hemorragia-subaracnoidea",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hemorragia subaracnóidea (HSA aneurismática)",
  resumo: "Cefaleia súbita e intensa (\"a pior da vida\", pico em segundos a 1 h), com ou sem rebaixamento, rigidez de nuca ou síncope. Emergência neurocirúrgica: confirmar, estabilizar, prevenir ressangramento e isquemia tardia e tratar o aneurisma cedo.",
  palavrasChave: "hsa hemorragia subaracnoidea aneurisma cefaleia em trovoada thunderclap pior dor de cabeca da vida nimodipino vasoespasmo hunt hess wfns fisher xantocromia puncao lombar hidrocefalia ottawa",
  critico: {
    tempo: "TC já; nimodipino; neurocirurgia",
    texto: "Cefaleia súbita máxima em até 1 h = TC de crânio sem contraste imediata. Confirmada a HSA: nimodipino VO, analgesia, controle de PA e transferência para tratar o aneurisma o mais cedo possível (idealmente < 24 h)."
  },
  alarmes: [
    "Cefaleia em trovoada (pico em segundos a 1 h), sobretudo com esforço, síncope, vômitos ou rigidez de nuca",
    "Rebaixamento de consciência, crise convulsiva, déficit focal",
    "Nova piora da cefaleia ou do nível de consciência (ressangramento ou hidrocefalia)",
    "Novo déficit entre o 3º e o 14º dia (isquemia cerebral tardia / vasoespasmo)",
    "Paralisia do III nervo com pupila dilatada (aneurisma de comunicante posterior)",
    "Arritmia, edema pulmonar, troponina alta (miocardiopatia neurogênica)"
  ],
  condutaInicial: [
    "ABC, monitor; IOT se Glasgow ≤ 8 ou via aérea em risco (evitar picos de PA na laringoscopia)",
    "TC de crânio sem contraste urgente; se negativa e > 6 h do início ou dúvida → punção lombar ou angio-TC",
    "Analgesia e antiemético (dor e vômito elevam a PA); repouso, cabeceira 30°",
    "Controle de PA com droga IV titulável; evitar hipotensão",
    "Nimodipino 60 mg VO/SNE de 4/4 h, suspender antiagregante/anticoagulante e reverter coagulopatia",
    "Contato imediato com neurocirurgia / neurorradiologia intervencionista (clipagem ou embolização)"
  ],
  fataisExcluir: [
    "Ressangramento (maior risco nas primeiras 24 h)",
    "Hidrocefalia aguda",
    "Isquemia cerebral tardia (vasoespasmo, 3–14 dias)",
    "Hiponatremia (perda cerebral de sal / SIADH)",
    "Outras causas de cefaleia em trovoada: dissecção arterial, trombose venosa cerebral, síndrome de vasoconstrição reversível, apoplexia hipofisária, AVC de fossa posterior"
  ],
  proximaDecisao: "TC positiva → angio-TC (ou arteriografia) e tratamento do aneurisma. TC normal ≤ 6 h do início, aparelho moderno e laudo experiente → HSA praticamente excluída. TC normal > 6 h ou de qualidade duvidosa → punção lombar (idealmente ≥ 12 h após o início, para xantocromia) ou angio-TC.",
  clinica: {
    anamnese: [
      "Início exato: em segundos/minutos, durante esforço, relação sexual ou evacuação?",
      "Síncope, vômitos, convulsão, dor cervical",
      "Cefaleia sentinela nas semanas anteriores",
      "HAS, tabagismo, cocaína, álcool, história familiar de aneurisma, doença renal policística",
      "Antiagregantes e anticoagulantes"
    ],
    exameFisico: [
      "Glasgow, pupilas, motricidade ocular (III par), déficit focal",
      "Rigidez de nuca (pode estar ausente nas primeiras horas)",
      "Fundo de olho: hemorragia sub-hialoide (síndrome de Terson)",
      "PA, FC, ritmo (ECG)"
    ],
    diferenciais: [
      { dx: "Enxaqueca / cefaleia primária em trovoada", pista: "Padrão prévio semelhante; diagnóstico só após excluir HSA" },
      { dx: "Síndrome de vasoconstrição cerebral reversível", pista: "Cefaleias em trovoada recorrentes em dias, puerpério, drogas vasoativas" },
      { dx: "Dissecção carotídea/vertebral", pista: "Dor cervical, Horner, trauma cervical" },
      { dx: "Trombose venosa cerebral", pista: "Puerpério, anticoncepcional, papiledema" },
      { dx: "Meningite", pista: "Febre, início menos abrupto; ver ficha meningite" },
      { dx: "HSA traumática / perimesencefálica não aneurismática", pista: "Trauma; sangue restrito à frente do tronco, bom prognóstico" }
    ],
    gravidade: [
      "WFNS: I = Glasgow 15 sem déficit · II = 13–14 sem déficit · III = 13–14 com déficit motor · IV = 7–12 · V = 3–6",
      "Hunt-Hess: I assintomático ou cefaleia leve · II cefaleia moderada/grave, rigidez, só par craniano · III sonolência/confusão ou déficit leve · IV estupor, hemiparesia · V coma, postura de descerebração",
      "Fisher modificado (risco de vasoespasmo): 0 sem sangue · 1 fino sem intraventricular · 2 fino com intraventricular · 3 espesso sem intraventricular · 4 espesso com intraventricular"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — URGENTE. Cefaleia súbita, suspeita de hemorragia subaracnóidea. Informar horário de início.",
      porQue: "Exame inicial; sensibilidade muito alta nas primeiras 6 h.",
      esperar: "Hiperdensidade em cisternas da base, fissuras e sulcos.",
      interpretacao: "Padrão do sangue sugere a localização do aneurisma. Avaliar hidrocefalia.",
      limitacoes: "Sensibilidade cai com o tempo; anemia grave reduz a hiperdensidade."
    },
    {
      nome: "Punção lombar",
      pedido: "Líquor: pressão de abertura, contagem de hemácias no 1º e no último tubo, xantocromia (espectrofotometria ou inspeção após centrifugação), citologia, bioquímica.",
      porQue: "TC negativa com suspeita mantida (> 6 h).",
      esperar: "Xantocromia (≥ 12 h após o início); hemácias que não clareiam entre os tubos.",
      interpretacao: "Xantocromia confirma sangue prévio no líquor. Queda das hemácias entre tubos sugere punção traumática, mas não exclui.",
      limitacoes: "Contraindicada se efeito de massa ou coagulopatia. Punção traumática dificulta a leitura."
    },
    {
      nome: "Angio-TC de crânio",
      pedido: "Angiotomografia arterial de crânio (polígono de Willis) — HSA confirmada ou suspeita.",
      porQue: "Localizar o aneurisma e planejar tratamento.",
      esperar: "Aneurisma sacular (comunicante anterior, comunicante posterior, cerebral média).",
      interpretacao: "Negativa com HSA difusa → arteriografia digital.",
      limitacoes: "Aneurismas < 3 mm podem não aparecer."
    },
    {
      nome: "Laboratório e ECG",
      pedido: "Hemograma, TP/INR, TTPa, sódio, potássio, magnésio, glicemia, ureia, creatinina, troponina, tipagem sanguínea. ECG de 12 derivações.",
      porQue: "Coagulopatia, hiponatremia, lesão miocárdica neurogênica, preparo cirúrgico.",
      esperar: "Alterações de ST/T e QT longo são comuns.",
      interpretacao: "Sódio diário: hiponatremia associa-se a isquemia tardia.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Nimodipino",
      linha: "l1",
      dose: "60 mg",
      via: "VO ou SNE",
      intervalo: "4/4 h",
      duracao: "21 dias",
      monitorizacao: "PA (hipotensão)",
      contraindicacoes: "—",
      ajustes: "Se hipotensão: 30 mg de 2/2 h. Não usar a forma oral por via IV. Manter euvolemia"
    },
    {
      droga: "Controle da PA antes do tratamento do aneurisma",
      linha: "l1",
      dose: "Metoprolol 5 mg IV lento (repetir a cada 10 min, máx 15 mg) ou nitroprussiato 0,25–0,5 mcg/kg/min titulado",
      via: "IV",
      intervalo: "Conforme PA",
      duracao: "Até tratamento do aneurisma",
      monitorizacao: "PA a cada 5–15 min durante titulação",
      contraindicacoes: "Evitar hipotensão (piora perfusão cerebral)",
      ajustes: "AHA 2023 não define alvo numérico; na prática evita-se PAS > 160 mmHg até o aneurisma ser tratado, conforme o neurocirurgião"
    },
    {
      droga: "Analgesia",
      linha: "l1",
      dose: "Dipirona 1 g IV 6/6 h ou paracetamol 750 mg VO 6/6 h; se insuficiente, morfina 2–4 mg IV lento a cada 4 h ou fentanil",
      via: "IV / VO",
      intervalo: "Fixo + SN",
      duracao: "Conforme dor",
      monitorizacao: "Sedação, FR (opioide)",
      contraindicacoes: "AINE (risco hemorrágico)",
      ajustes: "Sedação excessiva prejudica a avaliação neurológica"
    },
    {
      droga: "Cristaloide isotônico (euvolemia)",
      linha: "l1",
      dose: "SF 0,9% ou cristaloide balanceado para manter euvolemia",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Durante a fase de risco",
      monitorizacao: "Balanço hídrico, sódio diário",
      contraindicacoes: "Hipervolemia profilática (\"triplo H\") não recomendada",
      ajustes: "Hiponatremia: não restringir líquidos; usar salina hipertônica ou fludrocortisona conforme equipe"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "AHA 2023: não melhora o desfecho funcional; não usar de rotina",
      ajustes: "Uso pontual e curto antes de tratamento muito tardio do aneurisma é decisão da neurocirurgia"
    },
    {
      droga: "Anticonvulsivante",
      linha: "adj",
      dose: "Levetiracetam 500–1.000 mg IV/VO 12/12 h",
      via: "IV ou VO",
      intervalo: "12/12 h",
      duracao: "Curta (dias), se profilaxia",
      monitorizacao: "Sonolência, irritabilidade",
      contraindicacoes: "Fenitoína profilática: evitar (pior desfecho cognitivo)",
      ajustes: "Tratar crise clínica sempre (ver ficha convulsao). Profilaxia curta pode ser considerada em alto risco. Ajuste renal do levetiracetam"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência monitorizada; neurocirurgia acionada",
      "Hidrocefalia sintomática → derivação ventricular externa"
    ],
    reavaliar: [
      "Glasgow, pupilas e déficit de 1/1 h",
      "Sódio diário, PA, glicemia, temperatura",
      "Do 3º ao 14º dia: novo déficit ou queda de consciência = isquemia tardia até prova em contrário"
    ],
    alta: [
      "TC normal ≤ 6 h do início (aparelho e laudo adequados) ou TC + líquor normais, cefaleia controlada e exame neurológico normal",
      "Orientar retorno imediato se nova cefaleia súbita ou sintoma neurológico"
    ],
    observacao: ["Cefaleia em trovoada em investigação (aguardando TC/líquor)"],
    internacao: ["Toda HSA confirmada: UTI neurológica em centro com neurocirurgia e neurorradiologia"],
    transferencia: ["Sem neurocirurgia: transferência imediata após via aérea, analgesia, controle de PA e nimodipino"]
  },
  prescricao: {
    hospitalar: "HEMORRAGIA SUBARACNÓIDEA — SALA DE EMERGÊNCIA (adulto)\n1. Dieta zero (aguardando procedimento); depois conforme teste de deglutição.\n2. Repouso absoluto, cabeceira 30°, ambiente calmo e pouco iluminado.\n3. SF 0,9% 1.000 mL IV a 80–100 mL/h (manter euvolemia; ajustar ao balanço).\n4. Nimodipino 30 mg — 2 comprimidos (60 mg) VO ou por SNE de 4/4 h por 21 dias (se PAS < 100: 30 mg de 2/2 h).\n5. Dipirona 1 g + água destilada 8 mL IV lento de 6/6 h (fixo).\n6. Morfina 10 mg/mL — 0,2–0,4 mL (2–4 mg) diluída em 10 mL de SF IV lento até de 4/4 h se dor persistente.\n7. Ondansetrona 4 mg IV lento de 8/8 h (fixo nas primeiras 24 h).\n8. Controle de PA (antes do tratamento do aneurisma; meta definida com a neurocirurgia, em geral PAS < 160): metoprolol 5 mg IV lento, repetir a cada 10 min até 15 mg; OU nitroprussiato de sódio 50 mg + SG 5% 250 mL IV em bomba 0,25–0,5 mcg/kg/min, titular.\n9. Lactulose 10 mL VO 12/12 h (evitar esforço evacuatório).\n10. Suspender antiagregantes e anticoagulantes; reverter se em uso (ver ficha avc-hemorragico).\n11. Compressão pneumática intermitente em MMII; heparina profilática só após tratamento do aneurisma.\n12. Cuidados: Glasgow, pupilas e PA de 1/1 h; monitor cardíaco; balanço hídrico; sódio diário; glicemia capilar de 6/6 h; temperatura (dipirona se ≥ 37,8 °C). Avisar se queda de Glasgow, nova cefaleia súbita, anisocoria ou novo déficit."
  },
  orientacoesRetorno: [
    "Se a investigação foi normal: procurar emergência imediatamente se a dor de cabeça súbita voltar, ou se houver desmaio, convulsão, vômitos, fraqueza ou confusão",
    "Após HSA tratada: não fumar, controlar a pressão, evitar cocaína e álcool em excesso",
    "Não usar anti-inflamatórios ou AAS sem orientação médica",
    "Retornos com neurocirurgia para controle de imagem do aneurisma; familiares de 1º grau podem precisar de rastreio (perguntar ao especialista)"
  ],
  tabelas: [
    {
      titulo: "Regra de Ottawa para HSA (alerta, ≥ 15 anos, cefaleia não traumática com pico em até 1 h)",
      colunas: ["Investigar se qualquer um presente"],
      linhas: [
        ["Idade ≥ 40 anos"],
        ["Dor ou rigidez de nuca"],
        ["Perda de consciência testemunhada"],
        ["Início durante esforço"],
        ["Cefaleia em trovoada (pico instantâneo)"],
        ["Limitação da flexão do pescoço ao exame"]
      ],
      nota: "Não se aplica a déficit neurológico novo, aneurisma ou HSA prévios, tumor cerebral ou cefaleias recorrentes semelhantes (≥ 3 episódios em 6 meses)."
    }
  ],
  fontes: [
    "AHA/ASA — 2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage (Stroke, 2023)",
    "Perry JJ et al. — Ottawa SAH Rule (JAMA, 2013)",
    "Neurocritical Care Society — Guidelines for the management of aSAH (2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
