// Foliculite
registrarFicha({
  id: "foliculite",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Foliculite",
  resumo: "Inflamação do folículo piloso: pápulas e pústulas pequenas centradas por pelo. Causa mais comum: S. aureus (barba, coxas, nádegas). Outras: Pseudomonas (após piscina/banheira aquecida), Malassezia (tronco, pruriginosa, após antibiótico ou calor), pseudofoliculite da barba (pelo encravado) e foliculite por oclusão ou corticoide.",
  palavrasChave: "foliculite pustulas pelo encravado pseudofoliculite barba sicose foliculite da piscina pseudomonas malassezia pitirosporum depilacao mupirocina cefalexina cetoconazol",
  alarmes: [
    "Nódulo doloroso com flutuação (evoluiu para furúnculo/abscesso: ver ficha Furúnculo e abscesso)",
    "Febre, celulite ao redor ou linfangite",
    "Imunossupressão, diabetes descompensado",
    "Lesões disseminadas que não respondem a tratamento correto (pensar em foliculite eosinofílica no HIV, foliculite fúngica, acne)",
    "Foliculite na face central (triângulo nariz-lábio) extensa e dolorosa"
  ],
  conduta: [
    "Identificar o tipo pela história: depilação/barbear, piscina aquecida, antibiótico ou corticoide recente, calor e suor, roupa oclusiva",
    "Bacteriana superficial pouco extensa: lavar com sabonete antisséptico (clorexidina) e antibiótico tópico (mupirocina) por 5 a 7 dias",
    "Bacteriana extensa, recorrente ou com celulite: antibiótico oral anti-estafilocócico (cefalexina) por 7 dias",
    "Pseudomonas (foliculite da piscina): autolimitada em 7–10 dias; só sintomáticos; corrigir a cloração da piscina/banheira",
    "Malassezia (tronco, pruriginosa, monomórfica, sem comedões): antifúngico tópico (xampu de cetoconazol no corpo); extensa: fluconazol ou itraconazol oral",
    "Pseudofoliculite da barba: parar de barbear rente por algumas semanas, barbeador elétrico ou aparador, barbear no sentido do pelo; tratar inflamação",
    "Recorrente: procurar portador nasal de S. aureus e fazer descolonização (ver ficha Furúnculo e abscesso)"
  ],
  diferenciais: [
    "Acne vulgar (comedões, face e tronco superior)",
    "Miliária rubra (calor, sem pelo central)",
    "Ceratose pilar (pápulas ásperas em braços e coxas, sem pus)",
    "Escabiose e estrófulo",
    "Dermatite acneiforme por corticoide ou outras drogas (lesões monomórficas, todas no mesmo estágio)",
    "Tinea (granuloma de Majocchi — foliculite por dermatófito em área depilada ou com uso de corticoide)"
  ],
  exames: [
    "Nenhum de rotina",
    "Cultura de pústula com antibiograma: recorrência ou falha de tratamento",
    "Exame micológico direto: suspeita de Malassezia ou dermatófito",
    "Glicemia/HbA1c e teste rápido de HIV: foliculite extensa ou recorrente em adulto"
  ],
  tratamento: [
    {
      droga: "Mupirocina 2% pomada",
      linha: "l1",
      dose: "Fina camada nas lesões",
      via: "Tópica",
      intervalo: "3 vezes ao dia",
      duracao: "5 a 7 dias",
      monitorizacao: "—",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Foliculite bacteriana localizada. Alternativa: ácido fusídico 2% creme 3 vezes ao dia. Conferir disponibilidade na REMUME"
    },
    {
      droga: "Clorexidina degermante 2% (sabonete antisséptico)",
      linha: "adj",
      dose: "Lavar a área afetada, deixar 1 minuto e enxaguar",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "Durante o tratamento e em recorrências",
      monitorizacao: "Ressecamento",
      contraindicacoes: "Mucosas, olhos e ouvidos",
      ajustes: "—"
    },
    {
      droga: "Cefalexina (cápsula 500 mg; suspensão 250 mg/5 mL)",
      linha: "alt",
      dose: "Adulto: 500 mg. Criança: 25–50 mg/kg/dia divididos de 6/6 h (máx. 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "7 dias",
      monitorizacao: "—",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Foliculite bacteriana extensa. Alergia: clindamicina (adulto 300 mg 6/6 h; criança 30–40 mg/kg/dia de 8/8 h). Suspeita de MRSA: sulfametoxazol-trimetoprima. RENAME/SUS"
    },
    {
      droga: "Cetoconazol 2% xampu ou creme",
      linha: "l1",
      dose: "Xampu: aplicar no tronco, deixar 5 minutos e enxaguar. Creme: fina camada",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "2 a 4 semanas; depois 1 vez por semana como prevenção",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Foliculite por Malassezia. Conferir REMUME"
    },
    {
      droga: "Fluconazol (cápsula 150 mg)",
      linha: "alt",
      dose: "Adulto: 150 mg",
      via: "VO",
      intervalo: "1 vez por semana",
      duracao: "2 a 4 semanas",
      monitorizacao: "Interações, QT",
      contraindicacoes: "Gestação; drogas que prolongam QT",
      ajustes: "Foliculite por Malassezia extensa ou sem resposta ao tópico (alternativa: itraconazol 200 mg/dia por 7 dias). RENAME/SUS"
    }
  ],
  prescricao: {
    ambulatorial: "FOLICULITE BACTERIANA LOCALIZADA — ADULTO E CRIANÇA\nUSO TÓPICO\n1. Clorexidina degermante 2% ------------------------------- 1 frasco\n   Lavar a área no banho, deixar 1 minuto e enxaguar, 1 vez ao dia.\n2. Mupirocina 2% pomada ------------------------------------ 1 bisnaga\n   Aplicar fina camada nas lesões 3 vezes ao dia por 5 a 7 dias.\n\nFOLICULITE BACTERIANA EXTENSA OU COM CELULITE\nUSO ORAL\n3. Cefalexina 500 mg --------------------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n   Criança: cefalexina 250 mg/5 mL, 25–50 mg/kg/dia divididos de 6/6 h por 7 dias (máx. 4 g/dia).\n\nFOLICULITE POR MALASSEZIA (tronco, coceira)\nUSO TÓPICO\n4. Cetoconazol 2% xampu ------------------------------------ 1 frasco\n   No banho, aplicar no tronco e nos ombros, deixar 5 minutos e enxaguar, 1 vez ao dia por 2 a 4 semanas; depois 1 vez por semana para prevenir.\n   SE EXTENSA (adulto, não gestante):\n5. Fluconazol 150 mg -------------------------------------- 4 cápsulas\n   Tomar 1 cápsula 1 vez por semana por 4 semanas.\n\nPSEUDOFOLICULITE DA BARBA\n6. Suspender o barbear rente por 3 a 4 semanas; depois usar aparador ou barbeador elétrico, no sentido do pelo, sem esticar a pele. Liberar pelos encravados com agulha estéril, sem arrancar.\n\nFOLICULITE DA PISCINA (PSEUDOMONAS)\n7. Não precisa de antibiótico na maioria dos casos: some em 7 a 10 dias. Se coceira, loratadina 10 mg 1 vez ao dia por até 7 dias."
  },
  orientacoesRetorno: [
    "Não espremer as bolinhas; lavar as mãos depois de tocar",
    "Não compartilhar toalhas, lâminas e aparelhos de depilação; trocar a lâmina com frequência",
    "Evitar roupas apertadas e sintéticas e ficar com roupa suada por muito tempo",
    "Depilação: preferir aparador ou método que não arranque o pelo rente durante o tratamento",
    "Voltar se aparecer caroço grande e doloroso, vermelhidão que se espalha ou febre",
    "Retornar se não melhorar em 2 semanas ou se voltar com frequência"
  ],
  encaminhar: [
    "Dermatologia: foliculite recorrente apesar de descolonização, dúvida diagnóstica, suspeita de foliculite eosinofílica ou acne grave, pseudofoliculite com cicatrizes/queloides"
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Infecções bacterianas superficiais cutâneas, Documento Científico do Departamento de Dermatologia (dezembro/2022)",
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update (Stevens DL, et al.)",
    "Primary Care Dermatology Society (PCDS) — Folliculitis e Pityrosporum folliculitis: clinical guidance (atualização vigente)",
    "Ministério da Saúde — RENAME 2024 (cefalexina, clindamicina, fluconazol)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
