// Taquiarritmias com pulso (TSV, flutter, TV) — ACLS
registrarFicha({
  id: "taquicardias",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Taquicardias com pulso (TSV, flutter, TV)",
  resumo: "Taquicardia com FC em geral ≥ 150 bpm e pulso presente. Separar instável (cardioversão) de estável, QRS estreito de largo e regular de irregular. FA com alta resposta: ver ficha fibrilacao-atrial.",
  palavrasChave: "taquicardia taquiarritmia tsv tpsv reentrada nodal flutter atrial tv taquicardia ventricular qrs largo adenosina cardioversao sincronizada valsalva amiodarona verapamil metoprolol torsades magnesio wpw palpitacao acls",
  critico: {
    tempo: "Instável = cardioversão sincronizada",
    texto: "Hipotensão, choque, rebaixamento, dor isquêmica ou congestão atribuíveis à taquicardia: cardioversão elétrica sincronizada imediata, com sedação se possível. Sem pulso: protocolo de PCR."
  },
  alarmes: [
    "Instabilidade: hipotensão, sinais de choque, alteração aguda de consciência, dor torácica isquêmica, insuficiência cardíaca aguda",
    "QRS largo (≥ 120 ms): tratar como TV até prova em contrário",
    "TV polimórfica / torsades de pointes",
    "FA com QRS largo, irregular e muito rápido (pré-excitação/WPW): não usar adenosina, betabloqueador, verapamil, diltiazem, digoxina nem amiodarona",
    "Cardiopatia estrutural, IC, síncope ou história familiar de morte súbita"
  ],
  condutaInicial: [
    "Monitor, O₂ se SpO₂ < 90%, acesso venoso calibroso em veia antecubital, ECG de 12 derivações (antes e depois de reverter)",
    "Avaliar estabilidade. Instável → cardioversão sincronizada já (não atrasar por exames)",
    "Estável, QRS estreito e regular (TSV provável): manobra vagal modificada → adenosina 6 mg IV rápido → 12 mg",
    "Estável, QRS estreito irregular: FA, flutter com condução variável ou taquicardia atrial multifocal → controle de frequência (ver ficha fibrilacao-atrial)",
    "Estável, QRS largo regular monomórfico: amiodarona 150 mg IV em 10 min (adenosina só se regular e monomórfica, como diagnóstico); preparar cardioversão",
    "QRS largo polimórfico: com QT longo (torsades) → sulfato de magnésio; instável → desfibrilação (choque não sincronizado)",
    "Buscar e tratar causa: hipovolemia, febre, dor, hipóxia, hipercalemia/hipocalemia, hipomagnesemia, tireotoxicose, drogas (cocaína, simpaticomiméticos), isquemia"
  ],
  fataisExcluir: [
    "Taquicardia ventricular (QRS largo) tratada como TSV com aberrância",
    "FA pré-excitada (WPW) — risco de FV com bloqueadores do nó AV",
    "Taquicardia sinusal compensatória (sepse, hipovolemia, TEP, anemia): não cardioverter, tratar a causa",
    "SCA com arritmia",
    "Hipercalemia, intoxicação (tricíclicos, cocaína, digoxina)"
  ],
  proximaDecisao: "Revertida TSV → ECG em ritmo sinusal (pré-excitação?), observar e alta com encaminhamento à cardiologia/eletrofisiologia. TV revertida ou recorrente, cardiopatia estrutural ou flutter → internação/cardiologia. Flutter estável: tratar como FA (controle de frequência, anticoagulação pelo CHA₂DS₂-VA, cardioversão conforme tempo de início).",
  clinica: {
    anamnese: [
      "Início e término súbitos (reentrada) x gradual (sinusal, atrial)",
      "Episódios prévios, manobras que revertem, síncope",
      "Cardiopatia, IAM prévio, IC, Chagas (TV), marcapasso/CDI",
      "Medicações e drogas: digoxina, antiarrítmicos, QT longo (antieméticos, antipsicóticos, macrolídeos), cocaína, anfetaminas, cafeína, energéticos",
      "Sintomas de instabilidade: dor torácica, dispneia, pré-síncope"
    ],
    exameFisico: [
      "PA, perfusão, nível de consciência, congestão pulmonar",
      "Sinais de causa sistêmica: febre, desidratação, sangramento, bócio",
      "Ondas a em canhão no pulso jugular (dissociação AV → TV)"
    ],
    diferenciais: [
      { dx: "Taquicardia sinusal", pista: "Início gradual, P antes de cada QRS, FC raramente > 150 em adulto em repouso; há causa sistêmica" },
      { dx: "TSV por reentrada (nodal ou AV)", pista: "QRS estreito regular, FC 150–250, sem onda P visível ou P retrógrada; reverte com adenosina" },
      { dx: "Flutter atrial", pista: "Ondas F em dente de serra em DII, DIII, aVF; FC ventricular em torno de 150 (condução 2:1); adenosina só torna as ondas F visíveis" },
      { dx: "Taquicardia ventricular", pista: "QRS ≥ 120 ms, dissociação AV, batimentos de captura/fusão, concordância precordial, cardiopatia prévia" },
      { dx: "TSV com aberrância ou pré-excitação", pista: "Bloqueio de ramo prévio conhecido com mesma morfologia; na dúvida, tratar como TV" }
    ],
    gravidade: [
      "Instável: hipotensão, choque, alteração aguda de consciência, dor isquêmica, IC aguda",
      "FC < 150 bpm raramente causa instabilidade isolada: procure outra causa",
      "QRS largo + cardiopatia estrutural ou idade > 35 anos: TV é a hipótese mais provável"
    ]
  },
  exames: [
    {
      nome: "ECG de 12 derivações",
      pedido: "ECG de 12 derivações durante a taquicardia, tira de ritmo durante adenosina/manobra vagal e ECG após reversão.",
      porQue: "Define QRS estreito x largo, regular x irregular, ondas P/F; após reversão busca pré-excitação, QT longo, isquemia.",
      esperar: "TSV: QRS estreito regular. Flutter: ondas F. TV: QRS largo, dissociação AV.",
      interpretacao: "QRS ≥ 120 ms = largo. Intervalo PR curto com onda delta em ritmo sinusal = WPW.",
      limitacoes: "Aberrância e TV podem ser indistinguíveis; na dúvida, tratar como TV."
    },
    {
      nome: "Laboratório",
      pedido: "Potássio, magnésio, cálcio, sódio, creatinina, glicemia, hemograma, TSH; troponina se dor torácica ou suspeita de isquemia; nível de digoxina se em uso; toxicológico se suspeita.",
      porQue: "Corrigir distúrbios que precipitam ou perpetuam arritmias.",
      esperar: "Hipocalemia e hipomagnesemia são comuns.",
      interpretacao: "Troponina pode subir discretamente após taquicardia prolongada sem SCA; interpretar com a clínica.",
      limitacoes: "Não atrasar cardioversão no paciente instável."
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico.",
      porQue: "Cardiopatia estrutural muda risco e escolha do antiarrítmico.",
      esperar: "FE, hipertrofia, valvopatia, cicatriz.",
      interpretacao: "FE reduzida: evitar verapamil/diltiazem; preferir amiodarona.",
      limitacoes: "Pode ser feito após estabilização."
    }
  ],
  tratamento: [
    {
      droga: "Manobra vagal modificada (Valsalva modificada)",
      linha: "l1",
      dose: "Soprar uma seringa de 10 mL (tentar mover o êmbolo) por 15 s sentado a 45°, e logo deitar com pernas elevadas a 45° por 15 s",
      via: "—",
      intervalo: "Pode repetir",
      duracao: "—",
      monitorizacao: "Monitor e tira de ritmo",
      contraindicacoes: "Instabilidade. Massagem do seio carotídeo: evitar se sopro carotídeo, AVC/AIT prévio ou idoso",
      ajustes: "Mais eficaz que a Valsalva clássica (estudo REVERT)"
    },
    {
      droga: "Adenosina",
      linha: "l1",
      dose: "6 mg; se não reverter, 12 mg (pode repetir 12 mg uma vez)",
      via: "IV em bolus rápido, seguido de 20 mL de SF em flush, em acesso antecubital",
      intervalo: "1–2 min entre doses",
      duracao: "—",
      monitorizacao: "Registrar tira de ritmo; avisar o paciente sobre mal-estar, rubor e sensação de morte iminente (segundos)",
      contraindicacoes: "Asma grave/broncoespasmo ativo, BAV de 2º/3º grau, FA/flutter pré-excitados, QRS largo irregular ou polimórfico",
      ajustes: "Reduzir para 3 mg se acesso central, transplante cardíaco, uso de dipiridamol ou carbamazepina. Teofilina/cafeína reduzem o efeito. Seguro na gestação"
    },
    {
      droga: "Verapamil",
      linha: "alt",
      dose: "2,5–5 mg em 2 min; se necessário, 5–10 mg após 15–30 min (máximo 20 mg)",
      via: "IV lento",
      intervalo: "15–30 min",
      duracao: "—",
      monitorizacao: "PA (hipotensão), FC",
      contraindicacoes: "IC/FE reduzida, hipotensão, QRS largo (TV), WPW, uso de betabloqueador IV",
      ajustes: "TSV que não reverte com adenosina ou recorre. Diltiazem IV 0,25 mg/kg em 2 min é alternativa"
    },
    {
      droga: "Metoprolol",
      linha: "alt",
      dose: "5 mg em 2–5 min; repetir a cada 5 min até 15 mg",
      via: "IV",
      intervalo: "5 min",
      duracao: "—",
      monitorizacao: "PA, FC, broncoespasmo",
      contraindicacoes: "IC descompensada, hipotensão, asma grave, BAV, WPW com FA, intoxicação por cocaína",
      ajustes: "Útil em TSV recorrente e controle de frequência no flutter"
    },
    {
      droga: "Amiodarona",
      linha: "l1",
      dose: "150 mg em 10 min (repetir 150 mg se necessário); depois 1 mg/min por 6 h e 0,5 mg/min por 18 h",
      via: "IV",
      intervalo: "Ataque + manutenção",
      duracao: "24 h (máximo 2,2 g/24 h)",
      monitorizacao: "PA (hipotensão), FC, QT",
      contraindicacoes: "QT longo/torsades, BAV sem marca-passo",
      ajustes: "TV monomórfica estável e taquicardias com FE reduzida. Diluir em SG 5% (ampola 50 mg/mL, 3 mL = 150 mg). Concentração > 2 mg/mL: preferir acesso central"
    },
    {
      droga: "Lidocaína",
      linha: "alt",
      dose: "1–1,5 mg/kg; repetir 0,5–0,75 mg/kg (máximo 3 mg/kg); manutenção 1–4 mg/min",
      via: "IV",
      intervalo: "5–10 min",
      duracao: "—",
      monitorizacao: "Toxicidade neurológica (parestesias, convulsão)",
      contraindicacoes: "BAV avançado",
      ajustes: "TV monomórfica, sobretudo isquêmica. Reduzir dose em hepatopatia, IC, idoso"
    },
    {
      droga: "Sulfato de magnésio",
      linha: "l1",
      dose: "1–2 g em 15 min (em PCR/torsades sem pulso: em bolus)",
      via: "IV",
      intervalo: "Pode repetir",
      duracao: "—",
      monitorizacao: "Reflexos, PA, FR",
      contraindicacoes: "—",
      ajustes: "Torsades de pointes (TV polimórfica com QT longo). Suspender drogas que prolongam QT, corrigir K e Mg. MgSO₄ 10% = 1 g/10 mL; 50% = 5 g/10 mL"
    },
    {
      droga: "Cardioversão elétrica sincronizada",
      linha: "l1",
      dose: "QRS estreito regular (TSV) e flutter: 50–100 J · QRS largo regular (TV monomórfica): 100 J · FA: ver ficha fibrilacao-atrial (AHA 2025 sugere ≥ 200 J bifásico) · subir a energia se falhar",
      via: "Pás/eletrodos adesivos (anterolateral ou anteroposterior)",
      intervalo: "Escalonar energia",
      duracao: "—",
      monitorizacao: "Modo SINCRONIZADO ligado (reativar após cada choque), via aérea, SpO₂",
      contraindicacoes: "TV polimórfica/FV: não sincronizar — desfibrilar. Taquicardia sinusal",
      ajustes: "Sedação/analgesia se o paciente estiver consciente e houver tempo (ex.: midazolam 1–2 mg + fentanil 50 mcg IV, ou etomidato 0,15–0,3 mg/kg). Conferir energia recomendada pelo fabricante"
    },
    {
      droga: "Bloqueadores do nó AV na FA pré-excitada",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Adenosina, betabloqueador, verapamil, diltiazem, digoxina e amiodarona IV podem precipitar FV",
      ajustes: "FA pré-excitada estável: procainamida (pouco disponível) ou cardioversão sincronizada; instável: cardioversão"
    }
  ],
  destino: {
    agora: [
      "Instável: cardioversão sincronizada na sala de emergência",
      "Estável: manobra vagal, adenosina ou antiarrítmico conforme QRS e regularidade"
    ],
    reavaliar: [
      "ECG após reversão (pré-excitação, isquemia, QT)",
      "PA e ritmo por 1–2 h após adenosina/antiarrítmico"
    ],
    alta: [
      "TSV revertida, sem cardiopatia, sem pré-excitação, assintomático, eletrólitos normais",
      "Encaminhar à cardiologia/eletrofisiologia (ablação é curativa em muitos casos)"
    ],
    observacao: [
      "TSV revertida com sintomas residuais ou causa precipitante em correção"
    ],
    internacao: [
      "TV (mesmo revertida), TV recorrente, torsades, FA pré-excitada",
      "Cardiopatia estrutural, IC, síncope, SCA associada",
      "Arritmia refratária"
    ],
    transferencia: [
      "TV recorrente ou tempestade elétrica, necessidade de eletrofisiologia/marca-passo: regulação para centro com cardiologia/hemodinâmica"
    ]
  },
  prescricao: {
    hospitalar: "TAQUICARDIA COM PULSO — SALA DE EMERGÊNCIA (adulto)\n1. Monitor cardíaco, oximetria, PA não invasiva a cada 5 min; desfibrilador com eletrodos posicionados.\n2. Acesso venoso calibroso em veia antecubital; ECG de 12 derivações.\n3. TSV estável: manobra de Valsalva modificada; se falhar:\n   Adenosina 3 mg/mL — 6 mg (2 mL) IV em bolus rápido + SF 0,9% 20 mL em flush imediato com elevação do braço.\n   Sem reversão em 1–2 min: adenosina 12 mg (4 mL) IV em bolus + flush; pode repetir 12 mg uma vez.\n4. Se recorrência/sem resposta e FE preservada: verapamil 2,5 mg/mL — 5 mg (2 mL) IV em 2 min; ou metoprolol 1 mg/mL — 5 mg IV em 2–5 min, repetir a cada 5 min até 15 mg.\n5. TV monomórfica estável: amiodarona 50 mg/mL — 150 mg (3 mL) + SG 5% 100 mL IV em 10 min; repetir se necessário.\n   Manutenção: amiodarona 900 mg (18 mL) + SG 5% 500 mL (1,8 mg/mL): 33 mL/h (1 mg/min) por 6 h, depois 17 mL/h (0,5 mg/min) por 18 h.\n6. Torsades de pointes: sulfato de magnésio 50% — 2 g (4 mL) + SF 0,9% 100 mL IV em 15 min.\n7. Instável: sedação (midazolam 5 mg/mL — 1 a 2 mg IV + fentanil 50 mcg/mL — 50 mcg IV) e cardioversão SINCRONIZADA: TSV/flutter 50–100 J; TV monomórfica 100 J; aumentar se falhar.\n8. Corrigir K (alvo 4–5 mEq/L) e Mg (alvo ≥ 2 mg/dL).\n9. Controles: ECG após reversão; sinais vitais de 15/15 min por 1 h, depois 1/1 h."
  },
  orientacoesRetorno: [
    "Se o coração disparar de novo: sentar, soprar forte com a boca fechada por 15 segundos (como para encher uma seringa) e deitar com as pernas para cima",
    "Procurar o PS se a crise não passar em 15–20 minutos, ou vier com desmaio, dor no peito ou falta de ar",
    "Evitar excesso de café, energéticos, álcool e drogas estimulantes",
    "Levar o ECG da crise à consulta com o cardiologista; existe tratamento definitivo (ablação) para muitas dessas arritmias"
  ],
  tabelas: [
    {
      titulo: "Taquicardia com pulso — algoritmo rápido",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Instável (qualquer QRS, com pulso)", "Cardioversão sincronizada; se QRS largo polimórfico: desfibrilação"],
        ["QRS estreito, regular", "Vagal → adenosina 6 → 12 mg → verapamil/diltiazem ou betabloqueador"],
        ["QRS estreito, irregular", "FA/flutter/TAM: controle de FC (ficha fibrilacao-atrial)"],
        ["QRS largo, regular, monomórfico", "Amiodarona 150 mg; adenosina só como teste se monomórfica e regular; cardioversão se falhar"],
        ["QRS largo, irregular", "FA com aberrância ou pré-excitada (WPW) ou TV polimórfica: especialista; WPW sem bloqueador nodal"],
        ["Torsades (QT longo)", "Magnésio 1–2 g IV; corrigir K; suspender drogas que alargam QT"]
      ],
      nota: "Criança: adenosina 0,1 mg/kg (máx. 6 mg), depois 0,2 mg/kg (máx. 12 mg); cardioversão sincronizada 0,5–1 J/kg, depois 2 J/kg (PALS). Ver ficha pcr-pediatrica."
    }
  ],
  fontes: [
    "AHA — Guidelines for CPR and Emergency Cardiovascular Care: Adult Advanced Life Support (2025); Adult tachyarrhythmia with a pulse algorithm (2020)",
    "ESC — Guidelines for the management of patients with supraventricular tachycardia (2019)",
    "ESC — Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death (2022)",
    "SBC — II Diretrizes Brasileiras de Fibrilação Atrial (2016)",
    "Appelboam A et al. — REVERT trial, Lancet (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
