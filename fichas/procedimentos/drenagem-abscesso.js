// Incisão e drenagem de abscesso cutâneo
registrarFicha({
  id: "drenagem-abscesso",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Incisão e drenagem de abscesso cutâneo",
  resumo: "Técnica de incisão e drenagem (I&D) de abscesso de pele e subcutâneo na UBS ou no PS, com critérios para usar antibiótico após a drenagem e situações que exigem centro cirúrgico.",
  palavrasChave: "drenagem de abscesso incisao e drenagem i&d abscesso cutaneo furunculo antraz carbunculo flutuacao pus loculacao gaze dreno penrose usg ponto de cuidado mrsa antibiotico",
  critico: {
    tempo: "Drenar: o tratamento é a incisão",
    texto: "Abscesso com flutuação se trata com incisão e drenagem; antibiótico sozinho não resolve. Abscesso em face (triângulo nasolabial), mão, períneo/perianal, mama ou perto de vasos grandes: avaliar especialista ou centro cirúrgico."
  },
  alarmes: [
    "Febre alta, taquicardia, hipotensão ou confusão: sepse — acesso venoso, exames, antibiótico IV e drenagem ampla",
    "Dor desproporcional, crepitação, bolhas, necrose ou pele acinzentada: suspeitar fasceíte necrosante — cirurgia de urgência",
    "Abscesso no triângulo da face (nariz e lábio superior): risco de tromboflebite do seio cavernoso — não espremer; avaliar especialista",
    "Massa pulsátil ou próxima a artéria (virilha, axila, pescoço): pode ser pseudoaneurisma — USG antes de incisar",
    "Abscesso perianal, pilonidal grande, mamário em lactante ou de mão (paroníquia profunda, panarício, espaços palmares): encaminhar conforme o caso"
  ],
  indicacoes: [
    "Abscesso cutâneo com flutuação ou coleção confirmada ao ultrassom",
    "Furúnculo grande ou antraz com área de flutuação",
    "Cisto epidérmico infectado com coleção (drenar agora; exérese da cápsula depois, já sem inflamação)"
  ],
  contraindicacoes: [
    "Celulite sem coleção (endurecimento sem flutuação): tratar com antibiótico e reavaliar em 24–48 h; USG pode mostrar coleção oculta",
    "Abscesso profundo, muito grande, de face central, mão, mama, região perianal/perirretal ou próximo a grandes vasos e nervos: drenagem por especialista/centro cirúrgico",
    "Suspeita de aneurisma ou malformação vascular",
    "Coagulopatia grave não corrigida (relativa)"
  ],
  materiais: [
    "Luvas estéreis, campo fenestrado, gazes, foco de luz, avental e óculos (pus pode espirrar)",
    "Antisséptico: clorexidina ou PVPI",
    "Lidocaína 1% ou 2% (com ou sem vasoconstritor), seringa 10 mL, agulha 40 × 12 e 25 × 7",
    "Lâmina de bisturi nº 11 ou nº 15 com cabo",
    "Pinça hemostática curva (Kelly) para romper loculações",
    "Seringa de 20 mL e SF 0,9% (100–250 mL) para irrigação",
    "Swab ou seringa estéril para cultura do pus",
    "Gaze (tira) ou dreno de Penrose para abscessos grandes (> 5 cm)",
    "Curativo absorvente e fita; coletor de perfurocortante",
    "Ultrassom à beira-leito, se disponível (confirma coleção e profundidade)"
  ],
  checagemAntes: [
    "Confirmar flutuação (ou coleção à USG); demarcar a área de eritema com caneta para seguimento",
    "Sinais sistêmicos (febre, taquicardia, hipotensão) e comorbidades: diabetes (glicemia), imunossupressão, uso de drogas injetáveis",
    "Alergias (anestésico, antibióticos, látex)",
    "Uso de anticoagulante ou antiagregante",
    "Situação vacinal do tétano (ver tetano-profilaxia) se houve ferida prévia",
    "Explicar o procedimento e que pode doer apesar da anestesia; consentimento verbal; criança: avaliar sedação"
  ],
  passos: [
    { etapa: "Preparo e anestesia", itens: [
      "Paciente deitado e confortável, área exposta e iluminada",
      "Antissepsia ampla e campo estéril",
      "Anestesia: infiltrar a pele sobre o ponto de maior flutuação (linha da incisão) e em leque ao redor (bloqueio de campo); o anestésico funciona pouco dentro do pus (meio ácido) — não injetar na cavidade",
      "Abscessos grandes ou crianças: considerar analgesia sistêmica ou sedação"
    ] },
    { etapa: "Incisão", itens: [
      "Incisão linear única com bisturi nº 11 ou 15 sobre o ponto de maior flutuação, seguindo as linhas de tensão da pele",
      "Comprimento suficiente para drenar bem (em geral até cerca de 1/2 a 2/3 do diâmetro do abscesso); incisão pequena demais causa recidiva",
      "Alternativa em abscessos grandes: técnica de alça (duas incisões pequenas com dreno em alça) — menos cicatriz",
      "Evitar incisão profunda em áreas com vasos e nervos superficiais"
    ] },
    { etapa: "Drenagem", itens: [
      "Deixar o pus sair e comprimir suavemente as bordas",
      "Colher amostra de pus para cultura e antibiograma (recorrência, falha, sinais sistêmicos, imunossupressão, criança pequena)",
      "Introduzir a pinça hemostática curva fechada, abri-la dentro da cavidade em várias direções para romper loculações",
      "Irrigar a cavidade com SF 0,9% até o retorno sair claro"
    ] },
    { etapa: "Finalização", itens: [
      "Cavidade pequena: não é necessário empacotar (tamponar) — o empacotamento de rotina aumenta a dor sem melhorar a cura em abscessos menores",
      "Abscesso grande (> 5 cm) ou cavidade profunda: colocar tira de gaze frouxa ou dreno de Penrose, deixando a ponta para fora; retirar em 24–48 h",
      "Curativo absorvente e seco",
      "Decidir antibiótico (critérios no conferir depois); prescrição na ficha furunculo-abscesso",
      "Analgesia: dipirona ou paracetamol; AINE se não houver contraindicação"
    ] }
  ],
  conferirDepois: [
    "Cavidade bem drenada, sem loculação residual; hemostasia",
    "Indicar antibiótico após a drenagem se: abscesso ≥ 2 cm, múltiplos, celulite extensa ao redor, sinais sistêmicos, face, mão ou genitais, imunossupressão ou diabetes descompensado, extremos de idade, drenagem incompleta ou falha de drenagem prévia",
    "Antibiótico curto (5–7 dias) após drenagem de abscesso simples reduz falha e recidiva; cobrir S. aureus (incluindo MRSA comunitário quando há fator de risco) — esquemas em furunculo-abscesso",
    "Amostra de pus identificada e enviada",
    "Glicemia em diabéticos; retorno marcado em 24–48 h"
  ],
  complicacoes: [
    "Drenagem incompleta ou recidiva: reabrir, romper loculações, USG para coleção residual",
    "Sangramento: compressão local por 10 min; raramente sutura hemostática",
    "Celulite progressiva após drenagem: antibiótico (ou trocar esquema conforme cultura) e reavaliação",
    "Sepse ou fasceíte necrosante: internação, antibiótico IV amplo e cirurgia",
    "Fístula (perianal, pilonidal): encaminhar ao cirurgião",
    "Furunculose recorrente: investigar diabetes, descolonização (ver furunculo-abscesso)",
    "Dor intensa no procedimento: completar anestesia em leque, analgesia sistêmica; considerar sedação"
  ],
  prescricao: {
    ambulatorial: "APÓS DRENAGEM DE ABSCESSO SIMPLES — ADULTO\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n2. Ibuprofeno 400 mg -------------------------------------- 12 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 4 dias, se dor.\n\nCUIDADOS LOCAIS\n3. Lavar com água e sabão 1 a 2 vezes ao dia; trocar o curativo sempre que molhar ou sujar.\n4. Retorno em 24 a 48 horas para retirar a gaze/dreno e reavaliar.\n\nANTIBIÓTICO (se critérios): ver prescrição completa na ficha furunculo-abscesso.\n\nCRIANÇA (por kg): dipirona 15–25 mg/kg/dose de 6/6 h (máx. 1 g/dose); ibuprofeno 10 mg/kg/dose de 8/8 h (máx. 400 mg/dose), acima de 6 meses."
  },
  documentacao: "Procedimento: incisão e drenagem de abscesso.\nLocal: [ ]. Tamanho: [ ] cm de flutuação, eritema de [ ] cm (demarcado).\n[USG: coleção de [ ] cm].\nAnestesia: lidocaína [ ]%, [ ] mL, bloqueio de campo.\nIncisão de [ ] cm. Saída de [ ] mL de pus [espesso / sanguinolento / fétido]. Loculações desfeitas. Irrigação com [ ] mL de SF 0,9%.\nCultura colhida: [sim / não].\n[Gaze / dreno de Penrose] deixado: [sim / não]. Curativo absorvente.\nAntibiótico: [não indicado / indicado por [critério]: [esquema]].\nIntercorrências: [nenhuma].\nRetorno em [24–48 h].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "É normal sair um pouco de pus ou sangue pelo curativo nos primeiros dias; troque o curativo quando estiver molhado",
    "Lave o local com água e sabão, seque e cubra com gaze limpa",
    "Lave bem as mãos, não compartilhe toalhas, lâminas ou roupas, e lave as roupas de cama em água quente se possível",
    "Volte em 1 a 2 dias para tirar a gaze e avaliar",
    "Volte antes se tiver febre, a vermelhidão aumentar além da marca feita na pele, a dor piorar muito, aparecer mancha escura ou bolhas"
  ],
  relacionadas: ["furunculo-abscesso", "anestesia-local", "celulite-erisipela", "tetano-profilaxia", "sepse", "curativos-desbridamento"],
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections (2014)",
    "Talan DA et al. — Trimethoprim–Sulfamethoxazole versus Placebo for Uncomplicated Skin Abscess. N Engl J Med (2016)",
    "Daum RS et al. — A Placebo-Controlled Trial of Antibiotics for Smaller Skin Abscesses. N Engl J Med (2017)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011)",
    "WSES/SIS-E — Guidelines for the management of skin and soft-tissue infections (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
