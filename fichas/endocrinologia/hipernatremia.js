// Hipernatremia
registrarFicha({
  id: "hipernatremia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hipernatremia",
  resumo: "Sódio sérico > 145 mEq/L: déficit de água livre. Comum em idosos acamados, sem acesso à água, com febre, diarreia, diurese osmótica (hiperglicemia) ou diabetes insípido. Repor água livre devagar na crônica.",
  palavrasChave: "hipernatremia sodio alto desidratacao hipertonica deficit de agua livre diabetes insipido desmopressina idoso acamado soro glicosado agua livre",
  critico: {
    tempo: "Volume antes, água livre depois",
    texto: "Se choque ou hipovolemia: SF 0,9% primeiro. Depois repor água livre (SG 5% IV ou água por via enteral). Crônica: baixar no máximo 10–12 mEq/L em 24 h."
  },
  alarmes: [
    "Na > 160 mEq/L",
    "Rebaixamento, convulsão",
    "Hipovolemia com choque, LRA",
    "Diurese > 3 L/dia com urina diluída (diabetes insípido)",
    "Queda do Na > 12 mEq/L em 24 h na hipernatremia crônica"
  ],
  condutaInicial: [
    "Avaliar volemia, glicemia, função renal, diurese",
    "Hipovolemia/choque: SF 0,9% em bolus até estabilizar",
    "Calcular déficit de água livre e planejar reposição em 48 h (crônica) ou mais rápida (aguda < 48 h)",
    "Preferir via oral/enteral (água) quando possível; IV: SG 5%",
    "Somar as perdas contínuas (febre, diarreia, diurese)",
    "Na de 4/4 h a 6/6 h no início"
  ],
  fataisExcluir: [
    "Desidratação grave com choque",
    "Hiperglicemia / estado hiperosmolar (ver ficha hiperglicemia)",
    "Diabetes insípido central (TCE, pós-neurocirurgia, morte encefálica)",
    "Hemorragia intracraniana (desidratação cerebral rápida)",
    "Sepse no idoso acamado"
  ],
  proximaDecisao: "Diurese alta com urina diluída (Osm U < 300) sem diurético → diabetes insípido: teste com desmopressina. Hipernatremia de idoso por baixa ingestão → corrigir e garantir oferta de água, investigar disfagia e infecção.",
  clinica: {
    anamnese: [
      "Acesso à água, sede, disfagia, demência, acamado",
      "Perdas: febre, diarreia, vômitos, queimaduras, sudorese",
      "Poliúria: glicemia, manitol, diurético, lítio (DI nefrogênico), TCE ou cirurgia de hipófise",
      "Administração de sódio: bicarbonato, salina hipertônica, dietas enterais"
    ],
    exameFisico: [
      "Volemia, PA postural, mucosas",
      "Nível de consciência, irritabilidade, mioclonias",
      "Peso (para cálculo)"
    ],
    diferenciais: [
      { dx: "Perda extrarrenal de água", pista: "Osm U alta (> 600–800), diurese baixa" },
      { dx: "Diurese osmótica", pista: "Glicemia alta, ureia alta (dieta proteica), manitol" },
      { dx: "Diabetes insípido central", pista: "Urina diluída; responde à desmopressina" },
      { dx: "Diabetes insípido nefrogênico", pista: "Urina diluída sem resposta à desmopressina; lítio, hipercalcemia, hipocalemia" },
      { dx: "Ganho de sódio", pista: "Hipervolemia, uso de bicarbonato ou salina hipertônica" }
    ],
    gravidade: [
      "Aguda (< 48 h) pode ser corrigida mais rápido (≈ 1 mEq/L/h)",
      "Crônica ou desconhecida: até 10–12 mEq/L em 24 h (≈ 0,5 mEq/L/h)",
      "Na > 160 com sintomas neurológicos: mortalidade alta"
    ]
  },
  exames: [
    {
      nome: "Laboratório",
      pedido: "Sódio, potássio, glicemia, ureia, creatinina, cálcio, osmolalidade sérica, hemograma.",
      porQue: "Gravidade, causas osmóticas e LRA.",
      esperar: "Ureia desproporcionalmente alta na desidratação.",
      interpretacao: "Hipercalcemia e hipocalemia causam DI nefrogênico.",
      limitacoes: "—"
    },
    {
      nome: "Osmolalidade urinária e diurese",
      pedido: "Osmolalidade urinária, sódio urinário, diurese de 24 h (ou horária).",
      porQue: "Separar perda renal de extrarrenal e DI.",
      esperar: "Osm U > 600 na perda extrarrenal.",
      interpretacao: "Osm U < 300 com hipernatremia: DI. Osm U 300–600: DI parcial ou diurese osmótica.",
      limitacoes: "Diuréticos alteram."
    }
  ],
  tratamento: [
    {
      droga: "Soro fisiológico 0,9%",
      linha: "l1",
      dose: "500–1.000 mL em bolus se hipovolemia/choque",
      via: "IV",
      intervalo: "Até estabilidade hemodinâmica",
      duracao: "Fase inicial",
      monitorizacao: "PA, diurese",
      contraindicacoes: "Hipervolemia",
      ajustes: "Corrige a volemia antes da água livre"
    },
    {
      droga: "Água livre (água VO/SNE ou SG 5% IV)",
      linha: "l1",
      dose: "Déficit = ACT × (Na/140 − 1); ACT = peso × 0,6 (homem), 0,5 (mulher e homem idoso), 0,45 (mulher idosa). Repor em 48 h + perdas contínuas",
      via: "VO, SNE (preferida) ou IV",
      intervalo: "Contínuo ou fracionado (ex.: água 200 mL por SNE de 4/4 h)",
      duracao: "Até Na 140–145",
      monitorizacao: "Na de 4/4 h a 6/6 h; glicemia (SG)",
      contraindicacoes: "—",
      ajustes: "Fórmula de Adrogué-Madias: variação do Na por 1 L de soro = (Na do soro − Na sérico) ÷ (ACT + 1). SG 5% tem Na 0; NaCl 0,45% tem 77"
    },
    {
      droga: "NaCl 0,45% (salina hipotônica)",
      linha: "alt",
      dose: "Conforme cálculo",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "Na",
      contraindicacoes: "—",
      ajustes: "Útil quando há também déficit de volume ou hiperglicemia com SG"
    },
    {
      droga: "Desmopressina (DDAVP) — DI central",
      linha: "l1",
      dose: "1–2 µg IV/SC ou 10 µg intranasal; oral 0,1–0,2 mg",
      via: "IV, SC, intranasal ou VO",
      intervalo: "8/8 h a 12/12 h conforme diurese",
      duracao: "Conforme causa",
      monitorizacao: "Na de 6/6 h, diurese (risco de hiponatremia)",
      contraindicacoes: "DI nefrogênico (sem efeito)",
      ajustes: "DI nefrogênico: tiazídico, restrição de sódio, suspender lítio se possível (nefrologia)"
    }
  ],
  destino: {
    agora: ["Volume se hipovolêmico; plano de água livre com meta de Na"],
    reavaliar: ["Na de 4/4 h a 6/6 h nas primeiras 24 h", "Balanço hídrico"],
    alta: ["Na normalizado ou quase, aceitando água VO, cuidador orientado"],
    observacao: ["Na 146–150 leve com causa corrigível e via oral"],
    internacao: ["Na > 150 ou sintomático, incapaz de beber, DI"],
    transferencia: ["—"]
  },
  prescricao: {
    hospitalar: "HIPERNATREMIA CRÔNICA — ADULTO (peso ___ kg; Na ___ mEq/L)\nDéficit de água livre = ___ kg × ___ (0,6 / 0,5 / 0,45) × (Na/140 − 1) = ___ L — repor em 48 h + perdas.\n1. Dieta pastosa/assistida; oferecer água VO ou água livre 200 mL por SNE de 4/4 h (se SNE).\n2. Se hipotensão: SF 0,9% 500 mL IV em 30 min; repetir até PA estável.\n3. SG 5% ___ mL/h IV (déficit ÷ 48 h + perdas estimadas; ex.: 3 L ÷ 48 h ≈ 60 mL/h + perdas). Ajustar pelo Na.\n4. Meta: queda de Na ≤ 10–12 mEq/L em 24 h.\n5. Antitérmico se febre: dipirona 1 g IV 6/6 h SN.\n6. Controles: Na de 6/6 h nas primeiras 24 h, depois 12/12 h; glicemia capilar de 6/6 h; diurese e balanço hídrico."
  },
  orientacoesRetorno: [
    "Oferecer água várias vezes ao dia ao idoso ou acamado, mesmo sem pedir",
    "Voltar se sonolência, confusão, pouca urina ou febre com diarreia",
    "Exame de sódio em 48–72 h na UBS"
  ],
  fontes: [
    "Adrogué HJ, Madias NE — Hypernatremia (N Engl J Med, 2000)",
    "Sterns RH — Disorders of plasma sodium: causes, consequences, and correction (N Engl J Med, 2015)",
    "Christ-Crain M et al. — Diabetes insipidus (Nat Rev Dis Primers, 2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
