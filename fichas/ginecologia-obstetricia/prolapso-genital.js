// Prolapso genital (prolapso de órgãos pélvicos)
registrarFicha({
  id: "prolapso-genital",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Prolapso genital (bexiga caída, útero caído)",
  resumo: "Descida da parede vaginal anterior (cistocele), posterior (retocele), útero ou cúpula vaginal. Sensação de bola na vagina e peso pélvico, piora no fim do dia. Tratar só se houver sintomas: fisioterapia do assoalho pélvico, pessário ou cirurgia.",
  palavrasChave: "prolapso genital prolapso uterino prolapso de orgaos pelvicos cistocele retocele enterocele prolapso de cupula bexiga caida utero caido bola na vagina pessario fisioterapia assoalho pelvico pop q colpoperineoplastia",
  alarmes: [
    "Retenção urinária ou resíduo pós-miccional alto, hidronefrose",
    "Úlcera ou sangramento no colo/parede prolapsada (descartar câncer)",
    "Prolapso encarcerado, que não reduz, com dor ou edema",
    "ITU de repetição associada"
  ],
  conduta: [
    "Perguntar: sensação de bola ou peso, necessidade de empurrar a bola para urinar ou evacuar (digitação), incontinência, constipação, dispareunia",
    "Exame em posição ginecológica com manobra de Valsalva (e em pé se não aparecer): qual compartimento e até onde desce em relação ao hímen (POP-Q simplificado)",
    "Avaliar resíduo pós-miccional se dificuldade para urinar; urina tipo 1 e urocultura se sintomas",
    "Assintomático ou leve: orientar, não precisa tratar",
    "Sintomático: treinamento dos músculos do assoalho pélvico (fisioterapia pélvica) por pelo menos 3 meses; controle de peso, tosse crônica e constipação; evitar esforço/peso",
    "Atrofia genital: estriol creme vaginal (melhora tecido e tolerância ao pessário)",
    "Pessário: boa opção para quem não quer ou não pode operar (colocação e seguimento pela ginecologia)",
    "Prolapso além do hímen, sintomas importantes ou falha conservadora: ginecologia/uroginecologia para cirurgia"
  ],
  exames: [
    "Urina tipo 1 e urocultura se sintomas urinários",
    "Ultrassonografia de rins e vias urinárias com resíduo pós-miccional se retenção ou prolapso avançado",
    "Rastreio de colo em dia (ver rastreio-cancer)"
  ],
  diferenciais: [
    "Pólipo cervical ou mioma parido",
    "Cisto de parede vaginal (Gartner) ou de glândula de Skene",
    "Divertículo uretral",
    "Câncer de colo ou de vagina (lesão endurecida, ulcerada)"
  ],
  prescricao: {
    ambulatorial: "PROLAPSO GENITAL SINTOMÁTICO\n1. Encaminhamento para fisioterapia pélvica: treinamento dos músculos do assoalho pélvico (prolapso de ___ compartimento, grau ___).\n\nSE ATROFIA GENITAL (pós-menopausa)\nUSO VAGINAL\n2. Estriol 1 mg/g creme vaginal -------------------- 1 bisnaga\n   Aplicar 0,5 g (meio aplicador) dentro da vagina à noite, todos os dias por 3 semanas; depois 2 vezes por semana.\n\nSE CONSTIPAÇÃO\nUSO ORAL\n3. Psyllium (ou fibras) ---------------------------- 1 frasco\n   Tomar 1 colher de sopa diluída em 200 mL de água 1 a 2 vezes ao dia, com bastante líquido."
  },
  orientacoesRetorno: [
    "Prolapso não é perigoso para a vida; o tratamento é para melhorar o incômodo",
    "Fazer os exercícios do assoalho pélvico todos os dias, como ensinado: o resultado aparece após 3 meses",
    "Evitar carregar peso, tratar prisão de ventre e tosse; perder peso ajuda",
    "Voltar imediatamente se: não conseguir urinar, a bola não voltar para dentro com dor, ou sangramento na parte exteriorizada",
    "Quem usa pessário deve retirar/limpar e fazer revisão na data marcada"
  ],
  encaminhar: [
    "Fisioterapia pélvica: prolapso sintomático",
    "Ginecologia/uroginecologia: prolapso além do hímen, sintomático após 3 meses de conservador, desejo de pessário ou cirurgia, incontinência associada",
    "Ginecologia com prioridade: retenção urinária, hidronefrose, úlcera que não cicatriza"
  ],
  tabelas: [
    {
      titulo: "Estadiamento POP-Q (simplificado)",
      colunas: ["Estágio", "Ponto de maior prolapso"],
      linhas: [
        ["0", "Sem prolapso"],
        ["I", "Mais de 1 cm acima do hímen"],
        ["II", "Entre 1 cm acima e 1 cm abaixo do hímen"],
        ["III", "Mais de 1 cm abaixo do hímen, sem eversão total"],
        ["IV", "Eversão completa (procidência)"]
      ],
      nota: "Sintomas costumam aparecer quando o prolapso chega ao hímen ou o ultrapassa."
    }
  ],
  fontes: [
    "FEBRASGO — Prolapso genital. Protocolos FEBRASGO (2021)",
    "NICE NG123 — Urinary incontinence and pelvic organ prolapse in women: management (2019)",
    "International Continence Society / IUGA — terminologia POP-Q (Bump et al., 1996; Haylen et al., 2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
