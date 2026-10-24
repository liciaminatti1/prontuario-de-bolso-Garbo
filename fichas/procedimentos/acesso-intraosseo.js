// Acesso intraósseo
registrarFicha({
  id: "acesso-intraosseo",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Acesso intraósseo (IO)",
  resumo: "Punção da cavidade medular com agulha específica (manual ou perfurador elétrico) para infusão de drogas, fluidos e hemoderivados quando o acesso venoso periférico falha ou atrasaria o tratamento.",
  palavrasChave: "intraosseo io agulha intraossea ez-io perfurador tibia proximal umero proximal femur distal maleolo medial pcr choque crianca grave acesso de emergencia",
  critico: {
    tempo: "IO se sem veia em 90 s",
    texto: "Na PCR, no choque ou na criança grave, se o acesso venoso não for obtido rapidamente (2 tentativas ou cerca de 90 s), fazer IO. Toda droga e fluido que corre na veia pode correr na IO, na mesma dose."
  },
  alarmes: [
    "Edema da panturrilha ou do braço ao infundir: extravasamento — parar e trocar de osso (risco de síndrome compartimental)",
    "Membro tenso, pálido, doloroso ou com perda de pulso após IO: suspeitar síndrome compartimental",
    "Agulha solta ou dobrada: não usar; nova punção em outro osso"
  ],
  indicacoes: [
    "PCR sem acesso venoso imediato (adulto e criança)",
    "Choque, sepse grave, estado de mal epiléptico, grande queimado ou trauma grave com acesso venoso difícil",
    "Criança gravemente doente: IO precoce se acesso venoso não obtido rapidamente"
  ],
  contraindicacoes: [
    "Fratura no osso escolhido ou trauma proximal ao sítio (fluido extravasa pela fratura)",
    "Tentativa de IO no mesmo osso nas últimas 24–48 h",
    "Infecção ou queimadura de pele no local (relativa: escolher outro sítio)",
    "Prótese articular ou cirurgia ortopédica no osso escolhido",
    "Doença óssea frágil (osteogênese imperfeita, osteoporose grave): relativa",
    "Impossibilidade de localizar os pontos de referência (obesidade, edema): usar outro sítio ou agulha mais longa"
  ],
  materiais: [
    "Luvas, antisséptico (clorexidina alcoólica ou PVPI), gazes",
    "Perfurador elétrico com agulhas (padrão EZ-IO): 15 mm rosa (cerca de 3–39 kg), 25 mm azul (≥ 3 kg), 45 mm amarela (≥ 40 kg, úmero ou muito tecido)",
    "Ou agulha IO manual (tipo Jamshidi/Cook) 15–18 G; na falta, agulha de punção de medula; agulha hipodérmica comum só em neonato e último recurso",
    "Extensor preenchido com SF 0,9% e seringa de 10 mL com SF 0,9% para flush",
    "Lidocaína 2% sem vasoconstritor e sem conservante para paciente consciente",
    "Pressurizador (bolsa pressórica) ou seringa para infusão em bolus",
    "Curativo/estabilizador da agulha e fita",
    "Pulseira ou etiqueta para registrar hora da inserção"
  ],
  checagemAntes: [
    "Indicação: falha ou atraso do acesso venoso em paciente grave",
    "Escolher o sítio pela idade e excluir fratura, prótese, infecção e IO prévia no mesmo osso",
    "Escolher o comprimento da agulha pela espessura dos tecidos: com a agulha encostada no osso, a marca preta (5 mm) da agulha EZ-IO deve ficar visível fora da pele",
    "Paciente consciente: planejar lidocaína IO antes do flush (dor intensa na infusão)",
    "Não interromper compressões na PCR para fazer IO"
  ],
  passos: [
    { etapa: "Localização do sítio", itens: [
      "Tíbia proximal (todas as idades; 1ª opção na criança): face anteromedial plana. Criança: cerca de 1–2 cm abaixo e medial à tuberosidade da tíbia. Adulto: cerca de 2 cm medial e 1 cm abaixo da tuberosidade",
      "Úmero proximal (adulto e adolescente; melhor fluxo, mais perto do coração): mão do paciente sobre o abdome (adução e rotação interna); agulha na tuberosidade maior, cerca de 1 cm acima do colo cirúrgico, direção posteromedial em 45°",
      "Tíbia distal: face medial, cerca de 2–3 cm acima do maléolo medial (adulto) ou 1–2 cm (criança)",
      "Fêmur distal (lactentes e crianças pequenas): face anterior, linha média, cerca de 1–2 cm acima da patela, com a perna estendida",
      "Evitar placa de crescimento: direcionar a agulha levemente para longe da articulação no sítio tibial da criança (ou a 90° com a superfície)"
    ] },
    { etapa: "Inserção", itens: [
      "Antissepsia da pele; estabilizar o membro com a mão não dominante, fora da trajetória da agulha",
      "Perfurador: perfurar a pele até tocar o osso sem acionar; conferir a marca de 5 mm; acionar com pressão leve e deixar a broca trabalhar até sentir perda de resistência (entrada na medular); não empurrar com força",
      "Agulha manual: inserir a 90° com movimento de rotação e pressão firme até perder a resistência",
      "Segurar o canhão, retirar o mandril (girando no sentido anti-horário) e descartar no coletor"
    ] },
    { etapa: "Confirmação", itens: [
      "Agulha firme, para em pé sozinha no osso",
      "Aspirar sangue/medula com seringa (confirma, mas a ausência não exclui posição correta); a amostra serve para glicemia, gasometria e tipagem (avisar o laboratório que é de medula)",
      "Paciente consciente: lidocaína 2% sem conservante IO antes do flush — adulto 40 mg (2 mL) em 2 min, aguardar 1 min; criança 0,5 mg/kg (máx. 40 mg) lentamente",
      "Flush com 10 mL de SF 0,9% (criança 5 mL) em bolus rápido: sem edema ao redor nem na face posterior do membro; sem flush, o fluxo é ruim",
      "Conectar extensor; infundir com pressurizador (até 300 mmHg) ou em bolus com seringa (fluxo por gravidade é lento)"
    ] },
    { etapa: "Fixação e finalização", itens: [
      "Fixar o canhão com estabilizador ou gaze e fita sem dobrar a agulha",
      "Registrar data e hora da inserção no membro (pulseira) e no prontuário",
      "Seguir as drogas com flush de SF 0,9% após cada administração (adulto 10–20 mL; criança 5 mL)",
      "Providenciar acesso venoso definitivo e retirar a IO assim que possível, idealmente em até 24 h"
    ] },
    { etapa: "Retirada", itens: [
      "Retirar o extensor, conectar uma seringa Luer ao canhão como alça",
      "Girar no sentido horário enquanto puxa para fora, sem balançar",
      "Comprimir e fazer curativo; observar o local"
    ] }
  ],
  conferirDepois: [
    "Infusão fluindo sem edema local nem na face posterior do membro",
    "Circunferência e tensão da panturrilha/braço comparadas com o outro lado, a cada reavaliação",
    "Pulsos e perfusão distais",
    "Resposta clínica às drogas administradas",
    "Hora da inserção registrada e plano de retirada em até 24 h"
  ],
  complicacoes: [
    "Extravasamento/infiltração: parar, retirar, comprimir; nova IO em outro osso",
    "Síndrome compartimental: retirar a agulha, manter o membro no nível do coração (não elevar), avaliar perfusão e chamar ortopedia/cirurgia para medir pressão compartimental e fasciotomia se necessário",
    "Osteomielite (rara; maior risco com uso prolongado): retirar em até 24 h, técnica asséptica; tratar se sinais de infecção",
    "Fratura (osso frágil ou técnica com força excessiva): trocar de osso, imobilizar e avaliar",
    "Agulha transfixou o osso (atravessou a cortical posterior): retirar e usar outro osso",
    "Dor intensa à infusão no consciente: lidocaína IO conforme passos",
    "Embolia gordurosa: rara, sem relevância clínica habitual"
  ],
  tabelas: [
    {
      titulo: "Sítios de IO por idade",
      colunas: ["Sítio", "Lactente e criança pequena", "Criança maior e adolescente", "Adulto"],
      linhas: [
        ["Tíbia proximal", "1ª escolha", "1ª escolha", "Opção frequente"],
        ["Fêmur distal", "Alternativa", "Pouco usado", "Não usar"],
        ["Tíbia distal", "Alternativa", "Alternativa", "Alternativa"],
        ["Úmero proximal", "Não recomendado (difícil localizar)", "Alternativa (adolescente)", "Preferido por alguns (melhor fluxo); exige imobilizar o braço"]
      ],
      nota: "Sítios esternais exigem dispositivo próprio (adulto) e não são usados na rotina do PS. Cheque as orientações do fabricante do dispositivo disponível."
    }
  ],
  documentacao: "Procedimento: acesso intraósseo.\nIndicação: [PCR / choque / acesso venoso impossível após [ ] tentativas].\nSítio: [tíbia proximal / úmero proximal / tíbia distal / fêmur distal] [direito/esquerdo].\nDispositivo: [perfurador / manual], agulha [ ] mm / [ ] G. Hora da inserção: [ ].\nConfirmação: agulha firme, [aspirado de medula sim/não], flush de [ ] mL de SF 0,9% sem extravasamento.\nLidocaína 2% IO: [ ] mg.\nIntercorrências: [nenhuma / descrever].\nPlano: acesso venoso definitivo e retirada em até 24 h.\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "O local da agulha no osso pode ficar dolorido por alguns dias",
    "Mantenha o curativo limpo e seco por 48 horas",
    "Procure atendimento se o local ficar vermelho, quente, inchado, com secreção, ou se tiver febre nas próximas semanas"
  ],
  relacionadas: ["pcr-adulto", "pcr-pediatrica", "crianca-grave", "choque", "acesso-venoso-periferico"],
  fontes: [
    "AHA — Guidelines for CPR and ECC: Adult and Pediatric Advanced Life Support (2025)",
    "AHA — PALS Provider Manual (2020)",
    "ATLS 10ª edição (2018): acesso intraósseo no choque",
    "Teleflex — Instruções de uso do sistema EZ-IO (seleção de agulha e lidocaína IO)",
    "ERC — European Resuscitation Council Guidelines (2025): acesso vascular"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
