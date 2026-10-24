// Profilaxia pós-exposição da raiva humana
registrarFicha({
  id: "raiva-profilaxia",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Raiva: profilaxia pós-exposição (mordedura, arranhadura, morcego)",
  resumo: "Atendimento antirrábico após agressão por animal: lavar a ferida, classificar a exposição (leve ou grave) e o animal (observável ou não), e decidir entre observação do cão/gato, vacina ou vacina + soro/imunoglobulina, conforme Nota Técnica nº 8/2022 do Ministério da Saúde.",
  palavrasChave: "raiva antirrabica mordedura mordida cachorro cao gato morcego macaco sagui arranhadura lambedura vacina antirrabica soro antirrabico sar imunoglobulina ighar observacao 10 dias profilaxia pos exposicao notificacao",
  critico: {
    tempo: "Lavar a ferida já; soro no D0",
    texto: "Lavar com água e sabão abundantes por 10–15 min imediatamente. Morcego ou animal silvestre: sempre vacina, e soro/imunoglobulina se exposição grave — no mesmo dia. Raiva tem letalidade de quase 100%."
  },
  alarmes: [
    "Agressão por morcego (qualquer tipo de contato), macaco/sagui, raposa, guaxinim e outros silvestres",
    "Cão ou gato com comportamento anormal, agressão não provocada, morto ou desaparecido",
    "Ferimentos em cabeça, face, pescoço, mãos, polpas digitais, planta dos pés, mucosas, múltiplos ou profundos (exposição grave)",
    "Pessoa imunossuprimida (pode precisar de esquema diferenciado e sorologia)",
    "Sinais de infecção da ferida, lesão tendínea ou fratura",
    "Sintomas neurológicos após agressão (parestesia no local, agitação, hidrofobia) — emergência"
  ],
  conduta: [
    "Lavar a ferida com água corrente e sabão por 10–15 min; antisséptico (PVPI ou clorexidina) depois",
    "Evitar suturar; se necessário (estética/hemostasia), aproximar com pontos frouxos, após infiltrar o soro/imunoglobulina",
    "Classificar a exposição (contato indireto, leve ou grave) e o animal (tabela)",
    "Cão ou gato SEM sinais de raiva e que pode ser observado por 10 dias: observar o animal e NÃO iniciar profilaxia (NT 8/2022); iniciar o esquema se ele adoecer, morrer ou desaparecer",
    "Animal não observável, suspeito, silvestre ou de produção: vacina (exposição leve) ou vacina + soro/imunoglobulina (exposição grave)",
    "Vacina: 4 doses nos dias 0, 3, 7 e 14 (IM ou ID); soro/imunoglobulina no dia 0 (até o 7º dia após a 1ª dose de vacina)",
    "Revisar profilaxia de tétano (ver ficha tetano-profilaxia) e avaliar antibiótico para a mordedura",
    "Notificar todo atendimento antirrábico no SINAN e comunicar a vigilância/zoonoses (animal suspeito ou morcego)"
  ],
  exames: [
    "Diagnóstico laboratorial do animal (morto ou eutanasiado): encaminhar encéfalo ao laboratório de referência via vigilância/zoonoses",
    "Sorologia (anticorpos neutralizantes) só em situações especiais: imunossuprimidos, falhas de esquema, profissionais expostos (pré-exposição)"
  ],
  diferenciais: [
    "Mordedura com infecção bacteriana (Pasteurella, estafilococo, anaeróbios) — tratar independentemente da raiva",
    "Roedores urbanos (rato, camundongo, hamster) e coelhos: risco desprezível — em geral não indicar profilaxia (avaliar com vigilância local)"
  ],
  tratamento: [
    {
      droga: "Vacina antirrábica humana (cultivo celular)",
      linha: "l1",
      dose: "IM: volume total do frasco (0,5 ou 1,0 mL). ID: 0,2 mL por dose, divididos em 2 aplicações de 0,1 mL em locais diferentes",
      via: "IM (deltoide; vasto lateral em < 2 anos; nunca glúteo) ou ID (antebraço ou deltoide)",
      intervalo: "Dias 0, 3, 7 e 14",
      duracao: "4 doses",
      monitorizacao: "Eventos adversos locais; reação alérgica (rara)",
      contraindicacoes: "Nenhuma absoluta na pós-exposição (gestação e lactação não contraindicam)",
      ajustes: "Mesma dose para adultos e crianças. Atrasos: não reiniciar, continuar o esquema mantendo os intervalos. Imunossuprimido: usar via IM e discutir esquema/sorologia com a vigilância"
    },
    {
      droga: "Imunoglobulina humana antirrábica (IGHAR)",
      linha: "l1",
      dose: "20 UI/kg",
      via: "Infiltração na(s) lesão(ões) e ao redor",
      intervalo: "Dose única",
      duracao: "No dia 0 (ou até o 7º dia após a 1ª dose de vacina)",
      monitorizacao: "—",
      contraindicacoes: "Após o 7º dia da 1ª dose de vacina (não aplicar)",
      ajustes: "Preferida em alergia a soro heterólogo, imunossuprimidos e conforme disponibilidade. Infiltrar o máximo possível em todas as lesões (diluir em SF se lesões múltiplas); conduta com o volume que não couber na lesão conforme NT 8/2022 e orientação estadual vigente"
    },
    {
      droga: "Soro antirrábico (SAR, heterólogo equino)",
      linha: "l1",
      dose: "40 UI/kg",
      via: "Infiltração na(s) lesão(ões) e ao redor",
      intervalo: "Dose única",
      duracao: "No dia 0 (ou até o 7º dia após a 1ª dose de vacina)",
      monitorizacao: "Observar 1–2 h após (anafilaxia, doença do soro em 7–14 dias)",
      contraindicacoes: "Após o 7º dia da 1ª dose de vacina",
      ajustes: "Não é necessário teste de sensibilidade. Aplicar em serviço com material para anafilaxia (ver ficha anafilaxia). Não aplicar no mesmo local da vacina"
    },
    {
      droga: "Amoxicilina-clavulanato (profilaxia/tratamento da mordedura)",
      linha: "adj",
      dose: "Adulto: 875/125 mg 12/12 h. Criança: 45 mg/kg/dia de amoxicilina dividido 12/12 h (máx 875 mg/dose)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "3–5 dias (profilaxia) ou 5–14 dias (infecção)",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina (alternativa: doxiciclina 100 mg 12/12 h em > 8 anos, ou SMX-TMP + clindamicina)",
      ajustes: "Profilaxia indicada em mordedura de gato, ferida profunda/puntiforme, em mão, face ou genitália, próxima a articulação, edema, imunossuprimido ou asplênico"
    }
  ],
  prescricao: {
    ambulatorial: "PROFILAXIA ANTIRRÁBICA PÓS-EXPOSIÇÃO\nIMUNOBIOLÓGICOS (sala de vacina/serviço de referência)\n1. Vacina antirrábica humana — 1 dose IM no deltoide (ou ID: 0,1 mL em 2 locais) nos dias 0 (__/__), 3 (__/__), 7 (__/__) e 14 (__/__).\n2. SE EXPOSIÇÃO GRAVE e indicação de soro: imunoglobulina humana antirrábica 20 UI/kg (= ___ UI) OU soro antirrábico 40 UI/kg (= ___ UI), infiltrar na(s) lesão(ões) no dia 0.\n3. Vacina dT/dTpa (e soro/imunoglobulina antitetânica se indicado) conforme situação vacinal.\n\nUSO ORAL (se indicação de antibiótico)\n4. Amoxicilina 875 mg + clavulanato 125 mg ---------- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 5 dias.\n   Criança: amoxicilina-clavulanato suspensão 400/57 mg/5 mL — 45 mg/kg/dia de amoxicilina dividido de 12/12 h por 5 dias.\n5. Dipirona 500 mg --------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor (criança: 15–25 mg/kg/dose).\n\nOBSERVAÇÃO DO ANIMAL (cão/gato sem sinais de raiva)\nObservar o animal por 10 dias a partir da agressão. Se o animal adoecer, mudar de comportamento, morrer ou desaparecer: retornar IMEDIATAMENTE para iniciar o esquema."
  },
  orientacoesRetorno: [
    "Lavar bem o machucado com água e sabão; manter limpo e seco",
    "Se o cão ou gato está sendo observado: olhar o animal todos os dias por 10 dias; se ele ficar doente, agressivo, babando, paralisado, morrer ou sumir, voltar no mesmo dia à unidade",
    "Não matar o animal; se ele morrer, avisar a vigilância/zoonoses para exame",
    "Tomar todas as doses da vacina nas datas marcadas; se atrasar, voltar assim que possível (não precisa recomeçar)",
    "Voltar se o machucado ficar vermelho, quente, inchado, com pus ou se tiver febre",
    "Nunca mexer em morcego (vivo ou morto) com as mãos; vacinar cães e gatos todos os anos"
  ],
  encaminhar: [
    "Serviço de referência/vigilância: necessidade de soro ou imunoglobulina, imunossuprimidos, reexposição com esquema prévio (conduta depende do número de doses e do tempo — conferir NT 8/2022)",
    "PS/cirurgia: ferimento extenso, de face com perda tecidual, lesão de tendão, fratura ou infecção grave",
    "Sintomas neurológicos após exposição: internação imediata (notificação imediata de raiva humana)"
  ],
  tabelas: [
    {
      titulo: "Tipo de exposição",
      colunas: ["Classificação", "Exemplos"],
      linhas: [
        ["Contato indireto", "Tocar ou dar de comer ao animal, lambedura em pele íntegra, contato com objetos — sem profilaxia (lavar)"],
        ["Leve", "Arranhadura ou mordedura superficial (sem sangramento) em tronco e membros, exceto mãos e pés; lambedura de pele com lesão superficial"],
        ["Grave", "Ferimento em cabeça, face, pescoço, mãos, polpas digitais ou planta dos pés; ferimentos profundos, múltiplos ou extensos; lambedura de mucosas ou de lesão profunda; qualquer contato com morcego"]
      ]
    },
    {
      titulo: "Conduta conforme o animal (NT 8/2022 — resumo)",
      colunas: ["Animal", "Exposição leve", "Exposição grave"],
      linhas: [
        ["Cão ou gato sem sinais de raiva, observável por 10 dias", "Observar 10 dias; não vacinar. Se adoecer, morrer ou sumir: vacina 4 doses", "Observar 10 dias; não vacinar. Se adoecer, morrer ou sumir: vacina 4 doses + soro/IGHAR"],
        ["Cão ou gato não observável, suspeito, raivoso, morto ou desaparecido", "Vacina 4 doses (0, 3, 7, 14)", "Vacina 4 doses + soro/IGHAR"],
        ["Morcego (qualquer contato)", "Tratar como grave", "Vacina 4 doses + soro/IGHAR"],
        ["Silvestres (macaco, sagui, raposa, guaxinim, quati etc.), inclusive domiciliados", "Vacina 4 doses", "Vacina 4 doses + soro/IGHAR"],
        ["Herbívoros de produção (boi, cavalo, cabra, porco)", "Vacina 4 doses", "Vacina 4 doses + soro/IGHAR"],
        ["Roedores urbanos e coelhos", "Em geral sem profilaxia", "Em geral sem profilaxia (avaliar com vigilância)"]
      ],
      nota: "Se o cão/gato observado estiver sadio após 10 dias, encerrar o caso. Suspender o esquema se o animal suspeito tiver diagnóstico laboratorial negativo. Conferir sempre a nota técnica e as orientações estaduais vigentes."
    }
  ],
  fontes: [
    "Ministério da Saúde — Nota Técnica nº 8/2022-CGZV/DEIDT/SVS/MS: atualização do protocolo de profilaxia pré, pós e reexposição da raiva humana (2022)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed.: raiva (2023/2024)",
    "OMS — Rabies vaccines: WHO position paper (2018)",
    "IDSA — Skin and Soft Tissue Infections: mordeduras (2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
