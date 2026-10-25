// Defeitos de parede abdominal, hérnias, hidrocele e criptorquidia na criança
registrarFicha({
  id: "defeitos-parede-abdominal",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Gastrosquise, onfalocele, hérnias, hidrocele e criptorquidia na criança",
  resumo: "Conduta inicial na sala de parto para gastrosquise e onfalocele e, no ambulatório, quando operar hérnia umbilical, hérnia inguinal, hidrocele e criptorquidia. Hérnia complicada no adulto: ver ficha hernias-complicadas; dor escrotal aguda: ver ficha escroto-agudo.",
  palavrasChave: "gastrosquise onfalocele defeito parede abdominal hernia umbilical hernia inguinal crianca encarcerada hidrocele comunicante criptorquidia testiculo nao descido retratil orquidopexia beckwith wiedemann cirurgia pediatrica",
  critico: {
    tempo: "Hérnia encarcerada: reduzir/operar",
    texto: "Hérnia inguinal na criança não fecha sozinha e encarcera com frequência no 1º ano: encaminhar para cirurgia eletiva logo após o diagnóstico. Gastrosquise: cobrir as alças com plástico estéril, deitar de lado e transferir para cirurgia pediátrica."
  },
  alarmes: [
    "Abaulamento inguinal ou escrotal endurecido, doloroso e irredutível, com choro, vômitos ou distensão (hérnia encarcerada)",
    "Pele vermelha ou arroxeada sobre a hérnia, febre, vômitos biliosos (estrangulamento)",
    "Gastrosquise com alças escurecidas, edemaciadas ou torcidas",
    "Onfalocele rota ou RN com hipoglicemia (Beckwith-Wiedemann)",
    "Testículos não palpáveis bilateralmente ou criptorquidia com hipospádia (distúrbio da diferenciação sexual, excluir hiperplasia adrenal)",
    "Dor escrotal aguda (torção testicular: ver ficha escroto-agudo)"
  ],
  conduta: [
    "Gastrosquise (defeito à direita do umbigo, alças expostas sem saco): envolver as alças e o tronco em plástico estéril transparente (bolsa intestinal), sem comprimir; RN em decúbito lateral direito, alças apoiadas na linha média; sonda orogástrica aberta; acesso venoso; aquecer; reposição hídrica maior (perdas); antibiótico; cirurgia pediátrica (fechamento primário ou silo)",
    "Onfalocele (defeito central com saco e cordão inserido no saco): cobrir com compressa estéril úmida com SF morno e plástico; glicemia frequente; buscar malformações (ecocardiograma, cariótipo, USG renal); cirurgia pediátrica",
    "Hérnia umbilical: comum, sobretudo em negros e prematuros; maioria fecha até 4–5 anos. Não usar moeda, faixa ou esparadrapo. Cirurgia eletiva se persistir após 4–5 anos, se anel grande (> 1,5–2 cm) após 2 anos, conforme o cirurgião, ou se houver encarceramento",
    "Hérnia inguinal: encaminhar para cirurgia eletiva assim que diagnosticada (prematuros: antes da alta ou logo após). Menina com hérnia inguinal: o conteúdo pode ser ovário (não forçar redução se ovário irredutível; cirurgia em poucos dias); bilateral → lembrar insensibilidade androgênica",
    "Hérnia inguinal encarcerada sem sinais de estrangulamento: analgesia (± sedação), posição de Trendelenburg e redução manual suave; reduzida → cirurgia em 24–72 h (alto risco de reencarceramento); não reduz ou sinais de estrangulamento → cirurgia de urgência",
    "Hidrocele: não comunicante (volume constante) costuma resolver até 12–24 meses; comunicante (varia de volume ao longo do dia, aumenta ao chorar) = conduto peritoneovaginal patente, tratar como hérnia (cirurgia)",
    "Criptorquidia: examinar os testículos em toda consulta (posição de cócoras ou pernas cruzadas ajuda). Não descido aos 6 meses (idade corrigida) → encaminhar à cirurgia pediátrica/urologia; orquidopexia idealmente entre 6 e 18 meses",
    "Testículo retrátil (desce e fica na bolsa após tração): não opera, mas reavaliar anualmente (pode ascender)"
  ],
  exames: [
    "Hérnia, hidrocele e criptorquidia: diagnóstico clínico; USG não é necessária para decidir cirurgia na criptorquidia (AUA/EAU) e só ajuda em dúvida de hérnia x hidrocele",
    "Testículos não palpáveis bilaterais ou com hipospádia: cariótipo, 17-OH-progesterona, eletrólitos e avaliação endocrinológica urgente no RN",
    "Gastrosquise/onfalocele: glicemia, eletrólitos, gasometria, hemograma; onfalocele: ecocardiograma, USG renal, cariótipo",
    "Transiluminação positiva não exclui hérnia associada"
  ],
  diferenciais: [
    "Hérnia inguinal x hidrocele (hidrocele: não redutível, transilumina, consegue-se palpar acima dela)",
    "Hérnia inguinal encarcerada x torção testicular x linfadenite inguinal",
    "Testículo retrátil x ectópico x não descido x ausente (anorquia)",
    "Gastrosquise x onfalocele rota (onfalocele tem restos de saco e cordão inserido no defeito)",
    "Hérnia umbilical x hérnia epigástrica (linha média acima do umbigo, não fecha sozinha)"
  ],
  encaminhar: [
    "Cirurgia pediátrica de urgência (PS): hérnia encarcerada não redutível ou com sinais de estrangulamento; gastrosquise e onfalocele ao nascer (idealmente parto em centro com cirurgia pediátrica, planejado no pré-natal)",
    "Cirurgia pediátrica eletiva prioritária: hérnia inguinal (todas), hidrocele comunicante, criptorquidia aos 6 meses",
    "Cirurgia pediátrica eletiva: hérnia umbilical após 4–5 anos ou anel grande; hidrocele não comunicante após 12–24 meses; hérnia epigástrica",
    "Endocrinologia pediátrica / genética: criptorquidia bilateral não palpável, hipospádia associada, genitália atípica"
  ],
  tratamento: [
    {
      droga: "Ampicilina + gentamicina (gastrosquise, onfalocele rota)",
      linha: "l1",
      dose: "Ampicilina 50 mg/kg/dose · gentamicina 4–5 mg/kg/dose conforme IG",
      via: "IV",
      intervalo: "Ampicilina 8/8 h (≤ 7 dias); gentamicina 24/24 h a 48/48 h conforme IG (ver ficha sepse-neonatal)",
      duracao: "Profilaxia até o fechamento do defeito, conforme protocolo do serviço cirúrgico",
      monitorizacao: "Temperatura, perfusão, aspecto das alças, função renal",
      contraindicacoes: "—",
      ajustes: "Prática usual em serviços brasileiros, sem padronização universal: seguir a cirurgia pediátrica/CCIH"
    },
    {
      droga: "Dipirona (pós-operatório de herniorrafia / orquidopexia)",
      linha: "l1",
      dose: "15 mg/kg/dose (máx. 1 g)",
      via: "Oral",
      intervalo: "6/6 h se dor",
      duracao: "2–3 dias",
      monitorizacao: "—",
      contraindicacoes: "< 3 meses ou < 5 kg (preferir paracetamol)",
      ajustes: "Paracetamol 10–15 mg/kg/dose 6/6 h (máx. 75 mg/kg/dia) é alternativa"
    },
    {
      droga: "Tratamento hormonal (hCG/GnRH) da criptorquidia",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não recomendado para induzir descida (AUA 2014/2018; EAU)",
      ajustes: "Tratamento é cirúrgico"
    }
  ],
  prescricao: {
    ambulatorial: "PÓS-OPERATÓRIO DE HERNIORRAFIA INGUINAL / UMBILICAL OU ORQUIDOPEXIA (peso: ___ kg)\nUSO ORAL\n1. Dipirona gotas 500 mg/mL (1 gota = 25 mg) ------------ 1 frasco\n   Dar ___ gotas (15 mg/kg = ___ mg) de 6 em 6 horas se dor, por até 3 dias.\n   OU Paracetamol gotas 200 mg/mL (1 gota ≈ 13 mg) ---- 1 frasco\n   Dar 1 gota por kg = ___ gotas (≈ 13 mg/kg) de 6 em 6 horas se dor (máximo 5 doses por dia).\n\nORIENTAÇÕES\n- Banho liberado após 24–48 h conforme o cirurgião; manter o curativo limpo e seco.\n- Evitar brincadeiras de impacto, bicicleta e montaria por 1–2 semanas.\n- Retorno com o cirurgião em 7–14 dias.",
    hospitalar: "GASTROSQUISE — SALA DE PARTO / ANTES DA TRANSFERÊNCIA (peso: ___ kg)\n1. Dieta zero; sonda orogástrica nº 8–10 aberta em frasco (descompressão).\n2. Envolver as alças e o abdome em plástico estéril transparente (bolsa intestinal ou saco plástico estéril), sem comprimir o mesentério; RN em decúbito lateral direito; alças centralizadas e apoiadas.\n3. Incubadora aquecida; manter temperatura axilar 36,5–37,5 °C.\n4. Acesso venoso periférico (membros superiores).\n5. SG 10% 80–100 mL/kg/dia = ___ mL/h + reposição de perdas; se má perfusão: SF 0,9% 10–20 mL/kg = ___ mL IV em 20–30 min (reavaliar).\n6. Ampicilina 50 mg/kg = ___ mg IV de 8/8 h + gentamicina ___ mg/kg = ___ mg IV a cada ___ h (conforme IG).\n7. Vitamina K 1 mg IM.\n8. Controles: temperatura, FC, perfusão e cor das alças de 1/1 h; glicemia de 3/3 h; diurese; débito da sonda.\n9. Regulação para cirurgia pediátrica — URGENTE."
  },
  orientacoesRetorno: [
    "Hérnia umbilical em bebê é comum e costuma fechar sozinha; não use moeda, faixa ou esparadrapo",
    "Hérnia na virilha não fecha sozinha: a cirurgia deve ser marcada logo",
    "Leve ao pronto-socorro na hora se a hérnia ficar dura, doer, não voltar para dentro, mudar de cor ou se o bebê vomitar e chorar sem parar",
    "Saco escrotal que muda de tamanho ao longo do dia: avisar o médico (pode ser hérnia)",
    "Testículo fora da bolsa precisa de avaliação até os 6 meses; a cirurgia antes de 18 meses protege a fertilidade e facilita o exame para câncer no futuro",
    "Dor forte e súbita no saco escrotal: pronto-socorro imediato (torção do testículo)"
  ],
  tabelas: [
    {
      titulo: "Gastrosquise x onfalocele",
      colunas: ["Característica", "Gastrosquise", "Onfalocele"],
      linhas: [
        ["Local", "À direita do cordão umbilical", "Central, na base do cordão"],
        ["Saco/membrana", "Ausente (alças expostas, espessadas)", "Presente (âmnio e peritônio), pode conter fígado"],
        ["Malformações associadas", "Pouco frequentes (atresia intestinal em parte dos casos)", "Frequentes: cardíacas, cromossômicas (trissomias 13, 18), Beckwith-Wiedemann"],
        ["Cuidados imediatos", "Plástico estéril, decúbito lateral direito, sonda, hidratação maior, antibiótico", "Compressa úmida + plástico, glicemia, investigação de malformações"],
        ["Prognóstico", "Bom; depende do estado das alças", "Depende das malformações associadas"]
      ],
      nota: "Ambas: parto em centro terciário com cirurgia pediátrica, planejado após diagnóstico ultrassonográfico no pré-natal."
    },
    {
      titulo: "Momento da cirurgia (resumo)",
      colunas: ["Condição", "Quando operar", "Observação"],
      linhas: [
        ["Hérnia inguinal", "Logo após o diagnóstico (eletiva prioritária)", "Encarcerada reduzida: em 24–72 h; não redutível: urgência"],
        ["Hérnia umbilical", "Se persistir após 4–5 anos (antes se anel grande ou encarceramento)", "Encarceramento é raro"],
        ["Hidrocele não comunicante", "Se persistir após 12–24 meses", "A maioria resolve"],
        ["Hidrocele comunicante", "Ao diagnóstico, como hérnia", "Varia de volume"],
        ["Criptorquidia", "Encaminhar aos 6 meses; orquidopexia entre 6 e 18 meses", "Bilateral não palpável no RN: urgência endócrina"]
      ],
      nota: "AUA 2014 (revisão 2018) e EAU/ESPU (2021–2024) para criptorquidia."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Gastrosquise com sinais de sepse ou piora", "Hemocultura e escalonar conforme ficha sepse-neonatal (tardia hospitalar: esquema da CCIH)", "Avaliar isquemia das alças e síndrome compartimental abdominal após o fechamento"],
        ["Infecção de ferida após herniorrafia (celulite)", "Cefalexina 25–50 mg/kg/dia VO dividida 6/6 h (máx. 4 g/dia) por 5–7 dias", "Abscesso: drenar; sem melhora em 48–72 h ou febre alta: internar e IV"],
        ["Suspeita de MRSA na ferida", "Sulfametoxazol-trimetoprima 8–12 mg/kg/dia de TMP VO 12/12 h (> 2 meses) ou clindamicina 30–40 mg/kg/dia VO 8/8 h", "Colher cultura da secreção"],
        ["Alergia a betalactâmico", "Clindamicina 30–40 mg/kg/dia VO 8/8 h (máx. 1,8 g/dia)", "Ver ficha infeccao-sitio-cirurgico"]
      ],
      nota: "Herniorrafia eletiva na criança é cirurgia limpa: em geral não precisa de antibiótico profilático."
    }
  ],
  fontes: [
    "American Urological Association — Evaluation and Treatment of Cryptorchidism (2014, revisão 2018)",
    "EAU/ESPU — Guidelines on Paediatric Urology (2024)",
    "AAP Section on Surgery — Assessment and Management of Inguinal Hernia in Infants (Pediatrics, 2012)",
    "Sociedade Brasileira de Pediatria — Documentos científicos de Cirurgia Pediátrica (vigentes)",
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 3 (2014)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
