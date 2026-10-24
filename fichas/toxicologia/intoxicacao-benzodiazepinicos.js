// Intoxicação por benzodiazepínicos
registrarFicha({
  id: "intoxicacao-benzodiazepinicos",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Intoxicação por benzodiazepínicos (e flumazenil)",
  resumo: "Sonolência, fala arrastada, ataxia e, raramente sozinha, depressão respiratória após diazepam, clonazepam, alprazolam, lorazepam, midazolam ou zolpidem. Tratamento é de suporte; flumazenil tem indicação restrita.",
  palavrasChave: "benzodiazepinico intoxicacao overdose diazepam clonazepam rivotril alprazolam lorazepam bromazepam midazolam zolpidem flumazenil lanexat sedacao",
  critico: {
    tempo: "Suporte; flumazenil não é rotina",
    texto: "Vias aéreas, ventilação e observação resolvem a maioria. Flumazenil pode precipitar convulsões e arritmia em usuário crônico de BZD ou com coingestão pró-convulsivante (tricíclico, tramadol, bupropiona)."
  },
  alarmes: [
    "Depressão respiratória ou Glasgow ≤ 8 (pensar em coingestão: álcool, opioide)",
    "Idoso, DPOC, apneia do sono, criança pequena",
    "QRS largo, arritmia, convulsão (coingestão de tricíclico ou outro tóxico)",
    "Intenção suicida",
    "Hipotermia, rabdomiólise, aspiração (imobilidade prolongada)"
  ],
  conduta: [
    "ABC: posicionar, aspirar, O₂; ventilar com bolsa-válvula-máscara se hipoventilação; IOT se não protege via aérea",
    "Glicemia capilar, ECG (QRS, QTc), temperatura",
    "Pesquisar coingestões: álcool, opioide (miose e bradipneia → naloxona), paracetamol (dosar 4 h), tricíclico",
    "Carvão ativado raramente indicado (benefício pequeno, risco de aspiração): só ingestão recente com coingestão grave e via aérea protegida",
    "Flumazenil apenas em: sedação iatrogênica por BZD (procedimento) ou ingestão acidental isolada em criança sem uso crônico, sem coingestão e com ECG normal",
    "Observar até acordado, deambulando e sem ataxia (em geral 4–6 h; mais em idoso e com drogas de longa ação)",
    "Notificação SINAN; avaliação de risco suicida se intencional (ver ficha Risco suicida)",
    "CIATox 0800 722 6001 se dúvida"
  ],
  exames: [
    "Glicemia capilar, ECG, gasometria venosa se sonolência importante",
    "Eletrólitos, creatinina, CK se imobilização prolongada",
    "Paracetamol sérico 4 h após a ingestão (coingestão frequente)",
    "Etanol sérico se disponível; beta-hCG em idade fértil",
    "Teste de BZD na urina tem pouca utilidade (não detecta todos, permanece positivo por dias)"
  ],
  diferenciais: [
    "Intoxicação por opioide (miose, bradipneia; responde à naloxona)",
    "Intoxicação alcoólica, barbitúricos, antipsicóticos, anticonvulsivantes",
    "Hipoglicemia, TCE, AVC, encefalopatia, estado pós-ictal"
  ],
  tratamento: [
    { droga: "Suporte ventilatório", linha: "l1", dose: "O₂ para SpO₂ ≥ 94%; ventilação assistida se hipoventilação; IOT se Glasgow ≤ 8 sem proteção de via aérea", via: "—", intervalo: "—", duracao: "Até despertar", monitorizacao: "SpO₂, FR, capnografia", contraindicacoes: "—", ajustes: "Decúbito lateral se sonolento" },
    { droga: "Flumazenil 0,1 mg/mL (ampola 5 mL = 0,5 mg)", linha: "alt", dose: "Adulto: 0,2 mg em 30 s; se necessário 0,3 mg e depois 0,5 mg a cada 1 min (total habitual 1 mg; máx. 3 mg). Criança: 0,01 mg/kg (máx. 0,2 mg/dose), repetir a cada 1 min até total de 0,05 mg/kg ou 1 mg", via: "IV lento", intervalo: "A cada 1 min, titulado", duracao: "Efeito 30–60 min: ressedação é comum", monitorizacao: "Convulsão, arritmia, agitação; observar ≥ 2 h após a última dose", contraindicacoes: "Uso crônico de BZD, epilepsia, coingestão de tricíclico ou pró-convulsivante, QRS > 100 ms, TCE com hipertensão intracraniana, ingestão desconhecida", ajustes: "Indicado só em reversão de sedação de procedimento ou intoxicação isolada acidental em criança sem uso crônico. Não é ferramenta diagnóstica" },
    { droga: "Diazepam / midazolam (convulsão precipitada por flumazenil)", linha: "adj", dose: "Pode exigir doses altas; considerar fenobarbital ou propofol", via: "IV", intervalo: "—", duracao: "—", monitorizacao: "Via aérea", contraindicacoes: "—", ajustes: "Ver ficha Convulsão" },
    { droga: "Flumazenil de rotina em intoxicação desconhecida", linha: "ci", dose: "Não usar", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Risco de convulsão refratária e arritmia", ajustes: "—" }
  ],
  prescricao: {
    hospitalar: "INTOXICAÇÃO POR BENZODIAZEPÍNICO (peso: ___ kg)\n1. Dieta zero até acordar.\n2. Decúbito lateral, cabeceira 30°; monitor, SpO₂ contínua; grades elevadas (risco de queda).\n3. O₂ por cateter nasal se SpO₂ < 94%.\n4. Acesso venoso; SF 0,9% 500 mL IV se hipotensão (criança 20 mL/kg).\n5. Glicemia capilar agora; ECG agora.\n6. Paracetamol sérico 4 h após a ingestão; eletrólitos, CK.\n7. Flumazenil SOMENTE se sedação iatrogênica ou ingestão acidental isolada em criança sem uso crônico e ECG normal: 0,2 mg IV em 30 s, repetir 0,3 mg e 0,5 mg a cada 1 min até resposta (máx. 1 mg; criança 0,01 mg/kg/dose, máx. 0,2 mg/dose, total 0,05 mg/kg ou 1 mg). Observar ≥ 2 h após.\n8. Controles: Glasgow, FR, SpO₂ de 1/1 h até despertar.\n9. Notificação SINAN (intoxicação exógena); avaliação de risco suicida se intencional."
  },
  encaminhar: [
    "Psiquiatria/CAPS: tentativa de suicídio ou uso abusivo",
    "UTI: necessidade de IOT ou coingestão grave",
    "UBS: revisão da prescrição de BZD e plano de desmame em uso crônico"
  ],
  orientacoesRetorno: [
    "Não dirigir nem operar máquinas nas próximas 24 h",
    "Não misturar calmantes com álcool ou remédios para dor fortes",
    "Uso crônico não deve ser interrompido de repente (pode causar abstinência e convulsão); reduzir com orientação médica",
    "Guardar remédios trancados e longe de crianças",
    "Voltar se sonolência voltar a piorar, falta de ar ou ideias de se machucar"
  ],
  fontes: [
    "Goldfrank's Toxicologic Emergencies, 11ª ed. (2019) — benzodiazepinas e flumazenil",
    "AHA — Focused update on ACLS: toxicology (2023) — flumazenil não recomendado de rotina",
    "Bula Flumazenil (ANVISA)",
    "Ministério da Saúde — RENACIAT / Disque-Intoxicação 0800 722 6001"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
