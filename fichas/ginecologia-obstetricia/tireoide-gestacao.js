// Tireoide na gestação
registrarFicha({
  id: "tireoide-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Hipotireoidismo e hipertireoidismo na gestação",
  resumo: "Ajuste da levotiroxina na gestante já tratada, conduta no TSH alterado no pré-natal, tireotoxicose gestacional transitória x doença de Graves (PTU no 1º trimestre, metimazol depois) e tireoidite pós-parto.",
  palavrasChave: "tireoide gestacao hipotireoidismo subclinico tsh t4 livre anti tpo levotiroxina hipertireoidismo graves trab propiltiouracil ptu metimazol tiamazol hiperemese tireotoxicose gestacional tireoidite pos parto",
  critico: {
    tempo: "Gestante em LT4: +25–30% já",
    texto: "Gestante que já usa levotiroxina: aumentar a dose em 25–30% (ex.: 2 comprimidos extras por semana) assim que confirmar a gravidez e dosar TSH em 4 semanas."
  },
  alarmes: [
    "Taquicardia > 120, febre, agitação, vômitos, confusão (crise tireotóxica)",
    "Graves com TRAb alto (risco de tireotoxicose fetal/neonatal: taquicardia fetal, bócio fetal, RCF)",
    "Hipotireoidismo clínico não tratado (TSH > 10 ou T4 livre baixo)",
    "Febre, dor de garganta ou icterícia em uso de PTU/metimazol (agranulocitose, hepatotoxicidade)"
  ],
  conduta: [
    "Não há rastreio universal de TSH no SUS; dosar TSH em gestante com sintomas, história de doença tireoidiana, anti-TPO positivo conhecido, DM1, outras autoimunes, irradiação de pescoço, abortos de repetição, infertilidade ou bócio",
    "Referência de TSH: usar faixa por trimestre do laboratório; sem ela, limite superior de ~4,0 mU/L (ATA)",
    "Hipotireoidismo clínico (TSH elevado com T4 livre baixo, ou TSH ≥ 10): levotiroxina ~1,6–2 mcg/kg/dia, TSH a cada 4 semanas até a metade da gestação e depois 1 vez por trimestre",
    "Hipotireoidismo subclínico (TSH acima da referência, T4 livre normal): pedir anti-TPO; considerar levotiroxina 25–50 mcg/dia sobretudo com anti-TPO positivo, conforme especialista; gestante eutireoidiana com anti-TPO positivo não precisa de levotiroxina (ver ficha Hipotireoidismo)",
    "Meta: TSH na metade inferior da faixa de referência do trimestre (em geral < 2,5)",
    "Pós-parto: voltar à dose pré-gestacional (ou suspender se iniciada só na gestação com dose baixa) e dosar TSH em 6 semanas",
    "TSH suprimido no 1º trimestre: diferenciar tireotoxicose gestacional transitória (hiperêmese, sem bócio/oftalmopatia, TRAb negativo — não usar antitireoidiano; betabloqueador se sintomas) de Graves (TRAb positivo)",
    "Graves: PTU no 1º trimestre; após 16 semanas, trocar por metimazol. Menor dose que mantenha T4 livre no limite superior do normal",
    "Graves (atual ou tratado com iodo/cirurgia): TRAb no início e com 18–22 semanas; TRAb > 3× o normal → vigilância fetal (FC e bócio fetal) no PNAR",
    "Tireoidite pós-parto (1–6 meses): fase tireotóxica só betabloqueador; fase hipotireoidea tratar se sintomas ou desejo de gestar"
  ],
  exames: [
    "Pedido: \"TSH, T4 livre, anticorpo anti-TPO.\"",
    "Suspeita de hipertireoidismo: \"TSH, T4 livre, T3 total, TRAb (anticorpo antirreceptor de TSH).\" Cintilografia e iodo radioativo são contraindicados",
    "Em PTU/metimazol: hemograma e TGO/TGP se sintomas; T4 livre a cada 2–4 semanas",
    "Rever valores com o trimestre (T4 total sobe ~1,5× no 2º/3º trimestre)"
  ],
  tratamento: [
    { droga: "Levotiroxina", linha: "l1", dose: "Clínico: 1,6–2 mcg/kg/dia; subclínico: 25–50 mcg/dia; já em uso: +25–30%", via: "VO", intervalo: "1×/dia em jejum (30–60 min antes do café)", duracao: "Gestação; reavaliar no pós-parto", monitorizacao: "TSH a cada 4 semanas até 20 semanas, depois por trimestre", contraindicacoes: "—", ajustes: "Separar 4 h de ferro e cálcio" },
    { droga: "Propiltiouracil (PTU) 100 mg", linha: "l1", dose: "50–150 mg (conforme T4 livre)", via: "VO", intervalo: "8/8 h", duracao: "1º trimestre; trocar para metimazol após", monitorizacao: "T4 livre 2–4 semanas; TGO/TGP", contraindicacoes: "Hepatotoxicidade prévia", ajustes: "Hepatotoxicidade grave: preferir só no 1º trimestre" },
    { droga: "Metimazol (tiamazol)", linha: "l1", dose: "5–15 mg/dia (conforme T4 livre)", via: "VO", intervalo: "1×/dia", duracao: "2º e 3º trimestres", monitorizacao: "T4 livre 2–4 semanas; hemograma se febre/dor de garganta", contraindicacoes: "1º trimestre (embriopatia: aplasia cútis, atresia de coanas/esôfago)", ajustes: "Conversão aproximada PTU:metimazol 20:1. Compatível com amamentação (até 20–30 mg/dia)" },
    { droga: "Propranolol", linha: "adj", dose: "10–40 mg", via: "VO", intervalo: "6/6 a 8/8 h", duracao: "Poucas semanas, até controle", monitorizacao: "FC", contraindicacoes: "Asma", ajustes: "Uso prolongado associado a RCF" }
  ],
  prescricao: {
    ambulatorial: "GESTANTE JÁ EM LEVOTIROXINA (ex.: 75 mcg/dia)\nUSO ORAL\n1. Levotiroxina sódica 75 mcg ---------------------- 1 caixa\n   Tomar 1 comprimido ao dia em jejum, 30 a 60 minutos antes do café; nos sábados e domingos tomar 2 comprimidos (aumento de cerca de 30%). Separar 4 horas do ferro e do cálcio.\n   TSH e T4 livre em 4 semanas.\n\nGRAVES NO 1º TRIMESTRE (com endocrinologista/PNAR)\n2. Propiltiouracil 100 mg ------------------------ 90 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas (ajustar pelo T4 livre). Suspender e procurar atendimento se febre, dor de garganta ou pele amarela.\n3. Propranolol 40 mg ----------------------------- 30 comprimidos\n   Tomar 1/2 comprimido de 8 em 8 horas se palpitações (por poucas semanas)."
  },
  orientacoesRetorno: [
    "Tome a levotiroxina todos os dias em jejum, sempre do mesmo jeito; não pare durante a gravidez",
    "Faça o TSH no prazo combinado; a dose costuma mudar na gestação e voltar depois do parto",
    "Com remédio para hipertireoidismo: procure atendimento já se tiver febre, dor de garganta ou olhos amarelos",
    "Após o parto, se tiver muito cansaço, palpitação, tristeza ou nervosismo, avise a equipe (pode ser tireoidite pós-parto)"
  ],
  encaminhar: [
    "PNAR/endocrinologia: hipertireoidismo (Graves), hipotireoidismo de difícil controle, nódulo ou câncer de tireoide, TRAb alto",
    "PS: suspeita de crise tireotóxica"
  ],
  fontes: [
    "American Thyroid Association — Guidelines for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum (2017; atualização 2026)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Protocolo: Doenças da tireoide na gestação (2021)",
    "Sociedade Brasileira de Endocrinologia e Metabologia — Consenso sobre hipotireoidismo e hipertireoidismo na gestação (2013/2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
