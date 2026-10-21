// Diarreia aguda e desidratação na criança
registrarFicha({
  id: "diarreia-desidratacao",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  titulo: "Diarreia aguda e desidratação na criança",
  resumo: "Três ou mais evacuações líquidas em 24 h por menos de 14 dias. Avaliar hidratação e aplicar os Planos A, B ou C do Ministério da Saúde.",
  palavrasChave: "diarreia gastroenterite desidratacao sro soro de reidratacao oral plano a b c zinco ondansetrona disenteria pediatria",
  critico: {
    tempo: "Avalie a hidratação",
    texto: "Sem desidratação: Plano A (casa). Com desidratação: Plano B (SRO 50–100 mL/kg em 4–6 h na unidade). Desidratação grave: Plano C — SF 0,9% ou Ringer 30 mL/kg (em 1 h se < 1 ano; em 30 min se ≥ 1 ano) e depois 70 mL/kg."
  },
  alarmes: [
    "Letargia, inconsciência, incapacidade de beber",
    "Olhos muito fundos, sinal da prega que desaparece muito lentamente (≥ 2 s), pulso fraco ou ausente",
    "Vômitos incoercíveis, distensão abdominal, dor intensa",
    "Sangue nas fezes com febre alta ou toxemia",
    "< 6 meses, desnutrição grave, diarreia > 14 dias"
  ],
  condutaInicial: [
    "Avaliar estado geral, olhos, sede, sinal da prega, pulso, enchimento capilar, peso",
    "Classificar: sem desidratação, desidratação ou desidratação grave",
    "Plano A/B/C conforme classificação",
    "Zinco por 10–14 dias e manter alimentação habitual (aleitamento materno sempre)",
    "Orientar sinais de perigo e retorno"
  ],
  fataisExcluir: [
    "Choque hipovolêmico",
    "Distúrbio eletrolítico grave (hipo/hipernatremia)",
    "Síndrome hemolítico-urêmica (diarreia com sangue + palidez + oligúria)",
    "Abdome agudo (invaginação, apendicite)",
    "Sepse"
  ],
  proximaDecisao: "Plano B: reavaliar a cada hora; hidratada → Plano A; piorou ou não tolera SRO → Plano C ou SNG. Plano C: reavaliar a cada 15–30 min e passar a SRO assim que conseguir beber.",
  clinica: {
    anamnese: [
      "Número de evacuações, duração, sangue ou muco, vômitos, febre",
      "Diurese, aceitação de líquidos, últimas mamadas",
      "Contatos, creche, viagem, água e alimentos suspeitos",
      "Medicações e antibióticos recentes",
      "Vacinação para rotavírus, estado nutricional"
    ],
    exameFisico: [
      "Estado geral: alerta / irritado / letárgico",
      "Olhos (fundos?), lágrimas, boca e língua",
      "Sede: bebe normalmente / avidamente / incapaz",
      "Sinal da prega, pulso, enchimento capilar (> 3 s = grave)",
      "Peso (comparar com anterior), abdome"
    ],
    diferenciais: [
      { dx: "Gastroenterite viral", pista: "Mais comum; vômitos iniciais, sem sangue" },
      { dx: "Disenteria bacteriana", pista: "Sangue nas fezes, febre, tenesmo" },
      { dx: "Infecção extraintestinal", pista: "ITU, otite, pneumonia em lactentes" },
      { dx: "Invaginação intestinal", pista: "Dor em cólica intermitente, fezes em geleia de framboesa, massa" },
      { dx: "Cetoacidose diabética", pista: "Vômitos, poliúria, respiração rápida" }
    ],
    gravidade: [
      "Sem desidratação: alerta, olhos normais, bebe normalmente, prega desaparece rápido",
      "Com desidratação (≥ 2 sinais): irritado, olhos fundos, bebe avidamente, prega desaparece lentamente",
      "Grave (≥ 2 sinais): letárgico, olhos muito fundos, incapaz de beber, prega muito lenta (≥ 2 s), pulso fraco, enchimento > 3 s"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Exames não são necessários na diarreia aguda com desidratação leve ou ausente.",
      porQue: "—",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Plano C / casos graves",
      pedido: "Sódio, potássio, ureia, creatinina, glicemia, gasometria venosa; hemograma se sangue nas fezes (plaquetas, esquizócitos).",
      porQue: "Distúrbios eletrolíticos, SHU.",
      esperar: "—",
      interpretacao: "Plaquetopenia + anemia + creatinina alta após diarreia sanguinolenta → SHU (não usar antibiótico em E. coli O157 suspeita sem orientação).",
      limitacoes: "—"
    },
    {
      nome: "Coprocultura",
      pedido: "Coprocultura — disenteria grave, imunossuprimidos, surtos.",
      porQue: "Identificar agente.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não é rotina."
    }
  ],
  tratamento: [
    {
      droga: "Plano A — SRO em casa",
      linha: "l1",
      dose: "Após cada evacuação: < 1 ano 50–100 mL · 1–10 anos 100–200 mL · > 10 anos à vontade",
      via: "VO, em pequenos goles",
      intervalo: "Após cada evacuação líquida",
      duracao: "Enquanto durar a diarreia",
      monitorizacao: "Sinais de desidratação",
      contraindicacoes: "—",
      ajustes: "Manter alimentação habitual e aleitamento. Evitar refrigerantes e sucos industrializados"
    },
    {
      droga: "Plano B — SRO na unidade",
      linha: "l1",
      dose: "50–100 mL/kg em 4–6 h",
      via: "VO (copo ou colher); SNG 20–30 mL/kg/h se vômitos persistentes ou recusa",
      intervalo: "Fracionado, reavaliar a cada hora",
      duracao: "Até hidratação",
      monitorizacao: "Peso, diurese, sinais de hidratação",
      contraindicacoes: "Desidratação grave, íleo, rebaixamento",
      ajustes: "Vômito: esperar 10 min e recomeçar mais devagar. Lactente mamando: manter seio materno"
    },
    {
      droga: "Plano C — fase de expansão (< 1 ano)",
      linha: "l1",
      dose: "SF 0,9% ou Ringer lactato 30 mL/kg em 1 h, depois 70 mL/kg em 5 h",
      via: "IV (ou intraóssea)",
      intervalo: "Reavaliar a cada 15–30 min",
      duracao: "Até sinais de hidratação; depois manutenção + reposição",
      monitorizacao: "Pulso, perfusão, diurese, consciência, eletrólitos",
      contraindicacoes: "—",
      ajustes: "Esquema do MS 2023 (com SBP e SBI). Recém-nascido e cardiopata: alíquotas menores com reavaliação frequente. Iniciar SRO assim que conseguir beber"
    },
    {
      droga: "Plano C — fase de expansão (≥ 1 ano)",
      linha: "l1",
      dose: "SF 0,9% ou Ringer lactato 30 mL/kg em 30 min, depois 70 mL/kg em 2 h 30 min",
      via: "IV (ou intraóssea)",
      intervalo: "Reavaliar a cada 15–30 min",
      duracao: "Até sinais de hidratação",
      monitorizacao: "Igual",
      contraindicacoes: "—",
      ajustes: "Se não melhorar, repetir a expansão. Sem acesso venoso: SNG 20–30 mL/kg/h com SRO ou intraóssea"
    },
    {
      droga: "Plano C — manutenção e reposição",
      linha: "l1",
      dose: "Manutenção (Holliday-Segar): até 10 kg 100 mL/kg/dia; 10–20 kg 1.000 mL + 50 mL/kg acima de 10 kg; > 20 kg 1.500 mL + 20 mL/kg acima de 20 kg · Reposição: 50 mL/kg/dia, reavaliar conforme perdas",
      via: "IV",
      intervalo: "Em 24 h, concomitantes",
      duracao: "Até tolerar SRO",
      monitorizacao: "Sódio, potássio, glicemia, diurese, peso",
      contraindicacoes: "—",
      ajustes: "Manutenção: SG 5% + SF 0,9% 4:1 com KCl 10% 2 mL para cada 100 mL (após diurese). Reposição: SG 5% + SF 0,9% 1:1. Conferir na versão vigente do cartaz do MS"
    },
    {
      droga: "Zinco",
      linha: "l1",
      dose: "< 6 meses: 10 mg/dia · ≥ 6 meses: 20 mg/dia (Ministério da Saúde)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "10–14 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Reduz duração e recorrência. A OMS (2024) passou a sugerir dose menor de zinco, com menos vômitos; o MS ainda mantém 10/20 mg"
    },
    {
      droga: "Ondansetrona",
      linha: "adj",
      dose: "0,15 mg/kg (máx 4–8 mg) — ou 8–15 kg: 2 mg; 15–30 kg: 4 mg; > 30 kg: 8 mg",
      via: "VO (orodispersível)",
      intervalo: "Dose única antes da TRO",
      duracao: "—",
      monitorizacao: "QT se cardiopatia",
      contraindicacoes: "< 6 meses, QT longo",
      ajustes: "Facilita a reidratação oral quando vômitos impedem o Plano B"
    },
    {
      droga: "Antibiótico (disenteria com toxemia)",
      linha: "adj",
      dose: "Ciprofloxacino 15 mg/kg 12/12h por 3 dias (máx 500 mg/dose) · ou azitromicina 10 mg/kg 1×/dia por 3 dias (máx 500 mg) · ceftriaxona 50–100 mg/kg 1×/dia (máx 2 g) IV/IM por 3 dias se grave ou internado",
      via: "VO / IV",
      intervalo: "Conforme droga",
      duracao: "3 dias",
      monitorizacao: "—",
      contraindicacoes: "Diarreia aquosa sem sangue (maioria viral)",
      ajustes: "Antidiarreicos (loperamida) e antieméticos sedativos são contraindicados em crianças"
    }
  ],
  destino: {
    agora: [
      "Classificar e iniciar o plano adequado na própria unidade"
    ],
    reavaliar: [
      "Plano A: retorno se piora ou sem melhora em 2 dias",
      "Plano B: a cada hora",
      "Plano C: a cada 15–30 min"
    ],
    alta: [
      "Hidratada, aceitando SRO, cuidador sabe preparar o soro e reconhecer sinais de perigo",
      "Zinco prescrito e alimentação mantida"
    ],
    observacao: [
      "Plano B até completar a reidratação (4–6 h)"
    ],
    internacao: [
      "Plano C, falha da TRO, distúrbio eletrolítico, < 2 meses com desidratação, desnutrição grave, SHU"
    ],
    transferencia: [
      "UBS sem acesso venoso para Plano C: iniciar SRO/SNG e acionar SAMU",
      "Suspeita de abdome agudo ou SHU → PS pediátrico"
    ]
  },
  prescricao: {
    ambulatorial: "PLANO A (USO ORAL)\n1. Sais para reidratação oral (SRO) -------------- 4 envelopes\n   Dissolver 1 envelope em 1 litro de água filtrada ou fervida (fria). Oferecer em pequenos goles após cada evacuação: menor de 1 ano 50 a 100 mL; 1 a 10 anos 100 a 200 mL; maior de 10 anos o quanto aceitar. Usar o soro preparado em até 24 horas.\n2. Sulfato de zinco solução oral 4 mg/mL de zinco elementar (conferir a concentração da apresentação disponível) --- 1 frasco\n   Menor de 6 meses: dar 2,5 mL (10 mg) 1 vez ao dia por 10 dias.\n   6 meses ou mais: dar 5 mL (20 mg) 1 vez ao dia por 10 dias.\n3. Paracetamol 200 mg/mL gotas -------------------- 1 frasco\n   Dar 1 gota por kg (máx 35 gotas) de 6 em 6 horas se febre.\n\nSE DISENTERIA COM COMPROMETIMENTO DO ESTADO GERAL (USO ORAL)\n4. Azitromicina 200 mg/5 mL suspensão ------------- 1 frasco\n   Dar 10 mg/kg (0,25 mL/kg; máx 500 mg) 1 vez ao dia por 3 dias.\n   OU Ciprofloxacino 15 mg/kg de 12 em 12 horas por 3 dias (máx 500 mg/dose).\n\nSE VÔMITOS IMPEDINDO A TRO (> 6 meses, dose única na unidade)\n5. Ondansetrona 4 mg comprimido orodispersível\n   8–15 kg: 2 mg; 15–30 kg: 4 mg; > 30 kg: 8 mg, sublingual, 15–30 min antes de iniciar o SRO.",
    hospitalar: "PLANO C — PRESCRIÇÃO (exemplo 10 kg, 1 ano ou mais)\n1. Jejum enquanto desidratação grave; oferecer SRO assim que conseguir beber.\n2. Fase de expansão: SF 0,9% (ou Ringer lactato) 300 mL IV em 30 min; depois 700 mL IV em 2 h 30 min (280 mL/h). Menor de 1 ano: 30 mL/kg em 1 h e 70 mL/kg em 5 h.\n3. Reavaliar a cada 15–30 min; repetir a expansão se ainda desidratado.\n4. Após hidratação — manutenção em 24 h: SG 5% 800 mL + SF 0,9% 200 mL + KCl 10% 20 mL (após diurese) IV a 42 mL/h.\n5. Reposição em 24 h: SG 5% 250 mL + SF 0,9% 250 mL IV a 21 mL/h (50 mL/kg/dia), reajustar conforme perdas.\n6. Sulfato de zinco 20 mg VO 1 vez ao dia (10 mg se < 6 meses) por 10 dias, quando tolerar VO.\n7. Ondansetrona 0,15 mg/kg IV (máx 4 mg) se vômitos persistentes (> 6 meses).\n8. Dipirona 15 mg/kg IV de 6 em 6 horas se febre (> 3 meses ou > 5 kg).\n9. Cuidados: peso na admissão e diário, diurese (pesar fraldas), sinais vitais de hora em hora na expansão, glicemia capilar, sódio e potássio após a expansão."
  },
  orientacoesRetorno: [
    "Continuar o aleitamento materno e a alimentação habitual; oferecer mais líquidos que o normal",
    "Dar o soro de reidratação oral após cada evacuação líquida e o zinco todos os dias por 10 dias",
    "Não dar refrigerante, sucos industrializados, chás adoçados nem remédios para \"prender\" o intestino",
    "Lavar as mãos após trocar fraldas e antes de preparar alimentos; usar água tratada",
    "Voltar imediatamente se a criança ficar muito sonolenta ou irritada, não conseguir beber, vomitar tudo, tiver sangue nas fezes, olhos fundos, boca muito seca, urinar pouco ou tiver febre alta",
    "Retornar em 2 dias se a diarreia não melhorar; procurar a UBS se durar mais de 14 dias"
  ],
  fontes: [
    "Ministério da Saúde, SBP e SBI — Manejo do paciente com diarreia (cartaz, atualização 2023)",
    "OMS — Guideline on management of pneumonia and diarrhoea in children up to 10 years of age (2024)",
    "SBP — Guia prático de atualização: Diarreia aguda — diagnóstico e tratamento (2017)",
    "WHO — The treatment of diarrhoea: a manual for physicians (2005)"
  ],
  revisao: "2026-10-21",
  versao: "2.1"
});
