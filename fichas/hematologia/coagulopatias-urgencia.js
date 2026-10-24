// Coagulopatias na urgência: CIVD, sangramento em anticoagulado, INR alto
registrarFicha({
  id: "coagulopatias-urgencia",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Coagulopatias na urgência: CIVD, reversão de anticoagulantes e INR alto",
  resumo: "Sangramento em uso de varfarina, DOAC ou heparina (reversão com vitamina K, complexo protrombínico, idarucizumabe, protamina), INR elevado sem sangramento e coagulação intravascular disseminada (escore ISTH).",
  palavrasChave: "coagulopatia civd coagulacao intravascular disseminada isth reversao anticoagulante varfarina marevan inr alto vitamina k fitomenadiona complexo protrombinico ccp beriplex octaplex plasma idarucizumabe praxbind dabigatrana rivaroxabana apixabana andexanet protamina heparina enoxaparina fibrinogenio crioprecipitado acido tranexamico",
  critico: {
    tempo: "Sangramento grave: reverter já",
    texto: "Sangramento maior ou em sítio crítico em anticoagulado: suspender, ressuscitar e reverter sem esperar exames — varfarina: vitamina K 10 mg IV + complexo protrombínico; dabigatrana: idarucizumabe 5 g; anti-Xa: andexanet ou complexo protrombínico."
  },
  alarmes: [
    "Sangramento em sítio crítico: intracraniano, intraespinhal, ocular, pericárdico, retroperitoneal, intra-articular, intramuscular com síndrome compartimental",
    "Instabilidade hemodinâmica, queda de Hb ≥ 2 g/dL ou necessidade de ≥ 2 unidades de hemácias",
    "TCE em anticoagulado (TC de crânio mesmo com exame normal)",
    "INR > 10",
    "Sepse, trauma, complicação obstétrica ou leucemia promielocítica com sangramento difuso (CIVD)",
    "Plaquetas caindo com fibrinogênio baixo"
  ],
  condutaInicial: [
    "Suspender o anticoagulante/antiagregante; anotar droga, dose e horário da última tomada",
    "ABC, acesso calibroso, compressão local, controle da fonte (endoscopia, cirurgia, radiologia)",
    "Exames: hemograma, TP/INR, TTPa, fibrinogênio, D-dímero, creatinina (ClCr), tipagem; tempo de trombina ou TTPa (dabigatrana) e anti-Xa calibrado se disponível",
    "Classificar o sangramento: maior/sítio crítico → reverter; menor → suspender doses e medidas locais",
    "Varfarina: vitamina K 10 mg IV + complexo protrombínico 4 fatores (CCP) por INR; sem CCP, plasma fresco 15 mL/kg",
    "Dabigatrana: idarucizumabe 5 g IV; sem ele, CCP 50 U/kg e considerar hemodiálise",
    "Rivaroxabana/apixabana/edoxabana: andexanet alfa se disponível; senão CCP 4 fatores 50 U/kg (ou 2.000 U); carvão ativado se última dose recente",
    "Heparina: protamina conforme dose e tempo",
    "Ácido tranexâmico 1 g IV no trauma (até 3 h) e hemorragia pós-parto; não usar em hemorragia digestiva",
    "Reavaliar necessidade de reiniciar a anticoagulação após hemostasia (geralmente após 1–2 semanas em sangramento maior, individualizar)"
  ],
  fataisExcluir: [
    "Hemorragia intracraniana",
    "Hemorragia retroperitoneal (dor lombar, queda de Hb, sem exteriorização)",
    "CIVD por sepse, trauma, descolamento de placenta, embolia amniótica, leucemia promielocítica aguda",
    "Insuficiência hepática aguda (ver ficha hepatite-aguda-insuficiencia-hepatica)",
    "Trombocitopenia induzida por heparina (ver ficha trombocitopenia)"
  ],
  proximaDecisao: "Após reversão: repetir INR em 30 min a 1 h (CCP) e em 6–12 h (vitamina K); repetir vitamina K se necessário. CIVD: tratar a causa; transfundir apenas se sangramento ou procedimento; heparina se predomínio trombótico. INR alto sem sangramento: ajustar varfarina (ver ficha anticoagulacao-oral).",
  clinica: {
    anamnese: [
      "Anticoagulante, dose, horário da última tomada, indicação (prótese mecânica, FA, TEV)",
      "Função renal e hepática, interações recentes (antibióticos, amiodarona, azóis)",
      "Antiagregantes, AINE, álcool, quedas, TCE",
      "Sepse, trauma, gestação/puerpério, neoplasia (CIVD)",
      "Hemorragia prévia, doença hematológica"
    ],
    exameFisico: [
      "PA, FC, perfusão, sinais de choque",
      "Local e volume do sangramento, petéquias, equimoses, sangramento em punções (CIVD)",
      "Exame neurológico (HIC), dor lombar/abdominal (retroperitônio)",
      "Sinais de trombose (isquemia de extremidades na CIVD)"
    ],
    diferenciais: [
      { dx: "CIVD", pista: "Doença de base; plaquetas baixas, TP/TTPa longos, fibrinogênio baixo, D-dímero muito alto" },
      { dx: "Hepatopatia", pista: "INR alto, plaquetas baixas por hiperesplenismo, fibrinogênio normal ou baixo, D-dímero moderado" },
      { dx: "Deficiência de vitamina K", pista: "Desnutrição, antibiótico, colestase; INR corrige com vitamina K" },
      { dx: "PTT / microangiopatia", pista: "Esquizócitos, coagulação normal" },
      { dx: "Coagulopatia dilucional", pista: "Transfusão maciça sem plasma/plaquetas" },
      { dx: "Hemofilia adquirida", pista: "TTPa isolado longo, hematomas extensos em idoso ou puérpera" }
    ],
    gravidade: [
      "Sangramento maior (ISTH): fatal, sítio crítico, queda de Hb ≥ 2 g/dL ou transfusão de ≥ 2 unidades",
      "Escore ISTH de CIVD ≥ 5: CIVD manifesta (tabela)",
      "Sepse: escore SIC (sepsis-induced coagulopathy) ≥ 4 identifica fase precoce"
    ]
  },
  exames: [
    {
      nome: "Coagulação",
      pedido: "Hemograma com plaquetas, TP/INR, TTPa, fibrinogênio (Clauss), D-dímero, tempo de trombina. Repetir em 6–8 h na CIVD.",
      porQue: "Escore ISTH, guiar reposição.",
      esperar: "—",
      interpretacao: "Tempo de trombina normal exclui efeito relevante de dabigatrana. TP normal não exclui rivaroxabana/apixabana.",
      limitacoes: "Testes convencionais não quantificam DOAC; anti-Xa calibrado para a droga, se disponível."
    },
    {
      nome: "Função orgânica",
      pedido: "Creatinina (ClCr por Cockcroft-Gault), TGO, TGP, bilirrubinas, lactato, tipagem ABO/Rh e prova cruzada.",
      porQue: "Eliminação do DOAC e causas.",
      esperar: "—",
      interpretacao: "ClCr baixo prolonga efeito da dabigatrana (considerar diálise).",
      limitacoes: "—"
    },
    {
      nome: "Imagem",
      pedido: "TC de crânio sem contraste em anticoagulado com TCE ou cefaleia/alteração neurológica. Angio-TC conforme sítio do sangramento.",
      porQue: "Sangramento oculto em sítio crítico.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Vitamina K (fitomenadiona)",
      linha: "l1",
      dose: "Sangramento maior: 10 mg IV · INR > 10 sem sangramento: 2,5–5 mg VO · INR 4,5–10 sem sangramento: em geral não precisa",
      via: "IV lenta ou VO",
      intervalo: "Dose única; repetir a cada 12 h se INR persistir alto",
      duracao: "—",
      monitorizacao: "INR em 6–12 h (IV) ou 24 h (VO)",
      contraindicacoes: "—",
      ajustes: "IV: diluir 10 mg (1 mL da ampola 10 mg/mL) em 50 mL de SF 0,9% ou SG 5% e infundir em 20–30 min (risco raro de anafilaxia). Não usar via SC. Doses altas causam resistência à varfarina por dias"
    },
    {
      droga: "Complexo protrombínico 4 fatores (CCP)",
      linha: "l1",
      dose: "Varfarina — INR 2–4: 25 U/kg (máx. 2.500 U); INR 4–6: 35 U/kg (máx. 3.500 U); INR > 6: 50 U/kg (máx. 5.000 U). Anti-Xa ou dabigatrana sem antídoto: 50 U/kg (ou 2.000 U)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "INR 30 min após; trombose",
      contraindicacoes: "HIT (algumas apresentações contêm heparina), CIVD ativa",
      ajustes: "Sempre associar vitamina K na varfarina (o efeito do CCP dura horas). Dose fixa 1.000–1.500 U é alternativa aceita (ACC 2020). Velocidade conforme bula"
    },
    {
      droga: "Idarucizumabe",
      linha: "l1",
      dose: "5 g (2 frascos de 2,5 g/50 mL)",
      via: "IV, 2 infusões consecutivas de 5–10 min ou bolus",
      intervalo: "Dose única (repetir se recorrência e TTPa/TT prolongados)",
      duracao: "—",
      monitorizacao: "TTPa, tempo de trombina",
      contraindicacoes: "—",
      ajustes: "Específico para dabigatrana. Também antes de cirurgia urgente"
    },
    {
      droga: "Andexanet alfa",
      linha: "alt",
      dose: "Bolus + infusão em dose baixa ou alta conforme droga, dose e horário da última tomada (bula)",
      via: "IV",
      intervalo: "Bolus seguido de infusão de 2 h",
      duracao: "—",
      monitorizacao: "Eventos trombóticos",
      contraindicacoes: "—",
      ajustes: "Para rivaroxabana e apixabana em sangramento com risco de vida. Disponibilidade restrita no Brasil; na falta, CCP 4 fatores"
    },
    {
      droga: "Protamina",
      linha: "l1",
      dose: "Heparina não fracionada: 1 mg para cada 100 U infundidas nas últimas 2–3 h (máx. 50 mg) · Enoxaparina < 8 h: 1 mg por 1 mg de enoxaparina; 8–12 h: 0,5 mg por 1 mg (máx. 50 mg)",
      via: "IV lenta (≤ 5 mg/min, em 10 min)",
      intervalo: "Pode repetir 0,5 mg por 1 mg de enoxaparina se sangramento persiste",
      duracao: "—",
      monitorizacao: "TTPa (HNF), PA, anafilaxia",
      contraindicacoes: "Alergia a peixe ou exposição prévia à protamina (insulina NPH) aumentam risco de reação",
      ajustes: "Reverte só parcialmente a enoxaparina (~60%). Ampola 10 mg/mL"
    },
    {
      droga: "Plasma fresco congelado",
      linha: "alt",
      dose: "15 mL/kg",
      via: "IV",
      intervalo: "Conforme TP/INR e sangramento",
      duracao: "—",
      monitorizacao: "Sobrecarga volêmica (TACO), TRALI",
      contraindicacoes: "—",
      ajustes: "Na varfarina, só se CCP indisponível. CIVD com sangramento e TP/TTPa > 1,5×: 15–30 mL/kg"
    },
    {
      droga: "Crioprecipitado (CIVD com sangramento)",
      linha: "adj",
      dose: "1 U/10 kg",
      via: "IV",
      intervalo: "Conforme fibrinogênio",
      duracao: "—",
      monitorizacao: "Fibrinogênio (alvo > 150 mg/dL)",
      contraindicacoes: "—",
      ajustes: "Concentrado de fibrinogênio é alternativa"
    },
    {
      droga: "Plaquetas (CIVD)",
      linha: "adj",
      dose: "1 U randômica/10 kg ou 1 aférese",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Contagem",
      contraindicacoes: "—",
      ajustes: "Se sangramento com < 50.000/mm³; profilático só se < 10–20.000/mm³ com alto risco"
    },
    {
      droga: "Heparina na CIVD com trombose predominante",
      linha: "adj",
      dose: "Profilática (enoxaparina 40 mg/dia) ou terapêutica se trombose estabelecida",
      via: "SC ou IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo",
      ajustes: "Conforme hematologia"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "1 g em 10 min (+ 1 g em 8 h no trauma)",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Trombose",
      contraindicacoes: "Hemorragia digestiva (HALT-IT), CIVD sem hiperfibrinólise, hematúria alta",
      ajustes: "Trauma até 3 h (CRASH-2) e TCE leve a moderado (CRASH-3); hemorragia pós-parto (WOMAN)"
    }
  ],
  destino: {
    agora: ["Suspender anticoagulante, reverter se sangramento maior, controlar a fonte"],
    reavaliar: ["INR 30 min após CCP; INR 6–12 h após vitamina K IV", "CIVD: plaquetas, TP, TTPa, fibrinogênio de 6/6–8/8 h"],
    alta: [
      "INR alto sem sangramento: ajustar a dose, vitamina K oral se > 10, INR em 24–48 h na UBS",
      "Sangramento menor controlado com plano claro de retomada do anticoagulante"
    ],
    observacao: ["TCE leve em anticoagulado com TC normal: observar conforme protocolo (ver ficha tce-leve)"],
    internacao: ["Sangramento maior, INR > 10 com fatores de risco, CIVD"],
    transferencia: ["Sem CCP, idarucizumabe, hemoterapia ou neurocirurgia: regulação após iniciar vitamina K e medidas disponíveis"]
  },
  prescricao: {
    hospitalar: "MODELOS DE REVERSÃO — ADULTO (peso: ___ kg; INR: ___ ; última dose: ___ )\n\nA) VARFARINA COM SANGRAMENTO MAIOR\n1. Suspender varfarina.\n2. Vitamina K 10 mg/mL — 1 ampola (10 mg) em 50 mL de SF 0,9% IV em 20–30 min.\n3. Complexo protrombínico 4 fatores: INR 2–4: 25 U/kg; 4–6: 35 U/kg; > 6: 50 U/kg (máx. 5.000 U) = ___ U IV, velocidade conforme bula. Sem CCP: plasma fresco congelado 15 mL/kg (___ mL).\n4. INR 30 min após o CCP e em 6–12 h; repetir vitamina K se INR > 1,5.\n\nB) DABIGATRANA COM SANGRAMENTO MAIOR\n1. Idarucizumabe 2,5 g/50 mL — 2 frascos (5 g) IV, um após o outro, cada um em 5–10 min.\n2. Sem idarucizumabe: CCP 4 fatores 50 U/kg IV; avaliar hemodiálise (ClCr baixo).\n3. Carvão ativado 50 g VO se última dose há até 2 h e via aérea protegida.\n\nC) RIVAROXABANA / APIXABANA / EDOXABANA COM SANGRAMENTO MAIOR\n1. Andexanet alfa conforme bula (se disponível) OU CCP 4 fatores 50 U/kg (ou 2.000 U) IV.\n2. Carvão ativado 50 g VO se última dose há até 2 h.\n\nD) HEPARINA\n1. HNF: protamina 1 mg para cada 100 U recebidas nas últimas 2–3 h (máx. 50 mg) IV lento em 10 min.\n2. Enoxaparina < 8 h: protamina 1 mg por mg de enoxaparina (máx. 50 mg); 8–12 h: 0,5 mg por mg.\n\nE) INR > 10 SEM SANGRAMENTO\n1. Suspender varfarina.\n2. Vitamina K 2,5–5 mg VO dose única (ampola pode ser dada por via oral).\n3. INR em 24 h.\n\nCONTROLES: PA, FC de 1/1 h; Hb de 6/6 h; nível de consciência; comunicar novo sangramento.",
    ambulatorial: "INR 4,5–10 SEM SANGRAMENTO (varfarina)\n1. Não tomar a varfarina hoje nem amanhã (suspender 1–2 doses).\n2. Depois, retomar com dose semanal reduzida em 10–20%: ___ mg por semana, assim: ___ .\n3. Repetir o INR em ___ dias (3–7 dias).\nSe INR > 10: vitamina K 2,5–5 mg VO e INR em 24 h (avaliar em PS se alto risco de sangramento)."
  },
  orientacoesRetorno: [
    "Não tomar remédios novos (antibióticos, anti-inflamatórios, chás) sem avisar quem controla seu anticoagulante",
    "Voltar imediatamente se: fezes pretas, vômito com sangue, urina vermelha, sangramento que não para, manchas roxas grandes, dor de cabeça forte, queda com batida na cabeça",
    "Fazer o exame de INR na data marcada",
    "Não dobrar a dose se esquecer; seguir a orientação escrita",
    "Levar sempre a identificação de que usa anticoagulante"
  ],
  tabelas: [
    {
      titulo: "Escore ISTH de CIVD manifesta (usar só com doença de base compatível)",
      colunas: ["Parâmetro", "0", "1", "2", "3"],
      linhas: [
        ["Plaquetas (/mm³)", "> 100.000", "50.000–100.000", "< 50.000", "—"],
        ["D-dímero / PDF", "Normal", "—", "Aumento moderado", "Aumento acentuado"],
        ["Prolongamento do TP (s)", "< 3", "3–6", "> 6", "—"],
        ["Fibrinogênio (mg/dL)", "> 100", "< 100", "—", "—"]
      ],
      nota: "≥ 5 = CIVD manifesta: repetir diariamente. < 5 = sugestivo de CIVD não manifesta; repetir em 1–2 dias."
    },
    {
      titulo: "Reversão por anticoagulante — resumo",
      colunas: ["Droga", "1ª escolha", "Alternativa", "Exame útil"],
      linhas: [
        ["Varfarina", "Vitamina K 10 mg IV + CCP 4 fatores (dose por INR)", "Plasma 15 mL/kg", "INR"],
        ["Dabigatrana", "Idarucizumabe 5 g IV", "CCP 50 U/kg, hemodiálise", "Tempo de trombina, TTPa"],
        ["Rivaroxabana, apixabana, edoxabana", "Andexanet alfa (se disponível)", "CCP 4 fatores 50 U/kg ou 2.000 U", "Anti-Xa calibrado"],
        ["Heparina não fracionada", "Protamina 1 mg/100 U (últimas 2–3 h)", "—", "TTPa"],
        ["Enoxaparina", "Protamina 1 mg/mg (< 8 h)", "—", "Anti-Xa"],
        ["Fondaparinux", "Sem antídoto específico", "CCP / fator VIIa recombinante (discutir)", "Anti-Xa"]
      ]
    }
  ],
  fontes: [
    "ACC — Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants (Tomaselli et al., 2020)",
    "CHEST — Antithrombotic Therapy for VTE Disease: Second Update (2021) e Evidence-Based Management of Anticoagulant Therapy (2012)",
    "ISTH — Guidance for diagnosis and treatment of DIC from harmonization of recommendations (Squizzato/Levi et al., 2013; atualização SSC 2019 sobre SIC)",
    "Ministério da Saúde — Guia para uso de hemocomponentes, 2ª ed. (2015)",
    "ESC — Guidelines for the management of atrial fibrillation (2024): reversão de anticoagulantes",
    "CRASH-2 (Lancet, 2010), CRASH-3 (Lancet, 2019), WOMAN (Lancet, 2017), HALT-IT (Lancet, 2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
