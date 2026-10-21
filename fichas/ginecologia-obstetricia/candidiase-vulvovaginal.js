// Candidíase vulvovaginal
registrarFicha({
  id: "candidiase-vulvovaginal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Candidíase vulvovaginal (inclusive recorrente e na gestação)",
  resumo: "Prurido vulvar, ardor, disúria externa, dispareunia e corrimento branco grumoso, sem odor. pH vaginal ≤ 4,5. Não é considerada IST; parceria só trata se sintomática.",
  palavrasChave: "candidiase vulvovaginal candida monilia corrimento branco prurido vaginal fluconazol miconazol nistatina clotrimazol recorrente gestante",
  alarmes: [
    "Febre, dor pélvica ou dor à mobilização do colo (pensar em DIP)",
    "Quatro ou mais episódios em 12 meses (CVV recorrente: investigar)",
    "Sem resposta ao tratamento: confirmar o diagnóstico (exame a fresco e cultura)",
    "Lesões ulceradas, fissuras extensas ou lesão vulvar crônica (dermatose, neoplasia)",
    "Candidíase de repetição associada a perda de peso, poliúria ou infecções frequentes (DM, HIV)"
  ],
  conduta: [
    "Diagnóstico: clínica + exame especular (corrimento branco grumoso aderido, hiperemia e edema vulvar); pH ≤ 4,5 e teste das aminas negativo",
    "Se disponível: exame a fresco com KOH 10% (pseudo-hifas/leveduras) ou Gram",
    "Assintomática com Candida em citologia: não tratar",
    "Não complicada: tratamento tópico 7 dias ou fluconazol 150 mg dose única (VO)",
    "Complicada (sintomas intensos, imunossupressão, DM descompensado, não albicans): tópico por 7–14 dias ou fluconazol 150 mg em 3 doses (dias 1, 4 e 7)",
    "Gestação: somente tópico por 7 dias (miconazol, clotrimazol ou nistatina). Evitar fluconazol oral",
    "CVV recorrente (≥ 4 episódios/ano): confirmar com cultura; controlar fatores (DM, antibióticos, imunossupressão); indução + manutenção com fluconazol por 6 meses",
    "Parceria: não tratar de rotina; tratar só se balanopostite sintomática",
    "Oferecer testes rápidos de HIV, sífilis e hepatites B e C"
  ],
  exames: [
    "Exame a fresco (KOH 10%) e pH vaginal, quando disponíveis",
    "Cultura para fungos com identificação da espécie: CVV recorrente ou falha terapêutica (pedido: cultura de secreção vaginal para fungos com identificação de espécie)",
    "Glicemia de jejum ou HbA1c se recorrente",
    "Testes rápidos: HIV, sífilis, hepatites B e C"
  ],
  diferenciais: [
    "Vaginose bacteriana (odor de peixe, pH > 4,5)",
    "Tricomoníase (corrimento amarelo-esverdeado bolhoso, colo em framboesa)",
    "Dermatite de contato (absorventes, sabonetes, duchas)",
    "Líquen escleroso, líquen simples crônico",
    "Vaginite citolítica e vaginite inflamatória descamativa",
    "Herpes genital (dor e vesículas)"
  ],
  tratamento: [
    { droga: "Miconazol creme vaginal 2%", linha: "l1", dose: "1 aplicador cheio (5 g)", via: "Vaginal", intervalo: "1 vez ao dia, à noite", duracao: "7 dias (14 dias se complicada)", monitorizacao: "Melhora em 3–5 dias", contraindicacoes: "Hipersensibilidade", ajustes: "Gestação e lactação: opção de escolha. Pode reduzir a eficácia do preservativo e diafragma de látex" },
    { droga: "Nistatina creme vaginal 25.000 UI/g", linha: "alt", dose: "1 aplicador cheio (4 g = 100.000 UI)", via: "Vaginal", intervalo: "1 vez ao dia, à noite", duracao: "14 dias", monitorizacao: "—", contraindicacoes: "—", ajustes: "Segura na gestação; menos eficaz que azólicos" },
    { droga: "Fluconazol 150 mg", linha: "l1", dose: "150 mg", via: "VO", intervalo: "Dose única (complicada: dias 1, 4 e 7)", duracao: "—", monitorizacao: "Interações (varfarina, sulfonilureias, estatinas)", contraindicacoes: "Gestação (evitar)", ajustes: "Compatível com amamentação" },
    { droga: "Fluconazol 150 mg — CVV recorrente", linha: "l1", dose: "Indução: 150 mg nos dias 1, 4 e 7. Manutenção: 150 mg 1 vez por semana", via: "VO", intervalo: "Semanal", duracao: "6 meses", monitorizacao: "TGO/TGP se uso prolongado e hepatopatia ou sintomas", contraindicacoes: "Gestação; hepatopatia grave", ajustes: "Recorrência após suspender é comum (até metade das pacientes); repetir ciclo ou encaminhar" }
  ],
  prescricao: {
    ambulatorial: "NÃO COMPLICADA — USO VAGINAL\n1. Miconazol creme vaginal 2% --------------------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador cheio no fundo da vagina à noite, ao deitar, por 7 dias seguidos.\n   OU\nUSO ORAL\n1. Fluconazol 150 mg ------------------------------ 1 cápsula\n   Tomar 1 cápsula em dose única.\n\nGESTANTE — USO VAGINAL (não usar fluconazol oral)\n1. Miconazol creme vaginal 2% --------------------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador à noite por 7 dias.\n   (Alternativa: nistatina creme vaginal 25.000 UI/g, 1 aplicador à noite por 14 dias.)\n\nCOMPLICADA — USO ORAL\n1. Fluconazol 150 mg ------------------------------ 3 cápsulas\n   Tomar 1 cápsula no 1º, no 4º e no 7º dia.\n\nRECORRENTE (≥ 4 episódios/ano) — USO ORAL\n1. Fluconazol 150 mg ------------------------------ 29 cápsulas\n   Tomar 1 cápsula no 1º, 4º e 7º dia; depois 1 cápsula 1 vez por semana por 6 meses.\n\nPRURIDO VULVAR INTENSO — USO TÓPICO\n2. Miconazol creme dermatológico 2% -------------- 1 bisnaga\n   Aplicar na vulva 2 vezes ao dia por 7 dias."
  },
  orientacoesRetorno: [
    "Não é doença sexualmente transmissível; o parceiro só trata se tiver sintomas",
    "Evitar duchas vaginais, sabonetes perfumados e roupas íntimas apertadas ou sintéticas",
    "Durante o creme vaginal, o preservativo de látex pode falhar: usar outro método ou evitar relação",
    "Voltar se os sintomas não melhorarem em 7 dias, se voltarem 4 ou mais vezes no ano, ou se surgir febre ou dor na barriga",
    "Gestante: não tomar fluconazol por conta própria"
  ],
  encaminhar: [
    "Ginecologia: CVV recorrente sem resposta à manutenção, espécie não albicans resistente, dúvida diagnóstica (dermatoses vulvares)"
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022; capítulo de corrimento vaginal de 2020)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)",
    "FEBRASGO — Protocolo: Candidíase vulvovaginal (Série Orientações e Recomendações)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
