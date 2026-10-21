// Puericultura (consulta de acompanhamento da criança)
registrarFicha({
  id: "puericultura",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Puericultura",
  resumo: "Consulta de acompanhamento da criança saudável de 0 a 9 anos na UBS: calendário de consultas, crescimento, desenvolvimento, alimentação, suplementação, vacinação e triagens neonatais.",
  palavrasChave: "puericultura consulta de rotina crianca saudavel crescimento desenvolvimento marcos caderneta da crianca curva oms vacina calendario pni vitamina d ferro vitamina a teste do pezinho orelhinha olhinho coracaozinho linguinha aleitamento materno alimentacao complementar",
  critico: {
    tempo: "1ª consulta na 1ª semana de vida",
    texto: "Primeira consulta até o 5º–7º dia (junto com teste do pezinho e avaliação da amamentação). Toda consulta: peso, estatura, PC (até 2 anos) no gráfico da Caderneta, marcos do desenvolvimento e vacinas."
  },
  alarmes: [
    "Perda de peso > 10% do peso de nascimento ou não recuperação do peso de nascimento até 10–14 dias",
    "Icterícia nas primeiras 24 h, icterícia que progride para abaixo do umbigo ou persiste após 14 dias (prematuro: 21 dias), acolia ou colúria",
    "Curva de peso ou estatura cruzando 2 linhas de escore-z para baixo, ou abaixo do escore-z −2",
    "Perímetro cefálico abaixo de −2 ou acima de +2 escores-z, ou crescimento desproporcional; fontanela abaulada",
    "Ausência de marcos para a idade (sinal de alerta na Caderneta) ou perda de habilidades já adquiridas (regressão)",
    "Reflexo vermelho ausente, assimétrico ou branco (leucocoria)",
    "Teste do pezinho alterado ou oximetria de triagem positiva",
    "Sinais de violência ou negligência (lesões incompatíveis com a história, atraso vacinal grave sem justificativa)"
  ],
  condutaInicial: [
    "Conferir Caderneta da Criança: dados do parto, Apgar, IG, peso, triagens neonatais e vacinas",
    "Anamnese dirigida: alimentação, sono, eliminações, intercorrências, rotina, quem cuida, rede de apoio, saúde mental materna",
    "Medir peso, comprimento/estatura e PC (até 2 anos); IMC a partir do nascimento; registrar nas curvas da OMS da Caderneta",
    "Avaliar marcos do desenvolvimento da faixa etária; M-CHAT-R/F aos 18 meses (rastreio de TEA)",
    "Exame físico completo (inclui reflexo vermelho, quadris/Ortolani-Barlow, genitália, testículos, pele, fontanelas); PA anual a partir de 3 anos",
    "Orientar alimentação, sono seguro, prevenção de acidentes; prescrever suplementos; atualizar vacinas; agendar o próximo retorno"
  ],
  fataisExcluir: [
    "Desidratação ou desnutrição grave no RN por falha de amamentação",
    "Icterícia patológica / atresia de vias biliares (acolia)",
    "Cardiopatia congênita crítica (oximetria alterada, sopro, cianose, pulsos femorais ausentes)",
    "Retinoblastoma e catarata congênita (reflexo vermelho alterado)",
    "Maus-tratos e negligência"
  ],
  proximaDecisao: "Criança com crescimento e marcos adequados → manter calendário de consultas e suplementos. Algum marco ausente para a faixa → orientar estimulação e reavaliar em 30 dias; ausência de marcos da faixa anterior, regressão ou alteração do exame neurológico → encaminhar para avaliação do desenvolvimento (pediatria, neuropediatria, CER/reabilitação).",
  clinica: {
    anamnese: [
      "Gestação e parto: pré-natal, sorologias maternas (sífilis, HIV, toxoplasmose, hepatite B), IG, peso ao nascer, Apgar, intercorrências neonatais, tipo sanguíneo materno",
      "Alimentação: aleitamento materno (pega, frequência, dor mamilar), fórmula (diluição correta), alimentação complementar a partir dos 6 meses, ultraprocessados, açúcar, telas nas refeições",
      "Eliminações: diurese (RN: ≥ 6 fraldas/dia após o 5º dia), cor das fezes (cartela de cor das fezes da Caderneta)",
      "Sono: local e posição (de barriga para cima, berço próprio no quarto dos pais, sem travesseiros/protetores)",
      "Desenvolvimento: o que a criança já faz; preocupações dos pais; creche/escola; tempo de tela",
      "Contexto: quem cuida, condições de moradia, saneamento, renda, programas sociais (Bolsa Família exige acompanhamento de peso/vacinas), violência doméstica",
      "Saúde mental materna: tristeza, anedonia, ansiedade (rastrear depressão pós-parto)",
      "Vacinas e suplementos em uso"
    ],
    exameFisico: [
      "Antropometria: peso (criança despida), comprimento deitado até 2 anos, estatura em pé após 2 anos, PC até 2 anos; IMC",
      "Pele: icterícia (zona de Kramer), palidez, manchas café com leite (> 6), hemangiomas, lesões suspeitas de maus-tratos",
      "Crânio: fontanelas (anterior fecha em geral entre 9 e 18 meses), suturas, formato (plagiocefalia)",
      "Olhos: reflexo vermelho (teste do olhinho) em todas as consultas dos primeiros anos; alinhamento ocular (estrabismo após 6 meses é anormal)",
      "Cardiovascular: sopros, pulsos femorais, FC; PA anual a partir de 3 anos (antes, se fatores de risco)",
      "Abdome: coto umbilical, hérnias, massas, hepatoesplenomegalia",
      "Genitália: testículos na bolsa, hipospádia, sinéquias; ânus pérvio",
      "Quadril: Ortolani e Barlow até 3 meses; depois limitação de abdução e assimetria de pregas",
      "Neurológico: tônus, reflexos primitivos (Moro, preensão, sucção) e seu desaparecimento esperado, marcos"
    ],
    diferenciais: [
      { dx: "Baixo ganho de peso por técnica de amamentação", pista: "Pega inadequada, mamadas curtas ou espaçadas, dor mamilar; melhora com correção da pega" },
      { dx: "Baixa estatura familiar ou atraso constitucional", pista: "Velocidade de crescimento normal, paralela à curva; pais baixos ou história familiar de puberdade tardia" },
      { dx: "Desnutrição secundária (doença crônica, parasitose, alergia alimentar, negligência)", pista: "Desaceleração de peso antes da estatura; diarreia, infecções de repetição" },
      { dx: "Atraso global do desenvolvimento ou TEA", pista: "Atraso em vários domínios; pouco contato visual, não aponta, não atende pelo nome, M-CHAT-R/F positivo" },
      { dx: "Déficit auditivo", pista: "Atraso de linguagem, não reage a sons; orelhinha falha ou fator de risco (IRDA)" }
    ],
    gravidade: [
      "Peso/idade ou peso/estatura < escore-z −3: desnutrição grave → avaliar internação",
      "Peso/idade < escore-z −2: baixo peso; estatura/idade < escore-z −2: baixa estatura",
      "IMC/idade (0–5 anos): > +1 risco de sobrepeso, > +2 sobrepeso, > +3 obesidade",
      "IMC/idade (5–19 anos): > +1 sobrepeso, > +2 obesidade, > +3 obesidade grave",
      "Desenvolvimento (Caderneta): marcos da faixa presentes = adequado; algum marco da faixa ausente = alerta (estimular e reavaliar em 30 dias); marcos da faixa anterior ausentes = provável atraso (encaminhar)"
    ]
  },
  exames: [
    {
      nome: "Triagem neonatal biológica (teste do pezinho)",
      pedido: "Triagem neonatal biológica (teste do pezinho) — coleta em papel-filtro.",
      porQue: "Rastrear doenças congênitas tratáveis (hipotireoidismo congênito, fenilcetonúria, doença falciforme e hemoglobinopatias, fibrose cística, deficiência de biotinidase, hiperplasia adrenal congênita; ampliação progressiva pela Lei 14.154/2021).",
      esperar: "Resultado normal.",
      interpretacao: "Alterado: convocar a família imediatamente e encaminhar ao serviço de referência em triagem neonatal do estado.",
      limitacoes: "Coleta ideal entre o 3º e o 5º dia de vida (não antes de 48 h de amamentação). Transfusão, prematuridade e nutrição parenteral alteram resultados; seguir orientação do serviço de referência sobre recoleta."
    },
    {
      nome: "Triagens neonatais clínicas (olhinho, orelhinha, coraçãozinho, linguinha)",
      pedido: "Conferir na Caderneta: teste do reflexo vermelho, triagem auditiva neonatal (EOA ou PEATE-A), oximetria de pulso (teste do coraçãozinho) e avaliação do frênulo lingual. Se não realizados: solicitar triagem auditiva neonatal e realizar reflexo vermelho na consulta.",
      porQue: "Detectar catarata/retinoblastoma, perda auditiva, cardiopatia congênita crítica e anquiloglossia que prejudica a amamentação.",
      esperar: "Reflexo vermelho presente e simétrico; EOA/PEATE-A 'passa' bilateral; oximetria ≥ 95% em membro superior direito e em membro inferior, com diferença < 3%.",
      interpretacao: "Reflexo vermelho alterado → oftalmologia com prioridade. Falha auditiva → reteste em até 30 dias e, se mantiver, diagnóstico audiológico até 3 meses. Oximetria alterada (< 95% ou diferença ≥ 3%) → repetir em 1 h; se mantida → ecocardiograma em até 24 h.",
      limitacoes: "Triagem auditiva ideal até 30 dias; RN com indicador de risco para deficiência auditiva (UTI > 5 dias, infecções congênitas, ototóxicos, história familiar) deve fazer PEATE-A e acompanhamento."
    },
    {
      nome: "Hemograma (rastreio de anemia)",
      pedido: "Hemograma completo. Ferritina sérica e PCR se hemoglobina baixa.",
      porQue: "Anemia ferropriva é a carência mais comum na infância; rastrear em grupos de risco.",
      esperar: "Hb ≥ 10,5 g/dL (6–23 meses) e ≥ 11 g/dL (24–59 meses) — OMS 2024.",
      interpretacao: "Hb baixa com microcitose e ferritina baixa → tratar como ferropriva (ver ficha anemia-ferropriva-crianca).",
      limitacoes: "Não é obrigatório para toda criança; a SBP sugere rastreio por volta dos 12 meses, especialmente em grupos de risco. Ferritina sobe na inflamação."
    },
    {
      nome: "Exames conforme risco (não de rotina)",
      pedido: "Conforme indicação: parasitológico de fezes (3 amostras) se sintomas ou área de risco; perfil lipídico (CT, HDL, TG, LDL) se história familiar de dislipidemia/doença cardiovascular precoce ou obesidade; glicemia de jejum e TGP/ALT se obesidade; urina tipo 1 não é de rotina.",
      porQue: "Direcionar investigação a quem tem risco.",
      esperar: "Normais.",
      interpretacao: "Rastreio universal de lipídios: SBP/SBC sugerem uma vez entre 9 e 11 anos; antes (a partir de 2 anos) só com fator de risco.",
      limitacoes: "Exames de rotina sem indicação geram falso-positivos e custos."
    }
  ],
  tratamento: [
    {
      droga: "Vitamina D (colecalciferol)",
      linha: "l1",
      dose: "400 UI/dia do nascimento (1ª semana) aos 12 meses; 600 UI/dia dos 12 aos 24 meses",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Até 24 meses (SBP); manter em grupos de risco após essa idade",
      monitorizacao: "Não precisa dosar 25(OH)D de rotina",
      contraindicacoes: "Hipercalcemia",
      ajustes: "Indicada mesmo em aleitamento materno exclusivo. Lactente em fórmula: considerar a vitamina D da fórmula. Apresentações em gotas variam (ex.: 200 UI/gota ou 400 UI/gota): conferir antes de prescrever. Não é item RENAME para profilaxia; disponível em farmácias."
    },
    {
      droga: "Sulfato ferroso (profilaxia) — PNSF/Ministério da Saúde",
      linha: "l1",
      dose: "10–12,5 mg/dia de ferro elementar (dose fixa), a termo com peso adequado",
      via: "VO",
      intervalo: "1 vez ao dia, longe do leite (30–60 min antes das refeições, com suco de fruta cítrica se possível)",
      duracao: "3 meses diários, pausa de 3 meses e novo ciclo: 2 ciclos entre 6 e 24 meses (de preferência a partir dos 6 e dos 12 meses)",
      monitorizacao: "Hemograma se suspeita clínica de anemia",
      contraindicacoes: "Hemocromatose, anemia não ferropriva, hemólise",
      ajustes: "SUS: sulfato ferroso solução oral 25 mg/mL de Fe elementar (1 gota ≈ 1,25 mg) ou xarope do PNSF. Prematuros e baixo peso: iniciar mais cedo e em dose maior (ver ficha anemia-ferropriva-crianca). Esquema do Caderno dos Programas Nacionais de Suplementação de Micronutrientes (MS, 2022), que substituiu o antigo 1 mg/kg/dia contínuo; a SBP 2026 recomenda o mesmo esquema em ciclos. Seguir o protocolo local."
    },
    {
      droga: "Vitamina A (megadose) — Programa Nacional de Suplementação de Vitamina A",
      linha: "l1",
      dose: "6–11 meses: 100.000 UI em dose única · 12–59 meses: 200.000 UI a cada 6 meses",
      via: "VO (cápsula aberta, gotejar na boca)",
      intervalo: "A cada 6 meses (12–59 meses)",
      duracao: "Até 59 meses",
      monitorizacao: "Registrar na Caderneta para não repetir antes de 6 meses",
      contraindicacoes: "Megadose recebida há menos de 6 meses (risco de hipervitaminose A)",
      ajustes: "Nas regiões e populações prioritárias definidas pelo Ministério da Saúde (Norte, Nordeste, partes do Centro-Oeste e Sudeste, DSEI); conferir a abrangência local."
    }
  ],
  destino: {
    agora: [
      "Registrar antropometria, marcos e vacinas na Caderneta e no prontuário",
      "Atualizar vacinas no mesmo dia (não perder oportunidade)"
    ],
    reavaliar: [
      "Calendário mínimo do Ministério da Saúde: 1ª semana; 1, 2, 4, 6, 9 e 12 meses (7 consultas no 1º ano); 18 e 24 meses; depois anual, próximo ao aniversário",
      "Consultas extras: baixo ganho de peso, alerta de desenvolvimento (30 dias), RN de risco (prematuro, baixo peso, mãe adolescente, vulnerabilidade social)"
    ],
    alta: [
      "Criança saudável segue em acompanhamento na UBS pela equipe de Saúde da Família (consultas intercaladas médico/enfermagem)"
    ],
    observacao: ["—"],
    internacao: [
      "Desnutrição grave (escore-z < −3) com complicações, desidratação, icterícia com critério de fototerapia"
    ],
    transferencia: [
      "Referência em triagem neonatal (pezinho alterado); oftalmologia (reflexo vermelho alterado); audiologia (falha na orelhinha); cardiologia pediátrica (oximetria alterada, sopro patológico); ortopedia (displasia do quadril); neuropediatria/reabilitação (atraso de desenvolvimento)"
    ]
  },
  prescricao: {
    ambulatorial: "PUERICULTURA — SUPLEMENTAÇÃO (peso: ___ kg; idade: ___)\nUSO ORAL\n1. Colecalciferol (vitamina D) gotas ------------------- 1 frasco\n   Dar ___ gotas (= 400 UI) 1 vez ao dia, todos os dias, até 1 ano. De 1 a 2 anos: ___ gotas (= 600 UI) 1 vez ao dia.\n   (Conferir a concentração do frasco: há apresentações de 200 UI e de 400 UI por gota.)\n\n2. Sulfato ferroso solução oral 25 mg/mL de ferro elementar (1 gota = 1,25 mg) ------ 1 frasco\n   A partir dos 6 meses: dar 8 a 10 gotas (10 a 12,5 mg) 1 vez ao dia, 30 minutos antes do almoço, por 3 meses. Depois, pausa de 3 meses e novo ciclo de 3 meses a partir dos 12 meses (2 ciclos até os 2 anos).\n   Prematuro ou baixo peso ao nascer: dose por kg desde os 30 dias (ver ficha anemia-ferropriva-crianca).\n\nVITAMINA A (na UBS, regiões do programa)\n3. Vitamina A 100.000 UI (6 a 11 meses) ou 200.000 UI (12 a 59 meses) — 1 cápsula VO na unidade; repetir a cada 6 meses dos 12 aos 59 meses.\n\nORIENTAÇÕES\n- Aleitamento materno exclusivo até 6 meses (sem água, chás ou outros leites); manter até 2 anos ou mais.\n- A partir dos 6 meses: comida da família amassada, com feijão, carne/ovo, legumes, verduras e frutas; sem açúcar até 2 anos; sem mel até 1 ano; evitar ultraprocessados e sucos industrializados.\n- Dormir de barriga para cima, no berço, sem travesseiro, protetor ou bichos de pelúcia.\n- Sem telas antes dos 2 anos; de 2 a 5 anos, até 1 hora por dia, com supervisão."
  },
  orientacoesRetorno: [
    "Trazer sempre a Caderneta da Criança em todas as consultas e vacinas",
    "Ferro pode escurecer as fezes e manchar os dentes: dar com conta-gotas no fundo da boca e escovar os dentes depois",
    "Voltar imediatamente se: febre em bebê menor de 3 meses, recusa alimentar, vômitos repetidos, gemência, respiração rápida ou com esforço, pele amarelada que aumenta, fezes claras (como massa de vidraceiro), convulsão, moleza ou sonolência excessiva",
    "Procurar a UBS antes do retorno se o bebê não ganhar peso, mamar pouco ou se a família notar que ele deixou de fazer algo que já fazia",
    "Próxima consulta conforme o calendário: 1ª semana; 1, 2, 4, 6, 9, 12, 18 e 24 meses; depois 1 vez por ano"
  ],
  tabelas: [
    {
      titulo: "Marcos do desenvolvimento (Caderneta da Criança — Ministério da Saúde)",
      colunas: ["Idade", "Marcos esperados (exemplos)"],
      linhas: [
        ["Até 1 mês", "Postura de flexão, observa um rosto, reage ao som, eleva a cabeça de bruços"],
        ["1–2 meses", "Sorriso social, abre as mãos, emite sons, movimenta ativamente os membros"],
        ["2–4 meses", "Responde ao contato social, segura objetos, emite sons/ri, de bruços levanta a cabeça apoiando nos antebraços"],
        ["4–6 meses", "Busca ativa de objetos, leva objetos à boca, localiza o som, muda de posição (rola)"],
        ["6–9 meses", "Brinca de esconde-achou, transfere objetos de uma mão para outra, duplica sílabas, senta sem apoio"],
        ["9–12 meses", "Imita gestos, faz pinça, produz jargão, anda com apoio"],
        ["12–15 meses", "Mostra o que quer, coloca blocos na caneca, diz uma palavra, anda sem apoio"],
        ["15–18 meses", "Usa colher ou garfo, constrói torre de 2 cubos, fala 3 palavras, anda para trás"],
        ["18–24 meses", "Tira a roupa, torre de 3 cubos, aponta 2 figuras, chuta a bola"],
        ["24–30 meses", "Veste-se com supervisão, torre de 6 cubos, frases com 2 palavras, pula com ambos os pés"]
      ],
      nota: "Se a criança não faz os marcos da sua faixa: alerta (orientar estimulação e reavaliar em 30 dias). Se não faz os marcos da faixa anterior ou há regressão: encaminhar. M-CHAT-R/F aos 18 meses (Caderneta). Conferir a edição vigente da Caderneta (6ª edição)."
    },
    {
      titulo: "Calendário Nacional de Vacinação — criança (PNI, situação em 2026)",
      colunas: ["Idade", "Vacinas"],
      linhas: [
        ["Ao nascer", "BCG; hepatite B (até 30 dias, idealmente nas primeiras 24 h). Nirsevimabe (anticorpo anti-VSR) para prematuros < 37 semanas e grupos de risco, conforme protocolo"],
        ["2 meses", "Penta (DTP+Hib+HepB) 1ª; VIP 1ª; pneumocócica conjugada 1ª (VPC20 em substituição gradual à VPC10); rotavírus 1ª"],
        ["3 meses", "Meningocócica C 1ª"],
        ["4 meses", "Penta 2ª; VIP 2ª; pneumocócica 2ª; rotavírus 2ª"],
        ["5 meses", "Meningocócica C 2ª"],
        ["6 meses", "Penta 3ª; VIP 3ª; influenza (anual, 6 meses a < 6 anos); covid-19 (esquema conforme o imunizante disponível)"],
        ["9 meses", "Febre amarela 1ª dose"],
        ["12 meses", "Tríplice viral 1ª; pneumocócica reforço; meningocócica ACWY (reforço, desde 07/2025)"],
        ["15 meses", "DTP reforço 1; VIP reforço 1; hepatite A; tetraviral (sarampo, caxumba, rubéola, varicela) ou tríplice viral 2ª + varicela 1ª"],
        ["4 anos", "DTP reforço 2; VIP reforço 2 (desde 08/2026); febre amarela reforço; varicela 2ª dose"],
        ["9–14 anos", "HPV (dose única); dengue 10–14 anos (2 doses, conforme oferta); meningocócica ACWY aos 11–14 anos"]
      ],
      nota: "Transição da pneumocócica (2026): enquanto houver VPC10, esquema 2+1 (VPC20 aos 2 meses, VPC10 aos 4 meses, VPC20 aos 12 meses). SBP recomenda 3+1 (2, 4, 6 e 12 meses) na rede privada. Sempre conferir o calendário vigente do PNI e notas técnicas locais antes de aplicar."
    },
    {
      titulo: "Triagens neonatais — quando fazer",
      colunas: ["Teste", "Quando", "Se alterado"],
      linhas: [
        ["Pezinho (biológica)", "3º ao 5º dia de vida", "Convocação e serviço de referência estadual"],
        ["Olhinho (reflexo vermelho)", "Antes da alta e nas consultas de puericultura dos primeiros anos", "Oftalmologia com prioridade"],
        ["Orelhinha (EOA/PEATE-A)", "Até 30 dias (idealmente antes da alta)", "Reteste até 30 dias; diagnóstico até 3 meses; intervenção até 6 meses"],
        ["Coraçãozinho (oximetria)", "Entre 24 e 48 h, antes da alta (RN > 34 semanas)", "< 95% ou diferença ≥ 3%: repetir em 1 h; mantida → ecocardiograma"],
        ["Linguinha (frênulo)", "Na maternidade (Lei 13.002/2014)", "Avaliar impacto na amamentação; encaminhar se necessário"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Caderneta da Criança: Passaporte da Cidadania, 6ª edição (2024)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 33: Saúde da Criança — Crescimento e Desenvolvimento (2012)",
    "Ministério da Saúde — Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (2019)",
    "Ministério da Saúde/PNI — Calendário Nacional de Vacinação; NT nº 77/2025 (menACWY aos 12 meses); NT nº 64/2026 (2º reforço da VIP aos 4 anos); incorporação da VPC20 (2026)",
    "Ministério da Saúde/Conitec — Protocolo de uso do nirsevimabe (2026)",
    "Ministério da Saúde — Programa Nacional de Suplementação de Ferro: manual de condutas gerais (2013, atualizações 2022) e Programa Nacional de Suplementação de Vitamina A",
    "SBP — Calendário de Vacinação SBP 2026–2027; Departamento de Nutrologia: Suplementação de vitaminas e minerais (atualização vigente)",
    "OMS — Guideline on haemoglobin cutoffs to define anaemia (2024); Curvas de crescimento OMS (2006/2007)",
    "Lei 14.154/2021 (ampliação do teste do pezinho); Lei 13.002/2014 (teste da linguinha); Lei 13.438/2017 (protocolo de risco para desenvolvimento psíquico até 18 meses)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
