// Epilepsia: acompanhamento ambulatorial e escolha de anticonvulsivante
registrarFicha({
  id: "epilepsia",
  especialidade: "neurologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Epilepsia: acompanhamento ambulatorial e escolha do anticonvulsivante",
  resumo: "Adulto ou criança com crises epilépticas não provocadas recorrentes (ou 1 crise com alto risco de recorrência). Na UBS: confirmar o diagnóstico, classificar a crise, iniciar ou manter monoterapia, ajustar dose, orientar segurança, contracepção e gestação. Crise em curso: ver ficha convulsao.",
  palavrasChave: "epilepsia anticonvulsivante antiepileptico crise epileptica carbamazepina valproato acido valproico lamotrigina levetiracetam fenobarbital fenitoina clobazam topiramato eeg crise focal generalizada ausencia mioclonica",
  critico: {
    tempo: "Crise > 5 min: tratar como estado de mal",
    texto: "Crise que dura mais de 5 minutos ou crises repetidas sem recuperação é emergência (ver ficha convulsao). No ambulatório, o erro mais grave é valproato em menina ou mulher que pode engravidar sem plano: risco alto de malformação e de dano ao neurodesenvolvimento."
  },
  alarmes: [
    "Crise com duração > 5 min, crises em salvas ou sem recuperação da consciência entre elas",
    "Primeira crise com déficit focal, cefaleia intensa, febre, rigidez de nuca, trauma, imunossupressão ou câncer",
    "Piora súbita da frequência das crises (baixa adesão, interação, infecção, gestação, lesão nova)",
    "Exantema com lesão de mucosa ou febre após iniciar carbamazepina, fenitoína, fenobarbital ou lamotrigina (Stevens-Johnson / DRESS)",
    "Icterícia, vômitos, dor abdominal ou sonolência com valproato (hepatotoxicidade, pancreatite, hiperamonemia)",
    "Ideação suicida, depressão grave",
    "Gestação em uso de anticonvulsivante"
  ],
  condutaInicial: [
    "Confirmar que foi crise epiléptica (testemunha, vídeo de celular) e excluir síncope, crise psicogênica e causa provocada (hipoglicemia, álcool, distúrbio eletrolítico)",
    "Classificar: início focal, generalizado ou desconhecido; tipo (tônico-clônica, ausência, mioclônica, focal com perda de consciência)",
    "Pedir EEG e neuroimagem (RM preferível) na primeira avaliação; encaminhar ao neurologista para confirmar diagnóstico e síndrome",
    "Iniciar monoterapia em dose baixa e aumentar devagar até controle ou efeito adverso; escolher pelo tipo de crise, sexo, idade, comorbidades e disponibilidade no SUS",
    "Mulher ou menina em idade fértil: ácido fólico, contracepção eficaz e evitar valproato; preferir lamotrigina ou levetiracetam",
    "Orientar segurança (água, altura, direção de veículos) e entregar plano para crise prolongada"
  ],
  fataisExcluir: [
    "Crise sintomática aguda: hipoglicemia, hiponatremia, AVC, meningite/encefalite, TCE, abstinência alcoólica, eclâmpsia",
    "Síncope cardiogênica com abalos (arritmia, QT longo, cardiopatia estrutural)",
    "Tumor cerebral (crise nova em adulto, déficit focal)",
    "SUDEP (morte súbita em epilepsia): maior risco com crises tônico-clônicas noturnas e não controladas"
  ],
  proximaDecisao: "Controle com monoterapia em dose adequada → manter e revisar a cada 3–6 meses. Falha da 1ª droga por ineficácia (com adesão confirmada) → trocar por outra de 1ª linha (sobreposição e retirada lenta). Falha de 2 drogas bem escolhidas e toleradas = epilepsia farmacorresistente → neurologista/centro de epilepsia (avaliar cirurgia). Sem crises há ≥ 2 anos → discutir retirada gradual com o neurologista.",
  clinica: {
    anamnese: [
      "Descrição da crise por testemunha: início (aura, desvio de olhar, abalo de um membro), duração, mordedura lateral de língua, liberação de esfíncter, confusão pós-ictal",
      "Fatores provocadores: privação de sono, álcool, drogas, febre, medicamentos (tramadol, bupropiona, quinolonas)",
      "Primeira crise ou crises prévias, frequência atual, diário de crises",
      "Antecedentes: sofrimento perinatal, crise febril, TCE, meningite, AVC, atraso do desenvolvimento, história familiar",
      "Medicamentos, dose, adesão, efeitos adversos (sonolência, tontura, rash, alteração de humor)",
      "Mulher: desejo de gestação, método contraceptivo (interações), amamentação",
      "Comorbidades: depressão, ansiedade, TDAH, deficiência intelectual, hepatopatia, nefropatia",
      "Ocupação, se dirige, se nada ou trabalha em altura"
    ],
    exameFisico: [
      "Exame neurológico completo (déficit focal sugere lesão estrutural)",
      "Pele: manchas café com leite, angiofibromas, máculas hipocrômicas (síndromes neurocutâneas)",
      "Lesões de queda, mordedura de língua",
      "PA, ritmo cardíaco, sopros (diferencial com síncope)",
      "Criança: perímetro cefálico, desenvolvimento neuropsicomotor"
    ],
    diferenciais: [
      { dx: "Síncope convulsiva", pista: "Pródromo (calor, escurecimento visual), ficar em pé, abalos breves < 15 s, recuperação rápida, palidez" },
      { dx: "Crise não epiléptica psicogênica", pista: "Olhos fechados, movimentos assíncronos, duração longa, flutuação, choro" },
      { dx: "AIT", pista: "Sintomas negativos (perda de força), idoso com fator de risco" },
      { dx: "Enxaqueca com aura", pista: "Aura visual que progride em minutos, cefaleia em seguida" },
      { dx: "Distúrbio do sono / parassonia", pista: "Durante o sono, sem pós-ictal, história familiar" },
      { dx: "Perda de fôlego (criança)", pista: "Desencadeada por choro ou dor, cianose ou palidez antes da perda de consciência" }
    ],
    gravidade: [
      "Epilepsia (ILAE): ≥ 2 crises não provocadas com > 24 h de intervalo; ou 1 crise não provocada com risco de recorrência ≥ 60% (lesão estrutural, EEG epileptiforme, crise noturna, déficit); ou síndrome epiléptica",
      "Após uma 1ª crise isolada sem fator de risco, em geral não se inicia tratamento; decidir com o paciente e o neurologista",
      "Farmacorresistente: falha de 2 esquemas adequados e tolerados",
      "Critério do PCDT (SUS) para dispensação no Componente Especializado: inclui 2 crises com intervalo ≥ 24 h e documentação clínica; conferir formulário estadual"
    ]
  },
  exames: [
    {
      nome: "Eletroencefalograma",
      pedido: "Eletroencefalograma (EEG) de rotina, em vigília e sono, com fotoestimulação e hiperventilação. Indicação: investigação de crise epiléptica / classificação de epilepsia.",
      porQue: "Ajuda a classificar a epilepsia (focal × generalizada) e a estimar o risco de recorrência.",
      esperar: "Descargas epileptiformes focais ou generalizadas; pode ser normal.",
      interpretacao: "EEG normal NÃO exclui epilepsia; o diagnóstico é clínico. Ponta-onda 3 Hz → ausência; poliponta-onda generalizada → epilepsia mioclônica juvenil.",
      limitacoes: "Alterações inespecíficas são comuns; não tratar o EEG, tratar o paciente."
    },
    {
      nome: "Ressonância magnética de crânio",
      pedido: "Ressonância magnética de crânio com protocolo para epilepsia (sequências T1 volumétrica, T2, FLAIR coronal). Indicação: epilepsia / crise de início focal. Na indisponibilidade: tomografia de crânio com contraste.",
      porQue: "Identifica lesão estrutural (esclerose hipocampal, displasia, tumor, sequela vascular).",
      esperar: "Normal em epilepsias generalizadas genéticas.",
      interpretacao: "Lesão estrutural → encaminhar ao neurologista (e neurocirurgião se tumor).",
      limitacoes: "Dispensável em epilepsia de ausência típica ou epilepsia mioclônica juvenil típica com EEG característico."
    },
    {
      nome: "Exames laboratoriais",
      pedido: "Glicemia, sódio, cálcio, magnésio, creatinina, TGO, TGP, hemograma com plaquetas. Beta-hCG em mulheres em idade fértil. Anti-HIV e sorologia para sífilis conforme risco.",
      porQue: "Excluir causa provocada e ter linha de base antes de iniciar droga.",
      esperar: "Normais.",
      interpretacao: "Plaquetas baixas ou transaminases > 2–3× → evitar valproato. Sódio baixo → cuidado com carbamazepina/oxcarbazepina.",
      limitacoes: "Repetir hemograma, sódio e transaminases após 1–3 meses com carbamazepina ou valproato e se sintomas."
    },
    {
      nome: "Nível sérico de anticonvulsivante",
      pedido: "Dosagem sérica de ___ (fenitoína / carbamazepina / ácido valproico / fenobarbital), coleta antes da próxima dose (vale).",
      porQue: "Suspeita de toxicidade, má adesão, interação, gestação ou crises sem explicação.",
      esperar: "Faixa de referência do laboratório.",
      interpretacao: "Ajustar pela clínica: paciente controlado sem efeito adverso com nível \"baixo\" não precisa aumentar dose.",
      limitacoes: "Não fazer de rotina; não útil para levetiracetam e lamotrigina na prática."
    },
    {
      nome: "Eletrocardiograma",
      pedido: "Eletrocardiograma de 12 derivações. Indicação: evento com perda de consciência a esclarecer.",
      porQue: "Excluir causa cardíaca (QT longo, Brugada, bloqueios, pré-excitação).",
      esperar: "Normal.",
      interpretacao: "Alteração → cardiologia antes de rotular como epilepsia.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Lamotrigina (comprimidos 25, 50, 100 mg)",
      linha: "l1",
      dose: "Adulto (monoterapia): 25 mg/dia por 2 semanas → 50 mg/dia por 2 semanas → aumentar 50–100 mg a cada 1–2 semanas até manutenção de 100–200 mg/dia (máx 500 mg/dia). Com valproato: 25 mg em dias alternados por 2 semanas → 25 mg/dia por 2 semanas → manutenção 100–200 mg/dia",
      via: "Oral",
      intervalo: "1–2 vezes ao dia",
      duracao: "Contínuo",
      monitorizacao: "Exantema (sobretudo nas primeiras 8 semanas), tontura, insônia",
      contraindicacoes: "Exantema grave prévio com lamotrigina",
      ajustes: "1ª escolha em crise focal e em mulher em idade fértil. Titulação lenta reduz risco de Stevens-Johnson; se suspender > 5 meias-vidas, retitular do início. Contraceptivo com estrogênio reduz o nível (ajustar). Criança: titulação por mg/kg conforme bula e neuropediatra. Pode piorar mioclonias"
    },
    {
      droga: "Levetiracetam (comprimidos 250, 500, 750, 1.000 mg; solução 100 mg/mL)",
      linha: "l1",
      dose: "Adulto: 500 mg de 12/12 h; aumentar 500 mg por dose a cada 2 semanas (máx 1.500 mg de 12/12 h). Criança: 10 mg/kg de 12/12 h; aumentar 10 mg/kg por dose a cada 2 semanas até 30 mg/kg de 12/12 h (máx 1.500 mg por dose)",
      via: "Oral",
      intervalo: "12/12 h",
      duracao: "Contínuo",
      monitorizacao: "Irritabilidade, agressividade, depressão, ideação suicida",
      contraindicacoes: "—",
      ajustes: "1ª escolha em focal e generalizada (inclusive mioclônica) em mulher em idade fértil; poucas interações. Ajuste renal: reduzir dose se ClCr < 80 mL/min. No SUS, via Componente Especializado (critérios do PCDT)"
    },
    {
      droga: "Carbamazepina (comprimidos 200 mg; suspensão 20 mg/mL)",
      linha: "l1",
      dose: "Adulto: 100–200 mg de 12/12 h; aumentar 200 mg/dia por semana até 800–1.200 mg/dia (máx 1.600 mg/dia). Criança: iniciar 5–10 mg/kg/dia e aumentar até 10–20 mg/kg/dia (máx 35 mg/kg/dia, sem passar a dose de adulto)",
      via: "Oral",
      intervalo: "12/12 h (liberação prolongada) ou 8/8 h",
      duracao: "Contínuo",
      monitorizacao: "Hemograma, sódio e transaminases após 1–3 meses; exantema; tontura, diplopia",
      contraindicacoes: "Bloqueio AV, aplasia medular prévia, porfiria; uso de IMAO",
      ajustes: "Disponível na Farmácia Básica; opção para crise focal. Indutor enzimático: reduz eficácia de contraceptivo hormonal (preferir DIU), varfarina e outros. Ascendência asiática: pesquisar HLA-B*15:02 antes. Piora ausência e mioclonia (evitar em epilepsia generalizada)"
    },
    {
      droga: "Valproato de sódio / ácido valproico (comprimidos 250 e 500 mg; xarope/solução 50 mg/mL)",
      linha: "l1",
      dose: "Adulto e criança: iniciar 10–15 mg/kg/dia; aumentar 5–10 mg/kg/dia por semana até 20–30 mg/kg/dia (máx 60 mg/kg/dia). Adulto habitual 1.000–2.000 mg/dia",
      via: "Oral",
      intervalo: "8/8 h a 12/12 h",
      duracao: "Contínuo",
      monitorizacao: "TGO/TGP, plaquetas, amônia se sonolência; peso; tremor; queda de cabelo",
      contraindicacoes: "Gestação (salvo ausência de alternativa), hepatopatia, doença mitocondrial (POLG), distúrbio do ciclo da ureia",
      ajustes: "Mais eficaz nas epilepsias generalizadas (tônico-clônica, ausência, mioclônica) em homens e mulheres sem potencial de engravidar. EVITAR em menina e mulher em idade fértil (risco de malformação ~10% e de autismo/déficit cognitivo); se inevitável: contracepção altamente eficaz, termo de consentimento, menor dose. Homem que planeja ter filhos: discutir risco potencial (alerta EMA/MHRA 2024). Risco de hepatotoxicidade maior em < 2 anos e com politerapia"
    },
    {
      droga: "Fenobarbital (comprimidos 50 e 100 mg; gotas 40 mg/mL)",
      linha: "alt",
      dose: "Adulto: 50–100 mg à noite (1–3 mg/kg/dia; máx habitual 180 mg/dia). Criança: 3–5 mg/kg/dia (máx 180 mg/dia)",
      via: "Oral",
      intervalo: "1 vez ao dia (à noite)",
      duracao: "Contínuo",
      monitorizacao: "Sedação, alteração de comportamento e de aprendizagem em crianças",
      contraindicacoes: "Porfiria",
      ajustes: "Barato e disponível, mas com mais efeitos cognitivos; usado quando outras opções não estão acessíveis. Indutor enzimático. Retirada sempre lenta (risco de crise por abstinência)"
    },
    {
      droga: "Fenitoína (comprimidos 100 mg; suspensão 20 mg/mL)",
      linha: "alt",
      dose: "Adulto: 300 mg/dia (4–7 mg/kg/dia). Criança: 5–8 mg/kg/dia (máx 300 mg/dia)",
      via: "Oral",
      intervalo: "1–2 vezes ao dia (criança: 12/12 h)",
      duracao: "Contínuo",
      monitorizacao: "Nistagmo, ataxia (toxicidade), hiperplasia gengival, hirsutismo; nível sérico se dúvida",
      contraindicacoes: "Bloqueio AV, bradicardia sinusal",
      ajustes: "Cinética não linear: aumentos pequenos (25–50 mg) podem causar toxicidade. Indutor enzimático. Efeitos cosméticos limitam o uso prolongado em jovens"
    },
    {
      droga: "Clobazam (comprimidos 10 e 20 mg)",
      linha: "adj",
      dose: "Adulto: 5–10 mg à noite (até 20–30 mg/dia). Criança: 0,25 mg/kg/dia (até 1 mg/kg/dia; máx 40 mg/dia)",
      via: "Oral",
      intervalo: "1–2 vezes ao dia",
      duracao: "Curto (crises catameniais, períodos de risco) ou adjuvante contínuo pelo neurologista",
      monitorizacao: "Sedação, tolerância, dependência",
      contraindicacoes: "Miastenia gravis, insuficiência respiratória grave, apneia do sono",
      ajustes: "Adjuvante; não usar como monoterapia de longo prazo"
    },
    {
      droga: "Midazolam bucal/intranasal para crise prolongada em casa ou na UBS",
      linha: "l1",
      dose: "0,2–0,3 mg/kg (máx 10 mg) usando a solução injetável 5 mg/mL; adulto 10 mg",
      via: "Intranasal (dividir entre as narinas, com atomizador) ou bucal",
      intervalo: "Dose única; pode repetir 1 vez após 5–10 min se a crise continuar",
      duracao: "—",
      monitorizacao: "Respiração, SpO₂",
      contraindicacoes: "—",
      ajustes: "Para crise > 5 min. Ligar 192. Ver ficha convulsao para o restante da sequência"
    }
  ],
  destino: {
    agora: [
      "Iniciar ou ajustar monoterapia; pedir EEG, RM e laboratório",
      "Encaminhar ao neurologista (1ª crise/suspeita de epilepsia, sobretudo em criança, gestante ou com lesão)"
    ],
    reavaliar: [
      "2–4 semanas após iniciar (tolerância, exantema)",
      "A cada 3–6 meses quando estável: diário de crises, efeitos adversos, humor, adesão, plano reprodutivo"
    ],
    alta: [
      "Seguimento compartilhado UBS + neurologia; renovação de receita (controle especial) e laudo do Componente Especializado quando necessário"
    ],
    observacao: ["—"],
    internacao: [
      "Estado de mal epiléptico, crises em salvas, reação cutânea grave, hepatotoxicidade"
    ],
    transferencia: [
      "Neurologia/neuropediatria: diagnóstico incerto, falha de 1–2 drogas, criança < 2 anos, regressão do desenvolvimento, gestação ou planejamento, lesão estrutural, retirada de medicação",
      "Centro de epilepsia: farmacorresistência (avaliar cirurgia, dieta cetogênica, estimulação vagal)",
      "Pré-natal de alto risco: toda gestante com epilepsia"
    ]
  },
  prescricao: {
    ambulatorial: "RECEITA DE CONTROLE ESPECIAL (2 vias) — EXEMPLOS\n\nCRISE FOCAL — ADULTO (SUS, Farmácia Básica)\nUSO ORAL\n1. Carbamazepina 200 mg -------------------------------------- 60 comprimidos\n   Semana 1: tomar meio comprimido (100 mg) de 12 em 12 horas.\n   Semana 2: tomar 1 comprimido (200 mg) de 12 em 12 horas.\n   Depois: ajustar no retorno (dose usual 400–600 mg de 12 em 12 horas).\n\nMULHER EM IDADE FÉRTIL — CRISE FOCAL OU GENERALIZADA\n1. Lamotrigina 25 mg ----------------------------------------- 1 caixa\n   Semanas 1 e 2: tomar 1 comprimido (25 mg) 1 vez ao dia.\n   Semanas 3 e 4: tomar 2 comprimidos (50 mg) 1 vez ao dia.\n   Depois: aumentar conforme orientação até 100–200 mg/dia (dose de manutenção).\n   OU Levetiracetam 500 mg: 1 comprimido de 12 em 12 horas (ajustar a cada 2 semanas até 1.000–1.500 mg de 12 em 12 horas se necessário).\n2. Ácido fólico 5 mg --------------------------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia (uso contínuo enquanto houver possibilidade de gestação; a dose de 0,4 mg é alternativa conforme risco).\n\nEPILEPSIA GENERALIZADA — HOMEM ADULTO\n1. Valproato de sódio 500 mg ----------------------------------- 60 comprimidos\n   Semana 1: tomar 1 comprimido à noite. Semana 2: 1 comprimido de 12 em 12 horas. Ajustar no retorno (20–30 mg/kg/dia).\n\nCRIANÇA (por kg) — exemplos\n- Levetiracetam solução 100 mg/mL: 10 mg/kg/dose (0,1 mL/kg) de 12 em 12 horas; aumentar a cada 2 semanas até 30 mg/kg/dose (máx 1.500 mg/dose).\n- Carbamazepina suspensão 20 mg/mL: 5 mg/kg/dia divididos de 12/12 h (ou 8/8 h); aumentar até 10–20 mg/kg/dia (máx 35 mg/kg/dia).\n- Ácido valproico solução 50 mg/mL: 10–15 mg/kg/dia divididos de 12/12 h; aumentar até 20–30 mg/kg/dia (máx 60 mg/kg/dia).\n- Fenobarbital gotas 40 mg/mL (1 gota = 1 mg): 3–5 mg/kg/dia à noite.\n\nPLANO PARA CRISE PROLONGADA (> 5 MINUTOS)\nMidazolam 5 mg/mL (ampola) ---------------------------------- 2 ampolas + atomizador nasal\n   Aplicar 0,2 mg/kg (máx 10 mg = 2 mL) no nariz, metade em cada narina, se a crise passar de 5 minutos. Ligar 192."
  },
  orientacoesRetorno: [
    "Tome o remédio todos os dias, no mesmo horário; não pare por conta própria (parar de repente pode causar crise grave)",
    "Durma bem, evite álcool e drogas; anote as crises num diário (data, duração, o que aconteceu)",
    "Na crise: deite de lado, proteja a cabeça, não coloque nada na boca, marque o tempo. Mais de 5 minutos ou uma crise atrás da outra: ligue 192",
    "Não nade sozinho, prefira chuveiro a banheira, evite trabalho em altura ou com máquinas perigosas até controlar as crises; dirigir só conforme liberação médica e regras do DETRAN",
    "Mulheres: planeje a gravidez com o médico antes de engravidar; vários anticonvulsivantes diminuem o efeito da pílula (o DIU é uma boa opção). Não pare o remédio se engravidar: procure a UBS logo",
    "Procure atendimento imediato se aparecer manchas vermelhas na pele com febre ou feridas na boca, pele ou olhos amarelados, vômitos com dor de barriga, ou tristeza intensa e pensamentos de se machucar",
    "Retorno em 2–4 semanas após começar ou mudar a dose; depois a cada 3–6 meses"
  ],
  tabelas: [
    {
      titulo: "Escolha inicial pelo tipo de crise (monoterapia)",
      colunas: ["Tipo de crise / epilepsia", "1ª escolha", "Alternativas", "Evitar"],
      linhas: [
        ["Focal (com ou sem generalização)", "Lamotrigina ou levetiracetam", "Carbamazepina, oxcarbazepina; valproato (homem); fenobarbital se sem acesso", "—"],
        ["Generalizada tônico-clônica", "Valproato (homem, mulher sem potencial de gestação); lamotrigina ou levetiracetam (mulher em idade fértil)", "Topiramato", "Carbamazepina, fenitoína se houver mioclonia/ausência"],
        ["Ausência (criança)", "Etossuximida ou valproato (menina: ponderar)", "Lamotrigina", "Carbamazepina, fenitoína, gabapentina"],
        ["Mioclônica (ex.: EMJ)", "Valproato (homem); levetiracetam", "Topiramato, clobazam", "Carbamazepina, fenitoína, lamotrigina pode piorar"]
      ],
      nota: "No SUS: carbamazepina, fenitoína, fenobarbital e valproato na Farmácia Básica; lamotrigina, levetiracetam, topiramato e outros pelo Componente Especializado conforme PCDT."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Epilepsia (Portaria Conjunta SCTIE/SAS nº 17/2018)",
    "ILAE — Definição clínica prática de epilepsia (2014) e classificação dos tipos de crise (2017; atualização 2025)",
    "NICE — Epilepsies in children, young people and adults (NG217, 2022, com emendas)",
    "SANAD II — Marson A et al. (Lancet, 2021): lamotrigina para focal e valproato para generalizada",
    "EMA/MHRA — Valproato: medidas de segurança para mulheres (2018–2024) e alerta sobre uso em homens (2024)",
    "ILAE/AES — Diretrizes sobre epilepsia e gestação; RENAME (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
