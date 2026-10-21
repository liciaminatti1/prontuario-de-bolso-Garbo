// Dermatite atópica
registrarFicha({
  id: "dermatite-atopica",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "completo",
  titulo: "Dermatite atópica",
  resumo: "Doença inflamatória crônica da pele, com prurido, pele seca e eczema em locais típicos para a idade, em surtos. Início geralmente no 1º ano de vida. Base do tratamento: hidratação diária, controle de gatilhos e anti-inflamatório tópico nos surtos.",
  palavrasChave: "dermatite atopica eczema atopico eczema infantil pele seca coceira hidratante emoliente corticoide topico hidrocortisona dexametasona mometasona tacrolimo pimecrolimo ciclosporina dupilumabe scoring scorad eczema herpetico",
  critico: {
    tempo: "Eczema herpético: aciclovir já",
    texto: "Piora súbita com vesículas agrupadas e erosões em saca-bocado, febre ou dor = eczema herpético (Kaposi): aciclovir no mesmo dia e encaminhar. Lesões perioculares: oftalmologia urgente."
  },
  alarmes: [
    "Vesículas umbilicadas agrupadas, erosões em saca-bocado, crostas hemorrágicas, febre (eczema herpético)",
    "Crostas melicéricas, pústulas, exsudação purulenta, febre ou celulite (infecção bacteriana secundária)",
    "Eritrodermia (> 90% da pele vermelha), calafrios, desidratação",
    "Atraso de crescimento, infecções graves de repetição, diarreia crônica (pensar em imunodeficiência primária)",
    "Prurido que impede o sono e as atividades apesar do tratamento correto (doença grave: encaminhar)",
    "Uso prolongado de corticoide potente ou corticoide oral repetido (risco de atrofia, supressão adrenal, rebote)"
  ],
  condutaInicial: [
    "Confirmar o diagnóstico (prurido + eczema típico para a idade + curso crônico e recidivante + atopia pessoal ou familiar)",
    "Classificar a gravidade (SCORAD ou avaliação clínica) e procurar infecção secundária",
    "Emoliente em todo o corpo pelo menos 2 vezes ao dia e logo após o banho; banho morno e curto, sabonete suave só nas áreas necessárias",
    "Surto: corticoide tópico pela potência adequada ao local e à idade, 1–2 vezes ao dia, até o controle (em geral 1–2 semanas)",
    "Após controle: manutenção proativa 2 vezes por semana nas áreas que costumam recair (corticoide ou tacrolimo)",
    "Tratar infecção secundária; evitar gatilhos (sabonete forte, lã, sintético, calor, suor, fumo)",
    "Educar a família: entregar um plano escrito (quanto e onde aplicar, unidade de ponta de dedo)"
  ],
  fataisExcluir: [
    "Eczema herpético (HSV disseminado)",
    "Infecção bacteriana invasiva (celulite, sepse por S. aureus ou estreptococo)",
    "Eritrodermia",
    "Imunodeficiência primária (Wiskott-Aldrich, hiper-IgE) em lactente com eczema grave e infecções",
    "Linfoma cutâneo de células T em adulto com 'eczema' de início tardio e refratário"
  ],
  proximaDecisao: "Sem controle após 4 semanas de uso correto (adesão e quantidade conferidas) de emoliente + corticoide tópico adequado, ou necessidade de corticoide potente contínuo: tacrolimo tópico (≥ 2 anos, PCDT 2025) e encaminhar ao dermatologista para fototerapia ou tratamento sistêmico (ciclosporina, metotrexato, dupilumabe, upadacitinibe conforme PCDT).",
  clinica: {
    anamnese: [
      "Idade de início, curso em surtos, prurido (intensidade, sono)",
      "Atopia pessoal (asma, rinite, alergia alimentar) e familiar",
      "Gatilhos: banhos quentes e longos, sabonetes, perfumes, roupas de lã, suor, calor, estresse, infecções",
      "Tratamentos já usados: quantidade de creme por semana, adesão, medo de corticoide (corticofobia)",
      "Uso de produtos caseiros ou cremes com corticoide potente comprados sem receita",
      "Impacto na qualidade de vida, escola, trabalho e sono",
      "Lactente com eczema grave de início precoce: perguntar sobre reação imediata a alimentos (urticária, vômitos minutos após ingestão)"
    ],
    exameFisico: [
      "Distribuição típica: lactente — face (bochechas), couro cabeludo, superfícies extensoras, poupa área da fralda. Criança — dobras de cotovelos e joelhos, punhos, tornozelos, pescoço. Adolescente/adulto — dobras, face, pescoço, mãos",
      "Lesões agudas (eritema, pápulas, vesículas, exsudação) e crônicas (liquenificação, escoriações)",
      "Xerose, ceratose pilar, prega de Dennie-Morgan, escurecimento periorbital, pitiríase alba, hiperlinearidade palmar",
      "Sinais de infecção: crostas melicéricas, pústulas, vesículas umbilicadas",
      "Peso e estatura (dieta restritiva sem indicação, corticoide)",
      "Estimar a área acometida (regra da palma: palma do paciente com dedos ≈ 1% da superfície corporal)"
    ],
    diferenciais: [
      { dx: "Dermatite seborreica", pista: "Lactente < 3 meses, escamas amareladas untuosas no couro cabeludo e dobras, pouco prurido" },
      { dx: "Escabiose", pista: "Prurido noturno, contatos com prurido, lesões em interdigitais, punhos, genitais; nódulos em lactente" },
      { dx: "Dermatite de contato (alérgica ou irritativa)", pista: "Distribuição pelo contato (bijuteria, calçado, cosméticos); suspeitar se padrão atípico ou piora com o tratamento" },
      { dx: "Psoríase", pista: "Placas bem delimitadas, escamas prateadas, couro cabeludo, unhas, superfícies extensoras" },
      { dx: "Tinea corporis", pista: "Placa anular com borda ativa e descamativa; micológico direto positivo" },
      { dx: "Imunodeficiências (Wiskott-Aldrich, síndrome de hiper-IgE)", pista: "Eczema grave + infecções recorrentes graves, petéquias, plaquetopenia" },
      { dx: "Linfoma cutâneo de células T (micose fungoide)", pista: "Adulto com 'eczema' de início tardio, áreas não expostas ao sol, refratário — biópsia" }
    ],
    gravidade: [
      "SCORAD (área + intensidade + prurido e sono): < 25 leve; 25–50 moderada; > 50 grave",
      "Alternativa: EASI (0–72) e avaliação global do médico (IGA)",
      "Leve: áreas pequenas de pele seca e eczema pouco frequente, prurido leve",
      "Moderada: áreas de eczema mais extensas, prurido frequente, alguma interferência no sono",
      "Grave: eczema extenso persistente, prurido incessante, sono e atividades muito prejudicados, infecções frequentes"
    ]
  },
  exames: [
    {
      nome: "Nenhum exame de rotina",
      pedido: "Não solicitar exames de rotina para diagnóstico de dermatite atópica.",
      porQue: "O diagnóstico é clínico.",
      esperar: "—",
      interpretacao: "IgE total elevada e eosinofilia são comuns, mas não confirmam nem excluem o diagnóstico.",
      limitacoes: "Painéis de IgE específica para alimentos sem história de reação imediata geram dietas restritivas desnecessárias, com risco nutricional."
    },
    {
      nome: "Cultura de secreção de lesão (suspeita de infecção bacteriana)",
      pedido: "Cultura bacteriana com antibiograma de secreção de lesão cutânea (swab de lesão exsudativa/crostosa).",
      porQue: "Infecção recorrente, falha ao antibiótico empírico ou suspeita de MRSA.",
      esperar: "S. aureus é o mais comum; estreptococo do grupo A também.",
      interpretacao: "S. aureus coloniza a pele atópica mesmo sem infecção: tratar só se houver clínica de infecção.",
      limitacoes: "Não colher de rotina."
    },
    {
      nome: "Pesquisa de herpes simples (suspeita de eczema herpético)",
      pedido: "PCR para herpes simples 1 e 2 em raspado de base de vesícula (ou citodiagnóstico de Tzanck, se PCR indisponível).",
      porQue: "Confirmar eczema herpético.",
      esperar: "PCR positivo.",
      interpretacao: "Não aguardar o resultado para iniciar aciclovir.",
      limitacoes: "Tzanck não diferencia HSV de varicela-zóster."
    },
    {
      nome: "Investigação de alergia alimentar (selecionados)",
      pedido: "Encaminhar ao alergista: lactente com dermatite atópica moderada a grave refratária ou com história de reação imediata a alimento (IgE específica/teste cutâneo conforme a suspeita).",
      porQue: "Alergia alimentar associada em parte dos lactentes com doença grave de início precoce.",
      esperar: "—",
      interpretacao: "Exame positivo sem história clínica não indica exclusão do alimento; confirmar com teste de provocação pelo especialista.",
      limitacoes: "Não fazer dietas de exclusão empíricas."
    },
    {
      nome: "Exames antes de tratamento sistêmico (pelo especialista)",
      pedido: "Hemograma, creatinina, ureia, TGO, TGP, potássio, magnésio, ácido úrico, perfil lipídico, urina tipo 1; PA. Sorologias e rastreio de tuberculose conforme o medicamento.",
      porQue: "Ciclosporina (nefrotoxicidade, HAS), metotrexato (mielo e hepatotoxicidade), imunobiológicos e inibidores de JAK.",
      esperar: "Valores normais antes de iniciar.",
      interpretacao: "Seguir o monitoramento do PCDT.",
      limitacoes: "Responsabilidade do especialista; a UBS pode coletar."
    }
  ],
  tratamento: [
    {
      droga: "Emoliente/hidratante (creme ou loção sem perfume; vaselina sólida em áreas muito secas)",
      linha: "l1",
      dose: "Quantidade generosa em todo o corpo (referência NICE: criança 250 a 500 g por semana; adulto até cerca de 500 g por semana)",
      via: "Tópica",
      intervalo: "Pelo menos 2 vezes ao dia e logo após o banho (pele ainda úmida)",
      duracao: "Contínuo, inclusive fora dos surtos",
      monitorizacao: "Ardência (trocar por produto mais simples)",
      contraindicacoes: "Produtos com perfume, corantes ou proteínas alimentares (aveia, amendoim) em lactentes com eczema ativo",
      ajustes: "Nenhum produto específico é superior: usar o que o paciente tolera e consegue manter. Aplicar o corticoide primeiro e o hidratante depois (ou com intervalo), ou em áreas diferentes"
    },
    {
      droga: "Acetato de hidrocortisona 1% creme (baixa potência)",
      linha: "l1",
      dose: "Fina camada; unidade de ponta de dedo (FTU, cerca de 0,5 g) cobre área equivalente a 2 palmas de mão de adulto",
      via: "Tópica",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Até o controle do surto (em geral 1–2 semanas); depois manutenção proativa 2×/semana se recidivas",
      monitorizacao: "Atrofia, estrias, telangiectasias, hipopigmentação",
      contraindicacoes: "Infecção herpética ou fúngica não tratada",
      ajustes: "Face, pálpebras, pescoço, dobras, área de fraldas e lactentes. RENAME/SUS e PCDT 2025"
    },
    {
      droga: "Acetato de dexametasona 0,1% creme (média potência)",
      linha: "l1",
      dose: "Fina camada (FTU)",
      via: "Tópica",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Até o controle (em geral 1–2 semanas), depois reduzir para manutenção proativa 2×/semana",
      monitorizacao: "Atrofia; quantidade usada por mês",
      contraindicacoes: "Face e dobras por tempo prolongado; infecção não tratada",
      ajustes: "Tronco e membros em criança e adulto. RENAME/SUS e PCDT 2025"
    },
    {
      droga: "Furoato de mometasona 0,1% (1 mg/g) pomada, bisnaga 20 g (média potência)",
      linha: "alt",
      dose: "Fina camada (FTU)",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "Até o controle; manutenção proativa 2×/semana",
      monitorizacao: "Atrofia",
      contraindicacoes: "Uso prolongado na face e nas dobras",
      ajustes: "Incorporado ao SUS em 2025 (PCDT Dermatite Atópica 2025, Portaria Conjunta nº 28/2025): pomada 1 mg/g pelo componente especializado (CEAF), adulto e criança ≥ 2 anos — conferir formulário e fluxo da Secretaria Estadual. Aplicação 1×/dia facilita adesão"
    },
    {
      droga: "Tacrolimo pomada 0,03% e 0,1% (inibidor de calcineurina)",
      linha: "alt",
      dose: "Fina camada nas áreas afetadas. 0,03%: ≥ 2 anos. 0,1%: ≥ 16 anos (adulto pode iniciar com 0,1%)",
      via: "Tópica",
      intervalo: "2 vezes ao dia no surto; manutenção proativa 2 vezes por semana",
      duracao: "Até o controle; manutenção conforme recidivas",
      monitorizacao: "Ardência e calor local nos primeiros dias (melhora com o uso); infecções cutâneas",
      contraindicacoes: "< 2 anos (fora da bula); infecção ativa no local; imunossupressão; gestação (preferir corticoide de baixa/média potência)",
      ajustes: "Ótimo para face, pálpebras e dobras (não causa atrofia). Incorporado ao SUS (PCDT 2025, componente especializado, ≥ 2 anos). Proteção solar; evitar álcool (rubor). Pimecrolimo 1% creme é alternativa (fora do SUS)"
    },
    {
      droga: "Cefalexina (cápsula 500 mg; suspensão 250 mg/5 mL)",
      linha: "adj",
      dose: "Adulto: 500 mg. Criança: 25–50 mg/kg/dia divididos de 6/6 h (máx. 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "5 a 7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Só se infecção bacteriana secundária extensa. Poucas lesões: mupirocina tópica. Alergia: clindamicina. RENAME/SUS"
    },
    {
      droga: "Aciclovir (comprimido 200 mg; suspensão 200 mg/5 mL)",
      linha: "adj",
      dose: "Adulto: 400 mg 3×/dia (doença mais extensa: 400 mg 5×/dia). Criança: 15–20 mg/kg/dose (máx. 400 mg/dose) 4 a 5×/dia (uso off-label; doses variam entre fontes). Grave: aciclovir IV 10 mg/kg/dose de 8/8 h (adulto 5–10 mg/kg/dose)",
      via: "VO ou IV",
      intervalo: "Conforme dose",
      duracao: "7 a 10 dias (ou até cicatrização)",
      monitorizacao: "Hidratação, função renal se IV",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Eczema herpético. Ajustar na DRC. IV: diluir até concentração ≤ 7 mg/mL e infundir em 1 h. Lactente, doença extensa, febre ou acometimento ocular: internar/encaminhar no mesmo dia. RENAME/SUS"
    },
    {
      droga: "Anti-histamínico oral sedativo (dexclorfeniramina, hidroxizina)",
      linha: "adj",
      dose: "Dexclorfeniramina: adulto 2 mg à noite; criança ≥ 2 anos 0,15 mg/kg/dia (máx. 3 mg/dia 2–6 anos; 6 mg/dia 6–12 anos)",
      via: "VO",
      intervalo: "À noite",
      duracao: "Poucos dias, nos surtos com distúrbio do sono",
      monitorizacao: "Sonolência diurna",
      contraindicacoes: "< 2 anos",
      ajustes: "Anti-histamínicos não tratam o eczema; diretrizes não recomendam uso rotineiro. Útil só se urticária ou rinite associadas ou curto prazo para o sono"
    },
    {
      droga: "Ciclosporina, metotrexato, dupilumabe, upadacitinibe",
      linha: "alt",
      dose: "Ciclosporina 3–5 mg/kg/dia em 2 tomadas (especialista)",
      via: "VO / SC",
      intervalo: "Conforme especialista",
      duracao: "Conforme PCDT",
      monitorizacao: "Ciclosporina: PA e creatinina",
      contraindicacoes: "Conforme droga",
      ajustes: "Doença moderada a grave refratária ao tratamento tópico otimizado. Prescrição e acompanhamento pelo dermatologista via componente especializado (PCDT 2025). Pelo relatório da Conitec: dupilumabe para criança de 6 meses a < 12 anos com DA grave e falha, intolerância ou contraindicação à ciclosporina; upadacitinibe para 12 a 17 anos com ≥ 40 kg e DA grave refratária à ciclosporina — conferir critérios e oferta atual no PCDT"
    },
    {
      droga: "Corticoide oral, corticoide tópico potente na face, associações de corticoide com antifúngico e antibiótico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Corticoide sistêmico: evitar (rebote ao suspender); no máximo curso curto excepcional como ponte, por especialista. Associações comerciais (ex.: betametasona + gentamicina + cetoconazol) aumentam resistência, sensibilização e atrofia"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO OU CRIANÇA — SURTO LEVE A MODERADO\nUSO TÓPICO\n1. Hidratante sem perfume (creme ou loção) ------------------- 1 pote de 400 g ou mais\n   Aplicar em todo o corpo 2 vezes ao dia ou mais, sempre logo após o banho, com a pele ainda úmida. Usar todos os dias, mesmo sem lesões.\n2. Acetato de dexametasona 0,1% creme ---------------------- 1 bisnaga\n   Aplicar fina camada nas lesões do corpo (braços, pernas, tronco), 1 a 2 vezes ao dia, por até 14 dias ou até a pele ficar lisa. Não usar no rosto, dobras ou área de fralda.\n   Quantidade: a medida de creme da ponta do dedo indicador até a 1ª dobra cobre uma área de 2 palmas de mão de adulto.\n3. Acetato de hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Aplicar fina camada nas lesões do rosto, pescoço e dobras, 1 a 2 vezes ao dia, por até 7 a 14 dias.\n\nMANUTENÇÃO APÓS CONTROLE (se surtos frequentes)\n4. Aplicar o mesmo corticoide 2 vezes por semana (ex.: sábado e domingo) nas áreas que costumam voltar, e o hidratante todos os dias.\n\nALTERNATIVA PARA ROSTO, PÁLPEBRAS E DOBRAS OU FALHA AO CORTICOIDE (≥ 2 ANOS)\n5. Tacrolimo pomada 0,03% (criança ≥ 2 anos) ou 0,1% (≥ 16 anos) ---- 1 bisnaga 30 g\n   Aplicar fina camada nas lesões 2 vezes ao dia até melhorar; depois 2 vezes por semana nas áreas que costumam voltar. Pode arder nos primeiros dias. Usar protetor solar.\n\nSE COCEIRA ATRAPALHAR O SONO (poucos dias)\nUSO ORAL\n6. Dexclorfeniramina 2 mg --------------------------------- 10 comprimidos\n   Adulto: 1 comprimido à noite, por até 5 dias.\n   Criança ≥ 2 anos: dexclorfeniramina 0,4 mg/mL, 0,15 mg/kg/dia (2–6 anos máx. 7,5 mL/dia; 6–12 anos máx. 15 mL/dia), à noite.\n\nSE INFECÇÃO BACTERIANA SECUNDÁRIA\n7. Poucas lesões: mupirocina 2% pomada, 3 vezes ao dia por 5 dias.\n   Extensa: cefalexina 500 mg (28 cápsulas), 1 cápsula de 6 em 6 horas por 7 dias (criança: cefalexina 250 mg/5 mL, 25–50 mg/kg/dia divididos de 6/6 h, máx. 4 g/dia).\n\nSE ECZEMA HERPÉTICO LOCALIZADO, SEM FEBRE, ≥ 1 ANO (encaminhar se extenso)\n8. Aciclovir 200 mg (comprimido) ---------------------------- 42 a 60 comprimidos\n   Adulto: tomar 2 comprimidos (400 mg) de 8 em 8 horas por 7 a 10 dias.\n   Criança: aciclovir suspensão 200 mg/5 mL, 15–20 mg/kg/dose (máx. 400 mg/dose), 4 a 5 vezes ao dia, por 7 a 10 dias. Reavaliar em 24–48 h.",
    hospitalar: "ECZEMA HERPÉTICO EXTENSO, LACTENTE, FEBRE OU INFECÇÃO GRAVE (peso: ___ kg)\n1. Dieta oral livre conforme aceitação.\n2. Hidratação venosa de manutenção se baixa ingesta.\n3. Aciclovir — 10 mg/kg/dose IV de 8 em 8 horas (adulto 5–10 mg/kg/dose), diluído em SF 0,9% até concentração ≤ 7 mg/mL, infundir em 1 hora. Ajustar pela função renal. Passar para VO quando melhorar, completando 10 dias.\n4. Se infecção bacteriana secundária grave: oxacilina 2 g IV de 4/4 h (criança 150–200 mg/kg/dia divididos de 6/6 h, máx. 12 g/dia), diluída em 100 mL SF 0,9% em 30–60 min; OU cefazolina 1–2 g IV de 8/8 h (criança 50–100 mg/kg/dia divididos de 8/8 h, máx. 6 g/dia) em 100 mL SF em 30 min. Suspeita de MRSA: vancomicina (ver ficha Furúnculo e abscesso).\n5. Hidratante em todo o corpo 2–3 vezes ao dia; suspender corticoide tópico nas áreas com herpes até melhora.\n6. Dipirona 500 mg/mL — 15–25 mg/kg/dose IV ou VO de 6/6 h se dor ou febre (máx. 1 g/dose).\n7. Lesões perioculares: avaliação oftalmológica.\n8. Precaução de contato. Sinais vitais de 6/6 h; função renal em 48 h."
  },
  orientacoesRetorno: [
    "A dermatite atópica é crônica e vem em crises; não é contagiosa e tem controle",
    "Hidratar a pele todos os dias, mesmo sem lesões, é a parte mais importante do tratamento",
    "Banho morno (não quente), curto (5 a 10 minutos), sabonete suave só nas axilas, virilha, mãos e pés; secar sem esfregar e hidratar logo depois",
    "Roupas de algodão; evitar lã, tecidos sintéticos, perfumes e amaciante em excesso; unhas curtas",
    "O corticoide em creme é seguro quando usado como orientado; usar a quantidade certa até a pele ficar lisa e depois reduzir",
    "Não fazer dieta de exclusão de alimentos sem orientação médica",
    "Voltar no mesmo dia se aparecerem bolhinhas agrupadas, feridas redondas, febre, pus ou vermelhidão que se espalha",
    "Retornar em 2 a 4 semanas para avaliar a resposta e depois conforme as crises"
  ],
  destino: {
    agora: [
      "Eczema herpético: aciclovir no mesmo dia; extenso, febril, lactente ou periocular → PS/internação",
      "Eritrodermia ou infecção com sinais sistêmicos → PS"
    ],
    reavaliar: [
      "Surto: 2–4 semanas após início do tratamento (adesão, quantidade de creme, técnica)",
      "Controle estável: a cada 3–6 meses na UBS"
    ],
    alta: [
      "Surto leve a moderado sem infecção: tratamento domiciliar com plano escrito"
    ],
    observacao: ["—"],
    internacao: [
      "Eczema herpético extenso, em lactente, com febre ou toxemia",
      "Eritrodermia, infecção bacteriana grave, falha do tratamento domiciliar em doença muito grave"
    ],
    transferencia: [
      "Dermatologia (eletivo): doença moderada a grave sem controle após 4 semanas de tratamento tópico otimizado; necessidade de corticoide potente contínuo; candidato a fototerapia, ciclosporina, metotrexato ou imunobiológico (PCDT 2025)",
      "Alergia: suspeita de alergia alimentar com reação imediata; associação com asma de difícil controle",
      "Oftalmologia: eczema herpético periocular, queixas oculares (ceratoconjuntivite atópica)"
    ]
  },
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas da Dermatite Atópica, Portaria Conjunta SAES/SECTICS nº 28, de 27/11/2025, que revoga a Portaria Conjunta nº 34/2023 (tacrolimo pomada 0,03% e 0,1% e furoato de mometasona pomada 1 mg/g como 1ª linha para adulto e criança ≥ 2 anos; ciclosporina; dupilumabe e upadacitinibe conforme idade e gravidade) — conferir o texto integral no portal da Conitec",
    "Sociedade Brasileira de Pediatria e ASBAI — Guia prático de atualização em dermatite atópica: tratamento da dermatite atópica grave (2023)",
    "American Academy of Dermatology — Guidelines of care for the management of atopic dermatitis in adults with topical therapies (Sidbury et al., JAAD 2023) e with phototherapy and systemic therapies (Davis et al., JAAD 2024)",
    "EuroGuiDerm — Guideline on atopic eczema (Wollenberg et al., JEADV 2022/2023)",
    "Ministério da Saúde — RENAME 2024 (acetato de hidrocortisona 1% creme, acetato de dexametasona 0,1% creme, cefalexina, aciclovir, dexclorfeniramina)",
    "Bulas ANVISA: tacrolimo pomada (0,03% ≥ 2 anos; 0,1% ≥ 16 anos)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
