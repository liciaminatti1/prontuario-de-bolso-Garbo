// Vertigem aguda, VPPB, neurite vestibular e HINTS
registrarFicha({
  id: "vertigem",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Vertigem aguda: VPPB, neurite vestibular (labirintite) e HINTS",
  resumo: "Tontura rotatória aguda no adulto. Classificar pelo padrão de tempo e gatilho: episódica desencadeada pela posição (VPPB), contínua com nistagmo (síndrome vestibular aguda: neurite × AVC de fossa posterior, diferenciar com HINTS) ou episódica espontânea (migrânea vestibular, Ménière, AIT).",
  palavrasChave: "vertigem tontura labirintite labirintopatia vppb vertigem posicional paroxistica benigna neurite vestibular hints head impulse nistagmo skew dix hallpike epley avc cerebelar fossa posterior dimenidrinato meclizina meniere",
  critico: {
    tempo: "Tontura contínua: HINTS ou RM",
    texto: "Na síndrome vestibular aguda, até 1 em cada 4–5 casos pode ser AVC de fossa posterior. Teste de impulso cefálico normal, nistagmo que muda de direção ou desvio skew = central. TC normal não exclui AVC."
  },
  alarmes: [
    "Déficit neurológico focal: diplopia, disartria, disfagia, fraqueza, alteração de sensibilidade na face ou corpo, síndrome de Horner",
    "Incapacidade de ficar de pé ou andar sem apoio (ataxia de tronco)",
    "HINTS central: impulso cefálico normal, nistagmo que muda de direção, vertical ou torsional puro, desvio skew",
    "Cefaleia ou cervicalgia súbita e intensa (dissecção vertebral, hemorragia cerebelar)",
    "Perda auditiva aguda associada (pode ser isquemia de AICA ou surdez súbita)",
    "Idoso com fatores de risco vascular e primeiro episódio de vertigem contínua",
    "Rebaixamento de consciência, vômitos incoercíveis, síncope ou arritmia"
  ],
  condutaInicial: [
    "Glicemia capilar, PA, FC, ECG se pré-síncope ou palpitação",
    "Definir o padrão: desencadeada pela posição (segundos) × contínua (horas a dias) × episódica espontânea (minutos a horas)",
    "Exame neurológico com pares cranianos, coordenação e marcha",
    "Contínua com nistagmo espontâneo: HINTS (só se treinado e com nistagmo presente)",
    "Desencadeada pela posição: Dix-Hallpike e teste de rolagem em supino; se VPPB, manobra de reposicionamento (Epley) no mesmo atendimento",
    "Sintomáticos por curto período (≤ 3 dias): antiemético e supressor vestibular",
    "Suspeita central: protocolo de AVC (ver ficha avc) e RM com difusão"
  ],
  fataisExcluir: [
    "AVC isquêmico de tronco ou cerebelo (pode simular neurite)",
    "Hemorragia cerebelar",
    "Dissecção de artéria vertebral",
    "Arritmia / síndrome coronariana com pré-síncope",
    "Hipoglicemia, intoxicação (álcool, anticonvulsivantes, lítio), monóxido de carbono"
  ],
  proximaDecisao: "VPPB típica → Epley e alta sem exames de imagem. Síndrome vestibular aguda com HINTS periférico (impulso alterado unilateral + nistagmo horizontal unidirecional + sem skew), marcha possível e sem déficit → neurite vestibular: sintomáticos curtos e reabilitação vestibular. HINTS central, duvidoso ou não realizável → RM com difusão e neurologia; dentro da janela, conduta de AVC.",
  clinica: {
    anamnese: [
      "Tempo: segundos com mudança de posição (VPPB); contínua por dias (neurite, AVC); minutos a horas espontânea (migrânea vestibular, Ménière, AIT)",
      "Gatilho: deitar, virar na cama, olhar para cima (VPPB); sem gatilho; esforço ou ficar de pé (hipotensão ortostática)",
      "Infecção viral recente (neurite vestibular)",
      "Audição: hipoacusia flutuante, zumbido e plenitude aural (Ménière); perda auditiva súbita (labirintite, AICA)",
      "Cefaleia, fotofobia, história de enxaqueca (migrânea vestibular)",
      "Sintomas neurológicos (5 D: diplopia, disartria, disfagia, disestesia, déficit motor), cervicalgia, trauma cervical",
      "Fatores de risco vascular: idade, HAS, DM, tabagismo, FA, AVC prévio",
      "Medicamentos: anti-hipertensivos, sedativos, anticonvulsivantes, aminoglicosídeo"
    ],
    exameFisico: [
      "PA deitado e em pé; ritmo cardíaco",
      "Nistagmo espontâneo (olhar primário e lateral), de preferência sem fixação visual",
      "HINTS: Head Impulse (impulso cefálico), Nystagmus (direção no olhar lateral), Test of Skew (cobertura alternada)",
      "Pares cranianos, força, sensibilidade, dismetria (index-nariz, calcanhar-joelho)",
      "Marcha e equilíbrio sentado/de pé (ataxia de tronco = central)",
      "Otoscopia; teste do sussurro e Weber/Rinne",
      "Dix-Hallpike e teste de rolagem em supino (se suspeita de VPPB e sem nistagmo espontâneo)"
    ],
    diferenciais: [
      { dx: "VPPB (canal posterior)", pista: "Crises de segundos ao deitar ou virar; Dix-Hallpike: nistagmo torsional para cima, latência de poucos segundos, dura < 1 min, fatigável" },
      { dx: "VPPB (canal horizontal)", pista: "Rolagem em supino com nistagmo horizontal geotrópico ou apogeotrópico" },
      { dx: "Neurite vestibular", pista: "Vertigem contínua por dias, náusea, nistagmo horizontal unidirecional, impulso cefálico alterado, audição normal, consegue andar com desvio" },
      { dx: "Labirintite", pista: "Como a neurite, com perda auditiva; pensar também em otite média complicada" },
      { dx: "AVC de fossa posterior", pista: "Fatores de risco, HINTS central, ataxia de tronco, sinais neurológicos (podem faltar)" },
      { dx: "Migrânea vestibular", pista: "Episódios de minutos a 72 h, cefaleia migranosa, fotofobia; exame normal entre crises" },
      { dx: "Doença de Ménière", pista: "Crises de 20 min a 12 h com hipoacusia flutuante, zumbido e plenitude" },
      { dx: "Pré-síncope / ortostatismo", pista: "Escurecimento visual, ao levantar; queda de PA em pé; sem nistagmo" }
    ],
    gravidade: [
      "HINTS periférico (todos os três): impulso cefálico ALTERADO (sacada corretiva) + nistagmo horizontal unidirecional + sem skew",
      "HINTS central (qualquer um): impulso cefálico NORMAL, nistagmo que muda de direção com o olhar (ou vertical/torsional puro), desvio skew presente",
      "HINTS plus: perda auditiva nova também sugere causa vascular (AICA)",
      "O HINTS só vale em síndrome vestibular aguda com nistagmo presente; feito em quem não tem nistagmo ou em VPPB, induz erro"
    ]
  },
  exames: [
    {
      nome: "Ressonância magnética de crânio com difusão",
      pedido: "Ressonância magnética de crânio com sequência de difusão (DWI), atenção a fossa posterior. Indicação: síndrome vestibular aguda com HINTS central ou duvidoso / suspeita de AVC de fossa posterior.",
      porQue: "Confirma AVC de tronco/cerebelo quando o exame é central ou duvidoso.",
      esperar: "Restrição à difusão em território vertebrobasilar.",
      interpretacao: "Difusão negativa nas primeiras 24–48 h não exclui AVC pequeno de tronco; repetir se a suspeita clínica persistir.",
      limitacoes: "Nem sempre disponível; não atrasar transferência para centro de AVC."
    },
    {
      nome: "Tomografia de crânio / angiotomografia",
      pedido: "Angiotomografia de vasos cervicais e intracranianos. Indicação: suspeita de AIT vertebrobasilar ou dissecção vertebral. TC de crânio sem contraste se rebaixamento, cefaleia súbita ou suspeita de hemorragia.",
      porQue: "TC exclui hemorragia e massa; angio avalia oclusão e dissecção.",
      esperar: "—",
      interpretacao: "TC normal NÃO exclui AVC isquêmico de fossa posterior.",
      limitacoes: "Não pedir TC de rotina para tontura (GRACE-3): baixa sensibilidade e falsa segurança."
    },
    {
      nome: "Glicemia, ECG e laboratório dirigido",
      pedido: "Glicemia capilar. Eletrocardiograma de 12 derivações. Hemograma, sódio, potássio e creatinina se vômitos importantes, idoso ou suspeita sistêmica.",
      porQue: "Excluir hipoglicemia, arritmia e distúrbio hidroeletrolítico.",
      esperar: "Normais na vertigem periférica.",
      interpretacao: "FA nova reforça suspeita embólica.",
      limitacoes: "—"
    },
    {
      nome: "Audiometria e avaliação vestibular",
      pedido: "Audiometria tonal e vocal com imitanciometria. Indicação: vertigem com queixa auditiva / suspeita de Ménière ou labirintite.",
      porQue: "Documentar perda auditiva; diferenciar Ménière, labirintite e surdez súbita.",
      esperar: "Normal na neurite e na VPPB.",
      interpretacao: "Perda neurossensorial súbita (≥ 30 dB em 3 frequências) → otorrino com urgência (surdez súbita).",
      limitacoes: "Ambulatorial; não necessária na VPPB típica."
    }
  ],
  tratamento: [
    {
      droga: "Manobra de Epley (reposicionamento canalicular — VPPB de canal posterior)",
      linha: "l1",
      dose: "1 ciclo; repetir até 2–3 vezes se ainda houver nistagmo",
      via: "Manobra à beira-leito",
      intervalo: "Mesmo atendimento; pode ser repetida em retorno",
      duracao: "—",
      monitorizacao: "Náusea durante a manobra; refazer Dix-Hallpike ao final",
      contraindicacoes: "Doença cervical grave, instabilidade cervical, estenose de carótida grave conhecida (cuidado com extensão do pescoço)",
      ajustes: "Canal horizontal: manobra de Lempert (rolagem de 360°) ou de Gufoni. Não é necessário restringir posição após a manobra. Ensinar exercícios domiciliares (Brandt-Daroff) se recidiva"
    },
    {
      droga: "Dimenidrinato",
      linha: "l1",
      dose: "VO: 50–100 mg. IV: 1 ampola de 10 mL de dimenidrinato 30 mg + piridoxina, lenta (a ampola de 1 mL com 50 mg é só IM)",
      via: "Oral ou IV",
      intervalo: "VO de 6/6 h (máx 400 mg/dia)",
      duracao: "Até 3 dias",
      monitorizacao: "Sonolência, quedas, retenção urinária, confusão em idosos",
      contraindicacoes: "Glaucoma de ângulo fechado, retenção urinária, idoso frágil (critérios de Beers)",
      ajustes: "Supressor vestibular só na fase aguda com vômitos/vertigem intensa (neurite, crise de Ménière). Uso prolongado atrasa a compensação. Na VPPB não é recomendado de rotina"
    },
    {
      droga: "Meclizina",
      linha: "alt",
      dose: "25 mg",
      via: "Oral",
      intervalo: "8/8 h a 12/12 h",
      duracao: "Até 3 dias",
      monitorizacao: "Sonolência",
      contraindicacoes: "Glaucoma, retenção urinária",
      ajustes: "Mesma restrição: apenas fase aguda"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "4–8 mg",
      via: "IV lento ou VO/sublingual",
      intervalo: "8/8 h",
      duracao: "Até 3 dias",
      monitorizacao: "QT longo",
      contraindicacoes: "QT longo congênito",
      ajustes: "Antiemético sem efeito sedativo importante. Alternativa: metoclopramida 10 mg IV/VO de 8/8 h"
    },
    {
      droga: "Diazepam",
      linha: "alt",
      dose: "5 mg",
      via: "Oral ou IV lento",
      intervalo: "Dose única ou 12/12 h",
      duracao: "Até 3 dias",
      monitorizacao: "Sedação, depressão respiratória, quedas",
      contraindicacoes: "Insuficiência respiratória, apneia do sono, idoso, uso de álcool",
      ajustes: "Reservar para vertigem intensa refratária ao anti-histamínico"
    },
    {
      droga: "Corticoide oral na neurite vestibular",
      linha: "adj",
      dose: "Conforme protocolo do serviço (estudos usaram dose alta com desmame em cerca de 3 semanas)",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "Iniciar nas primeiras 72 h",
      monitorizacao: "Glicemia, PA",
      contraindicacoes: "Infecção ativa, DM descompensado",
      ajustes: "Melhora a recuperação calórica de curto prazo, mas o benefício clínico de longo prazo é incerto. Decisão individual; não é obrigatório"
    },
    {
      droga: "Reabilitação vestibular",
      linha: "l1",
      dose: "Exercícios de habituação e estabilização do olhar",
      via: "Fisioterapia / domiciliar",
      intervalo: "Diário",
      duracao: "Semanas",
      monitorizacao: "Melhora do equilíbrio",
      contraindicacoes: "—",
      ajustes: "Iniciar assim que os vômitos cederem na neurite; também para VPPB persistente e desequilíbrio residual"
    },
    {
      droga: "Supressor vestibular contínuo (dimenidrinato, cinarizina, flunarizina, betaistina) para \"labirintite\" crônica",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar de forma prolongada",
      ajustes: "Atrasa a compensação central, causa quedas e, com flunarizina/cinarizina, parkinsonismo e depressão em idosos"
    }
  ],
  destino: {
    agora: [
      "VPPB: Epley no atendimento",
      "Síndrome vestibular aguda: HINTS; central/duvidoso → neuroimagem e neurologia",
      "Sinais de AVC dentro da janela → protocolo de AVC"
    ],
    reavaliar: [
      "Após sintomáticos: deambulação sem apoio, aceitação de líquidos",
      "Repetir exame neurológico antes da alta"
    ],
    alta: [
      "VPPB tratada; neurite com HINTS periférico, andando e tolerando VO",
      "Sintomáticos por no máximo 3 dias, orientação de reabilitação vestibular",
      "Retorno na UBS em 1–2 semanas (VPPB: reavaliar e repetir manobra se necessário)"
    ],
    observacao: [
      "Vômitos persistentes, incapacidade de deambular, idoso sozinho, dúvida diagnóstica: observação 6–24 h e reavaliação"
    ],
    internacao: [
      "AVC/AIT de fossa posterior, hemorragia cerebelar",
      "Vertigem periférica com desidratação ou incapacidade de andar sem apoio após tratamento"
    ],
    transferencia: [
      "Suspeita de AVC sem RM/neurologia: regulação para centro de AVC",
      "Surdez súbita associada: otorrinolaringologia em caráter de urgência"
    ]
  },
  prescricao: {
    hospitalar: "VERTIGEM PERIFÉRICA AGUDA — SALA DE OBSERVAÇÃO\n1. Repouso em decúbito na posição mais confortável; grades elevadas; acompanhar para deambular (risco de queda).\n2. Acesso venoso. SF 0,9% 500–1.000 mL IV em 1–2 h se vômitos/desidratação.\n3. Dimenidrinato 30 mg + piridoxina 50 mg (ampola de 10 mL, apresentação para uso IV) 1 ampola IV lento (3–5 min), até de 8/8 h. Conferir a bula: a apresentação de 1 mL (dimenidrinato 50 mg) é só IM.\n4. Ondansetrona 8 mg (4 mL) diluída em 10 mL de SF 0,9% IV lento, de 8/8 h se náusea ou vômito.\n5. Se vertigem intensa refratária (sem contraindicação): diazepam 5 mg VO ou 5 mg IV lento (1 mL), dose única.\n6. Dipirona 1 g IV de 6/6 h se cefaleia leve (cefaleia intensa ou súbita: investigar).\n7. Controles: sinais vitais de 4/4 h, glicemia capilar, exame neurológico e marcha antes da alta.",
    ambulatorial: "ALTA — VERTIGEM PERIFÉRICA (NEURITE VESTIBULAR / VPPB COM NÁUSEA)\nUSO ORAL\n1. Dimenidrinato 50 mg --------------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se tontura forte ou enjoo, por no máximo 3 dias.\n   (ou Meclizina 25 mg: 1 comprimido de 12 em 12 horas se tontura, por no máximo 3 dias.)\n2. Ondansetrona 4 mg (comprimido orodispersível) ---------- 10 comprimidos\n   Dissolver 1 comprimido na língua de 8 em 8 horas se náusea ou vômito.\n\nORIENTAÇÕES\n3. Exercícios de reabilitação vestibular diários (folha de exercícios); encaminhamento para fisioterapia vestibular se persistir desequilíbrio."
  },
  orientacoesRetorno: [
    "VPPB: é benigna e costuma voltar; se voltar, procure a UBS para repetir a manobra. Não precisa de remédio contínuo",
    "Neurite (\"labirintite\"): a tontura forte melhora em dias; o desequilíbrio pode durar semanas e melhora com os exercícios. Use o remédio para tontura só nos primeiros dias",
    "Levante-se devagar, acenda a luz à noite, retire tapetes e evite dirigir, subir em escadas ou trabalhar em altura enquanto estiver tonto",
    "Procure o PS imediatamente (ou ligue 192) se tiver visão dupla, fala enrolada, dificuldade para engolir, fraqueza ou dormência em um lado, não conseguir andar, dor de cabeça ou na nuca súbita e forte, ou perda da audição",
    "Retorne à UBS em 1–2 semanas, ou antes se não melhorar"
  ],
  tabelas: [
    {
      titulo: "HINTS na síndrome vestibular aguda (com nistagmo espontâneo)",
      colunas: ["Componente", "Periférico (neurite)", "Central (AVC)"],
      linhas: [
        ["Impulso cefálico", "Alterado: sacada corretiva ao virar para o lado afetado", "NORMAL (olhos fixos no alvo)"],
        ["Nistagmo", "Horizontal, bate sempre para o mesmo lado, aumenta olhando para esse lado", "Muda de direção conforme o olhar, ou vertical/torsional puro"],
        ["Skew (cobertura alternada)", "Ausente", "Presente (correção vertical do olho descoberto)"],
        ["Plus: audição", "Normal (neurite)", "Perda auditiva nova pode ser AVC de AICA"]
      ],
      nota: "Um único achado central basta para considerar central. Incapacidade de andar sem apoio também é sinal central."
    },
    {
      titulo: "Manobra de Epley (lado afetado = Dix-Hallpike positivo)",
      colunas: ["Passo", "Posição", "Tempo"],
      linhas: [
        ["1", "Sentado, cabeça girada 45° para o lado afetado; deitar rápido com o pescoço em extensão de ~20° (como no Dix-Hallpike)", "30–60 s (até o nistagmo cessar)"],
        ["2", "Girar a cabeça 90° para o lado oposto, mantendo a extensão", "30–60 s"],
        ["3", "Rolar o corpo para o lado oposto, cabeça voltada para o chão (mais 90°)", "30–60 s"],
        ["4", "Sentar lentamente com a cabeça levemente fletida", "—"]
      ],
      nota: "Repetir se ainda houver nistagmo no Dix-Hallpike de controle."
    }
  ],
  fontes: [
    "SAEM — Guidelines for Reasonable and Appropriate Care in the Emergency Department 3 (GRACE-3): Acute Dizziness and Vertigo (Acad Emerg Med, 2023)",
    "AAO-HNSF — Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update) (Otolaryngol Head Neck Surg, 2017)",
    "Bárány Society — Diagnostic criteria for vestibular neuritis / acute unilateral vestibulopathy (J Vestib Res, 2022)",
    "Cochrane — Corticosteroids for the treatment of idiopathic acute vestibular dysfunction (vestibular neuritis) (2011)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
