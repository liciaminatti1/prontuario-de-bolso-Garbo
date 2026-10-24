// Endocardite infecciosa
registrarFicha({
  id: "endocardite",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Endocardite infecciosa",
  resumo: "Febre + sopro novo, valva protética, dispositivo intracardíaco, uso de droga injetável, bacteremia por S. aureus/estreptococo ou fenômenos embólicos. Diagnóstico pelos critérios de Duke-ISCVID 2023.",
  palavrasChave: "endocardite infecciosa duke iscvid hemocultura ecocardiograma transesofagico sopro febre valva protetica udiv staphylococcus aureus estreptococo viridans enterococo oxacilina ampicilina ceftriaxona vancomicina gentamicina profilaxia amoxicilina dentista",
  critico: {
    tempo: "3 hemoculturas antes do antibiótico",
    texto: "Colher 3 pares de hemoculturas de punções separadas antes do antibiótico (em até 1 h se grave). Séptico ou instável: antibiótico empírico logo após as coletas. Ecocardiograma o quanto antes."
  },
  alarmes: [
    "Insuficiência cardíaca aguda (regurgitação valvar grave) — indicação de cirurgia urgente",
    "Choque séptico",
    "Déficit neurológico, cefaleia intensa (embolia, aneurisma micótico, hemorragia)",
    "Novo BAV ou alargamento de PR (abscesso perivalvar)",
    "Vegetação > 10 mm com embolia, infecção não controlada (febre e bacteremia persistentes > 7 dias)",
    "Valva protética, S. aureus, fungos"
  ],
  condutaInicial: [
    "3 pares de hemoculturas (aeróbio + anaeróbio) de punções venosas diferentes, com intervalo de pelo menos 30 min se estável",
    "Ecocardiograma transtorácico; transesofágico se transtorácico negativo com alta suspeita, valva protética, dispositivo ou S. aureus",
    "Instável/séptico: antibiótico empírico logo após as hemoculturas. Estável sem uso prévio de antibiótico: pode aguardar culturas por 24–48 h em ambiente hospitalar",
    "ECG (bloqueios), RX de tórax, função renal, exame neurológico e fundo de olho",
    "Acionar a equipe de endocardite (cardiologia, cirurgia cardíaca, infectologia)",
    "Buscar porta de entrada: dentes, pele, cateteres, trato urinário e digestivo (S. gallolyticus/bovis → colonoscopia)"
  ],
  fataisExcluir: [
    "IC aguda por destruição valvar",
    "Abscesso perivalvar / BAV",
    "Embolia cerebral, AVC hemorrágico, aneurisma micótico",
    "Embolia esplênica, renal, coronariana; TEP séptico (endocardite de tricúspide em UDI)",
    "Choque séptico"
  ],
  proximaDecisao: "Duke-ISCVID definida ou possível → internação, antibiótico IV dirigido por 4–6 semanas e discussão com equipe de endocardite. Cirurgia urgente se IC, infecção não controlada (abscesso, fungo, germe multirresistente, bacteremia persistente) ou alto risco embólico.",
  clinica: {
    anamnese: [
      "Febre prolongada, calafrios, perda de peso, sudorese, astenia",
      "Valvopatia, prótese valvar, endocardite prévia, cardiopatia congênita, marca-passo/CDI, hemodiálise, cateter venoso",
      "Uso de drogas injetáveis, procedimento dentário ou invasivo recente",
      "Sintomas embólicos: déficit neurológico, dor lombar/abdominal, dor em dedos"
    ],
    exameFisico: [
      "Sopro novo ou mudança de sopro, sinais de IC",
      "Petéquias, hemorragias subungueais, nódulos de Osler, lesões de Janeway, manchas de Roth",
      "Esplenomegalia, baqueteamento",
      "Exame neurológico completo; pele (porta de entrada)"
    ],
    diferenciais: [
      { dx: "Bacteremia sem endocardite", pista: "Ecocardiograma (transesofágico) normal, foco claro, resolução rápida" },
      { dx: "Febre reumática / doença reumática", pista: "Jovem, artrite, ASLO; culturas negativas" },
      { dx: "Endocardite não infecciosa (Libman-Sacks, marântica)", pista: "Lúpus, SAF, neoplasia; culturas negativas" },
      { dx: "Vasculites, linfoma, TB", pista: "Febre prolongada com culturas negativas" }
    ],
    gravidade: [
      "Duke-ISCVID 2023 — maiores: (1) microbiológico: microrganismo típico em ≥ 2 hemoculturas separadas (ou não típico em ≥ 3), ou PCR/sorologia específica (Coxiella IgG fase I > 1:800, Bartonella, Tropheryma); (2) imagem: vegetação, perfuração, abscesso, pseudoaneurisma, fístula, nova deiscência de prótese no eco, TC cardíaca ou PET-CT (prótese > 3 meses); (3) cirúrgico: evidência à inspeção",
      "Menores: predisposição (lesão valvar, prótese, endocardite prévia, UDI, dispositivo), febre ≥ 38 °C, fenômenos vasculares (embolia, infarto séptico, aneurisma micótico, hemorragia intracraniana, Janeway, púrpura conjuntival), fenômenos imunológicos (Osler, Roth, glomerulonefrite, fator reumatoide), evidência microbiológica que não preenche critério maior, sopro de regurgitação novo se eco indisponível",
      "Definida: 2 maiores, ou 1 maior + 3 menores, ou 5 menores. Possível: 1 maior + 1 menor, ou 3 menores",
      "Microrganismos típicos (2023): S. aureus, S. lugdunensis, E. faecalis, estreptococos (exceto S. pneumoniae e S. pyogenes), Granulicatella, Abiotrophia, Gemella, HACEK"
    ]
  },
  exames: [
    {
      nome: "Hemoculturas",
      pedido: "Hemoculturas: 3 pares (aeróbio + anaeróbio), 3 punções venosas periféricas separadas, 8–10 mL por frasco, antes do antibiótico. Repetir 2 pares a cada 24–48 h até negativar.",
      porQue: "Base do diagnóstico e da escolha do antibiótico.",
      esperar: "Positivas em cerca de 90% dos casos sem antibiótico prévio.",
      interpretacao: "Persistência > 7 dias = infecção não controlada.",
      limitacoes: "Antibiótico prévio negativa culturas; culturas negativas: sorologias para Coxiella, Bartonella, Brucella e PCR do tecido valvar."
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico; transesofágico se TT negativo com suspeita persistente, prótese valvar, dispositivo, S. aureus, ou para avaliar complicações.",
      porQue: "Critério maior; complicações e indicação cirúrgica.",
      esperar: "Vegetação, regurgitação nova, abscesso.",
      interpretacao: "Eco negativo com alta suspeita → repetir em 5–7 dias.",
      limitacoes: "TT tem baixa sensibilidade em prótese; considerar TC cardíaca e PET-CT (próteses)."
    },
    {
      nome: "Laboratório e outros",
      pedido: "Hemograma, PCR, VHS, ureia, creatinina, eletrólitos, TGO, TGP, urina tipo 1 (hematúria), coagulograma, HIV, hepatites B e C (UDI), ECG, RX de tórax.",
      porQue: "Gravidade, nefrotoxicidade, complicações.",
      esperar: "Anemia, PCR elevada, hematúria.",
      interpretacao: "PR alargando no ECG → abscesso perivalvar.",
      limitacoes: "—"
    },
    {
      nome: "Imagem de embolias",
      pedido: "TC ou RM de crânio se sintomas neurológicos; TC de abdome se dor abdominal/lombar; angio-TC ou angio-RM se suspeita de aneurisma micótico.",
      porQue: "Complicações que mudam a conduta (tempo de cirurgia, anticoagulação).",
      esperar: "Infartos, abscessos, aneurismas.",
      interpretacao: "AVC hemorrágico adia cirurgia com circulação extracorpórea.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Empírico — valva nativa ou prótese tardia (> 12 meses), comunitária: ampicilina + ceftriaxona",
      linha: "l1",
      dose: "Ampicilina 12 g/dia (2 g 4/4 h) + ceftriaxona 4 g/dia (2 g 12/12 h)",
      via: "IV",
      intervalo: "Ampicilina 4/4 h; ceftriaxona 12/12 h",
      duracao: "Até resultado de culturas; depois esquema dirigido (4–6 semanas)",
      monitorizacao: "Função renal, hemoculturas de controle, febre",
      contraindicacoes: "Alergia grave a betalactâmico (usar vancomicina)",
      ajustes: "Alternativa ESC 2023: ampicilina + oxacilina 12 g/dia (2 g 4/4 h) + gentamicina 3 mg/kg/dia 1×/dia. Ajustar ampicilina e gentamicina à função renal"
    },
    {
      droga: "Empírico — prótese precoce (< 12 meses), nosocomial ou associada a cuidados de saúde: vancomicina + gentamicina (+ rifampicina se prótese)",
      linha: "l1",
      dose: "Vancomicina 30 mg/kg/dia em 2 doses (ataque 25–30 mg/kg se grave) + gentamicina 3 mg/kg/dia; rifampicina 900–1.200 mg/dia em 2–3 doses (iniciar após 3–5 dias, com culturas negativando)",
      via: "IV (rifampicina VO ou IV)",
      intervalo: "Vancomicina 12/12 h; gentamicina 1×/dia",
      duracao: "Até resultado de culturas",
      monitorizacao: "Nível sérico de vancomicina (vale 15–20 mg/L ou AUC), creatinina, audição",
      contraindicacoes: "Gentamicina: DRC grave (avaliar risco/benefício)",
      ajustes: "Daptomicina 10 mg/kg/dia é alternativa à vancomicina em S. aureus/MRSA (ESC 2023). Vancomicina: diluir em 250 mL e infundir em ≥ 1–2 h"
    },
    {
      droga: "Dirigido — S. aureus sensível à oxacilina (valva nativa)",
      linha: "l1",
      dose: "Oxacilina 12 g/dia (2 g 4/4 h) ou cefazolina 6 g/dia (2 g 8/8 h)",
      via: "IV",
      intervalo: "4/4 h (oxacilina) ou 8/8 h (cefazolina)",
      duracao: "4–6 semanas",
      monitorizacao: "Hemoculturas até negativar, função renal e hepática",
      contraindicacoes: "Alergia",
      ajustes: "MRSA: vancomicina ou daptomicina. Prótese: + rifampicina + gentamicina nas 2 primeiras semanas"
    },
    {
      droga: "Dirigido — estreptococos sensíveis à penicilina",
      linha: "l1",
      dose: "Penicilina G cristalina 12–18 milhões UI/dia (em 4–6 doses) ou ceftriaxona 2 g/dia",
      via: "IV",
      intervalo: "4/4 h (penicilina) ou 1×/dia (ceftriaxona)",
      duracao: "4 semanas (valva nativa); 6 semanas (prótese)",
      monitorizacao: "Febre, culturas",
      contraindicacoes: "Alergia (vancomicina)",
      ajustes: "Esquemas de 2 semanas com gentamicina só em casos selecionados não complicados"
    },
    {
      droga: "Dirigido — Enterococcus faecalis",
      linha: "l1",
      dose: "Ampicilina 12 g/dia + ceftriaxona 4 g/dia (2 g 12/12 h)",
      via: "IV",
      intervalo: "Ampicilina 4/4 h; ceftriaxona 12/12 h",
      duracao: "6 semanas",
      monitorizacao: "Função renal",
      contraindicacoes: "—",
      ajustes: "Preferido a ampicilina + gentamicina por menor nefrotoxicidade"
    },
    {
      droga: "Antibiótico oral de consolidação (POET)",
      linha: "alt",
      dose: "Esquema oral combinado definido pela infectologia",
      via: "VO",
      intervalo: "—",
      duracao: "Completa o tempo total",
      monitorizacao: "Seguimento próximo",
      contraindicacoes: "Instabilidade, abscesso, má adesão, má absorção",
      ajustes: "ESC 2023: opção após ≥ 10 dias de IV (≥ 7 dias após cirurgia) em pacientes estáveis com estreptococo, E. faecalis, S. aureus ou SCN sensíveis à meticilina"
    },
    {
      droga: "Anticoagulação e antiagregação para tratar a endocardite",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não iniciar anticoagulante ou AAS para prevenir embolia",
      ajustes: "Quem já usa anticoagulação por outra indicação: discutir com a equipe (suspender/trocar por heparina se AVC)"
    }
  ],
  destino: {
    agora: [
      "Hemoculturas, ecocardiograma, antibiótico empírico se grave",
      "Equipe de endocardite (cardiologia, cirurgia cardíaca, infectologia)"
    ],
    reavaliar: [
      "Hemoculturas a cada 24–48 h até negativar",
      "ECG frequente (BAV), exame neurológico, sinais de IC"
    ],
    alta: [
      "Não há alta do PS com suspeita de endocardite",
      "Alta hospitalar após controle da infecção; antibiótico ambulatorial (OPAT) ou oral só em casos selecionados"
    ],
    observacao: ["—"],
    internacao: [
      "Toda suspeita (Duke possível ou definida)",
      "UTI: choque, IC, embolia cerebral, BAV"
    ],
    transferencia: [
      "Sem cirurgia cardíaca local: transferir precocemente casos com IC, abscesso, prótese, S. aureus, fungo, vegetação grande ou embolia"
    ]
  },
  prescricao: {
    hospitalar: "ENDOCARDITE INFECCIOSA — EMPÍRICO, VALVA NATIVA COMUNITÁRIA (peso: ___ kg; ClCr: ___)\n1. Hemoculturas: 3 pares de punções separadas ANTES da 1ª dose.\n2. Ampicilina 2 g + SF 0,9% 100 mL IV em 30 min de 4/4 h.\n3. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min de 12/12 h.\n4. Dipirona 1 g IV de 6/6 h se febre ou dor.\n5. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV) se sem AVC hemorrágico ou contraindicação.\n6. Ecocardiograma transtorácico (transesofágico se indicado); ECG diário.\n7. Hemoculturas de controle (2 pares) a cada 48 h até negativar. Função renal 2×/semana.\n\nPRÓTESE PRECOCE / NOSOCOMIAL / SUSPEITA DE MRSA\n2'. Vancomicina 15 mg/kg (___ mg) + SF 0,9% 250 mL IV em 2 h de 12/12 h (ataque 25–30 mg/kg na 1ª dose se grave); nível sérico antes da 4ª dose.\n3'. Gentamicina 3 mg/kg (___ mg) + SF 0,9% 100 mL IV em 1 h 1×/dia.\n4'. Prótese: rifampicina 300 mg VO de 8/8 h após 3–5 dias de tratamento.",
    ambulatorial: "PROFILAXIA ANTES DE PROCEDIMENTO DENTÁRIO (só alto risco: prótese valvar ou material protético de reparo, endocardite prévia, cardiopatia congênita cianótica não corrigida ou corrigida com material há < 6 meses ou com lesão residual, transplantado cardíaco com valvopatia, dispositivo de assistência ventricular)\nUSO ORAL\n1. Amoxicilina 500 mg ---------------------------- 4 cápsulas\n   Tomar 4 cápsulas (2 g) juntas 30 a 60 minutos antes do procedimento dentário (criança: 50 mg/kg, máximo 2 g).\nSe alergia à penicilina:\n1. Azitromicina 500 mg -------------------------- 1 comprimido\n   Tomar 1 comprimido 30 a 60 minutos antes do procedimento (criança: 15 mg/kg, máximo 500 mg).\n   (ou) Doxiciclina 100 mg: 1 comprimido 30 a 60 minutos antes (adulto).\n   (ou, se alergia sem anafilaxia/urticária) Cefalexina 2 g VO 30 a 60 minutos antes (criança 50 mg/kg)."
  },
  orientacoesRetorno: [
    "O tratamento com antibiótico na veia é longo (4 a 6 semanas); não interromper",
    "Cuidar dos dentes: escovação, fio dental e dentista a cada 6 meses; avisar o dentista que teve endocardite",
    "Não usar drogas injetáveis; se usar, procurar serviço de redução de danos e CAPS AD",
    "Voltar imediatamente se febre, falta de ar, fraqueza em um lado do corpo, fala enrolada ou dor de cabeça forte",
    "Com prótese valvar ou endocardite prévia: tomar o antibiótico antes de tratamento dentário, conforme receita"
  ],
  fontes: [
    "ESC — Guidelines for the management of endocarditis (2023)",
    "Fowler VG et al. — The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis, Clin Infect Dis (2023)",
    "AHA — Prevention of Viridans Group Streptococcal Infective Endocarditis: Scientific Statement (2021)",
    "AHA — Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications (2015)",
    "SBC — Diretriz Brasileira de Valvopatias (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
