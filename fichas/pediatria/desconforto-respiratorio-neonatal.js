// Desconforto respiratório no recém-nascido
registrarFicha({
  id: "desconforto-respiratorio-neonatal",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Desconforto respiratório no recém-nascido",
  resumo: "RN com taquipneia (FR > 60 irpm), gemido, retrações, batimento de asa nasal ou cianose. Diferenciar taquipneia transitória, síndrome do desconforto respiratório (doença da membrana hialina), aspiração de mecônio e pneumonia/sepse, e graduar com o Boletim de Silverman-Andersen.",
  palavrasChave: "desconforto respiratorio neonatal taquipneia transitoria ttrn pulmao umido sindrome do desconforto respiratorio sdr doenca membrana hialina surfactante poractante beractante lisa insure cpap aspiracao meconio sam pneumonia neonatal silverman andersen gemido hipertensao pulmonar persistente pneumotorax",
  critico: {
    tempo: "CPAP precoce; SpO₂ alvo 90–95%",
    texto: "RN com desconforto: aquecer, oxigênio titulado e CPAP precoce. Todo desconforto que persiste além de poucas horas é sepse até prova em contrário: hemocultura e ampicilina + gentamicina."
  },
  alarmes: [
    "Apneia, bradicardia ou gasping",
    "Silverman-Andersen ≥ 5 ou piora progressiva",
    "Necessidade de FiO₂ > 0,30–0,40 em CPAP",
    "SpO₂ pré-ductal maior que a pós-ductal (diferença ≥ 3–5%): hipertensão pulmonar persistente",
    "Cianose que não melhora com O₂ (cardiopatia cianótica)",
    "Piora súbita com assimetria de murmúrio (pneumotórax)",
    "Hipotermia, má perfusão, hipoglicemia ou letargia (sepse)"
  ],
  condutaInicial: [
    "Berço aquecido ou incubadora; temperatura axilar 36,5–37,5 °C",
    "Monitor cardíaco e oximetria pré e pós-ductal (mão direita e pé)",
    "O₂ titulado para SpO₂ 90–95%; CPAP nasal 5–6 cmH₂O se desconforto moderado ou necessidade de O₂ (preferir CPAP a O₂ livre no prematuro)",
    "Glicemia capilar; acesso venoso; jejum e sonda orogástrica aberta se FR > 60–80 ou desconforto moderado/grave",
    "Gasometria, RX de tórax, hemograma, PCR e hemocultura antes do antibiótico",
    "Ampicilina + gentamicina se não for claramente taquipneia transitória ou se houver fator de risco para sepse (ver ficha sepse-neonatal)"
  ],
  fataisExcluir: [
    "Sepse neonatal precoce / pneumonia congênita",
    "Pneumotórax hipertensivo",
    "Hérnia diafragmática congênita",
    "Cardiopatia congênita canal-dependente (ver ficha cardiopatias-congenitas)",
    "Hipertensão pulmonar persistente do RN",
    "Atresia de esôfago com fístula (salivação, sonda não progride)"
  ],
  proximaDecisao: "Melhora em 12–24 h com pouco O₂ e RX de líquido nas cisuras: taquipneia transitória, suspender antibiótico com hemocultura negativa em 36–48 h. Prematuro com FiO₂ > 0,30 em CPAP ≥ 6 cmH₂O: surfactante (LISA ou INSURE) e UTI neonatal. Falha do CPAP (apneias, acidose respiratória, FiO₂ > 0,40–0,60): intubação e ventilação mecânica.",
  clinica: {
    anamnese: [
      "IG, via de parto (cesárea eletiva sem trabalho de parto favorece taquipneia transitória)",
      "Corticoide antenatal, diabetes materno, gemelaridade",
      "Líquido meconial, sofrimento fetal, pós-datismo",
      "Fatores de risco infeccioso: bolsa rota ≥ 18 h, febre materna, corioamnionite, estreptococo do grupo B sem profilaxia adequada",
      "Início: desde o nascimento x após horas de vida; evolução (melhora ou piora)"
    ],
    exameFisico: [
      "FR, gemido, batimento de asa nasal, retrações, balancim (Silverman-Andersen)",
      "SpO₂ pré e pós-ductal; cor, perfusão, temperatura",
      "Ausculta assimétrica, desvio de ictus, abdome escavado",
      "Pulsos nos 4 membros, sopro, hepatomegalia",
      "Mecônio na pele, unhas e cordão; sinais de pós-maturidade"
    ],
    diferenciais: [
      { dx: "Taquipneia transitória do RN", pista: "Termo ou próximo do termo, cesárea; FR alta com pouco desconforto; melhora em 24–72 h; RX com congestão peri-hilar e líquido nas cisuras" },
      { dx: "Síndrome do desconforto respiratório (membrana hialina)", pista: "Prematuro; piora nas primeiras horas; gemido; RX com infiltrado reticulogranular difuso, broncograma aéreo e volume pulmonar reduzido" },
      { dx: "Síndrome de aspiração de mecônio", pista: "Líquido meconial espesso, termo ou pós-termo; RX com infiltrados grosseiros, áreas de hiperinsuflação; risco de pneumotórax e hipertensão pulmonar" },
      { dx: "Pneumonia neonatal / sepse", pista: "Fatores de risco maternos, instabilidade térmica, má perfusão, piora em vez de melhora; RX inespecífico" },
      { dx: "Pneumotórax", pista: "Piora súbita, assimetria, transiluminação positiva" },
      { dx: "Cardiopatia congênita", pista: "Cianose desproporcional ao desconforto, sopro, pulsos alterados, sem melhora com O₂" },
      { dx: "Causas não pulmonares", pista: "Hipotermia, hipoglicemia, acidose metabólica, policitemia, anemia" }
    ],
    gravidade: [
      "Boletim de Silverman-Andersen: 0 = sem desconforto; quanto maior a nota, maior a gravidade; ≥ 5 indica desconforto moderado a grave",
      "Gravidade também pela FiO₂ necessária, gasometria (pH < 7,20–7,25 com PaCO₂ alta) e apneias"
    ]
  },
  exames: [
    {
      nome: "RX de tórax",
      pedido: "RX de tórax AP no leito (incluir abdome superior se sonda).",
      porQue: "Diferenciar as causas e afastar pneumotórax e hérnia diafragmática.",
      esperar: "Padrões descritos nos diferenciais.",
      interpretacao: "Imagem de pneumonia e de membrana hialina podem ser iguais: tratar como infecção até culturas negativas.",
      limitacoes: "RX precoce (< 4–6 h) pode subestimar a doença."
    },
    {
      nome: "Gasometria",
      pedido: "Gasometria arterial ou capilar arterializada com lactato.",
      porQue: "Avaliar ventilação e indicação de suporte avançado.",
      esperar: "Hipoxemia e/ou retenção de CO₂.",
      interpretacao: "pH < 7,20–7,25 com PaCO₂ > 60–65 mmHg em CPAP sugere falha.",
      limitacoes: "—"
    },
    {
      nome: "Triagem infecciosa",
      pedido: "Hemocultura (mínimo 1 mL), hemograma com contagem diferencial, PCR (repetir em 24 h).",
      porQue: "Pneumonia e sepse precoce se apresentam como desconforto respiratório.",
      esperar: "Leucopenia, neutropenia ou relação imaturos/totais elevada sugerem infecção.",
      interpretacao: "Duas PCR normais com 24 h de intervalo e hemocultura negativa em 36–48 h permitem suspender o antibiótico.",
      limitacoes: "Hemograma e PCR têm baixo valor preditivo positivo nas primeiras horas."
    },
    {
      nome: "Glicemia, eletrólitos e hematócrito",
      pedido: "Glicemia, sódio, potássio, cálcio iônico, hematócrito central.",
      porQue: "Causas metabólicas e policitemia.",
      esperar: "—",
      interpretacao: "Hematócrito venoso > 65%: policitemia.",
      limitacoes: "—"
    },
    {
      nome: "Ecocardiograma",
      pedido: "Ecocardiograma com Doppler — desconforto/cianose em RN, diferença de SpO₂ pré e pós-ductal.",
      porQue: "Cardiopatia estrutural e hipertensão pulmonar.",
      esperar: "—",
      interpretacao: "Shunt direita-esquerda pelo canal ou forame: hipertensão pulmonar.",
      limitacoes: "Disponibilidade; não atrasar estabilização."
    }
  ],
  tratamento: [
    {
      droga: "CPAP nasal",
      linha: "l1",
      dose: "5–6 cmH₂O inicial (até 8 cmH₂O), FiO₂ para SpO₂ 90–95%",
      via: "Prong ou máscara nasal",
      intervalo: "Contínuo",
      duracao: "Até FiO₂ ≤ 0,21–0,30 e desconforto leve",
      monitorizacao: "Silverman-Andersen, SpO₂, gasometria, distensão abdominal",
      contraindicacoes: "Hérnia diafragmática, apneias recorrentes, choque",
      ajustes: "No prematuro com SDR é o suporte inicial preferido (Consenso Europeu 2022). Sonda orogástrica aberta"
    },
    {
      droga: "Surfactante — poractante alfa (80 mg/mL) ou beractante (25 mg/mL)",
      linha: "l1",
      dose: "Poractante: 200 mg/kg (2,5 mL/kg) na 1ª dose; doses seguintes 100 mg/kg. Beractante: 100 mg/kg (4 mL/kg) por dose",
      via: "Intratraqueal (LISA com cateter fino em CPAP ou INSURE: intubar, administrar, extubar para CPAP)",
      intervalo: "Repetir se persistir necessidade de FiO₂ > 0,30–0,40 (poractante após 12 h; beractante após 6 h)",
      duracao: "Até 2–3 doses",
      monitorizacao: "SpO₂ (reduzir FiO₂ rapidamente), FC, expansão; risco de pneumotórax",
      contraindicacoes: "—",
      ajustes: "Indicação na SDR: prematuro piorando com FiO₂ > 0,30 em CPAP ≥ 6 cmH₂O. Pode ser usado na aspiração de mecônio grave (UTI). Uso exclusivo em UTI neonatal com equipe habilitada"
    },
    {
      droga: "Ampicilina",
      linha: "l1",
      dose: "50 mg/kg/dose. Meningite: 100 mg/kg/dose 8/8 h (≤ 7 dias) ou 75 mg/kg/dose 6/6 h (> 7 dias)",
      via: "IV em 3–5 min (ou IM)",
      intervalo: "≤ 7 dias: 8/8 h · > 7 dias: 6/6 h",
      duracao: "Suspender em 36–48 h se culturas negativas e RN bem; pneumonia: 7–10 dias",
      monitorizacao: "Hemocultura, evolução clínica",
      contraindicacoes: "Alergia a betalactâmico (rara no RN)",
      ajustes: "Associar sempre aminoglicosídeo na terapia empírica. Doses completas na ficha sepse-neonatal"
    },
    {
      droga: "Gentamicina",
      linha: "l1",
      dose: "4–5 mg/kg/dose conforme IG",
      via: "IV em 30 min",
      intervalo: "≥ 35 sem: 4 mg/kg 24/24 h. 30–34 sem: 4,5 mg/kg 36/36 h (0–7 dias). ≤ 29 sem: 5 mg/kg 48/48 h (0–7 dias)",
      duracao: "Igual à ampicilina",
      monitorizacao: "Função renal, nível sérico se > 48 h de uso",
      contraindicacoes: "—",
      ajustes: "Ver tabela completa por IG e idade pós-natal na ficha sepse-neonatal"
    },
    {
      droga: "Óxido nítrico inalatório",
      linha: "adj",
      dose: "Conforme protocolo da UTI neonatal",
      via: "Inalatória no ventilador",
      intervalo: "Contínuo",
      duracao: "—",
      monitorizacao: "Metemoglobina, SpO₂ pré e pós-ductal",
      contraindicacoes: "Cardiopatia canal-dependente com fluxo sistêmico dependente do canal",
      ajustes: "Hipertensão pulmonar persistente em RN ≥ 34 sem; centro terciário"
    },
    {
      droga: "Aspiração traqueal de rotina por mecônio",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não recomendada (SBP 2022)",
      ajustes: "Ver ficha reanimacao-neonatal"
    }
  ],
  destino: {
    agora: [
      "Aquecer, O₂/CPAP, glicemia, acesso venoso, culturas e antibiótico se indicado"
    ],
    reavaliar: [
      "Silverman-Andersen e SpO₂ de 1/1 h nas primeiras horas",
      "Gasometria 1–2 h após iniciar CPAP",
      "Culturas e PCR com 24–48 h"
    ],
    alta: [
      "Sem desconforto, em ar ambiente, mamando bem, culturas negativas em 36–48 h e sem fator de risco não tratado"
    ],
    observacao: [
      "Taquipneia leve (FR 60–80) com SpO₂ normal em ar ambiente, termo, sem fator de risco: observar em unidade neonatal com monitorização; se piora ou persistência > 4–6 h, investigar"
    ],
    internacao: [
      "UTI neonatal: CPAP, FiO₂ > 0,30, surfactante, apneias, sepse, aspiração de mecônio, hipertensão pulmonar"
    ],
    transferencia: [
      "Sem UTI neonatal: estabilizar (via aérea, temperatura, glicemia, antibiótico) e solicitar vaga via regulação; transporte em incubadora com CPAP ou intubado"
    ]
  },
  prescricao: {
    hospitalar: "RN COM DESCONFORTO RESPIRATÓRIO (peso: ___ kg; IG: ___ sem; vida: ___ h)\n1. Dieta zero; sonda orogástrica nº 6–8 aberta.\n2. Incubadora aquecida; manter temperatura axilar 36,5–37,5 °C.\n3. CPAP nasal 5–6 cmH₂O, FiO₂ ___ para SpO₂ 90–95% (ou O₂ em capacete/cateter se desconforto leve).\n4. Soro de manutenção: SG 10% 60–80 mL/kg/dia = ___ mL/h (1º dia; sem eletrólitos no 1º dia, conforme rotina).\n5. Ampicilina 50 mg/kg = ___ mg IV de 8/8 h (≤ 7 dias) — diluir em água destilada (ex.: 100 mg/mL) e infundir em 3–5 min.\n6. Gentamicina ___ mg/kg = ___ mg IV a cada ___ h (conforme IG — ver ficha sepse-neonatal), diluída em SF 0,9% (ex.: 1–2 mg/mL), em 30 min.\n7. Vitamina K 1 mg IM, se não feita.\n8. Controles: FC, FR, SpO₂ pré e pós-ductal, temperatura, Silverman-Andersen de 1/1 h; glicemia capilar de 3/3 h; diurese; gasometria em 1–2 h.\n9. Exames: hemocultura antes do antibiótico, hemograma, PCR agora e em 24 h, gasometria, glicemia, eletrólitos, RX de tórax.\n10. Surfactante (UTI neonatal): poractante alfa 200 mg/kg = ___ mL (80 mg/mL) via LISA/INSURE se FiO₂ > 0,30 em CPAP ≥ 6 cmH₂O."
  },
  orientacoesRetorno: [
    "Explicar à família que o bebê precisa de oxigênio ou CPAP por algumas horas ou dias e que o antibiótico pode ser suspenso se os exames vierem normais",
    "Estimular a extração de leite materno para oferecer quando o bebê puder ser alimentado",
    "Após a alta: voltar se respiração rápida, gemido, cansaço para mamar, pele arroxeada, febre ou temperatura baixa"
  ],
  tabelas: [
    {
      titulo: "Boletim de Silverman-Andersen",
      colunas: ["Item", "0", "1", "2"],
      linhas: [
        ["Movimento tórax-abdome", "Sincronizado", "Declínio inspiratório do tórax", "Balancim (tórax afunda e abdome sobe)"],
        ["Tiragem intercostal", "Ausente", "Pouco visível", "Marcada"],
        ["Retração xifoide", "Ausente", "Pouco visível", "Marcada"],
        ["Batimento de asa nasal", "Ausente", "Discreto", "Acentuado"],
        ["Gemido expiratório", "Ausente", "Audível só com estetoscópio", "Audível sem estetoscópio"]
      ],
      nota: "Soma de 0 a 10. Nota 0: sem desconforto; quanto maior, mais grave (≥ 5: moderado a grave). Reavaliar de forma seriada."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Piora clínica após 48–72 h de ampicilina + gentamicina", "Recolher culturas; rever diagnóstico (pneumotórax, cardiopatia, hipertensão pulmonar); escalonar conforme ficha sepse-neonatal", "Na pneumonia de início precoce, a falha é mais por diagnóstico errado que por resistência"],
        ["Suspeita de meningite (líquor alterado ou não colhido em RN grave)", "Ampicilina em dose de meningite + cefotaxima 50 mg/kg/dose 8/8 h (≤ 7 dias) ou 6/6 h (> 7 dias), ou cefepima conforme protocolo", "Aminoglicosídeo penetra mal no líquor"],
        ["Hemocultura com gram-negativo resistente a ampicilina/gentamicina", "Seguir antibiograma: cefotaxima/cefepima; produtor de ESBL → meropenem", "Conversar com a CCIH"],
        ["Pneumonia de início tardio (> 72 h) em RN internado", "Esquema da ficha sepse-neonatal (tardia): oxacilina ou vancomicina + amicacina, ou cefepima, conforme flora local", "Considerar Staphylococcus e gram-negativos hospitalares"],
        ["Clamídia (afebril, 2–12 semanas, tosse em staccato, conjuntivite prévia)", "Azitromicina 20 mg/kg VO 1×/dia por 3 dias", "Risco de estenose de piloro com macrolídeo < 6 semanas: orientar a família"]
      ],
      nota: "Duração da pneumonia neonatal confirmada: em geral 7–10 dias. Ajustar pelo antibiograma assim que disponível."
    }
  ],
  fontes: [
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 3: Problemas respiratórios, cardiocirculatórios, metabólicos, neurológicos, ortopédicos e dermatológicos (2014)",
    "European Consensus Guidelines on the Management of Respiratory Distress Syndrome — Sweet DG et al., Neonatology (2022)",
    "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal (Diretrizes 2022)",
    "AAP Committee on Fetus and Newborn — Management of Neonates Born at ≥ 35 0/7 Weeks' Gestation With Suspected or Proven Early-Onset Bacterial Sepsis (2018)",
    "AAP — Red Book: Report of the Committee on Infectious Diseases (2024–2027)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
