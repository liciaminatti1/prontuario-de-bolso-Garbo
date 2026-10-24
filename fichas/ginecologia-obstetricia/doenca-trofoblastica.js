// Doença trofoblástica gestacional (mola hidatiforme)
registrarFicha({
  id: "doenca-trofoblastica",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Doença trofoblástica gestacional: mola hidatiforme",
  resumo: "Proliferação anormal do trofoblasto. Mola completa ou parcial: sangramento no 1º trimestre, útero maior que a idade gestacional e beta-hCG muito alto. Tratamento: esvaziamento por vácuo-aspiração e seguimento obrigatório com beta-hCG em centro de referência para detectar neoplasia trofoblástica.",
  palavrasChave: "doenca trofoblastica gestacional mola hidatiforme mola completa mola parcial neoplasia trofoblastica coriocarcinoma beta hcg seguimento vacuo aspiracao amiu cistos tecaluteinicos hipertireoidismo hiperemese",
  critico: {
    tempo: "Esvaziar por aspiração; hCG",
    texto: "Mola suspeita: estabilizar, dosar beta-hCG e esvaziar por vácuo-aspiração em hospital. Não usar misoprostol ou ocitocina para induzir a expulsão antes do esvaziamento. Seguimento com beta-hCG até a alta do centro de referência."
  },
  alarmes: [
    "Sangramento vaginal intenso ou instabilidade hemodinâmica",
    "Pré-eclâmpsia antes de 20 semanas",
    "Hipertireoidismo clínico (taquicardia, tremor) ou tempestade tireoidiana",
    "Insuficiência respiratória durante ou após o esvaziamento (embolização trofoblástica, sobrecarga)",
    "Beta-hCG em platô ou subindo no seguimento, sangramento persistente, metástase (tosse, hemoptise, sintomas neurológicos)"
  ],
  conduta: [
    "Suspeitar: sangramento, útero maior que a IG, hiperêmese, beta-hCG muito acima do esperado, USG com imagem em 'flocos de neve'/vesículas, cistos tecaluteínicos",
    "Exames antes do esvaziamento: beta-hCG quantitativo, hemograma, tipagem ABO/Rh, coagulograma, TSH e T4 livre, função renal e hepática, RX de tórax",
    "Compensar PA, tireoide e anemia; reservar sangue",
    "Esvaziamento por vácuo-aspiração (AMIU ou elétrica) em hospital, mesmo em úteros maiores; ocitocina IV só após iniciado o esvaziamento",
    "Anatomopatológico de todo o material (confirma completa x parcial)",
    "Rh negativo não sensibilizada: imunoglobulina anti-D",
    "Iniciar contracepção hormonal logo após o esvaziamento (ACO, injetável ou implante); DIU só após beta-hCG negativo",
    "Encaminhar ao centro de referência de doença trofoblástica e fazer busca ativa para o seguimento",
    "Beta-hCG semanal até 3 resultados negativos consecutivos; depois mensal pelo tempo definido pelo centro (ver tabela)"
  ],
  exames: [
    "Beta-hCG quantitativo sérico (mesmo laboratório em todo o seguimento)",
    "USG pélvica transvaginal com Doppler",
    "Hemograma, tipagem ABO/Rh, Coombs indireto, coagulograma",
    "TSH e T4 livre; ureia, creatinina, TGO, TGP; urina tipo 1 (proteinúria)",
    "RX de tórax antes do esvaziamento (base para comparação)"
  ],
  diferenciais: [
    "Abortamento incompleto ou retido com degeneração hidrópica",
    "Gravidez ectópica",
    "Gestação gemelar com mola (feto coexistente: centro de referência)",
    "Neoplasia trofoblástica após qualquer gestação (sangramento persistente após parto ou aborto com beta-hCG positivo)"
  ],
  tratamento: [
    {
      droga: "Vácuo-aspiração uterina",
      linha: "l1",
      dose: "AMIU ou aspiração elétrica, cânula compatível com o tamanho uterino",
      via: "Intrauterina",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Sangramento, sinais vitais, SpO2",
      contraindicacoes: "—",
      ajustes: "Curetagem cortante isolada aumenta risco de perfuração. Histerectomia com mola in situ é opção para quem tem prole completa (não dispensa seguimento)"
    },
    {
      droga: "Ocitocina",
      linha: "adj",
      dose: "20 UI em 500 mL de SF 0,9%",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Durante e após o esvaziamento",
      monitorizacao: "Tônus e sangramento",
      contraindicacoes: "Antes de dilatar o colo e iniciar a aspiração (risco de embolização trofoblástica)",
      ajustes: "—"
    },
    {
      droga: "Anticoncepcional oral combinado (levonorgestrel 0,15 mg + etinilestradiol 0,03 mg)",
      linha: "l1",
      dose: "1 comprimido ao dia",
      via: "VO",
      intervalo: "Diário",
      duracao: "Durante todo o seguimento",
      monitorizacao: "Adesão; gravidez atrapalha a interpretação do beta-hCG",
      contraindicacoes: "Critérios de elegibilidade da OMS (ver anticoncepcao)",
      ajustes: "Alternativas: AMP 150 mg IM trimestral, implante, preservativo. DIU contraindicado enquanto beta-hCG positivo"
    }
  ],
  prescricao: {
    hospitalar: "MOLA HIDATIFORME — ESVAZIAMENTO\n1. Dieta zero.\n2. 2 acessos venosos; reservar 2 unidades de concentrado de hemácias.\n3. Exames: beta-hCG quantitativo, hemograma, tipagem ABO/Rh, Coombs indireto, coagulograma, TSH, T4 livre, ureia, creatinina, TGO, TGP, urina tipo 1, RX de tórax.\n4. Se hipertireoidismo: propranolol 40 mg VO de 8/8 h (se sem contraindicação) antes do procedimento; discutir com clínica.\n5. Vácuo-aspiração uterina sob anestesia. Material para anatomopatológico.\n6. Após iniciar a aspiração: ocitocina 20 UI + SF 0,9% 500 mL IV contínuo.\n7. Se Rh negativo e Coombs indireto negativo: imunoglobulina anti-D 1 ampola IM.\n8. Sinais vitais, SpO2 e sangramento de 30/30 min por 2 h.",
    ambulatorial: "ALTA APÓS ESVAZIAMENTO\nUSO ORAL\n1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, começando hoje; pausa de 7 dias entre as cartelas. Manter durante todo o seguimento.\n2. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n\nEXAMES\n3. Beta-hCG quantitativo semanal (mesmo laboratório). Datas: ___ / ___ / ___.\n4. Retorno no centro de referência de doença trofoblástica em ___/___."
  },
  orientacoesRetorno: [
    "A mola é uma gravidez que não se desenvolve normalmente; na maioria das vezes cura só com o esvaziamento",
    "O exame de beta-hCG semanal é obrigatório: é ele que mostra se a doença foi embora ou se precisa de tratamento",
    "Não engravidar durante o seguimento; usar o anticoncepcional todos os dias",
    "Voltar imediatamente se: sangramento forte, falta de ar, tosse com sangue, dor de cabeça forte ou alteração neurológica",
    "Na próxima gravidez, fazer USG no início e beta-hCG 6–8 semanas após o parto"
  ],
  encaminhar: [
    "Centro de referência em doença trofoblástica gestacional: toda mola, para seguimento",
    "Oncologia/centro de referência com urgência: critérios de neoplasia trofoblástica (tabela)"
  ],
  tabelas: [
    {
      titulo: "Seguimento com beta-hCG após mola",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Após o esvaziamento", "Beta-hCG semanal até 3 dosagens negativas consecutivas"],
        ["Mola completa", "Após normalizar: dosagem mensal (FIGO 2021: por 3 meses; muitos centros brasileiros mantêm por 6 meses)"],
        ["Mola parcial", "Após normalizar: 1 dosagem confirmatória negativa (FIGO 2021); seguir a rotina do centro"],
        ["Neoplasia trofoblástica (FIGO)", "Platô de 4 valores em 3 semanas (dias 1, 7, 14, 21); aumento ≥ 10% em 3 valores em 2 semanas (dias 1, 7, 14); diagnóstico histológico de coriocarcinoma"]
      ],
      nota: "Critério antigo de beta-hCG ainda positivo 6 meses após o esvaziamento foi retirado pela FIGO 2018; muitos centros ainda o usam como alerta. Quimioterapia é feita no centro de referência."
    }
  ],
  fontes: [
    "FEBRASGO — Doença trofoblástica gestacional. Protocolos FEBRASGO (2021)",
    "FIGO Cancer Report — Update on the diagnosis and management of gestational trophoblastic disease (2021)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
