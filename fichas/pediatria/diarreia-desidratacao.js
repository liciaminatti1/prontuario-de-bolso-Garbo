// Diarreia aguda e desidratação na criança
registrarFicha({
  id: "diarreia-desidratacao",
  especialidade: "pediatria",
  caminho: "ubs",
  titulo: "Diarreia aguda e desidratação na criança",
  resumo: "Três ou mais evacuações líquidas em 24 h por menos de 14 dias. Avaliar hidratação e aplicar os Planos A, B ou C do Ministério da Saúde.",
  palavrasChave: "diarreia gastroenterite desidratacao sro soro de reidratacao oral plano a b c zinco ondansetrona disenteria pediatria",
  critico: {
    tempo: "Avalie a hidratação",
    texto: "Sem desidratação: Plano A (casa). Com desidratação: Plano B (SRO na unidade). Desidratação grave ou choque: Plano C (hidratação venosa imediata)."
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
      droga: "Plano C — hidratação venosa (< 5 anos)",
      linha: "l1",
      dose: "SF 0,9% 20 mL/kg em 30 min; repetir até sinais de hidratação. Recém-nascido e cardiopatas: 10 mL/kg em 30 min",
      via: "IV (ou intraóssea)",
      intervalo: "Reavaliar a cada 15–30 min",
      duracao: "Fase de expansão; depois manutenção + reposição",
      monitorizacao: "Pulso, perfusão, diurese, consciência, eletrólitos",
      contraindicacoes: "—",
      ajustes: "Manutenção (Holliday-Segar) + reposição de perdas com SG 5% + SF 0,9% 1:1 e KCl após diurese. Iniciar SRO assim que conseguir beber"
    },
    {
      droga: "Plano C — hidratação venosa (≥ 5 anos)",
      linha: "l1",
      dose: "SF 0,9% 30 mL/kg em 30 min, depois Ringer lactato 70 mL/kg em 2 h 30 min",
      via: "IV",
      intervalo: "Reavaliar continuamente",
      duracao: "—",
      monitorizacao: "Igual",
      contraindicacoes: "—",
      ajustes: "—"
    },
    {
      droga: "Zinco",
      linha: "l1",
      dose: "< 6 meses: 10 mg/dia · ≥ 6 meses: 20 mg/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "10–14 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Reduz duração e recorrência"
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
      dose: "Ciprofloxacino 15 mg/kg 12/12h por 3 dias · ou azitromicina 10 mg/kg/dia por 3 dias · ceftriaxona 50–100 mg/kg/dia se grave",
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
  fontes: [
    "Ministério da Saúde — Manejo do paciente com diarreia (cartaz Planos A, B e C, 2023)",
    "SBP — Guia prático de atualização: Diarreia aguda (2017)",
    "WHO — The treatment of diarrhoea: a manual for physicians (2005)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
