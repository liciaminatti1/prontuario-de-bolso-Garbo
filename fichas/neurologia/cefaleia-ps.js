// Cefaleia no PS
registrarFicha({
  id: "cefaleia-ps",
  especialidade: "neurologia",
  caminho: "ps",
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
      ajustes: "Cefaleia primária no PS"
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
      ajustes: "Eficaz como analgésico na enxaqueca. Acatisia: difenidramina 25 mg IV"
    },
    {
      droga: "Cetoprofeno",
      linha: "alt",
      dose: "100 mg",
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
      ajustes: "Reduz recorrência da enxaqueca nas 72 h seguintes"
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
      ajustes: "> 50 anos ou imunossuprimido: + ampicilina 2 g 4/4h (Listeria). Suspeita de herpes: + aciclovir 10 mg/kg 8/8h"
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
  fontes: [
    "ACEP Clinical Policy: Acute Headache (2019)",
    "Perry JJ et al. Ottawa Subarachnoid Hemorrhage Rule (JAMA 2013)",
    "Do TP et al. SNOOP10 (Neurology 2019)",
    "SBCe — Consenso para o tratamento das crises de enxaqueca no PS"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
