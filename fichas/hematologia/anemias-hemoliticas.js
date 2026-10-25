// Anemias hemolíticas: investigação, AHAI, esferocitose, G6PD, microangiopatia
registrarFicha({
  id: "anemias-hemoliticas",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Anemias hemolíticas: investigação, AHAI, esferocitose e deficiência de G6PD",
  resumo: "Anemia com reticulócitos altos, LDH e bilirrubina indireta elevados e haptoglobina baixa. Ficha para confirmar hemólise, separar imune (Coombs direto positivo) de não imune, reconhecer microangiopatia (urgência) e conduzir AHAI, esferocitose hereditária e deficiência de G6PD.",
  palavrasChave: "anemia hemolitica hemolise ahai autoimune coombs direto teste antiglobulina direto anticorpo quente frio crioaglutinina esferocitose hereditaria esferocitos fragilidade osmotica g6pd glicose 6 fosfato desidrogenase favismo primaquina dapsona rasburicase azul de metileno nitrofurantoina hemoglobinuria hpn hemoglobinuria paroxistica noturna esquizocitos microangiopatica ldh haptoglobina bilirrubina indireta reticulocitos esplenectomia prednisona rituximabe",
  critico: {
    tempo: "Esquizócitos: pensar PTT/SHU já",
    texto: "Hemólise com Coombs negativo, esquizócitos e plaquetopenia = microangiopatia trombótica: ficha trombocitopenia (PTT) ou sindrome-hemolitico-uremica. Hemólise autoimune com Hb caindo rápido: corticoide no mesmo dia e não negar transfusão por prova cruzada incompatível."
  },
  alarmes: [
    "Hb < 7 g/dL ou queda ≥ 2 g/dL em 24–48 h, dispneia, angina, confusão, instabilidade",
    "Esquizócitos + plaquetopenia, febre, alteração neurológica ou renal (PTT, SHU, CIVD, HELLP)",
    "Urina escura cor de coca-cola (hemólise intravascular) com oligúria (lesão renal aguda)",
    "Hemólise após medicamento oxidante, fava ou naftalina (deficiência de G6PD)",
    "Hemólise com trombose em sítio incomum (veias abdominais, cerebrais) ou citopenias: hemoglobinúria paroxística noturna",
    "Reticulócitos baixos apesar de hemólise (crise aplástica por parvovírus B19, acometimento medular)",
    "Hemólise após transfusão recente (reação hemolítica tardia: ver ficha reacao-transfusional)"
  ],
  condutaInicial: [
    "Confirmar hemólise: reticulócitos altos, LDH alto, bilirrubina indireta alta, haptoglobina baixa (ou indetectável)",
    "Esfregaço de sangue periférico sempre: esferócitos (AHAI, esferocitose), esquizócitos (microangiopatia, prótese valvar), corpúsculos de Heinz e células mordidas (G6PD), aglutinação (anticorpo frio)",
    "Teste de Coombs direto (teste da antiglobulina direta) com especificidade IgG e C3 se positivo",
    "Plaquetas, TP, TTPa, fibrinogênio, creatinina, urina tipo 1 (hemoglobinúria: fita positiva para sangue sem hemácias no sedimento)",
    "Coombs positivo → AHAI: procurar causa (drogas, LLC/linfoma, lúpus, infecção, HIV/hepatites) e iniciar corticoide se anemia significativa",
    "Coombs negativo → esfregaço define: esquizócitos (microangiopatia), esferócitos (esferocitose), células mordidas (G6PD); sem pista: hemoglobinopatias, HPN, causas mecânicas e infecciosas (malária)",
    "Suspender droga suspeita; ácido fólico em toda hemólise crônica ou intensa",
    "Transfundir se instável ou Hb muito baixa com sintomas, avisando o banco de sangue do diagnóstico (AHAI: unidade menos incompatível; anticorpo frio: equipo aquecido)",
    "Profilaxia de TEV se internado (hemólise aumenta o risco de trombose), salvo plaquetopenia ou sangramento"
  ],
  fataisExcluir: [
    "Púrpura trombocitopênica trombótica e SHU (microangiopatia trombótica)",
    "CIVD por sepse",
    "Malária (hemólise com febre; gota espessa)",
    "Reação transfusional hemolítica",
    "Hemoglobinúria paroxística noturna com trombose",
    "Leucemia ou linfoma por trás de uma AHAI",
    "Sepse por Clostridium (hemólise maciça), picada de Loxosceles ou envenenamento"
  ],
  proximaDecisao: "Coombs positivo IgG (quente) → prednisona 1 mg/kg/dia e hematologia; sem resposta em 2–3 semanas ou recaída → rituximabe (especialista). Coombs positivo só C3 com aglutinação ao frio → doença das crioaglutininas: proteger do frio, investigar linfoma, hematologia. Coombs negativo → seguir o esfregaço. Hemólise crônica estável e leve → seguimento ambulatorial com hematologia.",
  clinica: {
    anamnese: [
      "Cansaço, icterícia, urina escura, dor lombar ou abdominal (hemólise intravascular aguda)",
      "Medicamentos novos nas últimas semanas: primaquina, dapsona, sulfametoxazol-trimetoprima, nitrofurantoína, rasburicase, azul de metileno, ceftriaxona, piperacilina, metildopa, fludarabina",
      "Ingestão de fava, contato com naftalina; infecção recente (gatilhos de crise na G6PD)",
      "Infecções: Mycoplasma, mononucleose, febre (malária, viagem a área endêmica)",
      "Sintomas ao frio: acrocianose, livedo, piora no inverno (crioaglutinina)",
      "História familiar de anemia, icterícia, cálculo de vesícula precoce ou esplenectomia (esferocitose, hemoglobinopatias)",
      "Prótese valvar, transfusão recente, gestação",
      "Doença autoimune (lúpus), linfonodos, perda de peso, sudorese noturna (LLC, linfoma)"
    ],
    exameFisico: [
      "Palidez, icterícia, taquicardia, sopro",
      "Esplenomegalia (esferocitose, AHAI, linfoma), hepatomegalia, linfonodomegalias",
      "Acrocianose e livedo (anticorpo frio)",
      "Petéquias (pensar em microangiopatia ou Evans: AHAI + PTI)",
      "Úlceras de perna e sinais de trombose"
    ],
    diferenciais: [
      { dx: "AHAI por anticorpo quente", pista: "Coombs IgG ± C3, esferócitos; idiopática ou secundária (LLC, lúpus, drogas)" },
      { dx: "Doença das crioaglutininas", pista: "Coombs C3, aglutinação no tubo frio, acrocianose; VCM e CHCM falsamente alterados" },
      { dx: "Esferocitose hereditária", pista: "Coombs negativo, esferócitos, CHCM alta, esplenomegalia, história familiar, colelitíase" },
      { dx: "Deficiência de G6PD", pista: "Homem, crise 1–3 dias após oxidante ou infecção, células mordidas, corpúsculos de Heinz" },
      { dx: "Microangiopatia (PTT, SHU, CIVD, HELLP, HAS maligna, prótese)", pista: "Esquizócitos, plaquetopenia, Coombs negativo" },
      { dx: "Hemoglobinúria paroxística noturna", pista: "Coombs negativo, hemólise intravascular, trombose, citopenias; citometria CD55/CD59" },
      { dx: "Falciforme e talassemias", pista: "Eletroforese de hemoglobina; drepanócitos ou microcitose" },
      { dx: "Não é hemólise", pista: "Gilbert (bilirrubina indireta isolada), sangramento recuperando (reticulócitos), rabdomiólise (LDH/CPK), anemia megaloblástica (LDH alto, reticulócitos baixos)" }
    ],
    gravidade: [
      "Grave: Hb < 7 g/dL, queda rápida, sintomas cardiovasculares ou neurológicos, hemoglobinúria com lesão renal",
      "AHAI com reticulócitos baixos tem maior risco (anemia cai sem compensação)",
      "Microangiopatia é sempre grave até prova em contrário"
    ]
  },
  exames: [
    {
      nome: "Marcadores de hemólise",
      pedido: "Hemograma completo com reticulócitos e análise do esfregaço de sangue periférico (esferócitos, esquizócitos, células mordidas, aglutinação). LDH, bilirrubinas totais e frações, haptoglobina.",
      porQue: "Confirmar hemólise e orientar o tipo pelo esfregaço.",
      esperar: "Reticulócitos e LDH altos, bilirrubina indireta alta, haptoglobina baixa.",
      interpretacao: "Haptoglobina normal com LDH normal torna hemólise improvável. Esquizócitos ≥ 1% sugerem microangiopatia.",
      limitacoes: "Haptoglobina sobe em inflamação. LDH sobe em muitas doenças. Reticulócitos podem estar baixos na crise aplástica."
    },
    {
      nome: "Teste de Coombs direto",
      pedido: "Teste da antiglobulina direta (Coombs direto) poliespecífico; se positivo, monoespecífico anti-IgG e anti-C3. Pesquisa de crioaglutininas e título se C3 positivo.",
      porQue: "Separar hemólise imune de não imune.",
      esperar: "AHAI quente: IgG ± C3. Crioaglutinina: C3 isolado.",
      interpretacao: "Coombs positivo sem hemólise pode ocorrer (falso positivo, gamopatias, após IgIV). Coombs negativo não exclui AHAI em uma minoria dos casos (técnicas mais sensíveis no hemocentro).",
      limitacoes: "Transfusão recente confunde (reação tardia)."
    },
    {
      nome: "Causas secundárias e diferenciais",
      pedido: "Plaquetas, TP, TTPa, fibrinogênio, creatinina, urina tipo 1, TGO, TGP, CPK. Sorologias para HIV, hepatite B e C; FAN; eletroforese de proteínas séricas. Gota espessa se febre e exposição. Beta-hCG em mulheres em idade fértil.",
      porQue: "Microangiopatia, lesão renal, doença autoimune, linfoproliferativa e infecções.",
      esperar: "—",
      interpretacao: "Paraproteína ou linfocitose: investigar LLC/linfoma. FAN alto: lúpus.",
      limitacoes: "—"
    },
    {
      nome: "Exames de membrana, enzima e HPN (ambulatorial ou hematologia)",
      pedido: "Dosagem de G6PD (quantitativa ou qualitativa). Teste de ligação à eosina-5-maleimida (EMA) por citometria ou curva de fragilidade osmótica. Eletroforese de hemoglobina. Imunofenotipagem para HPN (CD55/CD59 ou FLAER) se hemólise intravascular, trombose ou citopenias sem causa.",
      porQue: "Esferocitose, G6PD, hemoglobinopatias e HPN.",
      esperar: "—",
      interpretacao: "G6PD baixa confirma; normal na crise não exclui.",
      limitacoes: "G6PD pode vir falsamente normal na crise (reticulócitos jovens têm mais enzima): repetir 2–3 meses depois. Fragilidade osmótica também sai alterada na AHAI."
    }
  ],
  tratamento: [
    {
      droga: "Prednisona (AHAI quente)",
      linha: "l1",
      dose: "1 mg/kg/dia (máx. habitual 80–100 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia pela manhã",
      duracao: "Até Hb estável (em geral 3–4 semanas) e redução lenta em vários meses, guiada pela hematologia",
      monitorizacao: "Hb e reticulócitos 2–3×/semana no início; glicemia, PA; proteção gástrica se risco",
      contraindicacoes: "Infecção grave não tratada (relativa)",
      ajustes: "Pouco eficaz na doença das crioaglutininas. Profilaxia para Strongyloides (ivermectina) em área endêmica; suplementar cálcio e vitamina D se uso prolongado"
    },
    {
      droga: "Metilprednisolona (AHAI grave, instável)",
      linha: "alt",
      dose: "Conforme hematologia (pulsoterapia por 1–3 dias é usada em casos graves)",
      via: "IV",
      intervalo: "1 vez ao dia",
      duracao: "1–3 dias, depois prednisona",
      monitorizacao: "Glicemia, PA, Hb",
      contraindicacoes: "—",
      ajustes: "Decisão com hematologista"
    },
    {
      droga: "Rituximabe",
      linha: "alt",
      dose: "Conforme protocolo do hematologista",
      via: "IV",
      intervalo: "Semanal",
      duracao: "Conforme protocolo",
      monitorizacao: "HBsAg e anti-HBc antes (reativação de hepatite B)",
      contraindicacoes: "Hepatite B ativa sem profilaxia",
      ajustes: "Segunda linha na AHAI quente e primeira opção na doença das crioaglutininas sintomática (consenso internacional 2020). Prescrição especializada"
    },
    {
      droga: "Ácido fólico",
      linha: "adj",
      dose: "5 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Enquanto houver hemólise ativa ou crônica",
      monitorizacao: "—",
      contraindicacoes: "Deficiência de B12 não tratada",
      ajustes: "RENAME"
    },
    {
      droga: "Concentrado de hemácias",
      linha: "adj",
      dose: "1 unidade e reavaliar",
      via: "IV",
      intervalo: "Conforme clínica",
      duracao: "—",
      monitorizacao: "Sinais vitais, hemoglobinúria, sobrecarga de volume",
      contraindicacoes: "Não adiar em paciente instável por prova cruzada incompatível na AHAI",
      ajustes: "AHAI: discutir com o banco de sangue (fenotipagem, unidade menos incompatível, infusão lenta). Crioaglutinina: aquecedor de sangue e manter o paciente aquecido"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV no internado)",
      linha: "adj",
      dose: "40 mg",
      via: "SC",
      intervalo: "1 vez ao dia",
      duracao: "Durante a internação",
      monitorizacao: "Plaquetas",
      contraindicacoes: "Plaquetas < 50.000/mm³, sangramento ativo",
      ajustes: "ClCr < 30 mL/min: 20 mg 1×/dia"
    },
    {
      droga: "Oxidantes na deficiência de G6PD (primaquina, dapsona, rasburicase, azul de metileno, nitrofurantoína, sulfonamidas)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Deficiência de G6PD conhecida ou suspeita",
      ajustes: "Ver tabela abaixo. Na malária por P. vivax, testar G6PD antes de primaquina ou tafenoquina conforme o Guia de Tratamento da Malária do MS"
    }
  ],
  destino: {
    agora: [
      "Instável ou Hb < 7 g/dL com sintomas: sala de emergência, tipagem e prova cruzada, avisar o banco de sangue",
      "Esquizócitos + plaquetopenia: hematologia imediata (ficha trombocitopenia)"
    ],
    reavaliar: [
      "Hb, reticulócitos, LDH e bilirrubina a cada 12–24 h na fase aguda",
      "Creatinina e diurese se hemoglobinúria"
    ],
    alta: [
      "Hb estável ou subindo, sem sintomas, causa definida ou investigação garantida em ambulatório",
      "Retorno com hematologia em até 1–2 semanas (AHAI em corticoide: semanal no início)"
    ],
    observacao: ["Crise hemolítica leve por G6PD com droga suspensa e Hb estável: observar 24 h"],
    internacao: [
      "AHAI com Hb < 7–8 g/dL ou queda rápida, hemólise intravascular com lesão renal, microangiopatia, crise aplástica",
      "UTI: instabilidade, isquemia miocárdica, PTT"
    ],
    transferencia: [
      "Sem banco de sangue, hematologia ou plasmaférese disponíveis → regulação para hospital de referência"
    ]
  },
  prescricao: {
    hospitalar: "ANEMIA HEMOLÍTICA AUTOIMUNE (Coombs positivo, anticorpo quente) — ADULTO (peso: ___ kg)\n1. Dieta livre (para diabético se glicemia alta).\n2. Prednisona 1 mg/kg = ___ mg VO 1×/dia pela manhã (máx. habitual 80–100 mg/dia). Na impossibilidade de VO: metilprednisolona 1 mg/kg/dia IV.\n3. Ácido fólico 5 mg VO 1×/dia.\n4. Omeprazol 20 mg VO 1×/dia em jejum (se risco de sangramento digestivo).\n5. Enoxaparina 40 mg SC 1×/dia (se plaquetas ≥ 50.000/mm³ e sem sangramento).\n6. Concentrado de hemácias ___ unidade(s) IV se Hb < 7 g/dL com sintomas ou instabilidade — solicitar ao banco de sangue fenotipagem e unidade menos incompatível; infundir lentamente e observar.\n7. Exames: hemograma com reticulócitos, LDH e bilirrubinas diários; glicemia capilar 2×/dia; potássio.\n8. Controles: sinais vitais de 4/4 h, diurese, cor da urina.\n9. Parecer da hematologia.\n\nCRISE HEMOLÍTICA POR G6PD: suspender o oxidante, hidratação para diurese ≥ 1 mL/kg/h se hemoglobinúria, ácido fólico 5 mg VO 1×/dia e transfusão se Hb < 7 g/dL ou sintomas. Corticoide NÃO tem papel.",
    ambulatorial: "PEDIDO DE EXAMES — SUSPEITA DE HEMÓLISE\nHemograma completo com reticulócitos e esfregaço; LDH; bilirrubinas totais e frações; haptoglobina; teste de Coombs direto; creatinina; TGO; TGP; urina tipo 1. Se Coombs negativo: dosagem de G6PD, eletroforese de hemoglobina, teste EMA ou curva de fragilidade osmótica.\nHD: Anemia hemolítica a esclarecer (CID D59.9).\n\nHEMÓLISE CRÔNICA (esferocitose, AHAI em seguimento)\nUSO ORAL\n1. Ácido fólico 5 mg ------------------------------- 30 comprimidos\n   Tomar 1 comprimido por dia, uso contínuo."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se urina ficar escura (cor de chá ou coca-cola), olhos muito amarelos, falta de ar, dor no peito, desmaio, febre ou manchas roxas na pele",
    "Deficiência de G6PD: levar a lista de remédios proibidos e mostrar em toda consulta e farmácia; não comer fava e não usar naftalina",
    "Em uso de prednisona: não parar de repente; tomar pela manhã; controlar pressão e glicemia",
    "Doença por anticorpo frio: agasalhar-se, proteger mãos, pés e orelhas, evitar bebidas e banhos gelados",
    "Esferocitose: pode haver cálculo na vesícula; avisar se dor na barriga após comer ou icterícia forte; febre com palidez súbita pode ser crise aplástica (voltar no mesmo dia)",
    "Retorno com hematologia conforme agendado; na AHAI, exames semanais no início"
  ],
  tabelas: [
    {
      titulo: "Deficiência de G6PD — o que evitar",
      colunas: ["Evitar (risco alto)", "Usar com cautela / em dose habitual", "Observação"],
      linhas: [
        ["Primaquina e tafenoquina (sem teste de G6PD)", "Cloroquina (dose terapêutica)", "Malária: seguir o Guia de Tratamento da Malária do MS (teste de G6PD antes de 8-aminoquinolinas)"],
        ["Dapsona", "Ácido acetilsalicílico em dose baixa", "Dapsona também causa meta-hemoglobinemia"],
        ["Rasburicase e pegloticase", "Paracetamol em dose habitual", "Na lise tumoral usar alopurinol (ver ficha sindrome-lise-tumoral)"],
        ["Azul de metileno", "Ácido ascórbico em dose habitual", "Meta-hemoglobinemia em G6PD: não usar azul de metileno; discutir ácido ascórbico ou exsanguineotransfusão com toxicologia (CIATox)"],
        ["Nitrofurantoína, sulfametoxazol-trimetoprima e outras sulfonamidas", "Quinolonas (evidência fraca)", "Preferir outra classe quando houver alternativa"],
        ["Fenazopiridina, nitratos/nitritos voláteis, naftalina, fava", "—", "Infecção também desencadeia crise"]
      ],
      nota: "Listas variam; conferir em fonte atualizada (ex.: listas da OMS e de centros de referência em G6PD). Crise ocorre 1–3 dias após a exposição e é autolimitada se o gatilho for retirado."
    },
    {
      titulo: "Hemólise pelo Coombs e pelo esfregaço",
      colunas: ["Achado", "Pensar em", "Próximo passo"],
      linhas: [
        ["Coombs + (IgG), esferócitos", "AHAI quente (idiopática, LLC, linfoma, lúpus, drogas)", "Prednisona; buscar causa secundária"],
        ["Coombs + (C3), aglutinação", "Crioaglutinina (Mycoplasma, EBV, linfoma)", "Proteger do frio; hematologia"],
        ["Coombs –, esquizócitos, plaquetopenia", "PTT, SHU, CIVD, HELLP, HAS maligna", "Fichas trombocitopenia e sindrome-hemolitico-uremica"],
        ["Coombs –, esferócitos, história familiar", "Esferocitose hereditária", "EMA ou fragilidade osmótica; hematologia"],
        ["Coombs –, células mordidas, oxidante", "Deficiência de G6PD", "Suspender droga; G6PD após 2–3 meses"],
        ["Coombs –, hemoglobinúria, trombose", "HPN", "Citometria CD55/CD59 (FLAER)"]
      ]
    }
  ],
  fontes: [
    "Jäger U et al. — Diagnosis and treatment of autoimmune hemolytic anemia in adults: recommendations from the First International Consensus Meeting (Blood Reviews, 2020)",
    "British Society for Haematology — Guideline on the management of primary autoimmune haemolytic anaemia (2017)",
    "Iolascon A et al. — Recommendations for diagnosis and treatment of hereditary spherocytosis (Haematologica, 2017)",
    "OMS — Guide to G6PD deficiency rapid diagnostic testing to support P. vivax radical cure (2022)",
    "Ministério da Saúde — Guia de tratamento da malária no Brasil (2024)",
    "Ministério da Saúde — RENAME (versão vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
