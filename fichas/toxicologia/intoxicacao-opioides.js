// Intoxicação por opioides
registrarFicha({
  id: "intoxicacao-opioides",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Intoxicação por opioides (naloxona)",
  resumo: "Depressão respiratória, rebaixamento de consciência e miose após opioide (morfina, codeína, tramadol, metadona, fentanil, oxicodona, heroína). Prioridade é ventilar; naloxona titulada para restaurar a respiração, não para acordar.",
  palavrasChave: "opioide opiaceo overdose intoxicacao morfina codeina tramadol metadona fentanil oxicodona heroina naloxona narcan depressao respiratoria miose bradipneia body packer",
  critico: {
    tempo: "Ventilar e dar naloxona",
    texto: "FR < 12 ou SpO₂ baixa: bolsa-válvula-máscara com O₂ e naloxona IV titulada (0,04–0,4 mg) até FR ≥ 12. Sem pulso: RCP padrão (naloxona não substitui compressões e ventilação)."
  },
  alarmes: [
    "Apneia, FR < 8, SpO₂ < 90%, cianose",
    "Parada cardiorrespiratória",
    "Recorrência da sedação após naloxona (metadona, liberação prolongada, fentanil)",
    "Edema pulmonar após reversão",
    "Convulsão (tramadol, meperidina) ou QRS/QT alargados (metadona, loperamida)",
    "Criança com qualquer exposição a metadona, buprenorfina ou adesivo de fentanil",
    "Body packer/stuffer (cápsulas ingeridas)"
  ],
  condutaInicial: [
    "Abrir via aérea, ventilar com bolsa-válvula-máscara e O₂ antes e durante a naloxona",
    "Naloxona IV 0,04 mg a cada 2 min (doses maiores — 0,4 mg — se apneia ou peri-PCR), até FR ≥ 12 e SpO₂ adequada",
    "Sem acesso: naloxona 0,4 mg IM (ou intranasal, se disponível)",
    "Criança: 0,1 mg/kg (máx. 2 mg) para reversão completa em apneia; doses menores (0,001–0,005 mg/kg) se só depressão leve ou uso crônico",
    "Glicemia capilar; ECG; buscar coingestões (paracetamol, BZD, álcool)",
    "Recorrência: infusão contínua de naloxona (2/3 da dose eficaz por hora)",
    "PCR: seguir ACLS/PALS; naloxona pode ser dada sem atrasar RCP",
    "Notificar intoxicação exógena (SINAN); contatar CIATox 0800 722 6001"
  ],
  fataisExcluir: [
    "Hipoglicemia",
    "TCE, AVC, hipóxia de outra causa",
    "Coingestão (BZD, álcool, paracetamol, tricíclico)",
    "Síndrome serotoninérgica (tramadol, meperidina com ISRS)",
    "Lesão pulmonar aguda / edema pulmonar não cardiogênico"
  ],
  proximaDecisao: "Respondeu a dose única de naloxona e opioide de ação curta → observar 4–6 h após a última dose. Metadona, liberação prolongada, adesivo ou infusão de naloxona → internação com monitorização por ≥ 12–24 h (até 24–48 h na metadona). Sem resposta a 10 mg → reconsiderar o diagnóstico.",
  clinica: {
    anamnese: [
      "Qual opioide, dose, via, horário, liberação prolongada, adesivo",
      "Uso crônico (risco de abstinência precipitada), tolerância",
      "Coingestões, intenção (tentativa de suicídio)",
      "Criança: acesso a medicamentos de familiares (metadona, codeína, tramadol)"
    ],
    exameFisico: [
      "FR e profundidade, SpO₂, nível de consciência, pupilas mióticas (podem estar normais com meperidina, tramadol ou hipóxia)",
      "Sinais de uso IV, adesivos na pele (retirar)",
      "Crepitações (edema pulmonar, aspiração), hipotermia, rabdomiólise (imobilização)"
    ],
    diferenciais: [
      { dx: "Intoxicação por BZD / Z-drogas", pista: "Sedação com FR relativamente preservada; não responde à naloxona" },
      { dx: "Clonidina, agonistas alfa-2", pista: "Miose, bradicardia, hipotensão; resposta parcial à naloxona" },
      { dx: "Organofosforado", pista: "Miose com secreções, bradicardia, fasciculações" },
      { dx: "AVC de ponte, TCE", pista: "Miose puntiforme com sinais focais" },
      { dx: "Hipoglicemia", pista: "Glicemia capilar" }
    ],
    gravidade: [
      "Grave: apneia, FR < 8, SpO₂ < 90%, Glasgow ≤ 8, edema pulmonar, PCR",
      "Tríade clássica: miose + depressão respiratória + rebaixamento"
    ]
  },
  exames: [
    {
      nome: "Avaliação geral",
      pedido: "Glicemia capilar, gasometria (venosa ou arterial se hipoventilação), eletrólitos, creatinina, CK, ECG com QTc, paracetamol sérico 4 h após ingestão.",
      porQue: "Hipercapnia, rabdomiólise, QT (metadona), coingestão.",
      esperar: "Acidose respiratória.",
      interpretacao: "QTc > 500 ms com metadona: monitor contínuo, corrigir K e Mg.",
      limitacoes: "—"
    },
    {
      nome: "Imagem",
      pedido: "RX de tórax se hipóxia persistente após reversão; RX/TC de abdome se suspeita de body packer.",
      porQue: "Edema pulmonar, aspiração, cápsulas.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Triagem de opioides na urina não detecta fentanil, metadona e tramadol em muitos kits."
    }
  ],
  tratamento: [
    {
      droga: "Naloxona 0,4 mg/mL",
      linha: "l1",
      dose: "Adulto: 0,04–0,4 mg IV (titular); apneia/peri-PCR 0,4–2 mg; repetir até 10 mg. Criança: 0,1 mg/kg (máx. 2 mg/dose) se apneia; 0,001–0,005 mg/kg se depressão leve",
      via: "IV (preferida), IM, IO, SC, intranasal, endotraqueal",
      intervalo: "A cada 2–3 min",
      duracao: "Efeito 30–90 min (menor que o de muitos opioides)",
      monitorizacao: "FR, SpO₂, sinais de abstinência (agitação, vômitos), edema pulmonar",
      contraindicacoes: "Nenhuma em risco de vida",
      ajustes: "Diluir 1 ampola (0,4 mg) em 9 mL de SF 0,9% = 0,04 mg/mL. Usuário crônico: doses pequenas para evitar abstinência precipitada, vômitos e aspiração"
    },
    {
      droga: "Naloxona em infusão contínua",
      linha: "l1",
      dose: "2/3 da dose que reverteu, por hora (ex.: 0,4 mg eficaz → 0,27 mg/h). Criança: mesmo princípio",
      via: "IV em bomba",
      intervalo: "Contínuo",
      duracao: "Até 12–24 h, desmamar e observar",
      monitorizacao: "FR e SpO₂ contínuas; UTI ou sala de emergência",
      contraindicacoes: "—",
      ajustes: "Ex.: naloxona 2 mg (5 ampolas) em 500 mL de SF 0,9% = 4 mcg/mL; 0,27 mg/h ≈ 67 mL/h. Rebolus de metade da dose se recorrência"
    },
    {
      droga: "Ventilação / intubação",
      linha: "l1",
      dose: "Bolsa-válvula-máscara com O₂ 15 L/min; IOT se não responde ou aspiração",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Capnografia",
      contraindicacoes: "—",
      ajustes: "Ver ficha Sequência rápida de intubação"
    },
    {
      droga: "Carvão ativado",
      linha: "adj",
      dose: "1 g/kg (máx. 50 g)",
      via: "VO/SNG",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Aspiração",
      contraindicacoes: "Via aérea não protegida, rebaixamento",
      ajustes: "Apenas ingestão recente (≤ 1 h) de formulação oral com via aérea protegida"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "1–2 mEq/kg IV em bolus",
      via: "IV",
      intervalo: "Repetir se QRS > 100 ms",
      duracao: "—",
      monitorizacao: "Gasometria, K",
      contraindicacoes: "—",
      ajustes: "QRS alargado por tramadol em dose alta ou loperamida (discutir com CIATox)"
    }
  ],
  destino: {
    agora: ["Ventilar, naloxona titulada, glicemia, ECG"],
    reavaliar: ["FR e SpO₂ de 15/15 min na 1ª hora após cada dose de naloxona"],
    alta: ["Opioide de ação curta: ≥ 4–6 h após a última naloxona, acordado, FR e SpO₂ normais em ar ambiente, deambulando, sem coingestão. Avaliação de risco suicida se intencional; oferecer tratamento para dependência (CAPS AD)"],
    observacao: ["Mínimo 4–6 h; 12–24 h se ação prolongada"],
    internacao: ["Infusão de naloxona, metadona, adesivo de fentanil, edema pulmonar, aspiração, body packer, criança com opioide de ação longa"],
    transferencia: ["Sem leito monitorizado: transferir com infusão de naloxona e médico"]
  },
  prescricao: {
    hospitalar: "INTOXICAÇÃO POR OPIOIDE (peso: ___ kg)\n1. Dieta zero até acordar e proteger via aérea.\n2. Monitor, SpO₂ contínua, capnografia se disponível; decúbito lateral; material de IOT.\n3. O₂ por máscara/bolsa-válvula-máscara para SpO₂ ≥ 94%.\n4. Naloxona 0,4 mg/mL: diluir 1 ampola em 9 mL de SF 0,9% (0,04 mg/mL). Fazer 1 mL (0,04 mg) IV a cada 2 min até FR ≥ 12 irpm. Apneia: 0,4 mg IV direto. Sem acesso: 0,4 mg IM.\n   Criança: 0,1 mg/kg IV/IM/IO (máx. 2 mg/dose) se apneia; 0,001–0,005 mg/kg se só depressão leve.\n5. Se recorrência: naloxona 2 mg (5 ampolas) + SF 0,9% 500 mL (4 mcg/mL) IV em bomba a ___ mL/h (2/3 da dose eficaz por hora).\n6. Glicemia capilar agora e de 4/4 h.\n7. ECG agora (QTc, QRS); repetir se metadona/tramadol.\n8. Paracetamol sérico 4 h após ingestão; eletrólitos, CK, creatinina.\n9. Retirar adesivos de fentanil e lavar a pele com água.\n10. Controles: FR, SpO₂ e Glasgow de 15/15 min por 1 h após cada dose, depois de 1/1 h por 4–6 h (ou 24 h se ação longa).\n11. Notificar SINAN (intoxicação exógena); se intencional, avaliação de risco suicida.",
    ambulatorial: "ALTA\n1. Não usar o opioide junto com álcool, calmantes ou remédios para dormir.\n2. Encaminhamento ao CAPS AD (dependência) ou revisão da dose com o médico assistente (uso para dor).\n3. Remédios guardados fora do alcance de crianças, em local trancado."
  },
  orientacoesRetorno: [
    "O efeito do remédio de reversão (naloxona) passa antes do efeito do opioide: não usar mais nada hoje",
    "Não usar sozinho; não misturar com álcool ou calmantes",
    "Família: se a pessoa estiver muito sonolenta, respirando devagar ou roncando de forma diferente, chamar o SAMU 192 e deitá-la de lado",
    "Guardar remédios trancados e longe de crianças (metadona, codeína, tramadol podem matar uma criança com 1 comprimido)",
    "Procurar o CAPS AD para tratamento da dependência"
  ],
  fontes: [
    "AHA — Focused update on adult advanced cardiovascular life support: toxicology / opioid-associated emergencies (2023) e Diretrizes de RCP e ACE (2025)",
    "AHA — PALS (2020–2025): naloxona 0,1 mg/kg, máx. 2 mg",
    "Ministério da Saúde/ANVISA — Rede Nacional de Centros de Informação e Assistência Toxicológica (RENACIAT); Disque-Intoxicação 0800 722 6001",
    "Goldfrank's Toxicologic Emergencies, 11ª ed. (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
