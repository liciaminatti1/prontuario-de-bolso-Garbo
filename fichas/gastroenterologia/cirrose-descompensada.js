// Cirrose descompensada: ascite, PBE, encefalopatia, síndrome hepatorrenal
registrarFicha({
  id: "cirrose-descompensada",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Cirrose descompensada: ascite, PBE, encefalopatia e síndrome hepatorrenal",
  resumo: "Cirrótico com ascite, icterícia, encefalopatia, hemorragia varicosa ou lesão renal. Paracentese diagnóstica em toda internação, busca do fator precipitante e tratamento de cada complicação.",
  palavrasChave: "cirrose descompensada ascite paracentese pbe peritonite bacteriana espontanea encefalopatia hepatica lactulose rifaximina sindrome hepatorrenal terlipressina albumina espironolactona furosemida child pugh meld baveno hiponatremia",
  critico: {
    tempo: "Paracentese diagnóstica na admissão",
    texto: "Todo cirrótico com ascite que interna ou piora: paracentese diagnóstica antes do antibiótico, sem esperar corrigir INR ou plaquetas. PMN ≥ 250/mm³ = PBE: ceftriaxona + albumina."
  },
  alarmes: [
    "Febre, dor abdominal, piora da encefalopatia ou da função renal sem causa (PBE até prova em contrário)",
    "Hemorragia digestiva (ver ficha hemorragia-digestiva-alta)",
    "Encefalopatia grau III–IV (proteção de via aérea)",
    "Creatinina subindo ≥ 0,3 mg/dL em 48 h ou ≥ 50% em 7 dias (lesão renal aguda)",
    "Sódio < 125 mEq/L",
    "Hipotensão (PAM < 65), sepse",
    "Icterícia em ascensão rápida (hepatite alcoólica, ACLF)"
  ],
  condutaInicial: [
    "Avaliar precipitante: infecção, sangramento, álcool, diuréticos, desidratação, sedativos, constipação, distúrbio eletrolítico, trombose portal, CHC",
    "Paracentese diagnóstica: celularidade com diferencial, albumina, proteína total, cultura em frasco de hemocultura à beira do leito",
    "Hemograma, creatinina, ureia, sódio, potássio, TP/INR, bilirrubinas, albumina, glicemia, urina tipo 1 e urocultura, hemoculturas, RX de tórax",
    "PBE: ceftriaxona + albumina 1,5 g/kg no dia 1 e 1 g/kg no dia 3",
    "Encefalopatia: corrigir precipitante + lactulose",
    "Lesão renal: suspender diuréticos, betabloqueador (se hipotensão), nefrotóxicos e AINE; albumina 1 g/kg/dia por 2 dias",
    "Calcular Child-Pugh e MELD-Na; encaminhar para avaliação de transplante se MELD ≥ 15 ou descompensação"
  ],
  fataisExcluir: [
    "Peritonite bacteriana secundária (perfuração): polimicrobiana, proteína > 1 g/dL, glicose < 50 mg/dL, LDH alta no líquido",
    "Hemorragia varicosa oculta (melena)",
    "Hipoglicemia, hiponatremia grave, intoxicação ou hematoma subdural (diferencial da encefalopatia)",
    "Sepse com choque",
    "Carcinoma hepatocelular, trombose de veia porta",
    "Hepatite alcoólica grave (Maddrey ≥ 32)"
  ],
  proximaDecisao: "PBE → repetir paracentese em 48 h se não melhorar (PMN deve cair ≥ 25%); após tratar, profilaxia secundária contínua. LRA que não responde a 48 h de albumina e preenche critérios de SHR-LRA → terlipressina + albumina. Ascite refratária → paracenteses de alívio seriadas com albumina e avaliação de TIPS/transplante.",
  clinica: {
    anamnese: [
      "Causa da cirrose (álcool, hepatite B/C, MASLD), último consumo de álcool",
      "Aumento do volume abdominal, ganho de peso, edema",
      "Febre, dor abdominal, diarreia",
      "Confusão, sonolência, inversão do sono, constipação",
      "Diuréticos (doses, adesão), betabloqueador, sedativos, AINE, IBP",
      "Melena, hematêmese; diurese reduzida"
    ],
    exameFisico: [
      "PA, FC, temperatura, volemia, peso",
      "Ascite (macicez móvel), hérnia umbilical, edema",
      "Icterícia, aranhas vasculares, eritema palmar, ginecomastia",
      "Flapping, orientação, grau de West Haven",
      "Toque retal (melena)"
    ],
    diferenciais: [
      { dx: "Ascite cardíaca", pista: "Turgência jugular; GASA ≥ 1,1 com proteína ≥ 2,5 g/dL" },
      { dx: "Ascite neoplásica / tuberculose peritoneal", pista: "GASA < 1,1, proteína alta, linfócitos (TB), citologia" },
      { dx: "Peritonite secundária", pista: "Múltiplos germes, critérios de Runyon" },
      { dx: "LRA pré-renal ou NTA", pista: "Responde a albumina (pré-renal); cilindros e sódio urinário alto (NTA)" },
      { dx: "Encefalopatia de Wernicke, AVC, hipoglicemia", pista: "Sinais focais, ataxia, oftalmoparesia, glicemia" }
    ],
    gravidade: [
      "Child-Pugh C e MELD-Na alto: mortalidade elevada",
      "ACLF: descompensação aguda com falência de órgãos (rim, fígado, cérebro, coagulação, circulação, pulmão)",
      "SHR-LRA (ICA/AASLD): cirrose com ascite + LRA (ICA) + sem resposta a 2 dias de suspensão de diurético e albumina 1 g/kg/dia + sem choque + sem nefrotóxicos recentes + sem sinais de lesão estrutural (proteinúria > 500 mg/dia, hematúria > 50 hemácias/campo, USG renal anormal)"
    ]
  },
  exames: [
    {
      nome: "Paracentese diagnóstica",
      pedido: "Líquido ascítico: celularidade total e diferencial, albumina, proteína total, glicose, LDH, Gram e cultura (10 mL em frasco de hemocultura aeróbio e 10 mL em anaeróbio à beira do leito). Albumina sérica no mesmo dia.",
      porQue: "Diagnóstico de PBE e da causa da ascite.",
      esperar: "PBE: PMN ≥ 250/mm³.",
      interpretacao: "GASA (albumina sérica − ascítica) ≥ 1,1 g/dL = hipertensão portal. Proteína < 1,5 g/dL = maior risco de PBE. Ascite hemorrágica: descontar 1 PMN para cada 250 hemácias.",
      limitacoes: "Cultura negativa não exclui PBE (tratar pelo PMN). INR alto e plaquetopenia não contraindicam."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, creatinina, ureia, sódio, potássio, magnésio, glicemia, TP/INR, bilirrubinas, albumina, TGO, TGP, PCR. Urina tipo 1, sódio urinário, proteinúria. Hemoculturas (2 amostras), urocultura. RX de tórax.",
      porQue: "Gravidade (MELD-Na), infecção, LRA.",
      esperar: "—",
      interpretacao: "Sódio urinário muito baixo é típico de SHR, mas não define o diagnóstico.",
      limitacoes: "Creatinina superestima a função renal (sarcopenia)."
    },
    {
      nome: "Imagem",
      pedido: "Ultrassonografia de abdome com Doppler do sistema porta e rins.",
      porQue: "Trombose portal, CHC, obstrução urinária, avaliação renal.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Amônia",
      pedido: "Não pedir de rotina para diagnóstico de encefalopatia.",
      porQue: "Diagnóstico é clínico.",
      esperar: "—",
      interpretacao: "Amônia normal torna encefalopatia hepática menos provável e deve motivar busca de outra causa.",
      limitacoes: "Coleta inadequada eleva o valor."
    }
  ],
  tratamento: [
    {
      droga: "Ceftriaxona (PBE comunitária)",
      linha: "l1",
      dose: "2 g",
      via: "IV",
      intervalo: "24/24 h",
      duracao: "5–7 dias",
      monitorizacao: "PMN no líquido em 48 h se sem melhora",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "PBE hospitalar, uso recente de antibiótico ou choque: piperacilina-tazobactam 4,5 g IV 6/6 h ou meropenem 1 g IV 8/8 h conforme perfil local"
    },
    {
      droga: "Albumina humana 20% (PBE)",
      linha: "l1",
      dose: "1,5 g/kg no dia 1 e 1 g/kg no dia 3 (máximo 100 g/dia)",
      via: "IV",
      intervalo: "Dias 1 e 3",
      duracao: "—",
      monitorizacao: "Congestão pulmonar",
      contraindicacoes: "Sobrecarga volêmica",
      ajustes: "Reduz LRA e mortalidade, principalmente com creatinina > 1 mg/dL, ureia > 60 mg/dL ou bilirrubina > 4 mg/dL. Frasco 20% 50 mL = 10 g"
    },
    {
      droga: "Lactulose (encefalopatia)",
      linha: "l1",
      dose: "20–30 mL de 1/1 a 2/2 h até evacuar; depois ajustar para 2–3 evacuações pastosas/dia (geralmente 15–30 mL 2–3×/dia)",
      via: "VO ou SNG; enema se não puder VO",
      intervalo: "Conforme evacuações",
      duracao: "Manter como profilaxia secundária",
      monitorizacao: "Evacuações, sódio, desidratação",
      contraindicacoes: "Obstrução intestinal",
      ajustes: "Enema: 300 mL de lactulose + 700 mL de água, retido 30–60 min, até 6/6 h. Excesso causa desidratação, hipernatremia e piora da encefalopatia"
    },
    {
      droga: "Rifaximina",
      linha: "adj",
      dose: "550 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Contínuo",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Associar à lactulose após recorrência de encefalopatia. Pouca disponibilidade no SUS"
    },
    {
      droga: "Terlipressina (SHR-LRA)",
      linha: "l1",
      dose: "1 mg IV 4/4–6/6 h (ou infusão contínua 2 mg/dia); se creatinina não cair ≥ 25% em 3 dias, aumentar até 2 mg 4/4 h (ou até 12 mg/dia em infusão)",
      via: "IV",
      intervalo: "Bolus 4/4–6/6 h ou contínuo",
      duracao: "Até creatinina estável próxima ao basal ou máximo de ~14 dias",
      monitorizacao: "SpO₂ (insuficiência respiratória), ECG, isquemia periférica e intestinal, balanço hídrico",
      contraindicacoes: "SpO₂ < 90%, sobrecarga volêmica, doença coronariana ou vascular isquêmica; cautela em ACLF grau 3 e creatinina ≥ 5 mg/dL",
      ajustes: "Associar albumina 20–40 g/dia. Alternativa em UTI: noradrenalina 0,5–3 mg/h para elevar PAM em 10 mmHg"
    },
    {
      droga: "Albumina (expansão na LRA)",
      linha: "l1",
      dose: "1 g/kg/dia (máximo 100 g/dia)",
      via: "IV",
      intervalo: "1×/dia",
      duracao: "2 dias",
      monitorizacao: "Congestão, creatinina",
      contraindicacoes: "Sobrecarga volêmica",
      ajustes: "Junto com suspensão de diuréticos e nefrotóxicos"
    },
    {
      droga: "Albumina na paracentese de grande volume",
      linha: "l1",
      dose: "6–8 g por litro retirado",
      via: "IV",
      intervalo: "Durante ou logo após a paracentese",
      duracao: "—",
      monitorizacao: "PA, creatinina",
      contraindicacoes: "—",
      ajustes: "Indicada se > 5 L retirados (AASLD); EASL recomenda 8 g/L. Previne disfunção circulatória pós-paracentese"
    },
    {
      droga: "Espironolactona + furosemida (ascite)",
      linha: "l1",
      dose: "Espironolactona 100 mg + furosemida 40 mg 1×/dia; aumentar a cada 3–5 dias mantendo a proporção, até 400 mg + 160 mg",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "Contínuo",
      monitorizacao: "Peso (perda até 0,5 kg/dia sem edema; 1 kg/dia com edema), sódio, potássio, creatinina",
      contraindicacoes: "Suspender se Na < 125, LRA, encefalopatia, K > 6 ou cãibras incapacitantes",
      ajustes: "Iniciar com estabilidade renal, fora de PBE ou sangramento ativo. Restrição de sódio 2 g/dia (sem restrição hídrica se Na > 125)"
    },
    {
      droga: "Norfloxacino ou ciprofloxacino (profilaxia de PBE)",
      linha: "l1",
      dose: "Norfloxacino 400 mg 1×/dia ou ciprofloxacino 500 mg 1×/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo (profilaxia secundária após PBE)",
      monitorizacao: "Infecções por resistentes, tendinopatia",
      contraindicacoes: "Alergia a quinolona, QT longo",
      ajustes: "Alternativa: sulfametoxazol-trimetoprima 800/160 mg 1×/dia. Profilaxia primária se proteína no líquido < 1,5 g/dL com doença avançada (critérios AASLD)"
    },
    {
      droga: "AINE, aminoglicosídeo, contraste e IECA/BRA",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Precipitam LRA e SHR em cirrose com ascite",
      ajustes: "Para dor: paracetamol até 2 g/dia"
    }
  ],
  destino: {
    agora: [
      "Paracentese diagnóstica, culturas, antibiótico se PBE ou infecção",
      "Suspender diuréticos e nefrotóxicos se LRA, hipotensão, PBE ou sangramento"
    ],
    reavaliar: [
      "Creatinina e eletrólitos a cada 24 h (12 h se LRA)",
      "Paracentese de controle em 48 h se PBE sem melhora",
      "Grau de encefalopatia a cada turno"
    ],
    alta: [
      "Precipitante resolvido, encefalopatia controlada, função renal estável",
      "Diurético ajustado, profilaxias (PBE, varizes) prescritas",
      "Retorno com hepatologia; avaliação de transplante se MELD-Na ≥ 15 ou descompensação"
    ],
    observacao: ["Paracentese de alívio em ascite tensa sem outras complicações: alta após o procedimento com albumina"],
    internacao: ["PBE, encefalopatia grau ≥ II, LRA, hiponatremia < 125, sangramento, infecção", "UTI: choque, encefalopatia III–IV, ACLF"],
    transferencia: ["Sem terlipressina, albumina, endoscopia ou UTI: regulação para centro com hepatologia/transplante"]
  },
  prescricao: {
    hospitalar: "CIRROSE DESCOMPENSADA — ADULTO (peso: ___ kg)\n1. Dieta hipossódica (2 g de sódio/dia), proteína 1,2–1,5 g/kg/dia (não restringir proteína na encefalopatia), lanche noturno. Sem restrição hídrica se Na ≥ 125.\n2. PBE: ceftriaxona 2 g IV de 24/24 h por 5–7 dias.\n3. Albumina humana 20%: 1,5 g/kg no dia 1 (___ g = ___ frascos de 50 mL) IV em 4–6 h; 1 g/kg no dia 3.\n4. Encefalopatia: lactulose 667 mg/mL 20–30 mL VO/SNG de 2/2 h até evacuar; depois 20 mL de 8/8 h, ajustar para 2–3 evacuações pastosas/dia. Se não puder VO: enema de lactulose 300 mL + 700 mL de água, reter 30–60 min, até de 6/6 h.\n5. LRA: suspender espironolactona, furosemida, betabloqueador (se PAS < 90), AINE e nefrotóxicos. Albumina 20% 1 g/kg/dia (máx. 100 g) IV por 2 dias.\n6. SHR-LRA confirmada: terlipressina 1 mg IV em bolus de 6/6 h (ou 4/4 h) + albumina 20% 20–40 g IV/dia; se creatinina não cair ≥ 25% no 3º dia, aumentar até 2 mg de 4/4 h. Suspender se SpO₂ < 90%, dor torácica ou isquemia.\n7. Paracentese de alívio: albumina 20% 6–8 g por litro retirado (se > 5 L), IV durante/após o procedimento.\n8. Tiamina 100 mg IV/VO 1×/dia se etilista.\n9. Profilaxia de TEV: enoxaparina 40 mg SC 1×/dia se sem sangramento ativo e plaquetas adequadas (cirrose não protege de trombose).\n10. Controles: peso diário, diurese, balanço hídrico, PA, FC, temperatura de 4/4 h, grau de encefalopatia de 8/8 h; creatinina, sódio, potássio diários.\n11. Evitar benzodiazepínicos, opioides em excesso, AINE.",
    ambulatorial: "CIRROSE COM ASCITE — MANUTENÇÃO\nUSO ORAL\n1. Espironolactona 100 mg ------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã.\n2. Furosemida 40 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã.\n3. Lactulose 667 mg/mL ----------------------- 2 frascos\n   Tomar 20 mL 2 a 3 vezes ao dia, para evacuar 2 a 3 vezes ao dia (fezes pastosas).\n4. (Após PBE) Norfloxacino 400 mg ------------ 30 comprimidos\n   Tomar 1 comprimido ao dia, todos os dias, sem parar.\n5. (Se varizes) Carvedilol 6,25 mg ou propranolol 40 mg conforme prescrição da hepatologia.\n\nORIENTAÇÕES\n- Comida com pouco sal (sem saleiro, sem embutidos e enlatados).\n- Pesar todo dia de manhã e anotar."
  },
  orientacoesRetorno: [
    "Comer com pouco sal; não precisa cortar carne, ovo ou feijão (proteína é importante)",
    "Pesar todos os dias; se subir mais de 2 kg em uma semana, avisar a equipe",
    "Evacuar 2 a 3 vezes por dia com a lactulose; prisão de ventre pode causar confusão",
    "Não beber álcool; não usar anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida) nem calmantes",
    "Voltar imediatamente se: febre, dor na barriga, confusão ou sonolência, fezes pretas, vômito com sangue, urina muito pouca, pele mais amarela",
    "Consulta com hepatologia/UBS em 1–2 semanas com exames de sangue (sódio, potássio, creatinina)"
  ],
  tabelas: [
    {
      titulo: "Child-Pugh",
      colunas: ["Parâmetro", "1 ponto", "2 pontos", "3 pontos"],
      linhas: [
        ["Bilirrubina total (mg/dL)", "< 2", "2–3", "> 3"],
        ["Albumina (g/dL)", "> 3,5", "2,8–3,5", "< 2,8"],
        ["INR", "< 1,7", "1,7–2,3", "> 2,3"],
        ["Ascite", "Ausente", "Leve / controlada", "Moderada a tensa / refratária"],
        ["Encefalopatia", "Ausente", "Grau I–II", "Grau III–IV"]
      ],
      nota: "A: 5–6 · B: 7–9 · C: 10–15."
    },
    {
      titulo: "Líquido ascítico — interpretação rápida",
      colunas: ["Achado", "Significado"],
      linhas: [
        ["PMN ≥ 250/mm³, cultura monomicrobiana", "PBE: ceftriaxona + albumina"],
        ["PMN ≥ 250/mm³, cultura negativa", "Ascite neutrocítica: tratar como PBE"],
        ["PMN < 250/mm³, cultura positiva", "Bacterascite: se sintomático, tratar; senão repetir paracentese"],
        ["Polimicrobiana, proteína > 1 g/dL, glicose < 50 mg/dL, LDH > LSN sérico", "Suspeitar peritonite secundária: TC e cirurgia"],
        ["GASA ≥ 1,1 g/dL", "Hipertensão portal"]
      ]
    }
  ],
  fontes: [
    "AASLD — Diagnosis, Evaluation, and Management of Ascites, SBP and Hepatorenal Syndrome: Practice Guidance (Biggins et al., 2021)",
    "AASLD/EASL — Hepatic Encephalopathy in Chronic Liver Disease: Practice Guideline (2014)",
    "EASL — Clinical Practice Guidelines for the management of patients with decompensated cirrhosis (2018)",
    "Baveno VII — Renewing consensus in portal hypertension (J Hepatol, 2022)",
    "International Club of Ascites — Revised consensus on HRS-AKI (Angeli et al., 2015; atualização ADQI/ICA 2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
