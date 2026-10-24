// Síndrome de Guillain-Barré
registrarFicha({
  id: "guillain-barre",
  especialidade: "neurologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Síndrome de Guillain-Barré",
  resumo: "Fraqueza flácida ascendente, simétrica e progressiva (dias a 4 semanas), com hipo/arreflexia, frequentemente após infecção respiratória ou diarreica (Campylobacter, zika, COVID-19). Risco de insuficiência respiratória e disautonomia.",
  palavrasChave: "guillain barre sgb polirradiculoneuropatia desmielinizante aguda paralisia flacida aguda arreflexia imunoglobulina plasmaferese dissociacao albuminocitologica capacidade vital miller fisher egris zika campylobacter",
  critico: {
    tempo: "Medir força respiratória já",
    texto: "Avaliar CVF/contagem em uma respiração, deglutição e disautonomia na chegada e a cada 2–6 h. Incapaz de andar sem ajuda (ou piora rápida) → imunoglobulina IV ou plasmaférese, idealmente nas primeiras 2 semanas."
  },
  alarmes: [
    "Dispneia, ortopneia, fala entrecortada, uso de musculatura acessória, contagem em uma respiração < 20",
    "CVF < 20 mL/kg, PImáx menos negativa que −30 cmH₂O, PEmáx < 40 cmH₂O (regra 20/30/40)",
    "Disfagia, tosse ineficaz, fraqueza cervical ou facial bilateral",
    "Arritmias, bradicardia, PA muito instável (disautonomia)",
    "Progressão rápida (< 7 dias do início à internação)",
    "Nível sensitivo, disfunção esfincteriana precoce e persistente, febre no início ou assimetria marcada (pensar em mielopatia ou outra causa)"
  ],
  condutaInicial: [
    "Internar com monitor; medir CVF (ou contagem em uma respiração), SpO₂ e gasometria se dispneia",
    "Avaliar deglutição (dieta zero ou SNE se disfagia) e escala de incapacidade (GBS disability score)",
    "Líquor, eletroneuromiografia e exames para diferenciais; não atrasar o tratamento à espera de confirmação",
    "Imunoglobulina IV 0,4 g/kg/dia por 5 dias (ou plasmaférese) se não deambula sem ajuda",
    "Profilaxia de TEV, analgesia (dor neuropática é frequente), cuidados com pele e mobilização",
    "Notificar: paralisia flácida aguda em < 15 anos (vigilância da poliomielite, imediata); SGB pós-arbovirose conforme vigilância local"
  ],
  fataisExcluir: [
    "Insuficiência respiratória neuromuscular (a SpO₂ cai tarde)",
    "Disautonomia: arritmia, assistolia, crise hipertensiva",
    "Compressão medular aguda (nível sensitivo, esfíncter) — RM urgente",
    "Botulismo (descendente, pupilas, sem alteração sensitiva)",
    "Hipocalemia, miastenia, poliomielite/mielite flácida aguda, intoxicações (organofosforado)"
  ],
  proximaDecisao: "CVF < 20 mL/kg, PImáx > −30 cmH₂O, PEmáx < 40, queda > 30% da CVF ou disfagia com aspiração → UTI e intubação eletiva (evitar succinilcolina: risco de hipercalemia). EGRIS alto também indica UTI.",
  clinica: {
    anamnese: [
      "Infecção 1–6 semanas antes (diarreia, gripe, zika, dengue, COVID-19), vacinação recente",
      "Fraqueza que começa nas pernas e sobe; parestesias e dor lombar/radicular",
      "Diplopia, ataxia (síndrome de Miller Fisher)",
      "Dificuldade para engolir ou respirar, palpitações",
      "Tempo do início até o momento (nadir em até 4 semanas)"
    ],
    exameFisico: [
      "Força proximal e distal, simetria, reflexos (hipo/arreflexia)",
      "Pares cranianos (diplegia facial, oftalmoparesia)",
      "Força cervical e de tosse, contagem em uma respiração",
      "Sensibilidade (ausência de nível sensitivo)",
      "PA, FC, ritmo, globo vesical"
    ],
    diferenciais: [
      { dx: "Mielopatia (compressão, mielite transversa)", pista: "Nível sensitivo, esfíncter precoce, Babinski" },
      { dx: "Miastenia gravis", pista: "Flutuação, ptose, sem alteração sensitiva, reflexos normais; ver ficha crise-miastenica" },
      { dx: "Botulismo", pista: "Descendente, midríase, alimento suspeito" },
      { dx: "Hipocalemia / paralisia periódica", pista: "K baixo, episódios prévios" },
      { dx: "Polineuropatia desmielinizante inflamatória crônica (PIDC)", pista: "Progressão > 8 semanas" },
      { dx: "Picada de carrapato, porfiria, intoxicações", pista: "Exposição, dor abdominal, urina escura" }
    ],
    gravidade: [
      "GBS disability score: 0 saudável · 1 sintomas leves, corre · 2 anda 10 m sem ajuda, não corre · 3 anda 10 m com ajuda · 4 acamado/cadeira · 5 ventilação mecânica · 6 óbito",
      "Tratar com imunoterapia se escore ≥ 3 (não anda sem ajuda)",
      "EGRIS (Erasmus GBS Respiratory Insufficiency Score) estima risco de ventilação em 1 semana: dias do início, fraqueza facial/bulbar e escore MRC"
    ]
  },
  exames: [
    {
      nome: "Líquor",
      pedido: "Punção lombar: celularidade, proteína, glicose, Gram e cultura, (VDRL e PCR viral conforme quadro).",
      porQue: "Apoia o diagnóstico e exclui infecção/infiltração.",
      esperar: "Dissociação albumino-citológica: proteína elevada com células < 10/mm³.",
      interpretacao: "Células > 50/mm³ → pensar em HIV, Lyme, neoplasia, poliomielite.",
      limitacoes: "Proteína pode ser normal na 1ª semana."
    },
    {
      nome: "Eletroneuromiografia",
      pedido: "Eletroneuromiografia de 4 membros — suspeita de síndrome de Guillain-Barré.",
      porQue: "Confirma polineuropatia e define o subtipo (desmielinizante x axonal).",
      esperar: "Bloqueios de condução, latências prolongadas, ondas F ausentes.",
      interpretacao: "Subtipo axonal (AMAN) é comum após Campylobacter e zika.",
      limitacoes: "Pode ser normal nos primeiros dias; não aguardar para tratar."
    },
    {
      nome: "Função respiratória e laboratório",
      pedido: "Capacidade vital forçada (espirometria de beira de leito) e, se disponível, PImáx e PEmáx a cada 4–6 h. Gasometria arterial. Hemograma, sódio, potássio, magnésio, fósforo, CPK, glicemia, creatinina, TGO, TGP, TSH. Sorologias: HIV, hepatites, sífilis; arbovírus (zika, dengue, chikungunya) conforme epidemiologia. ECG.",
      porQue: "Risco de falência respiratória e diferenciais metabólicos.",
      esperar: "Hiponatremia (SIADH) pode ocorrer.",
      interpretacao: "Hipercapnia é sinal tardio de falência.",
      limitacoes: "Fraqueza facial atrapalha a espirometria (vedação da boca)."
    }
  ],
  tratamento: [
    {
      droga: "Imunoglobulina humana IV",
      linha: "l1",
      dose: "0,4 g/kg/dia (adulto e criança)",
      via: "IV",
      intervalo: "1×/dia",
      duracao: "5 dias (total 2 g/kg)",
      monitorizacao: "Função renal, PA, cefaleia, sinais de trombose, reação infusional",
      contraindicacoes: "Deficiência de IgA com anticorpos anti-IgA",
      ajustes: "Iniciar devagar e aumentar a velocidade conforme bula do produto. Hidratar; cautela em DRC, IC e alto risco trombótico. Não associar plasmaférese em sequência"
    },
    {
      droga: "Plasmaférese",
      linha: "alt",
      dose: "4–5 sessões (troca total ~200–250 mL/kg)",
      via: "Acesso venoso central",
      intervalo: "Em dias alternados",
      duracao: "1–2 semanas",
      monitorizacao: "Hipotensão, hipocalcemia, coagulação",
      contraindicacoes: "Instabilidade hemodinâmica, sepse",
      ajustes: "Eficácia semelhante à imunoglobulina; benefício maior se iniciada nas primeiras 2–4 semanas"
    },
    {
      droga: "Corticoide",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem benefício na SGB (prednisona ou metilprednisolona isoladas)",
      ajustes: "Se progressão > 8 semanas, pensar em PIDC, que responde a corticoide"
    },
    {
      droga: "Gabapentina (dor neuropática)",
      linha: "adj",
      dose: "Adulto: 300 mg à noite, aumentar até 300–600 mg 8/8 h",
      via: "VO/SNE",
      intervalo: "8/8 h",
      duracao: "Conforme dor",
      monitorizacao: "Sedação",
      contraindicacoes: "—",
      ajustes: "Ajuste renal. Alternativa: amitriptilina 25 mg à noite (cuidado com disautonomia). Criança: avaliar com especialista"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "adj",
      dose: "40 mg",
      via: "SC",
      intervalo: "1×/dia",
      duracao: "Até deambular",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo",
      ajustes: "ClCr < 30: 20 mg 1×/dia ou heparina não fracionada 5.000 UI SC 8/8–12/12 h. Criança: não rotineira"
    }
  ],
  destino: {
    agora: ["Internação em leito monitorizado; UTI se critérios respiratórios, bulbares ou disautonomia"],
    reavaliar: [
      "CVF ou contagem em uma respiração a cada 2–6 h na fase de progressão",
      "Deglutição, PA, FC e ritmo contínuos"
    ],
    alta: ["Estável ou melhorando, sem suporte respiratório, com plano de reabilitação"],
    observacao: ["—"],
    internacao: ["Todos na fase aguda (inclusive formas leves: podem progredir)"],
    transferencia: ["Sem UTI, imunoglobulina ou neurologia → transferir cedo, antes da falência respiratória"]
  },
  prescricao: {
    hospitalar: "SÍNDROME DE GUILLAIN-BARRÉ — ADULTO (peso: ___ kg)\n1. Dieta pastosa assistida após avaliação de deglutição; dieta zero e SNE se disfagia ou tosse ineficaz.\n2. Cabeceira 30°; mudança de decúbito de 2/2 h; fisioterapia motora e respiratória.\n3. Imunoglobulina humana 0,4 g/kg/dia (___ g) IV 1 vez ao dia por 5 dias; iniciar a 0,5 mL/kg/h por 30 min e aumentar progressivamente até a velocidade máxima da bula, se tolerado. Pré-hidratação com SF 0,9% 500 mL.\n4. Enoxaparina 40 mg SC 1 vez ao dia.\n5. Dipirona 1 g VO/IV de 6/6 h + gabapentina 300 mg VO à noite (titular) para dor.\n6. Omeprazol 20 mg VO 1 vez ao dia se jejum/SNE e estresse.\n7. Lactulose 10 mL VO 12/12 h (constipação/íleo por disautonomia).\n8. Cuidados: CVF (ou contagem em uma respiração) de 4/4 h; SpO₂ e monitor cardíaco contínuos; PA de 2/2 h; diurese (cateterismo de alívio se retenção); proteção ocular se paralisia facial (colírio lubrificante e oclusão noturna).\n9. Avisar e chamar UTI se: CVF < 20 mL/kg ou queda > 30%, contagem < 20, tosse fraca, disfagia, FC < 50 ou > 120, PA instável.\n\nCRIANÇA: imunoglobulina 0,4 g/kg/dia por 5 dias (ou 1 g/kg/dia por 2 dias); demais medidas iguais, com acompanhamento de neuropediatria."
  },
  orientacoesRetorno: [
    "A recuperação é lenta (semanas a meses); a fisioterapia é parte essencial do tratamento",
    "Voltar imediatamente se a fraqueza voltar a piorar, faltar ar, engasgar ao comer ou tiver palpitações",
    "Recaídas são raras; informe a doença antes de vacinas novas (conversar com o médico)",
    "Retorno com neurologia e reabilitação conforme agendado; UBS em até 2 semanas após a alta"
  ],
  fontes: [
    "European Academy of Neurology / Peripheral Nerve Society — Guideline on the management of Guillain-Barré syndrome (2023)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2023/2024): paralisias flácidas agudas",
    "Ministério da Saúde — Manual de vigilância sentinela de doenças neuroinvasivas por arbovírus (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
