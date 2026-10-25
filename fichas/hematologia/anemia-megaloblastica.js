// Anemia megaloblástica: deficiência de vitamina B12 e de folato
registrarFicha({
  id: "anemia-megaloblastica",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Anemia megaloblástica: deficiência de vitamina B12 e folato",
  resumo: "Macrocitose (VCM > 100 fL) com neutrófilos hipersegmentados por falta de B12 ou folato. Ficha para causas, diagnóstico, reposição IM ou VO e pacientes em risco (metformina, IBP, bariátrica, vegano, idoso). A investigação geral da anemia está na ficha anemia-investigacao.",
  palavrasChave: "anemia megaloblastica macrocitica macrocitose vcm alto vitamina b12 cobalamina cianocobalamina hidroxocobalamina folato acido folico anemia perniciosa fator intrinseco anticelula parietal metformina omeprazol ibp bariatrica gastrectomia vegano vegetariano neuropatia degeneracao combinada subaguda acido metilmalonico homocisteina",
  critico: {
    tempo: "B12 antes de ácido fólico isolado",
    texto: "Dar só ácido fólico a quem tem falta de B12 corrige a anemia mas deixa a lesão neurológica progredir. Na dúvida, colha B12 e folato e trate os dois; sintoma neurológico = B12 IM sem demora."
  },
  alarmes: [
    "Sintomas neurológicos: parestesia, perda de vibração e propriocepção, ataxia, fraqueza, alteração de memória, psicose, depressão (B12 IM imediata)",
    "Hb < 7 g/dL, dispneia em repouso, angina ou sinais de insuficiência cardíaca (avaliar no PS)",
    "Bicitopenia ou pancitopenia que não melhora em 1–2 semanas de reposição (mielodisplasia, leucemia, aplasia)",
    "Blastos no esfregaço, esplenomegalia ou linfonodomegalia (não é carência simples)",
    "Icterícia com LDH muito alto (hemólise intramedular; excluir hemólise verdadeira e microangiopatia)",
    "Gestante ou lactente de mãe vegana com B12 baixa (risco de dano neurológico no bebê)"
  ],
  conduta: [
    "Confirmar macrocitose e olhar esfregaço (macro-ovalócitos, neutrófilos hipersegmentados) e reticulócitos (baixos)",
    "Dosar vitamina B12 e folato antes de qualquer reposição; TSH, função hepática, GGT e creatinina para outras causas de macrocitose",
    "B12 limítrofe com quadro sugestivo: dosar ácido metilmalônico ou homocisteína se disponível, ou tratar e reavaliar resposta",
    "Buscar a causa: dieta (vegetariano estrito, desnutrição, álcool), gastrectomia/bariátrica, anemia perniciosa, doença de Crohn ou ressecção ileal, doença celíaca, drogas (metformina, IBP/anti-H2 prolongados, metotrexato, fenitoína, sulfametoxazol-trimetoprima, óxido nitroso), gestação, hemólise crônica",
    "Deficiência de B12 sem causa dietética: anticorpo antifator intrínseco (e anticélula parietal) para anemia perniciosa",
    "Anemia perniciosa confirmada: endoscopia digestiva alta no diagnóstico (gastrite atrófica, risco de câncer gástrico e tumor neuroendócrino)",
    "Repor B12: IM se sintomas neurológicos, anemia grave, má absorção ou perniciosa; VO em dose alta se dieta pobre, assintomático e adesão garantida",
    "Repor folato após dosar B12 (ou junto com B12 se a dosagem demorar)",
    "Anemia grave: dosar potássio nos primeiros dias (hipocalemia pela produção de hemácias) e evitar transfusão rápida (risco de congestão)",
    "Reticulócitos em 7–10 dias (devem subir) e hemograma em 4–8 semanas; sem resposta, rever diagnóstico"
  ],
  exames: [
    "Hemograma com esfregaço e reticulócitos: VCM > 100 (muitas vezes > 110–115), RDW alto, neutrófilos hipersegmentados, às vezes leucopenia e plaquetopenia leves",
    "Vitamina B12 sérica: < 200 pg/mL = deficiência provável; 200–300 pg/mL = limítrofe (usar marcadores ou prova terapêutica)",
    "Ácido fólico sérico (cai com poucos dias de dieta ruim; folato eritrocitário reflete estoques, se disponível)",
    "Ácido metilmalônico (alto na falta de B12) e homocisteína (alta em B12 e folato), se disponíveis",
    "LDH e bilirrubina indireta (altos pela eritropoese ineficaz)",
    "Anticorpo antifator intrínseco (específico; pouco sensível) e anticélula parietal (sensível; pouco específico)",
    "TSH, TGO, TGP, GGT, creatinina; ferritina (deficiência de ferro mista pode normalizar o VCM)",
    "Antitransglutaminase IgA com IgA total se suspeita de doença celíaca"
  ],
  diferenciais: [
    "Álcool e hepatopatia (macrocitose leve, sem hipersegmentação)",
    "Hipotireoidismo",
    "Drogas: hidroxiureia, zidovudina, metotrexato, azatioprina (macrocitose medicamentosa)",
    "Reticulocitose (hemólise ou sangramento recente)",
    "Mielodisplasia (idoso, outras citopenias, B12 e folato normais)",
    "Mieloma (rouleaux, VCM falsamente alto em algumas situações)"
  ],
  tratamento: [
    {
      droga: "Cianocobalamina (ou hidroxocobalamina) 1.000 mcg/mL injetável",
      linha: "l1",
      dose: "1.000 mcg (1 mL) por aplicação",
      via: "IM",
      intervalo: "Ataque: em dias alternados por 2 semanas (6 aplicações) ou diário por 1 semana e semanal por 4 semanas. Manutenção: 1 vez por mês (cianocobalamina) ou a cada 2–3 meses (hidroxocobalamina)",
      duracao: "Por toda a vida se anemia perniciosa, gastrectomia, bariátrica ou ressecção ileal; até corrigir e tratar a causa se dietética ou medicamentosa",
      monitorizacao: "Reticulócitos em 7–10 dias; Hb em 4–8 semanas; potássio nos primeiros dias se anemia grave; B12 não precisa ser redosada se houver resposta clínica",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Com sintomas neurológicos: aplicar em dias alternados até parar de melhorar (orientação do especialista; BSH 2014). Verificar a apresentação disponível na rede (ampolas de 1.000 a 5.000 mcg). Evitar IM se plaquetas muito baixas: avaliar SC profunda conforme serviço"
    },
    {
      droga: "Cianocobalamina oral",
      linha: "alt",
      dose: "1.000–2.000 mcg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo enquanto a causa persistir",
      monitorizacao: "Hemograma e B12 em 2–3 meses; se não subir, passar para IM",
      contraindicacoes: "Sintomas neurológicos, anemia grave, dúvida sobre adesão (usar IM)",
      ajustes: "Dose alta VO é eficaz mesmo sem fator intrínseco (absorção passiva de cerca de 1%), inclusive na perniciosa estável e após bariátrica, desde que haja adesão. Polivitamínicos comuns têm dose insuficiente. Nem sempre disponível no SUS"
    },
    {
      droga: "Ácido fólico 5 mg",
      linha: "l1",
      dose: "5 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "4 meses; contínuo se a causa persistir (hemólise crônica, má absorção)",
      monitorizacao: "Hemograma em 4–8 semanas",
      contraindicacoes: "Deficiência de B12 não tratada",
      ajustes: "Dosar B12 antes; se B12 baixa, iniciar B12 junto ou antes. RENAME"
    }
  ],
  tabelas: [
    {
      titulo: "Grupos de risco e o que fazer",
      colunas: ["Situação", "Risco", "Conduta"],
      linhas: [
        ["Metformina de longa duração", "Má absorção de B12, piora da neuropatia diabética", "Dosar B12 periodicamente (ADA), sobretudo se anemia ou neuropatia; repor sem suspender a metformina"],
        ["IBP ou anti-H2 por mais de 2 anos", "Menor liberação da B12 dos alimentos", "Rever indicação do IBP; dosar B12 se macrocitose ou sintomas"],
        ["Bariátrica (bypass) ou gastrectomia", "Deficiência praticamente certa sem reposição", "B12 de manutenção por toda a vida (IM ou VO em dose alta) e dosagem anual"],
        ["Vegetariano estrito / vegano", "Ingestão insuficiente", "Suplementar B12; atenção redobrada em gestantes, lactantes e crianças"],
        ["Idoso", "Gastrite atrófica", "Investigar B12 diante de macrocitose, queda cognitiva ou neuropatia"],
        ["Álcool, desnutrição, gestação, hemólise crônica, metotrexato, anticonvulsivantes", "Deficiência de folato", "Ácido fólico e tratar a causa"]
      ],
      nota: "Óxido nitroso (uso recreativo ou anestesia repetida) inativa a B12 e pode causar mielopatia aguda."
    }
  ],
  encaminhar: [
    "Hematologia: falta de resposta em 4–8 semanas, citopenias associadas, suspeita de mielodisplasia ou dúvida diagnóstica",
    "Gastroenterologia/endoscopia: anemia perniciosa (endoscopia no diagnóstico), suspeita de má absorção, doença celíaca ou Crohn",
    "Neurologia: déficit neurológico importante ou que não melhora com a reposição",
    "PS no mesmo dia: anemia descompensada, sintomas neurológicos graves de instalação rápida, pancitopenia com sangramento ou febre"
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — MACROCITOSE / SUSPEITA DE ANEMIA MEGALOBLÁSTICA\nHemograma completo com reticulócitos e análise do esfregaço; vitamina B12; ácido fólico sérico; LDH; bilirrubinas; ferritina; TSH; TGO; TGP; GGT; creatinina. Se B12 baixa sem causa dietética: anticorpo antifator intrínseco e anticélula parietal. Se B12 limítrofe: ácido metilmalônico ou homocisteína (se disponível).\nHD: Anemia por deficiência de vitamina B12 (CID D51.9) / de folato (CID D52.9).\n\nDEFICIÊNCIA DE B12\nUSO INTRAMUSCULAR\n1. Cianocobalamina 1.000 mcg/mL ------------------- 10 ampolas\n   Aplicar 1 ampola IM em dias alternados por 2 semanas (6 aplicações); depois 1 ampola IM 1 vez por mês (manutenção).\n\nOU, se dieta pobre, sem sintomas neurológicos, anemia leve e boa adesão:\nUSO ORAL\n1. Cianocobalamina 1.000 mcg ---------------------- 60 comprimidos\n   Tomar 1 a 2 comprimidos por dia, todos os dias. Reavaliar em 2–3 meses.\n\nDEFICIÊNCIA DE FOLATO (com B12 normal ou já em reposição)\nUSO ORAL\n2. Ácido fólico 5 mg ------------------------------- 120 comprimidos\n   Tomar 1 comprimido por dia por 4 meses.\n\nCONTROLE\nReticulócitos em 7–10 dias; hemograma em 4–8 semanas; potássio em 2–3 dias se Hb < 8 g/dL."
  },
  orientacoesRetorno: [
    "A anemia costuma melhorar em 1 a 2 meses; os formigamentos e o equilíbrio melhoram mais devagar e às vezes não voltam totalmente",
    "Se a causa é permanente (anemia perniciosa, cirurgia do estômago ou bariátrica), a vitamina B12 é para a vida toda; não pare por conta própria",
    "Quem é vegano ou vegetariano estrito precisa tomar B12 sempre, principalmente na gravidez e na amamentação",
    "Quem usa metformina ou omeprazol por muitos anos deve dosar a B12 de tempos em tempos",
    "Voltar logo se piorar o formigamento, a força ou o equilíbrio, ou se tiver falta de ar, dor no peito, desmaio ou sangramentos",
    "Retorno com exames em 1–2 semanas (reticulócitos) e em 1–2 meses (hemograma)"
  ],
  fontes: [
    "British Society for Haematology — Guidelines for the diagnosis and treatment of cobalamin and folate disorders (Br J Haematol, 2014)",
    "NICE — Vitamin B12 deficiency in over 16s: diagnosis and management (NG239, 2024)",
    "American Diabetes Association — Standards of Care in Diabetes (2025): monitoramento de B12 em uso de metformina",
    "Ministério da Saúde — RENAME (versão vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
