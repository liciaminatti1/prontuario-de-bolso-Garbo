// Mononucleose infecciosa
registrarFicha({
  id: "mononucleose",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Mononucleose infecciosa",
  resumo: "Febre, faringite (muitas vezes exsudativa), adenomegalia cervical posterior e fadiga em adolescente ou adulto jovem, geralmente pelo vírus Epstein-Barr (EBV). Tratamento de suporte; evitar esporte de contato pelo risco de ruptura esplênica.",
  palavrasChave: "mononucleose doenca do beijo epstein barr ebv monoteste anticorpos heterofilos linfocitose atipica esplenomegalia faringite amoxicilina rash",
  critico: {
    tempo: "Sem amoxicilina; afastar esporte",
    texto: "Tratamento é de suporte. Amoxicilina/ampicilina causam exantema na maioria. Sem esporte de contato ou esforço intenso por no mínimo 3–4 semanas do início."
  },
  alarmes: [
    "Estridor, dificuldade para engolir saliva ou respirar (obstrução de via aérea por hipertrofia amigdaliana)",
    "Dor abdominal em hipocôndrio esquerdo ou no ombro esquerdo, hipotensão, palidez (ruptura esplênica)",
    "Icterícia, sangramentos, petéquias (hepatite importante, plaquetopenia)",
    "Palidez intensa e urina escura (anemia hemolítica)",
    "Cefaleia intensa, rigidez de nuca, convulsão, fraqueza nos membros (complicação neurológica)",
    "Febre persistente > 2 semanas ou imunossuprimido"
  ],
  conduta: [
    "Diagnóstico clínico + hemograma (linfocitose com linfócitos atípicos ≥ 10%) + monoteste (anticorpos heterófilos)",
    "Monoteste negativo com clínica sugestiva (sobretudo < 4 anos ou 1ª semana): sorologia EBV (anti-VCA IgM e IgG, anti-EBNA)",
    "Afastar faringite estreptocócica concomitante (teste rápido) quando houver critérios; tratar com penicilina benzatina ou cefalexina, não com amoxicilina",
    "Suporte: hidratação, repouso relativo conforme tolerância, analgésico/antitérmico",
    "Corticoide não é rotina: só se obstrução de via aérea iminente, anemia hemolítica ou plaquetopenia graves (em ambiente hospitalar)",
    "Pesquisar HIV agudo, CMV e toxoplasmose se monoteste e sorologia EBV negativos",
    "Afastar esporte de contato e levantamento de peso por no mínimo 3–4 semanas do início e até ausência de esplenomegalia palpável"
  ],
  exames: [
    "Hemograma completo com contagem diferencial (linfocitose atípica; plaquetopenia leve é comum)",
    "Monoteste (pesquisa de anticorpos heterófilos) — falso-negativo na 1ª semana e em < 4 anos",
    "Sorologia para EBV: anti-VCA IgM e IgG, anti-EBNA IgG (VCA IgM+ e EBNA negativo = infecção aguda)",
    "TGO, TGP, bilirrubinas (elevação leve de transaminases é comum)",
    "Teste rápido para HIV (síndrome mono-like) e, conforme clínica, sorologias para CMV e toxoplasmose",
    "USG de abdome se dor abdominal, suspeita de ruptura ou para decidir retorno a esporte competitivo"
  ],
  diferenciais: [
    "Faringite estreptocócica (adenite anterior, sem esplenomegalia)",
    "Infecção aguda pelo HIV (síndrome retroviral aguda)",
    "Citomegalovírus, toxoplasmose (síndrome mono-like, faringite discreta)",
    "Leucemia aguda/linfoma (citopenias, blastos, adenomegalia persistente)",
    "Difteria (membrana acinzentada aderente, não vacinado)"
  ],
  tratamento: [
    {
      droga: "Paracetamol ou dipirona (ou ibuprofeno)",
      linha: "l1",
      dose: "Adulto: paracetamol 500–750 mg; dipirona 500–1.000 mg; ibuprofeno 400 mg · Criança: paracetamol ou dipirona 10–15 mg/kg/dose; ibuprofeno 5–10 mg/kg/dose (máx 400 mg)",
      via: "VO",
      intervalo: "Paracetamol/dipirona 6/6 h; ibuprofeno 8/8 h, se dor ou febre",
      duracao: "Enquanto houver sintomas",
      monitorizacao: "Hepatite: evitar paracetamol em dose alta se transaminases muito elevadas",
      contraindicacoes: "AAS em < 19 anos. Ibuprofeno se plaquetopenia ou sangramento",
      ajustes: "Paracetamol máx 4 g/dia (adulto) e 75 mg/kg/dia (criança)"
    },
    {
      droga: "Amoxicilina / ampicilina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Provocam exantema maculopapular na maioria dos pacientes com mononucleose (não é alergia verdadeira, mas evita confusão)",
      ajustes: "Se faringite estreptocócica confirmada: penicilina benzatina ou cefalexina"
    },
    {
      droga: "Aciclovir / valaciclovir",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício clínico na mononucleose não complicada",
      ajustes: "—"
    }
  ],
  prescricao: {
    ambulatorial: "MONONUCLEOSE — SUPORTE (ADULTO)\nUSO ORAL\n1. Paracetamol 500 mg ---------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se dor ou febre (máximo 8 comprimidos por dia).\n   ou Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n2. Ibuprofeno 400 mg ----------------------------- 1 caixa (se dor de garganta forte e plaquetas normais)\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.\n\nCRIANÇA (por kg)\n1. Paracetamol 200 mg/mL gotas — 1 gota/kg/dose (máx 35 gotas) de 6 em 6 horas se dor ou febre.\n   ou Dipirona 500 mg/mL gotas (25 mg/gota) — 0,4 a 0,6 gota/kg/dose (máx 40 gotas) de 6 em 6 horas.\n2. Ibuprofeno 50 mg/mL gotas — 5–10 mg/kg/dose (máx 400 mg) de 8 em 8 horas se dor; converter em gotas conforme a bula do produto (o número de gotas por mL varia entre fabricantes).\n\nATESTADO: afastamento de esportes de contato, educação física e esforço intenso por no mínimo 4 semanas a partir do início dos sintomas."
  },
  orientacoesRetorno: [
    "A febre e a dor de garganta melhoram em 1–2 semanas; o cansaço pode durar semanas a meses",
    "Não praticar esporte de contato, lutas, educação física ou levantar peso por pelo menos 3–4 semanas (o baço aumentado pode romper)",
    "Não compartilhar copos, talheres e evitar beijar enquanto doente; o vírus fica na saliva por meses",
    "Evitar álcool enquanto houver alteração do fígado",
    "Voltar imediatamente se: dor forte na barriga do lado esquerdo ou no ombro esquerdo, tontura ou desmaio, dificuldade para respirar ou engolir saliva, pele ou olhos amarelos, manchas roxas ou sangramentos",
    "Retorno em 1–2 semanas, ou antes se piora"
  ],
  encaminhar: [
    "PS: obstrução de via aérea, suspeita de ruptura esplênica, desidratação por disfagia",
    "Hematologia: citopenias importantes, adenomegalia persistente > 4–6 semanas ou suspeita de linfoproliferação"
  ],
  fontes: [
    "CDC — About Epstein-Barr Virus / Infectious mononucleosis: clinical overview (2024)",
    "American Academy of Pediatrics — Red Book: Epstein-Barr Virus Infections (2024–2027)",
    "Womack J, Jimenez M. Common questions about infectious mononucleosis. Am Fam Physician (2015)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
