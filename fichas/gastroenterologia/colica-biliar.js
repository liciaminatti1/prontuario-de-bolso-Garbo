// Colelitíase, cólica biliar e sinais de colecistite/colangite
registrarFicha({
  id: "colica-biliar",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Colelitíase, cólica biliar e sinais de colecistite / colangite",
  resumo: "Dor em hipocôndrio direito ou epigástrio, contínua, de 30 min a algumas horas, muitas vezes após refeição, em paciente com cálculos na vesícula. Cólica que cede com analgesia e sem sinais inflamatórios → alta e colecistectomia eletiva. Dor > 6 h, febre, Murphy positivo ou icterícia → colecistite, coledocolitíase ou colangite.",
  palavrasChave: "colica biliar colelitiase calculo vesicula pedra na vesicula colecistite colangite coledocolitiase ictericia murphy tokyo colecistectomia cpre pancreatite biliar diclofenaco escopolamina",
  critico: {
    tempo: "Febre + icterícia + dor: colangite",
    texto: "Colangite (febre, icterícia, dor no hipocôndrio direito; com confusão e hipotensão = grave) é emergência: hemoculturas, antibiótico na 1ª hora e drenagem biliar (CPRE) urgente."
  },
  alarmes: [
    "Febre e icterícia com dor (tríade de Charcot); confusão e hipotensão (pêntade de Reynolds)",
    "Dor que dura mais de 6 h ou não cede com analgesia adequada",
    "Murphy positivo, massa palpável no hipocôndrio direito, peritonite",
    "Icterícia, colúria, acolia (coledocolitíase)",
    "Dor em faixa irradiando para o dorso com vômitos (pancreatite biliar)",
    "Idoso, diabético ou imunossuprimido (colecistite com poucos sinais, gangrena)",
    "Gestante com dor biliar"
  ],
  condutaInicial: [
    "Analgesia precoce: AINE (diclofenaco ou cetoprofeno) IM/IV + dipirona; escopolamina se cólica; opioide se refratária",
    "ECG em dor epigástrica (IAM inferior simula cólica biliar)",
    "Hemograma, PCR, TGO, TGP, GGT, fosfatase alcalina, bilirrubinas, lipase, creatinina; beta-hCG se idade fértil",
    "Ultrassonografia de abdome superior",
    "Classificar: cólica biliar simples × colecistite × coledocolitíase × colangite × pancreatite",
    "Colecistite/colangite: jejum, hidratação, antibiótico e cirurgia/gastroenterologia"
  ],
  fataisExcluir: [
    "Colangite aguda",
    "Colecistite gangrenosa / perfurada / enfisematosa",
    "Pancreatite aguda biliar",
    "Infarto agudo do miocárdio de parede inferior",
    "Úlcera perfurada, apendicite retrocecal, pielonefrite, pneumonia de base direita",
    "Aneurisma de aorta, isquemia mesentérica (idoso)"
  ],
  proximaDecisao: "Dor resolvida, exame e laboratório normais, USG com colelitíase sem sinais de colecistite → alta com analgesia e encaminhamento para colecistectomia eletiva. Colecistite (Tokyo) → internação, antibiótico e colecistectomia precoce (idealmente em até 72 h, aceitável até 7 dias). Colangite ou coledocolitíase de alto risco → CPRE.",
  clinica: {
    anamnese: [
      "Dor: localização (hipocôndrio direito/epigástrio), irradiação para escápula direita, duração (cólica biliar costuma durar < 6 h), relação com alimentação gordurosa",
      "Episódios prévios, USG prévio com cálculo, colecistectomia prévia",
      "Febre, calafrios, náuseas, vômitos",
      "Icterícia, urina escura, fezes claras, prurido",
      "Fatores de risco: mulher, gestação, obesidade, perda rápida de peso/cirurgia bariátrica, diabetes, anemia hemolítica",
      "Uso de anticoagulante, comorbidades (cirurgia)"
    ],
    exameFisico: [
      "Sinais vitais, temperatura, nível de consciência",
      "Icterícia",
      "Sinal de Murphy (parada da inspiração à palpação do hipocôndrio direito)",
      "Massa palpável, defesa, descompressão dolorosa",
      "Ausculta pulmonar (pneumonia de base direita)"
    ],
    diferenciais: [
      { dx: "Cólica biliar simples", pista: "Dor < 6 h, sem febre, sem Murphy, laboratório normal" },
      { dx: "Colecistite aguda", pista: "Dor > 6 h, febre, Murphy, leucocitose, PCR alta, parede espessada" },
      { dx: "Coledocolitíase", pista: "Icterícia, colúria, enzimas canaliculares altas, colédoco dilatado" },
      { dx: "Colangite", pista: "Febre + icterícia + dor; pode evoluir com sepse" },
      { dx: "Pancreatite biliar", pista: "Dor em faixa, lipase ≥ 3× o limite superior" },
      { dx: "Úlcera péptica / dispepsia", pista: "Dor epigástrica recorrente sem cálculo" },
      { dx: "IAM inferior", pista: "Fatores de risco, ECG/troponina" }
    ],
    gravidade: [
      "Colecistite (Tokyo 2018): A local (Murphy, dor/massa no hipocôndrio direito) + B sistêmico (febre, PCR ou leucócitos elevados) + C imagem compatível = definitiva",
      "Colecistite grau III: disfunção orgânica (hipotensão com vasopressor, rebaixamento, PaO₂/FiO₂ < 300, oligúria ou creatinina > 2,0 mg/dL, INR > 1,5, plaquetas < 100 mil)",
      "Colecistite grau II: leucócitos > 18 mil, massa palpável, sintomas > 72 h ou inflamação local acentuada (gangrena, abscesso, enfisema, peritonite biliar)",
      "Colangite (Tokyo 2018): A febre/inflamação laboratorial + B icterícia (bilirrubina ≥ 2 mg/dL) ou enzimas hepáticas > 1,5× + C dilatação biliar ou causa na imagem",
      "Colangite grau II: 2 de leucócitos > 12 mil ou < 4 mil, febre ≥ 39 °C, idade ≥ 75 anos, bilirrubina ≥ 5 mg/dL, hipoalbuminemia. Grau III: disfunção orgânica"
    ]
  },
  exames: [
    {
      nome: "Ultrassonografia de abdome superior",
      pedido: "Ultrassonografia de abdome superior (vesícula, vias biliares, pâncreas). Indicação: dor em hipocôndrio direito — investigar colelitíase/colecistite/coledocolitíase.",
      porQue: "Exame inicial de escolha: cálculos, sinais de colecistite, diâmetro do colédoco.",
      esperar: "Cálculos móveis com sombra acústica.",
      interpretacao: "Colecistite: parede > 4–5 mm, líquido perivesicular, Murphy ultrassonográfico, vesícula distendida. Colédoco > 6 mm (com vesícula) sugere obstrução.",
      limitacoes: "Baixa sensibilidade para cálculo no colédoco distal; obeso e gases limitam. Colangiorressonância se dúvida de coledocolitíase."
    },
    {
      nome: "Laboratório hepático e inflamatório",
      pedido: "Hemograma, PCR, TGO, TGP, GGT, fosfatase alcalina, bilirrubinas total e frações, lipase (ou amilase), creatinina, coagulograma (TP/INR). Hemoculturas (2 amostras) se febre ou suspeita de colangite.",
      porQue: "Diferenciar cólica simples de colecistite, coledocolitíase, colangite e pancreatite; gravidade.",
      esperar: "Normal na cólica biliar simples.",
      interpretacao: "Bilirrubina > 4 mg/dL com colédoco dilatado ou cálculo no colédoco = alto risco de coledocolitíase (ASGE) → CPRE. Lipase ≥ 3× = pancreatite.",
      limitacoes: "Enzimas podem estar levemente alteradas na colecistite sem coledocolitíase."
    },
    {
      nome: "Eletrocardiograma (e troponina se indicado)",
      pedido: "Eletrocardiograma de 12 derivações. Troponina se fatores de risco ou dúvida.",
      porQue: "Excluir IAM inferior em dor epigástrica.",
      esperar: "Normal.",
      interpretacao: "Supra de ST em DII, DIII, aVF → protocolo de SCA.",
      limitacoes: "—"
    },
    {
      nome: "Colangiorressonância / tomografia",
      pedido: "Colangiorressonância magnética. Indicação: risco intermediário de coledocolitíase. Tomografia de abdome com contraste se dúvida diagnóstica ou suspeita de complicação (perfuração, abscesso, pancreatite grave).",
      porQue: "Avaliar via biliar e complicações.",
      esperar: "—",
      interpretacao: "Cálculo no colédoco → CPRE (antes ou durante a colecistectomia).",
      limitacoes: "TC tem baixa sensibilidade para cálculos não calcificados."
    }
  ],
  tratamento: [
    {
      droga: "Diclofenaco sódico",
      linha: "l1",
      dose: "75 mg",
      via: "IM profunda (glúteo)",
      intervalo: "Dose única no PS; VO 50 mg de 8/8 h em casa",
      duracao: "Até 3–5 dias se necessário",
      monitorizacao: "Função renal, sangramento",
      contraindicacoes: "DRC/ClCr < 30, LRA, úlcera ou sangramento digestivo, gestação no 3º trimestre, IC grave, alergia a AINE",
      ajustes: "AINE alivia a dor e pode reduzir a progressão para colecistite. Alternativa IV: cetoprofeno 100 mg diluído em 100 mL de SF 0,9% em 20 min (máx 300 mg/dia)"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "1 g",
      via: "IV lento (diluída em 10 mL de água destilada ou em 100 mL de SF 0,9%)",
      intervalo: "6/6 h",
      duracao: "Conforme dor",
      monitorizacao: "Hipotensão, alergia",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Associar ao AINE"
    },
    {
      droga: "Butilbrometo de escopolamina",
      linha: "adj",
      dose: "20 mg",
      via: "IV lento ou IM",
      intervalo: "6/6 h a 8/8 h (máx 100 mg/dia)",
      duracao: "Conforme dor",
      monitorizacao: "Taquicardia, retenção urinária",
      contraindicacoes: "Glaucoma de ângulo fechado, taquiarritmia, megacólon, miastenia",
      ajustes: "Associação comercial com dipirona é comum. Benefício isolado menor que AINE"
    },
    {
      droga: "Morfina",
      linha: "alt",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV lenta (ampola 10 mg/mL diluída em 9 mL de SF = 1 mg/mL)",
      intervalo: "Repetir a cada 5–10 min até controle; depois 4/4 h se necessário",
      duracao: "Conforme dor",
      monitorizacao: "FR, sedação, PA",
      contraindicacoes: "Depressão respiratória, hipotensão",
      ajustes: "Dor refratária. Idosos e DRC: doses menores"
    },
    {
      droga: "Ceftriaxona + metronidazol (colecistite grau I–II e colangite comunitária)",
      linha: "l1",
      dose: "Ceftriaxona 2 g + metronidazol 500 mg",
      via: "IV (ceftriaxona em 100 mL de SF 0,9% em 30 min; metronidazol 500 mg/100 mL em 30–60 min)",
      intervalo: "Ceftriaxona 1×/dia; metronidazol 8/8 h",
      duracao: "Colecistite operada (grau I–II): suspender em até 24 h após a cirurgia. Colangite: 4–7 dias após controle da fonte",
      monitorizacao: "Febre, leucócitos, culturas",
      contraindicacoes: "Anafilaxia a betalactâmico (usar ciprofloxacino ou levofloxacino + metronidazol)",
      ajustes: "Grau III ou infecção relacionada à assistência: piperacilina-tazobactam 4,5 g IV 6/6 h (ajuste renal). Ajustar pelas hemoculturas"
    },
    {
      droga: "Colecistectomia videolaparoscópica",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "Colecistite: precoce, idealmente em até 72 h do início (aceitável até 7 dias). Cólica biliar: eletiva",
      monitorizacao: "—",
      contraindicacoes: "Risco cirúrgico proibitivo (considerar drenagem percutânea da vesícula)",
      ajustes: "Colelitíase assintomática em geral não precisa de cirurgia (exceções a critério do cirurgião, ex.: vesícula em porcelana, cálculo grande, pólipo ≥ 10 mm)"
    },
    {
      droga: "CPRE (drenagem biliar)",
      linha: "l1",
      dose: "—",
      via: "Endoscópica",
      intervalo: "—",
      duracao: "Colangite grau III: urgente após estabilização; grau II: precoce; grau I: se não responder ao antibiótico",
      monitorizacao: "Pancreatite pós-CPRE",
      contraindicacoes: "—",
      ajustes: "Também na coledocolitíase de alto risco. Sem CPRE disponível: drenagem percutânea e transferência"
    }
  ],
  destino: {
    agora: [
      "Analgesia, laboratório, ECG e USG",
      "Colangite com instabilidade: ressuscitação, hemocultura, antibiótico na 1ª hora e contato com cirurgia/endoscopia"
    ],
    reavaliar: [
      "Dor e exame abdominal após 1 h da analgesia",
      "Resultado do USG e laboratório antes da alta"
    ],
    alta: [
      "Cólica biliar simples: sem dor, sem febre, Murphy negativo, laboratório normal",
      "AINE e antiespasmódico por poucos dias, dieta pobre em gordura, encaminhamento para cirurgia geral (colecistectomia eletiva)"
    ],
    observacao: [
      "Dor que melhora parcialmente ou laboratório limítrofe: observação 6–12 h e reavaliação"
    ],
    internacao: [
      "Colecistite, coledocolitíase, colangite, pancreatite biliar",
      "UTI: colangite ou colecistite grau III"
    ],
    transferencia: [
      "Sem cirurgião ou CPRE: regulação após antibiótico e estabilização"
    ]
  },
  prescricao: {
    hospitalar: "CÓLICA BILIAR NO PS\n1. Jejum até reavaliação.\n2. Acesso venoso; SF 0,9% 500 mL IV se vômitos.\n3. Diclofenaco sódico 75 mg (3 mL) IM profunda, dose única (ou cetoprofeno 100 mg + SF 0,9% 100 mL IV em 20 min).\n4. Dipirona 1 g (2 mL) + água destilada 8 mL IV lento.\n5. Escopolamina (butilbrometo) 20 mg (1 mL) IV lento se cólica.\n6. Se dor refratária: morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV lento, repetir a cada 10 min até controle.\n7. Ondansetrona 4–8 mg IV lento se náusea.\n\nCOLECISTITE / COLANGITE — INTERNAÇÃO\n1. Dieta zero.\n2. SF 0,9% ou Ringer lactato 30 mL/kg se hipotensão/sepse; depois manutenção conforme volemia.\n3. Hemoculturas (2 amostras) antes do antibiótico.\n4. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min 1 vez ao dia + metronidazol 500 mg (100 mL) IV em 30–60 min de 8/8 h.\n   (Grave/assistência: piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.)\n5. Dipirona 1 g IV de 6/6 h + cetoprofeno 100 mg IV de 12/12 h se função renal normal; morfina 2–4 mg IV de 4/4 h se necessário.\n6. Ondansetrona 8 mg IV de 8/8 h se náusea.\n7. Enoxaparina 40 mg SC 1 vez ao dia (suspender conforme programação cirúrgica).\n8. Avaliação da cirurgia geral (colecistectomia precoce) e da endoscopia (CPRE se colangite/coledocolitíase).\n9. Controles: sinais vitais de 4/4 h, diurese, glicemia; hemograma, PCR, bilirrubinas e função renal diários.",
    ambulatorial: "ALTA — CÓLICA BILIAR SIMPLES\nUSO ORAL\n1. Diclofenaco sódico 50 mg ---------------------------------- 9 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, se dor, por até 3 dias.\n2. Escopolamina (butilbrometo) 10 mg + dipirona 250 mg -------- 1 caixa\n   Tomar 1 a 2 comprimidos de 8 em 8 horas se cólica.\n   (ou Dipirona 500 mg: 1 a 2 comprimidos de 6 em 6 horas se dor.)\n\nENCAMINHAMENTO\n- Cirurgia geral: colelitíase sintomática — avaliação para colecistectomia videolaparoscópica eletiva."
  },
  orientacoesRetorno: [
    "Evite refeições gordurosas e volumosas até a cirurgia; isso reduz as crises",
    "A cirurgia (retirada da vesícula) é o tratamento definitivo para quem já teve dor; leve o encaminhamento à UBS",
    "Volte imediatamente se a dor durar mais de 6 horas ou não melhorar com o remédio, se tiver febre ou calafrios, olhos ou pele amarelados, urina escura, fezes claras, vômitos que não param ou dor em faixa nas costas",
    "Não use o anti-inflamatório por mais de 3 dias sem orientação; evite se tiver doença dos rins ou úlcera",
    "Retorne à UBS em 1–2 semanas para acompanhar o encaminhamento cirúrgico"
  ],
  fontes: [
    "Tokyo Guidelines 2018 (TG18): critérios diagnósticos e gravidade da colecistite e da colangite, antimicrobianos e manejo (J Hepatobiliary Pancreat Sci, 2018)",
    "WSES — 2020 updated guidelines for the diagnosis and treatment of acute calculus cholecystitis (World J Emerg Surg, 2020)",
    "ASGE — Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis (Gastrointest Endosc, 2019)",
    "EASL — Clinical Practice Guidelines on the prevention, diagnosis and treatment of gallstones (J Hepatol, 2016)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
