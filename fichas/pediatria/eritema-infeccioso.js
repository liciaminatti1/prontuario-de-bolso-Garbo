// Eritema infeccioso (parvovírus B19)
registrarFicha({
  id: "eritema-infeccioso",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Eritema infeccioso (quinta doença, parvovírus B19)",
  resumo: "Infecção pelo parvovírus B19, mais comum em escolares: bochechas vermelhas (face esbofeteada) seguidas de exantema rendilhado em braços e pernas, que vai e volta por semanas. Benigno na criança saudável; perigoso em gestantes, doença falciforme e outras anemias hemolíticas, e imunodeprimidos.",
  palavrasChave: "eritema infeccioso quinta doenca parvovirus b19 face esbofeteada bochecha vermelha rendilhado crise aplastica gestante hidropsia anemia falciforme",
  alarmes: [
    "Criança com doença falciforme, esferocitose ou outra anemia hemolítica com febre, palidez, cansaço (crise aplásica)",
    "Gestante exposta ou com sintomas (risco de anemia fetal e hidropsia)",
    "Imunodeprimido (anemia crônica por infecção persistente)",
    "Palidez intensa, taquicardia, dispneia",
    "Petéquias, púrpura ou exantema em luvas e meias com febre (pensar em outros diagnósticos e investigar)"
  ],
  conduta: [
    "Diagnóstico clínico na criança saudável: face esbofeteada com palidez perioral + exantema rendilhado em membros",
    "Quando o exantema aparece, a criança já não transmite: não precisa afastar da escola",
    "Sintomáticos: antitérmico se febre; anti-histamínico se prurido",
    "Adolescentes e adultos podem ter artralgia/artrite simétrica de mãos, punhos e joelhos: AINE por curto período (adulto)",
    "Perguntar sempre: doença falciforme ou outra anemia hemolítica, imunodepressão, gestantes em casa ou na escola",
    "Falciforme/hemolítica com quadro compatível ou contato: hemograma com reticulócitos no mesmo dia (crise aplásica: queda de Hb com reticulócitos muito baixos)",
    "Gestante exposta: solicitar IgM e IgG para parvovírus B19 e encaminhar ao pré-natal; IgM reagente → pré-natal de alto risco para ultrassonografias seriadas (anemia fetal, hidropsia)",
    "Não há notificação compulsória de caso isolado; surtos em escola/creche: comunicar a vigilância epidemiológica"
  ],
  exames: [
    "Criança saudável com quadro típico: nenhum",
    "Doença falciforme/anemia hemolítica: hemograma com reticulócitos (urgente)",
    "Gestante exposta ou sintomática: sorologia IgM e IgG para parvovírus B19 (PCR conforme o serviço de medicina fetal)",
    "Imunodeprimido com anemia: PCR para parvovírus B19 (sorologia pode ser negativa)"
  ],
  diferenciais: [
    "Rubéola e sarampo (exantema com febre e sintomas respiratórios ou adenomegalia: notificar)",
    "Escarlatina (eritema áspero, faringite)",
    "Farmacodermia, urticária",
    "Lúpus eritematoso sistêmico (eritema malar fixo, artrite persistente)",
    "Síndrome papular-purpúrica em luvas e meias (também pelo parvovírus B19)"
  ],
  prescricao: {
    ambulatorial: "ERITEMA INFECCIOSO — CRIANÇA (peso: ___ kg)\nUSO ORAL\n1. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (10 mg/kg; máximo 35 gotas) de 6 em 6 horas se febre ou dor.\n\nSE PRURIDO (maiores de 2 anos)\n2. Loratadina 1 mg/mL xarope -------------------------- 1 frasco\n   2 a 12 anos e até 30 kg: 5 mL 1 vez ao dia; acima de 30 kg: 10 mL 1 vez ao dia, por até 7 dias.\n\nADOLESCENTE/ADULTO COM ARTRALGIA (sem contraindicação a AINE, não gestante)\n3. Ibuprofeno 400 mg ---------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.\n   (criança: ibuprofeno 10 mg/kg/dose de 8 em 8 horas, máximo 400 mg/dose)"
  },
  orientacoesRetorno: [
    "As manchas podem ir e voltar por algumas semanas, principalmente com sol, calor, banho quente ou exercício; isso não é piora",
    "Quando as manchas aparecem a criança já não transmite e pode ir à escola",
    "Avise gestantes que tiveram contato com a criança para contarem no pré-natal",
    "Voltar imediatamente se: palidez forte, cansaço fora do normal, falta de ar, manchas roxas que não somem ao apertar, febre alta persistente",
    "Criança com anemia falciforme ou outra anemia: procurar atendimento no mesmo dia se febre, palidez ou desânimo"
  ],
  encaminhar: [
    "PS no mesmo dia: crise aplásica (doença falciforme ou hemolítica) — pode precisar de transfusão",
    "Pré-natal de alto risco/medicina fetal: gestante com infecção aguda confirmada",
    "Hematologia/infectologia: imunodeprimido com anemia persistente"
  ],
  fontes: [
    "American Academy of Pediatrics — Red Book 2024–2027: Parvovirus B19 (Erythema Infectiosum, Fifth Disease)",
    "CDC — Health Alert Network: Increased Human Parvovirus B19 Activity in the United States (2024) — orientações para gestantes e doença falciforme",
    "Ministério da Saúde — PCDT Doença Falciforme (Portaria Conjunta SAES/SECTICS nº 16/2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
