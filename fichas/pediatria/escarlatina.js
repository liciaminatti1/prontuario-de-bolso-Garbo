// Escarlatina
registrarFicha({
  id: "escarlatina",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Escarlatina",
  resumo: "Faringoamigdalite pelo estreptococo beta-hemolítico do grupo A (S. pyogenes) com exantema eritematoso áspero (lixa), sinal de Pastia, palidez perioral e língua em framboesa; mais comum de 3 a 15 anos. Tratar com penicilina para prevenir febre reumática.",
  palavrasChave: "escarlatina estreptococo grupo a streptococcus pyogenes exantema lixa lingua framboesa pastia filatov amoxicilina penicilina benzatina faringite febre reumatica",
  critico: {
    tempo: "Antibiótico por 10 dias",
    texto: "Amoxicilina 50 mg/kg/dia por 10 dias ou penicilina benzatina dose única. Completar o tratamento previne febre reumática."
  },
  alarmes: [
    "Toxemia, hipotensão, má perfusão, exantema que evolui com descamação extensa e dor intensa (síndrome do choque tóxico estreptocócico)",
    "Dor intensa em pele/partes moles desproporcional ao achado (fasceíte necrosante)",
    "Trismo, voz abafada, desvio de úvula, salivação (abscesso periamigdaliano ou retrofaríngeo)",
    "Edema, urina escura ou com sangue, hipertensão 1–3 semanas depois (glomerulonefrite pós-estreptocócica)",
    "Artrite migratória, sopro novo, coreia (febre reumática)",
    "Febre persistente > 5 dias com conjuntivite, alterações de lábios, mãos e pés (pensar Kawasaki)"
  ],
  conduta: [
    "Diagnóstico clínico: febre, dor de garganta, exantema puntiforme áspero que começa no pescoço/tronco e se acentua nas dobras (sinal de Pastia), palidez perioral (sinal de Filatov), língua em framboesa; descamação de mãos e pés após 1–2 semanas",
    "Confirmar com teste rápido para estreptococo ou cultura de orofaringe quando disponível; não atrasar o tratamento se o quadro é típico",
    "1ª escolha: amoxicilina VO por 10 dias ou penicilina G benzatina IM dose única",
    "Alergia não grave à penicilina: cefalexina por 10 dias. Alergia grave (anafilaxia): azitromicina por 5 dias ou clindamicina por 10 dias",
    "Sintomáticos: antitérmico/analgésico, hidratação, hidratante para a pele",
    "Afastar da escola/creche até completar pelo menos 12–24 h de antibiótico e estar sem febre",
    "Contatos: tratar só os sintomáticos; não há indicação de profilaxia rotineira"
  ],
  exames: [
    "Teste rápido de antígeno para Streptococcus pyogenes (swab de orofaringe) ou cultura de orofaringe",
    "Não são necessários outros exames no caso típico",
    "Se suspeita de glomerulonefrite: urina tipo 1, creatinina, complemento (C3)"
  ],
  diferenciais: [
    "Exantemas virais (sarampo, rubéola, enteroviroses) — notificar sarampo/rubéola se suspeita",
    "Doença de Kawasaki (febre ≥ 5 dias, conjuntivite sem secreção, alteração de extremidades)",
    "Síndrome da pele escaldada estafilocócica (lactente, bolhas, sinal de Nikolsky)",
    "Mononucleose infecciosa (adenomegalia posterior, esplenomegalia)",
    "Farmacodermia, síndrome do choque tóxico"
  ],
  tratamento: [
    {
      droga: "Amoxicilina",
      linha: "l1",
      dose: "50 mg/kg/dia (máx 1.000 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia ou dividido de 12/12 h (25 mg/kg/dose, máx 500 mg/dose)",
      duracao: "10 dias",
      monitorizacao: "Febre deve ceder em 24–48 h",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Suspensão 250 mg/5 mL (50 mg/mL) ou 400 mg/5 mL. Adolescente ≥ 40 kg: 500 mg 12/12 h ou 1 g 1×/dia"
    },
    {
      droga: "Penicilina G benzatina",
      linha: "l1",
      dose: "< 27 kg: 600.000 UI · ≥ 27 kg: 1.200.000 UI",
      via: "IM profunda (glúteo ou vasto lateral)",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Observar 30 min após a aplicação",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Opção quando há dúvida sobre adesão ao tratamento oral por 10 dias. Aplicar na UBS (com adrenalina disponível)"
    },
    {
      droga: "Cefalexina (alergia não grave)",
      linha: "alt",
      dose: "20 mg/kg/dose (máx 500 mg/dose)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "10 dias",
      monitorizacao: "—",
      contraindicacoes: "Anafilaxia ou reação imediata grave à penicilina",
      ajustes: "Suspensão 250 mg/5 mL"
    },
    {
      droga: "Azitromicina (alergia grave)",
      linha: "alt",
      dose: "12 mg/kg/dia (máx 500 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "5 dias",
      monitorizacao: "Resistência do estreptococo a macrolídeos é possível",
      contraindicacoes: "Alergia a macrolídeos; QT longo",
      ajustes: "Alternativa: clindamicina 7 mg/kg/dose (máx 300 mg/dose) 8/8 h por 10 dias"
    }
  ],
  prescricao: {
    ambulatorial: "ESCARLATINA — CRIANÇA (exemplo 20 kg)\nUSO ORAL\n1. Amoxicilina 250 mg/5 mL suspensão ------------- 2 frascos de 150 mL\n   Dar 10 mL (500 mg = 25 mg/kg) de 12 em 12 horas por 10 dias.\n   (Cálculo: 50 mg/kg/dia, máx 1 g/dia; ou a dose diária inteira 1 vez ao dia.)\n2. Dipirona 500 mg/mL gotas (25 mg/gota) -------- 1 frasco\n   Dar 8 a 12 gotas (10–15 mg/kg) de 6 em 6 horas se febre ou dor.\n   ou Paracetamol 200 mg/mL gotas — 1 gota/kg/dose (máx 35 gotas) de 6 em 6 horas.\n\nOU (dose única, na UBS)\nUSO INTRAMUSCULAR\n1. Penicilina G benzatina 600.000 UI (< 27 kg) ou 1.200.000 UI (≥ 27 kg) — aplicar IM profunda, dose única.\n\nALERGIA À PENICILINA (não grave)\n1. Cefalexina 250 mg/5 mL suspensão — 8 mL (400 mg = 20 mg/kg) de 12 em 12 horas por 10 dias.\nALERGIA GRAVE\n1. Azitromicina 200 mg/5 mL suspensão — 6 mL (240 mg = 12 mg/kg) 1 vez ao dia por 5 dias."
  },
  orientacoesRetorno: [
    "Dar o antibiótico até o último dia, mesmo que a criança melhore antes (evita febre reumática)",
    "Pode voltar à escola após 24 h de antibiótico e sem febre",
    "A pele pode descascar nas mãos e nos pés depois de 1–2 semanas; é esperado",
    "Voltar imediatamente se: febre que não cede após 48 h de antibiótico, dificuldade para engolir ou abrir a boca, criança muito abatida, mãos e pés frios, manchas roxas",
    "Voltar nas próximas semanas se: urina escura ou avermelhada, inchaço no rosto, dor e inchaço nas juntas, movimentos involuntários"
  ],
  encaminhar: [
    "PS: sinais de choque tóxico, fasceíte, abscesso cervical",
    "Surtos em escola ou creche: comunicar a vigilância epidemiológica municipal (escarlatina isolada não é de notificação compulsória nacional)"
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Documento científico: Faringoamigdalites/estreptococo do grupo A e escarlatina (2023)",
    "IDSA — Clinical Practice Guideline for Group A Streptococcal Pharyngitis (2012)",
    "AHA — Prevention of Rheumatic Fever and Diagnosis and Treatment of Acute Streptococcal Pharyngitis (2009)",
    "American Academy of Pediatrics — Red Book: Group A Streptococcal Infections (2024–2027)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
