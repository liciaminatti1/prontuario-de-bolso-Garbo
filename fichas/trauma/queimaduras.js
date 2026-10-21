// Queimaduras
registrarFicha({
  id: "queimaduras",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Queimaduras: avaliação, hidratação (Parkland), analgesia e transferência",
  resumo: "Lesão térmica, elétrica ou química da pele. Estimar profundidade e superfície corporal queimada (SCQ), tratar via aérea e lesão inalatória, hidratar grandes queimados, aliviar a dor, cuidar da ferida e decidir sobre centro de queimados.",
  palavrasChave: "queimadura queimado grande queimado parkland regra dos nove lund browder superficie corporal queimada scq lesao inalatoria monoxido de carbono escarotomia sulfadiazina de prata queimadura eletrica quimica centro de queimados",
  critico: {
    tempo: "Via aérea e água corrente 20 min",
    texto: "Parar a queimadura e resfriar com água corrente por 20 min (até 3 h). Sinais de lesão inalatória: intubar cedo. Grande queimado: Ringer lactato pelo peso e % SCQ, guiado pela diurese."
  },
  alarmes: [
    "Lesão inalatória: queimadura em ambiente fechado, face queimada, vibrissas chamuscadas, escarro carbonáceo, rouquidão, estridor, dispneia",
    "Queimadura circunferencial de tórax (restringe ventilação) ou membro (síndrome compartimental): escarotomia",
    "SCQ ≥ 20% no adulto ou ≥ 10% na criança (2º e 3º graus)",
    "Queimadura elétrica de alta voltagem: arritmia, rabdomiólise, lesão profunda maior que a visível",
    "Intoxicação por monóxido de carbono (cefaleia, confusão, SpO₂ falsamente normal) ou cianeto (acidose lática grave, choque)",
    "Padrão suspeito de maus-tratos: queimadura em luva/meia, bordas nítidas, nádegas/períneo, história incompatível",
    "Hipotermia durante o resfriamento (crianças e grandes queimados)"
  ],
  condutaInicial: [
    "Interromper o processo: afastar da fonte, retirar roupas e adornos (anéis) não aderidos; queimadura química: retirar o produto em pó e irrigar com água abundante por 20–30 min ou mais",
    "Resfriar com água corrente fria (não gelada) por 20 min se até 3 h da queimadura; depois cobrir com filme plástico ou pano limpo e manter o paciente aquecido",
    "ATLS (xABCDE): via aérea com restrição cervical se trauma associado; O₂ 100% por máscara com reservatório se suspeita de inalação ou CO",
    "Intubação precoce (tubo ≥ 7,5–8,0 no adulto) se estridor, rouquidão progressiva, queimadura profunda de face/pescoço, Glasgow ≤ 8 ou SCQ muito extensa com transporte longo",
    "2 acessos calibrosos (podem ser em área queimada se necessário); IO se não obtidos",
    "Estimar SCQ (regra dos nove ou Lund-Browder; palma do paciente com dedos ≈ 1%). Não contar 1º grau",
    "Hidratação venosa se SCQ ≥ 20% (adulto) ou ≥ 10–15% (criança): Ringer lactato pela fórmula (ver tratamento), metade nas primeiras 8 h contadas a partir da hora da queimadura",
    "Sonda vesical e diurese horária para guiar a infusão",
    "Analgesia IV precoce (opioide e/ou cetamina); evitar IM",
    "Profilaxia antitetânica conforme histórico vacinal (ver ficha tetano-profilaxia). Antibiótico sistêmico profilático não é indicado",
    "Queimadura circunferencial profunda com restrição: escarotomia (cirurgião/centro de queimados)"
  ],
  fataisExcluir: [
    "Lesão inalatória com obstrução de via aérea iminente",
    "Intoxicação por CO ou cianeto",
    "Trauma associado (explosão, queda, acidente)",
    "Arritmia e rabdomiólise na queimadura elétrica",
    "Choque do grande queimado (hipovolemia por extravasamento capilar)",
    "Síndrome compartimental de membro ou abdome",
    "Maus-tratos (criança, idoso)"
  ],
  proximaDecisao: "Diurese abaixo do alvo por 2 h → aumentar a infusão em 20–30%; diurese acima do alvo → reduzir 20–30% (evitar hiper-hidratação: edema, síndrome compartimental). Critério de centro de queimados → regular após via aérea segura, acessos e início da hidratação, com curativo seco e paciente aquecido.",
  clinica: {
    anamnese: [
      "Agente: chama, líquido quente, contato, elétrico (baixa/alta voltagem), químico (ácido/álcali), radiação",
      "Hora da queimadura (a hidratação é contada a partir dela)",
      "Ambiente fechado, explosão, perda de consciência",
      "Trauma associado, queda",
      "Peso, comorbidades, alergias, vacina antitetânica",
      "Criança: mecanismo coerente com o desenvolvimento? Tempo até procurar atendimento"
    ],
    exameFisico: [
      "Via aérea: face, vibrissas, orofaringe (fuligem, edema), voz, estridor",
      "Respiração: expansão (queimadura circunferencial de tórax), sibilos",
      "Circulação: pulsos distais em membros com queimadura circunferencial",
      "Profundidade: 1º grau (eritema, sem bolha); 2º superficial (bolha, rosado, úmido, muito doloroso, enchimento capilar presente); 2º profundo (pálido, menos doloroso, enchimento lento); 3º grau (branco/marrom, seco, coriáceo, indolor)",
      "Extensão (Lund-Browder em criança), áreas especiais: face, mãos, pés, genitais, períneo, grandes articulações",
      "Elétrica: pontos de entrada e saída, ECG, mioglobinúria (urina escura)"
    ],
    diferenciais: [
      { dx: "Síndrome de Stevens-Johnson / NET", pista: "Sem história de queimadura, uso de droga nova, mucosas acometidas" },
      { dx: "Síndrome da pele escaldada estafilocócica", pista: "Criança febril, sinal de Nikolsky, sem exposição térmica" },
      { dx: "Fitofotodermatose (limão + sol)", pista: "Lesões em respingo nas mãos, história de contato com frutas cítricas" },
      { dx: "Maus-tratos", pista: "Padrão em imersão, queimaduras de cigarro, história inconsistente" }
    ],
    gravidade: [
      "Pequeno queimado (ambulatorial): 2º grau < 10% no adulto e < 5% na criança, sem áreas especiais, sem inalação, sem comorbidade descompensada",
      "Médio e grande queimado: ver tabela de critérios (Ministério da Saúde e ABA)",
      "Mortalidade aumenta com SCQ, idade avançada e lesão inalatória"
    ]
  },
  exames: [
    {
      nome: "Gasometria arterial com carboxi-hemoglobina e lactato",
      pedido: "Gasometria arterial com co-oximetria (carboxi-hemoglobina) e lactato.",
      porQue: "Intoxicação por CO e cianeto; acidose do choque.",
      esperar: "COHb > 10% sugere intoxicação significativa (> 3% em não fumante já é anormal).",
      interpretacao: "Lactato muito elevado em vítima de incêndio fechado com choque: suspeitar de cianeto.",
      limitacoes: "Oxímetro de pulso comum não diferencia carboxi-hemoglobina."
    },
    {
      nome: "Laboratório do grande queimado",
      pedido: "Hemograma, sódio, potássio, ureia, creatinina, glicemia, CK, urina tipo 1 (mioglobina/hemoglobina), tipagem sanguínea, beta-hCG se mulher em idade fértil.",
      porQue: "Basal, rabdomiólise, lesão renal.",
      esperar: "Hemoconcentração nas primeiras horas.",
      interpretacao: "CK alta e urina escura (elétrica): aumentar a meta de diurese.",
      limitacoes: "—"
    },
    {
      nome: "ECG e monitorização (elétrica)",
      pedido: "ECG de 12 derivações e monitor cardíaco.",
      porQue: "Arritmias após choque elétrico.",
      esperar: "—",
      interpretacao: "Baixa voltagem, ECG normal, sem perda de consciência: geralmente não precisa de monitor prolongado. Alta voltagem ou ECG alterado: monitor por 24 h.",
      limitacoes: "—"
    },
    {
      nome: "Radiografia de tórax e investigação de trauma",
      pedido: "Radiografia de tórax. Exames de imagem do trauma conforme mecanismo.",
      porQue: "Lesão inalatória (inicial pode ser normal), intubação, trauma associado.",
      esperar: "Radiografia inicial frequentemente normal na inalação.",
      interpretacao: "—",
      limitacoes: "Broncoscopia confirma lesão inalatória em centro especializado."
    }
  ],
  tratamento: [
    {
      droga: "Ringer lactato — hidratação do grande queimado",
      linha: "l1",
      dose: "Adulto: 2 mL × kg × % SCQ nas primeiras 24 h. Criança (≤ 14 anos): 3 mL × kg × % SCQ. Elétrica de alta voltagem: 4 mL × kg × % SCQ",
      via: "IV",
      intervalo: "Metade nas primeiras 8 h (a partir da hora da queimadura) e metade nas 16 h seguintes",
      duracao: "24 h; depois conforme centro de queimados",
      monitorizacao: "Diurese horária: adulto 0,5 mL/kg/h (30–50 mL/h); criança ≤ 30 kg 1 mL/kg/h; elétrica com urina escura (mioglobinúria): 1–1,5 mL/kg/h até clarear (adulto ≈ 75–100 mL/h)",
      contraindicacoes: "—",
      ajustes: "A fórmula é ponto de partida: ajustar a cada hora pela diurese (± 20–30%). Parkland clássica usa 4 mL/kg/% (ainda citada em materiais do Ministério da Saúde); o ATLS e a ABA preferem iniciar com 2 mL/kg/% no adulto para evitar hiper-hidratação. Criança < 30 kg: somar manutenção com soro glicosado"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "Adulto 0,05–0,1 mg/kg (2–5 mg); criança 0,05–0,1 mg/kg (máx 5 mg/dose)",
      via: "IV lento (diluir 1 mL em 9 mL de SF = 1 mg/mL)",
      intervalo: "Repetir a cada 5–10 min até controle; depois a cada 4 h ou analgesia contínua",
      duracao: "—",
      monitorizacao: "FR, sedação, SpO₂, PA",
      contraindicacoes: "Hipotensão não corrigida",
      ajustes: "Alternativa: fentanil 1 mcg/kg IV; fentanil intranasal 1,5 mcg/kg (máx 100 mcg) na criança sem acesso"
    },
    {
      droga: "Cetamina 50 mg/mL (dose analgésica)",
      linha: "adj",
      dose: "0,1–0,3 mg/kg (adulto e criança)",
      via: "IV lento",
      intervalo: "A cada 10–20 min se necessário",
      duracao: "—",
      monitorizacao: "PA, FC, reações de emergência",
      contraindicacoes: "Hipertensão grave, SCA",
      ajustes: "Para curativos dolorosos: sedoanalgesia com cetamina 1–1,5 mg/kg IV por equipe treinada"
    },
    {
      droga: "Dipirona / paracetamol",
      linha: "l1",
      dose: "Dipirona adulto 1 g; criança 15 mg/kg (máx 1 g). Paracetamol adulto 750 mg; criança 15 mg/kg (máx 1 g)",
      via: "IV ou VO",
      intervalo: "A cada 6 h",
      duracao: "Enquanto dor",
      monitorizacao: "—",
      contraindicacoes: "Discrasia sanguínea (dipirona); hepatopatia grave (paracetamol)",
      ajustes: "Base da analgesia no pequeno queimado; associar ibuprofeno 400 mg (criança 10 mg/kg, máx 400 mg) VO a cada 8 h se sem contraindicação"
    },
    {
      droga: "Sulfadiazina de prata 1% creme",
      linha: "l1",
      dose: "Camada de 3–5 mm sobre a queimadura de 2º grau, coberta com gaze",
      via: "Tópica",
      intervalo: "Troca 1–2 vezes ao dia, com limpeza com água e sabão neutro ou SF",
      duracao: "Até epitelização ou avaliação especializada",
      monitorizacao: "Sinais de infecção, leucopenia transitória",
      contraindicacoes: "Alergia a sulfa, gestação a termo, recém-nascido e lactente < 2 meses",
      ajustes: "Na face: preferir pomada/vaselina estéril ou curativo não aderente. Alternativas: curativos com prata, hidrogel, membranas, conforme disponibilidade. No grande queimado a ser transferido: só cobrir com curativo seco e limpo (não aplicar creme antes da avaliação do centro)"
    },
    {
      droga: "Oxigênio 100% (intoxicação por CO)",
      linha: "l1",
      dose: "Máscara com reservatório 15 L/min ou FiO₂ 100% se intubado",
      via: "Inalatória",
      intervalo: "Contínuo",
      duracao: "Até COHb < 3–5% e sem sintomas",
      monitorizacao: "COHb seriada, neurológico",
      contraindicacoes: "—",
      ajustes: "Câmara hiperbárica: discutir com centro de referência em casos graves (síncope, coma, gestante, alteração neurológica)"
    },
    {
      droga: "Hidroxocobalamina (cianeto)",
      linha: "adj",
      dose: "Adulto 5 g; criança 70 mg/kg (máx 5 g)",
      via: "IV em 15 min",
      intervalo: "Pode repetir 1 vez conforme gravidade",
      duracao: "—",
      monitorizacao: "PA, lactato; urina e pele ficam avermelhadas",
      contraindicacoes: "—",
      ajustes: "Vítima de incêndio em ambiente fechado com choque ou acidose lática grave. Disponibilidade limitada: acionar CIATox"
    },
    {
      droga: "Antibiótico sistêmico profilático",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não indicado",
      ajustes: "Tratar só infecção documentada (celulite ao redor, febre persistente após 72 h, piora da ferida)"
    }
  ],
  destino: {
    agora: [
      "Via aérea, resfriamento, analgesia, hidratação e cálculo da SCQ",
      "Ligar para regulação/centro de queimados assim que identificado critério"
    ],
    reavaliar: [
      "Diurese a cada 1 h, sinais vitais, perfusão de membros",
      "Via aérea a cada 30–60 min nas primeiras horas (edema progride até 24–48 h)",
      "Temperatura corporal"
    ],
    alta: [
      "Pequeno queimado: dor controlada com VO, curativo orientado, retorno em 24–48 h na UBS ou ambulatório",
      "Sem áreas especiais, sem inalação, sem suspeita de maus-tratos"
    ],
    observacao: [
      "Elétrica de baixa voltagem sem perda de consciência e ECG normal: alta após avaliação",
      "Exposição à fumaça sem sinais de gravidade e COHb normal: observação de 4–6 h"
    ],
    internacao: [
      "Médio queimado sem critério de centro: internação em enfermaria cirúrgica",
      "Grande queimado, inalação, elétrica de alta voltagem: UTI ou centro de queimados"
    ],
    transferencia: [
      "Critérios de centro de queimados (ABA): queimadura de espessura parcial ≥ 10% SCQ; qualquer espessura total; face, mãos, pés, genitais, períneo, grandes articulações; elétrica (inclui raio); química; lesão inalatória; trauma associado; comorbidades; crianças em hospital sem estrutura pediátrica; necessidade de suporte social ou reabilitação",
      "Antes de transferir: via aérea garantida se risco, 2 acessos, hidratação em curso, sonda vesical, analgesia, curativo seco e limpo, manter aquecido, documentar SCQ e volumes"
    ]
  },
  prescricao: {
    hospitalar: "GRANDE QUEIMADO — ADULTO (peso: ___ kg; SCQ 2º/3º grau: ___ %; hora da queimadura: ___)\nExemplo: 70 kg, 40% SCQ → 2 × 70 × 40 = 5.600 mL em 24 h.\n1. Dieta zero inicialmente; dieta enteral precoce assim que estável (centro de queimados).\n2. O₂ 100% por máscara com reservatório 15 L/min se suspeita de inalação/CO; cabeceira 30°.\n3. Ringer lactato: 2.800 mL nas primeiras 8 h a partir da queimadura (350 mL/h) e 2.800 mL nas 16 h seguintes (175 mL/h). Descontar o volume já infundido no pré-hospitalar.\n4. Sonda vesical: diurese-alvo 0,5 mL/kg/h (35 mL/h). Abaixo do alvo por 2 h: aumentar a vazão em 20–30%; acima: reduzir 20–30%.\n5. Morfina 10 mg/mL — diluir 1 mL + 9 mL SF 0,9% (1 mg/mL); 3–5 mL (3–5 mg) IV lento a cada 5–10 min até controle da dor; depois de 4/4 h ou se dor.\n6. Dipirona 1 g IV de 6/6 h.\n7. Ondansetrona 4 mg IV de 8/8 h se náusea.\n8. Omeprazol 40 mg IV 1×/dia (profilaxia de úlcera de estresse).\n9. Profilaxia antitetânica conforme histórico vacinal.\n10. Curativo: limpeza com SF ou água e sabão neutro; cobrir com gaze seca/filme limpo para transferência (ou sulfadiazina de prata 1% se for tratado no local).\n11. Manter aquecido (manta, soro aquecido); temperatura de 2/2 h.\n12. Controles: sinais vitais e diurese de 1/1 h; gasometria com COHb e lactato; eletrólitos, CK e creatinina de 6/6 h a 12/12 h.\n\nCRIANÇA (peso: ___ kg; SCQ ___ %)\n- Ringer lactato 3 × kg × % SCQ em 24 h, metade nas primeiras 8 h. Ex.: 20 kg, 20% → 1.200 mL: 600 mL em 8 h (75 mL/h) + 600 mL em 16 h (37,5 mL/h).\n- Criança < 30 kg: somar manutenção com SG 5% + eletrólitos (Holliday-Segar: 100 mL/kg/dia até 10 kg, + 50 mL/kg/dia de 10 a 20 kg, + 20 mL/kg/dia acima de 20 kg).\n- Diurese-alvo 1 mL/kg/h.\n- Morfina 0,05–0,1 mg/kg IV (máx 5 mg/dose); dipirona 15 mg/kg IV de 6/6 h (máx 1 g).\n- Glicemia capilar de 4/4 h.",
    ambulatorial: "PEQUENO QUEIMADO (ALTA)\nUSO TÓPICO\n1. Sulfadiazina de prata 1% creme ----------------- 1 bisnaga\n   Lavar a queimadura com água e sabão neutro, aplicar camada fina e cobrir com gaze, 1 a 2 vezes ao dia, até cicatrizar. Não usar no rosto nem em bebês com menos de 2 meses.\n\nUSO ORAL\n2. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor (criança: 15 mg/kg/dose, máx 1 g).\n3. Ibuprofeno 400 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias se dor (criança: 10 mg/kg/dose, máx 400 mg).\n\nORIENTAÇÕES\n4. Não furar bolhas pequenas; não usar pasta de dente, manteiga, borra de café ou gelo.\n5. Manter a área elevada nas primeiras 48 h (mãos e pés)."
  },
  orientacoesRetorno: [
    "Não usar pasta de dente, manteiga, óleo, clara de ovo, borra de café ou gelo; só água corrente fria logo após a queimadura",
    "Trocar o curativo como orientado, com as mãos lavadas",
    "Voltar imediatamente se febre, pus, vermelhidão que se espalha, cheiro forte, dor que piora, falta de ar ou rouquidão",
    "Retorno em 24–48 h para reavaliar profundidade (queimaduras podem aprofundar nos primeiros dias)",
    "Queimadura que não cicatrizou em 2 semanas: encaminhar ao cirurgião plástico",
    "Proteger a cicatriz do sol por pelo menos 1 ano; hidratar a pele",
    "Prevenção em casa: cabos de panela para dentro, crianças longe do fogão, álcool líquido longe de chamas, testar a água do banho"
  ],
  tabelas: [
    {
      titulo: "Regra dos nove (% SCQ)",
      colunas: ["Região", "Adulto", "Lactente / criança pequena"],
      linhas: [
        ["Cabeça e pescoço", "9%", "18%"],
        ["Cada membro superior", "9%", "9%"],
        ["Tronco anterior", "18%", "18%"],
        ["Tronco posterior", "18%", "18%"],
        ["Cada membro inferior", "18%", "14%"],
        ["Períneo", "1%", "—"]
      ],
      nota: "Na criança, preferir a tabela de Lund-Browder: a cabeça diminui cerca de 1% por ano após 1 ano, e cada membro inferior aumenta cerca de 0,5%. Palma do paciente com dedos ≈ 1% da SCQ. Não contar queimaduras de 1º grau."
    },
    {
      titulo: "Profundidade",
      colunas: ["Grau", "Aspecto", "Dor", "Cicatrização"],
      linhas: [
        ["1º (epidérmica)", "Eritema, sem bolha", "Dolorosa", "3–7 dias, sem cicatriz"],
        ["2º superficial", "Bolhas, rosado, úmido, enchimento capilar presente", "Muito dolorosa", "Até 2–3 semanas"],
        ["2º profundo", "Pálido ou mosqueado, enchimento lento", "Menos dolorosa", "> 3 semanas; pode precisar de enxerto"],
        ["3º (espessura total)", "Branco, marrom ou preto, seco, coriáceo", "Indolor", "Enxerto"]
      ]
    },
    {
      titulo: "Critério de grande queimado citado em materiais do Ministério da Saúde",
      colunas: ["Critério", "Adulto (> 12 anos)", "Criança (< 12 anos)"],
      linhas: [
        ["2º grau", "> 20% SCQ", "> 15% SCQ"],
        ["3º grau", "> 10% SCQ", "> 5% SCQ"],
        ["Outros", "Elétrica, períneo, inalação, politrauma, comorbidade grave; 3º grau em mãos, pés, face, pescoço ou axila", "Mesmos critérios"]
      ],
      nota: "Valores reproduzidos de materiais de ensino baseados na Cartilha do MS e na Portaria de assistência ao queimado; conferir com o documento oficial e com a regulação local."
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS: Advanced Trauma Life Support, 11ª ed. (2025), capítulo de lesões térmicas",
    "American Burn Association — Guidelines for Burn Patient Referral (2022) e diretrizes de ressuscitação volêmica",
    "Ministério da Saúde — Cartilha para tratamento de emergência das queimaduras (2012)",
    "International Society for Burn Injuries — ISBI Practice Guidelines for Burn Care (2016; parte 2, 2018)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
