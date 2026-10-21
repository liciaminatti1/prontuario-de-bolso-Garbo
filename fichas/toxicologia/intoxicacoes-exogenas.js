// Intoxicações exógenas — abordagem geral
registrarFicha({
  id: "intoxicacoes-exogenas",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "Intoxicações exógenas: abordagem inicial",
  resumo: "Exposição a medicamento, droga, praguicida, produto domiciliar, planta ou gás com risco de toxicidade. Estabilizar (ABCDE), reconhecer a síndrome tóxica, descontaminar quando indicado, dar o antídoto e ligar para o CIATox.",
  palavrasChave: "intoxicacao exogena envenenamento overdose superdosagem tentativa de suicidio ingestao acidental crianca carvao ativado lavagem gastrica sindrome toxica toxindrome colinergica anticolinergica simpatomimetica opioide sedativo hipnotico ciatox disque intoxicacao 0800 paracetamol organofosforado chumbinho carbamato",
  critico: {
    tempo: "ABCDE e glicemia capilar agora",
    texto: "Estabilize antes de investigar: via aérea, ventilação, circulação, glicemia capilar e convulsão. Ligue para o CIATox (Disque-Intoxicação 0800 722 6001) logo no início."
  },
  alarmes: [
    "Rebaixamento de consciência (Glasgow ≤ 8), perda de reflexos de via aérea",
    "Bradipneia, hipoxemia ou broncorreia (opioide, organofosforado)",
    "Hipotensão, bradicardia ou arritmia; QRS > 100 ms ou QTc prolongado no ECG",
    "Convulsão, hipertermia (> 40 °C), rigidez muscular",
    "Acidose metabólica grave ou ânion gap elevado sem causa clara (metanol, salicilato, ferro)",
    "Ingestão intencional (tentativa de suicídio), ingestão de produto desconhecido ou de agente de liberação prolongada",
    "Criança com ingestão de 1 comprimido de alto risco (bloqueador de canal de cálcio, sulfonilureia, antidepressivo tricíclico, opioide, clonidina)"
  ],
  condutaInicial: [
    "Segurança da equipe: luvas, retirar roupas contaminadas; descontaminação cutânea com água corrente em praguicidas",
    "A: proteger via aérea; IOT se Glasgow ≤ 8 sem resposta a antídoto, broncorreia ou insuficiência respiratória",
    "B: O₂ se SpO₂ < 94%; ventilar com bolsa-válvula-máscara se bradipneia (opioide: naloxona)",
    "C: monitor, 2 acessos, ECG de 12 derivações; SF 0,9% 20 mL/kg (adulto 500–1.000 mL) se hipotensão",
    "D: glicemia capilar (corrigir se < 70 mg/dL), pupilas, Glasgow; benzodiazepínico se convulsão",
    "E: temperatura, pele (sudorese ou seca), sinais de trauma, punctura, adesivos transdérmicos",
    "Identificar: o quê, quanto, quando, por qual via, se intencional; trazer embalagens",
    "Ligar para o CIATox; considerar carvão ativado (até 1 h da ingestão, via aérea protegida) e antídoto específico (ver ficha Antídotos)",
    "Notificar no SINAN (intoxicação exógena é de notificação compulsória); tentativa de suicídio: notificação imediata"
  ],
  fataisExcluir: [
    "Hipoglicemia (sulfonilureia, insulina, álcool em criança)",
    "Hepatotoxicidade tardia por paracetamol (paciente assintomático nas primeiras 24 h)",
    "Cardiotoxicidade por bloqueio de canal de sódio (tricíclicos): QRS largo",
    "Síndrome colinérgica por organofosforado/carbamato (chumbinho)",
    "Intoxicação por metanol ou etilenoglicol (acidose tardia)",
    "Monóxido de carbono (vários doentes no mesmo ambiente, cefaleia)",
    "Trauma craniano ou causa clínica mascarada pela intoxicação"
  ],
  proximaDecisao: "Após estabilizar: classificar a síndrome tóxica, dosar paracetamol em toda ingestão intencional e decidir com o CIATox sobre antídoto, doses múltiplas de carvão, alcalinização ou hemodiálise. Ingestão de baixo risco e assintomático após o período de observação recomendado → alta com avaliação psiquiátrica se intencional.",
  clinica: {
    anamnese: [
      "Agente(s): nome comercial, concentração, número de comprimidos, frascos vazios; medicamentos de todos da casa",
      "Horário da exposição (define descontaminação, nomograma do paracetamol e tempo de observação)",
      "Via: oral, inalatória, cutânea, ocular, parenteral",
      "Intencional ou acidental; ideação suicida, tentativas prévias, uso de álcool e drogas",
      "Sintomas desde a exposição; vômitos; tratamentos já feitos",
      "Comorbidades, gestação, peso (criança)"
    ],
    exameFisico: [
      "Sinais vitais completos com temperatura e glicemia capilar",
      "Pupilas: miose (opioide, colinérgico, clonidina) ou midríase (anticolinérgico, simpatomimético)",
      "Pele: sudorese (colinérgico, simpatomimético) ou pele seca e quente (anticolinérgico)",
      "Ruídos intestinais, bexiga palpável (retenção urinária anticolinérgica)",
      "Neurológico: Glasgow, mioclonias, clônus, rigidez, fasciculações",
      "Hálito: álcool, alho (organofosforado), amêndoas amargas (cianeto)",
      "Procurar trauma, marcas de injeção, adesivos de fentanil"
    ],
    diferenciais: [
      { dx: "Síndrome colinérgica (organofosforado, carbamato/chumbinho)", pista: "Miose, sialorreia, broncorreia, sudorese, bradicardia, diarreia, fasciculações" },
      { dx: "Síndrome anticolinérgica (anti-histamínico, tricíclico, atropina, plantas como trombeteira)", pista: "Midríase, pele seca e quente, rubor, taquicardia, retenção urinária, delirium" },
      { dx: "Síndrome simpatomimética (cocaína, anfetamina)", pista: "Midríase, sudorese, taquicardia, hipertensão, hipertermia, agitação" },
      { dx: "Síndrome opioide", pista: "Miose, bradipneia, sonolência; responde à naloxona" },
      { dx: "Síndrome sedativo-hipnótica (benzodiazepínico, barbitúrico, álcool)", pista: "Sonolência com sinais vitais pouco alterados; pupilas normais" },
      { dx: "Síndrome serotoninérgica", pista: "Clônus induzível, hiper-reflexia, tremor, hipertermia após ISRS, tramadol, linezolida" },
      { dx: "Síndrome neuroléptica maligna", pista: "Rigidez em cano de chumbo, hipertermia, CK alta, início em dias" },
      { dx: "Hipoglicemia, AVC, meningoencefalite, TCE, distúrbio metabólico", pista: "Glicemia, sinais focais, febre, trauma" }
    ],
    gravidade: [
      "Graves: rebaixamento de consciência, insuficiência respiratória, instabilidade hemodinâmica, arritmia, convulsão, hipertermia, acidose grave",
      "Potencialmente graves mesmo assintomáticos: paracetamol, liberação prolongada, bloqueador de canal de cálcio, betabloqueador, tricíclico, sulfonilureia, metanol, paraquate, ferro, lítio",
      "A dose tóxica e o tempo de observação variam por agente: confirmar com o CIATox"
    ]
  },
  exames: [
    {
      nome: "Glicemia capilar e ECG",
      pedido: "Glicemia capilar imediata. ECG de 12 derivações com medida de QRS e QTc.",
      porQue: "Hipoglicemia é causa reversível de coma; QRS largo e QTc longo mudam conduta.",
      esperar: "Glicemia ≥ 70 mg/dL; QRS < 100 ms.",
      interpretacao: "QRS > 100 ms com R em aVR → bloqueio de canal de sódio (tricíclico): bicarbonato de sódio. QTc prolongado → corrigir K e Mg, evitar drogas que prolongam QT.",
      limitacoes: "Repetir ECG se agente cardiotóxico ou piora clínica."
    },
    {
      nome: "Bioquímica e gasometria",
      pedido: "Gasometria venosa com lactato. Sódio, potássio, cloro, bicarbonato, ureia, creatinina, glicemia, CK. Calcular ânion gap.",
      porQue: "Detectar acidose, distúrbio eletrolítico, rabdomiólise e lesão renal.",
      esperar: "Ânion gap normal 8–12 mEq/L.",
      interpretacao: "Acidose com ânion gap alto: metanol, etilenoglicol, salicilato, ferro, cianeto, cetoacidose, lactato. Gap osmolar alto sugere álcool tóxico.",
      limitacoes: "Osmolalidade medida nem sempre está disponível; dosagem de metanol é restrita a centros de referência."
    },
    {
      nome: "Paracetamol sérico",
      pedido: "Dosagem sérica de paracetamol 4 horas após a ingestão (ou na chegada, se > 4 h). Transaminases (AST, ALT), TP/INR.",
      porQue: "Paracetamol é comum em ingestões mistas e é assintomático no início.",
      esperar: "Indetectável.",
      interpretacao: "Plotar no nomograma de Rumack-Matthew (linha de tratamento 150 mcg/mL em 4 h) quando a hora da ingestão é conhecida e a ingestão é única. Acima da linha → acetilcisteína.",
      limitacoes: "Nomograma não vale para hora desconhecida, ingestão escalonada ou liberação prolongada: discutir com o CIATox."
    },
    {
      nome: "Exames dirigidos ao agente",
      pedido: "Conforme suspeita: colinesterase plasmática ou eritrocitária (organofosforado/carbamato); lítio sérico; nível de anticonvulsivante; carboxi-hemoglobina; metemoglobina; ferro sérico; etanol; beta-hCG em mulheres em idade fértil.",
      porQue: "Confirmar exposição e guiar antídoto.",
      esperar: "—",
      interpretacao: "Colinesterase baixa confirma exposição a inibidor, mas o tratamento é guiado pela clínica (atropinização).",
      limitacoes: "Triagem toxicológica de urina tem falso-positivos e negativos; não muda a conduta inicial e não deve atrasar tratamento."
    }
  ],
  tratamento: [
    {
      droga: "Carvão ativado (pó)",
      linha: "l1",
      dose: "Adulto: 1 g/kg (habitual 50 g) · Criança: 1 g/kg (máx. 50 g)",
      via: "VO ou por sonda nasogástrica, suspenso em água (cerca de 1 g para 8–10 mL)",
      intervalo: "Dose única; doses múltiplas só por indicação do CIATox (ex.: carbamazepina, fenobarbital, teofilina, dapsona, quinina)",
      duracao: "Dose única",
      monitorizacao: "Vômitos e risco de aspiração",
      contraindicacoes: "Via aérea não protegida com rebaixamento de consciência, cáusticos (ácidos e álcalis), hidrocarbonetos, obstrução ou perfuração intestinal. Não adsorve: ferro, lítio, álcoois, metais, ácidos e álcalis",
      ajustes: "Benefício maior até 1 h da ingestão; pode ser considerado depois em agentes de liberação prolongada ou que retardam o esvaziamento gástrico, após discussão com o CIATox. Lavagem gástrica não é rotina"
    },
    {
      droga: "Naloxona (ampola 0,4 mg/mL)",
      linha: "l1",
      dose: "Adulto com bradipneia: 0,04–0,4 mg IV e repetir até ventilação adequada (máx. 10 mg) · Criança: 0,1 mg/kg (máx. 2 mg) para reversão completa",
      via: "IV, IM, SC ou intranasal",
      intervalo: "Repetir a cada 2–3 min",
      duracao: "Efeito dura 30–90 min; opioide de longa ação pode exigir infusão",
      monitorizacao: "FR, SpO₂, nível de consciência por pelo menos 4–6 h após a última dose",
      contraindicacoes: "Usuário crônico: doses baixas para evitar abstinência aguda",
      ajustes: "Infusão: 2/3 da dose que reverteu, por hora. Ver ficha Antídotos"
    },
    {
      droga: "Benzodiazepínico para convulsão ou agitação tóxica",
      linha: "l1",
      dose: "Diazepam 0,15–0,2 mg/kg IV (máx. 10 mg/dose) ou midazolam 0,2 mg/kg IM (máx. 10 mg)",
      via: "IV ou IM",
      intervalo: "Repetir em 5–10 min se necessário",
      duracao: "Até controle",
      monitorizacao: "Depressão respiratória",
      contraindicacoes: "—",
      ajustes: "Na convulsão tóxica, fenitoína não é eficaz (e é contraindicada em tricíclicos). Agitação simpatomimética: benzodiazepínico é 1ª escolha"
    },
    {
      droga: "Bicarbonato de sódio 8,4% (1 mEq/mL)",
      linha: "adj",
      dose: "1–2 mEq/kg IV em bolus",
      via: "IV",
      intervalo: "Repetir até QRS < 100 ms ou pH sérico 7,45–7,55",
      duracao: "Conforme ECG",
      monitorizacao: "ECG, gasometria, sódio e potássio",
      contraindicacoes: "Hipocalemia não corrigida, sobrecarga de volume",
      ajustes: "Indicação: QRS > 100 ms por tricíclico ou outro bloqueador de canal de sódio. Em criança, preferir bicarbonato diluído 1:1 em água destilada"
    },
    {
      droga: "Glicose hipertônica",
      linha: "l1",
      dose: "Adulto: glicose 50% 50 mL (25 g) · Criança: glicose 10% 2–5 mL/kg",
      via: "IV",
      intervalo: "Repetir conforme glicemia capilar",
      duracao: "Manter SG 10% se sulfonilureia",
      monitorizacao: "Glicemia capilar a cada 1 h",
      contraindicacoes: "—",
      ajustes: "Etilista ou desnutrido: tiamina 100 mg IV antes ou junto com a glicose"
    },
    {
      droga: "Indução de vômitos, leite, 'remédio caseiro', flumazenil de rotina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Risco de aspiração e lesão. Flumazenil pode precipitar convulsão em ingestão mista ou uso crônico de benzodiazepínico",
      ajustes: "Xarope de ipeca não é recomendado"
    }
  ],
  destino: {
    agora: ["Sala de emergência com monitor se qualquer alarme", "Ligar para o CIATox com dados de agente, dose, horário e peso"],
    reavaliar: ["Sinais vitais, consciência e glicemia a cada 1 h nas primeiras horas", "ECG seriado se cardiotóxico", "Paracetamol de 4 h e transaminases"],
    alta: [
      "Assintomático após o período de observação indicado pelo CIATox para o agente",
      "Ingestão intencional: só após avaliação de risco de suicídio e plano de seguimento (CAPS ou equipe de saúde mental)",
      "Orientar armazenamento seguro de medicamentos e produtos de limpeza"
    ],
    observacao: ["Ingestões potencialmente tóxicas assintomáticas: observar no mínimo 6 h; agentes de liberação prolongada ou sulfonilureia em criança: 12–24 h, conforme CIATox"],
    internacao: ["Sintomas persistentes, necessidade de antídoto em infusão, paracetamol acima da linha de tratamento", "Risco de suicídio que impede alta segura"],
    transferencia: ["UTI: IOT, instabilidade hemodinâmica, arritmia, convulsão refratária, necessidade de hemodiálise (lítio, metanol, salicilato, metformina com acidose grave)"]
  },
  prescricao: {
    hospitalar: "SALA DE EMERGÊNCIA — INTOXICAÇÃO EXÓGENA (peso: ___ kg)\n1. Dieta zero até avaliação de via aérea e de nível de consciência.\n2. Monitor cardíaco, oximetria e PA não invasiva contínuos. Cabeceira a 30°; decúbito lateral se vômitos.\n3. O₂ por cateter nasal ou máscara se SpO₂ < 94%.\n4. Acesso venoso periférico calibroso (2 se instável).\n5. SF 0,9% 500 mL IV em bolus se PAS < 90 mmHg; reavaliar e repetir. Criança: SF 0,9% 20 mL/kg em 10–20 min.\n6. Glicemia capilar agora e de 1/1 h. Se < 70 mg/dL: glicose 50% 50 mL IV (criança: glicose 10% 2–5 mL/kg). Etilista: tiamina 100 mg IV antes.\n7. Carvão ativado 50 g (criança: 1 g/kg, máx. 50 g) suspenso em 300–400 mL de água, VO ou SNG, dose única — SOMENTE se ingestão há até 1 h, agente adsorvível e via aérea protegida.\n8. Se FR < 12 irpm ou miose com sonolência (suspeita de opioide): naloxona 0,4 mg/mL — diluir 1 ampola em 9 mL de SF 0,9% (0,04 mg/mL) e fazer 1 mL (0,04 mg) IV a cada 2 min até FR adequada (criança: 0,1 mg/kg, máx. 2 mg).\n9. Se convulsão: diazepam 10 mg IV lento, sem diluir (criança 0,2 mg/kg, máx. 10 mg); repetir em 5–10 min se persistir.\n10. Antídoto específico conforme agente (ver ficha Antídotos) após contato com o CIATox.\n11. Ondansetrona 4 mg IV lento SN se vômitos (criança 0,15 mg/kg, máx. 4 mg) — evitar se QTc prolongado.\n12. Coletar: gasometria venosa, eletrólitos, ureia, creatinina, CK, paracetamol 4 h, AST, ALT, TP/INR; ECG agora e repetir conforme agente.\n13. Notificação SINAN (intoxicação exógena). Se tentativa de suicídio: notificação imediata e vigilância contínua (retirar objetos de risco, acompanhante).\n14. Sinais vitais, Glasgow e pupilas de 1/1 h. Comunicar FR < 12, PAS < 90, QRS > 100 ms, convulsão, Glasgow em queda.\n\nCONTATO: CIATox — Disque-Intoxicação 0800 722 6001 (24 h)."
  },
  orientacoesRetorno: [
    "Guardar medicamentos, produtos de limpeza e venenos em local alto, trancado e na embalagem original; nunca em garrafa de refrigerante",
    "Não provocar vômito nem dar leite, óleo ou 'remédio caseiro' em caso de nova ingestão",
    "Em qualquer dúvida sobre ingestão, ligar para o Disque-Intoxicação 0800 722 6001 (gratuito, 24 h)",
    "Voltar imediatamente se sonolência, confusão, vômitos persistentes, dor abdominal, pele ou olhos amarelados, falta de ar ou convulsão",
    "Após tentativa de suicídio: não deixar a pessoa sozinha, retirar medicamentos e armas de casa, manter a consulta marcada com a saúde mental; em crise, procurar UPA/PS ou ligar 188 (CVV) ou 192 (SAMU)"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2023/2024): Intoxicação exógena e notificação compulsória",
    "ANVISA/RENACIAT — Disque-Intoxicação 0800 722 6001",
    "American Heart Association — 2023 Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning",
    "AHA — Diretrizes de RCP e ACE 2025 (suporte avançado adulto e pediátrico)",
    "AACT/EAPCCT — Position paper: single-dose activated charcoal (atualização 2005) e multiple-dose activated charcoal (1999)",
    "Goldfrank's Toxicologic Emergencies, 11ª ed. (2019)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
