// Dislipidemia
registrarFicha({
  id: "dislipidemia",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Dislipidemia",
  resumo: "Estratificação do risco cardiovascular, metas de LDL-c e escolha da estatina na atenção primária.",
  palavrasChave: "dislipidemia colesterol ldl triglicerides estatina sinvastatina atorvastatina rosuvastatina ezetimiba fibrato risco cardiovascular",
  critico: {
    tempo: "Risco define a meta",
    texto: "Primeiro estratifique o risco cardiovascular. Doença aterosclerótica estabelecida = muito alto risco: estatina de alta intensidade."
  },
  alarmes: [
    "LDL-c ≥ 190 mg/dL (suspeitar hipercolesterolemia familiar)",
    "Triglicerídeos ≥ 500 mg/dL (risco de pancreatite) ou ≥ 1.000",
    "Dor muscular intensa com urina escura em uso de estatina (rabdomiólise)",
    "Xantomas, arco corneano < 45 anos",
    "DCV precoce na família"
  ],
  condutaInicial: [
    "Perfil lipídico, glicemia, TSH, creatinina, TGO/TGP",
    "Estratificar risco (DCV estabelecida, DM, DRC, LDL ≥ 190, escore de risco global)",
    "Definir meta de LDL-c conforme risco",
    "Mudança de estilo de vida para todos",
    "Estatina na intensidade necessária para atingir a meta"
  ],
  fataisExcluir: [
    "Pancreatite por hipertrigliceridemia grave",
    "Doença aterosclerótica não diagnosticada",
    "Dislipidemia secundária (hipotireoidismo, síndrome nefrótica, colestase)"
  ],
  proximaDecisao: "Dosar perfil lipídico 4–12 semanas após início. Fora da meta: aumentar intensidade da estatina; persistindo, associar ezetimiba.",
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
      "Muito alto risco: doença aterosclerótica clínica ou obstrução ≥ 50% em imagem",
      "Alto risco: DM com estratificador, DRC, LDL ≥ 190, escore global alto",
      "Intermediário e baixo: pelo escore de risco global"
    ]
  },
  exames: [
    {
      nome: "Perfil lipídico",
      pedido: "Colesterol total, HDL-c, triglicerídeos, LDL-c (calculado por Martin/Hopkins) e não-HDL-c.",
      porQue: "Diagnóstico e meta.",
      esperar: "—",
      interpretacao: "Não-HDL = CT − HDL; meta 30 mg/dL acima da meta de LDL.",
      limitacoes: "Jejum não é obrigatório; pedir com jejum se TG > 440."
    },
    {
      nome: "Exames de causas secundárias e segurança",
      pedido: "TSH, glicemia de jejum/HbA1c, creatinina, TGO, TGP; CPK basal se risco de miopatia.",
      porQue: "Excluir causas secundárias e ter valores basais.",
      esperar: "—",
      interpretacao: "Transaminases até 3× o limite não contraindicam estatina.",
      limitacoes: "Não repetir CPK de rotina sem sintomas."
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
      ajustes: "Não usar 80 mg (miopatia). Interações: amiodarona, anlodipino, diltiazem, claritromicina, fibrato (genfibrozila)"
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
      ajustes: "Alta intensidade reduz LDL ≥ 50%: indicada para muito alto e alto risco"
    },
    {
      droga: "Rosuvastatina",
      linha: "alt",
      dose: "5–10 mg (moderada) · 20–40 mg (alta)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Perfil lipídico, função renal",
      contraindicacoes: "Gestação; TFG < 30 (máx 10 mg)",
      ajustes: "Asiáticos: iniciar 5 mg"
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
  fontes: [
    "SBC — Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose (2025)",
    "ESC/EAS 2019 Guidelines for the management of dyslipidaemias e Focused Update 2025",
    "Ministério da Saúde — PCDT Dislipidemia: prevenção de eventos cardiovasculares e pancreatite (2020)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
