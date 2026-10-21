// Intoxicação alimentar leve
registrarFicha({
  id: "intoxicacao-alimentar",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Intoxicação alimentar leve",
  resumo: "Náuseas, vômitos, cólica e/ou diarreia que começam horas após uma refeição suspeita, muitas vezes em mais de uma pessoa. Geralmente por toxina pré-formada (S. aureus, B. cereus), com melhora em 24–48 h. Tratamento: hidratação e sintomáticos. Diarreia prolongada ou com sangue: ver ficha diarreia-adulto.",
  palavrasChave: "intoxicacao alimentar dta doenca transmitida por alimento comida estragada vomito diarreia surto staphylococcus bacillus cereus botulismo notificacao soro reidratacao",
  critico: {
    tempo: "Fraqueza ou visão dupla: botulismo",
    texto: "Visão dupla, pálpebras caídas, dificuldade para engolir ou falar e fraqueza descendente após conserva caseira, embutido ou palmito = suspeita de botulismo: emergência e notificação imediata."
  },
  alarmes: [
    "Visão dupla, ptose, disfagia, disartria, fraqueza descendente, insuficiência respiratória (botulismo)",
    "Formigamento na boca, inversão da sensação de quente/frio, fraqueza após peixe ou frutos do mar (toxinas marinhas)",
    "Salivação, sudorese, miose, bradicardia, broncorreia (organofosforado/\"chumbinho\" em alimento)",
    "Desidratação: tontura ao levantar, urina escassa, confusão",
    "Sangue nas fezes, febre alta, dor abdominal intensa",
    "Gestante (Listeria: febre, mialgia após queijo fresco ou embutido), idoso, imunossuprimido",
    "Cogumelo silvestre ingerido (sintomas tardios > 6 h sugerem toxicidade hepática grave)"
  ],
  conduta: [
    "Confirmar a história: o que comeu, onde, quantas horas antes, outras pessoas com os mesmos sintomas",
    "Avaliar hidratação (Planos A/B/C, como na ficha diarreia-adulto)",
    "Hidratação oral com SRO em pequenos volumes frequentes; antiemético se vômitos atrapalham a hidratação",
    "Sem antibiótico na intoxicação alimentar leve",
    "Pesquisar sinais neurológicos (botulismo, toxina marinha, organofosforado) e encaminhar ao PS se presentes",
    "Notificar surto: 2 ou mais pessoas com sintomas semelhantes após ingerir o mesmo alimento ou água (notificação imediata à vigilância epidemiológica municipal)",
    "Orientar guardar sobras do alimento suspeito refrigeradas para a vigilância sanitária"
  ],
  exames: [
    "Nenhum exame na forma leve",
    "Desidratação moderada/grave ou comorbidade: ureia, creatinina, sódio, potássio, glicemia",
    "Surto: coleta de fezes (coprocultura) e vômito conforme orientação da vigilância; amostras do alimento pela vigilância sanitária",
    "Suspeita de botulismo: não esperar exame; soro e amostras pela vigilância (CIEVS)"
  ],
  diferenciais: [
    "Gastroenterite viral (norovírus): surtos, vômitos, 1–3 dias",
    "Diarreia bacteriana invasiva (Salmonella, Shigella, Campylobacter): febre, sangue, início após 12–72 h",
    "Apendicite, colecistite, pancreatite (dor localizada que piora)",
    "Cetoacidose diabética, IAM inferior, gestação (vômitos sem diarreia)",
    "Intoxicação exógena (chumbinho, cogumelo, metais)"
  ],
  tabelas: [
    {
      titulo: "Tempo de início e agente provável",
      colunas: ["Início após a refeição", "Quadro predominante", "Agentes prováveis"],
      linhas: [
        ["1–6 h", "Vômitos intensos, cólica, sem febre", "Toxina de S. aureus, B. cereus (arroz reaquecido)"],
        ["8–16 h", "Diarreia aquosa e cólica", "C. perfringens, B. cereus (forma diarreica)"],
        ["12–72 h", "Diarreia com febre, às vezes sangue", "Salmonella, Shigella, Campylobacter, E. coli"],
        ["12–72 h (até dias)", "Sintomas neurológicos descendentes", "Botulismo (emergência)"]
      ],
      nota: "Toxinas pré-formadas não respondem a antibiótico."
    }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Sais para reidratação oral (envelope) ----------------------- 4 envelopes\n   Dissolver 1 envelope em 1 litro de água filtrada ou fervida (fria). Beber pequenos goles a cada 5–10 minutos no início; depois 1 a 2 copos após cada vômito ou evacuação líquida.\n2. Ondansetrona 4 mg (comprimido orodispersível) ----------------- 6 comprimidos\n   Dissolver 1 comprimido na língua de 8 em 8 horas se náusea ou vômito (não usar na gestação).\n3. Escopolamina (butilbrometo) 10 mg ----------------------------- 10 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas se cólica, por até 2 dias.\n4. Dipirona 500 mg ----------------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre."
  },
  orientacoesRetorno: [
    "Os sintomas costumam melhorar em 24–48 horas",
    "Beba o soro aos poucos; volte a comer em pequenas porções quando o vômito melhorar (arroz, batata, banana, torradas, carne magra)",
    "Não precisa de antibiótico",
    "Descarte o alimento suspeito (ou guarde na geladeira se a vigilância pedir) e avise se outras pessoas também passaram mal",
    "Procure o PS imediatamente se tiver visão dupla, pálpebras caídas, dificuldade para engolir, falar ou respirar, fraqueza nos braços ou pernas",
    "Volte se: vômitos que não deixam beber, pouca urina, tontura ao levantar, sangue nas fezes, febre alta ou dor forte, ou se não melhorar em 48 horas"
  ],
  encaminhar: [
    "PS imediato: sintomas neurológicos (botulismo, toxina marinha, organofosforado), desidratação grave, dor abdominal intensa",
    "Vigilância epidemiológica municipal: todo surto de DTA e todo caso suspeito de botulismo (notificação imediata)"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed. revisada (2024): doenças transmitidas por alimentos e botulismo",
    "Ministério da Saúde — Manual Integrado de Vigilância, Prevenção e Controle de Doenças Transmitidas por Alimentos (2010)",
    "Ministério da Saúde — Manejo do paciente com diarreia (cartaz, 2023)",
    "Ministério da Saúde — Lista Nacional de Notificação Compulsória: Portaria de Consolidação GM/MS nº 4/2017, Anexo V, alterada pela Portaria GM/MS nº 11.211/2026"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
