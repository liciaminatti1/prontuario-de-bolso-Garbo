// Acidentes ofídicos
registrarFicha({
  id: "ofidismo",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Acidentes ofídicos (picada de cobra)",
  resumo: "Picada por serpente peçonhenta: botrópico (jararaca), crotálico (cascavel), laquético (surucucu) ou elapídico (coral verdadeira). Classificar o gênero pela clínica, a gravidade pelos sinais e dar o soro específico IV, em dose única, igual para adulto e criança.",
  palavrasChave: "ofidismo picada de cobra serpente jararaca bothrops botropico cascavel crotalus crotalico surucucu lachesis laquetico coral micrurus elapidico soro antiofidico antibotropico sabr sab sabc sabl sac saela tempo de coagulacao incoagulavel rabdomiolise insuficiencia renal facies miastenica neostigmina",
  critico: {
    tempo: "Soro IV o mais cedo possível",
    texto: "Dose do soro não depende de peso nem idade e não deve ser fracionada. Não use garrote, não corte, não sugue. Pré-medicação não é recomendada (PCDT 2026); deixe adrenalina pronta."
  },
  alarmes: [
    "Sangue incoagulável com sangramento ativo (gengiva, hematúria, hematêmese, SNC)",
    "Choque, hipotensão",
    "Oligúria, urina escura (mioglobinúria) — risco de lesão renal aguda",
    "Fácies miastênica (ptose, oftalmoplegia, visão turva), dificuldade para engolir ou respirar (crotálico/elapídico)",
    "Bradicardia, hipotensão, diarreia, cólicas (síndrome vagal do laquético)",
    "Edema que progride para 3 segmentos do membro, bolhas, necrose ou síndrome compartimental",
    "Criança, idoso e gestante: internar independentemente da gravidade"
  ],
  condutaInicial: [
    "Repouso, membro elevado e em posição neutra; retirar anéis e calçados apertados; lavar o local com água e sabão",
    "Monitor, acesso venoso no membro não picado, SF 0,9% para manter diurese",
    "Tempo de coagulação (TC) à beira do leito, hemograma, ureia, creatinina, CK, urina tipo 1",
    "Identificar o gênero pela clínica (foto da serpente ajuda); classificar a gravidade (tabela)",
    "Soro antiveneno específico IV, número de frascos-ampolas pela gravidade, de uma só vez, com adrenalina e material de via aérea prontos",
    "Analgesia (dipirona, opioide se necessário); profilaxia do tétano conforme histórico vacinal",
    "Ligar para o CIATox se dúvida de gênero ou de dose; notificar no SINAN"
  ],
  fataisExcluir: [
    "Hemorragia grave (SNC, digestiva) por coagulopatia",
    "Lesão renal aguda (crotálico e botrópico)",
    "Insuficiência respiratória por paralisia (elapídico, crotálico grave)",
    "Choque (botrópico grave, laquético)",
    "Síndrome compartimental"
  ],
  proximaDecisao: "Repetir o TC 12 e 24 h após o soro: se ainda incoagulável em 24 h ou sangramento persistente, discutir dose adicional com o CIATox. Crotálico: manter diurese e acompanhar CK e creatinina. Elapídico: observar no mínimo 24 h mesmo sem sintomas.",
  clinica: {
    anamnese: [
      "Hora e local da picada (zona rural, mata, beira de rio), região do corpo",
      "Descrição ou foto da serpente: fosseta loreal (jararaca, cascavel, surucucu), guizo (cascavel), anéis coloridos (coral)",
      "Primeiros socorros feitos (garrote, corte, sucção, substâncias no local)",
      "Sangramentos, urina escura, visão turva, pálpebras caídas, dificuldade para engolir",
      "Vômitos, diarreia, tontura, cólica",
      "Vacinação antitetânica; acidente ofídico e soro prévios (risco de reação)"
    ],
    exameFisico: [
      "Marcas de presas; dor, edema (contar segmentos acometidos), equimose, bolhas, necrose",
      "Sangramento em gengiva, pele, locais de punção; hematúria",
      "Fácies miastênica: ptose palpebral, oftalmoplegia, diplopia",
      "Força cervical, deglutição, padrão respiratório",
      "PA, FC (bradicardia no laquético), diurese, cor da urina",
      "Pulsos distais e tensão do compartimento"
    ],
    diferenciais: [
      { dx: "Botrópico (jararaca, jararacuçu, urutu) — 85–90% dos casos", pista: "Dor e edema locais precoces, equimose, bolhas, sangramentos, TC alterado" },
      { dx: "Laquético (surucucu-pico-de-jaca)", pista: "Quadro local igual ao botrópico + síndrome vagal (bradicardia, hipotensão, diarreia, cólica). Amazônia e Mata Atlântica" },
      { dx: "Crotálico (cascavel)", pista: "Pouca dor e edema; parestesia local; fácies miastênica; mialgia; urina escura; TC pode estar alterado" },
      { dx: "Elapídico (coral verdadeira)", pista: "Quase sem lesão local; ptose, diplopia, disfagia, fraqueza progressiva e insuficiência respiratória" },
      { dx: "Picada por serpente não peçonhenta", pista: "Sem edema progressivo, sem alteração do TC nem sintomas sistêmicos após 6–12 h" },
      { dx: "Celulite, trauma por outro animal", pista: "Sem marcas de presas e sem coagulopatia" }
    ],
    gravidade: [
      "Botrópico — leve: dor e edema em até 1 segmento, sangramento discreto ou ausente, TC normal ou alterado · moderado: dor e edema em 2 segmentos, sangramento sem gravidade · grave: edema em 3 segmentos ou complicações (choque, LRA, hemorragia grave, necrose extensa, síndrome compartimental)",
      "Laquético — moderado: quadro local e sangramento sem sinais vagais · grave: sinais vagais (bradicardia, hipotensão, diarreia) ou quadro local intenso",
      "Crotálico — leve: fácies miastênica discreta ou ausente, sem mialgia, urina normal · moderado: fácies miastênica evidente, mialgia discreta, urina normal ou pouco escura · grave: fácies evidente, mialgia intensa, urina escura, oligúria ou anúria",
      "Elapídico: todo caso é potencialmente grave (risco de insuficiência respiratória)",
      "Segmentos do membro: inferior = pé, perna, coxa (e raiz); superior = mão, antebraço, braço"
    ]
  },
  exames: [
    {
      nome: "Tempo de coagulação (TC) à beira do leito",
      pedido: "Tempo de coagulação (Lee-White): 1 mL de sangue em tubo de vidro seco, mantido a 37 °C, na admissão e 12 e 24 h após o soro.",
      porQue: "Teste simples e rápido para coagulopatia por veneno; guia a reavaliação após o soro.",
      esperar: "Normal até 9 min; prolongado 10–30 min; incoagulável > 30 min.",
      interpretacao: "TC alterado confirma envenenamento (botrópico, laquético, às vezes crotálico). A coagulopatia isolada não define gravidade no botrópico.",
      limitacoes: "TC normal não exclui acidente botrópico leve. Elapídico não altera coagulação."
    },
    {
      nome: "Coagulograma e hemograma",
      pedido: "TP/INR, TTPa, fibrinogênio (se disponível), hemograma com plaquetas.",
      porQue: "Quantificar coagulopatia e plaquetopenia.",
      esperar: "Fibrinogênio baixo ou indetectável no botrópico.",
      interpretacao: "Normalização ocorre em 12–24 h após soro adequado.",
      limitacoes: "Não atrasar o soro esperando o resultado."
    },
    {
      nome: "Função renal, CK e urina",
      pedido: "Ureia, creatinina, sódio, potássio, CK, TGO (AST), DHL. Urina tipo 1 (hemoglobina/mioglobina). Medir diurese horária.",
      porQue: "Rabdomiólise e lesão renal aguda (crotálico, botrópico grave).",
      esperar: "CK muito elevada no crotálico (pico em 24–72 h).",
      interpretacao: "Urina escura com fita positiva para sangue sem hemácias no sedimento → mioglobinúria.",
      limitacoes: "Repetir a cada 12–24 h nas primeiras 72 h."
    },
    {
      nome: "Outros",
      pedido: "Glicemia. Gasometria venosa se choque ou LRA. Ultrassom ou medida de pressão compartimental se suspeita de síndrome compartimental.",
      porQue: "Complicações.",
      esperar: "—",
      interpretacao: "Fasciotomia só com síndrome compartimental confirmada e coagulação corrigida.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Soro antibotrópico pentavalente (SABR)",
      linha: "l1",
      dose: "Leve: 3 frascos-ampolas · Moderado: 6 · Grave: 12",
      via: "IV",
      intervalo: "Dose única, toda de uma vez",
      duracao: "Dose adicional só se TC incoagulável após 24 h ou sangramento persistente (discutir com CIATox)",
      monitorizacao: "Sinais de anafilaxia nas 2 primeiras horas; TC 12 e 24 h",
      contraindicacoes: "Nenhuma absoluta no envenenamento",
      ajustes: "Mesma dose para adulto, criança e gestante. Puro ou diluído em SF 0,9%, gotejamento contínuo sob vigilância (tempo conforme bula e protocolo local). Se não for possível diferenciar de laquético: SABL; de crotálico: SABC"
    },
    {
      droga: "Soro antibotrópico-laquético (SABL)",
      linha: "l1",
      dose: "Moderado: 10 frascos-ampolas · Grave: 20",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "FC, PA, sinais vagais, TC",
      contraindicacoes: "—",
      ajustes: "Atropina se bradicardia sintomática"
    },
    {
      droga: "Soro anticrotálico (SAC) ou antibotrópico-crotálico (SABC)",
      linha: "l1",
      dose: "Leve: 5 frascos-ampolas · Moderado: 10 · Grave: 20",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Diurese horária, CK, creatinina, força muscular",
      contraindicacoes: "—",
      ajustes: "Hidratação vigorosa para diurese de 30–40 mL/h no adulto e 1–2 mL/kg/h na criança"
    },
    {
      droga: "Soro antielapídico bivalente (SAELA)",
      linha: "l1",
      dose: "10 frascos-ampolas",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Força, deglutição, FR, SpO₂; observar ≥ 24 h",
      contraindicacoes: "—",
      ajustes: "Insuficiência respiratória: ventilação mecânica. Neostigmina como adjuvante (abaixo)"
    },
    {
      droga: "Neostigmina (teste e manutenção no elapídico)",
      linha: "adj",
      dose: "Teste: adulto 0,5 mg (1 ampola) IV; criança 0,05 mg/kg IV, sempre precedida de atropina (adulto 0,5 mg; criança 0,05 mg/kg). Melhora da ptose em 10 min = teste positivo. Manutenção: 0,05–0,1 mg/kg IV a cada 4 h, precedida de atropina",
      via: "IV",
      intervalo: "A cada 4 h se teste positivo",
      duracao: "Até melhora neurológica",
      monitorizacao: "FC, secreções, força",
      contraindicacoes: "Não substitui o soro nem o suporte ventilatório",
      ajustes: "Discutir com CIATox"
    },
    {
      droga: "Adrenalina (anafilaxia ao soro)",
      linha: "adj",
      dose: "0,01 mg/kg IM (máx. 0,5 mg adulto; 0,3 mg criança pré-púbere)",
      via: "IM no vasto lateral",
      intervalo: "Repetir a cada 5 min",
      duracao: "—",
      monitorizacao: "PA, broncoespasmo",
      contraindicacoes: "—",
      ajustes: "Se reação: suspender a infusão, tratar (ver ficha Anafilaxia) e reiniciar o soro mais lentamente após controle"
    },
    {
      droga: "Pré-medicação (anti-histamínico, corticoide), garrote, incisão, sucção, antibiótico profilático",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Pré-medicação sem benefício comprovado (PCDT 2026). Garrote aumenta necrose. Antibiótico só se abscesso ou celulite",
      ajustes: "—"
    }
  ],
  destino: {
    agora: ["Sala de emergência com monitor; soro na unidade de referência mais próxima (não atrasar por transporte longo se o soro estiver disponível no local)"],
    reavaliar: ["TC 12 e 24 h após o soro", "Diurese horária, CK e creatinina a cada 12–24 h", "Edema (marcar limites com caneta) e pulsos"],
    alta: ["Sem sinais de envenenamento após observação mínima de 12 h com TC normal (serpente não peçonhenta ou picada seca)", "Pós-soro: TC normal, sem sangramento, diurese e creatinina normais, edema em regressão"],
    observacao: ["Picada sem sinais de envenenamento: no mínimo 12 h com TC seriado", "Elapídico: no mínimo 24 h"],
    internacao: ["Todo paciente que recebeu soro", "Criança, idoso e gestante, independentemente da gravidade"],
    transferencia: ["UTI: choque, insuficiência respiratória, LRA com necessidade de diálise, hemorragia grave", "Serviço com soro disponível, se não houver no local"]
  },
  prescricao: {
    hospitalar: "INTERNAÇÃO — ACIDENTE OFÍDICO (peso: ___ kg; gênero: ________; gravidade: ________)\n1. Dieta oral livre se consciente e sem vômitos (zero se elapídico com disfagia).\n2. Repouso com membro picado elevado; não garrotear; lavar local com água e sabão; marcar limite do edema com caneta a cada 6 h.\n3. Monitor, oximetria, PA a cada 15 min durante o soro e na 1ª hora; depois de 2/2 h.\n4. Acesso venoso no membro NÃO picado.\n5. SF 0,9% 1.000 mL IV de 8/8 h (ajustar para diurese de 30–40 mL/h). Criança: manutenção + reposição para diurese de 1–2 mL/kg/h. Crotálico: hidratação vigorosa.\n6. Deixar à beira do leito: adrenalina 1 mg/mL, material de via aérea, oxigênio.\n7. SORO ANTIVENENO IV — dose única, não fracionar, mesma dose para adulto e criança:\n   ( ) SABR (botrópico): leve 3 / moderado 6 / grave 12 frascos-ampolas\n   ( ) SABL (laquético): moderado 10 / grave 20\n   ( ) SAC ou SABC (crotálico): leve 5 / moderado 10 / grave 20\n   ( ) SAELA (elapídico): 10\n   Administrar puro ou diluído em SF 0,9%, gotejamento contínuo, sob supervisão médica e de enfermagem durante toda a infusão (velocidade conforme bula do lote/protocolo local).\n8. Se reação durante o soro (urticária, broncoespasmo, hipotensão): suspender infusão; adrenalina 1 mg/mL 0,5 mg IM (criança 0,01 mg/kg, máx. 0,3 mg); após controle, reiniciar o soro mais lentamente.\n9. Dipirona 1 g IV de 6/6 h se dor (criança 15–25 mg/kg/dose, máx. 1 g). Dor intensa: morfina 2–4 mg IV lento, até 4/4 h SN (criança 0,05–0,1 mg/kg/dose, máx. 4 mg). Evitar AINE e IM (coagulopatia).\n10. Profilaxia do tétano conforme histórico vacinal (ver ficha Tétano — profilaxia); aplicar IM só após correção da coagulopatia.\n11. Exames: TC na admissão, 12 h e 24 h após o soro; hemograma, TP, TTPa, fibrinogênio, ureia, creatinina, Na, K, CK, urina tipo 1 na admissão e a cada 24 h.\n12. Diurese horária (sonda vesical se crotálico grave ou oligúria). Comunicar diurese < 0,5 mL/kg/h, urina escura, sangramento, ptose, disfagia, FR < 12 ou SpO₂ < 94%.\n13. Notificação SINAN (acidente por animal peçonhento).\n\nELAPÍDICO COM PTOSE — TESTE DA NEOSTIGMINA\n- Atropina 0,5 mg IV (criança 0,05 mg/kg) e, em seguida, neostigmina 0,5 mg IV (criança 0,05 mg/kg). Melhora em 10 min: manutenção com neostigmina 0,05–0,1 mg/kg IV de 4/4 h precedida de atropina, conforme CIATox."
  },
  orientacoesRetorno: [
    "Prevenção: usar botas de cano alto e luvas no campo; não colocar a mão em buracos, tocas ou sob pedras; manter quintal limpo",
    "Em nova picada: lavar com água e sabão, manter a pessoa deitada e calma, não amarrar, não cortar, não chupar e não passar nada no local; ir logo ao hospital",
    "Após a alta: voltar imediatamente se sangramento, urina escura ou pouca urina, piora do inchaço, bolhas, pus ou febre",
    "Doença do soro (febre, dor nas juntas, manchas na pele) pode aparecer 5 a 24 dias depois: procurar a UBS",
    "Retornar à UBS em 7 dias para revisão do local da picada e conferir a vacina antitetânica"
  ],
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas dos Acidentes Ofídicos (Portaria SECTICS/MS nº 83/2025; 1ª ed. 2026)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed., vol. 3 (2023): Acidentes por animais peçonhentos",
    "Ministério da Saúde/FUNASA — Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos, 2ª ed. rev. (2001)",
    "Ministério da Saúde — Nota Informativa nº 25/2016-CGDT/DEVIT/SVS: uso racional de antivenenos",
    "Instituto Butantan — Bulas dos soros antibotrópico, anticrotálico, antibotrópico-crotálico e antielapídico"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
