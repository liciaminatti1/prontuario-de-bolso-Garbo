// Doença de Chagas crônica
registrarFicha({
  id: "chagas-cronica",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Doença de Chagas crônica",
  resumo: "Infecção crônica pelo Trypanosoma cruzi: formas indeterminada, cardíaca e digestiva. Diagnóstico sorológico, tratamento etiológico, seguimento e notificação.",
  palavrasChave: "chagas tripanossomiase trypanosoma cruzi benznidazol cardiopatia chagasica megaesofago megacolon barbeiro",
  critico: {
    tempo: "2 sorologias diferentes",
    texto: "O diagnóstico da fase crônica exige 2 testes sorológicos de princípios diferentes reagentes. Todo caso crônico confirmado é de notificação compulsória."
  },
  alarmes: [
    "Síncope, palpitações, tontura (bradiarritmia ou arritmia ventricular)",
    "Sinais de insuficiência cardíaca",
    "AVC ou embolia (trombo apical)",
    "Disfagia progressiva, constipação grave/fecaloma (forma digestiva)",
    "Gestante soropositiva (transmissão vertical: testar o recém-nascido)"
  ],
  condutaInicial: [
    "Confirmar com 2 sorologias de princípios diferentes (ex.: ELISA + imunofluorescência ou quimioluminescência)",
    "Classificar a forma clínica: ECG de 12 derivações e RX de tórax; ecocardiograma; investigar sintomas digestivos",
    "Avaliar indicação de benznidazol (crianças, adolescentes, mulheres em idade fértil, forma indeterminada/cardíaca leve até ~50 anos)",
    "Notificar e testar familiares (sobretudo filhos de mães positivas)",
    "Seguimento anual com ECG na forma indeterminada"
  ],
  fataisExcluir: [
    "Morte súbita por arritmia ventricular",
    "Bloqueio atrioventricular total",
    "Insuficiência cardíaca avançada",
    "Tromboembolismo"
  ],
  proximaDecisao: "Forma indeterminada (ECG e RX normais) → tratamento etiológico se indicado e ECG anual. Alteração no ECG ou eco → cardiologia.",
  clinica: {
    anamnese: [
      "Naturalidade e moradia em área endêmica, casa de pau a pique, contato com barbeiro",
      "Transfusão antes de 1990, mãe com Chagas",
      "Palpitações, síncope, dispneia, edema",
      "Disfagia, regurgitação, constipação crônica"
    ],
    exameFisico: [
      "FC, ritmo, PA, sinais de IC",
      "Sopro de insuficiência mitral/tricúspide",
      "Estado nutricional (megaesôfago)"
    ],
    diferenciais: [
      { dx: "Cardiomiopatia dilatada de outras causas", pista: "Sorologia negativa" },
      { dx: "Cardiopatia isquêmica", pista: "Fatores de risco, coronárias obstruídas" },
      { dx: "Acalásia idiopática", pista: "Sorologia negativa" }
    ],
    gravidade: [
      "Forma indeterminada: sorologia positiva, sem sintomas, ECG e RX normais",
      "Cardíaca: BRD + BDAS, extrassístoles, BAV, FE reduzida, aneurisma apical",
      "Digestiva: megaesôfago, megacólon"
    ]
  },
  exames: [
    { nome: "Sorologias", pedido: "Sorologia para doença de Chagas (IgG) por 2 métodos de princípios diferentes (ELISA e IFI ou quimioluminescência).", porQue: "Confirmação diagnóstica.", esperar: "—", interpretacao: "Discordância → 3º método ou repetir.", limitacoes: "Após tratamento, a negativação sorológica é lenta (anos)." },
    { nome: "ECG", pedido: "Eletrocardiograma de 12 derivações — anual.", porQue: "Detectar cardiopatia.", esperar: "—", interpretacao: "BRD + BDAS, BAV, extrassístoles ventriculares frequentes, área inativa → forma cardíaca.", limitacoes: "—" },
    { nome: "Ecocardiograma e Holter", pedido: "Ecocardiograma transtorácico; Holter de 24 h se palpitações, síncope ou alterações no ECG.", porQue: "FE, aneurisma, trombo; arritmias.", esperar: "—", interpretacao: "FE reduzida ou TV não sustentada → cardiologia.", limitacoes: "—" },
    { nome: "Antes do benznidazol", pedido: "Hemograma, TGO, TGP, creatinina; beta-hCG em mulheres em idade fértil.", porQue: "Toxicidade e gestação.", esperar: "—", interpretacao: "Repetir hemograma e transaminases após 2–4 semanas.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "Benznidazol", linha: "l1", dose: "Adulto: 5 mg/kg/dia (máx 300 mg/dia) · criança: 5–10 mg/kg/dia", via: "VO, após refeições", intervalo: "Dividido em 2–3 tomadas", duracao: "60 dias", monitorizacao: "Dermatite (mais comum, semana 1–3), neuropatia, leucopenia, hepatotoxicidade", contraindicacoes: "Gestação, insuficiência hepática/renal grave, cardiopatia avançada", ajustes: "Contracepção eficaz durante e 5 dias após. Suspender se dermatite grave/esfoliativa" },
    { droga: "Nifurtimox", linha: "alt", dose: "8–10 mg/kg/dia (criança 15 mg/kg/dia)", via: "VO", intervalo: "3×/dia", duracao: "60–90 dias", monitorizacao: "Náusea, perda de peso, neuropatia", contraindicacoes: "Gestação", ajustes: "Se intolerância ao benznidazol" },
    { droga: "Tratamento da cardiopatia", linha: "adj", dose: "Conforme ficha de IC crônica; amiodarona para arritmia ventricular (cardiologia); anticoagulação se trombo/FA/AVC", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "—", ajustes: "Marca-passo em BAV avançado" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL (adulto 60 kg — ajustar ao peso)\n1. Benznidazol 100 mg ------------------------------ 180 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 60 dias (5 mg/kg/dia; máx 300 mg/dia).\n\nORIENTAÇÕES\n- Evitar gravidez durante o tratamento (usar contracepção eficaz).\n- Não ingerir bebida alcoólica.\n- Procurar a unidade se manchas na pele, coceira intensa, febre, feridas na boca ou formigamento.\n- Exames de controle (hemograma e fígado) em 2–4 semanas."
  },
  orientacoesRetorno: [
    "Retorno em 2–4 semanas durante o benznidazol para exames e efeitos colaterais",
    "Procurar atendimento se desmaio, palpitações, falta de ar ou inchaço",
    "Familiares (sobretudo filhos e irmãos) devem fazer o exame",
    "Seguimento anual com ECG mesmo sem sintomas"
  ],
  destino: {
    agora: ["Confirmar, classificar a forma clínica, notificar e avaliar tratamento etiológico"],
    reavaliar: ["Benznidazol: 2 e 4 semanas", "Forma indeterminada: ECG anual"],
    alta: ["Seguimento na UBS na forma indeterminada"],
    observacao: ["—"],
    internacao: ["IC descompensada, arritmia grave, síncope"],
    transferencia: ["Cardiologia: forma cardíaca, alterações no ECG/eco/Holter", "Gastroenterologia/cirurgia: forma digestiva sintomática", "Pré-natal de alto risco: gestante soropositiva"]
  },
  fontes: [
    "Ministério da Saúde — PCDT Doença de Chagas (2018)",
    "II Consenso Brasileiro em Doença de Chagas (2015)",
    "Ministério da Saúde — notificação compulsória da doença de Chagas crônica (Portaria GM/MS nº 1.061/2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
