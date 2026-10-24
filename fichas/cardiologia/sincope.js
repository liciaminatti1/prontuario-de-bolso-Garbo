// Síncope no PS: estratificação de risco
registrarFicha({
  id: "sincope",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Síncope: avaliação e estratificação de risco",
  resumo: "Perda transitória de consciência por hipoperfusão cerebral, de início rápido, curta duração e recuperação completa espontânea. Separar reflexa/ortostática (baixo risco) de cardíaca (alto risco).",
  palavrasChave: "sincope desmaio perda de consciencia lipotimia vasovagal hipotensao ortostatica sincope cardiaca canadian syncope risk score esc arritmia estenose aortica",
  critico: {
    tempo: "ECG em todos na chegada",
    texto: "ECG de 12 derivações, PA deitado e em pé, glicemia e exame físico dirigido em todos. Síncope ao esforço, deitado, com palpitação prévia, cardiopatia ou ECG alterado = alto risco: monitor e internação."
  },
  alarmes: [
    "Síncope durante esforço ou em decúbito",
    "Palpitação súbita imediatamente antes; sem pródromos",
    "Cardiopatia estrutural, IC, FE reduzida, IAM prévio, Chagas",
    "História familiar de morte súbita < 40 anos",
    "ECG: BAV 2º grau Mobitz II ou BAV total, bradicardia < 40 bpm, pausas > 3 s, TV, QRS largo, pré-excitação, QTc longo ou curto, Brugada tipo 1, isquemia aguda",
    "PAS < 90 mmHg persistente, sopro sistólico (estenose aórtica), dispneia, dor torácica, cefaleia súbita, sangramento",
    "Trauma relevante pela queda"
  ],
  condutaInicial: [
    "Confirmar que foi síncope (e não convulsão, hipoglicemia, intoxicação, AVC, queda mecânica)",
    "ECG de 12 derivações, glicemia capilar, sinais vitais com PA ortostática (deitado e após 1 e 3 min em pé)",
    "Anamnese dirigida: posição, gatilho, pródromos, esforço, palpitações, duração, recuperação, testemunhas, medicações",
    "Exame: sopros, sinais de IC, assimetria de PA, neurológico, sinais de sangramento (toque retal se suspeita)",
    "Exames conforme suspeita: hemograma, eletrólitos, troponina, beta-hCG; D-dímero/angio-TC se suspeita de TEP",
    "Estratificar (ESC 2018 e Canadian Syncope Risk Score) e decidir: alta, observação com monitor ou internação"
  ],
  fataisExcluir: [
    "Arritmia (TV, BAV total, pausas, síndromes elétricas)",
    "Estenose aórtica grave, cardiomiopatia hipertrófica",
    "TEP, dissecção de aorta, tamponamento",
    "SCA",
    "Hemorragia oculta (digestiva, gravidez ectópica rota, AAA)",
    "Hemorragia subaracnoide"
  ],
  proximaDecisao: "Só baixo risco (reflexa ou ortostática típica, ECG normal, sem cardiopatia) → alta com orientação. Algum critério de alto risco → monitor e investigação no hospital (internação ou unidade de observação). Indeterminado → observação com monitor 6–24 h ± Holter/monitor de eventos ambulatorial.",
  clinica: {
    anamnese: [
      "Gatilho: em pé muito tempo, calor, dor, emoção, visão de sangue (vasovagal); tosse, micção, defecação (situacional); levantar-se (ortostática)",
      "Pródromos: calor, náusea, sudorese, visão escura (reflexa); ausência de pródromos ou palpitação (arrítmica)",
      "Esforço ou decúbito (cardíaca)",
      "Medicações: anti-hipertensivos, diuréticos, nitratos, alfabloqueadores, drogas que alargam QT, antiarrítmicos",
      "Perda de sangue, vômitos, diarreia, desidratação; DM com neuropatia, Parkinson",
      "Testemunha: duração (< 1 min), movimentos, cor da pele, confusão pós-evento (convulsão)"
    ],
    exameFisico: [
      "PA ortostática: queda da PAS ≥ 20 ou PAD ≥ 10 mmHg, ou PAS < 90 mmHg em pé com sintomas",
      "Ausculta: sopro de estenose aórtica, cardiomiopatia hipertrófica",
      "Sinais de IC, PA nos dois braços",
      "Neurológico, mordedura de língua lateral, liberação esfincteriana (convulsão)",
      "Palidez, toque retal se suspeita de sangramento"
    ],
    diferenciais: [
      { dx: "Crise convulsiva", pista: "Mordedura lateral de língua, confusão prolongada, movimentos > 15 s, aura" },
      { dx: "Hipoglicemia", pista: "DM em insulina/sulfonilureia; recuperação só com glicose" },
      { dx: "AIT/AVC vertebrobasilar", pista: "Déficit focal; perda de consciência isolada raramente é AIT" },
      { dx: "Pseudossíncope psicogênica", pista: "Episódios longos e frequentes, olhos fechados, sem alteração hemodinâmica" },
      { dx: "Intoxicação, queda mecânica", pista: "História, sem perda de consciência real" }
    ],
    gravidade: [
      "Alto risco (ESC 2018): dor torácica, dispneia, dor abdominal ou cefaleia nova; síncope no esforço ou deitado; palpitação súbita antes; cardiopatia estrutural grave ou coronariopatia; PAS < 90; sangramento GI; bradicardia < 40 persistente; sopro não diagnosticado; ECG de alto risco",
      "Baixo risco (ESC 2018): pródromos típicos de reflexa, após visão/som/odor/dor desagradável, em pé prolongado, refeição, tosse/micção, ao levantar-se; longa história de síncopes semelhantes; sem cardiopatia; exame e ECG normais",
      "Canadian Syncope Risk Score (CSRS): ver tabela; aplicável a adultos após avaliação no PS"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações na chegada (repetir se sintomas).",
      porQue: "Principal ferramenta para síncope arrítmica.",
      esperar: "Normal na maioria das reflexas.",
      interpretacao: "BAV avançado, pausas, TV, QT longo, Brugada, pré-excitação, isquemia, QRS > 130 ms → alto risco.",
      limitacoes: "Arritmia intermitente pode não aparecer: monitor/Holter."
    },
    {
      nome: "Laboratório dirigido",
      pedido: "Glicemia capilar; hemograma; sódio, potássio, magnésio, creatinina; troponina se suspeita cardíaca; beta-hCG em mulheres em idade fértil; D-dímero se suspeita de TEP de baixa/intermediária probabilidade.",
      porQue: "Anemia/sangramento, distúrbios eletrolíticos, SCA, gestação.",
      esperar: "Normais na síncope reflexa.",
      interpretacao: "Troponina elevada aumenta o risco (CSRS).",
      limitacoes: "Exames de rotina sem suspeita têm baixo rendimento."
    },
    {
      nome: "Monitorização e investigação cardíaca",
      pedido: "Monitor cardíaco contínuo (alto risco); ecocardiograma se sopro ou suspeita de cardiopatia; Holter 24 h / monitor de eventos conforme frequência dos episódios.",
      porQue: "Diagnóstico de arritmia e cardiopatia estrutural.",
      esperar: "—",
      interpretacao: "Correlação sintoma–ritmo confirma etiologia.",
      limitacoes: "Tilt test e estudo eletrofisiológico: eletivos, pela cardiologia."
    },
    {
      nome: "Neuroimagem e EEG",
      pedido: "TC de crânio só se trauma craniano relevante, déficit focal ou cefaleia súbita.",
      porQue: "—",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Baixíssimo rendimento na síncope sem achados neurológicos."
    }
  ],
  tratamento: [
    {
      droga: "Hidratação",
      linha: "l1",
      dose: "SF 0,9% 500–1.000 mL se hipovolemia/ortostatismo",
      via: "IV ou VO",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "PA ortostática após",
      contraindicacoes: "IC congestiva",
      ajustes: "Tratar a causa (sangramento, diarreia, diurético)"
    },
    {
      droga: "Manobras de contrapressão física e educação (reflexa)",
      linha: "l1",
      dose: "Ao sentir pródromos: cruzar pernas e contrair, apertar as mãos, tensionar braços; deitar com pernas elevadas",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ingestão de água 2–3 L/dia e sal liberal se sem HAS/IC"
    },
    {
      droga: "Revisão de medicações (ortostática)",
      linha: "l1",
      dose: "Reduzir/suspender anti-hipertensivos excessivos, diuréticos, alfabloqueadores, nitratos",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "PA em pé no retorno",
      contraindicacoes: "—",
      ajustes: "Fludrocortisona/midodrina: decisão ambulatorial do especialista"
    },
    {
      droga: "Arritmia identificada",
      linha: "l1",
      dose: "Ver fichas bradicardias e taquicardias",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Monitor",
      contraindicacoes: "—",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "ECG, PA ortostática, glicemia, estratificação",
      "Alto risco: monitor contínuo"
    ],
    reavaliar: [
      "Observação com monitor 6–24 h nos casos indeterminados",
      "Repetir ECG se novos sintomas"
    ],
    alta: [
      "Síncope reflexa ou ortostática com baixo risco (ESC) ou CSRS muito baixo/baixo",
      "Orientações, retorno na UBS; cardiologia se episódios recorrentes"
    ],
    observacao: [
      "CSRS de risco médio ou ESC sem alto risco claro: monitor 6–24 h"
    ],
    internacao: [
      "Critério de alto risco ESC ou CSRS alto/muito alto",
      "Causa grave identificada (arritmia, estenose aórtica, TEP, sangramento)"
    ],
    transferencia: [
      "Necessidade de marca-passo, eletrofisiologia ou cirurgia sem disponibilidade local"
    ]
  },
  prescricao: {
    ambulatorial: "ORIENTAÇÕES (síncope reflexa de baixo risco)\n1. Beber 2 a 3 litros de água por dia, se não houver restrição médica.\n2. Ao sentir tontura, calor, enjoo ou visão escurecendo: deitar e elevar as pernas, ou sentar; cruzar as pernas contraindo as coxas e apertar as mãos uma contra a outra.\n3. Evitar ficar muito tempo em pé parado, ambientes muito quentes e levantar-se de repente.\n4. Não dirigir até a reavaliação, se os desmaios forem recorrentes ou sem aviso.",
    hospitalar: "SÍNCOPE DE ALTO RISCO — OBSERVAÇÃO/INTERNAÇÃO\n1. Dieta livre (ou zero se programação de exames).\n2. Monitor cardíaco contínuo; PA e FC de 2/2 h; PA ortostática 1×/dia.\n3. Acesso venoso salinizado.\n4. SF 0,9% 500 mL IV em 30 min se hipotensão ortostática/desidratação (reavaliar).\n5. Suspender temporariamente anti-hipertensivos, diuréticos e drogas que prolongam o QT.\n6. Exames: hemograma, Na, K, Mg, creatinina, troponina (0 e 3 h), ECG seriado; ecocardiograma.\n7. Avisar se: FC < 40 ou > 120, pausas, TV, novo episódio de síncope."
  },
  orientacoesRetorno: [
    "A maioria dos desmaios é benigna (reflexo), mas volte se o desmaio acontecer durante esforço, deitado, sem aviso ou com palpitação",
    "Procurar o PS imediatamente se dor no peito, falta de ar, palpitações fortes, fraqueza em um lado do corpo ou desmaio com machucado",
    "Não dirigir, nadar sozinho ou trabalhar em altura até reavaliação, se os desmaios forem sem aviso",
    "Levar a lista de remédios à consulta na UBS em até 1–2 semanas"
  ],
  tabelas: [
    {
      titulo: "Canadian Syncope Risk Score (CSRS)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Predisposição a vasovagal (ambiente quente/lotado, em pé prolongado, medo, emoção, dor)", "−1"],
        ["História de cardiopatia (coronariopatia, FA/flutter, IC, valvopatia)", "+1"],
        ["Qualquer PAS < 90 ou > 180 mmHg no PS", "+2"],
        ["Troponina elevada (> percentil 99)", "+2"],
        ["Eixo do QRS anormal (< −30° ou > 100°)", "+1"],
        ["QRS > 130 ms", "+1"],
        ["QTc > 480 ms", "+2"],
        ["Diagnóstico no PS: síncope vasovagal", "−2"],
        ["Diagnóstico no PS: síncope cardíaca", "+2"]
      ],
      nota: "Total −3 a 11. Risco de evento grave em 30 dias: muito baixo (−3 a −2), baixo (−1 a 0), médio (1 a 3), alto (4 a 5), muito alto (≥ 6). Validado em adultos; não substitui o julgamento clínico."
    }
  ],
  fontes: [
    "ESC — Guidelines for the diagnosis and management of syncope (2018)",
    "ACC/AHA/HRS — Guideline for the Evaluation and Management of Patients With Syncope (2017)",
    "Thiruganasambandamoorthy V et al. — Canadian Syncope Risk Score, CMAJ (2016); validação externa JAMA Intern Med (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
