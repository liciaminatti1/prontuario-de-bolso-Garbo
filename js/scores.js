/* Escores clínicos. Cada escore:
   - itens: { t: texto, p: pontos } (marcar) ou { t, opcoes: [[texto, pontos], ...] } (escolher)
   - interpretar(total, marcados) → { nivel: "baixo" | "medio" | "alto", texto }
   - fichas: ids das fichas onde o escore aparece
   - tipo "regra": positivo se qualquer item for marcado (ex.: regras de decisão)
   Referência no campo "fonte". Conferir com a diretriz antes de decidir. */

const SCORES = [
  { id: "wells-tep", nome: "Wells para TEP", fichas: ["tep"], fonte: "Wells PS et al., 2000; ESC 2019",
    itens: [
      { t: "Sinais clínicos de TVP (edema, dor à palpação de veias profundas)", p: 3 },
      { t: "TEP é o diagnóstico mais provável", p: 3 },
      { t: "FC > 100 bpm", p: 1.5 },
      { t: "Imobilização ≥ 3 dias ou cirurgia nas últimas 4 semanas", p: 1.5 },
      { t: "TVP ou TEP prévios", p: 1.5 },
      { t: "Hemoptise", p: 1 },
      { t: "Câncer ativo (tratamento nos últimos 6 meses ou paliativo)", p: 1 }],
    interpretar: s => s > 4
      ? { nivel: "alto", texto: "TEP provável (> 4): angio-TC de tórax; anticoagular enquanto aguarda se sem contraindicação." }
      : { nivel: "baixo", texto: "TEP improvável (≤ 4): D-dímero (corte ajustado à idade se > 50 anos: idade × 10). Se ≤ 1,5 ponto, aplicar PERC." } },
  { id: "perc", nome: "PERC (exclusão de TEP)", tipo: "regra", fichas: ["tep"], fonte: "Kline JA et al., 2004",
    itens: [
      { t: "Idade ≥ 50 anos" }, { t: "FC ≥ 100 bpm" }, { t: "SpO₂ < 95% em ar ambiente" }, { t: "Hemoptise" },
      { t: "Uso de estrogênio" }, { t: "TVP/TEP prévios" }, { t: "Edema unilateral de membro inferior" },
      { t: "Cirurgia ou trauma com internação nas últimas 4 semanas" }],
    interpretar: (s, n) => n === 0
      ? { nivel: "baixo", texto: "PERC negativo: se a probabilidade clínica é baixa, TEP excluído sem D-dímero." }
      : { nivel: "medio", texto: "PERC positivo: não exclui TEP; seguir com D-dímero ou imagem." } },
  { id: "spesi", nome: "sPESI (gravidade do TEP)", fichas: ["tep"], fonte: "Jiménez D et al., 2010; ESC 2019",
    itens: [{ t: "Idade > 80 anos", p: 1 }, { t: "Câncer", p: 1 }, { t: "Insuficiência cardíaca ou doença pulmonar crônica", p: 1 },
      { t: "FC ≥ 110 bpm", p: 1 }, { t: "PAS < 100 mmHg", p: 1 }, { t: "SpO₂ < 90%", p: 1 }],
    interpretar: s => s === 0
      ? { nivel: "baixo", texto: "Baixo risco (mortalidade 30 dias ~1%): avaliar alta precoce com anticoagulante oral se VD normal e sem outros problemas." }
      : { nivel: "alto", texto: "Risco intermediário ou maior: internar; estratificar com função de VD e troponina." } },
  { id: "heart", nome: "HEART (dor torácica)", fichas: ["sca", "dor-toracica-ubs"], fonte: "Backus BE et al., 2013",
    itens: [
      { t: "História", opcoes: [["Pouco suspeita", 0], ["Moderadamente suspeita", 1], ["Altamente suspeita", 2]] },
      { t: "ECG", opcoes: [["Normal", 0], ["Alteração inespecífica da repolarização", 1], ["Infradesnível de ST significativo", 2]] },
      { t: "Idade", opcoes: [["< 45 anos", 0], ["45–64 anos", 1], ["≥ 65 anos", 2]] },
      { t: "Fatores de risco", opcoes: [["Nenhum", 0], ["1–2 fatores", 1], ["≥ 3 fatores ou doença aterosclerótica conhecida", 2]] },
      { t: "Troponina", opcoes: [["≤ limite normal", 0], ["1–3× o limite", 1], ["> 3× o limite", 2]] }],
    interpretar: s => s <= 3 ? { nivel: "baixo", texto: "0–3: baixo risco (MACE ~1,7%): alta com seguimento se troponinas seriadas negativas." }
      : s <= 6 ? { nivel: "medio", texto: "4–6: risco moderado (~17%): observação, troponina seriada e investigação." }
      : { nivel: "alto", texto: "7–10: alto risco (~50%): estratégia invasiva precoce." } },
  { id: "curb65", nome: "CURB-65 (pneumonia)", fichas: ["pneumonia"], fonte: "Lim WS et al., 2003; SBPT 2018",
    itens: [{ t: "Confusão mental nova", p: 1 }, { t: "Ureia > 50 mg/dL (7 mmol/L)", p: 1 }, { t: "FR ≥ 30 irpm", p: 1 },
      { t: "PAS < 90 ou PAD ≤ 60 mmHg", p: 1 }, { t: "Idade ≥ 65 anos", p: 1 }],
    interpretar: s => s <= 1 ? { nivel: "baixo", texto: "0–1: tratamento ambulatorial." }
      : s === 2 ? { nivel: "medio", texto: "2: considerar internação (ou observação/ambulatório supervisionado)." }
      : { nivel: "alto", texto: "≥ 3: internar; 4–5 avaliar UTI." } },
  { id: "crb65", nome: "CRB-65 (pneumonia, sem laboratório)", fichas: ["pneumonia"], fonte: "BTS; SBPT 2018",
    itens: [{ t: "Confusão mental nova", p: 1 }, { t: "FR ≥ 30 irpm", p: 1 }, { t: "PAS < 90 ou PAD ≤ 60 mmHg", p: 1 }, { t: "Idade ≥ 65 anos", p: 1 }],
    interpretar: s => s === 0 ? { nivel: "baixo", texto: "0: tratamento ambulatorial." }
      : s <= 2 ? { nivel: "medio", texto: "1–2: avaliar no hospital / considerar internação." }
      : { nivel: "alto", texto: "3–4: internação urgente." } },
  { id: "cha2ds2va", nome: "CHA₂DS₂-VA (FA)", fichas: ["fibrilacao-atrial", "anticoagulacao-oral", "avc-prevencao-secundaria"], fonte: "ESC 2024; SBC/SOBRAC 2025",
    itens: [{ t: "Insuficiência cardíaca", p: 1 }, { t: "Hipertensão", p: 1 }, { t: "Idade ≥ 75 anos", p: 2 }, { t: "Diabetes", p: 1 },
      { t: "AVC, AIT ou embolia prévios", p: 2 }, { t: "Doença vascular (IAM, DAP, placa aórtica)", p: 1 }, { t: "Idade 65–74 anos", p: 1 }],
    interpretar: s => s === 0 ? { nivel: "baixo", texto: "0: anticoagulação não recomendada." }
      : s === 1 ? { nivel: "medio", texto: "1: considerar anticoagulação." }
      : { nivel: "alto", texto: "≥ 2: anticoagulação recomendada (DOAC preferido, exceto prótese mecânica/estenose mitral)." } },
  { id: "hasbled", nome: "HAS-BLED (risco de sangramento)", fichas: ["fibrilacao-atrial", "anticoagulacao-oral"], fonte: "Pisters R et al., 2010",
    itens: [{ t: "Hipertensão não controlada (PAS > 160)", p: 1 }, { t: "Função renal alterada (diálise, transplante, Cr ≥ 2,26)", p: 1 },
      { t: "Função hepática alterada (cirrose, bilirrubina/TGO muito elevadas)", p: 1 }, { t: "AVC prévio", p: 1 },
      { t: "Sangramento prévio ou predisposição", p: 1 }, { t: "INR lábil", p: 1 }, { t: "Idade > 65 anos", p: 1 },
      { t: "Antiagregante ou AINE", p: 1 }, { t: "Álcool (≥ 8 doses/semana)", p: 1 }],
    interpretar: s => s >= 3 ? { nivel: "alto", texto: "≥ 3: alto risco de sangramento — corrigir fatores modificáveis e acompanhar de perto (não contraindica anticoagulação por si só)." }
      : { nivel: "baixo", texto: "0–2: risco baixo a moderado." } },
  { id: "qsofa", nome: "qSOFA (alerta de sepse)", fichas: ["sepse", "pielonefrite"], fonte: "Sepsis-3, 2016",
    itens: [{ t: "FR ≥ 22 irpm", p: 1 }, { t: "Alteração do nível de consciência", p: 1 }, { t: "PAS ≤ 100 mmHg", p: 1 }],
    interpretar: s => s >= 2 ? { nivel: "alto", texto: "≥ 2: alto risco de desfecho ruim — abrir protocolo de sepse, lactato e SOFA." }
      : { nivel: "baixo", texto: "< 2 não exclui sepse: reavaliar e usar critérios de disfunção orgânica." } },
  { id: "glasgow", nome: "Escala de coma de Glasgow", fichas: ["tce-leve", "tce-moderado-grave", "tce-crianca", "avc", "convulsao", "pos-pcr", "intoxicacoes-exogenas", "meningite"], fonte: "Teasdale G, Jennett B, 1974 (versão 2014)",
    itens: [
      { t: "Abertura ocular", opcoes: [["Espontânea", 4], ["Ao som", 3], ["À pressão", 2], ["Nenhuma", 1]] },
      { t: "Resposta verbal", opcoes: [["Orientada", 5], ["Confusa", 4], ["Palavras", 3], ["Sons", 2], ["Nenhuma", 1]] },
      { t: "Resposta motora", opcoes: [["Obedece comandos", 6], ["Localiza", 5], ["Flexão normal", 4], ["Flexão anormal", 3], ["Extensão", 2], ["Nenhuma", 1]] }],
    inicial: [0, 0, 0],
    interpretar: s => s >= 13 ? { nivel: "baixo", texto: "13–15: TCE leve." } : s >= 9 ? { nivel: "medio", texto: "9–12: TCE moderado." }
      : { nivel: "alto", texto: "≤ 8: grave — proteger via aérea (IOT)." },
    nota: "Pupilas: subtrair 1 ponto se uma pupila não reage e 2 se ambas não reagem (Glasgow-P). Na criança pré-verbal usar a escala verbal pediátrica." },
  { id: "canadian-ct", nome: "Regra canadense para TC no TCE leve", tipo: "regra", fichas: ["tce-leve"], fonte: "Stiell IG et al., 2001",
    itens: [{ t: "Glasgow < 15 duas horas após o trauma" }, { t: "Suspeita de fratura aberta ou com afundamento" },
      { t: "Sinais de fratura de base de crânio" }, { t: "≥ 2 episódios de vômito" }, { t: "Idade ≥ 65 anos" },
      { t: "Amnésia retrógrada ≥ 30 minutos" }, { t: "Mecanismo perigoso (atropelamento, ejeção, queda > 1 m ou 5 degraus)" }],
    interpretar: (s, n) => n > 0 ? { nivel: "alto", texto: "Algum critério presente: solicitar TC de crânio." }
      : { nivel: "baixo", texto: "Nenhum critério: TC não indicada pela regra (não se aplica a anticoagulados, < 16 anos ou convulsão)." } },
  { id: "abcd2", nome: "ABCD² (AIT)", fichas: ["avc", "avc-prevencao-secundaria"], fonte: "Johnston SC et al., 2007",
    itens: [{ t: "Idade ≥ 60 anos", p: 1 }, { t: "PA ≥ 140/90 na avaliação", p: 1 },
      { t: "Clínica", opcoes: [["Outros sintomas", 0], ["Alteração de fala sem fraqueza", 1], ["Fraqueza unilateral", 2]] },
      { t: "Duração", opcoes: [["< 10 min", 0], ["10–59 min", 1], ["≥ 60 min", 2]] }, { t: "Diabetes", p: 1 }],
    interpretar: s => s <= 3 ? { nivel: "baixo", texto: "0–3: risco baixo de AVC em 2 dias (~1%) — ainda assim investigar rapidamente." }
      : s <= 5 ? { nivel: "medio", texto: "4–5: risco moderado (~4%)." } : { nivel: "alto", texto: "6–7: risco alto (~8%): internar/investigação imediata." },
    nota: "Não usar isoladamente para dispensar investigação: todo AIT merece avaliação vascular rápida." },
  { id: "ottawa-hsa", nome: "Regra de Ottawa para HSA", tipo: "regra", fichas: ["cefaleia-ps"], fonte: "Perry JJ et al., 2013",
    itens: [{ t: "Idade ≥ 40 anos" }, { t: "Dor ou rigidez cervical" }, { t: "Perda de consciência testemunhada" },
      { t: "Início durante esforço" }, { t: "Cefaleia em trovoada (máxima instantaneamente)" }, { t: "Flexão do pescoço limitada ao exame" }],
    interpretar: (s, n) => n > 0 ? { nivel: "alto", texto: "Algum critério: investigar HSA (TC sem contraste; se > 6 h ou dúvida, punção lombar ou angio-TC)." }
      : { nivel: "baixo", texto: "Nenhum critério: HSA excluída pela regra (válida para alerta, > 15 anos, dor máxima em 1 h, sem déficit)." } },
  { id: "centor", nome: "Centor / McIsaac (faringite)", fichas: ["ivas-sinusite", "escarlatina"], fonte: "McIsaac WJ et al., 1998",
    itens: [{ t: "Febre > 38 °C", p: 1 }, { t: "Ausência de tosse", p: 1 }, { t: "Adenopatia cervical anterior dolorosa", p: 1 },
      { t: "Exsudato ou edema amigdaliano", p: 1 },
      { t: "Idade", opcoes: [["3–14 anos", 1], ["15–44 anos", 0], ["≥ 45 anos", -1]] }],
    interpretar: s => s <= 1 ? { nivel: "baixo", texto: "≤ 1: risco baixo; sem teste nem antibiótico." }
      : s <= 3 ? { nivel: "medio", texto: "2–3: teste rápido para estreptococo; tratar se positivo." }
      : { nivel: "alto", texto: "≥ 4: teste rápido (ou antibiótico empírico se teste indisponível)." } },
  { id: "westley", nome: "Westley (crupe)", fichas: ["crupe"], fonte: "Westley CR et al., 1978",
    itens: [
      { t: "Estridor", opcoes: [["Ausente", 0], ["Com agitação", 1], ["Em repouso", 2]] },
      { t: "Retração", opcoes: [["Ausente", 0], ["Leve", 1], ["Moderada", 2], ["Grave", 3]] },
      { t: "Entrada de ar", opcoes: [["Normal", 0], ["Diminuída", 1], ["Muito diminuída", 2]] },
      { t: "Cianose", opcoes: [["Ausente", 0], ["Com agitação", 4], ["Em repouso", 5]] },
      { t: "Consciência", opcoes: [["Normal", 0], ["Desorientada", 5]] }],
    interpretar: s => s <= 2 ? { nivel: "baixo", texto: "≤ 2: leve — dexametasona VO e alta." }
      : s <= 5 ? { nivel: "medio", texto: "3–5: moderado — dexametasona; adrenalina nebulizada se estridor em repouso; observar." }
      : { nivel: "alto", texto: "≥ 6: grave — adrenalina nebulizada + dexametasona; ≥ 12 insuficiência respiratória iminente." } },
  { id: "phq9", nome: "PHQ-9 (depressão)", fichas: ["depressao-ansiedade"], fonte: "Kroenke K et al., 2001",
    itens: ["Pouco interesse ou prazer em fazer as coisas", "Sentir-se para baixo, deprimido(a) ou sem esperança", "Dificuldade para dormir ou dormir demais",
      "Cansaço ou pouca energia", "Falta de apetite ou comer demais", "Sentir-se mal consigo mesmo(a), fracassado(a)", "Dificuldade de concentração",
      "Lentidão ou agitação percebida por outros", "Pensar que seria melhor estar morto(a) ou em se machucar"]
      .map(t => ({ t, opcoes: [["Nenhuma vez", 0], ["Vários dias", 1], ["Mais da metade dos dias", 2], ["Quase todos os dias", 3]] })),
    interpretar: (s, n, v) => {
      const suic = v && v[8] > 0 ? " Item 9 positivo: avaliar risco de suicídio agora." : "";
      if (s <= 4) return { nivel: suic ? "alto" : "baixo", texto: "0–4: mínimo." + suic };
      if (s <= 9) return { nivel: suic ? "alto" : "baixo", texto: "5–9: leve." + suic };
      if (s <= 14) return { nivel: suic ? "alto" : "medio", texto: "10–14: moderada." + suic };
      if (s <= 19) return { nivel: "alto", texto: "15–19: moderadamente grave." + suic };
      return { nivel: "alto", texto: "20–27: grave." + suic };
    } },
  { id: "gad7", nome: "GAD-7 (ansiedade)", fichas: ["depressao-ansiedade", "crise-ansiedade"], fonte: "Spitzer RL et al., 2006",
    itens: ["Sentir-se nervoso(a), ansioso(a) ou muito tenso(a)", "Não conseguir parar ou controlar as preocupações", "Preocupar-se muito com diversas coisas",
      "Dificuldade para relaxar", "Ficar tão agitado(a) que é difícil ficar parado(a)", "Ficar facilmente irritado(a)", "Sentir medo como se algo horrível fosse acontecer"]
      .map(t => ({ t, opcoes: [["Nenhuma vez", 0], ["Vários dias", 1], ["Mais da metade dos dias", 2], ["Quase todos os dias", 3]] })),
    interpretar: s => s <= 4 ? { nivel: "baixo", texto: "0–4: mínima." } : s <= 9 ? { nivel: "baixo", texto: "5–9: leve." }
      : s <= 14 ? { nivel: "medio", texto: "10–14: moderada." } : { nivel: "alto", texto: "15–21: grave." } },
  { id: "ipss", nome: "IPSS (sintomas prostáticos)", fichas: ["hpb", "prostatite"], fonte: "AUA; Barry MJ et al., 1992",
    itens: ["Esvaziamento incompleto", "Urinar de novo em menos de 2 horas", "Jato intermitente", "Dificuldade para segurar (urgência)",
      "Jato fraco", "Esforço para começar a urinar"]
      .map(t => ({ t, opcoes: [["Nunca", 0], ["< 1 em 5 vezes", 1], ["< metade das vezes", 2], ["Metade das vezes", 3], ["> metade das vezes", 4], ["Quase sempre", 5]] }))
      .concat([{ t: "Noctúria (vezes por noite)", opcoes: [["0", 0], ["1", 1], ["2", 2], ["3", 3], ["4", 4], ["≥ 5", 5]] }]),
    interpretar: s => s <= 7 ? { nivel: "baixo", texto: "0–7: sintomas leves — orientação e observação." }
      : s <= 19 ? { nivel: "medio", texto: "8–19: moderados — considerar alfabloqueador." } : { nivel: "alto", texto: "20–35: graves — tratamento e avaliação urológica." } },
  { id: "padua", nome: "Pádua (profilaxia de TEV em internados)", fichas: ["sepse", "pneumonia", "ic-descompensada", "avc", "dpoc-exacerbacao", "pielonefrite"], fonte: "Barbar S et al., 2010",
    itens: [{ t: "Câncer ativo", p: 3 }, { t: "TEV prévio", p: 3 }, { t: "Mobilidade reduzida (≥ 3 dias)", p: 3 }, { t: "Trombofilia conhecida", p: 3 },
      { t: "Trauma ou cirurgia no último mês", p: 2 }, { t: "Idade ≥ 70 anos", p: 1 }, { t: "Insuficiência cardíaca ou respiratória", p: 1 },
      { t: "IAM ou AVC isquêmico agudo", p: 1 }, { t: "Infecção aguda ou doença reumatológica", p: 1 }, { t: "Obesidade (IMC ≥ 30)", p: 1 },
      { t: "Terapia hormonal", p: 1 }],
    interpretar: s => s >= 4 ? { nivel: "alto", texto: "≥ 4: alto risco de TEV — profilaxia farmacológica se sem risco de sangramento (ex.: enoxaparina 40 mg SC/dia)." }
      : { nivel: "baixo", texto: "< 4: baixo risco — deambulação precoce; profilaxia farmacológica não rotineira." } }
];

