// Larva migrans cutânea (bicho-geográfico)
registrarFicha({
  id: "larva-migrans",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Larva migrans cutânea (bicho-geográfico)",
  resumo: "Larva de ancilostomídeo de cão e gato (Ancylostoma braziliense, A. caninum) que penetra a pele em contato com areia ou terra contaminada. Lesão linear serpiginosa, elevada, muito pruriginosa, que avança alguns milímetros a centímetros por dia, geralmente em pés, nádegas e mãos.",
  palavrasChave: "bicho geografico larva migrans cutanea ancylostoma braziliense dermatite serpiginosa areia praia caixa de areia ivermectina albendazol tiabendazol pomada",
  alarmes: [
    "Pústulas, crostas melicéricas, celulite ou febre (infecção bacteriana secundária)",
    "Tosse, sibilância, infiltrado pulmonar e eosinofilia (síndrome de Löffler — tratamento mais longo)",
    "Lesões muito numerosas ou foliculite por larvas (nádegas): preferir tratamento oral",
    "Lesão que não progride, ulcera ou não responde a 2 cursos de tratamento (rever diagnóstico)"
  ],
  conduta: [
    "Diagnóstico clínico: trajeto serpiginoso pruriginoso + história de contato com areia ou solo (praia, parquinho, quintal com cão ou gato)",
    "Doença autolimitada (a larva morre em semanas a meses), mas o tratamento alivia o prurido e evita infecção",
    "Lesão única ou poucas lesões: tiabendazol tópico (pomada) ou tratamento oral",
    "Lesões múltiplas, extensas, foliculite ou falha do tópico: ivermectina dose única (≥ 15 kg) ou albendazol por 3 dias",
    "Criança < 15 kg ou < 2 anos: tiabendazol tópico; gestante: tópico (evitar ivermectina e albendazol)",
    "Prurido: anti-histamínico oral; infecção secundária: tratar como impetigo",
    "Não fazer crioterapia: a larva costuma estar além do ponto visível do trajeto"
  ],
  diferenciais: [
    "Larva currens (Strongyloides: trajeto muito rápido, perianal, nádegas — tratar com ivermectina e investigar estrongiloidíase)",
    "Tinea corporis (placa anular, não linear)",
    "Dermatite de contato por planta (fitofotodermatite)",
    "Miíase furunculoide e tungíase (nódulo com orifício central)",
    "Escabiose e estrófulo"
  ],
  exames: [
    "Nenhum de rotina: diagnóstico clínico",
    "Hemograma: só se sintomas respiratórios (eosinofilia na síndrome de Löffler) ou dúvida diagnóstica",
    "Radiografia de tórax: tosse, sibilância ou dispneia associadas"
  ],
  tratamento: [
    {
      droga: "Ivermectina (comprimido 6 mg)",
      linha: "l1",
      dose: "200 mcg/kg (15–24 kg: ½ cp; 25–35 kg: 1 cp; 36–50 kg: 1½ cp; 51–65 kg: 2 cp; 66–79 kg: 2½ cp; ≥ 80 kg: 3 cp)",
      via: "VO, com alimento",
      intervalo: "Dose única",
      duracao: "Pode repetir após 1 a 2 semanas se a lesão continuar progredindo",
      monitorizacao: "Parada do avanço e do prurido em poucos dias",
      contraindicacoes: "< 15 kg; gestação; lactação",
      ajustes: "RENAME/SUS. Bula ANVISA inclui larva migrans cutânea"
    },
    {
      droga: "Albendazol (comprimido 400 mg; suspensão 40 mg/mL)",
      linha: "alt",
      dose: "Adulto e criança ≥ 2 anos: 400 mg",
      via: "VO, com alimento gorduroso",
      intervalo: "1 vez ao dia",
      duracao: "3 dias (síndrome de Löffler ou casos extensos: até 7 dias)",
      monitorizacao: "—",
      contraindicacoes: "Gestação; < 2 anos (preferir tópico)",
      ajustes: "RENAME/SUS. Mulher em idade fértil: excluir gestação"
    },
    {
      droga: "Tiabendazol pomada 5% (50 mg/g)",
      linha: "alt",
      dose: "Camada sobre todo o trajeto e 2 cm além da extremidade que avança",
      via: "Tópica (com oclusão leve, se possível)",
      intervalo: "3 vezes ao dia",
      duracao: "Até a parada da progressão e do prurido (em geral 1 a 2 semanas)",
      monitorizacao: "Se a lesão continuar avançando após 1 semana: tratamento oral",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Opção para lactentes, crianças < 15 kg e gestantes com poucas lesões. Disponível em farmácias; não consta na RENAME (conferir REMUME)"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO E CRIANÇA ≥ 15 KG (não gestante, não lactante)\nUSO ORAL\n1. Ivermectina 6 mg ------------------------------------------ ___ comprimidos\n   Tomar 200 mcg/kg com alimento, em dose única. (15–24 kg: ½ cp; 25–35 kg: 1 cp; 36–50 kg: 1½ cp; 51–65 kg: 2 cp; 66–79 kg: 2½ cp; ≥ 80 kg: 3 cp.) Se a lesão continuar crescendo após 1 semana, retornar.\n   OU\n1. Albendazol 400 mg ------------------------------------------ 3 comprimidos\n   Tomar 1 comprimido por dia, após refeição, por 3 dias. (Criança ≥ 2 anos: mesma dose; suspensão 40 mg/mL — 10 mL 1 vez ao dia por 3 dias.)\n\nCRIANÇA < 15 KG, GESTANTE OU POUCAS LESÕES\nUSO TÓPICO\n2. Tiabendazol pomada 5% -------------------------------------- 1 bisnaga\n   Aplicar sobre todo o trajeto e 2 cm à frente da ponta que avança, 3 vezes ao dia, até parar de coçar e de crescer (em geral 1 a 2 semanas).\n\nSE COCEIRA INTENSA\nUSO ORAL\n3. Loratadina 10 mg ------------------------------------------- 10 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por até 10 dias. (Criança 2–12 anos: loratadina 1 mg/mL — ≤ 30 kg 5 mL; > 30 kg 10 mL, 1 vez ao dia.)"
  },
  orientacoesRetorno: [
    "O bicho-geográfico vem de fezes de cães e gatos na areia ou na terra; não passa de pessoa para pessoa",
    "Usar calçado e evitar sentar ou deitar direto na areia de praias e parquinhos frequentados por cães e gatos; usar canga ou toalha",
    "Vermifugar cães e gatos da casa e cobrir caixas de areia quando não estiverem em uso",
    "Não tentar retirar a larva com agulha nem queimar a lesão",
    "A coceira melhora em poucos dias e a marca some em semanas",
    "Voltar se a lesão continuar crescendo após 1 semana, se aparecer pus, vermelhidão espalhando, febre ou tosse com chiado"
  ],
  encaminhar: [
    "Dermatologia: falha a 2 cursos de tratamento ou dúvida diagnóstica",
    "Clínica/pediatria: tosse e sibilância com eosinofilia (síndrome de Löffler)"
  ],
  fontes: [
    "Ministério da Saúde — Doenças infecciosas e parasitárias: guia de bolso, 8ª ed. (2010) — larva migrans cutânea (ivermectina, albendazol, tiabendazol tópico)",
    "Ministério da Saúde — RENAME 2024 (ivermectina 6 mg; albendazol 400 mg e 40 mg/mL)",
    "CDC — Zoonotic Hookworm / Cutaneous Larva Migrans, clinical care (ivermectina 200 mcg/kg dose única; albendazol 400 mg/dia por 3 dias)",
    "Revisões: Hochedez K, Caumes E. Hookworm-related cutaneous larva migrans. J Travel Med 2007; revisão PMC 2025 sobre CLM refratária a ivermectina",
    "Bulas ANVISA: ivermectina, albendazol, tiabendazol pomada"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
