// Lúpus eritematoso sistêmico: diagnóstico e seguimento ambulatorial
registrarFicha({
  id: "lupus-eritematoso-sistemico",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Lúpus eritematoso sistêmico: diagnóstico e seguimento na APS",
  resumo: "Suspeita, classificação (EULAR/ACR 2019) e acompanhamento ambulatorial do LES: hidroxicloroquina para todos, corticoide na menor dose, fotoproteção, rastreio de nefrite, risco cardiovascular, vacinas e planejamento de gestação. Manifestações graves: ver ficha lupus-grave.",
  palavrasChave: "lupus les lupus eritematoso sistemico fan anti dna anti sm complemento c3 c4 eular acr 2019 hidroxicloroquina retinopatia prednisona fotoprotecao nefrite lupica proteinuria anticorpo antifosfolipide gestacao lupus seguimento aps",
  critico: {
    tempo: "Urina e PA em toda consulta",
    texto: "Nefrite lúpica costuma ser silenciosa: urina tipo 1, relação proteína/creatinina, creatinina e PA em toda reavaliação. Sinal de órgão ameaçado (rim, SNC, citopenia grave, serosite) → ficha lupus-grave."
  },
  alarmes: [
    "Proteinúria nova, hematúria dismórfica, edema, HAS nova, creatinina subindo (nefrite — ver ficha lupus-grave)",
    "Convulsão, psicose, confusão, déficit neurológico",
    "Hemoglobina < 8 g/dL, plaquetas < 30.000/mm³ ou sangramento",
    "Dor torácica pleurítica com dispneia ou atrito pericárdico",
    "Febre em paciente em uso de imunossupressor ou prednisona (infecção é a principal causa de morte)",
    "Gestante com LES (alto risco: pré-eclâmpsia, perda fetal, bloqueio cardíaco congênito se anti-Ro)",
    "Trombose venosa ou arterial (síndrome antifosfolípide)"
  ],
  conduta: [
    "Suspeitar: mulher jovem com artrite, fotossensibilidade, eritema malar, úlceras orais, alopecia, serosite, citopenias, proteinúria ou febre sem causa",
    "Pedir FAN (HEp-2); FAN ≥ 1:80 é critério de entrada. FAN negativo praticamente afasta LES; FAN positivo isolado em baixo título é comum em pessoas saudáveis — não rotular",
    "FAN positivo + quadro sugestivo: anti-DNA, anti-Sm, C3, C4, hemograma, urina tipo 1, relação proteína/creatinina, creatinina, anticorpos antifosfolípides; encaminhar à reumatologia",
    "Classificar pelos critérios EULAR/ACR 2019 (≥ 10 pontos com pelo menos 1 critério clínico — tabela)",
    "Hidroxicloroquina para todos, sem contraindicação, por toda a vida (reduz surtos, dano e mortalidade); ≤ 5 mg/kg/dia de peso real",
    "Corticoide: na menor dose e menor tempo; manutenção ideal ≤ 5 mg/dia de prednisona, tentando suspender",
    "Poupadores de corticoide (metotrexato, azatioprina, micofenolato, belimumabe) conforme órgão: reumatologia",
    "Seguimento com reumatologia; na UBS: consulta a cada 3–6 meses (mais frequente se ativa) com PA, peso, exame de pele e articulações e exames de atividade",
    "Fotoproteção diária (FPS ≥ 30, chapéu), parar de fumar (reduz efeito da hidroxicloroquina), atividade física",
    "Risco cardiovascular e ósseo: lipídios, glicemia, PA; cálcio, vitamina D e densitometria se corticoide prolongado",
    "Vacinas: influenza, pneumocócicas, hepatite B, covid-19, HPV; herpes-zóster recombinante (CRIE); vacinas vivas só com liberação do especialista",
    "Contracepção: anticoncepcional com estrogênio é contraindicado se anticorpos antifosfolípides positivos ou doença ativa grave; preferir DIU (cobre ou levonorgestrel) ou progestágeno",
    "Gestação: planejar com doença inativa há ≥ 6 meses; manter hidroxicloroquina; suspender micofenolato, metotrexato e leflunomida antes; AAS em dose baixa a partir de 12 semanas; pré-natal de alto risco"
  ],
  exames: [
    "FAN (HEp-2) com título e padrão",
    "Anti-DNA nativo, anti-Sm, anti-Ro/SSA, anti-La/SSB, anti-RNP",
    "C3, C4 (baixos na atividade)",
    "Anticardiolipina IgG/IgM, anti-beta2-glicoproteína I, anticoagulante lúpico",
    "Seguimento a cada 3–6 meses: hemograma, creatinina, urina tipo 1, relação proteína/creatinina urinária, C3, C4, anti-DNA; TGO/TGP se imunossupressor",
    "Lipídios, glicemia/HbA1c anuais; 25-OH-vitamina D",
    "Exame oftalmológico (OCT e campimetria) basal no 1º ano de hidroxicloroquina e anual após 5 anos (antes se fator de risco: DRC, dose > 5 mg/kg, tamoxifeno, retinopatia)"
  ],
  diferenciais: [
    "Lúpus induzido por drogas (hidralazina, procainamida, isoniazida, anti-TNF) — anti-histona",
    "Artrite reumatoide, síndrome de Sjögren, doença mista do tecido conjuntivo, dermatomiosite",
    "Infecções: parvovírus B19, HIV, hepatites, chikungunya, tuberculose, endocardite",
    "Fibromialgia com FAN positivo em baixo título (sem doença)",
    "Linfoma, púrpura trombocitopênica imune"
  ],
  tratamento: [
    { droga: "Hidroxicloroquina", linha: "l1", dose: "200–400 mg/dia, sem passar de 5 mg/kg/dia de peso real", via: "VO", intervalo: "1×/dia (ou dividido)", duracao: "Por toda a vida, inclusive na gestação e amamentação", monitorizacao: "Exame oftalmológico (retinopatia), ECG se cardiopatia ou drogas que prolongam QT", contraindicacoes: "Retinopatia prévia, hipersensibilidade", ajustes: "DRC: reduzir dose. Pode haver hipoglicemia em diabéticos" },
    { droga: "Prednisona (atividade leve/moderada)", linha: "adj", dose: "Leve: ≤ 7,5 mg/dia; moderada: conforme reumatologista, com redução progressiva até ≤ 5 mg/dia", via: "VO", intervalo: "1×/dia pela manhã", duracao: "O menor tempo possível", monitorizacao: "PA, glicemia, peso, densidade óssea, infecção", contraindicacoes: "Infecção não controlada", ajustes: "Ivermectina antes de dose alta (estrongiloidíase). Cálcio + vitamina D" },
    { droga: "Metotrexato (artrite/pele refratárias)", linha: "alt", dose: "7,5–15 mg/semana, até 20–25 mg + ácido fólico 5 mg/semana", via: "VO", intervalo: "1 vez por SEMANA", duracao: "Conforme especialista", monitorizacao: "Hemograma, TGO/TGP, creatinina", contraindicacoes: "Gestação, ClCr < 30, hepatopatia", ajustes: "Indicação do reumatologista" },
    { droga: "Azatioprina", linha: "alt", dose: "1–2 mg/kg/dia", via: "VO", intervalo: "1×/dia", duracao: "Conforme especialista", monitorizacao: "Hemograma e TGO/TGP", contraindicacoes: "Uso de alopurinol/febuxostate (toxicidade grave)", ajustes: "Compatível com gestação. Indicação do reumatologista" },
    { droga: "Anticoncepcional combinado com estrogênio", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Anticorpos antifosfolípides positivos ou desconhecidos, doença ativa grave, trombose prévia", ajustes: "Preferir DIU ou progestágeno isolado" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES — SUSPEITA/SEGUIMENTO DE LES\n1. FAN (HEp-2), anti-DNA nativo, anti-Sm, anti-Ro, anti-La, anti-RNP, C3, C4.\n2. Anticardiolipina IgG e IgM, anti-beta2-glicoproteína I, anticoagulante lúpico.\n3. Hemograma, VHS, PCR, creatinina, TGO, TGP, urina tipo 1, relação proteína/creatinina urinária.\n4. Colesterol total e frações, triglicérides, glicemia, 25-OH-vitamina D.\n5. Encaminhamento à reumatologia: suspeita/diagnóstico de lúpus eritematoso sistêmico.\n6. Encaminhamento à oftalmologia: exame basal e seguimento para uso de hidroxicloroquina (OCT e campo visual).\n\nUSO ORAL\n7. Hidroxicloroquina 400 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido ao dia, após uma refeição. (Peso < 80 kg: 200 mg ao dia ou 400 mg em dias alternados para não passar de 5 mg/kg/dia.)\n8. Carbonato de cálcio 1.250 mg + colecalciferol 400 UI ---- 60 comprimidos (se corticoide prolongado)\n   Tomar 1 comprimido 2 vezes ao dia após as refeições.\n\nUSO TÓPICO\n9. Protetor solar FPS 30 ou maior: aplicar no rosto, pescoço e braços pela manhã e reaplicar a cada 2–3 horas se exposição ao sol."
  },
  orientacoesRetorno: [
    "A hidroxicloroquina é o remédio de base do lúpus e deve ser tomada todos os dias, mesmo quando estiver bem",
    "Usar protetor solar e chapéu todos os dias; o sol pode desencadear crises",
    "Não parar a prednisona de repente",
    "Não engravidar sem planejar com a equipe; usar anticoncepcional indicado pelo médico (evitar pílula com estrogênio se tiver anticorpo antifosfolípide)",
    "Procurar atendimento logo se: febre, urina com espuma ou escura, inchaço nas pernas ou no rosto, pressão alta, falta de ar, dor no peito, convulsão, confusão, manchas roxas ou sangramento",
    "Fazer exame de sangue e urina a cada 3–6 meses e exame de vista anual (após 5 anos de uso)"
  ],
  encaminhar: [
    "Reumatologia: todo caso suspeito ou confirmado (seguimento compartilhado)",
    "PS: sinais de manifestação grave — ver ficha lupus-grave",
    "Nefrologia: proteinúria ≥ 0,5 g/dia, hematúria dismórfica ou creatinina em ascensão",
    "Pré-natal de alto risco: toda gestante com LES ou anticorpo antifosfolípide",
    "Oftalmologia: rastreio de retinopatia por hidroxicloroquina"
  ],
  tabelas: [
    {
      titulo: "Critérios EULAR/ACR 2019 (entrada: FAN ≥ 1:80; LES = ≥ 10 pontos com ≥ 1 clínico)",
      colunas: ["Domínio", "Critério", "Pontos"],
      linhas: [
        ["Constitucional", "Febre", "2"],
        ["Hematológico", "Leucopenia / plaquetopenia / hemólise autoimune", "3 / 4 / 4"],
        ["Neuropsiquiátrico", "Delirium / psicose / convulsão", "2 / 3 / 5"],
        ["Mucocutâneo", "Alopecia não cicatricial / úlceras orais / lúpus subagudo ou discoide / lúpus cutâneo agudo", "2 / 2 / 4 / 6"],
        ["Serosas", "Derrame pleural ou pericárdico / pericardite aguda", "5 / 6"],
        ["Musculoesquelético", "Artrite (sinovite ≥ 2 articulações ou dor + rigidez matinal ≥ 30 min)", "6"],
        ["Renal", "Proteinúria > 0,5 g/24 h / nefrite classe II ou V / nefrite classe III ou IV", "4 / 8 / 10"],
        ["Antifosfolípides", "Anticardiolipina, anti-beta2-GPI ou anticoagulante lúpico", "2"],
        ["Complemento", "C3 ou C4 baixo / C3 e C4 baixos", "3 / 4"],
        ["Anticorpos específicos", "Anti-DNA ou anti-Sm", "6"]
      ],
      nota: "Em cada domínio conta só o critério de maior peso. Não contar critério com explicação mais provável que o LES. Critério de classificação, não substitui o julgamento clínico."
    }
  ],
  fontes: [
    "EULAR/ACR — 2019 Classification Criteria for Systemic Lupus Erythematosus",
    "EULAR recommendations for the management of systemic lupus erythematosus (2023 update)",
    "Ministério da Saúde — PCDT Lúpus Eritematoso Sistêmico (versão vigente na CONITEC)",
    "American Academy of Ophthalmology — Recommendations on screening for chloroquine and hydroxychloroquine retinopathy (2016)",
    "Sociedade Brasileira de Reumatologia — Consenso para o tratamento do lúpus eritematoso sistêmico (2015)",
    "OMS — Critérios médicos de elegibilidade para uso de métodos anticoncepcionais (2015)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
