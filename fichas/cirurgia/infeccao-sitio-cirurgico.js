// Infecção de sítio cirúrgico, seroma e hematoma de ferida
registrarFicha({
  id: "infeccao-sitio-cirurgico",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Infecção de sítio cirúrgico, seroma e hematoma de ferida",
  resumo: "ISC: infecção até 30 dias após a cirurgia (até 90 dias se prótese/implante), superficial (pele e subcutâneo), profunda (fáscia e músculo) ou de órgão/espaço. O tratamento principal da ISC superficial é abrir e drenar a ferida; antibiótico só se celulite extensa ou sinais sistêmicos. Seroma e hematoma são coleções não infectadas.",
  palavrasChave: "infeccao sitio cirurgico isc ferida operatoria infectada pus no corte seroma hematoma celulite ferida pos operatorio retirar pontos drenagem cefalexina amoxicilina clavulanato",
  critico: {
    tempo: "Abrir e drenar a ferida",
    texto: "Pus na ferida: retirar pontos sobre a área, drenar, lavar e deixar aberta. Antibiótico é complemento quando há celulite > 5 cm, febre ou sinais sistêmicos."
  },
  alarmes: [
    "Febre alta, taquicardia, hipotensão (sepse)",
    "Dor desproporcional, bolhas, necrose, crepitação, eritema que avança rápido (fasciíte necrosante — cirurgia imediata)",
    "Secreção entérica, biliar ou fecal (fístula, deiscência de anastomose)",
    "Fáscia aberta ou vísceras visíveis (ver ficha deiscencia-evisceracao)",
    "Infecção com prótese/tela/implante (vascular, ortopédica, mama)",
    "Hematoma em expansão, com queda de Hb ou em uso de anticoagulante"
  ],
  conduta: [
    "Classificar: ISC superficial, profunda ou órgão/espaço (dor abdominal, febre, íleo → TC)",
    "ISC SUPERFICIAL: retirar pontos/grampos sobre a área flutuante, drenar, lavar com SF 0,9% em jato, explorar com pinça (fáscia íntegra?), deixar aberta com gaze úmida",
    "Coletar secreção para cultura (Gram e cultura) quando abrir a ferida",
    "Antibiótico se eritema/endurado > 5 cm além da incisão, febre > 38,5 °C, FC > 110 ou leucócitos > 12.000 (IDSA): 24–48 h na ferida bem drenada, mais tempo se celulite",
    "Escolha: cirurgia limpa de tronco/membro → cobrir estafilococo e estreptococo (cefalexina); cirurgia de trato digestivo, genital ou períneo → cobrir Gram-negativos e anaeróbios (amoxicilina-clavulanato)",
    "SEROMA: pequeno e assintomático → observar; grande, tenso ou sintomático → aspiração com técnica estéril (pode repetir); suspeita de infecção → cultura",
    "HEMATOMA: pequeno → compressa fria nas primeiras 48 h e observar; em expansão, tenso, com sangramento ativo ou infectado → cirurgião (drenagem/hemostasia); rever anticoagulantes",
    "Curativo diário (UBS); reavaliar em 48–72 h"
  ],
  exames: [
    "Cultura de secreção da ferida (swab profundo ou aspirado, não da superfície)",
    "Hemograma e PCR se sinais sistêmicos; glicemia (diabético)",
    "USG de partes moles para coleção (seroma, hematoma, abscesso) se dúvida",
    "TC de abdome com contraste se suspeita de ISC profunda/órgão-espaço"
  ],
  diferenciais: [
    "Reação a fio de sutura (granuloma, fio exposto)",
    "Dermatite de contato ao curativo/adesivo",
    "Celulite sem coleção",
    "Fístula enterocutânea",
    "Hérnia incisional"
  ],
  tratamento: [
    {
      droga: "Cefalexina",
      linha: "l1",
      dose: "500 mg",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "5–7 dias (celulite); 24–48 h se só complemento à drenagem",
      monitorizacao: "Melhora do eritema em 48–72 h",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Cirurgia limpa (pele, tronco, membros, mama, hérnia). Suspeita de MRSA: sulfametoxazol-trimetoprima 800/160 mg 12/12 h. Alérgico: clindamicina 300 mg VO 6/6 h"
    },
    {
      droga: "Amoxicilina-clavulanato",
      linha: "l1",
      dose: "875/125 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "5–7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Cirurgia de trato digestivo, genital feminino ou períneo. Alérgico: ciprofloxacino 500 mg 12/12 h + metronidazol 500 mg 8/8 h"
    },
    {
      droga: "Cefazolina (internação)",
      linha: "alt",
      dose: "1–2 g",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Até melhora e transição VO",
      monitorizacao: "Sinais sistêmicos",
      contraindicacoes: "—",
      ajustes: "Trato digestivo/períneo com sinais sistêmicos: ceftriaxona 2 g/dia + metronidazol 500 mg 8/8 h ou piperacilina-tazobactam conforme gravidade"
    }
  ],
  prescricao: {
    ambulatorial: "ISC SUPERFICIAL DRENADA — ADULTO\nCURATIVO (UBS, 1 vez ao dia)\n1. Lavar a ferida com SF 0,9% em jato (seringa 20 mL com agulha 40x12), secar a pele ao redor, preencher a cavidade com gaze umedecida em SF e cobrir com gaze seca.\n\nUSO ORAL (se celulite > 5 cm ou sinais sistêmicos)\n2. Cefalexina 500 mg ------------------------------ 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n   (Cirurgia de intestino, ginecológica ou perineal: amoxicilina + clavulanato 875/125 mg — 14 comprimidos — 1 de 12 em 12 horas por 7 dias.)\n3. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.",
    hospitalar: "ISC COM SINAIS SISTÊMICOS — ADULTO\n1. Dieta conforme cirurgia.\n2. Cefazolina 2 g + SF 0,9% 100 mL IV de 8/8 h (cirurgia limpa).\n   OU trato digestivo/períneo: ceftriaxona 2 g IV 1 vez ao dia + metronidazol 500 mg IV de 8/8 h.\n3. Abertura e drenagem da ferida pelo cirurgião; cultura da secreção.\n4. Curativo com SF 0,9% 1 a 2 vezes ao dia.\n5. Dipirona 1 g IV de 6/6 h se dor ou febre.\n6. Glicemia capilar antes das refeições se diabético (alvo 140–180 mg/dL).\n7. Curva térmica; hemograma e PCR em 48 h."
  },
  orientacoesRetorno: [
    "Fazer o curativo todos os dias na UBS ou em casa como ensinado, com mãos lavadas",
    "A ferida aberta fecha sozinha de dentro para fora em algumas semanas",
    "Voltar imediatamente se: febre, vermelhidão que se espalha, dor forte, bolhas ou pele escura, saída de fezes ou líquido verde, abertura maior do corte",
    "Diabéticos: controlar bem a glicemia ajuda a cicatrizar",
    "Retorno para reavaliação em 48–72 h"
  ],
  encaminhar: [
    "Cirurgião no mesmo dia: ISC profunda/órgão-espaço, fáscia aberta, infecção com implante, suspeita de fasciíte necrosante, hematoma em expansão",
    "Retorno ao cirurgião que operou para seguimento"
  ],
  tabelas: [
    {
      titulo: "Classificação da ISC (CDC/NHSN, ANVISA)",
      colunas: ["Tipo", "Tecidos", "Exemplos"],
      linhas: [
        ["Incisional superficial", "Pele e subcutâneo", "Pus na incisão, eritema, calor, dor; abertura deliberada pelo cirurgião"],
        ["Incisional profunda", "Fáscia e músculo", "Deiscência profunda espontânea, abscesso profundo"],
        ["Órgão/espaço", "Qualquer órgão ou cavidade manipulada", "Abscesso intra-abdominal, empiema, osteomielite"]
      ],
      nota: "Prazo: até 30 dias após o procedimento ou até 90 dias se implante (conforme procedimento na NHSN/ANVISA)."
    }
  ],
  fontes: [
    "ANVISA — Critérios Diagnósticos de Infecção Relacionada à Assistência à Saúde (2017) e Medidas de prevenção de infecção relacionada à assistência à saúde (2017)",
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (Stevens et al., 2014)",
    "WHO — Global guidelines for the prevention of surgical site infection, 2ª ed. (2018)",
    "CDC/NHSN — Surgical Site Infection Event (2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
