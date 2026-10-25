// Câncer colorretal: suspeita, diagnóstico, estadiamento, hereditariedade e seguimento
registrarFicha({
  id: "cancer-colorretal",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Câncer colorretal: sinais de alarme, colonoscopia, estadiamento, síndromes hereditárias e seguimento",
  resumo: "Paciente COM sintomas (sangramento retal, mudança do hábito intestinal, anemia ferropriva, massa) vai direto para colonoscopia — não para pesquisa de sangue oculto. Rastreamento do assintomático: ver rastreio-cancer. Inclui estadiamento, quando suspeitar de síndrome hereditária (Lynch, polipose), vigilância após polipectomia e seguimento após tratamento.",
  palavrasChave: "cancer colorretal colon reto adenocarcinoma sangramento retal hematoquezia mudanca habito intestinal anemia ferropriva colonoscopia polipo adenoma polipectomia vigilancia cea estadiamento tnm ressonancia pelve sindrome de lynch hnpcc polipose adenomatosa familiar paf apc mutyh amsterdam bethesda doenca inflamatoria intestinal seguimento",
  alarmes: [
    "Sangramento retal (sobretudo com sangue misturado às fezes ou escuro) após os 40–45 anos, ou em qualquer idade se persistente",
    "Mudança persistente do hábito intestinal (> 4–6 semanas), fezes afiladas, tenesmo",
    "Anemia ferropriva sem causa aparente (homem ou mulher pós-menopausa): colonoscopia e EDA",
    "Perda de peso, massa abdominal ou retal ao toque",
    "Distensão, cólica e parada de eliminação de gases e fezes (obstrução — PS, ver obstrucao-intestinal)",
    "Câncer colorretal em parente de 1º grau < 50 anos ou vários casos na família (Lynch)",
    "Pesquisa de sangue oculto (FIT) positiva: colonoscopia, não repetir o teste"
  ],
  conduta: [
    "Sintomático: toque retal (tumor de reto baixo) e colonoscopia completa com biópsias, com prioridade conforme os sinais de alarme",
    "Não usar sangue oculto nas fezes para investigar sintomas; hemorroida não explica anemia ferropriva",
    "Câncer confirmado: hemograma, função renal e hepática, CEA; TC de tórax, abdome e pelve com contraste; câncer de reto: RM de pelve (estadiamento local)",
    "Colonoscopia incompleta por tumor obstrutivo: colonografia por TC ou colonoscopia em até 3–6 meses após a cirurgia",
    "Encaminhar com prioridade à oncologia cirúrgica/coloproctologia (Lei 12.732/2012: tratamento em até 60 dias)",
    "Tratamento (referência): cólon — colectomia com linfadenectomia e quimioterapia adjuvante no estádio III e II de alto risco; reto — radio/quimioterapia neoadjuvante conforme estádio (incluindo terapia neoadjuvante total) e excisão total do mesorreto",
    "Toda peça de câncer colorretal deve ser testada para instabilidade de microssatélites / imuno-histoquímica de MMR (rastreio universal de Lynch; também orienta imunoterapia)",
    "Suspeita de síndrome hereditária (tabela): aconselhamento genético e colonoscopias em intervalos próprios para o paciente e familiares",
    "Pólipos ressecados: definir o intervalo da próxima colonoscopia pelo laudo anatomopatológico (tabela de vigilância)",
    "Após tratamento curativo (estádio II–III): seguimento com CEA, TC e colonoscopia (tabela); estimular atividade física, peso adequado, parar de fumar"
  ],
  exames: [
    "Colonoscopia completa com biópsias (preparo adequado; laudo deve citar ceco atingido e qualidade do preparo)",
    "Hemograma, ferritina, creatinina, TGO, TGP, fosfatase alcalina, albumina, CEA",
    "TC de tórax, abdome e pelve com contraste (metástases hepáticas e pulmonares)",
    "RM de pelve com protocolo para reto (T, N, fáscia mesorretal, invasão venosa extramural) — câncer de reto",
    "Imuno-histoquímica para proteínas de reparo (MLH1, MSH2, MSH6, PMS2) ou instabilidade de microssatélites na peça/biópsia",
    "Pesquisa de mutação RAS/BRAF: doença metastática (pela oncologia)"
  ],
  diferenciais: [
    "Doença hemorroidária e fissura anal (sangue vivo no papel, dor à evacuação) — mas não atribuir anemia a hemorroida sem investigar",
    "Doença diverticular, colite isquêmica, doença inflamatória intestinal, angiodisplasia",
    "Síndrome do intestino irritável (diagnóstico de exclusão quando há sinais de alarme)",
    "Tumores de apêndice, linfoma, endometriose intestinal"
  ],
  tabelas: [
    {
      titulo: "Quando suspeitar de síndrome hereditária",
      colunas: ["Síndrome", "Pistas", "Vigilância usual"],
      linhas: [
        ["Lynch (MLH1, MSH2, MSH6, PMS2, EPCAM)", "Critérios de Amsterdam II (3 parentes com câncer do espectro Lynch, 2 gerações, 1 < 50 anos) ou Bethesda; câncer colorretal < 50 anos; endométrio, ovário, estômago, urotélio; tumor com perda de MMR", "Colonoscopia a cada 1–2 anos a partir de 20–25 anos (varia pelo gene); vigilância ginecológica"],
        ["Polipose adenomatosa familiar (APC)", "> 100 adenomas, início na adolescência; tumores desmoides, osteomas, hipertrofia do epitélio pigmentar da retina", "Retossigmoidoscopia/colonoscopia anual a partir de 10–12 anos; colectomia profilática"],
        ["Polipose associada ao MUTYH", "10–100 adenomas, herança recessiva (irmãos)", "Colonoscopia a cada 1–2 anos"],
        ["Peutz-Jeghers / polipose juvenil", "Pólipos hamartomatosos, manchas melânicas em lábios e mucosa (Peutz-Jeghers)", "Programa específico em serviço de referência"],
        ["Risco familiar sem síndrome", "Parente de 1º grau com câncer ou adenoma avançado < 60 anos, ou ≥ 2 parentes de 1º grau", "Colonoscopia aos 40 anos ou 10 anos antes do caso mais jovem, a cada 5 anos"]
      ]
    },
    {
      titulo: "Vigilância após polipectomia (USMSTF 2020, resumo)",
      colunas: ["Achado (ressecção completa)", "Próxima colonoscopia"],
      linhas: [
        ["Sem pólipos ou só pólipos hiperplásicos < 10 mm no retossigmoide", "10 anos"],
        ["1–2 adenomas tubulares < 10 mm", "7–10 anos"],
        ["3–4 adenomas tubulares < 10 mm", "3–5 anos"],
        ["5–10 adenomas < 10 mm", "3 anos"],
        ["Adenoma ≥ 10 mm, viloso/tubuloviloso ou displasia de alto grau", "3 anos"],
        ["> 10 adenomas", "1 ano (avaliar síndrome hereditária)"],
        ["Adenoma ≥ 20 mm ressecado em fragmentos (piecemeal)", "6 meses"],
        ["Pólipo serrilhado séssil ≥ 10 mm ou com displasia", "3 anos"]
      ]
    },
    {
      titulo: "Seguimento após tratamento curativo (estádios II–III)",
      colunas: ["Exame", "Frequência"],
      linhas: [
        ["Consulta + CEA", "A cada 3–6 meses por 2 anos, depois a cada 6 meses até 5 anos"],
        ["TC de tórax, abdome e pelve", "A cada 6–12 meses por até 5 anos"],
        ["Colonoscopia", "1 ano após a cirurgia (ou 3–6 meses se não houve colonoscopia completa antes); se normal, em 3 anos e depois a cada 5 anos"],
        ["Câncer de reto", "Também retoscopia/RM de pelve conforme o serviço (recidiva local)"]
      ],
      nota: "Seguimento conforme NCCN/ESMO; o serviço de oncologia pode adaptar. Doença inflamatória intestinal colônica: colonoscopia de vigilância a partir de 8 anos de doença."
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO\n1. Colonoscopia com biópsias — PRIORIDADE.\n   Indicação: ___ (sangramento retal / mudança do hábito intestinal / anemia ferropriva / FIT positivo / massa ao toque retal), ___ anos. Hb: ___. Ferritina: ___.\n2. Hemograma, ferritina, ureia, creatinina, TGO, TGP, fosfatase alcalina, albumina.\n3. (Com diagnóstico confirmado) CEA; tomografia de tórax, abdome e pelve com contraste — estadiamento de adenocarcinoma colorretal. Se reto: ressonância magnética de pelve (protocolo para câncer de reto).\n\nPREPARO DE COLONOSCOPIA (conforme protocolo do serviço)\nUSO ORAL\n1. Manitol 20% 750 mL + 750 mL de suco de limão coado (ou polietilenoglicol, conforme serviço)\n   Beber em 2 a 3 horas, na véspera ou no dia, conforme horário do exame. Dieta sem fibras e sem sementes por 2 dias; líquidos claros na véspera.\n\nENCAMINHAMENTO PRIORITÁRIO\nColoproctologia / oncologia cirúrgica — adenocarcinoma de ___ (cólon/reto, a ___ cm da borda anal) confirmado em ___ (data). CEA: ___. TC: ___. História familiar: ___. Lei 12.732/2012."
  },
  orientacoesRetorno: [
    "Sangue nas fezes, anemia ou mudança no intestino que não passa precisam de colonoscopia, mesmo que pareça hemorroida",
    "Seguir o preparo do exame à risca: o intestino precisa estar limpo para o médico ver tudo",
    "Se o diagnóstico for confirmado, você tem direito de iniciar o tratamento no SUS em até 60 dias",
    "Familiares de 1º grau podem precisar começar exames mais cedo; informe a equipe sobre casos de câncer na família",
    "Atividade física, comer mais fibras e menos carne processada, não fumar e evitar álcool reduzem o risco",
    "Procurar o PS se barriga inchar com vômitos e parar de eliminar gases e fezes, sangramento grande ou desmaio"
  ],
  encaminhar: [
    "Colonoscopia prioritária: sintomas de alarme, anemia ferropriva, FIT positivo",
    "Coloproctologia/oncologia com prioridade: câncer confirmado",
    "Genética: critérios de Amsterdam/Bethesda, tumor com perda de MMR, ≥ 10 adenomas, polipose",
    "PS: obstrução, perfuração, sangramento volumoso"
  ],
  fontes: [
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas do Câncer de Cólon e Reto (Portaria SAS/MS nº 958/2014)",
    "INCA/Ministério da Saúde — Detecção precoce do câncer (2021) e protocolo nacional de rastreamento colorretal com FIT (2026)",
    "US Multi-Society Task Force — Recommendations for follow-up after colonoscopy and polypectomy (Gastroenterology, 2020)",
    "NCCN Guidelines — Colon Cancer e Rectal Cancer (2025); ESMO — Localised colon cancer (2020) e Rectal cancer (2017)",
    "ACG — Clinical Guideline: Hereditary gastrointestinal cancer syndromes (2015) e NCCN Genetic/Familial High-Risk Assessment: Colorectal (2025)",
    "Lei nº 12.732/2012 (início do tratamento em até 60 dias)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
