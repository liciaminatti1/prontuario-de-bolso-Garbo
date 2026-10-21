// Sangramento uterino anormal
registrarFicha({
  id: "sangramento-uterino-anormal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Sangramento uterino anormal (PALM-COEIN), inclusive sangramento agudo intenso",
  resumo: "Sangramento do corpo uterino anormal em volume, duração, frequência ou regularidade, em mulher não grávida. Classificação FIGO PALM-COEIN. Inclui manejo do sangramento agudo intenso (UBS/PS) e do sangramento menstrual intenso crônico.",
  palavrasChave: "sangramento uterino anormal sua hemorragia uterina disfuncional menorragia metrorragia sangramento menstrual intenso palm coein polipo adenomiose mioma leiomioma hiperplasia endometrio coagulopatia von willebrand anovulacao acido tranexamico medroxiprogesterona anticoncepcional diu levonorgestrel",
  critico: {
    tempo: "Beta-hCG e estabilidade",
    texto: "Excluir gravidez (ectópica, abortamento) e avaliar instabilidade hemodinâmica antes de tudo. Sangramento agudo intenso estável: anticoncepcional combinado 3×/dia ou medroxiprogesterona 3×/dia por 7 dias; ácido tranexâmico como alternativa ou adjuvante (cautela ao associar com estrogênio)."
  },
  alarmes: [
    "Instabilidade hemodinâmica: PAS < 90, FC > 100–120, síncope, palidez intensa",
    "Hb < 7 g/dL ou queda rápida; sangramento que encharca 1 absorvente por hora por várias horas",
    "Beta-hCG positivo com sangramento e dor (ectópica, abortamento)",
    "Sangramento pós-menopausa",
    "Sangramento pós-coito ou lesão visível no colo (câncer de colo)",
    "Sangramento de mucosas, equimoses, história familiar (coagulopatia)",
    "Febre e dor pélvica (endometrite, DIP, abortamento infectado)"
  ],
  condutaInicial: [
    "Sinais vitais, estimar perda (absorventes/h, coágulos), Hb",
    "Beta-hCG em toda mulher em idade reprodutiva",
    "Exame especular: origem do sangramento (colo, vagina, uretra, ânus), lesões, corpo estranho, pólipo",
    "Instável: 2 acessos, cristaloide, tipagem e prova cruzada, transfusão, ácido tranexâmico IV e ginecologia de urgência",
    "Estável com sangramento agudo intenso: tratamento hormonal em altas doses por 7 dias; ácido tranexâmico como alternativa ou adjuvante (cautela com estrogênio)",
    "Investigar a causa (PALM-COEIN): USG transvaginal, TSH, coagulograma se suspeita, biópsia endometrial se indicada",
    "Tratar anemia (ferro) e planejar tratamento de manutenção"
  ],
  fataisExcluir: [
    "Gravidez ectópica rota / abortamento com hemorragia",
    "Choque hemorrágico",
    "Câncer de endométrio ou de colo",
    "Coagulopatia (von Willebrand, plaquetopenia, anticoagulante)",
    "Doença trofoblástica gestacional"
  ],
  proximaDecisao: "Sangramento controlado em 24–48 h → manter esquema por 7 dias e depois manutenção (anticoncepcional, progestogênio, SIU-LNG). Sem resposta em 24 h, instabilidade ou Hb em queda → hospital (curetagem/AMIU, tamponamento com balão, embolização). Crônico: lesão estrutural (pólipo, mioma submucoso) → ginecologia; sem lesão → tratamento clínico na UBS.",
  clinica: {
    anamnese: [
      "Padrão: volume (absorventes, coágulos, extravasamento noturno), duração, frequência, intermenstrual, pós-coito",
      "DUM, possibilidade de gravidez, método contraceptivo (DIU, implante, AMPD, pílula esquecida)",
      "Idade e fase reprodutiva (adolescente, menacme, perimenopausa, pós-menopausa)",
      "Sintomas de anemia: cansaço, dispneia, tontura",
      "Rastreio de coagulopatia: sangramento intenso desde a menarca, hemorragia pós-parto ou cirúrgica, epistaxe, gengivorragia, equimoses frequentes, história familiar",
      "Anticoagulantes, antiagregantes, ISRS, tamoxifeno, fitoterápicos",
      "Sintomas de tireoide, hiperprolactinemia, SOP; peso",
      "Fatores de risco para câncer de endométrio: obesidade, anovulação crônica, DM, nuliparidade, tamoxifeno, síndrome de Lynch"
    ],
    exameFisico: [
      "PA, FC, mucosas, sinais de choque",
      "IMC, sinais de hiperandrogenismo, tireoide, equimoses/petéquias",
      "Abdome: massa, dor",
      "Exame especular (colo, pólipo, lesão, corpo estranho, fio do DIU)",
      "Toque bimanual: volume e contorno uterino (mioma, adenomiose), anexos"
    ],
    diferenciais: [
      { dx: "Pólipo (P)", pista: "Sangramento intermenstrual; USG com imagem endometrial focal" },
      { dx: "Adenomiose (A)", pista: "Dismenorreia, útero aumentado e amolecido, > 35 anos" },
      { dx: "Leiomioma (L)", pista: "Útero aumentado e irregular; submucoso causa fluxo intenso" },
      { dx: "Malignidade/hiperplasia (M)", pista: "≥ 45 anos, obesidade, anovulação, pós-menopausa; endométrio espesso" },
      { dx: "Coagulopatia (C)", pista: "Fluxo intenso desde a menarca, outros sangramentos" },
      { dx: "Disfunção ovulatória (O)", pista: "Ciclos irregulares, extremos de idade, SOP, tireoide, prolactina" },
      { dx: "Endometrial (E)", pista: "Ciclos regulares, fluxo intenso, sem outra causa" },
      { dx: "Iatrogênica (I)", pista: "Anticoagulante, contraceptivo hormonal, DIU, tamoxifeno" },
      { dx: "Não classificada (N)", pista: "Istmocele, malformação arteriovenosa, endometrite crônica" }
    ],
    gravidade: [
      "Sangramento agudo intenso: episódio que exige intervenção imediata para evitar mais perda",
      "Instabilidade hemodinâmica ou Hb < 7 g/dL: hospital, considerar transfusão",
      "Sangramento menstrual intenso crônico: perda excessiva que interfere na qualidade de vida, na maior parte dos últimos 6 meses",
      "Biópsia endometrial indicada: ≥ 45 anos com SUA; < 45 anos com exposição estrogênica sem oposição (obesidade, SOP), falha do tratamento clínico ou síndrome de Lynch"
    ]
  },
  exames: [
    {
      nome: "Exames iniciais",
      pedido: "Beta-hCG. Hemograma completo. Ferritina. TSH.",
      porQue: "Excluir gravidez, avaliar anemia e disfunção tireoidiana.",
      esperar: "—",
      interpretacao: "Hb < 7 g/dL ou sintomas de anemia grave → hospital. Ferritina baixa → ferro.",
      limitacoes: "—"
    },
    {
      nome: "Coagulograma e von Willebrand",
      pedido: "Tempo de protrombina (TP/INR). TTPa. Contagem de plaquetas. Fibrinogênio. Se triagem positiva: fator de von Willebrand antigênico e atividade, fator VIII.",
      porQue: "Coagulopatia está presente em parte relevante das adolescentes e mulheres com fluxo intenso desde a menarca.",
      esperar: "—",
      interpretacao: "Alterado → hematologia. Dosar fator de von Willebrand antes de iniciar estrogênio (o estrogênio eleva os níveis).",
      limitacoes: "Triagem positiva: fluxo intenso desde a menarca, ou HPP/sangramento cirúrgico, ou ≥ 2 de: epistaxe frequente, gengivorragia, equimoses, história familiar (ACOG)."
    },
    {
      nome: "Ultrassonografia pélvica transvaginal",
      pedido: "Ultrassonografia pélvica transvaginal (útero, endométrio e anexos).",
      porQue: "Pólipos, miomas, adenomiose, espessura endometrial.",
      esperar: "Pós-menopausa: endométrio ≤ 4 mm.",
      interpretacao: "Imagem focal endometrial → histeroscopia. Mioma submucoso → ginecologia. Pós-menopausa > 4 mm → biópsia.",
      limitacoes: "Na menacme, espessura endometrial isolada não define biópsia. Via abdominal em virgens."
    },
    {
      nome: "Avaliação endometrial",
      pedido: "Biópsia endometrial (aspirativa ou por histeroscopia) — encaminhar à ginecologia.",
      porQue: "Excluir hiperplasia e câncer.",
      esperar: "—",
      interpretacao: "Hiperplasia atípica ou câncer → oncologia ginecológica.",
      limitacoes: "Indicações na aba Gravidade."
    },
    {
      nome: "Rastreio do colo",
      pedido: "Teste de DNA-HPV ou citologia oncótica (conforme programa local), se em atraso. Biópsia de lesão visível.",
      porQue: "Lesão de colo pode simular SUA.",
      esperar: "—",
      interpretacao: "Lesão visível suspeita → colposcopia/biópsia independentemente do rastreio.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Anticoncepcional oral combinado monofásico (etinilestradiol 30 mcg + levonorgestrel 0,15 mg) — sangramento agudo",
      linha: "l1",
      dose: "1 comprimido 3 vezes ao dia por 7 dias; depois 1 comprimido ao dia",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "7 dias e depois manutenção por ≥ 3 meses",
      monitorizacao: "Sangramento, náusea (antiemético se necessário)",
      contraindicacoes: "Categoria 4 do MEC: TEV, trombofilia, enxaqueca com aura, ≥ 35 anos fumante, HAS grave, câncer de mama",
      ajustes: "ACOG: 35 mcg 3×/dia por 7 dias. Dosar von Willebrand antes se suspeita"
    },
    {
      droga: "Acetato de medroxiprogesterona — sangramento agudo",
      linha: "l1",
      dose: "20 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "7 dias; depois manutenção (ex.: 10 mg/dia 10–14 dias/mês ou contínuo)",
      monitorizacao: "Sangramento",
      contraindicacoes: "Gravidez, câncer de mama",
      ajustes: "Opção quando estrogênio é contraindicado"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "l1",
      dose: "Agudo IV: 10 mg/kg (máx. 600 mg/dose) · VO: 1 g (4 comprimidos de 250 mg)",
      via: "IV ou VO",
      intervalo: "8/8 h",
      duracao: "Até 5 dias (agudo) · Crônico: durante a menstruação, até 5 dias por ciclo",
      monitorizacao: "Sangramento; sinais de trombose",
      contraindicacoes: "TEV ativo ou prévio, trombofilia, uso de anticoncepcional combinado (cautela), insuficiência renal grave (ajustar)",
      ajustes: "IV: ampola 250 mg/5 mL (50 mg/mL); diluir em 100 mL de SF 0,9% e infundir em 10–15 min. Não hormonal; não interfere na fertilidade"
    },
    {
      droga: "SIU de levonorgestrel 52 mg (sangramento menstrual intenso crônico)",
      linha: "l1",
      dose: "1 dispositivo",
      via: "Intrauterina",
      intervalo: "—",
      duracao: "5 anos para controle do fluxo",
      monitorizacao: "Revisão em 4–12 semanas",
      contraindicacoes: "Cavidade distorcida (mioma submucoso), gravidez, DIP atual",
      ajustes: "Tratamento clínico mais eficaz para SMI sem lesão estrutural (NICE). Disponibilidade no SUS variável"
    },
    {
      droga: "AINE (ácido mefenâmico ou ibuprofeno) — crônico",
      linha: "alt",
      dose: "Ácido mefenâmico 500 mg · Ibuprofeno 400–600 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "Durante a menstruação (até 5 dias)",
      monitorizacao: "Dor epigástrica",
      contraindicacoes: "Úlcera, DRC, coagulopatia, plaquetopenia",
      ajustes: "Reduz o fluxo em parte e a cólica"
    },
    {
      droga: "AMPD 150 mg IM trimestral / progestogênio oral contínuo",
      linha: "alt",
      dose: "AMPD 150 mg a cada 3 meses · Progestogênio oral cíclico longo (NICE: noretisterona 15 mg/dia do 5º ao 26º dia; verificar disponibilidade da apresentação de 5 mg no Brasil)",
      via: "IM · VO",
      intervalo: "—",
      duracao: "Manutenção",
      monitorizacao: "Sangramento irregular",
      contraindicacoes: "Câncer de mama",
      ajustes: "Alternativas quando estrogênio contraindicado e SIU indisponível"
    },
    {
      droga: "Sulfato ferroso",
      linha: "adj",
      dose: "80–120 mg de ferro elementar ao dia (2–3 comprimidos de 40 mg) em tomada única",
      via: "VO",
      intervalo: "1×/dia ou em dias alternados (melhor absorção)",
      duracao: "3 meses após normalizar a Hb",
      monitorizacao: "Hb em 4 semanas; ferritina",
      contraindicacoes: "Hemocromatose",
      ajustes: "Intolerância ou anemia grave sem sangramento ativo: ferro IV (sacarato de hidróxido férrico) em serviço de referência"
    },
    {
      droga: "Estrogênio conjugado endovenoso",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Formulação IV (25 mg) recomendada pelo ACOG não está disponível no Brasil",
      ajustes: "Usar anticoncepcional combinado em dose alta ou progestogênio em dose alta"
    }
  ],
  destino: {
    agora: [
      "Instável: estabilizar e transferir/encaminhar à emergência ginecológica",
      "Estável: iniciar esquema hormonal em dose alta (± ácido tranexâmico) e solicitar exames"
    ],
    reavaliar: [
      "Sangramento agudo: em 24–48 h (redução do fluxo) e ao fim dos 7 dias",
      "Crônico: 3 meses após iniciar o tratamento de manutenção, com hemograma"
    ],
    alta: [
      "Sangramento em redução, Hb estável ≥ 8–9 g/dL sem sintomas, com tratamento e retorno garantidos"
    ],
    observacao: [
      "Sangramento intenso estável com Hb limítrofe: observar resposta ao tratamento nas primeiras horas no PS"
    ],
    internacao: [
      "Instabilidade hemodinâmica, Hb < 7 g/dL, sangramento que não cede em 24 h de tratamento clínico",
      "Opções hospitalares: transfusão, curetagem/AMIU (com histopatológico), tamponamento com balão (sonda Foley), embolização, histerectomia"
    ],
    transferencia: [
      "Ginecologia: lesão estrutural (pólipo, mioma submucoso), indicação de biópsia, falha do tratamento clínico, sangramento pós-menopausa",
      "Hematologia: coagulopatia confirmada ou provável"
    ]
  },
  prescricao: {
    ambulatorial: "SANGRAMENTO AGUDO INTENSO, ESTÁVEL (beta-hCG negativo)\nUSO ORAL\n1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg ---- 4 cartelas\n   Tomar 1 comprimido de 8 em 8 horas por 7 dias (usa a 1ª cartela inteira); depois iniciar nova cartela e tomar 1 comprimido ao dia por pelo menos 3 meses.\n   OU (se estrogênio contraindicado) Acetato de medroxiprogesterona 10 mg --- 42 comprimidos\n   Tomar 2 comprimidos (20 mg) de 8 em 8 horas por 7 dias.\n2. Ácido tranexâmico 250 mg ------------------------- 60 comprimidos\n   Tomar 4 comprimidos (1 g) de 8 em 8 horas por até 5 dias. (Cautela se associado ao anticoncepcional combinado: risco trombótico teórico; não usar se TEV prévio.)\n3. Metoclopramida 10 mg ----------------------------- 10 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas se enjoo.\n4. Sulfato ferroso 40 mg de ferro elementar -------- 180 comprimidos\n   Tomar 2 comprimidos juntos (80 mg de ferro elementar) 1 vez ao dia, 30 minutos antes do almoço, com suco cítrico, por 3 meses. Se enjoo, tomar em dias alternados.\n\nSANGRAMENTO MENSTRUAL INTENSO CRÔNICO (sem lesão estrutural)\n5. Ácido tranexâmico 250 mg ------------------------- 60 comprimidos\n   Tomar 4 comprimidos (1 g) de 8 em 8 horas nos dias de maior fluxo, por até 5 dias a cada menstruação.\n6. Ácido mefenâmico 500 mg -------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas durante a menstruação, por até 5 dias.",
    hospitalar: "SANGRAMENTO UTERINO AGUDO INTENSO — SALA DE EMERGÊNCIA (peso: ___ kg)\n1. Dieta zero se instável ou possibilidade de procedimento.\n2. Monitor, oximetria, 2 acessos venosos calibrosos; decúbito dorsal; O₂ se SpO₂ < 94%.\n3. Coletar: hemograma, tipagem ABO-Rh e prova cruzada, beta-hCG, TP/INR, TTPa, fibrinogênio, plaquetas, creatinina.\n4. Ringer lactato ou SF 0,9% 500–1.000 mL IV rápido se hipotensa; reavaliar após cada alíquota.\n5. Concentrado de hemácias se instabilidade persistente ou Hb < 7 g/dL.\n6. Ácido tranexâmico 10 mg/kg (máx. 600 mg) + SF 0,9% 100 mL IV em 10–15 min de 8/8 h (ampola 250 mg/5 mL; 600 mg = 12 mL).\n7. Se estável e sem contraindicação: levonorgestrel 0,15 mg + etinilestradiol 0,03 mg 1 comprimido VO de 8/8 h por 7 dias (ou acetato de medroxiprogesterona 20 mg VO de 8/8 h).\n8. Metoclopramida 10 mg + SF 0,9% 20 mL IV lento de 8/8 h se náusea.\n9. Sem resposta em 24 h ou instável: ginecologia — tamponamento com sonda Foley (balão com 30 mL), AMIU/curetagem com histopatológico, embolização ou cirurgia.\n10. Controles: sinais vitais de 1/1 h até estabilizar; contagem de absorventes; diurese; Hb de 6/6 h a 12/12 h."
  },
  orientacoesRetorno: [
    "Tomar os comprimidos no horário certo; o sangramento deve diminuir em 1–2 dias",
    "Enjoo é comum com a dose alta de hormônio: pode tomar com comida e usar o remédio para enjoo",
    "Anotar quantos absorventes usa por dia e se há coágulos",
    "Voltar imediatamente se: encharcar 1 absorvente por hora por 2 horas seguidas, tontura ou desmaio, falta de ar, dor forte na barriga, febre",
    "Fazer os exames pedidos (ultrassom e sangue) e retornar com eles",
    "Retornar ao fim dos 7 dias e depois em 3 meses; continuar o ferro até a equipe mandar parar"
  ],
  tabelas: [
    {
      titulo: "Classificação FIGO PALM-COEIN",
      colunas: ["Estruturais (PALM)", "Não estruturais (COEIN)"],
      linhas: [
        ["P — Pólipo", "C — Coagulopatia"],
        ["A — Adenomiose", "O — Ovulatória (disfunção)"],
        ["L — Leiomioma (submucoso ou outro)", "E — Endometrial"],
        ["M — Malignidade e hiperplasia", "I — Iatrogênica"],
        ["—", "N — Não classificada"]
      ],
      nota: "FIGO — Sistemas 1 e 2 de sintomas e causas de SUA nos anos reprodutivos (revisão 2018)."
    }
  ],
  fontes: [
    "FIGO — Classification systems for abnormal uterine bleeding in the reproductive years: 2018 revisions (Munro et al.)",
    "ACOG — Committee Opinion nº 557: Management of acute abnormal uterine bleeding in nonpregnant reproductive-aged women (2013, reafirmado)",
    "ACOG — Committee Opinion nº 785: Screening and management of bleeding disorders in adolescents with heavy menstrual bleeding (2019)",
    "NICE — NG88: Heavy menstrual bleeding: assessment and management (atualizado 2021)",
    "FEBRASGO — Sangramento uterino anormal (Série Orientações e Recomendações FEBRASGO)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
