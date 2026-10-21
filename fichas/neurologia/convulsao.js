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
    "Glicemia capilar imediata; se < 60: adulto tiamina 100 mg IV + glicose 50% 50 mL IV; criança glicose 0,5–1 g/kg (SG 10% 5–10 mL/kg) IV",
    "Com acesso: diazepam 0,15–0,2 mg/kg IV (máx 10 mg); sem acesso: midazolam IM (10 mg se > 40 kg; 5 mg se 13–40 kg) ou intranasal/bucal; repetir 1× em 5 min",
    "Sem resposta: levetiracetam 60 mg/kg IV (máx 4.500 mg) ou fenitoína 20 mg/kg IV (máx 1.500 mg) ou valproato 40 mg/kg IV (máx 3.000 mg) — eficácia semelhante (ESETT)",
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
      interpretacao: "Na < 120 com crise → salina hipertônica 3% 100 mL IV em 10 min (pode repetir até 3×, sem elevar o sódio mais que o limite seguro de 24 h).",
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
      dose: "Adulto e criança 0,15–0,2 mg/kg IV (máx 10 mg/dose) · retal 0,2–0,5 mg/kg (máx 20 mg)",
      via: "IV lento (sem diluir) ou retal",
      intervalo: "Repetir 1× após 5 min",
      duracao: "Máx 2 doses",
      monitorizacao: "Respiração, PA, SpO₂",
      contraindicacoes: "—",
      ajustes: "Ampola 10 mg/2 mL (5 mg/mL). Injetar sem diluir a até 5 mg/min. Não usar IM (absorção errática)"
    },
    {
      droga: "Midazolam",
      linha: "l1",
      dose: "IM: > 40 kg 10 mg · 13–40 kg 5 mg · intranasal/bucal 0,2 mg/kg (máx 10 mg) · IV 0,1–0,2 mg/kg (máx 10 mg)",
      via: "IM, intranasal ou bucal",
      intervalo: "Dose única; pode repetir 1×",
      duracao: "—",
      monitorizacao: "Respiração",
      contraindicacoes: "—",
      ajustes: "Primeira escolha sem acesso venoso. Ampola 5 mg/mL: usar sem diluir; intranasal com atomizador, metade em cada narina"
    },
    {
      droga: "Fenitoína",
      linha: "l1",
      dose: "Adulto e criança 20 mg/kg (máx 1.500 mg); se persistir, +5–10 mg/kg",
      via: "IV, diluída somente em SF 0,9%",
      intervalo: "Infusão ≤ 50 mg/min (idoso/cardiopata ≤ 25 mg/min; criança ≤ 1 mg/kg/min)",
      duracao: "Manutenção adulto 100 mg 8/8h (criança 5 mg/kg/dia em 2–3 doses) após 12–24 h",
      monitorizacao: "ECG e PA contínuos (bradiarritmia, hipotensão), flebite",
      contraindicacoes: "BAV, bradicardia sinusal",
      ajustes: "Ampola 250 mg/5 mL (50 mg/mL). Precipita em SG. Concentração final 1–10 mg/mL. Ex.: 70 kg → 1.400 mg (28 mL) em 250 mL SF em ≥ 30 min, com filtro se disponível"
    },
    {
      droga: "Levetiracetam",
      linha: "l1",
      dose: "Adulto e criança 60 mg/kg (máx 4.500 mg)",
      via: "IV em 10–15 min",
      intervalo: "Dose única; manutenção adulto 500–1.500 mg 12/12h · criança 20 mg/kg 12/12h (máx 1.500 mg/dose)",
      duracao: "—",
      monitorizacao: "Sonolência, comportamento",
      contraindicacoes: "—",
      ajustes: "Frasco 500 mg/5 mL (100 mg/mL): diluir em 100 mL SF 0,9% (ou SG 5%). Ataque sem ajuste renal; ajustar manutenção na DRC. Boa opção em cardiopatas e gestantes"
    },
    {
      droga: "Valproato de sódio",
      linha: "alt",
      dose: "Adulto e criança 40 mg/kg (máx 3.000 mg)",
      via: "IV em 10 min",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Função hepática, amônia, plaquetas",
      contraindicacoes: "Gestação, hepatopatia, doença mitocondrial",
      ajustes: "Disponibilidade IV limitada no Brasil. Evitar em < 2 anos (hepatotoxicidade) e em mulheres em idade fértil"
    },
    {
      droga: "Fenobarbital",
      linha: "alt",
      dose: "Adulto e criança 15–20 mg/kg (máx 1.000 mg)",
      via: "IV a 50–100 mg/min",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Depressão respiratória e hipotensão (preparar via aérea)",
      contraindicacoes: "—",
      ajustes: "Conferir a concentração da ampola disponível antes de calcular o volume. Diluir em 100 mL SF. Usar se outras opções indisponíveis; 2ª linha usual no recém-nascido"
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
      ajustes: "Diluição: midazolam 150 mg (30 mL de 5 mg/mL) + SF 120 mL = 1 mg/mL. Alternativas: propofol 1–2 mg/kg + 20–200 mcg/kg/min (evitar infusão prolongada em criança); cetamina"
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
  prescricao: {
    hospitalar: "PRESCRIÇÃO — SALA DE EMERGÊNCIA (ESTADO DE MAL, ADULTO 70 kg)\n1. Decúbito lateral, aspiração, O₂ por máscara 10 L/min, monitor e oximetria.\n2. Glicemia capilar agora. Se < 60 mg/dL: tiamina 100 mg IV + glicose 50% 50 mL IV.\n3. 0–5 min de crise: diazepam 10 mg (2 mL) IV sem diluir em 2 min. Sem acesso: midazolam 10 mg (2 mL) IM no vasto lateral.\n4. Persistindo após 5 min: repetir diazepam 10 mg IV (máx 2 doses).\n5. Persistindo (≈ 20 min): levetiracetam 4.200 mg (60 mg/kg; 42 mL de 100 mg/mL) + SF 0,9% 100 mL IV em 15 min.\n   OU fenitoína 1.400 mg (20 mg/kg; 28 mL de 50 mg/mL) + SF 0,9% 250 mL IV a ≤ 50 mg/min (≥ 30 min), com monitor cardíaco e PA.\n6. Persistindo após 2ª linha: chamar UTI, IOT e midazolam 0,2 mg/kg IV em bolus, depois midazolam 1 mg/mL IV em bomba a 0,05–2 mg/kg/h (70 kg: 3,5–140 mL/h), titular; EEG.\n7. Manutenção após controle: fenitoína 100 mg IV de 8 em 8 horas (em 50 mL de SF) OU levetiracetam 1.000 mg + SF 100 mL IV de 12 em 12 horas.\n8. Suspeita de eclâmpsia: sulfato de magnésio 4 g IV em 20 min (ataque), depois 1 g/h.\n9. Dipirona 1 g IV se febre.\n10. Cuidados: grades elevadas, cabeceira 30°, avaliação neurológica a cada 15–30 min, glicemia capilar de 4 em 4 horas.\n\nCRIANÇA (por kg)\n- Diazepam 0,15–0,2 mg/kg IV (máx 10 mg) ou 0,5 mg/kg retal (máx 20 mg); midazolam 0,2 mg/kg IN/bucal (máx 10 mg) ou IM 5 mg (13–40 kg).\n- Levetiracetam 60 mg/kg IV (máx 4.500 mg) em 15 min, ou fenitoína 20 mg/kg IV a ≤ 1 mg/kg/min (máx 1.500 mg), ou fenobarbital 20 mg/kg IV (máx 1.000 mg).\n- Hipoglicemia: SG 10% 5 mL/kg IV."
  },
  orientacoesRetorno: [
    "Durante uma crise: deitar de lado, afastar objetos, não colocar nada na boca, marcar o tempo",
    "Chamar o SAMU (192) se a crise durar mais de 5 minutos, se houver outra crise sem acordar, ou se houver lesão grave",
    "Tomar o anticonvulsivante todos os dias no horário; não parar por conta própria",
    "Evitar privação de sono, álcool e drogas",
    "Não dirigir, não nadar sozinho, evitar alturas e máquinas perigosas até liberação médica",
    "Voltar imediatamente se nova crise, febre com dor de cabeça, confusão que não melhora ou fraqueza de um lado do corpo",
    "Primeira crise: consulta com neurologia e EEG/RM ambulatoriais; epiléptico conhecido: UBS em 1–2 semanas para revisar dose"
  ],
  fontes: [
    "American Epilepsy Society — Guideline for the Treatment of Convulsive Status Epilepticus in Children and Adults (2016)",
    "ESETT trial (N Engl J Med 2019; Lancet 2020 — análise pediátrica) — levetiracetam, fosfenitoína e valproato",
    "RAMPART (N Engl J Med 2012) — midazolam IM",
    "Ministério da Saúde — PCDT Epilepsia (Portaria Conjunta nº 17/2018; atualização aprovada pela Conitec em 2025 aguardando publicação)",
    "AHA — PALS (2025) para hipoglicemia pediátrica"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
