// Talassemias: traço x formas graves, diferenciar de ferropenia, quelação, aconselhamento
registrarFicha({
  id: "talassemias",
  especialidade: "hematologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Talassemias: traço talassêmico x ferropenia e formas graves",
  resumo: "Microcitose com hemácias normais ou altas e ferritina normal sugere traço talassêmico, que não precisa de tratamento e não deve receber ferro. Ficha para diferenciar de ferropenia (índice de Mentzer, eletroforese), reconhecer formas graves (transfusão e quelação de ferro) e orientar aconselhamento genético.",
  palavrasChave: "talassemia traco talassemico beta talassemia menor minor maior major intermedia alfa talassemia doenca da hemoglobina h hb bart microcitose mentzer eletroforese de hemoglobina hba2 hemoglobina fetal quelacao sobrecarga de ferro deferasirox deferiprona desferroxamina transfusao cronica aconselhamento genetico teste do pezinho",
  critico: {
    tempo: "Não dar ferro sem ferropenia",
    texto: "Microcitose com ferritina normal ou alta não é ferropenia: ferro empírico prolongado em portador de talassemia causa sobrecarga. Confirme com ferritina e eletroforese de hemoglobina."
  },
  alarmes: [
    "Lactente de 6–24 meses com palidez progressiva, baixo ganho de peso, hepatoesplenomegalia, deformidade óssea da face (talassemia maior: hemocentro com urgência)",
    "Hb < 7 g/dL ou queda em quem tem talassemia intermediária (infecção, crise aplástica por parvovírus, hiperesplenismo)",
    "Febre em paciente esplenectomizado (risco de sepse fulminante: PS no mesmo dia)",
    "Paciente em transfusão crônica com dispneia, edema, arritmia (cardiopatia por ferro) ou diabetes, hipotireoidismo, atraso puberal (lesão endócrina por ferro)",
    "Gestante com marido também portador (risco de forma grave no feto: pré-natal de alto risco e aconselhamento)",
    "Microcitose com sinais de sangramento ou idade ≥ 50 anos: investigar perda de sangue mesmo se houver talassemia"
  ],
  conduta: [
    "Microcitose (VCM < 80 fL; na criança, abaixo do limite para a idade): pedir ferritina, PCR e eletroforese de hemoglobina",
    "Calcular o índice de Mentzer (VCM ÷ hemácias em milhões/mm³): < 13 sugere talassemia; > 13 sugere ferropenia. É só triagem: confirmar com exames",
    "Ferritina baixa: tratar ferropenia primeiro (fichas anemia-ferropriva e anemia-ferropriva-crianca) e repetir a eletroforese após repor ferro, pois a ferropenia reduz a HbA2 e mascara o traço beta",
    "Ferritina normal + HbA2 aumentada (acima do valor de referência do laboratório, em geral > 3,5%) = traço beta-talassêmico",
    "Ferritina normal + eletroforese normal + microcitose sem outra causa = provável traço alfa-talassêmico (confirmação molecular só se necessária para aconselhamento)",
    "Traço (menor): explicar que não é doença, não piora com o tempo, não precisa de remédio; registrar no prontuário para evitar ferro repetido",
    "Oferecer eletroforese ao parceiro(a) e aconselhamento genético quando há plano de gravidez ou gestação",
    "Formas graves (talassemia maior, intermediária, doença da HbH): acompanhamento no hemocentro; a UBS cuida de vacinas, intercorrências, adesão à quelação e rastreio de complicações",
    "Esplenectomizado: vacinas especiais (pneumocócica, meningocócicas, Haemophilus) pelo CRIE e plano de ação para febre"
  ],
  exames: [
    "Hemograma completo com reticulócitos e esfregaço: microcitose acentuada, hemácias normais ou altas, RDW pouco alterado no traço; hemácias em alvo, pontilhado basófilo",
    "Ferritina, saturação de transferrina e PCR",
    "Eletroforese de hemoglobina (HPLC ou focalização isoelétrica, com dosagem de HbA2 e HbF)",
    "Teste do pezinho: hemoglobina de Bart's ao nascimento sugere alfa-talassemia; resultado alterado é encaminhado pelo programa de triagem neonatal",
    "Estudo molecular dos genes da alfa-globina e beta-globina: no hemocentro, para casais em risco e casos duvidosos",
    "Formas graves em transfusão: ferritina a cada 3 meses, função hepática, glicemia, TSH, cálcio; ressonância T2* de coração e fígado no centro de referência"
  ],
  diferenciais: [
    "Anemia ferropriva (Mentzer > 13, RDW alto, ferritina baixa, plaquetas às vezes altas)",
    "Anemia da inflamação (ferritina normal ou alta, PCR alta, microcitose leve)",
    "Ferropenia e traço ao mesmo tempo (repetir eletroforese após repor ferro)",
    "Hemoglobinopatias estruturais: HbS/beta-talassemia, HbE, HbC (eletroforese)",
    "Anemia sideroblástica e intoxicação por chumbo (pontilhado basófilo)"
  ],
  tratamento: [
    {
      droga: "Traço talassêmico (alfa ou beta menor)",
      linha: "l1",
      dose: "Sem tratamento medicamentoso",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Hemograma só se houver sintomas, gestação ou suspeita de outra anemia associada",
      contraindicacoes: "Ferro sem ferropenia comprovada",
      ajustes: "Gestante portadora: Hb pode cair mais; usar ferro apenas se ferritina baixa e ácido fólico como no pré-natal habitual"
    },
    {
      droga: "Ácido fólico (formas intermediária e maior, com hemólise/eritropoese aumentada)",
      linha: "adj",
      dose: "Adulto: 5 mg/dia. Criança: dose conforme hemocentro",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo, conforme hemocentro",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pacientes em transfusão regular geralmente não precisam. RENAME"
    },
    {
      droga: "Deferasirox",
      linha: "l1",
      dose: "Adulto e criança ≥ 2 anos: dose inicial em mg/kg/dia conforme apresentação (comprimido dispersível ou revestido), ajustada pela ferritina",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo enquanto houver sobrecarga",
      monitorizacao: "Creatinina, urina (proteinúria), transaminases, ferritina; audiometria e exame oftalmológico anuais",
      contraindicacoes: "ClCr < 40–60 mL/min, insuficiência hepática grave (conforme bula)",
      ajustes: "Componente especializado (PCDT Sobrecarga de Ferro, MS). Indicação habitual: ferritina persistentemente > 1.000 ng/mL ou após cerca de 10–20 transfusões. Prescrição pelo hematologista"
    },
    {
      droga: "Desferroxamina",
      linha: "alt",
      dose: "Conforme hematologista (mg/kg por infusão)",
      via: "SC em bomba de 8–12 h ou IV",
      intervalo: "5–7 noites por semana",
      duracao: "Contínuo",
      monitorizacao: "Audiometria e exame oftalmológico; ferritina",
      contraindicacoes: "—",
      ajustes: "Usada também em sobrecarga cardíaca grave (IV contínua, centro de referência)"
    },
    {
      droga: "Deferiprona",
      linha: "alt",
      dose: "Conforme hematologista (mg/kg/dia dividido em 3 tomadas)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "Contínuo",
      monitorizacao: "Hemograma SEMANAL (agranulocitose); transaminases",
      contraindicacoes: "Neutropenia",
      ajustes: "Febre ou dor de garganta em uso de deferiprona: suspender e fazer hemograma no mesmo dia"
    }
  ],
  tabelas: [
    {
      titulo: "Traço talassêmico x ferropenia",
      colunas: ["Achado", "Traço talassêmico", "Ferropenia"],
      linhas: [
        ["Hemoglobina", "Normal ou pouco baixa", "Variável, pode ser muito baixa"],
        ["Hemácias (milhões/mm³)", "Normais ou altas (muitas vezes > 5)", "Baixas"],
        ["VCM", "Muito baixo para a Hb", "Baixo, proporcional à anemia"],
        ["Índice de Mentzer (VCM ÷ hemácias)", "< 13", "> 13"],
        ["RDW", "Normal ou pouco alto", "Alto"],
        ["Ferritina", "Normal ou alta", "Baixa"],
        ["Eletroforese", "HbA2 alta (beta) ou normal (alfa)", "Normal (HbA2 pode ficar baixa)"]
      ],
      nota: "Mentzer é útil em adulto e criança, mas tem falsos resultados; não substitui ferritina e eletroforese."
    },
    {
      titulo: "Formas clínicas",
      colunas: ["Forma", "Quadro", "Seguimento"],
      linhas: [
        ["Portador silencioso / traço alfa (1–2 genes)", "Sem anemia ou microcitose leve", "UBS; aconselhamento"],
        ["Beta-talassemia menor (traço)", "Microcitose, anemia leve ou ausente", "UBS; aconselhamento"],
        ["Doença da HbH (3 genes alfa)", "Anemia hemolítica moderada, esplenomegalia; piora com infecção e oxidantes", "Hemocentro"],
        ["Beta-talassemia intermediária", "Anemia moderada, transfusões ocasionais, sobrecarga de ferro mesmo sem transfusão", "Hemocentro"],
        ["Beta-talassemia maior", "Anemia grave a partir de 6–24 meses; transfusão regular desde a infância", "Hemocentro: transfusão, quelação, transplante de medula em casos selecionados"]
      ]
    },
    {
      titulo: "Risco para os filhos (aconselhamento genético)",
      colunas: ["Casal", "Risco a cada gestação", "Conduta"],
      linhas: [
        ["Um portador de traço beta, outro normal", "50% de filho portador; sem forma grave", "Informar"],
        ["Ambos portadores de traço beta", "25% de beta-talassemia maior, 50% traço, 25% normal", "Aconselhamento genético; pré-natal com especialista"],
        ["Traço beta + traço falciforme (HbAS)", "25% de HbS/beta-talassemia (doença falciforme)", "Aconselhamento genético"],
        ["Ambos com deleção de 2 genes alfa no mesmo cromossomo (cis)", "Risco de hidropisia fetal (Hb de Bart's)", "Estudo molecular e medicina fetal"]
      ]
    }
  ],
  encaminhar: [
    "Hemocentro/hematologia: formas intermediária e maior, doença da HbH, dúvida na eletroforese, teste do pezinho alterado",
    "Aconselhamento genético (hemocentro ou genética): casal em que ambos são portadores, gestante portadora com parceiro não testado",
    "Pré-natal de alto risco: gestante com talassemia intermediária ou maior, ou casal com risco de forma grave",
    "PS: febre em esplenectomizado, anemia sintomática, febre em uso de deferiprona"
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — MICROCITOSE\nHemograma completo com reticulócitos e esfregaço; ferritina; ferro sérico e saturação de transferrina; PCR; eletroforese de hemoglobina com dosagem de HbA2 e HbF.\nHD: Microcitose a esclarecer — suspeita de traço talassêmico (CID D56.9).\n\nPARECER / ORIENTAÇÃO PARA O PRONTUÁRIO\nPaciente portador(a) de traço talassêmico (talassemia menor), confirmado por ferritina normal e eletroforese de hemoglobina de __/__/____. Não necessita tratamento. NÃO prescrever ferro sem ferropenia comprovada por ferritina.\n\nFORMAS INTERMEDIÁRIA/MAIOR (se orientado pelo hemocentro)\nUSO ORAL\n1. Ácido fólico 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido por dia, uso contínuo (adulto). Criança: dose conforme hemocentro."
  },
  orientacoesRetorno: [
    "Traço talassêmico não é doença: é uma característica herdada, não vira doença grave e não precisa de remédio",
    "Não tome ferro por conta própria; avise que tem traço talassêmico sempre que alguém falar em 'anemia'",
    "Antes de ter filhos, o parceiro ou parceira deve fazer o exame (eletroforese de hemoglobina); se os dois tiverem o traço, procure aconselhamento genético",
    "Quem tem forma grave: manter as transfusões e o remédio que tira o ferro todos os dias; perder doses causa dano no coração, fígado e glândulas",
    "Quem tirou o baço: febre é urgência, procurar o PS no mesmo dia",
    "Em uso de deferiprona: febre ou dor de garganta → parar o remédio e fazer hemograma no mesmo dia"
  ],
  fontes: [
    "Thalassaemia International Federation — Guidelines for the management of transfusion dependent β-thalassaemia, 4ª ed. (2021) e non-transfusion dependent thalassaemia, 2ª ed. (2017/2023)",
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas: Sobrecarga de Ferro (versão vigente)",
    "Ministério da Saúde — Programa Nacional de Triagem Neonatal: hemoglobinopatias",
    "British Society for Haematology — Significant haemoglobinopathies: guidelines for screening and diagnosis (2010)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
