// Gasometria arterial e distúrbios ácido-base
registrarFicha({
  id: "gasometria-acido-base",
  especialidade: "referencia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Gasometria e distúrbios ácido-base",
  resumo: "Roteiro em passos para interpretar a gasometria: oxigenação, distúrbio primário, compensação esperada, ânion gap (corrigido pela albumina), delta-delta e gap osmolar.",
  palavrasChave: "gasometria arterial venosa acido base acidose alcalose metabolica respiratoria anion gap delta delta winter compensacao gap osmolar hiato anionico pao2 fio2 lactato",
  alarmes: [
    "pH < 7,1 ou > 7,6",
    "PaCO₂ subindo com pH < 7,25 (falência ventilatória)",
    "Ânion gap elevado com gap osmolar elevado (metanol, etilenoglicol): antídoto e diálise",
    "Lactato ≥ 4 mmol/L (hipoperfusão grave/choque)",
    "PaO₂/FiO₂ < 200 ou PaO₂ < 60 mmHg com O₂",
    "Acidose metabólica grave com K normal ou baixo (déficit corporal de K: repor antes de corrigir)"
  ],
  conduta: [
    "1. Oxigenação: PaO₂, SpO₂, PaO₂/FiO₂ (normal ~400–500; < 300 alterado). Gradiente A-a = (FiO₂ × 713 − PaCO₂/0,8) − PaO₂",
    "2. pH: < 7,35 acidemia; > 7,45 alcalemia (normal 7,35–7,45; PaCO₂ 35–45 mmHg; HCO₃ 22–26 mEq/L)",
    "3. Distúrbio primário: acidemia com HCO₃ baixo = acidose metabólica; com PaCO₂ alta = acidose respiratória. Alcalemia com HCO₃ alto = alcalose metabólica; com PaCO₂ baixa = alcalose respiratória",
    "4. Compensação esperada (tabela): se o valor real difere do esperado, há distúrbio misto",
    "5. Ânion gap = Na − (Cl + HCO₃); normal em torno de 8–12 mEq/L (conferir referência do laboratório). Corrigir: AG + 2,5 × (4,0 − albumina em g/dL)",
    "6. AG elevado → delta-delta = (AG − 12) ÷ (24 − HCO₃): < 1 = acidose de AG normal associada; 1–2 = AG elevado puro; > 2 = alcalose metabólica associada",
    "7. AG elevado sem causa clara → gap osmolar = osmolalidade medida − calculada [2 × Na + glicose/18 + ureia/6]; > 10 sugere álcoois tóxicos",
    "8. AG normal (hiperclorêmica) → perdas GI (diarreia), acidose tubular renal, SF em excesso; AG urinário (Na + K − Cl): negativo = perda GI; positivo = renal",
    "9. Correlacionar com a clínica e tratar a causa"
  ],
  exames: [
    "Gasometria arterial (oxigenação) ou venosa (pH, HCO₃, lactato; PvCO₂ ~4–6 mmHg acima da arterial)",
    "Na, K, Cl, albumina, glicose, ureia, creatinina, lactato, cetonemia",
    "Osmolalidade sérica medida se suspeita de álcool tóxico",
    "Urina: Na, K, Cl (AG urinário; cloro urinário na alcalose metabólica)"
  ],
  diferenciais: [
    "Acidose de AG elevado (GOLD MARK): glicóis (etileno/propilenoglicol), oxoprolina (paracetamol crônico), L-lactato, D-lactato, metanol, aspirina (salicilato), insuficiência renal, cetoacidose (diabética, alcoólica, jejum)",
    "Acidose de AG normal: diarreia, fístulas, acidose tubular renal, infusão de SF 0,9% em grande volume, acetazolamida, ureterossigmoidostomia",
    "Alcalose metabólica: cloro urinário < 20 (vômitos, SNG, diurético prévio — responde a SF) x > 20 (hiperaldosteronismo, diurético em uso, hipocalemia grave)",
    "Acidose respiratória: DPOC, depressão do SNC (opioides, sedativos), neuromuscular, obesidade-hipoventilação",
    "Alcalose respiratória: ansiedade, dor, hipoxemia, TEP, sepse precoce, gestação, intoxicação por salicilato, hepatopatia"
  ],
  tabelas: [
    {
      titulo: "Compensação esperada",
      colunas: ["Distúrbio primário", "Resposta esperada"],
      linhas: [
        ["Acidose metabólica", "PaCO₂ = 1,5 × HCO₃ + 8 (± 2) — fórmula de Winter"],
        ["Alcalose metabólica", "PaCO₂ sobe ~0,7 mmHg por 1 mEq/L de HCO₃ acima de 24 (± 2)"],
        ["Acidose respiratória aguda", "HCO₃ sobe 1 mEq/L por 10 mmHg de PaCO₂ acima de 40"],
        ["Acidose respiratória crônica", "HCO₃ sobe 3,5–4 mEq/L por 10 mmHg de PaCO₂"],
        ["Alcalose respiratória aguda", "HCO₃ cai 2 mEq/L por 10 mmHg de PaCO₂ abaixo de 40"],
        ["Alcalose respiratória crônica", "HCO₃ cai 4–5 mEq/L por 10 mmHg de PaCO₂"]
      ],
      nota: "PaCO₂ real acima do esperado = acidose respiratória associada; abaixo = alcalose respiratória associada. A compensação nunca normaliza totalmente o pH (exceto alcalose respiratória crônica)."
    },
    {
      titulo: "Exemplo",
      colunas: ["Dado", "Leitura"],
      linhas: [
        ["pH 7,20 · PaCO₂ 24 · HCO₃ 10 · Na 140 · Cl 104 · albumina 4", "Acidose metabólica"],
        ["Winter: 1,5 × 10 + 8 = 23 (21–25)", "Compensação adequada (PaCO₂ 24)"],
        ["AG = 140 − (104 + 10) = 26", "AG elevado"],
        ["Delta-delta = (26 − 12) ÷ (24 − 10) = 1,0", "Acidose de AG elevado pura (ex.: CAD, lática)"]
      ]
    }
  ],
  prescricao: {
    hospitalar: "SOLICITAÇÃO\n1. Gasometria arterial com lactato (anotar FiO₂/dispositivo e temperatura).\n2. Sódio, potássio, cloro, albumina, glicose, ureia, creatinina, cetonemia (beta-hidroxibutirato).\n3. Osmolalidade sérica medida (se ânion gap elevado sem causa clara ou suspeita de intoxicação).\n4. Urina: sódio, potássio e cloro em amostra isolada."
  },
  orientacoesRetorno: [
    "Explicar ao paciente a causa identificada (ex.: desidratação, diabetes descompensado, problema respiratório) e os sinais para voltar: falta de ar, sonolência, vômitos persistentes, confusão"
  ],
  encaminhar: [
    "Nefrologia: acidose tubular renal ou acidose metabólica crônica da DRC",
    "Toxicologia (CIATox): suspeita de metanol, etilenoglicol, salicilato"
  ],
  fontes: [
    "Berend K, de Vries APJ, Gans ROB — Physiological approach to assessment of acid–base disturbances, N Engl J Med (2014)",
    "Kraut JA, Madias NE — Metabolic acidosis: pathophysiology, diagnosis and management, Nat Rev Nephrol (2010)",
    "Seifter JL — Integration of acid–base and electrolyte disorders, N Engl J Med (2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
