// Síndromes pós-gastrectomia
registrarFicha({
  id: "sindromes-pos-gastrectomia",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Síndromes pós-gastrectomia: dumping, alça aferente e eferente, gastrite alcalina e deficiências",
  resumo: "Sintomas tardios após gastrectomia parcial (Billroth I ou II, Y de Roux), total ou cirurgia bariátrica: dumping precoce e tardio, síndrome da alça aferente e eferente, gastrite alcalina (refluxo biliar), supercrescimento bacteriano, deficiências nutricionais e câncer do coto. Muitas se resolvem com dieta; as mecânicas são cirúrgicas.",
  palavrasChave: "sindrome pos gastrectomia dumping precoce tardio hipoglicemia reativa sigstad acarbose octreotida alca aferente alca eferente billroth ii y de roux gastrite alcalina refluxo biliar supercrescimento bacteriano sibo deficiencia b12 ferro calcio osteoporose coto gastrico diarreia pos vagotomia",
  alarmes: [
    "Dor epigástrica intensa e súbita, vômitos não biliosos, massa palpável após Billroth II: alça aferente aguda (risco de necrose e perfuração) — PS",
    "Icterícia ou pancreatite em gastrectomizado: pensar em alça aferente obstruída",
    "Vômitos persistentes, intolerância alimentar, perda de peso progressiva",
    "Hipoglicemia com confusão ou desmaio após refeição",
    "Anemia, disfagia, perda de peso ou sangramento muitos anos após gastrectomia (câncer do coto gástrico)",
    "Parestesias, ataxia, alteração cognitiva (deficiência de B12 ou cobre)"
  ],
  conduta: [
    "Caracterizar o tempo dos sintomas em relação à refeição e o tipo de vômito (alimentar, bilioso, alívio ou não da dor) — a tabela orienta",
    "Dumping: dieta primeiro — 5–6 refeições pequenas, evitar açúcar simples e doces, líquidos só 30 min após a refeição, mais proteína e fibra, deitar 30 min após comer se dumping precoce",
    "Dumping tardio refratário à dieta: acarbose junto às refeições; dumping grave refratário: octreotida (encaminhar)",
    "Alça aferente ou eferente: confirmar com TC de abdome com contraste e EDA; tratamento cirúrgico ou endoscópico — encaminhar à cirurgia",
    "Gastrite alcalina: EDA com biópsia; medidas clínicas têm efeito limitado (procinético, sucralfato, ácido ursodesoxicólico); refratária → conversão cirúrgica para Y de Roux",
    "Diarreia, distensão e esteatorreia: pensar em supercrescimento bacteriano (alça aferente, estase) e insuficiência pancreática exócrina",
    "Rastrear e repor deficiências: B12 (obrigatória por toda a vida na gastrectomia total), ferro, folato, cálcio e vitamina D; densitometria",
    "Gastrectomia parcial há mais de 15 anos com sintomas dispépticos novos: EDA (câncer do coto)"
  ],
  exames: [
    "Hemograma, ferritina, ferro sérico, vitamina B12, ácido fólico, 25-OH vitamina D, cálcio, PTH, albumina — anual (e se sintomas)",
    "Dumping tardio duvidoso: glicemia capilar no momento dos sintomas (1–3 h após a refeição); teste de tolerância oral à glicose prolongado só em serviço especializado",
    "TC de abdome com contraste: alça aferente dilatada cheia de líquido, obstrução de alça eferente, hérnia interna",
    "EDA: gastrite biliar, úlcera de boca anastomótica, estenose, câncer do coto",
    "Supercrescimento bacteriano: teste respiratório com glicose ou lactulose, se disponível; muitas vezes o diagnóstico é por teste terapêutico",
    "Elastase fecal (insuficiência pancreática exócrina), densitometria óssea"
  ],
  diferenciais: [
    "Hérnia interna, obstrução por bridas",
    "Úlcera de boca anastomótica (marginal)",
    "Insulinoma ou hipoglicemia hiperinsulinêmica pós-bariátrica (hipoglicemia em jejum sugere insulinoma)",
    "Recidiva do câncer gástrico, carcinomatose",
    "Gastroparesia, intolerância à lactose, diarreia pós-vagotomia"
  ],
  tabelas: [
    {
      titulo: "Diferenciação das síndromes",
      colunas: ["Síndrome", "Quando e como", "Tratamento"],
      linhas: [
        ["Dumping precoce", "10–30 min após comer: cólica, diarreia, náusea, taquicardia, palpitação, rubor, sudorese, hipotensão, vontade de deitar", "Dieta; octreotida se grave e refratário"],
        ["Dumping tardio", "1–3 h após comer (sobretudo carboidrato): tremor, sudorese, fome, confusão — hipoglicemia reativa por pico de insulina", "Dieta pobre em açúcar simples; acarbose; octreotida se refratário"],
        ["Alça aferente aguda", "Dor epigástrica intensa, vômitos não biliosos, massa; pode haver icterícia ou pancreatite (Billroth II)", "Cirurgia de urgência ou drenagem/prótese endoscópica"],
        ["Alça aferente crônica", "Dor e plenitude pós-prandial aliviadas por vômito bilioso em jato, sem alimento", "Cirurgia (conversão para Y de Roux) ou endoscopia"],
        ["Alça eferente", "Vômitos biliosos COM alimento, dor, distensão (obstrução distal à anastomose)", "Cirurgia ou dilatação endoscópica"],
        ["Gastrite alcalina (refluxo biliar)", "Dor epigástrica contínua que piora após comer, vômito bilioso SEM alívio, perda de peso", "Clínico limitado; Y de Roux com alça longa"],
        ["Supercrescimento bacteriano", "Diarreia, distensão, esteatorreia, anemia por B12, perda de peso", "Antibiótico + corrigir estase"],
        ["Diarreia pós-vagotomia", "Diarreia aquosa episódica, sem relação clara com refeição", "Loperamida; colestiramina"]
      ]
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora após 1º ciclo (amoxicilina-clavulanato)", "Trocar de classe: metronidazol + ciprofloxacino, ou rifaximina (se disponível)", "Confirmar o diagnóstico (teste respiratório) e investigar outras causas de diarreia antes de repetir"],
        ["Alergia à penicilina", "Ciprofloxacino 500 mg 12/12 h + metronidazol 250 mg 8/8 h por 10 dias, ou doxiciclina 100 mg 12/12 h por 10 dias", "Doxiciclina: não usar na gestação"],
        ["Recidiva frequente (≥ 3–4 episódios/ano)", "Ciclos rotativos de antibióticos diferentes, a critério da gastroenterologia", "Tratar a causa mecânica (alça aferente, estenose) — tende a ser cirúrgica"],
        ["Desnutrição, desidratação ou suspeita de obstrução da alça", "Internar; hidratação IV e avaliação cirúrgica", "Antibiótico não resolve obstrução"]
      ]
    }
  ],
  tratamento: [
    {
      droga: "Acarbose",
      linha: "l1",
      dose: "50 mg, podendo subir até 100 mg",
      via: "VO",
      intervalo: "3 vezes ao dia, no início de cada refeição",
      duracao: "Contínuo enquanto sintomas",
      monitorizacao: "Flatulência, diarreia; glicemia",
      contraindicacoes: "Doença inflamatória intestinal, obstrução intestinal, insuficiência renal grave",
      ajustes: "Para dumping tardio (hipoglicemia reativa). Se hipoglicemia ocorrer, tratar com glicose (não sacarose)"
    },
    {
      droga: "Octreotida",
      linha: "alt",
      dose: "50–100 mcg",
      via: "SC",
      intervalo: "2–3 vezes ao dia, 15–30 min antes das refeições",
      duracao: "Conforme especialista; formulação de depósito mensal existe",
      monitorizacao: "Colelitíase, esteatorreia, glicemia",
      contraindicacoes: "—",
      ajustes: "Reservada para dumping grave refratário à dieta e à acarbose (prescrição especializada)"
    },
    {
      droga: "Amoxicilina + clavulanato (supercrescimento bacteriano)",
      linha: "l1",
      dose: "875/125 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7–10 dias",
      monitorizacao: "Resposta da diarreia e distensão",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alternativas: metronidazol 250 mg 8/8 h + ciprofloxacino 500 mg 12/12 h por 10 dias; rifaximina (não disponível no SUS)"
    },
    {
      droga: "Cianocobalamina (vitamina B12)",
      linha: "l1",
      dose: "1.000 mcg",
      via: "IM",
      intervalo: "1 vez por mês (na deficiência: diária ou em dias alternados por 1–2 semanas, depois semanal até normalizar)",
      duracao: "Por toda a vida após gastrectomia total",
      monitorizacao: "B12, hemograma",
      contraindicacoes: "—",
      ajustes: "Gastrectomia parcial: dose oral alta (1.000 mcg/dia) pode ser suficiente; confirmar com dosagem"
    },
    {
      droga: "Loperamida",
      linha: "adj",
      dose: "2 mg após cada evacuação líquida (máx. 8 mg/dia ambulatorial)",
      via: "VO",
      intervalo: "SN",
      duracao: "Curto prazo",
      monitorizacao: "Constipação, distensão",
      contraindicacoes: "Diarreia com febre ou sangue",
      ajustes: "Diarreia pós-vagotomia ou dumping com diarreia"
    }
  ],
  prescricao: {
    ambulatorial: "DUMPING — ORIENTAÇÃO ALIMENTAR\n1. Fazer 5 a 6 refeições pequenas por dia, mastigando bem.\n2. Evitar açúcar, doces, refrigerantes e sucos adoçados.\n3. Beber líquidos só 30 minutos depois de comer.\n4. Preferir proteínas, fibras e carboidratos integrais.\n\nUSO ORAL\n1. Acarbose 50 mg ----------------------------------- 90 comprimidos\n   Tomar 1 comprimido junto à primeira garfada do café, do almoço e do jantar (dumping tardio).\n\nUSO INTRAMUSCULAR\n2. Cianocobalamina 1.000 mcg/mL (ampola) ------------ 3 ampolas\n   Aplicar 1 ampola IM 1 vez por mês, por toda a vida (gastrectomia total ou B12 baixa).\n\nSE SUPERCRESCIMENTO BACTERIANO\n3. Amoxicilina + clavulanato 875/125 mg ------------- 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 10 dias.\n\nSUPLEMENTOS (conforme exames)\n4. Sulfato ferroso 40 mg de ferro elementar: 1 comprimido por dia.\n5. Carbonato de cálcio 500 mg + colecalciferol 400 UI: 1 comprimido 2 vezes ao dia."
  },
  orientacoesRetorno: [
    "Os sintomas de dumping melhoram muito com a mudança na alimentação; a maioria não precisa de remédio",
    "Se tiver tremor, suor frio e fome 1–3 horas depois de comer, medir a glicemia se puder e comer algo com açúcar na hora",
    "Tomar a vitamina B12 e os suplementos sempre, mesmo sem sintomas",
    "Procurar o PS se dor forte e súbita na barriga, vômitos que não param, pele amarelada, desmaio ou fezes pretas",
    "Fazer endoscopia se voltar a ter dor no estômago, dificuldade para engolir ou perda de peso, mesmo muitos anos depois da cirurgia"
  ],
  encaminhar: [
    "Cirurgia geral/digestiva: alça aferente ou eferente, gastrite alcalina refratária, dumping grave refratário",
    "Gastroenterologia: supercrescimento bacteriano recorrente, insuficiência pancreática, EDA",
    "Endocrinologia: hipoglicemia grave ou com sintomas em jejum, osteoporose",
    "Nutrição: todos com dumping ou perda de peso",
    "PS: suspeita de alça aferente aguda ou obstrução"
  ],
  fontes: [
    "Scarpellini E et al. — International consensus on the diagnosis and management of dumping syndrome (Nat Rev Endocrinol, 2020)",
    "ACG — Clinical Guideline: Small Intestinal Bacterial Overgrowth (Am J Gastroenterol, 2020)",
    "Sabiston Textbook of Surgery, 21ª ed. (2021) — Postgastrectomy syndromes",
    "British Committee for Standards in Haematology — Guidelines for the diagnosis and treatment of cobalamin and folate disorders (2014)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
