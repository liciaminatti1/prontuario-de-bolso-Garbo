// Dispneia aguda no PS
registrarFicha({
  id: "dispneia-aguda",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Dispneia aguda: abordagem no PS",
  resumo: "Falta de ar de início recente (horas a dias). Estabilizar, reconhecer causas fatais e chegar ao diagnóstico com história, exame, ECG, gasometria, RX e ultrassom à beira-leito (POCUS).",
  palavrasChave: "dispneia aguda falta de ar desconforto respiratorio pocus protocolo blue linhas b edema agudo de pulmao tep pneumotorax asma dpoc pneumonia anafilaxia tamponamento",
  critico: {
    tempo: "ABC e SpO₂ alvo em minutos",
    texto: "Posicionar sentado, O₂ para SpO₂ 94–98% (88–92% se risco de hipercapnia), monitor e acesso. Sinais de fadiga, rebaixamento ou SpO₂ < 90% apesar de O₂: escalonar suporte (VNI ou intubação) sem esperar exames."
  },
  alarmes: [
    "FR > 30 ou < 8, uso de musculatura acessória, respiração paradoxal, fala entrecortada",
    "SpO₂ < 90% apesar de O₂, cianose",
    "Rebaixamento de consciência, agitação, sonolência (hipercapnia)",
    "Hipotensão, choque, turgência jugular",
    "Estridor, edema de face/língua (via aérea superior / anafilaxia)",
    "Murmúrio abolido unilateral com hipotensão (pneumotórax hipertensivo)",
    "Tórax silencioso no asmático"
  ],
  condutaInicial: [
    "Monitor, SpO₂, FR, PA, FC, glicemia capilar; acesso venoso",
    "O₂ titulado (ficha oxigenoterapia); paciente sentado",
    "Tratamento imediato de causas evidentes: pneumotórax hipertensivo (descompressão), anafilaxia (adrenalina IM), broncoespasmo (salbutamol), edema agudo de pulmão (nitrato + VNI)",
    "ECG, gasometria arterial (ou venosa + SpO₂), RX de tórax no leito",
    "POCUS pulmonar, cardíaco e de veias de MMII (protocolo BLUE + eco focado)",
    "Laboratório dirigido: hemograma, eletrólitos, creatinina, troponina, BNP/NT-proBNP, D-dímero (se probabilidade de TEP não alta), lactato, PCR",
    "Definir o tipo de insuficiência respiratória e o suporte necessário (fichas insuficiencia-respiratoria-aguda e vni)"
  ],
  fataisExcluir: [
    "Obstrução de via aérea superior / anafilaxia",
    "Pneumotórax hipertensivo",
    "Tamponamento cardíaco",
    "TEP de alto risco",
    "Edema agudo de pulmão / SCA",
    "Asma grave/quase fatal, DPOC com acidose",
    "Sepse com pneumonia grave, acidose metabólica grave (CAD, intoxicação)"
  ],
  proximaDecisao: "Com a causa definida, seguir a ficha específica (ic-descompensada, asma-ps, dpoc-exacerbacao, pneumonia, tep, pneumotorax, derrame-pleural, anafilaxia). Sem causa clara e estável: observação com reavaliação, angio-TC conforme probabilidade de TEP e ecocardiograma.",
  clinica: {
    anamnese: [
      "Início: súbito (TEP, pneumotórax, EAP, anafilaxia, aspiração de corpo estranho) x progressivo (pneumonia, IC, derrame)",
      "Dor torácica (pleurítica x opressiva), febre, tosse, expectoração, hemoptise, sibilância",
      "Ortopneia, DPN, edema, ganho de peso (IC)",
      "Asma, DPOC, IC, DRC, câncer, imobilização, cirurgia recente",
      "Exposição a alérgeno, medicação nova, tóxicos, ansiedade (diagnóstico de exclusão)"
    ],
    exameFisico: [
      "Sinais de esforço, FR, capacidade de falar, consciência",
      "Ausculta: sibilos, estertores, murmúrio abolido, atrito",
      "Turgência jugular, edema, B3, sopros",
      "Assimetria de membros inferiores (TVP), estridor, urticária"
    ],
    diferenciais: [
      { dx: "IC/edema agudo de pulmão", pista: "Ortopneia, estertores, B3, linhas B difusas bilaterais, BNP alto" },
      { dx: "Exacerbação de asma/DPOC", pista: "Sibilância, perfil A no POCUS, história" },
      { dx: "Pneumonia", pista: "Febre, consolidação focal, linhas B focais" },
      { dx: "TEP", pista: "Início súbito, perfil A + TVP, VD dilatado, taquicardia, hipoxemia com pulmão limpo" },
      { dx: "Pneumotórax", pista: "Deslizamento pleural ausente + ponto pulmonar" },
      { dx: "Derrame pleural / tamponamento", pista: "Imagem anecoica pleural ou pericárdica" },
      { dx: "Acidose metabólica (Kussmaul)", pista: "Respiração profunda, pulmão normal; gasometria com HCO₃ baixo" },
      { dx: "Anemia grave, ansiedade", pista: "Hemoglobina; ansiedade só após excluir causas orgânicas" }
    ],
    gravidade: [
      "Sinais de falência iminente: exaustão, respiração paradoxal, rebaixamento, bradipneia, bradicardia",
      "Gasometria: pH < 7,35 com PaCO₂ alta (tipo II) ou PaO₂ < 60 mmHg / SpO₂ < 90% (tipo I)",
      "Lactato > 2 mmol/L: hipoperfusão"
    ]
  },
  exames: [
    {
      nome: "POCUS (protocolo BLUE + cardíaco + veias)",
      pedido: "Ultrassom à beira-leito: pulmões (anterior, lateral e posterolateral bilateral), coração (subxifoide/paraesternal/apical), VCI e compressão venosa femoral e poplítea.",
      porQue: "Alta acurácia em minutos; guia tratamento antes do RX.",
      esperar: "Perfil A, B, C, deslizamento, derrames, função de VE e VD.",
      interpretacao: "Perfil B bilateral = edema intersticial (EAP). Perfil A + TVP = TEP. Perfil A sem TVP = asma/DPOC (ou TEP sem TVP). Ausência de deslizamento + ponto pulmonar = pneumotórax. Consolidação/perfil A/B assimétrico = pneumonia.",
      limitacoes: "Operador-dependente; enfisema subcutâneo e obesidade dificultam."
    },
    {
      nome: "Gasometria",
      pedido: "Gasometria arterial com lactato (venosa aceitável para pH/PaCO₂ de triagem).",
      porQue: "Tipo e gravidade da insuficiência respiratória; distúrbios ácido-base.",
      esperar: "Hipoxemia, hipercapnia ou acidose metabólica.",
      interpretacao: "Ver ficha gasometria-acido-base.",
      limitacoes: "PO₂ venosa não substitui a arterial."
    },
    {
      nome: "RX de tórax",
      pedido: "RX de tórax PA e perfil (ou AP no leito).",
      porQue: "Consolidação, congestão, derrame, pneumotórax.",
      esperar: "—",
      interpretacao: "RX normal com hipoxemia: pensar TEP, asma, shunt.",
      limitacoes: "Sensibilidade menor que o POCUS para pneumotórax pequeno e congestão inicial."
    },
    {
      nome: "ECG e laboratório",
      pedido: "ECG de 12 derivações; hemograma, Na, K, ureia, creatinina, glicemia, troponina, BNP ou NT-proBNP, PCR, D-dímero (se indicado pelo escore de TEP), lactato.",
      porQue: "SCA, arritmia, IC, TEP, sepse, anemia.",
      esperar: "—",
      interpretacao: "BNP < 100 pg/mL ou NT-proBNP < 300 pg/mL tornam IC aguda improvável.",
      limitacoes: "BNP sobe em DRC, idade, TEP, sepse; baixo na obesidade."
    }
  ],
  tratamento: [
    {
      droga: "Oxigênio titulado",
      linha: "l1",
      dose: "Alvo SpO₂ 94–98% (88–92% se DPOC ou risco de hipercapnia)",
      via: "Cateter nasal, máscara Venturi ou com reservatório",
      intervalo: "Contínuo",
      duracao: "Até estabilidade",
      monitorizacao: "SpO₂, FR, gasometria se risco de hipercapnia",
      contraindicacoes: "—",
      ajustes: "Ver ficha oxigenoterapia"
    },
    {
      droga: "Salbutamol (broncoespasmo)",
      linha: "l1",
      dose: "Spray 100 mcg: 4–10 jatos com espaçador a cada 20 min na 1ª hora (ou nebulização 2,5–5 mg)",
      via: "Inalatória",
      intervalo: "20/20 min na 1ª hora",
      duracao: "Conforme resposta",
      monitorizacao: "FR, sibilância, FC, K",
      contraindicacoes: "—",
      ajustes: "Ver fichas asma-ps e dpoc-exacerbacao"
    },
    {
      droga: "Nitroglicerina / dinitrato (EAP hipertensivo)",
      linha: "l1",
      dose: "Dinitrato de isossorbida 5 mg SL (repetir a cada 5–10 min) ou nitroglicerina IV 10–20 mcg/min, aumentando",
      via: "SL / IV",
      intervalo: "Titular",
      duracao: "—",
      monitorizacao: "PA",
      contraindicacoes: "PAS < 90–100, uso de inibidor de PDE-5, estenose aórtica grave, IAM de VD",
      ajustes: "Associar VNI (CPAP/BiPAP) e furosemida se congestão. Ver ficha ic-descompensada"
    },
    {
      droga: "Adrenalina IM (anafilaxia)",
      linha: "l1",
      dose: "0,01 mg/kg (máx. 0,5 mg) — adulto 0,5 mg (0,5 mL de 1 mg/mL)",
      via: "IM, face anterolateral da coxa",
      intervalo: "Repetir a cada 5 min se necessário",
      duracao: "—",
      monitorizacao: "PA, FC, via aérea",
      contraindicacoes: "Nenhuma absoluta na anafilaxia",
      ajustes: "Ver ficha anafilaxia"
    }
  ],
  destino: {
    agora: [
      "Estabilizar, O₂, tratar causa evidente, POCUS + ECG + gasometria + RX"
    ],
    reavaliar: [
      "Resposta clínica a cada 15–30 min; gasometria 1–2 h após iniciar VNI"
    ],
    alta: [
      "Causa identificada e tratada, sem hipoxemia (SpO₂ ≥ 92–94% em ar ambiente ou basal), deambulando sem dispneia importante",
      "Seguimento na UBS em 48–72 h"
    ],
    observacao: [
      "Melhora parcial, causa provável definida, em reavaliação seriada"
    ],
    internacao: [
      "Hipoxemia persistente, necessidade de VNI/alto fluxo, causa grave (TEP, pneumonia grave, IC)",
      "UTI: falência respiratória, choque, necessidade de intubação"
    ],
    transferencia: [
      "Sem UTI, VNI ou tomografia: regulação após estabilização (via aérea garantida se necessário)"
    ]
  },
  prescricao: {
    hospitalar: "DISPNEIA AGUDA — SALA DE EMERGÊNCIA (inicial, adulto)\n1. Dieta zero até definição.\n2. Cabeceira elevada 45–90°. Monitor, oximetria contínua, PA de 15/15 min.\n3. O₂ por cateter nasal 2–5 L/min (ou máscara com reservatório 10–15 L/min se SpO₂ < 90%) — alvo SpO₂ 94–98% (88–92% se DPOC/hipercapnia).\n4. Acesso venoso; glicemia capilar.\n5. Exames: gasometria arterial com lactato; hemograma, Na, K, ureia, creatinina, troponina, BNP/NT-proBNP, PCR, D-dímero (se indicado); ECG; RX de tórax no leito; POCUS.\n6. Conforme causa: salbutamol 100 mcg/jato 4–8 jatos com espaçador 20/20 min (broncoespasmo); dinitrato de isossorbida 5 mg SL + VNI (EAP); adrenalina 1 mg/mL 0,5 mg IM (anafilaxia).\n7. Reavaliar em 15–30 min; se FR > 30, SpO₂ < 90% ou pH < 7,35 com hipercapnia: VNI ou intubação."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se a falta de ar piorar, aparecer dor no peito, lábios roxos, confusão ou sonolência",
    "Tomar as medicações prescritas e trazer a lista de remédios na consulta",
    "Consulta na UBS em 2–3 dias para reavaliar"
  ],
  fontes: [
    "Lichtenstein DA, Mezière GA — Relevance of lung ultrasound in the diagnosis of acute respiratory failure: the BLUE protocol, Chest (2008)",
    "International evidence-based recommendations for point-of-care lung ultrasound, Intensive Care Med (2012)",
    "BTS — Guideline for oxygen use in healthcare and emergency settings (2017)",
    "ESC — Guidelines for the diagnosis and treatment of acute and chronic heart failure (2021, atualização 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
