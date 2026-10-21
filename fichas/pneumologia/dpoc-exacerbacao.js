// Exacerbação da DPOC no PS
registrarFicha({
  id: "dpoc-exacerbacao",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Exacerbação da DPOC no PS",
  resumo: "Piora aguda da dispneia e/ou tosse e expectoração em menos de 14 dias, em paciente com DPOC, muitas vezes com taquipneia e taquicardia. Causa mais comum: infecção viral ou bacteriana. Manutenção e exacerbação leve na UBS: ver ficha dpoc.",
  palavrasChave: "dpoc exacerbacao exacerbada enfisema bronquite cronica descompensada vni bipap hipercapnia retentor oxigenio venturi salbutamol ipratropio prednisona antibiotico",
  critico: {
    tempo: "SpO₂ alvo 88–92% e gasometria",
    texto: "Oxigênio controlado (Venturi ou cateter de baixo fluxo) para SpO₂ 88–92%. Gasometria arterial: pH < 7,35 com PaCO₂ > 45 mmHg indica VNI sem atraso."
  },
  alarmes: [
    "pH < 7,35 com PaCO₂ > 45 mmHg (acidose respiratória)",
    "Sonolência, confusão ou rebaixamento (narcose por CO₂)",
    "Uso intenso de musculatura acessória, respiração paradoxal, FR > 30–35 irpm",
    "SpO₂ < 88% apesar de O₂, cianose central",
    "Instabilidade hemodinâmica, arritmia nova, edema periférico novo (cor pulmonale)",
    "Falha de resposta ao tratamento inicial no PS"
  ],
  condutaInicial: [
    "Monitor, oximetria contínua, acesso venoso; cabeceira elevada",
    "O₂ controlado: Venturi 24–28% ou cateter nasal 1–2 L/min, alvo SpO₂ 88–92%",
    "Broncodilatador de curta ação: salbutamol ± ipratrópio (spray com espaçador ou nebulização com ar comprimido)",
    "Prednisona 40 mg VO (ou metilprednisolona 40 mg IV se não deglute)",
    "Gasometria arterial, RX de tórax, ECG, hemograma, eletrólitos, função renal, PCR",
    "Antibiótico se escarro purulento ou necessidade de VNI/IOT",
    "Acidose respiratória (pH < 7,35 e PaCO₂ > 45): VNI (BiPAP) e reavaliar gasometria em 1 h"
  ],
  fataisExcluir: [
    "Pneumonia",
    "Tromboembolismo pulmonar",
    "Pneumotórax (bolhas de enfisema)",
    "Insuficiência cardíaca descompensada / síndrome coronariana aguda",
    "Arritmia (fibrilação atrial, taquicardia atrial multifocal)",
    "Derrame pleural volumoso"
  ],
  proximaDecisao: "Melhora em 2–4 h (fala frases, SpO₂ 88–92% com O₂ baixo, sem acidose) → alta com prednisona 5 dias ± antibiótico e otimização do inalatório. pH < 7,35 → VNI e internação. Falha da VNI (pH caindo, rebaixamento, instabilidade) → IOT e UTI.",
  clinica: {
    anamnese: [
      "Piora da dispneia, aumento do volume e da purulência do escarro, tempo de evolução",
      "Febre, sintomas gripais, contato com doentes, dor pleurítica, hemoptise",
      "Inalatórios em uso, técnica, adesão, O₂ domiciliar, exacerbações e internações no último ano, IOT prévia",
      "Tabagismo atual, comorbidades (IC, DAC, FA, diabetes), uso de sedativos",
      "Sintomas de TEP: dor torácica súbita, edema assimétrico de membro, imobilização",
      "Gasometria basal ou PaCO₂ conhecida (retentor crônico?)"
    ],
    exameFisico: [
      "FR, FC, PA, SpO₂, temperatura; capacidade de falar frases",
      "Musculatura acessória, respiração paradoxal, tiragem",
      "Ausculta: sibilos difusos, murmúrio reduzido; assimetria sugere pneumotórax, derrame ou consolidação",
      "Nível de consciência, flapping (hipercapnia)",
      "Edema de membros, turgência jugular (cor pulmonale ou IC)"
    ],
    diferenciais: [
      { dx: "Pneumonia", pista: "Febre, crepitação localizada, consolidação no RX" },
      { dx: "TEP", pista: "Sem sinais de infecção, dor pleurítica, hipoxemia desproporcional, TVP; até 1 em 6 exacerbações sem causa clara" },
      { dx: "IC descompensada", pista: "Ortopneia, B3, congestão no RX, BNP elevado" },
      { dx: "Pneumotórax", pista: "Dor súbita, murmúrio abolido unilateral" },
      { dx: "SCA / arritmia", pista: "Dor torácica, alteração de ECG, troponina" }
    ],
    gravidade: [
      "Leve (GOLD): tratada só com broncodilatador de curta ação",
      "Moderada: precisa de corticoide oral e/ou antibiótico",
      "Grave: precisa de internação ou PS; pode cursar com insuficiência respiratória",
      "Proposta de Roma (adotada pelo GOLD): moderada se ≥ 3 de: dispneia ≥ 5/10, FR ≥ 24, FC ≥ 95, SpO₂ < 92% (ou queda > 3% do basal), PCR ≥ 10 mg/L; grave se hipercapnia com acidose (pH < 7,35 e PaCO₂ > 45 mmHg)",
      "Indicações de internação: sintomas graves, insuficiência respiratória aguda, cianose ou edema novos, falha do tratamento inicial, comorbidade grave, falta de suporte em casa"
    ]
  },
  exames: [
    {
      nome: "Gasometria arterial",
      pedido: "Gasometria arterial (anotar FiO₂ / fluxo de O₂ no momento da coleta) com lactato.",
      porQue: "Define acidose respiratória e indicação de VNI.",
      esperar: "Hipoxemia; PaCO₂ pode estar elevada cronicamente (HCO₃ alto = compensação).",
      interpretacao: "pH < 7,35 com PaCO₂ > 45 mmHg = indicação de VNI. pH normal com HCO₃ alto = retentor crônico compensado.",
      limitacoes: "Repetir 30–60 min após iniciar O₂ ou VNI. Gasometria venosa serve para pH e tendência de PCO₂, não para oxigenação."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax PA e perfil (ou AP no leito). Indicação: exacerbação de DPOC — excluir pneumonia, pneumotórax, congestão.",
      porQue: "Muda conduta em parte relevante dos casos.",
      esperar: "Hiperinsuflação.",
      interpretacao: "Consolidação → tratar como pneumonia. Pneumotórax → drenagem conforme tamanho e clínica.",
      limitacoes: "Pneumotórax pequeno pode passar despercebido em enfisema bolhoso; TC se dúvida."
    },
    {
      nome: "ECG e troponina",
      pedido: "Eletrocardiograma de 12 derivações. Troponina se dor torácica ou suspeita de isquemia.",
      porQue: "Arritmias e isquemia são comuns e mimetizam ou desencadeiam a exacerbação.",
      esperar: "Taquicardia sinusal, sinais de sobrecarga direita.",
      interpretacao: "FA, flutter ou TAM → controle de frequência. Alteração isquêmica → protocolo de dor torácica.",
      limitacoes: "—"
    },
    {
      nome: "Laboratório geral",
      pedido: "Hemograma, PCR, ureia, creatinina, sódio, potássio, glicemia. BNP/NT-proBNP se suspeita de IC. D-dímero ou angio-TC se suspeita de TEP.",
      porQue: "Gravidade, infecção, distúrbios hidroeletrolíticos (hipocalemia com β2 e corticoide), hiperglicemia.",
      esperar: "Leucocitose e PCR elevadas sugerem infecção bacteriana.",
      interpretacao: "Eosinófilos ≥ 300 céls/µL indicam melhor resposta a corticoide. PCR ≥ 10 mg/L entra na classificação de Roma.",
      limitacoes: "D-dímero tem baixa especificidade em idosos internados."
    },
    {
      nome: "Escarro (Gram e cultura)",
      pedido: "Bacterioscopia (Gram) e cultura de escarro com antibiograma.",
      porQue: "Internados graves, exacerbação frequente, uso recente de antibiótico ou risco de Pseudomonas.",
      esperar: "H. influenzae, S. pneumoniae, M. catarrhalis; Pseudomonas na DPOC grave.",
      interpretacao: "Ajustar antibiótico se falha clínica.",
      limitacoes: "Não necessário em exacerbação leve ambulatorial. Considerar teste para influenza/COVID-19 na sazonalidade."
    }
  ],
  tratamento: [
    {
      droga: "Salbutamol (SABA)",
      linha: "l1",
      dose: "Spray 100 mcg: 4–8 jatos com espaçador. Nebulização: 2,5–5 mg (0,5–1 mL da solução 5 mg/mL) em 3 mL de SF 0,9%",
      via: "Inalatória",
      intervalo: "A cada 20 min na 1ª hora; depois a cada 1–4 h conforme resposta",
      duracao: "Até estabilizar; depois manter manutenção com longa ação",
      monitorizacao: "FC, tremor, potássio",
      contraindicacoes: "—",
      ajustes: "Nebulizar com ar comprimido, não com O₂ a alto fluxo, em retentor de CO₂ (manter O₂ por cateter durante a nebulização). Alternativa: fenoterol 2,5 mg (10 gotas da solução 5 mg/mL)"
    },
    {
      droga: "Brometo de ipratrópio (SAMA)",
      linha: "l1",
      dose: "Spray 20 mcg: 2–4 jatos. Nebulização: 0,5 mg (40 gotas = 2 mL da solução 0,25 mg/mL)",
      via: "Inalatória",
      intervalo: "Junto com o SABA a cada 20 min na 1ª hora; depois a cada 4–6 h",
      duracao: "Até estabilizar",
      monitorizacao: "Retenção urinária, glaucoma",
      contraindicacoes: "Glaucoma de ângulo fechado",
      ajustes: "Associar ao SABA na exacerbação"
    },
    {
      droga: "Prednisona",
      linha: "l1",
      dose: "40 mg",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "5 dias (sem desmame)",
      monitorizacao: "Glicemia (diabéticos), PA",
      contraindicacoes: "—",
      ajustes: "Se não deglute: metilprednisolona 40 mg IV 1 vez ao dia. Via oral é tão eficaz quanto IV. Cursos mais longos aumentam pneumonia e mortalidade"
    },
    {
      droga: "Amoxicilina + clavulanato",
      linha: "l1",
      dose: "875/125 mg",
      via: "Oral",
      intervalo: "12/12 h",
      duracao: "5 dias (até 7)",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Indicação de antibiótico: aumento da purulência do escarro + aumento do volume ou dispneia, ou necessidade de VNI/IOT. Alternativas ambulatoriais: azitromicina 500 mg 1×/dia por 3 dias ou doxiciclina 100 mg 12/12 h por 5 dias. ClCr < 30: 500/125 mg de 12/12 h"
    },
    {
      droga: "Ceftriaxona (internado)",
      linha: "l1",
      dose: "1 g",
      via: "IV, diluída em 100 mL de SF 0,9%, em 30 min",
      intervalo: "1 vez ao dia",
      duracao: "5–7 dias (trocar para VO quando estável)",
      monitorizacao: "Resposta clínica em 48–72 h",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Pode associar azitromicina 500 mg VO/IV 1×/dia se suspeita de pneumonia atípica. Alternativa: levofloxacino 750 mg 1×/dia. Risco de Pseudomonas (VEF1 muito baixo, bronquiectasia, internação ou antibiótico recentes, colonização prévia): cefepima 2 g IV 8/8 h ou piperacilina-tazobactam 4,5 g IV 6/6 h, com cultura"
    },
    {
      droga: "Ventilação não invasiva (BiPAP)",
      linha: "l1",
      dose: "Iniciar IPAP 10–12 cmH₂O e EPAP 4–5 cmH₂O; subir IPAP 2 cmH₂O a cada 5–10 min conforme conforto, FR e volume corrente (até cerca de 20 cmH₂O)",
      via: "Máscara oronasal",
      intervalo: "Contínua nas primeiras horas, depois intermitente",
      duracao: "Até resolver a acidose",
      monitorizacao: "Gasometria em 1–2 h; FR, consciência, sincronia, vazamento",
      contraindicacoes: "Parada respiratória, instabilidade hemodinâmica grave, rebaixamento sem proteção de via aérea, vômitos, trauma de face, secreção abundante sem tosse eficaz",
      ajustes: "Indicação: pH < 7,35 e PaCO₂ > 45 mmHg, ou dispneia grave com fadiga muscular. O₂ na VNI para SpO₂ 88–92%. Sem melhora em 1–2 h ou piora → IOT"
    },
    {
      droga: "Aminofilina / teofilina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não recomendada na exacerbação (efeitos adversos sem benefício)",
      ajustes: "GOLD não recomenda metilxantinas na exacerbação"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência com monitor; O₂ controlado; broncodilatador + corticoide",
      "VNI se acidose respiratória"
    ],
    reavaliar: [
      "Após 1 h de broncodilatador e a cada 2–4 h",
      "Gasometria 30–60 min após O₂ ou 1–2 h após VNI",
      "Potássio e glicemia (β2 + corticoide)"
    ],
    alta: [
      "Estável há 12–24 h, broncodilatador no máximo a cada 4 h, deambulando, SpO₂ adequada (ou O₂ domiciliar já em uso)",
      "Prednisona até completar 5 dias ± antibiótico; LABA + LAMA iniciado ou otimizado; técnica conferida",
      "Consulta na UBS em até 1–4 semanas; encaminhar à reabilitação pulmonar logo após a alta; cessação do tabagismo"
    ],
    observacao: [
      "Exacerbação moderada com boa resposta parcial: observação de 6–12 h com reavaliação"
    ],
    internacao: [
      "Falha do tratamento inicial, hipoxemia nova, hipercapnia, comorbidade descompensada, idoso frágil sem suporte",
      "UTI: falha da VNI, rebaixamento, instabilidade hemodinâmica, necessidade de IOT"
    ],
    transferencia: [
      "Sem VNI, gasometria ou leito de observação → regulação para hospital após O₂, broncodilatador e corticoide"
    ]
  },
  prescricao: {
    hospitalar: "EXACERBAÇÃO DE DPOC — SALA DE EMERGÊNCIA / INTERNAÇÃO (peso: ___ kg)\n1. Dieta branda conforme aceitação (zero se em VNI contínua ou rebaixado). Cabeceira 30–45°.\n2. O₂ por cateter nasal 1–2 L/min ou máscara de Venturi 24–28%, para SpO₂ 88–92%.\n3. Salbutamol spray 100 mcg: 4 jatos com espaçador + brometo de ipratrópio spray 20 mcg: 4 jatos, a cada 20 minutos por 3 vezes; depois de 4/4 h.\n   OU nebulização com AR COMPRIMIDO (6–8 L/min): salbutamol solução 5 mg/mL 0,5–1 mL (2,5–5 mg) + brometo de ipratrópio 0,25 mg/mL 40 gotas (0,5 mg) + SF 0,9% 3 mL, a cada 20 minutos por 3 vezes; depois de 4/4 h. Manter O₂ por cateter durante a nebulização.\n4. Prednisona 40 mg VO 1 vez ao dia por 5 dias (se não deglute: metilprednisolona 40 mg IV 1 vez ao dia).\n5. Antibiótico (se escarro purulento ou VNI/IOT):\n   Enfermaria: ceftriaxona 1 g + SF 0,9% 100 mL IV em 30 min 1 vez ao dia por 5–7 dias, ± azitromicina 500 mg VO 1 vez ao dia por 3–5 dias.\n   Risco de Pseudomonas: cefepima 2 g + SF 0,9% 100 mL IV em 30 min de 8/8 h (ajuste renal).\n6. VNI (se pH < 7,35 e PaCO₂ > 45 mmHg): BiPAP IPAP 10–12 / EPAP 4–5 cmH₂O, titular IPAP até conforto e queda da FR; O₂ para SpO₂ 88–92%.\n7. Enoxaparina 40 mg SC 1 vez ao dia (ClCr < 30: 30 mg).\n8. Dipirona 1 g IV de 6/6 h se dor ou febre.\n9. Omeprazol 40 mg IV/VO 1 vez ao dia só se indicação (sangramento prévio, uso de AINE/anticoagulante).\n10. Controles: SpO₂ contínua, sinais vitais de 2/2 h, glicemia capilar 6/6 h (diabético ou hiperglicemia), gasometria arterial 1–2 h após O₂/VNI e conforme evolução, potássio diário, nível de consciência.\n11. Não usar sedativos/benzodiazepínicos sem via aérea assegurada.",
    ambulatorial: "ALTA APÓS EXACERBAÇÃO\nUSO ORAL\n1. Prednisona 20 mg ------------------------------------------ 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias (contar a dose já tomada no hospital).\n2. Amoxicilina + clavulanato 875/125 mg -------------------- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 5 dias (se indicado antibiótico).\n   (Alérgico a penicilina: azitromicina 500 mg 1 comprimido 1 vez ao dia por 3 dias, ou doxiciclina 100 mg de 12 em 12 horas por 5 dias.)\n\nUSO INALATÓRIO\n3. Salbutamol 100 mcg aerossol -------------------------------- 1 frasco\n   Inalar 2 a 4 jatos com espaçador de 4 em 4 horas se falta de ar.\n4. Manutenção (iniciar ou manter): broncodilatador de longa ação LABA + LAMA (ex.: umeclidínio/vilanterol 62,5/25 mcg 1 inalação 1 vez ao dia, ou tiotrópio + olodaterol 2,5/2,5 mcg 2 jatos 1 vez ao dia), conforme disponibilidade no SUS e ficha dpoc."
  },
  orientacoesRetorno: [
    "Tome a prednisona por 5 dias, pela manhã; não precisa de desmame",
    "Use o inalador de manutenção todos os dias e confira a técnica com a equipe",
    "Pare de fumar: a UBS oferece tratamento gratuito do tabagismo",
    "Mantenha vacinas de gripe, COVID-19, pneumococo e dTpa em dia",
    "Volte imediatamente se: falta de ar que não melhora com o resgate, lábios roxos, sonolência ou confusão, febre alta, dor no peito, inchaço nas pernas",
    "Consulta na UBS em até 1–4 semanas para rever o tratamento de manutenção e encaminhar à reabilitação pulmonar"
  ],
  tabelas: [
    {
      titulo: "Classificação de gravidade da exacerbação — proposta de Roma (GOLD)",
      colunas: ["Gravidade", "Critérios"],
      linhas: [
        ["Leve", "Não preenche os critérios de moderada (referência: dispneia < 5/10, FR < 24, FC < 95, SpO₂ ≥ 92% e queda ≤ 3% do basal, PCR < 10 mg/L)"],
        ["Moderada", "≥ 3 de: dispneia ≥ 5/10, FR ≥ 24, FC ≥ 95, SpO₂ < 92% ou queda > 3% do basal, PCR ≥ 10 mg/L"],
        ["Grave", "Critérios clínicos de moderada + gasometria com hipercapnia nova ou piorada e acidose: PaCO₂ > 45 mmHg e pH < 7,35"]
      ],
      nota: "Escala de dispneia visual analógica de 0 a 10. Se gasometria indisponível, tratar como moderada quem preencher os critérios clínicos."
    }
  ],
  fontes: [
    "GOLD — Global Strategy for the Diagnosis, Management and Prevention of COPD (2026)",
    "Ministério da Saúde — PCDT Doença Pulmonar Obstrutiva Crônica (Portaria Conjunta nº 19/2021) e Portaria SECTICS/MS nº 46/2024",
    "Celli BR, Fabbri LM et al. — An Updated Definition and Severity Classification of COPD Exacerbations: The Rome Proposal (Am J Respir Crit Care Med, 2021)",
    "ERS/ATS — Noninvasive mechanical ventilation for acute respiratory failure (2017)",
    "SBPT — Recomendações para o tratamento farmacológico da DPOC (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
