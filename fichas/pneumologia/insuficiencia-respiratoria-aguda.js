// Insuficiência respiratória aguda
registrarFicha({
  id: "insuficiencia-respiratoria-aguda",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Insuficiência respiratória aguda (tipos I e II)",
  resumo: "Falha em oxigenar (tipo I, hipoxêmica: PaO₂ < 60 mmHg) ou ventilar (tipo II, hipercápnica: PaCO₂ > 45 mmHg com pH < 7,35). Escolha do suporte: O₂ convencional, cânula nasal de alto fluxo, VNI ou intubação.",
  palavrasChave: "insuficiencia respiratoria aguda ira hipoxemia hipercapnia tipo 1 tipo 2 pao2 fio2 relacao p/f cnaf alto fluxo vni intubacao sdra rox hacor",
  critico: {
    tempo: "Não atrasar intubação indicada",
    texto: "Rebaixamento, incapacidade de proteger via aérea, choque, PCR iminente ou falha de VNI/alto fluxo em 1–2 h: intubação (ficha sequencia-rapida-intubacao). Retardar intubação aumenta mortalidade."
  },
  alarmes: [
    "FR > 35 ou < 8, respiração paradoxal, tiragem, exaustão",
    "SpO₂ < 88–90% com FiO₂ alta",
    "Rebaixamento (Glasgow ≤ 8) ou agitação incontrolável",
    "pH < 7,25 com hipercapnia progressiva",
    "Instabilidade hemodinâmica, arritmias",
    "Secreção abundante sem capacidade de expectorar"
  ],
  condutaInicial: [
    "Monitor, cabeceira elevada, O₂ titulado (alvo SpO₂ 94–98%; 88–92% se risco de hipercapnia)",
    "Gasometria arterial: classificar tipo I (PaO₂ < 60) x tipo II (PaCO₂ > 45 com pH < 7,35); calcular PaO₂/FiO₂",
    "Buscar a causa: POCUS, RX, ECG, laboratório (ficha dispneia-aguda)",
    "Tipo I sem hipercapnia: O₂ convencional → cânula nasal de alto fluxo (CNAF) se esforço ou FiO₂ alta",
    "Tipo II com acidose (DPOC, obesidade-hipoventilação, neuromuscular): VNI BiPAP (ficha vni)",
    "Edema agudo de pulmão cardiogênico: CPAP ou BiPAP",
    "Reavaliar em 1–2 h: FR, esforço, SpO₂, gasometria, ROX (CNAF) ou HACOR (VNI). Falha → intubação"
  ],
  fataisExcluir: [
    "Pneumotórax hipertensivo",
    "Obstrução de via aérea / anafilaxia",
    "TEP maciço",
    "Edema agudo de pulmão",
    "Intoxicação por opioide/sedativo (naloxona)",
    "Fadiga muscular / doença neuromuscular (miastenia, Guillain-Barré)"
  ],
  proximaDecisao: "Melhora em 1–2 h → manter suporte e tratar a causa (internação). Sem melhora ou piora (FR alta, pH caindo, ROX abaixo do limiar do horário ou HACOR > 5, sinais de exaustão) → intubação e ventilação protetora (ficha ventilacao-mecanica).",
  clinica: {
    anamnese: [
      "Doença de base: DPOC, asma, IC, obesidade, doença neuromuscular, deformidade torácica",
      "Sintomas: infecção, dor torácica, início súbito",
      "Medicamentos sedativos, opioides, álcool",
      "Diretivas antecipadas de vontade / cuidados paliativos (define teto terapêutico)"
    ],
    exameFisico: [
      "FR, padrão, uso de musculatura acessória, respiração paradoxal",
      "Consciência (hipercapnia: sonolência, flapping)",
      "Ausculta, sinais de IC, assimetria",
      "Força muscular, tosse eficaz, deglutição"
    ],
    diferenciais: [
      { dx: "Tipo I (hipoxêmica)", pista: "Pneumonia, SDRA, EAP, TEP, atelectasia, pneumotórax, fibrose" },
      { dx: "Tipo II (hipercápnica)", pista: "DPOC, asma grave em fadiga, obesidade-hipoventilação, neuromuscular, depressão do centro respiratório (drogas), cifoescoliose" },
      { dx: "Mista", pista: "DPOC com pneumonia; IC com fadiga" }
    ],
    gravidade: [
      "PaO₂/FiO₂: < 300 = hipoxemia significativa; ≤ 200 moderada; ≤ 100 grave (definição de SDRA de Berlim exige PEEP ≥ 5)",
      "Índice ROX = (SpO₂/FiO₂) ÷ FR. Com CNAF, ROX ≥ 4,88 em 2, 6 ou 12 h indica menor risco de intubação; < 2,85 em 2 h, < 3,47 em 6 h ou < 3,85 em 12 h sugere falha",
      "HACOR (FC, acidose, consciência, oxigenação, FR) > 5 após 1 h de VNI indica alto risco de falha",
      "Hipercapnia aguda: cada aumento de 10 mmHg de PaCO₂ reduz o pH em cerca de 0,08"
    ]
  },
  exames: [
    {
      nome: "Gasometria arterial",
      pedido: "Gasometria arterial com lactato, anotando FiO₂/dispositivo; repetir 1–2 h após mudança de suporte.",
      porQue: "Tipo e gravidade, resposta ao tratamento.",
      esperar: "Tipo I: PaO₂ < 60, PaCO₂ normal/baixa. Tipo II: PaCO₂ > 45, pH < 7,35.",
      interpretacao: "HCO₃ alto com PaCO₂ alta = componente crônico (ficha gasometria-acido-base).",
      limitacoes: "Venosa serve para pH/PaCO₂ de seguimento (PvCO₂ normal praticamente exclui hipercapnia arterial)."
    },
    {
      nome: "Investigação da causa",
      pedido: "RX de tórax, POCUS, ECG, hemograma, eletrólitos, função renal, PCR, troponina, BNP; hemoculturas e pesquisa viral se infecção; angio-TC de tórax se suspeita de TEP.",
      porQue: "Tratar a causa.",
      esperar: "—",
      interpretacao: "Ver ficha dispneia-aguda.",
      limitacoes: "Não transportar paciente instável para tomografia sem suporte adequado."
    }
  ],
  tratamento: [
    {
      droga: "Oxigênio convencional",
      linha: "l1",
      dose: "Cateter nasal 1–6 L/min, Venturi 24–50%, máscara com reservatório 10–15 L/min",
      via: "Inalatória",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "SpO₂, FR",
      contraindicacoes: "—",
      ajustes: "Alvo 94–98% (88–92% se risco de hipercapnia). Ver ficha oxigenoterapia"
    },
    {
      droga: "Cânula nasal de alto fluxo (CNAF)",
      linha: "l1",
      dose: "Fluxo 40–60 L/min, FiO₂ titulada para SpO₂ 92–96%, 37 °C",
      via: "Nasal",
      intervalo: "Contínuo",
      duracao: "Reavaliar ROX em 2, 6 e 12 h",
      monitorizacao: "FR, SpO₂, ROX",
      contraindicacoes: "Hipercapnia com acidose (preferir VNI), rebaixamento, obstrução nasal",
      ajustes: "Preferida à VNI na IRA hipoxêmica de novo (ERS 2022)"
    },
    {
      droga: "Ventilação não invasiva",
      linha: "l1",
      dose: "BiPAP IPAP 10–12 → até 20 cmH₂O, EPAP 5 cmH₂O (tipo II); CPAP 5–10 cmH₂O ou BiPAP (EAP)",
      via: "Máscara oronasal",
      intervalo: "Contínuo nas primeiras horas",
      duracao: "Até resolução da acidose/causa",
      monitorizacao: "Gasometria em 1–2 h, FR, HACOR",
      contraindicacoes: "Ver ficha vni",
      ajustes: "Indicação forte: DPOC com pH ≤ 7,35 e PaCO₂ > 45; EAP cardiogênico; imunossuprimido"
    },
    {
      droga: "Intubação orotraqueal e ventilação mecânica",
      linha: "l1",
      dose: "Sequência rápida; Vt 6 mL/kg de peso predito, platô ≤ 30 cmH₂O",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Capnografia, gasometria, mecânica",
      contraindicacoes: "Recusa do paciente / diretiva antecipada",
      ajustes: "Ver fichas sequencia-rapida-intubacao e ventilacao-mecanica"
    },
    {
      droga: "Naloxona (depressão por opioide)",
      linha: "adj",
      dose: "0,04–0,4 mg, repetir e titular até FR adequada (até 2 mg)",
      via: "IV (ou IM/IN)",
      intervalo: "2–3 min",
      duracao: "Infusão se opioide de longa ação",
      monitorizacao: "FR, consciência, abstinência",
      contraindicacoes: "—",
      ajustes: "Doses pequenas em dependentes de opioide"
    }
  ],
  destino: {
    agora: [
      "O₂ titulado, gasometria, tratamento da causa, escolha do suporte"
    ],
    reavaliar: [
      "1–2 h após iniciar CNAF/VNI: clínica, gasometria, ROX/HACOR"
    ],
    alta: [
      "Rara do PS: só após causa resolvida, sem hipoxemia ou com O₂ domiciliar prévio, estável por horas"
    ],
    observacao: ["—"],
    internacao: [
      "Toda IRA que exigiu VNI, CNAF ou O₂ > 4–6 L/min",
      "UTI: VNI/CNAF com resposta incerta, intubação, instabilidade"
    ],
    transferencia: [
      "Sem UTI/ventilador: intubar antes do transporte se risco de falha no trajeto"
    ]
  },
  prescricao: {
    hospitalar: "INSUFICIÊNCIA RESPIRATÓRIA AGUDA — ADULTO\n1. Dieta zero enquanto em VNI/risco de intubação.\n2. Cabeceira 45°. Monitor, oximetria e capnografia se disponível.\n3. O₂ para SpO₂ 94–98% (88–92% se DPOC/hipercapnia): cateter nasal ___ L/min ou Venturi ___%.\n4. Tipo I com esforço/FiO₂ alta: CNAF 50 L/min, FiO₂ ___% (titular para SpO₂ 92–96%), 37 °C; ROX em 2, 6 e 12 h.\n5. Tipo II com pH < 7,35: BiPAP com máscara oronasal IPAP 12 cmH₂O (subir 2 cmH₂O a cada 10–15 min até 20 conforme tolerância/volume corrente), EPAP 5 cmH₂O, FiO₂ para SpO₂ 88–92%.\n6. Gasometria arterial agora e 1–2 h após o início do suporte.\n7. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV) se sem contraindicação.\n8. Material de intubação à beira-leito; critérios de falha (FR > 35, pH em queda, rebaixamento, SpO₂ < 88%) → intubação."
  },
  orientacoesRetorno: [
    "Após a alta: voltar imediatamente se falta de ar aumentar, lábios roxos, sonolência ou confusão",
    "Usar o O₂ ou o aparelho de ventilação domiciliar exatamente como prescrito, se indicado",
    "Não fumar; vacinas em dia (influenza, pneumococo, covid-19)",
    "Consulta na UBS ou pneumologia em até 1–2 semanas"
  ],
  fontes: [
    "ERS/ATS — Clinical Practice Guidelines: Noninvasive ventilation for acute respiratory failure (2017)",
    "ERS — Clinical practice guidelines: high-flow nasal cannula in acute respiratory failure (2022)",
    "ESICM — Guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies (2023)",
    "BTS — Guideline for oxygen use in healthcare and emergency settings (2017)",
    "Roca O et al. — Índice ROX, Am J Respir Crit Care Med (2019); Duan J et al. — HACOR, Intensive Care Med (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
