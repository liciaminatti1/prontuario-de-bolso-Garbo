// Gravidez ectópica
registrarFicha({
  id: "gravidez-ectopica",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Gravidez ectópica",
  resumo: "Implantação fora da cavidade uterina (95% tubária). Pensar em toda mulher em idade fértil com atraso menstrual, dor pélvica e/ou sangramento vaginal. Diagnóstico por beta-hCG quantitativo + USG transvaginal; tratamento expectante, com metotrexato ou cirúrgico.",
  palavrasChave: "gravidez ectopica gestacao ectopica prenhez ectopica tubaria rota beta hcg zona discriminatoria metotrexato mtx salpingectomia salpingostomia laparoscopia gestacao de localizacao desconhecida pul hemoperitonio anti d",
  critico: {
    tempo: "Instável: centro cirúrgico já",
    texto: "Beta-hCG positivo + dor + choque ou líquido livre volumoso = ectópica rota até prova em contrário. Reanimar e levar à cirurgia sem esperar exames."
  },
  alarmes: [
    "Hipotensão, taquicardia, síncope, palidez (hemoperitônio)",
    "Dor abdominal intensa com defesa ou dor referida no ombro (irritação diafragmática)",
    "Líquido livre em moderada ou grande quantidade (sobretudo no espaço hepatorrenal) à USG/FAST",
    "Embrião com batimento cardíaco fora do útero",
    "Queda de hemoglobina em exames seriados"
  ],
  condutaInicial: [
    "Beta-hCG em toda mulher em idade fértil com dor abdominal ou sangramento (teste rápido urinário já na triagem)",
    "Sinais vitais, 2 acessos calibrosos, hemograma, tipagem ABO/Rh e prova cruzada",
    "Instável: cristaloide em bolus, reservar sangue, acionar ginecologia/cirurgia: laparotomia ou laparoscopia de urgência",
    "Estável: beta-hCG quantitativo + USG transvaginal; FAST se disponível",
    "Rh negativo não sensibilizada: imunoglobulina anti-D"
  ],
  fataisExcluir: [
    "Ectópica rota com choque hemorrágico",
    "Gestação heterotópica (sobretudo após reprodução assistida)",
    "Ectópica cervical, cornual/intersticial ou em cicatriz de cesárea (sangramento maciço)",
    "Torção anexial e cisto de corpo lúteo roto (diferenciais cirúrgicos)"
  ],
  proximaDecisao: "Estável, sem saco gestacional intrauterino: beta-hCG acima da zona discriminatória (em geral 1.500–2.000 mUI/mL, até 3.500 em alguns protocolos) sem gestação tópica → alta suspeita de ectópica. Abaixo dela → gestação de localização desconhecida: repetir beta-hCG em 48 h e USG. Ectópica confirmada → escolher expectante, metotrexato ou cirurgia pelos critérios abaixo.",
  clinica: {
    anamnese: [
      "Data da última menstruação, atraso, teste de gravidez prévio",
      "Dor (início, localização, irradiação para ombro), sangramento, síncope",
      "Fatores de risco: ectópica prévia, cirurgia tubária ou laqueadura, DIP/clamídia, DIU in situ, reprodução assistida, tabagismo, endometriose",
      "Uso de DIU ou laqueadura não excluem: se engravidar, a chance de ectópica é alta",
      "Desejo reprodutivo futuro (influencia a escolha do tratamento)"
    ],
    exameFisico: [
      "Sinais vitais e índice de choque (FC/PAS > 1 sugere hemorragia importante)",
      "Abdome: defesa, descompressão dolorosa, distensão",
      "Especular: origem e volume do sangramento, colo",
      "Toque: dor à mobilização do colo, massa anexial, abaulamento do fundo de saco (grito de Douglas)",
      "Útero menor que o esperado para a idade gestacional"
    ],
    diferenciais: [
      { dx: "Abortamento (ameaça, incompleto, completo)", pista: "Sangramento predominante, colo pérvio, restos ou saco intrauterino" },
      { dx: "Gestação intrauterina inicial", pista: "Beta-hCG abaixo da zona discriminatória com subida adequada em 48 h" },
      { dx: "Cisto de corpo lúteo roto/hemorrágico", pista: "Gestação tópica ou beta-hCG negativo; cisto com conteúdo espesso" },
      { dx: "Torção anexial", pista: "Dor súbita com náuseas, ovário aumentado" },
      { dx: "DIP, apendicite, litíase ureteral", pista: "Febre, leucocitose, dor em FID, hematúria" }
    ],
    gravidade: [
      "Rota/instável: choque, hemoperitônio volumoso → cirurgia imediata",
      "Íntegra estável: candidata a expectante, metotrexato ou cirurgia eletiva de urgência",
      "Gestação de localização desconhecida (GLD): beta-hCG positivo sem gestação intra ou extrauterina visível à USG transvaginal"
    ]
  },
  exames: [
    {
      nome: "Beta-hCG quantitativo seriado",
      pedido: "Beta-hCG quantitativo sérico. Repetir em 48 h no mesmo laboratório.",
      porQue: "Correlacionar com a USG (zona discriminatória) e acompanhar a evolução.",
      esperar: "Na gestação tópica viável, o beta-hCG costuma subir pelo menos cerca de 35–50% em 48 h nos valores iniciais.",
      interpretacao: "Subida menor que a esperada ou platô → gestação não viável (ectópica ou abortamento). Queda > 50% em 48 h → falha gestacional em resolução, mais provável. Nenhum padrão exclui ectópica sozinho.",
      limitacoes: "Valor isolado não localiza a gestação. Ectópica pode romper com beta-hCG baixo."
    },
    {
      nome: "USG transvaginal",
      pedido: "Ultrassonografia transvaginal — pesquisar gestação intrauterina, massa anexial e líquido livre. Beta-hCG: ___ mUI/mL.",
      porQue: "Localizar a gestação e avaliar sangramento intra-abdominal.",
      esperar: "Saco gestacional intrauterino visível com beta-hCG acima da zona discriminatória.",
      interpretacao: "Massa anexial separada do ovário (anel tubário) ou embrião extrauterino = ectópica. Útero vazio + beta-hCG acima da zona discriminatória = ectópica provável. Pseudossaco (coleção central sem duplo halo) engana.",
      limitacoes: "Operador-dependente. Obesidade, miomas e gestação múltipla alteram a zona discriminatória."
    },
    {
      nome: "Laboratório pré-tratamento",
      pedido: "Hemograma completo, tipagem ABO/Rh, Coombs indireto se Rh negativo, ureia, creatinina, TGO, TGP.",
      porQue: "Avaliar perda sanguínea e elegibilidade ao metotrexato.",
      esperar: "Função renal e hepática normais e plaquetas e leucócitos normais para usar metotrexato.",
      interpretacao: "Alteração hepática, renal ou hematológica contraindica metotrexato.",
      limitacoes: "Hemoglobina inicial pode estar normal no sangramento agudo."
    }
  ],
  tratamento: [
    {
      droga: "Metotrexato — dose única",
      linha: "l1",
      dose: "50 mg/m² de superfície corporal",
      via: "IM",
      intervalo: "Dose única no dia 1; beta-hCG nos dias 4 e 7",
      duracao: "Queda ≥ 15% entre os dias 4 e 7 → beta-hCG semanal até negativo. Queda < 15% → repetir a dose (máximo de 2–3 doses; falha → cirurgia)",
      monitorizacao: "Beta-hCG D4, D7 e depois semanal; hemograma, TGO/TGP e creatinina antes e na reavaliação; sinais de rotura",
      contraindicacoes: "Instabilidade hemodinâmica ou rotura; gestação intrauterina coexistente; amamentação; imunodeficiência; alcoolismo, hepatopatia; discrasia sanguínea; doença pulmonar ativa; úlcera péptica; insuficiência renal; hipersensibilidade; impossibilidade de seguimento",
      ajustes: "Critérios de elegibilidade (FEBRASGO): estável, ectópica íntegra, massa < 3,5 cm, sem batimento cardíaco embrionário, beta-hCG < 5.000 mUI/mL, desejo de preservar a fertilidade e seguimento garantido. Dor transitória nos dias 3–7 é comum; dor forte = reavaliar rotura. Evitar ácido fólico, AINE, álcool, sol e relação sexual até a resolução; evitar nova gestação por pelo menos 3 meses"
    },
    {
      droga: "Conduta expectante",
      linha: "alt",
      dose: "Sem medicação",
      via: "—",
      intervalo: "Beta-hCG a cada 48 h e depois semanal",
      duracao: "Até beta-hCG negativo",
      monitorizacao: "Queda progressiva do beta-hCG; dor; sinais vitais",
      contraindicacoes: "Beta-hCG subindo ou alto, massa grande, batimento cardíaco, líquido livre significativo, sem seguimento",
      ajustes: "Opção para paciente estável, assintomática ou oligossintomática, com beta-hCG baixo e em queda espontânea e sem embrião vivo (FEBRASGO). Platô ou subida → metotrexato ou cirurgia"
    },
    {
      droga: "Salpingectomia (preferencial) ou salpingostomia",
      linha: "l1",
      dose: "Laparoscopia se estável; laparotomia se instável ou sem laparoscopia",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Após salpingostomia: beta-hCG semanal até negativo (risco de trofoblasto persistente)",
      contraindicacoes: "—",
      ajustes: "Indicações: instabilidade ou rotura, contraindicação ou falha do metotrexato, embrião com batimento, massa grande ou beta-hCG alto, impossibilidade de seguimento, preferência da paciente. Tuba contralateral normal → salpingectomia; contralateral doente e desejo reprodutivo → considerar salpingostomia"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "adj",
      dose: "1 ampola (250–300 mcg, conforme apresentação disponível)",
      via: "IM",
      intervalo: "Dose única, até 72 h do diagnóstico/procedimento",
      duracao: "—",
      monitorizacao: "Tipagem e Coombs indireto",
      contraindicacoes: "Rh positivo; Coombs indireto positivo (já sensibilizada)",
      ajustes: "Mulher Rh negativo não sensibilizada, sobretudo se tratamento cirúrgico. Algumas diretrizes dispensam no tratamento clínico; na dúvida, aplicar"
    }
  ],
  destino: {
    agora: [
      "Instável: reanimação e centro cirúrgico",
      "Estável com diagnóstico definido: decidir expectante, metotrexato ou cirurgia com a ginecologia"
    ],
    reavaliar: [
      "GLD estável: beta-hCG em 48 h e nova USG",
      "Metotrexato: beta-hCG no dia 4 e no dia 7"
    ],
    alta: [
      "Estável, dor controlada, Hb estável, com retorno garantido para beta-hCG e orientação clara dos sinais de rotura",
      "Receber por escrito as datas dos exames de controle"
    ],
    observacao: [
      "GLD com dor leve e beta-hCG em investigação: observar com sinais vitais e Hb seriada se moradia distante ou seguimento incerto"
    ],
    internacao: [
      "Ectópica rota ou instável",
      "Cirurgia indicada",
      "Dor importante durante tratamento com metotrexato",
      "Ectópica cervical, cornual ou em cicatriz de cesárea"
    ],
    transferencia: [
      "Sem ginecologista, centro cirúrgico ou banco de sangue: transferir após estabilização inicial, com acesso e cristaloide correndo"
    ]
  },
  prescricao: {
    hospitalar: "SUSPEITA DE GRAVIDEZ ECTÓPICA — PS\n1. Dieta zero.\n2. Monitorização de PA, FC e SpO2; 2 acessos venosos calibrosos.\n3. Se hipotensão: Ringer lactato ou SF 0,9% 500–1.000 mL IV em bolus; reavaliar; concentrado de hemácias conforme perda e Hb.\n4. Dipirona 1 g IV diluída em 10 mL de água destilada, lento, de 6/6 h se dor.\n5. Morfina 10 mg/mL — 1 mL + 9 mL de SF 0,9% (1 mg/mL): 2–4 mg IV lento se dor intensa; repetir a cada 10–15 min se necessário, observando PA e sedação.\n6. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n7. Exames: beta-hCG quantitativo, hemograma, tipagem ABO/Rh, Coombs indireto, prova cruzada, ureia, creatinina, TGO, TGP. USG transvaginal.\n8. Se Rh negativo e Coombs indireto negativo: imunoglobulina anti-D 1 ampola (250–300 mcg) IM até 72 h.\n9. Avisar ginecologia/centro cirúrgico.\n\nMETOTREXATO (dose única, paciente elegível)\n10. Peso ___ kg, altura ___ cm, superfície corporal ___ m².\n    Metotrexato 50 mg/m² = ___ mg IM, dose única (dia 1).\n11. Beta-hCG no dia 4 e no dia 7.",
    ambulatorial: "APÓS METOTREXATO (para casa)\nUSO ORAL\n1. Paracetamol 750 mg ------------------------------ 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor. Não usar ibuprofeno, diclofenaco ou outros anti-inflamatórios.\n\nORIENTAÇÕES\n- Não tomar ácido fólico nem vitaminas com folato até liberação médica.\n- Não ingerir bebida alcoólica, evitar sol forte e não ter relação sexual até o beta-hCG negativar.\n- Usar método contraceptivo e evitar engravidar por pelo menos 3 meses.\n- Exames: beta-hCG em ___/___ (dia 4) e ___/___ (dia 7); depois semanal até negativo."
  },
  orientacoesRetorno: [
    "A gravidez está fora do útero e não pode continuar; o tratamento protege sua vida e, quando possível, sua fertilidade",
    "Voltar imediatamente se: dor forte na barriga, dor no ombro, tontura, desmaio, sangramento vaginal intenso ou coração acelerado",
    "Fazer todos os exames de beta-hCG nas datas marcadas até o resultado negativo",
    "Após metotrexato: não tomar ácido fólico, anti-inflamatórios nem álcool; evitar gravidez por 3 meses",
    "Em uma próxima gravidez, procurar a UBS cedo para USG precoce: o risco de nova ectópica é maior"
  ],
  tabelas: [
    {
      titulo: "Escolha do tratamento na ectópica tubária",
      colunas: ["Conduta", "Quando"],
      linhas: [
        ["Cirurgia", "Instável ou rota; batimento cardíaco embrionário; contraindicação ou falha do metotrexato; sem seguimento"],
        ["Metotrexato", "Estável, íntegra, massa < 3,5 cm, sem batimento, beta-hCG < 5.000 mUI/mL, exames normais, seguimento garantido"],
        ["Expectante", "Estável, poucos sintomas, beta-hCG baixo e em queda espontânea, sem embrião vivo"]
      ],
      nota: "FEBRASGO — Protocolo Gravidez ectópica. Cortes variam entre protocolos; conferir a rotina do serviço."
    }
  ],
  fontes: [
    "FEBRASGO — Gravidez ectópica. Protocolos FEBRASGO / Femina (2021)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "ACOG Practice Bulletin nº 193 — Tubal Ectopic Pregnancy (2018)",
    "NICE NG126 — Ectopic pregnancy and miscarriage: diagnosis and initial management (2019, atualizado 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
