// Poliartralgia febril: diagnóstico diferencial
registrarFicha({
  id: "poliartralgia-febril",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Poliartralgia febril: diagnóstico diferencial",
  resumo: "Febre com dor em várias articulações (com ou sem artrite). No Brasil, pensar primeiro em arboviroses (chikungunya, dengue, zika, oropouche); não perder artrite séptica/gonocócica, febre reumática, LES e endocardite.",
  palavrasChave: "poliartralgia poliartrite febre dor nas juntas chikungunya dengue zika oropouche artrite viral parvovirus rubeola hepatite b febre reumatica jones artrite gonococica artrite reativa lupus still endocardite",
  critico: {
    tempo: "Excluir dengue grave e séptica",
    texto: "Até excluir dengue: sem AINE e sem AAS; checar sinais de alarme. Monoartrite (ou uma articulação muito pior que as outras) com derrame: artrocentese no mesmo dia."
  },
  alarmes: [
    "Sinais de alarme de dengue: dor abdominal intensa, vômitos persistentes, sangramento de mucosa, hipotensão postural, letargia, hepatomegalia, aumento do hematócrito — ver ficha Dengue",
    "Articulação quente, com derrame e dor intensa à mobilização (artrite séptica)",
    "Pústulas, tenossinovite em punhos/tornozelos (gonococo disseminado)",
    "Sopro cardíaco novo, petéquias, esplenomegalia (endocardite)",
    "Púrpura palpável, hematúria, edema, HAS nova (vasculite, LES)",
    "Gestante, idoso, recém-nascido de mãe virêmica, comorbidade descompensada (chikungunya grave)",
    "Confusão, convulsão, fraqueza flácida (encefalite, Guillain-Barré)"
  ],
  conduta: [
    "Classificar: monoartrite × oligo × poliartrite; artralgia (dor) × artrite (edema, calor); tempo de evolução (< 6 semanas = aguda)",
    "Em período de transmissão de arbovírus: estadiar dengue (grupos A–D) antes de qualquer AINE",
    "Exame: pele (exantema, púrpura, pústulas), mucosas, conjuntivas, linfonodos, coração, baço, todas as articulações e tendões",
    "Exames iniciais conforme quadro (ver lista); artrocentese se derrame em mono/oligoartrite",
    "Notificar caso suspeito de dengue, chikungunya, zika ou oropouche (SINAN); zika em gestante: notificação imediata",
    "Chikungunya fase aguda (até 14 dias): repouso, hidratação, paracetamol/dipirona, compressas frias; opioide fraco se dor intensa",
    "Chikungunya subaguda (15 dias a 3 meses): AINE (dengue já excluída) ou prednisona em dose baixa por curto período (ver tabela); crônica (> 3 meses): reumatologia, hidroxicloroquina/metotrexato",
    "Febre reumática provável (pós-faringite, poliartrite migratória de grandes articulações): ASLO, ECG, ecocardiograma; AAS ou naproxeno após excluir dengue; penicilina benzatina",
    "Reavaliar em 24–48 h; poliartrite que persiste > 6 semanas: investigar doença reumática crônica (AR, LES, espondiloartrite)"
  ],
  exames: [
    "Todos: hemograma com plaquetas, PCR, VHS, TGO, TGP, creatinina, urina tipo 1",
    "Arbovírus: até o 5º dia de sintomas — NS1 (dengue) e RT-PCR para dengue, chikungunya, zika e oropouche conforme LACEN; a partir do 6º dia — sorologia IgM",
    "Artrite com derrame: líquido sinovial (celularidade, Gram, cultura, cristais) — ver ficha Artrite séptica",
    "Suspeita de febre reumática: ASLO, swab de orofaringe, ECG (PR longo), ecocardiograma",
    "Suspeita de doença autoimune: FAN, fator reumatoide, anti-CCP, C3, C4",
    "Conforme exposição: HBsAg, anti-HCV, anti-HIV, VDRL, IgM parvovírus B19 e rubéola; PCR para gonococo/clamídia em urina e mucosas",
    "Febre persistente + sopro: hemoculturas (3 amostras) e ecocardiograma"
  ],
  diferenciais: [
    "Chikungunya: febre alta súbita, poliartralgia/artrite intensa, simétrica, distal (mãos, punhos, tornozelos), edema periarticular; exantema; pode cronificar",
    "Dengue: febre, mialgia, dor retro-orbitária, artralgia leve, plaquetopenia, leucopenia; risco na defervescência",
    "Zika: febre baixa ou ausente, exantema pruriginoso precoce, conjuntivite não purulenta, artralgia leve; risco fetal",
    "Oropouche: febre, cefaleia intensa, mialgia, recaída dos sintomas em 1–2 semanas; região Norte e surtos em outras regiões",
    "Artrite séptica / gonocócica: mono/oligoartrite, tenossinovite, pústulas",
    "Febre reumática: 5–15 anos (e adulto jovem), 2–4 semanas após faringite, poliartrite migratória, cardite, coreia, nódulos, eritema marginado",
    "Artrite viral: parvovírus B19 (mulher, mãos, contato com criança), rubéola, hepatite B (fase pré-ictérica com urticária), HIV agudo",
    "Artrite reativa: 1–4 semanas após uretrite ou diarreia; oligoartrite de membros inferiores, entesite, conjuntivite",
    "LES: mulher jovem, exantema malar, úlceras orais, serosite, citopenias, proteinúria",
    "Doença de Still do adulto, endocardite, leptospirose (mialgia em panturrilhas), sarcoidose (Löfgren)"
  ],
  tratamento: [
    { droga: "Paracetamol", linha: "l1", dose: "500–1.000 mg (máx. 4 g/dia; 3 g/dia se hepatopatia ou etilismo)", via: "VO", intervalo: "6/6 h", duracao: "Enquanto dor/febre", monitorizacao: "Transaminases se uso prolongado", contraindicacoes: "Hepatopatia grave", ajustes: "1ª escolha na fase aguda das arboviroses" },
    { droga: "Dipirona", linha: "l1", dose: "500–1.000 mg", via: "VO", intervalo: "6/6 h", duracao: "Enquanto dor/febre", monitorizacao: "—", contraindicacoes: "Alergia, agranulocitose prévia", ajustes: "Pode alternar com paracetamol" },
    { droga: "Codeína + paracetamol (30/500 mg) ou tramadol", linha: "adj", dose: "Codeína 30 mg; tramadol 50 mg", via: "VO", intervalo: "6/6 h", duracao: "Até 5–7 dias", monitorizacao: "Sedação, constipação", contraindicacoes: "Insuficiência respiratória; tramadol com ISRS (risco serotoninérgico)", ajustes: "Dor intensa na fase aguda da chikungunya" },
    { droga: "AINE (ibuprofeno, naproxeno)", linha: "ci", dose: "Não usar até excluir dengue", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Fase aguda de arbovirose sem diagnóstico definido, plaquetopenia, sangramento, DRC", ajustes: "Liberado na fase subaguda da chikungunya (naproxeno 500 mg 12/12 h ou ibuprofeno 600 mg 8/8 h, com IBP se risco)" },
    { droga: "Prednisona (chikungunya subaguda)", linha: "alt", dose: "0,5 mg/kg/dia (máx. 40 mg/dia — conferir protocolo MS)", via: "VO", intervalo: "1×/dia pela manhã", duracao: "Até melhora da dor, por no máximo 3 semanas, com retirada gradual", monitorizacao: "Glicemia, PA", contraindicacoes: "Fase aguda, dengue não excluída, DM descompensado, infecção ativa", ajustes: "Somente após 14 dias do início e com dengue excluída" }
  ],
  prescricao: {
    ambulatorial: "FASE AGUDA DE POLIARTRALGIA FEBRIL (arbovirose provável)\nUSO ORAL\n1. Paracetamol 750 mg ------------------------------ 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor ou febre (máx. 4 por dia).\n2. Dipirona 1 g ------------------------------------- 10 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor ou febre persistir, intercalando com o paracetamol.\n3. Soro de reidratação oral --------------------------- 10 envelopes\n   Diluir 1 envelope em 1 litro de água filtrada; beber ao longo do dia, além da água (adulto: 60 mL/kg/dia de líquidos no total).\n\nORIENTAÇÕES\n- Não tomar ibuprofeno, diclofenaco, nimesulida, AAS ou outros anti-inflamatórios até a dengue ser descartada.\n- Compressas frias nas articulações por 20 minutos, várias vezes ao dia.\n\nCHIKUNGUNYA SUBAGUDA (> 14 dias, dengue excluída)\n1. Naproxeno 500 mg -------------------------------- 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após refeição, por até 10 dias."
  },
  encaminhar: [
    "PS no mesmo dia: sinais de alarme de dengue, artrite séptica suspeita, sopro novo com febre, púrpura com hematúria, gestante com febre e exantema",
    "Reumatologia: poliartrite > 6 semanas, chikungunya crônica refratária, suspeita de LES, AR ou espondiloartrite",
    "Cardiologia/ecocardiograma: suspeita de febre reumática ou endocardite",
    "Pré-natal de alto risco: gestante com zika ou chikungunya confirmadas"
  ],
  orientacoesRetorno: [
    "Beber bastante líquido; repousar",
    "Não usar anti-inflamatório nem AAS até o médico liberar",
    "Voltar imediatamente se dor forte na barriga, vômitos que não param, sangramento de gengiva ou nariz, tontura ao levantar, sonolência ou falta de ar",
    "Voltar se uma articulação ficar muito inchada, quente e vermelha",
    "A dor nas juntas da chikungunya pode durar semanas a meses; retornar se não melhorar em 2 semanas",
    "Retorno em 24–48 h (ou no dia em que a febre baixar)"
  ],
  tabelas: [
    {
      titulo: "Arboviroses — pistas clínicas",
      colunas: ["Achado", "Dengue", "Chikungunya", "Zika"],
      linhas: [
        ["Febre", "Alta, 2–7 dias", "Alta, súbita", "Baixa ou ausente"],
        ["Artralgia/artrite", "Leve", "Intensa, incapacitante, com edema", "Leve a moderada"],
        ["Exantema", "Do 3º ao 6º dia", "Do 2º ao 5º dia", "Precoce (1º–2º dia), pruriginoso"],
        ["Conjuntivite", "Rara", "Ocasional", "Frequente, não purulenta"],
        ["Plaquetopenia", "Frequente", "Rara", "Rara"],
        ["Principal risco", "Choque e sangramento", "Cronificação, formas atípicas", "Microcefalia, Guillain-Barré"]
      ],
      nota: "Coinfecção é possível. Sempre conduzir como dengue até excluí-la."
    }
  ],
  fontes: [
    "Ministério da Saúde — Chikungunya: manejo clínico (2017)",
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "Ministério da Saúde — Guia de Vigilância em Saúde (6ª ed., 2023)",
    "Sociedade Brasileira de Reumatologia — Recomendações para o diagnóstico e tratamento da febre chikungunya (Marques CDL et al., 2017)",
    "AHA — Revision of the Jones Criteria for the diagnosis of acute rheumatic fever (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
