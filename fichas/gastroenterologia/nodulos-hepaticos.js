// Lesão focal hepática incidental e rastreio de CHC
registrarFicha({
  id: "nodulos-hepaticos",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Nódulo hepático incidental e rastreio de CHC",
  resumo: "Conduta diante de lesão focal no fígado achada em exame de imagem (hemangioma, hiperplasia nodular focal, adenoma, cisto, metástase, carcinoma hepatocelular) e rastreio de CHC em cirróticos e portadores de hepatite B.",
  palavrasChave: "nodulo hepatico lesao focal figado incidentaloma hemangioma hiperplasia nodular focal hnf adenoma hepatocelular cisto hepatico hidatidose metastase chc carcinoma hepatocelular hepatocarcinoma li-rads alfafetoproteina rastreio cirrose hepatite b ressonancia tomografia trifasica",
  critico: {
    tempo: "Cirrose + nódulo ≥ 1 cm: TC/RM",
    texto: "Em cirrótico ou hepatite B crônica, nódulo novo ≥ 1 cm no ultrassom é CHC até prova em contrário: pedir TC ou RM multifásica com contraste e encaminhar. Fora desse contexto, a maioria das lesões é benigna."
  },
  alarmes: [
    "Cirrose ou hepatite B/C com nódulo novo ≥ 1 cm ou trombose de veia porta",
    "História de câncer (colorretal, mama, pulmão, melanoma, pâncreas) — pensar em metástase",
    "Perda de peso, dor no hipocôndrio direito, icterícia, massa palpável",
    "Dor abdominal súbita com queda de hemoglobina ou hipotensão (sangramento de adenoma ou CHC — PS)",
    "Adenoma ≥ 5 cm, adenoma em homem, adenoma que cresce",
    "Cisto com septos espessos, nódulo mural ou calcificação; morador de área de hidatidose (RS)",
    "Febre com lesão hipoecoica (abscesso hepático — PS)"
  ],
  conduta: [
    "Primeiro passo: contexto. Há cirrose, hepatite B ou C, álcool, MASLD avançada? Há câncer conhecido? Uso de anticoncepcional ou anabolizante?",
    "Exames iniciais: hepatograma, TP/INR, albumina, plaquetas, HBsAg, anti-HCV, alfafetoproteína (se hepatopatia); CEA e investigação do primário se suspeita de metástase",
    "Fígado não cirrótico, sem câncer, lesão com aspecto típico de cisto simples ou hemangioma < 3 cm no ultrassom: não precisa de seguimento (ACG 2024)",
    "Lesão sólida indeterminada, atípica ou ≥ 1 cm sem diagnóstico: RM com contraste hepatoespecífico (preferível) ou TC multifásica (trifásica) de abdome",
    "Hemangioma típico: não seguir; não precisa suspender contraceptivo. Gigante e sintomático: cirurgia",
    "Hiperplasia nodular focal (HNF) típica na RM: benigna, sem seguimento, não precisa suspender contraceptivo",
    "Adenoma hepatocelular: suspender estrogênio e anabolizante, perder peso; RM de controle em 6–12 meses. ≥ 5 cm após a suspensão, em homem ou com sangramento: cirurgia/embolização (especialista)",
    "Cisto simples: benigno, sem seguimento. Cisto complexo (septos, nódulo, parede espessa) ou suspeita de hidatidose: RM e cirurgia do aparelho digestivo",
    "Cirrótico ou hepatite B: aplicar fluxo de rastreio de CHC e LI-RADS (tabelas); LR-5 confirma CHC sem biópsia; LR-4/LR-M/LR-TIV: hepatologia/oncologia com urgência",
    "Biópsia só quando a imagem não define e o resultado muda a conduta (decisão do especialista)",
    "Rastreio de CHC: ultrassom de abdome a cada 6 meses, com ou sem alfafetoproteína, em todos os cirróticos candidatos a tratamento e em portadores de hepatite B com risco elevado mesmo sem cirrose"
  ],
  exames: [
    "Ultrassom de abdome: cisto simples (anecoico, parede fina, reforço acústico posterior); hemangioma (hiperecoico, homogêneo, bem delimitado)",
    "RM de abdome com contraste (ideal hepatoespecífico — ácido gadoxético): melhor exame para caracterizar HNF, adenoma e nódulo em cirrótico",
    "TC de abdome multifásica (sem contraste, arterial tardia, portal e tardia): alternativa à RM",
    "Alfafetoproteína: rastreio e suspeita de CHC; pode subir em hepatite ativa e gestação",
    "Hepatograma, TP/INR, albumina, plaquetas, HBsAg, anti-HCV",
    "Sorologia para equinococose (área endêmica) se cisto com septos/vesículas filhas"
  ],
  diferenciais: [
    "Hemangioma — lesão benigna mais comum; enchimento globular periférico centrípeto",
    "HNF — mulher jovem, cicatriz central, captação no hepatobiliar",
    "Adenoma — mulher em uso de estrogênio, anabolizante, doença de depósito de glicogênio, obesidade",
    "Esteatose focal ou área poupada — sem efeito de massa, vasos atravessam a lesão",
    "Metástase — múltiplas, hipoecoicas em alvo, câncer prévio",
    "CHC — cirrose ou HBV; realce arterial com lavagem (washout) e cápsula",
    "Colangiocarcinoma intra-hepático, abscesso, cisto hidático"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES — LESÃO FOCAL HEPÁTICA\n1. Hemograma, TGO, TGP, fosfatase alcalina, GGT, bilirrubinas, albumina, TP/INR.\n2. HBsAg, anti-HBc total, anti-HCV.\n3. Alfafetoproteína sérica (hepatopatia crônica ou suspeita de CHC).\n4. Ressonância magnética de abdome superior com contraste (preferencialmente hepatoespecífico) — caracterização de nódulo hepático de ___ cm achado em ultrassom. (Alternativa: tomografia computadorizada de abdome multifásica/trifásica.)\n\nRASTREIO DE CHC (cirrose/hepatite B de risco)\n5. Ultrassonografia de abdome superior a cada 6 meses — rastreio de carcinoma hepatocelular.\n6. Alfafetoproteína a cada 6 meses (junto ao ultrassom).\n\nENCAMINHAMENTO\n7. Hepatologia/gastroenterologia (ou cirurgia do aparelho digestivo): nódulo hepático ___ (LI-RADS ___), em paciente com ___."
  },
  orientacoesRetorno: [
    "A maior parte dos nódulos do fígado achados por acaso é benigna e não precisa de tratamento",
    "Se tem cirrose ou hepatite B: fazer o ultrassom a cada 6 meses, mesmo sem sintomas; isso permite achar o câncer cedo",
    "Se o laudo for adenoma: parar anticoncepcional com estrogênio e anabolizantes; usar outro método (DIU, preservativo)",
    "Procurar o PS imediatamente se dor forte e súbita na barriga, desmaio, palidez, febre alta ou pele amarela",
    "Retornar com a ressonância ou tomografia para definir se precisa de seguimento"
  ],
  encaminhar: [
    "Hepatologia/oncologia com prioridade: LR-4, LR-5, LR-M, LR-TIV, suspeita de metástase, alfafetoproteína em ascensão",
    "Cirurgia do aparelho digestivo: adenoma ≥ 5 cm ou em homem, cisto complexo, hidatidose, hemangioma gigante sintomático",
    "Gastroenterologia: lesão indeterminada após RM",
    "PS: suspeita de rotura/sangramento ou abscesso"
  ],
  tabelas: [
    {
      titulo: "Ultrassom de rastreio de CHC (LI-RADS US)",
      colunas: ["Categoria", "Achado", "Conduta"],
      linhas: [
        ["US-1 negativo", "Sem nódulo ou só benigno definido", "Repetir ultrassom em 6 meses"],
        ["US-2 sublimiar", "Nódulo < 10 mm", "Repetir ultrassom em 3 meses"],
        ["US-3 positivo", "Nódulo ≥ 10 mm ou trombo novo em veia", "TC ou RM multifásica"]
      ],
      nota: "Alfafetoproteína em ascensão também justifica TC/RM mesmo com US negativo. Ultrassom com visualização limitada (obesidade, esteatose): considerar TC/RM (AASLD 2023)."
    },
    {
      titulo: "LI-RADS v2018 (TC/RM em paciente de risco)",
      colunas: ["Categoria", "Significado", "Conduta"],
      linhas: [
        ["LR-1", "Benigno definido", "Volta ao rastreio de 6 meses"],
        ["LR-2", "Provavelmente benigno", "Rastreio de 6 meses"],
        ["LR-3", "Probabilidade intermediária", "Repetir TC/RM em 3–6 meses"],
        ["LR-4", "Provável CHC", "Discussão multidisciplinar; repetir imagem em ≤ 3 meses ou biópsia"],
        ["LR-5", "CHC definido", "Tratamento sem biópsia (especialista)"],
        ["LR-M", "Maligno, não específico de CHC", "Biópsia (colangiocarcinoma, misto)"],
        ["LR-TIV", "Tumor em veia", "Oncologia/hepatologia"]
      ],
      nota: "Válido só para população de risco (cirrose, hepatite B crônica). Não aplicar em fígado sem fator de risco."
    }
  ],
  fontes: [
    "ACG Clinical Guideline: Focal Liver Lesions (2024)",
    "AASLD Practice Guidance on prevention, diagnosis and treatment of hepatocellular carcinoma (2023)",
    "ACR — CT/MRI LI-RADS v2018 e US LI-RADS v2024",
    "EASL Clinical Practice Guidelines on the management of benign liver tumours (2016)",
    "EASL Clinical Practice Guidelines: management of hepatocellular carcinoma (2018; atualização 2025)",
    "Sociedade Brasileira de Hepatologia — Recomendações para diagnóstico e tratamento do carcinoma hepatocelular (2020)",
    "Ministério da Saúde — PCDT Hepatite B e coinfecções (2023)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
