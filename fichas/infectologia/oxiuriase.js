// Oxiuríase (enterobíase)
registrarFicha({
  id: "oxiuriase",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Oxiuríase (enterobíase)",
  resumo: "Infecção por Enterobius vermicularis: prurido anal predominantemente noturno, comum em escolares e seus familiares. Reinfecção frequente; tratar a família e repetir a dose em 2 semanas.",
  palavrasChave: "oxiurus oxiuriase enterobiase enterobius vermicularis coceira anal prurido anal noturno verme branco pequeno fita adesiva graham albendazol mebendazol pamoato de pirvinio",
  alarmes: [
    "Vulvovaginite, dor pélvica ou infecção urinária de repetição em meninas (migração do verme)",
    "Escoriações com infecção bacteriana secundária da pele perianal",
    "Prurido anal persistente após 2 tratamentos corretos (pensar em outra causa: dermatite, candidíase, estreptococo perianal, abuso sexual)"
  ],
  conduta: [
    "Diagnóstico clínico: prurido anal noturno, irritabilidade, sono agitado; vermes brancos de cerca de 1 cm vistos na região perianal ou nas fezes",
    "Confirmar, se dúvida, pelo método da fita adesiva (Graham) pela manhã, antes do banho e da higiene, em 3 dias seguidos — o EPF comum quase sempre é negativo",
    "Tratar o paciente e todos os moradores da casa ao mesmo tempo (exceto gestantes no 1º trimestre e menores de 1 ano, avaliar caso a caso)",
    "Repetir a mesma dose após 2 semanas (o remédio não mata os ovos)",
    "Medidas de higiene por pelo menos 2 semanas: unhas curtas, lavar as mãos, banho pela manhã, trocar e lavar roupas íntimas, pijamas e roupas de cama com água quente; não sacudir lençóis",
    "Gestante: preferir medidas de higiene; se necessário, tratar após o 1º trimestre"
  ],
  exames: [
    "Fita adesiva perianal (método de Graham) pela manhã, antes do banho, 3 dias consecutivos",
    "Parasitológico de fezes comum tem baixa sensibilidade (positivo em cerca de 5–15% dos casos)"
  ],
  diferenciais: [
    "Dermatite de contato, eczema ou psoríase perianal",
    "Dermatite estreptocócica perianal (eritema bem delimitado, dor)",
    "Candidíase, hemorroidas, fissura",
    "Abuso sexual (avaliar sempre em criança com lesões ou vulvovaginite recorrente)"
  ],
  tratamento: [
    {
      droga: "Albendazol",
      linha: "l1",
      dose: "≥ 2 anos e adulto: 400 mg. 1–2 anos: 200 mg",
      via: "VO",
      intervalo: "Dose única",
      duracao: "Repetir a mesma dose após 2 semanas",
      monitorizacao: "Prurido deve desaparecer em poucos dias",
      contraindicacoes: "1º trimestre da gestação",
      ajustes: "Na RENAME (comprimido 400 mg; suspensão 40 mg/mL)"
    },
    {
      droga: "Mebendazol",
      linha: "alt",
      dose: "100 mg (criança > 1 ano e adulto)",
      via: "VO",
      intervalo: "Dose única",
      duracao: "Repetir após 2 semanas",
      monitorizacao: "—",
      contraindicacoes: "1º trimestre da gestação; menores de 1 ano",
      ajustes: "Na RENAME (comprimido 100 mg; suspensão 20 mg/mL — 5 mL = 100 mg)"
    },
    {
      droga: "Pamoato de pirvínio",
      linha: "alt",
      dose: "Dose por kg conforme a bula da apresentação (suspensão ou drágea)",
      via: "VO",
      intervalo: "Dose única",
      duracao: "Repetir após 2 semanas",
      monitorizacao: "Fezes avermelhadas (inócuo, mancha roupas)",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Opção quando albendazol/mebendazol não puderem ser usados; conferir a dose máxima na bula"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO E CRIANÇA ≥ 2 ANOS (tratar todos da casa)\nUSO ORAL\n1. Albendazol 400 mg (comprimido) ou suspensão 40 mg/mL ---- 2 comprimidos ou 1 frasco por pessoa\n   Tomar 1 comprimido (ou 10 mL da suspensão) em dose única hoje e repetir a mesma dose daqui a 14 dias.\n   Criança de 1 a 2 anos: 5 mL (200 mg) hoje e repetir em 14 dias.\n\nALTERNATIVA\n1. Mebendazol 100 mg (comprimido) ou suspensão 20 mg/mL ---- 2 comprimidos ou 1 frasco por pessoa\n   Tomar 1 comprimido (ou 5 mL) em dose única hoje e repetir em 14 dias (criança > 1 ano: mesma dose).\n\nORIENTAÇÕES (por 2 semanas)\n- Unhas curtas e limpas; lavar as mãos após o banheiro e antes de comer; evitar coçar.\n- Banho pela manhã para remover os ovos; trocar a roupa íntima todos os dias.\n- Lavar roupas de cama, toalhas e pijamas com água quente; não sacudir os lençóis.\n- Limpar o chão e o vaso sanitário com pano úmido."
  },
  orientacoesRetorno: [
    "Os ovos sobrevivem fora do corpo por até 2–3 semanas: por isso a 2ª dose e a higiene da casa são essenciais",
    "Todos os moradores devem tomar o remédio no mesmo dia",
    "Voltar se a coceira continuar após as 2 doses, se aparecer corrimento vaginal, dor ao urinar ou feridas na região anal",
    "Não há necessidade de exame de controle se os sintomas desaparecerem"
  ],
  encaminhar: [
    "Não costuma ser necessário. Avaliação de proteção (Conselho Tutelar, notificação) se suspeita de abuso sexual"
  ],
  fontes: [
    "SBP — Guia Prático de Atualização nº 7: Parasitoses intestinais — diagnóstico e tratamento (2020)",
    "Ministério da Saúde — Doenças Infecciosas e Parasitárias: Guia de Bolso, 8ª ed. (2010)",
    "CDC — Enterobiasis: Clinical Overview and Treatment (2024)",
    "Ministério da Saúde — RENAME 2024 (albendazol, mebendazol)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
