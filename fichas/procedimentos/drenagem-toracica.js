// Descompressão torácica de emergência e drenagem pleural em selo d'água
registrarFicha({
  id: "drenagem-toracica",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Descompressão torácica e drenagem em selo d'água",
  resumo: "Descompressão com agulha ou toracostomia digital no pneumotórax hipertensivo e drenagem pleural fechada (dreno tubular ou pigtail) em selo d'água para pneumotórax, hemotórax e empiema.",
  palavrasChave: "dreno de torax drenagem toracica selo dagua toracostomia pneumotorax hipertensivo descompressao agulha jelco puncao de alivio hemotorax empiema pigtail seldinger triangulo de seguranca finger thoracostomy",
  critico: {
    tempo: "Hipertensivo: descomprimir já",
    texto: "Pneumotórax hipertensivo é diagnóstico clínico: descomprimir sem esperar RX. Adulto: 5º espaço intercostal entre as linhas axilares anterior e média (ATLS 10ª ed.). Criança: 2º espaço intercostal na linha hemiclavicular. Depois, drenar em selo d'água."
  },
  alarmes: [
    "Saída imediata de 1.500 mL de sangue ou mais, ou débito maior que 200 mL/h por 2–4 h: hemotórax maciço, chamar cirurgia (toracotomia)",
    "Instabilidade hemodinâmica persistente após descompressão: rever posição, pensar em tamponamento, hemorragia ou dreno fora do espaço pleural",
    "Escape aéreo contínuo e volumoso com pulmão que não expande: lesão de via aérea grande, chamar cirurgia",
    "Tosse intensa, dispneia e hipoxemia após drenar grande volume: edema de reexpansão, clampear e dar suporte",
    "Dreno sem oscilação logo após inserção: pode estar fora da pleura (subcutâneo) ou obstruído"
  ],
  indicacoes: [
    "Pneumotórax hipertensivo (descompressão imediata, seguida de drenagem)",
    "Pneumotórax traumático, inclusive o pequeno em paciente que vai para ventilação com pressão positiva ou transporte",
    "Pneumotórax espontâneo secundário ou primário sintomático/grande sem resposta à aspiração (BTS 2023)",
    "Hemotórax (inclusive hemopneumotórax)",
    "Empiema ou derrame parapneumônico complicado (pH < 7,2, pus, Gram/cultura positivos)",
    "Derrame pleural volumoso recidivante sintomático, como ponte para pleurodese (eletivo)",
    "Ferida torácica aberta: curativo de 3 lados e drenagem longe da ferida"
  ],
  contraindicacoes: [
    "Necessidade imediata de toracotomia (não atrasar a cirurgia)",
    "Pulmão aderido à parede no local escolhido (cirurgia ou pleurodese prévia): guiar por USG ou TC",
    "Coagulopatia ou plaquetopenia importante: relativa no eletivo — corrigir quando possível; na emergência não contraindica",
    "Suspeita de bolha gigante, hérnia diafragmática ou atelectasia total simulando pneumotórax: confirmar por imagem antes (fora da emergência)",
    "Derrame em paciente com pulmão encarcerado ou derrame maligno: preferir avaliação do pneumologista/cateter pleural de longa permanência"
  ],
  materiais: [
    "EPI completo: gorro, máscara, avental e luvas estéreis, óculos",
    "Descompressão: cateter sobre agulha 14G ou maior; adulto com comprimento de pelo menos 5 cm (8 cm em adulto com parede espessa); criança: cateter 14–18G",
    "Clorexidina alcoólica 2% (ou PVPI) e campos estéreis",
    "Lidocaína 1% ou 2% sem vasoconstritor, seringa de 10–20 mL, agulhas 40×12 (aspirar) e 30×7 / 25×7 (infiltrar)",
    "Dreno tubular: adulto com hemotórax 28–32 Fr (ATLS 10ª ed.); pneumotórax: 14 Fr pigtail ou 20–24 Fr; criança conforme tabela",
    "Kit de pequena cirurgia: bisturi lâmina 10 ou 11, pinça Kelly curva longa, pinça Kocher, tesoura, porta-agulha",
    "Fio de náilon 0 ou 2-0 para fixação (ponto em U ou bailarina)",
    "Frasco de drenagem estéril com selo d'água (água destilada ou SF até o nível que submerge cerca de 2 cm da haste) e extensão",
    "Gazes, curativo oclusivo, fita adesiva larga, pinças para clampeamento",
    "Aspirador disponível; USG à beira-leito se houver"
  ],
  checagemAntes: [
    "Identificação do paciente e lado correto: conferir clínica e imagem (RX, USG ou TC) — no hipertensivo, só a clínica",
    "Consentimento (verbal na emergência; escrito no eletivo), explicando riscos",
    "Alergia a anestésico local, clorexidina ou iodo",
    "Coagulação, plaquetas e uso de anticoagulante/antiagregante, quando o procedimento é eletivo",
    "Monitorização: oximetria, ECG, pressão arterial; oxigênio; acesso venoso",
    "Analgesia sistêmica (ex.: opioide) e, se necessário, sedação leve com monitorização",
    "Time-out: paciente, lado, local marcado, procedimento, materiais, frasco montado",
    "Hemotórax volumoso esperado: sangue tipado/reserva e via para autotransfusão se disponível"
  ],
  passos: [
    { etapa: "Descompressão de emergência (pneumotórax hipertensivo)", itens: [
      "Adulto: localizar o 5º espaço intercostal entre a linha axilar anterior e a média, do lado afetado (ATLS 10ª ed.); alternativa: 2º espaço intercostal na linha hemiclavicular",
      "Criança: 2º espaço intercostal na linha hemiclavicular",
      "Antissepsia rápida; introduzir o cateter sobre agulha perpendicular à pele, rente à borda superior da costela inferior",
      "Ao sentir saída de ar, retirar a agulha e deixar o cateter; fixar e não dobrar",
      "Se falhar ou em paciente intubado: toracostomia digital (incisão no 4º–5º espaço, dissecção romba até a pleura, dedo enluvado para abrir e explorar)",
      "Proceder à drenagem em selo d'água o quanto antes: a agulha é medida temporária"
    ] },
    { etapa: "Preparo da drenagem", itens: [
      "Posição: decúbito dorsal com cabeceira a 30–45°, braço do lado afetado elevado atrás da cabeça",
      "Marcar o triângulo de segurança: borda lateral do peitoral maior, borda anterior do grande dorsal e linha horizontal no nível do mamilo (4º–5º espaço intercostal), ápice abaixo da axila",
      "Confirmar o ponto com USG quando possível (derrames e paciente estável)",
      "Montar o frasco de selo d'água antes de iniciar e deixar o dreno pinçado na extremidade distal",
      "Paramentação estéril, antissepsia ampla e campos"
    ] },
    { etapa: "Anestesia", itens: [
      "Infiltrar pele, subcutâneo, periósteo da borda superior da costela inferior e pleura parietal, aspirando antes de injetar",
      "A aspiração de ar ou líquido confirma o espaço pleural; respeitar a dose máxima de lidocaína (sem vasoconstritor: 4,5 mg/kg, até 300 mg)"
    ] },
    { etapa: "Inserção (técnica aberta, dreno tubular)", itens: [
      "Incisão transversa de 2–3 cm na pele, sobre a costela, no 4º–5º espaço",
      "Dissecção romba com Kelly sobre a borda superior da costela inferior (evita o feixe vasculonervoso, que corre na borda inferior)",
      "Perfurar a pleura parietal com a Kelly fechada e abrir as pontas; ouvir saída de ar ou líquido",
      "Introduzir o dedo e varrer 360° para confirmar espaço pleural e ausência de aderências ou vísceras",
      "Introduzir o dreno guiado pelo dedo ou preso na ponta da Kelly, direcionando para cima e para trás (pneumotórax: ápice; líquido: posterior e basal)",
      "Avançar até o último orifício ficar pelo menos 2 cm dentro do tórax; conectar ao selo d'água e soltar a pinça"
    ] },
    { etapa: "Técnica de Seldinger (pigtail)", itens: [
      "Puncionar com agulha introdutora acoplada à seringa até aspirar ar ou líquido",
      "Passar o fio-guia, retirar a agulha, dilatar o trajeto com o dilatador (sem forçar a profundidade)",
      "Passar o dreno sobre o fio, retirar o fio, conectar ao sistema e fixar",
      "Não usar Seldinger em hemotórax volumoso (dreno fino obstrui)"
    ] },
    { etapa: "Fixação e conexão", itens: [
      "Ponto de fixação firme ao dreno (bailarina) e ponto em U para fechar o orifício na retirada",
      "Curativo oclusivo e fixação do tubo na pele em mesentério para não tracionar",
      "Selo d'água: haste longa submersa cerca de 2 cm; frasco sempre abaixo do nível do tórax, sem clampear para transporte de rotina",
      "Drenar grandes derrames de forma lenta; limite usual de 1,5 L de uma vez fora do trauma (BTS)"
    ] }
  ],
  conferirDepois: [
    "Oscilação da coluna líquida com a respiração e borbulhamento (escape aéreo) ou débito",
    "Volume e aspecto drenado (sangue, pus, quilo, seroso); medir e registrar",
    "Melhora clínica: saturação, frequência respiratória, pressão arterial, murmúrio vesicular",
    "RX de tórax: posição do dreno (último orifício dentro do tórax), expansão pulmonar, enfisema subcutâneo",
    "Enviar líquido pleural para exames se for derrame (pH, glicose, LDH, proteína, citologia, Gram/cultura)",
    "Analgesia adequada para permitir tosse e fisioterapia respiratória",
    "Reavaliar débito a cada hora no hemotórax"
  ],
  complicacoes: [
    "Dreno no subcutâneo ou intraparenquimatoso: sem oscilação ou com RX inadequado — retirar e reinserir em outro trajeto",
    "Lesão do feixe intercostal com sangramento: compressão; se persistir, cirurgia",
    "Lesão de fígado, baço ou diafragma (inserção muito baixa): suspeitar se sangue persistente ou dreno abaixo do diafragma — cirurgia",
    "Edema pulmonar de reexpansão: clampear o dreno, oxigênio e suporte ventilatório",
    "Enfisema subcutâneo: verificar se o último orifício saiu do tórax e se há obstrução; geralmente autolimitado",
    "Obstrução por coágulo: ordenhar o tubo, não fazer pressão negativa sem controle; se persistir com hemotórax, novo dreno",
    "Infecção do trajeto ou empiema: curativo, cultura e antibiótico",
    "Reflexo vasovagal: posicionar, atropina se bradicardia sintomática"
  ],
  documentacao: "Procedimento: [descompressão com agulha / toracostomia digital / drenagem torácica em selo d'água] à [direita / esquerda].\nIndicação: [pneumotórax hipertensivo / pneumotórax / hemotórax / empiema / derrame].\nConsentimento [verbal / escrito]. Time-out realizado. Coagulação: [ ].\nLocal: [5º espaço intercostal entre linhas axilares anterior e média / 2º EIC LHC / outro: ].\nAnestesia local com lidocaína [ ]% [ ] mL. Técnica [aberta / Seldinger].\nDreno nº [ ] Fr, fixado na marca [ ] cm, ponto em U e bailarina com náilon [ ].\nSaída imediata de [ar / ] [ ] mL de [sangue / pus / seroso].\nOscilação [presente / ausente], borbulhamento [presente / ausente].\nRX de controle: [posição e expansão].\nIntercorrências: [nenhuma / descrever].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Calibre do dreno (referência)",
      colunas: ["Situação", "Adulto", "Criança"],
      linhas: [
        ["Pneumotórax sem líquido", "Pigtail 8–14 Fr ou tubular 20–24 Fr", "Pigtail 8–12 Fr"],
        ["Hemotórax", "28–32 Fr (ATLS 10ª ed.)", "Escolher pelo peso e tamanho do espaço intercostal; em geral o maior que passe sem forçar"],
        ["Empiema / derrame complicado", "Pigtail 12–14 Fr com lavagem ou tubular 20–28 Fr", "Pigtail 8–12 Fr"]
      ],
      nota: "Na criança, o calibre se adapta ao peso e ao espaço intercostal; conferir na tabela de material pediátrico (fita de Broselow) do serviço."
    }
  ],
  orientacoesRetorno: [
    "Não deitar sobre o dreno e não desconectar o frasco; mantê-lo sempre abaixo do peito",
    "Avisar a equipe se falta de ar, dor forte, sangue no frasco aumentando ou se o dreno se soltar",
    "Após a retirada: manter o curativo seco por 48 h; voltar se febre, secreção no local ou falta de ar",
    "Após pneumotórax: não viajar de avião até liberação médica e nunca mergulhar com cilindro sem avaliação especializada"
  ],
  relacionadas: ["pneumotorax", "derrame-pleural", "toracocentese", "choque", "sequencia-rapida-intubacao"],
  fontes: [
    "ATLS — Advanced Trauma Life Support, 10ª edição (American College of Surgeons, 2018)",
    "British Thoracic Society — Guideline for pleural disease (Thorax, 2023)",
    "BTS — Pleural procedures and thoracic ultrasound guideline (2010)",
    "APLS / PALS — descompressão torácica na criança (AHA 2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
