// DPOC
registrarFicha({
  id: "dpoc",
  especialidade: "pneumologia",
  caminho: "ubs",
  titulo: "DPOC",
  resumo: "Dispneia progressiva, tosse e expectoração crônicas em tabagista ou exposto (lenha, poeira). Diagnóstico por espirometria, tratamento de manutenção e exacerbação leve na UBS.",
  palavrasChave: "dpoc enfisema bronquite cronica espirometria tiotropio formoterol salmeterol umeclidinio exacerbacao tabagismo",
  critico: {
    tempo: "Espirometria confirma",
    texto: "VEF₁/CVF < 0,70 após broncodilatador. Sem espirometria, trate pelos sintomas e encaminhe para confirmar."
  },
  alarmes: [
    "Exacerbação com SpO₂ < 88–90%, confusão, sonolência (retenção de CO₂)",
    "Uso de musculatura acessória, FR > 30",
    "Edema novo, cianose (cor pulmonale)",
    "Falha do tratamento ambulatorial em 48 h",
    "Hemoptise, perda de peso (pensar neoplasia)"
  ],
  condutaInicial: [
    "Confirmar com espirometria e classificar sintomas (mMRC/CAT) e exacerbações",
    "Cessação do tabagismo em toda consulta",
    "Broncodilatador de longa ação conforme grupo GOLD",
    "Vacinas: influenza, pneumocócica, covid-19; VSR se ≥ 60 anos quando disponível",
    "Reabilitação pulmonar / atividade física; revisar técnica inalatória"
  ],
  fataisExcluir: [
    "Exacerbação grave com insuficiência respiratória",
    "Pneumonia",
    "Pneumotórax",
    "TEP",
    "IC descompensada",
    "Câncer de pulmão"
  ],
  proximaDecisao: "Grupo A: um broncodilatador. B ou E: LABA + LAMA. Exacerbações frequentes com eosinófilos ≥ 300 → acrescentar corticoide inalatório.",
  clinica: {
    anamnese: [
      "Carga tabágica (anos-maço), fogão a lenha, exposição ocupacional",
      "Dispneia (escala mMRC), tosse, expectoração, sibilância",
      "Exacerbações no último ano e internações",
      "Comorbidades: IC, ansiedade/depressão, osteoporose, câncer",
      "Asma na infância (sobreposição)"
    ],
    exameFisico: [
      "SpO₂ em repouso, FR, IMC",
      "Tórax em tonel, expiração prolongada, sibilos, MV reduzido",
      "Edema, turgência (cor pulmonale)",
      "Técnica inalatória observada"
    ],
    diferenciais: [
      { dx: "Asma", pista: "Início jovem, variabilidade, atopia, reversibilidade completa" },
      { dx: "Insuficiência cardíaca", pista: "Ortopneia, edema, BNP" },
      { dx: "Bronquiectasias", pista: "Grande volume de escarro, infecções de repetição" },
      { dx: "Tuberculose / sequela", pista: "História, imagem" }
    ],
    gravidade: [
      "GOLD 1–4 pela VEF₁ (≥ 80%, 50–79%, 30–49%, < 30%)",
      "Grupo A: mMRC 0–1/CAT < 10, ≤ 1 exacerbação sem internação",
      "Grupo B: mMRC ≥ 2/CAT ≥ 10, ≤ 1 exacerbação sem internação",
      "Grupo E: ≥ 2 exacerbações ou ≥ 1 internação no último ano"
    ]
  },
  exames: [
    {
      nome: "Espirometria com broncodilatador",
      pedido: "Espirometria com prova broncodilatadora.",
      porQue: "Diagnóstico e gravidade.",
      esperar: "VEF₁/CVF < 0,70 pós-BD.",
      interpretacao: "Confirma DPOC; VEF₁ classifica a obstrução.",
      limitacoes: "Não realizar em exacerbação. Em idosos pode haver superdiagnóstico (usar LIN se disponível)."
    },
    {
      nome: "RX de tórax",
      pedido: "Radiografia de tórax PA e perfil.",
      porQue: "Excluir outras doenças.",
      esperar: "Hiperinsuflação.",
      interpretacao: "—",
      limitacoes: "Não diagnostica DPOC."
    },
    {
      nome: "Hemograma com eosinófilos e oximetria",
      pedido: "Hemograma completo (eosinófilos). Oximetria de pulso em repouso.",
      porQue: "Eosinófilos orientam corticoide inalatório; policitemia; indicação de O₂.",
      esperar: "—",
      interpretacao: "SpO₂ ≤ 88% em repouso → gasometria e avaliação de oxigenoterapia domiciliar.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "LAMA + LABA (ex.: umeclidínio/vilanterol, tiotrópio/olodaterol)",
      linha: "l1",
      dose: "Umeclidínio/vilanterol 62,5/25 mcg 1 inalação · tiotrópio/olodaterol 2,5/2,5 mcg 2 jatos",
      via: "Inalatória",
      intervalo: "1×/dia",
      duracao: "Contínuo",
      monitorizacao: "Sintomas, exacerbações, técnica",
      contraindicacoes: "LAMA: glaucoma de ângulo fechado, retenção urinária",
      ajustes: "Grupos B e E. Usar o disponível no PCDT/SUS"
    },
    {
      droga: "Broncodilatador isolado (formoterol, salmeterol ou tiotrópio)",
      linha: "alt",
      dose: "Formoterol 12 mcg 12/12h · salmeterol 50 mcg 12/12h · tiotrópio 2,5 mcg 2 jatos 1×/dia",
      via: "Inalatória",
      intervalo: "Conforme droga",
      duracao: "Contínuo",
      monitorizacao: "Sintomas",
      contraindicacoes: "—",
      ajustes: "Grupo A"
    },
    {
      droga: "Salbutamol de resgate",
      linha: "l1",
      dose: "100 mcg 2–4 jatos",
      via: "Inalatória com espaçador",
      intervalo: "Se necessário",
      duracao: "—",
      monitorizacao: "Uso frequente indica descontrole",
      contraindicacoes: "—",
      ajustes: "—"
    },
    {
      droga: "Corticoide inalatório associado (LABA + LAMA + CI)",
      linha: "adj",
      dose: "Ex.: budesonida/formoterol 400/12 mcg 12/12h + LAMA",
      via: "Inalatória",
      intervalo: "Conforme droga",
      duracao: "Contínuo",
      monitorizacao: "Pneumonia, candidíase oral",
      contraindicacoes: "Pneumonias de repetição, eosinófilos < 100",
      ajustes: "Grupo E com eosinófilos ≥ 300 (ou ≥ 100 com exacerbações frequentes)"
    },
    {
      droga: "Exacerbação leve a moderada: prednisona",
      linha: "l1",
      dose: "40 mg",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "5 dias",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Associar aumento do broncodilatador de curta ação"
    },
    {
      droga: "Exacerbação com escarro purulento: antibiótico",
      linha: "l1",
      dose: "Amoxicilina-clavulanato 875/125 mg 12/12h · ou azitromicina 500 mg/dia por 3 dias · ou doxiciclina 100 mg 12/12h",
      via: "VO",
      intervalo: "Conforme droga",
      duracao: "5 dias",
      monitorizacao: "Resposta em 48–72 h",
      contraindicacoes: "Alergia",
      ajustes: "Indicado com aumento de purulência + dispneia ou volume de escarro"
    }
  ],
  destino: {
    agora: [
      "Confirmar diagnóstico, iniciar manutenção, abordar tabagismo, vacinar"
    ],
    reavaliar: [
      "Após início/troca: 4–8 semanas",
      "Exacerbação tratada na UBS: 48–72 h",
      "Estável: a cada 3–6 meses; espirometria anual"
    ],
    alta: [
      "Seguimento longitudinal na UBS"
    ],
    observacao: [
      "Exacerbação moderada: observar resposta ao broncodilatador na unidade"
    ],
    internacao: [
      "Exacerbação grave (ver alarmes)"
    ],
    transferencia: [
      "PS: SpO₂ < 88% apesar de O₂, sonolência, esforço importante, falha em 48 h",
      "Pneumologia: dúvida diagnóstica, < 40 anos, exacerbações frequentes apesar de tratamento, avaliação de O₂ domiciliar"
    ]
  },
  fontes: [
    "GOLD — Global Strategy for the Diagnosis, Management and Prevention of COPD (2025)",
    "Ministério da Saúde — PCDT Doença Pulmonar Obstrutiva Crônica (2021)",
    "SBPT — Recomendações para o tratamento farmacológico da DPOC (2022)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});
