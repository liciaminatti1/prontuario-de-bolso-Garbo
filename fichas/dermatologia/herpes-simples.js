// Herpes simples labial e mucocutâneo
registrarFicha({
  id: "herpes-simples",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Herpes simples labial e mucocutâneo",
  resumo: "Infecção pelo HSV-1 (às vezes HSV-2): vesículas agrupadas sobre base eritematosa que viram erosões e crostas, precedidas de ardor ou formigamento. Primoinfecção na criança costuma ser gengivoestomatite febril; recorrências no lábio são autolimitadas (7–10 dias). Herpes genital: ver ficha úlceras genitais.",
  palavrasChave: "herpes simples labial herpes labial bolha no labio gengivoestomatite herpetica hsv aciclovir valaciclovir panaricio herpetico eczema herpetico erupcao variceliforme de kaposi ceratite herpetica",
  alarmes: [
    "Lesões perto do olho, olho vermelho, dor ocular, fotofobia ou baixa visual (ceratite herpética) — oftalmologia no mesmo dia",
    "Criança com gengivoestomatite que não bebe líquidos, com sinais de desidratação ou baba muito",
    "Eczema herpético: vesículas e erosões em saca-bocado espalhadas sobre dermatite atópica, com febre — urgência",
    "Recém-nascido (até 6 semanas) com vesículas, ou mãe com herpes genital ativo no parto — urgência hospitalar",
    "Imunossuprimido com lesões extensas, crônicas ou disseminadas",
    "Febre alta, cefaleia, confusão, convulsão ou alteração de comportamento (encefalite herpética)"
  ],
  conduta: [
    "Diagnóstico clínico na maioria dos casos",
    "Herpes labial recorrente leve no imunocompetente: tratamento sintomático; antiviral oral encurta a crise se iniciado no pródromo ou nas primeiras 24–48 h",
    "Antiviral de dose curta (valaciclovir 2 g de 12/12 h por 1 dia) é prático; pode ser deixado com o paciente para iniciar no primeiro formigamento",
    "Recorrências frequentes (≥ 6 por ano) ou graves: considerar supressão diária e encaminhar",
    "Gengivoestomatite na criança: aciclovir oral se iniciado nas primeiras 72–96 h, hidratação com líquidos frios, analgesia regular",
    "Aciclovir creme tem benefício pequeno (encurta cerca de meio dia); não substitui o oral nos casos indicados",
    "Fotoprotetor labial previne crises desencadeadas pelo sol",
    "Evitar beijar, compartilhar copos e talheres e sexo oral enquanto houver lesões; lavar as mãos após tocar"
  ],
  diferenciais: [
    "Aftas (úlceras não precedidas de vesículas, mucosa não queratinizada, sem febre)",
    "Herpangina e doença mão-pé-boca (lesões no palato posterior, mãos e pés)",
    "Impetigo (crostas melicéricas, sem pródromo de ardor)",
    "Herpes-zóster (dermátomo, mais doloroso)",
    "Eritema multiforme (lesões em alvo; pode ser desencadeado pelo próprio herpes)",
    "Sífilis primária ou secundária (lesão oral indolor — testar)"
  ],
  exames: [
    "Sem exames na forma típica",
    "PCR para HSV em raspado de vesícula: imunossuprimido, apresentação atípica, eczema herpético, recém-nascido",
    "Lesões genitais ou oral atípica: testes rápidos de sífilis e HIV"
  ],
  tratamento: [
    {
      droga: "Aciclovir",
      linha: "l1",
      dose: "Adulto: 400 mg · Criança (gengivoestomatite): 15 mg/kg/dose (máx. 200 mg/dose)",
      via: "VO",
      intervalo: "5 vezes ao dia",
      duracao: "Adulto (labial recorrente): 5 dias · Criança (gengivoestomatite): 7 dias",
      monitorizacao: "Hidratação, função renal",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "RENAME (comprimido 200 mg e suspensão oral 40 mg/mL — conferir REMUME). Na dose de herpes simples, ajustar se ClCr < 10 (conferir bula). Gestação: pode usar"
    },
    {
      droga: "Valaciclovir",
      linha: "alt",
      dose: "2 g",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "1 dia (2 doses), iniciar no pródromo",
      monitorizacao: "Cefaleia, náusea; confusão em idoso com DRC",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Adulto e adolescente ≥ 12 anos. ClCr 30–49: 1 g de 12/12 h por 1 dia; 10–29: 500 mg de 12/12 h por 1 dia. Fora da RENAME"
    },
    {
      droga: "Aciclovir 5% creme",
      linha: "adj",
      dose: "Camada fina na lesão",
      via: "Tópica",
      intervalo: "5 vezes ao dia",
      duracao: "4–5 dias",
      monitorizacao: "Irritação local",
      contraindicacoes: "Mucosa oral, olhos",
      ajustes: "Benefício pequeno; útil se iniciado no pródromo. Adulto e criança"
    },
    {
      droga: "Supressão diária (aciclovir 400 mg de 12/12 h ou valaciclovir 500 mg 1×/dia)",
      linha: "alt",
      dose: "Conforme ao lado",
      via: "VO",
      intervalo: "Diário",
      duracao: "6–12 meses e reavaliar",
      monitorizacao: "Frequência de crises",
      contraindicacoes: "—",
      ajustes: "Recorrências muito frequentes, eritema multiforme recorrente associado ao herpes, imunossuprimido"
    },
    {
      droga: "Corticoide tópico ou colírio de corticoide",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Piora e dissemina a infecção herpética (especialmente na córnea)"
    }
  ],
  prescricao: {
    ambulatorial: "HERPES LABIAL RECORRENTE — ADULTO\nUSO ORAL\n1. Valaciclovir 500 mg ------------------------- 8 comprimidos\n   Ao primeiro sinal de formigamento ou ardor no lábio, tomar 4 comprimidos (2 g) e repetir 4 comprimidos 12 horas depois. Só 1 dia de tratamento por crise.\n   OU Aciclovir 200 mg ------------------------- 50 comprimidos\n   Tomar 2 comprimidos (400 mg) 5 vezes ao dia por 5 dias.\nUSO TÓPICO\n2. Protetor labial com filtro solar: aplicar antes de sair ao sol.\n3. Dipirona 500 mg: 1 comprimido de 6 em 6 horas se dor.\n\nGENGIVOESTOMATITE HERPÉTICA — CRIANÇA (peso: ___ kg)\nUSO ORAL\n1. Aciclovir suspensão oral 200 mg/5 mL (40 mg/mL) ---- 1 frasco\n   Dar 15 mg/kg por dose (= 0,375 mL/kg; máximo 5 mL = 200 mg) 5 vezes ao dia por 7 dias.\n2. Paracetamol gotas 200 mg/mL: 1 gota/kg por dose (máx. 35 gotas) de 6 em 6 horas se dor ou febre.\n   OU Dipirona gotas 500 mg/mL: 1 gota a cada 2 kg por dose (máx. 40 gotas) de 6 em 6 horas (não usar < 3 meses).\n3. Oferecer líquidos frios em pequenas quantidades várias vezes ao dia (água, leite, sucos não ácidos, picolé); alimentos pastosos e frios."
  },
  orientacoesRetorno: [
    "O herpes labial volta de vez em quando; sol, febre, estresse e menstruação costumam desencadear",
    "A crise dura cerca de 7 a 10 dias e é contagiosa até a crosta cair: não beijar, não dividir copos e talheres, lavar as mãos",
    "Não tocar a lesão e depois os olhos",
    "Criança com feridas na boca: o mais importante é beber líquidos; voltar se urinar pouco, ficar muito sonolenta ou recusar tudo",
    "Voltar no mesmo dia se o olho ficar vermelho ou doer, se as bolhas se espalharem pelo corpo (principalmente em quem tem dermatite atópica) ou se houver febre alta com dor de cabeça forte ou confusão",
    "Retornar se as crises forem muito frequentes (pode haver tratamento preventivo)"
  ],
  encaminhar: [
    "Oftalmologia no mesmo dia: suspeita de herpes ocular",
    "Urgência/internação: eczema herpético, recém-nascido, desidratação, encefalite, imunossuprimido com doença extensa",
    "Dermatologia/infectologia: recorrências frequentes ou suspeita de resistência ao aciclovir"
  ],
  fontes: [
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021): HSV — esquemas de aciclovir e valaciclovir",
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022): herpes genital",
    "Amir J et al. — Treatment of herpes simplex gingivostomatitis with aciclovir in children: randomised double blind placebo controlled study. BMJ, 1997",
    "Cochrane — Interventions for prevention of herpes simplex labialis (Chi CC et al., 2015)",
    "Sociedade Brasileira de Pediatria — Gengivoestomatite herpética (Departamento de Infectologia)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
