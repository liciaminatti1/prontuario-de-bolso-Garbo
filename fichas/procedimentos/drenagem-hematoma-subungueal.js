// Trepanação (drenagem) de hematoma subungueal
registrarFicha({
  id: "drenagem-hematoma-subungueal",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Drenagem de hematoma subungueal (trepanação da unha)",
  resumo: "Trepanação da lâmina ungueal para aliviar a dor do hematoma subungueal agudo após trauma do dedo, com critérios para RX, quando retirar a unha e quando encaminhar.",
  palavrasChave: "hematoma subungueal unha roxa dedo prensado martelada trepanacao da unha furo na unha clipe aquecido cauterio agulha fratura de falange distal tufo leito ungueal",
  critico: {
    tempo: "Trepanar se dor e unha íntegra",
    texto: "Hematoma subungueal doloroso com unha e pregas íntegras: trepanar, independentemente do tamanho do hematoma. Unha solta, fraturada ou prega lacerada: retirar a unha e reparar o leito. Fratura com desvio ou lesão da matriz: ortopedia/cirurgia da mão."
  },
  alarmes: [
    "Unha avulsionada, lâmina partida ou prega ungueal lacerada: exploração e reparo do leito ungueal",
    "Fratura de falange distal com desvio, instável ou intra-articular",
    "Dedo frio, pálido ou sem enchimento capilar",
    "Lesão escura sem trauma claro, que não migra com o crescimento da unha, ou faixa escura com pigmento na prega (sinal de Hutchinson): suspeitar melanoma — não trepanar, encaminhar à dermatologia",
    "Sinais de infecção após o procedimento: dor que volta a piorar, pus, celulite"
  ],
  indicacoes: [
    "Hematoma subungueal agudo (em geral nas primeiras 48 h), doloroso, com lâmina e pregas ungueais íntegras",
    "Dor pulsátil por pressão do sangue sob a unha"
  ],
  contraindicacoes: [
    "Unha deslocada, fraturada ou prega lacerada: retirar a unha e reparar o leito (ver sutura)",
    "Hematoma antigo e coagulado, já sem dor (mais de 48–72 h): pouco benefício",
    "Hematoma pequeno e indolor: não é necessário",
    "Unha acrílica, postiça ou com esmalte espesso: não usar cautério ou clipe aquecido (inflamável) — retirar antes ou usar agulha/broca",
    "Lesão pigmentada suspeita de melanoma"
  ],
  materiais: [
    "Luvas, gazes, clorexidina ou PVPI",
    "Cautério portátil a bateria (ponta fina) OU clipe de papel aberto aquecido na chama até ficar rubro (pinçado com porta-agulha) OU agulha 40 × 12 (18 G) OU bisturi lâmina nº 11",
    "Lidocaína e material de bloqueio digital (opcional; ver anestesia-local)",
    "Gaze, curativo simples, tala digital se fratura",
    "RX do dedo (frente e perfil) se trauma por esmagamento ou suspeita de fratura"
  ],
  checagemAntes: [
    "Mecanismo e tempo do trauma; dor pulsátil",
    "Integridade da lâmina e das pregas ungueais; mobilidade da unha",
    "RX se esmagamento, deformidade ou dor óssea importante (fratura do tufo é comum)",
    "Perfusão e sensibilidade do dedo",
    "Vacinação antitetânica (ver tetano-profilaxia)",
    "Remover esmalte/unha postiça se for usar calor; explicar e obter consentimento"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Mão apoiada em superfície firme; antissepsia da unha",
      "Anestesia geralmente não é necessária (a lâmina não tem sensibilidade); bloqueio digital se criança ansiosa, dor intensa ou trauma associado"
    ] },
    { etapa: "Trepanação", itens: [
      "Escolher o ponto sobre o centro do hematoma, de preferência na metade distal da unha (longe da matriz/lúnula)",
      "Cautério ou clipe aquecido: encostar perpendicular à unha com pressão leve até sentir a perda de resistência e o sangue sair; parar ao atravessar (o sangue protege o leito)",
      "Agulha 18 G ou lâmina nº 11: girar entre os dedos com pressão leve, como uma broca, até atravessar a lâmina",
      "Fazer um orifício de tamanho suficiente (2–3 mm) ou 2 orifícios em hematoma grande, para o sangue continuar saindo",
      "Comprimir suavemente a unha para expulsar o sangue"
    ] },
    { etapa: "Finalização", itens: [
      "Curativo com gaze absorvente; o orifício pode drenar por 1–2 dias",
      "Fratura de tufo sem desvio: tala digital protetora por cerca de 2 semanas para conforto",
      "Antibiótico não é necessário de rotina, mesmo com fratura do tufo sob unha trepanada",
      "Analgesia simples"
    ] }
  ],
  conferirDepois: [
    "Alívio da dor (deve ser imediato)",
    "Sangramento controlado; perfusão do dedo",
    "Fratura avaliada e imobilizada se presente",
    "Tétano conferido",
    "Orientar que a unha pode cair em semanas e uma nova crescerá em meses"
  ],
  complicacoes: [
    "Reacúmulo do hematoma: orifício pequeno ou coágulo — repetir trepanação ou alargar o orifício",
    "Infecção (paroníquia/osteomielite, rara): antibiótico e reavaliação; ver drenagem-paroniquia-panaricio",
    "Queimadura do leito ungueal pelo calor: parar ao atravessar a lâmina",
    "Deformidade da unha nova: por lesão do leito/matriz no trauma — encaminhar se importante",
    "Queda da unha: esperada em hematomas grandes; proteger o leito até a nova crescer"
  ],
  prescricao: {
    ambulatorial: "APÓS TREPANAÇÃO DE HEMATOMA SUBUNGUEAL — ADULTO\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n2. Ibuprofeno 400 mg -------------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 4 dias, se dor.\n\nCUIDADOS\n3. Manter o curativo limpo e seco por 1 a 2 dias; depois lavar com água e sabão.\n4. Mão elevada nas primeiras 24 horas.\n\nCRIANÇA (por kg): dipirona 15–25 mg/kg/dose de 6/6 h (máx. 1 g/dose); ibuprofeno 10 mg/kg/dose de 8/8 h (máx. 400 mg/dose), acima de 6 meses.\n\nSE INFECÇÃO DEPOIS (pus, celulite): cefalexina 500 mg de 6/6 h por 7 dias (criança 25–50 mg/kg/dia de 6/6 h, máx. 500 mg/dose)."
  },
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Infecção após trepanação sem melhora em 48–72 h de cefalexina", "Drenar coleção (paroníquia/panarício), cultura; SMX-TMP ou clindamicina se suspeita de MRSA", "Doses na ficha drenagem-paroniquia-panaricio"],
        ["Alergia à penicilina", "Clindamicina 300 mg de 6/6 h (criança 30–40 mg/kg/dia, máx. 450 mg/dose)", "—"],
        ["Dor óssea, secreção persistente ou fratura exposta infectada", "RX e encaminhamento (osteomielite); antibiótico IV conforme cultura", "Ortopedia/cirurgia da mão"]
      ],
      nota: "Antibiótico profilático não é indicado na trepanação, mesmo com fratura do tufo sem lesão do leito."
    }
  ],
  documentacao: "Procedimento: trepanação de hematoma subungueal do [ ] dedo da [mão / pé] [direito / esquerdo].\nTrauma em [data/hora], mecanismo: [ ].\nLâmina e pregas ungueais íntegras: [sim]. RX: [sem fratura / fratura do tufo sem desvio / não realizado].\nAnestesia: [não / bloqueio digital com lidocaína [ ]%].\nMétodo: [cautério / clipe aquecido / agulha 18 G], [ ] orifício(s).\nDrenagem de sangue escuro com alívio imediato da dor. Perfusão preservada.\nTétano: [ ]. Tala: [sim / não].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "A dor deve melhorar logo; pode sair um pouco de sangue pelo furinho por 1 a 2 dias",
    "Mantenha a mão (ou o pé) elevado nas primeiras 24 horas",
    "A unha pode ficar escura e cair em algumas semanas; a nova cresce em alguns meses",
    "Volte se a dor voltar forte, sair pus, o dedo ficar vermelho e quente ou tiver febre",
    "Se a mancha escura não for saindo junto com o crescimento da unha, volte para avaliação"
  ],
  relacionadas: ["anestesia-local", "trauma-extremidades", "imobilizacao-talas", "tetano-profilaxia", "drenagem-paroniquia-panaricio", "sutura"],
  fontes: [
    "Roberts & Hedges' Clinical Procedures in Emergency Medicine, 7ª ed. (2019) — subungual hematoma trephination",
    "Roser SE, Gellman H — Comparison of nail bed repair versus nail trephination for subungual hematomas in children. J Hand Surg Am (1999)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
