// Hipertensão intracraniana
registrarFicha({
  id: "hipertensao-intracraniana",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Hipertensão intracraniana (HIC) e herniação",
  resumo: "Aumento da pressão intracraniana por massa (hematoma, tumor, abscesso), edema (TCE, AVC extenso, encefalopatia hepática), hidrocefalia ou trombose venosa. Medidas de primeira hora, osmoterapia como ponte e tratamento da causa.",
  palavrasChave: "hipertensao intracraniana hic pic herniacao edema cerebral manitol salina hipertonica nacl 3% 20% cushing anisocoria papiledema hiperventilacao dexametasona derivacao ventricular",
  critico: {
    tempo: "Herniação: osmoterapia em minutos",
    texto: "Anisocoria, postura anormal ou queda súbita do Glasgow = herniação. Cabeceira 30°, via aérea, salina hipertônica ou manitol IV já, hiperventilação breve como ponte e neurocirurgia."
  },
  alarmes: [
    "Pupila dilatada e pouco reativa (unilateral ou bilateral)",
    "Queda do Glasgow ≥ 2 pontos",
    "Postura de decorticação ou descerebração",
    "Tríade de Cushing: hipertensão, bradicardia, respiração irregular",
    "Cefaleia progressiva, vômitos em jato, papiledema, paralisia do VI nervo",
    "Lactente: fontanela abaulada, aumento do perímetro cefálico, olhar em sol poente"
  ],
  condutaInicial: [
    "A-B-C: IOT se Glasgow ≤ 8 (sequência rápida, evitar hipotensão e hipóxia); SpO₂ ≥ 94%, PaCO₂ 35–40 mmHg",
    "Cabeceira 30°, cabeça neutra, colar cervical sem compressão das jugulares",
    "PAS ≥ 100–110 mmHg no adulto (evitar hipotensão); SF 0,9% como solução de manutenção; nunca soro hipotônico",
    "Normotermia, normoglicemia, analgesia e sedação adequadas; tratar crise convulsiva",
    "Osmoterapia (salina hipertônica ou manitol) se sinais de herniação ou HIC",
    "TC de crânio urgente e neurocirurgia (evacuação, derivação ventricular, craniectomia)"
  ],
  fataisExcluir: [
    "Hematoma epidural/subdural agudo, hemorragia intraparenquimatosa",
    "Hidrocefalia aguda",
    "AVC isquêmico maligno (edema), trombose venosa cerebral",
    "Abscesso, meningite/encefalite, tumor",
    "Encefalopatia hepática aguda, hiponatremia aguda grave, CAD com edema cerebral (criança)"
  ],
  proximaDecisao: "Após osmoterapia e TC: lesão cirúrgica → neurocirurgia imediata. Sem lesão cirúrgica e Glasgow ≤ 8 → UTI com monitorização de PIC (alvo PIC < 22 mmHg e PPC 60–70 mmHg no adulto). Edema vasogênico de tumor ou abscesso → dexametasona.",
  clinica: {
    anamnese: [
      "Trauma, cefaleia progressiva (pior ao deitar, tossir), vômitos, alteração visual",
      "Câncer, imunossupressão, febre, anticoagulante",
      "Derivação ventricular prévia (disfunção de válvula)",
      "Gestação/puerpério, anticoncepcional (trombose venosa)"
    ],
    exameFisico: [
      "Glasgow, pupilas (tamanho, reação), postura motora",
      "Fundo de olho (papiledema), VI par",
      "PA, FC, padrão respiratório",
      "Criança: fontanela, perímetro cefálico"
    ],
    diferenciais: [
      { dx: "Hipertensão intracraniana idiopática", pista: "Mulher jovem, obesa, papiledema, Glasgow normal, TC normal; tratamento eletivo" },
      { dx: "Coma tóxico-metabólico", pista: "Pupilas simétricas e reativas; ver ficha rebaixamento-consciencia" },
      { dx: "Estado de mal não convulsivo", pista: "Flutuação, automatismos; EEG" }
    ],
    gravidade: [
      "PIC normal adulto ~5–15 mmHg; tratar se > 22 mmHg (BTF 2016)",
      "PPC = PAM − PIC; alvo 60–70 mmHg no adulto",
      "Herniação uncal: midríase ipsilateral + hemiparesia contralateral; central: queda progressiva do Glasgow, pupilas médias, Cheyne-Stokes"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — URGENTE. Sinais de hipertensão intracraniana/herniação.",
      porQue: "Causa e indicação cirúrgica.",
      esperar: "Desvio de linha média, apagamento de cisternas e sulcos, hidrocefalia.",
      interpretacao: "Cisternas da base apagadas = alto risco. Desvio > 5 mm com lesão expansiva → neurocirurgia.",
      limitacoes: "Edema difuso precoce pode ser sutil; TC normal não exclui trombose venosa (angio/venoTC)."
    },
    {
      nome: "Laboratório",
      pedido: "Sódio, potássio, osmolalidade sérica, glicemia, ureia, creatinina, gasometria arterial, hemograma, TP/INR, TTPa, amônia (hepatopata), hemoculturas se febre. Sódio e osmolalidade de 6/6 h durante osmoterapia.",
      porQue: "Guiar osmoterapia, excluir causas metabólicas.",
      esperar: "—",
      interpretacao: "Salina hipertônica: alvo de Na em geral 145–155 mEq/L (evitar > 160). Manitol: suspender se gap osmolar > 20 (ou osmolalidade > 320).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Salina hipertônica (NaCl 3%)",
      linha: "l1",
      dose: "Adulto: 250 mL (ou 3–5 mL/kg) em 15–30 min. Criança: 2–5 mL/kg em 10–20 min",
      via: "IV (3% pode ser em veia periférica calibrosa)",
      intervalo: "Repetir conforme clínica, Na e PIC",
      duracao: "Ponte até o tratamento da causa",
      monitorizacao: "Sódio de 4/4–6/6 h (alvo 145–155; evitar > 160 e subida > 10–12 mEq/L em 24 h na hiponatremia crônica), volemia",
      contraindicacoes: "Hipernatremia > 160, hiponatremia crônica (risco de desmielinização)",
      ajustes: "Preparo do NaCl 3% (500 mL): SF 0,9% 445 mL + NaCl 20% 55 mL. NaCl 7,5%, 20% ou 23,4% só em acesso central. Preferida se hipotensão ou hipovolemia"
    },
    {
      droga: "Manitol 20%",
      linha: "l1",
      dose: "0,25–1 g/kg (adulto 70 kg com 1 g/kg = 350 mL). Criança: 0,25–1 g/kg",
      via: "IV em 15–20 min",
      intervalo: "Repetir 0,25–0,5 g/kg a cada 4–6 h se necessário",
      duracao: "Ponte",
      monitorizacao: "Diurese (sonda vesical), PA, Na, osmolalidade e gap osmolar, função renal",
      contraindicacoes: "Hipotensão, hipovolemia, anúria, IC congestiva",
      ajustes: "Manitol 20% = 200 mg/mL; usar equipo com filtro (cristaliza). Repor diurese com SF 0,9% para evitar hipovolemia"
    },
    {
      droga: "Hiperventilação",
      linha: "adj",
      dose: "PaCO₂ 30–35 mmHg",
      via: "Ventilação mecânica",
      intervalo: "Breve",
      duracao: "Minutos, como ponte para cirurgia/osmoterapia",
      monitorizacao: "Gasometria, capnografia",
      contraindicacoes: "Hiperventilação profilática ou prolongada (isquemia cerebral)",
      ajustes: "Fora da herniação: manter PaCO₂ 35–40 mmHg"
    },
    {
      droga: "Dexametasona",
      linha: "adj",
      dose: "Adulto: 10 mg IV ataque, depois 4 mg 6/6 h. Criança: 0,5–1 mg/kg ataque (máx 10 mg), depois 0,25–0,5 mg/kg/dia de 6/6 h (máx 16 mg/dia)",
      via: "IV ou VO",
      intervalo: "6/6 h",
      duracao: "Conforme neurocirurgia/oncologia, com desmame",
      monitorizacao: "Glicemia",
      contraindicacoes: "TCE (CRASH: aumenta mortalidade), AVC isquêmico ou hemorrágico (sem benefício)",
      ajustes: "Só para edema vasogênico de tumor ou abscesso (e meningite bacteriana conforme ficha meningite)"
    },
    {
      droga: "Analgesia e sedação",
      linha: "adj",
      dose: "Fentanil 1–2 mcg/kg/h + propofol 1–3 mg/kg/h (adulto) ou midazolam, titulados",
      via: "IV contínua",
      intervalo: "Contínuo",
      duracao: "Conforme PIC",
      monitorizacao: "PA (evitar hipotensão), RASS",
      contraindicacoes: "Propofol em criança por tempo prolongado (síndrome de infusão)",
      ajustes: "Ver ficha sedacao-continua. Tosse e agitação aumentam a PIC"
    }
  ],
  destino: {
    agora: ["Sala de emergência; neurocirurgia acionada; UTI"],
    reavaliar: ["Glasgow e pupilas de 15/15 min após osmoterapia, depois de 1/1 h", "Na e osmolalidade de 4/4–6/6 h", "Diurese horária com manitol"],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["Todos: UTI (preferencialmente neurointensiva)"],
    transferencia: ["Sem neurocirurgia/UTI: transferência imediata após via aérea, osmoterapia e estabilização hemodinâmica"]
  },
  prescricao: {
    hospitalar: "HIPERTENSÃO INTRACRANIANA / HERNIAÇÃO — ADULTO (peso: ___ kg)\n1. Dieta zero.\n2. Cabeceira 30°, cabeça em posição neutra; evitar compressão cervical; sonda vesical de demora.\n3. SF 0,9% IV a 80–100 mL/h (manutenção isotônica; NÃO usar soro glicosado ou hipotônico).\n4. NaCl 3% (SF 0,9% 445 mL + NaCl 20% 55 mL) — 250 mL IV em 20 min; repetir conforme clínica e sódio.\n   OU manitol 20% 1 g/kg (70 kg = 350 mL) IV em 20 min com equipo com filtro; depois 0,25–0,5 g/kg IV de 6/6 h se necessário; repor diurese com SF 0,9%.\n5. Se intubado: ventilar para PaCO₂ 35–40 mmHg (30–35 só por minutos se herniação); SpO₂ ≥ 94%.\n6. Sedação/analgesia contínua (ver ficha sedacao-continua) se intubado.\n7. Dipirona 1 g IV de 6/6 h se T ≥ 37,5 °C (manter normotermia).\n8. Insulina regular SC conforme glicemia capilar se > 180 mg/dL.\n9. Se tumor ou abscesso com edema: dexametasona 10 mg IV agora, depois 4 mg IV de 6/6 h + omeprazol 40 mg IV 1 vez ao dia.\n10. Cuidados: Glasgow e pupilas de 1/1 h; PAM contínua (alvo PAS ≥ 100–110); sódio e osmolalidade de 6/6 h; diurese horária; avisar se anisocoria, queda do Glasgow, bradicardia com hipertensão ou Na > 155.\n\nCRIANÇA (por kg)\n- NaCl 3% 2–5 mL/kg IV em 10–20 min.\n- Manitol 20% 0,25–1 g/kg (1,25–5 mL/kg) IV em 20 min.\n- Manutenção com solução isotônica; evitar hipotensão para a idade (ver ficha sinais-vitais-pediatricos)."
  },
  orientacoesRetorno: [
    "Após a alta: voltar imediatamente se dor de cabeça forte que piora, vômitos repetidos, sonolência, confusão, convulsão ou visão dupla",
    "Quem tem válvula (derivação): os mesmos sinais podem indicar mau funcionamento — procurar emergência",
    "Lactente: voltar se moleira estufada, vômitos, irritabilidade ou sonolência"
  ],
  fontes: [
    "Brain Trauma Foundation — Guidelines for the Management of Severe TBI, 4ª ed. (2016)",
    "Brain Trauma Foundation — Guidelines for the Management of Pediatric Severe TBI, 3ª ed. (2019)",
    "Neurocritical Care Society — Guidelines for the Acute Treatment of Cerebral Edema in Neurocritical Care Patients (2020)",
    "SIBICC — Seattle International Severe TBI Consensus Conference (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
