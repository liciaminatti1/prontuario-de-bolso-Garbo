// Transferência do paciente traumatizado
registrarFicha({
  id: "transferencia-trauma",
  especialidade: "trauma",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Transferência do traumatizado: critérios, comunicação e checklist",
  resumo: "Quando e como transferir o traumatizado para um centro com mais recursos (ATLS): critérios, contato médico a médico (ABC-SBAR), preparo do paciente para o transporte e documentação.",
  palavrasChave: "transferencia trauma regulacao central de regulacao samu inter hospitalar centro de trauma referencia abc sbar checklist transporte remocao atls",
  critico: {
    tempo: "Decidir na 1ª hora, sem TC",
    texto: "Se a necessidade do paciente excede a capacidade do serviço, inicie a transferência assim que identificar, ainda na avaliação primária. Não atrase para fazer exames que não mudam a conduta local."
  },
  alarmes: [
    "Paciente instável sem cirurgião, banco de sangue ou centro cirúrgico disponível",
    "Via aérea não segura antes de um transporte longo (intubar antes de sair)",
    "Pneumotórax não drenado antes de transporte aéreo ou ventilação mecânica",
    "Piora durante a espera: reavaliar xABCDE e atualizar o serviço de destino"
  ],
  conduta: [
    "Identificar cedo os critérios de transferência (tabela) — a decisão é clínica, não depende de TC",
    "Reanimar o possível antes de sair: hemorragia controlada (torniquete, cinta pélvica), via aérea segura, tórax drenado se necessário, 2 acessos, sangue/ácido tranexâmico iniciados",
    "Contato médico a médico (e via central de regulação/SAMU): usar o roteiro ABC-SBAR (tabela); registrar nome do médico que aceitou e horário",
    "Escolher o transporte e a equipe conforme a gravidade (UTI móvel com médico para paciente instável ou intubado)",
    "Enviar: relatório de transferência, cópias de exames e imagens (CD/PACS), folha de sinais vitais, prescrições, termo de consentimento quando possível, segmento amputado conservado se houver",
    "Durante o transporte: monitorização contínua, oxigênio, analgesia, sedação, restrição de movimento da coluna, prevenção de hipotermia",
    "Não tentar procedimentos definitivos que atrasem a saída (ex.: TC de corpo inteiro, cirurgias ortopédicas)"
  ],
  exames: [
    "Só os que ajudam a reanimar ou a decidir a transferência: eFAST, RX de tórax e pelve, gasometria, tipagem, beta-hCG",
    "TC apenas se o paciente estável vai ficar no serviço ou se o destino pediu e não haverá atraso",
    "Enviar todas as imagens feitas (o destino não deve repetir)"
  ],
  encaminhar: [
    "Centro de trauma / hospital de referência via central de regulação estadual ou municipal (SAMU 192)",
    "Queimados: ver critérios na ficha queimaduras",
    "TCE com indicação neurocirúrgica: ver fichas tce-moderado-grave e tce-crianca",
    "Amputação com indicação de reimplante: ver ficha amputacao-traumatica"
  ],
  prescricao: {
    hospitalar: "PRESCRIÇÃO PARA TRANSPORTE — TRAUMA (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Restrição de movimento da coluna conforme avaliação (colar, colchão a vácuo/prancha só para transporte).\n3. Monitor cardíaco, oximetria e PA não invasiva a cada 5–15 min; capnografia se intubado.\n4. O₂ para SpO₂ ≥ 94% (ventilador de transporte se intubado: VC 6–8 mL/kg de peso predito, PEEP 5, FiO₂ para SpO₂ ≥ 94%).\n5. 2 acessos venosos pérvios e fixados.\n6. Ringer lactato aquecido conforme meta pressórica; hemocomponentes em curso: ___.\n7. Ácido tranexâmico: 1ª dose feita às ___:___ h; manter 1 g + SF 0,9% 500 mL IV a 62 mL/h.\n8. Analgesia: morfina 1 mg/mL 2–4 mL IV a cada 10 min se dor (ou fentanil 25–50 mcg IV).\n9. Sedação se intubado: conforme ficha sedacao-continua.\n10. Ondansetrona 4 mg IV se náusea.\n11. Sonda vesical e gástrica conforme indicação; dreno de tórax aberto em selo d'água (nunca clampear).\n12. Manta térmica.\n13. Controles e registro de sinais vitais, Glasgow e pupilas a cada 15 min durante o transporte.\n\nCRIANÇA: doses por peso (fita de Broselow), cristaloide 20 mL/kg, sangue 10 mL/kg; ácido tranexâmico 15 mg/kg (máx 1 g) + 2 mg/kg/h; morfina 0,05–0,1 mg/kg (máx 4 mg)."
  },
  orientacoesRetorno: [
    "Explicar à família por que o paciente está sendo transferido, para onde e como chegar",
    "Informar o telefone do hospital de destino e da central de regulação",
    "Pedir que levem documentos, cartão SUS, cartão de vacina e lista de remédios em uso"
  ],
  tabelas: [
    {
      titulo: "Critérios de transferência para centro de trauma (ATLS)",
      colunas: ["Sistema", "Situação"],
      linhas: [
        ["SNC", "TCE penetrante ou com afundamento, fratura exposta de crânio ou fístula liquórica, Glasgow < 15 ou alteração neurológica, sinais de lateralização, lesão medular"],
        ["Tórax", "Mediastino alargado ou suspeita de lesão de grandes vasos, lesão grave da parede torácica, contusão pulmonar, lesão cardíaca, necessidade de ventilação prolongada"],
        ["Pelve/abdome", "Fratura de pelve instável, fratura de pelve com choque, lesão pélvica exposta, lesão de víscera sólida, instabilidade hemodinâmica"],
        ["Extremidades", "Fraturas expostas graves, esmagamento, isquemia, amputação traumática com indicação de reimplante"],
        ["Multissistêmico", "TCE com lesão de face, tórax, abdome ou pelve; múltiplas fraturas de ossos longos; queimadura com lesões associadas"],
        ["Comorbidade", "Idade > 55 anos, criança, gestação, cardiopatia ou pneumopatia, diabetes em insulina, obesidade grave, imunossupressão"],
        ["Deterioração", "Ventilação mecânica prolongada, sepse, falência orgânica"]
      ],
      nota: "Critério final: qualquer necessidade que exceda a capacidade do serviço."
    },
    {
      titulo: "Comunicação médico a médico — ABC-SBAR (ATLS)",
      colunas: ["Item", "O que informar"],
      linhas: [
        ["A — Via aérea", "Pérvia? Intubado (tubo nº, posição)?"],
        ["B — Respiração", "FR, SpO₂, drenos (débito)"],
        ["C — Circulação", "PA, FC, acessos, volume e sangue infundidos, ácido tranexâmico"],
        ["S — Situação", "Nome, idade, quem envia, motivo da transferência"],
        ["B — Background (história)", "Mecanismo, hora do trauma, AMPLA, achados pré-hospitalares"],
        ["A — Avaliação", "Sinais vitais, exame, lesões identificadas, exames feitos, tratamento"],
        ["R — Recomendação", "Modo de transporte, nível de equipe, horário previsto de chegada, o que o destino precisa preparar"]
      ]
    },
    {
      titulo: "Checklist antes de sair",
      colunas: ["Item", "Conferido"],
      linhas: [
        ["Via aérea segura (intubar antes se dúvida); tubo fixado; capnografia", "[ ]"],
        ["Pneumotórax drenado; dreno funcionando e fixado", "[ ]"],
        ["Hemorragia controlada; torniquete com horário anotado; cinta pélvica", "[ ]"],
        ["2 acessos pérvios; sangue e ácido tranexâmico em curso/registrados", "[ ]"],
        ["Coluna com restrição de movimento", "[ ]"],
        ["Sondas (vesical/gástrica) se indicadas", "[ ]"],
        ["Analgesia e sedação prescritas; drogas de urgência na ambulância", "[ ]"],
        ["Aceite registrado (nome do médico, hospital, horário)", "[ ]"],
        ["Relatório, exames, imagens e prescrição enviados", "[ ]"],
        ["Família informada", "[ ]"]
      ]
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025): capítulo Transfer to Definitive Care",
    "Ministério da Saúde — Política Nacional de Atenção às Urgências e Portaria GM/MS nº 2.048/2002 (transporte inter-hospitalar)",
    "Conselho Federal de Medicina — Resolução CFM nº 2.110/2014 (atendimento pré-hospitalar e transferências)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
