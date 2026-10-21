// Antídotos — tabela de referência
registrarFicha({
  id: "antidotos",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Antídotos: toxina × antídoto × dose",
  resumo: "Tabela de consulta rápida dos principais antídotos usados no pronto-socorro, com dose de adulto e de criança. Sempre confirme a indicação e a disponibilidade com o CIATox (0800 722 6001).",
  palavrasChave: "antidoto antidotos naloxona flumazenil acetilcisteina nac paracetamol atropina pralidoxima organofosforado carbamato chumbinho glucagon betabloqueador gluconato de calcio bloqueador canal calcio bicarbonato triciclico azul de metileno metemoglobina hidroxocobalamina cianeto fomepizol etanol metanol vitamina k varfarina protamina heparina deferoxamina ferro piridoxina isoniazida octreotida sulfonilureia biperideno distonia emulsao lipidica bupivacaina",
  critico: {
    tempo: "ABCDE antes do antídoto",
    texto: "O antídoto não substitui suporte de via aérea, ventilação e circulação. Ligue para o CIATox: a indicação, a dose e onde o antídoto está estocado variam por região."
  },
  alarmes: [
    "Antídoto que reverte sedação pode precipitar abstinência ou convulsão (naloxona em usuário crônico, flumazenil em ingestão mista)",
    "Efeito do antídoto mais curto que o do tóxico (naloxona × metadona, liberação prolongada): risco de nova depressão respiratória",
    "Ingestão de paracetamol sem sintomas não exclui hepatotoxicidade: dosar o nível sérico",
    "Organofosforado: a dose de atropina pode ser muito alta; o alvo é secar as secreções brônquicas, não a pupila"
  ],
  conduta: [
    "Estabilizar (ABCDE), glicemia capilar e ECG antes de qualquer antídoto",
    "Identificar a síndrome tóxica e o agente provável (ver ficha Intoxicações exógenas)",
    "Ligar para o CIATox e confirmar indicação, dose e local de estoque do antídoto (antídotos de uso raro ficam em hospitais de referência)",
    "Calcular a dose pelo peso real; em criança, nunca ultrapassar a dose de adulto",
    "Registrar horário de cada dose e resposta; repetir conforme meia-vida do tóxico",
    "Notificar no SINAN"
  ],
  tabelas: [
    {
      titulo: "Principais antídotos",
      colunas: ["Tóxico", "Antídoto", "Adulto", "Criança", "Observações"],
      linhas: [
        ["Opioides (morfina, fentanil, tramadol, metadona)", "Naloxona (0,4 mg/mL)", "0,04–0,4 mg IV, repetir a cada 2–3 min até FR adequada; até 2 mg se apneia; máx. total 10 mg", "0,1 mg/kg IV/IM/IO (máx. 2 mg/dose) para reversão completa; doses menores se só depressão leve", "Alvo: ventilação, não acordar. Infusão: 2/3 da dose eficaz por hora. Observar ≥ 4–6 h após a última dose"],
        ["Benzodiazepínicos", "Flumazenil (0,1 mg/mL)", "0,2 mg IV em 30 s; repetir 0,2 mg a cada 1 min até 1 mg", "0,01 mg/kg IV (máx. 0,2 mg/dose); repetir até 0,05 mg/kg ou 1 mg", "Uso restrito: sedação iatrogênica ou criança com ingestão isolada. Contraindicado em ingestão mista (tricíclico), uso crônico, epilepsia"],
        ["Paracetamol", "Acetilcisteína IV (100 mg/mL)", "150 mg/kg em 200 mL de SG 5% em 1 h → 50 mg/kg em 500 mL em 4 h → 100 mg/kg em 1.000 mL em 16 h (total 21 h)", "Mesmas doses por kg; volume: 3 mL/kg, 7 mL/kg e 14 mL/kg de SG 5% (ajustar se < 40 kg)", "Indicação pelo nomograma (≥ 150 mcg/mL em 4 h) ou ingestão ≥ 150 mg/kg com nível indisponível. Melhor até 8 h da ingestão. Reação anafilactoide: pausar e reiniciar mais lento"],
        ["Paracetamol (sem forma IV)", "Acetilcisteína oral", "140 mg/kg VO de ataque, depois 70 mg/kg de 4/4 h por 17 doses", "Mesma dose por kg", "Diluir em suco; repetir a dose se vômito em até 1 h"],
        ["Organofosforados e carbamatos (chumbinho)", "Atropina (0,25 ou 0,5 mg/mL)", "1–2 mg IV; dobrar a dose a cada 5 min até atropinização (ausculta limpa, FC > 80, PAS > 80, pele seca); manter infusão de 10–20% da dose total de ataque por hora", "0,02–0,05 mg/kg IV; repetir a cada 5 min até atropinização", "Alvo: secar secreções brônquicas. Taquicardia não contraindica. Descontaminar pele com água e sabão"],
        ["Organofosforados (não carbamato)", "Pralidoxima", "30 mg/kg IV em 30 min, depois 8 mg/kg/h", "25–50 mg/kg IV em 30 min, depois 10–20 mg/kg/h", "Sempre junto com atropina. Disponibilidade restrita no Brasil: solicitar ao CIATox"],
        ["Betabloqueadores", "Glucagon", "3–5 mg IV em 1–2 min (50 mcg/kg); repetir; infusão 2–5 mg/h se resposta", "50 mcg/kg IV; infusão conforme CIATox", "Vômitos frequentes. Associar insulina em alta dose (1 U/kg em bolus + 0,5–1 U/kg/h com glicose e K) se choque"],
        ["Bloqueadores de canal de cálcio", "Gluconato de cálcio 10% (100 mg/mL)", "30–60 mL (3–6 g) IV em 10 min; repetir a cada 10–20 min (até 3–4 doses)", "0,6 mL/kg (60 mg/kg) IV em 10 min, sem exceder a dose de adulto", "Associar insulina em alta dose e vasopressor. Cloreto de cálcio só em acesso central"],
        ["Antidepressivos tricíclicos e outros bloqueadores de canal de sódio", "Bicarbonato de sódio 8,4% (1 mEq/mL)", "1–2 mEq/kg IV em bolus; repetir até QRS < 100 ms; alvo pH 7,45–7,55", "1–2 mEq/kg IV (diluir 1:1 em água destilada < 2 anos)", "Indicação: QRS > 100 ms, arritmia ventricular ou hipotensão. Benzodiazepínico para convulsão; não usar fenitoína"],
        ["Metemoglobinemia (dapsona, nitritos, anestésico local, anilina)", "Azul de metileno 1% (10 mg/mL)", "1–2 mg/kg IV em 5 min; repetir 1 mg/kg em 30–60 min se necessário", "1–2 mg/kg IV em 5 min", "Indicação: MetHb ≥ 20–30% ou sintomas. Contraindicado na deficiência de G6PD; não usar com ISRS (síndrome serotoninérgica)"],
        ["Cianeto (incêndio em ambiente fechado, nitroprussiato)", "Hidroxocobalamina", "5 g IV em 15 min; repetir 5 g se instável", "70 mg/kg IV (máx. 5 g)", "O₂ a 100%. Disponibilidade restrita: CIATox e hospitais de referência"],
        ["Metanol e etilenoglicol", "Fomepizol", "15 mg/kg IV em 30 min → 10 mg/kg de 12/12 h por 4 doses → 15 mg/kg de 12/12 h", "Mesma dose por kg", "Estoque estratégico do MS desde 2025: solicitar via CIATox. Associar hemodiálise se acidose grave ou alteração visual"],
        ["Metanol e etilenoglicol (sem fomepizol)", "Etanol farmacêutico", "Dose de ataque e manutenção calculadas com o CIATox para etanolemia de 100–150 mg/dL", "Idem, com glicemia de 1/1 h", "Metanol: associar ácido folínico ou fólico. Hipoglicemia em criança"],
        ["Varfarina e cumarínicos (raticida)", "Vitamina K1 (fitomenadiona 10 mg/mL)", "Sangramento grave: 10 mg IV lento (em 20–30 min, diluída) + complexo protrombínico ou plasma. INR alto sem sangramento: 1–2,5 mg VO", "Sangramento: dose por peso conforme hematologia/CIATox", "IV pode causar anafilaxia: infundir diluída e lentamente. Raticida superpotente exige semanas de vitamina K oral"],
        ["Heparina não fracionada", "Protamina (10 mg/mL)", "1 mg para cada 100 UI de heparina das últimas 2–3 h (máx. 50 mg), IV lento em 10 min", "Mesma regra por UI de heparina", "Enoxaparina < 8 h: 1 mg para cada 1 mg (reversão parcial). Risco de hipotensão e anafilaxia"],
        ["Ferro", "Deferoxamina", "15 mg/kg/h IV contínua", "15 mg/kg/h IV contínua", "Indicação: ferro sérico alto, acidose ou choque, discutida com CIATox. Urina cor de vinho. Limitar a cerca de 24 h (toxicidade pulmonar)"],
        ["Isoniazida (convulsão)", "Piridoxina (vitamina B6)", "1 g para cada 1 g de isoniazida ingerida; desconhecida: 5 g IV em 5–10 min", "70 mg/kg IV (máx. 5 g)", "Associar benzodiazepínico"],
        ["Sulfonilureias (hipoglicemia recorrente)", "Octreotida (0,05 e 0,1 mg/mL)", "50 mcg SC ou IV de 6/6 h", "1 mcg/kg SC de 6/6 h (máx. 50 mcg/dose)", "Sempre com glicose IV. Observar ≥ 24 h (criança mesmo com 1 comprimido)"],
        ["Distonia aguda (metoclopramida, haloperidol, bromoprida)", "Biperideno (5 mg/mL)", "2–5 mg IM ou IV lento; repetir em 30 min se necessário", "< 1 ano 1 mg; 1–6 anos 2 mg; 6–10 anos 3 mg, IM ou IV lento", "Alternativa: difenidramina 1 mg/kg IV (máx. 50 mg). Manter biperideno VO por 2–3 dias se agente de longa ação"],
        ["Anestésico local (bupivacaína, lidocaína) com parada ou arritmia", "Emulsão lipídica 20%", "1,5 mL/kg IV em 1 min → 0,25 mL/kg/min; repetir bolus até 2× se instável; máx. 12 mL/kg", "Mesma dose por kg", "Manter RCP; reduzir dose de adrenalina (≤ 1 mcg/kg)"],
        ["Monóxido de carbono", "Oxigênio 100%", "Máscara não reinalante 12–15 L/min ou IOT", "Idem", "Câmara hiperbárica: discutir com CIATox se coma, gestação ou sinais isquêmicos"],
        ["Escorpião, serpentes, aranhas", "Soros antivenenos", "Ver fichas Ofidismo, Escorpionismo e Araneísmo", "Mesmo número de ampolas do adulto", "Dose não depende de peso"]
      ],
      nota: "Doses de referência para início de tratamento. Confirme sempre com o CIATox, que também informa o hospital que tem o antídoto. Anticorpo antidigoxina, fisostigmina e dantroleno têm disponibilidade muito restrita no Brasil."
    }
  ],
  prescricao: {
    hospitalar: "MODELOS DE PRESCRIÇÃO DE ANTÍDOTO (peso: ___ kg)\n\nA) PARACETAMOL — ACETILCISTEÍNA IV (21 h; ampola 100 mg/mL)\n1. Acetilcisteína 150 mg/kg (___ mg = ___ mL) + SG 5% 200 mL IV em 60 min.\n2. Em seguida: acetilcisteína 50 mg/kg (___ mg = ___ mL) + SG 5% 500 mL IV em 4 h.\n3. Em seguida: acetilcisteína 100 mg/kg (___ mg = ___ mL) + SG 5% 1.000 mL IV em 16 h.\n   Criança < 40 kg: diluir em 3 mL/kg, 7 mL/kg e 14 mL/kg de SG 5%, respectivamente.\n4. AST, ALT, TP/INR, creatinina ao fim da infusão; manter se transaminases em ascensão (discutir com CIATox).\n5. Se urticária ou broncoespasmo: pausar, difenidramina 50 mg IV (criança 1 mg/kg), reiniciar em velocidade menor.\n\nB) OPIOIDE — NALOXONA (0,4 mg/mL)\n1. Naloxona: diluir 1 ampola (0,4 mg) em 9 mL de SF 0,9% (0,04 mg/mL). Fazer 1 mL IV a cada 2 min até FR ≥ 12 irpm (criança: 0,1 mg/kg/dose, máx. 2 mg).\n2. Se recorrência: infusão de 2/3 da dose eficaz por hora em SF 0,9% (ex.: dose eficaz 0,4 mg → 0,27 mg/h).\n3. Monitor, oximetria, FR de 15/15 min.\n\nC) ORGANOFOSFORADO / CARBAMATO — ATROPINA (0,5 mg/mL)\n1. Atropina 2 mg (4 mL) IV agora (criança 0,02–0,05 mg/kg). Dobrar a dose a cada 5 min (2 → 4 → 8 mg...) até ausculta limpa, FC > 80 bpm e PAS > 80 mmHg.\n2. Manutenção: atropina 10–20% da dose total de ataque por hora em SF 0,9% em bomba de infusão; reduzir se delirium, febre ou íleo.\n3. Banho com água e sabão; roupas em saco fechado; equipe com luvas.\n4. Pralidoxima (organofosforado) conforme disponibilidade e orientação do CIATox.\n\nD) TRICÍCLICO COM QRS > 100 ms — BICARBONATO DE SÓDIO 8,4%\n1. Bicarbonato de sódio 8,4% 1–2 mEq/kg (1–2 mL/kg) IV em bolus; repetir até QRS < 100 ms.\n2. Gasometria a cada 1–2 h (alvo pH 7,45–7,55); K sérico a cada 2 h.\n\nE) DISTONIA AGUDA — BIPERIDENO (5 mg/mL)\n1. Biperideno 5 mg (1 mL) IM ou IV lento, dose única (criança: < 1 ano 1 mg; 1–6 anos 2 mg; 6–10 anos 3 mg).\n2. Suspender o medicamento causador.\n\nCONTATO: CIATox — 0800 722 6001."
  },
  orientacoesRetorno: [
    "Após alta, voltar imediatamente se sonolência, respiração lenta, vômitos, dor abdominal, pele amarelada, sangramentos ou movimentos involuntários",
    "Paracetamol: retornar para exames de controle se orientado; não tomar paracetamol nem álcool nos próximos dias",
    "Raticida cumarínico: tomar a vitamina K pelo tempo indicado e repetir o INR nas datas marcadas",
    "Guardar medicamentos e venenos fora do alcance de crianças; dúvidas: Disque-Intoxicação 0800 722 6001"
  ],
  encaminhar: [
    "UTI: necessidade de infusão contínua de antídoto, instabilidade, arritmia ou IOT",
    "Hospital de referência indicado pelo CIATox quando o antídoto não estiver disponível no serviço",
    "Saúde mental (CAPS/psiquiatria) em toda intoxicação intencional"
  ],
  fontes: [
    "ANVISA/RENACIAT — Disque-Intoxicação 0800 722 6001",
    "Ministério da Saúde — Nota técnica e estoque estratégico de etanol farmacêutico e fomepizol para intoxicação por metanol (2025)",
    "American Heart Association — 2023 Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning",
    "AHA — Diretrizes de RCP e ACE 2025 (PALS: naloxona 0,1 mg/kg, máx. 2 mg)",
    "Goldfrank's Toxicologic Emergencies, 11ª ed. (2019) — Antidotes in Depth",
    "Eddleston M, et al. Management of acute organophosphorus pesticide poisoning. Lancet (2008) — esquema de atropinização",
    "ASRA — Checklist for Treatment of Local Anesthetic Systemic Toxicity (2020)",
    "Bulas ANVISA: acetilcisteína injetável, biperideno injetável, azul de metileno"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
