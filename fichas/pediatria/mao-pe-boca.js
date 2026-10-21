// Síndrome mão-pé-boca
registrarFicha({
  id: "mao-pe-boca",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Síndrome mão-pé-boca (doença mão-pé-boca)",
  resumo: "Infecção por enterovírus (Coxsackie A16, A6, enterovírus 71) comum em menores de 5 anos: febre baixa, úlceras dolorosas na boca e vesículas ou pápulas em mãos, pés e região glútea. Autolimitada em 7–10 dias. O risco principal é a desidratação por dor ao engolir.",
  palavrasChave: "mao pe boca coxsackie enterovirus ev71 aftas vesiculas maos pes gluteo creche herpangina onicomadese desidratacao surto",
  alarmes: [
    "Recusa de líquidos, pouca urina, mucosas secas, choro sem lágrimas (desidratação)",
    "Febre ≥ 39 °C ou por mais de 3 dias",
    "Sonolência, irritabilidade intensa, vômitos repetidos, mioclonias (abalos ao dormir), ataxia, tremores, fraqueza de membros (envolvimento neurológico por EV71)",
    "Taquicardia, taquipneia, má perfusão, hipertensão (complicação cardiopulmonar)",
    "Lactente < 3 meses ou imunodeprimido",
    "Lesões vesiculares extensas sobre área de dermatite atópica (eczema coxsackium) com dor e febre alta (pensar em eczema herpético — aciclovir)"
  ],
  conduta: [
    "Diagnóstico clínico: úlceras orais (língua, mucosa jugal, palato) + vesículas ovais ou pápulas em palmas, plantas, glúteos; às vezes joelhos e cotovelos",
    "Avaliar hidratação em toda consulta",
    "Analgesia regular antes das refeições (paracetamol ou dipirona; ibuprofeno se hidratado e sem suspeita de dengue/varicela)",
    "Líquidos frios e alimentos pastosos, frios, sem acidez nem sal",
    "Não usar anestésicos tópicos com lidocaína ou benzocaína em menores de 2 anos (risco de toxicidade e de aspiração)",
    "Não há antiviral nem antibiótico indicado",
    "Afastar da creche/escola enquanto houver febre e lesões com bolhas abertas; o vírus continua nas fezes por semanas — reforçar lavagem de mãos e troca de fraldas",
    "Avisar que as unhas podem descolar (onicomadese) 3–8 semanas depois e voltam a crescer normalmente; descamação das mãos e pés também é esperada",
    "Caso isolado não é de notificação compulsória; surtos (2 ou mais casos ligados em creche/escola) devem ser comunicados à vigilância municipal"
  ],
  exames: [
    "Não são necessários no quadro típico",
    "Desidratação moderada/grave: eletrólitos e função renal no PS",
    "Suspeita de complicação neurológica: avaliação no PS (líquor, PCR para enterovírus)"
  ],
  diferenciais: [
    "Gengivoestomatite herpética (gengivas inchadas e sangrantes, sem lesões em mãos e pés)",
    "Herpangina (só lesões no palato posterior e pilares, também por Coxsackie)",
    "Varicela (vesículas em vários estágios no tronco, couro cabeludo)",
    "Estomatite aftosa, eritema multiforme, sarampo",
    "Eczema herpético em criança com dermatite atópica"
  ],
  prescricao: {
    ambulatorial: "MÃO-PÉ-BOCA — CRIANÇA (peso: ___ kg)\nUSO ORAL\n1. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (10 mg/kg; máximo 35 gotas) de 6 em 6 horas, de preferência 30 minutos antes das refeições, se febre ou dor.\n2. (Alternativa a partir de 6 meses, se bem hidratada) Ibuprofeno 50 mg/mL gotas ---- 1 frasco\n   Dar 5–10 mg/kg por dose = 0,1 a 0,2 mL por kg (máximo 4 mL = 200 mg por dose) de 8 em 8 horas se dor. Medir em seringa dosadora.\n   Ou: Dipirona 500 mg/mL gotas — 10–15 mg/kg/dose (aprox. 1 gota a cada 2 kg, máximo 40 gotas) de 6 em 6 horas (não usar em menores de 3 meses).\n3. Soro de reidratação oral --------------------------- 10 envelopes\n   Oferecer em pequenos goles frios, várias vezes ao dia.\n\nALIMENTAÇÃO: leite, iogurte, sorvete de massa, gelatina, purês e sopas mornas ou frias; evitar alimentos ácidos, salgados e crocantes."
  },
  orientacoesRetorno: [
    "As feridas na boca doem por 3 a 5 dias e a doença passa em 7 a 10 dias",
    "O mais importante é a criança beber líquido: ofereça pouco de cada vez, frio, toda hora",
    "Lavar bem as mãos depois de trocar fraldas; o vírus sai nas fezes por várias semanas",
    "A criança pode voltar à creche quando estiver sem febre e as bolhas tiverem secado",
    "As unhas podem cair algumas semanas depois; elas crescem de novo",
    "Voltar imediatamente se: não beber líquidos ou urinar pouco (menos de 4 fraldas molhadas ao dia), muito sonolenta ou irritada, vômitos repetidos, tremores, sustos ou abalos ao dormir, andar cambaleante, fraqueza em braço ou perna, respiração rápida, febre alta por mais de 3 dias"
  ],
  encaminhar: [
    "PS: desidratação moderada ou grave sem aceitação oral, sinais neurológicos ou cardiorrespiratórios",
    "Vigilância epidemiológica: surto em creche/escola"
  ],
  fontes: [
    "Ministério da Saúde — Doença mão-pé-boca (Saúde de A a Z, gov.br, página vigente em 2026)",
    "American Academy of Pediatrics — Red Book 2024–2027: Enterovirus (Nonpoliovirus) Infections",
    "OMS — A Guide to Clinical Management and Public Health Response for Hand, Foot and Mouth Disease (WHO WPRO, 2011)",
    "FDA — Drug Safety Communication: oral benzocaine and viscous lidocaine in infants and children (2014/2018)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
