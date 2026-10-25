// Artrite reumatoide
registrarFicha({
  id: "artrite-reumatoide",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Artrite reumatoide",
  resumo: "Poliartrite inflamatória crônica, simétrica, de pequenas articulações (mãos, punhos, pés), com rigidez matinal prolongada. Diagnóstico precoce (critérios ACR/EULAR 2010) e metotrexato o quanto antes mudam o prognóstico.",
  palavrasChave: "artrite reumatoide ar poliartrite rigidez matinal fator reumatoide anti ccp anticorpo antipeptideo citrulinado acr eular 2010 das28 cdai metotrexato acido folico leflunomida sulfassalazina hidroxicloroquina prednisona biologico anti tnf adalimumabe etanercepte tofacitinibe triagem tuberculose latente",
  critico: {
    tempo: "Metotrexato em até 3 meses",
    texto: "Artrite de ≥ 3 articulações por mais de 6 semanas: pedir FR, anti-CCP, VHS/PCR e encaminhar à reumatologia já; iniciar metotrexato assim que confirmado (janela de oportunidade)."
  },
  alarmes: [
    "Monoartrite aguda quente em paciente com AR (excluir artrite séptica — punção)",
    "Febre, tosse e dispneia em uso de metotrexato ou biológico (pneumonite, infecção, tuberculose)",
    "Leucopenia, plaquetopenia, úlceras orais ou elevação de transaminases > 3× com metotrexato",
    "Dor cervical com parestesias, fraqueza ou sinais de compressão medular (instabilidade atlantoaxial)",
    "Vasculite reumatoide: úlceras cutâneas, neuropatia, púrpura",
    "Gestação em uso de metotrexato ou leflunomida (teratogênicos)"
  ],
  conduta: [
    "Suspeitar: dor e edema em ≥ 3 articulações, compressão dolorosa das MCF/MTF, rigidez matinal > 30–60 min, por ≥ 6 semanas",
    "Pedir FR, anti-CCP, VHS, PCR, hemograma, TGO/TGP, creatinina, urina tipo 1 e RX de mãos e pés",
    "Aplicar critérios ACR/EULAR 2010 (tabela; ≥ 6 pontos = AR) após excluir outras causas (lúpus, gota, artrite viral, espondiloartrite)",
    "Encaminhar à reumatologia com prioridade; não aguardar a consulta para iniciar tratamento se diagnóstico claro e exames basais normais",
    "1ª linha (PCDT AR): metotrexato VO semanal + ácido fólico; meta remissão ou baixa atividade (DAS28 < 2,6 / CDAI ≤ 2,8 ou baixa atividade) — reavaliar a cada 1–3 meses",
    "Sem meta em 3 meses (melhora insuficiente) ou 6 meses: otimizar MTX (dose máxima, via SC) e associar/trocar MMCD sintético (leflunomida, sulfassalazina, hidroxicloroquina)",
    "Falha de 2 esquemas de MMCD sintéticos: MMCD biológico ou alvo-específico (anti-TNF, abatacepte, tocilizumabe, rituximabe, inibidores de JAK) via Componente Especializado da Assistência Farmacêutica (reumatologista preenche o LME)",
    "Corticoide: prednisona em dose baixa (≤ 10 mg/dia) só como ponte por poucas semanas a meses, com redução até suspender",
    "Antes de MTX/biológico: triagem de tuberculose latente, hepatites B e C, HIV e vacinação (tabela)",
    "AINE para sintoma, na menor dose e menor tempo; IBP se risco GI",
    "Cuidados gerais: parar de fumar, exercício, fisioterapia/terapia ocupacional, risco cardiovascular (AR aumenta), densitometria se corticoide"
  ],
  exames: [
    "Fator reumatoide e anti-CCP (anti-CCP é mais específico; ambos negativos não excluem)",
    "VHS e PCR (atividade)",
    "Hemograma, TGO, TGP, creatinina, urina tipo 1 (basal para MMCD)",
    "RX de mãos e pés (AP) e de tórax",
    "FAN (diferencial com lúpus e outras colagenoses), ácido úrico, sorologias virais (parvovírus, hepatites B/C, HIV, chikungunya conforme epidemiologia) em artrite recente",
    "Monitorização do MTX/leflunomida: hemograma, TGO, TGP e creatinina a cada 4–8 semanas nos primeiros 3–6 meses e depois a cada 8–12 semanas"
  ],
  diferenciais: [
    "Artrite viral (chikungunya, parvovírus B19, hepatites) — geralmente autolimitada em semanas (ver ficha poliartralgia-febril)",
    "Lúpus, síndrome de Sjögren, esclerose sistêmica",
    "Artrite psoriásica (assimétrica, IFD, dactilite, psoríase)",
    "Gota poliarticular, doença por pirofosfato de cálcio",
    "Osteoartrite de mãos (IFD/IFP, nódulos de Heberden/Bouchard, rigidez < 30 min)",
    "Polimialgia reumática (idoso, cinturas escapular e pélvica)"
  ],
  tratamento: [
    { droga: "Metotrexato", linha: "l1", dose: "Iniciar 10–15 mg/semana; aumentar 2,5–5 mg a cada 2–4 semanas até 20–25 mg/semana", via: "VO (SC se intolerância ou resposta insuficiente)", intervalo: "1 vez por SEMANA (dia fixo)", duracao: "Contínuo", monitorizacao: "Hemograma, TGO/TGP, creatinina (ver exames); sintomas respiratórios", contraindicacoes: "Gestação e amamentação, ClCr < 30 mL/min, hepatopatia, etilismo, citopenias, imunodeficiência grave", ajustes: "ClCr 30–60: reduzir dose. Interação grave com sulfametoxazol-trimetoprima. Suspender 3 meses antes de engravidar (homens e mulheres: conforme reumatologista). Erro de dose diária é potencialmente fatal: escrever 'semanal' por extenso" },
    { droga: "Ácido fólico", linha: "adj", dose: "5 mg", via: "VO", intervalo: "1 vez por semana, 24–48 h após o metotrexato", duracao: "Enquanto usar MTX", monitorizacao: "—", contraindicacoes: "—", ajustes: "Reduz náusea, úlceras orais e hepatotoxicidade" },
    { droga: "Leflunomida", linha: "alt", dose: "20 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Hemograma, TGO/TGP, PA", contraindicacoes: "Gestação (teratogênica; necessita washout com colestiramina antes de engravidar), hepatopatia", ajustes: "Alternativa ou associação ao MTX" },
    { droga: "Sulfassalazina", linha: "alt", dose: "500 mg/dia, aumentando 500 mg por semana até 2–3 g/dia", via: "VO", intervalo: "Dividir em 2 tomadas", duracao: "Contínuo", monitorizacao: "Hemograma, TGO/TGP", contraindicacoes: "Alergia a sulfa ou salicilatos, deficiência de G6PD (cautela)", ajustes: "Compatível com gestação (com ácido fólico)" },
    { droga: "Hidroxicloroquina", linha: "adj", dose: "200–400 mg/dia, sem passar de 5 mg/kg/dia (peso real)", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Exame oftalmológico basal e anual após 5 anos", contraindicacoes: "Retinopatia prévia", ajustes: "Usada em combinação (terapia tripla) ou em doença leve" },
    { droga: "Prednisona (ponte)", linha: "adj", dose: "5–10 mg/dia", via: "VO", intervalo: "1×/dia pela manhã", duracao: "O menor tempo possível, com redução gradual", monitorizacao: "Glicemia, PA, peso, densidade óssea", contraindicacoes: "Infecção não controlada", ajustes: "Cálcio e vitamina D se uso prolongado" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES\n1. Fator reumatoide, anti-CCP, VHS, PCR, FAN.\n2. Hemograma, TGO, TGP, creatinina, urina tipo 1.\n3. HBsAg, anti-HBc total, anti-HBs, anti-HCV, anti-HIV.\n4. PPD ou IGRA + RX de tórax (triagem de tuberculose latente).\n5. RX de mãos e pés (AP).\n6. Encaminhamento à reumatologia: poliartrite inflamatória > 6 semanas, suspeita de artrite reumatoide.\n\nUSO ORAL (após diagnóstico e exames basais normais)\n7. Metotrexato 2,5 mg ---------------------------- 1 caixa\n   Tomar 6 comprimidos (15 mg) juntos, UMA VEZ POR SEMANA, sempre no mesmo dia (ex.: segunda-feira). NÃO tomar todos os dias.\n8. Ácido fólico 5 mg ----------------------------- 4 comprimidos\n   Tomar 1 comprimido UMA VEZ POR SEMANA, 1 dia depois do metotrexato.\n9. Prednisona 5 mg ------------------------------- 30 comprimidos (se necessário, ponte)\n   Tomar 1 a 2 comprimidos pela manhã por ___ semanas; reduzir conforme orientação."
  },
  orientacoesRetorno: [
    "O metotrexato é tomado só 1 vez por semana; tomar todos os dias é perigoso",
    "Evitar bebida alcoólica durante o tratamento com metotrexato ou leflunomida",
    "Usar método anticoncepcional seguro; avisar antes de planejar gravidez (homens e mulheres)",
    "Fazer os exames de sangue de controle nas datas combinadas",
    "Voltar logo se febre, tosse com falta de ar, feridas na boca, manchas roxas ou sangramento",
    "Vacinar contra gripe, pneumonia e hepatite B; não tomar vacinas de vírus vivo sem perguntar ao médico",
    "Retornar em 4–6 semanas para ajuste de dose e exames"
  ],
  encaminhar: [
    "Reumatologia com prioridade: toda suspeita de AR (idealmente avaliada em até 6 semanas do início)",
    "Reumatologia: falha de MTX em dose plena por 3 meses, indicação de biológico (LME/CEAF)",
    "PS: monoartrite aguda febril, febre com tosse em imunossuprimido, sinais de compressão medular cervical",
    "Fisioterapia/terapia ocupacional: deformidades, limitação funcional"
  ],
  tabelas: [
    {
      titulo: "Critérios de classificação ACR/EULAR 2010 (≥ 6 de 10 = AR)",
      colunas: ["Domínio", "Achado", "Pontos"],
      linhas: [
        ["Articulações", "1 grande", "0"],
        ["Articulações", "2–10 grandes", "1"],
        ["Articulações", "1–3 pequenas (com ou sem grandes)", "2"],
        ["Articulações", "4–10 pequenas", "3"],
        ["Articulações", "> 10 (pelo menos 1 pequena)", "5"],
        ["Sorologia", "FR e anti-CCP negativos", "0"],
        ["Sorologia", "FR ou anti-CCP positivo baixo (≤ 3× LSN)", "2"],
        ["Sorologia", "FR ou anti-CCP positivo alto (> 3× LSN)", "3"],
        ["Fase aguda", "PCR e VHS normais", "0"],
        ["Fase aguda", "PCR ou VHS alterada", "1"],
        ["Duração", "< 6 semanas", "0"],
        ["Duração", "≥ 6 semanas", "1"]
      ],
      nota: "Aplicar em quem tem ≥ 1 articulação com sinovite sem outra explicação. Erosões típicas no RX também classificam como AR."
    },
    {
      titulo: "Triagem antes de MTX/biológico/JAK",
      colunas: ["Item", "O que fazer"],
      linhas: [
        ["Tuberculose latente", "PPD ou IGRA + RX de tórax; positivo → tratar ILTB e iniciar o biológico após cerca de 1 mês de tratamento (ver ficha iltb)"],
        ["Hepatite B", "HBsAg, anti-HBc, anti-HBs; HBsAg ou anti-HBc positivo → hepatologia (profilaxia antiviral)"],
        ["Hepatite C e HIV", "Anti-HCV, anti-HIV"],
        ["Hemograma, TGO/TGP, creatinina", "Basal"],
        ["Vacinas", "Influenza anual, pneumocócicas, hepatite B, covid-19; herpes-zóster recombinante (CRIE). Vacinas vivas (febre amarela, tríplice viral, varicela) antes de iniciar ou só com liberação do especialista"],
        ["Estrongiloidíase", "Ivermectina empírica antes de corticoide em dose alta (área endêmica)"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Artrite Reumatoide (Portaria Conjunta SAES/SCTIE nº 16, 2019; conferir atualização vigente na CONITEC)",
    "ACR/EULAR — 2010 Rheumatoid Arthritis Classification Criteria",
    "EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological DMARDs (2022 update)",
    "ACR Guideline for the Treatment of Rheumatoid Arthritis (2021)",
    "Sociedade Brasileira de Reumatologia — Recomendações para o tratamento da artrite reumatoide (2017; atualização 2020)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE, 2023)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
