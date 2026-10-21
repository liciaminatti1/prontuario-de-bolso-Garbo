// Vaginose bacteriana
registrarFicha({
  id: "vaginose-bacteriana",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Vaginose bacteriana",
  resumo: "Desequilíbrio da microbiota vaginal (perda de lactobacilos, aumento de Gardnerella e anaeróbios). Corrimento branco-acinzentado, fino e homogêneo, com odor de peixe que piora após o coito e na menstruação. Não causa inflamação importante.",
  palavrasChave: "vaginose bacteriana gardnerella corrimento odor peixe amsel nugent metronidazol clindamicina whiff aminas recorrente gestante",
  alarmes: [
    "Febre, dor pélvica ou dor à mobilização do colo (pensar em DIP)",
    "Gestante com sintomas (tratar sempre)",
    "Antes de procedimentos (inserção de DIU, histeroscopia, aborto): tratar se sintomática",
    "Três ou mais episódios em 12 meses (vaginose recorrente)"
  ],
  conduta: [
    "Diagnóstico clínico (critérios de Amsel, 3 de 4): corrimento fino homogêneo; pH > 4,5; teste das aminas (KOH 10%) positivo; clue cells no exame a fresco",
    "Padrão-ouro em laboratório: Gram com escore de Nugent ≥ 7",
    "Tratar: sintomáticas, gestantes sintomáticas e antes de procedimentos ginecológicos",
    "Assintomática fora da gestação: não tratar de rotina",
    "1ª escolha: metronidazol 500 mg VO de 12/12 h por 7 dias (ou gel vaginal 5 noites)",
    "Gestação: metronidazol oral 7 dias em qualquer trimestre (sintomáticas)",
    "Recorrente: novo curso de 7–14 dias e depois metronidazol gel 2 vezes por semana por 4 a 6 meses",
    "Parceria: o PCDT não recomenda tratar. Ensaio clínico de 2025 (NEJM) mostrou menos recorrência com tratamento do parceiro masculino em relação monogâmica (metronidazol oral + clindamicina creme no pênis) — considerar em recorrência, decisão compartilhada",
    "Oferecer testes rápidos de HIV, sífilis e hepatites B e C"
  ],
  exames: [
    "pH vaginal (fita) e teste das aminas na consulta, quando disponíveis",
    "Bacterioscopia (Gram) de secreção vaginal com escore de Nugent: dúvida diagnóstica ou recorrência",
    "Testes rápidos: HIV, sífilis, hepatites B e C",
    "Citologia oncótica só no rastreamento (não serve para diagnosticar vaginose)"
  ],
  diferenciais: [
    "Tricomoníase (corrimento bolhoso amarelo-esverdeado, prurido, colpite)",
    "Candidíase (prurido, corrimento grumoso, pH normal)",
    "Cervicite (mucopus endocervical, sangramento ao toque)",
    "Corpo estranho (tampão esquecido): odor fétido intenso"
  ],
  tratamento: [
    { droga: "Metronidazol 250 mg comprimido", linha: "l1", dose: "500 mg (2 comprimidos de 250 mg)", via: "VO", intervalo: "12/12 h", duracao: "7 dias", monitorizacao: "Náusea, gosto metálico", contraindicacoes: "Uso de álcool durante e até 24 h após (efeito antabuse); dissulfiram nas últimas 2 semanas", ajustes: "Gestação: pode usar em qualquer trimestre. Lactação: compatível. Potencializa varfarina" },
    { droga: "Metronidazol gel vaginal 100 mg/g", linha: "alt", dose: "1 aplicador cheio (5 g)", via: "Vaginal", intervalo: "1 vez ao dia, à noite", duracao: "5 dias", monitorizacao: "—", contraindicacoes: "Evitar álcool", ajustes: "Recorrência: após o tratamento, 2 vezes por semana por 4–6 meses" },
    { droga: "Clindamicina 300 mg", linha: "alt", dose: "300 mg", via: "VO", intervalo: "12/12 h", duracao: "7 dias", monitorizacao: "Diarreia (C. difficile)", contraindicacoes: "Colite prévia por C. difficile", ajustes: "Opção em intolerância ao metronidazol; segura na gestação" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Metronidazol 250 mg ---------------------------- 28 comprimidos\n   Tomar 2 comprimidos de 12 em 12 horas por 7 dias. Não ingerir bebida alcoólica durante o tratamento e até 1 dia depois.\n   (Se disponível metronidazol 400 mg: 1 comprimido de 12 em 12 horas por 7 dias.)\n\nOU USO VAGINAL\n1. Metronidazol gel vaginal 100 mg/g -------------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador cheio à noite, ao deitar, por 5 noites.\n\nALTERNATIVA (intolerância ao metronidazol) — USO ORAL\n1. Clindamicina 300 mg ---------------------------- 14 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 7 dias.\n\nVAGINOSE RECORRENTE (≥ 3 episódios/ano)\n1. Metronidazol 250 mg: 2 comprimidos de 12 em 12 horas por 10 a 14 dias; depois\n2. Metronidazol gel vaginal 100 mg/g: 1 aplicador à noite, 2 vezes por semana, por 4 a 6 meses."
  },
  orientacoesRetorno: [
    "Não beber álcool durante o metronidazol e até 1 dia depois (causa vômitos e mal-estar)",
    "Evitar duchas vaginais e sabonetes íntimos perfumados: pioram o problema",
    "O preservativo reduz a chance de voltar",
    "Voltar se não melhorar em 1 semana, se voltar 3 vezes ou mais no ano, ou se surgir febre e dor na barriga",
    "Gestante: avisar no pré-natal e completar o tratamento"
  ],
  encaminhar: [
    "Ginecologia: vaginose recorrente que falha à supressão prolongada"
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022; capítulo de corrimento vaginal de 2020)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)",
    "Vodstrcil LA et al. Male-Partner Treatment to Prevent Recurrence of Bacterial Vaginosis. N Engl J Med (2025)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
