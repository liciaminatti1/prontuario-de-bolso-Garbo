// Controle de hemorragia externa: compressão, curativo compressivo, empacotamento e torniquete
registrarFicha({
  id: "controle-hemorragia-torniquete",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Controle de hemorragia externa e torniquete",
  resumo: "Sequência para parar sangramento externo grave: compressão direta, curativo compressivo, empacotamento da ferida (com ou sem gaze hemostática) e torniquete de membro, com tempo e registro.",
  palavrasChave: "hemorragia externa sangramento grave controle de hemorragia compressao direta curativo compressivo empacotamento gaze hemostatica torniquete garrote cat stop the bleed xabcde atls trauma membro amputacao acido tranexamico choque hemorragico",
  critico: {
    tempo: "X do XABCDE: parar o sangramento",
    texto: "Hemorragia externa grave mata em minutos e vem antes da via aérea (XABCDE). Membro: torniquete se a compressão não controla ou se o sangramento é volumoso. Anotar a hora do torniquete."
  },
  alarmes: [
    "Sangramento que encharca o curativo ou jorra apesar de compressão: escalar para empacotamento ou torniquete",
    "Sinais de choque (FC alta, PA baixa, enchimento capilar lento, confusão): acesso calibroso, ácido tranexâmico, sangue e cirurgia",
    "Sangramento juncional (virilha, axila, pescoço): não cabe torniquete — empacotamento e compressão contínua até o centro cirúrgico",
    "Torniquete aplicado há mais de 2 h ou membro sem possibilidade de controle cirúrgico: decisão com cirurgião"
  ],
  indicacoes: [
    "Compressão direta: todo sangramento externo",
    "Empacotamento: ferida profunda com sangramento que não para com compressão, especialmente em regiões juncionais (virilha, axila, pescoço, nádega)",
    "Torniquete: hemorragia de membro com risco de vida, amputação traumática, sangramento que não para com compressão, múltiplas vítimas ou cena insegura, impossibilidade de manter compressão"
  ],
  contraindicacoes: [
    "Torniquete em região juncional, tronco ou pescoço (não funciona e lesa)",
    "Torniquete sobre articulação (joelho, cotovelo): posicionar acima",
    "Pescoço: nunca curativo circunferencial compressivo; compressão direta com a mão",
    "Empacotamento de ferida no tórax ou abdome com penetração em cavidade: não empacotar a cavidade — compressão externa e cirurgia",
    "Remover objeto empalado: não retirar no PS; estabilizar e levar ao centro cirúrgico"
  ],
  materiais: [
    "Luvas, avental, óculos",
    "Gazes e compressas em quantidade; gaze em rolo ou gaze hemostática (ex.: impregnada com caulim ou quitosana), se disponível",
    "Atadura elástica ou bandagem compressiva (tipo bandagem de emergência)",
    "Torniquete comercial com barra de giro (tipo CAT/SOFTT); na falta, faixa larga (≥ 4–5 cm) com barra rígida — nunca fio ou corda fina",
    "Caneta para marcar a hora; etiqueta",
    "Esfigmomanômetro (pode ser usado como torniquete provisório no hospital, insuflado acima da PA sistólica)",
    "Material para 2 acessos calibrosos (14–18 G) ou IO; ácido tranexâmico; cristaloide aquecido e hemoderivados conforme protocolo de transfusão maciça"
  ],
  checagemAntes: [
    "Segurança da cena e EPI",
    "Identificar a fonte do sangramento (expor o paciente; olhar costas, axilas, virilhas e couro cabeludo)",
    "Classificar: sangramento venoso contínuo × arterial pulsátil; membro × juncional × tronco",
    "Pedir ajuda: cirurgião, banco de sangue, protocolo de transfusão maciça",
    "Uso de anticoagulante ou antiagregante"
  ],
  passos: [
    { etapa: "1. Compressão direta", itens: [
      "Pressão firme e contínua com gazes/compressa diretamente sobre o ponto de sangramento, com a palma ou os dedos, por pelo menos 3–5 min (10 min se possível) sem soltar para olhar",
      "Se a gaze encharcar, colocar mais gaze por cima sem retirar a primeira (ou retirar e reposicionar sobre o ponto exato)",
      "Elevar o membro como medida adicional, se não houver fratura"
    ] },
    { etapa: "2. Curativo compressivo", itens: [
      "Após o sangramento ceder, manter as gazes e enfaixar com atadura elástica sob tensão sobre a ferida, de distal para proximal",
      "Conferir pulso e perfusão distal: o curativo compressivo não deve funcionar como torniquete",
      "Couro cabeludo: sangra muito; sutura contínua rápida ou grampeador e compressão controlam"
    ] },
    { etapa: "3. Empacotamento da ferida", itens: [
      "Indicado em feridas profundas, juncionais ou quando a compressão superficial falha",
      "Expor a ferida e identificar a direção do sangramento",
      "Introduzir gaze (de preferência hemostática) com os dedos diretamente sobre a fonte, no fundo da ferida, e ir preenchendo toda a cavidade firmemente",
      "Comprimir com força por cima por pelo menos 3 min (gaze hemostática) ou 10 min (gaze comum)",
      "Manter a compressão e aplicar curativo compressivo; não retirar o empacotamento no PS — será retirado no centro cirúrgico"
    ] },
    { etapa: "4. Torniquete", itens: [
      "Aplicar 5–7 cm acima da ferida, nunca sobre articulação; se a ferida não é visível ou há várias, aplicar 'alto e apertado' (raiz do membro: coxa alta ou braço alto)",
      "Passar a faixa, apertar bem antes de girar a barra; girar a barra até o sangramento parar E o pulso distal desaparecer",
      "Travar a barra e fixar; anotar a HORA no próprio torniquete ou na testa do paciente (T + hora) e no prontuário",
      "Se o sangramento continuar: apertar mais; se ainda continuar, colocar um 2º torniquete logo acima do primeiro",
      "Dói muito: analgesia (opioide IV/IO, cetamina) — não afrouxar por causa da dor",
      "Não cobrir o torniquete com roupas ou lençóis (deve ficar visível)",
      "Criança: torniquetes comerciais costumam funcionar a partir de cerca de 2 anos; em lactente, compressão direta e empacotamento"
    ] },
    { etapa: "Medidas sistêmicas associadas", itens: [
      "Dois acessos calibrosos ou IO; coletar tipagem, hemograma, coagulação, lactato, gasometria",
      "Ácido tranexâmico em trauma com hemorragia significativa, em até 3 h do trauma: adulto 1 g IV em 10 min, depois 1 g IV em 8 h; criança 15 mg/kg IV (máx. 1 g) em 10 min, depois 2 mg/kg/h por 8 h",
      "Reanimação hemostática: priorizar hemoderivados (concentrado de hemácias, plasma e plaquetas em proporção equilibrada); limitar cristaloide (ATLS: até cerca de 1 L no adulto)",
      "Hipotensão permissiva até o controle cirúrgico (exceto TCE); prevenir hipotermia",
      "Anticoagulado: reversão conforme droga (ver anticoagulacao-oral)"
    ] }
  ],
  conferirDepois: [
    "Sangramento controlado (curativo não encharca)",
    "Torniquete: pulso distal ausente, hora anotada e visível; reavaliar a cada transferência de cuidado",
    "Curativo compressivo: pulso distal e perfusão presentes",
    "Sinais vitais, lactato e resposta à reposição; necessidade de transfusão maciça",
    "Tempo total de torniquete: buscar controle definitivo em até 2 h (risco de lesão isquêmica cresce depois disso)",
    "Conversão do torniquete (afrouxar para curativo compressivo/empacotamento) só por equipe preparada, com paciente estabilizado, sangue disponível e preferencialmente pelo cirurgião; não afrouxar se amputação, choque ou torniquete > 6 h",
    "Profilaxia do tétano e antibiótico se fratura exposta"
  ],
  complicacoes: [
    "Torniquete ineficaz (sangramento venoso aumenta): apertar mais ou 2º torniquete proximal",
    "Lesão isquêmica, nervosa ou síndrome compartimental após torniquete prolongado: registrar tempo, avaliação ortopédica/vascular",
    "Síndrome de reperfusão ao soltar torniquete prolongado (hipercalemia, acidose, arritmia): soltar em ambiente monitorizado, preparar cálcio e bicarbonato (ver hipercalemia)",
    "Ressangramento ao soltar: reaplicar e encaminhar ao centro cirúrgico",
    "Curativo compressivo apertado demais: isquemia distal — afrouxar e refazer",
    "Coagulopatia, hipotermia e acidose (tríade letal): aquecer, hemoderivados, cálcio conforme protocolo"
  ],
  documentacao: "Procedimento: controle de hemorragia externa.\nLocal da lesão: [ ]. Tipo de sangramento: [venoso / arterial pulsátil].\nMedidas: [compressão direta [ ] min] / [curativo compressivo] / [empacotamento com gaze [comum / hemostática]] / [torniquete [comercial / improvisado] em [membro, nível], aplicado às [hh:mm] por [nome] — [pré-hospitalar / hospitalar]].\nSangramento [controlado / persistente]. Pulso distal após torniquete: [ausente].\nSinais vitais: PA [ ], FC [ ], enchimento capilar [ ].\nÁcido tranexâmico: [ ] às [hh:mm]. Hemoderivados: [ ].\nCirurgia acionada às [hh:mm]. Tempo total de torniquete até [ ].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Após a alta, mantenha o curativo e o membro elevado; não retire o curativo compressivo antes do prazo orientado",
    "Se voltar a sangrar, aperte firme o local com um pano limpo por 10 minutos sem soltar e procure atendimento",
    "Procure atendimento imediato se a mão ou o pé ficar frio, roxo, dormente ou muito dolorido, ou se sentir tontura, fraqueza ou desmaio"
  ],
  relacionadas: ["choque", "sutura", "tetano-profilaxia", "anticoagulacao-oral", "acesso-intraosseo", "hipercalemia"],
  fontes: [
    "ATLS — Advanced Trauma Life Support, 10ª edição (2018) e atualizações do ACS Committee on Trauma (sequência XABCDE)",
    "ACS — Stop the Bleed: controle de hemorragia (2017, atualizado)",
    "CoTCCC — Tactical Combat Casualty Care Guidelines (2024): torniquete, empacotamento e ácido tranexâmico",
    "CRASH-2 Collaborators — Lancet (2010; 2011): ácido tranexâmico em até 3 h",
    "PHTLS/NAEMT — Prehospital Trauma Life Support, 10ª edição (2023)",
    "Royal College of Paediatrics and Child Health — Major trauma and the use of tranexamic acid in children (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
