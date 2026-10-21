// Exames laboratoriais e sorologias do pré-natal
registrarFicha({
  id: "exames-prenatal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Exames do pré-natal: rotina por trimestre e testes rápidos",
  resumo: "O que pedir em cada trimestre do pré-natal de risco habitual (Rede Alyne), como interpretar e o que fazer com cada resultado alterado.",
  palavrasChave: "exames prenatal sorologias teste rapido sifilis vdrl hiv hepatite b hbsag hepatite c htlv toxoplasmose tipagem rh coombs indireto glicemia totg urocultura eletroforese hemoglobina estreptococo grupo b egb gestante",
  critico: {
    tempo: "Sífilis reagente: tratar no dia",
    texto: "Teste rápido de sífilis reagente na gestante: aplicar a 1ª dose de penicilina benzatina na mesma consulta, sem esperar o VDRL. Testar e tratar a(s) parceria(s)."
  },
  alarmes: [
    "Teste rápido de HIV, sífilis ou hepatite reagente (iniciar fluxo no mesmo dia)",
    "Hb < 8 g/dL ou anemia com sintomas (dispneia, taquicardia)",
    "IgM de toxoplasmose reagente",
    "Coombs indireto positivo em gestante Rh negativo",
    "Glicemia de jejum ≥ 126 mg/dL (diabetes franco)",
    "Proteinúria com PA ≥ 140/90 após 20 semanas"
  ],
  conduta: [
    "1ª consulta (idealmente até 12 semanas): testes rápidos de HIV, sífilis, hepatite B e hepatite C na própria consulta, com aconselhamento",
    "Solicitar os exames laboratoriais do 1º trimestre (tabela) e USG obstétrica de 1º trimestre",
    "24–28 semanas: TOTG 75 g se glicemia de jejum inicial < 92 mg/dL",
    "3º trimestre (a partir de 28 semanas): repetir hemograma, sífilis, HIV, urocultura, toxoplasmose (se suscetível) e hepatite B (se suscetível)",
    "Rh negativo: Coombs indireto no início e repetir no 2º e 3º trimestres (mensal a partir de 24 semanas, conforme protocolo); positivo → PNAR",
    "Toxoplasmose suscetível (IgG e IgM não reagentes): orientar prevenção e repetir sorologia a cada trimestre",
    "Registrar todos os resultados na Caderneta da Gestante; testes de sífilis e HIV são repetidos na admissão para o parto",
    "Notificação compulsória: sífilis em gestante, HIV em gestante, hepatites virais, toxoplasmose gestacional, HTLV em gestante"
  ],
  exames: [
    "1º trimestre: hemograma; ABO-Rh; Coombs indireto (Rh−); glicemia de jejum; TR sífilis + VDRL; TR HIV; HBsAg/TR hepatite B; anti-HCV/TR hepatite C; HTLV 1/2; toxoplasmose IgG/IgM; urina tipo 1; urocultura; eletroforese de hemoglobina; citologia se em atraso",
    "2º trimestre: TOTG 75 g (24–28 semanas); toxoplasmose se suscetível; Coombs indireto se Rh−",
    "3º trimestre: hemograma; glicemia de jejum; TR sífilis + VDRL; TR HIV; HBsAg se suscetível; toxoplasmose se suscetível; urina tipo 1; urocultura; Coombs indireto se Rh−; cultura para estreptococo do grupo B (35–37 semanas) se disponível",
    "Pedido pronto (1ª consulta): \"Hemograma completo. Tipagem sanguínea ABO e fator Rh. Coombs indireto. Glicemia de jejum. VDRL. Anti-HIV. HBsAg. Anti-HCV. Sorologia anti-HTLV 1/2. Toxoplasmose IgG e IgM. Urina tipo 1. Urocultura com antibiograma. Eletroforese de hemoglobina. Ultrassonografia obstétrica.\"",
    "Pedido pronto (3º trimestre): \"Hemograma completo. Glicemia de jejum. VDRL. Anti-HIV. HBsAg. Toxoplasmose IgG e IgM. Urina tipo 1. Urocultura com antibiograma. Coombs indireto (se Rh negativo). Cultura de swab vaginal e anorretal para estreptococo do grupo B.\""
  ],
  tabelas: [
    {
      titulo: "Interpretação e conduta por exame",
      colunas: ["Exame", "Resultado", "Conduta"],
      linhas: [
        ["Hemoglobina", "≥ 11 g/dL", "Ferro profilático (40 mg/dia)"],
        ["Hemoglobina", "8 a < 11 g/dL", "Ferro em dose de tratamento; repetir Hb em 30–60 dias; investigar se não subir"],
        ["Hemoglobina", "< 8 g/dL", "Anemia grave: PNAR; avaliar urgência se sintomática"],
        ["ABO-Rh", "Rh negativo, Coombs indireto negativo", "Repetir Coombs; imunoglobulina anti-D após parto/sangramento/procedimento (e com 28 semanas conforme protocolo)"],
        ["Coombs indireto", "Positivo", "Isoimunização: encaminhar ao PNAR / medicina fetal"],
        ["Glicemia de jejum (1º tri)", "< 92 mg/dL", "TOTG 75 g com 24–28 semanas"],
        ["Glicemia de jejum (1º tri)", "92–125 mg/dL", "Diabetes gestacional (sem TOTG)"],
        ["Glicemia de jejum (1º tri)", "≥ 126 mg/dL", "Diabetes franco (prévio): PNAR"],
        ["TOTG 75 g", "Jejum ≥ 92 ou 1 h ≥ 180 ou 2 h ≥ 153", "Diabetes gestacional (1 valor basta)"],
        ["TR sífilis", "Reagente", "Penicilina benzatina na hora; VDRL para estadiar e seguir; tratar parceria; notificar"],
        ["VDRL (seguimento)", "Qualquer título", "VDRL mensal até o parto; títulos devem cair; aumento de 2 diluições (ex.: 1:4 → 1:16) = reinfecção ou falha → retratar"],
        ["TR HIV", "Reagente", "2º teste rápido de outro fabricante (fluxograma); carga viral, CD4; TARV no mesmo dia/semana; SAE; notificar"],
        ["HBsAg", "Reagente", "HBeAg, HBV-DNA, ALT; tenofovir no 3º trimestre se indicado (PCDT); RN: vacina + imunoglobulina nas 1ªs 12 h; notificar"],
        ["Anti-HCV", "Reagente", "HCV-RNA; tratamento após a gestação; seguimento do RN; notificar"],
        ["HTLV 1/2", "Reagente", "Teste confirmatório; não amamentar (inibir lactação); notificar; infectologia"],
        ["Toxoplasmose", "IgG + / IgM −", "Imune: não repetir"],
        ["Toxoplasmose", "IgG − / IgM −", "Suscetível: prevenção; repetir a cada trimestre"],
        ["Toxoplasmose", "IgM +", "Iniciar espiramicina já; avidez de IgG (se < 16 semanas); PNAR; notificar"],
        ["Urocultura", "≥ 100.000 UFC/mL de 1 germe", "Tratar bacteriúria (ver ITU na gestação) e repetir urocultura de controle"],
        ["Eletroforese de Hb", "Traço falciforme (AS)", "Orientar; pesquisar parceiro; seguimento habitual"],
        ["Eletroforese de Hb", "Doença falciforme (SS, SC)", "PNAR"],
        ["Cultura para EGB", "Positiva", "Registrar na Caderneta: profilaxia antibiótica intraparto na maternidade"]
      ],
      nota: "Cortes de glicemia: consenso OPAS/MS/FEBRASGO/SBD (2016), mantidos pela SBD. Sífilis, HIV e hepatites: PCDT para prevenção da transmissão vertical (MS, 2022). Anemia: OMS/MS."
    }
  ],
  tratamento: [
    {
      droga: "Benzilpenicilina benzatina",
      linha: "l1",
      dose: "Sífilis recente (primária, secundária, latente recente): 2,4 milhões UI dose única · Latente tardia, indeterminada ou terciária: 2,4 milhões UI por semana por 3 semanas (total 7,2 milhões UI)",
      via: "IM (1,2 milhão UI em cada glúteo)",
      intervalo: "Semanal, se 3 doses",
      duracao: "1 ou 3 semanas",
      monitorizacao: "VDRL mensal até o parto",
      contraindicacoes: "Alergia à penicilina: dessensibilizar em serviço de referência (única opção eficaz para o feto)",
      ajustes: "Intervalo > 7 dias entre doses na gestação → reiniciar o esquema. Sem estadiamento possível: tratar como latente tardia"
    },
    {
      droga: "Espiramicina",
      linha: "l1",
      dose: "1 g (3 milhões UI)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "Até definição do caso pelo PNAR (infecção aguda: até o parto ou troca para esquema tríplice se infecção fetal)",
      monitorizacao: "—",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Iniciar na UBS assim que IgM reagente, sem esperar o encaminhamento"
    }
  ],
  prescricao: {
    ambulatorial: "SÍFILIS NA GESTAÇÃO (teste rápido reagente)\nUSO INTRAMUSCULAR\n1. Benzilpenicilina benzatina 1.200.000 UI ------- 2 frascos-ampola (por dose)\n   Aplicar 2.400.000 UI IM (1.200.000 UI em cada glúteo) hoje.\n   Latente tardia ou de duração ignorada: repetir 2.400.000 UI IM após 7 e 14 dias (total 3 doses).\n\nTOXOPLASMOSE AGUDA SUSPEITA (IgM reagente)\nUSO ORAL\n2. Espiramicina 500 mg (1,5 milhão UI) ----------- 84 comprimidos\n   Tomar 2 comprimidos (1 g) de 8 em 8 horas, sem interrupção, por 14 dias e renovar até a avaliação no pré-natal de alto risco (não suspender sem orientação).\n\nANEMIA (Hb 8 a < 11 g/dL)\n3. Sulfato ferroso 40 mg de ferro elementar ---- 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia, entre as refeições, com suco cítrico. Não tomar junto com cálcio ou leite."
  },
  orientacoesRetorno: [
    "Fazer os exames pedidos e trazer os resultados na próxima consulta, junto com a Caderneta da Gestante",
    "Teste de sífilis reagente: o(s) parceiro(s) precisa(m) fazer o teste e o tratamento; usar preservativo até o fim do tratamento de ambos",
    "Toxoplasmose não reagente: não comer carne crua ou malpassada, lavar bem frutas e verduras, usar luvas ao mexer na terra e não limpar caixa de areia de gato",
    "Se o teste de HTLV ou HIV der reagente, a equipe vai orientar sobre amamentação e cuidados com o bebê",
    "Retornar para mostrar os exames em até 2–4 semanas; resultado alterado pode antecipar a consulta"
  ],
  encaminhar: [
    "PNAR: diabetes franco, Coombs positivo, toxoplasmose aguda, HIV, hepatite B com indicação de tratamento, doença falciforme, anemia grave",
    "SAE/infectologia: HIV, HTLV, hepatites B e C",
    "Maternidade/PS: anemia sintomática grave"
  ],
  fontes: [
    "Ministério da Saúde — Portaria GM/MS nº 5.350/2024 (Rede Alyne) e Nota Técnica Conjunta nº 220/2024 (inclusão de HTLV e testes rápidos de hepatites B e C)",
    "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco (2012)",
    "OPAS/MS/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2016)",
    "Ministério da Saúde — Protocolo de notificação e investigação: toxoplasmose gestacional e congênita (2018)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
