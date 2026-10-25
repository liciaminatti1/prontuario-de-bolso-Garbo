// Hérnias da parede abdominal não complicadas
registrarFicha({
  id: "hernias-parede-abdominal",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Hérnias da parede abdominal (inguinal, femoral, umbilical, incisional)",
  resumo: "Hérnias redutíveis e sem complicação: diagnóstico clínico, quando pedir imagem, quem operar e com que prioridade (HerniaSurge 2018/2023, EHS). Hérnia irredutível dolorosa ou com sinais de obstrução: ver ficha hernias-complicadas.",
  palavrasChave: "hernia inguinal femoral crural umbilical epigastrica incisional eventracao diastase retos abdominais herniorrafia hernioplastia lichtenstein tela laparoscopica tep tapp watchful waiting espera vigilante herniasurge redutivel",
  alarmes: [
    "Hérnia que não volta (irredutível) com dor contínua, vermelhidão ou pele arroxeada: estrangulamento — PS",
    "Vômitos, distensão e parada de gases ou fezes com hérnia presente: obstrução — PS",
    "Hérnia femoral (abaixo do ligamento inguinal, mais em mulher idosa): alto risco de estrangular — encaminhar com prioridade",
    "Hérnia que ficou irredutível recentemente, mesmo indolor",
    "Pele fina, ulcerada ou com secreção sobre hérnia umbilical ou incisional (risco de ruptura, sobretudo no cirrótico com ascite)"
  ],
  conduta: [
    "Diagnóstico clínico: abaulamento que aumenta com Valsalva/tosse e reduz em decúbito; examinar em pé e deitado, os dois lados",
    "Inguinal: acima do ligamento inguinal (mais em homem); femoral: abaixo e medial à veia femoral (mais em mulher)",
    "Imagem só se dúvida diagnóstica: USG de parede (1ª), TC ou RM em casos selecionados; não pedir USG para hérnia evidente",
    "Inguinal sintomática: encaminhar para cirurgia eletiva (tela; Lichtenstein ou laparoscopia TEP/TAPP)",
    "Inguinal assintomática ou pouco sintomática em homem: espera vigilante é segura, mas a maioria acaba operando por sintomas em 5–10 anos; decidir com o paciente",
    "Inguinal em mulher: encaminhar para cirurgia (risco de ser femoral); via laparoscópica preferida pelo HerniaSurge",
    "Femoral: sempre operar, com prioridade, mesmo assintomática",
    "Umbilical/epigástrica do adulto: operar se sintomática ou crescendo; tela se defeito ≥ 1 cm (EHS/AHS 2020)",
    "Incisional: avaliar sintomas, tamanho e risco; otimizar antes (parar de fumar, perda de peso, controle do DM)",
    "Cirrótico com ascite: controlar a ascite antes; risco alto de complicação, discutir com cirurgia e hepatologia",
    "Cinta ou funda não tratam a hérnia; uso só temporário para alívio, se o paciente preferir"
  ],
  exames: [
    "Nenhum exame para diagnóstico de hérnia evidente",
    "USG de parede abdominal / região inguinal: abaulamento duvidoso, dor inguinal sem hérnia palpável, obeso",
    "TC de abdome: hérnia incisional grande ou complexa (planejamento), suspeita de hérnia oculta (Spiegel, obturadora)",
    "Pré-operatório conforme ficha avaliacao-pre-operatoria"
  ],
  diferenciais: [
    "Hidrocele, varicocele, cisto de cordão, testículo retrátil",
    "Linfonodomegalia inguinal, lipoma, abscesso, aneurisma de artéria femoral, varizes da safena (sinal da tosse com frêmito)",
    "Pubalgia/dor inguinal do atleta, lesão de adutores, artrose de quadril",
    "Diástase dos retos abdominais (não é hérnia, não estrangula; cirurgia só estética/funcional)"
  ],
  tabelas: [
    {
      titulo: "Indicação e prioridade de cirurgia (adulto)",
      colunas: ["Tipo", "Indicação", "Prioridade"],
      linhas: [
        ["Inguinal sintomática", "Cirurgia com tela", "Eletiva"],
        ["Inguinal assintomática, homem", "Espera vigilante ou cirurgia (decisão compartilhada)", "Eletiva / acompanhar"],
        ["Inguinal em mulher", "Cirurgia (laparoscopia preferida)", "Eletiva com prioridade"],
        ["Femoral", "Cirurgia sempre", "Prioritária"],
        ["Umbilical/epigástrica sintomática", "Cirurgia; tela se defeito ≥ 1 cm", "Eletiva"],
        ["Incisional", "Cirurgia se sintomática; otimizar fatores de risco antes", "Eletiva"],
        ["Encarcerada aguda / estrangulada", "Ver hernias-complicadas", "Urgência"]
      ],
      nota: "Criança: hérnia inguinal deve ser operada logo após o diagnóstico (risco de encarceramento, sobretudo no lactente e no prematuro). Hérnia umbilical infantil costuma fechar sozinha; encaminhar se persistir após 4–5 anos, se grande ou se encarcerar."
    }
  ],
  prescricao: {
    ambulatorial: "USO ORAL (se dor, enquanto aguarda cirurgia)\n1. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n2. Paracetamol 750 mg ------------------------------- 1 caixa\n   Tomar 1 comprimido de 8 em 8 horas se dor (alternativa à dipirona; máximo 3 g/dia).\n\nENCAMINHAMENTO\nCirurgia geral — hérnia ___ (inguinal/femoral/umbilical/incisional) ___ (direita/esquerda/bilateral), redutível, ___ (sintomática/assintomática), há ___ meses. Comorbidades: ___. Tabagismo: ___. IMC: ___. Prioridade: ___ (femoral ou mulher: prioritária)."
  },
  orientacoesRetorno: [
    "A hérnia não some sozinha no adulto; o tratamento é a cirurgia",
    "Evitar prisão de ventre e tosse crônica; parar de fumar e perder peso melhoram o resultado da cirurgia",
    "Se a hérnia sair, deitar e empurrar com delicadeza; se não voltar em alguns minutos, procurar o PS",
    "Procurar o PS imediatamente se a hérnia ficar dura, muito dolorida, vermelha ou roxa, ou se aparecer vômito e barriga inchada",
    "Depois da cirurgia: atividade leve logo; esforço conforme orientação do cirurgião (em geral volta à rotina em 1–2 semanas)"
  ],
  encaminhar: [
    "Cirurgia geral eletiva: hérnia inguinal sintomática, inguinal em mulher, umbilical/incisional sintomática",
    "Cirurgia geral com prioridade: hérnia femoral, hérnia recém-irredutível sem dor, pele sobre a hérnia comprometida",
    "PS (mesmo dia): suspeita de encarceramento doloroso ou estrangulamento",
    "Cirurgia pediátrica: toda hérnia inguinal em criança; umbilical após 4–5 anos ou complicada"
  ],
  fontes: [
    "HerniaSurge Group — International guidelines for groin hernia management (Hernia, 2018) e atualização (2023)",
    "European Hernia Society / Americas Hernia Society — Guidelines for treatment of umbilical and epigastric hernias (Br J Surg, 2020)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
