/* Base de medicamentos para a calculadora de doses e os alertas de segurança.
   Cada item:
   - nomes: nome principal + sinônimos (usados para reconhecer o remédio no texto da ficha)
   - tags: classes usadas nas regras de interação e alergia
   - ped: dose por peso { dose, faixa, porDia, divisoes, intervalo, maxDose (mg), maxDia (mg), unidade, idadeMin }
   - porPeso: doses fixas por faixa de peso/idade (quando não é mg/kg)
   - apres: apresentações { rotulo, mgPorMl?, mgPorGota?, mgPorComp? } para converter mg em mL/gotas/comprimidos
   - adulto: dose habitual do adulto (texto)
   - renal: [{ abaixo: ClCr, texto }] em ordem crescente de ClCr
   - gestacao: { nivel: "compativel" | "cautela" | "evitar" | "contraindicado", texto }
   - alergia: classes de alergia que contraindicam
   - contra: contraindicações e cuidados principais
   CONFERIR SEMPRE com a bula e o protocolo local. Valores de referência, não substituem julgamento clínico. */

const MEDICAMENTOS = [
  /* ---------- analgésicos / antitérmicos / AINE ---------- */
  { id: "dipirona", nomes: ["Dipirona", "metamizol"], tags: ["analgesico"],
    ped: { dose: 15, faixa: "10–15 mg/kg/dose", intervalo: "6/6h", maxDose: 1000, maxDia: 4000, idadeMin: "≥ 3 meses ou ≥ 5 kg" },
    apres: [{ rotulo: "gotas 500 mg/mL (25 mg/gota)", mgPorMl: 500, mgPorGota: 25 }, { rotulo: "solução oral 50 mg/mL", mgPorMl: 50 }, { rotulo: "injetável 500 mg/mL", mgPorMl: 500 }],
    adulto: "500–1.000 mg VO/IV até 6/6h (máx 4 g/dia)",
    renal: [{ abaixo: 30, texto: "Evitar doses altas repetidas; preferir intervalos maiores." }],
    gestacao: { nivel: "evitar", texto: "Evitar no 1º trimestre e nas últimas 6 semanas (bula). Paracetamol é a 1ª escolha." },
    alergia: ["dipirona"], contra: ["Discrasia sanguínea / agranulocitose prévia", "Deficiência de G6PD, porfiria", "IV rápida: hipotensão"] },
  { id: "paracetamol", nomes: ["Paracetamol", "acetaminofeno"], tags: ["analgesico"],
    ped: { dose: 15, faixa: "10–15 mg/kg/dose", intervalo: "4–6h", maxDose: 1000, maxDia: 4000, maxDiaKg: 75 },
    apres: [{ rotulo: "gotas 200 mg/mL", mgPorMl: 200 }, { rotulo: "suspensão 32 mg/mL", mgPorMl: 32 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }, { rotulo: "comprimido 750 mg", mgPorComp: 750 }],
    adulto: "500–1.000 mg VO 6/6h (máx 4 g/dia; 2–3 g/dia em hepatopatas/etilistas)",
    renal: [{ abaixo: 10, texto: "Intervalo mínimo de 8 h." }],
    gestacao: { nivel: "compativel", texto: "Analgésico/antitérmico de 1ª escolha na gestação, na menor dose eficaz." },
    alergia: [], contra: ["Hepatopatia grave", "Somar todas as fontes de paracetamol (associações)"] },
  { id: "ibuprofeno", nomes: ["Ibuprofeno"], tags: ["aine"],
    ped: { dose: 10, faixa: "5–10 mg/kg/dose", intervalo: "6–8h", maxDose: 400, maxDia: 2400, maxDiaKg: 40, idadeMin: "≥ 6 meses" },
    apres: [{ rotulo: "gotas 50 mg/mL", mgPorMl: 50 }, { rotulo: "suspensão 100 mg/5 mL (20 mg/mL)", mgPorMl: 20 }, { rotulo: "comprimido 400 mg", mgPorComp: 400 }, { rotulo: "comprimido 600 mg", mgPorComp: 600 }],
    adulto: "400–600 mg VO 6–8h (máx 2,4 g/dia ambulatorial)",
    renal: [{ abaixo: 30, texto: "Evitar (risco de lesão renal aguda)." }, { abaixo: 60, texto: "Cautela: menor dose e menor tempo; monitorar creatinina e K." }],
    gestacao: { nivel: "evitar", texto: "Evitar; contraindicado a partir de 20 semanas (oligoâmnio, fechamento do ducto arterioso)." },
    alergia: ["aine"], contra: ["Úlcera/sangramento digestivo", "Desidratação, dengue", "IC descompensada", "Asma exacerbada por AINE"] },
  { id: "diclofenaco", nomes: ["Diclofenaco"], tags: ["aine"],
    adulto: "50 mg VO 8/8h ou 75 mg IM (curto prazo)",
    renal: [{ abaixo: 30, texto: "Evitar." }, { abaixo: 60, texto: "Cautela; monitorar função renal." }],
    gestacao: { nivel: "evitar", texto: "Evitar; contraindicado a partir de 20 semanas." },
    alergia: ["aine"], contra: ["Risco cardiovascular elevado", "Úlcera, sangramento, dengue"] },
  { id: "cetoprofeno", nomes: ["Cetoprofeno"], tags: ["aine"],
    adulto: "100 mg IV/IM até 12/12h ou 50 mg VO 8/8h (curto prazo)",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "evitar", texto: "Evitar; contraindicado a partir de 20 semanas." },
    alergia: ["aine"], contra: ["Úlcera, sangramento, dengue"] },
  { id: "naproxeno", nomes: ["Naproxeno"], tags: ["aine"],
    adulto: "250–500 mg VO 12/12h",
    renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "evitar", texto: "Evitar; contraindicado a partir de 20 semanas." },
    alergia: ["aine"], contra: ["Úlcera, sangramento"] },
  { id: "aas", nomes: ["AAS", "ácido acetilsalicílico", "acido acetilsalicilico", "aspirina"], tags: ["aine", "antiagregante"],
    adulto: "Antiagregante: 100 mg/dia (ataque 162–300 mg na SCA). Analgésico: 500 mg 4–6h",
    renal: [{ abaixo: 30, texto: "Doses analgésicas: evitar. Dose antiagregante pode ser mantida." }],
    gestacao: { nivel: "cautela", texto: "Dose baixa (100–150 mg/dia) é indicada na prevenção de pré-eclâmpsia. Doses analgésicas: evitar, contraindicadas no 3º trimestre." },
    alergia: ["aine"], contra: ["< 16 anos com infecção viral (síndrome de Reye)", "Dengue", "Sangramento ativo"] },

  /* ---------- antibióticos ---------- */
  { id: "amoxicilina", nomes: ["Amoxicilina"], tags: ["betalactamico", "penicilina"],
    ped: { dose: 50, faixa: "50 mg/kg/dia (alta dose 80–90)", porDia: true, divisoes: 3, intervalo: "8/8h (ou 12/12h)", maxDose: 1000, maxDia: 3000 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "suspensão 400 mg/5 mL (80 mg/mL)", mgPorMl: 80 }, { rotulo: "cápsula 500 mg", mgPorComp: 500 }],
    adulto: "500 mg 8/8h ou 875 mg 12/12h",
    renal: [{ abaixo: 10, texto: "250–500 mg a cada 24 h." }, { abaixo: 30, texto: "250–500 mg 12/12h; não usar 875 mg." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["penicilinas"], contra: ["Mononucleose (exantema)"] },
  { id: "amoxicilina-clavulanato", nomes: ["Amoxicilina-clavulanato", "amoxicilina + clavulanato", "amoxicilina/clavulanato", "amoxicilina com clavulanato", "clavulanato"], tags: ["betalactamico", "penicilina"],
    ped: { dose: 45, faixa: "45 mg/kg/dia de amoxicilina (alta dose 90)", porDia: true, divisoes: 2, intervalo: "12/12h", maxDose: 875, maxDia: 1750 },
    apres: [{ rotulo: "suspensão 400/57 mg por 5 mL (80 mg/mL de amoxicilina)", mgPorMl: 80 }, { rotulo: "suspensão 250/62,5 mg por 5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "comprimido 875/125 mg", mgPorComp: 875 }],
    adulto: "875/125 mg 12/12h ou 500/125 mg 8/8h",
    renal: [{ abaixo: 10, texto: "500/125 mg a cada 24 h." }, { abaixo: 30, texto: "500/125 mg 12/12h; não usar 875/125 mg." }],
    gestacao: { nivel: "compativel", texto: "Compatível (evitar se ruptura prematura de membranas pré-termo)." },
    alergia: ["penicilinas"], contra: ["Icterícia colestática prévia com o fármaco"] },
  { id: "cefalexina", nomes: ["Cefalexina"], tags: ["betalactamico", "cefalosporina", "cadeia-aminopenicilina"],
    ped: { dose: 50, faixa: "25–50 mg/kg/dia (até 100 em infecção grave)", porDia: true, divisoes: 4, intervalo: "6/6h", maxDose: 1000, maxDia: 4000 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "cápsula 500 mg", mgPorComp: 500 }],
    adulto: "500 mg 6/6h",
    renal: [{ abaixo: 15, texto: "250 mg a cada 24–48 h." }, { abaixo: 30, texto: "250 mg a cada 8–12 h." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: [] },
  { id: "ceftriaxona", nomes: ["Ceftriaxona"], tags: ["betalactamico", "cefalosporina"],
    ped: { dose: 50, faixa: "50–100 mg/kg/dia (meningite 100 ÷ 12/12h)", porDia: true, divisoes: 1, intervalo: "24/24h", maxDose: 2000, maxDia: 4000 },
    apres: [{ rotulo: "frasco 1 g (reconstituir)", mgPorComp: 1000 }],
    adulto: "1–2 g IV/IM 24/24h (meningite 2 g 12/12h)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["cefalosporinas"], contra: ["Neonato com hiperbilirrubinemia", "< 28 dias: não infundir com soluções com cálcio"] },
  { id: "azitromicina", nomes: ["Azitromicina"], tags: ["macrolideo", "qt"],
    ped: { dose: 10, faixa: "10 mg/kg/dia por 3 dias (ou 10 mg/kg no D1 e 5 mg/kg D2–D5; faringite 12 mg/kg por 5 dias)", intervalo: "24/24h", maxDose: 500 },
    apres: [{ rotulo: "suspensão 200 mg/5 mL (40 mg/mL)", mgPorMl: 40 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "500 mg/dia por 3 dias (ou 500 mg D1 + 250 mg D2–D5)",
    renal: [{ abaixo: 10, texto: "Cautela." }],
    gestacao: { nivel: "compativel", texto: "Compatível; macrolídeo preferido na gestação." },
    alergia: ["macrolideos"], contra: ["QT longo"] },
  { id: "claritromicina", nomes: ["Claritromicina"], tags: ["macrolideo", "qt", "cyp3a4-inib"],
    ped: { dose: 15, faixa: "15 mg/kg/dia", porDia: true, divisoes: 2, intervalo: "12/12h", maxDose: 500 },
    apres: [{ rotulo: "suspensão 250 mg/5 mL (50 mg/mL)", mgPorMl: 50 }, { rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "500 mg 12/12h",
    renal: [{ abaixo: 30, texto: "Reduzir a dose em 50%." }],
    gestacao: { nivel: "evitar", texto: "Evitar; preferir azitromicina." },
    alergia: ["macrolideos"], contra: ["QT longo", "Uso de sinvastatina, colchicina (ver interações)"] },
  { id: "smx-tmp", nomes: ["Sulfametoxazol-trimetoprima", "sulfametoxazol + trimetoprima", "SMX-TMP", "cotrimoxazol", "sulfametoxazol"], tags: ["sulfonamida", "hipercalemia"],
    ped: { dose: 8, faixa: "8–12 mg/kg/dia de trimetoprima", porDia: true, divisoes: 2, intervalo: "12/12h", maxDose: 160, unidade: "mg de TMP" },
    apres: [{ rotulo: "suspensão 200/40 mg por 5 mL (8 mg/mL de TMP)", mgPorMl: 8 }, { rotulo: "comprimido 800/160 mg (160 mg TMP)", mgPorComp: 160 }],
    adulto: "800/160 mg 12/12h",
    renal: [{ abaixo: 15, texto: "Evitar." }, { abaixo: 30, texto: "Reduzir a dose em 50%." }],
    gestacao: { nivel: "evitar", texto: "Evitar no 1º trimestre (antifolato) e próximo ao termo (kernicterus)." },
    alergia: ["sulfonamidas"], contra: ["< 2 meses", "Deficiência de G6PD", "Hipercalemia"] },
  { id: "ciprofloxacino", nomes: ["Ciprofloxacino", "ciprofloxacina"], tags: ["quinolona", "qt"],
    ped: { dose: 15, faixa: "10–20 mg/kg/dose (uso pediátrico restrito)", intervalo: "12/12h", maxDose: 750 },
    apres: [{ rotulo: "comprimido 500 mg", mgPorComp: 500 }],
    adulto: "500 mg 12/12h (IV 400 mg 12/12h)",
    renal: [{ abaixo: 30, texto: "250–500 mg a cada 18–24 h." }, { abaixo: 50, texto: "250–500 mg 12/12h." }],
    gestacao: { nivel: "evitar", texto: "Evitar na gestação." },
    alergia: ["quinolonas"], contra: ["Tendinopatia (idosos, corticoide)", "Miastenia gravis", "QT longo"] },
  { id: "levofloxacino", nomes: ["Levofloxacino", "levofloxacina"], tags: ["quinolona", "qt"],
    adulto: "500–750 mg 24/24h",
    renal: [{ abaixo: 20, texto: "750 mg e depois 500 mg a cada 48 h." }, { abaixo: 50, texto: "750 mg a cada 48 h (ou 500 mg e depois 250 mg/dia)." }],
    gestacao: { nivel: "evitar", texto: "Evitar na gestação." },
    alergia: ["quinolonas"], contra: ["Tendinopatia", "Miastenia gravis", "QT longo"] },
  { id: "nitrofurantoina", nomes: ["Nitrofurantoína", "nitrofurantoina"], tags: [],
    ped: { dose: 6, faixa: "5–7 mg/kg/dia", porDia: true, divisoes: 4, intervalo: "6/6h", maxDia: 400, idadeMin: "> 1 mês" },
    apres: [{ rotulo: "cápsula 100 mg", mgPorComp: 100 }],
    adulto: "100 mg 6/6h (macrocristais) por 5 dias",
    renal: [{ abaixo: 30, texto: "Contraindicada (ineficaz e tóxica)." }, { abaixo: 45, texto: "Cautela; evitar uso prolongado." }],
    gestacao: { nivel: "cautela", texto: "Evitar no termo (≥ 38 semanas) e, se houver alternativa, no 1º trimestre." },
    alergia: [], contra: ["Deficiência de G6PD", "Pielonefrite (não atinge nível tecidual)"] },
  { id: "fosfomicina", nomes: ["Fosfomicina"], tags: [],
    adulto: "3 g VO dose única (diluir em água)",
    renal: [{ abaixo: 10, texto: "Evitar." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: [] },
  { id: "metronidazol", nomes: ["Metronidazol", "benzoilmetronidazol"], tags: ["dissulfiram"],
    ped: { dose: 30, faixa: "15–30 mg/kg/dia (amebíase 35–50)", porDia: true, divisoes: 3, intervalo: "8/8h", maxDose: 500, maxDia: 2000 },
    apres: [{ rotulo: "suspensão 40 mg/mL (benzoilmetronidazol)", mgPorMl: 40 }, { rotulo: "comprimido 250 mg", mgPorComp: 250 }, { rotulo: "comprimido 400 mg", mgPorComp: 400 }],
    adulto: "500 mg 12/12h (vaginose) ou 2 g dose única (tricomoníase); IV 500 mg 8/8h",
    renal: [{ abaixo: 10, texto: "Cautela (acúmulo de metabólitos)." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usado; se possível evitar no 1º trimestre e o esquema de 2 g dose única." },
    alergia: [], contra: ["Álcool até 72 h após a última dose (efeito dissulfiram)"] },
  { id: "penicilina-benzatina", nomes: ["Penicilina G benzatina", "penicilina benzatina", "benzetacil"], tags: ["betalactamico", "penicilina"],
    porPeso: [{ maxKg: 27, texto: "600.000 UI IM dose única (faringite)" }, { maxKg: 999, texto: "1.200.000 UI IM dose única (faringite). Sífilis: 2.400.000 UI por dose" }],
    adulto: "1.200.000 UI IM (faringite) · sífilis recente 2.400.000 UI dose única · tardia 2.400.000 UI semanal × 3",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível. Na sífilis gestacional é o único tratamento eficaz para o feto: dessensibilizar se alergia." },
    alergia: ["penicilinas"], contra: ["Uso exclusivamente IM profundo"] },
  { id: "doxiciclina", nomes: ["Doxiciclina"], tags: ["tetraciclina", "quelante"],
    adulto: "100 mg 12/12h",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada (alteração dentária e óssea fetal)." },
    alergia: [], contra: ["< 8 anos (exceto curso curto em riquetsioses)", "Tomar com água, em pé"] },

  /* ---------- antivirais / antifúngicos / antiparasitários ---------- */
  { id: "aciclovir", nomes: ["Aciclovir"], tags: [],
    ped: { dose: 20, faixa: "20 mg/kg/dose VO 4×/dia (varicela); IV 10 mg/kg 8/8h", intervalo: "6/6h (4×/dia)", maxDose: 800 },
    apres: [{ rotulo: "suspensão 200 mg/5 mL (40 mg/mL)", mgPorMl: 40 }, { rotulo: "comprimido 200 mg", mgPorComp: 200 }, { rotulo: "comprimido 400 mg", mgPorComp: 400 }],
    adulto: "Herpes: 400 mg 8/8h · zóster: 800 mg 5×/dia por 7 dias",
    renal: [{ abaixo: 10, texto: "Zóster: 800 mg 12/12h. IV: 50% da dose a cada 24 h." }, { abaixo: 25, texto: "Zóster: 800 mg 8/8h. IV: dose a cada 24 h." }, { abaixo: 50, texto: "IV: dose a cada 12 h. Hidratar bem." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Hidratar (nefrotoxicidade por cristais na forma IV)"] },
  { id: "oseltamivir", nomes: ["Oseltamivir"], tags: [],
    porPeso: [{ maxKg: 15, texto: "≥ 1 ano: 30 mg 12/12h por 5 dias (< 1 ano: 3 mg/kg 12/12h)" }, { maxKg: 23, texto: "45 mg 12/12h por 5 dias" }, { maxKg: 40, texto: "60 mg 12/12h por 5 dias" }, { maxKg: 999, texto: "75 mg 12/12h por 5 dias" }],
    adulto: "75 mg 12/12h por 5 dias",
    renal: [{ abaixo: 10, texto: "Não recomendado (exceto em diálise, conforme protocolo)." }, { abaixo: 30, texto: "30 mg 1×/dia." }, { abaixo: 60, texto: "30 mg 12/12h." }],
    gestacao: { nivel: "compativel", texto: "Indicado na gestação e no puerpério (grupo de risco)." },
    alergia: [], contra: [] },
  { id: "fluconazol", nomes: ["Fluconazol"], tags: ["azol", "cyp3a4-inib", "qt"],
    ped: { dose: 6, faixa: "6 mg/kg no 1º dia e depois 3 mg/kg/dia", intervalo: "24/24h", maxDose: 400 },
    apres: [{ rotulo: "cápsula 150 mg", mgPorComp: 150 }],
    adulto: "150 mg dose única (candidíase vulvovaginal)",
    renal: [{ abaixo: 50, texto: "Doses múltiplas: 50% da dose após a de ataque. Dose única: sem ajuste." }],
    gestacao: { nivel: "evitar", texto: "Evitar (doses altas e prolongadas são teratogênicas). Na candidíase vaginal usar tópico." },
    alergia: [], contra: ["QT longo"] },
  { id: "ivermectina", nomes: ["Ivermectina"], tags: [],
    ped: { dose: 0.2, faixa: "200 mcg/kg (0,2 mg/kg) dose única, repetir em 7–14 dias conforme indicação", intervalo: "dose única", idadeMin: "≥ 15 kg" },
    apres: [{ rotulo: "comprimido 6 mg", mgPorComp: 6 }],
    adulto: "200 mcg/kg dose única",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação; evitar na lactação." },
    alergia: [], contra: ["< 15 kg"] },
  { id: "albendazol", nomes: ["Albendazol"], tags: [],
    porPeso: [{ maxKg: 999, texto: "≥ 2 anos: 400 mg dose única (1–2 anos: 200 mg). Estrongiloidíase/teníase: 400 mg/dia por 3 dias" }],
    adulto: "400 mg dose única",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Contraindicado no 1º trimestre; evitar na gestação." },
    alergia: [], contra: [] },

  /* ---------- corticoides / respiratório ---------- */
  { id: "prednisolona", nomes: ["Prednisolona"], tags: ["corticoide"],
    ped: { dose: 1, faixa: "1–2 mg/kg/dia", intervalo: "24/24h", maxDose: 40 },
    apres: [{ rotulo: "solução oral 3 mg/mL", mgPorMl: 3 }, { rotulo: "solução oral 1 mg/mL", mgPorMl: 1 }],
    adulto: "40–50 mg/dia",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível quando indicada (pouca passagem placentária)." },
    alergia: [], contra: ["Hiperglicemia, infecção não tratada"] },
  { id: "prednisona", nomes: ["Prednisona"], tags: ["corticoide"],
    adulto: "40–50 mg/dia (asma, DPOC) por 5 dias",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível quando indicada." },
    alergia: [], contra: ["Hiperglicemia, infecção não tratada"] },
  { id: "dexametasona", nomes: ["Dexametasona"], tags: ["corticoide"],
    ped: { dose: 0.15, faixa: "0,15–0,6 mg/kg dose única (crupe)", intervalo: "dose única", maxDose: 10 },
    apres: [{ rotulo: "injetável 4 mg/mL", mgPorMl: 4 }, { rotulo: "elixir 0,1 mg/mL", mgPorMl: 0.1 }],
    adulto: "Meningite: 10 mg IV 6/6h por 4 dias · enxaqueca: 10 mg IV",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Atravessa a placenta; usar quando indicada (ex.: maturação pulmonar fetal)." },
    alergia: [], contra: ["Hiperglicemia"] },
  { id: "salbutamol", nomes: ["Salbutamol"], tags: ["beta2"],
    ped: { dose: 0.15, faixa: "Nebulização 0,15 mg/kg (mín 2,5 mg, máx 5 mg). Spray 100 mcg: 2–10 jatos com espaçador", intervalo: "20/20 min na 1ª hora", maxDose: 5, minDose: 2.5 },
    apres: [{ rotulo: "solução para nebulização 5 mg/mL (0,25 mg/gota)", mgPorMl: 5, mgPorGota: 0.25 }],
    adulto: "Spray 100 mcg: 4–10 jatos com espaçador 20/20 min na 1ª hora",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; manter o controle da asma na gestação." },
    alergia: [], contra: ["Taquiarritmia", "Hipocalemia com doses repetidas"] },

  /* ---------- antieméticos / anti-histamínicos ---------- */
  { id: "ondansetrona", nomes: ["Ondansetrona"], tags: ["qt", "serotoninergico"],
    ped: { dose: 0.15, faixa: "0,15 mg/kg/dose", intervalo: "8/8h", maxDose: 8, idadeMin: "≥ 6 meses" },
    apres: [{ rotulo: "injetável 2 mg/mL", mgPorMl: 2 }, { rotulo: "comprimido orodispersível 4 mg", mgPorComp: 4 }],
    adulto: "4–8 mg VO/IV 8/8h",
    renal: [],
    gestacao: { nivel: "cautela", texto: "2ª linha no 1º trimestre (possível pequeno aumento de fenda oral); compatível depois." },
    alergia: [], contra: ["QT longo"] },
  { id: "metoclopramida", nomes: ["Metoclopramida"], tags: ["antidopaminergico"],
    ped: { dose: 0.15, faixa: "0,1–0,15 mg/kg/dose", intervalo: "8/8h", maxDose: 10, idadeMin: "≥ 1 ano (contraindicada < 1 ano)" },
    apres: [{ rotulo: "gotas 4 mg/mL", mgPorMl: 4 }, { rotulo: "solução oral 1 mg/mL", mgPorMl: 1 }, { rotulo: "injetável 5 mg/mL", mgPorMl: 5 }],
    adulto: "10 mg VO/IV até 8/8h (máx 5 dias)",
    renal: [{ abaixo: 40, texto: "Reduzir a dose em 50%." }],
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["< 1 ano", "Parkinson, feocromocitoma", "Obstrução intestinal"] },
  { id: "prometazina", nomes: ["Prometazina"], tags: ["sedativo", "qt"],
    ped: { dose: 0.25, faixa: "0,25–0,5 mg/kg/dose", intervalo: "6–8h", maxDose: 25, idadeMin: "≥ 2 anos (contraindicada < 2 anos)" },
    apres: [{ rotulo: "injetável 25 mg/mL", mgPorMl: 25 }, { rotulo: "comprimido 25 mg", mgPorComp: 25 }],
    adulto: "25 mg VO/IM até 8/8h",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser usada; evitar perto do parto (depressão respiratória neonatal)." },
    alergia: [], contra: ["< 2 anos (depressão respiratória)", "Não usar IV (lesão tecidual)"] },
  { id: "dexclorfeniramina", nomes: ["Dexclorfeniramina"], tags: ["sedativo", "anticolinergico"],
    porIdade: [{ maxAnos: 2, texto: "Contraindicada < 2 anos" }, { maxAnos: 6, texto: "0,5 mg (1,25 mL da solução 2 mg/5 mL) 8/8h; máx 3 mg/dia" }, { maxAnos: 12, texto: "1 mg (2,5 mL) 8/8h; máx 6 mg/dia" }, { maxAnos: 200, texto: "2 mg 8/8h; máx 12 mg/dia" }],
    adulto: "2 mg 6–8h (máx 12 mg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Preferir loratadina ou cetirizina." },
    alergia: [], contra: ["< 2 anos", "Glaucoma, retenção urinária", "Idosos (sedação, quedas)"] },
  { id: "loratadina", nomes: ["Loratadina"], tags: [],
    porPeso: [{ maxKg: 30, texto: "2–12 anos ≤ 30 kg: 5 mg (5 mL do xarope 1 mg/mL) 1×/dia" }, { maxKg: 999, texto: "> 30 kg: 10 mg 1×/dia" }],
    adulto: "10 mg 1×/dia",
    renal: [{ abaixo: 30, texto: "10 mg em dias alternados." }],
    gestacao: { nivel: "compativel", texto: "Compatível (anti-histamínico preferido)." },
    alergia: [], contra: [] },

  /* ---------- anticoagulantes / cardiovascular ---------- */
  { id: "enoxaparina", nomes: ["Enoxaparina"], tags: ["anticoagulante"],
    ped: { dose: 1, faixa: "Tratamento 1 mg/kg 12/12h · profilaxia adulto 40 mg/dia", intervalo: "12/12h", unidade: "mg" },
    apres: [{ rotulo: "seringa 100 mg/mL (20, 40, 60, 80, 100 mg)", mgPorMl: 100 }],
    adulto: "Tratamento: 1 mg/kg SC 12/12h · profilaxia: 40 mg SC 1×/dia",
    renal: [{ abaixo: 30, texto: "Tratamento: 1 mg/kg 1×/dia. Profilaxia: 20–30 mg 1×/dia. Considerar heparina não fracionada." }],
    gestacao: { nivel: "compativel", texto: "Anticoagulante de escolha na gestação." },
    alergia: [], contra: ["Sangramento ativo", "Plaquetopenia induzida por heparina"] },
  { id: "varfarina", nomes: ["Varfarina", "marevan"], tags: ["anticoagulante", "varfarina"],
    adulto: "Dose individual guiada pelo INR (alvo 2–3 na maioria)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Teratogênica (sobretudo 6–12 semanas). Trocar por heparina." },
    alergia: [], contra: ["Muitas interações: conferir INR ao iniciar/suspender antibióticos e outros fármacos"] },
  { id: "rivaroxabana", nomes: ["Rivaroxabana"], tags: ["anticoagulante", "doac"],
    adulto: "FA: 20 mg 1×/dia com alimento · TEV: 15 mg 12/12h por 21 dias, depois 20 mg/dia",
    renal: [{ abaixo: 15, texto: "Evitar." }, { abaixo: 50, texto: "FA: 15 mg 1×/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação e lactação." },
    alergia: [], contra: ["Prótese valvar mecânica", "SAF triplo positivo"] },
  { id: "apixabana", nomes: ["Apixabana"], tags: ["anticoagulante", "doac"],
    adulto: "FA: 5 mg 12/12h (2,5 mg se ≥ 2 de: idade ≥ 80, peso ≤ 60 kg, creatinina ≥ 1,5) · TEV: 10 mg 12/12h por 7 dias, depois 5 mg 12/12h",
    renal: [{ abaixo: 15, texto: "Evitar (dados limitados)." }, { abaixo: 30, texto: "Cautela; ver critérios de dose reduzida." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação e lactação." },
    alergia: [], contra: ["Prótese valvar mecânica"] },
  { id: "clopidogrel", nomes: ["Clopidogrel"], tags: ["antiagregante", "clopidogrel"],
    adulto: "Ataque 300–600 mg, manutenção 75 mg/dia",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados limitados; usar se o benefício justificar." },
    alergia: [], contra: ["Sangramento ativo"] },
  { id: "iecabra", nomes: ["Enalapril", "Captopril", "Losartana", "IECA", "BRA"], tags: ["iecabra", "hipercalemia"],
    adulto: "Enalapril 10–40 mg/dia · losartana 50–100 mg/dia · captopril 25–50 mg",
    renal: [{ abaixo: 30, texto: "Iniciar em dose baixa; monitorar creatinina e K em 1–2 semanas (aceitável elevação de até 30%)." }],
    gestacao: { nivel: "contraindicado", texto: "Contraindicados na gestação (fetotoxicidade no 2º e 3º trimestres)." },
    alergia: [], contra: ["Angioedema prévio (IECA)", "Estenose bilateral de artéria renal", "K > 5,5"] },
  { id: "espironolactona", nomes: ["Espironolactona"], tags: ["hipercalemia", "poupador-k"],
    adulto: "25–50 mg/dia",
    renal: [{ abaixo: 30, texto: "Evitar (hipercalemia)." }],
    gestacao: { nivel: "evitar", texto: "Evitar (efeito antiandrogênico fetal)." },
    alergia: [], contra: ["K > 5,0"] },
  { id: "furosemida", nomes: ["Furosemida"], tags: ["diuretico"],
    adulto: "20–80 mg VO/IV",
    renal: [{ abaixo: 30, texto: "Pode exigir doses maiores para efeito." }],
    gestacao: { nivel: "cautela", texto: "Usar apenas com indicação clara (ex.: edema pulmonar)." },
    alergia: ["sulfonamidas"], contra: ["Hipovolemia, hipocalemia"] },
  { id: "hidroclorotiazida", nomes: ["Hidroclorotiazida", "clortalidona"], tags: ["diuretico"],
    adulto: "12,5–25 mg/dia",
    renal: [{ abaixo: 30, texto: "Pouco eficaz; preferir diurético de alça." }],
    gestacao: { nivel: "cautela", texto: "Não iniciar na gestação; manter só se já em uso e bem indicada." },
    alergia: ["sulfonamidas"], contra: ["Gota, hiponatremia"] },
  { id: "amiodarona", nomes: ["Amiodarona"], tags: ["qt", "cyp-inib-amio"],
    adulto: "Ataque 150–300 mg IV em 30–60 min; PCR 300 mg + 150 mg",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Evitar (disfunção tireoidiana fetal); usar só em arritmia grave." },
    alergia: [], contra: ["Bradicardia, BAV", "Tireoidopatia"] },
  { id: "digoxina", nomes: ["Digoxina", "deslanosídeo"], tags: ["digoxina"],
    adulto: "0,125–0,25 mg/dia",
    renal: [{ abaixo: 30, texto: "Reduzir dose (0,0625–0,125 mg/dia) e monitorar nível sérico." }, { abaixo: 60, texto: "Reduzir dose; monitorar nível e K." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada com indicação." },
    alergia: [], contra: ["Hipocalemia (toxicidade)", "Pré-excitação"] },
  { id: "nitrato", nomes: ["Dinitrato de isossorbida", "isossorbida", "nitroglicerina", "nitrato"], tags: ["nitrato"],
    adulto: "Isossorbida 5 mg SL a cada 5 min (máx 3) · nitroglicerina IV 5–200 mcg/min",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Usar com indicação." },
    alergia: [], contra: ["PAS < 90", "IAM de VD", "Inibidor de PDE-5 recente (sildenafil 24 h, tadalafila 48 h)"] },
  { id: "sildenafil", nomes: ["Sildenafil", "tadalafila"], tags: ["pde5"],
    adulto: "Conforme indicação",
    renal: [], gestacao: { nivel: "cautela", texto: "—" }, alergia: [], contra: ["Uso de nitratos"] },
  { id: "sinvastatina", nomes: ["Sinvastatina"], tags: ["estatina", "estatina-3a4"],
    adulto: "20–40 mg à noite",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Suspender na gestação e lactação." },
    alergia: [], contra: ["Hepatopatia ativa"] },
  { id: "atorvastatina", nomes: ["Atorvastatina"], tags: ["estatina", "estatina-3a4"],
    adulto: "10–80 mg/dia",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Suspender na gestação e lactação." },
    alergia: [], contra: ["Hepatopatia ativa"] },
  { id: "rosuvastatina", nomes: ["Rosuvastatina"], tags: ["estatina"],
    adulto: "5–40 mg/dia",
    renal: [{ abaixo: 30, texto: "Máximo 10 mg/dia." }],
    gestacao: { nivel: "contraindicado", texto: "Suspender na gestação e lactação." },
    alergia: [], contra: [] },

  /* ---------- endócrino ---------- */
  { id: "metformina", nomes: ["Metformina"], tags: [],
    adulto: "500 mg a 2 g/dia com as refeições",
    renal: [{ abaixo: 30, texto: "Contraindicada." }, { abaixo: 45, texto: "Não iniciar; se já em uso, máximo 1 g/dia." }],
    gestacao: { nivel: "cautela", texto: "Pode ser usada no DMG/DM2 (atravessa a placenta); insulina é a 1ª escolha." },
    alergia: [], contra: ["Suspender em contraste iodado com TFG < 30–45, choque, hipóxia, cirurgia"] },
  { id: "sulfonilureia", nomes: ["Glibenclamida", "Gliclazida", "glimepirida"], tags: ["sulfonilureia"],
    adulto: "Gliclazida MR 30–120 mg/dia · glibenclamida 2,5–20 mg/dia",
    renal: [{ abaixo: 30, texto: "Evitar (hipoglicemia prolongada); gliclazida só com muita cautela." }, { abaixo: 60, texto: "Glibenclamida: evitar. Gliclazida: cautela." }],
    gestacao: { nivel: "evitar", texto: "Preferir insulina na gestação." },
    alergia: ["sulfonamidas"], contra: ["Idosos frágeis (hipoglicemia)"] },
  { id: "levotiroxina", nomes: ["Levotiroxina"], tags: ["levotiroxina"],
    adulto: "1,6 mcg/kg/dia (idoso/cardiopata: iniciar 12,5–25 mcg)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; aumentar a dose ~25–30% ao confirmar a gestação." },
    alergia: [], contra: [] },
  { id: "sulfato-ferroso", nomes: ["Sulfato ferroso", "ferro elementar"], tags: ["ferro", "quelante"],
    ped: { dose: 3, faixa: "Tratamento 3–5 mg/kg/dia de ferro elementar · profilaxia 1 mg/kg/dia", intervalo: "1×/dia (ou dividido)", maxDia: 120, unidade: "mg de ferro elementar" },
    apres: [{ rotulo: "gotas 25 mg/mL de ferro elementar (1,25 mg/gota)", mgPorMl: 25, mgPorGota: 1.25 }, { rotulo: "comprimido 40 mg de ferro elementar", mgPorComp: 40 }],
    adulto: "40–120 mg/dia de ferro elementar (dias alternados melhora a absorção)",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Compatível; suplementação indicada no pré-natal." },
    alergia: [], contra: ["Hemocromatose"] },
  { id: "calcio", nomes: ["Carbonato de cálcio", "carbonato de calcio"], tags: ["calcio", "quelante"],
    adulto: "500–1.000 mg/dia de cálcio elementar", renal: [], gestacao: { nivel: "compativel", texto: "Compatível." }, alergia: [], contra: [] },
  { id: "ibp", nomes: ["Omeprazol", "esomeprazol"], tags: ["ibp", "ibp-cyp2c19"],
    adulto: "Omeprazol 20–40 mg/dia em jejum", renal: [], gestacao: { nivel: "compativel", texto: "Compatível." }, alergia: [], contra: [] },
  { id: "pantoprazol", nomes: ["Pantoprazol"], tags: ["ibp"],
    adulto: "40 mg/dia", renal: [], gestacao: { nivel: "compativel", texto: "Compatível." }, alergia: [], contra: [] },

  /* ---------- neuro / psiquiatria / dor ---------- */
  { id: "isrs", nomes: ["Sertralina", "Fluoxetina", "Escitalopram", "Citalopram", "Paroxetina"], tags: ["isrs", "serotoninergico"],
    adulto: "Sertralina 50–200 mg · fluoxetina 20–60 mg · escitalopram 10–20 mg",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Pode ser mantido (sertralina preferida); evitar paroxetina no 1º trimestre." },
    alergia: [], contra: ["Uso de IMAO", "Escitalopram/citalopram: QT longo"] },
  { id: "tramadol", nomes: ["Tramadol"], tags: ["opioide", "serotoninergico", "convulsivante"],
    adulto: "50–100 mg 6/6h (máx 400 mg/dia)",
    renal: [{ abaixo: 30, texto: "Intervalo de 12 h; máximo 200 mg/dia." }],
    gestacao: { nivel: "evitar", texto: "Evitar (abstinência neonatal no uso prolongado)." },
    alergia: ["opioides"], contra: ["< 12 anos", "Epilepsia não controlada", "Uso de IMAO"] },
  { id: "codeina", nomes: ["Codeína", "codeina"], tags: ["opioide"],
    adulto: "30 mg 4–6h", renal: [{ abaixo: 30, texto: "Evitar." }],
    gestacao: { nivel: "evitar", texto: "Evitar no fim da gestação e na lactação." },
    alergia: ["opioides"], contra: ["< 12 anos", "Metabolizadores ultrarrápidos"] },
  { id: "morfina", nomes: ["Morfina"], tags: ["opioide"],
    ped: { dose: 0.1, faixa: "0,05–0,1 mg/kg IV", intervalo: "a cada 2–4 h se necessário", maxDose: 4 },
    apres: [{ rotulo: "injetável 10 mg/mL (diluir)", mgPorMl: 10 }],
    adulto: "2–4 mg IV, repetir a cada 5–15 min se necessário",
    renal: [{ abaixo: 30, texto: "Evitar ou reduzir dose e aumentar intervalo (metabólitos ativos acumulam)." }],
    gestacao: { nivel: "cautela", texto: "Usar com indicação; depressão respiratória neonatal perto do parto." },
    alergia: ["opioides"], contra: ["Depressão respiratória, hipotensão"] },
  { id: "benzodiazepinico", nomes: ["Diazepam", "Midazolam", "Clonazepam", "Lorazepam", "Alprazolam"], tags: ["benzo"],
    ped: { dose: 0.2, faixa: "Convulsão: diazepam 0,2–0,3 mg/kg IV · midazolam 0,2 mg/kg IM/IN", intervalo: "repetir 1× após 5 min", maxDose: 10 },
    apres: [{ rotulo: "diazepam injetável 5 mg/mL", mgPorMl: 5 }, { rotulo: "midazolam injetável 5 mg/mL", mgPorMl: 5 }],
    adulto: "Convulsão: diazepam 10 mg IV ou midazolam 10 mg IM",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Uso agudo (convulsão) é indicado; evitar uso crônico perto do parto." },
    alergia: [], contra: ["Depressão respiratória", "Idosos (quedas, delirium)"] },
  { id: "fenitoina", nomes: ["Fenitoína", "fenitoina"], tags: ["indutor"],
    ped: { dose: 20, faixa: "20 mg/kg IV (ataque)", intervalo: "dose única; infusão ≤ 1 mg/kg/min (máx 50 mg/min)", maxDose: 1500 },
    apres: [{ rotulo: "injetável 50 mg/mL (diluir só em SF 0,9%)", mgPorMl: 50 }],
    adulto: "Ataque 20 mg/kg IV ≤ 50 mg/min; manutenção 100 mg 8/8h",
    renal: [],
    gestacao: { nivel: "evitar", texto: "Teratogênica (síndrome da hidantoína); manter só se necessária, com ácido fólico." },
    alergia: [], contra: ["Bradicardia, BAV", "Monitorar ECG e PA na infusão"] },
  { id: "levetiracetam", nomes: ["Levetiracetam"], tags: [],
    ped: { dose: 60, faixa: "60 mg/kg IV (estado de mal)", intervalo: "dose única em 10–15 min", maxDose: 4500 },
    adulto: "Estado de mal: 60 mg/kg IV (máx 4.500 mg); manutenção 500–1.500 mg 12/12h",
    renal: [{ abaixo: 30, texto: "Manutenção: 250–500 mg 12/12h." }, { abaixo: 50, texto: "Manutenção: 250–750 mg 12/12h." }, { abaixo: 80, texto: "Manutenção: 500–1.000 mg 12/12h." }],
    gestacao: { nivel: "compativel", texto: "Um dos anticonvulsivantes mais seguros na gestação." },
    alergia: [], contra: [] },
  { id: "valproato", nomes: ["Valproato", "ácido valproico", "acido valproico", "divalproato"], tags: [],
    adulto: "Estado de mal: 40 mg/kg IV (máx 3.000 mg)",
    renal: [],
    gestacao: { nivel: "contraindicado", texto: "Altamente teratogênico: evitar em mulheres em idade fértil sem contracepção eficaz; contraindicado na gestação salvo exceção." },
    alergia: [], contra: ["Hepatopatia", "Doença mitocondrial"] },
  { id: "sumatriptana", nomes: ["Sumatriptana", "triptano"], tags: ["triptano", "serotoninergico"],
    adulto: "50–100 mg VO, repetir após 2 h (máx 200 mg/dia)",
    renal: [],
    gestacao: { nivel: "cautela", texto: "Dados tranquilizadores; usar se paracetamol falhar." },
    alergia: [], contra: ["Doença coronariana, AVC", "HAS não controlada"] },
  { id: "litio", nomes: ["Lítio", "carbonato de lítio", "litio"], tags: ["litio"],
    adulto: "Dose guiada por nível sérico",
    renal: [{ abaixo: 60, texto: "Reduzir dose e monitorar nível com frequência; evitar se < 30." }],
    gestacao: { nivel: "evitar", texto: "Risco de cardiopatia fetal (Ebstein); decisão especializada." },
    alergia: [], contra: ["Desidratação"] },

  /* ---------- outros ---------- */
  { id: "rifampicina", nomes: ["Rifampicina"], tags: ["indutor"],
    adulto: "Parte do esquema RHZE (dose por peso)", renal: [],
    gestacao: { nivel: "compativel", texto: "Esquema básico de TB é mantido na gestação." },
    alergia: [], contra: ["Muitas interações (indutor potente)"] },
  { id: "anticoncepcional", nomes: ["Anticoncepcional", "etinilestradiol", "contraceptivo oral"], tags: ["anticoncepcional"],
    adulto: "—", renal: [], gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." }, alergia: [], contra: ["Enxaqueca com aura, tabagismo ≥ 35 anos, TEV prévio"] },
  { id: "colchicina", nomes: ["Colchicina"], tags: ["colchicina"],
    adulto: "Crise de gota: 1 mg, depois 0,5 mg após 1 h; manutenção 0,5 mg 1–2×/dia",
    renal: [{ abaixo: 30, texto: "Reduzir dose (0,3–0,5 mg/dia) e não repetir ciclos em < 14 dias." }],
    gestacao: { nivel: "cautela", texto: "Usar com indicação (ex.: FMF)." },
    alergia: [], contra: ["Uso de claritromicina (toxicidade grave)"] },
  { id: "alopurinol", nomes: ["Alopurinol"], tags: [],
    adulto: "Iniciar 100 mg/dia e titular até ácido úrico < 6",
    renal: [{ abaixo: 30, texto: "Iniciar com 50 mg/dia e titular devagar." }, { abaixo: 60, texto: "Iniciar com 50–100 mg/dia." }],
    gestacao: { nivel: "evitar", texto: "Evitar." },
    alergia: [], contra: ["Reação cutânea grave prévia (HLA-B*5801)"] },
  { id: "adrenalina", nomes: ["Adrenalina", "epinefrina"], tags: [],
    ped: { dose: 0.01, faixa: "Anafilaxia: 0,01 mg/kg IM (solução 1 mg/mL)", intervalo: "repetir a cada 5–15 min", maxDose: 0.5 },
    apres: [{ rotulo: "ampola 1 mg/mL (IM)", mgPorMl: 1 }],
    adulto: "Anafilaxia: 0,5 mg IM no vasto lateral · PCR: 1 mg IV a cada 3–5 min",
    renal: [],
    gestacao: { nivel: "compativel", texto: "Na anafilaxia não há contraindicação: usar sem atraso." },
    alergia: [], contra: [] }
];

/* Alergias que o médico pode marcar no paciente. */
const ALERGIAS = [
  ["penicilinas", "Penicilinas"], ["cefalosporinas", "Cefalosporinas"], ["sulfonamidas", "Sulfas"],
  ["aine", "AINE / AAS"], ["dipirona", "Dipirona"], ["macrolideos", "Macrolídeos"],
  ["quinolonas", "Quinolonas"], ["opioides", "Opioides"]
];

/* Interações relevantes. a e b são ids ou tags. g: "grave" ou "moderada". */
const INTERACOES = [
  { a: ["anticoagulante"], b: ["aine", "antiagregante"], g: "grave", t: "Aumenta muito o risco de sangramento." },
  { a: ["varfarina"], b: ["smx-tmp", "metronidazol", "quinolona", "macrolideo", "azol", "amiodarona"], g: "grave", t: "Aumenta o INR e o risco de sangramento; preferir alternativa ou controlar INR em 3–5 dias." },
  { a: ["varfarina"], b: ["indutor"], g: "grave", t: "Reduz o efeito da varfarina (INR cai); ajustar com INR seriado." },
  { a: ["doac"], b: ["cyp3a4-inib"], g: "moderada", t: "Aumenta o nível do anticoagulante; avaliar dose e sangramento." },
  { a: ["doac"], b: ["indutor"], g: "grave", t: "Reduz muito o nível do anticoagulante; evitar associação." },
  { a: ["aine"], b: ["iecabra", "diuretico"], g: "moderada", t: "Risco de lesão renal aguda e hipercalemia (pior com IECA/BRA + diurético + AINE)." },
  { a: ["aine"], b: ["isrs"], g: "moderada", t: "Aumenta o risco de sangramento digestivo; considerar IBP." },
  { a: ["aine"], b: ["corticoide"], g: "moderada", t: "Aumenta o risco de úlcera e sangramento digestivo." },
  { a: ["aine"], b: ["litio"], g: "grave", t: "Aumenta o nível de lítio (toxicidade)." },
  { a: ["iecabra"], b: ["litio"], g: "grave", t: "Aumenta o nível de lítio." },
  { a: ["iecabra"], b: ["poupador-k", "smx-tmp"], g: "grave", t: "Risco de hipercalemia grave; dosar K." },
  { a: ["qt"], b: ["qt"], g: "moderada", t: "Somam prolongamento do QT; ECG se fatores de risco (hipocalemia, cardiopatia)." },
  { a: ["claritromicina"], b: ["estatina-3a4"], g: "grave", t: "Rabdomiólise: sinvastatina é contraindicada; suspender a estatina durante o curso ou trocar o antibiótico." },
  { a: ["claritromicina"], b: ["colchicina"], g: "grave", t: "Toxicidade grave por colchicina; evitar." },
  { a: ["azol"], b: ["estatina-3a4"], g: "moderada", t: "Aumenta o nível da estatina (miopatia)." },
  { a: ["azol"], b: ["sulfonilureia"], g: "moderada", t: "Risco de hipoglicemia." },
  { a: ["amiodarona"], b: ["sinvastatina"], g: "moderada", t: "Limitar sinvastatina a 20 mg/dia." },
  { a: ["amiodarona", "claritromicina"], b: ["digoxina"], g: "grave", t: "Aumenta o nível de digoxina; reduzir a dose e monitorar." },
  { a: ["tramadol"], b: ["isrs"], g: "grave", t: "Síndrome serotoninérgica e redução do limiar convulsivo." },
  { a: ["triptano"], b: ["isrs"], g: "moderada", t: "Risco (baixo) de síndrome serotoninérgica; orientar sintomas." },
  { a: ["opioide"], b: ["benzo"], g: "grave", t: "Depressão respiratória; evitar associação ou monitorar de perto." },
  { a: ["quinolona", "tetraciclina", "levotiroxina"], b: ["ferro", "calcio"], g: "moderada", t: "Quelação reduz a absorção: separar as tomadas (2 h antes ou 4–6 h depois)." },
  { a: ["levotiroxina"], b: ["ibp"], g: "moderada", t: "Reduz a absorção da levotiroxina; checar TSH." },
  { a: ["clopidogrel"], b: ["ibp-cyp2c19"], g: "moderada", t: "Omeprazol/esomeprazol reduzem o efeito do clopidogrel; preferir pantoprazol." },
  { a: ["nitrato"], b: ["pde5"], g: "grave", t: "Hipotensão grave: contraindicado (sildenafil < 24 h, tadalafila < 48 h)." },
  { a: ["indutor"], b: ["anticoncepcional"], g: "grave", t: "Falha contraceptiva: usar método adicional (preservativo) ou DIU." },
  { a: ["metronidazol"], b: ["varfarina"], g: "grave", t: "Aumenta muito o INR." }
];

/* ---------- utilidades ---------- */
const normTxt = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const MED_POR_ID = Object.fromEntries(MEDICAMENTOS.map(m => [m.id, m]));
const casaRegra = (m, chaves) => chaves.some(k => k === m.id || (m.tags || []).includes(k));

/* Medicamentos citados numa ficha (tratamento + prescrição + texto geral). */
function medicamentosDaFicha(f) {
  const partes = [JSON.stringify(f.tratamento || []), JSON.stringify(f.prescricao || {}), (f.conduta || []).join(" "), (f.condutaInicial || []).join(" "), JSON.stringify(f.passos || []), (f.materiais || []).join(" ")];
  const texto = normTxt(partes.join(" "));
  // Palavra inteira (ex.: "adrenalina" não casa com "noradrenalina").
  const escRe = x => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return MEDICAMENTOS.filter(m => m.nomes.some(n => new RegExp(`(^|[^a-z0-9])${escRe(normTxt(n))}($|[^a-z0-9])`).test(texto)));
}

function faixaRenal(m, clcr) {
  if (clcr === null || clcr === undefined || !m.renal || !m.renal.length) return null;
  return m.renal.find(r => clcr < r.abaixo) || null;
}

/* Interações entre um medicamento e a lista de medicações em uso. */
function interacoesCom(m, emUso) {
  const achadas = [];
  for (const outro of emUso) {
    if (outro.id === m.id) continue;
    for (const r of INTERACOES) {
      if ((casaRegra(m, r.a) && casaRegra(outro, r.b)) || (casaRegra(m, r.b) && casaRegra(outro, r.a)))
        achadas.push({ com: outro, ...r });
    }
  }
  return achadas;
}

/* Alergia direta e reatividade cruzada relevante. */
function alertasAlergia(m, alergias) {
  const out = [];
  (m.alergia || []).forEach(a => { if (alergias.includes(a)) out.push({ g: "grave", t: `Paciente com alergia a ${nomeAlergia(a)}: contraindicado.` }); });
  const tags = m.tags || [];
  if (alergias.includes("penicilinas") && tags.includes("cefalosporina"))
    out.push({ g: "moderada", t: tags.includes("cadeia-aminopenicilina")
      ? "Alergia a penicilina: cefalexina tem cadeia lateral semelhante à da amoxicilina; evitar se reação grave/IgE."
      : "Alergia a penicilina: reatividade cruzada baixa com cefalosporinas de 3ª geração; evitar se anafilaxia, usar com cautela nas demais." });
  if (alergias.includes("aine") && m.id === "dipirona") out.push({ g: "moderada", t: "Alergia a AINE: possível reação cruzada com dipirona em pacientes com doença respiratória exacerbada por AINE." });
  if (alergias.includes("sulfonamidas") && (tags.includes("diuretico") || tags.includes("sulfonilureia")) && !(m.alergia || []).includes("sulfonamidas"))
    out.push({ g: "moderada", t: "Alergia a sulfa antimicrobiana: reação cruzada com sulfas não antimicrobianas é rara." });
  return out;
}
const nomeAlergia = id => (ALERGIAS.find(a => a[0] === id) || [id, id])[1].toLowerCase();

/* Dose por peso. Retorna null se o medicamento não tem dose em mg/kg ou falta o peso. */
function calcularDose(m, peso, doseKg) {
  if (!m.ped || !peso) return null;
  const d = doseKg ?? m.ped.dose;
  let porDose, porDia, limitado = false;
  if (m.ped.porDia) {
    porDia = d * peso;
    if (m.ped.maxDia && porDia > m.ped.maxDia) { porDia = m.ped.maxDia; limitado = true; }
    porDose = porDia / (m.ped.divisoes || 1);
  } else {
    porDose = d * peso;
  }
  if (m.ped.maxDose && porDose > m.ped.maxDose) { porDose = m.ped.maxDose; limitado = true; }
  if (m.ped.minDose && porDose < m.ped.minDose) porDose = m.ped.minDose;
  if (m.ped.maxDiaKg && !m.ped.porDia) {
    const vezes = m.ped.vezesDia || 4;
    const teto = Math.min(m.ped.maxDiaKg * peso, m.ped.maxDia || Infinity) / vezes;
    if (porDose > teto) { porDose = teto; limitado = true; }
  }
  return { porDose, porDia: m.ped.porDia ? porDose * (m.ped.divisoes || 1) : null, limitado, doseKg: d };
}

function faixaFixa(m, peso, idadeAnos) {
  if (m.porPeso && peso) return (m.porPeso.find(f => peso <= f.maxKg) || {}).texto || null;
  if (m.porIdade && idadeAnos !== null && idadeAnos !== undefined) return (m.porIdade.find(f => idadeAnos < f.maxAnos) || {}).texto || null;
  return null;
}

if (typeof module !== "undefined") module.exports = { MEDICAMENTOS, INTERACOES, calcularDose, interacoesCom, alertasAlergia, faixaRenal, medicamentosDaFicha, MED_POR_ID };
