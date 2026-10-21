// Otite externa aguda
registrarFicha({
  id: "otite-externa",
  especialidade: "oftalmo-otorrino",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Otite externa aguda",
  resumo: "Inflamação/infecção difusa do conduto auditivo externo (Pseudomonas e S. aureus), com início em até 48 h: otalgia, dor à tração do pavilhão ou ao pressionar o trago, edema do conduto, otorreia. Tratamento com gotas otológicas; antibiótico oral raramente.",
  palavrasChave: "otite externa ouvido de nadador otalgia conduto auditivo gotas otologicas ciprofloxacino hidrocortisona polimixina neomicina otomicose otite externa maligna necrotizante",
  critico: {
    tempo: "Gotas otológicas, não antibiótico oral",
    texto: "Tratamento é tópico por 7 dias + analgesia. Antibiótico oral só se celulite além do conduto, imunossupressão ou falha. Diabético idoso com dor intensa e tecido de granulação: pensar otite externa necrotizante."
  },
  alarmes: [
    "Diabético, idoso ou imunossuprimido com dor intensa e persistente, tecido de granulação no conduto, paralisia facial (otite externa necrotizante/maligna — urgência)",
    "Celulite do pavilhão ou da face, linfadenite, febre",
    "Edema e dor retroauricular com pavilhão deslocado (pensar mastoidite)",
    "Vertigem, perda auditiva súbita importante",
    "Vesículas no pavilhão/conduto com paralisia facial (herpes-zóster ótico — Ramsay Hunt)"
  ],
  conduta: [
    "Diagnóstico clínico: dor à tração do pavilhão/pressão do trago, conduto edemaciado e hiperemiado, otorreia",
    "Analgesia adequada (dipirona/paracetamol; AINE se não houver contraindicação)",
    "Limpeza suave do conduto (aspiração ou mecha seca) se muito debris; não irrigar se suspeita de perfuração ou em diabéticos",
    "Gotas otológicas de antibiótico ± corticoide por 7 dias (até 10 dias se persistência)",
    "Conduto muito edemaciado: colocar mecha (gaze/algodão) para levar a gota até o fundo, trocar em 24–72 h",
    "Membrana timpânica não visualizada, perfuração ou tubo de ventilação: usar quinolona sem aminoglicosídeo (evitar neomicina — ototóxica)",
    "Otomicose (debris branco/preto, prurido): limpeza + antifúngico tópico",
    "Manter o ouvido seco durante o tratamento"
  ],
  exames: [
    "Nenhum exame de rotina",
    "Cultura de secreção: falha terapêutica, recorrência, imunossupressão",
    "Otite externa necrotizante (suspeita): glicemia/HbA1c, VHS/PCR, TC de ossos temporais — encaminhar"
  ],
  diferenciais: [
    "Otite média aguda com perfuração (otorreia, febre, IVAS; dor sem piora à tração)",
    "Furúnculo do conduto (lesão localizada)",
    "Otomicose",
    "Dermatite de contato/eczema do conduto (prurido, uso de gotas ou fones)",
    "Herpes-zóster ótico",
    "Corpo estranho"
  ],
  tratamento: [
    {
      droga: "Ciprofloxacino 2 mg/mL + hidrocortisona 10 mg/mL suspensão otológica",
      linha: "l1",
      dose: "3 gotas na orelha afetada (adulto e criança > 1 ano)",
      via: "Otológica",
      intervalo: "12/12 h",
      duracao: "7 dias",
      monitorizacao: "Melhora da dor em 48–72 h",
      contraindicacoes: "Perfuração timpânica suspeita ou confirmada (bula); < 1 ano",
      ajustes: "Aquecer o frasco na mão, deitar com a orelha para cima por 3–5 min após aplicar; tracionar o pavilhão"
    },
    {
      droga: "Polimixina B + neomicina + hidrocortisona solução otológica",
      linha: "alt",
      dose: "Adulto e > 12 anos: 3 gotas · Criança 1–12 anos: 2 gotas",
      via: "Otológica",
      intervalo: "3 a 4 vezes ao dia",
      duracao: "7–10 dias",
      monitorizacao: "Dermatite de contato à neomicina (piora do prurido e eritema)",
      contraindicacoes: "Perfuração timpânica (ototoxicidade), < 1 ano, infecção fúngica ou viral, alergia a aminoglicosídeos",
      ajustes: "Opção de menor custo"
    },
    {
      droga: "Ciprofloxacino ou ofloxacino em solução (sem aminoglicosídeo) — membrana perfurada/tubo",
      linha: "alt",
      dose: "Conforme bula do produto disponível",
      via: "Otológica",
      intervalo: "Conforme bula",
      duracao: "7 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Quinolonas tópicas são as únicas gotas consideradas seguras com membrana não íntegra (AAO-HNS). Encaminhar ao ORL"
    },
    {
      droga: "Ciprofloxacino oral (casos selecionados)",
      linha: "adj",
      dose: "Adulto: 500–750 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7–10 dias (otite externa necrotizante: semanas, em serviço especializado)",
      monitorizacao: "Tendinopatia, QT, interação com antiácidos",
      contraindicacoes: "Gestação; evitar em crianças salvo sem alternativa",
      ajustes: "Somente se: extensão além do conduto (celulite), diabetes/imunossupressão, impossibilidade de tratamento tópico. Associar sempre às gotas"
    }
  ],
  prescricao: {
    ambulatorial: "OTITE EXTERNA AGUDA — ADULTO\nUSO OTOLÓGICO\n1. Ciprofloxacino 2 mg/mL + hidrocortisona 10 mg/mL suspensão otológica --- 1 frasco\n   Agitar. Pingar 3 gotas no ouvido ___ (direito/esquerdo) de 12 em 12 horas por 7 dias. Ficar deitado com o ouvido para cima por 3 a 5 minutos.\n   (alternativa: polimixina B + neomicina + hidrocortisona solução otológica — 3 gotas de 6 em 6 ou de 8 em 8 horas por 7 a 10 dias; não usar se tímpano perfurado.)\n\nUSO ORAL\n2. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Ibuprofeno 400 mg -------------------------------- 10 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 3 dias se dor forte.\n\nCRIANÇA > 1 ANO\n1. Ciprofloxacino + hidrocortisona suspensão otológica — 3 gotas de 12 em 12 horas por 7 dias.\n   (ou polimixina B + neomicina + hidrocortisona — 2 gotas 3 a 4 vezes ao dia por 7 a 10 dias, se tímpano íntegro.)\n2. Dipirona 500 mg/mL gotas (25 mg/gota) — 0,4 a 0,6 gota/kg/dose (10–15 mg/kg; máx 40 gotas) de 6 em 6 horas se dor.\n   ou Ibuprofeno 5–10 mg/kg/dose (máx 400 mg) de 8 em 8 horas se dor."
  },
  orientacoesRetorno: [
    "Não molhar o ouvido durante o tratamento: no banho, tampar com algodão com vaselina; não nadar por 7–10 dias",
    "Não usar cotonete, grampo ou qualquer objeto no ouvido",
    "A dor deve melhorar em 2–3 dias; usar as gotas até completar 7 dias",
    "Voltar imediatamente se: inchaço ou vermelhidão atrás da orelha ou no rosto, febre, boca torta, tontura forte, dor muito intensa (principalmente diabéticos)",
    "Retornar se não melhorar em 48–72 h ou se os sintomas durarem mais de 2 semanas",
    "Prevenção (nadadores): secar o ouvido com secador em temperatura baixa após o banho de piscina/mar"
  ],
  encaminhar: [
    "Urgência ORL/hospital: suspeita de otite externa necrotizante, celulite extensa, paralisia facial",
    "ORL eletivo: falha após 2 semanas de tratamento, recorrência, otomicose refratária, membrana perfurada"
  ],
  fontes: [
    "AAO-HNS — Clinical Practice Guideline: Acute Otitis Externa, update (2014)",
    "ABORL-CCF — Tratado de Otorrinolaringologia, 3ª ed.: otites externas (2018)",
    "Bulas ANVISA: ciprofloxacino + hidrocortisona suspensão otológica; polimixina B + neomicina + hidrocortisona solução otológica"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
