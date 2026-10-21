// Teníase (e orientação sobre cisticercose)
registrarFicha({
  id: "teniase",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Teníase (solitária) e orientação sobre cisticercose",
  resumo: "Infecção intestinal pela forma adulta da Taenia solium (porco) ou Taenia saginata (boi), adquirida ao comer carne crua ou malpassada. Quem tem T. solium pode transmitir ovos e causar cisticercose (inclusive neurocisticercose) em si e nos outros.",
  palavrasChave: "teniase tenia solitaria taenia solium taenia saginata cisticercose neurocisticercose proglotes praziquantel niclosamida albendazol carne de porco crua",
  critico: {
    tempo: "Convulsão nova: pensar em neurocisticercose",
    texto: "Em área endêmica, crise convulsiva de início recente em adulto jovem sugere neurocisticercose: tomografia de crânio antes de qualquer cisticida. Não tratar com praziquantel em dose alta sem imagem."
  },
  alarmes: [
    "Crise convulsiva, cefaleia progressiva, hipertensão intracraniana ou déficit focal (neurocisticercose)",
    "Nódulos subcutâneos ou musculares, alteração visual (cisticercose extraneural)",
    "Dor abdominal intensa, vômitos (raro: obstrução, apendicite por proglotes)",
    "Manipuladores de alimentos com T. solium (risco de transmissão de ovos a outros)"
  ],
  conduta: [
    "Diagnóstico: eliminação de proglotes (pedaços brancos, achatados, móveis) nas fezes ou na roupa; EPF com ovos de Taenia (não diferencia a espécie)",
    "Tratar com praziquantel em dose única baixa (5–10 mg/kg) ou niclosamida; albendazol é alternativa",
    "Antes do praziquantel, perguntar sobre convulsões, cefaleia e nódulos: se houver suspeita de neurocisticercose, pedir TC de crânio e não tratar na UBS sem avaliação (o praziquantel pode desencadear inflamação e crises)",
    "Controle de cura: EPF/pesquisa de proglotes 1 e 3 meses após o tratamento",
    "Orientar higiene das mãos e sanitária para evitar cisticercose em si e nos contactantes; avaliar moradores da casa",
    "Teníase e cisticercose não são de notificação compulsória nacional; neurocisticercose é de notificação em alguns estados/municípios — conferir a regra local"
  ],
  exames: [
    "Parasitológico de fezes (3 amostras) e tamisação para pesquisa de proglotes",
    "Neurocisticercose suspeita (convulsão, cefaleia, sinais focais): TC de crânio (calcificações, cistos com escólex) e/ou RM; sorologia (Western blot) em serviço de referência",
    "Hemograma: eosinofilia é inconstante"
  ],
  diferenciais: [
    "Outras helmintíases (Diphyllobothrium em quem come peixe cru, Hymenolepis nana em crianças)",
    "Eliminação de restos alimentares confundidos com proglotes",
    "Convulsão de outras causas (epilepsia, tumor, AVC) quando se suspeita de neurocisticercose"
  ],
  tratamento: [
    {
      droga: "Praziquantel",
      linha: "l1",
      dose: "5–10 mg/kg (adulto: em geral 600 mg) — criança ≥ 4 anos e adulto",
      via: "VO, após refeição, com água",
      intervalo: "Dose única",
      duracao: "Dose única",
      monitorizacao: "Cefaleia, tontura, dor abdominal (leves e transitórias)",
      contraindicacoes: "Cisticercose ocular; suspeita de neurocisticercose sem avaliação; uso com rifampicina (reduz níveis)",
      ajustes: "Na RENAME (comprimido 600 mg). Gestação: adiar para após o parto se possível. Lactação: suspender amamentação por 72 h (conforme bula)"
    },
    {
      droga: "Niclosamida",
      linha: "alt",
      dose: "Adulto: 2 g. Criança: 50 mg/kg (máx 2 g)",
      via: "VO, mastigar bem os comprimidos em jejum",
      intervalo: "Dose única",
      duracao: "Dose única",
      monitorizacao: "Náusea",
      contraindicacoes: "—",
      ajustes: "Não é absorvida e não atua na cisticercose; disponibilidade limitada no Brasil"
    },
    {
      droga: "Albendazol",
      linha: "alt",
      dose: "400 mg (criança ≥ 2 anos e adulto)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "3 dias",
      monitorizacao: "—",
      contraindicacoes: "1º trimestre da gestação",
      ajustes: "Na RENAME. Menor taxa de cura que o praziquantel na teníase"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO (sem sinais de neurocisticercose)\nUSO ORAL\n1. Praziquantel 600 mg ------------------------------ 1 comprimido\n   Tomar 1 comprimido (5 a 10 mg/kg) após uma refeição, em dose única.\n   ALTERNATIVA: Albendazol 400 mg ------------------- 3 comprimidos\n   Tomar 1 comprimido por dia por 3 dias.\n\nCRIANÇA (peso: ___ kg)\n1. Praziquantel 600 mg (≥ 4 anos): ___ mg (5 a 10 mg/kg), partindo o comprimido, em dose única após refeição.\n   OU Albendazol suspensão 40 mg/mL (≥ 2 anos): 10 mL (400 mg) 1 vez ao dia por 3 dias.\n\nORIENTAÇÕES\n- Comer carne de porco e de boi sempre bem cozida (sem partes rosadas).\n- Lavar as mãos após usar o banheiro e antes de preparar alimentos.\n- Lavar bem frutas e verduras; beber água filtrada ou fervida.\n- Usar sempre o vaso sanitário; não evacuar no solo."
  },
  orientacoesRetorno: [
    "Após o remédio, a tênia pode sair inteira ou em pedaços nas fezes nos dias seguintes",
    "Quem tem a tênia do porco pode passar ovos pelas mãos e causar cisticercose em si mesmo e em familiares: lavar as mãos é essencial",
    "Voltar imediatamente se: convulsão, dor de cabeça forte e persistente, vômitos, alteração da visão, fraqueza em um lado do corpo",
    "Retorno com exame de fezes 1 e 3 meses após o tratamento; voltar antes se continuar eliminando pedaços"
  ],
  encaminhar: [
    "PS: crise convulsiva ou sinais de hipertensão intracraniana",
    "Neurologia/infectologia: neurocisticercose confirmada ou suspeita (tratamento com albendazol/praziquantel em dose cisticida + corticoide é decisão especializada)",
    "Oftalmologia: suspeita de cisticercose ocular"
  ],
  fontes: [
    "Ministério da Saúde — Doenças Infecciosas e Parasitárias: Guia de Bolso, 8ª ed. (2010)",
    "OMS — Taeniasis/cysticercosis: fact sheet (2022) e WHO guidelines on management of Taenia solium neurocysticercosis (2021)",
    "IDSA/ASTMH — Clinical Practice Guidelines for the Diagnosis and Treatment of Neurocysticercosis (2017)",
    "SBP — Guia Prático de Atualização nº 7: Parasitoses intestinais (2020)",
    "Bula de praziquantel aprovada pela Anvisa; RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
