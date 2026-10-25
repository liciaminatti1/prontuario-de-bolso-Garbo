// Urgências cirúrgicas digestivas na criança
registrarFicha({
  id: "cirurgia-pediatrica-digestiva",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Urgências cirúrgicas digestivas na criança",
  resumo: "Reconhecer e estabilizar as principais doenças cirúrgicas do tubo digestivo no RN e na criança: estenose hipertrófica de piloro, invaginação intestinal, má rotação com volvo, doença de Hirschsprung, atresias, divertículo de Meckel e enterocolite necrosante. Apendicite: ver ficha apendicite.",
  palavrasChave: "cirurgia pediatrica estenose hipertrofica piloro oliva alcalose hipocloremica invaginacao intestinal intussuscepcao geleia de framboesa ma rotacao volvo vomito bilioso hirschsprung megacolon congenito enterocolite atresia esofago duodenal dupla bolha jejunoileal anomalia anorretal anus imperfurado meckel enterocolite necrosante ecn pneumatose",
  critico: {
    tempo: "Vômito bilioso no RN: cirurgião já",
    texto: "Vômito verde (bilioso) em RN ou lactente é obstrução cirúrgica até prova em contrário; má rotação com volvo pode necrosar todo o intestino em horas. Jejum, sonda gástrica aberta, hidratação venosa e cirurgia pediátrica imediata."
  },
  alarmes: [
    "Vômitos biliosos (verdes) em qualquer RN ou lactente",
    "Distensão abdominal com dor, eritema ou edema de parede, massa palpável",
    "Sangue nas fezes (geleia de framboesa, sangue vivo volumoso ou com distensão)",
    "Letargia ou palidez entre crises de choro (invaginação)",
    "Sinais de peritonite, choque, acidose metabólica",
    "Não eliminação de mecônio nas primeiras 24–48 h no RN a termo",
    "Salivação excessiva e engasgo às primeiras mamadas (atresia de esôfago)",
    "Febre, diarreia explosiva e distensão em criança com Hirschsprung (enterocolite)"
  ],
  condutaInicial: [
    "ABC; jejum; sonda naso ou orogástrica calibrosa aberta (atresia de esôfago: sonda de duplo lúmen tipo Replogle em aspiração contínua, cabeceira elevada)",
    "Acesso venoso; se desidratação ou choque: SF 0,9% 10–20 mL/kg em bolus e reavaliar",
    "Glicemia, eletrólitos, gasometria, hemograma, função renal; tipagem se cirurgia",
    "Imagem conforme a hipótese: RX de abdome (2 incidências), USG (piloro, invaginação, Doppler mesentérico), contrastado de esôfago-estômago-duodeno se suspeita de má rotação",
    "Analgesia (dipirona, morfina se intensa); não atrasar analgesia para o exame",
    "Antibiótico se peritonite, perfuração, ECN, enterocolite de Hirschsprung ou volvo com necrose",
    "Cirurgia pediátrica precoce; regulação se não houver no serviço"
  ],
  fataisExcluir: [
    "Má rotação com volvo do intestino médio",
    "Enterocolite necrosante com perfuração",
    "Enterocolite associada ao Hirschsprung",
    "Invaginação com necrose ou perfuração",
    "Hérnia inguinal encarcerada (examinar a região inguinal sempre)",
    "Sepse com íleo (vômitos e distensão por causa clínica)"
  ],
  proximaDecisao: "Estenose de piloro: não é emergência cirúrgica — corrigir desidratação e alcalose antes (bicarbonato < 30 mEq/L e cloro ≥ 100 mEq/L como alvos usuais). Invaginação estável sem peritonite: redução por enema hidrostático ou pneumático guiado por imagem; falha ou peritonite → cirurgia. Suspeita de volvo: laparotomia urgente (procedimento de Ladd) sem esperar estabilidade completa.",
  clinica: {
    anamnese: [
      "Idade: RN (atresias, volvo, Hirschsprung, ECN), 2–8 semanas (piloro), 3 meses–3 anos (invaginação), < 2 anos com sangramento (Meckel)",
      "Vômitos: em jato, bilioso ou não, relação com as mamadas",
      "Eliminação do mecônio (horário), padrão evacuatório, constipação desde o nascimento",
      "Choro em crises com intervalos de calma, letargia",
      "Sangue nas fezes: aspecto e volume",
      "Polidrâmnio, diagnóstico pré-natal, síndrome de Down (atresia duodenal, Hirschsprung)",
      "Prematuridade e início da dieta (ECN)"
    ],
    exameFisico: [
      "Hidratação, perfusão, sinais de choque",
      "Distensão, peristalse visível, massa (oliva pilórica no epigástrio, massa em salsicha no hipocôndrio direito)",
      "Peritonite: dor à palpação, defesa, eritema e edema de parede no RN",
      "Inspeção do períneo e ânus (anomalia anorretal, fístula)",
      "Toque retal: ampola vazia com saída explosiva de fezes e gases (Hirschsprung); sangue",
      "Regiões inguinais e escroto (hérnia encarcerada, torção)"
    ],
    diferenciais: [
      { dx: "Estenose hipertrófica de piloro", pista: "2–8 semanas, vômitos não biliosos em jato após mamadas, fome logo depois, oliva palpável; alcalose metabólica hipoclorêmica e hipocalêmica" },
      { dx: "Invaginação intestinal", pista: "6–36 meses (pico < 2 anos), cólica intermitente com encolhimento das pernas, palidez, letargia; fezes em geleia de framboesa são tardias; USG com imagem em alvo" },
      { dx: "Má rotação com volvo", pista: "Vômito bilioso súbito, mais no 1º mês; abdome pode ser plano no início; contrastado com junção duodenojejunal fora do lugar, sinal do saca-rolhas; Doppler com sinal do redemoinho" },
      { dx: "Doença de Hirschsprung", pista: "Atraso do mecônio > 48 h, distensão, constipação grave desde o nascimento, toque com explosão; enema opaco com zona de transição; biópsia retal confirma (ausência de células ganglionares)" },
      { dx: "Atresia de esôfago", pista: "Polidrâmnio, salivação excessiva, sonda não progride (para em ~10 cm); associação VACTERL" },
      { dx: "Atresia duodenal", pista: "Vômitos (geralmente biliosos) nas primeiras horas, abdome não distendido, RX com dupla bolha; síndrome de Down" },
      { dx: "Atresia jejunoileal / íleo meconial", pista: "Distensão progressiva, vômitos biliosos, múltiplos níveis; íleo meconial: fibrose cística" },
      { dx: "Divertículo de Meckel", pista: "Sangramento retal indolor volumoso (vermelho-escuro) em criança < 2–5 anos; pode causar invaginação, volvo ou diverticulite; cintilografia com tecnécio-99m pertecnetato" },
      { dx: "Enterocolite necrosante", pista: "Prematuro em dieta, distensão, resíduo gástrico, sangue nas fezes, instabilidade; RX com pneumatose intestinal, gás portal ou pneumoperitônio" }
    ],
    gravidade: [
      "ECN (Bell modificado): I suspeita (sinais inespecíficos), II definida (pneumatose), III avançada (choque, peritonite, perfuração)",
      "Invaginação com mais de 24–48 h, choque ou peritonite: maior risco de necrose e falha da redução",
      "Vômito bilioso + distensão + instabilidade = volvo com isquemia até prova em contrário"
    ]
  },
  exames: [
    {
      nome: "RX de abdome",
      pedido: "RX de abdome AP em decúbito dorsal e em ortostase (ou decúbito lateral esquerdo com raios horizontais no RN).",
      porQue: "Padrões de obstrução, pneumatose, pneumoperitônio.",
      esperar: "Dupla bolha (duodeno), múltiplos níveis (atresia distal), pneumatose/gás portal (ECN), ausência de gás no estômago (atresia de esôfago sem fístula).",
      interpretacao: "RX normal não exclui volvo nem invaginação.",
      limitacoes: "Na ECN, repetir de 6/6 h a 12/12 h nas fases iniciais."
    },
    {
      nome: "USG de abdome",
      pedido: "USG de abdome — avaliar piloro (espessura e comprimento) / pesquisa de invaginação / Doppler dos vasos mesentéricos.",
      porQue: "Exame de escolha para piloro e invaginação, sem radiação.",
      esperar: "Piloro: espessura muscular ≥ 3–4 mm e comprimento ≥ 15–17 mm. Invaginação: imagem em alvo / pseudorrim. Volvo: redemoinho, inversão AMS/VMS.",
      interpretacao: "Operador-dependente.",
      limitacoes: "Doppler normal não exclui má rotação: contrastado se suspeita."
    },
    {
      nome: "Seriografia (EED) contrastada",
      pedido: "Radiografia contrastada de esôfago, estômago e duodeno — suspeita de má rotação intestinal.",
      porQue: "Padrão-ouro para má rotação.",
      esperar: "Junção duodenojejunal à direita da coluna ou baixa; saca-rolhas no volvo.",
      interpretacao: "—",
      limitacoes: "Não atrasar a cirurgia em RN instável com alta suspeita."
    },
    {
      nome: "Laboratório",
      pedido: "Gasometria venosa, sódio, potássio, cloro, glicemia, ureia, creatinina, hemograma, PCR, lactato, coagulograma; tipagem sanguínea. Na ECN: hemocultura e plaquetas seriadas.",
      porQue: "Distúrbios hidroeletrolíticos e preparo cirúrgico.",
      esperar: "Piloro: alcalose hipoclorêmica e hipocalêmica. ECN: acidose, plaquetopenia, neutropenia.",
      interpretacao: "Acidose metabólica e lactato alto sugerem isquemia intestinal.",
      limitacoes: "—"
    },
    {
      nome: "Enema contrastado / biópsia retal",
      pedido: "Enema opaco sem preparo — suspeita de doença de Hirschsprung. Biópsia retal por sucção (cirurgia pediátrica).",
      porQue: "Diagnóstico de Hirschsprung, atresias de cólon, íleo meconial.",
      esperar: "Zona de transição (cólon distal estreito, proximal dilatado).",
      interpretacao: "Biópsia sem células ganglionares e com acetilcolinesterase aumentada confirma.",
      limitacoes: "Enema pode ser normal no período neonatal e no segmento ultracurto."
    }
  ],
  tratamento: [
    {
      droga: "Hidratação e correção da alcalose (estenose de piloro)",
      linha: "l1",
      dose: "Desidratação: SF 0,9% 10–20 mL/kg em bolus. Depois SG 5% com NaCl 0,9% (ou 0,45%) a 1,5 × a manutenção + KCl 2–4 mEq/100 mL após diurese",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até normalizar eletrólitos (geralmente 24–48 h)",
      monitorizacao: "Eletrólitos e gasometria de 6/6 h a 12/12 h, diurese, glicemia",
      contraindicacoes: "Potássio sem diurese",
      ajustes: "Cirurgia (piloromiotomia) só com HCO₃ < 30 mEq/L e cloro ≥ 100 mEq/L (alvos usuais; seguir a anestesia). Pós-operatório: dieta em 4–6 h"
    },
    {
      droga: "Ampicilina + gentamicina + metronidazol (ECN, enterocolite de Hirschsprung, perfuração no RN)",
      linha: "l1",
      dose: "Ampicilina 50 mg/kg/dose · gentamicina 4–5 mg/kg/dose conforme IG (ver sepse-neonatal) · metronidazol ataque 15 mg/kg e depois 7,5 mg/kg/dose",
      via: "IV",
      intervalo: "Ampicilina 8/8 h (≤ 7 dias) ou 6/6 h; gentamicina 24–48 h conforme IG; metronidazol 12/12 h no RN (8/8 h a partir de ~34–40 sem pós-menstruais, conforme protocolo)",
      duracao: "ECN: 7–10 dias (Bell II) a 14 dias (Bell III/perfuração)",
      monitorizacao: "Hemoculturas, função renal, RX seriado",
      contraindicacoes: "—",
      ajustes: "Alternativa: piperacilina-tazobactam isolada ou cefotaxima + metronidazol, conforme CCIH"
    },
    {
      droga: "Ceftriaxona + metronidazol (criança > 1 mês com perfuração, peritonite ou volvo com necrose)",
      linha: "l1",
      dose: "Ceftriaxona 50–75 mg/kg/dia (máx. 2 g) · metronidazol 7,5 mg/kg/dose (máx. 500 mg)",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "Conforme achado cirúrgico (em geral 4–7 dias após controle do foco)",
      monitorizacao: "Febre, dor, leucograma, PCR",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Profilaxia cirúrgica sem perfuração: cefazolina 30 mg/kg IV em dose única (ver ficha profilaxias-perioperatorias)"
    },
    {
      droga: "Redução da invaginação por enema (hidrostático ou pneumático)",
      linha: "l1",
      dose: "Guiada por USG ou fluoroscopia, com cirurgião disponível",
      via: "Retal",
      intervalo: "Até 2–3 tentativas, conforme o serviço",
      duracao: "—",
      monitorizacao: "Sinais de perfuração; observação de 12–24 h após (recorrência ~10%)",
      contraindicacoes: "Peritonite, perfuração (pneumoperitônio), choque não responsivo",
      ajustes: "Hidratar e analgesiar antes; acesso venoso. Falha → cirurgia"
    },
    {
      droga: "Irrigação retal com SF 0,9% (Hirschsprung)",
      linha: "adj",
      dose: "10–20 mL/kg por irrigação, com sonda retal",
      via: "Retal",
      intervalo: "1 a 3 vezes ao dia",
      duracao: "Até a cirurgia",
      monitorizacao: "Distensão, febre",
      contraindicacoes: "Perfuração",
      ajustes: "Descompressão na enterocolite e no preparo pré-operatório; não usar água pura (risco de hiponatremia)"
    },
    {
      droga: "Domperidona, metoclopramida ou ondansetrona para vômito bilioso",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Mascara obstrução cirúrgica",
      ajustes: "Vômito bilioso exige investigação, não antiemético"
    }
  ],
  destino: {
    agora: [
      "Jejum, sonda gástrica aberta, hidratação, analgesia, exames e cirurgião pediátrico"
    ],
    reavaliar: [
      "Abdome, perfusão e diurese de 1/1 h a 2/2 h",
      "Eletrólitos de 6/6 h a 12/12 h (piloro); RX de 6/6 h a 12/12 h (ECN inicial)"
    ],
    alta: [
      "Invaginação reduzida por enema: após 12–24 h de observação, aceitando dieta, sem dor",
      "Pós-piloromiotomia: aceitando dieta, geralmente em 24–48 h"
    ],
    observacao: [
      "Suspeita de invaginação com USG inicial negativo e dor persistente: observar e repetir USG"
    ],
    internacao: [
      "Todas as suspeitas de obstrução, volvo, ECN, piloro com distúrbio eletrolítico, enterocolite"
    ],
    transferencia: [
      "Sem cirurgia pediátrica: estabilizar (sonda, volume, antibiótico se indicado) e regular com prioridade máxima para volvo e perfuração",
      "Atresia de esôfago: transporte com cabeceira elevada e sonda em aspiração contínua"
    ]
  },
  prescricao: {
    hospitalar: "OBSTRUÇÃO INTESTINAL / ABDOME AGUDO CIRÚRGICO — CRIANÇA (peso: ___ kg)\n1. Dieta zero.\n2. Sonda orogástrica (RN, nº 8–10) ou nasogástrica (nº ___) aberta em frasco; anotar volume e aspecto do débito.\n3. SF 0,9% 10–20 mL/kg = ___ mL IV em 20 min se desidratação; reavaliar e repetir se necessário.\n4. Soro de manutenção isotônico com glicose (SG 5% + NaCl 0,9% ou solução isotônica pronta) a ___ mL/h + reposição do débito da sonda mL a mL com SF 0,9% + KCl 10 mEq/L, de 4/4 h.\n5. Dipirona 15 mg/kg = ___ mg IV de 6/6 h (> 3 meses). Dor intensa: morfina 0,05–0,1 mg/kg = ___ mg IV de 4/4 h se necessário (monitorizar FR e SpO₂).\n6. Se peritonite/perfuração (> 1 mês): ceftriaxona 50–75 mg/kg = ___ mg IV 1×/dia (máx. 2 g) + metronidazol 7,5 mg/kg = ___ mg IV de 8/8 h (máx. 500 mg), diluído em SF 0,9% e infundido em 60 min.\n   RN/ECN: ampicilina 50 mg/kg IV de 8/8 h + gentamicina conforme IG + metronidazol 15 mg/kg ataque e 7,5 mg/kg de 12/12 h.\n7. Controles: sinais vitais de 2/2 h; diurese; perímetro abdominal de 6/6 h; glicemia de 6/6 h no lactente; balanço hídrico.\n8. Exames: gasometria, eletrólitos, hemograma, PCR, lactato, tipagem; RX e USG de abdome.\n9. Avaliação da cirurgia pediátrica — URGENTE.\n\nESTENOSE DE PILORO\n- SF 0,9% 20 mL/kg se desidratado; depois SG 5% + NaCl 0,9% 1,5 × manutenção = ___ mL/h; após diurese, KCl 19,1% 1 mL (2,5 mEq) por 100 mL de soro (máx. 4 mEq/100 mL).\n- Eletrólitos e gasometria de 8/8 h; liberar para cirurgia com HCO₃ < 30 e Cl ≥ 100."
  },
  orientacoesRetorno: [
    "Vômito verde em bebê sempre exige ir ao pronto-socorro na hora",
    "Após redução de invaginação: voltar se a cólica, o vômito ou o sangue nas fezes voltarem (pode recorrer nos primeiros dias)",
    "Criança com Hirschsprung (antes ou depois da cirurgia): febre, barriga inchada e diarreia com mau cheiro são urgência",
    "Após cirurgia de piloro: alguns vômitos nas primeiras 24–48 h são comuns; voltar se vômitos persistirem, febre ou vermelhidão na ferida"
  ],
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["ECN sem melhora em 48–72 h com ampicilina + gentamicina + metronidazol", "Piperacilina-tazobactam ou meropenem (± vancomicina se estafilococo resistente) conforme CCIH e hemoculturas", "Reavaliar perfuração (RX seriado) e indicação cirúrgica"],
        ["Peritonite pós-operatória ou abscesso na criança", "Piperacilina-tazobactam 100 mg/kg (de piperacilina) IV de 8/8 h (máx. 4 g/dose) — em > 9 meses; drenagem do foco", "A falha na peritonite é mais por foco não controlado que por resistência"],
        ["Gram-negativo produtor de ESBL", "Meropenem 20 mg/kg/dose IV de 8/8 h (máx. 1 g)", "Ajustar pelo antibiograma"],
        ["Alergia grave a betalactâmico (criança)", "Ciprofloxacino 10 mg/kg IV de 12/12 h (máx. 400 mg) ou aminoglicosídeo + metronidazol", "Discutir com infectologia; quinolona aceitável em infecção grave"],
        ["Enterocolite de Hirschsprung que não melhora", "Descompressão eficaz (irrigações) + ampliar para piperacilina-tazobactam; considerar ostomia", "Cirurgia pediátrica"]
      ],
      nota: "Colher hemocultura antes de trocar o esquema. Doses neonatais completas na ficha sepse-neonatal."
    },
    {
      titulo: "Quando e onde pensar em cada doença",
      colunas: ["Doença", "Idade típica", "Sinal-chave"],
      linhas: [
        ["Atresia de esôfago", "Ao nascer", "Salivação, sonda não passa"],
        ["Atresia duodenal / jejunoileal", "1º–2º dia", "Vômito bilioso; dupla bolha ou múltiplos níveis"],
        ["Hirschsprung", "RN e lactente", "Mecônio > 48 h, distensão"],
        ["Má rotação / volvo", "Principalmente 1º mês (pode ocorrer em qualquer idade)", "Vômito bilioso súbito"],
        ["Enterocolite necrosante", "Prematuro, 2ª–3ª semana", "Distensão, sangue nas fezes, pneumatose"],
        ["Estenose de piloro", "2–8 semanas", "Vômito em jato não bilioso, oliva"],
        ["Invaginação", "6–36 meses", "Cólica intermitente, letargia, massa, geleia de framboesa"],
        ["Divertículo de Meckel", "< 2–5 anos", "Sangramento retal indolor volumoso"]
      ],
      nota: "Regra dos 2 do Meckel: ~2% da população, ~2 pés (60 cm) da válvula ileocecal, ~2 polegadas, sintomas geralmente antes dos 2 anos."
    }
  ],
  fontes: [
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 3 (2014)",
    "Sociedade Brasileira de Pediatria — Documentos científicos do Departamento de Cirurgia Pediátrica / Neonatologia (vigentes)",
    "American Pediatric Surgical Association (APSA) — Guidelines and evidence-based reviews: intussusception, malrotation, NEC (2019–2023)",
    "AAP — Red Book: Report of the Committee on Infectious Diseases (2024–2027)",
    "Holcomb and Ashcraft's Pediatric Surgery (8ª ed., 2024)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
