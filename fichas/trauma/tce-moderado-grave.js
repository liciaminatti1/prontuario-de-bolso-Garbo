// TCE moderado e grave
registrarFicha({
  id: "tce-moderado-grave",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "TCE moderado e grave: neuroproteção, hipertensão intracraniana e critérios cirúrgicos",
  resumo: "Traumatismo cranioencefálico com Glasgow 9–12 (moderado) ou 3–8 (grave). Evitar lesão secundária (hipóxia, hipotensão, hipo/hipercapnia, hipoglicemia, febre), tratar hipertensão intracraniana e indicar neurocirurgia.",
  palavrasChave: "tce traumatismo cranioencefalico trauma craniano grave moderado glasgow hipertensao intracraniana hic herniacao manitol salina hipertonica hematoma epidural subdural contusao neurocirurgia pic pressao intracraniana anisocoria cushing",
  critico: {
    tempo: "Sem hipóxia e sem hipotensão",
    texto: "Um único episódio de SpO₂ < 90% ou de hipotensão aumenta a mortalidade. Glasgow ≤ 8: intubar. PAS ≥ 100 mmHg (50–69 anos) ou ≥ 110 mmHg (15–49 ou ≥ 70 anos). TC de crânio e neurocirurgia sem demora."
  },
  alarmes: [
    "Glasgow ≤ 8 ou queda ≥ 2 pontos",
    "Anisocoria, pupila fixa e dilatada, postura em descerebração ou decorticação (herniação)",
    "Tríade de Cushing: hipertensão, bradicardia, respiração irregular",
    "SpO₂ < 90%, PaO₂ < 60 mmHg ou PAS abaixo da meta",
    "Uso de anticoagulante ou antiagregante",
    "Fratura exposta ou afundamento, fístula liquórica, sinais de fratura de base de crânio",
    "Convulsão pós-traumática",
    "Criança: suspeita de maus-tratos (hemorragia retiniana, lesões em diferentes estágios)"
  ],
  condutaInicial: [
    "xABCDE (ATLS 11ª ed.) com restrição de movimento da coluna cervical",
    "Via aérea: intubar se Glasgow ≤ 8, incapacidade de proteger via aérea, hipóxia refratária ou agitação que impede cuidado; SRI com etomidato ou cetamina (ver ficha sequencia-rapida-intubacao)",
    "Oxigenação: SpO₂ ≥ 94% (nunca < 90%). Ventilação: PaCO₂ 35–45 mmHg (normocapnia), ETCO₂ contínuo",
    "Pressão: adulto PAS ≥ 100 mmHg (50–69 anos) ou ≥ 110 mmHg (15–49 e ≥ 70 anos); criança PAS acima de 70 + 2 × idade. Cristaloide isotônico (SF 0,9%); evitar soluções hipotônicas; vasopressor se necessário",
    "Glasgow (com resposta motora detalhada) e pupilas antes da sedação; repetir com frequência",
    "Cabeceira elevada 30° (se coluna permitir), pescoço neutro, colar sem comprimir as jugulares",
    "TC de crânio (e de coluna cervical) assim que estável; avaliar neurocirurgia",
    "Glicemia capilar: evitar hipoglicemia e glicemia > 180 mg/dL. Temperatura: evitar febre",
    "Reverter anticoagulação se sangramento intracraniano",
    "Ácido tranexâmico se até 3 h do trauma (benefício maior no TCE leve a moderado)",
    "Sinais de herniação: salina hipertônica ou manitol, hiperventilação breve (PaCO₂ 30–35) como ponte e neurocirurgia de emergência"
  ],
  fataisExcluir: [
    "Hematoma epidural (intervalo lúcido) — emergência cirúrgica",
    "Hematoma subdural agudo com desvio de linha média",
    "Herniação transtentorial",
    "Lesão de coluna cervical associada",
    "Choque hemorrágico por lesão extracraniana (o TCE isolado raramente causa hipotensão no adulto)",
    "Hipoglicemia, intoxicação, crise convulsiva como causa do rebaixamento"
  ],
  proximaDecisao: "Lesão com critério cirúrgico na TC → neurocirurgia imediata. Glasgow 3–8 com TC alterada (ou TC normal com ≥ 2 de: idade > 40 anos, postura motora, PAS < 90) → indicação de monitorização da PIC em UTI. Sem neurocirurgia no serviço → regulação imediata após via aérea e estabilização hemodinâmica.",
  clinica: {
    anamnese: [
      "Mecanismo, hora do trauma, perda de consciência, intervalo lúcido",
      "Convulsão, vômitos, amnésia",
      "Anticoagulante (varfarina, DOAC), antiagregante, coagulopatia, etilismo",
      "Uso de álcool ou drogas (podem confundir o exame)",
      "Criança: história coerente com o desenvolvimento? Demora em procurar atendimento"
    ],
    exameFisico: [
      "Glasgow por componente (O, V, M) e pupilas (tamanho, simetria, reflexo)",
      "Déficit motor focal, postura anormal",
      "Sinais de fratura de base: olhos de guaxinim, sinal de Battle, otorragia/otoliquorreia, rinoliquorreia",
      "Afundamento ou ferimento de couro cabeludo",
      "Coluna cervical, tórax, abdome, pelve (trauma associado)",
      "Lactente: fontanela abaulada, hemorragia retiniana (fundoscopia)"
    ],
    diferenciais: [
      { dx: "Intoxicação alcoólica ou por drogas", pista: "Rebaixamento desproporcional à lesão; não atribuir o Glasgow baixo ao álcool sem TC" },
      { dx: "Hipoglicemia", pista: "Glicemia capilar" },
      { dx: "Estado pós-ictal", pista: "Melhora progressiva em minutos a horas" },
      { dx: "AVC ou hemorragia subaracnóidea espontânea que causou a queda", pista: "Déficit focal ou cefaleia súbita antes do trauma; padrão da hemorragia na TC" }
    ],
    gravidade: [
      "Glasgow 13–15 leve (ver ficha tce-leve); 9–12 moderado; 3–8 grave",
      "Glasgow com resposta pupilar (GCS-P = Glasgow − número de pupilas não reativas) melhora o prognóstico",
      "TC: classificação de Marshall/Rotterdam (cisternas comprimidas, desvio > 5 mm, lesão com massa) indica maior risco"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste com janela óssea. TC de coluna cervical no mesmo exame.",
      porQue: "Identificar lesões cirúrgicas e edema.",
      esperar: "—",
      interpretacao: "Ver tabela de critérios cirúrgicos.",
      limitacoes: "Repetir se piora neurológica ou em 6–24 h se lesão hemorrágica (progressão é comum)."
    },
    {
      nome: "Coagulação e laboratório",
      pedido: "Hemograma, plaquetas, TP/INR, TTPa, fibrinogênio, sódio, potássio, glicemia, ureia, creatinina, gasometria arterial, tipagem sanguínea, dosagem de etanol se disponível.",
      porQue: "Coagulopatia é frequente e piora a hemorragia; sódio guia terapia hiperosmolar.",
      esperar: "—",
      interpretacao: "INR > 1,4 com sangramento: reverter. Na > 155–160 mEq/L: não dar mais salina hipertônica.",
      limitacoes: "—"
    },
    {
      nome: "Angiotomografia (se indicada)",
      pedido: "Angiotomografia cervical e intracraniana se fratura de base, de coluna cervical ou déficit não explicado.",
      porQue: "Lesão vascular cerebrovascular traumática.",
      esperar: "—",
      interpretacao: "Dissecção carotídea/vertebral: antitrombótico conforme neurocirurgia.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Salina hipertônica 3% (preparo: 89 mL de SF 0,9% + 11 mL de NaCl 20%)",
      linha: "l1",
      dose: "Adulto 250 mL (2–5 mL/kg); criança 2–5 mL/kg",
      via: "IV em 10–20 min (veia periférica calibrosa ou central)",
      intervalo: "Repetir conforme PIC/clínica e sódio",
      duracao: "—",
      monitorizacao: "Sódio a cada 4–6 h (não passar de 155–160 mEq/L), osmolalidade",
      contraindicacoes: "Hipernatremia",
      ajustes: "Preferida na criança e no paciente hipotenso. Criança: infusão contínua 0,1–1 mL/kg/h em UTI pediátrica. Preparo para 250 mL: 222 mL de SF 0,9% + 28 mL de NaCl 20%"
    },
    {
      droga: "Manitol 20% (200 mg/mL)",
      linha: "l1",
      dose: "0,25–1 g/kg (1,25–5 mL/kg)",
      via: "IV em 15–20 min",
      intervalo: "Pode repetir a cada 6 h conforme osmolalidade",
      duracao: "—",
      monitorizacao: "PA, diurese, osmolalidade (< 320 mOsm/kg), gap osmolar",
      contraindicacoes: "Hipotensão, hipovolemia, insuficiência renal anúrica",
      ajustes: "Diurético osmótico: repor a diurese com SF 0,9%. Usar filtro no equipo (cristaliza)"
    },
    {
      droga: "Ácido tranexâmico 50 mg/mL",
      linha: "adj",
      dose: "Adulto 1 g em 10 min e 1 g em 8 h; criança 15 mg/kg (máx 1 g) e 2 mg/kg/h por 8 h",
      via: "IV",
      intervalo: "—",
      duracao: "Iniciar até 3 h do trauma",
      monitorizacao: "Trombose",
      contraindicacoes: "Mais de 3 h do trauma",
      ajustes: "CRASH-3: redução de morte por TCE nos casos leves a moderados, sem benefício claro no grave com pupilas não reativas. O ATLS 11ª ed. menciona dose de 2 g em bolus no TCE"
    },
    {
      droga: "Levetiracetam 500 mg/5 mL ou fenitoína 50 mg/mL (profilaxia de crise precoce)",
      linha: "adj",
      dose: "Levetiracetam: adulto 1.000 mg (até 20 mg/kg) de ataque e 500–1.000 mg a cada 12 h; criança 20 mg/kg de ataque e 10–20 mg/kg a cada 12 h. Fenitoína: 15–20 mg/kg de ataque e 100 mg a cada 8 h (adulto)",
      via: "IV",
      intervalo: "—",
      duracao: "7 dias (não reduz crises tardias)",
      monitorizacao: "Fenitoína: nível sérico, arritmia, hipotensão, flebite",
      contraindicacoes: "Fenitoína: bloqueio AV, bradicardia",
      ajustes: "BTF recomenda fenitoína para reduzir crises precoces; levetiracetam é alternativa muito usada. Fenitoína em SF 0,9%, máx 50 mg/min (criança 1 mg/kg/min), com monitor"
    },
    {
      droga: "Reversão de anticoagulação",
      linha: "l1",
      dose: "Varfarina: complexo protrombínico 25–50 UI/kg conforme INR + vitamina K 10 mg IV. Dabigatrana: idarucizumabe 5 g IV. Inibidor do fator Xa: complexo protrombínico 50 UI/kg (andexanete se disponível)",
      via: "IV",
      intervalo: "Imediato",
      duracao: "—",
      monitorizacao: "INR em 30 min, TC de controle",
      contraindicacoes: "—",
      ajustes: "Plasma fresco (10–15 mL/kg) se não houver complexo protrombínico. Transfusão de plaquetas não é rotina em usuário de antiagregante"
    },
    {
      droga: "Analgesia e sedação",
      linha: "l1",
      dose: "Fentanil 1–3 mcg/kg/h + propofol 1–3 mg/kg/h (adulto) ou midazolam 0,05–0,2 mg/kg/h (criança)",
      via: "IV contínua",
      intervalo: "Titular",
      duracao: "—",
      monitorizacao: "PA (evitar hipotensão), PIC",
      contraindicacoes: "Propofol: hipotensão; sedação prolongada em criança",
      ajustes: "Ver ficha sedacao-continua. Sedação profunda reduz a PIC"
    },
    {
      droga: "Corticoide e hipotermia profilática",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Corticoide aumenta mortalidade no TCE (CRASH)",
      ajustes: "Hipotermia profilática e hiperventilação profilática (PaCO₂ ≤ 25 mmHg) não recomendadas"
    }
  ],
  destino: {
    agora: [
      "Via aérea, oxigenação e PA nas metas; TC; neurocirurgia",
      "Herniação: terapia hiperosmolar e centro cirúrgico"
    ],
    reavaliar: [
      "Glasgow e pupilas a cada 15–30 min (1 h após estabilizar)",
      "Sódio a cada 4–6 h se terapia hiperosmolar; glicemia a cada 2–4 h",
      "TC de controle se piora ou conforme neurocirurgia"
    ],
    alta: ["—"],
    observacao: [
      "TCE moderado com TC normal e melhora para Glasgow 15: observação de 12–24 h com reavaliação neurológica seriada antes da alta"
    ],
    internacao: [
      "TCE moderado: internação com neurocirurgia (enfermaria ou semi-intensiva)",
      "TCE grave: UTI com neurocirurgia; monitorização da PIC quando indicada (alvo de PIC < 22 mmHg; PPC 60–70 mmHg no adulto)"
    ],
    transferencia: [
      "Serviço sem neurocirurgia ou TC: regulação imediata para centro de trauma após via aérea segura, PA na meta e imobilização",
      "Durante o transporte: ETCO₂ 35–40 mmHg, cabeceira 30°, sedação contínua, salina hipertônica disponível"
    ]
  },
  prescricao: {
    hospitalar: "TCE GRAVE — ADULTO (peso: ___ kg; exemplo 70 kg)\n1. Dieta zero; sonda orogástrica (nasogástrica contraindicada se fratura de base).\n2. Cabeceira 30°, pescoço neutro, colar cervical até liberar coluna; monitor, oximetria, capnografia, PAI se disponível, sonda vesical.\n3. Ventilação mecânica: VC 6–8 mL/kg de peso predito, PEEP 5–8, FR para PaCO₂ 35–45 mmHg (ETCO₂ 35–40), FiO₂ para SpO₂ ≥ 94%.\n4. SF 0,9% 1.000 mL IV a 80–100 mL/h (manter euvolemia); bolus de 500 mL se PAS abaixo da meta. Não usar soro glicosado ou hipotônico.\n5. Noradrenalina 64 mcg/mL IV em bomba se PAS < 110 mmHg (15–49 ou ≥ 70 anos) ou < 100 mmHg (50–69 anos) apesar de volume.\n6. Fentanil 10 mcg/mL a 7–14 mL/h (1–2 mcg/kg/h) + propofol 1% a 7–21 mL/h (1–3 mg/kg/h), titular para RASS −4 a −5 se HIC.\n7. Se até 3 h do trauma: ácido tranexâmico 1 g + SF 0,9% 100 mL IV em 10 min; depois 1 g + SF 0,9% 500 mL IV a 62 mL/h (8 h).\n8. Levetiracetam 1.000 mg + SF 0,9% 100 mL IV em 15 min; depois 500 mg IV de 12/12 h por 7 dias (ou fenitoína 20 mg/kg em SF 0,9% 250 mL IV a até 50 mg/min, depois 100 mg IV de 8/8 h).\n9. Sinais de herniação ou HIC: salina 3% (SF 0,9% 222 mL + NaCl 20% 28 mL) 250 mL IV em 15–20 min, OU manitol 20% 1 g/kg (350 mL) IV em 20 min; hiperventilação breve (PaCO₂ 30–35) até a neurocirurgia.\n10. Paracetamol 750 mg via sonda de 6/6 h se temperatura > 37,5 °C; manter normotermia.\n11. Glicemia capilar de 4/4 h; manter 110–180 mg/dL.\n12. Omeprazol 40 mg IV 1×/dia. Profilaxia mecânica de TEV (compressão pneumática); heparina após liberação da neurocirurgia (TC estável, em geral 24–72 h).\n13. Controles: Glasgow e pupilas de 1/1 h; sódio de 6/6 h se salina hipertônica; gasometria após ajustes; coagulograma.\n\nCRIANÇA (peso: ___ kg)\n- SpO₂ ≥ 94%; PaCO₂ 35–40 mmHg; PAS > 70 + 2 × idade (anos).\n- SF 0,9% 20 mL/kg em bolus se hipotensão; manutenção com SF 0,9% (isotônico).\n- Salina 3% 2–5 mL/kg IV em 10–20 min se HIC; manutenção 0,1–1 mL/kg/h em UTI pediátrica.\n- Levetiracetam 20 mg/kg IV de ataque e 10–20 mg/kg de 12/12 h.\n- Ácido tranexâmico 15 mg/kg (máx 1 g) IV em 10 min + 2 mg/kg/h por 8 h, se até 3 h.\n- Analgesia: fentanil 1–2 mcg/kg/h; sedação com midazolam 0,05–0,2 mg/kg/h."
  },
  orientacoesRetorno: [
    "Família: o prognóstico do TCE grave se define ao longo de dias a semanas; explicar a necessidade de UTI e de possível cirurgia",
    "Após a alta: reabilitação (fisioterapia, fonoaudiologia, terapia ocupacional, neuropsicologia); acompanhar epilepsia pós-traumática, cefaleia, alterações de humor e de comportamento",
    "Voltar imediatamente se sonolência excessiva, vômitos repetidos, convulsão, fraqueza nova, confusão ou cefaleia que piora",
    "Não dirigir nem operar máquinas até liberação médica; evitar álcool",
    "Criança: retorno escolar gradual e orientação à escola"
  ],
  tabelas: [
    {
      titulo: "Critérios cirúrgicos (Brain Trauma Foundation — manejo cirúrgico)",
      colunas: ["Lesão", "Indicação de cirurgia"],
      linhas: [
        ["Hematoma epidural", "Volume > 30 cm³ independentemente do Glasgow; Glasgow ≤ 8 com anisocoria → cirurgia de urgência. Conservador (TC seriada) se < 30 cm³, espessura < 15 mm, desvio < 5 mm, Glasgow > 8 e sem déficit focal"],
        ["Hematoma subdural agudo", "Espessura > 10 mm ou desvio da linha média > 5 mm, independentemente do Glasgow; Glasgow ≤ 8 com lesão menor se queda ≥ 2 pontos, anisocoria/pupilas fixas ou PIC > 20 mmHg"],
        ["Contusão / hematoma parenquimatoso", "Piora neurológica relacionada à lesão, HIC refratária ou efeito de massa; Glasgow 6–8 com contusão frontal ou temporal > 20 cm³ e desvio ≥ 5 mm e/ou cisternas comprimidas; qualquer lesão > 50 cm³"],
        ["Fossa posterior", "Efeito de massa (4º ventrículo comprimido, cisternas apagadas, hidrocefalia obstrutiva)"],
        ["Afundamento de crânio", "Aberto com afundamento maior que a espessura da calota, lesão dural, pneumoencéfalo, contaminação grosseira ou acometimento do seio frontal"]
      ],
      nota: "Bullock MR et al. Surgical Management of Traumatic Brain Injury (Neurosurgery, 2006). Decisão final da neurocirurgia."
    },
    {
      titulo: "Metas de neuroproteção",
      colunas: ["Parâmetro", "Adulto", "Criança"],
      linhas: [
        ["SpO₂ / PaO₂", "≥ 94% (nunca < 90%) / > 60 mmHg", "≥ 94%"],
        ["PaCO₂", "35–45 mmHg (30–35 só como ponte na herniação)", "35–40 mmHg"],
        ["PAS", "≥ 100 mmHg (50–69 anos); ≥ 110 mmHg (15–49 e ≥ 70 anos)", "> 70 + 2 × idade (anos)"],
        ["PIC / PPC", "PIC < 22 mmHg; PPC 60–70 mmHg", "PIC < 20 mmHg; PPC ≥ 40 mmHg (40–50 conforme idade)"],
        ["Sódio", "135–155 mEq/L (terapia hiperosmolar)", "Idem; evitar > 160"],
        ["Glicemia", "110–180 mg/dL", "Evitar hipo e hiperglicemia"],
        ["Temperatura", "Normotermia, evitar febre", "Normotermia"]
      ]
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS: Advanced Trauma Life Support, 11ª ed. (2025)",
    "Brain Trauma Foundation — Guidelines for the Management of Severe Traumatic Brain Injury, 4ª ed. (2016; atualização 2022)",
    "Kochanek PM et al. — Guidelines for the Management of Pediatric Severe Traumatic Brain Injury, 3ª ed. (Pediatr Crit Care Med, 2019)",
    "Bullock MR et al. — Surgical Management of Traumatic Brain Injury (Neurosurgery, 2006)",
    "CRASH-3 Trial Collaborators — ácido tranexâmico no TCE (Lancet, 2019); CRASH — corticoide no TCE (Lancet, 2004)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
