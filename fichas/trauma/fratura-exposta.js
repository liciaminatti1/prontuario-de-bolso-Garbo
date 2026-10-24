// Fratura exposta
registrarFicha({
  id: "fratura-exposta",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  titulo: "Fratura exposta",
  resumo: "Fratura com comunicação entre o foco e o meio externo. Antibiótico na 1ª hora, tétano, curativo estéril, imobilização e desbridamento cirúrgico precoce. Classificação de Gustilo-Anderson.",
  palavrasChave: "fratura exposta aberta gustilo anderson antibiotico cefazolina ceftriaxona gentamicina clindamicina tetano desbridamento osteomielite ferida osso exposto",
  critico: {
    tempo: "Antibiótico IV em até 1 h",
    texto: "Toda ferida próxima a uma fratura é fratura exposta até prova em contrário. Cefazolina IV na 1ª hora (associar cobertura para Gram-negativos no tipo III), tétano e ortopedia."
  },
  alarmes: [
    "Sangramento ativo importante ou membro sem pulso (Gustilo IIIC)",
    "Contaminação grosseira: terra, ambiente rural, esgoto, água doce/salgada",
    "Esmagamento, ferimento por arma de fogo de alta energia, explosão",
    "Síndrome compartimental (fratura exposta não exclui!)",
    "Tempo prolongado até atendimento",
    "Imunossupressão, diabetes, tabagismo (maior risco de infecção)"
  ],
  condutaInicial: [
    "xABCDE; controlar hemorragia com compressão (torniquete se necessário)",
    "Exame neurovascular distal e documentação",
    "Antibiótico IV o mais cedo possível (meta: até 1 h da chegada)",
    "Profilaxia de tétano conforme histórico (fratura exposta = ferimento de alto risco; ver ficha tetano-profilaxia)",
    "Remover sujeira grosseira e corpos estranhos visíveis; irrigar com SF 0,9%; NÃO explorar a ferida no PS",
    "Fotografar a ferida (evita reabrir o curativo várias vezes); cobrir com gaze estéril umedecida em SF 0,9%",
    "Alinhar e imobilizar com tala; reexaminar pulsos",
    "Não reintroduzir osso exposto ativamente (ele pode retornar ao alinhar — avisar o ortopedista)",
    "Analgesia IV; dieta zero; ortopedia para desbridamento e estabilização"
  ],
  fataisExcluir: [
    "Lesão vascular (IIIC) e isquemia",
    "Síndrome compartimental",
    "Gangrena gasosa / infecção necrotizante (contaminação com terra/fezes)",
    "Tétano",
    "Hemorragia significativa (fêmur, pelve exposta)"
  ],
  proximaDecisao: "Desbridamento cirúrgico idealmente em até 24 h (imediato se contaminação grosseira ou lesão vascular; em até 12 h para alta energia — BOAST 2017). Classificação definitiva de Gustilo é feita no centro cirúrgico.",
  clinica: {
    anamnese: [
      "Mecanismo (energia), local (rural/urbano), hora do trauma",
      "Vacina antitetânica (doses e data da última)",
      "Alergia a penicilina/cefalosporina (tipo de reação)",
      "Comorbidades: diabetes, tabagismo, imunossupressão, vasculopatia"
    ],
    exameFisico: [
      "Tamanho da ferida, contaminação, tecido desvitalizado, osso visível",
      "Pulsos, perfusão, sensibilidade e motricidade distais",
      "Compartimentos (tensão, dor ao estiramento passivo)",
      "Pequena ferida puntiforme sobre fratura (de dentro para fora) também é exposta"
    ],
    diferenciais: [
      { dx: "Ferida sem comunicação com a fratura", pista: "Só o ortopedista no centro cirúrgico confirma; tratar como exposta" },
      { dx: "Articulação exposta (artrotomia traumática)", pista: "Ferida próxima à articulação; tratar como fratura exposta" }
    ],
    gravidade: [
      "Gustilo I: ferida < 1 cm, limpa, baixa energia",
      "Gustilo II: ferida 1–10 cm, sem lesão extensa de partes moles",
      "Gustilo IIIA: lesão extensa ou alta energia, mas cobertura óssea adequada",
      "Gustilo IIIB: perda de partes moles com exposição óssea e descolamento periosteal (precisa de retalho)",
      "Gustilo IIIC: lesão arterial que exige reparo",
      "Alta energia, contaminação grosseira, arma de fogo, ambiente rural e fratura segmentar contam como tipo III independentemente do tamanho da ferida"
    ]
  },
  exames: [
    {
      nome: "RX do membro",
      pedido: "RX de ___ em AP e perfil, incluindo articulações proximal e distal.",
      porQue: "Caracterizar a fratura, corpos estranhos, ar em partes moles.",
      esperar: "—",
      interpretacao: "Gás em partes moles distante da ferida após 24 h → suspeitar infecção por anaeróbios.",
      limitacoes: "—"
    },
    {
      nome: "Avaliação vascular",
      pedido: "Índice tornozelo-braquial / Doppler; angiotomografia se ITB < 0,9 ou pulsos assimétricos.",
      porQue: "Identificar Gustilo IIIC.",
      esperar: "—",
      interpretacao: "Lesão arterial → cirurgia vascular junto com a ortopedia.",
      limitacoes: "Sinais duros → centro cirúrgico sem esperar exame."
    },
    {
      nome: "Pré-operatório",
      pedido: "Hemograma, coagulograma, tipagem ABO/Rh, ureia, creatinina, glicemia, CK (esmagamento).",
      porQue: "Preparo cirúrgico e rabdomiólise.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Cultura da ferida na admissão não é recomendada."
    }
  ],
  tratamento: [
    {
      droga: "Cefazolina",
      linha: "l1",
      dose: "Adulto: 2 g (3 g se ≥ 120 kg) · Criança: 30 mg/kg (máx 2 g)",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Gustilo I–II: até 24 h após o fechamento da ferida · III: 72 h ou até 24 h após cobertura definitiva (o que ocorrer primeiro)",
      monitorizacao: "Reação alérgica",
      contraindicacoes: "Anafilaxia a beta-lactâmico",
      ajustes: "Reconstituir 1 g em 10 mL de água destilada; infundir em 3–5 min ou diluído em 100 mL SF 0,9% em 30 min. Ajuste renal se ClCr < 35"
    },
    {
      droga: "Ceftriaxona (associar no Gustilo III)",
      linha: "l1",
      dose: "Adulto: 2 g · Criança: 50 mg/kg (máx 2 g)",
      via: "IV",
      intervalo: "1 vez ao dia",
      duracao: "Mesma da cefazolina",
      monitorizacao: "—",
      contraindicacoes: "Neonato com hiperbilirrubinemia ou cálcio IV",
      ajustes: "ACS TQIP 2015: ceftriaxona isolada pode substituir cefazolina + gentamicina no tipo III. Alternativa: gentamicina 5 mg/kg IV 1 vez ao dia (criança 5–7,5 mg/kg/dia) com função renal monitorada"
    },
    {
      droga: "Clindamicina (alergia grave a beta-lactâmico)",
      linha: "alt",
      dose: "Adulto: 900 mg · Criança: 10 mg/kg (máx 900 mg)",
      via: "IV em 30 min",
      intervalo: "8/8 h",
      duracao: "Mesma do esquema principal",
      monitorizacao: "Diarreia (C. difficile)",
      contraindicacoes: "—",
      ajustes: "Tipo III: associar gentamicina (ou aztreonam) para Gram-negativos"
    },
    {
      droga: "Cobertura para Clostridium (contaminação com terra, fezes, ambiente rural)",
      linha: "adj",
      dose: "Metronidazol: adulto 500 mg; criança 10 mg/kg (máx 500 mg) · ou penicilina G cristalina em dose alta",
      via: "IV",
      intervalo: "Metronidazol 8/8 h",
      duracao: "Mesma do esquema principal",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Associar ao esquema de base"
    },
    {
      droga: "Profilaxia de tétano (vacina ± IGHAT/SAT)",
      linha: "l1",
      dose: "Conforme histórico vacinal",
      via: "IM",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Fratura exposta = ferimento de alto risco. Ver ficha tetano-profilaxia"
    }
  ],
  destino: {
    agora: [
      "Ortopedia para desbridamento e estabilização; cirurgia vascular se IIIC"
    ],
    reavaliar: [
      "Exame neurovascular e compartimentos a cada 1–2 h até a cirurgia"
    ],
    alta: [
      "Não há alta do PS: toda fratura exposta vai para centro cirúrgico (exceto falanges distais selecionadas, conforme ortopedia/mão)"
    ],
    observacao: ["—"],
    internacao: [
      "Todas: ortopedia; antibiótico IV"
    ],
    transferencia: [
      "Sem ortopedia: iniciar antibiótico e tétano, curativo e tala, e transferir sem esperar"
    ]
  },
  prescricao: {
    hospitalar: "FRATURA EXPOSTA (adulto; peso: ___ kg)\n1. Dieta zero (pré-operatório).\n2. Curativo estéril com gaze umedecida em SF 0,9%; não reabrir (foto anexada ao prontuário). Tala de imobilização.\n3. Cefazolina 2 g IV (diluída em 100 mL SF 0,9% em 30 min) AGORA e de 8/8 h.\n4. Se Gustilo III (alta energia, ferida > 10 cm, lesão extensa): ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min 1 vez ao dia (ou gentamicina 5 mg/kg IV 1 vez ao dia).\n5. Se contaminação com terra/fezes/ambiente rural: metronidazol 500 mg IV de 8/8 h.\n6. Alergia grave a beta-lactâmico: clindamicina 900 mg + SF 0,9% 100 mL IV de 8/8 h (+ gentamicina se tipo III).\n7. Profilaxia de tétano: vacina dT 0,5 mL IM ± IGHAT 250 UI IM (outro grupo muscular) conforme cartão vacinal.\n8. Dipirona 1 g + SF 0,9% 18 mL IV de 6/6 h.\n9. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV de 4/4 h se dor intensa.\n10. Controles: exame neurovascular distal de 1/1 h a 2/2 h; sinais vitais de 4/4 h.\n\nCRIANÇA (peso: ___ kg): cefazolina 30 mg/kg IV (máx 2 g) de 8/8 h; tipo III: + ceftriaxona 50 mg/kg IV (máx 2 g) 1 vez ao dia; metronidazol 10 mg/kg IV (máx 500 mg) de 8/8 h se contaminação com terra; dipirona 15 mg/kg IV (máx 1 g) de 6/6 h; morfina 0,05–0,1 mg/kg IV (máx 4 mg) se dor intensa."
  },
  orientacoesRetorno: [
    "Após a cirurgia: manter o curativo limpo e seco e o membro elevado",
    "Voltar imediatamente se: febre, pus ou cheiro ruim na ferida, vermelhidão que se espalha, dor que piora, dedos frios, roxos ou dormentes",
    "Não fumar (atrasa a consolidação e aumenta infecção)",
    "Completar a vacina antitetânica conforme orientação",
    "Retornos com ortopedia nas datas marcadas"
  ],
  tabelas: [
    {
      titulo: "Antibiótico na fratura exposta (ACS TQIP 2015 / EAST)",
      colunas: ["Tipo", "Esquema", "Duração"],
      linhas: [
        ["Gustilo I e II", "Cefazolina", "Até 24 h após o fechamento da ferida"],
        ["Gustilo III", "Ceftriaxona (ou cefazolina + gentamicina)", "72 h ou até 24 h após cobertura de partes moles"],
        ["Contaminação com terra/fezes", "Acrescentar cobertura para anaeróbios/Clostridium (metronidazol ou penicilina em dose alta)", "Idem"],
        ["Alergia grave a beta-lactâmico", "Clindamicina (+ gentamicina/aztreonam se tipo III)", "Idem"]
      ],
      nota: "Iniciar em até 1 h. Atraso > 3 h aumenta infecção."
    }
  ],
  fontes: [
    "ACS TQIP — Best Practices in the Management of Orthopaedic Trauma (2015)",
    "EAST — Prophylactic antibiotics in open fractures, atualização (2011)",
    "British Orthopaedic Association — BOAST: Open fractures (2017)",
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "Ministério da Saúde — Guia de Vigilância em Saúde: tétano acidental (2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
