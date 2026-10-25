// Valvulopatias
registrarFicha({
  id: "valvulopatias",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Valvulopatias: estenose e insuficiência aórtica e mitral, prolapso",
  resumo: "Sopro cardíaco no adulto: quando pedir ecocardiograma, como classificar a gravidade das principais valvulopatias, seguimento na APS e quando encaminhar para cirurgia, valvuloplastia ou TAVI.",
  palavrasChave: "valvulopatia sopro estenose aortica insuficiencia aortica estenose mitral insuficiencia mitral prolapso valva mitral febre reumatica tavi tavr troca valvar protese mecanica biologica valvuloplastia balao ecocardiograma gradiente area valvar",
  critico: {
    tempo: "Estenose aórtica com sintoma: urgente",
    texto: "Estenose aórtica grave com angina, síncope ou dispneia tem alta mortalidade sem intervenção: encaminhar com prioridade. Evitar vasodilatador potente e hipovolemia."
  },
  alarmes: [
    "Síncope ao esforço, angina ou dispneia com sopro sistólico ejetivo (estenose aórtica grave)",
    "Edema agudo de pulmão, sobretudo com FA nova ou gestação (estenose mitral)",
    "Febre com sopro novo ou prótese valvar (endocardite — ver ficha endocardite)",
    "Dor torácica dilacerante com sopro diastólico novo (dissecção de aorta — ver sindrome-aortica-aguda)",
    "Prótese mecânica com INR fora da faixa, AVC ou embolia (trombose de prótese)",
    "Insuficiência cardíaca descompensada"
  ],
  conduta: [
    "Sopro diastólico, sopro contínuo, sopro sistólico ≥ 3/6, sopro com sintomas, B2 hiperfonética ou ECG/RX alterados → ecocardiograma transtorácico",
    "Anamnese: dispneia, angina, síncope, palpitações, febre reumática prévia, uso de drogas injetáveis, radioterapia torácica",
    "Classificar no eco: estágio (leve, moderada, grave), FEVE, diâmetros do VE, pressão sistólica de artéria pulmonar, ritmo",
    "Grave e sintomática → encaminhar para cardiologia com prioridade (avaliação de cirurgia, TAVI ou valvuloplastia por Heart Team)",
    "Grave assintomática → cardiologia: intervenção se disfunção de VE, dilatação, FA, hipertensão pulmonar ou critérios de risco (tabela)",
    "Leve/moderada → seguimento clínico e eco periódico (tabela); ensinar sintomas de alerta",
    "Tratar HAS, FA e IC conforme fichas próprias; na estenose aórtica, ajustar anti-hipertensivo com cuidado (evitar hipotensão)",
    "Valvopatia reumática: profilaxia secundária com penicilina benzatina (ver febre-reumatica)",
    "Saúde bucal: avaliação odontológica regular; profilaxia de endocardite só para alto risco (prótese, endocardite prévia, cardiopatia congênita cianótica) — ver endocardite",
    "Estenose mitral moderada/grave com FA ou prótese mecânica: anticoagular com varfarina; anticoagulantes diretos (DOAC) NÃO são indicados nessas situações",
    "Prolapso de valva mitral sem insuficiência significativa: tranquilizar; eco a cada 3–5 anos ou se surgir sintoma ou mudança do sopro",
    "Mulher em idade fértil com valvopatia significativa ou prótese: planejamento reprodutivo e encaminhamento antes de engravidar (varfarina é teratogênica)"
  ],
  exames: [
    "Ecocardiograma transtorácico (pedido: 'Ecocardiograma transtorácico com Doppler. Indicação: sopro ___ em foco ___, grau ___/6; sintomas: ___')",
    "ECG (sobrecargas, FA, BAV) e RX de tórax (cardiomegalia, congestão, calcificação)",
    "Hemograma, creatinina, TSH se FA; BNP/NT-proBNP pode ajudar a estratificar estenose aórtica assintomática",
    "Teste ergométrico em estenose aórtica grave aparentemente assintomática: só sob orientação do cardiologista (revela sintomas ocultos)",
    "Eco transesofágico, TC cardíaca, cateterismo: na avaliação pré-intervenção pelo especialista"
  ],
  diferenciais: [
    "Sopro inocente / funcional (anemia, gestação, febre, tireotoxicose): sistólico suave, sem sintomas, eco normal",
    "Cardiomiopatia hipertrófica obstrutiva: sopro aumenta com Valsalva e ao levantar",
    "Comunicação interventricular e interatrial",
    "Insuficiência mitral secundária (funcional) por IC/miocardiopatia ou chagas: tratar a IC",
    "Esclerose aórtica sem estenose (idoso, gradiente baixo)"
  ],
  tratamento: [
    {
      droga: "Furosemida (congestão)",
      linha: "l1",
      dose: "20–40 mg/dia, ajustar pela volemia",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Enquanto houver congestão, até a intervenção",
      monitorizacao: "Peso, K, creatinina, PA",
      contraindicacoes: "Hipovolemia",
      ajustes: "Na estenose aórtica grave, diurese excessiva reduz o débito: doses baixas e reavaliação frequente"
    },
    {
      droga: "Betabloqueador (estenose mitral)",
      linha: "l1",
      dose: "Ex.: atenolol 25–100 mg/dia ou metoprolol succinato 25–200 mg/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "FC (prolonga a diástole e reduz gradiente)",
      contraindicacoes: "Bradicardia, BAV avançado, asma grave",
      ajustes: "Útil também no controle de FC da FA"
    },
    {
      droga: "Varfarina (EM moderada/grave com FA ou prótese mecânica)",
      linha: "l1",
      dose: "Iniciar 5 mg/dia (2,5 mg em idoso/baixo peso) e ajustar pelo INR",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "INR alvo 2,0–3,0 (EM com FA); prótese mecânica: alvo pelo tipo e posição da prótese (em geral 2,5–3,5 na mitral) — conferir com cardiologista",
      contraindicacoes: "Gestação (1º trimestre; especialista), sangramento ativo",
      ajustes: "Ver ficha anticoagulacao-oral para interações e manejo de INR alto"
    },
    {
      droga: "DOAC (rivaroxabana, apixabana, dabigatrana) com prótese mecânica ou EM moderada/grave",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Maior risco de trombose e AVC nesses grupos",
      ajustes: "Em outras valvopatias (ex.: estenose aórtica, insuficiência mitral, bioprótese após 3 meses) com FA, DOAC é aceito"
    },
    {
      droga: "Vasodilatadores potentes / nitratos em estenose aórtica grave",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Risco de hipotensão grave e síncope",
      ajustes: "HAS coexistente deve ser tratada, com titulação lenta"
    }
  ],
  tabelas: [
    {
      titulo: "Critérios de gravidade no ecocardiograma (valvulopatia grave)",
      colunas: ["Valvulopatia", "Grave", "Causa mais comum"],
      linhas: [
        ["Estenose aórtica", "Vmáx ≥ 4 m/s, gradiente médio ≥ 40 mmHg, área ≤ 1,0 cm² (≤ 0,6 cm²/m²)", "Degenerativa calcífica (idoso), bicúspide, reumática"],
        ["Insuficiência aórtica", "Vena contracta > 6 mm, fluxo reverso holodiastólico na aorta abdominal, VE dilatado", "Bicúspide, dilatação de aorta, reumática, endocardite"],
        ["Estenose mitral", "Área ≤ 1,5 cm² (muito grave ≤ 1,0 cm²)", "Reumática (no Brasil, quase sempre)"],
        ["Insuficiência mitral primária", "Vena contracta ≥ 7 mm, ERO ≥ 40 mm², volume regurgitante ≥ 60 mL", "Prolapso/degenerativa, reumática, endocardite"]
      ],
      nota: "Laudo de eco com graduação discordante ou baixo fluxo (estenose aórtica com baixo gradiente) → cardiologista."
    },
    {
      titulo: "Quando indicar intervenção (encaminhar ao Heart Team)",
      colunas: ["Valvulopatia grave", "Indicação", "Opções"],
      linhas: [
        ["Estenose aórtica", "Sintomas; ou assintomática com FEVE < 50%, teste de esforço anormal, ou baixo risco (intervenção precoce pode ser considerada)", "TAVI (preferida ≥ 70 anos com valva tricúspide e acesso femoral, ESC/EACTS 2025) ou troca cirúrgica (jovem, bicúspide, outra cirurgia cardíaca)"],
        ["Insuficiência aórtica", "Sintomas; ou FEVE ≤ 50% ou DSVE > 50 mm (> 25 mm/m²)", "Troca valvar cirúrgica (reparo em centros experientes)"],
        ["Estenose mitral", "Sintomas (área ≤ 1,5 cm²); assintomática com alto risco embólico ou hemodinâmico", "Valvuloplastia mitral por balão se anatomia favorável; senão cirurgia"],
        ["Insuficiência mitral primária", "Sintomas; ou FEVE ≤ 60%, DSVE ≥ 40 mm, FA nova ou PSAP > 50 mmHg", "Plástica mitral (preferida) ou troca; reparo percutâneo borda a borda se alto risco cirúrgico"]
      ],
      nota: "Critérios das diretrizes ESC/EACTS 2021/2025 e ACC/AHA 2020; detalhes e limiares podem variar entre elas. A decisão final é do Heart Team."
    },
    {
      titulo: "Seguimento com ecocardiograma (assintomático, FEVE normal)",
      colunas: ["Gravidade", "Estenose aórtica", "Demais valvulopatias"],
      linhas: [
        ["Leve", "A cada 3–5 anos", "A cada 3–5 anos"],
        ["Moderada", "A cada 1–2 anos", "A cada 1–2 anos"],
        ["Grave", "A cada 6–12 meses (com cardiologia)", "A cada 6–12 meses (com cardiologia)"]
      ],
      nota: "Repetir antes se surgir sintoma, mudança do sopro, FA ou gestação."
    }
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — SOPRO / VALVULOPATIA\n- Ecocardiograma transtorácico com Doppler. Indicação: sopro ___ (sistólico/diastólico) em foco ___, grau ___/6; sintomas: ___. Pergunta: valvulopatia? Gravidade? FEVE?\n- Eletrocardiograma de repouso.\n- Radiografia de tórax PA e perfil.\n- Hemograma, creatinina, sódio, potássio.\n\nCONGESTÃO LEVE AGUARDANDO INTERVENÇÃO (USO ORAL)\n1. Furosemida 40 mg -------------------------------- 30 comprimidos\n   Tomar 1/2 a 1 comprimido pela manhã (ajustar conforme peso e inchaço).\n\nESTENOSE MITRAL COM FA (USO ORAL)\n2. Varfarina 5 mg ---------------------------------- 30 comprimidos\n   Tomar conforme a tabela de INR entregue (alvo INR 2,0–3,0). Controle de INR em ___ dias."
  },
  orientacoesRetorno: [
    "Procurar atendimento imediato se desmaio, dor no peito, falta de ar que piora ou ao deitar, inchaço rápido ou palpitações fortes",
    "Fazer o ecocardiograma no prazo combinado mesmo sem sintomas; a cirurgia no momento certo protege o coração",
    "Cuidar dos dentes e ir ao dentista regularmente; avisar o dentista sobre a doença da válvula ou prótese",
    "Febre por mais de alguns dias sem causa: procurar a UBS e não tomar antibiótico por conta própria antes de colher exames",
    "Quem usa varfarina: fazer o INR nas datas marcadas e não iniciar remédios ou chás sem orientação",
    "Mulheres: planejar gravidez com o cardiologista"
  ],
  encaminhar: [
    "Cardiologia com prioridade: valvulopatia grave sintomática ou com disfunção de VE",
    "Cardiologia eletiva: valvulopatia moderada ou grave assintomática, prótese valvar, dúvida no laudo",
    "PS: síncope, angina em repouso, EAP, suspeita de endocardite ou trombose de prótese",
    "Pré-natal de alto risco: gestante com valvopatia moderada/grave ou prótese"
  ],
  fontes: [
    "ESC/EACTS — Guidelines for the management of valvular heart disease (Eur Heart J, 2021 e atualização 2025)",
    "ACC/AHA — Guideline for the Management of Patients With Valvular Heart Disease (2020)",
    "SBC — Atualização das Diretrizes Brasileiras de Valvopatias (Arq Bras Cardiol, 2020)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
