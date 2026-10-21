// Úlcera péptica e erradicação do H. pylori
registrarFicha({
  id: "ulcera-peptica-hpylori",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Úlcera péptica (duodenal e gástrica) e erradicação do H. pylori",
  resumo: "Úlcera gástrica ou duodenal, quase sempre por H. pylori ou AINE/AAS. Tratar com IBP, retirar o AINE, erradicar o H. pylori com esquema de 14 dias (V Consenso Brasileiro 2026: quádrupla com bismuto preferida, inclusive em alérgicos à penicilina) e confirmar a cura.",
  palavrasChave: "ulcera peptica ulcera gastrica ulcera duodenal helicobacter pylori h pylori erradicacao quadrupla bismuto tetraciclina metronidazol amoxicilina claritromicina levofloxacino vonoprazana alergia penicilina omeprazol aine hemorragia digestiva",
  critico: {
    tempo: "Sangramento ou perfuração → PS",
    texto: "Hematêmese, melena, síncope ou dor abdominal súbita intensa (perfuração) são emergências. Na erradicação: 14 dias, não repetir claritromicina ou levofloxacino já usados e sempre confirmar a cura."
  },
  alarmes: [
    "Hematêmese, vômito em borra de café, melena, síncope ou taquicardia (hemorragia digestiva alta)",
    "Dor abdominal súbita e intensa, abdome em tábua (perfuração)",
    "Vômitos persistentes de alimento, plenitude e perda de peso (obstrução pilórica)",
    "Úlcera gástrica: sempre biópsia e controle endoscópico (pode ser câncer)",
    "Anemia ferropriva, perda de peso"
  ],
  condutaInicial: [
    "Confirmar úlcera por endoscopia (com biópsias de bordas se gástrica e pesquisa de H. pylori)",
    "Suspender AINE/AAS se possível; se AAS cardiológico indispensável, manter com IBP",
    "IBP: 4 semanas na úlcera duodenal; 8 semanas na gástrica ou úlcera grande/complicada",
    "Erradicar H. pylori se positivo: esquema de 14 dias escolhido pelo uso prévio de antibióticos e alergia",
    "Confirmar erradicação ≥ 4 semanas após o fim do antibiótico (e ≥ 2 semanas sem IBP)",
    "Úlcera gástrica: nova EDA com biópsias em 8–12 semanas"
  ],
  fataisExcluir: [
    "Hemorragia digestiva alta",
    "Perfuração",
    "Câncer gástrico (úlcera gástrica de aspecto maligno ou que não cicatriza)",
    "Síndrome de Zollinger-Ellison (úlceras múltiplas, distais, refratárias, diarreia)",
    "Infarto agudo do miocárdio (dor epigástrica)"
  ],
  proximaDecisao: "Erradicação confirmada e úlcera cicatrizada → suspender IBP (exceto se uso contínuo de AINE/AAS/anticoagulante). Falha da 1ª linha → 2ª linha sem repetir quinolona ou claritromicina. Falha de 2 esquemas → gastroenterologia (cultura/teste molecular de resistência).",
  clinica: {
    anamnese: [
      "Dor epigástrica em queimação; duodenal costuma melhorar com alimento e acordar à noite; gástrica pode piorar com alimento",
      "Uso de AINE, AAS, corticoide, anticoagulante, ISRS, bisfosfonato",
      "Tratamento prévio de H. pylori: quais antibióticos e quando; uso prévio de claritromicina, levofloxacino ou metronidazol por qualquer motivo",
      "Alergia a penicilina: tipo de reação (urticária imediata, anafilaxia × exantema tardio leve)",
      "Sangramento (fezes pretas, vômito escuro), perda de peso, vômitos",
      "Tabagismo, álcool",
      "Família com câncer gástrico"
    ],
    exameFisico: [
      "Sinais vitais, palidez, sinais de choque",
      "Dor epigástrica à palpação; abdome em tábua e descompressão dolorosa (perfuração)",
      "Toque retal se suspeita de melena",
      "Peso, linfonodo de Virchow"
    ],
    diferenciais: [
      { dx: "Dispepsia funcional", pista: "EDA sem úlcera" },
      { dx: "DRGE", pista: "Pirose e regurgitação" },
      { dx: "Câncer gástrico ulcerado", pista: "Úlcera de bordas irregulares; histologia" },
      { dx: "Doença biliar / pancreatite", pista: "Dor em cólica ou em faixa, alteração de enzimas" },
      { dx: "Isquemia miocárdica", pista: "Esforço, fatores de risco" }
    ],
    gravidade: [
      "Não complicada: dor, sem sangramento ativo — tratamento ambulatorial",
      "Hemorragia: escore de Glasgow-Blatchford 0–1 pode ter manejo ambulatorial com EDA precoce; demais casos internação e EDA em até 24 h",
      "Perfuração ou obstrução: cirurgia / internação",
      "Indicações de pesquisar e tratar H. pylori: úlcera ativa ou prévia, dispepsia, linfoma MALT, parente de 1º grau com câncer gástrico, ressecção de câncer gástrico precoce, anemia ferropriva sem causa, deficiência de B12, PTI, antes de uso prolongado de AINE/AAS em quem tem história de úlcera"
    ]
  },
  exames: [
    {
      nome: "Endoscopia digestiva alta com biópsias",
      pedido: "Endoscopia digestiva alta com teste da urease e biópsias gástricas (antro e corpo) para H. pylori; biópsias das bordas se úlcera gástrica. Indicação: suspeita de úlcera péptica / dispepsia com alarme.",
      porQue: "Confirma úlcera, exclui câncer, pesquisa H. pylori.",
      esperar: "Úlcera duodenal (bulbo) ou gástrica (antro, incisura).",
      interpretacao: "Úlcera gástrica: histologia obrigatória e EDA de controle em 8–12 semanas até a cicatrização.",
      limitacoes: "IBP (2 semanas) e antibiótico/bismuto (4 semanas) recentes reduzem a sensibilidade do urease e da histologia."
    },
    {
      nome: "Controle de cura do H. pylori",
      pedido: "Teste respiratório com ureia marcada (13C) OU pesquisa de antígeno de H. pylori nas fezes (monoclonal). Realizar ≥ 4 semanas após término do antibiótico/bismuto e com IBP suspenso há 2 semanas. Indicação: controle de erradicação.",
      porQue: "A resistência é alta; todo tratamento deve ter a cura confirmada.",
      esperar: "Negativo.",
      interpretacao: "Positivo = falha → 2ª linha. Na úlcera gástrica, a EDA de controle já pode incluir histologia (não usar o teste da urease isolado para confirmar cura).",
      limitacoes: "Sorologia não serve para confirmar cura (permanece positiva)."
    },
    {
      nome: "Hemograma e ferritina",
      pedido: "Hemograma completo, ferritina.",
      porQue: "Sangramento oculto, anemia ferropriva.",
      esperar: "—",
      interpretacao: "Anemia → repor ferro e acompanhar.",
      limitacoes: "—"
    },
    {
      nome: "Gastrina sérica",
      pedido: "Gastrina sérica em jejum (suspender IBP 1 semana, com cautela). Indicação: úlceras múltiplas, refratárias ou distais ao duodeno, sem H. pylori nem AINE.",
      porQue: "Suspeita de Zollinger-Ellison.",
      esperar: "Normal.",
      interpretacao: "Muito elevada com pH gástrico ácido sugere gastrinoma → gastroenterologia.",
      limitacoes: "IBP eleva a gastrina; interpretar com especialista."
    }
  ],
  tratamento: [
    {
      droga: "Quádrupla com bismuto — 1ª linha (também para alérgicos à penicilina)",
      linha: "l1",
      dose: "IBP em dose padrão (omeprazol 20 mg, pantoprazol 40 mg ou esomeprazol 20 mg) ou vonoprazana 20 mg + subcitrato de bismuto coloidal 240 mg + tetraciclina 500 mg + metronidazol 400 mg",
      via: "Oral",
      intervalo: "IBP/vonoprazana e bismuto de 12/12 h; tetraciclina e metronidazol de 6/6 h (4 vezes ao dia)",
      duracao: "14 dias",
      monitorizacao: "Náusea, gosto metálico, fezes escuras (bismuto, esperado), adesão",
      contraindicacoes: "Gestação e < 8 anos (tetraciclina); álcool durante e até 72 h após (metronidazol, efeito antabuse); insuficiência renal grave (bismuto, tetraciclina)",
      ajustes: "Preferido pelo V Consenso Brasileiro (2026) e Maastricht VI. Bismuto em geral é manipulado. Tetraciclina com estômago vazio, longe de leite, antiácido, cálcio e ferro. Doxiciclina não substitui a tetraciclina (menor eficácia). Cápsula única comercial (bismuto + metronidazol + tetraciclina), quando disponível, por 10 dias"
    },
    {
      droga: "Tríplice otimizada com claritromicina — alternativa",
      linha: "alt",
      dose: "IBP em dose dobrada (omeprazol 40 mg) ou vonoprazana 20 mg + amoxicilina 1 g + claritromicina 500 mg (± bismuto 240 mg)",
      via: "Oral",
      intervalo: "Todos de 12/12 h",
      duracao: "14 dias",
      monitorizacao: "Diarreia, gosto amargo, interações da claritromicina (estatinas, varfarina, QT)",
      contraindicacoes: "Uso prévio de macrolídeo (qualquer motivo), alergia a penicilina, QT longo",
      ajustes: "Não é mais a opção empírica universal pela resistência à claritromicina; usar se bismuto/tetraciclina indisponíveis e sem macrolídeo prévio. Acrescentar bismuto e/ou trocar IBP por vonoprazana melhora a eficácia. Suspender sinvastatina durante o uso da claritromicina"
    },
    {
      droga: "Dupla com amoxicilina em dose alta — alternativa",
      linha: "alt",
      dose: "Amoxicilina 1 g de 8/8 h (ou 750 mg de 6/6 h) + vonoprazana 20 mg de 12/12 h (ou IBP em dose alta de 12/12 h)",
      via: "Oral",
      intervalo: "Conforme descrito",
      duracao: "14 dias",
      monitorizacao: "Diarreia, exantema",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Opção quando não há bismuto. Melhor resultado com vonoprazana"
    },
    {
      droga: "Alérgico à penicilina — opções",
      linha: "l1",
      dose: "1ª linha: quádrupla com bismuto (acima), 14 dias; ou dupla vonoprazana + tetraciclina por 14 dias (doses conforme tabela do V Consenso). 2ª linha: opção de 1ª linha ainda não usada, ou tríplice IBP + levofloxacino 500 mg 1×/dia + claritromicina 500 mg de 12/12 h por 14 dias (se nunca usou quinolona nem macrolídeo)",
      via: "Oral",
      intervalo: "—",
      duracao: "14 dias",
      monitorizacao: "Tendinopatia, QT e interações (levofloxacino e claritromicina)",
      contraindicacoes: "Levofloxacino: miastenia, gestação, uso prévio de quinolona, idoso com corticoide (tendinite)",
      ajustes: "Confirmar a alergia: a maioria das pessoas que relata alergia à penicilina não é alérgica. Se a reação foi leve e tardia ou duvidosa, encaminhar para avaliação alérgica (teste e provocação), que permite usar amoxicilina"
    },
    {
      droga: "Resgate após falha (não alérgico)",
      linha: "alt",
      dose: "Após falha da quádrupla: IBP de 12/12 h + amoxicilina 1 g de 12/12 h + levofloxacino 500 mg 1×/dia + bismuto 240 mg de 12/12 h. Após falha da tríplice/dupla: quádrupla com bismuto",
      via: "Oral",
      intervalo: "Conforme descrito",
      duracao: "14 dias",
      monitorizacao: "Confirmar cura",
      contraindicacoes: "Não repetir claritromicina nem levofloxacino já usados",
      ajustes: "Falha de 2 esquemas → gastroenterologia para cultura/teste molecular de resistência"
    },
    {
      droga: "Omeprazol (cicatrização da úlcera)",
      linha: "l1",
      dose: "20–40 mg",
      via: "Oral, antes do café",
      intervalo: "1 vez ao dia",
      duracao: "Duodenal: 4 semanas; gástrica ou complicada: 8 semanas",
      monitorizacao: "Sintomas",
      contraindicacoes: "—",
      ajustes: "Continuar após o esquema de erradicação até completar o tempo. Manter contínuo se AINE/AAS/anticoagulante indispensável. Com clopidogrel, preferir pantoprazol 40 mg"
    }
  ],
  destino: {
    agora: [
      "Úlcera não complicada: IBP + erradicação + retirada do AINE",
      "Sinais de sangramento ou perfuração: PS imediato"
    ],
    reavaliar: [
      "Teste de cura ≥ 4 semanas após o fim do esquema (IBP suspenso há 2 semanas)",
      "Úlcera gástrica: EDA com biópsias em 8–12 semanas"
    ],
    alta: [
      "Úlcera cicatrizada e H. pylori erradicado: suspender IBP salvo indicação de proteção contínua"
    ],
    observacao: ["—"],
    internacao: [
      "Hemorragia digestiva (exceto Glasgow-Blatchford 0–1), perfuração, obstrução"
    ],
    transferencia: [
      "PS/regulação: sangramento, perfuração",
      "Gastroenterologia: falha de 2 tratamentos, úlcera refratária, suspeita de malignidade ou Zollinger-Ellison",
      "Alergologia: alergia à penicilina relatada com dúvida"
    ]
  },
  prescricao: {
    ambulatorial: "1ª LINHA — QUÁDRUPLA COM BISMUTO (14 DIAS) — serve também para alérgicos à penicilina\nUSO ORAL\n1. Omeprazol 20 mg ------------------------------------------- 28 cápsulas\n   Tomar 1 cápsula 30 minutos antes do café e 1 antes do jantar por 14 dias.\n   (ou Vonoprazana 20 mg: 1 comprimido de 12 em 12 horas por 14 dias.)\n2. Subcitrato de bismuto coloidal 240 mg (manipulado) ------- 28 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 14 dias. As fezes ficam escuras (esperado).\n3. Tetraciclina 500 mg ---------------------------------------- 56 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 14 dias, com água, 1 hora antes ou 2 horas depois das refeições, longe de leite, antiácido, cálcio e ferro.\n4. Metronidazol 400 mg ----------------------------------------- 56 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas por 14 dias, após as refeições. Não beber álcool durante o tratamento e até 3 dias depois.\n\nALTERNATIVA (SEM ACESSO A BISMUTO/TETRACICLINA, SEM USO PRÉVIO DE MACROLÍDEO, NÃO ALÉRGICO)\n1. Omeprazol 40 mg (ou vonoprazana 20 mg) --------------------- 28 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, antes do café e do jantar, por 14 dias.\n2. Amoxicilina 500 mg ----------------------------------------- 56 cápsulas\n   Tomar 2 cápsulas (1 g) de 12 em 12 horas por 14 dias.\n3. Claritromicina 500 mg -------------------------------------- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias.\n\nAPÓS O ESQUEMA (CICATRIZAÇÃO)\n- Omeprazol 20 mg 1 cápsula em jejum até completar 4 semanas (duodenal) ou 8 semanas (gástrica).\n\nCONTROLE DE CURA\n- Antígeno fecal de H. pylori ou teste respiratório ≥ 4 semanas após o fim do antibiótico, com omeprazol suspenso há 2 semanas.",
    hospitalar: "ÚLCERA COM SANGRAMENTO — ATÉ A ENDOSCOPIA\n1. Dieta zero.\n2. 2 acessos venosos calibrosos; cristaloide (SF 0,9% ou Ringer lactato) 500 mL IV rápido se instável, repetir conforme resposta.\n3. Concentrado de hemácias se Hb < 7 g/dL (< 8 g/dL se doença cardiovascular) ou instabilidade.\n4. Omeprazol 80 mg IV em bolus (diluído em 100 mL de SF 0,9% em 30 min); depois 40 mg IV de 12/12 h (ou 8 mg/h em bomba). Após EDA com estigma de alto risco tratado: manter dose alta por 72 h.\n5. Suspender AINE, AAS (discutir com cardiologia se prevenção secundária) e anticoagulante (reverter se sangramento grave).\n6. EDA em até 24 h (antes, após estabilização, se instável).\n7. Controles: PA e FC de 1/1 h, diurese, Hb de 6/6 h a 12/12 h, nível de consciência."
  },
  orientacoesRetorno: [
    "Tome todos os remédios nos horários, pelos 14 dias completos, mesmo se melhorar; a falha aumenta a resistência da bactéria",
    "Efeitos esperados: gosto metálico, náusea leve e fezes escuras (bismuto). Diarreia forte, febre ou manchas na pele: procure a UBS",
    "Não beba álcool durante o tratamento e até 3 dias depois (metronidazol)",
    "Evite anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida, cetoprofeno) e AAS sem orientação médica; pare de fumar",
    "Procure o PS imediatamente se vomitar sangue ou borra de café, tiver fezes pretas, desmaio, ou dor forte e súbita na barriga",
    "Faça o exame de controle 4 semanas depois de terminar o antibiótico, sem tomar omeprazol nas 2 semanas antes",
    "Retorne com o resultado; úlcera no estômago precisa de nova endoscopia em 8–12 semanas"
  ],
  tabelas: [
    {
      titulo: "Escolha do esquema de H. pylori (V Consenso Brasileiro, 2026)",
      colunas: ["Situação", "1ª opção", "Se falhar"],
      linhas: [
        ["Sem alergia, sem antibióticos prévios", "Quádrupla com bismuto 14 dias", "Amoxicilina + levofloxacino + bismuto + IBP 14 dias"],
        ["Sem bismuto/tetraciclina disponível", "Tríplice otimizada (sem macrolídeo prévio) ou dupla amoxicilina dose alta + vonoprazana, 14 dias", "Quádrupla com bismuto"],
        ["Alergia à penicilina", "Quádrupla com bismuto 14 dias (ou vonoprazana + tetraciclina 14 dias)", "Opção não usada ou IBP + levofloxacino + claritromicina 14 dias"],
        ["2 falhas", "Gastroenterologia: teste de resistência", "—"]
      ],
      nota: "Teste de cura sempre: ≥ 4 semanas sem antibiótico/bismuto e 2 semanas sem IBP/vonoprazana."
    }
  ],
  fontes: [
    "Federação Brasileira de Gastroenterologia / Núcleo Brasileiro para Estudo do H. pylori — V Consenso Brasileiro sobre Infecção por Helicobacter pylori (Arq Gastroenterol, 2026; doi 10.1590/S0004-2803.24612026-043)",
    "Malfertheiner P et al. — Management of H. pylori infection: the Maastricht VI/Florence consensus report (Gut, 2022)",
    "ACG — Clinical Guideline: Treatment of Helicobacter pylori Infection (Am J Gastroenterol, 2024)",
    "ACG — Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding (Am J Gastroenterol, 2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
