// Rubéola
registrarFicha({
  id: "rubeola",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Rubéola (notificação e gestantes)",
  resumo: "Doença exantemática viral leve, eliminada no Brasil e de notificação imediata. Febre baixa, exantema maculopapular rosado de face para o corpo e adenomegalia retroauricular, cervical posterior e occipital. O risco é a síndrome da rubéola congênita (SRC) quando a gestante se infecta.",
  palavrasChave: "rubeola exantema sarampo alemao sindrome da rubeola congenita src gestante notificacao triplice viral scr adenomegalia retroauricular",
  critico: {
    tempo: "Notificar em até 24 h",
    texto: "Todo caso suspeito de rubéola é de notificação imediata (até 24 h) à vigilância, com coleta de sorologia e swab/urina no primeiro atendimento e bloqueio vacinal dos contatos."
  },
  alarmes: [
    "Gestante com exantema ou contato com caso suspeito",
    "Recém-nascido com catarata, surdez, cardiopatia congênita, microcefalia ou púrpura (suspeita de SRC)",
    "Cefaleia intensa, convulsão ou rebaixamento (encefalite, rara)",
    "Petéquias ou sangramento (púrpura trombocitopênica, rara)",
    "Febre alta com tosse, coriza e conjuntivite (pensar em sarampo)"
  ],
  conduta: [
    "Caso suspeito (Guia de Vigilância 2024): febre e exantema maculopapular com linfadenopatia retroauricular, occipital e/ou cervical, independentemente da idade e da vacinação; ou febre e exantema com viagem recente ao exterior ou contato com viajante. A NT Conjunta 344/2025-MS acrescentou critérios: conferir o texto vigente. Febre e exantema isolados, sem outro critério, não indicam sorologia de rotina",
    "Isolar em sala separada com máscara cirúrgica; afastar de gestantes",
    "Notificar à vigilância municipal em até 24 h (ficha SINAN de doenças exantemáticas febris sarampo/rubéola)",
    "Coletar no primeiro atendimento: sangue para IgM/IgG e swab de naso/orofaringe + urina para RT-PCR (LACEN)",
    "Afastar da escola/trabalho até 7 dias após o início do exantema",
    "Tratamento só sintomático (paracetamol ou dipirona); AINE para artralgia em adulto não gestante",
    "Listar contatos (casa, escola, trabalho) e conferir vacina: a vigilância faz o bloqueio vacinal seletivo em até 72 h",
    "Gestante com exantema: notificar, coletar sorologia e encaminhar ao pré-natal de alto risco",
    "Gestante contato de caso suspeito: sorologia IgG e IgM imediatamente; IgG reagente sem IgM = imune; não imune → repetir sorologia conforme a vigilância e acompanhar no pré-natal",
    "Gestante não pode receber tríplice viral; vacinar no puerpério se suscetível"
  ],
  exames: [
    "IgM e IgG para rubéola (e sarampo) no soro, no primeiro atendimento",
    "Swab combinado de naso e orofaringe e urina para RT-PCR (identifica o genótipo)",
    "Gestante: sorologia pareada e avidez de IgG conforme a vigilância/medicina fetal",
    "RN com suspeita de SRC: IgM no RN, swab e urina; avaliação oftalmológica, auditiva e ecocardiograma"
  ],
  diferenciais: [
    "Sarampo (febre alta, tosse, coriza, conjuntivite, Koplik)",
    "Eritema infeccioso, exantema súbito, enteroviroses",
    "Dengue, zika (gestante: investigar), chikungunya",
    "Mononucleose, farmacodermia"
  ],
  prescricao: {
    ambulatorial: "RUBÉOLA — SINTOMÁTICOS\nADULTO\nUSO ORAL\n1. Paracetamol 500 mg --------------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor (máximo 4 g por dia).\n2. (Adulto não gestante, com artralgia) Ibuprofeno 400 mg -- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.\n\nCRIANÇA (peso: ___ kg)\nUSO ORAL\n1. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (10 mg/kg; máximo 35 gotas) de 6 em 6 horas se febre.\n\nGESTANTE: apenas paracetamol; não usar ibuprofeno.\n\nATESTADO: afastamento da escola/trabalho por 7 dias a partir do início das manchas."
  },
  orientacoesRetorno: [
    "Ficar em casa por 7 dias após o início das manchas e evitar contato com gestantes",
    "A equipe de vigilância pode visitar a casa para vacinar os contatos; separe os cartões de vacina de todos",
    "Dor nas articulações pode durar algumas semanas, principalmente em mulheres adultas",
    "Voltar imediatamente se: dor de cabeça forte, convulsão, sonolência, manchas roxas ou sangramento",
    "Gestante que teve contato: procurar a UBS no mesmo dia para exame de sangue",
    "Mulher vacinada com tríplice viral: evitar engravidar por 1 mês após a vacina"
  ],
  encaminhar: [
    "Pré-natal de alto risco: gestante com rubéola confirmada ou suspeita",
    "Pediatria/neonatologia: RN de mãe com rubéola na gestação ou com sinais de SRC (notificação de SRC)",
    "PS: encefalite ou púrpura"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª edição revisada (2024): Sarampo, Rubéola e Síndrome da Rubéola Congênita",
    "Ministério da Saúde — Nota Técnica Conjunta nº 344/2025-CGVDI/DPNI/SVSA/MS (definição de caso e coleta de amostras de sarampo, rubéola e SRC)",
    "Ministério da Saúde — Nota Técnica Conjunta nº 345/2025-CGVDI/DPNI/SVSA/MS (conduta frente a caso suspeito, bloqueio vacinal e contatos)",
    "American Academy of Pediatrics — Red Book 2024–2027: Rubella"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
