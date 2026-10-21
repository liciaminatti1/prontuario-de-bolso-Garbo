// Impetigo e ectima
registrarFicha({
  id: "impetigo",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Impetigo e ectima",
  resumo: "Infecção bacteriana superficial e contagiosa (S. aureus e/ou Streptococcus pyogenes), mais comum em crianças. Não bolhoso: vesículas que viram crostas melicéricas (cor de mel), em volta do nariz, boca e membros. Bolhoso: bolhas flácidas (S. aureus). Ectima: úlcera rasa com crosta aderente, mais profunda, que deixa cicatriz.",
  palavrasChave: "impetigo impetigo bolhoso ectima crosta melicerica piodermite estreptococo estafilococo mupirocina acido fusidico cefalexina glomerulonefrite pos estreptococica",
  alarmes: [
    "Febre, prostração, celulite ou linfangite",
    "Bolhas extensas, pele que descola em lâminas com sinal de Nikolsky, em lactente/criança febril (síndrome da pele escaldada estafilocócica — internar)",
    "Recém-nascido com impetigo bolhoso (risco de disseminação — avaliar internação)",
    "Edema, urina escura (cor de coca-cola) e hipertensão 1–3 semanas após (glomerulonefrite pós-estreptocócica)",
    "Ectima em imunossuprimido com úlcera necrótica (pensar em ectima gangrenoso por Pseudomonas)"
  ],
  conduta: [
    "Diagnóstico clínico; procurar dermatose de base (escabiose, pediculose, dermatite atópica, picadas) e tratá-la",
    "Remover as crostas com água morna e sabão (ou compressas com SF 0,9%) antes de aplicar a pomada",
    "Poucas lesões, sem sinais sistêmicos: antibiótico tópico (mupirocina ou ácido fusídico) por 5 a 7 dias",
    "Lesões numerosas, impetigo bolhoso extenso, ectima, surtos em creche/escola, falha do tópico ou sinais sistêmicos: antibiótico oral (cefalexina) por 7 dias",
    "Não associar tópico e oral; neomicina + bacitracina não é recomendada (baixa eficácia, sensibilização)",
    "Afastar da creche/escola até 24 h após iniciar antibiótico (ou até as lesões secarem se só tópico)",
    "Unhas curtas, lavar as mãos, toalhas individuais; examinar contatos"
  ],
  diferenciais: [
    "Herpes simples (vesículas agrupadas, dor, crostas hemorrágicas — impetiginização secundária é comum)",
    "Varicela (lesões em vários estágios, couro cabeludo, febre)",
    "Dermatite atópica impetiginizada",
    "Tinea corporis (borda descamativa, sem crosta melicérica)",
    "Picadas de inseto (estrófulo) e escabiose escoriadas",
    "Doenças bolhosas autoimunes e queimaduras (impetigo bolhoso)"
  ],
  exames: [
    "Nenhum de rotina: diagnóstico clínico",
    "Cultura com antibiograma da secreção: falha terapêutica, recorrência, surtos, suspeita de MRSA",
    "Urina tipo 1 e PA: se edema, hipertensão ou urina escura nas semanas seguintes (glomerulonefrite)"
  ],
  tratamento: [
    {
      droga: "Mupirocina 2% pomada",
      linha: "l1",
      dose: "Fina camada nas lesões, após remover crostas",
      via: "Tópica",
      intervalo: "2 a 3 vezes ao dia",
      duracao: "5 dias (até 7 dias)",
      monitorizacao: "Melhora em 3–5 dias; se não, trocar para oral",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Conferir disponibilidade na REMUME (pode ser item de farmácia)"
    },
    {
      droga: "Ácido fusídico 2% creme",
      linha: "alt",
      dose: "Fina camada nas lesões",
      via: "Tópica",
      intervalo: "3 vezes ao dia",
      duracao: "5 a 7 dias",
      monitorizacao: "—",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Não usar por longos períodos nem repetidamente (resistência). Retapamulina e ozenoxacino também são opções tópicas (conferir disponibilidade)"
    },
    {
      droga: "Cefalexina (cápsula 500 mg; suspensão 250 mg/5 mL)",
      linha: "l1",
      dose: "Adulto: 500 mg. Criança: 25–50 mg/kg/dia divididos de 6/6 h (máx. 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Impetigo extenso, bolhoso extenso e ectima. Cefadroxila 30 mg/kg/dia de 12/12 h (máx. 2 g/dia) é alternativa com menos tomadas (fora da RENAME). RENAME/SUS"
    },
    {
      droga: "Amoxicilina + clavulanato (comprimido 500/125 ou 875/125 mg; suspensão 250/62,5 mg/5 mL)",
      linha: "alt",
      dose: "Adulto: 500/125 mg de 8/8 h ou 875/125 mg de 12/12 h. Criança: 25–45 mg/kg/dia de amoxicilina divididos de 12/12 h",
      via: "VO",
      intervalo: "8/8 h ou 12/12 h",
      duracao: "7 dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "Alergia a penicilina; icterícia prévia com amoxicilina-clavulanato",
      ajustes: "Alternativa à cefalexina. RENAME/SUS"
    },
    {
      droga: "Clindamicina (cápsula 300 mg) ou azitromicina/eritromicina",
      linha: "alt",
      dose: "Clindamicina adulto 300 mg de 6/6 h ou 8/8 h; criança 20–30 mg/kg/dia de 8/8 h (máx. 450 mg/dose)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "7 dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "Colite prévia",
      ajustes: "Alergia a betalactâmico ou suspeita de MRSA. Macrolídeos: resistência crescente do S. aureus e S. pyogenes — usar se outras opções indisponíveis. Suspeita de MRSA: sulfametoxazol-trimetoprima associado (não cobre bem estreptococo isolado)"
    },
    {
      droga: "Neomicina + bacitracina pomada",
      linha: "ci",
      dose: "—",
      via: "Tópica",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não recomendada para impetigo (baixa eficácia, resistência e dermatite de contato) — SBP 2022"
    }
  ],
  prescricao: {
    ambulatorial: "POUCAS LESÕES — ADULTO E CRIANÇA\nUSO TÓPICO\n1. Lavar as feridas com água morna e sabão 2 a 3 vezes ao dia, amolecendo e retirando as cascas com delicadeza; secar com toalha limpa individual.\n2. Mupirocina 2% pomada ----------------------------------- 1 bisnaga\n   Após a limpeza, aplicar fina camada nas feridas 3 vezes ao dia por 5 dias.\n   OU\n2. Ácido fusídico 2% creme ---------------------------------- 1 bisnaga\n   Aplicar fina camada nas feridas 3 vezes ao dia por 5 a 7 dias.\n\nMUITAS LESÕES, BOLHAS EXTENSAS OU ECTIMA\nUSO ORAL\n3. Cefalexina 500 mg --------------------------------------- 28 cápsulas\n   Adulto: tomar 1 cápsula de 6 em 6 horas por 7 dias.\n   Criança: cefalexina suspensão 250 mg/5 mL — 25–50 mg/kg/dia divididos de 6/6 h por 7 dias (máx. 4 g/dia). Exemplo 20 kg: 5 mL de 6/6 h (= 50 mg/kg/dia).\n\nALERGIA A PENICILINA/CEFALOSPORINA\n3. Clindamicina 300 mg — 1 cápsula de 8 em 8 horas por 7 dias (criança: 20–30 mg/kg/dia de 8/8 h, máx. 450 mg/dose).\n\nSE DOR OU FEBRE\n4. Dipirona 500 mg — 1 a 2 comprimidos de 6/6 h se necessário (criança: 10–15 mg/kg/dose, máx. 1 g/dose).\n\nSE COCEIRA OU DOENÇA DE BASE: tratar escabiose, piolho, picadas ou dermatite atópica (ver fichas específicas)."
  },
  orientacoesRetorno: [
    "O impetigo passa pelo contato com as feridas: lavar as mãos, manter unhas curtas, não coçar, cobrir as lesões",
    "Toalhas, roupas e roupa de cama de uso individual; lavar com água e sabão",
    "A criança pode voltar à creche ou escola 24 horas depois de começar o antibiótico por boca (ou quando as feridas secarem)",
    "Tomar o remédio até o fim, mesmo com melhora",
    "Voltar imediatamente se houver febre, bolhas espalhando, pele soltando, vermelhidão que se espalha ou criança muito abatida",
    "Procurar atendimento se nas próximas 3 semanas houver inchaço no rosto ou nas pernas, urina escura ou com sangue, ou pouca urina",
    "Retornar se não melhorar em 3 a 5 dias"
  ],
  encaminhar: [
    "PS/internação: síndrome da pele escaldada estafilocócica, recém-nascido com lesões extensas, sinais sistêmicos",
    "Pediatria/clínica: suspeita de glomerulonefrite pós-estreptocócica",
    "Dermatologia: impetigo recorrente ou dúvida diagnóstica"
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Infecções bacterianas superficiais cutâneas, Documento Científico do Departamento de Dermatologia (dezembro/2022): mupirocina, ácido fusídico e retapamulina tópicos; bacitracina não recomendada",
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update (Stevens DL, et al.) — tópico por 5 dias em lesões limitadas; oral por 7 dias em lesões numerosas e ectima",
    "Hospital Israelita Albert Einstein — Pathway Impetigo em crianças e adolescentes (cefalexina 50 mg/kg/dia de 6/6 h, máx. 4 g; 7 dias)",
    "Ministério da Saúde — RENAME 2024 (cefalexina, amoxicilina + clavulanato, clindamicina)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
