// Problemas comuns da amamentação
registrarFicha({
  id: "amamentacao-problemas",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Problemas na amamentação: pega, fissura, ingurgitamento e pouco leite",
  resumo: "Avaliação da mamada e conduta nas dificuldades mais comuns: pega e posição, dor e fissura mamilar, ingurgitamento, candidíase mamilar, baixa produção real ou percebida, ordenha e armazenamento. Mastite tem ficha própria.",
  palavrasChave: "amamentacao aleitamento materno pega posicao fissura mamilar trauma mamilar ingurgitamento mamario leite empedrado pouco leite hipogalactia baixa producao ordenha armazenamento leite candidiase mamilar freio lingual anquiloglossia translactacao domperidona banco de leite",
  critico: {
    tempo: "Observar a mamada antes de tudo",
    texto: "A maior parte da dor, fissura, ingurgitamento e pouco leite vem de pega inadequada ou mamadas pouco frequentes. Observe uma mamada inteira antes de prescrever. Não indique fórmula sem avaliar."
  },
  alarmes: [
    "Área da mama vermelha, quente e dolorosa com febre (mastite/abscesso — ver ficha Mastite)",
    "RN com perda de peso > 10% do nascimento, sem recuperar o peso até 10–14 dias, < 6 fraldas molhadas/dia após o 5º dia, sonolento ou ictérico (risco de desidratação/hipernatremia)",
    "Fissura com secreção purulenta ou sem melhora após correção da pega",
    "Nódulo mamário que persiste após a mamada por mais de 1–2 semanas",
    "Mãe com sinais de depressão ou exaustão importante"
  ],
  conduta: [
    "Observar a mamada (formulário de observação OMS/UNICEF): posição (barriga com barriga, corpo alinhado, bebê próximo e apoiado) e pega (boca bem aberta, lábio inferior virado para fora, mais aréola visível acima que abaixo, queixo tocando a mama, bochechas cheias, sucção lenta e profunda com deglutição audível)",
    "Livre demanda, 8–12 mamadas/dia; esvaziar bem uma mama antes de oferecer a outra; evitar chupeta, mamadeira e bicos intermediários",
    "Fissura/dor: corrigir pega; iniciar pela mama menos dolorida; retirar o bebê da mama colocando o dedo no canto da boca; passar o próprio leite no mamilo após a mamada e deixar secar; não usar sabão, álcool, pomadas secativas ou conchas apertadas; analgésico se necessário",
    "Fissura persistente: avaliar freio lingual (Bristol/Martinelli), candidíase (dor em agulhada, mamilo brilhante, monilíase oral no bebê) e infecção bacteriana",
    "Ingurgitamento (2º–5º dia): mamadas frequentes; ordenha manual da aréola antes da mamada para amolecer e facilitar a pega; massagem suave; compressas frias por até 20 min após as mamadas; sutiã firme; analgésico/anti-inflamatório",
    "Pouco leite: diferenciar percebido de real (peso, fraldas, fezes); aumentar frequência e duração, mamar nas duas mamas, ordenha após as mamadas, descanso, apoio; complemento só se necessário, com copinho ou translactação, preferindo leite materno ordenhado",
    "Galactagogos (domperidona) só após corrigir a técnica, por curto prazo, em mulher sem cardiopatia ou QT longo (uso off-label)",
    "Ensinar ordenha manual e armazenamento; orientar direitos (licença, pausas para amamentar até 6 meses) e banco de leite humano"
  ],
  exames: [
    "Em geral não necessários",
    "Pesar o RN: perda até 7–10% nos primeiros dias é esperada; deve recuperar o peso de nascimento até 10–14 dias",
    "Fissura com secreção purulenta persistente: cultura da secreção do mamilo"
  ],
  diferenciais: [
    "Mastite e abscesso (ver ficha Mastite)",
    "Fenômeno de Raynaud do mamilo (palidez e dor após a mamada, piora com frio)",
    "Dermatite de contato ou eczema do mamilo",
    "Anquiloglossia do RN"
  ],
  tratamento: [
    { droga: "Paracetamol ou ibuprofeno", linha: "l1", dose: "Paracetamol 500–750 mg; ibuprofeno 400–600 mg", via: "VO", intervalo: "6/6 h (paracetamol) / 8/8 h (ibuprofeno)", duracao: "Enquanto dor", monitorizacao: "—", contraindicacoes: "AINE: úlcera, DRC", ajustes: "Compatíveis com amamentação" },
    { droga: "Miconazol creme 2% ou nistatina creme (candidíase mamilar)", linha: "l1", dose: "Camada fina", via: "Tópica no mamilo e aréola", intervalo: "Após cada mamada (4–6×/dia)", duracao: "14 dias ou até 1 semana após melhora", monitorizacao: "—", contraindicacoes: "—", ajustes: "Tratar o bebê ao mesmo tempo: nistatina suspensão 100.000 UI/mL, 1 mL na boca de 6/6 h por 14 dias. Ferver bicos e chupetas. Casos refratários: fluconazol VO para a mãe" },
    { droga: "Domperidona", linha: "adj", dose: "10 mg", via: "VO", intervalo: "8/8 h", duracao: "Curto prazo (até 2–4 semanas), reavaliar", monitorizacao: "Palpitação, síncope", contraindicacoes: "Arritmia, QT longo, cardiopatia, uso de drogas que prolongam QT ou inibidores do CYP3A4", ajustes: "Off-label; só após otimizar técnica e frequência das mamadas (ABM 2018)" }
  ],
  prescricao: {
    ambulatorial: "DOR / INGURGITAMENTO / FISSURA\nUSO ORAL\n1. Ibuprofeno 400 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após refeição, se dor, por até 5 dias.\n2. Paracetamol 500 mg ----------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n\nORIENTAÇÕES\n- Amamentar sempre que o bebê quiser (8 a 12 vezes por dia), conferindo a pega.\n- Antes de mamar, se a mama estiver dura: retirar um pouco de leite com as mãos para amolecer a aréola.\n- Depois de mamar: compressa fria (pano limpo com gelo envolto) por até 20 minutos.\n- Passar um pouco do próprio leite no bico após as mamadas e deixar secar ao ar.\n\nCANDIDÍASE MAMILAR (mãe e bebê)\nUSO TÓPICO\n3. Miconazol creme 2% ------------------------------ 1 bisnaga\n   Aplicar fina camada no mamilo e aréola após cada mamada por 14 dias (não precisa limpar antes de mamar).\nUSO ORAL (BEBÊ)\n4. Nistatina suspensão oral 100.000 UI/mL --------- 1 frasco\n   Aplicar 1 mL na boca do bebê (metade de cada lado) de 6 em 6 horas por 14 dias."
  },
  orientacoesRetorno: [
    "Amamentar não deve doer: dor forte ou machucado no bico quase sempre melhoram ajeitando a pega",
    "O bebê está mamando bem se faz xixi claro 6 ou mais vezes por dia a partir do 5º dia, as fezes ficam amarelas e ele ganha peso",
    "Leite ordenhado: até 12 horas na geladeira e até 15 dias no congelador, em vidro com tampa plástica fervido; descongelar na geladeira e aquecer em banho-maria fora do fogo",
    "Evite mamadeira e chupeta, que atrapalham a pega",
    "Procure atendimento se a mama ficar vermelha, quente e doída com febre, se o bebê estiver muito sonolento, amarelado ou fazendo pouco xixi",
    "Procure o banco de leite humano ou grupo de apoio da UBS para ajuda com a amamentação"
  ],
  encaminhar: [
    "Banco de leite humano / consultora em amamentação: dificuldades persistentes de pega, baixa produção real",
    "Pediatria / odontopediatria / fonoaudiologia: suspeita de anquiloglossia com prejuízo da mamada (frenotomia)",
    "Pediatria no mesmo dia: RN com perda de peso > 10%, desidratação ou icterícia importante"
  ],
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 23: Saúde da criança — aleitamento materno e alimentação complementar (2ª ed., 2015)",
    "Ministério da Saúde — Guia alimentar para crianças brasileiras menores de 2 anos (2019)",
    "Academy of Breastfeeding Medicine — Clinical Protocol #9: Galactogogues (2018) e #36: Mastitis spectrum (2022)",
    "Rede Brasileira de Bancos de Leite Humano / ANVISA — Banco de leite humano: funcionamento, prevenção e controle de riscos (2008)",
    "OMS/UNICEF — Breastfeeding counselling: a training course (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
