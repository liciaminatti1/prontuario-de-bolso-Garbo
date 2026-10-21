// Candidíase oral (monilíase, sapinho)
registrarFicha({
  id: "candidiase-oral",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Candidíase oral (monilíase/sapinho)",
  resumo: "Placas brancas na mucosa oral (língua, bochechas, palato) que não saem com facilidade e deixam base avermelhada ao serem raspadas. Comum em lactentes; em criança maior sem fator de risco, investigar imunossupressão.",
  palavrasChave: "sapinho monilíase candidiase oral oroflaringe lactente nistatina miconazol gel oral fluconazol mamilo amamentação candida",
  alarmes: [
    "Recusa alimentar, baixa ingesta ou sinais de desidratação",
    "Odinofagia, disfagia ou baba excessiva (pensar em esofagite por Candida)",
    "Criança > 1 ano sem uso de antibiótico, corticoide inalatório ou outro fator de risco (investigar HIV e imunodeficiência)",
    "Recorrência frequente ou falha de 2 tratamentos corretos",
    "Recém-nascido prematuro ou de baixo peso com lesões extensas ou febre (risco de candidíase invasiva)"
  ],
  conduta: [
    "Diagnóstico clínico: placas brancas aderidas que, ao raspar com espátula, deixam mucosa vermelha (leite sai com facilidade)",
    "Leve a moderada: tratamento tópico (nistatina suspensão ou miconazol gel oral)",
    "Manter o tratamento até 48 h a 1 semana após o desaparecimento das lesões (conforme a droga)",
    "Lactente amamentado: examinar os mamilos da mãe e tratar a mãe ao mesmo tempo se houver dor, fissura ou eritema",
    "Ferver ou higienizar bicos, chupetas e mamadeiras diariamente; trocar se muito desgastados",
    "Moderada a grave, falha ao tópico ou imunossupressão: fluconazol oral",
    "Uso de corticoide inalatório: orientar enxágue da boca com água após cada uso; conferir uso de espaçador",
    "Avaliar a área das fraldas (candidíase perineal associada é comum)"
  ],
  diferenciais: [
    "Resíduo de leite (sai com facilidade, sem base eritematosa)",
    "Língua geográfica (placas vermelhas com borda branca que mudam de lugar)",
    "Leucoplasia pilosa oral (borda lateral da língua, não sai ao raspar; pensar em HIV)",
    "Gengivoestomatite herpética (vesículas e úlceras dolorosas, febre)",
    "Aftas (úlceras dolorosas, não placas)"
  ],
  exames: [
    "Nenhum exame de rotina: o diagnóstico é clínico",
    "Exame micológico direto de raspado oral: só se dúvida diagnóstica ou falha terapêutica",
    "Sorologia/teste rápido para HIV e investigação de imunodeficiência: candidíase recorrente, extensa ou fora da faixa etária sem fator de risco"
  ],
  tratamento: [
    {
      droga: "Nistatina suspensão oral 100.000 UI/mL",
      linha: "l1",
      dose: "Prematuro e baixo peso: 1 mL. Lactente: 1 a 2 mL. Criança maior: 1 a 6 mL",
      via: "Oral tópica: metade em cada lado da boca; manter na boca o maior tempo possível antes de engolir",
      intervalo: "4 vezes ao dia, após as mamadas",
      duracao: "7 a 14 dias; manter até 48 h após o desaparecimento das lesões",
      monitorizacao: "Resposta clínica em 5–7 dias",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Disponível no SUS (RENAME 2024). Contém sacarose. Pode ser aplicada com gaze ou cotonete nas lesões"
    },
    {
      droga: "Miconazol gel oral 20 mg/g",
      linha: "alt",
      dose: "Lactente de 4 a 24 meses: 1,25 mL (¼ da colher-medida). ≥ 2 anos: 2,5 mL",
      via: "Oral tópica: espalhar sobre as lesões com o dedo limpo, em pequenas porções",
      intervalo: "4 vezes ao dia, após as refeições",
      duracao: "Manter até 1 semana após o desaparecimento das lesões",
      monitorizacao: "Engasgo em lactentes pequenos",
      contraindicacoes: "Menores de 4 meses e lactentes com reflexo de deglutição imaturo (risco de engasgo; em prematuro ou atraso neuromotor, só a partir de 5–6 meses); uso de varfarina (aumenta INR)",
      ajustes: "Inclusão na RENAME não confirmada: conferir REMUME (item de farmácia). Não aplicar no fundo da garganta. Interage com varfarina, sulfonilureias e outros substratos do CYP3A4/2C9"
    },
    {
      droga: "Fluconazol",
      linha: "alt",
      dose: "Criança: 6 mg/kg no 1º dia, depois 3 mg/kg/dia (máx. 200 mg/dia). Adolescente/adulto: 100 a 200 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "7 a 14 dias",
      monitorizacao: "Resposta clínica; interações medicamentosas",
      contraindicacoes: "Uso de drogas que prolongam QT (ex.: cisaprida); hipersensibilidade a azólicos",
      ajustes: "Indicado em doença moderada a grave, falha ao tópico ou imunossupressão. Ajustar na DRC (ClCr ≤ 50 mL/min: metade da dose após a dose de ataque). Suspensão oral pode precisar ser manipulada"
    }
  ],
  prescricao: {
    ambulatorial: "LACTENTE — 1ª ESCOLHA (SUS)\nUSO ORAL (TÓPICO NA BOCA)\n1. Nistatina suspensão oral 100.000 UI/mL --------------- 1 frasco\n   Aplicar 1 mL de cada lado da boca (total 2 mL), 4 vezes ao dia, após as mamadas, por 7 a 14 dias, mantendo por mais 2 dias após as placas sumirem. Pode passar com gaze limpa sobre as placas.\n   (Prematuro ou baixo peso: 0,5 mL de cada lado, 4 vezes ao dia.)\n\nALTERNATIVA (≥ 4 MESES)\n1. Miconazol gel oral 20 mg/g ---------------------------- 1 bisnaga\n   Lactente 4–24 meses: aplicar 1,25 mL (¼ da colher-medida) sobre as placas, dividido em pequenas porções, 4 vezes ao dia, após as mamadas. Criança ≥ 2 anos: 2,5 mL, 4 vezes ao dia. Manter por 1 semana após as placas sumirem. Não aplicar no fundo da garganta.\n\nMÃE QUE AMAMENTA COM DOR OU LESÃO NO MAMILO\nUSO TÓPICO\n2. Miconazol 2% creme ------------------------------------ 1 bisnaga\n   Aplicar fina camada nos mamilos e aréolas após cada mamada, por 14 dias. Retirar o excesso antes da próxima mamada.\n\nCASO MODERADO A GRAVE OU FALHA AO TÓPICO\nUSO ORAL\n3. Fluconazol ---------------------------------------------- ___\n   Criança: 6 mg/kg no 1º dia e depois 3 mg/kg 1 vez ao dia, por 7 a 14 dias (máx. 200 mg/dia).\n   Adolescente/adulto: fluconazol 100 a 200 mg 1 vez ao dia, por 7 a 14 dias."
  },
  orientacoesRetorno: [
    "Aplicar o remédio depois das mamadas, para ele ficar mais tempo na boca",
    "Ferver bicos, chupetas e mamadeiras por 5 minutos todos os dias; lavar as mãos antes de mexer na boca do bebê",
    "Se a mãe sentir dor, ardência ou rachadura no peito, tratar a mãe também; não precisa parar de amamentar",
    "Voltar imediatamente se o bebê parar de mamar, ficar molinho, com pouca urina ou febre",
    "Retornar se as placas não melhorarem em 7 dias ou voltarem logo após o fim do tratamento"
  ],
  encaminhar: [
    "Pediatria/infectologia: candidíase recorrente ou extensa sem fator de risco, suspeita de imunodeficiência ou HIV",
    "Urgência: lactente com recusa alimentar e desidratação, ou disfagia importante (esofagite)"
  ],
  fontes: [
    "IDSA — Clinical Practice Guideline for the Management of Candidiasis: 2016 Update (Pappas et al., Clin Infect Dis 2016) — orofaríngea: tópico na doença leve, fluconazol 7–14 dias na moderada/grave",
    "Ministério da Saúde — RENAME 2024 (nistatina 100.000 UI/mL suspensão)",
    "Bulas ANVISA: nistatina suspensão oral; miconazol gel oral (Daktarin gel oral) — doses por idade e contraindicação < 4 meses",
    "Ministério da Saúde — Saúde da Criança: aleitamento materno e alimentação complementar, Cadernos de Atenção Básica nº 23 (2015) — candidíase mamilar"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
