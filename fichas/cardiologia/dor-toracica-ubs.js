// Dor torácica na UBS
registrarFicha({
  id: "dor-toracica-ubs",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Dor torácica na UBS",
  resumo: "Paciente com dor torácica na unidade. O papel da UBS é reconhecer, iniciar a primeira conduta e transferir.",
  palavrasChave: "dor no peito infarto sca samu ecg aas ubs transferencia",
  critico: {
    tempo: "ECG ≤ 10 min + SAMU 192",
    texto: "Se suspeita de SCA: AAS, ECG e acionar SAMU. Não liberar o paciente para ir sozinho ao hospital."
  },
  alarmes: [
    "Dor em aperto > 10 min ou em repouso, entre a mandíbula e o umbigo",
    "Sudorese, palidez, dispneia, síncope",
    "PAS < 90, FC < 50 ou > 120",
    "Alteração no ECG (supra, infra, BRE novo)",
    "Dor lancinante para o dorso"
  ],
  condutaInicial: [
    "Sala de emergência / maca, monitor se houver, SpO₂",
    "ECG de 12 derivações em até 10 min (telecardiologia se disponível)",
    "AAS 300 mg mastigado (3 comprimidos de 100 mg), se sem alergia ou sangramento ativo",
    "Dinitrato de isossorbida 5 mg SL se PAS ≥ 90 e sem PDE-5",
    "Acionar SAMU 192 e manter o paciente em observação até a chegada"
  ],
  fataisExcluir: [
    "Infarto agudo do miocárdio",
    "Dissecção de aorta",
    "TEP",
    "Pneumotórax"
  ],
  proximaDecisao: "Suspeita de SCA → SAMU para PS com capacidade de reperfusão. Dor claramente não cardíaca, ECG normal e baixo risco → manejo na UBS com retorno breve.",
  clinica: {
    anamnese: [
      "Características da dor, duração, fatores de piora e alívio",
      "Fatores de risco cardiovascular",
      "Episódios prévios, uso de PDE-5",
      "Sintomas associados"
    ],
    exameFisico: [
      "PA nos dois braços, FC, SpO₂",
      "Ausculta cardíaca e pulmonar",
      "Sinais de TVP, palpação da parede torácica"
    ],
    diferenciais: [
      {
        dx: "SCA",
        pista: "Dor típica, fatores de risco, alteração de ECG"
      },
      {
        dx: "Osteomuscular",
        pista: "Dor localizada, reprodutível, relação com movimento — só após avaliar risco"
      },
      {
        dx: "DRGE",
        pista: "Queimação, relação com refeições"
      },
      {
        dx: "Ansiedade",
        pista: "Diagnóstico de exclusão"
      },
      {
        dx: "Herpes-zóster",
        pista: "Dor em queimação em dermátomo, vesículas"
      }
    ],
    gravidade: [
      "Qualquer sinal de instabilidade → sala de emergência e SAMU"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações — urgente. Enviar à telecardiologia/regulação.",
      porQue: "Detectar supra de ST e outras alterações isquêmicas.",
      esperar: "—",
      interpretacao: "Alterado ou dúvida → SAMU. Normal não exclui SCA se a história é sugestiva.",
      limitacoes: "Não solicitar troponina ambulatorial e aguardar resultado com o paciente sintomático."
    }
  ],
  tratamento: [
    {
      droga: "AAS",
      linha: "l1",
      dose: "200–300 mg",
      via: "VO, mastigado",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Alergia, sangramento ativo, suspeita de dissecção",
      ajustes: "—"
    },
    {
      droga: "Dinitrato de isossorbida",
      linha: "adj",
      dose: "5 mg",
      via: "Sublingual",
      intervalo: "Até 3 doses, a cada 5 min",
      duracao: "—",
      monitorizacao: "PA antes de cada dose",
      contraindicacoes: "PAS < 90, IAM de VD, PDE-5 recente",
      ajustes: "—"
    },
    {
      droga: "Oxigênio",
      linha: "adj",
      dose: "Só se SpO₂ < 90%",
      via: "Cateter nasal",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "SpO₂",
      contraindicacoes: "—",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Suspeita de SCA → SAMU 192, registrar horário de início da dor, ECG e medicações dadas"
    ],
    reavaliar: [
      "Sinais vitais a cada 5–10 min até a remoção",
      "Repetir ECG se dor persistir"
    ],
    alta: [
      "Dor de origem claramente não cardíaca, ECG normal, sem fatores de alto risco",
      "Retorno em 24–72 h e orientação de procurar PS se dor recorrer"
    ],
    observacao: [
      "Manter em observação na UBS até a chegada do SAMU"
    ],
    internacao: [
      "—"
    ],
    transferencia: [
      "Toda suspeita de SCA, dissecção ou TEP: transporte em ambulância, nunca por meios próprios"
    ]
  },
  prescricao: {
    hospitalar: "SALA DE OBSERVAÇÃO DA UBS — SUSPEITA DE SCA (até a chegada do SAMU)\n1. Repouso em maca, cabeceira elevada. Monitor cardíaco e oxímetro se disponíveis.\n2. ECG de 12 derivações em até 10 min; repetir a cada 15–30 min ou se a dor mudar. Enviar à telecardiologia/regulação.\n3. AAS 100 mg — 3 comprimidos (300 mg) VO mastigados, AGORA, dose única.\n4. Dinitrato de isossorbida 5 mg — 1 comprimido sublingual se dor e PAS ≥ 90 mmHg; repetir a cada 5 min, até 3 doses. Não usar se sildenafila < 24 h, tadalafila < 48 h ou suspeita de IAM de VD.\n5. Oxigênio por cateter nasal 2–4 L/min somente se SpO₂ < 90%.\n6. Acesso venoso periférico calibroso; SF 0,9% apenas para manter a veia.\n7. Sinais vitais e SpO₂ a cada 5–10 min.\n8. Acionar SAMU 192. Registrar horário de início da dor, horário do ECG e medicações dadas (com horário) na ficha de referência.\n9. Se PCR: iniciar RCP e desfibrilar com DEA.",
    ambulatorial: "DOR CLARAMENTE NÃO CARDÍACA, ECG NORMAL E BAIXO RISCO\nSe osteomuscular — USO ORAL\n1. Dipirona 500 mg ------------------------------- 40 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor, por até 5 dias.\n\nSe sintomas de refluxo — USO ORAL\n2. Omeprazol 20 mg ------------------------------ 28 cápsulas\n   Tomar 1 cápsula em jejum, 30 minutos antes do café, por 4 semanas."
  },
  orientacoesRetorno: [
    "Se a dor voltar, durar mais de 10 minutos ou vier com falta de ar, suor frio, desmaio ou dor no braço/mandíbula: ligar 192 na hora. Não ir dirigindo",
    "Não usar sildenafila ou tadalafila sem falar com o médico",
    "Retornar à UBS em 24–72 h para reavaliação, mesmo se melhorar",
    "Trazer resultados de exames e lista de remédios em uso no retorno",
    "Controlar pressão, diabetes e colesterol; parar de fumar"
  ],
  fontes: [
    "SBC — Diretriz Brasileira de Dor Torácica na Emergência (Arq Bras Cardiol, 2025)",
    "ACC/AHA/ACEP/NAEMSP/SCAI — Guideline for the Management of Patients With Acute Coronary Syndromes (2025)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