SCORES.push(
  { id: "fagerstrom", nome: "Fagerström (dependência de nicotina)", fichas: ["tabagismo"], fonte: "Heatherton TF et al., 1991; INCA",
    itens: [
      { t: "Quanto tempo após acordar fuma o 1º cigarro?", opcoes: [["Após 60 min", 0], ["31–60 min", 1], ["6–30 min", 2], ["Nos primeiros 5 min", 3]] },
      { t: "Difícil não fumar em locais proibidos?", opcoes: [["Não", 0], ["Sim", 1]] },
      { t: "Qual cigarro mais lhe satisfaz?", opcoes: [["Outros", 0], ["O primeiro da manhã", 1]] },
      { t: "Quantos cigarros por dia?", opcoes: [["≤ 10", 0], ["11–20", 1], ["21–30", 2], ["≥ 31", 3]] },
      { t: "Fuma mais nas primeiras horas do dia?", opcoes: [["Não", 0], ["Sim", 1]] },
      { t: "Fuma mesmo doente, acamado?", opcoes: [["Não", 0], ["Sim", 1]] }],
    interpretar: s => s <= 2 ? { nivel: "baixo", texto: "0–2: dependência muito baixa." } : s <= 4 ? { nivel: "baixo", texto: "3–4: dependência baixa." }
      : s === 5 ? { nivel: "medio", texto: "5: dependência média — considerar adesivo 21 mg." } : { nivel: "alto", texto: "6–10: dependência elevada — adesivo 21 mg + nicotina de curta ação ± bupropiona." } },
  { id: "audit-c", nome: "AUDIT-C (consumo de álcool)", fichas: ["uso-alcool"], fonte: "Bush K et al., 1998; OMS",
    itens: [
      { t: "Com que frequência toma bebida alcoólica?", opcoes: [["Nunca", 0], ["Mensalmente ou menos", 1], ["2–4 vezes por mês", 2], ["2–3 vezes por semana", 3], ["4 ou mais vezes por semana", 4]] },
      { t: "Quantas doses toma num dia típico?", opcoes: [["1–2", 0], ["3–4", 1], ["5–6", 2], ["7–9", 3], ["10 ou mais", 4]] },
      { t: "Com que frequência toma 6 ou mais doses numa ocasião?", opcoes: [["Nunca", 0], ["Menos que mensalmente", 1], ["Mensalmente", 2], ["Semanalmente", 3], ["Diariamente ou quase", 4]] }],
    interpretar: s => s >= 4 ? { nivel: s >= 8 ? "alto" : "medio", texto: `${s} pontos: positivo (≥ 4 em homens, ≥ 3 em mulheres). Aplicar o AUDIT completo e fazer intervenção breve.${s >= 8 ? " Pontuação alta sugere uso nocivo ou dependência." : ""}` }
      : s === 3 ? { nivel: "medio", texto: "3 pontos: positivo em mulheres (≥ 3); em homens, abaixo do corte (≥ 4)." }
      : { nivel: "baixo", texto: "Rastreio negativo." } }
);

const SCORE_POR_ID = Object.fromEntries(SCORES.map(s => [s.id, s]));
const scoresDaFicha = id => SCORES.filter(s => s.fichas.includes(id));

/* Soma os pontos. valores: para cada item, true/false (marcar) ou índice da opção (escolher). */
function totalScore(score, valores) {
  let total = 0, marcados = 0;
  score.itens.forEach((it, i) => {
    const v = valores[i];
    if (it.opcoes) { if (v !== undefined && v !== null && v !== "") { total += it.opcoes[v][1]; marcados++; } }
    else if (v) { total += it.p || 0; marcados++; }
  });
  return { total, marcados };
}

if (typeof module !== "undefined") module.exports = { SCORES, totalScore, scoresDaFicha };
