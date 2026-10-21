// Náuseas e vômitos: tratamento sintomático e antieméticos
registrarFicha({
  id: "nauseas-vomitos",
  especialidade: "gastroenterologia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Náuseas e vômitos: tratamento sintomático e antieméticos",
  resumo: "Abordagem sintomática de náuseas e vômitos agudos no adulto e na criança (gastroenterite, intoxicação alimentar, enxaqueca, medicamentos) após excluir causas graves. Tabela de antieméticos com doses.",
  palavrasChave: "nausea vomito enjoo emese antiemetico ondansetrona metoclopramida bromoprida dimenidrinato dramin prometazina haloperidol gastroenterite hiperemese",
  critico: {
    tempo: "Tratar a causa, não só o vômito",
    texto: "Antes do antiemético, procurar causa grave: abdome agudo, obstrução, cetoacidose, gravidez, IAM inferior, hipertensão intracraniana, meningite, intoxicação. Avaliar e corrigir desidratação."
  },
  alarmes: [
    "Vômitos biliosos ou fecaloides, distensão abdominal, parada de eliminação de gases (obstrução)",
    "Hematêmese ou vômito em borra de café",
    "Dor abdominal intensa ou localizada, peritonite",
    "Cefaleia intensa, rigidez de nuca, sinais focais, rebaixamento, vômitos matinais em jato (hipertensão intracraniana)",
    "Desidratação grave, choque, oligúria",
    "Glicemia elevada com cetose (cetoacidose diabética), uso de iSGLT2",
    "Dor torácica, sudorese, idosos/diabéticos com náuseas sem causa (IAM)",
    "Lactente < 3 meses, criança letárgica ou com vômitos persistentes > 24 h sem aceitar líquidos"
  ],
  conduta: [
    "Anamnese: início, relação com alimentação, diarreia, dor, febre, cefaleia, medicamentos, álcool, cannabis (síndrome de hiperêmese canabinoide), DUM e possibilidade de gestação",
    "Avaliar hidratação (mucosas, turgor, perfusão, diurese, PA, FC) e sinais de alarme",
    "Exames conforme suspeita: glicemia capilar, beta-hCG (mulher em idade fértil), eletrólitos e função renal se vômitos persistentes, ECG se suspeita cardíaca",
    "Hidratação oral em pequenos volumes frequentes (SRO 5 mL a cada 1–2 min na criança, aumentando conforme tolerância); IV se falha ou desidratação grave",
    "Antiemético: ondansetrona é a 1ª escolha na gastroenterite (adulto e criança > 6 meses) — facilita a terapia de reidratação oral",
    "Metoclopramida: preferir no adulto com gastroparesia ou enxaqueca; evitar em < 1 ano e usar com cautela em crianças e jovens (reações extrapiramidais); no máximo 5 dias",
    "Não usar antiemético para mascarar abdome agudo, obstrução ou hipertensão intracraniana",
    "Gestante: ver ficha nauseas-vomitos-gestacao"
  ],
  exames: [
    "Gastroenterite aguda sem desidratação: nenhum exame",
    "Glicemia capilar (criança com vômitos e sonolência; diabético)",
    "Beta-hCG em mulheres em idade fértil",
    "Sódio, potássio, ureia, creatinina, gasometria venosa se desidratação moderada a grave ou vômitos > 24–48 h",
    "ECG e QTc antes de ondansetrona/haloperidol/droperidol se cardiopatia, distúrbio eletrolítico ou uso de outras drogas que prolongam QT",
    "Lipase, função hepática, urina tipo 1 e imagem conforme suspeita clínica"
  ],
  diferenciais: [
    "Gastroenterite aguda (com diarreia) e intoxicação alimentar",
    "Abdome agudo (apendicite, colecistite, pancreatite, obstrução)",
    "Gestação / hiperêmese gravídica",
    "Cetoacidose diabética, uremia, hipercalcemia, insuficiência adrenal",
    "Enxaqueca, vertigem, labirintite, hipertensão intracraniana, meningite",
    "Medicamentos (opioides, quimioterapia, antibióticos, digoxina) e síndrome de hiperêmese canabinoide",
    "IAM inferior"
  ],
  tratamento: [
    {
      droga: "Ondansetrona",
      linha: "l1",
      dose: "Adulto: 4–8 mg. Criança (> 6 meses): 0,15 mg/kg (máx 4 mg IV; VO por peso: 8–15 kg 2 mg, 15–30 kg 4 mg, > 30 kg 6 mg)",
      via: "VO (comprimido orodispersível), IV lento (em 2–5 min ou diluída em 50 mL de SF em 15 min) ou IM",
      intervalo: "8/8 h (adulto); criança: dose única no PS costuma bastar",
      duracao: "1–3 dias",
      monitorizacao: "QTc em cardiopatas, cefaleia, constipação",
      contraindicacoes: "QT longo congênito; uso com apomorfina",
      ajustes: "Na RENAME (comprimido 4 e 8 mg; solução injetável 2 mg/mL). Gestação: ver ficha nauseas-vomitos-gestacao. Pode aumentar o número de evacuações na gastroenterite"
    },
    {
      droga: "Metoclopramida",
      linha: "alt",
      dose: "Adulto: 10 mg. Criança 1–18 anos: 0,1–0,15 mg/kg/dose (máx 10 mg/dose; máx 0,5 mg/kg/dia)",
      via: "VO, IM ou IV lento (em pelo menos 3 min; preferir diluída em 50–100 mL de SF em 15 min)",
      intervalo: "8/8 h",
      duracao: "Máximo 5 dias",
      monitorizacao: "Reações extrapiramidais (distonia aguda, acatisia) — tratar com difenidramina ou biperideno",
      contraindicacoes: "Menores de 1 ano; obstrução, perfuração ou hemorragia digestiva; feocromocitoma; epilepsia; doença de Parkinson",
      ajustes: "Na RENAME. Restrições da EMA (2013): evitar em crianças como 1ª escolha. Ajustar na insuficiência renal grave (reduzir dose à metade)"
    },
    {
      droga: "Bromoprida",
      linha: "alt",
      dose: "Adulto: 10 mg. Criança: 0,5–1 mg/kg/dia divididos em 3 doses",
      via: "VO, IM ou IV",
      intervalo: "8/8 h",
      duracao: "Curta (até 5 dias)",
      monitorizacao: "Reações extrapiramidais (como a metoclopramida)",
      contraindicacoes: "Menores de 1 ano (gotas), epilepsia, obstrução/hemorragia digestiva, feocromocitoma",
      ajustes: "Uso amplo no Brasil; mesmo perfil de efeitos adversos da metoclopramida"
    },
    {
      droga: "Dimenidrinato (+ piridoxina)",
      linha: "alt",
      dose: "Adulto: 50–100 mg (máx 400 mg/dia). Criança ≥ 2 anos: 1,25 mg/kg/dose (máx 75 mg/dia de 2 a 6 anos; 150 mg/dia de 6 a 12 anos)",
      via: "VO; IV (adulto: 50 mg diluídos em 10 mL de SF, em pelo menos 2 min) ou IM",
      intervalo: "4/4 a 6/6 h (adulto); 6/6 a 8/8 h (criança)",
      duracao: "1–3 dias",
      monitorizacao: "Sonolência, efeitos anticolinérgicos",
      contraindicacoes: "Menores de 2 anos; glaucoma de ângulo fechado, retenção urinária, porfiria",
      ajustes: "Útil quando há componente vestibular. Idosos: risco de delirium e quedas (critérios de Beers)"
    },
    {
      droga: "Prometazina",
      linha: "alt",
      dose: "Adulto: 12,5–25 mg",
      via: "IM profunda (preferível) ou VO",
      intervalo: "6/6 a 8/8 h",
      duracao: "Curta",
      monitorizacao: "Sedação, hipotensão",
      contraindicacoes: "Menores de 2 anos (depressão respiratória fatal); evitar IV (necrose tecidual por extravasamento)",
      ajustes: "Na RENAME. Não é 1ª escolha para vômitos na criança"
    },
    {
      droga: "Haloperidol (refratário, adulto; inclusive hiperêmese canabinoide)",
      linha: "adj",
      dose: "0,5–2 mg (até 5 mg)",
      via: "IV ou IM",
      intervalo: "Dose única; repetir em 6–8 h se necessário",
      duracao: "—",
      monitorizacao: "QTc, sintomas extrapiramidais",
      contraindicacoes: "QT longo, Parkinson, demência com corpos de Lewy",
      ajustes: "Reservar para vômitos refratários às opções acima"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO\nUSO ORAL / SUBLINGUAL\n1. Ondansetrona 4 mg comprimido orodispersível ---- 10 comprimidos\n   Dissolver 1 comprimido na boca (ou sob a língua) de 8 em 8 horas se náuseas ou vômitos, por até 3 dias.\n2. Sais para reidratação oral (SRO) --------------- 5 envelopes\n   Diluir 1 envelope em 1 litro de água filtrada ou fervida (fria). Beber em pequenos goles após cada vômito ou evacuação líquida.\n\nCRIANÇA > 6 MESES (peso: ___ kg)\n1. Ondansetrona 4 mg comprimido orodispersível ou solução oral ---- 1 caixa/frasco\n   8 a 15 kg: 2 mg (meio comprimido de 4 mg); 15 a 30 kg: 4 mg; acima de 30 kg: 6 mg (1 comprimido e meio de 4 mg) — dose única; se necessário, repetir de 8 em 8 horas por no máximo 1 a 2 dias.\n2. Sais para reidratação oral (SRO): oferecer 5 mL (1 colher de chá) a cada 1 a 2 minutos; aumentar se não vomitar. Após cada vômito ou evacuação: 50–100 mL (< 2 anos) ou 100–200 mL (2 a 10 anos).",
    hospitalar: "VÔMITOS NO PS — ADULTO\n1. Dieta zero por 1–2 h; depois líquidos claros em pequenos volumes conforme tolerância.\n2. Acesso venoso periférico se desidratação ou falha da via oral.\n3. SF 0,9% ou Ringer lactato 500–1.000 mL IV em 30–60 min; repetir conforme hidratação (cautela em cardiopatas e DRC).\n4. Ondansetrona 8 mg (4 mL de 2 mg/mL) diluída em SF 0,9% 50 mL IV em 15 minutos, de 8/8 h se necessário.\n   OU Metoclopramida 10 mg (2 mL de 5 mg/mL) diluída em SF 0,9% 50–100 mL IV em 15 minutos, de 8/8 h (máx 5 dias).\n   OU Dimenidrinato 50 mg + piridoxina (ampola IV 'DL') diluído em SF 0,9% 10 mL IV lento, de 6/6 h.\n5. Se refratário: haloperidol 1 mg IV lento (ECG com QTc antes se possível).\n6. Glicemia capilar; eletrólitos e função renal se vômitos persistentes.\n7. Reavaliar abdome e sinais vitais após 1–2 h.\n\nCRIANÇA (peso: ___ kg)\n1. Ondansetrona 0,15 mg/kg (máx 4 mg) VO ou IV diluída em SF 0,9% 10–20 mL em 15 minutos; após 15–30 min, iniciar reidratação oral (TRO).\n2. Falha da TRO ou desidratação grave: SF 0,9% ou Ringer lactato 20 mL/kg IV em 20–30 min e reavaliar (ver ficha diarreia-desidratacao)."
  },
  orientacoesRetorno: [
    "Beber líquidos em pequenos goles e com frequência; voltar à alimentação habitual assim que tolerar, sem jejum prolongado",
    "Evitar refrigerantes e sucos industrializados para hidratar; preferir o soro de reidratação oral",
    "Voltar imediatamente se: vômitos que não param ou impedem beber, vômito com sangue ou verde, dor abdominal forte, sonolência, confusão, urina muito pouca ou escura, boca muito seca, febre alta persistente, dor de cabeça forte",
    "Criança: voltar se ficar molinha, sem urinar há mais de 6–8 horas, chorar sem lágrimas ou com olhos fundos",
    "Retornar à UBS se não melhorar em 48–72 horas"
  ],
  encaminhar: [
    "Cirurgia de urgência: obstrução, abdome agudo",
    "Internação: desidratação grave ou refratária, distúrbio hidroeletrolítico importante, intolerância oral persistente"
  ],
  fontes: [
    "SBP — Departamento Científico de Gastroenterologia: Diarreia aguda — diagnóstico e tratamento (Guia Prático, 2017) e Ministério da Saúde — Manejo do paciente com diarreia (cartaz, versão vigente)",
    "ESPGHAN/ESPID — Guidelines for the Management of Acute Gastroenteritis in Children in Europe (2014; atualização 2023)",
    "Freedman SB et al. — Oral ondansetron for gastroenteritis in a pediatric emergency department (N Engl J Med, 2006)",
    "EMA — Restrictions on the use of metoclopramide (2013)",
    "Ministério da Saúde — RENAME 2024; bulas aprovadas pela Anvisa (ondansetrona, metoclopramida, dimenidrinato, prometazina)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
