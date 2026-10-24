// Síndrome da veia cava superior
registrarFicha({
  id: "sindrome-veia-cava-superior",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Síndrome da veia cava superior",
  resumo: "Obstrução da veia cava superior por tumor mediastinal (pulmão, linfoma) ou trombose de cateter/marca-passo. Edema de face e membros superiores, circulação colateral no tórax. Emergência quando há estridor, edema cerebral ou instabilidade.",
  palavrasChave: "sindrome da veia cava superior svcs obstrucao edema facial pletora circulacao colateral cancer de pulmao linfoma mediastino stent endovascular dexametasona trombose cateter",
  critico: {
    tempo: "Estridor/confusão: stent urgente",
    texto: "Estridor, edema de laringe, confusão/rebaixamento ou hipotensão = SVCS grave: cabeceira elevada, O₂, via aérea, e stent endovascular urgente. Nos demais: obter diagnóstico histológico antes de corticoide ou radioterapia."
  },
  alarmes: [
    "Estridor, rouquidão súbita, dispneia em repouso (edema de laringe/compressão traqueal)",
    "Confusão, sonolência, cefaleia intensa, síncope (edema cerebral)",
    "Hipotensão ou síncope ao abaixar-se",
    "Piora rápida em horas ou dias",
    "Ortopneia importante"
  ],
  condutaInicial: [
    "Cabeceira elevada, O₂ suplementar, monitor",
    "Avaliar via aérea: estridor → anestesia/via aérea difícil (intubação acordada se necessário, tubo menor)",
    "Acessos venosos em membros inferiores (evitar membros superiores)",
    "Angiotomografia de tórax com contraste (injeção em membro inferior se possível)",
    "Grave (estridor, edema cerebral, instabilidade): radiologia intervencionista para stent endovascular urgente",
    "Não grave: biópsia antes de corticoide e radioterapia (linfoma pode ficar sem diagnóstico após corticoide)",
    "Trombose associada a cateter: anticoagulação; considerar retirada do cateter"
  ],
  fataisExcluir: [
    "Obstrução de via aérea",
    "Edema cerebral",
    "Tamponamento cardíaco / derrame pericárdico (massa mediastinal)",
    "Tromboembolismo pulmonar associado"
  ],
  proximaDecisao: "Com diagnóstico histológico: tratar a neoplasia (quimioterapia em linfoma e carcinoma de pequenas células; radioterapia em outros). Stent para sintomas graves ou falha. Trombose: anticoagular por pelo menos 3 meses (enquanto houver cateter).",
  clinica: {
    anamnese: [
      "Edema de face, pescoço e braços; sensação de cabeça cheia, piora ao deitar ou abaixar",
      "Dispneia, tosse, rouquidão, disfagia",
      "Cefaleia, tontura, alteração visual, confusão",
      "Tabagismo, perda de peso, febre, sudorese (linfoma)",
      "Cateter venoso central, marca-passo, cateter de hemodiálise"
    ],
    exameFisico: [
      "Edema e pletora facial, edema de membros superiores",
      "Veias distendidas no pescoço e circulação colateral na parede torácica",
      "Estridor, cianose",
      "Nível de consciência, fundo de olho (papiledema)",
      "Linfonodomegalia supraclavicular (sítio de biópsia)"
    ],
    diferenciais: [
      { dx: "Insuficiência cardíaca direita / tamponamento", pista: "Edema de membros inferiores, pulso paradoxal, sem colaterais torácicas" },
      { dx: "Angioedema", pista: "Instalação rápida, urticária, IECA" },
      { dx: "Trombose venosa de membro superior isolada", pista: "Edema unilateral sem face" }
    ],
    gravidade: [
      "Classificação de Yu (2008): grau 0 assintomático (só imagem); 1 leve (edema de cabeça/pescoço, pletora); 2 moderado (edema com prejuízo funcional: disfagia leve, tosse, distúrbio visual); 3 grave (edema cerebral leve, edema laríngeo leve ou reserva cardíaca diminuída); 4 risco de vida (edema cerebral significativo, edema de laringe com estridor, comprometimento hemodinâmico); 5 fatal",
      "Graus 3–4: intervenção urgente (stent)"
    ]
  },
  exames: [
    {
      nome: "Angiotomografia de tórax",
      pedido: "Tomografia de tórax com contraste (fase venosa) — suspeita de síndrome da veia cava superior. Injetar em membro inferior se possível.",
      porQue: "Confirma obstrução, causa (massa × trombo), colaterais e planeja stent/biópsia.",
      esperar: "—",
      interpretacao: "Massa mediastinal com compressão; trombo intraluminal relacionado a cateter.",
      limitacoes: "Contraste; decúbito pode não ser tolerado (fazer com cabeceira elevada se possível)."
    },
    {
      nome: "Diagnóstico histológico",
      pedido: "Biópsia do sítio mais acessível (linfonodo supraclavicular, broncoscopia, punção guiada por TC, mediastinoscopia). Citologia de derrame pleural se presente.",
      porQue: "Define tratamento (linfoma e pequenas células respondem rápido a quimioterapia).",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Corticoide antes da biópsia pode impedir o diagnóstico de linfoma."
    },
    {
      nome: "Laboratório",
      pedido: "Hemograma, creatinina, eletrólitos, LDH, ácido úrico, cálcio, TP/INR, TTPa, beta-hCG e alfafetoproteína em homem jovem (tumor germinativo).",
      porQue: "Preparo de procedimento, risco de lise tumoral, marcadores.",
      esperar: "—",
      interpretacao: "LDH muito alta sugere linfoma.",
      limitacoes: "—"
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma transtorácico — massa mediastinal, avaliar derrame pericárdico.",
      porQue: "Tamponamento associado.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Stent endovascular",
      linha: "l1",
      dose: "—",
      via: "Radiologia intervencionista",
      intervalo: "—",
      duracao: "Alívio em 24–72 h",
      monitorizacao: "Sintomas, sangramento",
      contraindicacoes: "—",
      ajustes: "Indicado em sintomas graves (graus 3–4), falha do tratamento oncológico ou tumor pouco responsivo. Anticoagulação/antiagregação após conforme serviço"
    },
    {
      droga: "Dexametasona",
      linha: "adj",
      dose: "4 mg (ou conforme oncologia, 8–16 mg/dia)",
      via: "IV ou VO",
      intervalo: "6/6 h",
      duracao: "Curta",
      monitorizacao: "Glicemia",
      contraindicacoes: "Antes da biópsia em suspeita de linfoma (exceto se risco de vida)",
      ajustes: "Útil em linfoma e timoma, e no edema pós-radioterapia; benefício incerto em outros tumores"
    },
    {
      droga: "Enoxaparina (trombose associada)",
      linha: "l1",
      dose: "1 mg/kg",
      via: "SC",
      intervalo: "12/12 h",
      duracao: "≥ 3 meses e enquanto houver cateter",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo, plaquetas < 50.000/mm³",
      ajustes: "ClCr < 30: 1 mg/kg 1×/dia. Anticoagulação de rotina sem trombo não é indicada"
    },
    {
      droga: "Furosemida",
      linha: "adj",
      dose: "20–40 mg",
      via: "IV",
      intervalo: "Dose única ou 12/12 h",
      duracao: "Curta",
      monitorizacao: "PA, função renal",
      contraindicacoes: "Hipovolemia",
      ajustes: "Uso comum, evidência fraca"
    }
  ],
  destino: {
    agora: ["Cabeceira elevada, O₂, avaliação da via aérea", "Grave: stent endovascular urgente"],
    reavaliar: ["Via aérea e consciência de 2/2 h"],
    alta: ["—"],
    observacao: ["—"],
    internacao: ["Todos os casos sintomáticos para diagnóstico e tratamento", "UTI: estridor, edema cerebral, instabilidade"],
    transferencia: ["Sem radiologia intervencionista, oncologia ou cirurgia torácica: regulação urgente"]
  },
  prescricao: {
    hospitalar: "SÍNDROME DA VEIA CAVA SUPERIOR — ADULTO (peso: ___ kg)\n1. Dieta conforme aceitação; zero se procedimento.\n2. Cabeceira elevada 45°. O₂ para SpO₂ ≥ 92%.\n3. Acesso venoso em membro inferior; evitar punções em membros superiores.\n4. Monitor, oximetria contínua.\n5. Se trombose confirmada: enoxaparina 1 mg/kg (___ mg) SC de 12/12 h.\n6. Se estridor/edema cerebral ou após biópsia (linfoma/timoma): dexametasona 4 mg IV de 6/6 h.\n7. Furosemida 20 mg IV de 12/12 h se edema importante e normovolêmico (opcional).\n8. Glicemia capilar de 6/6 h se corticoide.\n9. Controles: FR, SpO₂, nível de consciência de 2/2 h; comunicar estridor, confusão ou queda de PA.\n10. Solicitar: angiotomografia de tórax, biópsia, radiologia intervencionista e oncologia.",
    ambulatorial: "Não se aplica ao manejo inicial: a SVCS sintomática deve ser avaliada em hospital."
  },
  orientacoesRetorno: [
    "Dormir com a cabeceira elevada e evitar abaixar a cabeça",
    "Voltar imediatamente se: falta de ar que piora, chiado ao respirar, rouquidão nova, confusão, dor de cabeça forte ou desmaio",
    "Seguir o tratamento oncológico e o anticoagulante como indicado"
  ],
  fontes: [
    "Yu JB et al. — Superior vena cava syndrome: a proposed classification system and algorithm for management (J Thorac Oncol, 2008)",
    "Wilson LD, Detterbeck FC, Yahalom J — Superior vena cava syndrome with malignant causes (NEJM, 2007)",
    "ASCO — Venous Thromboembolism Prophylaxis and Treatment in Patients With Cancer: Guideline Update (Key et al., 2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
