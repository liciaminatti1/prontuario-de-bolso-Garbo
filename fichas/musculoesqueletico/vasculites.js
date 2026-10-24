// Vasculites: suspeita de vasculite sistêmica e arterite de células gigantes
registrarFicha({
  id: "vasculites",
  especialidade: "musculoesqueletico",
  caminho: "ps",
  publico: "adulto",
  titulo: "Vasculites: suspeita de vasculite sistêmica e arterite de células gigantes",
  resumo: "Quando pensar em vasculite (púrpura palpável, mononeurite, glomerulonefrite, hemorragia alveolar, sintomas constitucionais) e como agir na arterite de células gigantes com risco visual. Corticoide não espera biópsia quando há ameaça de órgão.",
  palavrasChave: "vasculite arterite de celulas gigantes arterite temporal horton polimialgia reumatica claudicacao de mandibula amaurose anca granulomatose com poliangeite wegener poliangeite microscopica churg strauss poliarterite nodosa purpura palpavel mononeurite hemorragia alveolar glomerulonefrite pulsoterapia metilprednisolona iga henoch kawasaki takayasu",
  critico: {
    tempo: "Corticoide já se ameaça visual",
    texto: "Suspeita de arterite de células gigantes com sintoma visual: metilprednisolona IV na mesma hora, sem esperar biópsia (que pode ser feita em até 1–2 semanas). Vasculite com rim, pulmão ou nervo: excluir infecção e iniciar pulsoterapia com o reumatologista."
  },
  alarmes: [
    "Perda visual, amaurose fugaz, diplopia em > 50 anos com cefaleia nova",
    "Hemoptise, queda de hemoglobina, infiltrado alveolar (hemorragia alveolar)",
    "Creatinina em ascensão com hematúria e proteinúria (glomerulonefrite rapidamente progressiva)",
    "Pé ou mão caídos súbitos (mononeurite múltipla)",
    "Dor abdominal com sangramento (isquemia mesentérica)",
    "Febre + sopro cardíaco (excluir endocardite antes de imunossuprimir)"
  ],
  condutaInicial: [
    "Avaliar ABC; hemoptise ou hipoxemia → O₂, considerar UTI",
    "Excluir mimetizadores antes de imunossuprimir: endocardite (hemoculturas), sepse, drogas (cocaína com levamisol), hepatite B/C, HIV, neoplasia, embolia de colesterol",
    "Exames: hemograma, creatinina, urina tipo 1 com pesquisa de dismorfismo eritrocitário, relação proteína/creatinina, PCR, VHS, ANCA, FAN, C3, C4, crioglobulinas, sorologias",
    "ACG com sintoma visual: metilprednisolona 500–1.000 mg IV/dia por 3 dias; sem sintoma visual: prednisona 40–60 mg/dia VO",
    "Vasculite com ameaça de órgão (rim, pulmão, SNC, nervo): metilprednisolona IV em pulso e discutir com reumatologia indução (rituximabe ou ciclofosfamida)",
    "Biópsia do órgão acessível (artéria temporal, pele, rim) sem atrasar o corticoide"
  ],
  fataisExcluir: [
    "Cegueira irreversível (ACG)",
    "Hemorragia alveolar difusa",
    "Glomerulonefrite rapidamente progressiva",
    "Endocardite infecciosa (mimetizador clássico)",
    "Aneurisma/dissecção de aorta (ACG, Takayasu)"
  ],
  proximaDecisao: "ACG: biópsia de artéria temporal ou USG Doppler (sinal do halo) em até 1–2 semanas do corticoide; encaminhar à reumatologia e oftalmologia. Vasculite ANCA ou com ameaça de órgão: internação com reumatologia/nefrologia para indução. Criança com febre ≥ 5 dias e conjuntivite, mucosite, exantema, alteração de extremidades e linfonodo: pensar Kawasaki (ficha de pediatria, se disponível) — IGIV e ecocardiograma.",
  clinica: {
    anamnese: [
      "ACG: idade ≥ 50 anos, cefaleia nova (temporal), dor no couro cabeludo ao pentear, claudicação de mandíbula, sintomas visuais, dor e rigidez de cintura escapular/pélvica (polimialgia), febre e perda de peso",
      "Sinusite crônica, crostas e sangramento nasal, otite, hemoptise (granulomatose com poliangeite)",
      "Asma de início tardio, eosinofilia, rinite (granulomatose eosinofílica)",
      "Púrpura nas pernas, artralgia, dor abdominal, hematúria (vasculite por IgA, crioglobulinemia)",
      "Dormência ou fraqueza súbita em território de um nervo (mononeurite)",
      "Medicamentos (hidralazina, propiltiouracil, minociclina), cocaína, hepatites B/C"
    ],
    exameFisico: [
      "Artéria temporal endurecida, dolorosa, com pulso diminuído",
      "Acuidade visual e fundo de olho (neuropatia óptica isquêmica: disco pálido e edemaciado)",
      "PA e pulsos nos 4 membros, sopros (Takayasu, ACG de grandes vasos)",
      "Pele: púrpura palpável, livedo, nódulos, úlceras, necrose digital",
      "Exame neurológico periférico; ausculta pulmonar; cartilagem nasal (nariz em sela)"
    ],
    diferenciais: [
      { dx: "Endocardite infecciosa", pista: "Febre, sopro, hemoculturas positivas, fenômenos embólicos" },
      { dx: "LES / SAF", pista: "FAN e anti-DNA positivos, complemento baixo; trombose" },
      { dx: "Embolia de colesterol", pista: "Após cateterismo, livedo, eosinofilia, complemento baixo" },
      { dx: "Levamisol (cocaína)", pista: "Púrpura retiforme em orelhas, ANCA atípico" },
      { dx: "Enxaqueca / arterite × cefaleia secundária", pista: "VHS e PCR normais tornam ACG muito improvável" },
      { dx: "Mieloma, linfoma", pista: "Sintomas B, gamopatia, anemia" }
    ],
    gravidade: [
      "Ameaça de órgão ou vida: rim (GNRP), pulmão (hemorragia), SNC, olho, intestino, coração, mononeurite",
      "ACG — classificação ACR/EULAR 2022: critério de entrada idade ≥ 50 anos; pontuação ≥ 6 (ex.: VHS ≥ 50 ou PCR ≥ 10 mg/L, cefaleia, claudicação de mandíbula, perda visual, biópsia/halo positivos)",
      "Vasculite por IgA (Henoch-Schönlein) em criança: geralmente autolimitada; gravidade por rim e abdome"
    ]
  },
  exames: [
    {
      nome: "Inflamação e órgão-alvo",
      pedido: "Hemograma, VHS, PCR, ureia, creatinina, sódio, potássio, TGO, TGP, CK, urina tipo 1 com pesquisa de dismorfismo eritrocitário, relação proteína/creatinina em amostra isolada.",
      porQue: "Medir atividade e envolvimento renal.",
      esperar: "VHS e PCR elevados; hematúria dismórfica e cilindros hemáticos na glomerulonefrite.",
      interpretacao: "ACG com VHS e PCR normais é rara. Sedimento ativo = glomerulonefrite até prova em contrário.",
      limitacoes: "Marcadores inflamatórios inespecíficos."
    },
    {
      nome: "Imunologia",
      pedido: "ANCA (imunofluorescência e ELISA anti-PR3 e anti-MPO), FAN, anti-DNA, C3, C4, fator reumatoide, crioglobulinas, eletroforese de proteínas, anti-MBG.",
      porQue: "Classificar a vasculite.",
      esperar: "PR3 na granulomatose com poliangeite; MPO na poliangeite microscópica.",
      interpretacao: "ANCA negativo não exclui vasculite. Complemento baixo sugere LES, crioglobulinemia ou endocardite.",
      limitacoes: "Resultado demora; não atrasar tratamento em ameaça de órgão."
    },
    {
      nome: "Infecções e mimetizadores",
      pedido: "Hemoculturas (3 amostras), HBsAg, anti-HCV, anti-HIV, VDRL; ecocardiograma se sopro ou febre.",
      porQue: "Excluir endocardite e vasculites secundárias antes de imunossuprimir.",
      esperar: "Negativos.",
      interpretacao: "Hepatite B com poliarterite nodosa e hepatite C com crioglobulinemia mudam o tratamento.",
      limitacoes: "—"
    },
    {
      nome: "Imagem e biópsia",
      pedido: "Radiografia (ou TC) de tórax. USG Doppler de artérias temporais e axilares (sinal do halo) e/ou biópsia de artéria temporal (≥ 1 cm). Biópsia de pele (lesão < 48 h) ou renal conforme o caso.",
      porQue: "Confirmar a vasculite.",
      esperar: "Halo hipoecoico; infiltrado granulomatoso na biópsia.",
      interpretacao: "Biópsia permanece positiva por 1–2 semanas (ou mais) após o corticoide.",
      limitacoes: "Biópsia temporal tem lesões salteadas (falso-negativo)."
    }
  ],
  tratamento: [
    {
      droga: "Metilprednisolona (pulsoterapia)",
      linha: "l1",
      dose: "500–1.000 mg",
      via: "IV, diluída em 250 mL de SG 5% ou SF 0,9% em 1–3 h",
      intervalo: "1×/dia",
      duracao: "3 dias, depois prednisona VO",
      monitorizacao: "Glicemia, PA, potássio, sintomas psiquiátricos",
      contraindicacoes: "Infecção não controlada (relativa)",
      ajustes: "ACG com perda visual/amaurose e vasculite com ameaça de órgão. Antes de corticoide em dose alta: ivermectina 200 mcg/kg VO dose única (estrongiloidíase), especialmente em área endêmica"
    },
    {
      droga: "Prednisona",
      linha: "l1",
      dose: "ACG sem sintoma visual: 40–60 mg/dia. Vasculite ANCA após pulso: conforme reumatologia (esquema de dose reduzida, PEXIVAS)",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "ACG: redução gradual; alvo 15–20 mg/dia em 2–3 meses e ≤ 5 mg/dia após 1 ano (EULAR 2018)",
      monitorizacao: "PA, glicemia, densitometria",
      contraindicacoes: "—",
      ajustes: "Associar cálcio, vitamina D e bisfosfonato (prevenção de osteoporose); IBP se risco GI; profilaxia de Pneumocystis (sulfametoxazol-trimetoprima 400/80 mg 1×/dia ou 800/160 mg 3×/semana) se dose alta prolongada com outro imunossupressor"
    },
    {
      droga: "Rituximabe ou ciclofosfamida (indução — especialista)",
      linha: "adj",
      dose: "Conforme reumatologia/nefrologia",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Hemograma, infecções",
      contraindicacoes: "Infecção ativa, hepatite B ativa",
      ajustes: "Vasculite ANCA grave. Tocilizumabe reduz recidiva e corticoide na ACG (decisão do especialista)"
    },
    {
      droga: "Ácido acetilsalicílico",
      linha: "adj",
      dose: "100 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Individualizar",
      monitorizacao: "Sangramento",
      contraindicacoes: "Úlcera ativa",
      ajustes: "Não é rotina na ACG (EULAR 2018); só se outra indicação cardiovascular"
    }
  ],
  destino: {
    agora: ["Pulsoterapia se ameaça visual ou de órgão; excluir infecção"],
    reavaliar: ["Acuidade visual diária na ACG; creatinina e hemoglobina diárias na vasculite renal/pulmonar"],
    alta: ["ACG sem sintoma visual, com prednisona VO, biópsia/USG agendada e reumatologia em até 1–2 semanas"],
    observacao: ["—"],
    internacao: ["ACG com sintoma visual; vasculite com rim, pulmão, SNC, intestino ou mononeurite; UTI se hemorragia alveolar"],
    transferencia: ["Sem reumatologia, nefrologia ou hemodiálise: transferir após 1ª dose de corticoide e coleta de exames"]
  },
  prescricao: {
    hospitalar: "SUSPEITA DE ARTERITE DE CÉLULAS GIGANTES COM SINTOMA VISUAL / VASCULITE COM AMEAÇA DE ÓRGÃO (peso: ___ kg)\n1. Dieta para diabético se hiperglicemia; senão dieta livre.\n2. Colher hemoculturas, VHS, PCR, ANCA, FAN, C3, C4, sorologias ANTES do pulso (não atrasar o pulso).\n3. Ivermectina 6 mg — ___ comprimidos VO dose única (200 mcg/kg).\n4. Metilprednisolona 1.000 mg (ou 500 mg) IV em 250 mL de SG 5% em 2 h, 1×/dia por 3 dias.\n5. Omeprazol 20 mg VO em jejum 1×/dia.\n6. Glicemia capilar de 6/6 h; insulina regular conforme esquema.\n7. PA de 4/4 h; potássio diário.\n8. Após o pulso: prednisona 1 mg/kg/dia (máx. 60 mg) VO pela manhã, conforme reumatologia.\n9. Avaliação oftalmológica (ACG) e reumatológica.\n10. Agendar biópsia de artéria temporal ou USG Doppler em até 1–2 semanas.",
    ambulatorial: "ACG SEM SINTOMA VISUAL\nUSO ORAL\n1. Prednisona 20 mg -------------------------------- 90 comprimidos\n   Tomar 2 a 3 comprimidos (40–60 mg) juntos pela manhã, todos os dias, até a consulta com o reumatologista. Não parar de repente.\n2. Omeprazol 20 mg --------------------------------- 30 cápsulas\n   Tomar 1 cápsula em jejum por dia.\n3. Carbonato de cálcio 500 mg + colecalciferol 400 UI --- 60 comprimidos\n   Tomar 1 comprimido 2 vezes ao dia.\n4. Ivermectina 6 mg -------------------------------- ___ comprimidos\n   Tomar ___ comprimidos de uma vez (200 mcg/kg), dose única, antes de começar a prednisona."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se visão borrada, perder a visão (mesmo por minutos), visão dupla, dor forte de cabeça ou fraqueza de um lado do corpo",
    "Não interromper a prednisona por conta própria",
    "Medir glicemia e pressão na UBS durante o uso de corticoide",
    "Reumatologia em até 1–2 semanas; levar os exames e o resultado da biópsia"
  ],
  tabelas: [
    {
      titulo: "Pistas de vasculite por tamanho de vaso",
      colunas: ["Vaso", "Doenças", "Pistas clínicas"],
      linhas: [
        ["Grande", "Arterite de células gigantes, Takayasu", "> 50 anos e cefaleia (ACG); < 40 anos, mulher, assimetria de pulsos e PA (Takayasu)"],
        ["Médio", "Poliarterite nodosa, Kawasaki", "Mononeurite, HAS, dor abdominal, hepatite B (PAN); criança com febre prolongada (Kawasaki)"],
        ["Pequeno — ANCA", "Granulomatose com poliangeite, poliangeite microscópica, granulomatose eosinofílica", "Vias aéreas superiores, pulmão, rim; asma e eosinofilia"],
        ["Pequeno — imunocomplexo", "Vasculite por IgA, crioglobulinemia, vasculite urticariforme, anti-MBG", "Púrpura palpável, artralgia, glomerulonefrite; hepatite C"]
      ],
      nota: "Classificação de Chapel Hill (2012)."
    }
  ],
  fontes: [
    "EULAR — Recommendations for the management of large vessel vasculitis (2018) e uso de imagem (2023)",
    "ACR/Vasculitis Foundation — Guideline for the management of giant cell arteritis and Takayasu arteritis (2021)",
    "ACR/EULAR — Classification criteria for giant cell arteritis (2022)",
    "EULAR — Recommendations for the management of ANCA-associated vasculitis (2022)",
    "KDIGO — Clinical Practice Guideline for the management of ANCA-associated vasculitis (2024)",
    "Jennette JC et al. — Revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
