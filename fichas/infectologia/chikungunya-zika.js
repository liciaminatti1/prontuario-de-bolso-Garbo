// Chikungunya e zika
registrarFicha({
  id: "chikungunya-zika",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Chikungunya e zika",
  resumo: "Arboviroses transmitidas pelo Aedes. Chikungunya: febre alta súbita e artralgia intensa e simétrica, que pode evoluir para fases subaguda (até 3 meses) e crônica. Zika: febre baixa, exantema pruriginoso e conjuntivite; grave na gestação (síndrome congênita). Dengue: ver ficha dengue.",
  palavrasChave: "chikungunya zika arbovirose aedes artralgia poliartralgia febre exantema prurido conjuntivite gestante microcefalia sindrome congenita zika guillain barre hidroxicloroquina prednisona notificacao",
  critico: {
    tempo: "Excluir dengue; sem AINE na fase aguda",
    texto: "Toda arbovirose febril é manejada como dengue até prova em contrário (hidratação, sinais de alarme). Na fase aguda da chikungunya: dipirona/paracetamol; não usar AINE, AAS nem corticoide. Gestante com exantema: investigar zika e notificar."
  },
  alarmes: [
    "Sinais de alarme de dengue (dor abdominal intensa, vômitos persistentes, sangramento, hipotensão postural, letargia) — seguir ficha dengue",
    "Chikungunya: alteração de consciência, convulsão, fraqueza (encefalite, Guillain-Barré), dispneia, dor torácica, arritmia (miocardite), oligúria, lesões bolhosas extensas",
    "Grupos de risco: gestante, recém-nascido (transmissão perinatal), menores de 2 anos, idosos > 65 anos, comorbidades descompensadas",
    "Zika: fraqueza ascendente nas semanas seguintes (Guillain-Barré)",
    "Gestante com exantema em qualquer trimestre"
  ],
  condutaInicial: [
    "Classificar risco para dengue (grupos A a D) e hidratar conforme ficha dengue",
    "Chikungunya aguda: repouso, hidratação oral, dipirona ou paracetamol em horários fixos, compressas frias nas articulações; sem AINE, AAS ou corticoide nos primeiros 14 dias",
    "Dor intensa refratária (fase aguda): associar opioide fraco (codeína em adulto) ou tramadol",
    "Zika: sintomáticos (paracetamol/dipirona) e anti-histamínico para prurido; preservativo em todas as relações",
    "Gestante: exames para zika/chikungunya/dengue, ultrassonografia seriada e pré-natal de risco conforme protocolo",
    "Notificar todo caso suspeito (zika em gestante e óbito: notificação imediata)"
  ],
  fataisExcluir: [
    "Dengue grave",
    "Formas atípicas da chikungunya (encefalite, miocardite, nefrite, hepatite, dermatose bolhosa)",
    "Chikungunya neonatal (mãe virêmica no parto)",
    "Guillain-Barré pós-zika/chikungunya",
    "Artrite séptica (monoartrite quente), febre reumática, leptospirose, malária (viajante para área endêmica)"
  ],
  proximaDecisao: "Chikungunya > 14 dias com dor articular → fase subaguda: AINE por curto período; se refratário, corticoide oral (prednisona) com desmame. > 3 meses → fase crônica: hidroxicloroquina; sem resposta ou artrite erosiva → reumatologia (metotrexato).",
  clinica: {
    anamnese: [
      "Data de início da febre (fase da doença), casos na família/vizinhança, viagem",
      "Artralgia: articulações, simetria, rigidez matinal, incapacidade para atividades",
      "Exantema, prurido, conjuntivite, sangramentos",
      "Gestação (idade gestacional), puérpera perto do parto",
      "Comorbidades e uso de anticoagulante/AINE"
    ],
    exameFisico: [
      "PA deitado e em pé, FC, hidratação, prova do laço (ver ficha dengue)",
      "Artrite: edema, calor, dor à mobilização (punhos, mãos, tornozelos, pés), tenossinovite",
      "Pele: exantema, hiperpigmentação, bolhas (crianças)",
      "Conjuntivite não purulenta (zika)",
      "Exame neurológico (força, reflexos)"
    ],
    diferenciais: [
      { dx: "Dengue", pista: "Dor retro-orbitária, mialgia intensa, plaquetopenia, hemoconcentração" },
      { dx: "Leptospirose", pista: "Enchente, dor em panturrilhas, sufusão conjuntival, icterícia; ver ficha leptospirose" },
      { dx: "Sarampo, rubéola, parvovírus", pista: "Ver ficha exantematicas" },
      { dx: "Artrite reumatoide / outras artrites", pista: "Artrite persistente sem febre inicial; fator reumatoide, anti-CCP" },
      { dx: "Malária", pista: "Viagem à Amazônia ou África; febre com calafrios; ver ficha malaria" }
    ],
    gravidade: [
      "Chikungunya: fase aguda (até ~14 dias) · subaguda (até 3 meses) · crônica (> 3 meses)",
      "Microcefalia (zika congênita): perímetro cefálico < −2 DP para idade gestacional e sexo (InterGrowth); grave < −3 DP",
      "Referência MS para RN a termo (≥ 37 semanas): PC ≤ 31,9 cm (menino) e ≤ 31,5 cm (menina)"
    ]
  },
  exames: [
    {
      nome: "Exames inespecíficos",
      pedido: "Hemograma completo com plaquetas. Conforme quadro: TGO, TGP, creatinina, PCR.",
      porQue: "Diferenciar de dengue e avaliar gravidade.",
      esperar: "Chikungunya: linfopenia; plaquetas em geral normais ou pouco reduzidas.",
      interpretacao: "Hemoconcentração e plaquetopenia importante → pensar em dengue.",
      limitacoes: "—"
    },
    {
      nome: "Diagnóstico específico",
      pedido: "RT-PCR para chikungunya, zika e dengue (soro; zika também em urina) na fase aguda. Sorologia IgM para chikungunya/zika a partir do 6º dia de sintomas (ou conforme Lacen).",
      porQue: "Confirmação, vigilância; obrigatória na gestante.",
      esperar: "—",
      interpretacao: "IgM de zika e dengue têm reação cruzada; interpretar com a vigilância.",
      limitacoes: "Em epidemia, o diagnóstico clínico-epidemiológico é aceito para não gestantes; não aguardar exame para tratar."
    },
    {
      nome: "Fase crônica (antes de imunomodulador)",
      pedido: "Hemograma, TGO, TGP, creatinina, glicemia, VHS, PCR, fator reumatoide, anti-CCP, FAN, ácido úrico. Sorologias para hepatites B e C e HIV antes de metotrexato.",
      porQue: "Diferenciar de outras artrites e segurança do tratamento.",
      esperar: "—",
      interpretacao: "Anti-CCP positivo → reumatologia.",
      limitacoes: "Hidroxicloroquina: avaliação oftalmológica no início e periódica."
    },
    {
      nome: "Gestante e recém-nascido (zika)",
      pedido: "Gestante: RT-PCR para zika (soro e urina), ultrassonografia obstétrica seriada. RN exposto: perímetro cefálico, exame neurológico, fundo de olho, triagem auditiva (PEATE), ultrassonografia transfontanelar, RT-PCR/sorologia conforme protocolo.",
      porQue: "Síndrome congênita do zika pode existir sem microcefalia.",
      esperar: "—",
      interpretacao: "Alteração → estimulação precoce e seguimento especializado.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "Adulto: 1 g. Criança: 15–25 mg/kg/dose (máx 1 g)",
      via: "VO",
      intervalo: "6/6 h fixo",
      duracao: "Fase aguda",
      monitorizacao: "—",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Associar paracetamol nos intervalos se dor intensa"
    },
    {
      droga: "Paracetamol",
      linha: "l1",
      dose: "Adulto: 500–750 mg (máx 3–4 g/dia). Criança: 10–15 mg/kg/dose (máx 750 mg/dose)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "Fase aguda",
      monitorizacao: "Hepatotoxicidade",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Uso seguro na gestação"
    },
    {
      droga: "Codeína (dor intensa, adulto)",
      linha: "adj",
      dose: "30 mg (associada a paracetamol)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "Poucos dias",
      monitorizacao: "Constipação, sonolência",
      contraindicacoes: "Menores de 12 anos, lactação, insuficiência respiratória",
      ajustes: "Alternativa: tramadol 50 mg VO 6/6 h"
    },
    {
      droga: "AINE na fase aguda, AAS, corticoide nos primeiros 14 dias",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Risco de sangramento se dengue; corticoide precoce associa-se a rebote articular",
      ajustes: "Liberados apenas na fase subaguda, excluída a dengue"
    },
    {
      droga: "Naproxeno ou ibuprofeno (fase subaguda)",
      linha: "l1",
      dose: "Naproxeno 500 mg 12/12 h ou ibuprofeno 400–600 mg 8/8 h. Criança: ibuprofeno 10 mg/kg/dose 8/8 h (máx 400 mg/dose)",
      via: "VO",
      intervalo: "12/12 h ou 8/8 h",
      duracao: "7–14 dias, reavaliar",
      monitorizacao: "Dor epigástrica, PA, função renal",
      contraindicacoes: "DRC, úlcera péptica, IC, gestação no 3º trimestre, anticoagulante",
      ajustes: "Associar omeprazol 20 mg se > 60 anos ou risco gastrointestinal"
    },
    {
      droga: "Prednisona (subaguda refratária a AINE)",
      linha: "alt",
      dose: "Dose baixa a moderada pela manhã, conforme Guia MS, com desmame gradual após melhora",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Algumas semanas, com desmame",
      monitorizacao: "Glicemia, PA, humor",
      contraindicacoes: "DM descompensado, HAS grave, osteoporose grave, transtorno psiquiátrico (relativas)",
      ajustes: "Conferir dose e duração no guia de manejo clínico da chikungunya do MS vigente"
    },
    {
      droga: "Hidroxicloroquina (fase crônica)",
      linha: "l1",
      dose: "5 mg/kg/dia (máx 400 mg/dia)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Reavaliar em 6–8 semanas",
      monitorizacao: "Avaliação oftalmológica, ECG (QT), hemograma",
      contraindicacoes: "Retinopatia, QT longo, miastenia",
      ajustes: "Sem resposta ou artrite erosiva → reumatologia (metotrexato 10–25 mg/semana com ácido fólico, prescrito pelo especialista)"
    }
  ],
  destino: {
    agora: ["Classificar como dengue (A–D) e seguir o fluxo da ficha dengue"],
    reavaliar: [
      "Grupo de risco ou dor intensa: retorno em 24–48 h",
      "Todos: reavaliar no 14º dia (fim da fase aguda) e com 3 meses se persistir dor"
    ],
    alta: ["Sem sinais de alarme, hidratando por boca, dor controlada"],
    observacao: ["Dor refratária na fase aguda: analgesia parenteral e observação"],
    internacao: [
      "Formas atípicas/graves, sinais de alarme de dengue",
      "Recém-nascido com chikungunya; gestante próxima ao parto com febre"
    ],
    transferencia: ["Encefalite, miocardite, Guillain-Barré → hospital com UTI/neurologia"]
  },
  prescricao: {
    ambulatorial: "CHIKUNGUNYA — FASE AGUDA (até 14 dias), ADULTO\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------- 2 caixas\n   Tomar 2 comprimidos de 6 em 6 horas, em horário fixo, por 7 a 10 dias.\n2. Paracetamol 750 mg ------------------------------- 1 caixa\n   Tomar 1 comprimido nos intervalos da dipirona se dor forte (máximo 4 comprimidos por dia).\n3. Soro de reidratação oral / água ------------------- à vontade\n   Beber 60 mL/kg/dia (cerca de 3 a 4 litros), metade com sais de reidratação.\nORIENTAÇÕES: compressas frias (gelo envolto em pano) 20 minutos nas articulações, 4 vezes ao dia. NÃO usar anti-inflamatórios, AAS nem corticoide nesta fase.\n\nFASE SUBAGUDA (após 14 dias, dengue excluída)\n1. Naproxeno 500 mg -------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após as refeições, por 10 dias.\n2. Omeprazol 20 mg --------------------------------- 10 cápsulas\n   Tomar 1 cápsula em jejum enquanto usar o naproxeno (se > 60 anos ou risco gástrico).\n\nFASE CRÔNICA (> 3 meses)\n1. Hidroxicloroquina 400 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido ao dia (≤ 80 kg: 5 mg/kg/dia) por 6–8 semanas; reavaliar. Exame oftalmológico.\n\nZIKA (ADULTO)\n1. Paracetamol 750 mg ------------------------------ 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se febre ou dor.\n2. Loratadina 10 mg -------------------------------- 10 comprimidos\n   Tomar 1 comprimido ao dia se coceira.\n\nCRIANÇA (por kg): dipirona 15–25 mg/kg/dose 6/6 h (máx 1 g); paracetamol 10–15 mg/kg/dose 6/6 h; ibuprofeno 10 mg/kg/dose 8/8 h (máx 400 mg) só na fase subaguda; loratadina 5 mg/dia (< 30 kg) ou 10 mg/dia (≥ 30 kg) a partir de 2 anos."
  },
  orientacoesRetorno: [
    "Beber bastante líquido; repouso; não tomar anti-inflamatório (ibuprofeno, diclofenaco, nimesulida), AAS nem corticoide sem orientação",
    "Voltar imediatamente se: dor forte na barriga, vômitos que não param, sangramento, tontura ao levantar, muita sonolência, falta de ar, convulsão ou fraqueza nas pernas",
    "A dor nas juntas pode durar semanas ou meses; exercícios leves e alongamento ajudam; volte se não melhorar",
    "Gestante com manchas na pele ou febre: avisar o pré-natal e fazer os exames pedidos",
    "Zika: usar camisinha em todas as relações (o vírus passa pelo sexo); quem planeja engravidar deve conversar com a equipe",
    "Eliminar água parada em casa (vasos, pneus, calhas, caixas d'água abertas)",
    "Retorno na UBS em 14 dias ou antes se piora"
  ],
  tabelas: [
    {
      titulo: "Diferenças clínicas: dengue x chikungunya x zika",
      colunas: ["Achado", "Dengue", "Chikungunya", "Zika"],
      linhas: [
        ["Febre", "Alta, 2–7 dias", "Alta, súbita", "Baixa ou ausente"],
        ["Artralgia", "Leve", "Intensa, simétrica, incapacitante", "Leve, com edema"],
        ["Exantema", "Após 3º–4º dia", "2º–5º dia", "Precoce, pruriginoso"],
        ["Conjuntivite", "Rara", "Pouco frequente", "Frequente, não purulenta"],
        ["Plaquetopenia", "Frequente", "Leve ou ausente", "Rara"],
        ["Complicação típica", "Choque, sangramento", "Artrite crônica", "Síndrome congênita, Guillain-Barré"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Chikungunya: manejo clínico (2024)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2023/2024)",
    "Ministério da Saúde — Orientações integradas de vigilância e atenção à saúde no âmbito da Emergência de Saúde Pública de Importância Nacional: zika e microcefalia (2017)",
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico adulto e criança, 6ª ed. (2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
