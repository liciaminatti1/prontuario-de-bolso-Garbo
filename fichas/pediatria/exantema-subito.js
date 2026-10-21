// Exantema súbito (roséola)
registrarFicha({
  id: "exantema-subito",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Exantema súbito (roséola infantum)",
  resumo: "Infecção pelo herpesvírus humano 6 (ou 7) em lactentes de 6 meses a 2 anos: febre alta por 3 a 5 dias com criança em bom estado; quando a febre some, surge exantema róseo no tronco. Tratamento de suporte.",
  palavrasChave: "exantema subito roseola sexta doenca hhv-6 hhv6 herpesvirus 6 febre lactente manchas convulsao febril",
  alarmes: [
    "Criança prostrada, gemente, com má perfusão ou sonolência entre os picos de febre",
    "Petéquias ou púrpura",
    "Convulsão prolongada (> 5 min), focal, repetida ou com rebaixamento persistente",
    "Sinais meníngeos, fontanela abaulada",
    "Lactente < 3 meses com febre (seguir ficha Febre sem foco no lactente)",
    "Febre > 5 dias ou exantema que começa com a febre ainda presente (pensar em outro diagnóstico)"
  ],
  conduta: [
    "Diagnóstico clínico, em geral retrospectivo: febre alta 3–5 dias + exantema quando a febre cessa",
    "Na fase febril, examinar bem: sem foco, criança ativa entre os picos. Pode haver nódulos de Nagayama (pápulas no palato mole e úvula), edema palpebral e adenomegalia occipital",
    "Lactente com febre sem foco e bom estado: considerar urina tipo 1 e urocultura (ITU é a infecção bacteriana mais comum nessa idade); < 3 meses: seguir a ficha Febre sem foco no lactente",
    "Antitérmico para conforto; manter hidratação",
    "Explicar que o exantema não coça, dura 1–3 dias, não precisa de tratamento e marca o fim da doença",
    "Convulsão febril simples é comum nesta doença: orientar a família (ver ficha Convulsão febril)",
    "Não há indicação de antiviral em criança imunocompetente; não há notificação"
  ],
  exames: [
    "Nenhum exame de rotina quando o quadro é típico",
    "Febre sem foco em lactente: urina tipo 1 e urocultura (cateterismo ou punção suprapúbica) para afastar ITU",
    "Hemograma pode mostrar leucopenia com linfocitose — não é necessário para o diagnóstico",
    "Exantema com febre ainda presente, tosse, coriza e conjuntivite: tratar como suspeita de sarampo (notificar e coletar sorologia)"
  ],
  diferenciais: [
    "Sarampo (exantema com febre, tosse, coriza, conjuntivite) e rubéola (adenomegalia retroauricular)",
    "Infecção urinária (febre sem foco no lactente)",
    "Farmacodermia por antibiótico dado na fase febril (amoxicilina) — erro comum",
    "Enteroviroses, dengue",
    "Meningite e meningococcemia (criança com mau estado geral)"
  ],
  prescricao: {
    ambulatorial: "EXANTEMA SÚBITO — LACTENTE (peso: ___ kg)\nUSO ORAL\n1. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (10 mg/kg; máximo 35 gotas) de 6 em 6 horas se febre ou desconforto.\n2. (Alternativa, a partir de 3 meses e 5 kg) Dipirona 500 mg/mL gotas ------ 1 frasco\n   Dar 10–15 mg/kg por dose (aprox. 1 gota a cada 2 kg, máximo 40 gotas) de 6 em 6 horas se febre.\n3. Manter aleitamento materno e oferecer água com frequência.\n\nNão há necessidade de antibiótico nem de pomada para as manchas."
  },
  orientacoesRetorno: [
    "A febre costuma durar 3 a 5 dias; quando ela passa, aparecem manchas rosadas no corpo que somem em 1 a 3 dias sem tratamento",
    "O antitérmico é para conforto; não acorde a criança só para dar remédio",
    "Se houver convulsão: deitar a criança de lado, não colocar nada na boca, cronometrar e procurar atendimento",
    "Voltar imediatamente se: convulsão, criança muito sonolenta ou difícil de acordar, gemência, manchas roxas que não somem ao apertar, moleira estufada, vômitos repetidos, pouca urina, dificuldade para respirar",
    "Retornar se a febre passar de 5 dias ou se as manchas surgirem junto com tosse, coriza e olhos vermelhos",
    "A criança pode voltar à creche 24 h após o fim da febre; as manchas não impedem"
  ],
  encaminhar: [
    "PS: convulsão complexa, suspeita de meningite, criança com mau estado geral, lactente < 3 meses febril",
    "Imunodeprimido (transplantado, quimioterapia) com febre: contato com o especialista no mesmo dia"
  ],
  fontes: [
    "American Academy of Pediatrics — Red Book 2024–2027: Human Herpesvirus 6 (including roseola) and 7",
    "American Academy of Pediatrics — Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old (2021)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
