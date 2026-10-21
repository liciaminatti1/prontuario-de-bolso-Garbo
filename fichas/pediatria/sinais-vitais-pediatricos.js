// Sinais vitais pediátricos por faixa etária
registrarFicha({
  id: "sinais-vitais-pediatricos",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Sinais vitais pediátricos por faixa etária",
  resumo: "Referência rápida de frequência cardíaca, frequência respiratória, pressão arterial (incluindo limite de hipotensão por idade) e estimativa de peso para a criança no PS.",
  palavrasChave: "sinais vitais pediatria frequencia cardiaca frequencia respiratoria pressao arterial hipotensao taquicardia taquipneia bradicardia peso estimado formula pals apls broselow",
  critico: {
    tempo: "Hipotensão = choque descompensado",
    texto: "PAS abaixo do limite para a idade indica choque descompensado: expansão volêmica e suporte imediatos. Taquicardia persistente e enchimento capilar > 2 s aparecem antes da hipotensão."
  },
  alarmes: [
    "PAS < 60 mmHg no RN a termo; < 70 mmHg de 1 a 12 meses; < 70 + (2 × idade em anos) de 1 a 10 anos; < 90 mmHg acima de 10 anos",
    "Bradicardia (FC < 60 bpm) com sinais de má perfusão: iniciar compressões torácicas (PALS)",
    "FC > 180 bpm em lactente ou > 160 bpm em criança > 1 ano sem explicação (febre, choro, dor): pensar em choque ou taquiarritmia",
    "FR > 60 irpm em qualquer idade, ou bradipneia/apneia (sinal de falência respiratória)",
    "Enchimento capilar > 2 s, pulsos periféricos finos, extremidades frias, rebaixamento de consciência"
  ],
  conduta: [
    "Medir FC e FR por 30–60 s com a criança calma (no colo do cuidador); choro e febre elevam FC e FR",
    "Interpretar sempre junto ao Triângulo de Avaliação Pediátrica (aparência, respiração, circulação) e à tendência ao longo do tempo",
    "PA com manguito adequado: bolsa inflável cobrindo cerca de 80–100% da circunferência do braço e largura de cerca de 40%; manguito pequeno superestima a PA",
    "Cada 1 °C de febre acima de 37 °C eleva a FC em cerca de 10 bpm: reavaliar após antitérmico",
    "Usar o peso real sempre que possível; na emergência, usar fita de Broselow ou fórmula de peso estimado",
    "Hipotensão para a idade = choque descompensado → ver ficha crianca-grave"
  ],
  prescricao: {
    hospitalar: "CÁLCULOS RÁPIDOS NA SALA DE EMERGÊNCIA (peso real ou estimado: ___ kg)\n1. Peso estimado (APLS): < 12 meses = (0,5 × idade em meses) + 4; 1–5 anos = (2 × idade em anos) + 8; 6–12 anos = (3 × idade em anos) + 7.\n2. Expansão volêmica: cristaloide isotônico (Ringer lactato ou SF 0,9%) 10–20 mL/kg IV/IO em 5–20 minutos; reavaliar FC, perfusão, PA, fígado e ausculta após cada alíquota.\n3. Hipoglicemia (glicemia < 60 mg/dL): SG 10% 2–5 mL/kg IV em bolus; repetir glicemia em 15 minutos.\n4. Limite inferior de PAS (1–10 anos) = 70 + (2 × idade em anos) mmHg.\n5. Débito urinário esperado: lactente/criança ≥ 1 mL/kg/h; adolescente ≥ 0,5 mL/kg/h."
  },
  orientacoesRetorno: [
    "Ficha de referência para a equipe: as orientações de alta dependem da doença de base",
    "Orientar o cuidador a voltar se a criança ficar com respiração rápida ou com esforço, mãos e pés frios ou arroxeados, muito sonolenta ou difícil de acordar, ou se urinar muito pouco"
  ],
  tabelas: [
    {
      titulo: "Frequência cardíaca normal (bpm) — PALS",
      colunas: ["Idade", "Acordado", "Dormindo"],
      linhas: [
        ["Recém-nascido (< 28 dias)", "100–205", "90–160"],
        ["Lactente (1–12 meses)", "100–180", "90–160"],
        ["1–2 anos", "98–140", "80–120"],
        ["Pré-escolar (3–5 anos)", "80–120", "65–100"],
        ["Escolar (6–11 anos)", "75–118", "58–90"],
        ["Adolescente (12–15 anos)", "60–100", "50–90"]
      ],
      nota: "Algumas versões da tabela PALS trazem 100–190 bpm acordado no lactente. Avaliar sempre a tendência e o contexto clínico."
    },
    {
      titulo: "Frequência respiratória normal (irpm) — PALS",
      colunas: ["Idade", "FR"],
      linhas: [
        ["Lactente (< 1 ano)", "30–53"],
        ["1–2 anos", "22–37"],
        ["Pré-escolar (3–5 anos)", "20–28"],
        ["Escolar (6–11 anos)", "18–25"],
        ["Adolescente (12–15 anos)", "12–20"]
      ],
      nota: "Taquipneia para triagem de pneumonia (OMS/AIDPI): ≥ 60 irpm (< 2 meses), ≥ 50 irpm (2–11 meses), ≥ 40 irpm (1–4 anos)."
    },
    {
      titulo: "Pressão arterial normal e hipotensão — PALS",
      colunas: ["Idade", "PAS normal (mmHg)", "PAD normal (mmHg)", "Hipotensão: PAS menor que"],
      linhas: [
        ["Recém-nascido a termo (ao nascer, ~3 kg)", "60–76", "31–45", "60"],
        ["Neonato (96 h de vida até 28 dias)", "67–84", "35–53", "60"],
        ["Lactente (1–12 meses)", "72–104", "37–56", "70"],
        ["1–2 anos", "86–106", "42–63", "70 + (2 × idade em anos)"],
        ["Pré-escolar (3–5 anos)", "89–112", "46–72", "70 + (2 × idade em anos)"],
        ["Escolar (6–9 anos)", "97–115", "57–76", "70 + (2 × idade em anos)"],
        ["10–12 anos", "102–120", "61–80", "90"],
        ["Adolescente (12–15 anos)", "110–131", "64–83", "90"]
      ],
      nota: "PA para diagnóstico de hipertensão (ambulatório) usa percentis por idade, sexo e estatura (AAP 2017). Valores de 50º percentil de estatura."
    },
    {
      titulo: "Peso estimado (APLS)",
      colunas: ["Idade", "Fórmula", "Exemplo"],
      linhas: [
        ["0–12 meses", "(0,5 × idade em meses) + 4", "6 meses ≈ 7 kg"],
        ["1–5 anos", "(2 × idade em anos) + 8", "3 anos ≈ 14 kg"],
        ["6–12 anos", "(3 × idade em anos) + 7", "8 anos ≈ 31 kg"]
      ],
      nota: "Preferir fita de Broselow (comprimento) quando disponível. Crianças com obesidade ou desnutrição fogem das fórmulas."
    }
  ],
  fontes: [
    "AHA/AAP — Pediatric Advanced Life Support: Provider Manual e diretrizes de RCP e ACE (2020; atualização AHA 2025)",
    "Advanced Life Support Group — APLS: Advanced Paediatric Life Support, 6ª ed. (fórmulas de peso)",
    "OMS/Ministério da Saúde — AIDPI Criança: 2 meses a 5 anos (2017), critérios de taquipneia",
    "AAP — Clinical Practice Guideline for High Blood Pressure in Children and Adolescents (2017)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
