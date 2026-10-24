// Revisão do canal de parto, classificação das lacerações e episiorrafia/perineorrafia
registrarFicha({
  id: "revisao-canal-episiorrafia",
  especialidade: "procedimentos",
  caminho: "ps",
  publico: "adulto",
  formato: "procedimento",
  titulo: "Revisão do canal de parto, lacerações e episiorrafia",
  resumo: "Inspeção sistemática de vulva, vagina, períneo, colo e reto após o parto; classificação das lacerações perineais (1º a 4º grau, RCOG) e reparo de lacerações de 1º e 2º grau e da episiotomia.",
  palavrasChave: "revisao do canal de parto laceracao perineal rotura perineal grau 1 2 3 4 3a 3b 3c esfincter anal episiorrafia perineorrafia episiotomia sutura perineal colporrafia toque retal poliglactina vicryl rapid hematoma vulvar laceracao de colo",
  critico: {
    tempo: "Toque retal em toda laceração",
    texto: "Toda laceração de 2º grau ou maior exige toque retal antes e depois do reparo para não deixar passar lesão do esfíncter anal. Lesão de 3º ou 4º grau: chamar o obstetra e reparar no centro obstétrico, com boa analgesia e iluminação."
  },
  alarmes: [
    "Lesão do esfíncter anal (3º grau) ou da mucosa anal (4º grau): obstetra, centro obstétrico",
    "Sangramento ativo com útero contraído: lesão do canal (colo, vagina alta) — revisão com boa exposição; hemorragia pós-parto",
    "Dor perineal intensa, abaulamento e queda da hemoglobina após o parto: hematoma vulvar/vaginal ou paravaginal",
    "Ápice da laceração vaginal não visualizado: pedir ajuda, melhorar exposição e analgesia",
    "Ponto passando pela mucosa retal ao toque: retirar e refazer"
  ],
  indicacoes: [
    "Revisão do canal: após todo parto vaginal",
    "Sutura: lacerações de 2º grau e episiotomia; lacerações de 1º grau quando sangram, não coaptam ou distorcem a anatomia",
    "Lacerações de pequenos lábios, periuretrais ou do colo que sangram"
  ],
  contraindicacoes: [
    "Reparo de 3º e 4º grau fora do centro obstétrico ou por profissional sem treinamento (exceto hemostasia provisória)",
    "Instabilidade hemodinâmica: priorizar reanimação e controle da hemorragia; sutura depois",
    "Lacerações de 1º grau pequenas, que coaptam e não sangram: podem não ser suturadas (decisão com a mulher)"
  ],
  materiais: [
    "Luvas estéreis, campo, compressas e gazes (contar antes e depois)",
    "Boa iluminação (foco), auxiliar; válvulas vaginais se revisão de colo",
    "Pinças de Foerster (anel) para revisar o colo",
    "Lidocaína 1% sem vasoconstritor (máximo 4,5 mg/kg, até 300 mg; 20 mL de 1% = 200 mg) ou complementar a peridural",
    "Seringa de 20 mL, agulha 40×12 / 30×7",
    "Fio absorvível sintético de absorção rápida (poliglactina 910 rápida) 2-0 com agulha 3/8 ou 1/2 círculo de 36 mm (padrão para vagina, músculo e pele)",
    "Fio 3-0 para pele (subcuticular) e lacerações de pequenos lábios",
    "Porta-agulha, pinça anatômica e dente de rato, tesoura",
    "Tampão vaginal (gaze) com fio exteriorizado para afastar o sangue do útero durante a sutura — retirar ao final"
  ],
  checagemAntes: [
    "Placenta dequitada e completa; útero contraído",
    "Sangramento estimado e sinais vitais estáveis",
    "Consentimento verbal; explicar o procedimento",
    "Analgesia adequada (peridural complementada ou anestesia local)",
    "Contagem inicial de gazes e compressas",
    "Posição de litotomia com boa luz"
  ],
  passos: [
    { etapa: "Revisão sistemática", itens: [
      "Inspecionar vulva, pequenos lábios, região periuretral e clitoriana",
      "Afastar os lábios e inspecionar a vagina em toda a circunferência até os fórnices",
      "Colo: se sangramento persistente com útero contraído ou parto rápido/instrumental, pinçar o colo com 2 pinças de Foerster e 'caminhar' em toda a circunferência",
      "Toque retal (luva trocada depois): avaliar o esfíncter anal externo (manobra de pill-rolling entre o polegar na vagina e o indicador no reto) e a mucosa retal",
      "Classificar a laceração (tabela) e decidir quem e onde vai reparar"
    ] },
    { etapa: "Anestesia", itens: [
      "Infiltrar a mucosa vaginal, o músculo perineal e a pele ao longo das bordas da laceração, aspirando antes de injetar",
      "Aguardar alguns minutos e testar a sensibilidade"
    ] },
    { etapa: "Mucosa vaginal", itens: [
      "Localizar o ápice; ancorar o primeiro ponto cerca de 1 cm acima dele",
      "Sutura contínua (não ancorada ou ancorada se sangra) até a carúncula himenal, unindo as bordas no nível do anel himenal",
      "Passar a agulha por baixo da carúncula para o períneo"
    ] },
    { etapa: "Músculos do períneo", itens: [
      "Reaproximar os músculos perineais (transverso superficial e bulbocavernoso) com sutura contínua ou pontos separados, sem deixar espaço morto",
      "Não apertar demais (edema causa dor)"
    ] },
    { etapa: "Pele", itens: [
      "Sutura contínua subcuticular (intradérmica) da comissura posterior para a carúncula, terminando com nó dentro da vagina — ou pontos separados se as bordas não coaptam",
      "Sutura contínua tem menos dor que pontos separados"
    ] },
    { etapa: "Episiotomia (se feita)", itens: [
      "Corte mediolateral iniciado na fúrcula, ângulo de 60° da linha média no coroamento (cerca de 45° após o desprendimento)",
      "Reparo igual à laceração de 2º grau: mucosa, músculo e pele"
    ] },
    { etapa: "Finalização", itens: [
      "Retirar o tampão vaginal",
      "Toque vaginal para verificar o calibre e a ausência de hematoma",
      "Toque retal: confirmar que nenhum ponto atravessou a mucosa retal",
      "Contagem final de gazes, compressas e agulhas",
      "Lavar e secar o períneo; compressa fria (gelo envolto em pano) nas primeiras horas"
    ] }
  ],
  conferirDepois: [
    "Hemostasia completa e útero contraído",
    "Tampão retirado e contagem de material correta",
    "Toque retal sem fio na mucosa",
    "Dor controlada; urinar nas primeiras 6 h (retenção urinária após reparo/peridural)",
    "3º e 4º grau: antibiótico em dose única, laxante e seguimento com obstetra/coloproctologia",
    "Registro com grau, técnica e fios"
  ],
  complicacoes: [
    "Hematoma vulvar ou vaginal: pequeno e estável — gelo e observação; grande ou expansivo — drenagem e hemostasia no centro obstétrico",
    "Deiscência ou infecção: limpeza, antibiótico se celulite; nova sutura geralmente após resolver a infecção (avaliar com obstetra)",
    "Dor perineal e dispareunia: analgesia; avaliar fio retido ou granuloma",
    "Fístula retovaginal (saída de fezes ou gases pela vagina): encaminhar à cirurgia",
    "Incontinência anal após lesão do esfíncter: fisioterapia pélvica e coloproctologia",
    "Retenção urinária: sondagem de alívio"
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Ibuprofeno 400 mg ------------------------- 20 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias, se dor.\n2. Paracetamol 500 mg ------------------------ 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor (máximo 4 g por dia).\n\nUSO LOCAL\n3. Compressa fria (gelo envolto em pano) no períneo por 10 a 20 minutos, várias vezes ao dia, nas primeiras 24 a 48 horas.\n4. Lavar com água e sabão após urinar e evacuar; secar sem esfregar.\n\nSE LACERAÇÃO DE 3º/4º GRAU (definido pelo obstetra)\n5. Lactulose 667 mg/mL ----------------------- 1 frasco\n   Tomar 15 mL 1 a 2 vezes ao dia por 10 dias, para fezes amolecidas."
  },
  documentacao: "Revisão do canal de parto após parto vaginal em [data/hora].\nAchados: [períneo íntegro / laceração de 1º grau / 2º grau / 3a / 3b / 3c / 4º grau / episiotomia mediolateral D], [lacerações de pequenos lábios / periuretral / colo: descrever].\nToque retal antes do reparo: esfíncter anal [íntegro / lesado], mucosa retal [íntegra / lesada].\nAnestesia: [peridural / lidocaína 1% [ ] mL].\nReparo: mucosa vaginal com sutura contínua, músculo com [contínua / pontos separados], pele [subcuticular / pontos separados], fio [poliglactina rápida 2-0].\nToque retal após o reparo: sem fios na mucosa. Tampão retirado. Contagem de gazes/compressas conferida e correta.\nPerda sanguínea estimada: [ ] mL.\n[3º/4º grau: obstetra [nome] chamado; reparo em centro obstétrico; antibiótico [ ]].\nResponsável: [nome, CRM].",
  tabelas: [
    {
      titulo: "Classificação das lacerações perineais (RCOG)",
      colunas: ["Grau", "Estruturas lesadas", "Quem repara"],
      linhas: [
        ["1º", "Pele do períneo e/ou mucosa vaginal", "Médico/enfermeira obstetra; sutura se sangra ou não coapta"],
        ["2º", "Músculos do períneo, sem lesão do esfíncter anal", "Médico/enfermeira obstetra"],
        ["3a", "Esfíncter anal externo: menos de 50% da espessura", "Obstetra, centro obstétrico"],
        ["3b", "Esfíncter anal externo: mais de 50% da espessura", "Obstetra, centro obstétrico"],
        ["3c", "Esfíncter anal externo e interno", "Obstetra, centro obstétrico"],
        ["4º", "Esfíncteres e mucosa anorretal", "Obstetra (com coloproctologia se disponível), centro obstétrico"]
      ],
      nota: "Na dúvida entre 3a e 3b, classificar como o grau maior. Lesão isolada da mucosa retal com esfíncter íntegro (buttonhole) não é 4º grau, mas também deve ser reparada por obstetra."
    }
  ],
  orientacoesRetorno: [
    "Os pontos caem sozinhos ou são absorvidos em algumas semanas; não precisa retirar",
    "Lavar a região com água e sabão após urinar e evacuar; trocar o absorvente com frequência",
    "Usar gelo envolto em pano nas primeiras 48 h para dor e inchaço",
    "Beber bastante água e comer fibras para evacuar sem esforço",
    "Voltar se dor que piora, inchaço grande, febre, pus ou mau cheiro, pontos abrindo, saída de fezes ou gases pela vagina ou perda de controle das fezes"
  ],
  relacionadas: ["parto-vaginal", "hemorragia-pos-parto", "distocia-ombro", "anestesia-local", "sutura"],
  fontes: [
    "RCOG — Green-top Guideline nº 29: Third- and Fourth-degree Perineal Tears (2015)",
    "NICE — Intrapartum care (NG235, 2023): cuidados com o períneo",
    "Ministério da Saúde — Diretrizes Nacionais de Assistência ao Parto Normal (2017)",
    "FEBRASGO — Protocolo: Lacerações perineais e episiotomia (2021)",
    "Cochrane — Kettle C et al. Continuous and interrupted suturing techniques for repair of episiotomy or second-degree tears (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
