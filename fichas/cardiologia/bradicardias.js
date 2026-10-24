// Bradicardias e bloqueios AV — ACLS
registrarFicha({
  id: "bradicardias",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Bradicardia sintomática e bloqueios AV",
  resumo: "FC < 50 bpm com sintomas ou sinais de má perfusão. Reconhecer BAV de 1º, 2º (Mobitz I e II) e 3º grau, buscar causas reversíveis e tratar com atropina, marca-passo transcutâneo e dopamina/adrenalina.",
  palavrasChave: "bradicardia bradiarritmia bav bloqueio atrioventricular mobitz wenckebach bavt total atropina marcapasso transcutaneo dopamina adrenalina doenca do no sinusal chagas sincope",
  critico: {
    tempo: "Atropina 1 mg; marca-passo pronto",
    texto: "Bradicardia com hipotensão, rebaixamento, choque, dor isquêmica ou IC: atropina 1 mg IV a cada 3–5 min (máx. 3 mg). Sem resposta: marca-passo transcutâneo ou dopamina/adrenalina em infusão."
  },
  alarmes: [
    "Hipotensão, choque, alteração do nível de consciência, dor isquêmica, IC aguda",
    "BAV de 2º grau Mobitz II, BAV 2:1 com QRS largo ou BAV total",
    "Pausas > 3 s, síncope, escape ventricular de QRS largo",
    "Hipercalemia (QRS largo, T apiculada)",
    "IAM inferior ou anterior com bloqueio"
  ],
  condutaInicial: [
    "Monitor, oximetria, acesso venoso, ECG de 12 derivações; O₂ se SpO₂ < 90%",
    "Avaliar perfusão: assintomático/estável → investigar e observar com monitor",
    "Instável: atropina 1 mg IV em bolus, repetir a cada 3–5 min até 3 mg",
    "Sem resposta: marca-passo transcutâneo (com analgesia/sedação) ou dopamina 5–20 mcg/kg/min ou adrenalina 2–10 mcg/min",
    "Buscar e tratar causas: hipercalemia, isquemia, drogas (betabloqueador, bloqueador de canal de cálcio, digoxina, amiodarona), hipotermia, hipotireoidismo, hipóxia, aumento de pressão intracraniana",
    "Chamar cardiologia para marca-passo transvenoso se bradicardia instável persistente ou BAV avançado"
  ],
  fataisExcluir: [
    "Hipercalemia",
    "SCA (IAM inferior com BAV; IAM anterior com BAV = pior prognóstico)",
    "Intoxicação por betabloqueador, bloqueador de canal de cálcio, digoxina, organofosforado, clonidina",
    "Hipertensão intracraniana (reflexo de Cushing)",
    "Hipotermia, hipóxia (sobretudo na criança)"
  ],
  proximaDecisao: "BAV de 2º grau Mobitz II, BAV avançado ou total sem causa reversível → internação com monitor e marca-passo (transcutâneo em espera, transvenoso se instável) e indicação de marca-passo definitivo. Bradicardia sinusal ou BAV 1º grau/Mobitz I assintomáticos → sem tratamento agudo; revisar medicações e encaminhar.",
  clinica: {
    anamnese: [
      "Síncope, pré-síncope, dispneia, dor torácica, confusão, fadiga",
      "Medicações: betabloqueador (inclusive colírio de timolol), verapamil, diltiazem, digoxina, amiodarona, ivabradina, clonidina, donepezila, lítio",
      "Doença de Chagas (área endêmica, BRD + BDAS), cardiopatia, cirurgia cardíaca, TAVI recente",
      "DRC e uso de IECA/BRA/espironolactona (hipercalemia)",
      "Atleta, sono (bradicardia fisiológica)"
    ],
    exameFisico: [
      "PA, perfusão, consciência, congestão",
      "Ondas a em canhão no pulso jugular (BAV total)",
      "Temperatura, sinais de hipotireoidismo, sinais de intoxicação"
    ],
    diferenciais: [
      { dx: "Bradicardia sinusal", pista: "P antes de cada QRS; fisiológica em atletas e no sono" },
      { dx: "BAV 1º grau", pista: "PR > 200 ms, todas as P conduzem" },
      { dx: "BAV 2º grau Mobitz I (Wenckebach)", pista: "PR aumenta progressivamente até uma P bloqueada; em geral nodal e benigno" },
      { dx: "BAV 2º grau Mobitz II", pista: "PR constante com P bloqueada súbita; infranodal; risco de BAV total" },
      { dx: "BAV 3º grau (total)", pista: "Dissociação AV: P e QRS independentes; escape juncional (QRS estreito) ou ventricular (QRS largo)" },
      { dx: "Doença do nó sinusal", pista: "Pausas, bradicardia-taquicardia, incompetência cronotrópica" }
    ],
    gravidade: [
      "Instável: hipotensão, choque, rebaixamento, dor isquêmica, IC aguda atribuíveis à bradicardia",
      "BAV 2:1 não define o nível do bloqueio: QRS largo sugere infranodal (maior risco)",
      "Atropina é pouco eficaz em bloqueio infranodal (Mobitz II, BAV total com QRS largo) e no coração transplantado"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações e tira longa de ritmo",
      pedido: "ECG de 12 derivações + DII longo.",
      porQue: "Define o tipo de bradicardia e de bloqueio; procura isquemia e sinais de hipercalemia.",
      esperar: "Relação P–QRS, PR, largura do QRS, frequência do escape.",
      interpretacao: "Escape de QRS largo e lento (20–40 bpm) = infranodal, alto risco.",
      limitacoes: "Bloqueios intermitentes podem exigir Holter ou monitor prolongado."
    },
    {
      nome: "Laboratório",
      pedido: "Potássio, magnésio, cálcio, sódio, creatinina, glicemia, gasometria venosa, troponina, TSH; dosagem de digoxina se em uso; sorologia para Chagas se epidemiologia.",
      porQue: "Causas reversíveis.",
      esperar: "Hipercalemia, isquemia, hipotireoidismo, intoxicação digitálica.",
      interpretacao: "K ≥ 6,5 com alteração de ECG: tratar como emergência (ver ficha hipercalemia).",
      limitacoes: "Não atrasar atropina/marca-passo no instável."
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico.",
      porQue: "Cardiopatia estrutural, função ventricular.",
      esperar: "Cardiomiopatia chagásica, isquêmica, valvopatia.",
      interpretacao: "Orienta tipo de marca-passo e necessidade de CDI.",
      limitacoes: "Eletivo, após estabilização."
    }
  ],
  tratamento: [
    {
      droga: "Atropina",
      linha: "l1",
      dose: "1 mg",
      via: "IV em bolus",
      intervalo: "A cada 3–5 min",
      duracao: "Máximo 3 mg",
      monitorizacao: "FC, PA, ritmo",
      contraindicacoes: "Coração transplantado (sem efeito); cautela em isquemia aguda (aumenta consumo de O₂)",
      ajustes: "Pouco eficaz em BAV infranodal; não atrasar marca-passo. Ampola 0,25 mg/mL (1 mg = 4 mL) ou 0,5 mg/mL"
    },
    {
      droga: "Marca-passo transcutâneo",
      linha: "l1",
      dose: "Modo demanda, FC 60–80 bpm; aumentar a corrente (mA) até captura elétrica e mecânica; manter discretamente acima do limiar",
      via: "Eletrodos adesivos anteroposteriores (ou anterolaterais)",
      intervalo: "Contínuo",
      duracao: "Ponte até marca-passo transvenoso ou correção da causa",
      monitorizacao: "Confirmar captura mecânica pelo pulso femoral (não carotídeo) ou POCUS; dor e pele",
      contraindicacoes: "Hipotermia grave (relativa)",
      ajustes: "Analgesia e sedação: fentanil 25–50 mcg IV ± midazolam 1–2 mg IV, titulando"
    },
    {
      droga: "Dopamina",
      linha: "l1",
      dose: "5–20 mcg/kg/min, titular pela resposta",
      via: "IV em bomba de infusão",
      intervalo: "Contínuo",
      duracao: "Até marca-passo ou correção",
      monitorizacao: "PA, FC, arritmias, extravasamento",
      contraindicacoes: "Taquiarritmias",
      ajustes: "Dopamina 5 mg/mL: 250 mg (50 mL) + SG 5% 200 mL = 1 mg/mL (1.000 mcg/mL). 70 kg a 5 mcg/kg/min = 21 mL/h"
    },
    {
      droga: "Adrenalina",
      linha: "l1",
      dose: "2–10 mcg/min, titular pela resposta",
      via: "IV em bomba de infusão",
      intervalo: "Contínuo",
      duracao: "Até marca-passo ou correção",
      monitorizacao: "PA, FC, isquemia",
      contraindicacoes: "—",
      ajustes: "Adrenalina 1 mg/mL: 4 mg + SF 0,9% 246 mL = 16 mcg/mL. 2–10 mcg/min = 7,5–37,5 mL/h. Preferir acesso central se uso prolongado"
    },
    {
      droga: "Tratamento dirigido à causa",
      linha: "adj",
      dose: "Hipercalemia: gluconato de cálcio 10% 10–30 mL IV · Bloqueador de canal de cálcio: gluconato de cálcio + insulina em altas doses · Betabloqueador: glucagon · Digoxina: anticorpo antidigoxina (Fab)",
      via: "IV",
      intervalo: "Conforme causa",
      duracao: "—",
      monitorizacao: "ECG, potássio, glicemia",
      contraindicacoes: "Cálcio com cautela na intoxicação digitálica",
      ajustes: "Ver fichas hipercalemia, intoxicacoes-exogenas e antidotos"
    }
  ],
  destino: {
    agora: [
      "Instável: atropina → marca-passo transcutâneo ou cronotrópico em infusão",
      "Corrigir causa reversível"
    ],
    reavaliar: [
      "Captura do marca-passo a cada mudança de posição/corrente",
      "Potássio e ECG após correção"
    ],
    alta: [
      "Bradicardia sinusal ou BAV 1º grau/Mobitz I assintomáticos, sem causa grave",
      "Bradicardia por fármaco resolvida após ajuste, sem BAV avançado",
      "Encaminhar à cardiologia; Holter se sintomas intermitentes"
    ],
    observacao: [
      "Bradicardia por fármaco, ainda em eliminação, estável e monitorizada"
    ],
    internacao: [
      "Mobitz II, BAV avançado ou total, pausas sintomáticas, síncope por bradicardia",
      "Uso de marca-passo transcutâneo ou drogas cronotrópicas"
    ],
    transferencia: [
      "Necessidade de marca-passo transvenoso/definitivo sem cardiologia/hemodinâmica local: regulação com marca-passo transcutâneo instalado e testado"
    ]
  },
  prescricao: {
    hospitalar: "BRADICARDIA SINTOMÁTICA — ADULTO (peso: ___ kg)\n1. Monitor cardíaco contínuo, oximetria, PA a cada 5 min; eletrodos de marca-passo transcutâneo posicionados.\n2. O₂ por cateter nasal se SpO₂ < 90%. Acesso venoso.\n3. Atropina 0,25 mg/mL — 1 mg (4 mL) IV em bolus; repetir a cada 3–5 min se necessário até dose total de 3 mg.\n4. Sem resposta: marca-passo transcutâneo em modo demanda, FC 70 bpm, aumentar corrente até captura; confirmar pulso femoral.\n   Analgesia: fentanil 50 mcg/mL — 25 a 50 mcg IV; sedação SN: midazolam 5 mg/mL — 1 a 2 mg IV.\n5. (ou) Dopamina 5 mg/mL — 250 mg (50 mL) + SG 5% 200 mL (1 mg/mL) IV em bomba: iniciar 5 mcg/kg/min (___ mL/h) e titular até 20 mcg/kg/min.\n6. (ou) Adrenalina 1 mg/mL — 4 mg (4 mL) + SF 0,9% 246 mL (16 mcg/mL) IV em bomba: 2–10 mcg/min (7,5–37,5 mL/h).\n7. Suspender drogas bradicardizantes (betabloqueador, verapamil, diltiazem, digoxina, amiodarona).\n8. Exames: K, Mg, Ca, creatinina, troponina, TSH, gasometria; nível de digoxina se em uso.\n9. Chamar cardiologia para marca-passo transvenoso."
  },
  orientacoesRetorno: [
    "Não parar nem trocar remédios do coração por conta própria; levar a lista de remédios à consulta",
    "Voltar imediatamente se desmaio, tontura forte, falta de ar, dor no peito ou confusão",
    "Se usar remédio que baixa a frequência (ex.: metoprolol, atenolol, carvedilol, diltiazem, digoxina), seguir a dose ajustada no PS",
    "Consulta com cardiologista em até 2–4 semanas; trazer o ECG"
  ],
  tabelas: [
    {
      titulo: "Bloqueios atrioventriculares",
      colunas: ["Tipo", "ECG", "Risco / conduta"],
      linhas: [
        ["1º grau", "PR > 200 ms, todas as P conduzem", "Benigno; revisar drogas"],
        ["2º grau Mobitz I", "PR aumenta até P bloqueada", "Em geral nodal; tratar só se sintomático"],
        ["2º grau Mobitz II", "PR fixo + P bloqueada súbita", "Infranodal; monitor, marca-passo"],
        ["2:1", "Uma P conduz, outra não", "QRS largo sugere infranodal"],
        ["BAV avançado", "≥ 2 P consecutivas bloqueadas", "Alto risco; marca-passo"],
        ["3º grau (total)", "Dissociação AV, escape regular", "Marca-passo; atropina pouco eficaz se QRS largo"]
      ],
      nota: "Criança com bradicardia e má perfusão: ventilar e oxigenar primeiro; FC < 60 com má perfusão apesar de ventilação = iniciar RCP (PALS)."
    }
  ],
  fontes: [
    "AHA — Guidelines for CPR and Emergency Cardiovascular Care: Adult Advanced Life Support (2025); Adult bradycardia algorithm (2020)",
    "ACC/AHA/HRS — Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay (2018)",
    "ESC — Guidelines on cardiac pacing and cardiac resynchronization therapy (2021)",
    "SBC — Diretriz Brasileira de Dispositivos Cardíacos Eletrônicos Implantáveis (2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
