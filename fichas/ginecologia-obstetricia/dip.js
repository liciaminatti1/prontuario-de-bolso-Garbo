// Doença inflamatória pélvica
registrarFicha({
  id: "dip",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "completo",
  titulo: "Doença inflamatória pélvica (DIP)",
  resumo: "Infecção ascendente do trato genital superior (endometrite, salpingite, abscesso tubo-ovariano, pelviperitonite), em geral por gonococo, clamídia, Mycoplasma e anaeróbios. Mulher sexualmente ativa com dor pélvica e dor à mobilização do colo ou anexos: tratar empiricamente.",
  palavrasChave: "dip doenca inflamatoria pelvica salpingite anexite endometrite abscesso tubo ovariano pelviperitonite fitz hugh curtis dor pelvica ceftriaxona doxiciclina metronidazol clindamicina gentamicina diu",
  critico: {
    tempo: "Antibiótico no mesmo dia",
    texto: "Limiar baixo para tratar: dor pélvica + dor à mobilização do colo, do útero ou dos anexos basta. Atraso aumenta infertilidade, gravidez ectópica e dor pélvica crônica. Sempre excluir gestação (beta-hCG)."
  },
  alarmes: [
    "Instabilidade hemodinâmica, sinais de sepse ou peritonite generalizada",
    "Massa anexial ou suspeita de abscesso tubo-ovariano",
    "Beta-hCG positivo (excluir ectópica; DIP na gestação = internação)",
    "Vômitos ou incapacidade de tomar medicação oral",
    "Sem melhora clínica em 72 h de tratamento ambulatorial",
    "Dúvida com apendicite ou outra emergência cirúrgica"
  ],
  condutaInicial: [
    "Sinais vitais, beta-hCG, exame especular e toque bimanual",
    "Critério mínimo para tratar: dor à mobilização do colo, dor uterina ou dor anexial em mulher com dor pélvica sem outra causa",
    "Coletar NAAT para gonococo/clamídia, testes rápidos (HIV, sífilis, hepatites) sem atrasar o antibiótico",
    "Leve/moderada sem critério de internação: ceftriaxona 500 mg IM dose única + doxiciclina 100 mg 12/12 h + metronidazol 500 mg 12/12 h, por 14 dias",
    "Critério de internação: ceftriaxona 1 g IV/dia + doxiciclina + metronidazol (ou clindamicina + gentamicina)",
    "DIU: não precisa retirar; reavaliar em 72 h e retirar se sem melhora",
    "Tratar parcerias dos últimos 60 dias para gonococo e clamídia (ceftriaxona 500 mg IM + azitromicina 1 g VO)",
    "Analgesia e reavaliação obrigatória em 72 h"
  ],
  fataisExcluir: [
    "Gravidez ectópica",
    "Apendicite aguda",
    "Torção anexial",
    "Abscesso tubo-ovariano roto / peritonite",
    "Sepse de foco pélvico (inclusive pós-aborto)"
  ],
  proximaDecisao: "Reavaliar em 72 h: espera-se melhora da febre, dor e dor à mobilização. Sem melhora: internar, USG transvaginal (abscesso), terapia parenteral e considerar retirada de DIU e abordagem cirúrgica (drenagem guiada ou laparoscopia).",
  clinica: {
    anamnese: [
      "Dor abdominal baixa/pélvica (bilateral em geral), dispareunia, início perto ou após a menstruação",
      "Corrimento vaginal, sangramento irregular ou pós-coito, disúria",
      "Febre, náuseas, vômitos",
      "Dor em hipocôndrio direito (peri-hepatite — Fitz-Hugh-Curtis)",
      "Parcerias novas ou múltiplas, IST prévia, parceria com sintomas, sem preservativo",
      "Procedimento uterino recente (DIU nas primeiras 3 semanas, histeroscopia, curetagem, aborto)",
      "DUM e atraso menstrual"
    ],
    exameFisico: [
      "Temperatura, PA, FC, sinais de sepse",
      "Abdome: dor em fossas ilíacas, descompressão (peritonite)",
      "Especular: mucopus endocervical, colo friável, corrimento",
      "Toque: dor à mobilização do colo, dor uterina, dor ou massa anexial",
      "Hipocôndrio direito doloroso"
    ],
    diferenciais: [
      { dx: "Gravidez ectópica", pista: "Atraso menstrual, beta-hCG positivo, sangramento; massa anexial" },
      { dx: "Apendicite", pista: "Dor periumbilical migrando para FID, anorexia; dor unilateral à direita" },
      { dx: "Torção ou cisto ovariano roto", pista: "Dor súbita, unilateral, intensa; náuseas; USG com Doppler" },
      { dx: "Endometriose", pista: "Dor cíclica crônica, dismenorreia progressiva" },
      { dx: "ITU / pielonefrite / litíase", pista: "Disúria, Giordano, urina alterada" },
      { dx: "Abortamento infectado", pista: "Atraso menstrual, manipulação uterina, sangramento fétido" }
    ],
    gravidade: [
      "Critérios mínimos (CDC/PCDT): dor à mobilização do colo, OU dor uterina, OU dor anexial",
      "Critérios adicionais que aumentam a especificidade: febre > 38,3 °C, mucopus/colo friável, leucócitos no exame a fresco, VHS ou PCR elevados, NAAT positivo para gonococo/clamídia",
      "Critérios definitivos: biópsia com endometrite, USG/RM com tubas espessas cheias de líquido ou abscesso, laparoscopia",
      "Internação: abscesso tubo-ovariano, gestação, sem resposta em 72 h, intolerância oral, estado geral grave (náuseas, vômitos, febre alta), emergência cirúrgica não excluída"
    ]
  },
  exames: [
    {
      nome: "Beta-hCG",
      pedido: "Beta-hCG (teste rápido urinário ou sérico).",
      porQue: "Excluir gravidez ectópica; DIP na gestação exige internação.",
      esperar: "Imediato.",
      interpretacao: "Positivo: USG transvaginal urgente; doxiciclina contraindicada.",
      limitacoes: "—"
    },
    {
      nome: "Biologia molecular para clamídia e gonococo",
      pedido: "Pesquisa de Chlamydia trachomatis e Neisseria gonorrhoeae por biologia molecular em swab endocervical/vaginal.",
      porQue: "Confirmar etiologia e convocar parcerias.",
      esperar: "Dias.",
      interpretacao: "Negativo não exclui DIP (polimicrobiana).",
      limitacoes: "Não atrasar tratamento."
    },
    {
      nome: "Hemograma e PCR",
      pedido: "Hemograma completo, proteína C reativa (e VHS).",
      porQue: "Apoio diagnóstico e gravidade.",
      esperar: "Leucocitose e PCR alta na DIP moderada/grave.",
      interpretacao: "Normal não exclui DIP leve.",
      limitacoes: "Inespecíficos."
    },
    {
      nome: "USG transvaginal",
      pedido: "Ultrassonografia pélvica transvaginal (pesquisar abscesso tubo-ovariano, hidrossalpinge, gestação).",
      porQue: "Massa anexial, gravidade, sem resposta em 72 h, gestação.",
      esperar: "Na DIP leve costuma ser normal.",
      interpretacao: "Abscesso tubo-ovariano: internar; > 7–8 cm ou sem resposta em 48–72 h: drenagem.",
      limitacoes: "Não exclui DIP se normal."
    },
    {
      nome: "Urina, testes rápidos e sorologias",
      pedido: "Urina tipo 1 e urocultura; teste rápido para HIV, sífilis, hepatite B e hepatite C.",
      porQue: "Diferencial urinário; coinfecção por IST.",
      esperar: "—",
      interpretacao: "Leucocitúria pode ocorrer na DIP (inflamação contígua).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    { droga: "Ceftriaxona (ambulatorial)", linha: "l1", dose: "500 mg", via: "IM", intervalo: "Dose única", duracao: "—", monitorizacao: "Alergia", contraindicacoes: "Anafilaxia a cefalosporina", ajustes: "Peso ≥ 150 kg: 1 g. Diluir em lidocaína 1% sem vasoconstritor" },
    { droga: "Doxiciclina", linha: "l1", dose: "100 mg", via: "VO", intervalo: "12/12 h", duracao: "14 dias", monitorizacao: "Esofagite, fotossensibilidade", contraindicacoes: "Gestação, lactação prolongada (preferir azitromicina na lactante)", ajustes: "Mesma dose oral na internação (biodisponibilidade oral ≈ IV)" },
    { droga: "Metronidazol", linha: "l1", dose: "500 mg VO (ou 400 mg) / 500 mg IV na internação", via: "VO ou IV", intervalo: "12/12 h", duracao: "14 dias", monitorizacao: "Náusea", contraindicacoes: "Álcool", ajustes: "IV: frasco de 500 mg/100 mL, infundir em 30–60 min; passar para VO com melhora" },
    { droga: "Ceftriaxona (hospitalar)", linha: "l1", dose: "1 g", via: "IV", intervalo: "24/24 h", duracao: "Até 24–48 h de melhora clínica, depois VO completando 14 dias", monitorizacao: "Curva térmica, dor, leucograma", contraindicacoes: "Anafilaxia", ajustes: "Diluir em 100 mL de SF 0,9% e infundir em 30 min. Associar doxiciclina + metronidazol" },
    { droga: "Clindamicina + gentamicina", linha: "alt", dose: "Clindamicina 900 mg IV 8/8 h + gentamicina 3–5 mg/kg IV 1 vez ao dia", via: "IV", intervalo: "Ver dose", duracao: "Até 24–48 h de melhora; completar 14 dias com doxiciclina VO (ou clindamicina 450 mg VO 6/6 h se abscesso)", monitorizacao: "Creatinina, audição; nível sérico de gentamicina se uso prolongado", contraindicacoes: "Gentamicina: DRC, gestação (evitar)", ajustes: "Clindamicina em 100 mL SF 0,9% em 30 min; gentamicina em 100 mL SF 0,9% em 30–60 min. Ajuste renal da gentamicina. Opção na alergia grave a betalactâmicos" },
    { droga: "Fluoroquinolona como esquema empírico", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Resistência do gonococo no Brasil", ajustes: "Só se alergia grave a cefalosporina, gonococo excluído e com acompanhamento especializado" }
  ],
  destino: {
    agora: ["Primeira dose do antibiótico na unidade", "Beta-hCG antes de prescrever doxiciclina"],
    reavaliar: ["Obrigatório em 72 h (presencial)", "Sem melhora: internar"],
    alta: ["Leve/moderada, sem critério de internação, com retorno garantido em 72 h", "Após internação: afebril 24–48 h, tolerando VO, completar 14 dias"],
    observacao: ["Dúvida diagnóstica com abdome agudo: observação com reavaliação seriada no PS"],
    internacao: ["Abscesso tubo-ovariano", "Gestante", "Sem resposta em 72 h", "Intolerância oral, febre alta, sepse", "Emergência cirúrgica não excluída"],
    transferencia: ["Abscesso que precisa drenagem ou suspeita de rotura: centro com ginecologia cirúrgica"]
  },
  prescricao: {
    ambulatorial: "DIP LEVE/MODERADA (não gestante)\nUSO INTRAMUSCULAR\n1. Ceftriaxona 500 mg ----------------------------- 1 frasco-ampola\n   Aplicar 500 mg IM profundo, dose única, na unidade (diluir em lidocaína 1% sem vasoconstritor).\nUSO ORAL\n2. Doxiciclina 100 mg ----------------------------- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias, com copo cheio de água, sentada, longe de leite e antiácidos.\n3. Metronidazol 250 mg ---------------------------- 56 comprimidos\n   Tomar 2 comprimidos de 12 em 12 horas por 14 dias. Não ingerir álcool.\n4. Ibuprofeno 600 mg ------------------------------ 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas após refeição, se dor, por até 5 dias.\n5. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n\nPARCERIAS (últimos 60 dias) — receita própria\n1. Ceftriaxona 500 mg IM dose única + Azitromicina 500 mg, 2 comprimidos VO dose única.\n\nRETORNO OBRIGATÓRIO EM 72 HORAS.",
    hospitalar: "DIP COM CRITÉRIO DE INTERNAÇÃO — ADULTO (peso: ___ kg)\n1. Dieta livre conforme aceitação (zero se abordagem cirúrgica prevista).\n2. Acesso venoso. Se sepse: Ringer lactato ou SF 0,9% 30 mL/kg IV em até 3 horas.\n3. Ceftriaxona 1 g + SF 0,9% 100 mL IV em 30 minutos, 1 vez ao dia.\n4. Doxiciclina 100 mg VO de 12 em 12 horas (VO preferível; não há doxiciclina IV de rotina no SUS). Gestante: não usar doxiciclina; esquema definido com a obstetrícia (cobertura para clamídia com azitromicina).\n5. Metronidazol 500 mg/100 mL IV em 30 a 60 minutos de 12 em 12 horas (passar a 500 mg VO de 12/12 h quando tolerar).\n   ALTERNATIVA (alergia grave a betalactâmico): Clindamicina 900 mg + SF 0,9% 100 mL IV em 30 min de 8/8 h + Gentamicina 3 a 5 mg/kg + SF 0,9% 100 mL IV em 30–60 min 1 vez ao dia (ajustar pela função renal).\n6. Dipirona 1 g IV de 6 em 6 horas se dor ou febre.\n7. Cetoprofeno 100 mg + SF 0,9% 100 mL IV de 12 em 12 horas se dor (se sem contraindicação).\n8. Ondansetrona 4 mg IV de 8 em 8 horas se náusea.\n9. Enoxaparina 40 mg SC 1 vez ao dia se mobilidade reduzida e sem contraindicação.\n10. USG transvaginal; beta-hCG; hemograma, PCR, creatinina; NAAT gonococo/clamídia; testes rápidos.\n11. Controles: sinais vitais de 6/6 h, curva térmica, dor. Melhora por 24–48 h: transição para VO (doxiciclina + metronidazol) completando 14 dias."
  },
  orientacoesRetorno: [
    "Voltar obrigatoriamente em 3 dias para reavaliação, mesmo se melhor",
    "Tomar os remédios até o fim (14 dias); não beber álcool durante o metronidazol",
    "Sem relações sexuais até terminar o tratamento e a parceria ser tratada",
    "Procurar o PS imediatamente se piorar a dor, febre alta, vômitos, desmaio ou não conseguir tomar os remédios",
    "Se usar DIU, não precisa retirar agora; será reavaliado",
    "Repetir exames de IST em 3 meses e usar preservativo"
  ],
  tabelas: [
    {
      titulo: "Esquemas para DIP (PCDT IST 2022 / CDC 2021)",
      colunas: ["Cenário", "Esquema", "Duração"],
      linhas: [
        ["Ambulatorial", "Ceftriaxona 500 mg IM dose única + doxiciclina 100 mg VO 12/12 h + metronidazol 500 mg VO 12/12 h", "14 dias"],
        ["Hospitalar 1ª opção", "Ceftriaxona 1 g IV 24/24 h + doxiciclina 100 mg VO 12/12 h + metronidazol 500 mg IV/VO 12/12 h", "14 dias (IV até 24–48 h de melhora)"],
        ["Hospitalar alternativa", "Clindamicina 900 mg IV 8/8 h + gentamicina 3–5 mg/kg IV 24/24 h", "14 dias (completar com VO)"]
      ],
      nota: "Metronidazol 400 mg VO pode substituir o de 500 mg quando for a apresentação disponível."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022); capítulo Doença inflamatória pélvica (Epidemiol Serv Saúde, 2021)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines: Pelvic Inflammatory Disease (2021)",
    "TelessaúdeRS-UFRGS — Tratamento da doença inflamatória pélvica (adaptado de MS 2022 e CDC 2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
