// Tumores de pele: carcinoma basocelular, espinocelular, melanoma e ceratose actínica
registrarFicha({
  id: "tumores-pele",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Câncer de pele: basocelular, espinocelular, melanoma e ceratose actínica",
  resumo: "Reconhecer lesões suspeitas (ABCDE, 'patinho feio', lesão que não cicatriza), quando biopsiar e como (excisional na suspeita de melanoma), margens cirúrgicas de referência, tratamento da ceratose actínica na APS e fotoproteção. Carcinoma basocelular é o mais comum; melanoma é o mais letal.",
  palavrasChave: "cancer de pele carcinoma basocelular cbc espinocelular cec epidermoide melanoma abcde patinho feio dermatoscopia biopsia excisional breslow margem linfonodo sentinela ceratose actinica queratose solar campo de cancerizacao crioterapia fluoruracila 5 fu imiquimode fotoprotecao protetor solar bowen nevo displasico",
  alarmes: [
    "Pinta nova ou que muda de tamanho, cor ou forma em adulto; lesão diferente das outras ('patinho feio')",
    "Lesão pigmentada com ABCDE positivo, que sangra, coça ou ulcera",
    "Nódulo de crescimento rápido (semanas), pigmentado ou não (melanoma nodular, ceratoacantoma/CEC)",
    "Ferida em área exposta ao sol que não cicatriza em 4–6 semanas, ou sangra com facilidade",
    "Lesão em cicatriz antiga, queimadura ou úlcera crônica (úlcera de Marjolin)",
    "Faixa pigmentada na unha que se alarga ou pigmenta a pele vizinha (sinal de Hutchinson: melanoma acral)",
    "Linfonodo aumentado próximo a lesão suspeita ou tratada; imunossuprimido/transplantado com lesões múltiplas"
  ],
  conduta: [
    "Examinar toda a pele (couro cabeludo, plantas, unhas, mucosas, região genital) com boa luz; dermatoscópio se disponível",
    "Suspeita de melanoma: biópsia EXCISIONAL com margem de 1–3 mm, incluindo subcutâneo, orientada no eixo da drenagem linfática (membros: longitudinal); não fazer shaving nem cauterizar",
    "Lesão grande ou em face/acral com suspeita de melanoma: biópsia incisional/punch da área mais suspeita pelo especialista é aceitável",
    "Suspeita de basocelular ou espinocelular: biópsia (punch, incisional ou excisional) antes do tratamento definitivo, exceto quando a excisão já for o tratamento",
    "Laudo de melanoma: anotar espessura de Breslow, ulceração, mitoses e margens → encaminhar à dermatologia/cirurgia oncológica para ampliação de margens e decisão sobre linfonodo sentinela",
    "Basocelular de baixo risco: excisão com margem de 4 mm; alternativas no superficial (imiquimode, crioterapia, curetagem) pelo especialista. Alto risco (face central, recidivado, > 2 cm, subtipo agressivo): cirurgia micrográfica de Mohs ou margens maiores",
    "Espinocelular de baixo risco: excisão com margem de 4–6 mm; alto risco (> 2 cm, lábio/orelha, invasão perineural, imunossuprimido): especialista",
    "Ceratose actínica (lesão áspera, eritematosa, em área de sol): crioterapia para lesões isoladas; 5-fluoruracila ou imiquimode para campo com várias lesões; biopsiar se espessa, dolorosa, que não responde ou cresce",
    "Fotoproteção para todos: protetor FPS ≥ 30 diário, chapéu e roupas, evitar sol das 10 às 16 h; não usar bronzeamento artificial",
    "Seguimento após câncer de pele: exame de toda a pele a cada 6–12 meses (melanoma: a cada 3–6 meses nos primeiros anos, pelo especialista); ensinar autoexame"
  ],
  exames: [
    "Anatomopatológico da biópsia (sempre)",
    "Melanoma ≥ estádio II ou com linfonodo: estadiamento pelo especialista (USG de linfonodos, TC ou PET-CT, LDH)",
    "Espinocelular de alto risco: USG de cadeia linfonodal",
    "Imunossuprimido com lesões múltiplas: dermatologia para seguimento frequente"
  ],
  diferenciais: [
    "Ceratose seborreica (aspecto 'colado', cistos de mílio na dermatoscopia)",
    "Nevo melanocítico comum ou displásico, lentigo solar",
    "Dermatofibroma (sinal da covinha), hemangioma, granuloma piogênico",
    "Ceratoacantoma (cresce rápido com cratera central — tratar como CEC)",
    "Hiperplasia sebácea, molusco contagioso, verruga vulgar"
  ],
  tabelas: [
    {
      titulo: "ABCDE do melanoma (e sinais extras)",
      colunas: ["Letra", "Significado"],
      linhas: [
        ["A — Assimetria", "Metades diferentes"],
        ["B — Bordas", "Irregulares, mal definidas, entalhadas"],
        ["C — Cor", "Várias cores (marrom, preto, azul, vermelho, branco)"],
        ["D — Diâmetro", "> 6 mm (melanoma pode ser menor)"],
        ["E — Evolução", "Mudança de tamanho, forma, cor, sangramento ou prurido"],
        ["Patinho feio", "Lesão diferente das outras pintas do paciente"],
        ["EFG (nodular)", "Elevado, Firme, crescimento (Growing) progressivo por > 1 mês"]
      ]
    },
    {
      titulo: "Margens cirúrgicas de referência",
      colunas: ["Tumor", "Margem clínica", "Observação"],
      linhas: [
        ["Melanoma in situ", "0,5–1 cm", "Lentigo maligno pode precisar de margem maior"],
        ["Melanoma Breslow ≤ 1 mm", "1 cm", "Linfonodo sentinela discutido se > 0,8 mm ou ulcerado"],
        ["Melanoma Breslow 1,01–2 mm", "1–2 cm", "Linfonodo sentinela indicado"],
        ["Melanoma Breslow > 2 mm", "2 cm", "Linfonodo sentinela indicado; avaliar adjuvância"],
        ["Basocelular de baixo risco", "4 mm", "Alto risco: Mohs ou margens maiores"],
        ["Espinocelular de baixo risco", "4–6 mm", "Alto risco: 6 mm ou mais / Mohs"]
      ],
      nota: "Margens da ampliação do melanoma são definidas após o laudo da biópsia (Breslow). Referência: NCCN/SBD/SBCO."
    }
  ],
  tratamento: [
    {
      droga: "Crioterapia com nitrogênio líquido",
      linha: "l1",
      dose: "Congelamento de 5–10 s por lesão (ceratose actínica)",
      via: "Tópica (spray ou sonda)",
      intervalo: "Dose única; repetir em 4–6 semanas se persistir",
      duracao: "—",
      monitorizacao: "Bolha, hipopigmentação",
      contraindicacoes: "Lesão suspeita de carcinoma (biopsiar antes), crioglobulinemia",
      ajustes: "Melhor para poucas lesões"
    },
    {
      droga: "Fluoruracila 5% creme",
      linha: "l1",
      dose: "Camada fina sobre a área",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "2–4 semanas (face: em geral 2–3)",
      monitorizacao: "Eritema, crostas e erosões são esperados (reação terapêutica)",
      contraindicacoes: "Gestação, deficiência de DPD",
      ajustes: "Para campo de cancerização com múltiplas ceratoses; evitar sol durante o uso"
    },
    {
      droga: "Imiquimode 5% creme",
      linha: "alt",
      dose: "1 sachê na área à noite, lavar após ~8 h",
      via: "Tópica",
      intervalo: "3 vezes por semana (ceratose actínica); 5 vezes por semana (basocelular superficial)",
      duracao: "4 semanas (ceratose); 6 semanas (basocelular superficial, por indicação do especialista)",
      monitorizacao: "Reação inflamatória local, sintomas gripais",
      contraindicacoes: "Gestação (dados limitados)",
      ajustes: "Basocelular superficial só com confirmação histológica e acompanhamento"
    }
  ],
  prescricao: {
    ambulatorial: "CERATOSE ACTÍNICA — CAMPO DE CANCERIZAÇÃO\nUSO TÓPICO\n1. Fluoruracila 5% creme ------------------------------ 1 bisnaga\n   Aplicar fina camada nas áreas afetadas, 2 vezes ao dia, por 2 a 4 semanas. Lavar as mãos após. Vermelhidão e casquinhas são esperadas.\n   (Alternativa: Imiquimode 5% creme — 1 sachê à noite, 3 vezes por semana, por 4 semanas; lavar pela manhã.)\n2. Protetor solar FPS 30 ou mais ------------------------- uso contínuo\n   Aplicar no rosto, orelhas, pescoço, colo, braços e mãos todas as manhãs e reaplicar a cada 2 a 3 horas se ao sol.\n\nSOLICITAÇÃO / PROCEDIMENTO\nBiópsia ___ (excisional com margem de 2 mm / punch / incisional) de lesão ___ em ___ (local), ___ mm. Hipótese: ___ (melanoma / CBC / CEC). Enviar para anatomopatológico em formol 10%.\n\nENCAMINHAMENTO\nDermatologia ___ (prioridade se suspeita de melanoma ou CEC) — lesão ___ em ___, ___ mm, evolução ___ meses, ABCDE: ___. Laudo: ___."
  },
  orientacoesRetorno: [
    "Usar protetor solar todo dia, chapéu e roupa; evitar sol das 10 às 16 horas",
    "Olhar a pele uma vez por mês, com espelho ou ajuda de alguém; trazer foto de pintas para comparar",
    "Procurar a UBS se uma pinta mudar de tamanho, cor ou forma, sangrar ou coçar, ou se uma ferida não fechar em 1 mês",
    "Com o creme de fluoruracila, a pele fica vermelha e com casquinhas: é esperado; procurar a UBS se ficar muito dolorida ou com pus",
    "Câncer de pele tratado pede revisão da pele inteira pelo menos 1 vez por ano"
  ],
  encaminhar: [
    "Dermatologia com prioridade: suspeita de melanoma (se não for possível biopsiar com segurança na UBS), CEC de crescimento rápido",
    "Dermatologia/cirurgia oncológica: melanoma confirmado (ampliação e linfonodo sentinela), CBC ou CEC de alto risco (face central, pálpebra, lábio, orelha, > 2 cm, recidiva)",
    "Dermatologia eletiva: ceratoses que não respondem, múltiplos nevos atípicos, história familiar de melanoma",
    "Oncologia: melanoma estádio III–IV ou CEC avançado"
  ],
  fontes: [
    "INCA/Ministério da Saúde — Detecção precoce do câncer (2021)",
    "British Association of Dermatologists — Guidelines for the management of adults with basal cell carcinoma (2021)",
    "NCCN Guidelines — Melanoma: Cutaneous; Basal Cell Skin Cancer; Squamous Cell Skin Cancer (2025)",
    "European consensus-based interdisciplinary guideline for melanoma (EADO/EDF/EORTC, 2022/2024)",
    "British Association of Dermatologists — Guidelines for the care of patients with actinic keratosis (2017)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
