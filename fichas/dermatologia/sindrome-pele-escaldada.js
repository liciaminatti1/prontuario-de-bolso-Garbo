// Síndrome da pele escaldada estafilocócica
registrarFicha({
  id: "sindrome-pele-escaldada",
  especialidade: "dermatologia",
  caminho: "ps",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Síndrome da pele escaldada estafilocócica (SSSS)",
  resumo: "Descolamento superficial da pele causado por toxinas esfoliativas do Staphylococcus aureus, quase sempre em menores de 5 anos. Febre, irritabilidade, pele dolorosa ao toque, eritema que começa em face, pescoço, axilas e virilhas e evolui com bolhas flácidas e descamação. Mucosas poupadas. Tratar com antibiótico antiestafilocócico IV, analgesia e cuidado de queimado.",
  palavrasChave: "pele escaldada ssss sindrome estafilococica ritter esfoliativa staphylococcus aureus bolhas descolamento nikolsky oxacilina clindamicina necrolise",
  critico: {
    tempo: "Antibiótico IV e analgesia na 1ª h",
    texto: "Oxacilina IV (com clindamicina para reduzir toxina) logo após hemocultura; controlar a dor, repor líquidos e proteger a pele como em queimadura."
  },
  alarmes: [
    "Recém-nascido ou lactente pequeno, área descolada extensa",
    "Hipotermia ou febre alta, taquicardia, má perfusão, hipotensão (sepse)",
    "Desidratação, distúrbio hidroeletrolítico, hipoglicemia",
    "Comprometimento de mucosas (oral, ocular, genital): pensar em Stevens-Johnson/NET",
    "Uso recente de medicamento novo (anticonvulsivante, sulfa, alopurinol): pensar em NET",
    "Insuficiência renal ou imunodepressão (adulto com SSSS é raro e grave)"
  ],
  conduta: [
    "Diagnóstico clínico: eritema doloroso + bolhas flácidas + sinal de Nikolsky positivo; crostas radiadas ao redor da boca e dos olhos; mucosas poupadas",
    "Procurar o foco: conjuntivite, otite, onfalite, impetigo, nariz, coto umbilical, local de circuncisão",
    "Monitorizar sinais vitais, glicemia, diurese; acesso venoso",
    "Colher hemocultura e swab do foco (narinas, conjuntiva, umbigo, lesão) antes do antibiótico — as bolhas são estéreis",
    "Oxacilina IV + clindamicina IV (reduz produção de toxina). Suspeita de MRSA ou sepse grave: vancomicina no lugar da oxacilina",
    "Analgesia regular (paracetamol, dipirona; opioide se dor intensa); dor é intensa",
    "Hidratação e reposição de perdas pela pele; aquecimento (perda de calor)",
    "Cuidados de pele: manusear pouco, lençóis limpos, vaselina estéril ou curativo não aderente; não romper bolhas; evitar adesivos",
    "Não usar corticoide. Não usar AINE na fase aguda (risco renal)",
    "Isolamento de contato; pesquisar portador de S. aureus em surto de berçário",
    "Após melhora clínica e sem sinais sistêmicos, passar para via oral (cefalexina) para completar 7–10 dias"
  ],
  exames: [
    "Hemograma, PCR, eletrólitos, ureia, creatinina, glicemia",
    "Hemocultura (frequentemente negativa em criança; positiva em adultos)",
    "Cultura de swab do foco provável (nariz, conjuntiva, umbigo, lesões)",
    "Biópsia de pele com congelação só na dúvida com NET: SSSS = clivagem intraepidérmica superficial (granulosa); NET = necrose epidérmica de espessura total"
  ],
  diferenciais: [
    "Necrólise epidérmica tóxica / Stevens-Johnson (mucosas acometidas, medicamento novo, adultos)",
    "Impetigo bolhoso (lesões localizadas, sem eritema doloroso difuso)",
    "Escarlatina com descamação, síndrome do choque tóxico",
    "Queimadura (incluir maus-tratos no diferencial), epidermólise bolhosa",
    "Doença de Kawasaki (descamação periungueal)"
  ],
  tratamento: [
    {
      droga: "Oxacilina",
      linha: "l1",
      dose: "150–200 mg/kg/dia (máx. 12 g/dia)",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Até melhora clínica (em geral 48–72 h), depois via oral; total 7–10 dias",
      monitorizacao: "Hemograma, função hepática se uso prolongado",
      contraindicacoes: "Alergia grave a penicilina",
      ajustes: "Neonato: intervalo conforme idade gestacional e pós-natal. Diluir em SF 0,9% e infundir em 30–60 min"
    },
    {
      droga: "Clindamicina",
      linha: "adj",
      dose: "30–40 mg/kg/dia (máx. 2,7 g/dia)",
      via: "IV",
      intervalo: "6/6 h a 8/8 h",
      duracao: "Primeiros dias, junto com a oxacilina",
      monitorizacao: "Diarreia (Clostridioides difficile)",
      contraindicacoes: "—",
      ajustes: "Diluir em SF 0,9% ou SG 5% para ≤ 18 mg/mL e infundir em 30–60 min (não fazer em bolus). Inibe a produção de toxina; parte das cepas é resistente — não usar sozinha empiricamente"
    },
    {
      droga: "Vancomicina",
      linha: "alt",
      dose: "15 mg/kg/dose (60 mg/kg/dia)",
      via: "IV em 1–2 h",
      intervalo: "6/6 h",
      duracao: "Conforme cultura",
      monitorizacao: "Nível sérico (vale) e função renal",
      contraindicacoes: "—",
      ajustes: "Se MRSA provável (prevalência local, colonização, sepse grave) ou alergia grave a betalactâmico. Diluir para ≤ 5 mg/mL; infusão lenta (síndrome do homem vermelho)"
    },
    {
      droga: "Cefalexina (fase oral)",
      linha: "l1",
      dose: "50–100 mg/kg/dia (máx. 4 g/dia)",
      via: "Oral",
      intervalo: "6/6 h",
      duracao: "Completar 7–10 dias no total",
      monitorizacao: "—",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Suspensão 250 mg/5 mL"
    }
  ],
  prescricao: {
    hospitalar: "SÍNDROME DA PELE ESCALDADA — CRIANÇA (peso: ___ kg)\n1. Dieta livre para a idade; manter aleitamento materno.\n2. Isolamento de contato. Manuseio mínimo; aquecimento; lençóis limpos.\n3. Soro de manutenção (Holliday-Segar) com SF 0,9% + SG 5% (ou solução isotônica) + perdas pela pele; ajustar pela diurese (meta ≥ 1 mL/kg/h).\n4. Oxacilina 200 mg/kg/dia: ___ mg (50 mg/kg/dose, máx. 3 g/dose) IV de 6/6 h, diluída em SF 0,9% (concentração 10–40 mg/mL), infundir em 30–60 min.\n5. Clindamicina 40 mg/kg/dia: ___ mg (10 mg/kg/dose, máx. 900 mg/dose) IV de 6/6 h, diluída em SF 0,9% até ≤ 18 mg/mL, infundir em 30–60 min.\n   (Se MRSA provável: trocar oxacilina por vancomicina 15 mg/kg/dose IV de 6/6 h, diluída a ≤ 5 mg/mL, em 1–2 h.)\n6. Dipirona 15 mg/kg/dose (máx. 1 g) IV de 6/6 h, fixa nas primeiras 48 h.\n7. Se dor intensa apesar da dipirona: morfina 0,05–0,1 mg/kg/dose (máx. 5 mg/dose) IV lento de 4/4 h se necessário, com oximetria.\n8. Vaselina líquida estéril nas áreas desnudas 2 vezes ao dia; curativo não aderente; não romper bolhas; não usar esparadrapo na pele.\n9. Colírio lubrificante se conjuntivite; tratar o foco (ex.: pomada de mupirocina nas narinas se colonização).\n10. Controles: sinais vitais de 4/4 h, temperatura, diurese, glicemia de 6/6 h nas primeiras 24 h em lactentes, balanço hídrico, escala de dor.\n11. Colher hemocultura e swabs antes da 1ª dose do antibiótico.",
    ambulatorial: "ALTA — COMPLETAR TRATAMENTO (peso: ___ kg)\nUSO ORAL\n1. Cefalexina 250 mg/5 mL suspensão ------------------- ___ frascos\n   Dar 25 mg/kg por dose (máximo 1 g por dose) de 6 em 6 horas até completar ___ dias (total 7 a 10 dias).\n2. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (máximo 35 gotas) de 6 em 6 horas se dor.\n\nUSO TÓPICO\n3. Vaselina líquida ou creme hidratante sem perfume nas áreas descamando, 2 a 3 vezes ao dia."
  },
  orientacoesRetorno: [
    "A pele se refaz sem cicatriz em 1 a 2 semanas; a descamação é esperada",
    "Dar o antibiótico nos horários certos até o fim, mesmo com a melhora",
    "Hidratar a pele e evitar sol nas áreas novas",
    "Lavar as mãos antes e depois de cuidar da criança; não compartilhar toalhas",
    "Voltar imediatamente se: febre que volta, criança molinha ou sonolenta, recusa de líquidos, pouca urina, bolhas novas se espalhando, feridas na boca ou nos olhos",
    "Consulta na UBS em 48–72 h após a alta"
  ],
  encaminhar: [
    "Internação em todos os casos com descolamento difuso; UTI se sepse, choque ou RN com área extensa",
    "Unidade de queimados se área desnuda muito extensa",
    "Dermatologia: dúvida com NET/SJS (urgente)"
  ],
  fontes: [
    "American Academy of Pediatrics — Red Book 2024–2027: Staphylococcus aureus (staphylococcal scalded skin syndrome)",
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (2014) e Clinical Practice Guidelines for MRSA (2011)",
    "Ministério da Saúde — Formulário Terapêutico Nacional / RENAME 2024 (oxacilina, clindamicina, cefalexina, vancomicina)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
