// Hipertensão arterial
registrarFicha({
  id: "has-ubs",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Hipertensão arterial",
  resumo: "Diagnóstico, estratificação de risco, início e ajuste do tratamento na atenção primária.",
  palavrasChave: "hipertensao has pressao alta pre-hipertensao losartana enalapril captopril anlodipino hidroclorotiazida clortalidona espironolactona mapa mrpa risco cardiovascular",
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
  proximaDecisao: "Estágio 1 de baixo risco: MEV por até 3 meses. Estágio 1 de risco alto e estágios 2–3: iniciar medicação, em geral combinação em dose baixa. Meta < 130/80 mmHg para todos (SBC 2025), individualizando em idoso frágil e hipotensão postural.",
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
      "Normal: < 120/80",
      "Pré-hipertensão: 120–139 / 80–89 (SBC 2025) — MEV e reavaliação; risco CV alto pode exigir mais",
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
      "PS: PA ≥ 180/110 com lesão aguda de órgão-alvo"
    ]
  },
  prescricao: {
    ambulatorial: "INÍCIO — COMBINAÇÃO EM DOSE BAIXA (estágio 1 de alto risco, estágios 2–3)\nUSO ORAL\n1. Losartana 50 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n2. Anlodipino 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n   (Ou, no lugar do anlodipino: hidroclorotiazida 25 mg ½ comprimido pela manhã, ou clortalidona 12,5 mg 1 comprimido pela manhã.)\n\nINTENSIFICAÇÃO (fora da meta em 4 semanas, com boa adesão)\n- Losartana 50 mg 1 comprimido de 12 em 12 horas (100 mg/dia) e anlodipino 10 mg 1 vez ao dia.\n- Terceira droga: acrescentar tiazídico (hidroclorotiazida 25 mg ou clortalidona 12,5–25 mg pela manhã).\n- Quarta droga (resistente): espironolactona 25 mg 1 vez ao dia (se K < 5,0 e TFG ≥ 30).\n\nAlternativa ao BRA: enalapril 10 mg 1 comprimido de 12 em 12 horas (tosse seca é comum; não associar com losartana).\n\nPEDIDO DE EXAMES (1–2 semanas após iniciar BRA/IECA ou diurético)\nCreatinina, potássio, sódio.\n\nMONITORIZAÇÃO\nMRPA: 3 medidas pela manhã e 3 à noite por 5–7 dias, anotar e trazer na consulta."
  },
  orientacoesRetorno: [
    "Pressão alta não dá sintoma; tomar os remédios todos os dias, mesmo com a pressão boa",
    "Sal: no máximo 1 colher de chá rasa por dia (5 g) para toda a comida; evitar embutidos, temperos prontos e ultraprocessados",
    "Caminhar ou fazer atividade física 150 min por semana; perder peso se acima do ideal; evitar álcool e cigarro",
    "Não usar anti-inflamatórios e descongestionantes nasais sem orientação",
    "Voltar imediatamente (ou procurar PS) se: dor no peito, falta de ar, fraqueza ou dormência de um lado, fala enrolada, visão turva ou dor de cabeça muito forte com pressão alta",
    "Losartana/enalapril: avisar se engravidar (suspender); fazer o exame de sangue pedido em 1–2 semanas",
    "Retorno em 4 semanas após começar ou mudar remédio; na meta, a cada 3–6 meses"
  ],
  tabelas: [
    {
      titulo: "Classificação da PA de consultório (adulto) — SBC 2025",
      colunas: ["Categoria", "PAS (mmHg)", "PAD (mmHg)"],
      linhas: [
        ["Normal", "< 120", "< 80"],
        ["Pré-hipertensão", "120–139", "80–89"],
        ["Hipertensão estágio 1", "140–159", "90–99"],
        ["Hipertensão estágio 2", "160–179", "100–109"],
        ["Hipertensão estágio 3", "≥ 180", "≥ 110"]
      ],
      nota: "Quando PAS e PAD caem em categorias diferentes, vale a maior. Confirmar com MRPA ou MAPA."
    }
  ],
  fontes: [
    "SBC/SBH/SBN — Diretriz Brasileira de Hipertensão Arterial (Arq Bras Cardiol, 2025)",
    "Ministério da Saúde — Linha de Cuidado do Adulto com Hipertensão Arterial Sistêmica (2021)",
    "ESC 2024 Guidelines for the management of elevated blood pressure and hypertension"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
