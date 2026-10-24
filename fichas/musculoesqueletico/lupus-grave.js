// Lúpus eritematoso sistêmico: manifestações graves
registrarFicha({
  id: "lupus-grave",
  especialidade: "musculoesqueletico",
  caminho: "ps",
  publico: "adulto",
  titulo: "Lúpus eritematoso sistêmico grave (nefrite, SNC, citopenias)",
  resumo: "Paciente com LES (ou suspeita) com manifestação que ameaça órgão ou vida: nefrite, neuropsiquiátrico, citopenias graves, serosite volumosa, hemorragia alveolar, SAF catastrófica. Primeiro excluir infecção; depois pulsoterapia com o reumatologista.",
  palavrasChave: "lupus les lupus eritematoso sistemico nefrite lupica neurolupus psicose lupica convulsao anemia hemolitica plaquetopenia pulsoterapia metilprednisolona hidroxicloroquina micofenolato ciclofosfamida anti-dna complemento sindrome antifosfolipide catastrofica serosite pericardite hemorragia alveolar",
  critico: {
    tempo: "Excluir infecção, depois pulso",
    texto: "Infecção é a principal causa de morte e imita atividade lúpica. Colher culturas e tratar infecção se houver dúvida; não adiar pulsoterapia quando há ameaça de órgão (rim, SNC, hemólise, plaquetopenia grave)."
  },
  alarmes: [
    "Creatinina em ascensão, edema, HAS nova, proteinúria ou hematúria (nefrite)",
    "Convulsão, psicose, confusão, AVC, mielite (fraqueza de pernas e nível sensitivo)",
    "Hemoglobina < 8 g/dL com hemólise ou plaquetas < 30.000/mm³ com sangramento",
    "Dispneia com hemoptise e queda de Hb (hemorragia alveolar)",
    "Dor torácica com atrito, abafamento de bulhas, hipotensão (tamponamento)",
    "Febre em paciente imunossuprimido",
    "Tromboses múltiplas em dias (SAF catastrófica)",
    "Gestante com LES (pré-eclâmpsia × nefrite)"
  ],
  condutaInicial: [
    "ABC, sinais vitais, glicemia, SpO₂",
    "Febre ou PCR elevada: culturas (sangue, urina), RX de tórax e antibiótico se suspeita de infecção",
    "Exames de atividade e órgão: hemograma, reticulócitos, Coombs direto, LDH, haptoglobina, creatinina, urina tipo 1, relação proteína/creatinina, C3, C4, anti-DNA",
    "Ameaça de órgão: metilprednisolona 250–1.000 mg IV/dia por 1–3 dias (antes, ivermectina empírica)",
    "Manter (ou iniciar) hidroxicloroquina em todos, salvo contraindicação",
    "Reumatologia e nefrologia (biópsia renal) para indução: micofenolato ou ciclofosfamida; SNC: neurologia, TC/RM e líquor"
  ],
  fataisExcluir: [
    "Sepse / infecção oportunista (Pneumocystis, tuberculose, estrongiloidíase disseminada)",
    "Hemorragia alveolar difusa",
    "Tamponamento cardíaco",
    "Púrpura trombocitopênica trombótica e SAF catastrófica",
    "Síndrome de ativação macrofágica (ferritina muito alta, citopenias, febre)",
    "Emergência hipertensiva / PRES"
  ],
  proximaDecisao: "Após o pulso: prednisona VO (0,5–1 mg/kg/dia conforme órgão, com redução rápida) + imunossupressor definido pelo especialista. Sem melhora em 48–72 h ou piora: reavaliar infecção, plasmaférese (PTT, SAF catastrófica), IGIV (plaquetopenia refratária) ou ciclofosfamida.",
  clinica: {
    anamnese: [
      "Diagnóstico prévio, medicamentos (hidroxicloroquina, prednisona, imunossupressor) e adesão",
      "Febre, sintomas infecciosos, contatos, viagens",
      "Urina espumosa, edema, ganho de peso, HAS",
      "Cefaleia, convulsão, alteração de comportamento, déficit focal",
      "Sangramentos, petéquias, icterícia, colúria",
      "Tromboses e abortos prévios (SAF), gestação"
    ],
    exameFisico: [
      "PA (HAS = nefrite ou PRES), edema, sinais de serosite (atrito, derrame)",
      "Exantema malar, úlceras orais, alopecia, vasculite cutânea",
      "Exame neurológico completo, Glasgow",
      "Petéquias, palidez, icterícia, linfonodos e baço"
    ],
    diferenciais: [
      { dx: "Infecção", pista: "PCR muito elevada (no LES ativo a PCR costuma ser normal ou pouco alta), foco, leucocitose" },
      { dx: "Toxicidade de droga", pista: "Citopenia por azatioprina/micofenolato/ciclofosfamida; psicose por corticoide" },
      { dx: "PTT / microangiopatia", pista: "Esquizócitos, plaquetopenia, LDH alta, Coombs negativo" },
      { dx: "Pré-eclâmpsia / HELLP", pista: "Gestação > 20 semanas, complemento normal, anti-DNA estável" },
      { dx: "Síndrome de ativação macrofágica", pista: "Ferritina muito alta, triglicérides altos, fibrinogênio baixo" }
    ],
    gravidade: [
      "Nefrite lúpica: proteinúria ≥ 0,5 g/24 h (ou relação proteína/creatinina ≥ 0,5), hematúria dismórfica, cilindros hemáticos, elevação de creatinina — biópsia define classe (ISN/RPS)",
      "Neuropsiquiátrico grave: convulsão, psicose, estado confusional agudo, mielite, AVC, neurite óptica",
      "Hematológico grave: anemia hemolítica autoimune com Hb < 8, plaquetas < 30.000 ou sangramento",
      "Escores de atividade: SLEDAI-2K (pontuação alta = mais atividade)"
    ]
  },
  exames: [
    {
      nome: "Atividade e hemólise",
      pedido: "Hemograma com reticulócitos, esfregaço (esquizócitos), Coombs direto, LDH, haptoglobina, bilirrubinas, C3, C4, anti-DNA, PCR, VHS, ferritina.",
      porQue: "Definir atividade e tipo de citopenia.",
      esperar: "C3/C4 baixos e anti-DNA alto na atividade.",
      interpretacao: "Coombs positivo + reticulocitose = hemólise autoimune. Esquizócitos = microangiopatia (PTT, SAF).",
      limitacoes: "Complemento pode estar baixo por deficiência congênita."
    },
    {
      nome: "Rim",
      pedido: "Ureia, creatinina, eletrólitos, urina tipo 1 com pesquisa de dismorfismo eritrocitário, relação proteína/creatinina em amostra isolada, albumina sérica.",
      porQue: "Detectar e estadiar nefrite.",
      esperar: "Proteinúria, hematúria dismórfica, cilindros.",
      interpretacao: "Proteinúria ≥ 0,5 g/g ou sedimento ativo → biópsia renal.",
      limitacoes: "Biópsia exige plaquetas e PA controladas."
    },
    {
      nome: "Infecção",
      pedido: "Hemoculturas (2), urocultura, RX de tórax, procalcitonina se disponível; parasitológico de fezes (Strongyloides).",
      porQue: "Excluir infecção antes/durante imunossupressão.",
      esperar: "Negativos.",
      interpretacao: "Procalcitonina elevada favorece infecção bacteriana.",
      limitacoes: "Infecção e atividade podem coexistir."
    },
    {
      nome: "SNC",
      pedido: "TC de crânio (RM preferível), líquor (celularidade, proteína, glicose, Gram, cultura, PCR para herpes), EEG se convulsão; anticorpos antifosfolípides.",
      porQue: "Diferenciar neurolúpus de infecção, AVC, PRES e efeito de droga.",
      esperar: "RM com lesões de substância branca, infartos ou edema posterior (PRES).",
      interpretacao: "Líquor com pleocitose e febre: tratar como meningite até resultado.",
      limitacoes: "Não há exame único para neurolúpus."
    }
  ],
  tratamento: [
    {
      droga: "Metilprednisolona (pulsoterapia)",
      linha: "l1",
      dose: "250–1.000 mg (geralmente 500–1.000 mg)",
      via: "IV em 250 mL de SG 5% ou SF 0,9%, em 1–3 h",
      intervalo: "1×/dia",
      duracao: "1–3 dias",
      monitorizacao: "Glicemia, PA, potássio, arritmia, psicose",
      contraindicacoes: "Infecção não controlada (relativa)",
      ajustes: "Antes: ivermectina 200 mcg/kg VO dose única. Pulso permite usar menor dose de prednisona oral depois (EULAR 2023)"
    },
    {
      droga: "Prednisona (após o pulso)",
      linha: "l1",
      dose: "0,3–0,5 mg/kg/dia (nefrite e órgão grave podem exigir até 1 mg/kg/dia, máx. 60 mg) — definir com reumatologia",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "Reduzir até ≤ 5 mg/dia o mais rápido possível",
      monitorizacao: "PA, glicemia, densidade óssea",
      contraindicacoes: "—",
      ajustes: "Cálcio + vitamina D; IBP se risco GI; profilaxia de Pneumocystis se dose alta + imunossupressor"
    },
    {
      droga: "Hidroxicloroquina",
      linha: "l1",
      dose: "≤ 5 mg/kg/dia de peso real (geralmente 200–400 mg/dia)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínua",
      monitorizacao: "Exame oftalmológico basal e anual após 5 anos; ECG (QT)",
      contraindicacoes: "Retinopatia prévia",
      ajustes: "TFG < 30: reduzir. Segura na gestação e lactação (manter)"
    },
    {
      droga: "Micofenolato de mofetila (indução da nefrite)",
      linha: "adj",
      dose: "2–3 g/dia (decisão do especialista)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Indução 6 meses, depois manutenção",
      monitorizacao: "Hemograma, infecções",
      contraindicacoes: "Gestação (teratogênico) — contracepção eficaz obrigatória",
      ajustes: "Alternativa: ciclofosfamida IV em baixa dose (Euro-Lupus) ou associação com belimumabe/inibidor de calcineurina conforme especialista e disponibilidade no PCDT"
    },
    {
      droga: "Imunoglobulina humana IV",
      linha: "alt",
      dose: "1 g/kg/dia por 2 dias (ou 0,4 g/kg/dia por 5 dias)",
      via: "IV",
      intervalo: "1×/dia",
      duracao: "2–5 dias",
      monitorizacao: "Creatinina, trombose, cefaleia",
      contraindicacoes: "Deficiência de IgA com anticorpo anti-IgA",
      ajustes: "Plaquetopenia grave com sangramento ou refratária ao corticoide; infecção concomitante que limita imunossupressão"
    },
    {
      droga: "Anticonvulsivante / antipsicótico (sintomático no SNC)",
      linha: "adj",
      dose: "Convulsão: seguir ficha Convulsão. Psicose: haloperidol 2,5–5 mg ou risperidona 1–2 mg/dia",
      via: "IV/VO",
      intervalo: "Conforme ficha",
      duracao: "—",
      monitorizacao: "QTc, sintomas extrapiramidais",
      contraindicacoes: "—",
      ajustes: "Associar ao tratamento imunossupressor quando a causa for lúpica; anticoagulação se causa trombótica por SAF"
    }
  ],
  destino: {
    agora: ["Excluir infecção, iniciar pulso se ameaça de órgão, acionar reumatologia"],
    reavaliar: ["Creatinina, hemograma e PA diários; Glasgow e exame neurológico se SNC"],
    alta: ["Atividade controlada, sem infecção, plano de imunossupressão definido e reumatologia agendada em até 1–2 semanas"],
    observacao: ["—"],
    internacao: ["Nefrite com piora de função, SNC, citopenia grave, serosite volumosa, febre em imunossuprimido; UTI se hemorragia alveolar, tamponamento, SAF catastrófica, status epilepticus"],
    transferencia: ["Sem reumatologia, nefrologia, hemodiálise ou UTI: transferir após culturas, 1ª dose de antibiótico (se indicado) e de metilprednisolona"]
  },
  prescricao: {
    hospitalar: "LES COM AMEAÇA DE ÓRGÃO (peso: ___ kg)\n1. Dieta hipossódica (para diabético se hiperglicemia).\n2. Colher hemoculturas, urocultura, C3, C4, anti-DNA, Coombs direto, LDH, haptoglobina, relação proteína/creatinina ANTES do pulso.\n3. Ivermectina 6 mg — ___ comprimidos VO em dose única (200 mcg/kg).\n4. Metilprednisolona 1.000 mg IV em 250 mL de SG 5% em 2 h, 1×/dia por 3 dias (dose 250–1.000 mg conforme reumatologia).\n5. Hidroxicloroquina 400 mg VO 1×/dia (ou 200 mg; máx. 5 mg/kg/dia).\n6. Omeprazol 20 mg VO 1×/dia.\n7. Enoxaparina 40 mg SC 1×/dia se plaquetas > 50.000 e sem sangramento (anticoagulação plena se SAF com trombose).\n8. Anti-hipertensivo se PA ≥ 130/80 (IECA ou BRA se proteinúria, salvo gestante).\n9. Glicemia capilar de 6/6 h com insulina regular conforme esquema.\n10. Controles: PA de 4/4 h, diurese, peso diário, hemograma e creatinina diários.\n11. Pareceres: reumatologia, nefrologia (biópsia renal), neurologia (se SNC).",
    ambulatorial: "ALTA (ajustar com reumatologia)\nUSO ORAL\n1. Prednisona 20 mg -------------------------------- ___ comprimidos\n   Tomar ___ comprimidos pela manhã. Não parar de repente; redução conforme reumatologista.\n2. Hidroxicloroquina 400 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido por dia.\n3. Carbonato de cálcio 500 mg + colecalciferol 400 UI --- 60 comprimidos\n   Tomar 1 comprimido 2 vezes ao dia.\n4. Sulfametoxazol + trimetoprima 400/80 mg --------- 30 comprimidos\n   Tomar 1 comprimido por dia (profilaxia de pneumocistose), se indicado pelo especialista.\n\nORIENTAÇÕES\nProteção solar diária (FPS ≥ 30). Contracepção sem estrogênio se anticorpos antifosfolípides positivos ou doença ativa."
  },
  orientacoesRetorno: [
    "Febre em quem usa corticoide ou imunossupressor é urgência: procurar o serviço no mesmo dia",
    "Voltar imediatamente se convulsão, confusão, falta de ar, escarro com sangue, urina escura ou espumosa, inchaço, manchas roxas ou sangramento",
    "Nunca suspender a prednisona de repente",
    "Usar protetor solar todos os dias; planejar gravidez com o reumatologista",
    "Vacinas inativadas em dia (influenza, pneumococo, COVID-19); vacinas vivas contraindicadas durante imunossupressão",
    "Reumatologia em até 1–2 semanas após a alta"
  ],
  fontes: [
    "EULAR — Recommendations for the management of systemic lupus erythematosus (2023 update)",
    "KDIGO — Clinical Practice Guideline for the management of lupus nephritis (2024)",
    "EULAR/ERA-EDTA — Recommendations for the management of lupus nephritis (2019)",
    "Ministério da Saúde — PCDT Lúpus Eritematoso Sistêmico (versão vigente)",
    "Sociedade Brasileira de Reumatologia — Recomendações para o tratamento da nefrite lúpica (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
