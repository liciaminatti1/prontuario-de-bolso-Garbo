// Dismenorreia
registrarFicha({
  id: "dismenorreia",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Dismenorreia (cólica menstrual) primária e sinais de secundária",
  resumo: "Dor pélvica em cólica que começa pouco antes ou com a menstruação e dura 1–3 dias. Primária: sem doença pélvica, inicia 6–12 meses após a menarca. Secundária: causada por endometriose, adenomiose, mioma, DIP, DIU de cobre.",
  palavrasChave: "dismenorreia colica menstrual dor menstrual aine ibuprofeno naproxeno acido mefenamico anticoncepcional endometriose adenomiose mioma dor pelvica",
  critico: {
    tempo: "AINE no início da menstruação",
    texto: "Iniciar o AINE ao primeiro sinal da menstruação (ou 1–2 dias antes) e manter em horário fixo por 2–3 dias. Sem resposta a AINE + hormônio por 3–6 meses: investigar causa secundária."
  },
  alarmes: [
    "Dor intensa com atraso menstrual ou beta-hCG positivo (gravidez ectópica)",
    "Febre, corrimento purulento, dor à mobilização do colo (DIP)",
    "Dor súbita intensa unilateral com náuseas (torção ovariana, cisto roto)",
    "Dor que piora ao longo dos anos, dispareunia profunda, dor ao evacuar/urinar na menstruação (endometriose)",
    "Sangramento intenso associado, massa pélvica, útero aumentado",
    "Início após os 25 anos ou dor fora do período menstrual"
  ],
  conduta: [
    "Anamnese: idade de início, relação com a menstruação, duração, intensidade (escala 0–10), faltas à escola/trabalho, dispareunia, sintomas intestinais/urinários cíclicos, infertilidade, sangramento anormal, DIU",
    "Exame físico: abdome; exame pélvico se sexualmente ativa, sintomas atípicos ou falha de tratamento (adolescente típica sem alarmes pode iniciar tratamento sem exame especular)",
    "Teste de gravidez se atraso ou dúvida",
    "Calor local (bolsa morna), atividade física regular",
    "1ª linha: AINE em horário fixo por 2–3 dias, iniciando no começo do fluxo (ou 1–2 dias antes)",
    "Deseja contracepção ou falha do AINE: contraceptivo hormonal (combinado, de preferência contínuo; SIU-LNG; AMPD; implante)",
    "Reavaliar em 3 ciclos; sem melhora com AINE + hormônio por 3–6 meses → USG transvaginal e ginecologia (endometriose/adenomiose)"
  ],
  exames: [
    "Primária típica: nenhum exame necessário",
    "Suspeita de secundária ou falha terapêutica: \"Ultrassonografia pélvica transvaginal.\" (via abdominal em virgens)",
    "Suspeita de DIP: \"Hemograma. PCR. Teste rápido de gravidez. Pesquisa de clamídia e gonococo (se disponível). Testes rápidos de HIV e sífilis.\"",
    "USG normal não exclui endometriose (lesões peritoneais não aparecem)"
  ],
  diferenciais: [
    "Endometriose (dor progressiva, dispareunia profunda, disquezia, infertilidade)",
    "Adenomiose (útero aumentado e amolecido, fluxo intenso, > 35 anos)",
    "Mioma submucoso (sangramento intenso)",
    "Doença inflamatória pélvica",
    "DIU de cobre (aumento de cólica e fluxo)",
    "Gravidez ectópica, abortamento",
    "Síndrome do intestino irritável, cistite intersticial"
  ],
  tratamento: [
    {
      droga: "Ibuprofeno",
      linha: "l1",
      dose: "400 mg (até 600 mg)",
      via: "VO, com alimento",
      intervalo: "6/6 h a 8/8 h (máx. 2.400 mg/dia)",
      duracao: "2–3 dias por ciclo",
      monitorizacao: "Dor epigástrica",
      contraindicacoes: "Úlcera péptica ativa, sangramento digestivo, DRC, asma induzida por AINE, gravidez ≥ 20 semanas",
      ajustes: "Iniciar no 1º dia de fluxo ou 1–2 dias antes"
    },
    {
      droga: "Naproxeno",
      linha: "l1",
      dose: "500 mg na 1ª dose, depois 250 mg",
      via: "VO, com alimento",
      intervalo: "6/6 h a 8/8 h (máx. 1.250 mg no 1º dia e 1.000 mg/dia nos seguintes)",
      duracao: "2–3 dias por ciclo",
      monitorizacao: "Dor epigástrica",
      contraindicacoes: "As mesmas do ibuprofeno",
      ajustes: "—"
    },
    {
      droga: "Ácido mefenâmico",
      linha: "alt",
      dose: "500 mg na 1ª dose, depois 250–500 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "2–3 dias por ciclo",
      monitorizacao: "Diarreia, dor epigástrica",
      contraindicacoes: "As mesmas do ibuprofeno",
      ajustes: "Também reduz o volume do sangramento"
    },
    {
      droga: "Anticoncepcional combinado (levonorgestrel 0,15 mg + etinilestradiol 0,03 mg)",
      linha: "l1",
      dose: "1 comprimido ao dia",
      via: "VO",
      intervalo: "Uso contínuo (sem pausa) ou 21/7",
      duracao: "Contínuo",
      monitorizacao: "PA; critérios de elegibilidade OMS",
      contraindicacoes: "Categoria 4 do MEC (enxaqueca com aura, ≥ 35 anos fumante, TEV etc.)",
      ajustes: "Alternativas: SIU-LNG, AMPD 150 mg IM trimestral, implante, desogestrel"
    },
    {
      droga: "Dipirona / escopolamina",
      linha: "adj",
      dose: "Dipirona 500 mg–1 g · Butilescopolamina 10–20 mg",
      via: "VO",
      intervalo: "6/6 h a 8/8 h se dor",
      duracao: "Enquanto houver dor",
      monitorizacao: "—",
      contraindicacoes: "Dipirona: agranulocitose prévia. Escopolamina: glaucoma de ângulo fechado, retenção urinária",
      ajustes: "Uso comum no Brasil; menos evidência que AINE. Opção quando AINE é contraindicado"
    }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ibuprofeno 400 mg ---------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, com alimento, começando no 1º dia da menstruação (ou 1 dia antes), por 2 a 3 dias a cada ciclo.\n   OU Naproxeno 250 mg ----------------------------- 20 comprimidos\n   Tomar 2 comprimidos na 1ª dose e depois 1 comprimido de 8 em 8 horas, com alimento, por 2 a 3 dias a cada ciclo.\n2. Dipirona 500 mg ------------------------------ 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se ainda houver dor.\n\nSE DESEJA CONTRACEPÇÃO OU SEM RESPOSTA AO ANTI-INFLAMATÓRIO\n3. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg -- 3 cartelas\n   Tomar 1 comprimido ao dia, todos os dias, sem pausa entre as cartelas (pode haver pequenos escapes no início).\n\nMEDIDAS GERAIS\nBolsa de água morna no baixo ventre; atividade física regular."
  },
  orientacoesRetorno: [
    "Cólica menstrual é comum; o anti-inflamatório funciona melhor se tomado no começo da menstruação e em horário certo, não só quando a dor está forte",
    "Calor local e exercício físico regular ajudam",
    "Anotar a intensidade da dor e os dias de sangramento por 3 meses",
    "Procurar atendimento imediatamente se: dor muito forte com atraso menstrual, febre, desmaio, dor súbita de um lado só, vômitos",
    "Retornar em 3 meses ou antes se a dor não melhorar, piorar a cada mês, ou houver dor na relação, ao evacuar ou ao urinar"
  ],
  encaminhar: [
    "Ginecologia: suspeita de endometriose/adenomiose, falha de AINE + hormônio por 3–6 meses, massa pélvica, mioma com sintomas",
    "PS: suspeita de gravidez ectópica, torção ovariana, DIP grave"
  ],
  fontes: [
    "ACOG — Committee Opinion nº 760: Dysmenorrhea and endometriosis in the adolescent (2018, reafirmado)",
    "SOGC — Clinical Practice Guideline nº 345: Primary dysmenorrhea consensus guideline (2017)",
    "FEBRASGO — Protocolo: Dismenorreia (Protocolos FEBRASGO de Ginecologia)",
    "ESHRE — Guideline: Endometriosis (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
