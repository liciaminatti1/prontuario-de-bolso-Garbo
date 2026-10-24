// Desfibrilação (DEA e manual) e cardioversão elétrica sincronizada
registrarFicha({
  id: "desfibrilacao-cardioversao",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Desfibrilação e cardioversão elétrica sincronizada",
  resumo: "Choque não sincronizado na FV e TV sem pulso (DEA ou desfibrilador manual) e choque sincronizado na taquiarritmia com pulso e instabilidade: posição das pás, energias (AHA), sedação e segurança.",
  palavrasChave: "desfibrilacao desfibrilador dea dae cardioversao eletrica sincronizada choque pas eletrodos adesivos energia joules bifasico monofasico fv tv sem pulso fibrilacao atrial flutter tsv taquicardia instavel sedacao etomidato propofol rcp",
  critico: {
    tempo: "FV/TVSP: choque sem demora",
    texto: "FV ou TV sem pulso: desfibrilar o quanto antes e voltar às compressões imediatamente, sem checar pulso. Taquicardia com pulso e instabilidade: cardioversão sincronizada, com sedação se o paciente estiver consciente e não houver atraso."
  },
  alarmes: [
    "Cardioversão degenerou para FV: desligar o modo SINCRONIZADO, desfibrilar e iniciar RCP",
    "Alguém encostado no paciente ou na maca no momento do choque: abortar",
    "Oxigênio fluindo sobre o tórax no momento do choque (risco de fogo): afastar a fonte ≥ 1 m",
    "TV polimórfica (incluindo torsades) com instabilidade: não sincronizar — desfibrilar",
    "Paciente sem pulso em qualquer momento: algoritmo de PCR"
  ],
  indicacoes: [
    "Desfibrilação (não sincronizada): fibrilação ventricular e TV sem pulso; TV polimórfica instável",
    "Cardioversão sincronizada: taquiarritmia com pulso e sinais de instabilidade atribuíveis a ela (hipotensão, alteração aguda da consciência, sinais de choque, dor torácica isquêmica, insuficiência cardíaca aguda)",
    "Cardioversão eletiva de FA/flutter (estável) após anticoagulação adequada ou ETE, em ambiente preparado",
    "TV monomórfica com pulso refratária a antiarrítmico"
  ],
  contraindicacoes: [
    "Ritmo não chocável (assistolia, AESP): não chocar — RCP e adrenalina",
    "Taquicardia sinusal e ritmos automáticos (taquicardia atrial multifocal, taquicardia juncional): cardioversão não funciona",
    "Intoxicação digitálica com taquiarritmia (relativa: risco de arritmia ventricular; usar energia baixa e preparar)",
    "FA/flutter estável com mais de 48 h (ou duração desconhecida) sem anticoagulação e sem ETE: não cardioverter eletivamente (risco de AVC)",
    "Hipocalemia importante na cardioversão eletiva (corrigir antes)"
  ],
  materiais: [
    "Desfibrilador com monitor (manual ou DEA) testado e carregado; modo SINCRONIZADO identificado",
    "Pás adesivas (preferível) adulto e pediátricas; pás rígidas com gel condutor se não houver adesivas",
    "Monitor cardíaco com derivação de boa amplitude (DII) para sincronizar",
    "Oxímetro, PA não invasiva e capnografia se disponível",
    "Material de via aérea: bolsa-válvula-máscara, O₂, aspirador, cânulas, material de intubação",
    "Acesso venoso calibroso e carrinho de emergência com drogas da PCR",
    "Sedação/analgesia (cardioversão): etomidato, propofol, midazolam, fentanil; flumazenil e naloxona disponíveis",
    "Lâmina de barbear ou tricotomizador e gaze para secar o tórax"
  ],
  checagemAntes: [
    "Confirmar o ritmo no monitor e se há pulso (máximo 10 s)",
    "Cardioversão: paciente consciente informado; consentimento se não for emergência; jejum não deve atrasar cardioversão de urgência",
    "Remover adesivos de medicação (nitrato, fentanil), joias metálicas sobre o tórax; secar suor e água",
    "Marca-passo ou CDI: posicionar as pás a pelo menos 8 cm do gerador (preferir anteroposterior); interrogar o dispositivo depois",
    "Cardioversão eletiva de FA/flutter: anticoagulação ≥ 3 semanas ou ETE sem trombo; potássio e magnésio corrigidos",
    "Escolher energia e modo (sincronizado ou não) em voz alta para a equipe"
  ],
  passos: [
    { etapa: "RCP de alta qualidade (contexto da desfibrilação)", itens: [
      "Compressões de 100–120/min, 5–6 cm no adulto (1/3 do diâmetro do tórax na criança: cerca de 4 cm no lactente e 5 cm na criança), retorno completo do tórax",
      "Minimizar pausas: menos de 10 s para checar ritmo e chocar; continuar comprimindo enquanto o desfibrilador carrega",
      "Relação 30:2 no adulto; 15:2 na criança com 2 socorristas; com via aérea avançada, 1 ventilação a cada 6 s (adulto) ou a cada 2–3 s (criança) sem pausar compressões",
      "Trocar o compressor a cada 2 min; evitar hiperventilação",
      "Algoritmo completo e drogas: ver fichas pcr-adulto e pcr-pediatrica"
    ] },
    { etapa: "Posição das pás", itens: [
      "Anterolateral (padrão): uma pá à direita do esterno, abaixo da clavícula; outra no ápice, linha axilar média esquerda, no 5º–6º espaço intercostal (abaixo da mama na mulher)",
      "Anteroposterior: uma pá anterior à esquerda do esterno (precordial) e outra posterior, entre a escápula esquerda e a coluna. Preferir em lactentes/crianças pequenas quando as pás se tocariam, em portadores de marca-passo e como alternativa em FA",
      "Criança: pás pediátricas se < 10 kg ou cerca de < 1 ano (ou se as pás de adulto se tocariam); acima disso, pás de adulto. DEA em criança < 8 anos: usar atenuador pediátrico se houver; se não houver, usar o DEA comum",
      "As pás não podem se tocar nem ficar sobre gerador de marca-passo; pás rígidas: gel condutor e pressão firme (cerca de 10 kg)",
      "FV refratária a vários choques: considerar mudar o vetor (passar de anterolateral para anteroposterior), conforme AHA 2025"
    ] },
    { etapa: "Desfibrilação com DEA", itens: [
      "Ligar o DEA e seguir os comandos de voz",
      "Colar as pás no tórax nu e seco; conectar o cabo",
      "Afastar todos durante a análise; se choque indicado, conferir que ninguém toca o paciente e apertar o botão",
      "Reiniciar RCP imediatamente por 2 min, sem checar pulso, até a nova análise"
    ] },
    { etapa: "Desfibrilação manual (FV/TVSP)", itens: [
      "Confirmar FV/TVSP no monitor; modo não sincronizado (padrão do aparelho)",
      "Selecionar energia: adulto bifásico 120–200 J conforme fabricante (se desconhecida, a máxima disponível); monofásico 360 J. Criança: 2 J/kg, depois 4 J/kg, seguintes ≥ 4 J/kg (máx. 10 J/kg ou a dose de adulto)",
      "Carregar mantendo as compressões; anunciar 'vou chocar, afastem-se, oxigênio afastado'; olhar em volta (paciente, maca, ventilador)",
      "Disparar e reiniciar compressões imediatamente por 2 min",
      "Choques seguintes: mesma energia ou maior, conforme o aparelho"
    ] },
    { etapa: "Cardioversão sincronizada", itens: [
      "Monitorizar, O₂, acesso venoso, material de via aérea pronto; idealmente 2 profissionais (um para sedação/via aérea)",
      "Sedação (se consciente e sem atraso): ex.: etomidato 0,1–0,2 mg/kg IV (adulto em geral 10–15 mg) ou propofol 0,5–1 mg/kg IV em doses fracionadas (cuidado com hipotensão) ou midazolam 1–2 mg IV + fentanil 25–50 mcg IV tituladas; criança: midazolam 0,05–0,1 mg/kg IV (máx. 2 mg/dose) com fentanil 1 mcg/kg, ou cetamina 1 mg/kg",
      "Apertar SYNC e conferir a marca de sincronização sobre cada QRS (não sobre a onda T); ajustar derivação ou amplitude se não marcar",
      "Selecionar energia (tabela); carregar; anunciar e afastar todos",
      "Manter o botão de disparo pressionado até o choque sair (pode levar alguns segundos para sincronizar)",
      "Checar ritmo e pulso. Se não reverteu: aumentar a energia e reativar o SYNC (muitos aparelhos voltam para o modo não sincronizado após cada choque)"
    ] },
    { etapa: "Finalização", itens: [
      "Após retorno da circulação: ver ficha pos-pcr",
      "Após cardioversão: ECG de 12 derivações, monitorização até recuperar completamente da sedação, avaliar queimadura na pele",
      "FA/flutter: anticoagulação por pelo menos 4 semanas após a cardioversão (e depois conforme CHA₂DS₂-VA) — ver ficha fibrilacao-atrial"
    ] }
  ],
  conferirDepois: [
    "Ritmo resultante no monitor e pulso central",
    "PA, SpO₂, nível de consciência e ventilação (sedação)",
    "ECG de 12 derivações após cardioversão ou retorno da circulação",
    "Pele sob as pás (queimadura)",
    "Marca-passo/CDI: interrogar o dispositivo",
    "Eletrólitos (K, Mg) e causa da arritmia ou da PCR"
  ],
  complicacoes: [
    "FV após cardioversão (choque caiu na onda T): desfibrilar não sincronizado e iniciar RCP",
    "Assistolia ou bradicardia transitória pós-choque: RCP se sem pulso; atropina ou marca-passo transcutâneo se bradicardia sintomática",
    "Depressão respiratória/hipotensão pela sedação: ventilar com bolsa-válvula-máscara, reverter (naloxona/flumazenil) e fluidos",
    "Queimadura de pele: má aderência das pás ou gel insuficiente; tratar como queimadura superficial",
    "Embolia sistêmica após cardioversão de FA: prevenir com anticoagulação adequada",
    "Choque acidental no socorrista: protocolo de segurança; avaliação médica e ECG",
    "Disfunção de marca-passo/CDI: interrogar e chamar cardiologia"
  ],
  tabelas: [
    {
      titulo: "Energia inicial — adulto (bifásico)",
      colunas: ["Ritmo", "Modo", "Energia inicial", "Se falhar"],
      linhas: [
        ["FV / TV sem pulso", "Não sincronizado", "120–200 J conforme fabricante (desconhecida: máxima); monofásico 360 J", "Igual ou maior"],
        ["TV polimórfica instável", "Não sincronizado", "Dose de desfibrilação", "Igual ou maior"],
        ["FA instável", "Sincronizado", "Iniciar com ≥ 200 J (AHA 2025)", "Aumentar até a máxima"],
        ["Flutter atrial e TSV instáveis", "Sincronizado", "50–100 J", "Aumentar em degraus"],
        ["TV monomórfica com pulso instável", "Sincronizado", "100 J", "Aumentar em degraus"]
      ],
      nota: "Siga a recomendação do fabricante do aparelho. Energias do monofásico são maiores (FA: 200 J)."
    },
    {
      titulo: "Energia — criança",
      colunas: ["Situação", "Modo", "1º choque", "Seguintes"],
      linhas: [
        ["FV / TV sem pulso", "Não sincronizado", "2 J/kg", "4 J/kg; depois ≥ 4 J/kg, máx. 10 J/kg ou dose de adulto"],
        ["TSV ou TV com pulso, instável", "Sincronizado", "0,5–1 J/kg", "2 J/kg"]
      ],
      nota: "PALS (AHA). Arredondar para a energia disponível mais próxima no aparelho."
    }
  ],
  documentacao: "Procedimento: [desfibrilação / cardioversão elétrica sincronizada].\nRitmo antes: [ ] (ECG/monitor anexado). Pulso: [presente / ausente]. Instabilidade: [ ].\nSedação: [droga, dose, horário] / [não realizada: PCR ou emergência].\nPás: [adesivas / rígidas], posição [anterolateral / anteroposterior].\nChoques: 1º [ ] J [sinc / não sinc] às [hh:mm] → [ritmo]; 2º [ ] J às [ ] → [ ]; 3º [ ].\nRitmo final: [ ]. PA [ ], SpO₂ [ ], consciência [ ].\nIntercorrências: [queimadura, FV pós-cardioversão, depressão respiratória: descrever / nenhuma].\nECG pós-procedimento: [ ]. Anticoagulação: [ ].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "A pele do peito pode ficar vermelha ou ardendo onde ficaram as placas; use creme hidratante e evite sol no local",
    "Não dirija nem tome decisões importantes nas 24 horas após a sedação",
    "Se você tem fibrilação atrial, não pare o anticoagulante sem falar com o médico",
    "Procure atendimento imediato se tiver palpitação, desmaio, falta de ar, dor no peito, fraqueza de um lado do corpo ou dificuldade para falar"
  ],
  relacionadas: ["pcr-adulto", "pcr-pediatrica", "pos-pcr", "fibrilacao-atrial", "sequencia-rapida-intubacao", "hipercalemia"],
  fontes: [
    "AHA — Guidelines for CPR and ECC: Adult Advanced Life Support e Pediatric Advanced Life Support (2025)",
    "AHA — Highlights of the 2020 AHA Guidelines Update for CPR and ECC (energias de cardioversão)",
    "ACC/AHA/ACCP/HRS — Guideline for the Diagnosis and Management of Atrial Fibrillation (2023)",
    "SBC — Diretriz de Ressuscitação Cardiopulmonar e Cuidados Cardiovasculares de Emergência (2019)",
    "ERC — European Resuscitation Council Guidelines (2025)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
