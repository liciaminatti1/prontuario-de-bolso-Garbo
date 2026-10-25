// Prevenção de acidentes na infância e adolescência
registrarFicha({
  id: "prevencao-acidentes",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Prevenção de acidentes na infância e adolescência (e sinais de maus-tratos)",
  resumo: "Orientação antecipatória por faixa etária na puericultura: sono seguro, transporte (bebê-conforto, cadeirinha, assento de elevação), afogamento, queimaduras, quedas, intoxicações, engasgo, armas e trânsito. Inclui sinais de alerta de maus-tratos com encaminhamento para a ficha violencia-interpessoal.",
  palavrasChave: "prevencao de acidentes acidente domestico seguranca infantil cadeirinha bebe conforto assento de elevacao cinto transporte contran afogamento piscina queimadura quedas janela andador intoxicacao produtos de limpeza medicamentos ciatox engasgo bateria botao ima arma de fogo bicicleta capacete sono seguro morte subita maus tratos",
  alarmes: [
    "Lesão incompatível com a idade/desenvolvimento ou com a história (bebê que não rola com fratura ou queda \"da cama\" com lesão grave)",
    "Demora em procurar atendimento, histórias que mudam, acidentes repetidos",
    "Equimoses em bebê que não anda, em orelhas, pescoço, tronco, nádegas ou genitais; marcas com forma de objeto ou mão; queimaduras em luva/meia ou por cigarro",
    "Ingestão de bateria botão ou de 2 ou mais ímãs: PS imediato (lesão de esôfago em horas)",
    "Ingestão de produto cáustico, medicamento de adulto ou praguicida: ligar CIATox e encaminhar ao PS (ver ficha intoxicacoes-exogenas)",
    "Afogamento, queimadura extensa ou de face/mãos/genitais/períneo: PS (ver fichas afogamento e queimaduras)"
  ],
  conduta: [
    "Em toda consulta de puericultura, fazer orientação antecipatória para a próxima fase do desenvolvimento (tabela)",
    "Perguntar sobre: transporte no carro/moto, piscina, balde ou caixa d'água em casa, produtos de limpeza e remédios guardados, janelas e lajes, arma de fogo em casa, quem cuida da criança",
    "Sono seguro do lactente: de barriga para cima, berço próprio no quarto dos pais, colchão firme, sem travesseiro, protetor, cobertor solto ou bichos de pelúcia; sem fumaça",
    "Transporte conforme Resolução CONTRAN 819/2021 (tabela); moto: proibido para menores de 10 anos",
    "Afogamento: supervisão ativa a um braço de distância, sem celular; cerca ao redor da piscina com portão de fechamento automático; esvaziar baldes e bacias; tampa na caixa d'água e no vaso sanitário; colete salva-vidas (boia de braço não protege)",
    "Queimaduras: cozinhar nas bocas de trás com cabos para dentro; criança fora da cozinha; testar a água do banho; álcool líquido e fósforos fora do alcance; protetores de tomada",
    "Quedas: redes ou grades em janelas, sacadas e lajes; portão em escadas; não deixar bebê sozinho no trocador ou na cama; NÃO usar andador (SBP)",
    "Intoxicações: medicamentos e produtos químicos trancados, no alto, na embalagem original; nunca chamar remédio de \"docinho\"; plantas tóxicas (comigo-ninguém-pode) longe; número do CIATox visível",
    "Engasgo/sufocação: brinquedos adequados à idade, sem peças pequenas, baterias botão e ímãs fora do alcance; cortar uva e salsicha no comprimento; não dar pipoca, amendoim ou bala dura antes de 4–5 anos; sacolas plásticas e cordões de cortina longe",
    "Arma de fogo: a casa mais segura é sem arma; se houver, descarregada e trancada, munição separada",
    "Escolares e adolescentes: capacete na bicicleta e patins, travessia segura, piscina e rios só com adulto, não dirigir nem pegar carona com quem bebeu; conversar sobre desafios perigosos na internet e uso seguro das redes",
    "Suspeita de maus-tratos ou negligência: acolher, registrar, notificar no SINAN e comunicar o Conselho Tutelar — conduta completa na ficha violencia-interpessoal (não confrontar a família de forma acusatória; proteger a criança)"
  ],
  encaminhar: [
    "PS/SAMU 192: afogamento, queimadura grave, ingestão de bateria/ímã/cáustico, TCE com sinais de alarme (ver ficha tce-crianca)",
    "CIATox (Disque-Intoxicação 0800 722 6001) em toda suspeita de intoxicação, antes ou junto com o encaminhamento",
    "Conselho Tutelar e rede de proteção: suspeita de maus-tratos ou negligência (ver ficha violencia-interpessoal)",
    "CRAS/assistência social: vulnerabilidade que impede medidas de segurança (moradia, falta de berço, ausência de cuidador)"
  ],
  tabelas: [
    {
      titulo: "Riscos e orientações por faixa etária (SBP)",
      colunas: ["Idade", "Principais riscos", "Orientações-chave"],
      linhas: [
        ["0–6 meses", "Sufocação no sono, quedas do trocador/cama, queimadura com líquido quente, transporte", "Sono seguro; nunca deixar sozinho em superfície alta; não segurar bebê com bebida quente na mão; bebê-conforto voltado para trás"],
        ["6–12 meses", "Quedas, engasgo, afogamento em balde/banheira, intoxicação, queimadura", "Portão em escadas, sem andador; objetos pequenos fora do alcance; nunca deixar só no banho; protetores de tomada"],
        ["1–4 anos", "Afogamento (principal causa de morte acidental de 1–4 anos), intoxicações, queimaduras, quedas de janelas e lajes, atropelamento na garagem", "Cerca de piscina, supervisão a um braço; produtos trancados; redes em janelas; criança fora da cozinha; cadeirinha"],
        ["5–9 anos", "Atropelamento, quedas de bicicleta/brinquedos, afogamento em rios e praias, transporte sem assento de elevação", "Assento de elevação até 1,45 m; capacete; atravessar de mãos dadas; aulas de natação (não substituem a supervisão)"],
        ["10–19 anos", "Acidentes de trânsito, afogamento, violência, armas, álcool e drogas, desafios na internet", "Cinto sempre; não pegar carona com quem bebeu; capacete; diálogo sobre riscos; arma fora de casa"]
      ]
    },
    {
      titulo: "Transporte de crianças em automóveis (CONTRAN 819/2021)",
      colunas: ["Dispositivo", "Para quem", "Como"],
      linhas: [
        ["Bebê-conforto (conversível)", "Até 1 ano ou até 13 kg (ou o limite do fabricante)", "Banco traseiro, voltado para trás; nunca à frente de airbag"],
        ["Cadeirinha", "1 a 4 anos, até 18 kg", "Banco traseiro, voltada para frente (manter voltada para trás o máximo que o fabricante permitir)"],
        ["Assento de elevação", "4 a 7 anos e meio, até 1,45 m de altura", "Banco traseiro, com cinto de 3 pontos do veículo"],
        ["Cinto de segurança do veículo", "Acima de 7 anos e meio ou 1,45 m", "Banco traseiro até 10 anos (exceto quando já ≥ 1,45 m ou veículo sem banco traseiro, conforme a norma)"]
      ],
      nota: "Usar dispositivo com selo do INMETRO, instalado conforme o manual. Prevalece o limite de peso e altura do fabricante. Motocicleta: proibido transportar menores de 10 anos (CTB)."
    }
  ],
  prescricao: {
    ambulatorial: "ORIENTAÇÕES DE SEGURANÇA PARA A FAMÍLIA (idade da criança: ___)\n\nSONO DO BEBÊ\n- Sempre de barriga para cima, no berço, no quarto dos pais, sem travesseiro, protetor, cobertor solto ou bichos de pelúcia.\n\nCARRO\n- Bebê-conforto voltado para trás até 1 ano (13 kg); cadeirinha de 1 a 4 anos; assento de elevação até 1,45 m de altura; sempre no banco de trás.\n\nÁGUA\n- Nunca deixar a criança sozinha perto de água, nem por um minuto. Esvaziar baldes e bacias. Tampar caixa d'água, poço e vaso sanitário. Piscina com cerca e portão trancado.\n\nFOGO E CALOR\n- Cabos de panela virados para dentro; criança fora da cozinha; testar a água do banho com o cotovelo; álcool e fósforos guardados.\n\nQUEDAS\n- Redes ou grades em janelas e lajes; portão na escada; não usar andador; não deixar o bebê sozinho na cama ou no trocador.\n\nREMÉDIOS E PRODUTOS\n- Guardar trancados e no alto, na embalagem original. Nunca colocar produto de limpeza em garrafa de refrigerante.\n- Se a criança engolir algo: ligar para o CIATox 0800 722 6001 (24 h, gratuito) ou SAMU 192; não provocar vômito.\n\nENGASGO\n- Pilhas tipo botão e ímãs fora do alcance: se engolir, ir ao PS imediatamente. Cortar uva e salsicha no comprimento.\n\nARMA\n- A casa mais segura é sem arma. Se houver, descarregada e trancada, com a munição em outro lugar."
  },
  orientacoesRetorno: [
    "A maioria dos acidentes com crianças acontece dentro de casa e pode ser evitada",
    "Criança pequena precisa de um adulto olhando o tempo todo perto da água, da cozinha e de janelas",
    "Em caso de engasgo com falta de ar, ligar 192 e fazer a manobra de desengasgo (bebê: 5 tapas nas costas e 5 compressões no peito; criança maior: manobra de Heimlich)",
    "Se a criança engolir remédio, produto de limpeza, pilha ou ímã: ligar 0800 722 6001 (CIATox) e procurar o PS, levando a embalagem",
    "Queimadura: água corrente em temperatura ambiente por 20 minutos; não passar pasta de dente, manteiga ou pó de café; procurar atendimento",
    "Pedir ajuda na UBS se a família estiver passando por dificuldades para cuidar da criança com segurança"
  ],
  fontes: [
    "SBP — Departamento de Segurança da Criança e do Adolescente: Manual de Orientação — Acidentes na infância e adolescência / Segurança da criança (2023)",
    "Ministério da Saúde — Caderneta da Criança, 6ª ed. (2024): prevenção de acidentes por faixa etária",
    "CONTRAN — Resolução nº 819/2021 (transporte de crianças em veículos); Código de Trânsito Brasileiro, art. 244",
    "SOBRASA — Boletim epidemiológico de afogamentos no Brasil (2024)",
    "AAP — Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment",
    "Anvisa/RENACIAT — Disque-Intoxicação 0800 722 6001"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
