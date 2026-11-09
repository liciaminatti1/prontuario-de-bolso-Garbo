/* Medicamentos: anti-infecciosos (antibióticos, antivirais, antifúngicos, antiparasitários).
   Formato em js/medicamentos.js e docs/ESQUEMA-MEDICAMENTOS.md.
   Fontes de referência: bulas, RENAME, PCDT IST (MS 2022), Manual de TB (MS 2019), Guia de Vigilância em Saúde (MS),
   SBP, FEBRASGO, IDSA. CONFERIR SEMPRE com a bula, o protocolo local e o antibiograma. */

complementarMedicamentos({
  /* ---------- antibióticos (base) ---------- */
  amoxicilina: {
    receita: "antimicrobiano",
    usos: "Otite média aguda, sinusite bacteriana, faringite estreptocócica, pneumonia comunitária, H. pylori (esquema), profilaxia de endocardite.",
    prescrever: [
      { contexto: "Adulto — faringite estreptocócica (10 dias)", texto: "USO ORAL\n1. Amoxicilina 500 mg ------------------------ 30 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 10 dias." },
      { contexto: "Adulto — sinusite bacteriana / otite média (7 dias)", texto: "USO ORAL\n1. Amoxicilina 500 mg ------------------------ 21 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 7 dias." },
      { contexto: "Adulto — pneumonia comunitária sem comorbidade (alta dose)", texto: "USO ORAL\n1. Amoxicilina 500 mg ------------------------ 42 cápsulas\n   Tomar 2 cápsulas (1 g) de 8 em 8 horas por 7 dias.\n   (Reavaliar em 48–72 h; se comorbidade, preferir amoxicilina-clavulanato + macrolídeo.)" },
      { contexto: "Criança — otite média aguda / sinusite (alta dose 80–90 mg/kg/dia)", texto: "USO ORAL\n1. Amoxicilina suspensão 400 mg/5 mL -------- 1 frasco\n   Dar ___ mL de 12 em 12 horas por 10 dias.\n   (80–90 mg/kg/dia ÷ 2; não ultrapassar a dose de adulto. Duração na OMA: < 2 anos 10 dias; 2–5 anos 7 dias; ≥ 6 anos 5–7 dias.)" },
      { contexto: "Criança — faringite / pneumonia (50 mg/kg/dia)", texto: "USO ORAL\n1. Amoxicilina suspensão 250 mg/5 mL -------- 2 frascos\n   Dar ___ mL de 8 em 8 horas por 10 dias (faringite) ou 7 dias (pneumonia).\n   (50 mg/kg/dia ÷ 3; máximo 500 mg por dose. Faringite: alternativa 50 mg/kg 1×/dia, máx 1 g.)" },
      { contexto: "Profilaxia de endocardite (procedimento dentário)", texto: "USO ORAL\n1. Amoxicilina 500 mg ------------------------ 4 cápsulas\n   Tomar 4 cápsulas (2 g) em dose única, 30 a 60 minutos antes do procedimento.\n   (Criança: 50 mg/kg, máximo 2 g.)" },
      { contexto: "H. pylori — tríplice, alternativa (14 dias; 1ª linha é a quádrupla com bismuto — ver IBP)", texto: "USO ORAL\n1. Amoxicilina 500 mg ------------------------ 56 cápsulas\n   Tomar 2 cápsulas (1 g) de 12 em 12 horas por 14 dias.\n2. Claritromicina 500 mg -------------------- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias.\n3. Omeprazol 40 mg (ou vonoprazana 20 mg) ---- 28 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, 30 minutos antes do café e do jantar, por 14 dias.\n(V Consenso Brasileiro 2026: só sem macrolídeo prévio; de preferência otimizada com bismuto e/ou vonoprazana.)" }
    ]
  },
  "amoxicilina-clavulanato": {
    receita: "antimicrobiano",
    usos: "OMA/sinusite com falha ou uso recente de amoxicilina, mordeduras, celulite, pneumonia comunitária com comorbidade, pé diabético leve, ITU (alternativa).",
    prescrever: [
      { contexto: "Adulto — ambulatorial (7 dias)", texto: "USO ORAL\n1. Amoxicilina + clavulanato de potássio 875/125 mg --- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, no início das refeições, por 7 dias." },
      { contexto: "Adulto — mordedura de animal (profilaxia)", texto: "USO ORAL\n1. Amoxicilina + clavulanato de potássio 875/125 mg --- 10 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, no início das refeições, por 5 dias.\n   (Avaliar profilaxia de raiva e tétano.)" },
      { contexto: "Criança — ambulatorial (45 mg/kg/dia de amoxicilina)", texto: "USO ORAL\n1. Amoxicilina + clavulanato suspensão 400/57 mg por 5 mL --- 1 frasco\n   Dar ___ mL de 12 em 12 horas, no início das refeições, por 10 dias.\n   (45 mg/kg/dia de amoxicilina ÷ 2; máximo 875 mg por dose. Para alta dose (90 mg/kg/dia) usar a apresentação ES 600/42,9 mg por 5 mL, para não exceder o clavulanato.)" },
      { contexto: "Hospitalar / PS", texto: "Amoxicilina + clavulanato 1 g/200 mg: reconstituir em 20 mL de água destilada, diluir em SF 0,9% 100 mL e infundir IV em 30–40 min de 8/8h.\n(Não diluir em soro glicosado; usar logo após o preparo.)" }
    ]
  },
  cefalexina: {
    receita: "antimicrobiano",
    usos: "Celulite e infecção de pele/partes moles, impetigo extenso, ITU (inclusive na gestação), faringite em alérgico leve à penicilina.",
    prescrever: [
      { contexto: "Adulto — celulite / pele e partes moles", texto: "USO ORAL\n1. Cefalexina 500 mg ------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias." },
      { contexto: "Adulto — cistite (inclusive gestante)", texto: "USO ORAL\n1. Cefalexina 500 mg ------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n   (Gestante: urocultura de controle 1–2 semanas após o fim do tratamento.)" },
      { contexto: "Criança — ambulatorial (50 mg/kg/dia)", texto: "USO ORAL\n1. Cefalexina suspensão 250 mg/5 mL ---------- 2 frascos\n   Dar ___ mL de 6 em 6 horas por 7 dias.\n   (25–50 mg/kg/dia ÷ 4, até 100 mg/kg/dia nas infecções graves; máximo 1 g por dose e 4 g/dia.)" },
      { contexto: "Criança — faringite em alérgico leve à penicilina", texto: "USO ORAL\n1. Cefalexina suspensão 250 mg/5 mL ---------- 2 frascos\n   Dar ___ mL de 12 em 12 horas por 10 dias.\n   (20 mg/kg por dose de 12/12h; máximo 500 mg por dose.)" }
    ]
  },
  ceftriaxona: {
    receita: "antimicrobiano",
    usos: "Pneumonia comunitária internada, pielonefrite, meningite bacteriana, gonorreia, DIP, sepse de foco comunitário, OMA refratária (IM).",
    prescrever: [
      { contexto: "Gonorreia / uretrite / cervicite (PCDT IST)", texto: "USO INTRAMUSCULAR\n1. Ceftriaxona 500 mg ----------------------- 1 frasco-ampola\n   Aplicar 500 mg IM, dose única.\nUSO ORAL\n2. Azitromicina 500 mg ---------------------- 2 comprimidos\n   Tomar 2 comprimidos (1 g) juntos, dose única.\n   (Tratar as parcerias sexuais; solicitar HIV, sífilis e hepatites.)" },
      { contexto: "Adulto — pielonefrite (1ª dose no PS, depois oral)", texto: "Ceftriaxona 1 g IM (reconstituída com o diluente de lidocaína) ou IV, dose única no atendimento; seguir com antibiótico oral conforme urocultura." },
      { contexto: "Hospitalar / PS", texto: "Ceftriaxona 1 g (ou 2 g) + SF 0,9% 100 mL IV em 30 min de 24/24h.\nMeningite: ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min de 12/12h.\n(A forma com lidocaína é só para uso IM.)" },
      { contexto: "Criança — IV/IM (50–100 mg/kg/dia)", texto: "Ceftriaxona ___ mg IV (em SF 0,9% 50–100 mL, em 30 min) ou IM de 24/24h.\n(50–100 mg/kg/dia; meningite 100 mg/kg/dia ÷ 12/12h; máximo 2 g por dose e 4 g/dia. OMA refratária: 50 mg/kg IM 1×/dia por 3 dias. Não usar com soluções com cálcio em < 28 dias.)" }
    ]
  },
  azitromicina: {
    receita: "antimicrobiano",
    usos: "Pneumonia (atípicos), faringite em alérgico à penicilina, coqueluche, clamídia/uretrite, cancro mole, diarreia por Campylobacter/Shigella.",
    prescrever: [
      { contexto: "Adulto — ambulatorial (3 dias)", texto: "USO ORAL\n1. Azitromicina 500 mg ----------------------- 3 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 3 dias." },
      { contexto: "Clamídia / uretrite (dose única)", texto: "USO ORAL\n1. Azitromicina 500 mg ----------------------- 2 comprimidos\n   Tomar 2 comprimidos (1 g) juntos, dose única.\n   (Tratar as parcerias sexuais.)" },
      { contexto: "Coqueluche — adulto", texto: "USO ORAL\n1. Azitromicina 500 mg ----------------------- 1 comprimido\n2. Azitromicina 250 mg ----------------------- 4 comprimidos\n   Tomar 500 mg no 1º dia e 250 mg 1 vez ao dia do 2º ao 5º dia." },
      { contexto: "Criança — ambulatorial (10 mg/kg/dia por 3 dias)", texto: "USO ORAL\n1. Azitromicina suspensão 200 mg/5 mL -------- 1 frasco\n   Dar ___ mL 1 vez ao dia por 3 dias.\n   (10 mg/kg/dia; máximo 500 mg/dia. Faringite: 12 mg/kg/dia por 5 dias, máx 500 mg. Coqueluche ≥ 6 meses: 10 mg/kg no 1º dia e 5 mg/kg do 2º ao 5º; < 6 meses: 10 mg/kg/dia por 5 dias.)" },
      { contexto: "Hospitalar / PS", texto: "Azitromicina 500 mg + SF 0,9% 250 mL IV em 1 hora (2 mg/mL) de 24/24h.\n(Não fazer em bolus nem IM.)" }
    ]
  },
  claritromicina: {
    receita: "antimicrobiano",
    usos: "H. pylori, pneumonia (atípicos), sinusite e faringite em alérgico à penicilina.",
    prescrever: [
      { contexto: "Adulto — ambulatorial (7 dias)", texto: "USO ORAL\n1. Claritromicina 500 mg -------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias." },
      { contexto: "H. pylori — alternativa (ver modelo em amoxicilina)", texto: "Claritromicina 500 mg 12/12h + amoxicilina 1 g 12/12h + omeprazol 40 mg (ou vonoprazana 20 mg) 12/12h por 14 dias, só sem macrolídeo prévio. 1ª linha (V Consenso Brasileiro 2026): quádrupla com bismuto — ver IBP." },
      { contexto: "Criança — ambulatorial (15 mg/kg/dia)", texto: "USO ORAL\n1. Claritromicina suspensão 250 mg/5 mL ------ 1 frasco\n   Dar ___ mL de 12 em 12 horas por 7 a 10 dias.\n   (15 mg/kg/dia ÷ 2; máximo 500 mg por dose.)" },
      { contexto: "Hospitalar / PS", texto: "Claritromicina 500 mg: reconstituir em 10 mL de água destilada, diluir em SF 0,9% 250 mL e infundir IV em 60 min de 12/12h." }
    ]
  },
  "smx-tmp": {
    receita: "antimicrobiano",
    usos: "Cistite (se sensível), abscesso/celulite purulenta (S. aureus comunitário), pneumocistose (tratamento e profilaxia), shigelose.",
    prescrever: [
      { contexto: "Adulto — cistite (3 dias)", texto: "USO ORAL\n1. Sulfametoxazol + trimetoprima 800/160 mg --- 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias.\n   (Usar só se resistência local < 20%; beber bastante água.)" },
      { contexto: "Adulto — pielonefrite (se sensível no antibiograma)", texto: "USO ORAL\n1. Sulfametoxazol + trimetoprima 800/160 mg --- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias." },
      { contexto: "Adulto — abscesso / celulite purulenta (após drenagem)", texto: "USO ORAL\n1. Sulfametoxazol + trimetoprima 800/160 mg --- 14 a 28 comprimidos\n   Tomar 1 a 2 comprimidos de 12 em 12 horas por 7 dias." },
      { contexto: "Profilaxia de pneumocistose (CD4 < 200)", texto: "USO ORAL\n1. Sulfametoxazol + trimetoprima 800/160 mg --- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo." },
      { contexto: "Criança — ambulatorial (8–12 mg/kg/dia de TMP)", texto: "USO ORAL\n1. Sulfametoxazol + trimetoprima suspensão 200/40 mg por 5 mL --- 1 frasco\n   Dar ___ mL de 12 em 12 horas por 7 a 10 dias.\n   (8–12 mg/kg/dia de trimetoprima ÷ 2; máximo 160 mg de TMP por dose. Não usar em < 2 meses.)" },
      { contexto: "Hospitalar — pneumocistose", texto: "SMX-TMP 15–20 mg/kg/dia de trimetoprima ÷ 6/6h ou 8/8h, IV ou VO, por 21 dias.\nIV: cada ampola 400/80 mg (5 mL) diluída em 125 mL de SG 5%, infundir em 60–90 min." }
    ]
  },
  ciprofloxacino: {
    receita: "antimicrobiano",
    usos: "Pielonefrite ambulatorial, ITU complicada, diarreia infecciosa invasiva (shigelose), prostatite. Evitar como 1ª linha na cistite simples.",
    prescrever: [
      { contexto: "Adulto — pielonefrite ambulatorial (7 dias)", texto: "USO ORAL\n1. Ciprofloxacino 500 mg --------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   (Não tomar junto com leite, antiácidos, ferro ou cálcio: separar 2 h antes ou 6 h depois.)" },
      { contexto: "Adulto — diarreia invasiva / shigelose (3 dias)", texto: "USO ORAL\n1. Ciprofloxacino 500 mg --------------------- 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias." },
      { contexto: "Hospitalar / PS", texto: "Ciprofloxacino 400 mg (solução pronta 2 mg/mL, 200 mL) IV em 60 min de 12/12h." }
    ]
  },
  levofloxacino: {
    receita: "antimicrobiano",
    usos: "Pneumonia comunitária com comorbidade ou alergia a betalactâmico, pielonefrite, sinusite (2ª linha), TB resistente (esquemas especiais).",
    prescrever: [
      { contexto: "Adulto — pneumonia comunitária (5 dias)", texto: "USO ORAL\n1. Levofloxacino 750 mg ---------------------- 5 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 5 dias.\n   (Separar de antiácidos, ferro e cálcio em 2 h.)" },
      { contexto: "Adulto — pielonefrite (5 dias)", texto: "USO ORAL\n1. Levofloxacino 750 mg ---------------------- 5 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 5 dias." },
      { contexto: "Hospitalar / PS", texto: "Levofloxacino 750 mg (solução pronta 5 mg/mL, 150 mL) IV em 90 min de 24/24h.\n(500 mg/100 mL: infundir em 60 min.)" }
    ]
  },
  nitrofurantoina: {
    receita: "antimicrobiano",
    usos: "Cistite não complicada (inclusive na gestação, exceto no termo) e profilaxia de ITU de repetição.",
    prescrever: [
      { contexto: "Adulto — cistite (5 dias)", texto: "USO ORAL\n1. Nitrofurantoína 100 mg (macrocristais) ---- 20 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas, junto com alimento, por 5 dias.\n   (Pode escurecer a urina.)" },
      { contexto: "Adulto — profilaxia de ITU de repetição", texto: "USO ORAL\n1. Nitrofurantoína 100 mg ------------------- 30 cápsulas\n   Tomar 1 cápsula à noite, ao deitar, por 6 meses (ou após a relação sexual)." },
      { contexto: "Criança — tratamento (5–7 mg/kg/dia)", texto: "USO ORAL\n1. Nitrofurantoína suspensão oral 5 mg/mL --- 1 frasco\n   Dar ___ mL de 6 em 6 horas por 7 dias.\n   (5–7 mg/kg/dia ÷ 4; máximo 100 mg por dose. Profilaxia: 1–2 mg/kg 1×/dia à noite. Conferir a concentração disponível.)" }
    ]
  },
  fosfomicina: {
    receita: "antimicrobiano",
    usos: "Cistite não complicada em mulheres, inclusive gestantes.",
    prescrever: [
      { contexto: "Adulto — cistite (dose única)", texto: "USO ORAL\n1. Fosfomicina trometamol 3 g --------------- 1 envelope\n   Dissolver o conteúdo em meio copo de água e tomar em dose única, à noite, com a bexiga vazia (após urinar), 2 horas após a refeição." }
    ]
  },
  metronidazol: {
    receita: "antimicrobiano",
    usos: "Vaginose bacteriana, tricomoníase, giardíase, amebíase, DIP (associado), anaeróbios (intra-abdominal), C. difficile (alternativa).",
    prescrever: [
      { contexto: "Vaginose bacteriana — oral (PCDT IST)", texto: "USO ORAL\n1. Metronidazol 250 mg ---------------------- 28 comprimidos\n   Tomar 2 comprimidos (500 mg) de 12 em 12 horas por 7 dias.\n   (Não ingerir bebida alcoólica durante o tratamento e até 72 horas após.)" },
      { contexto: "Vaginose bacteriana — gel vaginal", texto: "USO VAGINAL\n1. Metronidazol gel vaginal 100 mg/g -------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador cheio (5 g) na vagina à noite, ao deitar, por 5 dias." },
      { contexto: "Tricomoníase (tratar parcerias)", texto: "USO ORAL\n1. Metronidazol 400 mg ---------------------- 5 comprimidos\n   Tomar 5 comprimidos (2 g) juntos, dose única.\n   (Alternativa, e preferida na gestação: 250 mg 2 comprimidos de 12/12h por 7 dias.)" },
      { contexto: "Adulto — giardíase / amebíase intestinal", texto: "USO ORAL\n1. Metronidazol 250 mg ---------------------- 21 comprimidos\n   Giardíase: tomar 1 comprimido de 8 em 8 horas por 7 dias.\n   (Amebíase: 500–750 mg de 8/8h por 7 a 10 dias.)" },
      { contexto: "Criança — giardíase / amebíase", texto: "USO ORAL\n1. Benzoilmetronidazol suspensão 40 mg/mL ---- 1 frasco\n   Dar ___ mL de 8 em 8 horas por 7 dias.\n   (Giardíase: 15 mg/kg/dia ÷ 3 por 5–7 dias, máx 250 mg por dose. Amebíase: 35–50 mg/kg/dia ÷ 3 por 7–10 dias, máx 750 mg por dose.)" },
      { contexto: "Hospitalar / PS", texto: "Metronidazol 500 mg (solução pronta 5 mg/mL, 100 mL) IV em 30–60 min de 8/8h.\nCriança: 7,5 mg/kg IV de 8/8h (máx 500 mg por dose)." }
    ]
  },
  "penicilina-benzatina": {
    receita: "antimicrobiano",
    usos: "Sífilis (todas as fases exceto neurossífilis), faringite estreptocócica, profilaxia secundária da febre reumática.",
    prescrever: [
      { contexto: "Sífilis recente (primária, secundária, latente recente)", texto: "USO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ----- 2 frascos-ampola\n   Aplicar 2.400.000 UI IM profundo, dose única (1.200.000 UI em cada glúteo).\n   (Tratar parcerias; VDRL trimestral.)" },
      { contexto: "Sífilis latente tardia / duração ignorada / terciária", texto: "USO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ----- 6 frascos-ampola\n   Aplicar 2.400.000 UI IM profundo (1.200.000 UI em cada glúteo) 1 vez por semana, por 3 semanas (total 7.200.000 UI).\n   (Na gestante, intervalo entre doses não pode passar de 7 dias: se passar, reiniciar o esquema.)" },
      { contexto: "Faringite estreptocócica", texto: "USO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ----- 1 frasco-ampola\n   Aplicar 1.200.000 UI IM profundo, dose única.\n   (Criança < 27 kg: 600.000 UI IM dose única.)" },
      { contexto: "Profilaxia secundária de febre reumática", texto: "USO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ----- 1 frasco-ampola\n   Aplicar 1.200.000 UI IM profundo a cada 21 dias.\n   (< 20 kg: 600.000 UI a cada 21 dias. Duração conforme cardite: SBC.)" }
    ]
  },
  doxiciclina: {
    receita: "antimicrobiano",
    usos: "Clamídia/uretrite, sífilis em não gestante alérgico à penicilina, DIP (associada), leptospirose leve, febre maculosa/riquetsioses, pneumonia (atípicos), acne.",
    prescrever: [
      { contexto: "Clamídia / uretrite não gonocócica (PCDT IST)", texto: "USO ORAL\n1. Doxiciclina 100 mg ----------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias, com bastante água, sem deitar logo depois." },
      { contexto: "Sífilis em alérgico à penicilina (não gestante)", texto: "USO ORAL\n1. Doxiciclina 100 mg ----------------------- 30 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 15 dias (sífilis recente).\n   (Sífilis tardia: 30 dias = 60 comprimidos.)" },
      { contexto: "DIP — tratamento ambulatorial (PCDT IST)", texto: "USO INTRAMUSCULAR\n1. Ceftriaxona 500 mg ----------------------- 1 frasco-ampola\n   Aplicar 500 mg IM, dose única.\nUSO ORAL\n2. Doxiciclina 100 mg ----------------------- 28 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 14 dias.\n3. Metronidazol 250 mg ---------------------- 56 comprimidos\n   Tomar 2 comprimidos de 12 em 12 horas por 14 dias." },
      { contexto: "Leptospirose — forma leve", texto: "USO ORAL\n1. Doxiciclina 100 mg ----------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias." },
      { contexto: "Febre maculosa / riquetsiose (adulto e criança)", texto: "Doxiciclina 100 mg VO (ou IV) de 12/12h, até 3 dias após o fim da febre (mínimo 5–7 dias).\nCriança < 45 kg: 2,2 mg/kg por dose de 12/12h (máx 100 mg por dose). É o tratamento de escolha também em < 8 anos: iniciar já na suspeita." }
    ]
  },
  rifampicina: {
    receita: "antimicrobiano",
    usos: "Tuberculose (RHZE), infecção latente por TB (4R), hanseníase (PQT), profilaxia de contatos de meningite meningocócica e por Hib.",
    prescrever: [
      { contexto: "Tuberculose — fase intensiva (RHZE, 2 meses)", texto: "USO ORAL\n1. Rifampicina + isoniazida + pirazinamida + etambutol 150/75/400/275 mg --- comprimidos conforme o peso\n   Tomar ___ comprimidos 1 vez ao dia, em jejum, por 2 meses.\n   (20–35 kg: 2 comp · 36–50 kg: 3 comp · 51–70 kg: 4 comp · > 70 kg: 5 comp. Depois RH 150/75 mg pelo mesmo número de comprimidos por 4 meses.)" },
      { contexto: "Profilaxia de meningite meningocócica — adulto", texto: "USO ORAL\n1. Rifampicina 300 mg ----------------------- 8 cápsulas\n   Tomar 2 cápsulas (600 mg) de 12 em 12 horas por 2 dias.\n   (Urina e lágrima ficam alaranjadas; reduz o efeito do anticoncepcional.)" },
      { contexto: "Profilaxia de meningite meningocócica — criança", texto: "USO ORAL\n1. Rifampicina suspensão 20 mg/mL ------------ 1 frasco\n   Dar ___ mL de 12 em 12 horas por 2 dias.\n   (≥ 1 mês: 10 mg/kg por dose, máx 600 mg; < 1 mês: 5 mg/kg por dose. Hib: 20 mg/kg 1×/dia por 4 dias, máx 600 mg.)" },
      { contexto: "Infecção latente por TB — 4R", texto: "USO ORAL\n1. Rifampicina 300 mg ----------------------- 60 cápsulas (por mês)\n   Tomar 2 cápsulas (600 mg) 1 vez ao dia, em jejum, por 4 meses.\n   (Adulto 10 mg/kg/dia, máx 600 mg; criança 15 mg/kg/dia (10–20), máx 600 mg.)" }
    ]
  },

  /* ---------- antivirais / antifúngicos / antiparasitários (base) ---------- */
  aciclovir: {
    receita: "simples",
    usos: "Herpes genital e labial, herpes-zóster, varicela em grupos de risco, encefalite herpética (IV).",
    prescrever: [
      { contexto: "Herpes genital — 1º episódio", texto: "USO ORAL\n1. Aciclovir 200 mg ------------------------- 42 comprimidos\n   Tomar 2 comprimidos (400 mg) de 8 em 8 horas por 7 dias (até 10 dias se não cicatrizar)." },
      { contexto: "Herpes genital — recorrência", texto: "USO ORAL\n1. Aciclovir 200 mg ------------------------- 30 comprimidos\n   Tomar 2 comprimidos (400 mg) de 8 em 8 horas por 5 dias, iniciando nos primeiros sintomas." },
      { contexto: "Herpes-zóster / varicela do adulto", texto: "USO ORAL\n1. Aciclovir 400 mg ------------------------- 70 comprimidos\n   Tomar 2 comprimidos (800 mg) 5 vezes ao dia (de 4 em 4 horas, pulando a madrugada) por 7 dias.\n   (Iniciar em até 72 h; beber bastante água.)" },
      { contexto: "Criança — varicela (20 mg/kg/dose)", texto: "USO ORAL\n1. Aciclovir suspensão 200 mg/5 mL ---------- 1 frasco\n   Dar ___ mL 4 vezes ao dia (de 6 em 6 horas) por 5 dias.\n   (20 mg/kg por dose; máximo 800 mg por dose. Iniciar em até 24 h do exantema.)" },
      { contexto: "Hospitalar — encefalite / zóster grave", texto: "Aciclovir 10 mg/kg IV de 8/8h, diluído em SF 0,9% (concentração ≤ 7 mg/mL; ex.: 500 mg em 100 mL), infundir em 1 hora, por 14–21 dias (encefalite).\nHidratar bem; ajustar à função renal." }
    ]
  },
  oseltamivir: {
    receita: "simples",
    usos: "Influenza em grupo de risco ou SRAG (iniciar de preferência em até 48 h, mas tratar SRAG mesmo depois), quimioprofilaxia de contatos de risco.",
    prescrever: [
      { contexto: "Adulto — tratamento (5 dias)", texto: "USO ORAL\n1. Fosfato de oseltamivir 75 mg -------------- 10 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 5 dias." },
      { contexto: "Adulto — quimioprofilaxia (10 dias)", texto: "USO ORAL\n1. Fosfato de oseltamivir 75 mg -------------- 10 cápsulas\n   Tomar 1 cápsula 1 vez ao dia por 10 dias." },
      { contexto: "Criança ≥ 1 ano — tratamento (dose por peso)", texto: "USO ORAL\n1. Fosfato de oseltamivir ___ mg ------------- 10 cápsulas\n   Dar 1 cápsula de 12 em 12 horas por 5 dias (pode abrir a cápsula e misturar em pequena quantidade de alimento doce).\n   (≤ 15 kg: 30 mg · 15–23 kg: 45 mg · 23–40 kg: 60 mg · > 40 kg: 75 mg, de 12/12h. < 1 ano: 3 mg/kg de 12/12h.)" }
    ]
  },
  fluconazol: {
    receita: "simples",
    usos: "Candidíase vulvovaginal, candidíase oral e esofágica, candidíase recorrente; criptococose e candidemia (hospitalar).",
    prescrever: [
      { contexto: "Candidíase vulvovaginal (não gestante)", texto: "USO ORAL\n1. Fluconazol 150 mg ------------------------ 1 cápsula\n   Tomar 1 cápsula, dose única." },
      { contexto: "Candidíase vulvovaginal recorrente (≥ 4 episódios/ano)", texto: "USO ORAL\n1. Fluconazol 150 mg ------------------------ 3 cápsulas (indução) + 24 cápsulas (manutenção)\n   Tomar 1 cápsula nos dias 1, 4 e 7; depois 1 cápsula por semana por 6 meses." },
      { contexto: "Adulto — candidíase oral", texto: "USO ORAL\n1. Fluconazol 100 mg ------------------------ 15 cápsulas\n   Tomar 2 cápsulas (200 mg) no 1º dia e depois 1 cápsula (100 mg) 1 vez ao dia por 7 a 14 dias.\n   (Esofágica: 200–400 mg/dia por 14–21 dias.)" },
      { contexto: "Criança — candidíase oral/esofágica", texto: "USO ORAL\n1. Fluconazol (suspensão oral ou manipulado em mg/mL) --- 1 frasco\n   Dar ___ mL (6 mg/kg) no 1º dia e depois ___ mL (3 mg/kg) 1 vez ao dia por 7 a 14 dias.\n   (Máximo 400 mg por dose. Conferir a concentração do frasco.)" },
      { contexto: "Hospitalar / PS", texto: "Fluconazol (solução pronta 2 mg/mL) IV: dose de ataque 800 mg (12 mg/kg) e depois 400 mg (6 mg/kg) de 24/24h, velocidade máxima 200 mg/h." }
    ]
  },
  ivermectina: {
    receita: "simples",
    usos: "Escabiose, pediculose, estrongiloidíase, larva migrans cutânea, oncocercose.",
    prescrever: [
      { contexto: "Escabiose / pediculose (dose por peso)", texto: "USO ORAL\n1. Ivermectina 6 mg ------------------------- ___ comprimidos\n   Tomar ___ comprimido(s) em dose única, com água; repetir a mesma dose após 7 dias.\n   (200 mcg/kg: 15–24 kg ½ comp · 25–35 kg 1 comp · 36–50 kg 1½ comp · 51–65 kg 2 comp · 66–79 kg 2½ comp · ≥ 80 kg 3 comp.)\n   (Tratar os contactantes e lavar roupas de cama e de uso em água quente.)" },
      { contexto: "Estrongiloidíase / larva migrans", texto: "USO ORAL\n1. Ivermectina 6 mg ------------------------- ___ comprimidos\n   Tomar ___ comprimido(s) (200 mcg/kg) em dose única.\n   (Estrongiloidíase: muitos protocolos repetem por 2 dias; imunossuprimido: esquema prolongado.)" }
    ]
  },
  albendazol: {
    receita: "simples",
    usos: "Ascaridíase, ancilostomíase, tricuríase, enterobíase, estrongiloidíase, teníase, giardíase (criança), larva migrans cutânea.",
    prescrever: [
      { contexto: "Adulto e criança ≥ 2 anos — helmintíases intestinais", texto: "USO ORAL\n1. Albendazol 400 mg ----------------------- 1 comprimido mastigável\n   Mastigar 1 comprimido em dose única.\n   (Enterobíase: repetir após 2 semanas e tratar a família.)" },
      { contexto: "Criança — suspensão", texto: "USO ORAL\n1. Albendazol suspensão 40 mg/mL ------------- 1 frasco\n   ≥ 2 anos: dar 10 mL (400 mg) em dose única. 1 a 2 anos: 5 mL (200 mg)." },
      { contexto: "Estrongiloidíase / teníase / larva migrans", texto: "USO ORAL\n1. Albendazol 400 mg ----------------------- 3 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 3 dias." },
      { contexto: "Giardíase (criança ≥ 2 anos)", texto: "USO ORAL\n1. Albendazol suspensão 40 mg/mL ------------- 5 frascos (ou 5 comprimidos 400 mg)\n   Dar 10 mL (400 mg) 1 vez ao dia por 5 dias." }
    ]
  }
});

