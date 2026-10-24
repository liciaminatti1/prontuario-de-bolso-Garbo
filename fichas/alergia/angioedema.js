// Angioedema: histaminérgico x bradicinérgico
registrarFicha({
  id: "angioedema",
  especialidade: "alergia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Angioedema (histaminérgico e bradicinérgico)",
  resumo: "Edema súbito, assimétrico e não depressível de derme profunda e submucosa (lábios, língua, face, laringe, alças intestinais). Separar o histaminérgico (com urticas/prurido, responde a adrenalina e anti-histamínico) do bradicinérgico (IECA, angioedema hereditário: sem urticas, não responde).",
  palavrasChave: "angioedema edema de quincke edema de glote edema de labio edema de lingua ieca enalapril captopril bradicinina angioedema hereditario c1 inibidor c1-inh icatibanto berinert c4 via aerea laringe gliptina sacubitril",
  critico: {
    tempo: "Via aérea antes de tudo",
    texto: "Rouquidão, estridor, sialorreia, disfagia ou edema de língua/assoalho da boca: chamar o mais experiente em via aérea, preparar intubação acordado (fibroscopia) e cricotireoidostomia. Bradicinérgico não melhora com adrenalina, anti-histamínico ou corticoide."
  },
  alarmes: [
    "Voz abafada ou rouca, estridor, dispneia, sialorreia, incapacidade de engolir saliva",
    "Edema de língua, assoalho da boca ou palato mole (estágios III–IV de Ishoo)",
    "Progressão rápida em minutos a poucas horas",
    "Hipotensão, broncoespasmo ou vômitos associados (anafilaxia)",
    "Dor abdominal intensa recorrente com vômitos (crise abdominal de angioedema hereditário)"
  ],
  condutaInicial: [
    "Avaliar via aérea já na chegada: voz, estridor, saliva, língua, SpO₂; cabeceira elevada; não deitar o paciente à força",
    "Se urticas, prurido, hipotensão, broncoespasmo ou exposição a alérgeno: tratar como anafilaxia (adrenalina IM 0,01 mg/kg, máx. 0,5 mg) — ver ficha Anafilaxia",
    "Sem urticas e sem prurido, em uso de IECA (ou sacubitril/valsartana, gliptina) ou com história familiar: pensar bradicinérgico; suspender IECA definitivamente",
    "Angioedema hereditário conhecido em crise de face/laringe: concentrado de C1-inibidor IV ou icatibanto SC o quanto antes; na falta, plasma fresco congelado",
    "Comprometimento de via aérea: intubação acordado por fibroscopia (preferência) com material de via aérea difícil e cricotireoidostomia preparados; evitar laringoscopia direta às cegas",
    "Mesmo que a dúvida persista, uma dose de adrenalina IM não deve ser negada se houver risco de via aérea"
  ],
  fataisExcluir: [
    "Obstrução de via aérea alta (edema de laringe)",
    "Anafilaxia",
    "Crise de angioedema hereditário com abdome agudo simulado (laparotomia desnecessária)",
    "Abscesso cervical profundo, angina de Ludwig, celulite facial (febre, dor, trismo)"
  ],
  proximaDecisao: "Respondeu a adrenalina/anti-histamínico → histaminérgico: observar 4–6 h e seguir ficha Urticária/Anafilaxia. Sem resposta, sem urticas → bradicinérgico: observar até regressão clara (pode durar 24–72 h), internar se língua, palato ou laringe; encaminhar à imunologia com dosagem de C4 e C1-inibidor.",
  clinica: {
    anamnese: [
      "Tempo de instalação, progressão, episódios anteriores",
      "Urticas e prurido? (presentes = histaminérgico; ausentes = pensar bradicinérgico)",
      "Medicamentos: IECA (enalapril, captopril — pode surgir anos após o início), sacubitril/valsartana, gliptinas, alteplase, estrogênio, AINE",
      "Exposição a alimento, picada, látex, medicamento novo (alérgico)",
      "História familiar de inchaços e dores abdominais recorrentes (angioedema hereditário)",
      "Gatilhos de AEH: trauma, procedimento dentário, infecção, estresse, menstruação, anticoncepcional com estrogênio"
    ],
    exameFisico: [
      "Voz, estridor, sialorreia, posição de tripé, SpO₂, FR",
      "Localização: lábios, pálpebras, língua, assoalho da boca, úvula, palato",
      "Pele: urticas, prurido, eritema",
      "PA, ausculta (sibilos), abdome (dor, distensão, ascite em crise abdominal)"
    ],
    diferenciais: [
      { dx: "Angioedema histaminérgico / anafilaxia", pista: "Urticas, prurido, início em minutos após exposição, broncoespasmo, hipotensão" },
      { dx: "Angioedema por IECA", pista: "Sem urticas, lábio/língua, uso de IECA (qualquer tempo de uso); mais comum em negros" },
      { dx: "Angioedema hereditário", pista: "Início na infância/adolescência, história familiar, crises abdominais, C4 baixo" },
      { dx: "Angioedema adquirido por deficiência de C1-INH", pista: "> 40 anos, sem história familiar, linfoproliferativo; C1q baixo" },
      { dx: "Celulite, abscesso dentário, angina de Ludwig", pista: "Febre, dor, calor, trismo, evolução em dias" },
      { dx: "Síndrome da veia cava superior, hipotireoidismo, dermatite de contato", pista: "Edema persistente, sem padrão súbito" }
    ],
    gravidade: [
      "Estadiamento de Ishoo (angioedema por IECA): I face e lábio · II palato mole · III língua · IV laringe",
      "Estágios I–II: em geral observação em sala de emergência",
      "Estágios III–IV: alto risco de intubação, internação em UTI"
    ]
  },
  exames: [
    {
      nome: "Avaliação de via aérea",
      pedido: "Nasofibrolaringoscopia (otorrinolaringologia ou anestesia), se disponível, em paciente estável.",
      porQue: "Ver edema de supraglote e laringe e planejar intubação.",
      esperar: "Edema de epiglote, aritenoides ou pregas vocais.",
      interpretacao: "Edema laríngeo = intubação precoce em ambiente controlado.",
      limitacoes: "Não atrasar a via aérea definitiva em paciente instável."
    },
    {
      nome: "Complemento (suspeita de AEH)",
      pedido: "C4 sérico, C1-inibidor quantitativo e funcional; C1q se início após 40 anos.",
      porQue: "Rastrear angioedema hereditário ou adquirido.",
      esperar: "AEH tipo I: C4 e C1-INH baixos. Tipo II: C4 baixo, C1-INH normal com função baixa. AEH com C1-INH normal: exames normais.",
      interpretacao: "C4 baixo durante a crise sugere fortemente deficiência de C1-INH; repetir fora da crise.",
      limitacoes: "Não muda a conduta na emergência; colher antes de transfundir plasma."
    },
    {
      nome: "Triptase sérica",
      pedido: "Triptase sérica entre 1 e 2 h do início (e basal após 24 h), se suspeita de anafilaxia.",
      porQue: "Apoiar o diagnóstico de reação mediada por mastócitos.",
      esperar: "Elevada na anafilaxia.",
      interpretacao: "Normal não exclui anafilaxia (principalmente alimentar).",
      limitacoes: "Normal no angioedema bradicinérgico."
    }
  ],
  tratamento: [
    {
      droga: "Adrenalina 1 mg/mL (histaminérgico / anafilaxia)",
      linha: "l1",
      dose: "0,01 mg/kg (adulto 0,5 mg; criança máx. 0,3 mg pré-púbere)",
      via: "IM, face anterolateral da coxa",
      intervalo: "Repetir a cada 5–15 min se necessário",
      duracao: "Conforme resposta",
      monitorizacao: "PA, FC, ECG, via aérea",
      contraindicacoes: "Nenhuma absoluta em anafilaxia",
      ajustes: "Adrenalina nebulizada (3–5 mL de 1 mg/mL) pode reduzir edema de via aérea alta enquanto se prepara a intubação; efeito limitado no bradicinérgico"
    },
    {
      droga: "Concentrado de C1-inibidor derivado de plasma (Berinert)",
      linha: "l1",
      dose: "20 UI/kg (adulto e criança)",
      via: "IV lenta",
      intervalo: "Dose única; repetir conforme bula/especialista se resposta insuficiente",
      duracao: "Crise",
      monitorizacao: "Via aérea, sinais vitais; melhora em 30–60 min",
      contraindicacoes: "Hipersensibilidade ao produto",
      ajustes: "Crise de AEH em face, laringe ou abdome grave. Disponibilidade: hospitais de referência / paciente pode trazer o próprio. Seguro na gestação"
    },
    {
      droga: "Icatibanto 30 mg/3 mL (antagonista do receptor B2 da bradicinina)",
      linha: "l1",
      dose: "Adulto: 30 mg. Criança (≥ 2 anos, por peso): 12–25 kg 10 mg; 26–40 kg 15 mg; 41–50 kg 20 mg; 51–65 kg 25 mg; > 65 kg 30 mg",
      via: "SC no abdome",
      intervalo: "Adulto: repetir a cada 6 h se necessário (máx. 3 doses em 24 h). Criança: dose única por crise na bula",
      duracao: "Crise",
      monitorizacao: "Reação local é esperada",
      contraindicacoes: "Cautela em cardiopatia isquêmica aguda",
      ajustes: "Aprovado para AEH. No angioedema por IECA o uso é off-label e os ensaios clínicos não mostraram benefício consistente; decisão individual. Conferir faixa etária aprovada na bula"
    },
    {
      droga: "Plasma fresco congelado",
      linha: "alt",
      dose: "Adulto: 2 unidades (cerca de 10 mL/kg). Criança: 10 mL/kg",
      via: "IV",
      intervalo: "Dose única; reavaliar",
      duracao: "—",
      monitorizacao: "Sobrecarga de volume, reação transfusional",
      contraindicacoes: "—",
      ajustes: "Quando não houver C1-INH nem icatibanto. Contém C1-INH, mas também substrato (cininogênio): pode piorar transitoriamente. Off-label no angioedema por IECA (evidência fraca)"
    },
    {
      droga: "Anti-histamínico e corticoide",
      linha: "adj",
      dose: "Prometazina 25 mg IM (criança ≥ 2 anos 0,25–0,5 mg/kg, máx. 25 mg) ou difenidramina 50 mg IV (criança 1 mg/kg, máx. 50 mg) + metilprednisolona 1–2 mg/kg IV (máx. 125 mg)",
      via: "IM / IV",
      intervalo: "Dose única; manter anti-H1 VO na alta",
      duracao: "3–5 dias se histaminérgico",
      monitorizacao: "Sedação",
      contraindicacoes: "Prometazina: < 2 anos",
      ajustes: "Só para o angioedema histaminérgico. Sem efeito no bradicinérgico (não deve retardar via aérea nem terapia específica)"
    },
    {
      droga: "IECA (e sacubitril/valsartana)",
      linha: "ci",
      dose: "Suspender definitivamente",
      via: "—",
      intervalo: "—",
      duracao: "Para sempre",
      monitorizacao: "Registrar alergia no prontuário",
      contraindicacoes: "Não reintroduzir IECA",
      ajustes: "BRA pode ser usado com cautela após avaliação (risco baixo de recorrência). Sacubitril/valsartana contraindicado após angioedema. No AEH evitar IECA e estrogênio"
    }
  ],
  destino: {
    agora: ["Via aérea, adrenalina se dúvida de anafilaxia, terapia específica para bradicinérgico"],
    reavaliar: ["Voz, saliva, língua e SpO₂ a cada 15–30 min nas primeiras horas"],
    alta: [
      "Histaminérgico: sem progressão após 4–6 h de observação",
      "Bradicinérgico estágio I: regressão clara e sem progressão (muitos serviços observam 12–24 h)"
    ],
    observacao: ["Lábio ou face isolado sem progressão (estágio I–II)"],
    internacao: ["Língua, palato, laringe ou progressão; UTI se estágio III–IV ou via aérea definitiva"],
    transferencia: ["Sem capacidade de via aérea avançada ou de fibroscopia: estabilizar e transferir precocemente com médico, antes da obstrução"]
  },
  prescricao: {
    hospitalar: "ANGIOEDEMA — SALA DE EMERGÊNCIA (peso: ___ kg)\n1. Dieta zero até avaliação da via aérea. Cabeceira elevada 45°.\n2. Monitor, SpO₂, PA; carrinho de via aérea difícil e kit de cricotireoidostomia à beira do leito.\n3. O₂ para SpO₂ ≥ 94%.\n4. Se urticas, prurido, broncoespasmo, hipotensão ou dúvida: adrenalina 1 mg/mL 0,5 mL (0,5 mg) IM na coxa (criança 0,01 mg/kg, máx. 0,3 mg); repetir em 5–15 min se necessário.\n5. Adrenalina 1 mg/mL 5 mL inalatória pura em nebulizador, se estridor, enquanto se prepara a via aérea.\n6. Histaminérgico: difenidramina 50 mg IV lento (criança 1 mg/kg, máx. 50 mg) OU prometazina 25 mg IM + metilprednisolona 125 mg IV em 50 mL SF 0,9% (criança 1–2 mg/kg, máx. 125 mg).\n7. Bradicinérgico — AEH (ou IECA, decisão individual): concentrado de C1-inibidor 20 UI/kg IV lento (___ UI) OU icatibanto 30 mg SC no abdome (criança por peso, ver tabela); na falta de ambos: plasma fresco congelado 2 unidades IV (criança 10 mL/kg).\n8. Suspender IECA, sacubitril/valsartana e gliptina; registrar alergia.\n9. Colher C4 (e C1-INH quantitativo/funcional) antes do plasma, se suspeita de AEH.\n10. Controles: voz, saliva, língua e SpO₂ de 15/15 min por 2 h, depois de 1/1 h. Comunicar estridor, rouquidão, sialorreia, queda de SpO₂.",
    ambulatorial: "ALTA — ANGIOEDEMA HISTAMINÉRGICO\nUSO ORAL\n1. Loratadina 10 mg --------------------------------- 10 comprimidos\n   Tomar 1 comprimido por dia por 5 a 10 dias (criança 2–12 anos: < 30 kg 5 mg; ≥ 30 kg 10 mg).\n2. Prednisona 20 mg -------------------------------- 6 comprimidos\n   Tomar 2 comprimidos pela manhã por 3 dias (criança: prednisolona 1 mg/kg/dia, máx. 40 mg, por 3 dias).\n\nALTA — ANGIOEDEMA POR IECA\n1. Suspender enalapril/captopril definitivamente. Trocar o anti-hipertensivo: ________ (ex.: anlodipino 5 mg 1×/dia).\n2. Anti-histamínico e corticoide NÃO previnem este tipo de inchaço."
  },
  orientacoesRetorno: [
    "Voltar imediatamente (ou chamar o SAMU 192) se a voz mudar, se tiver dificuldade para engolir a saliva ou para respirar, ou se a língua inchar",
    "Se o inchaço foi pelo remédio da pressão (enalapril, captopril): nunca mais usar esse tipo de remédio; avisar em toda consulta",
    "Andar com relatório informando o diagnóstico e, se receitada, a caneta de adrenalina",
    "Angioedema hereditário: consulta com imunologista/alergista; família também deve ser avaliada; evitar anticoncepcional com estrogênio",
    "Retorno na UBS em até 1 semana para ajustar os remédios"
  ],
  tabelas: [
    {
      titulo: "Histaminérgico x bradicinérgico",
      colunas: ["Característica", "Histaminérgico (alérgico)", "Bradicinérgico (IECA, AEH)"],
      linhas: [
        ["Urticas e prurido", "Frequentes", "Ausentes"],
        ["Instalação", "Minutos", "Horas; dura 2–5 dias"],
        ["Dor abdominal recorrente", "Rara", "Comum no AEH"],
        ["Resposta a adrenalina/anti-H1/corticoide", "Sim", "Não (ou mínima)"],
        ["Tratamento específico", "Adrenalina IM", "C1-INH, icatibanto; plasma se não houver"],
        ["C4", "Normal", "Baixo no AEH tipo I/II; normal no IECA"]
      ],
      nota: "Na dúvida e com risco de via aérea, fazer adrenalina IM e preparar a via aérea."
    }
  ],
  fontes: [
    "WAO/EAACI — Guideline for the management of hereditary angioedema, revisão 2021 (atualização 2025)",
    "ASBAI/GEBRAEH — Diretrizes brasileiras do angioedema hereditário (2022)",
    "World Allergy Organization — Anaphylaxis Guidance (2020)",
    "Ishoo E et al. Predicting airway risk in angioedema: staging system (Otolaryngol Head Neck Surg, 1999)",
    "Bula Firazyr (icatibanto) e Berinert (C1-INH) — ANVISA"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
