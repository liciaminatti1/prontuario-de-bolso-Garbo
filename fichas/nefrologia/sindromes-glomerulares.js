// Síndromes glomerulares: nefrítica e nefrótica (adulto e criança)
registrarFicha({
  id: "sindromes-glomerulares",
  especialidade: "nefrologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Síndrome nefrítica e síndrome nefrótica (GNPE, nefrótica da infância)",
  resumo: "Nefrítica: hematúria (dismórfica, cilindros hemáticos), edema, hipertensão, oligúria, proteinúria em geral < 3,5 g/dia — na criança, sobretudo glomerulonefrite pós-estreptocócica (GNPE). Nefrótica: proteinúria maciça, hipoalbuminemia, edema e dislipidemia — na criança, em geral lesão mínima sensível a corticoide; no adulto, precisa de biópsia.",
  palavrasChave: "sindrome nefritica sindrome nefrotica glomerulonefrite pos estreptococica gnpe gnda hematuria proteinuria edema anasarca hipoalbuminemia lesao minima glomerulonefrite rapidamente progressiva gnrp prednisolona complemento c3 aslo",
  critico: {
    tempo: "Nefrítica com HAS/EAP: PS",
    texto: "Edema com hipertensão grave, congestão pulmonar, encefalopatia, oligúria ou creatinina subindo rápido: PS no mesmo dia. Creatinina em ascensão em dias com sedimento ativo = GN rapidamente progressiva (nefrologia urgente)."
  },
  alarmes: [
    "Hipertensão grave, cefaleia, convulsão (encefalopatia hipertensiva)",
    "Congestão pulmonar, dispneia, oligúria/anúria",
    "Creatinina subindo em dias (GN rapidamente progressiva)",
    "Hemoptise (síndrome pulmão-rim)",
    "Nefrótica com dor abdominal e febre (peritonite bacteriana espontânea), trombose (dor/edema assimétrico de membro, dor lombar, dispneia súbita)",
    "Hipovolemia na nefrótica (dor abdominal, taquicardia, má perfusão, hemoconcentração)"
  ],
  condutaInicial: [
    "Confirmar com urina tipo 1 (hematúria, proteinúria, cilindros), relação proteína/creatinina em amostra isolada, creatinina, albumina, PA",
    "Separar nefrítica × nefrótica (tabela) e gravidade (HAS, congestão, função renal)",
    "GNPE (criança com faringite 1–3 semanas ou piodermite 3–6 semanas antes): restrição de sal e água, furosemida se edema/HAS, anti-hipertensivo; C3 e ASLO",
    "Nefrótica da criança 1–12 anos, sem hematúria macroscópica, HAS ou creatinina alta e C3 normal: prednisolona (provável lesão mínima)",
    "Nefrótica do adulto e casos atípicos da criança: nefrologia para biópsia; enquanto isso, IECA/BRA, diurético, estatina e avaliar anticoagulação",
    "Nefrítica do adulto ou criança atípica (C3 persistentemente baixo, GNRP): nefrologia"
  ],
  fataisExcluir: [
    "Glomerulonefrite rapidamente progressiva (vasculite ANCA, anti-MBG, lúpus)",
    "Edema agudo de pulmão e encefalopatia hipertensiva",
    "Trombose venosa (renal, TVP, TEP) na nefrótica",
    "Infecção grave na nefrótica (peritonite pneumocócica, celulite)",
    "Hipercalemia e LRA"
  ],
  proximaDecisao: "GNPE típica: diurese e PA melhoram em 1–2 semanas; C3 normaliza em até 8 semanas — se não normalizar, ou se hematúria macroscópica/proteinúria persistirem, nefrologia (biópsia). Nefrótica da criança: remissão em até 4 semanas de prednisolona = corticossensível; sem remissão após 4 semanas de dose plena → corticorresistente (nefrologia pediátrica).",
  clinica: {
    anamnese: [
      "Infecção de garganta ou pele recente (GNPE), infecções virais, hepatites, HIV",
      "Urina escura ('coca-cola'), espumosa, diminuição da urina",
      "Edema palpebral matinal, ganho de peso, ascite",
      "Lúpus, vasculites (artralgia, rash, hemoptise, sinusite), diabetes, câncer, AINE, drogas",
      "História familiar de doença renal ou surdez (Alport)"
    ],
    exameFisico: [
      "PA (tabelas por percentil na criança), peso, edema, ascite, derrame pleural",
      "Sinais de congestão (crepitações, JVP)",
      "Pele (impetigo, púrpura, rash malar), artrites",
      "Perfusão (hipovolemia na nefrótica)"
    ],
    diferenciais: [
      { dx: "GNPE", pista: "Criança 5–12 anos, infecção estreptocócica prévia, C3 baixo transitório, ASLO/anti-DNase B altos" },
      { dx: "Nefropatia por IgA", pista: "Hematúria macroscópica simultânea à infecção (1–3 dias), C3 normal" },
      { dx: "Nefrite lúpica", pista: "Mulher jovem, FAN positivo, C3 e C4 baixos" },
      { dx: "Vasculite ANCA / anti-MBG", pista: "Adulto, GNRP, hemoptise, ANCA ou anti-MBG positivos" },
      { dx: "Lesão mínima (criança)", pista: "1–12 anos, nefrótica pura, sem HAS, C3 normal, resposta ao corticoide" },
      { dx: "Nefropatia membranosa / GESF / diabética (adulto)", pista: "Anti-PLA2R (membranosa), DM de longa data com retinopatia" },
      { dx: "Edema por outra causa", pista: "IC, cirrose, desnutrição — sem proteinúria maciça" }
    ],
    gravidade: [
      "Nefrótica (adulto): proteinúria > 3,5 g/24 h (ou RPC > 3–3,5 g/g) + albumina < 3,0 g/dL + edema",
      "Nefrótica (criança): RPC ≥ 2 mg/mg (≥ 200 mg/mmol) ou ≥ 40 mg/m²/h ou fita 3+, + albumina < 3,0 g/dL (ou < 2,5) + edema",
      "Nefrítica: hematúria glomerular + HAS + edema + oligúria ± LRA; proteinúria subnefrótica",
      "Remissão na criança: fita negativa/traços (ou RPC < 0,2 mg/mg) por 3 dias seguidos"
    ]
  },
  exames: [
    {
      nome: "Urina e proteinúria",
      pedido: "Urina tipo 1 com sedimentoscopia (dismorfismo eritrocitário, cilindros). Relação proteína/creatinina em amostra isolada (preferir 1ª urina da manhã).",
      porQue: "Classificar a síndrome e quantificar.",
      esperar: "—",
      interpretacao: "Cilindros hemáticos/hemácias dismórficas = origem glomerular.",
      limitacoes: "Fita superestima em urina concentrada; confirmar com RPC."
    },
    {
      nome: "Sangue",
      pedido: "Ureia, creatinina, sódio, potássio, albumina, proteínas totais, colesterol total e frações, triglicerídeos, hemograma, glicemia/HbA1c, complemento C3 e C4.",
      porQue: "Função renal, gravidade e causa.",
      esperar: "C3 baixo na GNPE (normaliza em ≤ 8 semanas), lúpus, GN membranoproliferativa.",
      interpretacao: "C3 baixo após 8 semanas → não é GNPE típica (nefrologia).",
      limitacoes: "—"
    },
    {
      nome: "Investigação etiológica",
      pedido: "ASLO e anti-DNase B (se nefrítica); FAN; sorologias para hepatites B e C, HIV e sífilis (VDRL). Adulto: ANCA e anti-MBG se nefrítica/GNRP; anti-PLA2R e eletroforese de proteínas se nefrótica.",
      porQue: "Definir causa e tratamento.",
      esperar: "—",
      interpretacao: "Anti-PLA2R positivo sugere nefropatia membranosa primária.",
      limitacoes: "ASLO sobe pouco após piodermite (anti-DNase B é melhor)."
    },
    {
      nome: "Imagem",
      pedido: "USG de rins e vias urinárias. RX de tórax se dispneia ou congestão.",
      porQue: "Tamanho renal, excluir outras causas; congestão.",
      esperar: "—",
      interpretacao: "Rins pequenos sugerem doença crônica.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Prednisolona / prednisona (síndrome nefrótica da criança, 1º episódio)",
      linha: "l1",
      dose: "60 mg/m²/dia ou 2 mg/kg/dia (máx. 60 mg/dia) por 4 semanas; depois 40 mg/m² ou 1,5 mg/kg em dias alternados (máx. 40 mg) por 4 semanas",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "8 semanas no total (esquemas de até 12 semanas também aceitos)",
      monitorizacao: "Proteinúria em fita diária em casa, PA, glicemia, peso",
      contraindicacoes: "Infecção ativa não tratada",
      ajustes: "Calcular por peso seco (sem edema). Prednisolona solução 3 mg/mL (RENAME). Recaída: 60 mg/m²/dia até remissão e depois dias alternados (nefrologia pediátrica)"
    },
    {
      droga: "Furosemida",
      linha: "l1",
      dose: "Adulto: 40–80 mg/dia (até 2×/dia) · Criança: 1–2 mg/kg/dose (máx. 40 mg/dose) — GNPE com edema/HAS ou nefrótica com edema importante",
      via: "VO ou IV",
      intervalo: "1–2×/dia",
      duracao: "Até controle do edema",
      monitorizacao: "Peso, PA, K, creatinina, perfusão (nefrótica: risco de hipovolemia e trombose)",
      contraindicacoes: "Hipovolemia",
      ajustes: "Nefrótica com edema refratário e hipovolemia: albumina 20% 0,5–1 g/kg IV em 4 h seguida de furosemida, em ambiente hospitalar"
    },
    {
      droga: "Anti-hipertensivo na GNPE (anlodipino ou nifedipino retard)",
      linha: "l1",
      dose: "Anlodipino — adulto: 5–10 mg/dia · criança: 0,1–0,2 mg/kg/dia (máx. 10 mg/dia)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até normalizar a PA",
      monitorizacao: "PA, edema",
      contraindicacoes: "—",
      ajustes: "Associar restrição de sal e diurético (a HAS da GNPE é por retenção de volume). Evitar IECA na fase aguda com LRA/hipercalemia"
    },
    {
      droga: "Penicilina G benzatina (GNPE com infecção estreptocócica ainda ativa)",
      linha: "adj",
      dose: "Adulto e ≥ 20 kg: 1.200.000 UI · < 20 kg: 600.000 UI",
      via: "IM profunda",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Alergia a penicilina (usar amoxicilina VO ou macrolídeo conforme ficha da infecção)",
      ajustes: "Erradica o estreptococo e reduz transmissão; não altera o curso da GNPE. Tratar contactantes sintomáticos"
    },
    {
      droga: "IECA ou BRA (nefrótica do adulto / proteinúria persistente)",
      linha: "l1",
      dose: "Enalapril 5–20 mg 2×/dia ou losartana 50–100 mg/dia (dose máxima tolerada)",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Contínuo",
      monitorizacao: "K e creatinina em 1–2 semanas",
      contraindicacoes: "Gestação, hipercalemia, LRA, hipovolemia",
      ajustes: "Reduz proteinúria. Na criança com lesão mínima corticossensível não é rotina"
    },
    {
      droga: "Estatina (nefrótica persistente do adulto)",
      linha: "adj",
      dose: "Sinvastatina 20–40 mg ou atorvastatina 10–20 mg",
      via: "VO",
      intervalo: "1×/dia à noite",
      duracao: "Enquanto nefrótico",
      monitorizacao: "CK e transaminases se sintomas",
      contraindicacoes: "Gestação, hepatopatia ativa",
      ajustes: "—"
    },
    {
      droga: "Anticoagulação profilática (nefrótica do adulto)",
      linha: "adj",
      dose: "Conforme nefrologia (heparina de baixo peso ou varfarina)",
      via: "SC ou VO",
      intervalo: "—",
      duracao: "Enquanto hipoalbuminemia importante",
      monitorizacao: "Sangramento",
      contraindicacoes: "Risco de sangramento alto",
      ajustes: "KDIGO 2021: considerar sobretudo na nefropatia membranosa com albumina muito baixa (< 2,0–2,5 g/dL) e baixo risco de sangramento"
    }
  ],
  destino: {
    agora: ["Medir PA, peso e diurese; urina tipo 1, RPC, creatinina e albumina", "PS se HAS grave, congestão, oligúria, LRA ou suspeita de GNRP"],
    reavaliar: ["GNPE: PA, peso e creatinina a cada 2–3 dias na 1ª semana; C3 em 8 semanas; urina até normalizar (hematúria microscópica pode durar até 1–2 anos)", "Nefrótica da criança: fita urinária diária, retorno semanal no 1º mês"],
    alta: ["GNPE: PA controlada, diurese adequada, creatinina estável, família orientada sobre sal e sinais de alarme", "Nefrótica corticossensível: seguimento com pediatria e nefrologia pediátrica"],
    observacao: ["—"],
    internacao: ["HAS grave, congestão, oligúria, LRA, encefalopatia", "Nefrótica com anasarca grave, hipovolemia, infecção, trombose", "Suspeita de GNRP"],
    transferencia: ["GNRP, síndrome pulmão-rim, necessidade de diálise ou biópsia → nefrologia/regulação"]
  },
  prescricao: {
    ambulatorial: "SÍNDROME NEFRÓTICA DA CRIANÇA — 1º EPISÓDIO (peso seco ___ kg; SC ___ m²)\nUSO ORAL\n1. Prednisolona solução oral 3 mg/mL -------------- ___ frascos\n   Dar ___ mL (2 mg/kg/dia ou 60 mg/m²/dia, máx. 60 mg) 1 vez ao dia, pela manhã, por 4 semanas.\n   Depois: ___ mL (1,5 mg/kg ou 40 mg/m², máx. 40 mg) em dias alternados por mais 4 semanas.\n2. Furosemida 40 mg (se edema importante) --------- ___ comprimidos\n   ___ mg (1–2 mg/kg/dose, máx. 40 mg) 1 vez ao dia — só enquanto inchaço, conforme orientação.\n3. Fitas reagentes de urina: testar a 1ª urina da manhã todos os dias e anotar.\nORIENTAÇÕES\n- Dieta com pouco sal; não restringir proteínas.\n- Atualizar vacinas (pneumocócica, influenza, varicela se não teve) — vacinas de vírus vivo só fora do corticoide em dose alta.\n\nGNPE — CRIANÇA (peso ___ kg)\nUSO ORAL\n1. Furosemida 40 mg -------------------------- ___ comprimidos\n   ___ mg (1–2 mg/kg/dose, máx. 40 mg) 1 a 2 vezes ao dia enquanto inchaço/pressão alta.\n2. Anlodipino 5 mg (se PA elevada apesar do diurético) -- ___ comprimidos\n   ___ mg (0,1–0,2 mg/kg/dia, máx. 10 mg) 1 vez ao dia.\nUSO INTRAMUSCULAR (se infecção estreptocócica ativa)\n3. Penicilina G benzatina 600.000 UI (< 20 kg) ou 1.200.000 UI (≥ 20 kg) IM dose única.\nORIENTAÇÕES\n- Sal e água restritos: líquidos = diurese do dia anterior + 400 mL/m² (ou conforme orientação).\n- Pesar todos os dias; medir a pressão no retorno em 48–72 h.\n\nADULTO NEFRÓTICO (aguardando nefrologia)\n1. Enalapril 10 mg — 1 comprimido de 12 em 12 horas (ajustar conforme PA, K e creatinina).\n2. Furosemida 40 mg — 1 comprimido pela manhã (até 2×/dia se edema).\n3. Sinvastatina 20 mg — 1 comprimido à noite.\nDieta com pouco sal (< 2 g de sódio/dia) e proteína normal (0,8–1 g/kg/dia).",
    hospitalar: "NEFRÍTICA COM CONGESTÃO OU HAS GRAVE — CRIANÇA/ADULTO (peso ___ kg)\n1. Dieta hipossódica; restrição hídrica (criança: perdas insensíveis 400 mL/m²/dia + diurese).\n2. Cabeceira elevada, O₂ se SpO₂ < 94%.\n3. Furosemida IV — adulto 40–80 mg; criança 1–2 mg/kg/dose (máx. 40 mg); repetir de 6/6 h a 12/12 h conforme diurese.\n4. HAS grave sintomática: adulto: ver ficha has-emerg; criança: nifedipino ou anlodipino VO; hidralazina IV como alternativa.\n5. Controles: PA de 2/2 h a 4/4 h, diurese, peso diário, K, ureia e creatinina diários, balanço hídrico."
  },
  orientacoesRetorno: [
    "Comer com pouco sal; não usar remédio para inchaço por conta própria",
    "Pesar todo dia e anotar; testar a urina com a fita quando orientado",
    "Voltar imediatamente se falta de ar, urina muito pouca, dor de cabeça forte, vômitos, convulsão, febre com dor na barriga, dor ou inchaço em uma perna só",
    "Criança em corticoide: não suspender de repente; febre ou contato com catapora/sarampo → procurar o serviço",
    "Retorno em 48–72 h e acompanhamento com nefrologia conforme combinado"
  ],
  tabelas: [
    {
      titulo: "Nefrítica × nefrótica",
      colunas: ["Achado", "Síndrome nefrítica", "Síndrome nefrótica"],
      linhas: [
        ["Hematúria", "Presente, dismórfica, cilindros hemáticos", "Ausente ou discreta"],
        ["Proteinúria", "Em geral < 3,5 g/24 h", "> 3,5 g/24 h (adulto) ou RPC ≥ 2 mg/mg (criança)"],
        ["Albumina sérica", "Normal ou pouco baixa", "Baixa (< 3,0 g/dL)"],
        ["Edema", "Leve a moderado, periorbital", "Importante, anasarca"],
        ["Hipertensão / oligúria", "Frequentes", "Incomuns (exceto GESF, membranoproliferativa)"],
        ["Exemplos", "GNPE, IgA, lúpus, vasculite", "Lesão mínima, GESF, membranosa, diabética"]
      ]
    }
  ],
  fontes: [
    "KDIGO — Clinical Practice Guideline for the Management of Glomerular Diseases (Kidney Int, 2021)",
    "IPNA — Clinical practice recommendations for the diagnosis and management of children with steroid-sensitive nephrotic syndrome (Pediatr Nephrol, 2023)",
    "Sociedade Brasileira de Pediatria — Tratado de Pediatria (edição vigente): glomerulonefrite difusa aguda e síndrome nefrótica",
    "Ministério da Saúde — PCDT Síndrome Nefrótica Primária em Crianças e Adolescentes"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
