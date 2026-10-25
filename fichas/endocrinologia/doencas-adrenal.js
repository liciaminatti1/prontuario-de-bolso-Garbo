// Incidentaloma adrenal, rastreio de Cushing e hiperplasia adrenal congênita
registrarFicha({
  id: "doencas-adrenal",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Incidentaloma adrenal e rastreio de síndrome de Cushing",
  resumo: "Nódulo de adrenal achado em exame de imagem feito por outro motivo: definir se é benigno pela imagem e se produz hormônio. Inclui quando e como rastrear síndrome de Cushing e quando pensar em hiperplasia adrenal congênita. Insuficiência adrenal: ver ficha própria; hiperaldosteronismo e feocromocitoma: ver hipertensao-secundaria.",
  palavrasChave: "incidentaloma adrenal suprarrenal nodulo adenoma carcinoma adrenocortical unidades hounsfield washout sindrome de cushing hipercortisolismo cortisol salivar noturno cortisol livre urinario supressao dexametasona 1 mg secrecao autonoma de cortisol macs hiperplasia adrenal congenita 17-hidroxiprogesterona 21-hidroxilase hirsutismo",
  alarmes: [
    "Massa adrenal > 4 cm, heterogênea, de margens irregulares ou com densidade alta na TC sem contraste (suspeita de carcinoma)",
    "Crescimento rápido em exames seriados",
    "Virilização rápida em mulher (carcinoma secretor de androgênio)",
    "Crises de cefaleia, sudorese e palpitação (feocromocitoma — não puncionar a massa)",
    "Hipocalemia grave, HAS de difícil controle",
    "Cushing florido: fraqueza proximal importante, infecções, hipocalemia, psicose (pensar em secreção ectópica de ACTH)"
  ],
  conduta: [
    "Incidentaloma: lesão ≥ 1 cm em adrenal achada em imagem não dirigida à adrenal; avaliar IMAGEM e FUNÇÃO em todos",
    "Imagem: TC sem contraste; densidade ≤ 10 UH e aspecto homogêneo = adenoma rico em lipídio benigno, sem necessidade de nova imagem",
    "Densidade > 10 UH ou heterogêneo = indeterminado → endocrinologia (TC com washout, RM com chemical shift, PET-CT ou cirurgia, conforme tamanho e aspecto)",
    "Função — todos: supressão com 1 mg de dexametasona (secreção autônoma de cortisol)",
    "Hipertensos ou com hipocalemia: aldosterona e renina (ver hipertensao-secundaria)",
    "Lesão indeterminada (> 10 UH) ou sintomas adrenérgicos: metanefrinas plasmáticas livres ou urinárias fracionadas",
    "Sinais de excesso androgênico ou suspeita de carcinoma: DHEA-S, testosterona (mulher), androstenediona",
    "Bilateral: também 17-OH-progesterona (HAC) e avaliar insuficiência adrenal (cortisol basal e ACTH)",
    "Biópsia de adrenal NÃO é de rotina (só suspeita de metástase com feocromocitoma excluído)",
    "Secreção autônoma leve de cortisol: rastrear e tratar HAS, diabetes, dislipidemia e osteoporose; cirurgia em casos selecionados (especialista)",
    "Cushing — quem rastrear: múltiplos sinais e progressivos (estrias violáceas largas, pletora facial, fraqueza proximal, equimoses fáceis), características incomuns para a idade (osteoporose ou HAS em jovem), criança com ganho de peso e parada do crescimento, incidentaloma adrenal",
    "Antes de rastrear Cushing: excluir corticoide exógeno (oral, inalatório, tópico, infiltração, injetáveis 'para dor') — causa mais comum",
    "Rastreio de Cushing: 1 ou 2 dos testes da tabela; se alterado, repetir/confirmar com outro e encaminhar à endocrinologia (não rastrear de rotina obesos ou DM2 sem sinais)",
    "Hiperplasia adrenal congênita: forma clássica detectada no teste do pezinho (17-OH-progesterona) ou por genitália atípica/crise perdedora de sal no RN; forma não clássica em mulher com hirsutismo, acne ou irregularidade menstrual (diferencial da SOP — ver sop): 17-OH-progesterona basal pela manhã na fase folicular; elevada → endocrinologia"
  ],
  exames: [
    "TC de abdome sem contraste com medida da densidade (UH) da lesão adrenal; ou RM com chemical shift",
    "Supressão com dexametasona 1 mg: tomar 1 mg VO às 23 h e colher cortisol sérico às 8 h do dia seguinte",
    "Cortisol salivar às 23–24 h (2 amostras em dias diferentes) e/ou cortisol livre urinário de 24 h (2 coletas)",
    "Aldosterona e renina; metanefrinas plasmáticas livres ou urinárias fracionadas de 24 h",
    "Potássio, glicemia/HbA1c, perfil lipídico, densitometria óssea se secreção autônoma de cortisol",
    "17-OH-progesterona basal (8 h, fase folicular), DHEA-S, testosterona total se hiperandrogenismo"
  ],
  diferenciais: [
    "Adenoma não funcionante (maioria)",
    "Feocromocitoma",
    "Carcinoma adrenocortical",
    "Metástase (pulmão, mama, rim, melanoma), sobretudo se câncer conhecido ou bilateral",
    "Mielolipoma (gordura macroscópica), cisto, hemorragia adrenal",
    "Pseudo-Cushing: alcoolismo, depressão grave, obesidade grave, diabetes descompensado",
    "Hiperplasia adrenal bilateral, tuberculose ou histoplasmose adrenal (bilateral, com insuficiência adrenal)"
  ],
  tabelas: [
    {
      titulo: "Testes de rastreio para síndrome de Cushing",
      colunas: ["Teste", "Normal (exclui)", "Interferências"],
      linhas: [
        ["Supressão com 1 mg de dexametasona (23 h → cortisol 8 h)", "Cortisol ≤ 1,8 µg/dL", "Falso-positivo: estrogênio/anticoncepcional oral (aumenta CBG), carbamazepina, fenitoína, rifampicina, má absorção"],
        ["Cortisol salivar noturno (23–24 h), 2 amostras", "Abaixo do limite do laboratório", "Trabalho noturno, tabagismo, sangramento gengival"],
        ["Cortisol livre urinário 24 h, 2 coletas", "Abaixo do limite do laboratório", "Coleta incompleta, ingestão hídrica muito alta, TFG baixa (falso-negativo)"]
      ],
      nota: "No incidentaloma, após 1 mg de dexametasona: ≤ 1,8 µg/dL exclui; 1,9–5,0 µg/dL = possível secreção autônoma de cortisol; > 5,0 µg/dL = secreção autônoma (ESE/ENSAT 2023)."
    },
    {
      titulo: "Seguimento do incidentaloma",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Homogêneo, ≤ 10 UH, < 4 cm, hormônios normais", "Alta do seguimento de imagem e hormonal (reavaliar se surgirem sinais clínicos)"],
        ["Indeterminado < 4 cm, sem decisão de cirurgia", "Nova imagem em 6–12 meses (especialista)"],
        ["Indeterminado ≥ 4 cm, crescimento ou suspeito", "Cirurgia (adrenalectomia) em centro de referência"],
        ["Hiperfuncionante (Cushing, aldosterona, feo)", "Endocrinologia e cirurgia"]
      ],
      nota: "ESE/ENSAT 2023."
    }
  ],
  prescricao: {
    ambulatorial: "PEDIDO DE EXAMES — INCIDENTALOMA ADRENAL\n- Tomografia computadorizada de abdome sem contraste com medida de densidade (UH) da lesão adrenal ___ (se não constar no laudo).\n- Teste de supressão com 1 mg de dexametasona: tomar 1 comprimido de dexametasona 1 mg (ou 2 de 0,5 mg) às 23 h e colher cortisol sérico às 8 h do dia seguinte.\n- Sódio, potássio, glicemia, creatinina.\n- Se hipertenso ou K baixo: aldosterona sérica e atividade de renina plasmática.\n- Se lesão > 10 UH ou sintomas: metanefrinas livres plasmáticas OU metanefrinas fracionadas em urina de 24 h.\n- Se sinais de hiperandrogenismo: DHEA-S, testosterona total.\n\nPRESCRIÇÃO PARA O TESTE (USO ORAL)\n1. Dexametasona 0,5 mg ---------------------------- 2 comprimidos\n   Tomar 2 comprimidos juntos às 23 horas do dia ___/___ e colher o sangue às 8 horas do dia seguinte."
  },
  orientacoesRetorno: [
    "A maioria dos nódulos de adrenal achados por acaso é benigna e não produz hormônios",
    "Os exames de sangue e urina mostram se o nódulo produz hormônio; tomar a dexametasona exatamente no horário marcado",
    "Avisar se usa qualquer corticoide (comprimido, pomada, bombinha, injeção) ou anticoncepcional",
    "Voltar antes se pressão muito alta com dor de cabeça, suor e palpitação, fraqueza nas pernas ou ganho de peso rápido com manchas roxas na pele"
  ],
  encaminhar: [
    "Endocrinologia: imagem indeterminada, qualquer alteração hormonal, lesão bilateral, rastreio positivo para Cushing, suspeita de HAC",
    "Cirurgia (adrenal, em centro de referência): ≥ 4 cm indeterminado, crescimento, hiperfuncionante com indicação",
    "Oncologia: suspeita de metástase ou carcinoma",
    "PS: crise adrenal (ver insuficiencia-adrenal), crise de feocromocitoma, hipocalemia grave"
  ],
  fontes: [
    "ESE/ENSAT — Management of adrenal incidentalomas: European Society of Endocrinology clinical practice guideline (Eur J Endocrinol, 2023)",
    "Endocrine Society — The Diagnosis of Cushing's Syndrome (2008) e Pituitary Society — Consensus on diagnosis and management of Cushing's disease (Lancet Diabetes Endocrinol, 2021)",
    "Endocrine Society — Congenital Adrenal Hyperplasia Due to Steroid 21-Hydroxylase Deficiency (2018)",
    "Endocrine Society — Primary Aldosteronism Clinical Practice Guideline (2025)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
