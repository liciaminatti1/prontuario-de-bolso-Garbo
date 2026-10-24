// Gangrena de Fournier — fasciíte necrosante do períneo
registrarFicha({
  id: "gangrena-fournier",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Gangrena de Fournier (fasciíte necrosante perineal)",
  resumo: "Infecção necrosante polimicrobiana de períneo, genitais e região perianal, de progressão rápida. Fatores de risco: diabetes, etilismo, obesidade, imunossupressão, abscesso perianal, trauma ou manipulação urológica. Tratamento: desbridamento cirúrgico precoce e repetido, antibiótico amplo e suporte de sepse.",
  palavrasChave: "gangrena de fournier fournier fasciite necrosante perineo escroto vulva crepitacao necrose desbridamento lrinec fgsi piperacilina tazobactam clindamicina meropenem vancomicina",
  critico: {
    tempo: "Desbridamento em poucas horas",
    texto: "A mortalidade cresce com cada hora de atraso. Suspeita clínica basta: antibiótico amplo + clindamicina, reanimação e centro cirúrgico; imagem não deve atrasar a cirurgia."
  },
  alarmes: [
    "Dor desproporcional ao aspecto da pele, edema endurecido além do eritema",
    "Crepitação, bolhas, pele arroxeada/escura, necrose, odor fétido",
    "Sepse, choque, rebaixamento, lesão renal aguda",
    "Diabético descompensado, imunossuprimido, cirrótico",
    "Progressão visível em horas (marcar bordas com caneta)"
  ],
  condutaInicial: [
    "Monitor, 2 acessos, cristaloide 30 mL/kg nas primeiras 3 h se hipotensão ou lactato ≥ 4 (SSC 2021); noradrenalina se PAM < 65 apesar de volume",
    "Hemoculturas 2 pares e antibiótico na 1ª hora (amplo espectro + clindamicina)",
    "Hemograma, PCR, lactato, glicemia, Na, creatinina, CPK, coagulograma, gasometria, tipagem; cultura do tecido no centro cirúrgico",
    "Controle glicêmico (insulina IV se necessário)",
    "Sonda vesical (ou cistostomia se envolvimento uretral, pelo urologista)",
    "Cirurgia geral/urologia/coloproctologia imediata para desbridamento amplo",
    "Profilaxia do tétano conforme ficha tetano-profilaxia"
  ],
  fataisExcluir: [
    "Choque séptico com disfunção de múltiplos órgãos",
    "Extensão para parede abdominal, coxas e retroperitônio",
    "Cetoacidose diabética associada",
    "Abscesso perianal/periuretral como foco não drenado"
  ],
  proximaDecisao: "Após o 1º desbridamento: reexploração em 24–48 h (ou antes se piora) até não haver mais necrose. Colostomia de desvio se contaminação fecal persistente ou envolvimento do esfíncter; cistostomia se lesão uretral. Antibiótico até não haver mais necessidade de desbridamento e estabilidade clínica (em geral 48–72 h afebril). Reconstrução (enxertos, retalhos) depois.",
  clinica: {
    anamnese: [
      "Dor e edema perineal/escrotal/vulvar de evolução rápida, febre, mal-estar",
      "Abscesso perianal, fissura, hemorroidas, cirurgia anorretal ou urológica recente, sondagem, estenose de uretra, trauma",
      "Diabetes, etilismo, obesidade, HIV, quimioterapia, corticoide",
      "Uso recente de iSGLT2 (alerta de órgãos reguladores sobre casos associados)"
    ],
    exameFisico: [
      "Eritema, edema endurecido, bolhas, necrose, crepitação, secreção fétida ('água de lavar prato')",
      "Extensão para parede abdominal, coxas, região glútea",
      "Sinais vitais, perfusão, nível de consciência",
      "Toque retal (foco anorretal) e exame da uretra"
    ],
    diferenciais: [
      { dx: "Celulite/erisipela de períneo ou escroto", pista: "Sem necrose, crepitação ou dor desproporcional; resposta rápida ao antibiótico" },
      { dx: "Abscesso perianal ou escrotal simples", pista: "Coleção localizada, sem extensão necrosante" },
      { dx: "Orquiepididimite", pista: "Dor testicular, sem necrose cutânea" },
      { dx: "Torção testicular / hérnia encarcerada", pista: "Dor súbita, massa inguinal" }
    ],
    gravidade: [
      "LRINEC (PCR, leucócitos, Hb, Na, creatinina, glicemia): escore ≥ 6 sugere infecção necrosante, mas escore baixo não exclui",
      "Fournier's Gangrene Severity Index (FGSI): > 9 associado a maior mortalidade",
      "Extensão > 3% da superfície corporal, choque e idade avançada pioram o prognóstico"
    ]
  },
  exames: [
    {
      nome: "Laboratório e LRINEC",
      pedido: "Hemograma, PCR, sódio, potássio, ureia, creatinina, glicemia, CPK, bicarbonato (gasometria venosa), lactato, albumina, TP/INR, TTPa, tipagem sanguínea; hemoculturas 2 pares.",
      porQue: "Gravidade, sepse, escores, preparo cirúrgico.",
      esperar: "Leucocitose, PCR muito elevada, hiponatremia, hiperglicemia, lesão renal.",
      interpretacao: "LRINEC ≥ 6 reforça a suspeita.",
      limitacoes: "Não usar exame normal para afastar quando a clínica é sugestiva."
    },
    {
      nome: "Tomografia de abdome, pelve e períneo",
      pedido: "Tomografia de abdome, pelve e períneo com contraste — avaliar extensão de infecção necrosante (Fournier).",
      porQue: "Paciente estável com dúvida diagnóstica ou para avaliar extensão (retroperitônio, parede).",
      esperar: "Gás em partes moles, espessamento fascial, coleções.",
      interpretacao: "Gás em fáscia = infecção necrosante.",
      limitacoes: "Não atrasar cirurgia em paciente com diagnóstico clínico."
    },
    {
      nome: "Cultura de tecido",
      pedido: "Cultura (aeróbios e anaeróbios) de fragmento de tecido profundo coletado no desbridamento.",
      porQue: "Ajuste do antibiótico.",
      esperar: "Polimicrobiano (E. coli, Bacteroides, estreptococos, estafilococos, enterococos).",
      interpretacao: "—",
      limitacoes: "Swab superficial tem pouco valor."
    }
  ],
  tratamento: [
    {
      droga: "Piperacilina-tazobactam",
      linha: "l1",
      dose: "4,5 g",
      via: "IV em 30 min (ou infusão estendida)",
      intervalo: "6/6 h",
      duracao: "Até fim dos desbridamentos e estabilidade (em geral 48–72 h afebril)",
      monitorizacao: "Função renal, culturas",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alternativa: meropenem 1 g IV 8/8 h (choque, ESBL). ClCr < 40: ajustar"
    },
    {
      droga: "Clindamicina",
      linha: "l1",
      dose: "600–900 mg",
      via: "IV em 20–30 min",
      intervalo: "8/8 h",
      duracao: "Em geral até estabilidade clínica e controle da necrose",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "—",
      ajustes: "Inibe produção de toxinas (estreptococo, clostrídio). Diluir em 100 mL de SF"
    },
    {
      droga: "Vancomicina",
      linha: "adj",
      dose: "Ataque 25–30 mg/kg; depois 15–20 mg/kg",
      via: "IV (≤ 1 g/h)",
      intervalo: "8/8 a 12/12 h",
      duracao: "Suspender se culturas sem MRSA",
      monitorizacao: "Nível sérico (vale ou AUC), função renal",
      contraindicacoes: "—",
      ajustes: "Cobertura empírica de MRSA recomendada pela IDSA 2014 em infecção necrosante. Alternativa: linezolida 600 mg IV 12/12 h"
    },
    {
      droga: "Desbridamento cirúrgico amplo",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "Reexploração a cada 24–48 h",
      duracao: "Até ausência de necrose",
      monitorizacao: "Bordas, extensão, sinais vitais",
      contraindicacoes: "—",
      ajustes: "Testículos geralmente preservados (irrigação própria). Oxigenoterapia hiperbárica: adjuvante sem evidência robusta, não atrasar cirurgia"
    }
  ],
  destino: {
    agora: [
      "Antibiótico, reanimação e centro cirúrgico"
    ],
    reavaliar: [
      "Ferida e sinais vitais de 4/4 h; lactato e glicemia frequentes"
    ],
    alta: [
      "Sem necrose, infecção controlada, ferida em cicatrização ou reconstruída, glicemia controlada, plano de curativos"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Sempre; UTI se sepse/choque"
    ],
    transferencia: [
      "Sem cirurgião/centro cirúrgico: transferência de emergência após antibiótico e início da reanimação"
    ]
  },
  prescricao: {
    hospitalar: "GANGRENA DE FOURNIER — ADULTO (peso ___ kg)\n1. Jejum (cirurgia).\n2. Monitor; oxigênio para SpO₂ ≥ 94%; sonda vesical com diurese horária.\n3. Ringer lactato 30 mL/kg IV nas primeiras 3 h se hipotensão ou lactato ≥ 4; reavaliar a cada 500 mL.\n4. Hemoculturas 2 pares antes do antibiótico.\n5. Piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n6. Clindamicina 900 mg + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n7. Vancomicina 25 mg/kg IV (ataque) em SF 0,9% 250–500 mL a ≤ 1 g/h; depois 15 mg/kg de 12/12 h, ajustar por nível e função renal.\n8. Noradrenalina se PAM < 65 mmHg após volume (ver ficha choque).\n9. Insulina regular conforme glicemia capilar de 1/1 h a 4/4 h (alvo 140–180 mg/dL).\n10. Dipirona 1 g IV de 6/6 h; morfina 2–4 mg IV SN.\n11. Profilaxia de tétano conforme situação vacinal.\n12. Encaminhar ao centro cirúrgico para desbridamento.",
    ambulatorial: "ALTA (após tratamento hospitalar)\n1. Curativos conforme plano da cirurgia/plástica (UBS ou ambulatório de feridas).\n2. Controle rigoroso do diabetes.\n3. Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor."
  },
  orientacoesRetorno: [
    "Manter os curativos e a higiene da região conforme orientado",
    "Controlar a glicemia todos os dias; diabetes controlado reduz o risco de nova infecção",
    "Voltar imediatamente se: febre, dor que aumenta, pele escurecendo, mau cheiro ou secreção na ferida",
    "Tratar cedo qualquer furúnculo ou abscesso perto do ânus ou dos genitais",
    "Retornos com cirurgia, urologia ou plástica conforme agendado"
  ],
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (Stevens et al., 2014)",
    "WSES/SIS — 2018 guidelines for the management of skin and soft-tissue infections (Sartelli et al., 2018)",
    "Surviving Sepsis Campaign — International guidelines (2021)",
    "EAU — Guidelines on Urological Infections (2024): Fournier's gangrene"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
