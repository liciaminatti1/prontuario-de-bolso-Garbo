// Rotura prematura de membranas
registrarFicha({
  id: "rotura-membranas",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Rotura prematura de membranas (RPM / amniorrexe prematura)",
  resumo: "Rotura das membranas antes do início do trabalho de parto. A termo (≥ 37 semanas): indução ou conduta expectante curta. Pré-termo (< 37 semanas): antibiótico de latência, corticoide, MgSO₄ se < 32 semanas e vigilância de infecção.",
  palavrasChave: "rpm rpmo rotura prematura membranas amniorrexe bolsa rota perda de liquido liquido amniotico pre termo latencia ampicilina azitromicina amoxicilina eritromicina corticoide betametasona sulfato magnesio neuroprotecao corioamnionite amnisure",
  critico: {
    tempo: "Antibiótico de latência < 34 sem",
    texto: "Confirmar pelo especular e NÃO fazer toque vaginal (aumenta infecção). Pré-termo < 34 semanas: ampicilina + azitromicina, betametasona e transferência para centro com UTI neonatal."
  },
  alarmes: [
    "Febre ≥ 38 °C, taquicardia materna ou fetal, útero doloroso, líquido purulento ou fétido (corioamnionite)",
    "Cordão visível ou palpável na vagina (prolapso de cordão)",
    "Sangramento com dor (DPP)",
    "Bradicardia fetal ou desacelerações",
    "Líquido meconial",
    "Trabalho de parto em prematuro extremo"
  ],
  condutaInicial: [
    "Anamnese (hora da perda, cor e odor do líquido) e IG confirmada",
    "Exame especular estéril: líquido saindo do orifício cervical (pedir para tossir ou Valsalva); ver o colo e o cordão",
    "Se dúvida: pH vaginal (nitrazina), teste de cristalização ou teste imunocromatográfico (PAMG-1/IGFBP-1)",
    "Evitar toque vaginal se não estiver em trabalho de parto ativo",
    "Sinais vitais maternos, BCF e CTG; USG (apresentação, líquido, peso)",
    "Hemograma, PCR, urina tipo 1, urocultura, swab de GBS (se não feito)",
    "Definir conduta pela IG (tabela)"
  ],
  fataisExcluir: [
    "Corioamnionite / infecção intra-amniótica",
    "Prolapso de cordão",
    "Descolamento prematuro de placenta",
    "Sepse materna"
  ],
  proximaDecisao: "≥ 37 semanas: indução (ocitocina ou misoprostol conforme colo) ou expectante até 12–24 h; GBS positivo ou desconhecido com RPM ≥ 18 h: penicilina. 34–36 semanas e 6 dias: parto (indução) ou expectante até 37 semanas em casos selecionados. 24–33 semanas e 6 dias: expectante internada com antibiótico de latência e corticoide; parto se infecção, sofrimento fetal, DPP ou ao atingir 34 semanas. < 24 semanas: aconselhamento e decisão compartilhada.",
  clinica: {
    anamnese: [
      "Hora exata da perda de líquido (tempo de bolsa rota)",
      "Quantidade, cor (claro, meconial, sanguinolento) e odor",
      "Contrações, febre, sangramento, movimentos fetais",
      "IG por USG precoce; resultado de GBS; alergia à penicilina",
      "Diferenciar de urina (incontinência), leucorreia, muco"
    ],
    exameFisico: [
      "Temperatura, FC, PA; tônus e dor uterina",
      "Especular estéril: saída de líquido pelo colo, poça em fundo de saco",
      "BCF (taquicardia fetal > 160 sugere infecção)",
      "Toque só se trabalho de parto ativo ou parto previsto em breve"
    ],
    diferenciais: [
      { dx: "Incontinência urinária", pista: "Perda com esforço, odor de urina, pH ácido" },
      { dx: "Leucorreia / vaginose", pista: "Corrimento, pH alcalino pode dar falso-positivo" },
      { dx: "Tampão mucoso", pista: "Muco espesso, às vezes com sangue" },
      { dx: "Rotura alta de membranas", pista: "Perda intermitente; teste imunocromatográfico ajuda" }
    ],
    gravidade: [
      "Infecção intra-amniótica: indica parto em qualquer IG + antibiótico (ver corioamnionite)",
      "Oligoâmnio grave antes de 24 semanas: risco de hipoplasia pulmonar",
      "Tempo de bolsa rota ≥ 18 h: aumenta risco de sepse neonatal por GBS"
    ]
  },
  exames: [
    {
      nome: "Confirmação diagnóstica",
      pedido: "Exame especular. Se dúvida: pH vaginal (fita de nitrazina), teste de cristalização em lâmina e/ou teste imunocromatográfico para PAMG-1 (AmniSure) ou IGFBP-1.",
      porQue: "Diagnóstico clínico pelo especular é suficiente na maioria.",
      esperar: "Líquido saindo pelo orifício cervical.",
      interpretacao: "pH ≥ 6,5 e cristalização em folha de samambaia sugerem líquido amniótico.",
      limitacoes: "Falso-positivo de pH com sangue, sêmen, vaginose, antisséptico. Oligoâmnio na USG apoia, mas LA normal não exclui."
    },
    {
      nome: "Rastreio de infecção",
      pedido: "Hemograma, PCR (seriar). Urina tipo 1 e urocultura. Swab vaginal e retal para estreptococo do grupo B.",
      porQue: "Detectar corioamnionite e ITU.",
      esperar: "Normais.",
      interpretacao: "Leucocitose crescente + febre/taquicardia = infecção. PCR isolada não decide parto.",
      limitacoes: "Corticoide eleva leucócitos por até 5 dias."
    },
    {
      nome: "Vitalidade fetal e USG",
      pedido: "Cardiotocografia (diária na conduta expectante). USG obstétrica com ILA/maior bolsão, apresentação e peso fetal.",
      porQue: "Compressão de cordão e sofrimento fetal são mais frequentes.",
      esperar: "Categoria I.",
      interpretacao: "Taquicardia fetal precede sinais maternos de infecção.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Ampicilina + azitromicina (antibiótico de latência)",
      linha: "l1",
      dose: "Ampicilina 2 g IV 6/6 h por 48 h + azitromicina 1 g VO dose única; depois amoxicilina VO por 5 dias",
      via: "IV e VO",
      intervalo: "Ampicilina 6/6 h; amoxicilina 8/8 h",
      duracao: "Total de 7 dias",
      monitorizacao: "Alergia, diarreia",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "RPM < 34 semanas. Amoxicilina 250 mg VO 8/8 h no esquema ACOG (muitos protocolos brasileiros usam 500 mg). Alternativa à azitromicina: eritromicina. Alergia à penicilina: conferir esquema do serviço. Não usar amoxicilina-clavulanato (enterocolite necrosante)"
    },
    {
      droga: "Betametasona",
      linha: "l1",
      dose: "12 mg",
      via: "IM",
      intervalo: "24/24 h, 2 doses",
      duracao: "1 ciclo",
      monitorizacao: "Glicemia",
      contraindicacoes: "Corioamnionite clínica (não atrasar o parto)",
      ajustes: "24 a 33 semanas e 6 dias (considerar a partir de 22–23 semanas se suporte neonatal). Alternativa: dexametasona 6 mg IM 12/12 h, 4 doses"
    },
    {
      droga: "Sulfato de magnésio (neuroproteção)",
      linha: "l1",
      dose: "Ataque 4 g IV em 20–30 min; manutenção 1 g/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até o parto ou máximo 24 h",
      monitorizacao: "Reflexo patelar, FR, diurese",
      contraindicacoes: "Miastenia gravis",
      ajustes: "Só se < 32 semanas com parto iminente"
    },
    {
      droga: "Penicilina G cristalina (profilaxia GBS intraparto)",
      linha: "l1",
      dose: "Ataque 5 milhões UI; manutenção 2,5–3 milhões UI",
      via: "IV",
      intervalo: "4/4 h",
      duracao: "Até o parto",
      monitorizacao: "Alergia",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "A termo: GBS positivo, ou GBS desconhecido com RPM ≥ 18 h, febre ou pré-termo. Pré-termo em latência com ampicilina já cobre GBS. Alternativas: ver ficha trabalho-parto-prematuro"
    },
    {
      droga: "Ocitocina (indução a termo)",
      linha: "l1",
      dose: "5 UI em 500 mL de SF 0,9% (10 mUI/mL); iniciar 1–2 mUI/min (6–12 mL/h) e aumentar a cada 30–40 min",
      via: "IV em bomba",
      intervalo: "Contínuo",
      duracao: "Até o parto",
      monitorizacao: "Dinâmica uterina (máx. 5 contrações em 10 min), CTG contínua",
      contraindicacoes: "Contraindicação a parto vaginal, sofrimento fetal",
      ajustes: "Dose máxima conforme protocolo local. Colo desfavorável: misoprostol 25 mcg vaginal 6/6 h é opção (evitar com cicatriz uterina)"
    },
    {
      droga: "Tocólise de rotina na RPM",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não indicada de rotina; contraindicada se infecção. Pode ser considerada por 48 h só para completar corticoide/transferência, em centro especializado",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Toda RPM: internação ou observação em maternidade",
      "< 34 semanas: iniciar antibiótico e corticoide e transferir para centro com UTI neonatal"
    ],
    reavaliar: [
      "Temperatura e FC materna de 4/4 h; BCF de 4/4 h; CTG diária",
      "Hemograma e PCR a cada 48–72 h ou se suspeita clínica"
    ],
    alta: [
      "Não se aplica enquanto houver bolsa rota (conduta expectante pré-termo é hospitalar no SUS)",
      "Suspeita não confirmada (especular e testes negativos, LA normal): alta com orientação"
    ],
    observacao: [
      "Termo com GBS negativo e sem infecção: expectante até 12–24 h aguardando trabalho de parto espontâneo, se a gestante preferir"
    ],
    internacao: [
      "Toda RPM confirmada",
      "Parto: termo (indução), ≥ 34 semanas, infecção, sofrimento fetal, DPP, trabalho de parto"
    ],
    transferencia: [
      "< 34 semanas ou peso < 2.000 g: maternidade de alto risco com UTI neonatal"
    ]
  },
  prescricao: {
    hospitalar: "RPM PRÉ-TERMO < 34 SEMANAS (IG: ___ semanas)\n1. Dieta livre.\n2. Repouso relativo; absorvente para observar cor e odor do líquido; NÃO realizar toque vaginal.\n3. Ampicilina 2 g IV de 6/6 h por 48 h.\n4. Azitromicina 1 g VO dose única (no 1º dia).\n5. Após 48 h: amoxicilina 250 mg (ou 500 mg conforme protocolo) VO de 8/8 h por 5 dias.\n6. Betametasona 12 mg IM agora; repetir em 24 h.\n7. Se < 32 semanas e parto iminente: sulfato de magnésio 50% 8 mL (4 g) + água destilada 12 mL IV em 20–30 min; manutenção 50% 10 mL (5 g) + SF 0,9% 490 mL a 100 mL/h (1 g/h) até o parto (máx. 24 h).\n8. Exames: hemograma e PCR a cada 48–72 h; urina tipo 1 e urocultura; swab GBS; USG obstétrica.\n9. Controles: temperatura, FC e PA de 4/4 h; BCF de 4/4 h; cardiotocografia diária; dinâmica uterina; aspecto do líquido.\n10. Comunicar se: T ≥ 38 °C, FC materna > 100, BCF > 160, líquido fétido, dor uterina, sangramento, contrações.\n\nRPM A TERMO\n1. Penicilina G cristalina 5.000.000 UI IV e depois 2.500.000 UI IV de 4/4 h até o parto, se GBS positivo ou desconhecido com ≥ 18 h de bolsa rota, febre ou fator de risco.\n2. Ocitocina 5 UI + SF 0,9% 500 mL IV em bomba, iniciar 6–12 mL/h e aumentar a cada 30–40 min conforme protocolo (ou misoprostol se colo desfavorável e sem cicatriz uterina).\n3. CTG contínua durante a indução."
  },
  orientacoesRetorno: [
    "Se perder líquido pela vagina (molhando a roupa, escorrendo), ir à maternidade mesmo sem dor",
    "Não colocar nada na vagina, não ter relações e não tomar banho de banheira com bolsa rota",
    "Voltar imediatamente (se teve alta por suspeita não confirmada) se: perda de líquido, febre, líquido verde ou com mau cheiro, bebê mexendo menos, contrações ou sangramento",
    "Se ver ou sentir o cordão na vagina: ficar de joelhos com o peito no chão e chamar o SAMU (192)"
  ],
  tabelas: [
    {
      titulo: "Conduta por idade gestacional",
      colunas: ["IG", "Conduta", "Antibiótico de latência", "Corticoide", "MgSO₄"],
      linhas: [
        ["< 24 sem", "Aconselhamento; decisão compartilhada", "Considerar", "Considerar a partir de 22–23 sem", "Considerar"],
        ["24–31 sem e 6 d", "Expectante internada", "Sim", "Sim", "Se parto iminente"],
        ["32–33 sem e 6 d", "Expectante internada; parto com 34 sem", "Sim", "Sim", "Não"],
        ["34–36 sem e 6 d", "Parto (ou expectante até 37 sem em casos selecionados)", "Não (só GBS)", "Individualizar", "Não"],
        ["≥ 37 sem", "Indução (ou expectante até 12–24 h)", "Não (só GBS)", "Não", "Não"]
      ],
      nota: "MS 2022 indica interrupção com 34 semanas; ACOG 2020 aceita conduta expectante até 36 semanas e 6 dias. Parto em qualquer IG se infecção, sofrimento fetal ou DPP."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "ACOG — Practice Bulletin nº 217: Prelabor rupture of membranes (2020)",
    "ACOG — Committee Opinion nº 797: Prevention of group B streptococcal early-onset disease in newborns (2020)",
    "OMS — Recommendations on antenatal corticosteroids for improving preterm birth outcomes (2022)",
    "FEBRASGO — Tratado de Obstetrícia (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