adicionarMedicamentos([
  /* ---------- antibióticos: penicilinas ---------- */
  { id: "ampicilina", nomes: ["Ampicilina"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "penicilina"],
    usos: "Meningite (cobertura de Listeria em neonato/idoso), sepse neonatal (com gentamicina), enterococo, corioamnionite, profilaxia intraparto de estreptococo do grupo B.",
    ped: { dose: 100, faixa: "100–200 mg/kg/dia ÷ 6/6h (meningite 300–400 mg/kg/dia ÷ 4/4h)", porDia: true, divisoes: 4, intervalo: "6/6h", maxDose: 2000, maxDia: 12000 },
    apres: [{ rotulo: "frasco 500 mg (reconstituir)", mgPorComp: 500 }, { rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 6/6h (meningite/endocardite: 2 g 4/4h)",
    renal: [{ abaixo: 10, texto: "Dose a cada 12–24 h." }, { abaixo: 50, texto: "Dose a cada 6–12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível; usada na profilaxia de estreptococo do grupo B e na corioamnionite." },
    alergia: ["penicilinas"], contra: ["Mononucleose (exantema)"],
    prescrever: [
      { contexto: "Hospitalar / PS — adulto", texto: "Ampicilina 2 g + SF 0,9% 100 mL IV em 30 min de 6/6h (meningite: de 4/4h).\n(Usar logo após o preparo; preferir SF 0,9% ao soro glicosado.)" },
      { contexto: "Profilaxia intraparto de estreptococo do grupo B", texto: "Ampicilina 2 g IV (ataque), depois 1 g IV de 4/4h até o parto." },
      { contexto: "Criança — IV", texto: "Ampicilina ___ mg IV de 6/6h, diluída em SF 0,9% e infundida em 15–30 min.\n(100–200 mg/kg/dia ÷ 4; meningite 300–400 mg/kg/dia ÷ 6 (4/4h); máximo 2 g por dose e 12 g/dia.)" }
    ] },
  { id: "oxacilina", nomes: ["Oxacilina"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "penicilina"],
    usos: "Infecção por S. aureus sensível à oxacilina: celulite grave, abscesso, osteomielite, artrite séptica, endocardite, bacteremia.",
    ped: { dose: 150, faixa: "100–200 mg/kg/dia ÷ 4/4h a 6/6h", porDia: true, divisoes: 4, intervalo: "6/6h (4/4h nos casos graves)", maxDose: 2000, maxDia: 12000 },
    apres: [{ rotulo: "frasco 500 mg (reconstituir)", mgPorComp: 500 }],
    adulto: "1–2 g IV 4/4h a 6/6h (endocardite/osteomielite: 2 g 4/4h)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["penicilinas"], contra: ["Flebite: trocar o acesso com frequência", "Hepatite e neutropenia em uso prolongado (hemograma e TGO/TGP semanais)"],
    prescrever: [
      { contexto: "Hospitalar / PS — adulto", texto: "Oxacilina 2 g + SF 0,9% 100 mL IV em 30–60 min de 4/4h.\n(Infecção menos grave: 1–2 g de 6/6h.)" },
      { contexto: "Criança — IV", texto: "Oxacilina ___ mg IV de 6/6h (ou 4/4h), diluída em SF 0,9% e infundida em 30 min.\n(100–200 mg/kg/dia; máximo 2 g por dose e 12 g/dia.)" }
    ] },
  { id: "penicilina-cristalina", nomes: ["Penicilina G cristalina", "penicilina cristalina", "penicilina G potássica", "benzilpenicilina potássica"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "penicilina"],
    usos: "Neurossífilis e sífilis congênita, sífilis ocular/otológica, infecções graves por estreptococo (erisipela grave, endocardite), leptospirose grave.",
    apres: [{ rotulo: "frasco-ampola 5.000.000 UI" }],
    adulto: "Neurossífilis: 3–4 milhões UI IV 4/4h (18–24 milhões UI/dia) por 14 dias",
    renal: [{ abaixo: 10, texto: "Reduzir a dose diária (risco de convulsão e hipercalemia em doses altas)." }],
    gestacao: { nivel: "compativel", texto: "Compatível; tratamento da neurossífilis na gestante." },
    alergia: ["penicilinas"], contra: ["Sal potássico (cerca de 1,7 mEq de K por milhão de UI): cuidado na insuficiência renal e hipercalemia", "Convulsão em doses altas"],
    prescrever: [
      { contexto: "Neurossífilis / sífilis ocular (adulto)", texto: "Penicilina G cristalina 4.000.000 UI + SF 0,9% 100 mL IV em 30–60 min de 4/4h, por 14 dias (24 milhões UI/dia)." },
      { contexto: "Sífilis congênita (recém-nascido)", texto: "Penicilina G cristalina 50.000 UI/kg/dose IV de 12/12h (até 7 dias de vida) ou de 8/8h (após 7 dias de vida), por 10 dias.\n(Conferir o esquema e os critérios no PCDT de transmissão vertical.)" }
    ] },

  /* ---------- antibióticos: cefalosporinas ---------- */
  { id: "cefadroxila", nomes: ["Cefadroxila", "cefadroxil"], classe: "antibioticos", receita: "antimicrobiano", tags: ["betalactamico", "cefalosporina", "cadeia-aminopenicilina"],
    usos: "Infecção de pele e partes moles, faringite (alternativa), ITU; posologia de 12/12h ou 1×/dia facilita a adesão.",
    ped: { dose: 30, faixa: "30 mg/kg/dia ÷ 2 (faringite: 30 mg/kg 1×/dia)", porDia: true, divisoes: 2, intervalo: "12/12h", maxDose: 1000, maxDia: 2000 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "suspensão 500 mg/5 mL (100 mg/mL)", mgPorMl: 100 }, { rotulo: "cápsula 500 mg", mgPorComp: 500 }],
    adulto: "500 mg–1 g 12/12h (faringite: 1 g 1×/dia por 10 dias)",
    renal: [{ abaixo: 10, texto: "500 mg a cada 36 h (após dose inicial de 1 g)." }, { abaixo: 25, texto: "500 mg a cada 24 h." }, { abaixo: 50, texto: "500 mg a cada 12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: [],
    prescrever: [
      { contexto: "Adulto — pele e partes moles (7 dias)", texto: "USO ORAL\n1. Cefadroxila 500 mg ------------------------ 14 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 7 dias.\n   (Infecção mais extensa: 1 g de 12/12h.)" },
      { contexto: "Adulto — faringite estreptocócica (10 dias)", texto: "USO ORAL\n1. Cefadroxila 500 mg ------------------------ 20 cápsulas\n   Tomar 2 cápsulas (1 g) 1 vez ao dia por 10 dias." },
      { contexto: "Criança — ambulatorial (30 mg/kg/dia)", texto: "USO ORAL\n1. Cefadroxila suspensão 250 mg/5 mL -------- 1 frasco\n   Dar ___ mL de 12 em 12 horas por 7 a 10 dias.\n   (30 mg/kg/dia ÷ 2; máximo 2 g/dia. Faringite: 30 mg/kg 1×/dia por 10 dias, máx 1 g.)" }
    ] },
  { id: "cefuroxima", nomes: ["Cefuroxima", "cefuroxima axetil"], classe: "antibioticos", receita: "antimicrobiano", tags: ["betalactamico", "cefalosporina"],
    usos: "Sinusite e OMA (alternativa, inclusive em alergia não grave à penicilina), faringite, pneumonia comunitária, ITU, doença de Lyme.",
    ped: { dose: 30, faixa: "30 mg/kg/dia VO ÷ 2", porDia: true, divisoes: 2, intervalo: "12/12h", maxDose: 500, maxDia: 1000 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }, { rotulo: "frasco IV 750 mg", mgPorComp: 750 }],
    adulto: "250–500 mg VO 12/12h, após as refeições · IV 750 mg–1,5 g 8/8h",
    renal: [{ abaixo: 10, texto: "VO: dose habitual a cada 48 h. IV: 750 mg a cada 24 h." }, { abaixo: 30, texto: "VO: dose habitual a cada 24 h. IV: 750 mg a cada 12 h (ClCr 10–20)." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: [],
    prescrever: [
      { contexto: "Adulto — sinusite / pneumonia / faringite", texto: "USO ORAL\n1. Cefuroxima axetil 500 mg ----------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após as refeições, por 7 dias.\n   (Faringite: 250 mg 12/12h por 10 dias. Cistite: 250 mg 12/12h.)" },
      { contexto: "Criança — OMA / sinusite (30 mg/kg/dia)", texto: "USO ORAL\n1. Cefuroxima axetil suspensão 250 mg/5 mL -- 1 frasco\n   Dar ___ mL de 12 em 12 horas, após as refeições, por 10 dias.\n   (30 mg/kg/dia ÷ 2; máximo 500 mg por dose.)" },
      { contexto: "Hospitalar / PS", texto: "Cefuroxima 750 mg (ou 1,5 g) + SF 0,9% 100 mL IV em 30 min de 8/8h." }
    ] },
  { id: "cefazolina", nomes: ["Cefazolina"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Profilaxia cirúrgica (incluindo cesárea), celulite e infecção de pele internada (S. aureus sensível), osteomielite, bacteremia por MSSA.",
    ped: { dose: 50, faixa: "25–100 mg/kg/dia ÷ 8/8h (profilaxia cirúrgica 30 mg/kg)", porDia: true, divisoes: 3, intervalo: "8/8h", maxDose: 2000 },
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 8/8h · profilaxia cirúrgica 2 g IV (3 g se ≥ 120 kg) 30–60 min antes da incisão",
    renal: [{ abaixo: 10, texto: "50% da dose a cada 18–24 h." }, { abaixo: 35, texto: "50% da dose a cada 12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível; profilaxia de escolha na cesárea." },
    alergia: ["cefalosporinas"], contra: [],
    prescrever: [
      { contexto: "Profilaxia cirúrgica / cesárea", texto: "Cefazolina 2 g IV (3 g se ≥ 120 kg), diluída em 10–20 mL de água destilada em 3–5 min ou em SF 0,9% 100 mL em 15–30 min, 30–60 min antes da incisão.\nRepetir a cada 4 h de cirurgia ou se sangramento > 1.500 mL." },
      { contexto: "Hospitalar — tratamento", texto: "Cefazolina 2 g + SF 0,9% 100 mL IV em 30 min de 8/8h." },
      { contexto: "Criança — IV", texto: "Cefazolina ___ mg IV de 8/8h, em SF 0,9% em 30 min.\n(25–100 mg/kg/dia ÷ 3; profilaxia 30 mg/kg dose única pré-incisão; máximo 2 g por dose.)" }
    ] },
  { id: "ceftazidima", nomes: ["Ceftazidima"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Infecção por Pseudomonas aeruginosa (conforme antibiograma), neutropenia febril, infecção hospitalar.",
    ped: { dose: 50, faixa: "30–50 mg/kg/dose 8/8h", intervalo: "8/8h", maxDose: 2000, maxDia: 6000 },
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 8/8h",
    renal: [{ abaixo: 16, texto: "500 mg a cada 24 h (< 6: a cada 48 h)." }, { abaixo: 31, texto: "1 g a cada 24 h." }, { abaixo: 51, texto: "1 g a cada 12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: ["Fraca contra gram-positivos (não usar sozinha para S. aureus ou pneumococo)"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Ceftazidima 2 g + SF 0,9% 100 mL IV em 30 min de 8/8h." },
      { contexto: "Criança — IV", texto: "Ceftazidima ___ mg IV de 8/8h, em SF 0,9% em 30 min.\n(30–50 mg/kg por dose; máximo 2 g por dose e 6 g/dia.)" }
    ] },
  { id: "cefepima", nomes: ["Cefepima", "cefepime"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Neutropenia febril, pneumonia hospitalar, infecção por Pseudomonas e gram-negativos (conforme antibiograma), meningite pós-neurocirúrgica.",
    ped: { dose: 50, faixa: "50 mg/kg/dose 12/12h (neutropenia febril/meningite: 8/8h)", intervalo: "12/12h ou 8/8h", maxDose: 2000 },
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }, { rotulo: "frasco 2 g (reconstituir)", mgPorComp: 2000 }],
    adulto: "1–2 g IV 12/12h · neutropenia febril/Pseudomonas: 2 g 8/8h",
    renal: [{ abaixo: 11, texto: "Esquema de 2 g 8/8h → 1 g a cada 24 h." }, { abaixo: 30, texto: "Esquema de 2 g 8/8h → 2 g a cada 24 h." }, { abaixo: 60, texto: "Esquema de 2 g 8/8h → 2 g a cada 12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: ["Neurotoxicidade (confusão, mioclonia, estado de mal não convulsivo) se a dose não for ajustada ao rim"],
    prescrever: [
      { contexto: "Hospitalar — neutropenia febril / Pseudomonas", texto: "Cefepima 2 g + SF 0,9% 100 mL IV em 30 min de 8/8h." },
      { contexto: "Criança — IV", texto: "Cefepima ___ mg IV de 8/8h (ou 12/12h), em SF 0,9% em 30 min.\n(50 mg/kg por dose; máximo 2 g por dose.)" }
    ] },

  /* ---------- antibióticos: outros betalactâmicos e glicopeptídeo ---------- */
  { id: "piperacilina-tazobactam", nomes: ["Piperacilina-tazobactam", "piperacilina + tazobactam", "piperacilina/tazobactam", "piperacilina com tazobactam", "pipe-tazo", "Tazocin"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "penicilina"],
    usos: "Sepse de foco abdominal, pneumonia hospitalar, neutropenia febril, pé diabético grave, infecção por Pseudomonas (conforme antibiograma).",
    ped: { dose: 100, faixa: "> 9 meses: 100 mg/kg de piperacilina 8/8h (2–9 meses: 80 mg/kg); neutropenia febril 80 mg/kg 6/6h", intervalo: "8/8h", maxDose: 4000, unidade: "mg de piperacilina" },
    apres: [{ rotulo: "frasco 4 g/0,5 g (reconstituir)", mgPorComp: 4000 }],
    adulto: "4,5 g IV 6/6h (ou 8/8h nas infecções menos graves; infusão estendida em 4 h)",
    renal: [{ abaixo: 20, texto: "2,25 g a cada 8 h (pneumonia hospitalar: 2,25 g a cada 6 h)." }, { abaixo: 40, texto: "2,25 g a cada 6 h (pneumonia hospitalar: 3,375 g a cada 6 h)." }],
    gestacao: { nivel: "compativel", texto: "Compatível quando indicada." },
    alergia: ["penicilinas"], contra: ["Nefrotoxicidade somada com vancomicina: monitorar creatinina"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Piperacilina-tazobactam 4,5 g: reconstituir em 20 mL de água destilada ou SF, diluir em SF 0,9% 100 mL e infundir IV em 30 min de 6/6h.\n(Opção: infusão estendida em 4 h de 8/8h.)" },
      { contexto: "Criança — IV", texto: "Piperacilina-tazobactam ___ mg (de piperacilina) IV de 8/8h, em SF 0,9% em 30 min.\n(> 9 meses: 100 mg/kg de piperacilina por dose; 2–9 meses: 80 mg/kg; máximo 4 g de piperacilina por dose.)" }
    ] },
  { id: "meropenem", nomes: ["Meropenem"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico"],
    usos: "Sepse grave/choque com risco de multirresistência, infecção por gram-negativo produtor de ESBL, meningite (conforme antibiograma), neutropenia febril.",
    ped: { dose: 20, faixa: "≥ 3 meses: 20 mg/kg 8/8h (meningite 40 mg/kg 8/8h)", intervalo: "8/8h", maxDose: 2000 },
    apres: [{ rotulo: "frasco 500 mg", mgPorComp: 500 }, { rotulo: "frasco 1 g", mgPorComp: 1000 }],
    adulto: "1 g IV 8/8h (meningite: 2 g 8/8h)",
    renal: [{ abaixo: 10, texto: "500 mg a cada 24 h." }, { abaixo: 26, texto: "500 mg a cada 12 h." }, { abaixo: 51, texto: "1 g a cada 12 h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar quando indicado (sem alternativa)." },
    alergia: [], contra: ["Ácido valproico: o meropenem derruba o nível do valproato (risco de convulsão) — evitar a associação", "Alergia grave a betalactâmico: reatividade cruzada baixa, avaliar"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Meropenem 1 g + SF 0,9% 100 mL IV em 30 min de 8/8h.\n(Opção: infusão estendida em 3 h. Meningite: 2 g de 8/8h.)" },
      { contexto: "Criança — IV", texto: "Meropenem ___ mg IV de 8/8h, em SF 0,9% em 30 min.\n(≥ 3 meses: 20 mg/kg por dose, máx 1 g; meningite 40 mg/kg por dose, máx 2 g.)" }
    ] },
  { id: "ertapenem", nomes: ["Ertapenem"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico"],
    usos: "Infecção intra-abdominal, pé diabético, pielonefrite/ITU por ESBL, pneumonia comunitária; dose única diária permite tratamento parenteral ambulatorial. Não cobre Pseudomonas nem Acinetobacter.",
    ped: { dose: 15, faixa: "3 meses a 12 anos: 15 mg/kg 12/12h (máx 1 g/dia)", intervalo: "12/12h", maxDose: 500, maxDia: 1000 },
    apres: [{ rotulo: "frasco 1 g", mgPorComp: 1000 }],
    adulto: "1 g IV ou IM 1×/dia",
    renal: [{ abaixo: 31, texto: "500 mg 1×/dia." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar quando indicado." },
    alergia: [], contra: ["Ácido valproico (reduz o nível do valproato)", "Não diluir em soro glicosado"],
    prescrever: [
      { contexto: "Hospitalar / ambulatorial parenteral", texto: "Ertapenem 1 g: reconstituir em 10 mL de água destilada ou SF, diluir em SF 0,9% 50 mL e infundir IV em 30 min, 1 vez ao dia." },
      { contexto: "Criança — IV", texto: "Ertapenem ___ mg IV de 12/12h, em SF 0,9% em 30 min.\n(3 meses a 12 anos: 15 mg/kg por dose; máximo 1 g/dia.)" }
    ] },
  { id: "vancomicina", nomes: ["Vancomicina"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "MRSA (bacteremia, pneumonia, pele grave, osteomielite), meningite (com ceftriaxona, se pneumococo resistente), endocardite, colite por C. difficile (via oral).",
    ped: { dose: 15, faixa: "15 mg/kg/dose 6/6h (60 mg/kg/dia); ajustar pelo nível sérico", intervalo: "6/6h" },
    apres: [{ rotulo: "frasco 500 mg", mgPorComp: 500 }, { rotulo: "frasco 1 g", mgPorComp: 1000 }],
    adulto: "15–20 mg/kg IV 8/8h a 12/12h (grave: ataque 25–30 mg/kg); guiar pelo nível/AUC · C. difficile: 125 mg VO 6/6h por 10 dias",
    renal: [{ abaixo: 50, texto: "Aumentar o intervalo (12–24 h ou mais) e guiar pelo nível sérico; manter a dose de ataque." }],
    gestacao: { nivel: "cautela", texto: "Usar quando indicada, com monitorização do nível sérico." },
    alergia: [], contra: ["Nefrotoxicidade (pior com aminoglicosídeo, piperacilina-tazobactam, contraste)", "Síndrome do homem vermelho: infundir devagar (≥ 60 min por grama)"],
    prescrever: [
      { contexto: "Hospitalar — IV", texto: "Vancomicina ___ mg (15–20 mg/kg) + SF 0,9% 250 mL IV em 2 horas de 12/12h (ou 8/8h).\n(Concentração ≤ 5 mg/mL; velocidade ≤ 1 g/hora. Nível de vale antes da 4ª dose ou AUC conforme protocolo.)" },
      { contexto: "Colite por C. difficile — via oral", texto: "Vancomicina 125 mg VO de 6/6h por 10 dias.\n(Usar o pó do frasco IV reconstituído e diluído em água, se não houver cápsula.)" },
      { contexto: "Criança — IV", texto: "Vancomicina ___ mg IV de 6/6h, diluída em SF 0,9% (≤ 5 mg/mL) e infundida em 60 min.\n(15 mg/kg por dose; ajustar pelo nível sérico.)" }
    ] },

  /* ---------- antibióticos: lincosamida e aminoglicosídeos ---------- */
  { id: "clindamicina", nomes: ["Clindamicina"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Celulite/erisipela e infecção odontogênica em alérgico à penicilina, abscesso (S. aureus comunitário), fasceíte necrosante e choque tóxico (associada), DIP hospitalar (com gentamicina), vaginose (creme vaginal).",
    ped: { dose: 30, faixa: "VO 20–30 mg/kg/dia ÷ 3–4; IV 25–40 mg/kg/dia ÷ 3–4", porDia: true, divisoes: 3, intervalo: "8/8h", maxDose: 900, maxDia: 2700 },
    apres: [{ rotulo: "cápsula 300 mg", mgPorComp: 300 }, { rotulo: "cápsula 150 mg", mgPorComp: 150 }, { rotulo: "injetável 150 mg/mL", mgPorMl: 150 }],
    adulto: "VO 300 mg 6/6h ou 8/8h (até 450 mg 6/6h) · IV 600–900 mg 8/8h",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Colite por C. difficile (suspender se diarreia importante)"],
    prescrever: [
      { contexto: "Adulto — celulite / infecção odontogênica (alergia à penicilina)", texto: "USO ORAL\n1. Clindamicina 300 mg ---------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias, com um copo cheio de água." },
      { contexto: "Vaginose bacteriana — creme vaginal", texto: "USO VAGINAL\n1. Clindamicina creme vaginal 2% ------------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador cheio (5 g) na vagina à noite, ao deitar, por 7 dias." },
      { contexto: "Hospitalar / PS", texto: "Clindamicina 600 mg + SF 0,9% 100 mL IV em 20–30 min de 8/8h (até 900 mg de 8/8h).\n(Concentração ≤ 18 mg/mL; velocidade ≤ 30 mg/min.)" },
      { contexto: "Criança — VO/IV", texto: "Clindamicina ___ mg de 8/8h (VO ou IV em SF 0,9% em 30 min).\n(VO 20–30 mg/kg/dia; IV 25–40 mg/kg/dia; ÷ 3 ou 4 tomadas; máximo 900 mg por dose. Não há suspensão comercial: cápsula para crianças maiores ou formulação manipulada.)" }
    ] },
  { id: "gentamicina", nomes: ["Gentamicina"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Pielonefrite e ITU complicada, sepse neonatal (com ampicilina), DIP e corioamnionite (associada), sinergismo na endocardite.",
    ped: { dose: 5, faixa: "> 1 mês: 5–7,5 mg/kg/dia em dose única diária (neonato: conforme idade gestacional)", intervalo: "24/24h" },
    apres: [{ rotulo: "ampola 40 mg/mL (80 mg/2 mL)", mgPorMl: 40 }, { rotulo: "ampola 10 mg/mL (20 mg/2 mL)", mgPorMl: 10 }],
    adulto: "5–7 mg/kg IV/IM 1×/dia (ou 1–1,7 mg/kg 8/8h; sinergismo 3 mg/kg/dia)",
    renal: [{ abaixo: 60, texto: "Aumentar o intervalo (36–48 h) e guiar pelo nível sérico; evitar se houver alternativa." }],
    gestacao: { nivel: "cautela", texto: "Usar só com indicação clara (ex.: corioamnionite, pielonefrite grave); risco de ototoxicidade fetal." },
    alergia: [], contra: ["Nefrotoxicidade e ototoxicidade (pior com vancomicina, furosemida, contraste)", "Miastenia gravis", "Peso: usar peso ideal (ou ajustado no obeso)"],
    prescrever: [
      { contexto: "Hospitalar — dose única diária", texto: "Gentamicina ___ mg (5–7 mg/kg) + SF 0,9% 100 mL IV em 30–60 min de 24/24h.\n(Creatinina a cada 2–3 dias; nível sérico se uso > 3 dias ou função renal alterada.)" },
      { contexto: "Criança — IV", texto: "Gentamicina ___ mg IV 1 vez ao dia, diluída em SF 0,9% e infundida em 30 min.\n(> 1 mês: 5–7,5 mg/kg/dia em dose única diária. Neonato: dose e intervalo pela idade gestacional — conferir protocolo.)" }
    ] },
  { id: "amicacina", nomes: ["Amicacina"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Gram-negativos resistentes à gentamicina (conforme antibiograma), associada a betalactâmico na sepse/neutropenia febril; micobactérias (esquemas especiais).",
    ped: { dose: 15, faixa: "15–20 mg/kg/dia em dose única diária", intervalo: "24/24h", maxDose: 1500 },
    apres: [{ rotulo: "ampola 250 mg/mL (500 mg/2 mL)", mgPorMl: 250 }, { rotulo: "ampola 50 mg/mL (100 mg/2 mL)", mgPorMl: 50 }],
    adulto: "15 mg/kg IV/IM 1×/dia (máx 1,5 g/dia)",
    renal: [{ abaixo: 60, texto: "Aumentar o intervalo e guiar pelo nível sérico; evitar se houver alternativa." }],
    gestacao: { nivel: "evitar", texto: "Evitar: risco de ototoxicidade fetal; usar só se não houver alternativa." },
    alergia: [], contra: ["Nefrotoxicidade e ototoxicidade", "Miastenia gravis"],
    prescrever: [
      { contexto: "Hospitalar — dose única diária", texto: "Amicacina ___ mg (15 mg/kg; máx 1,5 g) + SF 0,9% 100 mL IV em 30–60 min de 24/24h.\n(Creatinina a cada 2–3 dias; nível sérico conforme protocolo.)" },
      { contexto: "Criança — IV", texto: "Amicacina ___ mg IV 1 vez ao dia, em SF 0,9% em 30–60 min.\n(15–20 mg/kg/dia; máximo 1,5 g/dia.)" }
    ] },

  /* ---------- antivirais ---------- */
  { id: "valaciclovir", nomes: ["Valaciclovir"], classe: "antivirais", receita: "simples", tags: [],
    usos: "Herpes-zóster, herpes genital (episódio, recorrência e supressão), herpes labial; menos tomadas que o aciclovir.",
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "Zóster: 1 g 8/8h por 7 dias · herpes genital 1º episódio: 1 g 12/12h por 7–10 dias · recorrência: 500 mg 12/12h por 3 dias",
    renal: [{ abaixo: 10, texto: "Zóster: 500 mg a cada 24 h." }, { abaixo: 30, texto: "Zóster: 1 g a cada 24 h. Herpes genital: 500 mg a cada 24 h." }, { abaixo: 50, texto: "Zóster: 1 g a cada 12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível (pró-fármaco do aciclovir)." },
    alergia: [], contra: ["Hidratar bem; ajustar à função renal (neurotoxicidade em idosos e renais)"],
    prescrever: [
      { contexto: "Herpes-zóster (7 dias)", texto: "USO ORAL\n1. Valaciclovir 500 mg ---------------------- 42 comprimidos\n   Tomar 2 comprimidos (1 g) de 8 em 8 horas por 7 dias.\n   (Iniciar em até 72 h do início das lesões.)" },
      { contexto: "Herpes genital — 1º episódio", texto: "USO ORAL\n1. Valaciclovir 500 mg ---------------------- 28 comprimidos\n   Tomar 2 comprimidos (1 g) de 12 em 12 horas por 7 dias." },
      { contexto: "Herpes genital — recorrência / supressão", texto: "USO ORAL\n1. Valaciclovir 500 mg ---------------------- 6 comprimidos\n   Recorrência: tomar 1 comprimido de 12 em 12 horas por 3 dias.\n   (Supressão: 500 mg 1×/dia, uso contínuo — 30 comprimidos/mês.)" },
      { contexto: "Herpes labial (≥ 12 anos)", texto: "USO ORAL\n1. Valaciclovir 500 mg ---------------------- 8 comprimidos\n   Tomar 4 comprimidos (2 g) de 12 em 12 horas por 1 dia, nos primeiros sintomas." }
    ] },

  /* ---------- antifúngicos ---------- */
  { id: "nistatina", nomes: ["Nistatina"], classe: "antifungicos", receita: "simples", tags: [],
    usos: "Candidíase oral (sapinho), candidíase vulvovaginal (preferida na gestação junto com os azóis tópicos), dermatite de fraldas por Candida (creme).",
    adulto: "Suspensão oral 100.000 UI/mL: 4–6 mL 4×/dia · creme vaginal 25.000 UI/g: 1 aplicador à noite por 14 dias",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível (não é absorvida)." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Candidíase oral — lactente", texto: "USO ORAL\n1. Nistatina suspensão oral 100.000 UI/mL --- 1 frasco\n   Aplicar 1 a 2 mL na boca (metade em cada lado), 4 vezes ao dia, após as mamadas, por 7 a 14 dias e até 2 dias após o desaparecimento das placas.\n   (Prematuro/baixo peso: 1 mL 4×/dia. Tratar também o mamilo se amamentação.)" },
      { contexto: "Candidíase oral — criança maior e adulto", texto: "USO ORAL\n1. Nistatina suspensão oral 100.000 UI/mL --- 1 frasco\n   Bochechar 4 a 6 mL por alguns minutos e engolir, 4 vezes ao dia, por 7 a 14 dias." },
      { contexto: "Candidíase vulvovaginal", texto: "USO VAGINAL\n1. Nistatina creme vaginal 25.000 UI/g ------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador cheio (4 g = 100.000 UI) na vagina à noite, ao deitar, por 14 dias." },
      { contexto: "Dermatite de fraldas por Candida", texto: "USO TÓPICO\n1. Nistatina + óxido de zinco creme --------- 1 bisnaga\n   Aplicar uma camada fina na área afetada a cada troca de fralda, após higiene, por 7 a 10 dias." }
    ] },
  { id: "miconazol", nomes: ["Miconazol"], classe: "antifungicos", receita: "simples", tags: [],
    usos: "Candidíase vulvovaginal (inclusive na gestação), candidíase cutânea, tinha do corpo/crural/pés, candidíase oral (gel oral).",
    adulto: "Creme vaginal 2%: 1 aplicador à noite por 7 dias · creme 2%: 2×/dia por 2–4 semanas",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Tópico/vaginal compatível; tratamento de escolha da candidíase vaginal na gestação (7 dias)." },
    alergia: [], contra: ["Gel oral (e vaginal): aumenta muito o INR com varfarina — evitar ou controlar INR", "Gel oral: não usar em < 4 meses (risco de engasgo)"],
    prescrever: [
      { contexto: "Candidíase vulvovaginal (inclusive gestante)", texto: "USO VAGINAL\n1. Miconazol creme vaginal 2% --------------- 1 bisnaga com aplicadores\n   Aplicar 1 aplicador cheio na vagina à noite, ao deitar, por 7 dias." },
      { contexto: "Micose de pele (tinha, candidíase cutânea)", texto: "USO TÓPICO\n1. Miconazol creme 2% ------------------------ 1 bisnaga\n   Aplicar na área afetada 2 vezes ao dia por 2 a 4 semanas, mantendo por 1 semana após a melhora." },
      { contexto: "Candidíase oral — gel oral 20 mg/g", texto: "USO ORAL\n1. Miconazol gel oral 20 mg/g ----------------- 1 bisnaga\n   Aplicar 2,5 mL na boca 4 vezes ao dia, após as refeições, mantendo na boca o máximo possível, por 7 dias após o fim dos sintomas.\n   (4 a 24 meses: 1,25 mL 4×/dia, espalhado com o dedo limpo, em pequenas porções.)" }
    ] },
  { id: "cetoconazol", nomes: ["Cetoconazol"], classe: "antifungicos", receita: "simples", tags: [],
    usos: "Uso tópico: pitiríase versicolor, dermatite seborreica, tinhas e candidíase cutânea. Via oral não recomendada (hepatotoxicidade).",
    adulto: "Creme 2%: 1–2×/dia por 2–4 semanas · xampu 2%: pitiríase versicolor 1×/dia por 5 dias; dermatite seborreica 2×/semana",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Tópico: absorção desprezível. Não usar por via oral." },
    alergia: [], contra: ["Via oral: hepatotoxicidade grave e muitas interações (preferir outros antifúngicos)"],
    prescrever: [
      { contexto: "Pitiríase versicolor — xampu", texto: "USO TÓPICO\n1. Cetoconazol xampu 2% ---------------------- 1 frasco\n   Aplicar na pele afetada durante o banho, deixar agir 5 minutos e enxaguar, 1 vez ao dia por 5 dias.\n   (Manutenção opcional: 1 vez por mês nos meses quentes.)" },
      { contexto: "Dermatite seborreica (couro cabeludo)", texto: "USO TÓPICO\n1. Cetoconazol xampu 2% ---------------------- 1 frasco\n   Lavar o couro cabeludo, deixar agir 3 a 5 minutos e enxaguar, 2 vezes por semana por 4 semanas; depois 1 vez por semana." },
      { contexto: "Micose de pele — creme", texto: "USO TÓPICO\n1. Cetoconazol creme 2% ----------------------- 1 bisnaga\n   Aplicar na área afetada 1 a 2 vezes ao dia por 2 a 4 semanas." }
    ] },
  { id: "terbinafina", nomes: ["Terbinafina"], classe: "antifungicos", receita: "simples", tags: [],
    usos: "Onicomicose por dermatófito, tinha do couro cabeludo (Trichophyton), tinha extensa do corpo/pés (VO); tinhas localizadas (creme).",
    porPeso: [{ maxKg: 20, texto: "Tinha do couro cabeludo: 62,5 mg/dia (¼ comp 250 mg) por 4 semanas" }, { maxKg: 40, texto: "125 mg/dia (½ comp 250 mg) por 4 semanas" }, { maxKg: 999, texto: "250 mg/dia" }],
    apres: [{ rotulo: "comprimido 250 mg", mgPorComp: 250 }],
    adulto: "250 mg VO 1×/dia (onicomicose: mãos 6 semanas, pés 12 semanas) · creme 1%: 1–2×/dia por 1–2 semanas",
    renal: [{ abaixo: 50, texto: "Via oral não recomendada (dados insuficientes)." }],
    gestacao: { nivel: "evitar", texto: "Evitar a via oral (onicomicose pode esperar o pós-parto). Creme: uso restrito com indicação." },
    alergia: [], contra: ["Hepatopatia: dosar TGO/TGP antes; suspender se icterícia ou sintomas", "Pode alterar o paladar"],
    prescrever: [
      { contexto: "Onicomicose — unhas dos pés", texto: "USO ORAL\n1. Terbinafina 250 mg ----------------------- 84 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 12 semanas.\n   (Mãos: 6 semanas = 42 comprimidos. Confirmar o fungo antes — micológico direto/cultura.)" },
      { contexto: "Criança — tinha do couro cabeludo (4 semanas)", texto: "USO ORAL\n1. Terbinafina 250 mg ----------------------- ___ comprimidos\n   Dar ___ comprimido 1 vez ao dia, junto com alimento, por 4 semanas.\n   (< 20 kg: ¼ comp (62,5 mg) · 20–40 kg: ½ comp (125 mg) · > 40 kg: 1 comp (250 mg).)" },
      { contexto: "Tinha localizada — creme", texto: "USO TÓPICO\n1. Terbinafina creme 1% ----------------------- 1 bisnaga\n   Aplicar na área afetada 1 a 2 vezes ao dia por 1 a 2 semanas." }
    ] },
  { id: "itraconazol", nomes: ["Itraconazol"], classe: "antifungicos", receita: "simples", tags: ["azol", "cyp3a4-inib"],
    usos: "Esporotricose, onicomicose, pitiríase versicolor extensa, candidíase vulvovaginal, tinhas extensas, histoplasmose e paracoccidioidomicose (conforme protocolo).",
    apres: [{ rotulo: "cápsula 100 mg", mgPorComp: 100 }],
    adulto: "100–200 mg VO 1×/dia (conforme indicação), junto com a refeição",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado para micoses não graves na gestação; mulheres em idade fértil: contracepção durante e até 2 meses após o tratamento." },
    alergia: [], contra: ["Insuficiência cardíaca (efeito inotrópico negativo)", "Hepatopatia", "Muitas interações por inibição do CYP3A4 (sinvastatina, sildenafil, alguns antiarrítmicos)"],
    prescrever: [
      { contexto: "Esporotricose", texto: "USO ORAL\n1. Itraconazol 100 mg ----------------------- 60 cápsulas (por mês)\n   Tomar 2 cápsulas (200 mg) 1 vez ao dia, após o almoço, até 2–4 semanas após a cura das lesões (geralmente 3 a 6 meses).\n   (Formas leves: 100 mg/dia. Investigar gato doente em casa.)" },
      { contexto: "Onicomicose — pulsoterapia", texto: "USO ORAL\n1. Itraconazol 100 mg ----------------------- 28 cápsulas (por pulso)\n   Tomar 2 cápsulas (200 mg) de 12 em 12 horas, após as refeições, por 7 dias a cada mês.\n   (Mãos: 2 pulsos; pés: 3 pulsos.)" },
      { contexto: "Pitiríase versicolor extensa", texto: "USO ORAL\n1. Itraconazol 100 mg ----------------------- 10 a 14 cápsulas\n   Tomar 2 cápsulas (200 mg) 1 vez ao dia, após a refeição, por 5 a 7 dias." },
      { contexto: "Candidíase vulvovaginal (não gestante)", texto: "USO ORAL\n1. Itraconazol 100 mg ----------------------- 4 cápsulas\n   Tomar 2 cápsulas (200 mg) de 12 em 12 horas por 1 dia, após as refeições." }
    ] },

  /* ---------- antiparasitários ---------- */
  { id: "secnidazol", nomes: ["Secnidazol"], classe: "antiparasitarios", receita: "antimicrobiano", tags: ["dissulfiram"],
    usos: "Giardíase, amebíase intestinal, tricomoníase e vaginose bacteriana em dose única.",
    ped: { dose: 30, faixa: "30 mg/kg dose única", intervalo: "dose única", maxDose: 2000 },
    apres: [{ rotulo: "comprimido 1.000 mg", mgPorComp: 1000 }],
    adulto: "2 g VO dose única",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar (preferir metronidazol); não usar no 1º trimestre nem na amamentação." },
    alergia: [], contra: ["Álcool durante e até 4 dias após (efeito dissulfiram)", "Pode aumentar o INR com varfarina"],
    prescrever: [
      { contexto: "Adulto — dose única", texto: "USO ORAL\n1. Secnidazol 1.000 mg ----------------------- 2 comprimidos\n   Tomar 2 comprimidos (2 g) juntos, dose única, em uma das refeições.\n   (Não ingerir bebida alcoólica durante e até 4 dias após. Tricomoníase: tratar a parceria.)" },
      { contexto: "Criança — giardíase / amebíase intestinal", texto: "USO ORAL\n1. Secnidazol suspensão oral (conferir a concentração do frasco) --- 1 frasco\n   Dar ___ mL em dose única, em uma das refeições.\n   (30 mg/kg dose única; máximo 2 g.)" }
    ] },
  { id: "tinidazol", nomes: ["Tinidazol"], classe: "antiparasitarios", receita: "antimicrobiano", tags: ["dissulfiram"],
    usos: "Tricomoníase, giardíase, amebíase intestinal e hepática, vaginose bacteriana.",
    ped: { dose: 50, faixa: "50 mg/kg 1×/dia (giardíase dose única; amebíase 3 dias)", intervalo: "24/24h", maxDose: 2000, idadeMin: "> 3 anos" },
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "2 g VO dose única (tricomoníase, giardíase) · amebíase: 2 g/dia por 3 dias · vaginose: 2 g/dia por 2 dias",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Contraindicado no 1º trimestre; preferir metronidazol na gestação. Suspender amamentação por 72 h após a dose." },
    alergia: [], contra: ["Álcool durante e até 3 dias após (efeito dissulfiram)", "Pode aumentar o INR com varfarina"],
    prescrever: [
      { contexto: "Adulto — tricomoníase / giardíase", texto: "USO ORAL\n1. Tinidazol 500 mg -------------------------- 4 comprimidos\n   Tomar 4 comprimidos (2 g) juntos, dose única, após uma refeição.\n   (Não ingerir bebida alcoólica até 3 dias após.)" },
      { contexto: "Adulto — amebíase intestinal", texto: "USO ORAL\n1. Tinidazol 500 mg -------------------------- 12 comprimidos\n   Tomar 4 comprimidos (2 g) 1 vez ao dia, após uma refeição, por 3 dias." },
      { contexto: "Criança > 3 anos — giardíase", texto: "USO ORAL\n1. Tinidazol 500 mg -------------------------- ___ comprimidos\n   Dar ___ comprimido(s) em dose única, após uma refeição (pode triturar e misturar em alimento).\n   (50 mg/kg dose única; máximo 2 g. Amebíase: 50 mg/kg 1×/dia por 3 dias.)" }
    ] },
  { id: "nitazoxanida", nomes: ["Nitazoxanida"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Giardíase, amebíase, criptosporidíase e helmintíases intestinais (ascaridíase, tricuríase, enterobíase, teníase).",
    ped: { dose: 7.5, faixa: "7,5 mg/kg/dose 12/12h por 3 dias", intervalo: "12/12h", maxDose: 500, idadeMin: "≥ 1 ano" },
    apres: [{ rotulo: "suspensão 20 mg/mL (100 mg/5 mL)", mgPorMl: 20 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "500 mg VO 12/12h por 3 dias, com alimento",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados insuficientes na gestação; preferir alternativa." },
    alergia: [], contra: ["< 1 ano"],
    prescrever: [
      { contexto: "Adulto e ≥ 12 anos (3 dias)", texto: "USO ORAL\n1. Nitazoxanida 500 mg ---------------------- 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, junto com alimento, por 3 dias." },
      { contexto: "Criança ≥ 1 ano (7,5 mg/kg/dose)", texto: "USO ORAL\n1. Nitazoxanida suspensão 20 mg/mL ----------- 1 frasco\n   Dar ___ mL de 12 em 12 horas, junto com alimento, por 3 dias.\n   (7,5 mg/kg por dose = 0,375 mL/kg; máximo 500 mg por dose.)" }
    ] },
  { id: "permetrina", nomes: ["Permetrina"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Escabiose (loção 5%) e pediculose do couro cabeludo (loção/xampu 1%). Tratamento de escolha na gestação e em lactentes ≥ 2 meses.",
    adulto: "Escabiose: loção 5% do pescoço aos pés, retirar após 8–14 h, repetir em 7 dias · pediculose: loção 1% por 10 min, repetir em 7–10 dias",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; tratamento tópico de escolha da escabiose e pediculose na gestação e lactação." },
    alergia: [], contra: ["Escabiose: < 2 meses (usar enxofre precipitado em vaselina)"],
    prescrever: [
      { contexto: "Escabiose (adulto e criança ≥ 2 meses)", texto: "USO TÓPICO\n1. Permetrina loção 5% ------------------------ 1 frasco\n   Aplicar à noite em todo o corpo, do pescoço até a planta dos pés (incluindo entre os dedos, sob as unhas e região genital), e retirar no banho 8 a 14 horas depois. Repetir após 7 dias.\n   (Lactente e idoso: incluir couro cabeludo e face, poupando olhos e boca. Tratar todos os contactantes ao mesmo tempo; lavar roupas e lençóis em água quente.)" },
      { contexto: "Pediculose do couro cabeludo", texto: "USO TÓPICO\n1. Permetrina loção (ou xampu) 1% ------------- 1 frasco\n   Aplicar no couro cabeludo e cabelos lavados e secos com toalha, deixar agir 10 minutos e enxaguar. Repetir após 7 a 10 dias.\n   (Passar pente fino diariamente; examinar os contactantes.)" }
    ] },
  { id: "mebendazol", nomes: ["Mebendazol"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Ascaridíase, tricuríase, ancilostomíase e enterobíase.",
    porIdade: [{ maxAnos: 2, texto: "< 2 anos: segurança não estabelecida em bula; avaliar" }, { maxAnos: 999, texto: "100 mg (5 mL) 12/12h por 3 dias; enterobíase 100 mg dose única, repetir em 2 semanas" }],
    apres: [{ rotulo: "suspensão 20 mg/mL (100 mg/5 mL)", mgPorMl: 20 }, { rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100 mg VO 12/12h por 3 dias (enterobíase: 100 mg dose única, repetir após 2 semanas)",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar no 1º trimestre." },
    alergia: [], contra: ["< 2 anos (avaliar)"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 2 anos — comprimido", texto: "USO ORAL\n1. Mebendazol 100 mg ------------------------ 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias.\n   (Enterobíase: 1 comprimido dose única, repetir após 2 semanas e tratar a família.)" },
      { contexto: "Criança ≥ 2 anos — suspensão", texto: "USO ORAL\n1. Mebendazol suspensão 20 mg/mL ------------- 1 frasco\n   Dar 5 mL de 12 em 12 horas por 3 dias (mesma dose do adulto, independente do peso)." }
    ] },
  { id: "praziquantel", nomes: ["Praziquantel"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Esquistossomose mansônica, teníase; neurocisticercose (especialista, com corticoide).",
    ped: { dose: 60, faixa: "Esquistossomose: 60 mg/kg dose única (até 15 anos); teníase 5–10 mg/kg dose única", intervalo: "dose única", idadeMin: "≥ 4 anos" },
    apres: [{ rotulo: "comprimido 600 mg", mgPorComp: 600 }],
    adulto: "Esquistossomose: 50 mg/kg VO dose única · teníase: 5–10 mg/kg dose única",
    renal: [],
    gestacao: { nivel: "evitar", texto: "MS: adiar o tratamento da esquistossomose para após a gestação; na lactação, suspender a amamentação por 72 h após a dose." },
    alergia: [], contra: ["Cisticercose ocular", "Neurocisticercose: só com especialista (reação inflamatória)", "Indutores (rifampicina) reduzem muito o nível"],
    prescrever: [
      { contexto: "Esquistossomose — adulto", texto: "USO ORAL\n1. Praziquantel 600 mg ---------------------- ___ comprimidos\n   Tomar ___ comprimidos (50 mg/kg) em dose única, após uma refeição, sem mastigar.\n   (Ex.: 60 kg = 3.000 mg = 5 comprimidos. Pode causar tontura e sonolência no dia.)" },
      { contexto: "Esquistossomose — criança (4 a 15 anos)", texto: "USO ORAL\n1. Praziquantel 600 mg ---------------------- ___ comprimidos\n   Dar ___ comprimido(s) (60 mg/kg) em dose única, após uma refeição.\n   (Arredondar para a fração de ½ comprimido mais próxima. Idade mínima: 4 anos — bula Farmanguinhos.)" }
    ] }
]);
