// Miocardite aguda
registrarFicha({
  id: "miocardite",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Miocardite aguda",
  resumo: "Inflamação do miocárdio, em geral após infecção viral. Suspeitar em dor torácica com troponina elevada e coronárias normais (ou jovem), IC nova, arritmia ou choque após quadro viral.",
  palavrasChave: "miocardite aguda miopericardite troponina ressonancia lake louise miocardite fulminante choque cardiogenico viral covid vacina checkpoint imunoterapia celulas gigantes chagas aguda",
  critico: {
    tempo: "Choque/arritmia: UTI e centro terciário",
    texto: "Miocardite com hipotensão, IC grave, BAV avançado ou TV: UTI, suporte inotrópico e transferência precoce para centro com suporte circulatório mecânico e biópsia."
  },
  alarmes: [
    "Hipotensão, choque cardiogênico, lactato elevado",
    "FE muito reduzida, IC aguda",
    "TV sustentada, BAV avançado ou total, síncope",
    "Piora rápida em horas a dias (miocardite fulminante)",
    "Uso de inibidor de checkpoint imunológico (imunoterapia oncológica)"
  ],
  condutaInicial: [
    "ECG, troponina seriada, BNP/NT-proBNP, PCR, hemograma, função renal e hepática, eletrólitos",
    "Ecocardiograma transtorácico (FE, contratilidade segmentar, derrame)",
    "Excluir SCA: cateterismo ou angiotomografia de coronárias conforme risco",
    "Monitorização contínua de ritmo (risco de arritmia) por pelo menos 24–48 h",
    "IC: tratamento padrão (diurético, depois IECA/BRA/INRA, betabloqueador, antagonista mineralocorticoide, iSGLT2) — ver ficha ic-descompensada",
    "Choque: inotrópico (dobutamina) ± noradrenalina; contato precoce com centro de suporte mecânico",
    "Evitar AINE em miocardite sem pericardite; repouso de exercício"
  ],
  fataisExcluir: [
    "SCA / IAM (inclusive MINOCA)",
    "Miocardite fulminante",
    "Miocardite de células gigantes ou eosinofílica (piora apesar do tratamento, TV, BAV)",
    "Miocardite por inibidor de checkpoint",
    "Cardiomiopatia de Takotsubo, TEP"
  ],
  proximaDecisao: "Estável, FE preservada, sem arritmia → internação curta com monitor, ressonância cardíaca e alta com restrição de exercício e seguimento. FE reduzida, arritmia grave ou choque → UTI, transferência para centro terciário e biópsia endomiocárdica (orienta imunossupressão).",
  clinica: {
    anamnese: [
      "Quadro viral 1–3 semanas antes (respiratório, gastrointestinal), COVID-19, vacina de mRNA recente",
      "Dor torácica, dispneia, palpitações, síncope, fadiga",
      "Medicamentos: inibidores de checkpoint (nivolumabe, pembrolizumabe, ipilimumabe), clozapina, antraciclinas; drogas (cocaína)",
      "Doença autoimune, eosinofilia, epidemiologia para Chagas aguda (transmissão oral: açaí, caldo de cana)"
    ],
    exameFisico: [
      "Taquicardia desproporcional à febre, B3, congestão",
      "Atrito pericárdico (miopericardite)",
      "Sinais de baixo débito: extremidades frias, hipotensão, oligúria"
    ],
    diferenciais: [
      { dx: "IAM / SCA", pista: "Fatores de risco, alteração segmentar no território de uma coronária; cateterismo" },
      { dx: "Pericardite isolada", pista: "Troponina normal, FE normal" },
      { dx: "Takotsubo", pista: "Mulher pós-menopausa, estresse, abaulamento apical" },
      { dx: "Cardiomiopatia dilatada prévia", pista: "Sintomas crônicos, VE muito dilatado" },
      { dx: "Sepse com disfunção miocárdica", pista: "Foco infeccioso, vasoplegia" }
    ],
    gravidade: [
      "Baixo risco: dor torácica com troponina elevada, FE preservada, sem arritmia ou IC",
      "Alto risco: FE reduzida, IC, TV sustentada, BAV avançado, choque",
      "Fulminante: choque cardiogênico de início súbito, necessidade de inotrópico ou suporte mecânico",
      "Ressonância cardíaca: critérios de Lake Louise (2018) — edema (T2) + lesão não isquêmica (T1/realce tardio)"
    ]
  },
  exames: [
    {
      nome: "Troponina e ECG seriados",
      pedido: "Troponina de alta sensibilidade (0 e 1–3 h, depois diária); ECG de 12 derivações diário e se sintomas.",
      porQue: "Confirmar lesão miocárdica e vigiar arritmias.",
      esperar: "Troponina elevada; ECG com alterações de ST-T, bloqueios ou arritmias.",
      interpretacao: "Novo BAV ou QRS alargando: maior gravidade.",
      limitacoes: "ECG pode simular IAM."
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico.",
      porQue: "FE, contratilidade, derrame, trombo.",
      esperar: "Normal ou hipocinesia difusa/segmentar.",
      interpretacao: "FE reduzida + choque = alto risco.",
      limitacoes: "Normal não exclui miocardite."
    },
    {
      nome: "Ressonância magnética cardíaca",
      pedido: "Ressonância magnética cardíaca com gadolínio (protocolo de miocardite).",
      porQue: "Exame não invasivo de escolha no paciente estável.",
      esperar: "Edema e realce tardio mesocárdico/subepicárdico.",
      interpretacao: "Critérios de Lake Louise positivos + quadro compatível = miocardite.",
      limitacoes: "Disponibilidade; ideal nas primeiras 2–3 semanas."
    },
    {
      nome: "Excluir coronariopatia",
      pedido: "Cineangiocoronariografia (ou angiotomografia de coronárias em baixo risco).",
      porQue: "Diferencial com SCA.",
      esperar: "Coronárias sem lesão obstrutiva.",
      interpretacao: "Coronárias normais + troponina elevada: miocardite, MINOCA, Takotsubo.",
      limitacoes: "—"
    },
    {
      nome: "Laboratório complementar",
      pedido: "BNP ou NT-proBNP, PCR, hemograma com eosinófilos, CK, TSH, função renal e hepática, lactato; sorologia/pesquisa para Chagas se epidemiologia; teste para SARS-CoV-2.",
      porQue: "Gravidade e etiologia.",
      esperar: "—",
      interpretacao: "Eosinofilia → miocardite eosinofílica.",
      limitacoes: "Sorologias virais em geral não mudam conduta."
    }
  ],
  tratamento: [
    {
      droga: "Tratamento de IC (diretriz)",
      linha: "l1",
      dose: "Furosemida IV se congestão; após estabilização: IECA/BRA ou sacubitril-valsartana, betabloqueador, espironolactona, iSGLT2",
      via: "IV / VO",
      intervalo: "Conforme droga",
      duracao: "Pelo menos até recuperação da FE (reavaliar em 3–6 meses)",
      monitorizacao: "PA, função renal, potássio",
      contraindicacoes: "Betabloqueador no choque/baixo débito agudo",
      ajustes: "Ver fichas ic-descompensada e ic-cronica"
    },
    {
      droga: "Dobutamina",
      linha: "l1",
      dose: "2,5–10 mcg/kg/min (até 20)",
      via: "IV em bomba",
      intervalo: "Contínuo",
      duracao: "Até estabilização ou suporte mecânico",
      monitorizacao: "PA, FC, arritmias, lactato, diurese",
      contraindicacoes: "Taquiarritmia ventricular não controlada",
      ajustes: "Dobutamina 12,5 mg/mL: 250 mg (20 mL) + SG 5% 230 mL = 1 mg/mL. Associar noradrenalina se hipotensão"
    },
    {
      droga: "Imunossupressão (corticoide em pulso)",
      linha: "adj",
      dose: "Metilprednisolona em pulso (esquemas usuais de 500–1.000 mg/dia por 3 dias) conforme especialista",
      via: "IV",
      intervalo: "1×/dia",
      duracao: "Conforme etiologia",
      monitorizacao: "Glicemia, infecção",
      contraindicacoes: "Miocardite viral ativa comprovada sem indicação específica",
      ajustes: "Indicada em miocardite de células gigantes, eosinofílica, sarcoidose, por checkpoint e autoimune — idealmente após biópsia e por decisão do cardiologista"
    },
    {
      droga: "AINE em miocardite isolada",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar na miocardite com disfunção ventricular (piora retenção de sódio e possivelmente a lesão)",
      ajustes: "Na miopericardite com FE preservada, o especialista pode usar AINE em dose menor; analgesia com paracetamol/dipirona"
    }
  ],
  destino: {
    agora: [
      "Monitor contínuo, ECG e troponina seriados, ecocardiograma",
      "Tratar IC e arritmias"
    ],
    reavaliar: [
      "Ritmo, troponina, sinais de baixo débito diariamente",
      "Ressonância cardíaca e excluir coronariopatia"
    ],
    alta: [
      "Estável, FE preservada ou em melhora, sem arritmia, troponina em queda",
      "Restrição de esporte e exercício intenso por pelo menos alguns meses, com liberação após reavaliação (ECG, eco, Holter ± ressonância)",
      "Seguimento com cardiologia em 1–2 semanas"
    ],
    observacao: ["—"],
    internacao: [
      "Toda suspeita de miocardite com troponina elevada (pelo menos 24–48 h de monitor)",
      "UTI: FE reduzida, IC, arritmia grave, choque"
    ],
    transferencia: [
      "Choque, arritmia ventricular, BAV avançado, piora rápida: centro terciário com suporte circulatório mecânico, transplante e biópsia"
    ]
  },
  prescricao: {
    hospitalar: "MIOCARDITE AGUDA — ESTÁVEL (adulto)\n1. Dieta hipossódica. Repouso relativo.\n2. Monitor cardíaco contínuo; sinais vitais de 4/4 h; balanço hídrico; peso diário.\n3. Dipirona 1 g IV de 6/6 h se dor ou febre (evitar AINE se disfunção ventricular).\n4. Se congestão: furosemida 10 mg/mL — 20 a 40 mg IV de 12/12 h, ajustar pela diurese.\n5. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV), se sem contraindicação.\n6. Exames: troponina e ECG diários; BNP, PCR, hemograma, função renal, K, Mg; ecocardiograma; ressonância cardíaca.\n7. Corrigir K (alvo ≥ 4) e Mg (alvo ≥ 2).\n\nSE CHOQUE CARDIOGÊNICO\n8. Dobutamina 250 mg + SG 5% 230 mL (1 mg/mL) a 2,5 mcg/kg/min (70 kg = 10,5 mL/h), titular até 10 mcg/kg/min; noradrenalina se PAM < 65 mmHg.\n9. Acionar centro terciário para suporte circulatório mecânico."
  },
  orientacoesRetorno: [
    "Não fazer exercício intenso nem esportes até liberação do cardiologista (risco de arritmia)",
    "Tomar os remédios do coração todos os dias, mesmo sem sintomas",
    "Voltar imediatamente se falta de ar, inchaço, palpitações, desmaio ou dor no peito",
    "Consulta com cardiologista em 1–2 semanas e novos exames de coração em 3–6 meses"
  ],
  fontes: [
    "ESC — Guidelines for the management of myocarditis and pericarditis (2025)",
    "SBC — Diretriz sobre Miocardites (2022)",
    "Ferreira VM et al. — Lake Louise Criteria updated, J Am Coll Cardiol (2018)",
    "AHA — Scientific Statement: Recognition and Initial Management of Fulminant Myocarditis (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
