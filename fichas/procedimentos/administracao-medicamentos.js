// Técnicas de administração de medicamentos: IM, SC, IV (bolus e infusão) e administração segura
registrarFicha({
  id: "administracao-medicamentos",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Administração de medicamentos: IM, SC e IV",
  resumo: "Técnica de injeção intramuscular (sítios, volumes, ângulo), subcutânea e intravenosa em bolus e em infusão, com os 'certos' da administração segura de medicamentos (Protocolo do Ministério da Saúde).",
  palavrasChave: "administracao de medicamentos injecao intramuscular im subcutanea sc intravenosa iv endovenosa bolus infusao gotejamento ventrogluteo hochstetter deltoide vasto lateral dorsogluteo tecnica em z angulo agulha nove certos seguranca do paciente erro de medicacao dupla checagem",
  critico: {
    tempo: "Confira os certos antes de aplicar",
    texto: "Antes de cada dose: paciente certo (2 identificadores), medicamento, dose, via, hora, forma e alergia conferidos com a prescrição. Medicamento de alta vigilância (insulina, KCl, heparina, opioide, vasoativo): dupla checagem."
  },
  alarmes: [
    "Prurido, urticária, falta de ar, rouquidão ou hipotensão após a dose: anafilaxia — parar a infusão e adrenalina IM (ver anafilaxia)",
    "Dor irradiada em choque ou parestesia na hora da injeção IM: possível lesão de nervo — retirar a agulha e não injetar",
    "Sangue no aspirado (quando a técnica prevê aspirar) ou dor intensa: retirar e aplicar em outro local",
    "Palidez, dor e manchas na pele após IM (síndrome de Nicolau): avaliar urgência",
    "Dor, edema ou frieza no local do acesso durante infusão IV: infiltração/extravasamento — parar"
  ],
  indicacoes: [
    "IM: drogas que não podem ser dadas VO, volume pequeno a moderado, absorção rápida sem acesso venoso (ex.: penicilina benzatina, ceftriaxona, adrenalina na anafilaxia, vacinas)",
    "SC: insulina, heparina/enoxaparina, algumas vacinas, hipodermóclise em cuidados paliativos",
    "IV em bolus: efeito imediato (ex.: adenosina, glicose, drogas da PCR) ou drogas que permitem injeção lenta direta",
    "IV em infusão: drogas irritantes, que exigem diluição, tempo de infusão definido ou infusão contínua"
  ],
  contraindicacoes: [
    "IM: coagulopatia, plaquetopenia grave ou anticoagulação plena (relativa: preferir outra via ou pressionar 5 min); choque (absorção imprevisível, exceto adrenalina na anafilaxia); local com infecção, cicatriz, edema ou lipodistrofia",
    "IM: dorsoglúteo em menores de 2 anos; deltoide em lactente",
    "SC: choque e edema importante (absorção errática); local com lesão",
    "IV: droga não indicada para IV (ex.: penicilina benzatina, ceftriaxona com lidocaína, suspensões, oleosas) — nunca IV",
    "Qualquer via: alergia ao medicamento; prescrição incompleta ou ilegível (esclarecer antes)"
  ],
  materiais: [
    "Prescrição e rótulo/etiqueta do medicamento; pulseira de identificação do paciente",
    "Bandeja limpa, luvas de procedimento quando houver risco de contato com sangue",
    "Álcool 70% e algodão/gaze",
    "Seringas: 1 mL (insulina/heparina), 3, 5, 10 e 20 mL",
    "Agulhas: aspirar 40 × 12 (com filtro em ampola de vidro, se disponível); IM adulto 25 × 7 a 30 × 7 (obeso 30 × 8 ou maior); IM criança 20 × 5,5 a 25 × 6; SC 13 × 4,5",
    "IV: equipo macrogotas (20 gotas/mL) ou microgotas (60 microgotas/mL), bomba de infusão para drogas de alta vigilância, SF 0,9% para flush",
    "Coletor de perfurocortante ao alcance da mão",
    "Kit de anafilaxia (adrenalina 1 mg/mL) disponível na sala"
  ],
  checagemAntes: [
    "Paciente certo: nome completo e data de nascimento (2 identificadores), confere com a pulseira",
    "Medicamento certo: nome genérico, concentração, validade, aspecto (cor, partículas); ler o rótulo 3 vezes (ao pegar, ao preparar, ao descartar)",
    "Dose certa: conferir cálculo (mg/kg na criança, com dose máxima); duplicar a checagem em doses pediátricas e drogas de alta vigilância",
    "Via certa e forma certa (ex.: comprimido que pode ser triturado; apresentação IM × IV)",
    "Hora certa e registro certo: conferir se a dose anterior foi dada; registrar logo após",
    "Orientação certa: explicar ao paciente para que serve e o que pode sentir; resposta certa: observar o efeito",
    "Alergias perguntadas a cada administração; gestação/lactação; função renal se relevante",
    "Compatibilidade e diluição: conferir bula ou guia da farmácia (ver vias-administracao)"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Higienizar as mãos; preparar em local limpo, sem interrupções; um medicamento por vez",
      "Desinfetar a borracha do frasco ou o gargalo da ampola com álcool 70%; quebrar a ampola protegida com gaze",
      "Aspirar com agulha 40 × 12; trocar para a agulha de aplicação; retirar o ar",
      "Identificar a seringa/frasco com nome do paciente, droga, dose, via, diluição e hora; não deixar seringa sem rótulo"
    ] },
    { etapa: "Intramuscular (IM)", itens: [
      "Escolher o músculo pelo volume e idade (tabela em vias-administracao): ventroglúteo é o mais seguro em qualquer idade; vasto lateral no lactente; deltoide só para pequenos volumes",
      "Ventroglúteo (Hochstetter): palma da mão sobre o trocânter maior (mão direita no quadril esquerdo do paciente), indicador na espinha ilíaca anterossuperior, dedo médio afastado em direção à crista ilíaca; aplicar no centro do V formado",
      "Vasto lateral: terço médio da face anterolateral da coxa",
      "Deltoide: 3 a 5 cm (2–3 dedos) abaixo do acrômio, no centro do músculo; braço relaxado",
      "Dorsoglúteo: quadrante superior externo da nádega (dividir a nádega em 4); risco de lesão do nervo isquiático — preferir ventroglúteo",
      "Antissepsia com álcool 70%, deixar secar",
      "Esticar a pele (ou técnica em Z: deslocar a pele 2–3 cm lateralmente antes de picar, para drogas irritantes ou que mancham); agulha a 90°, movimento rápido",
      "Aspirar não é necessário para vacinas nos sítios recomendados (MS); para outros medicamentos, seguir o protocolo do serviço (no dorsoglúteo, aspirar)",
      "Injetar lentamente (cerca de 10 s por mL); retirar a agulha rápido e soltar a pele (técnica em Z); comprimir sem massagear",
      "Volumes maiores que o máximo do músculo: dividir em 2 locais"
    ] },
    { etapa: "Subcutânea (SC)", itens: [
      "Locais: abdome (afastado cerca de 5 cm do umbigo), face posterior do braço, face anterior e lateral da coxa, região glútea superior; fazer rodízio",
      "Agulha 13 × 4,5 (ou caneta de 4–6 mm): fazer prega cutânea e aplicar a 90°; em pessoa muito magra ou criança, 45°",
      "Não aspirar; injetar e manter a agulha por 5–10 s (insulina em caneta: 10 s) antes de retirar; não massagear (heparina: não massagear, risco de hematoma)",
      "Volume em geral até cerca de 1–1,5 mL por local"
    ] },
    { etapa: "Intravenosa em bolus", itens: [
      "Conferir permeabilidade do acesso com 5–10 mL de SF 0,9% (sem dor nem edema)",
      "Desinfetar a conexão (polifix/torneira) com álcool 70% por fricção, deixar secar",
      "Injetar no tempo indicado pela bula: 'lento' em geral significa 3–5 min; observar o paciente durante a injeção",
      "Bolus rápido só quando indicado (ex.: adenosina com flush imediato, drogas da PCR seguidas de 20 mL de SF e elevação do membro)",
      "Lavar o acesso com SF 0,9% ao final (flush) e entre drogas incompatíveis"
    ] },
    { etapa: "Intravenosa em infusão", itens: [
      "Diluir no volume e solução indicados; rotular o frasco (paciente, droga, dose, volume, velocidade, hora de início)",
      "Retirar o ar do equipo; conectar com técnica asséptica",
      "Calcular o gotejamento: macrogotas (gotas/min) = volume em mL ÷ (tempo em horas × 3); microgotas (microgotas/min) = volume em mL ÷ tempo em horas (= mL/h)",
      "Drogas de alta vigilância e infusões contínuas: bomba de infusão, com dupla checagem da programação",
      "Observar os primeiros 5–15 min (reações de infusão, especialmente antibióticos e hemoderivados) e reavaliar o acesso periodicamente"
    ] },
    { etapa: "Finalização", itens: [
      "Descartar perfurocortantes sem reencapar agulhas",
      "Registrar na hora: droga, dose, via, local (IM/SC), hora, lote quando aplicável e responsável",
      "Observar o paciente: após antibiótico IM/IV ou primeira dose de droga nova, manter em observação conforme protocolo (penicilina benzatina: observar cerca de 30 min)"
    ] }
  ],
  conferirDepois: [
    "Paciente sem sinais de reação alérgica (pele, respiração, pressão)",
    "Local de aplicação sem sangramento, hematoma ou dor desproporcional",
    "Infusão correndo na velocidade programada e acesso sem infiltração",
    "Efeito esperado (dor, febre, glicemia, PA) reavaliado no tempo certo",
    "Registro completo no prontuário e checagem na prescrição"
  ],
  complicacoes: [
    "Anafilaxia: parar a droga, adrenalina 1 mg/mL IM no vasto lateral (adulto 0,5 mg; criança 0,01 mg/kg, máx. 0,5 mg) e seguir ficha anafilaxia",
    "Reação vasovagal: deitar, elevar as pernas, observar",
    "Lesão de nervo (isquiático, radial, axilar): dor em choque e déficit — registrar, analgesia e avaliação neurológica",
    "Abscesso estéril ou infectado no local IM: compressas, drenagem se coleção (ver drenagem-abscesso)",
    "Síndrome de Nicolau (necrose após IM, ex.: penicilina benzatina, diclofenaco): dor intensa e livedo imediatos — avaliar urgência, analgesia, cirurgia se necrose",
    "Hematoma (anticoagulados, SC de heparina): compressão; não massagear",
    "Extravasamento IV de vesicante: parar, aspirar, elevar, avisar (ver acesso-venoso-periferico)",
    "Erro de medicação: avaliar o paciente, tratar efeitos, comunicar o médico e notificar no sistema de segurança do paciente (sem caráter punitivo)"
  ],
  documentacao: "Administração de medicamento.\nPaciente identificado por [nome e data de nascimento]. Alergias: [ ].\nMedicamento: [nome genérico, concentração], dose [ ], via [IM / SC / IV bolus / IV infusão], [diluição em [ ] mL de [ ], tempo [ ] min / velocidade [ ] mL/h].\nLocal: [ventroglúteo / deltoide / vasto lateral / abdome D/E / acesso venoso em [ ]]. Lote: [ ].\nHora: [ ]. Dupla checagem: [sim — nome / não se aplica].\nReação após [ ] min de observação: [nenhuma / descrever conduta].\nOrientações fornecidas ao paciente.\nResponsável: [nome, registro profissional].",
  orientacoesRetorno: [
    "Pode doer ou ficar um pouco endurecido no local da injeção por 1 a 2 dias; compressa fria nas primeiras horas ajuda",
    "Sempre informe aos profissionais suas alergias a remédios e se está grávida ou amamentando",
    "Procure atendimento imediato se tiver coceira no corpo, placas vermelhas, inchaço no rosto, falta de ar ou desmaio",
    "Volte se o local ficar muito vermelho, quente, com pus, mancha escura ou dor que piora, ou se a perna ficar fraca ou dormente após injeção no glúteo"
  ],
  relacionadas: ["vias-administracao", "acesso-venoso-periferico", "anafilaxia", "hidratacao-venosa", "analgesicos-antitermicos"],
  fontes: [
    "Ministério da Saúde/ANVISA/Fiocruz — Protocolo de segurança na prescrição, uso e administração de medicamentos (Programa Nacional de Segurança do Paciente, 2013)",
    "Ministério da Saúde — Manual de Normas e Procedimentos para Vacinação (2024)",
    "COREN-SP — Parecer 010/2020: volumes e sítios de administração intramuscular",
    "ISMP Brasil — Medicamentos potencialmente perigosos de uso hospitalar: lista atualizada (2022)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
