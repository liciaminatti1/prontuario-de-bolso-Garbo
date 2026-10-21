// Tosse persistente (subaguda e crônica) e tosse seca
registrarFicha({
  id: "tosse-persistente",
  especialidade: "pneumologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Tosse persistente (subaguda e crônica) e tosse seca",
  resumo: "Tosse no adulto com 3 semanas ou mais. Subaguda: 3–8 semanas (geralmente pós-infecciosa). Crônica: mais de 8 semanas (rinossinusite/gotejamento pós-nasal, asma, bronquite eosinofílica, DRGE, IECA, tabagismo). Toda tosse ≥ 3 semanas exige investigar tuberculose.",
  palavrasChave: "tosse cronica subaguda persistente seca pos infecciosa gotejamento pos nasal sindrome tosse via aerea superior iecas enalapril captopril drge bronquite eosinofilica tuberculose sintomatico respiratorio coqueluche gabapentina",
  critico: {
    tempo: "Tosse ≥ 3 semanas: pedir TRM-TB",
    texto: "Todo sintomático respiratório (tosse por 3 semanas ou mais) deve ter escarro para tuberculose (teste rápido molecular). Em populações vulneráveis (pessoa privada de liberdade, em situação de rua, PVHIV, indígena, contato de TB), investigar com qualquer duração."
  },
  alarmes: [
    "Hemoptise",
    "Perda de peso, febre persistente, sudorese noturna",
    "Tabagista ou ex-tabagista > 45–50 anos com tosse nova ou mudança no padrão da tosse",
    "Dispneia progressiva, rouquidão persistente, disfagia",
    "Imunossupressão (HIV, quimioterapia, corticoide crônico)",
    "Alteração focal no exame ou na radiografia",
    "Tosse com engasgos às refeições (aspiração)"
  ],
  condutaInicial: [
    "Classificar pela duração: aguda < 3 semanas, subaguda 3–8, crônica > 8 semanas",
    "Investigar tuberculose em tosse ≥ 3 semanas (2 amostras de escarro; TRM-TB onde houver)",
    "Radiografia de tórax em toda tosse crônica e na subaguda com alarme ou sem melhora",
    "Suspender IECA (enalapril, captopril) se em uso: trocar por BRA (losartana)",
    "Parar de fumar e afastar irritantes",
    "Tratar a causa mais provável e reavaliar a resposta em 2–8 semanas; várias causas podem coexistir"
  ],
  fataisExcluir: [
    "Tuberculose pulmonar",
    "Câncer de pulmão (tabagista, hemoptise, emagrecimento)",
    "Insuficiência cardíaca",
    "Corpo estranho / aspiração crônica",
    "Doença pulmonar intersticial (crepitações em velcro, dispneia, baqueteamento)",
    "Coqueluche (transmissível; notificação compulsória)"
  ],
  proximaDecisao: "RX normal, não fumante, sem IECA → tratamento empírico sequencial: (1) rinossinusite/gotejamento pós-nasal; (2) asma/bronquite eosinofílica (espirometria e CI); (3) DRGE se sintomas típicos. Sem resposta após tratar as causas comuns → tosse crônica refratária: encaminhar à pneumologia (TC de tórax, broncoscopia) e considerar gabapentina ou fonoterapia.",
  clinica: {
    anamnese: [
      "Duração, início após infecção respiratória, seca ou produtiva, característica do escarro",
      "Coriza, obstrução nasal, sensação de secreção descendo na garganta, pigarro (gotejamento pós-nasal)",
      "Chiado, piora noturna ou com exercício/frio/alérgenos (asma)",
      "Pirose, regurgitação, tosse ao deitar ou após refeições (DRGE)",
      "Medicações: IECA (tosse pode surgir semanas a meses após o início), betabloqueador",
      "Tabagismo (inclusive cigarro eletrônico), lenha, exposição ocupacional, aves/mofo",
      "Tosse em acessos (paroxismos), guincho inspiratório, vômito após tossir (coqueluche); contato com caso",
      "Febre, emagrecimento, sudorese noturna, contato com TB, HIV, prisão, situação de rua",
      "Hemoptise, rouquidão, disfagia, engasgos"
    ],
    exameFisico: [
      "Rinoscopia: mucosa, secreção, pólipos; orofaringe com aspecto de \"pedras de calçamento\" (gotejamento pós-nasal)",
      "Ausculta pulmonar: sibilos, crepitações, sinais focais",
      "Sinais de IC: turgência jugular, edema, B3",
      "Baqueteamento digital, linfonodos cervicais e supraclaviculares",
      "SpO₂ e peso"
    ],
    diferenciais: [
      { dx: "Tosse pós-infecciosa", pista: "Início com resfriado/gripe, 3–8 semanas, RX normal, melhora espontânea" },
      { dx: "Síndrome da tosse de via aérea superior (gotejamento pós-nasal)", pista: "Rinite, sinusite, pigarro, secreção na garganta" },
      { dx: "Asma / tosse variante de asma", pista: "Piora noturna, gatilhos, atopia; espirometria com resposta ao broncodilatador" },
      { dx: "Bronquite eosinofílica não asmática", pista: "Espirometria normal, eosinofilia no escarro, responde a CI" },
      { dx: "DRGE", pista: "Pirose e regurgitação; tosse após refeições ou ao deitar" },
      { dx: "Tosse por IECA", pista: "Seca, com irritação na garganta; melhora 1–4 semanas após suspender (às vezes até 3 meses)" },
      { dx: "Bronquite crônica / DPOC", pista: "Tabagista, expectoração na maioria dos dias por ≥ 3 meses em 2 anos seguidos" },
      { dx: "Coqueluche", pista: "Paroxismos, guincho, vômito pós-tosse, ≥ 2 semanas" },
      { dx: "Bronquiectasia", pista: "Escarro purulento volumoso diário, infecções de repetição" }
    ],
    gravidade: [
      "Aguda: < 3 semanas — geralmente viral, não precisa de exames",
      "Subaguda: 3–8 semanas — pós-infecciosa na maioria; RX se alarme ou sem melhora",
      "Crônica: > 8 semanas — RX de tórax e espirometria; investigar causas comuns",
      "Gravidade pelo impacto: incontinência urinária, síncope, fratura de costela, insônia, vômitos"
    ]
  },
  exames: [
    {
      nome: "Teste rápido molecular para tuberculose (TRM-TB) / baciloscopia",
      pedido: "Escarro: teste rápido molecular para tuberculose (TRM-TB) — 1 amostra; na indisponibilidade, baciloscopia (BAAR) — 2 amostras (uma no momento da consulta e outra no dia seguinte ao acordar). Cultura para micobactéria com teste de sensibilidade se TRM positivo ou população vulnerável. Indicação: sintomático respiratório (tosse há ___ semanas).",
      porQue: "Busca ativa de TB em todo sintomático respiratório.",
      esperar: "Negativo na maioria.",
      interpretacao: "TRM detectado → iniciar tratamento de TB (ver ficha tuberculose-pulmonar). Negativo com clínica sugestiva → cultura, RX, avaliação especializada.",
      limitacoes: "Amostra de saliva tem baixo rendimento; orientar coleta de escarro profundo."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax PA e perfil. Indicação: tosse há ___ semanas.",
      porQue: "Obrigatória na tosse crônica; na subaguda se alarme ou sem melhora.",
      esperar: "Normal na maioria das causas comuns.",
      interpretacao: "Alteração (cavidade, massa, infiltrado, adenomegalia) → investigar direcionado (TB, neoplasia, intersticial).",
      limitacoes: "RX normal não exclui câncer inicial nem bronquiectasia; TC se suspeita persistir."
    },
    {
      nome: "Espirometria com prova broncodilatadora",
      pedido: "Espirometria com prova broncodilatadora. Indicação: tosse crônica, investigar asma/DPOC.",
      porQue: "Identificar asma ou DPOC.",
      esperar: "Normal ou obstrução.",
      interpretacao: "Resposta ao broncodilatador (VEF1 ≥ 12% e ≥ 200 mL) apoia asma. Espirometria normal não exclui tosse variante de asma ou bronquite eosinofílica — fazer prova terapêutica com CI.",
      limitacoes: "Broncoprovocação e escarro induzido raramente disponíveis na APS."
    },
    {
      nome: "Exames complementares direcionados",
      pedido: "Hemograma (eosinófilos). Anti-HIV. PCR para Bordetella pertussis em swab de nasofaringe se suspeita de coqueluche (até 3 semanas de tosse).",
      porQue: "Eosinofilia sugere asma/bronquite eosinofílica; HIV muda investigação de TB; coqueluche é notificável.",
      esperar: "—",
      interpretacao: "Eosinófilos ≥ 300 céls/µL reforçam prova com CI.",
      limitacoes: "PCR para coqueluche perde sensibilidade após 3–4 semanas de tosse."
    }
  ],
  tratamento: [
    {
      droga: "Budesonida spray nasal 32–64 mcg/jato (ou beclometasona nasal)",
      linha: "l1",
      dose: "1–2 jatos em cada narina",
      via: "Nasal",
      intervalo: "1–2 vezes ao dia",
      duracao: "Prova terapêutica de 4–8 semanas",
      monitorizacao: "Epistaxe, resposta da tosse",
      contraindicacoes: "—",
      ajustes: "Gotejamento pós-nasal / rinite. Associar lavagem nasal com SF 0,9%. Pode associar dexclorfeniramina 2 mg VO de 8/8 h por 1–2 semanas (sonolência; evitar em idosos)"
    },
    {
      droga: "Corticoide inalatório (budesonida 200–400 mcg de 12/12 h ou beclometasona 250 mcg de 12/12 h)",
      linha: "l1",
      dose: "Dose baixa a média",
      via: "Inalatória com espaçador",
      intervalo: "12/12 h",
      duracao: "Prova terapêutica de 4–8 semanas",
      monitorizacao: "Resposta; candidíase oral",
      contraindicacoes: "—",
      ajustes: "Suspeita de tosse variante de asma ou bronquite eosinofílica. Se asma confirmada, seguir ficha asma-manutencao"
    },
    {
      droga: "Brometo de ipratrópio spray 20 mcg",
      linha: "alt",
      dose: "2 jatos",
      via: "Inalatória",
      intervalo: "6/6 h a 8/8 h",
      duracao: "1–3 semanas",
      monitorizacao: "Boca seca, retenção urinária",
      contraindicacoes: "Glaucoma de ângulo fechado",
      ajustes: "Tosse pós-infecciosa que atrapalha a qualidade de vida (CHEST). Prednisona curta só em paroxismos graves após excluir outras causas"
    },
    {
      droga: "Omeprazol",
      linha: "adj",
      dose: "20–40 mg",
      via: "Oral, 30 min antes do café",
      intervalo: "1–2 vezes ao dia",
      duracao: "8 semanas",
      monitorizacao: "Resposta",
      contraindicacoes: "—",
      ajustes: "Só se houver sintomas de refluxo (pirose, regurgitação). IBP isolado sem sintomas de DRGE não melhora a tosse. Associar medidas antirrefluxo e perda de peso"
    },
    {
      droga: "Losartana (substituir IECA)",
      linha: "l1",
      dose: "50 mg",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "PA, potássio, creatinina",
      contraindicacoes: "Gestação",
      ajustes: "Suspender o IECA mesmo que a tosse pareça ter outra causa. Melhora em 1–4 semanas (até 3 meses)"
    },
    {
      droga: "Gabapentina",
      linha: "alt",
      dose: "Iniciar 300 mg/dia e aumentar a cada poucos dias até a menor dose eficaz (máx 1.800 mg/dia)",
      via: "Oral",
      intervalo: "Dividir em 2–3 tomadas",
      duracao: "Reavaliar em 6 meses",
      monitorizacao: "Sonolência, tontura, uso abusivo",
      contraindicacoes: "—",
      ajustes: "Tosse crônica refratária, após excluir e tratar causas comuns (de preferência com pneumologista). Ajuste renal (ClCr < 60). Alternativa (ERS 2020, só com especialista): morfina em baixa dose, 5–10 mg de liberação lenta de 12/12 h; no Brasil a menor cápsula de liberação controlada é de 30 mg, então a dose baixa exige morfina de liberação imediata e ajuste pelo especialista"
    },
    {
      droga: "Levodropropizina xarope 6 mg/mL (sintomático)",
      linha: "adj",
      dose: "60 mg (10 mL)",
      via: "Oral",
      intervalo: "Até 3 vezes ao dia (intervalo ≥ 6 h)",
      duracao: "Até 7 dias",
      monitorizacao: "Sonolência",
      contraindicacoes: "Tosse produtiva com muita secreção, gestação e lactação, insuficiência hepática grave",
      ajustes: "Só alívio de tosse seca que atrapalha o sono; não trata a causa. Mel (1–2 colheres de chá) é alternativa caseira em adultos"
    },
    {
      droga: "Antibiótico empírico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar para tosse pós-infecciosa ou tosse crônica sem diagnóstico",
      ajustes: "Exceções: coqueluche (azitromicina 500 mg no 1º dia e 250 mg do 2º ao 5º dia; notificar), sinusite bacteriana, pneumonia"
    }
  ],
  destino: {
    agora: [
      "Pedir TRM-TB e RX conforme duração; suspender IECA; orientar cessação do tabagismo",
      "Iniciar tratamento empírico da causa mais provável"
    ],
    reavaliar: [
      "2–4 semanas para tosse subaguda; 4–8 semanas após cada prova terapêutica",
      "Imediato se surgir alarme"
    ],
    alta: [
      "Tosse resolvida ou causa identificada e controlada: seguimento habitual"
    ],
    observacao: ["—"],
    internacao: [
      "Hemoptise volumosa, insuficiência respiratória"
    ],
    transferencia: [
      "Pneumologia: RX alterado sem diagnóstico, suspeita de neoplasia, intersticial ou bronquiectasia, tosse crônica refratária após tratar causas comuns",
      "Otorrinolaringologia: rinossinusite crônica refratária, pólipos, rouquidão > 3 semanas (laringoscopia)",
      "Gastroenterologia/EDA: DRGE refratária ou com sinais de alarme"
    ]
  },
  prescricao: {
    ambulatorial: "TOSSE POR GOTEJAMENTO PÓS-NASAL / RINITE\nUSO NASAL\n1. Cloreto de sódio 0,9% ---------------------------------------- 1 frasco\n   Lavar as narinas com 10–20 mL em cada lado, 2 a 3 vezes ao dia.\n2. Budesonida 32 mcg spray nasal (ou 50 mcg) -------------------- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia (ou 1 jato de 12 em 12 horas) por 4 a 8 semanas.\n\nPROVA PARA TOSSE VARIANTE DE ASMA / BRONQUITE EOSINOFÍLICA\nUSO INALATÓRIO\n3. Budesonida 200 mcg (cápsula inalante) ou beclometasona 250 mcg aerossol com espaçador --- 120 doses (2 caixas de 60 cápsulas ou 1 frasco de 200 doses)\n   Inalar 1 dose de 12 em 12 horas por 8 semanas. Enxaguar a boca depois.\n\nSE SINTOMAS DE REFLUXO\nUSO ORAL\n4. Omeprazol 20 mg -------------------------------------------- 112 cápsulas\n   Tomar 1 cápsula 30 minutos antes do café e 1 antes do jantar por 8 semanas.\n\nSE TOSSE POR IECA\n5. Suspender enalapril/captopril. Losartana 50 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia (uso contínuo).\n\nSE TOSSE SECA QUE ATRAPALHA O SONO (ALÍVIO)\n6. Levodropropizina xarope 6 mg/mL ----------------------------- 1 frasco\n   Tomar 10 mL até 3 vezes ao dia, se tosse seca, por até 7 dias.\n\nSUSPEITA DE COQUELUCHE (NOTIFICAR)\n7. Azitromicina 500 mg ---------------------------------------- 3 comprimidos\n   Tomar 1 comprimido (500 mg) no 1º dia; depois meio comprimido (250 mg) 1 vez ao dia do 2º ao 5º dia (usar comprimido sulcado; se não for sulcado, usar suspensão 40 mg/mL: 6,25 mL = 250 mg)."
  },
  orientacoesRetorno: [
    "A tosse depois de gripe ou resfriado pode durar até 8 semanas e melhora sozinha na maioria das vezes",
    "Pare de fumar (a UBS oferece tratamento) e evite fumaça de lenha e produtos irritantes",
    "Colete o escarro conforme orientado: escarro profundo, de manhã, em jejum, após enxaguar a boca com água",
    "Enquanto aguarda o resultado para tuberculose, cubra a boca ao tossir e mantenha a casa ventilada",
    "Volte imediatamente se tossir sangue, tiver falta de ar, febre persistente ou dor no peito",
    "Retorne em 2–4 semanas (ou após 8 semanas do tratamento) para ver o resultado dos exames e a resposta"
  ],
  tabelas: [
    {
      titulo: "Causas comuns de tosse crônica e prova terapêutica",
      colunas: ["Causa", "Pista", "Prova terapêutica", "Tempo para resposta"],
      linhas: [
        ["Gotejamento pós-nasal / rinossinusite", "Pigarro, coriza, secreção na garganta", "Corticoide nasal + lavagem; anti-histamínico", "1–2 semanas (até 8)"],
        ["Asma / bronquite eosinofílica", "Piora noturna, chiado, eosinofilia", "Corticoide inalatório", "2–4 semanas (até 8)"],
        ["DRGE", "Pirose, regurgitação", "IBP 2×/dia + medidas antirrefluxo", "Até 8 semanas (às vezes 3 meses)"],
        ["IECA", "Uso de enalapril/captopril", "Trocar por BRA", "1–4 semanas (até 3 meses)"]
      ],
      nota: "Mais de uma causa pode estar presente; não suspenda um tratamento que ajudou parcialmente ao iniciar o próximo."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil (2ª ed. atualizada, 2019)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. revisada (2024) e Nota Técnica Conjunta nº 165/2025-DPNI/SVSA/MS (coqueluche: tratamento e quimioprofilaxia)",
    "ERS — Guidelines on the diagnosis and treatment of chronic cough in adults and children (Eur Respir J, 2020)",
    "CHEST — Classification of cough as a symptom in adults and management algorithms (2018) e Treatment of Unexplained Chronic Cough (2016)",
    "SBPT — II Diretrizes Brasileiras no Manejo da Tosse Crônica (J Bras Pneumol, 2006)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
