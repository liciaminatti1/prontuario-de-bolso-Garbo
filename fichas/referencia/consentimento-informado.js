// Termo de consentimento livre e esclarecido (TCLE) para procedimentos — CFM
registrarFicha({
  id: "consentimento-informado",
  especialidade: "referencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Consentimento informado (termo de consentimento para procedimentos)",
  resumo: "O que deve conter o consentimento livre e esclarecido para procedimentos e cirurgias (Código de Ética Médica e Recomendação CFM nº 1/2016), como agir em urgência com risco iminente de morte, com menores de idade, pessoas incapazes e em recusa terapêutica.",
  palavrasChave: "consentimento informado termo de consentimento tcle cfm codigo de etica medica autonomia recusa terapeutica testemunha de jeova transfusao menor de idade incapaz responsavel legal urgencia emergencia risco iminente de morte assentimento",
  alarmes: [
    "Risco iminente de morte: agir para salvar a vida mesmo sem consentimento (registrar a justificativa)",
    "Paciente sem capacidade de decisão (rebaixado, intoxicado, delirium, deficiência cognitiva grave): buscar o representante legal; se não houver tempo, agir no melhor interesse do paciente",
    "Recusa de pais/responsáveis a tratamento essencial para criança: comunicar Conselho Tutelar/Ministério Público; em risco iminente, tratar",
    "Termo genérico, sem explicação verbal, ou assinado sob pressão não tem valor ético-legal adequado"
  ],
  conduta: [
    "Consentimento é um PROCESSO (conversa) registrado no prontuário; o termo escrito documenta, não substitui a conversa",
    "Avaliar capacidade de decisão: compreende, retém, pondera e comunica a escolha",
    "Explicar em linguagem simples, dar tempo para perguntas e oferecer cópia",
    "Obrigatório termo escrito em cirurgias e procedimentos invasivos ou de risco, anestesia, transfusão eletiva, pesquisa clínica",
    "Paciente analfabeto ou impossibilitado de assinar: impressão digital + assinatura de testemunha (a rogo)",
    "Paciente pode revogar o consentimento a qualquer momento antes do procedimento",
    "URGÊNCIA com risco iminente de morte: o médico deve agir (CEM art. 22 e 31); registrar no prontuário o risco, a impossibilidade de obter consentimento e a conduta",
    "MENORES (< 18 anos): consentimento do responsável legal + assentimento da criança/adolescente conforme maturidade; adolescente pode ser atendido sozinho em situações previstas (sigilo), mas procedimentos de risco exigem o responsável, salvo emergência",
    "INCAPAZES: consentimento do curador/representante legal; envolver o paciente na medida do possível",
    "RECUSA TERAPÊUTICA (Res. CFM 2.232/2019): adulto capaz e informado pode recusar; registrar a recusa, as informações dadas e oferecer alternativas. Não é aceita em risco iminente de morte quando a recusa não é válida (ex.: incapaz, menor) ou quando há abuso de direito (ex.: risco à gestação)",
    "Transfusão em Testemunha de Jeová adulto capaz: respeitar recusa expressa (STF, 2024, Temas 952 e 1069), oferecendo alternativas terapêuticas; em menores, seguir o melhor interesse da criança e a Res. CFM 2.232/2019"
  ],
  tabelas: [
    {
      titulo: "Itens do termo de consentimento (Recomendação CFM 1/2016)",
      colunas: ["Item", "Conteúdo"],
      linhas: [
        ["Identificação", "Nome do paciente, documento, representante legal (se houver), médico responsável com CRM"],
        ["Diagnóstico", "Doença ou condição que justifica o procedimento"],
        ["Procedimento", "Nome, como será feito, tipo de anestesia"],
        ["Benefícios esperados", "Objetivo e resultado esperado"],
        ["Riscos e complicações", "Frequentes e graves, incluindo risco de morte quando houver; possibilidade de transfusão, de ampliação ou mudança de técnica"],
        ["Alternativas", "Outros tratamentos possíveis e consequências de não tratar"],
        ["Cuidados", "Preparo, pós-operatório, recuperação e restrições"],
        ["Declarações", "Que recebeu informações em linguagem acessível, teve dúvidas esclarecidas, consente de forma livre e pode revogar"],
        ["Assinaturas e data", "Paciente ou representante, médico, testemunha (se necessário); local, data e hora"]
      ],
      nota: "Linguagem clara, sem abreviaturas e sem termos técnicos sem explicação; letra legível; uma via para o paciente."
    }
  ],
  prescricao: {
    hospitalar: "REGISTRO EM PRONTUÁRIO — CONSENTIMENTO\nExpliquei ao(à) paciente [e/ou responsável: nome, parentesco] o diagnóstico de [ ], a indicação de [procedimento], como será feito, benefícios esperados, riscos (incluindo [ ]), alternativas ([ ]) e consequências de não realizar. Avaliei capacidade de decisão: [preservada / ausente — motivo]. Dúvidas esclarecidas. [Consentiu / Recusou] de forma livre, e assinou o termo em [data/hora]. Testemunha: [nome].\n\nREGISTRO EM URGÊNCIA SEM CONSENTIMENTO\nPaciente com [condição] e risco iminente de morte; impossibilidade de obter consentimento por [rebaixamento de consciência / ausência de representante em tempo hábil]. Realizado [procedimento] conforme CEM arts. 22 e 31. Família/representante informado em [data/hora] por [nome]."
  },
  orientacoesRetorno: [
    "Você tem direito de saber o que será feito, os riscos e as alternativas, e de fazer perguntas antes de assinar",
    "Você pode mudar de ideia e retirar o consentimento antes do procedimento",
    "Peça uma cópia do termo assinado"
  ],
  fontes: [
    "CFM — Código de Ética Médica, Resolução nº 2.217/2018 (arts. 22, 24, 31 e 34)",
    "CFM — Recomendação nº 1/2016: consentimento livre e esclarecido na assistência médica",
    "CFM — Resolução nº 2.232/2019: recusa terapêutica e objeção de consciência",
    "STF — Recursos Extraordinários 979.742 e 1.212.272 (Temas 952 e 1.069), recusa de transfusão por Testemunhas de Jeová (2024)",
    "Estatuto da Criança e do Adolescente — Lei nº 8.069/1990"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
