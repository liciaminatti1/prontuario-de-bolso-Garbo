// Rinite alérgica
registrarFicha({
  id: "rinite-alergica",
  especialidade: "oftalmo-otorrino",
  caminho: "ubs",
  publico: "ambos",
  titulo: "Rinite alérgica",
  resumo: "Espirros em salva, coriza aquosa, prurido nasal e obstrução, com ou sem sintomas oculares, desencadeados por alérgenos (ácaros, fungos, pelos, pólen). Tratamento com controle ambiental, lavagem nasal, corticoide intranasal e anti-histamínico de 2ª geração.",
  palavrasChave: "rinite alergica alergia nasal espirros coriza prurido obstrucao nasal corticoide nasal budesonida mometasona fluticasona beclometasona loratadina desloratadina cetirizina fexofenadina lavagem nasal acaro aria",
  critico: {
    tempo: "Corticoide nasal diário",
    texto: "Corticoide intranasal é o tratamento mais eficaz para sintomas persistentes ou moderados/graves. Anti-histamínico de 2ª geração para sintomas leves ou oculares. Não usar corticoide injetável de depósito."
  },
  alarmes: [
    "Obstrução nasal unilateral persistente, sangramento ou secreção fétida unilateral (corpo estranho, pólipo, tumor)",
    "Dor facial, perda de olfato importante e secreção purulenta prolongada (rinossinusite crônica/pólipos)",
    "Sibilância, tosse noturna ou dispneia associadas (asma não diagnosticada)",
    "Ronco com pausas respiratórias, respiração bucal e alteração do sono na criança (hipertrofia adenoamigdaliana/apneia)",
    "Uso crônico de descongestionante nasal (rinite medicamentosa)"
  ],
  condutaInicial: [
    "Diagnóstico clínico: ≥ 2 sintomas (espirros, coriza, prurido, obstrução) por > 1 h na maioria dos dias, com relação a alérgenos",
    "Classificar: intermitente ou persistente; leve ou moderada/grave (sono, atividades, escola/trabalho, sintomas incômodos)",
    "Rastrear asma em todos (rinite e asma são a mesma via aérea)",
    "Controle ambiental (ácaros, mofo, fumaça) + lavagem nasal com soro fisiológico",
    "Leve/intermitente: anti-histamínico oral de 2ª geração ou corticoide nasal. Persistente ou moderada/grave: corticoide intranasal diário (± anti-histamínico)"
  ],
  fataisExcluir: [
    "Neoplasia nasossinusal (sintomas unilaterais, epistaxe, adulto)",
    "Asma não controlada associada",
    "Corpo estranho nasal (criança, secreção unilateral fétida)",
    "Fístula liquórica (rinorreia aquosa unilateral após trauma ou cirurgia)"
  ],
  proximaDecisao: "Reavaliar em 2–4 semanas: controlada → manter e depois reduzir à menor dose eficaz. Não controlada → checar técnica e adesão, associar anti-histamínico intranasal/oral ou trocar o corticoide nasal; persistência → ORL/alergista (imunoterapia, avaliação anatômica).",
  clinica: {
    anamnese: [
      "Sintomas, frequência, duração, sazonalidade; impacto no sono, escola e trabalho",
      "Gatilhos: poeira, ácaros, mofo, animais, pólen, fumaça, perfumes, mudanças de temperatura",
      "Sintomas oculares (prurido, lacrimejamento), sibilância, dermatite atópica",
      "Medicamentos usados (descongestionantes tópicos, AAS/AINE, betabloqueadores, anticoncepcionais)",
      "Ronco, respiração bucal, apneia (criança)",
      "Ambiente domiciliar: tapetes, cortinas, bichos de pelúcia, umidade, tabagismo"
    ],
    exameFisico: [
      "Rinoscopia anterior: mucosa pálida/violácea, edematosa, secreção hialina; desvio de septo, pólipos",
      "Sinais faciais: olheiras alérgicas, prega nasal transversa (saudação alérgica), respiração bucal",
      "Conjuntivas (hiperemia, papilas)",
      "Orofaringe (amígdalas), otoscopia (efusão)",
      "Ausculta pulmonar"
    ],
    diferenciais: [
      { dx: "Resfriado comum", pista: "Autolimitado em 7–10 dias, febre baixa, contato" },
      { dx: "Rinite não alérgica (vasomotora, gestacional, medicamentosa)", pista: "Gatilhos irritantes/temperatura, sem prurido; uso de descongestionante" },
      { dx: "Rinossinusite crônica com pólipos", pista: "Hiposmia, pólipos à rinoscopia, intolerância a AINE" },
      { dx: "Hipertrofia de adenoide", pista: "Criança com ronco, respiração bucal, voz anasalada" },
      { dx: "Desvio septal", pista: "Obstrução fixa, unilateral" }
    ],
    gravidade: [
      "Intermitente: < 4 dias por semana ou < 4 semanas consecutivas · Persistente: ≥ 4 dias por semana e ≥ 4 semanas",
      "Moderada/grave: ≥ 1 de sono prejudicado, limitação de atividades diárias/esporte/lazer, prejuízo escolar ou no trabalho, sintomas incômodos · Leve: nenhum desses",
      "Escala visual analógica (0–10) de sintomas para acompanhar o controle (ARIA)"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico clínico",
      pedido: "Não há exame obrigatório para iniciar o tratamento.",
      porQue: "Quadro típico permite tratamento empírico.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "IgE específica ou teste cutâneo de leitura imediata",
      pedido: "IgE sérica específica para Dermatophagoides pteronyssinus, Dermatophagoides farinae, Blomia tropicalis, epitélio de cão e gato, fungos — ou teste cutâneo (prick test) com o alergista.",
      porQue: "Confirmar sensibilização quando há dúvida diagnóstica, falha do tratamento ou candidato a imunoterapia.",
      esperar: "Positividade para ácaros é a mais comum no Brasil.",
      interpretacao: "Sensibilização só é relevante se concorda com a história clínica.",
      limitacoes: "IgE total e eosinófilos no sangue têm baixo valor diagnóstico. Anti-histamínico interfere no teste cutâneo (suspender antes, conforme orientação do alergista)."
    },
    {
      nome: "Imagem / endoscopia nasal",
      pedido: "Não solicitar RX de seios da face. Nasofibroscopia ou TC de seios da face apenas pelo ORL (sintomas unilaterais, suspeita de pólipos, falha terapêutica, avaliação cirúrgica).",
      porQue: "Avaliar causas anatômicas e outras doenças.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "RX simples não tem utilidade na rinite."
    },
    {
      nome: "Espirometria",
      pedido: "Espirometria com prova broncodilatadora se sintomas sugestivos de asma.",
      porQue: "Diagnosticar asma associada.",
      esperar: "—",
      interpretacao: "Ver ficha de asma.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Corticoide intranasal (mometasona, budesonida, fluticasona, beclometasona)",
      linha: "l1",
      dose: "Mometasona 50 mcg/jato: ≥ 12 anos 2 jatos em cada narina 1×/dia (pode reduzir para 1 jato); 2–11 anos 1 jato em cada narina 1×/dia · Budesonida spray nasal (32, 50 ou 64 mcg/jato): adulto e ≥ 6 anos 1–2 jatos em cada narina 1×/dia, conforme concentração e bula · Fluticasona furoato 27,5 mcg/jato: ≥ 12 anos 2 jatos em cada narina 1×/dia; 2–11 anos 1 jato em cada narina 1×/dia · Beclometasona nasal 50 mcg/jato: adulto 1–2 jatos em cada narina 2×/dia",
      via: "Intranasal",
      intervalo: "1 vez ao dia (beclometasona 2 vezes ao dia)",
      duracao: "Uso contínuo enquanto persistirem os sintomas/exposição; efeito pleno em 1–2 semanas; reavaliar em 2–4 semanas",
      monitorizacao: "Epistaxe, ressecamento; estatura em crianças em uso prolongado",
      contraindicacoes: "Hipersensibilidade; infecção nasal local não tratada; cirurgia/trauma nasal recente",
      ajustes: "Técnica: cabeça levemente inclinada para frente, mão oposta à narina, apontar para a lateral (longe do septo). Gestação: budesonida é a mais estudada. Faixa etária mínima varia por produto — conferir a bula"
    },
    {
      droga: "Loratadina (anti-histamínico de 2ª geração)",
      linha: "l1",
      dose: "Adulto e > 30 kg: 10 mg · Criança 2–12 anos ≤ 30 kg: 5 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo nos períodos sintomáticos ou sob demanda na intermitente",
      monitorizacao: "Sonolência leve (rara)",
      contraindicacoes: "< 2 anos",
      ajustes: "Apresentações: comprimido 10 mg e xarope 1 mg/mL (conferir a disponibilidade na lista municipal/RENAME). Insuficiência hepática grave: dose em dias alternados"
    },
    {
      droga: "Outros anti-histamínicos de 2ª geração",
      linha: "alt",
      dose: "Desloratadina: ≥ 12 anos 5 mg; 6–11 anos 2,5 mg; 1–5 anos 1,25 mg · Cetirizina: ≥ 12 anos 10 mg/dia; 6–11 anos 5 mg 12/12 h ou 10 mg/dia; 2–5 anos 2,5 mg 12/12 h · Fexofenadina: ≥ 12 anos 120–180 mg/dia; 6–11 anos 30 mg 12/12 h",
      via: "VO",
      intervalo: "Conforme o fármaco",
      duracao: "Conforme sintomas",
      monitorizacao: "Cetirizina pode dar sonolência",
      contraindicacoes: "Ver bula para idade mínima",
      ajustes: "Fora do componente básico na maioria dos municípios"
    },
    {
      droga: "Soro fisiológico 0,9% (lavagem nasal)",
      linha: "adj",
      dose: "Adulto: 20–60 mL ou mais em cada narina (seringa ou frasco de lavagem) · Criança: 5–20 mL em cada narina",
      via: "Intranasal",
      intervalo: "1 a 3 vezes ao dia, antes do corticoide nasal",
      duracao: "Contínuo",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Usar soro estéril ou preparado com água fervida/filtrada"
    },
    {
      droga: "Corticoide injetável de depósito, descongestionante nasal contínuo, anti-histamínico de 1ª geração (dexclorfeniramina, prometazina) de rotina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Depósito: efeitos sistêmicos sem vantagem. Descongestionante tópico > 5–7 dias: rinite medicamentosa; vasoconstritores orais/tópicos contraindicados em < 6 anos. 1ª geração: sedação e prejuízo cognitivo",
      ajustes: "Descongestionante tópico pode ser usado por no máximo 3–5 dias em crise de obstrução intensa (adulto)"
    }
  ],
  destino: {
    agora: [
      "Controle ambiental, lavagem nasal e prescrição conforme gravidade",
      "Rastrear asma e conjuntivite alérgica"
    ],
    reavaliar: [
      "2–4 semanas após iniciar: técnica, adesão, controle (escala 0–10)",
      "Depois a cada 3–6 meses; reduzir à menor dose eficaz"
    ],
    alta: [
      "Seguimento ambulatorial na UBS"
    ],
    observacao: ["—"],
    internacao: ["—"],
    transferencia: [
      "Alergologia: candidato a imunoterapia alérgeno-específica, falha terapêutica, dúvida diagnóstica, asma associada de difícil controle",
      "ORL: obstrução persistente apesar do tratamento, suspeita de alteração anatômica (septo, cornetos, adenoide), pólipos, sintomas unilaterais"
    ]
  },
  prescricao: {
    ambulatorial: "RINITE ALÉRGICA PERSISTENTE — ADULTO\nUSO NASAL\n1. Soro fisiológico 0,9% -------------------------- 2 frascos de 500 mL\n   Lavar cada narina com 20 a 60 mL (seringa ou frasco de lavagem) 1 a 2 vezes ao dia, antes do spray.\n2. Mometasona 50 mcg/jato spray nasal ---------------- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia, todos os dias. Apontar para o lado de fora da narina.\n   (ou budesonida spray nasal — 1 a 2 jatos em cada narina 1 vez ao dia, conforme concentração disponível na rede)\nUSO ORAL\n3. Loratadina 10 mg -------------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia se espirros, coceira ou coriza.\n\nCRIANÇA (exemplo 6 anos, 20 kg)\nUSO NASAL\n1. Soro fisiológico 0,9% — 5 a 10 mL em cada narina 1 a 2 vezes ao dia.\n2. Mometasona 50 mcg/jato spray nasal — 1 jato em cada narina 1 vez ao dia.\nUSO ORAL\n3. Loratadina 1 mg/mL xarope ------------------------- 1 frasco\n   Dar 5 mL (5 mg) 1 vez ao dia (≤ 30 kg; > 30 kg: 10 mL).\n\nCONTROLE AMBIENTAL (entregar por escrito)\n- Capas impermeáveis em colchão e travesseiros; lavar roupa de cama semanalmente em água quente e secar ao sol.\n- Retirar tapetes, cortinas pesadas e bichos de pelúcia do quarto; limpar com pano úmido (não varrer a seco).\n- Combater mofo e umidade; não fumar dentro de casa e no carro."
  },
  orientacoesRetorno: [
    "O spray de corticoide nasal age aos poucos: usar todos os dias por pelo menos 2 semanas para sentir o efeito completo",
    "Não usar descongestionante nasal (nafazolina, oximetazolina) por mais de 3–5 dias; causa dependência e piora a obstrução",
    "Sangramento leve do nariz: apontar o spray para fora (longe do septo) e avisar no retorno",
    "Procurar atendimento se: chiado no peito, falta de ar, febre com dor no rosto e secreção amarela/verde por mais de 10 dias, sangramento ou obstrução de um lado só",
    "Retorno em 2–4 semanas para avaliar a resposta"
  ],
  tabelas: [
    {
      titulo: "Tratamento por gravidade (ARIA / V Consenso Brasileiro)",
      colunas: ["Classificação", "Tratamento"],
      linhas: [
        ["Intermitente leve", "Anti-histamínico oral de 2ª geração sob demanda ou corticoide nasal; lavagem nasal"],
        ["Intermitente moderada/grave ou persistente leve", "Corticoide intranasal diário (preferencial) ou anti-histamínico de 2ª geração"],
        ["Persistente moderada/grave", "Corticoide intranasal diário ± anti-histamínico oral; considerar associação intranasal azelastina + fluticasona"],
        ["Não controlada", "Revisar adesão/técnica/diagnóstico; encaminhar (imunoterapia, ORL)"]
      ],
      nota: "Controle ambiental e lavagem nasal em todas as etapas."
    }
  ],
  fontes: [
    "ASBAI / ABORL-CCF / SBP — V Consenso Brasileiro sobre Rinites (2024)",
    "ARIA — Allergic Rhinitis and its Impact on Asthma: guidelines for allergic rhinitis pharmacotherapy (2024)",
    "Sociedade Brasileira de Pediatria — Guia Prático de Atualização: Rinite alérgica na infância e adolescência (2023)",
    "Ministério da Saúde — RENAME (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
