// Hipertensão arterial
registrarFicha({
  id: "has-ubs",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Hipertensão arterial",
  resumo: "Diagnóstico, estratificação de risco, início e ajuste do tratamento na atenção primária.",
  palavrasChave: "hipertensao has pressao alta losartana enalapril anlodipino hidroclorotiazida clortalidona mapa mrpa risco cardiovascular",
  critico: {
    tempo: "Confirme fora do consultório",
    texto: "PA ≥ 140/90 em consultório deve ser confirmada por MRPA ou MAPA, salvo PA ≥ 180/110 ou lesão de órgão-alvo."
  },
  alarmes: [
    "PA ≥ 180/110 com sintomas de órgão-alvo → ficha Crise hipertensiva",
    "Idade < 30 anos, início súbito, hipocalemia (pensar secundária)",
    "Hipertensão resistente (3 drogas incluindo diurético)",
    "Creatinina em elevação ou proteinúria",
    "Gestante com PA ≥ 140/90"
  ],
  condutaInicial: [
    "Medir corretamente: repouso 5 min, manguito adequado, 2–3 medidas, ambos os braços na 1ª consulta",
    "Confirmar com MRPA (7 dias) ou MAPA",
    "Exames iniciais e ECG",
    "Calcular risco cardiovascular",
    "Mudança de estilo de vida para todos + medicamento conforme estágio e risco"
  ],
  fataisExcluir: [
    "Emergência hipertensiva",
    "Pré-eclâmpsia",
    "Hipertensão secundária grave (feocromocitoma, coarctação)"
  ],
  proximaDecisao: "Estágio 1 de baixo risco: MEV por até 3 meses. Estágio 1 de risco alto e estágios 2–3: iniciar medicação, em geral combinação em dose baixa. Meta habitual < 130/80.",
  clinica: {
    anamnese: [
      "Tempo de diagnóstico, tratamentos prévios e adesão",
      "Sal, álcool, atividade física, sono (apneia), tabagismo",
      "Medicamentos que elevam PA: AINE, corticoide, descongestionantes, anticoncepcionais",
      "Sintomas de lesão de órgão-alvo e de causas secundárias",
      "História familiar de DCV precoce"
    ],
    exameFisico: [
      "PA em ambos os braços; em pé em idosos e diabéticos (hipotensão postural)",
      "Peso, altura, IMC, circunferência abdominal",
      "Pulsos, sopros abdominais/carotídeos",
      "Fundo de olho quando possível"
    ],
    diferenciais: [
      {
        dx: "Hipertensão do avental branco",
        pista: "Consultório elevado, MRPA/MAPA normal"
      },
      {
        dx: "Hipertensão mascarada",
        pista: "Consultório normal, MRPA/MAPA elevado"
      },
      {
        dx: "Secundária",
        pista: "Apneia do sono, DRC, hiperaldosteronismo, estenose renal"
      },
      {
        dx: "Pseudo-resistência",
        pista: "Má adesão, técnica de medida errada, manguito pequeno"
      }
    ],
    gravidade: [
      "Estágio 1: 140–159 / 90–99",
      "Estágio 2: 160–179 / 100–109",
      "Estágio 3: ≥ 180 / ≥ 110",
      "Lesão de órgão-alvo, DCV estabelecida, DRC ou DM elevam o risco"
    ]
  },
  exames: [
    {
      nome: "Rotina inicial",
      pedido: "Creatinina (com TFG estimada), potássio, glicemia de jejum e HbA1c, colesterol total, HDL, triglicerídeos (LDL calculado), ácido úrico, urina tipo 1.",
      porQue: "Lesão de órgão-alvo, comorbidades e escolha de fármaco.",
      esperar: "—",
      interpretacao: "TFG < 60 ou albuminúria → DRC (prioriza IECA/BRA). K baixo sem diurético → investigar hiperaldosteronismo.",
      limitacoes: "—"
    },
    {
      nome: "Albuminúria",
      pedido: "Relação albumina/creatinina em amostra isolada de urina.",
      porQue: "Marcador de lesão renal e de risco cardiovascular.",
      esperar: "< 30 mg/g normal.",
      interpretacao: "≥ 30 mg/g → IECA ou BRA, meta mais rigorosa.",
      limitacoes: "Repetir se alterada (exercício, infecção, febre elevam)."
    },
    {
      nome: "ECG",
      pedido: "Eletrocardiograma de repouso.",
      porQue: "Hipertrofia de VE, arritmias, isquemia.",
      esperar: "—",
      interpretacao: "HVE → lesão de órgão-alvo, alto risco.",
      limitacoes: "Baixa sensibilidade para HVE."
    },
    {
      nome: "MRPA / MAPA",
      pedido: "MRPA (7 dias, 2 medidas manhã e noite) ou MAPA de 24 h.",
      porQue: "Confirmar diagnóstico e excluir avental branco.",
      esperar: "—",
      interpretacao: "Hipertensão: MRPA ≥ 130/80; MAPA 24 h ≥ 130/80, vigília ≥ 135/85, sono ≥ 120/70.",
      limitacoes: "MRPA exige aparelho validado e orientação."
    }
  ],
  tratamento: [
    {
      droga: "Losartana",
      linha: "l1",
      dose: "50–100 mg/dia",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Contínuo",
      monitorizacao: "Creatinina e K em 1–2 semanas",
      contraindicacoes: "Gestação, estenose bilateral de artéria renal",
      ajustes: "Não associar com IECA"
    },
    {
      droga: "Enalapril",
      linha: "l1",
      dose: "10–40 mg/dia",
      via: "VO",
      intervalo: "12/12h",
      duracao: "Contínuo",
      monitorizacao: "Creatinina, K, tosse",
      contraindicacoes: "Gestação, angioedema prévio",
      ajustes: "Aceitar até 30% de elevação da creatinina"
    },
    {
      droga: "Anlodipino",
      linha: "l1",
      dose: "5–10 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Edema de MMII",
      contraindicacoes: "—",
      ajustes: "Idosos: iniciar 2,5–5 mg"
    },
    {
      droga: "Clortalidona / hidroclorotiazida",
      linha: "l1",
      dose: "Clortalidona 12,5–25 mg · HCTZ 12,5–25 mg",
      via: "VO",
      intervalo: "1×/dia, pela manhã",
      duracao: "Contínuo",
      monitorizacao: "Na, K, ácido úrico, glicemia",
      contraindicacoes: "Gota ativa, hiponatremia",
      ajustes: "Menor eficácia se TFG < 30 (preferir diurético de alça)"
    },
    {
      droga: "Espironolactona",
      linha: "alt",
      dose: "25–50 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "K e creatinina",
      contraindicacoes: "K > 5,0, TFG < 30",
      ajustes: "4ª droga na hipertensão resistente"
    },
    {
      droga: "Esquema inicial sugerido",
      linha: "adj",
      dose: "IECA ou BRA + BCC di-hidropiridínico ou tiazídico, em doses baixas",
      via: "VO",
      intervalo: "Preferir comprimido único ou mesma tomada",
      duracao: "—",
      monitorizacao: "PA em 4 semanas",
      contraindicacoes: "—",
      ajustes: "Monoterapia: estágio 1 de baixo risco, idoso frágil ou muito idoso"
    }
  ],
  destino: {
    agora: [
      "Confirmar diagnóstico, iniciar MEV e tratamento conforme risco",
      "Registrar risco CV e meta individual"
    ],
    reavaliar: [
      "Após início/ajuste: 4 semanas",
      "Na meta: a cada 3–6 meses",
      "Exames anuais (creatinina, K, perfil lipídico, glicemia, urina)"
    ],
    alta: [
      "Seguimento longitudinal na UBS"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "—"
    ],
    transferencia: [
      "Encaminhar à cardiologia/nefrologia: suspeita de secundária, resistente, < 30 anos, DRC avançada",
      "PS: PA ≥ 180/120 com lesão aguda de órgão-alvo"
    ]
  },
  fontes: [
    "Diretrizes Brasileiras de Hipertensão Arterial — SBC/SBH/SBN (2025)",
    "Ministério da Saúde — Linha de Cuidado do Adulto com Hipertensão Arterial Sistêmica",
    "ESC 2024 Guidelines for elevated blood pressure and hypertension"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
