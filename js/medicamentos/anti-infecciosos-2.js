/* Medicamentos: Anti-infecciosos complementares (antibióticos, tuberculose, hanseníase, antifúngicos, antivirais e antirretrovirais, antiparasitários, antimaláricos).
   Formato em docs/ESQUEMA-MEDICAMENTOS.md.
   Fontes de referência: bulas, RENAME 2024, Manual de Recomendações para o Controle da TB (MS 2019) e notas técnicas da ILTB,
   Diretrizes de hanseníase (MS 2022, PQT-U), PCDT HIV/PrEP/PEP/IST/Transmissão vertical, PCDT hepatites B e C,
   Guia de tratamento da malária no Brasil (MS), Manuais de leishmanioses e doença de Chagas (MS).
   CONFERIR SEMPRE com a bula, o protocolo vigente e o antibiograma. */

adicionarMedicamentos([
  /* ---------- antibióticos: penicilinas e betalactâmicos ---------- */
  { id: "penicilina-procaina", nomes: ["Penicilina G procaína", "penicilina procaína", "benzilpenicilina procaína", "Wycillin"], classe: "antibioticos", receita: "antimicrobiano", tags: ["betalactamico", "penicilina"],
    usos: "Sífilis congênita (alternativa à cristalina quando sem neurossífilis, conforme PCDT), infecções estreptocócicas leves a moderadas por via IM.",
    apres: [{ rotulo: "frasco-ampola 400.000 UI (300.000 UI procaína + 100.000 UI potássica)" }],
    adulto: "Uso IM profundo; dose e intervalo conforme indicação e bula (pouco usada no adulto hoje)",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["penicilinas"], contra: ["Somente IM (nunca IV: reação grave com procaína)", "Alergia à procaína"],
    prescrever: [
      { contexto: "Sífilis congênita (recém-nascido, sem neurossífilis)", texto: "USO INTRAMUSCULAR\n1. Penicilina G procaína 400.000 UI --------- frascos conforme peso\n   Aplicar 50.000 UI/kg IM 1 vez ao dia por 10 dias.\n   (Somente IM. Conferir critérios e esquema no PCDT de transmissão vertical: se houver alteração liquórica, usar penicilina cristalina IV.)" }
    ] },
  { id: "ampicilina-sulbactam", nomes: ["Ampicilina + sulbactam", "ampicilina-sulbactam", "ampicilina/sulbactam", "Unasyn"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "penicilina"],
    usos: "Infecção intra-abdominal, pele e partes moles (mordeduras, pé diabético), pneumonia aspirativa, infecção ginecológica; Acinetobacter (sulbactam, conforme antibiograma).",
    ped: { dose: 50, faixa: "100–200 mg/kg/dia de ampicilina ÷ 6/6h", porDia: false, intervalo: "6/6h", maxDose: 2000 },
    apres: [{ rotulo: "frasco 1,5 g (1 g + 0,5 g)" }, { rotulo: "frasco 3 g (2 g + 1 g)" }],
    adulto: "1,5–3 g IV 6/6h",
    renal: [{ abaixo: 15, texto: "1,5–3 g a cada 24 h." }, { abaixo: 30, texto: "1,5–3 g a cada 12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["penicilinas"], contra: ["Mononucleose (exantema)"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Ampicilina + sulbactam 3 g + SF 0,9% 100 mL IV em 30 min de 6/6h." },
      { contexto: "Criança — IV", texto: "Ampicilina + sulbactam ___ mg (de ampicilina) IV de 6/6h, em SF 0,9% em 30 min.\n(100–200 mg/kg/dia de ampicilina ÷ 4; máximo 2 g de ampicilina por dose.)" }
    ] },
  { id: "cefaclor", nomes: ["Cefaclor", "Ceclor"], classe: "antibioticos", receita: "antimicrobiano", tags: ["betalactamico", "cefalosporina"],
    usos: "Otite média, sinusite, faringite, infecção de pele e ITU leves (cefalosporina de 2ª geração oral).",
    ped: { dose: 40, faixa: "20–40 mg/kg/dia ÷ 8/8h", porDia: true, divisoes: 3, intervalo: "8/8h", maxDia: 1000 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "cápsula 500 mg", mgPorComp: 500 }],
    adulto: "250–500 mg VO 8/8h",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: ["Reação tipo doença do soro (mais comum em crianças)"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Cefaclor 500 mg ------------------------- 21 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 7 dias." },
      { contexto: "Criança — ambulatorial (40 mg/kg/dia)", texto: "USO ORAL\n1. Cefaclor suspensão 250 mg/5 mL ----------- 1 frasco\n   Dar ___ mL de 8 em 8 horas por 7 a 10 dias.\n   (20–40 mg/kg/dia ÷ 3; máximo 1 g/dia.)" }
    ] },
  { id: "cefpodoxima", nomes: ["Cefpodoxima", "cefpodoxima proxetila", "Orelox"], classe: "antibioticos", receita: "antimicrobiano", tags: ["betalactamico", "cefalosporina"],
    usos: "Infecções respiratórias altas e baixas, ITU não complicada (cefalosporina de 3ª geração oral).",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100–200 mg VO 12/12h, com alimento (conforme indicação)",
    renal: [{ abaixo: 30, texto: "Mesma dose a cada 24 h." }],
    gestacao: { nivel: "compativel", texto: "Provavelmente compatível (cefalosporina); dados limitados." },
    alergia: ["cefalosporinas"], contra: ["Antiácidos e IBP reduzem a absorção"],
    prescrever: [
      { contexto: "Adulto — infecção respiratória", texto: "USO ORAL\n1. Cefpodoxima 100 mg ---------------------- 20 comprimidos\n   Tomar 2 comprimidos (200 mg) de 12 em 12 horas, com alimento, por 5 dias.\n   (Cistite: 100 mg de 12/12h. Criança: suspensão conforme bula.)" }
    ] },
  { id: "cefotaxima", nomes: ["Cefotaxima", "Claforan"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Sepse e meningite neonatal (preferida à ceftriaxona no neonato), meningite, pneumonia e infecções graves por gram-negativos sensíveis.",
    ped: { dose: 50, faixa: "50 mg/kg/dose 6/6h–8/8h (meningite 300 mg/kg/dia)", intervalo: "6/6h ou 8/8h", maxDose: 2000 },
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 8/8h · meningite 2 g IV 4/4h–6/6h",
    renal: [{ abaixo: 20, texto: "Reduzir a dose em 50%." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: [],
    prescrever: [
      { contexto: "Hospitalar", texto: "Cefotaxima 2 g + SF 0,9% 100 mL IV em 30 min de 8/8h.\n(Meningite: 2 g de 4/4h a 6/6h.)" },
      { contexto: "Criança / neonato — IV", texto: "Cefotaxima ___ mg IV, em SF 0,9% em 30 min.\n(50 mg/kg por dose; intervalo pela idade: neonato 12/12h a 8/8h conforme idade gestacional e dias de vida, lactente/criança 6/6h–8/8h; meningite 300 mg/kg/dia; máximo 2 g por dose.)" }
    ] },
  { id: "cefalotina", nomes: ["Cefalotina", "Keflin"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Infecções por gram-positivos sensíveis (pele, partes moles), profilaxia cirúrgica (alternativa à cefazolina).",
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 4/4h–6/6h",
    renal: [{ abaixo: 50, texto: "Aumentar o intervalo conforme bula." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: ["Meia-vida curta (exige doses frequentes)"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Cefalotina 1 g + SF 0,9% 100 mL IV em 30 min de 6/6h.\n(Infecção grave: 2 g de 4/4h a 6/6h. Profilaxia cirúrgica: 2 g na indução.)" }
    ] },
  { id: "cefoxitina", nomes: ["Cefoxitina", "Mefoxin"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Profilaxia em cirurgia colorretal/abdominal, infecção intra-abdominal leve, DIP (com doxiciclina), infecções com anaeróbios.",
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 6/6h–8/8h · profilaxia cirúrgica 2 g IV na indução",
    renal: [{ abaixo: 30, texto: "1–2 g a cada 12–24 h (conforme bula)." }, { abaixo: 50, texto: "1–2 g a cada 8–12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: [],
    prescrever: [
      { contexto: "Profilaxia cirúrgica", texto: "Cefoxitina 2 g IV, 30–60 min antes da incisão; repetir a cada 2 h de cirurgia." },
      { contexto: "Hospitalar — tratamento", texto: "Cefoxitina 2 g + SF 0,9% 100 mL IV em 30 min de 6/6h." }
    ] },
  { id: "ceftarolina", nomes: ["Ceftarolina", "ceftarolina fosamila", "Zinforo"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Infecção de pele e partes moles e pneumonia comunitária, inclusive por MRSA (cefalosporina com atividade anti-MRSA).",
    apres: [{ rotulo: "frasco 600 mg", mgPorComp: 600 }],
    adulto: "600 mg IV 12/12h em 60 min",
    renal: [{ abaixo: 15, texto: "Conforme bula (hemodiálise: 200 mg 12/12h)." }, { abaixo: 30, texto: "300 mg 12/12h." }, { abaixo: 50, texto: "400 mg 12/12h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se o benefício justificar." },
    alergia: ["cefalosporinas"], contra: ["Não cobre Pseudomonas nem ESBL"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Ceftarolina 600 mg + SF 0,9% 250 mL IV em 60 min de 12/12h." }
    ] },
  { id: "ceftazidima-avibactam", nomes: ["Ceftazidima + avibactam", "ceftazidima-avibactam", "ceftazidima/avibactam", "Torgena"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "cefalosporina"],
    usos: "Gram-negativos multirresistentes (KPC/Enterobacterales resistentes a carbapenêmicos, Pseudomonas) conforme antibiograma e CCIH.",
    apres: [{ rotulo: "frasco 2 g + 0,5 g" }],
    adulto: "2,5 g (2 g + 0,5 g) IV 8/8h em infusão de 2 h",
    renal: [{ abaixo: 16, texto: "Conforme bula (0,75 g a cada 24–48 h)." }, { abaixo: 31, texto: "0,75 g (0,5 g + 0,125 g) a cada 12 h." }, { abaixo: 51, texto: "1,25 g (1 g + 0,25 g) a cada 8 h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se não houver alternativa." },
    alergia: ["cefalosporinas"], contra: ["Uso restrito: liberar com a CCIH", "Não cobre metalo-betalactamases (NDM) isolada: associar aztreonam conforme CCIH"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Ceftazidima + avibactam 2,5 g + SF 0,9% 100 mL IV em 2 horas de 8/8h.\n(Liberação pela CCIH; ajustar à função renal.)" }
    ] },
  { id: "imipenem-cilastatina", nomes: ["Imipenem + cilastatina", "imipenem-cilastatina", "imipenem", "Tienam"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico", "convulsivante"],
    usos: "Infecções graves hospitalares por gram-negativos (ESBL, Pseudomonas, Acinetobacter sensíveis), infecção polimicrobiana com anaeróbios.",
    apres: [{ rotulo: "frasco 500 mg + 500 mg", mgPorComp: 500 }],
    adulto: "500 mg IV 6/6h ou 1 g IV 8/8h (máx 4 g/dia)",
    renal: [{ abaixo: 15, texto: "Evitar, salvo em diálise (conforme bula)." }, { abaixo: 30, texto: "250–500 mg a cada 12 h." }, { abaixo: 60, texto: "Reduzir: 500 mg a cada 8 h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar quando indicado." },
    alergia: [], contra: ["Convulsões (mais que meropenem): evitar em meningite e epilepsia", "Ácido valproico (derruba o nível)", "Alergia grave a betalactâmico: reatividade cruzada baixa, avaliar"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Imipenem + cilastatina 500 mg + SF 0,9% 100 mL IV em 30–60 min de 6/6h." }
    ] },
  { id: "aztreonam", nomes: ["Aztreonam", "Azactam"], classe: "antibioticos", receita: "hospitalar", tags: ["betalactamico"],
    usos: "Gram-negativos aeróbios (inclusive Pseudomonas) em paciente com alergia grave a penicilinas; associação com ceftazidima-avibactam em metalo-betalactamase (CCIH).",
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV 8/8h (Pseudomonas/grave: 2 g 6/6h–8/8h)",
    renal: [{ abaixo: 10, texto: "Dose de ataque e depois 25% da dose." }, { abaixo: 30, texto: "Dose de ataque e depois 50% da dose." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; provavelmente seguro." },
    alergia: [], contra: ["Reação cruzada com ceftazidima (mesma cadeia lateral)", "Sem atividade contra gram-positivos e anaeróbios"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Aztreonam 2 g + SF 0,9% 100 mL IV em 30 min de 8/8h." }
    ] },

  /* ---------- antibióticos: anti-gram-positivos ---------- */
  { id: "teicoplanina", nomes: ["Teicoplanina", "Targocid"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Infecções por MRSA e gram-positivos resistentes (alternativa à vancomicina; pode ser IM e 1×/dia).",
    ped: { dose: 10, faixa: "10 mg/kg 12/12h × 3 doses, depois 6–10 mg/kg/dia", intervalo: "24/24h", maxDose: 400 },
    apres: [{ rotulo: "frasco 200 mg", mgPorComp: 200 }, { rotulo: "frasco 400 mg", mgPorComp: 400 }],
    adulto: "Ataque 6–12 mg/kg (em geral 400 mg) IV 12/12h × 3 doses; manutenção 6–12 mg/kg IV/IM 1×/dia",
    renal: [{ abaixo: 30, texto: "Após o 4º dia: dose de manutenção a cada 72 h (ou 1/3 da dose diária)." }, { abaixo: 80, texto: "Após o 4º dia: manutenção a cada 48 h (ou metade da dose diária)." }],
    gestacao: { nivel: "evitar", texto: "Evitar; dados insuficientes." },
    alergia: [], contra: ["Nefro/ototoxicidade (menor que vancomicina)", "Dosar nível sérico em infecção grave"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Teicoplanina 400 mg + SF 0,9% 100 mL IV em 30 min de 12/12h por 3 doses;\ndepois 400 mg IV 1 vez ao dia.\n(Infecção grave/endocardite: 12 mg/kg por dose.)" }
    ] },
  { id: "linezolida", nomes: ["Linezolida", "Zyvox"], classe: "antibioticos", receita: "antimicrobiano", tags: ["serotoninergico"],
    usos: "MRSA e VRE (pneumonia, pele e partes moles), com opção oral de mesma biodisponibilidade; TB resistente (esquemas especiais).",
    ped: { dose: 10, faixa: "< 12 anos: 10 mg/kg 8/8h", intervalo: "8/8h", maxDose: 600 },
    apres: [{ rotulo: "comprimido 600 mg", mgPorComp: 600 }, { rotulo: "bolsa 600 mg/300 mL (2 mg/mL)", mgPorMl: 2 }],
    adulto: "600 mg VO ou IV 12/12h",
    gestacao: { nivel: "evitar", texto: "Evitar; dados insuficientes." },
    alergia: [], contra: ["Mielossupressão (plaquetopenia) se > 14 dias: hemograma semanal", "Síndrome serotoninérgica com ISRS e outros serotoninérgicos (IMAO fraco)", "Neuropatia periférica/óptica e acidose lática no uso prolongado", "Evitar alimentos ricos em tiramina em excesso"],
    prescrever: [
      { contexto: "Adulto — oral", texto: "USO ORAL\n1. Linezolida 600 mg ----------------------- 20 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 10 dias." },
      { contexto: "Hospitalar", texto: "Linezolida 600 mg (bolsa 300 mL) IV em 30–120 min de 12/12h." }
    ] },
  { id: "daptomicina", nomes: ["Daptomicina", "Cubicin"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Bacteremia e endocardite direita por S. aureus (inclusive MRSA), infecção de pele e partes moles complicada, VRE. Não serve para pneumonia.",
    apres: [{ rotulo: "frasco 500 mg", mgPorComp: 500 }],
    adulto: "Pele: 4 mg/kg IV 1×/dia · bacteremia/endocardite: 6 mg/kg (até 8–10 mg/kg) IV 1×/dia",
    renal: [{ abaixo: 30, texto: "Mesma dose a cada 48 h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se necessário." },
    alergia: [], contra: ["Inativada pelo surfactante: não usar em pneumonia", "Miopatia/rabdomiólise: CPK semanal; suspender estatina", "Pneumonia eosinofílica"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Daptomicina ___ mg (6 mg/kg) + SF 0,9% 50 mL IV em 30 min 1 vez ao dia.\n(CPK basal e semanal.)" }
    ] },
  { id: "tigeciclina", nomes: ["Tigeciclina", "Tygacil"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Infecção intra-abdominal e de pele complicadas por germes multirresistentes (exceto Pseudomonas e Proteus), conforme CCIH.",
    apres: [{ rotulo: "frasco 50 mg", mgPorComp: 50 }],
    adulto: "100 mg IV de ataque, depois 50 mg IV 12/12h (doses maiores conforme CCIH)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (tetraciclina: dentes e ossos do feto)." },
    alergia: [], contra: ["Aumento de mortalidade em comparação a outros antibióticos: reservar sem alternativa", "Níveis séricos baixos: ruim para bacteremia", "Náuseas e vômitos", "< 8 anos"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Tigeciclina 100 mg + SF 0,9% 100 mL IV em 30–60 min (ataque);\ndepois tigeciclina 50 mg + SF 0,9% 100 mL IV em 30–60 min de 12/12h." }
    ] },

  /* ---------- antibióticos: polimixinas e aminoglicosídeo inalatório ---------- */
  { id: "polimixina-b", nomes: ["Polimixina B", "sulfato de polimixina B"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Gram-negativos multirresistentes (Acinetobacter, Pseudomonas, Klebsiella KPC) conforme antibiograma e CCIH.",
    apres: [{ rotulo: "frasco 500.000 UI (50 mg; 1 mg = 10.000 UI)" }],
    adulto: "Ataque 25.000 UI/kg (2,5 mg/kg) IV; manutenção 15.000 UI/kg (1,5 mg/kg) IV 12/12h, pelo peso real",
    gestacao: { nivel: "evitar", texto: "Evitar; usar só sem alternativa." },
    alergia: [], contra: ["Nefrotoxicidade e neurotoxicidade (bloqueio neuromuscular)", "Evitar outros nefrotóxicos", "Não precisa ajuste renal (diferente da colistina)"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Polimixina B ___ UI (25.000 UI/kg) + SG 5% 500 mL IV em 1–2 horas (ataque);\ndepois ___ UI (15.000 UI/kg) + SG 5% 500 mL IV em 1–2 horas de 12/12h.\n(Creatinina diária; liberação pela CCIH.)" }
    ] },
  { id: "colistina", nomes: ["Colistina", "colistimetato de sódio", "polimixina E", "Promixin"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Gram-negativos multirresistentes (IV, conforme CCIH); inalatória na colonização/infecção por Pseudomonas na fibrose cística e bronquiectasias.",
    apres: [{ rotulo: "frasco 1.000.000 UI (1 MUI) de colistimetato" }],
    adulto: "IV: ataque 9 MUI e manutenção 4,5 MUI 12/12h (ajustar ao ClCr) · inalatória: 1–2 MUI 12/12h",
    renal: [{ abaixo: 50, texto: "Reduzir a manutenção conforme ClCr e protocolo da CCIH (manter o ataque)." }],
    gestacao: { nivel: "evitar", texto: "Evitar; usar só sem alternativa." },
    alergia: [], contra: ["Nefrotoxicidade e neurotoxicidade", "Inalatória: broncoespasmo (fazer broncodilatador antes)"],
    prescrever: [
      { contexto: "Hospitalar — IV", texto: "Colistimetato de sódio 9.000.000 UI + SF 0,9% 100 mL IV em 30–60 min (ataque);\ndepois 4.500.000 UI + SF 0,9% 100 mL IV em 30–60 min de 12/12h, iniciando 12 h após o ataque.\n(Ajustar a manutenção à função renal com a CCIH.)" },
      { contexto: "Inalatória (fibrose cística / bronquiectasia)", texto: "USO INALATÓRIO\n1. Colistimetato de sódio 1.000.000 UI ------ 60 frascos\n   Diluir 1 frasco em 3–4 mL de SF 0,9% e inalar em nebulizador de 12 em 12 horas, uso contínuo (30 dias).\n   (Fazer broncodilatador 15 min antes; 1ª dose observada.)" }
    ] },
  { id: "tobramicina-inalatoria", nomes: ["Tobramicina inalatória", "tobramicina solução para inalação", "TOBI", "Bramitob"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Fibrose cística com Pseudomonas aeruginosa crônica (≥ 6 anos), em ciclos de 28 dias com e 28 dias sem; dispensação pelo componente especializado.",
    apres: [{ rotulo: "ampola 300 mg/5 mL para nebulização" }],
    adulto: "300 mg inalatório 12/12h por 28 dias, alternando 28 dias sem",
    gestacao: { nivel: "evitar", texto: "Evitar (aminoglicosídeo: ototoxicidade fetal com uso sistêmico)." },
    alergia: [], contra: ["Broncoespasmo", "Zumbido/perda auditiva", "Cuidado com outros nefro/ototóxicos"],
    prescrever: [
      { contexto: "Fibrose cística (≥ 6 anos)", texto: "USO INALATÓRIO\n1. Tobramicina 300 mg/5 mL solução para inalação --- 56 ampolas\n   Inalar 1 ampola em nebulizador de 12 em 12 horas por 28 dias; depois 28 dias de pausa (ciclos).\n   (Doses com intervalo mínimo de 6 h; broncodilatador antes; fisioterapia respiratória antes da inalação.)" }
    ] },

  /* ---------- antibióticos: macrolídeos, tetraciclinas e outros ---------- */
  { id: "eritromicina", nomes: ["Eritromicina", "estolato de eritromicina", "estearato de eritromicina", "Ilosone"], classe: "antibioticos", receita: "antimicrobiano", tags: ["macrolideo", "qt", "cyp3a4-inib"],
    usos: "Coqueluche (alternativa), clamídia na gestação (estearato), infecções respiratórias e de pele em alérgicos à penicilina, conjuntivite neonatal por clamídia.",
    ped: { dose: 40, faixa: "30–50 mg/kg/dia ÷ 6/6h", porDia: true, divisoes: 4, intervalo: "6/6h", maxDose: 500, maxDia: 2000 },
    apres: [{ rotulo: "suspensão de estolato 125 mg/5 mL (25 mg/mL)", mgPorMl: 25 }, { rotulo: "suspensão de estolato 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "500 mg VO 6/6h",
    gestacao: { nivel: "cautela", texto: "Estearato: compatível. Estolato: evitar na gestação (hepatotoxicidade colestática)." },
    alergia: ["macrolideos"], contra: ["Intolerância gástrica frequente", "Estenose hipertrófica de piloro em < 1 mês de vida (preferir azitromicina na coqueluche neonatal)", "Muitas interações (CYP3A4): sinvastatina, colchicina, varfarina", "QT longo"],
    prescrever: [
      { contexto: "Adulto — ambulatorial", texto: "USO ORAL\n1. Eritromicina (estearato) 500 mg --------- 28 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas por 7 dias." },
      { contexto: "Criança — ambulatorial (40 mg/kg/dia)", texto: "USO ORAL\n1. Eritromicina (estolato) suspensão 250 mg/5 mL --- 1 frasco\n   Dar ___ mL de 6 em 6 horas por 7 a 10 dias (coqueluche: 14 dias).\n   (30–50 mg/kg/dia ÷ 4; máximo 2 g/dia.)" }
    ] },
  { id: "espiramicina", nomes: ["Espiramicina", "Rovamicina"], classe: "antibioticos", receita: "antimicrobiano", tags: ["macrolideo"],
    usos: "Toxoplasmose aguda na gestação (para reduzir a transmissão vertical) até a confirmação/exclusão da infecção fetal ou até a 16ª–18ª semana; após, esquema tríplice conforme protocolo.",
    apres: [{ rotulo: "comprimido 500 mg (1,5 MUI)", mgPorComp: 500 }],
    adulto: "1 g (2 comprimidos) VO 8/8h (3 g/dia)",
    gestacao: { nivel: "compativel", texto: "Compatível; indicada na toxoplasmose gestacional." },
    alergia: ["macrolideos"], contra: ["Não trata o feto já infectado (não atravessa bem a placenta)", "Intolerância gastrointestinal"],
    prescrever: [
      { contexto: "Toxoplasmose na gestação", texto: "USO ORAL\n1. Espiramicina 500 mg (1,5 MUI) ----------- 180 comprimidos\n   Tomar 2 comprimidos (1 g) de 8 em 8 horas, uso contínuo (30 dias por receita).\n   (Manter até o parto se não houver infecção fetal confirmada, ou trocar para sulfadiazina + pirimetamina + ácido folínico conforme protocolo do pré-natal de alto risco.)" }
    ] },
  { id: "tetraciclina", nomes: ["Tetraciclina", "cloridrato de tetraciclina"], classe: "antibioticos", receita: "antimicrobiano", tags: ["tetraciclina"],
    usos: "H. pylori (quádrupla com bismuto), acne inflamatória, cólera, alternativa em sífilis/clamídia em alérgicos (preferir doxiciclina).",
    apres: [{ rotulo: "cápsula 500 mg", mgPorComp: 500 }],
    adulto: "250–500 mg VO 6/6h, em jejum",
    renal: [{ abaixo: 50, texto: "Evitar (piora a uremia); preferir doxiciclina." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (dentes e ossos do feto; hepatotoxicidade materna)." },
    alergia: [], contra: ["< 8 anos", "Separar de leite, cálcio, ferro e antiácidos (2 h antes ou 4 h depois)", "Fotossensibilidade"],
    prescrever: [
      { contexto: "H. pylori — quádrupla com bismuto (14 dias)", texto: "USO ORAL\n1. Tetraciclina 500 mg --------------------- 56 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 14 dias.\n   (Associar IBP, metronidazol e sal de bismuto conforme o consenso; ver IBP.)" },
      { contexto: "Acne inflamatória", texto: "USO ORAL\n1. Tetraciclina 500 mg --------------------- 60 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas, em jejum, por 30 dias; reavaliar.\n   (Associar tratamento tópico; preferir doxiciclina.)" }
    ] },
  { id: "minociclina", nomes: ["Minociclina", "cloridrato de minociclina"], classe: "antibioticos", receita: "antimicrobiano", tags: ["tetraciclina"],
    usos: "Hanseníase (esquemas substitutivos do MS), acne, MRSA comunitário de pele (alternativa).",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100 mg VO 12/12h (acne: 100 mg/dia) · hanseníase: conforme esquema substitutivo do MS",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (tetraciclina)." },
    alergia: [], contra: ["< 8 anos", "Tontura/vertigem", "Hiperpigmentação, lúpus induzido e hepatite autoimune no uso longo", "Separar de cálcio, ferro e antiácidos"],
    prescrever: [
      { contexto: "Adulto — pele (MRSA comunitário, alternativa)", texto: "USO ORAL\n1. Minociclina 100 mg ---------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias, com bastante água.\n   (Primeira dose: 200 mg, se indicado.)" }
    ] },
  { id: "cloranfenicol", nomes: ["Cloranfenicol", "Quemicetina"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Febre tifoide, riquetsioses (febre maculosa) quando a doxiciclina não puder ser usada, meningite em alérgico grave a betalactâmico (alternativa).",
    ped: { dose: 50, faixa: "50–100 mg/kg/dia ÷ 6/6h", porDia: true, divisoes: 4, intervalo: "6/6h", maxDia: 4000 },
    apres: [{ rotulo: "cápsula/drágea 500 mg", mgPorComp: 500 }, { rotulo: "frasco 1 g (IV)", mgPorComp: 1000 }],
    adulto: "50–100 mg/kg/dia VO ou IV ÷ 6/6h (máx 4 g/dia)",
    gestacao: { nivel: "contraindicado", texto: "Evitar, principalmente no fim da gestação (síndrome do bebê cinzento)." },
    alergia: [], contra: ["Aplasia de medula (idiossincrática, rara e grave) e mielossupressão dose-dependente: hemograma", "Neonatos (síndrome do bebê cinzento)", "Hepatopatia"],
    prescrever: [
      { contexto: "Adulto — oral", texto: "USO ORAL\n1. Cloranfenicol 500 mg -------------------- 56 cápsulas\n   Tomar 1 a 2 cápsulas (500 mg a 1 g) de 6 em 6 horas, conforme o peso, por 7 a 14 dias.\n   (50 mg/kg/dia; hemograma semanal.)" },
      { contexto: "Hospitalar", texto: "Cloranfenicol 1 g + SF 0,9% 100 mL IV em 30 min de 6/6h.\n(50–100 mg/kg/dia; máximo 4 g/dia; hemograma 2×/semana.)" }
    ] },

  /* ---------- antibióticos: quinolonas e antissépticos urinários ---------- */
  { id: "norfloxacino", nomes: ["Norfloxacino", "norfloxacina", "Floxacin"], classe: "antibioticos", receita: "antimicrobiano", tags: ["quinolona"],
    usos: "Cistite não complicada (alternativa), profilaxia de peritonite bacteriana espontânea na cirrose.",
    apres: [{ rotulo: "comprimido 400 mg", mgPorComp: 400 }],
    adulto: "Cistite: 400 mg VO 12/12h por 3 dias · profilaxia de PBE: 400 mg 1×/dia",
    renal: [{ abaixo: 30, texto: "400 mg a cada 24 h." }],
    gestacao: { nivel: "evitar", texto: "Evitar (quinolona); preferir cefalexina, nitrofurantoína ou fosfomicina." },
    alergia: ["quinolonas"], contra: ["Tendinite/ruptura de tendão, neuropatia, aneurisma de aorta", "< 18 anos", "Separar de ferro, cálcio e antiácidos"],
    prescrever: [
      { contexto: "Cistite não complicada (alternativa)", texto: "USO ORAL\n1. Norfloxacino 400 mg --------------------- 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias." },
      { contexto: "Profilaxia de peritonite bacteriana espontânea", texto: "USO ORAL\n1. Norfloxacino 400 mg --------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo." }
    ] },
  { id: "moxifloxacino", nomes: ["Moxifloxacino", "moxifloxacina", "Avalox"], classe: "antibioticos", receita: "antimicrobiano", tags: ["quinolona", "qt"],
    usos: "Pneumonia comunitária e sinusite (quinolona respiratória), infecção intra-abdominal leve; TB resistente (esquemas especiais).",
    apres: [{ rotulo: "comprimido 400 mg", mgPorComp: 400 }, { rotulo: "bolsa 400 mg/250 mL", mgPorMl: 1.6 }],
    adulto: "400 mg VO ou IV 1×/dia",
    gestacao: { nivel: "evitar", texto: "Evitar (quinolona)." },
    alergia: ["quinolonas"], contra: ["QT longo (mais que outras quinolonas)", "Tendinite, neuropatia, disglicemia, aneurisma de aorta", "< 18 anos", "Não serve para ITU (baixa concentração urinária)"],
    prescrever: [
      { contexto: "Adulto — pneumonia comunitária", texto: "USO ORAL\n1. Moxifloxacino 400 mg -------------------- 7 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 7 dias." },
      { contexto: "Hospitalar", texto: "Moxifloxacino 400 mg (bolsa 250 mL) IV em 60 min 1 vez ao dia." }
    ] },
  { id: "ofloxacino", nomes: ["Ofloxacino", "ofloxacina"], classe: "antibioticos", receita: "antimicrobiano", tags: ["quinolona"],
    usos: "Hanseníase (esquemas substitutivos do MS), ITU e uretrite/cervicite (alternativa).",
    apres: [{ rotulo: "comprimido 400 mg", mgPorComp: 400 }],
    adulto: "200–400 mg VO 12/12h (conforme indicação) · hanseníase: 400 mg/dia em esquema substitutivo",
    renal: [{ abaixo: 20, texto: "Dose habitual a cada 24 h (conforme bula)." }, { abaixo: 50, texto: "Dose habitual a cada 24 h." }],
    gestacao: { nivel: "evitar", texto: "Evitar (quinolona)." },
    alergia: ["quinolonas"], contra: ["Tendinite, neuropatia, QT longo", "< 18 anos", "Separar de ferro, cálcio e antiácidos"],
    prescrever: [
      { contexto: "Adulto — ITU (alternativa)", texto: "USO ORAL\n1. Ofloxacino 400 mg ----------------------- 6 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 3 dias (cistite) — pielonefrite: 7 a 10 dias." }
    ] },
  { id: "metenamina", nomes: ["Metenamina + azul de metileno", "metenamina", "Sepurin"], classe: "antibioticos", receita: "simples", tags: [],
    usos: "Antisséptico urinário: alívio de sintomas e profilaxia de ITU de repetição (eficácia modesta; não trata pielonefrite).",
    adulto: "Conforme bula, VO 3–4×/dia",
    gestacao: { nivel: "evitar", texto: "Evitar (azul de metileno)." },
    alergia: [], contra: ["Urina ácida é necessária (não associar alcalinizantes)", "Insuficiência renal e hepática", "Deficiência de G6PD (azul de metileno)", "Urina azul-esverdeada (avisar)", "Exigência de retenção de receita: conferir na RDC 471/2021"],
    prescrever: [
      { contexto: "Adulto — sintomas urinários / profilaxia", texto: "USO ORAL\n1. Metenamina + azul de metileno (drágeas) --- 1 caixa\n   Tomar conforme bula (geralmente 3 a 4 vezes ao dia), por até 10 dias.\n   (Avisar que a urina fica azul-esverdeada.)" }
    ] },
  { id: "sulfadiazina", nomes: ["Sulfadiazina"], classe: "antibioticos", receita: "antimicrobiano", tags: ["sulfonamida"],
    usos: "Toxoplasmose (cerebral no HIV, ocular, gestacional após 18 semanas com infecção fetal, congênita), sempre com pirimetamina e ácido folínico.",
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "Neurotoxoplasmose: 1 g VO 6/6h (< 60 kg) ou 1,5 g 6/6h (≥ 60 kg) · gestação: 1,5 g 12/12h (3 g/dia)",
    renal: [{ abaixo: 50, texto: "Reduzir a dose/ evitar; risco de cristalúria e piora renal." }],
    gestacao: { nivel: "cautela", texto: "Usada na toxoplasmose fetal confirmada após 18 semanas; suspender perto do parto (kernicterus) conforme protocolo." },
    alergia: ["sulfonamidas"], contra: ["Cristalúria/lesão renal: hidratação ≥ 2 L/dia", "Farmacodermias graves (Stevens-Johnson)", "Deficiência de G6PD", "Hemograma periódico"],
    prescrever: [
      { contexto: "Neurotoxoplasmose (HIV) — fase de ataque", texto: "USO ORAL\n1. Sulfadiazina 500 mg --------------------- 240 comprimidos\n   Tomar 2 comprimidos (1 g) de 6 em 6 horas (≥ 60 kg: 3 comprimidos) por 6 semanas.\n   (Com pirimetamina e ácido folínico; beber 2 L de água por dia.)" },
      { contexto: "Toxoplasmose gestacional com infecção fetal", texto: "USO ORAL\n1. Sulfadiazina 500 mg --------------------- 180 comprimidos\n   Tomar 3 comprimidos (1,5 g) de 12 em 12 horas, uso contínuo (30 dias por receita).\n   (Com pirimetamina e ácido folínico; esquema, alternância com espiramicina e suspensão antes do parto conforme protocolo.)" },
      { contexto: "Toxoplasmose congênita (criança)", texto: "USO ORAL\n1. Sulfadiazina 500 mg (suspensão manipulada ou comprimido diluído) --- conforme peso\n   Dar ___ mg de 12 em 12 horas.\n   (100 mg/kg/dia ÷ 2, por 12 meses, com pirimetamina e ácido folínico — conforme protocolo.)" }
    ] },

  /* ---------- tuberculose (Manual de TB, MS) ---------- */
  { id: "rhze", nomes: ["RHZE", "rifampicina + isoniazida + pirazinamida + etambutol", "4 em 1", "esquema básico da tuberculose"], classe: "antibioticos", receita: "antimicrobiano", tags: ["indutor"],
    usos: "Tuberculose (adultos e ≥ 10 anos): fase intensiva do esquema básico, 2 meses (2RHZE), seguida de 4 meses de RH. Dispensação pelo SUS com notificação no SINAN.",
    apres: [{ rotulo: "comprimido 150/75/400/275 mg (R/H/Z/E)" }],
    adulto: "Por peso, 1×/dia em jejum, por 2 meses: 20–35 kg 2 comp · 36–50 kg 3 comp · 51–70 kg 4 comp · > 70 kg 5 comp",
    renal: [{ abaixo: 30, texto: "Não usar o comprimido combinado: pirazinamida e etambutol 3×/semana — montar esquema com fármacos separados (especialista)." }],
    gestacao: { nivel: "compativel", texto: "Esquema básico mantido na gestação; associar piridoxina (vitamina B6) 50 mg/dia." },
    alergia: [], contra: ["Hepatotoxicidade: TGO/TGP, bilirrubinas basais e se sintomas", "Rifampicina: urina/lágrima alaranjadas; muitas interações (anticoncepcional, varfarina, antirretrovirais, DOACs, azóis)", "Neurite óptica (etambutol): acuidade visual e cores", "Hiperuricemia/artralgia (pirazinamida)", "Neuropatia (isoniazida): piridoxina em grupos de risco"],
    prescrever: [
      { contexto: "Tuberculose — fase intensiva (2 meses), adulto 51–70 kg", texto: "USO ORAL\n1. Rifampicina 150 mg + isoniazida 75 mg + pirazinamida 400 mg + etambutol 275 mg (RHZE) --- 120 comprimidos\n   Tomar 4 comprimidos juntos, 1 vez ao dia, em jejum, por 30 dias (fase intensiva: 2 meses).\n   (Faixas: 20–35 kg 2 comp; 36–50 kg 3 comp; > 70 kg 5 comp. Notificar no SINAN, TDO, testar HIV, avaliar contatos.)" }
    ] },
  { id: "rh", nomes: ["RH", "rifampicina + isoniazida", "2 em 1", "fase de manutenção da tuberculose"], classe: "antibioticos", receita: "antimicrobiano", tags: ["indutor"],
    usos: "Tuberculose: fase de manutenção do esquema básico (4 meses de RH; 10 meses na forma meningoencefálica e osteoarticular).",
    apres: [{ rotulo: "comprimido 150/75 mg (R/H)" }, { rotulo: "comprimido 300/150 mg (R/H)" }],
    adulto: "Comprimido 150/75 mg por peso, 1×/dia em jejum, por 4 meses: 20–35 kg 2 comp · 36–50 kg 3 comp · 51–70 kg 4 comp · > 70 kg 5 comp",
    gestacao: { nivel: "compativel", texto: "Compatível; associar piridoxina 50 mg/dia." },
    alergia: [], contra: ["Hepatotoxicidade", "Interações da rifampicina (anticoncepcional, varfarina, antirretrovirais, DOACs)", "Urina alaranjada"],
    prescrever: [
      { contexto: "Tuberculose — fase de manutenção (4 meses), adulto 51–70 kg", texto: "USO ORAL\n1. Rifampicina 150 mg + isoniazida 75 mg (RH) --- 120 comprimidos\n   Tomar 4 comprimidos juntos, 1 vez ao dia, em jejum, por 30 dias (fase de manutenção: 4 meses).\n   (Faixas: 20–35 kg 2 comp; 36–50 kg 3 comp; > 70 kg 5 comp. Criança < 10 anos: RHZ/RH dispersíveis conforme tabela do MS.)" }
    ] },
  { id: "isoniazida", nomes: ["Isoniazida", "INH", "hidrazida"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Tratamento da infecção latente pelo M. tuberculosis (ILTB) — 6H/9H ou junto da rifapentina (3HP); componente dos esquemas de TB.",
    ped: { dose: 10, faixa: "ILTB: 10 mg/kg/dia (7–15)", intervalo: "24/24h", maxDose: 300 },
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "comprimido 300 mg", mgPorComp: 300 }],
    adulto: "ILTB: 5–10 mg/kg/dia (máx 300 mg) VO 1×/dia por 6 a 9 meses (180 a 270 doses)",
    gestacao: { nivel: "compativel", texto: "Compatível; na ILTB, em geral adiar para após o parto, salvo HIV/contato recente (avaliar). Associar piridoxina." },
    alergia: [], contra: ["Hepatite (risco maior > 35 anos, álcool, hepatopatia): TGO/TGP", "Neuropatia periférica: piridoxina 50 mg/dia em gestantes, HIV, diabetes, etilismo, desnutrição", "Interage com fenitoína e carbamazepina (aumenta níveis)"],
    prescrever: [
      { contexto: "ILTB — adulto (6H/9H)", texto: "USO ORAL\n1. Isoniazida 100 mg ----------------------- 90 comprimidos\n   Tomar 3 comprimidos (300 mg) 1 vez ao dia, em jejum, por 30 dias (total de 180 a 270 doses).\n   (Ou isoniazida 300 mg, 1 comprimido/dia, se disponível. Notificar a ILTB.)" },
      { contexto: "ILTB — criança (10 mg/kg/dia)", texto: "USO ORAL\n1. Isoniazida 100 mg ----------------------- 30 comprimidos\n   Dar ___ comprimido(s) (dissolvido em água) 1 vez ao dia por 6 meses.\n   (10 mg/kg/dia, faixa 7–15; máximo 300 mg/dia.)" }
    ] },
  { id: "pirazinamida", nomes: ["Pirazinamida"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Tuberculose (fase intensiva), quando usada separada do RHZE (crianças, ajustes por toxicidade ou insuficiência renal).",
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "25 mg/kg/dia (faixa 20–30) VO 1×/dia; conforme tabela de peso do MS",
    renal: [{ abaixo: 30, texto: "25 mg/kg 3×/semana (após a diálise)." }],
    gestacao: { nivel: "compativel", texto: "Usada no esquema básico na gestação (MS)." },
    alergia: [], contra: ["Hepatotoxicidade", "Hiperuricemia e gota", "Artralgia"],
    prescrever: [
      { contexto: "Tuberculose — uso separado", texto: "USO ORAL\n1. Pirazinamida 500 mg --------------------- conforme peso\n   Tomar ___ comprimido(s) 1 vez ao dia por 2 meses (fase intensiva).\n   (25 mg/kg/dia; esquema montado pelo especialista/referência.)" }
    ] },
  { id: "etambutol", nomes: ["Etambutol"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Tuberculose (fase intensiva), em uso separado quando o RHZE não puder ser usado; micobacterioses não tuberculosas.",
    apres: [{ rotulo: "comprimido 400 mg", mgPorComp: 400 }],
    adulto: "15–25 mg/kg/dia VO 1×/dia (conforme tabela de peso do MS)",
    renal: [{ abaixo: 30, texto: "15–25 mg/kg 3×/semana (após a diálise)." }],
    gestacao: { nivel: "compativel", texto: "Usado no esquema básico na gestação (MS)." },
    alergia: [], contra: ["Neurite óptica: acuidade visual e visão de cores; cuidado em crianças pequenas (não referem sintomas)"],
    prescrever: [
      { contexto: "Tuberculose — uso separado", texto: "USO ORAL\n1. Etambutol 400 mg ------------------------ conforme peso\n   Tomar ___ comprimido(s) 1 vez ao dia por 2 meses (fase intensiva).\n   (15–25 mg/kg/dia; orientar procurar atendimento se piora da visão.)" }
    ] },
  { id: "rifapentina", nomes: ["Rifapentina", "3HP", "rifapentina + isoniazida"], classe: "antibioticos", receita: "antimicrobiano", tags: ["indutor"],
    usos: "Tratamento da infecção latente da TB (ILTB) em esquema 3HP: rifapentina + isoniazida 1×/semana por 12 semanas (≥ 2 anos), dispensação SUS.",
    apres: [{ rotulo: "comprimido 150 mg", mgPorComp: 150 }],
    adulto: "> 30 kg (≥ 14 anos): rifapentina 900 mg + isoniazida 900 mg VO 1×/semana por 12 doses",
    gestacao: { nivel: "evitar", texto: "Não recomendada na gestação (sem dados); usar isoniazida isolada." },
    alergia: [], contra: ["Indutor potente: anticoncepcional hormonal, antirretrovirais (IP, alguns INI), varfarina", "Reação de hipersensibilidade tipo gripal", "Hepatotoxicidade"],
    prescrever: [
      { contexto: "ILTB — 3HP adulto (> 30 kg)", texto: "USO ORAL\n1. Rifapentina 150 mg --------------------- 72 comprimidos\n   Tomar 6 comprimidos (900 mg) 1 vez por semana, por 12 semanas.\n2. Isoniazida 300 mg ---------------------- 36 comprimidos\n   Tomar 3 comprimidos (900 mg) junto com a rifapentina, 1 vez por semana, por 12 semanas.\n   (Mesmo dia da semana; 12 doses. Criança 2–14 anos: doses por peso conforme nota técnica do MS.)" }
    ] },
  { id: "estreptomicina", nomes: ["Estreptomicina"], classe: "antibioticos", receita: "hospitalar", tags: [],
    usos: "Tuberculose em esquemas especiais (intolerância/resistência), conforme referência; tularemia, peste.",
    apres: [{ rotulo: "frasco 1 g", mgPorComp: 1000 }],
    adulto: "15 mg/kg/dia IM (máx 1 g; > 60 anos: 500–750 mg) conforme esquema especial",
    renal: [{ abaixo: 50, texto: "Aumentar intervalo (2–3×/semana) conforme referência." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (surdez congênita)." },
    alergia: [], contra: ["Ototoxicidade (vestibular) e nefrotoxicidade", "Miastenia gravis"],
    prescrever: [
      { contexto: "TB — esquema especial (referência)", texto: "Estreptomicina ___ mg (15 mg/kg, máx 1 g) IM profundo 1 vez ao dia (ou conforme esquema da referência).\n(Audiometria e creatinina periódicas.)" }
    ] },

  /* ---------- hanseníase (PQT-U, MS) ---------- */
  { id: "pqt-u-adulto", nomes: ["PQT-U adulto", "poliquimioterapia única", "PQT", "rifampicina + clofazimina + dapsona"], classe: "antibioticos", receita: "antimicrobiano", tags: ["indutor"],
    usos: "Hanseníase em adultos (> 50 kg): paucibacilar 6 cartelas (até 9 meses) e multibacilar 12 cartelas (até 18 meses). Dispensação SUS com notificação.",
    apres: [{ rotulo: "cartela mensal PQT-U adulto" }],
    adulto: "Dose mensal supervisionada: rifampicina 600 mg + clofazimina 300 mg + dapsona 100 mg · autoadministrada diária: clofazimina 50 mg + dapsona 100 mg",
    gestacao: { nivel: "compativel", texto: "Mantida na gestação (MS)." },
    alergia: [], contra: ["Dapsona: anemia hemolítica (G6PD), meta-hemoglobinemia, síndrome sulfona", "Rifampicina: interações e hepatotoxicidade", "Clofazimina: pigmentação da pele, ictiose", "Avaliar contatos e grau de incapacidade"],
    prescrever: [
      { contexto: "Hanseníase multibacilar — adulto", texto: "USO ORAL\n1. PQT-U adulto (rifampicina + clofazimina + dapsona) --- 1 cartela por mês\n   Dose mensal supervisionada na unidade: rifampicina 600 mg + clofazimina 300 mg + dapsona 100 mg.\n   Doses diárias em casa: clofazimina 50 mg + dapsona 100 mg 1 vez ao dia.\n   (Multibacilar: 12 cartelas; paucibacilar: 6 cartelas.)" }
    ] },
  { id: "pqt-u-infantil", nomes: ["PQT-U infantil", "poliquimioterapia única infantil"], classe: "antibioticos", receita: "antimicrobiano", tags: ["indutor"],
    usos: "Hanseníase em crianças de 30 a 50 kg (< 30 kg: doses por peso; > 50 kg: cartela adulto). PB 6 cartelas, MB 12 cartelas.",
    apres: [{ rotulo: "cartela mensal PQT-U infantil" }],
    adulto: "Criança 30–50 kg — mensal supervisionada: rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg · diária: dapsona 50 mg + clofazimina 50 mg em dias alternados",
    gestacao: { nivel: "compativel", texto: "Não se aplica (pediátrico)." },
    alergia: [], contra: ["< 30 kg: rifampicina 10–20 mg/kg, dapsona 1–2 mg/kg/dia, clofazimina 5 mg/kg mensal e 1 mg/kg/dia (conforme diretriz do MS)", "Mesmos efeitos adversos da PQT adulto"],
    prescrever: [
      { contexto: "Hanseníase — criança 30–50 kg", texto: "USO ORAL\n1. PQT-U infantil (rifampicina + clofazimina + dapsona) --- 1 cartela por mês\n   Dose mensal supervisionada: rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg.\n   Doses em casa: dapsona 50 mg 1 vez ao dia + clofazimina 50 mg em dias alternados.\n   (Multibacilar: 12 cartelas; paucibacilar: 6 cartelas.)" }
    ] },
  { id: "dapsona", nomes: ["Dapsona", "DDS", "diaminodifenilsulfona"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Hanseníase (componente da PQT), profilaxia de pneumocistose e toxoplasmose em HIV com intolerância a SMX-TMP, dermatite herpetiforme e dermatoses neutrofílicas.",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100 mg VO 1×/dia",
    gestacao: { nivel: "cautela", texto: "Usada na hanseníase na gestação; risco de hemólise no RN próximo ao parto." },
    alergia: [], contra: ["Deficiência de G6PD (hemólise): dosar antes quando possível", "Meta-hemoglobinemia", "Síndrome da dapsona (febre, rash, hepatite) nas primeiras semanas", "Alergia a sulfas: reação cruzada possível, mas não obrigatória"],
    prescrever: [
      { contexto: "Profilaxia de pneumocistose (HIV, intolerância a SMX-TMP)", texto: "USO ORAL\n1. Dapsona 100 mg -------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo (até CD4 > 200 por 3 meses).\n   (Hemograma; se CD4 < 100 com IgG para toxoplasma, associar pirimetamina + ácido folínico.)" }
    ] },
  { id: "clofazimina", nomes: ["Clofazimina", "Lampren"], classe: "antibioticos", receita: "antimicrobiano", tags: [],
    usos: "Hanseníase (componente da PQT-U), reação hansênica tipo 2 (eritema nodoso) em esquemas específicos; micobacterioses resistentes.",
    apres: [{ rotulo: "cápsula 50 mg", mgPorComp: 50 }, { rotulo: "cápsula 100 mg", mgPorComp: 100 }],
    adulto: "Na PQT-U: 300 mg mensal + 50 mg/dia · eritema nodoso: conforme diretriz do MS",
    gestacao: { nivel: "cautela", texto: "Mantida na PQT na gestação; pode pigmentar a pele do RN (reversível)." },
    alergia: [], contra: ["Pigmentação vermelho-acastanhada da pele (reversível), ictiose", "Dor abdominal em doses altas", "QT longo (associação com outros)"],
    prescrever: [
      { contexto: "Hanseníase", texto: "Uso dentro da cartela PQT-U (ver PQT-U adulto/infantil). Esquemas avulsos e reação tipo 2: conforme diretriz do MS e referência." }
    ] },

  /* ---------- antifúngicos sistêmicos ---------- */
  { id: "anfotericina-b-desoxicolato", nomes: ["Anfotericina B desoxicolato", "anfotericina B convencional", "anfotericina B", "Fungizon"], classe: "antifungicos", receita: "hospitalar", tags: [],
    usos: "Micoses sistêmicas graves (criptococose, histoplasmose, paracoccidioidomicose grave, candidíase invasiva), leishmaniose visceral e mucosa (alternativa).",
    apres: [{ rotulo: "frasco 50 mg", mgPorComp: 50 }],
    adulto: "0,7–1 mg/kg/dia IV em SG 5% (máx 50 mg/dia; concentração ≤ 0,1 mg/mL) em 4–6 h",
    renal: [{ abaixo: 50, texto: "Nefrotóxica: preferir a lipossomal; se usar, hidratar e monitorar diariamente." }],
    gestacao: { nivel: "cautela", texto: "Usar quando indicada (preferida aos azóis na gestação para micose grave; lipossomal preferível)." },
    alergia: [], contra: ["Nefrotoxicidade, hipocalemia e hipomagnesemia: creatinina e eletrólitos diários", "Reação infusional (febre, calafrios): pré-medicação", "Não diluir em SF (precipita)"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Pré-hidratação: SF 0,9% 500–1.000 mL IV antes da infusão.\nAnfotericina B desoxicolato ___ mg (0,7–1 mg/kg) + SG 5% 500 mL IV em 4–6 horas, 1 vez ao dia, protegida da luz.\n(Pré-medicar com dipirona/paracetamol e anti-histamínico se reação; K e Mg diários; repor K/Mg.)" }
    ] },
  { id: "anfotericina-b-lipossomal", nomes: ["Anfotericina B lipossomal", "anfotericina lipossomal", "AmBisome"], classe: "antifungicos", receita: "hospitalar", tags: [],
    usos: "Leishmaniose visceral (escolha em grupos de risco: gestante, > 50 anos, renal, HIV, transplantados — MS), criptococose em HIV, mucormicose, aspergilose, candidíase invasiva com disfunção renal.",
    apres: [{ rotulo: "frasco 50 mg", mgPorComp: 50 }],
    adulto: "3–5 mg/kg/dia IV (mucormicose 5–10) · leishmaniose visceral: 3 mg/kg/dia por 7 dias ou 4 mg/kg/dia por 5 dias (MS)",
    gestacao: { nivel: "compativel", texto: "Escolha na leishmaniose visceral e nas micoses graves da gestante." },
    alergia: [], contra: ["Menos nefrotóxica que a convencional, mas monitorar creatinina, K e Mg", "Reação infusional", "Diluir somente em SG 5%"],
    prescrever: [
      { contexto: "Leishmaniose visceral (MS)", texto: "Anfotericina B lipossomal ___ mg (3 mg/kg/dia) + SG 5% (concentração 0,2–2 mg/mL) IV em 30–60 min a 2 horas, 1 vez ao dia por 7 dias.\n(Alternativa: 4 mg/kg/dia por 5 dias. Notificar no SINAN.)" },
      { contexto: "Hospitalar — micose sistêmica", texto: "Anfotericina B lipossomal ___ mg (3–5 mg/kg) + SG 5% 250 mL IV em 2 horas, 1 vez ao dia.\n(Criptococose: associar flucitosina ou fluconazol conforme protocolo.)" }
    ] },
  { id: "voriconazol", nomes: ["Voriconazol", "Vfend"], classe: "antifungicos", receita: "hospitalar", tags: ["azol", "cyp3a4-inib", "qt"],
    usos: "Aspergilose invasiva (escolha), candidíase resistente ao fluconazol, Fusarium/Scedosporium.",
    apres: [{ rotulo: "comprimido 200 mg", mgPorComp: 200 }, { rotulo: "frasco 200 mg (IV)", mgPorComp: 200 }],
    adulto: "IV: 6 mg/kg 12/12h no D1, depois 4 mg/kg 12/12h · VO (≥ 40 kg): 400 mg 12/12h no D1, depois 200 mg 12/12h",
    renal: [{ abaixo: 50, texto: "Evitar a forma IV (veículo ciclodextrina acumula); preferir VO." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (teratogênico em animais), salvo risco de vida." },
    alergia: [], contra: ["Muitas interações (CYP3A4/2C19/2C9): estatinas, varfarina, imunossupressores, rifampicina contraindicada", "Distúrbio visual transitório, alucinações, fotossensibilidade", "Hepatotoxicidade; QT longo", "Nível sérico recomendado"],
    prescrever: [
      { contexto: "Hospitalar — IV", texto: "Voriconazol ___ mg (6 mg/kg) IV em 1–2 horas de 12/12h nas primeiras 24 h;\ndepois ___ mg (4 mg/kg) IV em 1–2 horas de 12/12h." },
      { contexto: "Oral (≥ 40 kg)", texto: "USO ORAL\n1. Voriconazol 200 mg --------------------- 60 comprimidos\n   Tomar 2 comprimidos (400 mg) de 12 em 12 horas no 1º dia; depois 1 comprimido (200 mg) de 12 em 12 horas,\n   1 hora antes ou 1 hora depois das refeições.\n   (Fora do hospital: receita de antimicrobiano em 2 vias — RDC 471/2021; dispensação pelo componente especializado conforme protocolo.)" }
    ] },
  { id: "posaconazol", nomes: ["Posaconazol", "Noxafil"], classe: "antifungicos", receita: "antimicrobiano", tags: ["azol", "cyp3a4-inib", "qt"],
    usos: "Profilaxia de infecção fúngica invasiva em neutropenia prolongada/GVHD, mucormicose (sequência/consolidação), aspergilose (alternativa).",
    apres: [{ rotulo: "comprimido de liberação retardada 100 mg", mgPorComp: 100 }],
    adulto: "Comprimido: 300 mg 12/12h no D1, depois 300 mg 1×/dia, com alimento",
    gestacao: { nivel: "evitar", texto: "Evitar (dados insuficientes; toxicidade em animais)." },
    alergia: [], contra: ["Interações (CYP3A4): estatinas, imunossupressores, alcaloides de ergot", "QT longo", "Hepatotoxicidade", "Comprimido e suspensão não são intercambiáveis mg a mg"],
    prescrever: [
      { contexto: "Profilaxia / tratamento (especialista)", texto: "USO ORAL\n1. Posaconazol 100 mg (comprimido de liberação retardada) --- 96 comprimidos\n   Tomar 3 comprimidos (300 mg) de 12 em 12 horas no 1º dia; depois 3 comprimidos (300 mg) 1 vez ao dia, com alimento, por 30 dias.\n   (Não partir nem mastigar.)" }
    ] },
  { id: "micafungina", nomes: ["Micafungina", "Mycamine"], classe: "antifungicos", receita: "hospitalar", tags: [],
    usos: "Candidemia e candidíase invasiva (equinocandina de escolha no paciente grave), candidíase esofágica, profilaxia em transplante de medula.",
    apres: [{ rotulo: "frasco 50 mg", mgPorComp: 50 }, { rotulo: "frasco 100 mg", mgPorComp: 100 }],
    adulto: "Candidemia: 100 mg IV 1×/dia · esofágica: 150 mg/dia · profilaxia: 50 mg/dia",
    gestacao: { nivel: "evitar", texto: "Evitar; preferir anfotericina B na gestação." },
    alergia: [], contra: ["Hepatotoxicidade (monitorar)", "Fraca contra C. parapsilosis", "Não atinge urina/SNC/olho de forma adequada"],
    prescrever: [
      { contexto: "Hospitalar — candidemia", texto: "Micafungina 100 mg + SF 0,9% 100 mL IV em 1 hora, 1 vez ao dia.\n(Manter 14 dias após a primeira hemocultura negativa; fundo de olho; remover cateter.)" }
    ] },
  { id: "caspofungina", nomes: ["Caspofungina", "Cancidas"], classe: "antifungicos", receita: "hospitalar", tags: [],
    usos: "Candidemia e candidíase invasiva, aspergilose refratária, neutropenia febril persistente (empírico).",
    apres: [{ rotulo: "frasco 50 mg", mgPorComp: 50 }, { rotulo: "frasco 70 mg", mgPorComp: 70 }],
    adulto: "70 mg IV no D1, depois 50 mg IV 1×/dia (> 80 kg: 70 mg/dia)",
    gestacao: { nivel: "evitar", texto: "Evitar; preferir anfotericina B na gestação." },
    alergia: [], contra: ["Hepatopatia moderada: manutenção 35 mg/dia", "Indutores (rifampicina) reduzem o nível: manutenção 70 mg/dia", "Não diluir em SG"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Caspofungina 70 mg + SF 0,9% 250 mL IV em 1 hora no 1º dia;\ndepois caspofungina 50 mg + SF 0,9% 250 mL IV em 1 hora, 1 vez ao dia." }
    ] },
  { id: "anidulafungina", nomes: ["Anidulafungina", "Ecalta"], classe: "antifungicos", receita: "hospitalar", tags: [],
    usos: "Candidemia e candidíase invasiva; não precisa ajuste hepático nem renal.",
    apres: [{ rotulo: "frasco 100 mg", mgPorComp: 100 }],
    adulto: "200 mg IV no D1, depois 100 mg IV 1×/dia",
    gestacao: { nivel: "evitar", texto: "Evitar; preferir anfotericina B na gestação." },
    alergia: [], contra: ["Reação infusional (histamina) se infundir rápido: não exceder 1,1 mg/min"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Anidulafungina 200 mg + SF 0,9% ou SG 5% 200 mL IV em 3 horas no 1º dia;\ndepois anidulafungina 100 mg + 100 mL IV em 1,5 hora, 1 vez ao dia." }
    ] },
  { id: "griseofulvina", nomes: ["Griseofulvina", "Fulcin"], classe: "antifungicos", receita: "simples", tags: ["indutor"],
    usos: "Tinha do couro cabeludo (tinea capitis) em crianças, tinhas extensas por dermatófitos (alternativa à terbinafina).",
    ped: { dose: 20, faixa: "micronizada: 20–25 mg/kg/dia em 1–2 tomadas", porDia: true, divisoes: 1, intervalo: "24/24h", maxDia: 1000 },
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "500 mg–1 g VO por dia, após refeição gordurosa",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (teratogênica). Mulheres: contracepção durante e 1 mês após; homens: evitar concepção por 6 meses." },
    alergia: [], contra: ["Hepatopatia grave e porfiria", "Indutor: reduz efeito de anticoncepcional e varfarina", "Fotossensibilidade; efeito tipo dissulfiram com álcool"],
    prescrever: [
      { contexto: "Tinea capitis — criança (20–25 mg/kg/dia)", texto: "USO ORAL\n1. Griseofulvina 500 mg -------------------- 1 caixa\n   Dar ___ comprimido 1 vez ao dia, após refeição com gordura (leite), por 6 a 8 semanas.\n   (20–25 mg/kg/dia; máximo 1 g/dia. Comprimido pode ser triturado. Associar xampu antifúngico.)" },
      { contexto: "Adulto — tinha extensa", texto: "USO ORAL\n1. Griseofulvina 500 mg -------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, após refeição, por 4 a 6 semanas." }
    ] },
  { id: "flucitosina", nomes: ["Flucitosina", "5-fluorocitosina", "5-FC"], classe: "antifungicos", receita: "hospitalar", tags: [],
    usos: "Meningite criptocócica (indução, com anfotericina B), dispensada pelo MS para criptococose.",
    apres: [{ rotulo: "comprimido/cápsula 500 mg", mgPorComp: 500 }],
    adulto: "100 mg/kg/dia VO ÷ 6/6h (25 mg/kg por dose) por 1–2 semanas (indução)",
    renal: [{ abaixo: 20, texto: "25 mg/kg a cada 24 h (ou conforme nível sérico)." }, { abaixo: 40, texto: "25 mg/kg a cada 12 h." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (teratogênica em animais)." },
    alergia: [], contra: ["Mielossupressão (hemograma 2×/semana)", "Hepatotoxicidade", "Ajuste renal obrigatório (piora com anfotericina)"],
    prescrever: [
      { contexto: "Criptococose — indução", texto: "Flucitosina ___ mg (25 mg/kg) VO de 6 em 6 horas, junto com anfotericina B, por 1 a 2 semanas conforme protocolo.\n(Hemograma e creatinina 2×/semana; ajustar ao ClCr.)" }
    ] },

  /* ---------- antivirais: herpesvírus, hepatites, covid-19 ---------- */
  { id: "ganciclovir", nomes: ["Ganciclovir", "Cymevene"], classe: "antivirais", receita: "hospitalar", tags: [],
    usos: "Citomegalovírus (retinite, colite, pneumonite) em imunossuprimidos, CMV congênito sintomático, preempção em transplante.",
    apres: [{ rotulo: "frasco 500 mg", mgPorComp: 500 }],
    adulto: "Indução: 5 mg/kg IV 12/12h por 14–21 dias · manutenção: 5 mg/kg IV 1×/dia",
    renal: [{ abaixo: 10, texto: "Indução 1,25 mg/kg 3×/semana após diálise." }, { abaixo: 25, texto: "Indução 1,25 mg/kg a cada 24 h." }, { abaixo: 50, texto: "Indução 2,5 mg/kg a cada 24 h." }, { abaixo: 70, texto: "Indução 2,5 mg/kg a cada 12 h." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (teratogênico e mutagênico); contracepção durante e após o uso conforme bula." },
    alergia: [], contra: ["Mielossupressão (neutropenia, plaquetopenia): hemograma 2–3×/semana", "Manipular como citotóxico", "Ajuste renal obrigatório"],
    prescrever: [
      { contexto: "Hospitalar — indução", texto: "Ganciclovir ___ mg (5 mg/kg) + SF 0,9% 100 mL IV em 1 hora de 12/12h, por 14 a 21 dias.\n(Hemograma e creatinina 2–3×/semana.)" },
      { contexto: "CMV congênito sintomático (neonato)", texto: "Ganciclovir ___ mg (6 mg/kg) IV em 1 hora de 12/12h; trocar para valganciclovir oral assim que possível, total de 6 meses (conforme protocolo)." }
    ] },
  { id: "valganciclovir", nomes: ["Valganciclovir", "Valcyte"], classe: "antivirais", receita: "simples", tags: [],
    usos: "CMV: tratamento oral (retinite, sequência após ganciclovir), profilaxia em transplante, CMV congênito sintomático (6 meses).",
    apres: [{ rotulo: "comprimido 450 mg", mgPorComp: 450 }],
    adulto: "Indução: 900 mg VO 12/12h por 21 dias · manutenção/profilaxia: 900 mg 1×/dia, com alimento",
    renal: [{ abaixo: 10, texto: "Não recomendado (hemodiálise: conforme bula)." }, { abaixo: 25, texto: "Indução 450 mg a cada 48 h; manutenção 450 mg 2×/semana." }, { abaixo: 40, texto: "Indução 450 mg 1×/dia; manutenção 450 mg a cada 48 h." }, { abaixo: 60, texto: "Indução 450 mg 12/12h; manutenção 450 mg 1×/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (teratogênico)." },
    alergia: [], contra: ["Mielossupressão: hemograma frequente", "Não partir/triturar (citotóxico)"],
    prescrever: [
      { contexto: "CMV — indução oral (adulto)", texto: "USO ORAL\n1. Valganciclovir 450 mg ------------------ 84 comprimidos\n   Tomar 2 comprimidos (900 mg) de 12 em 12 horas, com alimento, por 21 dias.\n   (Depois manutenção 900 mg 1 vez ao dia. Hemograma semanal.)" },
      { contexto: "CMV congênito (criança)", texto: "USO ORAL\n1. Valganciclovir (suspensão/formulação conforme disponibilidade) --- 1 frasco\n   Dar ___ mg de 12 em 12 horas por 6 meses.\n   (16 mg/kg por dose de 12/12h; hemograma semanal no início — conforme protocolo.)" }
    ] },
  { id: "fanciclovir", nomes: ["Fanciclovir", "Penvir", "Famvir"], classe: "antivirais", receita: "simples", tags: [],
    usos: "Herpes-zóster e herpes genital/labial (alternativa ao aciclovir/valaciclovir, menos tomadas).",
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "Zóster: 500 mg VO 8/8h por 7 dias · herpes genital recorrente: 1 g 12/12h por 1 dia",
    renal: [{ abaixo: 20, texto: "Zóster: 250 mg a cada 24 h." }, { abaixo: 40, texto: "Zóster: 500 mg a cada 24 h." }, { abaixo: 60, texto: "Zóster: 500 mg a cada 12 h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; preferir aciclovir/valaciclovir." },
    alergia: [], contra: ["Ajuste renal"],
    prescrever: [
      { contexto: "Herpes-zóster", texto: "USO ORAL\n1. Fanciclovir 500 mg ---------------------- 21 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas por 7 dias.\n   (Iniciar em até 72 h do início das lesões.)" },
      { contexto: "Herpes genital — recorrência", texto: "USO ORAL\n1. Fanciclovir 500 mg ---------------------- 4 comprimidos\n   Tomar 2 comprimidos (1 g) de 12 em 12 horas por 1 dia, nos primeiros sintomas." }
    ] },
  { id: "tenofovir", nomes: ["Tenofovir", "tenofovir desoproxila", "fumarato de tenofovir desoproxila", "TDF"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Hepatite B crônica (1ª linha no SUS, inclusive na gestação para prevenir transmissão vertical); componente de esquemas de HIV, PrEP e PEP.",
    apres: [{ rotulo: "comprimido 300 mg", mgPorComp: 300 }],
    adulto: "300 mg VO 1×/dia",
    renal: [{ abaixo: 10, texto: "Hemodiálise: 300 mg a cada 7 dias (após a sessão)." }, { abaixo: 30, texto: "300 mg a cada 72–96 h; preferir entecavir." }, { abaixo: 50, texto: "300 mg a cada 48 h; considerar entecavir." }],
    gestacao: { nivel: "compativel", texto: "Compatível; indicado no 3º trimestre (a partir de 24–28 semanas) em gestante com HBV DNA alto/HBeAg reagente para prevenir transmissão vertical." },
    alergia: [], contra: ["Nefrotoxicidade (tubulopatia) e perda de massa óssea: creatinina, fósforo e EAS", "Suspensão na hepatite B pode causar reativação grave", "Testar HIV antes (monoterapia gera resistência)", "Receituário: controle especial (lista C4) / formulário SUS de ARV quando para HIV"],
    prescrever: [
      { contexto: "Hepatite B crônica", texto: "USO ORAL\n1. Tenofovir desoproxila 300 mg ------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo.\n   (Dispensação conforme PCDT de hepatite B; creatinina e fósforo periódicos.)" }
    ] },
  { id: "entecavir", nomes: ["Entecavir", "Baraclude"], classe: "antivirais", receita: "simples", tags: [],
    usos: "Hepatite B crônica (alternativa ao tenofovir, preferido em doença renal ou osteoporose).",
    apres: [{ rotulo: "comprimido 0,5 mg" }],
    adulto: "0,5 mg VO 1×/dia em jejum (cirrose descompensada ou resistência à lamivudina: 1 mg/dia)",
    renal: [{ abaixo: 10, texto: "0,5 mg a cada 7 dias (conforme bula)." }, { abaixo: 30, texto: "0,5 mg a cada 72 h." }, { abaixo: 50, texto: "0,5 mg a cada 48 h." }],
    gestacao: { nivel: "evitar", texto: "Evitar; na gestação preferir tenofovir." },
    alergia: [], contra: ["Acidose lática (raro)", "Suspensão pode causar reativação grave", "Não usar se HIV sem tratamento (resistência)"],
    prescrever: [
      { contexto: "Hepatite B crônica", texto: "USO ORAL\n1. Entecavir 0,5 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, em jejum (2 h após ou antes das refeições), uso contínuo.\n   (Dispensação conforme PCDT de hepatite B.)" }
    ] },
  { id: "sofosbuvir-velpatasvir", nomes: ["Sofosbuvir + velpatasvir", "sofosbuvir/velpatasvir", "Epclusa"], classe: "antivirais", receita: "simples", tags: [],
    usos: "Hepatite C crônica, todos os genótipos (pangenotípico), com ou sem cirrose compensada; dispensação pelo PCDT.",
    apres: [{ rotulo: "comprimido 400/100 mg" }],
    adulto: "1 comprimido (400/100 mg) VO 1×/dia por 12 semanas (cirrose descompensada: + ribavirina, conforme PCDT)",
    gestacao: { nivel: "evitar", texto: "Evitar (sem dados suficientes); tratar após o parto." },
    alergia: [], contra: ["Amiodarona: bradicardia grave (contraindicado)", "Indutores (rifampicina, carbamazepina, fenitoína): contraindicados", "IBP/antiácidos reduzem a absorção", "Testar hepatite B (risco de reativação)"],
    prescrever: [
      { contexto: "Hepatite C crônica (12 semanas)", texto: "USO ORAL\n1. Sofosbuvir 400 mg + velpatasvir 100 mg --- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo, por 12 semanas.\n   (Dispensação conforme PCDT de hepatite C; carga viral 12 semanas após o fim.)" }
    ] },
  { id: "glecaprevir-pibrentasvir", nomes: ["Glecaprevir + pibrentasvir", "glecaprevir/pibrentasvir", "Mavyret"], classe: "antivirais", receita: "simples", tags: [],
    usos: "Hepatite C crônica pangenotípica (8 semanas em sem cirrose ou cirrose compensada, virgem de tratamento); opção na doença renal crônica.",
    apres: [{ rotulo: "comprimido 100/40 mg" }],
    adulto: "3 comprimidos (300/120 mg) VO 1×/dia com alimento, por 8 semanas (casos específicos: 12–16 semanas)",
    gestacao: { nivel: "evitar", texto: "Evitar (sem dados suficientes)." },
    alergia: [], contra: ["Cirrose descompensada (Child B/C): contraindicado", "Atazanavir, rifampicina: contraindicados", "Estatinas: limitar dose/evitar", "Testar hepatite B (reativação)"],
    prescrever: [
      { contexto: "Hepatite C crônica (8 semanas)", texto: "USO ORAL\n1. Glecaprevir 100 mg + pibrentasvir 40 mg --- 84 comprimidos\n   Tomar 3 comprimidos juntos, 1 vez ao dia, com alimento, por 4 semanas (repetir por mais 4 semanas: total 8 semanas).\n   (Dispensação conforme PCDT de hepatite C.)" }
    ] },
  { id: "ribavirina", nomes: ["Ribavirina"], classe: "antivirais", receita: "simples", tags: [],
    usos: "Hepatite C (associada aos antivirais de ação direta em cirrose descompensada/retratamento, conforme PCDT).",
    apres: [{ rotulo: "cápsula 250 mg", mgPorComp: 250 }],
    adulto: "< 75 kg: 1.000 mg/dia · ≥ 75 kg: 1.250 mg/dia VO ÷ 12/12h, com alimento (ou 11 mg/kg/dia; cirrose descompensada: iniciar menor)",
    renal: [{ abaixo: 50, texto: "Reduzir a dose (conforme PCDT/bula); evitar se < 30 sem diálise." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (teratogênica): 2 métodos contraceptivos durante e até 6 meses após, também para parceiras de homens tratados." },
    alergia: [], contra: ["Anemia hemolítica: hemograma nas semanas 2 e 4", "Cardiopatia grave", "Hemoglobinopatias"],
    prescrever: [
      { contexto: "Hepatite C — associação (< 75 kg)", texto: "USO ORAL\n1. Ribavirina 250 mg ----------------------- 120 cápsulas\n   Tomar 2 cápsulas (500 mg) de 12 em 12 horas, com alimento, por 30 dias (duração conforme PCDT).\n   (≥ 75 kg: 3 cápsulas pela manhã e 2 à noite. Hemograma com 2 e 4 semanas.)" }
    ] },
  { id: "nirmatrelvir-ritonavir", nomes: ["Nirmatrelvir + ritonavir", "nirmatrelvir/ritonavir", "Paxlovid"], classe: "antivirais", receita: "simples", tags: ["cyp3a4-inib"],
    usos: "Covid-19 leve a moderada com alto risco de progressão (imunossuprimidos, idosos — critérios do MS), iniciar em até 5 dias dos sintomas.",
    apres: [{ rotulo: "comprimido nirmatrelvir 150 mg + comprimido ritonavir 100 mg (blíster)" }],
    adulto: "Nirmatrelvir 300 mg (2 comp) + ritonavir 100 mg (1 comp) VO 12/12h por 5 dias",
    renal: [{ abaixo: 30, texto: "Conforme bula/protocolo vigente (uso não recomendado originalmente)." }, { abaixo: 60, texto: "Nirmatrelvir 150 mg + ritonavir 100 mg 12/12h." }],
    gestacao: { nivel: "cautela", texto: "Dados limitados; pode ser usado se o benefício justificar (conforme MS)." },
    alergia: [], contra: ["Muitas interações graves (ritonavir): estatinas, amiodarona, DOACs, tacrolimo, sildenafil, alguns anticonvulsivantes — checar antes", "Hepatopatia grave (Child C)", "Indutores potentes (rifampicina, carbamazepina): contraindicados"],
    prescrever: [
      { contexto: "Covid-19 de alto risco (5 dias)", texto: "USO ORAL\n1. Nirmatrelvir 150 mg + ritonavir 100 mg (blíster) --- 1 caixa (30 comprimidos)\n   Tomar 2 comprimidos de nirmatrelvir + 1 comprimido de ritonavir juntos, de 12 em 12 horas, por 5 dias.\n   (Iniciar em até 5 dias dos sintomas; revisar TODAS as interações antes.)" }
    ] },
  { id: "remdesivir", nomes: ["Remdesivir", "Veklury"], classe: "antivirais", receita: "hospitalar", tags: [],
    usos: "Covid-19: internado com necessidade de O2 suplementar sem ventilação mecânica, ou ambulatorial de alto risco (3 dias).",
    apres: [{ rotulo: "frasco 100 mg (pó liofilizado)", mgPorComp: 100 }],
    adulto: "200 mg IV no D1, depois 100 mg IV 1×/dia (internado: 5 dias; ambulatorial de alto risco: 3 dias)",
    gestacao: { nivel: "cautela", texto: "Dados limitados; pode ser usado se indicado." },
    alergia: [], contra: ["Elevação de transaminases: TGP basal e durante", "Bradicardia"],
    prescrever: [
      { contexto: "Hospitalar", texto: "Remdesivir 200 mg + SF 0,9% 250 mL IV em 30–120 min no 1º dia;\ndepois remdesivir 100 mg + SF 0,9% 250 mL IV em 30–120 min, 1 vez ao dia, por mais 4 dias (ambulatorial de alto risco: total 3 dias)." }
    ] },

  /* ---------- antirretrovirais (PCDT HIV) — receituário: controle especial (lista C4) / formulário SUS de ARV ---------- */
  { id: "tdf-3tc-dtg", nomes: ["Tenofovir + lamivudina + dolutegravir", "TDF + 3TC + DTG", "TLD", "esquema inicial HIV", "dose tripla"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Esquema inicial preferencial da TARV em adultos (PCDT HIV): tenofovir + lamivudina (dose fixa 2 em 1) + dolutegravir 1×/dia; também é o esquema da PEP.",
    apres: [{ rotulo: "TDF/3TC 300/300 mg + DTG 50 mg (ou comprimido único em dose fixa, conforme disponibilidade)" }],
    adulto: "TDF/3TC 300/300 mg 1 comprimido + DTG 50 mg 1 comprimido VO 1×/dia (com rifampicina: DTG 50 mg 12/12h)",
    renal: [{ abaixo: 60, texto: "Não usar TDF com ClCr < 60 (troca por abacavir ou outra opção, conforme PCDT)." }],
    gestacao: { nivel: "compativel", texto: "Esquema preferencial também na gestação (PCDT TV)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de dispensação de ARV", "DTG: separar de antiácidos, cálcio, ferro, magnésio (2 h depois ou 6 h antes); aumenta metformina (máx 1 g/dia)", "TDF: nefrotoxicidade e osteopenia", "Coinfecção HBV: não suspender TDF/3TC"],
    prescrever: [
      { contexto: "TARV inicial — adulto", texto: "USO ORAL\n1. Tenofovir 300 mg + lamivudina 300 mg ----- 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo.\n2. Dolutegravir 50 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o anterior, uso contínuo.\n   (Formulário de solicitação de ARV do SUS; carga viral em 3 meses.)" }
    ] },
  { id: "tenofovir-lamivudina", nomes: ["Tenofovir + lamivudina", "TDF + 3TC", "TDF/3TC", "2 em 1"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Base (dupla de ITRN) dos esquemas de HIV e da PEP; hepatite B em coinfectados.",
    apres: [{ rotulo: "comprimido 300/300 mg" }],
    adulto: "1 comprimido VO 1×/dia (sempre combinado com 3º antirretroviral)",
    renal: [{ abaixo: 60, texto: "Não usar a dose fixa; ajustar componentes separados ou trocar o esquema." }],
    gestacao: { nivel: "compativel", texto: "Compatível (esquema preferencial com DTG)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Nefrotoxicidade e osteopenia (TDF)", "HBV: reativação se suspenso"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Tenofovir 300 mg + lamivudina 300 mg ----- 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo (com o 3º antirretroviral)." }
    ] },
  { id: "dolutegravir", nomes: ["Dolutegravir", "DTG", "Tivicay"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Inibidor de integrase: 3º fármaco preferencial na TARV inicial, PEP e gestação; formulação dispersível pediátrica.",
    apres: [{ rotulo: "comprimido 50 mg", mgPorComp: 50 }, { rotulo: "comprimido dispersível 5 mg (pediátrico)", mgPorComp: 5 }],
    adulto: "50 mg VO 1×/dia (com rifampicina ou resistência a INI: 50 mg 12/12h)",
    gestacao: { nivel: "compativel", texto: "Compatível em qualquer idade gestacional (PCDT)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Cátions polivalentes (antiácidos, ferro, cálcio, Mg): tomar DTG 2 h antes ou 6 h depois", "Aumenta a metformina (limitar 1 g/dia)", "Insônia, cefaleia, ganho de peso"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Dolutegravir 50 mg ---------------------- 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, uso contínuo.\n   (Em uso de rifampicina: 1 comprimido de 12 em 12 horas — 60 comprimidos/mês.)" }
    ] },
  { id: "lamivudina", nomes: ["Lamivudina", "3TC", "Epivir"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Componente da TARV (adulto e pediátrico), profilaxia do RN de alto risco (conforme PCDT TV); hepatite B (não é 1ª linha).",
    ped: { dose: 4, faixa: "4 mg/kg/dose 12/12h (conforme PCDT pediátrico)", intervalo: "12/12h", maxDose: 150 },
    apres: [{ rotulo: "comprimido 150 mg", mgPorComp: 150 }, { rotulo: "solução oral 10 mg/mL", mgPorMl: 10 }],
    adulto: "150 mg VO 12/12h ou 300 mg 1×/dia (sempre em associação)",
    renal: [{ abaixo: 50, texto: "Reduzir conforme bula (ex.: ClCr 30–49: 150 mg/dia)." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "HBV: reativação se suspenso"],
    prescrever: [
      { contexto: "Criança — TARV", texto: "USO ORAL\n1. Lamivudina solução oral 10 mg/mL -------- 1 (um) frasco\n   Dar ___ mL de 12 em 12 horas, uso contínuo.\n   (4 mg/kg por dose; máximo 150 mg por dose — conforme PCDT pediátrico.)" }
    ] },
  { id: "zidovudina", nomes: ["Zidovudina", "AZT", "Retrovir"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Profilaxia da transmissão vertical do HIV (AZT IV no parto e xarope no RN), esquemas pediátricos e de resgate.",
    apres: [{ rotulo: "solução oral 10 mg/mL", mgPorMl: 10 }, { rotulo: "frasco-ampola 10 mg/mL (IV)", mgPorMl: 10 }, { rotulo: "cápsula 100 mg", mgPorComp: 100 }],
    adulto: "300 mg VO 12/12h · no parto: 2 mg/kg IV na 1ª hora, depois 1 mg/kg/h até o clampeamento do cordão",
    gestacao: { nivel: "compativel", texto: "Compatível; AZT IV intraparto quando carga viral desconhecida ou ≥ 1.000 cópias (PCDT TV)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Anemia e neutropenia: hemograma", "Miopatia, lipoatrofia"],
    prescrever: [
      { contexto: "Parto — gestante com HIV (PCDT TV)", texto: "Zidovudina 10 mg/mL: ataque 2 mg/kg em SG 5% 100 mL IV em 1 hora, iniciando 3 h antes da cesárea eletiva ou no início do trabalho de parto;\nmanutenção 1 mg/kg/h em infusão contínua até o clampeamento do cordão." },
      { contexto: "Recém-nascido exposto (PCDT TV)", texto: "USO ORAL\n1. Zidovudina solução oral 10 mg/mL -------- 1 (um) frasco\n   Dar ___ mL de 12 em 12 horas por 28 dias, iniciando nas primeiras 4 horas de vida.\n   (≥ 35 semanas: 4 mg/kg por dose; prematuros: doses do PCDT. Associações para RN de alto risco conforme PCDT vigente.)" }
    ] },
  { id: "zidovudina-lamivudina", nomes: ["Zidovudina + lamivudina", "AZT + 3TC", "AZT/3TC", "Biovir"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Dupla de ITRN alternativa ao TDF/3TC (doença renal, osteoporose) ou em esquemas de resgate.",
    apres: [{ rotulo: "comprimido 300/150 mg" }],
    adulto: "1 comprimido VO 12/12h (com 3º antirretroviral)",
    renal: [{ abaixo: 50, texto: "Não usar a dose fixa: componentes separados ajustados." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Anemia (Hb < 8 contraindica), neutropenia"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Zidovudina 300 mg + lamivudina 150 mg ---- 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "abacavir", nomes: ["Abacavir", "ABC", "Ziagenavir"], classe: "antivirais", receita: "C1", tags: [],
    usos: "ITRN alternativo ao tenofovir (doença renal) em adultos e crianças; exige HLA-B*5701 negativo.",
    apres: [{ rotulo: "comprimido 300 mg", mgPorComp: 300 }, { rotulo: "solução oral 20 mg/mL", mgPorMl: 20 }],
    adulto: "300 mg VO 12/12h ou 600 mg 1×/dia (com 3TC)",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "HLA-B*5701 positivo: contraindicado (hipersensibilidade grave; nunca reintroduzir)", "Risco cardiovascular alto: cautela"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Abacavir 300 mg ------------------------- 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 12 em 12 horas (ou 2 comprimidos 1 vez ao dia), uso contínuo.\n   (Só com HLA-B*5701 negativo; orientar sinais de hipersensibilidade.)" }
    ] },
  { id: "efavirenz", nomes: ["Efavirenz", "EFV", "Stocrin"], classe: "antivirais", receita: "C1", tags: ["indutor"],
    usos: "ITRNN de esquemas alternativos de TARV (pacientes estáveis em uso; não é mais preferencial).",
    apres: [{ rotulo: "comprimido 600 mg", mgPorComp: 600 }, { rotulo: "comprimido 200 mg", mgPorComp: 200 }],
    adulto: "600 mg VO 1×/dia ao deitar, longe de refeição gordurosa",
    gestacao: { nivel: "cautela", texto: "Pode ser mantido se já em uso com carga viral indetectável; não é preferencial (DTG preferido)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Sintomas neuropsiquiátricos (sonhos vívidos, tontura, depressão, ideação suicida)", "Rash", "Indutor: reduz anticoncepcional hormonal (implante), outros fármacos"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Efavirenz 600 mg ------------------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, ao deitar, uso contínuo." }
    ] },
  { id: "atazanavir", nomes: ["Atazanavir", "ATV", "Reyataz"], classe: "antivirais", receita: "C1", tags: ["cyp3a4-inib"],
    usos: "Inibidor de protease (sempre potencializado com ritonavir) em esquemas alternativos e de resgate.",
    apres: [{ rotulo: "cápsula 300 mg", mgPorComp: 300 }],
    adulto: "300 mg + ritonavir 100 mg VO 1×/dia, com alimento",
    gestacao: { nivel: "compativel", texto: "Pode ser usado (ATV/r é alternativa na gestação)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "IBP contraindicado (absorção depende de acidez); anti-H2 com intervalo", "Hiperbilirrubinemia indireta (icterícia benigna), litíase renal", "Interações do ritonavir (estatinas, sildenafil, DOACs, corticoides inalatórios)"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Atazanavir 300 mg ----------------------- 30 (trinta) cápsulas\n   Tomar 1 cápsula 1 vez ao dia, com alimento, uso contínuo.\n2. Ritonavir 100 mg ------------------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o atazanavir, uso contínuo." }
    ] },
  { id: "ritonavir", nomes: ["Ritonavir", "RTV", "Norvir"], classe: "antivirais", receita: "C1", tags: ["cyp3a4-inib"],
    usos: "Potencializador (booster) dos inibidores de protease (atazanavir, darunavir, lopinavir).",
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }],
    adulto: "100 mg VO 1×/dia (com ATV ou DRV 800 mg) ou 100 mg 12/12h (com DRV 600 mg)",
    gestacao: { nivel: "compativel", texto: "Compatível como booster." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Inibidor potente do CYP3A4: sinvastatina, amiodarona, sildenafil, DOACs, fluticasona/budesonida, midazolam oral — checar interações"],
    prescrever: [
      { contexto: "Booster", texto: "USO ORAL\n1. Ritonavir 100 mg ------------------------ 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o inibidor de protease, uso contínuo." }
    ] },
  { id: "darunavir", nomes: ["Darunavir", "DRV", "Prezista"], classe: "antivirais", receita: "C1", tags: ["cyp3a4-inib"],
    usos: "Inibidor de protease com alta barreira genética (com ritonavir) para resgate e esquemas alternativos.",
    apres: [{ rotulo: "comprimido 600 mg", mgPorComp: 600 }, { rotulo: "comprimido 800 mg", mgPorComp: 800 }],
    adulto: "Sem mutações de resistência ao DRV: 800 mg + ritonavir 100 mg 1×/dia · com mutações: 600 mg + ritonavir 100 mg 12/12h (com alimento)",
    gestacao: { nivel: "cautela", texto: "Na gestação usar 600/100 mg 12/12h (níveis menores)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Contém grupo sulfonamida: cautela em alergia a sulfa", "Rash, hepatotoxicidade", "Interações do ritonavir"],
    prescrever: [
      { contexto: "Componente da TARV (12/12h)", texto: "USO ORAL\n1. Darunavir 600 mg ------------------------ 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, com alimento, uso contínuo.\n2. Ritonavir 100 mg ------------------------ 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, junto com o darunavir, uso contínuo." }
    ] },
  { id: "raltegravir", nomes: ["Raltegravir", "RAL", "Isentress"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Inibidor de integrase: alternativa ao DTG (coinfecção TB, intolerância), profilaxia do RN de alto risco (conforme PCDT TV), resgate.",
    apres: [{ rotulo: "comprimido 400 mg", mgPorComp: 400 }, { rotulo: "granulado para suspensão 100 mg (pediátrico)" }],
    adulto: "400 mg VO 12/12h (com rifampicina: 800 mg 12/12h)",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Antiácidos com Al/Mg: evitar", "Miopatia/CPK, rash raro"],
    prescrever: [
      { contexto: "Componente da TARV", texto: "USO ORAL\n1. Raltegravir 400 mg ---------------------- 60 (sessenta) comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, uso contínuo." }
    ] },
  { id: "nevirapina", nomes: ["Nevirapina", "NVP", "Viramune"], classe: "antivirais", receita: "C1", tags: ["indutor"],
    usos: "Profilaxia da transmissão vertical em RN de alto risco (associada à zidovudina, conforme PCDT TV vigente); TARV pediátrica em situações específicas.",
    apres: [{ rotulo: "suspensão oral 10 mg/mL", mgPorMl: 10 }, { rotulo: "comprimido 200 mg", mgPorComp: 200 }],
    adulto: "Adulto: não é mais esquema recomendado no PCDT (hepatotoxicidade e rash); uso principal é neonatal",
    gestacao: { nivel: "cautela", texto: "Não iniciar em mulher com CD4 > 250 (hepatotoxicidade grave)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Rash grave (Stevens-Johnson) e hepatite nas primeiras semanas", "Indutor"],
    prescrever: [
      { contexto: "Recém-nascido de alto risco (PCDT TV)", texto: "USO ORAL\n1. Nevirapina suspensão oral 10 mg/mL ------ 1 (um) frasco\n   Dar ___ mL por dose, conforme peso de nascimento e esquema do PCDT de transmissão vertical vigente\n   (doses espaçadas na 1ª semana de vida), junto com zidovudina.\n   (Conferir na tabela do PCDT: dose por faixa de peso e número de doses.)" }
    ] },
  { id: "prep-tdf-ftc", nomes: ["PrEP", "tenofovir + entricitabina", "TDF + FTC", "TDF/FTC", "Truvada", "profilaxia pré-exposição"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Profilaxia pré-exposição ao HIV (PrEP) para pessoas ≥ 15 anos e ≥ 35 kg com risco aumentado; uso diário ou sob demanda (2-1-1, só para HSH/pessoas sem exposição vaginal).",
    apres: [{ rotulo: "comprimido 300/200 mg" }],
    adulto: "Diária: 1 comprimido VO 1×/dia (proteção após 7 dias em exposição anal e 20 dias na vaginal) · sob demanda: 2 comp 2–24 h antes + 1 comp 24 h e 1 comp 48 h após a 1ª dose",
    renal: [{ abaixo: 60, texto: "Não usar PrEP com TDF se ClCr < 60." }],
    gestacao: { nivel: "compativel", texto: "Pode ser mantida na gestação e amamentação (PrEP diária)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de PrEP", "Excluir infecção por HIV antes (teste rápido) e a cada consulta", "Creatinina, sífilis, hepatites B/C e outras IST periódicas", "Hepatite B: suspender pode causar reativação"],
    prescrever: [
      { contexto: "PrEP diária", texto: "USO ORAL\n1. Tenofovir 300 mg + entricitabina 200 mg -- 30 (trinta) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, todos os dias.\n   (1ª prescrição para 30 dias; depois a cada 120 dias, conforme PCDT PrEP. Teste rápido de HIV a cada retorno.)" },
      { contexto: "PrEP sob demanda (2-1-1)", texto: "USO ORAL\n1. Tenofovir 300 mg + entricitabina 200 mg -- 30 (trinta) comprimidos\n   Tomar 2 comprimidos de 2 a 24 horas antes da relação; 1 comprimido 24 horas após a 1ª dose; 1 comprimido 48 horas após a 1ª dose.\n   (Somente para exposição anal — não indicada para mulheres cis, pessoas trans em uso de hormônio ou com hepatite B.)" }
    ] },
  { id: "pep-hiv", nomes: ["PEP", "profilaxia pós-exposição", "PEP HIV", "PEP sexual", "acidente com material biológico"], classe: "antivirais", receita: "C1", tags: [],
    usos: "Profilaxia pós-exposição ao HIV (sexual, violência sexual, acidente com material biológico): iniciar em até 72 h, idealmente nas 2 primeiras horas, por 28 dias.",
    apres: [{ rotulo: "TDF/3TC 300/300 mg + DTG 50 mg" }],
    adulto: "TDF/3TC 300/300 mg 1 comp + DTG 50 mg 1 comp VO 1×/dia por 28 dias",
    renal: [{ abaixo: 60, texto: "Substituir TDF (ex.: zidovudina + lamivudina) conforme PCDT PEP." }],
    gestacao: { nivel: "compativel", texto: "Mesmo esquema na gestação (PCDT)." },
    alergia: [], contra: ["Receituário de controle especial (lista C4) / formulário SUS de ARV", "Teste rápido de HIV antes (não atrasar a 1ª dose pelo resultado de outros exames)", "Avaliar também IST, hepatite B (vacina/imunoglobulina), contracepção de emergência e tétano"],
    prescrever: [
      { contexto: "PEP — adulto (28 dias)", texto: "USO ORAL\n1. Tenofovir 300 mg + lamivudina 300 mg ----- 28 (vinte e oito) comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 28 dias.\n2. Dolutegravir 50 mg ---------------------- 28 (vinte e oito) comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o anterior, por 28 dias.\n   (Iniciar em até 72 h da exposição. Teste de HIV com 30 e 90 dias.)" },
      { contexto: "Criança", texto: "Esquema e doses por idade e peso conforme o PCDT de PEP (formulações pediátricas de zidovudina, lamivudina, dolutegravir/raltegravir)." }
    ] },

  /* ---------- toxoplasmose ---------- */
  { id: "pirimetamina", nomes: ["Pirimetamina", "Daraprim"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Toxoplasmose (neurotoxoplasmose, ocular, gestacional com infecção fetal após 18 semanas, congênita), sempre com sulfadiazina (ou clindamicina) e ácido folínico.",
    apres: [{ rotulo: "comprimido 25 mg", mgPorComp: 25 }],
    adulto: "Neurotoxoplasmose: 200 mg VO no D1, depois 50 mg/dia (< 60 kg) ou 75 mg/dia (≥ 60 kg) · gestação: 25 mg 12/12h",
    gestacao: { nivel: "cautela", texto: "Antifolato: evitar no 1º trimestre; usada após 18 semanas com infecção fetal, sempre com ácido folínico." },
    alergia: [], contra: ["Mielossupressão (antifolato): sempre associar ácido folínico (não ácido fólico) e fazer hemograma", "Convulsões em doses altas"],
    prescrever: [
      { contexto: "Neurotoxoplasmose (HIV) — fase de ataque", texto: "USO ORAL\n1. Pirimetamina 25 mg ---------------------- 100 comprimidos\n   Tomar 8 comprimidos (200 mg) no 1º dia; depois 2 comprimidos (50 mg) 1 vez ao dia (≥ 60 kg: 3 comprimidos) por 6 semanas.\n   (Com sulfadiazina e ácido folínico; hemograma semanal.)" },
      { contexto: "Toxoplasmose gestacional com infecção fetal", texto: "USO ORAL\n1. Pirimetamina 25 mg ---------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas (50 mg/dia), uso contínuo (30 dias por receita).\n   (Com sulfadiazina e ácido folínico; esquema conforme pré-natal de alto risco.)" },
      { contexto: "Toxoplasmose congênita (criança)", texto: "USO ORAL\n1. Pirimetamina 25 mg (suspensão manipulada ou comprimido diluído) --- conforme peso\n   Dar ___ mg 1 vez ao dia.\n   (1 mg/kg/dia por 2 a 6 meses, depois 1 mg/kg 3×/semana até 12 meses; com sulfadiazina e ácido folínico — conforme protocolo.)" }
    ] },
  { id: "acido-folinico", nomes: ["Ácido folínico", "folinato de cálcio", "leucovorina", "Leucovorin"], classe: "vitaminas", receita: "simples", tags: [],
    usos: "Prevenção da mielotoxicidade da pirimetamina (toxoplasmose), resgate de metotrexato em altas doses (oncologia).",
    apres: [{ rotulo: "comprimido 15 mg", mgPorComp: 15 }],
    adulto: "Com pirimetamina: 10–25 mg VO 1×/dia (até 50 mg/dia), durante e até 1 semana após a pirimetamina",
    gestacao: { nivel: "compativel", texto: "Compatível; obrigatório com pirimetamina na gestação." },
    alergia: [], contra: ["Não substituir por ácido fólico (antagoniza o efeito antiparasitário)", "Não corrige anemia por deficiência de B12"],
    prescrever: [
      { contexto: "Com pirimetamina (adulto/gestante)", texto: "USO ORAL\n1. Ácido folínico 15 mg ------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia enquanto usar pirimetamina e por mais 1 semana após o término." },
      { contexto: "Toxoplasmose congênita (criança)", texto: "USO ORAL\n1. Ácido folínico 15 mg ------------------- 15 comprimidos\n   Dar 10 mg (manipulado ou fração do comprimido) 3 vezes por semana, enquanto usar pirimetamina e por mais 1 semana.\n   (Conforme protocolo; ajustar pelo hemograma.)" }
    ] },

  /* ---------- helmintíases ---------- */
  { id: "pirantel", nomes: ["Pamoato de pirantel", "pirantel", "Ascarical"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Ascaridíase e enterobíase (oxiúros); ancilostomíase (esquema de 3 dias).",
    ped: { dose: 10, faixa: "10 mg/kg em dose única", intervalo: "dose única", maxDose: 1000 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "comprimido 250 mg", mgPorComp: 250 }],
    adulto: "10 mg/kg VO dose única (máx 1 g); oxiúros: repetir em 2 semanas",
    gestacao: { nivel: "cautela", texto: "Dados limitados; tratar após o 1º trimestre se necessário." },
    alergia: [], contra: ["Hepatopatia", "Antagoniza a piperazina"],
    prescrever: [
      { contexto: "Ascaridíase / oxiúros — criança", texto: "USO ORAL\n1. Pamoato de pirantel suspensão 250 mg/5 mL --- 1 frasco\n   Dar ___ mL em dose única; repetir após 2 semanas (oxiúros).\n   (10 mg/kg; máximo 1 g. Oxiúros: tratar toda a família, cortar unhas, lavar roupas de cama.)" },
      { contexto: "Adulto", texto: "USO ORAL\n1. Pamoato de pirantel 250 mg ------------ 4 comprimidos\n   Tomar 10 mg/kg (até 4 comprimidos — 1 g) em dose única; repetir em 2 semanas se oxiúros." }
    ] },
  { id: "tiabendazol", nomes: ["Tiabendazol", "Foldan", "Thiaben"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Estrongiloidíase e larva migrans cutânea (alternativa à ivermectina/albendazol); pouco tolerado.",
    ped: { dose: 25, faixa: "25 mg/kg/dose 12/12h", intervalo: "12/12h", maxDose: 1500, maxDia: 3000 },
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }, { rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }],
    adulto: "25 mg/kg VO 12/12h (máx 3 g/dia) por 2 dias (estrongiloidíase disseminada: ≥ 5 dias)",
    gestacao: { nivel: "evitar", texto: "Evitar; dados insuficientes." },
    alergia: [], contra: ["Náuseas, vômitos e tontura frequentes", "Hepatopatia", "Interage com teofilina"],
    prescrever: [
      { contexto: "Estrongiloidíase — adulto ~60 kg", texto: "USO ORAL\n1. Tiabendazol 500 mg --------------------- 12 comprimidos\n   Tomar 3 comprimidos (1,5 g) de 12 em 12 horas, após as refeições, por 2 dias.\n   (25 mg/kg por dose; máximo 3 g/dia. Ivermectina é a 1ª opção.)" },
      { contexto: "Criança", texto: "USO ORAL\n1. Tiabendazol suspensão 250 mg/5 mL ------ 1 frasco\n   Dar ___ mL de 12 em 12 horas, após as refeições, por 2 dias.\n   (25 mg/kg por dose; máximo 3 g/dia.)" }
    ] },

  /* ---------- malária (Guia de tratamento da malária no Brasil, MS) ---------- */
  { id: "cloroquina", nomes: ["Cloroquina", "difosfato de cloroquina"], classe: "antiparasitarios", receita: "simples", tags: ["qt"],
    usos: "Malária por P. vivax e P. malariae (com primaquina para cura radical no vivax); dispensação SUS com notificação.",
    apres: [{ rotulo: "comprimido 150 mg de base", mgPorComp: 150 }],
    adulto: "≥ 50 kg: 600 mg base (4 comp) no D1 e 450 mg (3 comp) no D2 e D3 (total 25 mg/kg base)",
    gestacao: { nivel: "compativel", texto: "Compatível; na gestante com vivax usar cloroquina sem primaquina e manter profilaxia semanal de recaída até o fim do aleitamento/6 meses (MS)." },
    alergia: [], contra: ["QT longo e arritmias", "Retinopatia (uso crônico)", "Psoríase e porfiria (pode piorar)", "Prurido intenso em pele negra"],
    prescrever: [
      { contexto: "Malária vivax — adulto ≥ 50 kg", texto: "USO ORAL\n1. Cloroquina 150 mg (base) --------------- 10 comprimidos\n   Tomar 4 comprimidos no 1º dia, 3 comprimidos no 2º dia e 3 comprimidos no 3º dia, com alimento.\n2. Primaquina 15 mg ----------------------- 14 comprimidos\n   Tomar 2 comprimidos (30 mg) 1 vez ao dia por 7 dias.\n   (Doses por peso/idade conforme tabela do MS; G6PD antes da primaquina quando disponível; notificar e lâmina de controle.)" }
    ] },
  { id: "primaquina", nomes: ["Primaquina", "fosfato de primaquina"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Cura radical da malária vivax/ovale (hipnozoítos) e bloqueio de transmissão (gametócitos) no falciparum.",
    apres: [{ rotulo: "comprimido 15 mg", mgPorComp: 15 }, { rotulo: "comprimido 5 mg", mgPorComp: 5 }],
    adulto: "Vivax: 0,5 mg/kg/dia por 7 dias (adulto ~30 mg/dia) ou 0,25 mg/kg/dia por 14 dias · falciparum: dose única conforme guia do MS",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação e em < 6 meses (hemólise fetal/neonatal); também evitar na amamentação de lactente < 6 meses." },
    alergia: [], contra: ["Deficiência de G6PD: hemólise (testar antes quando disponível; esquema semanal conforme MS)", "Meta-hemoglobinemia", "Tomar com alimento"],
    prescrever: [
      { contexto: "Malária vivax — cura radical (7 dias), adulto ~60 kg", texto: "USO ORAL\n1. Primaquina 15 mg ----------------------- 14 comprimidos\n   Tomar 2 comprimidos (30 mg) 1 vez ao dia, com alimento, por 7 dias.\n   (0,5 mg/kg/dia; ver tabela do MS por peso. Junto com cloroquina. Orientar urina escura/icterícia = suspender e procurar atendimento.)" }
    ] },
  { id: "artemeter-lumefantrina", nomes: ["Arteméter + lumefantrina", "artemeter-lumefantrina", "Coartem", "Coartem dispersível"], classe: "antiparasitarios", receita: "simples", tags: ["qt"],
    usos: "Malária por P. falciparum não complicada (1ª linha no Brasil) e malária mista; dispensação SUS com notificação.",
    apres: [{ rotulo: "comprimido 20/120 mg" }, { rotulo: "comprimido dispersível 20/120 mg (pediátrico)" }],
    adulto: "≥ 35 kg: 4 comprimidos por dose, 6 doses em 3 dias (0 h, 8 h, depois 12/12h), com alimento gorduroso",
    gestacao: { nivel: "cautela", texto: "Pode ser usado em todos os trimestres (OMS/MS atuais); 1º trimestre conforme guia vigente." },
    alergia: [], contra: ["QT longo", "Tomar com alimento (leite) para absorção", "Associar primaquina em dose única (exceto gestante e < 6 meses) conforme guia"],
    prescrever: [
      { contexto: "Malária falciparum — adulto ≥ 35 kg", texto: "USO ORAL\n1. Arteméter 20 mg + lumefantrina 120 mg --- 24 comprimidos\n   Tomar 4 comprimidos por dose: 1ª dose agora, 2ª dose 8 horas depois, e depois de 12 em 12 horas até completar 6 doses (3 dias), com alimento.\n   (Associar primaquina dose única conforme guia do MS. Crianças: dispersível por faixa de peso.)" }
    ] },
  { id: "artesunato-mefloquina", nomes: ["Artesunato + mefloquina", "ASMQ", "artesunato-mefloquina"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Malária por P. falciparum não complicada (alternativa ao arteméter-lumefantrina no Brasil).",
    apres: [{ rotulo: "comprimido adulto 100/220 mg" }, { rotulo: "comprimido infantil 25/55 mg" }],
    adulto: "Adulto: 2 comprimidos 100/220 mg VO 1×/dia por 3 dias (doses por peso/idade conforme guia do MS)",
    gestacao: { nivel: "cautela", texto: "Conforme guia do MS (evitar no 1º trimestre)." },
    alergia: [], contra: ["Mefloquina: transtornos neuropsiquiátricos (depressão, psicose, convulsão) — contraindicada se história", "Bradicardia/QT com betabloqueador e outros", "Não repetir mefloquina em < 60 dias"],
    prescrever: [
      { contexto: "Malária falciparum — adulto", texto: "USO ORAL\n1. Artesunato 100 mg + mefloquina 220 mg --- 6 comprimidos\n   Tomar 2 comprimidos 1 vez ao dia por 3 dias.\n   (Associar primaquina dose única conforme guia. Conferir faixa de peso/idade na tabela do MS.)" }
    ] },
  { id: "artesunato-iv", nomes: ["Artesunato injetável", "artesunato IV", "artesunato"], classe: "antiparasitarios", receita: "hospitalar", tags: [],
    usos: "Malária grave (qualquer espécie) e malária com sinais de gravidade, inclusive na gestação: 1ª escolha.",
    apres: [{ rotulo: "frasco 60 mg (com bicarbonato e diluente)", mgPorComp: 60 }],
    adulto: "2,4 mg/kg IV (< 20 kg: 3 mg/kg) na admissão, 12 h e 24 h, depois 1×/dia até tolerar VO; completar com ACT oral por 3 dias",
    gestacao: { nivel: "compativel", texto: "Escolha na malária grave em qualquer trimestre (benefício supera risco)." },
    alergia: [], contra: ["Hemólise tardia (dias 7–30): hemograma de controle", "Preparo: reconstituir com o bicarbonato e diluir no SG 5%/SF conforme bula"],
    prescrever: [
      { contexto: "Malária grave", texto: "Artesunato ___ mg (2,4 mg/kg; < 20 kg: 3 mg/kg) IV em bolus lento (ou IM) na admissão, com 12 h e com 24 h;\ndepois 1 vez ao dia até poder usar via oral (mínimo 24 h).\nCompletar com arteméter + lumefantrina por 3 dias (ou ASMQ) e primaquina conforme guia do MS.\n(Notificação imediata; UTI se critérios.)" }
    ] },
  { id: "quinina", nomes: ["Quinina", "sulfato de quinina", "dicloridrato de quinina"], classe: "antiparasitarios", receita: "simples", tags: ["qt"],
    usos: "Malária falciparum (alternativa, associada a doxiciclina ou clindamicina — esta na gestação/criança) e malária grave quando artesunato indisponível.",
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "Oral: 10 mg/kg (sal) VO 8/8h por 3 dias, com doxiciclina 7 dias (ou clindamicina) e primaquina conforme guia do MS",
    gestacao: { nivel: "cautela", texto: "Pode ser usada (com clindamicina) quando indicado; risco de hipoglicemia." },
    alergia: [], contra: ["Cinchonismo (zumbido, náusea, visão turva)", "Hipoglicemia (gestantes, grave)", "QT longo e arritmias", "Hemólise/plaquetopenia"],
    prescrever: [
      { contexto: "Malária falciparum — alternativa (adulto)", texto: "USO ORAL\n1. Sulfato de quinina 500 mg --------------- 18 comprimidos\n   Tomar ___ comprimido(s) (10 mg/kg por dose) de 8 em 8 horas por 3 dias.\n2. Doxiciclina 100 mg --------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias.\n   (Gestante/criança < 8 anos: clindamicina no lugar da doxiciclina. Conferir doses no guia do MS.)" }
    ] },

  /* ---------- doença de Chagas e leishmanioses ---------- */
  { id: "benznidazol", nomes: ["Benznidazol"], classe: "antiparasitarios", receita: "simples", tags: ["dissulfiram"],
    usos: "Doença de Chagas: fase aguda (inclusive transmissão oral), congênita, crônica em crianças/adolescentes e adultos selecionados; reativação em imunossuprimidos. Dispensação SUS.",
    ped: { dose: 7.5, faixa: "5–10 mg/kg/dia ÷ 2 por 60 dias", porDia: true, divisoes: 2, intervalo: "12/12h" },
    apres: [{ rotulo: "comprimido 100 mg", mgPorComp: 100 }, { rotulo: "comprimido 12,5 mg (pediátrico)", mgPorComp: 12.5 }],
    adulto: "5 mg/kg/dia VO ÷ 2–3 tomadas por 60 dias (máx 300 mg/dia; acima disso, prolongar os dias até completar a dose total)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação; teste de gravidez antes e contracepção durante o tratamento." },
    alergia: [], contra: ["Dermatite (frequente, pode ser grave: suspender se extensa/febre)", "Neuropatia periférica, leucopenia, agranulocitose: hemograma", "Evitar álcool", "Hepatopatia/insuficiência renal grave"],
    prescrever: [
      { contexto: "Doença de Chagas — adulto 60 kg", texto: "USO ORAL\n1. Benznidazol 100 mg ---------------------- 180 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 60 dias.\n   (5 mg/kg/dia; hemograma, TGO/TGP e creatinina antes e a cada 2–3 semanas. Evitar álcool.)" },
      { contexto: "Criança", texto: "USO ORAL\n1. Benznidazol 12,5 mg (pediátrico) ------- conforme peso\n   Dar ___ comprimido(s) (dispersos em água) de 12 em 12 horas por 60 dias.\n   (5–10 mg/kg/dia ÷ 2.)" }
    ] },
  { id: "nifurtimox", nomes: ["Nifurtimox", "Lampit"], classe: "antiparasitarios", receita: "simples", tags: ["dissulfiram"],
    usos: "Doença de Chagas: alternativa ao benznidazol (intolerância/falha), via MS.",
    apres: [{ rotulo: "comprimido 120 mg", mgPorComp: 120 }, { rotulo: "comprimido 30 mg (pediátrico)", mgPorComp: 30 }],
    adulto: "8–10 mg/kg/dia VO ÷ 3 tomadas por 60 a 90 dias, após as refeições (crianças: doses maiores por kg, conforme bula/MS)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação." },
    alergia: [], contra: ["Anorexia e perda de peso, náuseas", "Neuropsiquiátricos (insônia, irritabilidade), neuropatia", "Evitar álcool", "Hemograma e função hepática"],
    prescrever: [
      { contexto: "Doença de Chagas — adulto (alternativa)", texto: "USO ORAL\n1. Nifurtimox 120 mg ----------------------- conforme peso\n   Tomar ___ comprimido(s) de 8 em 8 horas, após as refeições, por 60 a 90 dias.\n   (8–10 mg/kg/dia ÷ 3; conferir doses no protocolo do MS.)" }
    ] },
  { id: "antimoniato-meglumina", nomes: ["Antimoniato de meglumina", "antimonial pentavalente", "Glucantime"], classe: "antiparasitarios", receita: "simples", tags: ["qt"],
    usos: "Leishmaniose tegumentar (cutânea e mucosa) e visceral (fora dos grupos de risco); também intralesional na forma cutânea localizada. Dispensação SUS com notificação.",
    apres: [{ rotulo: "ampola 1,5 g/5 mL (405 mg de Sb5+ por ampola = 81 mg Sb5+/mL)", mgPorMl: 81 }],
    adulto: "Cutânea: 10–20 mg Sb5+/kg/dia (MS: 15) IM ou IV por 20 dias · mucosa: 20 mg Sb5+/kg/dia por 30 dias · visceral: 20 mg Sb5+/kg/dia por 20–40 dias (máx 3 ampolas/dia)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação (usar anfotericina B lipossomal)." },
    alergia: [], contra: ["Cardiotoxicidade (QT longo, arritmias): ECG semanal; > 50 anos e cardiopatas — preferir outras opções", "Pancreatite, hepatotoxicidade, nefrotoxicidade", "Insuficiência renal, hepática ou cardíaca"],
    prescrever: [
      { contexto: "Leishmaniose cutânea — adulto (MS)", texto: "USO INTRAMUSCULAR\n1. Antimoniato de meglumina 1,5 g/5 mL (81 mg Sb5+/mL) --- 60 ampolas\n   Aplicar ___ mL (15 mg Sb5+/kg/dia; máximo 3 ampolas/dia) IM ou IV lento, 1 vez ao dia, por 20 dias.\n   (ECG, amilase, TGO/TGP e creatinina basais e semanais. Notificar no SINAN.)" },
      { contexto: "Intralesional (lesão cutânea única/localizada)", texto: "Antimoniato de meglumina: infiltrar a lesão (cerca de 5 mL por sessão) conforme técnica e esquema do Manual de LTA do MS." }
    ] },
  { id: "miltefosina", nomes: ["Miltefosina", "Impavido"], classe: "antiparasitarios", receita: "simples", tags: [],
    usos: "Leishmaniose tegumentar cutânea (incorporada ao SUS), via oral; alternativa ao antimonial.",
    apres: [{ rotulo: "cápsula 50 mg", mgPorComp: 50 }],
    adulto: "2,5 mg/kg/dia VO (máx 150 mg/dia) dividido em 2–3 tomadas com alimento, por 28 dias",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (teratogênica): teste de gravidez antes e contracepção eficaz durante e por meses após (conforme bula/MS)." },
    alergia: [], contra: ["Náuseas, vômitos e diarreia frequentes", "Elevação de creatinina e transaminases", "< 12 anos/< 30 kg conforme protocolo"],
    prescrever: [
      { contexto: "Leishmaniose cutânea — adulto ≥ 45 kg", texto: "USO ORAL\n1. Miltefosina 50 mg ----------------------- 84 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas, com alimento, por 28 dias.\n   (30–44 kg: 1 cápsula de 12/12h. Contracepção obrigatória; creatinina e TGO/TGP.)" }
    ] },
  { id: "pentamidina", nomes: ["Pentamidina", "isetionato de pentamidina"], classe: "antiparasitarios", receita: "hospitalar", tags: ["qt"],
    usos: "Leishmaniose cutânea por L. guyanensis (região Norte), pneumocistose grave em intolerantes a SMX-TMP (alternativa).",
    apres: [{ rotulo: "frasco 300 mg", mgPorComp: 300 }],
    adulto: "Leishmaniose (L. guyanensis): 4 mg/kg/dose IM profundo em 3 doses com intervalo de 72 h (ou conforme manual do MS) · pneumocistose: 4 mg/kg IV 1×/dia",
    gestacao: { nivel: "evitar", texto: "Evitar; usar só sem alternativa." },
    alergia: [], contra: ["Hipoglicemia (e diabetes tardio), hipotensão (fazer deitado)", "QT longo, nefrotoxicidade, pancreatite", "Glicemia antes e após cada aplicação; alimentar-se antes"],
    prescrever: [
      { contexto: "Leishmaniose cutânea (L. guyanensis)", texto: "Isetionato de pentamidina ___ mg (4 mg/kg) IM profundo, paciente deitado e alimentado, a cada 72 h, total de 3 aplicações (conferir esquema no manual de LTA do MS).\n(Glicemia antes e 30 min após; repouso 15 min após.)" },
      { contexto: "Pneumocistose grave (alternativa)", texto: "Pentamidina ___ mg (4 mg/kg) + SG 5% 250 mL IV em 60–90 min, 1 vez ao dia por 21 dias.\n(Glicemia, PA, ECG e creatinina.)" }
    ] }
]);
