// Convulsão febril (simples e complexa)
registrarFicha({
  id: "convulsao-febril",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Convulsão febril (simples e complexa)",
  resumo: "Crise convulsiva com febre (≥ 38 °C) em criança de 6 meses a 5 anos, sem infecção do SNC, distúrbio metabólico ou crise afebril prévia. A simples é benigna e não precisa de exames nem de anticonvulsivante contínuo.",
  palavrasChave: "convulsao febril crise febril simples complexa diazepam retal midazolam intranasal bucal febre crianca estado de mal febril puncao lombar",
  critico: {
    tempo: "Crise ≥ 5 min: benzodiazepínico",
    texto: "Se ainda convulsionando há 5 min ou mais: midazolam (IN/bucal/IM) ou diazepam (IV/retal). Persistindo após 2 doses: tratar como estado de mal epiléptico (ver ficha convulsao). A maioria chega ao PS já sem crise."
  },
  alarmes: [
    "Crise com duração ≥ 15 min, focal, ou repetida em 24 h (convulsão febril complexa)",
    "Estado de mal epiléptico (crise ≥ 5 min ou sem recuperação entre crises)",
    "Sinais meníngeos, fontanela abaulada, petéquias, rebaixamento persistente após 1 h do fim da crise (meningite/encefalite)",
    "Idade < 6 meses ou > 5 anos (pensar em outra causa)",
    "Déficit neurológico focal pós-ictal persistente (paralisia de Todd prolongada, lesão estrutural)",
    "Uso de antibiótico prévio (pode mascarar meningite); vacinação incompleta para Hib e pneumococo",
    "Vômitos e desidratação, distúrbio hidroeletrolítico, suspeita de intoxicação ou trauma"
  ],
  conduta: [
    "Se em crise: posição lateral de segurança, aspirar secreções, O₂, glicemia capilar; benzodiazepínico se crise ≥ 5 min",
    "Após a crise: sinais vitais, temperatura, nível de consciência, exame neurológico e busca do foco da febre (otite, faringite, ITU, pneumonia, exantema)",
    "Classificar: SIMPLES = generalizada, < 15 min, única em 24 h, recuperação completa. COMPLEXA = focal, ≥ 15 min ou recorrente em 24 h",
    "Convulsão febril simples com criança bem e foco identificado (ou sem sinais de gravidade): não pedir EEG, neuroimagem, eletrólitos ou hemograma de rotina; investigar só a causa da febre",
    "Punção lombar: se sinais meníngeos ou suspeita clínica de meningite; considerar em 6–12 meses com vacinação incompleta para Hib/pneumococo ou em uso de antibiótico (AAP)",
    "Complexa: observação, exame neurológico seriado; exames conforme clínica; EEG e imagem eletivos se focal ou com déficit; neuroimagem urgente se déficit persistente",
    "Antitérmico para conforto (não previne recorrência)",
    "Acolher e orientar a família (medo é intenso); ensinar o que fazer em nova crise",
    "Anticonvulsivante contínuo ou intermitente não é recomendado de rotina; benzodiazepínico de resgate domiciliar só em casos selecionados (crises prolongadas prévias, longe de serviço de saúde)"
  ],
  exames: [
    "Simples, criança > 12 meses, bem, foco claro: nenhum exame de rotina",
    "Glicemia capilar se ainda sonolenta ou crise prolongada",
    "Exames da causa da febre conforme clínica (urina tipo 1 e urocultura em lactente sem foco; hemograma/PCR se toxemia)",
    "Líquor (citologia, bioquímica, Gram, cultura) se suspeita de meningite/encefalite",
    "Sódio, cálcio, glicemia se vômitos/diarreia, desidratação ou crise complexa",
    "EEG e RM de crânio: eletivos, com neuropediatria, na complexa focal ou com alteração do desenvolvimento; TC urgente só com déficit focal persistente, sinais de HIC ou trauma"
  ],
  diferenciais: [
    "Meningite ou encefalite (crise com febre + rebaixamento persistente, sinais meníngeos)",
    "Calafrio/tremor febril, delírio febril (sem perda de consciência, sem movimentos rítmicos)",
    "Síncope febril, perda de fôlego (choro → apneia → cianose/palidez)",
    "Epilepsia com crises desencadeadas pela febre (síndrome de Dravet: crises febris prolongadas e hemiclônicas antes de 1 ano; GEFS+)",
    "Distúrbio hidroeletrolítico, hipoglicemia, intoxicação, TCE"
  ],
  tratamento: [
    {
      droga: "Midazolam (crise em curso, sem acesso venoso)",
      linha: "l1",
      dose: "0,2 mg/kg intranasal ou IM (máx 10 mg); bucal 0,5 mg/kg (máx 10 mg)",
      via: "Intranasal (dividir entre as narinas, com atomizador), bucal ou IM",
      intervalo: "Pode repetir 1 vez após 5–10 min",
      duracao: "Dose de resgate",
      monitorizacao: "FR, SpO₂ (depressão respiratória)",
      contraindicacoes: "—",
      ajustes: "Na RENAME (injetável 5 mg/mL). Intranasal usa a solução injetável 5 mg/mL"
    },
    {
      droga: "Diazepam",
      linha: "l1",
      dose: "IV: 0,2–0,3 mg/kg (máx 10 mg). Retal: 0,5 mg/kg (máx 20 mg)",
      via: "IV lento (sem diluir, 1–2 mg/min) ou retal (solução injetável com seringa sem agulha ou sonda)",
      intervalo: "Pode repetir 1 vez após 5–10 min",
      duracao: "Dose de resgate",
      monitorizacao: "FR, SpO₂, PA",
      contraindicacoes: "—",
      ajustes: "Na RENAME (injetável 5 mg/mL). Não usar IM (absorção errática). Após 2 doses de benzodiazepínico sem controle: fenitoína, fenobarbital ou levetiracetam (ver ficha convulsao)"
    },
    {
      droga: "Antitérmico (dipirona ou paracetamol)",
      linha: "adj",
      dose: "Dipirona 15–25 mg/kg/dose (máx 1 g); paracetamol 10–15 mg/kg/dose (máx 75 mg/kg/dia)",
      via: "VO ou IV (dipirona)",
      intervalo: "6/6 h se febre com desconforto",
      duracao: "Enquanto febre",
      monitorizacao: "Conforto",
      contraindicacoes: "Dipirona: < 3 meses ou < 5 kg (bula), discrasias sanguíneas; via IV não deve ser usada em menores de 1 ano (de 3 a 11 meses, só IM)",
      ajustes: "Não previne recorrência (AAP); usar para conforto, não em esquema fixo"
    },
    {
      droga: "Anticonvulsivante contínuo (fenobarbital, valproato) para prevenir recorrência",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Riscos superam benefícios na convulsão febril simples",
      ajustes: "AAP 2008 e SBP: não indicado. Decisão individual com neuropediatra em casos muito selecionados"
    }
  ],
  prescricao: {
    hospitalar: "CONVULSÃO FEBRIL NO PS (peso: ___ kg)\n1. Posição lateral de segurança; aspirar vias aéreas; O₂ por máscara 10 L/min se SpO₂ < 94%; monitor e oximetria.\n2. Glicemia capilar imediata (se < 60 mg/dL: SG 10% 2–5 mL/kg IV).\n3. Se em crise há 5 min ou mais:\n   - Sem acesso venoso: midazolam 5 mg/mL ___ mg (0,2 mg/kg; máx 10 mg) intranasal, metade em cada narina (ou IM).\n   - Com acesso venoso: diazepam 5 mg/mL ___ mg (0,3 mg/kg; máx 10 mg) IV lento, sem diluir, 1–2 mg/min.\n   - Alternativa: diazepam ___ mg (0,5 mg/kg; máx 20 mg) via retal.\n   Repetir 1 vez após 5–10 min se persistir. Sem resposta após 2 doses: protocolo de estado de mal (ficha convulsao).\n4. Dipirona ___ mg (15–25 mg/kg; máx 1 g) IV diluída em SF 0,9% 10 mL, lento, se febre (IV só a partir de 1 ano; de 3 a 11 meses, IM; ou VO após recuperação).\n5. Observação por 2–6 h (até recuperação neurológica completa); reavaliar o foco da febre.",
    ambulatorial: "ALTA — CONVULSÃO FEBRIL SIMPLES (peso: ___ kg)\nUSO ORAL\n1. Paracetamol gotas 200 mg/mL ------------------ 1 frasco\n   Dar 1 gota por kg (máx 35 gotas) de 6 em 6 horas se febre com desconforto.\n   OU Dipirona gotas 500 mg/mL (> 3 meses e > 5 kg) -- 1 frasco\n   Dar ___ gotas (1 gota = 25 mg; 15 mg/kg ≈ 0,6 gota/kg) de 6 em 6 horas se febre.\n2. Tratamento do foco da febre conforme diagnóstico.\n\nSE CRISE NOVAMENTE EM CASA (orientação aos pais)\n- Manter a calma, deitar a criança de lado em local seguro, afrouxar roupas, não colocar nada na boca, não sacudir.\n- Marcar o tempo. Se durar mais de 5 minutos, se repetir ou se não acordar depois: chamar SAMU 192."
  },
  orientacoesRetorno: [
    "A convulsão febril simples não causa dano cerebral, não é epilepsia e não afeta o desenvolvimento",
    "Pode acontecer de novo em outras febres (cerca de 1 em cada 3 crianças), principalmente se a 1ª foi antes de 1 ano ou há casos na família",
    "Dar antitérmico deixa a criança mais confortável, mas não impede nova crise; não é preciso acordar a criança para dar remédio",
    "Durante a crise: deitar de lado, não pôr nada na boca, marcar o tempo; chamar SAMU 192 se passar de 5 minutos",
    "Voltar imediatamente se: nova convulsão, criança muito sonolenta ou confusa, rigidez de nuca, manchas roxas na pele, vômitos repetidos, febre que não cede",
    "Retorno na UBS em 24–48 h para reavaliação da febre; manter vacinas em dia (a convulsão febril não contraindica vacinas)"
  ],
  encaminhar: [
    "Internação/observação prolongada: convulsão febril complexa, estado de mal, suspeita de infecção do SNC, idade < 12 meses com exame duvidoso",
    "Neuropediatria (eletivo): crises complexas recorrentes, crises focais, atraso do desenvolvimento, crises afebris, suspeita de síndrome epiléptica (Dravet)"
  ],
  fontes: [
    "AAP — Febrile Seizures: Guideline for the Neurodiagnostic Evaluation of the Child With a Simple Febrile Seizure (Pediatrics, 2011) e Clinical Practice Guideline for Long-term Management (2008)",
    "SBP — Departamento Científico de Neurologia: Crise febril (documento científico vigente)",
    "NICE — Fever in under 5s: assessment and initial management (NG143, 2019, atualização 2021)",
    "American Epilepsy Society — Guideline for the treatment of convulsive status epilepticus in children and adults (2016)",
    "Ministério da Saúde — RENAME 2024 (midazolam, diazepam)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
