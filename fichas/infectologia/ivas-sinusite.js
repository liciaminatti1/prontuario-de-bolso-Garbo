// Infecções de vias aéreas superiores
registrarFicha({
  id: "ivas-sinusite",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "IVAS: resfriado, faringite e sinusite",
  resumo: "Coriza, dor de garganta, tosse, congestão ou dor facial. A maioria é viral; decidir quem precisa de antibiótico.",
  palavrasChave: "ivas resfriado gripe faringite amigdalite sinusite rinossinusite amoxicilina penicilina benzatina centor tosse coriza",
  critico: {
    tempo: "Antibiótico raramente",
    texto: "Resfriado e a maioria das faringites e sinusites são virais. Antibiótico só com critérios de faringite estreptocócica ou sinusite bacteriana."
  },
  alarmes: [
    "Dificuldade para engolir saliva, trismo, voz abafada, desvio de úvula (abscesso periamigdaliano)",
    "Estridor, salivação, posição em tripé (epiglotite)",
    "Edema periorbital, alteração visual, cefaleia intensa, rigidez de nuca (complicação de sinusite)",
    "Dispneia, SpO₂ < 95%, febre alta > 3 dias (pensar pneumonia)",
    "Imunossupressão"
  ],
  condutaInicial: [
    "Diferenciar resfriado, faringite, sinusite, influenza",
    "Faringite: aplicar Centor/McIsaac",
    "Sinusite: critérios de bacteriana (> 10 dias, piora bifásica ou grave)",
    "Sintomáticos: analgésico/antitérmico, lavagem nasal com soro fisiológico, hidratação",
    "Orientar duração esperada (tosse pode durar 3 semanas) e sinais de retorno"
  ],
  fataisExcluir: [
    "Abscesso periamigdaliano / retrofaríngeo",
    "Epiglotite",
    "Complicação orbitária ou intracraniana de sinusite",
    "Pneumonia",
    "Difteria (não vacinado, membrana acinzentada aderente)"
  ],
  proximaDecisao: "Faringite com Centor ≥ 3–4 (ou teste rápido positivo) → antibiótico. Sinusite com critério bacteriano → amoxicilina; sem critério → sintomáticos e reavaliar em 7 dias.",
  clinica: {
    anamnese: [
      "Tempo de sintomas e evolução (melhora e piora = bifásica)",
      "Febre, tosse, coriza, dor de garganta, dor facial, rinorreia purulenta, hiposmia",
      "Contato com casos, vacinação (influenza, difteria)",
      "Uso recente de antibiótico, alergias",
      "Comorbidades (asma, DPOC, imunossupressão)"
    ],
    exameFisico: [
      "Temperatura, FR, SpO₂",
      "Orofaringe: exsudato, edema, abaulamento, úvula",
      "Linfonodos cervicais anteriores dolorosos",
      "Dor à palpação de seios da face, rinoscopia anterior",
      "Ausculta pulmonar, otoscopia"
    ],
    diferenciais: [
      { dx: "Resfriado comum", pista: "Coriza, espirros, febre baixa; 7–10 dias" },
      { dx: "Influenza", pista: "Febre alta súbita, mialgia, prostração" },
      { dx: "Faringite estreptocócica", pista: "Febre, exsudato, adenite anterior, sem tosse; 5–15 anos" },
      { dx: "Mononucleose", pista: "Adenomegalia posterior, esplenomegalia, fadiga; rash com amoxicilina" },
      { dx: "Rinite alérgica", pista: "Prurido, espirros em salva, sem febre" }
    ],
    gravidade: [
      "Centor/McIsaac: febre > 38°C, ausência de tosse, adenite cervical anterior dolorosa, exsudato/edema amigdaliano (+1 cada); 3–14 anos +1; ≥ 45 anos −1",
      "Sinusite bacteriana: sintomas > 10 dias sem melhora, piora após melhora inicial, ou febre ≥ 39°C + secreção purulenta por 3–4 dias"
    ]
  },
  exames: [
    {
      nome: "Teste rápido para estreptococo",
      pedido: "Teste rápido de antígeno para Streptococcus pyogenes (swab de orofaringe).",
      porQue: "Confirmar faringite estreptocócica em Centor 2–3.",
      esperar: "—",
      interpretacao: "Positivo → antibiótico. Negativo em criança: cultura se disponível.",
      limitacoes: "Disponibilidade limitada na APS."
    },
    {
      nome: "Imagem dos seios da face",
      pedido: "Não solicitar RX de seios da face. TC de seios apenas se suspeita de complicação ou sinusite crônica/recorrente com indicação cirúrgica.",
      porQue: "RX não diferencia viral de bacteriana.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Faringite estreptocócica: amoxicilina",
      linha: "l1",
      dose: "Adulto 500 mg 8/8h (ou 1 g 1×/dia) · criança 50 mg/kg/dia (máx 1 g/dia) em 1–2 tomadas",
      via: "VO",
      intervalo: "Conforme dose",
      duracao: "10 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Alergia não grave: cefalexina 500 mg 12/12h 10 dias. Grave: azitromicina 500 mg/dia por 5 dias (criança 12 mg/kg/dia)"
    },
    {
      droga: "Penicilina G benzatina",
      linha: "alt",
      dose: "1.200.000 UI (< 27 kg: 600.000 UI)",
      via: "IM profunda",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Observar 30 min (anafilaxia)",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Útil quando a adesão ao tratamento oral é duvidosa"
    },
    {
      droga: "Sinusite bacteriana: amoxicilina",
      linha: "l1",
      dose: "Adulto 500 mg 8/8h ou 875 mg 12/12h · criança 45–90 mg/kg/dia",
      via: "VO",
      intervalo: "8/8h ou 12/12h",
      duracao: "5–7 dias (criança 10 dias)",
      monitorizacao: "Melhora em 72 h",
      contraindicacoes: "Alergia",
      ajustes: "Antibiótico recente, > 65 anos, grave ou falha: amoxicilina-clavulanato 875/125 mg 12/12h. Alérgicos: doxiciclina 100 mg 12/12h"
    },
    {
      droga: "Lavagem nasal e corticoide nasal",
      linha: "l1",
      dose: "Soro fisiológico em jato ou spray várias vezes ao dia · budesonida 64 mcg 1–2 jatos por narina 1–2×/dia",
      via: "Nasal",
      intervalo: "—",
      duracao: "Durante os sintomas",
      monitorizacao: "Epistaxe",
      contraindicacoes: "—",
      ajustes: "Corticoide nasal útil na sinusite e na rinite alérgica"
    },
    {
      droga: "Sintomáticos",
      linha: "l1",
      dose: "Dipirona 500–1.000 mg ou paracetamol 500–750 mg ou ibuprofeno 400 mg",
      via: "VO",
      intervalo: "6/6h ou 8/8h se necessário",
      duracao: "Enquanto sintomas",
      monitorizacao: "—",
      contraindicacoes: "AAS em < 18 anos (Reye)",
      ajustes: "Mel para tosse em > 1 ano. Evitar antitussígenos e descongestionantes em < 6 anos"
    },
    {
      droga: "Influenza com risco: oseltamivir",
      linha: "adj",
      dose: "75 mg 12/12h (ajustar por peso em crianças)",
      via: "VO",
      intervalo: "12/12h",
      duracao: "5 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Síndrome gripal com fator de risco (gestante, < 5 anos, ≥ 60, comorbidades) ou SRAG, idealmente em 48 h. ClCr 30–60: 30 mg 12/12h"
    }
  ],
  destino: {
    agora: [
      "Sintomáticos e orientação; antibiótico somente se critérios"
    ],
    reavaliar: [
      "Sem melhora em 72 h com antibiótico ou piora em qualquer momento",
      "Sinusite sem antibiótico: reavaliar em 7 dias"
    ],
    alta: [
      "Tratamento domiciliar com orientação de sinais de alarme"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Abscesso profundo, epiglotite, complicação orbitária/intracraniana"
    ],
    transferencia: [
      "PS/otorrino: suspeita de abscesso, epiglotite, celulite orbitária",
      "Otorrino eletivo: amigdalites recorrentes (≥ 7 em 1 ano), sinusite crônica"
    ]
  },
  fontes: [
    "IDSA — Clinical Practice Guideline for Group A Streptococcal Pharyngitis (2012)",
    "IDSA — Clinical Practice Guideline for Acute Bacterial Rhinosinusitis (2012)",
    "ABORL-CCF — Diretrizes Brasileiras de Rinossinusites (2015)",
    "Ministério da Saúde — Protocolo de Tratamento de Influenza (2023)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
