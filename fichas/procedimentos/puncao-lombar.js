// Punção lombar diagnóstica (adulto e criança)
registrarFicha({
  id: "puncao-lombar",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Punção lombar (coleta de líquor)",
  resumo: "Coleta de líquor por punção no espaço subaracnóideo lombar para diagnóstico de meningite, encefalite, hemorragia subaracnóidea com TC normal e outras doenças neurológicas, com medida da pressão de abertura.",
  palavrasChave: "puncao lombar raquicentese coleta de liquor lcr liquido cefalorraquidiano meningite encefalite hemorragia subaracnoidea manometria pressao de abertura agulha de quincke atraumatica cefaleia pos puncao xantocromia tc antes da puncao",
  critico: {
    tempo: "Antibiótico não espera a punção",
    texto: "Na suspeita de meningite bacteriana, se a punção vai atrasar (TC necessária, instabilidade, dificuldade técnica), colher hemoculturas e iniciar antibiótico e dexametasona antes. Fazer TC antes da punção se houver sinais de hipertensão intracraniana ou lesão com efeito de massa."
  },
  alarmes: [
    "Rebaixamento do nível de consciência, pupila anisocórica, bradicardia com hipertensão ou postura anormal durante/após a punção: herniação — suporte, manitol ou salina hipertônica, neurocirurgia",
    "Instabilidade hemodinâmica ou respiratória: estabilizar primeiro; punção pode esperar",
    "Púrpura fulminante / choque: não atrasar antibiótico para puncionar",
    "Fraqueza ou perda de sensibilidade nas pernas, retenção urinária após a punção: hematoma espinhal — RM e neurocirurgia de urgência",
    "Pressão de abertura muito elevada: retirar só o volume necessário, não drenar além"
  ],
  indicacoes: [
    "Suspeita de meningite ou encefalite (febre com cefaleia, rigidez de nuca, alteração de consciência)",
    "Lactente febril sem foco que preenche critérios de risco (ver ficha de febre no lactente)",
    "Suspeita de hemorragia subaracnóidea com TC normal ou feita após 6 h do início",
    "Doenças desmielinizantes, Guillain-Barré, neurossífilis, carcinomatose meníngea, hipertensão intracraniana idiopática (diagnóstico e alívio)",
    "Administração intratecal de medicamentos ou contraste (por especialista)"
  ],
  contraindicacoes: [
    "Sinais de hipertensão intracraniana ou lesão com efeito de massa (papiledema, déficit focal, rebaixamento) sem TC prévia que afaste risco",
    "Infecção de pele ou partes moles no local da punção",
    "Coagulopatia não corrigida, anticoagulação plena em curso ou plaquetopenia importante (AABB 2015: considerar transfusão para punção eletiva se plaquetas < 50.000/mm³; o limiar varia entre diretrizes e serviços)",
    "Instabilidade hemodinâmica ou respiratória, convulsão em curso",
    "Suspeita de compressão medular (fazer RM)",
    "Malformação ou cirurgia lombar prévia: relativa, guiar por imagem ou chamar especialista"
  ],
  materiais: [
    "Luvas estéreis, máscara, gorro, campo fenestrado, clorexidina alcoólica 2% (deixar secar) ou PVPI",
    "Lidocaína 1% ou 2% sem vasoconstritor, seringa de 5 mL, agulha 25×7 / 13×4,5; criança: anestésico tópico (lidocaína/prilocaína creme) 30–60 min antes, se houver tempo",
    "Agulha espinhal com mandril: adulto 20–22G, 9 cm (atraumática tipo pencil-point reduz cefaleia pós-punção); obeso: 12 cm",
    "Criança: 22G; recém-nascido e lactente 3,8 cm (1,5 pol.); criança 6,4 cm (2,5 pol.); adolescente/adulto magro 9 cm",
    "Manômetro com torneira de 3 vias",
    "4 tubos estéreis numerados (1 a 4), sem conservante",
    "Tubo para glicemia sérica (coletar no mesmo momento)",
    "Curativo; oxímetro; material de reanimação disponível (lactente)"
  ],
  checagemAntes: [
    "Identificação, indicação e consentimento (responsável legal na criança)",
    "TC de crânio antes se: imunossupressão (HIV, transplante), doença do SNC prévia (lesão, AVC, infecção focal), convulsão nova na última semana, papiledema, alteração moderada a grave de consciência ou déficit neurológico focal (IDSA 2004)",
    "Hemoculturas colhidas e antibiótico iniciado se houver qualquer atraso previsto na meningite",
    "Plaquetas, RNI/TTPa se suspeita de coagulopatia; horário da última dose de anticoagulante",
    "Alergias (anestésico, clorexidina, iodo, látex)",
    "Paciente estável; lactente com monitorização de saturação (a flexão excessiva pode causar hipoxemia)",
    "Time-out: paciente, procedimento, exames a pedir, tubos numerados"
  ],
  passos: [
    { etapa: "Posição", itens: [
      "Decúbito lateral (preferido para medir pressão): costas na borda da maca, perpendicular ao chão, joelhos fletidos ao peito e queixo em direção ao tórax, ombros e quadris alinhados",
      "Sentado, inclinado para a frente: facilita no obeso, mas não permite medir pressão corretamente",
      "Lactente: sentado ou deitado com auxiliar segurando sem flexionar demais o pescoço; monitorar saturação",
      "Localizar a linha entre as cristas ilíacas (corpo de L4 ou espaço L4-L5); puncionar em L3-L4 ou L4-L5 (abaixo do fim da medula); no recém-nascido e lactente, L4-L5 ou L5-S1",
      "Marcar o ponto com a unha ou caneta"
    ] },
    { etapa: "Antissepsia e anestesia", itens: [
      "Higienizar as mãos, paramentar, antissepsia ampla do centro para fora e campo",
      "Botão anestésico e infiltração do trajeto entre os processos espinhosos, aspirando"
    ] },
    { etapa: "Punção", itens: [
      "Agulha com mandril, bisel paralelo ao eixo longo da coluna (afasta e não corta as fibras da dura)",
      "Introduzir na linha média, angulando levemente para a cicatriz umbilical",
      "Avançar devagar; ao sentir perda de resistência (ligamento amarelo e dura), retirar o mandril e observar saída de líquor; se não sair, recolocar o mandril e avançar 1–2 mm por vez",
      "Se bater em osso: recuar até o subcutâneo, corrigir o ângulo e reintroduzir",
      "Se sair sangue que não clareia: retirar e tentar um espaço acima"
    ] },
    { etapa: "Manometria e coleta", itens: [
      "Com o paciente em decúbito lateral, estender pernas e pescoço devagar e pedir para relaxar",
      "Conectar o manômetro e ler a pressão de abertura quando a coluna estabilizar (oscila com a respiração)",
      "Coletar por gotejamento livre (não aspirar) nos tubos numerados: em geral 1 mL por tubo (mais para micobactérias, fungos ou citologia)",
      "Tubo 1: bioquímica (glicose, proteína, lactato se disponível); tubo 2: Gram, cultura, látex/antígenos, PCR; tubo 3: celularidade e diferencial; tubo 4: reserva ou segunda celularidade (HSA), VDRL, outros",
      "Colher glicemia capilar ou sérica no mesmo momento"
    ] },
    { etapa: "Finalização", itens: [
      "Recolocar o mandril antes de retirar a agulha (reduz cefaleia e encarceramento de raiz)",
      "Retirar a agulha e fazer curativo",
      "Repouso no leito não previne cefaleia pós-punção: o paciente pode se movimentar conforme o conforto",
      "Encaminhar os tubos ao laboratório imediatamente (celularidade se altera em 1–2 h)"
    ] }
  ],
  conferirDepois: [
    "Pressão de abertura registrada (normal no adulto em decúbito lateral cerca de 10–20 cmH2O; até cerca de 25 no obeso)",
    "Aspecto do líquor: límpido, turvo, purulento, hemorrágico, xantocrômico",
    "Tubos identificados com número e exames pedidos; glicemia simultânea",
    "Antibiótico e dexametasona já em curso se suspeita bacteriana",
    "Exame neurológico e nível de consciência após o procedimento",
    "Notificar caso suspeito de meningite à vigilância (notificação imediata)"
  ],
  complicacoes: [
    "Cefaleia pós-punção (piora em pé, melhora deitado, até 5 dias): analgesia comum, cafeína, hidratação; persistente e incapacitante — tampão sanguíneo peridural (anestesiologia)",
    "Punção traumática (sangue que clareia nos tubos sucessivos): comparar hemácias no tubo 1 e 4; interpretar celularidade com cautela",
    "Dor lombar ou parestesia em perna durante a punção (toque em raiz): recuar a agulha e reposicionar",
    "Herniação cerebral: suporte avançado, cabeceira 30°, osmoterapia, neurocirurgia",
    "Hematoma espinhal (anticoagulado, plaquetopenia): déficit nas pernas — RM e descompressão cirúrgica urgente",
    "Infecção (meningite iatrogênica, abscesso): técnica estéril rigorosa, máscara obrigatória",
    "Apneia ou hipoxemia no lactente pela posição: reduzir a flexão, oxigênio"
  ],
  documentacao: "Procedimento: punção lombar diagnóstica.\nIndicação: [suspeita de meningite / HSA / outra: ].\nConsentimento [verbal / escrito, responsável: ]. Time-out realizado.\nTC de crânio prévia: [não indicada / normal / achado: ]. Plaquetas [ ], RNI [ ].\nAntibiótico iniciado antes da punção: [sim, horário / não].\nPosição [decúbito lateral / sentado]. Espaço [L3-L4 / L4-L5 / L5-S1]. Anestesia com lidocaína [ ]%.\nAgulha espinhal [ ]G [Quincke / atraumática]. Nº de tentativas: [ ].\nPressão de abertura: [ ] cmH2O (decúbito lateral).\nLíquor [límpido / turvo / hemorrágico que clareia / xantocrômico], [ ] mL em [4] tubos.\nExames: citologia e diferencial, glicose (glicemia simultânea [ ] mg/dL), proteína, lactato, Gram, cultura, [látex / PCR / VDRL / BAAR / tinta da China].\nIntercorrências: [nenhuma / descrever]. Notificação: [sim / não se aplica].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Líquor: padrões típicos (adulto)",
      colunas: ["Padrão", "Células/mm³", "Predomínio", "Proteína", "Glicose (relação líquor/soro)"],
      linhas: [
        ["Normal", "≤ 5", "Linfomononucleares", "15–45 mg/dL", "≥ 0,6"],
        ["Bacteriana", "Centenas a milhares", "Neutrófilos", "Muito elevada", "Baixa (≤ 0,4)"],
        ["Viral", "Dezenas a centenas", "Linfócitos (neutrófilos no início)", "Normal ou pouco elevada", "Normal"],
        ["Tuberculosa / fúngica", "Dezenas a centenas", "Linfócitos", "Elevada", "Baixa"],
        ["Hemorragia subaracnóidea", "Hemácias que não clareiam", "—", "Elevada", "Normal; xantocromia após cerca de 12 h"]
      ],
      nota: "Recém-nascidos têm valores normais mais altos de células e proteína: interpretar com tabela neonatal. Padrões se sobrepõem; antibiótico prévio altera o líquor."
    }
  ],
  prescricao: {
    hospitalar: "SE CEFALEIA PÓS-PUNÇÃO\n1. Dipirona 1 g IV ou VO de 6/6 h se dor (criança: 15–25 mg/kg/dose, máximo 1 g).\n2. Paracetamol 750 mg VO de 6/6 h se dor (criança: 10–15 mg/kg/dose, máximo 750 mg).\n3. Hidratação oral livre; cafeína pode aliviar (café).\n4. Persistência > 24–48 h e incapacitante: avaliar tampão sanguíneo peridural com anestesiologia."
  },
  orientacoesRetorno: [
    "Pode ter dor de cabeça que piora em pé e melhora deitado nos próximos dias: tomar o analgésico, beber líquidos e deitar quando doer",
    "Voltar se a dor de cabeça for muito forte ou durar mais de 3 dias, febre, rigidez de nuca, vômitos, fraqueza ou dormência nas pernas, dificuldade para urinar",
    "Manter o curativo seco por 24 h"
  ],
  relacionadas: ["meningite", "febre-lactente", "cefaleia-ps", "convulsao", "sepse"],
  fontes: [
    "IDSA — Practice Guidelines for the Management of Bacterial Meningitis (Tunkel et al., 2004) e Healthcare-Associated Ventriculitis and Meningitis (2017)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. (2023): meningites",
    "ESCMID — Guideline: diagnosis and treatment of acute bacterial meningitis (2016)",
    "AABB — Platelet transfusion: a clinical practice guideline (Kaufman et al., 2015)",
    "Sociedade Brasileira de Pediatria — Febre sem sinais localizatórios (2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
