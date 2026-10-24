// Toracocentese diagnóstica e de alívio guiada por ultrassom
registrarFicha({
  id: "toracocentese",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Toracocentese diagnóstica e de alívio",
  resumo: "Punção do espaço pleural para análise do líquido (diagnóstica) ou retirada de volume para alívio da dispneia, de preferência guiada por ultrassom.",
  palavrasChave: "toracocentese puncao pleural derrame pleural liquido pleural criterios de light exsudato transudato empiema parapneumonico ph pleural adenosina deaminase ada usg pleural alivio",
  critico: {
    tempo: "USG antes de puncionar",
    texto: "Marcar o ponto com ultrassom imediatamente antes da punção (BTS 2023). Puncionar sempre na borda superior da costela. No alívio, parar ao surgir tosse, dor torácica ou desconforto, e não passar de cerca de 1,5 L por sessão."
  },
  alarmes: [
    "Dispneia súbita, dor torácica ou queda da saturação durante ou após a punção: suspeitar de pneumotórax",
    "Tosse persistente, aperto no peito ou hipoxemia após retirar grande volume: edema de reexpansão — parar",
    "Aspiração de sangue franco que não coagula ou hemodinâmica instável: hemotórax ou lesão vascular",
    "Líquido purulento, pH < 7,2 ou Gram/cultura positivos: derrame complicado, precisa de dreno (não só punção)",
    "Reação vasovagal (bradicardia, hipotensão, sudorese): interromper"
  ],
  indicacoes: [
    "Derrame pleural novo sem causa evidente (diagnóstica)",
    "Derrame em paciente com pneumonia e líquido puncionável (descartar derrame complicado/empiema)",
    "Derrame em insuficiência cardíaca atípico: unilateral, assimétrico, febre, dor pleurítica ou que não regride com diurético",
    "Alívio de dispneia em derrame volumoso (terapêutica)"
  ],
  contraindicacoes: [
    "Derrame muito pequeno ou sem janela segura ao USG (profundidade insuficiente)",
    "Infecção de pele ou herpes-zóster no local da punção",
    "Coagulopatia ou anticoagulação: relativa; avaliar risco-benefício — na punção diagnóstica guiada por USG a correção rotineira não é necessária (BTS 2023)",
    "Paciente que não colabora para ficar parado: relativa, considerar sedação leve",
    "Ventilação mecânica: não contraindica, mas aumenta o risco de pneumotórax; fazer com USG e operador experiente"
  ],
  materiais: [
    "USG à beira-leito (transdutor convexo ou linear) com capa estéril se guiado em tempo real",
    "Luvas estéreis, máscara, gorro, campo fenestrado, clorexidina alcoólica 2%",
    "Lidocaína 1% ou 2% sem vasoconstritor, seringas de 10 mL, agulhas 25×7 e 40×12",
    "Diagnóstica: agulha 21–22G (ou cateter sobre agulha 18–20G) e seringa de 20–60 mL",
    "Alívio: kit de toracocentese ou cateter sobre agulha 14–16G, torneira de 3 vias, equipo e frasco ou bolsa coletora",
    "Tubos: bioquímica (tubo seco), citologia (frasco com heparina ou conforme laboratório), contagem de células (EDTA), frasco de hemocultura aeróbia e anaeróbia, seringa de gasometria heparinizada para pH",
    "Curativo estéril, gazes"
  ],
  checagemAntes: [
    "Identificação, lado correto conferido na imagem e no exame físico",
    "Consentimento informado (escrito no eletivo)",
    "Alergias (anestésico, clorexidina, iodo)",
    "Uso de anticoagulante ou antiagregante, plaquetas e coagulograma se há suspeita de coagulopatia",
    "USG: tamanho do derrame, profundidade, diafragma, fígado/baço, septações, vasos intercostais com Doppler se disponível",
    "Monitorização com oxímetro; oxigênio disponível",
    "Time-out: paciente, lado, ponto marcado, exames a coletar"
  ],
  passos: [
    { etapa: "Posição e marcação", itens: [
      "Paciente sentado, inclinado para a frente, braços apoiados numa mesa com travesseiro; se não puder sentar, decúbito lateral ou cabeceira elevada com acesso pela linha axilar média",
      "Com USG, escolher o espaço intercostal com maior coluna de líquido, acima do diafragma em toda a respiração, geralmente na linha axilar posterior ou escapular, 1–2 espaços abaixo do topo do derrame",
      "Evitar pontos mediais à linha escapular média (feixe intercostal mais exposto) e abaixo do 8º–9º espaço",
      "Marcar o ponto e puncionar logo depois, sem mudar a posição do paciente"
    ] },
    { etapa: "Antissepsia e anestesia", itens: [
      "Higienizar as mãos, paramentar, antissepsia ampla e campo",
      "Botão anestésico na pele e infiltração por planos até a pleura, sempre rente à borda superior da costela inferior, aspirando antes de injetar",
      "Ao aspirar líquido pleural, anotar a profundidade"
    ] },
    { etapa: "Punção diagnóstica", itens: [
      "Introduzir a agulha perpendicular à pele, na borda superior da costela, aspirando continuamente",
      "Ao obter líquido, aspirar 50–60 mL e retirar a agulha",
      "Distribuir nos frascos: pH em seringa heparinizada sem ar (analisar logo), bioquímica, citologia (quanto mais volume, melhor), celularidade, Gram e cultura (também em frasco de hemocultura)"
    ] },
    { etapa: "Punção de alívio", itens: [
      "Usar cateter sobre agulha: ao aspirar líquido, avançar o cateter e retirar a agulha; ocluir o canhão com o dedo durante a troca para não entrar ar",
      "Conectar torneira de 3 vias e equipo ao frasco coletor; drenar por gravidade ou com seringa de forma lenta",
      "Parar com cerca de 1,5 L ou antes se tosse, dor, aperto torácico ou queda da saturação",
      "Retirar o cateter na expiração (ou com manobra de Valsalva se colaborativo) e fazer curativo compressivo"
    ] }
  ],
  conferirDepois: [
    "Sinais vitais e saturação; reavaliar ausculta e USG (deslizamento pleural presente afasta pneumotórax no ponto examinado)",
    "RX de tórax só se suspeita de pneumotórax, múltiplas punções, ar aspirado ou ventilação mecânica",
    "Pedidos enviados e identificados; dosar no sangue no mesmo momento proteína total e LDH (critérios de Light) e glicose",
    "Volume e aspecto registrados",
    "Curativo no local sem sangramento"
  ],
  complicacoes: [
    "Pneumotórax: pequeno e estável — oxigênio e observação; grande ou sintomático — drenagem (ver ficha de drenagem torácica)",
    "Edema de reexpansão: parar a drenagem, oxigênio, suporte ventilatório",
    "Hemotórax por lesão de artéria intercostal: monitorizar, hemograma seriado, imagem; cirurgia se instável",
    "Punção de fígado ou baço: observar, imagem e cirurgia se sangramento",
    "Reação vasovagal: deitar, elevar membros inferiores; atropina se bradicardia sintomática",
    "Infecção do local ou do espaço pleural: cultura, antibiótico"
  ],
  documentacao: "Procedimento: toracocentese [diagnóstica / de alívio] à [direita / esquerda], guiada por USG.\nIndicação: [ ].\nConsentimento [escrito / verbal]. Time-out realizado. Plaquetas [ ], RNI [ ], anticoagulante [não / qual].\nUSG: derrame [livre / septado], profundidade [ ] cm no [ ]º espaço intercostal, linha [axilar posterior / escapular].\nAnestesia com lidocaína [ ]% [ ] mL. Agulha/cateter [ ]G.\nRetirados [ ] mL de líquido [citrino / turvo / purulento / hemorrágico / leitoso].\nEnviado para: pH, proteína, LDH, glicose, celularidade com diferencial, citologia oncótica, Gram, cultura, [ADA / triglicerídeos / outros].\nIntercorrências: [nenhuma / descrever]. Controle pós-procedimento: [USG / RX].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Interpretação do líquido pleural (resumo)",
      colunas: ["Exame", "Achado", "Significado"],
      linhas: [
        ["Critérios de Light", "Proteína pleural/sérica > 0,5 ou LDH pleural/sérica > 0,6 ou LDH pleural > 2/3 do limite superior sérico", "Exsudato se 1 critério presente"],
        ["Gradiente de albumina soro − pleura", "> 1,2 g/dL", "Sugere transudato em paciente em uso de diurético classificado como exsudato"],
        ["pH (gasometria)", "< 7,2", "Derrame parapneumônico complicado: drenar"],
        ["Glicose", "Baixa (< 60 mg/dL)", "Empiema, artrite reumatoide, tuberculose, neoplasia"],
        ["Aspecto", "Pus", "Empiema: drenar"],
        ["Hematócrito pleural/sanguíneo", "> 0,5", "Hemotórax"],
        ["Triglicerídeos", "> 110 mg/dL", "Quilotórax"],
        ["ADA", "Elevada com predomínio linfocitário", "Tuberculose pleural (em área de alta prevalência, como o Brasil)"]
      ],
      nota: "Ponto de corte de ADA varia entre laboratórios e estudos; interpretar com o laboratório local e o quadro clínico."
    }
  ],
  orientacoesRetorno: [
    "Pode haver dor leve no local por 1–2 dias: usar o analgésico prescrito",
    "Manter o curativo por 24 h",
    "Voltar imediatamente se falta de ar, dor no peito, tosse com sangue, febre ou sangramento no local",
    "Trazer os resultados dos exames do líquido no retorno"
  ],
  relacionadas: ["derrame-pleural", "drenagem-toracica", "pneumonia", "ic-descompensada", "tuberculose-pulmonar"],
  fontes: [
    "British Thoracic Society — Guideline for pleural disease (Thorax, 2023)",
    "BTS — Pleural procedures and thoracic ultrasound guideline (2010)",
    "Light RW — Critérios de Light para exsudato (1972; revisados em Pleural Diseases, 6ª ed.)",
    "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil (2019, atualizações 2024) — ADA no derrame pleural"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
