// Hemorragia digestiva alta (varicosa e não varicosa)
registrarFicha({
  id: "hemorragia-digestiva-alta",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hemorragia digestiva alta (varicosa e não varicosa)",
  resumo: "Hematêmese, vômito em borra de café ou melena (sangramento proximal ao ângulo de Treitz). Estratificar com Glasgow-Blatchford, ressuscitar, IBP e EDA; em cirrótico, tratar como varicosa até prova em contrário.",
  palavrasChave: "hda hemorragia digestiva alta hematemese melena borra de cafe ulcera peptica varizes esofagicas cirrose glasgow blatchford forrest omeprazol terlipressina octreotida ceftriaxona eda endoscopia ligadura elastica mallory weiss",
  critico: {
    tempo: "EDA em até 24 h (varicosa: 12 h)",
    texto: "Ressuscitar com transfusão restritiva (Hb alvo 7–9 g/dL). Suspeita de varizes: terlipressina + ceftriaxona antes da EDA. Não varicosa: IBP em dose alta e EDA em até 24 h."
  },
  alarmes: [
    "Choque: PAS < 90 mmHg, FC > 100 bpm, índice de choque (FC/PAS) > 1, lactato elevado",
    "Hematêmese volumosa ou sangue vivo pela SNG/vômito",
    "Cirrose ou estigmas de hepatopatia (sangramento varicoso: mortalidade alta)",
    "Rebaixamento de consciência (risco de aspiração; pensar em encefalopatia hepática)",
    "Anticoagulante ou antiagregante em uso",
    "Hb < 7 g/dL ou queda ≥ 2 g/dL",
    "Ressangramento após tratamento endoscópico"
  ],
  condutaInicial: [
    "Monitor, O₂ se SpO₂ < 92%, 2 acessos calibrosos (16–18 G); proteger via aérea se hematêmese maciça ou Glasgow ≤ 8",
    "Coletar: tipagem e prova cruzada, hemograma, ureia, creatinina, TP/INR, TTPa, eletrólitos, função hepática, lactato",
    "Cristaloide em alíquotas de 500 mL até perfusão adequada (evitar excesso, principalmente no cirrótico)",
    "Transfusão restritiva: concentrado de hemácias se Hb < 7 g/dL (alvo 7–9); se doença cardiovascular, Hb < 8 g/dL (alvo ≥ 10). Varicosa: alvo 7–8 g/dL",
    "Calcular Glasgow-Blatchford: 0–1 sem outros riscos → EDA ambulatorial precoce",
    "Não varicosa: omeprazol 80 mg IV agora",
    "Suspeita de varizes (cirrose, hipertensão portal): terlipressina 2 mg IV agora + ceftriaxona 1 g IV",
    "Suspender anticoagulante e AINE; reversão conforme gravidade (ver ficha coagulopatias-urgencia)",
    "Acionar endoscopia; sem EDA no serviço → regulação após estabilização inicial"
  ],
  fataisExcluir: [
    "Sangramento varicoso",
    "Úlcera com sangramento ativo ou vaso visível",
    "Fístula aortoentérica (prótese de aorta prévia, sangramento sentinela)",
    "Perfuração (dor intensa, peritonite, pneumoperitônio)",
    "Síndrome coronariana aguda desencadeada pela anemia",
    "Hemorragia baixa volumosa ou sangramento nasal/oral deglutido (diferencial)"
  ],
  proximaDecisao: "Após EDA: úlcera com estigma de alto risco (Forrest Ia, Ib, IIa, IIb) tratada → IBP IV em dose alta por 72 h, dieta em 24 h se estável, pesquisar H. pylori. Baixo risco (Forrest IIc, III) → IBP VO e dieta precoce. Varicosa → vasoativo por 2–5 dias, ceftriaxona até 7 dias, iniciar betabloqueador não seletivo após o período agudo e programar ligadura. Ressangramento → repetir EDA; falha → TIPS, balão ou prótese esofágica.",
  clinica: {
    anamnese: [
      "Hematêmese, borra de café, melena; volume e início",
      "Síncope, tontura postural, dor torácica, dispneia",
      "Cirrose, etilismo, hepatites, varizes conhecidas, sangramento prévio",
      "AINE, AAS, clopidogrel, anticoagulantes, ISRS, corticoide",
      "Úlcera prévia, H. pylori, dispepsia, vômitos repetidos antes do sangue (Mallory-Weiss)",
      "Prótese de aorta (fístula aortoentérica), neoplasia, perda de peso",
      "Sulfato ferroso e bismuto escurecem as fezes (não é melena)"
    ],
    exameFisico: [
      "PA, FC, perfusão, débito urinário, PA postural se estável",
      "Estigmas de hepatopatia: icterícia, ascite, aranhas vasculares, eritema palmar, esplenomegalia",
      "Toque retal: melena confirma o sangramento",
      "Abdome: peritonite sugere perfuração",
      "Orofaringe e nariz (sangue deglutido)"
    ],
    diferenciais: [
      { dx: "Úlcera péptica", pista: "Causa mais comum; AINE, H. pylori, dor epigástrica" },
      { dx: "Varizes esofagogástricas", pista: "Cirrose, esplenomegalia, plaquetopenia, ascite" },
      { dx: "Síndrome de Mallory-Weiss", pista: "Vômitos repetidos ou álcool antes da hematêmese" },
      { dx: "Esofagite / gastrite erosiva", pista: "Sangramento geralmente pequeno" },
      { dx: "Neoplasia gástrica ou esofágica", pista: "Perda de peso, disfagia, anemia crônica" },
      { dx: "Lesão de Dieulafoy / angiodisplasia", pista: "Sangramento volumoso recorrente sem causa aparente" },
      { dx: "Hemorragia digestiva baixa", pista: "Hematoquezia sem instabilidade; ureia normal" }
    ],
    gravidade: [
      "Glasgow-Blatchford 0–1: baixo risco (alta com EDA ambulatorial precoce)",
      "Glasgow-Blatchford ≥ 2: internar e fazer EDA",
      "Instabilidade apesar de ressuscitação: EDA urgente após estabilização (unidade com UTI)",
      "Ureia elevada desproporcional à creatinina sugere sangramento alto"
    ]
  },
  exames: [
    {
      nome: "Laboratório inicial",
      pedido: "Tipagem ABO/Rh e prova cruzada (reservar 2 concentrados de hemácias). Hemograma, ureia, creatinina, sódio, potássio, TP/INR, TTPa, TGO, TGP, bilirrubinas, albumina, lactato.",
      porQue: "Gravidade, transfusão, Glasgow-Blatchford, função hepática.",
      esperar: "Hb pode estar normal na primeira hora (hemodiluição ainda não ocorreu).",
      interpretacao: "Repetir Hb a cada 4–6 h nas primeiras 24 h. Ureia alta com creatinina normal favorece sangramento alto.",
      limitacoes: "INR do cirrótico não reflete risco de sangramento; não corrigir com plasma."
    },
    {
      nome: "Endoscopia digestiva alta (EDA)",
      pedido: "Endoscopia digestiva alta de urgência — hemorragia digestiva alta [varicosa suspeita / não varicosa], Glasgow-Blatchford [ ], estabilidade hemodinâmica [ ].",
      porQue: "Diagnóstico, estratificação (Forrest) e tratamento endoscópico.",
      esperar: "Em até 24 h após ressuscitação (não varicosa); em até 12 h (varicosa).",
      interpretacao: "Forrest Ia/Ib (sangramento ativo), IIa (vaso visível), IIb (coágulo aderido): alto risco. IIc (hematina), III (base limpa): baixo risco.",
      limitacoes: "EDA muito precoce (< 6 h) não melhora desfecho na não varicosa; fazer após estabilizar."
    },
    {
      nome: "Angiotomografia",
      pedido: "Angiotomografia de abdome (fase arterial e portal) — sangramento digestivo persistente sem localização endoscópica.",
      porQue: "Localizar sangramento e guiar embolização quando a EDA falha ou não é possível.",
      esperar: "—",
      interpretacao: "Extravasamento de contraste → radiologia intervencionista ou cirurgia.",
      limitacoes: "Contraste iodado; detecta sangramento ativo apenas."
    },
    {
      nome: "Outros",
      pedido: "ECG e troponina se ≥ 50 anos, dor torácica ou Hb < 8 g/dL. Pesquisa de H. pylori (biópsia na EDA ou teste após o episódio).",
      porQue: "Isquemia por anemia; erradicação reduz ressangramento.",
      esperar: "—",
      interpretacao: "Biópsia negativa durante sangramento ativo pode ser falso-negativa: repetir teste depois.",
      limitacoes: "IBP reduz sensibilidade dos testes de H. pylori."
    }
  ],
  tratamento: [
    {
      droga: "Omeprazol IV (não varicosa)",
      linha: "l1",
      dose: "Antes da EDA: 80 mg IV, depois 40 mg IV 12/12 h. Após terapia endoscópica de alto risco: 80 mg em bolus + 8 mg/h por 72 h (ou 40 mg IV 12/12 h em dose intermitente)",
      via: "IV",
      intervalo: "Bolus + infusão contínua ou 12/12 h",
      duracao: "72 h IV; depois omeprazol 40 mg VO 12/12 h até 14 dias e 1×/dia por 6–8 semanas",
      monitorizacao: "Ressangramento, Hb",
      contraindicacoes: "—",
      ajustes: "Infusão: omeprazol 80 mg em 100 mL de SF 0,9% a 10 mL/h (8 mg/h), trocar a solução a cada 10 h. Pantoprazol IV na mesma dose é alternativa"
    },
    {
      droga: "Terlipressina (varicosa)",
      linha: "l1",
      dose: "2 mg IV (1 mg se < 50 kg); após controle do sangramento, 1 mg",
      via: "IV em bolus",
      intervalo: "4/4 h",
      duracao: "2–5 dias",
      monitorizacao: "ECG, isquemia periférica e intestinal, sódio (hiponatremia), SpO₂",
      contraindicacoes: "Doença coronariana ou arterial periférica isquêmica, arritmia grave",
      ajustes: "Iniciar antes da EDA, já na suspeita. Frasco de 1 mg: reconstituir no diluente e aplicar em bolus lento"
    },
    {
      droga: "Octreotida (varicosa — alternativa)",
      linha: "alt",
      dose: "50 mcg IV em bolus + 50 mcg/h",
      via: "IV contínua",
      intervalo: "Contínuo",
      duracao: "2–5 dias",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Ampola 0,1 mg/mL. Ex.: 500 mcg em 250 mL de SF 0,9% (2 mcg/mL) a 25 mL/h. Somatostatina 250 mcg em bolus + 250 mcg/h é outra opção"
    },
    {
      droga: "Ceftriaxona (profilaxia no cirrótico)",
      linha: "l1",
      dose: "1 g",
      via: "IV",
      intervalo: "24/24 h",
      duracao: "Até 7 dias (suspender antes se sangramento resolvido e sem infecção)",
      monitorizacao: "Sinais de infecção, PBE",
      contraindicacoes: "Anafilaxia a cefalosporina",
      ajustes: "Indicada em todo cirrótico com HDA de qualquer causa"
    },
    {
      droga: "Concentrado de hemácias",
      linha: "l1",
      dose: "1 unidade por vez e reavaliar Hb",
      via: "IV",
      intervalo: "Conforme Hb e hemodinâmica",
      duracao: "—",
      monitorizacao: "Hb, sinais de sobrecarga",
      contraindicacoes: "—",
      ajustes: "Gatilho Hb < 7 g/dL (alvo 7–9); doença cardiovascular Hb < 8 (alvo ≥ 10); varicosa alvo 7–8. Hemorragia maciça: protocolo de transfusão maciça"
    },
    {
      droga: "Eritromicina (pró-cinético antes da EDA)",
      linha: "adj",
      dose: "250 mg",
      via: "IV em 30 min",
      intervalo: "Dose única, 30–120 min antes da EDA",
      duracao: "—",
      monitorizacao: "QTc",
      contraindicacoes: "QT longo",
      ajustes: "Melhora a visualização. Usar se disponível na forma IV"
    },
    {
      droga: "Lactulose (cirrótico com HDA)",
      linha: "adj",
      dose: "20–30 mL VO/SNG",
      via: "VO ou SNG",
      intervalo: "Até 2–3 evacuações pastosas/dia",
      duracao: "Durante a internação",
      monitorizacao: "Nível de consciência",
      contraindicacoes: "Obstrução intestinal",
      ajustes: "Remove sangue do intestino e previne encefalopatia (Baveno VII)"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não reduz mortalidade na HDA e aumenta trombose (HALT-IT 2020)",
      ajustes: "Não usar de rotina"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência: ressuscitação, IBP ou terlipressina + ceftriaxona",
      "Contato com endoscopia"
    ],
    reavaliar: [
      "Sinais vitais de 1/1 h, diurese, Hb de 4/4–6/6 h",
      "Ressangramento: nova hematêmese, melena fresca, instabilidade, queda de Hb ≥ 2 g/dL"
    ],
    alta: [
      "Glasgow-Blatchford 0–1, sem comorbidade grave, com EDA ambulatorial precoce garantida",
      "Após EDA de baixo risco: dieta tolerada, Hb estável, IBP VO e retorno",
      "Reintroduzir anticoagulante (geralmente em 7 dias) e AAS de prevenção secundária assim que hemostasia assegurada, com IBP"
    ],
    observacao: [
      "Glasgow-Blatchford baixo sem EDA imediata disponível: observar e repetir Hb"
    ],
    internacao: [
      "Glasgow-Blatchford ≥ 2",
      "UTI: choque, varicosa, hemorragia maciça, comorbidade grave, ressangramento"
    ],
    transferencia: [
      "Sem endoscopia 24 h: regulação para serviço com EDA, UTI, radiologia intervencionista e cirurgia, após via aérea, acesso e drogas iniciadas"
    ]
  },
  prescricao: {
    hospitalar: "HEMORRAGIA DIGESTIVA ALTA — ADULTO (peso: ___ kg)\n1. Dieta zero até EDA.\n2. Monitor, oximetria, cabeceira elevada 30°; decúbito lateral se vômitos. 2 acessos venosos calibrosos.\n3. Ringer lactato ou SF 0,9% 500 mL IV em 15–30 min se hipotensão; reavaliar e repetir (evitar excesso no cirrótico).\n4. Reservar 2 concentrados de hemácias. Transfundir 1 unidade se Hb < 7 g/dL (< 8 se cardiopata) e reavaliar.\n5. NÃO VARICOSA: omeprazol 80 mg IV agora; depois 40 mg IV de 12/12 h até a EDA.\n   Após EDA com estigma de alto risco: omeprazol 80 mg em 100 mL de SF 0,9% IV a 10 mL/h (8 mg/h), trocar a cada 10 h, por 72 h (ou 40 mg IV de 12/12 h).\n6. SUSPEITA DE VARIZES (cirrose):\n   - Terlipressina 2 mg IV em bolus agora e de 4/4 h (1 mg se < 50 kg); reduzir para 1 mg de 4/4 h após controle; manter 2–5 dias.\n   - Ceftriaxona 1 g IV de 24/24 h por até 7 dias.\n   - Lactulose 20 mL VO/SNG de 8/8 h, ajustar para 2–3 evacuações pastosas/dia.\n   - Omeprazol 80 mg IV até a EDA (suspender após EDA se sangramento varicoso puro).\n7. Ondansetrona 4 mg IV lento de 8/8 h se náusea ou vômito.\n8. Suspender AINE, anticoagulante e anti-hipertensivos. Reversão de anticoagulante se sangramento grave (ver ficha coagulopatias-urgencia).\n9. Profilaxia de TEV mecânica (compressão pneumática) até hemostasia; não usar heparina na fase ativa.\n10. Controles: PA, FC, SpO₂ de 1/1 h; diurese; Hb de 6/6 h; glicemia; comunicar nova hematêmese, melena, PAS < 90 ou FC > 110.\n11. EDA em até 24 h (varicosa: até 12 h).",
    ambulatorial: "ALTA APÓS HDA NÃO VARICOSA (úlcera)\nUSO ORAL\n1. Omeprazol 40 mg ---------------------------- 56 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, em jejum e antes do jantar, por 14 dias; depois 1 cápsula ao dia em jejum por mais 6 semanas.\n2. Tratamento de H. pylori se positivo (ver ficha ulcera-peptica-hpylori).\n\nNÃO USAR: anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida, cetoprofeno), AAS sem orientação médica.\nPara dor: dipirona 500 mg, 1 a 2 comprimidos de 6 em 6 horas se necessário."
  },
  orientacoesRetorno: [
    "Não tomar anti-inflamatórios nem AAS por conta própria; levar a lista de remédios à consulta",
    "Tomar o omeprazol em jejum, todos os dias, pelo tempo indicado",
    "Voltar imediatamente se: vômito com sangue ou borra de café, fezes pretas como piche, desmaio, tontura ao levantar, palidez ou falta de ar",
    "Quem tem cirrose: tomar o betabloqueador (propranolol ou carvedilol) todos os dias e fazer as ligaduras agendadas; não beber álcool",
    "Fazer o exame de controle do H. pylori e a endoscopia de controle quando indicados",
    "Consulta na UBS em até 1 semana para hemograma e ajuste dos remédios"
  ],
  tabelas: [
    {
      titulo: "Escore de Glasgow-Blatchford",
      colunas: ["Variável", "Valor", "Pontos"],
      linhas: [
        ["Ureia (mg/dL)", "39–47 / 48–59 / 60–149 / ≥ 150", "2 / 3 / 4 / 6"],
        ["Hb homem (g/dL)", "12–12,9 / 10–11,9 / < 10", "1 / 3 / 6"],
        ["Hb mulher (g/dL)", "10–11,9 / < 10", "1 / 6"],
        ["PAS (mmHg)", "100–109 / 90–99 / < 90", "1 / 2 / 3"],
        ["FC ≥ 100 bpm", "Sim", "1"],
        ["Melena", "Sim", "1"],
        ["Síncope", "Sim", "2"],
        ["Hepatopatia", "Sim", "2"],
        ["Insuficiência cardíaca", "Sim", "2"]
      ],
      nota: "Ureia convertida do original em mmol/L (6,5–8 / 8–10 / 10–25 / ≥ 25). Escore 0–1: candidato a manejo ambulatorial (ESGE 2021). Escore alto indica necessidade de intervenção."
    },
    {
      titulo: "Classificação de Forrest (úlcera) e conduta",
      colunas: ["Achado", "Risco", "Conduta"],
      linhas: [
        ["Ia sangramento em jato / Ib em babação", "Alto", "Terapia endoscópica + IBP IV dose alta 72 h"],
        ["IIa vaso visível", "Alto", "Terapia endoscópica + IBP IV dose alta 72 h"],
        ["IIb coágulo aderido", "Intermediário/alto", "Considerar remoção e tratamento + IBP IV dose alta"],
        ["IIc hematina plana", "Baixo", "IBP VO, dieta precoce"],
        ["III base limpa", "Baixo", "IBP VO, dieta precoce, alta precoce"]
      ]
    }
  ],
  fontes: [
    "ESGE — Endoscopic diagnosis and management of nonvariceal upper GI hemorrhage: Guideline update (2021)",
    "ACG — Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding (Laine et al., 2021)",
    "Baveno VII — Renewing consensus in portal hypertension (de Franchis et al., J Hepatol 2022)",
    "AASLD — Risk stratification and management of portal hypertension and varices in cirrhosis: Practice Guidance (Kaplan et al., 2024)",
    "HALT-IT Trial Collaborators — Tranexamic acid in GI bleeding (Lancet, 2020)",
    "Ministério da Saúde — Guia para uso de hemocomponentes, 2ª ed. (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
