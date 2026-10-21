// Molusco contagioso
registrarFicha({
  id: "molusco",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Molusco contagioso",
  resumo: "Infecção viral benigna da pele (poxvírus): pápulas pequenas, peroladas, cor da pele, com umbilicação central, isoladas ou agrupadas. Comum em crianças (sobretudo com dermatite atópica) e, no adulto, na região genital (IST). Resolve sozinho em meses a poucos anos; tratamento é opcional.",
  palavrasChave: "molusco contagioso poxvirus papula umbilicada perolada crianca dermatite atopica curetagem crioterapia hidroxido de potassio koh ist genital hiv",
  alarmes: [
    "Lesões numerosas, gigantes (> 1 cm) ou faciais extensas em adulto (pensar em HIV ou outra imunossupressão)",
    "Lesões genitais em criança (avaliar possibilidade de abuso sexual, sem presumir — autoinoculação é frequente)",
    "Lesões na borda palpebral com conjuntivite crônica",
    "Dor, calor, pus e febre (infecção bacteriana secundária — diferente da inflamação esperada antes da cura)"
  ],
  conduta: [
    "Diagnóstico clínico; dermatoscopia ajuda (estruturas amareladas centrais com vasos em coroa)",
    "Explicar a história natural: cada lesão dura semanas a meses e o conjunto costuma resolver em meses a até cerca de 2 anos, sem cicatriz",
    "Conduta expectante é aceitável e muitas vezes preferível em crianças",
    "Lesões vermelhas e inchadas antes de sumir (sinal de BOTE) indicam resposta imune, não infecção; não precisam de antibiótico",
    "Tratar se: desejo da família, lesões numerosas ou em crescimento, prurido, dermatite associada, área genital (reduzir transmissão), imunossuprimido",
    "Opções: curetagem (com anestésico tópico 60 min antes), crioterapia, hidróxido de potássio tópico em solução manipulada. Todas podem causar dor, inflamação e manchas temporárias",
    "Tratar o eczema ao redor das lesões (hidratante; corticoide de baixa potência por poucos dias) — o prurido espalha o vírus",
    "Adulto com lesões genitais: oferecer testagem para HIV, sífilis, hepatites B e C; orientar preservativo"
  ],
  diferenciais: [
    "Verruga vulgar/plana (sem umbilicação, superfície áspera)",
    "Foliculite, acne (pústulas centradas em folículo)",
    "Varicela no início (vesículas que evoluem rápido, febre)",
    "Criptococose ou histoplasmose cutânea em imunossuprimido (lesões semelhantes — biópsia)",
    "Carcinoma basocelular no adulto (lesão única perolada que cresce)"
  ],
  exames: [
    "Diagnóstico clínico",
    "Adulto com lesões genitais: teste rápido de HIV, sífilis, hepatite B e C",
    "Biópsia: lesão atípica ou imunossuprimido"
  ],
  tratamento: [
    {
      droga: "Conduta expectante",
      linha: "l1",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "Até a resolução espontânea",
      monitorizacao: "Retorno se surgirem sinais de alarme",
      contraindicacoes: "—",
      ajustes: "Preferida em crianças com poucas lesões; evita dor e cicatriz"
    },
    {
      droga: "Curetagem com anestesia tópica (lidocaína 2,5% + prilocaína 2,5% creme)",
      linha: "alt",
      dose: "Anestésico: camada espessa sob oclusão 60 min antes, em área limitada",
      via: "Tópica + procedimento",
      intervalo: "Sessão única; repetir para lesões novas",
      duracao: "—",
      monitorizacao: "Sangramento discreto, dor",
      contraindicacoes: "Criança que não colabora; metemoglobinemia congênita (anestésico)",
      ajustes: "Lactentes e crianças pequenas: respeitar área e dose máximas do anestésico indicadas na bula para idade e peso (risco de metemoglobinemia). Remover o miolo; compressão com gaze"
    },
    {
      droga: "Hidróxido de potássio (KOH) 10% solução aquosa (manipulada)",
      linha: "alt",
      dose: "1 gota sobre cada lesão com cotonete, sem espalhar na pele sadia",
      via: "Tópica",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Até a lesão inflamar ou ulcerar superficialmente; então suspender (em geral poucas semanas)",
      monitorizacao: "Ardor, irritação, ulceração, manchas",
      contraindicacoes: "Face, mucosas, genitais e dobras; criança que não colabora",
      ajustes: "Evidência limitada (estudos pequenos com KOH 5–10%). Aplicação pelo responsável. Não disponível na RENAME"
    },
    {
      droga: "Crioterapia com nitrogênio líquido",
      linha: "alt",
      dose: "Congelamento breve de cada lesão",
      via: "Procedimento",
      intervalo: "A cada 3–4 semanas",
      duracao: "Até resolução",
      monitorizacao: "Dor, bolha, hipopigmentação",
      contraindicacoes: "Criança pequena (dor)",
      ajustes: "Mais usada em adultos e adolescentes"
    },
    {
      droga: "Imiquimode creme",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não superior ao placebo em crianças e com mais reações locais; não recomendado para molusco infantil"
    }
  ],
  prescricao: {
    ambulatorial: "CRIANÇA OU ADULTO — CONDUTA EXPECTANTE\n1. Não espremer, coçar ou raspar as lesões (espalha o vírus).\n2. Hidratante sem perfume no corpo todo 2 vezes ao dia, principalmente se pele seca/atópica.\n3. Não compartilhar toalha, esponja ou roupas; cobrir as lesões em piscina e esportes de contato.\n\nSE ECZEMA AO REDOR DAS LESÕES (USO TÓPICO)\n4. Hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Aplicar camada fina na pele vermelha ao redor das bolinhas 1 a 2 vezes ao dia por até 7 dias.\n\nSE OPÇÃO POR TRATAMENTO DOMICILIAR (≥ 2 anos, lesões fora de face, genitais e dobras)\n5. Hidróxido de potássio 10% solução aquosa (manipulado) ---- 10 mL\n   Com a ponta de um cotonete, aplicar 1 gota sobre cada lesão 1 vez ao dia, à noite, sem encostar na pele sadia. Parar quando a lesão ficar vermelha ou formar ferida; retornar para reavaliação.\n\nCURETAGEM NA UBS\n6. Lidocaína 2,5% + prilocaína 2,5% creme ------- 1 bisnaga\n   Aplicar camada grossa sobre as lesões a serem tratadas, cobrir com filme plástico, 60 minutos antes do procedimento (respeitar a área máxima da bula para a idade)."
  },
  orientacoesRetorno: [
    "É uma infecção benigna da pele que some sozinha, em geral em alguns meses (às vezes até 2 anos), sem deixar cicatriz",
    "A criança pode ir à escola e à creche normalmente",
    "Quando as bolinhas ficam vermelhas e inchadas, geralmente estão para sarar; não é infecção",
    "Evitar coçar; cortar as unhas; tratar a pele seca",
    "Voltar se aparecer pus, dor forte, febre, ou lesões perto dos olhos",
    "Adultos com lesões genitais: usar preservativo e fazer os testes de IST oferecidos"
  ],
  encaminhar: [
    "Dermatologia: lesões numerosas ou extensas, falha do tratamento, imunossuprimido, dúvida diagnóstica",
    "Oftalmologia: lesões na borda palpebral com conjuntivite"
  ],
  fontes: [
    "Cochrane — Interventions for cutaneous molluscum contagiosum (van der Wouden JC et al., 2017)",
    "American Academy of Dermatology — Molluscum contagiosum: diagnosis and treatment (orientações atuais)",
    "Oregon Drug Use Review — Molluscum contagiosum class review (2025): cantaridina e berdazimer (não disponíveis no Brasil)",
    "Sociedade Brasileira de Dermatologia — Molusco contagioso (orientações SBD)",
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
