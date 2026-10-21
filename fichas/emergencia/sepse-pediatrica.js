// Sepse e choque séptico pediátrico
registrarFicha({
  id: "sepse-pediatrica",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "pediatrico",
  formato: "completo",
  titulo: "Sepse e choque séptico pediátrico (critérios de Phoenix 2024, Surviving Sepsis Campaign 2026)",
  resumo: "Criança com infecção suspeita e disfunção orgânica com risco de vida. Critérios de Phoenix (2024): sepse = escore ≥ 2; choque séptico = sepse com ≥ 1 ponto cardiovascular. Reconhecer cedo pelo exame clínico, colher culturas, antibiótico em até 1 h no choque, fluido em bolus com reavaliação e vasoativo periférico precoce.",
  palavrasChave: "sepse pediatrica choque septico crianca phoenix surviving sepsis campaign 2026 ssc bolus fluido ringer lactato epinefrina adrenalina norepinefrina noradrenalina antibiotico ceftriaxona lactato perfusao tec vasoativo",
  critico: {
    tempo: "Choque: antibiótico em até 1 h",
    texto: "Suspeita de choque séptico: acesso (IV ou intraósseo) em minutos, hemocultura e antibiótico em até 1 h, bolus de cristaloide balanceado 10–20 mL/kg com reavaliação após cada bolus e vasoativo periférico se o choque persistir. Sepse sem choque: investigar rapidamente e iniciar antibiótico em até 3 h."
  },
  alarmes: [
    "Alteração do estado mental: irritabilidade, sonolência, não reconhece os pais, gemência",
    "Tempo de enchimento capilar > 2 s, extremidades frias, pulsos finos, pele moteada — ou pulsos amplos com TEC muito rápido e extremidades quentes",
    "Taquicardia persistente, hipotensão (sinal tardio na criança)",
    "Petéquias ou púrpura",
    "Oligúria (< 1 mL/kg/h), lactato elevado",
    "Taquipneia, hipoxemia, gemido",
    "Lactente < 3 meses, imunodeprimido, neutropênico, cateter central, doença falciforme/asplenia"
  ],
  condutaInicial: [
    "Triângulo de Avaliação Pediátrica e ABCDE; O₂ se SpO₂ < 94% ou choque; monitor",
    "Acesso venoso — se falhar em 5 min ou 2 tentativas, intraósseo",
    "Glicemia capilar imediata; lactato, gasometria, hemocultura (antes do antibiótico, sem atrasá-lo)",
    "Antibiótico de amplo espectro em até 1 h no choque séptico (até 3 h na sepse provável sem choque, após avaliação rápida)",
    "Bolus de cristaloide balanceado (Ringer lactato) 10–20 mL/kg em 5–20 min, reavaliando após cada bolus (FC, TEC, PA, consciência, diurese, fígado, estertores, SpO₂)",
    "Com UTI disponível: até 40–60 mL/kg na 1ª hora; sem UTI: bolus (até 40 mL/kg) só se hipotensão — sem hipotensão, apenas hidratação de manutenção",
    "Parar o fluido se hepatomegalia, estertores, piora do trabalho respiratório ou da SpO₂",
    "Choque que persiste após 40–60 mL/kg (ou antes, se sobrecarga): epinefrina ou norepinefrina em veia periférica, sem esperar acesso central",
    "Controlar o foco (drenagem, retirada de cateter) e buscar UTI pediátrica"
  ],
  fataisExcluir: [
    "Meningococcemia / púrpura fulminante",
    "Síndrome do choque tóxico (estafilocócico ou estreptocócico — associar clindamicina)",
    "Choque cardiogênico (miocardite, cardiopatia congênita — fígado grande, estertores, ritmo de galope: fluidos podem piorar)",
    "Cetoacidose diabética, insuficiência adrenal, erro inato do metabolismo",
    "Choque hipovolêmico (diarreia), anafilaxia, trauma não acidental",
    "Dengue grave"
  ],
  proximaDecisao: "Choque responsivo a fluido (perfusão e consciência normalizam) → manter antibiótico, fluido de manutenção, reavaliação seriada e internação. Choque refratário a fluido → vasoativo periférico e UTI pediátrica; refratário a vasoativo → avaliar função cardíaca (POCUS), segundo vasoativo, cálcio e hidrocortisona se risco de insuficiência adrenal.",
  clinica: {
    anamnese: [
      "Início e evolução da febre (hipotermia em lactente), foco provável (respiratório, urinário, abdominal, pele, SNC)",
      "Aceitação alimentar, diurese, vômitos, diarreia",
      "Comorbidades: imunodepressão, quimioterapia, cateter, asplenia, cardiopatia, prematuridade",
      "Vacinas, antibióticos recentes, internações, contato com meningite",
      "Medicamentos (corticoide crônico → insuficiência adrenal)"
    ],
    exameFisico: [
      "FC, FR, PA (pressão arterial média), temperatura, SpO₂, glicemia",
      "Perfusão: TEC central e periférico, pulsos centrais × periféricos, temperatura das extremidades, cor da pele",
      "Estado mental (AVDN ou Glasgow pediátrico)",
      "Fígado (tamanho antes e após fluido), estertores, ritmo de galope",
      "Pele: petéquias, púrpura, eritrodermia (choque tóxico), lesões de porta de entrada",
      "Fontanela, sinais meníngeos, abdome"
    ],
    diferenciais: [
      { dx: "Choque frio", pista: "Extremidades frias, TEC lento, pulsos finos — mais comum em lactentes" },
      { dx: "Choque quente", pista: "Extremidades quentes, TEC rápido, pulsos amplos, PA diastólica baixa" },
      { dx: "Choque cardiogênico", pista: "Hepatomegalia, estertores, galope, piora com fluido" },
      { dx: "Choque hipovolêmico", pista: "Perdas evidentes, responde bem a fluido" },
      { dx: "Choque tóxico", pista: "Eritrodermia, foco em pele/partes moles, tampão, varicela" }
    ],
    gravidade: [
      "Sepse (Phoenix): infecção suspeita + escore ≥ 2 pontos (respiratório, cardiovascular, coagulação, neurológico)",
      "Choque séptico: sepse + ≥ 1 ponto cardiovascular (hipotensão grave para a idade, lactato ≥ 5 mmol/L ou uso de vasoativo)",
      "Phoenix não é ferramenta de triagem: no PS, suspeitar e tratar pela clínica (perfusão, estado mental, taquicardia) sem esperar exames",
      "Escore validado para crianças de até 18 anos (não para recém-nascidos prematuros no período perinatal)"
    ]
  },
  exames: [
    {
      nome: "Culturas",
      pedido: "Hemocultura (1 amostra periférica; também de cada lúmen de cateter central), urocultura por cateterismo; líquor se estável e suspeita de meningite; cultura de secreções/foco.",
      porQue: "Identificar o agente e ajustar o antibiótico.",
      esperar: "—",
      interpretacao: "Reavaliar o esquema em 48–72 h com culturas.",
      limitacoes: "Não atrasar o antibiótico para colher (máximo poucos minutos)."
    },
    {
      nome: "Lactato e gasometria",
      pedido: "Lactato arterial ou venoso e gasometria venosa com eletrólitos e cálcio iônico.",
      porQue: "SSC 2026 recomenda medir lactato na avaliação inicial; acidose; cálcio iônico.",
      esperar: "—",
      interpretacao: "Lactato ≥ 5 mmol/L pontua no Phoenix cardiovascular. Lactato normal não exclui choque.",
      limitacoes: "Lactato isolado não deve classificar risco nem guiar sozinho a ressuscitação."
    },
    {
      nome: "Hemograma, coagulação e bioquímica",
      pedido: "Hemograma com plaquetas, TP/INR, fibrinogênio, D-dímero, PCR, procalcitonina se disponível, ureia, creatinina, sódio, potássio, magnésio, bilirrubinas, TGO, TGP, glicemia.",
      porQue: "Disfunção de coagulação (Phoenix), rim, fígado; CIVD.",
      esperar: "—",
      interpretacao: "Plaquetas < 100 mil, INR > 1,3, D-dímero > 2 mg/L FEU, fibrinogênio < 100 mg/dL pontuam no Phoenix.",
      limitacoes: "—"
    },
    {
      nome: "Imagem e POCUS",
      pedido: "Radiografia de tórax; ultrassonografia point-of-care (cardíaca e pulmonar) para avaliar função cardíaca, volume e congestão, se disponível.",
      porQue: "Foco infeccioso; guiar fluido e vasoativo (SSC 2026 sugere POCUS).",
      esperar: "—",
      interpretacao: "Disfunção de VE → reduzir fluido e preferir epinefrina.",
      limitacoes: "Operador-dependente."
    }
  ],
  tratamento: [
    {
      droga: "Ringer lactato (cristaloide balanceado)",
      linha: "l1",
      dose: "10–20 mL/kg por bolus; até 40–60 mL/kg na 1ª hora (com UTI disponível)",
      via: "IV ou IO, em 5–20 min (seringa ou bolsa pressurizada)",
      intervalo: "Reavaliar após cada bolus",
      duracao: "Até restaurar a perfusão ou surgir sinal de sobrecarga",
      monitorizacao: "FC, TEC, PA, consciência, diurese, fígado, estertores, SpO₂",
      contraindicacoes: "Sobrecarga: hepatomegalia, estertores, piora respiratória; cautela em cardiopatas e desnutridos graves",
      ajustes: "SSC 2026: preferir balanceado ao SF 0,9%. Sem UTI disponível: não fazer bolus sem hipotensão (só manutenção); com hipotensão, até 40 mL/kg na 1ª hora. Albumina não é 1ª escolha"
    },
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "100 mg/kg/dia (máx. 4 g/dia): 50 mg/kg/dose 12/12 h (máx. 2 g/dose) — dose de meningite se não excluída",
      via: "IV ou IO em 30 min (IM se sem acesso)",
      intervalo: "12/12 h",
      duracao: "Conforme foco e culturas",
      monitorizacao: "Culturas, resposta clínica",
      contraindicacoes: "Neonato com hiperbilirrubinemia ou soluções com cálcio",
      ajustes: "Criança > 1 mês, comunitária, sem fatores de risco. Neonato (< 28 dias): ampicilina + gentamicina (ou cefotaxima) conforme neonatologia"
    },
    {
      droga: "Vancomicina",
      linha: "adj",
      dose: "15 mg/kg/dose (60 mg/kg/dia)",
      via: "IV em 1–2 h",
      intervalo: "6/6 h",
      duracao: "Suspender se culturas sem gram-positivo resistente em 48–72 h",
      monitorizacao: "Nível sérico e função renal",
      contraindicacoes: "—",
      ajustes: "Associar no choque séptico, suspeita de MRSA, infecção de cateter ou pele/partes moles grave. Diluir ≤ 5 mg/mL"
    },
    {
      droga: "Clindamicina",
      linha: "adj",
      dose: "40 mg/kg/dia (10 mg/kg/dose; máx. 900 mg/dose)",
      via: "IV em 30–60 min",
      intervalo: "6/6 h",
      duracao: "Primeiros dias",
      monitorizacao: "Diarreia",
      contraindicacoes: "—",
      ajustes: "Suspeita de choque tóxico (eritrodermia, fasceíte, varicela infectada): bloqueia a produção de toxina"
    },
    {
      droga: "Cefepima (neutropenia febril / hospitalar)",
      linha: "alt",
      dose: "50 mg/kg/dose (máx. 2 g)",
      via: "IV em 30 min",
      intervalo: "8/8 h",
      duracao: "Conforme culturas",
      monitorizacao: "Função renal, neurotoxicidade",
      contraindicacoes: "—",
      ajustes: "Imunodeprimido, neutropênico, infecção relacionada à assistência: seguir perfil local (meropeném se ESBL/colonização)"
    },
    {
      droga: "Epinefrina (adrenalina)",
      linha: "l1",
      dose: "0,05–0,3 mcg/kg/min, titular até perfusão adequada (doses maiores na UTI)",
      via: "IV periférica (calibrosa) ou IO, em bomba de infusão",
      intervalo: "Contínua",
      duracao: "Até estabilidade",
      monitorizacao: "FC, PA (invasiva quando possível), perfusão, lactato, glicemia, local da punção (extravasamento)",
      contraindicacoes: "—",
      ajustes: "Diluição prática: 0,3 mg × peso (kg) em SG 5% ou SF 0,9% até 50 mL → 1 mL/h = 0,1 mcg/kg/min. Para veia periférica pode-se usar solução mais diluída. SSC 2026: sem evidência para preferir epinefrina ou norepinefrina; epinefrina costuma ser preferida no choque frio/disfunção miocárdica"
    },
    {
      droga: "Norepinefrina (noradrenalina)",
      linha: "l1",
      dose: "0,05–0,3 mcg/kg/min, titular (doses maiores na UTI)",
      via: "IV periférica (calibrosa) ou IO, em bomba de infusão",
      intervalo: "Contínua",
      duracao: "Até estabilidade",
      monitorizacao: "PA, perfusão, local da punção",
      contraindicacoes: "—",
      ajustes: "Mesma diluição prática: 0,3 mg × peso (kg) até 50 mL → 1 mL/h = 0,1 mcg/kg/min. Útil no choque quente (vasodilatado)"
    },
    {
      droga: "Hidrocortisona",
      linha: "adj",
      dose: "2 mg/kg (máx. 100 mg) em bolus; manutenção conforme UTI",
      via: "IV",
      intervalo: "Dose inicial, depois a critério da UTI",
      duracao: "—",
      monitorizacao: "Glicemia",
      contraindicacoes: "Não usar quando a estabilidade é obtida com fluido e vasoativo (SSC 2026)",
      ajustes: "Considerar no choque refratário com risco de insuficiência adrenal (corticoide crônico, hiperplasia adrenal, hipopituitarismo, púrpura fulminante). Para os demais refratários, a SSC 2026 não fez recomendação"
    },
    {
      droga: "Glicose e cálcio (correções)",
      linha: "adj",
      dose: "Hipoglicemia: SG 10% 2–5 mL/kg · Hipocalcemia (cálcio iônico baixo): gluconato de cálcio 10% 0,5–1 mL/kg (máx. 20 mL)",
      via: "IV lento (cálcio em 10–20 min, com monitor)",
      intervalo: "Conforme controle",
      duracao: "—",
      monitorizacao: "Glicemia de 1/1 h no choque; cálcio iônico; ECG",
      contraindicacoes: "Cálcio: não misturar com bicarbonato nem com ceftriaxona na mesma via",
      ajustes: "Na intubação: cetamina 1–2 mg/kg IV; evitar etomidato"
    }
  ],
  destino: {
    agora: [
      "O₂, acesso IV/IO, culturas, antibiótico em até 1 h, bolus com reavaliação, glicemia",
      "Acionar UTI pediátrica / regulação desde o reconhecimento do choque"
    ],
    reavaliar: [
      "Após cada bolus; depois a cada 15 min na 1ª hora (FC, TEC, PA, consciência, diurese, fígado, SpO₂)",
      "Lactato repetido em 2–4 h se inicialmente elevado; culturas e antibiótico em 48–72 h"
    ],
    alta: [
      "Não se aplica na fase aguda; alta hospitalar após resolução e tratamento do foco, com seguimento na UBS (crescimento, desenvolvimento, reabilitação)"
    ],
    observacao: [
      "Sepse provável sem choque e sem disfunção progressiva: sala de emergência com reavaliação frequente enquanto se define o diagnóstico"
    ],
    internacao: [
      "Toda sepse; UTI pediátrica no choque séptico, necessidade de vasoativo, ventilação ou disfunção progressiva"
    ],
    transferencia: [
      "Serviço sem UTI pediátrica: estabilizar (antibiótico, fluido conforme disponibilidade de UTI, vasoativo periférico, glicose) e transferir com equipe e transporte de suporte avançado"
    ]
  },
  prescricao: {
    hospitalar: "CHOQUE SÉPTICO PEDIÁTRICO — 1ª HORA (peso: ___ kg)\n1. Dieta zero. Decúbito elevado se desconforto respiratório.\n2. O₂ por máscara não reinalante; após estabilização, titular para evitar hiperóxia.\n3. Monitor cardíaco, oximetria contínua, PA a cada 5–15 min; sonda vesical para diurese horária.\n4. Acesso venoso calibroso (ou intraósseo).\n5. Colher hemocultura, lactato, gasometria venosa com eletrólitos e cálcio iônico, hemograma, coagulograma, PCR, função renal e hepática — sem atrasar o item 6.\n6. Ceftriaxona 50 mg/kg = ___ mg (máx. 2 g) IV em 30 min, diluída em SF 0,9% (ex.: 20–50 mL), de 12/12 h.\n   + Vancomicina 15 mg/kg = ___ mg IV de 6/6 h, diluída em SF 0,9% até ≤ 5 mg/mL, em 1–2 h (se choque, cateter, MRSA ou pele/partes moles).\n   + Clindamicina 10 mg/kg = ___ mg (máx. 900 mg) IV de 6/6 h em 30–60 min (se suspeita de choque tóxico).\n   (< 28 dias: ampicilina + gentamicina ou cefotaxima, doses da neonatologia.)\n7. Ringer lactato 10–20 mL/kg = ___ mL IV em 5–20 min (seringa). Reavaliar após cada bolus; repetir até 40–60 mL/kg na 1ª hora se perfusão ainda inadequada e sem sinais de sobrecarga (hepatomegalia, estertores, piora da SpO₂). Sem UTI disponível e sem hipotensão: não fazer bolus.\n8. Se choque persistente após fluido ou sinais de sobrecarga: Epinefrina — diluir 0,3 mg × peso = ___ mg (___ mL da ampola 1 mg/mL) em SG 5% até 50 mL; infundir em bomba em veia periférica calibrosa ou IO a ___ mL/h (1 mL/h = 0,1 mcg/kg/min; iniciar 0,5–1 mL/h = 0,05–0,1 mcg/kg/min e titular até 3 mL/h = 0,3 mcg/kg/min). Choque quente: Norepinefrina com a mesma diluição e titulação.\n9. Glicemia capilar agora e de 1/1 h; se < 60 mg/dL: SG 10% 2–5 mL/kg IV.\n10. Se cálcio iônico baixo: gluconato de cálcio 10% 0,5–1 mL/kg (máx. 20 mL) IV em 10–20 min, com monitor, em via separada da ceftriaxona.\n11. Após ressuscitação: soro de manutenção isotônico com glicose (SG 5% + NaCl 0,9% ou solução isotônica pronta) a ___ mL/h.\n12. Dipirona 15 mg/kg (máx. 1 g) IV de 6/6 h se febre.\n13. Controles: FC, FR, PA, SpO₂, TEC e consciência a cada 15 min na 1ª hora; diurese horária (meta ≥ 1 mL/kg/h); lactato em 2–4 h; balanço hídrico.\n14. Solicitar vaga de UTI pediátrica."
  },
  orientacoesRetorno: [
    "Explicar à família, em linguagem simples, que a infecção afetou a circulação e que a criança precisa de cuidados intensivos",
    "Após a alta: manter o antibiótico conforme prescrição e as consultas na UBS e com especialistas",
    "Voltar imediatamente se: febre com criança molinha ou difícil de acordar, mãos e pés frios ou manchados, respiração rápida, gemência, manchas roxas, muito pouca urina, vômitos que não param",
    "Sobreviventes de sepse podem ter cansaço, dificuldades de aprendizado ou de comportamento nos meses seguintes: comunicar à equipe da UBS para acompanhamento e reabilitação",
    "Manter as vacinas em dia (pneumocócica, meningocócicas, Hib, influenza)"
  ],
  tabelas: [
    {
      titulo: "Escore de Phoenix para sepse pediátrica (JAMA 2024)",
      colunas: ["Sistema", "0 ponto", "1 ponto", "2 pontos", "3 pontos"],
      linhas: [
        ["Respiratório (0–3)", "PaO₂/FiO₂ ≥ 400 ou SpO₂/FiO₂ ≥ 292", "PaO₂/FiO₂ < 400 ou SpO₂/FiO₂ < 292 com qualquer suporte respiratório", "PaO₂/FiO₂ 100–200 ou SpO₂/FiO₂ 148–220 em ventilação mecânica invasiva", "PaO₂/FiO₂ < 100 ou SpO₂/FiO₂ < 148 em ventilação mecânica invasiva"],
        ["Cardiovascular (0–6): soma dos itens", "Sem vasoativo, lactato < 5, PAM acima do corte", "1 vasoativo · lactato 5–10,9 mmol/L · PAM baixa para a idade (cada item = 1)", "≥ 2 vasoativos · lactato ≥ 11 mmol/L · PAM muito baixa para a idade (cada item = 2)", "—"],
        ["Coagulação (0–2): 1 ponto por item, máx. 2", "Normal", "Plaquetas < 100.000/µL · INR > 1,3 · D-dímero > 2 mg/L FEU · fibrinogênio < 100 mg/dL", "Máximo da categoria", "—"],
        ["Neurológico (0–2)", "Glasgow > 10 e pupilas reativas", "Glasgow ≤ 10", "Pupilas fixas bilateralmente", "—"]
      ],
      nota: "Sepse = infecção suspeita + escore total ≥ 2. Choque séptico = sepse + ≥ 1 ponto cardiovascular. Cortes de PAM (mmHg) — 1 ponto / 2 pontos: < 1 mês 17–30 / < 17; 1–11 meses 25–38 / < 25; 1 a < 2 anos 31–43 / < 31; 2 a < 5 anos 32–44 / < 32; 5 a < 12 anos 36–48 / < 36; 12–17 anos 38–51 / < 38. Usar o pior valor nas primeiras 24 h."
    },
    {
      titulo: "Bolus de fluido conforme disponibilidade de UTI (SSC 2026)",
      colunas: ["Situação", "Com UTI disponível", "Sem UTI disponível"],
      linhas: [
        ["Choque séptico com hipotensão", "10–20 mL/kg por bolus, até 40–60 mL/kg na 1ª hora", "Até 40 mL/kg na 1ª hora, com reavaliação"],
        ["Choque sem hipotensão", "10–20 mL/kg por bolus, até 40–60 mL/kg na 1ª hora", "Não fazer bolus; hidratação de manutenção"],
        ["Sepse sem choque", "Sem bolus de rotina; manutenção", "Não fazer bolus; hidratação de manutenção"]
      ],
      nota: "Parar o fluido diante de sinais de sobrecarga. Cristaloide balanceado preferido."
    }
  ],
  fontes: [
    "Surviving Sepsis Campaign — International Guidelines for the Management of Sepsis and Septic Shock in Children 2026 (Intensive Care Medicine / Pediatric Critical Care Medicine, 2026)",
    "Schlapbach LJ, Watson RS, Sorce LR et al. — International Consensus Criteria for Pediatric Sepsis and Septic Shock (Phoenix) (JAMA, 2024)",
    "American Heart Association — 2025 Guidelines for CPR and ECC: Pediatric Advanced Life Support",
    "Instituto Latino-Americano de Sepse (ILAS) — Protocolo gerenciado de sepse pediátrica (versão vigente)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
