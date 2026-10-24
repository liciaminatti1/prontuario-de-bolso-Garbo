// Hepatite aguda e insuficiência hepática aguda
registrarFicha({
  id: "hepatite-aguda-insuficiencia-hepatica",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hepatite aguda e insuficiência hepática aguda",
  resumo: "Elevação aguda de transaminases (geralmente > 10× LSN) com ou sem icterícia. Insuficiência hepática aguda: INR ≥ 1,5 + encefalopatia em paciente sem cirrose prévia, com doença há < 26 semanas — emergência com contato precoce com centro de transplante.",
  palavrasChave: "hepatite aguda insuficiencia hepatica aguda fulminante falencia hepatica transaminases tgp alt inr encefalopatia paracetamol acetilcisteina nac hepatite a hepatite b hepatite e dili droga autoimune wilson transplante kings college",
  critico: {
    tempo: "INR ≥ 1,5: contato com transplante",
    texto: "Hepatite aguda com INR ≥ 1,5 ou qualquer confusão mental = possível insuficiência hepática aguda: internar, iniciar acetilcisteína (paracetamol ou causa indefinida) e contatar a central/centro de transplante no mesmo dia."
  },
  alarmes: [
    "INR ≥ 1,5 (ou TP < 50%) em hepatite aguda",
    "Qualquer alteração de consciência, sonolência, inversão do sono",
    "Hipoglicemia",
    "Icterícia progressiva com transaminases caindo (sinal de necrose maciça, não melhora)",
    "Ingestão de paracetamol (qualquer dose intencional ou supraterapêutica repetida)",
    "Acidose (pH < 7,3), lactato alto, insuficiência renal",
    "Gestante no 3º trimestre (esteatose aguda da gestação, HELLP)"
  ],
  condutaInicial: [
    "Confirmar padrão hepatocelular: TGP/TGO muito elevadas, bilirrubinas, fosfatase alcalina, GGT",
    "TP/INR, glicemia, gasometria com lactato, creatinina, hemograma, amônia arterial se disponível",
    "Nível sérico de paracetamol em todos, mesmo sem história de ingestão",
    "Sorologias: anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV (e HCV-RNA), anti-HEV IgM; beta-hCG em mulheres",
    "Revisar todos os medicamentos, fitoterápicos, suplementos e chás (lesão hepática induzida por droga)",
    "INR ≥ 1,5 ou encefalopatia: internar, acetilcisteína IV (ver tabela), glicemia de 1/1–2/2 h, contato com centro de transplante",
    "Suspender drogas hepatotóxicas e sedativos"
  ],
  fataisExcluir: [
    "Intoxicação por paracetamol (tratar mesmo com nível indetectável se tardia e com lesão hepática)",
    "Hepatite isquêmica (choque, IC): tratar a causa hemodinâmica",
    "Síndrome de Budd-Chiari (dor, ascite, hepatomegalia)",
    "Doença de Wilson (jovem, hemólise, fosfatase alcalina baixa)",
    "Esteatose aguda da gestação / HELLP",
    "Hepatite herpética (febre, leucopenia, imunossuprimido): aciclovir empírico",
    "Intoxicação por cogumelos (Amanita)"
  ],
  proximaDecisao: "Hepatite aguda sem coagulopatia e sem encefalopatia → manejo ambulatorial com TP/INR e transaminases em 48–72 h até queda. INR ≥ 1,5 sem encefalopatia (lesão hepática aguda grave) → internar e vigiar. Encefalopatia → UTI e avaliação para transplante (critérios do King's College).",
  clinica: {
    anamnese: [
      "Início dos sintomas: mal-estar, náusea, colúria, icterícia, dor em hipocôndrio direito",
      "Paracetamol (dose total, horário, uso repetido), álcool, jejum",
      "Medicamentos nos últimos 3–6 meses: antibióticos (amoxicilina-clavulanato), isoniazida, anticonvulsivantes, AINE, estatinas, anabolizantes, fitoterápicos e chás",
      "Exposição: água/alimento contaminado (A, E), sexual ou parenteral (B, C), viagens",
      "Cogumelos silvestres, doenças autoimunes, história familiar de hepatopatia",
      "Hipotensão recente, IC, gestação"
    ],
    exameFisico: [
      "Icterícia, hepatimetria (fígado pequeno = mau prognóstico), dor à palpação",
      "Flapping, confusão, sonolência (graduar West Haven)",
      "Ascite, estigmas de hepatopatia crônica (sugerem doença crônica agudizada)",
      "Anel de Kayser-Fleischer, hemólise (Wilson)",
      "Sinais de hipertensão intracraniana na IHA avançada: hipertensão, bradicardia, pupilas"
    ],
    diferenciais: [
      { dx: "Hepatite viral aguda (A, B, E)", pista: "Pródromo viral, exposição, sorologias IgM" },
      { dx: "Lesão hepática induzida por droga", pista: "Medicamento novo nos últimos meses; diagnóstico de exclusão" },
      { dx: "Paracetamol", pista: "Transaminases muito altas (> 3.000), bilirrubina pouco elevada no início" },
      { dx: "Hepatite isquêmica", pista: "Choque recente, queda rápida das transaminases em dias" },
      { dx: "Coledocolitíase", pista: "Dor biliar; transaminases sobem e caem rápido; via biliar dilatada" },
      { dx: "Hepatite autoimune", pista: "Mulher, FAN/anti-músculo liso, IgG alta" },
      { dx: "Hepatite alcoólica", pista: "Etilismo pesado, TGO/TGP > 2, TGO raramente > 300–400" }
    ],
    gravidade: [
      "Hepatite aguda: INR < 1,5, sem encefalopatia",
      "Lesão hepática aguda grave: INR ≥ 1,5 sem encefalopatia",
      "Insuficiência hepática aguda: INR ≥ 1,5 + encefalopatia, sem cirrose, < 26 semanas",
      "Hiperaguda (< 7 dias: paracetamol, hepatite A) tem melhor sobrevida espontânea; subaguda (> 4 semanas) pior"
    ]
  },
  exames: [
    {
      nome: "Função e lesão hepática",
      pedido: "TGO, TGP, fosfatase alcalina, GGT, bilirrubinas total e frações, albumina, TP/INR, glicemia, amônia (arterial, se disponível), gasometria venosa com lactato, fósforo.",
      porQue: "Definir padrão e gravidade.",
      esperar: "Hepatocelular: TGP > 10× LSN.",
      interpretacao: "INR é o melhor marcador de função. Fósforo alto e lactato alto pioram prognóstico na IHA por paracetamol.",
      limitacoes: "Transaminases caindo com INR subindo = piora, não melhora."
    },
    {
      nome: "Etiologia",
      pedido: "Paracetamol sérico. Anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV e HCV-RNA, anti-HEV IgM, anti-HIV. Beta-hCG. FAN, anti-músculo liso, IgG. Ceruloplasmina (se < 40 anos). Toxicológico conforme história.",
      porQue: "Tratamentos específicos mudam desfecho.",
      esperar: "—",
      interpretacao: "Anti-HBc IgM positivo = hepatite B aguda (ou reativação). HBsAg pode já estar negativo na forma fulminante.",
      limitacoes: "Anti-HEV pouco disponível; pedir se gestante, transplantado ou hepatopata."
    },
    {
      nome: "Imagem",
      pedido: "Ultrassonografia de abdome com Doppler de veias hepáticas e porta — hepatite aguda grave.",
      porQue: "Via biliar, Budd-Chiari, trombose portal, sinais de cirrose, neoplasia infiltrativa.",
      esperar: "—",
      interpretacao: "Via biliar dilatada → causa obstrutiva (ver ficha ictericia).",
      limitacoes: "—"
    },
    {
      nome: "Outros",
      pedido: "Hemograma, creatinina, ureia, sódio, potássio, magnésio, hemoculturas se febre ou piora.",
      porQue: "Lesão renal, infecção (frequente na IHA), distúrbios eletrolíticos.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Acetilcisteína IV",
      linha: "l1",
      dose: "150 mg/kg em 1 h → 50 mg/kg em 4 h → 100 mg/kg em 16 h (ver ficha antidotos para diluição)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "21 h; prolongar (100 mg/kg em 16 h, repetido) enquanto INR alto ou transaminases subindo",
      monitorizacao: "Reação anafilactoide (urticária, broncoespasmo) — pausar e reiniciar mais lento",
      contraindicacoes: "—",
      ajustes: "Paracetamol: pelo nomograma ou sempre que houver lesão hepática com ingestão suspeita. IHA não relacionada a paracetamol: benefício em encefalopatia graus I–II (AASLD)"
    },
    {
      droga: "Glicose IV",
      linha: "l1",
      dose: "SG 10% em infusão contínua conforme glicemia",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Enquanto houver risco de hipoglicemia",
      monitorizacao: "Glicemia capilar de 1/1–2/2 h",
      contraindicacoes: "—",
      ajustes: "Hipoglicemia é frequente na IHA"
    },
    {
      droga: "Antiviral na hepatite B aguda grave",
      linha: "l1",
      dose: "Tenofovir (TDF) 300 mg 1×/dia ou entecavir 0,5 mg 1×/dia",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Conforme especialista (pelo menos até negativação do HBsAg)",
      monitorizacao: "Creatinina, HBsAg, HBV-DNA",
      contraindicacoes: "—",
      ajustes: "Indicar em INR ≥ 1,5, IHA ou curso prolongado (PCDT hepatite B). Ajuste renal"
    },
    {
      droga: "Aciclovir (suspeita de hepatite herpética)",
      linha: "adj",
      dose: "10 mg/kg",
      via: "IV em 1 h",
      intervalo: "8/8 h",
      duracao: "Até resultado da PCR para HSV",
      monitorizacao: "Creatinina, hidratação",
      contraindicacoes: "—",
      ajustes: "Ajuste renal. Pensar em gestante, imunossuprimido, febre alta com transaminases muito altas"
    },
    {
      droga: "Plasma fresco congelado",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não corrigir INR de rotina: atrapalha a avaliação prognóstica e sobrecarrega volume",
      ajustes: "Usar só em sangramento ativo ou antes de procedimento invasivo"
    },
    {
      droga: "Sedativos (benzodiazepínicos)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Pioram e mascaram a encefalopatia",
      ajustes: "Encefalopatia graus III–IV: intubação para proteção de via aérea"
    }
  ],
  destino: {
    agora: [
      "Hepatite aguda com INR ≥ 1,5 ou encefalopatia: internar e contatar centro de transplante (Central Estadual de Transplantes)",
      "Paracetamol: acetilcisteína sem esperar o nível se ingestão grande ou lesão hepática presente"
    ],
    reavaliar: [
      "INR, glicemia, lactato, creatinina, consciência a cada 6–12 h",
      "Critérios do King's College a cada avaliação"
    ],
    alta: [
      "Hepatite aguda sem coagulopatia, sem encefalopatia, tolerando dieta",
      "TP/INR e transaminases em 48–72 h na UBS até tendência clara de queda; depois semanal",
      "Notificar hepatites virais (SINAN)"
    ],
    observacao: ["Lesão hepática aguda com INR limítrofe: repetir INR em 12–24 h antes de decidir alta"],
    internacao: ["INR ≥ 1,5, encefalopatia, hipoglicemia, vômitos incoercíveis, bilirrubina em ascensão rápida", "UTI: encefalopatia grau ≥ II, instabilidade, lesão renal, acidose"],
    transferencia: ["IHA: transferir cedo para hospital com transplante hepático (antes de encefalopatia grau III, que torna o transporte arriscado)"]
  },
  prescricao: {
    hospitalar: "INSUFICIÊNCIA HEPÁTICA AGUDA / LESÃO HEPÁTICA AGUDA GRAVE — ADULTO (peso: ___ kg)\n1. Dieta oral se consciente (proteína normal, 1,2–1,5 g/kg/dia); dieta zero se encefalopatia grau ≥ III.\n2. Cabeceira a 30°, monitor, oximetria, acesso venoso.\n3. Acetilcisteína 100 mg/mL (paracetamol ou causa indefinida):\n   - 150 mg/kg (___ mL) + SG 5% 200 mL IV em 1 h;\n   - depois 50 mg/kg (___ mL) + SG 5% 500 mL IV em 4 h;\n   - depois 100 mg/kg (___ mL) + SG 5% 1.000 mL IV em 16 h; manter este último ritmo se INR alto ou transaminases subindo.\n4. SG 10% IV a 40–80 mL/h conforme glicemia (evitar hipoglicemia e hiperglicemia acentuada); se glicemia < 70: glicose 50% 50 mL IV.\n5. Cristaloide para manter euvolemia (PAM ≥ 65 mmHg); evitar soro hipotônico.\n6. Omeprazol 40 mg IV 1×/dia (profilaxia de úlcera de estresse).\n7. Se suspeita de HSV: aciclovir 10 mg/kg IV em 1 h de 8/8 h (ajuste renal).\n8. NÃO prescrever benzodiazepínicos, AINE, paracetamol (exceto se já em NAC por outra causa, discutir), nem plasma para corrigir INR.\n9. Profilaxia de TEV mecânica.\n10. Exames: TP/INR, glicemia, lactato, gasometria, creatinina, eletrólitos, fósforo de 12/12 h; hemoculturas se febre ou piora.\n11. Controles: glicemia de 2/2 h; Glasgow e grau de encefalopatia de 4/4 h; diurese. Comunicar confusão, Glasgow em queda, glicemia < 70, PAM < 65.\n12. Contato com centro de transplante hepático: data/hora ___ , responsável ___ .",
    ambulatorial: "HEPATITE AGUDA SEM SINAIS DE GRAVIDADE\nSOLICITAÇÕES (retorno em 48–72 h)\n1. TP/INR, TGO, TGP, bilirrubinas, glicemia, creatinina.\n2. Anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV, anti-HIV (se ainda não colhidos).\n\nORIENTAÇÕES\n- Repouso conforme tolerância; alimentação normal.\n- Não tomar paracetamol, álcool, chás, suplementos ou remédios novos sem orientação.\n- Para náusea: ondansetrona 4 mg, 1 comprimido até de 8 em 8 horas se necessário."
  },
  orientacoesRetorno: [
    "Não tomar bebida alcoólica, paracetamol, chás, fitoterápicos ou suplementos até liberação médica",
    "Voltar imediatamente se: sonolência, confusão, mudança de comportamento, sangramento de gengiva ou nariz, vômitos que não param, desmaio ou tremor nas mãos",
    "Fazer os exames de controle no dia marcado: é o exame de sangue (TP) que mostra se o fígado está piorando",
    "Hepatite A ou E: lavar bem as mãos após usar o banheiro e antes de preparar comida; contatos podem precisar de vacina",
    "Hepatite B: usar preservativo; parceiros e moradores devem testar e vacinar"
  ],
  tabelas: [
    {
      titulo: "Critérios do King's College (indicação de transplante na IHA)",
      colunas: ["Causa", "Critérios"],
      linhas: [
        ["Paracetamol", "pH arterial < 7,3 após ressuscitação volêmica OU todos: INR > 6,5 + creatinina > 3,4 mg/dL + encefalopatia grau III–IV (lactato > 3,5 mmol/L após ressuscitação reforça)"],
        ["Outras causas", "INR > 6,5 OU 3 de 5: idade < 10 ou > 40 anos; causa não A/não B, halotano ou droga; icterícia > 7 dias antes da encefalopatia; INR > 3,5; bilirrubina > 17,5 mg/dL"]
      ],
      nota: "Os critérios têm boa especificidade e sensibilidade limitada: não esperar preenchê-los para contatar o centro de transplante."
    },
    {
      titulo: "Encefalopatia (West Haven)",
      colunas: ["Grau", "Clínica"],
      linhas: [
        ["I", "Alteração discreta de atenção, euforia ou ansiedade, inversão do sono"],
        ["II", "Letargia, desorientação no tempo, comportamento inadequado, flapping"],
        ["III", "Sonolência a semiestupor, responde a estímulos, confusão grosseira"],
        ["IV", "Coma"]
      ]
    }
  ],
  fontes: [
    "AASLD — Position Paper: The Management of Acute Liver Failure, Update (2011)",
    "EASL — Clinical Practical Guidelines on the management of acute (fulminant) liver failure (2017)",
    "ACG — Clinical Guideline: Diagnosis and Management of Idiosyncratic Drug-Induced Liver Injury (2021)",
    "Ministério da Saúde — PCDT Hepatite B e Coinfecções (2023)",
    "O'Grady JG et al. — Early indicators of prognosis in fulminant hepatic failure (Gastroenterology, 1989)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
