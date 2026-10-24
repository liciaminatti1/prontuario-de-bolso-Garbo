// Anestesia local infiltrativa, bloqueio digital e toxicidade sistêmica por anestésico local
registrarFicha({
  id: "anestesia-local",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Anestesia local, bloqueio digital e intoxicação por anestésico local",
  resumo: "Infiltração local com lidocaína (com e sem vasoconstritor) e bloqueio digital para suturas e pequenos procedimentos, com doses máximas por peso e manejo da toxicidade sistêmica (LAST) com emulsão lipídica 20%.",
  palavrasChave: "anestesia local lidocaina xilocaina com vasoconstritor adrenalina epinefrina bupivacaina dose maxima mg/kg bloqueio digital bloqueio em anel infiltracao toxicidade anestesico local last emulsao lipidica 20 lipidico intralipid convulsao arritmia",
  critico: {
    tempo: "Calcule a dose máxima antes",
    texto: "Calcule a dose máxima em mg e em mL antes de aspirar. Aspire antes de injetar e injete devagar. Gosto metálico, zumbido ou dormência na boca durante a injeção: pare — pode ser início de toxicidade."
  },
  alarmes: [
    "Gosto metálico, dormência perioral, zumbido, tontura, agitação, fala arrastada: parar a injeção (pródromo de toxicidade)",
    "Convulsão, rebaixamento da consciência, bradicardia, alargamento de QRS, arritmia ventricular ou PCR após anestésico local: protocolo de LAST com emulsão lipídica",
    "Palidez ou cianose persistente do dedo após bloqueio: avaliar isquemia",
    "Urticária, broncoespasmo, hipotensão: alergia (rara com amidas) — tratar como anafilaxia"
  ],
  indicacoes: [
    "Sutura de ferimentos, drenagem de abscesso, retirada de corpo estranho, biópsia, cantoplastia e outros pequenos procedimentos",
    "Bloqueio digital: ferimentos, unha encravada, paroníquia, redução de luxação de dedo",
    "Analgesia de procedimentos invasivos (acesso central, drenagem torácica, punção lombar)"
  ],
  contraindicacoes: [
    "Alergia comprovada ao anestésico (rara com lidocaína; muitas vezes é reação ao conservante ou vasovagal) — usar anestésico de outro grupo ou sem conservante",
    "Infecção no local da punção (relativa: preferir bloqueio regional proximal)",
    "Vasoconstritor: evitar em doença arterial periférica grave, fenômeno de Raynaud, esclerodermia, ponta de nariz, pênis e orelha com perfusão ruim; cuidado em coronariopata, hipertensão grave, feocromocitoma e uso de IMAO/tricíclico",
    "Bloqueio digital com vasoconstritor: hoje considerado seguro em pacientes saudáveis, mas evitar em vasculopatia e circulação digital comprometida",
    "Paciente que não colabora (criança agitada): considerar sedação ou outra estratégia"
  ],
  materiais: [
    "Lidocaína 1% ou 2% sem vasoconstritor (frasco 20 mL) e/ou lidocaína 1% ou 2% com epinefrina 1:200.000",
    "Seringas de 5 e 10 mL; agulha 40 × 12 para aspirar; agulha fina para infiltrar (13 × 4,5 ou 25 × 6; 27–30 G se disponível)",
    "Antisséptico (clorexidina alcoólica ou aquosa, PVPI), gazes, luvas",
    "Opcional: bicarbonato de sódio 8,4% para tamponar (1 mL para cada 10 mL de lidocaína) — reduz a dor da injeção; preparar na hora",
    "Monitor, oxímetro e carrinho de emergência ao alcance quando usar volumes grandes",
    "Emulsão lipídica 20% disponível no serviço (kit de LAST)"
  ],
  checagemAntes: [
    "Peso do paciente (estimado na criança) e cálculo da dose máxima em mg e mL (tabela)",
    "Alergias e reação prévia a anestésico local (diferenciar de reação vasovagal)",
    "Doença cardíaca, hepática grave (metabolismo reduzido), gestação, idoso frágil: reduzir dose",
    "Outros anestésicos locais já usados no mesmo atendimento (as doses se somam)",
    "Conferir rótulo: concentração (1% = 10 mg/mL; 2% = 20 mg/mL) e se tem vasoconstritor",
    "Exame neurovascular antes do bloqueio (sensibilidade e perfusão do território)"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Higienizar as mãos, explicar ao paciente (vai arder por alguns segundos)",
      "Aspirar a dose calculada; anotar volume máximo",
      "Reduzir a dor: agulha fina, solução em temperatura ambiente, tamponar com bicarbonato, injetar devagar, distrair a criança"
    ] },
    { etapa: "Infiltração local (ferida)", itens: [
      "Antissepsia da pele ao redor",
      "Introduzir a agulha pela borda da ferida aberta (dentro da ferida dói menos que pela pele íntegra), no subcutâneo",
      "Aspirar antes de injetar (sem sangue); injetar devagar enquanto recua a agulha",
      "Reintroduzir a agulha em área já anestesiada para avançar ao longo da borda",
      "Aguardar 2–5 min (lidocaína) e testar com a ponta da agulha antes de começar"
    ] },
    { etapa: "Bloqueio digital (dedo da mão ou do pé)", itens: [
      "Sem vasoconstritor como padrão; volume total em geral até 2–3 mL por lado no adulto (menos na criança), sem garrote",
      "Técnica dorsal (2 punções): agulha no dorso da base da falange proximal, de um lado; injetar 0,5–1 mL no dorso e avançar em direção à face palmar sem atravessar a pele, injetando mais 1 mL; repetir do outro lado",
      "Técnica transtecal (palmar, dedos da mão): agulha na prega palmar da base do dedo, até a bainha do tendão flexor; injetar 2–3 mL; massagear",
      "Bloqueio em anel completo: evitar volumes grandes circunferenciais (risco de compressão vascular)",
      "Aguardar 5–10 min; testar sensibilidade na ponta do dedo"
    ] },
    { etapa: "Finalização", itens: [
      "Observar o paciente durante e após a injeção (consciência, queixas, FC)",
      "Registrar droga, concentração, volume e dose total em mg",
      "Orientar que a dormência dura cerca de 1–2 h (lidocaína) ou mais com vasoconstritor"
    ] },
    { etapa: "Se toxicidade sistêmica (LAST)", itens: [
      "Parar a injeção, pedir ajuda e o kit de emulsão lipídica; monitorizar",
      "Via aérea: O₂ 100%, ventilar se necessário; evitar hipoxemia e acidose (pioram a toxicidade)",
      "Convulsão: benzodiazepínico (midazolam 0,05–0,1 mg/kg IV ou diazepam 0,1–0,2 mg/kg IV); evitar propofol se houver instabilidade hemodinâmica",
      "Emulsão lipídica 20% (doses ASRA na tabela) assim que houver sinais graves (convulsão, arritmia, instabilidade) — não esperar a PCR",
      "PCR: RCP com adrenalina em doses menores (≤ 1 mcg/kg por dose); evitar vasopressina, bloqueadores de canal de cálcio, betabloqueadores e outros anestésicos locais (lidocaína, procainamida). Para arritmia, amiodarona",
      "PCR refratária: RCP prolongada (pode exigir mais de 1 h) e considerar circulação extracorpórea se disponível",
      "Monitorizar por pelo menos 2 h após convulsão isolada e 4–6 h após instabilidade cardiovascular"
    ] }
  ],
  conferirDepois: [
    "Efeito anestésico adequado antes de iniciar o procedimento",
    "Dose total em mg registrada (somar todas as aplicações)",
    "Nível de consciência, FC e queixas neurológicas nos minutos seguintes",
    "Perfusão do dedo após bloqueio digital (enchimento capilar e cor)",
    "Ausência de hematoma ou sangramento no local da punção"
  ],
  complicacoes: [
    "Toxicidade sistêmica (LAST): ver passos e tabela da emulsão lipídica",
    "Reação vasovagal (palidez, sudorese, bradicardia, síncope): deitar, elevar membros inferiores; é a reação mais comum",
    "Reação alérgica (rara): anti-histamínico; anafilaxia: adrenalina IM (ver ficha anafilaxia)",
    "Injeção intravascular acidental: sintomas imediatos — parar e tratar como LAST",
    "Isquemia digital (raro, sobretudo com vasoconstritor em vasculopata ou volume excessivo): aquecer, massagear; fentolamina subcutânea local é opção descrita para reverter epinefrina — chamar cirurgia",
    "Metemoglobinemia (prilocaína, benzocaína tópica): cianose com SpO₂ baixa que não melhora com O₂; azul de metileno (ver antídotos)",
    "Lesão nervosa por injeção intraneural: dor intensa na injeção — reposicionar a agulha"
  ],
  tabelas: [
    {
      titulo: "Doses máximas de anestésico local (infiltração)",
      colunas: ["Droga", "Dose máxima", "Volume máximo — 70 kg", "Volume máximo — criança 20 kg", "Duração aproximada"],
      linhas: [
        ["Lidocaína sem vasoconstritor", "4,5 mg/kg (máx. 300 mg)", "1%: 30 mL · 2%: 15 mL", "1%: 9 mL · 2%: 4,5 mL", "1–2 h"],
        ["Lidocaína com epinefrina", "7 mg/kg (máx. 500 mg)", "1%: 49 mL · 2%: 24,5 mL", "1%: 14 mL · 2%: 7 mL", "2–6 h"],
        ["Bupivacaína 0,5% sem vasoconstritor", "2,5 mg/kg (máx. 175 mg)", "35 mL", "10 mL", "4–8 h"],
        ["Bupivacaína 0,5% com epinefrina", "3 mg/kg (máx. 225 mg)", "42 mL", "12 mL", "8–12 h"]
      ],
      nota: "1% = 10 mg/mL; 2% = 20 mg/mL; 0,5% = 5 mg/mL. Valores de referência compilados de bulas e literatura de anestesia; há variação entre fontes. Usar a menor dose eficaz e reduzir em idosos, cardiopatas, hepatopatas e gestantes. Doses de anestésicos diferentes se somam. Bupivacaína tem maior cardiotoxicidade: evitar em volume grande no PS."
    },
    {
      titulo: "Emulsão lipídica 20% na toxicidade por anestésico local (ASRA)",
      colunas: ["Peso", "Bolus", "Infusão", "Se persistir instável"],
      linhas: [
        ["> 70 kg", "100 mL IV em 2–3 min", "200–250 mL IV em 15–20 min", "Repetir bolus 1–2 vezes e dobrar a infusão"],
        ["≤ 70 kg (inclui crianças)", "1,5 mL/kg IV em 2–3 min (peso ideal)", "0,25 mL/kg/min IV (peso ideal)", "Repetir bolus 1–2 vezes e dobrar a infusão para 0,5 mL/kg/min"]
      ],
      nota: "ASRA Checklist for Treatment of Local Anesthetic Systemic Toxicity (2020). Continuar a infusão por pelo menos 10 min após estabilidade. Limite superior de cerca de 12 mL/kg de emulsão. Não substitui a RCP."
    }
  ],
  documentacao: "Procedimento: anestesia local [infiltrativa / bloqueio digital do [ ] dedo [mão/pé] [D/E]].\nPeso: [ ] kg. Dose máxima calculada: [ ] mg.\nDroga: lidocaína [1% / 2%] [sem / com] vasoconstritor, volume [ ] mL = [ ] mg [tamponada com bicarbonato: sim/não].\nAspiração negativa antes da injeção. Efeito anestésico adequado após [ ] min.\nIntercorrências: [nenhuma / sintomas de toxicidade / vasovagal: descrever conduta].\nPerfusão distal após bloqueio: [preservada].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "O local ficará dormente por algumas horas; cuidado para não se queimar, se morder ou se machucar sem perceber",
    "Não coma alimentos quentes enquanto a boca ou os lábios estiverem dormentes",
    "Depois que a dormência passar, use o analgésico receitado se tiver dor",
    "Procure atendimento se o dedo ficar branco, roxo ou frio, se a dormência durar mais de 1 dia, ou se tiver falta de ar, coceira no corpo ou inchaço no rosto"
  ],
  relacionadas: ["sutura", "drenagem-abscesso", "anafilaxia", "antidotos", "convulsao", "pcr-adulto"],
  fontes: [
    "ASRA — Checklist for Treatment of Local Anesthetic Systemic Toxicity (2020) e Neal JM et al., ASRA Practice Advisory on LAST, Reg Anesth Pain Med (2018)",
    "Bulas ANVISA de cloridrato de lidocaína e de bupivacaína (doses máximas)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011)",
    "Ilicki J — Safety of epinephrine in digital nerve blocks: a literature review. J Emerg Med (2015)",
    "Associação de Anestesiologistas da Grã-Bretanha (AAGBI) — Management of severe local anaesthetic toxicity (2010)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
