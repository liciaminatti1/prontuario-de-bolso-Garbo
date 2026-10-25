// Anestesiologia — referência rápida
registrarFicha({
  id: "anestesiologia",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Anestesiologia: ASA, tipos de anestesia, drogas, hipertermia maligna, via aérea difícil e Aldrete",
  resumo: "Referência curta para o médico não anestesista: classificação ASA, tipos de anestesia, doses de indutores e bloqueadores neuromusculares, contraindicações da succinilcolina, reconhecimento e tratamento da hipertermia maligna (dantroleno), preditores e plano para via aérea difícil e critérios de alta da recuperação pós-anestésica (Aldrete).",
  palavrasChave: "anestesia anestesiologia asa estado fisico anestesia geral raquianestesia peridural bloqueio sedacao propofol etomidato cetamina midazolam fentanil succinilcolina suxametonio rocuronio cisatracurio neostigmina sugamadex hipertermia maligna dantroleno via aerea dificil mallampati lemon das aldrete srpa recuperacao pos anestesica jejum pre operatorio cefaleia pos raqui nvpo apfel",
  critico: {
    tempo: "HM: parar gatilho, dantroleno",
    texto: "Hipercapnia inexplicada, taquicardia, rigidez (masseter) e febre após halogenado ou succinilcolina = hipertermia maligna. Desligar o vaporizador, O₂ 100% em alto fluxo, dantroleno 2,5 mg/kg IV já e pedir ajuda."
  },
  alarmes: [
    "EtCO₂ subindo sem explicação, taquicardia, arritmia, rigidez muscular ou do masseter após indução (hipertermia maligna)",
    "Hipercalemia ou parada cardíaca após succinilcolina em paciente de risco",
    "Não intubo, não oxigeno (CICO): cricotireoidostomia imediata",
    "Hipotensão grave e bradicardia após raquianestesia alta",
    "Agitação, convulsão ou arritmia após anestésico local (intoxicação: ver anestesia-local)",
    "Anafilaxia perioperatória (bloqueador neuromuscular, antibiótico, látex, clorexidina): ver anafilaxia",
    "Na recuperação: SpO₂ < 90% com O₂, rebaixamento, dor incontrolável, sangramento"
  ],
  conduta: [
    "Classificar o estado físico ASA (tabela) na avaliação pré-anestésica; ver avaliacao-pre-operatoria para risco cardíaco e exames",
    "Jejum (ASA 2023): líquidos claros até 2 h antes; leite materno 4 h; fórmula infantil, leite não humano e refeição leve 6 h; refeição gordurosa ou carne 8 h ou mais",
    "Agonistas de GLP-1 (semaglutida, tirzepatida): risco de estômago cheio; seguir orientação do serviço de anestesia (suspensão ou dieta líquida prévia) e tratar como estômago cheio se sintomas",
    "Escolher a técnica com a equipe: geral (venosa total, inalatória ou balanceada), regional neuroaxial (raqui ou peridural), bloqueio periférico, local com ou sem sedação",
    "Antes de qualquer sedação ou anestesia: monitor (ECG, PA, SpO₂, capnografia se sedação profunda), O₂, aspirador, material de via aérea e drogas de resgate prontos",
    "Avaliar via aérea em todos (LEMON, Mallampati); preditores de dificuldade → plano A-B-C-D e material pronto (videolaringoscópio, bougie, supraglótico, kit de cricotireoidostomia)",
    "Succinilcolina: checar contraindicações (tabela); se houver, usar rocurônio",
    "Na recuperação pós-anestésica: Aldrete modificado a cada 15 min; alta da SRPA com ≥ 9 e sem nenhum item zero; dor e náusea controladas",
    "Sedação para procedimentos no PS e intubação: ver sequencia-rapida-intubacao e sedacao-continua"
  ],
  exames: [
    "Pré-operatório conforme ficha avaliacao-pre-operatoria (não pedir exames de rotina em ASA I–II em cirurgia de baixo risco)",
    "Suspeita de hipertermia maligna: gasometria arterial, potássio, CK, mioglobina urinária, lactato, coagulograma (CIVD), temperatura central contínua",
    "Após episódio de HM: encaminhar para investigação (teste de contratura muscular / genética) do paciente e da família"
  ],
  tabelas: [
    {
      titulo: "Classificação do estado físico ASA (2020)",
      colunas: ["Classe", "Definição", "Exemplos"],
      linhas: [
        ["ASA I", "Saudável", "Não fumante, sem doença, pouco ou nenhum álcool"],
        ["ASA II", "Doença sistêmica leve", "Fumante, etilista social, gestante, obesidade (IMC 30–40), HAS ou DM bem controlados, asma leve"],
        ["ASA III", "Doença sistêmica grave", "DM ou HAS mal controlados, DPOC, IMC ≥ 40, hepatite ativa, dependência de álcool, marca-passo, FE moderadamente reduzida, DRC em diálise, IAM/AVC > 3 meses"],
        ["ASA IV", "Doença sistêmica grave, ameaça constante à vida", "IAM/AVC/stent recente (< 3 meses), isquemia ativa, disfunção valvar grave, FE muito reduzida, sepse, CIVD"],
        ["ASA V", "Moribundo; não sobrevive sem a cirurgia", "AAA roto, trauma grave, hemorragia intracraniana com efeito de massa"],
        ["ASA VI", "Morte encefálica, doador de órgãos", "—"]
      ],
      nota: "Acrescentar 'E' para cirurgia de emergência (ex.: ASA III E)."
    },
    {
      titulo: "Indutores e adjuvantes venosos (adulto, IV)",
      colunas: ["Droga", "Dose de indução", "Vantagem", "Cuidado"],
      linhas: [
        ["Propofol 10 mg/mL", "1,5–2,5 mg/kg (idoso/instável: reduzir)", "Despertar rápido, antiemético, broncodilatador leve", "Hipotensão, apneia, dor na injeção"],
        ["Etomidato 2 mg/mL", "0,2–0,3 mg/kg", "Estabilidade hemodinâmica", "Supressão adrenal transitória, mioclonias, náusea"],
        ["Cetamina 50 mg/mL", "1–2 mg/kg", "Mantém PA e reflexos de via aérea, broncodilatador, analgesia", "Hipertensão, taquicardia, sialorreia, reações ao despertar"],
        ["Midazolam 5 mg/mL", "Sedação: 0,5–2 mg titulado (idoso: 0,5–1 mg)", "Amnésia, ansiólise", "Depressão respiratória com opioide; antídoto flumazenil"],
        ["Fentanil 50 mcg/mL", "1–3 mcg/kg", "Analgesia, atenua resposta à laringoscopia", "Apneia, rigidez torácica em bolus rápido; antídoto naloxona"]
      ]
    },
    {
      titulo: "Bloqueadores neuromusculares e reversão",
      colunas: ["Droga", "Dose", "Início / duração", "Observação"],
      linhas: [
        ["Succinilcolina (despolarizante)", "1–1,5 mg/kg IV", "45–60 s / 5–10 min", "Fasciculações, hipercalemia (eleva K ~0,5 mEq/L), bradicardia, gatilho de HM"],
        ["Rocurônio", "0,6 mg/kg; sequência rápida 1–1,2 mg/kg", "60–90 s (dose alta) / 30–60 min ou mais", "Reversível com sugamadex; acumula em hepatopata"],
        ["Cisatracúrio", "0,15–0,2 mg/kg", "2–3 min / 40–60 min", "Eliminação de Hofmann: boa opção em insuficiência renal e hepática"],
        ["Neostigmina + atropina", "Neostigmina 0,04–0,05 mg/kg (máx. 5 mg) + atropina 0,015–0,02 mg/kg", "—", "Só reverte bloqueio parcial (com sinais de recuperação ao TOF)"],
        ["Sugamadex", "2 mg/kg (bloqueio moderado), 4 mg/kg (profundo), 16 mg/kg (reversão imediata do rocurônio)", "1–3 min", "Reverte rocurônio e vecurônio; reduz eficácia de anticoncepcional hormonal por 7 dias"]
      ]
    },
    {
      titulo: "Succinilcolina — não usar",
      colunas: ["Situação", "Motivo"],
      linhas: [
        ["Hipertermia maligna pessoal ou familiar", "Gatilho de HM"],
        ["Hipercalemia ou DRC com K alto/desconhecido", "Eleva o potássio"],
        ["Queimadura, esmagamento ou trauma muscular extenso após 24–72 h", "Supraregulação de receptores: hipercalemia grave"],
        ["Lesão medular, AVC, polineuropatia, Guillain-Barré, imobilização prolongada, sepse prolongada (após 24–72 h)", "Denervação: hipercalemia grave"],
        ["Distrofias musculares (Duchenne, Becker), miopatias", "Rabdomiólise, hipercalemia, parada cardíaca (sobretudo em meninos pequenos)"],
        ["Deficiência de pseudocolinesterase", "Bloqueio prolongado (horas): manter sedado e ventilado"],
        ["Cuidado: lesão ocular aberta, hipertensão intracraniana, bradicardia em criança", "Aumento de pressão intraocular/intracraniana; atropina disponível"]
      ]
    },
    {
      titulo: "Via aérea difícil",
      colunas: ["Item", "Conteúdo"],
      linhas: [
        ["Preditores (LEMON)", "Look (barba, obesidade, trauma de face), Evaluate 3-3-2 (abertura bucal ≥ 3 dedos, mento-hioide ≥ 3 dedos, hioide-tireoide ≥ 2 dedos), Mallampati III–IV, Obstrução (abscesso, tumor, edema), Neck (pescoço curto, colar cervical, mobilidade reduzida)"],
        ["Ventilação difícil com máscara", "Barba, obesidade, idade > 55 anos, apneia do sono/ronco, edentado"],
        ["Plano A", "Pré-oxigenar 3–5 min (ou 8 respirações profundas), cabeceira elevada; laringoscopia otimizada (videolaringoscópio, bougie); máximo 3 tentativas (+1 por mais experiente)"],
        ["Plano B", "Dispositivo supraglótico (máscara laríngea de 2ª geração) para oxigenar; decidir acordar, intubar pelo dispositivo ou prosseguir"],
        ["Plano C", "Ventilação com máscara facial a 2 mãos com cânula orofaríngea; bloqueio completo; acordar o paciente se possível"],
        ["Plano D (CICO)", "Cricotireoidostomia cirúrgica: bisturi lâmina 10, bougie e tubo 6,0 com cuff"]
      ],
      nota: "Paciente com via aérea difícil prevista e tempo disponível: considerar intubação acordado (fibroscopia) por anestesista."
    },
    {
      titulo: "Escore de Aldrete modificado (alta da SRPA ≥ 9)",
      colunas: ["Item", "2 pontos", "1 ponto", "0 ponto"],
      linhas: [
        ["Atividade", "Move os 4 membros ao comando", "Move 2 membros", "Não move"],
        ["Respiração", "Respira fundo e tosse", "Dispneia ou respiração limitada", "Apneia"],
        ["Circulação (PA)", "± 20% do pré-anestésico", "± 20–49%", "± ≥ 50%"],
        ["Consciência", "Totalmente acordado", "Desperta ao chamado", "Não responde"],
        ["SpO₂", "> 92% em ar ambiente", "Precisa de O₂ para > 90%", "< 90% mesmo com O₂"]
      ],
      nota: "Após raquianestesia, também avaliar regressão do bloqueio motor e sensitivo e diurese/retenção urinária antes da alta."
    }
  ],
  tratamento: [
    {
      droga: "Dantroleno (hipertermia maligna)",
      linha: "l1",
      dose: "2,5 mg/kg em bolus; repetir até controle dos sinais (em geral até 10 mg/kg; mais se necessário)",
      via: "IV rápido",
      intervalo: "Repetir a cada 5–10 min até controle; depois 1 mg/kg a cada 4–6 h",
      duracao: "Manutenção por pelo menos 24 h",
      monitorizacao: "EtCO₂, temperatura central, K, CK, gasometria, diurese, ECG",
      contraindicacoes: "Não associar bloqueador de canal de cálcio (verapamil, diltiazem): hipercalemia e colapso",
      ajustes: "Frasco de 20 mg: reconstituir com 60 mL de água destilada estéril (sem bacteriostático), agitar até clarear. 70 kg = 175 mg ≈ 9 frascos na 1ª dose — mobilizar ajuda para preparar"
    },
    {
      droga: "Medidas de suporte na HM",
      linha: "adj",
      dose: "Desligar halogenado, O₂ 100% ≥ 10 L/min, hiperventilar; resfriar (SF gelado IV, gelo em virilhas e axilas) até 38–38,5 °C",
      via: "—",
      intervalo: "Contínuo",
      duracao: "Até estabilidade",
      monitorizacao: "Temperatura, K, gasometria, diurese (meta > 2 mL/kg/h se mioglobinúria)",
      contraindicacoes: "—",
      ajustes: "Hipercalemia: gluconato de cálcio, insulina regular 10 U + glicose; bicarbonato se acidose grave; arritmias: amiodarona (evitar bloqueador de cálcio). Terminar a cirurgia o mais rápido possível com anestesia venosa"
    }
  ],
  prescricao: {
    hospitalar: "HIPERTERMIA MALIGNA — CONDUTA IMEDIATA (peso: ___ kg)\n1. Chamar ajuda e o anestesista; avisar o cirurgião para encerrar o procedimento.\n2. Desligar halogenado; não usar succinilcolina; trocar para anestesia venosa (propofol).\n3. O₂ 100% em alto fluxo (≥ 10 L/min); hiperventilar (2–3× o volume-minuto).\n4. Dantroleno 2,5 mg/kg IV rápido (frasco 20 mg + 60 mL de água destilada estéril cada; 70 kg = 175 mg ≈ 9 frascos). Repetir a cada 5–10 min até queda do EtCO₂, da taquicardia e da rigidez.\n5. Resfriar: SF 0,9% gelado IV, gelo em axilas e virilhas; parar ao atingir 38–38,5 °C.\n6. Hipercalemia: gluconato de cálcio 10% 30 mL IV em 10 min; insulina regular 10 UI + glicose 50% 50 mL IV.\n7. Sonda vesical; diurese > 2 mL/kg/h (furosemida e cristaloide se mioglobinúria).\n8. Exames: gasometria arterial, K, CK, mioglobina urinária, lactato, coagulograma, creatinina — repetir de 2/2 a 6/6 h.\n9. Após controle: dantroleno 1 mg/kg IV de 4/4 a 6/6 h por 24 h; UTI.\n10. Notificar o paciente e a família por escrito (risco genético) e encaminhar para investigação."
  },
  orientacoesRetorno: [
    "Seguir o jejum orientado pela equipe de anestesia: em geral água e líquidos claros até 2 horas antes",
    "Informar remédios para emagrecer ou diabetes do tipo semaglutida ou tirzepatida antes da cirurgia",
    "Depois da anestesia: não dirigir, não assinar documentos nem tomar decisões importantes por 24 horas; ter um acompanhante",
    "Após raquianestesia: dor de cabeça que piora em pé e melhora deitado pode ser da punção — avisar a equipe",
    "Quem teve hipertermia maligna (ou tem parente com ela) deve sempre avisar antes de qualquer anestesia"
  ],
  encaminhar: [
    "Avaliação pré-anestésica (ambulatório de anestesia): ASA III ou mais, via aérea difícil prevista, história pessoal ou familiar de complicação anestésica",
    "Centro de referência em hipertermia maligna: paciente e familiares após episódio suspeito",
    "Cefaleia pós-punção dural refratária a medidas clínicas: anestesista (tampão sanguíneo peridural)"
  ],
  fontes: [
    "American Society of Anesthesiologists — ASA Physical Status Classification System (atualização 2020)",
    "ASA — Practice Guidelines for Preoperative Fasting (2017; atualização com bebidas de carboidrato 2023) e Multisociety guidance on GLP-1 receptor agonists (2024)",
    "ASA — Practice Guidelines for Management of the Difficult Airway (2022) e Difficult Airway Society — guidelines for unanticipated difficult intubation in adults (2015)",
    "European Malignant Hyperthermia Group — guidelines for treatment of malignant hyperthermia crisis (Br J Anaesth, 2021) e MHAUS — protocolo de tratamento",
    "Aldrete JA — The post-anesthesia recovery score revisited (J Clin Anesth, 1995)",
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
