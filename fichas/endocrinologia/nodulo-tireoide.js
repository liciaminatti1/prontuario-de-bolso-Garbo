// Nódulo de tireoide
registrarFicha({
  id: "nodulo-tireoide",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Nódulo de tireoide",
  resumo: "Nódulo tireoidiano palpável ou achado em exame de imagem. Sequência: TSH → ultrassonografia com classificação de risco (TI-RADS) → PAAF quando indicada pelo tamanho e pela classe → conduta pela categoria de Bethesda. A maioria é benigna.",
  palavrasChave: "nodulo tireoide tireoidiano bocio multinodular ultrassonografia ti-rads acr tirads ata paaf puncao aspirativa agulha fina bethesda carcinoma papilifero folicular medular calcitonina cintilografia nodulo quente tsh tireoidectomia lobectomia incidentaloma",
  alarmes: [
    "Crescimento rápido do nódulo ou massa cervical endurecida e fixa",
    "Rouquidão persistente (paralisia de corda vocal), disfagia, estridor ou dispneia",
    "Linfonodo cervical aumentado e endurecido",
    "Radiação em cabeça e pescoço na infância",
    "Família com carcinoma medular de tireoide ou MEN2; câncer de tireoide em parente de 1º grau",
    "Dor súbita com aumento do nódulo (hemorragia intranodular — geralmente benigna, mas avaliar via aérea)"
  ],
  conduta: [
    "Palpar tireoide e cadeias cervicais; perguntar sobre sintomas compressivos, radiação na infância e história familiar",
    "Pedir TSH para todos",
    "TSH baixo → cintilografia de tireoide: nódulo hipercaptante ('quente') quase nunca é maligno e não precisa de PAAF; tratar hipertireoidismo (ver hipertireoidismo)",
    "TSH normal ou alto → ultrassonografia de tireoide e cervical com classificação TI-RADS (ACR) ou padrão ATA",
    "Indicar PAAF guiada por USG pela classe e tamanho (tabela); linfonodo suspeito sempre punciona (com dosagem de tireoglobulina no lavado)",
    "Conduta pela categoria de Bethesda (tabela)",
    "Nódulo que não preenche critério de PAAF mas tem tamanho de seguimento: repetir USG no intervalo da tabela",
    "Nódulo benigno (Bethesda II): USG em 12–24 meses; nova PAAF se crescimento significativo (≥ 20% em 2 dimensões, com aumento mínimo de 2 mm, ou > 50% do volume) ou nova característica suspeita",
    "Não tratar nódulo benigno com levotiroxina (supressão de TSH não é recomendada)",
    "Microcarcinoma papilífero (< 1 cm) sem invasão nem linfonodo: vigilância ativa é opção, decidida com o especialista",
    "Achado incidental em PET-CT com captação focal: USG e geralmente PAAF (risco maior)",
    "Gestante: TSH e USG; PAAF pode ser feita; cintilografia é contraindicada"
  ],
  exames: [
    "Pedido: 'TSH. Ultrassonografia de tireoide e regiões cervicais com Doppler, com classificação ACR TI-RADS de cada nódulo e avaliação de linfonodos. Indicação: nódulo tireoidiano.'",
    "T4 livre se TSH alterado; anti-TPO se TSH alto",
    "Cintilografia de tireoide (tecnécio ou iodo-123) só se TSH baixo",
    "PAAF guiada por USG: 'Punção aspirativa por agulha fina de nódulo tireoidiano guiada por ultrassonografia — nódulo ___ cm, TI-RADS ___, lobo ___. Laudo pelo sistema Bethesda.'",
    "Calcitonina: não de rotina; considerar se história familiar de carcinoma medular/MEN2 ou citologia sugestiva (especialista)",
    "Tireoglobulina sérica NÃO serve para diagnóstico de nódulo"
  ],
  diferenciais: [
    "Bócio multinodular (vários nódulos; avaliar cada um pelos critérios)",
    "Cisto simples ou nódulo espongiforme (benignos)",
    "Tireoidite de Hashimoto com pseudonódulos",
    "Linfonodo, cisto do ducto tireoglosso, cisto branquial, paratireoide",
    "Linfoma de tireoide (crescimento rápido em Hashimoto, idoso)"
  ],
  tabelas: [
    {
      titulo: "ACR TI-RADS (2017): quando puncionar e quando seguir",
      colunas: ["Classe", "Risco", "PAAF se", "Seguimento com USG se"],
      linhas: [
        ["TR1 (0 pontos)", "Benigno", "Não puncionar", "Não precisa"],
        ["TR2 (2 pontos)", "Não suspeito", "Não puncionar", "Não precisa"],
        ["TR3 (3 pontos)", "Levemente suspeito", "≥ 2,5 cm", "≥ 1,5 cm (USG em 1, 3 e 5 anos)"],
        ["TR4 (4–6 pontos)", "Moderadamente suspeito", "≥ 1,5 cm", "≥ 1,0 cm (USG em 1, 2, 3 e 5 anos)"],
        ["TR5 (≥ 7 pontos)", "Altamente suspeito", "≥ 1,0 cm", "≥ 0,5 cm (USG anual por até 5 anos)"]
      ],
      nota: "Pontos por composição, ecogenicidade, forma (mais alto que largo), margens e focos ecogênicos (microcalcificações). Pela ATA 2015: padrão de alta e intermediária suspeição → PAAF ≥ 1 cm; baixa suspeição ≥ 1,5 cm; muito baixa ≥ 2 cm ou observar; cisto puro → sem PAAF."
    },
    {
      titulo: "Sistema Bethesda (citologia) e conduta",
      colunas: ["Categoria", "Significado", "Conduta habitual"],
      linhas: [
        ["I", "Não diagnóstica", "Repetir PAAF guiada por USG; se repetidamente não diagnóstica, cirurgia ou seguimento conforme suspeição na USG"],
        ["II", "Benigna", "Seguimento com USG (12–24 meses)"],
        ["III", "Atipia de significado indeterminado (AUS)", "Repetir PAAF, teste molecular (se disponível), lobectomia diagnóstica ou vigilância, conforme USG e decisão compartilhada"],
        ["IV", "Neoplasia folicular", "Lobectomia diagnóstica (ou teste molecular)"],
        ["V", "Suspeita de malignidade", "Cirurgia (cirurgião de cabeça e pescoço)"],
        ["VI", "Maligna", "Cirurgia; extensão e iodo radioativo conforme estadiamento (especialista)"]
      ],
      nota: "O risco de malignidade aumenta de I/II para VI; Bethesda 2023 (3ª edição) unificou a categoria III como AUS."
    }
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — NÓDULO DE TIREOIDE\n- TSH (e T4 livre).\n- Ultrassonografia de tireoide e cervical com Doppler. Indicação: nódulo tireoidiano palpável/incidental. Solicito classificação ACR TI-RADS e medidas de cada nódulo e avaliação de linfonodos cervicais.\n\nSE TSH BAIXO\n- Cintilografia de tireoide com captação.\n\nSE INDICADA PUNÇÃO\n- Punção aspirativa por agulha fina guiada por ultrassonografia do nódulo ___ (lobo ___, ___ cm, TI-RADS ___). Laudo citológico pelo sistema Bethesda.\n\nENCAMINHAMENTO\nEndocrinologia / cirurgia de cabeça e pescoço: nódulo ___ cm, TI-RADS ___, Bethesda ___. Sintomas compressivos: ___."
  },
  orientacoesRetorno: [
    "A grande maioria dos nódulos de tireoide é benigna; o exame de ultrassom e, às vezes, a punção servem para separar os poucos que precisam de cirurgia",
    "A punção é feita com agulha fina, no consultório, com pouco desconforto",
    "Não é preciso tomar remédio para nódulo benigno; fazer os ultrassons de controle nas datas marcadas",
    "Voltar antes se o caroço crescer rápido, aparecer rouquidão, dificuldade para engolir ou respirar, ou caroços no pescoço"
  ],
  encaminhar: [
    "Endocrinologia: Bethesda III a VI, nódulo com TSH baixo, bócio volumoso, dúvida no laudo",
    "Cirurgia de cabeça e pescoço: Bethesda V e VI, IV (lobectomia), bócio com compressão",
    "Urgência: estridor, dispneia ou crescimento súbito com comprometimento de via aérea",
    "Gestante com nódulo suspeito: endocrinologia com prioridade (ver tireoide-gestacao)"
  ],
  fontes: [
    "ATA — Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer (Thyroid, 2015) e ATA Management Guidelines for Adult Patients with Differentiated Thyroid Cancer (Thyroid, 2025)",
    "ACR — Thyroid Imaging, Reporting and Data System (TI-RADS) White Paper (J Am Coll Radiol, 2017)",
    "The 2023 Bethesda System for Reporting Thyroid Cytopathology, 3ª ed. (Thyroid, 2023)",
    "SBEM — Consenso brasileiro sobre nódulos tireoidianos e câncer diferenciado de tireoide (Arq Bras Endocrinol Metab, 2013)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
