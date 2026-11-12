/* Medicamentos: Oftalmológicos (colírios, pomadas oftálmicas) e otológicos/nasais.
   Formato em docs/ESQUEMA-MEDICAMENTOS.md. CONFERIR SEMPRE com a bula e o protocolo local. */

adicionarMedicamentos([
  /* ================= OFTALMOLÓGICOS: antibióticos ================= */
  { id: "tobramicina-colirio", nomes: ["Tobramicina colírio", "tobramicina pomada oftálmica", "Tobrex"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana, blefarite e outras infecções oculares externas.",
    adulto: "Colírio 0,3%: 1–2 gotas de 4/4h (casos graves: de 1/1h no início). Pomada 0,3%: 2–3 vezes ao dia. Por 7 dias.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica mínima; usar se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Lentes de contato: suspender durante o tratamento"],
    prescrever: [
      { contexto: "Adulto e criança — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Tobramicina 0,3% colírio ------------------ 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 4 em 4 horas por 7 dias." },
      { contexto: "Pomada (à noite ou criança pequena)", texto: "USO OFTÁLMICO\n1. Tobramicina 0,3% pomada oftálmica --------- 1 bisnaga\n   Aplicar cerca de 1 cm no saco conjuntival do(s) olho(s) afetado(s) de 8 em 8 horas por 7 dias." }
    ] },
  { id: "ciprofloxacino-colirio", nomes: ["Ciprofloxacino colírio", "ciprofloxacino pomada oftálmica", "Ciloxan", "Biamotil"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana; úlcera de córnea bacteriana (esquema intensivo, com oftalmologista).",
    adulto: "Conjuntivite: 1–2 gotas de 2/2h (acordado) nos 2 primeiros dias, depois de 4/4h até completar 7 dias. Úlcera de córnea: esquema intensivo conforme oftalmologista.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica baixa; usar se necessário." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Úlcera de córnea: encaminhar ao oftalmologista no mesmo dia"],
    prescrever: [
      { contexto: "Adulto e criança — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Ciprofloxacino 0,3% colírio --------------- 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 2 em 2 horas (acordado) nos 2 primeiros dias;\n   depois, 1 gota de 4 em 4 horas até completar 7 dias." }
    ] },
  { id: "ofloxacino-colirio", nomes: ["Ofloxacino colírio", "ofloxacina colírio", "Oflox"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana, ceratite bacteriana (com oftalmologista).",
    adulto: "Colírio 0,3%: 1–2 gotas de 2/2h a 4/4h nos 2 primeiros dias, depois 4 vezes ao dia até completar 5–7 dias.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica baixa; usar se necessário." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita"],
    prescrever: [
      { contexto: "Adulto e criança — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Ofloxacino 0,3% colírio ------------------- 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 4 em 4 horas por 2 dias;\n   depois, 1 gota de 6 em 6 horas até completar 7 dias." }
    ] },
  { id: "moxifloxacino-colirio", nomes: ["Moxifloxacino colírio", "moxifloxacina colírio", "Vigamox"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana; profilaxia em cirurgia ocular (conforme oftalmologista).",
    adulto: "Colírio 0,5%: 1 gota 3 vezes ao dia por 7 dias.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica baixa; usar se necessário." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita"],
    prescrever: [
      { contexto: "Adulto e criança — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Moxifloxacino 0,5% colírio ---------------- 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 8 em 8 horas por 7 dias." }
    ] },
  { id: "gatifloxacino-colirio", nomes: ["Gatifloxacino colírio", "gatifloxacina colírio", "Zymar", "Zymar XD"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana; profilaxia em cirurgia ocular (conforme oftalmologista).",
    adulto: "Colírio 0,5%: dia 1 — 1 gota de 2/2h (acordado, até 8 vezes); dias 2 a 7 — 1 gota 2 a 4 vezes ao dia.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica baixa; usar se necessário." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita"],
    prescrever: [
      { contexto: "Adulto e criança — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Gatifloxacino 0,5% colírio ---------------- 1 frasco\n   No 1º dia, pingar 1 gota no(s) olho(s) afetado(s) de 2 em 2 horas (acordado, até 8 vezes);\n   do 2º ao 7º dia, 1 gota de 6 em 6 horas." }
    ] },
  { id: "cloranfenicol-colirio", nomes: ["Cloranfenicol colírio", "cloranfenicol oftálmico"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana (alternativa).",
    adulto: "1–2 gotas de 4/4h a 6/6h por 5–7 dias (conferir concentração e posologia na bula da apresentação).",
    gestacao: { nivel: "cautela", texto: "Preferir outro antibiótico tópico; absorção sistêmica baixa." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Relatos raros de aplasia de medula: evitar uso prolongado e em quem já teve discrasia sanguínea"],
    prescrever: [
      { contexto: "Adulto — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Cloranfenicol colírio --------------------- 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 6 em 6 horas por 7 dias." }
    ] },
  { id: "gentamicina-colirio", nomes: ["Gentamicina colírio", "gentamicina oftálmica"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite bacteriana e infecções oculares externas.",
    adulto: "Colírio 0,3% (5 mg/mL): 1–2 gotas de 4/4h por 7 dias.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica mínima; usar se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Pode causar irritação/ceratite tóxica em uso prolongado"],
    prescrever: [
      { contexto: "Adulto e criança — conjuntivite bacteriana", texto: "USO OFTÁLMICO\n1. Gentamicina colírio 5 mg/mL --------------- 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 4 em 4 horas por 7 dias." }
    ] },
  { id: "oxitetraciclina-polimixina-oftalmica", nomes: ["Oxitetraciclina + polimixina B pomada oftálmica", "Terramicina pomada oftálmica", "Terramicina com polimixina B"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite e blefarite bacterianas, hordéolo infectado, infecções oculares externas.",
    adulto: "Aplicar na pálpebra/saco conjuntival 2 a 4 vezes ao dia por 7 dias.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica mínima; usar se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita"],
    prescrever: [
      { contexto: "Adulto e criança — blefarite / conjuntivite", texto: "USO OFTÁLMICO\n1. Oxitetraciclina + polimixina B pomada oftálmica ---- 1 bisnaga\n   Aplicar cerca de 1 cm no(s) olho(s) afetado(s) (borda da pálpebra/saco conjuntival)\n   de 8 em 8 horas por 7 dias." }
    ] },
  { id: "retinol-aminoacidos-cloranfenicol", nomes: ["Retinol + aminoácidos + metionina + cloranfenicol pomada oftálmica", "Epitezan", "Regencel", "pomada de vitamina A oftálmica"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Abrasão/erosão de córnea, pós-retirada de corpo estranho, ceratite superficial, lagoftalmo e oclusão noturna (epitelizante com antibiótico).",
    adulto: "Aplicar no saco conjuntival 3 a 4 vezes ao dia (ou à noite) por 5–7 dias.",
    gestacao: { nivel: "cautela", texto: "Uso tópico ocular; absorção mínima." },
    alergia: [], contra: ["Contém cloranfenicol. Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Embaça a visão após a aplicação"],
    prescrever: [
      { contexto: "Adulto — abrasão de córnea / pós-corpo estranho", texto: "USO OFTÁLMICO\n1. Acetato de retinol + aminoácidos + metionina + cloranfenicol pomada oftálmica ---- 1 bisnaga\n   Aplicar cerca de 1 cm no olho afetado de 6 em 6 horas por 5 dias." },
      { contexto: "Lagoftalmo / proteção noturna", texto: "USO OFTÁLMICO\n1. Acetato de retinol + aminoácidos + metionina + cloranfenicol pomada oftálmica ---- 1 bisnaga\n   Aplicar cerca de 1 cm no(s) olho(s) ao deitar." }
    ] },
  { id: "dexametasona-neomicina-polimixina-oftalmica", nomes: ["Dexametasona + neomicina + polimixina B oftálmica", "Maxitrol"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação ocular com infecção bacteriana superficial ou risco dela (blefaroconjuntivite, pós-operatório) — idealmente com orientação do oftalmologista.",
    adulto: "Colírio: 1–2 gotas 4 a 6 vezes ao dia. Pomada: 3 a 4 vezes ao dia. Por até 7 dias.",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Corticoide ocular: contraindicado em ceratite herpética, infecção fúngica ou micobacteriana", "Uso > 10 dias: risco de glaucoma e catarata (medir pressão intraocular)", "Olho vermelho sem diagnóstico: não usar corticoide sem avaliação"],
    prescrever: [
      { contexto: "Adulto — blefaroconjuntivite", texto: "USO OFTÁLMICO\n1. Dexametasona + neomicina + polimixina B colírio ---- 1 frasco\n   Pingar 1 gota no(s) olho(s) afetado(s) de 6 em 6 horas por 7 dias." },
      { contexto: "Pomada", texto: "USO OFTÁLMICO\n1. Dexametasona + neomicina + polimixina B pomada oftálmica ---- 1 bisnaga\n   Aplicar cerca de 1 cm no(s) olho(s) afetado(s) de 8 em 8 horas por 7 dias." }
    ] },
  { id: "tobramicina-dexametasona", nomes: ["Tobramicina + dexametasona", "Tobradex"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação ocular com infecção bacteriana superficial ou risco dela (blefarite, pós-operatório).",
    adulto: "Colírio: 1–2 gotas de 4/4h a 6/6h. Pomada: 3 a 4 vezes ao dia. Por até 7 dias.",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Contraindicado em ceratite herpética, infecção fúngica ou micobacteriana", "Uso prolongado: glaucoma e catarata"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 2 anos", texto: "USO OFTÁLMICO\n1. Tobramicina + dexametasona colírio -------- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no(s) olho(s) afetado(s) de 6 em 6 horas por 7 dias." }
    ] },
  { id: "ciprofloxacino-dexametasona-colirio", nomes: ["Ciprofloxacino + dexametasona colírio", "Biamotil-D"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação ocular com infecção bacteriana superficial ou risco dela (blefaroconjuntivite, pós-operatório).",
    adulto: "1–2 gotas de 4/4h a 6/6h por até 7 dias (conferir bula).",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Contraindicado em ceratite herpética, infecção fúngica ou micobacteriana", "Uso prolongado: glaucoma e catarata"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Ciprofloxacino + dexametasona colírio ----- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no(s) olho(s) afetado(s) de 6 em 6 horas por 7 dias." }
    ] },
  { id: "moxifloxacino-dexametasona", nomes: ["Moxifloxacino + dexametasona", "Vigadexa"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Pós-operatório de cirurgia ocular (catarata, refrativa); blefaroconjuntivite bacteriana com inflamação.",
    adulto: "1 gota 4 vezes ao dia por 7–15 dias (conforme oftalmologista).",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Contraindicado em ceratite herpética, infecção fúngica ou micobacteriana", "Uso prolongado: glaucoma e catarata"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Moxifloxacino + dexametasona colírio ------ 1 frasco\n   Agitar antes de usar. Pingar 1 gota no olho operado/afetado de 6 em 6 horas por 7 dias." }
    ] },
  { id: "gatifloxacino-prednisolona", nomes: ["Gatifloxacino + prednisolona", "Zypred"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Pós-operatório de cirurgia ocular; inflamação ocular com infecção bacteriana ou risco dela.",
    adulto: "1 gota 4 vezes ao dia por até 7–14 dias (conforme oftalmologista).",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Contraindicado em ceratite herpética, infecção fúngica ou micobacteriana", "Uso prolongado: glaucoma e catarata"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Gatifloxacino + prednisolona colírio ------ 1 frasco\n   Agitar antes de usar. Pingar 1 gota no olho operado/afetado de 6 em 6 horas por 7 dias." }
    ] },
  { id: "aciclovir-oftalmico", nomes: ["Aciclovir pomada oftálmica", "aciclovir oftálmico"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Ceratite herpética (herpes simples) epitelial — com seguimento oftalmológico.",
    adulto: "Pomada 3%: cerca de 1 cm no saco conjuntival 5 vezes ao dia (de 4/4h acordado), mantendo por 3 dias após a cicatrização.",
    gestacao: { nivel: "compativel", texto: "Absorção mínima; aciclovir é considerado seguro na gestação." },
    alergia: [], contra: ["Encaminhar ao oftalmologista (ceratite herpética)", "Não associar corticoide tópico na ceratite epitelial"],
    prescrever: [
      { contexto: "Adulto e criança — ceratite herpética", texto: "USO OFTÁLMICO\n1. Aciclovir 3% pomada oftálmica ------------- 1 bisnaga\n   Aplicar cerca de 1 cm no saco conjuntival do olho afetado 5 vezes ao dia (de 4 em 4 horas, acordado),\n   até 3 dias após a cicatrização (geralmente 10–14 dias)." }
    ] },
  { id: "ganciclovir-gel-oftalmico", nomes: ["Ganciclovir gel oftálmico", "Virgan"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Ceratite herpética epitelial aguda (herpes simples) — com seguimento oftalmológico.",
    adulto: "Gel 0,15%: 1 gota 5 vezes ao dia até cicatrizar a úlcera; depois 3 vezes ao dia por 7 dias.",
    gestacao: { nivel: "evitar", texto: "Ganciclovir é teratogênico em animais; preferir aciclovir pomada." },
    alergia: [], contra: ["Encaminhar ao oftalmologista", "Conferir disponibilidade no Brasil"],
    prescrever: [
      { contexto: "Adulto — ceratite herpética", texto: "USO OFTÁLMICO\n1. Ganciclovir 0,15% gel oftálmico ----------- 1 bisnaga\n   Pingar 1 gota no olho afetado 5 vezes ao dia até cicatrizar a lesão;\n   depois, 1 gota 3 vezes ao dia por mais 7 dias." }
    ] },
  { id: "natamicina-colirio", nomes: ["Natamicina colírio", "Natacyn"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Ceratite fúngica (Fusarium, Aspergillus) — uso pelo oftalmologista.",
    adulto: "Suspensão 5%: esquema intensivo inicial (1 gota de 1/1h a 2/2h), depois redução conforme oftalmologista.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica desprezível." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Úlcera de córnea: encaminhamento ao oftalmologista no mesmo dia", "Disponibilidade restrita no Brasil (pode ser manipulada/importada)"],
    prescrever: [
      { contexto: "Ceratite fúngica (oftalmologista)", texto: "USO OFTÁLMICO\n1. Natamicina 5% suspensão oftálmica --------- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no olho afetado de 1 em 1 hora (ou conforme orientação do oftalmologista)." }
    ] },

  /* ================= OFTALMOLÓGICOS: corticoides e AINE ================= */
  { id: "dexametasona-colirio", nomes: ["Dexametasona colírio", "dexametasona oftálmica", "Maxidex"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação ocular não infecciosa (uveíte anterior, pós-operatório, conjuntivite alérgica grave) — com oftalmologista.",
    adulto: "Colírio 0,1%: 1–2 gotas 4 a 6 vezes ao dia (casos graves: de 1/1h no início), com redução gradual.",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: [], contra: ["Contraindicado em ceratite herpética, infecção fúngica, micobacteriana ou bacteriana não tratada", "Uso > 10 dias: glaucoma e catarata (medir pressão intraocular)", "Não prescrever corticoide ocular sem diagnóstico (olho vermelho)"],
    prescrever: [
      { contexto: "Adulto (orientação oftalmológica)", texto: "USO OFTÁLMICO\n1. Dexametasona 0,1% colírio ----------------- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no(s) olho(s) afetado(s) de 6 em 6 horas por 7 dias,\n   depois reduzir conforme orientação do oftalmologista." }
    ] },
  { id: "prednisolona-colirio", nomes: ["Prednisolona colírio", "acetato de prednisolona colírio", "Pred Fort", "Pred Mild"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Uveíte anterior, pós-operatório de catarata, inflamação ocular não infecciosa — prescrição oftalmológica.",
    adulto: "Pred Fort 1%: 1 gota 2 a 4 vezes ao dia (uveíte: até de 1/1h no início), com redução gradual. Pred Mild 0,12% para inflamação leve.",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: [], contra: ["Contraindicado em ceratite herpética e infecções oculares não tratadas", "Uso prolongado: glaucoma e catarata", "Não suspender bruscamente em uveíte"],
    prescrever: [
      { contexto: "Adulto — pós-operatório (oftalmologista)", texto: "USO OFTÁLMICO\n1. Acetato de prednisolona 1% colírio -------- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no olho operado de 6 em 6 horas por 7 dias,\n   depois de 8 em 8 horas por 7 dias, de 12 em 12 horas por 7 dias e 1 vez ao dia por 7 dias." }
    ] },
  { id: "fluorometolona", nomes: ["Fluorometolona", "Flumex", "FML", "Florate"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação ocular superficial (conjuntivite alérgica intensa, episclerite, pós-operatório) — menor risco de aumento da pressão intraocular.",
    adulto: "Colírio 0,1%: 1–2 gotas 2 a 4 vezes ao dia (primeiras 24–48 h: até de 4/4h).",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: [], contra: ["Contraindicado em ceratite herpética e infecções oculares não tratadas", "Uso prolongado: glaucoma e catarata (risco menor)"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Fluorometolona 0,1% colírio --------------- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no(s) olho(s) de 6 em 6 horas por 7 dias,\n   depois reduzir conforme orientação." }
    ] },
  { id: "loteprednol", nomes: ["Loteprednol", "etabonato de loteprednol", "Loteprol"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite alérgica, inflamação ocular e pós-operatório (corticoide de menor efeito sobre a pressão intraocular).",
    adulto: "Suspensão 0,5%: 1–2 gotas 4 vezes ao dia (conjuntivite alérgica: apresentação 0,2% conforme bula).",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário e pelo menor tempo." },
    alergia: [], contra: ["Contraindicado em ceratite herpética e infecções oculares não tratadas", "Uso > 10 dias: medir pressão intraocular"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Loteprednol 0,5% suspensão oftálmica ----- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no(s) olho(s) de 6 em 6 horas por 7 a 14 dias." }
    ] },
  { id: "difluprednato", nomes: ["Difluprednato", "Durezol"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação e dor pós-operatória ocular; uveíte anterior — prescrição oftalmológica.",
    adulto: "Emulsão 0,05%: 1 gota 4 vezes ao dia por 2 semanas, depois 2 vezes ao dia por 1 semana (pós-operatório).",
    gestacao: { nivel: "cautela", texto: "Usar só se necessário." },
    alergia: [], contra: ["Corticoide potente: maior risco de aumento da pressão intraocular", "Contraindicado em ceratite herpética e infecções não tratadas", "Conferir disponibilidade no Brasil"],
    prescrever: [
      { contexto: "Pós-operatório (oftalmologista)", texto: "USO OFTÁLMICO\n1. Difluprednato 0,05% emulsão oftálmica ---- 1 frasco\n   Pingar 1 gota no olho operado de 6 em 6 horas por 14 dias;\n   depois, de 12 em 12 horas por 7 dias." }
    ] },
  { id: "cetorolaco-colirio", nomes: ["Cetorolaco colírio", "cetorolaco de trometamina colírio", "Acular", "Acular LS"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Dor e inflamação pós-operatória ocular; prurido da conjuntivite alérgica; edema macular cistoide pós-catarata.",
    adulto: "Colírio 0,5%: 1 gota 4 vezes ao dia (Acular LS 0,4%: 1 gota 4 vezes ao dia por até 4 dias após cirurgia refrativa).",
    gestacao: { nivel: "evitar", texto: "AINE: evitar no 3º trimestre." },
    alergia: ["aine"], contra: ["Asma induzida por AINE", "Uso prolongado: risco de dano epitelial/melting de córnea"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Cetorolaco de trometamina 0,5% colírio --- 1 frasco\n   Pingar 1 gota no(s) olho(s) de 6 em 6 horas por 7 dias." }
    ] },
  { id: "nepafenaco", nomes: ["Nepafenaco", "Nevanac", "Ilevro"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Dor e inflamação após cirurgia de catarata; prevenção de edema macular pós-operatório.",
    adulto: "Nevanac 0,1%: 1 gota 3 vezes ao dia. Ilevro 0,3%: 1 gota 1 vez ao dia. Iniciar 1 dia antes da cirurgia e manter conforme oftalmologista.",
    gestacao: { nivel: "evitar", texto: "AINE: evitar no 3º trimestre." },
    alergia: ["aine"], contra: ["Asma induzida por AINE", "Uso prolongado: dano epitelial de córnea"],
    prescrever: [
      { contexto: "Pós-operatório de catarata", texto: "USO OFTÁLMICO\n1. Nepafenaco 0,1% colírio ------------------- 1 frasco\n   Agitar antes de usar. Pingar 1 gota no olho operado de 8 em 8 horas,\n   iniciando 1 dia antes da cirurgia e mantendo por 14 dias após." }
    ] },
  { id: "bromfenaco", nomes: ["Bromfenaco", "bromfenaco sódico colírio"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Dor e inflamação após cirurgia de catarata.",
    adulto: "Colírio 0,09%: 1 gota 1 a 2 vezes ao dia, conforme a apresentação e a bula, iniciando 1 dia antes da cirurgia.",
    gestacao: { nivel: "evitar", texto: "AINE: evitar no 3º trimestre." },
    alergia: ["aine"], contra: ["Asma induzida por AINE", "Contém sulfito em algumas apresentações", "Conferir disponibilidade no Brasil"],
    prescrever: [
      { contexto: "Pós-operatório de catarata", texto: "USO OFTÁLMICO\n1. Bromfenaco 0,09% colírio ----------------- 1 frasco\n   Pingar 1 gota no olho operado conforme orientação do oftalmologista (1 a 2 vezes ao dia) por 14 dias." }
    ] },
  { id: "diclofenaco-colirio", nomes: ["Diclofenaco colírio", "diclofenaco sódico colírio", "Voltaren colírio"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Inflamação e dor pós-operatória ocular; dor após abrasão/procedimentos de córnea.",
    adulto: "Colírio 0,1%: 1 gota 4 vezes ao dia.",
    gestacao: { nivel: "evitar", texto: "AINE: evitar no 3º trimestre." },
    alergia: ["aine"], contra: ["Asma induzida por AINE", "Uso prolongado: dano epitelial de córnea"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Diclofenaco sódico 0,1% colírio ---------- 1 frasco\n   Pingar 1 gota no(s) olho(s) de 6 em 6 horas por até 7 dias." }
    ] },

  /* ================= OFTALMOLÓGICOS: antialérgicos ================= */
  { id: "olopatadina", nomes: ["Olopatadina", "Patanol", "Patanol S", "Pazeo"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite alérgica (prurido, hiperemia, lacrimejamento).",
    adulto: "0,1% (Patanol): 1 gota 2 vezes ao dia. 0,2% (Patanol S) e 0,7% (Pazeo): 1 gota 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Absorção mínima; usar se necessário." },
    alergia: [], contra: ["Retirar lentes de contato antes e aguardar 10–15 min"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 3 anos", texto: "USO OFTÁLMICO\n1. Olopatadina 0,1% colírio ------------------ 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas enquanto houver sintomas." },
      { contexto: "Dose única diária", texto: "USO OFTÁLMICO\n1. Olopatadina 0,2% colírio ------------------ 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia enquanto houver sintomas." }
    ] },
  { id: "cetotifeno-colirio", nomes: ["Cetotifeno colírio", "Zaditen colírio"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite alérgica.",
    adulto: "Colírio 0,025%: 1 gota 2 vezes ao dia.",
    gestacao: { nivel: "cautela", texto: "Absorção mínima; usar se necessário." },
    alergia: [], contra: ["Retirar lentes de contato antes e aguardar 15 min"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 3 anos", texto: "USO OFTÁLMICO\n1. Cetotifeno 0,025% colírio ----------------- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas enquanto houver sintomas." }
    ] },
  { id: "epinastina", nomes: ["Epinastina", "Relestat"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite alérgica.",
    adulto: "Colírio 0,05%: 1 gota 2 vezes ao dia.",
    gestacao: { nivel: "cautela", texto: "Absorção mínima; usar se necessário." },
    alergia: [], contra: ["Retirar lentes de contato antes da aplicação", "Idade mínima: conferir bula"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Epinastina 0,05% colírio ------------------ 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas enquanto houver sintomas." }
    ] },
  { id: "alcaftadina", nomes: ["Alcaftadina", "Lastacaft"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Conjuntivite alérgica (prevenção do prurido).",
    adulto: "Colírio 0,25%: 1 gota 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Absorção mínima; usar se necessário." },
    alergia: [], contra: ["Retirar lentes de contato antes e aguardar 10 min"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 2 anos", texto: "USO OFTÁLMICO\n1. Alcaftadina 0,25% colírio ----------------- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia enquanto houver sintomas." }
    ] },
  { id: "nafazolina-feniramina", nomes: ["Nafazolina + feniramina colírio", "nafazolina colírio", "Claril"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Alívio sintomático de hiperemia e prurido ocular alérgico leve (curto prazo).",
    adulto: "1–2 gotas até 4 vezes ao dia por no máximo 3 dias.",
    gestacao: { nivel: "evitar", texto: "Vasoconstritor: evitar na gestação." },
    alergia: [], contra: ["Glaucoma de ângulo fechado", "Crianças pequenas (risco de intoxicação sistêmica por nafazolina)", "Uso prolongado: hiperemia de rebote", "Cuidado em hipertensão, cardiopatia e uso de IMAO"],
    prescrever: [
      { contexto: "Adulto", texto: "USO OFTÁLMICO\n1. Nafazolina + feniramina colírio ---------- 1 frasco\n   Pingar 1 gota em cada olho até 4 vezes ao dia, se vermelhidão/coceira, por no máximo 3 dias." }
    ] },
  { id: "cromoglicato-colirio", nomes: ["Cromoglicato dissódico colírio", "cromoglicato colírio", "Cromolerg"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Prevenção da conjuntivite alérgica e ceratoconjuntivite primaveril (estabilizador de mastócito).",
    adulto: "Colírio 2% ou 4%: 1–2 gotas 4 vezes ao dia, uso contínuo durante a estação de exposição (efeito pleno em dias).",
    gestacao: { nivel: "compativel", texto: "Absorção mínima; considerado seguro." },
    alergia: [], contra: ["Não é para alívio imediato"],
    prescrever: [
      { contexto: "Adulto e criança", texto: "USO OFTÁLMICO\n1. Cromoglicato dissódico 4% colírio -------- 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas, uso contínuo enquanto durar a exposição." }
    ] },

  /* ================= OFTALMOLÓGICOS: lubrificantes ================= */
  { id: "carmelose", nomes: ["Carmelose", "carboximetilcelulose", "Fresh Tears", "Optive", "Refresh Tears", "Lacrifilm", "Celluvisc"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Olho seco, sensação de areia, ressecamento por tela/ar-condicionado; adjuvante em conjuntivites.",
    adulto: "0,5%: 1–2 gotas em cada olho 3 a 6 vezes ao dia ou quando necessário. 1% (gel): mais denso, para olho seco moderado/grave.",
    gestacao: { nivel: "compativel", texto: "Sem absorção sistêmica relevante." },
    alergia: [], contra: ["Uso muito frequente (> 4–6x/dia): preferir apresentação sem conservante (flaconete/monodose)"],
    prescrever: [
      { contexto: "Adulto e criança — olho seco", texto: "USO OFTÁLMICO\n1. Carmelose 0,5% colírio lubrificante ------ 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas e sempre que sentir ardor/ressecamento." }
    ] },
  { id: "hialuronato-colirio", nomes: ["Hialuronato de sódio colírio", "ácido hialurônico colírio", "Hyabak", "Hylo", "Hylo-Gel", "Hyaludrop"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Olho seco leve a grave; pós-cirurgia refrativa; usuários de lente de contato.",
    adulto: "1 gota em cada olho 3 a 6 vezes ao dia ou quando necessário (0,1–0,15%; gel 0,2–0,3% para casos graves).",
    gestacao: { nivel: "compativel", texto: "Sem absorção sistêmica relevante." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Adulto e criança — olho seco", texto: "USO OFTÁLMICO\n1. Hialuronato de sódio 0,15% colírio lubrificante ---- 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas e sempre que necessário." }
    ] },
  { id: "hipromelose", nomes: ["Hipromelose", "hidroxipropilmetilcelulose", "Genteal", "Lacrima"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Olho seco; lubrificação ocular.",
    adulto: "1–2 gotas em cada olho 3 a 4 vezes ao dia ou quando necessário.",
    gestacao: { nivel: "compativel", texto: "Sem absorção sistêmica relevante." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Adulto e criança — olho seco", texto: "USO OFTÁLMICO\n1. Hipromelose 0,3% colírio lubrificante ---- 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas e sempre que necessário." }
    ] },
  { id: "polietilenoglicol-propilenoglicol", nomes: ["Polietilenoglicol + propilenoglicol colírio", "Systane", "Systane Ultra"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Olho seco; ardor e irritação ocular.",
    adulto: "1–2 gotas em cada olho quando necessário (geralmente 3 a 4 vezes ao dia).",
    gestacao: { nivel: "compativel", texto: "Sem absorção sistêmica relevante." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Adulto e criança — olho seco", texto: "USO OFTÁLMICO\n1. Polietilenoglicol + propilenoglicol colírio lubrificante ---- 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas e sempre que necessário." }
    ] },
  { id: "dextrana-hipromelose", nomes: ["Dextrana + hipromelose colírio", "Lacrima Plus", "Trisorb"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Olho seco; lubrificação ocular.",
    adulto: "1–2 gotas em cada olho quando necessário (geralmente 3 a 4 vezes ao dia).",
    gestacao: { nivel: "compativel", texto: "Sem absorção sistêmica relevante." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Adulto e criança — olho seco", texto: "USO OFTÁLMICO\n1. Dextrana 70 + hipromelose colírio lubrificante ---- 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas e sempre que necessário." }
    ] },
  { id: "ciclosporina-colirio", nomes: ["Ciclosporina colírio", "ciclosporina emulsão oftálmica", "Restasis"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Olho seco moderado/grave com inflamação (ceratoconjuntivite seca), ceratoconjuntivite primaveril — prescrição oftalmológica.",
    adulto: "Emulsão 0,05%: 1 gota em cada olho de 12/12h, uso contínuo (efeito após 4–12 semanas).",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica desprezível; usar se necessário." },
    alergia: [], contra: ["Infecção ocular ativa", "Ardor na instilação é comum", "Pode usar lubrificante junto (intervalo de 15 min)"],
    prescrever: [
      { contexto: "Adulto — olho seco (oftalmologista)", texto: "USO OFTÁLMICO\n1. Ciclosporina 0,05% emulsão oftálmica ----- 1 caixa\n   Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },

  /* ================= OFTALMOLÓGICOS: glaucoma ================= */
  { id: "timolol", nomes: ["Timolol", "maleato de timolol", "Timoptol"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (SUS — PCDT glaucoma); crise de glaucoma agudo (adjuvante).",
    adulto: "Colírio 0,5% (ou 0,25%): 1 gota no(s) olho(s) de 12/12h; gel 0,5%: 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Pode ser usado; vigiar bradicardia fetal/neonatal. Ocluir o ponto lacrimal para reduzir absorção." },
    alergia: [], contra: ["Asma ou DPOC grave (broncoespasmo)", "Bradicardia sinusal, BAV de 2º/3º grau, insuficiência cardíaca descompensada", "Somar ao betabloqueador oral: bradicardia", "Pode mascarar hipoglicemia"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Maleato de timolol 0,5% colírio ---------- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo.\n   Após pingar, fechar os olhos e comprimir o canto interno por 1–2 minutos." }
    ] },
  { id: "betaxolol", nomes: ["Betaxolol", "Betoptic", "Betoptic S"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (betabloqueador cardiosseletivo, menor efeito respiratório).",
    adulto: "Solução 0,5% ou suspensão 0,25% (Betoptic S): 1 gota de 12/12h.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário; vigiar bradicardia neonatal." },
    alergia: [], contra: ["Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada", "Cuidado em asma (menos broncoespasmo que timolol, mas pode ocorrer)"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Betaxolol 0,5% colírio -------------------- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "latanoprosta", nomes: ["Latanoprosta", "latanoprost", "Xalatan"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular — 1ª linha (SUS — PCDT glaucoma).",
    adulto: "Colírio 0,005%: 1 gota no(s) olho(s) 1 vez ao dia, à noite.",
    gestacao: { nivel: "cautela", texto: "Análogo de prostaglandina: preferir outra classe na gestação (efeito uterino teórico)." },
    alergia: [], contra: ["Escurecimento da íris, crescimento de cílios e hiperemia", "Cuidado em uveíte ativa e edema macular", "Guardar o frasco fechado em geladeira (conferir bula)"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Latanoprosta 0,005% colírio --------------- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, à noite, uso contínuo." }
    ] },
  { id: "travoprosta", nomes: ["Travoprosta", "travoprost", "Travatan"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (SUS — PCDT glaucoma).",
    adulto: "Colírio 0,004%: 1 gota no(s) olho(s) 1 vez ao dia, à noite.",
    gestacao: { nivel: "cautela", texto: "Análogo de prostaglandina: preferir outra classe na gestação." },
    alergia: [], contra: ["Escurecimento da íris, crescimento de cílios e hiperemia", "Cuidado em uveíte ativa e edema macular"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Travoprosta 0,004% colírio ---------------- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, à noite, uso contínuo." }
    ] },
  { id: "bimatoprosta", nomes: ["Bimatoprosta", "bimatoprost", "Lumigan", "Lumigan RC"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (SUS — PCDT glaucoma).",
    adulto: "Colírio 0,01% ou 0,03%: 1 gota no(s) olho(s) 1 vez ao dia, à noite.",
    gestacao: { nivel: "cautela", texto: "Análogo de prostaglandina: preferir outra classe na gestação." },
    alergia: [], contra: ["Hiperemia (mais frequente que latanoprosta), escurecimento da íris e pele periocular", "Cuidado em uveíte ativa e edema macular"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Bimatoprosta 0,01% colírio ---------------- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, à noite, uso contínuo." }
    ] },
  { id: "tafluprosta", nomes: ["Tafluprosta", "tafluprost", "Saflutan"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (opção sem conservante).",
    adulto: "Colírio 0,0015%: 1 gota no(s) olho(s) 1 vez ao dia, à noite.",
    gestacao: { nivel: "cautela", texto: "Análogo de prostaglandina: preferir outra classe na gestação." },
    alergia: [], contra: ["Escurecimento da íris, crescimento de cílios e hiperemia"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Tafluprosta 0,0015% colírio (flaconetes) -- 1 caixa\n   Pingar 1 gota em cada olho 1 vez ao dia, à noite, uso contínuo." }
    ] },
  { id: "brimonidina", nomes: ["Brimonidina", "tartarato de brimonidina", "Alphagan", "Alphagan Z"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (SUS — PCDT glaucoma); prevenção de pico de pressão após laser.",
    adulto: "Colírio 0,1–0,2%: 1 gota de 12/12h (até de 8/8h em monoterapia).",
    gestacao: { nivel: "cautela", texto: "Pode ser usada; suspender perto do parto/amamentação (risco no recém-nascido)." },
    alergia: [], contra: ["Contraindicada em menores de 2 anos (apneia, bradicardia, sonolência) e cuidado até 6 anos", "Uso de IMAO", "Conjuntivite alérgica folicular em uso prolongado"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Tartarato de brimonidina 0,2% colírio ---- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "dorzolamida", nomes: ["Dorzolamida", "Trusopt"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (SUS — PCDT glaucoma).",
    adulto: "Colírio 2%: 1 gota de 8/8h em monoterapia ou de 12/12h associado a betabloqueador.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: ["sulfonamidas"], contra: ["Sulfonamida: cuidado em alergia a sulfas", "Insuficiência renal grave (ClCr < 30)", "Ardor e gosto amargo são comuns"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Dorzolamida 2% colírio -------------------- 1 frasco\n   Pingar 1 gota em cada olho de 8 em 8 horas, uso contínuo." }
    ] },
  { id: "brinzolamida", nomes: ["Brinzolamida", "Azopt"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (SUS — PCDT glaucoma).",
    adulto: "Suspensão 1%: 1 gota de 12/12h (até de 8/8h).",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: ["sulfonamidas"], contra: ["Sulfonamida: cuidado em alergia a sulfas", "Insuficiência renal grave (ClCr < 30)", "Visão borrada transitória após instilar"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Brinzolamida 1% suspensão oftálmica ------ 1 frasco\n   Agitar antes de usar. Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "pilocarpina", nomes: ["Pilocarpina colírio", "pilocarpina", "Pilocarpina Allergan", "Isopto Carpina"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Crise de glaucoma agudo de ângulo fechado (após baixar a pressão), glaucoma crônico, miose (SUS — PCDT glaucoma).",
    adulto: "Colírio 1–4%: crônico, 1 gota de 6/6h a 8/8h. Crise de ângulo fechado: 1 gota de 2% conforme protocolo oftalmológico (geralmente 2–3 doses com intervalo de 15 min após a pressão começar a cair).",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Uveíte/irite ativa", "Miose: piora da visão noturna; cefaleia frontal; risco de descolamento de retina em míopes", "Asma (efeito colinérgico sistêmico em altas doses)"],
    prescrever: [
      { contexto: "Adulto — glaucoma crônico (oftalmologista)", texto: "USO OFTÁLMICO\n1. Pilocarpina 2% colírio -------------------- 1 frasco\n   Pingar 1 gota em cada olho de 6 em 6 horas, uso contínuo." },
      { contexto: "PS — glaucoma agudo de ângulo fechado", texto: "Pilocarpina 2% colírio: 1 gota no olho afetado, repetir conforme protocolo (ex.: 2 doses com 15 min de intervalo),\njunto com timolol 0,5%, brimonidina, acetazolamida VO/IV e encaminhamento ao oftalmologista no mesmo dia." }
    ] },
  { id: "acetazolamida", nomes: ["Acetazolamida", "Diamox"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Crise de glaucoma agudo; glaucoma refratário (SUS — PCDT glaucoma); também mal da montanha e pseudotumor cerebral.",
    adulto: "Glaucoma agudo: 500 mg VO dose de ataque, depois 250 mg de 6/6h. Crônico: 250 mg 1 a 4 vezes ao dia (máximo 1 g/dia).",
    renal: [{ abaixo: 10, texto: "Evitar (acidose e ineficácia)." }, { abaixo: 50, texto: "Aumentar o intervalo (a cada 12 h); vigiar acidose e potássio." }],
    gestacao: { nivel: "evitar", texto: "Evitar, principalmente no 1º trimestre." },
    alergia: ["sulfonamidas"], contra: ["Alergia a sulfonamidas", "Hipocalemia, hiponatremia, acidose metabólica", "Cirrose (encefalopatia)", "Litíase renal", "Parestesias e gosto metálico são comuns"],
    apres: [{ rotulo: "comprimido 250 mg", mgPorComp: 250 }],
    prescrever: [
      { contexto: "Adulto — glaucoma (uso contínuo ou ponte para cirurgia)", texto: "USO ORAL\n1. Acetazolamida 250 mg --------------------- 30 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas.\n   Associar potássio/alimentos ricos em potássio conforme exames." },
      { contexto: "PS — glaucoma agudo de ângulo fechado", texto: "Acetazolamida 250 mg — 2 comprimidos (500 mg) VO dose de ataque, depois 250 mg VO de 6/6h\naté avaliação oftalmológica (no mesmo dia)." }
    ] },
  { id: "dorzolamida-timolol", nomes: ["Dorzolamida + timolol", "Cosopt"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular sem controle com monoterapia.",
    adulto: "1 gota no(s) olho(s) de 12/12h.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: ["sulfonamidas"], contra: ["Asma ou DPOC grave", "Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada", "Alergia a sulfonamidas", "Insuficiência renal grave"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Dorzolamida 2% + timolol 0,5% colírio ----- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "brimonidina-timolol", nomes: ["Brimonidina + timolol", "Combigan"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular sem controle com monoterapia.",
    adulto: "1 gota no(s) olho(s) de 12/12h.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Asma ou DPOC grave", "Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada", "Menores de 2 anos", "Uso de IMAO"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Brimonidina 0,2% + timolol 0,5% colírio --- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "latanoprosta-timolol", nomes: ["Latanoprosta + timolol", "Xalacom"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular sem controle com monoterapia.",
    adulto: "1 gota no(s) olho(s) 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Preferir outra opção na gestação (prostaglandina)." },
    alergia: [], contra: ["Asma ou DPOC grave", "Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Latanoprosta 0,005% + timolol 0,5% colírio ---- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, uso contínuo." }
    ] },
  { id: "bimatoprosta-timolol", nomes: ["Bimatoprosta + timolol", "Ganfort"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular sem controle com monoterapia.",
    adulto: "1 gota no(s) olho(s) 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Preferir outra opção na gestação (prostaglandina)." },
    alergia: [], contra: ["Asma ou DPOC grave", "Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Bimatoprosta 0,03% + timolol 0,5% colírio --- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, uso contínuo." }
    ] },
  { id: "travoprosta-timolol", nomes: ["Travoprosta + timolol", "DuoTrav"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular sem controle com monoterapia.",
    adulto: "1 gota no(s) olho(s) 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Preferir outra opção na gestação (prostaglandina)." },
    alergia: [], contra: ["Asma ou DPOC grave", "Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Travoprosta 0,004% + timolol 0,5% colírio --- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, uso contínuo." }
    ] },
  { id: "brinzolamida-brimonidina", nomes: ["Brinzolamida + brimonidina", "Simbrinza"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular (combinação sem betabloqueador: útil em asma/bradicardia).",
    adulto: "1 gota no(s) olho(s) 2 vezes ao dia (conferir bula).",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: ["sulfonamidas"], contra: ["Alergia a sulfonamidas", "Insuficiência renal grave", "Menores de 2 anos", "Uso de IMAO"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Brinzolamida 1% + brimonidina 0,2% suspensão oftálmica ---- 1 frasco\n   Agitar antes de usar. Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "brinzolamida-timolol", nomes: ["Brinzolamida + timolol", "Azorga"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Glaucoma de ângulo aberto e hipertensão ocular sem controle com monoterapia.",
    adulto: "1 gota no(s) olho(s) de 12/12h.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: ["sulfonamidas"], contra: ["Asma ou DPOC grave", "Bradicardia, BAV de 2º/3º grau, insuficiência cardíaca descompensada", "Alergia a sulfonamidas", "Insuficiência renal grave"],
    prescrever: [
      { contexto: "Adulto — glaucoma", texto: "USO OFTÁLMICO\n1. Brinzolamida 1% + timolol 0,5% suspensão oftálmica ---- 1 frasco\n   Agitar antes de usar. Pingar 1 gota em cada olho de 12 em 12 horas, uso contínuo." }
    ] },

  /* ================= OFTALMOLÓGICOS: midriáticos, cicloplégicos e diagnósticos ================= */
  { id: "tropicamida", nomes: ["Tropicamida", "Mydriacyl"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Dilatação pupilar para fundoscopia (midriático de curta duração, 4–6 h).",
    adulto: "Colírio 1%: 1 gota, repetir em 5 min se necessário; exame em 20–30 min.",
    gestacao: { nivel: "cautela", texto: "Uso pontual; usar se necessário." },
    alergia: [], contra: ["Glaucoma de ângulo fechado ou câmara anterior rasa (risco de crise)", "Visão borrada e fotofobia por algumas horas: não dirigir"],
    prescrever: [
      { contexto: "Consultório — fundoscopia", texto: "Tropicamida 1% colírio: 1 gota em cada olho; repetir após 5 minutos se necessário.\nExaminar em 20–30 minutos. Orientar a não dirigir por 4–6 horas." }
    ] },
  { id: "ciclopentolato", nomes: ["Ciclopentolato", "Cicloplégico"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Cicloplegia para refração (principalmente em crianças) e midríase; uveíte anterior (alívio de espasmo ciliar).",
    adulto: "Colírio 1%: 1 gota, repetir após 5–10 min; refração em 30–60 min.",
    gestacao: { nivel: "cautela", texto: "Uso pontual; usar se necessário." },
    alergia: [], contra: ["Glaucoma de ângulo fechado", "Crianças pequenas e prematuros: efeitos no SNC (agitação, alucinação) e taquicardia — ocluir ponto lacrimal", "Síndrome de Down e paralisia cerebral: maior sensibilidade"],
    prescrever: [
      { contexto: "Consultório — refração cicloplégica", texto: "Ciclopentolato 1% colírio: 1 gota em cada olho; repetir após 5–10 minutos.\nExaminar em 30–60 minutos. Comprimir o canto interno do olho após pingar." }
    ] },
  { id: "fenilefrina-colirio", nomes: ["Fenilefrina colírio", "fenilefrina 10% colírio"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Midríase para exame de fundo de olho e cirurgia (associada à tropicamida).",
    adulto: "Colírio 10% (ou 2,5%): 1 gota em cada olho antes do exame.",
    gestacao: { nivel: "cautela", texto: "Uso pontual; vasoconstritor — preferir 2,5%." },
    alergia: [], contra: ["Glaucoma de ângulo fechado", "10%: evitar em hipertensão grave, coronariopatia, hipertireoidismo, idosos e lactentes (preferir 2,5%)", "Uso de IMAO ou tricíclicos"],
    prescrever: [
      { contexto: "Consultório — midríase", texto: "Fenilefrina 10% colírio: 1 gota em cada olho (junto da tropicamida 1%).\nHipertensos, cardiopatas e crianças: usar fenilefrina 2,5%." }
    ] },
  { id: "atropina-colirio", nomes: ["Atropina colírio", "sulfato de atropina colírio"], classe: "oftalmologicos", receita: "simples", tags: ["anticolinergico"],
    usos: "Uveíte anterior (cicloplegia e prevenção de sinéquias), cicloplegia para refração, tratamento de ambliopia (penalização) — prescrição oftalmológica.",
    adulto: "Colírio 0,5–1%: 1 gota 1 a 3 vezes ao dia conforme indicação (efeito dura até 1–2 semanas).",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Glaucoma de ângulo fechado", "Crianças: toxicidade sistêmica (febre, rubor, taquicardia, agitação) — ocluir ponto lacrimal", "Visão borrada e fotofobia prolongadas"],
    prescrever: [
      { contexto: "Adulto — uveíte anterior (oftalmologista)", texto: "USO OFTÁLMICO\n1. Sulfato de atropina 1% colírio ----------- 1 frasco\n   Pingar 1 gota no olho afetado de 12 em 12 horas, conforme orientação do oftalmologista." }
    ] },
  { id: "atropina-colirio-baixa-dose", nomes: ["Atropina 0,01% colírio", "atropina baixa dose", "atropina para miopia"], classe: "oftalmologicos", receita: "simples", tags: [],
    usos: "Controle da progressão da miopia em crianças e adolescentes — prescrição oftalmológica.",
    adulto: "Criança: 1 gota de atropina 0,01% (até 0,05%) em cada olho 1 vez ao dia, à noite, uso contínuo por anos (geralmente manipulada).",
    gestacao: { nivel: "cautela", texto: "Uso pediátrico; não se aplica em geral." },
    alergia: [], contra: ["Fotofobia e dificuldade para leitura (raras nessa dose)", "Manipulada: usar farmácia de confiança e respeitar validade"],
    prescrever: [
      { contexto: "Criança — controle de miopia (oftalmologista)", texto: "USO OFTÁLMICO\n1. Sulfato de atropina 0,01% colírio --------- 1 frasco\n   Pingar 1 gota em cada olho 1 vez ao dia, à noite, uso contínuo." }
    ] },
  { id: "proximetacaina", nomes: ["Proximetacaína", "proparacaína", "Anestalcon"], classe: "oftalmologicos", receita: "hospitalar", tags: [],
    usos: "Anestesia tópica da córnea para exame, tonometria, retirada de corpo estranho e lavagem ocular.",
    adulto: "Colírio 0,5%: 1–2 gotas antes do procedimento; efeito em 30 s, dura 10–20 min.",
    gestacao: { nivel: "compativel", texto: "Uso pontual; absorção desprezível." },
    alergia: [], contra: ["NUNCA prescrever para uso domiciliar: uso repetido causa ceratite tóxica, úlcera e perfuração de córnea", "Proteger o olho até passar o efeito (sem reflexo corneano)"],
    prescrever: [
      { contexto: "Consultório / PS", texto: "Proximetacaína 0,5% colírio: 1–2 gotas no olho a ser examinado, imediatamente antes do procedimento.\nNão entregar o frasco ao paciente." }
    ] },
  { id: "tetracaina-colirio", nomes: ["Tetracaína + fenilefrina colírio", "tetracaína colírio", "Colírio anestésico"], classe: "oftalmologicos", receita: "hospitalar", tags: [],
    usos: "Anestesia tópica ocular para exame, tonometria, corpo estranho e pequenos procedimentos.",
    adulto: "Colírio (tetracaína 1% + fenilefrina 0,1%): 1–2 gotas antes do procedimento.",
    gestacao: { nivel: "compativel", texto: "Uso pontual; absorção desprezível." },
    alergia: [], contra: ["NUNCA prescrever para uso domiciliar (ceratite tóxica e úlcera de córnea)", "Ardência intensa na instilação"],
    prescrever: [
      { contexto: "Consultório / PS", texto: "Tetracaína 1% + fenilefrina 0,1% colírio: 1–2 gotas no olho, imediatamente antes do procedimento.\nNão entregar o frasco ao paciente." }
    ] },
  { id: "fluoresceina", nomes: ["Fluoresceína", "fluoresceína sódica colírio", "fitas de fluoresceína"], classe: "oftalmologicos", receita: "hospitalar", tags: [],
    usos: "Diagnóstico de abrasão/úlcera de córnea, corpo estranho, ceratite herpética (dendritos), teste de Seidel e tonometria.",
    adulto: "Colírio 1–2% (ou fita umedecida): 1 gota no fundo de saco; examinar com luz azul cobalto.",
    gestacao: { nivel: "compativel", texto: "Uso diagnóstico tópico; absorção desprezível." },
    alergia: [], contra: ["Retirar lentes de contato gelatinosas (mancham)", "Frasco multidose contamina facilmente (Pseudomonas): preferir fitas ou monodose"],
    prescrever: [
      { contexto: "Consultório / PS", texto: "Fluoresceína 1% colírio (ou fita): 1 gota no fundo de saco conjuntival inferior;\npedir para piscar e examinar com luz azul cobalto." }
    ] },

  /* ================= OTORRINO: otológicos ================= */
  { id: "ciprofloxacino-hidrocortisona-otologico", nomes: ["Ciprofloxacino + hidrocortisona otológico", "Otociriax"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa aguda bacteriana (difusa).",
    adulto: "3 gotas no ouvido afetado de 12/12h por 7 dias (conferir bula).",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica baixa; usar se necessário." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Perfuração timpânica ou tubo de ventilação: preferir formulação sem hidrocortisona aprovada para ouvido médio", "Otite externa com celulite, diabetes ou imunossupressão: considerar antibiótico sistêmico"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 1 ano — otite externa", texto: "USO OTOLÓGICO\n1. Ciprofloxacino + hidrocortisona solução otológica ---- 1 frasco\n   Aquecer o frasco na mão. Pingar 3 gotas no ouvido afetado de 12 em 12 horas por 7 dias,\n   deitado de lado por 2–3 minutos após pingar. Manter o ouvido seco." }
    ] },
  { id: "ciprofloxacino-dexametasona-otologico", nomes: ["Ciprofloxacino + dexametasona otológico", "Cilodex", "Ciprodex"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa aguda; otite média aguda com tubo de ventilação (otorreia).",
    adulto: "4 gotas no ouvido afetado de 12/12h por 7 dias.",
    gestacao: { nivel: "cautela", texto: "Absorção sistêmica baixa; usar se necessário." },
    alergia: ["quinolonas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Infecção fúngica ou viral do conduto"],
    prescrever: [
      { contexto: "Adulto e criança — otite externa / otorreia com tubo", texto: "USO OTOLÓGICO\n1. Ciprofloxacino 0,3% + dexametasona 0,1% suspensão otológica ---- 1 frasco\n   Agitar e aquecer o frasco na mão. Pingar 4 gotas no ouvido afetado de 12 em 12 horas por 7 dias." }
    ] },
  { id: "polimixina-neomicina-hidrocortisona-otologico", nomes: ["Polimixina B + neomicina + hidrocortisona otológico", "Otosporin"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa aguda bacteriana com tímpano íntegro.",
    adulto: "Adulto: 4 gotas 3 a 4 vezes ao dia; criança: 3 gotas 3 a 4 vezes ao dia; por 7 dias.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário; neomicina é ototóxica se houver perfuração." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Perfuração timpânica ou tubo de ventilação (neomicina é ototóxica)", "Dermatite de contato à neomicina"],
    prescrever: [
      { contexto: "Adulto — otite externa", texto: "USO OTOLÓGICO\n1. Polimixina B + neomicina + hidrocortisona suspensão otológica ---- 1 frasco\n   Agitar antes de usar. Pingar 4 gotas no ouvido afetado de 6 em 6 horas por 7 dias." },
      { contexto: "Criança — otite externa", texto: "USO OTOLÓGICO\n1. Polimixina B + neomicina + hidrocortisona suspensão otológica ---- 1 frasco\n   Agitar antes de usar. Pingar 3 gotas no ouvido afetado de 8 em 8 horas por 7 dias." }
    ] },
  { id: "fluocinolona-polimixina-neomicina-lidocaina", nomes: ["Fluocinolona + polimixina B + neomicina + lidocaína otológico", "Elotin"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa aguda com dor importante (tímpano íntegro).",
    adulto: "Gotas no ouvido afetado 3 a 4 vezes ao dia por 5–7 dias, conforme bula.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Perfuração timpânica ou tubo de ventilação (neomicina é ototóxica)", "Dermatite de contato à neomicina"],
    prescrever: [
      { contexto: "Adulto — otite externa", texto: "USO OTOLÓGICO\n1. Fluocinolona + polimixina B + neomicina + lidocaína solução otológica ---- 1 frasco\n   Pingar 4 gotas no ouvido afetado de 8 em 8 horas por 7 dias (conferir posologia na bula)." }
    ] },
  { id: "fludrocortisona-polimixina-neomicina-lidocaina", nomes: ["Fludrocortisona + polimixina B + neomicina + lidocaína otológico", "Panotil"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa aguda com dor (tímpano íntegro).",
    adulto: "Gotas no ouvido afetado 3 a 4 vezes ao dia por 5–7 dias, conforme bula.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Perfuração timpânica ou tubo de ventilação (neomicina é ototóxica)"],
    prescrever: [
      { contexto: "Adulto — otite externa", texto: "USO OTOLÓGICO\n1. Fludrocortisona + polimixina B + neomicina + lidocaína solução otológica ---- 1 frasco\n   Pingar 4 gotas no ouvido afetado de 8 em 8 horas por 7 dias (conferir posologia na bula)." }
    ] },
  { id: "polimixina-lidocaina-otologico", nomes: ["Polimixina B + lidocaína otológico", "Lidosporin"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa com dor (alívio da otalgia + antibiótico) com tímpano íntegro.",
    adulto: "3 a 5 gotas no ouvido afetado 3 a 4 vezes ao dia, conforme bula.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Perfuração timpânica", "Otite média aguda: o tratamento é sistêmico (gotas só aliviam a dor)"],
    prescrever: [
      { contexto: "Adulto — otite externa", texto: "USO OTOLÓGICO\n1. Polimixina B + lidocaína solução otológica ---- 1 frasco\n   Pingar 4 gotas no ouvido afetado de 6 em 6 horas por até 7 dias." }
    ] },
  { id: "cerumenolitico", nomes: ["Cerumenolítico", "trolamina (oleato de polipeptídeo condensado)", "Cerumin"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Amolecimento de cerume impactado (rolha de cerume) antes da lavagem ou para eliminação espontânea.",
    adulto: "Encher o conduto, manter 15–30 min deitado de lado e depois limpar/lavar; repetir conforme bula (1 a 2 dias).",
    gestacao: { nivel: "compativel", texto: "Uso tópico no conduto; sem absorção relevante." },
    alergia: [], contra: ["Perfuração timpânica ou suspeita", "Otite externa/média ativa", "Dermatite de contato (não deixar mais de 30 min)"],
    prescrever: [
      { contexto: "Adulto e criança — rolha de cerume", texto: "USO OTOLÓGICO\n1. Cerumin solução otológica ----------------- 1 frasco\n   Deitado de lado, encher o ouvido com a solução e permanecer 15 a 30 minutos;\n   depois, limpar o excesso. Retornar para lavagem do ouvido se não resolver." },
      { contexto: "Alternativa simples", texto: "USO OTOLÓGICO\n1. Óleo mineral (ou óleo de amêndoas) -------- 1 frasco\n   Pingar 5 gotas no ouvido afetado 2 vezes ao dia por 3 a 5 dias antes da lavagem." }
    ] },
  { id: "alcool-boricado", nomes: ["Álcool boricado", "ácido bórico em álcool 70%", "solução de ácido bórico otológica"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otite externa leve/acidificação do conduto, otomicose leve e prevenção de otite do nadador (fórmula manipulada).",
    adulto: "3 a 4 gotas no ouvido 2 a 3 vezes ao dia por 7–10 dias (ou após nadar, para prevenção).",
    gestacao: { nivel: "cautela", texto: "Uso tópico; evitar uso extenso." },
    alergia: [], contra: ["Perfuração timpânica ou tubo de ventilação (dor e ototoxicidade)", "Pele do conduto muito inflamada (arde)", "Não usar em lactentes"],
    prescrever: [
      { contexto: "Adulto — manipulado", texto: "USO OTOLÓGICO\n1. Ácido bórico 3% em álcool 70% (álcool boricado) ---- 1 frasco de 20 mL (manipular)\n   Pingar 3 gotas no ouvido afetado de 8 em 8 horas por 7 dias." }
    ] },
  { id: "clotrimazol-otologico", nomes: ["Clotrimazol solução otológica", "clotrimazol solução 1% (uso otológico)"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Otomicose (Aspergillus, Candida) com tímpano íntegro — após limpeza do conduto.",
    adulto: "Solução 1%: 3 a 4 gotas no ouvido afetado 2 a 3 vezes ao dia por 14 dias (solução tópica 1% em uso otológico: conferir bula/protocolo).",
    gestacao: { nivel: "compativel", texto: "Absorção desprezível." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Perfuração timpânica: avaliar com otorrino", "Limpar (aspirar) os debris fúngicos para eficácia"],
    prescrever: [
      { contexto: "Adulto — otomicose", texto: "USO OTOLÓGICO\n1. Clotrimazol 1% solução -------------------- 1 frasco\n   Pingar 3 gotas no ouvido afetado de 8 em 8 horas por 14 dias. Manter o ouvido seco." }
    ] },

  /* ================= OTORRINO: nasais ================= */
  { id: "soro-fisiologico-nasal", nomes: ["Soro fisiológico nasal", "cloreto de sódio 0,9% nasal", "solução salina nasal", "lavagem nasal", "Rinosoro", "Sorine SSC", "Maresis"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Lavagem nasal em resfriado, rinite, rinossinusite, pós-operatório nasal; desobstrução nasal no lactente.",
    adulto: "Gotas/jato: 2–3 em cada narina várias vezes ao dia. Lavagem: 10–20 mL (adulto até 60–120 mL) por narina 2 a 4 vezes ao dia.",
    gestacao: { nivel: "compativel", texto: "Seguro." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Adulto — lavagem nasal", texto: "USO NASAL\n1. Cloreto de sódio 0,9% (soro fisiológico) ---- 1 frasco de 250 mL\n   Com seringa de 20 mL, lavar cada narina 3 a 4 vezes ao dia enquanto houver sintomas." },
      { contexto: "Criança / lactente", texto: "USO NASAL\n1. Cloreto de sódio 0,9% solução nasal -------- 1 frasco\n   Pingar 3 a 5 gotas (ou 2 a 5 mL com seringa) em cada narina várias vezes ao dia, antes das mamadas e ao deitar." }
    ] },
  { id: "salina-hipertonica-nasal", nomes: ["Solução salina hipertônica nasal", "cloreto de sódio 3% nasal", "soro nasal hipertônico", "Rinosoro 3%", "Sinomarin"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinossinusite aguda/crônica e congestão nasal (efeito descongestionante osmótico).",
    adulto: "2–3 jatos ou 1 lavagem em cada narina 2 a 3 vezes ao dia.",
    gestacao: { nivel: "compativel", texto: "Seguro." },
    alergia: [], contra: ["Pode arder; se incomodar, voltar para 0,9%"],
    prescrever: [
      { contexto: "Adulto e criança > 2 anos", texto: "USO NASAL\n1. Cloreto de sódio 3% solução nasal --------- 1 frasco\n   Aplicar 2 jatos em cada narina de 8 em 8 horas enquanto houver congestão." }
    ] },
  { id: "fluticasona-propionato-nasal", nomes: ["Fluticasona nasal", "propionato de fluticasona nasal", "Flixonase"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica e não alérgica; rinossinusite crônica; adjuvante na rinossinusite aguda.",
    adulto: "50 mcg/jato: 2 jatos em cada narina 1 vez ao dia (manutenção 1 jato). Criança 4–11 anos: 1 jato em cada narina 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Corticoide nasal compatível; budesonida é a de maior experiência na gestação." },
    alergia: [], contra: ["Epistaxe e ressecamento: direcionar o jato para fora do septo", "Ritonavir/cobicistate: aumenta muito o nível de fluticasona (Cushing)"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 12 anos — rinite", texto: "USO NASAL\n1. Propionato de fluticasona 50 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia, uso contínuo.\n   Direcionar o jato para a lateral (longe do septo)." },
      { contexto: "Criança 4–11 anos", texto: "USO NASAL\n1. Propionato de fluticasona 50 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 1 jato em cada narina 1 vez ao dia, uso contínuo." }
    ] },
  { id: "fluticasona-furoato-nasal", nomes: ["Furoato de fluticasona nasal", "Avamys"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica sazonal e perene (sintomas nasais e oculares).",
    adulto: "27,5 mcg/jato: 2 jatos em cada narina 1 vez ao dia (manutenção 1 jato). Criança 2–11 anos: 1 jato em cada narina 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Corticoide nasal; preferir budesonida na gestação." },
    alergia: [], contra: ["Epistaxe", "Ritonavir/cobicistate: aumenta o nível de fluticasona"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 12 anos", texto: "USO NASAL\n1. Furoato de fluticasona 27,5 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia, uso contínuo." },
      { contexto: "Criança 2–11 anos", texto: "USO NASAL\n1. Furoato de fluticasona 27,5 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 1 jato em cada narina 1 vez ao dia, uso contínuo." }
    ] },
  { id: "beclometasona-nasal", nomes: ["Beclometasona nasal", "dipropionato de beclometasona spray nasal"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica e não alérgica (opção do SUS em alguns municípios).",
    adulto: "50 mcg/jato: 1–2 jatos em cada narina 2 vezes ao dia (máximo 400 mcg/dia).",
    gestacao: { nivel: "cautela", texto: "Corticoide nasal; budesonida tem mais dados na gestação." },
    alergia: [], contra: ["Epistaxe e ressecamento", "Infecção nasal não tratada"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 6 anos", texto: "USO NASAL\n1. Dipropionato de beclometasona 50 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 2 jatos em cada narina de 12 em 12 horas; após controle, 1 jato de 12 em 12 horas." }
    ] },
  { id: "triancinolona-nasal", nomes: ["Triancinolona nasal", "acetonida de triancinolona spray nasal", "Nasacort"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica sazonal e perene.",
    adulto: "55 mcg/jato: 2 jatos em cada narina 1 vez ao dia (manutenção 1 jato). Criança 2–5 anos: 1 jato; 6–11 anos: 1–2 jatos em cada narina 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Corticoide nasal; preferir budesonida na gestação." },
    alergia: [], contra: ["Epistaxe e ressecamento"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 12 anos", texto: "USO NASAL\n1. Acetonida de triancinolona 55 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 2 jatos em cada narina 1 vez ao dia, uso contínuo." },
      { contexto: "Criança 2–11 anos", texto: "USO NASAL\n1. Acetonida de triancinolona 55 mcg/jato spray nasal ---- 1 frasco\n   Aplicar 1 jato em cada narina 1 vez ao dia, uso contínuo." }
    ] },
  { id: "ciclesonida-nasal", nomes: ["Ciclesonida nasal", "Omnaris"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica sazonal e perene.",
    adulto: "50 mcg/jato: 2 jatos em cada narina 1 vez ao dia.",
    gestacao: { nivel: "cautela", texto: "Corticoide nasal; preferir budesonida na gestação." },
    alergia: [], contra: ["Epistaxe", "Idade mínima: conferir bula"],
    prescrever: [
      { contexto: "Adulto e adolescente ≥ 12 anos", texto: "USO NASAL\n1. Ciclesonida 50 mcg/jato spray nasal ------ 1 frasco\n   Agitar antes de usar. Aplicar 2 jatos em cada narina 1 vez ao dia, uso contínuo." }
    ] },
  { id: "azelastina-nasal", nomes: ["Azelastina nasal", "cloridrato de azelastina spray nasal", "Rino-Lastin"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica e vasomotora (anti-histamínico tópico de ação rápida).",
    adulto: "1 jato em cada narina 2 vezes ao dia.",
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se necessário." },
    alergia: [], contra: ["Gosto amargo e sonolência leve", "Idade mínima: conferir bula"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 6 anos", texto: "USO NASAL\n1. Cloridrato de azelastina 1 mg/mL spray nasal ---- 1 frasco\n   Aplicar 1 jato em cada narina de 12 em 12 horas enquanto houver sintomas." }
    ] },
  { id: "azelastina-fluticasona", nomes: ["Azelastina + fluticasona", "Dymista"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Rinite alérgica moderada a grave sem controle com monoterapia.",
    adulto: "1 jato em cada narina 2 vezes ao dia.",
    gestacao: { nivel: "cautela", texto: "Usar se necessário." },
    alergia: [], contra: ["Epistaxe, gosto amargo", "Ritonavir/cobicistate: aumenta o nível de fluticasona"],
    prescrever: [
      { contexto: "Adulto e adolescente ≥ 12 anos", texto: "USO NASAL\n1. Azelastina 137 mcg + propionato de fluticasona 50 mcg/jato spray nasal ---- 1 frasco\n   Agitar antes de usar. Aplicar 1 jato em cada narina de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "oximetazolina", nomes: ["Oximetazolina", "cloridrato de oximetazolina", "Afrin", "Aturgyl"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Descongestão nasal de curto prazo (resfriado, sinusite, antes de procedimentos), epistaxe anterior (em algodão).",
    adulto: "0,05%: 2–3 gotas/jatos em cada narina de 12/12h por no máximo 3–5 dias.",
    gestacao: { nivel: "evitar", texto: "Vasoconstritor: evitar; se necessário, uso pontual." },
    alergia: [], contra: ["Uso > 3–5 dias: rinite medicamentosa (efeito rebote)", "Contraindicado em menores de 2 anos (criança: apenas apresentação pediátrica conforme bula)", "Cuidado em hipertensão, coronariopatia, glaucoma de ângulo fechado, uso de IMAO"],
    prescrever: [
      { contexto: "Adulto e criança ≥ 12 anos", texto: "USO NASAL\n1. Cloridrato de oximetazolina 0,05% solução nasal ---- 1 frasco\n   Aplicar 2 jatos em cada narina de 12 em 12 horas, se nariz entupido, por no máximo 3 dias." },
      { contexto: "PS — epistaxe anterior", texto: "Oximetazolina 0,05%: embeber algodão e introduzir na narina sangrante; compressão digital da asa do nariz por 10–15 minutos." }
    ] },
  { id: "nafazolina-nasal", nomes: ["Nafazolina nasal", "cloridrato de nafazolina nasal", "Sorine", "Neosoro"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Descongestão nasal de curto prazo (preferir oximetazolina ou soro).",
    adulto: "2–3 gotas em cada narina até 3 vezes ao dia por no máximo 3 dias.",
    gestacao: { nivel: "evitar", texto: "Vasoconstritor: evitar." },
    alergia: [], contra: ["Crianças: intoxicação grave (sonolência, bradicardia, hipotermia, coma) — contraindicado em menores de 2 anos e evitar em crianças pequenas", "Rinite medicamentosa com uso > 3 dias", "Hipertensão, coronariopatia, glaucoma de ângulo fechado, uso de IMAO"],
    prescrever: [
      { contexto: "Adulto", texto: "USO NASAL\n1. Cloridrato de nafazolina 0,5 mg/mL solução nasal ---- 1 frasco\n   Pingar 2 gotas em cada narina de 8 em 8 horas, se nariz entupido, por no máximo 3 dias." }
    ] },
  { id: "cromoglicato-nasal", nomes: ["Cromoglicato dissódico nasal", "cromoglicato nasal", "Rilan"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Prevenção da rinite alérgica (estabilizador de mastócito), opção segura em gestantes e crianças.",
    adulto: "1–2 jatos em cada narina 3 a 4 vezes ao dia, uso contínuo (efeito após dias).",
    gestacao: { nivel: "compativel", texto: "Considerado seguro." },
    alergia: [], contra: ["Não alivia crise aguda; aplicação frequente dificulta a adesão"],
    prescrever: [
      { contexto: "Adulto e criança", texto: "USO NASAL\n1. Cromoglicato dissódico 4% spray nasal ---- 1 frasco\n   Aplicar 1 jato em cada narina de 6 em 6 horas, uso contínuo durante a estação de exposição." }
    ] },
  { id: "mupirocina-nasal", nomes: ["Mupirocina nasal", "mupirocina pomada (uso nasal)", "descolonização nasal de S. aureus"], classe: "otorrino", receita: "simples", tags: [],
    usos: "Descolonização nasal de S. aureus/MRSA (furunculose de repetição, pré-operatório conforme CCIH).",
    adulto: "Pomada 2%: aplicar no vestíbulo nasal de cada narina 2 vezes ao dia por 5 dias.",
    gestacao: { nivel: "compativel", texto: "Absorção desprezível." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Evitar uso repetido/prolongado (resistência)"],
    prescrever: [
      { contexto: "Adulto e criança — descolonização", texto: "USO NASAL\n1. Mupirocina 2% pomada ---------------------- 1 bisnaga\n   Aplicar pequena quantidade (com cotonete) na entrada de cada narina de 12 em 12 horas por 5 dias;\n   depois, apertar as asas do nariz para espalhar.\n   Associar banho com clorexidina conforme orientação." }
    ] }
]);
