/* Medicamentos: psiquiatria-neuro (ansiolíticos, antidepressivos, antipsicóticos, anticonvulsivantes).
   Formato em js/medicamentos.js e docs/ESQUEMA-MEDICAMENTOS.md.
   Receituário: benzodiazepínicos, zolpidem e fenobarbital = B1 (notificação azul);
   antidepressivos, antipsicóticos, anticonvulsivantes e lítio = C1 (controle especial, 2 vias). */

complementarMedicamentos({
  /* "isrs" da base = sertralina */
  isrs: {
    receita: "C1",
    usos: "Depressão, transtorno de ansiedade generalizada, pânico, TOC, TEPT, fobia social; ISRS de escolha na gestação e no puerpério",
    prescrever: [
      { contexto: "Adulto — início (depressão/ansiedade)", texto: "USO ORAL\n1. Sertralina 50 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1/2 comprimido (25 mg) por via oral pela manhã por 7 dias;\n   depois, 1 comprimido (50 mg) pela manhã, todos os dias.\n   (Reavaliar em 4 semanas; aumentar 50 mg a cada 1–2 semanas se necessário, máximo 200 mg/dia.)" },
      { contexto: "Adulto — manutenção 100 mg", texto: "USO ORAL\n1. Sertralina 50 mg ---------------------- 60 (sessenta) comprimidos\n   Tomar 2 comprimidos por via oral pela manhã, todos os dias." }
    ]
  },
  /* "benzodiazepinico" da base = diazepam */
  benzodiazepinico: {
    receita: "B1",
    usos: "Crise convulsiva (1ª linha IV), abstinência alcoólica, ansiedade aguda, espasmo muscular, agitação",
    prescrever: [
      { contexto: "Adulto — ansiedade (curto prazo)", texto: "USO ORAL\n1. Diazepam 5 mg ------------------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral até 2 vezes ao dia, se ansiedade intensa.\n   (Uso pelo menor tempo possível, idealmente ≤ 4 semanas; retirada gradual. Notificação B azul.)" },
      { contexto: "Adulto — abstinência alcoólica (ambulatorial, leve)", texto: "USO ORAL\n1. Diazepam 10 mg ----------------------- 20 (vinte) comprimidos\n   Tomar 1 comprimido por via oral de 6 em 6 horas nos dias 1 e 2;\n   1 comprimido de 8 em 8 horas nos dias 3 e 4;\n   1 comprimido de 12 em 12 horas nos dias 5 e 6; depois suspender.\n2. Tiamina 300 mg/dia VO.\n   (Ajustar pela escala CIWA-Ar; em hepatopatia ou idoso preferir lorazepam.)" },
      { contexto: "PS — crise convulsiva (adulto)", texto: "Diazepam 5 mg/mL — 2 mL (10 mg) IV lento, sem diluir (até 5 mg/min).\nRepetir 1 vez após 5 min se a crise persistir.\nSem acesso venoso: preferir midazolam 10 mg IM." },
      { contexto: "PS — crise convulsiva (criança)", texto: "Diazepam 5 mg/mL — ___ mL IV lento, sem diluir.\n(0,2–0,3 mg/kg/dose; máximo 10 mg; repetir 1 vez após 5 min se persistir.)\nSem acesso venoso: midazolam 0,2 mg/kg IM ou intranasal (máx 10 mg)." }
    ]
  },
  fenitoina: {
    receita: "C1",
    usos: "Estado de mal epiléptico (2ª linha, após benzodiazepínico); epilepsia focal e tônico-clônica (manutenção)",
    prescrever: [
      { contexto: "Hospitalar / PS — ataque (estado de mal)", texto: "Fenitoína 50 mg/mL — 20 mg/kg (ex.: 70 kg = 1.400 mg = 28 mL) + SF 0,9% 250 mL\nIV em bomba, velocidade máxima 50 mg/min (idoso/cardiopata: 25 mg/min).\nDiluir SOMENTE em SF 0,9% (precipita em glicose). Monitor cardíaco e PA durante a infusão." },
      { contexto: "Criança — ataque (estado de mal)", texto: "Fenitoína 50 mg/mL — ___ mL (20 mg/kg; máx 1.500 mg) diluídos em SF 0,9%\nIV em bomba a no máximo 1 mg/kg/min (máx 50 mg/min). Monitor cardíaco." },
      { contexto: "Adulto — manutenção ambulatorial", texto: "USO ORAL\n1. Fenitoína 100 mg ---------------------- 90 (noventa) comprimidos\n   Tomar 1 comprimido por via oral de 8 em 8 horas, todos os dias.\n   (Nível sérico alvo 10–20 mcg/mL.)" }
    ]
  },
  levetiracetam: {
    receita: "C1",
    usos: "Estado de mal epiléptico (2ª linha); epilepsia focal e generalizada; opção segura na gestação",
    prescrever: [
      { contexto: "Hospitalar / PS — estado de mal (adulto)", texto: "Levetiracetam 100 mg/mL — 60 mg/kg (máx 4.500 mg) + SF 0,9% 100 mL IV em 10–15 min.\nDepois: 500–1.500 mg IV ou VO de 12 em 12 horas (ajustar à função renal)." },
      { contexto: "Criança — estado de mal", texto: "Levetiracetam 100 mg/mL — ___ mL (60 mg/kg; máx 4.500 mg) diluídos em SF 0,9% IV em 10–15 min." },
      { contexto: "Adulto — manutenção ambulatorial", texto: "USO ORAL\n1. Levetiracetam 500 mg ------------------- 60 (sessenta) comprimidos\n   Tomar 1 comprimido por via oral de 12 em 12 horas.\n   (Aumentar 500 mg por dose a cada 2 semanas se necessário; máximo 1.500 mg de 12 em 12 horas.)" }
    ]
  },
  valproato: {
    receita: "C1",
    usos: "Epilepsia generalizada e focal, mania/transtorno bipolar, profilaxia de enxaqueca (evitar em mulheres em idade fértil)",
    prescrever: [
      { contexto: "Adulto — epilepsia / transtorno bipolar (ambulatorial)", texto: "USO ORAL\n1. Ácido valproico 250 mg ----------------- 120 (cento e vinte) cápsulas\n   Tomar 1 cápsula por via oral de 12 em 12 horas por 7 dias;\n   depois, 2 cápsulas de 12 em 12 horas.\n   (Titular pela resposta e nível sérico 50–100 mcg/mL; dosar TGO/TGP e plaquetas.)" },
      { contexto: "Hospitalar — estado de mal (se valproato IV disponível)", texto: "Valproato de sódio IV — 40 mg/kg (máx 3.000 mg) diluído em SF 0,9% 100 mL IV em 10 min.\n(Evitar em hepatopatia, doença mitocondrial, gestação e mulheres em idade fértil.)" }
    ]
  },
  litio: {
    receita: "C1",
    usos: "Transtorno bipolar (mania aguda e manutenção), potencialização de antidepressivo, redução de risco de suicídio",
    prescrever: [
      { contexto: "Adulto — início (ambulatorial)", texto: "USO ORAL\n1. Carbonato de lítio 300 mg --------------- 60 (sessenta) comprimidos\n   Tomar 1 comprimido por via oral de 12 em 12 horas.\n   (Litemia 5–7 dias após início ou ajuste, colhida 12 h após a última dose:\n   alvo 0,6–1,0 mEq/L na manutenção e 0,8–1,2 mEq/L na mania.\n   Antes de iniciar: creatinina, TSH, cálcio, β-hCG e ECG se > 40 anos ou cardiopata.)" }
    ]
  }
});

