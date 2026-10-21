// Doença falciforme — acompanhamento ambulatorial
registrarFicha({
  id: "anemia-falciforme",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "completo",
  titulo: "Doença falciforme: acompanhamento na UBS (hidroxiureia, profilaxias, vacinas, Doppler transcraniano)",
  resumo: "Seguimento compartilhado UBS–hemocentro da pessoa com doença falciforme (HbSS, HbSβ⁰, HbSC, HbSβ⁺, HbSD) diagnosticada no teste do pezinho ou depois. Garantir penicilina profilática até 5 anos, vacinas especiais, hidroxiureia, Doppler transcraniano anual dos 2 aos 16 anos e educação para crises.",
  palavrasChave: "anemia falciforme doenca falciforme hbss hbsc traco falciforme teste do pezinho triagem neonatal hidroxiureia hidroxicarbamida penicilina profilatica vacina pneumococica crie doppler transcraniano avc acido folico hemocentro",
  critico: {
    tempo: "Penicilina a partir de 2–3 meses",
    texto: "Toda criança com doença falciforme deve receber penicilina profilática até pelo menos 5 anos e vacinas especiais do CRIE. Febre ≥ 38,5 °C é emergência: ir ao PS no mesmo momento."
  },
  alarmes: [
    "Febre ≥ 38,5 °C (encaminhar ao PS — risco de sepse)",
    "Palidez súbita, cansaço, baço aumentando (sequestro ou crise aplásica)",
    "Dor torácica, dispneia (síndrome torácica aguda)",
    "Déficit neurológico, convulsão, cefaleia intensa (AVC)",
    "Ereção dolorosa > 2 h (priapismo)",
    "Dor que não cede com analgésico oral em casa",
    "Doppler transcraniano com velocidade ≥ 200 cm/s (alto risco de AVC)",
    "Gestação (alto risco materno e fetal)"
  ],
  condutaInicial: [
    "Confirmar o diagnóstico e o genótipo (eletroforese/HPLC); vincular ao hemocentro de referência e manter o cartão de identificação",
    "Consultas na UBS: puericultura/acompanhamento habitual + revisão de crises, transfusões, internações, adesão às medicações",
    "Penicilina profilática dos 2–3 meses até pelo menos 5 anos",
    "Vacinação: calendário nacional completo + imunobiológicos especiais do CRIE (pneumocócicas, meningocócicas, Hib, influenza anual, hepatite)",
    "Hidroxiureia: indicada para HbSS/HbSβ⁰ (e formas graves) a partir de 9 meses, prescrita pelo hematologista; UBS reforça adesão e monitora hemograma",
    "Doppler transcraniano anual dos 2 aos 16 anos (HbSS/HbSβ⁰)",
    "Educar a família: palpar o baço, medir temperatura, hidratação, sinais de alarme, onde procurar atendimento 24 h",
    "Orientação genética e anticoncepção/planejamento reprodutivo; teste para os pais e irmãos"
  ],
  fataisExcluir: [
    "Sepse pneumocócica (asplenia funcional)",
    "AVC (rastrear com Doppler transcraniano)",
    "Sequestro esplênico",
    "Síndrome torácica aguda",
    "Hipertensão pulmonar, doença renal crônica (adultos)"
  ],
  proximaDecisao: "Criança estável → consultas alternadas UBS/hemocentro, conferindo penicilina, vacinas, hidroxiureia e Doppler. Doppler ≥ 200 cm/s → hematologista com urgência para programa de transfusão crônica. Mais de 3 crises por ano, STA prévia ou anemia importante sem hidroxiureia → solicitar avaliação do hematologista para iniciar.",
  clinica: {
    anamnese: [
      "Crises de dor no último ano (número, internações), STA, sequestro, AVC, priapismo, transfusões",
      "Uso e adesão: penicilina, hidroxiureia, ácido fólico (se prescrito), analgésicos em casa",
      "Desempenho escolar, cefaleia, alterações de comportamento (infarto silencioso)",
      "Enurese/noctúria (hipostenúria), icterícia, cólica biliar",
      "Úlcera de perna, alterações visuais, dispneia aos esforços (adultos)",
      "Saúde sexual e reprodutiva, desejo de gestar"
    ],
    exameFisico: [
      "Peso, altura e curvas de crescimento; PA (PA 'normal' pode estar alta para o falciforme)",
      "Palidez, icterícia, sopro cardíaco",
      "Baço (registrar em cm abaixo do rebordo), fígado",
      "Membros inferiores (úlceras), quadris (necrose avascular da cabeça do fêmur)",
      "SpO₂ em repouso (registrar basal)"
    ],
    diferenciais: [
      { dx: "Traço falciforme (HbAS)", pista: "Não é doença: sem anemia, sem profilaxias; orientação genética" },
      { dx: "Talassemias e outras hemoglobinopatias", pista: "Microcitose; eletroforese/HPLC" },
      { dx: "Ferropenia associada", pista: "Ferritina baixa (não dar ferro sem confirmar — risco de sobrecarga em politransfundidos)" }
    ],
    gravidade: [
      "Formas mais graves: HbSS e HbSβ⁰",
      "HbSC e HbSβ⁺: geralmente mais leves, mas com retinopatia e sequestro em idade maior",
      "Marcadores de gravidade: ≥ 3 crises/ano com internação, STA, AVC, Hb basal muito baixa, Doppler alterado"
    ]
  },
  exames: [
    {
      nome: "Hemograma com reticulócitos",
      pedido: "Hemograma completo com reticulócitos.",
      porQue: "Registrar Hb basal; monitorar hidroxiureia (citopenias) e resposta (aumento de VCM e Hb).",
      esperar: "HbSS: Hb basal baixa e reticulócitos elevados.",
      interpretacao: "Em uso de hidroxiureia, frequência e cortes de suspensão definidos pelo hematologista/PCDT.",
      limitacoes: "—"
    },
    {
      nome: "Bioquímica anual",
      pedido: "Ureia, creatinina, TGO, TGP, bilirrubinas, DHL, ferritina; urina tipo 1 e relação albumina/creatinina em amostra isolada.",
      porQue: "Nefropatia (albuminúria precoce), hepatopatia, sobrecarga de ferro, hemólise.",
      esperar: "DHL e bilirrubina indireta elevadas.",
      interpretacao: "Albuminúria persistente → nefrologia (IECA/BRA).",
      limitacoes: "—"
    },
    {
      nome: "Doppler transcraniano",
      pedido: "Ultrassonografia com Doppler transcraniano — doença falciforme HbSS/HbSβ⁰, rastreamento anual de risco de AVC (2 a 16 anos).",
      porQue: "Identifica crianças com alto risco de AVC para transfusão crônica preventiva.",
      esperar: "Velocidade média máxima (TAMM) < 170 cm/s = normal.",
      interpretacao: "< 170: anual · 170–199: condicional, repetir em meses · ≥ 200: alterado → hematologista com urgência (transfusão crônica).",
      limitacoes: "Exame operador-dependente; febre, anemia aguda e crise alteram as velocidades — fazer fora de crise."
    },
    {
      nome: "Outros rastreamentos (conforme hemocentro)",
      pedido: "Avaliação oftalmológica com fundo de olho (retinopatia, principalmente HbSC); ecocardiograma (hipertensão pulmonar) em adolescentes/adultos sintomáticos; ultrassonografia abdominal se cólica biliar.",
      porQue: "Complicações crônicas.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Idade de início e periodicidade conforme PCDT 2024 e hemocentro."
    }
  ],
  tratamento: [
    {
      droga: "Penicilina V (fenoximetilpenicilina potássica)",
      linha: "l1",
      dose: "Até 3 anos: 125 mg · 3 a 5 anos: 250 mg",
      via: "Oral",
      intervalo: "12/12 h",
      duracao: "Dos 2–3 meses até pelo menos 5 anos",
      monitorizacao: "Adesão (conferir frasco/dispensação)",
      contraindicacoes: "Alergia a penicilina (alternativa: eritromicina, conforme hematologista)",
      ajustes: "Suspensão 80.000 UI/mL (= 50 mg/mL): 125 mg = 2,5 mL; 250 mg = 5 mL. Alternativa: penicilina benzatina IM a cada 21 dias, dose por faixa de peso conforme PCDT"
    },
    {
      droga: "Hidroxiureia",
      linha: "l1",
      dose: "Início 15 mg/kg/dia (crianças: alguns protocolos iniciam com 20 mg/kg/dia); aumentos graduais até a dose máxima tolerada, máx. 35 mg/kg/dia",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Hemograma com reticulócitos periódico (mais frequente no ajuste); função renal e hepática",
      contraindicacoes: "Gestação e amamentação; citopenias significativas",
      ajustes: "Prescrição e ajuste pelo hematologista (componente especializado). Apresentações SUS: cápsula 500 mg e comprimido 100 mg (a partir de 9 meses). OMS 2026: oferecer a toda criança e adolescente com anemia falciforme de 9 meses a 19 anos, independentemente da gravidade. Anticoncepção eficaz em idade fértil; ajuste renal"
    },
    {
      droga: "Ácido fólico",
      linha: "adj",
      dose: "Conforme prescrição do hemocentro",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "Conforme hemocentro",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Uso rotineiro é prática comum por hemólise crônica, mas a evidência é limitada; seguir orientação do hemocentro"
    },
    {
      droga: "Sulfato ferroso",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não prescrever sem ferropenia comprovada (ferritina baixa)",
      ajustes: "Risco de sobrecarga de ferro, sobretudo em politransfundidos"
    },
    {
      droga: "Analgésicos para casa",
      linha: "l1",
      dose: "Dipirona 15–25 mg/kg/dose (máx. 1 g) ou paracetamol 15 mg/kg/dose (máx. 1 g); ibuprofeno 10 mg/kg/dose (máx. 600 mg) se função renal normal",
      via: "Oral",
      intervalo: "Dipirona/paracetamol 6/6 h; ibuprofeno 8/8 h",
      duracao: "Durante a dor; se não melhorar em poucas horas, PS",
      monitorizacao: "—",
      contraindicacoes: "AINE: nefropatia, desidratação",
      ajustes: "Deixar receita para crise em casa"
    }
  ],
  destino: {
    agora: [
      "Iniciar penicilina e atualizar vacinas; garantir vínculo com hemocentro",
      "Febre ou sinal de alarme: PS imediatamente"
    ],
    reavaliar: [
      "Lactentes: consultas mensais no 1º ano (puericultura); depois a cada 2–3 meses alternando com hemocentro",
      "Adultos: a cada 3–6 meses, conforme gravidade e hidroxiureia"
    ],
    alta: [
      "Não se aplica: acompanhamento por toda a vida, compartilhado UBS–hemocentro"
    ],
    observacao: ["—"],
    internacao: [
      "Ver ficha Doença falciforme no PS (crise e complicações agudas)"
    ],
    transferencia: [
      "Hemocentro/hematologia: todo diagnóstico novo; Doppler ≥ 170 cm/s; indicação de hidroxiureia; gestação (pré-natal de alto risco)"
    ]
  },
  prescricao: {
    ambulatorial: "DOENÇA FALCIFORME — CRIANÇA (peso: ___ kg; idade: ___)\nUSO ORAL\n1. Fenoximetilpenicilina potássica 80.000 UI/mL (50 mg/mL) pó para suspensão --- ___ frascos/mês\n   Até 3 anos: dar 2,5 mL (125 mg) de 12 em 12 horas.\n   De 3 a 5 anos: dar 5 mL (250 mg) de 12 em 12 horas.\n   Uso contínuo até os 5 anos (ou conforme hemocentro). Guardar na geladeira após preparo e usar no prazo da bula.\n2. Dipirona 500 mg/mL gotas — PARA CRISE DE DOR EM CASA ---- 1 frasco\n   Dar 15–25 mg/kg por dose (aprox. 1 gota/kg, máximo 40 gotas) de 6 em 6 horas se dor. Se não melhorar em 2–3 horas, procurar o PS.\n3. Hidroxiureia ___ mg (dose do hematologista: ___ mg/kg/dia) --- conforme LME\n   Dar ___ 1 vez ao dia, todos os dias, no mesmo horário.\n\nPEDIDOS\n- Doppler transcraniano anual (2 a 16 anos).\n- Encaminhamento ao CRIE: doença falciforme/asplenia funcional (vacinas especiais).\n\nADULTO\nUSO ORAL\n1. Hidroxiureia 500 mg --------------------------------- ___ cápsulas/mês (dose do hematologista: ___ mg/kg/dia)\n   Tomar ___ cápsula(s) 1 vez ao dia.\n2. Dipirona 500 mg — 2 comprimidos de 6 em 6 horas se dor; Ibuprofeno 600 mg — 1 comprimido de 8 em 8 horas por até 3 dias se dor e função renal normal."
  },
  orientacoesRetorno: [
    "Febre de 38,5 °C ou mais é emergência: ir ao pronto-socorro na hora, mesmo à noite, levando o cartão do hemocentro",
    "Dar a penicilina 2 vezes ao dia, todos os dias, até os 5 anos; manter as vacinas em dia",
    "Aprender a palpar a barriga do lado esquerdo (baço) e procurar atendimento se ficar maior ou se a criança ficar muito pálida",
    "Beber bastante água, evitar frio, calor excessivo e desidratação",
    "Voltar imediatamente se: falta de ar, dor no peito, fraqueza de um lado do corpo, fala enrolada, convulsão, ereção dolorosa que não passa, dor que não melhora em casa",
    "Não usar ferro ou vitaminas com ferro sem orientação",
    "Mulher em uso de hidroxiureia: usar anticoncepcional; se engravidar, avisar logo"
  ],
  tabelas: [
    {
      titulo: "Checklist da consulta na UBS",
      colunas: ["Item", "Idade / frequência"],
      linhas: [
        ["Penicilina profilática", "2–3 meses até ≥ 5 anos"],
        ["Vacinas do calendário + CRIE (pneumocócicas, meningocócicas, influenza anual)", "Desde o diagnóstico; conferir a cada consulta"],
        ["Hidroxiureia (HbSS/HbSβ⁰)", "Oferecer a partir de 9 meses (hematologista)"],
        ["Doppler transcraniano", "Anual, 2 a 16 anos"],
        ["Hemograma com reticulócitos", "Basal e conforme hidroxiureia"],
        ["Função renal e albuminúria", "Anual (a partir da idade definida pelo hemocentro)"],
        ["Fundo de olho", "Periódico a partir da infância tardia (sobretudo HbSC)"],
        ["Orientação genética e reprodutiva", "Família no diagnóstico; adolescente/adulto"]
      ],
      nota: "Esquema de vacinas especiais e idades de rastreamento conforme Manual dos CRIE (2023) e PCDT Doença Falciforme (2024)."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Doença Falciforme (Portaria Conjunta SAES/SECTICS nº 16, de 1º/11/2024; Relatório Conitec nº 924/2024)",
    "Conitec — Incorporação da hidroxiureia 100 mg (comprimido) para crianças com doença falciforme a partir de 9 meses (2024)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed. (2023)",
    "OMS — WHO guideline on management of sickle cell disease in children and adolescents (0–19 years) (maio de 2026)",
    "Adams RJ et al. — STOP trial (NEJM 1998) e American Society of Hematology 2020 Guidelines: Cerebrovascular Disease in SCD"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
