// Choque hemorrágico no trauma
registrarFicha({
  id: "choque-hemorragico",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  titulo: "Choque hemorrágico no trauma",
  resumo: "Hipoperfusão por perda sanguínea após trauma: classes ATLS, reanimação hemostática (hipotensão permissiva, sangue precoce, transfusão maciça 1:1:1, ácido tranexâmico) e controle da fonte. Visão geral de outros choques: ficha choque.",
  palavrasChave: "choque hemorragico hipovolemico trauma sangramento transfusao macica protocolo 1:1:1 plasma plaquetas concentrado de hemacias acido tranexamico hipotensao permissiva crioprecipitado fibrinogenio indice de choque abc score reversao anticoagulante",
  critico: {
    tempo: "Sangue e controle da fonte já",
    texto: "Não espere hipotensão nem hemoglobina baixa: taquicardia, pele fria e índice de choque > 1 bastam. Limite cristaloide, transfunda 1:1:1, ácido tranexâmico em até 3 h e leve ao controle do sangramento."
  },
  alarmes: [
    "Índice de choque (FC/PAS) > 1, PAS < 90 mmHg, FC > 120",
    "Resposta transitória ou ausente a 1 L de cristaloide (criança 20 mL/kg)",
    "Déficit de base ≤ −6 ou lactato > 4 mmol/L",
    "Rebaixamento de consciência, anúria",
    "Hipotermia (< 35 °C), acidose e coagulopatia (tríade letal)",
    "Uso de anticoagulante ou antiagregante",
    "Idoso em betabloqueador (pode não ter taquicardia); gestante (sinais tardios)"
  ],
  condutaInicial: [
    "Compressão direta / torniquete; cinta pélvica se suspeita de pelve; tala de tração em fratura de fêmur",
    "2 acessos 14–16 G ou intraósseo; tipagem e prova cruzada",
    "Cristaloide aquecido no máximo 1 L (criança 20 mL/kg) como ponte; sangue o mais cedo possível",
    "Hipotensão permissiva (sem TCE): PAS 80–90 mmHg (PAM 50–60) até o controle do sangramento",
    "Ácido tranexâmico 1 g IV em 10 min em até 3 h do trauma, depois 1 g em 8 h",
    "Ativar protocolo de transfusão maciça se ABC score ≥ 2, choque classe III/IV ou resposta transitória/ausente",
    "Procurar a fonte: tórax (RX/eFAST), abdome (FAST), pelve (RX), ossos longos, externo ('chão e mais 4')",
    "Prevenir hipotermia; repor cálcio; reverter anticoagulante",
    "Controle definitivo: cirurgia, angioembolização ou transferência imediata"
  ],
  fataisExcluir: [
    "Hemotórax maciço",
    "Hemoperitônio (baço, fígado)",
    "Fratura de pelve com sangramento retroperitoneal",
    "Choque obstrutivo associado (pneumotórax hipertensivo, tamponamento)",
    "Choque neurogênico mascarando ou somando-se à hemorragia"
  ],
  proximaDecisao: "Resposta rápida e sustentada → TC e tratamento dirigido. Resposta transitória → sangue, ativar transfusão maciça e cirurgia/angioembolização em breve. Sem resposta → controle cirúrgico imediato (ou transferência) e procurar causa não hemorrágica.",
  clinica: {
    anamnese: [
      "Mecanismo, tempo desde o trauma (janela do ácido tranexâmico: 3 h)",
      "Anticoagulantes (varfarina, rivaroxabana, apixabana, edoxabana, dabigatrana), antiagregantes",
      "Betabloqueador, marca-passo (sem taquicardia compensatória)",
      "Hepatopatia, gestação, Testemunha de Jeová (conversar sem atrasar a conduta de urgência)"
    ],
    exameFisico: [
      "FC, PA, pressão de pulso (diminui na classe II), FR",
      "Pele fria, pálida, enchimento capilar > 2 s",
      "Nível de consciência, diurese",
      "Fontes: tórax, abdome, pelve, coxas, sangramento externo e no local do acidente"
    ],
    diferenciais: [
      { dx: "Pneumotórax hipertensivo", pista: "Jugular distendida, murmúrio abolido, desvio de traqueia" },
      { dx: "Tamponamento cardíaco", pista: "Bulhas abafadas, jugular distendida, derrame no FAST" },
      { dx: "Choque neurogênico", pista: "Bradicardia, pele quente, déficit medular" },
      { dx: "Contusão cardíaca", pista: "Arritmia, disfunção de VD/VE" }
    ],
    gravidade: [
      "Classes ATLS — ver tabela (I < 15%, II 15–30%, III 31–40%, IV > 40% da volemia)",
      "Volemia estimada: adulto 70 mL/kg; criança 80 mL/kg",
      "ABC score (1 ponto cada): trauma penetrante, PAS ≤ 90, FC ≥ 120, FAST positivo — ≥ 2 prediz transfusão maciça",
      "Transfusão maciça: > 10 unidades de concentrado de hemácias em 24 h ou > 4 unidades em 1 h"
    ]
  },
  exames: [
    {
      nome: "Tipagem e prova cruzada",
      pedido: "Tipagem ABO/Rh, pesquisa de anticorpos irregulares e prova cruzada. Reservar ___ unidades de concentrado de hemácias, ___ de plasma fresco congelado e ___ de plaquetas. ATIVAR PROTOCOLO DE TRANSFUSÃO MACIÇA (se indicado).",
      porQue: "Preparar sangue tipo-específico e compatível.",
      esperar: "Tipo-específico em ~10–15 min; cruzado em 45–60 min (varia por serviço).",
      interpretacao: "Instável: usar O negativo (mulheres em idade fértil e crianças) ou O positivo (homens) sem esperar prova cruzada.",
      limitacoes: "Coletar a amostra antes de transfundir."
    },
    {
      nome: "Gasometria com lactato e déficit de base",
      pedido: "Gasometria arterial (ou venosa) com lactato, déficit de base, cálcio iônico, potássio e hemoglobina.",
      porQue: "Grau de choque e resposta à reanimação.",
      esperar: "Resultado em minutos; repetir a cada 30–60 min durante a reanimação.",
      interpretacao: "Déficit de base −2 a −6 (classe II), −6 a −10 (III), ≤ −10 (IV). Lactato que não cai = sangramento ativo ou reanimação insuficiente.",
      limitacoes: "Álcool e convulsão elevam lactato."
    },
    {
      nome: "Coagulação",
      pedido: "Hemograma com plaquetas, TP/INR, TTPa, fibrinogênio. Tromboelastografia (TEG/ROTEM) se disponível.",
      porQue: "Coagulopatia induzida pelo trauma e guiar hemocomponentes.",
      esperar: "Repetir a cada 30–60 min durante transfusão maciça.",
      interpretacao: "Metas (diretriz europeia 2023): fibrinogênio ≥ 1,5 g/L (150 mg/dL); plaquetas > 50.000 (> 100.000 se TCE ou sangramento persistente); INR < 1,5; cálcio iônico na faixa normal.",
      limitacoes: "Hemoglobina inicial normal não exclui hemorragia grave."
    },
    {
      nome: "FAST / eFAST e RX",
      pedido: "eFAST na sala de trauma. RX de tórax AP e de pelve AP.",
      porQue: "Localizar a fonte do sangramento.",
      esperar: "Imediato.",
      interpretacao: "FAST positivo + instável → laparotomia. Pelve aberta → cinta, angioembolização ou tamponamento pré-peritoneal.",
      limitacoes: "FAST não avalia retroperitônio."
    }
  ],
  tratamento: [
    {
      droga: "Concentrado de hemácias + plasma fresco congelado + plaquetas (1:1:1)",
      linha: "l1",
      dose: "Adulto: pacotes de 1 CH + 1 PFC + 1 plaqueta (ou 1 aférese a cada 6 CH) · Criança: CH 10 mL/kg; transfusão maciça: CH, PFC e plaquetas 10–20 mL/kg cada, em razão próxima de 1:1:1",
      via: "IV em aquecedor; infusor rápido se disponível",
      intervalo: "Repetir pacotes até controle do sangramento",
      duracao: "Até hemostasia",
      monitorizacao: "FC, PA, lactato, déficit de base, Hb, coagulação, cálcio iônico, potássio, temperatura",
      contraindicacoes: "—",
      ajustes: "Iniciar sangue O (negativo em mulher fértil/criança) sem esperar prova cruzada. Desativar o protocolo assim que o sangramento estiver controlado"
    },
    {
      droga: "Ácido tranexâmico 50 mg/mL (ampola 250 mg/5 mL)",
      linha: "l1",
      dose: "Adulto: 1 g em 10 min + 1 g em 8 h · Criança: 15 mg/kg (máx 1 g) em 10 min + 2 mg/kg/h por 8 h",
      via: "IV",
      intervalo: "Ataque e manutenção",
      duracao: "8 h",
      monitorizacao: "Trombose",
      contraindicacoes: "Mais de 3 h do trauma (benefício perdido, possível dano)",
      ajustes: "Adulto: 1 g (20 mL) + SF 0,9% 100 mL em 10 min; 1 g + SF 0,9% 500 mL a 62 mL/h. Ajustar manutenção na insuficiência renal grave"
    },
    {
      droga: "Gluconato de cálcio 10% (ou cloreto de cálcio 10%)",
      linha: "adj",
      dose: "Adulto: gluconato 10% 10–30 mL (ou cloreto 10% 10 mL) · Criança: gluconato 10% 0,5 mL/kg (máx 20 mL)",
      via: "IV lento (10 min)",
      intervalo: "Conforme cálcio iônico; empiricamente a cada 4 unidades de hemoderivados",
      duracao: "Durante a transfusão maciça",
      monitorizacao: "Cálcio iônico, ECG",
      contraindicacoes: "Não infundir na mesma via do sangue",
      ajustes: "Cloreto de cálcio preferencialmente em acesso central (irritante)"
    },
    {
      droga: "Crioprecipitado (ou concentrado de fibrinogênio)",
      linha: "adj",
      dose: "Crioprecipitado 1 U/10 kg (adulto: 8–10 U) · Fibrinogênio concentrado 3–4 g (adulto)",
      via: "IV",
      intervalo: "Se fibrinogênio < 1,5 g/L ou ROTEM com déficit funcional",
      duracao: "Conforme dosagem",
      monitorizacao: "Fibrinogênio",
      contraindicacoes: "—",
      ajustes: "Considerar empiricamente após ~6–8 unidades de CH se não houver dosagem disponível"
    },
    {
      droga: "Reversão de anticoagulante",
      linha: "adj",
      dose: "Varfarina: complexo protrombínico (CCP) 25–50 UI/kg conforme INR + vitamina K 10 mg IV lento · Dabigatrana: idarucizumabe 5 g IV · Anti-Xa (rivaroxabana, apixabana, edoxabana): andexanet se disponível ou CCP 25–50 UI/kg",
      via: "IV",
      intervalo: "Dose única; repetir conforme resposta",
      duracao: "—",
      monitorizacao: "INR, sangramento, trombose",
      contraindicacoes: "—",
      ajustes: "Plasma fresco 15 mL/kg se CCP indisponível (mais volume e mais lento). Consultar hematologia/protocolo local"
    },
    {
      droga: "Cristaloide em grande volume",
      linha: "ci",
      dose: "Evitar > 1 L (adulto) antes do sangue",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Diluição, hipotermia, acidose, coagulopatia, edema",
      ajustes: "Vasopressor não substitui volume/sangue; considerar só em hemorragia com hipotensão ameaçadora apesar de sangue (diretriz europeia 2023)"
    }
  ],
  destino: {
    agora: [
      "Centro cirúrgico ou angioembolização para controle da fonte",
      "Sem cirurgião/banco de sangue: ácido tranexâmico, sangue disponível e transferência imediata"
    ],
    reavaliar: [
      "Sinais vitais a cada 5–15 min; lactato, Hb, coagulação e cálcio a cada 30–60 min",
      "Temperatura (meta ≥ 36 °C)"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "UTI após controle do sangramento"
    ],
    transferencia: [
      "Serviço sem cirurgia de urgência, banco de sangue ou UTI: transferir assim que houver suspeita, sem esperar exames (ver ficha transferencia-trauma)"
    ]
  },
  prescricao: {
    hospitalar: "CHOQUE HEMORRÁGICO — TRAUMA (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Monitor, oximetria, PA a cada 5 min (PAI se disponível); O₂ para SpO₂ ≥ 94%.\n3. 2 acessos 14–16 G ou intraósseo.\n4. Ringer lactato aquecido até 1.000 mL IV como ponte até o sangue.\n5. Meta (sem TCE): PAS 80–90 mmHg até controle do sangramento. Com TCE: PAS ≥ 100–110 mmHg (PAM ≥ 80).\n6. ATIVAR PROTOCOLO DE TRANSFUSÃO MACIÇA: concentrado de hemácias + plasma fresco congelado + plaquetas na razão 1:1:1, em aquecedor; iniciar com O negativo/O positivo até sangue tipo-específico.\n7. Ácido tranexâmico 250 mg/5 mL — 4 ampolas (1 g) + SF 0,9% 100 mL IV em 10 min; depois 1 g + SF 0,9% 500 mL IV a 62 mL/h (8 h). Só se até 3 h do trauma.\n8. Gluconato de cálcio 10% 10 mL (1 ampola) + SF 0,9% 100 mL IV em 10 min a cada 4 unidades de hemoderivados ou se cálcio iônico baixo (via separada do sangue).\n9. Crioprecipitado 1 U/10 kg IV se fibrinogênio < 150 mg/dL.\n10. Anticoagulado: reversão específica (ver tratamento).\n11. Manta térmica, sala aquecida, soros e sangue aquecidos.\n12. Sonda vesical com diurese horária (se sem suspeita de lesão uretral).\n13. Controles: gasometria com lactato, cálcio iônico e potássio, Hb, plaquetas, INR, TTPa e fibrinogênio de 30/30 min a 1/1 h; temperatura de 1/1 h.\n\nCRIANÇA (peso: ___ kg)\n- Cristaloide aquecido 20 mL/kg; se não responder: concentrado de hemácias 10 mL/kg (repetir) e plasma/plaquetas 10–20 mL/kg cada na transfusão maciça.\n- Ácido tranexâmico 15 mg/kg (máx 1 g) IV em 10 min + 2 mg/kg/h por 8 h.\n- Gluconato de cálcio 10% 0,5 mL/kg (máx 20 mL) IV lento se cálcio iônico baixo."
  },
  orientacoesRetorno: [
    "Após a alta: voltar se tontura ao levantar, desmaio, falta de ar, palidez intensa, fezes pretas ou sangue em qualquer secreção",
    "Não reiniciar anticoagulante ou antiagregante sem orientação da equipe que acompanha",
    "Ferro e alimentação rica em ferro conforme prescrição; retorno para hemograma conforme orientado"
  ],
  tabelas: [
    {
      titulo: "Classes de choque hemorrágico (ATLS 10ª ed.)",
      colunas: ["Parâmetro", "Classe I", "Classe II (leve)", "Classe III (moderado)", "Classe IV (grave)"],
      linhas: [
        ["Perda de volemia", "< 15%", "15–30%", "31–40%", "> 40%"],
        ["FC", "Normal", "Normal ou ↑", "↑", "↑↑"],
        ["PA sistólica", "Normal", "Normal", "Normal ou ↓", "↓"],
        ["Pressão de pulso", "Normal", "↓", "↓", "↓"],
        ["FR", "Normal", "Normal", "Normal ou ↑", "↑"],
        ["Diurese", "Normal", "Normal", "↓", "↓↓"],
        ["Glasgow", "Normal", "Normal", "↓", "↓"],
        ["Déficit de base", "0 a −2", "−2 a −6", "−6 a −10", "≤ −10"],
        ["Hemoderivados", "Monitorar", "Possível", "Sim", "Transfusão maciça"]
      ],
      nota: "Volemia: adulto ~70 mL/kg (70 kg ≈ 5 L); criança ~80 mL/kg. Idosos, atletas, gestantes e usuários de betabloqueador fogem desse padrão."
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "Rossaint R et al. — European guideline on management of major bleeding and coagulopathy following trauma, 6ª ed. (Crit Care, 2023)",
    "Holcomb JB et al. — PROPPR trial, razão 1:1:1 (JAMA, 2015)",
    "CRASH-2 Collaborators — ácido tranexâmico no trauma (Lancet, 2010)",
    "ACS TQIP — Massive Transfusion in Trauma Guidelines (2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
