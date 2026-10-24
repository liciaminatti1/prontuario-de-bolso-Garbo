// Nódulo mamário: avaliação, BI-RADS e encaminhamento
registrarFicha({
  id: "nodulo-mamario",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Nódulo mamário e laudo BI-RADS",
  resumo: "Avaliação de nódulo palpável, descarga papilar ou alteração da mama na UBS: exame clínico, imagem adequada à idade (USG antes dos 30–35 anos; mamografia diagnóstica + USG depois), conduta por categoria BI-RADS e encaminhamento à mastologia.",
  palavrasChave: "nodulo mamario caroco na mama massa mamaria bi rads birads mamografia diagnostica ultrassom de mama fibroadenoma cisto mamario descarga papilar mastologia biopsia core puncao paaf cancer de mama retracao mamilo",
  critico: {
    tempo: "BI-RADS 4/5: biópsia em 30 dias",
    texto: "BI-RADS 4 ou 5, ou nódulo clinicamente suspeito mesmo com imagem normal: encaminhar com prioridade para biópsia. Lei 13.896/2019: exames diagnósticos em até 30 dias na suspeita de câncer."
  },
  alarmes: [
    "Nódulo endurecido, irregular, fixo, indolor ou crescente",
    "Retração de pele ou de mamilo, pele em casca de laranja, eczema ou ulceração do mamilo (Paget)",
    "Linfonodo axilar ou supraclavicular endurecido",
    "Descarga papilar espontânea, unilateral, de um único ducto, sanguinolenta ou cristalina",
    "Nódulo em homem, mama inflamada sem resposta a antibiótico (carcinoma inflamatório)"
  ],
  conduta: [
    "Anamnese: tempo, crescimento, relação com o ciclo, dor, descarga; idade, história familiar (mama/ovário, homem com câncer de mama), TH, radioterapia torácica prévia",
    "Exame clínico das duas mamas, axilas e fossas supraclaviculares; descrever tamanho, consistência, mobilidade, localização (quadrante/horas e distância do mamilo)",
    "< 30–35 anos: USG de mamas como 1º exame; ≥ 35–40 anos: mamografia diagnóstica + USG",
    "Gestante ou lactante: USG primeiro",
    "Conduzir pela categoria BI-RADS do laudo (tabela)",
    "Exame clínico suspeito com imagem normal ou BI-RADS 1–3: encaminhar mesmo assim (a clínica prevalece)",
    "Cisto simples sintomático: pode ser puncionado pela mastologia; assintomático não precisa de conduta",
    "Descarga papilar só à expressão, bilateral, multiductal, leitosa ou esverdeada: benigna; investigar prolactina se galactorreia",
    "Mastalgia sem nódulo: ver mastalgia"
  ],
  exames: [
    "'Mamografia bilateral diagnóstica — nódulo palpável em mama ___, quadrante ___, ___ cm'",
    "'Ultrassonografia de mamas e axilas — nódulo palpável em mama ___, quadrante ___'",
    "Prolactina e TSH se galactorreia",
    "Biópsia (core biopsy/PAAF guiada) pela mastologia ou serviço de diagnóstico"
  ],
  diferenciais: [
    "Fibroadenoma (jovem, móvel, elástico)",
    "Cisto (flutuante, varia com o ciclo)",
    "Alteração fibrocística / tecido glandular nodular",
    "Necrose gordurosa (trauma, cirurgia)",
    "Abscesso, galactocele (lactante; ver mastite)",
    "Carcinoma de mama, tumor filoides (crescimento rápido)"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO DE EXAMES — NÓDULO MAMÁRIO\n1. Ultrassonografia de mamas e axilas.\n   Indicação: nódulo palpável em mama ___ (direita/esquerda), quadrante ___, cerca de ___ cm, há ___ meses. Idade: ___.\n2. Mamografia bilateral diagnóstica (se ≥ 35–40 anos).\n   Indicação: idem. Última mamografia: ___.\n\nENCAMINHAMENTO\n3. Encaminho à mastologia — prioridade: ___. Motivo: ___ (BI-RADS ___ / nódulo clinicamente suspeito / descarga papilar suspeita)."
  },
  orientacoesRetorno: [
    "A maioria dos nódulos da mama é benigna, principalmente em mulheres jovens",
    "Fazer os exames o quanto antes e trazer o laudo para consulta",
    "Se for encaminhada para biópsia, não deixe de ir: o diagnóstico precoce muda o tratamento",
    "Voltar antes se o nódulo crescer rápido, a pele mudar, o mamilo repuxar ou sair sangue pelo mamilo",
    "Conhecer o próprio corpo: observar e apalpar as mamas no dia a dia, sem técnica obrigatória"
  ],
  encaminhar: [
    "Mastologia com prioridade (biópsia): BI-RADS 4 ou 5; nódulo clinicamente suspeito; descarga papilar suspeita; Paget; linfonodo suspeito; nódulo em homem",
    "Mastologia eletiva: BI-RADS 3 que cresce ou muda no controle; nódulo benigno sintomático ou crescente; cisto sintomático recorrente",
    "Genética/mastologia: alto risco familiar (BRCA suspeito)"
  ],
  tabelas: [
    {
      titulo: "Conduta por categoria BI-RADS (ACR 5ª ed.)",
      colunas: ["Categoria", "Significado", "Conduta na UBS"],
      linhas: [
        ["0", "Incompleto", "Complementar (USG, incidências adicionais ou comparar com exames anteriores)"],
        ["1", "Negativo", "Rotina para a idade (se clínica não suspeita)"],
        ["2", "Achado benigno", "Rotina para a idade"],
        ["3", "Provavelmente benigno (risco ≤ 2%)", "Controle em 6 meses; depois 6 e 12 meses (2–3 anos no total). Mudança → biópsia"],
        ["4 (A, B, C)", "Suspeito (risco > 2% a < 95%)", "Encaminhar para biópsia com prioridade"],
        ["5", "Altamente sugestivo de malignidade (≥ 95%)", "Encaminhar para biópsia com prioridade máxima"],
        ["6", "Câncer comprovado por biópsia", "Garantir acesso ao tratamento oncológico (Lei 12.732/2012: até 60 dias)"]
      ],
      nota: "Nódulo palpável com BI-RADS 3 pode ser encaminhado à mastologia conforme protocolo local. Exame clínico suspeito sempre prevalece sobre imagem tranquilizadora."
    }
  ],
  fontes: [
    "INCA/Ministério da Saúde — Parâmetros técnicos para detecção precoce do câncer de mama (2022) e Diretrizes para a detecção precoce do câncer de mama (2015)",
    "Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres (2016)",
    "American College of Radiology — BI-RADS Atlas, 5ª ed. (2013)",
    "Brasil — Lei nº 13.896/2019 (30 dias para exames diagnósticos) e Lei nº 12.732/2012 (60 dias para início do tratamento)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
