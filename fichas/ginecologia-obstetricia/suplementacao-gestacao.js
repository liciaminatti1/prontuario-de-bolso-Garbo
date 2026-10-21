// Ácido fólico, ferro e cálcio na gestação
registrarFicha({
  id: "suplementacao-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Ácido fólico, ferro e cálcio na gestação",
  resumo: "Suplementação de rotina do SUS na gestação: ácido fólico (pré-concepção até o fim da gestação), ferro profilático ou terapêutico e cálcio universal a partir de 12 semanas.",
  palavrasChave: "acido folico sulfato ferroso ferro elementar carbonato de calcio suplementacao gestante gravidez anemia defeito tubo neural pnsf pre eclampsia micronutrientes",
  critico: {
    tempo: "Fólico antes de engravidar",
    texto: "O tubo neural fecha cerca de 4 semanas após a concepção. Ácido fólico deve começar pelo menos 30 dias antes da concepção. Cálcio é universal no SUS desde 2024, a partir de 12 semanas."
  },
  alarmes: [
    "Hb < 8 g/dL ou anemia com dispneia, taquicardia, síncope",
    "Anemia que não melhora após 4–8 semanas de ferro bem tomado (investigar outras causas)",
    "Microcitose com ferritina normal ou alta (talassemia) — não insistir em ferro",
    "Intoxicação acidental de crianças com ferro (guardar fora do alcance)"
  ],
  conduta: [
    "Ácido fólico 400 mcg/dia para toda mulher que planeja engravidar (≥ 30 dias antes) e durante toda a gestação",
    "Alto risco de defeito do tubo neural (filho anterior com DTN, uso de anticonvulsivante, DM prévio, obesidade, má absorção): ácido fólico 5 mg/dia",
    "Ferro elementar 40 mg/dia para toda gestante desde o diagnóstico da gestação até 3 meses pós-parto (PNSF)",
    "Hb < 11 g/dL: dose de tratamento (120–240 mg de ferro elementar/dia, em 3 tomadas) e Hb de controle em 30–60 dias",
    "Cálcio: 1.000 mg/dia de cálcio elementar (carbonato de cálcio 1.250 mg 2×/dia) da 12ª semana até o parto, para toda gestante",
    "Separar ferro e cálcio em pelo menos 2 horas; ferro longe de leite, café e chá",
    "Efeitos do ferro (náusea, constipação, fezes escuras): tomar à noite ou com pequena refeição antes de suspender"
  ],
  exames: [
    "Hemograma na 1ª consulta e no 3º trimestre (ver ficha Exames do pré-natal)",
    "Anemia sem resposta: ferritina, reticulócitos, eletroforese de hemoglobina, parasitológico de fezes",
    "Pedido pronto: \"Hemograma completo. Ferritina sérica. Contagem de reticulócitos. Eletroforese de hemoglobina.\""
  ],
  tabelas: [
    {
      titulo: "Esquemas de suplementação (SUS)",
      colunas: ["Suplemento", "Dose", "Quando"],
      linhas: [
        ["Ácido fólico (rotina)", "400 mcg (0,4 mg) 1×/dia", "≥ 30 dias antes da concepção até o fim da gestação"],
        ["Ácido fólico (alto risco de DTN)", "5 mg 1×/dia", "Pré-concepção e 1º trimestre (manter conforme indicação)"],
        ["Sulfato ferroso (profilaxia)", "40 mg de ferro elementar 1×/dia", "Diagnóstico da gestação até 3 meses pós-parto"],
        ["Sulfato ferroso (Hb < 11 g/dL)", "120–240 mg de ferro elementar/dia", "Até normalizar a Hb; depois voltar à profilaxia"],
        ["Carbonato de cálcio 1.250 mg", "500 mg de cálcio elementar 2×/dia (1.000 mg/dia)", "12ª semana até o parto"]
      ],
      nota: "PNSF e Caderno de Micronutrientes (MS, 2022). Cálcio universal: NT Conjunta MS nº 251/2024. Sulfato ferroso 40 mg = comprimido padronizado no SUS com 40 mg de ferro elementar."
    }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ácido fólico 400 mcg (0,4 mg) ------------------ 30 comprimidos\n   Tomar 1 comprimido ao dia, até o fim da gestação.\n   (Alto risco de defeito do tubo neural ou serviço só com 5 mg: Ácido fólico 5 mg — tomar 1 comprimido ao dia.)\n2. Sulfato ferroso 40 mg de ferro elementar ------ 30 comprimidos\n   Tomar 1 comprimido ao dia, 30 minutos antes do almoço ou entre as refeições, com suco de laranja ou limão, até 3 meses após o parto.\n3. Carbonato de cálcio 1.250 mg (500 mg de cálcio) - 60 comprimidos\n   A partir de 12 semanas: tomar 1 comprimido no café da manhã e 1 no jantar, até o parto. Intervalo mínimo de 2 horas do ferro.\n\nSE ANEMIA (Hb < 11 g/dL), EM LUGAR DO ITEM 2\n4. Sulfato ferroso 40 mg de ferro elementar ------ 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia, entre as refeições, por 30 dias e retornar com hemograma."
  },
  orientacoesRetorno: [
    "O ferro deixa as fezes escuras: isso é esperado",
    "Tomar o ferro com suco de fruta cítrica; não tomar com leite, café, chá preto ou junto com o cálcio",
    "Se tiver enjoo com o ferro, tomar à noite antes de dormir; não parar sem falar com a equipe",
    "Comer feijão, carnes, folhas verde-escuras; leite e derivados ajudam no cálcio",
    "Guardar os comprimidos longe de crianças (ferro em excesso é perigoso para elas)",
    "Retornar com hemograma no prazo combinado; procurar atendimento se cansaço extremo, falta de ar ou desmaio"
  ],
  encaminhar: [
    "PNAR: Hb < 8 g/dL, anemia sem resposta após investigação, hemoglobinopatias",
    "Hb muito baixa com sintomas ou perto do parto: avaliar ferro endovenoso (sacarato de hidróxido férrico) em serviço de referência"
  ],
  fontes: [
    "Ministério da Saúde — Caderno dos Programas Nacionais de Suplementação de Micronutrientes / Programa Nacional de Suplementação de Ferro (2022)",
    "Ministério da Saúde — Nota Técnica nº 133/2022-CGPAM (ácido fólico 400 mcg)",
    "Ministério da Saúde — Nota Técnica Conjunta nº 251/2024 (suplementação universal de cálcio em gestantes)",
    "OMS — Recommendations on antenatal care for a positive pregnancy experience (2016) e calcium supplementation (2018/2020)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 32 (2012)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
