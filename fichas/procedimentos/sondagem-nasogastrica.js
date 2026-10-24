// Sondagem nasogástrica (SNG) e nasoenteral (SNE)
registrarFicha({
  id: "sondagem-nasogastrica",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Sondagem nasogástrica e nasoenteral (SNG/SNE)",
  resumo: "Passagem de sonda pelo nariz até o estômago (SNG, para drenagem/descompressão ou lavagem) ou até estômago/duodeno (SNE, para dieta e medicações): medida, técnica, confirmação de posição e contraindicações.",
  palavrasChave: "sonda nasogastrica sng sonda nasoenteral sne dobbhoff levine sonda gastrica orogastrica descompressao gastrica obstrucao intestinal ileo dieta enteral confirmacao rx ph aspirado nex nariz orelha xifoide",
  critico: {
    tempo: "RX antes de qualquer dieta",
    texto: "Sonda para dieta ou medicação só pode ser usada após confirmar a posição por RX (ou pH do aspirado ≤ 5,5 onde houver protocolo). Ausculta do 'chiado' no epigástrio NÃO confirma posição."
  },
  alarmes: [
    "Tosse, engasgo persistente, cianose, queda de SpO₂ ou voz alterada durante a passagem: sonda na via aérea — retirar imediatamente",
    "Sangramento nasal importante: parar, comprimir; não insistir no mesmo lado",
    "Resistência que não cede: não forçar (desvio de septo, estenose, divertículo)",
    "Suspeita de fratura de base de crânio ou trauma facial grave: NÃO passar pelo nariz — usar via orogástrica"
  ],
  indicacoes: [
    "SNG (calibrosa): descompressão gástrica na obstrução intestinal, íleo paralítico, vômitos incoercíveis, distensão gástrica na ventilação (inclusive após intubação)",
    "SNG: lavagem gástrica em intoxicações selecionadas (rara; ver intoxicacoes-exogenas), aspiração de conteúdo para exame",
    "SNE (fina): nutrição enteral e medicações em paciente com trato gastrointestinal funcionante que não pode ou não consegue comer (disfagia, rebaixamento, ventilação mecânica)",
    "Orogástrica: preferida em neonatos, pacientes intubados e quando a via nasal está contraindicada"
  ],
  contraindicacoes: [
    "Fratura de base de crânio suspeita (hemotímpano, olhos de guaxinim, sinal de Battle, rinorreia/otorreia) ou trauma facial grave: via nasal contraindicada (usar orogástrica)",
    "Obstrução nasal ou cirurgia nasal/transesfenoidal recente",
    "Ingestão de cáustico (não passar às cegas: risco de perfuração)",
    "Cirurgia recente de esôfago ou estômago (passar só com orientação do cirurgião)",
    "Varizes de esôfago com sangramento ou ligadura recente, estenose esofágica: relativa — avaliar com especialista",
    "Coagulopatia grave (relativa: risco de epistaxe)"
  ],
  materiais: [
    "Luvas de procedimento, avental, óculos e máscara",
    "SNG tipo Levine: adulto 14–18 Fr (descompressão: 16–18 Fr); criança: em geral 8–12 Fr conforme idade; neonato 5–8 Fr",
    "SNE tipo Dobbhoff com fio-guia: adulto 10–12 Fr; criança 6–8 Fr",
    "Lidocaína gel 2% para lubrificar (e spray de lidocaína 10% na orofaringe, se disponível, no adulto)",
    "Seringa de 20 mL (SNG) ou 60 mL de bico, copo com água e canudo (se o paciente pode deglutir)",
    "Fita métrica ou marcar na própria sonda; caneta",
    "Fita adesiva hipoalergênica para fixação nasal (ou fixador próprio)",
    "Fita de pH (se o serviço usa), frasco coletor ou bolsa de drenagem",
    "Estetoscópio, oxímetro, aspirador com sonda de aspiração e cuba-rim, toalha"
  ],
  checagemAntes: [
    "Indicação clara (descompressão × dieta) e tipo/calibre de sonda corretos",
    "Paciente correto, explicação e consentimento; combinar um sinal com a mão para pedir pausa",
    "Contraindicações: trauma de face/base de crânio, cáustico, cirurgia esofágica, varizes",
    "Nível de consciência e reflexo de tosse: rebaixado sem proteção de via aérea tem alto risco de aspiração e de sonda na via aérea",
    "Avaliar narinas: escolher a mais pérvia (pedir para respirar fechando uma de cada vez)",
    "Coagulação e plaquetas se doença hepática ou anticoagulação",
    "Paciente em jejum quando possível; aspirador pronto"
  ],
  passos: [
    { etapa: "Preparo e medida", itens: [
      "Paciente sentado ou com cabeceira a 45–90°, cabeça em posição neutra; inconsciente: decúbito lateral ou cabeceira elevada",
      "Medir: ponta do nariz → lóbulo da orelha → apêndice xifoide (NEX) e marcar na sonda. SNG para drenagem: acrescentar cerca de 5–10 cm (ou até o ponto médio entre xifoide e umbigo) para os orifícios ficarem no estômago",
      "SNE: medida NEX + cerca de 20–25 cm para posição pós-pilórica (se o protocolo indicar); posição gástrica também é aceita para dieta na maioria dos pacientes",
      "Criança: medida nariz → orelha → ponto médio entre xifoide e umbigo",
      "SNE: lubrificar o fio-guia por dentro (injetar água) antes de introduzir, conforme fabricante"
    ] },
    { etapa: "Passagem", itens: [
      "Lubrificar os primeiros 10–15 cm da sonda com lidocaína gel",
      "Introduzir pela narina escolhida direcionando para trás e para baixo (paralelo ao assoalho nasal), não para cima",
      "Ao chegar à orofaringe (desconforto, cerca de 10–15 cm no adulto), pedir para fletir o queixo em direção ao peito e engolir (golinhos de água com canudo, se seguro) enquanto avança a cada deglutição",
      "Avançar até a marca sem forçar; se tosse, engasgo ou alteração da voz: retirar até a nasofaringe, aguardar e tentar novamente",
      "Conferir a cavidade oral: sonda enrolada na boca deve ser retirada e repassada",
      "Paciente intubado: cabeça fletida; se difícil, guiar com laringoscópio e pinça de Magill; balonete não garante proteção contra passagem para via aérea"
    ] },
    { etapa: "Confirmação da posição", itens: [
      "Aspirar conteúdo: aspecto gástrico (verde-acastanhado, turvo); pH ≤ 5,5 em fita sugere estômago (antiácidos/IBP podem elevar o pH)",
      "SNG de drenagem: saída de conteúdo gástrico e melhora da distensão são suficientes na prática; RX se dúvida",
      "Qualquer sonda para dieta ou medicação: RX de tórax e abdome superior antes de usar — ponta abaixo do diafragma, seguindo a linha média do esôfago sem desviar para brônquio, na projeção do estômago (ou duodeno para pós-pilórica)",
      "SNE: só retirar o fio-guia após confirmar posição pelo RX; nunca reintroduzir o fio-guia com a sonda no paciente",
      "Ausculta de ar insuflado no epigástrio e borbulhamento em copo d'água NÃO são métodos confiáveis"
    ] },
    { etapa: "Fixação e finalização", itens: [
      "Marcar a sonda na saída da narina com caneta e anotar a medida externa em cm",
      "Fixar no nariz sem pressionar a asa nasal (risco de lesão por pressão), com alça de fita",
      "SNG de descompressão: conectar a bolsa coletora abaixo do nível do estômago (drenagem por gravidade) ou aspiração intermitente baixa conforme prescrição",
      "Manter cabeceira elevada a 30–45° durante a dieta e por 30–60 min após"
    ] }
  ],
  conferirDepois: [
    "RX com laudo/registro de posição antes de liberar dieta ou medicação",
    "Marca externa da sonda conferida antes de cada uso e a cada turno (deslocamento)",
    "Volume e aspecto drenados (SNG): sangue, borra de café, fecaloide",
    "Narina sem lesão por pressão; trocar posição da fixação diariamente",
    "SNE: lavar com 20–30 mL de água antes e depois de cada medicação e dieta (evita obstrução)",
    "Repor perdas da SNG de alto débito (hidroeletrolítico) e monitorar potássio"
  ],
  complicacoes: [
    "Sonda na via aérea (tosse, dessaturação, ou RX em brônquio): retirar imediatamente; se dieta já infundida, tratar como broncoaspiração; pneumotórax é possível com SNE e fio-guia — RX",
    "Sonda enrolada na boca ou no esôfago: retirar e repassar",
    "Epistaxe: compressão das asas nasais por 10 min, cabeça inclinada para frente; ver ficha epistaxe",
    "Obstrução da SNE: lavar com água morna em seringa de 20–60 mL com pressão leve; não usar fio-guia para desobstruir",
    "Deslocamento/saída acidental: não reintroduzir sem nova confirmação",
    "Lesão de asa nasal, sinusite, otite média por obstrução: trocar narina, avaliar retirar",
    "Distúrbios hidroeletrolíticos e alcalose metabólica com drenagem gástrica grande: repor e monitorar",
    "Perfuração esofágica (rara): dor torácica, enfisema subcutâneo, febre — suspender uso, imagem, cirurgia"
  ],
  documentacao: "Procedimento: passagem de [SNG / SNE / sonda orogástrica].\nIndicação: [descompressão / dieta / medicação / lavagem].\nSonda: [Levine / Dobbhoff] nº [ ] Fr, narina [D/E].\nMedida NEX [ ] cm; fixada com [ ] cm na narina.\nPassagem [sem intercorrências / com tosse, retirada e repassada / epistaxe].\nConfirmação: [aspirado gástrico, pH [ ]] e RX [data/hora]: ponta em [estômago / duodeno], abaixo do diafragma.\nConectada a [bolsa coletora: drenagem de [ ] mL, aspecto [ ]] / [liberada para dieta após RX].\nResponsável: [nome, registro profissional].",
  orientacoesRetorno: [
    "Não puxe nem mexa na sonda; avise a equipe se ela sair ou se a marca da fita mudar de lugar",
    "Mantenha a cabeceira elevada enquanto recebe dieta e por meia hora depois",
    "Avise se tiver tosse, falta de ar, dor no peito, náusea, barriga inchada ou dor no nariz",
    "Em casa (SNE): lave a sonda com água antes e depois de cada dieta e remédio; triture só os remédios que podem ser triturados (pergunte ao farmacêutico)"
  ],
  relacionadas: ["intoxicacoes-exogenas", "nauseas-vomitos", "epistaxe", "sequencia-rapida-intubacao", "tce-moderado-grave"],
  fontes: [
    "BRASPEN — Diretriz de Terapia Nutricional no Paciente Grave (2018) e Diretriz BRASPEN de Terapia Nutricional Enteral (2021)",
    "ASPEN — Safe Practices for Enteral Nutrition Therapy (Boullata et al., 2017): confirmação de posição",
    "NHS Improvement — Nasogastric tube misplacement: continuing risk of death and severe harm (Patient Safety Alert, 2016): pH ≤ 5,5 e RX",
    "COFEN — Resolução nº 619/2019: sondagem nasogastroenteral",
    "ATLS 10ª edição (2018): sonda gástrica no trauma e contraindicação da via nasal"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
