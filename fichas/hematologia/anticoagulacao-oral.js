// Anticoagulação oral: manejo ambulatorial
registrarFicha({
  id: "anticoagulacao-oral",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Anticoagulação oral: varfarina e DOAC",
  resumo: "Manejo ambulatorial do anticoagulado: escolha do fármaco, doses, controle do INR, conduta em INR alterado, interrupção para procedimentos, interações e sangramento.",
  palavrasChave: "anticoagulacao varfarina marevan inr doac rivaroxabana apixabana dabigatrana edoxabana vitamina k sangramento procedimento",
  critico: {
    tempo: "Sangrou? Pare e avalie",
    texto: "Sangramento grave em anticoagulado: suspender, avaliar hemodinâmica e reverter (vitamina K + complexo protrombínico na varfarina; idarucizumabe na dabigatrana) no PS."
  },
  alarmes: [
    "Sangramento ativo importante (melena, hematêmese, hematúria franca, sangramento que não para)",
    "Cefaleia súbita, déficit neurológico ou trauma de crânio (TC urgente)",
    "INR > 10, ou > 4,5 com sangramento",
    "Queda da função renal em uso de DOAC",
    "Gestação em uso de varfarina ou DOAC"
  ],
  condutaInicial: [
    "Confirmar indicação e duração (FA, TEV, prótese valvar) e risco de sangramento (HAS-BLED)",
    "Preferir DOAC (exceto prótese mecânica, estenose mitral moderada/grave, SAF, gestação, ClCr < 15)",
    "Varfarina: alvo INR 2–3 (2,5–3,5 em prótese mitral mecânica); INR semanal até estabilizar",
    "Revisar interações (antibióticos, AINE, antiagregantes) a cada nova prescrição",
    "Orientar sinais de sangramento e cuidado com procedimentos"
  ],
  fataisExcluir: [
    "Hemorragia intracraniana",
    "Hemorragia digestiva",
    "Trombose por subdose (AVC, TEV recorrente)"
  ],
  proximaDecisao: "INR fora do alvo sem sangramento → ajustar a dose semanal (tabela). Sangramento importante ou INR > 10 com fatores de risco → PS.",
  clinica: {
    anamnese: [
      "Indicação, início, alvo de INR, tempo previsto",
      "Sangramentos, quedas, uso de álcool",
      "Novos medicamentos, antibióticos, fitoterápicos",
      "Mudança na alimentação (vitamina K: folhas verdes)",
      "Procedimentos programados"
    ],
    exameFisico: ["PA, FC", "Equimoses, sangramento gengival", "Sinais de anemia"],
    diferenciais: [
      { dx: "INR alto por interação", pista: "Antibiótico/antifúngico recente" },
      { dx: "INR alto por hepatopatia", pista: "Albumina baixa, outros sinais hepáticos" },
      { dx: "INR baixo", pista: "Esquecimento de doses, mais vitamina K na dieta, indutores (rifampicina, carbamazepina)" }
    ],
    gravidade: [
      "Sangramento maior: queda de Hb ≥ 2 g/dL, transfusão, sítio crítico ou instabilidade",
      "HAS-BLED ≥ 3: alto risco de sangramento (corrigir fatores; não contraindica por si só)"
    ]
  },
  exames: [
    { nome: "INR", pedido: "Tempo de protrombina com INR.", porQue: "Controle da varfarina.", esperar: "Alvo 2–3 (maioria).", interpretacao: "Semanal até 2 valores estáveis; depois a cada 4–12 semanas. Repetir 3–5 dias após mudar dose ou iniciar interação.", limitacoes: "Não serve para DOAC." },
    { nome: "Segurança do DOAC", pedido: "Creatinina (ClCr Cockcroft-Gault), hemograma, TGO/TGP — no início e a cada 6–12 meses (a cada 3–6 meses se ClCr < 60 ou ≥ 75 anos).", porQue: "Ajuste de dose e sangramento oculto.", esperar: "—", interpretacao: "Reduzir dose ou trocar conforme ClCr.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "Apixabana", linha: "l1", dose: "FA: 5 mg 12/12h (2,5 mg se ≥ 2 de: ≥ 80 anos, ≤ 60 kg, creatinina ≥ 1,5) · TEV: 10 mg 12/12h por 7 dias, depois 5 mg 12/12h", via: "VO", intervalo: "12/12h", duracao: "Conforme indicação", monitorizacao: "Sangramento, ClCr", contraindicacoes: "Prótese mecânica, gestação", ajustes: "ClCr < 15: evitar" },
    { droga: "Rivaroxabana", linha: "l1", dose: "FA: 20 mg/dia (15 mg se ClCr 15–49) com refeição · TEV: 15 mg 12/12h por 21 dias, depois 20 mg/dia", via: "VO, com alimento", intervalo: "1×/dia", duracao: "Conforme indicação", monitorizacao: "Sangramento, ClCr", contraindicacoes: "Prótese mecânica, gestação, SAF triplo positivo", ajustes: "ClCr < 15: evitar" },
    { droga: "Dabigatrana", linha: "alt", dose: "150 mg 12/12h (110 mg 12/12h se ≥ 80 anos ou alto risco de sangramento)", via: "VO, cápsula inteira", intervalo: "12/12h", duracao: "Conforme indicação", monitorizacao: "Dispepsia, ClCr", contraindicacoes: "ClCr < 30, prótese mecânica", ajustes: "Reversor: idarucizumabe 5 g IV" },
    { droga: "Varfarina", linha: "alt", dose: "Iniciar 5 mg/dia (2,5 mg em idosos, hepatopatas, desnutridos); ajustar pela dose semanal", via: "VO, mesmo horário", intervalo: "1×/dia", duracao: "Conforme indicação", monitorizacao: "INR", contraindicacoes: "Gestação (1º trimestre), sangramento ativo", ajustes: "Escolha em prótese valvar mecânica, estenose mitral, SAF e ClCr < 15. Em TEV agudo: sobrepor heparina até INR ≥ 2 por 24 h" },
    { droga: "Vitamina K (fitomenadiona)", linha: "adj", dose: "INR 4,5–10 sem sangramento: 1–2,5 mg VO só se alto risco de sangramento · INR > 10: 2,5–5 mg VO · sangramento grave: 10 mg IV lento + complexo protrombínico", via: "VO ou IV", intervalo: "Dose única; repetir INR em 24 h", duracao: "—", monitorizacao: "INR", contraindicacoes: "—", ajustes: "Evitar doses altas sem sangramento (resistência à varfarina por dias)" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Apixabana 5 mg ---------------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, todos os dias, no mesmo horário.\n   Se esquecer: tomar assim que lembrar se faltarem mais de 6 horas para a próxima dose; não dobrar.\n\nOU (se indicação de varfarina)\n1. Varfarina 5 mg ----------------------------------- 30 comprimidos\n   Tomar ___ comprimido(s) por dia, às 18 h, conforme a tabela de doses.\n   INR em ___/___/______ (alvo 2 a 3).\n\nORIENTAÇÕES\n- Não usar anti-inflamatórios nem AAS sem orientação médica.\n- Avisar que usa anticoagulante antes de dentista, exames invasivos ou cirurgias.\n- Varfarina: manter alimentação regular de verduras (não cortar nem exagerar)."
  },
  orientacoesRetorno: [
    "Procurar o PS imediatamente se fezes pretas, vômito com sangue, urina vermelha, sangramento que não para, dor de cabeça forte ou queda com batida na cabeça",
    "Não iniciar nenhum remédio, chá ou suplemento sem avisar",
    "Antes de procedimentos, avisar com antecedência: a pausa depende do remédio e da função renal",
    "Varfarina: INR semanal até estabilizar, depois a cada 4–12 semanas. DOAC: exames a cada 6–12 meses"
  ],
  destino: {
    agora: ["Definir fármaco, dose e plano de controle; revisar interações"],
    reavaliar: ["INR 3–5 dias após ajuste de dose ou nova interação", "DOAC: ClCr a cada 6–12 meses (3–6 se ClCr < 60)"],
    alta: ["Seguimento na UBS"],
    observacao: ["—"],
    internacao: ["Sangramento maior, INR muito elevado com sangramento"],
    transferencia: ["PS: sangramento grave, TCE, INR > 10 com sangramento", "Hematologia/cardiologia: INR lábil persistente, indicação duvidosa, trombofilia"]
  },
  tabelas: [
    { titulo: "Varfarina: ajuste pelo INR (alvo 2–3, sem sangramento)", colunas: ["INR", "Conduta"],
      linhas: [["< 1,5", "Aumentar a dose semanal em 10–20%"], ["1,5–1,9", "Aumentar a dose semanal em 5–10%"], ["2,0–3,0", "Manter"], ["3,1–4,5", "Reduzir a dose semanal em 5–15% (ou omitir 1 dose)"], ["4,5–10", "Suspender 1–2 doses e reduzir 10–20%; vitamina K 1–2,5 mg VO se alto risco de sangramento"], ["> 10", "Suspender; vitamina K 2,5–5 mg VO; INR em 24 h"]],
      nota: "Investigar sempre a causa (interação, adesão, dieta, doença aguda)." },
    { titulo: "Pausa antes de procedimentos (sem ponte na maioria)", colunas: ["Fármaco", "Baixo risco de sangramento", "Alto risco de sangramento"],
      linhas: [["Apixabana / rivaroxabana (ClCr ≥ 30)", "Última dose 24 h antes", "48 h antes"], ["Dabigatrana ClCr ≥ 50", "24 h", "48 h"], ["Dabigatrana ClCr 30–49", "48 h", "72–96 h"], ["Varfarina", "5 dias (INR < 1,5)", "5 dias (INR < 1,5)"]],
      nota: "Procedimentos com risco mínimo (extração dentária simples, catarata) geralmente sem suspensão. Ponte com heparina só em alto risco trombótico (ex.: prótese mitral mecânica)." }
  ],
  fontes: [
    "ESC 2024 Guidelines for atrial fibrillation (anticoagulação)",
    "ACCP/CHEST — Perioperative Management of Antithrombotic Therapy (2022)",
    "SBC — Diretriz Brasileira de Antiagregantes Plaquetários e Anticoagulantes em Cardiologia (2013) e atualização"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
