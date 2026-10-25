// Doença celíaca
registrarFicha({
  id: "doenca-celiaca",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Doença celíaca",
  resumo: "Enteropatia autoimune desencadeada pelo glúten em pessoas geneticamente predispostas. Rastreio com antitransglutaminase IgA + IgA total (em dieta com glúten), confirmação por biópsia duodenal (ou sem biópsia em criança selecionada) e dieta sem glúten por toda a vida.",
  palavrasChave: "doenca celiaca celiaco gluten antitransglutaminase anti ttg iga total antiendomisio ema biopsia duodenal marsh dieta sem gluten trigo cevada centeio aveia dermatite herpetiforme anemia ferropriva refrataria baixa estatura diarreia cronica sindrome de down diabetes tipo 1 tireoidite",
  critico: {
    tempo: "Testar antes de tirar o glúten",
    texto: "Sorologia e biópsia só valem com o paciente comendo glúten. Não orientar dieta sem glúten antes de concluir a investigação."
  },
  alarmes: [
    "Criança com desnutrição, distensão abdominal, diarreia e queda na curva de peso/altura",
    "Desidratação, hipocalemia, hipoalbuminemia (crise celíaca)",
    "Sintomas persistentes apesar de dieta correta por 12 meses (celíaca refratária, linfoma)",
    "Perda de peso, dor abdominal, sangramento, febre em celíaco antigo (linfoma T associado a enteropatia, adenocarcinoma de delgado)",
    "Anemia grave, osteoporose com fratura em jovem"
  ],
  conduta: [
    "Suspeitar: diarreia crônica, distensão, perda de peso, déficit de crescimento, anemia ferropriva sem causa ou refratária ao ferro oral, transaminases elevadas sem causa, osteoporose precoce, aftas recorrentes, defeito de esmalte dentário, dermatite herpetiforme, infertilidade, puberdade atrasada",
    "Testar grupos de risco mesmo assintomáticos (tabela)",
    "Pedir antitransglutaminase IgA (anti-tTG IgA) + IgA sérica total, com o paciente comendo glúten",
    "IgA total baixa: pedir teste baseado em IgG (antigliadina deaminada IgG ou anti-tTG IgG)",
    "Sorologia positiva → gastroenterologia para endoscopia com biópsias duodenais (≥ 4 da 2ª porção + 1–2 do bulbo), ainda comendo glúten",
    "Criança (ESPGHAN 2020): anti-tTG IgA ≥ 10× o limite superior + antiendomísio IgA positivo em 2ª amostra → diagnóstico sem biópsia, decidido pelo gastropediatra com a família",
    "Adulto: biópsia continua sendo o padrão (ACG 2023); diagnóstico sem biópsia em adulto só em casos selecionados, com o especialista",
    "Sorologia negativa e suspeita forte (ou já em dieta sem glúten): HLA-DQ2/DQ8 negativo praticamente exclui; se positivo, reintrodução de glúten orientada pelo especialista antes de repetir sorologia/biópsia",
    "Confirmado: dieta sem glúten por toda a vida (trigo, centeio, cevada e derivados; aveia só certificada sem contaminação, com cautela), com nutricionista",
    "Rastrear e repor carências: ferro, folato, B12, vitamina D, cálcio, zinco; densitometria óssea no adulto ao diagnóstico",
    "Avaliar vacina pneumocócica (hiposplenismo funcional) e vacinação conforme calendário",
    "Testar parentes de 1º grau (sorologia)",
    "Seguimento: anti-tTG IgA aos 6 e 12 meses e depois anualmente; hemograma, ferritina, função hepática, TSH, vitamina D anualmente; crescimento em crianças"
  ],
  exames: [
    "Antitransglutaminase IgA + IgA sérica total (triagem inicial)",
    "IgA deficiente: antigliadina deaminada IgG (DGP-IgG) ou anti-tTG IgG",
    "Antiendomísio IgA (confirmação na via sem biópsia da criança)",
    "EDA com ≥ 4 biópsias da 2ª porção do duodeno e 1–2 do bulbo (classificação de Marsh-Oberhuber: linfocitose intraepitelial, hiperplasia de criptas, atrofia vilositária)",
    "Hemograma, ferritina, ferro sérico, folato, B12, 25-OH-vitamina D, cálcio, albumina, TGO/TGP, TSH",
    "Densitometria óssea (adulto) ao diagnóstico",
    "HLA-DQ2/DQ8 (alto valor preditivo negativo; disponibilidade limitada no SUS)"
  ],
  diferenciais: [
    "Sensibilidade ao glúten não celíaca (sorologia e biópsia normais)",
    "Alergia ao trigo (IgE mediada)",
    "Síndrome do intestino irritável",
    "Giardíase, supercrescimento bacteriano, enteropatia por olmesartana, imunodeficiência comum variável, doença de Crohn, enteropatia autoimune",
    "Intolerância à lactose (pode ser secundária à celíaca)"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES — SUSPEITA DE DOENÇA CELÍACA (manter dieta com glúten até concluir)\n1. Anticorpo antitransglutaminase tecidual IgA.\n2. IgA sérica total.\n3. Hemograma, ferritina, ferro sérico, ácido fólico, vitamina B12, 25-OH-vitamina D, cálcio, albumina, TGO, TGP, TSH.\n4. Se sorologia positiva: encaminhamento à gastroenterologia (adulto ou pediátrica) para endoscopia digestiva alta com biópsias de duodeno (≥ 4 da 2ª porção + 1–2 do bulbo).\n\nAPÓS CONFIRMAÇÃO\nORIENTAÇÕES\n5. Dieta isenta de glúten por toda a vida (sem trigo, centeio, cevada, malte; aveia só se certificada sem glúten). Encaminhamento à nutrição.\n\nUSO ORAL (se anemia ferropriva)\n6. Sulfato ferroso 40 mg de ferro elementar -------- 60 comprimidos\n   Adulto: tomar 1 comprimido 1 vez ao dia (ou em dias alternados), 1 hora antes de uma refeição, por 3 meses após normalizar a hemoglobina.\n   Criança: sulfato ferroso gotas (25 mg de ferro elementar/mL) — 3 a 5 mg/kg/dia de ferro elementar (máximo 60 mg/dia), 1 vez ao dia, longe das refeições.\n7. Ácido fólico 5 mg ------------------------------ 30 comprimidos (se folato baixo)\n   Adulto: tomar 1 comprimido 1 vez ao dia por 3 meses."
  },
  orientacoesRetorno: [
    "Não tirar o glúten antes de terminar os exames: isso pode dar resultado falso negativo",
    "Depois do diagnóstico, o tratamento é a dieta sem glúten para sempre: trigo, centeio, cevada e malte (pão, macarrão, bolo, biscoito, cerveja)",
    "Ler o rótulo: por lei, todo alimento deve informar 'contém glúten' ou 'não contém glúten'; cuidado com contaminação na cozinha (torradeira, farinha, óleo de fritura)",
    "Familiares de 1º grau (pais, irmãos, filhos) devem fazer o exame de sangue",
    "Procurar atendimento se diarreia forte, desidratação, perda de peso ou sangramento",
    "Retornar em 6 meses com o exame de antitransglutaminase e depois 1 vez ao ano"
  ],
  encaminhar: [
    "Gastroenterologia (ou gastropediatria): sorologia positiva, suspeita forte com sorologia negativa, deficiência de IgA",
    "Nutrição: todo diagnóstico confirmado",
    "Dermatologia: dermatite herpetiforme",
    "Gastroenterologia com prioridade: sintomas persistentes após 12 meses de dieta, perda de peso ou sangramento (refratária/linfoma)"
  ],
  tabelas: [
    {
      titulo: "Grupos de risco — testar mesmo sem sintomas",
      colunas: ["Grupo", "Observação"],
      linhas: [
        ["Parentes de 1º grau de celíaco", "Repetir se surgirem sintomas"],
        ["Diabetes tipo 1", "Ao diagnóstico e periodicamente"],
        ["Tireoidite autoimune, hepatite autoimune, colangite biliar", "—"],
        ["Síndromes de Down, Turner e Williams", "—"],
        ["Deficiência seletiva de IgA", "Usar teste IgG"],
        ["Anemia ferropriva refratária, osteoporose precoce, transaminases elevadas sem causa", "—"],
        ["Dermatite herpetiforme", "Equivale a celíaca; biópsia de pele com IF direta"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT Doença Celíaca (Portaria SAS/MS nº 1.149, 2015)",
    "ESPGHAN Guidelines for diagnosing coeliac disease (2020)",
    "ACG Clinical Guidelines: Diagnosis and Management of Celiac Disease (Rubio-Tapia et al., 2023)",
    "Lei nº 10.674/2003 — obrigatoriedade de informar a presença de glúten nos rótulos",
    "Ministério da Saúde — Programa Nacional de Suplementação de Ferro / Caderno de Atenção Básica (2013)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
