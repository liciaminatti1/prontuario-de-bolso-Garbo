// Tumores urológicos: próstata, bexiga, rim, testículo (e pênis): suspeita e encaminhamento
registrarFicha({
  id: "tumores-urologicos",
  especialidade: "urologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Tumores urológicos: próstata, bexiga, rim, testículo e pênis — suspeita e encaminhamento",
  resumo: "Quando suspeitar e como encaminhar: PSA alterado (rastreamento só por decisão compartilhada — ver rastreio-cancer), hematúria macroscópica (câncer de bexiga até prova em contrário — ver hematuria), massa renal ou cisto complexo em exame de imagem, nódulo testicular endurecido em homem jovem e lesão persistente no pênis.",
  palavrasChave: "cancer prostata psa toque retal decisao compartilhada ressonancia multiparametrica pi-rads biopsia gleason isup cancer bexiga hematuria macroscopica cistoscopia urotomografia tabagismo cancer rim carcinoma celulas renais massa renal bosniak cisto renal cancer testiculo nodulo testicular afp beta hcg ldh orquiectomia inguinal seminoma cancer penis fimose hpv",
  alarmes: [
    "Hematúria macroscópica indolor, sobretudo em fumante > 35–40 anos (bexiga, rim, ureter)",
    "Nódulo endurecido e indolor no testículo, aumento de volume ou peso no escroto em homem de 15–40 anos",
    "Dor óssea, fratura patológica, perda de peso em homem idoso (próstata metastática)",
    "Dor lombar com fraqueza nas pernas ou alteração esfincteriana (compressão medular maligna — PS, ver compressao-medular-maligna)",
    "Retenção urinária ou hidronefrose bilateral com piora da função renal",
    "Toque retal com nódulo endurecido ou próstata pétrea, independentemente do PSA",
    "Massa renal sólida ou cisto com componente sólido em exame de imagem",
    "Lesão no pênis (úlcera, verruga, mancha) que não cicatriza em 4 semanas, sobretudo com fimose"
  ],
  conduta: [
    "Próstata — rastreamento: não recomendado de rotina pelo Ministério da Saúde/INCA; PSA só após decisão compartilhada (benefícios, sobrediagnóstico e danos), registrada no prontuário (ver rastreio-cancer)",
    "Próstata — PSA elevado: repetir em 6–8 semanas antes de encaminhar; afastar ITU/prostatite, ejaculação ou ciclismo recentes, sondagem; finasterida/dutasterida reduzem o PSA à metade (multiplicar por 2)",
    "Próstata — PSA persistentemente elevado para a idade ou toque alterado: encaminhar à urologia; o serviço faz RM multiparamétrica (PI-RADS) antes da biópsia",
    "Bexiga: hematúria macroscópica em adulto (ou microscópica de risco) → urina tipo 1 e urocultura (afastar ITU), creatinina, TC urografia (ou USG se contraste contraindicado) e cistoscopia — encaminhar à urologia com prioridade (ver hematuria)",
    "Rim: massa sólida ou cisto Bosniak III–IV em USG/TC → TC ou RM com contraste e urologia com prioridade; Bosniak I–II não precisa de seguimento; IIF exige seguimento por imagem",
    "Testículo: nódulo testicular = USG de bolsa escrotal com Doppler + marcadores (AFP, beta-hCG, LDH) colhidos ANTES da cirurgia; encaminhar com urgência à urologia. Não fazer biópsia nem punção escrotal (o tratamento é orquiectomia por via inguinal)",
    "Pênis: lesão persistente → biópsia pela urologia/dermatologia; tratar fimose e orientar higiene; vacina HPV conforme calendário",
    "Fatores de risco para orientar: tabagismo (bexiga, rim), obesidade e hipertensão (rim), exposição ocupacional a aminas aromáticas e corantes (bexiga), criptorquidia (testículo), fimose e HPV (pênis)",
    "Todos com suspeita de câncer: encaminhar com prioridade (Lei 13.896/2019: exames diagnósticos em até 30 dias; Lei 12.732/2012: tratamento em até 60 dias)"
  ],
  exames: [
    "PSA total (após decisão compartilhada ou com sintomas/toque alterado); relação PSA livre/total pela urologia",
    "Urina tipo 1 e urocultura, creatinina, hemograma",
    "USG de rins e vias urinárias; TC urografia (trifásica) para hematúria macroscópica; cistoscopia (urologia)",
    "Citologia urinária oncótica: complementar, pela urologia (baixa sensibilidade para tumores de baixo grau)",
    "USG de bolsa escrotal com Doppler + AFP, beta-hCG e LDH (nódulo testicular)",
    "TC de abdome com contraste (massa renal; estadiamento); RM multiparamétrica de próstata (urologia)"
  ],
  diferenciais: [
    "PSA elevado: hiperplasia prostática benigna, prostatite, ITU, manipulação, ejaculação recente",
    "Hematúria: ITU, litíase, glomerulopatia (dismorfismo, proteinúria, cilindros), anticoagulação, exercício intenso",
    "Massa escrotal: hidrocele (transiluminação), varicocele, cisto de epidídimo, orquiepididimite (dor, febre — reavaliar em 2–4 semanas após tratamento), hérnia inguinoescrotal",
    "Massa renal: cisto simples, angiomiolipoma (gordura na TC), oncocitoma, pseudotumor"
  ],
  tabelas: [
    {
      titulo: "Resumo por órgão",
      colunas: ["Órgão", "Quando suspeitar", "Exame inicial (UBS)", "Destino"],
      linhas: [
        ["Próstata", "PSA elevado persistente, toque com nódulo, dor óssea em idoso", "PSA repetido, creatinina, urina", "Urologia (RM multiparamétrica e biópsia)"],
        ["Bexiga", "Hematúria macroscópica, irritação miccional sem infecção em fumante", "Urina tipo 1, urocultura, creatinina, USG ou TC urografia", "Urologia (cistoscopia) com prioridade"],
        ["Rim", "Massa em exame de imagem (a maioria é achado), hematúria, dor lombar, massa palpável", "TC com contraste ou RM", "Urologia com prioridade"],
        ["Testículo", "Nódulo endurecido indolor, 15–40 anos", "USG escrotal + AFP, beta-hCG, LDH", "Urologia com urgência (orquiectomia inguinal)"],
        ["Pênis", "Lesão que não cicatriza, fimose, HPV", "—", "Urologia (biópsia)"]
      ]
    },
    {
      titulo: "Classificação de Bosniak para cistos renais (versão 2019, resumo)",
      colunas: ["Classe", "Achado", "Conduta"],
      linhas: [
        ["I", "Cisto simples, parede fina e lisa, sem septo, sem realce", "Nenhuma"],
        ["II", "Poucos septos finos, calcificação fina, cisto hiperdenso pequeno", "Nenhuma"],
        ["IIF", "Septos ou parede levemente espessados, vários septos finos", "Seguimento por imagem (TC/RM) pelo especialista"],
        ["III", "Parede ou septos espessos e irregulares com realce", "Urologia: cirurgia ou vigilância ativa"],
        ["IV", "Componente nodular sólido com realce", "Urologia: tratar como câncer"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES CONFORME SUSPEITA\n\nPRÓSTATA\n1. PSA total. Indicação: ___ (repetição de PSA de ___ ng/mL em ___ / sintomas / toque alterado). Decisão compartilhada registrada.\n\nHEMATÚRIA MACROSCÓPICA\n2. Urina tipo 1, urocultura, creatinina, hemograma.\n3. Tomografia de abdome e pelve — urotomografia (fases sem contraste, nefrográfica e excretora). Indicação: hematúria macroscópica em ___ anos, tabagista ___ maços-ano. (Se contraste contraindicado: USG de rins e vias urinárias.)\n\nNÓDULO TESTICULAR\n4. Ultrassonografia de bolsa escrotal com Doppler. Indicação: nódulo testicular ___ (direito/esquerdo). URGENTE.\n5. Alfafetoproteína, beta-hCG quantitativo, LDH.\n\nENCAMINHAMENTO\nUrologia — ___ (PSA ___ ng/mL em 2 dosagens / hematúria macroscópica / massa renal de ___ cm / nódulo testicular / lesão peniana). Prioridade: ___. Lei 13.896/2019 (diagnóstico em até 30 dias na suspeita de câncer)."
  },
  orientacoesRetorno: [
    "Xixi com sangue, mesmo que tenha parado, precisa de investigação; não deixe de fazer os exames",
    "Homens jovens: examinar os testículos no banho uma vez por mês; caroço duro, mesmo sem dor, é motivo para procurar a UBS logo",
    "O exame de PSA tem vantagens e desvantagens; converse com a equipe antes de decidir fazer",
    "Parar de fumar reduz o risco de câncer de bexiga e de rim",
    "Lavar o pênis diariamente, puxando a pele; ferida que não sara em 1 mês deve ser examinada",
    "Procurar o PS se não conseguir urinar, sangue com coágulos na urina, fraqueza nas pernas ou dor forte nas costas"
  ],
  encaminhar: [
    "Urologia com urgência: nódulo testicular sólido",
    "Urologia com prioridade: hematúria macroscópica, massa renal sólida ou Bosniak III–IV, PSA persistentemente elevado ou toque alterado, lesão peniana suspeita",
    "Urologia eletiva: cisto Bosniak IIF, PSA limítrofe estável",
    "PS: retenção urinária, hematúria com coágulos e retenção, sinais de compressão medular, insuficiência renal obstrutiva"
  ],
  fontes: [
    "Ministério da Saúde/INCA — Rastreamento do câncer de próstata: nota técnica e Detecção precoce do câncer (2021)",
    "EAU Guidelines — Prostate Cancer, Non-muscle-invasive Bladder Cancer, Renal Cell Carcinoma, Testicular Cancer e Penile Cancer (2025)",
    "AUA/SUFU — Microhematuria Guideline (2020)",
    "Silverman SG et al. — Bosniak Classification of Cystic Renal Masses, Version 2019 (Radiology, 2019)",
    "Lei nº 13.896/2019 e Lei nº 12.732/2012"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
