// Insuficiência cardíaca crônica (ambulatorial)
registrarFicha({
  id: "ic-cronica",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Insuficiência cardíaca crônica (acompanhamento)",
  resumo: "Diagnóstico, classificação pela fração de ejeção e otimização da terapia modificadora de doença no seguimento ambulatorial.",
  palavrasChave: "ic insuficiencia cardiaca cronica icfer fe reduzida betabloqueador carvedilol sacubitril valsartana espironolactona dapagliflozina quatro pilares bnp",
  critico: {
    tempo: "Quatro pilares na FE ≤ 40%",
    texto: "Betabloqueador + IECA/BRA/sacubitril-valsartana + espironolactona + iSGLT2, iniciados e titulados em semanas. Diurético só para congestão."
  },
  alarmes: [
    "Ganho de peso > 2 kg em 3 dias, ortopneia ou dispneia progressiva",
    "PAS < 90, FC < 50, síncope",
    "Potássio > 5,5 ou creatinina com elevação > 50%",
    "Angina, palpitações sustentadas (FA)",
    "Classe funcional IV"
  ],
  condutaInicial: [
    "Confirmar com ecocardiograma (FE) e BNP/NT-proBNP; definir etiologia (isquêmica, hipertensiva, chagásica, valvar)",
    "FE ≤ 40%: iniciar os 4 pilares em doses baixas e titular a cada 2–4 semanas",
    "Diurético de alça na menor dose que mantenha euvolemia",
    "Vacinas (influenza, pneumococo, covid-19), restrição moderada de sal, atividade física / reabilitação",
    "Investigar ferro (ferritina, saturação) e tratar comorbidades"
  ],
  fataisExcluir: [
    "Descompensação aguda / edema agudo de pulmão",
    "Isquemia miocárdica em curso",
    "Arritmia ventricular",
    "Hipercalemia por associação de fármacos"
  ],
  proximaDecisao: "Reavaliar a cada 2–4 semanas até atingir as doses-alvo toleradas; depois a cada 3 meses. Persistência de sintomas em dose otimizada → cardiologia.",
  clinica: {
    anamnese: [
      "Classe funcional NYHA, ortopneia, dispneia paroxística noturna, edema",
      "Etiologia: IAM prévio, HAS, Chagas (área endêmica), álcool, valvopatia, quimioterapia",
      "Adesão a medicamentos e dieta, peso diário",
      "Uso de AINE, glitazonas, diltiazem/verapamil (pioram IC)"
    ],
    exameFisico: [
      "Peso, PA, FC, ritmo",
      "Turgência jugular, crepitações, edema, hepatomegalia",
      "B3, sopros",
      "Perfusão periférica"
    ],
    diferenciais: [
      { dx: "DPOC / asma", pista: "Sibilos, espirometria obstrutiva, BNP normal" },
      { dx: "Obesidade / descondicionamento", pista: "BNP normal, eco normal" },
      { dx: "Doença renal / hepática", pista: "Edema sem disfunção cardíaca" },
      { dx: "Anemia, tireoidopatia", pista: "Hb baixa, TSH alterado" }
    ],
    gravidade: [
      "ICFEr: FE ≤ 40% · ICFElr: 41–49% · ICFEp: ≥ 50%",
      "NYHA I a IV",
      "Estágios A a D (ACC/AHA)"
    ]
  },
  exames: [
    { nome: "Ecocardiograma", pedido: "Ecocardiograma transtorácico.", porQue: "FE, valvopatias, etiologia.", esperar: "—", interpretacao: "Define o tratamento (FEr × FEp). Repetir 3–6 meses após otimização.", limitacoes: "—" },
    { nome: "BNP / NT-proBNP", pedido: "NT-proBNP (ou BNP).", porQue: "Diagnóstico e prognóstico.", esperar: "—", interpretacao: "NT-proBNP < 125 pg/mL (ambulatorial) torna IC improvável.", limitacoes: "Maior em idosos, DRC, FA; menor em obesos." },
    { nome: "Laboratório de seguimento", pedido: "Creatinina, sódio, potássio, hemograma, ferritina, saturação de transferrina, TSH, HbA1c, perfil lipídico.", porQue: "Segurança dos fármacos e comorbidades.", esperar: "—", interpretacao: "Ferritina < 100 ou 100–299 com saturação < 20% → ferro IV.", limitacoes: "—" },
    { nome: "ECG e sorologia para Chagas", pedido: "ECG de 12 derivações. Sorologia para doença de Chagas (2 métodos) se epidemiologia.", porQue: "Ritmo, bloqueios, etiologia chagásica.", esperar: "—", interpretacao: "QRS ≥ 150 ms com BRE → avaliar ressincronização.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "Carvedilol (ou bisoprolol / succinato de metoprolol)", linha: "l1", dose: "Carvedilol 3,125 mg 12/12h → dobrar a cada 2 semanas até 25 mg 12/12h (50 mg 12/12h se > 85 kg)", via: "VO", intervalo: "12/12h", duracao: "Contínuo", monitorizacao: "FC (alvo < 70), PA, congestão", contraindicacoes: "Descompensação aguda, BAV avançado, bradicardia sintomática", ajustes: "Bisoprolol 1,25 → 10 mg/dia; metoprolol succinato 12,5–25 → 200 mg/dia" },
    { droga: "Sacubitril-valsartana (ou IECA/BRA)", linha: "l1", dose: "24/26 mg 12/12h → 49/51 → 97/103 mg 12/12h", via: "VO", intervalo: "12/12h", duracao: "Contínuo", monitorizacao: "PA, creatinina, K", contraindicacoes: "Angioedema, gestação; suspender IECA 36 h antes de iniciar", ajustes: "Alternativa: enalapril 2,5 → 10–20 mg 12/12h ou losartana 25 → 150 mg/dia" },
    { droga: "Espironolactona", linha: "l1", dose: "12,5–25 mg → 50 mg/dia", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "K e creatinina em 1 semana, 1 mês e depois a cada 3 meses", contraindicacoes: "K > 5,0, TFG < 30", ajustes: "Suspender se K > 5,5" },
    { droga: "Dapagliflozina ou empagliflozina", linha: "l1", dose: "10 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Volemia", contraindicacoes: "DM1, TFG < 20–25", ajustes: "Benefício em todas as faixas de FE" },
    { droga: "Furosemida", linha: "adj", dose: "20–80 mg/dia (menor dose que mantenha euvolemia)", via: "VO", intervalo: "1–2×/dia", duracao: "Enquanto congestão", monitorizacao: "Peso, K, creatinina", contraindicacoes: "Hipovolemia", ajustes: "Paciente pode ajustar pelo peso conforme plano escrito" },
    { droga: "AINE, diltiazem, verapamil, glitazonas", linha: "ci", dose: "Evitar", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Pioram a IC", ajustes: "—" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL (início — titular a cada 2–4 semanas)\n1. Carvedilol 3,125 mg --------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento.\n2. Sacubitril + valsartana 24/26 mg -------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. (Alternativa: enalapril 2,5 mg 12/12h.)\n3. Espironolactona 25 mg -------------------------- 30 comprimidos\n   Tomar meio a 1 comprimido pela manhã.\n4. Dapagliflozina 10 mg --------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã.\n5. Furosemida 40 mg ------------------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã (ajustar conforme o peso).\n\nORIENTAÇÕES\n- Pesar-se todos os dias pela manhã e anotar.\n- Sal com moderação; evitar alimentos industrializados e embutidos.\n- Não usar anti-inflamatórios.\n- Exames (potássio e creatinina) em 1–2 semanas."
  },
  orientacoesRetorno: [
    "Pesar todo dia: se ganhar mais de 2 kg em 3 dias, procurar a unidade",
    "Voltar imediatamente se falta de ar em repouso, precisar dormir sentado, desmaio, dor no peito ou batedeira",
    "Não suspender os remédios por conta própria, mesmo se a pressão ficar mais baixa",
    "Retorno a cada 2–4 semanas até ajustar as doses; depois a cada 3 meses"
  ],
  destino: {
    agora: ["Confirmar FE, iniciar os 4 pilares e diurético se congesto"],
    reavaliar: ["2–4 semanas após cada ajuste (PA, FC, K, creatinina)", "Eco em 3–6 meses de terapia otimizada"],
    alta: ["Seguimento compartilhado UBS–cardiologia"],
    observacao: ["—"],
    internacao: ["Descompensação (ver ficha IC descompensada)"],
    transferencia: ["Cardiologia: FE ≤ 35% persistente (avaliar CDI/ressincronização), NYHA III–IV, etiologia a definir, valvopatia", "PS: congestão grave, hipotensão, síncope, dor torácica"]
  },
  fontes: [
    "SBC — Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (2018) e Atualização (2021)",
    "ESC 2021 Heart Failure Guidelines e Focused Update 2023",
    "AHA/ACC/HFSA 2022 Guideline for the Management of Heart Failure"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
