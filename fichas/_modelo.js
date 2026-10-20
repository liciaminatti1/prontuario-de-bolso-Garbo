// MODELO DE FICHA — copie este arquivo para fichas/ps/ ou fichas/ubs/, renomeie
// (ex.: fichas/ps/cetoacidose.js), preencha e adicione uma linha <script> no index.html.
// Depois rode: node ferramentas/validar.js
registrarFicha({
  id: "nome-da-ficha",            // só minúsculas, números e hífen; vira o link (#nome-da-ficha)
  caminho: "ps",                   // "ps" (Pronto-Socorro/Emergência) ou "ubs" (UBS/APS)
  titulo: "Nome da queixa ou síndrome",
  resumo: "Uma ou duas frases que definem quando usar esta ficha.",
  palavrasChave: "sinonimos siglas drogas termos de busca sem acento",

  // ---------- VISTA RÁPIDA ----------
  critico: {
    tempo: "ECG ≤ 10 min",         // a meta de tempo ou a ação que não pode atrasar
    texto: "Explicação curta da meta."
  },
  alarmes: ["Sinal de alarme 1", "Sinal de alarme 2"],
  condutaInicial: ["Passo 1", "Passo 2"],          // aparece numerada, na ordem
  fataisExcluir: ["Diagnóstico fatal 1", "Diagnóstico fatal 2"],
  proximaDecisao: "Se X → faça Y. Se não → faça Z.",

  // ---------- FICHA COMPLETA ----------
  clinica: {
    anamnese: ["Pergunta essencial 1"],
    exameFisico: ["Achado a procurar 1"],
    diferenciais: [
      { dx: "Diagnóstico", pista: "O que sugere este diagnóstico" }
    ],
    gravidade: ["Critério de gravidade 1"]
  },

  exames: [
    {
      nome: "Nome do exame",
      pedido: "Texto pronto para o pedido (o usuário copia com um toque).",
      porQue: "Por que pedir.",
      esperar: "O que se espera encontrar.",
      interpretacao: "Como interpretar e como muda a conduta.",
      limitacoes: "Limitações do exame."
    }
  ],

  tratamento: [
    {
      droga: "Nome do medicamento",
      linha: "l1",                 // "l1" 1ª escolha · "alt" alternativa · "adj" adjuvante · "ci" não usar
      dose: "Dose",
      via: "Via",
      intervalo: "Intervalo",
      duracao: "Duração",
      monitorizacao: "O que monitorar",
      contraindicacoes: "Contraindicações",
      ajustes: "Diluição, velocidade de infusão, ajuste renal/hepático/idade"
    }
  ],

  destino: {
    agora: ["O que fazer agora"],
    reavaliar: ["Quando reavaliar"],
    alta: ["Critérios de alta"],
    observacao: ["Critérios de observação"],
    internacao: ["Critérios de internação"],
    transferencia: ["Encaminhamento e transferência de emergência"]
  },

  fontes: ["Diretriz, sociedade, ano"],
  revisao: "2026-10-20",           // AAAA-MM-DD — data da última revisão médica
  versao: "1.0"                    // aumente a cada alteração de conteúdo
});
