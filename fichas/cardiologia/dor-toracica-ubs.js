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
    "Dor em aperto > 20 min, em repouso",
    "Sudorese, palidez, dispneia, síncope",
    "PAS < 90, FC < 50 ou > 120",
    "Alteração no ECG (supra, infra, BRE novo)",
    "Dor lancinante para o dorso"
  ],
  condutaInicial: [
    "Sala de emergência / maca, monitor se houver, SpO₂",
    "ECG de 12 derivações em até 10 min (telecardiologia se disponível)",
    "AAS 200–300 mg mastigado",
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
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28 (Acolhimento à demanda espontânea, vol. II)",
    "SBC — Diretrizes de SCA"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
