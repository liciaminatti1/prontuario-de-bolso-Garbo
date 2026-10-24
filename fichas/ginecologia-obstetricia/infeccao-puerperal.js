// Infecção puerperal e febre no pós-parto
registrarFicha({
  id: "infeccao-puerperal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Infecção puerperal: endometrite, infecção de ferida e febre no pós-parto",
  resumo: "Febre no puerpério: endometrite (principal causa), infecção do sítio cirúrgico pós-cesárea ou da episiotomia e outras fontes (mama, urina, trombose, pulmão). Antibiótico, busca de restos e abscessos, e reconhecimento de sepse materna.",
  palavrasChave: "infeccao puerperal febre puerperal endometrite endomiometrite infeccao sitio cirurgico ferida operatoria cesarea episiotomia deiscencia fasciite necrosante abscesso pelvico tromboflebite pelvica septica restos placentarios sepse materna clindamicina gentamicina ampicilina",
  critico: {
    tempo: "Antibiótico IV na 1ª hora se sepse",
    texto: "Puérpera com febre e qualquer sinal de sepse (FR ≥ 22, PAS ≤ 100, confusão, FC > 100 persistente): culturas, lactato, cristaloide e antibiótico de amplo espectro na 1ª hora. Sepse é causa importante de morte materna."
  },
  alarmes: [
    "Hipotensão, taquicardia > 120, FR ≥ 22, confusão, oligúria, lactato ≥ 2 (sepse/choque séptico)",
    "Dor desproporcional, crepitação, bolhas, necrose ou anestesia na ferida (fasciíte necrosante)",
    "Febre persistente após 48–72 h de antibiótico adequado (abscesso, hematoma infectado, restos, tromboflebite pélvica séptica)",
    "Sangramento aumentado com útero amolecido e febre (restos placentários)",
    "Dispneia, dor torácica, edema assimétrico de perna (TEP/TVP)",
    "Infecção por Streptococcus do grupo A (rápida progressão, choque tóxico)"
  ],
  condutaInicial: [
    "Febre puerperal: temperatura ≥ 38 °C em 2 dos primeiros 10 dias pós-parto, excluindo as primeiras 24 h (febre isolada nas 1ªs 24 h também merece avaliação)",
    "Avaliar sinais vitais e critérios de sepse (qSOFA obstétrico / escore de alerta obstétrico)",
    "Exame: mamas, ferida operatória/períneo, abdome e útero (dor, subinvolução), lóquios (odor), especular, panturrilhas, pulmões, punção venosa e de peridural",
    "Hemograma, PCR, hemoculturas (2 amostras antes do antibiótico), urina tipo 1 e urocultura, lactato se suspeita de sepse",
    "Endometrite: clindamicina + gentamicina IV até 24–48 h afebril e assintomática, sem necessidade de antibiótico oral depois",
    "USG pélvica se suspeita de restos, abscesso ou hematoma; esvaziamento uterino se restos",
    "Infecção de ferida: abrir e drenar coleções, antibiótico se celulite; cultura da secreção"
  ],
  fataisExcluir: [
    "Sepse e choque séptico materno",
    "Fasciíte necrosante da parede ou do períneo",
    "Abscesso pélvico / peritonite (lesão de alça, deiscência da histerorrafia)",
    "Tromboflebite pélvica séptica",
    "TEP"
  ],
  proximaDecisao: "Sem resposta em 48–72 h: acrescentar ampicilina (cobertura de enterococo), USG/TC de abdome e pelve para abscesso, hematoma ou restos; drenagem cirúrgica se coleção; tromboflebite pélvica séptica é diagnóstico de exclusão — anticoagulação plena.",
  clinica: {
    anamnese: [
      "Tipo de parto, horas de bolsa rota, número de toques, corioamnionite, extração manual de placenta, retenção de restos, hemorragia",
      "Dor abdominal ou perineal, lóquios fétidos, sintomas urinários, mamas, tosse, dor em perna",
      "Comorbidades (diabetes, obesidade, HIV), antibióticos recentes, alergia"
    ],
    exameFisico: [
      "Sinais vitais completos, estado geral, perfusão",
      "Útero: altura, consistência e dor à mobilização (endometrite: útero doloroso, amolecido, subinvoluído)",
      "Ferida operatória e períneo: eritema, calor, secreção, flutuação, deiscência, necrose",
      "Mamas (mastite, abscesso), panturrilhas, ausculta pulmonar, punção lombar/peridural, acessos venosos"
    ],
    diferenciais: [
      { dx: "Endometrite", pista: "2º–5º dia, febre, útero doloroso, lóquios fétidos; mais comum após cesárea em trabalho de parto" },
      { dx: "Infecção do sítio cirúrgico", pista: "4º–7º dia, eritema e secreção na incisão" },
      { dx: "Mastite / ingurgitamento", pista: "Mama dolorosa e quente; ingurgitamento pode dar febre baixa nos 1ºs dias" },
      { dx: "Pielonefrite", pista: "Disúria, Giordano, sondagem vesical recente" },
      { dx: "Tromboflebite pélvica séptica", pista: "Febre em picos persistente apesar de antibiótico, sem outro foco" },
      { dx: "Pneumonia / atelectasia", pista: "Pós-cesárea com anestesia geral; tosse, ausculta" },
      { dx: "Reação a medicamento, flebite, cefaleia pós-punção", pista: "Sem foco obstétrico" }
    ],
    gravidade: [
      "Sepse: infecção suspeita + disfunção orgânica; usar critérios adaptados à gestante/puérpera (FR ≥ 25, PAS < 90, alteração mental)",
      "Choque séptico: vasopressor para PAM ≥ 65 e lactato > 2 apesar de volume"
    ]
  },
  exames: [
    {
      nome: "Laboratório e culturas",
      pedido: "Hemograma, PCR, creatinina, ureia, eletrólitos, bilirrubinas, TGO, TGP, coagulograma, lactato. Hemoculturas (2 amostras). Urina tipo 1 e urocultura. Cultura de secreção de ferida, se houver.",
      porQue: "Foco, gravidade e guiar antibiótico.",
      esperar: "Leucocitose é comum no pós-parto; valorizar desvio à esquerda e tendência.",
      interpretacao: "Lactato ≥ 2 ou disfunção orgânica: protocolo de sepse.",
      limitacoes: "Leucocitose até 15–20 mil pode ser fisiológica nos 1ºs dias."
    },
    {
      nome: "Imagem",
      pedido: "USG pélvica transvaginal/abdominal (restos, coleções, hematoma de parede). TC de abdome e pelve com contraste se febre persistente.",
      porQue: "Abscesso, hematoma, restos, tromboflebite.",
      esperar: "—",
      interpretacao: "Endométrio espesso heterogêneo com vascularização sugere restos.",
      limitacoes: "Gás e pequena quantidade de líquido na cavidade são normais após o parto."
    }
  ],
  tratamento: [
    { droga: "Clindamicina + gentamicina (endometrite)", linha: "l1", dose: "Clindamicina 900 mg 8/8 h + gentamicina 5 mg/kg 1×/dia (ou 1,5 mg/kg 8/8 h)", via: "IV", intervalo: "Ver dose", duracao: "Até 24–48 h afebril e sem dor; não precisa completar com VO", monitorizacao: "Creatinina (gentamicina), febre", contraindicacoes: "Gentamicina: lesão renal (ajustar), miastenia", ajustes: "Clindamicina em 100 mL de SF 0,9% em 30 min; gentamicina em 100 mL em 30–60 min. Amamentação permitida" },
    { droga: "Ampicilina (associar se sem resposta em 48–72 h)", linha: "adj", dose: "2 g", via: "IV", intervalo: "6/6 h", duracao: "Até 24–48 h afebril", monitorizacao: "—", contraindicacoes: "Alergia a penicilina (usar vancomicina)", ajustes: "Cobre enterococo; ou trocar por ampicilina-sulbactam 3 g IV 6/6 h ou piperacilina-tazobactam 4,5 g IV 6/6 h na sepse" },
    { droga: "Cefalexina (celulite leve da ferida/períneo)", linha: "l1", dose: "500 mg", via: "VO", intervalo: "6/6 h", duracao: "7 dias", monitorizacao: "Retorno em 48 h", contraindicacoes: "Anafilaxia a betalactâmico", ajustes: "Alergia: clindamicina 300 mg VO 6/6 h. Drenar coleção; abscesso drenado pequeno pode não precisar de antibiótico" },
    { droga: "Enoxaparina dose plena (tromboflebite pélvica séptica)", linha: "adj", dose: "1 mg/kg", via: "SC", intervalo: "12/12 h", duracao: "Conforme especialista (em geral semanas)", monitorizacao: "Plaquetas", contraindicacoes: "Sangramento ativo", ajustes: "Manter antibiótico. ClCr < 30: 1 mg/kg 1×/dia" }
  ],
  destino: {
    agora: ["Sepse: protocolo da 1ª hora e vaga em UTI se choque", "Endometrite: internação com antibiótico IV"],
    reavaliar: ["Curva térmica e sinais vitais 4/4 h", "Resposta em 48–72 h"],
    alta: ["24–48 h afebril, sem dor, aceitando dieta; infecção de ferida leve com cefalexina e retorno em 48 h"],
    observacao: ["Celulite leve de ferida sem sinais sistêmicos pode ser tratada ambulatorialmente"],
    internacao: ["Endometrite, febre com sinais sistêmicos, abscesso, fasciíte, sepse"],
    transferencia: ["Choque séptico, fasciíte necrosante ou necessidade de cirurgia sem recurso local: regular para hospital terciário após 1ª hora do protocolo"]
  },
  prescricao: {
    hospitalar: "ENDOMETRITE PUERPERAL (peso: ___ kg)\n1. Dieta livre (zero se cirurgia prevista).\n2. Acesso venoso; Ringer lactato conforme volemia (sepse: 30 mL/kg nas primeiras 3 h se hipotensão ou lactato ≥ 4).\n3. Colher hemoculturas (2) e urocultura antes do antibiótico.\n4. Clindamicina 900 mg + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n5. Gentamicina 5 mg/kg (___ mg) + SF 0,9% 100 mL IV em 60 min 1×/dia.\n6. Se sem resposta em 48–72 h: Ampicilina 2 g IV de 6/6 h e USG/TC pélvica.\n7. Dipirona 1 g IV de 6/6 h se dor ou febre.\n8. Enoxaparina 40 mg SC 1×/dia (profilaxia, se sem contraindicação).\n9. Manter amamentação; ordenha se a mãe estiver muito grave.\n10. Controles: sinais vitais 4/4 h, curva térmica, diurese; avisar se PAS < 90, FC > 120, FR ≥ 25, confusão.",
    ambulatorial: "INFECÇÃO SUPERFICIAL LEVE DE FERIDA OPERATÓRIA/EPISIOTOMIA (sem sinais sistêmicos)\nUSO ORAL\n1. Cefalexina 500 mg ----------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n2. Dipirona 500 mg ------------------------------- 20 comprimidos\n   Tomar 2 comprimidos de 6 em 6 horas se dor ou febre.\n\nCUIDADOS\n- Lavar a ferida com água e sabão 2 vezes ao dia e secar bem.\n- Retorno em 48 horas."
  },
  orientacoesRetorno: [
    "Febre no pós-parto não é normal: procure atendimento",
    "Voltar imediatamente se febre, calafrios, sangramento com mau cheiro, dor forte na barriga, pus ou vermelhidão crescendo na cicatriz, falta de ar ou dor na perna",
    "Pode continuar amamentando durante o tratamento",
    "Tome o antibiótico até o fim e volte na reavaliação marcada"
  ],
  tabelas: [
    {
      titulo: "Fontes de febre puerperal por dia de início (mnemônico prático)",
      colunas: ["Período", "Causas principais"],
      linhas: [
        ["1º–2º dia", "Atelectasia/pneumonia (anestesia geral), endometrite precoce, infecção por Streptococcus do grupo A, reação a medicamento"],
        ["2º–5º dia", "Endometrite, infecção urinária, flebite de acesso"],
        ["4º–7º dia", "Infecção de ferida operatória ou episiotomia, abscesso"],
        ["≥ 7º dia", "Mastite e abscesso mamário, TVP/TEP, tromboflebite pélvica séptica, endometrite tardia (restos)"]
      ]
    }
  ],
  fontes: [
    "OMS — Recommendations for prevention and treatment of maternal peripartum infections (2015) e WHO Statement on maternal sepsis (2017)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Protocolo: Infecção puerperal (2021)",
    "ACOG Committee Opinion 712 — Intrapartum management of intraamniotic infection (2017)",
    "Surviving Sepsis Campaign — Guidelines (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
