// Toxoplasmose na gestação e TORCH resumido
registrarFicha({
  id: "toxoplasmose-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Toxoplasmose na gestação (e outras infecções TORCH)",
  resumo: "Interpretação da sorologia de toxoplasmose no pré-natal, uso de avidez de IgG, espiramicina e esquema tríplice; resumo de citomegalovírus, rubéola e herpes na gestação.",
  palavrasChave: "toxoplasmose gestacional congenita igg igm avidez espiramicina sulfadiazina pirimetamina acido folinico esquema triplice pcr liquido amniotico torch citomegalovirus cmv rubeola herpes genital aciclovir",
  critico: {
    tempo: "IgM+: espiramicina já",
    texto: "IgM reagente na gestação: iniciar espiramicina na mesma consulta, notificar e pedir avidez de IgG (se < 16 semanas) sem esperar o resultado. Não suspender até definição pelo PNAR."
  },
  alarmes: [
    "Soroconversão (IgG e IgM passam a reagentes) durante a gestação",
    "USG fetal com calcificações cerebrais, ventriculomegalia, hepatoesplenomegalia, ascite ou RCF",
    "Gestante imunossuprimida (HIV com CD4 baixo) com IgG reagente (risco de reativação)",
    "Lesões herpéticas genitais ativas no trabalho de parto (cesárea)",
    "Exantema na gestação (rubéola, sífilis, parvovírus, zika: investigar)"
  ],
  conduta: [
    "Sorologia (IgG e IgM) na 1ª consulta; suscetível (IgG e IgM não reagentes): orientar prevenção e repetir a cada trimestre (2º e 3º) e na maternidade",
    "Interpretar conforme a tabela; IgM isolado sem IgG: repetir em 2–3 semanas (falso positivo x infecção muito recente) já em espiramicina",
    "Infecção aguda provável ou confirmada: notificar (toxoplasmose gestacional), espiramicina e encaminhar ao PNAR",
    "PCR para Toxoplasma no líquido amniótico (amniocentese) a partir de 18 semanas e ≥ 4 semanas após a infecção, no serviço de referência",
    "Infecção fetal confirmada (PCR positivo ou USG sugestiva) ou infecção materna a partir de 16–18 semanas conforme protocolo: trocar para esquema tríplice (pirimetamina + sulfadiazina + ácido folínico) com hemograma de controle",
    "USG obstétrica mensal na gestante com infecção aguda",
    "RN de mãe com toxoplasmose na gestação: avaliação pediátrica ao nascer (sorologia, fundo de olho, USG transfontanela, hemograma); teste do pezinho ampliado inclui toxoplasmose em alguns estados"
  ],
  exames: [
    "Pedido: \"Toxoplasmose IgG e IgM (sorologia quantitativa).\"",
    "IgG e IgM reagentes com ≤ 16 semanas: \"Teste de avidez de IgG para toxoplasmose\" (na mesma amostra se possível)",
    "Infecção aguda: \"USG obstétrica mensal. Hemograma quinzenal se esquema tríplice.\" + encaminhamento para amniocentese (PCR) no serviço de referência"
  ],
  tabelas: [
    {
      titulo: "Interpretação da sorologia de toxoplasmose",
      colunas: ["IgG", "IgM", "Interpretação", "Conduta"],
      linhas: [
        ["Não reagente", "Não reagente", "Suscetível", "Prevenção; repetir a cada trimestre"],
        ["Reagente", "Não reagente", "Infecção antiga (imune)", "Nada a fazer (exceto imunossupressão)"],
        ["Não reagente", "Reagente", "Infecção muito recente ou falso positivo", "Espiramicina; repetir em 2–3 semanas: IgG positivar = infecção aguda"],
        ["Reagente", "Reagente, ≤ 16 semanas", "Infecção aguda ou IgM residual", "Espiramicina + avidez: alta = infecção há > 12–16 semanas (anterior à gestação) → suspender; baixa = provável aguda → manter e PNAR"],
        ["Reagente", "Reagente, > 16 semanas", "Infecção aguda (não é possível datar)", "Tratar como infecção aguda: espiramicina/tríplice conforme IG e PNAR"]
      ],
      nota: "Avidez baixa não confirma infecção recente (pode persistir); só a avidez alta é útil para afastar infecção na gestação quando colhida até 16 semanas."
    },
    {
      titulo: "Esquemas de tratamento (MS)",
      colunas: ["Situação", "Esquema", "Observações"],
      linhas: [
        ["Infecção aguda materna sem infecção fetal comprovada (sobretudo até 16–18 semanas)", "Espiramicina 500 mg (1,5 MUI): 2 comprimidos VO de 8/8 h (3 g/dia)", "Manter até o parto se PCR negativo/não realizado, conforme PNAR"],
        ["Infecção fetal confirmada ou suspeita, ou infecção materna no fim do 2º/3º trimestre", "Pirimetamina 25 mg: 25 mg VO 12/12 h por 3 dias, depois 50 mg 1×/dia + Sulfadiazina 500 mg: 1.500 mg VO 12/12 h + Ácido folínico 10–15 mg VO 1×/dia", "Não usar pirimetamina no 1º trimestre. Hemograma a cada 1–2 semanas. Ácido folínico até 1 semana após parar a pirimetamina"]
      ],
      nota: "Corte de 16 ou 18 semanas e alternância de esquemas variam entre MS e FEBRASGO; seguir o protocolo do PNAR. Hidratação abundante com sulfadiazina (cristalúria)."
    },
    {
      titulo: "TORCH resumido",
      colunas: ["Infecção", "Rastreio / diagnóstico", "Conduta na gestação", "Parto e RN"],
      linhas: [
        ["Citomegalovírus", "Sem rastreio universal no SUS; IgG/IgM + avidez se USG sugestiva ou quadro viral", "Medicina fetal; valaciclovir em primoinfecção no 1º trimestre é opção em serviço de referência. Prevenção: lavar as mãos após trocar fraldas e não compartilhar talheres com crianças pequenas", "Via obstétrica; amamentação permitida (exceto prematuro extremo, avaliar); triagem do RN (PCR em urina/saliva até 21 dias)"],
        ["Rubéola", "Vacina antes de engravidar; investigar se exantema ou contato", "Notificação imediata; sem tratamento; aconselhamento sobre risco fetal (maior < 12 semanas)", "Vacinar puérperas suscetíveis (tríplice viral) no pós-parto; evitar gestação por 30 dias"],
        ["Herpes genital", "Clínico; PCR da lesão se disponível", "Primoinfecção: aciclovir 400 mg VO 8/8 h por 7–10 dias. Recorrente: tratar episódios; supressão com aciclovir 400 mg VO 8/8 h a partir de 36 semanas", "Lesão ativa ou pródromo no trabalho de parto: cesárea. Sem lesão: parto vaginal"],
        ["Sífilis", "TR + VDRL 1º e 3º trimestres e parto", "Ver ficha Sífilis", "Ver ficha Sífilis"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "INFECÇÃO AGUDA PROVÁVEL / IgM REAGENTE\nUSO ORAL\n1. Espiramicina 500 mg (1,5 MUI) ----------------- 180 comprimidos\n   Tomar 2 comprimidos de 8 em 8 horas, todos os dias, até nova orientação do pré-natal de alto risco.\n\nESQUEMA TRÍPLICE (por indicação do PNAR, fora do 1º trimestre)\n1. Pirimetamina 25 mg ---------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias; depois 2 comprimidos 1 vez ao dia.\n2. Sulfadiazina 500 mg ---------------------------- 180 comprimidos\n   Tomar 3 comprimidos de 12 em 12 horas. Beber pelo menos 2 litros de água por dia.\n3. Ácido folínico (folinato de cálcio) 15 mg ------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia (manter até 1 semana após parar a pirimetamina).\n\nGESTANTE SUSCETÍVEL — PREVENÇÃO (orientações)\n- Comer carne bem passada; lavar bem frutas e verduras; beber água filtrada ou fervida.\n- Usar luvas ao mexer com terra ou caixa de areia de gatos; lavar bem as mãos."
  },
  orientacoesRetorno: [
    "Se você nunca teve toxoplasmose: coma carne bem passada, lave bem frutas e verduras, beba água filtrada, use luvas ao mexer com terra e evite limpar a caixa de areia do gato",
    "Se o exame mostrar infecção, o remédio deve ser tomado todos os dias até a orientação do alto risco",
    "Com sulfadiazina, beba bastante água; faça o hemograma no prazo combinado",
    "Procure atendimento se surgirem manchas na pele, febre ou feridas genitais na gestação",
    "Lave as mãos depois de trocar fraldas ou limpar secreções de crianças pequenas (citomegalovírus)"
  ],
  encaminhar: [
    "PNAR / medicina fetal: toxoplasmose aguda (provável ou confirmada), USG fetal alterada, suspeita de CMV ou rubéola congênita",
    "Pediatria/infectologia pediátrica: RN de mãe com infecção na gestação"
  ],
  fontes: [
    "Ministério da Saúde — Protocolo de notificação e investigação: toxoplasmose gestacional e congênita (2018)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Protocolos: toxoplasmose e citomegalovírus na gestação (2021)",
    "Ministério da Saúde — PCDT Atenção Integral às Pessoas com IST (2022): herpes genital",
    "Ministério da Saúde — Guia de Vigilância em Saúde (2024): rubéola"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
