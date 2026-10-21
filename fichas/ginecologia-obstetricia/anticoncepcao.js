// Anticoncepção
registrarFicha({
  id: "anticoncepcao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Anticoncepção: escolha do método, DIU, implante e contracepção de emergência",
  resumo: "Planejamento reprodutivo na UBS: aconselhamento, critérios de elegibilidade da OMS (MEC 2025), início imediato (quick start), métodos do SUS (DIU de cobre, implante, injetáveis, pílulas, preservativos), contracepção de emergência e esterilização (Lei 14.443/2022).",
  palavrasChave: "anticoncepcao contracepcao anticoncepcional pilula aco ahco minipilula desogestrel noretisterona injetavel trimestral medroxiprogesterona depo mensal diu cobre diu hormonal levonorgestrel siu implante etonogestrel implanon pilula do dia seguinte emergencia laqueadura vasectomia planejamento reprodutivo criterios elegibilidade oms mec",
  critico: {
    tempo: "Gravidez razoavelmente excluída",
    texto: "Pode iniciar qualquer método no mesmo dia se houver certeza razoável de que não está grávida (critérios na tabela). Métodos de longa ação (DIU, implante) são os mais eficazes. Relação desprotegida nos últimos 5 dias: oferecer contracepção de emergência antes de tudo."
  },
  alarmes: [
    "Usuária de método hormonal combinado com: dor torácica, dispneia súbita, dor e edema em uma perna, cefaleia nova intensa ou com aura, perda visual, déficit neurológico (trombose, AVC)",
    "PA ≥ 160/100 em usuária de método combinado (suspender)",
    "Usuária de DIU com dor pélvica, febre, corrimento purulento ou dispareunia (DIP) ou fio não visualizado/haste palpável (expulsão/perfuração)",
    "Atraso menstrual com dor abdominal e sangramento em usuária de DIU ou só de progestagênio (gravidez ectópica)",
    "Dor ou alteração neurológica no braço do implante (migração/lesão nervosa)"
  ],
  condutaInicial: [
    "Aconselhamento centrado na mulher: desejo de gestar, eficácia (uso típico), efeitos no sangramento, amamentação, IST, preferência",
    "Anamnese de elegibilidade (MEC/OMS): idade, tabagismo, PA, enxaqueca com aura, TEV, trombofilia, AVC/DAC, câncer de mama, hepatopatia, amamentação/pós-parto, medicamentos indutores enzimáticos",
    "Medir PA (obrigatório antes de método combinado); peso e IMC",
    "Excluir gravidez razoavelmente (critérios da tabela) ou teste de gravidez se dúvida",
    "Oferecer LARC (DIU de cobre, implante, SIU-LNG) a todas, inclusive adolescentes e nulíparas",
    "Iniciar o método no mesmo dia (quick start) e orientar método de apoio quando indicado",
    "Ofertar preservativo e testes rápidos de HIV, sífilis e hepatites (dupla proteção)"
  ],
  fataisExcluir: [
    "Gravidez (incluindo ectópica) antes de inserir DIU",
    "Trombose venosa / TEP em usuária de método com estrogênio",
    "AVC em mulher com enxaqueca com aura usando estrogênio",
    "DIP / abscesso tubo-ovariano em usuária de DIU"
  ],
  proximaDecisao: "Categoria 1–2 do MEC → oferecer o método. Categoria 3 → só se não houver alternativa aceitável, com acompanhamento. Categoria 4 → não usar. Usuária satisfeita sem problemas → retorno anual (ou conforme método).",
  clinica: {
    anamnese: [
      "Data da última menstruação, ciclo, relações desprotegidas recentes (últimos 5 dias → emergência)",
      "Paridade, desejo e prazo para gestar, amamentação e data do parto/aborto",
      "Tabagismo (quantidade) e idade",
      "Enxaqueca (com ou sem aura), HAS, DM e tempo de doença, dislipidemia, TEV prévio ou familiar, trombofilia, AVC/IAM, valvopatia, lúpus (anticorpo antifosfolípide)",
      "Câncer de mama, hepatopatia, cirurgia de grande porte próxima, obesidade, cirurgia bariátrica (absorção oral)",
      "Medicamentos: carbamazepina, fenitoína, fenobarbital, topiramato, rifampicina, efavirenz, lamotrigina (interação bidirecional)",
      "Sangramento uterino anormal sem diagnóstico, IST/DIP recentes",
      "Experiências prévias com métodos e motivos de abandono"
    ],
    exameFisico: [
      "PA (obrigatória para combinados), peso, IMC",
      "Exame especular e toque bimodal antes do DIU (tamanho e posição do útero, cervicite)",
      "Não são necessários antes de iniciar hormônios: exame de mamas, citologia, exames laboratoriais"
    ],
    diferenciais: [
      { dx: "Sangramento irregular com progestagênio isolado", pista: "Esperado (implante, AMPD, minipílula); excluir gravidez, IST e lesão de colo" },
      { dx: "Amenorreia em usuária de AMPD/SIU", pista: "Efeito esperado; teste de gravidez se dúvida" },
      { dx: "Dor pélvica em usuária de DIU", pista: "Mau posicionamento, expulsão, DIP, gravidez ectópica" }
    ],
    gravidade: [
      "MEC categoria 1: sem restrição · 2: vantagens superam riscos · 3: riscos geralmente superam vantagens · 4: risco inaceitável",
      "Combinados categoria 4 (exemplos): ≥ 35 anos fumante ≥ 15 cigarros/dia; PA ≥ 160/100 ou doença vascular; enxaqueca com aura; TEV atual ou prévio; trombofilia; AVC/DAC; valvopatia complicada; câncer de mama atual; tumor hepático/cirrose descompensada; LES com antifosfolípide positivo; pós-parto < 21 dias sem amamentar ou < 6 semanas amamentando (MEC 5ª ed.; conferir na tabela da 6ª ed.)",
      "DIU categoria 4: gravidez; sepse puerperal ou pós-aborto séptico; DIP ou cervicite purulenta/clamídia/gonorreia atual; sangramento vaginal inexplicado; câncer de colo ou endométrio aguardando tratamento; cavidade uterina distorcida; tuberculose pélvica",
      "DIU no pós-parto (MEC 2025): até 48 h cobre categoria 1 (SIU-LNG 2); de 48 h a < 4 semanas categoria 3; ≥ 4 semanas categoria 1"
    ]
  },
  exames: [
    {
      nome: "Teste de gravidez",
      pedido: "Teste rápido de gravidez (urina) ou beta-hCG sérico.",
      porQue: "Quando não é possível excluir gravidez pelos critérios clínicos.",
      esperar: "Negativo.",
      interpretacao: "Negativo com relação desprotegida há < 2–3 semanas não exclui gravidez: iniciar método hormonal (não DIU) e repetir o teste em 3–4 semanas.",
      limitacoes: "Não é obrigatório se a mulher preenche critério clínico."
    },
    {
      nome: "Testes rápidos de IST",
      pedido: "Testes rápidos de HIV, sífilis, hepatite B e hepatite C.",
      porQue: "Oferta de rotina no planejamento reprodutivo.",
      esperar: "—",
      interpretacao: "Reagente: seguir fluxo específico.",
      limitacoes: "Rastreio de clamídia/gonorreia antes do DIU só se risco e disponível; não atrasar a inserção."
    },
    {
      nome: "Exames não necessários para iniciar",
      pedido: "Não solicitar rotineiramente: colesterol, glicemia, coagulograma, trombofilia, ultrassonografia, citologia.",
      porQue: "Não mudam a elegibilidade e atrasam o acesso (OMS/SPR).",
      esperar: "—",
      interpretacao: "Trombofilia só se história pessoal/familiar sugestiva e isso mudaria a escolha.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "DIU de cobre TCu 380A",
      linha: "l1",
      dose: "1 dispositivo inserido por médico(a) ou enfermeiro(a) capacitado(a)",
      via: "Intrauterina",
      intervalo: "—",
      duracao: "10 anos (eficácia comprovada até 12)",
      monitorizacao: "Revisão em 4–12 semanas (fio); depois anual",
      contraindicacoes: "Categoria 4 do MEC (ver gravidade)",
      ajustes: "Inserir em qualquer dia do ciclo se gravidez excluída; sem método de apoio. Pós-parto até 48 h ou ≥ 4 semanas. Aumenta fluxo e cólica: AINE nos primeiros meses. Também serve de emergência até 5 dias"
    },
    {
      droga: "Implante subdérmico de etonogestrel 68 mg",
      linha: "l1",
      dose: "1 bastonete no braço não dominante",
      via: "Subdérmica",
      intervalo: "—",
      duracao: "3 anos",
      monitorizacao: "Padrão de sangramento",
      contraindicacoes: "Câncer de mama atual; outras categorias 3–4 do MEC",
      ajustes: "Oferta ampliada no SUS (Portaria SECTICS/MS nº 47/2025). Até o 5º dia do ciclo sem apoio; depois, preservativo por 7 dias. Indutores enzimáticos reduzem a eficácia"
    },
    {
      droga: "SIU de levonorgestrel 52 mg",
      linha: "alt",
      dose: "1 dispositivo",
      via: "Intrauterina",
      intervalo: "—",
      duracao: "Conforme a bula do produto registrado (5 anos; estudos e FDA: até 8 anos para contracepção); 5 anos se uso para fluxo intenso",
      monitorizacao: "Revisão em 4–12 semanas",
      contraindicacoes: "Semelhantes ao DIU de cobre; câncer de mama atual",
      ajustes: "Reduz fluxo e cólica. Disponibilidade no SUS limitada a indicações específicas conforme local. Até o 7º dia do ciclo sem apoio; depois, 7 dias de preservativo"
    },
    {
      droga: "Acetato de medroxiprogesterona de depósito (AMPD)",
      linha: "l1",
      dose: "150 mg (1 mL)",
      via: "IM profunda (deltoide ou glúteo)",
      intervalo: "A cada 3 meses (13 semanas); pode ser aplicada até 4 semanas de atraso",
      duracao: "Contínuo",
      monitorizacao: "Peso, sangramento; retorno da fertilidade pode demorar meses",
      contraindicacoes: "Câncer de mama atual; múltiplos fatores de risco cardiovascular (cat. 3)",
      ajustes: "Até o 7º dia do ciclo sem apoio; depois, 7 dias de preservativo. Opção com indutores enzimáticos. Reduz densidade óssea de forma reversível"
    },
    {
      droga: "Enantato de noretisterona 50 mg + valerato de estradiol 5 mg (injetável mensal)",
      linha: "alt",
      dose: "1 ampola",
      via: "IM profunda",
      intervalo: "A cada 4 semanas (OMS: pode ser aplicada até 7 dias antes ou depois da data)",
      duracao: "Contínuo",
      monitorizacao: "PA",
      contraindicacoes: "As mesmas dos combinados (contém estrogênio)",
      ajustes: "1ª dose até o 5º dia do ciclo"
    },
    {
      droga: "Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg (AHCO)",
      linha: "l1",
      dose: "1 comprimido ao dia",
      via: "VO",
      intervalo: "21 dias + pausa de 7 dias (ou uso contínuo)",
      duracao: "Contínuo",
      monitorizacao: "PA na revisão e anual",
      contraindicacoes: "Categoria 4 do MEC para combinados (ver gravidade)",
      ajustes: "Início até o 5º dia do ciclo sem apoio; depois, 7 dias de preservativo. Esquecimento ≥ 2 comprimidos: tomar o último esquecido, continuar e usar preservativo por 7 dias (se na 3ª semana, emendar a cartela; se na 1ª semana com relação, emergência)"
    },
    {
      droga: "Noretisterona 0,35 mg (minipílula) ou desogestrel 75 mcg",
      linha: "alt",
      dose: "1 comprimido ao dia, sem pausa",
      via: "VO",
      intervalo: "Mesmo horário (noretisterona: atraso > 3 h = esquecimento; desogestrel: > 12 h)",
      duracao: "Contínuo",
      monitorizacao: "Sangramento",
      contraindicacoes: "Câncer de mama atual",
      ajustes: "Opção na amamentação e quando estrogênio é contraindicado. Início fora dos primeiros 5 dias: preservativo por 2 dias"
    },
    {
      droga: "Levonorgestrel 1,5 mg (contracepção de emergência)",
      linha: "l1",
      dose: "1,5 mg (1 comprimido de 1,5 mg ou 2 de 0,75 mg juntos)",
      via: "VO",
      intervalo: "Dose única",
      duracao: "O mais cedo possível, até 120 h (mais eficaz até 72 h)",
      monitorizacao: "Teste de gravidez se menstruação atrasar > 7 dias",
      contraindicacoes: "Nenhuma relevante (MEC categoria 1); não é abortiva",
      ajustes: "Pode ser repetida no mesmo ciclo (MEC 2025). Iniciar método regular no mesmo dia (preservativo por 7 dias). Peso > 70 kg ou IMC > 26–30: eficácia menor — preferir DIU de cobre (FSRH sugere 3 mg)"
    },
    {
      droga: "Preservativo masculino/feminino e diafragma",
      linha: "adj",
      dose: "Em toda relação",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Alergia ao látex (usar sem látex/feminino)",
      ajustes: "Única proteção contra IST; recomendar em associação (dupla proteção)"
    },
    {
      droga: "Métodos com estrogênio na presença de categoria 4 do MEC",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Enxaqueca com aura, ≥ 35 anos fumante de ≥ 15 cigarros/dia, PA ≥ 160/100, TEV, trombofilia, AVC/DAC, câncer de mama, pós-parto recente (< 21 dias sem amamentar; < 6 semanas amamentando)",
      ajustes: "Trocar por DIU, implante, AMPD ou pílula só de progestagênio"
    }
  ],
  destino: {
    agora: [
      "Iniciar o método escolhido na mesma consulta (inserção de DIU/implante na UBS se houver profissional capacitado e material)",
      "Emergência quando houver relação desprotegida nos últimos 5 dias"
    ],
    reavaliar: [
      "DIU: revisão em 4–12 semanas (após a próxima menstruação)",
      "Método hormonal novo: retorno em 3 meses para adesão, efeitos e PA",
      "Teste de gravidez em 3–4 semanas se início com gravidez não totalmente excluída"
    ],
    alta: [
      "Usuária adaptada: retorno anual ou a qualquer momento se problemas ou desejo de troca"
    ],
    observacao: ["—"],
    internacao: [
      "Suspeita de TEP/AVC em usuária de hormônio: PS",
      "Suspeita de DIP grave/abscesso ou perfuração uterina: PS ginecológico"
    ],
    transferencia: [
      "Ginecologia/serviço de referência: inserção de DIU/implante não disponível na UBS, retirada de implante não palpável, DIU com fio não visualizado e não visto na USG",
      "Laqueadura ou vasectomia: Lei 14.443/2022 — maiores de 21 anos OU com pelo menos 2 filhos vivos; prazo mínimo de 60 dias entre a manifestação de vontade e a cirurgia, com aconselhamento; não exige consentimento do cônjuge"
    ]
  },
  prescricao: {
    ambulatorial: "PÍLULA COMBINADA\nUSO ORAL\n1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, no mesmo horário, por 21 dias; fazer pausa de 7 dias e iniciar nova cartela no 8º dia. Começar hoje; se já passou o 5º dia da menstruação, usar camisinha nos primeiros 7 dias.\n\nPÍLULA SÓ DE PROGESTAGÊNIO (amamentação ou contraindicação a estrogênio)\n2. Noretisterona 0,35 mg ------------------------------ 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, sem pausa entre as cartelas.\n\nINJETÁVEL TRIMESTRAL (USO INTRAMUSCULAR)\n3. Acetato de medroxiprogesterona 150 mg/mL ----------- 1 ampola\n   Aplicar 1 mL IM profundo hoje e a cada 3 meses (próxima: ___/___/___).\n\nINJETÁVEL MENSAL (USO INTRAMUSCULAR)\n4. Enantato de noretisterona 50 mg + valerato de estradiol 5 mg -- 1 ampola\n   Aplicar 1 ampola IM a cada 4 semanas (próxima: ___/___/___).\n\nCONTRACEPÇÃO DE EMERGÊNCIA (USO ORAL)\n5. Levonorgestrel 1,5 mg ------------------------------- 1 comprimido\n   Tomar 1 comprimido o quanto antes, até 5 dias após a relação (melhor nas primeiras 72 horas).\n   (Se só houver 0,75 mg: tomar 2 comprimidos juntos.)\n\nPRESERVATIVOS\n6. Preservativo masculino ou feminino ------------------ ___ unidades\n   Usar em todas as relações.\n\nAPÓS INSERÇÃO DE DIU (SE CÓLICA)\n7. Ibuprofeno 400 mg ----------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, com alimento, se cólica, por até 3 dias."
  },
  orientacoesRetorno: [
    "Nenhum método é 100%; DIU e implante são os mais eficazes porque não dependem de lembrar",
    "Camisinha é o único método que protege contra IST: usar junto com o método escolhido",
    "Sangramento irregular nos primeiros meses é comum com implante, injeção e minipílula; procurar a UBS se incomodar",
    "Pílula esquecida: tomar assim que lembrar; se esqueceu 2 ou mais, usar camisinha por 7 dias e procurar a UBS (pode precisar de pílula de emergência)",
    "Procurar atendimento imediatamente se: dor no peito, falta de ar, dor e inchaço em uma perna, dor de cabeça muito forte ou diferente, perda de visão ou fraqueza em um lado do corpo",
    "Com DIU: procurar a UBS se febre, dor na barriga, corrimento com cheiro ruim, atraso menstrual ou se sentir a haste do DIU",
    "Retornar na data da próxima injeção, na revisão do DIU, e uma vez por ano"
  ],
  tabelas: [
    {
      titulo: "Certeza razoável de que não está grávida (OMS/SPR)",
      colunas: ["Basta um dos critérios (e sem sinais de gravidez)"],
      linhas: [
        ["Até 7 dias após o início da menstruação"],
        ["Sem relação sexual desde a última menstruação"],
        ["Usando corretamente um método confiável"],
        ["Até 7 dias após aborto"],
        ["Até 4 semanas após o parto"],
        ["Amamentação exclusiva, em amenorreia e com menos de 6 meses de pós-parto"]
      ]
    },
    {
      titulo: "Início fora dos primeiros dias do ciclo: tempo de método de apoio",
      colunas: ["Método", "Sem apoio se iniciado até", "Apoio (preservativo) depois disso"],
      linhas: [
        ["DIU de cobre", "Qualquer dia", "Não precisa"],
        ["SIU-LNG", "7º dia do ciclo", "7 dias"],
        ["Implante", "5º dia do ciclo", "7 dias"],
        ["AMPD trimestral", "7º dia do ciclo", "7 dias"],
        ["Combinado (pílula ou mensal)", "5º dia do ciclo", "7 dias"],
        ["Pílula só de progestagênio", "5º dia do ciclo", "2 dias"]
      ],
      nota: "OMS — Selected Practice Recommendations, 4ª edição (2025)."
    },
    {
      titulo: "Eficácia (gestações por 100 mulheres no 1º ano, uso típico, OMS)",
      colunas: ["Método", "Falha"],
      linhas: [
        ["Implante", "0,1"],
        ["SIU-LNG", "0,7"],
        ["DIU de cobre", "0,8"],
        ["Injetável (AMPD)", "4"],
        ["Pílula combinada ou só de progestagênio", "7"],
        ["Preservativo masculino", "13"]
      ],
      nota: "OMS/Johns Hopkins — Family Planning: A Global Handbook for Providers (2022)."
    }
  ],
  fontes: [
    "OMS — Medical eligibility criteria for contraceptive use, 6ª edição (2025)",
    "OMS — Selected practice recommendations for contraceptive use, 4ª edição (2025)",
    "OMS/Johns Hopkins — Family Planning: A Global Handbook for Providers (2022)",
    "Ministério da Saúde — Portaria SECTICS/MS nº 47/2025 (ampliação do implante de etonogestrel no SUS)",
    "Brasil — Lei nº 14.443/2022 (planejamento familiar/esterilização)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 26: Saúde sexual e saúde reprodutiva (2013)",
    "FEBRASGO — Manual de Anticoncepção (2021)",
    "FSRH — Emergency Contraception guideline (2017, atualizado 2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
