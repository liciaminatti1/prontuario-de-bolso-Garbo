// Dislipidemia
registrarFicha({
  id: "dislipidemia",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Dislipidemia",
  resumo: "Estratificação do risco cardiovascular, metas de LDL-c e não-HDL-c (SBC 2025) e escolha da estatina na atenção primária.",
  palavrasChave: "dislipidemia colesterol ldl nao-hdl triglicerides lipoproteina a lpa estatina sinvastatina atorvastatina rosuvastatina ezetimiba fibrato risco cardiovascular prevent risco extremo",
  critico: {
    tempo: "Risco define a meta",
    texto: "Primeiro estratifique o risco (baixo, intermediário, alto, muito alto, extremo). Doença aterosclerótica estabelecida: estatina de alta intensidade, meta LDL-c < 50 (muito alto) ou < 40 mg/dL (extremo)."
  },
  alarmes: [
    "LDL-c ≥ 190 mg/dL (suspeitar hipercolesterolemia familiar)",
    "Triglicerídeos ≥ 500 mg/dL (risco de pancreatite) ou ≥ 1.000",
    "Dor muscular intensa com urina escura em uso de estatina (rabdomiólise)",
    "Xantomas, arco corneano < 45 anos",
    "DCV precoce na família"
  ],
  condutaInicial: [
    "Perfil lipídico, glicemia, TSH, creatinina, TGO/TGP; Lp(a) uma vez na vida",
    "Estratificar risco (eventos ateroscleróticos, DM, DRC, LDL ≥ 190, escore PREVENT em 30–79 anos sem DCV)",
    "Definir metas de LDL-c e não-HDL-c conforme a categoria (tabela)",
    "Mudança de estilo de vida para todos",
    "Estatina na intensidade necessária para atingir a meta"
  ],
  fataisExcluir: [
    "Pancreatite por hipertrigliceridemia grave",
    "Doença aterosclerótica não diagnosticada",
    "Dislipidemia secundária (hipotireoidismo, síndrome nefrótica, colestase)"
  ],
  proximaDecisao: "Dosar perfil lipídico 4–12 semanas após início. Fora da meta: aumentar intensidade da estatina; persistindo, associar ezetimiba. Muito alto/extremo fora da meta com estatina + ezetimiba → encaminhar (iPCSK9).",
  clinica: {
    anamnese: [
      "DCV prévia (IAM, AVC, DAOP, revascularização)",
      "DM, HAS, tabagismo, DRC, obesidade",
      "História familiar de DCV precoce (homem < 55, mulher < 65) e de dislipidemia",
      "Medicações: corticoide, antirretrovirais, isotretinoína, tiazídico, betabloqueador",
      "Álcool, dieta, atividade física"
    ],
    exameFisico: [
      "PA, IMC, circunferência abdominal",
      "Xantomas tendíneos, xantelasma, arco corneano",
      "Pulsos periféricos, sopros"
    ],
    diferenciais: [
      { dx: "Hipotireoidismo", pista: "TSH elevado" },
      { dx: "Síndrome nefrótica", pista: "Proteinúria, edema" },
      { dx: "Colestase", pista: "Fosfatase alcalina, GGT elevadas" },
      { dx: "Hipercolesterolemia familiar", pista: "LDL ≥ 190, xantomas, família" }
    ],
    gravidade: [
      "Extremo: eventos ateroscleróticos recorrentes, progressão da aterosclerose apesar do tratamento, ou 1 evento maior associado a ≥ 2 condições de alto risco (ex.: DM, DRC, tabagismo, hipercolesterolemia familiar). Conferir a lista completa de condições na diretriz",
      "Muito alto: doença aterosclerótica clínica estabelecida (IAM, AVC isquêmico, DAOP, revascularização) que não preenche critério de extremo",
      "Alto: DM com estratificador de risco, DRC, LDL ≥ 190 mg/dL, aterosclerose subclínica significativa ou escore alto",
      "Intermediário e baixo: pelo escore de risco (PREVENT, 30–79 anos sem DCV)"
    ]
  },
  exames: [
    {
      nome: "Perfil lipídico",
      pedido: "Colesterol total, HDL-c, triglicerídeos, LDL-c (calculado por Martin/Hopkins ou Sampson) e não-HDL-c.",
      porQue: "Diagnóstico e meta.",
      esperar: "—",
      interpretacao: "Não-HDL = CT − HDL. LDL-c é meta primária e não-HDL-c é meta coprimária (SBC 2025).",
      limitacoes: "Jejum não é obrigatório; pedir com jejum se TG > 440."
    },
    {
      nome: "Exames de causas secundárias e segurança",
      pedido: "TSH, glicemia de jejum/HbA1c, creatinina, TGO, TGP; CPK basal se risco de miopatia.",
      porQue: "Excluir causas secundárias e ter valores basais.",
      esperar: "—",
      interpretacao: "Transaminases até 3× o limite não contraindicam estatina.",
      limitacoes: "Não repetir CPK de rotina sem sintomas."
    },
    {
      nome: "Lipoproteína(a)",
      pedido: "Lipoproteína(a) [Lp(a)] — dosagem única.",
      porQue: "SBC 2025 recomenda dosar ao menos uma vez na vida; é fator de risco genético independente.",
      esperar: "—",
      interpretacao: "Valor elevado reforça intensificar o controle do LDL-c e dos demais fatores de risco.",
      limitacoes: "Não precisa repetir. Disponibilidade limitada no SUS."
    }
  ],
  tratamento: [
    {
      droga: "Sinvastatina",
      linha: "l1",
      dose: "20–40 mg (moderada intensidade)",
      via: "VO, à noite",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Perfil lipídico em 4–12 semanas; mialgia",
      contraindicacoes: "Gestação, lactação, hepatopatia ativa",
      ajustes: "Disponível na Farmácia Popular/UBS. Não usar 80 mg (miopatia). Interações: amiodarona, anlodipino, diltiazem, claritromicina, fibrato (genfibrozila)"
    },
    {
      droga: "Atorvastatina",
      linha: "l1",
      dose: "10–20 mg (moderada) · 40–80 mg (alta intensidade)",
      via: "VO, qualquer horário",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Perfil lipídico, mialgia",
      contraindicacoes: "Gestação, lactação, hepatopatia ativa",
      ajustes: "Alta intensidade reduz LDL ≥ 50%: indicada para alto, muito alto e extremo risco. No SUS, dispensação pelo PCDT de Dislipidemia"
    },
    {
      droga: "Rosuvastatina",
      linha: "alt",
      dose: "5–10 mg (moderada) · 20–40 mg (alta)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Perfil lipídico, função renal",
      contraindicacoes: "Gestação, lactação, hepatopatia ativa; insuficiência renal grave (ClCr < 30 mL/min) segundo a bula",
      ajustes: "Asiáticos: iniciar 5 mg. Não disponível no SUS (Componente Básico)"
    },
    {
      droga: "Ezetimiba",
      linha: "adj",
      dose: "10 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Perfil lipídico",
      contraindicacoes: "—",
      ajustes: "Associar quando estatina máxima tolerada não atinge a meta"
    },
    {
      droga: "Fenofibrato / ciprofibrato",
      linha: "adj",
      dose: "Fenofibrato 200–250 mg · ciprofibrato 100 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Creatinina, transaminases, CPK",
      contraindicacoes: "DRC grave, colelitíase",
      ajustes: "TG ≥ 500 mg/dL apesar de dieta, álcool zero e controle glicêmico. Evitar genfibrozila com estatina"
    }
  ],
  destino: {
    agora: [
      "Estratificar risco, definir meta, iniciar MEV e estatina conforme risco"
    ],
    reavaliar: [
      "Perfil lipídico 4–12 semanas após início/ajuste",
      "Na meta: anual"
    ],
    alta: [
      "Seguimento na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Pancreatite aguda por hipertrigliceridemia"
    ],
    transferencia: [
      "Cardiologia/endocrinologia: suspeita de hipercolesterolemia familiar, intolerância a múltiplas estatinas, meta não atingida em muito alto risco, TG ≥ 1.000"
    ]
  },
  prescricao: {
    ambulatorial: "RISCO BAIXO / INTERMEDIÁRIO (moderada intensidade; meta de redução ≥ 30%)\nUSO ORAL\n1. Sinvastatina 40 mg ---------------------------- 30 comprimidos\n   Tomar 1 comprimido à noite, todos os dias. Uso contínuo.\n\nRISCO ALTO / MUITO ALTO / EXTREMO (alta intensidade; meta de redução ≥ 50%)\nUSO ORAL\n1. Atorvastatina 40 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, em qualquer horário. Uso contínuo (pode subir para 80 mg).\n2. Ezetimiba 10 mg (se fora da meta com estatina máxima tolerada) ---- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n\nHIPERTRIGLICERIDEMIA ≥ 500 mg/dL (após dieta, álcool zero e controle glicêmico)\n3. Ciprofibrato 100 mg ------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Alternativa: fenofibrato 200 mg 1 vez ao dia. Não associar genfibrozila a estatina.)\n\nPEDIDO DE EXAMES (controle em 4–12 semanas)\nColesterol total e frações, triglicerídeos, não-HDL-c; TGO, TGP; CPK se dor muscular."
  },
  orientacoesRetorno: [
    "Remédio do colesterol é de uso contínuo; não parar quando o exame melhorar",
    "Dieta com menos gordura saturada e ultraprocessados, mais fibras; atividade física 150 min por semana; parar de fumar; evitar álcool (sobretudo se triglicerídeos altos)",
    "Voltar logo se tiver dor ou fraqueza muscular forte, urina escura (cor de coca-cola) ou pele/olhos amarelados",
    "Avisar o médico antes de usar antibiótico ou antifúngico novo (interações com sinvastatina)",
    "Mulher que engravidar ou planejar gestação: suspender a estatina e avisar a equipe",
    "Repetir exames em 4–12 semanas após começar ou mudar a dose; na meta, uma vez por ano"
  ],
  tabelas: [
    {
      titulo: "Metas por categoria de risco — SBC 2025",
      colunas: ["Risco", "LDL-c (mg/dL)", "Não-HDL-c (mg/dL)", "Redução de LDL-c"],
      linhas: [
        ["Extremo", "< 40", "< 70", "≥ 50%"],
        ["Muito alto", "< 50", "< 80", "≥ 50%"],
        ["Alto", "< 70", "< 100", "≥ 50%"],
        ["Intermediário", "< 100", "< 130", "≥ 30%"],
        ["Baixo", "< 115", "< 145", "≥ 30%"]
      ],
      nota: "Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose — SBC 2025. Atingir a meta absoluta e a redução percentual. ApoB é meta secundária (ex.: extremo < 45; intermediário < 90; baixo < 100 mg/dL)."
    },
    {
      titulo: "Intensidade das estatinas",
      colunas: ["Intensidade", "Redução esperada do LDL-c", "Doses diárias"],
      linhas: [
        ["Alta", "≥ 50%", "Atorvastatina 40–80 mg · rosuvastatina 20–40 mg"],
        ["Moderada", "30–49%", "Sinvastatina 20–40 mg · atorvastatina 10–20 mg · rosuvastatina 5–10 mg · pravastatina 40–80 mg"],
        ["Baixa", "< 30%", "Sinvastatina 10 mg · pravastatina 10–20 mg"]
      ]
    }
  ],
  fontes: [
    "SBC — Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose (Arq Bras Cardiol, 2025)",
    "Ministério da Saúde — PCDT Dislipidemia: prevenção de eventos cardiovasculares e pancreatite (2020)",
    "ESC/EAS 2019 Guidelines for the management of dyslipidaemias e Focused Update 2025"
  ],
  revisao: "2026-10-21",
  versao: "2.0"
});
