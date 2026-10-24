// Doença renal crônica
registrarFicha({
  id: "doenca-renal-cronica",
  especialidade: "nefrologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Doença renal crônica",
  resumo: "TFG < 60 mL/min/1,73 m² e/ou marcador de lesão renal (albuminúria ≥ 30 mg/g, alteração de sedimento ou de imagem) por mais de 3 meses. Estadiamento, nefroproteção, ajuste de doses e encaminhamento.",
  palavrasChave: "drc doenca renal cronica insuficiencia renal tfg albuminuria rac nefroprotecao iecabra isglt2 dapagliflozina kdigo",
  critico: {
    tempo: "TFG + albuminúria",
    texto: "Estadie sempre pelos dois eixos (G1–G5 e A1–A3). Albuminúria orienta IECA/BRA e iSGLT2; TFG orienta doses e encaminhamento."
  },
  alarmes: [
    "Queda rápida da TFG (> 25% ou > 5 mL/min/ano) ou lesão renal aguda sobreposta",
    "Potássio ≥ 6,0 mEq/L, acidose grave, hipervolemia refratária",
    "Sintomas urêmicos (náusea, prurido, confusão, pericardite)",
    "RAC > 300 mg/g, hematúria glomerular com proteinúria",
    "TFG < 30 (G4–G5): planejar terapia renal substitutiva"
  ],
  condutaInicial: [
    "Confirmar cronicidade (> 3 meses) e estadiar: TFG (CKD-EPI 2021) e relação albumina/creatinina",
    "Investigar causa: DM, HAS, glomerulopatia, obstrução, drogas; urina tipo 1 e USG de rins",
    "IECA ou BRA (dose máxima tolerada) se albuminúria, sobretudo com DM ou HAS",
    "iSGLT2 (dapagliflozina 10 mg) se TFG ≥ 20, conforme critérios do PCDT",
    "Suspender nefrotóxicos (AINE), ajustar doses pela função renal, estatina se ≥ 50 anos"
  ],
  fataisExcluir: [
    "Lesão renal aguda (obstrução, hipovolemia, drogas)",
    "Hipercalemia grave",
    "Glomerulonefrite rapidamente progressiva",
    "Síndrome urêmica / indicação de diálise de urgência"
  ],
  proximaDecisao: "TFG ≥ 30 e RAC < 300 com causa clara → seguimento na UBS. TFG < 30, RAC > 300, queda rápida, hematúria glomerular ou causa obscura → nefrologia.",
  clinica: {
    anamnese: [
      "DM, HAS, doença cardiovascular, história familiar de doença renal (rins policísticos)",
      "Medicações: AINE, lítio, aminoglicosídeos, contraste recente, IBP crônico",
      "Sintomas urinários, hematúria, espuma na urina, edema",
      "Sintomas urêmicos: anorexia, náusea, prurido, cãibras, sonolência"
    ],
    exameFisico: [
      "PA, peso, volemia (edema, turgência jugular)",
      "Palidez (anemia), sopro abdominal (estenose renal)",
      "Bexiga palpável / próstata (obstrução)",
      "Atrito pericárdico, asterixe (uremia)"
    ],
    diferenciais: [
      { dx: "Lesão renal aguda", pista: "Creatinina basal recente normal; reversível" },
      { dx: "Nefropatia diabética", pista: "DM de longa data, albuminúria, retinopatia" },
      { dx: "Nefroesclerose hipertensiva", pista: "HAS antiga, albuminúria discreta" },
      { dx: "Glomerulopatia", pista: "Hematúria dismórfica, proteinúria importante, edema" },
      { dx: "Uropatia obstrutiva", pista: "Hidronefrose à USG, sintomas prostáticos" }
    ],
    gravidade: [
      "TFG: G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 < 15",
      "Albuminúria (RAC): A1 < 30 · A2 30–300 · A3 > 300 mg/g",
      "Risco aumenta com TFG menor e albuminúria maior (mapa de calor KDIGO)"
    ]
  },
  exames: [
    { nome: "Creatinina e TFG estimada", pedido: "Creatinina sérica com TFG estimada (CKD-EPI 2021).", porQue: "Estadiamento e ajuste de doses.", esperar: "—", interpretacao: "Confirmar redução em 2 dosagens com 3 meses de intervalo.", limitacoes: "Imprecisa em extremos de massa muscular, gestação, LRA." },
    { nome: "Relação albumina/creatinina", pedido: "Relação albumina/creatinina em amostra isolada de urina.", porQue: "Eixo A, prognóstico e indicação de IECA/BRA e iSGLT2.", esperar: "< 30 mg/g normal.", interpretacao: "Confirmar em 2 de 3 amostras. ≥ 300 mg/g → nefrologia.", limitacoes: "Exercício, febre, ITU e hiperglicemia elevam transitoriamente." },
    { nome: "Urina tipo 1 e USG de rins", pedido: "Urina tipo 1 (EAS). Ultrassonografia de rins e vias urinárias.", porQue: "Hematúria, cilindros, obstrução, tamanho renal, cistos.", esperar: "—", interpretacao: "Rins pequenos e hiperecogênicos sugerem cronicidade; hidronefrose → obstrução.", limitacoes: "—" },
    { nome: "Complicações (a partir de G3a)", pedido: "Hemograma, ferritina e saturação de transferrina, potássio, sódio, bicarbonato (gasometria venosa), cálcio, fósforo, PTH, 25-OH vitamina D, perfil lipídico, HbA1c se DM, sorologias para hepatite B (anti-HBs).", porQue: "Anemia, distúrbio mineral-ósseo, acidose, risco CV, vacinação.", esperar: "—", interpretacao: "HCO₃ < 18: considerar bicarbonato de sódio. Anti-HBs negativo: vacinar.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "IECA ou BRA (ex.: losartana)", linha: "l1", dose: "Losartana 50–100 mg/dia ou enalapril 10–40 mg/dia, titular à dose máxima tolerada", via: "VO", intervalo: "1–2×/dia", duracao: "Contínuo", monitorizacao: "Creatinina e K em 1–2 semanas após início/ajuste", contraindicacoes: "Gestação, K > 5,5, estenose bilateral de artéria renal", ajustes: "Aceitar elevação de creatinina de até 30%. Não associar IECA + BRA" },
    { droga: "Dapagliflozina (iSGLT2)", linha: "l1", dose: "10 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo (manter até diálise)", monitorizacao: "Volemia, infecção genital", contraindicacoes: "DM1, cetoacidose prévia, TFG < 20 para iniciar", ajustes: "Queda inicial discreta da TFG é esperada. Suspender em doença aguda e 3 dias antes de cirurgia. Conferir critérios de dispensação do PCDT" },
    { droga: "Estatina", linha: "l1", dose: "Atorvastatina 20 mg ou sinvastatina 20–40 mg (rosuvastatina máx 10 mg se TFG < 30)", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Mialgia", contraindicacoes: "Gestação", ajustes: "Indicada para ≥ 50 anos com DRC não dialítica" },
    { droga: "Bicarbonato de sódio", linha: "adj", dose: "0,5–1 mEq/kg/dia (ex.: 500–1.000 mg 2–3×/dia)", via: "VO", intervalo: "2–3×/dia", duracao: "Enquanto HCO₃ < 18–22", monitorizacao: "HCO₃, PA, edema", contraindicacoes: "Hipervolemia descompensada", ajustes: "Corrigir acidose metabólica crônica" },
    { droga: "AINE", linha: "ci", dose: "Evitar", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Pioram a função renal e causam hipercalemia", ajustes: "Preferir paracetamol; ajustar todos os medicamentos pela TFG (aba Calculadoras e segurança)" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Losartana 50 mg ---------------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas.\n2. Dapagliflozina 10 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã. Suspender se vômitos, diarreia ou jejum e procurar atendimento.\n3. Atorvastatina 20 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido à noite.\n\nORIENTAÇÕES\n- Não usar anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida, cetoprofeno).\n- Dieta com pouco sal; proteína moderada conforme orientação.\n- Levar esta lista de remédios a qualquer consulta: várias doses precisam de ajuste.\n- Exames de controle (creatinina, potássio, albumina na urina) em 2 semanas e depois conforme o estágio."
  },
  orientacoesRetorno: [
    "Evitar anti-inflamatórios e remédios sem orientação, inclusive chás e suplementos",
    "Avisar que tem doença renal antes de exames com contraste",
    "Voltar imediatamente se urinar muito pouco, inchaço que piora, falta de ar, fraqueza intensa ou palpitações",
    "Retorno com exames: G3 a cada 3–6 meses; G1–G2 com albuminúria a cada 6–12 meses"
  ],
  destino: {
    agora: ["Estadiar (G e A), iniciar nefroproteção e ajustar doses"],
    reavaliar: ["Creatinina e K 1–2 semanas após IECA/BRA", "Frequência de exames conforme estágio (1–4×/ano)"],
    alta: ["Seguimento longitudinal na UBS"],
    observacao: ["—"],
    internacao: ["Hipercalemia grave, uremia, hipervolemia refratária, LRA"],
    transferencia: ["Nefrologia: TFG < 30, RAC > 300 mg/g, queda rápida da TFG, hematúria glomerular, K persistente > 5,5, HAS resistente, causa incerta", "PS: K ≥ 6,5 ou alteração no ECG, sintomas urêmicos, edema pulmonar"]
  },
  tabelas: [
    { titulo: "Frequência de monitorização (consultas/exames por ano)", colunas: ["TFG \\ RAC", "A1 (< 30)", "A2 (30–300)", "A3 (> 300)"],
      linhas: [["G1–G2 (≥ 60)", "1 se DRC", "1", "2"], ["G3a (45–59)", "1", "2", "3"], ["G3b (30–44)", "2", "3", "3"], ["G4 (15–29)", "3", "3", "4+"], ["G5 (< 15)", "4+", "4+", "4+"]],
      nota: "Adaptado de KDIGO. Encaminhar à nefrologia a partir de G4 ou A3." }
  ],
  fontes: [
    "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD",
    "Ministério da Saúde — Diretrizes clínicas para o cuidado ao paciente com DRC no SUS (2014)",
    "SBN — Recomendações sobre iSGLT2 na DRC"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
