// Miomatose uterina
registrarFicha({
  id: "miomatose",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Miomatose uterina (leiomioma)",
  resumo: "Tumor benigno do músculo uterino, muito comum após os 30 anos. A maioria é assintomática e só precisa de acompanhamento. Sintomas: sangramento menstrual intenso, anemia, dor ou peso pélvico, compressão urinária/intestinal e infertilidade (mioma submucoso).",
  palavrasChave: "mioma miomatose leiomioma fibroma utero aumentado sangramento menstrual intenso menorragia submucoso intramural subseroso figo miomectomia histerectomia embolizacao acido tranexamico medroxiprogesterona diu levonorgestrel goserrelina analogo gnrh",
  critico: {
    tempo: "Anemia: tratar e encaminhar",
    texto: "Mioma assintomático não precisa de tratamento. Sangramento intenso com anemia: ferro, controle clínico do sangramento e encaminhamento à ginecologia."
  },
  alarmes: [
    "Sangramento intenso com instabilidade ou Hb muito baixa (PS)",
    "Crescimento rápido após a menopausa ou massa que cresce sem TH (suspeita de sarcoma)",
    "Retenção urinária, hidronefrose",
    "Dor aguda intensa com febre (degeneração, torção de mioma pediculado) ou mioma parido pelo colo",
    "Sangramento pós-menopausa (investigar endométrio; ver sangramento-pos-menopausa)"
  ],
  conduta: [
    "Confirmar com USG transvaginal (ou pélvica): número, tamanho e localização (classificação FIGO 0–8)",
    "Excluir gravidez e outras causas de sangramento (ver sangramento-uterino-anormal)",
    "Hemograma e ferritina se sangramento intenso; tratar anemia com ferro oral",
    "Assintomático: orientar e acompanhar com exame clínico anual; USG só se mudança de sintomas ou de tamanho uterino",
    "Sangramento: AINE e ácido tranexâmico na menstruação; hormonal (AMP, anticoncepcional combinado ou progestagênio; SIU-LNG se cavidade não distorcida)",
    "Mioma submucoso (FIGO 0–2) com sangramento ou infertilidade: encaminhar para histeroscopia",
    "Falha clínica, útero volumoso, compressão ou desejo de gestação com mioma relevante: ginecologia (miomectomia, histerectomia, embolização)",
    "Análogo de GnRH (gosserrelina, leuprorrelina) só como preparo pré-operatório, por até 3–6 meses, prescrito pelo especialista"
  ],
  exames: [
    "USG transvaginal: 'Ultrassonografia transvaginal — avaliação de miomatose: número, dimensões, localização (FIGO) e volume uterino'",
    "Hemograma completo e ferritina",
    "Beta-hCG se atraso ou sangramento irregular",
    "Rastreio de colo em dia (ver rastreio-cancer)"
  ],
  diferenciais: [
    "Adenomiose (útero globoso, dismenorreia intensa)",
    "Pólipo endometrial",
    "Gestação",
    "Massa anexial",
    "Leiomiossarcoma (raro; crescimento rápido, pós-menopausa)"
  ],
  tratamento: [
    {
      droga: "Ácido tranexâmico",
      linha: "l1",
      dose: "1 g (4 comprimidos de 250 mg ou 2 de 500 mg)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "Nos dias de maior fluxo, até 5 dias por ciclo",
      monitorizacao: "Volume do sangramento, Hb",
      contraindicacoes: "TEV atual ou prévio, trombofilia, uso associado de estrogênio (cautela)",
      ajustes: "Ajustar em insuficiência renal"
    },
    {
      droga: "Ibuprofeno",
      linha: "adj",
      dose: "400 mg",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "Durante a menstruação, até 5 dias",
      monitorizacao: "—",
      contraindicacoes: "Úlcera péptica, DRC, asma sensível a AINE",
      ajustes: "Reduz fluxo e dor"
    },
    {
      droga: "Acetato de medroxiprogesterona de depósito",
      linha: "l1",
      dose: "150 mg",
      via: "IM",
      intervalo: "A cada 3 meses",
      duracao: "Contínuo",
      monitorizacao: "Sangramento irregular nos primeiros meses, peso",
      contraindicacoes: "Câncer de mama atual, sangramento genital inexplicado",
      ajustes: "Alternativas: anticoncepcional combinado (se elegível), SIU-LNG (cavidade sem distorção), noretisterona ou desogestrel contínuo"
    },
    {
      droga: "Sulfato ferroso",
      linha: "adj",
      dose: "40–80 mg de ferro elementar",
      via: "VO",
      intervalo: "1 vez ao dia ou em dias alternados",
      duracao: "3 meses após normalizar Hb",
      monitorizacao: "Hb e ferritina em 4–8 semanas",
      contraindicacoes: "—",
      ajustes: "Tomar 30 min antes da refeição com fruta cítrica"
    }
  ],
  prescricao: {
    ambulatorial: "MIOMATOSE COM SANGRAMENTO MENSTRUAL INTENSO\nUSO ORAL\n1. Ácido tranexâmico 250 mg ----------------------- 60 comprimidos\n   Tomar 4 comprimidos (1 g) de 8 em 8 horas nos dias de maior fluxo, por até 5 dias a cada menstruação.\n2. Ibuprofeno 400 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, durante a menstruação (até 5 dias).\n3. Sulfato ferroso 40 mg de ferro elementar ------- 180 comprimidos\n   Tomar 2 comprimidos juntos 1 vez ao dia, 30 minutos antes do almoço, por 3 meses (se enjoo, em dias alternados).\n\nUSO INTRAMUSCULAR\n4. Acetato de medroxiprogesterona 150 mg/mL ------- 1 ampola\n   Aplicar 1 ampola IM profunda a cada 3 meses (1ª dose até o 7º dia da menstruação)."
  },
  orientacoesRetorno: [
    "Mioma é benigno e muito comum; quem não tem sintomas não precisa operar",
    "Os miomas costumam diminuir após a menopausa",
    "Voltar imediatamente se: sangramento muito forte (encharcar absorvente a cada hora), tontura, desmaio, dor forte com febre",
    "Anotar a quantidade de absorventes e dias de sangramento para avaliar o tratamento",
    "Retornar em 3 meses para avaliar sangramento e hemoglobina"
  ],
  encaminhar: [
    "Ginecologia: sangramento sem resposta ao tratamento clínico em 3–6 meses, anemia persistente, mioma submucoso, útero volumoso ou sintomas compressivos, infertilidade, desejo de cirurgia",
    "Ginecologia com prioridade: crescimento rápido, mioma após a menopausa ou dúvida de malignidade",
    "PS: sangramento agudo intenso com instabilidade"
  ],
  tabelas: [
    {
      titulo: "Classificação FIGO dos miomas",
      colunas: ["Tipo", "Localização"],
      linhas: [
        ["0", "Submucoso pediculado, intracavitário"],
        ["1", "Submucoso, < 50% intramural"],
        ["2", "Submucoso, ≥ 50% intramural"],
        ["3", "Intramural, contato com o endométrio"],
        ["4", "Intramural"],
        ["5", "Subseroso, ≥ 50% intramural"],
        ["6", "Subseroso, < 50% intramural"],
        ["7", "Subseroso pediculado"],
        ["8", "Outros (cervical, parasita)"]
      ],
      nota: "Tipos 0–2 se relacionam mais com sangramento e infertilidade e são abordados por histeroscopia."
    }
  ],
  fontes: [
    "FEBRASGO — Leiomioma uterino. Protocolos FEBRASGO (2021)",
    "FIGO — PALM-COEIN e classificação dos leiomiomas (Munro et al., 2011; revisão 2018)",
    "Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres (2016)",
    "ACOG Practice Bulletin nº 228 — Management of Symptomatic Uterine Leiomyomas (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
