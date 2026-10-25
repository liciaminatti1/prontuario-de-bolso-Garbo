// Vacinação da criança e do adolescente: atrasos, contraindicações e CRIE
registrarFicha({
  id: "calendario-vacinal-crianca",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Vacinação da criança e do adolescente: atrasos, contraindicações e CRIE",
  resumo: "Como colocar em dia a vacinação atrasada (idades-limite, intervalos, não reiniciar esquemas), vacinas do adolescente, contraindicações verdadeiras e falsas, eventos adversos e indicações do CRIE. O calendário de rotina por idade (0–9 anos) está na ficha puericultura.",
  palavrasChave: "vacina vacinacao atrasada atraso vacinal calendario pni crianca adolescente penta vip vop bcg rotavirus pneumococica meningococica febre amarela triplice viral tetraviral varicela hepatite a hpv dengue dtpa dt contraindicacao falsa contraindicacao evento adverso eapv crie imunobiologicos especiais imunodeprimido corticoide",
  alarmes: [
    "Anafilaxia após dose anterior da mesma vacina ou a componente dela: não repetir; notificar e encaminhar ao CRIE",
    "Imunodeficiência (primária, HIV com imunossupressão, quimioterapia, transplante, corticoide em dose alta, biológicos): não aplicar vacinas atenuadas sem avaliação",
    "Criança com convulsão, choro persistente ou episódio hipotônico-hiporresponsivo após DTP/penta: notificar; próximas doses com DTP acelular via CRIE",
    "Invaginação intestinal prévia ou malformação intestinal não corrigida: não aplicar rotavírus",
    "Criança grave ou febril com doença moderada a grave: adiar até melhorar (não é contraindicação permanente)",
    "Atraso vacinal grave sem justificativa: avaliar negligência (ver ficha violencia-interpessoal)"
  ],
  conduta: [
    "Conferir a Caderneta e o SI-PNI; sem comprovante = considerar não vacinado (exceto BCG com cicatriz)",
    "Aproveitar toda oportunidade: aplicar no mesmo dia todas as vacinas em atraso que a idade permite (podem ser simultâneas, em locais diferentes)",
    "NÃO reiniciar esquemas interrompidos: continuar de onde parou, respeitando intervalo mínimo entre doses (em geral 30 dias; ideal 60 dias nas séries do 1º ano)",
    "Respeitar as idades-limite (tabela): rotavírus e BCG têm limites rígidos",
    "Vacinas atenuadas injetáveis (tríplice viral, varicela, febre amarela) não aplicadas no mesmo dia: intervalo de 30 dias. Em < 2 anos, não aplicar febre amarela e tríplice/tetraviral no mesmo dia (intervalo de 30 dias), salvo situação epidemiológica",
    "Conferir contraindicações verdadeiras (tabela) e não adiar por falsas contraindicações",
    "Doenças crônicas, imunossupressão ou contato domiciliar de imunossuprimido: encaminhar ao CRIE",
    "Registrar na Caderneta e no SI-PNI e agendar a próxima dose"
  ],
  exames: [
    "Não pedir sorologia antes de vacinar de rotina",
    "Anti-HBs 1–2 meses após o esquema apenas em grupos de risco (filho de mãe HBsAg+, imunossuprimidos, renais crônicos)",
    "Contagem de CD4 para decidir vacinas atenuadas em criança com HIV (definição pelo CRIE/infectologia)"
  ],
  encaminhar: [
    "CRIE: imunodeprimidos e seus contatos, asplenia/doença falciforme, HIV, doença renal ou hepática crônica, cardiopatia e pneumopatia crônicas, diabetes, fístula liquórica, implante coclear, prematuros extremos, trissomias, doenças de depósito, candidatos a transplante, eventos adversos graves a vacinas anteriores",
    "Alergia grave a ovo (anafilaxia) antes da febre amarela: avaliação no CRIE (tríplice viral pode ser aplicada normalmente)",
    "Evento adverso grave: notificar no e-SUS Notifica (EAPV) e encaminhar ao CRIE para definir doses seguintes"
  ],
  tabelas: [
    {
      titulo: "Atraso vacinal: idades-limite e conduta (PNI)",
      colunas: ["Vacina", "Limite / conduta no atraso", "Observação"],
      linhas: [
        ["BCG", "Até 4 anos 11 meses e 29 dias", "Não revacinar por ausência de cicatriz. RN < 2 kg: adiar até atingir 2 kg"],
        ["Hepatite B", "Qualquer idade: completar 3 doses (0, 1, 6 meses)", "Na criança < 7 anos, as doses da penta contam"],
        ["Rotavírus", "1ª dose de 1 mês e 15 dias até 3 meses e 15 dias; 2ª dose até 7 meses e 29 dias", "Perdeu o prazo: não aplicar"],
        ["Penta (DTP+Hib+HepB) / DTP", "Penta até 6 anos 11 meses e 29 dias (completar 3 doses); reforços de DTP até 6 anos 11 meses e 29 dias", "≥ 7 anos sem esquema: dT (3 doses: 0, 2 e 4 meses) + hepatite B"],
        ["Poliomielite (VIP)", "Completar o esquema em < 5 anos conforme instrução normativa vigente", "VOP foi substituída pela VIP em todo o esquema (2024–2026)"],
        ["Pneumocócica conjugada", "Até 4 anos 11 meses e 29 dias; 12 meses–4 anos sem vacina: dose única", "Transição VPC10 → VPC20: seguir a nota técnica vigente"],
        ["Meningocócica C / ACWY", "Até 4 anos 11 meses e 29 dias; 12 meses–4 anos sem vacina: dose única; ACWY aos 11–14 anos", "Desde 2025 o reforço dos 12 meses é ACWY"],
        ["Febre amarela", "9 meses: 1ª dose; reforço aos 4 anos. ≥ 5 anos sem nenhuma dose: dose única (até 59 anos)", "1ª dose após os 5 anos dispensa reforço"],
        ["Tríplice viral / tetraviral", "2 doses até 29 anos (intervalo mínimo 30 dias). Tetraviral até 4 anos 11 meses e 29 dias (ou tríplice + varicela)", "Bloqueio de sarampo: 6–11 meses recebem dose zero (não conta no esquema)"],
        ["Varicela", "2 doses: 15 meses (tetraviral) e 4 anos; atraso até 6 anos 11 meses e 29 dias na rotina", "Fora disso: CRIE ou campanhas"],
        ["Hepatite A", "Dose única aos 15 meses; atraso até 4 anos 11 meses e 29 dias", "Grupos de risco em qualquer idade: CRIE"],
        ["HPV", "9–14 anos meninas e meninos: dose única", "Imunossuprimidos e HIV 9–45 anos: 3 doses (0, 2, 6 meses) via CRIE/sala de vacina. Resgates temporários conforme NT vigente"],
        ["dT / dTpa", "Reforço de dT a cada 10 anos após o esquema básico", "Gestante: dTpa a partir de 20 semanas em toda gestação"],
        ["Influenza", "6 meses a < 6 anos (rotina) e grupos prioritários; 1ª vez em < 9 anos: 2 doses com 30 dias", "Anual"],
        ["Dengue", "10–14 anos: 2 doses (intervalo 3 meses), conforme municípios contemplados", "Vacina atenuada: não aplicar em imunossuprimidos"]
      ],
      nota: "Conferir sempre o Calendário Nacional de Vacinação e as notas técnicas vigentes do PNI: idades-limite e produtos mudam (ex.: pneumocócica 20-valente, VIP no reforço, covid-19)."
    },
    {
      titulo: "Contraindicações verdadeiras x falsas",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Anafilaxia a dose prévia ou a componente da vacina", "Contraindicação verdadeira para aquela vacina"],
        ["Imunodeficiência grave, quimioterapia, transplante", "Não aplicar atenuadas (BCG, rotavírus, tríplice/tetraviral, varicela, febre amarela, dengue) sem CRIE; inativadas podem ser aplicadas"],
        ["Corticoide ≥ 2 mg/kg/dia de prednisona (ou ≥ 20 mg/dia se > 10 kg) por ≥ 14 dias", "Adiar atenuadas até 1 mês após suspender"],
        ["Filho de mãe que usou imunobiológico (ex.: anti-TNF) na gestação", "Adiar BCG e rotavírus conforme orientação do CRIE"],
        ["Recebeu sangue, plasma ou imunoglobulina", "Adiar tríplice viral e varicela por 3 a 11 meses conforme o produto (BCG, febre amarela e rotavírus não precisam esperar)"],
        ["Gestação", "Não aplicar atenuadas (exceto febre amarela em situação de risco, conforme MS)"],
        ["Doença aguda moderada ou grave, com ou sem febre", "Adiar até melhorar (temporária)"],
        ["Resfriado, febre baixa, diarreia leve, otite, uso de antibiótico", "FALSA contraindicação: vacinar"],
        ["Prematuridade", "FALSA: vacinar pela idade cronológica (BCG aguarda 2 kg)"],
        ["Desnutrição, alergia não relacionada (asma, rinite, dermatite), história familiar de convulsão ou de evento adverso", "FALSA: vacinar"],
        ["Alergia a ovo", "FALSA para tríplice viral e influenza; febre amarela: só anafilaxia ao ovo exige avaliação no CRIE"],
        ["Convulsão febril prévia, doença neurológica estável", "FALSA: vacinar (orientar antitérmico se febre)"],
        ["Aleitamento materno, mãe gestante na casa, convívio com imunossuprimido", "FALSA para a maioria; contato de imunossuprimido: VIP em vez de VOP e vacina varicela/influenza recomendadas"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO À SALA DE VACINA — ATUALIZAÇÃO DO CALENDÁRIO\nCriança/adolescente: ________ Data de nascimento: __/__/____ Idade: ___\nImunossupressão: ( ) não ( ) sim: ____   Alergia grave: ( ) não ( ) sim: ____\nFavor aplicar hoje as doses em atraso, conforme Calendário Nacional de Vacinação e idades-limite vigentes:\n( ) BCG  ( ) Hepatite B dose ___  ( ) Penta dose ___  ( ) VIP dose ___  ( ) Rotavírus dose ___\n( ) Pneumocócica dose ___  ( ) Meningocócica C/ACWY dose ___  ( ) Febre amarela dose ___\n( ) Tríplice viral / tetraviral dose ___  ( ) Varicela dose ___  ( ) Hepatite A\n( ) DTP reforço ___  ( ) dT dose ___  ( ) HPV  ( ) Influenza  ( ) Covid-19  ( ) Dengue dose ___\nNão reiniciar esquemas. Agendar doses seguintes e registrar na Caderneta e no SI-PNI.\n\nSE FEBRE OU DOR APÓS A VACINA (USO ORAL)\n1. Paracetamol 200 mg/mL gotas ------------------ 1 frasco\n   Dar 1 gota por kg (máx 35 gotas) de 6 em 6 horas se febre ou dor, por até 48 horas.\n   ou Dipirona 500 mg/mL gotas — 10 a 15 mg/kg/dose (≈ 1 gota a cada 2 kg) de 6 em 6 horas se febre ou dor.\n   (Não dar antitérmico preventivo de rotina antes da vacina.)\n\nENCAMINHAMENTO AO CRIE\nEncaminho ________, diagnóstico ________, para avaliação de imunobiológicos especiais conforme Manual dos CRIE vigente. Cópia da Caderneta anexa."
  },
  orientacoesRetorno: [
    "Vacina atrasada não precisa recomeçar: trazer a Caderneta e completar o que falta",
    "Dor, vermelhidão no local e febre baixa por 1 a 2 dias são esperadas; usar compressa fria no local e antitérmico se necessário",
    "Febre e manchas na pele 5 a 12 dias após a tríplice viral podem acontecer e passam sozinhas",
    "A BCG forma uma ferida que demora até 3 meses para cicatrizar: não colocar pomada nem curativo",
    "Voltar imediatamente se: falta de ar, inchaço no rosto ou na boca, manchas pelo corpo logo após a vacina, convulsão, choro inconsolável por mais de 3 horas, criança mole e pálida, vômitos com sangue nas fezes após a vacina do rotavírus",
    "Trazer a Caderneta em todas as consultas"
  ],
  fontes: [
    "Ministério da Saúde/PNI — Calendário Nacional de Vacinação e Instrução Normativa do Calendário Nacional de Vacinação (versão vigente, 2025–2026)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed. (2023)",
    "Ministério da Saúde — Manual de Normas e Procedimentos para Vacinação (2014) e Manual de Vigilância Epidemiológica de Eventos Supostamente Atribuíveis à Vacinação ou Imunização (ESAVI), 4ª ed. (2021)",
    "Ministério da Saúde/PNI — Notas técnicas: menACWY aos 12 meses (NT nº 77/2025), HPV dose única (2024), VIP em todo o esquema (2024–2026), dengue (2024)",
    "SBP — Calendário de Vacinação SBP 2026–2027"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
