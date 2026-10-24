// Punção arterial para gasometria
registrarFicha({
  id: "puncao-arterial-gasometria",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Punção arterial para gasometria",
  resumo: "Coleta de sangue arterial, de preferência na artéria radial após teste de Allen modificado, com seringa heparinizada e cuidados pré-analíticos para um resultado confiável.",
  palavrasChave: "gasometria arterial puncao arterial arteria radial femoral braquial teste de allen seringa heparinizada heparina litica po2 pco2 ph lactato bicarbonato bolha de ar coleta arterial",
  critico: {
    tempo: "Analisar em até 30 min",
    texto: "Sem bolhas de ar, seringa tampada, homogeneizada e analisada o quanto antes (idealmente até 15 min; até 30 min em seringa plástica em temperatura ambiente). Registrar FiO₂ e temperatura do paciente."
  },
  alarmes: [
    "Dor intensa, palidez, frieza ou parestesia na mão após a punção: isquemia — avaliar perfusão e chamar cirurgia vascular",
    "Hematoma que cresce apesar de compressão: compressão firme por mais tempo e avaliação",
    "Sangue escuro sem pulsatilidade e saturação venosa no resultado: provável amostra venosa — interpretar com cautela ou repetir"
  ],
  indicacoes: [
    "Avaliar oxigenação (PaO₂, relação PaO₂/FiO₂), ventilação (PaCO₂) e equilíbrio ácido-base",
    "Insuficiência respiratória, DPOC exacerbada, ajuste de ventilação mecânica, cetoacidose grave com dúvida respiratória, choque",
    "Quando a gasometria venosa não basta (a venosa é adequada para pH, bicarbonato e lactato na maioria dos casos de cetoacidose e sepse)"
  ],
  contraindicacoes: [
    "Teste de Allen anormal (circulação ulnar insuficiente) na mão a ser puncionada: usar a outra radial ou outro sítio",
    "Infecção, queimadura ou lesão no local; fístula arteriovenosa ou enxerto vascular no membro",
    "Doença arterial periférica grave ou fenômeno de Raynaud no membro (relativa)",
    "Coagulopatia grave ou trombólise recente (relativa: preferir radial, sítio compressível, compressão prolongada)",
    "Artéria femoral: evitar em anticoagulados e em pacientes com prótese vascular; reservar para emergência"
  ],
  materiais: [
    "Seringa própria para gasometria com heparina lítica balanceada liofilizada (1–3 mL) — preferível",
    "Na falta: seringa de 3 mL lavada com heparina sódica 5.000 UI/mL, deixando só o espaço morto (excesso de heparina dilui a amostra e baixa PaCO₂ e bicarbonato)",
    "Agulha 25 × 6 ou 25 × 7 (radial; 22–25 G); 30 × 7 ou 40 × 8 para femoral; 24–26 G em criança",
    "Luvas de procedimento, óculos",
    "Álcool 70% ou clorexidina alcoólica, gazes",
    "Lidocaína 1% sem vasoconstritor 0,5 mL e agulha fina (opcional, reduz dor)",
    "Tampa para a seringa, etiqueta, coxim/rolo de toalha para dorsiflexão do punho",
    "Coletor de perfurocortante; recipiente com gelo só se seringa de vidro ou análise demorada (ver passos)"
  ],
  checagemAntes: [
    "Pedido com indicação; anotar FiO₂ (ou fluxo de O₂ e dispositivo), parâmetros do ventilador e temperatura",
    "Paciente estável na FiO₂ atual há pelo menos 10–20 min antes da coleta (alteração recente de O₂ distorce a PaO₂)",
    "Anticoagulantes, plaquetas e coagulação",
    "Teste de Allen modificado (radial): ocluir radial e ulnar, pedir para fechar e abrir a mão até empalidecer, soltar a ulnar — a cor deve voltar em até cerca de 5–10 s; se demorar mais, não puncionar essa radial",
    "Explicar o procedimento; avisar que dói por alguns segundos"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Higienizar as mãos, calçar luvas",
      "Radial: punho em dorsiflexão de cerca de 30° sobre um coxim, palma para cima",
      "Palpar o pulso radial 1–2 cm proximal à prega do punho, entre o processo estiloide do rádio e o tendão do flexor radial do carpo",
      "Antissepsia e deixar secar; se usar lidocaína, fazer pequeno botão subcutâneo sem obscurecer o pulso",
      "Seringa heparinizada com êmbolo posicionado no volume desejado (seringa de gasometria enche sozinha pela pressão arterial)"
    ] },
    { etapa: "Punção", itens: [
      "Fixar a artéria com 2 dedos da mão não dominante, acima do ponto de punção",
      "Introduzir a agulha com bisel para cima, ângulo de 30–45° (radial), contra o fluxo, na direção do pulso",
      "Avançar devagar até o refluxo pulsátil de sangue vermelho vivo na seringa; deixar encher 1–2 mL (ou o volume indicado pelo fabricante)",
      "Se não houver refluxo: recuar até perto da pele e redirecionar; não fazer movimentos laterais profundos",
      "Femoral (emergência): abaixo do ligamento inguinal, artéria medial ao nervo e lateral à veia (NAV); agulha a 90°",
      "Braquial: na fossa antecubital, medial ao tendão do bíceps; maior risco (sem circulação colateral) — evitar se possível",
      "Ultrassom aumenta o sucesso em pulso difícil"
    ] },
    { etapa: "Após a coleta", itens: [
      "Retirar a agulha e comprimir imediatamente o local com gaze por pelo menos 3–5 min (radial); 10 min ou mais se anticoagulado ou femoral",
      "Ativar o dispositivo de segurança e descartar a agulha; tampar a seringa",
      "Expulsar qualquer bolha de ar imediatamente, com a seringa voltada para cima e gaze na ponta",
      "Homogeneizar rolando a seringa entre as mãos e invertendo suavemente (mistura com heparina; não agitar)",
      "Identificar com nome, hora, FiO₂/dispositivo e temperatura; enviar imediatamente",
      "Seringa plástica: manter em temperatura ambiente e analisar em até 30 min (até 15 min se lactato ou PaO₂ alta); não colocar em gelo. Gelo só para seringa de vidro ou demora prevista, conforme o laboratório"
    ] }
  ],
  conferirDepois: [
    "Hemostasia completa (sem hematoma) antes de liberar o local",
    "Perfusão da mão: cor, temperatura, enchimento capilar e sensibilidade",
    "Amostra sem bolhas, sem coágulos, identificada e com FiO₂ anotada",
    "Resultado coerente: SatO₂ calculada próxima da oximetria; se PaO₂ muito baixa sem clínica de hipoxemia, suspeitar amostra venosa",
    "Calcular relação PaO₂/FiO₂ e interpretar junto com eletrólitos (ânion gap)"
  ],
  complicacoes: [
    "Hematoma: compressão firme prolongada; gelo local",
    "Vasoespasmo e dor: comum, transitório; nova tentativa no outro lado",
    "Isquemia da mão / trombose da radial (raro): avaliar perfusão, aquecer, chamar cirurgia vascular",
    "Pseudoaneurisma ou fístula AV (punção femoral ou repetida): massa pulsátil — USG e vascular",
    "Lesão do nervo mediano (radial/braquial): dor em choque — retirar e reposicionar",
    "Erros pré-analíticos: bolha de ar (eleva PaO₂ e baixa PaCO₂), demora (baixa PaO₂ e pH, eleva PaCO₂ e lactato), excesso de heparina (dilui: baixa PaCO₂ e bicarbonato), amostra venosa — repetir a coleta",
    "Síncope vasovagal: deitar o paciente e elevar as pernas"
  ],
  documentacao: "Procedimento: punção arterial para gasometria.\nIndicação: [ ].\nTeste de Allen modificado: [normal, retorno em [ ] s] na mão [D/E].\nSítio: artéria [radial / femoral / braquial] [D/E]. [Guiada por USG: sim/não].\nNº de tentativas: [ ]. Seringa [heparina lítica / heparinizada manualmente], [ ] mL.\nFiO₂ / dispositivo no momento: [ar ambiente / cateter [ ] L/min / máscara / VM FiO₂ [ ]%]. Temperatura: [ ] °C.\nCompressão por [ ] min, sem hematoma. Perfusão distal preservada.\nAmostra enviada às [hh:mm].\nResponsável: [nome, registro profissional].",
  orientacoesRetorno: [
    "Mantenha o punho esticado e sem esforço por algumas horas; não carregue peso com essa mão hoje",
    "Mancha roxa pequena é comum",
    "Avise ou procure atendimento se o punho inchar e crescer um caroço, se sangrar, ou se a mão ficar fria, branca, roxa, dormente ou muito dolorida"
  ],
  relacionadas: ["oxigenoterapia", "ventilacao-mecanica", "dpoc-exacerbacao", "cetoacidose", "sepse", "choque"],
  fontes: [
    "CLSI C46-A2 — Blood Gas and pH Analysis and Related Measurements (2009): cuidados pré-analíticos",
    "AARC Clinical Practice Guideline — Blood gas analysis and hemoximetry (2013)",
    "SBPC/ML — Recomendações para coleta de sangue venoso e gasometria (2010)",
    "OMS — WHO guidelines on drawing blood: best practices in phlebotomy, cap. 6: Arterial blood sampling (2010)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
