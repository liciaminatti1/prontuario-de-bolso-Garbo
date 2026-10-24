// Drenos cirúrgicos — tipos, débito, aspecto, retirada e complicações
registrarFicha({
  id: "drenos-cuidados",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Drenos cirúrgicos: tipos, débito, aspecto e retirada",
  resumo: "Consulta rápida para o paciente que chega com dreno (Penrose, tubular de sucção tipo Portovac/Hemovac/Blake, Jackson-Pratt, dreno de Kehr, dreno percutâneo pigtail): o que observar no débito e no aspecto, quando suspeitar de complicação e critérios gerais de retirada. A retirada é decisão da equipe cirúrgica.",
  palavrasChave: "dreno penrose portovac hemovac jackson pratt blake kehr dreno em t pigtail debito do dreno aspecto do dreno retirada de dreno fistula biliar pancreatica quilosa sangramento dreno obstruido",
  alarmes: [
    "Débito sanguinolento vivo e volumoso, com taquicardia ou queda de Hb (hemorragia)",
    "Aspecto bilioso (verde), entérico, fecaloide ou purulento (fístula ou abscesso)",
    "Líquido leitoso (fístula quilosa) ou cristalino abundante com cheiro de urina (fístula urinária)",
    "Parada súbita do débito com dor ou distensão (dreno obstruído ou deslocado)",
    "Febre, celulite ou secreção purulenta no óstio do dreno",
    "Dreno exteriorizado/saiu parcialmente — não reintroduzir"
  ],
  conduta: [
    "Identificar: tipo de dreno, cirurgia, local, data de colocação e o que a equipe espera (débito habitual)",
    "Medir e anotar débito (mL/24 h) e aspecto a cada esvaziamento; dreno de sucção: manter o reservatório comprimido (vácuo) e abaixo do nível da inserção",
    "Óstio: limpar com SF 0,9%, cobrir com gaze; trocar se úmido; Penrose drena para bolsa coletora ou gaze",
    "Conferir fixação (ponto na pele) e ausência de dobras",
    "Aspecto alterado: dosar no líquido conforme suspeita (tabela) e comparar com o sangue; comunicar a equipe",
    "Não ordenhar com força nem lavar dreno cirúrgico sem orientação da equipe (exceção: pigtail de radiologia com lavagem prescrita)",
    "Retirada (pela equipe): débito baixo e seroso (em geral < 30–50 mL/24 h, conforme protocolo do serviço), sem fístula, paciente bem. Retirar com tração contínua após cortar o ponto; ocluir o óstio com gaze",
    "Dreno de Kehr (via biliar): retirada só pelo cirurgião, em geral após colangiografia pelo dreno normal; não fechar nem retirar no PS"
  ],
  exames: [
    "Hemoglobina/hematócrito do líquido (sangramento: Ht do dreno próximo ao sérico)",
    "Bilirrubina do líquido (fístula biliar: ≥ 3× a bilirrubina sérica a partir do 3º dia — ISGLS 2011)",
    "Amilase do líquido (fístula pancreática: > 3× o limite superior da amilase sérica a partir do 3º dia — ISGPS 2016)",
    "Triglicerídeos do líquido (fístula quilosa: em geral > 110 mg/dL)",
    "Creatinina do líquido (fístula urinária: muito maior que a sérica)",
    "Gram e cultura se purulento",
    "TC com contraste se suspeita de coleção residual, fístula ou dreno mal posicionado"
  ],
  tabelas: [
    {
      titulo: "Aspecto do líquido e significado",
      colunas: ["Aspecto", "Pensar em"],
      linhas: [
        ["Serossanguinolento que clareia", "Esperado nos primeiros dias"],
        ["Seroso / citrino", "Esperado; débito alto e persistente: ascite, linfa, seroma"],
        ["Sanguinolento vivo, volumoso", "Hemorragia — sinais vitais, Hb, cirurgião"],
        ["Bilioso (verde/amarelo-escuro)", "Fístula biliar (colecistectomia, hepatectomia, Kehr)"],
        ["Entérico / fecaloide", "Fístula ou deiscência de anastomose"],
        ["Purulento", "Abscesso/infecção"],
        ["Leitoso", "Fístula quilosa (após dieta com gordura)"],
        ["Água de rocha, cristalino, cheiro de urina", "Fístula urinária (dosar creatinina)"],
        ["Turvo acinzentado/'água de coco' com amilase alta", "Fístula pancreática"]
      ]
    },
    {
      titulo: "Tipos de dreno",
      colunas: ["Dreno", "Características"],
      linhas: [
        ["Penrose", "Lâmina de látex, drenagem passiva por capilaridade; drena para gaze ou bolsa; usado em superfícies e cavidades"],
        ["Tubular de sucção fechada (Portovac, Hemovac, Blake, Jackson-Pratt)", "Sistema fechado com vácuo no reservatório (sanfona ou pera); menor risco de infecção; manter comprimido"],
        ["Kehr (dreno em T)", "Na via biliar após exploração do colédoco; drena bile; retirada programada pelo cirurgião"],
        ["Pigtail percutâneo", "Colocado pela radiologia em abscesso/coleção; pode precisar de lavagem prescrita"],
        ["Tubular simples / sonda (ex.: Malecot)", "Drenagem por gravidade (ex.: gastrostomia, cistostomia — ver fichas específicas)"]
      ],
      nota: "Dreno de tórax: seguir ficha/protocolo próprio de drenagem torácica."
    }
  ],
  prescricao: {
    hospitalar: "CUIDADOS COM DRENO CIRÚRGICO\n1. Medir e anotar o débito e o aspecto do dreno a cada 6 h (total em 24 h).\n2. Manter o reservatório de sucção comprimido e abaixo do nível do óstio; esvaziar quando atingir metade da capacidade.\n3. Curativo do óstio com SF 0,9% e gaze seca 1 vez ao dia e se úmido.\n4. Conferir fixação e ausência de dobras a cada turno.\n5. Avisar o médico se: débito sanguinolento > 100 mL/h ou aumento súbito, mudança de aspecto (bile, fezes, pus, leite), parada súbita do débito com dor, febre ou saída do dreno.",
    ambulatorial: "ALTA COM DRENO — ORIENTAÇÕES\n1. Esvaziar o reservatório 1 a 2 vezes ao dia, anotar a quantidade e a cor em uma folha.\n2. Manter a sanfona/pera apertada (vácuo) e presa à roupa, abaixo do local do dreno.\n3. Curativo diário na UBS ou em casa: limpar ao redor com soro fisiológico e cobrir com gaze.\n4. Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor.\n5. Retorno com o cirurgião em ___/___ para avaliar a retirada (levar as anotações)."
  },
  orientacoesRetorno: [
    "Anotar todos os dias quanto saiu e a cor do líquido; levar no retorno",
    "Não puxar nem dobrar o dreno; prender o reservatório na roupa",
    "Voltar imediatamente se: sair sangue vivo em grande quantidade, líquido verde, com cheiro de fezes ou pus, febre, dor forte, vermelhidão ao redor, ou se o dreno sair do lugar",
    "Se o dreno sair sozinho: cobrir o local com gaze limpa e procurar atendimento; não tentar recolocar"
  ],
  fontes: [
    "ISGPS — 2016 update of the International Study Group definition and grading of postoperative pancreatic fistula (Bassi et al., 2017)",
    "ISGLS — Definition and grading of bile leakage after hepatobiliary surgery (Koch et al., 2011)",
    "Sabiston Textbook of Surgery, 21ª ed. (2022); Brunner & Suddarth — cuidados de enfermagem com drenos"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
