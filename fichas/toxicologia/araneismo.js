// Acidentes por aranhas
registrarFicha({
  id: "araneismo",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Acidentes por aranhas: armadeira, aranha-marrom e viúva-negra",
  resumo: "Araneísmo de importância médica no Brasil: foneutrismo (armadeira, Phoneutria) com dor intensa imediata; loxoscelismo (aranha-marrom, Loxosceles) com lesão necrótica tardia e risco de hemólise; latrodectismo (viúva-negra, Latrodectus), raro, com contraturas e sinais adrenérgicos.",
  palavrasChave: "aranha araneismo armadeira phoneutria foneutrismo aranha marrom loxosceles loxoscelismo viuva negra latrodectus latrodectismo picada de aranha necrose hemolise soro antiaracnidico saar soro antiloxoscelico salox prednisona lidocaina caranguejeira",
  critico: {
    tempo: "Aranha-marrom: soro até 36 h",
    texto: "Lesão dolorosa que evolui em 12–24 h com placa marmórea (palidez, equimose e eritema) sugere loxoscelismo: indicar soro e prednisona cedo. Urina escura ou icterícia = forma cutâneo-hemolítica (grave)."
  },
  alarmes: [
    "Armadeira: vômitos, sudorese profusa, sialorreia, priapismo, hipotensão, bradicardia, edema pulmonar (mais em crianças)",
    "Aranha-marrom: urina escura (cor de coca-cola), icterícia, palidez, anemia aguda — hemólise intravascular",
    "Aranha-marrom: oligúria ou anúria (lesão renal aguda)",
    "Aranha-marrom: lesão > 3 cm, necrose extensa ou em face",
    "Viúva-negra: contraturas generalizadas, abdome em tábua, hipertensão grave, arritmia"
  ],
  condutaInicial: [
    "Identificar a aranha (trazer o animal ou foto) e o padrão clínico",
    "Lavar o local; compressa morna na armadeira; compressa fria na aranha-marrom nas primeiras horas",
    "Armadeira: lidocaína 2% sem vasoconstritor infiltrada no local (adulto 3–4 mL; criança 1–2 mL) e dipirona; soro só se moderado (crianças) ou grave",
    "Aranha-marrom: classificar (cutânea × cutâneo-hemolítica); soro e prednisona conforme gravidade; acompanhar a lesão e a urina por 72 h",
    "Viúva-negra: analgesia, benzodiazepínico para contraturas; soro específico via CIATox nos graves",
    "Profilaxia do tétano; notificar no SINAN"
  ],
  fataisExcluir: [
    "Hemólise intravascular e lesão renal aguda (loxoscelismo cutâneo-hemolítico)",
    "Edema pulmonar e choque (foneutrismo grave em criança)",
    "Infecção secundária grave da úlcera necrótica (fasciite, celulite)",
    "Diagnóstico errado: celulite necrosante, pioderma gangrenoso, antraz, picada de outro animal"
  ],
  proximaDecisao: "Loxoscelismo: reavaliar em 24, 48 e 72 h (lesão, urina, hemoglobina, bilirrubina, creatinina). Surgimento de hemólise → soro (se não feito), internação e hidratação. Foneutrismo leve sem progressão em 3–6 h → alta.",
  clinica: {
    anamnese: [
      "Aranha vista: armadeira (grande, agressiva, posição de defesa em pé, comum em bananeiras e calçados); aranha-marrom (pequena, marrom, dentro de casa, atrás de quadros e roupas); viúva-negra (abdome preto com mancha vermelha em ampulheta, Nordeste e litoral)",
      "Hora da picada; momento do início da dor (imediata na armadeira; discreta e tardia na marrom)",
      "Evolução da lesão; urina escura, icterícia, febre, mal-estar, exantema",
      "Vômitos, sudorese, agitação (armadeira); cãibras, rigidez abdominal (viúva-negra)"
    ],
    exameFisico: [
      "Local: edema, eritema, sudorese, marcas de picada (armadeira); placa marmórea, bolha, necrose, úlcera (marrom) — medir o diâmetro",
      "FC, PA, FR, SpO₂, temperatura",
      "Mucosas: palidez, icterícia",
      "Priapismo, sialorreia (armadeira grave)",
      "Contraturas, fasciculações, rigidez abdominal (viúva-negra)"
    ],
    diferenciais: [
      { dx: "Escorpionismo", pista: "Clínica igual à armadeira; o soro antiaracnídico cobre os dois" },
      { dx: "Celulite / erisipela / fasciite necrosante", pista: "Febre precoce, dor desproporcional, sem placa marmórea; evolução sem picada percebida" },
      { dx: "Furúnculo, abscesso, MRSA comunitário", pista: "Ponto de flutuação e pus" },
      { dx: "Abdome agudo (diferencial do latrodectismo)", pista: "Rigidez abdominal sem peritonite real, com história de picada e contraturas" },
      { dx: "Picada de caranguejeira", pista: "Dor leve; pelos urticantes causam dermatite e irritação ocular; sem envenenamento sistêmico" }
    ],
    gravidade: [
      "Foneutrismo — leve: dor local, às vezes taquicardia e agitação pela dor · moderado: sudorese, vômitos ocasionais, agitação, hipertensão · grave: sudorese profusa, sialorreia, vômitos frequentes, priapismo, hipotensão, bradicardia, choque, edema pulmonar",
      "Loxoscelismo — leve: lesão incaracterística, sem sintomas sistêmicos, aranha identificada · moderado: lesão sugestiva ou característica (placa marmórea) com menos de 3 cm, sintomas sistêmicos discretos, sem hemólise · grave: lesão característica maior que 3 cm ou forma cutâneo-hemolítica (hemólise, icterícia, urina escura)",
      "Latrodectismo — leve: dor local e sintomas discretos · moderado: dor generalizada, contraturas, sudorese, agitação · grave: contraturas intensas, hipertensão, arritmia, choque"
    ]
  },
  exames: [
    {
      nome: "Hemólise e função renal (loxoscelismo)",
      pedido: "Hemograma, reticulócitos, bilirrubinas totais e frações, DHL, haptoglobina (se disponível), ureia, creatinina, potássio, urina tipo 1. Repetir em 24, 48 e 72 h.",
      porQue: "A forma cutâneo-hemolítica aparece nas primeiras 72 h e define gravidade.",
      esperar: "Normais na forma cutânea.",
      interpretacao: "Queda de hemoglobina, DHL e bilirrubina indireta altas, hemoglobinúria → forma grave: soro (se ainda não feito), hidratação e monitorar creatinina.",
      limitacoes: "Não há teste para confirmar o veneno; diagnóstico é clínico-epidemiológico."
    },
    {
      nome: "Coagulograma (loxoscelismo grave)",
      pedido: "TP, TTPa, plaquetas, fibrinogênio.",
      porQue: "Pode ocorrer CIVD na forma hemolítica.",
      esperar: "Normais na forma cutânea.",
      interpretacao: "Plaquetopenia e consumo de fibrinogênio → UTI.",
      limitacoes: "—"
    },
    {
      nome: "Exames no foneutrismo e latrodectismo graves",
      pedido: "Glicemia, eletrólitos, gasometria, ECG, radiografia de tórax. CK no latrodectismo.",
      porQue: "Avaliar repercussão sistêmica.",
      esperar: "Hiperglicemia, leucocitose; CK elevada no latrodectismo.",
      interpretacao: "Edema pulmonar ou arritmia → UTI.",
      limitacoes: "Casos leves não precisam de exames."
    }
  ],
  tratamento: [
    {
      droga: "Soro antiaracnídico (SAAr: Loxosceles, Phoneutria e Tityus) — foneutrismo",
      linha: "l1",
      dose: "Moderado: 2–4 frascos-ampolas (indicação principal em crianças) · Grave: 5–10 frascos-ampolas",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Reação anafilática; sinais vitais",
      contraindicacoes: "Leve: não indicado",
      ajustes: "Mesma dose em qualquer idade. Adulto com quadro moderado: tratar a dor e reavaliar antes de indicar soro"
    },
    {
      droga: "Soro antiaracnídico (SAAr) ou antiloxoscélico (SALox) — loxoscelismo",
      linha: "l1",
      dose: "Moderado: 5 frascos-ampolas · Grave (lesão > 3 cm ou forma cutâneo-hemolítica): 10 frascos-ampolas",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Reação anafilática",
      contraindicacoes: "Leve: não indicado",
      ajustes: "Eficácia maior nas primeiras 24 h e reduzida após 36 h da picada. Na forma hemolítica, indicar mesmo tardiamente (discutir com CIATox)"
    },
    {
      droga: "Prednisona (loxoscelismo moderado e grave)",
      linha: "l1",
      dose: "Adulto: 40 mg/dia · Criança: 1 mg/kg/dia (máx. 40 mg)",
      via: "VO",
      intervalo: "1 vez ao dia pela manhã",
      duracao: "5 dias (7 dias nas formas graves, conforme protocolo local)",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "—",
      ajustes: "Pode ser associada ao soro ou usada isoladamente quando o soro não é mais indicado pelo tempo"
    },
    {
      droga: "Lidocaína 2% sem vasoconstritor (foneutrismo)",
      linha: "l1",
      dose: "Adulto: 3–4 mL · Criança: 1–2 mL",
      via: "Infiltração local",
      intervalo: "Até 3 vezes, a cada 30–60 min",
      duracao: "Até alívio",
      monitorizacao: "Toxicidade de anestésico local",
      contraindicacoes: "Alergia",
      ajustes: "Somando todas as doses, não ultrapassar 4,5 mg/kg de lidocaína"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "Adulto: 1 g · Criança: 10–15 mg/kg/dose (máx. 1 g)",
      via: "VO ou IV",
      intervalo: "6/6 h",
      duracao: "Enquanto houver dor",
      monitorizacao: "Hipotensão",
      contraindicacoes: "< 3 meses ou < 5 kg",
      ajustes: "Dor refratária: morfina 0,05–0,1 mg/kg IV (máx. 4 mg/dose)"
    },
    {
      droga: "Diazepam (contraturas do latrodectismo)",
      linha: "l1",
      dose: "Adulto: 5–10 mg · Criança: 0,1–0,2 mg/kg (máx. 10 mg)",
      via: "IV lento",
      intervalo: "4/4 a 6/6 h SN",
      duracao: "Enquanto houver contraturas",
      monitorizacao: "Depressão respiratória",
      contraindicacoes: "—",
      ajustes: "Soro antilatrodéctico (importado) disponível só em centros de referência: solicitar via CIATox nos casos graves"
    },
    {
      droga: "Antibiótico (úlcera loxoscélica infectada)",
      linha: "adj",
      dose: "Cefalexina — adulto 500 mg; criança 25–50 mg/kg/dia (máx. 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "7 dias",
      monitorizacao: "Evolução da lesão",
      contraindicacoes: "Alergia a betalactâmico: clindamicina",
      ajustes: "Só se sinais de infecção secundária; não é profilático"
    },
    {
      droga: "Desbridamento cirúrgico precoce, garrote, incisão, aplicar substâncias no local",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Na aranha-marrom, desbridar só após delimitação da necrose (semanas)",
      ajustes: "Úlcera extensa: cirurgia plástica tardia"
    }
  ],
  destino: {
    agora: ["Sala de emergência se manifestação sistêmica (armadeira) ou hemólise (marrom)"],
    reavaliar: ["Armadeira: sinais vitais e vômitos a cada 30–60 min por 3–6 h", "Aranha-marrom: lesão, cor da urina, hemoglobina e creatinina em 24, 48 e 72 h"],
    alta: ["Armadeira leve sem progressão após 3–6 h", "Aranha-marrom forma cutânea sem hemólise, com retorno garantido em 24–48 h"],
    observacao: ["Armadeira: 3–6 h; criança, até 6–12 h", "Aranha-marrom leve: seguimento ambulatorial diário até 72 h"],
    internacao: ["Todo paciente que recebeu soro", "Loxoscelismo cutâneo-hemolítico", "Latrodectismo moderado ou grave"],
    transferencia: ["UTI: edema pulmonar, choque, hemólise com lesão renal aguda, CIVD"]
  },
  prescricao: {
    ambulatorial: "LOXOSCELISMO CUTÂNEO MODERADO (sem hemólise) — ADULTO\nUSO ORAL\n1. Prednisona 20 mg ------------------------------------ 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã, por 5 dias.\n2. Dipirona 500 mg -------------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\nUSO EXTERNO\n3. Limpar a ferida com água e sabão 2 vezes ao dia e manter coberta com gaze seca. Não espremer, não furar bolhas, não passar pomadas caseiras.\n\nCRIANÇA\n1. Prednisolona solução oral 3 mg/mL — 1 mg/kg/dia (máx. 40 mg) 1 vez ao dia pela manhã, por 5 dias.\n2. Dipirona solução oral 50 mg/mL — 10–15 mg/kg/dose de 6 em 6 horas se dor (máx. 1 g/dose).\n\nRETORNO EM 24 H, 48 H E 72 H com hemograma, bilirrubinas, DHL, creatinina e urina tipo 1.",
    hospitalar: "INTERNAÇÃO — ARANEÍSMO COM INDICAÇÃO DE SORO (peso: ___ kg; aranha: ________; gravidade: ________)\n1. Dieta oral livre se sem vômitos.\n2. Monitor, oximetria, PA a cada 15 min durante o soro e na 1ª hora; depois de 2/2 h.\n3. Acesso venoso periférico; SF 0,9% para manter veia (loxoscelismo hemolítico: hidratação para diurese ≥ 1 mL/kg/h).\n4. Adrenalina 1 mg/mL e material de via aérea à beira do leito.\n5. SORO ANTIARACNÍDICO (ou antiloxoscélico) IV, dose única, mesma dose em qualquer idade:\n   ( ) Armadeira moderada: 2–4 frascos-ampolas | grave: 5–10\n   ( ) Aranha-marrom moderada: 5 frascos-ampolas | grave ou hemolítica: 10\n   Puro ou diluído em SF 0,9%, infusão contínua sob supervisão (velocidade conforme bula/protocolo local).\n6. Se reação: suspender; adrenalina 0,01 mg/kg IM (máx. 0,5 mg adulto; 0,3 mg criança pré-púbere); reiniciar mais lento após controle.\n7. Aranha-marrom: prednisona 40 mg VO 1×/dia por 5–7 dias (criança: prednisolona 1 mg/kg/dia, máx. 40 mg).\n8. Armadeira: lidocaína 2% sem vasoconstritor 3–4 mL infiltrada no local (criança 1–2 mL), até 3 vezes a cada 30–60 min.\n9. Dipirona 1 g IV lento de 6/6 h (criança 10–15 mg/kg/dose, máx. 1 g).\n10. Exames: hemograma, reticulócitos, bilirrubinas, DHL, ureia, creatinina, K, urina tipo 1, TP, TTPa — admissão e a cada 24 h por 72 h (loxoscelismo).\n11. Diurese e cor da urina a cada turno. Comunicar urina escura, icterícia, diurese < 0,5 mL/kg/h, vômitos, sudorese profusa, hipotensão, SpO₂ < 94%.\n12. Profilaxia do tétano conforme histórico vacinal. Notificação SINAN."
  },
  orientacoesRetorno: [
    "Prevenção: sacudir roupas, toalhas, lençóis e calçados; afastar camas e berços da parede; limpar atrás de quadros e móveis; usar luvas no jardim e ao mexer em entulho e bananeiras",
    "Aranha-marrom: a ferida pode piorar por dias e levar semanas para cicatrizar; manter limpa e coberta",
    "Voltar imediatamente se urina escura, olhos amarelados, palidez, febre alta, pouca urina ou ferida com pus e vermelhidão que se espalha",
    "Armadeira: voltar se vômitos, suor frio, agitação, sonolência ou falta de ar (principalmente em crianças)",
    "Doença do soro (febre, dor nas juntas, manchas) pode surgir 5 a 24 dias depois: procurar a UBS"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed., vol. 3 (2023): Araneísmo",
    "Ministério da Saúde/FUNASA — Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos, 2ª ed. rev. (2001)",
    "Secretaria Municipal da Saúde de Curitiba — Acidentes Loxoscélicos: Protocolo Técnico e Fluxo de Atenção",
    "Instituto Butantan — Bula do soro antiaracnídico (Loxosceles, Phoneutria e Tityus)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
