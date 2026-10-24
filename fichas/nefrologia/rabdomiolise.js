// Rabdomiólise
registrarFicha({
  id: "rabdomiolise",
  especialidade: "nefrologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Rabdomiólise",
  resumo: "Lesão muscular com liberação de mioglobina, potássio, fósforo e CK. Mialgia, fraqueza e urina escura (nem sempre). Diagnóstico: CK > 5 vezes o limite superior (em geral > 1.000 U/L). Principais riscos: lesão renal aguda, hipercalemia e síndrome compartimental.",
  palavrasChave: "rabdomiolise ck cpk creatinofosfoquinase mioglobinuria urina escura coca cola exercicio crossfit esmagamento imobilizacao estatina cocaina convulsao hipertermia lesao renal aguda sindrome compartimental hidratacao",
  critico: {
    tempo: "Hidratação vigorosa precoce",
    texto: "Iniciar cristaloide IV assim que suspeitar (antes da CK, se a história for típica), buscando diurese de 200–300 mL/h. Dosar K e fazer ECG na chegada."
  },
  alarmes: [
    "K ≥ 6,0 mEq/L ou ECG alterado",
    "Oligúria ou creatinina subindo",
    "Dor desproporcional, tensão muscular, parestesia ou déficit no membro (síndrome compartimental)",
    "Hipertermia, rebaixamento, convulsão (causa grave subjacente)",
    "CK muito alta (dezenas de milhares) ou subindo após 24–48 h"
  ],
  condutaInicial: [
    "Monitor, ECG, acesso calibroso",
    "CK, creatinina, K, Ca, P, ácido úrico, gasometria, urina tipo 1 (sangue na fita sem hemácias = mioglobina)",
    "SF 0,9% ou Ringer lactato 1–2 L na 1ª hora (avaliar cardiopatia/DRC), depois 200–500 mL/h para diurese 200–300 mL/h",
    "Tratar hipercalemia (ver ficha hipercalemia); não tratar hipocalcemia assintomática",
    "Suspender estatina e outras drogas implicadas; tratar a causa (hipertermia, convulsão, intoxicação, infecção)",
    "Examinar compartimentos musculares; dor desproporcional → cirurgia (pressão compartimental/fasciotomia)",
    "Sonda vesical só se necessário para medir diurese"
  ],
  fataisExcluir: [
    "Hipercalemia com arritmia",
    "Síndrome compartimental",
    "Hipertermia maligna, síndrome neuroléptica maligna, síndrome serotoninérgica, insolação",
    "Intoxicação (cocaína, anfetaminas), estado de mal epiléptico",
    "CIVD, LRA com indicação de diálise"
  ],
  proximaDecisao: "CK em queda e diurese adequada → manter hidratação até CK < 5.000 U/L (em geral 2–3 dias) e reduzir. Oligúria apesar de volume, congestão, hipercalemia ou acidose refratárias → nefrologia e diálise (ver ficha dialise-urgencia).",
  clinica: {
    anamnese: [
      "Exercício extenuante (sobretudo não habituado, calor), esmagamento, queda com longa imobilização no chão",
      "Drogas: estatina (± fibrato, macrolídeo, azol), álcool, cocaína, anfetamina, heroína, antipsicóticos",
      "Convulsões, hipertermia, choque elétrico, queimadura",
      "Infecções (influenza, COVID-19, leptospirose, sepse)",
      "Hipocalemia, hipofosfatemia, hipotireoidismo; episódios recorrentes (miopatia metabólica)"
    ],
    exameFisico: [
      "Dor, edema e tensão muscular; pulsos e sensibilidade distais",
      "Volemia, temperatura, nível de consciência",
      "Cor da urina",
      "Lesões de pressão (imobilização prolongada)"
    ],
    diferenciais: [
      { dx: "Hemólise (hemoglobinúria)", pista: "Plasma rosado, LDH e bilirrubina indireta altos, haptoglobina baixa, CK normal" },
      { dx: "Hematúria", pista: "Hemácias no sedimento" },
      { dx: "Miosite inflamatória", pista: "Fraqueza proximal subaguda, CK alta persistente" },
      { dx: "Elevação de CK após exercício sem lesão importante", pista: "Assintomático, CK modesta, função renal normal" },
      { dx: "IAM", pista: "Troponina alta, dor torácica" }
    ],
    gravidade: [
      "CK > 5× limite superior confirma; risco de LRA maior com CK > 15.000–20.000 U/L, desidratação, sepse, acidose",
      "Escore de McMahon (idade, sexo, causa, creatinina, Ca, CK, P, HCO₃) estima risco de diálise/morte: ≥ 6 = alto risco",
      "CK atinge o pico em 24–72 h"
    ]
  },
  exames: [
    {
      nome: "CK e função renal",
      pedido: "CK total, ureia, creatinina, sódio, potássio, cálcio, fósforo, ácido úrico, gasometria venosa, hemograma, TGO, LDH.",
      porQue: "Confirmar, estimar risco e detectar complicações.",
      esperar: "CK > 1.000 U/L; TGO e LDH também sobem (origem muscular).",
      interpretacao: "CK de 12/12 h a 24/24 h até queda consistente.",
      limitacoes: "CK não prevê LRA isoladamente."
    },
    {
      nome: "Urina",
      pedido: "Urina tipo 1 com sedimento; mioglobina urinária se disponível.",
      porQue: "Mioglobinúria.",
      esperar: "Fita positiva para sangue sem hemácias no sedimento.",
      interpretacao: "Sugere mioglobinúria (ou hemoglobinúria).",
      limitacoes: "Mioglobina é depurada rápido; ausência não exclui."
    },
    {
      nome: "ECG e investigação da causa",
      pedido: "ECG de 12 derivações. Conforme suspeita: TSH, toxicológico, coagulograma (CIVD), sorologias/PCR para influenza, leptospirose, troponina.",
      porQue: "Hipercalemia e causa de base.",
      esperar: "—",
      interpretacao: "Rabdomiólise recorrente ou após esforço leve → investigação de miopatia metabólica (ambulatorial).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (SF 0,9% ou Ringer lactato)",
      linha: "l1",
      dose: "1–2 L na 1ª hora; depois 200–500 mL/h (frequentemente 3–6 L/dia), ajustando para diurese de 200–300 mL/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até CK < 5.000 U/L e urina clara",
      monitorizacao: "Diurese horária, congestão, Na, K, Cl, gasometria",
      contraindicacoes: "Congestão, oligúria estabelecida sem resposta (risco de sobrecarga)",
      ajustes: "Cardiopatas, idosos e DRC: alíquotas menores com reavaliação. SF em grande volume pode causar acidose hiperclorêmica (alternar com Ringer). Esmagamento: iniciar volume ainda no local, antes da liberação"
    },
    {
      droga: "Bicarbonato de sódio",
      linha: "adj",
      dose: "Conforme protocolo local",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "pH urinário, gasometria, Ca iônico",
      contraindicacoes: "Hipocalcemia sintomática, alcalose",
      ajustes: "Sem benefício comprovado sobre só cristaloide; reservar para acidose metabólica importante ou hipercalemia"
    },
    {
      droga: "Manitol",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício comprovado; risco em oligúria",
      ajustes: "Não usar de rotina"
    },
    {
      droga: "Gluconato de cálcio 10%",
      linha: "adj",
      dose: "10–30 mL IV",
      via: "IV em 10 min",
      intervalo: "Conforme necessidade",
      duracao: "—",
      monitorizacao: "ECG",
      contraindicacoes: "Hipocalcemia assintomática (não repor: o cálcio deposita no músculo e causa hipercalcemia de rebote)",
      ajustes: "Só para hipercalemia com ECG alterado ou hipocalcemia sintomática"
    }
  ],
  destino: {
    agora: ["Volume IV, K e ECG", "Examinar compartimentos"],
    reavaliar: ["Diurese horária", "K de 4/4 h a 6/6 h nas primeiras 24 h", "CK e creatinina de 12/12 h a 24/24 h"],
    alta: ["CK em queda consistente (em geral < 5.000), creatinina normal, urinando bem, causa resolvida", "Leve por exercício (CK < 5.000–10.000, função renal normal): pode ter alta com hidratação oral e retorno em 24–48 h com CK e creatinina"],
    observacao: ["CK moderada sem LRA ou distúrbio eletrolítico: hidratação IV por 12–24 h e nova dosagem"],
    internacao: ["CK alta com LRA, hipercalemia, acidose, causa grave ou incapaz de hidratar VO"],
    transferencia: ["Síndrome compartimental sem cirurgião, indicação de diálise sem nefrologia → regulação"]
  },
  prescricao: {
    hospitalar: "RABDOMIÓLISE — ADULTO (peso ___ kg)\n1. Dieta livre, estimular ingestão de água se consciente.\n2. Monitor cardíaco se K ≥ 5,5 ou ECG alterado.\n3. Ringer lactato 1.000 mL IV em 30–60 min; repetir 1.000 mL (avaliar congestão).\n4. Depois: SF 0,9% e Ringer lactato alternados, 300 mL/h; ajustar para diurese de 200–300 mL/h.\n5. Suspender estatina, fibrato e drogas implicadas.\n6. Analgesia: dipirona 1 g IV de 6/6 h; evitar AINE.\n7. Hipercalemia: ver ficha hipercalemia. Não repor cálcio se hipocalcemia assintomática.\n8. Enoxaparina 40 mg SC 1×/dia se imobilizado e sem contraindicação (ajustar se TFG < 30).\n9. Controles: diurese horária, balanço hídrico, sinais de congestão de 4/4 h; K de 6/6 h nas primeiras 24 h; CK, creatinina, Ca, P e gasometria de 12/12 h a 24/24 h; pulsos e dor nos membros afetados de 4/4 h.",
    ambulatorial: "RABDOMIÓLISE LEVE POR EXERCÍCIO (alta)\n1. Beber 3 litros de água por dia nos próximos 3 dias (se não tiver doença do coração ou dos rins).\n2. Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor. Não usar anti-inflamatório.\n3. Repouso de exercícios intensos até liberação; retorno gradual.\nExames em 24–48 h: CK, creatinina, potássio."
  },
  orientacoesRetorno: [
    "Beber bastante água e não usar anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida)",
    "Não voltar ao treino intenso até liberação; retornar aos poucos e se hidratar, evitar calor excessivo",
    "Voltar imediatamente se a urina ficar escura de novo, urinar pouco, inchaço ou dor forte no braço/perna, fraqueza ou palpitação",
    "Fazer os exames de controle no prazo combinado"
  ],
  fontes: [
    "Bosch X, Poch E, Grau JM — Rhabdomyolysis and acute kidney injury (N Engl J Med, 2009)",
    "McMahon GM et al. — A risk prediction score for kidney failure or mortality in rhabdomyolysis (JAMA Intern Med, 2013)",
    "Michelsen J et al. — Prevention of rhabdomyolysis-induced acute kidney injury: a DASAIM/DSIT clinical practice guideline (Acta Anaesthesiol Scand, 2019)",
    "KDIGO — Clinical Practice Guideline for Acute Kidney Injury (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
