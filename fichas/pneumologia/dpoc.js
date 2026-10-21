// DPOC
registrarFicha({
  id: "dpoc",
  especialidade: "pneumologia",
  caminho: "ubs",
  publico: "adulto",
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
    "Vacinas: influenza anual, pneumocócica, covid-19, dTpa; VSR conforme disponibilidade (GOLD 2026 atualizou VSR e influenza)",
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
  proximaDecisao: "Grupo A: um broncodilatador. B ou E: LABA + LAMA. Grupo E com eosinófilos ≥ 300 → LABA + LAMA + CI. GOLD 2026: uma única exacerbação moderada já justifica considerar escalonamento; meta = doença estável (sem exacerbações nem piora de sintomas).",
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
      "Grupo A: mMRC 0–1/CAT < 10, sem exacerbação moderada/grave no último ano",
      "Grupo B: mMRC ≥ 2/CAT ≥ 10, sem exacerbação moderada/grave no último ano",
      "Grupo E (GOLD 2026): ≥ 1 exacerbação moderada (tratada com corticoide e/ou antibiótico) ou ≥ 1 internação no último ano — antes: ≥ 2 moderadas"
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
      ajustes: "Grupos B e E. SUS (CEAF, PCDT 2021): tiotrópio/olodaterol 2,5/2,5 mcg e umeclidínio/vilanterol 62,5/25 mcg"
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
      ajustes: "Grupo E com eosinófilos ≥ 300 (ou ≥ 100 com exacerbações apesar de LABA + LAMA). Preferir tripla a LABA + CI. Fluticasona/umeclidínio/vilanterol 100/62,5/25 mcg 1×/dia foi incorporada ao SUS (2024) para DPOC grave exacerbadora; conferir disponibilidade"
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
      ajustes: "Associar aumento do broncodilatador de curta ação (salbutamol ± ipratrópio)"
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
      ajustes: "Indicado com aumento de purulência + dispneia ou volume de escarro. Doxiciclina: evitar em gestantes"
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
  prescricao: {
    ambulatorial: "MANUTENÇÃO (USO INALATÓRIO)\n1. Tiotrópio + olodaterol 2,5/2,5 mcg (Respimat) ---- 1 unidade\n   Inalar 2 jatos 1 vez ao dia, sempre no mesmo horário. Uso contínuo.\n   (ou umeclidínio + vilanterol 62,5/25 mcg: 1 inalação 1 vez ao dia)\n   Grupo A: formoterol 12 mcg, 1 cápsula inalada de 12 em 12 horas.\n2. Salbutamol 100 mcg spray ------------------------ 1 frasco\n   Inalar 2 a 4 jatos com espaçador se falta de ar (até de 4 em 4 horas).\n\nEXACERBAÇÃO LEVE A MODERADA (USO ORAL)\n3. Prednisona 20 mg ------------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.\n4. Se escarro purulento: Amoxicilina + clavulanato 875/125 mg ------ 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 5 dias.\n   OU Azitromicina 500 mg: 1 comprimido 1 vez ao dia por 3 dias.\n   OU Doxiciclina 100 mg: 1 comprimido de 12 em 12 horas por 5 dias.\n5. Salbutamol 100 mcg spray: 4 jatos com espaçador de 4 em 4 horas por 3 a 5 dias, depois se necessário."
  },
  orientacoesRetorno: [
    "Parar de fumar é o tratamento que mais protege o pulmão; a UBS oferece apoio e medicamentos",
    "Usar o inalador de manutenção todos os dias; trazer o inalador nas consultas para revisar a técnica",
    "Manter vacinas em dia (gripe todo ano, pneumonia, covid-19)",
    "Caminhar e manter atividade física; perguntar sobre reabilitação pulmonar",
    "Plano de crise: se aumentar falta de ar, catarro ou mudar a cor do catarro, iniciar a receita de crise e avisar a UBS",
    "Voltar imediatamente ou ligar 192 se falta de ar em repouso, lábios roxos, sonolência ou confusão, dor no peito, inchaço nas pernas novo, ou sem melhora em 48 horas",
    "Retorno em 48–72 h após exacerbação e a cada 3–6 meses quando estável"
  ],
  fontes: [
    "GOLD — Global Strategy for the Diagnosis, Management and Prevention of COPD (2026)",
    "Ministério da Saúde — PCDT Doença Pulmonar Obstrutiva Crônica (Portaria Conjunta nº 19/2021) e Portaria SECTICS/MS nº 46/2024 (terapia tripla)",
    "SBPT — Recomendações para o tratamento farmacológico da DPOC (2022)"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});
