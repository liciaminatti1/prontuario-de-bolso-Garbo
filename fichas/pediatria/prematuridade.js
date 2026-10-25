// Prematuridade: classificação, cuidados e seguimento ambulatorial
registrarFicha({
  id: "prematuridade",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Prematuridade: cuidados e seguimento do prematuro",
  resumo: "RN com menos de 37 semanas. Classificação, método canguru, principais complicações (displasia broncopulmonar, retinopatia, hemorragia peri-intraventricular, enterocolite) e o que fazer no seguimento na UBS: idade corrigida, crescimento, desenvolvimento, vacinas e suplementação de ferro e vitamina D.",
  palavrasChave: "prematuro prematuridade pre-termo baixo peso muito baixo peso extremo idade corrigida metodo canguru displasia broncopulmonar dbp retinopatia da prematuridade rop hemorragia peri-intraventricular hpiv leucomalacia enterocolite necrosante ecn seguimento follow-up ferro vitamina d palivizumabe nirsevimabe vsr",
  critico: {
    tempo: "Usar idade corrigida até 2 anos",
    texto: "Avaliar crescimento e desenvolvimento pela idade corrigida até 2 anos (até 3 anos no < 28 sem, conforme o serviço). Vacinas seguem a idade cronológica. Ferro a partir de 30 dias de vida."
  },
  alarmes: [
    "Apneia, pausas respiratórias, cianose ou engasgos frequentes",
    "Desconforto respiratório, sibilância recorrente ou dependência de O₂ (DBP)",
    "Distensão abdominal, vômitos biliosos ou sangue nas fezes (enterocolite)",
    "Perímetro cefálico crescendo rápido, fontanela tensa (hidrocefalia pós-hemorrágica)",
    "Ganho de peso insuficiente ou queda de percentil",
    "Exame de retina (ROP) não realizado ou com retorno atrasado",
    "Hipotonia, hipertonia, assimetria ou atraso de marcos para a idade corrigida"
  ],
  conduta: [
    "Na 1ª consulta: ler o resumo de alta (IG, peso, complicações, exames, medicações, dieta, vacinas, retornos marcados) e conferir triagem auditiva (PEATE), reflexo vermelho, pezinho e ROP",
    "Calcular a idade corrigida: idade cronológica − (40 − IG ao nascer em semanas). Ex.: nasceu com 30 sem, tem 4 meses → 4 meses − 10 sem ≈ 1,5 mês corrigido",
    "Crescimento: curvas Intergrowth-21st até 64 sem pós-menstruais; depois OMS pela idade corrigida. Peso, comprimento e PC em toda consulta",
    "Alimentação: leite materno; fórmula para prematuro ou aditivo só conforme orientação da alta; alimentação complementar a partir de 6 meses de idade corrigida (sinais de prontidão)",
    "Suplementos: ferro a partir de 30 dias (dose por peso de nascimento, tabela) e vitamina D 400 UI/dia; multivitamínicos conforme a alta",
    "Desenvolvimento pela idade corrigida (Caderneta da Criança); estimulação precoce se atraso ou risco (< 32 sem, < 1.500 g, HPIV, leucomalacia)",
    "Vacinas na idade cronológica (exceções: BCG com ≥ 2 kg; hepatite B em < 2 kg: 4 doses); prevenção do VSR (palivizumabe ou nirsevimabe) conforme critérios vigentes do MS",
    "Seguimento compartilhado com ambulatório de egressos de UTI neonatal / follow-up do prematuro"
  ],
  exames: [
    "ROP (retinopatia): mapeamento de retina em todo RN < 1.500 g e/ou ≤ 32 semanas, e nos maiores com evolução clínica grave; 1º exame entre a 4ª e a 6ª semana de vida, repetido até a vascularização completa",
    "USG transfontanela: rotina nos < 32 semanas / < 1.500 g na 1ª semana e repetida (HPIV, leucomalacia); repetir no seguimento se PC aumentar rápido",
    "Hemograma e ferritina conforme o serviço de seguimento (anemia da prematuridade)",
    "Doença metabólica óssea (MBP): cálcio, fósforo e fosfatase alcalina conforme o seguimento",
    "Triagem auditiva com PEATE (prematuro de UTI é indicador de risco); repetir avaliação auditiva no 1º ano se fatores de risco"
  ],
  diferenciais: [
    "Atraso do desenvolvimento só aparente (avaliado pela idade cronológica em vez da corrigida)",
    "Refluxo fisiológico x apneia da prematuridade (eventos com cianose ou bradicardia exigem avaliação)",
    "Sibilância por DBP x bronquiolite viral"
  ],
  encaminhar: [
    "Oftalmologia: ROP conforme agenda (prioridade máxima; atraso pode causar cegueira)",
    "Ambulatório de seguimento do prematuro (follow-up): todo < 32 sem ou < 1.500 g, ou com complicações",
    "Neuropediatria e estimulação precoce/reabilitação: alteração de tônus, atraso de marcos, HPIV grau III–IV, leucomalacia",
    "Pneumologia pediátrica: DBP em O₂ domiciliar ou sibilância recorrente",
    "Cirurgia pediátrica: hérnia inguinal (frequente; operar logo após o diagnóstico)",
    "PS: apneia, desconforto, distensão abdominal, recusa alimentar, febre"
  ],
  tratamento: [
    {
      droga: "Sulfato ferroso (ferro elementar)",
      linha: "l1",
      dose: "Peso de nascimento 1.500–2.500 g: 2 mg/kg/dia · 1.000–1.500 g: 3 mg/kg/dia · < 1.000 g: 4 mg/kg/dia",
      via: "Oral",
      intervalo: "1 vez ao dia, longe do leite",
      duracao: "A partir de 30 dias de vida até 12 meses; depois 1 mg/kg/dia até 24 meses",
      monitorizacao: "Hemograma e ferritina conforme seguimento",
      contraindicacoes: "Transfusões múltiplas recentes (discutir; risco de sobrecarga)",
      ajustes: "Solução 25 mg/mL de ferro elementar: 1 gota ≈ 1,25 mg. SBP 2021 / ficha anemia-ferropriva-crianca"
    },
    {
      droga: "Vitamina D (colecalciferol)",
      linha: "l1",
      dose: "400 UI/dia",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "Até 12 meses (600 UI/dia de 12 a 24 meses, como no termo)",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Iniciar quando em dieta enteral plena, conforme a alta. Doses maiores só com orientação do seguimento (doença metabólica óssea). Conferir UI por gota do frasco"
    },
    {
      droga: "Palivizumabe / nirsevimabe (prevenção do VSR)",
      linha: "adj",
      dose: "Conforme nota técnica vigente do MS",
      via: "IM",
      intervalo: "Palivizumabe: mensal na sazonalidade; nirsevimabe: dose única por sazonalidade",
      duracao: "Sazonalidade regional do VSR",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Critérios do SUS mudam conforme incorporação (historicamente: palivizumabe para ≤ 28 sem 6 d no 1º ano e DBP/cardiopatia até 2 anos). Conferir a nota técnica do ano no CRIE"
    }
  ],
  prescricao: {
    ambulatorial: "PREMATURO — SUPLEMENTAÇÃO (peso de nascimento: ___ g; peso atual: ___ kg)\nUSO ORAL\n1. Sulfato ferroso solução oral 25 mg/mL de ferro elementar (1 gota ≈ 1,25 mg) ------ 1 frasco\n   Dar ___ gotas (= ___ mg/kg/dia: 2 mg/kg se nasceu com 1.500–2.500 g; 3 mg/kg se 1.000–1.500 g; 4 mg/kg se < 1.000 g) 1 vez ao dia, 30 min antes de uma mamada, a partir de 30 dias de vida até 1 ano. Recalcular a dose pelo peso a cada consulta. De 1 a 2 anos: 1 mg/kg/dia.\n2. Colecalciferol (vitamina D) gotas ------------------ 1 frasco\n   Dar ___ gotas (= 400 UI) 1 vez ao dia até 1 ano. (Conferir a concentração do frasco.)\n\nSOLICITAÇÕES\n- Mapeamento de retina para triagem de retinopatia da prematuridade (IG ___ sem / peso ___ g / idade ___ semanas) — prioridade.\n- Avaliação audiológica (PEATE) se não realizada ou falha.\n- Hemograma completo e ferritina (conforme seguimento)."
  },
  orientacoesRetorno: [
    "Compare o seu bebê com a idade que ele teria se tivesse nascido no tempo certo (idade corrigida) até os 2 anos",
    "Posição canguru em casa também ajuda: bebê só de fralda, pele com pele no peito, com a cabeça de lado e roupa por cima",
    "Lavar as mãos, evitar aglomerações e contato com pessoas gripadas nos primeiros meses; não fumar perto do bebê",
    "Dormir de barriga para cima, no berço, sem travesseiro",
    "Volte imediatamente se: pausas na respiração ou bebê roxo, respiração rápida ou com gemido, barriga inchada, vômito verde, sangue nas fezes, febre, bebê molinho ou sem mamar",
    "Não falte ao exame dos olhos (retina) e às consultas do ambulatório do prematuro"
  ],
  tabelas: [
    {
      titulo: "Classificação do RN pré-termo",
      colunas: ["Critério", "Categoria", "Definição"],
      linhas: [
        ["IG", "Pré-termo extremo", "< 28 semanas"],
        ["IG", "Muito pré-termo", "28 a 31 sem e 6 dias"],
        ["IG", "Pré-termo moderado", "32 a 33 sem e 6 dias"],
        ["IG", "Pré-termo tardio", "34 a 36 sem e 6 dias"],
        ["Peso", "Baixo peso", "< 2.500 g"],
        ["Peso", "Muito baixo peso", "< 1.500 g"],
        ["Peso", "Extremo baixo peso", "< 1.000 g"],
        ["Peso x IG", "PIG / AIG / GIG", "Abaixo do P10 / entre P10 e P90 / acima do P90 (Intergrowth-21st)"]
      ],
      nota: "OMS: pré-termo moderado e tardio podem ser agrupados (32 a 36 sem e 6 dias)."
    },
    {
      titulo: "Principais complicações da prematuridade",
      colunas: ["Complicação", "Definição / quando suspeitar", "No seguimento"],
      linhas: [
        ["Displasia broncopulmonar (DBP)", "Necessidade de O₂ ou suporte com 36 sem de idade pós-menstrual", "Sibilância recorrente, infecções graves por VSR; O₂ domiciliar; prevenção de VSR; evitar fumaça"],
        ["Retinopatia da prematuridade (ROP)", "Vascularização anormal da retina; risco maior < 1.500 g e < 32 sem", "Triagem até vascularização completa; após ROP: estrabismo, miopia — oftalmologia anual"],
        ["Hemorragia peri-intraventricular (HPIV) / leucomalacia", "Maioria na 1ª semana; grau III–IV e leucomalacia → alto risco motor", "PC seriado (hidrocefalia), tônus, marcos; estimulação precoce"],
        ["Enterocolite necrosante (ECN)", "Distensão, resíduo, sangue nas fezes, pneumatose no RX", "Após ECN: estenose intestinal (vômitos, distensão semanas depois), síndrome do intestino curto"],
        ["Apneia da prematuridade", "Pausa ≥ 20 s ou com bradicardia/cianose; costuma resolver até 43–44 sem pós-menstruais", "Cafeína só conforme a alta; eventos novos → PS"],
        ["Anemia e doença metabólica óssea", "Anemia da prematuridade; fosfatase alcalina alta, fósforo baixo", "Ferro, vitamina D; exames do seguimento"]
      ],
      nota: "Método canguru (MS): 1ª etapa na UTI neonatal (contato pele a pele precoce), 2ª etapa na unidade canguru com a mãe, 3ª etapa em casa com retornos ambulatoriais frequentes até 2,5 kg."
    }
  ],
  fontes: [
    "Ministério da Saúde — Atenção Humanizada ao Recém-Nascido: Método Canguru, manual técnico (3ª ed., 2017)",
    "Sociedade Brasileira de Pediatria — Seguimento ambulatorial do prematuro de risco (Departamento de Neonatologia, 2012; atualizações)",
    "Sociedade Brasileira de Pediatria — Consenso sobre anemia ferropriva: atualização (2021)",
    "Sociedade Brasileira de Pediatria — Hipovitaminose D em pediatria: recomendações (2016)",
    "Sociedade Brasileira de Pediatria / Conselho Brasileiro de Oftalmologia — Retinopatia da prematuridade: diretrizes de triagem",
    "OMS — Recommendations for care of the preterm or low-birth-weight infant (2022)",
    "Ministério da Saúde — Calendário Nacional de Vacinação e Manual dos CRIE (vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
