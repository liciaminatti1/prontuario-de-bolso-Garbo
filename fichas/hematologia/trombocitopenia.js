// Trombocitopenia (plaquetopenia): investigação, PTI, PTT, transfusão
registrarFicha({
  id: "trombocitopenia",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Plaquetopenia: investigação, PTI, PTT e quando transfundir",
  resumo: "Plaquetas < 150.000/mm³. Confirmar no esfregaço (excluir pseudoplaquetopenia), procurar microangiopatia trombótica (PTT: emergência), avaliar sangramento e tratar a causa. PTI é diagnóstico de exclusão.",
  palavrasChave: "plaquetopenia trombocitopenia plaquetas baixas pti purpura trombocitopenica imune ptt purpura trombotica plasmic esquizocitos microangiopatia sha hit heparina 4t transfusao de plaquetas petequias imunoglobulina dexametasona plasmaferese",
  critico: {
    tempo: "Esquizócitos + plaquetopenia: PTT",
    texto: "Plaquetopenia com anemia hemolítica e esquizócitos (Coombs negativo) = microangiopatia trombótica. PLASMIC ≥ 6: plasmaférese urgente + corticoide; não transfundir plaquetas sem sangramento grave."
  },
  alarmes: [
    "Sangramento mucoso ativo (gengiva, epistaxe, hematúria, melena), bolhas hemorrágicas na boca",
    "Cefaleia, alteração neurológica ou sinais focais (hemorragia intracraniana ou PTT)",
    "Anemia hemolítica com esquizócitos, LDH alta, febre, alteração renal ou neurológica (PTT/SHU)",
    "Plaquetas < 20.000/mm³",
    "Queda de plaquetas ≥ 50% 5–10 dias após iniciar heparina (HIT) — risco de trombose",
    "Plaquetopenia + coagulograma alterado (CIVD) ou com leucocitose/blastos (leucemia aguda)",
    "Gestante (HELLP, PTT, esteatose aguda)"
  ],
  condutaInicial: [
    "Repetir hemograma com esfregaço; se agregados, colher em tubo de citrato (pseudoplaquetopenia por EDTA)",
    "Avaliar sangramento (pele, mucosas, fundo de olho se plaquetas muito baixas) e sinais vitais",
    "Exames: hemograma com reticulócitos, esfregaço (esquizócitos, blastos), LDH, bilirrubina indireta, haptoglobina, Coombs direto, TP/INR, TTPa, fibrinogênio, creatinina, TGO, TGP, beta-hCG, HIV, HCV, HBsAg",
    "Calcular PLASMIC se houver anemia hemolítica com esquizócitos",
    "Suspender heparina se 4T intermediário/alto (HIT) e trocar por anticoagulante não heparínico",
    "Revisar drogas (heparina, sulfa, quinina, linezolida, valproato, betalactâmicos) e álcool",
    "Infecções: dengue (ver ficha dengue), HIV, hepatite C, sepse, leptospirose, malária"
  ],
  fataisExcluir: [
    "Púrpura trombocitopênica trombótica (PTT)",
    "Síndrome hemolítico-urêmica, HELLP",
    "CIVD (ver ficha coagulopatias-urgencia)",
    "Trombocitopenia induzida por heparina (HIT) com trombose",
    "Leucemia aguda / aplasia medular",
    "Hemorragia intracraniana"
  ],
  proximaDecisao: "Microangiopatia (PLASMIC alto) → plasmaférese e hematologia imediata. Isolada, sem hemólise, sem outras citopenias e exames normais → provável PTI: tratar se plaquetas < 30.000/mm³ ou sangramento. Bi ou pancitopenia, blastos ou esplenomegalia → hematologia urgente (mielograma).",
  clinica: {
    anamnese: [
      "Sangramento: petéquias, equimoses, gengivorragia, menorragia, epistaxe, melena",
      "Início, plaquetas prévias, infecção viral recente, vacinação",
      "Medicamentos (heparina nos últimos 100 dias), álcool, quinino, fitoterápicos",
      "Febre, perda de peso, sudorese noturna, dor óssea",
      "Gestação, doença autoimune (lúpus), hepatopatia",
      "Diarreia com sangue (SHU), sintomas neurológicos"
    ],
    exameFisico: [
      "Petéquias, púrpura, equimoses, sangramento mucoso (púrpura úmida = maior risco)",
      "Esplenomegalia (hiperesplenismo, hepatopatia, linfoma), linfonodomegalia",
      "Estigmas de hepatopatia",
      "Exame neurológico, fundo de olho"
    ],
    diferenciais: [
      { dx: "Pseudoplaquetopenia", pista: "Agregados no esfregaço; contagem normal em citrato" },
      { dx: "PTI", pista: "Plaquetopenia isolada, esfregaço normal com plaquetas grandes, sem esplenomegalia" },
      { dx: "PTT", pista: "Esquizócitos, LDH alta, Coombs negativo, coagulação normal, sintomas neurológicos" },
      { dx: "CIVD", pista: "Sepse/trauma/obstetrícia; TP e TTPa longos, fibrinogênio baixo, D-dímero alto" },
      { dx: "HIT", pista: "Heparina há 5–10 dias, queda > 50%, trombose; raramente < 20 mil" },
      { dx: "Hiperesplenismo / hepatopatia", pista: "Esplenomegalia, cirrose, plaquetas em geral > 50 mil" },
      { dx: "Infecções virais (dengue, HIV, HCV)", pista: "Febre, sorologias" },
      { dx: "Doença medular", pista: "Outras citopenias, blastos, macrocitose" }
    ],
    gravidade: [
      "< 10.000/mm³: alto risco de sangramento espontâneo",
      "10.000–30.000/mm³: risco com mucosa ou trauma",
      "> 50.000/mm³: sangramento raro sem outro distúrbio; seguro para a maioria dos procedimentos",
      "PLASMIC 6–7: alta probabilidade de PTT (deficiência grave de ADAMTS13)"
    ]
  },
  exames: [
    {
      nome: "Hemograma com esfregaço",
      pedido: "Hemograma completo com contagem de plaquetas, reticulócitos e análise do esfregaço de sangue periférico (esquizócitos, agregados plaquetários, blastos). Repetir em tubo de citrato se agregados.",
      porQue: "Confirmar e orientar a causa.",
      esperar: "—",
      interpretacao: "Esquizócitos ≥ 1% sugerem microangiopatia. Plaquetas gigantes: PTI ou macrotrombocitopenia hereditária.",
      limitacoes: "Contadores automáticos falham com agregados e plaquetas grandes."
    },
    {
      nome: "Hemólise e coagulação",
      pedido: "LDH, bilirrubinas, haptoglobina, Coombs direto, TP/INR, TTPa, fibrinogênio, D-dímero, creatinina, urina tipo 1.",
      porQue: "Separar PTT/SHU de CIVD e de causas imunes.",
      esperar: "PTT: coagulação normal; CIVD: TP/TTPa longos, fibrinogênio baixo.",
      interpretacao: "Ver PLASMIC na tabela.",
      limitacoes: "—"
    },
    {
      nome: "Causas secundárias",
      pedido: "Anti-HIV, anti-HCV, HBsAg, TGO, TGP, TSH, beta-hCG, FAN; sorologia/NS1 para dengue se febre; vitamina B12 e folato se macrocitose.",
      porQue: "PTI secundária e diferenciais.",
      esperar: "—",
      interpretacao: "HIV e HCV devem ser testados em toda suspeita de PTI no adulto.",
      limitacoes: "—"
    },
    {
      nome: "ADAMTS13 e anticorpos anti-PF4",
      pedido: "Atividade de ADAMTS13 (colher ANTES da plasmaférese ou plasma). Anticorpo anti-PF4/heparina se 4T ≥ 4.",
      porQue: "Confirmar PTT e HIT.",
      esperar: "PTT: ADAMTS13 < 10%.",
      interpretacao: "Não aguardar resultado para tratar.",
      limitacoes: "Pouca disponibilidade; resultado demora."
    }
  ],
  tratamento: [
    {
      droga: "Prednisona (PTI)",
      linha: "l1",
      dose: "1 mg/kg/dia (máximo 80 mg)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Até resposta, depois reduzir; tempo total ≤ 6 semanas (ASH 2019)",
      monitorizacao: "Plaquetas semanais, glicemia, PA",
      contraindicacoes: "Infecção não controlada",
      ajustes: "Indicação: plaquetas < 30.000/mm³ ou sangramento. Proteção gástrica se risco"
    },
    {
      droga: "Dexametasona (PTI — alternativa)",
      linha: "alt",
      dose: "40 mg/dia",
      via: "VO ou IV",
      intervalo: "1×/dia",
      duracao: "4 dias (pode repetir 1–3 ciclos conforme hematologia)",
      monitorizacao: "Glicemia, humor",
      contraindicacoes: "Infecção não controlada",
      ajustes: "Resposta mais rápida que a prednisona"
    },
    {
      droga: "Imunoglobulina humana IV (PTI com sangramento)",
      linha: "adj",
      dose: "1 g/kg/dia",
      via: "IV",
      intervalo: "1×/dia",
      duracao: "1–2 dias",
      monitorizacao: "Cefaleia, trombose, função renal",
      contraindicacoes: "Deficiência de IgA com anticorpos",
      ajustes: "Sangramento grave ou necessidade de subida rápida (cirurgia). Sangramento com risco de vida: imunoglobulina + corticoide IV + transfusão de plaquetas"
    },
    {
      droga: "Plasmaférese (troca plasmática) — PTT",
      linha: "l1",
      dose: "1–1,5 volemia plasmática",
      via: "Aférese",
      intervalo: "Diária",
      duracao: "Até plaquetas > 150.000/mm³ por 2 dias e LDH normal",
      monitorizacao: "Plaquetas, LDH, creatinina, neurológico",
      contraindicacoes: "—",
      ajustes: "Se aférese não disponível de imediato: plasma fresco congelado 20–30 mL/kg enquanto transfere. Associar metilprednisolona 1 g/dia IV por 3 dias (ou prednisona 1 mg/kg); rituximabe e caplacizumabe pelo hematologista"
    },
    {
      droga: "Transfusão de plaquetas",
      linha: "adj",
      dose: "1 unidade randômica/10 kg (ou 1 aférese)",
      via: "IV em 30 min",
      intervalo: "Conforme contagem e sangramento",
      duracao: "—",
      monitorizacao: "Contagem 1 h após",
      contraindicacoes: "PTT e HIT sem sangramento grave (risco de trombose)",
      ajustes: "Gatilhos na tabela. PTI: só em sangramento grave"
    },
    {
      droga: "Heparina na suspeita de HIT",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Suspender toda heparina (inclusive flush e enoxaparina)",
      ajustes: "Anticoagular com fondaparinux, argatrobana ou DOAC conforme hematologia (HIT tem alto risco de trombose)"
    }
  ],
  destino: {
    agora: ["Microangiopatia: hematologia e plasmaférese", "Sangramento com plaquetas baixas: transfusão conforme tabela"],
    reavaliar: ["Plaquetas diárias na internação; LDH na PTT"],
    alta: [
      "PTI com plaquetas ≥ 20–30 mil e sem sangramento mucoso, com hemograma em 1 semana e hematologia",
      "Plaquetopenia leve (> 100 mil) isolada e assintomática: investigar na UBS e repetir em 2–4 semanas"
    ],
    observacao: ["—"],
    internacao: ["Plaquetas < 20.000/mm³ com sangramento mucoso, PTT/SHU, HIT, CIVD, suspeita de leucemia"],
    transferencia: ["PTT sem aférese ou hematologia: regulação urgente após iniciar plasma e corticoide"]
  },
  prescricao: {
    hospitalar: "PLAQUETOPENIA — MODELOS (peso: ___ kg)\n\nA) PTI COM PLAQUETAS < 30.000/mm³ OU SANGRAMENTO\n1. Prednisona 1 mg/kg (___ mg, máx. 80 mg) VO 1×/dia pela manhã (ou dexametasona 40 mg VO/IV 1×/dia por 4 dias).\n2. Se sangramento importante: imunoglobulina humana 1 g/kg IV 1×/dia por 1–2 dias (iniciar lento e aumentar conforme bula).\n3. Sangramento com risco de vida: acrescentar metilprednisolona 1 g IV/dia e transfusão de plaquetas 1 U/10 kg; ácido tranexâmico 1 g IV de 8/8 h como adjuvante (exceto hematúria).\n4. Omeprazol 20 mg VO 1×/dia durante o corticoide.\n5. Evitar IM, AAS, AINE, anticoagulantes.\n6. Plaquetas diárias.\n\nB) SUSPEITA DE PTT (PLASMIC ≥ 6)\n1. Colher ADAMTS13 antes de qualquer plasma.\n2. Plasmaférese diária (solicitar à hemoterapia agora). Enquanto aguarda: plasma fresco congelado 20–30 mL/kg IV.\n3. Metilprednisolona 1 g IV 1×/dia por 3 dias (ou prednisona 1 mg/kg/dia).\n4. NÃO transfundir plaquetas sem sangramento grave.\n5. Ácido fólico 5 mg VO/dia; hemoglobina, plaquetas, LDH, creatinina diários.",
    ambulatorial: "PTI ESTÁVEL — USO ORAL\n1. Prednisona 20 mg ---------------------------- ___ comprimidos\n   Tomar ___ comprimidos pela manhã por ___ dias, depois reduzir conforme orientação da hematologia.\n2. Omeprazol 20 mg ----------------------------- 30 cápsulas\n   Tomar 1 cápsula em jejum enquanto usar a prednisona.\n\nSOLICITAÇÃO: hemograma com plaquetas em 7 dias.\nNão usar AAS, anti-inflamatórios, injeções no músculo."
  },
  orientacoesRetorno: [
    "Não usar AAS, anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida) ou injeções no músculo",
    "Evitar esportes de contato e atividades com risco de queda enquanto as plaquetas estiverem baixas",
    "Escovar os dentes com escova macia",
    "Voltar imediatamente se: sangramento na boca ou nariz que não para, fezes pretas, urina com sangue, dor de cabeça forte, vômitos, fraqueza de um lado do corpo ou confusão",
    "Fazer o hemograma de controle na data marcada"
  ],
  tabelas: [
    {
      titulo: "Escore PLASMIC (1 ponto cada)",
      colunas: ["Critério", "Ponto"],
      linhas: [
        ["Plaquetas < 30.000/mm³", "1"],
        ["Hemólise: reticulócitos > 2,5%, haptoglobina indetectável ou bilirrubina indireta > 2 mg/dL", "1"],
        ["Sem câncer ativo", "1"],
        ["Sem transplante de órgão sólido ou de medula", "1"],
        ["VCM < 90 fL", "1"],
        ["INR < 1,5", "1"],
        ["Creatinina < 2,0 mg/dL", "1"]
      ],
      nota: "0–4: baixo risco · 5: intermediário · 6–7: alto risco de PTT (Bendapudi et al., 2017)."
    },
    {
      titulo: "Gatilhos usuais para transfusão de plaquetas (adulto)",
      colunas: ["Situação", "Transfundir se plaquetas"],
      linhas: [
        ["Profilaxia, hipoproliferativa estável (quimioterapia, aplasia)", "< 10.000/mm³"],
        ["Febre, sepse, coagulopatia associada", "< 20.000/mm³"],
        ["Cateter venoso central (sítio compressível)", "< 10.000–20.000/mm³"],
        ["Punção lombar, EDA com biópsia, cirurgia de grande porte", "< 50.000/mm³"],
        ["Sangramento ativo significativo, politrauma", "< 50.000/mm³"],
        ["Neurocirurgia, hemorragia intracraniana, cirurgia oftalmológica posterior", "< 100.000/mm³"],
        ["PTI, PTT, HIT", "Só sangramento grave/risco de vida"]
      ],
      nota: "Conferir o protocolo do serviço de hemoterapia. Dose: 1 unidade randômica para cada 10 kg ou 1 unidade de aférese."
    }
  ],
  fontes: [
    "ASH — Guidelines for immune thrombocytopenia (Neunert et al., Blood Adv 2019)",
    "ISTH — Guidelines for the diagnosis and treatment of thrombotic thrombocytopenic purpura (2020)",
    "Bendapudi PK et al. — PLASMIC score (Lancet Haematol, 2017)",
    "AABB — Platelet transfusion: clinical practice guideline (Kaufman et al., 2015; atualização AABB/ICTMG 2025)",
    "ASH — Guidelines for heparin-induced thrombocytopenia (Cuker et al., 2018)",
    "Ministério da Saúde — Guia para uso de hemocomponentes, 2ª ed. (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
