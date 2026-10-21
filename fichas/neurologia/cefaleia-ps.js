// Cefaleia no PS
registrarFicha({
  id: "cefaleia-ps",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Cefaleia no PS (sinais de alarme)",
  resumo: "Separar cefaleia primária de cefaleia secundária grave: hemorragia subaracnóidea, meningite, hipertensão intracraniana, arterite, dissecção.",
  palavrasChave: "cefaleia dor de cabeca hsa hemorragia subaracnoidea meningite snoop enxaqueca puncao lombar arterite temporal",
  critico: {
    tempo: "Pior dor da vida = TC",
    texto: "Cefaleia súbita que atinge o máximo em < 1 min (thunderclap): TC sem contraste; se > 6 h ou TC negativa com alta suspeita, punção lombar."
  },
  alarmes: [
    "Início súbito, pior dor da vida (thunderclap)",
    "Febre, rigidez de nuca, petéquias",
    "Déficit neurológico, convulsão, alteração de consciência, papiledema",
    "Início após 50 anos, câncer, HIV/imunossupressão, gestação/puerpério",
    "Piora com Valsalva/decúbito, padrão progressivo, mudança do padrão habitual, trauma, anticoagulante"
  ],
  condutaInicial: [
    "Sinais vitais, glicemia, exame neurológico e fundo de olho",
    "Aplicar SNOOP10 / regra de Ottawa para HSA",
    "Sem alarmes e padrão primário conhecido: analgesia (dipirona + metoclopramida IV)",
    "Com alarmes: TC de crânio; se febre/rigidez → hemocultura, antibiótico e dexametasona sem esperar LCR",
    "> 50 anos com dor temporal/claudicação de mandíbula: VHS/PCR e corticoide se suspeita de arterite"
  ],
  fataisExcluir: [
    "Hemorragia subaracnóidea",
    "Meningite bacteriana",
    "Hemorragia intracraniana / tumor com efeito de massa",
    "Trombose venosa cerebral",
    "Dissecção carotídea ou vertebral",
    "Arterite de células gigantes (perda visual)",
    "Intoxicação por monóxido de carbono"
  ],
  proximaDecisao: "TC normal < 6 h do início em thunderclap com exame normal → HSA praticamente excluída. > 6 h ou dúvida → punção lombar (xantocromia) ou angio-TC.",
  clinica: {
    anamnese: [
      "Velocidade de instalação, intensidade, localização, duração",
      "Cefaleia prévia semelhante? Mudança de padrão?",
      "Sintomas associados: febre, vômitos, rigidez, déficit, alteração visual, convulsão",
      "Contexto: esforço/relação sexual (HSA), trauma, gestação/puerpério (TVC, pré-eclâmpsia), anticoagulante, imunossupressão",
      "Uso excessivo de analgésico; exposição a CO (vários na casa com cefaleia)"
    ],
    exameFisico: [
      "PA (crise hipertensiva / pré-eclâmpsia), temperatura",
      "Rigidez de nuca, Kernig, Brudzinski",
      "Exame neurológico completo, pupilas, campos visuais",
      "Fundo de olho (papiledema)",
      "Palpação de artérias temporais; Horner (dissecção)"
    ],
    diferenciais: [
      { dx: "Enxaqueca", pista: "Recorrente, pulsátil, náusea, fotofobia, padrão conhecido" },
      { dx: "Cefaleia tensional", pista: "Bilateral, em aperto, leve a moderada" },
      { dx: "Cefaleia em salvas", pista: "Orbitária, unilateral, lacrimejamento, 15–180 min" },
      { dx: "HSA", pista: "Súbita, máxima em segundos, rigidez" },
      { dx: "Meningite", pista: "Febre, rigidez, alteração de consciência" },
      { dx: "Sinusite", pista: "Rinorreia purulenta, dor facial" }
    ],
    gravidade: [
      "Regra de Ottawa para HSA (alerta, > 15 anos, dor máxima em 1 h): investigar se idade ≥ 40, dor/rigidez cervical, perda de consciência testemunhada, início com esforço, thunderclap, limitação de flexão do pescoço",
      "Qualquer déficit neurológico ou rebaixamento: imagem urgente"
    ]
  },
  exames: [
    {
      nome: "TC de crânio sem contraste",
      pedido: "TC de crânio sem contraste — URGENTE. Informar hora de início da cefaleia.",
      porQue: "HSA, hemorragia, massa, hidrocefalia.",
      esperar: "—",
      interpretacao: "Sensibilidade para HSA ~100% se feita < 6 h do início, em tomógrafo moderno e com leitura experiente.",
      limitacoes: "Sensibilidade cai após 6 h. Não detecta TVC (pedir angio-TC/venoTC) nem dissecção (angio-TC cervical)."
    },
    {
      nome: "Punção lombar",
      pedido: "Líquor: pressão de abertura, celularidade, proteína, glicose (com glicemia), Gram, cultura, xantocromia (se HSA, ≥ 12 h do início).",
      porQue: "HSA com TC negativa > 6 h; meningite.",
      esperar: "—",
      interpretacao: "Xantocromia → HSA. Pleocitose neutrofílica, glicose baixa → meningite bacteriana.",
      limitacoes: "TC antes se déficit, papiledema, rebaixamento, imunossupressão ou convulsão."
    },
    {
      nome: "VHS e PCR",
      pedido: "VHS e proteína C reativa.",
      porQue: "Suspeita de arterite de células gigantes (> 50 anos).",
      esperar: "VHS > 50 mm/h.",
      interpretacao: "Elevados + clínica → prednisona e biópsia/USG de temporal.",
      limitacoes: "Normais não excluem totalmente."
    },
    {
      nome: "Outros conforme suspeita",
      pedido: "Angio-TC arterial/venosa; carboxi-hemoglobina; hemoculturas; proteinúria/plaquetas/transaminases em gestante.",
      porQue: "TVC, dissecção, CO, pré-eclâmpsia.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "1 g",
      via: "IV",
      intervalo: "Dose única (até 6/6h)",
      duracao: "—",
      monitorizacao: "PA (hipotensão na infusão rápida)",
      contraindicacoes: "Alergia, discrasia sanguínea",
      ajustes: "Cefaleia primária no PS. Diluir 1 g (2 mL) em 10–20 mL de AD ou SF e injetar em 3–5 min, ou em 100 mL SF em 15 min"
    },
    {
      droga: "Metoclopramida",
      linha: "l1",
      dose: "10 mg",
      via: "IV lento",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Acatisia, distonia",
      contraindicacoes: "Parkinson, feocromocitoma",
      ajustes: "Eficaz como analgésico na enxaqueca. Infundir em 15 min (diluída em 50–100 mL SF) reduz acatisia. Acatisia: difenidramina 25 mg IV (ou prometazina 25 mg IM)"
    },
    {
      droga: "Cetoprofeno",
      linha: "alt",
      dose: "100 mg (em 100 mL de SF em 20 min)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Úlcera, DRC, gestação 3º tri, anticoagulação",
      ajustes: "—"
    },
    {
      droga: "Dexametasona",
      linha: "adj",
      dose: "10 mg",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Reduz recorrência da enxaqueca nas 72 h seguintes; não alivia a dor aguda. Associar à analgesia, não usar isolada"
    },
    {
      droga: "Clorpromazina",
      linha: "alt",
      dose: "0,1 mg/kg (máx 25 mg)",
      via: "IV lento em 15–20 min, após 500 mL de SF",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Hipotensão, sedação",
      contraindicacoes: "Hipotensão, QT longo",
      ajustes: "Enxaqueca refratária"
    },
    {
      droga: "Meningite: ceftriaxona + dexametasona",
      linha: "l1",
      dose: "Ceftriaxona 2 g 12/12h + dexametasona 0,15 mg/kg (10 mg) 6/6h por 4 dias",
      via: "IV",
      intervalo: "Dexametasona antes ou junto da 1ª dose de antibiótico",
      duracao: "Conforme agente (7–21 dias)",
      monitorizacao: "Consciência, crises",
      contraindicacoes: "—",
      ajustes: "> 50 anos, etilista, gestante ou imunossuprimido: + ampicilina 2 g 4/4h (Listeria). Suspeita de herpes: + aciclovir 10 mg/kg 8/8h em 1 h. Notificação compulsória imediata; quimioprofilaxia de contatos íntimos (meningococo/Hib) conforme vigilância"
    },
    {
      droga: "Arterite de células gigantes: prednisona",
      linha: "l1",
      dose: "40–60 mg/dia (pulso de metilprednisolona se perda visual)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Longa, com desmame",
      monitorizacao: "Glicemia, PA",
      contraindicacoes: "—",
      ajustes: "Iniciar antes da biópsia"
    }
  ],
  destino: {
    agora: [
      "Excluir causa secundária grave antes de rotular como primária"
    ],
    reavaliar: [
      "Dor e neurológico 1 h após analgesia"
    ],
    alta: [
      "Padrão primário típico, exame normal, dor controlada",
      "Orientação sobre uso de analgésicos (evitar uso excessivo) e diário de cefaleia",
      "UBS para profilaxia se crises frequentes"
    ],
    observacao: [
      "Dor refratária com investigação negativa"
    ],
    internacao: [
      "Causa secundária confirmada, dor refratária incapacitante (estado de mal enxaquecoso > 72 h)"
    ],
    transferencia: [
      "HSA, hemorragia, massa ou hidrocefalia → neurocirurgia",
      "UBS: qualquer alarme → PS"
    ]
  },
  prescricao: {
    hospitalar: "PRESCRIÇÃO — SALA DE EMERGÊNCIA (CEFALEIA PRIMÁRIA / ENXAQUECA, ADULTO)\n1. SF 0,9% 500 mL IV em 30 min (se vômitos ou desidratação; obrigatório antes de clorpromazina).\n2. Dipirona 1 g (2 mL) + AD 8 mL IV lento em 5 min, agora.\n3. Metoclopramida 10 mg (2 mL) + SF 0,9% 50 mL IV em 15 min, agora.\n4. Cetoprofeno 100 mg + SF 0,9% 100 mL IV em 20 min, agora (se sem contraindicação a AINE).\n5. Dexametasona 10 mg IV, dose única (enxaqueca, para reduzir recorrência).\n6. Se acatisia ou distonia: difenidramina 25 mg IV lento (ou prometazina 25 mg IM).\n7. Refratária após 1 h: clorpromazina 0,1 mg/kg (máx 25 mg) + SF 0,9% 100 mL IV em 20–30 min, com PA a cada 15 min.\n8. Cuidados: sala com pouca luz, reavaliar dor e exame neurológico em 1 h.\n\nSUSPEITA DE MENINGITE BACTERIANA (não atrasar por TC ou LCR)\n1. Coletar 2 hemoculturas.\n2. Dexametasona 10 mg IV (0,15 mg/kg) 15–20 min antes ou junto do antibiótico, depois de 6 em 6 horas por 4 dias.\n3. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min de 12 em 12 horas.\n4. Se > 50 anos, etilista, gestante ou imunossuprimido: ampicilina 2 g + SF 0,9% 100 mL IV em 30 min de 4 em 4 horas.\n5. Se suspeita de encefalite herpética: aciclovir 10 mg/kg + SF 0,9% 250 mL IV em 1 h de 8 em 8 horas.\n6. Precaução para gotículas nas primeiras 24 h de antibiótico. Notificar.\n\nALTA (CEFALEIA PRIMÁRIA)\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 2 comprimidos no início da dor; repetir de 6 em 6 horas se necessário (máx 4 g/dia), no máximo 2 a 3 dias por semana.\n2. Metoclopramida 10 mg ------------------------------ 10 comprimidos\n   Tomar 1 comprimido até de 8 em 8 horas se náusea."
  },
  orientacoesRetorno: [
    "Anotar as crises em um diário (dia, duração, gatilhos, remédios usados)",
    "Analgésico em excesso (mais de 10–15 dias por mês) piora a dor de cabeça",
    "Voltar imediatamente se dor de cabeça súbita e muito forte, febre com rigidez de nuca ou manchas na pele, fraqueza, dormência, fala enrolada, confusão, convulsão, alteração da visão ou vômitos repetidos",
    "Procurar a UBS em até 2–4 semanas se crises frequentes, para avaliar tratamento preventivo"
  ],
  fontes: [
    "ACEP Clinical Policy: Critical issues in adult patients with acute headache (2019, reconfirmada em 2024)",
    "AHA/ASA — Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage (2023)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, capítulo Meningites (6ª ed., 2024)",
    "Perry JJ et al. Ottawa Subarachnoid Hemorrhage Rule (JAMA 2013)",
    "Do TP et al. SNOOP10 (Neurology 2019)",
    "SBCe — Consenso para o tratamento das crises de enxaqueca no PS"
  ],
  revisao: "2026-10-21",
  versao: "1.2"
});
