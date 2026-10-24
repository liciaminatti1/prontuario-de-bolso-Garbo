// Sangramento pós-menopausa e sinusorragia
registrarFicha({
  id: "sangramento-pos-menopausa",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Sangramento pós-menopausa e sinusorragia (sangramento pós-coito)",
  resumo: "Qualquer sangramento genital 12 meses ou mais após a última menstruação deve ser investigado: a causa mais comum é atrofia, mas cerca de 1 em cada 10 é câncer de endométrio. Sinusorragia (sangramento após a relação) exige exame do colo: cervicite, ectrópio, pólipo ou câncer de colo.",
  palavrasChave: "sangramento pos menopausa sangramento na menopausa endometrio espessado cancer de endometrio hiperplasia polipo atrofia biopsia endometrial histeroscopia sinusorragia sangramento pos coito sangramento apos relacao colo do utero ectropio cervicite tamoxifeno",
  critico: {
    tempo: "Pós-menopausa: USG e encaminhar",
    texto: "Todo sangramento pós-menopausa é câncer de endométrio até prova em contrário: USG transvaginal e encaminhamento com prioridade se endométrio > 4 mm, sangramento persistente ou fator de risco. Lesão visível no colo: colposcopia/biópsia, independentemente do rastreio."
  },
  alarmes: [
    "Sangramento intenso com instabilidade ou anemia sintomática (PS)",
    "Lesão vegetante, ulcerada ou friável no colo",
    "Endométrio > 4 mm, espessamento focal ou heterogêneo, coleção intrauterina",
    "Sangramento persistente ou recorrente mesmo com endométrio ≤ 4 mm",
    "Uso de tamoxifeno, obesidade, diabetes, anovulação crônica, síndrome de Lynch"
  ],
  conduta: [
    "Confirmar a origem: vulva, vagina, colo, útero, uretra ou ânus (exame especular cuidadoso)",
    "Perguntar sobre TH, tamoxifeno, anticoagulante, trauma, relação sexual",
    "Pós-menopausa: USG transvaginal para medir o endométrio",
    "Endométrio ≤ 4 mm e episódio único: provável atrofia → estrogênio vaginal e acompanhar; novo sangramento → encaminhar",
    "Endométrio > 4 mm, espessamento focal, não mensurável ou sangramento persistente: ginecologia para biópsia endometrial ou histeroscopia com biópsia",
    "Em TH: sangramento irregular nos primeiros 6 meses é comum; após 6 meses ou novo sangramento após amenorreia → investigar",
    "Sinusorragia: exame especular do colo; teste de clamídia/gonorreia; tratar cervicite; rastreio de colo atualizado",
    "Sinusorragia com colo de aspecto normal e rastreio negativo: tratar causa local (ectrópio, pólipo); se persistir → colposcopia",
    "Lesão visível suspeita no colo: encaminhar para colposcopia com biópsia, não esperar citologia ou DNA-HPV"
  ],
  exames: [
    "USG transvaginal: 'Ultrassonografia transvaginal — sangramento pós-menopausa: medir espessura endometrial e avaliar cavidade e anexos'",
    "Hemograma se sangramento volumoso",
    "Teste de clamídia e gonorreia (biologia molecular) na sinusorragia",
    "DNA-HPV ou citologia se rastreio em atraso (não substitui colposcopia se houver lesão visível)",
    "Coagulograma se anticoagulada ou sangramentos em outros locais"
  ],
  diferenciais: [
    "Atrofia endometrial ou vaginal (mais comum)",
    "Pólipo endometrial ou cervical",
    "Hiperplasia endometrial, câncer de endométrio",
    "Câncer de colo, de vagina ou de vulva",
    "Sangramento por TH, tamoxifeno ou anticoagulante",
    "Hematúria ou sangramento retal confundidos com sangramento genital"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO\n1. Ultrassonografia transvaginal. Indicação: sangramento pós-menopausa (DUM há ___ anos). Avaliar espessura endometrial.\n\nATROFIA GENITAL (endométrio ≤ 4 mm, sangramento único)\nUSO VAGINAL\n2. Estriol 1 mg/g creme vaginal -------------------- 1 bisnaga\n   Aplicar 0,5 g (meio aplicador) dentro da vagina à noite, todos os dias por 3 semanas; depois 2 vezes por semana.\n\nUSO TÓPICO\n3. Lubrificante vaginal à base de água ----------- 1 tubo\n   Aplicar antes das relações sexuais."
  },
  orientacoesRetorno: [
    "Sangramento depois da menopausa sempre precisa ser investigado, mesmo que pouco e uma vez só",
    "Na maioria das vezes a causa é benigna, mas é importante descartar câncer",
    "Fazer a ultrassonografia o quanto antes e trazer o resultado",
    "Voltar imediatamente se o sangramento for forte, com coágulos, tontura ou fraqueza",
    "Se o sangramento voltar, mesmo com exame normal, retornar para encaminhamento"
  ],
  encaminhar: [
    "Ginecologia com prioridade: endométrio > 4 mm, espessamento focal, sangramento recorrente, uso de tamoxifeno com sangramento, fatores de risco",
    "Colposcopia com prioridade: lesão visível no colo, sinusorragia persistente, rastreio alterado",
    "Lei 13.896/2019: exames para confirmar câncer suspeito em até 30 dias"
  ],
  fontes: [
    "FEBRASGO — Sangramento pós-menopausa / Câncer de endométrio. Protocolos FEBRASGO (2021)",
    "ACOG Committee Opinion nº 734 — The Role of Transvaginal Ultrasonography in Evaluating the Endometrium of Women With Postmenopausal Bleeding (2018, reafirmado)",
    "Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres (2016)",
    "INCA — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016; DNA-HPV 2024–2025)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
