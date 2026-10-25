// Acalasia idiopática e megaesôfago chagásico
registrarFicha({
  id: "acalasia-megaesofago",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Acalasia e megaesôfago chagásico",
  resumo: "Distúrbio motor do esôfago com relaxamento deficiente do esfíncter inferior e perda da peristalse. Idiopática ou secundária à doença de Chagas (megaesôfago). Disfagia para sólidos e líquidos, regurgitação e perda de peso.",
  palavrasChave: "acalasia megaesofago mal do engasgo chagas disfagia regurgitacao manometria esofagograma rezende mascarenhas eckardt heller poem dilatacao pneumatica toxina botulinica nifedipina dinitrato isossorbida pseudoacalasia",
  critico: {
    tempo: "EDA antes de rotular acalasia",
    texto: "Toda disfagia exige endoscopia digestiva alta para excluir câncer de esôfago ou da cárdia (pseudoacalasia), sobretudo em maiores de 55 anos com perda de peso rápida e história curta."
  },
  alarmes: [
    "Perda de peso rápida, disfagia de início recente e progressiva em idoso (pensar em neoplasia — pseudoacalasia)",
    "Tosse noturna, pneumonias de repetição, regurgitação ao deitar (aspiração)",
    "Desnutrição grave, desidratação, incapacidade de ingerir líquidos ou saliva",
    "Hematêmese ou dor torácica intensa após dilatação (perfuração — PS imediato)",
    "Megaesôfago de longa data com piora da disfagia ou sangramento (risco aumentado de carcinoma epidermoide)"
  ],
  conduta: [
    "Suspeitar: disfagia para sólidos e líquidos desde o início, regurgitação de alimento não digerido, perda de peso, dor retroesternal; pirose que não melhora com IBP",
    "Pedir endoscopia digestiva alta (excluir neoplasia, esofagite, estenose péptica) e esofagograma baritado",
    "Sorologia para Chagas (2 métodos) em todo paciente com acalasia/megaesôfago que nasceu ou morou em área endêmica, recebeu transfusão antes de 1990 ou tem mãe com Chagas — ver ficha Doença de Chagas crônica (chagas-cronica)",
    "Se Chagas positivo: ECG e ecocardiograma (forma cardíaca associada), pesquisar megacólon, notificar",
    "Classificar o megaesôfago pelo esofagograma (Rezende ou Mascarenhas — tabelas) e encaminhar à gastroenterologia/cirurgia do aparelho digestivo",
    "Manometria esofágica (alta resolução) confirma o diagnóstico e define o subtipo (Chicago 4.0); em megaesôfago avançado pode ser dispensável",
    "Enquanto aguarda: dieta pastosa/líquida, comer devagar, em posição sentada, beber água após as refeições, não deitar por 2–3 h após comer, cabeceira elevada",
    "Ponte sintomática (efeito modesto, alto índice de efeitos adversos): nifedipina ou dinitrato de isossorbida sublingual antes das refeições, só em quem aguarda ou não pode fazer procedimento",
    "Tratamento definitivo (especialista): dilatação pneumática, miotomia laparoscópica de Heller com fundoplicatura parcial ou miotomia endoscópica (POEM). Toxina botulínica para alto risco cirúrgico. Megaesôfago grau IV: esofagectomia ou cirurgia de ressecção/derivação em centro de referência",
    "Benznidazol não reverte a forma digestiva; a indicação de tratamento etiológico segue a ficha chagas-cronica",
    "Seguimento: endoscopia periódica em acalasia de longa data/megaesôfago avançado (risco de carcinoma epidermoide), conforme especialista"
  ],
  exames: [
    "Endoscopia digestiva alta: excluir neoplasia, esofagite por estase/cândida; resistência na cárdia que cede à pressão sugere acalasia",
    "Esofagograma baritado (seriografia de esôfago): dilatação, afilamento distal em 'bico de pássaro', retenção de contraste; base para Rezende/Mascarenhas",
    "Manometria esofágica de alta resolução: IRP elevada + ausência de peristalse = acalasia. Tipo I (clássica), tipo II (pressurização panesofágica, melhor resposta ao tratamento), tipo III (espástica, melhor resposta à POEM)",
    "Sorologia para doença de Chagas (ELISA + 2º método); ECG de 12 derivações se positiva",
    "Hemograma, albumina, eletrólitos (estado nutricional)",
    "Pseudoacalasia suspeita apesar de EDA normal: TC de tórax e abdome superior ou ecoendoscopia"
  ],
  diferenciais: [
    "Câncer de esôfago ou da cárdia (pseudoacalasia)",
    "Estenose péptica, esofagite eosinofílica",
    "DRGE (falsa 'pirose' por fermentação do alimento retido)",
    "Espasmo esofágico distal, esôfago hipercontrátil, obstrução ao fluxo da junção esofagogástrica",
    "Esclerodermia (aperistalse com esfíncter hipotônico e refluxo intenso)"
  ],
  tratamento: [
    { droga: "Nifedipina (ponte sintomática)", linha: "adj", dose: "10 mg", via: "Sublingual", intervalo: "30–45 min antes das principais refeições", duracao: "Até o tratamento definitivo", monitorizacao: "PA, cefaleia, edema, tontura", contraindicacoes: "Hipotensão, estenose aórtica grave, IAM recente", ajustes: "Idoso: risco de hipotensão e queda; benefício pequeno e transitório (ACG 2020)" },
    { droga: "Dinitrato de isossorbida (ponte sintomática)", linha: "alt", dose: "5 mg", via: "Sublingual", intervalo: "10–15 min antes das refeições", duracao: "Até o tratamento definitivo", monitorizacao: "Cefaleia, hipotensão", contraindicacoes: "Uso de sildenafila/tadalafila, hipotensão", ajustes: "Cefaleia frequente limita o uso" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES\n1. Endoscopia digestiva alta — disfagia para sólidos e líquidos; excluir neoplasia/pseudoacalasia.\n2. Esofagograma (seriografia de esôfago, estômago e duodeno) — investigação de acalasia/megaesôfago.\n3. Sorologia para doença de Chagas (ELISA + imunofluorescência ou quimioluminescência).\n4. Hemograma, albumina, sódio, potássio, creatinina.\n5. Encaminhamento à gastroenterologia/cirurgia do aparelho digestivo: acalasia/megaesôfago grau ___ (Rezende/Mascarenhas), para manometria e tratamento definitivo.\n\nUSO SUBLINGUAL (ponte, se necessário)\n6. Nifedipina 10 mg ------------------------------ 1 caixa\n   Colocar 1 cápsula (ou comprimido) embaixo da língua 30 a 45 minutos antes do almoço e do jantar. Suspender se tontura ou pressão baixa."
  },
  orientacoesRetorno: [
    "Comer devagar, sentado, alimentos pastosos ou líquidos, e beber água depois das refeições",
    "Não deitar por 2 a 3 horas depois de comer; elevar a cabeceira da cama",
    "Voltar imediatamente se não conseguir engolir nem água ou saliva, se tiver febre com tosse e falta de ar, vômito com sangue ou dor forte no peito (sobretudo após dilatação)",
    "Fazer os exames de Chagas e do coração pedidos, mesmo sem sintomas cardíacos",
    "Retornar com a endoscopia e o esofagograma; manter acompanhamento com o especialista após o tratamento"
  ],
  encaminhar: [
    "Gastroenterologia/cirurgia do aparelho digestivo (eletivo, com prioridade se perda de peso importante): todo caso confirmado ou suspeito",
    "PS: desidratação, desnutrição grave, pneumonia aspirativa, suspeita de perfuração",
    "Cardiologia: Chagas com ECG ou eco alterado",
    "Nutrição: perda de peso > 10% ou albumina baixa"
  ],
  tabelas: [
    {
      titulo: "Classificação radiológica do megaesôfago — Rezende",
      colunas: ["Grupo", "Achados no esofagograma"],
      linhas: [
        ["I", "Diâmetro normal; trânsito lento; pequena retenção de contraste"],
        ["II", "Pequeno a moderado aumento do calibre; retenção; ondas terciárias"],
        ["III", "Grande aumento do calibre; hipotonia; atividade motora reduzida; grande retenção"],
        ["IV", "Dolicomegaesôfago: grande retenção, atônico, alongado, dobra-se sobre a cúpula diafragmática"]
      ]
    },
    {
      titulo: "Classificação do megaesôfago — Mascarenhas (diâmetro transverso)",
      colunas: ["Grau", "Diâmetro"],
      linhas: [
        ["I", "Até 4 cm"],
        ["II", "4 a 7 cm"],
        ["III", "7 a 10 cm"],
        ["IV", "Maior que 10 cm ou dolicomegaesôfago"]
      ],
      nota: "Graus I–II: dilatação pneumática ou miotomia. Graus III: miotomia (Heller/POEM) ainda é opção. Grau IV: considerar esofagectomia em centro especializado."
    },
    {
      titulo: "Escore de Eckardt (sintomas e resposta ao tratamento)",
      colunas: ["Pontos", "Perda de peso", "Disfagia", "Dor retroesternal", "Regurgitação"],
      linhas: [
        ["0", "Nenhuma", "Nenhuma", "Nenhuma", "Nenhuma"],
        ["1", "< 5 kg", "Ocasional", "Ocasional", "Ocasional"],
        ["2", "5–10 kg", "Diária", "Diária", "Diária"],
        ["3", "> 10 kg", "Toda refeição", "Toda refeição", "Toda refeição"]
      ],
      nota: "Total 0–12. Escore > 3 após tratamento sugere falha."
    }
  ],
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas da Doença de Chagas (2018)",
    "II Consenso Brasileiro em Doença de Chagas — Epidemiol. Serv. Saúde (2016)",
    "ACG Clinical Guidelines: Diagnosis and Management of Achalasia (Vaezi et al., 2020)",
    "ESNM/ESGE — European guideline on achalasia (2020)",
    "Chicago Classification of esophageal motility disorders, v4.0 (2021)",
    "Rezende JM et al. — Classificação radiológica do megaesôfago (1960); Mascarenhas — classificação por diâmetro"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});
