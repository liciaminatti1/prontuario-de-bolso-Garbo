// Saúde mental na infância e adolescência: TDAH, TEA, ansiedade e depressão
registrarFicha({
  id: "saude-mental-infancia",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Saúde mental na infância e adolescência: TDAH, autismo (TEA), ansiedade e depressão",
  resumo: "Reconhecimento na UBS de TDAH, transtorno do espectro autista (rastreio M-CHAT-R/F), ansiedade e depressão em crianças e adolescentes; abordagem inicial, quando iniciar medicação e quando encaminhar (CAPSi, CER, neuropediatria, psiquiatria infantil). Risco de suicídio: ver ficha risco-suicida.",
  palavrasChave: "saude mental infantil tdah deficit de atencao hiperatividade snap-iv metilfenidato tea autismo espectro autista m-chat m-chat-r/f risperidona ansiedade crianca depressao adolescente phq-9 phq-a fluoxetina sertralina capsi caps infantil cer automutilacao bullying",
  alarmes: [
    "Ideação ou plano suicida, tentativa, automutilação (ver ficha risco-suicida; notificação compulsória de tentativa em até 24 h)",
    "Sintomas psicóticos (alucinações, delírios), mania, agitação grave",
    "Regressão do desenvolvimento ou perda da linguagem em qualquer idade",
    "Recusa alimentar com perda de peso importante (transtorno alimentar)",
    "Mudança brusca de comportamento, medo de adulto específico, comportamento sexualizado (suspeitar de violência — ver fichas violencia-interpessoal e violencia-sexual)",
    "Uso de álcool ou drogas, evasão escolar, exposição a violência"
  ],
  conduta: [
    "Ouvir a família e a criança/adolescente (adolescente também a sós, com sigilo e seus limites — ver ficha avaliacao-crianca-adolescente)",
    "Excluir causas orgânicas e contextuais: déficit auditivo/visual, apneia do sono, hipotireoidismo, anemia, epilepsia (ausências), efeitos de medicamentos, violência, luto, bullying, conflito familiar",
    "TEA: M-CHAT-R/F em toda criança de 16–30 meses (obrigatório aos 18 meses na Caderneta). Risco médio → entrevista de seguimento; positivo ou alto risco → encaminhar já para avaliação e estimulação (não aguardar diagnóstico)",
    "TDAH (≥ 4–6 anos): critérios DSM-5 (≥ 6 sintomas de desatenção e/ou hiperatividade-impulsividade; ≥ 5 a partir de 17 anos), início antes dos 12 anos, ≥ 6 meses, em ≥ 2 ambientes (pedir relato da escola — SNAP-IV para pais e professores), com prejuízo",
    "TDAH 4–5 anos: treinamento comportamental dos pais primeiro. ≥ 6 anos: intervenções psicossociais + escola; medicação por pediatra/psiquiatra/neuropediatra quando houver prejuízo persistente (metilfenidato fora do SUS — PCDT TDAH 2022 recomenda intervenções não medicamentosas)",
    "Ansiedade e depressão: psicoeducação, rotina de sono, atividade física, redução de telas, escola; psicoterapia (TCC) é 1ª linha. Rastrear depressão em adolescentes de 12–18 anos (PHQ-9 versão adolescente)",
    "ISRS (fluoxetina; sertralina na ansiedade) em quadro moderado a grave ou sem resposta à psicoterapia, idealmente com apoio de especialista; monitorar ideação suicida nas primeiras semanas",
    "Acionar a rede: escola, CRAS/CREAS, Conselho Tutelar se violação de direitos; matriciamento com eMulti/CAPSi"
  ],
  tratamento: [
    {
      droga: "Metilfenidato de liberação imediata (TDAH, ≥ 6 anos)",
      linha: "l1",
      dose: "Iniciar 5 mg 1–2×/dia (manhã e almoço); aumentar 5–10 mg/dia por semana conforme resposta; usual 0,3–1 mg/kg/dia; máx 60 mg/dia",
      via: "VO",
      intervalo: "2–3×/dia (última dose até o meio da tarde)",
      duracao: "Contínuo; reavaliar anualmente (pausas a critério do especialista)",
      monitorizacao: "Peso, estatura, PA e FC a cada consulta; sono, apetite, tiques",
      contraindicacoes: "Cardiopatia estrutural ou arritmia, glaucoma, uso de IMAO, hipertireoidismo, psicose, abuso de estimulantes",
      ajustes: "Notificação de Receita A (amarela). Liberação prolongada (Concerta, Ritalina LA) e lisdexanfetamina: alternativas fora do SUS. Investigar história de morte súbita/síncope antes de iniciar"
    },
    {
      droga: "Fluoxetina (depressão ≥ 8 anos; ansiedade)",
      linha: "l1",
      dose: "Iniciar 10 mg/dia; após 1–2 semanas, 20 mg/dia; máx 40–60 mg/dia (adolescente)",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "Manter 6–12 meses após remissão",
      monitorizacao: "Ideação suicida e ativação (inquietação, insônia) nas primeiras 4 semanas: retorno em 1–2 semanas",
      contraindicacoes: "Uso de IMAO, mania",
      ajustes: "RENAME (cápsula 20 mg; solução oral fora do SUS). Alerta de aumento de ideação suicida em < 25 anos: monitorar, mas o risco do não tratamento é maior. Sertralina 25 mg/dia (aumentar até 50–200 mg/dia) é alternativa, sobretudo na ansiedade (≥ 6 anos)"
    },
    {
      droga: "Risperidona (irritabilidade grave/agressividade no TEA, ≥ 5 anos)",
      linha: "adj",
      dose: "< 20 kg: 0,25 mg/dia; ≥ 20 kg: 0,5 mg/dia; aumentar após ≥ 4 dias e depois a cada 2 semanas conforme resposta (faixa usual 0,5–3 mg/dia)",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Reavaliar a cada 6 meses",
      monitorizacao: "Peso, IMC, circunferência abdominal, glicemia e perfil lipídico, prolactina se sintomas, sintomas extrapiramidais",
      contraindicacoes: "Não trata os sintomas centrais do autismo",
      ajustes: "Disponível no SUS pelo PCDT de comportamento agressivo no TEA (CEAF). Iniciar idealmente com especialista, associada a intervenções comportamentais"
    }
  ],
  exames: [
    "Não há exame que diagnostique TDAH, TEA, ansiedade ou depressão: o diagnóstico é clínico",
    "Conforme o caso: audiometria/PEATE (atraso de fala, suspeita de TEA), avaliação oftalmológica, hemograma, ferritina, TSH, glicemia",
    "Antes de estimulante: PA, FC, ausculta; ECG se história pessoal ou familiar de síncope, palpitação, morte súbita ou cardiopatia",
    "Antes de antipsicótico: peso, IMC, glicemia, perfil lipídico"
  ],
  diferenciais: [
    "Déficit auditivo ou visual, deficiência intelectual, transtorno de linguagem ou de aprendizagem (dislexia)",
    "Distúrbio do sono (apneia obstrutiva por hipertrofia adenoamigdaliana) causando desatenção e irritabilidade",
    "Epilepsia de ausência",
    "Reação a estresse, luto, violência, negligência, bullying",
    "Transtorno bipolar (episódios de euforia/irritabilidade com menos sono), uso de substâncias",
    "Hipotireoidismo, anemia, efeito de medicamentos (anti-histamínicos, corticoide, anticonvulsivantes)"
  ],
  encaminhar: [
    "CAPSi (CAPS infantojuvenil): sofrimento psíquico grave e persistente — risco suicida, psicose, autismo com grande prejuízo, depressão grave, uso de drogas; onde não houver CAPSi, CAPS I/II ou ambulatório de saúde mental",
    "CER/reabilitação, fonoaudiologia, terapia ocupacional: suspeita ou diagnóstico de TEA (intervenção precoce), atrasos",
    "Neuropediatria ou psiquiatria infantil: dúvida diagnóstica, TDAH com comorbidades ou sem resposta, indicação de medicação que a equipe não maneja",
    "Psicologia (eMulti/NASF, ambulatório): ansiedade e depressão leve a moderada, TDAH (orientação parental), problemas de comportamento",
    "PS: risco suicida alto, agitação grave, psicose aguda"
  ],
  tabelas: [
    {
      titulo: "M-CHAT-R/F (16–30 meses) — interpretação",
      colunas: ["Pontuação", "Risco", "Conduta"],
      linhas: [
        ["0–2", "Baixo", "Repetir aos 24 meses se < 24 meses na 1ª aplicação; seguir puericultura"],
        ["3–7", "Médio", "Aplicar a entrevista de seguimento (Follow-up). Seguimento ≥ 2 → positivo: encaminhar"],
        ["8–20", "Alto", "Encaminhar imediatamente para avaliação diagnóstica e intervenção precoce (sem precisar do seguimento)"]
      ],
      nota: "Questionário de 20 perguntas aos pais, disponível na Caderneta da Criança. Sinais sugestivos de TEA em qualquer idade: pouco contato visual, não atende pelo nome, não aponta para mostrar, não brinca de faz de conta, ecolalia, interesses restritos, movimentos repetitivos, hipersensibilidade sensorial."
    },
    {
      titulo: "Sintomas por quadro (resumo DSM-5-TR)",
      colunas: ["Quadro", "Pistas na criança/adolescente"],
      linhas: [
        ["TDAH — desatenção", "Erros por descuido, não sustenta atenção, parece não ouvir, não termina tarefas, desorganizado, evita esforço mental, perde objetos, distrai-se fácil, esquecido"],
        ["TDAH — hiperatividade/impulsividade", "Mexe mãos e pés, levanta quando deveria ficar sentado, corre/escala, barulhento, \"a todo vapor\", fala demais, responde antes da pergunta, não espera a vez, interrompe"],
        ["Ansiedade", "Preocupação excessiva, medo de separação, recusa escolar, queixas somáticas (dor abdominal, cefaleia), insônia, evitação social"],
        ["Depressão", "Irritabilidade (mais que tristeza), perda de interesse, queda do rendimento escolar, isolamento, alteração de sono e apetite, falta de energia, culpa, ideação de morte"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "TDAH (≥ 6 anos; peso: ___ kg) — RECEITA EM NOTIFICAÇÃO A (AMARELA)\nUSO ORAL\n1. Metilfenidato 10 mg ----------------------------- ___ comprimidos\n   Tomar 1/2 comprimido (5 mg) pela manhã, antes da escola. Após 1 semana, se tolerar: 1/2 comprimido pela manhã e 1/2 no almoço. Não tomar após as 16 h.\n\nDEPRESSÃO / ANSIEDADE (adolescente) — RECEITA DE CONTROLE ESPECIAL (2 vias)\nUSO ORAL\n1. Fluoxetina 20 mg ------------------------------- 30 cápsulas\n   Tomar 1 cápsula pela manhã. (Criança menor: iniciar 10 mg/dia — abrir e dividir ou usar solução oral.)\n   Retorno em 2 semanas.\n\nENCAMINHAMENTO\nEncaminho ________, ___ anos, ao [CAPSi / CER / neuropediatria / psiquiatria infantil / psicologia] por suspeita de [TEA (M-CHAT-R/F = ___) / TDAH / depressão / ansiedade]. Resumo: ________. Risco suicida: ( ) ausente ( ) presente. Medicações em uso: ________."
  },
  orientacoesRetorno: [
    "Rotina previsível ajuda: horários de sono, refeições e estudo; menos telas, principalmente à noite",
    "Elogiar comportamentos positivos logo que acontecem; regras claras e curtas; evitar castigos físicos e gritos",
    "Conversar com a escola: adaptações em sala (sentar na frente, tarefas em partes, tempo extra) são direitos garantidos",
    "No autismo, a estimulação precoce faz diferença: iniciar as terapias assim que houver suspeita",
    "Voltar imediatamente ou procurar o PS se a criança ou o adolescente falar em se matar, se machucar de propósito, ver ou ouvir coisas que não existem, ou ficar muito agitado ou agressivo. CVV: ligue 188 (24 h, gratuito)",
    "Retorno em 2 a 4 semanas após iniciar medicação e depois conforme o plano"
  ],
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas do Transtorno do Déficit de Atenção com Hiperatividade (Portaria SAES/SECTICS, 2022)",
    "Ministério da Saúde — PCDT do Comportamento Agressivo no Transtorno do Espectro do Autismo (2022) e Linha de Cuidado para a Atenção às Pessoas com TEA (2015/2023)",
    "Ministério da Saúde — Caderneta da Criança, 6ª ed. (2024): M-CHAT-R/F; Lei 13.438/2017",
    "SBP — Manual de Orientação: Transtorno do Espectro do Autismo (2019)",
    "AAP — Clinical Practice Guideline for ADHD (2019); Hyman et al. Identification, Evaluation and Management of Children With ASD (2020)",
    "AACAP — Clinical Practice Guideline for Anxiety Disorders (2020); GLAD-PC — Guidelines for Adolescent Depression in Primary Care (2018)",
    "USPSTF — Screening for Depression and Suicide Risk in Children and Adolescents (2022); APA — DSM-5-TR (2022)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
