// Raciocínio clínico: estrutura diagnóstica, probabilidade, vieses e apresentação de caso
registrarFicha({
  id: "raciocinio-clinico",
  especialidade: "referencia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Raciocínio clínico e apresentação de caso",
  resumo: "Roteiro prático para organizar o diagnóstico: síntese do problema, hipóteses ordenadas por probabilidade e gravidade, uso de probabilidade pré-teste e razões de verossimilhança, armadilhas cognitivas comuns e modelos de apresentação de caso (SOAP, SBAR).",
  palavrasChave: "raciocinio clinico raciocinio diagnostico hipotese diagnostica diagnostico diferencial probabilidade pre teste pos teste razao de verossimilhanca likelihood ratio sensibilidade especificidade valor preditivo limiar de teste limiar de tratamento vies cognitivo ancoragem fechamento prematuro sistema 1 sistema 2 time out diagnostico apresentacao de caso soap sbar passagem de plantao erro diagnostico",
  critico: {
    tempo: "Excluir o fatal antes do comum",
    texto: "Para cada queixa, liste a hipótese mais provável E as que não podem passar (fatais/tratáveis). Antes de dar alta ou fechar o diagnóstico, faça um time-out: 'O que mais pode ser? Algo não se encaixa?'"
  },
  alarmes: [
    "Dado que não se encaixa na hipótese (sinal vital alterado, exame inesperado): não ignorar — reabrir o diagnóstico",
    "Paciente que volta com a mesma queixa (2ª ou 3ª consulta): reavaliar do zero, sem herdar o diagnóstico anterior",
    "Sinais vitais anormais na alta (taquicardia, febre, hipoxemia, hipotensão) sem explicação",
    "Diagnóstico 'de exclusão' (ansiedade, virose, gastrite, dor muscular) dado sem excluir as causas graves",
    "Cansaço, sobrecarga, interrupções e fim de plantão: maior risco de erro — usar checklist e pedir segunda opinião"
  ],
  conduta: [
    "1. Coletar dados: queixa e duração, história com cronologia, antecedentes, medicações, exame físico dirigido e sinais vitais completos",
    "2. Síntese do problema em 1 frase com termos semânticos: idade, sexo, fatores de risco, tempo (agudo/crônico), padrão (ex.: 'homem de 60 anos, tabagista, com dor torácica opressiva aguda em repouso e diaforese')",
    "3. Hipóteses: a mais provável, as alternativas plausíveis e as que não podem passar (fatais) — 3 a 5 no total",
    "4. Estimar a probabilidade pré-teste de cada uma (prevalência no seu cenário + achados clínicos ou escore validado: Wells, HEART, Centor, CURB-65)",
    "5. Escolher exames que mudem a conduta: acima do limiar de tratamento, tratar; abaixo do limiar de teste, não testar; entre os dois, testar",
    "6. Reavaliar a probabilidade com o resultado (razões de verossimilhança); um único teste raramente confirma ou exclui sozinho",
    "7. Plano: diagnóstico, tratamento, orientação, rede de segurança (o que fazer se piorar) e quando reavaliar",
    "8. Time-out diagnóstico antes da alta: o que não se encaixa? o que eu não posso perder? o paciente entendeu os sinais de alarme?"
  ],
  tabelas: [
    {
      titulo: "Termos de testes diagnósticos",
      colunas: ["Termo", "O que significa", "Uso prático"],
      linhas: [
        ["Sensibilidade", "Proporção de doentes com teste positivo", "Teste muito sensível, negativo, ajuda a excluir (SnNout)"],
        ["Especificidade", "Proporção de não doentes com teste negativo", "Teste muito específico, positivo, ajuda a confirmar (SpPin)"],
        ["Valor preditivo positivo/negativo", "Probabilidade de doença após o teste", "Depende da prevalência: o mesmo teste muda de valor na UBS e no PS"],
        ["RV+ (razão de verossimilhança positiva)", "Sensibilidade / (1 − especificidade)", "> 10 aumenta muito a probabilidade; 2–5 aumenta pouco"],
        ["RV− (negativa)", "(1 − sensibilidade) / especificidade", "< 0,1 diminui muito; 0,5–1 quase não muda"],
        ["Probabilidade pré-teste", "Chance de doença antes do exame", "Estimar pela prevalência e pela clínica/escores"]
      ],
      nota: "Regra aproximada: RV de 2, 5 e 10 aumentam a probabilidade em cerca de 15, 30 e 45 pontos percentuais; RV de 0,5, 0,2 e 0,1 diminuem cerca de 15, 30 e 45 pontos (válido para probabilidades pré-teste intermediárias)."
    },
    {
      titulo: "Armadilhas cognitivas frequentes",
      colunas: ["Viés", "Como aparece", "Antídoto"],
      linhas: [
        ["Ancoragem", "Fixar na primeira impressão e não ajustar com novos dados", "Rever a hipótese a cada dado novo; 'o que mais pode ser?'"],
        ["Fechamento prematuro", "Parar de pensar ao achar um diagnóstico plausível", "Exigir que o diagnóstico explique todos os achados"],
        ["Disponibilidade", "Pensar no que viu recentemente ou é marcante", "Considerar prevalência real e escores"],
        ["Confirmação", "Buscar só dados que confirmam", "Procurar ativamente o dado que refuta"],
        ["Momento diagnóstico (diagnosis momentum)", "Rótulo herdado da triagem ou de outro colega", "Refazer história e exame próprios"],
        ["Atribuição psicológica", "Atribuir sintomas a ansiedade, uso de álcool ou 'poliqueixa'", "Excluir causa orgânica com o mesmo rigor"],
        ["Satisfação da busca", "Achar uma alteração e parar (ex.: 1 fratura no RX)", "Leitura sistemática completa"],
        ["Viés de omissão / sobrecarga", "Adiar decisão em plantão cheio", "Checklists, priorização, passagem estruturada"]
      ]
    },
    {
      titulo: "Apresentação de caso (curta)",
      colunas: ["Formato", "Estrutura", "Quando usar"],
      linhas: [
        ["Síntese oral", "Identificação + síntese do problema + dados-chave positivos e negativos + hipótese principal e diferenciais + plano", "Discussão com preceptor ou especialista (1–2 min)"],
        ["SOAP", "Subjetivo, Objetivo, Avaliação (problemas e hipóteses), Plano", "Evolução de prontuário na UBS e na enfermaria"],
        ["SBAR", "Situação, Breve histórico, Avaliação, Recomendação", "Pedido de vaga/regulação, chamar especialista, passagem de plantão"],
        ["I-PASS", "Gravidade, resumo do paciente, lista de ações, sinais de alerta e plano de contingência, síntese pelo receptor", "Passagem de plantão estruturada"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "MODELO DE REGISTRO (SOAP)\nS: [queixa principal e duração; história com cronologia; medicações; antecedentes relevantes].\nO: [sinais vitais completos]; [exame físico dirigido]; [exames trazidos].\nA: Síntese: [idade, sexo, contexto, problema com tempo e padrão].\n   Hipótese principal: [ ] — a favor: [ ]; contra: [ ].\n   Diferenciais: [ ].\n   Não pode passar (excluído por): [ ].\nP: Exames: [ ]. Tratamento: [ ]. Orientações e sinais de alarme explicados: [ ]. Reavaliação em: [ ].\n\nMODELO SBAR (pedido de avaliação/regulação)\nS — Situação: [nome, idade, onde está, problema agora].\nB — Breve histórico: [comorbidades, motivo da vinda, o que já foi feito].\nA — Avaliação: [sinais vitais, achados, hipótese, gravidade].\nR — Recomendação/pedido: [o que preciso: avaliação, vaga, conduta, em quanto tempo]."
  },
  orientacoesRetorno: [
    "Explicar ao paciente o diagnóstico provável e o que ainda é incerto",
    "Dar orientações claras de rede de segurança: quais sinais devem trazer o paciente de volta e em quanto tempo",
    "Combinar quando reavaliar se não houver melhora esperada (ex.: 48–72 h)",
    "Pedir que repita com as próprias palavras o que vai fazer (teach-back)"
  ],
  fontes: [
    "National Academies of Sciences, Engineering, and Medicine — Improving Diagnosis in Health Care (2015)",
    "OMS — Diagnostic errors: Technical Series on Safer Primary Care (2016)",
    "Croskerry P — The importance of cognitive errors in diagnosis and strategies to minimize them (Acad Med, 2003)",
    "McGee S — Evidence-Based Physical Diagnosis, 5ª ed. (2021): razões de verossimilhança",
    "Starmer AJ et al. — I-PASS handoff program (N Engl J Med, 2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
