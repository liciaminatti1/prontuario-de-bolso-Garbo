// Tricomoníase
registrarFicha({
  id: "tricomoniase",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Tricomoníase (inclui tratamento da parceria)",
  resumo: "IST por Trichomonas vaginalis. Corrimento abundante amarelo-esverdeado, bolhoso, com odor, prurido, disúria e dispareunia; colo em framboesa (colpite tigroide). Homem geralmente assintomático ou com uretrite. Tratar sempre a parceria.",
  palavrasChave: "tricomoniase trichomonas vaginalis corrimento amarelo esverdeado bolhoso colo framboesa colpite tigroide metronidazol parceiro ist",
  alarmes: [
    "Febre, dor pélvica ou à mobilização do colo (DIP associada)",
    "Gestante (associação com rotura prematura de membranas e parto prematuro)",
    "Persistência após tratamento correto: pensar em reinfecção (parceria não tratada) ou resistência",
    "Coinfecção com outras IST é frequente: testar HIV, sífilis, hepatites e pesquisar gonorreia e clamídia"
  ],
  conduta: [
    "Diagnóstico: exame a fresco (protozoários móveis), pH > 4,5; teste molecular (NAAT) quando disponível é o mais sensível",
    "Citologia oncótica com Trichomonas: considerar diagnóstico e tratar (confirmar se possível)",
    "Mulher: metronidazol 500 mg VO de 12/12 h por 7 dias (preferido) ou 2 g VO dose única",
    "Homem / parceria: metronidazol 2 g VO dose única (ou 500 mg de 12/12 h por 7 dias)",
    "Tratar todas as parcerias sexuais, com ou sem sintomas; abster-se de relações até ambos completarem o tratamento e não terem sintomas",
    "Gestação e lactação: metronidazol oral pode ser usado em qualquer trimestre",
    "Oferecer testes rápidos de HIV, sífilis, hepatites B e C; pesquisar gonorreia e clamídia se disponível; notificar não é compulsório",
    "Retestar a mulher em cerca de 3 meses (alta taxa de reinfecção), se disponível"
  ],
  exames: [
    "Exame a fresco e pH vaginal na consulta, quando disponíveis",
    "Pedido: pesquisa de Trichomonas vaginalis em secreção vaginal (exame a fresco ou biologia molecular, se disponível)",
    "Pesquisa de Neisseria gonorrhoeae e Chlamydia trachomatis por biologia molecular (se disponível)",
    "Testes rápidos: HIV, sífilis, hepatites B e C"
  ],
  diferenciais: [
    "Vaginose bacteriana",
    "Candidíase vulvovaginal",
    "Cervicite por gonococo/clamídia",
    "Vaginite inflamatória descamativa"
  ],
  tratamento: [
    { droga: "Metronidazol 250 mg (mulher)", linha: "l1", dose: "500 mg (2 comprimidos)", via: "VO", intervalo: "12/12 h", duracao: "7 dias", monitorizacao: "Náusea, gosto metálico", contraindicacoes: "Álcool durante e até 24 h após; dissulfiram nas últimas 2 semanas", ajustes: "Esquema de 7 dias é mais eficaz que dose única em mulheres (CDC 2021). Gestação: pode usar" },
    { droga: "Metronidazol 2 g dose única", linha: "alt", dose: "2 g (8 comprimidos de 250 mg ou 5 de 400 mg)", via: "VO", intervalo: "Dose única", duracao: "—", monitorizacao: "Náusea e vômitos", contraindicacoes: "Álcool", ajustes: "Esquema preferido para homens e parcerias; opção para mulher com baixa adesão" }
  ],
  prescricao: {
    ambulatorial: "PACIENTE (MULHER) — USO ORAL\n1. Metronidazol 250 mg ---------------------------- 28 comprimidos\n   Tomar 2 comprimidos de 12 em 12 horas por 7 dias.\n   (Alternativa com baixa adesão: metronidazol 400 mg, 5 comprimidos juntos em dose única = 2 g.)\n\nPARCERIA SEXUAL — USO ORAL (receita própria em nome da parceria)\n1. Metronidazol 400 mg ---------------------------- 5 comprimidos\n   Tomar os 5 comprimidos juntos, em dose única, após refeição.\n\nORIENTAÇÕES\n- Não ingerir bebida alcoólica durante o tratamento e até 1 dia após.\n- Não ter relação sexual até os dois terminarem o tratamento e não terem mais sintomas."
  },
  orientacoesRetorno: [
    "É uma infecção transmitida pelo sexo: a parceria precisa tratar ao mesmo tempo, mesmo sem sintomas",
    "Sem relações sexuais até os dois terminarem o tratamento; depois, usar preservativo",
    "Não beber álcool durante o remédio e até 1 dia depois",
    "Fazer os testes de HIV, sífilis e hepatites oferecidos",
    "Voltar se os sintomas continuarem após o tratamento, se surgir febre ou dor na barriga; repetir o exame em cerca de 3 meses"
  ],
  encaminhar: [
    "Infectologia/ginecologia: falha após 2 cursos corretos com parceria tratada (suspeita de resistência ao metronidazol)"
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022; capítulo de corrimento vaginal de 2020)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)",
    "OMS — Recommendations for the treatment of Trichomonas vaginalis, Mycoplasma genitalium, Candida albicans, bacterial vaginosis and human papillomavirus (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
