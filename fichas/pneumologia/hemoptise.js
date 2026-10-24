// Hemoptise maciça e não maciça
registrarFicha({
  id: "hemoptise",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hemoptise (maciça e não maciça)",
  resumo: "Eliminação de sangue pela tosse vindo da via aérea abaixo da glote. Ameaçadora à vida quando compromete a troca gasosa ou a hemodinâmica, independentemente do volume. No Brasil, pensar sempre em tuberculose.",
  palavrasChave: "hemoptise macica escarro com sangue tuberculose bronquiectasia neoplasia pulmao embolizacao arteria bronquica broncoscopia acido tranexamico intubacao seletiva angiotomografia",
  critico: {
    tempo: "Lado que sangra para baixo",
    texto: "Hemoptise ameaçadora: deitar sobre o lado que sangra, O₂, aspirar, 2 acessos e reserva de sangue. Hipoxemia ou fadiga: intubar com tubo calibroso (≥ 8,0) e acionar broncoscopia/embolização."
  },
  alarmes: [
    "Hipoxemia, desconforto respiratório, incapacidade de expectorar o sangue",
    "Instabilidade hemodinâmica",
    "Volume grande (as definições variam; frequentemente > 100–600 mL em 24 h) ou sangramento contínuo",
    "Reserva pulmonar baixa (DPOC, ressecção prévia) — pequenos volumes já ameaçam a vida",
    "Coagulopatia, anticoagulação, plaquetopenia",
    "Hemoptise com tumor central conhecido (risco de sangramento catastrófico)"
  ],
  condutaInicial: [
    "Confirmar origem: excluir sangramento de nasofaringe (epistaxe posterior) e hematêmese",
    "Ameaçadora: decúbito lateral sobre o lado que sangra (se conhecido), O₂, aspiração, monitor, 2 acessos calibrosos, tipagem e reserva",
    "Suspender anticoagulantes/antiagregantes; corrigir coagulopatia e plaquetas",
    "Ácido tranexâmico (IV ou nebulizado) como adjuvante",
    "Via aérea: intubação com tubo ≥ 8,0 (permite broncoscopia); intubação seletiva do pulmão sadio se necessário",
    "Estável: angiotomografia de tórax (localiza e identifica a causa, planeja embolização)",
    "Acionar pneumologia/broncoscopia e radiologia intervencionista (embolização de artéria brônquica); cirurgia se falha",
    "Solicitar baciloscopia/TRM-TB do escarro e isolamento respiratório até excluir TB"
  ],
  fataisExcluir: [
    "Asfixia (afogamento em sangue)",
    "TB ativa (transmissível — isolamento)",
    "Neoplasia de pulmão",
    "TEP com infarto pulmonar",
    "Estenose mitral / EAP, vasculite pulmonar (hemorragia alveolar), coagulopatia"
  ],
  proximaDecisao: "Não maciça, estável, sem hipoxemia e causa provável benigna (bronquite) → tratamento ambulatorial com investigação (RX, TB, TC se risco de câncer). Ameaçadora ou recorrente → internação (UTI), angio-TC, broncoscopia e embolização de artéria brônquica.",
  clinica: {
    anamnese: [
      "Quantidade estimada (colher, copo), duração, aspecto (sangue vivo, rajas, espumoso)",
      "Tosse, febre, sudorese noturna, perda de peso, contato com TB",
      "Tabagismo, idade > 40 anos (neoplasia)",
      "Bronquiectasias, TB prévia (sequela, aspergiloma), fibrose cística",
      "Anticoagulantes, antiagregantes, cocaína inalada",
      "Dispneia súbita, TVP (TEP); doença renal com hematúria (vasculite)"
    ],
    exameFisico: [
      "SpO₂, FR, PA, FC, perfusão",
      "Inspeção de nariz e orofaringe",
      "Ausculta (estertores localizados indicam o lado), sopro de estenose mitral",
      "Linfonodos, baqueteamento, sinais de TVP"
    ],
    diferenciais: [
      { dx: "Pseudo-hemoptise (nasofaringe)", pista: "Epistaxe, sangue escorrendo na faringe" },
      { dx: "Hematêmese", pista: "Sangue escuro, com restos alimentares, pH ácido, náuseas, doença hepática" },
      { dx: "Bronquite aguda", pista: "Rajas de sangue, infecção viral, RX normal" },
      { dx: "Tuberculose", pista: "Tosse > 2–3 semanas, febre, perda de peso, cavitação" },
      { dx: "Bronquiectasias", pista: "Expectoração crônica, infecções de repetição" },
      { dx: "Câncer de pulmão", pista: "Tabagista > 40 anos, perda de peso" }
    ],
    gravidade: [
      "Ameaçadora à vida: hipoxemia/insuficiência respiratória, obstrução de via aérea, instabilidade hemodinâmica, ou volume grande",
      "A asfixia, não a hipovolemia, é a principal causa de morte"
    ]
  },
  exames: [
    {
      nome: "Angiotomografia de tórax",
      pedido: "Angiotomografia de tórax com contraste (protocolo de hemoptise, incluindo artérias brônquicas).",
      porQue: "Localiza o sangramento, identifica a causa e planeja embolização.",
      esperar: "Cavidade, bronquiectasias, massa, vidro fosco (aspiração de sangue), artérias brônquicas hipertrofiadas.",
      interpretacao: "Também avalia TEP.",
      limitacoes: "Só no paciente estável/via aérea segura."
    },
    {
      nome: "RX de tórax",
      pedido: "RX de tórax PA e perfil (ou no leito).",
      porQue: "Avaliação inicial rápida.",
      esperar: "Cavitação, massa, consolidação.",
      interpretacao: "Normal não exclui neoplasia nem bronquiectasias.",
      limitacoes: "Sangue aspirado simula consolidação."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, plaquetas, TP/INR, TTPa, fibrinogênio, tipagem ABO/Rh e prova cruzada, ureia, creatinina, urina tipo 1 (hematúria), gasometria; escarro: baciloscopia e TRM-TB (e cultura para micobactérias).",
      porQue: "Gravidade, coagulopatia, vasculite, TB.",
      esperar: "—",
      interpretacao: "Hematúria + hemorragia alveolar → síndrome pulmão-rim (ANCA, anti-MBG).",
      limitacoes: "—"
    },
    {
      nome: "Broncoscopia",
      pedido: "Broncoscopia (rígida, se disponível, na hemoptise maciça).",
      porQue: "Localizar, controlar (soro gelado, adrenalina tópica, bloqueador brônquico), aspirar.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Depende de disponibilidade; não atrasar embolização."
    }
  ],
  tratamento: [
    {
      droga: "Ácido tranexâmico",
      linha: "adj",
      dose: "IV: 1 g em 10 min, depois 1 g a cada 8 h · Nebulizado: 500 mg (10 mL da ampola de 50 mg/mL) a cada 8 h",
      via: "IV ou inalatória",
      intervalo: "8/8 h",
      duracao: "Até controle (em geral até 5 dias)",
      monitorizacao: "Trombose, convulsão (doses altas, DRC)",
      contraindicacoes: "Trombose ativa; ajustar em DRC",
      ajustes: "Nebulizado reduziu volume de sangramento e tempo de internação em ensaio clínico (2018); uso adjuvante, não substitui embolização"
    },
    {
      droga: "Embolização de artéria brônquica",
      linha: "l1",
      dose: "Radiologia intervencionista",
      via: "Endovascular",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Recorrência, isquemia medular (rara)",
      contraindicacoes: "—",
      ajustes: "Tratamento de escolha na hemoptise ameaçadora após estabilização da via aérea"
    },
    {
      droga: "Intubação (tubo ≥ 8,0) / intubação seletiva",
      linha: "l1",
      dose: "Sequência rápida; seletiva do pulmão sadio (direito: avançar tubo no brônquio principal; esquerdo: guiado por broncoscópio)",
      via: "Orotraqueal",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "SpO₂, capnografia",
      contraindicacoes: "—",
      ajustes: "Ver ficha sequencia-rapida-intubacao"
    },
    {
      droga: "Correção de coagulopatia",
      linha: "adj",
      dose: "Varfarina: vitamina K 10 mg IV + complexo protrombínico ou plasma; plaquetas se < 50.000 com sangramento ativo; antídoto específico para DOAC se disponível",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "INR, plaquetas",
      contraindicacoes: "—",
      ajustes: "Ver ficha antidotos"
    },
    {
      droga: "Antibiótico (bronquiectasia/infecção)",
      linha: "adj",
      dose: "Conforme ficha pneumonia e culturas prévias (cobertura de Pseudomonas em bronquiectasia colonizada)",
      via: "VO/IV",
      intervalo: "—",
      duracao: "7–14 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Hemoptise leve em bronquite/bronquiectasia infectada costuma responder ao tratamento da infecção"
    },
    {
      droga: "Antitussígenos potentes / sedação excessiva",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Suprimir a tosse impede eliminar sangue e favorece asfixia na hemoptise volumosa",
      ajustes: "Codeína em dose baixa pode ser usada com cautela na hemoptise leve com tosse incessante"
    }
  ],
  destino: {
    agora: [
      "Proteger via aérea, posicionar, corrigir coagulopatia, reservar sangue",
      "Isolamento respiratório até excluir TB"
    ],
    reavaliar: [
      "Volume expectorado (medir em frasco), SpO₂, hemoglobina"
    ],
    alta: [
      "Rajas de sangue/pequeno volume, estável, sem hipoxemia, RX sem achado grave",
      "Investigação ambulatorial: baciloscopia/TRM-TB, TC de tórax se > 40 anos/tabagista ou recorrente; retorno em 1 semana"
    ],
    observacao: [
      "Volume moderado, estável, aguardando exames"
    ],
    internacao: [
      "Hemoptise ameaçadora (UTI), recorrente, com hipoxemia, coagulopatia ou causa grave"
    ],
    transferencia: [
      "Sem broncoscopia, radiologia intervencionista ou cirurgia torácica: regular para centro de referência com via aérea garantida se necessário"
    ]
  },
  prescricao: {
    hospitalar: "HEMOPTISE AMEAÇADORA (adulto)\n1. Dieta zero. Decúbito lateral sobre o lado que sangra (se conhecido). Isolamento respiratório (aerossóis/N95) até excluir TB.\n2. Monitor, oximetria; O₂ para SpO₂ ≥ 92%. Aspirador à beira-leito.\n3. 2 acessos calibrosos; tipagem, prova cruzada e reserva de 2–4 concentrados de hemácias.\n4. Ácido tranexâmico 50 mg/mL — 1 g (20 mL) + SF 0,9% 100 mL IV em 10–20 min; depois 1 g IV de 8/8 h.\n   (ou adjuvante) Ácido tranexâmico 50 mg/mL — 500 mg (10 mL) por nebulização de 8/8 h.\n5. Suspender anticoagulantes e antiagregantes; corrigir INR/plaquetas conforme exames.\n6. Material de intubação (tubo 8,0–8,5); broncoscopia e radiologia intervencionista acionadas.\n7. Exames: hemograma, coagulograma, fibrinogênio, creatinina, urina tipo 1, gasometria; escarro para baciloscopia e TRM-TB; angiotomografia de tórax quando estável.\n8. Medir volume expectorado em frasco graduado; avisar se > 100 mL/h, queda de SpO₂ ou instabilidade.",
    ambulatorial: "HEMOPTISE LEVE (rajas) COM BRONQUITE/INFECÇÃO\nUSO ORAL\n1. Conforme ficha pneumonia/bronquite, se indicado antibiótico.\n\nEXAMES\n2. Baciloscopia de escarro (2 amostras) e teste rápido molecular para TB (TRM-TB).\n3. RX de tórax PA e perfil.\n4. TC de tórax se idade > 40 anos, tabagista, hemoptise recorrente ou RX alterado."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se o sangramento aumentar (mais que algumas colheres), falta de ar, tontura ou desmaio",
    "Não tomar AAS, anti-inflamatórios ou anticoagulantes sem orientação médica",
    "Coletar o escarro para exame de tuberculose conforme orientado; usar máscara e manter a casa ventilada até o resultado",
    "Parar de fumar; retorno em 1 semana com os resultados"
  ],
  fontes: [
    "Davidson K, Shojaee S — Managing Massive Hemoptysis, Chest (2020)",
    "Wand O et al. — Inhaled tranexamic acid for hemoptysis: randomized controlled trial, Chest (2018)",
    "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2019)",
    "BTS — Guideline for bronchiectasis in adults (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