adicionarMedicamentos([
  /* ================= ANSIOLÍTICOS E HIPNÓTICOS (B1) ================= */
  { id: "clonazepam", nomes: ["Clonazepam"], classe: "ansioliticos", receita: "B1", tags: ["benzo", "sedativo"],
    usos: "Transtorno de pânico, ansiedade, crises epilépticas (adjuvante), acatisia",
    apres: [{ rotulo: "comprimido 0,5 mg", mgPorComp: 0.5 }, { rotulo: "comprimido 2 mg", mgPorComp: 2 }, { rotulo: "gotas 2,5 mg/mL (0,1 mg/gota)", mgPorMl: 2.5, mgPorGota: 0.1 }],
    adulto: "Pânico/ansiedade: 0,25–0,5 mg VO 2×/dia, alvo 1–2 mg/dia (máx habitual 4 mg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Evitar uso crônico, sobretudo no 3º trimestre (hipotonia e abstinência neonatal); usar a menor dose." },
    alergia: [],
    contra: ["Insuficiência respiratória grave, apneia do sono", "Miastenia gravis", "Hepatopatia grave", "Idosos (quedas, delirium)", "Álcool e opioides (depressão respiratória)", "Retirada gradual (risco de abstinência e convulsão)"],
    prescrever: [
      { contexto: "Adulto — comprimido", texto: "USO ORAL\n1. Clonazepam 0,5 mg --------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite.\n   (Notificação B azul. Associar ao ISRS no pânico e retirar gradualmente após 4–8 semanas.)" },
      { contexto: "Adulto — gotas", texto: "USO ORAL\n1. Clonazepam 2,5 mg/mL gotas --------------- 1 (um) frasco\n   Tomar 5 gotas (0,5 mg) por via oral à noite.\n   (1 gota = 0,1 mg.)" }
    ] },

  { id: "alprazolam", nomes: ["Alprazolam"], classe: "ansioliticos", receita: "B1", tags: ["benzo", "sedativo"],
    usos: "Transtorno de ansiedade e transtorno de pânico (uso de curto prazo)",
    apres: [{ rotulo: "comprimido 0,25 mg", mgPorComp: 0.25 }, { rotulo: "comprimido 0,5 mg", mgPorComp: 0.5 }, { rotulo: "comprimido 1 mg", mgPorComp: 1 }, { rotulo: "comprimido 2 mg", mgPorComp: 2 }],
    adulto: "Ansiedade: 0,25–0,5 mg VO 3×/dia (máx 4 mg/dia); idoso iniciar 0,25 mg 2–3×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Evitar uso crônico, sobretudo perto do parto (abstinência e hipotonia neonatal)." },
    alergia: [],
    contra: ["Uso de cetoconazol ou itraconazol (contraindicado)", "Insuficiência respiratória grave, apneia do sono", "Miastenia gravis", "Idosos", "Meia-vida curta: maior risco de dependência e rebote; retirada lenta"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Alprazolam 0,25 mg --------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral até 2 vezes ao dia, se ansiedade intensa.\n   (Notificação B azul; uso de curto prazo com retirada gradual.)" }
    ] },

  { id: "lorazepam", nomes: ["Lorazepam"], classe: "ansioliticos", receita: "B1", tags: ["benzo", "sedativo"],
    usos: "Ansiedade, insônia de curto prazo, abstinência alcoólica em hepatopata ou idoso (sem metabólitos ativos)",
    apres: [{ rotulo: "comprimido 1 mg", mgPorComp: 1 }, { rotulo: "comprimido 2 mg", mgPorComp: 2 }],
    adulto: "Ansiedade: 1–3 mg/dia VO em 2–3 tomadas (máx 10 mg/dia) · insônia: 1–2 mg ao deitar",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Evitar uso crônico, sobretudo perto do parto (abstinência e hipotonia neonatal)." },
    alergia: [],
    contra: ["Insuficiência respiratória grave, apneia do sono", "Miastenia gravis", "Idosos: iniciar com metade da dose", "Álcool e opioides (depressão respiratória)"],
    prescrever: [
      { contexto: "Adulto — ansiedade", texto: "USO ORAL\n1. Lorazepam 1 mg ------------------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite; se necessário, mais 1 comprimido durante o dia.\n   (Notificação B azul; uso de curto prazo.)" },
      { contexto: "Abstinência alcoólica — hepatopata ou idoso", texto: "USO ORAL\n1. Lorazepam 2 mg ------------------------ 20 (vinte) comprimidos\n   Tomar 1 comprimido por via oral de 6 em 6 horas nos dias 1 e 2;\n   depois reduzir gradualmente conforme sintomas (escala CIWA-Ar).\n2. Tiamina 300 mg/dia VO." }
    ] },

  { id: "bromazepam", nomes: ["Bromazepam"], classe: "ansioliticos", receita: "B1", tags: ["benzo", "sedativo"],
    usos: "Ansiedade (uso de curto prazo)",
    apres: [{ rotulo: "comprimido 3 mg", mgPorComp: 3 }, { rotulo: "comprimido 6 mg", mgPorComp: 6 }, { rotulo: "gotas 2,5 mg/mL (0,1 mg/gota)", mgPorMl: 2.5, mgPorGota: 0.1 }],
    adulto: "1,5–3 mg VO até 3×/dia; idoso iniciar com metade da dose",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Evitar uso crônico, sobretudo perto do parto (abstinência e hipotonia neonatal)." },
    alergia: [],
    contra: ["Insuficiência respiratória grave, apneia do sono", "Miastenia gravis", "Hepatopatia grave", "Idosos (quedas)", "Álcool e opioides"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Bromazepam 3 mg ----------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite.\n   (Notificação B azul; uso de curto prazo com retirada gradual.)" }
    ] },

  { id: "midazolam", nomes: ["Midazolam"], classe: "ansioliticos", receita: "B1", tags: ["benzo", "sedativo"],
    usos: "Crise convulsiva sem acesso venoso (IM/intranasal), agitação psicomotora, sedação para procedimento, sedação em IOT/UTI",
    ped: { dose: 0.2, faixa: "Crise convulsiva: 0,2 mg/kg IM ou intranasal", intervalo: "dose única; repetir 1× após 5–10 min se persistir", maxDose: 10 },
    apres: [{ rotulo: "injetável 5 mg/mL (ampolas 3 e 10 mL)", mgPorMl: 5 }, { rotulo: "injetável 1 mg/mL (ampola 5 mL)", mgPorMl: 1 }, { rotulo: "comprimido 15 mg", mgPorComp: 15 }],
    adulto: "Crise convulsiva: 10 mg IM (> 40 kg) · agitação: 5 mg IM · sedação: 1–2,5 mg IV lento, titulando",
    renal: [{ abaixo: 30, texto: "Metabólito ativo acumula em infusão contínua: reduzir dose e titular pela sedação." }],
    gestacao: { nivel: "cautela", texto: "Uso agudo (convulsão, procedimento) é aceitável; evitar uso prolongado perto do parto." },
    alergia: [],
    contra: ["Depressão respiratória: ter bolsa-válvula-máscara e oxímetro", "Hipotensão/choque", "Idosos: doses menores (≤ 1–1,5 mg IV por vez)", "Inibidores fortes de CYP3A4 (azóis, claritromicina) prolongam o efeito", "Antídoto: flumazenil"],
    prescrever: [
      { contexto: "PS — crise convulsiva sem acesso venoso (adulto)", texto: "Midazolam 5 mg/mL — 2 mL (10 mg) IM no vasto lateral, dose única.\n(13–40 kg: 5 mg IM.) Repetir 1 vez após 5–10 min se a crise persistir." },
      { contexto: "PS — crise convulsiva (criança, IM ou intranasal)", texto: "Midazolam 5 mg/mL — ___ mL IM ou intranasal (dividir entre as narinas, com atomizador).\n(0,2 mg/kg; máximo 10 mg; repetir 1 vez após 5–10 min se persistir.)" },
      { contexto: "PS — agitação psicomotora (adulto)", texto: "Midazolam 5 mg/mL — 1 mL (5 mg) IM.\nPode associar haloperidol 5 mg IM. Monitorar SpO2 e nível de consciência." },
      { contexto: "Hospitalar — sedação contínua", texto: "Midazolam 5 mg/mL — 30 mL (150 mg) + SF 0,9% 120 mL (solução 1 mg/mL)\nIV em bomba de infusão: iniciar 0,02–0,1 mg/kg/h e titular pela escala RASS." }
    ] },

  { id: "zolpidem", nomes: ["Zolpidem"], classe: "ansioliticos", receita: "B1", tags: ["sedativo", "benzo"],
    usos: "Insônia de início do sono (uso de curto prazo, após higiene do sono/TCC-I)",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido sublingual 5 mg", mgPorComp: 5 }],
    adulto: "5–10 mg VO ao deitar (mulheres e idosos: 5 mg; máx 10 mg/dia), por até 4 semanas",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; evitar perto do parto (sedação e abstinência neonatal)." },
    alergia: [],
    contra: ["Comportamentos complexos do sono (sonambulismo, dirigir dormindo): suspender", "Insuficiência hepática grave, apneia do sono, miastenia", "Álcool, opioides e outros sedativos", "Tomar só se puder dormir 7–8 h (sonolência no dia seguinte)", "Desde 2024 exige notificação B azul para todas as doses"],
    prescrever: [
      { contexto: "Adulto — insônia", texto: "USO ORAL\n1. Zolpidem 10 mg ------------------------ 14 (quatorze) comprimidos\n   Tomar 1/2 a 1 comprimido por via oral imediatamente ao deitar, se necessário.\n   (Mulheres e idosos: 5 mg. Notificação B azul; uso por até 4 semanas.)" }
    ] },

  /* ================= ANTIDEPRESSIVOS (C1) ================= */
  { id: "fluoxetina", nomes: ["Fluoxetina"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico"],
    usos: "Depressão, ansiedade, pânico, TOC, bulimia; depressão em adolescentes",
    apres: [{ rotulo: "cápsula/comprimido 20 mg", mgPorComp: 20 }, { rotulo: "solução oral 20 mg/mL (gotas)", mgPorMl: 20 }],
    adulto: "20 mg VO pela manhã; aumentar até 40–60 mg/dia se necessário (bulimia 60 mg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser mantida se necessária; meia-vida longa (preferir sertralina se iniciar na gestação/lactação)." },
    alergia: [],
    contra: ["Uso de IMAO (intervalo de 5 semanas após suspender a fluoxetina)", "Inibe CYP2D6 (reduz efeito do tamoxifeno; aumenta tricíclicos)", "Risco de virada maníaca no bipolar", "Ideação suicida em < 25 anos no início: reavaliar em 1–2 semanas"],
    prescrever: [
      { contexto: "Adulto — depressão/ansiedade", texto: "USO ORAL\n1. Fluoxetina 20 mg ---------------------- 30 (trinta) cápsulas\n   Tomar 1 cápsula por via oral pela manhã, todos os dias.\n   (Reavaliar em 4 semanas; pode aumentar para 40 mg/dia.)" }
    ] },

  { id: "escitalopram", nomes: ["Escitalopram"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico", "qt"],
    usos: "Depressão, transtorno de ansiedade generalizada, pânico, fobia social",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 20 mg", mgPorComp: 20 }, { rotulo: "gotas 20 mg/mL (1 mg/gota)", mgPorMl: 20, mgPorGota: 1 }],
    adulto: "10 mg VO 1×/dia (iniciar 5 mg no pânico); máx 20 mg/dia (idoso máx 10 mg/dia)",
    renal: [{ abaixo: 30, texto: "Usar com cautela (poucos dados)." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usado se necessário; sertralina é a preferida." },
    alergia: [],
    contra: ["QT longo congênito ou adquirido; outros fármacos que prolongam o QT", "Uso de IMAO", "Hepatopatia: máx 10 mg/dia"],
    prescrever: [
      { contexto: "Adulto — depressão/ansiedade", texto: "USO ORAL\n1. Escitalopram 10 mg -------------------- 30 (trinta) comprimidos\n   Tomar 1/2 comprimido (5 mg) por via oral pela manhã por 7 dias;\n   depois, 1 comprimido pela manhã, todos os dias." }
    ] },

  { id: "citalopram", nomes: ["Citalopram"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico", "qt"],
    usos: "Depressão, pânico",
    apres: [{ rotulo: "comprimido 20 mg", mgPorComp: 20 }],
    adulto: "20 mg VO 1×/dia; máx 40 mg/dia (> 60 anos ou hepatopatia: máx 20 mg/dia)",
    renal: [{ abaixo: 30, texto: "Usar com cautela (poucos dados)." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usado se necessário; sertralina é a preferida." },
    alergia: [],
    contra: ["QT longo (efeito dose-dependente); hipocalemia/hipomagnesemia", "Uso de IMAO"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Citalopram 20 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral pela manhã, todos os dias." }
    ] },

  { id: "paroxetina", nomes: ["Paroxetina"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico", "anticolinergico"],
    usos: "Depressão, pânico, TOC, ansiedade generalizada, fobia social, TEPT",
    apres: [{ rotulo: "comprimido 20 mg", mgPorComp: 20 }],
    adulto: "20 mg VO pela manhã; aumentar 10 mg/semana até 50 mg/dia (pânico/TOC até 60 mg/dia)",
    renal: [{ abaixo: 30, texto: "Iniciar 10 mg/dia; máximo 40 mg/dia." }],
    gestacao: { nivel: "evitar", texto: "Associada a malformação cardíaca no 1º trimestre: evitar; preferir sertralina." },
    alergia: [],
    contra: ["Uso de IMAO", "Síndrome de descontinuação intensa: retirar devagar", "Efeito anticolinérgico: evitar em idosos", "Inibe CYP2D6 (tamoxifeno)"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Paroxetina 20 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral pela manhã, todos os dias." }
    ] },

  { id: "amitriptilina", nomes: ["Amitriptilina"], classe: "antidepressivos", receita: "C1", tags: ["serotoninergico", "anticolinergico", "sedativo", "qt"],
    usos: "Dor neuropática, profilaxia de enxaqueca e cefaleia tensional, fibromialgia, insônia associada à dor; depressão (2ª linha)",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 75 mg", mgPorComp: 75 }],
    adulto: "Dor/enxaqueca: 10–25 mg VO à noite, até 75 mg · depressão: 25–50 mg à noite, até 150 mg/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; observar sintomas de abstinência no recém-nascido." },
    alergia: [],
    contra: ["IAM recente, arritmia, BAV, QT longo", "Glaucoma de ângulo fechado, retenção urinária, HPB", "Idosos (anticolinérgico, quedas — critérios de Beers)", "Uso de IMAO", "Risco de suicídio: alta letalidade na intoxicação, dispensar pequenas quantidades"],
    prescrever: [
      { contexto: "Adulto — dor neuropática / profilaxia de enxaqueca", texto: "USO ORAL\n1. Amitriptilina 25 mg -------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite, 1–2 horas antes de deitar.\n   (Pode iniciar com 1/2 comprimido; aumentar 25 mg a cada 1–2 semanas, máximo 75 mg para dor.)" },
      { contexto: "Adulto — depressão", texto: "USO ORAL\n1. Amitriptilina 25 mg -------------------- 60 (sessenta) comprimidos\n   Tomar 1 comprimido por via oral à noite por 7 dias; depois, 2 comprimidos à noite.\n   (Aumentar conforme resposta até 150 mg/dia; ECG se > 40 anos ou cardiopata.)" }
    ] },

  { id: "nortriptilina", nomes: ["Nortriptilina"], classe: "antidepressivos", receita: "C1", tags: ["serotoninergico", "anticolinergico", "sedativo", "qt"],
    usos: "Depressão, dor neuropática, cessação do tabagismo (2ª linha); menos anticolinérgica que a amitriptilina",
    apres: [{ rotulo: "cápsula 10 mg", mgPorComp: 10 }, { rotulo: "cápsula 25 mg", mgPorComp: 25 }, { rotulo: "cápsula 50 mg", mgPorComp: 50 }, { rotulo: "cápsula 75 mg", mgPorComp: 75 }],
    adulto: "Depressão: 25 mg VO à noite, até 75–100 mg/dia (máx 150 mg) · dor: 10–25 mg à noite, até 75 mg",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; observar sintomas de abstinência no recém-nascido." },
    alergia: [],
    contra: ["IAM recente, arritmia, BAV, QT longo", "Glaucoma de ângulo fechado, retenção urinária", "Uso de IMAO", "Alta letalidade na intoxicação"],
    prescrever: [
      { contexto: "Adulto — depressão", texto: "USO ORAL\n1. Nortriptilina 25 mg ------------------- 60 (sessenta) cápsulas\n   Tomar 1 cápsula por via oral à noite por 7 dias; depois, 2 cápsulas à noite.\n   (Aumentar até 75–100 mg/dia conforme resposta; ECG se > 40 anos ou cardiopata.)" },
      { contexto: "Adulto — dor neuropática", texto: "USO ORAL\n1. Nortriptilina 10 mg ------------------- 30 (trinta) cápsulas\n   Tomar 1 cápsula por via oral à noite.\n   (Aumentar a cada 1–2 semanas conforme dor e tolerância, até 75 mg.)" }
    ] },

  { id: "bupropiona", nomes: ["Bupropiona", "anfebutamona"], classe: "antidepressivos", receita: "C1", tags: ["convulsivante"],
    usos: "Cessação do tabagismo (PCDT/SUS), depressão (sem disfunção sexual ou ganho de peso)",
    apres: [{ rotulo: "comprimido de liberação prolongada 150 mg", mgPorComp: 150 }, { rotulo: "comprimido XL 300 mg", mgPorComp: 300 }],
    adulto: "Tabagismo: 150 mg 1×/dia por 3 dias, depois 150 mg 2×/dia (intervalo ≥ 8 h) · depressão: 150–300 mg/dia",
    renal: [{ abaixo: 60, texto: "Reduzir dose ou frequência (ex.: 150 mg/dia)." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; na gestação priorizar abordagem não farmacológica do tabagismo." },
    alergia: [],
    contra: ["Epilepsia ou fatores que reduzem o limiar convulsivo", "Bulimia ou anorexia nervosa", "Suspensão abrupta de álcool ou benzodiazepínico", "Uso de IMAO", "HAS não controlada (pode elevar PA)", "Hepatopatia grave"],
    prescrever: [
      { contexto: "Adulto — cessação do tabagismo", texto: "USO ORAL\n1. Bupropiona 150 mg (liberação prolongada) --- 60 (sessenta) comprimidos\n   Tomar 1 comprimido pela manhã por 3 dias;\n   depois, 1 comprimido pela manhã e 1 comprimido às 16 h (intervalo mínimo de 8 horas).\n   Marcar o dia de parar de fumar entre o 8º e o 14º dia. Tratamento por 12 semanas." },
      { contexto: "Adulto — depressão", texto: "USO ORAL\n1. Bupropiona 150 mg (liberação prolongada) --- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral pela manhã.\n   (Após 4 semanas pode aumentar para 300 mg/dia.)" }
    ] },

  { id: "venlafaxina", nomes: ["Venlafaxina"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico"],
    usos: "Depressão, ansiedade generalizada, pânico, fobia social, sintomas vasomotores da menopausa",
    apres: [{ rotulo: "cápsula de liberação prolongada 37,5 mg", mgPorComp: 37.5 }, { rotulo: "cápsula de liberação prolongada 75 mg", mgPorComp: 75 }, { rotulo: "cápsula de liberação prolongada 150 mg", mgPorComp: 150 }],
    adulto: "75 mg/dia VO (iniciar 37,5 mg por 4–7 dias); até 225 mg/dia ambulatorial",
    renal: [{ abaixo: 30, texto: "Reduzir a dose em 50%." }, { abaixo: 90, texto: "Reduzir a dose em 25–50%." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; preferir sertralina." },
    alergia: [],
    contra: ["HAS não controlada (eleva PA dose-dependente): medir PA", "Uso de IMAO", "Síndrome de descontinuação intensa: retirar devagar"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Venlafaxina 75 mg (liberação prolongada) --- 30 (trinta) cápsulas\n   Tomar 1 cápsula por via oral pela manhã, junto com alimento.\n   (Iniciar com 37,5 mg por 4–7 dias se paciente sensível.)" }
    ] },

  { id: "desvenlafaxina", nomes: ["Desvenlafaxina"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico"],
    usos: "Depressão maior",
    apres: [{ rotulo: "comprimido de liberação prolongada 50 mg", mgPorComp: 50 }, { rotulo: "comprimido de liberação prolongada 100 mg", mgPorComp: 100 }],
    adulto: "50 mg VO 1×/dia (doses maiores raramente trazem benefício adicional)",
    renal: [{ abaixo: 30, texto: "25 mg/dia ou 50 mg em dias alternados." }, { abaixo: 50, texto: "Máximo 50 mg/dia." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir sertralina." },
    alergia: [],
    contra: ["HAS não controlada", "Uso de IMAO", "Não partir nem mastigar o comprimido", "Retirada gradual"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Desvenlafaxina 50 mg ------------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido inteiro por via oral pela manhã, todos os dias." }
    ] },

  { id: "duloxetina", nomes: ["Duloxetina"], classe: "antidepressivos", receita: "C1", tags: ["isrs", "serotoninergico"],
    usos: "Depressão, ansiedade generalizada, dor neuropática diabética, fibromialgia, dor musculoesquelética crônica",
    apres: [{ rotulo: "cápsula 30 mg", mgPorComp: 30 }, { rotulo: "cápsula 60 mg", mgPorComp: 60 }],
    adulto: "60 mg VO 1×/dia (iniciar 30 mg por 1–2 semanas); ansiedade até 120 mg/dia",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir sertralina." },
    alergia: [],
    contra: ["Hepatopatia ou etilismo pesado (hepatotoxicidade)", "Glaucoma de ângulo fechado não controlado", "Uso de IMAO", "Não abrir a cápsula; retirada gradual"],
    prescrever: [
      { contexto: "Adulto — dor neuropática / depressão", texto: "USO ORAL\n1. Duloxetina 30 mg ---------------------- 14 (quatorze) cápsulas\n   Tomar 1 cápsula por via oral pela manhã por 14 dias.\n2. Duloxetina 60 mg ---------------------- 30 (trinta) cápsulas\n   Depois, tomar 1 cápsula por via oral pela manhã, todos os dias." }
    ] },

  { id: "mirtazapina", nomes: ["Mirtazapina"], classe: "antidepressivos", receita: "C1", tags: ["serotoninergico", "sedativo"],
    usos: "Depressão com insônia, inapetência ou perda de peso; idosos; alternativa quando há disfunção sexual por ISRS",
    apres: [{ rotulo: "comprimido 15 mg", mgPorComp: 15 }, { rotulo: "comprimido 30 mg", mgPorComp: 30 }, { rotulo: "comprimido 45 mg", mgPorComp: 45 }],
    adulto: "15 mg VO ao deitar; aumentar até 30–45 mg/dia",
    renal: [{ abaixo: 40, texto: "Depuração reduzida: usar com cautela e titular devagar." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária." },
    alergia: [],
    contra: ["Uso de IMAO", "Ganho de peso e sonolência", "Agranulocitose rara: hemograma se febre ou dor de garganta"],
    prescrever: [
      { contexto: "Adulto", texto: "USO ORAL\n1. Mirtazapina 15 mg --------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral ao deitar, todos os dias." }
    ] },

  { id: "trazodona", nomes: ["Trazodona"], classe: "antidepressivos", receita: "C1", tags: ["serotoninergico", "sedativo", "qt"],
    usos: "Insônia (dose baixa), depressão com insônia",
    apres: [{ rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "comprimido de liberação prolongada 150 mg", mgPorComp: 150 }],
    adulto: "Insônia: 25–50 mg VO ao deitar (até 100 mg) · depressão: 150 mg/dia, aumentar até 300 mg/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se necessária." },
    alergia: [],
    contra: ["Priapismo (orientar: procurar emergência)", "IAM recente, arritmia, QT longo", "Hipotensão ortostática em idosos", "Uso de IMAO"],
    prescrever: [
      { contexto: "Adulto — insônia", texto: "USO ORAL\n1. Trazodona 50 mg ----------------------- 30 (trinta) comprimidos\n   Tomar 1/2 a 1 comprimido por via oral ao deitar." },
      { contexto: "Adulto — depressão", texto: "USO ORAL\n1. Trazodona 50 mg ----------------------- 90 (noventa) comprimidos\n   Tomar 1 comprimido ao deitar por 3 dias; depois, 3 comprimidos (150 mg) ao deitar.\n   (Aumentar conforme resposta até 300 mg/dia.)" }
    ] },

  /* ================= ANTIPSICÓTICOS (C1) ================= */
  { id: "haloperidol", nomes: ["Haloperidol", "decanoato de haloperidol"], classe: "antipsicoticos", receita: "C1", tags: ["qt", "antidopaminergico"],
    usos: "Agitação psicomotora, psicose aguda e esquizofrenia, delirium hiperativo, náusea refratária em cuidados paliativos",
    apres: [{ rotulo: "injetável 5 mg/mL", mgPorMl: 5 }, { rotulo: "gotas 2 mg/mL (0,1 mg/gota)", mgPorMl: 2, mgPorGota: 0.1 }, { rotulo: "comprimido 1 mg", mgPorComp: 1 }, { rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "decanoato 50 mg/mL (IM de depósito)", mgPorMl: 50 }],
    adulto: "Agitação: 5 mg IM, repetir em 30–60 min se necessário · psicose: 2–10 mg/dia VO · delirium em idoso: 0,5–1 mg",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usado se necessário; sintomas extrapiramidais e de abstinência no recém-nascido se usado no 3º trimestre." },
    alergia: [],
    contra: ["Doença de Parkinson e demência com corpos de Lewy", "QT longo, hipocalemia; ECG se doses repetidas", "Sintomas extrapiramidais (distonia aguda: biperideno ou prometazina)", "Síndrome neuroléptica maligna", "Idoso com demência: aumento de mortalidade"],
    prescrever: [
      { contexto: "PS — agitação psicomotora (adulto)", texto: "Haloperidol 5 mg/mL — 1 mL (5 mg) IM.\nPode associar prometazina 50 mg IM ou midazolam 5 mg IM.\nRepetir em 30–60 min se necessário. Monitorar sinais vitais, ECG se doses repetidas." },
      { contexto: "Adulto — psicose (ambulatorial)", texto: "USO ORAL\n1. Haloperidol 5 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite.\n   (Ajustar conforme resposta; observar sintomas extrapiramidais.)" },
      { contexto: "Idoso — delirium (gotas)", texto: "USO ORAL\n1. Haloperidol 2 mg/mL gotas --------------- 1 (um) frasco\n   Tomar 5 gotas (0,5 mg) por via oral até 2 vezes ao dia, se agitação.\n   (1 gota = 0,1 mg. Tratar a causa do delirium; menor tempo possível.)" },
      { contexto: "Manutenção — decanoato (depósito)", texto: "Decanoato de haloperidol 50 mg/mL — ___ mL IM profundo no glúteo a cada 4 semanas.\n(Dose mensal ≈ 10–15 vezes a dose oral diária de haloperidol; 1ª dose até 100 mg.)" }
    ] },

  { id: "clorpromazina", nomes: ["Clorpromazina"], classe: "antipsicoticos", receita: "C1", tags: ["qt", "antidopaminergico", "sedativo", "anticolinergico", "convulsivante"],
    usos: "Psicose e agitação (antipsicótico sedativo), soluço refratário, náusea/vômito refratários",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "gotas 40 mg/mL (1 mg/gota)", mgPorMl: 40, mgPorGota: 1 }, { rotulo: "injetável 5 mg/mL (ampola 5 mL = 25 mg)", mgPorMl: 5 }],
    adulto: "Psicose: 25–100 mg VO 2–3×/dia (dose habitual 300–600 mg/dia) · agitação: 25–50 mg IM · soluço: 25–50 mg VO 3–4×/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; sintomas extrapiramidais e sedação no recém-nascido se usada no 3º trimestre." },
    alergia: [],
    contra: ["Hipotensão ortostática importante (IM: paciente deitado, monitorar PA)", "Reduz o limiar convulsivo", "Glaucoma de ângulo fechado, retenção urinária", "QT longo", "Parkinson, idoso com demência", "Fotossensibilidade"],
    prescrever: [
      { contexto: "PS — agitação psicomotora (adulto)", texto: "Clorpromazina 5 mg/mL — 5 mL (25 mg) IM profundo, paciente deitado.\nMonitorar PA (hipotensão). Repetir após 1 hora se necessário." },
      { contexto: "Adulto — psicose (ambulatorial)", texto: "USO ORAL\n1. Clorpromazina 100 mg ------------------ 60 (sessenta) comprimidos\n   Tomar 1 comprimido por via oral de 12 em 12 horas.\n   (Iniciar com doses menores e titular conforme resposta e PA.)" },
      { contexto: "Adulto — soluço refratário", texto: "USO ORAL\n1. Clorpromazina 25 mg ------------------- 20 (vinte) comprimidos\n   Tomar 1 comprimido por via oral de 8 em 8 horas por até 7 dias." }
    ] },

  { id: "quetiapina", nomes: ["Quetiapina"], classe: "antipsicoticos", receita: "C1", tags: ["qt", "sedativo"],
    usos: "Esquizofrenia, mania e depressão bipolar, psicose na doença de Parkinson e em idosos (dose baixa)",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "comprimido 200 mg", mgPorComp: 200 }, { rotulo: "comprimido 300 mg", mgPorComp: 300 }],
    adulto: "Esquizofrenia: titular até 300–750 mg/dia · mania: 400–800 mg/dia · depressão bipolar: 300 mg ao deitar · idoso: 12,5–25 mg",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; monitorar glicemia (diabetes gestacional)." },
    alergia: [],
    contra: ["Hipotensão ortostática (titular devagar)", "Síndrome metabólica: peso, glicemia e lipídios", "QT longo", "Idoso com demência: aumento de mortalidade", "Inibidores fortes de CYP3A4 aumentam o nível"],
    prescrever: [
      { contexto: "Adulto — depressão bipolar", texto: "USO ORAL\n1. Quetiapina 100 mg --------------------- 90 (noventa) comprimidos\n   Tomar ao deitar: 1/2 comprimido no dia 1, 1 comprimido no dia 2,\n   2 comprimidos no dia 3 e 3 comprimidos (300 mg) a partir do dia 4." },
      { contexto: "Idoso — agitação/psicose (dose baixa)", texto: "USO ORAL\n1. Quetiapina 25 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1/2 a 1 comprimido por via oral à noite.\n   (Reavaliar necessidade com frequência; tratar a causa.)" }
    ] },

  { id: "risperidona", nomes: ["Risperidona"], classe: "antipsicoticos", receita: "C1", tags: ["qt", "antidopaminergico"],
    usos: "Esquizofrenia, mania bipolar, irritabilidade/agressividade no TEA (criança), agitação em demência (curto prazo)",
    apres: [{ rotulo: "comprimido 1 mg", mgPorComp: 1 }, { rotulo: "comprimido 2 mg", mgPorComp: 2 }, { rotulo: "comprimido 3 mg", mgPorComp: 3 }, { rotulo: "solução oral 1 mg/mL", mgPorMl: 1 }],
    adulto: "Esquizofrenia: 2 mg/dia, aumentar até 4–6 mg/dia · mania: 2–3 mg/dia (até 6 mg) · idoso: 0,25–0,5 mg 2×/dia",
    renal: [{ abaixo: 30, texto: "Iniciar 0,5 mg 2×/dia e aumentar 0,5 mg por dose, devagar." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; sintomas extrapiramidais no recém-nascido se usada no 3º trimestre." },
    alergia: [],
    contra: ["Hiperprolactinemia (galactorreia, amenorreia)", "Sintomas extrapiramidais em doses altas", "Ganho de peso, síndrome metabólica", "Idoso com demência: aumento de mortalidade e AVC"],
    prescrever: [
      { contexto: "Adulto — esquizofrenia", texto: "USO ORAL\n1. Risperidona 2 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite.\n   (Aumentar conforme resposta até 4–6 mg/dia.)" },
      { contexto: "Criança — TEA com irritabilidade (≥ 5 anos)", texto: "USO ORAL\n1. Risperidona 1 mg/mL solução oral ------------ 1 (um) frasco\n   Dar 0,25 mL (0,25 mg) por via oral 1 vez ao dia se < 20 kg; 0,5 mL (0,5 mg) se ≥ 20 kg.\n   (Ajuste e seguimento com especialista.)" }
    ] },

  { id: "olanzapina", nomes: ["Olanzapina"], classe: "antipsicoticos", receita: "C1", tags: ["sedativo", "anticolinergico", "antidopaminergico"],
    usos: "Esquizofrenia, mania bipolar, agitação psicomotora, náusea refratária (paliativos/quimioterapia)",
    apres: [{ rotulo: "comprimido 2,5 mg", mgPorComp: 2.5 }, { rotulo: "comprimido 5 mg", mgPorComp: 5 }, { rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "injetável IM 10 mg (pó)" }],
    adulto: "Esquizofrenia: 10 mg/dia VO (5–20 mg) · mania: 10–15 mg/dia · agitação: 10 mg VO ou IM",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada se necessária; monitorar glicemia e peso." },
    alergia: [],
    contra: ["Não associar benzodiazepínico parenteral à olanzapina IM (hipotensão, depressão respiratória)", "Síndrome metabólica: peso, glicemia e lipídios", "Glaucoma de ângulo fechado", "Idoso com demência: aumento de mortalidade"],
    prescrever: [
      { contexto: "Adulto — esquizofrenia/mania", texto: "USO ORAL\n1. Olanzapina 10 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite, todos os dias." },
      { contexto: "PS — agitação (adulto)", texto: "Olanzapina 10 mg VO (comprimido ou orodispersível) ou 10 mg IM.\nNão associar benzodiazepínico IM/IV em menos de 1 hora." }
    ] },

  { id: "aripiprazol", nomes: ["Aripiprazol"], classe: "antipsicoticos", receita: "C1", tags: ["antidopaminergico"],
    usos: "Esquizofrenia, mania bipolar, potencialização na depressão; menor efeito metabólico e sobre prolactina",
    apres: [{ rotulo: "comprimido 10 mg", mgPorComp: 10 }, { rotulo: "comprimido 15 mg", mgPorComp: 15 }, { rotulo: "comprimido 20 mg", mgPorComp: 20 }, { rotulo: "comprimido 30 mg", mgPorComp: 30 }],
    adulto: "Esquizofrenia: 10–15 mg/dia (máx 30) · mania: 15 mg/dia · adjuvante na depressão: 2–5 mg/dia (máx 15)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se necessário." },
    alergia: [],
    contra: ["Acatisia (comum)", "Comportamento impulsivo (jogo, compras)", "Idoso com demência: aumento de mortalidade", "Inibidores de CYP2D6/CYP3A4 exigem metade da dose"],
    prescrever: [
      { contexto: "Adulto — esquizofrenia/mania", texto: "USO ORAL\n1. Aripiprazol 15 mg --------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral pela manhã, todos os dias." }
    ] },

  /* ================= ANTICONVULSIVANTES E ESTABILIZADORES (C1; fenobarbital B1) ================= */
  { id: "carbamazepina", nomes: ["Carbamazepina"], classe: "anticonvulsivantes", receita: "C1", tags: ["indutor"],
    usos: "Epilepsia focal, neuralgia do trigêmeo, transtorno bipolar (alternativa)",
    apres: [{ rotulo: "comprimido 200 mg", mgPorComp: 200 }, { rotulo: "comprimido de liberação prolongada 400 mg", mgPorComp: 400 }, { rotulo: "suspensão oral 20 mg/mL", mgPorMl: 20 }],
    adulto: "Epilepsia: 200 mg 2×/dia, aumentar 200 mg/semana até 800–1.200 mg/dia (máx 1.600) · trigêmeo: 100–200 mg 2×/dia até controle (máx 1.200 mg/dia)",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Teratogênica (defeito de tubo neural); se necessária, menor dose e ácido fólico." },
    alergia: [],
    contra: ["Stevens-Johnson/NET (HLA-B*1502 em asiáticos)", "Hiponatremia, agranulocitose, hepatotoxicidade: hemograma, sódio e TGO/TGP", "BAV", "Indutor potente: anticoncepcional hormonal, varfarina e DOAC perdem efeito", "Uso de IMAO"],
    prescrever: [
      { contexto: "Adulto — epilepsia", texto: "USO ORAL\n1. Carbamazepina 200 mg ------------------ 60 (sessenta) comprimidos\n   Tomar 1 comprimido por via oral de 12 em 12 horas.\n   (Aumentar 200 mg por semana conforme crises e tolerância; nível sérico 4–12 mcg/mL.)" },
      { contexto: "Adulto — neuralgia do trigêmeo", texto: "USO ORAL\n1. Carbamazepina 200 mg ------------------ 60 (sessenta) comprimidos\n   Tomar 1/2 comprimido por via oral de 12 em 12 horas;\n   aumentar 1/2 comprimido a cada 3 dias até controle da dor (habitual 600–800 mg/dia)." }
    ] },

  { id: "oxcarbazepina", nomes: ["Oxcarbazepina"], classe: "anticonvulsivantes", receita: "C1", tags: ["indutor"],
    usos: "Epilepsia focal (mono ou adjuvante), neuralgia do trigêmeo (alternativa)",
    apres: [{ rotulo: "comprimido 300 mg", mgPorComp: 300 }, { rotulo: "comprimido 600 mg", mgPorComp: 600 }, { rotulo: "suspensão oral 60 mg/mL", mgPorMl: 60 }],
    adulto: "300 mg 2×/dia, aumentar 600 mg/dia por semana até 600–1.200 mg/dia (máx 2.400 mg/dia)",
    renal: [{ abaixo: 30, texto: "Iniciar com metade da dose (300 mg/dia) e titular devagar." }],
    gestacao: { nivel: "cautela", texto: "Menos dados que lamotrigina/levetiracetam; níveis caem na gestação." },
    alergia: [],
    contra: ["Hiponatremia (dosar sódio, sobretudo em idosos e com diurético)", "Reação cruzada com carbamazepina (~25–30%)", "Reduz eficácia de anticoncepcional hormonal"],
    prescrever: [
      { contexto: "Adulto — epilepsia", texto: "USO ORAL\n1. Oxcarbazepina 300 mg ------------------ 60 (sessenta) comprimidos\n   Tomar 1 comprimido por via oral de 12 em 12 horas.\n   (Aumentar conforme crises e tolerância; dosar sódio.)" }
    ] },

  { id: "fenobarbital", nomes: ["Fenobarbital"], classe: "anticonvulsivantes", receita: "B1", tags: ["indutor", "sedativo"],
    usos: "Estado de mal epiléptico (2ª/3ª linha), epilepsia (alternativa de baixo custo), convulsão neonatal",
    ped: { dose: 20, faixa: "Estado de mal: 15–20 mg/kg IV (ataque)", intervalo: "dose única, infusão lenta" },
    apres: [{ rotulo: "injetável 100 mg/mL (ampola 2 mL)", mgPorMl: 100 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "gotas 40 mg/mL (1 mg/gota)", mgPorMl: 40, mgPorGota: 1 }],
    adulto: "Estado de mal: 15–20 mg/kg IV a 50–100 mg/min · manutenção: 1–3 mg/kg/dia VO (habitual 100 mg à noite)",
    renal: [{ abaixo: 10, texto: "Reduzir a dose (excreção renal parcial) e monitorar sedação." }],
    gestacao: { nivel: "evitar", texto: "Teratogênico (malformações cardíacas e fenda); sedação e abstinência neonatal." },
    alergia: [],
    contra: ["Depressão respiratória e hipotensão no ataque IV: preparar via aérea", "Porfiria", "Indutor potente: anticoncepcional, varfarina e DOAC perdem efeito", "Álcool, opioides e benzodiazepínicos somam sedação"],
    prescrever: [
      { contexto: "Hospitalar / PS — estado de mal (adulto)", texto: "Fenobarbital 100 mg/mL — 20 mg/kg (ex.: 70 kg = 1.400 mg = 14 mL) + SF 0,9% 100 mL\nIV a no máximo 50–100 mg/min (≈ 15–30 min). Monitorar respiração e PA." },
      { contexto: "Criança — estado de mal", texto: "Fenobarbital 100 mg/mL — ___ mL (20 mg/kg) diluídos em SF 0,9%, IV lento (≥ 10–20 min).\nMonitorar respiração e PA." },
      { contexto: "Adulto — manutenção ambulatorial", texto: "USO ORAL\n1. Fenobarbital 100 mg ------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido por via oral à noite, todos os dias.\n   (Nível sérico 15–40 mcg/mL. Notificação B azul.)" }
    ] },

  { id: "lamotrigina", nomes: ["Lamotrigina"], classe: "anticonvulsivantes", receita: "C1", tags: [],
    usos: "Epilepsia focal e generalizada, prevenção de depressão no transtorno bipolar; boa opção na gestação",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "Titulação lenta: 25 mg/dia nas semanas 1–2, 50 mg/dia nas semanas 3–4, depois ↑ 50 mg a cada 1–2 semanas até 100–200 mg/dia (com valproato: metade; com indutor: o dobro)",
    renal: [{ abaixo: 30, texto: "Reduzir a dose de manutenção; titular com cautela." }],
    gestacao: { nivel: "compativel", texto: "Uma das opções mais seguras; níveis caem muito na gestação (ajustar) e ácido fólico." },
    alergia: [],
    contra: ["Exantema/Stevens-Johnson: risco maior com titulação rápida ou valproato; suspender ao 1º sinal", "Se ficar > 5 dias sem tomar, reiniciar a titulação", "Anticoncepcional com estrogênio reduz o nível da lamotrigina"],
    prescrever: [
      { contexto: "Adulto — início sem valproato", texto: "USO ORAL\n1. Lamotrigina 25 mg --------------------- 42 (quarenta e dois) comprimidos\n   Tomar 1 comprimido por via oral 1 vez ao dia por 14 dias;\n   depois, 2 comprimidos (50 mg) 1 vez ao dia por 14 dias.\n   Suspender e procurar atendimento se surgir mancha ou bolha na pele." },
      { contexto: "Adulto — início com valproato", texto: "USO ORAL\n1. Lamotrigina 25 mg --------------------- 21 (vinte e um) comprimidos\n   Tomar 1 comprimido em dias alternados por 14 dias;\n   depois, 1 comprimido 1 vez ao dia por 14 dias.\n   Suspender e procurar atendimento se surgir mancha ou bolha na pele." }
    ] },

  { id: "topiramato", nomes: ["Topiramato"], classe: "anticonvulsivantes", receita: "C1", tags: [],
    usos: "Profilaxia de enxaqueca, epilepsia focal e generalizada",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }, { rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "Enxaqueca: 25 mg à noite, ↑ 25 mg/semana até 50 mg 2×/dia · epilepsia: ↑ até 200–400 mg/dia em 2 tomadas",
    renal: [{ abaixo: 70, texto: "Usar metade da dose habitual." }],
    gestacao: { nivel: "evitar", texto: "Associado a fenda labiopalatina e baixo peso ao nascer; evitar." },
    alergia: [],
    contra: ["Nefrolitíase (hidratar bem)", "Glaucoma agudo de ângulo fechado e miopia aguda: suspender", "Lentificação cognitiva, parestesias, perda de peso", "Acima de 200 mg/dia reduz eficácia de anticoncepcional"],
    prescrever: [
      { contexto: "Adulto — profilaxia de enxaqueca", texto: "USO ORAL\n1. Topiramato 25 mg ---------------------- 60 (sessenta) comprimidos\n   Semana 1: 1 comprimido à noite.\n   Semana 2: 1 comprimido de 12 em 12 horas.\n   Semana 3: 1 comprimido pela manhã e 2 à noite.\n   A partir da semana 4: 2 comprimidos de 12 em 12 horas (100 mg/dia)." }
    ] },

  { id: "gabapentina", nomes: ["Gabapentina"], classe: "anticonvulsivantes", receita: "C1", tags: ["sedativo"],
    usos: "Dor neuropática (neuralgia pós-herpética, neuropatia diabética), epilepsia focal (adjuvante)",
    apres: [{ rotulo: "cápsula 300 mg", mgPorComp: 300 }, { rotulo: "cápsula 400 mg", mgPorComp: 400 }, { rotulo: "comprimido 600 mg", mgPorComp: 600 }],
    adulto: "300 mg no dia 1, 300 mg 2×/dia no dia 2, 300 mg 3×/dia no dia 3; titular até 1.800–3.600 mg/dia em 3 tomadas",
    renal: [{ abaixo: 15, texto: "100–300 mg/dia em 1 tomada." }, { abaixo: 30, texto: "200–700 mg/dia em 1 tomada." }, { abaixo: 60, texto: "400–1.400 mg/dia divididos em 2 tomadas." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se o benefício justificar." },
    alergia: [],
    contra: ["Sonolência e tontura (idosos: quedas)", "Associação com opioides: risco de depressão respiratória", "Retirada gradual (risco de convulsão)", "Potencial de abuso"],
    prescrever: [
      { contexto: "Adulto — dor neuropática", texto: "USO ORAL\n1. Gabapentina 300 mg -------------------- 90 (noventa) cápsulas\n   Dia 1: 1 cápsula à noite. Dia 2: 1 cápsula de 12 em 12 horas.\n   A partir do dia 3: 1 cápsula de 8 em 8 horas.\n   (Aumentar conforme dor e tolerância; ajustar à função renal.)" }
    ] },

  { id: "pregabalina", nomes: ["Pregabalina"], classe: "anticonvulsivantes", receita: "C1", tags: ["sedativo"],
    usos: "Dor neuropática, fibromialgia, transtorno de ansiedade generalizada, epilepsia focal (adjuvante)",
    apres: [{ rotulo: "cápsula 75 mg", mgPorComp: 75 }, { rotulo: "cápsula 150 mg", mgPorComp: 150 }],
    adulto: "75 mg 2×/dia; após 3–7 dias 150 mg 2×/dia (máx 300 mg 2×/dia)",
    renal: [{ abaixo: 15, texto: "25–75 mg/dia em 1 tomada." }, { abaixo: 30, texto: "25–150 mg/dia em 1–2 tomadas." }, { abaixo: 60, texto: "75–300 mg/dia em 2–3 tomadas." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se o benefício justificar." },
    alergia: [],
    contra: ["Sonolência, tontura, edema periférico, ganho de peso", "Associação com opioides: risco de depressão respiratória", "Retirada gradual", "Potencial de abuso"],
    prescrever: [
      { contexto: "Adulto — dor neuropática", texto: "USO ORAL\n1. Pregabalina 75 mg --------------------- 60 (sessenta) cápsulas\n   Tomar 1 cápsula por via oral de 12 em 12 horas.\n   (Após 1 semana pode passar para 150 mg de 12 em 12 horas; ajustar à função renal.)" }
    ] }
]);
