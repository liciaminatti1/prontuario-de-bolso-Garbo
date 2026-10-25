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
    "Faringite: aplicar Centor/McIsaac (ou FeverPAIN) para decidir quem testar ou tratar",
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
      dose: "Adulto 500 mg 12/12h ou 1 g 1×/dia · criança 50 mg/kg 1×/dia (máx 1.000 mg) ou 25 mg/kg 12/12h (máx 500 mg/dose)",
      via: "VO",
      intervalo: "Conforme dose",
      duracao: "10 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Alergia não grave: cefalexina 500 mg 12/12h 10 dias (criança 20 mg/kg/dose 12/12h, máx 500 mg/dose). Alergia grave: azitromicina 500 mg 1×/dia por 5 dias (criança 12 mg/kg 1×/dia, máx 500 mg) ou clindamicina 300 mg 8/8h por 10 dias (criança 7 mg/kg/dose 8/8h, máx 300 mg/dose)"
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
      dose: "Adulto 500 mg 8/8h ou 875 mg 12/12h · criança 45 mg/kg/dia de 12/12h; dose alta 90 mg/kg/dia de 12/12h (máx 2 g/dose) se < 2 anos, creche, antibiótico nos últimos 30 dias ou região com pneumococo resistente",
      via: "VO",
      intervalo: "8/8h ou 12/12h",
      duracao: "5–7 dias (criança 10 dias)",
      monitorizacao: "Melhora em 72 h",
      contraindicacoes: "Alergia",
      ajustes: "Antibiótico recente, > 65 anos, grave ou falha: amoxicilina-clavulanato 875/125 mg 12/12h. Criança: amoxicilina-clavulanato 90 mg/kg/dia de amoxicilina de 12/12h. Alérgicos adultos: doxiciclina 100 mg 12/12h (não usar em < 8 anos nem em gestantes)"
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
      dose: "Adulto: dipirona 500–1.000 mg ou paracetamol 500–750 mg ou ibuprofeno 400 mg · criança: dipirona 15 mg/kg/dose (máx 1 g) ou paracetamol 10–15 mg/kg/dose (máx 750 mg) ou ibuprofeno 5–10 mg/kg/dose (máx 400 mg; > 6 meses)",
      via: "VO",
      intervalo: "6/6h ou 8/8h se necessário",
      duracao: "Enquanto sintomas",
      monitorizacao: "—",
      contraindicacoes: "AAS em < 18 anos (Reye)",
      ajustes: "Dipirona: evitar em < 3 meses ou < 5 kg. Mel para tosse em > 1 ano. Evitar antitussígenos e descongestionantes em < 6 anos"
    },
    {
      droga: "Influenza com risco: oseltamivir",
      linha: "adj",
      dose: "Adulto 75 mg · criança ≥ 1 ano: ≤ 15 kg 30 mg; > 15–23 kg 45 mg; > 23–40 kg 60 mg; > 40 kg 75 mg · < 1 ano: 0–8 meses 3 mg/kg; 9–11 meses 3,5 mg/kg",
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
  prescricao: {
    ambulatorial: "RESFRIADO / SINTOMÁTICOS (USO ORAL E NASAL)\n1. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre (criança: 15 mg/kg/dose, máx 1 g/dose).\n2. Soro fisiológico 0,9% --------------------------- 1 frasco\n   Aplicar 5 a 10 mL em cada narina, 4 a 6 vezes ao dia, enquanto houver congestão.\n\nFARINGITE ESTREPTOCÓCICA (USO ORAL)\n3. Amoxicilina 500 mg ------------------------------ 20 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 10 dias.\n   Criança: amoxicilina suspensão 250 mg/5 mL — 50 mg/kg 1 vez ao dia (máx 1.000 mg) por 10 dias.\n   OU (adesão duvidosa)\n   Penicilina G benzatina 1.200.000 UI ------------- 1 frasco-ampola\n   Aplicar 1.200.000 UI IM profunda, dose única (< 27 kg: 600.000 UI). Observar 30 minutos.\n\nSINUSITE BACTERIANA (USO ORAL)\n4. Amoxicilina 875 mg ------------------------------ 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   Criança: 45 mg/kg/dia (dose alta 90 mg/kg/dia) divididos de 12 em 12 horas por 10 dias.\n5. Budesonida spray nasal 64 mcg ------------------- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia por 2 a 4 semanas.\n\nSÍNDROME GRIPAL COM FATOR DE RISCO (USO ORAL)\n6. Oseltamivir 75 mg ------------------------------- 10 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 5 dias (criança: dose por peso, ver tratamento)."
  },
  orientacoesRetorno: [
    "Resfriado dura 7 a 10 dias; a tosse pode durar até 3 semanas",
    "Beber bastante líquido, lavar o nariz com soro várias vezes ao dia, lavar as mãos",
    "Se receber antibiótico, tomar até o fim mesmo que melhore antes",
    "Voltar imediatamente se falta de ar, dificuldade para engolir a saliva, voz abafada, boca que não abre, inchaço ou vermelhidão ao redor do olho, visão dupla, dor de cabeça forte com rigidez de nuca ou sonolência",
    "Voltar se a febre durar mais de 3 dias, se piorar depois de ter melhorado, ou se não melhorar em 72 horas de antibiótico",
    "Sinusite sem antibiótico: retornar em 7 dias se não houver melhora"
  ],
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Faringite sem melhora em 72 h de penicilina/amoxicilina", "Reavaliar: abscesso periamigdaliano (ver drenagem-abscesso-periamigdaliano), mononucleose, adesão", "S. pyogenes segue sensível à penicilina"],
        ["Faringite recorrente ou falha bacteriológica", "Amoxicilina-clavulanato ou clindamicina por 10 dias", "IDSA 2012"],
        ["Faringite com alergia à penicilina", "Não grave: cefalexina 10 dias; grave: azitromicina 12 mg/kg/dia (máx. 500 mg) por 5 dias ou clindamicina 7 mg/kg/dose de 8/8 h (máx. 300 mg) por 10 dias", "Resistência do estreptococo a macrolídeo existe"],
        ["Sinusite sem melhora em 72 h ou piora", "Amoxicilina-clavulanato em dose alta; adulto alérgico: doxiciclina ou levofloxacino 500 mg 1×/dia", "Macrolídeo e SMX-TMP não são recomendados (resistência do pneumococo)"],
        ["Falha do 2º esquema ou complicação (edema orbitário, cefaleia intensa, sinais neurológicos)", "TC de seios/órbita; internar; ceftriaxona IV e ORL", "—"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia de Manejo e Tratamento de Influenza (2023)",
    "IDSA — Guideline on the Diagnosis of Group A Streptococcal Pharyngitis, parte 1: diagnóstico (Clin Infect Dis, 2025)",
    "IDSA — Clinical Practice Guideline for Group A Streptococcal Pharyngitis: tratamento (2012)",
    "IDSA — Clinical Practice Guideline for Acute Bacterial Rhinosinusitis in Children and Adults (2012)",
    "AAP — Clinical Practice Guideline for Acute Bacterial Sinusitis in Children 1 to 18 Years (2013)",
    "EPOS — European Position Paper on Rhinosinusitis and Nasal Polyps (2020)",
    "ABORL-CCF — Diretrizes Brasileiras de Rinossinusites (2015)"
  ],
  revisao: "2026-10-25",
  versao: "1.3"
});
