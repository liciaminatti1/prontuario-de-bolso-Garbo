// Notificação compulsória: lista nacional, prazos e como notificar
registrarFicha({
  id: "notificacao-compulsoria",
  especialidade: "referencia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Notificação compulsória: o que, quando e como",
  resumo: "Quais doenças, agravos e eventos notificar segundo a Lista Nacional de Notificação Compulsória (Portaria de Consolidação GM/MS nº 4/2017, Anexo 1 do Anexo V, com atualizações), prazos imediato (até 24 h) e semanal, e como notificar (SINAN, e-SUS, telefone/e-mail da vigilância).",
  palavrasChave: "notificacao compulsoria lista nacional doencas de notificacao dnc sinan e sus notifica ficha de notificacao vigilancia epidemiologica cievs notificacao imediata 24 horas semanal portaria de consolidacao 4 violencia acidente de trabalho sarampo meningite dengue sifilis tuberculose",
  critico: {
    tempo: "Imediata: até 24 h, por telefone",
    texto: "Notificar a SUSPEITA, sem esperar confirmação. Doenças de notificação imediata devem ser comunicadas em até 24 h à vigilância municipal (por telefone, e-mail ou sistema) e depois registradas no sistema. A notificação é obrigatória para médicos e demais profissionais de saúde (Lei 6.259/1975)."
  },
  alarmes: [
    "Suspeita de sarampo, rubéola, poliomielite/paralisia flácida aguda, difteria, raiva, febre amarela, cólera, botulismo, doença meningocócica: notificar na hora e iniciar bloqueio",
    "Surto ou agregado de casos (ex.: diarreia, intoxicação alimentar, doença exantemática): notificar como evento de saúde pública",
    "Evento adverso grave ou óbito após vacinação: notificação imediata",
    "Violência sexual e tentativa de suicídio: notificação imediata ao município (para garantir a proteção e a profilaxia)",
    "Violência contra criança, adolescente, idoso ou pessoa com deficiência: notificar e comunicar ao Conselho Tutelar / órgãos de proteção"
  ],
  conduta: [
    "Notificar caso suspeito; a confirmação ou descarte é feita depois pela vigilância",
    "Preencher a ficha do SINAN do agravo (ou a ficha de notificação/conclusão) com dados completos: identificação, endereço, telefone, data de início dos sintomas",
    "Imediata (até 24 h): telefonar ou enviar e-mail à vigilância epidemiológica municipal (ou CIEVS estadual/nacional se o município não puder ser contactado) e registrar a ficha",
    "Semanal: enviar a ficha à vigilância do município no fluxo local (consolidada até 7 dias)",
    "Sistemas: SINAN (maioria dos agravos), e-SUS Sinan (dengue, chikungunya, zika e outros conforme implantação), e-SUS Notifica / SIVEP-Gripe (síndrome gripal e SRAG), SI-PNI/e-SUS Notifica (eventos supostamente atribuíveis à vacinação), SIM (óbito)",
    "Colher amostras indicadas (sorologia, PCR, swab) antes do tratamento quando possível, conforme o Guia de Vigilância",
    "Iniciar medidas de controle sem esperar a vigilância: isolamento, quimioprofilaxia de contatos, vacinação de bloqueio",
    "Notificação também é obrigatória em serviços privados; não exige consentimento do paciente; o sigilo dos dados é garantido",
    "Conferir a lista vigente: a portaria é atualizada com frequência (incluídas ou alteradas em 2025–2026, ex.: caxumba, Oropouche, anomalias congênitas)"
  ],
  tabelas: [
    {
      titulo: "Principais agravos e periodicidade (resumo)",
      colunas: ["Agravo", "Periodicidade", "Observação"],
      linhas: [
        ["Sarampo, rubéola, síndrome da rubéola congênita", "Imediata", "Bloqueio vacinal em até 72 h"],
        ["Doença meningocócica e outras meningites", "Imediata", "Quimioprofilaxia de contatos"],
        ["Poliomielite / paralisia flácida aguda (< 15 anos)", "Imediata", "Coleta de fezes"],
        ["Difteria, coqueluche", "Imediata", "Investigação de contatos"],
        ["Raiva humana; acidente por animal potencialmente transmissor da raiva", "Imediata (raiva) / conforme lista (acidente)", "Profilaxia pós-exposição"],
        ["Febre amarela, febre maculosa, hantavirose, leptospirose, peste", "Imediata", "—"],
        ["Cólera, botulismo, febre tifoide", "Imediata", "—"],
        ["Dengue (caso), chikungunya, zika", "Semanal", "Óbito: imediata; zika em gestante e chikungunya em área sem transmissão: imediata"],
        ["Doença de Chagas aguda", "Imediata", "—"],
        ["Malária", "Imediata fora da região amazônica; semanal na região amazônica", "—"],
        ["Influenza por novo subtipo; SRAG", "Imediata", "SIVEP-Gripe"],
        ["Mpox", "Imediata", "—"],
        ["Evento adverso grave ou óbito pós-vacinação", "Imediata", "e-SUS Notifica"],
        ["Violência sexual; tentativa de suicídio", "Imediata (municipal)", "Ficha de violência interpessoal/autoprovocada"],
        ["Violência doméstica e outras violências", "Semanal", "Criança/adolescente: comunicar ao Conselho Tutelar"],
        ["Sífilis adquirida, em gestante e congênita; HIV/aids; gestante com HIV; criança exposta ao HIV; hepatites virais", "Semanal", "—"],
        ["Tuberculose, hanseníase, esquistossomose, leishmanioses", "Semanal", "—"],
        ["Acidente de trabalho grave, fatal ou com criança/adolescente; com exposição a material biológico", "Semanal", "Ficha específica"],
        ["Intoxicação exógena", "Semanal", "Inclui agrotóxicos e medicamentos"],
        ["Acidente por animal peçonhento", "Conforme lista vigente", "Soroterapia (ver fichas de toxicologia)"],
        ["Óbito materno e óbito infantil", "Semanal", "Investigação pelo comitê"],
        ["Toxoplasmose gestacional e congênita", "Semanal", "—"]
      ],
      nota: "Resumo para consulta rápida, não substitui a lista oficial. Periodicidades mudam entre atualizações da portaria e alguns estados e municípios acrescentam agravos: confira sempre a lista vigente (Portaria de Consolidação GM/MS nº 4/2017, Anexo 1 do Anexo V, atualizada pela Portaria GM/MS nº 6.734/2025 e atualizações de 2026). Na dúvida, notifique imediatamente."
    }
  ],
  prescricao: {
    ambulatorial: "MODELO DE REGISTRO NO PRONTUÁRIO\nCaso suspeito de [agravo], notificado à vigilância epidemiológica municipal em [data/hora], por [telefone / e-mail / sistema], falado com [nome].\nFicha SINAN nº [ ] preenchida e encaminhada.\nAmostras colhidas: [ ] em [data].\nMedidas iniciadas: [isolamento / profilaxia de contatos / vacinação de bloqueio / comunicação ao Conselho Tutelar].\nResponsável: [nome, CRM]."
  },
  orientacoesRetorno: [
    "Explicar ao paciente que a notificação é obrigatória e serve para proteger a comunidade; os dados são sigilosos",
    "Informar que a vigilância pode entrar em contato ou visitar a casa para examinar contatos",
    "Orientar isolamento e cuidados com os contatos conforme a doença",
    "Retornar se piora ou se familiares apresentarem sintomas"
  ],
  fontes: [
    "Ministério da Saúde — Portaria de Consolidação GM/MS nº 4/2017, Anexo 1 do Anexo V (Lista Nacional de Notificação Compulsória), com atualizações (Portaria GM/MS nº 6.734/2025; atualização de 2026 — conferir a vigente)",
    "Lei nº 6.259/1975 (notificação compulsória) e Lei nº 13.931/2019 (violência contra a mulher)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª edição (2023/2024)",
    "Ministério da Saúde — Instrutivo de notificação de violência interpessoal e autoprovocada (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
