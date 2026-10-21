// Reconhecimento e abordagem inicial da criança grave
registrarFicha({
  id: "crianca-grave",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Criança grave: reconhecimento e abordagem inicial (TAP e ABCDE)",
  resumo: "Avaliação sistemática da criança potencialmente grave no PS ou na UBS: Triângulo de Avaliação Pediátrica (impressão em segundos), avaliação primária ABCDE, perfusão, e intervenções imediatas para insuficiência respiratória e choque.",
  palavrasChave: "crianca grave triangulo de avaliacao pediatrica tap abcde pals choque pediatrico insuficiencia respiratoria perfusao enchimento capilar sepse pediatrica desconforto respiratorio parada cardiorrespiratoria intraossea expansao volemica",
  critico: {
    tempo: "Avaliar-identificar-intervir em minutos",
    texto: "TAP alterado = chamar ajuda, monitor, O₂ e acesso (IV ou IO após 2 tentativas ou 90 s). Choque: cristaloide 10–20 mL/kg com reavaliação após cada bolus. Sepse com choque: antibiótico na 1ª hora."
  },
  alarmes: [
    "Aparência alterada: hipotonia, olhar vago, não reconhece os pais, choro fraco ou inconsolável, irritabilidade paradoxal",
    "Trabalho respiratório aumentado (tiragem, batimento de asa nasal, gemência, balanço de cabeça) ou respiração lenta/irregular, apneia",
    "Cianose central ou SpO₂ < 90% em ar ambiente; SpO₂ < 94% com desconforto",
    "Enchimento capilar > 2 s, pele moteada, extremidades frias, pulsos finos ou ausentes",
    "Hipotensão para a idade (choque descompensado) ou bradicardia com má perfusão",
    "Glicemia < 60 mg/dL ou > 250 mg/dL com desidratação/respiração acidótica",
    "Petéquias/púrpura com febre (meningococcemia)",
    "Glasgow ≤ 8, pupilas assimétricas, convulsão em curso"
  ],
  condutaInicial: [
    "TAP em 30–60 s, à distância: aparência (TICLS: tônus, interação, consolabilidade, olhar, fala/choro), trabalho respiratório, circulação da pele",
    "Qualquer lado do TAP alterado: sala de emergência, chamar ajuda, monitor cardíaco, oxímetro, PA, glicemia capilar",
    "A — via aérea: posicionar (coxim sob ombros no lactente), aspirar, cânula orofaríngea se inconsciente; considerar via aérea avançada se não mantém",
    "B — respiração: O₂ (máscara não reinalante 10–15 L/min) para SpO₂ ≥ 94%; ventilação com bolsa-válvula-máscara se FR inadequada (1 ventilação a cada 2–3 s quando há pulso)",
    "C — circulação: FC, pulsos, enchimento capilar, PA; acesso IV ou IO; cristaloide isotônico 10–20 mL/kg em 5–20 min se choque, reavaliando após cada bolus",
    "D — neurológico: AVDN ou Glasgow pediátrico, pupilas, glicemia; tratar hipoglicemia e convulsão",
    "E — exposição: temperatura, pele (petéquias, lesões de maus-tratos), peso real ou estimado (fita de Broselow)",
    "Avaliação secundária (SAMPLE + exame focado) e terciária (exames) só após estabilizar o ABCDE"
  ],
  fataisExcluir: [
    "Choque séptico / meningococcemia",
    "Choque hipovolêmico (diarreia, hemorragia, cetoacidose)",
    "Choque cardiogênico (miocardite, cardiopatia congênita ducto-dependente no RN)",
    "Anafilaxia",
    "Obstrução de via aérea (corpo estranho, epiglotite, crupe grave)",
    "Pneumotórax hipertensivo, tamponamento",
    "Hipoglicemia, intoxicação exógena, trauma não acidental"
  ],
  proximaDecisao: "Após cada intervenção, reavaliar (avaliar-identificar-intervir). Choque que persiste após 40–60 mL/kg (ou sinais de sobrecarga: estertores, hepatomegalia) → iniciar vasoativo (epinefrina ou norepinefrina) e transferir para UTI pediátrica. Sem UTI disponível e sem hipotensão: alíquotas menores e total de até 40 mL/kg na 1ª hora.",
  clinica: {
    anamnese: [
      "SAMPLE: Sinais e sintomas, Alergias, Medicamentos (inclusive acesso a remédios em casa), Passado médico (prematuridade, cardiopatia, imunodeficiência), Líquidos e última refeição, Eventos (início, trauma, ingestão)",
      "Febre, vômitos, diarreia, diurese (fraldas nas últimas horas), ingestão de líquidos",
      "Dispneia, engasgo súbito (corpo estranho), chiado",
      "Convulsão, sonolência, cefaleia, trauma",
      "Vacinas em atraso (Hib, pneumococo, meningococo)",
      "Contexto social: atraso na procura, história incoerente (maus-tratos)"
    ],
    exameFisico: [
      "Aparência (TICLS): Tônus, Interação, Consolabilidade, olhar (Look/gaze), fala ou choro (Speech/cry)",
      "Respiração: FR, tiragem (subcostal, intercostal, fúrcula), batimento de asa nasal, gemência, estridor, sibilos, ausculta, SpO₂",
      "Circulação: FC, pulsos centrais × periféricos, enchimento capilar (normal ≤ 2 s), temperatura de extremidades, cor (palidez, moteamento), PA, débito urinário, hepatomegalia",
      "Neurológico: AVDN (Alerta, responde à Voz, à Dor, Não responde), Glasgow pediátrico, pupilas, postura, fontanela",
      "Exposição: temperatura, exantema petequial, sinais de trauma, peso"
    ],
    diferenciais: [
      { dx: "Desconforto respiratório (compensado)", pista: "TAP: respiração alterada, aparência e circulação normais" },
      { dx: "Insuficiência respiratória", pista: "TAP: respiração e aparência alteradas (agitação, sonolência, cianose, FR lenta)" },
      { dx: "Choque compensado", pista: "TAP: circulação alterada; PA normal, taquicardia, enchimento capilar lento" },
      { dx: "Choque descompensado", pista: "TAP: aparência e circulação alteradas; hipotensão para a idade" },
      { dx: "Disfunção primária do SNC ou metabólica", pista: "TAP: só aparência alterada (convulsão, intoxicação, hipoglicemia, TCE)" },
      { dx: "Insuficiência cardiopulmonar", pista: "Os três lados alterados: risco iminente de parada" }
    ],
    gravidade: [
      "TAP com 1 lado alterado: urgente; 2 ou 3 lados: emergência",
      "Choque: compensado (PA normal, perfusão ruim) × descompensado (PA abaixo do limite para a idade)",
      "Hipotensão: PAS < 60 (RN a termo), < 70 (1–12 meses), < 70 + 2 × idade (1–10 anos), < 90 (> 10 anos)",
      "Sinais de parada iminente: bradicardia, bradipneia/gasping, hipotonia, ausência de resposta"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar",
      pedido: "Glicemia capilar imediata (beira-leito).",
      porQue: "Hipoglicemia é causa e consequência frequente de gravidade em lactentes.",
      esperar: "≥ 60 mg/dL.",
      interpretacao: "< 60 mg/dL: SG 10% 2–5 mL/kg IV e repetir em 15 min.",
      limitacoes: "Glicosímetro é impreciso em choque com má perfusão periférica; confirmar com glicemia sérica."
    },
    {
      nome: "Gasometria e lactato",
      pedido: "Gasometria venosa com lactato, sódio, potássio, cálcio iônico.",
      porQue: "Avaliar acidose, hipoperfusão e distúrbios eletrolíticos.",
      esperar: "pH 7,35–7,45; lactato < 2 mmol/L.",
      interpretacao: "Lactato elevado e acidose metabólica reforçam hipoperfusão; acompanhar o clareamento após expansão.",
      limitacoes: "Lactato normal não exclui choque; não atrasar tratamento esperando resultado."
    },
    {
      nome: "Exames para sepse",
      pedido: "Hemograma completo, PCR, hemocultura (antes do antibiótico, sem atrasá-lo), urina tipo 1 e urocultura por sondagem, ureia, creatinina, TGO/TGP, coagulograma. Líquor se estável e sem contraindicação.",
      porQue: "Identificar foco e disfunção orgânica.",
      esperar: "Variável.",
      interpretacao: "Leucopenia, plaquetopenia e coagulopatia sugerem sepse grave/CIVD.",
      limitacoes: "Punção lombar é adiada em instabilidade hemodinâmica, coagulopatia ou sinais de hipertensão intracraniana; não adiar antibiótico."
    },
    {
      nome: "Imagem conforme suspeita",
      pedido: "Radiografia de tórax no leito. USG point-of-care (POCUS) se disponível: pulmão, coração (contratilidade, derrame), veia cava.",
      porQue: "Pneumonia, pneumotórax, cardiomegalia (miocardite), derrame pericárdico; guiar volume.",
      esperar: "—",
      interpretacao: "Área cardíaca aumentada ou congestão em criança em choque: suspeitar choque cardiogênico e reduzir volume.",
      limitacoes: "Não transportar a criança instável para a radiologia."
    }
  ],
  tratamento: [
    {
      droga: "Oxigênio",
      linha: "l1",
      dose: "Máscara não reinalante 10–15 L/min; cateter nasal 1–4 L/min se desconforto leve",
      via: "Inalatória",
      intervalo: "Contínuo",
      duracao: "Titular para SpO₂ ≥ 94% (na sepse/pós-PCR evitar hiperóxia: alvo 94–99%)",
      monitorizacao: "SpO₂, FR, trabalho respiratório",
      contraindicacoes: "—",
      ajustes: "Cardiopatia congênita cianótica: alvo de saturação individual (geralmente 75–85%); discutir com especialista"
    },
    {
      droga: "Cristaloide isotônico (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "10–20 mL/kg em bolus",
      via: "IV ou IO",
      intervalo: "Em 5–20 min; repetir conforme resposta",
      duracao: "Até 40–60 mL/kg na 1ª hora se UTI disponível; sem UTI e sem hipotensão, até 40 mL/kg em alíquotas de 10–20 mL/kg",
      monitorizacao: "Após cada bolus: FC, enchimento capilar, PA, consciência, diurese; parar se estertores, hepatomegalia, piora respiratória",
      contraindicacoes: "Sinais de sobrecarga ou choque cardiogênico (usar 5–10 mL/kg em 10–20 min, com cautela)",
      ajustes: "Cristaloide balanceado preferível ao SF 0,9% (Surviving Sepsis Campaign pediátrica 2020; PALS 2025). Hemorragia: após 20–40 mL/kg, hemácias 10–20 mL/kg"
    },
    {
      droga: "Glicose (SG 10%)",
      linha: "l1",
      dose: "2–5 mL/kg (0,2–0,5 g/kg)",
      via: "IV ou IO em bolus",
      intervalo: "Repetir se glicemia < 60 mg/dL após 15 min",
      duracao: "Depois manter soro de manutenção com glicose",
      monitorizacao: "Glicemia capilar a cada 15–30 min até estável",
      contraindicacoes: "—",
      ajustes: "O PALS cita 0,5–1 g/kg (SG 10% 5–10 mL/kg); começar com 2–5 mL/kg e repetir conforme glicemia. RN: 2 mL/kg. Não usar SG 25–50% em lactentes em veia periférica (flebite e hiperosmolaridade)"
    },
    {
      droga: "Epinefrina em infusão contínua (choque refratário a volume)",
      linha: "l1",
      dose: "0,05–0,3 mcg/kg/min, titulável até 1 mcg/kg/min",
      via: "IV (central preferível; periférica ou IO aceitável no início)",
      intervalo: "Contínuo em bomba de infusão",
      duracao: "Até estabilização na UTI",
      monitorizacao: "FC, PA, perfusão, lactato, extravasamento",
      contraindicacoes: "—",
      ajustes: "Choque frio (vasoconstrito): epinefrina. Choque quente (vasodilatado): norepinefrina 0,05–1 mcg/kg/min. Diluição prática (regra do 0,3): 0,3 × peso (kg) = mg de epinefrina a diluir em 50 mL de SG 5% ou SF → 1 mL/h = 0,1 mcg/kg/min"
    },
    {
      droga: "Ceftriaxona (sepse/meningite suspeita, sem foco definido)",
      linha: "l1",
      dose: "100 mg/kg/dia (máx 4 g/dia) na suspeita de meningite; 50–75 mg/kg/dose (máx 2 g) na sepse sem meningite",
      via: "IV (ou IM se sem acesso)",
      intervalo: "Meningite: 12/12h (ou 24/24h na dose total); sepse: 24/24h",
      duracao: "Conforme foco e culturas",
      monitorizacao: "Resposta clínica, culturas em 48–72 h",
      contraindicacoes: "RN < 28 dias com hiperbilirrubinemia ou em uso de soluções com cálcio (usar cefotaxima)",
      ajustes: "Iniciar na 1ª hora se choque séptico e em até 3 h se sepse sem choque. Diluir em SF 0,9% ou SG 5% e infundir em 30 min. Lactente < 3 meses: associar ampicilina; meningite: considerar vancomicina conforme perfil local"
    },
    {
      droga: "Epinefrina (PCR / bradicardia com má perfusão)",
      linha: "adj",
      dose: "0,01 mg/kg (0,1 mL/kg da solução 0,1 mg/mL); máx 1 mg",
      via: "IV ou IO",
      intervalo: "A cada 3–5 min",
      duracao: "Durante a RCP",
      monitorizacao: "Ritmo, ETCO₂, qualidade da RCP",
      contraindicacoes: "—",
      ajustes: "Preparo: 1 mL de epinefrina 1 mg/mL + 9 mL de SF = 0,1 mg/mL. Bradicardia < 60 bpm com má perfusão apesar de oxigenação/ventilação: iniciar compressões (15:2 com 2 socorristas)"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência com monitorização contínua; um líder de equipe e funções definidas",
      "Comunicar a regulação (SAMU/central de leitos) precocemente se não houver UTI pediátrica"
    ],
    reavaliar: [
      "Após cada intervenção (bolus, O₂, glicose): FC, FR, SpO₂, PA, enchimento capilar, consciência",
      "Diurese horária (sonda vesical se choque); glicemia de 1/1 h nas primeiras horas"
    ],
    alta: [
      "Somente se TAP normal, sinais vitais adequados para a idade, aceitando via oral, causa tratável identificada e retorno garantido"
    ],
    observacao: [
      "Desconforto respiratório leve que responde ao tratamento inicial; desidratação corrigida; observar 4–6 h com reavaliações"
    ],
    internacao: [
      "Necessidade de O₂, expansão volêmica repetida ou antibiótico IV",
      "UTI pediátrica: choque que precisou de > 40 mL/kg ou vasoativo, insuficiência respiratória, Glasgow ≤ 8, convulsão refratária"
    ],
    transferencia: [
      "UBS/serviço sem estrutura: estabilizar (O₂, acesso, 1º bolus, glicose, 1ª dose de antibiótico) e transferir com SAMU; enviar resumo com doses e horários"
    ]
  },
  prescricao: {
    hospitalar: "CRIANÇA GRAVE — SALA DE EMERGÊNCIA (peso: ___ kg; estimado se necessário)\n1. Jejum enquanto instável.\n2. Monitor cardíaco, oximetria contínua, PA a cada 5–15 min, cabeceira conforme conforto.\n3. Oxigênio por máscara não reinalante 10–15 L/min; titular para SpO₂ ≥ 94%.\n4. Acesso venoso periférico (IO se 2 tentativas sem sucesso ou 90 s).\n5. Ringer lactato (ou SF 0,9%) ___ mL (10–20 mL/kg) IV/IO em 5–20 minutos. Reavaliar após cada bolus; repetir até 40–60 mL/kg na 1ª hora se perfusão ainda ruim e sem estertores/hepatomegalia.\n6. Se glicemia < 60 mg/dL: SG 10% ___ mL (2–5 mL/kg) IV em bolus; repetir glicemia em 15 minutos.\n7. Se suspeita de sepse: colher hemocultura e iniciar ceftriaxona ___ mg (100 mg/kg/dia, máx 4 g/dia se meningite; 50–75 mg/kg, máx 2 g se sepse sem meningite) IV, diluída em SF 0,9% 50–100 mL, em 30 minutos — na 1ª hora.\n8. Se choque persistente após volume: epinefrina — diluir (0,3 × peso) mg em SG 5% até 50 mL; iniciar 0,5–1 mL/h (= 0,05–0,1 mcg/kg/min) em bomba de infusão, titular até perfusão adequada (máx 1 mcg/kg/min). Vasodilatado: norepinefrina na mesma diluição e dose.\n9. Antitérmico se febre: dipirona 15–25 mg/kg/dose IV (máx 1 g) de 6/6 h — IV só a partir de 1 ano; de 3 a 11 meses usar IM; contraindicada < 3 meses ou < 5 kg —, ou paracetamol 10–15 mg/kg VO de 6/6 h.\n10. Sonda vesical de demora em choque: diurese horária (alvo ≥ 1 mL/kg/h).\n11. Controles: glicemia capilar de 1/1 h; gasometria e lactato em 1–2 h; balanço hídrico; reavaliação médica contínua até transferência."
  },
  orientacoesRetorno: [
    "Após alta de quadro grave, retorno em 24–48 h na UBS ou no PS para reavaliação",
    "Voltar imediatamente se: dificuldade para respirar, lábios roxos, criança muito mole ou difícil de acordar, mãos e pés frios, manchas roxas na pele, convulsão, vômitos que não param, sem urinar há mais de 6–8 h",
    "Manter vacinas em dia; trazer a Caderneta da Criança"
  ],
  tabelas: [
    {
      titulo: "Triângulo de Avaliação Pediátrica — interpretação",
      colunas: ["Aparência", "Respiração", "Circulação", "Impressão"],
      linhas: [
        ["Normal", "Normal", "Normal", "Estável"],
        ["Alterada", "Normal", "Normal", "Disfunção do SNC / metabólica / sistêmica"],
        ["Normal", "Alterada", "Normal", "Desconforto respiratório"],
        ["Alterada", "Alterada", "Normal", "Insuficiência respiratória"],
        ["Normal", "Normal", "Alterada", "Choque compensado"],
        ["Alterada", "Normal", "Alterada", "Choque descompensado"],
        ["Alterada", "Alterada", "Alterada", "Insuficiência cardiopulmonar"]
      ],
      nota: "O TAP é feito à distância, sem tocar na criança, em 30–60 segundos."
    },
    {
      titulo: "Tipos de choque — pistas",
      colunas: ["Tipo", "Pistas", "Conduta inicial"],
      linhas: [
        ["Hipovolêmico", "Diarreia, vômitos, hemorragia; mucosas secas", "Cristaloide 20 mL/kg, repetir; hemácias se sangramento"],
        ["Distributivo (séptico, anafilático)", "Febre, petéquias; urticária, broncoespasmo", "Volume + antibiótico na 1ª h; anafilaxia: epinefrina IM 0,01 mg/kg (máx 0,5 mg)"],
        ["Cardiogênico", "Estertores, hepatomegalia, ritmo de galope, piora com volume", "Volume cauteloso 5–10 mL/kg; inotrópico; especialista"],
        ["Obstrutivo", "Turgência jugular, desvio de traqueia, abafamento de bulhas; RN com piora ao fechar o ducto", "Descompressão / pericardiocentese; RN: prostaglandina E1"]
      ]
    }
  ],
  fontes: [
    "AHA/AAP — 2025 American Heart Association and American Academy of Pediatrics Guidelines for CPR and ECC: Pediatric Advanced Life Support (2025)",
    "Surviving Sepsis Campaign — International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children (Pediatr Crit Care Med, 2020)",
    "SBP — Departamento Científico de Emergência: Reconhecimento da criança gravemente enferma / Triângulo de Avaliação Pediátrica (documentos científicos vigentes)",
    "Dieckmann RA et al. — The Pediatric Assessment Triangle (Pediatr Emerg Care, 2010)",
    "Phoenix Sepsis Criteria — International Consensus Criteria for Pediatric Sepsis and Septic Shock (JAMA, 2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
