// Distúrbios da hemostasia primária: doença de von Willebrand e disfunções plaquetárias
registrarFicha({
  id: "hemostasia-primaria",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Sangramento mucocutâneo: doença de von Willebrand e disfunções plaquetárias",
  resumo: "Investigação de quem sangra 'de pele e mucosa' (epistaxe, gengiva, menstruação volumosa, equimoses, sangramento após extração dentária) com plaquetas normais. A causa hereditária mais comum é a doença de von Willebrand. Inclui desmopressina, ácido tranexâmico e preparo para procedimentos.",
  palavrasChave: "doenca de von willebrand dvw fator de von willebrand disfuncao plaquetaria trombocitopatia glanzmann bernard soulier sangramento mucocutaneo epistaxe gengivorragia menorragia sangramento menstrual intenso equimoses isth bat desmopressina ddavp acido tranexamico transamin haemate wilate agregacao plaquetaria pfa",
  critico: {
    tempo: "Menorragia desde a menarca: investigar",
    texto: "Sangramento menstrual intenso desde a menarca, epistaxes repetidas ou sangramento após extração dentária ou parto = pedir coagulograma e fator de von Willebrand antes de cirurgia ou procedimento."
  },
  alarmes: [
    "Sangramento ativo que não para com compressão (epistaxe posterior, gengiva, pós-extração): PS",
    "Sangramento com instabilidade, Hb em queda, hematêmese, melena, hematúria macroscópica",
    "Cefaleia intensa, vômitos ou déficit após trauma em paciente com distúrbio de coagulação (TC de crânio)",
    "Menorragia com anemia grave ou necessidade de transfusão",
    "Sangramento articular ou muscular profundo (pensar em hemofilia ou von Willebrand tipo 3: ficha hemofilias)",
    "Gestante com doença de von Willebrand perto do parto (plano de parto em centro de referência)"
  ],
  conduta: [
    "Caracterizar o sangramento: mucocutâneo (pele, mucosa, menstruação → hemostasia primária) x profundo (articulação, músculo, tardio após trauma → fatores de coagulação)",
    "Aplicar um escore estruturado (ISTH-BAT): anormal se ≥ 4 em homens adultos, ≥ 6 em mulheres adultas, ≥ 3 em crianças",
    "Revisar drogas que pioram: AAS, AINE, clopidogrel e outros antiagregantes, anticoagulantes, ISRS/IRSN, ômega 3 e ginkgo em dose alta, valproato",
    "Excluir causas adquiridas: uremia, hepatopatia, hipotireoidismo, mieloproliferativas, gamopatia monoclonal, valvopatia aórtica estenótica (von Willebrand adquirido)",
    "Primeira etapa: hemograma (plaquetas e volume), TP, TTPa, fibrinogênio, ferritina; plaquetas baixas → ficha trombocitopenia",
    "Segunda etapa (pode ser pedida já ou pela hematologia): fator de von Willebrand antigênico, atividade do FvW (cofator de ristocetina ou ligação à GPIb), fator VIII e tipagem ABO",
    "Exames de von Willebrand normais e quadro sugestivo: agregação plaquetária (hematologia/hemocentro)",
    "Tratar ferropenia associada e o sangramento menstrual (hormonal + ácido tranexâmico)",
    "Antes de cirurgia, extração dentária ou parto: plano hemostático com hemocentro (teste de desmopressina, concentrado de fator)"
  ],
  exames: [
    "Hemograma com plaquetas e esfregaço (plaquetas gigantes: Bernard-Soulier ou macrotrombocitopenia), ferritina",
    "TP/INR, TTPa, fibrinogênio: costumam ser normais; TTPa pode alargar se fator VIII baixo",
    "FvW antígeno (FvW:Ag), atividade do FvW (FvW:RCo ou FvW:GPIbM) e fator VIII (FVIII:C)",
    "Relação atividade/antígeno < 0,7 sugere tipo 2 (qualitativo)",
    "Interpretação (ASH/ISTH/NHF/WFH 2021): FvW < 30 UI/dL = doença de von Willebrand; 30–50 UI/dL com sangramento anormal = doença de von Willebrand",
    "Níveis sobem com estresse, exercício, inflamação, gestação e estrogênio, e são mais baixos no grupo sanguíneo O: repetir se normal-limítrofe com quadro forte (evitar colher na fase de estresse ou em uso de anticoncepcional, se possível)",
    "Agregação plaquetária (ADP, colágeno, epinefrina, ristocetina, ácido araquidônico) e citometria de glicoproteínas: no hemocentro, para Glanzmann, Bernard-Soulier e defeitos de secreção",
    "Tempo de sangramento não é recomendado (pouco sensível e reprodutível)"
  ],
  diferenciais: [
    "Plaquetopenia (PTI, medicamentos, hepatopatia)",
    "Efeito de medicamentos (AAS, AINE, ISRS, antiagregantes)",
    "Hemofilia leve ou portadora de hemofilia (fator VIII ou IX baixo; ficha hemofilias)",
    "Uremia e hepatopatia",
    "Doenças do colágeno (Ehlers-Danlos), telangiectasia hemorrágica hereditária, escorbuto",
    "Maus-tratos em criança com equimoses (avaliar padrão e história)"
  ],
  tratamento: [
    {
      droga: "Ácido tranexâmico",
      linha: "l1",
      dose: "Adulto: 1 g (máx. 1,5 g por dose). Criança: 15–25 mg/kg por dose (máx. 1,5 g por dose)",
      via: "VO (comprimidos de 250 mg ou 500 mg); IV 10 mg/kg (máx. 1 g) se VO impossível",
      intervalo: "8/8 h",
      duracao: "Menstruação: durante os dias de fluxo intenso, até 5 dias. Extração dentária: iniciar antes e manter por 5–7 dias (também como bochecho)",
      monitorizacao: "Volume do sangramento",
      contraindicacoes: "Trombose ativa ou prévia de alto risco, hematúria macroscópica (risco de coágulos obstrutivos), uso com estrogênio em quem tem risco trombótico",
      ajustes: "Reduzir dose na insuficiência renal. Pode ser usado com desmopressina. RENAME"
    },
    {
      droga: "Desmopressina (DDAVP) injetável 4 mcg/mL",
      linha: "l1",
      dose: "0,3 mcg/kg (máx. 20 mcg)",
      via: "IV diluída em 50 mL de SF 0,9% em 30 min (ou SC)",
      intervalo: "Dose única; repetir a cada 12–24 h no máximo 2–3 doses (taquifilaxia)",
      duracao: "Sangramento ou cobertura de procedimento",
      monitorizacao: "Sódio sérico se doses repetidas ou criança; PA e FC (rubor, cefaleia, hipotensão); teste prévio de resposta com FvW e FVIII 1 h após",
      contraindicacoes: "Criança < 2 anos, von Willebrand tipo 2B (piora a plaquetopenia), tipo 3 e não respondedores, doença cardiovascular grave, epilepsia, hiponatremia, gestante na pré-eclâmpsia",
      ajustes: "Restringir água por 24 h após a dose (risco de hiponatremia e convulsão, sobretudo em crianças). Útil no tipo 1, na hemofilia A leve e em algumas disfunções plaquetárias e uremia. O spray nasal disponível no Brasil é de baixa concentração (uso em diabetes insípido) e não serve para hemostasia"
    },
    {
      droga: "Concentrado de fator VIII rico em fator de von Willebrand",
      linha: "alt",
      dose: "Conforme hemocentro (UI de FvW por kg e nível-alvo)",
      via: "IV",
      intervalo: "Conforme hemocentro",
      duracao: "Conforme sangramento ou procedimento",
      monitorizacao: "FvW:RCo e FVIII",
      contraindicacoes: "—",
      ajustes: "Para tipo 3, tipo 2, tipo 1 grave, não respondedor à desmopressina ou sangramento grave. Fornecido pelo hemocentro (Programa de Coagulopatias Hereditárias do MS)"
    },
    {
      droga: "Controle hormonal do sangramento menstrual (DIU de levonorgestrel, anticoncepcional combinado ou progestágeno contínuo)",
      linha: "adj",
      dose: "Conforme ficha sangramento-uterino-anormal",
      via: "—",
      intervalo: "—",
      duracao: "Contínuo",
      monitorizacao: "Hb e ferritina",
      contraindicacoes: "Conforme critérios de elegibilidade da OMS",
      ajustes: "Opção de 1ª linha em mulheres com von Willebrand e menorragia (ASH/ISTH/NHF/WFH 2021)"
    },
    {
      droga: "AAS e anti-inflamatórios não esteroides",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Doença de von Willebrand e disfunções plaquetárias",
      ajustes: "Para dor: paracetamol ou dipirona"
    }
  ],
  tabelas: [
    {
      titulo: "Tipos de doença de von Willebrand",
      colunas: ["Tipo", "Laboratório", "Tratamento usual"],
      linhas: [
        ["1 (quantitativo parcial; mais comum)", "FvW:Ag e atividade baixos e proporcionais", "Desmopressina (se respondedor) + ácido tranexâmico"],
        ["2A, 2M", "Atividade/antígeno < 0,7", "Concentrado de FvW; desmopressina só se teste mostrar resposta"],
        ["2B", "Relação baixa, plaquetopenia, agregação com ristocetina em dose baixa", "Concentrado de FvW; desmopressina contraindicada"],
        ["2N", "FVIII baixo com FvW normal (parece hemofilia A leve)", "Concentrado de FvW com FVIII"],
        ["3 (ausência total)", "FvW indetectável, FVIII muito baixo", "Concentrado de FvW; sangra como hemofilia"]
      ],
      nota: "Classificação e confirmação no hemocentro. Doença adquirida: estenose aórtica, gamopatias, mieloproliferativas, hipotireoidismo."
    }
  ],
  encaminhar: [
    "Hemocentro/hematologia: ISTH-BAT anormal, FvW < 50 UI/dL, suspeita de disfunção plaquetária, história familiar de sangramento",
    "Hemocentro antes de qualquer cirurgia, extração dentária ou parto em paciente com diagnóstico ou suspeita",
    "Ginecologia: menorragia sem controle com tratamento clínico",
    "PS: sangramento que não cede, anemia sintomática, trauma de crânio"
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — SANGRAMENTO MUCOCUTÂNEO\nHemograma completo com contagem de plaquetas e esfregaço; ferritina; TP/INR; TTPa; fibrinogênio; fator de von Willebrand antigênico; atividade do fator de von Willebrand (cofator de ristocetina ou GPIb); fator VIII; tipagem ABO e Rh; TSH; creatinina.\nHD: Distúrbio hemorrágico a esclarecer — suspeita de doença de von Willebrand (CID D68.0).\n\nMENORRAGIA / SANGRAMENTO MUCOSO (adulto)\nUSO ORAL\n1. Ácido tranexâmico 250 mg ---------------------- 60 comprimidos\n   Tomar 4 comprimidos (1 g) de 8 em 8 horas durante os dias de sangramento intenso, por no máximo 5 dias a cada ciclo.\n   Criança: 15–25 mg/kg por dose (máx. 1,5 g) de 8 em 8 horas.\n\nPÓS-EXTRAÇÃO DENTÁRIA (com orientação do hemocentro)\nUSO TÓPICO ORAL\n2. Ácido tranexâmico (comprimido macerado ou solução IV 50 mg/mL) — bochecho com 10 mL por 2 minutos, 4 vezes ao dia, por 5–7 dias, sem engolir.",
    hospitalar: "SANGRAMENTO EM DOENÇA DE VON WILLEBRAND TIPO 1 OU HEMOFILIA A LEVE (respondedor conhecido) — peso: ___ kg\n1. Desmopressina 4 mcg/mL: 0,3 mcg/kg = ___ mcg (máx. 20 mcg) + SF 0,9% 50 mL IV em 30 min. Pode repetir após 12–24 h (máx. 2–3 doses).\n2. Restrição hídrica nas 24 h seguintes (apenas o volume de manutenção; sem soro hipotônico); sódio sérico antes de repetir a dose.\n3. Ácido tranexâmico 10 mg/kg (máx. 1 g) IV em 10 min de 8/8 h, ou 1 g VO de 8/8 h (criança 15–25 mg/kg VO, máx. 1,5 g).\n4. Compressão local, cola/esponja hemostática se disponível.\n5. Não usar AAS, AINE ou injeção IM.\n6. Tipo 2B, tipo 3, sangramento grave ou não respondedor: acionar o hemocentro para concentrado de fator VIII rico em FvW."
  },
  orientacoesRetorno: [
    "Não use AAS, ibuprofeno, diclofenaco, nimesulida ou cetoprofeno; para dor use paracetamol ou dipirona",
    "Avise sempre ao dentista, ao cirurgião e no pré-natal que tem distúrbio de coagulação; procedimentos precisam de preparo",
    "Depois da desmopressina, beba pouca água por 24 horas; volte se tiver dor de cabeça forte, vômitos, confusão ou convulsão",
    "Voltar ao PS se o sangramento não parar após 20 minutos de compressão, se houver fezes pretas, vômito com sangue, urina com sangue ou fraqueza intensa",
    "Familiares de primeiro grau com sangramentos devem ser avaliados",
    "Retorno com resultados em 2–4 semanas; acompanhamento no hemocentro se confirmado"
  ],
  fontes: [
    "ASH/ISTH/NHF/WFH — Guidelines on the diagnosis (2021) and management (2021) of von Willebrand disease (Blood Advances, 2021)",
    "Ministério da Saúde — Manual de diagnóstico e tratamento da doença de von Willebrand (2008)",
    "ISTH/SSC — Bleeding Assessment Tool (ISTH-BAT), 2010",
    "British Society for Haematology — Guideline for the laboratory investigation of heritable disorders of platelet function (2011)",
    "Ministério da Saúde — RENAME (versão vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
