// Choque: hipovolêmico, cardiogênico, obstrutivo e distributivo
registrarFicha({
  id: "choque",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Choque: hipovolêmico, cardiogênico, obstrutivo e distributivo",
  resumo: "Hipoperfusão tecidual aguda (pele fria ou moteada, enchimento capilar lento, oligúria, alteração mental, lactato alto), com ou sem hipotensão. Reconhecer o tipo à beira-leito e iniciar o tratamento específico.",
  palavrasChave: "choque hipotensao hipoperfusao hipovolemico hemorragico cardiogenico obstrutivo distributivo septico anafilatico neurogenico noradrenalina adrenalina dobutamina vasopressina cristaloide transfusao acido tranexamico rush ultrassom lactato indice de choque",
  critico: {
    tempo: "Tipo do choque em 10 min",
    texto: "Monitor, 2 acessos, lactato e ultrassom (RUSH). Hemorrágico: parar o sangramento e transfundir cedo. Séptico: antibiótico em 1 h. Anafilático: adrenalina IM. Obstrutivo: descomprimir/drenar/trombolisar."
  },
  alarmes: [
    "PAS < 90 mmHg ou PAM < 65 mmHg; queda > 40 mmHg da PA habitual",
    "Índice de choque (FC/PAS) > 1",
    "Lactato ≥ 4 mmol/L ou em ascensão",
    "Rebaixamento de consciência, oligúria (< 0,5 mL/kg/h)",
    "Criança: taquicardia persistente, enchimento capilar > 2 s, pulsos finos; hipotensão é sinal TARDIO (choque descompensado)",
    "Turgência jugular com hipotensão (tamponamento, pneumotórax hipertensivo, TEP, choque cardiogênico)",
    "Bradicardia com hipotensão no trauma raquimedular (choque neurogênico)"
  ],
  condutaInicial: [
    "Sala de emergência: monitor, O₂ para SpO₂ ≥ 94%, 2 acessos calibrosos (IO se não obtidos), glicemia, gasometria com lactato",
    "Hemorragia externa: compressão direta, torniquete em membro (xABCDE)",
    "Ultrassom à beira-leito (RUSH): coração (derrame, VD dilatado, contratilidade), veia cava, pulmões (pneumotórax, linhas B), abdome (líquido livre), aorta, veias profundas",
    "Classificar: hipovolêmico (veias vazias, coração hiperdinâmico), cardiogênico (congestão, função ruim), obstrutivo (tamponamento, pneumotórax, TEP), distributivo (pele quente no início, febre, alergia, lesão medular)",
    "Volume se hipovolêmico ou distributivo sem congestão: adulto cristaloide 500–1.000 mL em 15–30 min; criança 10–20 mL/kg em 5–20 min; reavaliar após cada bolus (perfusão, ausculta, fígado, ultrassom)",
    "Hemorrágico: limitar cristaloide (ponte até o sangue), concentrado de hemácias, plasma e plaquetas em razão 1:1:1, ácido tranexâmico em até 3 h, controle cirúrgico/endoscópico",
    "Noradrenalina se PAM < 65 mmHg após volume inicial (ou já durante, se hipotensão grave); pode iniciar em veia periférica calibrosa",
    "Choque anafilático: adrenalina IM 0,01 mg/kg (máx 0,5 mg) na coxa, repetir a cada 5 min; volume em bolus (ver ficha anafilaxia)",
    "Choque séptico: hemoculturas e antibiótico em até 1 h (ver ficha sepse)",
    "Sondagem vesical (diurese horária) e lactato seriado a cada 2–4 h"
  ],
  fataisExcluir: [
    "Hemorragia oculta (tórax, abdome, pelve, retroperitônio, digestiva, gravidez ectópica rota)",
    "Pneumotórax hipertensivo",
    "Tamponamento cardíaco",
    "TEP maciço",
    "IAM com choque cardiogênico",
    "Dissecção de aorta",
    "Anafilaxia",
    "Choque séptico",
    "Insuficiência adrenal (corticoide crônico suspenso)"
  ],
  proximaDecisao: "PAM < 65 mmHg apesar de volume e noradrenalina em dose crescente (≈ 0,25–0,5 mcg/kg/min) → acrescentar vasopressina (séptico) ou adrenalina, hidrocortisona 200 mg/dia, rever o tipo de choque com ultrassom. Baixo débito com congestão → dobutamina e avaliação de cardiologia/hemodinâmica.",
  clinica: {
    anamnese: [
      "Trauma, sangramento (melena, hematêmese, sangramento vaginal, atraso menstrual)",
      "Vômitos, diarreia, poliúria (desidratação, cetoacidose)",
      "Dor torácica, dispneia, palpitações (cardiogênico, TEP, dissecção)",
      "Febre, foco infeccioso, imunossupressão (sepse)",
      "Exposição a alérgeno, picada de inseto, medicamento novo (anafilaxia)",
      "Uso de corticoide, anticoagulante, betabloqueador",
      "Criança: aceitação alimentar, diurese, febre, petéquias, cardiopatia"
    ],
    exameFisico: [
      "PA, FC, FR, SpO₂, temperatura, enchimento capilar, temperatura e cor das extremidades",
      "Nível de consciência, diurese",
      "Turgência jugular, ausculta cardíaca (abafada no tamponamento) e pulmonar (crepitações, murmúrio ausente)",
      "Abdome (distensão, dor), pelve, fêmures, sangramento externo",
      "Pele: urticária, angioedema (anafilaxia); petéquias/púrpura (meningococcemia)",
      "Edema assimétrico de membros inferiores (TEP)"
    ],
    diferenciais: [
      { dx: "Hipovolêmico (hemorrágico ou não)", pista: "Extremidades frias, jugular colabada, veia cava pequena e colabante, coração hiperdinâmico" },
      { dx: "Cardiogênico", pista: "Extremidades frias, congestão pulmonar, jugular túrgida, disfunção de VE, ECG com isquemia ou arritmia" },
      { dx: "Obstrutivo", pista: "Jugular túrgida; derrame pericárdico com colapso de câmaras, VD dilatado (TEP) ou ausência de deslizamento pleural" },
      { dx: "Distributivo — séptico", pista: "Febre ou hipotermia, foco infeccioso, pele quente no início, lactato alto" },
      { dx: "Distributivo — anafilático", pista: "Início em minutos após exposição, urticária, broncoespasmo, angioedema" },
      { dx: "Distributivo — neurogênico", pista: "Trauma raquimedular cervical/torácico alto, hipotensão com bradicardia, pele quente" }
    ],
    gravidade: [
      "Choque hemorrágico (ATLS): perda > 15% com taquicardia leve; > 30% com hipotensão, taquicardia e oligúria; > 40% com rebaixamento e anúria — não esperar hipotensão para transfundir",
      "Choque cardiogênico (SCAI): A em risco, B início (hipotensão sem hipoperfusão), C clássico (hipoperfusão), D deterioração, E extremo (PCR, suporte máximo)",
      "Criança: compensado (PA normal, perfusão ruim) versus descompensado (hipotensão para a idade: PAS < 70 + 2 × idade em anos de 1 a 10 anos)"
    ]
  },
  exames: [
    {
      nome: "Gasometria com lactato",
      pedido: "Gasometria arterial ou venosa com lactato; repetir lactato em 2–4 h.",
      porQue: "Gravidade e resposta ao tratamento.",
      esperar: "Lactato ≥ 2 indica hipoperfusão; ≥ 4 grave.",
      interpretacao: "Queda do lactato ≥ 10–20% em 2 h sugere resposta.",
      limitacoes: "Adrenalina, metformina e insuficiência hepática elevam o lactato."
    },
    {
      nome: "Laboratório geral e tipagem",
      pedido: "Hemograma, tipagem ABO/Rh e prova cruzada, coagulograma (TP/INR, TTPa, fibrinogênio), ureia, creatinina, sódio, potássio, cálcio iônico, glicemia, TGO/TGP, bilirrubinas, troponina, beta-hCG em mulher em idade fértil.",
      porQue: "Avaliar sangramento, coagulopatia, disfunção orgânica e preparar transfusão.",
      esperar: "Hemoglobina pode estar normal na hemorragia aguda.",
      interpretacao: "Fibrinogênio < 150–200 mg/dL no sangramento: crioprecipitado.",
      limitacoes: "Não atrasar transfusão de emergência (O negativo/positivo) à espera de prova cruzada."
    },
    {
      nome: "Ultrassom à beira-leito (RUSH/FAST)",
      pedido: "Ultrassom point-of-care: protocolo RUSH (coração, cava, pulmões, abdome/FAST, aorta, veias profundas).",
      porQue: "Definir o tipo de choque em minutos.",
      esperar: "—",
      interpretacao: "Derrame com colapso de VD = tamponamento; VD > VE = TEP; FAST positivo + instável = cirurgia.",
      limitacoes: "Operador-dependente; cava não é bom preditor isolado de resposta a volume."
    },
    {
      nome: "ECG e radiografia de tórax",
      pedido: "ECG de 12 derivações. Radiografia de tórax no leito.",
      porQue: "IAM, arritmia, sinais de TEP; pneumotórax, hemotórax, congestão, pneumonia.",
      esperar: "—",
      interpretacao: "Supra de ST + choque → hemodinâmica de emergência.",
      limitacoes: "Pneumotórax hipertensivo é diagnóstico clínico: não esperar a radiografia."
    },
    {
      nome: "Culturas (se suspeita de sepse)",
      pedido: "Hemoculturas 2 amostras de sítios diferentes antes do antibiótico; urocultura e culturas do foco.",
      porQue: "Guiar antibiótico.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não atrasar antibiótico > 45 min para coletar."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide balanceado (Ringer lactato) ou SF 0,9%",
      linha: "l1",
      dose: "Adulto 500–1.000 mL em bolus (sepse com hipotensão ou lactato ≥ 4: 30 mL/kg nas primeiras 3 h); criança 10–20 mL/kg em 5–20 min",
      via: "IV ou IO",
      intervalo: "Repetir conforme resposta",
      duracao: "Criança: até 40–60 mL/kg na 1ª hora se sem sobrecarga",
      monitorizacao: "Perfusão, PA, diurese, crepitações, hepatomegalia (criança), ultrassom",
      contraindicacoes: "Congestão pulmonar; choque cardiogênico com congestão",
      ajustes: "Hemorrágico: cristaloide só como ponte (adulto ~1 L) até o sangue. Criança sem UTI disponível e sem hipotensão: bolus com mais cautela (10 mL/kg)"
    },
    {
      droga: "Hemocomponentes (choque hemorrágico)",
      linha: "l1",
      dose: "Concentrado de hemácias : plasma : plaquetas em razão 1:1:1; criança: concentrado de hemácias 10–20 mL/kg",
      via: "IV, com aquecedor",
      intervalo: "Protocolo de transfusão maciça",
      duracao: "Até controle do sangramento",
      monitorizacao: "Hemoglobina, coagulograma, fibrinogênio, cálcio iônico, temperatura",
      contraindicacoes: "—",
      ajustes: "Hipotensão permissiva até controle do sangramento (PAS ~80–90 mmHg ou pulso radial palpável), exceto TCE (PAS ≥ 100–110). Repor cálcio: gluconato de cálcio 10% 10–30 mL IV se Ca iônico baixo"
    },
    {
      droga: "Ácido tranexâmico 50 mg/mL (ampola 250 mg/5 mL)",
      linha: "l1",
      dose: "Adulto 1 g em 10 min e depois 1 g em 8 h; criança 15 mg/kg (máx 1 g) e depois 2 mg/kg/h por 8 h",
      via: "IV",
      intervalo: "—",
      duracao: "Iniciar em até 3 h do trauma",
      monitorizacao: "Trombose, convulsão (doses altas)",
      contraindicacoes: "Após 3 h do trauma (sem benefício e possível dano)",
      ajustes: "Adulto: 1 g + 100 mL SF 0,9% em 10 min; 1 g + 500 mL SF 0,9% a 62 mL/h. Hemorragia pós-parto: 1 g IV, repetir se persistir (OMS)"
    },
    {
      droga: "Noradrenalina",
      linha: "l1",
      dose: "Adulto 0,05–0,5 mcg/kg/min (doses maiores no choque refratário); criança 0,05–1 mcg/kg/min",
      via: "IV contínua (periférica calibrosa por curto prazo, depois central)",
      intervalo: "Titular a cada 5–10 min",
      duracao: "Até estabilidade",
      monitorizacao: "PAM (alvo ≥ 65 mmHg no adulto), perfusão, extravasamento",
      contraindicacoes: "Hipovolemia não corrigida",
      ajustes: "Adulto: 4 ampolas de 4 mg/4 mL (16 mg) + 234 mL SG 5% = 64 mcg/mL (70 kg a 0,1 mcg/kg/min ≈ 6,6 mL/h). Criança: 0,3 mg/kg em 50 mL de SG 5% → 1 mL/h = 0,1 mcg/kg/min"
    },
    {
      droga: "Adrenalina (epinefrina) em infusão",
      linha: "alt",
      dose: "Adulto 0,05–0,5 mcg/kg/min; criança 0,05–1 mcg/kg/min",
      via: "IV contínua",
      intervalo: "Titular",
      duracao: "—",
      monitorizacao: "Arritmias, lactato (eleva por efeito beta)",
      contraindicacoes: "—",
      ajustes: "1ª escolha no choque frio pediátrico (pode ser alternativa à noradrenalina) e na anafilaxia refratária. Adulto: 1 mg + 100 mL SF 0,9% = 10 mcg/mL. Criança: 0,3 mg/kg em 50 mL → 1 mL/h = 0,1 mcg/kg/min"
    },
    {
      droga: "Adrenalina IM 1 mg/mL (anafilaxia)",
      linha: "l1",
      dose: "0,01 mg/kg; adulto e > 12 anos 0,5 mg; criança máx 0,3 mg (pré-púbere)",
      via: "IM no vasto lateral da coxa",
      intervalo: "Repetir a cada 5 min se sem melhora",
      duracao: "—",
      monitorizacao: "PA, FC, ritmo",
      contraindicacoes: "Nenhuma absoluta na anafilaxia",
      ajustes: "Após 2 doses IM sem resposta: infusão IV (ver ficha anafilaxia)"
    },
    {
      droga: "Dobutamina 12,5 mg/mL",
      linha: "adj",
      dose: "2,5–20 mcg/kg/min (adulto e criança)",
      via: "IV contínua",
      intervalo: "Titular a cada 10–15 min",
      duracao: "—",
      monitorizacao: "FC, arritmias, PA",
      contraindicacoes: "Hipotensão grave sem vasopressor; cardiomiopatia hipertrófica obstrutiva",
      ajustes: "Choque cardiogênico com baixo débito após PAM ≥ 65 com noradrenalina. 250 mg (20 mL) + 230 mL SG 5% = 1.000 mcg/mL (70 kg a 5 mcg/kg/min = 21 mL/h)"
    },
    {
      droga: "Vasopressina 20 U/mL",
      linha: "adj",
      dose: "0,03 U/min (adulto)",
      via: "IV contínua",
      intervalo: "Dose fixa",
      duracao: "—",
      monitorizacao: "Isquemia digital/mesentérica",
      contraindicacoes: "—",
      ajustes: "Choque séptico com noradrenalina ≈ 0,25–0,5 mcg/kg/min. 20 U + 99 mL SF 0,9% = 0,2 U/mL → 9 mL/h"
    },
    {
      droga: "Hidrocortisona 100 mg ou 500 mg",
      linha: "adj",
      dose: "Adulto 200 mg/dia (50 mg a cada 6 h); criança 50 mg/m²/dia divididos a cada 6 h (até 100 mg/m²/dia em dose de estresse; máx 200 mg/dia) se choque refratário a catecolamina",
      via: "IV",
      intervalo: "A cada 6 h",
      duracao: "Até suspender vasopressores",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Choque séptico com vasopressor em dose crescente; insuficiência adrenal (dose de estresse 100 mg IV em bolus no adulto)"
    },
    {
      droga: "Descompressão torácica (pneumotórax hipertensivo)",
      linha: "l1",
      dose: "Adulto: agulha/cateter longo no 4º–5º espaço intercostal entre as linhas axilares anterior e média; criança: 2º espaço intercostal na linha hemiclavicular",
      via: "Punção, seguida de drenagem torácica",
      intervalo: "Imediato",
      duracao: "—",
      monitorizacao: "PA, SpO₂, murmúrio",
      contraindicacoes: "—",
      ajustes: "Toracostomia digital é alternativa no adulto em ambiente com equipe treinada"
    },
    {
      droga: "Alteplase (TEP com choque)",
      linha: "l1",
      dose: "100 mg IV em 2 h (10 mg em bolus e 90 mg em 2 h); alternativa acelerada 0,6 mg/kg (máx 50 mg) em 15 min",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Sangramento, PA",
      contraindicacoes: "AVC hemorrágico prévio, neoplasia de SNC, cirurgia ou trauma maior recentes, sangramento ativo",
      ajustes: "Suspender heparina não fracionada durante a infusão de 2 h e reiniciar depois (ver ficha tep)"
    }
  ],
  destino: {
    agora: [
      "Sala de emergência; tratamento específico do tipo de choque",
      "Hemorrágico: cirurgia, endoscopia ou radiologia intervencionista para controle da fonte"
    ],
    reavaliar: [
      "PA, FC, perfusão, diurese a cada 15–30 min",
      "Lactato em 2–4 h; ultrassom após cada intervenção"
    ],
    alta: [
      "Só após anafilaxia resolvida e observação adequada (ver ficha anafilaxia) ou hipovolemia leve corrigida e causa resolvida"
    ],
    observacao: [
      "Anafilaxia respondendo à adrenalina: observação de 6–12 h no PS conforme gravidade"
    ],
    internacao: [
      "UTI: choque com vasopressor, lactato alto persistente, choque cardiogênico, transfusão maciça"
    ],
    transferencia: [
      "Sem cirurgia, hemodinâmica, banco de sangue ou UTI: regulação precoce após medidas iniciais (torniquete, volume, ácido tranexâmico, vasopressor, antibiótico)"
    ]
  },
  prescricao: {
    hospitalar: "CHOQUE — ADULTO (peso: ___ kg; exemplo 70 kg)\n1. Dieta zero. Cabeceira a 0–30° conforme tolerância (elevar membros inferiores se hipovolemia).\n2. Monitor, oximetria, PA a cada 15 min (PAI se disponível), sonda vesical com diurese horária.\n3. O₂ para SpO₂ 94–98%.\n4. Ringer lactato (ou SF 0,9%) 500–1.000 mL IV em 15–30 min; reavaliar perfusão, ausculta e ultrassom; repetir se responder e sem congestão.\n5. Noradrenalina 4 mg/4 mL — 4 ampolas (16 mg) + SG 5% 234 mL (64 mcg/mL) IV em bomba, iniciar 0,1 mcg/kg/min (≈ 6,6 mL/h) e titular a cada 5–10 min para PAM ≥ 65 mmHg.\n6. SE HEMORRÁGICO: ativar protocolo de transfusão maciça; concentrado de hemácias + plasma fresco + plaquetas 1:1:1 com aquecedor; ácido tranexâmico 1 g + SF 0,9% 100 mL IV em 10 min (até 3 h do trauma), depois 1 g + SF 0,9% 500 mL IV a 62 mL/h (8 h); gluconato de cálcio 10% 10 mL IV lento a cada 4 unidades transfundidas ou se Ca iônico baixo.\n7. SE CARDIOGÊNICO (após PAM ≥ 65): dobutamina 250 mg/20 mL + SG 5% 230 mL (1.000 mcg/mL) IV em bomba a 2,5–5 mcg/kg/min (10–21 mL/h); ECG e cardiologia.\n8. SE SÉPTICO: hemoculturas e antibiótico em até 1 h (ver ficha sepse); se refratário, vasopressina 20 U + SF 0,9% 99 mL a 9 mL/h e hidrocortisona 50 mg IV de 6/6 h.\n9. SE ANAFILÁTICO: adrenalina 1 mg/mL 0,5 mL IM na coxa, repetir a cada 5 min; refratário: adrenalina 1 mg + SF 0,9% 100 mL (10 mcg/mL) IV em bomba, iniciar 0,05–0,1 mcg/kg/min (21–42 mL/h) e titular.\n10. Controles: lactato de 2/2 h a 4/4 h; gasometria; hemoglobina e coagulograma se sangramento; glicemia capilar de 4/4 h.\n\nCRIANÇA (peso: ___ kg)\n- Cristaloide 10–20 mL/kg IV/IO em 5–20 min; reavaliar após cada bolus (fígado, crepitações, perfusão); até 40–60 mL/kg na 1ª hora se sem sobrecarga.\n- Hemorrágico: concentrado de hemácias 10–20 mL/kg; ácido tranexâmico 15 mg/kg (máx 1 g) IV em 10 min e 2 mg/kg/h por 8 h.\n- Vasoativo se refratário a 40–60 mL/kg: adrenalina ou noradrenalina 0,05–1 mcg/kg/min (0,3 mg/kg em 50 mL de SG 5%: 1 mL/h = 0,1 mcg/kg/min). Pode iniciar em acesso periférico ou IO.\n- Anafilaxia: adrenalina 1 mg/mL 0,01 mL/kg IM (máx 0,3 mL pré-púbere; 0,5 mL adolescente).\n- Glicemia capilar; tratar hipoglicemia com glicose 10% 2–5 mL/kg."
  },
  orientacoesRetorno: [
    "Após alta por anafilaxia: evitar o desencadeante, receita e treino de adrenalina autoinjetável quando disponível, plano escrito e encaminhamento ao alergista",
    "Após choque hipovolêmico por desidratação: soro de reidratação oral e retorno se vômitos persistentes, sonolência, pouca urina",
    "Voltar imediatamente se tontura ao levantar, desmaio, falta de ar, extremidades frias, confusão ou sangramento",
    "Seguimento com o especialista da causa (cardiologia, gastroenterologia, cirurgia, infectologia) em 1–2 semanas"
  ],
  tabelas: [
    {
      titulo: "Perfil à beira-leito",
      colunas: ["Tipo", "Pele", "Jugular / cava", "Coração (eco)", "Tratamento-chave"],
      linhas: [
        ["Hipovolêmico", "Fria", "Vazia / colabada", "Hiperdinâmico, pequeno", "Volume; sangue e controle da fonte se hemorrágico"],
        ["Cardiogênico", "Fria", "Túrgida / cheia", "Contratilidade ruim", "Noradrenalina + dobutamina; revascularizar se IAM"],
        ["Obstrutivo", "Fria", "Túrgida / cheia", "Derrame (tamponamento) ou VD dilatado (TEP)", "Pericardiocentese, descompressão, trombólise"],
        ["Distributivo", "Quente (início)", "Variável", "Hiperdinâmico", "Volume + noradrenalina; antibiótico; adrenalina IM na anafilaxia"]
      ]
    },
    {
      titulo: "Diluições pediátricas (regra do 0,3)",
      colunas: ["Droga", "Preparo", "Equivalência"],
      linhas: [
        ["Adrenalina", "0,3 mg × peso (kg) em 50 mL de SG 5%", "1 mL/h = 0,1 mcg/kg/min"],
        ["Noradrenalina", "0,3 mg × peso (kg) em 50 mL de SG 5%", "1 mL/h = 0,1 mcg/kg/min"],
        ["Dobutamina", "30 mg × peso (kg) em 50 mL de SG 5%", "1 mL/h = 10 mcg/kg/min"]
      ],
      nota: "Conferir concentração da ampola de noradrenalina (base ou sal) e padronização da farmácia local."
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS: Advanced Trauma Life Support, 11ª ed. (2025)",
    "Surviving Sepsis Campaign — International Guidelines for Management of Sepsis and Septic Shock (2021; atualização 2026) e Pediatric Guidelines (2020)",
    "Rossaint R et al. — European guideline on management of major bleeding and coagulopathy following trauma, 6ª ed. (Crit Care, 2023)",
    "SCAI — Clinical Expert Consensus Statement on the Classification of Cardiogenic Shock (2022)",
    "ESC — Guidelines for acute pulmonary embolism (2019) e Heart Failure Guidelines (2021, atualização 2023)",
    "World Allergy Organization Anaphylaxis Guidance (2020) e Resuscitation Council UK — Anaphylaxis (2021)",
    "CRASH-2 Collaborators — ácido tranexâmico no trauma (Lancet, 2010); OMS — ácido tranexâmico na hemorragia pós-parto (2017)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
