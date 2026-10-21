// Candidíase cutânea e intertrigo
registrarFicha({
  id: "candidiase-cutanea",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Candidíase cutânea e intertrigo",
  resumo: "Intertrigo: inflamação das dobras por atrito, calor e umidade. Candidíase: eritema vivo, úmido, macerado, com fissura no fundo da dobra e pápulas ou pústulas satélites. Também paroníquia crônica e erosão interdigital das mãos.",
  palavrasChave: "intertrigo candidiase cutanea dobras submamaria inguinal axilar obesidade diabetes miconazol nistatina fluconazol erosao interdigital paroniquia",
  alarmes: [
    "Febre, celulite ao redor ou dor intensa",
    "Candidíase extensa, recorrente ou refratária (investigar diabetes, HIV, uso de corticoide ou imunossupressor)",
    "Placa que não responde ao antifúngico, com borda descamativa e clareamento central (pensar em tinea) ou placa vermelha brilhante sem satélites (psoríase invertida, eritrasma)",
    "Lesão crônica, endurecida ou ulcerada na dobra (excluir neoplasia, como doença de Paget extramamária)"
  ],
  conduta: [
    "Confirmar o padrão: satélites e fissura no fundo da dobra favorecem Candida; borda ativa descamativa favorece tinea",
    "Controlar umidade e atrito: secar bem após o banho, separar a dobra com tecido de algodão ou gaze, roupas leves",
    "Antifúngico tópico azólico (miconazol) ou nistatina 2 vezes ao dia até 1–2 semanas após a cura",
    "Inflamação intensa: hidrocortisona 1% creme por poucos dias associada ao antifúngico",
    "Extensa, recorrente ou em imunossuprimido: fluconazol oral (adulto)",
    "Investigar e controlar fatores: diabetes (glicemia/HbA1c), obesidade, antibiótico recente, corticoide, incontinência",
    "Paroníquia crônica e erosão interdigital: evitar contato prolongado com água e detergentes (luvas com forro de algodão)"
  ],
  diferenciais: [
    "Tinea cruris/corporis (borda ativa, descamação, clareamento central; poupa o escroto)",
    "Eritrasma (placa marrom-avermelhada, sem satélites; fluorescência vermelho-coral na luz de Wood)",
    "Psoríase invertida (placa vermelha brilhante bem delimitada, sem descamação na dobra)",
    "Dermatite seborreica",
    "Dermatite de contato irritativa ou alérgica"
  ],
  exames: [
    "Diagnóstico clínico na maioria",
    "Exame micológico direto (raspado): dúvida diagnóstica ou falha terapêutica",
    "Glicemia de jejum e/ou HbA1c: candidíase recorrente ou extensa em adulto",
    "Teste rápido/sorologia para HIV: candidíase extensa ou recorrente sem causa aparente"
  ],
  tratamento: [
    {
      droga: "Miconazol 2% creme",
      linha: "l1",
      dose: "Fina camada na lesão e 1–2 cm ao redor",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "Até 1–2 semanas após a cura clínica (em geral 2 a 4 semanas)",
      monitorizacao: "Melhora em 1 semana",
      contraindicacoes: "Hipersensibilidade a azólicos",
      ajustes: "Adulto e criança: mesma posologia. Seguro na gestação (absorção mínima)"
    },
    {
      droga: "Nistatina 100.000 UI/g creme",
      linha: "alt",
      dose: "Fina camada",
      via: "Tópica",
      intervalo: "2 a 3 vezes ao dia",
      duracao: "Até 1–2 semanas após a cura",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ativa só contra Candida (não trata tinea)"
    },
    {
      droga: "Hidrocortisona (acetato) 1% creme",
      linha: "adj",
      dose: "Fina camada antes do antifúngico",
      via: "Tópica",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Até 5–7 dias",
      monitorizacao: "Atrofia em dobras",
      contraindicacoes: "Uso prolongado em dobras",
      ajustes: "Só baixa potência nas dobras. Disponível no SUS"
    },
    {
      droga: "Fluconazol",
      linha: "alt",
      dose: "Adulto: 150 mg",
      via: "VO",
      intervalo: "1 vez por semana",
      duracao: "2 a 4 semanas",
      monitorizacao: "Interações (varfarina, sulfonilureias, estatinas, drogas que prolongam QT)",
      contraindicacoes: "Gestação (evitar azólico oral); uso de cisaprida",
      ajustes: "Reservado a doença extensa, recorrente ou refratária. Criança: preferir tópico; se oral necessário, discutir com pediatra/dermatologista. DRC: ver bula"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO E CRIANÇA\nUSO TÓPICO\n1. Miconazol 2% creme ---------------------------------------- 2 bisnagas\n   Após o banho e com a pele bem seca, aplicar fina camada nas dobras afetadas e 1 a 2 cm ao redor, 2 vezes ao dia, até 2 semanas depois de a pele ficar normal.\n\nSE MUITO INFLAMADO (baixa potência, curto prazo)\n2. Acetato de hidrocortisona 1% creme -------------------------- 1 bisnaga\n   Aplicar fina camada nas áreas muito vermelhas, 2 vezes ao dia, por até 5 dias, antes do creme antifúngico.\n\nCUIDADOS\n3. Manter a dobra seca: secar com toalha sem esfregar, separar a dobra com tecido de algodão ou gaze limpa trocada várias vezes ao dia.\n\nADULTO — CANDIDÍASE EXTENSA, RECORRENTE OU REFRATÁRIA\nUSO ORAL\n4. Fluconazol 150 mg ------------------------------------------- 4 cápsulas\n   Tomar 1 cápsula 1 vez por semana, por 2 a 4 semanas. (Não usar na gestação.)\n\nCRIANÇA: tratamento tópico com a mesma posologia (itens 1 a 3). Tratamento oral em criança só após discussão com pediatra/dermatologista."
  },
  orientacoesRetorno: [
    "Secar bem as dobras após o banho e o suor; usar roupas de algodão e mais folgadas",
    "Continuar o creme por 2 semanas depois que a pele melhorar, para não voltar",
    "Não usar pomadas com corticoide forte por conta própria (pioram fungo)",
    "Se tiver diabetes, o controle da glicemia ajuda a curar e evita a volta",
    "Voltar se houver febre, dor forte, vermelhidão espalhando ou feridas com pus",
    "Retornar em 2–4 semanas se não melhorar"
  ],
  encaminhar: [
    "Dermatologia: falha após 4 semanas de tratamento correto, dúvida diagnóstica (psoríase invertida, eritrasma), lesão crônica suspeita de neoplasia",
    "Clínica/infectologia: candidíase extensa ou recorrente com suspeita de imunossupressão"
  ],
  fontes: [
    "IDSA — Clinical Practice Guideline for the Management of Candidiasis: 2016 Update (Pappas et al., 2016)",
    "Ministério da Saúde — RENAME 2024 (nitrato de miconazol 2% creme, acetato de hidrocortisona 1% creme, fluconazol)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II: Queixas comuns no cuidado à demanda espontânea (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
