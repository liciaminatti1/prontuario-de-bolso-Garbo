// Hidratação venosa de manutenção e reposição
registrarFicha({
  id: "hidratacao-venosa",
  especialidade: "referencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Hidratação venosa: manutenção e reposição",
  resumo: "Cálculo e prescrição de soro de manutenção (Holliday-Segar na criança, 25–30 mL/kg/dia no adulto) com solução isotônica, e princípios de expansão e reposição de perdas. Para desidratação por diarreia, ver ficha Diarreia e desidratação (planos A, B e C).",
  palavrasChave: "hidratacao venosa soro de manutencao holliday segar 4 2 1 soro glicofisiologico isotonico hiponatremia hipotonico ringer lactato soro fisiologico expansao bolus reposicao perdas potassio kcl nacl 20% necessidade hidrica diaria criança adulto",
  critico: {
    tempo: "Manutenção isotônica",
    texto: "Criança de 28 dias a 18 anos: manutenção com solução isotônica (Na ~140–154 mEq/L) com glicose 5% e potássio (AAP 2018). Soro hipotônico de rotina causa hiponatremia e edema cerebral."
  },
  alarmes: [
    "Sódio < 130 ou queda > 8–10 mEq/L em 24 h; cefaleia, vômitos, convulsão durante soroterapia (hiponatremia)",
    "Risco de secreção inapropriada de ADH (meningite, pneumonia, bronquiolite, pós-operatório, dor, náusea): considerar restringir a 50–80% da manutenção",
    "Insuficiência cardíaca, renal ou hepática, idoso frágil: volumes menores e reavaliação frequente",
    "Potássio no soro só com diurese presente e K sérico conhecido ou normal",
    "Neonato (< 28 dias), cetoacidose, queimado, choque: protocolos próprios"
  ],
  conduta: [
    "Preferir via oral sempre que possível; soro IV tem indicação, dose e prazo, como qualquer medicamento",
    "Separar 3 objetivos: ressuscitação (bolus), reposição de déficit/perdas e manutenção",
    "Ressuscitação: cristaloide isotônico em bolus — criança 10–20 mL/kg em 5–20 min; adulto 500 mL em até 15 min — reavaliar após cada bolus (perfusão, FC, PA, diurese, crepitações, hepatomegalia)",
    "Manutenção: calcular pelo peso (tabela); solução isotônica com glicose 5% e KCl",
    "Reposição: somar perdas contínuas (vômitos, diarreia, sonda, febre) à manutenção, com solução semelhante ao líquido perdido (geralmente SF 0,9% ou Ringer lactato)",
    "Grandes volumes: cristaloide balanceado (Ringer lactato) reduz acidose hiperclorêmica",
    "Monitorar: peso diário, balanço hídrico, diurese (alvo ≥ 1 mL/kg/h na criança; ≥ 0,5 mL/kg/h no adulto), Na, K, glicemia e creatinina pelo menos diariamente",
    "Reavaliar a necessidade de soro todo dia e suspender assim que houver aceitação oral"
  ],
  tabelas: [
    {
      titulo: "Necessidade hídrica de manutenção — criança (Holliday-Segar)",
      colunas: ["Peso", "Por dia", "Por hora (regra 4-2-1)"],
      linhas: [
        ["Até 10 kg", "100 mL/kg", "4 mL/kg/h"],
        ["11 a 20 kg", "1.000 mL + 50 mL/kg acima de 10 kg", "40 mL/h + 2 mL/kg/h acima de 10 kg"],
        ["Acima de 20 kg", "1.500 mL + 20 mL/kg acima de 20 kg", "60 mL/h + 1 mL/kg/h acima de 20 kg"]
      ],
      nota: "Teto prático: volume de adulto (cerca de 2.000–2.500 mL/dia). Exemplos: 8 kg = 800 mL/dia (32 mL/h); 15 kg = 1.250 mL/dia (52 mL/h); 30 kg = 1.700 mL/dia (70 mL/h)."
    },
    {
      titulo: "Necessidades diárias — adulto (NICE CG174)",
      colunas: ["Componente", "Quantidade por dia", "Observação"],
      linhas: [
        ["Água", "25–30 mL/kg", "Idoso, cardiopata, renal, desnutrido: 20–25 mL/kg"],
        ["Sódio, potássio e cloro", "Cerca de 1 mEq/kg de cada", "K só com diurese"],
        ["Glicose", "50–100 g", "Evita cetose de jejum; não é nutrição"]
      ]
    },
    {
      titulo: "Concentrações úteis",
      colunas: ["Solução", "Conteúdo", "Uso"],
      linhas: [
        ["SF 0,9%", "Na 154 mEq/L, Cl 154 mEq/L", "Bolus, reposição; base da manutenção isotônica"],
        ["Ringer lactato", "Na 130, K 4, Cl 109, Ca 3, lactato 28 mEq/L", "Bolus e reposição de grandes volumes"],
        ["Soro glicofisiológico (glicose 5% + NaCl 0,9%)", "Na 154 mEq/L + 50 g/L de glicose", "Manutenção isotônica pronta"],
        ["NaCl 20% (ampola 10 mL)", "3,4 mEq de Na por mL", "Preparar soro: SG 5% 500 mL + NaCl 20% 22 mL ≈ Na 143 mEq/L"],
        ["KCl 19,1% (ampola 10 mL)", "2,5 mEq de K por mL", "4 mL em 500 mL ≈ 20 mEq/L. Nunca em bolus"],
        ["SG 5%", "50 g/L de glicose, sem sódio", "Não usar isolado como manutenção (hipotônico in vivo)"]
      ]
    }
  ],
  prescricao: {
    hospitalar: "CRIANÇA — MANUTENÇÃO ISOTÔNICA (exemplo 15 kg = 1.250 mL/dia ≈ 52 mL/h)\n1. Soro glicofisiológico (glicose 5% + NaCl 0,9%) 500 mL\n   + KCl 19,1% 4 mL (≈ 20 mEq/L) — se diurese presente e K normal\n   IV em bomba de infusão a 52 mL/h (52 microgotas/min), contínuo.\n   (Sem solução pronta: SG 5% 500 mL + NaCl 20% 22 mL + KCl 19,1% 4 mL.)\n2. Peso diário; balanço hídrico e diurese a cada 6 h; glicemia capilar de 8/8 h.\n3. Na, K, glicemia, ureia e creatinina na admissão e a cada 24 h (a cada 6–12 h se Na anormal ou risco de SIADH).\n4. Reduzir ou suspender à medida que aceitar dieta oral.\n\nCRIANÇA — EXPANSÃO (choque ou desidratação grave)\n1. SF 0,9% ou Ringer lactato 20 mL/kg (___ mL) IV em 5–20 min. Reavaliar perfusão, FC, PA, diurese, crepitações e fígado após cada bolus; repetir até 40–60 mL/kg se responder e sem sinais de sobrecarga (cardiopata e desnutrido grave: 10 mL/kg, mais lento).\n\nADULTO — MANUTENÇÃO (exemplo 70 kg, sem ingestão oral)\n1. SG 5% 500 mL + NaCl 20% 5 mL + KCl 19,1% 5 mL — IV a 83 mL/h (≈ 28 gotas/min), 4 etapas em 24 h.\n   (Total/dia ≈ 2.000 mL, 68 mEq de Na, 50 mEq de K, 100 g de glicose.)\n   Alternativa: Ringer lactato ou SF 0,9% alternado com SG 5%, conforme Na e glicemia.\n2. Peso diário, diurese, balanço hídrico; Na, K, creatinina diários.\n\nADULTO — EXPANSÃO\n1. Ringer lactato ou SF 0,9% 500 mL IV em até 15 min; reavaliar e repetir (até 2.000 mL) se ainda hipoperfundido e sem congestão. Sepse: 30 mL/kg nas primeiras 3 h se hipotensão ou lactato ≥ 4 (ver ficha Sepse)."
  },
  orientacoesRetorno: [
    "Assim que puder beber, a hidratação deve ser pela boca, em pequenos volumes frequentes",
    "Após a alta: voltar se vômitos que impedem beber, urina muito escassa, sonolência, boca muito seca ou criança sem lágrimas",
    "Em diarreia, usar o soro de reidratação oral (SRO) depois de cada evacuação"
  ],
  encaminhar: [
    "UTI ou nefrologia: hiponatremia sintomática, hipernatremia grave, oligúria persistente, sobrecarga de volume",
    "Neonatologia: soroterapia em recém-nascido"
  ],
  fontes: [
    "American Academy of Pediatrics — Clinical Practice Guideline: Maintenance Intravenous Fluids in Children (2018)",
    "NICE — NG29 Intravenous fluid therapy in children and young people in hospital (atualização 2020)",
    "NICE — CG174 Intravenous fluid therapy in adults in hospital (atualização 2017)",
    "Holliday MA, Segar WE. The maintenance need for water in parenteral fluid therapy. Pediatrics (1957)",
    "Surviving Sepsis Campaign — adultos (2021) e pediatria (2020)",
    "Ministério da Saúde — Manejo do paciente com diarreia (cartaz vigente, planos A, B e C)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
