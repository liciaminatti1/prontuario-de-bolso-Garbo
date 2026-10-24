// Sangramento na segunda metade da gestação
registrarFicha({
  id: "sangramento-segunda-metade",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "completo",
  titulo: "Sangramento na 2ª metade da gestação (placenta prévia, DPP, vasa prévia, rotura uterina)",
  resumo: "Sangramento vaginal após 20 semanas. Causas graves: placenta prévia, descolamento prematuro de placenta (DPP), vasa prévia e rotura uterina. Não fazer toque vaginal até excluir placenta prévia.",
  palavrasChave: "sangramento terceiro trimestre hemorragia anteparto placenta previa dpp descolamento prematuro placenta abruptio vasa previa rotura uterina ruptura uterina acretismo sangramento gestante hipertonia",
  critico: {
    tempo: "Sem toque até USG excluir prévia",
    texto: "Estabilizar a mãe (2 acessos, sangue, decúbito lateral) e avaliar o feto (BCF/CTG). DPP com feto vivo ou rotura uterina: parto imediato pela via mais rápida."
  },
  alarmes: [
    "Dor abdominal intensa com útero endurecido (hipertonia) — DPP",
    "Instabilidade hemodinâmica, índice de choque ≥ 0,9",
    "BCF ausente, bradicardia fetal ou CTG categoria III",
    "Dor súbita, parada das contrações, partes fetais palpáveis, subida da apresentação após cesárea prévia — rotura uterina",
    "Sangramento na rotura de membranas com bradicardia fetal imediata — vasa prévia",
    "Sangue que não coagula (CIVD)"
  ],
  condutaInicial: [
    "Decúbito lateral esquerdo, O₂ se instável, 2 acessos calibrosos, monitor",
    "Hemograma, tipagem e prova cruzada, coagulograma, fibrinogênio",
    "BCF imediato e cardiotocografia se ≥ 24–26 semanas",
    "Exame especular cuidadoso (quantificar o sangramento, ver colo); NÃO fazer toque vaginal",
    "USG obstétrica (localizar placenta) — se disponível sem atrasar cesárea de urgência",
    "Cristaloide e hemocomponentes conforme perda; Rh negativo: imunoglobulina anti-D",
    "Comunicar obstetra e centro cirúrgico; < 34 semanas estável: corticoide"
  ],
  fataisExcluir: [
    "Descolamento prematuro de placenta com CIVD",
    "Rotura uterina",
    "Vasa prévia rota (exsanguinação fetal)",
    "Placenta prévia com acretismo",
    "Choque hipovolêmico materno"
  ],
  proximaDecisao: "DPP com feto vivo: parto imediato (vaginal só se iminente; senão cesárea). DPP com feto morto e mãe estável: parto vaginal com amniotomia, corrigindo coagulopatia. Placenta prévia sangrando muito ou com instabilidade: cesárea em qualquer IG; estável e < 37 semanas: internação, corticoide e conduta expectante. Rotura uterina: laparotomia imediata.",
  clinica: {
    anamnese: [
      "IG, quantidade e cor do sangramento, início (súbito, em repouso, após trauma ou relação sexual)",
      "Dor abdominal, contrações, perda de líquido, movimentos fetais",
      "Cesárea ou cirurgia uterina prévia, placenta prévia em USG anterior",
      "Hipertensão/pré-eclâmpsia, tabagismo, cocaína, trauma abdominal (DPP)",
      "Fertilização in vitro, placenta baixa ou inserção velamentosa (vasa prévia)"
    ],
    exameFisico: [
      "PA, FC, índice de choque, perfusão",
      "Tônus uterino: relaxado (prévia) ou hipertônico/doloroso (DPP)",
      "Altura uterina (cresce no DPP com hematoma oculto)",
      "BCF; apresentação fetal (anômala é comum na prévia)",
      "Especular: origem do sangramento, colo, lesões cervicais"
    ],
    diferenciais: [
      { dx: "Placenta prévia", pista: "Sangramento indolor, vermelho vivo, recorrente; útero relaxado; feto geralmente bem" },
      { dx: "DPP", pista: "Dor súbita, hipertonia, sangue escuro (pode ser oculto), sofrimento fetal, hipertensão" },
      { dx: "Vasa prévia", pista: "Sangramento após amniorrexe com bradicardia fetal súbita; mãe estável" },
      { dx: "Rotura uterina", pista: "Cicatriz prévia, dor intensa, parada das contrações, choque, alteração súbita do BCF" },
      { dx: "Trabalho de parto (sinal)", pista: "Muco com sangue, contrações regulares, dilatação" },
      { dx: "Causas cervicais/vaginais", pista: "Pólipo, ectrópio, cervicite, câncer: ver ao especular" }
    ],
    gravidade: [
      "Perda com instabilidade, índice de choque ≥ 0,9 ou Hb em queda",
      "Sofrimento fetal (categoria II recorrente ou III)",
      "Coagulopatia: fibrinogênio < 200 mg/dL, plaquetas em queda",
      "DPP: o sangramento externo subestima a perda (hematoma retroplacentário)"
    ]
  },
  exames: [
    {
      nome: "Laboratório materno",
      pedido: "Hemograma com plaquetas. Tipagem ABO/Rh e Coombs indireto. Prova cruzada (2–4 U). TP/INR, TTPa, fibrinogênio. Creatinina.",
      porQue: "Avaliar perda, coagulopatia e necessidade de anti-D.",
      esperar: "Fibrinogênio no termo costuma ser > 400 mg/dL.",
      interpretacao: "Fibrinogênio < 200 = CIVD grave e alto risco de hemorragia; repor crioprecipitado.",
      limitacoes: "Teste do coágulo à beira do leito (sangue em tubo seco que não coagula em 7–10 min) sugere coagulopatia se não houver laboratório rápido."
    },
    {
      nome: "Ultrassonografia obstétrica",
      pedido: "USG obstétrica com localização placentária (transvaginal se necessário) e Doppler colorido do segmento inferior (vasa prévia/acretismo).",
      porQue: "Diagnóstico de placenta prévia e vasa prévia.",
      esperar: "Placenta fora do segmento inferior.",
      interpretacao: "Placenta recobrindo o orifício interno = prévia. USG transvaginal é segura na prévia.",
      limitacoes: "USG normal NÃO exclui DPP (sensibilidade baixa); o diagnóstico de DPP é clínico."
    },
    {
      nome: "Cardiotocografia",
      pedido: "Cardiotocografia contínua.",
      porQue: "Vitalidade fetal e atividade uterina.",
      esperar: "Categoria I.",
      interpretacao: "Taquissistolia/hipertonia e desacelerações tardias sugerem DPP. Padrão sinusoidal sugere anemia fetal (vasa prévia).",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide e hemocomponentes",
      linha: "l1",
      dose: "Ringer lactato 500 mL em bolus e reavaliar; hemácias, plasma, plaquetas e crioprecipitado conforme ficha de hemorragia pós-parto",
      via: "IV",
      intervalo: "Conforme resposta",
      duracao: "—",
      monitorizacao: "Índice de choque, diurese ≥ 30 mL/h, Hb, fibrinogênio",
      contraindicacoes: "—",
      ajustes: "Na DPP, a perda real é maior que a visível; repor de forma precoce"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "l1",
      dose: "300 mcg (1.500 UI)",
      via: "IM",
      intervalo: "Dose única em até 72 h do sangramento",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Gestante Rh positivo ou já sensibilizada (Coombs indireto positivo)",
      ajustes: "Gestante Rh negativo com Coombs indireto negativo. Hemorragia feto-materna grande: dose ajustada pelo Kleihauer-Betke"
    },
    {
      droga: "Betametasona",
      linha: "adj",
      dose: "12 mg",
      via: "IM",
      intervalo: "24/24 h, 2 doses",
      duracao: "1 ciclo",
      monitorizacao: "Glicemia",
      contraindicacoes: "Não atrasar parto de urgência para corticoide",
      ajustes: "24 a 33 semanas e 6 dias com risco de parto em 7 dias. Alternativa: dexametasona 6 mg IM 12/12 h, 4 doses"
    },
    {
      droga: "Sulfato de magnésio (neuroproteção fetal)",
      linha: "adj",
      dose: "Ataque 4 g IV em 20–30 min; manutenção 1 g/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até o parto ou máximo 24 h",
      monitorizacao: "Reflexo patelar, FR, diurese",
      contraindicacoes: "Miastenia gravis",
      ajustes: "Se parto previsto antes de 32 semanas. Não atrasar cesárea de emergência"
    },
    {
      droga: "Tocolíticos na suspeita de DPP",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar tocólise na DPP nem com instabilidade materna. Na placenta prévia estável, só em centro especializado e por curto período",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Gestante com sangramento após 20 semanas: maternidade com centro cirúrgico e banco de sangue",
      "UBS/UPA: acesso venoso, cristaloide, decúbito lateral e transferência imediata com médico"
    ],
    reavaliar: [
      "Sinais vitais de 15/15 min; sangramento (pesar absorventes); BCF contínuo/CTG",
      "Hb e fibrinogênio a cada 4–6 h no DPP ou sangramento ativo"
    ],
    alta: [
      "Placenta prévia: sem sangramento por ≥ 48 h, Hb estável, mora perto, com acompanhante e acesso rápido à maternidade (decisão do obstetra)",
      "Sangramento discreto de causa cervical benigna com feto bem"
    ],
    observacao: [
      "Sangramento leve sem causa definida com mãe e feto estáveis: CTG e observação ≥ 24 h"
    ],
    internacao: [
      "Todo sangramento ativo após 20 semanas",
      "Placenta prévia com sangramento: internação, corticoide, reserva de sangue",
      "Parto eletivo: placenta prévia 36–37 semanas; vasa prévia 34–37 semanas (cesárea programada)"
    ],
    transferencia: [
      "Suspeita de acretismo: centro terciário com equipe multidisciplinar e banco de sangue",
      "Prematuridade < 32–34 semanas: maternidade com UTI neonatal, se estável"
    ]
  },
  prescricao: {
    hospitalar: "SANGRAMENTO NA 2ª METADE DA GESTAÇÃO (IG: ___ semanas; Rh: ___)\n1. Dieta zero (possível cesárea).\n2. Decúbito lateral esquerdo; repouso no leito; 2 acessos 14–16G; monitor; O₂ se SpO₂ < 95% ou instável.\n3. Ringer lactato 500 mL IV em bolus se instável; reavaliar.\n4. Reserva de 2–4 U de concentrado de hemácias.\n5. NÃO realizar toque vaginal até exclusão de placenta prévia.\n6. Se Rh negativo e Coombs indireto negativo: imunoglobulina anti-D 300 mcg IM, dose única.\n7. Se 24–33 semanas e 6 dias e estável: betametasona 12 mg IM, repetir em 24 h.\n8. Se parto provável antes de 32 semanas: sulfato de magnésio 50% 8 mL (4 g) + água destilada 12 mL IV em 20–30 min; manutenção 50% 10 mL (5 g) + SF 0,9% 490 mL a 100 mL/h (1 g/h) até o parto (máx. 24 h).\n9. Exames: hemograma, tipagem, Coombs indireto, prova cruzada, TP, TTPa, fibrinogênio, creatinina; USG obstétrica com localização placentária.\n10. Controles: PA e FC de 15/15 min; quantificar sangramento; cardiotocografia contínua; diurese.\n11. Comunicar centro obstétrico/cirúrgico."
  },
  orientacoesRetorno: [
    "Quem tem placenta prévia não deve ter relações sexuais nem fazer esforço; evitar viagens longe da maternidade",
    "Voltar imediatamente se: qualquer sangramento, dor na barriga, barriga dura, perda de líquido, bebê mexendo menos",
    "Ir à maternidade de ambulância ou com transporte rápido; não esperar o sangramento parar",
    "Se for Rh negativo, avisar sempre: pode precisar da vacina anti-D"
  ],
  tabelas: [
    {
      titulo: "Comparação das causas graves",
      colunas: ["", "Placenta prévia", "DPP", "Vasa prévia", "Rotura uterina"],
      linhas: [
        ["Dor", "Ausente", "Súbita, intensa", "Ausente", "Súbita, intensa"],
        ["Útero", "Relaxado", "Hipertônico, doloroso", "Normal", "Parada das contrações, partes fetais palpáveis"],
        ["Sangue", "Vivo, recorrente", "Escuro, pode ser oculto", "Após amniorrexe", "Variável; choque"],
        ["Mãe", "Estável no início", "Choque e CIVD", "Estável", "Choque"],
        ["Feto", "Em geral bem", "Sofrimento ou óbito", "Bradicardia, exsanguinação", "Sofrimento grave"],
        ["Fatores", "Cesárea prévia, multiparidade, idade", "Hipertensão, trauma, cocaína, tabaco, RPM", "FIV, placenta baixa, inserção velamentosa", "Cesárea prévia, ocitocina, parto obstruído"],
        ["Conduta", "Sem toque; cesárea se sangramento grave ou 36–37 sem", "Parto imediato se feto vivo", "Cesárea imediata", "Laparotomia imediata"]
      ],
      nota: "MS 2022 / FEBRASGO. USG não exclui DPP."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "OPAS/OMS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "FEBRASGO — Tratado de Obstetrícia (2019)",
    "RCOG — Green-top Guideline nº 27a: Placenta praevia and placenta accreta (2018) e nº 63: Antepartum haemorrhage (2011)",
    "SMFM — Consult Series nº 37: Diagnosis and management of vasa previa (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});
