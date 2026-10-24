// Imobilizações provisórias: talas gessadas, tipoia e colar cervical
registrarFicha({
  id: "imobilizacao-talas",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Imobilização: talas gessadas, tipoia e colar cervical",
  resumo: "Imobilização provisória de fraturas, luxações reduzidas e entorses no PS e na UBS: tala axilopalmar, antebraquiopalmar, suropodálica, tipoia e colar cervical, com checagem neurovascular antes e depois.",
  palavrasChave: "imobilizacao tala gessada gesso goteira tala axilopalmar antebraquiopalmar suropodalica bota gessada tipoia velpeau colar cervical restricao de movimento da coluna fratura entorse torcao checagem neurovascular sindrome compartimental",
  critico: {
    tempo: "Neurovascular antes e depois",
    texto: "Examinar pulso, perfusão, sensibilidade e motricidade distais antes e depois de imobilizar. Dor que piora com a imobilização, dor ao estender os dedos ou dormência: abrir a tala imediatamente (síndrome compartimental)."
  },
  alarmes: [
    "Pulso ausente, membro frio ou pálido: lesão vascular ou compressão — realinhar com tração suave, abrir a tala e chamar ortopedia/vascular",
    "Dor desproporcional, dor ao estender passivamente os dedos, tensão do compartimento: síndrome compartimental — retirar tala e enfaixamento, manter membro no nível do coração, cirurgia urgente",
    "Fratura exposta (osso ou ferida comunicando com o foco): curativo estéril, antibiótico IV precoce, tétano e ortopedia",
    "Deformidade com pele tensa e pálida sobre o foco (risco de necrose): realinhar e chamar ortopedia",
    "Dor cervical após trauma com déficit neurológico: restrição de movimento da coluna e imagem"
  ],
  indicacoes: [
    "Fraturas suspeitas ou confirmadas, até avaliação ortopédica ou como tratamento inicial",
    "Após redução de luxação ou fratura",
    "Entorses moderadas a graves, contusões e lesões ligamentares para alívio da dor (por curto período)",
    "Colar cervical: trauma com indicação de restrição de movimento da coluna (critérios NEXUS ou Regra Canadense positivos, rebaixamento, intoxicação, lesão distrativa, déficit neurológico)"
  ],
  contraindicacoes: [
    "Gesso circular no atendimento agudo (edema progressivo): preferir tala (goteira) que permite expansão",
    "Ferida aberta não tratada sob a tala (tratar e cobrir antes)",
    "Colar cervical: não usar de rotina em trauma penetrante isolado do pescoço; retirar se critérios clínicos permitem liberar a coluna; cuidado em espondilite anquilosante (imobilizar na posição habitual, não retificar)",
    "Imobilização prolongada sem indicação (rigidez, atrofia, trombose)"
  ],
  materiais: [
    "Atadura gessada (rolos de 10, 15 e 20 cm) ou tala pronta de fibra/gesso; ou tala de alumínio moldável para dedos",
    "Malha tubular (estoquinete) e algodão ortopédico (2–3 camadas, mais nas proeminências ósseas)",
    "Atadura de crepom (10–15 cm) para fixar a tala",
    "Balde com água em temperatura ambiente ou morna (não quente: gesso aquece ao secar e pode queimar)",
    "Tesoura de gesso, luvas, avental, lençol para proteger o paciente",
    "Tipoia de tecido ou triangular",
    "Colar cervical rígido em tamanhos variados (ou ajustável) e régua de medida do fabricante",
    "Analgesia prévia (ver dor-musculoesqueletica e analgesicos-antitermicos)"
  ],
  checagemAntes: [
    "Mecanismo, hora, mão dominante e ocupação; ferida próxima ao foco (fratura exposta)",
    "Exame neurovascular distal registrado: pulsos, enchimento capilar, cor, temperatura, sensibilidade e motricidade (por nervo: radial, mediano, ulnar; fibular, tibial)",
    "RX antes da imobilização quando possível (2 incidências); se membro deformado com comprometimento vascular, realinhar antes do RX",
    "Retirar anéis, pulseiras e relógio do membro (edema)",
    "Analgesia adequada antes de manipular",
    "Medir a tala no membro contralateral"
  ],
  passos: [
    { etapa: "Princípios gerais", itens: [
      "Imobilizar uma articulação acima e uma abaixo do foco de fratura",
      "Posição funcional: punho em leve extensão (20–30°), MCF em flexão de 60–90° e interfalangianas estendidas quando os dedos forem incluídos; cotovelo a 90°; tornozelo a 90° (neutro)",
      "Espessura da tala: em geral 8–10 camadas de atadura gessada no membro superior e 12–15 no inferior (adulto); menos na criança",
      "Malha tubular, depois algodão ortopédico sem dobras, com mais camadas sobre proeminências ósseas",
      "Molhar a atadura gessada até pararem as bolhas, retirar o excesso de água, alisar as camadas",
      "Aplicar a tala sobre o algodão, moldar com a palma das mãos (não com a ponta dos dedos, que cria pontos de pressão) e fixar com crepom sem apertar, de distal para proximal",
      "Manter a posição até endurecer (5–10 min); deixar dedos visíveis"
    ] },
    { etapa: "Tala axilopalmar (braquiopalmar)", itens: [
      "Indicações: fraturas de cotovelo (supracondiliana sem desvio, cabeça do rádio, olécrano), terço proximal e médio do antebraço, fraturas de ambos os ossos do antebraço, após redução de luxação do cotovelo",
      "Do terço proximal posterior do braço (abaixo da axila) até a cabeça dos metacarpos (prega palmar distal), pela face posterior/ulnar",
      "Cotovelo a 90°, antebraço em posição neutra (polegar para cima), punho em leve extensão",
      "Pode ser complementada por tala em U (pinça de confeiteiro) para controlar a rotação",
      "Completar com tipoia"
    ] },
    { etapa: "Tala antebraquiopalmar", itens: [
      "Indicações: fraturas do rádio distal (Colles sem desvio ou após redução), fraturas do carpo e escafoide (com inclusão do polegar: tala gessada tipo luva de goleiro/espica), entorses graves do punho",
      "Do terço proximal do antebraço (abaixo do cotovelo, deixando-o livre) até a prega palmar distal, pela face volar ou dorsal",
      "Punho em leve extensão; liberar a flexão das MCF (não ultrapassar a prega palmar distal)",
      "Fratura de 4º/5º metacarpo (boxeador): tala ulnar (goteira ulnar) incluindo 4º e 5º dedos com MCF em flexão de 70–90°"
    ] },
    { etapa: "Tala suropodálica (bota gessada posterior)", itens: [
      "Indicações: fraturas de tornozelo e pé, entorse grave de tornozelo, ruptura do tendão de Aquiles (em equino, por orientação do ortopedista), fraturas da tíbia distal",
      "Paciente em decúbito ventral com joelho fletido a 90° ou sentado com o pé apoiado",
      "Tala posterior da cabeça dos metatarsos até cerca de 2–3 dedos abaixo da cabeça da fíbula (evitar compressão do nervo fibular)",
      "Tornozelo a 90°; acrescentar tala em estribo (medial e lateral, em U) para estabilidade lateral",
      "Orientar não apoiar o pé (muletas)"
    ] },
    { etapa: "Tipoia", itens: [
      "Indicações: fraturas de clavícula, úmero proximal, luxação de ombro reduzida, complemento das talas do membro superior, entorses",
      "Cotovelo a 90°, mão levemente acima do nível do cotovelo para reduzir edema; punho apoiado (não deixar a mão pendente)",
      "Alça ajustada no ombro oposto, com acolchoamento no pescoço",
      "Orientar mover dedos e, quando liberado, o cotovelo e o ombro (rigidez em idosos)"
    ] },
    { etapa: "Colar cervical", itens: [
      "Manter a cabeça em posição neutra com estabilização manual por um auxiliar durante toda a colocação",
      "Medir: distância vertical entre o topo do ombro (trapézio) e o ângulo da mandíbula com os dedos; comparar com a marca do colar (ou ajustar o colar regulável)",
      "Colocar primeiro a parte posterior (paciente deitado) ou o apoio mentoniano (sentado), centralizar e fechar o velcro, sem apertar a ponto de dificultar respiração ou retorno venoso",
      "O colar sozinho não imobiliza: manter alinhamento em bloco, mobilização em bloco com prancha/maca e coxins laterais quando indicado",
      "Retirar o colar o quanto antes: liberar clinicamente pelos critérios NEXUS ou Regra Canadense de coluna cervical, ou após imagem normal em paciente avaliável"
    ] }
  ],
  conferirDepois: [
    "Exame neurovascular distal repetido e registrado após a imobilização",
    "Dedos livres e visíveis; tala sem bordas cortantes, sem compressão na axila, no nervo fibular ou nas proeminências",
    "RX de controle após redução",
    "Paciente consegue mover os dedos sem dor aumentada",
    "Analgesia prescrita, elevação do membro e retorno à ortopedia agendado (em geral em 5–7 dias, ou conforme a lesão)",
    "Colar cervical: cabeça neutra, respiração confortável, sem compressão das jugulares; reavaliar retirada"
  ],
  complicacoes: [
    "Síndrome compartimental: abrir/retirar toda a imobilização até a pele, membro no nível do coração, cirurgia urgente",
    "Compressão nervosa (fibular: pé caído; ulnar/mediano): retirar e refazer com mais algodão",
    "Queimadura por gesso (água quente ou camadas grossas demais): usar água morna e espessura adequada",
    "Úlcera por pressão sob a tala: acolchoar proeminências, moldar com a palma; dor localizada persistente = rever",
    "Trombose venosa profunda em imobilização de membro inferior: avaliar profilaxia conforme risco (diretriz local)",
    "Rigidez articular: imobilizar só o necessário e pelo tempo necessário",
    "Colar cervical: úlcera por pressão no occipital/mento, aumento da pressão intracraniana e dificuldade de via aérea — retirar o quanto antes"
  ],
  documentacao: "Procedimento: imobilização com [tala axilopalmar / antebraquiopalmar / suropodálica / ulnar / tipoia / colar cervical] em [membro D/E].\nIndicação: [diagnóstico, RX].\nExame neurovascular ANTES: pulsos [ ], enchimento capilar [ ] s, sensibilidade [ ], motricidade [ ].\nTécnica: malha tubular, algodão ortopédico, tala gessada [ ] camadas, posição [ ].\n[Redução prévia: sim/não; RX de controle: ].\nExame neurovascular DEPOIS: [preservado / alteração e conduta].\nOrientações dadas (elevação, sinais de alerta). Retorno ortopedia: [data/local].\nResponsável: [nome, CRM].",
  orientacoesRetorno: [
    "Mantenha o braço ou a perna elevado acima do coração nas primeiras 48–72 horas e mexa os dedos várias vezes ao dia",
    "Não molhe a tala; para o banho, cubra com saco plástico bem fechado",
    "Não coloque objetos dentro da tala para coçar; não retire nem corte a tala por conta própria",
    "Não apoie o pé no chão se a tala for na perna, a menos que liberado; use muletas",
    "VOLTE IMEDIATAMENTE se: dor que piora muito mesmo com remédio, dedos roxos, brancos, frios, inchados ou dormentes, dificuldade de mexer os dedos, tala apertada, ferida ou mau cheiro sob a tala",
    "Volte também se tiver dor e inchaço na panturrilha ou falta de ar (trombose)"
  ],
  relacionadas: ["reducao-luxacao-ombro", "dor-musculoesqueletica", "analgesicos-antitermicos", "tce-leve", "controle-hemorragia-torniquete"],
  fontes: [
    "ATLS 10ª edição (2018): trauma musculoesquelético e restrição de movimento da coluna",
    "ACS COT/ACEP/NAEMSP — Joint position statement on spinal motion restriction in the trauma patient (2018)",
    "Stiell IG et al. — The Canadian C-spine rule. JAMA (2001); Hoffman JR et al. — NEXUS. N Engl J Med (2000)",
    "Boyd AS, Benjamin HJ, Asplund C — Principles of Casting and Splinting. Am Fam Physician (2009)",
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
