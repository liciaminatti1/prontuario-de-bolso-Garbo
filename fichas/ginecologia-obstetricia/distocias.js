// Distocias de progressão e apresentação pélvica
registrarFicha({
  id: "distocias",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Distocias: falha de progressão e apresentação pélvica",
  resumo: "Reconhecer no partograma as distocias de dilatação e de descida, identificar a causa (contrações, feto, pelve) e conduzir. Apresentação pélvica a termo: versão cefálica externa, via de parto e conduta no pélvico em expulsivo.",
  palavrasChave: "distocia parada secundaria da dilatacao parada da descida fase ativa prolongada periodo expulsivo prolongado desproporcao cefalopelvica dcp distocia funcional hipoatividade ocitocina amniotomia pelvico pelvica nadegas versao cefalica externa vce terbutalina occipito posterior apresentacao de face transversa",
  critico: {
    tempo: "Parada + DCP = cesárea",
    texto: "Parada da dilatação ou da descida com contrações adequadas, bossa e cavalgamento ósseo (sinais de desproporção) não se corrige com ocitocina: indicar cesárea. Distocia de ombro: ver ficha de procedimento."
  },
  alarmes: [
    "Bossa serossanguínea volumosa e cavalgamento de suturas (desproporção cefalopélvica)",
    "Anel de Bandl, distensão do segmento inferior, dor contínua (iminência de rotura uterina)",
    "Alteração do BCF durante correção com ocitocina",
    "Prolapso de cordão (sobretudo em pélvico incompleto e situação transversa)",
    "Pélvico em período expulsivo sem equipe experiente presente"
  ],
  condutaInicial: [
    "Confirmar fase ativa (≥ 4–5 cm); fase latente longa não é distocia",
    "Avaliar os 3 Ps: contrações (força), feto (tamanho, posição, apresentação, deflexão), pelve (bacia, partes moles)",
    "Corrigir medidas simples: deambulação, mudança de posição, hidratação, esvaziar bexiga, apoio emocional, analgesia",
    "Hipoatividade uterina com bolsa íntegra: amniotomia; persiste: ocitocina e reavaliar em 2–4 h",
    "Suspeita de desproporção, sofrimento fetal ou falha da correção: cesárea",
    "Apresentação pélvica a termo identificada no pré-natal: oferecer versão cefálica externa (VCE) a partir de 36–37 semanas"
  ],
  fataisExcluir: [
    "Rotura uterina",
    "Desproporção cefalopélvica com sofrimento fetal",
    "Prolapso de cordão",
    "Encarceramento da cabeça derradeira no parto pélvico"
  ],
  proximaDecisao: "Após amniotomia + ocitocina por 2–4 h com contrações adequadas e sem progresso (ACOG/SMFM: ≥ 6 cm com bolsa rota, ≥ 4 h de contrações adequadas ou ≥ 6 h de ocitocina sem mudança) → cesárea. Expulsivo prolongado com cabeça baixa (≥ +2) e pré-requisitos → parto instrumental; cabeça alta → cesárea.",
  clinica: {
    anamnese: [
      "Paridade, partos anteriores (peso dos RNs, duração, instrumentais), cesárea prévia",
      "Peso fetal estimado, DMG, altura materna, malformação pélvica ou fratura de bacia",
      "Tempo desde o início da fase ativa e da dilatação completa; analgesia"
    ],
    exameFisico: [
      "Dinâmica uterina (número e intensidade em 10 min)",
      "Toque: dilatação, edema de colo, altura (De Lee), variedade de posição, bossa, cavalgamento, assinclitismo",
      "Leopold e USG para apresentação; estimativa de peso",
      "Globo vesical"
    ],
    diferenciais: [
      { dx: "Distocia funcional (hipoatividade)", pista: "< 3 contrações em 10 min ou fracas; responde a ocitocina" },
      { dx: "Desproporção cefalopélvica", pista: "Parada com contrações boas, bossa, cavalgamento, cabeça alta" },
      { dx: "Variedade occipitoposterior persistente / deflexão", pista: "Dor lombar intensa, expulsivo longo; fontanela anterior palpável" },
      { dx: "Parto taquitócico (precipitado)", pista: "Dilatação completa em < 4 h; risco de laceração e hemorragia" },
      { dx: "Apresentação pélvica", pista: "Polo cefálico no fundo, BCF acima do umbigo; nádegas ou pés ao toque" }
    ],
    gravidade: [
      "Fase ativa prolongada: dilatação < 1 cm/h, curva cruza a linha de alerta",
      "Parada secundária da dilatação: mesma dilatação em 2 toques com 2 h de intervalo, em fase ativa",
      "Parada secundária da descida: dilatação completa e altura inalterada em 2 toques com 1 h de intervalo",
      "Período pélvico prolongado: descida lenta no expulsivo (ver tempos na ficha Trabalho de parto)",
      "Parto precipitado: dilatação e expulsão em < 4 h"
    ]
  },
  exames: [
    {
      nome: "Ultrassonografia na admissão ou no 3º trimestre",
      pedido: "USG obstétrica: apresentação, tipo de pélvico (completo, franco, incompleto), deflexão do polo cefálico, peso fetal estimado, ILA, localização placentária e anomalias.",
      porQue: "Planejar VCE ou via de parto.",
      esperar: "—",
      interpretacao: "Pélvico incompleto (pés), cabeça defletida, peso > 3.800 g ou < 2.000 g: contraindicam parto pélvico vaginal planejado.",
      limitacoes: "Peso fetal estimado tem erro de 10–15%."
    },
    {
      nome: "Cardiotocografia",
      pedido: "Cardiotocografia antes e depois da VCE; contínua durante ocitocina.",
      porQue: "Vitalidade fetal.",
      esperar: "Categoria I.",
      interpretacao: "Alteração persistente após VCE: avaliar descolamento e cesárea.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Amniotomia + ocitocina (distocia funcional)",
      linha: "l1",
      dose: "Ocitocina 1–2 mUI/min, aumentar 1–2 mUI/min a cada 30–40 min",
      via: "IV em bomba",
      intervalo: "Contínua",
      duracao: "Reavaliar com toque em 2–4 h",
      monitorizacao: "CTG contínua; meta 3–5 contrações em 10 min",
      contraindicacoes: "Desproporção, sofrimento fetal, cicatriz corporal",
      ajustes: "5 UI em 500 mL (10 mUI/mL): 1 mUI/min = 6 mL/h"
    },
    {
      droga: "Versão cefálica externa (VCE)",
      linha: "l1",
      dose: "Manobra transabdominal com USG, em ambiente com centro cirúrgico",
      via: "—",
      intervalo: "—",
      duracao: "A partir de 36 semanas (nulípara) / 37 semanas (multípara)",
      monitorizacao: "CTG antes e 30–40 min depois; anti-D se Rh negativo",
      contraindicacoes: "Indicação de cesárea por outra causa, sangramento nos últimos 7 dias, CTG alterada, malformação uterina, bolsa rota, gestação múltipla (exceto 2º gemelar após o 1º), placenta prévia",
      ajustes: "Sucesso em cerca de 50% (mais em multíparas). Tocólise aumenta o sucesso. Cesárea anterior não contraindica (individualizar)"
    },
    {
      droga: "Terbutalina (tocólise para VCE)",
      linha: "adj",
      dose: "0,25 mg",
      via: "SC",
      intervalo: "Dose única, 15–30 min antes da manobra",
      duracao: "—",
      monitorizacao: "FC materna",
      contraindicacoes: "Cardiopatia, FC materna > 120 bpm, hipertireoidismo",
      ajustes: "—"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "adj",
      dose: "300 mcg",
      via: "IM",
      intervalo: "Dose única até 72 h após a VCE",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Gestante Rh positivo ou já sensibilizada",
      ajustes: "Ver ficha Isoimunização Rh"
    }
  ],
  destino: {
    agora: [
      "Distocia em fase ativa: corrigir causa e reavaliar em 2–4 h, com obstetra presente",
      "Pélvico em trabalho de parto: obstetra experiente, pediatra e possibilidade imediata de cesárea"
    ],
    reavaliar: ["Toque 2/2 h na suspeita de parada", "BCF conforme ficha Trabalho de parto"],
    alta: ["VCE com sucesso e CTG normal: alta e pré-natal habitual"],
    observacao: ["Após VCE: CTG e observação por ao menos 30–60 min"],
    internacao: ["Toda distocia em trabalho de parto"],
    transferencia: ["Unidade sem cesárea: transferir antes do expulsivo; com expulsivo iniciado, assistir o parto no local"]
  },
  prescricao: {
    hospitalar: "DISTOCIA FUNCIONAL EM FASE ATIVA (sem desproporção, BCF normal)\n1. Deambulação e mudança de posição; esvaziar a bexiga (sondagem de alívio se globo vesical).\n2. Analgesia regional se desejar.\n3. Amniotomia se bolsa íntegra e apresentação fixa (registrar cor do líquido).\n4. SG 5% 500 mL + Ocitocina 5 UI IV em bomba: iniciar 6–12 mL/h; aumentar 6–12 mL/h a cada 30–40 min até 3–5 contrações em 10 min (máximo 120 mL/h salvo protocolo).\n5. Cardiotocografia contínua.\n6. Toque em 2 h; sem progresso em 2–4 h com contrações adequadas → cesárea.\n\nVERSÃO CEFÁLICA EXTERNA (≥ 36–37 semanas)\n1. Jejum de 6 h (por possibilidade de cesárea), acesso venoso.\n2. CTG e USG antes.\n3. Terbutalina 0,25 mg SC 15–30 min antes.\n4. Manobra sob USG; CTG por 40 min após.\n5. Rh negativo não sensibilizada: Imunoglobulina anti-D 300 mcg IM."
  },
  orientacoesRetorno: [
    "Bebê sentado com 36 semanas: converse sobre a manobra para virar o bebê (versão externa); ela é feita na maternidade e tem boa segurança",
    "Se o bebê continuar sentado, discuta com a equipe a cesárea planejada ou o parto vaginal pélvico com equipe experiente",
    "Bebê sentado e bolsa rompida ou contrações: ir à maternidade imediatamente (risco de saída do cordão)",
    "Após a versão: voltar se sangramento, perda de líquido, dor forte ou bebê mexendo menos"
  ],
  tabelas: [
    {
      titulo: "Apresentação pélvica: via de parto",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Pélvico a termo identificado no pré-natal", "Oferecer VCE; se falhar ou recusar: discutir cesárea planejada (≥ 39 semanas) x parto pélvico vaginal"],
        ["Parto pélvico vaginal planejado", "Só com equipe experiente, pélvico completo ou franco, peso 2.000–3.800 g, cabeça fletida, pelve adequada, sem outra indicação de cesárea"],
        ["Pélvico em expulsivo avançado", "Assistir parto pélvico (não tracionar o feto; manobras de Bracht, Mauriceau, Rojas/Lovset conforme necessidade)"],
        ["Pélvico incompleto (pés) ou prematuro extremo", "Cesárea, se houver tempo"],
        ["2º gemelar não cefálico", "Extração pélvica ou versão interna por obstetra experiente"]
      ],
      nota: "MS 2017/RCOG 2017: cesárea planejada reduz morbimortalidade perinatal no pélvico a termo, com maior risco materno; decisão compartilhada."
    },
    {
      titulo: "Distocias no partograma (diagnóstico e conduta)",
      colunas: ["Padrão", "Causa mais comum", "Conduta"],
      linhas: [
        ["Fase ativa prolongada", "Contrações ineficientes", "Deambulação, amniotomia, ocitocina, analgesia"],
        ["Parada secundária da dilatação", "Desproporção ou má posição", "Sinais de DCP → cesárea; sem DCP e contrações fracas → ocitocina"],
        ["Parada secundária da descida", "Desproporção, má posição", "Cabeça ≥ +2 e rotação adequada → fórceps/vácuo; senão cesárea"],
        ["Expulsivo prolongado", "Contrações fracas, exaustão, posterior", "Ocitocina, mudança de posição, puxo dirigido, instrumental ou cesárea"],
        ["Parto precipitado", "Hiperatividade", "Revisar canal de parto; prevenir HPP"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde/CONITEC — Diretriz Nacional de Assistência ao Parto Normal (2017)",
    "Ministério da Saúde — Diretrizes de Atenção à Gestante: a operação cesariana (CONITEC, 2016)",
    "ACOG/SMFM — Obstetric Care Consensus nº 1: Safe Prevention of the Primary Cesarean Delivery (2014, reafirmado)",
    "RCOG — Green-top Guidelines 20a (External cephalic version) e 20b (Management of breech presentation) (2017)",
    "FEBRASGO — Protocolos: distocias e apresentação pélvica (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
