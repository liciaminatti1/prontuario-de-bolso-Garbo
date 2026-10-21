// Meningite bacteriana e viral
registrarFicha({
  id: "meningite",
  especialidade: "infectologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Meningite bacteriana e viral: antibiótico empírico por idade, dexametasona, quimioprofilaxia e notificação",
  resumo: "Febre com cefaleia, rigidez de nuca, vômitos, alteração de consciência ou petéquias; no lactente, febre, irritabilidade, recusa alimentar e fontanela abaulada. Na suspeita de meningite bacteriana: antibiótico em até 1 h (não atrasar por exames), dexametasona antes ou junto com a 1ª dose, notificação imediata e quimioprofilaxia dos contatos.",
  palavrasChave: "meningite meningococica doenca meningococica meningococcemia pneumococo haemophilus liquor puncao lombar ceftriaxona ampicilina vancomicina dexametasona rifampicina quimioprofilaxia contatos notificacao meningite viral enterovirus encefalite aciclovir",
  critico: {
    tempo: "Antibiótico em até 1 h",
    texto: "Colher hemocultura e iniciar ceftriaxona (± ampicilina/vancomicina conforme idade) em até 1 h. Se a punção lombar vai atrasar (TC, instabilidade), dar o antibiótico antes. Dexametasona 10–20 min antes ou junto com a 1ª dose."
  },
  alarmes: [
    "Petéquias ou púrpura, choque (doença meningocócica — evolução em horas)",
    "Glasgow ≤ 10, rebaixamento progressivo, convulsões, déficit focal",
    "Papiledema, bradicardia com hipertensão, anisocoria (hipertensão intracraniana)",
    "Lactente com fontanela abaulada, gemência, hipotonia",
    "Imunodeprimido, neurocirurgia ou derivação ventricular recente, fístula liquórica",
    "Febre com alteração de comportamento, alucinações ou convulsão focal (encefalite herpética — aciclovir)"
  ],
  condutaInicial: [
    "ABC, monitor, O₂ se SpO₂ < 94%, acesso venoso, glicemia capilar",
    "Precaução para gotículas (máscara cirúrgica) até 24 h de antibiótico eficaz",
    "Hemocultura imediatamente",
    "TC de crânio antes da punção só se: imunodepressão, doença do SNC prévia, convulsão nova, papiledema, déficit focal ou Glasgow ≤ 10 — nesses casos, hemocultura + dexametasona + antibiótico ANTES da TC",
    "Punção lombar se sem contraindicação (instabilidade hemodinâmica, coagulopatia/plaquetas baixas, infecção no local, sinais de herniação)",
    "Dexametasona + antibiótico empírico conforme a idade, em até 1 h",
    "Choque: ressuscitação conforme fichas Sepse (adulto) e Sepse pediátrica",
    "Notificar a vigilância imediatamente (até 24 h) para investigação e quimioprofilaxia dos contatos"
  ],
  fataisExcluir: [
    "Meningococcemia com choque",
    "Hipertensão intracraniana / herniação",
    "Encefalite herpética",
    "Abscesso cerebral, empiema subdural",
    "Hemorragia subaracnoide (cefaleia súbita, sem febre no início)",
    "Malária grave (viajante de área endêmica)"
  ],
  proximaDecisao: "Líquor bacteriano ou indefinido → manter antibiótico e ajustar por cultura/antibiograma; dexametasona por 4 dias se pneumococo/Hib confirmado ou provável, suspender se outra etiologia. Líquor viral típico, criança/adulto bem, culturas negativas em 48 h → suspender antibiótico e dexametasona.",
  clinica: {
    anamnese: [
      "Tempo de início, febre, cefaleia, vômitos, fotofobia, convulsão, sonolência",
      "Lactente: febre ou hipotermia, irritabilidade, choro ao ser pego, recusa alimentar, abaulamento de fontanela",
      "Petéquias/manchas, dor em membros, extremidades frias (meningococo)",
      "Vacinação: meningocócica C/ACWY, pneumocócica, Hib",
      "Contato com caso de meningite, otite/sinusite recente, TCE ou cirurgia, imunodepressão, esplenectomia, anemia falciforme",
      "Uso prévio de antibiótico (altera o líquor e a cultura)"
    ],
    exameFisico: [
      "Sinais vitais, perfusão, Glasgow, pupilas",
      "Rigidez de nuca, Kernig, Brudzinski (pouco sensíveis em lactentes)",
      "Pele inteira: petéquias, púrpura",
      "Fontanela, déficit focal, papiledema",
      "Foco: otoscopia, seios da face"
    ],
    diferenciais: [
      { dx: "Meningite viral (enterovírus)", pista: "Bom estado geral, líquor com celularidade < 1.000 linfocitária, glicose normal" },
      { dx: "Encefalite herpética", pista: "Alteração de comportamento, convulsão focal; aciclovir empírico" },
      { dx: "Meningite tuberculosa", pista: "Evolução subaguda, paralisia de nervos cranianos, glicose muito baixa, proteína alta, contato com TB" },
      { dx: "Meningite criptocócica", pista: "HIV avançado; tinta da China, antígeno criptocócico" },
      { dx: "Hemorragia subaracnoide", pista: "Cefaleia súbita 'a pior da vida'" },
      { dx: "Abscesso cerebral / empiema", pista: "Déficit focal, foco otológico ou sinusal" }
    ],
    gravidade: [
      "Grave: choque, Glasgow ≤ 10, convulsões, petéquias/púrpura, sinais de HIC",
      "Idades extremas e imunodeprimidos têm pior prognóstico",
      "Sequelas: surdez (fazer avaliação auditiva antes da alta), déficit motor, epilepsia, déficit cognitivo"
    ]
  },
  exames: [
    {
      nome: "Líquor",
      pedido: "Punção lombar: líquor para citologia total e diferencial, glicose (com glicemia simultânea), proteína, lactato, Gram, cultura, látex/antígenos bacterianos e PCR multiplex (meningococo, pneumococo, Hib, enterovírus, HSV) se disponível. Enviar amostra ao LACEN conforme a vigilância.",
      porQue: "Diferenciar bacteriana × viral e identificar o agente (define quimioprofilaxia).",
      esperar: "Bacteriana: turvo, > 1.000 céls com neutrófilos, glicose < 40 mg/dL ou relação liquor/sangue < 0,4, proteína elevada. Viral: < 1.000 céls com linfócitos, glicose normal.",
      interpretacao: "Antibiótico prévio pode tornar o líquor menos típico e a cultura negativa; PCR mantém sensibilidade.",
      limitacoes: "Enterovírus pode ter predomínio de neutrófilos nas primeiras horas."
    },
    {
      nome: "Hemocultura e laboratório",
      pedido: "Hemocultura (antes do antibiótico), hemograma, PCR, procalcitonina se disponível, lactato, glicemia, sódio, potássio, ureia, creatinina, coagulograma, gasometria.",
      porQue: "Sepse, CIVD, hiponatremia (SIADH).",
      esperar: "—",
      interpretacao: "Procalcitonina elevada favorece bacteriana.",
      limitacoes: "—"
    },
    {
      nome: "TC de crânio (quando indicada)",
      pedido: "Tomografia de crânio sem contraste — suspeita de meningite com [imunodepressão / convulsão / déficit focal / papiledema / Glasgow ≤ 10].",
      porQue: "Excluir lesão com efeito de massa antes da punção.",
      esperar: "Geralmente normal.",
      interpretacao: "TC normal não exclui HIC.",
      limitacoes: "Não atrasar antibiótico para fazer TC."
    },
    {
      nome: "Petéquias",
      pedido: "Raspado/biópsia de lesão purpúrica para Gram, cultura e PCR (se disponível).",
      porQue: "Identifica meningococo mesmo após antibiótico.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "Criança ≥ 1 mês: 100 mg/kg/dia (máx. 4 g/dia) · Adulto: 2 g",
      via: "IV",
      intervalo: "Criança: 12/12 h (ou 24/24 h) · Adulto: 12/12 h",
      duracao: "Meningococo 7 dias · Hib 7–10 dias · Pneumococo 10–14 dias · Listeria/gram-negativos ≥ 21 dias",
      monitorizacao: "Resposta clínica em 48 h; repetir líquor se não melhorar",
      contraindicacoes: "Neonato com hiperbilirrubinemia ou soluções IV com cálcio (usar cefotaxima)",
      ajustes: "Diluir em SF 0,9% ou SG 5% (ex.: 50–100 mL) e infundir em 30 min"
    },
    {
      droga: "Ampicilina",
      linha: "l1",
      dose: "Neonato ≤ 7 dias: 100 mg/kg/dose 8/8 h · > 7 dias até 3 meses: 75 mg/kg/dose 6/6 h (máx. 2 g/dose) · Adulto > 50 anos, gestante, imunodeprimido, etilista: 2 g 4/4 h",
      via: "IV",
      intervalo: "Conforme idade",
      duracao: "Listeria: ≥ 21 dias",
      monitorizacao: "—",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Cobre Listeria e enterococo. Associar a cefotaxima (neonato) ou ceftriaxona (1–3 meses e adultos de risco)"
    },
    {
      droga: "Cefotaxima (neonato)",
      linha: "l1",
      dose: "Neonato ≤ 7 dias: 50 mg/kg/dose 8/8 h · > 7 dias: 50 mg/kg/dose 6/6 h",
      via: "IV",
      intervalo: "6/6 h a 8/8 h",
      duracao: "Conforme agente (gram-negativos ≥ 21 dias)",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Preferida à ceftriaxona no período neonatal. Se indisponível: ampicilina + gentamicina, conforme a neonatologia"
    },
    {
      droga: "Vancomicina",
      linha: "adj",
      dose: "Criança: 15 mg/kg/dose (60 mg/kg/dia) · Adulto: 15–20 mg/kg/dose",
      via: "IV em 1–2 h",
      intervalo: "Criança 6/6 h · Adulto 8/8 h a 12/12 h",
      duracao: "Suspender se pneumococo sensível à ceftriaxona",
      monitorizacao: "Nível sérico (vale) e função renal",
      contraindicacoes: "—",
      ajustes: "Associar quando há suspeita de pneumococo resistente (Gram com cocos gram-positivos, criança grave, pós-neurocirurgia) conforme o perfil local. Diluir ≤ 5 mg/mL"
    },
    {
      droga: "Dexametasona",
      linha: "adj",
      dose: "Criança > 6 semanas: 0,15 mg/kg/dose (máx. 10 mg) · Adulto: 10 mg",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "2–4 dias (4 dias se pneumococo/Hib)",
      monitorizacao: "Glicemia, sangramento digestivo",
      contraindicacoes: "Neonatos; meningite já tratada com antibiótico há mais de 4 h (benefício incerto)",
      ajustes: "Iniciar 10–20 min antes ou junto da 1ª dose do antibiótico. Suspender se meningite viral, meningococo ou agente não pneumococo/Hib (em adultos, benefício comprovado no pneumococo)"
    },
    {
      droga: "Aciclovir (suspeita de encefalite herpética)",
      linha: "adj",
      dose: "Criança 3 meses–12 anos: 10–15 mg/kg/dose · Adulto: 10 mg/kg/dose · Neonato: 20 mg/kg/dose",
      via: "IV em 1 h",
      intervalo: "8/8 h",
      duracao: "14–21 dias se HSV confirmado",
      monitorizacao: "Função renal, hidratação",
      contraindicacoes: "—",
      ajustes: "Diluir ≤ 7 mg/mL. Suspender se PCR para HSV negativa e quadro não compatível"
    }
  ],
  destino: {
    agora: [
      "Hemocultura, dexametasona e antibiótico em até 1 h; notificar a vigilância"
    ],
    reavaliar: [
      "Glasgow, pupilas, PA e perfusão de 1/1 h nas primeiras horas; sódio diário (SIADH)",
      "Ajustar antibiótico com cultura e antibiograma em 48–72 h"
    ],
    alta: [
      "Meningite viral: bom estado, tolerando via oral, culturas negativas em 48 h",
      "Bacteriana: após o tempo de antibiótico; agendar audiometria (ou PEATE) e seguimento do desenvolvimento"
    ],
    observacao: [
      "Meningite viral de bom estado geral pode ser observada 24–48 h até resultado de culturas"
    ],
    internacao: [
      "Toda meningite bacteriana suspeita ou confirmada (isolamento para gotículas nas primeiras 24 h)",
      "UTI: choque, Glasgow ≤ 10, convulsões de repetição, HIC, púrpura fulminante"
    ],
    transferencia: [
      "UBS/serviço sem estrutura: hemocultura se possível, dexametasona + ceftriaxona (IV ou IM) antes de transferir com SAMU"
    ]
  },
  prescricao: {
    hospitalar: "MENINGITE BACTERIANA (suspeita) — ADULTO (peso: ___ kg)\n1. Dieta zero até avaliação de consciência; cabeceira a 30°.\n2. Precaução para gotículas por 24 h após início do antibiótico.\n3. SF 0,9% ou Ringer lactato conforme volemia (evitar soluções hipotônicas).\n4. Dexametasona 10 mg IV de 6/6 h por 4 dias — 1ª dose 10–20 min antes ou junto da 1ª dose do antibiótico.\n5. Ceftriaxona 2 g IV de 12/12 h, diluída em SF 0,9% 100 mL, em 30 min.\n6. Se > 50 anos, gestante, imunodeprimido ou etilista: + Ampicilina 2 g IV de 4/4 h, diluída em SF 0,9% 100 mL, em 30 min.\n7. Se suspeita de pneumococo resistente (perfil local) ou pós-neurocirurgia: + Vancomicina 15–20 mg/kg IV de 8/8 h a 12/12 h, diluída em SF 0,9% até ≤ 5 mg/mL, em 1–2 h (dose de ataque 25 mg/kg se grave), com vale sérico.\n8. Se suspeita de encefalite herpética: + Aciclovir 10 mg/kg IV de 8/8 h, diluído em SF 0,9% (≤ 7 mg/mL), em 1 h.\n9. Dipirona 1 g IV de 6/6 h se febre ou dor; Ondansetrona 4–8 mg IV de 8/8 h se vômitos.\n10. Omeprazol 40 mg IV 1 vez ao dia enquanto em corticoide e dieta zero.\n11. Controles: sinais vitais e Glasgow de 1/1 h nas primeiras 6 h, depois 4/4 h; pupilas; glicemia de 6/6 h; sódio diário; balanço hídrico.\n12. Notificação imediata à vigilância epidemiológica.\n\nCRIANÇA (peso: ___ kg)\n- ≥ 1 mês: Dexametasona 0,15 mg/kg (máx. 10 mg) IV de 6/6 h por 2–4 dias + Ceftriaxona 50 mg/kg (máx. 2 g) IV de 12/12 h (100 mg/kg/dia), em 30 min; 1–3 meses: + Ampicilina 75 mg/kg IV de 6/6 h.\n- < 1 mês: Ampicilina (≤ 7 dias: 100 mg/kg de 8/8 h; > 7 dias: 75 mg/kg de 6/6 h) + Cefotaxima 50 mg/kg (≤ 7 dias: de 8/8 h; > 7 dias: de 6/6 h); sem dexametasona; considerar aciclovir 20 mg/kg de 8/8 h.\n- Hidratação: soro isotônico em volume de manutenção (ajustar se choque ou SIADH).",
    ambulatorial: "QUIMIOPROFILAXIA DE CONTATOS — DOENÇA MENINGOCÓCICA (dispensada pela vigilância)\nUSO ORAL\n1. Rifampicina 300 mg cápsula (adulto) ------------------ 4 cápsulas\n   Tomar 2 cápsulas (600 mg) de 12 em 12 horas por 2 dias (4 doses).\n   Criança ≥ 1 mês: rifampicina suspensão 20 mg/mL — 10 mg/kg por dose (máximo 600 mg) de 12 em 12 horas por 2 dias. < 1 mês: 5 mg/kg por dose de 12 em 12 horas por 2 dias.\n   Avisar: urina, suor e lágrima ficam alaranjados; reduz o efeito do anticoncepcional (usar preservativo até 7 dias depois).\n\nALTERNATIVAS (gestantes, contraindicação à rifampicina)\n2. Ceftriaxona 250 mg IM dose única (≥ 12 anos e gestantes); 125 mg IM dose única (< 12 anos).\n3. Ciprofloxacino 500 mg VO dose única (adultos, não gestantes).\n\nHAEMOPHILUS INFLUENZAE TIPO B (conforme vigilância)\n- Rifampicina 20 mg/kg por dose (máximo 600 mg) 1 vez ao dia por 4 dias (1 mês a 10 anos); adulto 600 mg 1 vez ao dia por 4 dias; < 1 mês 10 mg/kg 1 vez ao dia por 4 dias."
  },
  orientacoesRetorno: [
    "Contatos próximos devem tomar a quimioprofilaxia o quanto antes, de preferência nas primeiras 48 h; a equipe de vigilância orienta quem deve tomar",
    "Contato que tomou o remédio e tiver febre, dor de cabeça, vômitos, manchas roxas ou sonolência nos próximos dias deve procurar o PS imediatamente",
    "Após a alta: voltar se febre, dor de cabeça forte, vômitos, convulsão, sonolência, fraqueza ou mudança de comportamento",
    "Fazer o teste de audição marcado após a alta (a meningite pode causar surdez) e acompanhar o desenvolvimento na UBS",
    "Conferir as vacinas de todos da casa (meningocócicas, pneumocócica, Hib)"
  ],
  tabelas: [
    {
      titulo: "Antibiótico empírico por idade e condição",
      colunas: ["Grupo", "Agentes prováveis", "Esquema empírico"],
      linhas: [
        ["< 1 mês", "Estreptococo do grupo B, E. coli, Listeria", "Ampicilina + cefotaxima (ou + gentamicina)"],
        ["1 a 3 meses", "Neonatais + pneumococo, meningococo, Hib", "Ampicilina + ceftriaxona (± vancomicina)"],
        ["3 meses a 50 anos", "Meningococo, pneumococo, (Hib)", "Ceftriaxona (± vancomicina se pneumococo resistente provável)"],
        ["> 50 anos, gestante, etilista, imunodeprimido", "Pneumococo, meningococo, Listeria, gram-negativos", "Ceftriaxona + ampicilina (± vancomicina)"],
        ["Pós-neurocirurgia, derivação, TCE penetrante", "Estafilococos, gram-negativos incl. Pseudomonas", "Vancomicina + cefepima (ou meropeném)"]
      ],
      nota: "Quimioprofilaxia: indicada para contatos próximos de doença meningocócica (moradores do mesmo domicílio, quem dorme no mesmo local, contatos de creche/escola conforme investigação, exposição direta a secreções sem proteção — ex.: intubação) e de meningite por Hib conforme a vigilância. Não indicada para pneumococo nem meningite viral. Profissional de saúde só se exposição desprotegida a secreções respiratórias."
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª edição revisada (2024): Meningites e Doença meningocócica",
    "Secretaria de Estado da Saúde de SP — Esquemas de quimioprofilaxia de doença meningocócica e Hib (atualização 04/2025, conforme MS)",
    "OMS — WHO guidelines on meningitis diagnosis, treatment and care (2025)",
    "IDSA — Practice Guidelines for the Management of Bacterial Meningitis (2004) e Healthcare-Associated Ventriculitis and Meningitis (2017)",
    "ESCMID — Guideline: diagnosis and treatment of acute bacterial meningitis (2016)",
    "American Academy of Pediatrics — Red Book 2024–2027: Meningococcal, Pneumococcal and Haemophilus influenzae infections"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
