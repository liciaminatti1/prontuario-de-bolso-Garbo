// Nefrolitíase e cólica renal
registrarFicha({
  id: "colica-renal",
  especialidade: "urologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Nefrolitíase e cólica renal",
  resumo: "Dor lombar ou no flanco em cólica, intensa, que irradia para o abdome inferior, virilha ou genitais, com hematúria, náusea e agitação, por cálculo obstruindo o ureter. Tratar a dor com AINE, confirmar o diagnóstico e excluir rim obstruído infectado, que exige desobstrução urgente.",
  palavrasChave: "colica renal nefrolitiase urolitiase calculo renal pedra no rim ureterolitiase hidronefrose hematuria diclofenaco cetorolaco tansulosina tamsulosina terapia expulsiva duplo j nefrostomia",
  critico: {
    tempo: "Febre + obstrução = desobstruir",
    texto: "Cálculo obstrutivo com febre, sinais de infecção ou sepse é emergência urológica: hemoculturas, urocultura, antibiótico imediato e drenagem (cateter duplo J ou nefrostomia). Antibiótico sozinho não basta."
  },
  alarmes: [
    "Febre, calafrios, sinais de sepse com cálculo obstrutivo (pionefrose)",
    "Anúria ou lesão renal aguda; rim único (anatômico ou funcional); transplantado; obstrução bilateral",
    "Dor refratária à analgesia ou vômitos incoercíveis",
    "Idoso > 60 anos com \"primeira cólica renal\": excluir aneurisma de aorta abdominal",
    "Gestante",
    "Hipotensão, massa pulsátil, dor desproporcional (aneurisma roto, isquemia mesentérica)"
  ],
  condutaInicial: [
    "Analgesia imediata: AINE (diclofenaco IM ou cetoprofeno/cetorolaco IV) + dipirona; opioide titulado se refratária",
    "Antiemético se vômitos; não forçar hidratação venosa (não acelera a eliminação)",
    "Urina tipo 1, creatinina, hemograma, PCR; beta-hCG em mulher em idade fértil; urocultura e hemoculturas se febre",
    "Imagem: TC de abdome sem contraste (baixa dose) é o padrão; USG (ou POCUS) em gestante, jovem e cálculo já conhecido",
    "Febre + obstrução, anúria, LRA ou rim único obstruído → urologista para desobstrução urgente",
    "Cálculo ≤ 10 mm sem complicação: alta com analgesia, tansulosina se ureter distal > 5 mm, e acompanhamento"
  ],
  fataisExcluir: [
    "Rim obstruído infectado / urossepse",
    "Aneurisma de aorta abdominal (roto ou em expansão)",
    "Gravidez ectópica",
    "Apendicite, diverticulite, colecistite",
    "Torção de testículo ou de ovário",
    "Infarto renal, dissecção de aorta, isquemia mesentérica"
  ],
  proximaDecisao: "Dor controlada, sem febre, função renal normal, cálculo ≤ 10 mm → alta com AINE, tansulosina se ureteral distal > 5 mm e controle de imagem em 2–4 semanas. Cálculo > 10 mm, sem eliminação em 4–6 semanas, dor recorrente ou obstrução persistente → urologia para tratamento ativo (ureteroscopia, litotripsia).",
  clinica: {
    anamnese: [
      "Dor: início súbito, em cólica, flanco irradiando para fossa ilíaca, virilha, testículo ou grandes lábios; paciente agitado, não acha posição",
      "Náuseas, vômitos, hematúria macroscópica, urgência e polaciúria (cálculo distal)",
      "Febre, calafrios, disúria (infecção)",
      "Cálculo prévio, tratamento urológico, história familiar",
      "Diurese, rim único, transplante, DRC",
      "Gestação, DUM; idade e fatores de risco para aneurisma (tabagismo, HAS, homem > 60)",
      "Uso de AINE, anticoagulante; contraindicações a AINE (úlcera, DRC, IC)"
    ],
    exameFisico: [
      "Sinais vitais e temperatura",
      "Punho-percussão lombar (Giordano)",
      "Abdome: sinais peritoneais (sugerem outra causa), massa pulsátil",
      "Genitais em homens (torção, orquiepididimite); pulsos femorais"
    ],
    diferenciais: [
      { dx: "Pielonefrite", pista: "Febre, disúria, leucocitúria, dor contínua" },
      { dx: "Aneurisma de aorta abdominal", pista: "> 60 anos, hipotensão, massa pulsátil — imagem urgente" },
      { dx: "Apendicite / diverticulite", pista: "Dor que migra e se localiza, febre, peritonismo" },
      { dx: "Gravidez ectópica, torção de ovário", pista: "Beta-hCG positivo, dor pélvica, massa anexial" },
      { dx: "Torção testicular", pista: "Dor e edema testicular, testículo elevado, reflexo cremastérico ausente" },
      { dx: "Cólica biliar", pista: "Dor em hipocôndrio direito após refeição" },
      { dx: "Herpes-zóster pré-eruptivo, dor musculoesquelética", pista: "Dor em faixa, hiperestesia; dor que piora ao movimento" }
    ],
    gravidade: [
      "Não complicada: dor controlada, sem febre, função renal normal, rim contralateral normal",
      "Complicada (indica desobstrução urgente): infecção/sepse com obstrução, LRA/anúria, rim único obstruído, obstrução bilateral, dor ou vômitos refratários",
      "Chance de eliminação espontânea cai com o tamanho e com a localização proximal; cálculos > 10 mm raramente saem sozinhos"
    ]
  },
  exames: [
    {
      nome: "Tomografia de abdome e pelve sem contraste",
      pedido: "Tomografia computadorizada de abdome e pelve sem contraste, protocolo de baixa dose para litíase. Indicação: suspeita de cólica renal / ureterolitíase.",
      porQue: "Exame de escolha: localiza, mede o cálculo e mostra hidronefrose e diagnósticos alternativos.",
      esperar: "Cálculo hiperdenso no ureter com dilatação a montante.",
      interpretacao: "Registrar tamanho, localização e densidade. > 10 mm ou proximal → baixa chance de eliminação.",
      limitacoes: "Evitar em gestante. Em paciente jovem com cálculo conhecido e quadro típico, USG pode bastar. Contraste se suspeita de aneurisma (angio-TC)."
    },
    {
      nome: "Ultrassonografia de rins e vias urinárias",
      pedido: "Ultrassonografia de rins e vias urinárias (com bexiga cheia). Indicação: cólica renal — gestante / jovem / controle de cálculo conhecido.",
      porQue: "Sem radiação; mostra hidronefrose e cálculos renais e de junção.",
      esperar: "Hidronefrose ipsilateral; jato ureteral ausente.",
      interpretacao: "Hidronefrose + quadro típico = suficiente para conduta inicial em casos não complicados.",
      limitacoes: "Baixa sensibilidade para cálculo no ureter médio. POCUS à beira-leito ajuda a triar hidronefrose e aorta."
    },
    {
      nome: "Exames de urina e sangue",
      pedido: "Urina tipo 1 (EAS). Urocultura com antibiograma. Hemograma, PCR, ureia, creatinina, sódio, potássio. Cálcio e ácido úrico. Beta-hCG em mulheres em idade fértil. Hemoculturas (2 amostras) se febre.",
      porQue: "Hematúria apoia o diagnóstico; leucocitúria/nitrito e febre indicam infecção; função renal define gravidade.",
      esperar: "Hematúria (ausente em parte dos casos).",
      interpretacao: "Leucocitúria + febre + obstrução = urgência. Creatinina elevada → urologia e cuidado com AINE.",
      limitacoes: "Ausência de hematúria não exclui cálculo."
    },
    {
      nome: "Análise do cálculo e investigação metabólica",
      pedido: "Análise química do cálculo (espectroscopia de infravermelho) se eliminado. Em recorrentes ou alto risco: urina de 24 h (volume, cálcio, oxalato, citrato, ácido úrico, sódio, creatinina), cálcio, ácido úrico, PTH se cálcio alto.",
      porQue: "Orienta prevenção específica.",
      esperar: "Oxalato de cálcio na maioria.",
      interpretacao: "Hipercalciúria, hipocitratúria, hiperuricosúria → tratamento dirigido (tiazídico, citrato de potássio, alopurinol) com nefro/urologia.",
      limitacoes: "Fazer fora da crise, com dieta habitual."
    }
  ],
  tratamento: [
    {
      droga: "Diclofenaco sódico",
      linha: "l1",
      dose: "75 mg",
      via: "IM profunda",
      intervalo: "Dose única no PS (pode repetir em 12 h); VO 50 mg de 8/8 h em casa",
      duracao: "Até 5–7 dias, menor tempo possível",
      monitorizacao: "Creatinina, sangramento digestivo",
      contraindicacoes: "ClCr < 30, LRA, rim único com obstrução, úlcera/sangramento ativo, IC grave, 3º trimestre de gestação, alergia a AINE",
      ajustes: "AINE é 1ª escolha (mais eficaz que opioide e reduz nova cólica). Alternativas IV: cetoprofeno 100 mg em 100 mL de SF 0,9% em 20 min, ou cetorolaco 10–30 mg IV lento (≥ 65 anos, < 50 kg ou DRC leve: máx 15 mg/dose; máx 90 mg/dia, ou 60 mg/dia nesses grupos; usar pelo menor tempo, em geral só no PS; conferir na bula o tempo máximo da forma injetável)"
    },
    {
      droga: "Dipirona",
      linha: "l1",
      dose: "1–2 g",
      via: "IV lento (diluída em 10 mL de água destilada ou 100 mL de SF 0,9%)",
      intervalo: "6/6 h (máx 4 g/dia)",
      duracao: "Conforme dor",
      monitorizacao: "Hipotensão",
      contraindicacoes: "Alergia, agranulocitose prévia",
      ajustes: "Associar ao AINE; opção principal quando AINE é contraindicado (gestação, DRC)"
    },
    {
      droga: "Morfina",
      linha: "alt",
      dose: "0,05–0,1 mg/kg (2–4 mg em bolus)",
      via: "IV lenta (10 mg em 10 mL de SF = 1 mg/mL)",
      intervalo: "A cada 5–10 min até controle; depois 4/4 h SN",
      duracao: "Conforme dor",
      monitorizacao: "FR, sedação, PA, náusea",
      contraindicacoes: "Depressão respiratória, hipotensão",
      ajustes: "Dor refratária ao AINE + dipirona ou AINE contraindicado. Tramadol 50–100 mg IV lento é alternativa (mais náusea; reduz limiar convulsivo)"
    },
    {
      droga: "Tansulosina (cloridrato de tamsulosina) — terapia expulsiva",
      linha: "l1",
      dose: "0,4 mg",
      via: "Oral",
      intervalo: "1 vez ao dia",
      duracao: "Até a eliminação, por no máximo 4–6 semanas",
      monitorizacao: "Hipotensão postural, tontura, ejaculação retrógrada",
      contraindicacoes: "Hipotensão ortostática, alergia; atenção a cirurgia de catarata programada (síndrome da íris flácida)",
      ajustes: "Indicada para cálculo de ureter distal > 5 mm (até 10 mm) sem complicação. Uso off-label para cálculo. Não substitui tratamento urológico se falhar. Doxazosina é alternativa com menos evidência"
    },
    {
      droga: "Metoclopramida / ondansetrona",
      linha: "adj",
      dose: "Metoclopramida 10 mg ou ondansetrona 4–8 mg",
      via: "IV lento",
      intervalo: "8/8 h",
      duracao: "Conforme náusea",
      monitorizacao: "Sintomas extrapiramidais (metoclopramida), QT (ondansetrona)",
      contraindicacoes: "—",
      ajustes: "—"
    },
    {
      droga: "Desobstrução urinária (cateter duplo J ou nefrostomia percutânea)",
      linha: "l1",
      dose: "—",
      via: "Urológica / radiologia intervencionista",
      intervalo: "—",
      duracao: "Urgente",
      monitorizacao: "Diurese, febre, função renal",
      contraindicacoes: "—",
      ajustes: "Indicação: rim obstruído infectado, LRA/anúria, rim único, obstrução bilateral, dor refratária. Na infecção, adiar a retirada definitiva do cálculo até tratar a infecção. Antibiótico empírico: ceftriaxona 2 g IV 1×/dia (ajustar por cultura)"
    },
    {
      droga: "Hidratação venosa forçada / butilbrometo de escopolamina isolado",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não usar como tratamento da cólica",
      ajustes: "Hidratação forçada não acelera a eliminação; antiespasmódico não melhora a dor comparado ao AINE"
    }
  ],
  destino: {
    agora: [
      "Analgesia com AINE + dipirona; exames e imagem",
      "Febre com obstrução / LRA / rim único: urologia imediata"
    ],
    reavaliar: [
      "Dor 30–60 min após analgesia",
      "Antes da alta: tolerância à via oral, ausência de febre, creatinina"
    ],
    alta: [
      "Dor controlada, sem febre, função renal normal, cálculo ≤ 10 mm",
      "AINE + dipirona, tansulosina se distal > 5 mm, filtrar a urina (coar) para recolher o cálculo",
      "Imagem de controle em 2–4 semanas; urologia se não eliminar em 4–6 semanas ou cálculo > 10 mm"
    ],
    observacao: [
      "Dor recorrente com controle parcial, vômitos: observação e reavaliação"
    ],
    internacao: [
      "Infecção com obstrução, LRA, dor ou vômitos refratários, gestante com complicação"
    ],
    transferencia: [
      "Sem urologista ou intervenção disponível: regulação urgente se complicada (iniciar antibiótico antes)"
    ]
  },
  prescricao: {
    hospitalar: "CÓLICA RENAL — SALA DE MEDICAÇÃO (adulto, função renal normal)\n1. Acesso venoso. Não forçar hidratação; SF 0,9% 500 mL se vômitos/desidratação.\n2. Diclofenaco sódico 75 mg (3 mL) IM profunda (glúteo), dose única.\n   OU cetoprofeno 100 mg + SF 0,9% 100 mL IV em 20 minutos.\n   OU cetorolaco 30 mg (1 mL) IV lento em ≥ 15 s (≥ 65 anos ou < 50 kg: 15 mg).\n3. Dipirona 1 g (2 mL) + água destilada 8 mL IV lento (pode usar 2 g).\n4. Se dor persistir após 30–60 min: morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL), 2–4 mL IV lento; repetir 2 mg a cada 10 min até controle.\n5. Metoclopramida 10 mg (2 mL) IV lento ou ondansetrona 8 mg IV lento se náusea/vômito.\n6. Se febre com obstrução: hemoculturas + urocultura, ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min e avaliação urológica imediata para desobstrução.\n7. Controles: dor (escala 0–10) a cada 30 min, sinais vitais, temperatura, diurese.",
    ambulatorial: "ALTA — CÓLICA RENAL NÃO COMPLICADA\nUSO ORAL\n1. Diclofenaco sódico 50 mg ---------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 5 dias (ou ibuprofeno 600 mg de 8 em 8 horas).\n2. Dipirona 1 g ---------------------------------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se dor.\n3. Tansulosina (tamsulosina) 0,4 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, após a mesma refeição, até eliminar o cálculo (máx 4 semanas; se não eliminar, retorno para avaliação urológica). Levantar devagar (pode baixar a pressão). [Se cálculo de ureter distal > 5 mm]\n4. Ondansetrona 4 mg (comprimido orodispersível) ------------- 6 comprimidos\n   Dissolver 1 comprimido na língua de 8 em 8 horas se náusea.\n\nORIENTAÇÕES\n- Coar a urina (peneira ou gaze) e guardar a pedra para análise.\n- Beber água suficiente para urinar cerca de 2,5 litros por dia (urina clara)."
  },
  orientacoesRetorno: [
    "A maioria dos cálculos pequenos sai sozinha em dias a semanas; coe a urina e guarde a pedra para levar à consulta",
    "Beba água ao longo do dia para urinar pelo menos 2 a 2,5 litros (urina clara); reduza sal, embutidos e excesso de carne; não corte o cálcio da dieta (leite e derivados em quantidade normal)",
    "Volte imediatamente se tiver febre ou calafrios, dor que não melhora com os remédios, vômitos que não param, se parar de urinar ou se tiver tontura e fraqueza",
    "Não use o anti-inflamatório por mais tempo que o receitado; se tiver doença renal, úlcera ou estiver grávida, avise o médico",
    "Faça o exame de imagem de controle em 2–4 semanas e leve o resultado à UBS; se a pedra não sair em 4–6 semanas, será encaminhado ao urologista",
    "Quem já teve cálculo tem chance alta de ter outro: a prevenção com água e dieta é para a vida toda"
  ],
  fontes: [
    "EAU — Guidelines on Urolithiasis (2026)",
    "NICE — Renal and ureteric stones: assessment and management (NG118, 2019)",
    "AUA/Endourological Society — Surgical Management of Stones (2016) e AUA — Medical Management of Kidney Stones (2014, emenda 2019)",
    "Pickard R et al. SUSPEND (Lancet, 2015) e Cochrane — Alpha-blockers as medical expulsive therapy for ureteral stones (2018)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
