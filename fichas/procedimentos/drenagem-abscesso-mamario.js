// Drenagem de abscesso mamário: punção aspirativa guiada por USG e incisão-drenagem
registrarFicha({
  id: "drenagem-abscesso-mamario",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Drenagem de abscesso mamário (punção guiada por USG e incisão)",
  resumo: "Punção aspirativa guiada por ultrassom (1ª escolha) e incisão-drenagem do abscesso mamário puerperal ou não puerperal, mantendo a amamentação, com cultura e antibiótico.",
  palavrasChave: "abscesso mamario abscesso de mama mastite puerperal lactacional puncao aspirativa guiada por usg ultrassom agulha incisao drenagem amamentacao cultura do pus mrsa periductal subareolar nao puerperal",
  critico: {
    tempo: "USG e aspirar; não parar de amamentar",
    texto: "Abscesso mamário confirmado por USG: aspiração por agulha guiada por USG é a 1ª escolha (pode repetir). Manter a amamentação ou a extração de leite das duas mamas. Incisão se pele necrótica/fina, coleção grande ou multiloculada, ou falha das punções."
  },
  alarmes: [
    "Febre alta, taquicardia, hipotensão ou confusão: sepse — antibiótico IV e drenagem",
    "Pele necrótica, escurecida ou muito fina sobre o abscesso: incisão (a pele vai romper)",
    "Eritema e edema difusos (pele em casca de laranja) sem coleção, sem resposta ao antibiótico, ou mulher fora da lactação: excluir carcinoma inflamatório",
    "Massa que persiste após o tratamento: USG/mamografia e biópsia",
    "Dor ou eritema que avança rapidamente com bolhas ou crepitação: infecção necrosante"
  ],
  indicacoes: [
    "Abscesso mamário confirmado por USG (coleção hipoecoica com ou sem septos) em lactante ou não lactante",
    "Mastite que não melhora em 48–72 h de antibiótico com massa dolorosa: USG para procurar abscesso e aspirar"
  ],
  contraindicacoes: [
    "Mastite sem coleção ao USG: tratar com antibiótico, esvaziamento e analgesia (ver mastite)",
    "Abscesso grande, multiloculado, profundo/retroareolar complexo ou recidivado após punções: drenagem cirúrgica pela mastologia/cirurgia",
    "Suspeita de neoplasia (massa sólida, mulher fora do ciclo grávido-puerperal sem resposta): biópsia antes ou junto, pela mastologia",
    "Coagulopatia grave (relativa)"
  ],
  materiais: [
    "Ultrassom com transdutor linear, capa estéril e gel estéril",
    "Luvas estéreis, campo fenestrado, gazes, clorexidina alcoólica ou PVPI",
    "Lidocaína 1% ou 2% sem vasoconstritor, seringa 5–10 mL, agulha 30 × 7 e 40 × 12",
    "Para punção: agulha 18 G (40 × 12) ou 16–18 G, seringa de 20 mL (ou extensor + seringa)",
    "SF 0,9% para irrigação da cavidade (opcional)",
    "Frascos estéreis para cultura e antibiograma do pus (e do leite, se indicado)",
    "Para incisão: bisturi lâmina nº 11 ou 15, pinça Kelly, dreno de Penrose ou tira de gaze",
    "Curativo absorvente; sutiã de suporte confortável"
  ],
  checagemAntes: [
    "USG confirmando coleção: tamanho, profundidade, número de lojas, distância do mamilo",
    "Lactante ou não; tempo pós-parto; tabagismo, piercing, diabetes (abscesso não puerperal/periductal)",
    "Sinais vitais e sinais de sepse",
    "Alergias (lidocaína, antibióticos, látex, clorexidina)",
    "Antibiótico em uso e há quantos dias",
    "Explicar: pode precisar repetir a punção a cada 2–3 dias; a amamentação continua; consentimento verbal"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Paciente em decúbito dorsal ou levemente lateral, braço do lado afetado acima da cabeça",
      "Se lactante: amamentar ou extrair o leite antes (mama mais vazia facilita e dói menos)",
      "Antissepsia da pele e do transdutor (capa estéril), campo"
    ] },
    { etapa: "Punção aspirativa guiada por USG (1ª escolha)", itens: [
      "Localizar a coleção e escolher trajeto curto, longe da aréola e do mamilo quando possível",
      "Anestesiar a pele e o trajeto com lidocaína, sem atingir a cavidade",
      "Introduzir a agulha 18 G sob visão contínua do USG até o centro da coleção e aspirar até esvaziar",
      "Enviar a 1ª amostra para Gram, cultura e antibiograma",
      "Opcional: irrigar com pequenos volumes de SF 0,9% e reaspirar até o retorno clarear",
      "Confirmar ao USG a redução da coleção; retirar a agulha e comprimir"
    ] },
    { etapa: "Incisão e drenagem (quando indicada)", itens: [
      "Indicações: pele necrótica ou muito fina, abscesso grande ou multiloculado, pus muito espesso que não sai pela agulha, ou falha após repetidas punções",
      "Anestesia local em leque na pele sobre a coleção",
      "Incisão radial (no sentido dos ductos) ou curvilínea seguindo as linhas de Langer, sobre o ponto de flutuação, o mais longe possível da aréola (preserva ductos e permite a pega)",
      "Desfazer loculações com pinça Kelly ou dedo; irrigar com SF 0,9%",
      "Dreno de Penrose ou gaze frouxa se cavidade grande; retirar em 24–72 h",
      "Lactante: não deve haver contato da boca do bebê com a ferida; se a incisão impedir a pega, extrair o leite dessa mama até cicatrizar"
    ] },
    { etapa: "Finalização", itens: [
      "Curativo absorvente; sutiã de suporte",
      "Antibiótico (ver prescrição) e analgesia compatíveis com amamentação",
      "Retorno em 48–72 h com USG para decidir nova punção"
    ] }
  ],
  conferirDepois: [
    "Volume aspirado e aspecto; amostra de cultura identificada e enviada",
    "Hemostasia e ausência de hematoma",
    "Amamentação mantida (ou extração de leite) das duas mamas; orientar pega e esvaziamento frequente",
    "Antibiótico prescrito por 10–14 dias, ajustado pela cultura",
    "Retorno marcado; USG de controle; após resolução, USG se massa residual",
    "Abscesso não puerperal (periductal/subareolar): orientar parar de fumar, encaminhar à mastologia (recorrência e fístula mamilar são comuns)"
  ],
  complicacoes: [
    "Reacúmulo: nova punção guiada por USG a cada 2–3 dias até resolver; após várias falhas, incisão",
    "Fístula de leite (lactante): costuma fechar espontaneamente; manter esvaziamento",
    "Fístula mamária (abscesso periductal não puerperal): mastologia para excisão dos ductos",
    "Hematoma ou sangramento: compressão",
    "Cicatriz e deformidade: maior com incisão; por isso a punção é preferida",
    "Massa residual: USG; persistência = biópsia (excluir carcinoma)"
  ],
  prescricao: {
    ambulatorial: "ABSCESSO MAMÁRIO DRENADO — ADULTO (compatível com amamentação)\nUSO ORAL\n1. Cefalexina 500 mg ------------------------------------ 56 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 14 dias (mínimo 10 dias).\n   Alergia à penicilina (não grave ou grave): Clindamicina 300 mg — tomar 1 cápsula de 6 em 6 horas por 10 a 14 dias.\n   Suspeita de MRSA (falha, cultura, recorrência): Sulfametoxazol + trimetoprima 800/160 mg — 1 comprimido de 12 em 12 horas por 10 a 14 dias (evitar se bebê com menos de 1 mês, prematuro, ictérico ou com deficiência de G6PD; preferir clindamicina nesses casos).\n   Abscesso NÃO puerperal (periductal, tabagista): Amoxicilina + clavulanato 875/125 mg de 12 em 12 horas por 10 a 14 dias (cobre anaeróbios).\n2. Ibuprofeno 400 mg -------------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 7 dias.\n3. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n\nCUIDADOS\n4. Continuar amamentando nas duas mamas, começando pela menos dolorida; se não houver pega na mama operada, extrair o leite com bomba ou à mão a cada 2 a 3 horas.\n5. Compressa fria após as mamadas para dor e inchaço.",
    hospitalar: "ABSCESSO MAMÁRIO COM SEPSE OU SEM TOLERÂNCIA ORAL: ver prescrição hospitalar da ficha mastite (cefazolina IV; vancomicina se MRSA; clindamicina se alergia grave) + drenagem guiada por USG ou cirúrgica."
  },
  tabelas: [
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h após punção", "Repetir USG e nova aspiração; incisão se várias falhas", "A falha mais comum é coleção residual"],
        ["Falha da cefalexina ou cultura com MRSA", "SMX-TMP 800/160 mg de 12/12 h ou clindamicina 300 mg de 6/6 h, conforme antibiograma", "SMX-TMP: cuidado com bebê < 1 mês, prematuro, ictérico ou G6PD; doxiciclina só em curso curto e se não houver alternativa na lactação"],
        ["Resistência à clindamicina (inclusive induzível, teste D)", "SMX-TMP se compatível; senão vancomicina IV", "Discutir com infectologia"],
        ["Alergia grave a betalactâmico", "Clindamicina VO ou IV", "Compatível com amamentação; observar diarreia no bebê"],
        ["Sepse, celulite extensa ou falha do oral", "Internar: cefazolina IV; vancomicina se MRSA ou falha prévia", "Ver ficha mastite"],
        ["Não melhora apesar de antibiótico adequado e drenagens", "Mastologia: drenagem cirúrgica e biópsia", "Excluir carcinoma inflamatório, mastite granulomatosa e tuberculose mamária"]
      ]
    }
  ],
  documentacao: "Procedimento: [punção aspirativa guiada por USG / incisão e drenagem] de abscesso mamário à [direita / esquerda], quadrante [ ].\nContexto: [lactante, [ ] dias pós-parto / não puerperal].\nUSG: coleção de [ ] × [ ] cm, [uniloculada / multiloculada], a [ ] cm da pele.\nAnestesia: lidocaína [ ]%, [ ] mL.\nAgulha [ ] G. Aspirado: [ ] mL de pus [ ]. Irrigação com [ ] mL de SF 0,9%: [sim / não].\n[Incisão [radial / curvilínea] de [ ] cm; loculações desfeitas; dreno: [ ]].\nCultura: enviada.\nIntercorrências: [nenhuma].\nAntibiótico: [esquema]. Amamentação mantida: [sim / extração de leite].\nRetorno com USG em [ ] dias.\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Continue amamentando: o leite não faz mal ao bebê e esvaziar a mama ajuda a curar",
    "Se não conseguir dar o peito do lado operado, tire o leite com bomba ou com a mão a cada 2 a 3 horas",
    "Tome o antibiótico até o fim",
    "Pode ser preciso puncionar de novo em 2 a 3 dias; volte no dia marcado com o ultrassom",
    "Volte antes se tiver febre, a mama ficar mais vermelha, inchada ou dura, a pele escurecer ou sair pus pela pele"
  ],
  relacionadas: ["mastite", "amamentacao-problemas", "nodulo-mamario", "drenagem-abscesso", "anestesia-local", "sepse"],
  fontes: [
    "Academy of Breastfeeding Medicine — Clinical Protocol #36: The Mastitis Spectrum (2022)",
    "Ministério da Saúde — Saúde da Criança: Aleitamento Materno e Alimentação Complementar, Cadernos de Atenção Básica nº 23 (2015)",
    "OMS — Mastitis: causes and management (2000)",
    "Ministério da Saúde/Anvisa — uso de medicamentos e outras substâncias pela mulher durante a amamentação (2010)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
