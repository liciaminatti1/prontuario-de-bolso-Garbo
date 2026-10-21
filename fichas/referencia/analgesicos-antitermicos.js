// Analgésicos e antitérmicos — tabela de doses
registrarFicha({
  id: "analgesicos-antitermicos",
  especialidade: "referencia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Analgésicos e antitérmicos: doses adulto e criança",
  resumo: "Tabela de consulta de dipirona, paracetamol, ibuprofeno, outros anti-inflamatórios e opioides, com apresentações brasileiras, dose por kg com máximo, vias e principais cuidados.",
  palavrasChave: "analgesico antitermico antipiretico febre dor dipirona metamizol novalgina paracetamol acetaminofeno tylenol ibuprofeno alivium naproxeno diclofenaco cetoprofeno cetorolaco tramadol codeina morfina aine dose pediatrica gotas mg/kg escada analgesica oms",
  critico: {
    tempo: "Dose máxima diária",
    texto: "Paracetamol: máx. 4 g/dia no adulto (3 g se hepatopatia, etilismo ou desnutrição) e 75 mg/kg/dia na criança. Confira a concentração do frasco antes de converter mg em gotas ou mL."
  },
  alarmes: [
    "Suspeita de dengue: não usar AINE (ibuprofeno, diclofenaco, naproxeno) nem AAS — usar dipirona ou paracetamol",
    "Febre em menor de 3 meses: avaliar a criança, não só tratar a febre (ver ficha Febre no lactente)",
    "Dipirona: febre com dor de garganta ou úlceras orais durante o uso (agranulocitose) — suspender e fazer hemograma",
    "AINE em idoso, DRC, insuficiência cardíaca, úlcera péptica, uso de anticoagulante ou gestação após 20 semanas",
    "Codeína e tramadol: não usar em menores de 12 anos nem após amigdalectomia em menores de 18 anos",
    "Dor que não cede com analgesia adequada ou febre > 72 h: reavaliar causa"
  ],
  conduta: [
    "Tratar o desconforto da febre, não o número do termômetro; antitérmico não previne convulsão febril",
    "Escolher 1 antitérmico; alternar dipirona, paracetamol e ibuprofeno não é rotina (risco de erro de dose)",
    "Prescrever em mg e também em gotas ou mL da apresentação escolhida; orientar uso da seringa dosadora",
    "Dor: seguir a escada analgésica da OMS — não opioide → opioide fraco → opioide forte, sempre com analgésico simples associado",
    "AINE: menor dose pelo menor tempo; associar protetor gástrico se idoso, úlcera prévia ou uso de corticoide/anticoagulante",
    "Gestação: paracetamol é a opção mais segura; AINE contraindicado após 20 semanas",
    "Lactação: paracetamol, dipirona e ibuprofeno são compatíveis; evitar codeína e tramadol"
  ],
  tabelas: [
    {
      titulo: "Analgésicos simples e anti-inflamatórios",
      colunas: ["Droga e apresentações", "Adulto", "Criança (dose e máximo)", "Cuidados"],
      linhas: [
        ["Dipirona — comp 500 mg e 1 g; solução oral 50 mg/mL; gotas 500 mg/mL; ampola 500 mg/mL (2 mL)", "500 mg a 1 g VO, IM ou IV de 6/6 h; máx. 4 g/dia", "≥ 3 meses e ≥ 5 kg: 10–25 mg/kg/dose de 6/6 h; máx. 1 g/dose e 4 g/dia. Solução 50 mg/mL = 0,2–0,5 mL/kg/dose", "Gotas: mg por gota varia por fabricante (cerca de 20 gotas/mL) — conferir bula. IV lento (risco de hipotensão). Lactente 3–11 meses: preferir VO. Agranulocitose rara"],
        ["Paracetamol — comp 500 e 750 mg; gotas 200 mg/mL; solução oral 32 mg/mL", "500 mg a 1 g VO de 6/6 h; máx. 4 g/dia (3 g se hepatopatia, etilismo, desnutrição)", "10–15 mg/kg/dose de 6/6 h (pode 4/4 h, sem passar do máximo); máx. 75 mg/kg/dia e 4 g/dia. Gotas 200 mg/mL: cerca de 1 gota/kg/dose (máx. 35 gotas)", "Hepatotóxico na superdosagem. Somar paracetamol de antigripais e associações. Preferido na gestação"],
        ["Ibuprofeno — comp 200, 300, 400 e 600 mg; suspensão oral 50 mg/mL", "200–600 mg VO de 6/6 a 8/8 h; máx. 2,4 g/dia (até 3,2 g/dia sob prescrição, curto prazo)", "≥ 6 meses: 5–10 mg/kg/dose de 6/6 a 8/8 h; máx. 40 mg/kg/dia e 2,4 g/dia. Suspensão 50 mg/mL = 0,1–0,2 mL/kg/dose", "Evitar se dengue, varicela, desidratação, DRC, úlcera, asma induzida por AINE. Tomar com alimento"],
        ["Naproxeno — comp 250 e 500 mg", "250–500 mg VO de 12/12 h; máx. 1.000 mg/dia (1.250 mg no 1º dia)", "> 2 anos: 5 mg/kg/dose de 12/12 h; máx. 1 g/dia", "Mesmos cuidados do ibuprofeno; útil em dismenorreia e dor musculoesquelética"],
        ["Diclofenaco — comp 50 mg; ampola 75 mg/3 mL", "50 mg VO de 8/8 h (máx. 150 mg/dia) · 75 mg IM profundo 1×/dia por até 2 dias", "Não recomendado de rotina: preferir ibuprofeno", "Maior risco cardiovascular entre os AINE; IM pode causar necrose/abscesso no local"],
        ["Cetoprofeno — ampola 100 mg (IV/IM); comp 100–150 mg", "100 mg IV diluído em 100 mL de SF 0,9% em 20 min, ou IM, de 12/12 h; máx. 200 mg/dia", "Não recomendado < 15 anos", "Uso curto (até 3–5 dias). Mesmos cuidados dos AINE"],
        ["Cetorolaco — comp sublingual 10 mg", "10 mg SL de 6/6 a 8/8 h; máx. 40 mg/dia, por até 5 dias", "Não recomendado < 16 anos", "Potente; alto risco gastrointestinal e renal"],
        ["AAS — comp 100 e 500 mg", "Analgésico: 500 mg a 1 g VO de 4/4 a 6/6 h; máx. 4 g/dia", "Evitar < 16 anos (síndrome de Reye), salvo indicação específica (ex.: Kawasaki)", "Contraindicado na dengue. Antiagregação prolonga sangramento por 7 dias"]
      ],
      nota: "RENAME: dipirona, paracetamol, ibuprofeno e AAS estão na atenção básica. Naproxeno, cetoprofeno e cetorolaco variam conforme a relação municipal."
    },
    {
      titulo: "Opioides",
      colunas: ["Droga e apresentações", "Adulto", "Criança (dose e máximo)", "Cuidados"],
      linhas: [
        ["Codeína — comp 30 mg; solução oral 3 mg/mL; associação paracetamol 500 mg + codeína 30 mg", "30–60 mg VO de 4/4 a 6/6 h; máx. 240 mg/dia de codeína", "Contraindicada < 12 anos; 12–18 anos só se não houver alternativa, nunca após amigdalectomia", "Metabolizador ultrarrápido (CYP2D6): risco de depressão respiratória. Evitar na lactação. Constipação"],
        ["Tramadol — cápsula 50 mg; gotas 100 mg/mL; ampola 50 mg/mL (2 mL)", "50–100 mg VO ou IV lento de 6/6 h; máx. 400 mg/dia (300 mg/dia em > 75 anos)", "Contraindicado < 12 anos (ANVISA); 12–18 anos com cautela, 1–2 mg/kg/dose (máx. 100 mg/dose)", "Náusea frequente; reduz limiar convulsivo; síndrome serotoninérgica com ISRS. Ajustar se ClCr < 30"],
        ["Morfina — comp 10 e 30 mg; solução oral 10 mg/mL; ampola 10 mg/mL", "VO: 5–10 mg de 4/4 h (virgem de opioide) · IV: 2–4 mg lento, repetir a cada 5–15 min até alívio", "VO: 0,2–0,4 mg/kg de 4/4 h (dose inicial máx. 5 mg) · IV: 0,05–0,1 mg/kg (máx. 4 mg/dose) de 2/2 a 4/4 h", "Prescrever laxante junto. Naloxona disponível. Reduzir dose em idoso, DRC e hepatopatia"]
      ],
      nota: "Opioide em criança: monitorar sedação e frequência respiratória. Antídoto: naloxona 0,1 mg/kg (máx. 2 mg) — ver ficha Antídotos."
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO — FEBRE OU DOR LEVE A MODERADA\nUSO ORAL\n1. Dipirona 500 mg ------------------------------------ 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n   OU\n1. Paracetamol 750 mg ---------------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se dor ou febre (máximo 4 comprimidos por dia).\n\nADULTO — DOR MUSCULOESQUELÉTICA/INFLAMATÓRIA (sem contraindicação a AINE)\n2. Ibuprofeno 600 mg ----------------------------------- 15 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.\n\nADULTO — DOR MODERADA SEM RESPOSTA AO ANALGÉSICO SIMPLES\n3. Paracetamol 500 mg + codeína 30 mg ----------------- 12 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor forte, por até 3 dias. Pode causar sono e prisão de ventre.\n   (Receita de controle especial em 2 vias.)\n\nCRIANÇA (peso: ___ kg) — FEBRE OU DOR\n1. Dipirona solução oral 50 mg/mL --------------------- 1 frasco\n   Dar ___ mL (0,3 mL/kg = 15 mg/kg) de 6 em 6 horas se febre ou dor. Máximo 4 vezes ao dia.\n   OU\n1. Paracetamol gotas 200 mg/mL ------------------------ 1 frasco\n   Dar 1 gota por kg (máximo 35 gotas) de 6 em 6 horas se febre ou dor.\n   OU (≥ 6 meses, sem suspeita de dengue)\n1. Ibuprofeno suspensão oral 50 mg/mL ----------------- 1 frasco\n   Dar ___ mL (0,2 mL/kg = 10 mg/kg, máximo 8 mL) de 8 em 8 horas se febre ou dor, após alimentação."
  },
  orientacoesRetorno: [
    "Dar o antitérmico se a criança estiver desconfortável; não acordar para medicar; oferecer líquidos e roupas leves",
    "Usar sempre a seringa ou o conta-gotas do próprio frasco; nunca colher de cozinha",
    "Não somar remédios com o mesmo princípio ativo (antigripais costumam ter paracetamol ou dipirona)",
    "Voltar imediatamente se febre em bebê menor de 3 meses, manchas roxas na pele, sonolência excessiva, dificuldade para respirar, vômitos repetidos ou sinais de desidratação",
    "Retornar se a febre durar mais de 3 dias ou a dor não melhorar com o remédio no tempo combinado"
  ],
  encaminhar: [
    "Dor crônica de difícil controle: equipe de dor ou cuidados paliativos",
    "Uso prolongado de opioide: plano de seguimento com reavaliação periódica"
  ],
  fontes: [
    "Ministério da Saúde — RENAME 2024",
    "Sociedade Brasileira de Pediatria — Departamento de Pediatria Ambulatorial: manejo da febre aguda (documento científico vigente)",
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024): contraindicação de AINE e AAS",
    "ANVISA — Alerta sobre codeína e tramadol em menores de 12 anos (2018) e bulas de dipirona, paracetamol, ibuprofeno, tramadol e morfina",
    "OMS — Diretrizes para manejo farmacológico da dor por câncer em adultos e adolescentes (2018) e da dor persistente em crianças (2020)",
    "FDA — Drug Safety Communication: AINE após 20 semanas de gestação (2020)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});
