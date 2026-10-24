// Miastenia gravis e crise miastênica
registrarFicha({
  id: "crise-miastenica",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Miastenia gravis e crise miastênica",
  resumo: "Doença autoimune da junção neuromuscular: fraqueza flutuante que piora com o esforço (ptose, diplopia, disfagia, fraqueza proximal). Crise miastênica = fraqueza respiratória ou bulbar que exige (ou ameaça exigir) ventilação.",
  palavrasChave: "miastenia gravis crise miastenica crise colinergica ptose diplopia disfagia piridostigmina mestinon imunoglobulina plasmaferese timoma timectomia anti-receptor de acetilcolina capacidade vital",
  critico: {
    tempo: "CVF seriada; não espere hipoxemia",
    texto: "Fraqueza bulbar ou respiratória = crise. Medir CVF/contagem em uma respiração; CVF < 20 mL/kg ou piora → UTI e intubação. Tratar com imunoglobulina IV ou plasmaférese e retirar o gatilho (infecção, drogas)."
  },
  alarmes: [
    "Dispneia, ortopneia, voz anasalada, engasgos, tosse fraca, fraqueza cervical (sustentar a cabeça)",
    "CVF < 20 mL/kg, PImáx menos negativa que −30 cmH₂O, PEmáx < 40 cmH₂O",
    "Contagem em uma respiração < 20",
    "Infecção, cirurgia recente ou droga nova que piora a miastenia",
    "Muscarínicos exuberantes (salivação, diarreia, bradicardia, miose) com piora da fraqueza: crise colinérgica (excesso de piridostigmina)"
  ],
  condutaInicial: [
    "Monitor, SpO₂, CVF (ou contagem em uma respiração), PImáx/PEmáx se disponíveis, gasometria",
    "Dieta zero e cabeceira elevada se disfagia; aspirar secreções",
    "UTI e VNI (BiPAP) precoce se fraqueza respiratória sem hipercapnia importante e sem disfunção bulbar grave; IOT se falha ou bulbar grave",
    "Imunoglobulina IV 2 g/kg (divididos em 2–5 dias) OU plasmaférese",
    "Buscar e tratar gatilho (infecção) com antibiótico seguro; revisar e suspender drogas que pioram a miastenia",
    "Iniciar/ajustar corticoide em conjunto com o neurologista (pode piorar nos primeiros dias)"
  ],
  fataisExcluir: [
    "Insuficiência respiratória (hipercapnia e hipoxemia são tardias)",
    "Aspiração pulmonar / pneumonia",
    "Crise colinérgica",
    "Diferenciais: Guillain-Barré, botulismo, AVC de tronco, Lambert-Eaton, miopatias, hipocalemia"
  ],
  proximaDecisao: "Se em VM ou com fraqueza bulbar grave: suspender temporariamente a piridostigmina (aumenta secreções) e reintroduzir na melhora. Melhora em geral começa após 3–7 dias de imunoterapia; manter corticoide e planejar imunossupressor poupador (azatioprina) e avaliação de timoma (TC de tórax).",
  clinica: {
    anamnese: [
      "Ptose, visão dupla, piora no fim do dia ou com esforço",
      "Dificuldade para mastigar, engolir, falar; regurgitação nasal",
      "Falta de ar deitado; tosse fraca",
      "Gatilhos: infecção, cirurgia, gestação/puerpério, redução de imunossupressor, drogas novas (antibióticos, betabloqueador, magnésio, contraste iodado, inibidores de checkpoint)",
      "Uso e dose da piridostigmina (última tomada)"
    ],
    exameFisico: [
      "Ptose fatigável (olhar para cima por 60 s), diplopia",
      "Força cervical (flexão), força proximal após repetição",
      "Voz, tosse, deglutição de água",
      "Contagem em voz alta numa única respiração; uso de musculatura acessória, respiração paradoxal",
      "Reflexos e sensibilidade normais (diferencia de neuropatias)",
      "Teste do gelo: melhora da ptose após 2 min de gelo sobre a pálpebra"
    ],
    diferenciais: [
      { dx: "Guillain-Barré", pista: "Arreflexia, parestesias, ascendente; ver ficha guillain-barre" },
      { dx: "Botulismo", pista: "Pupilas dilatadas pouco reativas, descendente, alimento caseiro" },
      { dx: "Lambert-Eaton", pista: "Melhora com esforço, hiporreflexia, boca seca, câncer de pulmão" },
      { dx: "AVC de tronco", pista: "Início súbito, sinais longos, alteração sensitiva" },
      { dx: "Crise colinérgica", pista: "Excesso de piridostigmina: muscarínicos, fasciculações" }
    ],
    gravidade: [
      "Classificação MGFA: I ocular · II leve generalizada · III moderada · IV grave · V intubação (crise)",
      "Regra 20/30/40: CVF < 20 mL/kg, PImáx > −30 cmH₂O, PEmáx < 40 cmH₂O → alto risco de falência"
    ]
  },
  exames: [
    {
      nome: "Avaliação respiratória",
      pedido: "Capacidade vital forçada à beira do leito (e PImáx/PEmáx se disponíveis) a cada 4–6 h. Gasometria arterial.",
      porQue: "Prever necessidade de ventilação.",
      esperar: "CVF em queda.",
      interpretacao: "Hipercapnia indica falência já instalada.",
      limitacoes: "Fraqueza facial reduz a vedação e subestima a medida."
    },
    {
      nome: "Laboratório e gatilho",
      pedido: "Hemograma, PCR, sódio, potássio, magnésio, fósforo, cálcio, creatinina, glicemia, TSH, T4 livre, CPK; urina tipo 1 e urocultura; RX de tórax; hemoculturas se febre; beta-hCG em mulher em idade fértil. ECG.",
      porQue: "Infecção como gatilho, distúrbios que pioram a fraqueza.",
      esperar: "—",
      interpretacao: "Hipocalemia, hipermagnesemia e hipofosfatemia pioram a fraqueza.",
      limitacoes: "—"
    },
    {
      nome: "Confirmação diagnóstica (eletiva ou na 1ª crise)",
      pedido: "Anticorpo antirreceptor de acetilcolina; se negativo, anti-MuSK. Eletroneuromiografia com estimulação repetitiva (e fibra única se disponível). TC de tórax (timoma).",
      porQue: "Confirmar a doença e pesquisar timoma.",
      esperar: "Anti-AChR positivo em ~80–85% das formas generalizadas.",
      interpretacao: "Decremento > 10% na estimulação repetitiva apoia o diagnóstico.",
      limitacoes: "Não esperar resultado para tratar a crise."
    }
  ],
  tratamento: [
    {
      droga: "Imunoglobulina humana IV",
      linha: "l1",
      dose: "2 g/kg no total",
      via: "IV",
      intervalo: "Dividida em 2–5 dias (ex.: 0,4 g/kg/dia por 5 dias)",
      duracao: "1 ciclo",
      monitorizacao: "Função renal, PA, cefaleia, trombose",
      contraindicacoes: "Deficiência de IgA com anti-IgA",
      ajustes: "Hidratar; cautela em DRC, IC e alto risco trombótico. Velocidade conforme bula"
    },
    {
      droga: "Plasmaférese",
      linha: "l1",
      dose: "5 sessões",
      via: "Acesso venoso central",
      intervalo: "Dias alternados",
      duracao: "~10 dias",
      monitorizacao: "Hipotensão, hipocalcemia, infecção do cateter",
      contraindicacoes: "Sepse, instabilidade hemodinâmica",
      ajustes: "Ação um pouco mais rápida que a imunoglobulina; preferível em anti-MuSK e crise grave, se disponível"
    },
    {
      droga: "Prednisona",
      linha: "adj",
      dose: "Na crise (paciente monitorizado): iniciar dose conforme neurologia (até 1 mg/kg/dia; máx 60–80 mg/dia). Ambulatorial: iniciar baixo (ex.: 10–20 mg/dia) e aumentar 5 mg a cada 3–7 dias",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "Meses, com desmame lento",
      monitorizacao: "Piora transitória nos primeiros 5–10 dias; glicemia, PA, osteoporose",
      contraindicacoes: "Infecção não controlada",
      ajustes: "Início em dose alta só com paciente internado (piora transitória). Associar cálcio, vitamina D e profilaxias conforme duração"
    },
    {
      droga: "Piridostigmina",
      linha: "l1",
      dose: "30–60 mg, ajustar até 60–90 mg (máx usual ~480 mg/dia)",
      via: "VO",
      intervalo: "4/4 a 6/6 h (acordado)",
      duracao: "Contínuo (tratamento sintomático)",
      monitorizacao: "Cólica, diarreia, salivação, bradicardia, fasciculações (excesso)",
      contraindicacoes: "Obstrução intestinal ou urinária mecânica",
      ajustes: "Na crise intubada ou com muita secreção: suspender temporariamente. Comprimido 60 mg (SUS — PCDT/CEAF)"
    },
    {
      droga: "Azatioprina",
      linha: "adj",
      dose: "2–3 mg/kg/dia (iniciar 50 mg/dia e aumentar)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Longo prazo (efeito após 6–12 meses)",
      monitorizacao: "Hemograma e transaminases; TPMT se disponível",
      contraindicacoes: "Uso de alopurinol (reduzir dose), gestação (avaliar)",
      ajustes: "Imunossupressor poupador de corticoide (PCDT Miastenia Gravis 2022); prescrição pelo especialista"
    },
    {
      droga: "Drogas que pioram a miastenia",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar: aminoglicosídeos, fluoroquinolonas, macrolídeos (azitromicina), telitromicina, sulfato de magnésio IV, betabloqueadores, bloqueadores de canal de cálcio IV, quinina/hidroxicloroquina, contraste iodado (cautela), toxina botulínica, inibidores de checkpoint, D-penicilamina",
      ajustes: "Se indispensável, usar com monitorização. Bloqueadores neuromusculares: succinilcolina tem resposta imprevisível (resistência); rocurônio em dose reduzida (maior sensibilidade)"
    }
  ],
  destino: {
    agora: ["UTI ou semi-intensiva com monitorização respiratória"],
    reavaliar: ["CVF/contagem a cada 2–6 h", "Deglutição antes de liberar dieta", "Glicemia e PA com corticoide"],
    alta: ["Miastenia estável sem sintomas bulbares/respiratórios, ajuste de doses definido e retorno com neurologia agendado"],
    observacao: ["Piora leve, sem sintomas bulbares ou respiratórios e CVF estável: observar e ajustar com neurologista"],
    internacao: ["Toda piora com sintomas bulbares ou respiratórios"],
    transferencia: ["Sem UTI, imunoglobulina/plasmaférese ou neurologia → transferir cedo"]
  },
  prescricao: {
    hospitalar: "CRISE MIASTÊNICA — ADULTO (peso: ___ kg)\n1. Dieta zero; SNE se disfagia; cabeceira 45°; aspiração de secreções SN.\n2. Imunoglobulina humana 0,4 g/kg/dia (___ g) IV 1 vez ao dia por 5 dias (velocidade progressiva conforme bula); pré-hidratação com SF 0,9% 500 mL. OU plasmaférese 5 sessões em dias alternados.\n3. Piridostigmina 60 mg VO/SNE de 6/6 h (SUSPENDER se intubado ou com secreção abundante).\n4. Prednisona ___ mg VO 1 vez ao dia pela manhã (dose definida com neurologia; vigiar piora transitória).\n5. Antibiótico para o gatilho, se infecção, EVITANDO aminoglicosídeo, quinolona e macrolídeo (ex.: pneumonia comunitária: ceftriaxona 1 g IV 12/12 h; ITU: ceftriaxona 1 g IV 24/24 h).\n6. Enoxaparina 40 mg SC 1 vez ao dia.\n7. Omeprazol 20 mg VO/IV 1 vez ao dia (corticoide + jejum).\n8. NÃO PRESCREVER: sulfato de magnésio, betabloqueador, aminoglicosídeos, fluoroquinolonas, macrolídeos.\n9. Cuidados: CVF ou contagem em uma respiração de 4/4 h; SpO₂ e monitor contínuos; fisioterapia respiratória; glicemia capilar de 6/6 h; avisar se CVF < 20 mL/kg ou queda > 30%, tosse fraca, engasgos ou dispneia.",
    ambulatorial: "MIASTENIA GRAVIS — MANUTENÇÃO (definida com neurologia)\nUSO ORAL\n1. Piridostigmina 60 mg --------------------------- ___ comprimidos\n   Tomar 1 comprimido de 6 em 6 horas enquanto acordado (ajustar conforme sintomas; meia hora antes das refeições se disfagia).\n2. Prednisona 20 mg ------------------------------- ___ comprimidos\n   Tomar ___ comprimido(s) pela manhã, conforme esquema escrito pelo neurologista. Não parar de repente.\n3. Carbonato de cálcio 1.250 mg + colecalciferol --- ___ comprimidos\n   Tomar 1 comprimido 1 a 2 vezes ao dia durante o uso de corticoide."
  },
  orientacoesRetorno: [
    "Não parar a piridostigmina nem o corticoide por conta própria",
    "Antes de qualquer antibiótico ou remédio novo, avise que tem miastenia (vários remédios pioram a doença); leve a lista de remédios a evitar",
    "Procurar emergência imediatamente se: falta de ar, voz fanhosa, engasgos, dificuldade para engolir saliva ou para sustentar a cabeça",
    "Diarreia, cólica, muita saliva e fraqueza após aumentar a piridostigmina: procurar atendimento (excesso do remédio)",
    "Vacinar contra gripe, COVID-19 e pneumococo (vacinas de vírus vivo podem ser contraindicadas com imunossupressor)",
    "Retorno com neurologia conforme agendado; UBS para acompanhar pressão, glicemia e ossos durante o corticoide"
  ],
  fontes: [
    "Ministério da Saúde — PCDT Miastenia Gravis (Portaria Conjunta SAES/SCTIE nº 11, de 23/05/2022)",
    "International Consensus Guidance for Management of Myasthenia Gravis — atualização 2020 (Neurology, 2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
