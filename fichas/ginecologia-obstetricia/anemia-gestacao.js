// Anemia na gestação
registrarFicha({
  id: "anemia-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Anemia na gestação",
  resumo: "Hb < 11 g/dL na gestação (OMS). Classificação, investigação (ferropriva, hemoglobinopatias, deficiência de folato/B12), tratamento oral, indicação de ferro endovenoso e de transfusão e encaminhamento.",
  palavrasChave: "anemia gestacao gestante hemoglobina ferropriva ferritina sulfato ferroso sacarato de hidroxido ferrico ferro endovenoso talassemia traco falciforme acido folico b12 transfusao",
  critico: {
    tempo: "Hb < 8: PNAR / ferro IV",
    texto: "Hb < 8 g/dL, anemia sintomática ou perto do parto: encaminhar ao PNAR e considerar ferro endovenoso (2º–3º trimestre). Hb < 7 com sintomas ou sangramento: avaliar transfusão no hospital."
  },
  alarmes: [
    "Hb < 7 g/dL ou dispneia, taquicardia, síncope, dor torácica",
    "Sangramento vaginal ou digestivo ativo",
    "Pancitopenia, plaquetopenia ou leucopenia associada",
    "Hemólise: icterícia, LDH alta, plaquetas baixas com PA alta (HELLP)",
    "Doença falciforme na gestação (alto risco)"
  ],
  conduta: [
    "Hemograma na 1ª consulta e no 3º trimestre; Hb < 11 g/dL = anemia (leve 10–10,9; moderada 7–9,9; grave < 7, OMS)",
    "Microcítica: tratar como ferropriva (dose terapêutica) e pedir ferritina; ferritina < 30 ng/mL confirma (inflamação eleva a ferritina)",
    "Microcítica com ferritina normal ou sem resposta: eletroforese de hemoglobina (talassemia, traço falciforme); não insistir em ferro",
    "Macrocítica: dosar B12 e folato; vegetarianas, bariátricas, etilistas",
    "Ferro oral: 120–240 mg de ferro elementar/dia (ou dose em dias alternados, com menos efeitos e boa absorção); manter fólico e cálcio separados do ferro (ver ficha Suplementação na gestação)",
    "Reavaliar Hb em 30–60 dias: esperado subir ≥ 1 g/dL em 4 semanas; sem resposta → checar adesão, perdas, parasitose e outras causas",
    "Ferro endovenoso (sacarato de hidróxido férrico) no 2º–3º trimestre se intolerância ou falha ao oral, anemia moderada a grave ou parto próximo (< 4 semanas) — em serviço de referência",
    "Tratar parasitoses intestinais quando indicado (preferir após 1º trimestre)",
    "No pós-parto: Hb de controle se perda importante; ferro por 3 meses"
  ],
  exames: [
    "Pedido: \"Hemograma completo com índices hematimétricos. Ferritina sérica. Reticulócitos.\"",
    "Sem resposta / microcitose com ferritina normal: \"Eletroforese de hemoglobina. Parasitológico de fezes (3 amostras).\"",
    "Macrocitose: \"Dosagem de vitamina B12 e ácido fólico sérico.\"",
    "Suspeita de hemólise: \"LDH, bilirrubinas, haptoglobina, Coombs direto, esfregaço de sangue periférico.\""
  ],
  diferenciais: [
    "Hemodiluição fisiológica (Hb raramente < 10,5 no 2º trimestre)",
    "Talassemia menor / traço falciforme",
    "Deficiência de B12 ou folato",
    "Anemia por doença crônica (DRC, infecção, HIV)",
    "HELLP / microangiopatia"
  ],
  tratamento: [
    { droga: "Sulfato ferroso (40 mg de ferro elementar)", linha: "l1", dose: "120–240 mg de ferro elementar/dia", via: "VO", intervalo: "Em 1–3 tomadas, entre as refeições (ou dias alternados)", duracao: "Até normalizar a Hb e mais 3 meses (ou até 3 meses pós-parto)", monitorizacao: "Hb em 30–60 dias", contraindicacoes: "Hemocromatose, anemia não ferropriva", ajustes: "Tomar com suco cítrico; longe de cálcio, leite, café e chá" },
    { droga: "Sacarato de hidróxido férrico 20 mg/mL", linha: "alt", dose: "100–200 mg por aplicação; dose total pela fórmula de Ganzoni", via: "IV", intervalo: "Até 3×/semana", duracao: "Até completar o déficit", monitorizacao: "PA e reação durante a infusão; ferritina e Hb após 4 semanas", contraindicacoes: "1º trimestre, infecção ativa, hipersensibilidade a ferro IV", ajustes: "100 mg em até 100 mL de SF 0,9% em ≥ 15 min; 200 mg em até 200 mL em ≥ 30 min. Ver ficha Anemia ferropriva" },
    { droga: "Ácido fólico", linha: "adj", dose: "5 mg", via: "VO", intervalo: "1×/dia", duracao: "Até correção", monitorizacao: "—", contraindicacoes: "Deficiência de B12 não tratada", ajustes: "Na anemia megaloblástica por folato e em hemoglobinopatias" }
  ],
  prescricao: {
    ambulatorial: "ANEMIA FERROPRIVA LEVE/MODERADA NA GESTAÇÃO\nUSO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ------ 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia, 30 minutos antes das refeições, com suco de laranja ou limão, por 30 dias. Não tomar junto com leite, café ou cálcio.\n2. Ácido fólico 400 mcg ------------------------- 30 comprimidos\n   Tomar 1 comprimido ao dia.\n\nRETORNO em 30 dias com hemograma e ferritina."
  },
  orientacoesRetorno: [
    "O ferro deixa as fezes escuras e pode dar enjoo ou prisão de ventre; se incomodar, tomar à noite ou em dias alternados, mas não parar sem falar com a equipe",
    "Coma feijão, carnes, fígado, folhas verde-escuras; frutas cítricas ajudam a absorver o ferro",
    "Procure atendimento se tiver falta de ar, coração disparado, desmaio ou sangramento",
    "Volte com o exame de sangue na data marcada"
  ],
  encaminhar: [
    "PNAR: Hb < 8 g/dL, anemia sem resposta após 4–8 semanas, hemoglobinopatia (doença falciforme, talassemia maior/intermedia)",
    "Hospital no mesmo dia: Hb < 7 com sintomas, sangramento ativo, suspeita de hemólise/HELLP"
  ],
  fontes: [
    "OMS — Guideline on haemoglobin cutoffs to define anaemia in individuals and populations (2024)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Programa Nacional de Suplementação de Ferro: manual de condutas (2022)",
    "FEBRASGO — Protocolo: Anemia na gestação (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
