// Isoimunização Rh e imunoglobulina anti-D
registrarFicha({
  id: "isoimunizacao-rh",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Gestante Rh negativo: Coombs indireto e imunoglobulina anti-D",
  resumo: "Prevenção da doença hemolítica perinatal: seguimento com Coombs indireto, quando e quanto aplicar imunoglobulina anti-D, e conduta quando a gestante já está sensibilizada.",
  palavrasChave: "rh negativo isoimunizacao aloimunizacao doenca hemolitica perinatal eritroblastose fetal coombs indireto pai coombs direto imunoglobulina anti d rhogam matergam 300 mcg doppler arteria cerebral media anemia fetal",
  critico: {
    tempo: "Anti-D até 72 h após o evento",
    texto: "Rh negativo com Coombs indireto negativo: anti-D 300 mcg IM em até 72 h após parto de RN Rh positivo, aborto, ectópica, sangramento, procedimento invasivo ou trauma. Se passou de 72 h, ainda aplicar (benefício até 28 dias)."
  },
  alarmes: [
    "Coombs indireto positivo (anti-D) em qualquer momento",
    "Título de Coombs ≥ 1:16 ou subindo (alguns protocolos: ≥ 1:8)",
    "Doppler com pico sistólico da artéria cerebral média > 1,5 MoM (anemia fetal)",
    "Hidropsia fetal ou polidrâmnio em sensibilizada",
    "Movimentos fetais diminuídos"
  ],
  conduta: [
    "Tipagem ABO-Rh na 1ª consulta; Rh negativo: tipagem do parceiro (se Rh negativo comprovado e paternidade certa, não há risco de doença)",
    "Rh negativo com parceiro Rh positivo ou desconhecido: Coombs indireto na 1ª consulta; se negativo, repetir com 24–28 semanas e conforme protocolo local (mensal a partir de 24 semanas no MS)",
    "Coombs indireto negativo: imunoglobulina anti-D 300 mcg IM com 28 semanas (profilaxia anteparto, MS 2022) e nos eventos sensibilizantes",
    "Pós-parto: tipagem e Coombs direto do RN; RN Rh positivo (ou D fraco) e mãe não sensibilizada → anti-D 300 mcg IM até 72 h, mesmo que tenha recebido com 28 semanas",
    "Hemorragia feto-materna grande (descolamento, trauma, natimorto): pedir teste de Kleihauer-Betke se disponível; 300 mcg cobrem 30 mL de sangue fetal",
    "Coombs indireto positivo: confirmar anticorpo (anti-D ou outros: anti-Kell, anti-c), titular e encaminhar ao PNAR/medicina fetal; não aplicar anti-D (exceto se positividade for pela própria imunoglobulina recente)",
    "Sensibilizada: título abaixo do crítico → repetir a cada 4 semanas até 24 e depois a cada 2 semanas; título crítico → Doppler da ACM a cada 1–2 semanas a partir de 16–18 semanas; PVS-ACM > 1,5 MoM → cordocentese e transfusão intrauterina em centro de referência",
    "Anti-Kell: qualquer título é significativo (causa supressão da eritropoese)"
  ],
  exames: [
    "Pedido: \"Tipagem sanguínea ABO e fator Rh (com pesquisa de D fraco). Coombs indireto (pesquisa de anticorpos irregulares).\"",
    "Pedido (parceiro): \"Tipagem sanguínea ABO e fator Rh.\"",
    "Pedido (sensibilizada): \"Coombs indireto com identificação e titulação do anticorpo.\" + \"USG obstétrica com Doppler da artéria cerebral média (pico de velocidade sistólica em MoM).\"",
    "RN de mãe Rh negativo: \"Tipagem ABO-Rh e Coombs direto do sangue de cordão.\""
  ],
  tabelas: [
    {
      titulo: "Quando aplicar imunoglobulina anti-D (Rh negativo não sensibilizada)",
      colunas: ["Situação", "Dose usual"],
      linhas: [
        ["28 semanas (profilaxia de rotina)", "300 mcg IM"],
        ["Até 72 h após parto de RN Rh positivo ou D fraco", "300 mcg IM (mais se Kleihauer indicar)"],
        ["Aborto, ameaça de aborto com sangramento, gravidez ectópica, mola", "300 mcg IM (≤ 12 semanas: 50–120 mcg se houver apresentação; no SUS usa-se 300 mcg)"],
        ["Amniocentese, biópsia de vilo, cordocentese", "300 mcg IM"],
        ["Versão cefálica externa, trauma abdominal, sangramento do 2º/3º trimestre", "300 mcg IM (repetir se novo evento após 12 semanas da última dose, conforme protocolo)"],
        ["Óbito fetal", "300 mcg IM"]
      ],
      nota: "Aplicar no deltoide. Coombs indireto pode ficar fracamente positivo por semanas após a anti-D (anticorpo passivo, título baixo): não é sensibilização."
    }
  ],
  prescricao: {
    ambulatorial: "GESTANTE Rh NEGATIVO, COOMBS INDIRETO NEGATIVO — 28 SEMANAS\nUSO INTRAMUSCULAR\n1. Imunoglobulina humana anti-D 300 mcg ---------- 1 ampola/seringa\n   Aplicar 1 dose IM no deltoide com 28 semanas. (Fornecida pelo SUS na maternidade/serviço de referência conforme fluxo local.)\n\nREGISTRAR na Caderneta da Gestante a data e o lote.",
    hospitalar: "PUÉRPERA Rh NEGATIVO, COOMBS INDIRETO NEGATIVO, RN Rh POSITIVO (Coombs direto do RN negativo)\n1. Imunoglobulina humana anti-D 300 mcg IM no deltoide, dose única, até 72 h após o parto.\n2. Registrar no resumo de alta e na Caderneta."
  },
  orientacoesRetorno: [
    "Seu sangue é Rh negativo: a vacina (imunoglobulina) protege os próximos bebês; guarde o registro da aplicação",
    "Sempre que tiver sangramento, queda ou batida na barriga, aborto ou procedimento, procure atendimento em até 72 horas para avaliar a imunoglobulina",
    "Depois do parto, a imunoglobulina deve ser aplicada em até 72 horas se o bebê for Rh positivo",
    "Se o exame de Coombs vier positivo, você será acompanhada no alto risco"
  ],
  encaminhar: [
    "PNAR / medicina fetal: Coombs indireto positivo (qualquer título de anti-Kell; anti-D com título ≥ 1:16 ou conforme protocolo), história de doença hemolítica, hidropsia",
    "Maternidade: eventos sensibilizantes quando a imunoglobulina não estiver disponível na UBS"
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Manual de Pré-natal e Puerpério / Cadernos de Atenção Básica nº 32 (2012)",
    "FEBRASGO — Protocolo: Aloimunização materna (2021)",
    "ACOG Practice Bulletin 181 — Prevention of Rh D Alloimmunization (2017; atualização 2024)",
    "RCOG Green-top 65 — Management of women with red cell antibodies during pregnancy (2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
