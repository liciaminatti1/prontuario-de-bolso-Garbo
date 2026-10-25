// Punção aspirativa e incisão-drenagem de abscesso periamigdaliano
registrarFicha({
  id: "drenagem-abscesso-periamigdaliano",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Drenagem de abscesso periamigdaliano (punção e incisão)",
  resumo: "Punção aspirativa por agulha e incisão-drenagem do abscesso periamigdaliano no PS, com anatomia de segurança (polo superior, longe da carótida), anestesia, antibiótico depois e quando chamar a otorrinolaringologia.",
  palavrasChave: "abscesso periamigdaliano peritonsilar angina de ludwig nao quinsy flegmao periamigdaliano trismo voz de batata quente desvio de uvula puncao aspirativa incisao drenagem amigdala orl clindamicina amoxicilina clavulanato",
  critico: {
    tempo: "Agulha no polo superior, ≤ 1 cm",
    texto: "Puncionar no polo superior, em direção paralela ao plano sagital (nunca lateral), com no máximo 1 cm de profundidade: a carótida interna fica posterolateral à amígdala. Sinais de via aérea ameaçada, extensão ao pescoço ou abscesso retro/parafaríngeo: não puncionar no PS, chamar ORL e anestesia."
  },
  alarmes: [
    "Estridor, dispneia, saturação caindo ou incapacidade de lidar com a saliva: via aérea em risco — chamar anestesia/ORL; não deitar o paciente",
    "Edema cervical, torcicolo, dor ao mover o pescoço, trismo intenso sem abaulamento palatino: suspeitar abscesso parafaríngeo ou retrofaríngeo — TC com contraste",
    "Aspirado com sangue vivo em grande quantidade ou pulsátil: retirar a agulha, comprimir, chamar ORL/cirurgia vascular",
    "Sangramento que não para com compressão após a incisão",
    "Toxemia, sepse ou dor torácica (mediastinite descendente): internar, antibiótico IV, TC de pescoço e tórax"
  ],
  indicacoes: [
    "Abscesso periamigdaliano clínico: dor de garganta unilateral intensa, disfagia/odinofagia, trismo, voz abafada, abaulamento do palato mole com desvio da úvula para o lado oposto",
    "Suspeita de abscesso versus flegmão (celulite periamigdaliana): a punção diagnóstica diferencia (pus = abscesso)",
    "Coleção confirmada por USG intraoral/transcervical ou TC"
  ],
  contraindicacoes: [
    "Via aérea instável ou paciente que não colabora (criança pequena): drenagem pela ORL, em geral sob anestesia no centro cirúrgico",
    "Suspeita de extensão para espaço parafaríngeo/retrofaríngeo ou pescoço: TC antes e ORL",
    "Trismo tão intenso que impede ver e alcançar o polo superior com segurança",
    "Coagulopatia grave ou anticoagulação plena (relativa: discutir com ORL)",
    "Massa pulsátil ou suspeita de aneurisma/malformação vascular"
  ],
  materiais: [
    "Paciente sentado em cadeira com apoio para a cabeça; foco de luz frontal",
    "Aspirador ligado com ponteira rígida (Yankauer) — obrigatório antes de começar",
    "Abaixador de língua (ou laringoscópio de lâmina curva para afastar a língua)",
    "Lidocaína spray 10% e lidocaína 1% ou 2% com vasoconstritor para infiltração",
    "Seringa de 10 mL com agulha 40 × 12 (18 G); agulha 30 × 8 ou longa para infiltração",
    "Protetor de profundidade: cortar a capa plástica da agulha deixando só cerca de 1 cm de ponta exposta",
    "Lâmina de bisturi nº 11 com cabo longo, com fita adesiva enrolada deixando cerca de 1 cm de lâmina livre (para incisão)",
    "Pinça hemostática curva (Kelly) longa",
    "Frasco/seringa estéril para cultura do aspirado",
    "Copo com SF 0,9% ou água para bochecho; cuba-rim; gazes",
    "Luvas, máscara, óculos de proteção (pus sob pressão espirra)",
    "Material de via aérea e oxigênio próximos"
  ],
  checagemAntes: [
    "Confirmar o lado e o diagnóstico: abaulamento do palato mole acima e lateral à amígdala, úvula desviada; diferenciar de flegmão (sem flutuação) e de mononucleose (amígdalas bilaterais, sem desvio de úvula)",
    "Avaliar via aérea: estridor, dispneia, salivação, SpO2; checar se o paciente consegue abrir a boca o suficiente",
    "Alergias (lidocaína, penicilina, látex)",
    "Uso de anticoagulante/antiagregante e história de sangramento",
    "Hidratação: muitos chegam desidratados por não engolir — acesso venoso e soro se necessário",
    "Analgesia prévia (dipirona IV ou opioide) ajuda a reduzir o trismo e a dor",
    "USG (transcervical ou intraoral) ou TC com contraste se dúvida, criança, extensão ou falha prévia",
    "Explicar o procedimento; consentimento verbal; criança pequena: ORL com sedação/anestesia"
  ],
  passos: [
    { etapa: "Preparo e anestesia", itens: [
      "Paciente sentado, cabeça apoiada, aspirador na mão do auxiliar ou ao alcance",
      "Analgesia sistêmica antes (ex.: dipirona 1 g IV; opioide se dor intensa)",
      "Anestesia tópica: lidocaína spray 10% no palato mole e pilar anterior do lado afetado (poucos jatos), aguardar 1–2 minutos",
      "Infiltrar 1–2 mL de lidocaína com vasoconstritor na mucosa sobre o ponto de maior abaulamento, superficial (submucosa); aspirar antes de injetar"
    ] },
    { etapa: "Pontos de referência", itens: [
      "Ponto de punção principal: polo superior — no cruzamento de uma linha horizontal na base da úvula com uma linha vertical ao longo do pilar anterior do lado afetado (ou no ponto de maior abaulamento acima da amígdala)",
      "A carótida interna fica posterolateral à amígdala: direcionar a agulha paralela ao plano sagital (reto para trás), nunca para fora (lateral)",
      "Profundidade máxima de cerca de 1 cm (por isso o protetor feito com a capa da agulha)"
    ] },
    { etapa: "Punção aspirativa (1ª escolha)", itens: [
      "Afastar a língua com o abaixador; introduzir a agulha 18 G no polo superior, aspirando continuamente",
      "Pus = abscesso confirmado: aspirar o máximo possível; enviar parte para Gram e cultura",
      "Sem pus no polo superior: tentar o polo médio e, se necessário, o inferior (cerca de 1 cm abaixo de cada ponto), sempre no plano sagital",
      "Sem pus nos três pontos: provável flegmão — tratar com antibiótico e reavaliar em 24 h (ou USG/TC se dúvida)"
    ] },
    { etapa: "Incisão e drenagem (se indicada)", itens: [
      "Indicar incisão se o pus reacumula logo, se a aspiração foi incompleta, abscesso grande ou recidiva após punção — ou conforme rotina da ORL",
      "Com a lâmina nº 11 protegida pela fita (cerca de 1 cm livre), fazer incisão de cerca de 1–1,5 cm na mucosa sobre o ponto de punção que drenou pus, no polo superior, de cima para baixo e paralela ao pilar anterior",
      "Abrir a cavidade com a pinça Kelly fechada introduzida delicadamente e aberta no sentido da incisão, sem aprofundar",
      "Aspirar o pus imediatamente com o Yankauer; pedir para o paciente cuspir e bochechar com SF"
    ] },
    { etapa: "Finalização", itens: [
      "Conferir hemostasia; pequeno sangramento cede com compressão por gaze montada em pinça",
      "Primeira dose do antibiótico (oral se engole bem; IV se não deglute) e analgesia",
      "Considerar corticoide em dose única (ex.: dexametasona) para dor e trismo — benefício pequeno e evidência limitada; evitar se dúvida diagnóstica com linfoma/mononucleose",
      "Testar a deglutição de líquidos antes da alta"
    ] }
  ],
  conferirDepois: [
    "Via aérea pérvia, sem sangramento ativo; SpO2 e sinais vitais",
    "Paciente consegue engolir líquidos e medicação oral (critério de alta); se não, internar com hidratação e antibiótico IV",
    "Aspirado enviado para cultura; registrar volume e aspecto",
    "Antibiótico prescrito (10–14 dias no total) e analgesia regular",
    "Retorno em 24–48 h ou contato com ORL; reaspiração se reacúmulo",
    "Encaminhar à ORL: recidiva, 2º episódio (avaliar amigdalectomia), falha da punção, criança, imunossuprimido, complicação"
  ],
  complicacoes: [
    "Punção sem pus: flegmão ou ponto errado — não insistir mais profundo nem lateral; USG/TC e antibiótico",
    "Punção de vaso (sangue vivo): retirar a agulha, comprimir com gaze montada; sangramento persistente ou pulsátil = ORL/cirurgia vascular de urgência",
    "Aspiração de pus ou sangue para a via aérea: paciente sentado, aspirar; por isso o aspirador deve estar pronto",
    "Reacúmulo do abscesso (10–15% após punção): nova punção ou incisão; ORL",
    "Reação vasovagal: deitar de lado com cabeça levemente elevada, monitorizar",
    "Extensão para espaços profundos do pescoço ou mediastino: TC, antibiótico IV amplo e ORL/cirurgia",
    "Síndrome de Lemierre (tromboflebite da jugular por Fusobacterium): febre persistente, dor cervical, embolia séptica pulmonar — internar, TC/USG Doppler"
  ],
  prescricao: {
    ambulatorial: "APÓS DRENAGEM DE ABSCESSO PERIAMIGDALIANO — ADULTO\nUSO ORAL\n1. Amoxicilina + clavulanato 875/125 mg --------------- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias (mínimo 10 dias).\n   Alergia à penicilina: Clindamicina 300 mg — tomar 1 cápsula de 6 em 6 horas por 10 a 14 dias.\n2. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas, de horário nos primeiros dias.\n3. Ibuprofeno 400 mg -------------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 4 dias, se dor.\n\nCUIDADOS\n4. Gargarejo/bochecho com água morna e sal ou soro fisiológico após as refeições.\n5. Dieta líquida/pastosa fria; muita água.\n\nCRIANÇA (por kg): amoxicilina + clavulanato 45 mg/kg/dia de amoxicilina divididos de 12/12 h (máx. 875 mg/dose) por 10–14 dias; alergia: clindamicina 30–40 mg/kg/dia divididos de 6/6 h ou 8/8 h (máx. 450 mg/dose); dipirona 15–25 mg/kg/dose de 6/6 h (máx. 1 g/dose).",
    hospitalar: "ABSCESSO PERIAMIGDALIANO — INTERNAÇÃO (não deglute, toxemia, via aérea, complicação)\n1. Dieta zero até avaliação da ORL; depois líquida/pastosa fria conforme aceitação.\n2. SF 0,9% ou Ringer lactato conforme hidratação (manutenção + déficit).\n3. Clindamicina 600 mg IV de 8 em 8 horas, diluída em 100 mL de SF 0,9%, infundir em 30 minutos (criança: 10–13 mg/kg/dose de 8/8 h, máx. 900 mg/dose).\n   OU Ceftriaxona 2 g IV 1 vez ao dia (criança 50–75 mg/kg/dia, máx. 2 g) + Metronidazol 500 mg IV de 8 em 8 horas (criança 10 mg/kg/dose de 8/8 h, máx. 500 mg) — frasco de 500 mg/100 mL, infundir em 30–60 min.\n   OU Ampicilina + sulbactam 3 g IV de 6 em 6 horas (criança: 200 mg/kg/dia de ampicilina divididos de 6/6 h, máx. 2 g de ampicilina/dose), diluir em 100 mL de SF 0,9%, infundir em 30 min.\n4. Dipirona 1 g IV de 6 em 6 horas (criança 15–25 mg/kg/dose, máx. 1 g); morfina se dor intensa.\n5. Considerar dexametasona dose única IV (decisão com ORL).\n6. Cabeceira elevada; oxímetro; aspirador à beira-leito.\n7. Cultura do aspirado; hemograma, PCR, creatinina; monoteste (mononucleose) se suspeita.\n8. Trocar para VO (amoxicilina-clavulanato ou clindamicina) quando afebril e deglutindo, completando 14 dias."
  },
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Febre, dor ou trismo sem melhora em 24–48 h após a drenagem", "Reavaliar: nova punção/incisão (reacúmulo) e TC de pescoço com contraste", "Causa mais comum de falha é drenagem incompleta, não resistência"],
        ["Falha do oral (amoxicilina-clavulanato)", "Internar e passar para clindamicina IV ou ceftriaxona + metronidazol IV", "Ajustar pela cultura do aspirado"],
        ["Alergia grave à penicilina", "Clindamicina VO ou IV", "Se resistência à clindamicina no antibiograma: discutir com infectologia (ex.: vancomicina + metronidazol)"],
        ["S. aureus resistente à oxacilina (MRSA) na cultura", "Vancomicina IV (internado); VO: clindamicina ou SMX-TMP conforme antibiograma, associando metronidazol para anaeróbios", "Raro no abscesso periamigdaliano; cobertura para estreptococo e anaeróbios deve ser mantida"],
        ["Sem melhora com antibiótico IV adequado", "ORL: drenagem sob anestesia ou amigdalectomia a quente; investigar Lemierre e abscesso profundo", "Infectologia se germe multirresistente"]
      ],
      nota: "Germes usuais: S. pyogenes, anaeróbios (Fusobacterium necrophorum), S. aureus e estreptococos do grupo anginosus. O esquema deve cobrir estreptococo e anaeróbios."
    }
  ],
  documentacao: "Procedimento: [punção aspirativa / incisão e drenagem] de abscesso periamigdaliano à [direita / esquerda].\nIndicação: [odinofagia, trismo, abaulamento de palato mole, desvio de úvula].\nVia aérea: [sem estridor, SpO2 [ ]%].\nAnestesia: lidocaína spray 10% + infiltração com lidocaína [ ]% com vasoconstritor, [ ] mL.\nPunção em polo [superior / médio / inferior], agulha 18 G com protetor de profundidade (1 cm), plano sagital.\nAspirado: [ ] mL de pus [espesso / fétido]; cultura [enviada / não].\n[Incisão de [ ] cm em polo superior com abertura romba].\nSangramento: [mínimo / descrever]. Intercorrências: [nenhuma].\nTolera líquidos: [sim / não].\nAntibiótico: [esquema, via]. Analgesia: [ ].\nDestino: [alta com retorno em 24–48 h / internação / ORL].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Tome o antibiótico até o fim, mesmo que melhore em poucos dias",
    "Prefira alimentos frios, líquidos e pastosos; beba bastante água",
    "Faça bochecho com água morna e sal depois das refeições",
    "Volte imediatamente se tiver falta de ar, barulho para respirar, sangramento pela boca, não conseguir engolir a saliva, inchaço no pescoço ou febre que não passa",
    "Volte em 1 a 2 dias para reavaliação; se tiver um segundo episódio, procure o otorrino para avaliar retirada das amígdalas"
  ],
  relacionadas: ["ivas-sinusite", "mononucleose", "escarlatina", "anestesia-local", "drenagem-abscesso", "sepse"],
  fontes: [
    "Ministério da Saúde — Protocolos da Atenção Básica / Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea (2013)",
    "IDSA — Clinical Practice Guideline for Group A Streptococcal Pharyngitis (2012)",
    "Klug TE et al. — Peritonsillar abscess: revisão de diagnóstico e manejo (2016)",
    "Roberts & Hedges' Clinical Procedures in Emergency Medicine, 7ª ed. (2019) — peritonsillar abscess drainage"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
