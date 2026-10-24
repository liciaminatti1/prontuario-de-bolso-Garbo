// Paracentese diagnóstica e de alívio
registrarFicha({
  id: "paracentese",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Paracentese diagnóstica e de alívio",
  resumo: "Punção da cavidade peritoneal para análise da ascite (toda internação ou piora do cirrótico) ou retirada de grande volume para alívio, com reposição de albumina quando acima de 5 L.",
  palavrasChave: "paracentese puncao abdominal ascite cirrose peritonite bacteriana espontanea pbe gasa gradiente albumina soro ascite polimorfonucleares albumina humana 20 por cento paracentese de alivio grande volume",
  critico: {
    tempo: "PBE: punção antes do antibiótico",
    texto: "Todo cirrótico com ascite que interna, piora, tem febre, dor abdominal, encefalopatia ou lesão renal deve ter paracentese diagnóstica sem atraso. Não é preciso corrigir RNI nem plaquetas de rotina (AASLD 2021). Acima de 5 L retirados, repor albumina 6–8 g por litro retirado."
  },
  alarmes: [
    "Líquido hemorrágico que não clareia, hipotensão ou queda de hemoglobina: sangramento de vaso da parede (artéria epigástrica) ou varizes",
    "Polimorfonucleares ≥ 250/mm³ no líquido: peritonite bacteriana espontânea — iniciar antibiótico e albumina",
    "Hipotensão, oligúria ou piora da creatinina após grande volume: disfunção circulatória pós-paracentese",
    "Coagulação intravascular disseminada clínica ou hiperfibrinólise (sangramento difuso): não puncionar sem discutir",
    "Vazamento persistente de líquido pelo orifício"
  ],
  indicacoes: [
    "Ascite nova (diagnóstica: causa da ascite)",
    "Cirrótico com ascite internado por qualquer motivo, ou com febre, dor abdominal, encefalopatia, sangramento digestivo, lesão renal aguda ou piora clínica (pesquisar PBE)",
    "Ascite tensa ou refratária com desconforto respiratório ou abdominal (alívio)",
    "Antes de outros procedimentos quando a ascite atrapalha"
  ],
  contraindicacoes: [
    "Coagulação intravascular disseminada clinicamente evidente ou fibrinólise primária",
    "Infecção ou hematoma na parede no local escolhido (escolher outro ponto)",
    "Obstrução intestinal com alças distendidas, gestação, aderências extensas: guiar por USG e escolher ponto seguro",
    "Ascite mínima sem janela ao USG",
    "RNI alargado e plaquetopenia da cirrose NÃO contraindicam e não exigem plasma ou plaquetas de rotina (AASLD 2021)"
  ],
  materiais: [
    "USG à beira-leito (recomendado para marcar o ponto e evitar vasos e alças)",
    "Luvas estéreis, máscara, gorro, campo fenestrado, clorexidina alcoólica 2%",
    "Lidocaína 1% ou 2% sem vasoconstritor, seringa de 10 mL, agulhas 25×7 e 40×12",
    "Diagnóstica: agulha 20–22G (40×12 ou 30×8) e seringa de 20–60 mL",
    "Alívio: cateter sobre agulha 14–16G (ou agulha de paracentese própria), equipo, frascos a vácuo ou bolsa coletora",
    "Frascos: tubo seco (albumina, proteína total, glicose, LDH, amilase), EDTA (celularidade com diferencial), frascos de hemocultura aeróbio e anaeróbio (inocular 10 mL cada à beira-leito), citologia oncótica se suspeita",
    "Albumina humana 20% (frasco de 50 mL = 10 g) se previsão de mais de 5 L",
    "Curativo estéril; bolsa de colostomia se vazamento"
  ],
  checagemAntes: [
    "Identificação e indicação; consentimento (verbal ou escrito)",
    "Alergias",
    "Plaquetas e RNI para registro (não para adiar); suspender só se CIVD ou fibrinólise",
    "Esvaziar a bexiga (pedir para urinar ou sondar se retenção)",
    "USG: maior bolsão, distância de alças, ausência de vasos na parede no trajeto",
    "Albumina disponível se alívio de grande volume",
    "Time-out: paciente, lado, ponto, frascos"
  ],
  passos: [
    { etapa: "Posição e escolha do ponto", itens: [
      "Decúbito dorsal com cabeceira levemente elevada ou inclinado para o lado da punção",
      "Ponto preferido: quadrante inferior esquerdo, cerca de 3 cm medial e 3 cm cranial à espinha ilíaca anterossuperior, lateral à borda do reto abdominal (evita a artéria epigástrica inferior)",
      "Alternativa: linha média, 2 cm abaixo da cicatriz umbilical (evitar se circulação colateral visível)",
      "Evitar cicatrizes, veias colaterais, hematomas e o ceco distendido à direita"
    ] },
    { etapa: "Antissepsia e anestesia", itens: [
      "Higienizar as mãos, paramentar, antissepsia e campo",
      "Botão anestésico e infiltração por planos até o peritônio, aspirando antes de injetar"
    ] },
    { etapa: "Punção (técnica em Z)", itens: [
      "Tracionar a pele cerca de 2 cm para baixo antes de introduzir a agulha (técnica em Z: o trajeto se fecha ao soltar, reduzindo vazamento)",
      "Introduzir a agulha perpendicular em pequenos avanços, aspirando, até obter líquido",
      "Diagnóstica: aspirar 30–60 mL e distribuir nos frascos; inocular hemoculturas à beira-leito",
      "Alívio: avançar o cateter, retirar a agulha, conectar ao sistema de drenagem e drenar por gravidade ou vácuo",
      "Se o fluxo parar: mudar levemente a posição do paciente ou do cateter; não reintroduzir a agulha no cateter"
    ] },
    { etapa: "Finalização e albumina", itens: [
      "Retirar o cateter e soltar a pele; curativo compressivo",
      "Mais de 5 L retirados: albumina 20% 6–8 g por litro retirado (todos os litros), IV, durante ou logo após o procedimento",
      "Até 5 L: albumina em geral não necessária (considerar se lesão renal aguda ou ACLF)"
    ] }
  ],
  conferirDepois: [
    "Volume total retirado e aspecto (citrino, turvo, hemorrágico, quiloso)",
    "Pressão arterial, frequência cardíaca, diurese",
    "Albumina prescrita conforme o volume",
    "Exames enviados: celularidade com diferencial, albumina e proteína do líquido, albumina sérica do mesmo dia (GASA), culturas",
    "Vazamento no local",
    "Resultado da celularidade nas próximas horas: PMN ≥ 250/mm³ = PBE"
  ],
  complicacoes: [
    "Vazamento de ascite: curativo compressivo, bolsa coletora; ponto em bolsa se persistente",
    "Hematoma de parede ou hemoperitônio: compressão, hemograma seriado, USG; embolização ou cirurgia se instável",
    "Perfuração intestinal (raro): suspeitar se líquido fecaloide ou PBE polimicrobiana — antibiótico de amplo espectro e cirurgia",
    "Disfunção circulatória pós-paracentese: prevenida com albumina quando > 5 L; tratar hipotensão e suspender diurético",
    "Infecção do local"
  ],
  prescricao: {
    hospitalar: "APÓS PARACENTESE DE ALÍVIO (> 5 L)\n1. Albumina humana 20% (frasco de 50 mL = 10 g) — 8 g por litro retirado (ex.: 7 L = 56 g ≈ 6 frascos), IV, sem diluição, em 1–2 h, durante ou logo após o procedimento.\n2. Curativo compressivo no local; observar vazamento.\n3. Controle de PA, FC e diurese a cada 2 h nas primeiras 6 h.\n\nSE PBE (PMN ≥ 250/mm³)\n4. Ceftriaxona 2 g IV de 24/24 h (ou cefotaxima 2 g IV de 8/8 h) por 5–7 dias (ajustar se infecção hospitalar ou uso prévio de quinolona).\n5. Albumina humana 20%: 1,5 g/kg IV no dia 1 (até o diagnóstico) e 1 g/kg no dia 3.\n6. Suspender betabloqueador se hipotensão; suspender diurético se lesão renal."
  },
  documentacao: "Procedimento: paracentese [diagnóstica / de alívio], guiada por [USG / referências anatômicas].\nIndicação: [ ].\nConsentimento [verbal / escrito]. Time-out realizado. Plaquetas [ ], RNI [ ] (sem correção, conforme AASLD).\nLocal: [quadrante inferior esquerdo / linha média infraumbilical]. Técnica em Z.\nAnestesia com lidocaína [ ]% [ ] mL. Agulha/cateter [ ]G.\nRetirados [ ] mL de líquido [citrino / turvo / hemorrágico / quiloso].\nEnviado: celularidade com diferencial, albumina, proteína total, [glicose, LDH, amilase], cultura em frascos de hemocultura, [citologia].\nAlbumina 20% [ ] g IV [não indicada].\nIntercorrências: [nenhuma / descrever].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Interpretação da ascite",
      colunas: ["Exame", "Resultado", "Significado"],
      linhas: [
        ["Polimorfonucleares", "≥ 250/mm³", "Peritonite bacteriana espontânea (tratar mesmo sem cultura)"],
        ["GASA (albumina soro − ascite)", "≥ 1,1 g/dL", "Hipertensão portal (cirrose, IC, Budd-Chiari)"],
        ["GASA", "< 1,1 g/dL", "Carcinomatose, tuberculose peritoneal, pancreatite, síndrome nefrótica"],
        ["Proteína total da ascite", "< 1,5 g/dL", "Maior risco de PBE (critério para profilaxia, com outros critérios)"],
        ["Proteína total", "≥ 2,5 g/dL com GASA ≥ 1,1", "Sugere ascite cardíaca"],
        ["Múltiplos germes, glicose baixa, LDH alta, proteína > 1 g/dL", "—", "Pensar em peritonite secundária (perfuração): TC e cirurgia"]
      ]
    },
    {
      titulo: "Albumina 20% por volume retirado (8 g/L)",
      colunas: ["Volume retirado", "Albumina", "Frascos de 50 mL (10 g)"],
      linhas: [
        ["Até 5 L", "Em geral não necessária", "—"],
        ["6 L", "36–48 g", "4–5"],
        ["8 L", "48–64 g", "5–6"],
        ["10 L", "60–80 g", "6–8"]
      ],
      nota: "AASLD 2021 e EASL 2018: 6–8 g por litro retirado, quando > 5 L."
    }
  ],
  orientacoesRetorno: [
    "Pode sair um pouco de líquido pelo furinho nas primeiras horas: trocar o curativo e manter compressão",
    "Seguir a dieta com pouco sal e os remédios da cirrose",
    "Voltar imediatamente se febre, dor na barriga, confusão ou sonolência, vômito com sangue ou fezes pretas, tontura ao levantar ou pouca urina",
    "Pesar-se todo dia e anotar"
  ],
  relacionadas: ["cirrose-descompensada", "sepse", "masld", "hepatites-virais"],
  fontes: [
    "AASLD — Practice Guidance: Diagnosis, Evaluation, and Management of Ascites, SBP and Hepatorenal Syndrome (Biggins et al., Hepatology, 2021)",
    "EASL — Clinical Practice Guidelines for the management of patients with decompensated cirrhosis (2018)",
    "Sociedade Brasileira de Hepatologia — Recomendações sobre o uso de albumina humana na cirrose (conferir versão vigente)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
