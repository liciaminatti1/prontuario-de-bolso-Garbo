// Nódulo pulmonar incidental e suspeita de câncer de pulmão
registrarFicha({
  id: "nodulo-cancer-pulmao",
  especialidade: "pneumologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Nódulo pulmonar incidental e suspeita de câncer de pulmão",
  resumo: "Conduta diante de nódulo pulmonar achado em TC (Fleischner 2017) e de sinais de câncer de pulmão na APS: o que seguir com TC, o que encaminhar e com que prioridade. Rastreio com TC de baixa dose: ver ficha rastreio-cancer.",
  palavrasChave: "nodulo pulmonar incidental fleischner vidro fosco subsolido parcialmente solido espiculado cancer de pulmao neoplasia pulmonar carcinoma tabagismo tc baixa dose lung-rads rastreio pet-ct biopsia hemoptise massa pulmonar",
  alarmes: [
    "Hemoptise em tabagista ou ex-tabagista",
    "Síndrome da veia cava superior (edema de face e braços, circulação colateral) — ver sindrome-veia-cava-superior",
    "Estridor, rouquidão persistente, disfagia",
    "Hipercalcemia ou hiponatremia sem causa (síndrome paraneoplásica)",
    "Dor óssea, déficit neurológico, cefaleia nova (metástase; compressão medular — ver compressao-medular-maligna)",
    "Massa > 3 cm, nódulo que cresce ou componente sólido que surge em lesão em vidro fosco"
  ],
  conduta: [
    "Nódulo = opacidade arredondada ≤ 3 cm; > 3 cm = massa (tratar como suspeita de câncer)",
    "Comparar com exames antigos: nódulo sólido estável por 2 anos (ou subsólido por 5 anos) é benigno na prática",
    "Calcificação benigna (central, difusa, laminada, em pipoca) ou gordura (hamartoma): não precisa seguimento",
    "Classificar risco do paciente: alto se tabagismo (atual ou passado), exposição a amianto, radônio, sílica ou urânio, câncer de pulmão em parente de 1º grau, enfisema ou fibrose, idade avançada",
    "Classificar o nódulo: sólido x subsólido (vidro fosco puro ou parcialmente sólido), único x múltiplos, tamanho (média dos eixos longo e curto, em mm), espiculação, lobo superior",
    "Aplicar a tabela de Fleischner (só para achado incidental em ≥ 35 anos, sem câncer conhecido e sem imunossupressão)",
    "Nódulo > 8 mm, sólido com componente ≥ 6 mm, crescimento ou aspecto suspeito → pneumologia/cirurgia torácica com prioridade (PET-CT, biópsia ou ressecção)",
    "Não usar Fleischner em: rastreamento (usar Lung-RADS), paciente oncológico (estadiamento), imunossuprimido (infecção), < 35 anos (causa infecciosa mais provável)",
    "No Brasil, nódulo em área endêmica pode ser granuloma (TB, histoplasmose, paracoccidioidomicose): investigar TB se sintomas, mas não atrasar investigação de nódulo suspeito",
    "Suspeita clínica de câncer (tosse persistente > 3 semanas em tabagista, hemoptise, perda de peso, rouquidão, baqueteamento, pneumonia que não resolve): RX de tórax e TC de tórax com contraste; RX normal não exclui",
    "Encaminhar via regulação como suspeita de câncer (prioridade) e oferecer cessação do tabagismo (ver tabagismo)",
    "Rastreamento em assintomáticos de 50–80 anos com ≥ 20 maços-ano: ver rastreio-cancer"
  ],
  exames: [
    "TC de tórax de controle: 'Tomografia computadorizada de tórax sem contraste, baixa dose, cortes finos (≤ 1,5 mm). Indicação: controle de nódulo pulmonar ___ mm em ___ (data da TC anterior ___).'",
    "Suspeita de câncer: 'Tomografia computadorizada de tórax com contraste (incluir abdome superior/adrenais). Indicação: suspeita de neoplasia pulmonar.'",
    "Hemograma, cálcio, sódio, creatinina, TGO, TGP, fosfatase alcalina, DHL",
    "Escarro: BAAR e teste rápido molecular para TB se tosse produtiva",
    "PET-CT, broncoscopia, biópsia percutânea, EBUS: pelo especialista",
    "Calculadoras de risco (Brock/PanCan, Mayo) ajudam na decisão do especialista em nódulos ≥ 8 mm"
  ],
  diferenciais: [
    "Granuloma (tuberculose, histoplasmose, paracoccidioidomicose)",
    "Hamartoma",
    "Linfonodo intrapulmonar (perifissural, triangular)",
    "Metástase de outro tumor",
    "Pneumonia redonda, infarto pulmonar, nódulo reumatoide, granulomatose com poliangiite",
    "Malformação arteriovenosa"
  ],
  tabelas: [
    {
      titulo: "Fleischner 2017 — nódulo sólido incidental",
      colunas: ["Tamanho", "Baixo risco", "Alto risco"],
      linhas: [
        ["Único < 6 mm", "Sem seguimento", "TC opcional em 12 meses"],
        ["Único 6–8 mm", "TC em 6–12 meses; considerar nova em 18–24 meses", "TC em 6–12 meses e de novo em 18–24 meses"],
        ["Único > 8 mm", "Considerar TC em 3 meses, PET-CT ou biópsia", "Considerar TC em 3 meses, PET-CT ou biópsia"],
        ["Múltiplos < 6 mm", "Sem seguimento", "TC opcional em 12 meses"],
        ["Múltiplos 6–8 mm", "TC em 3–6 meses; considerar nova em 18–24 meses", "TC em 3–6 meses e de novo em 18–24 meses"],
        ["Múltiplos > 8 mm", "TC em 3–6 meses; considerar nova em 18–24 meses", "TC em 3–6 meses e de novo em 18–24 meses"]
      ],
      nota: "Nos múltiplos, conduzir pelo nódulo mais suspeito. Nódulo < 6 mm com morfologia suspeita ou em lobo superior em paciente de alto risco pode justificar TC em 12 meses."
    },
    {
      titulo: "Fleischner 2017 — nódulo subsólido incidental",
      colunas: ["Tipo", "< 6 mm", "≥ 6 mm"],
      linhas: [
        ["Vidro fosco puro, único", "Sem seguimento de rotina", "TC em 6–12 meses para confirmar persistência; depois a cada 2 anos até 5 anos"],
        ["Parcialmente sólido, único", "Sem seguimento de rotina", "TC em 3–6 meses; se persistente e componente sólido < 6 mm, TC anual por 5 anos; componente sólido ≥ 6 mm = muito suspeito (especialista)"],
        ["Subsólidos múltiplos", "TC em 3–6 meses; se estável, considerar TC em 2 e 4 anos", "TC em 3–6 meses; conduta pelo nódulo mais suspeito"]
      ],
      nota: "Lesão em vidro fosco persistente pode ser adenocarcinoma de crescimento lento; aumento de tamanho ou surgimento de componente sólido indica avaliação para ressecção."
    }
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — NÓDULO PULMONAR\n- Tomografia computadorizada de tórax sem contraste, protocolo de baixa dose e cortes finos (≤ 1,5 mm). Indicação: controle de nódulo pulmonar ___ (sólido/vidro fosco/parcialmente sólido) de ___ mm em lobo ___, identificado em ___/___/___. Comparar com exame anterior.\n\nPEDIDO DE EXAMES — SUSPEITA DE CÂNCER DE PULMÃO\n- Tomografia computadorizada de tórax com contraste, incluindo abdome superior. Indicação: ___ (hemoptise / massa no RX / tosse persistente em tabagista ___ maços-ano).\n- Hemograma, sódio, potássio, cálcio, creatinina, TGO, TGP, fosfatase alcalina, DHL.\n\nENCAMINHAMENTO\nPneumologia / cirurgia torácica — PRIORIDADE: suspeita de neoplasia pulmonar. Nódulo/massa de ___ mm, características: ___. Tabagismo: ___ maços-ano. Sintomas: ___."
  },
  orientacoesRetorno: [
    "A maioria dos nódulos pequenos é benigna (cicatriz ou infecção antiga), mas o controle com tomografia na data certa é essencial",
    "Guardar todas as tomografias e laudos e levar em todas as consultas",
    "Parar de fumar é a medida mais importante; a UBS oferece tratamento gratuito",
    "Voltar antes se tosse com sangue, perda de peso sem explicação, rouquidão que não passa, falta de ar ou dor no peito persistente"
  ],
  encaminhar: [
    "Pneumologia ou cirurgia torácica com prioridade: nódulo sólido > 8 mm, subsólido com componente sólido ≥ 6 mm, nódulo em crescimento, massa, ou suspeita clínica de câncer",
    "Oncologia: diagnóstico histológico confirmado",
    "PS: hemoptise volumosa, síndrome da veia cava superior, compressão medular, estridor",
    "Ambulatório de tabagismo: todos os fumantes"
  ],
  fontes: [
    "MacMahon H et al. — Guidelines for Management of Incidental Pulmonary Nodules Detected on CT Images: Fleischner Society 2017 (Radiology, 2017)",
    "ACR — Lung-RADS v2022 (2022)",
    "BTS — Guidelines for the investigation and management of pulmonary nodules (Thorax, 2015)",
    "USPSTF — Screening for Lung Cancer (JAMA, 2021)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
