// HIV na gestação, parto e puerpério
registrarFicha({
  id: "hiv-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "HIV na gestação: TARV, via de parto, AZT intraparto e profilaxia do RN",
  resumo: "Prevenção da transmissão vertical do HIV: diagnóstico no pré-natal ou na maternidade, TARV imediata, carga viral para decidir via de parto e AZT intraparto, profilaxia do recém-nascido e suspensão da amamentação.",
  palavrasChave: "hiv aids gestante transmissao vertical tarv dolutegravir tenofovir lamivudina tdf 3tc dtg carga viral cv genotipagem azt zidovudina intraparto cesarea eletiva raltegravir nevirapina profilaxia rn cabergolina inibicao lactacao formula infantil sae",
  critico: {
    tempo: "TARV no mesmo dia do diagnóstico",
    texto: "Gestante com HIV inicia TDF + 3TC + DTG no dia do diagnóstico, sem esperar CD4, carga viral ou genotipagem. Na maternidade: CV ≥ 1.000 cópias/mL ou desconhecida após 34 semanas → AZT IV e cesárea eletiva com 38 semanas."
  },
  alarmes: [
    "Teste rápido de HIV reagente no trabalho de parto (AZT IV imediato e profilaxia de alto risco no RN)",
    "Carga viral detectável no 3º trimestre ou má adesão",
    "Gestante com CD4 < 200 (profilaxia de infecções oportunistas)",
    "Febre, tosse, cefaleia ou diarreia persistente (infecção oportunista, TB)",
    "Sinais de hepatotoxicidade ou anemia grave com a TARV"
  ],
  condutaInicial: [
    "Teste rápido de HIV na 1ª consulta, no 3º trimestre e na maternidade (e após exposição de risco); 2 testes rápidos reagentes de fabricantes diferentes confirmam o diagnóstico",
    "Notificar (HIV em gestante e criança exposta) e vincular ao SAE/PNAR, mantendo o pré-natal na UBS",
    "Iniciar TARV no mesmo dia: TDF/3TC 300/300 mg + DTG 50 mg, 1×/dia, em qualquer idade gestacional",
    "Coletar antes (sem atrasar a TARV): CD4, carga viral, genotipagem pré-tratamento, hemograma, função renal e hepática, sorologias (sífilis, hepatites B e C, toxoplasmose), PPD/IGRA ou rastreio de TB",
    "Carga viral 2–4 semanas após iniciar ou trocar a TARV e com 34 semanas (decide a via de parto)",
    "Testar parcerias e filhos; oferecer PrEP à parceria soronegativa",
    "Planejar com a gestante: via de parto, AZT intraparto, não amamentar, inibição da lactação e fórmula infantil"
  ],
  fataisExcluir: [
    "Tuberculose ativa",
    "Infecções oportunistas (pneumocistose, neurotoxoplasmose, criptococose)",
    "Coinfecção por sífilis e hepatite B (tratar e prevenir no RN)"
  ],
  proximaDecisao: "Carga viral com 34 semanas: < 1.000 cópias/mL → via de parto por indicação obstétrica; ≥ 1.000 ou desconhecida → cesárea eletiva a partir de 38 semanas + AZT IV iniciado 3 h antes. AZT IV dispensável se CV indetectável com boa adesão (PCDT TV).",
  clinica: {
    anamnese: [
      "Data do diagnóstico, TARV prévia e adesão, cargas virais anteriores e genotipagens",
      "Sintomas de TB e de infecções oportunistas",
      "Outras IST, uso de drogas, violência, situação social e sigilo",
      "Parceria (sorologia, TARV)"
    ],
    exameFisico: [
      "Peso, sinais vitais, linfonodos, candidíase oral, lesões cutâneas e genitais",
      "Exame obstétrico de rotina"
    ],
    diferenciais: [
      { dx: "Infecção aguda pelo HIV", pista: "Síndrome mononucleose-símile; TR pode ser negativo na janela: pedir carga viral" },
      { dx: "Falso reagente", pista: "Discordância entre testes: seguir fluxograma do MS (imunoensaio + western blot/imunoblot ou CV)" }
    ],
    gravidade: [
      "Risco de transmissão vertical < 1% com TARV e CV indetectável; até 25–30% sem intervenção",
      "Maior risco: CV detectável no parto, diagnóstico tardio, bolsa rota prolongada, amamentação"
    ]
  },
  exames: [
    {
      nome: "Carga viral e CD4",
      pedido: "Carga viral do HIV (RNA HIV-1 quantitativo). Contagem de linfócitos T-CD4+. Genotipagem pré-tratamento (gestante).",
      porQue: "Avaliar resposta à TARV e decidir via de parto, AZT e profilaxia do RN.",
      esperar: "CV indetectável (< 50 cópias/mL) em 8–12 semanas de TARV.",
      interpretacao: "CV detectável após 4–8 semanas: checar adesão e interações; genotipagem. Com 34 semanas: < 1.000 parto vaginal possível; ≥ 1.000 cesárea eletiva.",
      limitacoes: "Genotipagem não deve atrasar o início da TARV."
    },
    {
      nome: "Exames de segurança da TARV",
      pedido: "Hemograma, creatinina, TGO, TGP, urina tipo 1, glicemia; sorologias: VDRL/TR sífilis, HBsAg, anti-HBc, anti-HBs, anti-HCV, toxoplasmose IgG/IgM.",
      porQue: "Linha de base e coinfecções.",
      esperar: "—",
      interpretacao: "ClCr < 60 mL/min: discutir troca do TDF. HBsAg reagente: manter TDF (trata também a hepatite B).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Tenofovir + lamivudina (TDF/3TC) + dolutegravir (DTG)",
      linha: "l1",
      dose: "TDF/3TC 300/300 mg 1 comprimido + DTG 50 mg 1 comprimido",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Por toda a vida (manter após o parto)",
      monitorizacao: "CV 2–4 semanas após início e com 34 semanas; função renal",
      contraindicacoes: "Interações do DTG: separar de cálcio, ferro e antiácidos (tomar DTG 2 h antes ou 6 h depois, ou junto com refeição); rifampicina exige DTG 50 mg 12/12 h",
      ajustes: "Esquema preferencial do PCDT TV para gestantes em qualquer idade gestacional. Gestante já em TARV com CV indetectável: manter o esquema"
    },
    {
      droga: "Zidovudina (AZT) IV intraparto",
      linha: "l1",
      dose: "Ataque 2 mg/kg na 1ª hora; manutenção 1 mg/kg/h",
      via: "IV",
      intervalo: "Contínua",
      duracao: "Do início do trabalho de parto (ou 3 h antes da cesárea) até o clampeamento do cordão",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Indicado se CV ≥ 1.000 cópias/mL ou desconhecida após 34 semanas (considerar se CV detectável < 1.000). Frasco 10 mg/mL; diluir em SG 5% (concentração ≤ 4 mg/mL). Manter a TARV oral no dia do parto"
    },
    {
      droga: "Cabergolina (inibição da lactação)",
      linha: "l1",
      dose: "1 mg (2 comprimidos de 0,5 mg)",
      via: "VO",
      intervalo: "Dose única",
      duracao: "Logo após o parto (antes da alta)",
      monitorizacao: "PA",
      contraindicacoes: "Hipertensão não controlada, pré-eclâmpsia (cautela), uso de ergotamínicos",
      ajustes: "Enfaixamento das mamas não é recomendado como método principal"
    },
    {
      droga: "Profilaxia do RN — baixo risco: zidovudina (AZT) xarope 10 mg/mL",
      linha: "l1",
      dose: "≥ 35 semanas: 4 mg/kg/dose · 30–35 semanas: 2 mg/kg/dose por 14 dias, depois 3 mg/kg/dose · < 30 semanas: 2 mg/kg/dose",
      via: "VO (IV 75% da dose oral se não pode receber VO)",
      intervalo: "12/12 h",
      duracao: "28 dias; iniciar o mais cedo possível, idealmente nas primeiras 4 h",
      monitorizacao: "Hemograma (anemia)",
      contraindicacoes: "—",
      ajustes: "Baixo risco = mãe em TARV desde a 1ª metade da gestação, CV indetectável a partir de 28 semanas e sem falha de adesão"
    },
    {
      droga: "Profilaxia do RN — alto risco: AZT + lamivudina (3TC) + raltegravir (RAL)",
      linha: "l1",
      dose: "AZT como acima; 3TC 2 mg/kg/dose 12/12 h; RAL conforme tabela de peso e idade do PCDT",
      via: "VO",
      intervalo: "12/12 h (RAL: 1×/dia na 1ª semana, depois 12/12 h)",
      duracao: "28 dias",
      monitorizacao: "Hemograma, CV do RN conforme PCDT",
      contraindicacoes: "—",
      ajustes: "Alto risco = sem TARV, TARV iniciada na 2ª metade da gestação, CV detectável ou desconhecida no 3º trimestre, má adesão, diagnóstico no parto ou IST/infecção aguda materna. Esquema de RN < 37 semanas: conferir PCDT (pode usar nevirapina)"
    }
  ],
  destino: {
    agora: ["Diagnóstico no pré-natal: TARV no mesmo dia e vinculação ao SAE", "Diagnóstico no parto: AZT IV, coleta de CV, TARV e profilaxia de alto risco no RN"],
    reavaliar: ["CV 2–4 semanas após início e com 34 semanas", "Adesão a cada consulta"],
    alta: ["Puérpera com TARV, cabergolina feita, fórmula infantil garantida, consulta no SAE e na UBS agendadas; RN com AZT prescrito e consulta no SAE/pediatria"],
    observacao: ["—"],
    internacao: ["Infecção oportunista, TB grave, intolerância grave à TARV"],
    transferencia: ["Maternidade de referência para gestante vivendo com HIV conforme fluxo local"]
  },
  prescricao: {
    ambulatorial: "GESTANTE VIVENDO COM HIV — INÍCIO DE TARV\nUSO ORAL\n1. Tenofovir 300 mg + lamivudina 300 mg ----------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia.\n2. Dolutegravir 50 mg ---------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o comprimido acima. Tomar 2 horas antes ou 6 horas depois do ferro e do cálcio.\n(Dispensação na UDM/SAE com formulário do SICLOM.)\n\nPUERPÉRIO — INIBIÇÃO DA LACTAÇÃO\n3. Cabergolina 0,5 mg ---------------------------- 2 comprimidos\n   Tomar 2 comprimidos juntos, uma única vez, logo após o parto.",
    hospitalar: "PARTURIENTE COM HIV — CV ≥ 1.000 cópias/mL OU DESCONHECIDA (peso: ___ kg)\n1. Manter TARV oral no horário habitual.\n2. Zidovudina (AZT) 10 mg/mL — ataque 2 mg/kg (___ mL) em SG 5% 100 mL IV em 1 hora; depois 1 mg/kg/h (___ mL) em SG 5% IV em bomba até o clampeamento do cordão. Cesárea eletiva: iniciar 3 h antes da incisão.\n3. Cesárea eletiva com 38 semanas se CV ≥ 1.000 ou desconhecida; evitar amniotomia, toques repetidos, fórceps, vácuo e episiotomia no parto vaginal; clampear o cordão imediatamente, sem ordenha.\n4. Banho do RN logo após o nascimento; aspirar vias aéreas só se necessário.\n5. Cabergolina 1 mg VO dose única após o parto. Não amamentar; fórmula infantil.\n6. RN: AZT xarope 4 mg/kg VO 12/12 h (≥ 35 semanas) por 28 dias, iniciar nas primeiras 4 h; alto risco: associar 3TC 2 mg/kg 12/12 h e raltegravir conforme PCDT."
  },
  orientacoesRetorno: [
    "Tome os remédios todos os dias, no mesmo horário; com o vírus indetectável, a chance de passar o HIV para o bebê é menor que 1%",
    "Separe o dolutegravir do ferro e do cálcio por algumas horas (ou tome todos junto com a refeição, conforme orientação)",
    "Não amamente nem deixe outra mulher amamentar seu bebê; o SUS fornece a fórmula infantil",
    "Dê o xarope de AZT ao bebê de 12 em 12 horas por 4 semanas e leve-o às consultas no serviço especializado",
    "Seu diagnóstico é sigiloso; você não é obrigada a contar a ninguém",
    "Procure atendimento se febre, tosse por mais de 2 semanas, diarreia ou manchas na pele"
  ],
  tabelas: [
    {
      titulo: "Decisões pela carga viral (≥ 34 semanas)",
      colunas: ["Carga viral", "Via de parto", "AZT IV intraparto", "Profilaxia do RN"],
      linhas: [
        ["Indetectável, boa adesão", "Indicação obstétrica", "Não necessário", "AZT 28 dias (baixo risco)"],
        ["Detectável < 1.000 cópias/mL", "Indicação obstétrica", "Considerar", "Conforme critérios de risco"],
        ["≥ 1.000 cópias/mL ou desconhecida", "Cesárea eletiva a partir de 38 semanas", "Sim (3 h antes da cesárea)", "AZT + 3TC + RAL 28 dias (alto risco)"],
        ["Diagnóstico no trabalho de parto", "Indicação obstétrica (cesárea se dilatação inicial e bolsa íntegra)", "Sim, imediato", "Alto risco"]
      ],
      nota: "Cesárea em trabalho de parto avançado ou bolsa rota há tempo tem menor benefício. Criança exposta: sulfametoxazol-trimetoprima a partir de 4 semanas até exclusão da infecção (PCDT)."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022, atualizações 2024)",
    "Ministério da Saúde — PCDT para Manejo da Infecção pelo HIV em Adultos (2024)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
