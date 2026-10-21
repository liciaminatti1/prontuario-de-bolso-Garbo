// Crise convulsiva / estado de mal epiléptico
registrarFicha({
  id: "convulsao",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Crise convulsiva / estado de mal epiléptico",
  resumo: "Crise tônico-clônica em curso, crises repetidas sem recuperação da consciência entre elas, ou paciente pós-ictal no PS.",
  palavrasChave: "convulsao crise epileptica epilepsia estado de mal diazepam midazolam fenitoina levetiracetam fenobarbital",
  critico: {
    tempo: "5 min = estado de mal",
    texto: "Crise > 5 min ou crises repetidas sem recuperação: benzodiazepínico agora. Persistindo após 2 doses (≈ 20 min): fármaco de 2ª linha."
  },
  alarmes: [
    "Crise > 5 min ou sem recuperação entre crises",
    "Hipoglicemia, hipóxia, hipotensão",
    "Primeira crise com déficit focal, febre, cefaleia intensa ou trauma",
    "Gestante > 20 semanas (eclâmpsia: sulfato de magnésio)",
    "Imunossupressão, anticoagulação, etilismo"
  ],
  condutaInicial: [
    "Proteger de trauma, decúbito lateral, aspirar, O₂, monitor",
    "Glicemia capilar imediata; se < 60: tiamina 100 mg + glicose 50% 50 mL IV",
    "Com acesso: diazepam 10 mg IV (ou midazolam 10 mg IM sem acesso); repetir 1× em 5 min",
    "Sem resposta: fenitoína 20 mg/kg IV ou levetiracetam 60 mg/kg IV ou valproato 40 mg/kg IV",
    "Refratário: intubação e infusão contínua (midazolam/propofol), EEG"
  ],
  fataisExcluir: [
    "Hipoglicemia",
    "Meningite / encefalite",
    "AVC / hemorragia intracraniana",
    "Eclâmpsia",
    "Intoxicação ou abstinência (álcool, benzodiazepínico)",
    "Distúrbio eletrolítico (sódio, cálcio, magnésio)"
  ],
  proximaDecisao: "Crise cessou: epiléptico conhecido com fator claro e recuperação completa → ajuste e alta. Primeira crise → investigação (glicemia, eletrólitos, TC, ± LCR) antes de decidir destino.",
  clinica: {
    anamnese: [
      "Testemunha: início, duração, movimentos, desvio do olhar, incontinência, mordedura lateral de língua",
      "Epilepsia conhecida: medicação, adesão, níveis, mudanças recentes",
      "Gatilhos: privação de sono, álcool, infecção, drogas, novas medicações (tramadol, bupropiona, quinolona)",
      "Trauma, cefaleia, febre, imunossupressão, gestação",
      "Pródromos (síncope tem pródromo e recuperação rápida)"
    ],
    exameFisico: [
      "Vias aéreas, sinais vitais, glicemia",
      "Nível de consciência e recuperação ao longo do tempo",
      "Déficit focal (paralisia de Todd costuma ser transitória)",
      "Sinais meníngeos, trauma craniano, lesões de língua",
      "Sinais de intoxicação ou abstinência"
    ],
    diferenciais: [
      { dx: "Síncope convulsiva", pista: "Pródromo, poucos abalos, recuperação rápida" },
      { dx: "Crise não epiléptica psicogênica", pista: "Olhos fechados, movimentos assíncronos, duração longa sem cianose" },
      { dx: "AIT / AVC", pista: "Sintomas negativos (déficit), sem abalos" },
      { dx: "Distúrbio do movimento / mioclonias", pista: "Consciência preservada" }
    ],
    gravidade: [
      "Estado de mal: crise ≥ 5 min ou crises recorrentes sem recuperação",
      "Refratário: persiste após benzodiazepínico + um fármaco de 2ª linha",
      "Estado de mal não convulsivo: rebaixamento sem melhora → EEG"
    ]
  },
  exames: [
    {
      nome: "Glicemia e eletrólitos",
      pedido: "Glicemia capilar imediata. Sódio, potássio, cálcio iônico, magnésio, glicemia, ureia, creatinina, gasometria venosa, CPK.",
      porQue: "Causas tratáveis.",
      esperar: "Acidose lática transitória pós-crise é esperada.",
      interpretacao: "Na < 120 com crise → salina hipertônica 3% 100 mL IV.",
      limitacoes: "—"
    },
    {
      nome: "Nível sérico de anticonvulsivante",
      pedido: "Nível sérico de fenitoína / valproato / carbamazepina / fenobarbital (conforme uso).",
      porQue: "Avaliar adesão e dose.",
      esperar: "—",
      interpretacao: "Nível baixo → má adesão ou interação.",
      limitacoes: "Levetiracetam: nível pouco útil."
    },
    {
      nome: "TC de crânio",
      pedido: "TC de crânio sem contraste.",
      porQue: "Primeira crise, déficit focal, trauma, anticoagulação, imunossupressão, recuperação incompleta.",
      esperar: "—",
      interpretacao: "Lesão estrutural → neurologia/neurocirurgia.",
      limitacoes: "RM é superior para investigação ambulatorial."
    },
    {
      nome: "Líquor",
      pedido: "Punção lombar (após TC se indicada): celularidade, proteína, glicose, Gram, cultura, PCR para HSV.",
      porQue: "Febre, imunossupressão, rigidez ou suspeita de encefalite.",
      esperar: "—",
      interpretacao: "Pleocitose → tratar meningite/encefalite (aciclovir 10 mg/kg 8/8h se suspeita de HSV).",
      limitacoes: "Não atrasar antibiótico/aciclovir pela punção."
    },
    {
      nome: "Outros",
      pedido: "Beta-hCG (mulheres em idade fértil), toxicológico se suspeita, ECG; EEG se não recupera.",
      porQue: "Eclâmpsia, intoxicação, arritmia, estado de mal não convulsivo.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Diazepam",
      linha: "l1",
      dose: "Adulto 10 mg (0,15–0,2 mg/kg, máx 10 mg/dose) · criança 0,3 mg/kg IV ou 0,5 mg/kg retal",
      via: "IV lento (sem diluir) ou retal",
      intervalo: "Repetir 1× após 5 min",
      duracao: "Máx 2 doses",
      monitorizacao: "Respiração, PA, SpO₂",
      contraindicacoes: "—",
      ajustes: "Não usar IM (absorção errática)"
    },
    {
      droga: "Midazolam",
      linha: "l1",
      dose: "> 40 kg: 10 mg · 13–40 kg: 5 mg · ou 0,2 mg/kg intranasal/bucal",
      via: "IM, intranasal ou bucal",
      intervalo: "Dose única; pode repetir 1×",
      duracao: "—",
      monitorizacao: "Respiração",
      contraindicacoes: "—",
      ajustes: "Primeira escolha sem acesso venoso"
    },
    {
      droga: "Fenitoína",
      linha: "l1",
      dose: "20 mg/kg (máx 1.500 mg); se persistir, +5–10 mg/kg",
      via: "IV, diluída somente em SF 0,9%",
      intervalo: "Infusão ≤ 50 mg/min (idoso/cardiopata ≤ 25 mg/min)",
      duracao: "Manutenção 100 mg 8/8h após 12–24 h",
      monitorizacao: "ECG e PA contínuos (bradiarritmia, hipotensão), flebite",
      contraindicacoes: "BAV, bradicardia sinusal",
      ajustes: "Precipita em SG. Ex.: 70 kg → 1.400 mg em 250 mL SF em ≥ 30 min"
    },
    {
      droga: "Levetiracetam",
      linha: "l1",
      dose: "60 mg/kg (máx 4.500 mg)",
      via: "IV em 10–15 min",
      intervalo: "Dose única; manutenção 500–1.500 mg 12/12h",
      duracao: "—",
      monitorizacao: "Sonolência, comportamento",
      contraindicacoes: "—",
      ajustes: "Ajustar manutenção na DRC. Boa opção em cardiopatas e gestantes"
    },
    {
      droga: "Valproato de sódio",
      linha: "alt",
      dose: "40 mg/kg (máx 3.000 mg)",
      via: "IV em 10 min",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Função hepática, amônia, plaquetas",
      contraindicacoes: "Gestação, hepatopatia, doença mitocondrial",
      ajustes: "—"
    },
    {
      droga: "Fenobarbital",
      linha: "alt",
      dose: "15–20 mg/kg (máx 1.000 mg)",
      via: "IV a 50–100 mg/min",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Depressão respiratória e hipotensão (preparar via aérea)",
      contraindicacoes: "—",
      ajustes: "Usar se outras opções indisponíveis"
    },
    {
      droga: "Estado de mal refratário: midazolam contínuo",
      linha: "adj",
      dose: "Bolus 0,2 mg/kg, depois 0,05–2 mg/kg/h",
      via: "IV contínua",
      intervalo: "Titular por clínica e EEG",
      duracao: "24–48 h sem crises antes de desmame",
      monitorizacao: "Ventilação mecânica, PA, EEG contínuo",
      contraindicacoes: "—",
      ajustes: "Alternativas: propofol 1–2 mg/kg + 20–200 mcg/kg/min; cetamina"
    }
  ],
  destino: {
    agora: [
      "Interromper a crise e corrigir causas tratáveis"
    ],
    reavaliar: [
      "Consciência a cada 15–30 min até o basal (não recuperar em 30–60 min → pensar estado de mal não convulsivo)",
      "Sinais vitais e SpO₂"
    ],
    alta: [
      "Epiléptico conhecido, crise típica isolada, fator claro (esquecimento de dose), recuperação completa",
      "Primeira crise não provocada com exames normais, recuperação completa e acompanhante: alta com encaminhamento à neurologia e EEG/RM ambulatorial",
      "Orientar: não dirigir, evitar altura e nadar sozinho"
    ],
    observacao: [
      "Primeira crise aguardando exames e recuperação"
    ],
    internacao: [
      "Estado de mal, crises repetidas, causa aguda grave, não recuperação, lesão estrutural nova"
    ],
    transferencia: [
      "Estado de mal refratário sem UTI ou neurologia",
      "UBS: crise em curso → benzodiazepínico (midazolam IM) e SAMU"
    ]
  },
  fontes: [
    "American Epilepsy Society — Guideline for the Treatment of Convulsive Status Epilepticus (2016)",
    "ESETT trial (N Engl J Med 2019) — levetiracetam, fosfenitoína e valproato",
    "ABN — Recomendações para manejo do estado de mal epiléptico"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
