// Deiscência de ferida operatória e evisceração
registrarFicha({
  id: "deiscencia-evisceracao",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Deiscência de ferida operatória e evisceração",
  resumo: "Abertura da ferida operatória: superficial (pele e subcutâneo) ou aponeurótica (fáscia). Evisceração = saída de vísceras pela ferida, emergência cirúrgica. Ocorre sobretudo entre o 5º e o 10º dia pós-operatório; sinal precoce clássico é a saída de líquido serossanguinolento ('água de carne') pela ferida.",
  palavrasChave: "deiscencia ferida operatoria evisceracao eventracao aponeurose fascia agua de carne laparotomia abertura da ferida curativo terapia por pressao negativa",
  critico: {
    tempo: "Evisceração: cobrir e operar",
    texto: "Evisceração: cobrir as vísceras com compressas estéreis úmidas em SF 0,9% morno, não tentar reintroduzir, jejum, analgesia e cirurgia de urgência."
  },
  alarmes: [
    "Vísceras expostas ou palpáveis sob a pele (evisceração / evisceração contida)",
    "Saída abundante de líquido serossanguinolento pela ferida de laparotomia (deiscência aponeurótica iminente)",
    "Saída de fezes, bile ou secreção entérica (fístula, deiscência de anastomose)",
    "Febre, sepse, peritonite",
    "Necrose de bordas, crepitação ou dor desproporcional (infecção necrosante)"
  ],
  conduta: [
    "Avaliar: só pele/subcutâneo × fáscia aberta × vísceras expostas; sinais de infecção ou fístula",
    "EVISCERAÇÃO: compressas estéreis úmidas com SF 0,9% morno cobrindo as alças, campo/plástico estéril por cima; não reintroduzir",
    "Decúbito dorsal com joelhos fletidos e cabeceira levemente elevada (reduz tensão); evitar tosse e esforço",
    "Jejum, acesso venoso, cristaloide, analgesia IV, antiemético; SNG se vômitos ou distensão",
    "Antibiótico (cefazolina, ou ceftriaxona + metronidazol se cirurgia de trato digestivo/contaminação) e chamar o cirurgião para fechamento no centro cirúrgico",
    "DEISCÊNCIA SUPERFICIAL (fáscia íntegra): abrir/explorar, drenar coleção, desbridar tecido desvitalizado; curativo com SF e cicatrização por segunda intenção (ou fechamento tardio)",
    "Terapia por pressão negativa em feridas grandes quando disponível, conforme cirurgião",
    "Investigar causas: infecção, hematoma/seroma, desnutrição, tosse, distensão, diabetes descontrolado, corticoide"
  ],
  exames: [
    "Hemograma, PCR, glicemia, albumina, função renal, eletrólitos, coagulograma",
    "Cultura de secreção se infecção",
    "TC de abdome com contraste se suspeita de coleção profunda, fístula ou deiscência de anastomose (não atrasar a cirurgia na evisceração)"
  ],
  diferenciais: [
    "Seroma ou hematoma drenando pela ferida",
    "Infecção de sítio cirúrgico superficial (ver ficha infeccao-sitio-cirurgico)",
    "Fístula enterocutânea",
    "Hérnia incisional (tardia)"
  ],
  prescricao: {
    hospitalar: "EVISCERAÇÃO — CONDUTA INICIAL (ADULTO)\n1. Jejum absoluto.\n2. Cobrir as vísceras com compressas estéreis umedecidas em SF 0,9% morno; trocar o umedecimento para não secar. Não reintroduzir.\n3. Decúbito dorsal, joelhos fletidos, cabeceira 30°.\n4. Ringer lactato 1.000 mL IV de 8/8 h (ajustar à volemia).\n5. Cefazolina 2 g IV agora (cirurgia de trato digestivo ou contaminação: ceftriaxona 2 g IV + metronidazol 500 mg IV).\n6. Dipirona 1 g IV lento de 6/6 h; morfina 2–4 mg IV SN dor.\n7. Ondansetrona 4 mg IV de 8/8 h SN (evitar vômitos e esforço).\n8. Sinais vitais de 2/2 h. Cirurgia geral imediata para fechamento em centro cirúrgico.\n\nDEISCÊNCIA SUPERFICIAL — CURATIVO\n1. Limpar a ferida com SF 0,9% em jato a cada troca; remover tecido desvitalizado.\n2. Preencher a cavidade com gaze umedecida em SF (ou cobertura indicada pela comissão de curativos) e cobrir com gaze seca; trocar 1 a 2 vezes ao dia.",
    ambulatorial: "DEISCÊNCIA SUPERFICIAL — CUIDADOS EM CASA/UBS\n1. Curativo diário na UBS: lavar com SF 0,9% em jato, preencher a cavidade com gaze úmida e cobrir.\n2. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Antibiótico só se celulite ao redor (ver ficha infeccao-sitio-cirurgico)."
  },
  orientacoesRetorno: [
    "Ao tossir, espirrar ou levantar, apoiar a barriga com as mãos ou travesseiro sobre o corte",
    "Não pegar peso nem fazer força; tratar tosse e intestino preso",
    "Fazer o curativo todos os dias como orientado; comer bem, com proteína",
    "Voltar imediatamente se: algo sair pelo corte, saída de muito líquido rosado, fezes ou líquido verde, febre, vermelhidão que aumenta ou dor forte"
  ],
  encaminhar: [
    "Cirurgia geral imediata: evisceração, deiscência aponeurótica, fístula",
    "Ambulatório de feridas/UBS com retorno ao cirurgião: deiscência superficial"
  ],
  fontes: [
    "WHO — Global guidelines for the prevention of surgical site infection, 2ª ed. (2018)",
    "EHS — Guidelines for the closure of abdominal wall incisions (Muysoms et al., 2015) e atualização (Deerenberg et al., 2022)",
    "Sabiston Textbook of Surgery, 21ª ed. (2022) — complicações da ferida operatória"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
