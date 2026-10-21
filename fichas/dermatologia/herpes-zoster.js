// Herpes-zóster (inclui oftálmico, neuralgia pós-herpética e vacina)
registrarFicha({
  id: "herpes-zoster",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Herpes-zóster (inclui oftálmico e neuralgia pós-herpética; vacina)",
  resumo: "Reativação do vírus varicela-zóster: dor, ardor ou prurido em faixa unilateral seguidos de vesículas agrupadas sobre base eritematosa num dermátomo. Antiviral oral até 72 h do início das lesões reduz duração e dor aguda. Zóster oftálmico, imunossupressão e forma disseminada exigem conduta mais agressiva.",
  palavrasChave: "herpes zoster cobreiro zona dermatomo vesiculas aciclovir valaciclovir famciclovir neuralgia pos herpetica nph gabapentina pregabalina amitriptilina nortriptilina lidocaina zoster oftalmico hutchinson ramsay hunt paralisia facial vacina recombinante shingrix varicela",
  critico: {
    tempo: "Antiviral até 72 h das lesões",
    texto: "Iniciar antiviral oral até 72 h do início das vesículas. Iniciar mesmo após 72 h se ainda surgem lesões novas, zóster oftálmico, imunossupressão ou complicação. Lesão na ponta do nariz, olho vermelho ou baixa visual: oftalmologia no mesmo dia."
  },
  alarmes: [
    "Lesões no ramo oftálmico do trigêmeo (testa, pálpebra), especialmente na ponta ou lateral do nariz (sinal de Hutchinson)",
    "Olho vermelho, dor ocular, fotofobia ou baixa visual (ceratite, uveíte, necrose retiniana)",
    "Paralisia facial com vesículas no ouvido ou palato, zumbido, vertigem (síndrome de Ramsay Hunt)",
    "Lesões em mais de 3 dermátomos, bilaterais ou disseminadas (> 20 vesículas fora do dermátomo)",
    "Imunossupressão grave: HIV com CD4 baixo, quimioterapia, transplante, corticoide em dose alta, imunobiológicos",
    "Cefaleia intensa, confusão, rigidez de nuca, déficit motor (meningoencefalite, mielite, vasculopatia/AVC)",
    "Febre alta, celulite, necrose ou secreção purulenta nas lesões (infecção bacteriana secundária)",
    "Retenção urinária ou constipação grave em zóster sacral"
  ],
  condutaInicial: [
    "Diagnóstico clínico: dor prodrômica + vesículas agrupadas em dermátomo, unilateral, que não cruza a linha média",
    "Examinar todo o corpo (disseminação), olhos, ouvidos e boca; testar força facial",
    "Antiviral oral imediato se ≤ 72 h ou se critérios para tratar após 72 h (ver crítico)",
    "Analgesia escalonada desde o primeiro dia: controlar bem a dor aguda é importante",
    "Avaliar imunossupressão: pedir anti-HIV (zóster em < 50 anos, recorrente ou extenso), glicemia se fator de risco",
    "Cuidados com as lesões: limpas e secas, cobertas com gaze; não usar pomadas com antibiótico ou corticoide sem indicação",
    "Orientar isolamento de contato: a pessoa transmite varicela para quem nunca teve a doença enquanto houver vesículas",
    "Agendar retorno para avaliar dor (risco de neuralgia pós-herpética) e orientar sobre vacina"
  ],
  fataisExcluir: [
    "Zóster oftálmico com acometimento ocular (cegueira)",
    "Necrose retiniana aguda",
    "Encefalite, meningite ou mielite pelo VZV",
    "Zóster disseminado com pneumonite ou hepatite em imunossuprimido",
    "Diferenciais graves da dor pré-eruptiva: síndrome coronariana aguda (dor torácica), abdome agudo, cólica renal"
  ],
  proximaDecisao: "Imunocompetente sem complicação → antiviral oral 7 dias, analgesia e retorno em 7 dias. Oftálmico → antiviral oral e oftalmologia no mesmo dia. Disseminado, imunossupressão grave, meningoencefalite ou paciente que não tolera VO → internar para aciclovir IV. Dor persistente ≥ 90 dias após o início das lesões = neuralgia pós-herpética → gabapentinoide, tricíclico ou lidocaína tópica.",
  clinica: {
    anamnese: [
      "Dor, queimação, formigamento ou prurido localizado 1–5 dias antes das lesões",
      "Data de início das vesículas (decide o antiviral)",
      "Doenças e remédios imunossupressores, HIV, câncer, diabetes, idade",
      "Sintomas oculares (dor, fotofobia, visão turva), auditivos (otalgia, zumbido, vertigem), paralisia facial",
      "Cefaleia, confusão, fraqueza, alteração urinária",
      "Função renal (ajuste do antiviral); gestação",
      "Contatos em casa: gestantes, recém-nascidos, imunossuprimidos sem varicela prévia",
      "Vacinação prévia contra zóster; episódios anteriores"
    ],
    exameFisico: [
      "Distribuição em dermátomo (torácico é o mais comum; depois trigêmeo oftálmico)",
      "Estágio: pápulas → vesículas → pústulas → crostas (7–10 dias)",
      "Ponta e lateral do nariz (sinal de Hutchinson), conjuntiva, córnea com lanterna, acuidade visual",
      "Conduto auditivo, palato e força da face (Ramsay Hunt)",
      "Pesquisar lesões fora do dermátomo (disseminação)",
      "Sinais de infecção secundária: celulite, necrose",
      "Exame neurológico sumário se cefaleia, fraqueza ou alteração mental"
    ],
    diferenciais: [
      { dx: "Herpes simples zosteriforme", pista: "Recorre no mesmo local várias vezes; menos dor" },
      { dx: "Dermatite de contato", pista: "Prurido, distribuição pelo contato, não segue dermátomo" },
      { dx: "Impetigo bolhoso", pista: "Crostas melicéricas, bolhas flácidas, sem dor neuropática" },
      { dx: "Picada de inseto / estrófulo", pista: "Pápulas pruriginosas espalhadas" },
      { dx: "Dor pré-eruptiva confundida", pista: "Angina, cólica biliar ou renal, radiculopatia — sem lesão ainda; reavaliar em 48–72 h" },
      { dx: "Varicela", pista: "Lesões disseminadas em vários estágios desde o início, sem dermátomo predominante" }
    ],
    gravidade: [
      "Não complicado: imunocompetente, 1–2 dermátomos contíguos, sem envolvimento ocular",
      "Complicado: oftálmico, Ramsay Hunt, imunossuprimido, idoso com dor intensa — tratar mesmo após 72 h",
      "Grave: disseminado, visceral, neurológico (meningoencefalite, mielite) — internação e aciclovir IV",
      "Risco de neuralgia pós-herpética: idade ≥ 50 anos, dor aguda intensa, pródromo doloroso, erupção extensa, zóster oftálmico"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Sem exames na forma típica do imunocompetente.",
      porQue: "O quadro clínico é suficiente.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Em apresentação atípica, considerar confirmação laboratorial."
    },
    {
      nome: "PCR para vírus varicela-zóster",
      pedido: "Pesquisa de DNA do vírus varicela-zóster (PCR) em raspado da base de vesícula (swab em meio de transporte viral). Se disponível, PCR para herpes simples 1 e 2 no mesmo material.",
      porQue: "Apresentação atípica, imunossuprimido, dúvida com herpes simples.",
      esperar: "Positivo para VZV.",
      interpretacao: "Confirma o diagnóstico; não atrasar o antiviral esperando o resultado.",
      limitacoes: "Pouca disponibilidade na atenção primária; crostas antigas reduzem a sensibilidade."
    },
    {
      nome: "Anti-HIV (teste rápido) e glicemia",
      pedido: "Teste rápido para HIV (com aconselhamento) e glicemia de jejum.",
      porQue: "Zóster em adulto jovem, recorrente, multidermatômico ou grave pode ser a primeira manifestação de imunossupressão.",
      esperar: "Negativo na maioria.",
      interpretacao: "HIV positivo → seguir PCDT HIV; tratar zóster como imunossuprimido se CD4 baixo.",
      limitacoes: "—"
    },
    {
      nome: "Creatinina",
      pedido: "Creatinina sérica (estimar ClCr).",
      porQue: "Idoso, DRC ou desidratação: ajuste do aciclovir/valaciclovir (neurotoxicidade e nefrotoxicidade).",
      esperar: "—",
      interpretacao: "ClCr < 25–30 mL/min: ajustar dose (ver tratamento).",
      limitacoes: "Não precisa esperar o resultado para iniciar em paciente sem DRC conhecida."
    },
    {
      nome: "Líquor (internação)",
      pedido: "Punção lombar: citologia, bioquímica, PCR para VZV e HSV no líquor (após TC de crânio se déficit focal ou rebaixamento).",
      porQue: "Suspeita de meningite, encefalite ou mielite.",
      esperar: "Pleocitose linfocítica; PCR VZV positiva.",
      interpretacao: "Confirma doença neurológica pelo VZV; manter aciclovir IV.",
      limitacoes: "Só no hospital."
    }
  ],
  tratamento: [
    {
      droga: "Aciclovir",
      linha: "l1",
      dose: "800 mg",
      via: "VO",
      intervalo: "5 vezes ao dia (de 4/4 h, pulando a dose da madrugada)",
      duracao: "7 dias (7–10 dias se cicatrização lenta ou imunossuprimido, até todas as lesões formarem crosta)",
      monitorizacao: "Hidratação, função renal em idoso, confusão",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "RENAME. ClCr 10–25 mL/min: 800 mg de 8/8 h; ClCr < 10: 800 mg de 12/12 h. Gestação: pode usar. Manter boa ingestão de água"
    },
    {
      droga: "Valaciclovir",
      linha: "alt",
      dose: "1 g",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "7 dias",
      monitorizacao: "Função renal, confusão no idoso",
      contraindicacoes: "Hipersensibilidade a aciclovir/valaciclovir",
      ajustes: "Posologia mais fácil (melhor adesão); fora da RENAME. ClCr 30–49: 1 g de 12/12 h; 10–29: 1 g 1×/dia; < 10: 500 mg 1×/dia. Famciclovir 500 mg de 8/8 h por 7 dias é outra alternativa"
    },
    {
      droga: "Aciclovir IV",
      linha: "l1",
      dose: "10 mg/kg (peso ideal) por dose",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Até melhora clínica e parada de novas lesões; completar 10–14 dias (VO ao melhorar) — doença neurológica: conforme infectologia",
      monitorizacao: "Creatinina a cada 48 h, diurese, estado mental",
      contraindicacoes: "—",
      ajustes: "Disseminado, visceral, neurológico, imunossuprimido grave ou oftálmico complicado. Diluir para concentração ≤ 5 mg/mL em SF 0,9% (ex.: 700 mg em 250 mL) e infundir em 1 hora. Hidratar bem (nefropatia por cristais). Ajustar intervalo se ClCr < 50"
    },
    {
      droga: "Analgesia da fase aguda (dipirona ou paracetamol ± opioide fraco)",
      linha: "adj",
      dose: "Dipirona 500 mg–1 g 6/6 h; paracetamol 500–750 mg 6/6 h (máx. 3–4 g/dia); se intensa: codeína 30 mg 6/6 h ou tramadol 50 mg 6/6–8/8 h",
      via: "VO",
      intervalo: "6/6 h (fixo nos primeiros dias)",
      duracao: "Enquanto houver dor",
      monitorizacao: "Constipação, sonolência, quedas (opioide)",
      contraindicacoes: "Dipirona: discrasia sanguínea. Opioide: insuficiência respiratória",
      ajustes: "Dor aguda intensa: pode-se associar gabapentina desde a fase aguda (efeito sobre NPH não comprovado). AINE com cautela em idoso e DRC"
    },
    {
      droga: "Gabapentina",
      linha: "l1",
      dose: "Dia 1: 300 mg à noite; dia 2: 300 mg 12/12 h; dia 3: 300 mg 8/8 h; aumentar até 1.800 mg/dia (máx. 3.600 mg/dia)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "Neuralgia pós-herpética: manter enquanto houver benefício; reavaliar a cada 3 meses e retirar aos poucos",
      monitorizacao: "Sonolência, tontura, edema, quedas",
      contraindicacoes: "—",
      ajustes: "Disponível no SUS (Componente Especializado/REMUME — conferir). ClCr 30–59: máx. 1.400 mg/dia; 15–29: máx. 700 mg/dia. Idoso: começar 100–300 mg à noite. Pregabalina 75 mg 12/12 h (até 150 mg 12/12 h; máx. 600 mg/dia) é alternativa fora da RENAME"
    },
    {
      droga: "Amitriptilina (ou nortriptilina)",
      linha: "alt",
      dose: "10–25 mg à noite; aumentar 10–25 mg a cada 1–2 semanas até 50–75 mg",
      via: "VO",
      intervalo: "1×/dia, à noite",
      duracao: "Neuralgia pós-herpética: reavaliar em 6–8 semanas",
      monitorizacao: "Boca seca, constipação, retenção urinária, hipotensão postural, sonolência; ECG se cardiopata ou > 40 anos",
      contraindicacoes: "IAM recente, bloqueio de ramo/arritmias, glaucoma de ângulo fechado, retenção urinária; risco de suicídio (dispensar poucos comprimidos)",
      ajustes: "RENAME (amitriptilina e nortriptilina). No idoso preferir nortriptilina (menos anticolinérgica) — amitriptilina consta nos critérios de Beers. Receita de controle especial (C1)"
    },
    {
      droga: "Lidocaína tópica (emplastro 5% ou gel/creme)",
      linha: "alt",
      dose: "Até 3 emplastros sobre a área dolorosa, 12 h com e 12 h sem",
      via: "Tópica (pele íntegra)",
      intervalo: "1×/dia",
      duracao: "Reavaliar em 2–4 semanas",
      monitorizacao: "Irritação local",
      contraindicacoes: "Pele com lesões abertas; alergia a anestésico amida",
      ajustes: "Boa opção no idoso (pouco efeito sistêmico). Fora da RENAME"
    },
    {
      droga: "Corticoide sistêmico de rotina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não previne neuralgia pós-herpética e aumenta efeitos adversos. Pode ser considerado pelo especialista em Ramsay Hunt ou em casos selecionados"
    },
    {
      droga: "Aciclovir creme ou pomada com antibiótico/corticoide nas lesões",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Antiviral tópico não tem papel no zóster. Pomadas de neomicina causam dermatite de contato. Oftálmico: colírios só com oftalmologista"
    }
  ],
  destino: {
    agora: [
      "Antiviral oral e analgesia; oftalmologia no mesmo dia se zóster oftálmico",
      "Internar se disseminado, sinais neurológicos, imunossupressão grave ou incapacidade de usar VO"
    ],
    reavaliar: [
      "Em 7 dias: cicatrização, dor e sinais de infecção secundária",
      "Em 4–6 semanas e aos 3 meses se a dor persistir (neuralgia pós-herpética)"
    ],
    alta: [
      "Imunocompetente, sem complicação, dor controlada: seguimento na UBS",
      "Orientar vacina recombinante após resolução do episódio agudo (ver tabela)"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Zóster disseminado ou visceral, meningoencefalite, mielite, imunossuprimido grave, oftálmico com necrose retiniana, dor intratável, idoso frágil sem condições de autocuidado"
    ],
    transferencia: [
      "Oftalmologia no mesmo dia: zóster oftálmico com olho vermelho, dor ocular ou baixa visual (e eletiva em todo zóster do ramo oftálmico)",
      "Otorrinolaringologia: Ramsay Hunt",
      "Clínica da dor/neurologia: neuralgia pós-herpética refratária a 2 classes de fármacos"
    ]
  },
  prescricao: {
    ambulatorial: "HERPES-ZÓSTER NÃO COMPLICADO — ADULTO (ClCr normal)\nUSO ORAL\n1. Aciclovir 200 mg ------------------------------- 140 comprimidos\n   Tomar 4 comprimidos (800 mg) 5 vezes ao dia (7h, 11h, 15h, 19h e 23h) por 7 dias. Beber bastante água.\n   OU Valaciclovir 500 mg -------------------------- 42 comprimidos\n   Tomar 2 comprimidos (1 g) de 8 em 8 horas por 7 dias.\n2. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas, em horário fixo nos primeiros dias.\n   (Alternativa: paracetamol 750 mg, 1 comprimido de 6 em 6 horas; máximo 4 comprimidos ao dia.)\n3. Se dor intensa apesar do item 2: codeína 30 mg ---- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor forte (receita de controle especial). Pode dar prisão de ventre e sono.\n\nUSO TÓPICO\n4. Lavar as lesões com água e sabão neutro 1 a 2 vezes ao dia, secar sem esfregar e cobrir com gaze seca. Compressas frias com soro fisiológico por 10 minutos para aliviar o ardor.\n\nNEURALGIA PÓS-HERPÉTICA (dor ≥ 3 meses) — USO ORAL\n1. Gabapentina 300 mg ----------------------------- 90 cápsulas\n   1º dia: 1 cápsula à noite. 2º dia: 1 cápsula de 12 em 12 horas. A partir do 3º dia: 1 cápsula de 8 em 8 horas. Retorno em 2–4 semanas para ajuste (idoso ou ClCr reduzido: ver ajuste).\n   OU Nortriptilina 10 mg ---------------------------- 60 cápsulas\n   Tomar 1 cápsula à noite por 1 semana; se tolerar, 2 cápsulas à noite. Ajustar no retorno (alvo usual 25–75 mg). Receita de controle especial.\n   (Amitriptilina 25 mg: 1/2 a 1 comprimido à noite; evitar no idoso.)\n\nAJUSTE RENAL: aciclovir ClCr 10–25: 800 mg de 8/8 h; < 10: 800 mg de 12/12 h. Valaciclovir ClCr 30–49: 1 g de 12/12 h; 10–29: 1 g 1×/dia.",
    hospitalar: "HERPES-ZÓSTER DISSEMINADO / IMUNOSSUPRIMIDO / NEUROLÓGICO — ADULTO (peso ideal: ___ kg; ClCr: ___)\n1. Dieta livre conforme aceitação.\n2. Isolamento de contato e respiratório para aerossóis (zóster disseminado ou em imunossuprimido) até todas as lesões em crosta.\n3. SF 0,9% 1.000 mL IV de 12/12 h (ajustar à volemia e função cardíaca) — manter boa hidratação durante o aciclovir.\n4. Aciclovir 10 mg/kg IV de 8/8 h: diluir em SF 0,9% para concentração ≤ 5 mg/mL (ex.: 700 mg em 250 mL) e infundir em 1 hora. Ajustar intervalo se ClCr < 50.\n5. Dipirona 1 g (2 mL) + água destilada 8 mL IV lento de 6/6 h se dor ou febre.\n6. Morfina 2 mg IV lento até de 4/4 h se dor intensa refratária (diluir 10 mg em 9 mL de SF 0,9% = 1 mg/mL).\n7. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n8. Curativo das lesões 1 vez ao dia com SF 0,9% e gaze seca.\n9. Controles: sinais vitais de 6/6 h, diurese, estado mental.\n10. Exames: creatinina a cada 48 h, hemograma, transaminases; PCR VZV de vesícula; líquor se sinais neurológicos.\n11. Passar para valaciclovir 1 g VO de 8/8 h (ou aciclovir 800 mg VO 5×/dia) quando sem lesões novas e melhorando; total de 10–14 dias ou conforme infectologia."
  },
  orientacoesRetorno: [
    "Tomar o antiviral no horário certo até o fim; ele funciona melhor quando começa cedo",
    "As bolhas viram crosta em 7 a 10 dias e a pele cicatriza em 2 a 4 semanas",
    "Manter as lesões limpas, secas e cobertas; não furar as bolhas nem usar pomadas por conta própria",
    "Quem tem zóster pode passar catapora para quem nunca teve: evitar contato com gestantes, recém-nascidos e pessoas com imunidade baixa até tudo virar crosta",
    "Voltar no mesmo dia se: olho vermelho, dor no olho ou visão embaçada; rosto torto; dor de cabeça forte, confusão ou fraqueza; febre alta; bolhas espalhando pelo corpo",
    "Retornar em 7 dias; se a dor continuar depois de cicatrizar, voltar para tratar a dor (neuralgia pós-herpética)",
    "Perguntar sobre a vacina contra herpes-zóster depois que o episódio passar"
  ],
  tabelas: [
    {
      titulo: "Quando tratar com antiviral",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Até 72 h do início das lesões", "Tratar todos (benefício maior em ≥ 50 anos e dor moderada a intensa)"],
        ["Após 72 h, ainda com lesões novas", "Tratar"],
        ["Zóster oftálmico ou Ramsay Hunt", "Tratar em qualquer tempo + especialista"],
        ["Imunossuprimido", "Tratar em qualquer tempo; IV se grave ou disseminado"],
        ["Após 72 h, todas as lesões em crosta, imunocompetente", "Antiviral não traz benefício; só analgesia"]
      ],
      nota: "Fontes: Dworkin et al., Clin Infect Dis 2007 (recomendações de manejo do zóster) e formulários atuais (NHS Scotland 2026)."
    },
    {
      titulo: "Vacina recombinante adjuvada contra zóster (RZV — Shingrix)",
      colunas: ["Item", "Recomendação"],
      linhas: [
        ["Indicação (bula/SBIm)", "Adultos ≥ 50 anos e adultos ≥ 18 anos com risco aumentado (imunossupressão)"],
        ["Esquema", "2 doses de 0,5 mL IM, intervalo de 2 a 6 meses (imunossuprimido: pode ser 1 a 2 meses)"],
        ["Quem já teve zóster", "Vacinar após a resolução do episódio agudo"],
        ["Disponibilidade", "Não incorporada ao SUS (decisão do MS após CONITEC, janeiro de 2026). Disponível na rede privada"],
        ["Vacina atenuada (Zostavax)", "Descontinuada; não usar em imunossuprimidos"]
      ],
      nota: "Conferir no CRIE local se há oferta para grupos especiais. A decisão de 2026 pode ser revista pela CONITEC."
    }
  ],
  fontes: [
    "Ministério da Saúde — Portaria SECTICS/MS publicada no DOU em 12/01/2026: decisão de não incorporar a vacina herpes-zóster recombinante ao SUS (≥ 80 anos e imunocomprometidos ≥ 18 anos; relatório CONITEC)",
    "SBIm — Calendário de vacinação do adulto e do idoso 2025/2026: vacina herpes-zóster recombinante",
    "Ministério da Saúde — RENAME 2024 (aciclovir, amitriptilina, nortriptilina)",
    "Dworkin RH et al. — Recommendations for the management of herpes zoster. Clin Infect Dis, 2007",
    "NHS Scotland — Formulário: herpes zoster (shingles), 2026",
    "CDC — Shingles (Herpes Zoster): clinical overview and Shingrix recommendations (ACIP), atualizado",
    "NICE — Neuropathic pain in adults: pharmacological management (CG173, atualizado 2020)",
    "American Geriatrics Society — Beers Criteria (2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
