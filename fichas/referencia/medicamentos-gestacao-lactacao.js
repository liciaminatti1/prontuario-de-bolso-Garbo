// Medicamentos na gestação e na lactação
registrarFicha({
  id: "medicamentos-gestacao-lactacao",
  especialidade: "referencia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Medicamentos na gestação e na amamentação",
  resumo: "Referência rápida: como interpretar as categorias de risco, opções preferidas por problema (dor, febre, náusea, infecção, hipertensão) e medicamentos a evitar na gestação e na lactação.",
  palavrasChave: "medicamentos gestacao lactacao amamentacao categoria de risco fda anvisa abcdx teratogenico seguro gravidez paracetamol dipirona ibuprofeno aine antibiotico metildopa nifedipino ieca isotretinoina valproato varfarina lactmed e-lactancia",
  critico: {
    tempo: "Na dúvida, consulte a base",
    texto: "Antes de prescrever, confira em fonte atualizada (LactMed, e-lactancia.org, manual do MS). Quase todos os medicamentos são compatíveis com amamentação: suspender o aleitamento raramente é necessário."
  },
  alarmes: [
    "Mulher em idade fértil em uso de teratogênico (isotretinoína, valproato, metotrexato, varfarina, IECA/BRA, talidomida): garantir contracepção eficaz",
    "Gestante exposta a teratogênico no 1º trimestre: suspender/trocar e encaminhar ao PNAR (aconselhamento; SIAT se disponível)",
    "Lactente sonolento, com dificuldade de sucção ou respiração lenta com mãe em opioide ou benzodiazepínico"
  ],
  conduta: [
    "Categorias de letra (A, B, C, D, X) ainda aparecem nas bulas brasileiras (ANVISA), mas o FDA as substituiu em 2015 por texto descritivo (PLLR); use-as só como pista inicial",
    "A: estudos controlados sem risco · B: sem risco em animais, sem estudos em humanos · C: risco em animais ou sem estudos (usar se benefício justificar) · D: evidência de risco humano (usar só se benefício maior) · X: contraindicado",
    "Preferir medicamentos antigos, com mais experiência de uso, na menor dose eficaz e pelo menor tempo",
    "1º trimestre (organogênese, 3–8 semanas após a concepção) é o período de maior risco de malformação; no 3º trimestre, atenção a efeitos fetais (AINE, IECA)",
    "Lactação: preferir meia-vida curta, alta ligação proteica e uso seguro em lactentes; tomar logo após a mamada; cuidado maior com prematuros e recém-nascidos",
    "Não suspender tratamento crônico necessário (antiepilético, antidepressivo, anti-hipertensivo, asma) sem plano; trocar para opção mais segura com o especialista"
  ],
  tabelas: [
    {
      titulo: "Opções preferidas por problema",
      colunas: ["Problema", "Gestação", "Amamentação"],
      linhas: [
        ["Dor / febre", "Paracetamol 1ª escolha. Dipirona: uso pontual (evitar no 3º trimestre e uso prolongado). AINE: evitar a partir de 20 semanas (oligoâmnio, fechamento do ducto arterial); contraindicado ≥ 30 semanas", "Paracetamol, dipirona, ibuprofeno (preferido entre AINE). Evitar codeína e tramadol em doses altas/prolongadas"],
        ["Enxaqueca", "Paracetamol, metoclopramida; sumatriptano se necessário (dados tranquilizadores)", "Paracetamol, ibuprofeno, sumatriptano"],
        ["Náusea / vômito", "Piridoxina, doxilamina + piridoxina, dimenidrinato, metoclopramida; ondansetrona como 2ª linha (preferir após 1º trimestre)", "Metoclopramida, ondansetrona, dimenidrinato (pode reduzir leite/sedar)"],
        ["Azia / DRGE", "Antiácidos (sem bicarbonato de sódio), omeprazol", "Omeprazol"],
        ["Constipação", "Fibras, lactulose, macrogol", "Lactulose, macrogol"],
        ["Infecção bacteriana", "Penicilinas, cefalosporinas, azitromicina, clindamicina, fosfomicina, nitrofurantoína (evitar a termo), metronidazol", "Os mesmos; observar diarreia/candidíase no lactente"],
        ["Hipertensão", "Metildopa, nifedipino retard, hidralazina (crise); anlodipino", "Enalapril, captopril, nifedipino, anlodipino; evitar metildopa no pós-parto (depressão)"],
        ["Alergia", "Loratadina, cetirizina; budesonida nasal", "Loratadina, cetirizina (evitar anti-histamínicos sedativos)"],
        ["Tosse / asma", "Salbutamol, budesonida, formoterol, prednisona", "Os mesmos"],
        ["Depressão / ansiedade", "Sertralina (preferida), fluoxetina, citalopram", "Sertralina, paroxetina; benzodiazepínico de curta ação em dose baixa e pontual"],
        ["Anticoagulação", "Enoxaparina, heparina não fracionada", "Enoxaparina, heparina, varfarina"],
        ["Fungos / vaginais", "Antifúngicos tópicos/vaginais (clotrimazol, miconazol, nistatina)", "Tópicos; fluconazol em dose usual"]
      ],
      nota: "Doses nas fichas específicas (Analgésicos e antitérmicos, Hipertensão na gestação, Náuseas e vômitos na gestação, ITU na gestante)."
    },
    {
      titulo: "Evitar ou contraindicados",
      colunas: ["Medicamento", "Gestação", "Amamentação"],
      linhas: [
        ["IECA, BRA, alisquireno", "Contraindicados (2º/3º tri: lesão renal fetal, oligoâmnio)", "Enalapril e captopril compatíveis"],
        ["Isotretinoína, acitretina", "Contraindicados (X)", "Evitar"],
        ["Valproato, carbamazepina, fenitoína, topiramato", "Evitar (valproato: maior risco de malformação e de neurodesenvolvimento); se necessário, especialista + ácido fólico 5 mg", "Geralmente compatíveis, observar sedação"],
        ["Varfarina", "Evitar (embriopatia 6–12 semanas); trocar por heparina", "Compatível"],
        ["Anticoagulantes orais diretos", "Evitar", "Evitar"],
        ["Metotrexato, micofenolato, leflunomida", "Contraindicados", "Contraindicados"],
        ["Tetraciclinas (doxiciclina)", "Evitar após 15 semanas (dentes, ossos)", "Curso curto aceitável"],
        ["Fluoroquinolonas", "Evitar (usar se sem alternativa)", "Evitar se houver alternativa"],
        ["Sulfametoxazol-trimetoprima", "Evitar no 1º trimestre (antifolato) e perto do parto (kernicterus)", "Evitar em RN prematuro ou ictérico, deficiência de G6PD"],
        ["Aminoglicosídeos", "Evitar (ototoxicidade), exceto indicações hospitalares específicas", "Compatíveis"],
        ["Estatinas", "Suspender", "Evitar"],
        ["Misoprostol (fora de indicação obstétrica)", "Contraindicado", "Compatível"],
        ["Lítio", "Especialista (risco cardíaco fetal, ajuste de dose)", "Especialista; monitorar lactente"],
        ["Codeína", "Evitar uso prolongado", "Evitar (metabolizadores ultrarrápidos: depressão respiratória no lactente)"],
        ["Ergotamina / bromocriptina / cabergolina", "Evitar", "Reduzem o leite (usar só para inibir lactação)"],
        ["Iodo radioativo, amiodarona", "Contraindicados", "Contraindicados"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "EXEMPLO — DOR OU FEBRE NA GESTANTE\nUSO ORAL\n1. Paracetamol 500 mg ---------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre (máximo 3 g por dia).\n\nEXEMPLO — DOR NA PUÉRPERA QUE AMAMENTA\nUSO ORAL\n1. Ibuprofeno 600 mg ----------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas após as refeições, por até 5 dias.\n2. Dipirona 500 mg ------------------------------- 20 comprimidos\n   Tomar 2 comprimidos de 6 em 6 horas se dor."
  },
  orientacoesRetorno: [
    "Na gravidez e na amamentação, não tome remédios por conta própria, nem chás ou fitoterápicos, sem falar com a equipe",
    "Se descobrir a gravidez usando algum remédio, não pare sozinha remédios de uso contínuo: procure a UBS logo",
    "A maioria dos remédios pode ser usada amamentando; informe sempre ao médico que você amamenta",
    "Observe o bebê: sonolência excessiva, dificuldade para mamar, diarreia ou manchas na pele devem ser avisadas"
  ],
  encaminhar: [
    "PNAR: exposição a teratogênico no 1º trimestre ou doença crônica que exija troca de medicação",
    "Banco de leite / pediatria: dúvidas sobre medicamento e amamentação com lactente prematuro ou doente"
  ],
  fontes: [
    "Ministério da Saúde — Amamentação e uso de medicamentos e outras substâncias (2ª ed., 2010)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FDA — Pregnancy and Lactation Labeling Rule (2015) e alerta sobre AINE após 20 semanas (2020)",
    "NIH/NLM — LactMed: Drugs and Lactation Database (consulta contínua)",
    "APILAM — e-lactancia.org (consulta contínua)",
    "ANVISA — RDC 60/2010 (categorias de risco em bula)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
