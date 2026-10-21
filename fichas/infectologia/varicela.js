// Varicela (catapora)
registrarFicha({
  id: "varicela",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Varicela (catapora)",
  resumo: "Infecção primária pelo vírus varicela-zóster: febre e vesículas pruriginosas em vários estágios ao mesmo tempo, começando no tronco e no couro cabeludo. Benigna na maioria das crianças; aciclovir para grupos de risco e imunoglobulina (IGHAVZ) para contatos de risco suscetíveis.",
  palavrasChave: "varicela catapora vzv varicela zoster vesiculas aciclovir imunoglobulina ighavz vacina bloqueio crie impetigo gestante recem-nascido",
  critico: {
    tempo: "Aciclovir em até 24 h do exantema",
    texto: "Nos grupos de risco, o aciclovir oral funciona melhor se iniciado nas primeiras 24 h do exantema. Imunodeprimido, gestante grave ou varicela complicada: aciclovir IV e internação."
  },
  alarmes: [
    "Imunodeprimido, gestante, recém-nascido",
    "Febre alta persistente além do 4º dia ou febre que volta (infecção bacteriana secundária)",
    "Lesão com celulite, dor desproporcional, área endurecida e escura (fasceíte necrosante por estreptococo)",
    "Tosse, taquipneia, hipoxemia (pneumonia — mais comum em adultos e gestantes)",
    "Ataxia, cefaleia intensa, vômitos, sonolência, convulsão (cerebelite, encefalite)",
    "Lesões hemorrágicas, petéquias, sangramento",
    "Uso de AAS (risco de síndrome de Reye)"
  ],
  conduta: [
    "Diagnóstico clínico: vesículas sobre base eritematosa em estágios diferentes (mácula, pápula, vesícula, crosta), prurido, início em tronco/face/couro cabeludo",
    "Sintomáticos para todos: paracetamol ou dipirona, anti-histamínico, banho diário, unhas curtas",
    "Não usar AAS (síndrome de Reye) nem ibuprofeno/AINE (associação com infecção grave de pele)",
    "Aciclovir oral (iniciar idealmente até 24 h do exantema; até 72 h há algum benefício): > 12 anos; doença crônica de pele ou de pulmão; uso de corticoide (inclusive inalado) ou salicilato crônico; 2º caso no domicílio (costuma ser mais grave); gestante",
    "Aciclovir IV e internação: imunodeprimido, varicela complicada (pneumonia, encefalite, hepatite), recém-nascido",
    "Afastar da escola/creche/trabalho até todas as lesões virarem crosta (em geral 5–7 dias)",
    "Contatos suscetíveis de risco (imunodeprimidos, gestantes, RN e prematuros indicados): imunoglobulina antivaricela-zóster (IGHAVZ) até 96 h após a exposição, via CRIE",
    "Contatos suscetíveis imunocompetentes sem contraindicação: vacina pós-exposição até 120 h (5 dias), conforme Manual dos CRIE e disponibilidade",
    "Notificar à vigilância: casos graves (internados), óbitos e surtos (creche, escola, hospital)"
  ],
  exames: [
    "Não são necessários no quadro típico",
    "Dúvida diagnóstica, imunodeprimido ou caso grave: PCR para VZV do líquido da vesícula ou raspado da base da lesão",
    "Pneumonia: radiografia de tórax e oximetria; neurológico: avaliação no PS (líquor, imagem)",
    "Gestante contato sem história confiável de varicela ou vacina: IgG para VZV com urgência (se disponível sem atrasar a IGHAVZ)"
  ],
  diferenciais: [
    "Estrófulo (prurigo por picada de inseto): pápulas em áreas expostas, sem febre",
    "Mão-pé-boca: vesículas em mãos, pés e boca",
    "Impetigo bolhoso",
    "Herpes simples disseminado, herpes-zóster disseminado (imunodeprimido)",
    "Varíola dos macacos (mpox): lesões no mesmo estágio, linfonodos aumentados, contato sexual ou domiciliar"
  ],
  tratamento: [
    {
      droga: "Aciclovir oral",
      linha: "l1",
      dose: "Criança ≥ 2 anos: 20 mg/kg/dose (máx. 800 mg/dose) · Adolescente e adulto: 800 mg/dose",
      via: "Oral",
      intervalo: "Criança: 4 vezes ao dia · Adulto: 5 vezes ao dia (de 4/4 h, sem a dose da madrugada)",
      duracao: "Criança: 5 dias · Adulto: 7 dias",
      monitorizacao: "Hidratação",
      contraindicacoes: "Alergia ao aciclovir",
      ajustes: "Ajustar na insuficiência renal. Crianças com > 40 kg: dose de adulto. O MS também cita o esquema de 5 vezes ao dia para crianças. Gestante: avaliar com o pré-natal (aciclovir é usado)"
    },
    {
      droga: "Aciclovir IV",
      linha: "l1",
      dose: "10 mg/kg/dose (< 1 ano: 10 mg/kg/dose; alternativa 500 mg/m²/dose em ≥ 1 ano)",
      via: "IV em 1 h",
      intervalo: "8/8 h",
      duracao: "7–10 dias ou até 48 h sem lesões novas",
      monitorizacao: "Função renal, hidratação",
      contraindicacoes: "—",
      ajustes: "Diluir para concentração ≤ 7 mg/mL em SF 0,9%. Hidratar bem (nefrotoxicidade). Ajuste renal"
    },
    {
      droga: "Imunoglobulina humana antivaricela-zóster (IGHAVZ)",
      linha: "l1",
      dose: "125 UI a cada 10 kg (mínimo 125 UI, máximo 625 UI)",
      via: "IM",
      intervalo: "Dose única",
      duracao: "Até 96 h após o contato",
      monitorizacao: "Observar a doença por 28 dias (a IGHAVZ prolonga a incubação)",
      contraindicacoes: "—",
      ajustes: "Indicação exige suscetibilidade + contato significativo + condição de risco (Manual dos CRIE 2023). Solicitar ao CRIE"
    },
    {
      droga: "Ácido acetilsalicílico (AAS) e AINE",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "AAS: síndrome de Reye. AINE: associação com infecção invasiva de pele por estreptococo",
      ajustes: "Usar paracetamol ou dipirona"
    }
  ],
  prescricao: {
    ambulatorial: "VARICELA — ADULTO\nUSO ORAL\n1. Aciclovir 400 mg ---------------------------------- 70 comprimidos\n   Tomar 2 comprimidos (800 mg) de 4 em 4 horas, 5 vezes ao dia (pular a dose da madrugada), por 7 dias.\n2. Paracetamol 500 mg --------------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor (máximo 4 g por dia).\n3. Loratadina 10 mg ----------------------------------- 7 comprimidos\n   Tomar 1 comprimido 1 vez ao dia se coceira.\n\nCRIANÇA (peso: ___ kg)\nUSO ORAL\n1. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (10 mg/kg; máximo 35 gotas) de 6 em 6 horas se febre.\n2. Dexclorfeniramina 2 mg/5 mL xarope ----------------- 1 frasco\n   2 a 6 anos: 1,25 mL de 8 em 8 horas; 6 a 12 anos: 2,5 mL de 8 em 8 horas, se coceira (máximo 5 dias). Pode dar sono.\n3. SE GRUPO DE RISCO: Aciclovir 200 mg/5 mL suspensão (ou comprimido 200 mg/400 mg) --- ___ frascos\n   Dar 20 mg/kg por dose (máximo 800 mg) de 6 em 6 horas (4 vezes ao dia) por 5 dias.\n   Exemplo 15 kg: 300 mg = 7,5 mL por dose.\n\nUSO TÓPICO\n4. Pasta d'água ------------------------------------------ 1 frasco\n   Aplicar nas lesões 2 a 3 vezes ao dia se coceira (não usar em lesões abertas extensas).\n\nSE IMPETIGINIZAÇÃO (pus, crosta melicérica, vermelhidão ao redor)\n5. Cefalexina 250 mg/5 mL suspensão ------------------- ___ frascos\n   Criança: 50 mg/kg/dia divididos de 6 em 6 horas (máximo 500 mg/dose) por 7 dias. Adulto: cefalexina 500 mg de 6 em 6 horas por 7 dias.\n\nNÃO USAR: AAS, ibuprofeno ou outros anti-inflamatórios.\nATESTADO: afastamento até todas as lesões virarem crosta."
  },
  orientacoesRetorno: [
    "Manter em casa até todas as bolhas virarem casquinha (em geral 5 a 7 dias)",
    "Banho diário com água e sabão; unhas curtas e limpas; não arrancar as casquinhas",
    "Para febre: paracetamol ou dipirona. Nunca dar AAS (aspirina) nem ibuprofeno",
    "Evitar contato com gestantes, recém-nascidos e pessoas com imunidade baixa; se houver contato, avisar a UBS no mesmo dia",
    "Voltar imediatamente se: falta de ar ou tosse forte, sonolência, convulsão, desequilíbrio para andar, vômitos repetidos, bolhas com sangue ou manchas roxas, área de pele vermelha, quente e muito dolorosa, febre que volta depois de ter melhorado",
    "Quem nunca teve catapora nem tomou a vacina deve procurar a UBS para avaliar a vacinação"
  ],
  encaminhar: [
    "PS/internação: imunodeprimido, pneumonia, encefalite/cerebelite, infecção bacteriana grave de pele, RN, gestante com sintomas respiratórios",
    "CRIE (via vigilância): IGHAVZ para contato de risco em até 96 h; vacina para contatos suscetíveis elegíveis",
    "Pré-natal: gestante com varicela ou contato suscetível"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª edição revisada (2024): Varicela e herpes-zóster",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed. (2023): IGHAVZ e vacina varicela",
    "American Academy of Pediatrics — Red Book 2024–2027: Varicella-Zoster Virus Infections"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
