// Neutropenia febril
registrarFicha({
  id: "neutropenia-febril",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Neutropenia febril",
  resumo: "Febre em paciente com neutrófilos < 500/mm³ (ou < 1.000 com queda prevista para < 500 em 48 h), geralmente após quimioterapia. Emergência: antibiótico de amplo espectro em até 1 hora, estratificação pelo MASCC.",
  palavrasChave: "neutropenia febril quimioterapia febre oncologico mascc cisne cefepime piperacilina tazobactam meropenem vancomicina ciprofloxacino amoxicilina clavulanato neutrofilos granulocitos g-csf filgrastima",
  critico: {
    tempo: "Antibiótico em até 1 hora",
    texto: "Não esperar o hemograma em paciente em quimioterapia com febre: colher 2 pares de hemocultura e iniciar betalactâmico antipseudomonas (cefepime) em até 60 min da chegada."
  },
  alarmes: [
    "Hipotensão, lactato alto, rebaixamento, taquipneia (sepse/choque — ver ficha sepse)",
    "Mucosite grave, diarreia, dor abdominal (enterocolite neutropênica)",
    "Celulite, infecção de cateter (eritema, secreção no túnel)",
    "Pneumonia, hipoxemia",
    "Neutrófilos < 100/mm³ ou neutropenia prevista > 7 dias",
    "Leucemia aguda, transplante de medula",
    "MASCC < 21"
  ],
  condutaInicial: [
    "Triagem com prioridade: todo paciente em quimioterapia com febre é tratado como neutropênico até prova em contrário",
    "Febre: temperatura oral ≥ 38,3 °C única ou ≥ 38,0 °C por 1 h (axilar ≥ 37,8 °C é o corte usado no Brasil)",
    "Colher 2 pares de hemocultura (1 periférica + 1 de cada lúmen do cateter, se houver), hemograma, creatinina, eletrólitos, função hepática, lactato, urina tipo 1 e urocultura",
    "Antibiótico em até 60 min: cefepime 2 g IV 8/8 h (ou piperacilina-tazobactam 4,5 g 6/6 h)",
    "Choque, colonização por resistentes ou infecção grave: meropenem ± vancomicina; amicacina se choque",
    "RX de tórax; exame cuidadoso de pele, boca, cateter, períneo (sem toque retal)",
    "Calcular MASCC para decidir internação ou tratamento oral ambulatorial"
  ],
  fataisExcluir: [
    "Choque séptico",
    "Enterocolite neutropênica (tiflite)",
    "Infecção de cateter com bacteremia",
    "Pneumonia por fungos filamentosos (febre persistente após 4–7 dias)",
    "Celulite perianal / fasciíte"
  ],
  proximaDecisao: "MASCC ≥ 21, sem critérios de alto risco e com acesso ao serviço → antibiótico oral ambulatorial após observação e primeira dose. MASCC < 21 → internação com betalactâmico IV. Febre persistente após 4–7 dias sem foco em alto risco → investigar e tratar fungo (TC de tórax, galactomanana).",
  clinica: {
    anamnese: [
      "Data e tipo da última quimioterapia (nadir em geral 7–14 dias após)",
      "Neoplasia, transplante, uso de G-CSF, profilaxias em uso (quinolona, antifúngico)",
      "Sintomas localizatórios: tosse, disúria, diarreia, dor abdominal, dor perianal, mucosite",
      "Cateter (PICC, port-a-cath), internação e antibióticos recentes",
      "Colonização prévia por bactérias resistentes"
    ],
    exameFisico: [
      "Sinais vitais completos, perfusão, estado mental",
      "Pele, cavidade oral, cateter (óstio e túnel), região perianal por inspeção",
      "Pulmões, abdome (dor em fossa ilíaca direita sugere tiflite)",
      "Sinais inflamatórios podem estar ausentes por falta de neutrófilos"
    ],
    diferenciais: [
      { dx: "Febre por transfusão ou droga", pista: "Relação temporal; diagnóstico de exclusão" },
      { dx: "Febre tumoral", pista: "Linfoma, leucemia; diagnóstico de exclusão" },
      { dx: "Infecção viral (influenza, covid-19)", pista: "Sintomas respiratórios; testar" },
      { dx: "Tromboembolismo", pista: "Dispneia, edema assimétrico" }
    ],
    gravidade: [
      "MASCC ≥ 21: baixo risco (complicações < 5–10%)",
      "MASCC < 21: alto risco",
      "Alto risco independente do escore: neutropenia profunda e prolongada prevista (> 7 dias), instabilidade, comorbidade importante, mucosite grave, insuficiência hepática ou renal, pneumonia, infecção de cateter",
      "Tumor sólido aparentemente estável: o escore CISNE ajuda a identificar risco oculto"
    ]
  },
  exames: [
    {
      nome: "Culturas",
      pedido: "Hemoculturas: 2 pares (1 periférico + 1 de cada lúmen do cateter central, se houver). Urocultura. Culturas de sítios suspeitos (escarro, fezes com toxina de C. difficile se diarreia, swab de lesão).",
      porQue: "Guiar descalonamento.",
      esperar: "Positivas em 20–30% dos casos.",
      interpretacao: "Crescimento mais precoce no cateter (≥ 2 h antes) sugere infecção do cateter.",
      limitacoes: "Não atrasar o antibiótico pelas culturas."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma com contagem absoluta de neutrófilos, creatinina, ureia, sódio, potássio, TGO, TGP, bilirrubinas, lactato, PCR, gasometria venosa, urina tipo 1.",
      porQue: "Confirmar neutropenia, gravidade, ajuste de doses.",
      esperar: "Neutrófilos < 500/mm³.",
      interpretacao: "Neutrófilos = leucócitos × (% segmentados + bastões) / 100.",
      limitacoes: "—"
    },
    {
      nome: "Imagem",
      pedido: "RX de tórax. TC de tórax se sintomas respiratórios ou febre persistente em alto risco. TC de abdome se dor abdominal.",
      porQue: "Foco pulmonar e tiflite.",
      esperar: "RX pode ser normal sem neutrófilos.",
      interpretacao: "Nódulos com halo → fungo filamentoso.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cefepime",
      linha: "l1",
      dose: "2 g",
      via: "IV em 30 min",
      intervalo: "8/8 h",
      duracao: "Até afebril ≥ 48 h e neutrófilos > 500/mm³ em ascensão (ou conforme foco/cultura)",
      monitorizacao: "Febre, culturas, creatinina, neurotoxicidade",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Ajuste renal (ClCr 30–60: 2 g 12/12 h; 11–29: 2 g 24/24 h). Alternativa: piperacilina-tazobactam 4,5 g IV 6/6 h"
    },
    {
      droga: "Meropenem",
      linha: "alt",
      dose: "1 g (2 g se SNC)",
      via: "IV em 30 min",
      intervalo: "8/8 h",
      duracao: "Conforme evolução",
      monitorizacao: "Culturas, creatinina",
      contraindicacoes: "—",
      ajustes: "Choque, colonização ou infecção prévia por ESBL, dor abdominal (tiflite). Ajuste renal"
    },
    {
      droga: "Vancomicina",
      linha: "adj",
      dose: "Ataque 25 mg/kg (máximo 3 g); depois 15–20 mg/kg",
      via: "IV, 1 g em ≥ 1 h",
      intervalo: "8/8–12/12 h",
      duracao: "Suspender em 48–72 h se sem gram-positivo",
      monitorizacao: "Nível sérico/AUC, creatinina",
      contraindicacoes: "—",
      ajustes: "Só se: instabilidade, suspeita de infecção de cateter, pele/partes moles, pneumonia, colonização por MRSA, gram-positivo na hemocultura, mucosite grave com profilaxia por quinolona"
    },
    {
      droga: "Ciprofloxacino + amoxicilina-clavulanato (baixo risco)",
      linha: "l1",
      dose: "Ciprofloxacino 500 mg 12/12 h + amoxicilina-clavulanato 875/125 mg 12/12 h",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Até afebril e neutrófilos > 500/mm³ (geralmente 7 dias)",
      monitorizacao: "Contato telefônico em 24 h, retorno em 48–72 h",
      contraindicacoes: "Uso de quinolona como profilaxia, intolerância oral, vômitos",
      ajustes: "Primeira dose no hospital e observação de algumas horas antes da alta. Alergia a penicilina: ciprofloxacino + clindamicina 300 mg 6/6 h"
    },
    {
      droga: "Amicacina (choque)",
      linha: "adj",
      dose: "15–20 mg/kg",
      via: "IV em 30–60 min",
      intervalo: "24/24 h",
      duracao: "Curta (48–72 h)",
      monitorizacao: "Creatinina, audição",
      contraindicacoes: "LRA",
      ajustes: "Associar ao betalactâmico na instabilidade ou suspeita de resistência"
    },
    {
      droga: "Filgrastima (G-CSF)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar de rotina no tratamento",
      ajustes: "Considerar só em alto risco (choque, neutropenia profunda prolongada) com oncologia"
    }
  ],
  destino: {
    agora: ["Isolamento protetor (precaução padrão, higiene de mãos), culturas e antibiótico em 1 h"],
    reavaliar: ["Sinais vitais de 2/2–4/4 h", "Culturas em 48–72 h para ajustar", "Febre persistente após 4–7 dias em alto risco → investigar fungo"],
    alta: [
      "MASCC ≥ 21, estável, tolerando VO, sem foco grave, com acompanhante, telefone e retorno em até 1 h de transporte",
      "Antibiótico oral, contato em 24 h e reavaliação em 48–72 h com oncologia"
    ],
    observacao: ["Baixo risco: observar algumas horas após a 1ª dose antes da alta"],
    internacao: ["MASCC < 21 ou qualquer critério clínico de alto risco", "UTI: choque, insuficiência respiratória"],
    transferencia: ["Serviço sem retaguarda oncológica: regulação para serviço de referência após antibiótico"]
  },
  prescricao: {
    hospitalar: "NEUTROPENIA FEBRIL — ALTO RISCO — ADULTO (peso: ___ kg)\n1. Dieta oral conforme aceitação (alimentos bem cozidos).\n2. Precaução padrão, higiene rigorosa das mãos; quarto individual se disponível.\n3. Hemoculturas 2 pares (periférica + cada lúmen do cateter) e urocultura ANTES do antibiótico, sem atrasá-lo.\n4. Cefepime 2 g + SF 0,9% 100 mL IV em 30 min de 8/8 h (1ª dose em até 60 min da chegada).\n   OU piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h.\n   Choque/ESBL prévio/dor abdominal: meropenem 1 g + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n5. Se indicada: vancomicina 25 mg/kg (___ mg) em 250 mL SF 0,9% IV em 2 h (ataque), depois 15 mg/kg de 12/12 h, ajustar por nível.\n6. Choque: SF 0,9% ou Ringer lactato 30 mL/kg nas primeiras 3 h + amicacina 15 mg/kg IV 1×/dia; noradrenalina para PAM ≥ 65 (ver ficha sepse).\n7. Dipirona 1 g IV de 6/6 h se febre (evitar AINE).\n8. Bochechos com solução salina/bicarbonato 4×/dia se mucosite.\n9. NÃO aferir temperatura retal, não fazer toque retal, evitar IM.\n10. Controles: sinais vitais de 2/2 h nas primeiras 12 h, depois 4/4 h; curva térmica; diurese. Hemograma, creatinina diários.",
    ambulatorial: "NEUTROPENIA FEBRIL — BAIXO RISCO (MASCC ≥ 21)\nUSO ORAL\n1. Ciprofloxacino 500 mg ------------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n2. Amoxicilina + clavulanato 875/125 mg ---------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias, junto com as refeições.\n3. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se febre.\n\nRETORNO: contato telefônico em 24 h e consulta em 48–72 h com hemograma."
  },
  orientacoesRetorno: [
    "Medir a temperatura 2 vezes ao dia e sempre que sentir calafrio; anotar",
    "Tomar os antibióticos no horário, até o fim",
    "Voltar imediatamente se: febre que não baixa em 48 h, calafrio forte, tontura, desmaio, falta de ar, vômitos que impedem o remédio, diarreia intensa, confusão ou pouca urina",
    "Lavar as mãos com frequência, evitar aglomerações e pessoas doentes, comer alimentos bem cozidos",
    "Não usar supositório, termômetro no ânus nem anti-inflamatórios",
    "Avisar o serviço de oncologia sobre esta febre antes da próxima quimioterapia"
  ],
  tabelas: [
    {
      titulo: "Escore MASCC (baixo risco ≥ 21; máximo 26)",
      colunas: ["Característica", "Pontos"],
      linhas: [
        ["Carga de doença: sem sintomas ou sintomas leves", "5"],
        ["Carga de doença: sintomas moderados", "3"],
        ["Sem hipotensão (PAS > 90 mmHg)", "5"],
        ["Sem DPOC", "4"],
        ["Tumor sólido ou neoplasia hematológica sem infecção fúngica prévia", "4"],
        ["Sem desidratação com necessidade de hidratação IV", "3"],
        ["Paciente ambulatorial no início da febre", "3"],
        ["Idade < 60 anos", "2"]
      ],
      nota: "As duas linhas de carga de doença não se somam (escolher uma). Mesmo com MASCC ≥ 21, critérios clínicos de alto risco indicam internação."
    }
  ],
  fontes: [
    "ASCO/IDSA — Outpatient Management of Fever and Neutropenia in Adults Treated for Malignancy: Guideline Update (Taplitz et al., 2018)",
    "IDSA — Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer (Freifeld et al., 2011)",
    "ESMO — Management of febrile neutropenia: Clinical Practice Guidelines (Klastersky et al., 2016)",
    "Klastersky J et al. — The MASCC risk index (J Clin Oncol, 2000)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
