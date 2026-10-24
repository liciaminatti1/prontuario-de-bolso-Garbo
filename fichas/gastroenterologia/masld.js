// Doença hepática esteatótica associada à disfunção metabólica (MASLD)
registrarFicha({
  id: "masld",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Esteatose hepática metabólica (MASLD)",
  resumo: "Esteatose hepática (imagem ou biópsia) com pelo menos um fator cardiometabólico, sem outra causa. Estratificação de fibrose pelo FIB-4 e tratamento centrado em perda de peso.",
  palavrasChave: "esteatose figado gordo masld nafld dhgna fib-4 elastografia fibrose cirrose transaminases tgp",
  critico: {
    tempo: "Calcule o FIB-4",
    texto: "O risco está na fibrose, não na gordura. FIB-4 < 1,3: baixo risco (repetir em 2–3 anos); ≥ 1,3: elastografia; > 2,67: hepatologia."
  },
  alarmes: [
    "Sinais de cirrose: plaquetas < 150 mil, ascite, icterícia, aranhas vasculares, encefalopatia",
    "FIB-4 > 2,67 ou elastografia ≥ 12 kPa",
    "Transaminases > 5× o limite (investigar outras causas)",
    "Consumo de álcool > 140 g/semana (mulher) ou > 210 g/semana (homem): reclassificar (MetALD/álcool)"
  ],
  condutaInicial: [
    "Confirmar esteatose (USG) e fator cardiometabólico (IMC/cintura, glicemia, PA, TG, HDL)",
    "Excluir outras causas: álcool, hepatites B e C, medicamentos (amiodarona, metotrexato, corticoide)",
    "Calcular FIB-4 (idade, TGO, TGP, plaquetas) — aba Calculadoras",
    "Perda de peso: 5% reduz gordura; 7–10% melhora inflamação e fibrose",
    "Tratar DM2 (preferir agonista GLP-1/iSGLT2), dislipidemia (estatina é segura) e HAS"
  ],
  fataisExcluir: [
    "Cirrose não diagnosticada",
    "Carcinoma hepatocelular (rastrear em cirróticos)",
    "Hepatites virais",
    "Hepatopatia alcoólica"
  ],
  proximaDecisao: "FIB-4 < 1,3 → manejo na UBS e repetir em 2–3 anos. 1,3–2,67 → elastografia. > 2,67 ou elastografia ≥ 8 kPa com dúvida → hepatologia.",
  clinica: {
    anamnese: [
      "Consumo de álcool (doses/semana)",
      "DM2, obesidade, HAS, dislipidemia, apneia do sono, SOP",
      "Medicamentos hepatotóxicos, fitoterápicos",
      "Fatores de risco para hepatites virais"
    ],
    exameFisico: ["IMC, circunferência abdominal", "Hepatomegalia, esplenomegalia", "Estigmas de cirrose (eritema palmar, aranhas, ginecomastia, ascite)"],
    diferenciais: [
      { dx: "Hepatopatia alcoólica", pista: "Consumo elevado, TGO/TGP > 2, GGT alta" },
      { dx: "Hepatites B ou C", pista: "Sorologias positivas" },
      { dx: "Hepatite autoimune", pista: "Mulher, FAN/anti-músculo liso, globulinas altas" },
      { dx: "Hemocromatose / Wilson", pista: "Ferritina e saturação altas / jovem, ceruloplasmina baixa" }
    ],
    gravidade: [
      "FIB-4 < 1,3 baixo risco · 1,3–2,67 indeterminado · > 2,67 alto risco de fibrose avançada (≥ 65 anos: corte inferior 2,0)",
      "Elastografia: < 8 kPa baixo risco · 8–12 intermediário · > 12 alto"
    ]
  },
  exames: [
    { nome: "Avaliação inicial", pedido: "TGO, TGP, GGT, fosfatase alcalina, bilirrubinas, albumina, TP/INR, hemograma com plaquetas, glicemia/HbA1c, perfil lipídico, HBsAg, anti-HCV, ferritina e saturação de transferrina.", porQue: "Excluir outras causas, calcular FIB-4 e avaliar função.", esperar: "Transaminases normais ou pouco elevadas (TGP > TGO).", interpretacao: "TGO/TGP > 2 sugere álcool; plaquetas baixas sugerem fibrose avançada.", limitacoes: "Transaminases normais não excluem fibrose." },
    { nome: "USG de abdome", pedido: "Ultrassonografia de abdome superior.", porQue: "Esteatose, sinais de hepatopatia crônica, nódulos.", esperar: "Fígado hiperecogênico.", interpretacao: "Sinais de hipertensão portal → hepatologia.", limitacoes: "Pouco sensível para esteatose leve; não avalia fibrose." },
    { nome: "Elastografia hepática", pedido: "Elastografia hepática transitória (FibroScan) ou por ARFI — se FIB-4 ≥ 1,3.", porQue: "Estimar fibrose.", esperar: "—", interpretacao: "≥ 8 kPa: risco de fibrose significativa; ≥ 12–15 kPa: fibrose avançada provável.", limitacoes: "Disponibilidade; obesidade grave dificulta." }
  ],
  tratamento: [
    { droga: "Mudança de estilo de vida", linha: "l1", dose: "Perda de 7–10% do peso; dieta mediterrânea; 150–300 min/semana de atividade; evitar álcool e bebidas açucaradas", via: "—", intervalo: "—", duracao: "Contínuo", monitorizacao: "Peso, transaminases, FIB-4", contraindicacoes: "—", ajustes: "Perda gradual (0,5–1 kg/semana)" },
    { droga: "Agonista GLP-1 (semaglutida) / tirzepatida", linha: "alt", dose: "Conforme ficha de obesidade/DM2", via: "SC", intervalo: "Semanal", duracao: "Contínuo", monitorizacao: "Efeitos gastrointestinais", contraindicacoes: "Carcinoma medular de tireoide/NEM2", ajustes: "Preferir em DM2 ou obesidade com MASLD" },
    { droga: "Pioglitazona", linha: "alt", dose: "15–30 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Peso, edema", contraindicacoes: "IC, câncer de bexiga, osteoporose", ajustes: "Opção em DM2 com esteato-hepatite (decisão especializada)" },
    { droga: "Estatina", linha: "l1", dose: "Conforme risco cardiovascular", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Transaminases basais", contraindicacoes: "Cirrose descompensada", ajustes: "Segura em MASLD; principal causa de morte é cardiovascular" }
  ],
  prescricao: {
    ambulatorial: "PLANO TERAPÊUTICO\n1. Meta: perder 7 a 10% do peso (cerca de ___ kg) em 6–12 meses.\n2. Alimentação tipo mediterrânea: verduras, legumes, frutas, grãos integrais, azeite, peixes; evitar ultraprocessados, frituras, refrigerantes e sucos.\n3. Atividade física: 150 a 300 minutos por semana.\n4. Evitar bebida alcoólica.\n5. Não usar chás, suplementos ou anabolizantes sem orientação.\n\nExames de controle: transaminases e plaquetas em 6–12 meses; FIB-4 a cada 2–3 anos se baixo risco."
  },
  orientacoesRetorno: [
    "A gordura no fígado melhora com perda de peso e atividade física",
    "Procurar atendimento se a pele ou os olhos ficarem amarelos, barriga inchar, fezes pretas ou confusão",
    "Retorno em 3–6 meses para acompanhar peso e exames"
  ],
  destino: {
    agora: ["Excluir outras causas, FIB-4 e plano de perda de peso"],
    reavaliar: ["FIB-4 a cada 2–3 anos (baixo risco) ou anual (DM2)"],
    alta: ["Seguimento na UBS"],
    observacao: ["—"],
    internacao: ["Descompensação de cirrose"],
    transferencia: ["Hepatologia/gastroenterologia: FIB-4 > 2,67, elastografia alterada, sinais de cirrose, causa incerta"]
  },
  fontes: [
    "EASL–EASD–EASO 2024 Clinical Practice Guidelines on MASLD",
    "AASLD 2023 Practice Guidance on NAFLD/MASLD",
    "SBH — Posicionamento sobre doença hepática esteatótica (2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
