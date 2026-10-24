// Intercorrências no pós-operatório: dor, NVPO, febre, íleo, sangramento, oligúria
registrarFicha({
  id: "pos-operatorio-intercorrencias",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Intercorrências no pós-operatório (dor, náusea, febre, íleo, sangramento, oligúria)",
  resumo: "Guia rápido para o plantonista chamado à enfermaria ou que recebe no PS o paciente operado: analgesia multimodal, náusea e vômitos (NVPO), febre por dia de pós-operatório, íleo, sangramento e oligúria. Sempre comunicar a equipe cirúrgica.",
  palavrasChave: "pos operatorio febre pos operatoria nvpo nausea vomito pos operatorio apfel ileo paralitico sangramento pos operatorio oligúria oliguria diurese baixa dor pos operatoria analgesia multimodal atelectasia fistula anastomose tep",
  critico: {
    tempo: "Taquicardia inexplicada: alerta",
    texto: "Taquicardia persistente, hipotensão, dor desproporcional ou oligúria no pós-operatório podem ser o 1º sinal de sangramento, fístula de anastomose, sepse ou TEP: examinar, exames e chamar o cirurgião."
  },
  alarmes: [
    "Taquicardia > 100–110 sem causa clara, hipotensão, queda de Hb, distensão abdominal progressiva",
    "Dor abdominal que aumenta após o 3º–5º dia, peritonite, saída de conteúdo entérico pelo dreno ou ferida (fístula/deiscência)",
    "Dispneia súbita, dor torácica, hipoxemia (TEP, IAM, pneumonia aspirativa)",
    "Diurese < 0,5 mL/kg/h por 6 h ou creatinina subindo (LRA)",
    "Febre muito alta nas primeiras 24–48 h com dor na ferida e pele escurecida (infecção necrosante por estreptococo/clostrídio)",
    "Hipertermia com rigidez e hipercapnia logo após anestesia (hipertermia maligna — dantroleno)",
    "Confusão aguda (delirium: hipóxia, sepse, distúrbio eletrolítico, abstinência alcoólica, opioide)"
  ],
  conduta: [
    "Rever: cirurgia feita, achados, anastomoses, drenos, sangramento intraoperatório, balanço hídrico, medicações (opioides, anticoagulantes)",
    "Exame completo: sinais vitais, ferida, drenos, abdome, pulmões, panturrilhas, acessos venosos, sonda vesical",
    "DOR: multimodal — dipirona e/ou paracetamol fixos + AINE se sem contraindicação + opioide de resgate; dor desproporcional = procurar complicação",
    "NVPO: excluir causas (opioide, íleo, obstrução, hipotensão, hipoglicemia); ondansetrona; associar dexametasona/outra classe se refratária; SNG se distensão",
    "FEBRE: usar a tabela por tempo; exames dirigidos (não pedir 'tudo' rotineiramente nas primeiras 48 h se exame normal)",
    "ÍLEO: deambulação, reduzir opioide, corrigir K e Mg, mascar chiclete, dieta conforme tolerância; SNG se vômitos/distensão; > 3–5 dias ou piora → TC (obstrução, abscesso, fístula)",
    "SANGRAMENTO: sinais vitais, Hb seriada, coagulograma, débito/aspecto do dreno; suspender anticoagulante; reverter se indicado; transfundir; cirurgião (reabordagem/radiologia intervencionista)",
    "OLIGÚRIA: checar sonda (obstrução — lavar/trocar), bexigoma (USG), volemia; prova de volume 250–500 mL de cristaloide se hipovolêmico; suspender nefrotóxicos; creatinina e K",
    "Comunicar a equipe cirúrgica e registrar a avaliação"
  ],
  exames: [
    "Hemograma, PCR (tendência > valor isolado), Na, K, Mg, ureia, creatinina, glicemia",
    "Gasometria venosa com lactato se instável",
    "Hemoculturas, urina tipo 1 e urocultura, RX de tórax conforme foco suspeito",
    "Coagulograma e tipagem se sangramento",
    "ECG e troponina se taquicardia, hipotensão ou dor torácica (lesão miocárdica pós-operatória)",
    "Angio-TC de tórax se suspeita de TEP; USG Doppler de MMII se suspeita de TVP",
    "TC de abdome com contraste se suspeita de abscesso, fístula ou deiscência de anastomose",
    "Pesquisa de toxina de C. difficile se diarreia após antibiótico"
  ],
  diferenciais: [
    "Resposta inflamatória fisiológica (febre baixa nas primeiras 48 h)",
    "Atelectasia (associação com febre é fraca)",
    "Reação transfusional, febre medicamentosa",
    "Abstinência alcoólica (2º–4º dia)",
    "Insuficiência adrenal (corticoide crônico suspenso)"
  ],
  tratamento: [
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "1 g",
      via: "IV ou VO",
      intervalo: "6/6 h (fixo)",
      duracao: "Enquanto dor",
      monitorizacao: "PA",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Pode associar paracetamol 750 mg VO 6/6 h (máx. 3–4 g/dia; 2 g/dia em hepatopata/etilista)"
    },
    {
      droga: "Cetoprofeno",
      linha: "adj",
      dose: "100 mg",
      via: "IV (em 100 mL de SF em 20 min)",
      intervalo: "12/12 h",
      duracao: "Até 3–5 dias",
      monitorizacao: "Função renal, sangramento",
      contraindicacoes: "DRC/LRA, hipovolemia, sangramento, úlcera péptica, anastomose com risco (individualizar), IC, > 75 anos (cautela)",
      ajustes: "Alternativa: tenoxicam 20–40 mg IV 1×/dia"
    },
    {
      droga: "Tramadol",
      linha: "adj",
      dose: "50–100 mg",
      via: "IV lento (em 100 mL de SF) ou VO",
      intervalo: "6/6 h SN (máx. 400 mg/dia)",
      duracao: "Curta",
      monitorizacao: "Náusea, sedação",
      contraindicacoes: "Epilepsia, uso de ISRS/IMAO (síndrome serotoninérgica)",
      ajustes: "Idoso > 75 anos: máx. 300 mg/dia. ClCr < 30: 12/12 h"
    },
    {
      droga: "Morfina",
      linha: "adj",
      dose: "2–3 mg (titular) ou 0,05–0,1 mg/kg",
      via: "IV",
      intervalo: "A cada 5–10 min até controle; depois 4/4 h SN",
      duracao: "Curta",
      monitorizacao: "FR, sedação, SpO₂; naloxona disponível",
      contraindicacoes: "Depressão respiratória",
      ajustes: "Idoso e DRC: doses menores e intervalos maiores. Associar laxante se uso > 48 h"
    },
    {
      droga: "Ondansetrona",
      linha: "l1",
      dose: "4 mg",
      via: "IV lento",
      intervalo: "8/8 h SN",
      duracao: "—",
      monitorizacao: "QT",
      contraindicacoes: "QT longo",
      ajustes: "Se já recebeu na cirurgia e falhou: usar outra classe no resgate (metoclopramida 10 mg IV, dimenidrinato 30 mg IV ou droperidol em baixa dose)"
    },
    {
      droga: "Dexametasona (profilaxia de NVPO)",
      linha: "adj",
      dose: "4–8 mg",
      via: "IV",
      intervalo: "Dose única na indução",
      duracao: "—",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "—",
      ajustes: "Profilaxia multimodal conforme número de fatores de Apfel (consenso 2020)"
    }
  ],
  prescricao: {
    hospitalar: "PÓS-OPERATÓRIO — RESGATES E SINTOMÁTICOS (ADULTO)\n1. Dipirona 1 g + água destilada 10 mL IV lento de 6/6 h (fixo).\n2. Cetoprofeno 100 mg + SF 0,9% 100 mL IV em 20 min de 12/12 h por até 3 dias (se função renal normal e sem sangramento).\n3. Tramadol 100 mg + SF 0,9% 100 mL IV em 30 min de 6/6 h se dor moderada (máx. 400 mg/dia).\n4. Morfina 1 mg/mL (diluída): 2–3 mg IV a cada 10 min se dor intensa até controle; depois de 4/4 h SN. Naloxona 0,4 mg/mL disponível.\n5. Ondansetrona 4 mg IV lento de 8/8 h se náusea ou vômito.\n6. Metoclopramida 10 mg IV lento de 8/8 h se náusea refratária (não usar se obstrução mecânica).\n7. Bisacodil 5–10 mg VO à noite ou lactulose 15 mL 12/12 h se opioide > 48 h e trânsito liberado.\n8. Deambulação precoce; fisioterapia respiratória/incentivador.\n9. Profilaxia de TEV conforme Caprini (ver ficha profilaxias-perioperatorias).\n10. Diurese e balanço hídrico de 6/6 h; avisar se diurese < 0,5 mL/kg/h por 2 h seguidas, FC > 110, PAS < 90 ou T ≥ 38,5 °C."
  },
  orientacoesRetorno: [
    "Caminhar várias vezes ao dia e respirar fundo ajudam a evitar pneumonia, trombose e intestino parado",
    "Tomar os remédios para dor nos horários; não esperar a dor ficar forte",
    "Voltar ao PS se: febre, dor que piora, vômitos, barriga inchada, sem evacuar nem eliminar gases, falta de ar, dor ou inchaço na perna, sangramento ou secreção pelo corte, urinar muito pouco"
  ],
  encaminhar: [
    "Sempre: comunicar a equipe cirúrgica responsável",
    "UTI: instabilidade hemodinâmica, insuficiência respiratória, sepse com disfunção orgânica"
  ],
  tabelas: [
    {
      titulo: "Febre pós-operatória — causas por tempo",
      colunas: ["Quando", "Causas mais prováveis"],
      linhas: [
        ["Intraoperatória até 1 h", "Reação a medicação ou transfusão, hipertermia maligna, bacteremia por manipulação"],
        ["Primeiras 24–48 h", "Resposta inflamatória à cirurgia (mais comum); infecção necrosante de ferida (estreptococo/clostrídio); aspiração; fístula precoce; abstinência"],
        ["Dias 3–5", "Pneumonia, ITU (sonda), infecção de cateter venoso, flebite"],
        ["Dias 5–7", "Infecção de sítio cirúrgico, fístula/deiscência de anastomose, TVP/TEP"],
        ["Após 7 dias", "Abscesso intra-abdominal, colite por C. difficile, febre por medicamento, TEP, infecção de cateter"]
      ],
      nota: "Mnemônico clássico dos 5 W (wind, water, wound, walking, wonder drugs) é útil, mas atelectasia isolada raramente causa febre."
    },
    {
      titulo: "Risco de NVPO — escore de Apfel (1 ponto cada)",
      colunas: ["Fator", "Pontos"],
      linhas: [
        ["Sexo feminino", "1"],
        ["Não fumante", "1"],
        ["História de NVPO ou cinetose", "1"],
        ["Uso de opioide no pós-operatório", "1"]
      ],
      nota: "0, 1, 2, 3 e 4 pontos ≈ 10%, 20%, 40%, 60% e 80% de risco. Profilaxia com 1–2 antieméticos de classes diferentes para quem tem 1–2 fatores; 3–4 antieméticos para ≥ 3 fatores (consenso 2020)."
    }
  ],
  fontes: [
    "Gan TJ et al. Fourth Consensus Guidelines for the Management of Postoperative Nausea and Vomiting (Anesth Analg, 2020)",
    "PROSPECT/ESRA — recomendações de analgesia pós-operatória procedimento-específicas (2017–2024)",
    "KDIGO — Clinical Practice Guideline for Acute Kidney Injury (2012)",
    "Sabiston Textbook of Surgery, 21ª ed. (2022) — complicações pós-operatórias"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
