// Ventilação mecânica: ajustes iniciais e por gasometria
registrarFicha({
  id: "ventilacao-mecanica",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Ventilação mecânica: ajustes iniciais e ajustes por gasometria",
  resumo: "Programação inicial do ventilador após intubação no PS (ventilação protetora), ajustes conforme gasometria e cenários especiais: SDRA, asma/DPOC (obstrutivo), acidose metabólica grave, hipertensão intracraniana e criança.",
  palavrasChave: "ventilacao mecanica ventilador parametros iniciais vc volume corrente peso predito peep fio2 pressao de plato driving pressure sdra ards protetora asma dpoc auto peep gasometria ajuste frequencia respiratoria prona",
  critico: {
    tempo: "VC 6 mL/kg de peso PREDITO",
    texto: "Calcule o peso predito pela altura. Pressão de platô ≤ 30 cmH₂O e driving pressure ≤ 15 cmH₂O. Comece com FiO₂ 100% e reduza rápido para SpO₂ 92–96% (88–92% em DPOC)."
  },
  alarmes: [
    "Pressão de pico alta com platô normal: obstrução (secreção, tubo dobrado, broncoespasmo)",
    "Pressão de pico e platô altos: complacência baixa (SDRA, pneumotórax, intubação seletiva, distensão abdominal)",
    "Queda súbita de SpO₂ ou PA: DOPE — Deslocamento do tubo, Obstrução, Pneumotórax, Equipamento",
    "Auto-PEEP (fluxo expiratório não chega a zero) em asma/DPOC: hipotensão e barotrauma",
    "Acidose metabólica grave intubada com FR baixa: risco de PCR (manter ventilação minuto alta)",
    "Platô > 30 cmH₂O ou driving pressure > 15 cmH₂O"
  ],
  condutaInicial: [
    "Calcular o peso predito (PBW) pela altura e sexo (ver tabela)",
    "Modo inicial: volume controlado assistido (VCV) ou pressão controlada (PCV) conforme familiaridade",
    "VC 6–8 mL/kg PBW (6 mL/kg na SDRA ou risco); FR 14–20 irpm (maior se acidose metabólica); PEEP 5–8 cmH₂O; FiO₂ 100% e reduzir; fluxo 40–60 L/min ou Ti 0,8–1,0 s; relação I:E 1:2 a 1:3; sensibilidade −1 a −2 cmH₂O ou 1–3 L/min",
    "Medir pressão de platô (pausa inspiratória de 0,5 s) e calcular driving pressure (platô − PEEP)",
    "Titular FiO₂ em 15–30 min para SpO₂ 92–96% (PaO₂ 60–80 mmHg); DPOC/hipercápnico 88–92%",
    "Gasometria arterial 20–30 min após ajuste inicial",
    "Cabeceira 30–45°, sedação/analgesia (ver ficha sedacao-continua), sonda gástrica, balonete 20–30 cmH₂O",
    "Radiografia de tórax para posição do tubo e complicações"
  ],
  fataisExcluir: [
    "Intubação esofágica ou seletiva",
    "Pneumotórax hipertensivo",
    "Auto-PEEP com colapso circulatório (desconectar do ventilador por alguns segundos e comprimir o tórax)",
    "Obstrução do tubo por secreção ou mordedura",
    "Hipoventilação em acidose metabólica grave (CAD, intoxicação por salicilato)"
  ],
  proximaDecisao: "PaO₂/FiO₂ < 150 com PEEP ≥ 5 apesar da ventilação protetora → posição prona ≥ 12–16 h/dia, PEEP mais alta, considerar bloqueio neuromuscular por curto período e acionar UTI. Hipercapnia com pH < 7,20 apesar de FR máxima → aumentar VC se platô permitir; em asma, tolerar hipercapnia (pH ≥ 7,20) priorizando expiração longa.",
  clinica: {
    anamnese: [
      "Causa da insuficiência respiratória: SDRA (pneumonia, sepse), DPOC, asma, edema pulmonar, neurológico, intoxicação",
      "Altura (ou medir/estimar pela envergadura) e sexo para o peso predito",
      "Doença pulmonar crônica e PaCO₂ basal (retentor crônico)",
      "Gasometria antes da intubação (acidose metabólica a compensar)"
    ],
    exameFisico: [
      "Expansão torácica simétrica, ausculta (sibilos, crepitações, abolição)",
      "Assincronia paciente-ventilador (esforço inspiratório, duplo disparo)",
      "Hemodinâmica após PEEP e pressão positiva",
      "Curvas do ventilador: fluxo expiratório que não zera (auto-PEEP)"
    ],
    diferenciais: [
      { dx: "SDRA", pista: "Infiltrado bilateral, PaO₂/FiO₂ ≤ 300 com PEEP ≥ 5, não explicado só por IC" },
      { dx: "Edema pulmonar cardiogênico", pista: "Congestão, BNP alto, eco com disfunção; responde a PEEP e diurético" },
      { dx: "Doença obstrutiva (asma/DPOC)", pista: "Sibilos, pico alto com platô normal, auto-PEEP" },
      { dx: "Atelectasia / intubação seletiva", pista: "Murmúrio abolido à esquerda; radiografia" }
    ],
    gravidade: [
      "SDRA (definição global 2023): leve PaO₂/FiO₂ 201–300; moderada 101–200; grave ≤ 100 (com PEEP ≥ 5); SpO₂/FiO₂ ≤ 315 pode ser usada quando sem gasometria (SpO₂ ≤ 97%)",
      "Driving pressure > 15 cmH₂O associada a maior mortalidade",
      "Criança (PALICC-2): SDRA pediátrica pelo índice de oxigenação ou PaO₂/FiO₂ ajustado; acionar UTI pediátrica"
    ]
  },
  exames: [
    {
      nome: "Gasometria arterial",
      pedido: "Gasometria arterial 20–30 min após intubação e após cada ajuste relevante do ventilador.",
      porQue: "Ajustar FiO₂/PEEP (oxigenação) e FR/VC (ventilação).",
      esperar: "pH 7,30–7,45; PaCO₂ 35–45 (exceto hipercapnia permissiva); PaO₂ 60–80 mmHg.",
      interpretacao: "Ver tabela de ajustes por gasometria. Calcular PaO₂/FiO₂.",
      limitacoes: "Em DPOC, comparar com PaCO₂ basal; não normalizar PaCO₂ de retentor crônico."
    },
    {
      nome: "Mecânica respiratória",
      pedido: "Medir pressão de platô (pausa inspiratória 0,5 s) e PEEP total (pausa expiratória) após ajuste.",
      porQue: "Garantir ventilação protetora e detectar auto-PEEP.",
      esperar: "Platô ≤ 30; driving pressure ≤ 15; auto-PEEP mínima.",
      interpretacao: "Driving pressure alta: reduzir VC; auto-PEEP: reduzir FR e aumentar tempo expiratório.",
      limitacoes: "Exige paciente sem esforço inspiratório no momento da medida."
    },
    {
      nome: "Radiografia de tórax",
      pedido: "Radiografia de tórax no leito pós-intubação e se piora súbita.",
      porQue: "Tubo, pneumotórax, infiltrados, atelectasia.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Ultrassom pulmonar é mais rápido para pneumotórax."
    }
  ],
  tratamento: [
    {
      droga: "Ventilação protetora (todos)",
      linha: "l1",
      dose: "VC 6–8 mL/kg PBW; platô ≤ 30 cmH₂O; driving pressure ≤ 15 cmH₂O",
      via: "Ventilador (VCV ou PCV)",
      intervalo: "Reavaliar a cada ajuste",
      duracao: "Durante toda a ventilação",
      monitorizacao: "Platô, driving pressure, gasometria",
      contraindicacoes: "—",
      ajustes: "Peso predito: homem 50 + 0,91 × (altura cm − 152,4); mulher 45,5 + 0,91 × (altura cm − 152,4)"
    },
    {
      droga: "SDRA moderada/grave",
      linha: "l1",
      dose: "VC 4–6 mL/kg PBW; PEEP pela tabela PEEP/FiO₂ (ARDSNet); SpO₂ 88–95% (PaO₂ 55–80)",
      via: "Ventilador",
      intervalo: "Reavaliar a cada 4–6 h",
      duracao: "—",
      monitorizacao: "Platô, pH (aceitar ≥ 7,20–7,25)",
      contraindicacoes: "Prona: instabilidade de coluna, abdome aberto, hipertensão intracraniana não controlada",
      ajustes: "PaO₂/FiO₂ < 150: prona ≥ 16 h/dia; bloqueio neuromuscular não rotineiro (considerar se assincronia grave). Manobras de recrutamento prolongadas não recomendadas"
    },
    {
      droga: "Asma / DPOC (obstrutivo)",
      linha: "l1",
      dose: "VC 6–8 mL/kg PBW; FR 8–12 irpm (asma) / 10–14 (DPOC); fluxo 60–80 L/min; I:E ≥ 1:3–1:4; PEEP 5 (DPOC: até 80% do auto-PEEP)",
      via: "Ventilador",
      intervalo: "Medir auto-PEEP e platô",
      duracao: "—",
      monitorizacao: "Auto-PEEP, platô < 30, PA",
      contraindicacoes: "—",
      ajustes: "Hipercapnia permissiva (pH ≥ 7,20). Broncodilatador no circuito. Hipotensão súbita: desconectar 10–30 s e reavaliar"
    },
    {
      droga: "Acidose metabólica grave (CAD, intoxicação)",
      linha: "l1",
      dose: "Manter ventilação minuto igual ou maior que antes da intubação; FR 20–30 irpm",
      via: "Ventilador",
      intervalo: "Gasometria em 20–30 min",
      duracao: "—",
      monitorizacao: "pH, ETCO₂",
      contraindicacoes: "—",
      ajustes: "Usar a PaCO₂ pré-intubação como alvo inicial; evitar intubar se possível"
    },
    {
      droga: "Hipertensão intracraniana / TCE",
      linha: "l1",
      dose: "PaCO₂ 35–45 mmHg (normocapnia); SpO₂ ≥ 94%; PEEP 5–8",
      via: "Ventilador",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "ETCO₂ contínuo, gasometria",
      contraindicacoes: "Hiperventilação profilática",
      ajustes: "Hiperventilação breve (PaCO₂ 30–35) só como ponte em herniação iminente"
    },
    {
      droga: "Criança (PALICC-2)",
      linha: "l1",
      dose: "VC 6–8 mL/kg de peso predito (4–6 mL/kg se platô/driving altos); platô ≤ 28 cmH₂O (29–32 se complacência da caixa torácica reduzida); driving pressure ≤ 15 cmH₂O; PEEP inicial 5",
      via: "Ventilador (PCV ou VCV)",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Gasometria, platô, ETCO₂",
      contraindicacoes: "—",
      ajustes: "FR inicial pela idade: lactente 25–30; pré-escolar 20–25; escolar 15–20; adolescente 12–16 irpm. Ti 0,5–0,6 s (lactente) a 0,8–1,0 s (adolescente). SpO₂ 92–97% (aceitar 88–92% se PEEP ≥ 10)"
    }
  ],
  destino: {
    agora: [
      "Ventilação protetora na sala de emergência e solicitação de leito de UTI"
    ],
    reavaliar: [
      "Gasometria 20–30 min após ajustes; platô e driving pressure a cada mudança",
      "Revisar DOPE em qualquer piora súbita"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "UTI adulto ou pediátrica"
    ],
    transferencia: [
      "Sem UTI: regulação; transporte com ventilador de transporte, capnografia, sedação e equipe de suporte avançado",
      "SDRA grave refratária à prona: centro com ECMO se disponível"
    ]
  },
  prescricao: {
    hospitalar: "VENTILAÇÃO MECÂNICA — PARÂMETROS INICIAIS (ADULTO)\nAltura: ___ cm  Sexo: ___  Peso predito: ___ kg\n1. Modo: volume controlado assistido (VCV).\n2. VC: 6 mL/kg de peso predito = ___ mL (6–8 mL/kg; 6 mL/kg se SDRA).\n3. FR: 16 irpm (20–30 se acidose metabólica; 10–12 se asma/DPOC).\n4. PEEP: 5–8 cmH₂O (SDRA: tabela PEEP/FiO₂).\n5. FiO₂: 100% e reduzir em 15–30 min para SpO₂ 92–96% (DPOC: 88–92%).\n6. Fluxo 50–60 L/min (obstrutivo: 60–80 L/min), onda descendente; I:E 1:2 (obstrutivo ≥ 1:3).\n7. Sensibilidade a fluxo 2 L/min ou pressão −2 cmH₂O.\n8. Medir pressão de platô (pausa 0,5 s): manter ≤ 30 cmH₂O; driving pressure ≤ 15 cmH₂O.\n9. Gasometria arterial em 30 min; radiografia de tórax.\n10. Cabeceira 30–45°; balonete 20–30 cmH₂O; sonda orogástrica; analgossedação contínua (ver ficha sedacao-continua).\n11. Umidificação com filtro trocador de calor e umidade; aspiração de vias aéreas se necessário.\n\nCRIANÇA (peso: ___ kg; usar peso predito pela altura se disponível)\n- PCV ou VCV; VC 6–8 mL/kg; PEEP 5; FiO₂ para SpO₂ 92–97%.\n- FR: lactente 25–30; pré-escolar 20–25; escolar 15–20; adolescente 12–16 irpm.\n- Ti: 0,5–0,6 s (lactente) a 0,8–1,0 s (adolescente).\n- Platô ≤ 28 cmH₂O; driving pressure ≤ 15 cmH₂O."
  },
  orientacoesRetorno: [
    "Família: a ventilação mecânica é suporte temporário enquanto se trata a causa; o tempo varia com a doença",
    "Após extubação e alta: fisioterapia respiratória e motora; procurar atendimento se piora da falta de ar, estridor ou rouquidão persistente"
  ],
  tabelas: [
    {
      titulo: "Ajustes por gasometria",
      colunas: ["Problema", "Ação"],
      linhas: [
        ["PaCO₂ alta com pH < 7,30", "Aumentar FR (FR nova = FR atual × PaCO₂ atual ÷ PaCO₂ desejada); se platô permitir, aumentar VC até 8 mL/kg PBW"],
        ["PaCO₂ baixa com pH > 7,45", "Reduzir FR; checar dor, ansiedade, assincronia"],
        ["PaO₂ baixa (SpO₂ < 92%)", "Aumentar FiO₂ e PEEP (tabela PEEP/FiO₂); checar DOPE"],
        ["PaO₂ alta (SpO₂ > 96%)", "Reduzir FiO₂ primeiro até ≤ 60%; depois reduzir PEEP"],
        ["FiO₂ ideal (estimativa)", "FiO₂ nova = PaO₂ desejada × FiO₂ atual ÷ PaO₂ atual"],
        ["Obstrutivo com auto-PEEP", "Reduzir FR, aumentar fluxo, reduzir VC; aceitar pH ≥ 7,20"]
      ]
    },
    {
      titulo: "Tabela PEEP/FiO₂ (ARDSNet — PEEP baixa)",
      colunas: ["FiO₂", "PEEP (cmH₂O)"],
      linhas: [
        ["0,3", "5"],
        ["0,4", "5–8"],
        ["0,5", "8–10"],
        ["0,6", "10"],
        ["0,7", "10–14"],
        ["0,8", "14"],
        ["0,9", "14–18"],
        ["1,0", "18–24"]
      ],
      nota: "Usar o menor par que mantenha SpO₂ 88–95% ou PaO₂ 55–80 mmHg na SDRA."
    },
    {
      titulo: "Peso predito (PBW) por altura",
      colunas: ["Altura", "Homem", "Mulher"],
      linhas: [
        ["150 cm", "48 kg", "43 kg"],
        ["160 cm", "57 kg", "52 kg"],
        ["170 cm", "66 kg", "62 kg"],
        ["180 cm", "75 kg", "71 kg"],
        ["190 cm", "84 kg", "80 kg"]
      ],
      nota: "Homem: 50 + 0,91 × (altura − 152,4). Mulher: 45,5 + 0,91 × (altura − 152,4). Valores arredondados."
    }
  ],
  fontes: [
    "AMIB/SBPT — Joint statement on evidence-based practices in mechanical ventilation: suggestions from two Brazilian medical societies (J Bras Pneumol, 2025)",
    "American Thoracic Society — Clinical Practice Guideline Update: Management of Acute Respiratory Distress Syndrome (Am J Respir Crit Care Med, 2024)",
    "ESICM — Guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies (Intensive Care Med, 2023)",
    "Matthay MA et al. — A New Global Definition of ARDS (Am J Respir Crit Care Med, 2024)",
    "PALICC-2 — Second Pediatric Acute Lung Injury Consensus Conference (Pediatr Crit Care Med, 2023)",
    "ARDS Network — Ventilation with lower tidal volumes (NEJM, 2000) e tabela PEEP/FiO₂"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
