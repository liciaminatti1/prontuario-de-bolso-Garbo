// Consulta puerperal: alta e revisões pós-parto
registrarFicha({
  id: "consulta-puerperal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Consulta puerperal: alta, 1ª semana e revisão de 30–42 dias",
  resumo: "Roteiro da alta hospitalar e das consultas pós-parto na UBS (1ª semana e 30–42 dias): o que perguntar e examinar, seguimento de condições da gestação, contracepção pelos critérios da OMS e sinais de alerta.",
  palavrasChave: "puerperio consulta puerperal revisao pos parto quarentena alta hospitalar 5 dia visita domiciliar loquios involucao uterina contracepcao pos parto lam lactacao amenorreia diu implante pressao arterial diabetes gestacional totg retorno relacao sexual",
  critico: {
    tempo: "Consulta até o 7º dia",
    texto: "Toda puérpera deve ser vista na 1ª semana (ideal 3–5 dias, junto com a 1ª consulta do RN) e de novo até 42 dias. Hipertensas: PA em 3–5 dias após a alta (pré-eclâmpsia pode surgir até 6 semanas)."
  },
  alarmes: [
    "Sangramento que encharca mais de 1 absorvente por hora ou com coágulos grandes (hemorragia pós-parto tardia)",
    "Febre, lóquios fétidos, dor abdominal, secreção na ferida (infecção puerperal)",
    "PA ≥ 140/90, cefaleia intensa, alteração visual, dor epigástrica, convulsão (pré-eclâmpsia pós-parto)",
    "Dor e edema de uma perna, dispneia, dor torácica (TVP/TEP)",
    "Mama vermelha, quente e dolorosa com febre (mastite)",
    "Tristeza persistente, ideias de se machucar ou machucar o bebê, confusão ou alucinações",
    "Incontinência fecal ou de flatos (lesão de esfíncter não reconhecida)"
  ],
  conduta: [
    "Alta hospitalar: não antes de 24 h após parto vaginal sem complicações (MS); conferir Hb se sangramento, PA, anti-D se Rh negativo, vacinas (dTpa se não feita, tríplice viral se suscetível à rubéola, hepatite B), testes do RN, consulta agendada na UBS e contracepção discutida",
    "1ª semana (visita ou UBS): história do parto e intercorrências, queixas, amamentação (observar mamada), humor, sono, apoio familiar, violência",
    "Exame: PA, temperatura, mamas, abdome (involução uterina: abaixo da cicatriz umbilical e regride até a pelve em ~2 semanas), ferida operatória ou períneo, lóquios (rubros → serosos → brancos até 4–6 semanas), membros inferiores",
    "Revisar suplementos (sulfato ferroso até 3 meses pós-parto), medicações e compatibilidade com amamentação",
    "Condições da gestação: hipertensas — PA em 3–5 dias e ajuste dos anti-hipertensivos (enalapril/captopril/nifedipino são compatíveis); DMG — TOTG 75 g entre 4 e 12 semanas pós-parto (ver ficha Diabetes na gestação); sífilis/HIV/hepatites — seguimento da mãe e do RN; tireoide — TSH conforme ficha",
    "30–42 dias: amamentação, humor (EPDS), retorno sexual (dispareunia, lubrificação), assoalho pélvico (incontinência urinária/fecal, prolapso), citologia se em atraso, plano reprodutivo e intervalo intergestacional (≥ 18 meses), risco cardiovascular futuro após pré-eclâmpsia/DMG",
    "Contracepção: iniciar antes que a fertilidade retorne (ovulação pode ocorrer a partir de ~3–4 semanas se não amamenta) — ver tabela e ficha Anticoncepção",
    "Relações sexuais quando a mulher se sentir confortável, em geral após o fim do sangramento"
  ],
  exames: [
    "Sem exames de rotina na revisão puerperal de baixo risco",
    "Hemograma: anemia na gestação, hemorragia pós-parto ou sintomas",
    "DMG: \"Teste oral de tolerância à glicose 75 g (jejum e 2 h) entre 4 e 12 semanas após o parto.\"",
    "Pré-eclâmpsia: creatinina, urina tipo 1 e reavaliação da PA; persistência de HAS após 12 semanas = HAS crônica",
    "Citologia oncótica conforme rastreio (pode aguardar 6–8 semanas pós-parto)"
  ],
  tabelas: [
    {
      titulo: "Contracepção no pós-parto (critérios da OMS — resumo)",
      colunas: ["Método", "Amamentando", "Não amamentando"],
      linhas: [
        ["DIU de cobre", "Até 48 h ou a partir de 4 semanas (entre 48 h e 4 semanas: categoria 3); sepse puerperal: 4", "Igual"],
        ["Implante e pílula só de progestagênio", "Podem iniciar logo após o parto (categoria 1–2)", "Imediato (categoria 1)"],
        ["Injetável trimestral (AMPD)", "Preferir a partir de 6 semanas (categoria mais restritiva antes de 6 semanas — conferir MEC vigente)", "Imediato"],
        ["Combinados (pílula, injetável mensal)", "< 6 semanas: 4; 6 semanas a 6 meses: 3; ≥ 6 meses: 2", "< 21 dias: 4; 21–42 dias: 2 (3 se outros fatores de risco de TEV); > 42 dias: 1"],
        ["LAM (lactação e amenorreia)", "Eficaz se amamentação exclusiva (dia e noite), em amenorreia e < 6 meses; perdeu um critério → outro método", "Não se aplica"],
        ["Laqueadura", "No parto se desejo manifestado ≥ 60 dias antes (Lei 14.443/2022) ou após 42 dias", "Igual"]
      ],
      nota: "Categoria 1: sem restrição; 2: benefícios superam riscos; 3: riscos geralmente superam benefícios; 4: não usar. Detalhes na ficha Anticoncepção (MEC 2025)."
    }
  ],
  prescricao: {
    ambulatorial: "PUERPÉRIO — ROTINA (amamentando)\nUSO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ------ 30 comprimidos\n   Tomar 1 comprimido ao dia, entre as refeições, até 3 meses após o parto.\n2. Paracetamol 500 mg ---------------------------- 20 comprimidos\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n\nCONTRACEPÇÃO (amamentando, se escolher pílula)\n3. Desogestrel 75 mcg ----------------------------- 3 cartelas\n   Tomar 1 comprimido ao dia, no mesmo horário, sem pausa entre as cartelas. Pode começar já; se iniciar após 21 dias do parto e sem amenorreia/LAM, usar camisinha nos primeiros 2 dias.\n   (Alternativa SUS: Noretisterona 0,35 mg, 1 comprimido ao dia sem pausa.)"
  },
  orientacoesRetorno: [
    "O sangramento do pós-parto vai clareando e diminuindo e pode durar até 6 semanas; volte se aumentar muito, tiver mau cheiro ou vier com febre",
    "Volte imediatamente se dor de cabeça forte, visão embaçada, falta de ar, dor no peito, dor e inchaço em uma perna, febre ou mama vermelha e doída",
    "Tristeza nos primeiros dias é comum; se durar mais de 2 semanas, ou se tiver pensamentos ruins, procure a UBS",
    "Você pode engravidar antes de a menstruação voltar: escolha um método anticoncepcional na consulta",
    "Leve o bebê à UBS na 1ª semana para o teste do pezinho, vacinas e consulta",
    "Exercícios para o períneo (contrair e relaxar como para segurar o xixi) ajudam a prevenir perda de urina"
  ],
  encaminhar: [
    "PS/maternidade: sangramento importante, febre com sinais de gravidade, PA ≥ 160/110 ou sintomas de pré-eclâmpsia, suspeita de TEP",
    "Ginecologia/fisioterapia pélvica: incontinência fecal ou urinária persistente, prolapso, dor perineal crônica",
    "Saúde mental: EPDS alterado (ver ficha Transtornos puerperais)"
  ],
  fontes: [
    "Ministério da Saúde — Cadernos de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco (2012): atenção ao puerpério",
    "Ministério da Saúde — Rede Alyne: Portaria GM/MS nº 5.350/2024",
    "Ministério da Saúde — Portaria nº 2.068/2016 (alojamento conjunto: permanência mínima de 24 h)",
    "OMS — Recommendations on maternal and newborn care for a positive postnatal experience (2022)",
    "OMS — Medical eligibility criteria for contraceptive use (5ª ed. 2015; atualização 2025)",
    "ACOG Committee Opinion 736 — Optimizing postpartum care (2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
