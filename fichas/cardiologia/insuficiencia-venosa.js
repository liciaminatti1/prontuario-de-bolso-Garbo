// Insuficiência venosa crônica e varizes
registrarFicha({
  id: "insuficiencia-venosa",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Insuficiência venosa crônica e varizes de membros inferiores (CEAP)",
  resumo: "Doença venosa crônica: telangiectasias, varizes, edema, alterações de pele e úlcera, com peso, dor, cansaço e câimbras nas pernas que pioram em pé e no fim do dia. Classificar pela CEAP; tratar com medidas gerais, compressão elástica, flebotônico e encaminhar à vascular nos casos avançados.",
  palavrasChave: "insuficiencia venosa cronica varizes varicosas telangiectasia vasinhos ceap edema perna pesada ulcera venosa dermatite ocre lipodermatoesclerose meia elastica compressao diosmina hesperidina castanha da india pentoxifilina tromboflebite varicorragia",
  critico: {
    tempo: "Perna inchada e dolorosa unilateral: TVP",
    texto: "Edema unilateral de início recente, dor na panturrilha ou empastamento sugerem trombose venosa profunda: aplicar Wells e solicitar doppler venoso com urgência, não tratar como varizes."
  },
  alarmes: [
    "Edema unilateral agudo, dor e empastamento da panturrilha (TVP)",
    "Cordão doloroso, vermelho e endurecido sobre veia superficial (tromboflebite), sobretudo na coxa próximo à junção safeno-femoral",
    "Sangramento de variz (varicorragia): elevar a perna e comprimir; pode ser volumoso",
    "Úlcera com pulsos ausentes, dor em repouso ou ITB < 0,9 (componente arterial: cuidado com compressão)",
    "Úlcera atípica, que não cicatriza em 3 meses ou com bordas vegetantes (biópsia: carcinoma)",
    "Celulite ou erisipela em perna com úlcera ou edema crônico"
  ],
  condutaInicial: [
    "Anamnese de sintomas e exame em pé: telangiectasias, varizes, edema, alterações de pele, úlcera",
    "Classificar o C da CEAP (C0–C6) e registrar",
    "Palpar pulsos; se ausentes, diabético ou úlcera: ITB antes de prescrever compressão",
    "Medidas gerais: caminhar, elevar as pernas, perder peso, evitar ficar muito tempo parado em pé ou sentado",
    "Compressão elástica graduada nos sintomáticos e em C3–C6 (média ou alta compressão), se perfusão adequada",
    "Flebotônico (diosmina + hesperidina) para dor, peso e edema, se disponível",
    "Pele: hidratação diária; corticoide tópico em eczema de estase; cuidado da úlcera com compressão",
    "Encaminhar à cirurgia vascular conforme a classe e sintomas"
  ],
  fataisExcluir: [
    "Trombose venosa profunda",
    "Tromboflebite superficial próxima à junção safeno-femoral ou safeno-poplítea (risco de extensão para TVP)",
    "Doença arterial periférica associada (compressão pode causar necrose)",
    "Erisipela/celulite",
    "Edema por insuficiência cardíaca, renal, hepática ou medicamentoso (anlodipino) — não é venoso"
  ],
  proximaDecisao: "C2 sintomático com refluxo ou C4–C6 → doppler venoso e cirurgia vascular para avaliar tratamento intervencionista (endotermoablação, cirurgia, espuma). C1 e C2 pouco sintomáticos → medidas gerais e compressão. Úlcera (C6) → compressão forte se ITB adequado + curativo + encaminhamento.",
  clinica: {
    anamnese: [
      "Peso, dor, cansaço, queimação, câimbras noturnas, prurido; piora em pé e no calor, melhora com elevação",
      "Tempo de evolução, gestações, história familiar, ortostatismo prolongado no trabalho, obesidade",
      "TVP prévia (síndrome pós-trombótica), trauma ou cirurgia de membro",
      "Sangramento de variz, tromboflebite prévia, úlcera prévia",
      "Claudicação (doença arterial), diabetes, tabagismo",
      "Medicações que causam edema: anlodipino, nifedipino, pregabalina, corticoide, AINE"
    ],
    exameFisico: [
      "Examinar em pé, com boa luz, os dois membros inteiros",
      "Telangiectasias (< 1 mm), veias reticulares (1–3 mm), varizes (≥ 3 mm)",
      "Edema (cacifo), hiperpigmentação ocre, eczema, lipodermatoesclerose, atrofia branca, corona flebectásica no pé",
      "Úlcera: localização (perimaleolar medial é típica), tamanho, leito, bordas, secreção",
      "Pulsos pediosos e tibiais posteriores; ITB com doppler se alterados",
      "Panturrilha: assimetria, empastamento (TVP)"
    ],
    diferenciais: [
      { dx: "TVP aguda", pista: "Edema unilateral recente, dor; Wells e doppler" },
      { dx: "Linfedema", pista: "Edema que acomete dorso do pé e dedos (sinal de Stemmer), não melhora bem com elevação" },
      { dx: "Lipedema", pista: "Mulher, aumento simétrico de gordura em pernas poupando os pés, dor ao toque" },
      { dx: "Edema sistêmico (IC, DRC, cirrose, hipoalbuminemia, drogas)", pista: "Bilateral, outros sinais da doença de base" },
      { dx: "Úlcera arterial, neuropática, hipertensiva (Martorell), pioderma, neoplásica", pista: "Local, dor, pulsos, aspecto das bordas" }
    ],
    gravidade: [
      "CEAP clínico (2020): C0 sem sinais · C1 telangiectasias ou veias reticulares · C2 varizes (C2r recorrentes) · C3 edema",
      "C4 alterações de pele: C4a pigmentação ou eczema · C4b lipodermatoesclerose ou atrofia branca · C4c corona flebectásica",
      "C5 úlcera cicatrizada · C6 úlcera ativa (C6r recorrente)",
      "Acrescentar s (sintomático) ou a (assintomático): ex. C2s",
      "Gravidade aumenta de C4 a C6 (doença avançada, risco de úlcera)"
    ]
  },
  exames: [
    {
      nome: "Ultrassonografia doppler venoso (ecodoppler)",
      pedido: "Ultrassonografia com doppler venoso de membro inferior ___ (direito/esquerdo/bilateral), sistema superficial e profundo, com pesquisa de refluxo. HD: insuficiência venosa crônica CEAP C__.",
      porQue: "Mapear refluxo (safenas, perfurantes) e obstrução antes de intervenção; excluir TVP.",
      esperar: "Refluxo em safena magna ou parva; sistema profundo pérvio.",
      interpretacao: "Refluxo patológico em safena com sintomas → candidato a tratamento intervencionista. Sinais de trombose antiga → síndrome pós-trombótica.",
      limitacoes: "Não é necessário para C1 ou C2 assintomático sem plano de intervenção. Suspeita de TVP aguda: pedir com urgência."
    },
    {
      nome: "Índice tornozelo-braquial (ITB)",
      pedido: "Índice tornozelo-braquial com doppler bilateral.",
      porQue: "Garantir perfusão antes de compressão forte, sobretudo em úlcera, diabéticos, idosos e pulsos fracos.",
      esperar: "0,9–1,3.",
      interpretacao: "≥ 0,8 (até 1,3): compressão plena é segura na maioria das diretrizes. < 0,8 ou < 0,9: doença arterial associada → só compressão modificada (reduzida) com orientação da vascular. ESVS 2022: em úlcera mista, compressão só se a pressão sistólica no tornozelo for > 60 mmHg; abaixo disso, não comprimir e encaminhar. > 1,3: artérias incompressíveis (calcificação), resultado não confiável.",
      limitacoes: "Diabéticos e DRC podem ter ITB falsamente normal."
    },
    {
      nome: "Exames para edema de outra causa",
      pedido: "Creatinina, albumina, TSH, urina tipo 1 (proteinúria), TGO, TGP; BNP ou ecocardiograma se suspeita de IC.",
      porQue: "Edema bilateral sem varizes evidentes ou desproporcional.",
      esperar: "Normais na doença venosa.",
      interpretacao: "Alterações apontam causa sistêmica.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Meia elástica de compressão graduada",
      linha: "l1",
      dose: "Sintomas e C2–C3: 15–20 ou 20–30 mmHg (até o joelho); C4–C5: 20–30 ou 30–40 mmHg; úlcera ativa C6: ≥ 40 mmHg no tornozelo (bandagem multicamada, inelástica ou meia/kit de alta compressão)",
      via: "Tópica (vestir pela manhã, antes de levantar)",
      intervalo: "Durante o dia; retirar para dormir",
      duracao: "Contínuo; trocar a meia a cada 4–6 meses",
      monitorizacao: "Pele, adesão, tamanho correto (medir tornozelo e panturrilha pela manhã)",
      contraindicacoes: "Doença arterial grave (pressão sistólica de tornozelo ≤ 60 mmHg, isquemia crítica), IC descompensada, neuropatia grave sem vigilância, dermatite aguda extensa",
      ajustes: "ITB < 0,8: só compressão modificada (reduzida) com orientação da vascular. Meia de pressão menor bem usada é melhor que meia forte não usada"
    },
    {
      droga: "Diosmina + hesperidina (fração flavonoica purificada micronizada)",
      linha: "l1",
      dose: "1.000 mg/dia (900 mg + 100 mg)",
      via: "VO",
      intervalo: "1 vez ao dia (ou 500 mg 12/12 h)",
      duracao: "2–3 meses e reavaliar; pode ser mantido se benefício",
      monitorizacao: "Sintomas e edema",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Reduz dor, peso, câimbras e edema (ESVS 2022). Adjuvante na úlcera venosa. Não disponível no SUS; alternativa: extrato de castanha-da-índia (Aesculus hippocastanum) conforme bula"
    },
    {
      droga: "Pentoxifilina (úlcera venosa)",
      linha: "adj",
      dose: "400 mg",
      via: "VO",
      intervalo: "De 8 em 8 horas",
      duracao: "Até a cicatrização da úlcera (avaliar em 2–3 meses)",
      monitorizacao: "Náusea, tontura, sangramento",
      contraindicacoes: "Hemorragia recente, AVC hemorrágico, IAM recente",
      ajustes: "Associar à compressão; acelera cicatrização (ESVS 2022). Reduzir dose se ClCr < 30"
    },
    {
      droga: "Corticoide tópico (eczema de estase)",
      linha: "adj",
      dose: "Dexametasona creme 0,1% (ou hidrocortisona 1%)",
      via: "Tópica",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "7–14 dias",
      monitorizacao: "Atrofia de pele",
      contraindicacoes: "Infecção cutânea, úlcera aberta",
      ajustes: "Hidratante (ureia 10% ou óleo/creme neutro) todos os dias na pele íntegra"
    },
    {
      droga: "Tromboflebite superficial",
      linha: "adj",
      dose: "Calor local, AINE oral por 7–10 dias, meia compressiva. Fazer doppler. Trombo ≥ 5 cm e a > 3 cm da junção safeno-femoral: fondaparinux 2,5 mg SC 1×/dia por 45 dias (alternativa: enoxaparina 40 mg SC 1×/dia). A ≤ 3 cm da junção: anticoagulação em dose terapêutica, como TVP",
      via: "VO/SC",
      intervalo: "Conforme droga",
      duracao: "Conforme extensão",
      monitorizacao: "Extensão do cordão, sinais de TVP",
      contraindicacoes: "Sangramento",
      ajustes: "Tromboflebite próxima à junção = tratar como TVP"
    },
    {
      droga: "Diurético para edema venoso",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não trata a causa e causa distúrbios eletrolíticos",
      ajustes: "Não usar para edema puramente venoso"
    }
  ],
  destino: {
    agora: [
      "Medidas gerais, compressão e flebotônico na UBS",
      "Curativo de úlcera venosa com compressão na UBS"
    ],
    reavaliar: [
      "Em 2–3 meses após início do tratamento",
      "Úlcera: semanal (medir área)"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Celulite extensa com sinais sistêmicos; TVP com critérios de internação (via PS)"
    ],
    transferencia: [
      "Cirurgia vascular eletiva: C2 sintomático que não melhora com tratamento clínico, C4–C6, tromboflebite de repetição, varicorragia prévia, úlcera que não cicatriza em 3 meses ou recorrente",
      "Cirurgia vascular com urgência: úlcera com isquemia (ITB baixo), tromboflebite próxima à junção safeno-femoral",
      "PS: suspeita de TVP sem doppler disponível no dia, varicorragia volumosa"
    ]
  },
  prescricao: {
    ambulatorial: "INSUFICIÊNCIA VENOSA CRÔNICA\n\nORIENTAÇÕES / USO EXTERNO\n1. Meia elástica de compressão graduada até o joelho, ___ mmHg (sintomas/C2–C3: 20–30 mmHg; C4–C5: 30–40 mmHg), tamanho conforme medidas do tornozelo e da panturrilha ------ 1 par\n   Vestir pela manhã, ao levantar, e retirar para dormir. Trocar a cada 4–6 meses.\n2. Elevar as pernas acima do nível do coração por 30 minutos, 3 a 4 vezes ao dia. Caminhar diariamente. Exercício da panturrilha (ficar na ponta dos pés) várias vezes ao dia.\n3. Creme hidratante (ureia 10% ou creme neutro) --- 1 frasco\n   Aplicar nas pernas 1 vez ao dia, fora de feridas.\n\nUSO ORAL\n4. Diosmina 900 mg + hesperidina 100 mg ----------- 60 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 60 dias.\n\nSE ECZEMA DE ESTASE (USO TÓPICO)\n5. Dexametasona creme 0,1% ------------------------ 1 bisnaga\n   Aplicar fina camada na área avermelhada e com coceira 2 vezes ao dia por 10 dias.\n\nSE ÚLCERA VENOSA (ITB ≥ 0,8; se menor, compressão só com orientação da vascular)\n6. Curativo na UBS com SF 0,9% e cobertura conforme exsudato + bandagem compressiva (multicamada ou bota de Unna), trocar conforme protocolo.\n7. Pentoxifilina 400 mg --------------------------- 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 30 dias (renovar até cicatrizar).\n\nSE SANGRAMENTO DE VARIZ: deitar, elevar a perna e comprimir o local com pano limpo por 10 minutos; procurar atendimento.\n\nPEDIDO DE EXAMES\nUltrassonografia com doppler venoso de membros inferiores com pesquisa de refluxo (C2 sintomático, C4–C6 ou plano de intervenção). Índice tornozelo-braquial se pulsos fracos, diabetes ou úlcera."
  },
  orientacoesRetorno: [
    "Varizes não têm cura com remédio; meia elástica, caminhada e elevar as pernas aliviam e evitam complicações",
    "Use a meia todos os dias, desde a manhã; ela deve apertar mais no tornozelo",
    "Evite ficar muito tempo parado em pé ou sentado; mexa os pés e caminhe",
    "Hidrate a pele das pernas e evite coçar e machucar",
    "Volte imediatamente se: perna inchada de um lado só, dor forte na panturrilha, falta de ar ou dor no peito, sangramento de variz, vermelhidão com febre",
    "Retorno em 2–3 meses para avaliar a resposta; ferida na perna: curativo e revisão semanal na UBS"
  ],
  tabelas: [
    {
      titulo: "CEAP clínico (revisão 2020) e conduta na UBS",
      colunas: ["Classe", "Achado", "Conduta"],
      linhas: [
        ["C0–C1", "Sem sinais / telangiectasias e veias reticulares", "Medidas gerais; tratamento estético não é prioridade do SUS"],
        ["C2", "Varizes ≥ 3 mm", "Medidas gerais, compressão se sintomas; vascular se sintomático refratário"],
        ["C3", "Edema", "Compressão, flebotônico; excluir causa sistêmica"],
        ["C4 (a, b, c)", "Pigmentação/eczema, lipodermatoesclerose/atrofia branca, corona flebectásica", "Compressão, cuidado de pele, vascular"],
        ["C5–C6", "Úlcera cicatrizada / ativa", "Compressão forte (se ITB adequado), curativo, vascular"]
      ],
      nota: "Acrescentar 's' (sintomático) ou 'a' (assintomático) e 'r' (recorrente) quando aplicável."
    }
  ],
  fontes: [
    "ESVS — Clinical Practice Guidelines on the Management of Chronic Venous Disease of the Lower Limbs (Eur J Vasc Endovasc Surg, 2022)",
    "SVS/AVF/AVLS — Clinical practice guidelines for varicose veins of the lower extremities (2022–2023) e CEAP revisada (2020)",
    "SBACV — Diretrizes de doença venosa crônica (versão vigente)",
    "Ministério da Saúde — Cadernos de Atenção Básica / protocolos de feridas e úlceras de perna (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
